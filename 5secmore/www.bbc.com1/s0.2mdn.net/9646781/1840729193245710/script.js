! function() {
    function e(e, n) {
        function i(e) {
            if (e) throw new Error(e)
        }

        function o() {
            var e = y;
            y < h.length - 1 ? y++ : y = 0, (new TimelineMax).to("#subline" + (e + 1), 1, {
                scale: 0,
                rotation: .1,
                ease: Expo.easeInOut
            }, 0).to("#subline" + (y + 1), 1, {
                scale: 1,
                rotation: 0,
                ease: Expo.easeInOut,
                onComplete: function() {
                    t()
                }
            }, 1)
        }

        function t() {
            (new TimelineMax).to("#cta", .3, {
                scale: 1.05,
                rotation: .1
            }).to("#cta", .3, {
                scale: 1,
                rotation: 0
            }).to("#cta", .3, {
                scale: 1.05,
                rotation: .1
            }).to("#cta", .3, {
                scale: 1,
                rotation: 0
            })
        }

        function r() {
            e.check.desktop() && (M.stop(), TweenMax.set("#cta", {
                backgroundColor: T
            }))
        }

        function a() {
            e.check.desktop() && (c && M.play(), d && P.play(), TweenMax.set("#cta", {
                backgroundColor: k
            }))
        }
        var c = !1,
            d = !1,
            l = "EMPTY" !== n.headline.value ? n.headline.value : "",
            s = ("true" === n.headlineBig.value || "false" === n.headlineBig.value ? n.headlineBig.value : i("The value of headlineBig must be true of false"), "EMPTY" !== n.sublineOne.value ? n.sublineOne.value : i("You need at least one subline.")),
            u = "EMPTY" !== n.sublineTwo.value ? n.sublineTwo.value : "",
            p = "EMPTY" !== n.sublineThree.value ? n.sublineThree.value : "",
            f = "EMPTY" !== n.ctaCopy.value ? n.ctaCopy.value : i("The cta copy is required."),
            w = n.productImage.value,
            m = JSON.parse(n.productImageStyling.value),
            g = JSON.parse(n.copyStyling.value),
            v = [s, u, p],
            h = v.filter(function(e) {
                return "" != e && null != e
            }),
            y = 0;
        $("#productImage").css({
            background: 'url("' + w + '")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left top",
            width: m.productWidth + "px",
            height: m.productHeight + "px",
            left: m.productLeft + "px",
            top: m.productTop + "px"
        });
        var b = '<div id="headlineCopy" class="headlineCopy">' + l + "</div>",
            E = '<div id="subline1" class="subline">' + h[0] + "</div>",
            x = '<div id="subline2" class="subline">' + h[1] + "</div>",
            _ = '<div id="subline3" class="subline">' + h[2] + "</div>";
        $("#copyContainer").html(b + E + x + _).prepend($("#networkShapesHolder")), $(".headlineCopy").css({
            left: g.headlineLeft + "px",
            top: g.headlineTop + "px"
        }), $(".subline").css({
            left: g.sublineLeft + "px",
            top: g.sublineTop + "px"
        }), $("#cta").html(f);
        var k = ($("#creative_container").width(), $("#creative_container").height(), "#00aaff"),
            T = "#00beff";
        TweenMax.set("#subline1, #subline2, #subline3", {
            scale: 0,
            rotation: .1
        }), e.check.ie11() && $("#cta").css({
            padding: "9px 17px 8px"
        }), $("#creative_container").on("mouseenter touchstart", r).on("mouseleave touchend", a);
        var I = (new TimelineMax).from("#productImage", 2, {
                scale: 0,
                rotation: .1,
                ease: Expo.easeInOut
            }, .1).from("#headlineCopy", 3, {
                scale: 0,
                rotation: .1,
                ease: Expo.easeInOut
            }, .3).to("#subline1", 3, {
                scale: 1,
                rotation: 0,
                ease: Expo.easeInOut
            }, .6).from("#cta", 3, {
                scale: 0,
                rotation: .1,
                ease: Expo.easeInOut
            }, .9),
            P = (new TimelineMax).to("#shape2", 10, {
                transformOrigin: "20% 20%",
                rotation: 35,
                yoyo: !0,
                repeat: -1,
                ease: Power2.easeInOut
            }, 0).from("#shape2", 10, {
                y: 70,
                yoyo: !0,
                repeat: -1,
                ease: Power2.easeInOut
            }, 0).from("#shapeGroup1", 10, {
                transformOrigin: "20% 20%",
                rotation: -20,
                ease: Power2.easeOut
            }, 0).from("#shapeGroup2", 10, {
                transformOrigin: "45% 60%",
                rotation: -35,
                ease: Power2.easeOut
            }, 0).to("#shapeGroup1", 10, {
                transformOrigin: "20% 20%",
                rotation: -15,
                yoyo: !0,
                repeat: -1,
                ease: Power2.easeInOut
            }, 10).to("#shapeGroup2", 10, {
                transformOrigin: "45% 60%",
                rotation: -55,
                yoyo: !0,
                repeat: -1,
                ease: Power2.easeInOut
            }, 10),
            M = new TimelineMax({
                repeat: -1,
                paused: !0
            });
        h.length > 1 && M.add(o, 4);
        (new TimelineMax).add(I, 0).add(function() {
            c = !0, M.play()
        }, 2);
        window.onLoopStop = function() {
            d = !0, M.stop(), P.stop()
        }
    }

    function n() {
        for (var e = document.querySelectorAll("[data-fallback]"), n = 0; n < e.length; n++) {
            var i = e[n],
                o = i.getAttribute("data-fallback-image");
            o && (i.style["background-image"] = "url(" + o + ")"), i.style.display = ""
        }
        Creative.fallback()
    }

    function i(e, n, i) {
        for (var o in n)
            if (n.hasOwnProperty(o)) {
                var t = e + "." + o;
                i[t] = n[o]
            }
    }

    function o(e) {
        return 0 === b ? void e() : void(E = function() {
            e()
        })
    }

    function t(e, n) {
        var i = e.length;
        if (0 === i) return void n();
        for (var o = 0; o < e.length; o++) {
            var t = new Image,
                r = function() {
                    0 === --i && n()
                };
            t.onload = r, t.onerror = r, t.src = e[o]
        }
    }

    function r(e) {
        for (var n in e)
            if (e.hasOwnProperty(n))
                for (var i = document.querySelectorAll("[data-studio-behaviour='" + n + "']"), o = 0; o < i.length; o++) e[n](i[o])
    }
    var a = ["3.svg", "36.svg", "50.svg", "26.svg"],
        c = [{
            name: "ghg",
            init: function() {
                return function(e) {
                    var n = void 0,
                        i = !1,
                        o = "4005" === window.location.port,
                        t = o || -1 < window.location.hostname.indexOf("lemonpi.io") || /lemonpi-prod-templates\.s3\.amazonaws\.com/.test(window.location.host),
                        r = "string" == typeof clickTag1,
                        a = void 0,
                        c = function() {
                            window.addEventListener("message", function(e) {
                                if (e.data && "LP_EXEC_SCRIPT_RESPONSE" === e.data.name) {
                                    var n = document.createElement("script");
                                    n.text = e.data.script, document.body.appendChild(n)
                                }
                            })
                        },
                        d = function(e) {
                            var n = Math.round(document.querySelector("#creative_container").offsetWidth),
                                i = Math.round(document.querySelector("#creative_container").offsetHeight),
                                o = document.querySelector("#creative_container") ? n + "x" + i : "0x0";
                            return e.replace(/\(:size:\)/g, o)
                        },
                        l = function(e) {
                            if (a && window.lemonpi.context) {
                                var n = e.replace(/\$\{/, "").replace(/\}/, "").trim();
                                return a[n]
                            }
                            if (window.lemonpi.getMacro && /\${\w+}/.test(e)) {
                                var i = window.lemonpi.getMacro(e.replace(/^\${|}$/g, ""));
                                return "number" == typeof i ? i.toString() : i
                            }
                            return e
                        },
                        s = function() {
                            if (i) return !0;
                            if (o && void 0 !== e.looping) return e.looping;
                            if (t) return !1;
                            var n = parseInt(l("${SELLER_MEMBER_ID}"), 10) || 1;
                            return 0 < n && 181 !== n && 280 !== n
                        },
                        u = function(e) {
                            if (void 0 !== window.lemonpi) {
                                var n = document.querySelector("#creative_container"),
                                    i = (window.lemonpi.lemonpiClickUrl || "").split("/c/")[1],
                                    o = e;
                                window.lemonpi.getPropositions && (o.dynamic1 = window.lemonpi.getPropositions(0).length, o.dynamic2 = window.lemonpi.getPropositions(1).length, o.dynamic3 = window.lemonpi.getPropositions(2).length), o.referer = l("${REFERER_URL_ENC}"), o.lemonpiAdset = i, o.id = i + "/" + Math.round(1e7 * Math.random()), o.creativeIsVisible = !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length), window.postMessage(o, "*"), window.parent.postMessage(o, "*")
                            }
                        },
                        p = function() {
                            if (r) var e = setInterval(function() {
                                0 !== window.clickTag1.length && (clearInterval(e), function() {
                                    var e = window.clickTag1.split("_____");
                                    if (2 < e.length) {
                                        e.pop(), e.shift();
                                        var n = e.map(function(e) {
                                            var n = e.split(":");
                                            return {
                                                macro: n[0],
                                                value: n[1] || "0"
                                            }
                                        });
                                        if ("undefined" != typeof lemonpi && void 0 !== lemonpi.context) {
                                            var i = window.open;
                                            window.open = function(e) {
                                                for (var o = e.split("3D_____")[0] + "3Dh" + e.split("_____h")[1]; 0 < n.length; 1) o = (o = o.replace("(%253A" + n[0].macro + "%253A)", n[0].value)).replace("(%3A" + n[0].macro + "%3A)", n[0].value);
                                                i.call(window, o)
                                            }
                                        } else Object.keys(window.lemonpi.layerMetadata).forEach(function(e) {
                                            var i, o, t = window.lemonpi.layerMetadata[e].clickTagName;
                                            window[t] = (i = window[t], o = i, n.forEach(function(e) {
                                                o = o.replace("(%3A" + e.macro + "%3A)", e.value)
                                            }), o);
                                            var r = window[t].split("_____");
                                            window[t] = [r.shift(), r.pop()].join("")
                                        })
                                    }
                                }())
                            }, 100)
                        },
                        f = function() {
                            document.hidden || "function" != typeof window.onPageVisible ? document.hidden && "function" == typeof window.onPageHidden && window.onPageHidden() : window.onPageVisible()
                        },
                        w = function() {
                            u({
                                name: "LEMONPI_CREATIVE_WILL_LOAD"
                            })
                        },
                        m = function() {
                            if (void 0 !== window.lemonpi && window.lemonpi.thirdPartyTrackerUrl && 0 === window.lemonpi.thirdPartyTrackerUrl.indexOf("https://tracker.meh/url=(:URL:)?config=")) {
                                var e, n, i, o, t, r = window.innerWidth + "x" + window.innerHeight,
                                    a = (e = window.lemonpi.thirdPartyTrackerUrl, n = r, i = e.split("?config=")[1], 0 === (o = JSON.parse(atob(i)).filter(function(e) {
                                        return e.size === n
                                    })).length ? "" : o[0]);
                                window.lemonpi.thirdPartyTrackerUrl = (t = a.trackerUrl) && t.replace(/\${([^${}]+)}/g, function(e, n) {
                                    var i = window.lemonpi.getMacro(n);
                                    return void 0 === i ? e : i
                                })
                            }
                        };
                    return {
                        creativeWillLoad: function(e) {
                            window.lemonpi.context ? window.lemonpi.context.subscribe(function(n) {
                                a = n.appnexus, c(), w(), e()
                            }) : (c(), w(), e())
                        },
                        creativeDidRender: function() {
                            var r, a, c, w, g;
                            m(), (-1 < window.location.href.indexOf("inapptesting=1") || !t && void 0 !== window.screenad && !window.screenad.isPreviewer) && (console.log = function(e) {
                                    u({
                                        name: "LEMONPI_LOG",
                                        message: e
                                    })
                                }), !o && window.Raven && "function" == typeof window.Raven.config && window.Raven.config("https://87dc5e0450d3461f83c185097b7db5cf@sentry.io/75086").install(),
                                function() {
                                    window.addEventListener("message", function(e) {
                                        e.data && "LP_IS_IN_APP" === e.data.name && (window.open = function(e) {
                                            var n = {
                                                name: "LP_MRAID_CLICK",
                                                url: e
                                            };
                                            window.parent.postMessage(n, "*"), window.postMessage(n, "*")
                                        })
                                    });
                                    var e = {
                                        name: "LP_REQUEST_IN_APP"
                                    };
                                    window.parent.postMessage(e, "*"), window.postMessage(e, "*")
                                }(), p(),
                                function() {
                                    if (void 0 !== window.lemonpi && void 0 !== window.lemonpi.layerMetadata && window.lemonpi.thirdPartyTrackerUrl && -1 < window.lemonpi.thirdPartyTrackerUrl.indexOf("track-core.bncnt.com")) {
                                        var e = window.lemonpi.thirdPartyTrackerUrl.split("getuid?");
                                        window.lemonpi.thirdPartyTrackerUrl = "";
                                        var n = window.lemonpi._prepare_click_url;
                                        window.lemonpi._prepare_click_url = function(i, o) {
                                            var t = n(i, o);
                                            return (e[0] + "getuid?" + encodeURIComponent(e[1].replace("(:URL:)", t))).replace("%26iid", "%2526iid").replace("%26out", "%2526out")
                                        }
                                    }
                                }(), r = document.querySelector("head"), (a = document.createElement("style")).type = "text/css", a.appendChild(document.createTextNode("* { box-sizing: border-box; } #creative_container { cursor: default; -webkit-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-tap-highlight-color: transparent; -ms-user-select: none; -moz-user-select: none; -webkit-user-select: none; user-select: none }")), r.appendChild(a), "undefined" != typeof lemonpi && (window.lemonpi.tagging && (window.lemonpi.tagging = d(window.lemonpi.tagging)), window.lemonpi.dynamicData && window.lemonpi.dynamicData.length && (window.lemonpi.dynamicData = window.lemonpi.dynamicData.map(function(e) {
                                    return e.map(function(e) {
                                        var n = e;
                                        return e.clickUrl && (n.clickUrl = d(e.clickUrl)), n
                                    })
                                }))), document.getElementById("creative_container").addEventListener("mouseenter", function() {
                                    n = setTimeout(function() {
                                        i = !0
                                    }, 1e3)
                                }), document.getElementById("creative_container").addEventListener("mouseleave", function() {
                                    clearTimeout(n)
                                }), TweenMax.delayedCall(30, function() {
                                    "function" != typeof window.onLoopStop || s() || window.onLoopStop()
                                }), c = document.querySelector('meta[name="ad.size"]').content.match(/\d+/g), w = {
                                    "336x280": .8928571429,
                                    "1272x328": .7625786164
                                }[c[0] + "x" + c[1]], o && e.previewScalifier && w && window.addEventListener("message", function(e) {
                                    if (e.data && "LEMONPI_CREATIVE_RENDERED" === e.data.name) {
                                        var n = document.querySelector("#creative_container");
                                        n.style.transformOrigin = "0 0", n.style.webkitTransformOrigin = "0 0", n.style.transform = "scale(" + w + ")", n.style.webkitTransform = "scale(" + w + ")"
                                    }
                                }), void 0 !== document.hidden && document.addEventListener("visibilitychange", f, !1), g = lemonpi.click, window.lemonpi.click = function(e, n, i) {
                                    u({
                                        name: "LP_CLICK"
                                    }), g(e, n, i)
                                }, t && $.getScript("https://s3.eu-central-1.amazonaws.com/ghg-tools/ghg-banner-basics-debugger/debugger-v2.js", function() {
                                    ! function() {
                                        if (o) {
                                            var e = window.location.href.replace("concept.html", "script.js"),
                                                n = new XMLHttpRequest;
                                            n.addEventListener("load", function(e) {
                                                var n = e.currentTarget.responseText.match(/function executeScript\(plugins\) {[^]+?(?=\/\/ All the Creative's plugins.)/g);
                                                (n = n ? n[0] : "").match(/https?/gi) && window.drawWarning("error", "Found one or more hardcoded URL's in your creative, please move them to a dynamic input.")
                                            }), n.open("get", e, !0), n.send()
                                        }
                                    }()
                                }), setTimeout(function() {
                                    var e = {
                                        name: "LEMONPI_CREATIVE_RENDERED",
                                        supplyType: l("${SUPPLY_TYPE}"),
                                        mraidVersion: "undefined" != typeof mraid ? window.mraid.getVersion() : "n/a",
                                        appId: l("${EXT_APP_ID}")
                                    };
                                    u(e)
                                }, 1)
                        },
                        pluginApi: {
                            getAppNexusMacro: l,
                            getAllowLooping: s,
                            getUserInteracted: function() {
                                return i
                            },
                            addMacrosToUrl: function(e) {
                                var n = e;
                                return n = (n = (n = (n = n.replace("${CREATIVE_ID}", l("${CREATIVE_ID}"))).replace("${USER_ID}", l("${USER_ID}"))).replace("${AUCTION_ID}", l("${AUCTION_ID}"))).replace("${CREATIVE_SIZE}", l("${CREATIVE_SIZE}"))
                            },
                            isInLemonpiStudio: o,
                            isInAnyLemonpiEnvironment: t,
                            getResizedImageUrl: function(e, n, i, o, t) {
                                var r = "https://image.lemonpi.io/img/http://res.cloudinary.com/" + e + "/image/fetch/",
                                    a = "c_scale";
                                return i && (a += ",w_" + Math.round(parseFloat(i))), o && (a += ",h_" + Math.round(parseFloat(o))), t && (a += "/q_" + t), r + a + "/" + n.replace(/^(https?:)?\/\/image\.lemonpi\.io\/img\//i, "")
                            }
                        }
                    }
                }({
                    looping: !1,
                    previewScalifier: !1
                })
            }
        }, {
            name: "check",
            init: function() {
                return function(e) {
                    var n = e,
                        i = function() {
                            return !0
                        },
                        o = function() {
                            return !1
                        };
                    "4005" !== window.location.port && (n = void 0);
                    var t = navigator.userAgent,
                        r = {
                            retina: function() {
                                return window.matchMedia && (window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").matches) || window.devicePixelRatio && 2 <= window.devicePixelRatio
                            },
                            desktop: function() {
                                return !this.mobile()
                            },
                            mobile: function() {
                                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
                            },
                            osx: function() {
                                return /OS X/i.test(t)
                            },
                            windows: function() {
                                return /Windows/i.test(t)
                            },
                            ios: function() {
                                return /iPhone|iPad|iPod/i.test(t)
                            },
                            android: function() {
                                return /Android/i.test(t)
                            },
                            ie: function() {
                                return /MSIE|Trident/i.test(t)
                            },
                            ie9: function() {
                                return /MSIE 9\./i.test(t)
                            },
                            ie10: function() {
                                return /MSIE 10\./i.test(t)
                            },
                            ie11: function() {
                                return /Trident\//i.test(t) && !/MSIE/i.test(t)
                            },
                            edge: function() {
                                return /Edge\//i.test(t)
                            },
                            chrome: function() {
                                return /Chrome\//i.test(t) && !/Edge\//i.test(t)
                            },
                            firefox: function() {
                                return /Firefox\//i.test(t)
                            },
                            safari: function() {
                                return /Safari\//i.test(t) && !/Chrome\//i.test(t) && !/Edge\//i.test(t)
                            }
                        };
                    if (n && void 0 !== n.deviceType) switch (n.deviceType) {
                        case "desktop":
                            r.desktop = i, r.mobile = o;
                            break;
                        case "mobile":
                            r.desktop = o, r.mobile = i;
                            break;
                        default:
                            r.desktop = i, r.mobile = o
                    }
                    if (n && void 0 !== n.operatingSystem) switch (n.operatingSystem) {
                        case "osx":
                            r.osx = i, r.windows = o, r.android = o, r.ios = o;
                            break;
                        case "windows":
                            r.osx = o, r.windows = i, r.android = o, r.ios = o;
                            break;
                        case "android":
                            r.osx = o, r.windows = o, r.android = i, r.ios = o;
                            break;
                        case "ios":
                            r.osx = o, r.windows = o, r.android = o, r.ios = i;
                            break;
                        default:
                            r.osx = o, r.windows = o, r.android = o, r.ios = o
                    }
                    if (n && void 0 !== n.browser) switch (n.browser) {
                        case "chrome":
                            r.chrome = i, r.safari = o, r.firefox = o, r.ie = o, r.ie9 = o, r.ie10 = o, r.ie11 = o, r.edge = o;
                            break;
                        case "safari":
                            r.chrome = o, r.safari = i, r.firefox = o, r.ie = o, r.ie9 = o, r.ie10 = o, r.ie11 = o, r.edge = o;
                            break;
                        case "firefox":
                            r.chrome = o, r.safari = o, r.firefox = i, r.ie = o, r.ie9 = o, r.ie10 = o, r.ie11 = o, r.edge = o;
                            break;
                        case "ie9":
                            r.chrome = o, r.safari = o, r.firefox = o, r.ie = i, r.ie9 = i, r.ie10 = o, r.ie11 = o, r.edge = o;
                            break;
                        case "ie10":
                            r.chrome = o, r.safari = o, r.firefox = o, r.ie = i, r.ie9 = o, r.ie10 = i, r.ie11 = o, r.edge = o;
                            break;
                        case "ie11":
                            r.chrome = o, r.safari = o, r.firefox = o, r.ie = i, r.ie9 = o, r.ie10 = o, r.ie11 = i, r.edge = o;
                            break;
                        case "edge":
                            r.chrome = o, r.safari = o, r.firefox = o, r.ie = o, r.ie9 = o, r.ie10 = o, r.ie11 = o, r.edge = i;
                            break;
                        default:
                            r.chrome = o, r.safari = o, r.firefox = o, r.ie = o, r.ie9 = o, r.ie10 = o, r.ie11 = o, r.edge = o
                    }
                    if (n && void 0 !== n.screenType) switch (n.screenType) {
                        case "nonretina":
                            r.retina = o;
                            break;
                        case "retina":
                        default:
                            r.retina = i
                    }
                    return {
                        pluginApi: r
                    }
                }({
                    browser: "",
                    deviceType: "",
                    operatingSystem: "",
                    screenType: ""
                })
            }
        }];
    window.addEventListener("error", n);
    for (var d = [], l = [], s = [], u = [], p = [], f = [], w = {}, m = {}, g = {}, v = 0; v < c.length; v++) {
        var h = c[v],
            y = h.init() || {};
        y.creativeWillLoad && d.push(y.creativeWillLoad), y.creativeDidLoad && l.push(y.creativeDidLoad), y.creativeWillRender && s.push(y.creativeWillRender), y.creativeDidRender && u.push(y.creativeDidRender), y.creativeWillOpenClickUrl && p.push(y.creativeWillOpenClickUrl), y.creativeDidOpenClickUrl && f.push(y.creativeDidOpenClickUrl), y.layerWillRender && i(h.name, y.layerWillRender, w), y.layerDidRender && i(h.name, y.layerDidRender, m), g[h.name] = y.pluginApi || {}
    }
    for (var b = 0, E = function() {}, v = 0; v < d.length; v++) {
        var x = d[v];
        x.length > 0 ? (b++, x(function() {
            b--, 0 === b && E()
        })) : x()
    }
    t(a, function() {
        o(function() {
            for (var n = 0; n < l.length; n++) l[n]();
            for (var n = 0; n < s.length; n++) s[n]();
            r(w);
            var i = !1;
            lemonpi.subscribe(function(n) {
                if (!i) {
                    i = !0, document.querySelector("#creative_container").style.display = "", r(m);
                    for (var o = 0; o < u.length; o++) u[o]();
                    e(g, n)
                }
            })
        })
    })
}();