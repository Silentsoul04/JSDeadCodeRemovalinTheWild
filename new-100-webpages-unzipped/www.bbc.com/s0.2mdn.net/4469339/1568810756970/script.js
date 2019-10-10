window.Creative = function() {}, Creative.layerReferences = {}, Creative.fallbackHandlers = [], Creative.layer = function(e) {
        return 0 === e.indexOf(".") ? Creative.createLayerWrapper(e) : (Creative.layerReferences[e] || (Creative.layerReferences[e] = Creative.createLayerWrapper(e)), Creative.layerReferences[e])
    }, Creative.createLayerWrapper = function(e) {
        function t(e, t) {
            e.onclick && Creative.warning("You have overridden the onclick of DOM element", e), e.onclick = t
        }
        var n, i = !1;
        0 === e.indexOf(".") ? (n = document.getElementsByClassName(e.replace(".", "")), i = !0) : n = document.getElementById(e);
        var o, r, a, s;
        return n ? {
            getDOMElement: function() {
                return n
            },
            css: function(e) {
                for (styleKey in e) {
                    var t = styleKey.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                    if (e.hasOwnProperty(styleKey)) {
                        if ("[object HTMLCollection]" === Object.prototype.toString.call(n)) {
                            for (var i = 0; i < n.length; i++) n[i].style[t] = e[styleKey];
                            continue
                        }
                        n.style[t] = e[styleKey]
                    }
                }
            },
            onClick: function(i) {
                if ("[object HTMLCollection]" !== Object.prototype.toString.call(n))(r || a || s) && Creative.warning('Overriding click behaviour of layer "' + e + '". Previously set click data or click data callback will no longer be used.'), t(n, i);
                else
                    for (var o = 0; o < n.length; o++) t(n[o], i)
            },
            clickable: function(t, n) {
                if (i) return void Creative.error('Selector "' + e + '" cannot be used to make a layer clickable. Please use the name of a click layer instead.');
                var c = this.setClickData;
                o = function() {
                    if (s) {
                        var i = s;
                        s(c), s = i
                    }
                    for (var o = 0; o < t.length; o++) t[o](e, r, a, c);
                    window.lemonpi.click(e, r, a);
                    for (var l = 0; l < n.length; l++) n[l](e, r, a)
                }, this.onClick(o)
            },
            setClickData: function(t, c) {
                return i ? void Creative.error('Selector "' + e + '" cannot be used to set click data. Please use the name of a click layer instead.') : n.onclick !== o ? void Creative.error('Cannot set click data for layer "' + e + '". Either this layer is either not clickable, or the click behaviour was altered.') : "function" == typeof t ? void(s = t) : (s = void 0, r = t, a = c, this)
            }
        } : void Creative.error('Layer "' + e + '" could not be found.')
    }, Creative.rootLayer = function() {
        return Creative.layer("creative_container")
    }, Creative.getPropositions = function(e) {
        return window.lemonpi.getPropositions(e)
    }, Creative.hasPropositions = function(e) {
        return window.lemonpi.hasPropositions(e)
    }, Creative.getProposition = function(e) {
        return window.lemonpi.getProposition(e)
    }, Creative.log = function() {
        !!window.lemonpi.debugger && window.lemonpi.debugger.log.apply(this, arguments)
    }, Creative.error = function() {
        !!window.lemonpi.debugger && window.lemonpi.debugger.error.apply(this, arguments)
    }, Creative.warning = function() {
        !!window.lemonpi.debugger && window.lemonpi.debugger.warning.apply(this, arguments)
    }, Creative.onFallback = function(e) {
        this.fallbackHandlers.push(e)
    }, Creative.fallback = function() {
        for (var e = 0; e < this.fallbackHandlers.length; e++) this.fallbackHandlers[e]()
    },
    function() {
        function e(e) {
            function t() {
                var e = $("#cta").outerHeight(),
                    t = e / 2;
                $("#cta").css({
                    "border-radius": t
                })
            }

            function n(e) {
                z = e.feed.entry.map(i), V = z, r(), h(F), y(Y), g(), he.play()
            }

            function i(e) {
                return {
                    description: e.gsx$model.$t,
                    persons: e.gsx$personen.$t,
                    body: e.gsx$carrosserie.$t,
                    url: e.gsx$clickurl.$t,
                    image: e.gsx$afbeelding.$t,
                    name: e.gsx$model.$t
                }
            }

            function o(e) {
                z = !1, g(), he.play()
            }

            function r() {
                allBodyTypes = R(V.map(function(e) {
                    return e.body
                })), B = allBodyTypes.slice(0), H = ee.slice(0), q = V.reduce(function(e, t) {
                    return e ? e < t.persons ? t.persons : e : t.persons
                }, 0), W = {
                    min: Q.minPersons,
                    max: parseInt(q)
                }, F = ee[0].iconIndex, K = ee[F].type, Y = Q.startPersons, X = []
            }

            function a() {
                (new TimelineMax).to("#cta", .1, {
                    y: -5
                }).to("#cta", 1, {
                    y: 0,
                    ease: Elastic.easeOut
                })
            }

            function s() {
                ge.stop()
            }

            function c() {
                ge.restart()
            }

            function l(e, t, n) {
                var i = $($(e).find("svg path")[0]);
                i.css({
                    fill: t
                }), TweenMax.to(i.parent(), .25, {
                    scale: n
                })
            }

            function d(e) {
                var t = "body_previous" === e.currentTarget.id ? -1 : 1;
                F += t, F = F > B.length - 1 ? 0 : F, F = F < 0 ? B.length - 1 : F, console.log("currentBodyTypeIndex", F), h(F), g()
            }

            function u(e) {
                var t = "person_minus" === e.currentTarget.id ? -1 : 1,
                    n = B;
                if (Y = w(t, Y, W), B = R(k(V, Y).map(function(e) {
                        return e.body
                    })), n.length !== B.length) {
                    var i = n[F],
                        o = B.indexOf(i);
                    F = o > -1 ? o : 0, v(B), h(F)
                }
                TweenMax.to("#body_next, #body_previous", .4, {
                    autoAlpha: B.length < 2 ? .2 : 1
                }), g()
            }

            function p(e) {
                (new TimelineMax).fromTo(".car_title, .car_image", 0, {
                    opacity: 1
                }, {
                    opacity: 0
                }).fromTo(e.currentTarget, .5, {
                    scale: .8
                }, {
                    scale: 1,
                    ease: Power2.easeOut
                })
            }

            function f(e) {
                var t = le ? X[le.properties.currentSlideIndex] : X[0];
                t ? Creative.layer("click").setClickData(t.url) : Creative.layer("click").setClickData(bannerTexts.defaultUrl), $("#click").click()
            }

            function g() {
                for (K = H[F].type, X = k(V, Y, K), x(), ie = 0, $(".car_title").css("font-size", re + "px"), $(".car_title").css("line-height", ae + "px"), T(X), m = 0; m < le.slides.length / 2; m++) I("#slide" + m + " .car_title", 40);
                X.length <= 1 ? (TweenMax.to("#next, #previous", .5, {
                    autoAlpha: 0
                }), 0 == X.length && TweenMax.to("#sliderContainer", .5, {
                    autoAlpha: .5
                })) : (TweenMax.to("#next, #previous", .5, {
                    autoAlpha: 1
                }), TweenMax.to("#sliderContainer", .5, {
                    autoAlpha: 1
                }));
                var e = _();
                kosi.setPhase("Persons: " + Y + ", body: " + K), U(), se && j(e, !0), (new TimelineMax).fromTo(".car_title, .car_image", .25, {
                    opacity: 0
                }, {
                    opacity: 1
                }, .25)
            }

            function h(e) {
                console.log("hier", H), "SUV" !== H[e].type && "MPV" !== H[e].type || $("#body_copy").css({
                    "font-size": "16px"
                }), "STATION" === H[e].type && $("#body_copy").css({
                    "font-size": "12px"
                }), "HATCHBACK" === H[e].type && $("#body_copy").css({
                    "font-size": "10px"
                });
                var t = H[e].type.toLowerCase();
                $("#body_copy").html(t.toLowerCase().charAt(0).toUpperCase() + t.substring(1))
            }

            function v(e) {
                H = ee.filter(function(t) {
                    return e.indexOf(t.type) > -1
                })
            }

            function w(e, t, n) {
                var i = t + e;
                return i = i > n.max ? n.max : i, i = i < n.min ? n.min : i, i !== t && y(i), i
            }

            function y(e) {
                $("#person_icons > div").toArray().forEach(function(t, n) {
                    TweenMax.to(t, .2, {
                        autoAlpha: n < e ? 1 : .2
                    })
                })
            }

            function k(e, t, n) {
                return e.filter(function(e) {
                    return (!n || e.body === n) && (!t || e.persons >= t)
                })
            }

            function b(e, t, n, i) {
                var o = "https://image.lemonpi.io/img/http://res.cloudinary.com/ghg/image/fetch/e_trim:1/",
                    r = "c_scale";
                return t && (r += ",w_" + t), n && (r += ",h_" + n), r += ",c_fit", i && (r += "/q_" + i), e = e.replace(/^(https?:)?\/\/image\.lemonpi\.io\/img\//i, ""), o + r + "/" + e
            }

            function _() {
                return le ? $(le.slides[le.properties.currentSlideIndex]).attr("data-modelName") : $(".slide").attr("data-modelName")
            }

            function x() {
                var e = $($(".slide")[0]).clone().css("left", "0");
                $("#slider").empty();
                var t = $("#slider").clone().append(e);
                $("#sliderContainer").empty().append(t), TweenMax.set(t, {
                    x: 0,
                    y: 0,
                    z: 0
                }), le = void 0
            }

            function T(t) {
                le = e.slider.create({
                    index: 0,
                    previousOffset: 0,
                    draggableSelector: "#draggable",
                    slidesData: t,
                    onCreateSlide: C,
                    transitionAnimation: S
                })
            }

            function P() {
                le.properties.draggable.kill()
            }

            function S(e, t, n) {
                le.properties.draggable.disable();
                var i = (this.index, this.previousOffset < t ? -1 : 1),
                    o = le.slides.length / 2;
                this.index += i, this.index = this.index < 0 ? o - 1 : this.index, this.index = this.index >= o ? 0 : this.index, sliderTransition = TweenMax.to(e, .1, {
                    x: t,
                    onUpdate: n,
                    onComplete: function() {
                        le.properties.draggable.enable(), (new TimelineMax).fromTo(".car_title, .car_image", .25, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, 0)
                    }
                });
                var r = $(le.slides[this.index]).attr("data-modelName");
                U(), j(r, !0), this.previousOffset = t
            }

            function I(e, t) {
                var n = $(e),
                    i = parseInt(n.css("font-size")),
                    o = parseInt(n.css("line-height")) / i;
                n.css({
                    height: "auto"
                });
                var r = setInterval(function() {
                    (n.height() <= t || i <= 8) && clearInterval(r), n.css({
                        fontSize: i + "px",
                        lineHeight: i * o + "px"
                    }), i--
                }, 0)
            }

            function C(e, t) {
                e.attr("data-backgroundColor", t.backgroundColor).attr("data-modelName", t.name);
                var n = b(t.image, Math.round($("#car_image").width()) * fe, Math.round($("#car_image").height()) * fe, 60);
                e.attr("id", "slide" + ie), ie++;
                var i = t.description;
                return "Up!" === i && (i = "up!"), e.find(".car_title").text(oe + i), e.find(".car_image").css({
                    backgroundImage: "url(" + n + ")",
                    backgroundSize: "contain",
                    backgroundPosition: "center bottom"
                }), e
            }

            function O(e, t) {
                for (var n = [], i = 0; i <= e.max; i++) i >= e.min && n.push({
                    value: i,
                    label: i + " " + t
                });
                return n
            }

            function E(e) {
                return e.map(function(e, t) {
                    return {
                        value: t,
                        label: e
                    }
                })
            }

            function M(e, t, n) {
                var i = $("<select>").css({
                        display: "block",
                        width: $(e).width(),
                        top: 4,
                        height: 32,
                        background: "#fff",
                        position: "absolute",
                        lineHeight: $(e).height() + "px"
                    }).appendTo(e),
                    o = t.map(function(e, t) {
                        var i = $("<option>" + e.label + "</option>").attr("value", e.value);
                        return e.label === n && i.attr("selected", ""), i
                    });
                return i.append(o), i
            }

            function A(e) {
                $("#body").empty();
                var t = E(e),
                    n = M("#body", t);
                return n.on("change", N), n
            }

            function D(e) {
                Y = parseInt(e.currentTarget.value), B = R(k(V, Y).map(function(e) {
                    return e.body
                })), F = 0, J = A(B), g()
            }

            function N(e) {
                F = e.currentTarget.value, g()
            }

            function R(e) {
                for (var t = {}, n = [], i = e.length, o = 0, r = 0; r < i; r++) {
                    var a = e[r];
                    1 !== t[a] && (t[a] = 1, n[o++] = a)
                }
                return n
            }

            function L(e) {
                var t = _();
                e && "mouseenter" === e.type && t ? j(t, !0) : U()
            }

            function U() {
                for (var e in ce) j(e, !1)
            }

            function j(e, t) {
                var n = 1;
                t ? (ce[e] || (ce[e] = {
                    trackers: [],
                    totalTime: 0
                }), ce[e].trackers.forEach(function(e) {
                    clearInterval(e)
                }), ce[e].trackers.push(setInterval(function() {
                    ce[e].totalTime += n, kosi.trackInteraction("other", "Time spent on car: " + e, ce[e].totalTime)
                }, 1e3 * n))) : ce[e] && ce[e].trackers.forEach(function(e) {
                    clearInterval(e)
                })
            }
            var V, z, B, H, q, W, F, K, Y, X, G, J, Z = Creative.getProposition(0),
                Q = JSON.parse(Z.custom1),
                ee = JSON.parse(Z.custom3),
                te = JSON.parse(Z.description),
                ne = Q.googleSheets,
                ie = 0,
                oe = Z.custom4 ? JSON.parse(Z.custom4).appendedTextToTitle : "",
                re = $(".car_title").css("font-size").replace("px", ""),
                ae = $(".car_title").css("line-height").replace("px", ""),
                se = !1,
                ce = {};
            e.check.retina() && $("#logo_container").css({
                backgroundImage: $("#logoRetina_container").css("background-image"),
                backgroundSize: "contain"
            }), $("#mainTitle").html(Z.title), $("#cta").html(Z.priceDiscount), $("#person_container_copy").html(te.personTitle), $("#body_container_copy").html(Z.priceNormal);
            var le, de = Z.clickUrl,
                ue = new Date,
                pe = ue.getDate() + "" + (ue.getMonth() + 1) + ue.getFullYear() + ue.getHours(),
                de = e.ghg.isInAnyLemonpiEnvironment ? de = de + "&cachebuster=" + pe : de,
                fe = e.check.retina() ? 2 : 1;
            $("#person_icon").width();
            (new TimelineMax).set("#mainTitle, #cta, #logo, #form, #sliderContainer, #next, #previous, #draggable", {
                opacity: 0
            }), t();
            var ge = new TimelineMax({
                    repeat: -1
                }).add(a, 5),
                he = new TimelineMax({
                    paused: !0
                }).to("#mainTitle, #cta, #logo, #form, #sliderContainer, #next, #previous, #draggable", .5, {
                    opacity: 1
                });
            if ($("#creative_container").on("mouseenter touchstart", s).on("mouseleave touchend", c), $("#next, #previous").click(p), $(".interactionElement").on("mouseenter touchstart", function() {
                    l(this, "#0040C5", 1.2)
                }), $(".interactionElement").on("mouseleave touchend", function() {
                    l(this, "#001E50", 1)
                }), $("#creative_container").hover(L).hover(function(e) {
                    se = "mouseenter" === e.type
                }), $("#click_container, #body_container_copy, #person_container_copy").click(f), Q.dropdowns) {
                $("#body, #person").empty();
                var me = O(W, Q.personLabel);
                G = M("#person", me, Y + " " + Q.personLabel), G.on("change", D), J = A(B)
            } else $("#body_next, #body_previous").click(p).click(P).click(d), $("#person_plus, #person_minus").click(p).click(P).click(u);
            window.onLoopStop = function() {
                ge.stop()
            }, ne ? $.getJSON(de).done(n).fail(o) : (V = JSON.parse(Z.custom4), r(), h(F), y(Y), g(), he.play())
        }

        function t() {
            for (var e = document.querySelectorAll("[data-fallback]"), t = 0; t < e.length; t++) {
                var n = e[t],
                    i = n.getAttribute("data-fallback-image");
                i && (n.style["background-image"] = "url(" + i + ")"), n.style.display = ""
            }
            Creative.fallback()
        }

        function n(e, t, n) {
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    var o = e + "." + i;
                    n[o] = t[i]
                }
        }

        function i(e) {
            return 0 === y ? void e() : void(k = function() {
                e()
            })
        }
        var o = ["523.svg", "433.svg", "429.svg", "550.svg", "551.svg", "541.svg", "540.svg", "516.svg", "376.svg", "369.svg"],
            r = ["click", "fallback"],
            a = [{
                name: "check",
                init: function() {
                    return function(e) {
                        var t = e,
                            n = function() {
                                return !0
                            },
                            i = function() {
                                return !1
                            };
                        "4005" !== window.location.port && (t = void 0);
                        var o = navigator.userAgent,
                            r = {
                                retina: function() {
                                    return window.matchMedia && (window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").matches) || window.devicePixelRatio && 2 <= window.devicePixelRatio
                                },
                                desktop: function() {
                                    return !this.mobile()
                                },
                                mobile: function() {
                                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o)
                                },
                                osx: function() {
                                    return /OS X/i.test(o)
                                },
                                windows: function() {
                                    return /Windows/i.test(o)
                                },
                                ios: function() {
                                    return /iPhone|iPad|iPod/i.test(o)
                                },
                                android: function() {
                                    return /Android/i.test(o)
                                },
                                ie: function() {
                                    return /MSIE|Trident/i.test(o)
                                },
                                ie9: function() {
                                    return /MSIE 9\./i.test(o)
                                },
                                ie10: function() {
                                    return /MSIE 10\./i.test(o)
                                },
                                ie11: function() {
                                    return /Trident\//i.test(o) && !/MSIE/i.test(o)
                                },
                                edge: function() {
                                    return /Edge\//i.test(o)
                                },
                                chrome: function() {
                                    return /Chrome\//i.test(o) && !/Edge\//i.test(o)
                                },
                                firefox: function() {
                                    return /Firefox\//i.test(o)
                                },
                                safari: function() {
                                    return /Safari\//i.test(o) && !/Chrome\//i.test(o) && !/Edge\//i.test(o)
                                }
                            };
                        if (t && void 0 !== t.deviceType) switch (t.deviceType) {
                            case "desktop":
                                r.desktop = n, r.mobile = i;
                                break;
                            case "mobile":
                                r.desktop = i, r.mobile = n;
                                break;
                            default:
                                r.desktop = n, r.mobile = i
                        }
                        if (t && void 0 !== t.operatingSystem) switch (t.operatingSystem) {
                            case "osx":
                                r.osx = n, r.windows = i, r.android = i, r.ios = i;
                                break;
                            case "windows":
                                r.osx = i, r.windows = n, r.android = i, r.ios = i;
                                break;
                            case "android":
                                r.osx = i, r.windows = i, r.android = n, r.ios = i;
                                break;
                            case "ios":
                                r.osx = i, r.windows = i, r.android = i, r.ios = n;
                                break;
                            default:
                                r.osx = i, r.windows = i, r.android = i, r.ios = i
                        }
                        if (t && void 0 !== t.browser) switch (t.browser) {
                            case "chrome":
                                r.chrome = n, r.safari = i, r.firefox = i, r.ie = i, r.ie9 = i, r.ie10 = i, r.ie11 = i, r.edge = i;
                                break;
                            case "safari":
                                r.chrome = i, r.safari = n, r.firefox = i, r.ie = i, r.ie9 = i, r.ie10 = i, r.ie11 = i, r.edge = i;
                                break;
                            case "firefox":
                                r.chrome = i, r.safari = i, r.firefox = n, r.ie = i, r.ie9 = i, r.ie10 = i, r.ie11 = i, r.edge = i;
                                break;
                            case "ie9":
                                r.chrome = i, r.safari = i, r.firefox = i, r.ie = n, r.ie9 = n, r.ie10 = i, r.ie11 = i, r.edge = i;
                                break;
                            case "ie10":
                                r.chrome = i, r.safari = i, r.firefox = i, r.ie = n, r.ie9 = i, r.ie10 = n, r.ie11 = i, r.edge = i;
                                break;
                            case "ie11":
                                r.chrome = i, r.safari = i, r.firefox = i, r.ie = n, r.ie9 = i, r.ie10 = i, r.ie11 = n, r.edge = i;
                                break;
                            case "edge":
                                r.chrome = i, r.safari = i, r.firefox = i, r.ie = i, r.ie9 = i, r.ie10 = i, r.ie11 = i, r.edge = n;
                                break;
                            default:
                                r.chrome = i, r.safari = i, r.firefox = i, r.ie = i, r.ie9 = i, r.ie10 = i, r.ie11 = i, r.edge = i
                        }
                        if (t && void 0 !== t.screenType) switch (t.screenType) {
                            case "nonretina":
                                r.retina = i;
                                break;
                            case "retina":
                            default:
                                r.retina = n
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
            }, {
                name: "ghg-lemonpi_studio_plugins-greensock_throw_props",
                init: function() {
                    return function() {
                        var e = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
                        (e._gsQueue || (e._gsQueue = [])).push(function() {
                                "use strict";
                                e._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(t, n, i, o) {
                                    var r, a, s, c, l = function(e, n) {
                                            t.call(this, "throwProps"), this._overwriteProps.length = 0
                                        },
                                        d = 999999999999999,
                                        u = 1e-10,
                                        p = e._gsDefine.globals,
                                        f = !1,
                                        g = {
                                            x: 1,
                                            y: 1,
                                            z: 2,
                                            scale: 1,
                                            scaleX: 1,
                                            scaleY: 1,
                                            rotation: 1,
                                            rotationZ: 1,
                                            rotationX: 2,
                                            rotationY: 2,
                                            skewX: 1,
                                            skewY: 1,
                                            xPercent: 1,
                                            yPercent: 1
                                        },
                                        h = function(e, t, n, i, o) {
                                            var r, a, s, c, l = t.length,
                                                u = 0,
                                                p = d;
                                            if ("object" == typeof e) {
                                                for (; --l > -1;) {
                                                    r = t[l], a = 0;
                                                    for (s in e) c = r[s] - e[s], a += c * c;
                                                    p > a && (u = l, p = a)
                                                }
                                                if (d > (o || d) && o < Math.sqrt(p)) return e
                                            } else
                                                for (; --l > -1;) r = t[l], a = r - e, 0 > a && (a = -a), p > a && r >= i && n >= r && (u = l, p = a);
                                            return t[u]
                                        },
                                        m = function(e, t, n, i, o, r) {
                                            if ("auto" === e.end) return e;
                                            var a, s, c = e.end;
                                            if (n = isNaN(n) ? d : n, i = isNaN(i) ? -d : i, "object" == typeof t) {
                                                if (a = t.calculated ? t : ("function" == typeof c ? c(t) : h(t, c, n, i, r)) || t, !t.calculated) {
                                                    for (s in a) t[s] = a[s];
                                                    t.calculated = !0
                                                }
                                                a = a[o]
                                            } else a = "function" == typeof c ? c(t) : c instanceof Array ? h(t, c, n, i, r) : Number(c);
                                            return a > n ? a = n : i > a && (a = i), {
                                                max: a,
                                                min: a,
                                                unitFactor: e.unitFactor
                                            }
                                        },
                                        v = function(e, t, n) {
                                            for (var i in t) void 0 === e[i] && i !== n && (e[i] = t[i]);
                                            return e
                                        },
                                        w = l.calculateChange = function(e, t, o, r) {
                                            null == r && (r = .05);
                                            var a = t instanceof i ? t : t ? new i(t) : n.defaultEase;
                                            return o * r * e / a.getRatio(r)
                                        },
                                        y = l.calculateDuration = function(e, t, o, r, a) {
                                            a = a || .05;
                                            var s = r instanceof i ? r : r ? new i(r) : n.defaultEase;
                                            return Math.abs((t - e) * s.getRatio(a) / o / a)
                                        },
                                        k = l.calculateTweenDuration = function(e, t, r, a, s, c) {
                                            if ("string" == typeof e && (e = n.selector(e)), !e) return 0;
                                            null == r && (r = 10), null == a && (a = .2), null == s && (s = 1), e.length && (e = e[0] || e);
                                            var d, p, g, h, k, b, _, x, T, P, S, I, C, O = 0,
                                                E = 9999999999,
                                                $ = t.throwProps || t,
                                                M = t.ease instanceof i ? t.ease : t.ease ? new i(t.ease) : n.defaultEase,
                                                A = isNaN($.checkpoint) ? .05 : Number($.checkpoint),
                                                D = isNaN($.resistance) ? l.defaultResistance : Number($.resistance);
                                            if ($.linkedProps)
                                                for (I = $.linkedProps.split(","), S = {}, C = 0; C < I.length; C++) d = I[C], p = $[d], p && (void 0 !== p.velocity && "number" == typeof p.velocity ? h = Number(p.velocity) || 0 : (T = T || o.getByTarget(e), h = T && T.isTrackingProp(d) ? T.getVelocity(d) : 0), k = isNaN(p.resistance) ? D : Number(p.resistance), g = h * k > 0 ? h / k : h / -k, b = "function" == typeof e[d] ? e[d.indexOf("set") || "function" != typeof e["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : e[d] || 0, S[d] = b + w(h, M, g, A));
                                            for (d in $) "resistance" !== d && "checkpoint" !== d && "preventOvershoot" !== d && "linkedProps" !== d && "radius" !== d && (p = $[d], "object" != typeof p && (T = T || o.getByTarget(e), T && T.isTrackingProp(d) ? p = "number" == typeof p ? {
                                                velocity: p
                                            } : {
                                                velocity: T.getVelocity(d)
                                            } : (h = Number(p) || 0, g = h * D > 0 ? h / D : h / -D)), "object" == typeof p && (void 0 !== p.velocity && "number" == typeof p.velocity ? h = Number(p.velocity) || 0 : (T = T || o.getByTarget(e), h = T && T.isTrackingProp(d) ? T.getVelocity(d) : 0), k = isNaN(p.resistance) ? D : Number(p.resistance), g = h * k > 0 ? h / k : h / -k, b = "function" == typeof e[d] ? e[d.indexOf("set") || "function" != typeof e["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : e[d] || 0, _ = b + w(h, M, g, A), void 0 !== p.end && (p = m(p, S && d in S ? S : _, p.max, p.min, d, $.radius), (c || f) && ($[d] = v(p, $[d], "end"))), void 0 !== p.max && _ > Number(p.max) + u ? (P = p.unitFactor || l.defaultUnitFactors[d] || 1, x = b > p.max && p.min !== p.max || h * P > -15 && 45 > h * P ? a + .1 * (r - a) : y(b, p.max, h, M, A), E > x + s && (E = x + s)) : void 0 !== p.min && _ < Number(p.min) - u && (P = p.unitFactor || l.defaultUnitFactors[d] || 1, x = b < p.min && p.min !== p.max || h * P > -45 && 15 > h * P ? a + .1 * (r - a) : y(b, p.min, h, M, A), E > x + s && (E = x + s)), x > O && (O = x)), g > O && (O = g));
                                            return O > E && (O = E), O > r ? r : a > O ? a : O
                                        },
                                        b = l.prototype = new t("throwProps");
                                    return b.constructor = l, l.version = "0.11.2", l.API = 2, l._autoCSS = !0, l.defaultResistance = 100, l.defaultUnitFactors = {
                                        time: 1e3,
                                        totalTime: 1e3
                                    }, l.track = function(e, t, n) {
                                        return o.track(e, t, n)
                                    }, l.untrack = function(e, t) {
                                        o.untrack(e, t)
                                    }, l.isTracking = function(e, t) {
                                        return o.isTracking(e, t)
                                    }, l.getVelocity = function(e, t) {
                                        var n = o.getByTarget(e);
                                        return n ? n.getVelocity(t) : NaN
                                    }, l._cssRegister = function() {
                                        var e = p.com.greensock.plugins.CSSPlugin;
                                        if (e) {
                                            var t = e._internals,
                                                n = t._parseToProxy,
                                                i = t._setPluginRatio,
                                                s = t.CSSPropTween;
                                            t._registerComplexSpecialProp("throwProps", {
                                                parser: function(e, t, c, d, u, p) {
                                                    p = new l;
                                                    var f, h, m, v, w, y = {},
                                                        k = {},
                                                        b = {},
                                                        _ = {},
                                                        x = {},
                                                        T = {};
                                                    a = {};
                                                    for (m in t) "resistance" !== m && "preventOvershoot" !== m && "linkedProps" !== m && "radius" !== m && (h = t[m], "object" == typeof h ? (void 0 !== h.velocity && "number" == typeof h.velocity ? y[m] = Number(h.velocity) || 0 : (w = w || o.getByTarget(e), y[m] = w && w.isTrackingProp(m) ? w.getVelocity(m) : 0), void 0 !== h.end && (_[m] = h.end), void 0 !== h.min && (k[m] = h.min), void 0 !== h.max && (b[m] = h.max), h.preventOvershoot && (T[m] = !0), void 0 !== h.resistance && (f = !0, x[m] = h.resistance)) : "number" == typeof h ? y[m] = h : (w = w || o.getByTarget(e), w && w.isTrackingProp(m) ? y[m] = w.getVelocity(m) : y[m] = h || 0), g[m] && d._enableTransforms(2 === g[m]));
                                                    v = n(e, y, d, u, p), r = v.proxy, y = v.end;
                                                    for (m in r) a[m] = {
                                                        velocity: y[m],
                                                        min: k[m],
                                                        max: b[m],
                                                        end: _[m],
                                                        resistance: x[m],
                                                        preventOvershoot: T[m]
                                                    };
                                                    return null != t.resistance && (a.resistance = t.resistance), null != t.linkedProps && (a.linkedProps = t.linkedProps), null != t.radius && (a.radius = t.radius), t.preventOvershoot && (a.preventOvershoot = !0), u = new s(e, "throwProps", 0, 0, v.pt, 2), d._overwriteProps.pop(), u.plugin = p, u.setRatio = i, u.data = v, p._onInitTween(r, a, d._tween), u
                                                }
                                            })
                                        }
                                    }, l.to = function(e, t, i, o, l) {
                                        t.throwProps || (t = {
                                            throwProps: t
                                        }), 0 === l && (t.throwProps.preventOvershoot = !0), f = !0;
                                        var d = new n(e, o || 1, t);
                                        return d.render(0, !0, !0), d.vars.css ? (d.duration(k(r, {
                                            throwProps: a,
                                            ease: t.ease
                                        }, i, o, l)), d._delay && !d.vars.immediateRender ? d.invalidate() : s._onInitTween(r, c, d), f = !1, d) : (d.kill(), d = new n(e, k(e, t, i, o, l), t), f = !1, d)
                                    }, b._onInitTween = function(e, t, n, i) {
                                        this.target = e, this._props = [], s = this, c = t;
                                        var r, a, l, d, u, p, g, h, y, k, b, _, x = n._ease,
                                            T = isNaN(t.checkpoint) ? .05 : Number(t.checkpoint),
                                            P = n._duration,
                                            S = t.preventOvershoot,
                                            I = 0;
                                        if (t.linkedProps)
                                            for (b = t.linkedProps.split(","), k = {}, _ = 0; _ < b.length; _++) r = b[_], a = t[r], a && (void 0 !== a.velocity && "number" == typeof a.velocity ? u = Number(a.velocity) || 0 : (y = y || o.getByTarget(e), u = y && y.isTrackingProp(r) ? y.getVelocity(r) : 0), l = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : e[r] || 0, k[r] = l + w(u, x, P, T));
                                        for (r in t)
                                            if ("resistance" !== r && "checkpoint" !== r && "preventOvershoot" !== r && "linkedProps" !== r && "radius" !== r) {
                                                if (a = t[r], "function" == typeof a && (a = a(i, e)), "number" == typeof a) u = Number(a) || 0;
                                                else if ("object" != typeof a || isNaN(a.velocity)) {
                                                    if (y = y || o.getByTarget(e), !y || !y.isTrackingProp(r)) throw "ERROR: No velocity was defined in the throwProps tween of " + e + " property: " + r;
                                                    u = y.getVelocity(r)
                                                } else u = Number(a.velocity);
                                                p = w(u, x, P, T), h = 0, d = "function" == typeof e[r], l = d ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : e[r], "object" == typeof a && (g = l + p, void 0 !== a.end && (a = m(a, k && r in k ? k : g, a.max, a.min, r, t.radius), f && (t[r] = v(a, t[r], "end"))), void 0 !== a.max && Number(a.max) < g ? S || a.preventOvershoot ? p = a.max - l : h = a.max - l - p : void 0 !== a.min && Number(a.min) > g && (S || a.preventOvershoot ? p = a.min - l : h = a.min - l - p)), this._overwriteProps[I] = r, this._props[I++] = {
                                                    p: r,
                                                    s: l,
                                                    c1: p,
                                                    c2: h,
                                                    f: d,
                                                    r: !1
                                                }
                                            }
                                        return !0
                                    }, b._kill = function(e) {
                                        for (var n = this._props.length; --n > -1;) null != e[this._props[n].p] && this._props.splice(n, 1);
                                        return t.prototype._kill.call(this, e)
                                    }, b._mod = function(e) {
                                        for (var t, n = this._props, i = n.length; --i > -1;) t = e[n[i].p] || e.throwProps, "function" == typeof t && (n[i].m = t)
                                    }, b.setRatio = function(e) {
                                        for (var t, n, i = this._props.length; --i > -1;) t = this._props[i], n = t.s + t.c1 * e + t.c2 * e * e, t.m ? n = t.m(n, this.target) : 1 === e && (n = (1e4 * n + (0 > n ? -.5 : .5) | 0) / 1e4), t.f ? this.target[t.p](n) : this.target[t.p] = n
                                    }, t.activate([l]), l
                                }, !0), e._gsDefine("utils.VelocityTracker", ["TweenLite"], function(t) {
                                    var n, i, o, r, a = /([A-Z])/g,
                                        s = {},
                                        c = e.document,
                                        l = {
                                            x: 1,
                                            y: 1,
                                            z: 2,
                                            scale: 1,
                                            scaleX: 1,
                                            scaleY: 1,
                                            rotation: 1,
                                            rotationZ: 1,
                                            rotationX: 2,
                                            rotationY: 2,
                                            skewX: 1,
                                            skewY: 1,
                                            xPercent: 1,
                                            yPercent: 1
                                        },
                                        d = "undefined" != typeof window ? window : c.defaultView || {
                                            getComputedStyle: function() {}
                                        },
                                        u = function(e) {
                                            return d.getComputedStyle(e)
                                        },
                                        p = function(e, t, n) {
                                            var i = (e._gsTransform || s)[t];
                                            return i || 0 === i ? i : (e.style[t] ? i = e.style[t] : (n = n || u(e, null)) ? i = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(a, "-$1").toLowerCase()) : e.currentStyle && (i = e.currentStyle[t]), parseFloat(i) || 0)
                                        },
                                        f = t.ticker,
                                        g = function(e, t, n) {
                                            this.p = e, this.f = t, this.v1 = this.v2 = 0, this.t1 = this.t2 = f.time, this.css = !1, this.type = "", this._prev = null, n && (this._next = n, n._prev = this)
                                        },
                                        h = function() {
                                            var e, t, i = n,
                                                a = f.time;
                                            if (a - o >= .03)
                                                for (r = o, o = a; i;) {
                                                    for (t = i._firstVP; t;) e = t.css ? p(i.target, t.p) : t.f ? i.target[t.p]() : i.target[t.p], (e !== t.v1 || a - t.t1 > .15) && (t.v2 = t.v1, t.v1 = e, t.t2 = t.t1, t.t1 = a), t = t._next;
                                                    i = i._next
                                                }
                                        },
                                        m = function(e) {
                                            this._lookup = {}, this.target = e, this.elem = !(!e.style || !e.nodeType), i || (f.addEventListener("tick", h, null, !1, -100), o = r = f.time, i = !0), n && (this._next = n, n._prev = this), n = this
                                        },
                                        v = m.getByTarget = function(e) {
                                            for (var t = n; t;) {
                                                if (t.target === e) return t;
                                                t = t._next
                                            }
                                        },
                                        w = m.prototype;
                                    return w.addProp = function(e, n) {
                                        if (!this._lookup[e]) {
                                            var i = this.target,
                                                o = "function" == typeof i[e],
                                                r = o ? this._altProp(e) : e,
                                                a = this._firstVP;
                                            this._firstVP = this._lookup[e] = this._lookup[r] = a = new g(r !== e && 0 === e.indexOf("set") ? r : e, o, a), a.css = this.elem && (void 0 !== this.target.style[a.p] || l[a.p]), a.css && l[a.p] && !i._gsTransform && t.set(i, {
                                                x: "+=0",
                                                overwrite: !1
                                            }), a.type = n || a.css && 0 === e.indexOf("rotation") ? "deg" : "", a.v1 = a.v2 = a.css ? p(i, a.p) : o ? i[a.p]() : i[a.p]
                                        }
                                    }, w.removeProp = function(e) {
                                        var t = this._lookup[e];
                                        t && (t._prev ? t._prev._next = t._next : t === this._firstVP && (this._firstVP = t._next), t._next && (t._next._prev = t._prev), this._lookup[e] = 0, t.f && (this._lookup[this._altProp(e)] = 0))
                                    }, w.isTrackingProp = function(e) {
                                        return this._lookup[e] instanceof g
                                    }, w.getVelocity = function(e) {
                                        var t, n, i, o = this._lookup[e],
                                            r = this.target;
                                        if (!o) throw "The velocity of " + e + " is not being tracked.";
                                        return t = o.css ? p(r, o.p) : o.f ? r[o.p]() : r[o.p], n = t - o.v2, ("rad" === o.type || "deg" === o.type) && (i = "rad" === o.type ? 2 * Math.PI : 360, n %= i, n !== n % (i / 2) && (n = 0 > n ? n + i : n - i)), n / (f.time - o.t2)
                                    }, w._altProp = function(e) {
                                        var t = e.substr(0, 3),
                                            n = ("get" === t ? "set" : "set" === t ? "get" : t) + e.substr(3);
                                        return "function" == typeof this.target[n] ? n : e
                                    }, m.getByTarget = function(e) {
                                        var i = n;
                                        for ("string" == typeof e && (e = t.selector(e)), e.length && e !== window && e[0] && e[0].style && !e.nodeType && (e = e[0]); i;) {
                                            if (i.target === e) return i;
                                            i = i._next
                                        }
                                    }, m.track = function(e, t, n) {
                                        var i = v(e),
                                            o = t.split(","),
                                            r = o.length;
                                        for (n = (n || "").split(","), i || (i = new m(e)); --r > -1;) i.addProp(o[r], n[r] || n[0]);
                                        return i
                                    }, m.untrack = function(e, t) {
                                        var i = v(e),
                                            o = (t || "").split(","),
                                            r = o.length;
                                        if (i) {
                                            for (; --r > -1;) i.removeProp(o[r]);
                                            i._firstVP && t || (i._prev ? i._prev._next = i._next : i === n && (n = i._next), i._next && (i._next._prev = i._prev))
                                        }
                                    }, m.isTracking = function(e, t) {
                                        var n = v(e);
                                        return !!n && (!(t || !n._firstVP) || n.isTrackingProp(t))
                                    }, m
                                }, !0)
                            }), e._gsDefine && e._gsQueue.pop()(),
                            function(t) {
                                "use strict";
                                var n = function() {
                                    return (e.GreenSockGlobals || e)[t]
                                };
                                "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = n()) : "function" == typeof define && define.amd && define(["TweenLite"], n)
                            }("ThrowPropsPlugin")
                    }({})
                }
            }, {
                name: "ghg",
                init: function() {
                    return function(e) {
                        var t = void 0,
                            n = !1,
                            i = "4005" === window.location.port,
                            o = i || -1 < window.location.hostname.indexOf("lemonpi.io") || /lemonpi-prod-templates\.s3\.amazonaws\.com/.test(window.location.host),
                            r = "string" == typeof clickTag1,
                            a = void 0,
                            s = function() {
                                window.addEventListener("message", function(e) {
                                    if (e.data && "LP_EXEC_SCRIPT_RESPONSE" === e.data.name) {
                                        var t = document.createElement("script");
                                        t.text = e.data.script, document.body.appendChild(t)
                                    }
                                })
                            },
                            c = function(e) {
                                var t = Math.round(document.querySelector("#creative_container").offsetWidth),
                                    n = Math.round(document.querySelector("#creative_container").offsetHeight),
                                    i = document.querySelector("#creative_container") ? t + "x" + n : "0x0";
                                return e.replace(/\(:size:\)/g, i)
                            },
                            l = function(e) {
                                if (a && window.lemonpi.context) {
                                    var t = e.replace(/\$\{/, "").replace(/\}/, "").trim();
                                    return a[t]
                                }
                                if (window.lemonpi.getMacro && /\${\w+}/.test(e)) {
                                    var n = window.lemonpi.getMacro(e.replace(/^\${|}$/g, ""));
                                    return "number" == typeof n ? n.toString() : n
                                }
                                return e
                            },
                            d = function() {
                                if (n) return !0;
                                if (i && void 0 !== e.looping) return e.looping;
                                if (o) return !1;
                                var t = parseInt(l("${SELLER_MEMBER_ID}"), 10) || 1;
                                return 0 < t && 181 !== t && 280 !== t
                            },
                            u = function(e) {
                                if (void 0 !== window.lemonpi) {
                                    var t = document.querySelector("#creative_container"),
                                        n = (window.lemonpi.lemonpiClickUrl || "").split("/c/")[1],
                                        i = e;
                                    window.lemonpi.getPropositions && (i.dynamic1 = window.lemonpi.getPropositions(0).length, i.dynamic2 = window.lemonpi.getPropositions(1).length, i.dynamic3 = window.lemonpi.getPropositions(2).length), i.referer = l("${REFERER_URL_ENC}"), i.lemonpiAdset = n, i.id = n + "/" + Math.round(1e7 * Math.random()), i.creativeIsVisible = !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length), window.postMessage(i, "*"), window.parent.postMessage(i, "*")
                                }
                            },
                            p = function() {
                                if (r) var e = setInterval(function() {
                                    0 !== window.clickTag1.length && (clearInterval(e), function() {
                                        var e = window.clickTag1.split("_____");
                                        if (2 < e.length) {
                                            e.pop(), e.shift();
                                            var t = e.map(function(e) {
                                                var t = e.split(":");
                                                return {
                                                    macro: t[0],
                                                    value: t[1] || "0"
                                                }
                                            });
                                            if ("undefined" != typeof lemonpi && void 0 !== lemonpi.context) {
                                                var n = window.open;
                                                window.open = function(e) {
                                                    for (var i = e.split("3D_____")[0] + "3Dh" + e.split("_____h")[1]; 0 < t.length; 1) i = (i = i.replace("(%253A" + t[0].macro + "%253A)", t[0].value)).replace("(%3A" + t[0].macro + "%3A)", t[0].value);
                                                    n.call(window, i)
                                                }
                                            } else Object.keys(window.lemonpi.layerMetadata).forEach(function(e) {
                                                var n, i, o = window.lemonpi.layerMetadata[e].clickTagName;
                                                window[o] = (n = window[o], i = n, t.forEach(function(e) {
                                                    i = i.replace("(%3A" + e.macro + "%3A)", e.value)
                                                }), i);
                                                var r = window[o].split("_____");
                                                window[o] = [r.shift(), r.pop()].join("")
                                            })
                                        }
                                    }())
                                }, 100)
                            },
                            f = function() {
                                document.hidden || "function" != typeof window.onPageVisible ? document.hidden && "function" == typeof window.onPageHidden && window.onPageHidden() : window.onPageVisible()
                            },
                            g = function() {
                                u({
                                    name: "LEMONPI_CREATIVE_WILL_LOAD"
                                })
                            },
                            h = function() {
                                if (void 0 !== window.lemonpi && window.lemonpi.thirdPartyTrackerUrl && 0 === window.lemonpi.thirdPartyTrackerUrl.indexOf("https://tracker.meh/url=(:URL:)?config=")) {
                                    var e, t, n, i, o, r = window.innerWidth + "x" + window.innerHeight,
                                        a = (e = window.lemonpi.thirdPartyTrackerUrl, t = r, n = e.split("?config=")[1], 0 === (i = JSON.parse(atob(n)).filter(function(e) {
                                            return e.size === t
                                        })).length ? "" : i[0]);
                                    window.lemonpi.thirdPartyTrackerUrl = (o = a.trackerUrl) && o.replace(/\${([^${}]+)}/g, function(e, t) {
                                        var n = window.lemonpi.getMacro(t);
                                        return void 0 === n ? e : n
                                    })
                                }
                            };
                        return {
                            creativeWillLoad: function(e) {
                                window.lemonpi.context ? window.lemonpi.context.subscribe(function(t) {
                                    a = t.appnexus, s(), g(), e()
                                }) : (s(), g(), e())
                            },
                            creativeDidRender: function() {
                                var r, a, s, g, m;
                                h(), (-1 < window.location.href.indexOf("inapptesting=1") || !o && void 0 !== window.screenad && !window.screenad.isPreviewer) && (console.log = function(e) {
                                        u({
                                            name: "LEMONPI_LOG",
                                            message: e
                                        })
                                    }), !i && window.Raven && "function" == typeof window.Raven.config && window.Raven.config("https://87dc5e0450d3461f83c185097b7db5cf@sentry.io/75086").install(),
                                    function() {
                                        window.addEventListener("message", function(e) {
                                            e.data && "LP_IS_IN_APP" === e.data.name && (window.open = function(e) {
                                                var t = {
                                                    name: "LP_MRAID_CLICK",
                                                    url: e
                                                };
                                                window.parent.postMessage(t, "*"), window.postMessage(t, "*")
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
                                            var t = window.lemonpi._prepare_click_url;
                                            window.lemonpi._prepare_click_url = function(n, i) {
                                                var o = t(n, i);
                                                return (e[0] + "getuid?" + encodeURIComponent(e[1].replace("(:URL:)", o))).replace("%26iid", "%2526iid").replace("%26out", "%2526out")
                                            }
                                        }
                                    }(), r = document.querySelector("head"), (a = document.createElement("style")).type = "text/css", a.appendChild(document.createTextNode("* { box-sizing: border-box; } #creative_container { cursor: default; -webkit-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-tap-highlight-color: transparent; -ms-user-select: none; -moz-user-select: none; -webkit-user-select: none; user-select: none }")), r.appendChild(a), "undefined" != typeof lemonpi && (window.lemonpi.tagging && (window.lemonpi.tagging = c(window.lemonpi.tagging)), window.lemonpi.dynamicData && window.lemonpi.dynamicData.length && (window.lemonpi.dynamicData = window.lemonpi.dynamicData.map(function(e) {
                                        return e.map(function(e) {
                                            var t = e;
                                            return e.clickUrl && (t.clickUrl = c(e.clickUrl)), t
                                        })
                                    }))), document.getElementById("creative_container").addEventListener("mouseenter", function() {
                                        t = setTimeout(function() {
                                            n = !0
                                        }, 1e3)
                                    }), document.getElementById("creative_container").addEventListener("mouseleave", function() {
                                        clearTimeout(t)
                                    }), TweenMax.delayedCall(30, function() {
                                        "function" != typeof window.onLoopStop || d() || window.onLoopStop()
                                    }), s = document.querySelector('meta[name="ad.size"]').content.match(/\d+/g), g = {
                                        "336x280": .8928571429,
                                        "1272x328": .7625786164
                                    }[s[0] + "x" + s[1]], i && e.previewScalifier && g && window.addEventListener("message", function(e) {
                                        if (e.data && "LEMONPI_CREATIVE_RENDERED" === e.data.name) {
                                            var t = document.querySelector("#creative_container");
                                            t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.transform = "scale(" + g + ")", t.style.webkitTransform = "scale(" + g + ")"
                                        }
                                    }), void 0 !== document.hidden && document.addEventListener("visibilitychange", f, !1), m = lemonpi.click, window.lemonpi.click = function(e, t, n) {
                                        u({
                                            name: "LP_CLICK"
                                        }), m(e, t, n)
                                    }, o && $.getScript("https://s3.eu-central-1.amazonaws.com/ghg-tools/ghg-banner-basics-debugger/debugger-v2.js", function() {
                                        ! function() {
                                            if (i) {
                                                var e = window.location.href.replace("concept.html", "script.js"),
                                                    t = new XMLHttpRequest;
                                                t.addEventListener("load", function(e) {
                                                    var t = e.currentTarget.responseText.match(/function executeScript\(plugins\) {[^]+?(?=\/\/ All the Creative's plugins.)/g);
                                                    (t = t ? t[0] : "").match(/https?/gi) && window.drawWarning("error", "Found one or more hardcoded URL's in your creative, please move them to a dynamic input.");
                                                }), t.open("get", e, !0), t.send()
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
                                getAllowLooping: d,
                                getUserInteracted: function() {
                                    return n
                                },
                                addMacrosToUrl: function(e) {
                                    var t = e;
                                    return t = (t = (t = (t = t.replace("${CREATIVE_ID}", l("${CREATIVE_ID}"))).replace("${USER_ID}", l("${USER_ID}"))).replace("${AUCTION_ID}", l("${AUCTION_ID}"))).replace("${CREATIVE_SIZE}", l("${CREATIVE_SIZE}"))
                                },
                                isInLemonpiStudio: i,
                                isInAnyLemonpiEnvironment: o,
                                getResizedImageUrl: function(e, t, n, i, o) {
                                    var r = "https://image.lemonpi.io/img/http://res.cloudinary.com/" + e + "/image/fetch/",
                                        a = "c_scale";
                                    return n && (a += ",w_" + Math.round(parseFloat(n))), i && (a += ",h_" + Math.round(parseFloat(i))), o && (a += "/q_" + o), r + a + "/" + t.replace(/^(https?:)?\/\/image\.lemonpi\.io\/img\//i, "")
                                }
                            }
                        }
                    }({
                        looping: !1,
                        previewScalifier: !1
                    })
                }
            }, {
                name: "slider",
                init: function() {
                    return function() {
                        var e = {
                                width: $("#creative_container").outerWidth(),
                                height: $("#creative_container").outerHeight(),
                                orientation: "horizontal",
                                sliderSelector: "#slider",
                                previousSelector: "#previous",
                                nextSelector: "#next",
                                bulletSelector: "#bullet",
                                draggableSelector: void 0,
                                bulletSpacing: 5,
                                bulletAlignment: "center",
                                transitionAnimation: void 0,
                                slidesData: [],
                                onClick: void 0,
                                onCreateSlide: function() {}
                            },
                            t = /Android/i.test(-1 !== "${USER_AGENT}".indexOf("${") ? navigator.userAgent : "${USER_AGENT}"),
                            n = function(e) {
                                for (var t = this.nullObject[0]._gsTransform[this.properties.axis]; 0 < t;) t -= this.settings[this.properties.size] * this.slides.length;
                                t %= -this.settings[this.properties.size] * (this.slides.length / 2);
                                var n = {};
                                n[this.properties.axis] = t, TweenMax.set(this.slider, n);
                                var i = Math.round(-t / this.settings[this.properties.size]);
                                i >= this.slides.length / 2 && (i = 0), i !== this.properties.currentSlideIndex && (this.properties.currentSlideIndex = i, $(this.bullets).addClass("inactive"), $(this.bullets[this.properties.currentSlideIndex]).removeClass("inactive"), window.kosi && e && (e.originalEvent || e.isTrusted) && (window.kosi.trackInteraction("slide", "slide_" + (i + 1), this.settings.sliderSelector), -1 === this.properties.slidesSeen.indexOf(i) && (this.properties.slidesSeen.push(i), this.properties.seenAllSlides || this.properties.slidesSeen.length !== this.slides.length / 2 || (window.kosi.trackInteraction("slide", "slided_all_slides", this.settings.sliderSelector), this.properties.seenAllSlides = !0))))
                            },
                            i = function(e) {
                                e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()
                            },
                            o = function(e) {
                                var t = Math.round(e / this.settings[this.properties.size]) * this.settings[this.properties.size];
                                return this.properties.targetOffset = t
                            },
                            r = function() {
                                "function" == typeof this.settings.onClick && this.settings.onClick(this.properties.currentSlideIndex)
                            },
                            a = function() {
                                var e = this;
                                if (this.slides = this.slider.children(), this.slides.clone().appendTo(this.slider), this.slides = this.slider.children(), this.slides.each(function(e, t) {
                                        var n = parseInt($(t).css(this.properties.position), 10) + this.settings[this.properties.size] * e;
                                        $(t).css(this.properties.position, n + "px")
                                    }.bind(this)), $(this.settings.previousSelector).css("cursor", "pointer").click(function(t) {
                                        e.properties.targetOffset += e.settings[e.properties.size], e.settings.transitionAnimation(e.nullObject, e.properties.targetOffset, n.bind(e, t))
                                    }), $(this.settings.nextSelector).css("cursor", "pointer").click(function(t) {
                                        e.properties.targetOffset -= e.settings[e.properties.size], e.settings.transitionAnimation(e.nullObject, e.properties.targetOffset, n.bind(e, t))
                                    }), "function" == typeof this.settings.onClick && $(this.settings.sliderSelector).css("cursor", "pointer").click(r.bind(this)), $(this.settings.draggableSelector).length && ($(this.settings.draggableSelector).empty().css("background", "none"), this.properties.draggable = Draggable.create(this.nullObject, {
                                        type: "vertical" === this.settings.orientation ? "y" : "x",
                                        onThrowUpdate: n.bind(this),
                                        trigger: this.settings.draggableSelector,
                                        onDrag: n.bind(this),
                                        allowNativeTouchScrolling: !1,
                                        onClick: t ? void 0 : r.bind(this),
                                        maxDuration: .6,
                                        throwProps: !0,
                                        onDragEnd: i,
                                        snap: {
                                            x: o.bind(this),
                                            y: o.bind(this)
                                        }
                                    })[0], t && $(this.settings.draggableSelector).click(r.bind(this)), $("#creative_container").on("mouseleave touchend", this.properties.draggable.endDrag)), $(this.settings.bulletSelector).length) {
                                    var a = $(this.settings.bulletSelector),
                                        s = ("vertical" === this.settings.orientation ? a.outerHeight() : a.outerWidth()) + this.settings.bulletSpacing;
                                    a.wrap("<div>"), this.slides.slice(0, this.slides.length / 2).each(function(t) {
                                        var i = a,
                                            o = parseInt(i.css(e.properties.position), 10) + s * t;
                                        0 === t ? "right" === e.settings.bulletAlignment || "bottom" === e.settings.bulletAlignment ? o -= (e.slides.length / 2 - 1) * s : "left" !== e.settings.bulletAlignment && "top" !== e.settings.bulletAlignment && (o -= (e.slides.length / 2 - 1) * Math.round(s / 2)) : i = i.clone().addClass("inactive").appendTo(a.parent());
                                        var r = {
                                            cursor: "pointer"
                                        };
                                        r[e.properties.position] = o + "px", i.css(r), i.click(function(e, t) {
                                            var i = (this.properties.currentSlideIndex - e) * this.settings[this.properties.size];
                                            this.properties.targetOffset += i, this.settings.transitionAnimation(this.nullObject, this.properties.targetOffset, n.bind(this, t))
                                        }.bind(e, t)), e.bullets = e.bullets.add(i)
                                    })
                                }
                            },
                            s = function(t) {
                                var n = this;
                                if (this.settings = $.extend({}, e, t), this.slider = $(this.settings.sliderSelector), this.slides = this.slider.children(), this.bullets = $(this.settings.bulletSelector), this.nullObject = $("<div>").prependTo("#creative_container"), this.properties = {
                                        draggable: null,
                                        targetOffset: 0,
                                        currentSlideIndex: 0,
                                        position: "vertical" === this.settings.orientation ? "top" : "left",
                                        size: "vertical" === this.settings.orientation ? "height" : "width",
                                        axis: "vertical" === this.settings.orientation ? "y" : "x",
                                        slidesSeen: [],
                                        seenAllSlides: !1
                                    }, this.settings.transitionAnimation || (this.settings.transitionAnimation = function(e, t, n) {
                                        var i = {
                                            onUpdate: n
                                        };
                                        i[this.properties.axis] = t, TweenMax.to(e, .6, i)
                                    }.bind(this)), this.settings.slidesData.length) {
                                    var i = this.slides.first();
                                    this.settings.slidesData.forEach(function(e, t) {
                                        var o = i.clone().appendTo(n.slider);
                                        n.settings.onCreateSlide(o, e, t)
                                    }), i.remove(), a.apply(this)
                                } else if (this.settings.imageUrl) {
                                    var o = new Image;
                                    o.onload = function() {
                                        for (var e = n.slides.first(), t = o.height / n.settings.height, i = Math.floor(o.width / t / n.settings.width), r = 0; r < i; r += 1) e.clone().css({
                                            backgroundImage: 'url("' + n.settings.imageUrl + '")',
                                            backgroundPosition: "-" + n.settings.width * r + "px",
                                            backgroundSize: "cover"
                                        }).appendTo(n.slider);
                                        e.remove(), a.apply(n)
                                    }, o.src = this.settings.imageUrl
                                } else this.slider.append(this.slides.get().reverse()), a.apply(this)
                            };
                        return {
                            pluginApi: {
                                create: function(e) {
                                    return new s(e)
                                }
                            }
                        }
                    }({})
                }
            }, {
                name: "Kosi",
                init: function() {
                    return function(e) {
                        function t(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                t && (i = i.filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                })), n.push.apply(n, i)
                            }
                            return n
                        }

                        function n(e, t, n) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n, e
                        }

                        function i(e, t) {
                            if (null == e) return {};
                            var n, i, o = function(e, t) {
                                if (null == e) return {};
                                var n, i, o = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) n = r[i], 0 <= t.indexOf(n) || (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (i = 0; i < r.length; i++) n = r[i], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                            return o
                        }

                        function o() {
                            var e = 0,
                                t = 0,
                                n = document.querySelector('[name="ad.size"]');
                            if (n) {
                                var i = n.getAttribute("content").match(/\d+/g);
                                i && (e = i[0] || 0, t = i[1] || 0)
                            } else void 0 !== window.screenad && (e = window.screenad.bannerwidth || 0, t = window.screenad.bannerheight || 0);
                            return "".concat(e, "x").concat(t)
                        }

                        function r(r, s, c) {
                            function l() {
                                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                            }

                            function d(e, t) {
                                var n = t,
                                    i = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
                                    o = "[\\?&]".concat(i, "=([^&#]*)"),
                                    r = new RegExp(o).exec(n);
                                return n = n || window.location.href, null == r ? null : r[1]
                            }

                            function u() {
                                return void 0 === window.lemonpi || void 0 === window.lemonpi.layerMetadata || 0 === Object.keys(window.lemonpi.layerMetadata).length ? "" : window.lemonpi.layerMetadata
                            }

                            function p(e, t) {
                                if (a && window.lemonpi.context) {
                                    var n = e.replace(/\$\{/, "").replace(/\}/, "").trim();
                                    return a[n] || t
                                }
                                if (window.lemonpi.getMacro && /\${\w+}/.test(e)) {
                                    var i = window.lemonpi.getMacro(e.replace(/^\${|}$/g, ""));
                                    return i ? "number" == typeof i ? i.toString() : i : t
                                }
                                return t
                            }

                            function f(e, t) {
                                return e && "function" == typeof e.substr ? e.substr(0, t) : e
                            }

                            function g(e, t, n, i) {
                                return {
                                    schema: "iglu:com.greenhouse/kosi_display_appnexus/jsonschema/1-0-7",
                                    data: {
                                        clientId: r.id,
                                        bannerId: b,
                                        bannerSize: I,
                                        interactionType: e,
                                        interactionLabel: t,
                                        interactionArea: n.interactionArea || "the creative",
                                        mouseCoordinatesX: Math.round(N.x) || 0,
                                        mouseCoordinatesY: Math.round(N.y) || 0,
                                        timePassed: n.timePassed || 0,
                                        phase: C,
                                        numberOfEventsTriggered: M,
                                        variant: O,
                                        lemonpiAdsetId: U,
                                        appnexusUserId: "0",
                                        appnexusAuctionId: String(p("${AUCTION_ID}", "0")),
                                        appnexusCampaignId: String(p("${CP_ID}", "0")),
                                        appnexusCreativeId: String(p("${CREATIVE_ID}", "0")),
                                        gdprApplies: parseInt(p("${GDPR_APPLIES}", 0), 10),
                                        gdprConsentString: String(p("${GDPR_CONSENT_STRING}", "0")),
                                        gaMedium: f(i.cm, 4096) || "",
                                        gaSource: f(i.cs, 4096) || "",
                                        gaContent: f(i.cc, 4096) || "",
                                        gaTerm: f(i.cn, 4096) || "",
                                        templateType: E,
                                        appnexusAdvertiserId: String(p("${ADV_ID}", "0")),
                                        kosiVersion: "3.4.4",
                                        kosiClientName: k,
                                        environment: L,
                                        impressionId: r.id + R,
                                        propositionsStatus: "function" == typeof window.lemonpi.getPropositions ? "".concat(window.lemonpi.getPropositions(0).length, "_").concat(window.lemonpi.getPropositions(1).length, "_").concat(window.lemonpi.getPropositions(2).length) : "",
                                        custom1: n.custom1 || "",
                                        custom2: n.custom2 || "",
                                        custom3: n.custom3 || "",
                                        custom4: n.custom4 || "",
                                        custom5: A ? D ? "viewable" : "not_viewable" : "could_not_track_viewability"
                                    }
                                }
                            }

                            function h(e) {
                                var t = e.data,
                                    n = t.gdprConsentString,
                                    o = t.gdprApplies,
                                    r = t.appnexusUserId,
                                    a = i(t, ["gdprConsentString", "gdprApplies", "appnexusUserId"]);
                                a.screenResolution = "".concat(window.screen.width, "x").concat(window.screen.height), a.devicePixelRatio = window.devicePixelRatio || 1;
                                var s = function(e) {
                                    return Object.keys(e).map(function(t) {
                                        return "a_".concat(t, "=").concat(encodeURIComponent(e[t]))
                                    }).join("&")
                                }(a);
                                return "https://track-core.bncnt.com/userattribute/track.ashx" + "?cid=".concat("FE2E5C85ABD5EB97A3F92A3D2FD2D058", "&gdpr=").concat(o, "&gdpr_consent=").concat(n, "&gdpr_pd=0&uid=").concat(r, "&").concat(s)
                            }

                            function m(e, i) {
                                function o(e) {
                                    "viewability" === e.source ? window.kosi.trackInteraction("other", "viewabilityplay", s) : e.target.autoplay && !l ? (l = !0, window.kosi.trackInteraction("other", "autoplay", s)) : window.kosi.trackInteraction("click", "play", s)
                                }

                                function r(e) {
                                    "string" == typeof e.source ? window.kosi.trackInteraction("other", "".concat(e.source, "_pause"), s) : e.target.currentTime !== e.target.duration && window.kosi.trackInteraction("click", "pause", s)
                                }

                                function a(e, i) {
                                    clearTimeout(f), p.push(e), f = setTimeout(function() {
                                        var e = p.reduce(function(e, i) {
                                            return function(e) {
                                                for (var i = 1; i < arguments.length; i++) {
                                                    var o = null != arguments[i] ? arguments[i] : {};
                                                    i % 2 ? t(o, !0).forEach(function(t) {
                                                        n(e, t, o[t])
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(o).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                                    })
                                                }
                                                return e
                                            }({}, e, {}, i)
                                        }, {});
                                        p = [], i(e)
                                    }, 1)
                                }
                                var s = "".concat(e.parentElement.id, "_").concat(i),
                                    c = {
                                        25: !1,
                                        50: !1,
                                        75: !1,
                                        100: !1
                                    },
                                    l = !e.paused,
                                    d = !1,
                                    u = !1,
                                    p = [],
                                    f = null,
                                    g = 0;
                                l && (window.kosi.trackInteraction("other", "autoplay", s), l = !0), $(e).bind("play", function(e) {
                                    a(e, o)
                                }), $(e).bind("pause", function(e) {
                                    a(e, r)
                                }), e.addEventListener("timeupdate", function(e) {
                                    var t = e.target.currentTime / e.target.duration * 100;
                                    d || u ? d && 0 === e.target.currentTime && (c[100] || (window.kosi.trackInteraction("view_through_in_video", "quartile_100", s), c[100] = !0)) : (u = !0, setTimeout(function() {
                                        d = !0
                                    }, 500)), Object.keys(c).forEach(function(e) {
                                        e <= t && !c[e] && (window.kosi.trackInteraction("view_through_in_video", "quartile_".concat(e), s), c[e] = !0)
                                    })
                                }), e.addEventListener("volumechange", function(e) {
                                    var t = e.target.volume;
                                    0 === t && g !== t ? window.kosi.trackInteraction("click", "mute", s) : 0 < t && 0 === g && window.kosi.trackInteraction("click", "unmute", s), g = t
                                }), e.setAttribute("data-tracked", "")
                            }
                            var v = ["hover", "swipe", "click", "slide", "key_press", "time_spent_in_banner", "view_through_in_video", "other"],
                                w = "advanced",
                                y = "normal",
                                k = r.name,
                                b = s,
                                _ = "localhost" === window.location.hostname || "concept.html" === window.location.pathname.split("/")[2],
                                x = _ || -1 < window.location.hostname.indexOf("lemonpi.io") || void 0 !== window.screenad && window.screenad.isPreviewer,
                                T = y,
                                P = !1,
                                S = [],
                                I = o(),
                                C = "start",
                                O = "",
                                E = "",
                                M = 0,
                                A = !1,
                                D = null,
                                N = {
                                    x: 0,
                                    y: 0
                                },
                                R = "".concat(l() + l(), "-").concat(l(), "-").concat(l(), "-").concat(l(), "-").concat(l()).concat(l()).concat(l()),
                                L = _ ? "test" : void 0 !== window.screenad ? window.screenad.isPreviewer ? "acceptance" : "live" : -1 < window.location.hostname.indexOf("lemonpi.io") ? "acceptance" : "live",
                                U = window.lemonpi.staticContentImpressionUrl && -1 < window.lemonpi.staticContentImpressionUrl.indexOf("/view/") ? Number(window.lemonpi.staticContentImpressionUrl.split("/view/")[1].split("-")[0]) : 0;
                            if (function() {
                                    function e(e, t) {
                                        t = t || {
                                            bubbles: !1,
                                            cancelable: !1,
                                            detail: void 0
                                        };
                                        var n = document.createEvent("CustomEvent");
                                        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                                    }
                                    try {
                                        return new e("test")
                                    } catch (e) {}
                                    e.prototype = window.Event.prototype, window.CustomEvent = e
                                }(), 0 === arguments.length) throw new Error("Kosi does not work without passing in a client.");
                            $(c) && $(c).on("mousemove", function(e) {
                                N = {
                                    x: e.clientX,
                                    y: e.clientY
                                }
                            });
                            try {
                                new IntersectionObserver(function(e) {
                                    D = .5 <= e[0].intersectionRatio
                                }, {
                                    threshold: [.5]
                                }).observe(document.querySelector(c)), A = !0
                            } catch (e) {}
                            return {
                                log: function() {
                                    var e = [].slice.call(arguments),
                                        t = e[0],
                                        n = {
                                            event: "#e9575c",
                                            info: "#308ec4",
                                            warning: "#ff7e00"
                                        }[t];
                                    e.shift(), x && T === w ? (e.unshift("%cKosi ".concat(t, ":"), "background: ".concat(n, "; color: #fff")), console.log.apply(console, e)) : x && console.log("%cKosi ".concat(t, ":"), "background: ".concat(n, "; color: #fff"), arguments[1])
                                },
                                warn: function(e) {
                                    this.log("warning", e)
                                },
                                depMessage: function(e, t) {
                                    this.log("warning", 'Kosi method "'.concat(e, '" is deprecated since Kosi version ').concat(t, "."))
                                },
                                setDebug: function(e) {
                                    x = e
                                },
                                getUniqueUserId: function() {
                                    return R
                                },
                                getClientConfig: function() {
                                    return {
                                        bannerId: b,
                                        clientId: k
                                    }
                                },
                                setUniqueUserId: function(e) {
                                    R = e
                                },
                                getDebug: function() {
                                    return x
                                },
                                getDebugMode: function() {
                                    return T
                                },
                                setDebugMode: function(e) {
                                    T = e
                                },
                                setPhase: function(e) {
                                    C = e.toLowerCase()
                                },
                                setTemplateType: function(e) {
                                    E = e
                                },
                                setVariant: function(t) {
                                    O && this.warn('Cannot set the variant to "'.concat(t, '". You can only set the variant once. The current variant is "').concat(O, '" and will remain unchanged.')), O = t.toString(),
                                        function(e) {
                                            var t = u();
                                            t && Object.keys(t).forEach(function(n) {
                                                var i;
                                                if (window.lemonpi.layerMetadata[n].queryString) window.lemonpi.layerMetadata[n].queryString = t[n].queryString.replace("(:variant:)", e);
                                                else if (window.lemonpi.layerMetadata[n].clickTagName) {
                                                    var o = window.lemonpi.layerMetadata[n].clickTagName;
                                                    i = setInterval(function() {
                                                        window[o] && (clearInterval(i), window[o] = window[o].replace("(%3Avariant%3A)", e))
                                                    }, 100)
                                                }
                                            })
                                        }(t), e.trackMIAB && window.kosi.trackImpression()
                                },
                                getVariant: function() {
                                    return O
                                },
                                firePixel: function(e, t) {
                                    $("body").append('<img style="position:absolute;left:-20px;top:-20px" src="'.concat(e, '" />')), t && t.toString() && this.warn('The second parameter "allowOnNotPreferred" of method "firePixel", is deprecated and will be ignored.')
                                },
                                setTrackingDisabled: function(e) {
                                    void 0 === e && (P = !0), P = e
                                },
                                getTrackingDisabled: function() {
                                    return P
                                },
                                trackMouseHover: function(e, t, n, i) {
                                    var o = n,
                                        r = e,
                                        a = t,
                                        s = null,
                                        l = this,
                                        d = "start tracking mouse hover";
                                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !i || (void 0 !== o ? d = "".concat(d, " on ").concat(a, " (").concat(o, ")") : o = "the creative", this.log("info", d), r = r || 1e3, void 0 === a && (a = c), -1 < S.indexOf("hover_".concat(a)) ? this.warn("You tried to add multiple trackers for mouse hover on ".concat(o, ". Only the first works.")) : (S.push("hover_".concat(a)), $(a).hover(function() {
                                        s && clearTimeout(s), s = setTimeout(function() {
                                            l.trackEvent("hover", o, {
                                                interactionArea: o
                                            })
                                        }, r)
                                    }, function() {
                                        s && clearTimeout(s)
                                    })))
                                },
                                replaceMacros: function(e, t) {
                                    var n = e;
                                    return Object.keys(t).forEach(function(e) {
                                        n = n.replace("(:".concat(e, ":)"), t[e])
                                    }), n
                                },
                                trackEvent: function(t, n, i, o) {
                                    var r = g(t, n, i, function() {
                                            var e = u();
                                            if (!e) return {};
                                            var t = e[Object.keys(e)[0]].queryString,
                                                n = d("utm_source", t);
                                            return {
                                                cm: d("utm_medium", t),
                                                cs: n,
                                                cc: d("utm_content", t),
                                                cn: d("utm_campaign", t),
                                                ck: d("utm_term", t)
                                            }
                                        }()),
                                        a = function(e) {
                                            return {
                                                schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                                                data: e
                                            }
                                        }(r),
                                        s = function(e) {
                                            var t = "live" == L || "acceptance" == L ? "https://collect.kosi-analytics.io/i" : "https://com-greenhousegroup.mini.snplow.net/i",
                                                n = "kosi_".concat(k.replace(/[^\w]/g, "")),
                                                i = encodeURIComponent(JSON.stringify(e));
                                            return "".concat(t, "?ue_pr=").concat(i, "&e=ue&aid=").concat(n)
                                        }(a),
                                        c = h(r);
                                    o && C !== o || (M += 1, this.log("event", n ? "".concat(t, "::").concat(n) : t, a.data.data), this.firePixel(s), "live" != L && "acceptance" != L || e.disableCoreTracker || this.firePixel(c))
                                },
                                trackTimeInBanner: function(e) {
                                    var t, n = this,
                                        i = 0,
                                        o = 0,
                                        r = e || [3, 5, 7, 9, 11, 12, 15, 20, 25, 30, 40, 50, 60],
                                        a = [];
                                    this.log("info", "start tracking time in banner"), $(c).on("mouseenter", function() {
                                        o = (new Date).getTime(), t = setInterval(function() {
                                            var e, t, s = (new Date).getTime();
                                            i += s - o, o = s;
                                            var c = Math.round(i / 1e3); - 1 < r.indexOf(c) && -1 === a.indexOf(c) && (e = a[a.length - 1], a.push(c), t = e ? c - e : c, n.trackEvent("time_spent_in_banner", "auto", {
                                                ev: t,
                                                timePassed: c
                                            }))
                                        }, 500)
                                    }), $(c).on("mouseleave", function() {
                                        clearInterval(t)
                                    })
                                },
                                trackVideos: function() {
                                    var e = document.querySelectorAll("video:not([data-tracked])");
                                    [].forEach.call(e, m), setInterval(this.trackVideos, 1e3)
                                },
                                trackManualTimeSpend: function(e, t) {
                                    this.trackEvent("time_spent_in_banner", "manual", {
                                        timePassed: e,
                                        interactionArea: t
                                    })
                                },
                                trackImpression: function() {
                                    this.trackEvent("impression", "", "", null, "sp")
                                },
                                trackHeatmap: function(e, t) {
                                    function n() {
                                        clearTimeout(o)
                                    }

                                    function i(e) {
                                        return "function" == typeof e ? e() : e
                                    }
                                    var o, r, a = this;
                                    window.onmousemove = function(s) {
                                        var c, l, d, u, p;
                                        for (c = 0; c < e.length; c += 1) l = e[c], d = s.clientX, u = s.clientY, !((p = l).x > d || p.y > u) && p.x + p.width > d && p.y + p.height > u ? r !== i(l.id) && (r = i(l.id), n(), o = setTimeout(function() {
                                            a.trackEvent("hover", r, {
                                                interactionArea: r
                                            })
                                        }, t || 500)) : r === i(l.id) && (r = void 0, n())
                                    }, $(document).mouseleave(n)
                                },
                                trackGridHeatmap: function(e, t, n) {
                                    var i, o, r = [],
                                        a = document.querySelector(c).clientWidth,
                                        s = document.querySelector(c).clientHeight,
                                        l = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
                                        d = document.querySelectorAll(".kosi-grid-cell");
                                    for ([].forEach.call(d, function(e) {
                                            var t = e.getBoundingClientRect(),
                                                n = {
                                                    x: t.left,
                                                    y: t.top,
                                                    width: t.width,
                                                    height: t.height,
                                                    id: e.id
                                                };
                                            $(e).remove(), r.push(n)
                                        }), 1 < arguments.length && e < 2 && t < 2 && this.warn("You called trackGridHeatmap with a 1x1 grid. Please use trackMouseHover instead."), i = 0; i < e; i += 1)
                                        for (o = 0; o < t; o += 1) r.push({
                                            x: i * Math.round(a / t),
                                            y: o * Math.round(s / e),
                                            width: Math.round(a / t),
                                            height: Math.round(s / e),
                                            id: "".concat(l[o], "_").concat(i)
                                        });
                                    0 < r.length && this.trackHeatmap(r, n)
                                },
                                trackClick: function(e, t) {
                                    var n = this,
                                        i = t || "the creative",
                                        o = window.lemonpi.click;
                                    0 < document.querySelectorAll(".kosiable").length && this.warn("the usage of .kosiable is no longer supported. Use trackGridHeatmap or trackGrid instead."), this.log("info", "start tracking click on ".concat(i)), -1 < S.indexOf("click_".concat(i)) && this.warn("You add multiple trackers for click. Only the first works."), S.push("click_".concat(i)), void 0 !== e ? $(e).click(function() {
                                        n.trackEvent("click", i, {
                                            interactionArea: i
                                        })
                                    }) : window.lemonpi.click = function(e) {
                                        this.trackEvent("click", "out", {
                                            interactionArea: e
                                        }), o.apply(window.lemonpi, arguments)
                                    }.bind(this)
                                },
                                trackInteraction: function(e, t, n, i) {
                                    var o = n,
                                        r = t;
                                    if ("string" != typeof o && void 0 !== o || (o = {
                                            interactionArea: o
                                        }), v.indexOf(e) < 0) throw new Error('You called kosi.trackInteraction with "'.concat(e, '", but only one of these values is allowed: ').concat(v.join(", ")));
                                    void 0 === r && (r = ""), this.trackEvent(e, r, o, i)
                                },
                                getBannerSize: o,
                                setOnlyTrackOnPreferedPublishers: function() {
                                    this.depMessage("setOnlyTrackOnPreferedPublishers", "2.7.0")
                                },
                                getOnlyTrackOnPreferedPublishers: function() {
                                    this.depMessage("getOnlyTrackOnPreferedPublishers", "2.7.0")
                                },
                                isPreferedPublisher: function() {
                                    this.depMessage("isPreferedPublisher", "2.7.0")
                                },
                                setCustomTrackUrl: function() {
                                    this.depMessage("setCustomTrackUrl", "2.7.0")
                                },
                                setCollector: function() {
                                    this.depMessage("setCollector", "2.7.0")
                                }
                            }
                        }
                        var a;
                        return window.kosiSettings = e, {
                            creativeWillLoad: function(e) {
                                window.lemonpi.context ? window.lemonpi.context.subscribe(function(t) {
                                    a = t.appnexus, e()
                                }) : e()
                            },
                            creativeDidRender: function() {
                                var t, n = !1;
                                if (e && e.client && e.campaign) t = function(e) {
                                    var t = e.split("::");
                                    return {
                                        name: t[0],
                                        id: parseInt(t[1], 10)
                                    }
                                }(e.client), window.kosi = new r(t, e.campaign, "#creative_container"), window.addEventListener("message", function(e) {
                                    "EXECUTE_KOSI_METHOD" === e.data.type && window.kosi && "function" == typeof window.kosi[e.data.method] && window.kosi[e.data.method].apply(window.kosi, e.data.args)
                                });
                                else {
                                    if (!e.client) throw new Error("Kosi could not start because there is no selected client. Please select a client from the client dropdown in the configuration panel.");
                                    if (!e.campaign) throw new Error("Kosi could not start because there is no campaign name provided. Please provide a campaign name in the campaing field using the configuration panel.")
                                }
                                window.kosi && (e.trackHover && window.kosi.trackMouseHover(), e.trackClick && window.kosi.trackClick(), e.trackTimeSpent && window.kosi.trackTimeInBanner(), e.trackVideos && window.kosi.trackVideos(), e.trackFallback && (window.onerror = function() {
                                    n || (window.kosi.trackInteraction("other", "fallback_triggered"), n = !0)
                                }), e.trackMIAB || window.kosi.trackImpression(), window.kosi && window.kosi.getDebug() && $.getScript("https://s3-eu-west-1.amazonaws.com/kosi-assets/debugger/debugger_studio.js?v=2.0.0"))
                            },
                            pluginApi: r
                        }
                    }({
                        campaign: "VW-635 Ongoing Carfinder",
                        client: "Volkswagen::67",
                        disableCoreTracker: !1,
                        trackClick: !0,
                        trackFallback: !0,
                        trackHover: !0,
                        trackMIAB: !1,
                        trackTimeSpent: !0,
                        trackVideos: !1
                    })
                }
            }];
        window.addEventListener("error", t);
        for (var s = [], c = [], l = [], d = [], u = [], p = [], f = {}, g = {}, h = {}, m = 0; m < a.length; m++) {
            var v = a[m],
                w = v.init() || {};
            w.creativeWillLoad && s.push(w.creativeWillLoad), w.creativeDidLoad && c.push(w.creativeDidLoad), w.creativeWillRender && l.push(w.creativeWillRender), w.creativeDidRender && d.push(w.creativeDidRender), w.creativeWillOpenClickUrl && u.push(w.creativeWillOpenClickUrl), w.creativeDidOpenClickUrl && p.push(w.creativeDidOpenClickUrl), w.layerWillRender && n(v.name, w.layerWillRender, f), w.layerDidRender && n(v.name, w.layerDidRender, g), h[v.name] = w.pluginApi || {}
        }
        for (var y = 0, k = function() {}, m = 0; m < s.length; m++) {
            var b = s[m];
            b.length > 0 ? (y++, b(function() {
                y--, 0 === y && k()
            })) : b()
        }
        window.lemonpi = window.lemonpi || {}, window.lemonpi.start = function() {
            function t(e, t) {
                var n = e.length;
                if (0 === n) return void t();
                for (var i = 0; i < e.length; i++) {
                    var o = new Image,
                        r = function() {
                            0 === --n && t()
                        };
                    o.onload = r, o.onerror = r, o.src = e[i]
                }
            }

            function n(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t))
                        for (var n = document.querySelectorAll("[data-studio-behaviour='" + t + "']"), i = 0; i < n.length; i++) e[t](n[i])
            }
            t(o, function() {
                i(function() {
                    for (var t = 0; t < c.length; t++) c[t]();
                    for (var t = 0; t < l.length; t++) l[t]();
                    n(f);
                    for (var t = 0; t < r.length; t++) Creative.layer(r[t]).clickable(u, p);
                    document.querySelector("#creative_container").style.display = "", n(g);
                    for (var t = 0; t < d.length; t++) d[t]();
                    e(h)
                })
            })
        }
    }();