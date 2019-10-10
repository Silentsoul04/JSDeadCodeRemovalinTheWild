/*1570684518,,JIT Construction: v1001277207,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {
    (function() {
        function a(a, b, c, d) {
            var e = a.ADNW && a.ADNW.debug_host || "https://www.facebook.com",
                f = a.ADNW && a.ADNW.debug_sdk_url || "https://connect.facebook.net/en_US/fbadnw60.js",
                g = {
                    iframeLoaded: !0,
                    xhrLoaded: !0
                },
                h = function() {
                    if (Date.now) return Date.now();
                    else return +new Date()
                },
                i = function(a, b, c) {
                    b === void 0 && (b = "ADNW_ADERROR");
                    var f = e + "/audience_network/client_event";
                    b = {
                        cb: h(),
                        event_name: b,
                        ad_pivot_type: "audience_network_mobile_web",
                        sdk_version: "6.0.web",
                        app_id: d.placementid.split("_")[0],
                        publisher_id: d.placementid.split("_")[1],
                        error_message: a
                    };
                    c != void 0 && (b.error_stack_trace = c.substring(0, 500));
                    a = [];
                    for (var g in b) a.push(encodeURIComponent(g) + "=" + encodeURIComponent(b[g]));
                    c = f + "?" + a.join("&");
                    b = new XMLHttpRequest();
                    b.open("GET", c, !0);
                    b.send()
                },
                j = function(a, b) {
                    i(a, "ADNW_ADERROR", b), d.onAdError && d.onAdError("1000", "Internal error.")
                },
                k = function(a) {
                    try {
                        return a.document.referrer
                    } catch (a) {}
                    return ""
                },
                l = function() {
                    var b = a,
                        c = [b];
                    try {
                        while (b !== b.parent && b.parent.document) c.push(b = b.parent)
                    } catch (a) {}
                    return c.reverse()
                },
                m = function() {
                    var a = l();
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b],
                            d = c.ADNW || {};
                        c.ADNW = d;
                        if (!c.ADNW) continue;
                        d.v60 = d.v60 || {};
                        d.v60.ads = d.v60.ads || [];
                        d.v60.window = d.v60.window || c;
                        return d.v60
                    }
                    throw new Error("no_writable_global")
                },
                n = function(a) {
                    var b = a.indexOf("/", a.indexOf("://") + 3);
                    return b === -1 ? a : a.substring(0, b)
                },
                o = function(a) {
                    return a.location.href || k(a)
                },
                p = function(a) {
                    if (a.sdkLoaded) return;
                    var b = a.window.document,
                        c = b.createElement("iframe");
                    c.name = "fbadnw";
                    c.style.display = "none";
                    c.onload = function() {
                        var a = c.contentDocument.createElement("script");
                        a.src = f;
                        a.async = !0;
                        c.contentDocument.body.appendChild(a)
                    };
                    b.body.appendChild(c);
                    a.sdkLoaded = !0
                },
                q = function(a) {
                    var b = /^https?:\/\/www\.google(\.com?)?.\w{2,3}$/;
                    return !!a.match(b)
                },
                r = function(a) {
                    return !!a.match(/cdn\.ampproject\.org$/)
                },
                s = function() {
                    var a = c.ancestorOrigins || [],
                        b = a[a.length - 1] || c.origin;
                    a = a[a.length - 2] || c.origin;
                    if (q(b) && r(a)) return n(a);
                    else return n(b)
                },
                t = function(a) {
                    try {
                        return JSON.parse(a)
                    } catch (b) {
                        a = "Failed to parse: " + a;
                        j(b.message, a);
                        throw b
                    }
                },
                u = function(a, b, c) {
                    if (!a.iframe) {
                        var d = c.createElement("iframe");
                        d.src = e + "/audiencenetwork/iframe/";
                        d.style.display = "none";
                        c.body.appendChild(d);
                        a.iframe = d;
                        a.iframeAppendedTime = h();
                        a.iframeData = {}
                    }
                    b.iframe = a.iframe;
                    b.iframeData = a.iframeData;
                    b.tagJsIframeAppendedTime = a.iframeAppendedTime || 0
                },
                v = function(a, b) {
                    var c = "";
                    for (var d in b) c != "" && (c += "&"), typeof b[d] === "object" && b[d] != null ? c += v(a + "[" + d + "]", b[d]) : typeof b[d] !== "function" && b[d] != null && (c += a + "[" + d + "]=" + encodeURIComponent(b[d]));
                    return c
                },
                w = function(a) {
                    var b = ["recirculation"],
                        c = "";
                    for (var d in a) typeof a[d] !== "function" && typeof a[d] !== "object" && a[d] != null ? c += "&" + d + "=" + encodeURIComponent(a[d]) : b.indexOf(d) !== -1 && typeof a[d] === "object" && (c += "&" + v(d, a[d]));
                    return c
                },
                x = function(a) {
                    var b = e + "/audiencenetwork/xhr/?sdk=6.0.web";
                    b += w(a);
                    var c = new XMLHttpRequest();
                    c.open("GET", b, !0);
                    c.withCredentials = !0;
                    c.onreadystatechange = function() {
                        if (c.readyState === 4) {
                            if (c.status === 0) {
                                i("Network error: " + c.response, "ADNW_WARNING");
                                return
                            }
                            var b = t(c.response);
                            a.events.push({
                                name: "xhrLoaded",
                                source: a.iframe.contentWindow,
                                data: b,
                                postMessageTimestamp: h(),
                                receivedTimestamp: h()
                            })
                        }
                    };
                    c.send()
                },
                y = function(a, c) {
                    a = e + "/audiencenetwork/xhriframe/?sdk=6.0.web";
                    a += w(c);
                    var d = b.createElement("iframe");
                    d.src = a;
                    d.style.display = "none";
                    b.body.appendChild(d);
                    c.iframe = d;
                    c.iframeData = {};
                    c.tagJsIframeAppendedTime = h()
                },
                z = function(a) {
                    var b = function(b) {
                            try {
                                var c = b.data;
                                c.name in g && a.events.push({
                                    name: c.name,
                                    source: b.source,
                                    data: c.data
                                })
                            } catch (a) {}
                        },
                        c = a.iframe.contentWindow.parent;
                    c.addEventListener("message", b, !1)
                },
                A = function(a) {
                    if (a.context && a.context.sourceUrl) return !0;
                    try {
                        return !!JSON.parse(decodeURI(a.name)).ampcontextVersion
                    } catch (a) {
                        return !1
                    }
                },
                B = function(b) {
                    b = h();
                    var e = l()[0],
                        f = e != a.top,
                        g = e.$sf && e.$sf.ext,
                        i = o(e),
                        j = m();
                    p(j);
                    b = {
                        amp: A(e),
                        events: [],
                        tagJsInitTime: b,
                        rootElement: d.rootElement,
                        iframe: null,
                        tagJsIframeAppendedTime: j.iframeAppendedTime || 0,
                        url: i,
                        domain: s(),
                        channel: n(o(e)),
                        width: screen.width,
                        height: screen.height,
                        pixelratio: a.devicePixelRatio,
                        placementindex: j.ads.length,
                        crossdomain: f,
                        safeframe: !!g,
                        placementid: d.placementid,
                        format: d.format || "300x250",
                        testmode: !!d.testmode,
                        webview: !!d.webview,
                        idfa: d.idfa,
                        adInputData: d,
                        tagStateContainer: j,
                        recircunitid: d.recircunitid,
                        recircpageidx: d.recircpageidx,
                        recircdisablepages: d.recircdisablepages,
                        recirculation: d.recirculation,
                        onAdLoaded: d.onAdLoaded,
                        onAdError: d.onAdError,
                        onUnitLoaded: d.onUnitLoaded,
                        onUnitError: d.onUnitError,
                        onMediaLoaded: d.onMediaLoaded,
                        onRewardCompleted: d.onRewardCompleted,
                        onAdClosed: d.onAdClosed
                    };
                    d.bidid && (b.bidid = d.bidid);
                    d.bidtimetoken && (b.bidtimetoken = d.bidtimetoken);
                    f || !c.ancestorOrigins ? y(j, b) : (u(j, b, e.document), x(b));
                    z(b);
                    b.rootElement.dataset.placementid = b.placementid;
                    j.ads.push(b)
                };
            try {
                B()
            } catch (a) {
                j(a.message || a, a.stack);
                throw a
            }
        }

        function b(a, b) {
            var c = function(a) {
                    window.setTimeout(function() {
                        return b(a)
                    }, 0)
                },
                d = a.push;
            a.push = function(b) {
                c(b), d.call(a, b)
            };
            [].forEach.call(a, function(a) {
                return c(a)
            })
        }
        window.ADNW = window.ADNW || {};
        window.ADNW.v60 = window.ADNW.v60 || {};
        var c = window.ADNW.v60.slots = window.ADNW.v60.slots || [];
        c.push === [].push && b(c, function(b) {
            return a(window, document, location, b)
        })
    })();
} catch (e) {
    new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"1001277207","namespace":"FB","message":"' + e.message + '"}}');
}