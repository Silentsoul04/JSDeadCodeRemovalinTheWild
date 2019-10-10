(function() {
    // payload delivery

    if (!window.celtra)
        window.celtra = {};
    if (!window.celtra.payloads)
        window.celtra.payloads = {};

    window.celtra.payloads["https://cache-ssl.celtra.com/api/creatives/46f4a037/compiled/mraid-ad.js?v=14-e62791e034&secure=1&cachedVariantChoices=W10-&eventMetadataExperiment=newMeta&inmobi=0"] = function(script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl) {
        function inherit(e, t) {
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, Object.defineProperties(e, {
                uber: {
                    get: function() {
                        return t.prototype
                    },
                    enumerable: !1,
                    configurable: !1
                },
                uberConstructor: {
                    get: function() {
                        return t
                    },
                    enumerable: !1,
                    configurable: !1
                }
            }), e.prototype.constructor = e
        }

        function extend(e, t) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                if (t instanceof Object)
                    for (var r in t) e[r] = t[r]
            }
            return e
        }

        function deep(e, t) {
            for (var n in t) e[n] instanceof Object && t[n] instanceof Object ? deep(e[n], t[n]) : e[n] = t[n]
        }

        function delayed(e, t) {
            var n = null;
            return function() {
                n && clearTimeout(n), n = setTimeout(e, t)
            }
        }

        function throttled(e, t) {
            var n = null;
            return function() {
                n || (n = setTimeout(function() {
                    n = null, e()
                }, t))
            }
        }

        function deferred(e, t, n, r) {
            return function() {
                defer(e, t, n, r)
            }
        }

        function useAsap() {
            return "undefined" != typeof creative && creative.adapter && creative.adapter.useAsap || "undefined" != typeof adapter && adapter.useAsap
        }

        function hasClass(e, t) {
            return -1 != (" " + e.className + " ").indexOf(" " + t + " ")
        }

        function addClass(e, t) {
            hasClass(e, t) || (e.className += " " + t)
        }

        function removeClass(e, t) {
            e.className = e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " ")
        }

        function toggleClass(e, t) {
            hasClass(e, t) ? removeClass(e, t) : addClass(e, t)
        }

        function cssurl(e) {
            return "url('" + e.replace(/'/g, "\\'") + "')"
        }

        function camelize(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }

        function ucfirst(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function zeroPad(e, t) {
            null == t && (t = 2);
            var n = Math.max(0, t - ("" + e).length),
                r = ("" + Math.pow(10, n)).slice(1);
            return r + e
        }

        function htmlentitize(e) {
            return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function removeHtmlTags(e) {
            var t, n = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*",
                r = new RegExp("<(?:!--(?:(?:-*[^->])*--+|-?)|script\\b" + n + ">[\\s\\S]*?</script\\s*|style\\b" + n + ">[\\s\\S]*?</style\\s*|/?[a-z]" + n + ")>", "gi");
            do t = e, e = e.replace(r, ""); while (e !== t);
            return e.replace(/</g, "&lt;")
        }

        function trim(e) {
            return e.replace(/^\s+|\s+$/g, "")
        }

        function to_utf8(e) {
            return unescape(encodeURIComponent(e))
        }

        function randInt() {
            return (Math.random() + "").slice(2)
        }

        function _isListenerOptionSupported(e) {
            var t = _isListenerOptionSupported.opts;
            if ("undefined" == typeof t[e]) {
                t[e] = !1;
                try {
                    window.addEventListener("listener-test", null, Object.defineProperty({}, e, {
                        get: function() {
                            t[e] = !0
                        }
                    }))
                } catch (n) {}
            }
            return t[e]
        }

        function _buildNativeListenerOptions(e) {
            if ("object" != typeof e) return !!e;
            if (!_isListenerOptionSupported("capture")) return !!e.capture;
            var t = {
                capture: !!e.capture
            };
            return _isListenerOptionSupported("passive") && (t.passive = !!e.passive), t
        }

        function _analyzeTouch(e) {
            var t, n = Math.abs(e.firstTouch.x - e.lastTouch.x),
                r = Math.abs(e.firstTouch.y - e.lastTouch.y);
            return "y" === e.validAxis ? t = r > e.minDistanceForSwipe : "x" === e.validAxis && (t = n > e.minDistanceForSwipe), {
                isHorizontal: n > r,
                isConsideredSwipe: t
            }
        }

        function attach(e, t, n, r) {
            var o = getEventNames()[t.toLowerCase()] || t;
            e.addEventListener(o, n, _buildNativeListenerOptions(r))
        }

        function detach(e, t, n, r) {
            var o = getEventNames()[t.toLowerCase()] || t;
            e.removeEventListener(o, n, _buildNativeListenerOptions(r))
        }

        function once(e, t, n, r) {
            attach(e, t, function o() {
                detach(e, t, o, r), n.apply(this, arguments)
            }, r)
        }

        function trigger(e, t, n, r) {
            var o = document.createEvent("HTMLEvents");
            o.initEvent(t, n, r);
            var i = "on" + ucfirst(t);
            return "function" == typeof e[i] && e[i](), e.dispatchEvent(o)
        }

        function fakeclick(e, t) {
            t = t || window;
            var n = t.document.createElement("a");
            n.cssText = "visibility: hidden", n.addEventListener("click", function(t) {
                e(), t.preventDefault(), t.stopPropagation(), n.parentNode.removeChild(n)
            }, !0), t.document.body.appendChild(n);
            var r = document.createEvent("MouseEvents");
            r.initEvent("click", !0, !0), n.dispatchEvent(r)
        }

        function fakeClickAhrefBlank(e, t, n) {
            t = t || noop, n = n || window;
            var r = n.document.createElement("a");
            r.style.cssText = "visibility: hidden", r.setAttribute("href", e), r.setAttribute("target", "_blank"), r.addEventListener("click", function(e) {
                e.stopPropagation(), t(), r.parentNode.removeChild(r)
            }, !0), n.document.body.appendChild(r);
            var o = n.document.createEvent("MouseEvents");
            o.initEvent("click", !0, !0), r.dispatchEvent(o)
        }

        function noop() {}

        function nullai(e, t) {
            t && t()
        }

        function retTrue() {
            return !0
        }

        function retFalse() {
            return !1
        }

        function offset(e) {
            var t = e.getBoundingClientRect(),
                n = e.ownerDocument,
                r = n.documentElement,
                o = n.defaultView;
            return {
                top: t.top + (o.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                left: t.left + (o.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
            }
        }

        function addCssRule(e, t, n) {
            var r = document.createElement("style");
            r.textContent = e + " {" + t + "}", n ? n.document.getElementsByTagName("head")[0].appendChild(r) : document.getElementsByTagName("head")[0].appendChild(r)
        }

        function redrawAndroidIframe() {
            var e = document.createElement("style");
            document.body.appendChild(e), document.body.removeChild(e)
        }

        function parseQuery(e) {
            var t = {};
            return e = e.replace(/\&$/, "").replace(/\+/g, "%20"), e.split("&").forEach(function(e) {
                var n = e.split("=").map(decodeURIComponent);
                t[n[0]] = n[1]
            }), t
        }

        function buildQuery(e) {
            var t = [];
            for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }

        function postBlob(e, t) {
            var n = new XMLHttpRequest;
            n.open("POST", creative.apiUrl + "blobs?base64=1"), n.setRequestHeader("Content-Type", "application/octet-stream"), n.onreadystatechange = function() {
                4 === n.readyState && t(n.responseText, n.status)
            }, n.send(e)
        }

        function tmpl(e, t) {
            function n(e) {
                return "  p.push('" + e.replace(/'/g, "\\'").split(/\r?\n/g).join("\\n');\n  p.push('") + "');\n"
            }
            if (!e) return "";
            var r;
            if (-1 == e.indexOf("<%")) r = function() {
                return e
            };
            else {
                var o = e.split(/<%\s*|\s*%>/g),
                    i = "var p = []; with(o) {\n",
                    a = !1;
                o.forEach(function(e) {
                    a ? i += "=" == e[0] ? "  p.push(" + e.replace(/^=\s*|\s*$/g, "") + ");\n" : "  " + e + "\n" : e && (i += n(e)), a = !a
                }), i += '} return p.join("");';
                try {
                    r = new Function("o", i)
                } catch (c) {
                    var u = new Error("Cannot parse template! (see `template` property)");
                    throw u.template = i, u
                }
            }
            return t ? r(t) : r
        }

        function flash() {
            var e = document.createElement("div");
            e.style.background = "white", e.style.opacity = .005, e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.width = "100%", e.style.height = "100%", e.style.zIndex = 2147483647, document.body.appendChild(e), setTimeout(function() {
                e.parentNode.removeChild(e)
            }, 0)
        }

        function crc32(e) {
            "use strict";
            var t = -1,
                n = 0,
                r = [0, -227835133, -516198153, 324072436, -946170081, 904991772, 648144872, -724933397, -1965467441, 2024987596, 1809983544, -1719030981, 1296289744, -1087877933, -1401372889, 1578318884, 274646895, -499825556, -244992104, 51262619, -675000208, 632279923, 922689671, -996891772, -1702387808, 1760304291, 2075979607, -1982370732, 1562183871, -1351185476, -1138329528, 1313733451, 549293790, -757723683, -1048117719, 871202090, -416867903, 357341890, 102525238, -193467851, -1436232175, 1477399826, 1264559846, -1187764763, 1845379342, -1617575411, -1933233671, 2125378298, 820201905, -1031222606, -774358714, 598981189, -143008082, 85089709, 373468761, -467063462, -1170599554, 1213305469, 1526817161, -1452612982, 2107672161, -1882520222, -1667500394, 1861252501, 1098587580, -1290756417, -1606390453, 1378610760, -2032039261, 1955203488, 1742404180, -1783531177, -878557837, 969524848, 714683780, -655182201, 205050476, -28094097, -318528869, 526918040, 1361435347, -1555146288, -1340167644, 1114974503, -1765847604, 1691668175, 2005155131, -2047885768, -604208612, 697762079, 986182379, -928222744, 476452099, -301099520, -44210700, 255256311, 1640403810, -1817374623, -2130844779, 1922457750, -1503918979, 1412925310, 1197962378, -1257441399, -350237779, 427051182, 170179418, -129025959, 746937522, -554770511, -843174843, 1070968646, 1905808397, -2081171698, -1868356358, 1657317369, -1241332974, 1147748369, 1463399397, -1521340186, -79622974, 153784257, 444234805, -401473738, 1021025245, -827320098, -572462294, 797665321, -2097792136, 1889384571, 1674398607, -1851340660, 1164749927, -1224265884, -1537745776, 1446797203, 137323447, -96149324, -384560320, 461344835, -810158936, 1037989803, 781091935, -588970148, -1834419177, 1623424788, 1939049696, -2114449437, 1429367560, -1487280117, -1274471425, 1180866812, 410100952, -367384613, -112536529, 186734380, -538233913, 763408580, 1053836080, -860110797, -1572096602, 1344288421, 1131464017, -1323612590, 1708204729, -1749376582, -2065018290, 1988219213, 680717673, -621187478, -911630946, 1002577565, -284657034, 493091189, 238226049, -61306494, -1307217207, 1082061258, 1395524158, -1589280451, 1972364758, -2015074603, -1800104671, 1725896226, 952904198, -894981883, -638100751, 731699698, -11092711, 222117402, 510512622, -335130899, -1014159676, 837199303, 582374963, -790768336, 68661723, -159632680, -450051796, 390545967, 1230274059, -1153434360, -1469116676, 1510247935, -1899042540, 2091215383, 1878366691, -1650582816, -741088853, 565732008, 854102364, -1065151905, 340358836, -433916489, -177076669, 119113024, 1493875044, -1419691417, -1204696685, 1247431312, -1634718085, 1828433272, 2141937292, -1916740209, -483350502, 291187481, 34330861, -262120466, 615137029, -691946490, -980332558, 939183345, 1776939221, -1685949482, -1999470558, 2058945313, -1368168502, 1545135305, 1330124605, -1121741762, -210866315, 17165430, 307568514, -532767615, 888469610, -962626711, -707819363, 665062302, 2042050490, -1948470087, -1735637171, 1793573966, -1104306011, 1279665062, 1595330642, -1384295599];
            for (n = 0; n < e.length; n++) t = t >>> 8 ^ r[255 & (t ^ e.charCodeAt(n))];
            return (-1 ^ t) >>> 0
        }

        function isArray(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function isDefAndNotNull(e) {
            return null != e
        }

        function updateQueryStringParameter(e, t, n) {
            t = encodeURIComponent(t), n = encodeURIComponent(n);
            var r = new RegExp("([?|&])" + t + "=.*?(&|$)", "i");
            return separator = -1 !== e.indexOf("?") ? "&" : "?", e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e + separator + t + "=" + n
        }

        function fetchShortenedUrl(e, t, n) {
            function r(t, n) {
                i[e].forEach(function(e) {
                    e[t](n)
                }), delete i[e]
            }
            n = n || noop;
            var o = !1,
                i = fetchShortenedUrl.inProgress,
                a = fetchShortenedUrl.cache;
            if ("http" == !e.slice(0, 4)) return void n();
            if (a[e]) return void defer(function() {
                t(a[e])
            }, 0, "fetchShortenedUrl defer success callback");
            if (i[e] || (i[e] = [], o = !0), i[e].push({
                    success: t,
                    error: n
                }), o) {
                var c = (creative.runtimeParams.secure ? creative.cachedApiUrl : creative.insecureCachedApiUrl) + "shortenedUrls/",
                    u = {
                        url: e,
                        fields: "shortUrlKey"
                    },
                    s = btoa(to_utf8(e));
                s = s.replace(/\//g, "$").replace(/\+/g, "_").replace(/=/g, "");
                var d = {
                    cbName: "shortener_" + s
                };
                loadJSONP(c + "?" + buildQuery(u), d, function(t) {
                    var n = creative.shareUrl + t.shortUrlKey;
                    a[e] = n, r("success", n)
                }, function() {
                    requestCreateShortenedUrl(e, r)
                })
            }
        }

        function requestCreateShortenedUrl(e, t) {
            var n = (creative.runtimeParams.secure ? creative.apiUrl : creative.insecureApiUrl) + "shortenedUrls/",
                r = fetchShortenedUrl.cache,
                o = new XMLHttpRequest;
            o.open("POST", n), o.setRequestHeader("Content-Type", "application/json; charset=utf-8"), o.onreadystatechange = function() {
                if (4 === o.readyState)
                    if (201 === o.status) {
                        var n = JSON.parse(o.responseText),
                            i = creative.shareUrl + n.shortUrlKey;
                        r[e] = i, t("success", i)
                    } else t("error")
            }, o.send(JSON.stringify({
                url: e
            }))
        }

        function isMediaPlaying(e) {
            try {
                return e.currentTime > 0 && !e.paused && !e.ended
            } catch (t) {
                return !1
            }
        }

        function merge() {
            var e, t, n = {};
            for (t = 0; t < arguments.length; t += 1)
                if (e = arguments[t], null !== e && void 0 !== e)
                    for (var r in e) n[r] = e[r];
            return n
        }

        function clamp(e, t, n) {
            return Math.max(e, Math.min(t, n))
        }

        function lerp(e, t, n) {
            return e + n * (t - e)
        }

        function map(e, t, n, r, o) {
            return (o - e) / (t - e) * (r - n) + n
        }

        function step(e, t) {
            return e > t ? 0 : 1
        }

        function pulse(e, t, n) {
            return step(e, n) - step(t, n)
        }

        function smoothstep(e, t, n) {
            var r = clamp(0, 1, (n - e) / (t - e));
            return r * r * r * ((6 * r - 15) * r + 10)
        }

        function bump(e, t, n) {
            var r = clamp(0, 1, (n - e) / (t - e));
            return (Math.cos(Math.PI * r) + 1) / 2
        }

        function getWindowNesting(e) {
            var t = {
                iframe: e !== e.top,
                friendlyIframe: !1,
                iabFriendlyIframe: !1,
                hostileIframe: !1,
                iframeDepth: 0
            };
            if (t.iframe) {
                var n = e;
                try {
                    for (t.friendlyIframe = !!e.top.location.href, t.iabFriendlyIframe = t.friendlyIframe && "undefined" != typeof e.inDapIF && e.inDapIF;
                        "undefined" != typeof n.parent.location.href && n.parent.document !== n.document;) n = n.parent, t.iframeDepth++;
                    "undefined" == typeof e.top.document && (t.hostileIframe = !0)
                } catch (r) {
                    t.hostileIframe = !0
                }
            }
            return t
        }

        function isFetchSupported() {
            return !!(window.fetch && window.URL && URL.createObjectURL)
        }

        function isBeaconSupported() {
            return !(!window.navigator || !window.navigator.sendBeacon)
        }

        function isNativeImplementation(e) {
            return "function" == typeof e && e.toString().indexOf("[native code]") > -1
        }! function(e) {
            if (!this.defer) {
                try {
                    for (;
                        "undefined" != typeof e.parent.location.href && e.parent.document !== e.document;) e = e.parent
                } catch (t) {}
                var n = function() {
                    function t() {
                        return 9007199254740991 === s ? 0 : ++s
                    }
                    var n, r, o, i, a = e,
                        c = "function" == typeof a.setImmediate;
                    if (a.MutationObserver) return function(e) {
                        n = document.createElement("div"), new MutationObserver(function() {
                            e(), n = null
                        }).observe(n, {
                            attributes: !0
                        }), n.setAttribute("i", "1")
                    };
                    if (!c && a.postMessage && !a.importScripts && a.addEventListener) {
                        var u = "com.setImmediate" + Math.random(),
                            s = 0;
                        i = {};
                        var d = function(e) {
                            if (e.source === a && 0 === e.data.indexOf(u)) {
                                var t = e.data.split(":")[1];
                                i[t](), delete i[t]
                            }
                        };
                        return a.addEventListener("message", d, !1),
                            function(e) {
                                var n = t();
                                i[n] = e, a.postMessage(u + ":" + n, "*")
                            }
                    }
                    return !c && a.document && "onreadystatechange" in document.createElement("script") ? function(e) {
                        r = document.createElement("script"), r.onreadystatechange = function() {
                            r.onreadystatechange = null, r.parentNode.removeChild(r), r = null, e()
                        }, document.body.appendChild(r)
                    } : (o = c && setImmediate || setTimeout, function(e) {
                        o(e)
                    })
                }();
                this.defer = function(t, r, o, i) {
                    var a, c = 0 | r;
                    if (o) {
                        var u;
                        "undefined" != typeof defer.perf ? u = defer.perf : "undefined" != typeof creative ? u = creative.perf : "undefined" != typeof perf && (u = perf), u && (u._stopTrackingDefers || (a = u.start("defer", {
                            deferId: o,
                            delay: c
                        })))
                    }
                    if (t) {
                        var s = function() {
                            a && a.end(), t()
                        };
                        i ? n(s) : e.setTimeout(s, c)
                    }
                }
            }
        }(window), Function.prototype.bind || Object.defineProperty(Function.prototype, "bind", {
                value: function(e) {
                    var t = this;
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
            }),
            function(e) {
                e.getEventNames = function() {
                    var t = {};
                    return "WebKitAnimationEvent" in e && (t.animationstart = "webkitAnimationStart", t.animationiteration = "webkitAnimationIteration", t.animationend = "webkitAnimationEnd"), "WebKitTransitionEvent" in e && (t.transitionend = "webkitTransitionEnd"), t
                }
            }(window), _isListenerOptionSupported.opts = {};
        var getTimestamp = function() {
            return void 0 === window.performance || void 0 === window.performance.now ? Date.now : window.performance.now.bind(window.performance)
        }();
        Date.now || (Date.now = function() {
                return +new Date
            }), Array.prototype.waitForEach || Object.defineProperty(Array.prototype, "waitForEach", {
                value: function(e, t, n) {
                    var r = this.length;
                    r ? this.forEach(function(o, i, a) {
                        var c = !1;
                        e.call(n, o, function() {
                            if (c) throw "Called `done` multiple times for element " + i;
                            c = !0, --r || t()
                        }, i, a)
                    }, n) : t()
                }
            }),
            function(e) {
                e.loadJS = function(t, n, r, o) {
                    var i = e.loadJS.externals,
                        a = {
                            success: n || noop,
                            error: r || noop
                        };
                    if (!/^[A-Za-z0-9]*:\/\/|^\/\//.test(t)) {
                        var c = creative.hostedFiles.filter(function(e) {
                            return e.filepath === t
                        })[0];
                        if ("undefined" == typeof c) return console.warn('Hosted file "' + t + '" was not found.'), void a.error();
                        if (c.loaded !== !1) return console.warn('Hosted file "' + t + '" is already loaded.'), void setTimeout(a.success, 0);
                        c.loaded = !0, t = creative.cachedApiUrl + "hostedFiles/" + creative.id + "/" + creative.version + "/" + t
                    }
                    if (t in i && !o) i[t].loaded ? setTimeout(a.success, 0) : i[t].cbs.push(a);
                    else {
                        i[t] = {
                            cbs: [a]
                        };
                        var u = document.createElement("script");
                        u.type = "text/javascript", u.onload = function() {
                            i[t].loaded = !0, i[t].cbs.forEach(function(e) {
                                e.success()
                            }), i[t].cbs = []
                        }, u.onerror = function() {
                            i[t].cbs.forEach(function(e) {
                                e.error()
                            }), i[t].cbs = [], delete i[t]
                        }, u.src = t, e.loadJS.appendToRoot(u)
                    }
                }, e.loadJS.externals = {}, e.loadJS.appendToRoot = function(e) {
                    return document.querySelector("head").appendChild(e)
                }, e.loadJSONP = function(t, n, r, o) {
                    "function" == typeof n && (o = r, r = n, n = {});
                    var i = n.cbName || "__jsonp" + randInt();
                    t += (-1 == t.indexOf("?") ? "?" : "&") + (n.paramName || "jsonp") + "=" + i, e[i] = function(t) {
                        r(t), delete e[i]
                    }, loadJS(t, noop, o, !0)
                }
            }(window), "undefined" == typeof Function.prototype.name && ! function() {
                var e = /^function\s+(\w+?)\s*?\(/;
                Object.defineProperty(Function.prototype, "name", {
                    get: function() {
                        var t = this.constructor.prototype.toString.call(this);
                        return e.test(t) ? t.match(e)[1] : ""
                    }
                })
            }(), fetchShortenedUrl.cache = {}, fetchShortenedUrl.inProgress = {};;

        function CTickerQueue() {
            this._queue = [], this._i = this.length
        }
        Object.defineProperty(CTickerQueue.prototype, "length", {
            get: function() {
                return this._queue.length
            }
        }), CTickerQueue.filterNulls = function(e) {
            return null !== e
        }, CTickerQueue.prototype._removeNulls = function() {
            this._queue = this._queue.filter(CTickerQueue.filterNulls)
        }, CTickerQueue.prototype.process = function(e) {
            if (this.length) {
                for (this._i = 0; this._i < this.length; this._i++) this._queue[this._i] && this._queue[this._i](e);
                this._removeNulls()
            }
        }, CTickerQueue.prototype.add = function(e) {
            this._queue.indexOf(e) < 0 && this._queue.push(e)
        }, CTickerQueue.prototype.remove = function(e) {
            var t = this._queue.indexOf(e);
            ~t && (this._queue[t] = null)
        }, CTickerQueue.prototype.empty = function() {
            this.length && (this._queue.length = 0)
        };;

        function CTicker(e, t) {
            this._win = t || window, this.raf = e.environment && e.isNative && !e.isRequestAnimationFrameBroken && !this._isDeviceUserAgentBlacklisted ? e.environment : e.polyfill, this._queues = {
                update: new CTickerQueue,
                nextUpdate: new CTickerQueue,
                render: new CTickerQueue,
                nextRender: new CTickerQueue,
                next: new CTickerQueue
            }, this._tick = this._tick.bind(this), this.raf.nextFrame(this._tick)
        }
        Object.defineProperty(CTicker.prototype, "_isDeviceUserAgentBlacklisted", {
            get: function() {
                var e = this._win.navigator.userAgent,
                    t = ["RAZR HD", "SOL23", "LG-D855", "LG-D851", "LG-D850", "LG-D852", "LGLS990", "LGUS990", "VS985 4G"];
                return t.some(function(t) {
                    return e.indexOf(t) > -1
                })
            }
        }), CTicker.prototype.stop = function() {
            try {
                this._queues.update.empty(), this._queues.render.empty()
            } finally {
                this.raf.cancelFrame(this._tick)
            }
        }, CTicker.prototype._tick = function(e) {
            try {
                this._queues.update.process(e), this._queues.nextUpdate.process(e), this._queues.render.process(e), this._queues.nextRender.process(e), this._queues.next.process(e), this._queues.next.empty(), this._queues.nextRender.empty(), this._queues.nextUpdate.empty()
            } finally {
                this.raf.nextFrame(this._tick)
            }
        }, CTicker.prototype.frame = function(e, t) {
            t = t || "render", this._queues[t].add(e)
        }, CTicker.prototype.removeFrame = function(e, t) {
            t = t || "render", this._queues[t].remove(e)
        };;

        function RequestAnimationFrameWrapper(e) {
            this._lastTime = 0, this._win = e, this._createRAFWrapper = this._createRAFWrapper.bind(this), this._createCAFWrapper = this._createCAFWrapper.bind(this);
            var t = this._extractFromWindow(this._win),
                r = this._createPolyfill();
            this.environment = this._wrapRafAndCaf(t), this.polyfill = this._wrapRafAndCaf(r), this.isNative = !!t && this._isNative(t.nextFrame)
        }
        Object.defineProperty(RequestAnimationFrameWrapper.prototype, "isRequestAnimationFrameBroken", {
            get: function() {
                var e = getWindowNesting(this._win);
                return deviceInfo.browser.firefox() && e.hostileIframe ? !0 : !1
            }
        }), RequestAnimationFrameWrapper.prototype._extractFromWindow = function(e) {
            var t = e.requestAnimationFrame || null,
                r = e.cancelAnimationFrame || null;
            return ["ms", "moz", "webkit", "o"].forEach(function(n) {
                t = t || e[n + "RequestAnimationFrame"] || null, r = r || e[n + "CancelAnimationFrame"] || e[n + "CancelRequestAnimationFrame"] || null
            }), {
                nextFrame: t,
                cancelFrame: r
            }
        }, RequestAnimationFrameWrapper.prototype._createPolyfill = function() {
            var e = this,
                t = function(t) {
                    var r = getTimestamp(),
                        n = Math.max(0, 16 - (r - e._lastTime)),
                        i = e._win.setTimeout(function() {
                            t(r + n)
                        }, n);
                    return e._lastTime = r + n, i
                },
                r = function(t) {
                    e._win.clearTimeout(t)
                };
            return {
                nextFrame: t,
                cancelFrame: r
            }
        }, RequestAnimationFrameWrapper.prototype._isNative = function(e) {
            return !!(e && Function.prototype.toString.call(e).indexOf("[native code]") > -1)
        }, RequestAnimationFrameWrapper.prototype._wrapRafAndCaf = function(e) {
            return e && e.nextFrame && e.cancelFrame ? {
                nextFrame: this._createRAFWrapper(e.nextFrame),
                cancelFrame: this._createCAFWrapper(e.cancelFrame)
            } : null
        }, RequestAnimationFrameWrapper.prototype._createRAFWrapper = function(e) {
            return function(t) {
                return e.call(this._win, t)
            }.bind(this)
        }, RequestAnimationFrameWrapper.prototype._createCAFWrapper = function(e) {
            return function(t) {
                e.call(this._win, t)
            }.bind(this)
        };;

        function CPoint(t, i) {
            this.x = 1 * t || 0, this.y = 1 * i || 0
        }

        function CRect(t, i, e, o) {
            this.left = 1 * t || 0, this.top = 1 * i || 0, this.width = 1 * e || 0, this.height = 1 * o || 0
        }
        CPoint.offset = function(t) {
            var i = offset(t);
            return new CPoint(i.left, i.top)
        }, CPoint.convertPointFromNodeToPage = function(t, i) {
            if (!t || "undefined" != typeof t.x) return null;
            var e = CPoint.offset(t);
            return new CPoint((i ? i.x : 0) + (e ? e.x : 0), (i ? i.y : 0) + (e ? e.y : 0))
        }, CPoint.convertPointFromPageToNode = function(t, i) {
            if (!t || "undefined" != typeof t.x) return null;
            var e = CPoint.offset(t);
            return new CPoint((i ? i.x : 0) - (e ? e.x : 0), (i ? i.y : 0) - (e ? e.y : 0))
        }, CPoint.sample = function(t, i, e) {
            for (var o = Math.floor(Math.sqrt(t.width * i / t.height)), n = Math.floor(Math.sqrt(t.height * i / t.width)), h = t.width / o, r = t.height / n, s = 0; n > s; s++)
                for (var f = 0; o > f; f++) e((f + .5) * h + t.left, (s + .5) * r + t.top)
        }, CPoint.epsilon = function(t, i, e) {
            return Math.abs(t - i) < e
        }, CPoint.prototype.equals = function(t) {
            return CPoint.epsilon(this.x, t.x, .25) && CPoint.epsilon(this.y, t.y, .25)
        }, CRect.ZERO = new CRect, Object.defineProperties(CRect.prototype, {
            right: {
                get: function() {
                    return this.left + this.width
                },
                set: function(t) {
                    var i = this.left;
                    t < this.left && (this.left = t, t = i), this.width = t - this.left
                },
                enumerable: !0
            },
            bottom: {
                get: function() {
                    return this.top + this.height
                },
                set: function(t) {
                    var i = this.top;
                    t < this.top && (this.top = t, t = i), this.height = t - this.top
                },
                enumerable: !0
            },
            tl: {
                get: function() {
                    return new CPoint(this.left, this.top)
                }
            },
            tr: {
                get: function() {
                    return new CPoint(this.right, this.top)
                }
            },
            bl: {
                get: function() {
                    return new CPoint(this.left, this.bottom)
                }
            },
            br: {
                get: function() {
                    return new CPoint(this.right, this.bottom)
                }
            },
            area: {
                get: function() {
                    return this.width * this.height
                }
            }
        }), CRect.adopt = function(t) {
            return new CRect(t.left, t.top, t.width, t.height)
        }, CRect.prototype.zero = function() {
            return 0 === this.area
        }, CRect.prototype.intersect = function(t) {
            if (!t) return !1;
            var i = Math.max(this.left, t.left),
                e = Math.max(this.top, t.top),
                o = Math.min(this.right, t.right),
                n = Math.min(this.bottom, t.bottom),
                h = o - i,
                r = n - e;
            return 0 > h || 0 > r ? CRect.ZERO : new CRect(i, e, h, r)
        }, CRect.prototype.copyFrom = function(t) {
            this.left = t.left, this.top = t.top, this.width = t.width, this.height = t.height
        }, CRect.prototype.relativeTo = function(t) {
            return new CRect(this.left - t.left, this.top - t.top, this.width, this.height)
        }, CRect.prototype.contains = function(t) {
            return t instanceof CPoint ? t.x >= this.left && t.x <= this.right && t.y >= this.top && t.y <= this.bottom : t instanceof CRect ? t.left >= this.left && t.right <= this.right && t.top >= this.top && t.bottom <= this.bottom : void 0
        }, CRect.prototype.map = function(t, i) {
            var e = i.width / t.width,
                o = i.height / t.height;
            return new CRect((this.left - t.left) * e + i.left, (this.top - t.top) * o + i.top, this.width * e, this.height * o)
        }, CRect.prototype.equals = function(t) {
            return t && this.left == t.left && this.top == t.top && this.right == t.right && this.bottom == t.bottom
        }, CRect.prototype.toString = function() {
            return "CRect: " + JSON.stringify(this)
        };;
        window.CeltraDeviceInfo = {},
            function(e) {
                function n(e, n) {
                    this.os = new t(e.osName, e.osVersion), this.browser = new r(e.browserName, e.browserVersion, n), this.engine = new i(e.browserRenderingEngine, e.browserRenderingEngineVersion), this.deviceType = new o(e.deviceType, e.mobileDevice), this.vendor = e.vendor || "", this.model = e.model || "", this.userAgent = n
                }

                function t(e, n) {
                    this.name = e || "", this.version = n || "0"
                }

                function r(e, n, t) {
                    this.name = e || "", this.version = n || "0", this.userAgent = t
                }

                function i(e, n) {
                    this.name = e || "", this.version = n || "0"
                }

                function o(e, n) {
                    this.hardwareType = e || "", this.mobile = n || ""
                }

                function s(e, n) {
                    function t(e) {
                        return parseInt(e.replace(/\D/g, ""), 10)
                    }

                    function r(e, n) {
                        var t;
                        for (t = 0; t < Math.min(e.length, n.length); t++) {
                            if (e[t] < n[t]) return -1;
                            if (e[t] > n[t]) return 1
                        }
                        return 0
                    }
                    var i, o, s;
                    if (!e) return !0;
                    if (0 === n.length) o = null, s = null;
                    else if (1 === n.length) o = n[0], s = n[0];
                    else {
                        if (2 !== n.length) throw "Invalid number of arguments";
                        o = n[0], s = n[1]
                    }
                    for (e = e.split(".").map(t), o = o ? o.split(".").map(t) : [], s = s ? s.split(".").map(t) : [], i = Math.max(o.length, s.length) - e.length; i >= 0; i--) e.push(0);
                    return !(-1 === r(e, o) || 1 === r(e, s))
                }

                function a(e, n) {
                    if (-1 === e.indexOf("Playstation")) {
                        var t = e.match(/\bSilk\/([0-9._-]+)\b/);
                        t && (n.browserName = "Amazon Silk", n.browserVersion = t[1])
                    }
                    n.browserName && n.browserVersion && (0 === n.browserName.indexOf("Chrome") && s(n.browserVersion, ["28", null]) || 0 === n.browserName.indexOf("Opera") && s(n.browserVersion, ["15", null])) && (n.browserRenderingEngine = "Blink"), n.browserRenderingEngineVersion || (n.browserRenderingEngineVersion = function() {
                        var n;
                        return (n = e.match(/Trident\/([0-9.]+)/)) ? n[1] : (n = e.match(/Presto\/([0-9.]+)/)) ? n[1] : (n = e.match(/AppleWebKit\/*([0-9.]+)/i)) ? n[1] : (n = e.match(/Gecko\/*([0-9.]+)/), n ? n[1] : "")
                    }())
                }
                t.prototype.android = function() {
                    return "Android" === this.name && s(this.version, arguments)
                }, t.prototype.osx = function() {
                    return "OSX" === this.name && s(this.version, arguments)
                }, t.prototype.ios = function() {
                    return "IOS" === this.name && s(this.version, arguments)
                }, t.prototype.windows = function() {
                    return "Windows" === this.name && s(this.version, arguments)
                }, t.prototype.windowsPhone = function() {
                    return "WindowsPhone" === this.name && s(this.version, arguments)
                }, t.prototype.linux = function() {
                    return "Linux" === this.name
                }, r.prototype.safari = function() {
                    return "Safari" === this.name && s(this.version, arguments)
                }, r.prototype.chrome = function() {
                    return 0 === this.name.indexOf("Chrom") && s(this.version, arguments)
                }, r.prototype.ie = function() {
                    return 0 === this.name.indexOf("Internet Explorer") && s(this.version, arguments)
                }, r.prototype.android = function() {
                    return "Android Browser" === this.name && s(this.version, arguments)
                }, r.prototype.samsung = function() {
                    return "Samsung Browser" === this.name && s(this.version, arguments)
                }, r.prototype.opera = function() {
                    return 0 === this.name.indexOf("Opera") && s(this.version, arguments)
                }, r.prototype.silk = function() {
                    return "Amazon Silk" === this.name && s(this.version, arguments)
                }, r.prototype.firefox = function() {
                    return "Firefox" === this.name && s(this.version, arguments)
                }, r.prototype.edge = function() {
                    return "Edge" === this.name && s(this.version, arguments)
                }, r.prototype.webView = function() {
                    var n = null,
                        t = "iP" === (e.navigator.platform || "").substr(0, 2);
                    if (t) {
                        var r = this.userAgent,
                            i = -1 !== r.indexOf("Safari") && -1 !== r.indexOf("Version"),
                            o = !/constructor/i.test(e.HTMLElement);
                        i && !e.navigator.standalone ? n = "iOS Safari or Safari Controller" : (o || e.indexedDB) && e.statusbar.visible ? (e.webkit && e.webkit.messageHandlers || o || e.indexedDB) && (n = "WKWebView") : n = "UIWebView"
                    } else /^.*\/\d\.\d \(.*wv\).*/.test(this.userAgent) && (n = "AndroidWebView");
                    return n
                }, r.prototype.facebookApp = function() {
                    var e = this.userAgent;
                    return e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1
                }, i.prototype.webkit = function() {
                    return "WebKit" === this.name && s(this.version, arguments)
                }, i.prototype.gecko = function() {
                    return "Gecko" === this.name && s(this.version, arguments)
                }, i.prototype.trident = function() {
                    return "Trident" === this.name && s(this.version, arguments)
                }, i.prototype.presto = function() {
                    return "Presto" === this.name && s(this.version, arguments)
                }, i.prototype.blink = function() {
                    return "Blink" === this.name && s(this.version, arguments)
                }, o.prototype.phone = function() {
                    return "Phone" === this.hardwareType
                }, o.prototype.tablet = function() {
                    return "Tablet" === this.hardwareType
                }, o.prototype.desktop = function() {
                    return "Desktop" === this.hardwareType
                }, o.prototype.mobileDevice = function() {
                    return this.mobile === !0
                }, e.CeltraDeviceInfo.create = function(t, r) {
                    return t = t || e.navigator.userAgent || "", r = r || {}, a(t, r), new n(r, t)
                }
            }(window);;
        window.deviceInfo = CeltraDeviceInfo.create(window.navigator.userAgent, window.celtraDeviceInfoRuntimeParams);;
        ! function(e) {
            function n() {
                var e = p().match(/iP(ad|hone|od).*OS ([0-9_]+)/);
                return !!e && s(e[2].replace(/_/g, "."), arguments)
            }

            function t() {
                var e = p().match(/Android ([0-9.]+)/),
                    n = p().match(/Windows Phone/);
                return !n && !!e && s(e[1], arguments)
            }

            function r() {
                var e = p().match(/Windows Phone ([0-9.]+)/);
                return !!e && s(e[1], arguments)
            }

            function i() {
                var e = p().match(/AppleWebKit\/*([0-9.]+)/i);
                return !!e && s(e[1], arguments)
            }

            function a() {
                var e = p().match(/Gecko\/*([0-9.]+)/i);
                return !!e && s(e[1], arguments)
            }

            function o() {
                var e = p().match(/MSIE ([0-9]{1,}[.0-9]{0,})|Trident.* rv:([0-9]{1,}[.0-9]{0,})/i);
                return !!e && s(e[1] || e[2], arguments)
            }

            function u() {
                var e = p().match(/Silk\/([0-9.]+)/);
                return !!e && s(e[1], arguments)
            }

            function f() {
                var e = p().toLowerCase();
                return /kftt|kfot|kfjwi|kfjwa|kfso|kfth|kfapwi|kfthwi|kfsowi|kfthwa|kfapwa|kfap|sd4930ur/.test(e) ? s("2", arguments) : !1
            }

            function d() {
                return "undefined" != typeof offsetWidthOverride ? offsetWidthOverride : (document.body.offsetWidth, Math.min(innerWidth, innerHeight))
            }

            function c() {
                return /iPad/.test(p()) || d() > 550
            }

            function m() {
                return !(t() || n() || r())
            }

            function s(e, n) {
                function t(e) {
                    return parseInt(e.replace(/\D/g, ""), 10)
                }

                function r(e, n) {
                    for (var t = 0; t < v.min(e.length, n.length); t++) {
                        if (e[t] < n[t]) return -1;
                        if (e[t] > n[t]) return 1
                    }
                    return 0
                }
                var i, a, o;
                if (!e) return !0;
                if (0 === n.length) a = null, o = null;
                else if (1 === n.length) a = n[0], o = n[0];
                else {
                    if (2 !== n.length) throw "Invalid number of arguments";
                    a = n[0], o = n[1]
                }
                e = e.split(".").map(t), a = a ? a.split(".").map(t) : [], o = o ? o.split(".").map(t) : [];
                for (var i = v.max(a.length, o.length) - e.length; i >= 0; i--) e.push(0);
                return !(-1 === r(e, a) || 1 === r(e, o))
            }

            function h() {
                return v.top !== e
            }

            function l() {
                if (!(n() || window.chrome && "Google Inc." === window.navigator.vendor)) return !1;
                var e;
                return e = p().match(n() ? /CriOS\/([0-9]+.)/ : /Chrome\/([0-9]+.)/), !!e && s(e[1], arguments)
            }

            function g() {
                var e = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";
                return window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia(e).matches
            }
            e.celtra = e.celtra || {};
            var w = {};
            w.ios = n, w.android = t, w.webkit = i, w.windowsPhone = r, w.gecko = a, w.windows = o, w.kindleSilk = u, w.kindle = f, w.iframe = h, w.desktop = m, w.tablet = c, w.chromeBased = l, w.isHighDensityDisplay = g, extend(e.celtra, w), delete w.webkit, extend(e, w);
            var v = {
                    max: e.Math.max,
                    min: e.Math.min,
                    userAgent: e.navigator.userAgent,
                    top: e.top
                },
                p = function() {
                    return "undefined" != typeof e.userAgentOverride ? e.userAgentOverride : v.userAgent
                }
        }(window);;
        ! function(e) {
            function t() {
                var t = e;
                try {
                    for (;
                        "undefined" != typeof t.parent.location.href && t.parent.document !== t.document;) t = t.parent
                } catch (n) {}
                return t
            }

            function n() {
                return s.getComputedStyle(s.document.body, null)
            }

            function i(e, t, n) {
                if (!e) throw new Error("No element specified!");
                if (a(t)) {
                    if (!(t in e.style) && i.BREAK_ON_ERROR) throw new Error("Invalid CSS attribute " + t);
                    if ("undefined" == typeof n) return e.style[t];
                    e.style[t] = n
                } else {
                    if (-1 == w.indexOf(t) && o(t), "undefined" == typeof n) return e.style[y[t]];
                    e.style[y[t]] = n
                }
            }

            function r(e, t) {
                if (!e) throw new Error("No element specified!");
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                if (R && v.indexOf(t) > -1 && (t = "webkit" + u(t)), !n || "none" == n.display || !f()) return null;
                if (!(t in n) && i.BREAK_ON_ERROR) throw new Error("Invalid CSS attribute " + t);
                return a(t) ? n[t] : (-1 == w.indexOf(t) && o(t), n[y[t]])
            }

            function o(e) {
                S = S || n();
                var t = E + u(e);
                if (R && v.indexOf(e) > -1) y[e] = t;
                else if (S && e in S) y[e] = e;
                else if (S && t in S) y[e] = t;
                else if (!S && deviceInfo.browser.firefox) y[e] = e;
                else if (i.BREAK_ON_ERROR) throw new Error("Invalid CSS attribute " + e + ' or iframe still display "none" in FF');
                w.push(e)
            }

            function a(e) {
                return p.test(e)
            }

            function f() {
                if (e === s) return !0;
                var t = e.frameElement.ownerDocument.defaultView.getComputedStyle(e.frameElement, null);
                return t && "none" != t.display
            }

            function u(e) {
                return e += "", e ? e[0].toUpperCase() + e.slice(1) : ""
            }
            var l = e.navigator.userAgent,
                s = t(),
                c = /rv:.*Gecko\//.test(l),
                d = /MSIE|Trident\//.test(l),
                m = /WebKit/.test(l),
                p = /^-?([mM]oz|[wW]eb[kK]it|[mM]s)-?/,
                y = {},
                w = [],
                E = function() {
                    return m ? "webkit" : d ? "ms" : c ? "Moz" : ""
                }(),
                R = function() {
                    var e = l.match(/AppleWebKit\/(\d+)/);
                    return e && ~~e[1] < 540
                }(),
                v = ["transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "backface-visibility", "perspective", "perspective-origin"],
                S = n();
            i.BREAK_ON_ERROR = !1, e.celtra = e.celtra || {}, e.celtra.styler = {
                css: i,
                computedCSS: r,
                isWebkit: m,
                isGecko: c,
                isIE: d
            }, e.css = i, e.computedCSS = r
        }(window);;

        function PerformanceTracker(t, e) {
            this.trackingCenter = t, this.trackingEnabled = e.get("PerformanceTiming") || e.get("MonotypeOffloadFonts"), this._id = 0
        }
        PerformanceTracker.prototype.start = function(t, e) {
            var r = this,
                i = {
                    name: t,
                    type: "interval",
                    id: this._id++,
                    startTime: Date.now(),
                    args: e || []
                };
            return i.end = function() {
                this.endTime = Date.now();
                var t = this.endTime - this.startTime;
                Logger("perf").log(this.name + "(#" + this.id + ") " + t), r.collect(this)
            }.bind(i), i
        }, PerformanceTracker.prototype.collect = function(t) {
            if (this.trackingEnabled) {
                var e = {
                    name: "perfTiming",
                    section: t.name,
                    type: t.type,
                    perfId: t.id,
                    startTime: t.startTime,
                    endTime: t.endTime,
                    args: t.args
                };
                this.trackingCenter.trackNoLaterThan(e, 1e3)
            }
        }, PerformanceTracker.prototype.mark = function(t) {
            var e = this.start(t);
            e.type = "mark", e.endTime = e.startTime, this.collect(e)
        }, PerformanceTracker.prototype.marks = function(t) {
            return function() {
                this.mark(t)
            }.bind(this)
        };;
        var EventEmitter = {
            emit: function(t) {
                var e = this._listeners;
                if (e && e[t]) {
                    var n = [].slice.call(arguments, 1);
                    e[t].forEach(function(t) {
                        t.apply(window, n)
                    })
                }
            },
            emits: function() {
                var t = arguments;
                return function() {
                    this.emit.apply(this, t)
                }.bind(this)
            },
            addListener: function(t, e) {
                var n = this._listeners;
                n || (n = this._listeners = {}), n[t] || (n[t] = []), n[t].push(e)
            },
            removeListener: function(t, e) {
                var n = this._listeners;
                n && n[t] && (n[t] = n[t].filter(function(t) {
                    return t !== e
                }))
            },
            once: function(t, e) {
                var n = this;
                n.on(t, function i() {
                    n.off(t, i), e.apply(this, arguments)
                })
            },
            onAll: function(t, e) {
                t.split(" ").waitForEach(function(t, e) {
                    this.once(t, e)
                }, e, this)
            }
        };
        EventEmitter.on = EventEmitter.addListener, EventEmitter.off = EventEmitter.removeListener, EventEmitter.addEventListener = EventEmitter.addListener, EventEmitter.removeEventListener = EventEmitter.removeListener;;

        function TaskScheduler() {
            this.hub = extend({}, EventEmitter)
        }
        TaskScheduler.prototype.when = function() {
            var t, e = this;
            return t = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments), {
                run: function(n) {
                    t.waitForEach(function(t, n) {
                        e.hub.once(t, n)
                    }, n)
                }
            }
        }, TaskScheduler.prototype.notify = function(t) {
            this.paused || this.hub.emit(t)
        }, TaskScheduler.prototype.notifies = function(t) {
            return function() {
                this.notify(t)
            }.bind(this)
        }, TaskScheduler.prototype.pause = function() {
            this._paused = !0
        };;

        function TrackingCenter(e, t, n, i, s, r) {
            this._sessionId = e, this._accountId = t, this._trackingUrl = i, this._trackers = s, this._purpose = n, this._flushCycle = null, this._flushCycleLength = 1e4, this._useBatching = r, this._usePixel = !0, this.windowForPixels = window, this._instantiation = randInt(), this._eventIndex = 0, this._pendingEvents = [], this._eventsInProgress = [], this._pendingPixels = [], this._waitingTrackingRequests = 0, this._decrementWaiting = this._decrementWaiting.bind(this), this.flush = this.flush.bind(this), this.batchFlush = this.batchFlush.bind(this), this._flushPixels = this._flushPixels.bind(this)
        }
        extend(TrackingCenter.prototype, EventEmitter), TrackingCenter.eventCountLimit = 1e3, TrackingCenter.prototype.setExperimentStatus = function(e) {
            if (e && e.get) {
                var t = e.get("BatchTrackingRequests");
                this._useBatching = t ? "control" !== t.chosenVariant.slice(0, 7) : this._useBatching;
                var n = t && "Beacon" === t.chosenVariant.slice(-6),
                    i = e.get("TrackWithBeaconAPI") || n;
                this._useBeacon = i && this.windowForPixels.navigator && this.windowForPixels.navigator.sendBeacon, this._usePixel = !(n && this._useBeacon)
            }
        }, TrackingCenter.prototype.batchFlush = function() {
            this._useBatching ? this.flush() : noop()
        }, TrackingCenter.prototype.startBatchFlushCycle = function(e) {
            this._useBatching && (this.windowForPixels.setTimeout(this.flush, e), this._flushCycle = this.windowForPixels.setTimeout(this.flush, this._flushCycleLength))
        }, TrackingCenter.prototype.isTrackingLimitReached = function() {
            return this._eventIndex >= TrackingCenter.eventCountLimit
        }, TrackingCenter.prototype._createTrackingEvent = function(e) {
            return e = JSON.parse(JSON.stringify(e)), extend({
                sessionId: this._sessionId,
                accountId: this._accountId,
                stream: "adEvents",
                instantiation: this._instantiation,
                index: this._eventIndex++,
                clientTimestamp: new Date / 1e3
            }, e)
        }, TrackingCenter.prototype._addEventPendingToQueues = function(e) {
            var t = this._resolvePixelsAndEventsForQueue([e]);
            this.isTrackingLimitReached() && t.events.push(this._createTrackingEvent({
                name: "eventLimitReached"
            })), t.events.forEach(function(e) {
                Logger("tracking").log("Queuing event " + JSON.stringify(e))
            }), t.pixels.forEach(function(e) {
                Logger("tracking").log("Queuing pixel " + JSON.stringify(e))
            }), this._pendingEvents = this._pendingEvents.concat(t.events), this._pendingPixels = this._pendingPixels.concat(t.pixels)
        }, TrackingCenter.prototype.track = function(e, t) {
            this.trackNoLaterThan(e, 0, t)
        }, TrackingCenter.prototype.trackNoLaterThan = function(e, t, n) {
            function i(e) {
                return parseInt(e, 10) === e
            }
            if (this.isTrackingLimitReached()) return void console.warn("Tracking limit reached: " + TrackingCenter.eventCountLimit + " events.");
            if (i(t) ? 0 > t && (t = 0) : t = 1500, n = n || noop, "live" !== this._purpose) {
                var s = this._createTrackingEvent(e);
                return Logger("tracking").log("Ignoring non-live event " + JSON.stringify(s)), void defer(n)
            }
            var r = null;
            this._addEventPendingToQueues(e);
            var o = this.windowForPixels;
            this.once("trackingQueueEmptied", function() {
                r && (o.clearTimeout(r), r = null), n()
            }.bind(this)), r = this._useBatching ? o.setTimeout(this._flushPixels, t) : o.setTimeout(this.flush, t)
        }, TrackingCenter.prototype._resolvePixelsAndEventsForQueue = function(e) {
            function t(e, i, s) {
                if (0 == e.length) return {
                    events: i,
                    pixels: s
                };
                var r = e[0],
                    o = n._createTrackingEvent(r),
                    c = n._trackers.urlsAndEventsFor(o);
                return t(e.slice(1).concat(c.events || []), i.concat(o), s.concat(c.urls || []))
            }
            var n = this;
            return t(e, [], [])
        }, TrackingCenter.prototype._fireBeacon = function(e, t) {
            this.windowForPixels.navigator.sendBeacon(e), t()
        }, TrackingCenter.prototype._firePixel = function(e, t) {
            function n() {
                i.onload = i.onerror = null, t()
            }
            var i = this.windowForPixels.document.createElement("img");
            i.onload = i.onerror = n;
            try {
                i.src = e
            } catch (s) {
                n()
            }
        }, TrackingCenter.prototype._decrementWaiting = function() {
            this._waitingTrackingRequests > 0 && (--this._waitingTrackingRequests || this.emit("trackingQueueEmptied"))
        }, TrackingCenter.prototype.flush = function(e, t) {
            var n = this,
                i = e || noop;
            t = "undefined" == typeof t ? this._usePixel : t;
            var s = n._pendingEvents;
            if (n._pendingEvents = [], n._eventsInProgress = n._eventsInProgress.concat(s), s.length) {
                n._waitingTrackingRequests++, this._useBatching && (this.windowForPixels.clearTimeout(this._flushCycle), i = function() {
                    n._flushCycle = n.windowForPixels.setTimeout(n.flush, n._flushCycleLength), (e || noop)()
                });
                var r = function() {
                    n._eventsInProgress = n._eventsInProgress.filter(function(e) {
                        return -1 === s.indexOf(e)
                    }), n._decrementWaiting()
                };
                this._useBeacon && n._fireBeacon(n._getTrackerBeaconUrl(s), r), t && n._firePixel(n._getTrackerPixelUrl(s), r)
            }
            n._flushPixels(), 0 === n._waitingTrackingRequests ? this.windowForPixels.setTimeout(i, 0) : this.once("trackingQueueEmptied", i)
        }, TrackingCenter.prototype._flushPixels = function() {
            var e = this;
            e._pendingPixels.forEach(function(t) {
                e._waitingTrackingRequests++, e._firePixel(t, e._decrementWaiting)
            }), e._pendingPixels = []
        }, TrackingCenter.prototype._getTrackerUrl = function(e) {
            return base64json = this.windowForPixels.btoa(to_utf8(JSON.stringify(e))), this._trackingUrl + "json/" + base64json + "?crc32c=" + crc32(base64json)
        }, TrackingCenter.prototype._getTrackerPixelUrl = function(e) {
            return this._getTrackerUrl({
                events: e
            })
        }, TrackingCenter.prototype._getTrackerBeaconUrl = function(e) {
            return this._getTrackerUrl({
                events: e.map(function(e) {
                    var t = JSON.parse(JSON.stringify(e));
                    return t.beacon = !0, t
                })
            })
        }, TrackingCenter.prototype._getTrackerRedirectUrl = function(e, t, n, i) {
            i = i || {};
            var s = {
                events: e,
                pixels: t,
                dest: n
            };
            return i.jsRedirectFunc && (s.redirectFunc = i.jsRedirectFunc), this._getTrackerUrl(s)
        }, TrackingCenter.prototype.wrapRedirectPageUrl = function(e, t) {
            var n = this._getTrackerRedirectUrl(this._pendingEvents.concat(this._eventsInProgress), this._pendingPixels, e, t);
            return this._useBeacon ? this.flush(void 0, !1) : (this._pendingEvents = [], this._pendingPixels = []), n
        };;

        function Experiments(t, e) {
            this._instances = {};
            for (var n in t) this._instances[n] = new Experiment(n, t[n], e);
            e.setExperimentStatus(this)
        }

        function Experiment(t, e, n) {
            this.key = t, this.chosenVariant = e, this._trackingCenter = n, this._variantExposedTracked = !1, this._variantSucceededTracked = !1, this.trackExposure = function() {
                this._track("variantExposed")
            }.bind(this), this.trackSuccess = function() {
                this._track("variantSucceeded")
            }.bind(this)
        }
        Experiments.prototype.get = function(t, e) {
            var n = [t].concat(e || []).map(encodeURIComponent).join("/");
            return this._instances[n] || null
        }, Experiment.prototype._track = function(t) {
            this["_" + t + "Tracked"] || (this["_" + t + "Tracked"] = !0, this._trackingCenter.track({
                name: t,
                experimentKey: this.key,
                variant: this.chosenVariant
            }))
        };;

        function TouchEventSimulator(t) {
            this.el = t, this.doc = t.ownerDocument ? t.ownerDocument : t, this.win = this.doc.defaultView, this.touch = null, this._initialised = !1, this._firstEventFired = !1, this.handleFirstEvent = this.handleFirstEvent.bind(this), this.handleMouseDown = this.handleMouseDown.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.handleMouseUp = this.handleMouseUp.bind(this), this.handleMouseOut = this.handleMouseOut.bind(this), this.handlePointerDown = this.handlePointerDown.bind(this), this.handlePointerMove = this.handlePointerMove.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handlePointerCancel = this.handlePointerCancel.bind(this), this.captureBubbleEvents = this.captureBubbleEvents.bind(this)
        }
        TouchEventSimulator.mode = null, TouchEventSimulator.prototype.start = function() {
            return this._initialised ? void("function" == typeof Logger && Logger("TouchEventSimulator").warn("Touch event simulator already initialised!")) : ("function" == typeof Logger && Logger("TouchEventSimulator").log("Enabling touch event simulation"), this.doc.defaultView.msPointerEnabled ? this.startPointers() : this.startMouse(), this.el.addEventListener("touchstart", this.captureBubbleEvents, !1), this.el.addEventListener("touchmove", this.captureBubbleEvents, !1), this.el.addEventListener("touchend", this.captureBubbleEvents, !1), this.el.addEventListener("touchcancel", this.captureBubbleEvents, !1), void this.el.addEventListener("tap", this.captureBubbleEvents, !1))
        }, TouchEventSimulator.prototype.stop = function() {
            return this._initialised ? ("function" == typeof Logger && Logger("TouchEventSimulator").log("Disabling touch event simulation"), this.win && this.win.msPointerEnabled ? this.stopPointers() : this.stopMouse(), this.el.removeEventListener("touchstart", this.captureBubbleEvents, !1), this.el.removeEventListener("touchmove", this.captureBubbleEvents, !1), this.el.removeEventListener("touchend", this.captureBubbleEvents, !1), this.el.removeEventListener("touchcancel", this.captureBubbleEvents, !1), void this.el.removeEventListener("tap", this.captureBubbleEvents, !1)) : void("function" == typeof Logger && Logger("TouchEventSimulator").warn("Touch event simulator not running!"))
        }, TouchEventSimulator.prototype.captureBubbleEvents = function(t) {
            t.stopPropagation(), t.preventDefault()
        }, TouchEventSimulator.prototype.startMouse = function() {
            this.el.addEventListener("mousedown", this.handleMouseDown, !0), this.el.addEventListener("mousemove", this.handleMouseMove, !0), this.el.addEventListener("mouseup", this.handleMouseUp, !0), this.el.addEventListener("mouseout", this.handleMouseOut, !0), this.el.addEventListener("dragstart", this.handleDragStart, !0), this._initialised = !0
        }, TouchEventSimulator.prototype.stopMouse = function() {
            this.el.removeEventListener("mousedown", this.handleMouseDown, !0), this.el.removeEventListener("mousemove", this.handleMouseMove, !0), this.el.removeEventListener("mouseup", this.handleMouseUp, !0), this.el.removeEventListener("mouseout", this.handleMouseOut, !0), this.el.removeEventListener("dragstart", this.handleDragStart, !0), this._initialised = !1
        }, TouchEventSimulator.prototype.startPointers = function() {
            this.el.addEventListener("MSPointerDown", this.handlePointerDown, !0), this.el.addEventListener("MSPointerMove", this.handlePointerMove, !0), this.el.addEventListener("MSPointerUp", this.handlePointerUp, !0), this.el.addEventListener("MSPointerCancel", this.handlePointerCancel, !0), this._initialised = !0
        }, TouchEventSimulator.prototype.stopPointers = function() {
            this.el.removeEventListener("MSPointerDown", this.handlePointerDown, !0), this.el.removeEventListener("MSPointerMove", this.handlePointerMove, !0), this.el.removeEventListener("MSPointerUp", this.handlePointerUp, !0), this.el.removeEventListener("MSPointerCancel", this.handlePointerCancel, !0), this._initialised = !1
        }, TouchEventSimulator.prototype.init = function() {
            this.doc.defaultView.navigator.msPointerEnabled ? this.start() : (this.el.addEventListener("touchstart", this.handleFirstEvent, !0), this.el.addEventListener("mousedown", this.handleFirstEvent, !0))
        }, TouchEventSimulator.prototype.updateTouchCoordinates = function(t) {
            this.touch.screenX = t.screenX, this.touch.screenY = t.screenY, this.touch.pageX = t.pageX, this.touch.pageY = t.pageY, this.touch.clientX = t.clientX, this.touch.clientY = t.clientY
        }, TouchEventSimulator.prototype.ignorables = ["select", "input", "textarea"], TouchEventSimulator.prototype.isFormElement = function(t) {
            return this.ignorables.indexOf(t.nodeName.toLowerCase()) > -1
        }, TouchEventSimulator.prototype.isIgnorable = function(t) {
            for (var e = t; e && e instanceof HTMLElement; e = e.parentNode)
                if (hasClass(e, "ignore-toucheventsimulator")) return !0;
            return !1
        }, TouchEventSimulator.prototype.handleFirstEvent = function(t) {
            this._firstEventFired || (this._firstEventFired = !0, this.el.removeEventListener("touchstart", this.handleFirstEvent, !0), this.el.removeEventListener("mousedown", this.handleFirstEvent, !0), "touch" != TouchEventSimulator.mode && "mousedown" == t.type ? (TouchEventSimulator.mode = "mouse", this.start(), this.handleMouseDown(t)) : TouchEventSimulator.mode = "touch")
        }, TouchEventSimulator.prototype.handleMouseDown = function(t) {
            0 != t.button || this.isIgnorable(t.target) || (this.touch = {
                identifier: 0,
                target: t.target
            }, this.updateTouchCoordinates(t), t.stopPropagation(), this.isFormElement(t.target) || t.preventDefault(), this.fireTouchEvent("touchstart", t))
        }, TouchEventSimulator.prototype.handleMouseMove = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), t.stopPropagation(), t.preventDefault(), this.fireTouchEvent("touchmove", t))
        }, TouchEventSimulator.prototype.handleMouseUp = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), t.stopPropagation(), t.preventDefault(), this.fireTouchEvent("touchend", t), this.touch = null)
        }, TouchEventSimulator.prototype.handleMouseOut = function(t) {
            this.touch && 0 == t.button && (t.clientX <= 0 || t.clientX >= this.win.innerWidth || t.clientY <= 0 || t.clientY >= this.win.innerHeight) && this.cancelInteraction()
        }, TouchEventSimulator.prototype.handleDragStart = function(t) {
            return t.preventDefault(), !1
        }, TouchEventSimulator.prototype.handlePointerDown = function(t) {
            0 == t.button && (this.touch = {
                identifier: 0,
                target: t.target
            }, this.updateTouchCoordinates(t), this.fireTouchEvent("touchstart", t))
        }, TouchEventSimulator.prototype.handlePointerMove = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), this.fireTouchEvent("touchmove", t))
        }, TouchEventSimulator.prototype.handlePointerUp = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), this.fireTouchEvent("touchend", t))
        }, TouchEventSimulator.prototype.handlePointerCancel = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), this.fireTouchEvent("touchcancel", t), this.touch = null)
        }, TouchEventSimulator.prototype.fireTouchEvent = function(t, e) {
            var n = this.doc.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), "touchend" == t || "touchcancel" == t ? (n.touches = n.targetTouches = [], n.changedTouches = [this.touch]) : n.touches = n.targetTouches = n.changedTouches = [this.touch], e.target.dispatchEvent(n)
        }, TouchEventSimulator.prototype.cancelInteraction = function() {
            this.touch && (this.fireTouchEvent("touchcancel", this.touch), this.touch = null)
        };;

        function AggregatorTracking(t) {
            this._trackingCenter = t
        }
        AggregatorTracking.prototype.trackAggregator = function(t, r, g) {
            "object" == typeof r && (g = r, r = void 0), g = g || {}, r = void 0 !== r ? r : 1, this._trackingCenter.track({
                name: "aggregator",
                metric: t,
                value: r,
                customDimensions: g
            })
        }, AggregatorTracking.prototype.trackAggregatorTime = function(t, r, g) {
            this.trackAggregator(t, Math.round(r), g)
        }, AggregatorTracking.prototype.trackAggregatorUsingTimer = function(t, r) {
            var g = new Date;
            return function() {
                this.trackAggregatorTime(t, new Date - g, r)
            }.bind(this)
        }, AggregatorTracking.prototype.trackAggregatorMagicTriplet = function(t, r, g) {
            this.trackAggregator(t + "Attempts", r);
            var e = new Date;
            return function() {
                var a = new Date - e;
                (!g || g > a) && (this.trackAggregator(t + "Successes", r), this.trackAggregatorTime(t + "Time", a, r))
            }.bind(this)
        };;

        function Logger(e) {
            if (!(this instanceof Logger)) return new Logger(e);
            e = e || "";
            var n = noop;
            (Logger.enabledNames.indexOf(e) >= 0 || Logger.enabledNames.indexOf("all") >= 0) && (n = function() {
                var e = [].slice.apply(arguments);
                e.unshift(Logger._ts() + " [" + Logger.sessionId + (this.name ? " " + this.name : "") + "]"), console.log.apply(console, e)
            }), this.name = e, this.log = n, this.warn = n, this.debug = n, this.error = n
        }
        Logger._ts = function() {
            function e(e, n) {
                for (e += ""; e.length < n;) e = "0" + e;
                return e
            }
            var n = new Date;
            return n.getFullYear() + "-" + e(n.getMonth() + 1, 2) + "-" + e(n.getDate(), 2) + " " + e(n.getHours(), 2) + ":" + e(n.getMinutes(), 2) + ":" + e(n.getSeconds(), 2) + "." + e(n.getTime() - 1e3 * Math.floor(n.getTime() / 1e3), 3)
        }, Logger.init = function(e, n) {
            Logger.enabledNames = e, Logger.sessionId = n || (Math.random() + "").slice(15)
        }, Logger.initFromRuntimeParams = function(e) {
            Logger.init(e.debug ? e.debug.split(",") : [], e.sessionId)
        };;

        function InViewObject(t, e) {
            this.view = t, this.inViewParent = e, this._init()
        }
        extend(InViewObject.prototype, EventEmitter), InViewObject.prototype._init = function() {
            this.rectInView = CRect.ZERO, this.areaInViewRatio = 0, this.active = !1, this._maxPossibleDimensions = {
                width: 0,
                height: 0,
                area: 0
            }, this.computeRectInView = this.computeRectInView.bind(this), this.start = this.start.bind(this), this.stop = this.stop.bind(this)
        }, InViewObject.prototype.getNode = function() {
            return this.view.getNode()
        }, InViewObject.prototype.getParentMaxPossDims = function() {
            return this.inViewParent ? this.inViewParent.getMaxPossibleDimensions() : this.adapter.getViewportRect()
        }, InViewObject.prototype.computeRectInView = function() {
            var t = this.inViewParent.getRectInView(),
                e = this.getBoundingClientRect(),
                i = t.intersect(e),
                n = !1;
            this.rectInView.equals(i) || (this.rectInView = i, n = !0), this._computeMaxPossibleDimensions(e, this.getParentMaxPossDims());
            var s = this._maxPossibleDimensions.area > 0 ? i.area / this._maxPossibleDimensions.area : 0,
                o = !1;
            s !== this.areaInViewRatio && (this.areaInViewRatio = s, o = !0), n && (this.emit("rectInViewChanged", i), Logger("InViewObject").debug(this.view.toString() + ", rectInViewChanged: " + this.rectInView.toString())), o && (this.emit("areaInViewRatioChanged", s), Logger("InViewObject").debug(this.view.toString() + ", areaInViewRatioChanged: " + s))
        }, InViewObject.prototype.getBoundingClientRect = function() {
            var t = this.getNode();
            return t ? CRect.adopt(t.getBoundingClientRect()) : CRect.ZERO
        }, InViewObject.prototype.getMaxPossibleDimensions = function() {
            return this._maxPossibleDimensions
        }, InViewObject.prototype._computeMaxPossibleDimensions = function(t, e) {
            this._maxPossibleDimensions.width = Math.min(e.width, t.width), this._maxPossibleDimensions.height = Math.min(e.height, t.height), this._maxPossibleDimensions.area = this._maxPossibleDimensions.width * this._maxPossibleDimensions.height
        }, InViewObject.prototype.getRectInView = function() {
            return this.rectInView
        }, InViewObject.prototype.getAreaInViewRatio = function() {
            return this.areaInViewRatio
        }, InViewObject.prototype.start = function() {
            this.active || (this._start(), this.active = !0, this.computeRectInView())
        }, InViewObject.prototype._start = function() {
            this.inViewParent.on("rectInViewChanged", this.computeRectInView), this.inViewParent.on("areaInViewRatioChanged", this.computeRectInView)
        }, InViewObject.prototype.stop = function() {
            this.active && (this.computeRectInView(), this._stop(), this.active = !1)
        }, InViewObject.prototype._stop = function() {
            this.inViewParent.off("rectInViewChanged", this.computeRectInView), this.inViewParent.off("areaInViewRatioChanged", this.computeRectInView)
        };;

        function AdViewableTimeObserver(e) {
            this._tracker = e, this._readyToShow = !1, this._adapter
        }

        function AdViewableInViewObjectObserver() {
            AdViewableInViewObjectObserver.uberConstructor.apply(this, arguments), this._inViewObjects = [], this._viewableInViewObjects = []
        }

        function AdViewableUnitObserver() {
            AdViewableUnitObserver.uberConstructor.apply(this, arguments), this._units = [], this._viewableUnits = [], this._containerIsViewable = !1
        }
        AdViewableTimeObserver.prototype.readyToShow = function() {
            throw new Error("AdViewableInViewObjectObserver.readyToShow not implemented!")
        }, AdViewableTimeObserver.prototype.registerUnit = function() {
            throw new Error("AdViewableInViewObjectObserver.registerUnit not implemented!")
        }, AdViewableTimeObserver.prototype.registerAdapter = function() {
            throw new Error("AdViewableTimeObserver.registerAdapter not implemented!")
        }, AdViewableTimeObserver.prototype.stop = function() {
            this._tracker.stop()
        }, inherit(AdViewableInViewObjectObserver, AdViewableTimeObserver), AdViewableInViewObjectObserver.prototype.registerAdapter = function(e) {
            this._adapter = e;
            var t = this._tracker;
            e.mediaState.on("videoStarted", function() {
                this._tryStartTracker()
            }.bind(this)), e.mediaState.on("videoStopped", function() {
                0 === this._viewableInViewObjects.length && t.stop()
            }.bind(this))
        }, AdViewableInViewObjectObserver.prototype.readyToShow = function() {
            this._readyToShow = !0, this._tryStartTracker()
        }, AdViewableInViewObjectObserver.prototype.registerUnit = function(e) {
            var t = e.inView,
                i = this._inViewObjects,
                r = this._viewableInViewObjects,
                a = this._tracker;
            if (-1 === i.indexOf(t)) {
                i.push(t);
                var n = -1 !== r.indexOf(t);
                !n && t.getAreaInViewRatio() > 0 && r.push(t), this._tryStartTracker(), t.on("areaInViewRatioChanged", function(e) {
                    var i = r.indexOf(t),
                        n = -1 !== i;
                    !n && e > 0 ? (r.push(t), this._tryStartTracker()) : 0 === e && n && (r.splice(i, 1), 0 === r.length && a.stop())
                }.bind(this))
            }
        }, AdViewableInViewObjectObserver.prototype._tryStartTracker = function() {
            var e = this._adapter,
                t = e && e.mediaState.playingVideo;
            return this._readyToShow && (this._viewableInViewObjects.length > 0 || t) ? (this._tracker.start(), !0) : !1
        }, inherit(AdViewableUnitObserver, AdViewableTimeObserver), AdViewableUnitObserver.prototype.registerAdapter = function(e) {
            this._adapter = e, this._containerIsViewable = e.containerIsViewable;
            var t = this._tracker;
            e.on("containerViewableChange", function(e) {
                this._containerIsViewable = e, e ? this._tryStartTracker() : t.stop()
            }.bind(this)), e.mediaState.on("videoStarted", function() {
                this._tryStartTracker()
            }.bind(this)), e.mediaState.on("videoStopped", function() {
                this._adapter.containerIsViewable && 0 !== this._viewableUnits.length || t.stop()
            }.bind(this))
        }, AdViewableUnitObserver.prototype.readyToShow = function() {
            this._readyToShow = !0, this._tryStartTracker()
        }, AdViewableUnitObserver.prototype.registerUnit = function(e) {
            if (!this._adapter) throw new Error("adapter was not registered yet!");
            var t = this._units,
                i = this._viewableUnits,
                r = this._tracker; - 1 === t.indexOf(e) && (t.push(e), -1 === i.indexOf(e) && e._visible && (i.push(e), this._tryStartTracker()), e.on("appeared", function() {
                -1 === i.indexOf(e) && (i.push(e), this._tryStartTracker())
            }.bind(this)), e.on("disappeared", function() {
                var t = i.indexOf(e); - 1 !== t && (i.splice(t, 1), 0 === i.length && r.stop())
            }.bind(this)))
        }, AdViewableUnitObserver.prototype._tryStartTracker = function() {
            var e = this._adapter;
            return e && (e.containerIsViewable || e.mediaState.playingVideo) && this._readyToShow && this._viewableUnits.length > 0 ? (this._tracker.start(), !0) : !1
        };;

        function AdViewableTimeTracker(i, e, t, n) {
            this._trackingCenter = i, this._raf = e, this._win = t, this._intervals = n || {
                3e3: 1e3,
                1e4: 2e3,
                63e3: 3e3
            }, this._isRunning = !1, this._viewableMilliseconds = 0, this._fromTime = 0, this._pendingPingTimeoutId, this._pendingPingRafId, this._maxRafLatency = 500
        }
        AdViewableTimeTracker.eventName = "viewableTime", AdViewableTimeTracker.TrackingData = function(i, e) {
            return i > e && (e = i), {
                name: AdViewableTimeTracker.eventName,
                from: i / 1e3,
                to: e / 1e3
            }
        }, AdViewableTimeTracker.prototype.start = function() {
            this._isRunning || (this._isRunning = !0, this._fromTime = Date.now(), 0 === this._viewableMilliseconds ? this._initPing() : this._setNextPing())
        }, AdViewableTimeTracker.prototype.stop = function() {
            if (this._clearPendingPing(), this._isRunning && -1 !== this._getPingInterval()) {
                var i = Date.now(),
                    e = i - this._fromTime;
                this._viewableMilliseconds += e;
                var t = new AdViewableTimeTracker.TrackingData(this._fromTime, i);
                this._track(t)
            }
            this._isRunning = !1
        }, AdViewableTimeTracker.prototype._initPing = function() {
            var i = this._fromTime,
                e = this._getPingInterval(),
                t = new AdViewableTimeTracker.TrackingData(this._fromTime, i);
            this._pendingPingRafId = this._raf.nextFrame(function() {
                this._track(t), this._setFromTimeForNextPing(i, e), this._setNextPing()
            }.bind(this))
        }, AdViewableTimeTracker.prototype._setNextPing = function() {
            function i() {
                if (this._isRunning) {
                    var i = Date.now();
                    this._viewableMilliseconds += e, this._normalizeFromTime(i, e), this._pendingPingRafId = this._raf.nextFrame(function() {
                        var t = new AdViewableTimeTracker.TrackingData(this._fromTime, i);
                        this._track(t), this._setFromTimeForNextPing(i, e), this._setNextPing()
                    }.bind(this))
                }
            }
            this._clearPendingPing();
            var e = this._getPingInterval();
            this._isRunning && -1 !== e && (this._pendingPingTimeoutId = this._win.setTimeout(i.bind(this), e))
        }, AdViewableTimeTracker.prototype._normalizeFromTime = function(i, e) {
            var t = i - this._fromTime,
                n = e + this._maxRafLatency;
            t > n && (this._fromTime = i)
        }, AdViewableTimeTracker.prototype._setFromTimeForNextPing = function(i, e) {
            var t = Date.now(),
                n = t - i,
                r = n > e;
            this._fromTime = r ? t : i
        }, AdViewableTimeTracker.prototype._getPingInterval = function() {
            var i = this._viewableMilliseconds,
                e = this._intervals,
                t = Object.keys(this._intervals),
                n = 1 * t[t.length - 1],
                r = -1;
            return t.some(function(t) {
                return 1 * t > i ? (r = e[t], i + r > n && (r = -1), !0) : !1
            }), r
        }, AdViewableTimeTracker.prototype._clearPendingPing = function() {
            this._raf.cancelFrame(this._pendingPingRafId), this._win.clearTimeout(this._pendingPingTimeoutId)
        }, AdViewableTimeTracker.prototype._track = function(i) {
            this._trackingCenter.track(i)
        };;
        ! function(t) {
            function i() {
                this.playingVideo = !1
            }
            var e = i.prototype;
            extend(e, EventEmitter), e.stopVideo = function() {
                this.playingVideo = !1, this.emit("videoStopped")
            }, e.startVideo = function() {
                this.playingVideo = !0, this.emit("videoStarted")
            }, t.MediaState = i
        }(window);;
        ! function(e) {
            "use strict";
            var r = {};
            r.toString = function() {
                return "[Clazz CustomAudiences]"
            };
            var t = function(e, r, t, n) {
                function i(r, t) {
                    var i = new XMLHttpRequest;
                    i.open(e, u + s + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(t) + "?" + creative.authTokenUrlParam), i.send(n)
                }
                if (-1 === ["PUT", "DELETE"].indexOf(e)) throw new Error("Unsupported request method: " + e);
                if ("undefined" == typeof creative.runtimeParams.customAudiences[r]) throw new Error('Custom audience "' + r + '" is not used by the creative.');
                creative.runtimeParams.customAudiences[r] = {
                    userExists: t,
                    userData: n
                };
                var u = creative.secure ? creative.customAudiencesUrl : creative.insecureCustomAudiencesUrl,
                    s = "/audiences/" + r,
                    o = creative.userIdentifiers;
                for (var a in o)
                    for (var c in o[a]) i(a, o[a][c])
            };
            r.addUser = function(e, r) {
                creative.runtimeParams.userOptOut || t("PUT", e, !0, r)
            }, r.removeUser = function(e) {
                creative.runtimeParams.userOptOut || t("DELETE", e, !1)
            }, e.CustomAudiences = r
        }(window);;
        ! function(e) {
            "use strict";

            function t(e) {
                return {
                    findByLocalId: e
                }
            }
            var n = {
                    ambience: "Ambience",
                    animatey: "Animatey",
                    abtest: "Best",
                    basket: "Basket",
                    button: "Button",
                    canvas: "Canvas",
                    celebration: "Celebration",
                    checkbox: "CheckBox",
                    feedbasedchoice: "ChoiceFeed",
                    countdown: "Countdown",
                    draggy: "Draggy",
                    dropdown: "Dropdown",
                    dynamiccontent: "DynamicContent",
                    facebookshare: "FacebookShareButton",
                    fallback: "Fallback",
                    frame: "Frame",
                    flippy: "Flippy",
                    grid: "Grid",
                    group: "Group",
                    gyro: "Gyro",
                    hotspot: "Hotspot",
                    input: "Input",
                    lighttable: "LightTable",
                    map: "Map",
                    transitions: "Transitions",
                    mastervideo: "MasterVideo",
                    nearby: "Nearby",
                    painty: "Painty",
                    pannable: "Pannable",
                    particles: "Particle",
                    picture: "Picture",
                    puzzle: "Puzzle",
                    shapey: "Shapey",
                    smoke: "Smoke",
                    stack: "Stack",
                    stopwatch: "Stopwatch",
                    locatorclassic: "StoreLocator2",
                    locator: "StoreLocator3",
                    swipeygallery: "Swipey",
                    swipeygroup: "SwipeyGroup",
                    takephoto: "TakePhotoButton",
                    texty: "Texty",
                    twitterfeed: "TwitterFeed",
                    twittershare: "TwitterShareButton",
                    inlinevideo: "Video",
                    "360view": "View360",
                    "360video": "Video360",
                    "360°video": "Video360",
                    weather: "Weather",
                    whatsappshare: "WhatsAppShareButton",
                    wipeable: "Wipeable",
                    youtube: "Youtube",
                    scene: "Scene",
                    brandtracksurvey: "BrandTrackSurvey",
                    brandtrackquestion: "BrandTrackQuestion",
                    customcode: "CustomCode",
                    videoasset: "VideoAsset"
                },
                o = function(e) {
                    return e = e.toLowerCase().replace(/\W+/g, ""), e in n ? n[e] : ""
                },
                i = function(e, t) {
                    function n(r) {
                        t && i.length > 0 || r.forEach(function(t) {
                            e(t) && i.push(t), t.getActiveContainers().forEach(function(e) {
                                n(e.objects), o(e.scenes)
                            })
                        })
                    }

                    function o(n) {
                        !n || t && i.length > 0 || n.forEach(function(t) {
                            e(t) && i.push(t)
                        })
                    }
                    var i = [];
                    return "Screen" == this.constructor.name ? (n(this.objects), o(this.scenes)) : "function" == typeof this.getActiveContainers && this.getActiveContainers().forEach(function(e) {
                        n(e.objects), o(e.scenes)
                    }), i
                },
                r = function(e) {
                    var t = i.call(this, e, !0);
                    return t.length > 0 ? t[0] : null
                },
                a = function(e) {
                    return function(t) {
                        return "undefined" == typeof e || t.name == e
                    }
                },
                c = {
                    findAll: function(e) {
                        return i.call(this, a(e))
                    },
                    findByType: function(e) {
                        var t = [];
                        return "undefined" == typeof e ? t : i.call(this, function(t) {
                            return t.constructor.name == o(e)
                        })
                    },
                    findByLocalId: function(e) {
                        return r.call(this, function(t) {
                            return t.localId == e
                        })
                    },
                    find: function(e) {
                        return r.call(this, a(e))
                    }
                };
            e.DiscoverableTrait = c;
            var u = function(e) {
                    var t = null;
                    for (var n in this.units)
                        if (t = this.units[n].findByLocalId(e, !0)) break;
                    return t
                },
                s = function(e) {
                    if ("undefined" == typeof e) return null;
                    var t = null;
                    return this.variants.some(function(n) {
                        return t = n.findByLocalId(e), n.localId == e && (t = n), !!t
                    }), t
                },
                l = function(e) {
                    if ("undefined" == typeof e) return null;
                    var t = null;
                    return [this.master].concat(this.screens).some(function(n) {
                        return t = n.findByLocalId(e), n.localId == e && (t = n), !!t
                    }), t
                };
            e.DiscoverableUnitsTrait = t(u), e.DiscoverableVariantsTrait = t(s), e.DiscoverableScreensTrait = t(l)
        }(window);;
        ! function(n) {
            "use strict";

            function e(n) {
                return {
                    goToObject: n
                }
            }
            var t = function(n, e) {
                    if (e = e || noop, null !== n) {
                        var t = null;
                        "undefined" != typeof n.parentUnit && (t = n.parentUnit), "CreativeUnit" === n.constructor.name && (t = n), t ? this._goToUnit(t.localId, function(t) {
                            t.goToObject(n, e)
                        }) : defer(e.bind(this, null))
                    }
                },
                r = function(n, e) {
                    e = e || noop;
                    var t = null,
                        r = null;
                    "undefined" != typeof n.parentScreen && (r = n.parentScreen), "Screen" === n.constructor.name && (r = n), r && null !== r.parentUnitVariant && (t = r.parentUnitVariant), "CreativeUnitVariant" === n.constructor.name && (t = n), t ? this.goToVariant(t.localId, function(t) {
                        t.goToObject(n, e)
                    }) : defer(e.bind(this, null))
                },
                i = function(n, e) {
                    e = e || noop;
                    var t = null;
                    "undefined" != typeof n.parentScreen && (t = n.parentScreen), "Screen" === n.constructor.name && (t = n), t && t !== this.currentScreen ? this.goToScreen(t, void 0, function() {
                        e(t)
                    }) : defer(e.bind(this, null))
                };
            n.TraversableUnitsTrait = e(t), n.TraversableVariantsTrait = e(r), n.TraversableScreensTrait = e(i)
        }(window);;
        var SingleUnitFormatShareableStateNavigation = {
            _applyShareableState: function(a) {
                if (a.unit) {
                    var e = this.placements.banner ? this.placements.banner.creative.units.banner : this.placements.modal.creative.units.modal;
                    e.applyShareableState(a.unit)
                }
            }
        };;

        function StateObject(t) {
            Object.defineProperties(this, {
                values: {
                    enumerable: !1,
                    configurable: !1,
                    writable: !0,
                    value: {}
                },
                _isDirty: {
                    enumerable: !1,
                    configurable: !1,
                    writable: !0,
                    value: !1
                }
            }), Object.keys(t).forEach(function(e) {
                this.registerValue(e, t[e])
            }, this)
        }
        extend(StateObject.prototype, EventEmitter), StateObject.prototype.registerValue = function(t, e) {
            this.values[t] = {
                dirty: !1,
                value: e
            }, Object.defineProperty(this, t, {
                get: function() {
                    return this.values[t].value
                },
                set: function(e) {
                    var i = this.values[t],
                        r = i.value;
                    e != r && (i.dirty = !0, i.value = e, this._isDirty = !0, this.emit("change:" + t, e, r))
                },
                enumerable: !0
            })
        }, StateObject.prototype.markClean = function(t) {
            var e = !1;
            Object.keys(this.values).forEach(function(i) {
                t && i !== t || (this[i].dirty = !1), e = e || this[i].dirty
            }, this.values), this._isDirty = e
        }, StateObject.prototype.getDirtyValues = function() {
            for (var t = {}, e = Object.keys(this.values), i = 0; i < e.length; i++) this.values[e[i]].dirty && (t[e[i]] = this.values[e[i]].value);
            return t
        }, StateObject.prototype.isDirty = function(t) {
            return "undefined" == typeof t ? this._isDirty : this.values[t].dirty
        }, StateObject.prototype.anyDirty = function(t) {
            arguments.length > 1 && (t = Array.prototype.slice.apply(arguments));
            for (var e = 0; e < t.length; e++)
                if (this.values[t[e]].dirty) return !0;
            return !1
        }, StateObject.prototype.copy = function() {
            var t = {};
            for (var e in this.values) t[e] = this[e];
            return new StateObject(t)
        }, StateObject.prototype.copyFrom = function(t) {
            for (var e in t.values) this[e] = t[e]
        };;

        function StateAnimation(t, i) {
            this.stateObject = t, this.propertyName = i, this.running = !1, this.lastUpdateTime = null, this.tick = this.tick.bind(this), this._callback = null
        }

        function SpringyAnimation(t, i, e) {
            StateAnimation.apply(this, arguments), this.options = extend({}, SpringyAnimation.defaults, e || {}), this.state = {
                x: t[i],
                v: 0
            }, this.derivative = {
                dx: 0,
                dv: 0
            }
        }

        function EasingAnimation(t, i, e) {
            StateAnimation.apply(this, arguments), this.options = extend({}, EasingAnimation.defaults, e || {}), this._startValue = null, this._startTime = null, this._targetValue = null, this._targetTime = null
        }
        StateAnimation.prototype.start = function() {
            this.running || (this.lastUpdateTime = null, this.running = !0, Ticker.frame(this.tick, "update"))
        }, StateAnimation.prototype.pause = function() {
            Ticker.removeFrame(this.tick, "update"), this.running = !1
        }, StateAnimation.prototype.tick = function() {
            var t = Date.now();
            this.update(t - (this.lastUpdateTime || t)), this.lastUpdateTime = t
        }, StateAnimation.prototype.update = function() {
            throw new Error("Not implemented")
        }, Object.defineProperty(StateAnimation.prototype, "value", {
            get: function() {
                return this.stateObject[this.propertyName]
            },
            set: function(t) {
                this.stateObject[this.propertyName] = t
            },
            enumerable: !0
        }), inherit(SpringyAnimation, StateAnimation), SpringyAnimation.defaults = {
            springForce: 1e3,
            damping: 20,
            restThreshold: 1
        }, SpringyAnimation.prototype.animateTo = function(t, i, e) {
            this.running && this.pause(), "function" == typeof i && (e = i, i = 0), this.d = t, this.state.v = "number" == typeof i ? i : 0, this.state.x = this.value, this._callback = e, this.start()
        }, SpringyAnimation.prototype.update = function(t) {
            var i = Math.min(.03, t / 1e3),
                e = Math.abs(this.state.x - this.d);
            e < this.options.restThreshold && Math.abs(this.state.v) < this.options.restThreshold ? (this.pause(), this.value = this.d, this.d = null, defer(this._callback || noop), this._callback = null) : (this._integrate(this.state, i), this.value = this.state.x)
        }, SpringyAnimation.prototype._integrate = function(t, i) {
            var e = this._getDerivative(this.state),
                a = this._getDerivative(this.state, .5 * i, e),
                n = this._getDerivative(this.state, .5 * i, a),
                s = this._getDerivative(this.state, i, n);
            t.x += i / 6 * (e.dx + 2 * (a.dx + n.dx) + s.dx), t.v += i / 6 * (e.dv + 2 * (a.dv + n.dv) + s.dv)
        }, SpringyAnimation.prototype._getDerivative = function(t, i, e) {
            if ("undefined" == typeof e) return {
                dx: t.v,
                dv: this._acceleration(t)
            };
            var a = {
                x: t.x + e.dx * i,
                v: t.v + e.dv * i
            };
            return {
                dx: a.v,
                dv: this._acceleration(a, i)
            }
        }, SpringyAnimation.prototype._acceleration = function(t) {
            return -this.options.springForce * (t.x - this.d) - this.options.damping * t.v
        }, inherit(EasingAnimation, StateAnimation), EasingAnimation.defaults = {
            exp: 1.8
        }, EasingAnimation.presets = {
            easeIn: .6,
            easeOut: 1.8,
            linear: 1
        }, EasingAnimation.prototype.animateTo = function(t, i, e) {
            this.running && this.pause(), this._callback = e, this._startValue = this.value, this._startTime = Date.now(), this._targetValue = t, this._targetTime = i, this.start()
        }, EasingAnimation.prototype.update = function() {
            var t = Date.now() - this._startTime,
                i = this._targetValue - this._startValue;
            t >= this._targetTime ? (this.pause(), this.value = this._targetValue, defer(this._callback || noop), this._startValue = null, this._startTime = null, this._targetValue = null, this._targetTime = null, this._callback = null) : this.value = Math.pow(t / this._targetTime, this.options.exp) * i + this._startValue
        };;

        function ViewportManager(t) {
            this.container = t.container, this.width = this.originalWidth = t.width || 0, this.height = this.originalHeight = t.height || 0, this.iframe = this.container.ownerDocument.defaultView.frameElement, this.init()
        }
        extend(ViewportManager.prototype, EventEmitter), ViewportManager.prototype.init = function() {
            this.container.style.overflow = "hidden", this.container.style.position = "absolute", this.container.style.left = this.container.style.top = 0, this.iframe.style.display = "block", this.update()
        }, ViewportManager.prototype.update = function() {
            this.container.style.width = this.width + "px", this.container.style.height = this.height + "px", this.iframe.style.width = this.width + "px", this.iframe.style.height = this.height + "px", this.iframe.width = this.width, this.iframe.height = this.height
        }, ViewportManager.prototype.setSize = function(t, i) {
            this.width = t, this.height = i, this.update()
        };;

        function Placement(t) {
            this.root = null, this.width = {
                value: 100,
                unit: "%"
            }, this.height = {
                value: 100,
                unit: "%"
            }, this.left = {
                value: 0,
                unit: "px"
            }, this.top = {
                value: 0,
                unit: "px"
            }, this._positioning = t || "container", this.origin = {
                horizontal: "left",
                vertical: "top"
            }, this._usesFixedPositioning = !1, this._minWidth = {
                value: 0,
                unit: "px"
            }, this._minHeight = {
                value: 0,
                unit: "px"
            }, this.touchEventSimulator = null, this.overflow = !1, this._visible = !1, this.isSticky = !1, this.bypassSizing = !1, this.bypassPositioning = !1
        }
        extend(Placement.prototype, EventEmitter), Placement.ZINDEX_MAX = 2147483647, Placement.prototype.getRootWindow = function() {
            return this.root.ownerDocument.defaultView
        }, Placement.prototype.attachTo = function() {
            throw new Error("Placement.attachTo not implemented")
        }, Placement.prototype.getContainer = function() {
            throw new Error("Placement.getContainer not implemented")
        }, Placement.prototype.getContentWindow = function() {
            return this.getContainer().ownerDocument.defaultView
        }, Object.defineProperty(Placement.prototype, "creative", {
            get: function() {
                return this.getContainer().ownerDocument.defaultView.creative
            }
        }), Object.defineProperty(Placement.prototype, "positioning", {
            get: function() {
                return this._positioning
            },
            set: function(t) {
                this._positioning = t, this.update()
            }
        }), Object.defineProperty(Placement.prototype, "visible", {
            get: function() {
                return this._visible
            }
        }), Object.defineProperty(Placement.prototype, "_canUseFixedPositioning", {
            get: function() {
                return this.usesFixedPositioning && this.supportsFixedPositioning
            },
            enumerable: !1
        }), Placement.prototype.setMinimumSize = function(t, e) {
            var i = this._parseLength(t),
                o = this._parseLength(e);
            this._minWidth.value = i.value, this._minWidth.unit = i.unit, this._minHeight.value = o.value, this._minHeight.unit = o.unit, this._visible && this.update()
        }, Placement.prototype.setSize = function(t, e, i) {
            var o, s, n = this._parseLength(t),
                r = this._parseLength(e),
                h = this.getViewportGeometry(),
                l = extend({}, this._minWidth),
                a = extend({}, this._minHeight);
            i || (this.width = {
                value: n.value,
                unit: n.unit
            }, this.height = {
                value: r.value,
                unit: r.unit
            }), this._visible && ("screen" == this.positioning ? (o = h.width, s = h.height) : "page" == this.positioning ? (o = this.root.ownerDocument.documentElement.offsetWidth, s = this.root.ownerDocument.documentElement.offsetHeight) : (o = this.root.parentNode.offsetWidth, s = this.root.parentNode.offsetHeight), "%" == n.unit && (n.value = Math.round(n.value * o / 100), n.unit = "px"), "%" == r.unit && (r.value = Math.round(r.value * s / 100), r.unit = "px"), "%" == l.unit && (l.value = Math.round(l.value * o / 100), l.unit = "px"), "%" == a.unit && (a.value = Math.round(a.value * s / 100), a.unit = "px"), this.bypassSizing || (this.root.style.width = Math.max(n.value, l.value) + n.unit, this.root.style.height = Math.max(r.value, a.value) + r.unit), this.emit("resized"))
        }, Placement.prototype.getBaseOffset = function() {
            var t = this.root.ownerDocument.createElement("div"),
                e = this.root.parentNode;
            t.style.left = 0, t.style.top = 0, t.style.position = "absolute", t.style.setProperty("display", "block", "important"), e.appendChild(t);
            var i = offset(t);
            return e.removeChild(t), i
        }, Placement.prototype.applyCustomPubClasses = function() {
            var t = this._getPubClasses();
            this._usePubClasses = t.length > 0, this._usePubClasses && (this._disableSelfStyling(), this.addClasses.apply(this, t.concat(["celtra-placement"])))
        }, Placement.prototype.usePubClasses = function() {
            return this._usePubClasses
        }, Placement.prototype._disableSelfStyling = function() {
            this.bypassPositioning = !("StickyPlacement" === this.constructor.name || this.isSticky), this.bypassSizing = !0, this._clearCSS(), this.bypassPositioning && (this.root.style.position = "relative")
        }, Placement.prototype._getPubClasses = function() {
            var t = this.creative && this.creative.customAttributes,
                e = [];
            return t && t.hasOwnProperty("cssCustomClass") && "string" == typeof t.cssCustomClass && (e = t.cssCustomClass.split(",")), e
        }, Placement.prototype._clearCSS = function() {
            this.root.style = ""
        }, Placement.prototype.addClasses = function(t) {
            t = Array.prototype.slice.apply(arguments).filter(function(t) {
                return !!t
            }), t.forEach(function(t) {
                try {
                    this.root.classList.add(t)
                } catch (e) {
                    console.warn('Class "' + t + '" not added: ' + e.message)
                }
            }.bind(this))
        }, Placement.prototype.setPosition = function(t, e, i, o) {
            var s = this._parseLength(t),
                n = this._parseLength(e),
                r = this.getViewportGeometry(),
                h = this.getBaseOffset();
            if (i || (this.left.value = s.value, this.left.unit = s.unit, this.top.value = n.value, this.top.unit = n.unit), this._visible && !this.bypassPositioning) {
                switch (this.positioning) {
                    case "screen":
                        if (this._canUseFixedPositioning) this.root.style.position = "fixed", "left" == this.origin.horizontal ? (this.root.style.left = s.value + s.unit, this.root.style.right = "auto", this.root.style.marginLeft = "") : "center" == this.origin.horizontal ? (this.root.style.left = s.value + s.unit, this.root.style.right = "auto", this.root.style.marginLeft = o ? "" : (r.width - this.root.offsetWidth) / 2 + "px") : (this.root.style.right = s.value + s.unit, this.root.style.left = "auto", this.root.style.marginLeft = ""), "top" == this.origin.vertical ? (this.root.style.top = n.value + n.unit, this.root.style.bottom = "auto", this.root.style.marginTop = "") : "center" == this.origin.vertical ? (this.root.style.top = n.value + n.unit, this.root.style.bottom = "auto", this.root.style.marginTop = (r.height - this.root.offsetHeight) / 2 + "px") : (this.root.style.bottom = n.value + n.unit, this.root.style.top = "auto", this.root.style.marginTop = "");
                        else {
                            var l = "",
                                a = "";
                            if ("%" == s.unit && (s.value *= r.width / 100, s.unit = "px"), "%" == n.unit && (n.value *= r.height / 100, n.unit = "px"), "left" == this.origin.horizontal) s.value += r.left;
                            else if ("center" == this.origin.horizontal) s.value += r.left, l = (r.width - this.root.offsetWidth) / 2 + "px";
                            else {
                                var u = "%" == this.width.unit ? this.width.value / 100 * r.width : this.width.value;
                                s.value = r.left + r.width - u - s.value
                            }
                            if ("top" == this.origin.vertical) n.value += r.top;
                            else if ("center" == this.origin.vertical) n.value += r.top, a = (r.height - this.root.offsetHeight) / 2 + "px";
                            else {
                                var p = "%" == this.height.unit ? this.height.value / 100 * r.height : this.height.value;
                                n.value = r.top + r.height - p - n.value
                            }
                            this.root.style.position = "absolute", this.root.style.left = s.value - h.left + "px", this.root.style.top = n.value - h.top + "px", this.root.style.marginLeft = l, this.root.style.marginTop = a, this.root.style.right = this.root.style.bottom = "auto"
                        }
                        break;
                    case "container":
                        this.root.style.position = "absolute", "left" == this.origin.horizontal ? (this.root.style.left = s.value + s.unit, this.root.style.right = "auto", this.root.style.marginLeft = "") : "center" == this.origin.horizontal ? (this.root.style.left = s.value + s.unit, this.root.style.right = "auto", this.root.style.marginLeft = "px" == this.height.unit ? -Math.round(this.width.value / 2) + "px" : -(this.root.offsetWidth / 2) + "px") : (this.root.style.left = "auto", this.root.style.right = s.value + s.unit, this.root.style.marginLeft = ""), "top" == this.origin.vertical ? (this.root.style.top = n.value + n.unit, this.root.style.bottom = "auto", this.root.style.marginTop = "") : "center" == this.origin.vertical ? (this.root.style.top = n.value + n.unit, this.root.style.bottom = "auto", this.root.style.marginTop = "px" == this.height.unit ? -Math.round(this.height.value / 2) + "px" : -(this.root.offsetHeight / 2) + "px") : (this.root.style.top = "auto", this.root.style.bottom = n.value + n.unit, this.root.style.marginTop = "");
                        break;
                    case "page":
                        var c = {
                            width: this.root.ownerDocument.documentElement.clientWidth,
                            height: this.root.ownerDocument.documentElement.clientHeight
                        };
                        "%" == s.unit && (s.value = Math.round(s.value * c.width / 100), s.unit = "px"), "%" == n.unit && (n.value = Math.round(n.value * c.height / 100), n.unit = "px"), this.root.style.position = "absolute", "left" == this.origin.horizontal ? (this.root.style.left = s.value - h.left + "px", this.root.style.top = n.value - h.top + "px") : "center" == this.origin.horizontal ? (this.root.style.left = (c.width - this.root.offsetWidth) / 2 - h.left + s.value + "px", this.root.style.top = (c.height - this.root.offsetHeight) / 2 - h.top + n.value + "px") : (this.root.style.left = c.width - this.root.offsetWidth - h.left - s.value + "px", this.root.style.top = c.height - this.root.offsetHeight - h.top - n.value + "px"), this.root.style.right = this.root.style.bottom = "auto";
                        break;
                    case "static":
                        this.root.style.position = "static", this.root.style.left = this.root.style.top = 0, this.root.style.right = this.root.style.bottom = "auto", this.root.style.marginLeft = this.root.style.marginTop = ""
                }
                this.emit("repositioned")
            }
        }, Placement.prototype.update = function(t) {
            this.setSize(this.width.value + this.width.unit, this.height.value + this.height.unit, !0), this.setPosition(this.left.value + this.left.unit, this.top.value + this.top.unit, !0), defer(t || noop, void 0, void 0, useAsap())
        }, Placement.prototype.supportsFixedPositioning = !0, Object.defineProperty(Placement.prototype, "usesFixedPositioning", {
            get: function() {
                return this._usesFixedPositioning
            },
            set: function(t) {
                this._usesFixedPositioning = !!t, this.update()
            },
            enumerable: !0
        }), Placement.prototype.hacks = {
            useAlternativeWindowDimensions: "BackCompat" == document.compatMode ? !1 : desktop(),
            useSplitScreenWindowDimensions: ios("9", null)
        }, Placement.prototype.hide = function() {
            this.root.style.display = "none", this._visible = !1, this.emit("hidden")
        }, Placement.prototype.show = function() {
            this.root.style.display = "block", this._visible = !0, this.update(), this.emit("shown")
        }, Placement.prototype.destroy = function() {
            this.emit("destroyed"), this.root && this.root.parentNode && this.root.parentNode.removeChild(this.root), this.root = null
        }, Placement.prototype.setZIndex = function(t) {
            0 > t && (t = Placement.ZINDEX_MAX + t), "max" == t && (t = Placement.ZINDEX_MAX), this.root.style.zIndex = t
        }, Placement.prototype.createElement = function() {
            throw new Error("Not implemented")
        }, Placement.prototype.querySelector = function() {
            throw new Error("Not implemented")
        }, Placement.prototype.getViewportGeometry = function() {
            var t = this.getRootWindow(),
                e = t.document.documentElement;
            return {
                width: this.hacks.useAlternativeWindowDimensions || this.hacks.useSplitScreenWindowDimensions ? e.clientWidth : t.innerWidth,
                height: this.hacks.useAlternativeWindowDimensions ? e.clientHeight : t.innerHeight,
                left: t.scrollX || e && e.scrollLeft || 0,
                top: t.scrollY || e && e.scrollTop || 0
            }
        }, Placement.prototype.getPlacementGeometry = function() {
            if ("screen" == this.positioning && this._canUseFixedPositioning) return {
                width: this.root.offsetWidth,
                height: this.root.offsetHeight,
                left: this.root.offsetLeft,
                top: this.root.offsetTop
            };
            var t = offset(this.root),
                e = this.getViewportGeometry();
            return {
                width: this.root.offsetWidth,
                height: this.root.offsetHeight,
                left: t.left - e.left,
                top: t.top - e.top
            }
        }, Placement.prototype.getGlobalGeometry = function(t) {
            for (var e = this.getRootWindow(), i = this.root.getBoundingClientRect(), o = CRect.adopt(i); e !== t && e !== e.parent;) i = CRect.adopt(e.frameElement.getBoundingClientRect()), o.left += i.left, o.top += i.top, o = o.intersect(i), e = e.parent;
            return o
        }, Placement.prototype._parseLength = function(t) {
            if (!isNaN(t)) return {
                value: t,
                unit: "px"
            };
            var e = t.match(/^(-?[\d.]+)(px|%)$/);
            if (!e) throw new Error('Cannot parse length "' + t + '"');
            return {
                value: parseFloat(e[1], 10),
                unit: e[2]
            }
        }, Placement.prototype.getUnitGeometry = function(t) {
            var e = this.getPlacementGeometry(),
                i = {
                    left: e.left,
                    top: e.top,
                    width: t.size.width,
                    height: t.size.height
                },
                o = t.horizontalPosition || "center",
                s = t.verticalPosition || "center";
            return "center" == o ? i.left += (e.width - t.size.width) / 2 : "right" == o && (i.left += e.width - t.size.width), "center" == s ? i.top += (e.height - t.size.height) / 2 : "bottom" == s && (i.top += e.height - t.size.height), i.left = Math.round(i.left), i.top = Math.round(i.top), i
        }, Placement.prototype.getRelativeUnitGeometry = function(t) {
            var e = offset(t.node);
            return e.width = t.node.offsetWidth, e.height = t.node.offsetHeight, e
        }, Placement.prototype.populate = function(t, e) {
            this.getContainer().appendChild(t), this.emit("populated"), e && defer(e, void 0, void 0, useAsap())
        }, Placement.prototype._getViewportElement = function() {
            throw new Error("Not implemented")
        }, Placement.prototype.setBackground = function(t) {
            null == t && (t = "none"), this.root.style.background = t
        }, Placement.prototype.setOverflow = function() {
            var t = function(t) {
                t.preventDefault()
            };
            return function(e) {
                var i = this._getViewportElement();
                e ? (i.style.overflowY = "auto", ios() && (i.style.webkitOverflowScrolling = "touch", detach(i, "touchmove", t, !1))) : (i.style.overflowY = "hidden", ios() && (i.style.webkitOverflowScrolling = "auto", attach(i, "touchmove", t, !1)))
            }
        }(), Placement.prototype._flash = function() {
            var t = this.getContainer().ownerDocument,
                e = this.createElement("div");
            e.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.01;background:black;", t.body.appendChild(e), defer(function() {
                e.parentNode.removeChild(e)
            })
        };;

        function IframePlacement(t, e, n, r) {
            Placement.apply(this, arguments), this.frame = null, this.vm = null, this.unitScript = e, this.windowVarsByRef = n, this.windowVarsByCopy = r, this._syncInterval = null, this._syncIframeSize = this._syncIframeSize.bind(this)
        }
        inherit(IframePlacement, Placement), IframePlacement.create = function(t, e, n, r) {
            var i = new IframePlacement(e, "", n, r);
            return i.root = t.parentNode, i.root.style.display = "none", i.startSyncingIframeSize(), i.frame = t, i.setupFrame(), i
        }, IframePlacement.baseHTML = '<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="initial-scale=1,maximum-scale=1"/></head><body><div id="viewport"></div></body></html>', IframePlacement.prototype.setSize = function() {
            IframePlacement.uber.setSize.apply(this, arguments), this._syncIframeSize()
        }, IframePlacement.prototype.show = function() {
            IframePlacement.uber.show.apply(this, arguments), this._syncIframeSize()
        }, IframePlacement.prototype._syncIframeSize = function() {
            this._visible && this.vm && (this.root.offsetWidth != this.vm.width || this.root.offsetHeight != this.vm.height) && this.vm.setSize(0 | this.root.offsetWidth, 0 | this.root.offsetHeight)
        }, IframePlacement.prototype.startSyncingIframeSize = function() {
            this._syncInterval = this._setInterval(this._syncIframeSize, 100)
        }, IframePlacement.prototype.stopSyncingIframeSize = function() {
            this._syncInterval && this._clearInterval(this._syncInterval), this._syncInterval = null
        }, IframePlacement.prototype.getContainer = function() {
            if (!this.root) throw new Error("Root node not attached to document yet!");
            return this.querySelector("#viewport")
        }, IframePlacement.prototype._setInterval = function(t, e) {
            return this.windowVarsByRef.adapter.getTopWindow().setInterval(t, e)
        }, IframePlacement.prototype._clearInterval = function(t, e) {
            return this.windowVarsByRef.adapter.getTopWindow().clearInterval(t, e)
        }, IframePlacement.prototype.attachTo = function(t, e) {
            this.root = t.ownerDocument.createElement("div"), this.root.style.overflow = "hidden", this.hide(), t.appendChild(this.root), this.startSyncingIframeSize(), this.frame = t.ownerDocument.createElement("iframe"), this.frame.style.border = "0px", this.frame.setAttribute("frameborder", "0"), this.frame.setAttribute("scrolling", "no"), this.frame.setAttribute("allowFullScreen", ""), this.root.appendChild(this.frame), defer(function() {
                if (!this.frame.contentWindow) throw new Error("Can't access contentWindow of an iframe, skip placement initialization.");
                this.frame.contentDocument.open();
                for (var t in this.windowVarsByRef) this.frame.contentWindow[t] = this.windowVarsByRef[t];
                var n = "";
                for (var t in this.windowVarsByCopy) n += "window." + t + " = " + JSON.stringify(this.windowVarsByCopy[t]) + ";\n";
                this.frame.contentDocument.write(IframePlacement.baseHTML);
                var r = this.frame.contentDocument.createElement("script");
                r.textContent = n + ";\n" + this.unitScript, this.frame.contentDocument.body.appendChild(r), attach(this.frame, "load", function() {
                    this.setupFrame(), e && defer(e, void 0, void 0, useAsap())
                }.bind(this)), this.frame.contentDocument.close()
            }.bind(this), void 0, void 0, useAsap())
        }, IframePlacement.prototype.destroy = function() {
            this.stopSyncingIframeSize(), IframePlacement.uber.destroy.apply(this, arguments)
        }, IframePlacement.prototype.createElement = function(t) {
            return this.frame.contentDocument.createElement(t)
        }, IframePlacement.prototype.querySelector = function(t) {
            return this.frame.contentDocument ? this.frame.contentDocument.querySelector(t) : null
        }, IframePlacement.prototype.querySelectorAll = function(t) {
            return this.frame.contentDocument ? this.frame.contentDocument.querySelectorAll(t) : []
        }, IframePlacement.prototype._getViewportElement = function() {
            return this.querySelector("#viewport")
        }, IframePlacement.prototype.setupFrame = function() {
            var t = this.frame.contentDocument.createElement("script");
            t.textContent = "window.touchEventSimulator = new TouchEventSimulator(document);window.touchEventSimulator.init();function __parseJSON(s){return JSON.parse(s);}", this.frame.contentDocument.querySelector("head").appendChild(t), this.touchEventSimulator = this.frame.contentWindow.touchEventSimulator, this.vm = new ViewportManager({
                container: this._getViewportElement()
            })
        };;

        function DivPlacement() {
            Placement.apply(this, arguments)
        }
        inherit(DivPlacement, Placement), DivPlacement.prototype.attachTo = function(t, e) {
            this.root = t.ownerDocument.createElement("div"), this.root.style.overflow = "hidden", this.hide(), t.appendChild(this.root), this.touchEventSimulator = new TouchEventSimulator(this.root), this.touchEventSimulator.init(), e && defer(e, 0, "DivPlacement.attachTo defer callback", useAsap())
        }, DivPlacement.prototype.destroy = function() {
            DivPlacement.uber.destroy.apply(this, arguments), this.touchEventSimulator.stop(), this.touchEventSimulator = null
        }, DivPlacement.prototype.getContainer = function() {
            return this.root
        }, DivPlacement.prototype.createElement = function(t) {
            return this.root.ownerDocument.createElement(t)
        }, DivPlacement.prototype.querySelector = function(t) {
            return this.root.querySelector(t)
        }, DivPlacement.prototype.querySelectorAll = function(t) {
            return this.root.querySelectorAll(t)
        }, DivPlacement.prototype._getViewportElement = function() {
            return this.root
        };;

        function StickyPlacement(t, i, e, s, o) {
            IframePlacement.apply(this, arguments), this.stickyOptions = o, this._handleDismissTouchEnd = this._handleDismissTouchEnd.bind(this), this.origin.horizontal = "center", this.origin.vertical = this.stickyOptions.stickiness, this.usesFixedPositioning = !0, this._originalDocumentPadding = null
        }
        inherit(StickyPlacement, IframePlacement), StickyPlacement.create = function(t, i, e, s, o) {
            var n = new StickyPlacement(i, "", e, s, o);
            return n.root = t.parentNode, n.root.style.display = "none", n.startSyncingIframeSize(), n.frame = t, n.setupFrame(), n
        }, StickyPlacement.prototype.setPosition = StickyPlacement.prototype.setZIndex = noop, StickyPlacement.prototype.show = function() {
            IframePlacement.prototype.show.apply(this, arguments), IframePlacement.prototype.setZIndex.call(this, -20), this.enableDocumentPadding(), this.update()
        }, StickyPlacement.prototype.hide = function() {
            IframePlacement.prototype.hide.apply(this, arguments), this.disableDocumentPadding()
        }, StickyPlacement.prototype.attachTo = function() {
            StickyPlacement.uber.attachTo.apply(this, arguments), addClass(this.root, "celtra-placement-sticky")
        }, StickyPlacement.prototype.populate = function() {
            this.stickyOptions.showDismissButton && this.once("populated", this.createDismissButton.bind(this)), IframePlacement.prototype.populate.apply(this, arguments)
        }, StickyPlacement.prototype.update = function(t, i) {
            this.root && this.root.parentNode && (IframePlacement.prototype.setSize.call(this, this.width.value + this.width.unit, this.height.value + this.height.unit, !0), IframePlacement.prototype.setPosition.call(this, 0, 0, !0, i), defer(t))
        }, StickyPlacement.prototype.createDismissButton = function() {
            this.getViewportGeometry();
            with(this.root.style.overflow = "visible", this._dismissButton = this.root.ownerDocument.createElement("img"), this._dismissButton.src = this.stickyOptions.baseUrl + "runner/clazzes/CreativeUnit/close-up.svg", this._dismissButton.style) switch (position = "absolute", left = "auto", right = "6px", width = "32px", height = "32px", zIndex = 10, this.stickyOptions.stickiness) {
                case "top":
                    top = "auto", bottom = "-16px";
                    break;
                case "bottom":
                    top = "-16px", bottom = "auto"
            }
            deviceInfo.deviceType.mobileDevice() ? attach(this._dismissButton, "touchend", this._handleDismissTouchEnd, !1) : attach(this._dismissButton, "click", this._handleDismissTouchEnd, !1), this.root.appendChild(this._dismissButton)
        }, StickyPlacement.prototype._handleDismissTouchEnd = function(t) {
            t.preventDefault(), t.stopPropagation(), this.disableDocumentPadding(), (this.stickyOptions.dismissCallback || noop)()
        }, StickyPlacement.prototype.enableDocumentPadding = function() {
            var t = this.getRootWindow(),
                i = t.document.documentElement;
            this._originalDocumentPadding || (this._originalDocumentPadding = t.getComputedStyle(i)["padding-" + this.stickyOptions.stickiness]), i.style["padding-" + this.stickyOptions.stickiness] = this.root.offsetHeight + "px"
        }, StickyPlacement.prototype.disableDocumentPadding = function() {
            var t = this.getRootWindow(),
                i = t.document.documentElement;
            i.style["padding-" + this.stickyOptions.stickiness] = this._originalDocumentPadding, this._originalDocumentPadding = null
        }, StickyPlacement.prototype.hideStickyCloseButton = function() {
            this._dismissButton.style.display = "none"
        }, StickyPlacement.prototype.showStickyCloseButton = function() {
            this._dismissButton.style.display = "block"
        };;

        function Format(e, t) {
            if (this.adapter = e, this.state = null, this.units = t, this.observesViewability = !0, this.observingViewability = function(e) {
                    return this.observesViewability && this.adapter.viewabilityMeasurable["viewable" + e]
                }.bind(this), this._observesViewableTime = !1, this.observingViewableTime = this.observingViewableTime.bind(this), this.observationAbilities = {
                    observingViewability: this.observingViewability,
                    observingViewableTime: this.observingViewableTime
                }, this._allowNonNativeRAFForViewableTime = "1" == this.adapter.runtimeParams._allowNonNativeRAFForViewableTime, this.adapter.nesting && this.adapter.nesting.hostileIframe && this.needsAccessToHostPage() && trackingCenter.track({
                    name: "userError",
                    userErrorId: "nonFriendlyIFrame"
                }), this.adapter.usedByStandalonePreview && this.adapter.on("applyShareableState", this._applyShareableState.bind(this)), this.adapter.runtimeParams.massProductionPreview) {
                extend(Format.prototype, TraversableUnitsTrait), this.adapter.on("resizeVariants", function(e) {
                    var t = this.placements.banner.creative.units.banner;
                    t && t.variants && this.goToObject(e.goToObjectLocalId, function() {
                        e.variants.forEach(function(e) {
                            var i = t.variants.filter(function(t) {
                                return t.localId === e.localId
                            });
                            if (1 === i.length || i[0].parentUnit.currentVariant.localId === e.localId) {
                                var a = i[0];
                                a.setLayoutSize(e.width, e.height), a.parentUnit.preventUVUpdate = !0, a.updateSizeAndPosition(), this.placements.banner.setSize(e.width, e.height)
                            }
                        }.bind(this))
                    }.bind(this))
                }.bind(this));
                var i = function() {
                    var e = function(e) {
                        return "undefined" != typeof e
                    };
                    return Object.keys(this.placements).map(function(e) {
                        return this.placements[e].creative
                    }.bind(this)).filter(e)
                }.bind(this);
                this.adapter.on("setValue", function(e) {
                    i().forEach(function(t) {
                        if (t.setValue(e.objectLocalId, e.property, e.value), "undefined" != typeof e.goToObjectLocalId) {
                            var i = t.findByLocalId(e.goToObjectLocalId);
                            this.goToObject(i)
                        }
                    }.bind(this))
                }.bind(this)), this.adapter.on("goToObject", function(e) {
                    i().forEach(function(t) {
                        var i = t.findByLocalId(e.objectLocalId);
                        this.goToObject(i)
                    }.bind(this))
                }.bind(this))
            }
        }
        extend(Format.prototype, EventEmitter), Object.defineProperty(Format.prototype, "placements", {
            get: function() {
                return this.adapter.placements
            },
            enumerable: !0
        }), Format.prototype.observingViewableTime = function() {
            var e = this.adapter;
            return this._observesViewableTime && !!this.observingViewability("00") && e.raf.environment && (e.raf.isNative || this._allowNonNativeRAFForViewableTime) && (e.supportsContainerViewability || e.canMeasureViewportPlacementGeometry)
        }, Format.prototype.transitionTo = function() {
            throw new Error("transitionTo not implemented")
        }, Format.prototype.destroy = function() {
            for (var e in this.placements) this.adapter.destroyPlacement(e), delete this.placements[e];
            this.adapter._stopObservingEnvironment(), this.adViewableTimeObserver && this.adViewableTimeObserver.stop()
        }, Format.prototype.hacks = {}, Format.prototype._attachInViewToOrderedPlacements = function(e, t, i) {
            var a = i ? i : t;
            e._outerPlacement = a, this.adapter.canMeasureViewportPlacementGeometry && (a.inView || (a.inView = new PlacementInView(this.adapter, a)), i && !t.inView && (t.inView = new PlacementInView(this.adapter, t, i.inView)), e.inView || (e.inView = new InViewObject(e, t.inView)))
        }, Format.prototype.connectPlacementEventsToUnitBehavior = function(e, t) {
            this.adapter.on("orientationchange", function() {
                e.update(noop, this.adapter.adBehavior.crossScreenSticky)
            }.bind(this)), e.on("resized", function() {
                if (e._visible) {
                    var i = e.getPlacementGeometry();
                    i.width < 2 && i.height < 2 || t.setAvailableSize(i.width, i.height)
                }
            }), this.adapter.runtimeParams.massProductionPreview && t.on("loaded", function() {
                this.adapter.sendUnitLoaded()
            }), e.on("shown", function() {
                var i = e.getPlacementGeometry();
                t.setAvailableSize(i.width, i.height), t.enterRenderTree()
            }), e.on("hidden", function() {
                t.exitRenderTree()
            }), this.adapter.usedByStandalonePreview && (t.on("shareableStateChanged", this.sendShareableStateToPreview.bind(this, t)), e.on("shown", this.sendShareableStateToPreview.bind(this, t)))
        }, Format.prototype._trackViewportPlacementGeometry = function(e) {
            function t(e) {
                var t = e.document.documentElement;
                return {
                    width: e.innerWidth,
                    height: e.innerHeight,
                    left: e.scrollX || t && t.scrollLeft || 0,
                    top: e.scrollY || t && t.scrollTop || 0
                }
            }
            var i = this.adapter.getTopWindow(),
                a = e.getGlobalGeometry(i),
                n = t(i),
                r = CRect.adopt(a);
            r.left += n.left, r.top += n.top;
            var o = {
                name: "viewportPlacementGeometry",
                pageDimensions: this.adapter.getPageDimensions(),
                viewportPositionRect: n,
                firstPlacementPositionRect: r
            };
            this.adapter.trackingCenter.trackNoLaterThan(o)
        }, Format.prototype.setupViewableTimeObserver = function() {
            if (this._observesViewableTime = "0" !== this.adapter.runtimeParams._trackViewableTime, this.observingViewableTime()) {
                var e = this.adapter,
                    t = new AdViewableTimeTracker(e.trackingCenter, e.raf.environment, e.getTopWindow());
                this.adViewableTimeObserver = e.canMeasureViewportPlacementGeometry ? new AdViewableInViewObjectObserver(t) : new AdViewableUnitObserver(t), this.adViewableTimeObserver.registerAdapter(e)
            }
        }, Format.prototype.sendShareableStateToPreview = function(e) {
            this.adapter.sendShareableStateToPreview(this._getShareableState(e))
        }, Format.prototype._getShareableState = function(e) {
            return {
                unit: e.getShareableState()
            }
        }, Format.prototype._applyShareableState = function() {}, Format.IGNORABLES = ["INPUT", "TEXTAREA", "SELECT"], Format.isElementIgnorable = function(e) {
            return Format.IGNORABLES.indexOf(e.tagName) > -1
        }, Format.prototype.needsAccessToHostPage = function() {
            return !1
        }, Format.prototype._goToUnit = function(e, t) {
            var i = null;
            for (var a in this.units)
                if (this.units[a].localId == e && (i = this.units[a]), i) break;
            t(i)
        };;

        function UnitViewabilityObserver(e, t, i, r) {
            this.adapter = e, this.win = e.getTopWindow(), this.placement = t, this.element = i, this._listeners = [], this._active = !1, this._currentViewability = null, this._inTimer = {}, this._ratio = 0, this._samplingRect = new CRect, this._lastSamplingTimestamp = 0, this._minSamplingTimeDelta = 200, this._calc = this._calc.bind(this), this._useIntersectionObserver = !!r, this._asyncComputed = {
                ratio: 0,
                boundingClientRect: {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0
                }
            }
        }
        UnitViewabilityObserver.samplingCount = 100, UnitViewabilityObserver.minimumOpacity = .95, UnitViewabilityObserver.prototype._getUnitVisibleGeometry = function() {
            return this._useIntersectionObserver ? this._getIntersectionObserverGeometry() : this._getOldObserverGeometry()
        }, UnitViewabilityObserver.prototype._getOldObserverGeometry = function() {
            var e = this.adapter.getPlacementRect(this.placement),
                t = this.adapter.getViewportRect(),
                i = CRect.adopt(this.placement.getContainer().getBoundingClientRect()),
                r = CRect.adopt(this.element.getBoundingClientRect()),
                n = r.intersect(i),
                s = r.map(i, e),
                a = n ? n.map(i, e).intersect(t) : null;
            return {
                globalUnitRect: s,
                intersect: a,
                ratio: a && s.area > 0 ? a.area / s.area : 0
            }
        }, UnitViewabilityObserver.prototype._getIntersectionObserverGeometry = function() {
            var e = 0;
            if (this._asyncComputed.ratio > 0) var t = this.adapter.getPlacementRect(this.placement),
                i = CRect.adopt(this.placement.getContainer().getBoundingClientRect()),
                r = this._asyncComputed.rect,
                n = new CRect(r.x, r.y, r.width, r.height),
                e = n.map(i, t);
            return {
                globalUnitRect: this._asyncComputed.boundingClientRect,
                intersect: e,
                ratio: this._asyncComputed.ratio
            }
        }, UnitViewabilityObserver.prototype._handleIntersect = function(e) {
            e.forEach(function(e) {
                this._asyncComputed = {
                    ratio: e.intersectionRatio,
                    rect: e.intersectionRect,
                    boundingClientRect: e.boundingClientRect
                }
            }.bind(this))
        }, UnitViewabilityObserver.prototype._intersectionObserverSetUp = function() {
            function e(e) {
                for (var t = [], i = 0; e >= i; i++) {
                    var r = i / e;
                    t.push(r)
                }
                return t
            }
            var t = this.element,
                i = 50,
                r = {
                    threshold: e(i)
                };
            this._useIntersectionObserver = new IntersectionObserver(this._handleIntersect.bind(this), r), this._useIntersectionObserver.observe(t)
        }, UnitViewabilityObserver.prototype.computeUnitInteractableRatio = function() {
            if (!this.element.parentNode || !this.placement.root.parentNode) return 0;
            if (!this.adapter.containerIsViewable || !this.element.ownerDocument.defaultView) return 0;
            var e = this._getUnitVisibleGeometry(),
                t = (e.intersect, e.ratio);
            return this._ratio = t, this._ratio
        }, UnitViewabilityObserver.prototype.addListener = function(e) {
            this._listeners.push(e), this._start()
        }, UnitViewabilityObserver.prototype.removeListener = function(e) {
            this._listeners = this._listeners.filter(function(t) {
                return t !== e
            }), 0 === this._listeners.length && this.stop()
        }, UnitViewabilityObserver.prototype._calc = function(e) {
            if (this._active) {
                var t = this._getUnitVisibleGeometry().globalUnitRect;
                this._currentViewability = this.computeUnitInteractableRatio(e), this._listeners.forEach(function(e) {
                    this._currentViewability !== e.previousViewability && (e.previousViewability = this._currentViewability, e(this._currentViewability, t))
                }, this)
            }
        }, UnitViewabilityObserver.prototype._start = function() {
            this._active || (this._active = !0, this._useIntersectionObserver && this._intersectionObserverSetUp(), this.adapter.on("containerViewableChange", this._calc), Ticker.frame(this._calc, "update"))
        }, UnitViewabilityObserver.prototype.stop = function() {
            if (this._active) {
                this._active = !1, this.adapter.off("containerViewableChange", this._calc), Ticker.removeFrame(this._calc, "update");
                for (var e in this._inTimer) this.win.clearTimeout(this._inTimer[e]);
                this._inTimer = {}, this._useIntersectionObserver && this._useIntersectionObserver.unobserve(this.element)
            }
        }, UnitViewabilityObserver.prototype.waitForViewable = function(e, t) {
            var i = function(r, n) {
                var s = UnitViewabilityObserver.selectCriterion(e, n),
                    a = 0 == s.ratio ? r > 0 : r >= s.ratio;
                if (a) {
                    var o = function() {
                        this.removeListener(i), t(s)
                    }.bind(this);
                    "Core" == e ? o() : this._inTimer[e] || (this._inTimer[e] = this.win.setTimeout(o, s.time))
                } else this._inTimer[e] && (this.win.clearTimeout(this._inTimer[e]), this._inTimer[e] = null)
            }.bind(this);
            return this.addListener(i), i
        }, UnitViewabilityObserver.prototype.waitForViewableCore = function(e) {
            return this.waitForViewable("Core", e)
        }, UnitViewabilityObserver.prototype.waitForViewableIAB = function(e) {
            return this.waitForViewable("IAB", e)
        }, UnitViewabilityObserver.prototype.waitForVideoViewableIAB = function(e) {
            return this.waitForViewable("IABvideo", e)
        }, UnitViewabilityObserver.prototype.waitForVideoViewableFB = function(e) {
            return this.waitForViewable("FBvideo", e)
        }, UnitViewabilityObserver.LARGE_AD_PIXEL_COUNT = 242500, UnitViewabilityObserver.selectCriterion = function(e, t) {
            switch (e) {
                case "IAB":
                    var i = t && t.width * t.height > UnitViewabilityObserver.LARGE_AD_PIXEL_COUNT;
                    return i ? this.criteria.IABlargeAd : this.criteria.IABsmallAd;
                case "Core":
                case "IABvideo":
                case "FBvideo":
                    return this.criteria[e];
                default:
                    throw new Error("Unknown viewability criterion.")
            }
        }, UnitViewabilityObserver.criteria = {
            Core: {
                name: "Core",
                ratio: 0,
                time: 0
            },
            IABsmallAd: {
                name: "50/1",
                ratio: .5,
                time: 1e3
            },
            IABlargeAd: {
                name: "30/1",
                ratio: .3,
                time: 1e3
            },
            IABvideo: {
                name: "50/2",
                ratio: .5,
                time: 2e3
            },
            FBvideo: {
                name: "50/3",
                ratio: .5,
                time: 3e3
            }
        };;

        function PlacementInView(t, e, i) {
            this._init(), this.adapter = t, this.placement = e, this.node = e.getContainer(), this.inViewParent = i, this.outerRectInView = CRect.ZERO, this._lastScrollTime = 0, this._isTouchDown = !1, this._autoSwitchObserverRunningState = this._autoSwitchObserverRunningState.bind(this), this.destroy = this.destroy.bind(this), this._onScroll = this._onScroll.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this.hacks = {
                wrongBoundingRectWhileScrolling: deviceInfo.os.ios() && this.placement.isSticky
            }, this.inViewParent || (this._tick = this._tick.bind(this), this._timestepInterval = 200, this._lastRunTime = 0, this.adapter.on("containerViewableChange", this._autoSwitchObserverRunningState)), e.on("destroyed", this.destroy), this._autoSwitchObserverRunningState(), e.on("shown", this._autoSwitchObserverRunningState), e.on("hidden", this._autoSwitchObserverRunningState), this.hacks.wrongBoundingRectWhileScrolling && (this.adapter.getTopWindow().addEventListener("scroll", this._onScroll, !0), this.adapter.getTopWindow().addEventListener("touchstart", this._onTouchStart, !0), this.adapter.getTopWindow().addEventListener("touchend", this._onTouchEnd, !0))
        }
        inherit(PlacementInView, InViewObject), PlacementInView.prototype._onScroll = function() {
            this._lastScrollTime = Date.now()
        }, PlacementInView.prototype._onTouchStart = function() {
            this._isTouchDown = !0
        }, PlacementInView.prototype._onTouchEnd = function() {
            this._isTouchDown = !1
        }, PlacementInView.prototype._autoSwitchObserverRunningState = function() {
            var t = this.placement.visible && this.adapter.containerIsViewable;
            t && !this.active ? this.start() : !t && this.active && (this.stop(), this.rectInView = CRect.ZERO, this.outerRectInView = CRect.ZERO, this.areaInView = 0, this.emit("rectInViewChanged", this.rectInView), this.emit("outerRectInViewChanged", this.outerRectInView), Logger("InViewObject").debug(this.placement.constructor.name + ", rectInViewChanged: " + this.rectInView.toString()), this.emit("areaInViewRatioChanged", this.areaInView), Logger("InViewObject").debug(this.placement.constructor.name + ", areaInViewRatioChanged: " + this.areaInView))
        }, PlacementInView.prototype.getNode = function() {
            return this.placement.getContainer()
        }, PlacementInView.prototype.getOuterRectInView = function() {
            return this.outerRectInView
        }, PlacementInView.prototype.getParentRect = function() {
            return this.inViewParent ? this.inViewParent.getOuterRectInView() : this.adapter.getViewportRect()
        }, PlacementInView.prototype.computeRectInView = function() {
            if (!this.hacks.wrongBoundingRectWhileScrolling || !(Date.now() - this._lastScrollTime < 100 || this._isTouchDown)) {
                var t = this.getNode(),
                    e = this.adapter.getPlacementRect(this.placement),
                    i = t ? CRect.adopt(t.getBoundingClientRect()) : CRect.ZERO,
                    n = this.getParentRect(),
                    o = this.adapter.getPlacementRect(this.placement),
                    s = o.intersect(n),
                    h = s.zero() ? CRect.ZERO : s.map(e, i);
                this._computeMaxPossibleDimensions(o, this.getParentMaxPossDims()), this.rectInView.equals(h) || (this.rectInView = h, this.emit("rectInViewChanged", h), Logger("InViewObject").debug(this.placement.constructor.name + ", rectInViewChanged: " + this.rectInView.toString())), this.outerRectInView.equals(s) || (this.outerRectInView = s, this.emit("outerRectInViewChanged", s), Logger("InViewObject").debug(this.placement.constructor.name + ", placementRectInViewChanged: " + this.outerRectInView.toString()))
            }
        }, PlacementInView.prototype.destroy = function() {
            this.hacks.wrongBoundingRectWhileScrolling && (this.adapter.getTopWindow().removeEventListener("scroll", this._onScroll, !0), this.adapter.getTopWindow().removeEventListener("touchstart", this._onTouchStart, !0), this.adapter.getTopWindow().removeEventListener("touchend", this._onTouchEnd, !0)), this.stop(), this.adapter.off("containerViewableChange", this._autoSwitchObserverRunningState)
        }, PlacementInView.prototype._start = function() {
            this.inViewParent ? this.inViewParent.on("outerRectInViewChanged", this.computeRectInView) : this.adapter.Ticker.frame(this._tick, "update")
        }, PlacementInView.prototype._stop = function() {
            this.inViewParent ? this.inViewParent.off("outerRectInViewChanged", this.computeRectInView) : this.adapter.Ticker.removeFrame(this._tick, "update")
        }, PlacementInView.prototype._tick = function() {
            var t = Date.now();
            t - this._lastRunTime > this._timestepInterval && (this.computeRectInView(), this._lastRunTime = t)
        };;

        function Tapper(t, e) {
            function a(t) {
                for (var e = t, a = null; 1 != e.nodeType;) e = e.parentNode;
                for (; e && 1 == e.nodeType && e.tagName;) {
                    var n = e.tagName.toLowerCase();
                    if (hasClass(e, "touchable") || "a" === n && e.href || "button" === n || "img" === n || "input" === n && e.type && "button" === e.type.toLowerCase()) {
                        a = e;
                        break
                    }
                    e = e.parentNode
                }
                return a
            }

            function n(t, e) {
                var a = t.ownerDocument.createEvent("MouseEvents");
                a.initEvent("tap", !0, !0), e.dispatchEvent(a)
            }
            var c = "undefined" != typeof creative && creative.adapter || adapter;
            e = e || c.useNativeClickForTapDetection, e && (attach(t, "click", function(e) {
                var c = a(e.target);
                c && n(t, c)
            }, !c.nativeClickEmittedOnSwipe), c.useNativeClickForTapDetection) || attach(t, "touchstart", function(o) {
                var r = a(o.target);
                if (r) {
                    var i = !1;
                    if (celtra.iframe()) {
                        var u = function() {
                                var t = c.getTopWindow();
                                return [t.scrollX, t.scrollY, t.innerWidth, t.innerHeight]
                            },
                            h = u();
                        i = !0
                    }
                    var s = 10,
                        d = o.targetTouches[0].clientX - s,
                        v = o.targetTouches[0].clientX + s,
                        l = o.targetTouches[0].clientY - s,
                        f = o.targetTouches[0].clientY + s;
                    addClass(r, "touched");
                    var p = !1,
                        g = !1,
                        m = !1,
                        T = !1,
                        C = new Date,
                        w = function(t) {
                            if (!p && !g) {
                                var e = t.targetTouches[0].clientX,
                                    a = t.targetTouches[0].clientY;
                                p = i && h.toString() != u().toString(), g = !(e >= d && v >= e && a >= l && f >= a), g || p ? removeClass(r, "touched") : addClass(r, "touched")
                            }
                        },
                        k = function() {
                            if (!T && (T = !0, detach(t, "touchmove", w, !1), detach(t, "touchend", arguments.callee, !1), hasClass(r, "touched"))) {
                                var a = 200,
                                    c = new Date - C > a && !deviceInfo.deviceType.desktop();
                                if (removeClass(r, "touched"), g || p || m || c) return;
                                e || n(t, r)
                            }
                        },
                        y = function() {
                            detach(t, "touchend", y, !0), nextFrame(function() {
                                m = !0, k()
                            })
                        };
                    attach(t, "touchcancel", function(t) {
                        removeClass(r, "touched"), k(t)
                    }, !1), attach(t, "touchmove", w, !1), attach(t, "touchend", k, !1), attach(t, "touchend", y, !0)
                }
            }, !0)
        };

        function BannerFormat(e) {
            Format.apply(this, arguments), e.adBehavior.interstitial = !1, e.adBehavior.expandable = !1, this._tick = this._tick.bind(this), this.setup()
        }
        inherit(BannerFormat, Format), extend(BannerFormat.prototype, SingleUnitFormatShareableStateNavigation), BannerFormat.prototype.setup = function() {
            this.setupViewableTimeObserver();
            var e = new TaskScheduler;
            e.when("ready").run(function() {
                this.adapter.createPlacements({
                    banner: {
                        attachment: "inline",
                        positioning: "static",
                        type: "unit"
                    }
                }, function() {
                    var t = this.placements.banner;
                    this.populateBanner(t, function() {
                        this.adViewableTimeObserver && this.adViewableTimeObserver.registerUnit(t.creative.units.banner), e.notify("unitPopulated")
                    }.bind(this))
                }.bind(this))
            }.bind(this)), e.when("unitPopulated").run(function() {
                var t = this.placements.banner,
                    i = this.units.banner = t.creative.units.banner,
                    a = !1;
                t.creative.trackCreativeLoaded(this.observationAbilities), this.adapter.triggerLoadedEvent(this.units.banner.node), this.adapter.setMinimumSize(this.units.banner.size.width, this.units.banner.size.height), t.show(), this.adapter.Ticker.frame(this._tick, "update"), i.updateRxState(t.root), this.adapter.canMeasureViewportPlacementGeometryRelativeToPage && this._trackViewportPlacementGeometry(t), this.adapter.viewabilityMeasurable.viewable00 ? (a = "1" == this.adapter.runtimeParams.immediateAppear, this.adapter.waitForViewableCore(t, i.node, function(i) {
                    t.creative.track({
                        name: "viewable00",
                        criterion: i
                    }), this.adViewableTimeObserver && this.adViewableTimeObserver.readyToShow(), a || e.notify("placementViewable")
                }.bind(this))) : a = !0, a && defer(e.notifies("placementViewable"), void 0, void 0, this.adapter.useAsap), this.adapter.viewabilityMeasurable.viewable501 && this.adapter.waitForViewableIAB(t, i.node, function(e) {
                    t.creative.track({
                        name: "viewable501",
                        criterion: e
                    })
                })
            }.bind(this)), e.when("placementViewable").run(function() {
                e.pause(), this.adapter.on("stateChange", function(e) {
                    this.transitionTo(e)
                }.bind(this)), this.transitionTo("default")
            }.bind(this)), this.adapter.on("ready", e.notifies("ready"))
        }, BannerFormat.prototype.populateBanner = function(e, t) {
            var i = e.creative.units.banner,
                a = "top" == this.adapter.runtimeParams.sticky || "bottom" == this.adapter.runtimeParams.sticky;
            i.swipeable = !0, i.firstAppearWithoutUserInteraction = !0, this.adapter.isRxAvailable && i.createRxState(), a && (e.isSticky = !0), this._attachInViewToOrderedPlacements(i, e), this.connectPlacementEventsToUnitBehavior(e, i);
            var n = i.getNode(function() {
                e.setMinimumSize(i.size.width, i.size.height), e.populate(n, t), a ? e.setSize(i.size.width, i.size.height) : e.setSize("100%", "100%"), e.setPosition(0, 0)
            }.bind(this))
        }, BannerFormat.prototype.transitionTo = function(e, t, i) {
            i || (i = noop);
            if ("default" == e && null === this.state) this.placements.banner.show(), this.units.banner.appear(), defer(i);
            else {
                if ("dismissed" != e || "default" != this.state && null != this.state) throw new Error("Invalid state transition request! (" + this.state + " => " + e + ")");
                this.destroy()
            }
            this.state = e
        }, BannerFormat.prototype.destroy = function() {
            this.adapter.Ticker.removeFrame(this._tick, "update"), BannerFormat.uber.destroy.apply(this)
        }, BannerFormat.prototype._tick = function() {
            return this.placements.banner.root.ownerDocument.defaultView ? void(this.placements.banner._visible && this.units.banner.updateRxState(this.placements.banner.root)) : void this.destroy()
        };;

        function SDKAdapter(e, t, i, n, r, o, a, s, d, p) {
            function h(e) {
                return this.experiments && this.experiments.get && this.experiments.get(e)
            }

            function c(e, t) {
                return "1" === t || e && "treatment" === e.chosenVariant && "0" !== t
            }
            if (this.runtimeParams = e, this.trackingCenter = t, this.aggregatorTracking = i, this.experiments = n, this.useAsap = c(h("DeferWithAsap"), e._useAsap), this._renderBeforeDomReady = c(h("RenderBeforeDomReady"), e._renderImmediately), this.macros = a, this.perf = p, defer.perf = p, this.ampDetected = !1, this.ampNestingLevel = "", this.safeFrameDetected = !1, this.scriptElement = script, this.domApi = this.scriptElement.parentNode.celtra = {
                    loaded: !1,
                    viewabilityObservee: null
                }, this.adapterWindow = window, this.tagWindow = this.scriptElement.ownerDocument.defaultView, this.nesting = getWindowNesting(this.tagWindow), this.tagElement = this.scriptElement.parentNode, this.hostElement = this.tagElement, this.storeOpenedOverrideUrls = o, this.urlOpenedOverrideUrls = r, this.urlOpenedUrlAppendage = s, this.clickThroughDestinationUrl = d, this.useNativeClickForTapDetection = !0, this.nativeClickEmittedOnSwipe = deviceInfo.deviceType.desktop() || deviceInfo.os.ios(), this.providesCloseButton = !1, this.enableCustomStateTransitions = !1, this.adBehavior = {
                    interstitial: !1,
                    expandable: !1,
                    expanded: !1,
                    sticky: !1,
                    crossScreenSticky: !1,
                    attachInlinePlacementToViewport: !1,
                    scrollable: !1
                }, this.isRxAvailable = !1, this.viewabilityMeasurable = {
                    viewable00: !1,
                    viewable501: !1
                }, this.canMeasureViewportPlacementGeometry = !1, this.canMeasureViewportPlacementGeometryRelativeToPage = !1, this.canMeasureContainerAreaInViewRatio = !1, this.supportsContainerViewability = !1, this.supportsContainerInitialViewability = !1, this.useFSVP = !0, "undefined" != typeof this.runtimeParams.topLayerZIndex) {
                var l = parseInt(this.runtimeParams.topLayerZIndex, 10);
                !isNaN(l) && l > 20 && (Placement.ZINDEX_MAX = Math.min(Placement.ZINDEX_MAX, l))
            }
            this.hacks = {
                useResizeOnScroll: ios("9")
            }, this._hooks = {}, this.placements = {}, this._handleResize = this._handleResize.bind(this), this._handleOrientationChange = this._handleOrientationChange.bind(this), this._handleViewportChange = this._handleViewportChange.bind(this), this._handleDetachedFromDocument = this._handleDetachedFromDocument.bind(this), this._updatePlacements = this._updatePlacements.bind(this), this.listenForExpandErrors = this.listenForExpandErrors.bind(this), this._keyboardShown = !1, this._initialInnerDims = null, this._onKeyboardShown = this._onKeyboardShown.bind(this), this._onKeyboardHidden = this._onKeyboardHidden.bind(this), this._resizeTimer = null, this._listening = !1, this._touchEventSimulator = null, this.hostContainerSize = {
                width: "100%",
                height: "100%"
            }, this.mediaState = new MediaState, this.nativeRAFIsSupported = ["r", "webkitR", "mozR", "msR"].some(function(e) {
                return e + "equestAnimationFrame" in window
            }), this.visibilityApiIsSupported = ["webkit", "moz", "ms", ""].some(function(e) {
                return (e ? e + "Hidden" : "hidden") in window.document
            });
            var u = function(e) {
                e && (this.trackingCenter.track({
                    name: "containerBecameViewable"
                }), this.off("containerViewableChange", u))
            }.bind(this);
            defer(function() {
                var e = this.perf.start("Adapter.startObservingEnvironment");
                this._startObservingEnvironment(), e.end(), this.supportsContainerInitialViewability && (this.containerIsViewable ? this.trackingCenter.track({
                    name: "containerBecameViewable"
                }) : this.on("containerViewableChange", u))
            }.bind(this), 0, "SDKAdapter defer _startObservingEnvironment", this.useAsap), this.on("containerViewableChange", this.trackingCenter.batchFlush), this.getTopWindow().document.addEventListener("unload", this.trackingCenter.batchFlush), this.getTopWindow().document.addEventListener("beforeunload", this.trackingCenter.batchFlush), this.getTopWindow().document.addEventListener("pagehide", this.trackingCenter.batchFlush), this.trackingCenter.startBatchFlushCycle(1e3), this.on("resize", this._updatePlacements), this._displayed = !1, this.on("displayed", function() {
                this._displayed = !0
            }.bind(this)), this.sdkReady = !1, this.canOpenUrlInSameWindow = !1, this._initRequestAnimationFrame(), this.once("domReady", this.perf.marks("Adapter.domReady")), this.once("documentReady", this.perf.marks("Adapter.documentReady")), this.once("sdkReady", this.perf.marks("Adapter.sdkReady")), this.once("ready", this.perf.marks("Adapter.ready")), defer(function() {
                var e = this.perf.start("Adapter.initSdk");
                this._initSdk(deferred(function() {
                    e.end(), this.sdkReady = !0, this.emit("sdkReady")
                }.bind(this), 0, "SDKAdapter defer sdkReady", this.useAsap))
            }.bind(this), 0, "SDKAdapter defer _initSdk", this.useAsap), this.on("documentReady", function() {
                android("4.0") && this.getTopWindow().setInterval(function() {
                    for (var e in this.placements) this.placements[e]._flash()
                }.bind(this), 250), this.runtimeParams._mraidCheck && defer(function() {
                    this.collectAndTrackData(function(e) {
                        var t = {
                            isMraid: "undefined" != typeof this.tagWindow.mraid
                        };
                        e(t)
                    }.bind(this), "mraidCheckEnvironmentInfo")
                }.bind(this), 1e3)
            }.bind(this)), this.useFixedPositioningForInterstitial = !1
        }
        extend(SDKAdapter.prototype, EventEmitter), SDKAdapter.prototype.protoLoading = {}, Object.defineProperties(SDKAdapter.prototype.protoLoading, {
            dataURIsSupported: {
                get: function() {
                    return !!runtimeParams.protoLoading && "supported" === runtimeParams.protoLoading.dataLoadStatus
                },
                enumerable: !0
            },
            blobURIsSupported: {
                get: function() {
                    return !!runtimeParams.protoLoading && "supported" === runtimeParams.protoLoading.blobLoadStatus
                },
                enumerable: !0
            }
        }), Object.defineProperty(SDKAdapter.prototype, "__CELTRA", {
            get: function() {
                return this.getTopWindow().__CELTRA || (this.getTopWindow().__CELTRA = {
                    formats: []
                }), this.getTopWindow().__CELTRA
            },
            enumerable: !0
        }), Object.defineProperty(SDKAdapter.prototype, "assumeScrollSupported", {
            get: function() {
                return !1
            }
        }), SDKAdapter.prototype._initRequestAnimationFrame = function() {
            var e = this.getTopWindow();
            this.raf = new RequestAnimationFrameWrapper(e), this.Ticker = new CTicker(this.raf, e), this.nextFrame = this.Ticker.raf.nextFrame, this.cancelFrame = this.Ticker.raf.cancelFrame, window.nextFrame = this.Ticker.raf.nextFrame, window.cancelFrame = this.Ticker.raf.cancelFrame, window.Ticker = this.Ticker
        }, SDKAdapter.prototype._startObservingEnvironment = function() {
            function e(e) {
                return "$sf" in e && e.$sf.ext
            }

            function t(e) {
                return e.context && "undefined" != typeof e.context.pageViewId
            }
            if (!this._listening) {
                try {
                    for (var i = this.tagWindow, n = 0; i;) {
                        if (t(i)) {
                            this.ampDetected = !0, this.ampNestingLevel = n;
                            break
                        }
                        if (e(i)) {
                            this.safeFrameDetected = !0;
                            break
                        }
                        if (i == i.parent) break;
                        i = i.parent, n++
                    }
                } catch (r) {}
                this.resizeListener = this._createViewportListener(), this.resizeListener.start(this._handleResize, this._handleViewportChange);
                var o = this._createOrientationObserver(function(e) {
                    this.orientationObserver = e, this.orientationObserver.start(), Object.defineProperty(this, "orientation", {
                        get: function() {
                            return this.orientationObserver.getOrientation()
                        }.bind(this),
                        configurable: !0
                    })
                }.bind(this));
                if (o && (this.orientationObserver = o, this.orientationObserver.start(), Object.defineProperty(this, "orientation", {
                        get: function() {
                            return this.orientationObserver.getOrientation()
                        }.bind(this),
                        configurable: !0
                    })), this.containerViewabilityObserver = this._createContainerViewabilityObserver(), this.containerViewabilityObserver.start(), Object.defineProperty(this, "containerIsViewable", {
                        get: function() {
                            return this.containerViewabilityObserver.isViewable
                        }.bind(this),
                        configurable: !0
                    }), this.documentAttachmentObserver = this._createDocumentAttachmentObserver(), this.documentAttachmentObserver.start(this._handleDetachedFromDocument), this.on("domReady", function() {
                        this._initDocument(deferred(this.emits("documentReady"), 0, "SDKAdapter._startObservingEnvironment deferred documentReady", this.useAsap))
                    }.bind(this)), this.once("sdkReady", function() {
                        this.collectAndTrackData(function(e) {
                            var t = this.tagElement.parentNode,
                                i = {
                                    width: this.getTopWindow().innerWidth,
                                    height: this.getTopWindow().innerHeight
                                },
                                n = {
                                    width: this.tagWindow.innerWidth,
                                    height: this.tagWindow.innerHeight
                                },
                                r = {
                                    scope: "global",
                                    userAgent: this.getTopWindow().navigator.userAgent,
                                    orientation: this.orientation,
                                    topmostReachableWindow: i,
                                    hostWindow: n,
                                    nesting: this.nesting,
                                    pageVisibilityApi: this.visibilityApiIsSupported,
                                    requestAnimationFrame: this.nativeRAFIsSupported,
                                    topWindowNativeRAFSupported: this.raf.isNative,
                                    allowNonNativeRAFForViewableTimeUsed: "1" == runtimeParams._allowNonNativeRAFForViewableTime,
                                    clientTimeZoneOffsetInMinutes: (new Date).getTimezoneOffset(),
                                    supportsContainerViewability: this.supportsContainerViewability,
                                    supportsContainerInitialViewability: this.supportsContainerInitialViewability,
                                    tagParentWidth: t ? t.clientWidth : "",
                                    tagParentHeight: t ? t.clientHeight : "",
                                    ampDetected: this.ampDetected,
                                    ampNestingLevel: this.ampNestingLevel,
                                    safeFrameDetected: this.safeFrameDetected,
                                    fetchSupported: isFetchSupported(),
                                    asapEnabled: this.useAsap,
                                    nativePromisesSupported: isNativeImplementation(window.Promise),
                                    beaconSupported: isBeaconSupported(),
                                    IntersectionObserverSupported: "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype,
                                    isMutationObserverSupported: isNativeImplementation(window.MutationObserver),
                                    webView: deviceInfo.browser.webView()
                                };
                            if (runtimeParams.universalTagSignals && (r.universalTagSignals = runtimeParams.universalTagSignals), runtimeParams.protoLoading && (r.protoLoading = runtimeParams.protoLoading), (!this.nesting.iframe || this.nesting.friendlyIframe) && (r.topWindowLocation = this.getTopWindow().location.href, "undefined" != typeof r.topWindowLocation)) {
                                r.topWindowLocationLength = r.topWindowLocation.length;
                                var o = 200;
                                r.topWindowLocationLength > o && (r.topWindowLocation = r.topWindowLocation.slice(0, o) + "...")
                            }
                            e(r)
                        }.bind(this), "environmentInfo")
                    }.bind(this)), this._renderBeforeDomReady) this.emit("domReady");
                else {
                    var a = !1;
                    this._waitForDomReady(function() {
                        a || (this.emit("domReady"), a = !0)
                    }.bind(this))
                }
                this._listening = !0
            }
        }, SDKAdapter.prototype._initSdk = function(e) {
            e()
        }, SDKAdapter.prototype._initDocument = function(e) {
            e()
        }, SDKAdapter.prototype._onKeyboardShown = function() {
            this._keyboardShown = !0
        }, SDKAdapter.prototype._onKeyboardHidden = function() {
            this._keyboardShown = !1, defer(this._updatePlacements)
        }, SDKAdapter.prototype._createViewportListener = function() {
            var e = this,
                t = {
                    _resizeCallback: null,
                    _viewportChangeCallback: null,
                    start: function(t, i) {
                        var n = e.getTopWindow();
                        this._resizeCallback = t, this._viewportChangeCallback = i, n.addEventListener("resize", this._resizeHandler, !1), n.addEventListener("scroll", this._scrollHandler, !1), ios() && (n.addEventListener("focus", this._focusHandler, !0), n.addEventListener("blur", this._blurHandler, !0))
                    },
                    stop: function() {
                        var t = e.getTopWindow();
                        t.removeEventListener("resize", this._resizeHandler, !1), t.removeEventListener("scroll", this._scrollHandler, !1), ios() && (t.removeEventListener("focus", this._focusHandler, !0), t.removeEventListener("blur", this._blurHandler, !0))
                    }
                };
            return t._resizeHandler = function() {
                e.hacks.useResizeOnScroll && (t.numTimesScrollTriggeredAfterResize = 0), "undefined" != typeof window ? (this._resizeCallback(), this._viewportChangeCallback(), "undefined" != typeof window.admarvelSDKVersion && defer(this._resizeCallback.bind(this), 200)) : e.dismiss()
            }.bind(t), t._scrollHandler = function() {
                "undefined" != typeof window ? (e.hacks.useResizeOnScroll && void 0 !== t.numTimesScrollTriggeredAfterResize && (t.numTimesScrollTriggeredAfterResize++, t.numTimesScrollTriggeredAfterResize <= 2 && this._resizeCallback()), this._viewportChangeCallback()) : e.dismiss()
            }.bind(t), t._focusHandler = function(t) {
                ["INPUT", "TEXTAREA"].indexOf(t.target.nodeName) > -1 && (e._keyboardShown = !0)
            }, t._blurHandler = function() {
                e._keyboardShown = !1;
                var i = ios("9", null) ? 100 : 0;
                defer(function() {
                    e._keyboardShown || (t._resizeCallback(), t._viewportChangeCallback())
                }, i)
            }, t
        }, SDKAdapter.prototype._createOrientationObserver = function() {
            var e = this,
                t = this.getTopWindow(),
                i = {
                    _orientationChangeEventQueued: !1,
                    start: function() {
                        t.addEventListener("orientationchange", this._handler, !1)
                    },
                    stop: function() {
                        t.removeEventListener("orientationchange", this._handler, !1)
                    },
                    getOrientation: function() {
                        return e._normalizeOrientation(t.orientation) || 0
                    },
                    _handler: function() {
                        "undefined" != typeof window ? (e.emit("_rawOrientationChange"), i._orientationChangeEventQueued = !0, e.once("resize", i._trigger), setTimeout(i._trigger, 1e3)) : e.dismiss()
                    },
                    _trigger: function() {
                        i._orientationChangeEventQueued && (i._orientationChangeEventQueued = !1, defer(e.emits("orientationchange")))
                    }
                };
            return i
        }, SDKAdapter.prototype._createContainerViewabilityObserver = function() {
            var e = this;
            return {
                isViewable: !1,
                start: function() {
                    defer(function() {
                        this.isViewable = !0, e.emit("containerViewableChange", this.isViewable)
                    }.bind(this), void 0, void 0, this.useAsap)
                },
                stop: function() {}
            }
        }, SDKAdapter.prototype.triggerLoadedEvent = function(e) {
            this.domApi.loaded = !0, this.domApi.viewabilityObservee = e, this._dispatchCeltraLoadedEvent(this.tagElement)
        }, SDKAdapter.prototype.triggerClosedEvent = function() {
            this._dispatchCeltraClosedEvent(this.tagElement)
        }, SDKAdapter.prototype._dispatchCeltraLoadedEvent = function(e) {
            var t = e.ownerDocument.createEvent("HTMLEvents");
            t.initEvent("celtraLoaded", !0, !1), e.dispatchEvent(t)
        }, SDKAdapter.prototype._dispatchCeltraClosedEvent = function(e) {
            var t = e.ownerDocument.createEvent("HTMLEvents");
            t.initEvent("celtraClosed", !0, !1), e.dispatchEvent(t)
        }, SDKAdapter.prototype.waitForDisplayed = function(e) {
            return this._displayed ? defer(e) : void this.once("displayed", e)
        }, SDKAdapter.prototype.waitForContainerViewable = function(e) {
            if (this.containerIsViewable) return defer(e, void 0, void 0, this.useAsap);
            var t = function(i) {
                i && (this.off(t), defer(e, void 0, void 0, this.useAsap))
            }.bind(this);
            this.on("containerViewableChange", t)
        }, SDKAdapter.prototype._createDocumentAttachmentObserver = function() {
            var e = this,
                t = e.tagElement,
                i = e.getTopWindow(),
                n = new i.Function("f", "return function() { f(); };"),
                r = {
                    _detachmentHandler: null,
                    _interval: 60,
                    _timer: null,
                    start: function(t) {
                        this._detachmentHandler = t, this._timer = i.setTimeout(this.wrappedTimerTick, this._interval), e.Ticker.frame(this.rafTick, "update")
                    },
                    stop: function() {
                        i.clearTimeout(this._timer), this._timer = null, e.Ticker.removeFrame(this.rafTick, "update")
                    },
                    timerTick: function() {
                        this.isDetached() ? this._detachmentHandler() : this._timer = i.setTimeout(this.wrappedTimerTick, this._interval)
                    },
                    rafTick: function() {
                        this.isDetached() && this._detachmentHandler()
                    },
                    isDetached: function() {
                        if (t.parentNode && t.ownerDocument.defaultView && window && window.document) {
                            for (var e = t;
                                (e = e.parentNode) && e && e !== e.ownerDocument.documentElement;);
                            return e ? !1 : (this._timer = null, !0)
                        }
                        return !0
                    }
                };
            return r.timerTick = r.timerTick.bind(r), r.rafTick = r.rafTick.bind(r), r.wrappedTimerTick = n(r.timerTick), r
        }, SDKAdapter.prototype._normalizeOrientation = function(e) {
            var t = this.getTopWindow().navigator.userAgent,
                i = ["Nexus 10", "GT-N8", "SM-P60", "GT-P5", "SCH-19", "GT-P7", "SM-T9", "SM-T8"];
            return i.some(function(e) {
                return -1 != t.indexOf(e)
            }) && (e += 90, 270 == e && (e = -90)), e
        }, SDKAdapter.prototype._waitForDomReady = function(e) {
            var t = this.getTopWindow().document;
            "interactive" === t.readyState || "loaded" === t.readyState || "complete" === t.readyState ? defer(e, 0, "SDKAdapter._waitForDomReady defer cb", this.useAsap) : t.addEventListener("DOMContentLoaded", e, !1)
        }, SDKAdapter.prototype.waitForWindowLoad = function(e) {
            var t = this.getTopWindow(),
                i = 30,
                n = !1,
                r = function() {
                    n || (n = !0, e())
                };
            "complete" === t.document.readyState ? defer(e, 0, "SDKAdapter.waitForWindowLoad readyState === complete cb", this.useAsap) : (t.setTimeout(r, 1e3 * i), t.addEventListener("load", r, !1))
        }, SDKAdapter.prototype._stopObservingEnvironment = function() {
            this._listening && (this.resizeListener.stop(this._handleResize), this.orientationObserver.stop(), this.documentAttachmentObserver.stop(), this._listening = !1)
        }, SDKAdapter.prototype.setMinimumSize = function() {}, SDKAdapter.prototype._handleResize = function() {
            var e = !1;
            this.emit("beforeResize", function(t) {
                e = t
            }), e ? defer(function() {
                this.emit("resize")
            }.bind(this), 700) : this.emit("resize")
        }, SDKAdapter.prototype._handleViewportChange = function() {
            this.emit("viewportChange")
        }, SDKAdapter.prototype._handleOrientationChange = function(e) {
            this.emit("orientationchange", e)
        }, SDKAdapter.prototype._handleDetachedFromDocument = function() {
            this.dismiss()
        }, SDKAdapter.prototype._updatePlacements = function(e) {
            function t() {
                --i || (e && e(), defer(n.emits("placementsUpdated"), void 0, void 0, this.useAsap))
            }
            if (e = e || noop, this._keyboardShown) return e();
            var i = 0,
                n = this;
            for (var r in this.placements) i++, "undefined" != typeof window && this.placements[r].update(t, this.adBehavior.crossScreenSticky)
        }, SDKAdapter.prototype._stopAllMedia = function(e) {
            this._stopMediaTagsInPlacements(), this.emit("mediaStopRequested", e)
        }, SDKAdapter.prototype._stopMediaTagsInPlacements = function() {
            for (var e in this.placements)
                for (var t = this.placements[e].querySelectorAll("audio,video"), i = 0; i < t.length; i++) t[i].hasAttribute("x-celtra-media") || "function" != typeof t[i].pause || t[i].pause()
        }, SDKAdapter.prototype.createPlacements = function(e, t) {
            var i = Object.keys(e),
                n = Object.keys(this.placements),
                r = i.filter(function(e) {
                    return -1 == n.indexOf(e)
                }),
                o = this.perf.start("Adapter.createPlacements", r);
            if (0 == r.length) o.end(), defer(t, 0, "SDKAdapter.createPlacements defer no placements callback", this.useAsap);
            else {
                var a = new TaskScheduler,
                    s = this.useAsap;
                a.when(r).run(function() {
                    o.end(), defer(t, 0, "SDKAdapter.createPlacements defer callback", s)
                }), r.forEach(function(t) {
                    var i = e[t],
                        n = {
                            attachment: i.attachment,
                            positioning: i.positioning,
                            type: i.type
                        },
                        r = this.perf.start("Adapter.createPlacement", {
                            name: t,
                            descriptor: n
                        });
                    this.createPlacement(e[t], function(e) {
                        r.end(), this.placements[t] = e, defer(a.notifies(t), 0, "SDKAdapter.createPlacements defer scheduler notifies", this.useAsap)
                    }.bind(this))
                }, this)
            }
        }, SDKAdapter.prototype.createPlacement = function() {
            throw new Error("SDKAdapter.createPlacement not implemented!")
        }, SDKAdapter.prototype.destroyPlacement = function(e) {
            for (var t in this.placements) t == e && (this.placements[t].destroy(), delete this.placements[t])
        }, SDKAdapter.prototype.hook = function(e, t) {
            this._hooks[e] = t
        }, SDKAdapter.prototype.waitForHook = function(e, t) {
            var i = Array.prototype.slice.call(arguments, 1);
            this._hooks[e] ? this._hooks[e].apply(null, i) : t()
        }, SDKAdapter.prototype.getPlacementRect = function(e) {
            return e.root ? CRect.adopt(e.root.getBoundingClientRect()) : CRect.ZERO
        }, SDKAdapter.prototype.getViewportRect = function() {
            var e = this.getTopWindow();
            return CRect.adopt({
                left: 0,
                top: 0,
                width: e.innerWidth,
                height: e.innerHeight
            })
        }, SDKAdapter.prototype.expand = function() {
            throw new Error("SDKAdapter.expand not implemented!")
        }, SDKAdapter.prototype.collapse = function() {
            throw new Error("SDKAdapter.collapse not implemented!")
        }, SDKAdapter.prototype.dismiss = function() {
            throw new Error("SDKAdapter.dismiss not implemented!")
        }, SDKAdapter.prototype.resize = function() {
            throw new Error("SDKAdapter.resize not implemented!")
        }, SDKAdapter.prototype.playVideoInPlayer = function() {
            throw new Error("SDKAdapter.playVideoInPlayer not implemented!")
        }, SDKAdapter.prototype.callPhone = function(e) {
            window.location.href = "tel:" + encodeURIComponent(e)
        }, SDKAdapter.prototype.openBrowserSameWindowInHostileIFrame = function(e) {
            window.top.location.href = e
        }, SDKAdapter.prototype.openPotentialUniversalOrAppLink = function() {
            this.openBrowser.apply(this, arguments)
        }, SDKAdapter.prototype.getApp = function() {
            throw new Error("SDKAdapter.getApp not implemented!")
        }, SDKAdapter.prototype.canSaveImage = function() {
            throw new Error("SDKAdapter.canSaveImage not implemented!")
        }, SDKAdapter.prototype.saveImage = function() {
            throw new Error("SDKAdapter.saveImage not implemented!")
        }, SDKAdapter.prototype.getVideoCapabilities = function() {
            return {}
        }, SDKAdapter.prototype.sendToEventMonitor = function() {}, SDKAdapter.prototype.notifycreativeRendered = function() {}, SDKAdapter.prototype.sendUnitLoaded = function() {
            throw new Error("SDKAdapter.sendUnitLoaded not implemented!")
        }, SDKAdapter.prototype.getTopWindow = function() {
            if (this._topWindow) return this._topWindow;
            var e = window;
            try {
                for (;
                    "undefined" != typeof e.parent.location.href && e.parent.document !== e.document;) e = e.parent
            } catch (t) {}
            return this._topWindow = e
        }, SDKAdapter.prototype.inNativeFullscreen = function() {
            return ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].some(function(e) {
                var t = this.getTopWindow().document[e];
                return t && null !== t
            }.bind(this))
        }, SDKAdapter.prototype.openBrowser = function(e, t, i) {
            t ? this._tryOpenInNewWindow(e, i) : this._tryOpenInSameWindow(e, i)
        }, SDKAdapter.prototype._openInNewWindow = function(e) {
            try {
                var t = this.getTopWindow().open(e);
                return !t || t.closed || "undefined" == typeof t.closed ? !1 : !0
            } catch (i) {
                return !1
            }
        }, SDKAdapter.prototype._tryOpenInNewWindow = function(e, t) {
            return this._openInNewWindow(e, t) ? !0 : (this.aggregatorTracking.trackAggregator("openBrowserFailed", 1, {
                targetWindow: "new"
            }), !1)
        }, SDKAdapter.prototype._openInSameWindow = function() {
            throw new Error("SDKAdapter._openInSameWindow not implemented!")
        }, SDKAdapter.prototype._tryOpenInSameWindow = function(e, t) {
            try {
                return this._openInSameWindow(e, t), !0
            } catch (i) {
                return this.aggregatorTracking.trackAggregator("openBrowserFailed", 1, {
                    targetWindow: "same"
                }), !1
            }
        }, SDKAdapter.prototype.getPageDimensions = function() {
            var e = this.getTopWindow().document,
                t = e.body,
                i = e.documentElement;
            return {
                height: Math.max(t.scrollHeight, t.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight),
                width: Math.max(t.scrollWidth, t.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth)
            }
        }, SDKAdapter.prototype.saveCalendarEvent = function(e, t) {
            var i = function(e) {
                return ios() ? {
                    url: CCalendar.getEventICSUrl(e),
                    openInNewWindow: !1
                } : {
                    url: CCalendar.getEventGoogleCalendarUrl(e),
                    openInNewWindow: !0
                }
            }(e);
            i && i.url ? (this.openBrowser(i.url, i.openInNewWindow), t(!0)) : t(!1)
        }, SDKAdapter.prototype.startObscuringContent = function() {}, SDKAdapter.prototype.stopObscuringContent = function() {}, SDKAdapter.prototype.setOrientationLock = function() {
            return !1
        }, SDKAdapter.prototype.autoLock = function() {
            return !1
        }, SDKAdapter.prototype._getDefaultLockOrientation = function() {
            return "a"
        }, SDKAdapter.prototype.determineLockOrientation = function() {
            function e() {
                return this.orientation % 180 == 0 ? "portrait" : "landscape"
            }
            var t = creative.unitSizes.modal,
                i = void 0,
                n = (this.runtimeParams.lockOrientation || this._getDefaultLockOrientation()).toLowerCase();
            return i = "n" === n ? "noOrientation" : "l" === n ? "landscape" : "p" === n ? "portrait" : "a" === n && t ? t.width < t.height ? "portrait" : t.width > t.height ? "landscape" : e() : e()
        }, SDKAdapter.prototype.collectAndTrackData = function(e, t) {
            function i() {
                try {
                    e(function(e) {
                        e.name = t, this.trackingCenter.trackNoLaterThan(e, n)
                    }.bind(this))
                } catch (i) {
                    this.trackingCenter.trackNoLaterThan({
                        name: t,
                        error: i.message + "\n" + i.stack
                    }, n)
                }
            }
            if ("function" != typeof e) throw new Error("The dataCollector param was not a function.");
            if ("undefined" == typeof t) throw new Error("The eventName param was not defined.");
            var n = 1e3;
            defer(i.bind(this), void 0, void 0, this.useAsap)
        }, SDKAdapter.prototype._createViewportElement = function() {
            var e = document.createElement("div");
            return e.id = "viewport", e.style.cssText = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: visible;", this.tagWindow.document.body.appendChild(e), e
        }, SDKAdapter.prototype._getViewportElement = function() {
            return this.viewport
        }, SDKAdapter.prototype.listenForExpandErrors = function() {}, SDKAdapter.prototype.enableScroll = function() {}, SDKAdapter.prototype.disableScroll = function() {};;

        function InAppAdapter() {
            SDKAdapter.apply(this, arguments), this.isSingleOccupant = !0, this.hasDeadZones = !1, this.fixViewport = !1, Placement.prototype.supportsFixedPositioning = Placement.prototype.supportsFixedPositioning && !/\bHTC One S\b/.test(navigator.userAgent), this.on("containerViewableChange", this.emits("displayed"))
        }
        inherit(InAppAdapter, SDKAdapter), InAppAdapter.prototype._initDocument = function(cb) {
            with(document.documentElement.style) margin = 0, padding = 0, width = "100%", height = "100%";
            with(document.body.style) margin = 0, padding = 0, width = "100%", height = "100%";
            if (this.viewport = this._createViewportElement(), this.fixViewport) {
                var meta = document.createElement("meta");
                meta.name = "viewport", meta.content = "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no", document.getElementsByTagName("head").item(0).appendChild(meta)
            }
            if ((!this.hostElement.offsetParent || this.hostElement.offsetParent === document.body && "static" === getComputedStyle(document.body, null).position) && (this.hostElement.style.position = "relative", this.hostElement.style.width = this.hostElement.style.height = "100%"), android("4.0") && 240 == window.innerHeight && window.innerHeight != creative.unitSizes[unitName].height) {
                var sizeWaitInterval, done, callCbOnce = function() {
                    if (240 != window.innerHeight) {
                        if (done) return;
                        done = !0, clearInterval(sizeWaitInterval), cb()
                    }
                };
                sizeWaitInterval = setInterval(callCbOnce, 0), defer(callCbOnce, 1e3, "InAppAdapter._initDocument defer callCbOnce")
            } else defer(cb)
        }, InAppAdapter.prototype.getTopWindow = function() {
            return window
        }, InAppAdapter.prototype._parentForPlacement = function(t) {
            var e;
            e = "node" == t.attachment ? t.parentNode : "placement" == t.attachment ? t.placement.root : "static" == t.positioning ? script.parentNode : this._getViewportElement();
            for (var n = e; n !== script.ownerDocument;) {
                if (/body/i.test(n.tagName)) return e;
                n = n.parentNode
            }
            return document.body
        }, InAppAdapter.prototype.createPlacement = function(t, e) {
            e = e || noop;
            var n = new DivPlacement(t.positioning);
            n.attachTo(this._parentForPlacement(t), function() {
                e(n)
            })
        }, InAppAdapter.prototype.setMinimumSize = function(t, e) {
            this.hostElement.style.minWidth = t + "px", this.hostElement.style.minHeight = e + "px"
        };;

        function MRAIDAdapter() {
            InAppAdapter.apply(this, arguments), document.body.style.position = "relative", this.providesCloseButton = !1, this.mraidIsReady = !1, this.celtraSdk = null, this._mraidPreloaded = null, Placement.prototype.supportsFixedPositioning = Placement.prototype.supportsFixedPositioning && !ios("5"), this.viewabilityMeasurable = {
                viewable00: !0,
                viewable501: !1
            }, this.supportsContainerViewability = !0, this.supportsContainerInitialViewability = !0, this._dismissed = !1, Object.defineProperty(this, "inViewRatio", {
                get: function() {
                    return this.containerViewabilityObserver.inViewRatio
                }.bind(this)
            }), this.useNativeClickForTapDetection = !deviceInfo.os.ios() || "UIWebView" != deviceInfo.browser.webView(), this.fixViewport = !document.querySelector("meta[name=viewport]"), this._supportUniversalAndAppLinksInMRAID = 1 == this.runtimeParams.universalAndAppLinksInMRAID, this.hacks.hasBuggyDateInputControls = deviceInfo.os.android() && deviceInfo.browser.webView(), this.onAll("sdkReady documentReady celtraSdkReady", this.prepare.bind(this)), this.tagWindow.loadCeltraSdk ? this.tagWindow.loadCeltraSdk(function(e) {
                this.celtraSdk = e, this.emit("celtraSdkReady")
            }.bind(this)) : this.emit("celtraSdkReady"), this.on("documentReady", function() {
                if (android("4", "5")) {
                    var e = this.getTopWindow();
                    "static" == e.document.defaultView.getComputedStyle(e.document.body, null).getPropertyValue("position") && (e.document.body.style.position = "relative")
                }
            }.bind(this)), this.once("sdkReady", function() {
                this._checkPlacementType()
            }.bind(this))
        }
        inherit(MRAIDAdapter, InAppAdapter), MRAIDAdapter.prototype._checkPlacementType = function() {
            mraid.getPlacementType && -1 != ["inline", "interstitial"].indexOf(this.getPlacementType()) ? "interstitial" != this.getPlacementType() || this.adBehavior.interstitial || this.adBehavior.canBeInterstitialPlacement ? "inline" == this.getPlacementType() && this.adBehavior.interstitial && trackingCenter.track({
                name: "userError",
                userErrorId: "mraidMismatchPlacementInline"
            }) : trackingCenter.track({
                name: "userError",
                userErrorId: "mraidMismatchPlacementInterstitial"
            }) : trackingCenter.track({
                name: "userError",
                userErrorId: "mraidPlacementTypeNotCompliant"
            })
        }, MRAIDAdapter.prototype.getPlacementType = function() {
            var e = mraid.getPlacementType();
            return e.toLowerCase()
        }, MRAIDAdapter.prototype.getMraidVersion = function() {
            var e = mraid.getVersion().toString().match(/^(\d+)(\.\d+)?/);
            return e ? parseInt(e[1], 10) : null
        }, MRAIDAdapter.prototype._getHostSDKVersions = function() {
            var e = {};
            if (mraid.hasOwnProperty("getHostSDKVersion") && "function" == typeof mraid.getHostSDKVersion) try {
                e.getHostSDKVersion = JSON.stringify(mraid.getHostSDKVersion())
            } catch (t) {
                e.getHostSDKVersion = null
            }
            return e
        }, MRAIDAdapter.prototype._initSdk = function(e) {
            function t() {
                var e = document.createElement("script");
                e.type = "text/javascript", e.src = "mraid.js";
                var t = Date.now();
                e.onload = function() {
                    n(Date.now() - t, !0), i()
                }, e.onerror = function() {
                    n(Date.now() - t, !1), i()
                }, window.document.body.appendChild(e)
            }

            function i() {
                if ("undefined" == typeof mraid) return void r();
                if (this._supportUniversalAndAppLinksInMRAID && "google" == this._detectSDKVendor()) {
                    var t = window.document.getElementsByTagName("head")[0],
                        i = window.document.createElement("script");
                    i.type = "text/javascript", i.src = "https://media.admob.com/api/v1/google_mobile_app_ads.js", t.appendChild(i)
                }
                var n = function(e, t) {
                    var i = [e, t];
                    i.indexOf("expand") > -1 && this.emit("expandError", e, t)
                }.bind(this);
                mraid.addEventListener("error", this.trackingCenter.batchFlush), mraid.addEventListener("error", function(e, t) {
                    n(e, t)
                }), this.mraidEventProxy = {}, extend(this.mraidEventProxy, EventEmitter), this.mraidEventProxy.on("ready", function() {
                    this.mraidIsReady = !0, this.mraidVersion = this.getMraidVersion(), this.canMeasureContainerAreaInViewRatio = this.mraidVersion >= 3, Logger("mraid").log("MRAID version " + this.mraidVersion), e()
                }.bind(this)), mraid.addEventListener("viewableChange", function(e) {
                    "undefined" == typeof e && (Logger("mraid").log('mraid:viewableChange ERROR - received "undefined", fallback to mraid.isViewable() if available'), e = mraid.isViewable()), Logger("mraid").log("mraid:viewableChange " + e), this.mraidEventProxy.emit("viewableChange", e)
                }.bind(this)), Logger("mraid").log("state = " + mraid.getState()), "loading" === mraid.getState() ? mraid.addEventListener("ready", function() {
                    Logger("mraid").log("mraid:ready"), this.trackingCenter.batchFlush(), this.mraidEventProxy.emit("ready")
                }.bind(this)) : this.mraidEventProxy.emit("ready"), mraid.addEventListener("stateChange", function(e) {
                    Logger("mraid").log("mraid:stateChange " + e), this.trackingCenter.batchFlush(), this.mraidEventProxy.emit("stateChange", e)
                }.bind(this)), this.mraidEventProxy.on("stateChange", this.onStateChange.bind(this))
            }

            function n(e, t) {
                Logger("mraid").log("mraidLoadingResult: {success: " + t + ", milliseconds: " + e + "}"), this.trackingCenter.trackNoLaterThan({
                    name: "mraidLoadingResult",
                    success: t,
                    milliseconds: e
                }, 2e3)
            }

            function r() {
                Logger("mraid").error("mraid object not available"), this.trackingCenter.track({
                    name: "userError",
                    userErrorId: "missingMraidObject"
                })
            }
            i = i.bind(this), r = r.bind(this), t = t.bind(this), n = n.bind(this);
            var a = parseInt(this.runtimeParams.tagVersion, 10);
            a && 2 === a ? "undefined" != typeof mraid ? (this._mraidPreloaded = !0, Logger("mraid").debug("mraid object preloaded"), t()) : (this._mraidPreloaded = !1, t()) : i();
            var o = creative.firstAppStoreUrlForInmobi;
            "undefined" != typeof SKStoreView && ios() && o && (this.skStoreView = new SKStoreView(o), this.skStoreView.load())
        }, MRAIDAdapter.prototype.prepare = function() {
            if (this.collectAndTrackData(function(e) {
                    var t = {
                        scope: "mraid",
                        sdkVersion: this.mraidVersion,
                        mraidPreloaded: this._mraidPreloaded,
                        hostVersions: this._getHostSDKVersions()
                    };
                    this.mraidVersion >= 2 && (mraid.supports && (t = extend({
                        calendar: mraid.supports("calendar"),
                        inlineVideo: !0,
                        storePicture: mraid.supports("storePicture"),
                        tel: mraid.supports("tel"),
                        sms: mraid.supports("sms")
                    }, t)), this.mraidVersion >= 3 && (t = extend({
                        location: mraid.supports("location")
                    }, t)), mraid.getScreenSize && (t.screenSize = mraid.getScreenSize()), this.celtraSdk && this.celtraSdk.getAppId && (t.celtraSdkAppId = this.celtraSdk.getAppId(), t.celtraSdkAppVersion = this.celtraSdk.getAppVersion(), t.celtraSdkBuildNumber = this.celtraSdk.getSdkBuildNumber(), t.celtraSdkVersion = this.celtraSdk.getSdkVersion()));
                    var i = this.getTopWindow().MRAID_ENV;
                    if (this.mraidVersion >= 3 && "object" == typeof i) {
                        var n = ["version", "sdk", "sdkversion", "appid", "limitadtracking", "coppa"];
                        t.MRAID_ENV = {};
                        var r = function(e) {
                                return "string" == typeof e ? e.toLowerCase() : null
                            },
                            a = r(this.runtimeParams.platformAdvId),
                            o = r(i.ifa),
                            s = o ? o.length : 0;
                        t.MRAID_ENV._ifaStats = {
                            length: s,
                            matches: a === o
                        }, Object.keys(i).forEach(function(e) {
                            n.indexOf(e.toLowerCase()) >= 0 && (t.MRAID_ENV[e] = i[e])
                        })
                    }
                    e(t)
                }.bind(this), "environmentInfo"), this.getMraidVersion() >= 3) this.providesCloseButton = !0;
            else if (this.adBehavior.interstitial || this.adBehavior.expandable)
                if (mraid.useCustomClose) Logger("mraid").log("call useCustomClose"), mraid.useCustomClose(!0);
                else {
                    var e = mraid.getExpandProperties();
                    e.useCustomClose = !0, mraid.setExpandProperties(e), Logger("mraid").log("call getExpandProperties/setExpandProperties to hide close button")
                }
            "undefined" != typeof FullscreenVideoPlayer && FullscreenVideoPlayer.init({
                hideControls: ios() && !tablet(),
                baseUrl: (runtimeParams.secure ? urls.staticUrl : urls.insecureStaticUrl) + "runner/FullscreenVideoPlayer/"
            }), this.emit("ready")
        }, MRAIDAdapter.prototype._createContainerViewabilityObserver = function() {
            var e = this;
            return {
                isViewable: !1,
                inViewRatio: null,
                start: function() {
                    e.on("sdkReady", function() {
                        e.canMeasureContainerAreaInViewRatio && mraid.addEventListener("exposureChange", function(t) {
                            var i = t / 100;
                            this.inViewRatio != i && (this.inViewRatio = i, e.emit("containerAreaInViewRatioChanged", i), this.handleViewableChange(i > 0))
                        }.bind(this));
                        var t = deviceInfo.os.android() && "google" === e._detectSDKVendor();
                        (!e.canMeasureContainerAreaInViewRatio || t) && (e.mraidEventProxy.on("viewableChange", function(e) {
                            this.handleViewableChange(e)
                        }.bind(this)), "function" == typeof mraid.isViewable && mraid.isViewable() && defer(function() {
                            this.handleViewableChange(!0)
                        }.bind(this)))
                    }.bind(this))
                },
                stop: function() {
                    e.mraidEventProxy.off(eventName, this.handleViewableChange)
                },
                handleViewableChange: function(t) {
                    var i = this.isViewable;
                    this.isViewable = t, i !== t && e.emit("containerViewableChange", this.isViewable)
                }
            }
        }, MRAIDAdapter.prototype._createOrientationObserver = function(e) {
            function t() {
                var e, t = this;
                if (this.getMraidVersion() >= 2 && mraid.getScreenSize && mraid.getScreenSize()) {
                    var t = this;
                    e = {
                        start: function() {
                            this._orientation = this._calculateOrientation(), this._handler = function() {
                                var e = this._orientation;
                                this._orientation = this._calculateOrientation(), e !== this._orientation && (deviceInfo.os.ios("10.3", null) ? defer(function() {
                                    t.emit("orientationchange", this._orientation)
                                }.bind(this), 100) : t.emit("orientationchange", this._orientation))
                            }.bind(this), mraid.addEventListener("sizeChange", this._handler, !1), window.addEventListener("orientationchange", this._handler, !1)
                        },
                        stop: function() {
                            mraid.removeEventListener("sizeChange", this._handler, !1), window.removeEventListener("orientationchange", this._handler, !1)
                        },
                        getOrientation: function() {
                            return this._orientation
                        },
                        _calculateOrientation: function() {
                            var e = mraid.getScreenSize();
                            return 90 * (e.width > e.height)
                        }
                    }
                } else {
                    var i = this.getTopWindow();
                    e = {
                        start: function() {
                            this._orientation = this._calculateOrientation(), this._handler = function() {
                                var e = this._orientation;
                                this._orientation = this._calculateOrientation(), e !== this._orientation && t.emit("orientationchange", this._orientation)
                            }.bind(this), i.addEventListener("resize", this._handler, !1)
                        },
                        stop: function() {
                            i.removeEventListener("resize", this._handler, !1)
                        },
                        getOrientation: function() {
                            return this._orientation
                        },
                        _calculateOrientation: function() {
                            return 90 * (window.innerWidth > window.innerHeight)
                        }
                    }
                }
                return e
            }
            this.sdkReady ? e(t.call(this)) : this.once("sdkReady", function() {
                e(t.call(this))
            }.bind(this))
        }, MRAIDAdapter.prototype.onStateChange = function(e) {
            if (this.mraidIsReady) {
                for (var t = document.querySelectorAll("video,audio"), i = 0; i < t.length; i++) t[i].pause();
                switch (e) {
                    case "loading":
                        Logger("mraid").warn("MRAID SDK transitioned to state 'loading'?");
                        break;
                    case "default":
                        this.emit("stateChange", "default");
                        break;
                    case "expanded":
                        this.emit("stateChange", "expanded");
                        break;
                    case "hidden":
                        this.emit("stateChange", "dismissed");
                        break;
                    default:
                        Logger("mraid").error("Unexpected MRAID state: " + e)
                }
            }
        }, MRAIDAdapter.prototype.waitForState = function(e, t) {
            if (mraid.getState() === e) defer(t);
            else {
                var i = this;
                i.mraidEventProxy.on("stateChange", function n(r) {
                    e === r && (i.mraidEventProxy.off("stateChange", n), t())
                })
            }
        }, MRAIDAdapter.prototype.expand = function(e) {
            this._stopAllMedia(), this.waitForHook("beforeExpand", function() {
                mraid.expand(), e && e()
            }.bind(this))
        }, MRAIDAdapter.prototype.collapse = function(e) {
            this._stopAllMedia(), this.waitForHook("beforeCollapse", function() {
                if ("expanded" != mraid.getState()) throw new Error("Ad is not expanded and cannot be collapsed!");
                e && this.waitForState("default", e), mraid.close()
            }.bind(this))
        }, MRAIDAdapter.prototype.dismiss = function(e) {
            this._stopAllMedia();
            var t = function() {
                if (this._dismissed) this.trackingCenter.flush();
                else {
                    var t = 2e3;
                    this._dismissed = !0;
                    var i = function() {
                        this.mraidVersion >= 3 ? mraid.unload() : mraid.close(), e && e()
                    }.bind(this);
                    this.trackingCenter.flush(i), defer(i, t)
                }
            }.bind(this);
            if ("expanded" == mraid.getState()) this.collapse(t);
            else {
                if ("default" != mraid.getState()) throw new Error("Can't dismiss from current state (" + mraid.getState() + ").");
                t()
            }
        }, MRAIDAdapter.prototype._detectSDKVendor = function() {
            return "undefined" != typeof window.admarvelSDKVersion ? "admarvel" : "undefined" != typeof window.google ? "google" : "undefined" != typeof window.mraidbridge ? "mopub" : "unknown"
        }, MRAIDAdapter.prototype.openBrowser = function(e) {
            mraid.open(e)
        }, MRAIDAdapter.prototype.openPotentialUniversalOrAppLink = function(e) {
            var t = this._detectSDKVendor();
            this._supportUniversalAndAppLinksInMRAID && "admarvel" == t ? mraid.open("admarvelexternal" + e) : this._supportUniversalAndAppLinksInMRAID && "google" == t && "undefined" != typeof admob ? admob.opener.openUrl(e, !0) : this._supportUniversalAndAppLinksInMRAID && "mopub" == t ? mraid.open("mopubnativebrowser://navigate?url=" + encodeURIComponent(e)) : this.openBrowser(e)
        }, MRAIDAdapter.prototype.getApp = function(e) {
            this.skStoreView ? this.skStoreView.show(e) : this.openBrowser(e)
        }, MRAIDAdapter.prototype.playVideoInPlayer = function(e, t) {
            FullscreenVideoPlayer.play(e, function(e) {
                t(e)
            })
        }, MRAIDAdapter.prototype.callPhone = function(e) {
            mraid.open((deviceInfo.os.ios() ? "tel:" : "tel://") + encodeURIComponent(e))
        }, MRAIDAdapter.prototype.saveCalendarEvent = function(e, t) {
            if (this.mraidVersion >= 2 && mraid.supports("calendar") === !0) {
                var i = {
                        formattedTimezoneOffset: function(e) {
                            function t(e) {
                                return e += "", 1 == e.length && (e = "0" + e), e
                            }
                            var i = e ? new Date(e) : new Date,
                                n = i.getTimezoneOffset(),
                                r = Math.abs(n),
                                a = Math.floor(r / 60);
                            return (n / r > 0 ? "-" : "+") + t(a) + ":" + t(r - 60 * a)
                        },
                        w3cifyDateTime: function(e, t) {
                            e.value.length < 16 ? (e.tz = "user", e.value = e.value.substring(0, 10) + ("start" === t ? " 00:00:00" : " 23:59:59")) : e.value.length < 19 && (e.value = e.value.substring(0, 16) + ":00");
                            var n = e.value.substring(0, 19).replace(" ", "T");
                            return n + ("user" == e.tz ? i.formattedTimezoneOffset(n) : "+00:00")
                        },
                        w3cifyReminder: function(e, t) {
                            var n;
                            if (n = e.match(/^([0-9]+)([mhd])$/)) {
                                var r = 1 * n[1];
                                return "h" != n[2] && "m" != n[2] && (r *= 24), "m" != n[2] && (r *= 60), r *= 60, r *= 1e3, -Math.abs(r.toFixed()) + ""
                            }
                            if ("date" == e && t) {
                                var t = t.substring(0, 10) + "T00:00";
                                return t + i.formattedTimezoneOffset(t)
                            }
                        }
                    },
                    n = {
                        description: e.eventName,
                        location: e.location,
                        summary: e.notes,
                        start: i.w3cifyDateTime(e.start, "start"),
                        end: i.w3cifyDateTime(e.end, "end"),
                        status: "tentative",
                        transparency: "transparent",
                        reminder: i.w3cifyReminder(e.reminder, e.start.value)
                    };
                mraid.createCalendarEvent(n), t(!0)
            } else MRAIDAdapter.uber.saveCalendarEvent.apply(this, arguments)
        }, MRAIDAdapter.prototype._getDefaultLockOrientation = function() {
            return "n"
        }, MRAIDAdapter.prototype.setOrientationLock = function(e) {
            if (2 != this.mraidVersion || !mraid.setOrientationProperties) return !1;
            e || (e = this.orientation % 180 === 0 ? "portrait" : "landscape");
            var t = {
                allowOrientationChange: !1,
                forceOrientation: "none"
            };
            return t.forceOrientation = e, mraid.setOrientationProperties(t), !0
        }, MRAIDAdapter.prototype.autoLock = function() {
            return !0
        }, MRAIDAdapter.prototype.getContainerInViewAreaRatio = function() {
            return this.inViewRatio
        }, MRAIDAdapter.prototype.waitForViewableCore = function(e, t, i) {
            this.waitForContainerViewable(i)
        }, MRAIDAdapter.prototype.listenForExpandErrors = function(e) {
            var t = this._onExpandError.bind(this),
                i = this._clearExpandFailTimer = function() {
                    this.adapterWindow.clearTimeout(this.expandFailFallbackTimer)
                }.bind(this),
                n = function(e) {
                    "expanded" === e && (i(), a())
                },
                r = function() {
                    this.addEventListener("stateChange", n), t && this.addEventListener("expandError", t)
                }.bind(this),
                a = function() {
                    this.removeEventListener("stateChange", n), t && this.removeEventListener("expandError", t)
                }.bind(this),
                o = this._stopExpand = function() {
                    a(), e()
                };
            r(), this.expandFailFallbackTimer = this.adapterWindow.setTimeout(o, 2e3)
        }, MRAIDAdapter.prototype._onExpandError = function(e, t) {
            "expand" === e && (e = t, t = "expand"), this._clearExpandFailTimer(), this._stopExpand()
        };;

        Logger.initFromRuntimeParams(runtimeParams);

        var urls = {
            "creativeUrl": "https://ads.celtra.com/compiled/46f4a037/",
            "apiUrl": "https://hub.celtra.com/api/",
            "cachedApiUrl": "https://cache-ssl.celtra.com/api/",
            "staticUrl": "https://cache-ssl.celtra.com/api/static/ve62791e034/",
            "insecureCreativeUrl": "http://ads.celtra.com/compiled/46f4a037/",
            "insecureApiUrl": "http://hub.celtra.com/api/",
            "insecureCachedApiUrl": "http://cache.celtra.com/api/",
            "insecureStaticUrl": "http://cache.celtra.com/api/static/ve62791e034/",
            "trackingUrl": "https://track.celtra.com/",
            "insecureTrackingUrl": "http://track.celtra.com/",
            "geoUrl": "https://geo.celtra.com/",
            "insecureGeoUrl": "http://geo.celtra.com/",
            "customAudiencesUrl": "https://audiences.celtra.com",
            "insecureCustomAudiencesUrl": "http://audiences.celtra.com",
            "shareUrl": "https://hub-user.celtra.com/share/",
            "insecureShareUrl": "http://hub-user.celtra.com/share/"
        };
        urls.resourceUrl = runtimeParams.secure ? urls.staticUrl : urls.insecureStaticUrl;

        var shouldBatchTrackers = !!'';

        var trackingCenter = new TrackingCenter(
            runtimeParams.sessionId,
            runtimeParams.accountId,
            runtimeParams.purpose,
            runtimeParams.secure ? urls.trackingUrl : urls.insecureTrackingUrl,
            trackers,
            runtimeParams._batchTrackers === '1' || shouldBatchTrackers
        );

        if (runtimeParams.fallbackSdkUsed === '1') {
            trackingCenter.track({
                name: 'fallbackSdkUsed',
                sdk: 'MRAID'
            });
        }

        var aggregatorTracking = new AggregatorTracking(trackingCenter);

        var experiments = new Experiments(runtimeParams.variantChoices, trackingCenter);

        var trackingLoadingTimesExperiment = experiments.get('TrackingLoadingTimes');

        var perf = new PerformanceTracker(trackingCenter, experiments);

        if (runtimeParams.clientTimestamp) {
            // Do it manually instead of using var p = perf.start() + p.end() pattern because we want to log
            // times from before PerformanceTracker is available
            perf.collect({
                name: 'redirectDownload',
                type: 'interval',
                id: null,
                startTime: parseFloat(runtimeParams.clientTimestamp) * 1000,
                endTime: runtimeParams.redirectJsClientTimestamp * 1000,
                args: []
            });
        }

        perf.collect({
            name: 'payloadDownload',
            type: 'interval',
            id: null,
            startTime: runtimeParams.redirectJsClientTimestamp * 1000,
            endTime: runtimeParams.payloadJsClientTimestamp * 1000,
            args: []
        });

        var unitName = 'banner';
        var requiredDeviceType = 'Phone';

        perf.collect({
            name: 'payLoadDownloadedToAdapter.new',
            type: 'interval',
            id: null,
            startTime: runtimeParams.payloadJsClientTimestamp * 1000,
            endTime: Date.now(),
            args: []
        });

        var perfAdapterNew = perf.start('Adapter.new');
        var adapter = new MRAIDAdapter(runtimeParams, trackingCenter, aggregatorTracking, experiments, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl, perf);
        perfAdapterNew.end();
        trackingCenter.windowForPixels = adapter.getTopWindow();

        var perfFormatNew = perf.start('Format.new');
        var format = new BannerFormat(adapter, {
            "banner": {
                "size": null,
                "layouts": [{
                    "orientation": "independent",
                    "minSize": {
                        "width": 0,
                        "height": 0
                    },
                    "unitSize": {
                        "width": 300,
                        "height": 250
                    },
                    "designTimeSize": {
                        "width": 300,
                        "height": 250
                    },
                    "unitAlignment": {
                        "horizontal": "center",
                        "vertical": "center"
                    }
                }]
            }
        });
        perfFormatNew.end();

        (function() {
            // Add head or body, if they do not yet exist
            var html = document.documentElement;
            var head = document.querySelector('head');
            if (!head) {
                head = document.createElement('head');
                html.insertBefore(head, html.firstChild);
            }
            var body = document.querySelector('body');
            if (!body) {
                body = document.createElement('body');
                html.appendChild(body);
            }


            // Add CSS
            var styles = document.createElement('style');
            styles.textContent = ".transplanted-form-element-container input,\n.transplanted-form-element-container textarea,\n.transplanted-form-element {\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n    text-align: center;\n}\n\n.celtra-display-image-overlay {\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    z-index: 30;\n    background-repeat: no-repeat;\n    background-position: center center;\n    /* background-color and background-image set in code */\n}\n\n.celtra-display-image-overlay .celtra-back-button {\n    position: absolute;\n    top: 0;\n    width: 30px; height: 30px;\n    background: url('https://cache-ssl.celtra.com/api/static/ve62791e034/runner/clazzes/CreativeUnit/back.png');\n    background-size: 30px 60px;\n}\n\n.celtra-display-image-overlay .celtra-back-button.left {\n    left: 0;\n}\n\n.celtra-display-image-overlay .celtra-back-button.right {\n    right: 0;\n}\n\n.celtra-display-image-overlay .celtra-back-button.touched {\n    background-position: 0 100%;\n}\n\n.celtra-fit-to-container {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.celtra-center-content {\n    width: 100%;\n    height: 100%;\n    text-align: center;\n}\n.celtra-center-content::before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n}\n.celtra-center-content > * {\n    vertical-align: middle;\n}\n\n/* Disables green outline on tapped objects on HTC phones running Android */\n* {\n    -webkit-tap-highlight-color : rgba(0,0,0,0);\n    tap-highlight-color         : rgba(0,0,0,0);\n}\n\n.celtra-creative-unit {\n    font-family: Helvetica;\n    font-size: 12pt;\n\n    position: relative; /* so contained elements are positioned OK and 'overflow: hidden' works */\n\n    /*\n      z-indices:\n        10 - screenHolder\n        20 - placeboBar\n        40 - alert\n        30 - displayImageAction overlay\n        100 - close button\n    */\n}\n\n.celtra-screen-holder {\n    position: absolute; top: 0; left: 0; bottom: 0; right: 0;\n    z-index: 10;\n}\n\n.celtra-creative-unit, .celtra-creative-unit * {\n    -webkit-text-size-adjust: none;\n        -ms-text-size-adjust: none;\n            text-size-adjust: none;\n    tap-highlight-color: transparent;\n    touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; /* override to 'text' manually if needed */\n\n    margin: 0;\n    padding: 0;\n}\n\n.celtra-close-button {\n    position: absolute;\n    top: 0; right: 0;\n    width: 30px; height: 30px;\n    z-index: 99999999;\n    overflow: hidden;\n    -webkit-transform: translateZ(0);\n}\n\n.celtra-close-button-text {\n    font-family: Arial, Helvetica, Tahoma, sans-serif;\n    font-size: 12px;\n    line-height: 12px;\n    padding: 10px;\n    white-space: nowrap;\n    width: auto;\n    height: auto;\n    cursor: pointer;\n}\n\n.celtra-close-button.touched {\n    visibility: hidden;\n}\n\n.celtra-close-button-down {\n    visibility: hidden;\n}\n\n.celtra-close-button-up.touched+.celtra-close-button-down {\n    visibility: visible;\n}\n\n.celtra-close-button-text.touched {\n    visibility: visible;\n    padding-top: 11px;\n    padding-right: 9px;\n}\n\n.celtra-creative-unit input,\n.celtra-creative-unit textarea {\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n    text-align: center;\n}\n\n.celtra-screen {\n    /*\n      Screens themselves have 0 area and visible overflow (default), so\n      click-through from base to master screen works.\n      \n      The master has z-index 0 and the primary screen has z-index 1.\n    */\n    position: absolute;\n    top: 0; left: 0; \n    \n    pointer-events: none;\n    overflow: hidden;\n}\n\n.celtra-screen > * {\n    pointer-events: auto;\n}\n/*\nThis extra CSS attribute is required for Internet Explorer 10+ to correctly\nroute Pointer events to the object being touched. This is mutually exclusive\nwith scrolling, so there's no way to have both at the same time. This will\nalso prevent swipeable banners if any element on stage has the `touchable`\nCSS class, but will generate `tap` events.\n*/\n.touchable { -ms-touch-action: none; }\n\n/*\nOn IE, if a background is not set on an element, it is\ntransparent to mouse and touch events. This forces the\nelement to become opaque to user events.\n*/\n.celtra-screen-object { background: rgba(0,0,0,0); }\n\n/*\nPointer cursor for hotspot component on desktop.\n*/\n.celtra-hotspot { cursor: pointer; }\n\n\n/*\nForce GPU rendering for all children of animated layers in order to prevent jittery scaling animations.\nBecause the `animated` class is added to objects only when SceneOverrides.js is included, this style rule\nwill not affect any elements in creatives which are not using scenes.\n*/\n.celtra-screen-object.animated div,\n.celtra-screen-object.animated > img,\n.celtra-screen-object.animated .celtra-screen-object div,\n.celtra-screen-object.animated .celtra-screen-object > img {\n    -webkit-transform: perspective(1px);\n            transform: perspective(1px);\n}\n\n.celtra-picture {\n    overflow: hidden;\n}\n\n.celtra-picture.empty {\n    background-color: #000000;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 28px;\n    border: 2px solid #404040;\n    box-sizing: border-box;\n}\n\n.celtra-button {\n\tbox-sizing: border-box;\n\tcursor: pointer;\n}\n\n.celtra-button div {\n\toverflow: hidden;\n\tbox-sizing: border-box;\n\tbackground-clip: padding-box;\n\n\tborder-width: 0;\n\tborder-style: solid;\n\tborder-color: transparent;\n\n\tbackground-color: transparent;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n}\n\n.celtra-button div,\n.celtra-button img {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\t-webkit-transition: inherit;\n\t        transition: inherit;\n}\n\n.celtra-button .background,\n.celtra-button .background img,\n.celtra-button .foreground,\n.celtra-button .foreground div {\n\tpointer-events: none;\n}\n\n.celtra-button .call-to-action {\n\tpadding: 0 3px;\n\twhite-space: pre;\n}\n\n.celtra-button .image-fit div {\n\tbackground-size: auto;\n}\n\n.celtra-button .image-stretch div {\n\tbackground-size: 100% 100%;\n}\n.celtra-shapey {\n\tbox-sizing: border-box;\n}\n\n.celtra-shapey div {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\n\toverflow: hidden;\n\tbox-sizing: border-box;\n\tbackground-clip: padding-box;\n\n\tborder-width: 0;\n\tborder-style: solid;\n\tborder-color: transparent;\n\n\t-webkit-transition: inherit;\n\n\t        transition: inherit;\n}\n\n";
            head.appendChild(styles);

            // Add JS
            var js = document.createElement('script');
            js.textContent = "function inherit(e,t){var n=function(){};n.prototype=t.prototype,e.prototype=new n,Object.defineProperties(e,{uber:{get:function(){return t.prototype},enumerable:!1,configurable:!1},uberConstructor:{get:function(){return t},enumerable:!1,configurable:!1}}),e.prototype.constructor=e}function extend(e,t){for(var n=1;n<arguments.length;n++){var t=arguments[n];if(t instanceof Object)for(var r in t)e[r]=t[r]}return e}function deep(e,t){for(var n in t)e[n]instanceof Object&&t[n]instanceof Object?deep(e[n],t[n]):e[n]=t[n]}function delayed(e,t){var n=null;return function(){n&&clearTimeout(n),n=setTimeout(e,t)}}function throttled(e,t){var n=null;return function(){n||(n=setTimeout(function(){n=null,e()},t))}}function deferred(e,t,n,r){return function(){defer(e,t,n,r)}}function useAsap(){return\"undefined\"!=typeof creative&&creative.adapter&&creative.adapter.useAsap||\"undefined\"!=typeof adapter&&adapter.useAsap}function hasClass(e,t){return-1!=(\" \"+e.className+\" \").indexOf(\" \"+t+\" \")}function addClass(e,t){hasClass(e,t)||(e.className+=\" \"+t)}function removeClass(e,t){e.className=e.className.replace(new RegExp(\"(\\\\s|^)\"+t+\"(\\\\s|$)\"),\" \")}function toggleClass(e,t){hasClass(e,t)?removeClass(e,t):addClass(e,t)}function cssurl(e){return\"url('\"+e.replace(/'/g,\"\\\\'\")+\"')\"}function camelize(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}function ucfirst(e){return e.charAt(0).toUpperCase()+e.slice(1)}function zeroPad(e,t){null==t&&(t=2);var n=Math.max(0,t-(\"\"+e).length),r=(\"\"+Math.pow(10,n)).slice(1);return r+e}function htmlentitize(e){return e.replace(/&/g,\"&amp;\").replace(/\"/g,\"&quot;\").replace(/'/g,\"&#39;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\")}function removeHtmlTags(e){var t,n=\"(?:[^\\\"'>]|\\\"[^\\\"]*\\\"|'[^']*')*\",r=new RegExp(\"<(?:!--(?:(?:-*[^->])*--+|-?)|script\\\\b\"+n+\">[\\\\s\\\\S]*?</script\\\\s*|style\\\\b\"+n+\">[\\\\s\\\\S]*?</style\\\\s*|/?[a-z]\"+n+\")>\",\"gi\");do t=e,e=e.replace(r,\"\");while(e!==t);return e.replace(/</g,\"&lt;\")}function trim(e){return e.replace(/^\\s+|\\s+$/g,\"\")}function to_utf8(e){return unescape(encodeURIComponent(e))}function randInt(){return(Math.random()+\"\").slice(2)}function _isListenerOptionSupported(e){var t=_isListenerOptionSupported.opts;if(\"undefined\"==typeof t[e]){t[e]=!1;try{window.addEventListener(\"listener-test\",null,Object.defineProperty({},e,{get:function(){t[e]=!0}}))}catch(n){}}return t[e]}function _buildNativeListenerOptions(e){if(\"object\"!=typeof e)return!!e;if(!_isListenerOptionSupported(\"capture\"))return!!e.capture;var t={capture:!!e.capture};return _isListenerOptionSupported(\"passive\")&&(t.passive=!!e.passive),t}function _analyzeTouch(e){var t,n=Math.abs(e.firstTouch.x-e.lastTouch.x),r=Math.abs(e.firstTouch.y-e.lastTouch.y);return\"y\"===e.validAxis?t=r>e.minDistanceForSwipe:\"x\"===e.validAxis&&(t=n>e.minDistanceForSwipe),{isHorizontal:n>r,isConsideredSwipe:t}}function attach(e,t,n,r){var o=getEventNames()[t.toLowerCase()]||t;e.addEventListener(o,n,_buildNativeListenerOptions(r))}function detach(e,t,n,r){var o=getEventNames()[t.toLowerCase()]||t;e.removeEventListener(o,n,_buildNativeListenerOptions(r))}function once(e,t,n,r){attach(e,t,function o(){detach(e,t,o,r),n.apply(this,arguments)},r)}function trigger(e,t,n,r){var o=document.createEvent(\"HTMLEvents\");o.initEvent(t,n,r);var i=\"on\"+ucfirst(t);return\"function\"==typeof e[i]&&e[i](),e.dispatchEvent(o)}function fakeclick(e,t){t=t||window;var n=t.document.createElement(\"a\");n.cssText=\"visibility: hidden\",n.addEventListener(\"click\",function(t){e(),t.preventDefault(),t.stopPropagation(),n.parentNode.removeChild(n)},!0),t.document.body.appendChild(n);var r=document.createEvent(\"MouseEvents\");r.initEvent(\"click\",!0,!0),n.dispatchEvent(r)}function fakeClickAhrefBlank(e,t,n){t=t||noop,n=n||window;var r=n.document.createElement(\"a\");r.style.cssText=\"visibility: hidden\",r.setAttribute(\"href\",e),r.setAttribute(\"target\",\"_blank\"),r.addEventListener(\"click\",function(e){e.stopPropagation(),t(),r.parentNode.removeChild(r)},!0),n.document.body.appendChild(r);var o=n.document.createEvent(\"MouseEvents\");o.initEvent(\"click\",!0,!0),r.dispatchEvent(o)}function noop(){}function nullai(e,t){t&&t()}function retTrue(){return!0}function retFalse(){return!1}function offset(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView;return{top:t.top+(o.pageYOffset||r.scrollTop)-(r.clientTop||0),left:t.left+(o.pageXOffset||r.scrollLeft)-(r.clientLeft||0)}}function addCssRule(e,t,n){var r=document.createElement(\"style\");r.textContent=e+\" {\"+t+\"}\",n?n.document.getElementsByTagName(\"head\")[0].appendChild(r):document.getElementsByTagName(\"head\")[0].appendChild(r)}function redrawAndroidIframe(){var e=document.createElement(\"style\");document.body.appendChild(e),document.body.removeChild(e)}function parseQuery(e){var t={};return e=e.replace(/\\&$/,\"\").replace(/\\+/g,\"%20\"),e.split(\"&\").forEach(function(e){var n=e.split(\"=\").map(decodeURIComponent);t[n[0]]=n[1]}),t}function buildQuery(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+\"=\"+encodeURIComponent(e[n]));return t.join(\"&\")}function postBlob(e,t){var n=new XMLHttpRequest;n.open(\"POST\",creative.apiUrl+\"blobs?base64=1\"),n.setRequestHeader(\"Content-Type\",\"application/octet-stream\"),n.onreadystatechange=function(){4===n.readyState&&t(n.responseText,n.status)},n.send(e)}function tmpl(e,t){function n(e){return\"  p.push('\"+e.replace(/'/g,\"\\\\'\").split(/\\r?\\n/g).join(\"\\\\n');\\n  p.push('\")+\"');\\n\"}if(!e)return\"\";var r;if(-1==e.indexOf(\"<%\"))r=function(){return e};else{var o=e.split(/<%\\s*|\\s*%>/g),i=\"var p = []; with(o) {\\n\",a=!1;o.forEach(function(e){a?i+=\"=\"==e[0]?\"  p.push(\"+e.replace(/^=\\s*|\\s*$/g,\"\")+\");\\n\":\"  \"+e+\"\\n\":e&&(i+=n(e)),a=!a}),i+='} return p.join(\"\");';try{r=new Function(\"o\",i)}catch(c){var u=new Error(\"Cannot parse template! (see `template` property)\");throw u.template=i,u}}return t?r(t):r}function flash(){var e=document.createElement(\"div\");e.style.background=\"white\",e.style.opacity=.005,e.style.position=\"absolute\",e.style.top=0,e.style.left=0,e.style.width=\"100%\",e.style.height=\"100%\",e.style.zIndex=2147483647,document.body.appendChild(e),setTimeout(function(){e.parentNode.removeChild(e)},0)}function crc32(e){\"use strict\";var t=-1,n=0,r=[0,-227835133,-516198153,324072436,-946170081,904991772,648144872,-724933397,-1965467441,2024987596,1809983544,-1719030981,1296289744,-1087877933,-1401372889,1578318884,274646895,-499825556,-244992104,51262619,-675000208,632279923,922689671,-996891772,-1702387808,1760304291,2075979607,-1982370732,1562183871,-1351185476,-1138329528,1313733451,549293790,-757723683,-1048117719,871202090,-416867903,357341890,102525238,-193467851,-1436232175,1477399826,1264559846,-1187764763,1845379342,-1617575411,-1933233671,2125378298,820201905,-1031222606,-774358714,598981189,-143008082,85089709,373468761,-467063462,-1170599554,1213305469,1526817161,-1452612982,2107672161,-1882520222,-1667500394,1861252501,1098587580,-1290756417,-1606390453,1378610760,-2032039261,1955203488,1742404180,-1783531177,-878557837,969524848,714683780,-655182201,205050476,-28094097,-318528869,526918040,1361435347,-1555146288,-1340167644,1114974503,-1765847604,1691668175,2005155131,-2047885768,-604208612,697762079,986182379,-928222744,476452099,-301099520,-44210700,255256311,1640403810,-1817374623,-2130844779,1922457750,-1503918979,1412925310,1197962378,-1257441399,-350237779,427051182,170179418,-129025959,746937522,-554770511,-843174843,1070968646,1905808397,-2081171698,-1868356358,1657317369,-1241332974,1147748369,1463399397,-1521340186,-79622974,153784257,444234805,-401473738,1021025245,-827320098,-572462294,797665321,-2097792136,1889384571,1674398607,-1851340660,1164749927,-1224265884,-1537745776,1446797203,137323447,-96149324,-384560320,461344835,-810158936,1037989803,781091935,-588970148,-1834419177,1623424788,1939049696,-2114449437,1429367560,-1487280117,-1274471425,1180866812,410100952,-367384613,-112536529,186734380,-538233913,763408580,1053836080,-860110797,-1572096602,1344288421,1131464017,-1323612590,1708204729,-1749376582,-2065018290,1988219213,680717673,-621187478,-911630946,1002577565,-284657034,493091189,238226049,-61306494,-1307217207,1082061258,1395524158,-1589280451,1972364758,-2015074603,-1800104671,1725896226,952904198,-894981883,-638100751,731699698,-11092711,222117402,510512622,-335130899,-1014159676,837199303,582374963,-790768336,68661723,-159632680,-450051796,390545967,1230274059,-1153434360,-1469116676,1510247935,-1899042540,2091215383,1878366691,-1650582816,-741088853,565732008,854102364,-1065151905,340358836,-433916489,-177076669,119113024,1493875044,-1419691417,-1204696685,1247431312,-1634718085,1828433272,2141937292,-1916740209,-483350502,291187481,34330861,-262120466,615137029,-691946490,-980332558,939183345,1776939221,-1685949482,-1999470558,2058945313,-1368168502,1545135305,1330124605,-1121741762,-210866315,17165430,307568514,-532767615,888469610,-962626711,-707819363,665062302,2042050490,-1948470087,-1735637171,1793573966,-1104306011,1279665062,1595330642,-1384295599];for(n=0;n<e.length;n++)t=t>>>8^r[255&(t^e.charCodeAt(n))];return(-1^t)>>>0}function isArray(e){return\"[object Array]\"===Object.prototype.toString.call(e)}function isDefAndNotNull(e){return null!=e}function updateQueryStringParameter(e,t,n){t=encodeURIComponent(t),n=encodeURIComponent(n);var r=new RegExp(\"([?|&])\"+t+\"=.*?(&|$)\",\"i\");return separator=-1!==e.indexOf(\"?\")?\"&\":\"?\",e.match(r)?e.replace(r,\"$1\"+t+\"=\"+n+\"$2\"):e+separator+t+\"=\"+n}function fetchShortenedUrl(e,t,n){function r(t,n){i[e].forEach(function(e){e[t](n)}),delete i[e]}n=n||noop;var o=!1,i=fetchShortenedUrl.inProgress,a=fetchShortenedUrl.cache;if(\"http\"==!e.slice(0,4))return void n();if(a[e])return void defer(function(){t(a[e])},0,\"fetchShortenedUrl defer success callback\");if(i[e]||(i[e]=[],o=!0),i[e].push({success:t,error:n}),o){var c=(creative.runtimeParams.secure?creative.cachedApiUrl:creative.insecureCachedApiUrl)+\"shortenedUrls/\",u={url:e,fields:\"shortUrlKey\"},s=btoa(to_utf8(e));s=s.replace(/\\//g,\"$\").replace(/\\+/g,\"_\").replace(/=/g,\"\");var d={cbName:\"shortener_\"+s};loadJSONP(c+\"?\"+buildQuery(u),d,function(t){var n=creative.shareUrl+t.shortUrlKey;a[e]=n,r(\"success\",n)},function(){requestCreateShortenedUrl(e,r)})}}function requestCreateShortenedUrl(e,t){var n=(creative.runtimeParams.secure?creative.apiUrl:creative.insecureApiUrl)+\"shortenedUrls/\",r=fetchShortenedUrl.cache,o=new XMLHttpRequest;o.open(\"POST\",n),o.setRequestHeader(\"Content-Type\",\"application/json; charset=utf-8\"),o.onreadystatechange=function(){if(4===o.readyState)if(201===o.status){var n=JSON.parse(o.responseText),i=creative.shareUrl+n.shortUrlKey;r[e]=i,t(\"success\",i)}else t(\"error\")},o.send(JSON.stringify({url:e}))}function isMediaPlaying(e){try{return e.currentTime>0&&!e.paused&&!e.ended}catch(t){return!1}}function merge(){var e,t,n={};for(t=0;t<arguments.length;t+=1)if(e=arguments[t],null!==e&&void 0!==e)for(var r in e)n[r]=e[r];return n}function clamp(e,t,n){return Math.max(e,Math.min(t,n))}function lerp(e,t,n){return e+n*(t-e)}function map(e,t,n,r,o){return(o-e)/(t-e)*(r-n)+n}function step(e,t){return e>t?0:1}function pulse(e,t,n){return step(e,n)-step(t,n)}function smoothstep(e,t,n){var r=clamp(0,1,(n-e)/(t-e));return r*r*r*((6*r-15)*r+10)}function bump(e,t,n){var r=clamp(0,1,(n-e)/(t-e));return(Math.cos(Math.PI*r)+1)/2}function getWindowNesting(e){var t={iframe:e!==e.top,friendlyIframe:!1,iabFriendlyIframe:!1,hostileIframe:!1,iframeDepth:0};if(t.iframe){var n=e;try{for(t.friendlyIframe=!!e.top.location.href,t.iabFriendlyIframe=t.friendlyIframe&&\"undefined\"!=typeof e.inDapIF&&e.inDapIF;\"undefined\"!=typeof n.parent.location.href&&n.parent.document!==n.document;)n=n.parent,t.iframeDepth++;\"undefined\"==typeof e.top.document&&(t.hostileIframe=!0)}catch(r){t.hostileIframe=!0}}return t}function isFetchSupported(){return!!(window.fetch&&window.URL&&URL.createObjectURL)}function isBeaconSupported(){return!(!window.navigator||!window.navigator.sendBeacon)}function isNativeImplementation(e){return\"function\"==typeof e&&e.toString().indexOf(\"[native code]\")>-1}!function(e){if(!this.defer){try{for(;\"undefined\"!=typeof e.parent.location.href&&e.parent.document!==e.document;)e=e.parent}catch(t){}var n=function(){function t(){return 9007199254740991===s?0:++s}var n,r,o,i,a=e,c=\"function\"==typeof a.setImmediate;if(a.MutationObserver)return function(e){n=document.createElement(\"div\"),new MutationObserver(function(){e(),n=null}).observe(n,{attributes:!0}),n.setAttribute(\"i\",\"1\")};if(!c&&a.postMessage&&!a.importScripts&&a.addEventListener){var u=\"com.setImmediate\"+Math.random(),s=0;i={};var d=function(e){if(e.source===a&&0===e.data.indexOf(u)){var t=e.data.split(\":\")[1];i[t](),delete i[t]}};return a.addEventListener(\"message\",d,!1),function(e){var n=t();i[n]=e,a.postMessage(u+\":\"+n,\"*\")}}return!c&&a.document&&\"onreadystatechange\"in document.createElement(\"script\")?function(e){r=document.createElement(\"script\"),r.onreadystatechange=function(){r.onreadystatechange=null,r.parentNode.removeChild(r),r=null,e()},document.body.appendChild(r)}:(o=c&&setImmediate||setTimeout,function(e){o(e)})}();this.defer=function(t,r,o,i){var a,c=0|r;if(o){var u;\"undefined\"!=typeof defer.perf?u=defer.perf:\"undefined\"!=typeof creative?u=creative.perf:\"undefined\"!=typeof perf&&(u=perf),u&&(u._stopTrackingDefers||(a=u.start(\"defer\",{deferId:o,delay:c})))}if(t){var s=function(){a&&a.end(),t()};i?n(s):e.setTimeout(s,c)}}}}(window),Function.prototype.bind||Object.defineProperty(Function.prototype,\"bind\",{value:function(e){var t=this;return function(){return t.apply(e,arguments)}}}),function(e){e.getEventNames=function(){var t={};return\"WebKitAnimationEvent\"in e&&(t.animationstart=\"webkitAnimationStart\",t.animationiteration=\"webkitAnimationIteration\",t.animationend=\"webkitAnimationEnd\"),\"WebKitTransitionEvent\"in e&&(t.transitionend=\"webkitTransitionEnd\"),t}}(window),_isListenerOptionSupported.opts={};var getTimestamp=function(){return void 0===window.performance||void 0===window.performance.now?Date.now:window.performance.now.bind(window.performance)}();Date.now||(Date.now=function(){return+new Date}),Array.prototype.waitForEach||Object.defineProperty(Array.prototype,\"waitForEach\",{value:function(e,t,n){var r=this.length;r?this.forEach(function(o,i,a){var c=!1;e.call(n,o,function(){if(c)throw\"Called `done` multiple times for element \"+i;c=!0,--r||t()},i,a)},n):t()}}),function(e){e.loadJS=function(t,n,r,o){var i=e.loadJS.externals,a={success:n||noop,error:r||noop};if(!/^[A-Za-z0-9]*:\\/\\/|^\\/\\//.test(t)){var c=creative.hostedFiles.filter(function(e){return e.filepath===t})[0];if(\"undefined\"==typeof c)return console.warn('Hosted file \"'+t+'\" was not found.'),void a.error();if(c.loaded!==!1)return console.warn('Hosted file \"'+t+'\" is already loaded.'),void setTimeout(a.success,0);c.loaded=!0,t=creative.cachedApiUrl+\"hostedFiles/\"+creative.id+\"/\"+creative.version+\"/\"+t}if(t in i&&!o)i[t].loaded?setTimeout(a.success,0):i[t].cbs.push(a);else{i[t]={cbs:[a]};var u=document.createElement(\"script\");u.type=\"text/javascript\",u.onload=function(){i[t].loaded=!0,i[t].cbs.forEach(function(e){e.success()}),i[t].cbs=[]},u.onerror=function(){i[t].cbs.forEach(function(e){e.error()}),i[t].cbs=[],delete i[t]},u.src=t,e.loadJS.appendToRoot(u)}},e.loadJS.externals={},e.loadJS.appendToRoot=function(e){return document.querySelector(\"head\").appendChild(e)},e.loadJSONP=function(t,n,r,o){\"function\"==typeof n&&(o=r,r=n,n={});var i=n.cbName||\"__jsonp\"+randInt();t+=(-1==t.indexOf(\"?\")?\"?\":\"&\")+(n.paramName||\"jsonp\")+\"=\"+i,e[i]=function(t){r(t),delete e[i]},loadJS(t,noop,o,!0)}}(window),\"undefined\"==typeof Function.prototype.name&&!function(){var e=/^function\\s+(\\w+?)\\s*?\\(/;Object.defineProperty(Function.prototype,\"name\",{get:function(){var t=this.constructor.prototype.toString.call(this);return e.test(t)?t.match(e)[1]:\"\"}})}(),fetchShortenedUrl.cache={},fetchShortenedUrl.inProgress={};;\nfunction CPoint(t,i){this.x=1*t||0,this.y=1*i||0}function CRect(t,i,e,o){this.left=1*t||0,this.top=1*i||0,this.width=1*e||0,this.height=1*o||0}CPoint.offset=function(t){var i=offset(t);return new CPoint(i.left,i.top)},CPoint.convertPointFromNodeToPage=function(t,i){if(!t||\"undefined\"!=typeof t.x)return null;var e=CPoint.offset(t);return new CPoint((i?i.x:0)+(e?e.x:0),(i?i.y:0)+(e?e.y:0))},CPoint.convertPointFromPageToNode=function(t,i){if(!t||\"undefined\"!=typeof t.x)return null;var e=CPoint.offset(t);return new CPoint((i?i.x:0)-(e?e.x:0),(i?i.y:0)-(e?e.y:0))},CPoint.sample=function(t,i,e){for(var o=Math.floor(Math.sqrt(t.width*i/t.height)),n=Math.floor(Math.sqrt(t.height*i/t.width)),h=t.width/o,r=t.height/n,s=0;n>s;s++)for(var f=0;o>f;f++)e((f+.5)*h+t.left,(s+.5)*r+t.top)},CPoint.epsilon=function(t,i,e){return Math.abs(t-i)<e},CPoint.prototype.equals=function(t){return CPoint.epsilon(this.x,t.x,.25)&&CPoint.epsilon(this.y,t.y,.25)},CRect.ZERO=new CRect,Object.defineProperties(CRect.prototype,{right:{get:function(){return this.left+this.width},set:function(t){var i=this.left;t<this.left&&(this.left=t,t=i),this.width=t-this.left},enumerable:!0},bottom:{get:function(){return this.top+this.height},set:function(t){var i=this.top;t<this.top&&(this.top=t,t=i),this.height=t-this.top},enumerable:!0},tl:{get:function(){return new CPoint(this.left,this.top)}},tr:{get:function(){return new CPoint(this.right,this.top)}},bl:{get:function(){return new CPoint(this.left,this.bottom)}},br:{get:function(){return new CPoint(this.right,this.bottom)}},area:{get:function(){return this.width*this.height}}}),CRect.adopt=function(t){return new CRect(t.left,t.top,t.width,t.height)},CRect.prototype.zero=function(){return 0===this.area},CRect.prototype.intersect=function(t){if(!t)return!1;var i=Math.max(this.left,t.left),e=Math.max(this.top,t.top),o=Math.min(this.right,t.right),n=Math.min(this.bottom,t.bottom),h=o-i,r=n-e;return 0>h||0>r?CRect.ZERO:new CRect(i,e,h,r)},CRect.prototype.copyFrom=function(t){this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height},CRect.prototype.relativeTo=function(t){return new CRect(this.left-t.left,this.top-t.top,this.width,this.height)},CRect.prototype.contains=function(t){return t instanceof CPoint?t.x>=this.left&&t.x<=this.right&&t.y>=this.top&&t.y<=this.bottom:t instanceof CRect?t.left>=this.left&&t.right<=this.right&&t.top>=this.top&&t.bottom<=this.bottom:void 0},CRect.prototype.map=function(t,i){var e=i.width/t.width,o=i.height/t.height;return new CRect((this.left-t.left)*e+i.left,(this.top-t.top)*o+i.top,this.width*e,this.height*o)},CRect.prototype.equals=function(t){return t&&this.left==t.left&&this.top==t.top&&this.right==t.right&&this.bottom==t.bottom},CRect.prototype.toString=function(){return\"CRect: \"+JSON.stringify(this)};;\nfunction Logger(e){if(!(this instanceof Logger))return new Logger(e);e=e||\"\";var n=noop;(Logger.enabledNames.indexOf(e)>=0||Logger.enabledNames.indexOf(\"all\")>=0)&&(n=function(){var e=[].slice.apply(arguments);e.unshift(Logger._ts()+\" [\"+Logger.sessionId+(this.name?\" \"+this.name:\"\")+\"]\"),console.log.apply(console,e)}),this.name=e,this.log=n,this.warn=n,this.debug=n,this.error=n}Logger._ts=function(){function e(e,n){for(e+=\"\";e.length<n;)e=\"0\"+e;return e}var n=new Date;return n.getFullYear()+\"-\"+e(n.getMonth()+1,2)+\"-\"+e(n.getDate(),2)+\" \"+e(n.getHours(),2)+\":\"+e(n.getMinutes(),2)+\":\"+e(n.getSeconds(),2)+\".\"+e(n.getTime()-1e3*Math.floor(n.getTime()/1e3),3)},Logger.init=function(e,n){Logger.enabledNames=e,Logger.sessionId=n||(Math.random()+\"\").slice(15)},Logger.initFromRuntimeParams=function(e){Logger.init(e.debug?e.debug.split(\",\"):[],e.sessionId)};;\nwindow.CeltraDeviceInfo={},function(e){function n(e,n){this.os=new t(e.osName,e.osVersion),this.browser=new r(e.browserName,e.browserVersion,n),this.engine=new i(e.browserRenderingEngine,e.browserRenderingEngineVersion),this.deviceType=new o(e.deviceType,e.mobileDevice),this.vendor=e.vendor||\"\",this.model=e.model||\"\",this.userAgent=n}function t(e,n){this.name=e||\"\",this.version=n||\"0\"}function r(e,n,t){this.name=e||\"\",this.version=n||\"0\",this.userAgent=t}function i(e,n){this.name=e||\"\",this.version=n||\"0\"}function o(e,n){this.hardwareType=e||\"\",this.mobile=n||\"\"}function s(e,n){function t(e){return parseInt(e.replace(/\\D/g,\"\"),10)}function r(e,n){var t;for(t=0;t<Math.min(e.length,n.length);t++){if(e[t]<n[t])return-1;if(e[t]>n[t])return 1}return 0}var i,o,s;if(!e)return!0;if(0===n.length)o=null,s=null;else if(1===n.length)o=n[0],s=n[0];else{if(2!==n.length)throw\"Invalid number of arguments\";o=n[0],s=n[1]}for(e=e.split(\".\").map(t),o=o?o.split(\".\").map(t):[],s=s?s.split(\".\").map(t):[],i=Math.max(o.length,s.length)-e.length;i>=0;i--)e.push(0);return!(-1===r(e,o)||1===r(e,s))}function a(e,n){if(-1===e.indexOf(\"Playstation\")){var t=e.match(/\\bSilk\\/([0-9._-]+)\\b/);t&&(n.browserName=\"Amazon Silk\",n.browserVersion=t[1])}n.browserName&&n.browserVersion&&(0===n.browserName.indexOf(\"Chrome\")&&s(n.browserVersion,[\"28\",null])||0===n.browserName.indexOf(\"Opera\")&&s(n.browserVersion,[\"15\",null]))&&(n.browserRenderingEngine=\"Blink\"),n.browserRenderingEngineVersion||(n.browserRenderingEngineVersion=function(){var n;return(n=e.match(/Trident\\/([0-9.]+)/))?n[1]:(n=e.match(/Presto\\/([0-9.]+)/))?n[1]:(n=e.match(/AppleWebKit\\/*([0-9.]+)/i))?n[1]:(n=e.match(/Gecko\\/*([0-9.]+)/),n?n[1]:\"\")}())}t.prototype.android=function(){return\"Android\"===this.name&&s(this.version,arguments)},t.prototype.osx=function(){return\"OSX\"===this.name&&s(this.version,arguments)},t.prototype.ios=function(){return\"IOS\"===this.name&&s(this.version,arguments)},t.prototype.windows=function(){return\"Windows\"===this.name&&s(this.version,arguments)},t.prototype.windowsPhone=function(){return\"WindowsPhone\"===this.name&&s(this.version,arguments)},t.prototype.linux=function(){return\"Linux\"===this.name},r.prototype.safari=function(){return\"Safari\"===this.name&&s(this.version,arguments)},r.prototype.chrome=function(){return 0===this.name.indexOf(\"Chrom\")&&s(this.version,arguments)},r.prototype.ie=function(){return 0===this.name.indexOf(\"Internet Explorer\")&&s(this.version,arguments)},r.prototype.android=function(){return\"Android Browser\"===this.name&&s(this.version,arguments)},r.prototype.samsung=function(){return\"Samsung Browser\"===this.name&&s(this.version,arguments)},r.prototype.opera=function(){return 0===this.name.indexOf(\"Opera\")&&s(this.version,arguments)},r.prototype.silk=function(){return\"Amazon Silk\"===this.name&&s(this.version,arguments)},r.prototype.firefox=function(){return\"Firefox\"===this.name&&s(this.version,arguments)},r.prototype.edge=function(){return\"Edge\"===this.name&&s(this.version,arguments)},r.prototype.webView=function(){var n=null,t=\"iP\"===(e.navigator.platform||\"\").substr(0,2);if(t){var r=this.userAgent,i=-1!==r.indexOf(\"Safari\")&&-1!==r.indexOf(\"Version\"),o=!/constructor/i.test(e.HTMLElement);i&&!e.navigator.standalone?n=\"iOS Safari or Safari Controller\":(o||e.indexedDB)&&e.statusbar.visible?(e.webkit&&e.webkit.messageHandlers||o||e.indexedDB)&&(n=\"WKWebView\"):n=\"UIWebView\"}else/^.*\\/\\d\\.\\d \\(.*wv\\).*/.test(this.userAgent)&&(n=\"AndroidWebView\");return n},r.prototype.facebookApp=function(){var e=this.userAgent;return e.indexOf(\"FBAN\")>-1||e.indexOf(\"FBAV\")>-1},i.prototype.webkit=function(){return\"WebKit\"===this.name&&s(this.version,arguments)},i.prototype.gecko=function(){return\"Gecko\"===this.name&&s(this.version,arguments)},i.prototype.trident=function(){return\"Trident\"===this.name&&s(this.version,arguments)},i.prototype.presto=function(){return\"Presto\"===this.name&&s(this.version,arguments)},i.prototype.blink=function(){return\"Blink\"===this.name&&s(this.version,arguments)},o.prototype.phone=function(){return\"Phone\"===this.hardwareType},o.prototype.tablet=function(){return\"Tablet\"===this.hardwareType},o.prototype.desktop=function(){return\"Desktop\"===this.hardwareType},o.prototype.mobileDevice=function(){return this.mobile===!0},e.CeltraDeviceInfo.create=function(t,r){return t=t||e.navigator.userAgent||\"\",r=r||{},a(t,r),new n(r,t)}}(window);;\nwindow.deviceInfo=CeltraDeviceInfo.create(window.navigator.userAgent,window.celtraDeviceInfoRuntimeParams);;\n!function(e){function n(){var e=p().match(/iP(ad|hone|od).*OS ([0-9_]+)/);return!!e&&s(e[2].replace(/_/g,\".\"),arguments)}function t(){var e=p().match(/Android ([0-9.]+)/),n=p().match(/Windows Phone/);return!n&&!!e&&s(e[1],arguments)}function r(){var e=p().match(/Windows Phone ([0-9.]+)/);return!!e&&s(e[1],arguments)}function i(){var e=p().match(/AppleWebKit\\/*([0-9.]+)/i);return!!e&&s(e[1],arguments)}function a(){var e=p().match(/Gecko\\/*([0-9.]+)/i);return!!e&&s(e[1],arguments)}function o(){var e=p().match(/MSIE ([0-9]{1,}[.0-9]{0,})|Trident.* rv:([0-9]{1,}[.0-9]{0,})/i);return!!e&&s(e[1]||e[2],arguments)}function u(){var e=p().match(/Silk\\/([0-9.]+)/);return!!e&&s(e[1],arguments)}function f(){var e=p().toLowerCase();return/kftt|kfot|kfjwi|kfjwa|kfso|kfth|kfapwi|kfthwi|kfsowi|kfthwa|kfapwa|kfap|sd4930ur/.test(e)?s(\"2\",arguments):!1}function d(){return\"undefined\"!=typeof offsetWidthOverride?offsetWidthOverride:(document.body.offsetWidth,Math.min(innerWidth,innerHeight))}function c(){return/iPad/.test(p())||d()>550}function m(){return!(t()||n()||r())}function s(e,n){function t(e){return parseInt(e.replace(/\\D/g,\"\"),10)}function r(e,n){for(var t=0;t<v.min(e.length,n.length);t++){if(e[t]<n[t])return-1;if(e[t]>n[t])return 1}return 0}var i,a,o;if(!e)return!0;if(0===n.length)a=null,o=null;else if(1===n.length)a=n[0],o=n[0];else{if(2!==n.length)throw\"Invalid number of arguments\";a=n[0],o=n[1]}e=e.split(\".\").map(t),a=a?a.split(\".\").map(t):[],o=o?o.split(\".\").map(t):[];for(var i=v.max(a.length,o.length)-e.length;i>=0;i--)e.push(0);return!(-1===r(e,a)||1===r(e,o))}function h(){return v.top!==e}function l(){if(!(n()||window.chrome&&\"Google Inc.\"===window.navigator.vendor))return!1;var e;return e=p().match(n()?/CriOS\\/([0-9]+.)/:/Chrome\\/([0-9]+.)/),!!e&&s(e[1],arguments)}function g(){var e=\"(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)\";return window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches}e.celtra=e.celtra||{};var w={};w.ios=n,w.android=t,w.webkit=i,w.windowsPhone=r,w.gecko=a,w.windows=o,w.kindleSilk=u,w.kindle=f,w.iframe=h,w.desktop=m,w.tablet=c,w.chromeBased=l,w.isHighDensityDisplay=g,extend(e.celtra,w),delete w.webkit,extend(e,w);var v={max:e.Math.max,min:e.Math.min,userAgent:e.navigator.userAgent,top:e.top},p=function(){return\"undefined\"!=typeof e.userAgentOverride?e.userAgentOverride:v.userAgent}}(window);;\n!function(e){function t(){var t=e;try{for(;\"undefined\"!=typeof t.parent.location.href&&t.parent.document!==t.document;)t=t.parent}catch(n){}return t}function n(){return s.getComputedStyle(s.document.body,null)}function i(e,t,n){if(!e)throw new Error(\"No element specified!\");if(a(t)){if(!(t in e.style)&&i.BREAK_ON_ERROR)throw new Error(\"Invalid CSS attribute \"+t);if(\"undefined\"==typeof n)return e.style[t];e.style[t]=n}else{if(-1==w.indexOf(t)&&o(t),\"undefined\"==typeof n)return e.style[y[t]];e.style[y[t]]=n}}function r(e,t){if(!e)throw new Error(\"No element specified!\");var n=e.ownerDocument.defaultView.getComputedStyle(e,null);if(R&&v.indexOf(t)>-1&&(t=\"webkit\"+u(t)),!n||\"none\"==n.display||!f())return null;if(!(t in n)&&i.BREAK_ON_ERROR)throw new Error(\"Invalid CSS attribute \"+t);return a(t)?n[t]:(-1==w.indexOf(t)&&o(t),n[y[t]])}function o(e){S=S||n();var t=E+u(e);if(R&&v.indexOf(e)>-1)y[e]=t;else if(S&&e in S)y[e]=e;else if(S&&t in S)y[e]=t;else if(!S&&deviceInfo.browser.firefox)y[e]=e;else if(i.BREAK_ON_ERROR)throw new Error(\"Invalid CSS attribute \"+e+' or iframe still display \"none\" in FF');w.push(e)}function a(e){return p.test(e)}function f(){if(e===s)return!0;var t=e.frameElement.ownerDocument.defaultView.getComputedStyle(e.frameElement,null);return t&&\"none\"!=t.display}function u(e){return e+=\"\",e?e[0].toUpperCase()+e.slice(1):\"\"}var l=e.navigator.userAgent,s=t(),c=/rv:.*Gecko\\//.test(l),d=/MSIE|Trident\\//.test(l),m=/WebKit/.test(l),p=/^-?([mM]oz|[wW]eb[kK]it|[mM]s)-?/,y={},w=[],E=function(){return m?\"webkit\":d?\"ms\":c?\"Moz\":\"\"}(),R=function(){var e=l.match(/AppleWebKit\\/(\\d+)/);return e&&~~e[1]<540}(),v=[\"transform\",\"transform-origin\",\"transform-style\",\"transition\",\"transition-delay\",\"transition-duration\",\"transition-property\",\"transition-timing-function\",\"animation\",\"animation-delay\",\"animation-direction\",\"animation-duration\",\"animation-fill-mode\",\"animation-iteration-count\",\"animation-name\",\"animation-play-state\",\"animation-timing-function\",\"appearance\",\"backface-visibility\",\"perspective\",\"perspective-origin\"],S=n();i.BREAK_ON_ERROR=!1,e.celtra=e.celtra||{},e.celtra.styler={css:i,computedCSS:r,isWebkit:m,isGecko:c,isIE:d},e.css=i,e.computedCSS=r}(window);;\nvar Freezer={};Freezer.unfreeze=function(n,e,o){function t(n,e,o,t,a){ActionInvocationSimulator.isDryRun()?ActionInvocationSimulator.needsDryRun(n.internalId)&&(ActionInvocationSimulator.logActionDryRun(n.internalId,n.method,e.localId),e[n.method+\"ActionDryRun\"]?e[n.method+\"ActionDryRun\"](o,t,a):a()):e[n.method+\"Action\"](o,t,a)}function a(n){if(n instanceof Array)return n.map(a);if(n instanceof Object){var o;if(\"ActionInvocation\"===n.clazz){n.internalId=++c;var s=l;o=function(e,a){if(!e)throw\"Cannot execute an action without a context.\";a||(a=noop);var i=o.isStatic;if(\"undefined\"==typeof i&&(i=!o.instance),o.disabled)return void a();if(i){if(o.instance)throw\"ActionInvocation for a static method must not have an instance assigned.\";if(\"function\"!=typeof o.actionClazz[o.method+\"Action\"])throw\"Clazz \"+o.actionClazz+' does not define the static action \"'+o.method+'\".';var r=extend({},o.args,{triggerId:s,caller:n});t(o,o.actionClazz,e,r,a)}else if(o.instance){if(!(o.instance instanceof o.actionClazz))throw\"Instance \"+o.instance+\" is not an instance of clazz \"+o.actionClazz;if(\"function\"!=typeof o.instance[o.method+\"Action\"])throw\"Instance of clazz \"+o.actionClazz+' does not define the instance action \"'+o.method+'\".';var r=extend({},o.args,{triggerId:s,caller:n});t(o,o.instance,e,r,a)}else ActionInvocationSimulator.isDryRun()?a():defer(a,0,\"Freezer.unfreeze defer c\")}}else if(n.clazz){var f=e[n.clazz];if(!f)throw new Error(\"Unsupported clazz: \"+n.clazz);o=Object.create(f.prototype)}else o={},n.onFire&&(l=n.type);for(var d in n)n.hasOwnProperty(d)&&\"clazz\"!==d&&(o[d]=a(n[d]));i.push(o),o.localId&&(r[o.localId]&&console.error(\"Duplicate localId: \"+o.localId),r[o.localId]=o);for(var d in o)if(\"clazz\"===d.slice(-5).toLowerCase()){var z=o[d];if(!z)continue;e[z]?o[d]=e[z]:console.error(\"Unsupported clazz: \"+o.clazz)}return o}return n}var i=[],r={},c=0,l=null,s=a(n);i.forEach(function(n){for(var e in n)if(\"LocalId\"===e.slice(-7)){var o=n[e];if(o instanceof Function)continue;var t;null===o?t=null:(t=r[o],t||console.error(\"Invalid localId reference: \"+o)),n[e.slice(0,-7)]=t,delete n[e]}else if(\"LocalIds\"===e.slice(-8)){for(var a=[],i=0;i<n[e].length;i++){var c=n[e][i],t=r[c];t||console.error(\"Invalid localId reference: \"+c),a.push(t)}n[e.slice(0,-8)]=a,delete n[e]}});for(var f in o)s[f]=o[f];return i.reverse().forEach(function(n){n.awake&&n.awake()}),s};;\nfunction Batcher(e){e=e||{},this._cache={},this._downloadQueue={},this._base=e.baseUrl,this._protoLoading=e.protoLoading}Batcher.prototype.getDataUri=function(e,a){var t=this;if(\"function\"!=typeof a)throw\"getDataURI callback is not a function\";var r;if(-1!==e.indexOf(\"://\"))r=e;else{if(\"/\"===e[0])throw\"An absolute path as URL?\";r=this._base+e}var n,c;0===r.indexOf(creative.cachedApiUrl)?(n=r.slice(creative.cachedApiUrl.length),c=!0):0===r.indexOf(creative.insecureCachedApiUrl)&&(n=r.slice(creative.insecureCachedApiUrl.length),c=!1),n?n in this._cache?defer(function(){a(t._cache[n])},0,\"Batcher.getDataUri in cache\",useAsap()):(this._downloadQueue[n]||(this._downloadQueue[n]={requested:!1,secure:!1,callbacks:[]}),this._downloadQueue[n].callbacks.push(a),c&&(this._downloadQueue[n].secure=!0),defer(function(){var e=[],a=!1;for(var r in t._downloadQueue){var n=8192,c=200,o=t._generateBatchUrl(!0,e.concat(r)).length>n-c;if(!o){var i=t._downloadQueue[r];i.requested||(i.requested=!0,e.push(r),i.secure&&(a=!0))}}e.length&&(Logger(\"batcher\").log(e.length+\" new batchable URLs requested during last runloop iteration (\"+(a?\"at least one secure\":\"none secure\")+\"):\\n - \"+e.join(\"\\n - \")),t._loadBatch(a,e,function(e){for(var a in e){var r=e[a];r===!1&&(r=(t._downloadQueue[a].secure?creative.cachedApiUrl:creative.insecureCachedApiUrl)+a),t._cache[a]=r,t._downloadQueue[a].callbacks.forEach(function(e){e(r)}),delete t._downloadQueue[a]}}))},0,\"Batcher.getDataUri downloadQueue\",useAsap())):defer(function(){a(e)},0,\"Batcher.getDataUri url not batchable\",useAsap())},Batcher.prototype._generateBatchUrl=function(e,a){var t=(e?creative.cachedApiUrl:creative.insecureCachedApiUrl)+\"batch?urls=\"+a.sort().map(encodeURIComponent).join(\",\");return t},Batcher.prototype._loadBatch=function(e,a,t){function r(e){var a,t=5381;for(a=0;a<e.length;a++)char=e.charCodeAt(a),t=(t<<5)+t+char;return t}var n=this,c=n._generateBatchUrl(e,a);if(isFetchSupported()&&this._protoLoading.blobURIsSupported)fetch(c+\"&binary=1\").then(function(e){return e.arrayBuffer()}).then(function(e){for(var a={},r=new DataView(e),n=0;n<e.byteLength;){var o=r.getUint32(n);n+=4;var i=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(e.slice(n,n+o))));n+=o;var h=e.slice(n,n+i.bodyLength);n+=i.bodyLength,200===i.code?a[i.path]=URL.createObjectURL(new Blob([h],{type:i.contentType})):(Logger(\"batcher\").warn(\"Batcher: Could not retrieve URL '\"+i.path+\"' using batcher, returning it directly.\"),creative.track({name:\"batcherError\",url:c,path:i.path,binary:!0}),a[i.path]=!1)}t(a)});else if(this._protoLoading.dataURIsSupported)loadJSONP(c,{cbName:\"__batcher_jsonp_\"+Math.abs(r(c))},function(e){var a={};for(var r in e){var n=e[r];200===n.code?a[r]=n.data:(Logger(\"batcher\").warn(\"Batcher: Could not retrieve URL '\"+r+\"' using batcher, returning it directly.\"),creative.track({name:\"batcherError\",url:c,path:r,binary:!1}),a[r]=!1)}t(a)});else{var o=a.reduce(function(e,a){return e[a]=!1,e},{});defer(function(){t(o)},0,\"Batcher._loadBatch defer callback, no data: and no blob: support, returning urls directly.\")}};;\nfunction EngagementTracker(e,t){function n(e){if(!I){I=!0;var t=randInt(),n=u(e.target),a=v.getBoundingClientRect(),l=n.node.getBoundingClientRect(),d=v.parentNode.getBoundingClientRect();C=Math.round(a.left-d.left),D=Math.round(a.top-d.top),h.setUniversalInteractionId(t),\"touchstart\"===e.type?(L=!0,y=e.targetTouches[0].pageX,U=e.targetTouches[0].pageY,v.addEventListener(\"touchmove\",o,p),v.addEventListener(\"touchend\",i,p)):\"mousedown\"===e.type&&(L=!1,y=e.clientX,U=e.clientY,v.addEventListener(\"mousemove\",o,p),v.addEventListener(\"mouseup\",i,p)),celtra.desktop()&&v.addEventListener(\"mouseout\",r,p),T=E=Date.now(),M=0,j={name:\"universalInteraction\",universalInteractionId:t,unitSize:{w:v.offsetWidth,h:v.offsetHeight},objectSize:n?{t:Math.round(l.top-a.top),l:Math.round(l.left-a.left),w:Math.round(l.width),h:Math.round(l.height)}:null,path:[],addPoint:function(e,t,n,a){this.path.push({x:Math.round(e-C),y:Math.round(t-D),clientTimestamp:n,objectLocalId:a?a.localId:null})}},j=c(j,n),j.addPoint(y,U,T/1e3,n)}}function a(e,t){return Math.sqrt(e*e+t*t)}function o(e){if(I){b&&(S.clearTimeout(b),b=null);var t,n;\"touchmove\"===e.type?(t=e.targetTouches[0].pageX,n=e.targetTouches[0].pageY):\"mousemove\"===e.type&&(t=e.clientX,n=e.clientY),M+=a(t-y,n-U),y=t,U=n;var o=Date.now(),r=o-T,i=Math.pow(j.path.length/(.5*m),6),c=Math.pow((o-E)/s,6);j.path.length<f&&(M>l+i*l||r>d+c*d)&&(j.addPoint(t,n,o/1e3,u(document.elementFromPoint(t,n))),T=o,M=0)}}function r(e){var t=Date.now();b=S.setTimeout(function(){i(e,t)},200)}function i(e,t){I&&(I=!1,t||(t=Date.now()),j.addPoint(y,U,t/1e3,u(document.elementFromPoint(y,U))),g.track(j),L?(v.removeEventListener(\"touchmove\",o,p),v.removeEventListener(\"touchend\",i,p)):(v.removeEventListener(\"mousemove\",o,p),v.removeEventListener(\"mouseup\",i,p)),v.removeEventListener(\"mouseout\",r,p))}function c(e,t){var n=null,a=null,o=null,r=!1;return t instanceof Screen?(n=t,a=null,o=n.parentUnitVariant,r=!0):\"undefined\"!=typeof ScreenObject&&t instanceof ScreenObject?(n=t.parentScreen,a=t,o=n.parentUnitVariant,r=!0):\"undefined\"!=typeof CreativeUnitVariant&&t instanceof CreativeUnitVariant&&(n=null,a=null,o=t,r=!0),r?extend({unitName:o?o.parentUnit.name:n.parentUnit.name,unitVariantLocalId:o?o.localId:null,screenLocalId:n?n.localId:null,screenTitle:n?n.title:null,screenIsMaster:n?n.isMasterScreen():null,objectLocalId:a?a.localId:null,objectName:a?a.name:null,objectClazz:a?a.constructor.name:null,initiationTimestamp:new Date/1e3},e):e}function u(e){function t(e){for(var o in e)if(e.hasOwnProperty(o)){if(e[o].name&&e[o].name==a)return e[o];if(e[o].localId&&e[o].localId==n)return e[o];var r;if(e[o].variants?r=t(e[o].variants):e[o].screens?r=t(e[o].screens):e[o].objects?r=t(e[o].objects):e[o].content&&e[o].content.objects?r=t(e[o].content.objects):e[o].component&&(r=e[o].component),r)return r}}if(!e)return null;for(var n,a,o=e;;){if(o.id&&0==o.id.indexOf(\"celtra-\")){a=o.id.replace(\"celtra-\",\"\"),0==o.id.indexOf(\"celtra-object-\")&&(n=o.id.replace(\"celtra-object-\",\"\"));var r=t(w);if(r)return\"undefined\"!=typeof CreativeUnit&&r instanceof CreativeUnit?r.currentScreen:r}if(!o.parentNode)break;o=o.parentNode}return null}var l=15,d=150,s=1e3,m=15,f=m+5,p={capture:!0,passive:!0},v=e,h=t,g=t.adapter.trackingCenter,w=t.units,I=!1,b=null,L=!0,j={},M=0,E=null,T=Date.now(),y=0,C=0,U=0,D=0,S=e.ownerDocument.defaultView||e.ownerDocument.parentWindow;attach(v,\"touchstart\",n,p),attach(v,\"mousedown\",n,p)};\nfunction Tapper(t,e){function a(t){for(var e=t,a=null;1!=e.nodeType;)e=e.parentNode;for(;e&&1==e.nodeType&&e.tagName;){var n=e.tagName.toLowerCase();if(hasClass(e,\"touchable\")||\"a\"===n&&e.href||\"button\"===n||\"img\"===n||\"input\"===n&&e.type&&\"button\"===e.type.toLowerCase()){a=e;break}e=e.parentNode}return a}function n(t,e){var a=t.ownerDocument.createEvent(\"MouseEvents\");a.initEvent(\"tap\",!0,!0),e.dispatchEvent(a)}var c=\"undefined\"!=typeof creative&&creative.adapter||adapter;e=e||c.useNativeClickForTapDetection,e&&(attach(t,\"click\",function(e){var c=a(e.target);c&&n(t,c)},!c.nativeClickEmittedOnSwipe),c.useNativeClickForTapDetection)||attach(t,\"touchstart\",function(o){var r=a(o.target);if(r){var i=!1;if(celtra.iframe()){var u=function(){var t=c.getTopWindow();return[t.scrollX,t.scrollY,t.innerWidth,t.innerHeight]},h=u();i=!0}var s=10,d=o.targetTouches[0].clientX-s,v=o.targetTouches[0].clientX+s,l=o.targetTouches[0].clientY-s,f=o.targetTouches[0].clientY+s;addClass(r,\"touched\");var p=!1,g=!1,m=!1,T=!1,C=new Date,w=function(t){if(!p&&!g){var e=t.targetTouches[0].clientX,a=t.targetTouches[0].clientY;p=i&&h.toString()!=u().toString(),g=!(e>=d&&v>=e&&a>=l&&f>=a),g||p?removeClass(r,\"touched\"):addClass(r,\"touched\")}},k=function(){if(!T&&(T=!0,detach(t,\"touchmove\",w,!1),detach(t,\"touchend\",arguments.callee,!1),hasClass(r,\"touched\"))){var a=200,c=new Date-C>a&&!deviceInfo.deviceType.desktop();if(removeClass(r,\"touched\"),g||p||m||c)return;e||n(t,r)}},y=function(){detach(t,\"touchend\",y,!0),nextFrame(function(){m=!0,k()})};attach(t,\"touchcancel\",function(t){removeClass(r,\"touched\"),k(t)},!1),attach(t,\"touchmove\",w,!1),attach(t,\"touchend\",k,!1),attach(t,\"touchend\",y,!0)}},!0)};\nfunction TouchEventSimulator(t){this.el=t,this.doc=t.ownerDocument?t.ownerDocument:t,this.win=this.doc.defaultView,this.touch=null,this._initialised=!1,this._firstEventFired=!1,this.handleFirstEvent=this.handleFirstEvent.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.handlePointerDown=this.handlePointerDown.bind(this),this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handlePointerCancel=this.handlePointerCancel.bind(this),this.captureBubbleEvents=this.captureBubbleEvents.bind(this)}TouchEventSimulator.mode=null,TouchEventSimulator.prototype.start=function(){return this._initialised?void(\"function\"==typeof Logger&&Logger(\"TouchEventSimulator\").warn(\"Touch event simulator already initialised!\")):(\"function\"==typeof Logger&&Logger(\"TouchEventSimulator\").log(\"Enabling touch event simulation\"),this.doc.defaultView.msPointerEnabled?this.startPointers():this.startMouse(),this.el.addEventListener(\"touchstart\",this.captureBubbleEvents,!1),this.el.addEventListener(\"touchmove\",this.captureBubbleEvents,!1),this.el.addEventListener(\"touchend\",this.captureBubbleEvents,!1),this.el.addEventListener(\"touchcancel\",this.captureBubbleEvents,!1),void this.el.addEventListener(\"tap\",this.captureBubbleEvents,!1))},TouchEventSimulator.prototype.stop=function(){return this._initialised?(\"function\"==typeof Logger&&Logger(\"TouchEventSimulator\").log(\"Disabling touch event simulation\"),this.win&&this.win.msPointerEnabled?this.stopPointers():this.stopMouse(),this.el.removeEventListener(\"touchstart\",this.captureBubbleEvents,!1),this.el.removeEventListener(\"touchmove\",this.captureBubbleEvents,!1),this.el.removeEventListener(\"touchend\",this.captureBubbleEvents,!1),this.el.removeEventListener(\"touchcancel\",this.captureBubbleEvents,!1),void this.el.removeEventListener(\"tap\",this.captureBubbleEvents,!1)):void(\"function\"==typeof Logger&&Logger(\"TouchEventSimulator\").warn(\"Touch event simulator not running!\"))},TouchEventSimulator.prototype.captureBubbleEvents=function(t){t.stopPropagation(),t.preventDefault()},TouchEventSimulator.prototype.startMouse=function(){this.el.addEventListener(\"mousedown\",this.handleMouseDown,!0),this.el.addEventListener(\"mousemove\",this.handleMouseMove,!0),this.el.addEventListener(\"mouseup\",this.handleMouseUp,!0),this.el.addEventListener(\"mouseout\",this.handleMouseOut,!0),this.el.addEventListener(\"dragstart\",this.handleDragStart,!0),this._initialised=!0},TouchEventSimulator.prototype.stopMouse=function(){this.el.removeEventListener(\"mousedown\",this.handleMouseDown,!0),this.el.removeEventListener(\"mousemove\",this.handleMouseMove,!0),this.el.removeEventListener(\"mouseup\",this.handleMouseUp,!0),this.el.removeEventListener(\"mouseout\",this.handleMouseOut,!0),this.el.removeEventListener(\"dragstart\",this.handleDragStart,!0),this._initialised=!1},TouchEventSimulator.prototype.startPointers=function(){this.el.addEventListener(\"MSPointerDown\",this.handlePointerDown,!0),this.el.addEventListener(\"MSPointerMove\",this.handlePointerMove,!0),this.el.addEventListener(\"MSPointerUp\",this.handlePointerUp,!0),this.el.addEventListener(\"MSPointerCancel\",this.handlePointerCancel,!0),this._initialised=!0},TouchEventSimulator.prototype.stopPointers=function(){this.el.removeEventListener(\"MSPointerDown\",this.handlePointerDown,!0),this.el.removeEventListener(\"MSPointerMove\",this.handlePointerMove,!0),this.el.removeEventListener(\"MSPointerUp\",this.handlePointerUp,!0),this.el.removeEventListener(\"MSPointerCancel\",this.handlePointerCancel,!0),this._initialised=!1},TouchEventSimulator.prototype.init=function(){this.doc.defaultView.navigator.msPointerEnabled?this.start():(this.el.addEventListener(\"touchstart\",this.handleFirstEvent,!0),this.el.addEventListener(\"mousedown\",this.handleFirstEvent,!0))},TouchEventSimulator.prototype.updateTouchCoordinates=function(t){this.touch.screenX=t.screenX,this.touch.screenY=t.screenY,this.touch.pageX=t.pageX,this.touch.pageY=t.pageY,this.touch.clientX=t.clientX,this.touch.clientY=t.clientY},TouchEventSimulator.prototype.ignorables=[\"select\",\"input\",\"textarea\"],TouchEventSimulator.prototype.isFormElement=function(t){return this.ignorables.indexOf(t.nodeName.toLowerCase())>-1},TouchEventSimulator.prototype.isIgnorable=function(t){for(var e=t;e&&e instanceof HTMLElement;e=e.parentNode)if(hasClass(e,\"ignore-toucheventsimulator\"))return!0;return!1},TouchEventSimulator.prototype.handleFirstEvent=function(t){this._firstEventFired||(this._firstEventFired=!0,this.el.removeEventListener(\"touchstart\",this.handleFirstEvent,!0),this.el.removeEventListener(\"mousedown\",this.handleFirstEvent,!0),\"touch\"!=TouchEventSimulator.mode&&\"mousedown\"==t.type?(TouchEventSimulator.mode=\"mouse\",this.start(),this.handleMouseDown(t)):TouchEventSimulator.mode=\"touch\")},TouchEventSimulator.prototype.handleMouseDown=function(t){0!=t.button||this.isIgnorable(t.target)||(this.touch={identifier:0,target:t.target},this.updateTouchCoordinates(t),t.stopPropagation(),this.isFormElement(t.target)||t.preventDefault(),this.fireTouchEvent(\"touchstart\",t))},TouchEventSimulator.prototype.handleMouseMove=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),t.stopPropagation(),t.preventDefault(),this.fireTouchEvent(\"touchmove\",t))},TouchEventSimulator.prototype.handleMouseUp=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),t.stopPropagation(),t.preventDefault(),this.fireTouchEvent(\"touchend\",t),this.touch=null)},TouchEventSimulator.prototype.handleMouseOut=function(t){this.touch&&0==t.button&&(t.clientX<=0||t.clientX>=this.win.innerWidth||t.clientY<=0||t.clientY>=this.win.innerHeight)&&this.cancelInteraction()},TouchEventSimulator.prototype.handleDragStart=function(t){return t.preventDefault(),!1},TouchEventSimulator.prototype.handlePointerDown=function(t){0==t.button&&(this.touch={identifier:0,target:t.target},this.updateTouchCoordinates(t),this.fireTouchEvent(\"touchstart\",t))},TouchEventSimulator.prototype.handlePointerMove=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),this.fireTouchEvent(\"touchmove\",t))},TouchEventSimulator.prototype.handlePointerUp=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),this.fireTouchEvent(\"touchend\",t))},TouchEventSimulator.prototype.handlePointerCancel=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),this.fireTouchEvent(\"touchcancel\",t),this.touch=null)},TouchEventSimulator.prototype.fireTouchEvent=function(t,e){var n=this.doc.createEvent(\"HTMLEvents\");n.initEvent(t,!0,!0),\"touchend\"==t||\"touchcancel\"==t?(n.touches=n.targetTouches=[],n.changedTouches=[this.touch]):n.touches=n.targetTouches=n.changedTouches=[this.touch],e.target.dispatchEvent(n)},TouchEventSimulator.prototype.cancelInteraction=function(){this.touch&&(this.fireTouchEvent(\"touchcancel\",this.touch),this.touch=null)};;\nfunction SwipeListener(t){function e(t,e){return Math.abs(t)>Math.abs(e)?t>0?\"east\":\"west\":e>0?\"south\":\"north\"}function a(){detach(l(),\"touchmove\",n,!1),detach(l(),\"touchend\",c,!1)}function n(t){if(t.touches.length>1)a();else{var n=t.changedTouches[0].pageX-o,c=t.changedTouches[0].pageY-i;if(r=Math.max(Math.abs(n),Math.abs(c)),r>Math.min(50,g))if(null===u)u=e(n,c);else{var h=e(n,c);u!=h&&a()}}}function c(){a(),r>=g&&(d(u,r),v.attachClickPreventionHandler())}function h(t){creative.adapter.useNativeClickForTapDetection||t.preventDefault(),1==t.touches.length&&(o=t.changedTouches[0].pageX,i=t.changedTouches[0].pageY,r=0,u=null,attach(l(),\"touchmove\",n,!1),attach(l(),\"touchend\",c,!1),v.detachClickPreventionHandler())}var o,i,u,r,s=t.target,l=t.swipeNodeGetter,d=t.swipe,g=t.minLength||50,v=Object.create(ClickPreventer).initClickPrevention(function(){return s});attach(window,\"touchstart\",noop,!1),attach(s,\"touchstart\",h,!1)};\nvar ClickPreventer={initClickPrevention:function(e){return this._getDefaultClickPreventionNode=e||function(){},this._clickPreventionNode=null,this._clickPreventionHandler=this._clickPreventionHandler.bind(this),this},attachClickPreventionHandler:function(e){creative.adapter.nativeClickEmittedOnSwipe&&!this._clickPreventionNode&&(this._clickPreventionNode=e||this._getDefaultClickPreventionNode(),attach(this._clickPreventionNode,\"click\",this._clickPreventionHandler,!0))},detachClickPreventionHandler:function(){creative.adapter.nativeClickEmittedOnSwipe&&this._clickPreventionNode&&(detach(this._clickPreventionNode,\"click\",this._clickPreventionHandler,!0),this._clickPreventionNode=null)},_clickPreventionHandler:function(e){e.stopPropagation(),this.detachClickPreventionHandler()}};;\nfunction PlaceboBar(e,t,a,i){var n=!1,r=document.createElement(\"div\");r.className=\"celtra-placebobar\",r.style.cssText=\"position: absolute; bottom: 60px; left: 0; right: 0; margin: auto; z-index: 20; width: 215px; height: 8px;\";var l=document.createElement(\"img\");l.src=creative.resourceUrl+\"runner/clazzes/CreativeUnit/loading-back.png\",l.style.position=\"absolute\",l.style.width=\"100%\",l.style.height=\"100%\",r.appendChild(l);var o=document.createElement(\"div\");o.style.position=\"absolute\",o.style.top=\"2px\",o.style.bottom=\"2px\",o.style.left=\"3px\",o.style.right=\"3px\",r.appendChild(o);var s=document.createElement(\"div\");return s.style.background=\"url(\"+creative.resourceUrl+\"runner/clazzes/CreativeUnit/loading-over.png) \"+i+\" repeat-x\",s.style.position=\"absolute\",s.style.width=\"0\",s.style.height=\"100%\",o.appendChild(s),r.start=function(){function i(){if(r.parentNode){var n=Math.min((new Date-l)/e,t);s.style.width=100*n+\"%\",t>n&&setTimeout(i,2*a*Math.random())}}if(!n){n=!0;var l=new Date;setTimeout(i,0)}},r};\nvar EventEmitter={emit:function(t){var e=this._listeners;if(e&&e[t]){var n=[].slice.call(arguments,1);e[t].forEach(function(t){t.apply(window,n)})}},emits:function(){var t=arguments;return function(){this.emit.apply(this,t)}.bind(this)},addListener:function(t,e){var n=this._listeners;n||(n=this._listeners={}),n[t]||(n[t]=[]),n[t].push(e)},removeListener:function(t,e){var n=this._listeners;n&&n[t]&&(n[t]=n[t].filter(function(t){return t!==e}))},once:function(t,e){var n=this;n.on(t,function i(){n.off(t,i),e.apply(this,arguments)})},onAll:function(t,e){t.split(\" \").waitForEach(function(t,e){this.once(t,e)},e,this)}};EventEmitter.on=EventEmitter.addListener,EventEmitter.off=EventEmitter.removeListener,EventEmitter.addEventListener=EventEmitter.addListener,EventEmitter.removeEventListener=EventEmitter.removeListener;;\nfunction InViewObject(t,e){this.view=t,this.inViewParent=e,this._init()}extend(InViewObject.prototype,EventEmitter),InViewObject.prototype._init=function(){this.rectInView=CRect.ZERO,this.areaInViewRatio=0,this.active=!1,this._maxPossibleDimensions={width:0,height:0,area:0},this.computeRectInView=this.computeRectInView.bind(this),this.start=this.start.bind(this),this.stop=this.stop.bind(this)},InViewObject.prototype.getNode=function(){return this.view.getNode()},InViewObject.prototype.getParentMaxPossDims=function(){return this.inViewParent?this.inViewParent.getMaxPossibleDimensions():this.adapter.getViewportRect()},InViewObject.prototype.computeRectInView=function(){var t=this.inViewParent.getRectInView(),e=this.getBoundingClientRect(),i=t.intersect(e),n=!1;this.rectInView.equals(i)||(this.rectInView=i,n=!0),this._computeMaxPossibleDimensions(e,this.getParentMaxPossDims());var s=this._maxPossibleDimensions.area>0?i.area/this._maxPossibleDimensions.area:0,o=!1;s!==this.areaInViewRatio&&(this.areaInViewRatio=s,o=!0),n&&(this.emit(\"rectInViewChanged\",i),Logger(\"InViewObject\").debug(this.view.toString()+\", rectInViewChanged: \"+this.rectInView.toString())),o&&(this.emit(\"areaInViewRatioChanged\",s),Logger(\"InViewObject\").debug(this.view.toString()+\", areaInViewRatioChanged: \"+s))},InViewObject.prototype.getBoundingClientRect=function(){var t=this.getNode();return t?CRect.adopt(t.getBoundingClientRect()):CRect.ZERO},InViewObject.prototype.getMaxPossibleDimensions=function(){return this._maxPossibleDimensions},InViewObject.prototype._computeMaxPossibleDimensions=function(t,e){this._maxPossibleDimensions.width=Math.min(e.width,t.width),this._maxPossibleDimensions.height=Math.min(e.height,t.height),this._maxPossibleDimensions.area=this._maxPossibleDimensions.width*this._maxPossibleDimensions.height},InViewObject.prototype.getRectInView=function(){return this.rectInView},InViewObject.prototype.getAreaInViewRatio=function(){return this.areaInViewRatio},InViewObject.prototype.start=function(){this.active||(this._start(),this.active=!0,this.computeRectInView())},InViewObject.prototype._start=function(){this.inViewParent.on(\"rectInViewChanged\",this.computeRectInView),this.inViewParent.on(\"areaInViewRatioChanged\",this.computeRectInView)},InViewObject.prototype.stop=function(){this.active&&(this.computeRectInView(),this._stop(),this.active=!1)},InViewObject.prototype._stop=function(){this.inViewParent.off(\"rectInViewChanged\",this.computeRectInView),this.inViewParent.off(\"areaInViewRatioChanged\",this.computeRectInView)};;\nfunction TaskScheduler(){this.hub=extend({},EventEmitter)}TaskScheduler.prototype.when=function(){var t,e=this;return t=Array.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments),{run:function(n){t.waitForEach(function(t,n){e.hub.once(t,n)},n)}}},TaskScheduler.prototype.notify=function(t){this.paused||this.hub.emit(t)},TaskScheduler.prototype.notifies=function(t){return function(){this.notify(t)}.bind(this)},TaskScheduler.prototype.pause=function(){this._paused=!0};;\nfunction DryRunResultSet(t){this._actions=t}DryRunResultSet.prototype.contains=function(t,n){return this._actions.some(function(e){var o=t==e.method,u=!n||n==e.instance;return o&&u})},DryRunResultSet.prototype.getAll=function(){return this._actions},DryRunResultSet.prototype.concat=function(t){return new DryRunResultSet(this._actions.concat(t.getAll()))};;\nvar ActionInvocationSimulator={_dryRun:!1,_dryRunActions:[],_dryRunExecutedActionsLocalIds:[],beginDryRun:function(){this._dryRun=!0,this._dryRunActions=[],this._dryRunExecutedActionsLocalIds=[]},endDryRun:function(){var n=this._dryRunActions;return this._dryRun=!1,this._dryRunActions=[],this._dryRunExecutedActionsLocalIds=[],new DryRunResultSet(n)},isDryRun:function(){return this._dryRun},needsDryRun:function(n){return!this._dryRunExecutedActionsLocalIds[n]},logActionDryRun:function(n,t,u){this._dryRunExecutedActionsLocalIds[n]=!0,this._dryRunActions.push({method:t,instance:u})}};;\nvar TriggerHost={_getTriggers:function(r,i){return i||(i=retTrue),this.triggers.filter(function(t){return t.type==r&&i(t.parameters,t)})},_fireArrayOfTriggers:function(r,i,t){var e=this;i||(i=noop),t||(t=new ActionContext(e)),r.waitForEach(function(r,i){r.onFire?r.onFire(t,i):i()},i)},hasTriggers:function(r,i){return this._getTriggers(r,i).length>0},fireTriggersDryRun:function(r,i,t,e){var n;try{ActionInvocationSimulator.beginDryRun(),this.fireTriggers(r,i,t,e)}finally{n=ActionInvocationSimulator.endDryRun()}return n},fireTriggers:function(r,i,t,e){var n=this._getTriggers(r,i);this._fireArrayOfTriggers(n,t,e)},fireSortedTriggers:function(r,i,t,e,n){var g=this._getTriggers(r,i),n=n||null;this._fireArrayOfTriggers(g.sort(n),t,e)},triggerAction:function(r,i,t){this.fireTriggers(i.eventName,null,t,r)},triggerByLocalIdAction:function(r,i,t){var e=i.event?[i.event]:[];this._fireArrayOfTriggers(e,t,r)},triggerByLocalIdActionDryRun:function(r,i,t){this.triggerByLocalIdAction(r,i,t)}};;\nvar SceneHost={_initImmediatelyPlayedScenes:function(){if(this.immediatelyPlayedScenes){var e=[];if(this instanceof Screen){e=this.immediatelyPlayedScenes.appear.scenes;var i=!this.appearedAtLeastOnce;i&&(e=e.concat(this.immediatelyPlayedScenes.firstAppear.scenes))}else e=this.immediatelyPlayedScenes.conditionMet.scenes;e.forEach(function(e){e.renderFirstFrame()})}}};;\nfunction ActionContext(e,t){if(this._id=randInt(),this.initiator=e,this.initiationTimestamp=new Date/1e3,\"object\"==typeof t?(this.consideredUserInitiatedByBrowser=!!t.consideredUserInitiatedByBrowser,this.certainlyNotCausedByUserBehavior=!!t.certainlyNotCausedByUserBehavior):(this.consideredUserInitiatedByBrowser=!!t,this.certainlyNotCausedByUserBehavior=!1),this.inUserInitiatedIteration=this.consideredUserInitiatedByBrowser,this.consideredUserInitiatedByBrowser&&this.certainlyNotCausedByUserBehavior)throw new Error(\"Unable to create an ActionContext where both consideredUserInitiatedByBrowser and certainlyNotCausedByUserBehavior are true!\");if(e instanceof Screen)this.screen=e,this.screenObject=null,this.unitVariant=this.screen.parentUnitVariant;else if(e instanceof ScreenObject)this.screen=e.parentScreen,this.screenObject=e,this.unitVariant=this.screen.parentUnitVariant;else{if(!(\"undefined\"!=typeof CreativeUnitVariant&&e instanceof CreativeUnitVariant))throw new Error(\"Initiator (\"+e+\") is not a Screen or a ScreenObject. Analytics would be confused.\");this.screen=null,this.screenObject=null,this.unitVariant=e}if(this.inUserInitiatedIteration){var i=function(){this.inUserInitiatedIteration=!1}.bind(this);defer(i),nextFrame(i)}if(this.trackUserInteraction=this.trackUserInteraction.bind(this),this._isAttributable=!!this.screen&&this._isScreenReadyForEventAttribution(),this.screen&&!this.screen.parentUnit.name)throw new Error(\"Parent unit missing name.\")}ActionContext.prototype._isScreenReadyForEventAttribution=function(){return this.screen.isMasterScreen()?this.screen.parentContainer.screens.some(function(e){return e.appearedAtLeastOnce&&e.isNormalScreen()}):this.screen.appearedAtLeastOnce},ActionContext.prototype.extendEvent=function(e){return extend({unitName:this.unitVariant?this.unitVariant.parentUnit.name:this.screen.parentUnit.name,unitVariantLocalId:this.unitVariant?this.unitVariant.localId:null,screenLocalId:this.screen?this.screen.localId:null,screenTitle:this.screen?this.screen.title:null,screenIsMaster:this.screen?this.screen.isMasterScreen():null,objectLocalId:this.screenObject?this.screenObject.localId:null,objectName:this.screenObject?this.screenObject.name:null,objectClazz:this.screenObject?this.screenObject.constructor.name:null,initiationTimestamp:this.initiationTimestamp},e)},ActionContext.prototype.track=function(e,t){this.screen&&!this._isAttributable&&console.warn('Event \"'+e.name+'\" appears to be initiated before a screen was ever shown and will be ignored.'),creative.track(this.extendEvent(e),t)},ActionContext.prototype.trackUserInteraction=function(){if(creative.getUserInteracted())creative.interactionTrackingTimeout||(this.track({name:\"interaction\"}),creative.interactionTrackingTimeout=setTimeout(function(){creative.interactionTrackingTimeout=null},1e3));else{if(creative.runtimeParams.userInteracted=1,creative.experiments.get(\"TrackViewableAreaChange\")){var e=creative.adapter;e.canMeasureViewportPlacementGeometry&&\"function\"==typeof e.trackViewableAreaRatio&&e.trackViewableAreaRatio()}this.track({name:\"firstInteraction\"})}defer(creative.trackingCenter.batchFlush),creative.userInteracted(this)},ActionContext.prototype.trackClickThrough=function(e){e||(e=noop),creative.runtimeParams.clickedThrough?this.track({name:\"clickThrough\"},e):(creative.runtimeParams.clickedThrough=1,this.track({name:\"firstClickThrough\"},e)),defer(creative.trackingCenter.batchFlush),creative.clickedThrough(this)};;\nfunction VideoContext(t,e,i){VideoContext.uberConstructor.call(this,t instanceof ActionContext?t.initiator:t,t&&t.userInitiated),this.file=e,this.url=e.getUrl(),this.label=i,this.source=null}inherit(VideoContext,ActionContext),VideoContext._eventNames=[\"videoDurationUpdate\",\"videoPlayAttempted\",\"videoPlayedSegment\",\"videoStart\",\"videoFirstQuartile\",\"videoMidpoint\",\"videoThirdQuartile\",\"videoComplete\"],VideoContext.prototype.registerSource=function(t){if(!t)throw\"Not a valid source of video events.\";this.source=t,VideoContext._eventNames.forEach(function(t){this.source.on(t,function(e){this.handleEvent(t,e)}.bind(this))}.bind(this))},VideoContext.prototype.handleEvent=function(t,e){this.track(extend(JSON.parse(JSON.stringify(e||{})),{name:t}))},VideoContext.prototype.track=function(t){if(\"videoPlayAttempted\"==t.name){var e=this.file.url?\"URL\":\"File\";extend(t,{sourceType:e,source:\"URL\"==e?this.file.url:this.file.blobHash,label:this.label})}VideoContext.uber.track.call(this,t)};;\nfunction ShakeListener(){this.shakeThreshold=1.5,this.canListen=!0,this.slidingWindow=5,this.signals=[],this.handleMotion=this.handleMotion.bind(this),this.topWindow=creative.adapter.getTopWindow()}extend(ShakeListener.prototype,EventEmitter),ShakeListener.prototype.start=function(){this.canListen=!0,creative.deviceMotionListenerAdded||(creative.deviceMotionListenerAdded=!0,this.topWindow.addEventListener(\"devicemotion\",this.handleMotion))},ShakeListener.prototype.stop=function(){this.canListen=!1,creative.deviceMotionListenerAdded&&(creative.deviceMotionListenerAdded=!1,this.topWindow.removeEventListener(\"devicemotion\",this.handleMotion))},ShakeListener.prototype.handleMotion=function(i){if(this.canListen){this.signals.push(i.accelerationIncludingGravity),this.signals.length>this.slidingWindow&&this.signals.shift();var e=this.signals.reduce(function(i,e){return{x:i.x+e.x,y:i.y+e.y,z:i.z+e.z}}),t={x:e.x/this.signals.length,y:e.y/this.signals.length,z:e.z/this.signals.length};if(this.prevSignal){var s=null,n=Math.abs(t.x-this.prevSignal.x),h=Math.abs(t.y-this.prevSignal.y),a=Math.abs(t.z-this.prevSignal.z);if(90===Math.abs(creative.adapter.orientation)){var o=h;h=n,n=o}n>h&&n>a&&n>this.shakeThreshold?s=\"x\":h>n&&h>a&&h>this.shakeThreshold?s=\"y\":a>n&&a>h&&a>this.shakeThreshold&&(s=\"z\"),(n>this.shakeThreshold||h>this.shakeThreshold||a>this.shakeThreshold)&&this.emit(\"shake\",s)}this.prevSignal=t}};;\n!function(){\"use strict\";function t(t){for(var e in t)this[e]=t[e]}var e=function(t){var e=\"undefined\"!=typeof FontFace,i=/iP(?:ad|hone|od).*OS ([0-9_]+)/.exec(t),n=!!i&&parseInt(i[1],10)>=10,o=/^(?!.*(?:Android|Chrome)).*Version\\/(\\d+(?:\\.\\d+)*).*?Safari/.exec(t);if(o||n)return!1;var r=/Gecko.*Firefox\\/(\\d+)/.exec(t);return r?e&&parseInt(r[1],10)>46:e}(window.navigator.userAgent);t.prototype.getId=function(){return this.typefaceId||this.id},t.prototype.getSubsetString=function(){return this.subset},t.prototype.getTrackingUrl=function(){return this.trackingUrl},t.prototype.getUnicodeRange=function(){return this.unicodes},t.prototype.getBrowserCompatibleFontFamily=function(){var t=this.supportsStretch()&&this.stretch?this.family+\" \"+this.stretch:this.family;if(t.length>25){for(var e,i=5381,n=0,o=t.length;o>n;n++)e=t.charCodeAt(n),i=(i<<5)+i+e;return i.toString()}return t},t.prototype.setBaseUrl=function(t){this.baseUrl=t},t.prototype.isCustom=function(){return\"custom\"===this.provider},t.prototype.isGoogle=function(){return\"google\"===this.provider},t.prototype.isMonotype=function(){return\"monotype\"===this.provider},t.prototype.isSystem=function(){return\"system\"===this.provider},t.prototype.hasSubsetStringDefined=function(){var t=this.getSubsetString();return\"string\"==typeof t&&t.length>0},t.prototype.hasTrackingUrlDefined=function(){var t=this.getTrackingUrl();return\"string\"==typeof t&&t.length>0},t.prototype.hasUnicodeRangeDefined=function(){var t=this.getUnicodeRange();return\"string\"==typeof t&&t.length>0},t.prototype.needsLoading=function(){return this.isMonotype()||this.isGoogle()||this.isCustom()},t.prototype.supportsStretch=function(){return this.isMonotype()||this.isCustom()},t.prototype.getCssProperties=function(){return{\"font-family\":this.needsLoading()?'\"'+this.getBrowserCompatibleFontFamily()+'\", Helvetica, sans-serif':this.getBrowserCompatibleFontFamily(),\"font-style\":this.style,\"font-weight\":this.weight}},t.prototype.getFileUrl=function(t){if(\"undefined\"!=typeof this.files&&\"undefined\"!=typeof this.files[t]){var e=this.getId();if(\"string\"!=typeof e)return this.baseUrl+this.files[t]+\".\"+t;var i=this.files[t]&&this.files[t].name||\"webfont\",n=this.baseUrl+e+\"/\"+this.files[t].blobHash+\"/\"+encodeURIComponent(i)+\".\"+t;return this.hasSubsetStringDefined()&&(n+=\"?subset=\"+encodeURIComponent(this.getSubsetString())),n}},t.prototype.getStyleForVariation=function(){var t=/normal|italic|oblique/i.exec(this.style);return\"undefined\"!=typeof t?t[0]:void 0},t.prototype.getWeightForVariation=function(){var t=/normal|bold|([1-9])00/i.exec(this.weight);return\"undefined\"!=typeof t?t[0]:void 0},t.prototype.generateFontFace=function(){var t=\"\",e=[],i=this.getFileUrl(\"woff2\");i&&e.push('url(\"'+i+'\") format(\"woff2\")');var n=this.getFileUrl(\"woff\");n&&e.push('url(\"'+n+'\") format(\"woff\")');var o=this.getFileUrl(\"ttf\");return o&&e.push('url(\"'+o+'\") format(\"truetype\")'),this.style&&this.weight&&e.length>0&&(t=\"@font-face {\",t+='font-family: \"'+this.getBrowserCompatibleFontFamily()+'\";',t+=\"font-style: \"+this.style+\";\",t+=\"font-weight: \"+this.weight+\";\",t+=\"src:\"+e.join(\",\")+\";\",this.hasUnicodeRangeDefined()&&(t+=\"unicode-range: \"+this.getUnicodeRange()+\";\"),t+=\"}\"),t},t.prototype.loadStyle=function(t){t=t||function(){};var i=this.getBrowserCompatibleFontFamily(),n=function(e){t(e||\"Failed to load font files.\")},o=function(){if(e){var o=\"300px\",r=this.style+\" \"+this.weight+\" \"+o+' \"'+i+'\"',s=this.hasUnicodeRangeDefined()&&this.hasSubsetStringDefined()?this.getSubsetString():\" \";document.fonts.load(r,s).then(function(e){1===e.length?t():n()},function(){n()})}else{if(\"undefined\"==typeof FontLoader)return void n(\"Font Loader is not initialized.\");FontLoader.watch(i,this.style,this.weight,t,n,this.getSubsetString())}}.bind(this);if(this.isCustom()||this.isMonotype()){var r=\"font-style-manager\",s=document.getElementById(r);s||(s=document.createElement(\"style\"),s.id=r,document.getElementsByTagName(\"head\")[0].appendChild(s));var a=this.generateFontFace();if(!a)return void n(\"Unable to define style for font without specifying files, style and weight.\");var f=[].slice.apply(s.sheet.cssRules).some(function(t){var e=t.style.getPropertyValue(\"font-family\").replace(/^['\"](.+)['\"]$/,\"$1\");return e==this.getBrowserCompatibleFontFamily()&&t.style.getPropertyValue(\"font-style\")==this.style&&t.style.getPropertyValue(\"font-weight\")==this.weight}.bind(this));f||s.sheet.insertRule(a,s.sheet.cssRules.length),o()}else if(this.isGoogle()){var h=(\"https:\"===document.location.protocol?\"https\":\"http\")+\"://fonts.googleapis.com/css\",l=i.replace(/ /g,\"+\"),u=this.variation;if(!u){var d=\"\",p=\"\",g=this.getWeightForVariation();if(\"undefined\"!=typeof g){p=g,\"normal\"==p?p=400:\"bold\"==p&&(p=700);var c=this.getStyleForVariation();\"undefined\"!=typeof c&&\"italic\"==c&&(d=c)}u=p+d}u&&(l+=\":\"+u);var y=h+\"?family=\"+l;this.hasSubsetStringDefined()&&(y+=\"&text=\"+encodeURIComponent(this.getSubsetString()));var m=[].slice.apply(document.getElementsByTagName(\"link\")).filter(function(t){return t.href===y})[0];if(m||(m=document.createElement(\"link\"),m.setAttribute(\"rel\",\"stylesheet\"),m.setAttribute(\"media\",\"all\"),m.setAttribute(\"href\",y)),e){var v=function(){m._finished=!0,o()};m._finished?o():(m.addEventListener(\"load\",v),m.addEventListener(\"error\",v))}else\"undefined\"!=typeof defer?defer(o,0,\"FontBase.loadStyle defer watchFont\"):setTimeout(o,0);m.parentNode||document.getElementsByTagName(\"head\")[0].appendChild(m)}else this.isSystem()?t():n(\"Invalid or unsupported provider.\")},Object.defineProperty(t,\"useCSSFontLoadingAPI\",{value:e}),window.FontBase=t}();;\nvar ScreenNodeTransition={replace:function(t,e,r,s,i,a){r.style.opacity=0,r.style.display=\"block\",s.style.display=\"block\",e.style.display=\"none\",nextFrame(function(){r.style.opacity=1,t.style.opacity=0,nextFrame(function(){t.style.display=\"none\",nextFrame(a||noop)})})},fade:function(t,e,r,s,i,a){function n(){celtra.styler.css(r,\"transition\",\"\"),celtra.styler.css(t,\"transition\",\"\"),t.style.display=\"none\",nextFrame(a||noop)}r.style.opacity=0,r.style.display=\"block\",s.style.display=\"block\",e.style.display=\"none\",once(t,\"transitionend\",n),nextFrame(function(){celtra.styler.css(t,\"transition\",\"opacity \"+i.duration+\"ms ease-out\"),celtra.styler.css(r,\"transition\",\"opacity \"+i.duration+\"ms ease-out\"),nextFrame(function(){r.style.opacity=1,t.style.opacity=0})})},slide:function(t,e,r,s,i,a){var n={transition:\"all \"+i.duration+\"ms ease-out\"};switch(i.direction||\"west\"){case\"north\":n.startingFrom=\"translateY(0)\",n.endingFrom=\"translateY(\"+-i.unitSize.height+\"px)\",n.startingTo=\"translateY(\"+i.unitSize.height+\"px)\",n.endingTo=\"translateY(0)\";break;case\"south\":n.startingFrom=\"translateY(0)\",n.endingFrom=\"translateY(\"+i.unitSize.height+\"px)\",n.startingTo=\"translateY(\"+-i.unitSize.height+\"px)\",n.endingTo=\"translateY(0)\";break;case\"east\":n.startingFrom=\"translateX(0)\",n.endingFrom=\"translateX(\"+i.unitSize.width+\"px)\",n.startingTo=\"translateX(\"+-i.unitSize.width+\"px)\",n.endingTo=\"translateX(0)\";break;case\"west\":n.startingFrom=\"translateX(0)\",n.endingFrom=\"translateX(\"+-i.unitSize.width+\"px)\",n.startingTo=\"translateX(\"+i.unitSize.width+\"px)\",n.endingTo=\"translateX(0)\"}n.startingFromOpacity=1,n.startingToOpacity=0,n.endingFromOpacity=0,n.endingToOpacity=1,this._runTransition(t,e,r,s,n,i.duration,a)},flip:function(t,e,r,s,i,a){var n={transition:\"all \"+i.duration+\"ms ease-out\"},o=\"perspective(\"+2*i.unitSize.width+\"px) \";switch(i.direction||\"west\"){case\"north\":n.startingFrom=o+\"rotateX(0)\",n.endingFrom=o+\"rotateX(180deg)\",n.startingTo=o+\"rotateX(-180deg)\",n.endingTo=o+\"rotateX(0)\";break;case\"south\":n.startingFrom=o+\"rotateX(0)\",n.endingFrom=o+\"rotateX(-180deg)\",n.startingTo=o+\"rotateX(180deg)\",n.endingTo=o+\"rotateX(0)\";break;case\"east\":n.startingFrom=o+\"rotateY(0)\",n.endingFrom=o+\"rotateY(180deg)\",n.startingTo=o+\"rotateY(-180deg)\",n.endingTo=o+\"rotateY(0)\";break;case\"west\":n.startingFrom=o+\"rotateY(0)\",n.endingFrom=o+\"rotateY(-180deg)\",n.startingTo=o+\"rotateY(180deg)\",n.endingTo=o+\"rotateY(0)\"}celtra.styler.css(t.parentNode,\"transformStyle\",\"preserve-3d\"),celtra.styler.css(t,\"backfaceVisibility\",\"hidden\"),celtra.styler.css(e,\"backfaceVisibility\",\"hidden\"),celtra.styler.css(r,\"backfaceVisibility\",\"hidden\"),celtra.styler.css(s,\"backfaceVisibility\",\"hidden\"),celtra.styler.css(t,\"transformOrigin\",\"50% 50% 0\"),celtra.styler.css(e,\"transformOrigin\",\"50% 50% 0\"),celtra.styler.css(r,\"transformOrigin\",\"50% 50% 0\"),celtra.styler.css(s,\"transformOrigin\",\"50% 50% 0\"),this._runTransition(t,e,r,s,n,i.duration,function(){celtra.styler.css(t.parentNode,\"transformStyle\",\"\"),celtra.styler.css(t,\"backfaceVisibility\",\"\"),celtra.styler.css(e,\"backfaceVisibility\",\"\"),celtra.styler.css(r,\"backfaceVisibility\",\"\"),celtra.styler.css(s,\"backfaceVisibility\",\"\"),celtra.styler.css(t,\"transform\",\"\"),celtra.styler.css(e,\"transform\",\"\"),celtra.styler.css(r,\"transform\",\"\"),celtra.styler.css(s,\"transform\",\"\"),celtra.styler.css(t,\"transformOrigin\",\"\"),celtra.styler.css(e,\"transformOrigin\",\"\"),celtra.styler.css(r,\"transformOrigin\",\"\"),celtra.styler.css(s,\"transformOrigin\",\"\"),nextFrame(a||noop)})},cube:function(t,e,r,s,i,a){var n={transition:\"all \"+i.duration+\"ms ease-out\"},o=\"perspective(\"+2*i.unitSize.width+\"px) \";switch(i.direction||\"west\"){case\"north\":n.startingFrom=o+\"translateZ(\"+-i.unitSize.height/2+\"px) rotateX(0)     \",n.endingFrom=o+\"translateZ(\"+-i.unitSize.height/2+\"px) rotateX(90deg) \",n.startingTo=o+\"translateZ(\"+-i.unitSize.height/2+\"px) rotateX(-90deg)\",n.endingTo=o+\"translateZ(\"+-i.unitSize.height/2+\"px) rotateX(0)     \";break;case\"south\":n.startingFrom=o+\"translateZ(\"+-i.unitSize.height/2+\"px) rotateX(0)     \",n.endingFrom=o+\"translateZ(\"+-i.unitSize.height/2+\"px) rotateX(-90deg)\",n.startingTo=o+\"translateZ(\"+-i.unitSize.height/2+\"px) rotateX(90deg) \",n.endingTo=o+\"translateZ(\"+-i.unitSize.height/2+\"px) rotateX(0)     \";break;case\"east\":n.startingFrom=o+\"translateZ(\"+-i.unitSize.width/2+\"px) rotateY(0)     \",n.endingFrom=o+\"translateZ(\"+-i.unitSize.width/2+\"px) rotateY(90deg) \",n.startingTo=o+\"translateZ(\"+-i.unitSize.width/2+\"px) rotateY(-90deg)\",n.endingTo=o+\"translateZ(\"+-i.unitSize.width/2+\"px) rotateY(0)     \";break;case\"west\":n.startingFrom=o+\"translateZ(\"+-i.unitSize.width/2+\"px) rotateY(0)     \",n.endingFrom=o+\"translateZ(\"+-i.unitSize.width/2+\"px) rotateY(-90deg)\",n.startingTo=o+\"translateZ(\"+-i.unitSize.width/2+\"px) rotateY(90deg) \",n.endingTo=o+\"translateZ(\"+-i.unitSize.width/2+\"px) rotateY(0)     \"}var l=t.style.overflow,c=e.style.overflow,y=r.style.overflow,d=s.style.overflow;switch(celtra.styler.css(t.parentNode,\"transformStyle\",\"preserve-3d\"),t.style.overflow=e.style.overflow=\"hidden\",r.style.overflow=s.style.overflow=\"hidden\",celtra.styler.css(t,\"backfaceVisibility\",\"hidden\"),celtra.styler.css(e,\"backfaceVisibility\",\"hidden\"),celtra.styler.css(r,\"backfaceVisibility\",\"hidden\"),celtra.styler.css(s,\"backfaceVisibility\",\"hidden\"),i.direction||\"west\"){case\"north\":case\"south\":celtra.styler.css(t,\"transformOrigin\",\"50% 50% \"+-i.unitSize.height/2+\"px\"),celtra.styler.css(e,\"transformOrigin\",\"50% 50% \"+-i.unitSize.height/2+\"px\"),celtra.styler.css(r,\"transformOrigin\",\"50% 50% \"+-i.unitSize.height/2+\"px\"),celtra.styler.css(s,\"transformOrigin\",\"50% 50% \"+-i.unitSize.height/2+\"px\");break;case\"east\":case\"west\":celtra.styler.css(t,\"transformOrigin\",\"50% 50% \"+-i.unitSize.width/2+\"px\"),celtra.styler.css(e,\"transformOrigin\",\"50% 50% \"+-i.unitSize.width/2+\"px\"),celtra.styler.css(r,\"transformOrigin\",\"50% 50% \"+-i.unitSize.width/2+\"px\"),celtra.styler.css(s,\"transformOrigin\",\"50% 50% \"+-i.unitSize.width/2+\"px\")}this._runTransition(t,e,r,s,n,i.duration,function(){celtra.styler.css(t.parentNode,\"transformStyle\",\"\"),t.style.overflow=l,e.style.overflow=c,r.style.overflow=y,s.style.overflow=d,celtra.styler.css(t,\"transformOrigin\",\"\"),celtra.styler.css(e,\"transformOrigin\",\"\"),celtra.styler.css(r,\"transformOrigin\",\"\"),celtra.styler.css(s,\"transformOrigin\",\"\"),celtra.styler.css(t,\"backfaceVisibility\",\"\"),celtra.styler.css(e,\"backfaceVisibility\",\"\"),celtra.styler.css(r,\"backfaceVisibility\",\"\"),celtra.styler.css(s,\"backfaceVisibility\",\"\"),nextFrame(a||noop)})},_runTransition:function(t,e,r,s,i,a,n){function o(){l||(l=!0,celtra.styler.css(r,\"transition\",\"\"),celtra.styler.css(s,\"transition\",\"\"),celtra.styler.css(t,\"transition\",\"\"),celtra.styler.css(e,\"transition\",\"\"),celtra.styler.css(r,\"transform\",\"\"),celtra.styler.css(s,\"transform\",\"\"),celtra.styler.css(t,\"transform\",\"\"),celtra.styler.css(e,\"transform\",\"\"),t.style.display=e.style.display=\"none\",t.style.opacity=e.style.opacity=r.style.opacity=s.style.opacity=\"\",nextFrame(n||noop))}celtra.styler.css(t,\"transform\",i.startingFrom),celtra.styler.css(e,\"transform\",i.startingFrom),celtra.styler.css(r,\"transform\",i.startingTo),celtra.styler.css(s,\"transform\",i.startingTo),t.style.opacity=e.style.opacity=\"undefined\"==typeof i.startingFromOpacity?1:i.startingFromOpacity,r.style.opacity=s.style.opacity=\"undefined\"==typeof i.startingToOpacity?1:i.startingToOpacity,r.style.display=s.style.display=\"block\";var l=!1,c=this._runOnce(o);once(r,\"transitionend\",c),setTimeout(function(){celtra.styler.css(r,\"transition\",i.transition),celtra.styler.css(t,\"transition\",i.transition),celtra.styler.css(s,\"transition\",i.transition),celtra.styler.css(e,\"transition\",i.transition),nextFrame(function(){l||(celtra.styler.css(t,\"transform\",i.endingFrom),celtra.styler.css(e,\"transform\",i.endingFrom),celtra.styler.css(r,\"transform\",i.endingTo),celtra.styler.css(s,\"transform\",i.endingTo),t.style.opacity=e.style.opacity=\"undefined\"==typeof i.endingFromOpacity?1:i.endingFromOpacity,r.style.opacity=s.style.opacity=\"undefined\"==typeof i.endingToOpacity?1:i.endingToOpacity)}),setTimeout(c,a+150)},20)},run:function(t,e,r,s,i){var a=this._getSupportedAnimation(i.animation||\"replace\");if(!(a in this))throw new Error(\"The transition function does not exist!\");this[a].apply(this,arguments)},_getSupportedAnimation:function(t){return!android(\"4\")||window.navigator.userAgent.match(/Chrome.*(Mobile)? Safari/)||\"cube\"!==t&&\"flip\"!==t?t:\"fade\"},_runOnce:function(t){var e=!1;return function(){return e?void 0:(e=!0,t())}}};;\nvar ScreenTransitioner={goingToScreen:null,_masterShown:!1,goToScreen:function(e,n,t){var i=Array.prototype.slice.apply(arguments);if(!this.isAppearing)return void this.once(\"appeared\",function(){this.goToScreen.apply(this,i)}.bind(this));if(!e.loaded)return void e.getNode(function(){this.goToScreen.apply(this,i)}.bind(this));var r=this.currentScreen,s=function(){this._preloadReachableScreens(),t&&t()}.bind(this);return n=n||{},this.goingToScreen?s():e&&r!==e?(this.goingToScreen=e,void e.triggerBeforeAppear(function(){this.initiateScreenTransition(e,n,function(){this.goingToScreen=null,this.currentScreen=e,r&&(r.disappear(),r.exitRenderTree()),this._masterShown||(this._masterShown=!0,this.master.enterRenderTree(),this.master.appear()),this.currentScreen.enterRenderTree(),this.currentScreen.appear(),s()}.bind(this))}.bind(this))):s()},initiateScreenTransition:function(e,n,t){if(n=n||{},t=t||noop,this.visibleScreen==e)return t();this.visibleScreen=e;var i=e===this.loadingScreen;if(i&&e.loaded)this._screenTransition(e.getNode(),null,n,t);else if(e.loaded&&this.master.loaded)this.loadingScreen&&(this.loadingScreen.getNode().style.display=\"none\"),this._screenTransition(e.getNode(),this.master.getNode(),n,t);else{Logger(\"unit\").warn(\"Screens should be loaded but were not\");var r,s,o,a=function(){r--,r||this._screenTransition(s,o,n,t)};i?(s=this.loadingScreen.getNode(a.bind(this)),o=null,r=1):(s=e.getNode(a.bind(this)),o=this.master.getNode(a.bind(this)),r=2)}},_screenTransition:function(e,n,t,i){e.style.display=\"none\",n&&(this._masterClone||this._createMasterClone(),this.screenHolder.appendChild(this._masterClone),n.parentNode||this.screenHolder.appendChild(n),this._masterClone.style.zIndex=n.style.zIndex=-1),e&&!e.parentNode&&this.screenHolder.appendChild(e),n&&(this._masterClone.style.display=\"block\",n.style.display=\"none\"),null!=this.currentScreen?(t.unitSize=extend({},this.size),ScreenNodeTransition.run(this.currentScreen.node,this._masterClone,e,n,t,function(){n.style.display=\"block\",this._masterClone.display=\"none\",i()}.bind(this))):(n&&(n.style.display=\"block\",this._masterClone.style.display=\"none\"),e.style.display=\"block\",nextFrame(i))},_preloadReachableScreens:function(){setTimeout(function(){var e=[];Object.keys(this.currentScreen.dynamicReachableScreenConditions).forEach(function(n){var t=n.split(\"/\"),i=creative.experiments.get(t[0],t.slice(1));null!=i&&Object.keys(this.currentScreen.dynamicReachableScreenConditions[n]).forEach(function(t){t!=i.chosenVariant&&(e=e.concat(this.currentScreen.dynamicReachableScreenConditions[n][t]))}.bind(this))}.bind(this)),this.currentScreen.reachableScreens.concat(this.master.reachableScreens).forEach(function(n){var t=-1==e.indexOf(n.localId.toString());t&&n.getNode()}.bind(this))}.bind(this),0)},_createMasterClone:function(){return this._masterClone&&this._masterClone.parentNode&&this._masterClone.parentNode.removeChild(this._masterClone),this._masterClone=this.master.getNode().cloneNode(!0),this._masterClone.style.display=\"none\",this._masterClone.style.zIndex=-1,this._masterClone}};;\nfunction AdViewableTimeObserver(e){this._tracker=e,this._readyToShow=!1,this._adapter}function AdViewableInViewObjectObserver(){AdViewableInViewObjectObserver.uberConstructor.apply(this,arguments),this._inViewObjects=[],this._viewableInViewObjects=[]}function AdViewableUnitObserver(){AdViewableUnitObserver.uberConstructor.apply(this,arguments),this._units=[],this._viewableUnits=[],this._containerIsViewable=!1}AdViewableTimeObserver.prototype.readyToShow=function(){throw new Error(\"AdViewableInViewObjectObserver.readyToShow not implemented!\")},AdViewableTimeObserver.prototype.registerUnit=function(){throw new Error(\"AdViewableInViewObjectObserver.registerUnit not implemented!\")},AdViewableTimeObserver.prototype.registerAdapter=function(){throw new Error(\"AdViewableTimeObserver.registerAdapter not implemented!\")},AdViewableTimeObserver.prototype.stop=function(){this._tracker.stop()},inherit(AdViewableInViewObjectObserver,AdViewableTimeObserver),AdViewableInViewObjectObserver.prototype.registerAdapter=function(e){this._adapter=e;var t=this._tracker;e.mediaState.on(\"videoStarted\",function(){this._tryStartTracker()}.bind(this)),e.mediaState.on(\"videoStopped\",function(){0===this._viewableInViewObjects.length&&t.stop()}.bind(this))},AdViewableInViewObjectObserver.prototype.readyToShow=function(){this._readyToShow=!0,this._tryStartTracker()},AdViewableInViewObjectObserver.prototype.registerUnit=function(e){var t=e.inView,i=this._inViewObjects,r=this._viewableInViewObjects,a=this._tracker;if(-1===i.indexOf(t)){i.push(t);var n=-1!==r.indexOf(t);!n&&t.getAreaInViewRatio()>0&&r.push(t),this._tryStartTracker(),t.on(\"areaInViewRatioChanged\",function(e){var i=r.indexOf(t),n=-1!==i;!n&&e>0?(r.push(t),this._tryStartTracker()):0===e&&n&&(r.splice(i,1),0===r.length&&a.stop())}.bind(this))}},AdViewableInViewObjectObserver.prototype._tryStartTracker=function(){var e=this._adapter,t=e&&e.mediaState.playingVideo;return this._readyToShow&&(this._viewableInViewObjects.length>0||t)?(this._tracker.start(),!0):!1},inherit(AdViewableUnitObserver,AdViewableTimeObserver),AdViewableUnitObserver.prototype.registerAdapter=function(e){this._adapter=e,this._containerIsViewable=e.containerIsViewable;var t=this._tracker;e.on(\"containerViewableChange\",function(e){this._containerIsViewable=e,e?this._tryStartTracker():t.stop()}.bind(this)),e.mediaState.on(\"videoStarted\",function(){this._tryStartTracker()}.bind(this)),e.mediaState.on(\"videoStopped\",function(){this._adapter.containerIsViewable&&0!==this._viewableUnits.length||t.stop()}.bind(this))},AdViewableUnitObserver.prototype.readyToShow=function(){this._readyToShow=!0,this._tryStartTracker()},AdViewableUnitObserver.prototype.registerUnit=function(e){if(!this._adapter)throw new Error(\"adapter was not registered yet!\");var t=this._units,i=this._viewableUnits,r=this._tracker;-1===t.indexOf(e)&&(t.push(e),-1===i.indexOf(e)&&e._visible&&(i.push(e),this._tryStartTracker()),e.on(\"appeared\",function(){-1===i.indexOf(e)&&(i.push(e),this._tryStartTracker())}.bind(this)),e.on(\"disappeared\",function(){var t=i.indexOf(e);-1!==t&&(i.splice(t,1),0===i.length&&r.stop())}.bind(this)))},AdViewableUnitObserver.prototype._tryStartTracker=function(){var e=this._adapter;return e&&(e.containerIsViewable||e.mediaState.playingVideo)&&this._readyToShow&&this._viewableUnits.length>0?(this._tracker.start(),!0):!1};;\nfunction AdViewableTimeTracker(i,e,t,n){this._trackingCenter=i,this._raf=e,this._win=t,this._intervals=n||{3e3:1e3,1e4:2e3,63e3:3e3},this._isRunning=!1,this._viewableMilliseconds=0,this._fromTime=0,this._pendingPingTimeoutId,this._pendingPingRafId,this._maxRafLatency=500}AdViewableTimeTracker.eventName=\"viewableTime\",AdViewableTimeTracker.TrackingData=function(i,e){return i>e&&(e=i),{name:AdViewableTimeTracker.eventName,from:i/1e3,to:e/1e3}},AdViewableTimeTracker.prototype.start=function(){this._isRunning||(this._isRunning=!0,this._fromTime=Date.now(),0===this._viewableMilliseconds?this._initPing():this._setNextPing())},AdViewableTimeTracker.prototype.stop=function(){if(this._clearPendingPing(),this._isRunning&&-1!==this._getPingInterval()){var i=Date.now(),e=i-this._fromTime;this._viewableMilliseconds+=e;var t=new AdViewableTimeTracker.TrackingData(this._fromTime,i);this._track(t)}this._isRunning=!1},AdViewableTimeTracker.prototype._initPing=function(){var i=this._fromTime,e=this._getPingInterval(),t=new AdViewableTimeTracker.TrackingData(this._fromTime,i);this._pendingPingRafId=this._raf.nextFrame(function(){this._track(t),this._setFromTimeForNextPing(i,e),this._setNextPing()}.bind(this))},AdViewableTimeTracker.prototype._setNextPing=function(){function i(){if(this._isRunning){var i=Date.now();this._viewableMilliseconds+=e,this._normalizeFromTime(i,e),this._pendingPingRafId=this._raf.nextFrame(function(){var t=new AdViewableTimeTracker.TrackingData(this._fromTime,i);this._track(t),this._setFromTimeForNextPing(i,e),this._setNextPing()}.bind(this))}}this._clearPendingPing();var e=this._getPingInterval();this._isRunning&&-1!==e&&(this._pendingPingTimeoutId=this._win.setTimeout(i.bind(this),e))},AdViewableTimeTracker.prototype._normalizeFromTime=function(i,e){var t=i-this._fromTime,n=e+this._maxRafLatency;t>n&&(this._fromTime=i)},AdViewableTimeTracker.prototype._setFromTimeForNextPing=function(i,e){var t=Date.now(),n=t-i,r=n>e;this._fromTime=r?t:i},AdViewableTimeTracker.prototype._getPingInterval=function(){var i=this._viewableMilliseconds,e=this._intervals,t=Object.keys(this._intervals),n=1*t[t.length-1],r=-1;return t.some(function(t){return 1*t>i?(r=e[t],i+r>n&&(r=-1),!0):!1}),r},AdViewableTimeTracker.prototype._clearPendingPing=function(){this._raf.cancelFrame(this._pendingPingRafId),this._win.clearTimeout(this._pendingPingTimeoutId)},AdViewableTimeTracker.prototype._track=function(i){this._trackingCenter.track(i)};;\n!function(t){function i(){this.playingVideo=!1}var e=i.prototype;extend(e,EventEmitter),e.stopVideo=function(){this.playingVideo=!1,this.emit(\"videoStopped\")},e.startVideo=function(){this.playingVideo=!0,this.emit(\"videoStarted\")},t.MediaState=i}(window);;\nfunction StateObject(t){Object.defineProperties(this,{values:{enumerable:!1,configurable:!1,writable:!0,value:{}},_isDirty:{enumerable:!1,configurable:!1,writable:!0,value:!1}}),Object.keys(t).forEach(function(e){this.registerValue(e,t[e])},this)}extend(StateObject.prototype,EventEmitter),StateObject.prototype.registerValue=function(t,e){this.values[t]={dirty:!1,value:e},Object.defineProperty(this,t,{get:function(){return this.values[t].value},set:function(e){var i=this.values[t],r=i.value;e!=r&&(i.dirty=!0,i.value=e,this._isDirty=!0,this.emit(\"change:\"+t,e,r))},enumerable:!0})},StateObject.prototype.markClean=function(t){var e=!1;Object.keys(this.values).forEach(function(i){t&&i!==t||(this[i].dirty=!1),e=e||this[i].dirty},this.values),this._isDirty=e},StateObject.prototype.getDirtyValues=function(){for(var t={},e=Object.keys(this.values),i=0;i<e.length;i++)this.values[e[i]].dirty&&(t[e[i]]=this.values[e[i]].value);return t},StateObject.prototype.isDirty=function(t){return\"undefined\"==typeof t?this._isDirty:this.values[t].dirty},StateObject.prototype.anyDirty=function(t){arguments.length>1&&(t=Array.prototype.slice.apply(arguments));for(var e=0;e<t.length;e++)if(this.values[t[e]].dirty)return!0;return!1},StateObject.prototype.copy=function(){var t={};for(var e in this.values)t[e]=this[e];return new StateObject(t)},StateObject.prototype.copyFrom=function(t){for(var e in t.values)this[e]=t[e]};;\nfunction StateAnimation(t,i){this.stateObject=t,this.propertyName=i,this.running=!1,this.lastUpdateTime=null,this.tick=this.tick.bind(this),this._callback=null}function SpringyAnimation(t,i,e){StateAnimation.apply(this,arguments),this.options=extend({},SpringyAnimation.defaults,e||{}),this.state={x:t[i],v:0},this.derivative={dx:0,dv:0}}function EasingAnimation(t,i,e){StateAnimation.apply(this,arguments),this.options=extend({},EasingAnimation.defaults,e||{}),this._startValue=null,this._startTime=null,this._targetValue=null,this._targetTime=null}StateAnimation.prototype.start=function(){this.running||(this.lastUpdateTime=null,this.running=!0,Ticker.frame(this.tick,\"update\"))},StateAnimation.prototype.pause=function(){Ticker.removeFrame(this.tick,\"update\"),this.running=!1},StateAnimation.prototype.tick=function(){var t=Date.now();this.update(t-(this.lastUpdateTime||t)),this.lastUpdateTime=t},StateAnimation.prototype.update=function(){throw new Error(\"Not implemented\")},Object.defineProperty(StateAnimation.prototype,\"value\",{get:function(){return this.stateObject[this.propertyName]},set:function(t){this.stateObject[this.propertyName]=t},enumerable:!0}),inherit(SpringyAnimation,StateAnimation),SpringyAnimation.defaults={springForce:1e3,damping:20,restThreshold:1},SpringyAnimation.prototype.animateTo=function(t,i,e){this.running&&this.pause(),\"function\"==typeof i&&(e=i,i=0),this.d=t,this.state.v=\"number\"==typeof i?i:0,this.state.x=this.value,this._callback=e,this.start()},SpringyAnimation.prototype.update=function(t){var i=Math.min(.03,t/1e3),e=Math.abs(this.state.x-this.d);e<this.options.restThreshold&&Math.abs(this.state.v)<this.options.restThreshold?(this.pause(),this.value=this.d,this.d=null,defer(this._callback||noop),this._callback=null):(this._integrate(this.state,i),this.value=this.state.x)},SpringyAnimation.prototype._integrate=function(t,i){var e=this._getDerivative(this.state),a=this._getDerivative(this.state,.5*i,e),n=this._getDerivative(this.state,.5*i,a),s=this._getDerivative(this.state,i,n);t.x+=i/6*(e.dx+2*(a.dx+n.dx)+s.dx),t.v+=i/6*(e.dv+2*(a.dv+n.dv)+s.dv)},SpringyAnimation.prototype._getDerivative=function(t,i,e){if(\"undefined\"==typeof e)return{dx:t.v,dv:this._acceleration(t)};var a={x:t.x+e.dx*i,v:t.v+e.dv*i};return{dx:a.v,dv:this._acceleration(a,i)}},SpringyAnimation.prototype._acceleration=function(t){return-this.options.springForce*(t.x-this.d)-this.options.damping*t.v},inherit(EasingAnimation,StateAnimation),EasingAnimation.defaults={exp:1.8},EasingAnimation.presets={easeIn:.6,easeOut:1.8,linear:1},EasingAnimation.prototype.animateTo=function(t,i,e){this.running&&this.pause(),this._callback=e,this._startValue=this.value,this._startTime=Date.now(),this._targetValue=t,this._targetTime=i,this.start()},EasingAnimation.prototype.update=function(){var t=Date.now()-this._startTime,i=this._targetValue-this._startValue;t>=this._targetTime?(this.pause(),this.value=this._targetValue,defer(this._callback||noop),this._startValue=null,this._startTime=null,this._targetValue=null,this._targetTime=null,this._callback=null):this.value=Math.pow(t/this._targetTime,this.options.exp)*i+this._startValue};;\nfunction ThresholdObserver(e){this.threshold=e,this._value=null}extend(ThresholdObserver.prototype,EventEmitter),Object.defineProperty(ThresholdObserver.prototype,\"value\",{get:function(){return this._value},set:function(e){if(null!==this._value&&this._value!==e){var t=this._value-this.threshold,h=e-this.threshold;0>=t*h&&(0>t?this.emit(\"up\"):0>h&&this.emit(\"down\"))}this._value=e}});;\nfunction BaseCreativeUnit(){}inherit(BaseCreativeUnit,View),BaseCreativeUnit.IGNORABLES=[\"INPUT\",\"SELECT\",\"TEXTAREA\",\"BUTTON\"],BaseCreativeUnit.prototype.awake=function(){BaseCreativeUnit.uber.awake.call(this),this._availableSize={width:0,height:0},this._isRendering=!1,this._engagementTracker=null,this._rxState=null,this._rxStateCopies=[]},BaseCreativeUnit.prototype.createNode=function(){return Logger(\"unit\").log(\"Starting to load \"+this),this.on(\"loaded\",creative.adapter.perf.start(\"CreativeUnit.load\").end),creative.experiments.get(\"TrackingLoadingTimes\")&&this.once(\"_firstScreenLoaded\",function(){var e=Date.now()-1e3*creative.runtimeParams.payloadJsClientTimestamp;if(3e4>e){var t={unitName:this.name};creative.aggregatorTracking.trackAggregator(\"unitLoadTime\",e,t),creative.aggregatorTracking.trackAggregator(\"unitLoadSuccesses\",t)}}.bind(this)),creative.adapter.on(\"mediaStopRequested\",function(e){this.emit(\"mediaStopRequested\",e)}.bind(this)),this.unitDiv=BaseCreativeUnit.uber.createNode.call(this),this._engagementTracker=new EngagementTracker(this.unitDiv,creative),Tapper(this.unitDiv,this.useClickForTap),attach(this.unitDiv,\"touchstart\",this._handleTouchStart.bind(this)),attach(this.unitDiv,\"touchmove\",this._handleTouchMove.bind(this)),this.unitDiv},BaseCreativeUnit.prototype.setAvailableSize=function(e,t){var r=this._availableSize.width!=e||this._availableSize.height!=t;return this._availableSize.width=e,this._availableSize.height=t,r},BaseCreativeUnit.prototype.getAvailableSize=function(){return{width:this._availableSize.width,height:this._availableSize.height}},BaseCreativeUnit.prototype.enterRenderTree=function(){throw new Error(\"Not implemented\")},BaseCreativeUnit.prototype.exitRenderTree=function(){throw new Error(\"Not implemented\")},BaseCreativeUnit.prototype.finishedLoading=function(){BaseCreativeUnit.uber.finishedLoading.call(this),Logger(\"unit\").log(\"Finished loading \"+this)},BaseCreativeUnit.prototype._handleTouchStart=function(e){if(!this.swipeable&&!creative.adapter.useNativeClickForTapDetection){for(var t=e.target;1!=t.nodeType;)t=t.parentNode;var r=function(){for(;t!==this.unitDiv;){if(t.className&&hasClass(t,\"map-container\"))return!0;t=t.parentNode}return!1}.bind(this);-1!=BaseCreativeUnit.IGNORABLES.indexOf(t.nodeName)||r()||e.preventDefault()}},BaseCreativeUnit.prototype._handleTouchMove=function(e){this.swipeable||e.preventDefault()},BaseCreativeUnit.prototype.createRxState=function(){this._rxState=this._generateNewRxStateObject()},BaseCreativeUnit.prototype._generateNewRxStateObject=function(){return new StateObject({left:null,top:null,right:null,bottom:null,width:null,height:null,vw:null,vh:null,x:null,y:null,pageYOffset:null})},BaseCreativeUnit.prototype.updateRxState=function(e){if(this._rxState){var t=e.getBoundingClientRect(),r=e.ownerDocument.defaultView;this._rxState.left=~~t.left,this._rxState.top=~~t.top,this._rxState.right=~~t.right,this._rxState.bottom=~~t.bottom,this._rxState.width=~~t.width,this._rxState.height=~~t.height,this._rxState.vw=r.innerWidth,this._rxState.vh=r.innerHeight,this._rxState.pageYOffset=r.pageYOffset,this._rxState.x=~~(t.left+t.width/2-r.innerWidth/2),this._rxState.y=~~(t.top+t.height/2-r.innerHeight/2),this._rxStateCopies.forEach(function(e){e.copyFrom(this._rxState)}.bind(this))}},BaseCreativeUnit.prototype.getRxStateObject=function(){if(this._rxState){var e=this._generateNewRxStateObject();return e.copyFrom(this._rxState),this._rxStateCopies.push(e),e}},BaseCreativeUnit.prototype.goToScreenAction=function(){throw new Error(\"Not implemented\")},BaseCreativeUnit.prototype.alertAction=function(e,t,r){this.alert({message:t.text},r)},BaseCreativeUnit.prototype.checkOrientationAction=function(e,t,r){var a,i=creative.adapter.orientation;0===i||180===i?a=t.onPortrait:(-90==i||90==i)&&(a=t.onLandscape),a?a(e,r):r()},BaseCreativeUnit.prototype.checkOrientationActionDryRun=BaseCreativeUnit.prototype.checkOrientationAction,BaseCreativeUnit.prototype._processURLParams=function(e){return\"string\"!=typeof e?e:creative.macros(e)},BaseCreativeUnit.prototype._addUrlAppendage=function(e){if(creative.urlOpenedUrlAppendage){var t=this.size.width+\"x\"+this.size.height,r=function(e){return e.indexOf(\"?\")>=0};return e+(r(e)?\"&\":\"?\")+creative.urlOpenedUrlAppendage.replace(new RegExp(\"{celtraFirstUnitSize}\",\"ig\"),t)}return e},BaseCreativeUnit.prototype.openClickThroughDestinationAction=function(e,t,r){var a=creative.clickThroughDestinationUrl,i=creative.shouldClickThroughToNewWindow(e),n=!1,o=2e3,s=\"clickThroughDestinationOpened\",c=function(){n||(n=!0,creative.adapter.openPotentialUniversalOrAppLink(this._processURLParams(a),i))}.bind(this);if(a){var l=function(e){return e.indexOf(\"itunes.apple.com/us/app/\")>0},d=function(e){return 0===e.indexOf(\"market://details?id=\")};creative.adapter._stopAllMedia(),l(a)||d(a)?(e.track({name:s,appUri:a}),e.trackClickThrough(),creative.adapter.trackingCenter.flush(),creative.adapter.getApp(this._processURLParams(a))):(a=this._addUrlAppendage(a),e.track({name:s,url:a}),e.trackClickThrough(),!creative.adapter.canOpenUrlInSameWindow||i?(creative.adapter.trackingCenter.flush(),c()):(creative.adapter.trackingCenter.flush(c),defer(c,o)))}e.screen&&creative.adapter.sendToEventMonitor(s,t.triggerId,e.screen.name,a||\"\"),r()},BaseCreativeUnit.prototype.goToURLAction=function(e,t,r){var a=creative.urlOpenedOverrideUrls&&creative.urlOpenedOverrideUrls[t.reportLabel]||t.url,i=creative.shouldClickThroughToNewWindow(e),n=!1,o=2e3,s=function(){n||(n=!0,creative.adapter.openBrowser(this._processURLParams(a),i))}.bind(this),c=(creative.experiments.get(\"OpenBrowserRefactor\")||{}).chosenVariant,l=(creative.experiments.get(\"WindowOpenWithDelay\")||{}).chosenVariant,d=function(t,r,a,i){if(c){var n={name:\"_openBrowserRefactor\",experiment:c,branch:t,logic:r,environment:a};i&&(n.redirect=i),e.track(n)}},p=function(e){if(c){var t=creative.adapter.trackingCenter,r=t._createTrackingEvent({name:\"redirectTrackingExperiment\"});r.redirect=e,t._pendingPixels.push(t._getTrackerUrl(r))}},u=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};if(!a)return r();a=this._addUrlAppendage(a);var h=\"urlOpened\",v={delay:[0,100,500][u(0,2)],step:u(1,3),randId:randInt()};if(creative.adapter._stopAllMedia(),e.track({name:h,url:a,label:t.reportLabel}),e.trackClickThrough(),deviceInfo.browser.ie()||deviceInfo.browser.edge())!creative.adapter.canOpenUrlInSameWindow||i?(d(\"new-window\",\"flush-and-open\",\"desktop-windows\",v),p(v),creative.adapter.trackingCenter.flush(),s()):(d(\"same-window\",\"flush-then-open\",\"desktop-windows\",v),p(v),creative.adapter.trackingCenter.flush(s),defer(s,o));else if(\"on\"==c)!creative.adapter.canOpenUrlInSameWindow||i?(d(\"new-window\",\"flush-and-open\",\"all-except-desktop-windows\",v),p(v),creative.adapter.trackingCenter.flush(),s()):(d(\"same-window\",\"flush-then-open\",\"all-except-desktop-windows\",v),p(v),creative.adapter.trackingCenter.flush(s),defer(s,o));else if(!creative.adapter.canOpenUrlInSameWindow||i){d(\"new-window\",\"wrap+open\",\"all-except-desktop-windows\"),l&&creative.aggregatorTracking.trackAggregator(\"windowOpenWithDelay\",1,{delay:l}),c&&e.track({name:\"_openBrowserRefactorFlushVsWrap\",trackingWith:\"wrap\"});var f=creative.wrapRedirectPageUrl(this._processURLParams(a));c&&(e.track({name:\"_openBrowserRefactorFlushVsWrap\",trackingWith:\"flush\"}),creative.adapter.trackingCenter.flush()),\"control\"===l||\"undefined\"==typeof l?creative.adapter.openBrowser(f,i):setTimeout(function(){creative.adapter.openBrowser(f,i)},\"noDelay\"===l?0:250)}else d(\"same-window\",\"wrap+open\",\"all-except-desktop-windows\"),creative.adapter.openBrowser(creative.wrapRedirectPageUrl(this._processURLParams(a)),i);creative.adapter.sendToEventMonitor(h,t.triggerId,e.screen.name,a,t.reportLabel),r()},BaseCreativeUnit.prototype.facebookURLAction=function(e,t,r){if(!t.url)return r();creative.adapter._stopAllMedia(),e.track({name:\"facebookShareAttempt\",url:t.url,label:t.reportLabel}),e.trackClickThrough();var a=\"http://m.facebook.com/sharer.php?u=\"+encodeURIComponent(t.url);creative.adapter.openBrowser(creative.wrapRedirectPageUrl(a),creative.shouldClickThroughToNewWindow(e)),r()},BaseCreativeUnit.prototype.callURLAction=function(e,t,r){if(!t.url)return r();var a=this._processURLParams(t.url),i=new Image;i.onload=i.onerror=function(){r()},i.src=a},BaseCreativeUnit.prototype.displayImageAction=function(e,t,r){if(!t.file)return r();var a=function(e,a){var i=document.createElement(\"div\");i.className=\"celtra-display-image-overlay touchable\",i.style.backgroundImage='url(\"'+t.file.getUrl()+'\")',this.unitDiv.appendChild(i),(e>this.size.width||a>this.size.height)&&(i.style.backgroundSize=\"contain\"),t.color&&(i.style.backgroundColor=t.color),attach(i,\"tap\",function(){i.parentNode.removeChild(i),r()},!1);var n=document.createElement(\"div\");n.className=\"celtra-back-button touchable \"+this.alignBackButtonHorizontal,i.appendChild(n)}.bind(this);if(t.file.meta)a(t.file.meta.width,t.file.meta.height);else{var i=new Image;i.onload=function(){a(this.width,this.height)},i.onerror=function(){return console.error(\"Couldn't display image: \"+t.file.getUrl()),r()},i.src=t.file.getUrl()}},BaseCreativeUnit.prototype.saveImageAction=function(e,t,r){function a(a,n){var o=a.getOriginalUrl(),c=a.name,l=a.blobHash;if(i(l),creative.adapter.canSaveImage())creative.adapter.trackingCenter.flush(function(){var a=\"shared.png\";\"undefined\"!=typeof c?a=c:\"string\"==typeof n&&n.trim().length>0&&(a=n.trim()+\".png\"),creative.adapter.saveImage(o,encodeURIComponent(a),r);var i=n||c;creative.adapter.sendToEventMonitor(s,t.triggerId,e.screen.name,i,t.reportLabel)});else{var d=new SaveImageDialog(creative.adapter,creative.resourceUrl,o);d.show(r)}}function i(r){e.track({name:s,blobHash:r,label:t.reportLabel}),e.trackClickThrough()}function n(){creative.adapter.createPlacements({preloader:{attachment:\"body\",positioning:\"screen\",type:\"layer\"}},function(){var e=creative.adapter.placements.preloader;e.setZIndex(\"max\"),e.setSize(\"100%\",\"100%\"),e.setPosition(0,0);var t=e.createElement(\"link\");t.rel=\"stylesheet\",t.type=\"text/css\",t.href=creative.resourceUrl+\"runner/clazzes/PostBlobPreloader.css\",e.getContainer().appendChild(t);var r=e.createElement(\"div\");addClass(r,\"celtra-preloader-container\");var a=e.createElement(\"div\");addClass(a,\"celtra-preloader-image\"),a.style.backgroundImage=\"url(\"+creative.resourceUrl+\"runner/clazzes/CreativeUnit/preloader.png)\",r.appendChild(a),e.populate(r,function(){e.show()})})}function o(){creative.adapter.destroyPlacement(\"preloader\")}var s=\"imageSaveAttempted\";if(t.imageOrigin=t.imageOrigin?t.imageOrigin:\"asset\",\"component\"==t.imageOrigin&&t.component)if(t.component.file)a(t.component.file,t.component.name);else{var c=t.component.getField();if(null===c)return void r();if(-1===creative.runtimeParams.enabledServices.indexOf(\"contentSharing\"))return void this.alertAction(e,{text:\"This feature is not available in your region\"},r);var l=c.url,d=l.split(\",\")[1];n(),postBlob(d,function(e,i){if(o(),i>=200&&300>i){var n=JSON.parse(e),s=creative.cachedApiUrl+\"blobs/\"+n.hash+\"/shared.png\",c=new File(s);a(c,t.component.name)}else r()})}else\"asset\"==t.imageOrigin&&t.file?a(t.file):r()},BaseCreativeUnit.prototype.playSoundAction=function(e,t,r){if(!t.file)return r();var a=new Audio(t.file.getUrl());attach(a,\"ended\",function(){r()},!1),a.play()},BaseCreativeUnit.prototype.playVideoInPlayerAction=function(e,t,r){if(!t.file)return r();var a=creative.adapter.useFSVP,i=new VideoContext(e,t.file,t.reportLabel);i.track({engineType:\"html5\",name:\"videoPlayAttempted\",trackable:a,filename:t.file.name,userInitiated:e.consideredUserInitiatedByBrowser,startMuted:!1,videoPlayerMode:\"fullscreen\",videoPreset:null}),creative.adapter.playVideoInPlayer(i,function(a){var i=(a?t.onSuccess:t.onFailure)||nullai;i(e,r)})},BaseCreativeUnit.prototype.playVideoInPlayerActionDryRun=function(e,t,r){return t.file?((t.onSuccess||nullai)(e,noop),(t.onFailure||nullai)(e,noop),void r()):r()},BaseCreativeUnit.prototype.playVideoFromURLAction=function(e,t,r){if(!t.url)return r();var a=creative.adapter.useFSVP;creative.adapter._stopAllMedia(),videoContext=new VideoContext(e,new File(t.url),t.reportLabel),videoContext.track({engineType:\"html5\",name:\"videoPlayAttempted\",trackable:a,filename:null,userInitiated:e.consideredUserInitiatedByBrowser,startMuted:!1,videoPlayerMode:\"fullscreen\",videoPreset:null}),creative.adapter.playVideoInPlayer(videoContext,function(a){var i=(a?t.onSuccess:t.onFailure)||nullai;i(e,r)})},BaseCreativeUnit.prototype.playVideoFromURLActionDryRun=function(e,t,r){return t.url?((t.onSuccess||nullai)(e,noop),(t.onFailure||nullai)(e,noop),void r()):r()},BaseCreativeUnit.prototype.vibrateAction=function(e,t,r){r()},BaseCreativeUnit.prototype.getAppAction=function(e,t,r){var a=(creative.runtimeParams.overrides||creative.runtimeParams).deviceInfo,i=function(e){return new RegExp(\"(^http(s)?://)|(^market://)\",\"i\").test(e)},n=function(){return new RegExp(\"^\\\\d+$\").test(t.appStoreUrl)?\"https://itunes.apple.com/app/id\"+t.appStoreUrl:(i(t.appStoreUrl)?\"\":\"http://\")+t.appStoreUrl},o=function(){return i(t.androidMarketAppId)?t.androidMarketAppId:android()||\"Android\"===a.osName?\"market://details?id=\"+t.androidMarketAppId:\"https://play.google.com/store/apps/details?id=\"+t.androidMarketAppId};creative.adapter._stopAllMedia();var s;if(creative.storeOpenedOverrideUrls[t.reportLabel]?s=creative.storeOpenedOverrideUrls[t.reportLabel]:t.appStoreUrl&&(ios()||-1!==[\"OSX\",\"IOS\"].indexOf(a.osName))?s=n():t.androidMarketAppId&&(s=o()),s){var c=!ios(\"9\",null),l=\"storeOpened\",d=2,p=function(){creative.adapter.getApp(this._processURLParams(s))}.bind(this),u=function(){if(!--d&&c){p();var r={};t.appStoreUrl&&(r.appStoreUrl=n()),t.androidMarketAppId&&(r.androidMarketAppId=o()),creative.adapter.sendToEventMonitor(l,t.triggerId,e.screen.name,r,t.reportLabel)}}.bind(this);e.track({name:l,appUri:s,label:t.reportLabel},u),e.trackClickThrough(u),c||setTimeout(p,0)}r()},BaseCreativeUnit.prototype.callPhoneAction=function(e,t,r){if(!t.number)return r();creative.adapter._stopAllMedia();var a=\"phoneCalled\",i=deviceInfo.os.ios()&&deviceInfo.browser.safari(),n=function(){creative.adapter.callPhone(t.number),creative.adapter.sendToEventMonitor(a,t.triggerId,e.screen.name,t.number,t.reportLabel)};e.track({name:a,number:t.number,label:t.reportLabel}),e.trackClickThrough(),i?(creative.adapter.trackingCenter.flush(),defer(n)):creative.adapter.trackingCenter.flush(n),r()},BaseCreativeUnit.prototype.answerSurveyQuestion=function(e,t,r){var a=[\"answerIds\",\"questionId\",\"surveyId\"],i=/[0-9a-f]{8}/;a.forEach(function(e){if(\"answerIds\"==e){if(!(t.answerIds instanceof Array))throw new Error(\"args.answerIds must be an array\");t.answerIds.forEach(function(e){if(!i.test(e))throw new Error(\"args.answerIds must contain Ids that have hexadecimal formatted string containing 8 characters\")})}else if(!i.test(t[e]))throw new Error(\"args.\"+e+\" must be hexadecimal formatted string containing 8 characters\")}),e.track({name:\"surveyQuestionAnswered\",answerIds:t.answerIds,questionId:t.questionId,surveyId:t.surveyId}),r()},BaseCreativeUnit.prototype.saveTheDateAction=function(e,t,r){function a(e){var r;return t.allDay?(r=new CDate,r.value=e.getFullYear()+\"-\"+zeroPad(e.getMonth()+1)+\"-\"+zeroPad(e.getDate())):(e=\"my\"===t.timezone?e.getUTCFullYear()+\"-\"+zeroPad(e.getUTCMonth()+1)+\"-\"+zeroPad(e.getUTCDate())+\" \"+zeroPad(e.getUTCHours())+\":\"+zeroPad(e.getUTCMinutes())+\":\"+zeroPad(e.getUTCSeconds()):e.getFullYear()+\"-\"+zeroPad(e.getMonth()+1)+\"-\"+zeroPad(e.getDate())+\" \"+zeroPad(e.getHours())+\":\"+zeroPad(e.getMinutes())+\":\"+zeroPad(e.getSeconds()),r=new CDateTime,r.value=e,r.tz=t.timezone),r}return t.eventName&&t.location&&t.start?(t.end=t.end||new Date(t.start.getTime()+36e5),t.timezone=t.timezone||\"my\",t.end<t.start?(console.error(\"End date must be after the start date!\"),r()):-1===[\"my\",\"utc\",\"user\"].indexOf(t.timezone)?(console.error(\"Invalid timezone argument!\"),r()):\"undefined\"!=typeof t.reminder&&-1===[\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\",\"2d\",\"date\"].indexOf(t.reminder)?(console.error(\"Invalid reminder argument!\"),r()):(t.start=a(t.start),t.end=a(t.end),void CCalendar.saveTheDateAction(e,t,r))):(console.error(\"saveTheDateAction must have eventName, location and start date defined!\"),r())},BaseCreativeUnit.prototype.resizeAction=function(){throw new Error(\"Resize action is not available for this ad format or creative unit\")},BaseCreativeUnit.prototype._areRevealResizeActionArgsValid=function(e){var t=[\"intro\",\"collapsed\",\"maximum\",\"fullscreen\"];return-1!==t.indexOf(e.height)},BaseCreativeUnit.prototype.expandAction=function(){throw new Error(\"Expand action is not available for this ad format or creative unit\")},BaseCreativeUnit.prototype._assertAppearBeforeExpand=function(){this.hasAppearedAtLeastOnce||creative.adapter.trackingCenter.track({name:\"userError\",userErrorId:\"expandBeforeAppear\"})},BaseCreativeUnit.prototype.collapseAction=function(){throw new Error(\"Collapse action is not available for this ad format or creative unit\")},BaseCreativeUnit.prototype.dismissAction=function(){throw new Error(\"Dismiss action is not available for this ad format or creative unit\")},BaseCreativeUnit.prototype.findAll=function(){throw new Error(\"Not implemented!\")},BaseCreativeUnit.prototype.findByType=function(){throw new Error(\"Not implemented!\")},BaseCreativeUnit.prototype.find=function(e){var t=this.findAll(e);return t.length>0?t[0]:null},BaseCreativeUnit.prototype.findByLocalId=function(){throw new Error(\"Not implemented!\")},BaseCreativeUnit.prototype.getShareableState=function(){throw new Error(\"Not implemented!\")},BaseCreativeUnit.prototype.applyShareableState=function(){throw new Error(\"Not implemented!\")};;\n!function(e){\"use strict\";var r={};r.toString=function(){return\"[Clazz CustomAudiences]\"};var t=function(e,r,t,n){function i(r,t){var i=new XMLHttpRequest;i.open(e,u+s+\"/\"+encodeURIComponent(r)+\"/\"+encodeURIComponent(t)+\"?\"+creative.authTokenUrlParam),i.send(n)}if(-1===[\"PUT\",\"DELETE\"].indexOf(e))throw new Error(\"Unsupported request method: \"+e);if(\"undefined\"==typeof creative.runtimeParams.customAudiences[r])throw new Error('Custom audience \"'+r+'\" is not used by the creative.');creative.runtimeParams.customAudiences[r]={userExists:t,userData:n};var u=creative.secure?creative.customAudiencesUrl:creative.insecureCustomAudiencesUrl,s=\"/audiences/\"+r,o=creative.userIdentifiers;for(var a in o)for(var c in o[a])i(a,o[a][c])};r.addUser=function(e,r){creative.runtimeParams.userOptOut||t(\"PUT\",e,!0,r)},r.removeUser=function(e){creative.runtimeParams.userOptOut||t(\"DELETE\",e,!1)},e.CustomAudiences=r}(window);;\n!function(e){\"use strict\";function t(e){return{findByLocalId:e}}var n={ambience:\"Ambience\",animatey:\"Animatey\",abtest:\"Best\",basket:\"Basket\",button:\"Button\",canvas:\"Canvas\",celebration:\"Celebration\",checkbox:\"CheckBox\",feedbasedchoice:\"ChoiceFeed\",countdown:\"Countdown\",draggy:\"Draggy\",dropdown:\"Dropdown\",dynamiccontent:\"DynamicContent\",facebookshare:\"FacebookShareButton\",fallback:\"Fallback\",frame:\"Frame\",flippy:\"Flippy\",grid:\"Grid\",group:\"Group\",gyro:\"Gyro\",hotspot:\"Hotspot\",input:\"Input\",lighttable:\"LightTable\",map:\"Map\",transitions:\"Transitions\",mastervideo:\"MasterVideo\",nearby:\"Nearby\",painty:\"Painty\",pannable:\"Pannable\",particles:\"Particle\",picture:\"Picture\",puzzle:\"Puzzle\",shapey:\"Shapey\",smoke:\"Smoke\",stack:\"Stack\",stopwatch:\"Stopwatch\",locatorclassic:\"StoreLocator2\",locator:\"StoreLocator3\",swipeygallery:\"Swipey\",swipeygroup:\"SwipeyGroup\",takephoto:\"TakePhotoButton\",texty:\"Texty\",twitterfeed:\"TwitterFeed\",twittershare:\"TwitterShareButton\",inlinevideo:\"Video\",\"360view\":\"View360\",\"360video\":\"Video360\",\"360\u00b0video\":\"Video360\",weather:\"Weather\",whatsappshare:\"WhatsAppShareButton\",wipeable:\"Wipeable\",youtube:\"Youtube\",scene:\"Scene\",brandtracksurvey:\"BrandTrackSurvey\",brandtrackquestion:\"BrandTrackQuestion\",customcode:\"CustomCode\",videoasset:\"VideoAsset\"},o=function(e){return e=e.toLowerCase().replace(/\\W+/g,\"\"),e in n?n[e]:\"\"},i=function(e,t){function n(r){t&&i.length>0||r.forEach(function(t){e(t)&&i.push(t),t.getActiveContainers().forEach(function(e){n(e.objects),o(e.scenes)})})}function o(n){!n||t&&i.length>0||n.forEach(function(t){e(t)&&i.push(t)})}var i=[];return\"Screen\"==this.constructor.name?(n(this.objects),o(this.scenes)):\"function\"==typeof this.getActiveContainers&&this.getActiveContainers().forEach(function(e){n(e.objects),o(e.scenes)}),i},r=function(e){var t=i.call(this,e,!0);return t.length>0?t[0]:null},a=function(e){return function(t){return\"undefined\"==typeof e||t.name==e}},c={findAll:function(e){return i.call(this,a(e))},findByType:function(e){var t=[];return\"undefined\"==typeof e?t:i.call(this,function(t){return t.constructor.name==o(e)})},findByLocalId:function(e){return r.call(this,function(t){return t.localId==e})},find:function(e){return r.call(this,a(e))}};e.DiscoverableTrait=c;var u=function(e){var t=null;for(var n in this.units)if(t=this.units[n].findByLocalId(e,!0))break;return t},s=function(e){if(\"undefined\"==typeof e)return null;var t=null;return this.variants.some(function(n){return t=n.findByLocalId(e),n.localId==e&&(t=n),!!t}),t},l=function(e){if(\"undefined\"==typeof e)return null;var t=null;return[this.master].concat(this.screens).some(function(n){return t=n.findByLocalId(e),n.localId==e&&(t=n),!!t}),t};e.DiscoverableUnitsTrait=t(u),e.DiscoverableVariantsTrait=t(s),e.DiscoverableScreensTrait=t(l)}(window);;\n!function(n){\"use strict\";function e(n){return{goToObject:n}}var t=function(n,e){if(e=e||noop,null!==n){var t=null;\"undefined\"!=typeof n.parentUnit&&(t=n.parentUnit),\"CreativeUnit\"===n.constructor.name&&(t=n),t?this._goToUnit(t.localId,function(t){t.goToObject(n,e)}):defer(e.bind(this,null))}},r=function(n,e){e=e||noop;var t=null,r=null;\"undefined\"!=typeof n.parentScreen&&(r=n.parentScreen),\"Screen\"===n.constructor.name&&(r=n),r&&null!==r.parentUnitVariant&&(t=r.parentUnitVariant),\"CreativeUnitVariant\"===n.constructor.name&&(t=n),t?this.goToVariant(t.localId,function(t){t.goToObject(n,e)}):defer(e.bind(this,null))},i=function(n,e){e=e||noop;var t=null;\"undefined\"!=typeof n.parentScreen&&(t=n.parentScreen),\"Screen\"===n.constructor.name&&(t=n),t&&t!==this.currentScreen?this.goToScreen(t,void 0,function(){e(t)}):defer(e.bind(this,null))};n.TraversableUnitsTrait=e(t),n.TraversableVariantsTrait=e(r),n.TraversableScreensTrait=e(i)}(window);;\n!function(e){\"use strict\";function t(e){return u[e]}function n(e){var t=e.split(\"/\")[1];if(!(t.length<2))return t[1]}function r(e){if(\"undefined\"==typeof a[e]&&(a[e]={type:\"unknown\",rows:[]}),0===e.indexOf(\"LocationTableImplicitField\")&&\"unknown\"===a[e].type){var t=\"text\";\"/website\"===e.slice(-8)&&(t=\"url\"),a[e].type=t}return a[e]}function i(){return o?a:(creative.runtimeParams.dynamicContent.forEach(function(e){e.rows.forEach(function(e,t){var n=e.fieldValues;Object.keys(n).forEach(function(e){var i=r(e),u=n[e].metaData,a=n[e].value;i.rows[t]={metadata:\"object\"==typeof u?JSON.parse(JSON.stringify(u)):null,value:a}})}),e.fields.forEach(function(t){var n=\"CustomFeedField/\"+t.id,i=r(n);i.id=t.id,i.feedId=e.feedId,i.name=t.name,i.type=t.fieldType})}),o=!0,a)}var u={choice:[\"ChoiceFeed\",\"checkChoiceFeed\"],image:[\"Picture\",\"Swipey\"],video:[\"Video\"],text:[\"Texty\"],html:[\"CustomCode\"],url:[\"goToFeedURL\"]},a={},o=!1,d={checkAndTrackValue:function(e,t,n){t&&(this.isCorrectFieldType(t,e)?this.getFieldValueByKey(t,n)||creative.adapter.trackingCenter.track({name:\"userError\",userErrorId:\"feedValueMissing\"}):creative.adapter.trackingCenter.track({name:\"userError\",userErrorId:\"feedValueUnlinked\"}))},getCustomFields:function(){var e=i();return Object.keys(e).filter(function(e){return 0===e.indexOf(\"CustomFeedField\")}).map(function(t){var n=e[t];return{id:n.id,feedId:n.feedId,name:n.name,type:n.type,values:n.rows.map(function(e){return e.value}).filter(function(e){return null!==e})}})},getCustomFieldByKey:function(e){if(e){var t=n(e);if(t)for(var r=this.getCustomFields(),i=0;i<r.length;i++)if(r[i].id===t)return r[i]}},getCustomFieldByName:function(e){for(var t,n=this.getCustomFields(),r=0;r<n.length;r++)if(n[r].name===e){t=n[r];break}return t},getFeedByFieldKey:function(e){var t=n(e);if(t)return creative.runtimeParams.dynamicContent.find(function(e){return e.fields.some(function(e){return e.id==t})})},getFieldByKey:function(e){var t=i();return t[e]},getFieldRowsByKey:function(e){var t=this.getFieldByKey(e),n=t?t.rows:[],r=1===n.length&&\"string\"==typeof n[0].value||n.length>1;return r?n:[]},getFieldRowByKey:function(e,t){t=\"number\"==typeof t?t:0;var n=this.getFieldRowsByKey(e);return n[t]},getFieldValueByKey:function(e,t){var n=this.getFieldRowByKey(e,t);return n&&n.value},isCorrectFieldType:function(e,n){var r=this.getFieldByKey(e);if(!r)return!1;var i=t(r.type);return Boolean(i&&-1!==i.indexOf(n))}};e.FeedData=d}(window);;\n!function(t){\"use strict\";var e={stringPatternAngle:\"(?:[+-]?\\\\d*\\\\.?\\\\d+)(?:deg|grad|rad|turn)\",stringPatternColor:\"(?:#(?:[A-Fa-f0-9]{3,6})|(?:(?:rgb|hsl)a?)\\\\(\\\\s*(?:\\\\d+(?:\\\\%)?\\\\s*,\\\\s*){2,3}(?:(?:\\\\d+\\\\.)?\\\\d+)\\\\s*\\\\))\",stringPatternSideCorner:\"top|bottom|left|right\",stringPatternValue:\"(?:[+-]?\\\\d*\\\\.?\\\\d+)(?:%|[a-z]+)?\",patternHex:/^(#|)([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,matchHexHash:1,matchHexColor:2,patternRgb:/^rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i,matchRgbRed:1,matchRgbGreen:2,matchRgbBlue:3,patternRgba:/^rgba\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*((?:\\d\\.)?\\d\\d?)\\s*\\)$/i,matchRgbaRed:1,matchRgbaGreen:2,matchRgbaBlue:3,matchRgbaAlpha:4,patternGradient:/^\\-?(moz|webkit|o|ms|)(?:(?:-|)(?:repeating-|)(linear|radial|))-gradient\\((.*?)\\)(?:;|)$/i,matchGradientPrefix:1,matchGradientType:2,matchGradientValues:3,generatedGradientSyntax:null,matchGradientSyntaxLine:1,matchGradientSyntaxAngle:2,matchGradientSyntaxSideCorner:3,matchGradientSyntaxStopList:4,buildGradientSyntax:function(){var t=[\"(?:to\\\\s+)?((?:\",e.stringPatternSideCorner,\")\\\\s*(?:\",e.stringPatternSideCorner,\")?)\"].join(\"\"),a=[\"(\",e.stringPatternAngle,\")\"].join(\"\"),n=[\"(\",a,\"|\",t,\")\"].join(\"\"),r=[e.stringPatternColor,\"\\\\s*(?:\",e.stringPatternValue,\")?\"].join(\"\"),i=[\"(?:\",r,\"\\\\s*,\\\\s*)*\",r].join(\"\"),o=[\"^\\\\s*\",n,\"\\\\s*,\\\\s*(\",i,\")\\\\s*$\"].join(\"\");return e.generatedGradientSyntax=new RegExp(o,\"i\"),e.generatedGradientSyntax},generatedRadialGradientSyntax:null,matchRadialGradientSyntaxEllipse:1,matchRadialGradientSyntaxWidth:2,matchRadialGradientSyntaxHeight:3,matchRadialGradientSyntaxXPosition:4,matchRadialGradientSyntaxYPosition:5,matchRadialGradientSyntaxStopList:6,buildRadialGradientSyntax:function(){var t=[\"(ellipse)?\\\\s*\",\"(\",e.stringPatternValue,\")\\\\s+\",\"(\",e.stringPatternValue,\")\\\\s+at\\\\s+\",\"(\",e.stringPatternValue,\")\\\\s+\",\"(\",e.stringPatternValue,\")\"].join(\"\"),a=[e.stringPatternColor,\"\\\\s*(?:\",e.stringPatternValue,\")?\"].join(\"\"),n=[\"(?:\",a,\"\\\\s*,\\\\s*)*\",a].join(\"\"),r=[\"^\\\\s*\",t,\"\\\\s*,\\\\s*(\",n,\")\\\\s*$\"].join(\"\");return e.generatedRadialGradientSyntax=new RegExp(r,\"i\"),e.generatedRadialGradientSyntax},generatedGradientStopList:null,matchGradientStopListColor:1,matchGradientStopListPosition:2,buildGradientStopList:function(){var t=[\"\\\\s*(\",e.stringPatternColor,\")\",\"(?:\\\\s+\",\"(\",e.stringPatternValue,\"))?\",\"(?:\\\\s*,\\\\s*)?\"].join(\"\");return e.generatedGradientStopList=new RegExp(t,\"gi\"),e.generatedGradientStopList},gradientOldSideCorner:{\"to top\":\"left bottom, left top\",\"to left\":\"right top, left top\",\"to bottom\":\"left top, left bottom\",\"to right\":\"left top, right top\",\"to top right\":\"left bottom, right top\",\"to top left\":\"right bottom, left top\",\"to bottom right\":\"left top, right bottom\",\"to bottom left\":\"right top, left bottom\"},gradientPrefixedSideCorner:{\"to top\":\"bottom\",\"to left\":\"right\",\"to bottom\":\"top\",\"to right\":\"left\",\"to top right\":\"bottom left\",\"to top left\":\"bottom right\",\"to bottom right\":\"top left\",\"to bottom left\":\"top right\"}};Object.defineProperties(e,{patternGradientSyntax:{get:function(){return null===e.generatedGradientSyntax?e.buildGradientSyntax():e.generatedGradientSyntax}},patternRadialGradientSyntax:{get:function(){return null===e.generatedRadialGradientSyntax?e.buildRadialGradientSyntax():e.generatedRadialGradientSyntax}},patternGradientStopList:{get:function(){return null===e.generatedGradientStopList?e.buildGradientStopList():e.generatedGradientStopList}}}),e.convertAngleToSideCorner=function(t,e){/\\-?(moz|webkit|o|ms)/.test(e)&&(t=90-t);var a=(t+360)%360,n=\"to top\";return a>347||14>a?n=\"to top\":a>=14&&75>=a?n=\"to top right\":a>75&&105>a?n=\"to right\":a>=105&&167>=a?n=\"to bottom right\":a>167&&194>a?n=\"to bottom\":a>=194&&255>=a?n=\"to bottom left\":a>255&&285>a?n=\"to left\":a>=285&&347>=a&&(n=\"to left top\"),n},e.convertSideCornerToAngle=function(t,e){var a=0;switch(t){case\"bottom\":case\"to top\":a=0;break;case\"left\":case\"to right\":a=90;break;case\"right\":case\"to left\":a=270;break;case\"top\":case\"to bottom\":a=180;break;case\"to bottom right\":case\"to right bottom\":a=167;break;case\"to bottom left\":case\"to left bottom\":a=194;break;case\"to top right\":case\"to right top\":a=14;break;case\"to top left\":case\"to left top\":a=347;break;case\"bottom right\":case\"right bottom\":a=285;break;case\"bottom left\":case\"left bottom\":a=75;break;case\"top right\":case\"right top\":a=255;break;case\"top left\":case\"left top\":a=105}return/\\-?(moz|webkit|o|ms)/.test(e)&&(a=90-a),(a+360)%360},e.isHex=function(t){return e.patternHex.test(t)},e.isRgb=function(t){return e.patternRgb.test(t)},e.isRgba=function(t){return e.patternRgba.test(t)},e.isGradient=function(t){return e.patternGradient.test(t)},e.parseColorStopList=function(t){for(var a,n=e.patternGradientStopList.exec(t),r=[];null!==n;)a={color:n[e.matchGradientStopListColor]},n[e.matchGradientStopListPosition]&&(a.position=n[e.matchGradientStopListPosition]),r.push(a),n=e.patternGradientStopList.exec(t);return r},e.parseGradient=function(t){var a=null,n=e.patternGradient.exec(t);if(null!==n){a={original:n[0],oldSyntax:!n[e.matchGradientType],prefix:n[e.matchGradientPrefix],type:n[e.matchGradientType],colorStopList:[]};var r=e.patternGradientSyntax.exec(n[e.matchGradientValues]);null!==r&&(r[e.matchGradientSyntaxLine]&&(a.line=r[e.matchGradientSyntaxLine]),r[e.matchGradientSyntaxAngle]&&(a.angle=r[e.matchGradientSyntaxAngle]),r[e.matchGradientSyntaxSideCorner]&&(a.sideCorner=r[e.matchGradientSyntaxSideCorner]),a.colorStopList=e.parseColorStopList(r[e.matchGradientSyntaxStopList]));var i=e.patternRadialGradientSyntax.exec(n[e.matchGradientValues]);null!==i&&(a.radialGradientEllipse=i[e.matchRadialGradientSyntaxEllipse],i[e.matchRadialGradientSyntaxWidth]&&(a.radialGradientWidth=i[e.matchRadialGradientSyntaxWidth]),i[e.matchRadialGradientSyntaxHeight]&&(a.radialGradientHeight=i[e.matchRadialGradientSyntaxHeight]),i[e.matchRadialGradientSyntaxXPosition]&&(a.radialGradientXPosition=i[e.matchRadialGradientSyntaxXPosition]),i[e.matchRadialGradientSyntaxYPosition]&&(a.radialGradientYPosition=i[e.matchRadialGradientSyntaxYPosition]),a.colorStopList=e.parseColorStopList(i[e.matchRadialGradientSyntaxStopList]))}return a},e.createGradient=function(t){var a={backgroundColor:null,webkitGradient:null,mozLinearGradient:null,msLinearGradient:null,oLinearGradient:null,webkitLinearGradient:null,linearGradient:null,radialGradient:null},n=e.parseGradient(t);if(n.oldSyntax)throw new Error('[Not supported] Can not create gradient from old \"webkit-gradient\" syntax.');for(var r=\"\",i=\"\",o=n.colorStopList.length,d=0;o>d;d++){var l=n.colorStopList[d];if(l.color){if(0!==d?(r+=\", \",i+=\", \"):a.backgroundColor=l.color,r+=l.color,i+=\"color-stop(\",l.position)r+=\" \"+l.position,i+=l.position;else{var s=100/(o-1)*d;i+=s+\"%\"}i+=\", \"+l.color+\")\"}}if(\"linear\"===n.type){var g=0;\"undefined\"!=typeof n.angle?g=parseInt(n.angle,10):\"undefined\"!=typeof n.sideCorner&&(g=e.convertSideCornerToAngle(n.line,n.prefix));var c=g;/\\-?(moz|webkit|o|ms)/.test(n.prefix)?g=90-c:c=90-g;var p=e.convertAngleToSideCorner(g),G=e.gradientOldSideCorner[p];a.webkitGradient=\"-webkit-gradient(linear, \"+G+\", \"+i+\")\",a.mozLinearGradient=\"-moz-linear-gradient(\"+c+\"deg, \"+r+\")\",a.msLinearGradient=\"-ms-linear-gradient(\"+c+\"deg, \"+r+\")\",a.oLinearGradient=\"-o-linear-gradient(\"+c+\"deg, \"+r+\")\",a.webkitLinearGradient=\"-webkit-linear-gradient(\"+c+\"deg, \"+r+\")\",a.linearGradient=\"linear-gradient(\"+g+\"deg, \"+r+\")\"}else if(\"radial\"===n.type){var m=parseInt(n.radialGradientWidth,10),h=parseInt(n.radialGradientHeight,10),S=parseInt(n.radialGradientXPosition,10),u=parseInt(n.radialGradientYPosition,10),f=m+\"% \"+h+\"%\",b=S+\"% \"+u+\"% \",x=f+\" at \"+b;a.radialGradient=\"radial-gradient(\"+x+\", \"+r+\")\"}return a},e.createGradientStyle=function(t){var a=e.createGradient(t),n=\"\";for(var r in a){var i=a[r];null!==i&&e.isGradient(i)&&(n+=\"background-image: \"+i+\"; \")}return n},t.Color=e}(window),\"undefined\"!=typeof module&&\"undefined\"!=typeof module.exports&&(module.exports=window.Color);;\n!function(){\"use strict\";var t=[],e={updateTextStyle:function(){},initializeFont:function(t){this.font.setBaseUrl((creative.secure?creative.cachedApiUrl:creative.insecureCachedApiUrl)+\"fonts/\"),t||(this.incrementLoadingCount(),this.loadFont(deferred(this.decrementLoadingCount.bind(this),0,\"TextStyleIntegrator.initializeFont deferred loadFont callback\"))),this.updateTextStyle()},getFontSize:function(){return this.fontSize},getLineSpacing:function(){return this.lineSpacing},getLetterSpacing:function(){return this.letterSpacing},getScaleBaseHeight:function(){return this.scaleBaseHeight},getScaleBaseWidth:function(){return this.scaleBaseWidth},getTextShadowOffset:function(){var t={x:0,y:0};if(\"undefined\"!=typeof this.textShadow&&this.textShadow){var e=this.textShadowAngle*(Math.PI/180);t.x=Math.round(this.textShadowDistance*Math.cos(e)),t.y=Math.round(this.textShadowDistance*Math.sin(e))}return t},getTextShadowBlur:function(){return android(\"2\")&&this.textShadowBlur<1?1:this.textShadowBlur},applyTextStyle:function(t){var e=this.font.getCssProperties(),i={fontFamily:e[\"font-family\"],fontStyle:e[\"font-style\"],fontWeight:e[\"font-weight\"],color:this.textColor,direction:\"\",letterSpacing:\"\",textAlign:\"\",textDecoration:\"\",textShadow:\"\"};if(\"undefined\"!=typeof this.textDirection&&(i.direction=this.textDirection),\"undefined\"!=typeof this.textAlign&&(i.textAlign=this.textAlign),\"undefined\"!=typeof this.textDecoration&&(i.textDecoration=this.textDecoration),\"undefined\"!=typeof this.letterSpacing&&(i.letterSpacing=this.getLetterSpacing()+\"px\"),\"undefined\"!=typeof this.textShadow&&this.textShadow){var n=this.getTextShadowOffset();i.textShadow=n.x+\"px \"+n.y+\"px \"+this.getTextShadowBlur()+\"px \"+this.textShadowColor}extend(t,i)},applyTextSize:function(t){var e=this.getNaturalSize(),i=this.getFontSize();this.scaleFont&&this.getScaleBaseWidth()>0&&\"undefined\"!=typeof this.scaleBaseHeight&&this.getScaleBaseHeight()>0?i=Math.min(i/(this.getScaleBaseWidth()/e.width),i/(this.getScaleBaseHeight()/e.height)):this.scaleFont&&this.getScaleBaseWidth()>0&&(i/=this.getScaleBaseWidth()/e.width);var n={fontSize:i+\"px\",lineHeight:\"\",paddingLeft:\"\",paddingRight:\"\"};if(\"undefined\"!=typeof this.lineSpacing&&(n.lineHeight=Math.max(1,this.getLineSpacing()+i)+\"px\"),this.scaleFont&&\"undefined\"!=typeof this.scaleBaseHeight){var o=this.getScaleBaseWidth()/this.getScaleBaseHeight(),a=o*e.height,r=e.width-a;if(r>0)switch(this.textAlign){case\"center\":n.paddingRight=Math.round(r/2)+\"px\",n.paddingLeft=Math.round(r/2)+\"px\";break;case\"right\":n.paddingLeft=Math.round(r)+\"px\";break;default:n.paddingRight=Math.round(r)+\"px\"}}extend(t,n)},getFontLoader:function(t){t=t||noop,!this.font.needsLoading()||FontBase.useCSSFontLoadingAPI||\"undefined\"!=typeof FontLoader?t():loadJS(creative.resourceUrl+\"runner-min/FontLoader.js\",t)},loadFont:function(t){t=t||noop;var e={fontFamily:this.font.family,fontProvider:this.font.provider,fontStretch:this.font.stretch||\"\",fontStyle:this.font.style,fontWeight:this.font.weight,fontTtfUrl:this.font.getFileUrl(\"ttf\")||\"\",fontWoffUrl:this.font.getFileUrl(\"woff\")||\"\",fontWoff2Url:this.font.getFileUrl(\"woff2\")||\"\"},i=creative.perf.start(\"TextStyleIntegrator.loadFont\",e);this.getFontLoader(function(){var n=creative.perf.start(\"TextStyleIntegrator.loadStyle\",e);this.font.loadStyle(function(o){e.errorMessage=o||\"\",n.end(),i.end(),o||(this.font.isCustom()&&this.callExternalPageViewCounter(),this.font.isMonotype()&&this.trackMonotypeUsage()),t(o)}.bind(this))}.bind(this))},setFont:function(t){var e=[\"provider\",\"family\",\"style\",\"weight\",\"stretch\",\"variation\",\"files\",\"baseUrl\"],i={};e.forEach(function(e){this.font.localId&&(i[e]=\"files\"===e?{}:this.font[e]),\"undefined\"!=typeof t[e]&&(i[e]=t[e])}.bind(this)),-1===[\"custom\",\"google\",\"web\"].indexOf(i.provider)&&(i.provider=\"custom\"),this.font.localId?(\"custom\"===i.provider&&i.family===this.font.family&&(i.family=this.font.family+\" (custom)\"),this.font=new FontBase(i)):extend(this.font,i),creative.track({name:\"retiredFeatureUsed\",featureType:\"apifunction\",featureName:\"TextStyleIntegrator.setFont\"})},callExternalPageViewCounter:function(){if(this.font.hasTrackingUrlDefined()&&\"live\"===creative.runtimeParams.purpose){var e=this.font.getTrackingUrl();if(-1===t.indexOf(e)){t.push(e);var i=document.createElement(\"img\");i.src=this.font.getTrackingUrl()}}},trackMonotypeUsage:function(){creative.runtimeParams.monotypeProjectId&&!creative.runtimeParams.monotypeUsageReported&&(creative.runtimeParams.monotypeUsageReported=1,creative.aggregatorTracking.trackAggregator(\"monotypeUsageReported\",{monotypeProjectId:creative.runtimeParams.monotypeProjectId,creativeId:creative.id}))}};window.TextStyleIntegrator=e}();;\nfunction Creative(e,t,r,n,i,a,o,s,u,c,d,m,p){if(e instanceof Creative)throw\"This JSON has already been unfreezed. We do it inline, to improve performance. Duplicate it yourself before unfreezing, if you need to use it again.\";var f=p.start(\"Creative.new\"),v=extend({adapter:a,runtimeParams:t||{},urlOpenedOverrideUrls:s,urlOpenedUrlAppendage:d,clickThroughDestinationUrl:m,storeOpenedOverrideUrls:u,macros:c},o),l=p.start(\"Creative.unfreeze\");return e=Freezer.unfreeze(e,window,v),l.end(),e.instantiation=randInt(),e.batcher=new Batcher({protoLoading:a.protoLoading}),e.trackingCenter=r,e.universalInteractionId=\"\",e.aggregatorTracking=n,e.experiments=i,e.perf=p,e.platformAdvId=t.platformAdvId,e.platformAdvIdTrackingLimited=t.platformAdvIdTrackingLimited,t.massProductionPreview&&extend(Creative.prototype,DiscoverableUnitsTrait),\"undefined\"!=typeof a&&null!==a&&(a.openBrowserSameWindowInHostileIFrame=function(e){window.top.location.href=e}),f.end(),e}Creative.toString=function(){return\"[Clazz Creative]\"},Creative.prototype.toString=function(){return\"[Creative \"+this.name+\"]\"},window.creative=null,extend(Creative.prototype,EventEmitter),Creative.init=function(e,t,r,n,i,a,o,s,u,c,d,m,p){if(window.creative)throw\"creative is a singleton and was already initialized.\";Logger.initFromRuntimeParams(t),window.creative=new Creative(e,t,r,n,i,a,o,s,u,c,d,m,p)},Creative.prototype.userInteracted=function(e){this.emit(\"interaction\",e)},Creative.prototype.clickedThrough=function(e){this.emit(\"clickThrough\",e)},Creative.prototype._getRuntimeParamsWithPrefix=function(e){var t={};for(var r in this.runtimeParams)0===r.indexOf(e)&&(t[r.slice(e.length)]=this.runtimeParams[r]);return t},Object.defineProperties(Creative.prototype,{sessionId:{enumerable:!0,get:function(){return this.runtimeParams.sessionId}},placementId:{enumerable:!0,get:function(){return this.runtimeParams.placementId||null}},folderId:{enumerable:!0,get:function(){return this.runtimeParams.folderId}},supplierId:{enumerable:!0,get:function(){return this.runtimeParams.supplierId||null}},secure:{enumerable:!0,get:function(){return 1==this.runtimeParams.secure}},userParams:{enumerable:!0,get:function(){return this._getRuntimeParamsWithPrefix(\"user.\")}},userIdentifiers:{enumerable:!0,get:function(){return this.runtimeParams.userIdentifiers}},authTokenUrlParam:{enumerable:!1,get:function(){return\"authBasis=\"+creative.runtimeParams.authBasis+\"&authToken=\"+creative.runtimeParams.authToken}},customAudiences:{enumerable:!0,get:function(){return function(e){if(!creative.runtimeParams.customAudiences[e])throw new Error('Custom audience \"'+e+'\" is not used by the creative.');return{userExists:creative.runtimeParams.customAudiences[e].userExists,userData:creative.runtimeParams.customAudiences[e].userData,addUser:function(t){return CustomAudiences.addUser(e,t)},removeUser:function(){return CustomAudiences.removeUser(e)}}}}},acceptLanguage:{enumerable:!0,get:function(){return this.runtimeParams.acceptLanguage}}}),Creative.prototype.awake=function(){function e(r,n,i,a){r.forEach(function(r){r.parentUnit=a,r.parentScreen=i,r.parentContainer=n;var o=r.getNestedContainers();o.forEach(function(n){n.parentUnit=a,n.parentScreen=i,n.parentObject=r,e(n.objects,n,i,a),n.scenes&&t(n.scenes,n,i,a)})})}function t(e,t,r,n){e.forEach(function(e){e.parentUnit=n,e.parentScreen=r,e.parentContainer=t})}var r=this;for(var n in r.units){var i=r.units[n];i.name=n;var a=[];i.variants?i.variants.forEach(function(e){a=a.concat(e.master,e.screens),e.loadingScreen&&(a=[e.loadingScreen].concat(a))}):(a=[i.master].concat(i.screens),i.loadingScreen&&(a=[i.loadingScreen].concat(a))),a.forEach(function(r){r.parentUnit=i,e(r.objects,r,r,i),r.scenes&&t(r.scenes,r,r,i)})}},Creative.prototype.track=function(e,t){[\"firstInteraction\",\"interaction\",\"endCardInteraction\",\"unitCollapsed\",\"creativeDismissed\",\"clickThroughDestinationOpened\",\"firstClickThrough\",\"itemSwiped\"].indexOf(e.name)>=0&&(e=extend(e,{universalInteractionId:this.universalInteractionId})),this.trackingCenter.track(e,t)},Creative.prototype.setUniversalInteractionId=function(e){this.universalInteractionId=e},Creative.prototype.wrapRedirectPageUrl=function(e,t){return this.trackingCenter.wrapRedirectPageUrl(e,t)},Object.defineProperty(Creative.prototype,\"sdk\",{get:function(){return this.adapter},enumerable:!0}),Creative._throw=function(e){throw e},Creative.prototype.getUserInteracted=function(){return 1==this.runtimeParams.userInteracted},Creative.prototype.trackCreativeRendered=function(){creative.adapter.notifycreativeRendered(),this._getCreativeRendered()||(this.track({name:\"creativeRendered\"}),this.runtimeParams.creativeRendered=1,defer(this.trackingCenter.batchFlush))},Creative.prototype._getCreativeRendered=function(){return 1===this.runtimeParams.creativeRendered},Creative.prototype.trackCreativeRenderedOnScreenShow=Creative.prototype.trackCreativeRendered,Creative.prototype.trackCreativeRenderedOnVideoStart=noop,Creative.trackCustomEventAction=function(e,t,r){var n=\"custom\";e.track({name:n,label:t.name}),creative.adapter.sendToEventMonitor(n,t.triggerId,e.screen.name,null,t.name),r&&r()},Creative.prototype.trackCreativeLoaded=function(e){this.track({name:\"creativeLoaded\",viewability00Measurable:e.observingViewability(\"00\"),viewability501Measurable:e.observingViewability(\"501\"),viewableTimeMeasurable:e.observingViewableTime(),cdnVariant:this.runtimeParams.variantChoices.CdnTiming||\"none\"}),defer(this.trackingCenter.batchFlush),this.perf._stopTrackingDefers=!0,this.perf.mark(\"creativeLoaded\")},Creative.prototype.createUserLocation=function(e){return\"undefined\"!=typeof UserLocation?new UserLocation({lat:this.runtimeParams.gpsLat,lng:this.runtimeParams.gpsLng},e):void 0},Creative.prototype.getPageUrl=function(e){return(this.secure?this.creativeUrl:this.insecureCreativeUrl)+e+\"?base64json=\"+encodeURIComponent(btoa(to_utf8(JSON.stringify(this.runtimeParams))))},Creative.prototype.shouldClickThroughToNewWindow=function(e){var t;t=[\"same\",\"new\"].indexOf(this.runtimeParams.preferredClickThroughWindow)>=0?this.runtimeParams.preferredClickThroughWindow:\"new\",creative&&creative.adapter.nesting.hostileIframe&&(t=\"new\");var r=e&&e.inUserInitiatedIteration,n=deviceInfo.os.android()&&deviceInfo.browser.facebookApp();return\"new\"==t&&r&&!n},Creative.prototype.getFeedFields=function(){return FeedData.getCustomFields()},Creative.prototype.getFeedFieldByName=function(e){return FeedData.getCustomFieldByName(e)},Creative.prototype.getAllFeedFieldsByName=function(e){return FeedData.getCustomFields().filter(function(t){return t.name===e})},Creative.prototype._hasSetter=function(e,t){var r=\"set\"+ucfirst(t),n=this.findByLocalId(e);return!!n&&\"undefined\"!=typeof n[r]},Creative.prototype.setValue=function(e,t,r){if(this._hasSetter(e,t)){var n=this.findByLocalId(e),i=\"set\"+ucfirst(t);n[i](r)}};;\nfunction Banner(){}inherit(Banner,Creative),Banner.toString=function(){return\"[Clazz Banner]\"},Banner.prototype.toString=function(){return\"[Banner \"+this.name+\"]\"},Banner.prototype.awake=function(){Banner.uber.awake.apply(this,arguments),this.adapter.wrapRedirectPageUrl=this.wrapRedirectPageUrl.bind(this),this.units.banner.dismissAction=function(n,e,t){n.track({name:\"creativeDismissed\"}),creative.adapter.dismiss(t,e)}.bind(this),this.units.banner.trackCreativeDismissed=function(){new ActionContext(this.visibleScreen).track({name:\"creativeDismissed\"})},this.units.banner.userLocation=this.createUserLocation(!1)};;\nvar Kernel={};Kernel.toString=function(){return\"[Clazz Kernel]\"},Kernel.runInParallelAction=function(e,n,t){n.actions.waitForEach(function(n,t){n(e,t)},t)},Kernel.runInParallelActionDryRun=Kernel.runInParallelAction,Kernel.runInBackgroundAction=function(e,n,t){n.action&&n.action(e,noop),t()},Kernel.runInSequenceAction=function(e,n,t){for(var r=t,i=n.actions.length-1;i>=0;i--)r=function(n,t){return function(){t(e,n)}}(r,n.actions[i]);r()},Kernel.runInSequenceActionDryRun=Kernel.runInSequenceAction,Kernel.runNTimesAction=function(e,n,t){n.caller.hasOwnProperty(\"executionsLeft\")||(n.caller.executionsLeft=n.repeat),n.caller.executionsLeft>0?(n.caller.executionsLeft--,(n.action||nullai)(e,t)):t&&t()},Kernel.runNTimesActionDryRun=function(e,n,t){(n.action||nullai)(e,t)},Kernel.loopAction=function(e,n,t){function r(){return 0==i?t():(-1!=i&&i--,void(n.action||nullai)(e,\"thumb\"===creative.runtimeParams.purpose?t:r))}var i=n.repeat;r()},Kernel.loopActionDryRun=function(e,n,t){(n.action||nullai)(e,t)},Kernel.sleepAction=function(e,n,t){setTimeout(t,n.duration)},Kernel.executeJavascriptAction=function(e,n,t){try{var r=e.initiator,i=e.screen.parentUnit,c=e.screen,a=new Function(\"ctx\",\"c\",\"unit\",\"screen\",\"variant\",n.script.code),o=!1,u=i.getVariantForScreen?i.getVariantForScreen(c):void 0;null!==n.script.code.match(/http:/)&&this._track(\"executeJavascriptAction.code\");var l=function(){o?console.warn('Multiple calls made to \"c()\" from \"'+e.initiator.fieldName+'\" Execute JS Action'):(t(),o=!0)}.bind(this);a.call(r,e,l,i,c,u)}catch(s){console.error(s.message+\"\\n\"+s.stack)}},Kernel.randomAction=function(e,n,t){var r=0;if(n.outcomes.forEach(function(e){r+=e.weight}),!r)return t();for(var i=Math.random()*r,c=0;c<n.outcomes.length;c++){var a=n.outcomes[c];if(i-=a.weight,0>i)return(a.action||nullai)(e,t)}},Kernel.randomActionDryRun=function(e,n,t){n.outcomes.forEach(function(n){(n.action||nullai)(e,noop)}),t()},Kernel.bestAction=function(e,n,t){var r=creative.experiments.get(\"Best\",[creative.id,n.experimentName]);r.trackExposure();var i=n.outcomes.filter(function(e){return e.experimentVariant==r.chosenVariant})[0],c=i?i:n.outcomes[0];(c.action||nullai)(e,t)},Kernel.bestActionDryRun=function(e,n,t){var r=creative.experiments.get(\"Best\",[creative.id,n.experimentName]),i=n.outcomes.filter(function(e){return e.experimentVariant==r.chosenVariant})[0],c=i?i:n.outcomes[0];(c.action||nullai)(e,t)},Kernel.trackBestVariantSuccessAction=function(e,n,t){var r=creative.experiments.get(\"Best\",[creative.id,n.experimentName]);r.trackSuccess(),creative.adapter.sendToEventMonitor(\"trackBestVariantSuccess\",n.triggerId,e.screen.name,r.chosenVariant,\"\"),t()},Kernel._track=function(e){this._privateApiTracked=this._privateApiTracked||{},this._privateApiTracked[e]||(this._privateApiTracked[e]=!0,creative.track({name:\"retiredFeatureUsed\",featureType:\"loadingInsecureContent\",featureName:e}))};;\n;\nfunction Scene(){}Scene.instances=[],Scene.prototype.awake=function(){this._framesPerSecond=this.framesPerSecond&&null!==this.framesPerSecond?this.framesPerSecond:20,this._framesPerPixel=.1,this._durationInFrames=0,this._durationInMilliseconds=0,this._durationInPixels=0,this._isReactiveScene=\"reactiveBanner\"===this.type,this._lastUpdateObjectsProgress=0,this._claimedObjects=[],this._keyframeAnimations=Object.create(null),this._rawInitialValues=[],this._initSceneOnRenderApiCall=!0,this._suspended=!1,this.fallbackFrameShown=!1,this.forceFallbackFrame=!1,this.intersection=\"undefined\"!=typeof this.intersection?this.intersection:50,this._appearedBefore=!1,this._calculateDurations=this._calculateDurations.bind(this),this._buildKeyframeAnimations=this._buildKeyframeAnimations.bind(this),this._removeAnimatedClass=this._removeAnimatedClass.bind(this),this._renderAtProgress=this._renderAtProgress.bind(this),this._initPlayer(),this.parentContainer.on(\"appeared\",this._appear.bind(this)),this.parentContainer.on(\"disappeared\",this._dissapear.bind(this)),this.parentContainer.on(\"resize\",this._calculateDurations),this.parentContainer.on(\"resize\",this._buildKeyframeAnimations),this.parentContainer.on(\"resize\",this._renderAtProgress),this.parentUnit.on(\"layoutChanged\",this._calculateDurations),this.parentUnit.on(\"layoutChanged\",this._buildKeyframeAnimations),this.parentUnit.on(\"layoutChanged\",this._renderAtProgress),Scene.instances.push(this)},Scene._sizeProperties=[\"width\",\"height\"],Scene._positionProperties={horizontal:[\"left\",\"hcenter\",\"right\"],vertical:[\"top\",\"vcenter\",\"bottom\"]},Object.defineProperty(Scene.prototype,\"paused\",{get:function(){return this._player.paused}}),Scene.prototype._initPlayer=function(){var e=window[this.type.charAt(0).toUpperCase()+this.type.slice(1)+\"ScenePlayer\"];this._player=new e(this),this._player.on(\"stop\",this._resetRawInitialValues.bind(this)),this._player.on(\"end\",this._updateRawFinalValuesForAllLayouts.bind(this)),this._player.on(\"pause\",this._removeAnimatedClass),this._player.on(\"stop\",this._removeAnimatedClass)},Scene.prototype._removeAnimatedClass=function(){for(var e in this._claimedObjects)removeClass(this._claimedObjects[e].node,\"animated\")},Scene.prototype._getMaxFrameNumber=function(){var e=0;for(var t in this.objects){var i=this.objects[t],a=this.parentUnit.layoutCurrentIndex;for(var n in i.layoutSpecificValues[a]){var s=i.layoutSpecificValues[a][n];e=Math.max(e,s.frame)}}return e},Scene.prototype._calculateDurations=function(){this._durationInFrames=this._getMaxFrameNumber(),this._durationInMilliseconds=this._durationInFrames/this._framesPerSecond*1e3,this._durationInPixels=this._durationInFrames/this._framesPerPixel},Scene.prototype._captureRawInitialValues=function(e){this._rawInitialValues[e.localId]=[];for(var t=this.parentScreen.parentContainer.layouts.length,i=0;t>i;i++){var a=e.layoutSpecificValues[i];this._rawInitialValues[e.localId][i]=extend({rotation:a.rotation,opacity:a.opacity,hidden:a.hidden},a.position,a.size)}},Scene.prototype._calculateFinalValuesForObject=function(e){var t=[];for(var i in this.objects){var a=this.objects[i];if(a.target.localId==e.localId)for(var n in a.layoutSpecificValues){t[n]=Object.create(null);for(var s in a.layoutSpecificValues[n]){var r=a.layoutSpecificValues[n][s];for(var o in r.properties)null!==r.properties[o].value&&(t[n][o]=r.properties[o].value)}}}return t},Scene.prototype._updateRawFinalValuesForAllLayouts=function(){if(\"reverse\"!==this.onEnd)for(var e in this._claimedObjects)for(var t=this._claimedObjects[e],i=this._calculateFinalValuesForObject(t),a=this.parentScreen.parentContainer.layouts.length,n=0;a>n;n++){var s=t.layoutSpecificValues[n],r=i[n];Scene._updateLayoutWithValues(s,r)}},Scene.prototype._buildKeyframeAnimations=function(){this._keyframeAnimations=Object.create(null);for(var e=this.parentUnit.layoutCurrentIndex,t=0;t<this.objects.length;t++){var i=this.objects[t],a=i.layoutSpecificValues[e];this._keyframeAnimations[i.target.localId]={firstFrameAnimated:!1},a.sort(function(e,t){return e.frame-t.frame});for(var n=0,s=Object.create(null),r=0;r<a.length;r++){var o=a[r];n=0===this._durationInFrames?0:o.frame/this._durationInFrames*100,s[String(n)]=Scene._extractPropertyValues(o.properties),0===~~r&&(this._keyframeAnimations[i.target.localId].startKeyframe=n)}this._keyframeAnimations[i.target.localId].endKeyframe=n;var l=KeyframeAnimation.getUsedProperties(s);this._rawInitialValues[i.target.localId]||this._captureRawInitialValues(i.target);var c=this._rawInitialValues[i.target.localId][e];Scene._fillInInitialAndDynamicKeyframeValues(s,c,l);var h=i.target.parentContainer.size;for(var p in s)Scene._keyframeWithUnitsToKeyframePx(s[p],h);var u=new KeyframeAnimation(s,null,l);this._keyframeAnimations[i.target.localId].animation=u}},Scene.prototype._dissapear=function(){(!this._player.paused||this.fallbackFrameShown)&&this._suspendScene()},Scene.prototype._appear=function(){this._appearedBefore||(creative.adapter.canMeasureViewportPlacementGeometry?this.parentScreen.parentContainer.inView.on(\"areaInViewRatioChanged\",this._handleAreaInViewRatioChanged.bind(this)):creative.adapter.containerViewabilityObserver&&creative.adapter.on(\"containerViewableChange\",this._handleContainerViewableChange.bind(this))),(this._player.supportsAutoplay&&this.autoPlay&&!this._appearedBefore||this._suspended)&&this._playSceneOrDisplayFallbackFrame(),this._appearedBefore=!0},Scene.prototype._initAnimations=function(){for(var e in this.objects){var t=this.objects[e].target;this.claimObject(t)}this._calculateDurations(),this._buildKeyframeAnimations()},Scene.prototype._playSceneOrDisplayFallbackFrame=function(){this._initSceneOnRenderApiCall||this._resetRawInitialValues(),this._initSceneOnRenderApiCall=!0,this.fallbackFrameShown=this._player.supportsFallback&&(!creative.adapter.assumeScrollSupported||this.forceFallbackFrame),!this._player.paused&&this.fallbackFrameShown&&this._player.pause(),this._suspended||this._initAnimations(),0!=this._claimedObjects.length&&(this.fallbackFrameShown?this._player.displayFallbackFrame(this.fallbackFrame/this._durationInFrames*100):this._player.play(),this._suspended=!1)},Scene.prototype._pauseScene=function(){this._player.pause()},Scene.prototype._stopScene=function(){this._player.stop()},Scene.prototype._resetRawInitialValues=function(){for(var e in this.objects)delete this._rawInitialValues[this.objects[e].target.localId]},Scene.prototype._suspendScene=function(){this._player.pause(),this._suspended=!0},Scene.prototype._handleAreaInViewRatioChanged=function(e){e>0&&this._suspended?this._playSceneOrDisplayFallbackFrame():0!==e||this._player.paused||this._suspendScene()},Scene.prototype._handleContainerViewableChange=function(e){e&&this._suspended?this._playSceneOrDisplayFallbackFrame():e||this._player.paused||this._suspendScene()},Scene.prototype.getDuration=function(){return{frames:this._durationInFrames,pixels:this._durationInPixels,milliseconds:this._durationInMilliseconds}},Scene.prototype.updateObjects=function(e){for(var t in this._claimedObjects){var i=this._claimedObjects[t];if(i.node){if(i.isAnimated){var a=this._keyframeAnimations[i.localId],n=e>=a.startKeyframe,s=e<=a.endKeyframe||!a.firstFrameAnimated,r=this._lastUpdateObjectsProgress>a.startKeyframe&&e<a.startKeyframe,o=this._lastUpdateObjectsProgress<a.endKeyframe&&e>a.endKeyframe,l=this._isReactiveScene&&(r||o),c=n&&s||this.fallbackFrameShown||l;if(c)a.firstFrameAnimated=!0,hasClass(i.node,\"animated\")||addClass(i.node,\"animated\");else{if(!hasClass(i.node,\"animated\"))continue;removeClass(i.node,\"animated\")}}var h=this._keyframeAnimations[i.localId].animation.getValuesAt(e);Scene._updateLayoutWithValues(i.layoutCurrent,h),i._keyframeStyle=i._calculateNewStyleAttributes()}}this._lastUpdateObjectsProgress=e},Scene.prototype.renderObjects=function(){for(var e in this._claimedObjects){var t=this._claimedObjects[e];t.node&&(t._applyStyles(t.node,t._keyframeStyle),t.redrawLayout())}},Scene.prototype.getPlayer=function(){return this._player},Scene.prototype.claimObject=function(e){if(-1===this._claimedObjects.indexOf(e)){for(var t=0;t<Scene.instances.length;t++){var i=Scene.instances[t];i!==this&&(i.releaseObject(e),delete this._rawInitialValues[e.localId])}this._claimedObjects.push(e)}e._keyframeStyle=e._calculateNewStyleAttributes();for(var t=0;t<Scene.instances.length;t++){var i=Scene.instances[t];0!=i._claimedObjects.length||i.paused||i._player.stop()}},Scene.prototype.releaseObject=function(e){var t=this._claimedObjects.indexOf(e);this._initSceneOnRenderApiCall=!0,-1!==t&&(delete this._claimedObjects[t]._keyframeStyle,this._claimedObjects=this._claimedObjects.slice(0,t).concat(this._claimedObjects.slice(t+1)))},Scene.prototype.renderFirstFrame=function(){this._initAnimations(),this._renderAtProgress(0)},Scene.prototype._renderAtProgress=function(e){e=this.fallbackFrameShown?this.fallbackFrame/this._durationInFrames*100:void 0!==e?e:this._player.progress,this.updateObjects(e),this.renderObjects()},Scene.prototype.renderAtProgress=function(e){this._player.paused&&void 0!==e&&(this._initSceneOnRenderApiCall&&(this._initSceneOnRenderApiCall=!1,this._initAnimations()),this._renderAtProgress(e))},Scene.prototype.playSceneAction=function(e,t,i){var a=-1===[\"repeat\",\"reverse\"].indexOf(this.onEnd),n=\"repeat\"==this.onEnd&&!isNaN(this.onEndRepeatCount)&&this.onEndRepeatCount>0,s=\"reverse\"==this.onEnd&&!isNaN(this.onEndReverseCount)&&this.onEndReverseCount>0,r=this.onEndWaitForCount&&(n||s);a||r?(this._player.once(\"stop\",i),this._playSceneOrDisplayFallbackFrame()):(this._playSceneOrDisplayFallbackFrame(),i())},Scene.prototype.pauseSceneAction=function(e,t,i){\"time\"===this.type&&(this._pauseScene(),i())},Scene.prototype.stopSceneAction=function(e,t,i){\"time\"===this.type&&(this._stopScene(),i())},Scene.prototype.resetAction=function(e,t,i){this._player&&(this._stopScene(),this._player.destroy()),this._initPlayer(),this._suspended=!1,i()},Scene._extractPropertyValues=function(e){var t=Object.create(null);for(var i in e)t[i]={value:e[i].value,timingFunction:Scene._getTimingFunctionByName(e[i].timingFunction)};return t},Scene._keyframeWithUnitsToKeyframePx=function(e,t){for(var i=0;i<Scene._sizeProperties.length;i++){var a=Scene._sizeProperties[i];if(a in e){var n=e[a].value,s=parseFloat(n);isNaN(s)||(n.indexOf(\"%\")>-1&&(s=s/100*t[a]),e[a].value=s)}}for(var r in Scene._positionProperties)for(var o=\"horizontal\"==r?\"width\":\"height\",l=Scene._positionProperties[r],c=0;c<l.length;c++){var h=l[c];if(h in e){var p=e[h].value,u=parseFloat(p);isNaN(u)||(p.indexOf(\"%\")>-1&&(u=u/100*t[o]),e[h].value=u)}}},Scene._getTimingFunctionByName=function(e){return e?KeyframeAnimation.Timing[camelize(e)]:null},Scene._fillInInitialAndDynamicKeyframeValues=function(e,t,i){e[0]||(e[0]=Object.create(null));for(var a in t)!e[0][a]&&i.indexOf(a)>-1&&(e[0][a]={value:t[a],timingFunction:Scene._getTimingFunctionByName(\"none\")});for(var n in e)for(var s in e[n])e[n][s]&&null===e[n][s].value&&(e[n][s].value=t[s])},Scene._ensureSizeOrPositionValueHasUnits=function(e){return e=String(e),e.indexOf(\"%\")>-1||e.indexOf(\"px\")>-1?e:e+\"px\"},Scene._updateLayoutWithValues=function(e,t){var i=extend({},e.position),a=!1;for(var n in Scene._positionProperties)for(var s=Scene._positionProperties[n],r=0;r<s.length;r++){var o=s[r];if(o in t){for(var l=0;l<s.length;l++){var c=s[l];delete i[c]}i[o]=Scene._ensureSizeOrPositionValueHasUnits(t[o]),a=!0}}a&&(e.position=i),\"width\"in t&&(e.size.width=Scene._ensureSizeOrPositionValueHasUnits(t.width)),\"height\"in t&&(e.size.height=Scene._ensureSizeOrPositionValueHasUnits(t.height)),\"rotation\"in t&&(e.rotation=t.rotation),\"opacity\"in t&&(e.opacity=t.opacity),\"hidden\"in t&&(e.hidden=t.hidden)};;\nfunction View(){}extend(View.prototype,EventEmitter),View.prototype.awake=function(){this.node=null,this._loadingCount=null,this._waitingForLoadCallbacks=[],this._isAppearing=!1,this._hasAppearedAtLeastOnce=!1,this._shouldAppear=!1,this.incrementLoadingCount=this.incrementLoadingCount.bind(this),this.decrementLoadingCount=this.decrementLoadingCount.bind(this),this._preloadImage=this._preloadImage.bind(this),this._loadImage=this._loadImage.bind(this),this._trackViewShown=this._trackViewShown.bind(this),this.isTrackable&&this.once(\"appeared\",this._trackViewShown),this.hacks={}},View.prototype.incrementLoadingCount=function(){if(this.loaded)throw\"Starting loads after the view has already finished loading?\";this._loadingCount++},View.prototype.decrementLoadingCount=function(){if(!this.loading)throw\"decrementLoadingCount called while not loading!\";if(!--this._loadingCount){this.finishedLoading();for(var e=this._waitingForLoadCallbacks,t=0;t<e.length;t++)e[t]();this._waitingForLoadCallbacks=[]}},View.prototype._preloadImage=function(e,t,i){if(!(e instanceof File))throw\"file is not a File\";\"function\"==typeof t?(i=t,t={}):\"undefined\"==typeof t&&(t={}),this.incrementLoadingCount();var n=creative.perf.start(\"View.preloadImage\",{uri:e.getUrl(t.creativeUnitVariantId)});this._loadImage(e,t,function(e,t){n.end(),\"function\"==typeof i&&i(e,t),this.decrementLoadingCount()}.bind(this))},View.prototype._loadImage=function(e,t,i){if(!(e instanceof File))throw\"file is not a File\";\"function\"==typeof t?(i=t,t={}):\"undefined\"==typeof t&&(t={});var n=\"batching\"===creative.runtimeParams.variantChoices.BatchComponentAssets,o=n||t.preferBatching,a=new Image,r=!1;return e.getDataUri({preferBatching:o,creativeUnitVariantId:t.creativeUnitVariantId},function(e){r||(t.crossOrigin&&(a.crossOrigin=t.crossOrigin),a.onload=a.onerror=function(){a.onload=a.onerror=null,i&&i(a,e)},a.src=e)}),function(){r=!0,a.onload=a.onerror=null,a.src=\"\"}},View.prototype.finishedLoading=function(){this.emit(\"loaded\")},Object.defineProperty(View.prototype,\"loaded\",{get:function(){return this.node&&!this.loading}}),Object.defineProperty(View.prototype,\"loading\",{get:function(){return this._loadingCount>0}}),View.prototype.createNode=function(){this.on(\"loaded\",creative.perf.start(\"View.load\",{clazz:this.constructor.name,name:this.name}).end);var e=document.createElement(\"div\");\"undefined\"!=typeof creative&&creative.adapter&&creative.adapter.useNativeClickForTapDetection&&(e.style.touchAction=\"manipulation\"),this.localId&&(e.id=\"celtra-object-\"+this.localId);for(var t=this.constructor;t;t=t.uber?t.uber.constructor:void 0)e.className+=\" celtra\"+t.name.replace(/[A-Z]/g,function(e){return\"-\"+e.toLowerCase()});return e},View.prototype.getNode=function(e){return this.loaded?e&&defer(e,0,\"View.getNode defer finishedLoadingCallback\",useAsap()):(e&&this._waitingForLoadCallbacks.push(e),this.node||(this.incrementLoadingCount(),this.node=this.createNode(),defer(this.decrementLoadingCount,0,\"View.getNode defer decrementLoadingCount\",useAsap()))),this.node},Object.defineProperty(View.prototype,\"isAppearing\",{get:function(){return this._isAppearing}}),Object.defineProperty(View.prototype,\"hasAppearedAtLeastOnce\",{get:function(){return this._hasAppearedAtLeastOnce}}),View.prototype.appear=function(){var e=\"View APPEAR called on \"+this.constructor.name+\" \"+this.localId+\" (name=\"+this.name+\")\";this.parentContainer&&(e+=\" from \"+this.parentContainer.constructor.name+\" \"+this.parentContainer.localId+\" (name=\"+this.parentContainer.name+\")\"),Logger(\"events.appear\").log(e),this.hidden?this._shouldAppear=!0:this.isAppearing||(this._appear(),this._isAppearing=!0,this._hasAppearedAtLeastOnce=!0,this.emit(\"appeared\"))},View.prototype.disappear=function(){var e=\"View DISAPPEAR called on \"+this.constructor.name+\" \"+this.localId+\" (name=\"+this.name+\")\";this.parentContainer&&(e+=\" from \"+this.parentContainer.constructor.name+\" \"+this.parentContainer.localId+\" (name=\"+this.parentContainer.name+\")\"),Logger(\"events.appear\").log(e),this.isAppearing&&(this._disappear(),this._isAppearing=!1,this._shouldAppear=!1,this.emit(\"disappeared\"))},View.prototype.reset=function(){this.isAppearing&&(this._shouldAppear=this.hidden,this._isAppearing=!this.hidden)},View.prototype._appear=function(){},View.prototype._disappear=function(){},View.prototype.appearNestedObjects=function(){this.objects.forEach(function(e){e.appear()},this)},View.prototype.disappearNestedObjects=function(){this.objects.forEach(function(e){e.disappear()},this)},View.prototype._trackViewShown=function(e){var t={name:\"viewShown\",viewName:this.name,clazz:this.constructor.name};new ActionContext(this,!1).track(extend(t,e))};;\nBaseCreativeUnit.prototype.alert=function(e,t){var a=this.size.width,r=this.size.height,l=e.boxWidth||320,n=e.boxHeight||160;e.message=removeHtmlTags(e.message),a>=l&&r>=n?this.showModalDialogInPlacement(\"alert\",e,t):(alert(e.message),t())},BaseCreativeUnit.prototype.prompt=function(e,t){var a=this.size.width,r=this.size.height,l=e.boxWidth||320,n=e.boxHeight||190;if(a>=l&&r>=n)this.showModalDialogInPlacement(\"prompt\",e,t);else{var i=prompt(removeHtmlTags(e.message));t(i)}},BaseCreativeUnit.prototype._getUniqueId=function(){var e=new Date,t=e.getTime()+Math.random();return t},BaseCreativeUnit.prototype.showModalDialogInPlacement=function(e,t,a){var r=this._getUniqueId(),l={};l[r]={attachment:\"body\",positioning:\"screen\",type:\"layer\"},creative.adapter.createPlacements(l,function(){function l(e){13==e.keyCode&&(creative.adapter.destroyPlacement(r),o=null,a(C.value))}function n(e){e.preventDefault(),e.stopPropagation()}function i(t){t.preventDefault(),t.stopPropagation(),creative.adapter.destroyPlacement(r),o=null,\"prompt\"==e?a(C.value):a()}function s(e){e.preventDefault(),e.stopPropagation(),creative.adapter.destroyPlacement(r),o=null,a(null)}if(window){var o=creative.adapter.placements[r];o.setZIndex(\"max\"),o.setSize(\"100%\",\"100%\"),o.setPosition(0,0);var d=o.createElement(\"link\");d.rel=\"stylesheet\",d.type=\"text/css\",d.href=creative.resourceUrl+\"runner-min/clazzes/ModalDialogs-Overlay.css\",o.getContainer().appendChild(d);var c=o.createElement(\"div\");addClass(c,\"celtra-alert\"),c.style.display=\"none\";var p=o.createElement(\"div\");addClass(p,\"celtra-alert-dark-overlay\"),c.appendChild(p),this.preventScroll(c);var h=o.createElement(\"div\");if(addClass(h,\"celtra-alert-box\"),t.title&&\"\"!=t.title){var m=o.createElement(\"h1\");addClass(m,\"celtra-alert-title\"),m.innerHTML=t.title,h.appendChild(m)}if(t.title&&\"\"!=t.title&&t.message&&\"\"!=t.message){var v=o.createElement(\"hr\");addClass(v,\"celtra-alert-dark-line\"),h.appendChild(v);var u=o.createElement(\"hr\");addClass(u,\"celtra-alert-light-line\"),h.appendChild(u)}if(t.message&&\"\"!=t.message){var g=o.createElement(\"div\");addClass(g,\"celtra-alert-message\"),g.innerHTML=t.message,h.appendChild(g)}if(\"prompt\"==e){var C=o.createElement(\"input\");addClass(C,\"celtra-alert-input\"),C.value=t.defaultValue||\"\",h.appendChild(C),attach(C,\"keypress\",l)}var f=o.createElement(\"div\");if(addClass(f,\"celtra-alert-ok\"),f.innerHTML=\"OK\",h.appendChild(f),this.preventScroll(h),once(f,\"touchend\",i,!1),\"prompt\"==e&&t.showCancel){addClass(f,\"with-cancel\");var y=o.createElement(\"div\");addClass(y,\"celtra-alert-cancel\"),y.innerHTML=\"CANCEL\",h.appendChild(y),attach(f,\"touchstart\",n,!1),once(y,\"touchend\",s,!1)}c.appendChild(h),o.populate(c,function(){o.show();var e=setInterval(function(){\"absolute\"===celtra.styler.computedCSS(h,\"position\")&&(computedBoxHeight=parseInt(celtra.styler.computedCSS(h,\"height\"),10)+parseInt(celtra.styler.computedCSS(h,\"paddingTop\"),10)+parseInt(celtra.styler.computedCSS(h,\"paddingBottom\"),10),h.style.marginTop=-computedBoxHeight/2+\"px\",h.style.opacity=1,clearInterval(e),e=null)},100)})}}.bind(this))},BaseCreativeUnit.prototype.preventScroll=function(e){var t=[\"mousewheel\",\"touchmove\"];t.forEach(function(t){attach(e,t,function(e){e.preventDefault()},!1)})};;\nfunction CreativeUnit(){}inherit(CreativeUnit,BaseCreativeUnit),extend(CreativeUnit.prototype,ScreenTransitioner),CreativeUnit.IGNORABLES=BaseCreativeUnit.IGNORABLES,CreativeUnit.DEBUG_EXTRA_PHASE_DELAY=0,CreativeUnit.toString=function(){return\"[Clazz CreativeUnit]\"},CreativeUnit.prototype.toString=function(){return\"[CreativeUnit \"+this.name+\" (\"+this.localId+\")]\"},Object.defineProperty(CreativeUnit.prototype,\"size\",{get:function(){var t=this.getAvailableSize();return this.layoutCurrent||this._updateActiveLayout(this._getOrientation(),t.width,t.height),\"responsive\"===this.sizing?{width:t.width,height:t.height}:{width:this.layoutCurrent.unitSize.width,height:this.layoutCurrent.unitSize.height}},set:function(){}}),Object.defineProperty(CreativeUnit.prototype,\"unitAlignment\",{get:function(){return\"undefined\"==typeof this.layoutCurrent.unitAlignment?{}:this.layoutCurrent.unitAlignment}}),Object.defineProperty(CreativeUnit.prototype,\"layoutCurrent\",{get:function(){return this.layouts[this.layoutCurrentIndex]}}),Object.defineProperty(CreativeUnit.prototype,\"hasOverflow\",{get:function(){return this.screens.concat([this.master]).filter(function(t){return t.showOverflow}).length>0}}),Object.defineProperty(CreativeUnit.prototype,\"hasScreens\",{get:function(){return this.screens.length>0}}),Object.defineProperty(CreativeUnit.prototype,\"currentScreen\",{set:function(t){this._currentScreen!==t&&(this._currentScreen=t,this.emit(\"shareableStateChanged\"))},get:function(){return this._currentScreen}}),CreativeUnit.prototype._getDestinationScreen=function(){var t=this.hasScreens?this.screens[0]:this.master;if(\"modal\"==this.name&&\"undefined\"!=typeof creative.runtimeParams.goToPageAfterExpand){var e=creative.runtimeParams.goToPageAfterExpand;if(\"string\"!=typeof e)throw new TypeError(\"Only string type is allowed to reference destination screen!\");var i=this.screens.filter(function(t){return t.title===e});i.length>0&&(t=i[0])}return t},CreativeUnit.prototype.awake=function(){var t=this;CreativeUnit.uber.awake.call(this),this._currentScreen=null,this.visibleScreen=null,this.overflowsY=!1,this.layoutCurrentIndex=null,this._preloadReachableScreens=this._preloadReachableScreens.bind(this),this.screens.forEach(function(t){t.objects.forEach(function(t){t.zIndex+=ScreenObject._zIndexOffset})}),\"undefined\"==typeof this.backgroundColor&&(this.backgroundColor=\"#000000\"),\"undefined\"==typeof this.usePlaceboBar&&(this.usePlaceboBar=!1),\"undefined\"==typeof this.showCloseButton&&(this.showCloseButton=!1),\"undefined\"==typeof this.alignBackButtonHorizontal&&(this.alignBackButtonHorizontal=\"left\"),this.on(\"_firstScreenLoaded\",function(){t.placeboBar&&(t.placeboBar.parentNode.removeChild(t.placeboBar),t.placeboBar=null),this.initiateScreenTransition(this._getDestinationScreen())}.bind(this)),this.onAll(\"_firstScreenLoaded _unitFirstShown\",function(){this.goToScreen(this._getDestinationScreen(),null)}.bind(this)),this.triggerOrientationChange=this.triggerOrientationChange.bind(this),this.updateWindowMetrics=this.updateWindowMetrics.bind(this),this.hacks.triggerBlurWhenTappingOutsideOfInputs=ios()},CreativeUnit.prototype.setAvailableSize=function(t,e){var i=CreativeUnit.uber.setAvailableSize.apply(this,arguments),n=this._getOrientation(),o=this.layouts[this.layoutCurrentIndex];this._updateActiveLayout(n,t,e),this.updateWindowMetrics(n,t,e);var r=this._previousOrientation&&n!=this._previousOrientation,s=o&&o.orientation!=this.layoutCurrent.orientation;(r||s)&&this.triggerOrientationChange(),this._previousOrientation=n,(i||s)&&this.emit(\"resize\")},CreativeUnit.prototype._getOrientation=function(){return creative.adapter.orientation%180===0?\"portrait\":\"landscape\"},CreativeUnit.prototype._updateActiveLayout=function(t,e,i){{var n=this.layouts.slice(),o=this.layoutCurrentIndex;this.layouts[o]||null}n.forEach(function(n){n.sortIndex=0,\"independent\"==n.orientation?n.sortIndex+=1:n.orientation!=t&&(n.sortIndex+=4e3),n.minSize.width>e&&(n.sortIndex+=2e3),n.minSize.height>i&&(n.sortIndex+=2e3),n.sortIndex+=Math.abs(n.minSize.width-e)+Math.abs(n.minSize.height-i)}),n.sort(function(t,e){return t.sortIndex-e.sortIndex}),this.layoutCurrentIndex=this.layouts.indexOf(n[0]),o!=this.layoutCurrentIndex&&this.emit(\"layoutChanged\")},CreativeUnit.prototype.enterRenderTree=function(){if(!this._isRendering){this._isRendering=!0;var t=this.getAvailableSize();this.updateWindowMetrics(this._getOrientation(),t.width,t.height),this.master&&(this.master.loaded?defer(this.master.enterRenderTree.bind(this.master),void 0,void 0,useAsap()):this.once(\"_firstScreenLoaded\",this.master.enterRenderTree.bind(this.master))),this.visibleScreen&&defer(this.visibleScreen.enterRenderTree.bind(this.visibleScreen),void 0,void 0,useAsap()),this.hacks.triggerBlurWhenTappingOutsideOfInputs&&(attach(this.node,\"touchstart\",function(t){-1==[\"INPUT\",\"TEXTAREA\",\"SELECT\"].indexOf(t.target.nodeName)&&null!=this.lastInputElementFocused&&this.lastInputElementFocused.blur()}.bind(this),!0),attach(this.node,\"focus\",function(t){[\"INPUT\",\"TEXTAREA\",\"SELECT\"].indexOf(t.target.nodeName)>-1&&(this.lastInputElementFocused=t.target)}.bind(this),!0),attach(this.node,\"blur\",function(t){[\"INPUT\",\"TEXTAREA\",\"SELECT\"].indexOf(t.target.nodeName)>-1&&(this.lastInputElementFocused=null)}.bind(this),!0))}},CreativeUnit.prototype.exitRenderTree=function(){this._isRendering&&(this._isRendering=!1,this.master&&this.master.exitRenderTree(),this.visibleScreen&&this.visibleScreen.exitRenderTree())},CreativeUnit.prototype._appear=function(){this.loaded||Creative._throw(\"Cannot show the unit before it has finished loading.\"),this.isAppearing&&Creative._throw(\"The unit is already appearing.\"),this.node.parentNode||Creative._throw(\"Creative unit must be added to DOM before show() is called. Animations will start on show().\"),Logger(\"unit\").log(\"Showing \"+this),this.inView&&(this.inView.start(),this.currentScreen&&this.currentScreen.inView&&this.currentScreen.inView.start()),this.hasAppearedAtLeastOnce||(this.placeboBar&&this.placeboBar.start(),this._orientationLockIsOn?this._emitUnitFirstShownAfterOrientationPrompt=!0:this.emit(\"_unitFirstShown\"))},CreativeUnit.prototype._disappear=function(){this.isAppearing||Creative._throw(\"The unit is not appearing, can not disappear.\"),Logger(\"unit\").log(\"Hiding \"+this),this.inView&&this.inView.stop()},CreativeUnit.prototype.createNode=function(){creative.runtimeParams.massProductionPreview&&(extend(CreativeUnit.prototype,DiscoverableScreensTrait),extend(CreativeUnit.prototype,TraversableScreensTrait));var t=this.unitDiv=CreativeUnit.uber.createNode.call(this);if(t.id=\"celtra-\"+this.name.replace(/[A-Z]/g,function(t){return\"-\"+t.toLowerCase()}),Color.isGradient(this.backgroundColor)?addCssRule(\"#\"+t.id,Color.createGradientStyle(this.backgroundColor)):t.style.backgroundColor=this.backgroundColor,t.style.overflow=this.master.showOverflow?\"visible\":\"hidden\",this.screenContainer=document.createElement(\"div\"),this.screenContainer.className=\"celtra-screen-container\",this.screenContainer.style.position=\"absolute\",t.appendChild(this.screenContainer),this.screenHolder=document.createElement(\"div\"),this.screenHolder.className=\"celtra-screen-holder\",this.screenHolder.style.width=\"100%\",this.screenHolder.style.height=\"100%\",this.screenContainer.appendChild(this.screenHolder),t.style.position=\"absolute\",this.usePlaceboBar){var e=this.loadingScreen&&this.loadingScreen.loaderColor||\"white\";this.placeboBar=new PlaceboBar(5e3,.9,200,e),this.screenContainer.appendChild(this.placeboBar)}if(this.showCloseButton){if(this.closeAction||Creative._throw(\"Close button requested, but no close action defined?\"),this.closeButtonType&&\"text\"===this.closeButtonType){var i=document.createElement(\"div\");i.className=\"celtra-close-button touchable celtra-close-button-text\",i.textContent=this.closeButtonText,i.style.color=this.closeButtonTextColor,this.unitDiv.appendChild(i)}else{var i=document.createElement(\"img\"),n=document.createElement(\"img\");this.closeButtonUp?(this.closeButtonDown||(this.closeButtonDown=this.closeButtonUp),this.closeButtonWidth&&this.closeButtonHeight&&(i.style.width=n.style.width=this.closeButtonWidth+\"px\",i.style.height=n.style.height=this.closeButtonHeight+\"px\")):(this.closeButtonUp=new File(\"runner/clazzes/CreativeUnit/close-up.svg\"),this.closeButtonDown=new File(\"runner/clazzes/CreativeUnit/close-down.svg\")),i.className=\"celtra-close-button touchable celtra-close-button-up\",this._preloadImage(this.closeButtonUp,function(t,e){i.src=e}),n.className=\"celtra-close-button celtra-close-button-down\",this._preloadImage(this.closeButtonDown,function(t,e){n.src=e}),this.closeButtonImage=i,this.closeButtonImagePressed=n,this.unitDiv.appendChild(this.closeButtonImage),this.unitDiv.appendChild(this.closeButtonImagePressed)}attach(i,\"tap\",function(){var t=this.currentScreen||this.visibleScreen;this.closeAction(t?new ActionContext(t,!0):null,{},noop)}.bind(this),!1)}var o=[];o.push({name:\"loading\",fun:function(t){if(this.loadingScreen){var e=creative.perf.start(\"CreativeUnit.loadingScreen\");this.loadingScreen.getNode(function(){defer(function(){e.end(),this.initiateScreenTransition(this.loadingScreen),t(!0)}.bind(this),CreativeUnit.DEBUG_EXTRA_PHASE_DELAY,\"CreativeUnit.createNode defer loading phase completion\",useAsap())}.bind(this))}else t(!1)}.bind(this)}),o.push({name:\"interactive\",fun:function(t){var e=creative.perf.start(\"CreativeUnit.firstScreenLoaded\"),i=this.hasScreens?2:1,n=function(){--i||defer(function(){e.end(),defer(this.emits(\"_firstScreenLoaded\"),0,\"CreativeUnit.createNode emit _firstScreenLoaded\",useAsap()),t(!0)}.bind(this),CreativeUnit.DEBUG_EXTRA_PHASE_DELAY,\"CreativeUnit.createNode defer onScreenLoaded\",useAsap())}.bind(this);this.hasScreens&&this._getDestinationScreen().getNode(n),this.master.getNode(n)}.bind(this)}),this.incrementLoadingCount();var r=!1,s=function(){r||Creative._throw(\"Unit still not ready to show after last phase?!\")};return o.reverse().forEach(function(t){var e=s;s=function(){Logger(\"unit\").log(\"Phase '\"+t.name+\"' started.\"),t.fun(function(i){Logger(\"unit\").log(\"Phase '\"+t.name+\"' finished, \"+(i?\"DID\":\"DID NOT\")+\" draw something.\"),i&&(r||(r=!0,this.decrementLoadingCount())),e()}.bind(this))}.bind(this)}.bind(this)),s(),t},CreativeUnit.prototype._repositionCloseButton=function(t){function e(t,e,i){function n(t){return{left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}var o=n(i),r=n(e),s=n(t);s.left=r.left+r.width-s.width,s.top=r.top;var a=o.left<=s.left&&s.left+s.width-1<o.left+o.width&&o.top<=s.top&&s.top+s.height-1<o.top+o.height;return!a}if(this.closeButtonImage){var i;i=this.hasOverflow||this.orientationPrompt&&\"none\"!=this.orientationPrompt.style.display||e(this.closeButtonImage,this.screenContainer,this.unitDiv)?this.unitDiv:this.screenContainer;var n=this.closeButtonImage.parentNode;if(i!==n&&(n&&(n.removeChild(this.closeButtonImage),n.removeChild(this.closeButtonImagePressed)),i.appendChild(this.closeButtonImage),i.appendChild(this.closeButtonImagePressed)),window.navigator.userAgent.match(/iP(hone|od)/)&&ios(\"7\")&&creative.adapter.hasDeadZones){var o=\"landscape\"==t?20:0;this.closeButtonImage.style.top=this.closeButtonImagePressed.style.top=o+\"px\"}}},CreativeUnit.prototype.triggerOrientationChange=function(){this.currentScreen&&this.currentScreen.triggerOrientationChange(),android()&&this.hideKeyboard()},CreativeUnit.prototype.hideKeyboard=function(){if(this.unitDiv){var t=[].slice.call(this.unitDiv.querySelectorAll(\"input,select,textarea\"));t.forEach(function(t){t.blur()})}},CreativeUnit.prototype.enableWrongOrientationPrompt=function(){if(this.unitDiv&&!this.orientationPrompt&&\"thumb\"!==creative.runtimeParams.purpose){this.orientationPrompt=document.createElement(\"img\"),this.orientationPrompt.style.cssText=\"display: none; position: absolute; left: 50%; top: 50%; z-index: 999999\";var t=this;if(this.orientationPromptImage)this.loaded||this._preloadImage(this.orientationPromptImage,function(e,i){var n=t.orientationPromptImage.width,o=t.orientationPromptImage.height,r=Math.round(n/2),s=Math.round(o/2);t.orientationPrompt.style.cssText+=\"margin-left: -\"+r+\"px; margin-top: -\"+s+\"px; width: \"+n+\"px; height: \"+o+\"px;\",t.orientationPrompt.src=i});else{var e=\"tablet\",i=\"phone\"==e?400:640;this.orientationPrompt.style.cssText+=\"margin-left: -\"+i+\"px; margin-top: -\"+i+\"px;\",celtra.styler.css(this.orientationPrompt,\"transformOrigin\",\"50% 50%\"),celtra.styler.css(this.orientationPrompt,\"transform\",\"scale(0.80)\"),this.loaded||this._preloadImage(new File(\"runner/rotate-screen_\"+e+\"_01.png\"),function(e,i){t.orientationPrompt.src=i})}this.unitDiv.appendChild(this.orientationPrompt)}},CreativeUnit.prototype._updateSize=function(){var t=function(t,e,i){\"left\"==e?(t.style.left=\"0\",t.style.marginLeft=\"\",t.style.right=\"auto\"):\"right\"==e?(t.style.left=\"auto\",t.style.marginLeft=\"\",t.style.right=\"0\"):(t.style.left=\"50%\",t.style.marginLeft=\"-\"+this.size.width/2+\"px\",t.style.right=\"auto\"),\"top\"==i?(t.style.top=\"0\",t.style.marginTop=\"\",t.style.bottom=\"auto\"):\"bottom\"==i?(t.style.top=\"auto\",t.style.marginTop=\"\",t.style.bottom=\"0\"):(t.style.top=\"50%\",t.style.marginTop=\"-\"+this.size.height/2+\"px\",t.style.bottom=\"auto\")}.bind(this);\"responsive\"===this.sizing?(this.unitDiv.style.width=\"100%\",this.unitDiv.style.height=\"100%\",this.screenContainer.style.width=\"100%\",this.screenContainer.style.height=\"100%\"):this.fillsContainer?(this.unitDiv.style.width=\"100%\",this.unitDiv.style.height=this.overflowsY?this.size.height+\"px\":\"100%\",this.screenContainer.style.width=this.size.width+\"px\",this.screenContainer.style.height=this.size.height+\"px\",t(this.screenContainer,this.unitAlignment.horizontal,this.unitAlignment.vertical)):(this.unitDiv.style.width=this.size.width+\"px\",this.unitDiv.style.height=this.size.height+\"px\",t(this.unitDiv,this.unitAlignment.horizontal,this.unitAlignment.vertical),this.screenContainer.style.width=\"100%\",this.screenContainer.style.height=\"100%\")},CreativeUnit.prototype.updateWindowMetrics=function(t,e,i){this._isRendering&&(this._updateSize(),this._toggleWrongOrientationPrompt(t,e,i),setTimeout(function(t,e,i){this._repositionCloseButton(t,e,i)}.bind(this),0,t,e,i))},CreativeUnit.prototype.setCorrectOrientation=function(t){this._correctOrientation=t},CreativeUnit.prototype._toggleWrongOrientationPrompt=function(t){if(this.orientationPrompt){var e=this.orientation;if(this._correctOrientation&&(e=this._correctOrientation),e!==t){this.orientationPrompt.style.display=\"block\";{this.orientationPrompt.offsetWidth}this._orientationLockIsOn!==!0&&this.emit(\"orientationLockChanged\",!0),this._orientationLockIsOn=!0}else this.orientationPrompt.style.display=\"none\",this._orientationLockIsOn!==!1&&this.emit(\"orientationLockChanged\",!1),this._orientationLockIsOn=!1,this._emitUnitFirstShownAfterOrientationPrompt&&(this._emitUnitFirstShownAfterOrientationPrompt=!1,this.emit(\"_unitFirstShown\"))}},CreativeUnit.prototype.getMasterVideo=function(){var t=null;return this.master.objects.some(function(e){return\"MasterVideo\"===e.constructor.name?(t=e,!0):void 0}),t},CreativeUnit.prototype.playMasterVideoAction=function(t,e,i){this.getMasterVideo().playAction(t,e,i)},CreativeUnit.prototype.pauseMasterVideoAction=function(t,e,i){this.getMasterVideo().pauseAction(t,e,i)},CreativeUnit.prototype.muteMasterVideoAction=function(t,e,i){this.getMasterVideo().muteAction(t,e,i)},CreativeUnit.prototype.unMuteMasterVideoAction=function(t,e,i){this.getMasterVideo().unMuteAction(t,e,i)},CreativeUnit.prototype.goToScreenAction=function(t,e,i){return e.screen?void(\"LeanLoading\"===this._getDestinationScreen().title?creative.adapter.waitForWindowLoad(function(){this.goToScreen(e.screen,e,i)}.bind(this)):this.goToScreen(e.screen,e,i)):(console.warn(\"Go to screen action is called without a destination page!\"),i&&i())},CreativeUnit.prototype.findAll=function(t){var e=[];return this.screens.forEach(function(i){(\"undefined\"==typeof t||i.title==t)&&e.push(i),i.findAll(t).forEach(function(t){e.push(t)})}),e},CreativeUnit.prototype.findByType=function(t){var e=[];return\"undefined\"==typeof t?result:(this.screens.forEach(function(i){i.findByType(t).forEach(function(t){e.push(t)})}),e)},CreativeUnit.prototype.getShareableState=function(){var t={localId:this.localId,screen:this.currentScreen?this.currentScreen.getShareableState():null};return this.variantConditionId&&(t.variantConditionId=this.variantConditionId),t},CreativeUnit.prototype.applyShareableState=function(t){t.screen&&this.screens.filter(function(e){return e.localId===t.screen.localId}).forEach(function(t){this.goingToScreen?this.goingToScreen.once(\"appeared\",this.goToScreen.bind(this,t)):this.goToScreen(t)}.bind(this))};;\nfunction ScreenObjectContainer(){}inherit(ScreenObjectContainer,View),ScreenObjectContainer.toString=function(){return\"[Clazz ScreenObjectContainer]\"},ScreenObjectContainer.prototype.toString=function(){return\"[ScreenObjectContainer \"+this.localId+\"]\"},ScreenObjectContainer.prototype.appear=function(){ScreenObjectContainer.uber.appear.call(this),ScreenObjectContainer.uber.appearNestedObjects.call(this)},ScreenObjectContainer.prototype.disappear=function(){ScreenObjectContainer.uber.disappearNestedObjects.call(this),ScreenObjectContainer.uber.disappear.call(this)};;\nfunction Screen(){}inherit(Screen,ScreenObjectContainer),extend(Screen.prototype,TriggerHost),extend(Screen.prototype,SceneHost),extend(Screen.prototype,DiscoverableTrait),Screen.toString=function(){return\"[Clazz Screen]\"},Screen.prototype.toString=function(){return\"[Screen \"+this.localId+\" (name=\"+this.title+\")]\"},Object.defineProperty(Screen.prototype,\"name\",{get:function(){return this.title}}),Object.defineProperty(Screen.prototype,\"size\",{get:function(){return this.parentContainer.size}}),Screen.prototype.awake=function(){ScreenObjectContainer.uber.awake.apply(this,arguments),this._isRendering=!1,this.appearedAtLeastOnce=!1,this._updateSize=this._updateSize.bind(this),this.handleShake=this.handleShake.bind(this)},Screen.prototype.isFirstScreen=function(){return this===this.parentContainer.screens[0]},Screen.prototype.isLoadingScreen=function(){return this===this.parentContainer.loadingScreen},Screen.prototype.isMasterScreen=function(){return this===this.parentContainer.master},Screen.prototype.isNormalScreen=function(){return!this.isMasterScreen()&&!this.isLoadingScreen()},Object.defineProperty(Screen.prototype,\"parentUnitVariant\",{get:function(){return\"CreativeUnitWithVariants\"==this.parentUnit.constructor.name?(this._parentContainer||(this._parentContainer=this.parentUnit.getVariantForScreen(this)),this._parentContainer):null}}),Object.defineProperty(Screen.prototype,\"parentContainer\",{get:function(){return this.parentUnitVariant||this.parentUnit}}),Screen.prototype.createNode=function(){Logger(\"unit\").log(\"Starting to load \"+this),!this.isLoadingScreen()&&creative.experiments.get(\"TrackingLoadingTimes\")&&this.once(\"loaded\",creative.aggregatorTracking.trackAggregatorMagicTriplet(\"screenLoad\",{unitName:this.parentUnit.name,screenRank:this.isFirstScreen()?\"First\":this.isMasterScreen()?\"Master\":\"Other\"},3e4)),this.nestedSceneHosts=[];var e=Screen.uber.createNode.call(this);return e.style.overflow=this.showOverflow?\"visible\":\"hidden\",this.objects.forEach(function(t){this.incrementLoadingCount(),e.appendChild(t.getNode(this.decrementLoadingCount))},this),this.parentContainer.on(\"resize\",this._updateSize),e.style.width=e.style.height=\"100%\",this.parentContainer.inView&&(this.inView=new InViewObject(this,this.parentContainer.inView),this.inViewTriggerSetup()),this._updateSize(),e},Screen.prototype.initImmediatelyPlayedScenes=function(){this._initImmediatelyPlayedScenes(),this.nestedSceneHosts.forEach(function(e){e._initImmediatelyPlayedScenes()})},Screen.prototype._appear=function(){var e=!this.appearedAtLeastOnce;this.appearedAtLeastOnce=!0;var t=new ActionContext(this,{certainlyNotCausedByUserBehavior:!!this.parentUnit.firstAppearWithoutUserInteraction&&e&&(this.isFirstScreen()||this.isMasterScreen())});this!==this.parentContainer.loadingScreen&&this!==this.parentContainer.master&&(t.track({name:\"screenShown\"}),creative.trackCreativeRenderedOnScreenShow()),e?this.fireTriggers(\"firstAppear\",null,function(){defer(function(){this.fireTriggers(\"appear\",null,noop,t)}.bind(this),void 0,void 0,useAsap())}.bind(this),t):this.fireTriggers(\"appear\",null,noop,t),this.inView&&this.inView.start(),this.hasTriggers(\"shake\")&&(this.shakeListener||(this.shakeListener=new ShakeListener),this.shakeListener.start(),this.shakeListener.on(\"shake\",this.handleShake))},Screen.prototype._disappear=function(){this.inView&&this.inView.stop(),this.shakeListener&&(this.shakeListener.off(\"shake\",this.handleShake),this.shakeListener.stop())},Screen.prototype.handleShake=function(e){if(this.parentUnit.currentScreen===this){var t=new ActionContext(this,!1);this.fireTriggers(\"shake\",function(t,i){var n=t.direction&&t.direction.indexOf(e)>-1,r=!1,a=!1,s=500;return n?(clearTimeout(i.shakeTimeout),i.shakeStartTime||(i.shakeStartTime=new Date),r=t.duration&&(new Date).getTime()-i.shakeStartTime.getTime()>=t.duration,i.shakeTimeout=setTimeout(function(){delete i.shakeStartTime,i.triggered=!1},s),r&&!i.triggered&&(a=!0,i.triggered=!0),a):!1},null,t)}},Screen.prototype.enterRenderTree=function(){this._isRendering||(this._isRendering=!0,this.emit(\"enteredRenderTree\"))},Screen.prototype.exitRenderTree=function(){this._isRendering&&(this._isRendering=!1,this.emit(\"exitedRenderTree\"))},Screen.prototype._updateSize=function(){this.emit(\"resize\")},Screen.prototype.finishedLoading=function(){Screen.uber.finishedLoading.call(this),Logger(\"unit\").log(\"Finished loading \"+this)},Screen.prototype.triggerBeforeAppear=function(e){var t=new ActionContext(this,{certainlyNotCausedByUserBehavior:!!this.parentUnit.firstAppearWithoutUserInteraction&&!this.appearedAtLeastOnce&&(this.isFirstScreen()||this.isMasterScreen())});this.fireTriggers(\"beforeAppear\",null,e,t)},Screen.prototype.triggerOrientationChange=function(e){this.fireTriggers(\"orientationChange\",null,e)},Screen.prototype.getMaxZIndex=function(){var e=0;return this.objects.forEach(function(t){t.zIndex>e&&(e=t.zIndex)}),e},Screen.prototype.inViewTriggerSetup=function(){var e=!1;this.triggers.forEach(function(t){(\"enterView\"===t.type||\"leaveView\"===t.type)&&(e=!0,this.inViewAreaRatio=0)},this),e&&this.inView.on(\"areaInViewRatioChanged\",this.triggerInView.bind(this))},Screen.prototype.triggerInView=function(e){var t=new ActionContext(this),i=\"enterView\",n=this.inViewAreaRatio,r=e,a=function(e,t){return e.parameters.area-t.parameters.area};e<this.inViewAreaRatio&&(i=\"leaveView\",r=this.inViewAreaRatio,n=e,a=function(e,t){return t.parameters.area-e.parameters.area}),this.fireSortedTriggers(i,function(e){var t=e.area/100;return t>=n&&r>=t},null,t,a),this._getTriggers(i,function(e){var t=e.area/100;return t>=n&&r>=t}),this.inViewAreaRatio=e},Screen.prototype.getActionsExecutedOnAppear=function(){var e=!this.appearedAtLeastOnce,t=new ActionContext(this,{certainlyNotCausedByUserBehavior:!!this.parentUnit.firstAppearWithoutUserInteraction&&e&&(this.isFirstScreen()||this.isMasterScreen())}),i=this.fireTriggersDryRun(\"beforeAppear\",null,noop,t);return e&&(i=i.concat(this.fireTriggersDryRun(\"firstAppear\",null,noop,t))),i.concat(this.fireTriggersDryRun(\"appear\",null,noop,t))},Screen.prototype.resetAction=function(e,t,i){var n=this.findAll(),r=n.length;r?n.forEach(function(n){n.resetAction(e,t,function(){--r||i()})}):i()},Screen.prototype.shuffleAction=function(e,t,i){function n(e){for(var t,i,n=e.length;0!==n;)i=Math.floor(Math.random()*n),n-=1,t=e[n],e[n]=e[i],e[i]=t;return e}var r=n(t.objects.map(function(e){return JSON.parse(JSON.stringify(e.layoutSpecificValues))}));t.objects.forEach(function(e,t){e.layoutSpecificValues.forEach(function(e,i){e.position=r[t][i].position}),e._refreshDisplayState()}),i&&i()},Screen.prototype._trackViewShown=function(){Screen.uber._trackViewShown.call(this,{isMasterScreen:this.isMasterScreen(),isLoadingScreen:this.isLoadingScreen()})},Screen.prototype.getShareableState=function(){return{localId:this.localId}};;\nfunction ScreenObject(){}inherit(ScreenObject,View),extend(ScreenObject.prototype,TriggerHost),extend(ScreenObject.prototype,DiscoverableTrait),extend(ScreenObject.prototype,ClickPreventer),ScreenObject.requiresRedrawToTriggerAnimationEvents=android(\"4.0\"),ScreenObject.redrawTriggerInterval=60,ScreenObject.toString=function(){return\"[Clazz ScreenObject]\"},ScreenObject.prototype.toString=function(){return\"[ScreenObject \"+this.localId+\" (name=\"+this.name+\")]\"},ScreenObject.allowPositioningAndSizingUsingTransforms=!android(\"2.2\",\"2.3\")||celtra.iframe(),ScreenObject._zIndexOffset=1e4,ScreenObject._resettableProperties=[\"position\",\"size\",\"rotation\",\"zIndex\",\"opacity\",\"hidden\"],ScreenObject._3dTransformBlacklisted=function(t){return/Silk\\/\\d|Kindle Fire| KFTT | KFOT | KFJWI | KFJWA |\\bGT-P3100\\b| HTC[ _]One[ _]S /.test(t)||/\\bGT-I9300\\b/.test(t)&&android(\"4.0\")}(navigator.userAgent),ScreenObject.supports3d=function(){var t=\"WebKitCSSMatrix\"in window&&\"m11\"in new WebKitCSSMatrix||\"MSCSSMatrix\"in window||/Gecko\\//.test(navigator.userAgent);return t&&!this._3dTransformBlacklisted}(),ScreenObject.requires3dTranslateForPositioning=/GT-I9500|GT-I9505|SM-N900|GT-P5210|SM-T520/.test(navigator.userAgent),ScreenObject.dummyImageSpacer=windows(\"10\"),ScreenObject._toPositionPx=function(t,e,i){var n,r,o,s,a=i.width,c=i.height,h=e.width,u=e.height;return[\"left\",\"right\",\"hcenter\"].forEach(function(e){e in t&&(n=e)}),[\"bottom\",\"top\",\"vcenter\"].forEach(function(e){e in t&&(r=e)}),o=t[n],s=t[r],o=o.indexOf(\"%\")>-1?a*parseFloat(o)/100:parseFloat(o),\"hcenter\"===n?o=(a-h)/2+o:\"right\"===n&&(o=a-(o+h)),s=s.indexOf(\"%\")>-1?c*parseFloat(s)/100:parseFloat(s),\"vcenter\"===r?s=(c-u)/2+s:\"bottom\"===r&&(s=c-(s+u)),{x:ScreenObject._roundIfNeeded(o),y:ScreenObject._roundIfNeeded(s)}},ScreenObject._toSizePx=function(t,e){var i=parseFloat(t.width),n=parseFloat(t.height),r=e.width,o=e.height;return t.width.toString().indexOf(\"%\")>-1&&(i=r*i/100),t.height.toString().indexOf(\"%\")>-1&&(n=o*n/100),{width:ScreenObject._roundIfNeeded(i),height:ScreenObject._roundIfNeeded(n)}},ScreenObject._roundIfNeeded=function(t){return Math.round(t)},ScreenObject.createMassProductionSetter=function(t){return function(e){if(\"undefined\"===creative.runtimeParams.massProductionPreview)throw new Error(\"Invalid use case. This is not a public function and can change at any time.\");return t.call(this,e)}},Object.defineProperty(ScreenObject.prototype,\"layoutCurrent\",{get:function(){return null==this.layoutCurrentIndex?this.layoutSpecificValues[0]:this.layoutSpecificValues[this.layoutCurrentIndex]},enumerable:!0,configurable:!1}),Object.defineProperty(ScreenObject.prototype,\"layoutCurrentIndex\",{get:function(){return this.parentUnit.layoutCurrentIndex},enumerable:!0,configurable:!1}),ScreenObject._Position=function(t,e){this._instance=t,this._position=e},Object.defineProperties(ScreenObject._Position.prototype,{x:{get:function(){return this._position.x},set:function(t){delete this._instance.layoutCurrent.right,delete this._instance.layoutCurrent.hcenter,this._instance.layoutCurrent.position.left=t+(\"number\"==typeof t?\"px\":\"\")}},y:{get:function(){return this._position.y},set:function(t){delete this._instance.layoutCurrent.bottom,delete this._instance.layoutCurrent.vcenter,this._instance.layoutCurrent.position.top=t+(\"number\"==typeof t?\"px\":\"\")}}}),ScreenObject._Size=function(t,e){this._instance=t,this._size=e},Object.defineProperties(ScreenObject._Size.prototype,{width:{get:function(){return this._size.width},set:function(t){this._instance.layoutCurrent.size.width=t+(\"number\"==typeof t?\"px\":\"\")}},height:{get:function(){return this._size.height},set:function(t){this._instance.layoutCurrent.size.height=t+(\"number\"==typeof t?\"px\":\"\")}}}),Object.defineProperties(ScreenObject.prototype,{position:{get:function(){var t=ScreenObject._toPositionPx(this.layoutCurrent.position,this.size,this.parentContainer.size);return new ScreenObject._Position(this,t)},set:function(t){delete this.layoutCurrent.position.right,delete this.layoutCurrent.position.hcenter,delete this.layoutCurrent.position.bottom,delete this.layoutCurrent.position.vcenter,this.layoutCurrent.position.left=t.left,this.layoutCurrent.position.top=t.top}},originalSize:{get:function(){var t=this.layoutCurrentIndex||0;return ScreenObject._toSizePx(JSON.parse(this.originalLayoutSpecificValues)[t].size,this.parentContainer.size)},set:function(){throw new Error(\"originalSize is not settable!\")}},size:{get:function(){var t=ScreenObject._toSizePx(this.layoutCurrent.size,this.parentContainer.size);return new ScreenObject._Size(this,t)},set:function(t){this.layoutCurrent.size.width=t.width,this.layoutCurrent.size.height=t.height}},opacity:{get:function(){return this.layoutCurrent.opacity},set:function(t){this.layoutCurrent.opacity=t}},rotation:{get:function(){return this.layoutCurrent.rotation},set:function(t){this.layoutCurrent.rotation=t}},hidden:{get:function(){return this.layoutCurrent.hidden},set:function(t){this.layoutSpecificValues.forEach(function(e){e.hidden=t})}}}),ScreenObject.getCSSTranslate=function(t,e){return ScreenObject.requires3dTranslateForPositioning?\"translate3d(\"+t+\"px,\"+e+\"px, 0)\":\"translate(\"+t+\"px,\"+e+\"px)\"},ScreenObject.prototype.awake=function(){ScreenObject.uber.awake.call(this),this.originalLayoutSpecificValues=JSON.stringify(this.layoutSpecificValues),this.originalZIndex=this.zIndex,this.finishAnimation=this.finishAnimation.bind(this),this._refreshDisplayState=this._refreshDisplayState.bind(this)},ScreenObject.prototype.enterRenderTree=function(){this._isRendering||(this._isRendering=!0,this.emit(\"enteredRenderTree\"))},ScreenObject.prototype.exitRenderTree=function(){this._isRendering&&(this._isRendering=!1,this._isInMouseOver&&trigger(this.node,\"mouseout\",!1),this.emit(\"exitedRenderTree\"))},ScreenObject.prototype.react=function(t){var e=this.parentUnit.getRxStateObject(),i=function(){this._isRendering&&t.call(this,e)}.bind(this);null!==e&&(this._rxListeners.push(i),Ticker.frame(i,\"render\"))},ScreenObject.prototype.appearNestedObjects=function(){this.getNestedContainers().forEach(function(t){t.appear(),t.appearNestedObjects(t.objects)},this)},ScreenObject.prototype.disappearNestedObjects=function(){this.getNestedContainers().forEach(function(t){t.disappearNestedObjects(t.objects),t.disappear()},this)},ScreenObject.prototype.initTemplates=function(){var t=this.templates={},e=this.constructor.templates;if(e){for(var i in e)\"string\"==typeof e[i]&&(e[i]=tmpl(e[i]));extend(t,e)}},ScreenObject.prototype.tmpl=function(t,e,i){this.templates||this.initTemplates();var n=this.templates[t];return n?n.call(i||this,e):\"Missing template: \"+t},ScreenObject.prototype.template=function(t,e,i){var n,r=document.createElement(\"div\");r.innerHTML=this.tmpl(t,e);var o=r.firstChild;if(i)for(;n=r.firstChild;)i.appendChild(n);return o},ScreenObject.prototype.ifNotClosing=function(t,e,i){var n=this.fireTriggersDryRun(t,null,noop,e)._actions,r=[\"dismiss\",\"collapse\"],o=!n.some(function(t){return r.indexOf(t.method)>-1});o&&i()},ScreenObject.prototype.createNode=function(){this._isInMouseOver=!1;var t=this,e=ScreenObject.uber.createNode.call(t);e.style.position=\"absolute\",this.hasTriggers(\"tap\")&&(addClass(e,\"touchable\"),attach(e,\"tap\",function(){var e=new ActionContext(t,!0);t.ifNotClosing(\"tap\",e,e.trackUserInteraction),t.fireTriggers(\"tap\",null,null,e)},!1));var i=\"mouseOver\",n=[];if(this.hasTriggers(i)){var r=this._getTriggers(i,null),o=[],s=noop;r.forEach(function(t){t.parameters&&t.parameters.delay&&o.indexOf(t.parameters.delay)<0&&o.push(t.parameters.delay)}),attach(e,\"mouseover\",function(){var e=new ActionContext(t,!0),r=function(n){return function(){t.fireTriggers(i,function(t){return t.delay==n},null,e)}};t._isInMouseOver=!0,o.forEach(function(t,e){s=r(t),n[e]=setTimeout(s,t)})},!1)}return attach(e,\"mouseout\",function(){var e=new ActionContext(t,!0);t._isInMouseOver=!1,n.forEach(clearTimeout),n=[],t.hasTriggers(\"mouseOut\")&&t.fireTriggers(\"mouseOut\",null,null,e)},!1),attach(e,\"touchstart\",function(){if(t.hasTriggers(\"touchstart\")){var e=new ActionContext(t,!0);t.ifNotClosing(\"touchstart\",e,e.trackUserInteraction),t.fireTriggers(\"touchstart\",null,null,e)}},!1),attach(e,\"touchend\",function(){if(t.hasTriggers(\"touchend\")){var e=new ActionContext(t,!0);t.ifNotClosing(\"touchend\",e,e.trackUserInteraction),t.fireTriggers(\"touchend\",null,null,e)}},!1),this.hasTriggers(\"swipe\")&&(attach(e,\"touchstart\",function(t){t.stopPropagation()}),new SwipeListener({target:e,swipeNodeGetter:function(){return this.parentUnit.node}.bind(this),swipe:function(e,i){var n=new ActionContext(t,!0);t.fireTriggers(\"swipe\",function(r){var o=e==r.direction&&i>=r.length;return o&&t.ifNotClosing(\"swipe\",n,n.trackUserInteraction),o},null,n)}})),attach(e,\"transitionend\",function(t){t.stopPropagation()},!1),this.parentContainer.on(\"resize\",this._refreshDisplayState),this.parentContainer.on(\"enteredRenderTree\",function(){this.hidden||this.enterRenderTree()}.bind(this)),this.parentContainer.on(\"exitedRenderTree\",function(){this.hidden||this.exitRenderTree()}.bind(this)),this.layoutPrevious=this.layoutCurrent,this.parentUnit.on(\"layoutChanged\",this.handleLayoutChanged.bind(this)),this.initClickPrevention(function(){return this.node}.bind(this)),this._applyStyles(e,this._calculateNewStyleAttributes()),this.positionUsingTransforms()||deviceInfo.browser.safari(\"9.0.0\",null)||(e.style.outline=\"1px solid transparent\"),this._rxListeners=[],e},ScreenObject.prototype.positionUsingTransforms=retFalse,ScreenObject.prototype.sizeUsingTransforms=retFalse,ScreenObject.prototype.isValid=retTrue,ScreenObject.prototype.getNaturalSize=function(){return this.originalSize},ScreenObject.prototype._calculateNewStyleAttributes=function(){var t={transform:\"\",transformOrigin:\"50% 50%\"},e=this.getNaturalSize(),i=this.position.x,n=this.position.y;if(this.sizeUsingTransforms()&&(i+=ScreenObject._roundIfNeeded((this.size.width-e.width)/2),n+=ScreenObject._roundIfNeeded((this.size.height-e.height)/2)),this.positionUsingTransforms()?(t.left=\"0\",t.top=\"0\",(i||n)&&(t.transform+=ScreenObject.getCSSTranslate(i,n))):(t.left=i+\"px\",t.top=n+\"px\"),(this.isAnimated||0!=this.rotation)&&(t.transform+=\" rotate(\"+this.rotation+\"deg) \"),this.sizeUsingTransforms()){t.width=e.width+\"px\",t.height=e.height+\"px\";var r=this.size.width/e.width,o=this.size.height/e.height;t.transform+=\" scale(\"+r+\", \"+o+\")\"}else t.width=this.size.width+\"px\",t.height=this.size.height+\"px\";return t.zIndex=this.zIndex,t.opacity=this.opacity,t.display=this.hidden?\"none\":\"block\",t},ScreenObject.prototype._applyStyles=function(t,e){e&&Object.keys(e).forEach(function(i){celtra.styler.css(t,i,e[i])})},ScreenObject.prototype._refreshDisplayState=function(){if(this.node){var t=this._calculateNewStyleAttributes(),e=!1;for(var i in t){var n=String(t[i]).replace(/^\\s*|\\s*$/g,\"\"),r=celtra.styler.css(this.node,i),o=null;celtra.styler.css(this.node,i)!==n&&(o=n,r!=o&&\"zIndex\"!=i&&\"display\"!=i&&(e=!0))}return this._applyStyles(this.node,t),this.redrawLayout(),e}},ScreenObject.prototype.finishAnimation=function(){this.node&&void 0!==celtra.styler.css(this.node,\"transitionDuration\")&&(celtra.styler.css(this.node,\"transitionDuration\",\"1ms\"),this.node.offsetWidth,celtra.styler.css(this.node,\"transitionDuration\",\"\"))},ScreenObject.prototype.handleLayoutChanged=function(){var t=function(){this.layoutPrevious.hidden&&!this.layoutCurrent.hidden?this.enterRenderTreeAndAppear(!0):!this.layoutPrevious.hidden&&this.layoutCurrent.hidden&&this.parentContainer._isRendering&&this.exitRenderTree(),this.layoutPrevious=this.layoutCurrent}.bind(this);ios()?defer(t):t(),this.finishAnimation(),this._refreshDisplayState()},ScreenObject.prototype.redrawLayout=function(){},ScreenObject.prototype._preloadImage=function(t,e,i){if(!(t instanceof File))throw\"file is not a File\";\"function\"==typeof e?(i=e,e={}):\"undefined\"==typeof e&&(e={}),e.creativeUnitVariantId=this.parentScreen.parentContainer.localId,ScreenObject.uber._preloadImage.call(this,t,e,i)},ScreenObject.prototype.setPosition=function(t,e){this.position={left:t+\"px\",top:e+\"px\"},this._refreshDisplayState()},ScreenObject.prototype.getPosition=function(){return{x:this.position.x,y:this.position.y}},ScreenObject.prototype.setSize=function(t,e){this.size.width=t,this.size.height=e,this._refreshDisplayState()},ScreenObject.prototype.getSize=function(){return{width:this.size.width,height:this.size.height}},ScreenObject.prototype.setOpacity=function(t){this.opacity=t,this._refreshDisplayState()},ScreenObject.prototype.getOpacity=function(){return this.opacity},ScreenObject.prototype.animateAction=function(t,e,i){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}function r(t){var e={position:{},size:{width:null,height:null},zIndex:null,opacity:null,rotation:null};return deep(e,t),e}function o(t,e){var i=e.size,n=t.size;null==i.width&&(i.width=n.width),null==i.height&&(i.height=n.height),t.size=i;var r=t.position,o=e.position,s=null,a=null,c=null,h=null;[\"left\",\"right\",\"hcenter\"].forEach(function(t){t in r&&(s=t),t in o&&(c=t)}),[\"bottom\",\"top\",\"vcenter\"].forEach(function(t){t in r&&(a=t),t in o&&(h=t)}),c&&null!==o[c]&&(delete r[s],r[c]=o[c]),h&&null!==o[h]&&(delete r[a],r[h]=o[h]),null!=e.rotation&&(t.rotation=e.rotation),null!=e.opacity&&(t.opacity=e.opacity),null!=e.zIndex&&(t.zIndex=e.zIndex)}i=i||noop,this.isAnimated=!0;var s=\"undefined\"!=typeof e.duration?e.duration:1e3,a=e.timingFunction||\"linear\";if(e.layoutSpecificValues)e.layoutSpecificValues.forEach(function(t,e){this.layoutSpecificValues[e]&&o(this.layoutSpecificValues[e],r(t))}.bind(this));else{var c=r(e.properties);null!=c.position.x&&(c.position.left=c.position.x+\"px\"),null!=c.position.y&&(c.position.top=c.position.y+\"px\"),null!=c.zIndex&&(c.zIndex=c.zIndex+ScreenObject._zIndexOffset,this.zIndex=c.zIndex),null!=c.size.width&&n(c.size.width)&&(c.size.width+=\"px\"),null!=c.size.height&&n(c.size.height)&&(c.size.height+=\"px\"),o(this.layoutCurrent,c)}var h=this.node;celtra.styler.css(h,\"transition\",\"\"),celtra.styler.css(h,\"transitionProperty\",\"all\"),celtra.styler.css(h,\"transitionDuration\",s+\"ms\"),celtra.styler.css(h,\"transitionTimingFunction\",a);var u=this._refreshDisplayState();if(s>0&&u){var l=!1,p=function(){l||(l=!0,i())};ScreenObject.requiresRedrawToTriggerAnimationEvents&&!function(){var t=Date.now(),e=t+(Number(s)||0),i=function(){flash(),Date.now()<e&&setTimeout(i,ScreenObject.redrawTriggerInterval)};i()}(),setTimeout(p,(Number(s)||0)+500,!0),once(h,\"transitionend\",function(){celtra.styler.css(h,\"transition\",\"\"),setTimeout(p,0,!1)},!1)}else{celtra.styler.css(h,\"transition\",\"\");var d=s>0?s:0;setTimeout(i,d)}},ScreenObject.prototype.enterRenderTreeAndAppear=function(t){t&&this.parentScreen._isRendering&&this.enterRenderTree(),t&&!this.isAppearing&&this._shouldAppear&&this.appear()},ScreenObject.prototype.scaleAction=function(t,e,i){var n=e.useOriginalSize?this.originalSize:this.size,r=e.scale/100,o={width:n.width*r,height:n.height*r},s={x:this.position.x+this.size.width/2-o.width/2,y:this.position.y+this.size.height/2-o.height/2};this.animateAction(t,{properties:{position:s,size:o},duration:e.duration,timingFunction:e.timingFunction},i)},ScreenObject.prototype.showAction=function(t,e,i){var n=this.hidden;this.hidden=!1,this.node.style.display=\"block\",this.enterRenderTreeAndAppear(n),this.node.offsetWidth,nextFrame(i)},ScreenObject.prototype.hideAction=function(t,e,i){var n=this.hidden;this.hidden=!0,this.node.style.display=\"none\",!n&&this.parentScreen._isRendering&&(this.isAppearing&&(this.disappear(),this._shouldAppear=!0),this.exitRenderTree()),setTimeout(i,0)},ScreenObject.prototype.isHidden=function(){return this.hidden},ScreenObject.prototype.resetAction=function(t,e,i){this.layoutSpecificValues=JSON.parse(this.originalLayoutSpecificValues),this.reset(),this.zIndex=this.originalZIndex,this.finishAnimation(),this._refreshDisplayState(),defer(i)},ScreenObject.prototype.addStyle=function(t){var e=\"#celtra-object-\"+this.localId,i=this.node,n=/^:(link|visited|active|hover|focus|first-child|nth-child|nth-last-child|nth-of-type|first-of-type|last-of-type|empty|target|checked|enabled|disabled)/,r=/,\\s*/g;this.styleNode||(this.styleNode=document.createElement(\"style\"),i||(i=document.getElementsByTagName(\"head\")[0]),i.appendChild(this.styleNode));var o=[];for(var s in t)o.push({selector:s.split(r).map(function(t){return e+(n.test(t)?\"\":\" \")+t}).join(\",\"),attributes:t[s]});var a=this._styleSheetTemplate({rules:o});this.styleNode.textContent+=a},ScreenObject.prototype._styleSheetTemplate=tmpl(\"<% for (var i = 0; i < rules.length; i++) { %><%= rules[i].selector %> { <%= rules[i].attributes %> }\\n<% } %>\"),ScreenObject.prototype.css=function(t,e){\"undefined\"==typeof e&&(e=t,t=this.getNode()),Object.keys(e).forEach(function(i){celtra.styler.css(t,i,e[i])})},ScreenObject.prototype.getNestedContainers=function(){return[]},ScreenObject.prototype.getActiveContainers=function(){return this.getNestedContainers()};;\nfunction Hotspot(){}inherit(Hotspot,ScreenObject),Hotspot.toString=function(){return\"[Clazz Hotspot]\"},Hotspot.prototype.toString=function(){return\"[Hotspot \"+this.localId+\"]\"},Hotspot.prototype.createNode=function(){var t=Hotspot.uber.createNode.call(this);return addClass(t,\"touchable\"),attach(t,\"tap\",this.handleTap),t},Hotspot.prototype.handleTap=function(t){t.stopPropagation()};;\nfunction Picture(){}inherit(Picture,ScreenObject),Picture.toString=function(){return\"[Clazz Picture]\"},Picture.prototype.toString=function(){return\"[Picture \"+this.localId+\"]\"},Picture.prototype.createNode=function(){var e={};if(\"feed\"===this.assetSource){FeedData.checkAndTrackValue(this.constructor.name,this.feedFieldKey,this.feedRowIndex),this.file=null;var i=FeedData.getFieldValueByKey(this.feedFieldKey,this.feedRowIndex);\"string\"==typeof i&&FeedData.isCorrectFieldType(this.feedFieldKey,this.constructor.name)&&(this.file=new File(i),this.file.dynamic=!0,this.file.meta=ScreenObject._toSizePx(this.layoutCurrent.size,this.parentContainer.size))}var t=Picture.uber.createNode.call(this);return this.file===this.placeholderFile?((\"feed\"!=this.assetSource||\"feed\"===this.assetSource&&null===this.feedFieldKey&&!this._newFileWasSet)&&(addClass(t,\"empty\"),this._preloadImage(new File(\"runner/image-placeholder.png\"),function(e,i){this._isSettingFileInProgress||(t.style.backgroundImage=\"url(\"+i+\")\")}.bind(this))),t):(this.file&&this._preloadImage(this.file,e,function(e){this._newFileWasSet||this._handlePreloadedImage(t,e)}.bind(this)),t)},Picture.prototype.awake=function(){Picture.uber.awake.call(this),this.placeholderFile=new File(\"runner/image-placeholder.png\"),this.placeholderFile.meta={height:28,width:28},this.file||(this.file=this.placeholderFile),this._originalFile=this.file,this._newFileWasSet=!1},Picture.prototype._handlePreloadedImage=function(e,i){this.file.dynamic&&(this.file.meta={height:i.naturalHeight,width:i.naturalWidth});var t=\"\",s=\"\",a=\"no-repeat\";this.imagePosition&&(t=this.imagePosition.replace(\"-\",\" \"));var h=this.sizeUsingTransforms()?this.getNaturalSize():this.size,r=this.fittingSize;switch(\"fitUpToOriginal\"===this.fittingSize&&(r=h.width<this.file.width||h.height<this.file.height?\"fit\":\"original\"),r){case\"original\":s=this.file.width+\"px \"+this.file.height+\"px\";break;case\"fit\":s=\"contain\";break;case\"fill\":s=\"cover\";break;case\"repeat\":s=this.file.width+\"px \"+this.file.height+\"px\",a=\"repeat\";break;case\"stretch\":default:s=\"100% 100%\"}var n=document.createElement(\"div\");if(n.style.cssText=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\",n.style.backgroundImage=\"url('\"+(i.src||\"\").replace(\"'\",\"-\")+\"')\",n.style.backgroundPosition=t,n.style.backgroundSize=s,n.style.backgroundRepeat=a,ScreenObject.dummyImageSpacer){var l=document.createElement(\"img\");l.style.cssText=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\",l.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\",n.appendChild(l)}e.appendChild(n)},Picture.prototype.positionUsingTransforms=function(){var e=!(ios(\"8\",null)||desktop()&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent));return e&&this.isAnimated},Picture.prototype.sizeUsingTransforms=Picture.prototype.positionUsingTransforms,Picture.prototype.getNaturalSize=function(){if(!this.file)return Picture.uber.getNaturalSize.call(this);var e,i,t,s,a=this.file.width,h=this.file.height,r=a/h,n=this.originalSize.width,l=this.originalSize.height,o=n/l,c=2048;return\"original\"==this.fittingSize||\"fitUpToOriginal\"==this.fittingSize||\"repeat\"==this.fittingSize?{width:n,height:l}:\"stretch\"==this.fittingSize?{width:a,height:h}:(e=r>o&&\"fit\"==this.fittingSize||o>r&&\"fill\"==this.fittingSize,i=o>r&&\"fit\"==this.fittingSize||r>o&&\"fill\"==this.fittingSize,t=a,s=h,e?s=a/n*l:i&&(t=h/l*n),t>c&&(s*=c/t,t=c),s>c&&(t*=c/s,s=c),{width:t,height:s})},Picture.prototype.getImageUrl=function(){return this.file?this.file.getUrl():void 0},Picture.prototype.setFileLocalId=ScreenObject.createMassProductionSetter(function(e){null==e?this.file=this._originalFile:(this.file=new File,this.file.blobHash=e.blobHash,\"undefined\"!=typeof e.name&&(this.file.name=e.name),this.file.dynamic=!!e.dynamic,this.file.meta=this.file.dynamic?ScreenObject._toSizePx(this.layoutCurrent.size,this.parentContainer.size):{size:e.size,width:e.width,height:e.height},this.file.retinaScaleFactor=1,\"undefined\"!=typeof e.retinaScaleFactor&&(this.file.retinaScaleFactor=e.retinaScaleFactor)),this.node&&(this._cancelSetFileImageLoad&&this._cancelSetFileImageLoad(),this._newFileWasSet=!0,this._cancelSetFileImageLoad=this._loadImage(this.file,function(e,i){this.node.innerHTML=\"\",this.file===this.placeholderFile?(addClass(this.node,\"empty\"),this.node.style.backgroundImage=\"url(\"+i+\")\"):(removeClass(this.node,\"empty\"),this.node.style.backgroundImage=\"\",this._imageElement=e,this._handlePreloadedImage(this.node,e)),this._refreshDisplayState(),this._cancelSetFileImageLoad=null}.bind(this)))});;\nfunction Button(){}inherit(Button,ScreenObject),extend(Button.prototype,TextStyleIntegrator),Button.toString=function(){return\"[Clazz Button]\"},Button.prototype.toString=function(){return\"[Button \"+this.localId+\"]\"},Object.defineProperties(Button.prototype,{_borderRoundness:{get:function(){var e=0,t=0,o=0,r=0;if(this.border&&\"number\"==typeof this.borderRadius)e=this.borderRadius;else if(this.border!==!1||this.roundness){if(\"number\"==typeof this.roundness&&(r=this.roundness),r>0){var n=Math.min(this.getNaturalSize().height,this.getNaturalSize().width),s=n/2,i=Math.max(this.getNaturalSize().height,this.getNaturalSize().width),a=i/2;if(50>r){var d=r/50;e=s*d}else{var h=(r-50)/50,u=(a-s)*h,l=s+u;t=this.getNaturalSize().width==n?s:l,o=this.getNaturalSize().height==n?s:l}}}else r=0;return this.shadow&&ios(\"8\")&&window.devicePixelRatio>=3&&(1>e&&(e=1),1>t&&(t=1),1>o&&(o=1)),50>r?e+\"px\":t+\"px \"+o+\"px\"}}}),Button.prototype.getBorderWidth=function(){return this.borderWidth},Button.prototype.getShadowDistance=function(){return this.shadowDistance},Button.prototype.getShadowBlur=function(){return this.shadowBlur},Button.prototype.awake=function(){Button.uber.awake.call(this),this._defaultValues={backgroundUpImage:\"runner/clazzes/Button/button.png\",backgroundDownImage:\"runner/clazzes/Button/button-down.png\"},this._handleTap=this._handleTap.bind(this),this._handleTouchStart=this._handleTouchStart.bind(this),this._handleTouchEnd=this._handleTouchEnd.bind(this),this._handleTouchCancel=this._handleTouchCancel.bind(this)},Button.prototype.createNode=function(){var e=Button.uber.createNode.call(this),t=creative.runtimeParams.overrides||creative.runtimeParams,o=t.deviceInfo&&t.deviceInfo.deviceType.toLowerCase();return this._hoverEnabled=(\"Desktop\"===creative.intendedDeviceType||\"Any\"===creative.intendedDeviceType)&&\"desktop\"===o,this._privateApiTracked={},this._backgroundElement=null,this._foregroundElement=null,this._textBorder=0,this._cssRules={},this._useBackgroundImage=\"image\"===this.background,this._useForegroundImage=\"image\"===(this._useBackgroundImage?this.foregroundForImage:this.foregroundForCss),addClass(e,\"touchable\"),this._createBackground(e),this._createForeground(e),this.addStyle(this._cssRules),attach(e,\"tap\",this._handleTap),attach(e,\"touchstart\",this._handleTouchStart),e},Button.prototype._createBackground=function(e){if(this._backgroundElement=document.createElement(\"div\"),addClass(this._backgroundElement,\"background\"),this._useBackgroundImage){var t=!1,o=\"normal\",r=\"focus\",n=\"pressed\",s=function(e,t){addClass(t,e),this._backgroundElement.appendChild(t)}.bind(this);this.backgroundUpImage?this._preloadImage(this.backgroundUpImage,function(e){s(o,e)}):(t=!0,this._preloadImage(new File(this._defaultValues.backgroundUpImage),function(e){s(o,e)})),this._hoverEnabled&&this.backgroundHoverImage&&this._preloadImage(this.backgroundHoverImage,function(e){s(r,e)}),this.backgroundDownImage?this._preloadImage(this.backgroundDownImage,function(e){s(n,e)}):t&&this._preloadImage(new File(this._defaultValues.backgroundDownImage),function(e){s(n,e)}),this._cssRules[\".background .\"+o]=\"display: block;\",this._cssRules[\".background .\"+r]=\"display: none;\",this._cssRules[\".background .\"+n]=\"display: none;\",this._hoverEnabled&&this.backgroundHoverImage&&(this._cssRules[\":hover .background .\"+o]=\"display: none;\",this._cssRules[\":hover .background .\"+r]=\"display: block;\",this._cssRules[\":hover .background .\"+n]=\"display: none;\"),(this.backgroundDownImage||t)&&(this._cssRules[\".background.down .\"+o]=\"display: none;\",this._cssRules[\".background.down .\"+r]=\"display: none;\",this._cssRules[\".background.down .\"+n]=\"display: block;\")}else{if(this.backgroundColor){var i=\"\";if(Color.isGradient(this.backgroundColorUp)?(i+=Color.createGradientStyle(this.backgroundColorUp),i+=\"background-color: transparent;\"):(i+=\"background-image: none; \",i+=\"background-color: \"+this.backgroundColorUp+\";\"),this._cssRules[\".background\"]=i,this._hoverEnabled&&this.backgroundColorHover){var a=\"\";Color.isGradient(this.backgroundColorHover)?(a+=Color.createGradientStyle(this.backgroundColorHover),a+=\"background-color: transparent;\"):(a+=\"background-image: none; \",a+=\"background-color: \"+this.backgroundColorHover+\";\"),this._cssRules[\":hover .background\"]=a}var d=\"\";Color.isGradient(this.backgroundColorDown)?(d+=Color.createGradientStyle(this.backgroundColorDown),d+=\"background-color: transparent;\"):(d+=\"background-image: none; \",d+=\"background-color: \"+this.backgroundColorDown+\";\"),this._cssRules[\".background.down\"]=d}if(this.border&&(this._backgroundElement.style.borderColor=this.borderColor,this._backgroundElement.style.borderWidth=this.getBorderWidth()+\"px\",deviceInfo.browser.chrome()||deviceInfo.browser.samsung())){var h=\"1\";if(Color.isRgba(this.borderColor)){var u=Color.patternRgba.exec(this.borderColor);h=u[Color.matchRgbaAlpha]}\"1\"===h&&(this._backgroundElement.style.backgroundClip=\"border-box\")}if(this.shadow){var l=this.shadowAngle%90===0?-.3:0,c=this.shadowAngle*(Math.PI/180),g=Math.round(this.getShadowDistance()*Math.cos(c)),p=Math.round(this.getShadowDistance()*Math.sin(c));celtra.styler.css(this._backgroundElement,\"boxShadow\",g+\"px \"+p+\"px \"+this.getShadowBlur()+\"px \"+l+\"px \"+this.shadowColor)}}e.appendChild(this._backgroundElement)},Button.prototype._createForeground=function(e){var t=this.callToActionText.trim().length>0;if(this._foregroundElement=document.createElement(\"div\"),addClass(this._foregroundElement,\"foreground\"),!this._useBackgroundImage&&this.border?(this._foregroundElement.style.borderWidth=this.getBorderWidth()+\"px\",this._textBorder=this.getBorderWidth()):this._textBorder=0,this._useForegroundImage){this._foregroundElement.className+=this.foregroundStretchImage?\" image-stretch\":\" image-fit\";var o=\"normal\",r=\"focus\",n=\"pressed\",s=function(e,t){var o=document.createElement(\"div\");addClass(o,e),o.style.backgroundImage='url(\"'+t.src+'\")',this._foregroundElement.appendChild(o)}.bind(this);this.foregroundUpImage&&this._preloadImage(this.foregroundUpImage,function(e){s(o,e)}),this._hoverEnabled&&this.foregroundHoverImage&&this._preloadImage(this.foregroundHoverImage,function(e){s(r,e)}),this.foregroundDownImage&&this._preloadImage(this.foregroundDownImage,function(e){s(n,e)}),this._cssRules[\".foreground .\"+o]=\"display: block;\",this._cssRules[\".foreground .\"+r]=\"display: none;\",this._cssRules[\".foreground .\"+n]=\"display: none;\",this._hoverEnabled&&this.foregroundHoverImage&&(this._cssRules[\":hover .foreground .\"+o]=\"display: none;\",this._cssRules[\":hover .foreground .\"+r]=\"display: block;\",this._cssRules[\":hover .foreground .\"+n]=\"display: none;\"),this.foregroundDownImage&&(this._cssRules[\".foreground.down .\"+o]=\"display: none;\",this._cssRules[\".foreground.down .\"+r]=\"display: none;\",this._cssRules[\".foreground.down .\"+n]=\"display: block;\")}else t&&(this._foregroundElement.className+=\" call-to-action\",this._foregroundElement.textContent=this.callToActionText,this.initializeFont(),this._cssRules[\".foreground\"]=\"color: \"+this.textColor+\";\",this._hoverEnabled&&this.textColorHover&&(this._cssRules[\":hover .foreground\"]=\"color: \"+this.textColorHover+\";\"),this._cssRules[\".foreground.down\"]=\"color: \"+this.textColorDown+\";\");e.appendChild(this._foregroundElement)},Button.prototype.redrawLayout=function(){if(!this._useBackgroundImage){var e=this._borderRoundness;parseInt(e,10)>0&&(this._backgroundElement&&(this._backgroundElement.style.borderTopLeftRadius=e,this._backgroundElement.style.borderTopRightRadius=e,this._backgroundElement.style.borderBottomLeftRadius=e,this._backgroundElement.style.borderBottomRightRadius=e),this._foregroundElement&&(this._foregroundElement.style.borderTopLeftRadius=e,this._foregroundElement.style.borderTopRightRadius=e,this._foregroundElement.style.borderBottomLeftRadius=e,this._foregroundElement.style.borderBottomRightRadius=e))}var t=this.callToActionText.trim().length>0;if(!this._useForegroundImage&&t){this.applyTextSize(this._foregroundElement.style);var o;if(\"undefined\"!=typeof this.lineSpacing){o=parseInt(this._foregroundElement.style.lineHeight,10);var r=this.callToActionText.split(/\\n/).length,n=o*r,s=this.sizeUsingTransforms()?this.getNaturalSize():this.size,i=(s.height-n)/2,a=i-this._textBorder;this._foregroundElement.style.paddingTop=a+\"px\"}else o=this.size.height-2*this._textBorder,this._foregroundElement.style.lineHeight=o+\"px\"}},Button.prototype.updateTextStyle=function(){var e=this.callToActionText.trim().length>0;!this._useForegroundImage&&e&&(this.applyTextStyle(this._foregroundElement.style),this._foregroundElement.style.color=\"\")},Button.prototype._handleTap=function(e){e.stopPropagation()},Button.prototype._handleTouchStart=function(){addClass(this._backgroundElement,\"down\"),addClass(this._foregroundElement,\"down\"),attach(this.parentUnit.node,\"touchend\",this._handleTouchEnd),attach(this.parentUnit.node,\"touchcancel\",this._handleTouchCancel)},Button.prototype._handleTouchEnd=function(){removeClass(this._backgroundElement,\"down\"),removeClass(this._foregroundElement,\"down\"),detach(this.parentUnit.node,\"touchend\",this._handleTouchEnd),detach(this.parentUnit.node,\"touchcancel\",this._handleTouchCancel)},Button.prototype._handleTouchCancel=function(e){this._handleTouchEnd(e)};;\nfunction Shapey(){}inherit(Shapey,ScreenObject),Shapey.toString=function(){return\"[Clazz Shapey]\"},Shapey.prototype.toString=function(){return\"[Shapey \"+this.localId+\"]\"},Object.defineProperties(Shapey.prototype,{_borderRoundness:{get:function(){var e=0,t=0,r=0,a=this._defaultValues.roundness;if(\"number\"==typeof this.roundness&&(a=this.roundness),a>0){var s=Math.min(this.getNaturalSize().height,this.getNaturalSize().width),o=s/2,i=Math.max(this.getNaturalSize().height,this.getNaturalSize().width),h=i/2;if(50>a){var d=a/50;e=o*d}else{var p=(a-50)/50,n=(h-o)*p,l=o+n;t=this.getNaturalSize().width==s?o:l,r=this.getNaturalSize().height==s?o:l}}return this.shadow&&ios(\"8\")&&window.devicePixelRatio>=3&&(1>e&&(e=1),1>t&&(t=1),1>r&&(r=1)),50>a?e+\"px\":t+\"px \"+r+\"px\"}}}),Shapey.prototype.awake=function(){Shapey.uber.awake.call(this),this._defaultValues={backgroundColor:\"#365c99\",borderColor:\"#000000\",borderWidth:5,roundness:0,shadowAngle:0,shadowBlur:10,shadowColor:\"rgba(0,0,0,0.5)\",shadowDistance:0}},Shapey.prototype.createNode=function(){var e=Shapey.uber.createNode.call(this);if(this._privateApiTracked={},e.className+=\" touchable\",this._shapey=document.createElement(\"div\"),this.backgroundColor)if(Color.isGradient(this.backgroundColor)){var t=Color.createGradientStyle(this.backgroundColor);this.addStyle({\".gradient-shapey\":t}),addClass(this._shapey,\"gradient-shapey\")}else this._shapey.style.backgroundColor=this.backgroundColor;if(this.border){var r=\"undefined\"!=typeof this.borderColor?this.borderColor:this._defaultValues.borderColor,a=\"number\"==typeof this.borderWidth?this.borderWidth:this._defaultValues.borderWidth;if(this._shapey.style.borderColor=r,this._shapey.style.borderStyle=\"solid\",this._shapey.style.borderWidth=a+\"px\",deviceInfo.browser.chrome()||deviceInfo.browser.samsung()){var s=\"1\";if(Color.isRgba(r)){var o=Color.patternRgba.exec(r);s=o[Color.matchRgbaAlpha]}\"1\"===s&&(this._shapey.style.backgroundClip=\"border-box\")}}if(this.shadow){var i=(\"number\"==typeof this.shadowAngle?this.shadowAngle:this._defaultValues.shadowAngle)*(Math.PI/180),h=\"number\"==typeof this.shadowBlur?this.shadowBlur:this._defaultValues.shadowBlur,d=\"undefined\"!=typeof this.shadowColor?this.shadowColor:this._defaultValues.shadowColor,p=\"number\"==typeof this.shadowDistance?this.shadowDistance:this._defaultValues.shadowDistance,n=Math.round(p*Math.cos(i)),l=Math.round(p*Math.sin(i));celtra.styler.css(this._shapey,\"boxShadow\",n+\"px \"+l+\"px \"+h+\"px \"+d)}return e.appendChild(this._shapey),e},Shapey.prototype.redrawLayout=function(){if(this._shapey){var e=this._borderRoundness;parseInt(e,10)>0&&(this._shapey.style.borderTopLeftRadius=e,this._shapey.style.borderTopRightRadius=e,this._shapey.style.borderBottomLeftRadius=e,this._shapey.style.borderBottomRightRadius=e)}},Shapey.prototype._track=function(e){this._privateApiTracked[e]||(this._privateApiTracked[e]=!0,creative.track({name:\"retiredFeatureUsed\",featureType:\"apifunction\",featureName:e}))},Shapey.deprecatedPropertiesArray=[\"borderRoundness\",\"shapey\",\"defaultValues\"],Shapey.deprecatedPropertiesObject={},Shapey.deprecatedPropertiesArray.forEach(function(e){Shapey.deprecatedPropertiesObject[e]={get:function(){return this._track(\"Shapey.\"+e+\".getter\"),this[\"_\"+e]},set:function(t){this._track(\"Shapey.\"+e+\".setter\"),this[\"_\"+e]=t}}}),Object.defineProperties(Shapey.prototype,Shapey.deprecatedPropertiesObject);;\nfunction File(t){this.url=t}File.toString=function(){return\"[Clazz File]\"},File.prototype.toString=function(){return\"[File \"+this.localId+\"(\"+this.name+\"/\"+this.url+\")]\"},File.prototype.getOriginalUrl=function(){if(this.url){if(-1!==this.url.indexOf(\"://\"))return this.url;if(\"/\"===this.url[0])throw\"An absolute path as URL?\";return creative.resourceUrl+this.url}if(this.blobHash)return(creative.secure?creative.cachedApiUrl:creative.insecureCachedApiUrl)+\"blobs/\"+this.blobHash+\"/\"+encodeURIComponent(this.name);throw\"Neither url nor blobHash set?\"},File.prototype.getUrl=function(t){var i=this.getOriginalUrl(),e=String(this.name).match(/\\.(gif|png|jpe?g)$/i);return this.blobHash&&e&&(i+=\"?transform=crush\",this.quality>-1&&(i+=\"&quality=\"+this.quality),t&&this.optimizedWidth(t)>0&&this.optimizedHeight(t)>0&&(i+=\"&resize=\"+this.optimizedWidth(t)+\"x\"+this.optimizedHeight(t))),i},File.prototype.getDataUri=function(t,i){t instanceof Function&&(i=t,t={});var e=\"undefined\"!=typeof this.blobHash||this.url.indexOf(\"api/animateySprites\")>=0,r=creative.adapter.protoLoading.dataURIsSupported,n=creative.adapter.protoLoading.blobURIsSupported,a=\"treatment\"===(creative.experiments.get(\"UseDataURIsGlobally\")||{}).chosenVariant,o=1==creative.runtimeParams.dataURIsEnabled||1==creative.runtimeParams.turnOnBatching,h=(r||n)&&!creative.adapter.autoDecodesURLParams,s=(!!t.preferBatching||a||o)&&h&&e,l=this.getUrl(t.creativeUnitVariantId);\"undefined\"!=typeof this.dataUri?defer(function(){i(this.dataUri)}.bind(this),0,\"File.getDataUri defer callback, has dataUri\"):s?creative.batcher.getDataUri(l,i):defer(function(){i(l)},0,\"File.getDataUri defer callback, url\")},Object.defineProperty(File.prototype,\"retina\",{get:function(){return this.retinaScaleFactor>1}}),Object.defineProperty(File.prototype,\"width\",{get:function(){return this.retina?Math.round(this.meta.width/this.retinaScaleFactor):this.meta.width}}),Object.defineProperty(File.prototype,\"height\",{get:function(){return this.retina?Math.round(this.meta.height/this.retinaScaleFactor):this.meta.height}}),Object.defineProperty(File.prototype,\"optimizedWidth\",{enumerable:!1,configurable:!1,get:function(){return function(t){if(\"number\"!=typeof t||!this.optimizationSettings)return null;for(var i=null,e=0;e<this.optimizationSettings.length;e++){var r=this.optimizationSettings[e];if(r.creativeUnitVariantId===t&&r.optimizedWidth){i=r;break}}return i&&i.optimizedWidth<this.meta.width?i.optimizedWidth:null}.bind(this)}}),Object.defineProperty(File.prototype,\"optimizedHeight\",{enumerable:!1,configurable:!1,get:function(){return function(t){if(\"number\"!=typeof t||!this.optimizationSettings)return null;for(var i=null,e=0;e<this.optimizationSettings.length;e++){var r=this.optimizationSettings[e];if(r.creativeUnitVariantId===t&&r.optimizedHeight){i=r;break}}return i&&i.optimizedHeight<this.meta.height?i.optimizedHeight:null}.bind(this)}});;\nfunction Font(){}inherit(Font,FontBase),Font.toString=function(){return\"[Clazz Font]\"},Font.prototype.toString=function(){return\"[Font \"+this.localId+\"]\"},Font.prototype.hasFeedFields=function(){return this.feedFields instanceof Array},Font.prototype.getSubsetString=function(){var t=Font.uber.getSubsetString.apply(this);if(!this.hasFeedFields())return t;if(\"string\"==typeof this.extendedSubsetString)return this.extendedSubsetString;var e=t||\"\";return this.feedFields.forEach(function(t){var n=FeedData.getFieldRowsByKey(t);n.forEach(function(t){\"string\"==typeof t.value&&(e+=t.value)})}),this.extendedSubsetString=e.replace(/[\\r\\n\\t\\f\\v]/g,\"\").split(\"\").filter(function(t,e,n){return n.indexOf(t)===e}).sort().join(\"\"),this.extendedSubsetString},Font.prototype.getUnicodeRange=function(){return this.hasFeedFields()?\"\":Font.uber.getUnicodeRange.apply(this)};;\n!function(){function t(){return this.sizeUsingTransforms()?r:a}function e(t,i){if(t instanceof Object&&t.constructor===Object){var h={};return Object.keys(t).forEach(function(n){h[n]=e(t[n],i)}),h}return\"number\"==typeof t?t*i:t}function i(t,e){return function(){return this.isAnimated?e.apply(this,arguments):t.apply(this,arguments)}}function h(h,n){var s=h[n],a=function(){return e(s.apply(this,arguments),t.call(this))};h[n]=i(s,a)}function n(t,e){var i=\"get\"+ucfirst(e);h(t,i)}function s(){return this.isAnimated}var a=1,r=2;if(ScreenObject.prototype.positionUsingTransforms=s,ScreenObject.prototype.sizeUsingTransforms=s,\"undefined\"!=typeof Picture){Picture.prototype.positionUsingTransforms=s,Picture.prototype.sizeUsingTransforms=s;var o=Picture.prototype.awake;Picture.prototype.awake=function(){o.apply(this,arguments),this._imageElement=null,this.on(\"appear\",this._drawImage.bind(this))};var l=Picture.prototype.createNode;Picture.prototype.createNode=function(){return this.parentContainer.on(\"resize\",this._drawImage.bind(this)),l.apply(this,arguments)},Picture.prototype._drawImage=function(){if(this._imageElement){if(\"stretch\"==this.fittingSize)return this._imageElement.style.position=\"absolute\",this._imageElement.style.left=\"0px\",this._imageElement.style.top=\"0px\",this._imageElement.style.width=\"100%\",void(this._imageElement.style.height=\"100%\");var t=this.imagePosition?this.imagePosition.split(\"-\"):[\"left\",\"top\"];1===t.length&&([\"left\",\"right\"].indexOf(t[0])>-1?t.push(\"center\"):t.unshift(\"center\"));var e,i,h=this.file.width/this.file.height,n=this.sizeUsingTransforms()?this.getNaturalSize():this.size,s=n.width/n.height,a=this.fittingSize;\"fitUpToOriginal\"===this.fittingSize&&(a=n.width<this.file.width||n.height<this.file.height?\"fit\":\"original\"),\"original\"===a?(e=this.file.width,i=this.file.height):\"repeat\"===a?(e=this.file.meta.width,i=this.file.meta.height):\"stretch\"===a?(e=n.width,i=n.height):\"fit\"===a?h>s?(e=n.width,i=this.file.height*(n.width/this.file.width)):(e=this.file.width*(n.height/this.file.height),i=n.height):\"fill\"===a&&(h>s?(e=this.file.width*(n.height/this.file.height),i=n.height):(e=n.width,i=this.file.height*(n.width/this.file.width)));var r,o;if(\"repeat\"===a)r={left:0,center:Math.round((n.width*this._patternPixelRatio-e)/2),right:n.width*this._patternPixelRatio-e},o={top:0,center:Math.round((n.height*this._patternPixelRatio-i)/2),bottom:n.height*this._patternPixelRatio-i},this._imageElementsCtx.canvas.width=n.width*this._patternPixelRatio,this._imageElementsCtx.canvas.height=n.height*this._patternPixelRatio,this._imageElement.style.width=n.width+\"px\",this._imageElement.style.height=n.height+\"px\",this._imageElementsCtx.save(),this._imageElementsCtx.fillStyle=this._pattern,this._imageElementsCtx.translate(r[t[0]],o[t[1]]),this._imageElementsCtx.fillRect(-r[t[0]],-o[t[1]],n.width*this._patternPixelRatio,n.height*this._patternPixelRatio),this._imageElementsCtx.restore();else{r={left:\"left: 0px;\",center:\"left: \"+Math.round((n.width-e)/2)+\"px;\",right:\"right: 0px;\"},o={top:\"top: 0px;\",center:\"top: \"+Math.round((n.height-i)/2)+\"px;\",bottom:\"bottom: 0px;\"};var l=r[t[0]]+\" \"+o[t[1]]+\" \",p=\"width: \"+e+\"px; height: \"+i+\"px; \",g=\"\";this._imageElement.style.cssText=\"position: absolute; \"+l+p+g}}},Picture.prototype._handlePreloadedImage=function(t,e){(this.file.dynamic||\"repeat\"===this.fittingSize)&&(this.file.meta={height:e.naturalHeight,width:e.naturalWidth}),\"repeat\"===this.fittingSize?(this._imageElement=document.createElement(\"canvas\"),this._imageElementsCtx=this._imageElement.getContext(\"2d\"),this._pattern=this._imageElementsCtx.createPattern(e,\"repeat\"),this._patternPixelRatio=e.naturalWidth/this.file.width):this._imageElement=e,this._drawImage(),t.appendChild(this._imageElement)}}var p=Screen.prototype.resetAction;Screen.prototype.resetAction=function(t){Scene.instances.forEach(function(e){e.parentScreen===this&&e.resetAction(t,{},noop)}.bind(this)),p.apply(this,arguments)},ScreenObject._roundIfNeeded=function(t){return t};var g=[\"fontSize\",\"lineSpacing\",\"letterSpacing\",\"scaleBaseHeight\",\"scaleBaseWidth\",\"textShadowBlur\",\"textShadowOffset\"];\"undefined\"!=typeof Texty&&(h(Texty.prototype,\"getNaturalSize\"),g.forEach(function(t){n(Texty.prototype,t)}));var f=[\"borderWidth\",\"shadowDistance\",\"shadowBlur\"].concat(g);\"undefined\"!=typeof Button&&(h(Button.prototype,\"getNaturalSize\"),f.forEach(function(t){n(Button.prototype,t)}))}();;\n!function(n){function e(n,u,a){this._propertyTweens={},a=a||e.getUsedProperties(n);var o=r(n);for(var s in a){var f=a[s],c=i(f,o);this._propertyTweens[f]=new t(c,u)}}function t(n,t){this._keyframes=n,this._defaultTimingFunction=t||e.Timing.linear,this._tweenable=a(this._keyframes),u(this._keyframes)}function r(n){var e=[];for(var t in n){var r=parseFloat(t);e[Math.round(r*m)]=n[t]}return e}function i(n,e){var t,r={};for(var i in e)if(n in e[i]){\"undefined\"==typeof r[i]&&(r[i]={});var u=e[i][n];u instanceof Object?(\"undefined\"!=typeof u.value&&null!==u.value&&(t=u.value,r[i].value=u.value),u.timingFunction&&(r[i].timingFunction=u.timingFunction)):(t=u,r[i].value=u,e[i].timingFunction&&(r[i].timingFunction=e[i].timingFunction))}return\"undefined\"==typeof r[O]&&(r[O]={value:t}),r}function u(n){if(!(y in n))throw new Error(\"Missing initial keyframe!\");if(!(O in n))throw new Error(\"Missing final keyframe!\")}function a(n){for(var e in n)return\"number\"==typeof n[e].value}function o(n,e,t,r){var i=.001,u=3*n,a=3*(t-n)-u,o=1-u-a,s=3*e,f=3*(r-e)-s,c=1-s-f,v=function(n){return((o*n+a)*n+u)*n},l=function(n){return((c*n+f)*n+s)*n},p=function(n){return(3*o*n+2*a)*n+u},h=function(n){var e,t,r,u,a,o;for(r=n,o=0;8>o;o++){if(u=v(r)-n,Math.abs(u)<i)return r;if(a=p(r),Math.abs(a)<1e-6)break;r-=u/a}if(e=0,t=1,r=n,e>r)return e;if(r>t)return t;for(;t>e;){if(u=v(r),Math.abs(u-n)<i)return r;n>u?e=r:t=r,r=.5*(t-e)+e}return r};return function(n){return l(h(n))}}function s(n){return Math.pow(n,2)}function f(n){return Math.pow(n,3)}function c(n){return Math.pow(n,4)}function v(n){return Math.pow(n,5)}function l(n){return 1-Math.cos(n*Math.PI*.5)}function p(n){return Math.pow(2,10*(n-1))}function h(n){return 1-Math.sqrt(1-n*n)}var m=1e5,y=0*m,O=100*m;e.prototype.getValuesAt=function(n){var e={};for(var t in this._propertyTweens)e[t]=this._propertyTweens[t].getValueAt(n);return e},e.getUsedProperties=function(n){var e={};for(var t in n)for(var r in n[t])\"timingFunction\"!=r&&(e[r]=!0);return Object.keys(e)},t.prototype.getValueAt=function(n){n=Math.round(n*m);var e,t;for(var r in this._keyframes)r==n?(e={position:r,values:this._keyframes[r]},t={position:r,values:this._keyframes[r]}):n>r?e={position:r,values:this._keyframes[r]}:r>n&&!t&&(t={position:r,values:this._keyframes[r]});if(!this._tweenable)return e.values.value;var i=t.position-e.position,u=n-e.position,a=0==i?0:u/i,o=e.values.timingFunction||this._defaultTimingFunction;a=o(a);var s=t.values.value-e.values.value,f=s*a;return e.values.value+f},e.Timing={none:function(){return 0},linear:function(n){return n},easeIn:o(.42,0,1,1),easeOut:o(0,0,.58,1),easeInOut:o(.42,0,.58,1),easeInQuad:s,easeOutQuad:function(n){return 1-s(1-n)},easeInOutQuad:function(n){return.5>n?.5*s(2*n):1-.5*s(2*(1-n))},easeInCubic:f,easeOutCubic:function(n){return 1-f(1-n)},easeInOutCubic:function(n){return.5>n?.5*f(2*n)/2:1-.5*f(2*(1-n))},easeInQuart:c,easeOutQuart:function(n){return 1-c(1-n)},easeInOutQuart:function(n){return.5>n?.5*c(2*n):1-.5*c(2*(1-n))},easeInQuint:v,easeOutQuint:function(n){return 1-v(1-n)},easeInOutQuint:function(n){return.5>n?.5*v(2*n):1-.5*v(2*(1-n))},easeInSine:l,easeOutSine:function(n){return 1-l(1-n)},easeInOutSine:function(n){return.5*l(2*n)},easeInExpo:p,easeOutExpo:function(n){return 1-p(1-n)},easeInOutExpo:function(n){return.5>n?.5*p(2*n):1-.5*p(2*(1-n))},easeInCirc:h,easeOutCirc:function(n){return 1-h(1-n)},easeInOutCirc:function(n){return.5>n?.5*h(2*n):1-.5*h(2*(1-n))},easeInBack:o(.6,-.28,.735,.045),easeOutBack:o(.175,.885,.32,1.275),easeInOutBack:o(.68,-.55,.265,1.55),cubicBezier:o},n.KeyframeAnimation=e}(this);;\nfunction BaseScenePlayer(e){this._scene=e,this._state=new StateObject({progress:-1,loopCount:0}),this._update=this._update.bind(this),this._render=this._render.bind(this),this._end=this._end.bind(this),this.paused=!0,this.ended=!1,this.supportsAutoplay=!1,this.supportsFallback=!0}extend(BaseScenePlayer.prototype,EventEmitter),Object.defineProperty(BaseScenePlayer.prototype,\"progress\",{get:function(){return-1!==this._state.progress?this._state.progress:this.ended?100:0}}),BaseScenePlayer.prototype._update=function(){this._state.isDirty(\"progress\")&&(this._scene.updateObjects(this._state.progress),this.emit(\"progress\",this._state.progress))},BaseScenePlayer.prototype._render=function(){this._state.isDirty(\"progress\")&&(this._scene.renderObjects(),this.emit(\"render\"),this._state.markClean(\"progress\"))},BaseScenePlayer.prototype._cancel=function(){Ticker.removeFrame(this._update,\"update\"),Ticker.removeFrame(this._render,\"render\"),Ticker.removeFrame(this._end,\"next\"),this.paused=!0},BaseScenePlayer.prototype._end=function(){this.stop(),this.emit(\"end\")},BaseScenePlayer.prototype._stop=noop,BaseScenePlayer.prototype._pause=noop,BaseScenePlayer.prototype._play=function(){return!0},BaseScenePlayer.prototype.play=function(){this._cancel(),this._play()&&(this.paused=!1,Ticker.frame(this._update,\"update\"),Ticker.frame(this._render,\"render\"),this.emit(\"play\"))},BaseScenePlayer.prototype.displayFallbackFrame=function(e){this._scene.updateObjects(Math.max(0,Math.min(e,100))),this._scene.renderObjects(),this._state.progress=e,this._state.markClean()},BaseScenePlayer.prototype.pause=function(){this.silentPause(),this.emit(\"pause\")},BaseScenePlayer.prototype.silentPause=function(){this.ended=100===this._state.progress,(0===this._state.progress||100===this._state.progress)&&(this._state.progress=-1),this._cancel(),this._pause()},BaseScenePlayer.prototype.stop=function(){this.silentPause(),this._stop(),this.emit(\"stop\")},BaseScenePlayer.prototype.destroy=function(){this._cancel()};;\nfunction TimeScenePlayer(e){TimeScenePlayer.uberConstructor.call(this,e),this._state.registerValue(\"elapsedTime\",null),this._state.registerValue(\"startTime\",null),this._state.registerValue(\"lastUpdateTime\",null),this.supportsFallback=!1}inherit(TimeScenePlayer,BaseScenePlayer),Object.defineProperty(TimeScenePlayer.prototype,\"_loopEnded\",{get:function(){return\"stop\"===this._scene.onEnd&&this._state.progress>=100||\"repeat\"===this._scene.onEnd&&this._scene.onEndRepeatCount&&this._state.loopCount>=this._scene.onEndRepeatCount||\"reverse\"===this._scene.onEnd&&this._scene.onEndReverseCount&&this._state.loopCount>=2*this._scene.onEndReverseCount||0===this._scene.getDuration().milliseconds}}),Object.defineProperty(TimeScenePlayer.prototype,\"_newLoopStarted\",{get:function(){return this._state.isDirty(\"loopCount\")}}),TimeScenePlayer.prototype._update=function(e){var t=this._scene.getDuration().milliseconds;this._state.startTime=this._state.startTime||e,this._state.lastUpdateTime&&(this._state.startTime-=this._state.lastUpdateTime,this._state.lastUpdateTime=null),this._state.elapsedTime=e-this._state.startTime,this._state.loopCount=Math.floor(t>0?this._state.elapsedTime/t:1);var s,i=100*(t>0?this._state.elapsedTime/t:1),a=i%100;s=\"repeat\"===this._scene.onEnd?this._loopEnded||this._newLoopStarted?100:a:\"reverse\"===this._scene.onEnd?this._newLoopStarted&&this._state.loopCount%2?100:this._loopEnded?0:this._state.loopCount%2?100-a:a:i,this._state.progress=Math.max(0,Math.min(s,100)),TimeScenePlayer.uber._update.apply(this,arguments),this._loopEnded&&Ticker.frame(this._end,\"next\"),this._state.markClean(\"loopCount\")},TimeScenePlayer.prototype._pause=function(){this._state.lastUpdateTime||(this._state.lastUpdateTime=this._state.elapsedTime),this._state.elapsedTime=null,this._state.startTime=null},TimeScenePlayer.prototype._stop=function(){this._state.lastUpdateTime=null};;\n";
            head.appendChild(js);





            // Run!
            // Check for runtimeParams to prevent IE 10 from initializing the creative early when host page is refreshed
            if (typeof runtimeParams === 'undefined') return;

            Creative.init({
                "id": "46f4a037",
                "clazz": "Banner",
                "intendedDeviceType": "Phone",
                "name": "Olgreen | September 2019 | V2",
                "units": {
                    "banner": {
                        "localId": 1,
                        "clazz": "CreativeUnit",
                        "master": {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "triggers": [],
                            "scenes": [],
                            "showOverflow": false,
                            "title": "Master",
                            "localId": 2,
                            "objects": [],
                            "clazz": "Screen",
                            "guidelines": [],
                            "isAnimated": false,
                            "immediatelyPlayedScenes": {
                                "appear": {
                                    "scenesLocalIds": []
                                },
                                "firstAppear": {
                                    "scenesLocalIds": []
                                }
                            },
                            "reachableScreensLocalIds": [],
                            "dynamicReachableScreenConditions": {}
                        },
                        "screens": [{
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "triggers": [{
                                "localId": 229,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 230,
                                                    "disabled": false,
                                                    "actionClazz": "Scene",
                                                    "instanceLocalId": "102",
                                                    "method": "playScene",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": "102"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1338,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "sleep",
                                                    "isStatic": true,
                                                    "args": {
                                                        "duration": "1200"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1339,
                                                    "disabled": false,
                                                    "actionClazz": "CreativeUnit",
                                                    "instanceLocalId": 1,
                                                    "method": "goToScreen",
                                                    "isStatic": false,
                                                    "args": {
                                                        "screenLocalId": "356",
                                                        "animation": "cube",
                                                        "direction": "west",
                                                        "duration": 300
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1340,
                                                    "disabled": false,
                                                    "actionClazz": "Screen",
                                                    "instanceLocalId": "3",
                                                    "method": "reset",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": "3",
                                                        "actionClazz": "Screen"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false,
                                "isAnimated": false
                            }],
                            "scenes": [{
                                "clazz": "Scene",
                                "localId": 102,
                                "name": "Scene 1",
                                "type": "time",
                                "duration": 10,
                                "onEnd": "stop",
                                "onEndRepeatCount": 0,
                                "onEndReverseCount": 0,
                                "onEndWaitForCount": true,
                                "autoPlay": null,
                                "intersection": null,
                                "fallbackFrame": null,
                                "initialScene": null,
                                "framesPerSecond": 20,
                                "objects": [{
                                    "targetLocalId": 25,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 5,
                                            "properties": {
                                                "top": {
                                                    "localId": 170,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 16,
                                            "properties": {
                                                "top": {
                                                    "localId": 171,
                                                    "value": "209px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 30,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 1190,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 1191,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1194,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 1196,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 25,
                                            "properties": {
                                                "width": {
                                                    "localId": 1192,
                                                    "value": "374px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 1193,
                                                    "value": "223px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1195,
                                                    "value": "-57px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 1197,
                                                    "value": "-26px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 42,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 181,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 183,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 185,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 10,
                                            "properties": {
                                                "top": {
                                                    "localId": 175,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 25,
                                            "properties": {
                                                "top": {
                                                    "localId": 176,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 40,
                                            "properties": {
                                                "width": {
                                                    "localId": 182,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 184,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 186,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 187,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 45,
                                            "properties": {
                                                "width": {
                                                    "localId": 192,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 193,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 194,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 195,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 50,
                                            "properties": {
                                                "left": {
                                                    "localId": 197,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 198,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 199,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 200,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 55,
                                            "properties": {
                                                "left": {
                                                    "localId": 201,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 202,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 203,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 204,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 60,
                                            "properties": {
                                                "height": {
                                                    "localId": 205,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 206,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 207,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 208,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 75,
                                            "properties": {
                                                "left": {
                                                    "localId": 209,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 210,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 211,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 212,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 80,
                                            "properties": {
                                                "left": {
                                                    "localId": 213,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 214,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 215,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 216,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 85,
                                            "properties": {
                                                "left": {
                                                    "localId": 217,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 218,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 219,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 220,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 90,
                                            "properties": {
                                                "left": {
                                                    "localId": 221,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 222,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 223,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 224,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 95,
                                            "properties": {
                                                "left": {
                                                    "localId": 225,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 226,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 227,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 228,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 84,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 2,
                                            "properties": {
                                                "left": {
                                                    "localId": 106,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 17,
                                            "properties": {
                                                "left": {
                                                    "localId": 107,
                                                    "value": "10px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 232,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 288,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 289,
                                                    "value": 0.6,
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 1859,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 6,
                                            "properties": {
                                                "left": {
                                                    "localId": 1889,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 21,
                                            "properties": {
                                                "left": {
                                                    "localId": 1890,
                                                    "value": "10px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }],
                                "isAnimated": false
                            }],
                            "showOverflow": false,
                            "title": "Start",
                            "localId": 3,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "19px",
                                        "top": "277px"
                                    },
                                    "size": {
                                        "width": "114px",
                                        "height": "33px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_O_0000_download",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 4,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 26,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 25,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-15px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "325px",
                                        "height": "194px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_0005__DSC6543_olgreen_HiRes",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 1,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 23,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 30,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "154px",
                                        "top": "275px"
                                    },
                                    "size": {
                                        "width": "129px",
                                        "height": "34px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "cta_0001_Meer-info",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 5,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 41,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 42,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "250px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Button 2",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 6,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontLocalId": 47,
                                "fontSize": 16,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "scaleBaseHeight": 0,
                                "textColor": "#ffffff",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 0,
                                "background": "css",
                                "backgroundColor": false,
                                "backgroundColorUp": "linear-gradient(0deg, #4949CC, #5B5BFF)",
                                "backgroundColorDown": "linear-gradient(0deg, #3A3AA5, #4C4CD8)",
                                "backgroundColorHover": "linear-gradient(0deg, #6161F2, #7878F2)",
                                "border": true,
                                "borderWidth": 1,
                                "borderColor": "rgba(255,179,0,1)",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 5,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "foregroundForCss": "image",
                                "foregroundForImage": "image",
                                "callToActionText": "Button",
                                "textColorDown": "#ffffff",
                                "textColorHover": "#ffffff",
                                "foregroundStretchImage": false,
                                "clazz": "Button",
                                "localId": 48,
                                "fieldName": "Button 2",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-310px",
                                        "top": "147px"
                                    },
                                    "size": {
                                        "width": "271px",
                                        "height": "14px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Ol_0017_Van-System-Engineers-tot-Architecten-",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 7,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 83,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 84,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-137px",
                                        "top": "-34px"
                                    },
                                    "size": {
                                        "width": "600px",
                                        "height": "500px"
                                    },
                                    "rotation": 180,
                                    "opacity": 0,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "2_0000_Rectangle-1",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 2,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 231,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 232,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-10px",
                                        "top": "194px"
                                    },
                                    "size": {
                                        "width": "316px",
                                        "height": "60px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Shapey 3",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 3,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "rgba(255,255,255,1)",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 269,
                                "fieldName": "Shapey 3",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-1px",
                                        "top": "-1px"
                                    },
                                    "size": {
                                        "width": "303px",
                                        "height": "253px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [{
                                    "localId": 1267,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 1268,
                                                        "disabled": false,
                                                        "actionClazz": "CreativeUnit",
                                                        "instanceLocalId": 1,
                                                        "method": "goToURL",
                                                        "isStatic": false,
                                                        "args": {
                                                            "url": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding",
                                                            "reportLabel": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding"
                                                        },
                                                        "isAnimated": false
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false,
                                    "isAnimated": false
                                }],
                                "name": "Hotspot 4",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 10,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Hotspot",
                                "localId": 1257,
                                "fieldName": "Hotspot 4",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-310px",
                                        "top": "164px"
                                    },
                                    "size": {
                                        "width": "259px",
                                        "height": "14px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "3_0016_Olgreen-ontzorgd-in-IT-vraagstukken-",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 9,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 1858,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 1859,
                                "isAnimated": true
                            }],
                            "clazz": "Screen",
                            "guidelines": [{
                                "localId": 188,
                                "orientation": "v",
                                "position": "218px",
                                "isAnimated": false
                            }, {
                                "localId": 189,
                                "orientation": "h",
                                "position": "221px",
                                "isAnimated": false
                            }, {
                                "localId": 190,
                                "orientation": "h",
                                "position": "222px",
                                "isAnimated": false
                            }],
                            "isAnimated": false,
                            "immediatelyPlayedScenes": {
                                "appear": {
                                    "scenesLocalIds": ["102"]
                                },
                                "firstAppear": {
                                    "scenesLocalIds": []
                                }
                            },
                            "reachableScreensLocalIds": [356],
                            "dynamicReachableScreenConditions": {}
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "triggers": [{
                                "localId": 300,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 301,
                                                    "disabled": false,
                                                    "actionClazz": "Scene",
                                                    "instanceLocalId": "302",
                                                    "method": "playScene",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": "302"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1350,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "sleep",
                                                    "isStatic": true,
                                                    "args": {
                                                        "duration": "1200"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1351,
                                                    "disabled": false,
                                                    "actionClazz": "CreativeUnit",
                                                    "instanceLocalId": 1,
                                                    "method": "goToScreen",
                                                    "isStatic": false,
                                                    "args": {
                                                        "screenLocalId": "867",
                                                        "animation": "cube",
                                                        "direction": "west",
                                                        "duration": 300
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1352,
                                                    "disabled": false,
                                                    "actionClazz": "Screen",
                                                    "instanceLocalId": "356",
                                                    "method": "reset",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": "356",
                                                        "actionClazz": "Screen"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false,
                                "isAnimated": false
                            }],
                            "scenes": [{
                                "clazz": "Scene",
                                "localId": 302,
                                "name": "Scene 1",
                                "type": "time",
                                "duration": 10,
                                "onEnd": "stop",
                                "onEndRepeatCount": 0,
                                "onEndReverseCount": 0,
                                "onEndWaitForCount": true,
                                "autoPlay": null,
                                "intersection": null,
                                "fallbackFrame": null,
                                "initialScene": null,
                                "framesPerSecond": 20,
                                "objects": [{
                                    "targetLocalId": 357,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 5,
                                            "properties": {
                                                "top": {
                                                    "localId": 381,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 16,
                                            "properties": {
                                                "top": {
                                                    "localId": 382,
                                                    "value": "209px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 359,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 383,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 384,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 385,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 10,
                                            "properties": {
                                                "top": {
                                                    "localId": 386,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 25,
                                            "properties": {
                                                "top": {
                                                    "localId": 387,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 40,
                                            "properties": {
                                                "width": {
                                                    "localId": 388,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 389,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 390,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 391,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 45,
                                            "properties": {
                                                "width": {
                                                    "localId": 392,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 393,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 394,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 395,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 50,
                                            "properties": {
                                                "left": {
                                                    "localId": 396,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 397,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 398,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 399,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 55,
                                            "properties": {
                                                "left": {
                                                    "localId": 400,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 401,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 402,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 403,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 60,
                                            "properties": {
                                                "height": {
                                                    "localId": 404,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 405,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 406,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 407,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 75,
                                            "properties": {
                                                "left": {
                                                    "localId": 408,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 409,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 410,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 411,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 80,
                                            "properties": {
                                                "left": {
                                                    "localId": 412,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 413,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 414,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 415,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 85,
                                            "properties": {
                                                "left": {
                                                    "localId": 416,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 417,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 418,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 419,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 90,
                                            "properties": {
                                                "left": {
                                                    "localId": 420,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 421,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 422,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 423,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 95,
                                            "properties": {
                                                "left": {
                                                    "localId": 424,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 425,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 426,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 427,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 363,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 432,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 433,
                                                    "value": 0.6,
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 1044,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 1207,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 1208,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1211,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 1212,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "width": {
                                                    "localId": 1209,
                                                    "value": "377px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 1210,
                                                    "value": "250px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1213,
                                                    "value": "-25px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 1214,
                                                    "value": "-14px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 1912,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 75,
                                            "properties": {
                                                "left": {
                                                    "localId": 1941,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 90,
                                            "properties": {
                                                "left": {
                                                    "localId": 1942,
                                                    "value": "10px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2555,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "left": {
                                                    "localId": 2578,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                },
                                                "opacity": {
                                                    "localId": 2579,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 15,
                                            "properties": {
                                                "left": {
                                                    "localId": 2580,
                                                    "value": "10px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 70,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 2581,
                                                    "value": 1,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 75,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 2582,
                                                    "value": 0,
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }],
                                "isAnimated": false
                            }],
                            "showOverflow": false,
                            "title": "02",
                            "localId": 356,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "19px",
                                        "top": "277px"
                                    },
                                    "size": {
                                        "width": "114px",
                                        "height": "33px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_O_0000_download",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 4,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 26,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 357,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "154px",
                                        "top": "275px"
                                    },
                                    "size": {
                                        "width": "129px",
                                        "height": "34px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "cta_0001_Meer-info",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 5,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 41,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 359,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "250px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Button 2",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 6,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontLocalId": 47,
                                "fontSize": 16,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "scaleBaseHeight": 0,
                                "textColor": "#ffffff",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 0,
                                "background": "css",
                                "backgroundColor": false,
                                "backgroundColorUp": "linear-gradient(0deg, #4949CC, #5B5BFF)",
                                "backgroundColorDown": "linear-gradient(0deg, #3A3AA5, #4C4CD8)",
                                "backgroundColorHover": "linear-gradient(0deg, #6161F2, #7878F2)",
                                "border": true,
                                "borderWidth": 1,
                                "borderColor": "rgba(255,179,0,1)",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 5,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "foregroundForCss": "image",
                                "foregroundForImage": "image",
                                "callToActionText": "Button",
                                "textColorDown": "#ffffff",
                                "textColorHover": "#ffffff",
                                "foregroundStretchImage": false,
                                "clazz": "Button",
                                "localId": 360,
                                "fieldName": "Button 2",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-137px",
                                        "top": "-34px"
                                    },
                                    "size": {
                                        "width": "600px",
                                        "height": "500px"
                                    },
                                    "rotation": 180,
                                    "opacity": 0,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "2_0000_Rectangle-1",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 2,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 231,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 363,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-10px",
                                        "top": "194px"
                                    },
                                    "size": {
                                        "width": "316px",
                                        "height": "60px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Shapey 3",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 3,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "rgba(255,255,255,1)",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 364,
                                "fieldName": "Shapey 3",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "-2px"
                                    },
                                    "size": {
                                        "width": "323px",
                                        "height": "215px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_0003__DSC6740_oranje_beker",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 1,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 22,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 1044,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-1px",
                                        "top": "-1px"
                                    },
                                    "size": {
                                        "width": "303px",
                                        "height": "253px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [{
                                    "localId": 1277,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 1278,
                                                        "disabled": false,
                                                        "actionClazz": "CreativeUnit",
                                                        "instanceLocalId": 1,
                                                        "method": "goToURL",
                                                        "isStatic": false,
                                                        "args": {
                                                            "url": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding",
                                                            "reportLabel": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding"
                                                        },
                                                        "isAnimated": false
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false,
                                    "isAnimated": false
                                }],
                                "name": "Hotspot 4 copy",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 10,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Hotspot",
                                "localId": 1279,
                                "fieldName": "Hotspot 4 copy",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-256px",
                                        "top": "148px"
                                    },
                                    "size": {
                                        "width": "169px",
                                        "height": "28px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "3_0014_Onze-specialisten--helpen-jou-graag--verder---",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 7,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 1911,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 1912,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-274px",
                                        "top": "147px"
                                    },
                                    "size": {
                                        "width": "268px",
                                        "height": "28px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "3_0017_Hulp-nodig-bij-een-migratie-naar-Cloud-of-behoefte-aan-security",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 9,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 2554,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2555,
                                "isAnimated": true
                            }],
                            "clazz": "Screen",
                            "guidelines": [{
                                "localId": 365,
                                "orientation": "v",
                                "position": "218px",
                                "isAnimated": false
                            }, {
                                "localId": 366,
                                "orientation": "h",
                                "position": "221px",
                                "isAnimated": false
                            }, {
                                "localId": 367,
                                "orientation": "h",
                                "position": "222px",
                                "isAnimated": false
                            }],
                            "isAnimated": false,
                            "immediatelyPlayedScenes": {
                                "appear": {
                                    "scenesLocalIds": ["302"]
                                },
                                "firstAppear": {
                                    "scenesLocalIds": []
                                }
                            },
                            "reachableScreensLocalIds": [867],
                            "dynamicReachableScreenConditions": {}
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "triggers": [{
                                "localId": 808,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 809,
                                                    "disabled": false,
                                                    "actionClazz": "Scene",
                                                    "instanceLocalId": "810",
                                                    "method": "playScene",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": "810"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1362,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "sleep",
                                                    "isStatic": true,
                                                    "args": {
                                                        "duration": "1200"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1363,
                                                    "disabled": false,
                                                    "actionClazz": "CreativeUnit",
                                                    "instanceLocalId": 1,
                                                    "method": "goToScreen",
                                                    "isStatic": false,
                                                    "args": {
                                                        "screenLocalId": "554",
                                                        "animation": "cube",
                                                        "direction": "west",
                                                        "duration": 300
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1364,
                                                    "disabled": false,
                                                    "actionClazz": "Screen",
                                                    "instanceLocalId": "867",
                                                    "method": "reset",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": "867",
                                                        "actionClazz": "Screen"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false,
                                "isAnimated": false
                            }],
                            "scenes": [{
                                "clazz": "Scene",
                                "localId": 810,
                                "name": "Scene 1",
                                "type": "time",
                                "duration": 10,
                                "onEnd": "stop",
                                "onEndRepeatCount": 0,
                                "onEndReverseCount": 0,
                                "onEndWaitForCount": true,
                                "autoPlay": null,
                                "intersection": null,
                                "fallbackFrame": null,
                                "initialScene": null,
                                "framesPerSecond": 20,
                                "objects": [{
                                    "targetLocalId": 868,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 5,
                                            "properties": {
                                                "top": {
                                                    "localId": 892,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 16,
                                            "properties": {
                                                "top": {
                                                    "localId": 893,
                                                    "value": "209px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 870,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 894,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 895,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 896,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 10,
                                            "properties": {
                                                "top": {
                                                    "localId": 897,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 25,
                                            "properties": {
                                                "top": {
                                                    "localId": 898,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 40,
                                            "properties": {
                                                "width": {
                                                    "localId": 899,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 900,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 901,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 902,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 45,
                                            "properties": {
                                                "width": {
                                                    "localId": 903,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 904,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 905,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 906,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 50,
                                            "properties": {
                                                "left": {
                                                    "localId": 907,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 908,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 909,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 910,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 55,
                                            "properties": {
                                                "left": {
                                                    "localId": 911,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 912,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 913,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 914,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 60,
                                            "properties": {
                                                "height": {
                                                    "localId": 915,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 916,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 917,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 918,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 75,
                                            "properties": {
                                                "left": {
                                                    "localId": 919,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 920,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 921,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 922,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 80,
                                            "properties": {
                                                "left": {
                                                    "localId": 923,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 924,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 925,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 926,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 85,
                                            "properties": {
                                                "left": {
                                                    "localId": 927,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 928,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 929,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 930,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 90,
                                            "properties": {
                                                "left": {
                                                    "localId": 931,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 932,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 933,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 934,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 95,
                                            "properties": {
                                                "left": {
                                                    "localId": 935,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 936,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 937,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 938,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 872,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 939,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 940,
                                                    "value": 0.6,
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 1082,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 1224,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 1225,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1228,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 1230,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "width": {
                                                    "localId": 1226,
                                                    "value": "378px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 1227,
                                                    "value": "253px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1229,
                                                    "value": "-48px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 1231,
                                                    "value": "-28px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 1964,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "left": {
                                                    "localId": 1983,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                },
                                                "opacity": {
                                                    "localId": 1984,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 15,
                                            "properties": {
                                                "left": {
                                                    "localId": 1985,
                                                    "value": "10px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 70,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 1986,
                                                    "value": 1,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 75,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 1987,
                                                    "value": 0,
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2010,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 75,
                                            "properties": {
                                                "left": {
                                                    "localId": 2039,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 90,
                                            "properties": {
                                                "left": {
                                                    "localId": 2040,
                                                    "value": "10px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }],
                                "isAnimated": false
                            }],
                            "showOverflow": false,
                            "title": "03",
                            "localId": 867,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "19px",
                                        "top": "277px"
                                    },
                                    "size": {
                                        "width": "114px",
                                        "height": "33px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_O_0000_download",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 4,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 26,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 868,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "154px",
                                        "top": "275px"
                                    },
                                    "size": {
                                        "width": "129px",
                                        "height": "34px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "cta_0001_Meer-info",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 5,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 41,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 870,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "250px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Button 2",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 6,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontLocalId": 47,
                                "fontSize": 16,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "scaleBaseHeight": 0,
                                "textColor": "#ffffff",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 0,
                                "background": "css",
                                "backgroundColor": false,
                                "backgroundColorUp": "linear-gradient(0deg, #4949CC, #5B5BFF)",
                                "backgroundColorDown": "linear-gradient(0deg, #3A3AA5, #4C4CD8)",
                                "backgroundColorHover": "linear-gradient(0deg, #6161F2, #7878F2)",
                                "border": true,
                                "borderWidth": 1,
                                "borderColor": "rgba(255,179,0,1)",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 5,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "foregroundForCss": "image",
                                "foregroundForImage": "image",
                                "callToActionText": "Button",
                                "textColorDown": "#ffffff",
                                "textColorHover": "#ffffff",
                                "foregroundStretchImage": false,
                                "clazz": "Button",
                                "localId": 871,
                                "fieldName": "Button 2",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-137px",
                                        "top": "-34px"
                                    },
                                    "size": {
                                        "width": "600px",
                                        "height": "500px"
                                    },
                                    "rotation": 180,
                                    "opacity": 0,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "2_0000_Rectangle-1",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 2,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 231,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 872,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-10px",
                                        "top": "194px"
                                    },
                                    "size": {
                                        "width": "316px",
                                        "height": "60px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Shapey 3",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 3,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "rgba(255,255,255,1)",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 873,
                                "fieldName": "Shapey 3",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "200px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_0002__DSC6826_olgreen_HiRes",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 1,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 21,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 1082,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-1px",
                                        "top": "-1px"
                                    },
                                    "size": {
                                        "width": "303px",
                                        "height": "253px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [{
                                    "localId": 1297,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 1298,
                                                        "disabled": false,
                                                        "actionClazz": "CreativeUnit",
                                                        "instanceLocalId": 1,
                                                        "method": "goToURL",
                                                        "isStatic": false,
                                                        "args": {
                                                            "url": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding",
                                                            "reportLabel": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding"
                                                        },
                                                        "isAnimated": false
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false,
                                    "isAnimated": false
                                }],
                                "name": "Hotspot 4 copy 2",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 10,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Hotspot",
                                "localId": 1299,
                                "fieldName": "Hotspot 4 copy 2",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-270px",
                                        "top": "148px"
                                    },
                                    "size": {
                                        "width": "232px",
                                        "height": "29px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "3_0013_Heb-jij-een-IT-uitdaging,--maar-niet-de-juiste-specialisten_---",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 7,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 1963,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 1964,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-279px",
                                        "top": "161px"
                                    },
                                    "size": {
                                        "width": "241px",
                                        "height": "14px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "3_0012_Olgreen,-meer-dan-IT-detacheren---",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 9,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 2009,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2010,
                                "isAnimated": true
                            }],
                            "clazz": "Screen",
                            "guidelines": [{
                                "localId": 876,
                                "orientation": "v",
                                "position": "218px",
                                "isAnimated": false
                            }, {
                                "localId": 877,
                                "orientation": "h",
                                "position": "221px",
                                "isAnimated": false
                            }, {
                                "localId": 878,
                                "orientation": "h",
                                "position": "222px",
                                "isAnimated": false
                            }],
                            "isAnimated": false,
                            "immediatelyPlayedScenes": {
                                "appear": {
                                    "scenesLocalIds": ["810"]
                                },
                                "firstAppear": {
                                    "scenesLocalIds": []
                                }
                            },
                            "reachableScreensLocalIds": [554],
                            "dynamicReachableScreenConditions": {}
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "triggers": [{
                                "localId": 495,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 496,
                                                    "disabled": false,
                                                    "actionClazz": "Scene",
                                                    "instanceLocalId": "497",
                                                    "method": "playScene",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": "497"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1374,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "sleep",
                                                    "isStatic": true,
                                                    "args": {
                                                        "duration": "1200"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1375,
                                                    "disabled": false,
                                                    "actionClazz": "CreativeUnit",
                                                    "instanceLocalId": 1,
                                                    "method": "goToScreen",
                                                    "isStatic": false,
                                                    "args": {
                                                        "screenLocalId": "2336",
                                                        "animation": "cube",
                                                        "direction": "west",
                                                        "duration": 300
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1376,
                                                    "disabled": false,
                                                    "actionClazz": "Screen",
                                                    "instanceLocalId": "554",
                                                    "method": "reset",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": "554",
                                                        "actionClazz": "Screen"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false,
                                "isAnimated": false
                            }],
                            "scenes": [{
                                "clazz": "Scene",
                                "localId": 497,
                                "name": "Scene 1",
                                "type": "time",
                                "duration": 10,
                                "onEnd": "stop",
                                "onEndRepeatCount": 0,
                                "onEndReverseCount": 0,
                                "onEndWaitForCount": true,
                                "autoPlay": null,
                                "intersection": null,
                                "fallbackFrame": null,
                                "initialScene": null,
                                "framesPerSecond": 20,
                                "objects": [{
                                    "targetLocalId": 555,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 5,
                                            "properties": {
                                                "top": {
                                                    "localId": 579,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 16,
                                            "properties": {
                                                "top": {
                                                    "localId": 580,
                                                    "value": "209px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 557,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 581,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 582,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 583,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 10,
                                            "properties": {
                                                "top": {
                                                    "localId": 584,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 25,
                                            "properties": {
                                                "top": {
                                                    "localId": 585,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 40,
                                            "properties": {
                                                "width": {
                                                    "localId": 586,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 587,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 588,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 589,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 45,
                                            "properties": {
                                                "width": {
                                                    "localId": 590,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 591,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 592,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 593,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 50,
                                            "properties": {
                                                "left": {
                                                    "localId": 594,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 595,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 596,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 597,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 55,
                                            "properties": {
                                                "left": {
                                                    "localId": 598,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 599,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 600,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 601,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 60,
                                            "properties": {
                                                "height": {
                                                    "localId": 602,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 603,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 604,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 605,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 75,
                                            "properties": {
                                                "left": {
                                                    "localId": 606,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 607,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 608,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 609,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 80,
                                            "properties": {
                                                "left": {
                                                    "localId": 610,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 611,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 612,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 613,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 85,
                                            "properties": {
                                                "left": {
                                                    "localId": 614,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 615,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 616,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 617,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 90,
                                            "properties": {
                                                "left": {
                                                    "localId": 618,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 619,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 620,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 621,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 95,
                                            "properties": {
                                                "left": {
                                                    "localId": 622,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 623,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 624,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 625,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 559,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 626,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1735,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 627,
                                                    "value": 0.6,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 30,
                                            "properties": {
                                                "left": {
                                                    "localId": 1736,
                                                    "value": "-138px",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 1152,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 1241,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 1242,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1245,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 1246,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "width": {
                                                    "localId": 1243,
                                                    "value": "419px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 1244,
                                                    "value": "279px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 1247,
                                                    "value": "-60px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 1248,
                                                    "value": "-10px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2062,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 15,
                                            "properties": {
                                                "left": {
                                                    "localId": 2133,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 30,
                                            "properties": {
                                                "left": {
                                                    "localId": 2134,
                                                    "value": "11px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2623,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "left": {
                                                    "localId": 2651,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 15,
                                            "properties": {
                                                "left": {
                                                    "localId": 2652,
                                                    "value": "10px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }],
                                "isAnimated": false
                            }],
                            "showOverflow": false,
                            "title": "04",
                            "localId": 554,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "19px",
                                        "top": "277px"
                                    },
                                    "size": {
                                        "width": "114px",
                                        "height": "33px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_O_0000_download",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 4,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 26,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 555,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "154px",
                                        "top": "275px"
                                    },
                                    "size": {
                                        "width": "129px",
                                        "height": "34px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "cta_0001_Meer-info",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 5,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 41,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 557,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "250px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Button 2",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 6,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontLocalId": 47,
                                "fontSize": 16,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "scaleBaseHeight": 0,
                                "textColor": "#ffffff",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 0,
                                "background": "css",
                                "backgroundColor": false,
                                "backgroundColorUp": "linear-gradient(0deg, #4949CC, #5B5BFF)",
                                "backgroundColorDown": "linear-gradient(0deg, #3A3AA5, #4C4CD8)",
                                "backgroundColorHover": "linear-gradient(0deg, #6161F2, #7878F2)",
                                "border": true,
                                "borderWidth": 1,
                                "borderColor": "rgba(255,179,0,1)",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 5,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "foregroundForCss": "image",
                                "foregroundForImage": "image",
                                "callToActionText": "Button",
                                "textColorDown": "#ffffff",
                                "textColorHover": "#ffffff",
                                "foregroundStretchImage": false,
                                "clazz": "Button",
                                "localId": 558,
                                "fieldName": "Button 2",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-137px",
                                        "top": "-34px"
                                    },
                                    "size": {
                                        "width": "600px",
                                        "height": "500px"
                                    },
                                    "rotation": 180,
                                    "opacity": 0,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "2_0000_Rectangle-1",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 2,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 231,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 559,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-10px",
                                        "top": "194px"
                                    },
                                    "size": {
                                        "width": "316px",
                                        "height": "60px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Shapey 3",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 3,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "rgba(255,255,255,1)",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 560,
                                "fieldName": "Shapey 3",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "-2px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "200px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_0001__DSC7090_2_olgreen_HiRes",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 1,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 19,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 1152,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-1px",
                                        "top": "-1px"
                                    },
                                    "size": {
                                        "width": "303px",
                                        "height": "253px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [{
                                    "localId": 1317,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 1318,
                                                        "disabled": false,
                                                        "actionClazz": "CreativeUnit",
                                                        "instanceLocalId": 1,
                                                        "method": "goToURL",
                                                        "isStatic": false,
                                                        "args": {
                                                            "url": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding",
                                                            "reportLabel": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding"
                                                        },
                                                        "isAnimated": false
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false,
                                    "isAnimated": false
                                }],
                                "name": "Hotspot 4 copy 3",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 10,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Hotspot",
                                "localId": 1319,
                                "fieldName": "Hotspot 4 copy 3",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-248px",
                                        "top": "162px"
                                    },
                                    "size": {
                                        "width": "224px",
                                        "height": "13px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "1_0010_Olgreen,-meer-dan-IT-detacheren---",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 9,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 2061,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2062,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-246px",
                                        "top": "148px"
                                    },
                                    "size": {
                                        "width": "205px",
                                        "height": "14px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "3_0011_We-do-IT.-Laat-ons-jou-helpen---",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 8,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 2622,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2623,
                                "isAnimated": true
                            }],
                            "clazz": "Screen",
                            "guidelines": [{
                                "localId": 563,
                                "orientation": "v",
                                "position": "218px",
                                "isAnimated": false
                            }, {
                                "localId": 564,
                                "orientation": "h",
                                "position": "221px",
                                "isAnimated": false
                            }, {
                                "localId": 565,
                                "orientation": "h",
                                "position": "222px",
                                "isAnimated": false
                            }],
                            "isAnimated": false,
                            "immediatelyPlayedScenes": {
                                "appear": {
                                    "scenesLocalIds": ["497"]
                                },
                                "firstAppear": {
                                    "scenesLocalIds": []
                                }
                            },
                            "reachableScreensLocalIds": [2336],
                            "dynamicReachableScreenConditions": {}
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "triggers": [{
                                "localId": 2267,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 2268,
                                                    "disabled": false,
                                                    "actionClazz": "Scene",
                                                    "instanceLocalId": 2272,
                                                    "method": "playScene",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": 2272
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 2269,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "sleep",
                                                    "isStatic": true,
                                                    "args": {
                                                        "duration": "1200"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 2270,
                                                    "disabled": false,
                                                    "actionClazz": "CreativeUnit",
                                                    "instanceLocalId": 1,
                                                    "method": "goToScreen",
                                                    "isStatic": false,
                                                    "args": {
                                                        "screenLocalId": "3",
                                                        "animation": "cube",
                                                        "direction": "west",
                                                        "duration": 300
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }, {
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 2271,
                                                    "disabled": false,
                                                    "actionClazz": "Screen",
                                                    "instanceLocalId": 2336,
                                                    "method": "reset",
                                                    "isStatic": false,
                                                    "args": {
                                                        "target": 2336,
                                                        "actionClazz": "Screen"
                                                    },
                                                    "isAnimated": false
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false,
                                "isAnimated": false
                            }],
                            "scenes": [{
                                "clazz": "Scene",
                                "localId": 2272,
                                "name": "Scene 1",
                                "type": "time",
                                "duration": 10,
                                "onEnd": "stop",
                                "onEndRepeatCount": 0,
                                "onEndReverseCount": 0,
                                "onEndWaitForCount": true,
                                "autoPlay": null,
                                "intersection": null,
                                "fallbackFrame": null,
                                "initialScene": null,
                                "framesPerSecond": 20,
                                "objects": [{
                                    "targetLocalId": 2337,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 5,
                                            "properties": {
                                                "top": {
                                                    "localId": 2273,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 16,
                                            "properties": {
                                                "top": {
                                                    "localId": 2274,
                                                    "value": "209px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2338,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "width": {
                                                    "localId": 2275,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2276,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 2277,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 10,
                                            "properties": {
                                                "top": {
                                                    "localId": 2278,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 25,
                                            "properties": {
                                                "top": {
                                                    "localId": 2279,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 40,
                                            "properties": {
                                                "width": {
                                                    "localId": 2280,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2281,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 2282,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2283,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 45,
                                            "properties": {
                                                "width": {
                                                    "localId": 2284,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2285,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 2286,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2287,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 50,
                                            "properties": {
                                                "left": {
                                                    "localId": 2288,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2289,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2290,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2291,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 55,
                                            "properties": {
                                                "left": {
                                                    "localId": 2292,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2293,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2294,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2295,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 60,
                                            "properties": {
                                                "height": {
                                                    "localId": 2296,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2297,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2298,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 2299,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 75,
                                            "properties": {
                                                "left": {
                                                    "localId": 2300,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2301,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2302,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2303,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 80,
                                            "properties": {
                                                "left": {
                                                    "localId": 2304,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2305,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2306,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2307,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 85,
                                            "properties": {
                                                "left": {
                                                    "localId": 2308,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2309,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2310,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2311,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 90,
                                            "properties": {
                                                "left": {
                                                    "localId": 2312,
                                                    "value": "162px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2313,
                                                    "value": "208px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2314,
                                                    "value": "113px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2315,
                                                    "value": "30px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 95,
                                            "properties": {
                                                "left": {
                                                    "localId": 2316,
                                                    "value": "154px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2317,
                                                    "value": "205px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2318,
                                                    "value": "129px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2319,
                                                    "value": "34px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2340,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 2320,
                                                    "value": null,
                                                    "isAnimated": false
                                                },
                                                "left": {
                                                    "localId": 2321,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 2322,
                                                    "value": 0.6,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 30,
                                            "properties": {
                                                "left": {
                                                    "localId": 2323,
                                                    "value": "-138px",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2426,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "left": {
                                                    "localId": 2498,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2499,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2500,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2501,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 20,
                                            "properties": {
                                                "left": {
                                                    "localId": 2502,
                                                    "value": "-60px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "top": {
                                                    "localId": 2503,
                                                    "value": "-27px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "width": {
                                                    "localId": 2504,
                                                    "value": "419px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                },
                                                "height": {
                                                    "localId": 2505,
                                                    "value": "279px",
                                                    "timingFunction": "ease-in-out",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2719,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 0,
                                            "properties": {
                                                "left": {
                                                    "localId": 2770,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                },
                                                "opacity": {
                                                    "localId": 2771,
                                                    "value": null,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 15,
                                            "properties": {
                                                "left": {
                                                    "localId": 2772,
                                                    "value": "10px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 70,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 2773,
                                                    "value": 1,
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 75,
                                            "properties": {
                                                "opacity": {
                                                    "localId": 2774,
                                                    "value": 0,
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }, {
                                    "targetLocalId": 2776,
                                    "layoutSpecificValues": [
                                        [{
                                            "frame": 75,
                                            "properties": {
                                                "left": {
                                                    "localId": 2843,
                                                    "value": null,
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }, {
                                            "frame": 90,
                                            "properties": {
                                                "left": {
                                                    "localId": 2844,
                                                    "value": "11px",
                                                    "timingFunction": "ease-in-out-sine",
                                                    "isAnimated": false
                                                }
                                            }
                                        }]
                                    ]
                                }],
                                "isAnimated": false
                            }],
                            "showOverflow": false,
                            "title": "05",
                            "localId": 2336,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "19px",
                                        "top": "277px"
                                    },
                                    "size": {
                                        "width": "114px",
                                        "height": "33px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_O_0000_download",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 4,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 26,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2337,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "154px",
                                        "top": "275px"
                                    },
                                    "size": {
                                        "width": "129px",
                                        "height": "34px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "cta_0001_Meer-info",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 5,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 41,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2338,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "250px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Button 2",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 6,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontLocalId": 47,
                                "fontSize": 16,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "scaleBaseHeight": 0,
                                "textColor": "#ffffff",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 0,
                                "background": "css",
                                "backgroundColor": false,
                                "backgroundColorUp": "linear-gradient(0deg, #4949CC, #5B5BFF)",
                                "backgroundColorDown": "linear-gradient(0deg, #3A3AA5, #4C4CD8)",
                                "backgroundColorHover": "linear-gradient(0deg, #6161F2, #7878F2)",
                                "border": true,
                                "borderWidth": 1,
                                "borderColor": "rgba(255,179,0,1)",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 5,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "foregroundForCss": "image",
                                "foregroundForImage": "image",
                                "callToActionText": "Button",
                                "textColorDown": "#ffffff",
                                "textColorHover": "#ffffff",
                                "foregroundStretchImage": false,
                                "clazz": "Button",
                                "localId": 2339,
                                "fieldName": "Button 2",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-137px",
                                        "top": "-34px"
                                    },
                                    "size": {
                                        "width": "600px",
                                        "height": "500px"
                                    },
                                    "rotation": 180,
                                    "opacity": 0,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "2_0000_Rectangle-1",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 2,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 231,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2340,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-10px",
                                        "top": "194px"
                                    },
                                    "size": {
                                        "width": "316px",
                                        "height": "60px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "Shapey 3",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 3,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "rgba(255,255,255,1)",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 2341,
                                "fieldName": "Shapey 3",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-1px",
                                        "top": "-1px"
                                    },
                                    "size": {
                                        "width": "303px",
                                        "height": "253px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [{
                                    "localId": 2343,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 2344,
                                                        "disabled": false,
                                                        "actionClazz": "CreativeUnit",
                                                        "instanceLocalId": 1,
                                                        "method": "goToURL",
                                                        "isStatic": false,
                                                        "args": {
                                                            "url": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding",
                                                            "reportLabel": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding"
                                                        },
                                                        "isAnimated": false
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false,
                                    "isAnimated": false
                                }],
                                "name": "Hotspot 4 copy 3",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 9,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Hotspot",
                                "localId": 2345,
                                "fieldName": "Hotspot 4 copy 3",
                                "isAnimated": false
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "208px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "O_0006__DSC6008_olgreen_HiRes",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 1,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 24,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2426,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-248px",
                                        "top": "146px"
                                    },
                                    "size": {
                                        "width": "170px",
                                        "height": "29px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "3_0015_Ben-jij-op-zoek-naar-een--uitdagende-IT-functie_-Solliciteer-da-copy",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 7,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 2718,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2719,
                                "isAnimated": true
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-245px",
                                        "top": "161px"
                                    },
                                    "size": {
                                        "width": "206px",
                                        "height": "14px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "triggers": [],
                                "name": "3_0016_Solliciteer-dan-nu-bij-Olgreen---",
                                "aspectRatioLocked": true,
                                "coordinatesCentered": false,
                                "zIndex": 8,
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "feedFieldKey": null,
                                "fileLocalId": 2775,
                                "fittingSize": "fit",
                                "imagePosition": "center",
                                "assetSource": "file",
                                "importedFromLayoutFile": false,
                                "clazz": "Picture",
                                "localId": 2776,
                                "isAnimated": true
                            }],
                            "clazz": "Screen",
                            "guidelines": [{
                                "localId": 2348,
                                "orientation": "v",
                                "position": "218px",
                                "isAnimated": false
                            }, {
                                "localId": 2349,
                                "orientation": "h",
                                "position": "221px",
                                "isAnimated": false
                            }, {
                                "localId": 2350,
                                "orientation": "h",
                                "position": "222px",
                                "isAnimated": false
                            }],
                            "isAnimated": false,
                            "immediatelyPlayedScenes": {
                                "appear": {
                                    "scenesLocalIds": [2272]
                                },
                                "firstAppear": {
                                    "scenesLocalIds": []
                                }
                            },
                            "reachableScreensLocalIds": [3],
                            "dynamicReachableScreenConditions": {}
                        }],
                        "backgroundColor": "rgba(255,255,255,1)",
                        "scale": 2,
                        "sizing": "fixed",
                        "layoutAspectRatiosLocked": {
                            "independent": false
                        },
                        "layoutCustomUnitSizes": {
                            "independent": true
                        },
                        "orientation": "independent",
                        "layouts": [{
                            "orientation": "independent",
                            "minSize": {
                                "width": 0,
                                "height": 0
                            },
                            "unitSize": {
                                "width": 300,
                                "height": 250
                            },
                            "designTimeSize": {
                                "width": 300,
                                "height": 250
                            },
                            "unitAlignment": {
                                "horizontal": "center",
                                "vertical": "center"
                            }
                        }],
                        "layoutsLocked": {
                            "portrait": true,
                            "landscape": true,
                            "independent": true
                        },
                        "isAnimated": false
                    }
                },
                "unitSizes": {
                    "banner": {
                        "width": 300,
                        "height": 250
                    }
                },
                "files": [{
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 19,
                    "name": "O_0001__DSC7090_2_olgreen_HiRes.png",
                    "blobHash": "85f2d10663fbfd0892f2888f42652901f2cc8d325e9a49fa8c718a023e4e2192",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 151084
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 488305,
                        "contentType": "image/png",
                        "width": 600,
                        "height": 400
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 20,
                    "name": "O_0000__DSC7122_olgreen_HiRes.png",
                    "blobHash": "9dba4538effb29e8253a217f62a69e0498cc7824dc3de0709127692308fb944f",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 135269
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 413952,
                        "contentType": "image/png",
                        "width": 600,
                        "height": 436
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 21,
                    "name": "O_0002__DSC6826_olgreen_HiRes.png",
                    "blobHash": "314066de09c4a80b7c4672f673017e26bcaebbb70e2251190d7b4a08956e18ea",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 129380
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 417756,
                        "contentType": "image/png",
                        "width": 600,
                        "height": 400
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 22,
                    "name": "O_0003__DSC6740_oranje_beker.png",
                    "blobHash": "fef1d17613ec1bb4385dd63082cd127d83504f47d91eac823977417575ac8c6a",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 133837
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 438850,
                        "contentType": "image/png",
                        "width": 600,
                        "height": 400
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 23,
                    "name": "O_0005__DSC6543_olgreen_HiRes.png",
                    "blobHash": "34bcd3582e5756be0ec89f3025b094c94121643482a091d01b55a7acb2f247d4",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 136389
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 433821,
                        "contentType": "image/png",
                        "width": 600,
                        "height": 358
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 24,
                    "name": "O_0006__DSC6008_olgreen_HiRes.png",
                    "blobHash": "cee4b0cb0ee2555ce8e4ea1c347c5513f01fb07e5148b0a957f01c9b1e5bc770",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 150475
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 448838,
                        "contentType": "image/png",
                        "width": 600,
                        "height": 415
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 26,
                    "name": "O_O_0000_download.png",
                    "blobHash": "fd6a25e6217dbd87b929a0a585eaa94a9b3b1764b732cf09de6e81e07584779f",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 4526
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 11280,
                        "contentType": "image/png",
                        "width": 228,
                        "height": 59
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 41,
                    "name": "cta_0001_Meer-info.png",
                    "blobHash": "4d29a32af1989266ddc4086cc669921b6e8e3c8963e3e24c0a2f950fc64e5319",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 836
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 5009,
                        "contentType": "image/png",
                        "width": 222,
                        "height": 56
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 55,
                    "name": "Ol_0018_Van-System-Engineers-tot-Architecten-.png",
                    "blobHash": "ee19ac62421b0472ce3561af99457edb581aff3d3e4fd29fad987eabfef041be",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2234
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6985,
                        "contentType": "image/png",
                        "width": 542,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 63,
                    "name": "Ol_0017_Olgreen-ontzorgd-in-IT-vraagstukken!--copy.png",
                    "blobHash": "602eea9b2470ae113cb0d92b5eda2d3af12fdb3f94ccfde289dbfb28e922f781",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2388
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6906,
                        "contentType": "image/png",
                        "width": 526,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 83,
                    "name": "Ol_0017_Van-System-Engineers-tot-Architecten-.png",
                    "blobHash": "1b6c1938c615aa451c65ba9cd3cdbd6f5e74498b5da3dc4fd355a67ff9b43897",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2234
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6985,
                        "contentType": "image/png",
                        "width": 542,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 91,
                    "name": "Ol_0016_Olgreen-ontzorgd-in-IT-vraagstukken!-.png",
                    "blobHash": "ec4585c1718790b10e0df01858f5bf2d1e5d25da10bc9ebca11453f5922274c8",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2218
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 7096,
                        "contentType": "image/png",
                        "width": 526,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 231,
                    "name": "2_0000_Rectangle-1.png",
                    "blobHash": "9fecd58e10244d529d0fd4a241e1f2704411d2509f1522c5e5a10f18ef7bc384",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 45464
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 58510,
                        "contentType": "image/png",
                        "width": 600,
                        "height": 500
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 450,
                    "name": "Ol_0015_Hulp-nodig-bij-een-migratie--van-Azure,-Cloud-of-Security_-.png",
                    "blobHash": "301c972ce1a6c121485e7f6fd26b5dd82a4236e082e9e4d02bffae8e6ee50ec3",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 3323
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 9012,
                        "contentType": "image/png",
                        "width": 412,
                        "height": 57
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 475,
                    "name": "Ol_0014_Onze-specialisten--helpen-jou-graag--verder!---.png",
                    "blobHash": "ea9be0b7d2b35a7e746a1ccc59d312ebb262d3e9b698e8916221a9dd1129cb7c",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2679
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 7720,
                        "contentType": "image/png",
                        "width": 351,
                        "height": 57
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 651,
                    "name": "Ol_0013_Heb-jij-een-IT-uitdaging,--maar-niet-de-juiste-specialisten_---.png",
                    "blobHash": "b7de84bec2a6d47470a2fa1f80ca2a1b1f6d702550ea285407e641c60ac33e7b",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2955
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 8464,
                        "contentType": "image/png",
                        "width": 456,
                        "height": 57
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 670,
                    "name": "Ol_0012_Olgreen,-meer-dan-IT-detacheren!---.png",
                    "blobHash": "5456c971dbf003548e1a5ab40ca0caad733fe8c1b552905b69e7b48fc4ac7b14",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1817
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6256,
                        "contentType": "image/png",
                        "width": 473,
                        "height": 27
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 698,
                    "name": "Ol_0011_We-do-IT!-Laat-ons-jou-helpen!---.png",
                    "blobHash": "74ee5d569a1a03224475aeaeeb04f4eb1812752e13b75444194e19ce82f8dd0f",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1909
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6390,
                        "contentType": "image/png",
                        "width": 419,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 711,
                    "name": "Ol_0010_Olgreen,-meer-dan-IT-detacheren---.png",
                    "blobHash": "ad89c19f4bb29afd37315ee12d605eaa5e786244819edf33156d36f67da8a151",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1725
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6136,
                        "contentType": "image/png",
                        "width": 465,
                        "height": 27
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 1569,
                    "name": "2_0015_Hulp-nodig-bij-een-migratie-naar-de-Cloud-of-behoefte-aan-secur.png",
                    "blobHash": "b98ce28a4a50bf30ca70c5cbe6d2945508926dcbe1094c5374c7658dc5b5ae19",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 4109
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 9645,
                        "contentType": "image/png",
                        "width": 546,
                        "height": 57
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 1648,
                    "name": "O_2_0010_Olgreen,-meer-dan-IT-detacheren!---.png",
                    "blobHash": "c8e872c13d0b789419703538be88927c675e15355b67929fcdede736657012c9",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1817
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6256,
                        "contentType": "image/png",
                        "width": 473,
                        "height": 27
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 1692,
                    "name": "O_2_0011_We-do-IT!-Laat-ons-jou-helpen!---.png",
                    "blobHash": "03e4d305b3669a35f22598239e19a3a109f8401c4030b6e9d31cf6553b469000",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1891
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6415,
                        "contentType": "image/png",
                        "width": 419,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 1858,
                    "name": "3_0016_Olgreen-ontzorgd-in-IT-vraagstukken-.png",
                    "blobHash": "4755c28c3bb58c9ede227dc03770850c43b3f3dc4692300e70f0827fcd5a4250",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2168
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 7012,
                        "contentType": "image/png",
                        "width": 518,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 1911,
                    "name": "3_0014_Onze-specialisten--helpen-jou-graag--verder---.png",
                    "blobHash": "d1964fcab33ab9a40874f105a479aba39277102fdc7ff7f5be0e5ed4a684a80c",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2669
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 7589,
                        "contentType": "image/png",
                        "width": 345,
                        "height": 57
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 1963,
                    "name": "3_0013_Heb-jij-een-IT-uitdaging,--maar-niet-de-juiste-specialisten_---.png",
                    "blobHash": "ce117e826b11e3f123d7bc46fab1da510ea66ca687b838336eb83941a6778c0a",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2891
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 8328,
                        "contentType": "image/png",
                        "width": 456,
                        "height": 57
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 2009,
                    "name": "3_0012_Olgreen,-meer-dan-IT-detacheren---.png",
                    "blobHash": "02606909ac77e725be51ab716db2f26006bc46552cb3bbb2e9ff04311d6c2c8a",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1725
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6136,
                        "contentType": "image/png",
                        "width": 465,
                        "height": 27
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 2061,
                    "name": "1_0010_Olgreen,-meer-dan-IT-detacheren---.png",
                    "blobHash": "6f4f1c555e3a40356f9ebf9949cd0c02d312b86335a713ed9f999dbc7011f6e7",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1725
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6136,
                        "contentType": "image/png",
                        "width": 465,
                        "height": 27
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 2074,
                    "name": "1_0011_We-do-IT!-Laat-ons-jou-helpen---.png",
                    "blobHash": "b13bd54aeaa0d23a9e74a7ba7acca2fa0c7787da623d0248894bd21c46d7e369",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1780
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6325,
                        "contentType": "image/png",
                        "width": 412,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 2554,
                    "name": "3_0017_Hulp-nodig-bij-een-migratie-naar-Cloud-of-behoefte-aan-security.png",
                    "blobHash": "bad8fa3d2a1b0bae9a8ce4dc7d60e21f031678b06320a6f805dfc63a97055e71",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 3968
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 9559,
                        "contentType": "image/png",
                        "width": 546,
                        "height": 57
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 2622,
                    "name": "3_0011_We-do-IT.-Laat-ons-jou-helpen---.png",
                    "blobHash": "af620255e0e0aaf3515b60d1bb591360725a0608f560306b9ddfb50963d0e1ba",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1725
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6209,
                        "contentType": "image/png",
                        "width": 410,
                        "height": 28
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 2718,
                    "name": "3_0015_Ben-jij-op-zoek-naar-een--uitdagende-IT-functie_-Solliciteer-da-copy.png",
                    "blobHash": "2ac461ca5beaa1040f41b2655c2785020b1292140d1a93d5cce01c244b2c8bcb",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 2540
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 7721,
                        "contentType": "image/png",
                        "width": 334,
                        "height": 57
                    }
                }, {
                    "clazz": "File",
                    "retina": false,
                    "retinaScaleFactor": 1,
                    "localId": 2775,
                    "name": "3_0016_Solliciteer-dan-nu-bij-Olgreen---.png",
                    "blobHash": "4e1203c7723c19a764c24c36f68d4d2de5c4fff706137e16e96c7d1155a76212",
                    "quality": 256,
                    "autoResize": false,
                    "optimizationSettings": [{
                        "creativeUnitVariantId": "default",
                        "optimizedSize": 1912
                    }],
                    "isAsset": true,
                    "meta": {
                        "size": 6404,
                        "contentType": "image/png",
                        "width": 412,
                        "height": 28
                    }
                }],
                "fonts": [{
                    "clazz": "Font",
                    "localId": 47,
                    "typefaceId": "google_roboto300n",
                    "provider": "google",
                    "family": "Roboto",
                    "name": "Light",
                    "style": "normal",
                    "weight": 300
                }],
                "scripts": [],
                "version": 14,
                "hostedFiles": null,
                "googleMapsJavaScriptVersion": "3.37",
                "shareFacebookAppId": "1764042083689024",
                "videoStreamAlgoVersions": {
                    "mpeg1LQVideo": 1,
                    "mpeg1SHQVideo": 1,
                    "mpeg1InstaVideo": 1,
                    "aacAudio": 1,
                    "mpeg4HQ": 3,
                    "mpeg4HQPlus": 1,
                    "mpeg4HD": 1,
                    "webmHQ": 1,
                    "webmHD": 1,
                    "mpeg4InstaVideo": 2,
                    "vp9_1080p": 1,
                    "x264_1080p": 1,
                    "vp9_720p": 1,
                    "custom": 1
                },
                "isMoatVideoEnabled": false,
                "firstAppStoreUrlForInmobi": null,
                "googleMapsStandardProjectApiKey": "AIzaSyAtkTvxwHfTZKBJVenTPdtVXd9EKqDjfqY"
            }, runtimeParams, trackingCenter, aggregatorTracking, experiments, adapter, urls, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl, perf);
        })();
    };
})();