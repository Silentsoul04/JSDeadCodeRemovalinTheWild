var Supernova = function(e) {
    function t(t) {
        for (var a, r, c = t[0], u = t[1], s = t[2], l = 0, f = []; l < c.length; l++) r = c[l], o[r] && f.push(o[r][0]), o[r] = 0;
        for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        for (d && d(t); f.length;) f.shift()();
        return i.push.apply(i, s || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, r = 1; r < n.length; r++) {
                var u = n[r];
                0 !== o[u] && (a = !1)
            }
            a && (i.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var a = {},
        r = {
            0: 0
        },
        o = {
            0: 0
        },
        i = [];

    function c(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1,
            8: 1,
            9: 1,
            12: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1
        }[e] && t.push(r[e] = new Promise(function(t, n) {
            for (var a = "css/" + ({}[e] || e) + ".chunk.css", r = c.p + a, o = document.getElementsByTagName("link"), i = 0; i < o.length; i++) {
                var u = (l = o[i]).getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (u === a || u === r)) return t()
            }
            var s = document.getElementsByTagName("style");
            for (i = 0; i < s.length; i++) {
                var l;
                if ((u = (l = s[i]).getAttribute("data-href")) === a || u === r) return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function(t) {
                var a = t && t.target && t.target.src || r,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                o.request = a, n(o)
            }, d.href = r, document.getElementsByTagName("head")[0].appendChild(d)
        }).then(function() {
            r[e] = 0
        }));
        var n = o[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var a = new Promise(function(t, a) {
                    n = o[e] = [t, a]
                });
                t.push(n[2] = a);
                var i, u = document.getElementsByTagName("head")[0],
                    s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = function(e) {
                    return c.p + "js/" + ({}[e] || e) + ".chunk.js"
                }(e), i = function(t) {
                    s.onerror = s.onload = null, clearTimeout(l);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src,
                                i = new Error("Loading chunk " + e + " failed.\n(" + a + ": " + r + ")");
                            i.type = a, i.request = r, n[1](i)
                        }
                        o[e] = void 0
                    }
                };
                var l = setTimeout(function() {
                    i({
                        type: "timeout",
                        target: s
                    })
                }, 12e4);
                s.onerror = s.onload = i, u.appendChild(s)
            }
        return Promise.all(t)
    }, c.m = e, c.c = a, c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) c.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "https://secure.skypeassets.com/apollo/2.1.1477/supernova/", c.oe = function(e) {
        throw console.error(e), e
    };
    var u = window.webpackJsonpSupernova = window.webpackJsonpSupernova || [],
        s = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var l = 0; l < u.length; l++) t(u[l]);
    var d = s;
    return i.push([255, 20]), n()
}({
    112: function(e, t, n) {},
    114: function(e, t, n) {},
    116: function(e, t, n) {
        var a = {
            "./button/Button.component": [7],
            "./buttonDropdown/ButtonDropdownn.component": [259, 3],
            "./buttonDropdown/buttonDropdown.component": [260, 4],
            "./caller-id/CallerId.component": [270, 5],
            "./carousel/Carousel.component": [261, 6],
            "./carouselItem/CarouselItem.component": [262, 7],
            "./device/Device.component": [263, 8],
            "./dropdownButton/DropdownButton.component": [258, 9],
            "./dropdownButton/DropdownList.component": [256, 10],
            "./export-contacts/ExportContacts.component": [268, 11],
            "./grid/Column.component": [19],
            "./grid/Row.component": [27],
            "./grid/Section.component": [28],
            "./icon/Icon.component": [8],
            "./iconContent/IconContent.component": [57],
            "./image/Image.component": [49],
            "./languageSelector/Languageselector.component": [264, 12],
            "./manager-admin-settings/ManagerAdminSettings.component": [272, 13],
            "./manager-settings/ManagerSettings.component": [271, 14],
            "./promoBanner/PromoBanner.component": [265, 15],
            "./skype-number/SkypeNumber.component": [269, 16],
            "./skypeCredits/SkypeCredits.component": [62],
            "./subscriptions/Subscriptions.component": [61],
            "./tabs/Tabs.component": [266, 17],
            "./text-flag/TextFlag.component": [257, 18],
            "./text/Text.component": [9],
            "./textIcon/TextIcon.component": [16],
            "./toggleSwitch/ToggleSwitch.component": [267, 19],
            "./toggler/Toggler.component": [17],
            "./userBadge/UserBadge.component": [59],
            "./wrapper/Wrapper.component": [60]
        };

        function r(e) {
            var t = a[e];
            return t ? Promise.all(t.slice(1).map(n.e)).then(function() {
                var e = t[0];
                return n(e)
            }) : Promise.resolve().then(function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            })
        }
        r.keys = function() {
            return Object.keys(a)
        }, r.id = 116, e.exports = r
    },
    117: function(e, t, n) {},
    119: function(e, t, n) {},
    12: function(e, t, n) {
        "use strict";
        var a = n(102),
            r = n(3),
            o = n.n(r),
            i = "SKYPE_SETTINGS";
        t.a = function(e) {
            return o()(window, [i].concat(Object(a.a)(e)))
        }
    },
    129: function(e, t, n) {},
    131: function(e, t, n) {},
    15: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var a = n(98),
            r = n.n(a),
            o = n(13),
            i = n.n(o);

        function c(e) {
            return i()(e) || "string" !== typeof e ? e : r.a.decode(e)
        }
    },
    16: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return u
        });
        var a = n(0),
            r = n.n(a),
            o = n(2),
            i = n(8),
            c = n(9);
        n(183);

        function u(e) {
            return function(e) {
                var t = e.classes,
                    n = e.withLink,
                    a = e.icon,
                    u = e.iconPosition,
                    s = e.children,
                    l = e.value,
                    d = Object(o.a)(e),
                    f = {
                        ariaHidden: !0,
                        icon: a
                    },
                    m = {
                        classes: d.textClasses,
                        properties: {
                            size: d.textSize,
                            withLink: n
                        },
                        value: l || ""
                    };
                return "left" === u || "top" === u ? r.a.createElement("div", {
                    className: "text-icon icon-".concat(u, " ").concat(t)
                }, r.a.createElement(i.default, f), r.a.createElement("div", {
                    className: "text-icon-content"
                }, s || r.a.createElement(c.default, m))) : r.a.createElement("div", {
                    className: "text-icon icon-".concat(u, " ").concat(t)
                }, r.a.createElement("div", {
                    className: "text-icon-content"
                }, s || r.a.createElement(c.default, m)), r.a.createElement(i.default, f))
            }(e)
        }
    },
    163: function(e, t, n) {},
    17: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return u
        });
        var a = n(1),
            r = n(0),
            o = n.n(r),
            i = n(66),
            c = n(4);

        function u(e) {
            var t = Object(r.useState)(!0),
                n = Object(a.a)(t, 2),
                u = n[0],
                s = n[1],
                l = Object(r.useState)(!0),
                d = Object(a.a)(l, 2),
                f = d[0],
                m = d[1],
                p = e.afterConditionContent,
                v = e.defaultContent,
                b = e.passed,
                g = e.isDataLoading,
                O = b ? p : v;
            return Object(r.useEffect)(function() {
                var t = setTimeout(function() {
                    return s(!1)
                }, e.timer);
                return function() {
                    return clearTimeout(t)
                }
            }, []), Object(r.useEffect)(function() {
                g || u || m(!1)
            }, [g, u]), o.a.createElement(r.Fragment, null, f ? Object(i.a)(e.fallback) : o.a.createElement(r.Fragment, null, o.a.isValidElement(O) ? O : c.a.Map(O)))
        }
        u.defaultProps = {
            timer: 1500
        }
    },
    18: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            return (e || "").replace(/\{([0-9]+)\}/g, function(e, t) {
                return n[t]
            })
        }
    },
    181: function(e, t, n) {},
    183: function(e, t, n) {},
    19: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return s
        });
        var a = n(1),
            r = n(0),
            o = n.n(r),
            i = n(5),
            c = n(4),
            u = (n(117), function(e) {
                if (!e) return 100;
                if (!isNaN(e)) return e;
                var t = e.toString().split("/"),
                    n = Object(a.a)(t, 2),
                    r = n[0],
                    o = n[1];
                return 100 * Number(r) / Number(o)
            });

        function s(e) {
            var t = e.width,
                n = e.order,
                a = e.children,
                r = e.content,
                s = e.classes,
                l = u(t),
                d = {
                    flex: "0 0 ".concat(l, "%"),
                    maxWidth: l + "%",
                    msFlex: "0 0 ".concat(l, "%"),
                    order: n || 1
                };
            return o.a.createElement("div", {
                style: d,
                className: Object(i.a)("supernova-column", s)
            }, a || c.a.Map(r))
        }
    },
    2: function(e, t, n) {
        "use strict";

        function a(e) {
            return e.properties ? e.properties : {}
        }
        n.d(t, "a", function() {
            return a
        })
    },
    20: function(e, t, n) {
        "use strict";

        function a(e) {
            if (!e) return null;
            var t = e.name,
                n = e.id,
                a = e.slot;
            return {
                "data-bi-area": e.area,
                "data-bi-id": n,
                "data-bi-name": t,
                "data-bi-slot": a
            }
        }
        n.d(t, "a", function() {
            return a
        })
    },
    242: function(e, t, n) {},
    244: function(e, t, n) {},
    246: function(e, t, n) {},
    250: function(e, t, n) {},
    252: function(e, t, n) {},
    254: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0),
            r = n.n(a),
            o = n(56),
            i = n.n(o),
            c = {
                file: function() {
                    return n.e(2).then(n.bind(null, 447)).then(function(e) {
                        return e.pageGreen
                    })
                },
                windowProperty: function() {
                    return Promise.resolve(window && window.supernovaData)
                }
            },
            u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "windowProperty";
                return (c[e] || function() {
                    return Promise.resolve({})
                })()
            },
            s = (n(29), n(2)),
            l = n(5),
            d = n(7),
            f = n(19),
            m = n(27),
            p = n(28),
            v = n(8),
            b = n(57),
            g = n(49),
            O = n(4),
            E = n(62),
            h = n(61),
            j = n(9),
            y = n(16),
            w = n(17),
            k = n(59),
            x = n(60),
            T = (n(246), {
                Button: d.default,
                Column: f.default,
                Icon: v.default,
                IconContent: b.default,
                Image: g.default,
                Row: m.default,
                Section: p.default,
                SkypeCredits: E.default,
                Subscriptions: h.default,
                Text: j.default,
                TextIcon: y.default,
                Toggler: w.default,
                UserBadge: k.default,
                Wrapper: x.default
            });
        Object(O.b)(T, {
            ButtonDropdown: "buttonDropdown/buttonDropdown",
            CallerId: "caller-id/CallerId",
            Carousel: "carousel/Carousel",
            CarouselItem: "carouselItem/CarouselItem",
            Device: "device/Device",
            DropdownButton: "dropdownButton/DropdownButton",
            ExportContacts: "export-contacts/ExportContacts",
            LanguageSelector: "languageSelector/Languageselector",
            ManagerAdminSettings: "manager-admin-settings/ManagerAdminSettings",
            ManagerSettings: "manager-settings/ManagerSettings",
            PromoBanner: "promoBanner/PromoBanner",
            SkypeNumber: "skype-number/SkypeNumber",
            Tabs: "tabs/Tabs",
            TextFlag: "text-flag/TextFlag"
        });
        var N = function(e) {
                var t = e.data;
                return r.a.createElement("div", {
                    className: Object(l.a)("home", "sn-exp-".concat(t.title))
                }, t && t.content.map(function(e, t) {
                    return r.a.createElement(O.a, {
                        key: t,
                        component: e
                    })
                }))
            },
            S = n(96);
        n(252);

        function C(e) {
            var t = Object(s.a)(e).alertComponent;
            return r.a.createElement(S.b, t, r.a.createElement(N, {
                data: e.page
            }))
        }
        n.d(t, "init", function() {
            return P
        });
        var P = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root";
            return u(e).then(function(e) {
                return i.a.render(r.a.createElement(C, e), document.getElementById(t))
            })
        }
    },
    255: function(e, t, n) {
        "use strict";
        n.r(t);
        n(29);
        var a = n(39);
        "undefined" === typeof Promise && (n(104).enable(), window.Promise = n(105));
        var r = function(e) {
            "IE" !== a.a.browser ? e() : Promise.all([n.e(21), n.e(1)]).then(n.bind(null, 446)).then(e)
        };
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root";
            r(function() {
                return n(254).init(e, t)
            })
        }
        n.d(t, "init", function() {
            return o
        }), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
        })
    },
    27: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return c
        });
        var a = n(0),
            r = n.n(a),
            o = n(5),
            i = n(4);
        n(119);

        function c(e) {
            return r.a.createElement("div", {
                className: Object(o.a)("row supernova-row", e.classes)
            }, e.children || i.a.Map(e.content))
        }
    },
    28: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return d
        });
        var a = n(0),
            r = n.n(a),
            o = n(26),
            i = n.n(o),
            c = n(5),
            u = n(2),
            s = n(4),
            l = function(e) {
                var t = e.children;
                return r.a.createElement(i.a, {
                    scroll: !0,
                    once: !0,
                    height: 300
                }, t)
            };

        function d(e) {
            var t = e.lazyLoad,
                n = void 0 === t || t,
                o = Object(u.a)(e).background,
                i = {
                    backgroundImage: o ? "url(".concat(o, ")") : "",
                    backgroundSize: o ? "cover" : ""
                },
                d = n ? l : a.Fragment;
            return r.a.createElement(d, null, r.a.createElement("section", {
                id: e.id,
                style: i,
                className: Object(c.a)("section-component", e.classes)
            }, r.a.createElement("div", {
                className: "content"
            }, e.children || s.a.Map(e.content))))
        }
    },
    29: function(e, t, n) {
        "use strict"
    },
    39: function(e, t, n) {
        "use strict";
        var a = "windows",
            r = "windows_au_undetected",
            o = "windows_au_none",
            i = "windows_au",
            c = "windows_xp",
            u = "windows_vista",
            s = "windows_7",
            l = "windows_8",
            d = "mac",
            f = "mac_os_x_10_9_lower",
            m = "mac_os_x_10_10_higher",
            p = "linux",
            v = "linux_debian",
            b = "linux_rpm",
            g = "android",
            O = "ios",
            E = "blackberry",
            h = "mobile",
            j = "desktop",
            y = "iphone",
            w = "ipad",
            k = "ipod",
            x = "chrome",
            T = "safari";

        function N() {
            var e = navigator.userAgent,
                t = "",
                n = "";
            if (-1 !== e.indexOf("Android")) t = g;
            else if (e.match(/blackberry/i)) t = E;
            else if (-1 !== e.indexOf("iPad") || -1 !== e.indexOf("iPhone") || -1 !== e.indexOf("iPod")) t = O, n = function(e) {
                var t = "";
                return e.match(/iphone/i) ? t = y : e.match(/ipad/i) ? t = w : e.match(/ipod/i) && (t = k), t
            }(e);
            else if (-1 !== e.indexOf("Windows Phone")) t = a, n = "Windows Phone";
            else if (-1 !== e.indexOf("Linux") || -1 !== e.indexOf("X11")) t = p, n = function(e) {
                return -1 !== e.indexOf("Debian") || -1 !== e.indexOf("Ubuntu") ? v : b
            }(e);
            else if (-1 !== e.indexOf("Mac OS") || -1 !== e.indexOf("Macintosh")) t = d, n = function(e) {
                return e.match(/(Mac OS X 10[_|\.][0-9]([_|\.]|\D))/) ? f : e.match(/(Mac OS X 10[_|\.]10)/) ? m : void 0
            }(e);
            else if (-1 !== e.indexOf("Windows NT 5.0") || -1 !== e.indexOf("Windows 2000")) t = a, n = "Windows 2000";
            else if (-1 !== e.indexOf("Windows NT 4.0") || -1 !== e.indexOf("WinNT4.0") || -1 !== e.indexOf("WinNT")) t = a, n = "Windows NT 4.0";
            else if (-1 !== e.indexOf("Windows NT 5.1") || -1 !== e.indexOf("Windows XP")) t = a, n = c;
            else if (-1 !== e.indexOf("Windows ME")) t = a, n = "Windows ME";
            else if (-1 !== e.indexOf("Windows NT 5.2")) t = a, n = "Windows Server 2003";
            else if (-1 !== e.indexOf("Windows NT 6.0")) t = a, n = u;
            else if (-1 !== e.indexOf("Windows NT 6.1")) t = a, n = s;
            else if (-1 !== e.indexOf("Windows NT 6.2") || -1 !== e.indexOf("WOW64")) t = a, n = l;
            else if (-1 !== e.indexOf("Windows 10.0") || -1 !== e.indexOf("Windows NT 10.0")) {
                t = a, n = function(e, t) {
                    if (t === x) {
                        var n = document.createElement("canvas").getContext("2d");
                        n.font = "64px Segoe UI Emoji", n.measureText("\ud83d\udc31\u200d\ud83d\udc64").width, n.measureText("\ud83d\udc68\u200d\u2695").width;
                        var a = n.measureText("\ud83e\udddb\ud83c\udffb").width;
                        return -1 === e.indexOf("Windows NT") ? r : a <= 90 ? i : o
                    }
                    if ("Edge" === t) {
                        var c = new RegExp("edge/([0-9]+)", "gi").exec(e);
                        return null === c || 2 !== c.length ? r : parseInt(c[1], 10) >= 17.17 ? i : o
                    }
                    return r
                }(e, S())
            } else -1 === e.indexOf("Googlebot") && -1 === e.indexOf("MSNBot") || (t = "Search bot");
            return {
                os: t,
                osVersion: n
            }
        }

        function S() {
            var e = navigator.userAgent,
                t = "";
            return -1 !== e.indexOf("Chrome") && -1 === e.indexOf("Edge") && -1 === e.indexOf("OPR") && -1 === e.indexOf("Opera") ? t = x : -1 !== e.indexOf("Firefox") ? t = "Firefox" : -1 !== e.indexOf("Safari") && -1 === e.indexOf("Chrome") ? t = T : -1 !== e.indexOf("OPR") || -1 !== e.indexOf("Opera") ? t = "Opera" : -1 !== e.indexOf("Edge") ? t = "Edge" : (document.DOCUMENT_NODE || -1 !== e.indexOf("MSIE")) && (t = "IE"), t
        }
        t.a = {
            browser: S(),
            device: function() {
                var e = N().os;
                return e === a || e === d || e === p ? j : h
            }(),
            os: N()
        }
    },
    4: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return g
        });
        var a = n(6),
            r = n(0),
            o = n.n(r),
            i = n(39),
            c = {},
            u = {},
            s = function(e) {
                return o.a.createElement("p", null, "\ud83d\udc31\u200d\ud83d\udc64 ", o.a.createElement("strong", null, e.type || "Undefined Component Type"), " is not available in Supernova")
            },
            l = function() {
                return o.a.createElement("div", {
                    className: "shared-component-fallback"
                })
            },
            d = function(e) {
                var t = u[e];
                return t ? Object(r.lazy)(function() {
                    return n(116)("./".concat(t, ".component"))
                }) : null
            };
        var f = Object(a.a)({}, i.a);

        function m(e) {
            return !!e && e.length > 0
        }

        function p(e, t) {
            return !!e && -1 !== t.indexOf(e)
        }

        function v(e) {
            return e ? (e.osBrowser = Object(a.a)({}, f), !m(t = e.visibility) || -1 !== t.indexOf("all") || function(e, t) {
                return m(t) && (p(e.browser, t) || p(e.device, t) || p(e.os.os, t) || p(e.os.osVersion, t))
            }(f, e.visibility) ? function(e) {
                var t = c[e.type] || d(e.type) || s;
                return o.a.createElement(r.Suspense, {
                    fallback: o.a.createElement(l, null)
                }, o.a.createElement(t, e))
            }(e) : null) : null;
            var t
        }
        var b = function(e) {
            return v(e.component)
        };

        function g(e, t) {
            c = e, u = t
        }
        b.Map = function(e) {
            return e && Array.isArray(e) && e.map(function(e, t) {
                return o.a.createElement(b, {
                    key: t,
                    component: e
                })
            }) || null
        }, t.a = b
    },
    43: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var a = n(1),
            r = n(44),
            o = n(45),
            i = function(e) {
                return Object(o.a)(e).filter(function(e) {
                    return "pstn" === e.service
                })
            };

        function c() {
            var e = Object(r.a)(),
                t = Object(a.a)(e, 2),
                n = t[0],
                o = t[1];
            return [i(n), o]
        }
    },
    44: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n(0),
            o = (n(29), n(64));
        t.a = function() {
            var e = Object(r.useState)([]),
                t = Object(a.a)(e, 2),
                n = t[0],
                i = t[1],
                c = Object(r.useState)(!0),
                u = Object(a.a)(c, 2),
                s = u[0],
                l = u[1];
            return Object(o.a)(function() {
                var e = sessionStorage.getItem("userServices");
                return [!!e, [e]]
            }, function(e) {
                try {
                    i(JSON.parse(e))
                } catch (t) {
                    i([])
                }
                l(!1)
            }), [n, s]
        }
    },
    45: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = function(e) {
            return !e || e.length < 0 ? [] : e
        }
    },
    46: function(e, t, n) {
        "use strict";
        var a = n(3),
            r = n.n(a);
        t.a = function() {
            return r()(document, ["documentElement", "lang"], "en")
        }
    },
    49: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return u
        });
        var a = n(0),
            r = n.n(a),
            o = n(26),
            i = n.n(o),
            c = n(5);
        n(131);

        function u(e) {
            var t = e.alt,
                n = e.height,
                a = void 0 === n ? 200 : n,
                o = t ? void 0 : "presentation";
            return r.a.createElement("div", {
                className: Object(c.a)("image-component", e.classes, e.imageType)
            }, "background" === e.imageType && r.a.createElement("span", {
                className: "image",
                style: {
                    backgroundImage: "url(".concat(e.url, ")")
                }
            }), "background" !== e.imageType && r.a.createElement(i.a, {
                height: a,
                once: !0
            }, r.a.createElement("img", {
                src: e.url,
                alt: t,
                role: o
            })))
        }
    },
    5: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = function(e) {
                return "object" === typeof e
            },
            r = function(e) {
                for (var t = [], n = Object.keys(e), a = 0; a < n.length; a++) {
                    var r = n[a];
                    e[r] && t.push(r)
                }
                return t.join(" ")
            };

        function o() {
            for (var e = [], t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            for (var i = n, c = 0; c < i.length; c++) {
                var u = i[c];
                if (a(u)) {
                    var s = r(u);
                    e.push(s)
                } else null !== u && void 0 !== u && e.push(u)
            }
            return e.join(" ")
        }
    },
    57: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return u
        });
        var a = n(0),
            r = n.n(a),
            o = n(8),
            i = n(4),
            c = n(9);
        n(129);

        function u(e) {
            return r.a.createElement("div", {
                className: "supernova-text-content"
            }, r.a.createElement(o.default, {
                icon: e.icon,
                classes: "icon-content"
            }), r.a.createElement(c.default, {
                classes: "supernova-text-content-title fontSizeH3",
                properties: {
                    size: "h3"
                },
                value: e.title
            }), r.a.createElement("div", {
                className: "supernova-text-content-txt"
            }, i.a.Map(e.content)))
        }
    },
    59: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return T
        });
        var a = n(47),
            r = n.n(a),
            o = n(3),
            i = n.n(o),
            c = n(32),
            u = n.n(c),
            s = n(13),
            l = n.n(s),
            d = n(0),
            f = n.n(d),
            m = n(15),
            p = n(2),
            v = n(97),
            b = n(20),
            g = n(7),
            O = n(8),
            E = n(4),
            h = (n(244), {
                classes: "user-badge-icon edit",
                icon: "\ue40d",
                link: "",
                properties: {},
                title: "",
                type: "Icon"
            }),
            j = {
                alt: "",
                classes: "user-badge-profile-image round",
                imageType: "background",
                type: "Image",
                url: ""
            },
            y = {
                classes: "user-badge-full-name fontSizeH2",
                noDecode: !0,
                properties: {
                    size: "p"
                },
                type: "Text",
                value: ""
            },
            w = {
                classes: "user-badge-email",
                properties: {},
                type: "Text",
                value: ""
            },
            k = {
                classes: "user-badge-change-password lock",
                icon: "\ue609",
                iconPosition: "left",
                type: "TextIcon",
                value: "",
                withLink: !1
            },
            x = function() {
                return f.a.createElement("div", {
                    className: "user-badge-avatar round placeholder"
                }, f.a.createElement(O.default, {
                    icon: "\ue200",
                    ariaHidden: !0
                }))
            };

        function T(e) {
            var t = Object(v.a)(),
                n = t.user,
                a = t.signinName,
                o = Object(p.a)(e),
                c = o.editProfileUrl,
                s = o.editProfileText,
                d = o.changePasswordUrl,
                O = o.changePasswordText,
                T = o.editProfileTracking,
                N = o.changePasswordTracking;
            return h.link = c, h.title = s, h.properties.tracking = T, j.url = i()(n, "avatarUrl"), y.value = function(e, t) {
                var n = r()(i()(e, "firstname"), ""),
                    a = r()(i()(e, "lastname"), ""),
                    o = r()(i()(e, "username"), "");
                return "" === n && "" === a ? l()(t) || "" === t ? o : "".concat(t) : "".concat(n, " ").concat(a).trim()
            }(n, a), w.value = u()(i()(n, "emails")) || "", k.value = d ? f.a.createElement("a", Object.assign({
                href: d
            }, Object(b.a)(N)), Object(m.a)(O)) : null, f.a.createElement("div", {
                className: "user-badge-component supernova-border-radius no-left-top theme-dark"
            }, f.a.createElement(E.a, {
                component: h
            }), n.avatarUrl ? f.a.createElement(E.a, {
                component: j
            }) : f.a.createElement(x, null), f.a.createElement(E.a, {
                component: y
            }), f.a.createElement(E.a, {
                component: w
            }), f.a.createElement(g.default, {
                classes: "user-badge-edit-button noDesktop noLargeDesktop",
                properties: {
                    buttonType: "secondary",
                    link: c,
                    tracking: T
                },
                value: s
            }), f.a.createElement(E.a, {
                component: k
            }))
        }
    },
    60: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return c
        });
        var a = n(0),
            r = n.n(a),
            o = n(5),
            i = n(4);

        function c(e) {
            return r.a.createElement("div", {
                className: Object(o.a)("wrapper-component", e.classes),
                style: e.style
            }, e.children ? e.children : i.a.Map(e.content))
        }
    },
    61: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(6),
            r = n(1),
            o = n(3),
            i = n.n(o),
            c = n(0),
            u = n.n(c),
            s = n(46),
            l = n(2),
            d = n(84),
            f = n(18),
            m = n(7),
            p = n(43),
            v = n(9),
            b = n(17),
            g = n(19),
            O = n(16),
            E = {
                icon: "",
                iconPosition: "left",
                withLink: !1
            };
        var h = function(e) {
            var t = e.width,
                n = function(e) {
                    return e < 30 ? "progress-red" : e < 75 ? "progress-yellow" : "progress-green"
                }(t);
            return u.a.createElement("div", {
                className: "supernova-subscription-progress-bar"
            }, u.a.createElement("div", {
                style: {
                    width: "".concat(t, "%")
                },
                className: "supernova-subscription-progress ".concat(n)
            }))
        };

        function j(e) {
            var t = Object(l.a)(e),
                n = t.minsLeftTexts,
                r = t.unlimitedText,
                o = t.manage,
                i = t.upgrade,
                c = e.item,
                s = c.unlimited,
                d = c.left,
                f = c.minutes,
                p = c.icon,
                b = c.name,
                j = c.manageUrl,
                y = c.upgradeEnabled,
                w = c.upgradeUrl,
                k = s ? 100 : Number(d / f * 100),
                x = s ? r : "".concat(n.replace("{MINUTES}", "".concat(d)));
            return u.a.createElement("li", null, u.a.createElement("div", {
                className: "subscription-item"
            }, u.a.createElement(v.default, {
                classes: "fontSizeH2 subscription-item-time-left",
                properties: {
                    size: "p"
                },
                value: x
            }), u.a.createElement("div", {
                className: "subscription-row"
            }, u.a.createElement(g.default, {
                width: 70,
                classes: "marginTop1 no-padding-left"
            }, u.a.createElement(h, {
                width: k
            }), u.a.createElement("div", {
                className: "subscription-footnote"
            }, u.a.createElement(O.default, Object.assign({}, E, {
                icon: p || "\ue505",
                value: b,
                classes: "supernova-bubble-note marginTop1 marginBottom1"
            })))), u.a.createElement(g.default, {
                width: 15
            }, u.a.createElement(m.default, {
                value: o.value,
                properties: {
                    buttonType: "outline",
                    link: j,
                    size: "small",
                    tracking: Object(a.a)({}, o.tracking, {
                        slot: "".concat(e.slot)
                    })
                }
            })), y && u.a.createElement(g.default, {
                width: 15
            }, u.a.createElement(m.default, {
                value: i.value,
                properties: {
                    buttonType: "primary",
                    link: w,
                    size: "small",
                    tracking: Object(a.a)({}, i.tracking, {
                        slot: "".concat(e.slot)
                    })
                }
            })))))
        }
        var y = n(44),
            w = n(45),
            k = ["plan", "package", "minute_plan"],
            x = function(e) {
                return e && -1 !== k.indexOf(e.service)
            },
            T = function(e) {
                return Object(w.a)(e).filter(x)
            };
        var N = n(32),
            S = n.n(N),
            C = n(13),
            P = n.n(C),
            I = n(100),
            M = n.n(I),
            _ = n(58),
            B = n.n(_),
            D = n(12),
            z = function(e) {
                return e && "package" === e.service
            },
            W = function(e) {
                return e && e.services
            },
            U = function(e) {
                return e && !e.minutes
            },
            L = function(e, t, n) {
                return function(e, t) {
                    return !P()(e.minutes) && !P()(e.left) && e.minutes * t >= e.left
                }(e, n) && !t.some(function(t) {
                    return e.id === t
                })
            };
        var A = function(e, t, n, a) {
                var r = function(e) {
                        return e.map(B()(["tracking", "upgradeRef"])).filter(function(e) {
                            return e
                        })
                    }(e),
                    o = Object(D.a)(["settings", "commerce", "subscriptionsUpgradeThreshold"]),
                    c = i()(S()(t), ["attributes", "currency"]);
                return M()(e.map(function(e) {
                    return function(e, t, n, a, r, o) {
                        var c = {
                            ends: e.end,
                            id: e.id,
                            manageUrl: Object(f.a)(r, e.id.split(".").slice(1).join(".")),
                            name: i()(e, ["data", "nameFormatted"])
                        };
                        if (z(e) && (e.balance || 0 === e.balance)) c.minutes = e.quota, c.left = e.balance;
                        else if (W(e)) {
                            var u = e.services.filter(z).reduce(function(e, t) {
                                    var n = parseInt("".concat(t.quota), 10),
                                        a = parseInt("".concat(t.balance), 10);
                                    return isNaN(n) || isNaN(a) || (e.totalMinutes = (e.totalMinutes || 0) + n, e.availableMinutes = (e.availableMinutes || 0) + a), e
                                }, {
                                    totalMinutes: void 0,
                                    availableMinutes: void 0
                                }),
                                s = u.totalMinutes,
                                l = u.availableMinutes;
                            c.minutes = s, c.left = l
                        }
                        return c.unlimited = U(c), c.upgradeEnabled = L(c, t || [], n || .1), c.upgradeEnabled && a && (c.upgradeUrl = Object(f.a)(o || "", a, encodeURIComponent(i()(e, ["data", "href"], "")))), c
                    }(e, r, o, c, n, a)
                }), ["upgradeEnabled"], ["desc"])
            },
            F = (n(242), {
                classes: "supernova-link",
                properties: {
                    buttonType: "link",
                    size: "small"
                }
            });

        function R(e) {
            var t = Object(d.a)(e.subscriptions.map(function(e) {
                    return Object(a.a)({}, e)
                }), 1),
                n = Object(r.a)(t, 3),
                o = n[0],
                i = n[1],
                c = n[2],
                p = Object(l.a)(e),
                b = p.title,
                g = p.more,
                O = void 0 === g ? {} : g,
                E = p.discover,
                h = void 0 === E ? {} : E;
            return F.value = i > 0 ? "".concat(O.valueMore, " (").concat(i, ")") : O.valueLess, F.onClick = c, F.properties.tracking = O.tracking, u.a.createElement("div", {
                className: "supernova-bubble subscriptions-component"
            }, u.a.createElement("div", null, u.a.createElement(v.default, b), u.a.createElement("ul", {
                className: "subscriptions-list"
            }, o.map(function(t, n) {
                return u.a.createElement(j, Object.assign({
                    key: n,
                    slot: n,
                    item: t
                }, e))
            })), e.subscriptions.length > 1 && u.a.createElement("div", {
                className: "supernova-divider"
            }, u.a.createElement(m.default, F))), h && u.a.createElement(m.default, {
                classes: "marginTop2",
                value: h.value,
                properties: {
                    buttonType: "primary",
                    link: Object(f.a)(h.discoverUrl, Object(s.a)()),
                    size: "default",
                    tracking: h.tracking
                }
            }))
        }
        R.defaultProps = {
            subscriptions: []
        };
        t.default = function(e) {
            var t = function() {
                    var e = Object(y.a)(),
                        t = Object(r.a)(e, 2),
                        n = t[0],
                        a = t[1];
                    return [T(n), a]
                }(),
                n = Object(r.a)(t, 2),
                a = n[0],
                o = n[1],
                c = Object(p.a)(),
                s = Object(r.a)(c, 2),
                d = s[0],
                f = s[1],
                m = Object(l.a)(e),
                v = m.manage,
                g = m.upgrade,
                O = A(a, d, i()(v, "manageUrl"), i()(g, "upgradeUrl"));
            return u.a.createElement(b.default, {
                isDataLoading: o || f,
                fallback: R,
                passed: O && O.length > 0,
                defaultContent: e.defaultContent,
                afterConditionContent: u.a.createElement(R, Object.assign({}, e, {
                    subscriptions: O
                }))
            })
        }
    },
    62: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(6),
            r = n(1),
            o = n(99),
            i = n(3),
            c = n.n(i),
            u = n(13),
            s = n.n(u),
            l = n(0),
            d = n.n(l),
            f = n(2),
            m = n(12),
            p = n(7),
            v = n(27),
            b = n(8),
            g = n(9),
            O = n(17),
            E = n(43),
            h = n(75),
            j = n.n(h);
        var y = function(e, t) {
                var n = Object(l.useState)(),
                    a = Object(r.a)(n, 2),
                    o = a[0],
                    i = a[1];
                return Object(l.useEffect)(function() {
                    var n;
                    e && (n = t, j.a.get(Object(m.a)(["settings", "api", "contracts"]), {
                        headers: {
                            Accept: "application/json; ver=1.0",
                            "X-Skypetoken": n
                        }
                    }).then(function(e) {
                        return e.data
                    }).catch(function() {
                        return {}
                    })).then(function(e) {
                        i("ACTIVE" === e.status)
                    })
                }, [e]), [o, i]
            },
            w = n(46),
            k = n(18),
            x = (n(181), function(e) {
                var t = e.credits,
                    n = Object(f.a)(e),
                    i = n.autoRechargeButtonTracking,
                    u = n.autoRechargeText,
                    l = n.buttonBuyCreditText,
                    O = n.buttonSendCreditText,
                    E = n.buttonSendCreditTracking,
                    h = n.buttonBuyCreditTracking,
                    j = n.balanceTracking,
                    x = n.rechargeText,
                    T = n.rechargeTooltip,
                    N = n.title,
                    S = n.underRechargeText,
                    C = JSON.parse(sessionStorage.getItem("skypeToken") || "{}"),
                    P = y(t.length > 0, C),
                    I = Object(r.a)(P, 1)[0],
                    M = c()(t, "0", {
                        balanceFormatted: "",
                        currency: ""
                    }),
                    _ = {
                        link: Object(k.a)(Object(m.a)(["settings", "api", "buyCredit"]), Object(w.a)(), c()(M, ["currency"]))
                    },
                    B = {
                        classes: "skype-credits-auto-recharge-button",
                        properties: {
                            buttonType: "link",
                            link: Object(m.a)(["settings", "api", "autoRechargeUrl"]),
                            title: c()(u, I ? "disabled" : "enabled"),
                            tracking: i
                        }
                    };
                return d.a.createElement("div", {
                    className: "supernova-skype-credits-component supernova-bubble"
                }, d.a.createElement("div", null, d.a.createElement(g.default, {
                    classes: "fontSizeH3 m-bottom-25",
                    properties: {
                        size: "h3"
                    },
                    value: N
                }), d.a.createElement(p.default, {
                    classes: "supernova-skype-credits-balance",
                    properties: Object(a.a)({
                        buttonType: "link",
                        tracking: j
                    }, _)
                }, d.a.createElement("p", {
                    className: "fontSizeH1 supernova-text-blue"
                }, M.balanceFormatted)), d.a.createElement("div", {
                    className: "skype-credits-recharge"
                }, d.a.createElement("div", null, d.a.createElement(g.default, {
                    classes: "strong",
                    properties: {
                        size: "span"
                    },
                    value: x
                }), d.a.createElement(b.default, {
                    icon: "\ue602",
                    title: T
                })), !s()(I) && d.a.createElement(p.default, B, d.a.createElement(o.Switch, {
                    isOn: I,
                    disabled: !0
                }))), d.a.createElement("div", {
                    className: "supernova-divider"
                }, d.a.createElement(g.default, {
                    classes: "disclaimer",
                    properties: {
                        size: "span"
                    },
                    value: S
                }))), d.a.createElement(v.default, {
                    classes: "supernova-credit-buttons"
                }, d.a.createElement(p.default, {
                    classes: "marginTop3 marginRight3",
                    value: l,
                    properties: Object(a.a)({
                        buttonType: "primary",
                        size: "small",
                        tracking: h
                    }, _)
                }), d.a.createElement(p.default, {
                    classes: "marginTop3",
                    value: O,
                    properties: {
                        buttonType: "link",
                        link: Object(m.a)(["settings", "api", "sendCredit"]),
                        size: "small",
                        tracking: E
                    }
                })))
            });
        x.defaultProps = {
            credits: []
        };
        var T = function(e) {
            return {
                balanceFormatted: e.balanceFormatted,
                currency: c()(e, ["attributes", "currency"])
            }
        };
        t.default = function(e) {
            var t = Object(E.a)(),
                n = Object(r.a)(t, 2),
                a = n[0],
                o = n[1],
                i = a.map(T);
            return d.a.createElement(O.default, {
                isDataLoading: o,
                fallback: x,
                passed: i && i.length > 0,
                defaultContent: e.defaultContent,
                afterConditionContent: d.a.createElement(x, Object.assign({}, e, {
                    credits: i
                }))
            })
        }
    },
    64: function(e, t, n) {
        "use strict";
        var a = n(12),
            r = n(63),
            o = n(0),
            i = 500;
        var c = function(e, t) {
            Object(o.useEffect)(function() {
                var n = e(),
                    a = Object(r.a)(n),
                    o = a[0],
                    c = a.slice(1);
                if (!o) {
                    var u = setInterval(function() {
                        var n = e(),
                            a = Object(r.a)(n),
                            o = a[0],
                            i = a.slice(1);
                        o && (t.apply(null, i), clearInterval(u))
                    }, i);
                    return function() {
                        clearInterval(u)
                    }
                }
                t.apply(null, c)
            }, [])
        };
        t.a = function(e, t, n) {
            var r = function(e, t) {
                var n = -i,
                    r = t || Object(a.a)(["settings", "api", "standByFor"]) || 1e3;
                return function() {
                    return (n += i) >= r ? [!0, void 0] : e()
                }
            }(e, n);
            c(r, t)
        }
    },
    66: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a);
        n(163);
        t.a = function(e) {
            if (e) return r.a.createElement("div", {
                className: "supernova-dynamic-placeholder"
            }, r.a.createElement(e))
        }
    },
    7: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return v
        });
        var a = n(31),
            r = n(6),
            o = n(0),
            i = n.n(o),
            c = n(15),
            u = n(5),
            s = n(2),
            l = n(20),
            d = n(8),
            f = (n(114), function(e) {
                var t, n = Object(s.a)(e),
                    o = n.title,
                    i = n.link,
                    c = n.tracking,
                    d = n.buttonType,
                    f = n.size,
                    m = Object(r.a)({}, Object(l.a)(c), {
                        className: Object(u.a)((t = d, "primary" === t ? "btn primaryCta" : "secondary" === t ? "btn secondaryCta" : "outline" === t ? "btn outlinedCta" : "link" === t ? "linkCta" : "alert" === t ? "btn alertCta" : void 0), Object(a.a)({}, "btn-".concat(f), f)),
                        title: o,
                        type: "button"
                    });
                return i ? Object(r.a)({}, m, {
                    href: i,
                    role: "button"
                }) : Object(r.a)({}, m, {
                    onClick: e.onClick
                })
            });

        function m(e) {
            var t = e.icon,
                n = e.value,
                a = Object(s.a)(e).link,
                r = e.children || i.a.createElement(o.Fragment, null, Object(c.a)(n), t && i.a.createElement(d.default, {
                    icon: t
                }));
            return i.a.createElement(a ? "a" : "button", f(e), r)
        }

        function p(e) {
            var t = e.value,
                n = e.icon,
                a = e.classes,
                r = e.onClick,
                o = Object(s.a)(e).link;
            return i.a.createElement("button", {
                className: Object(u.a)(a),
                type: "button"
            }, o ? i.a.createElement("span", null, i.a.createElement("a", {
                href: o
            }, t), i.a.createElement("span", {
                onClick: r
            }, n && i.a.createElement(d.default, {
                icon: n
            }))) : i.a.createElement("span", null, t, n && i.a.createElement("span", {
                onClick: r
            }, i.a.createElement(d.default, {
                icon: n
            }))))
        }

        function v(e) {
            var t = e.classes,
                n = Object(s.a)(e).buttonType;
            return i.a.createElement("div", {
                className: Object(u.a)("button-component", t)
            }, "dropdown" === n ? i.a.createElement(p, e) : i.a.createElement(m, e))
        }
    },
    8: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return s
        });
        var a = n(0),
            r = n.n(a),
            o = n(15),
            i = n(5),
            c = n(2),
            u = n(20);
        n(112);

        function s(e) {
            var t = e.ariaHidden,
                n = e.title,
                a = Object(c.a)(e),
                s = a.size,
                l = a.label,
                d = a.labelPosition,
                f = a.tracking,
                m = {
                    fontSize: s,
                    lineHeight: 2
                },
                p = Object(o.a)(n);
            return r.a.createElement("div", {
                className: Object(i.a)("icon-component", e.classes, d)
            }, l && ("left" === d || "top" === d) && r.a.createElement("span", null, l), e.link && r.a.createElement("a", Object.assign({
                href: e.link,
                style: m,
                "aria-label": p,
                title: p
            }, Object(u.a)(f)), e.icon), !e.link && r.a.createElement("span", {
                "aria-hidden": t || !!l,
                "aria-label": p,
                title: p,
                style: m
            }, e.icon), l && ("right" === d || "bottom" === d || !d) && r.a.createElement("span", null, l))
        }
        s.defaultProps = {
            ariaHidden: !1
        }
    },
    84: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n(1),
            r = n(0);

        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = Object(r.useState)(e.slice(0, t)),
                o = Object(a.a)(n, 2),
                i = o[0],
                c = o[1],
                u = Object(r.useState)(t),
                s = Object(a.a)(u, 2),
                l = s[0],
                d = s[1];
            return [i, e.length - i.length, function(n, a) {
                var r = n.next;
                if (l === e.length) c(e.slice(0, t)), d(t);
                else if (r) {
                    var o = l + r;
                    c(e.slice(0, o)), d(o)
                } else d(e.length), c(e);
                a && "function" === typeof a && a()
            }]
        }
    },
    9: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return u
        });
        var a = n(6),
            r = n(0),
            o = n.n(r),
            i = n(15),
            c = n(2);

        function u(e) {
            return o.a.createElement(r.Fragment, null, function(e) {
                var t = e.value,
                    n = e.classes,
                    r = e.noDecode,
                    u = Object(c.a)(e),
                    s = u.withLink,
                    l = u.size,
                    d = {
                        className: n
                    };
                return s ? o.a.createElement(l || "p", Object(a.a)({}, d, {
                    dangerouslySetInnerHTML: {
                        __html: Object(i.a)(t)
                    }
                })) : o.a.createElement(l || "p", d, r ? t : Object(i.a)(t))
            }(e))
        }
    },
    96: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p
        }), n.d(t, "b", function() {
            return b
        });
        var a = n(6),
            r = n(1),
            o = n(101),
            i = n.n(o),
            c = n(0),
            u = n.n(c),
            s = n(5),
            l = n(7),
            d = n(28),
            f = n(8),
            m = n(16),
            p = (n(250), u.a.createContext({}));
        p.Consumer;

        function v(e) {
            var t = e.message,
                n = e.action,
                a = e.actionName,
                o = e.close,
                p = e.closeBtnAria,
                v = e.closeBtnTracking,
                b = Object(c.useState)(window.scrollY > 70),
                g = Object(r.a)(b, 2),
                O = g[0],
                E = g[1];
            return Object(c.useEffect)(function() {
                var e = i()(function() {
                    return E(window.scrollY > 70)
                }, 100);
                return window.addEventListener("scroll", e, {
                        passive: !0
                    }),
                    function() {
                        return window.removeEventListener("scroll", e)
                    }
            }, [O]), u.a.createElement(d.default, {
                lazyLoad: !1,
                classes: Object(s.a)("alert-message-component", {
                    sticky: O
                })
            }, u.a.createElement("div", {
                className: "alert-message-wrapper"
            }, u.a.createElement(m.default, {
                icon: "\ue602",
                iconPosition: "left",
                value: t
            }), u.a.createElement("div", {
                className: "alert-message-actions"
            }, n && u.a.createElement(l.default, {
                onClick: n,
                properties: {
                    size: "small",
                    buttonType: "alert"
                },
                value: a
            }), u.a.createElement(l.default, {
                properties: {
                    buttonType: "link",
                    title: p,
                    tracking: v
                },
                onClick: o
            }, u.a.createElement(f.default, {
                icon: "\ue711"
            })))))
        }

        function b(e) {
            var t = Object(c.useState)({
                    message: "",
                    type: "alert",
                    visible: !1
                }),
                n = Object(r.a)(t, 2),
                o = n[0],
                i = n[1],
                s = function() {
                    return i(Object(a.a)({}, o, {
                        visible: !1
                    }))
                },
                l = {
                    close: s,
                    open: function(e) {
                        var t = e.message,
                            n = e.action,
                            r = e.actionName;
                        return i(Object(a.a)({}, o, {
                            visible: !0,
                            message: t,
                            action: n,
                            actionName: r
                        }))
                    }
                };
            return u.a.createElement(p.Provider, {
                value: l
            }, o.visible && u.a.createElement(v, Object.assign({}, o, e, {
                close: s
            })), e.children)
        }
    },
    97: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n(0);
        n(29);
        n.d(t, "a", function() {
            return c
        });
        var o = "DEFAULT_AVATAR";
        var i = {
            avatarUrl: "",
            emails: [],
            firstname: "",
            lastname: "",
            username: ""
        };

        function c() {
            var e = Object(r.useState)(i),
                t = Object(a.a)(e, 2),
                n = t[0],
                c = t[1],
                u = Object(r.useState)(null),
                s = Object(a.a)(u, 2),
                l = s[0],
                d = s[1],
                f = Object(r.useState)(null),
                m = Object(a.a)(f, 2),
                p = m[0],
                v = m[1];
            return Object(r.useEffect)(function() {
                c(function() {
                    try {
                        var e = sessionStorage.getItem("profile");
                        if (e) {
                            var t = JSON.parse(e),
                                n = t.avatarUrl;
                            return t.avatarUrl = n === o ? null : n, t
                        }
                        return i
                    } catch (a) {
                        return i
                    }
                }()), d(function() {
                    try {
                        var e = sessionStorage.getItem("skypeToken");
                        return e ? JSON.parse(e) : null
                    } catch (t) {
                        return null
                    }
                }()), v(function() {
                    try {
                        var e = sessionStorage.getItem("signinName");
                        return e ? JSON.parse(e) : null
                    } catch (t) {
                        return null
                    }
                }())
            }, []), {
                user: n,
                token: l,
                signinName: p
            }
        }
    }
});
//# sourceMappingURL=app.bundle.js.map