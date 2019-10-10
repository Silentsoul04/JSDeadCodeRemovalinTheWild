! function(e) {
    var t = {};

    function o(a) {
        if (t[a]) return t[a].exports;
        var n = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, a) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(a, n, function(t) {
                return e[t]
            }.bind(null, n));
        return a
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 104)
}({
    104: function(e, t, o) {
        CNN.INJECTOR.loadFeature("footer").then((function() {
            "use strict";
            window.Cipher || o(105), o(106)
        }))
    },
    105: function(e, t) {
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }! function(e) {
            "use strict";

            function t(e) {
                var a, n = [],
                    r = 0,
                    i = "";
                if (!Array.isArray(e)) return e;
                for (; r < e.length; r++) a = e[r], n[r] = a.name, (i = a.fragment) ? n[r] = a.name + "{ ..." + i + "}" : "object" === o(a.values) && null !== a.values && (n[r] = a.name + "{" + t(a.values) + "}");
                return n.join()
            }
            e.Cipher = e.Cipher || {
                createGraphQLQuery: function(e) {
                    var o = [],
                        a = (e = e || {}).name,
                        n = function(e) {
                            var t, o = [],
                                a = 0;
                            if (!Array.isArray(e)) return e;
                            for (; a < e.length; a++) t = e[a], o[a] = t.name + ':"' + t.value + '"';
                            return o.join()
                        }(e.params) || "",
                        r = t(e.fields) || "",
                        i = function(e) {
                            var o, a = "",
                                n = 0,
                                r = "",
                                i = [];
                            if (!Array.isArray(e)) return e;
                            for (; n < e.length; n++) r = (o = e[n]).name, a = o.on, i[n] = " fragment " + r + " on " + a + "{" + t(o.values) + "} ";
                            return i.join()
                        }(e.fragments) || "";
                    return o[0] = a + "(" + n + ")", o[1] = "{" + r + "}", o[2] = i, o.join("")
                }
            }
        }(window)
    },
    106: function(e, t, o) {
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        CNN.WeatherConfig = CNN.WeatherConfig || {}, CNN.MetaRefreshRate = CNN.MetaRefreshRate || 1800,
            function(e, t, o, n) {
                "use strict";

                function r() {
                    var r = null,
                        i = null,
                        c = !t.UserConsent || !1 === t.UserConsent.isEnabled() || !1 !== t.UserConsent.getUserConsentPersonalizationState(),
                        s = "fahrenheit",
                        l = "celsius",
                        u = "USNY9472",
                        m = "UKXX0085",
                        d = t.Features.enableWeather,
                        h = t.WeatherConfig.enableInFooter,
                        p = t.WeatherConfig.enableInHeader,
                        f = t.WeatherConfig.weatherLocationCookie,
                        g = t.WeatherConfig.weatherUnitsCookie,
                        w = t.GeoCheck.getData() || {},
                        y = function(e) {
                            var o = "/json/";
                            return null === e ? o += w.postCode + "/true" : (o += e.zip + "/" + (e.international ? "true" : "false") + "/" + e.locCode, null === r && (r = e.international ? l : s)), r = _("_weather-temp-type") ? _("_weather-temp-type") : null === t.Utils.getCookie("w-units") ? "domestic" === t.contentModel.edition ? s : l : "f" === t.Utils.getCookie("w-units") ? s : l, N(r), o
                        },
                        C = function() {
                            t.hasLocalStorage && null !== i && (v("_weather-temp-type", i), i = null)
                        },
                        _ = function(e) {
                            var o, a = null;
                            if (t.Utils && (o = t.Utils.getLocalValue(e))) try {
                                a = JSON.parse(o)
                            } catch (e) {
                                a = null
                            }
                            return a
                        },
                        v = function(e, o) {
                            var a;
                            if (!0 === c && t.Utils) try {
                                a = JSON.stringify(o), t.Utils.storeLocalValue(e, a, 99999)
                            } catch (e) {}
                        },
                        b = function(e) {
                            return isNaN(Number(e)) ? e : Math.round(5 * (e - 32) / 9)
                        },
                        j = function(e) {
                            return isNaN(Number(e)) ? e : Math.round(9 * e / 5 + 32)
                        },
                        k = function(t) {
                            return d ? e.Deferred((function(a) {
                                var r = e("article.cd--tool__weather-current"),
                                    i = t.currentConditions,
                                    c = {
                                        weatherBackgroundClass: i.icon.substring(0, 2),
                                        temperatureCurrent: i.temperature,
                                        temperatureHigh: t.forecast.days[0].high,
                                        temperatureLow: t.forecast.days[0].low,
                                        forecastDescription: i.description,
                                        feelsLikeTemperature: i.feelsLikeTemperature,
                                        humidity: i.humidity_S,
                                        wind: i.wind,
                                        sunriseTime: n(i.sunriseTime).format("h:mm a"),
                                        sunsetTime: n(i.sunsetTime).format("h:mm a"),
                                        barometer: i.barometricPressure,
                                        timestamp: n(i.lastUpdated.time).format("h:mm A"),
                                        temperatureType: t.location.international ? l : s
                                    };
                                o.render("views/cards/tool/weather-current", c, (function(e, t) {
                                    e || r.empty().append(t)
                                })), a.resolve(t)
                            })) : void 0
                        },
                        S = function(t) {
                            return d ? e.Deferred((function(a) {
                                var n = e("article.cd--tool__weather-impending"),
                                    r = t.forecast.days,
                                    i = r[10],
                                    c = r[1],
                                    u = [];
                                u.push({
                                    timeRange: "tonight",
                                    weatherBackgroundClass: i.icon.substring(0, 2),
                                    temperatureLow: i.low,
                                    description: i.description,
                                    temperatureType: t.location.international ? l : s
                                }), u.push({
                                    timeRange: "tomorrow",
                                    weatherBackgroundClass: c.icon.substring(0, 2),
                                    temperatureHigh: c.high,
                                    temperatureLow: c.low,
                                    description: c.description,
                                    temperatureType: t.location.international ? l : s
                                }), e.each(n, (function(t, a) {
                                    o.render("views/cards/tool/weather-impending", u[t], (function(t, o) {
                                        t || e(a).empty().append(o)
                                    }))
                                })), a.resolve(t)
                            })) : void 0
                        },
                        H = function(t) {
                            return d ? e.Deferred((function(a) {
                                var r = e("article.cd--tool__weather-conditions-forecast"),
                                    i = t.forecast.days.slice(1, 9),
                                    c = [];
                                e.each(i, (function(e, o) {
                                    c.push({
                                        temperatureHigh: o.high,
                                        temperatureLow: o.low,
                                        weatherBackgroundClass: o.icon.substring(0, 2),
                                        description: o.description,
                                        date: n(o.dayDate.time).format("dddd, MMMM Do"),
                                        temperatureType: t.location.international ? l : s
                                    })
                                })), e.each(r, (function(t, a) {
                                    o.render("views/cards/tool/weather-conditions-forecast", c[t], (function(t, o) {
                                        t || e(a).empty().append(o)
                                    }))
                                })), a.resolve(t)
                            })) : void 0
                        },
                        T = function(o) {
                            return e.Deferred((function(a) {
                                var n, r = function(e) {
                                        var o = e.location,
                                            a = e.location.region,
                                            n = [],
                                            r = o.stateOrCountry.toLowerCase();
                                        switch (a) {
                                            case "af":
                                                n = [t.Host.chrome + "/.element/img/3.0/weather/maps/satisafrnf.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/africa_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/africa_forecast.jpg"];
                                                break;
                                            case "as":
                                                n = [t.Host.chrome + "/.element/img/3.0/weather/maps/satusasiaf.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/asia_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/asia_forecast.jpg"];
                                                break;
                                            case "au":
                                                n = [t.Host.chrome + "/.element/img/3.0/weather/maps/satusaustf.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/australia_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/australia_forecast.jpg"];
                                                break;
                                            case "ca":
                                                n = [t.Host.chrome + "/.element/img/3.0/weather/maps/satuscamf.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/camerica_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/camerica_forecast.jpg"];
                                                break;
                                            case "eu":
                                                n = [t.Host.chrome + "/.element/img/3.0/weather/maps/satusneurf.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/europe_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/europe_forecast.jpg"];
                                                break;
                                            case "me":
                                                n = [t.Host.chrome + "/.element/img/3.0/weather/maps/satusmidef.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/mideast_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/mideast_forecast.jpg"];
                                                break;
                                            case "sa":
                                                n = [t.Host.chrome + "/.element/img/3.0/weather/maps/satuscsamf.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/samerica_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/samerica_forecast.jpg"];
                                                break;
                                            case "na":
                                                n = [t.Host.chrome + "/.element/img/3.0/weather/maps/satcanada_.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/namerica_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/namerica_forecast.jpg"];
                                                break;
                                            default:
                                                if (o.international) n = [];
                                                else {
                                                    switch (r) {
                                                        case "ma":
                                                        case "ri":
                                                            r = "ct";
                                                            break;
                                                        case "vt":
                                                            r = "nh";
                                                            break;
                                                        case "dc":
                                                        case "de":
                                                        case "md":
                                                        case "wv":
                                                            r = "va";
                                                            break;
                                                        case "nc":
                                                            r = "sc";
                                                            break;
                                                        case "me":
                                                            r = "nh";
                                                            break;
                                                        case "nj":
                                                            r = "pa"
                                                    }
                                                    n = [t.Host.chrome + "/.element/img/3.0/weather/maps/nxrd_" + r + "_.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/sat" + r + "_.gif", t.Host.chrome + "/.element/img/3.0/weather/maps/namerica_highs.jpg", t.Host.chrome + "/.element/img/3.0/weather/maps/namerica_forecast.jpg"]
                                                }
                                        }
                                        return n
                                    }(o),
                                    i = e(".zn-local-maps .cd__content"),
                                    c = ["radar", "satellite", "temperature", "forecast"],
                                    s = ["Current Radar", "Satellite", "Temperature", "Forecast"];
                                3 === r.length ? ((n = i.eq(1)).closest(".cn__column").hide(), n.find("[data-lightbox]").removeAttr("data-lightbox"), c.shift()) : 0 === r.length ? i.closest(".cn__column").hide() : i.closest(".cn__column").show(), e.each(i.filter(":visible"), (function(t, o) {
                                    e(o).html(e("<div />", {
                                        class: "weather__localmap weather__localmap--" + c[t],
                                        html: '<a href="' + r[t] + '" data-lightbox="weatherMaps" data-title="' + s[t] + '"><div class="js-weather_map_img_wrapper weather_map_img_wrapper"><img src="' + r[t] + '"></div></a>'
                                    }))
                                })), e(".js-weather_map_img_wrapper").click((function() {
                                    e("#lightbox").animate({
                                        top: "10%"
                                    }, 750)
                                })), a.resolve(o)
                            }))
                        },
                        M = function(e) {
                            return {
                                locationAttr: e.location.zip + "," + e.location.international + "," + e.location.locCode,
                                locCode: e.location.locCode,
                                city: e.location.city,
                                state: e.location.stateOrCountry,
                                iconNumber: e.currentConditions.icon,
                                temperature: e.currentConditions.temperature_S,
                                temperatureType: e.location.international ? l : s
                            }
                        },
                        U = function(a) {
                            return d ? e.Deferred((function(n) {
                                var r = e(document.getElementById("weather-header")),
                                    i = e(".l-footer__tools--weather"),
                                    c = a.currentConditions,
                                    u = a.location,
                                    m = {
                                        backgroundClass: c.icon,
                                        weatherIcon: t.Host.chrome + "/.e/img/3.0/weather/weatherIcon_" + c.icon + ".png",
                                        weatherClass: "weather-" + c.icon,
                                        description: c.description,
                                        locationCity: u.city,
                                        locationState: u.stateOrCountry,
                                        temperature: c.temperature_S,
                                        temperatureType: a.location.international ? l : s
                                    };
                                p && o.render("views/cards/tool/weather-header", m, (function(e, o) {
                                    e || (r.replaceWith(o), void 0 !== t.Analytics && void 0 !== t.Analytics.utils && "function" == typeof t.Analytics.utils.addTrackingTags && t.Analytics.utils.addTrackingTags(".nav .weather"))
                                })), h && o.render("views/cards/tool/weather-footer", m, (function(e, o) {
                                    e || (i.empty().append(o), void 0 !== t.Analytics && void 0 !== t.Analytics.utils && "function" == typeof t.Analytics.utils.addTrackingTags && t.Analytics.utils.addTrackingTags(".weather__footer-content"))
                                })), n.resolve(a)
                            })) : void 0
                        },
                        L = function() {
                            var e = !1;
                            return "weather" === t.contentModel.sectionName && (e = !0), e
                        },
                        D = function(a) {
                            return d && L() ? e.Deferred((function(r) {
                                var i = e(".js-weather-general-default"),
                                    c = a.currentConditions,
                                    u = a.location,
                                    m = {
                                        location: u.city + ", " + u.stateOrCountry,
                                        weatherIcon: t.Host.chrome + "/.e/img/3.0/weather/weatherIcon_" + c.icon + ".png",
                                        weatherBackgroundClass: c.icon.substring(0, 2),
                                        temperatureCurrent: c.temperature,
                                        temperatureHigh: a.forecast.days[0].high,
                                        temperatureLow: a.forecast.days[0].low,
                                        forecastDescription: c.description,
                                        temperatureType: a.location.international ? l : s,
                                        timestamp: n(c.lastUpdated.time).format("h:mm a, MMMM Do")
                                    };
                                e(".js-weather-general-settings").hide(), o.render("views/cards/tool/weather-general-html", m, (function(t, o) {
                                    if (t) return e(".js-weather-general-default").show(), void e(".el-weather__settings-link").children(".weather__local-query-visibility-toggle").show();
                                    i.html(o), e(".js-forecast-graphic").addClass("js-weather-background-" + c.icon.substring(0, 2)), e(".js-weather-general-icon-image").html('<i class="cnn-icon icon--weather-' + c.icon + '"></i>'), e(".js-weather__bar-timestamp").html(n(c.lastUpdated.time).format("h:mm a, MMMM Do")), e(".js-weather-general-default").show(), e(".el-weather__settings-link").children(".weather__local-query-visibility-toggle").show()
                                })), e(".weather__general .js-temperature").on("click", (function(t) {
                                    0 === e(t.target).parents("form").length && (window.location = "/weather")
                                })), r.resolve(a)
                            })) : void 0
                        },
                        N = function(o) {
                            var a, n, r = o,
                                u = o,
                                m = "celsius" === o ? "c" : "f",
                                d = Date.now() + 31536e6;
                            e(".js-el-weather__local-query__temp-toggle-button.active").removeClass("active"), e(".js-el-weather__local-query__temp-toggle-button--" + o).addClass("active"), !0 === c && t.Utils.setCookie(g, m, d, "/", ".cnn.com", !1), n = (a = e(".js-temp").filter('[data-temptype="' + (o === l ? s : l) + '"]')).next(".js--temperatureScale"), i = o,
                                function(t, o, a, n) {
                                    var r, i;
                                    e.each(o, (function(o, c) {
                                        e(c).attr(t) ? (e(c).html(e(c).attr(t)).attr("data-temptype", t), e(n[o]).html(t === l ? "C" : "F")) : (r = e(c).html(), i = t === l ? b(r) : j(r), e(c).html(i).attr(a, r).attr("data-temptype", t).attr(t, i), e(n[o]).html(t === l ? "C" : "F"))
                                    }))
                                }(u, a, r, n)
                        },
                        q = function(o, a) {
                            return e.Deferred((function(n) {
                                var r, i = [];
                                if (o) {
                                    for (r = 0; r < o.locations.length; r++) i.push(o.locations[r].locCode);
                                    e.inArray(a.locCode, i) < 0 && (o.locations.length === Number(t.WeatherConfig.storedLocationsAmount) && (o.locations = o.locations.slice(0, o.locations.length - 1)), o.locations.unshift({
                                        zip: a.zip,
                                        international: a.international,
                                        locCode: a.locCode
                                    }), v("_weather-storedlocations", o))
                                }
                                n.resolve(o, a)
                            }))
                        },
                        F = function(t, o) {
                            return e.Deferred((function(a) {
                                var n, r = [],
                                    i = [];
                                e(".weather__conditions--location.js-weather__conditions--recent--locations").remove(), e(".cd--tool__weather-stored-locations").length > 0 ? (e.each(t.locations, (function(e, t) {
                                    r.push(x(y(t)))
                                })), e.when.apply(null, r).done((function() {
                                    void 0 !== arguments[0][0].location ? (n = arguments[0][0], i.push(M(n))) : e.each(arguments, (function(e, t) {
                                        n = t[0][0], i.push(M(n))
                                    })), a.resolve(t, i, o)
                                }))) : a.resolve(t, i, o)
                            }))
                        },
                        z = function(a, n, r) {
                            return d ? e.Deferred((function(i) {
                                var c = e(".weather__stored-locations");
                                e.each(n, (function(r) {
                                    o.render("views/cards/tool/weather-stored-locations-single", n[r], (function(o, n) {
                                        o ? console.log("Dust.render error:", o) : e(n).on("click", (function() {
                                            t.hasLocalStorage && v("_weather-customlocation", a.locations[r]), R(y({
                                                zip: a.locations[r].zip,
                                                international: a.locations[r].international,
                                                locCode: a.locations[r].locCode
                                            }))
                                        })).prependTo(c)
                                    }))
                                })), i.resolve(a, r)
                            })) : void 0
                        },
                        O = function(t) {
                            e(".stored-location--default").removeClass("stored-location--default"), e(".weather__conditions--location[data-loccode=" + t + "]").addClass("stored-location--default")
                        },
                        A = function(a) {
                            return d ? e.Deferred((function(n) {
                                var r = e(".zn-local-forecast .zn-header__text .zn-header__stripes"),
                                    i = a.location,
                                    s = {
                                        zip: i.zip,
                                        international: i.international,
                                        locCode: i.locCode,
                                        locationAttr: i.zip + "," + i.international + "," + i.locCode
                                    };
                                o.render("views/cards/tool/weather-make-default-button", s, (function(o, n) {
                                    o ? console.log("Dust.render: weather-make-default-button - error:", o) : e(n).on("click", (function() {
                                        var e = Date.now() + 31536e6,
                                            o = "celsius" === _("_weather-temp-type") ? "c" : "f";
                                        t.hasLocalStorage && v("_weather-customlocation", a.location), !0 === c && (t.Utils.setCookie(f, JSON.stringify(a.location), e, "/", ".cnn.com", !1), t.Utils.setCookie(g, o, e, "/", ".cnn.com", !1)), O(a.location.locCode)
                                    })).insertBefore(r)
                                })), n.resolve(a)
                            })) : void 0
                        },
                        x = function(o) {
                            return e.ajax({
                                url: t.WeatherConfig.serviceForecastHost + t.WeatherConfig.getForecast + o,
                                type: "GET",
                                dataType: "json"
                            })
                        },
                        W = function() {
                            return e.ajax({
                                url: t.WeatherConfig.serviceForecastHost + "/weather/citySearch?search_term=" + w.city,
                                type: "GET",
                                dataType: "json"
                            })
                        },
                        R = function n(i) {
                            var c, d, h, p;
                            (L() ? x(i) : function(o) {
                                var n, r, i, c, s, l, d, h, p = t.WeatherConfig.countryMap,
                                    f = [],
                                    g = [],
                                    y = {},
                                    C = e.Deferred();
                                if (t.hasLocalStorage && ((y = _("_weather-customlocation")) || (y = {})), "international" === t.contentModel.edition ? (y.international = "true", n = "true") : (y.international = "false", n = "false"), y.locCode) {
                                    if ("united states" === y.countryName.toLowerCase()) return o = [{
                                        name: "zip",
                                        value: y.zip
                                    }, {
                                        name: "celsius",
                                        value: n
                                    }], d = {
                                        name: "wsiForecast",
                                        params: o,
                                        fields: [{
                                            name: "currentConditions",
                                            values: [{
                                                name: "temperature"
                                            }, {
                                                name: "description"
                                            }, {
                                                name: "icon"
                                            }]
                                        }, {
                                            name: "location",
                                            values: [{
                                                name: "city"
                                            }, {
                                                name: "stateOrCountry"
                                            }]
                                        }]
                                    }, r = "{" + Cipher.createGraphQLQuery(d) + "}", l = encodeURIComponent(r), h = t.WeatherConfig.serviceForecastHost + "/graphql?query=" + l, e.ajax({
                                        url: h,
                                        type: "GET",
                                        dataType: "json"
                                    });
                                    i = y.countryName, "object" === a(p) && (c = p[i] || i), W().done((function(i) {
                                        return i.length > 1 ? (g = i.filter((function(e) {
                                            if (e.locCode.substring(0, 2) === c) return e
                                        }))).length > 1 && (f = g.filter((function(e) {
                                            if (e.city.toLowerCase() === y.city.toLowerCase()) return e
                                        }))) : 1 === i.length && (y.locCode = i[0].locCode), y.locCode = y.locCode || f[0] && f[0].locCode || g[0] && g[0].locCode, y.locCode || ("international" === t.contentModel.edition ? y.locCode = m : y.locCode = u), s = y.locCode, d = {
                                            name: "wsiForecast",
                                            params: o = [{
                                                name: "locCode",
                                                value: s
                                            }, {
                                                name: "celsius",
                                                value: n
                                            }],
                                            fields: [{
                                                name: "currentConditions",
                                                values: [{
                                                    name: "temperature"
                                                }, {
                                                    name: "description"
                                                }, {
                                                    name: "icon"
                                                }]
                                            }, {
                                                name: "location",
                                                values: [{
                                                    name: "city"
                                                }, {
                                                    name: "stateOrCountry"
                                                }]
                                            }]
                                        }, r = "{" + Cipher.createGraphQLQuery(d) + "}", l = encodeURIComponent(r), h = t.WeatherConfig.serviceForecastHost + "/graphql?query=" + l, e.ajax({
                                            url: h,
                                            type: "GET",
                                            dataType: "json"
                                        }).done((function(e) {
                                            "object" === a(e) && null !== e && e.data.wsiForecast && e.data.wsiForecast.currentConditions ? C.resolve(e) : C.reject("Data not available")
                                        }))
                                    }))
                                } else {
                                    if (null === t.GeoCheck.getData() && ("domestic" === t.contentModel.edition ? (w.country = "US", w.postCode = "10001") : (w.country = "GB", w.city = "london", w.continent = "EU", w.region = "LND")), "US" === w.country.toUpperCase()) return o = [{
                                        name: "zip",
                                        value: w.postCode
                                    }, {
                                        name: "celsius",
                                        value: n
                                    }], d = {
                                        name: "wsiForecast",
                                        params: o,
                                        fields: [{
                                            name: "currentConditions",
                                            values: [{
                                                name: "temperature"
                                            }, {
                                                name: "description"
                                            }, {
                                                name: "icon"
                                            }]
                                        }, {
                                            name: "location",
                                            values: [{
                                                name: "city"
                                            }, {
                                                name: "stateOrCountry"
                                            }]
                                        }]
                                    }, r = "{" + Cipher.createGraphQLQuery(d) + "}", l = encodeURIComponent(r), h = t.WeatherConfig.serviceForecastHost + "/graphql?query=" + l, e.ajax({
                                        url: h,
                                        type: "GET",
                                        dataType: "json"
                                    });
                                    i = w.country, "object" === a(p) && (c = p[i] || i), W().done((function(i) {
                                        return i.length > 1 ? (g = i.filter((function(e) {
                                            if (e.locCode.substring(0, 2) === c) return e
                                        }))).length > 1 && (f = g.filter((function(e) {
                                            if (e.city.toLowerCase() === w.city.toLowerCase()) return e
                                        }))) : 1 === i.length && (y.locCode = i[0].locCode), y.locCode = y.locCode || f[0] && f[0].locCode || g[0] && g[0].locCode, y.locCode || ("international" === t.contentModel.edition ? y.locCode = m : y.locCode = u), s = y.locCode, d = {
                                            name: "wsiForecast",
                                            params: o = [{
                                                name: "locCode",
                                                value: s
                                            }, {
                                                name: "celsius",
                                                value: n
                                            }],
                                            fields: [{
                                                name: "currentConditions",
                                                values: [{
                                                    name: "temperature"
                                                }, {
                                                    name: "description"
                                                }, {
                                                    name: "icon"
                                                }]
                                            }, {
                                                name: "location",
                                                values: [{
                                                    name: "city"
                                                }, {
                                                    name: "stateOrCountry"
                                                }]
                                            }]
                                        }, r = "{" + Cipher.createGraphQLQuery(d) + "}", l = encodeURIComponent(r), h = t.WeatherConfig.serviceForecastHost + "/graphql?query=" + l, e.ajax({
                                            url: h,
                                            type: "GET",
                                            dataType: "json"
                                        }).done((function(e) {
                                            "object" === a(e) && null !== e && e.data.wsiForecast && e.data.wsiForecast.currentConditions ? C.resolve(e) : C.reject("Data not available")
                                        }))
                                    }))
                                }
                                return C.promise()
                            }(i)).fail((function() {
                                t.hasLocalStorage && U(_("_weather-" + t.Edition))
                            })).done((function(a) {
                                var i, f, g, C, x;
                                void 0 === a.Error ? (L() && (d = a[0], h = a[0].location), t.hasLocalStorage && v("_weather-" + t.Edition, d), L() ? (x = d, e.Deferred((function(t) {
                                    var o = e(".zn-local-forecast .zn-header__text"),
                                        a = e(".zn-local-forecast .zn-header__text .zn-header__stripes").clone(),
                                        n = x.location;
                                    o.html(n.city + ", " + n.stateOrCountry).append(a), t.resolve(x)
                                })).promise()).then(A).then(k).then(S).then(H).then(T).then(U).then(D).then((function() {
                                    t.hasLocalStorage ? (c = _("_weather-storedlocations")) ? q(c, h).then(F).then(z).then((function() {
                                        var o, a = _("_weather-customlocation"),
                                            n = _("_weather-temp-type");
                                        o = n || (null === t.Utils.getCookie("w-units") ? "domestic" === t.contentModel.edition ? s : l : "f" === t.Utils.getCookie("w-units") ? s : l), e(".js-el-weather__local-query__temp-toggle-button.active").removeClass("active"), e(".js-el-weather__local-query__temp-toggle-button." + o).addClass("active"), a && O(a.locCode), r && N(r)
                                    })) : z(c = {
                                        locations: []
                                    }, [M(d)], h).then(q) : e(".weather__stored-locations").closest(".cn").hide()
                                })) : (i = e(".l-footer__tools--weather"), f = {
                                    backgroundClass: a.data.wsiForecast.currentConditions.icon,
                                    weatherIcon: t.Host.chrome + "/.e/img/3.0/weather/weatherIcon_" + a.data.wsiForecast.currentConditions.icon + ".png",
                                    weatherClass: "weather-" + a.data.wsiForecast.currentConditions.icon,
                                    description: a.data.wsiForecast.currentConditions.description,
                                    locationCity: a.data.wsiForecast.location.city,
                                    locationState: a.data.wsiForecast.location.stateOrCountry,
                                    temperature: a.data.wsiForecast.currentConditions.temperature,
                                    temperatureType: "domestic" === t.contentModel.edition ? s : l
                                }, t.hasLocalStorage && (g = _("_weather-customlocation"), (C = _("_weather-temp-type")) || (C = null === t.Utils.getCookie("w-units") ? "domestic" === t.contentModel.edition ? s : l : "f" === t.Utils.getCookie("w-units") ? s : l), null !== t.GeoCheck.getData() || g ? g ? !1 === g.international ? C === l && (f.temperature = b(f.temperature)) : C === s && (f.temperature = j(f.temperature)) : "US" !== w.country ? C === s && (f.temperature = j(f.temperature)) : C === l && (f.temperature = b(f.temperature)) : "domestic" === t.contentModel.edition ? C === l && (f.temperature = b(f.temperature)) : C === s && (f.temperature = j(f.temperature))), o.render("views/cards/tool/weather-footer", f, (function(e, t) {
                                    e || i.empty().append(t)
                                })))) : function() {
                                    var e = {};
                                    t.hasLocalStorage && ((e = _("_weather-customlocation")) || (e = {})), "international" === t.contentModel.edition ? e.international = "true" : e.international = "false", e.zip = w.postCode, e.locCode || W().done((function(o) {
                                        if (o.length > 1) {
                                            for (p = 0; p < o.length; p++)
                                                if (o[p].locCode.substring(0, 2) === w.country) {
                                                    e.locCode = o[p].locCode;
                                                    break
                                                }
                                        } else 1 === o.length && (e.locCode = o[0].locCode);
                                        e.locCode || ("international" === t.contentModel.edition ? e.locCode = m : e.locCode = u), n(y(e))
                                    }))
                                }()
                            }))
                        },
                        E = function() {
                            try {
                                trackMetrics({
                                    type: "weather-page",
                                    data: {}
                                })
                            } catch (e) {}
                        },
                        G = function() {
                            var e, o;
                            t.hasLocalStorage ? (e = _("_weather-customlocation"), o = _("_weather-temp-type"), r = o || (null === t.Utils.getCookie("w-units") ? "domestic" === t.contentModel.edition ? s : l : "f" === t.Utils.getCookie("w-units") ? s : l), R(y(e || null))) : R(y(null))
                        },
                        I = function(o, n) {
                            var r, i;
                            (o.preventDefault ? o.preventDefault() : o.returnValue = !1, (r = e("#weather__" + n + "-query-form input:first").val()).length <= 2) || function(o, n) {
                                var r = e("#weather__" + n + '-query-form input[name="weather-local-search"]'),
                                    i = e("#weather__" + n + '-query-form input[name="set-button"]'),
                                    c = ("/json/" + o + "/true").replace(/\s+/g, "+");
                                r.val("").on("focus", (function() {
                                    var t = e(this).hasClass("error");
                                    "undefined" !== a(t) && !1 !== t && (e(this).removeClass("error"), i.removeAttr("disabled"), i.removeClass("half-opacity"), e(this).val(""))
                                })), e.getJSON(t.WeatherConfig.serviceCitySearchHost + t.WeatherConfig.citySearch + c).done((function(e) {
                                    0 === e.length ? (r.val(o).addClass("error").blur(), i.attr("disabled", "disabled"), i.addClass("half-opacity")) : 1 === e.length && ("general" === n && v("_weather-customlocation", e[0]), "object" === a(t.Features) && !1 === t.Features.enableOmniture || E(), R(y(e[0])))
                                }))
                            }((i = r, String(i).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")), n)
                        };
                    e(document).onZonesAndDomReady((function() {
                        var o, a, n;
                        G(), e(".js-weather__general-query-form").length > 0 && "undefined" != typeof Bloodhound && (o = e(".js-weather__general-query-form"), a = o.find(".js-weather__local-query__search"), (n = new Bloodhound({
                            limit: 15,
                            queryTokenizer: Bloodhound.tokenizers.whitespace,
                            datumTokenizer: function(e) {
                                return Bloodhound.tokenizers.whitespace(e.data.city)
                            },
                            remote: {
                                url: t.WeatherConfig.serviceCitySearchHost + t.WeatherConfig.citySearch + "/json/%QUERY/true",
                                filter: function(t) {
                                    var o = [];
                                    return void 0 !== t && e.each(t, (function(e, t) {
                                        o.push({
                                            name: t.city + ", " + t.stateOrCountry,
                                            data: t
                                        })
                                    })), o
                                },
                                ajax: {
                                    dataType: "json",
                                    complete: function(e) {
                                        var t = !(e.responseJSON && e.responseJSON.length);
                                        a.toggleClass("error", t), o[t ? "attr" : "removeAttr"]("disabled", "disabled")
                                    }
                                },
                                replace: function(e, t) {
                                    var o = a.val().replace(/\s+/g, "+");
                                    return e.replace("%QUERY", o)
                                }
                            }
                        })).initialize(), a.typeahead({
                            hint: !1
                        }, {
                            name: "user-location",
                            displayKey: "name",
                            source: n.ttAdapter(),
                            templates: {
                                suggestion: function(e) {
                                    return e.data.city + ", " + e.data.stateOrCountry
                                }
                            }
                        }).on("typeahead:selected", (function() {
                            o.trigger("submit"), a.typeahead("val", "")
                        })), o.find(".twitter-typeahead").css({
                            display: "block"
                        }), o.closest(".column").addClass("column--top")), setInterval(G, 1e3 * t.MetaRefreshRate)
                    })), e(document).on("submit", "#weather__local-query-form", (function(e) {
                        I(e, "local")
                    })), e(document).on("submit", "#weather__general-query-form", (function(t) {
                        if (C(), !e("#weather__general-query-form input:first").val()) return e(".js-weather-general-default").toggle(), e(".js-weather-general-settings").toggle(), e(".el-weather__settings-link").children(".weather__local-query-visibility-toggle").toggle(), !1;
                        I(t, "general")
                    })), e(document).on("click", ".js-el-weather__local-query__temp-toggle-button", (function() {
                        N(e(this).data().temp), C()
                    })), e(document).on("click", ".weather__local-query-visibility-toggle", (function() {
                        null !== i && N(r), e(".js-weather-general-default").toggle(), e(".js-weather-general-settings").toggle(), e(".el-weather__settings-link").children(".weather__local-query-visibility-toggle").toggle()
                    }))
                }
                e(document).onZonesAndDomReady((function() {
                    setTimeout(r, 50)
                }))
            }(jQuery, CNN, dust, moment)
    }
});