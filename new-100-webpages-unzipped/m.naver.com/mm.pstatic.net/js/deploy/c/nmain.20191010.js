! function(e) {
    function t(t) {
        for (var a, r, c = t[0], s = t[1], d = t[2], u = 0, _ = []; u < c.length; u++) r = c[u], o[r] && _.push(o[r][0]), o[r] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        for (l && l(t); _.length;) _.shift()();
        return i.push.apply(i, d || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== o[s] && (a = !1)
            }
            a && (i.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }
    var a = {},
        o = {
            0: 0
        },
        i = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = a, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) r.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "";
    var c = window.webpackJsonp = window.webpackJsonp || [],
        s = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var d = 0; d < c.length; d++) t(c[d]);
    var l = s;
    i.push(["YsFzcyw2", 1]), n()
}({
    "+wBTMN/I": function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = n("oOU8Ku/P"),
                i = n("adHGn4eU"),
                r = window.nmain.gv,
                c = r.menuMeta,
                s = "MM_h",
                d = "MM_m",
                l = "MM_sti",
                u = "MM_contents",
                _ = "MM_commerce",
                f = ";",
                p = M(),
                h = v();

            function m(e) {
                var t = T(e);
                return e ? Object.keys(t) : Object.keys(t).reduce(function(e, n) {
                    return e.concat(Object.keys(t[n]))
                }, [])
            }

            function M(e, n) {
                if (e = !1 !== e || e, void 0 !== p && e) return p.slice();
                if (r.isApp || r.isInApp) {
                    var s = i.getAppPanelList(e);
                    if (s) return s.CONTENTS || []
                }
                var d = t.trim(a.get(u));
                r.isApp && !d && (d = o.get("MSDT.panel"));
                var l = d ? d.split(f) : [];
                return (l = l.filter(function(e) {
                    var t = c.CONTENTS[e];
                    return t && (!!n || "Y" === t.serviceYn)
                })).length > 0 ? l : g("contents")
            }

            function v(e, n) {
                if (e = !1 !== e || e, void 0 !== h && e) return h.slice();
                if (r.isApp || r.isInApp) {
                    var o = i.getAppPanelList(e);
                    if (o) return o.COMMERCE || []
                }
                var s = t.trim(a.get(_)),
                    d = s ? s.split(f) : [];
                return (d = d.filter(function(e) {
                    var t = c.COMMERCE[e];
                    return t && (!!n || "Y" === t.serviceYn)
                })).length > 0 ? d : g("commerce")
            }

            function g(e) {
                var t = T(e);
                return Object.keys(t).filter(function(e) {
                    var n = t[e];
                    return n.default && "Y" === n.serviceYn
                }).sort(function(e, n) {
                    return t[e].defaultOrder - t[n].defaultOrder
                })
            }

            function T(e) {
                var t = [];
                switch (e) {
                    case "commerce":
                    case "contents":
                    case "home":
                        t = c[e.toUpperCase()];
                        break;
                    default:
                        t = c
                }
                return t
            }
            var E = function() {
                var e = {},
                    n = T();
                return function(a) {
                    return e[a] || Object.keys(n).some(function(o) {
                        return !!n[o][a] && (e[a] = t.extend({
                            menuCode: a,
                            homeCode: o
                        }, n[o][a]), !0)
                    }), e[a]
                }
            }();

            function C(e, t) {
                if (e && t) {
                    var n;
                    switch (e) {
                        case "commerce":
                            n = _;
                            break;
                        case "contents":
                            n = u
                    }
                    if (n) return a.set(n, t.join(f), {
                        expires: 3650,
                        path: "/"
                    }), O(), t
                }
            }

            function O() {
                if (r.isApp || r.isInApp) {
                    var e = i.getAppPanelList(!1);
                    if (e) return h = e.COMMERCE, void(p = e.CONTENTS)
                }
                h = v(!1), p = M(!1)
            }
            e.exports = {
                getMyContentsCodeList: function(e) {
                    return M(!0, e)
                },
                getMyCommerceCodeList: function(e) {
                    return v(!0, e)
                },
                getTotalCodeList: m,
                getTotalMeta: T,
                getMeta: E,
                isSubscribed: function(e) {
                    return -1 !== M().concat(v()).concat(["SEARCH"]).indexOf(e)
                },
                didSetup: function() {
                    return !!a.get(u)
                },
                changeMyList: C,
                subscribe: function(e) {
                    setTimeout(function() {
                        location.href = "/naverapp/?version=1&cmd=onMenu&menuCode=" + e
                    }, 100)
                },
                unsubscribeWeb: function(e) {
                    var t, n = E(e);
                    "COMMERCE" === n.homeCode ? t = v() : "CONTENTS" === n.homeCode && (t = M()), t && t.length > 0 && C(n.homeCode.toLowerCase(), t.filter(function(t) {
                        return t !== e
                    }))
                },
                isValid: function(e, t) {
                    if (t) {
                        var n = c[t];
                        return !!n && !!n[e]
                    }
                    return m().indexOf(e) > -1
                },
                changeActive: function(e) {
                    var t, n, o, i = E(e);
                    i && (t = i.homeCode, n = i.menuCode, o = i.lcsCode, "HOME" === t || "SEARCH" === n ? (a.remove(s), a.remove(d), a.remove(l, {
                        domain: "naver.com"
                    })) : (a.set(s, t, {
                        expires: 1 / 24 / 60 * 15,
                        path: "/"
                    }), a.set(d, n, {
                        expires: 1 / 24 / 60 * 15,
                        path: "/"
                    }), a.set(l, o, {
                        expires: 1 / 24 / 60 * 15,
                        path: "/",
                        domain: "naver.com"
                    })))
                },
                updatePanelCodeCache: O,
                getDefaultCodeList: g
            }
        }).call(this, n("QFBpxR1d"))
    },
    "/HgzRUyC": function(e, t) {
        String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
            return t = t || 0, this.substr(t, e.length) === e
        }), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
            var n = this.toString();
            ("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length;
            var a = n.indexOf(e, t);
            return -1 !== a && a === t
        }), Array.prototype.uniq = Array.prototype.uniq || function() {
            return this.reduce(function(e, t) {
                return -1 === e.indexOf(t) && e.push(t), e
            }, [])
        }, Object.defineProperty(Array.prototype, "uniq", {
            enumerable: !1
        }), Array.prototype.shuffle = Array.prototype.shuffle || function() {
            for (var e, t, n = this.slice(), a = n.length; a > 0;) e = Math.floor(Math.random() * a--), t = n[a], n[a] = n[e], n[e] = t;
            return n
        }, Object.defineProperty(Array.prototype, "shuffle", {
            enumerable: !1
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e, t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var n = Object(this),
                    a = n.length >>> 0;
                if (0 === a) return !1;
                var o = 0 | t,
                    i = Math.max(o >= 0 ? o : a - Math.abs(o), 0);

                function r(e, t) {
                    return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                }
                for (; i < a;) {
                    if (r(n[i], e)) return !0;
                    i++
                }
                return !1
            }
        }), Array.prototype.find = Array.prototype.find || function(e) {
            if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof e) throw new TypeError("callback must be a function");
            for (var t = Object(this), n = t.length >>> 0, a = arguments[1], o = 0; o < n; o++) {
                var i = t[o];
                if (e.call(a, i, o, t)) return i
            }
        };
        var n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        String.prototype.escapeHtml = String.prototype.escapeHtml || function() {
            return this.replace(/[&<>"'`=\/]/g, function(e) {
                return n[e]
            })
        }, String.prototype.unescapeHtml = String.prototype.unescapeHtml || function() {
            return this.replace(/(&(amp|lt|gt|quot|#39|#x2F|#x60|#x3D);)/g, function(e) {
                var t = "";
                return Object.keys(n).some(function(a) {
                    if (e == n[a]) return t = a, !0
                }), t
            })
        };
        var a = /-?[0-9]+(\.[0-9]+)?/;
        Number.prototype.toCommaFormat = Number.prototype.toCommaFormat || function() {
            var e = this.toString().match(a)[0].split("."),
                t = parseInt(e[0], 10).toString();
            return t = t.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"), 1 === e.length ? t : t + "." + e[1]
        }, Number.prototype.toKorean = Number.prototype.toKorean || function() {
            for (var e = ["", "만", "억", "조"], t = "", n = this.toString().match(a)[0].split("."), o = parseInt(n[0], 10) + "", i = 0; i < 4; i++) {
                var r = 3 === i ? 0 : o.length - 4 * (i + 1),
                    c = o.length - 4 * i,
                    s = o.substring(r, c);
                s && !/^0+$/.test(s) && (s = parseInt(s).toCommaFormat() + e[i], t = t ? s + " " + t : s)
            }
            return 1 === n.length || /^0+/.test(n[1]) ? t : t + "." + n[1]
        }
    },
    "/uehhxD5": function(e, t, n) {
        (function(e) {
            e.fn.loadGifImage = function() {
                return this.each(function(t, n) {
                    ! function(t) {
                        (t.is("img[data-gif-src]") ? t : t.find("img[data-gif-src]")).each(function(t, n) {
                            var a = e(n),
                                o = a.attr("data-gif-src"),
                                i = new Image;
                            i.onload = function() {
                                a.attr("src", o), i = null
                            }, i.onerror = function() {
                                i = null
                            }, i.src = o
                        })
                    }(e(n))
                })
            }
        }).call(this, n("QFBpxR1d"))
    },
    "0XrWN3w/": function(e, t, n) {
        (function(t) {
            var a, o, i, r, c = n("IPQ71O+c"),
                s = "uss_btn_on",
                d = "MM_PAGE_NAV";

            function l() {
                window.inapphome && window.inapphome.openSlideMenu ? inapphome.openSlideMenu() : location.href = "/aside/"
            }

            function u(e) {
                e.preventDefault()
            }

            function _() {
                o.find("." + s).removeClass(s), o.find("." + d).eq(r.getIndex()).addClass(s)
            }
            e.exports = {
                init: function(e) {
                    0 != (a = e.find("#_MM_TODAY_SVC")).length && (! function() {
                        o = a.find(".uss_page");
                        var e = (i = a.find(".today-service-flick-container")).find(".uss_l"),
                            n = e.filter(function(e, n) {
                                return t(n).children().length < 5
                            }),
                            l = '<li class="uss_item"><a href="#" class="uss_a MM_ADD_MORE_SERVICE" data-clk="servicegoset"><div class="uss_service"><span class="blind">전체 서비스</span></div><div class="uss_t" style="visibility: hidden;">전체 서비스</div></a></li>';
                        n.length > 0 ? n.append(l) : i.append('<div class="today-service-flick-panel"><ul class="uss_l">' + l + "</ul></div>"), e.each(function(e) {
                            o.append('<a href="#" class="uss_btn_page ' + d + " " + (0 == e ? s : "") + '" data-index=' + e + '><span class="blind">' + (e + 1) + "페이지</span></a>")
                        }), e.show(), r = new c(i.get(0), {
                            duration: 250,
                            adaptiveHeight: !0,
                            bounce: [250, 250]
                        })
                    }(), a.on("click", ".MM_ADD_MORE_SERVICE", l), a.on("click", "." + d, function(e) {
                        e.preventDefault()
                    }), a.on("click", "._MM_TODAY_SVC_APP", u), i.on("touchstart", function() {
                        i.trigger("innerTouchStart")
                    }).on("touchend", function() {
                        i.trigger("innerTouchEnd")
                    }), r.on("flickEnd", _))
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "10ztHDB4": function(e, t, n) {
        (function(e) {
            function t(t) {
                t.preventDefault(), t.stopPropagation();
                var n = e(t.currentTarget),
                    a = n.attr("data-toggle-index");
                n.closest("._MM_TOGGLE_WRAP").find("[data-toggle-layer=" + a + "]").toggle(), n.trigger("mnclk", [n])
            }

            function n(t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    a = n.attr("data-toggle-class-index"),
                    o = n.attr("data-toggle-class-name");
                n.closest("._MM_TOGGLE_WRAP").find("[data-toggle-class=" + a + "]").toggleClass(o)
            }

            function a(t) {
                t.preventDefault();
                var n = e(t.target),
                    a = n.closest("._MM_TOGGLE_WRAP"),
                    o = n.attr("data-toggle-attr-target"),
                    i = o ? a.find('[data-toggle-attr-id="' + o + '"]') : n,
                    r = i.attr("data-toggle-attr");
                i.attr(r, !("true" == i.attr(r)))
            }
            e.fn.toggleLayer = function() {
                return this.each(function(n, a) {
                    e(a).off(".togglelayer").on("click.togglelayer", "[data-toggle-index]", t)
                })
            }, e.fn.toggleClassName = function() {
                return this.each(function(t, a) {
                    e(a).off(".toggleClass").on("click.toggleClass", "[data-toggle-class-index]", n)
                })
            }, e.fn.toggleAttribute = function() {
                return this.each(function(t, n) {
                    e(n).off("click.toggleAttribute").on("click.toggleAttribute", "[data-toggle-attr], [data-toggle-attr-target]", a)
                })
            }
        }).call(this, n("QFBpxR1d"))
    },
    "1Fnl7I+q": function(e, t) {
        var n = !0;

        function a(e, t, a) {
            if (n) {
                var o = new Image;
                o.src = function(e, t, n) {
                    var a = ("https:" == window.location.protocol ? "https" : "http") + "://" + e + "/" + (t || "");
                    if (a += "?SOU&", n)
                        for (var o in n) a += o + "=" + encodeURIComponent(n[o]) + "&";
                    return a += "ts=" + (new Date).getTime(), a += "&EOU"
                }(e, t, a), o.onload = function() {
                    o.onload = null
                }
            }
        }

        function o(e, t) {
            a(window.logsrv || "l.m.naver.com", e, t)
        }

        function i(e, t) {
            a(window.logsrvme || "l.me.naver.com", e, t)
        }
        e.exports = {
            sendRaw: a,
            send: o,
            sendToMe: i,
            click: function(e) {
                e && e.act ? o("c", e) : console.error("Empty param.act")
            },
            go: function(e) {
                e && e.act ? o("g", e) : console.error("Empty param.act")
            },
            lcs: function(e) {
                e && e.act ? (o("l", e), "MSDT.lcs" == e.act && e.sti.indexOf("myfeed") > -1 && i("l", e)) : console.error("Empty param.act")
            },
            mnclk: function(e) {
                var t = {
                        act: "click",
                        n: window.nsc,
                        t: function(e) {
                            if (!e) return "";
                            var t = e.textContent;
                            return t ? t.replace(/\s/g, "") : ""
                        }(e.elem),
                        u: function(e) {
                            return e && e.href || ""
                        }(e.elem),
                        a: e.nclickCode,
                        c: e.gdid,
                        r: e.index,
                        menu: e.menu
                    },
                    n = function(e) {
                        if (e && e.getAttribute) {
                            var t = e.getAttribute("data-extra");
                            if (t) {
                                t = t.replace(/'/g, '"');
                                try {
                                    return JSON.parse(t)
                                } catch (e) {
                                    console.error(e)
                                }
                            }
                        }
                    }(e.elem);
                if (n)
                    for (var a in n) t[a] = n[a];
                window.event && (t.x = window.event.pageX, t.y = window.event.pageY), o("c", t)
            }
        }
    },
    "1ka/hqZS": function(e, t, n) {
        (function(t) {
            var a, o = n("baMwVjn2");

            function i() {
                a = a || setTimeout(r, 4e3)
            }

            function r() {
                a = null;
                var e = o.getCurInfo().$element.find(".MM_KEYWORD_LIST:visible");
                if (0 != e.length) {
                    var t = e.find(".MM_KEYWORD").slice(0, e.hasClass("fold") ? 5 : 10),
                        n = t.filter(".csr_rolling_on, .csr_tab_on"),
                        r = t.eq((t.index(n) + 1) % t.length);
                    n.removeClass("csr_open csr_rolling_on csr_tab_on").addClass("csr_rolling_off"), r.removeClass("csr_rolling_off").addClass("csr_open csr_rolling_on csr_tab_on"), r.find("img.ondemand").removeClass("ondemand").loadImage(), i()
                }
            }

            function c(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    o = n.closest(".MM_KEYWORD_LIST").find(".MM_KEYWORD.csr_rolling_on, .MM_KEYWORD.csr_tab_on"),
                    i = n.closest(".MM_KEYWORD");
                a && (clearTimeout(a), a = null), o.removeClass("csr_open csr_rolling_on csr_tab_on csr_rolling_off").addClass("csr_tab_off"), i.is(o) || i.removeClass("csr_rolling_off csr_tab_off").addClass("csr_open csr_tab_on"), i.find("img.ondemand").removeClass("ondemand").loadImage()
            }

            function s(e) {
                e.preventDefault(), t(e.currentTarget).closest(".MM_KEYWORD_LIST").toggleClass("fold")
            }
            e.exports = {
                init: function(e) {
                    0 != e.$element.find(".MM_COMMON_TRENDCHART").length && (e.$element.data("panel-inited-trend") || o.getCurInfo().$element.on("click", ".MM_KEYWORD_ITEM_TOGGLE", c).on("click", ".MM_KEYWORD_LIST_TOGGLE", s), e.$element.data("panel-inited-trend", !0), i())
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "24BoVec2": function(e, t, n) {
        (function(t, a) {
            var o, i, r, c, s = n("iA6YTUf0"),
                d = n("baMwVjn2"),
                l = n("ieoLjlAQ"),
                u = n("+wBTMN/I"),
                _ = n("T/3/M4c2"),
                f = n("zAloRAYX"),
                p = n("HtyHKtC0"),
                h = window.innerWidth,
                m = "",
                M = "",
                v = t(window),
                g = function() {
                    var e = Number.NaN,
                        t = !1,
                        n = function() {
                            !t && v.scrollTop() > e ? (t = !0, c.className = "header header_fixed header_fixed_in") : t && v.scrollTop() < e && (t = !1, c.className = "header header_fixed header_fixed_out")
                        };
                    return {
                        enable: function() {
                            e = _.getFakeSearchBoxTop(), v.on("scroll", n)
                        },
                        disable: function() {
                            t = !1, v.off("scroll", n)
                        },
                        isOverThreshold: function() {
                            return t
                        }
                    }
                }();

            function T(e) {
                var t = "translateY(" + e + "%)";
                r.css({
                    "-webkit-transform": t,
                    transform: t
                }), 0 == e ? r.attr("aria-hidden", "false") : -100 == e && r.attr("aria-hidden", "true")
            }
            var E = {
                onPanelMoving: function(e) {
                    c.className = "header";
                    var t, n = e.subFlickingCode || e.code,
                        a = Math.abs(e.distance);
                    "SEARCH" == n ? (g.isOverThreshold() ? t = 0 : (a <= 20 ? t = -100 : (t = a - 20, t = Math.round(100 * t / i) - 100), e.distance > 0 ? l.onContentsFirst() : l.onCommerceFirst()), T(t)) : (n == m && e.distance < 0 || n == M && e.distance > 0) && (a <= 20 ? t = 0 : (t = a - 20, t = -1 * Math.round(100 * t / i)), T(t))
                },
                onPanelMoveEnd: function(e) {
                    if ("SEARCH" != e.code) return g.disable(), c.className = "header", void T(0);
                    c.setAttribute("style", ""), "panelRestore" == e.type && g.isOverThreshold() ? c.className = "header header_fixed header_fixed_in" : c.className = "header header_fixed header_fixed_out"
                },
                onPanelChanged: function(e) {
                    "SEARCH" == e.code && g.enable(), l.resize()
                },
                onclickBackBtn: function(e) {
                    e.preventDefault(), o.blur(), E.oncloseAutoComplete()
                },
                oncloseAutoComplete: function() {
                    t("#query").blur().val(""), t("#clear_input").hide(), t("body").removeClass("sch_focus"), t("#MM_HEADER").css("position", ""), t(d).trigger("enableResize"), t("#mflick").trigger(t.Event("resize", {
                        detail: {
                            isImmediate: !0
                        }
                    })), window.scrollTo(0, 0), "SEARCH" == d.getCurCode() ? (g.enable(), c.className = "header", c.setAttribute("style", "")) : g.disable()
                },
                onclickNBtn: function(e) {
                    e.preventDefault(), window.scrollTo(0, 0), setTimeout(function() {
                        d.moveTo("SEARCH")
                    }, 100)
                },
                onclickSearchLink: function(e) {
                    var n = t(e.currentTarget);
                    C(t(e.currentTarget).attr("data-sclk"), t(e.currentTarget)), n.is("a[href!='#']") && (e.preventDefault(), setTimeout(function() {
                        location.href = n.attr("href")
                    }, 250))
                },
                onresizeWindow: function() {
                    h != window.innerWidth && (h = window.innerWidth, i = r.width() - 20, l.updatePanelPosition())
                }
            };

            function C(e, t) {
                var n = d.getCurCode(),
                    o = d.getCurInfo().getNclickCode();
                a(t || {}, "SEARCH" == n ? o + "." + e : e + "." + o, "", "")
            }
            e.exports = {
                init: function() {
                    if (c = document.getElementById("MM_HEADER")) {
                        var e;
                        r = t(c), i = r.width() - 20;
                        var n = u.getMyContentsCodeList(),
                            a = u.getMyCommerceCodeList();
                        m = n[0], e = u.getMeta(m), m = e.childMenuFlicking ? e.childMenus[0] : m, M = a[0], e = u.getMeta(M), M = e.childMenuFlicking ? e.childMenus[0] : M, l.init({
                            isHeaderVisibleInSearch: g.isOverThreshold
                        }), t(d).on("panelMoving", E.onPanelMoving).on("panelShow", E.onPanelMoveEnd).on("panelRestore", E.onPanelMoveEnd).on("panelChanged", E.onPanelChanged), t(window).on("resize", E.onresizeWindow), "SEARCH" == d.getCurCode() && g.enable(), f.isSupported() || (r.find(".sch_w").addClass("region_triple"), r.find(".sch_inpw_in").append(p.getBtnHtml())), r.find(".MM_SEARCH_SUBMIT").css("opacity", ""), o = new s({
                            APIURL: "https://mac.search.naver.com/mobile/ac",
                            isLogin: !0,
                            focus: !1
                        }), t("#MM_SEARCH_BACK").on("click", E.onclickBackBtn), t("#MM_SEARCH_GO_HOME").on("click", E.onclickNBtn), o.on({
                            historyUse: function() {
                                C("sxton")
                            },
                            historyUnuse: function() {
                                C("sxtoff")
                            },
                            historyClose: function() {
                                C("sxtclose"), E.oncloseAutoComplete()
                            },
                            remove: function() {
                                C("sxtx")
                            },
                            removeAll: function() {
                                C("sxtdel")
                            },
                            extendKeyword: function() {
                                C("sugplus")
                            },
                            moveURL: function() {
                                C("suggo")
                            },
                            clear: function() {
                                C("searchclose")
                            },
                            useContext: function() {
                                C("sugcxon")
                            },
                            unuseContext: function() {
                                C("sugcxoff")
                            },
                            quick: function() {
                                C("sugansdirect")
                            },
                            autocompleteUse: function() {
                                C("sugon")
                            },
                            autocompleteUnuse: function() {
                                C("sugoff")
                            },
                            autocompleteClose: function(e) {
                                C(e.usage ? "sugonc" : "sugoffc"), E.oncloseAutoComplete()
                            },
                            focus: function() {
                                T(0), g.disable(), C("searchbox"), t("#sch").addClass("sch_focus"), t("body").addClass("sch_focus"), t("#MM_HEADER").css("position", "initial"), t(d).trigger("disableResize"), window.scrollTo(0, 0)
                            },
                            submit: function(e) {
                                C("search", e.el)
                            }
                        }), r.on("click", "[data-sclk]", E.onclickSearchLink)
                    }
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    "2lxEanc7": function(e, t, n) {
        var a = n("frQ1Xk3Y"),
            o = n("HxNnFbGk");

        function i(e, t, n) {
            var i = [],
                r = {};
            if (!window.localStorage) return n ? r : i;
            var c = "MSDT." + t;
            try {
                var s, d = localStorage.getItem(c);
                if (!d) return i;
                s = JSON.parse(d);
                for (var l = new Date(svt.substr(0, 4), svt.substr(4, 2) - 1, svt.substr(6, 2)), u = 0; u < e; u++) {
                    var _ = new o(l),
                        f = _.toString("yyyyMM"),
                        p = _.toString("dd");
                    if (l.setDate(l.getDate() - 1), s[f] && s[f][p]) {
                        if (n) {
                            var h = s[f][p];
                            for (var m in h) {
                                var M = h[m];
                                r[m] = r[m] ? r[m] + M : M
                            }
                        }
                        i = i.concat(Object.keys(s[f][p]))
                    }
                }
            } catch (e) {
                a("[LogHistory] get : " + e);
                try {
                    "string" == typeof e.message && -1 !== e.message.indexOf("JSON") && localStorage.removeItem(c)
                } catch (e) {}
            }
            return n ? r : i.uniq()
        }
        e.exports = {
            add: function(e, t) {
                if (window.localStorage) {
                    var n = "",
                        o = "MSDT." + t;
                    try {
                        var i = svt.substr(0, 6),
                            r = svt.substr(6, 2),
                            c = {},
                            s = localStorage.getItem(o);
                        "string" == typeof(n = s) && (n = n.substr(0, 64)), s && (c = JSON.parse(s));
                        var d = 0;
                        c[i] || (c[i] = {}), c[i][r] || (c[i][r] = {}), c[i][r][e] ? d = c[i][r][e] : c[i][r][e] = 0, c[i][r][e] = d + 1, localStorage.setItem(o, JSON.stringify(c))
                    } catch (e) {
                        e.code && e.QUOTA_EXCEEDED_ERR && e.code == e.QUOTA_EXCEEDED_ERR || a("[LogHistory] add : " + e + " / tmp = " + n);
                        try {
                            "string" == typeof e.message && -1 !== e.message.indexOf("JSON") && localStorage.removeItem(o)
                        } catch (e) {}
                    }
                }
            },
            get: i,
            getUnused: function(e, t, n) {
                if (!n) return [];
                var r = new Date(svt.substr(0, 4), svt.substr(4, 2) - 1, svt.substr(6, 2)),
                    c = n.split(";"),
                    s = [],
                    d = function(e) {
                        try {
                            var t = svt.substr(0, 8),
                                n = "MSDT." + e,
                                a = localStorage.getItem(n);
                            if (a) {
                                var o = JSON.parse(a),
                                    i = Object.keys(o).sort()[0];
                                o[i] && (t = i + Object.keys(o[i]).sort()[0])
                            }
                            return t
                        } catch (e) {}
                    }(t);
                if (!d) return [];
                if (d > new o(r.setDate(r.getDate() - e)).toString("yyyyMMdd")) return [];
                for (var l = i(e, t), u = [], _ = 0; _ < s.length; _++) u.push(s[_].code);
                var f = function(e) {
                    var t = [];
                    if (!window.localStorage) return t;
                    try {
                        var n = localStorage.getItem("MSDT.lastOn") || "{}",
                            i = JSON.parse(n),
                            r = new o;
                        Object.keys(i).forEach(function(n) {
                            var a = i[n],
                                c = new o(a.substr(0, 4), a.substr(4, 2) - 1, a.substr(6, 2));
                            c.diffDays(r) < e && t.push(n)
                        })
                    } catch (e) {
                        a("[HistoryLog] getRecentlyOnMenu : " + e);
                        try {
                            "string" == typeof e.message && -1 !== e.message.indexOf("JSON") && localStorage.removeItem("MSDT.lastOn")
                        } catch (e) {}
                    }
                    return t
                }(e);
                return c.filter(function(e) {
                    return !(l.indexOf(e) >= 0 || u.indexOf(e) >= 0 || f.indexOf(e) >= 0)
                })
            }
        }
    },
    "2y0RiEkK": function(e, t, n) {
        (function(e) {
            var t;

            function a(n) {
                var a = e(n.currentTarget),
                    o = Number(a.attr("data-tab-index"));
                e.ajax({
                    timeout: 5e3,
                    url: "/include/grid/living/recipe_" + o + ".shtml",
                    method: "GET"
                }).done(function(e) {
                    t.find("._MM_LIVING_RECIPE_TAB_BUTTON").removeClass("on").attr("aria-checked", "false").filter("[data-tab-index=" + o + "]").addClass("on").attr("aria-checked", "true"), t.find("#_MM_LIVING_RECIPE_CONTENTS").html(e).parent().hscroll().get(0).scrollTo(0)
                })
            }
            n("ozsbSvXK").setInitFn({
                code: "LIVING",
                initFn: function(e) {
                    (t = e.$element).on("click", "._MM_LIVING_RECIPE_TAB_BUTTON", a)
                }
            })
        }).call(this, n("QFBpxR1d"))
    },
    "3ahMUZKY": function(e, t, n) {
        (function(t, a) {
            var o = n("baMwVjn2"),
                i = n("E6d+oP6K"),
                r = !1,
                c = !1,
                s = "https://main.like.naver.com",
                d = "/static/js/reaction/dist/reaction.min.js?" + svt.substr(0, 8);

            function l() {
                c = !0, reaction.init({
                    type: "basic",
                    domain: s,
                    cssId: "NAVERMAIN",
                    isHiddenLabel: !0,
                    callback: {
                        click: function(e) {
                            var n = o.getCurInfo();
                            if ("TODAY" === n.code) {
                                var a = "songzzimunno",
                                    r = !0;
                                return e.isAdding ? (r = i.checkLikeLimit()) && i.refreshLikeCount(!0) : (a = "songzzimunyes", i.refreshLikeCount(!1)), t(this, n.getNclickCode() + "." + a, "", ""), r
                            }
                            return !0
                        },
                        clicked: function(e) {
                            var n = o.getCurInfo(),
                                a = "like";
                            "MYFEED" === n.code ? a = e.content.isReacted ? "like" : "unlike" : "TODAY" === n.code && (a = "songzzim"), t(this, n.getNclickCode() + "." + a, "", "")
                        }
                    }
                })
            }
            e.exports = {
                check: function(e) {
                    "MYFEED" !== e && "TODAY" !== e || (c ? "MYFEED" === e && reaction.instance.update() : r ? l() : a.ajax({
                        url: s + d,
                        dataType: "script",
                        cache: !0,
                        success: function() {
                            r = !0, l()
                        }
                    }))
                }
            }
        }).call(this, n("C4iEnhWn"), n("QFBpxR1d"))
    },
    "4CvozYHE": function(e, t, n) {
        (function(t) {
            var a = n("baMwVjn2");

            function o(e) {
                e.preventDefault();
                var n = t(e.target).closest(".MM_PANEL_SURVEY");
                n.find(".MM_GUIDE").hide(), n.find(".MM_FORM").show()
            }

            function i(e) {
                e.preventDefault();
                var n = t(e.target),
                    o = n.closest(".MM_FORM").find(".MM_FORM_INPUT").val().trim();
                o ? function(e) {
                    var n = {
                        comment: encodeURIComponent(e),
                        panel: a.getCurInfo().subCode
                    };
                    return t.ajax({
                        url: "/nvhaproxy/airs/proposal",
                        data: n,
                        timeout: 3e3,
                        dataType: "json"
                    })
                }(o).done(function(e) {
                    if (e && "success" == e.result) {
                        var t = n.closest(".MM_PANEL_SURVEY");
                        t.find(".MM_FORM").hide(), t.find(".MM_RESULT").show()
                    } else nerror("[survey] error response = " + JSON.stringify(e))
                }).fail(function(e) {
                    nerror("[survey] error send = " + (e.status > 0 ? e.status : e.statusText)), t.popup.t12({
                        msg: "메세지 전송중 오류가 발생했습니다.<br/>다시 시도해 주세요."
                    })
                }) : t.popup.t12({
                    msg: "입력하신 내용이 없습니다.<br/>다시 시도해 주세요."
                })
            }

            function r(e) {
                e.preventDefault();
                var n = t(e.target).closest(".MM_PANEL_SURVEY");
                n.find(".MM_GUIDE").show(), n.find(".MM_FORM").hide()
            }
            e.exports = {
                init: function(e) {
                    t("#ct").on("click", ".MM_PANEL_SURVEY .MM_SHOW_FORM", o).on("click", ".MM_PANEL_SURVEY .MM_FORM_SUBMIT", i).on("click", ".MM_PANEL_SURVEY .MM_FORM_CLOSE", r)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "4G6dRG8c": function(e, t, n) {
        (function(t) {
            var a = n("frQ1Xk3Y"),
                o = n("K0zMvcnj");
            e.exports = {
                update: function() {
                    t.ajax("/nvweather_mmap?path=include/grid/disaster&fname=DISASTER_SEARCH", {
                        timeout: 3e3,
                        dataType: "html"
                    }).done(function(e) {
                        e.search(/ERROR/) < 0 && (e.search(/NONE/) < 0 ? o.run() : t("._MM_DISASTER_BANNER").length && o.run())
                    }).fail(function(e) {
                        a("[nmain.disaster] update ajax error. " + e.statusText)
                    })
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "4gsfEReV": function(e, t, n) {
        (function(t) {
            var a, o, i, r, c, s, d, l, u, _, f, p, h, m = n("IPQ71O+c"),
                M = n("jShiu/8B"),
                v = '{{# items }}<li class="rtk_l" {{^ isDisplay }}style="display:none;"{{/ isDisplay }}><a href="https://m.search.naver.com/search.naver?where=m&sm=mtp_lve&query={{ query }}" class="rtk_a" data-clk="kwd"><em class="rtk_n">{{ rank }}</em> <span class="rtk_t">{{ keyword }}</span></a></li>{{/ items }}',
                g = '<ol class="unr_list_wrap">{{# items }}<li class="unr_list_item unr_da_add" tabindex="0"><a href="https://m.search.naver.com/search.naver?where=m&sm=mtp_lve&query={{ query }}" class="unr_item_link" data-clk="kwd"><span class="unr_item_ranking_wrap"><i class="unr_item_ranking">{{ rank }}<span class="blind">위</span></i></span><em class="unr_item_tit">{{ keyword }}</em></a><a href="http://m.datalab.naver.com/realtimeDetail.naver?query={{ query }}&where=main&datetime={{ datetime }}" class="unr_da" data-clk="kwdhistory"><span class="blind">데이터랩 그래프 보기</span></a></li>{{/ items }}</ol>',
                T = '<ol class="unr_list_wrap">{{# items }}<li class="unr_list_item" tabindex="0"><a href="https://m.search.naver.com/search.naver?where=m&sm=mtp_htp.nws&query={{ query }}" class="unr_item_link" data-clk="khkw{{ clkSection }}"><span class="unr_item_ranking_wrap"><i class="unr_item_ranking">{{ rank }}<span class="blind">위</span></i></span><em class="unr_item_tit">{{ keyword }}</em></a></li>{{/ items }}</ol>';

            function E() {
                s.html(M.render(v, {
                    items: a.d.map(function(e, t) {
                        return {
                            isDisplay: 0 == t,
                            rank: t + 1,
                            keyword: e.k,
                            query: e.q
                        }
                    })
                })), s.addClass("_ROLLING"), r.rolling(), _.html(M.render(g, C(0, 5)) + M.render(g, C(5, 10))), f.html(M.render(g, C(10, 15)) + M.render(g, C(15, 20))), p.html(M.render(T, O(0, 5)) + M.render(T, O(5, 10))), h.html(M.render(T, O(10, 15)) + M.render(T, O(15, 20))), i = new m(d.find(".rtk-flick-container").get(0), {
                    duration: 250,
                    adaptiveHeight: !0,
                    bounce: [150, 150]
                }), u.eq(0).addClass("sprh_pgnon")
            }

            function C(e, t) {
                return {
                    items: a.d.slice(e, t).map(function(t, n) {
                        return {
                            rank: n + e + 1,
                            keyword: t.k,
                            query: t.q
                        }
                    })
                }
            }

            function O(e, t) {
                return {
                    items: o.d.slice(e, t).map(function(t, n) {
                        return {
                            rank: n + e + 1,
                            keyword: t.k,
                            query: t.q,
                            clkSection: e < 10 ? "news" : "entspo"
                        }
                    })
                }
            }

            function N(e) {
                r.hide(), c.show(), i.resize(), e.preventDefault()
            }

            function A(e) {
                r.show(), c.hide(), e.preventDefault()
            }

            function R(e) {
                i.moveTo(0), e.preventDefault()
            }

            function I(e) {
                i.moveTo(2), e.preventDefault()
            }

            function S(e) {
                i.moveTo(l.index(e.currentTarget)), e.preventDefault()
            }

            function w(e) {
                l.removeClass("unr_btn_ktab_selected").attr("aria-selected", "false").eq(e.no).addClass("unr_btn_ktab_selected").attr("aria-selected", "true"), u.removeClass("sprh_pgnon").eq(e.no).addClass("sprh_pgnon"), e.no < 2 ? (c.find("#_MM_rtk_tabs").show(), c.find("#_MM_rtk_help").hide(), c.find("#_MM_rtk_panel0").addClass("unr_menu_selected"), c.find("#_MM_rtk_panel2").removeClass("unr_menu_selected")) : (c.find("#_MM_rtk_tabs").hide(), c.find("#_MM_rtk_help").show(), c.find("#_MM_rtk_panel0").removeClass("unr_menu_selected"), c.find("#_MM_rtk_panel2").addClass("unr_menu_selected"))
            }
            e.exports = {
                init: function(e) {
                    r = e.find("#_MM_TODAY_RANKING"), c = e.find("#_MM_TODAY_RANKING_EXT"), 0 != r.length && 0 != c.length && (s = e.find("#MM_rtk_rolling_list"), d = e.find("#MM_search_rtk_flick"), l = c.find("._MM_rtk_subTab"), u = c.find("._MM_rtk_indicator .sp_rtk"), _ = c.find("#MM_rtk_list"), f = c.find("#MM_rtk_list2"), p = c.find("#MM_htp_list"), h = c.find("#MM_htp_list2"), M.parse(v), M.parse(g), M.parse(T), t.ajax("/fragment/rtkHotTopic.shtml", {
                        timeout: 3e3
                    }).done(function(e) {
                        var t = JSON.parse(e);
                        a = t.rtk, o = t.hotTopic, E(), r.on("click", "._MM_rtk_toggle", N), c.on("click", "._MM_rtk_toggle", A), c.find("#_MM_rtk_panel0").click(R), c.find("#_MM_rtk_panel2").click(I), l.click(S), i.on("flickEnd", w)
                    }))
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "50F1XvmD": function(e, t, n) {
        (function(e) {
            e.extend({
                orientation: function() {
                    return window.orientation ? window.orientation : e(window).height() < e(window).width() ? 90 : 0
                }
            })
        }).call(this, n("QFBpxR1d"))
    },
    "5mF5OJJW": function(e, t, n) {
        n("frQ1Xk3Y");
        e.exports = {
            init: function() {
                try {
                    window.blacklist && window.blacklist.sendBlackList && window.blacklist.sendBlackList(JSON.stringify({
                        SchemeAbusing: {
                            list: ["com.william.mp3.badamp3", "jowonsoft.android.calendar", "kr.caramel.flash_plus", "com.joysoft.wordBook", "com.nomad.gongsucal", "com.smh.memocalendar", "me.sbook.app.snapcook", "com.army.bts", "com.omega.dic.kr", "com.omega.dic.en", "com.omega.dic.ch", "com.omega.dic.jp", "com.nomad.hourpaycal", "com.nomad.josunso", "com.jp.trainingsong", "com.a7080music.app.best", "com.ambidexter.wordChanger", "com.nomad.jogonghaeven", "com.tenpeople.studyplanner.studyplanner", "me.sbook.app.backrecipe", "com.ambidexters.gbsick", "com.nomad.josunsoalba"],
                            version: 1
                        }
                    }))
                } catch (e) {}
            }
        }
    },
    "68C+Ej/M": function(e, t, n) {
        (function(e, t) {
            var a = n("IPQ71O+c"),
                o = n("baMwVjn2");

            function i(n) {
                if (n.is(":visible") && !n.data("$$_INNER_FLICKING")) {
                    var i = new a(n.get(0), {
                        adaptiveHeight: "true" === n.attr("data-flicking-adaptive-height")
                    });
                    n.data("$$_INNER_FLICKING", i), n.on("touchstart touchmove mousedown", function() {
                        n.trigger("innerTouchStart")
                    }), n.on("touchend mouseup", function() {
                        n.trigger("innerTouchEnd")
                    }), i.on("flickEnd", function(a) {
                        ! function(t, n) {
                            t.attr("data-flicking-page", n.no);
                            var a = t.attr("data-flicking-dot-wrap-id"),
                                o = t.closest(".MM_INNER_FLICKING_CONTAINER"),
                                i = a ? e("#" + a).find("[data-flicking-position-class]") : o.find(".MM_INNER_FLICKING_PAGING"),
                                r = i.attr("data-flicking-position-class");
                            if (0 === i.length) return;
                            if (a) i.attr("aria-selected", "false").removeClass(r), i.eq(n.no).attr("aria-selected", "true").addClass(r);
                            else {
                                var c = i.find(".MM_INNER_FLICKING_PAGING_NAV");
                                c.attr("aria-selected", "false").removeClass(r), c.eq(n.no).attr("aria-selected", "true").addClass(r)
                            }
                        }(n, a),
                        function(e) {
                            var n = e.attr("data-flicking-clk");
                            n && t({}, o.getCurInfo().getNclickCode() + "." + n, "", "")
                        }(n)
                    }), i.moveTo(n.attr("data-flicking-page") || 0, 0)
                }
            }
            e.fn.innerFlickingInit = function() {
                return this.each(function(t, n) {
                    e(n).find(".MM_INNER_FLICKING").each(function(t, n) {
                        i(e(n))
                    })
                })
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    "6lFuCf88": function(e, t, n) {
        (function(t) {
            var a = n("ozsbSvXK"),
                o = n("baMwVjn2"),
                i = n("vvRPcpct");
            n("Uh2+F60L");
            a.setInitFn({
                code: "DISCOVER",
                initFn: f
            });
            var r = null,
                c = [],
                s = {},
                d = {},
                l = null,
                u = !0,
                _ = null;

            function f(e) {
                d[e.code] = Date.now(), s[e.code] = i.get("NNB") + "-" + e.code + "-" + d[e.code], window.nmain.gv.isLogin && (r = new IntersectionObserver(T, {
                    threshold: .9
                }), e.$element.find(".grid1:not(.data-airs-logged)").each(function(e, t) {
                    r.observe(t)
                }), t(window).on("scrollend", E)), e.$element.on("click", ".MM_CARD a[data-gdid]", p), e.$element.on("click", "._MM_MF_SUBMENU_LAYER_BTN", h), e.$element.on("click", "._MM_MF_SUBMENU_OPTION_ITEM", m), e.$element.on("click", "._MM_MF_TABMENU_OPTION", M), e.$element.on("click", ".MM_MENU", v), e.$element.on("click", ".MM_MENU_ITEM", g)
            }

            function p(e) {
                O("click", function(e) {
                    return {
                        timestamp: Date.now(),
                        contents: {
                            internalContentInfo: {
                                meta: {
                                    contentVersion: "20190903",
                                    client_timestamp: Date.now()
                                },
                                body: {
                                    idno: window.nmain.gv.idNo,
                                    bcookie: i.get("NNB"),
                                    session_id: s[o.getCurCode()],
                                    session_starttime: d[o.getCurCode()],
                                    item: e.attr("data-gdid"),
                                    template_code: "",
                                    area_code: e.attr("data-clk"),
                                    page: o.getCurInfo().getPageNum(),
                                    rank: o.getCardOffset(e).index + 1,
                                    service_code: o.getCurCode(),
                                    service_url: location.href,
                                    airs_bypass: ""
                                }
                            }
                        }
                    }
                }(t(e.currentTarget)))
            }

            function h(e) {
                e.preventDefault(), i.remove("MM_MF_TAB_SVC"), location.reload()
            }

            function m(e) {
                e.preventDefault();
                var n = t(e.currentTarget).attr("data-service");
                "ALL" === n ? i.remove("MM_MF_SVC") : i.set("MM_MF_SVC", n, {
                    expires: 3650
                }), i.remove("MM_MF_TAB_SVC"), location.reload()
            }

            function M(e) {
                e.preventDefault(), i.set("MM_MF_TAB_SVC", "DISCOVER", {
                    expires: 3650
                }), location.reload()
            }

            function v(e) {
                _ && _.attr("aria-expanded", !1), _ = t(e.currentTarget)
            }

            function g(e) {
                e.preventDefault();
                var n = t(e.currentTarget);
                switch (n.attr("data-action")) {
                    case "HIDE_CONTENT":
                        ! function(e) {
                            var n = t(e.currentTarget).closest(".MM_CARD");
                            n.has(".cd_title_wrap").length > 0 && (n = n.find(".cd_contents"));
                            n.hide();
                            var a = t.popup.toast({
                                msg: '피드에서 콘텐츠를 숨겼습니다.<br><a class="alt_link MM_UNDO" href="#">실행취소</a>',
                                addClass: "alt_discover"
                            }).on("click", ".MM_UNDO", function(e) {
                                e.preventDefault(), n.show(), a.hide()
                            })
                        }(e);
                        break;
                    case "HIDE_CHANNEL":
                        ! function(e) {
                            var n = t(e.currentTarget).closest(".MM_CARD");
                            n.hide();
                            var a = t.popup.toast({
                                msg: '이 채널의 콘텐츠가 다시 추천되지 않습니다.<br><a class="alt_link MM_UNDO" href="#">실행취소</a>',
                                addClass: "alt_discover"
                            }).on("click", ".MM_UNDO", function(e) {
                                e.preventDefault(), n.show(), a.hide()
                            })
                        }(e)
                }
                n.closest(".MM_CARD").find(".MM_MENU").attr("aria-expanded", !1)
            }

            function T(e) {
                e.forEach(function(e) {
                    if (e.isIntersecting) {
                        var n = t(e.target);
                        n.attr("data-gdid") && (c.push({
                            gdid: n.attr("data-gdid")
                        }), n.attr("data-airs-logged", "true"), r.unobserve(e.target))
                    }
                })
            }

            function E() {
                l && clearTimeout(l), l = setTimeout(C, 300)
            }

            function C() {
                0 !== c.length && (O("exposure", function() {
                    for (var e = [], t = 0; t < c.length; t++) e.push(c[t].gdid);
                    return {
                        timestamp: Date.now(),
                        contents: {
                            internalContentInfo: {
                                meta: {
                                    contentVersion: "20190903",
                                    client_timestamp: Date.now()
                                },
                                body: {
                                    idno: window.nmain.gv.idNo,
                                    bcookie: i.get("NNB"),
                                    session_id: s[o.getCurCode()],
                                    session_starttime: d[o.getCurCode()],
                                    item_list: e.join(","),
                                    template_code: "",
                                    area_code: "",
                                    page: o.getCurInfo().getPageNum(),
                                    event_type: u ? "entered" : "scrolled",
                                    impression_type: "F",
                                    service_code: o.getCurCode(),
                                    service_url: location.href,
                                    airs_bypass: ""
                                }
                            }
                        }
                    }
                }()), u = !1, c = [])
            }

            function O(e, n) {
                var a = "";
                "exposure" === e ? a = "starfeed_naver_rec_exposure" : "click" === e && (a = "starfeed_naver_rec_click"), a ? t.ajax({
                    type: "post",
                    url: "https://apis.naver.com/mobile_main/starfeed_naver_cuway/navermain/korea_real/korea/airs_starfeed/" + a,
                    data: JSON.stringify(n),
                    contentType: "text/plain"
                }) : NError("[DISCOVER][sendLog] invalid type")
            }
            e.exports = {
                init: f
            }
        }).call(this, n("QFBpxR1d"))
    },
    "6whQhhuA": function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = n("e9QBZxT+"),
                i = n("adHGn4eU"),
                r = n("baMwVjn2"),
                c = n("+wBTMN/I"),
                s = n("Uh2+F60L"),
                d = "._MM_FOOTER",
                l = window.nmain.gv;

            function u() {
                var e = o.decreaseFont(),
                    n = o.isSmallest(e);
                t(d).find(".MM_FONT_B").removeAttr("disabled").end().iff(o.isSmallest(e)).find(".MM_FONT_S").attr("disabled", "disabled").end().end().find(".tol_mes").stop(!0, !0).text(n ? "가장 작은 글자 크기입니다." : "글자 크기가 작아졌습니다.").show().animate({
                    opacity: 1
                }, 1e3, function() {
                    t(this).css("opacity", "")
                }).fadeOut(1e3);
                var a = r.getCurInfo();
                t(a.$element).find("._MM_HORIZONTAL_SCROLL").hscroll().each(function(e, t) {
                    t.resize()
                }), t("#mflick").resize(), (l.isApp || l.isInapp) && i.compareBSC({
                    iphone: 430,
                    ipad: 125,
                    android: 370
                }) >= 0 && (location.href = "naverapp://main?newFontSize=" + e)
            }

            function _() {
                var e = o.increaseFont(),
                    n = o.isBiggest(e);
                t(d).find(".MM_FONT_S").removeAttr("disabled").end().iff(n).find(".MM_FONT_B").attr("disabled", "disabled").end().end().find(".tol_mes").stop(!0, !0).text(n ? "가장 큰 글자 크기입니다." : "글자 크기가 커졌습니다.").show().animate({
                    opacity: 1
                }, 1e3, function() {
                    t(this).css("opacity", "")
                }).fadeOut(1e3);
                var a = r.getCurInfo();
                t(a.$element).find("._MM_HORIZONTAL_SCROLL").hscroll().each(function(e, t) {
                    t.resize()
                }), t("#mflick").resize(), (l.isApp || l.isInapp) && i.compareBSC({
                    iphone: 430,
                    ipad: 125,
                    android: 370
                }) >= 0 && (location.href = "naverapp://main?newFontSize=" + e)
            }

            function f(e) {
                e.preventDefault(), i.compareBSC({
                    ipad: 119
                }) ? location.href = "naverapp://main?scrollToTop" : t.fn.scrollTo(0)
            }

            function p(e) {
                e.preventDefault(), l.isLogin ? s.logout() : s.login()
            }

            function h(e) {
                e.preventDefault(), t(this).parent().hasClass("license_open") ? t(this).trigger("fclk", [t(this), "fotshowcompanysprd"]) : t(this).trigger("fclk", [t(this), "fotshowcompanyfold"]), t(this).parent().toggleClass("license_open"), t("#mflick").resize()
            }

            function m() {
                t(d).find(".tool_btn_fs").removeAttr("disabled"), o.isSmallest() ? t(d).find(".MM_FONT_S").attr("disabled", "disabled") : o.isBiggest() && t(d).find(".MM_FONT_B").attr("disabled", "disabled")
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", ".MM_FONT_S", u).on("click", ".MM_FONT_B", _).on("click", ".tool_top", f).on("click", ".MM_LOGINOUT", p).on("click", ".MM_FOOTER_INFO_SHOP", h), m(), window.devicePixelRatio < 3 && screen && screen.height < 600 && "IOS" == window.nmain.gv.osType && a.set("MM_fontPrefix", "s s3", {
                        expires: 180
                    })
                },
                check: function(e) {
                    var n = e.$element.parent().find(".MM_PANEL_EDITOR");
                    (function(e, t) {
                        if (t.hide(), 0 != t.length) {
                            var n = l.panelEditor[e];
                            n && "Y" == n.exposeYN && n.editor && n.lastRevision && n.buttonUrl && (t.find(".MM_PANEL_EDITOR_NAME").html(n.editor), t.find(".MM_PANEL_EDITOR_UPDATE").html(n.lastRevision), t.find(".MM_PANEL_EDITOR_LINK").attr("href", n.buttonUrl), t.show())
                        }
                    })(e.code, n), m(),
                        function() {
                            var e = r.getCurInfo().code,
                                n = c.getMeta(e),
                                a = "https://m.naver.com/naverapp/?cmd=onMenu&version=6&menuCode=" + e;
                            "COMMERCE" === n.homeCode && (a = "https://m.naver.com/naverapp/?cmd=onMenu&version=6&newMain=Y&menuCode=" + e), t(d).find(".tool_share").attr("data-url", a)
                        }(), "NEWS" === e.code && "NEWS_CHANNEL" === r.getCurInfo().subCode && "false" === e.$element.find("._MM_NEWS_SUBTAB[data-subscribed]").attr("data-subscribed") && e.$element.siblings("._MM_FOOTER").addClass("contents_news")
                },
                adjustFontButton: m,
                getActiveFooter: function() {
                    return r.getCurInfo().$element.siblings("._MM_FOOTER")
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "7X7cpXTY": function(e, t, n) {
        (function(t, n) {
            var a, o, i, r, c, s, d, l, u, _, f, p, h = "&version=1.1.14",
                m = "&version=1.2.1",
                M = {
                    ko: {
                        name: "한국어",
                        target: ["en", "ja", "zh-CN", "zh-TW", "es", "fr", "vi", "th", "id"],
                        tools: ["VOICE", "CAMERA"]
                    },
                    en: {
                        name: "영어",
                        target: ["ko", "ja", "zh-CN", "zh-TW", "es", "fr", "vi", "th", "id", "pt", "de", "ru", "pt", "hi"],
                        tools: ["VOICE", "CAMERA"]
                    },
                    ja: {
                        name: "일본어",
                        target: ["ko", "en", "zh-CN", "zh-TW", "es", "fr", "vi", "th", "id"],
                        tools: ["VOICE", "CAMERA"]
                    },
                    "zh-CN": {
                        name: "중국어(간체)",
                        target: ["ko", "en", "ja", "zh-TW", "es", "fr", "vi", "th", "id"],
                        tools: ["VOICE", "CAMERA"]
                    },
                    "zh-TW": {
                        name: "중국어(번체)",
                        target: ["ko", "en", "ja", "zh-CN", "es", "fr", "vi", "th", "id"]
                    },
                    es: {
                        name: "스페인어",
                        target: ["ko", "en", "ja", "zh-CN", "zh-TW", "fr", "vi", "th", "id"],
                        tools: ["VOICE"]
                    },
                    fr: {
                        name: "프랑스어",
                        target: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "vi", "th", "id"],
                        tools: ["VOICE"]
                    },
                    vi: {
                        name: "베트남어",
                        target: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "th", "id"]
                    },
                    th: {
                        name: "태국어",
                        target: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "vi", "id"]
                    },
                    id: {
                        name: "인도네시아어",
                        target: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "vi", "th"]
                    },
                    de: {
                        name: "독일어",
                        target: ["en"]
                    },
                    ru: {
                        name: "러시아어",
                        target: ["en"]
                    },
                    pt: {
                        name: "포르투갈어",
                        target: ["en"]
                    },
                    hi: {
                        name: "힌디어",
                        target: ["en"]
                    }
                };

            function v(e, t, n) {
                return "https://cont-papago.naver.com/universallink?site=" + e + "&sourceLang=" + t + "&targetLang=" + n + ("IOS" == window.nmain.gv.osType ? m : h)
            }
            var g = {
                source: "ko",
                target: "en"
            };

            function T() {
                S(r, g.source), r.toggle(), c.hide()
            }

            function E() {
                S(c, g.target), c.toggle(), r.hide()
            }

            function C() {
                var e = g.source,
                    t = g.target;
                g.source = t, g.target = e, w()
            }

            function O(e) {
                g.source = t(e.target).attr("data-code"), w(), r.hide(), n(e.target, "tod.switch" + g.source.toLowerCase().replace("-", ""), "", "")
            }

            function N(e) {
                g.target = t(e.target).attr("data-code"), w(), c.hide(), n(e.target, "tod.switch" + g.source.toLowerCase().replace("-", ""), "", "")
            }

            function A() {
                "" != d.val().trim() ? (l.show(), u.show()) : (l.hide(), u.hide())
            }

            function R() {
                u.hide(), l.hide(), d.val("").focus()
            }

            function I(e) {
                e.preventDefault(), setTimeout(function() {
                    location.href = "https://papago.naver.com/?" + encodeURIComponent("sk=" + (g.source || "ko") + "&tk=" + (g.target || "en") + "&st=" + d.val().trim())
                }, 250)
            }

            function S(e, t) {
                e.find("[data-code]").removeClass("ut_selected"), e.find("[data-code=" + t + "]").addClass("ut_selected")
            }

            function w() {
                var e = M[g.source].target; - 1 == e.indexOf(g.target) && (g.target = e[0]), o.text(M[g.source].name).attr("data-code", g.source), i.text(M[g.target].name).attr("data-coude", g.target);
                var t = M[g.source].tools || [];
                if (-1 != t.indexOf("VOICE")) {
                    var n = "site.voice?sourceLang=" + g.source + "&targetLang=" + g.target;
                    f.attr("data-ios-query", n + m).attr("data-android-query", n + h).attr("data-ios-universal-fullurl", v("voice", g.source, g.target)).show()
                } else f.hide();
                if (-1 != t.indexOf("CAMERA")) {
                    var a = "site.ocr?sourceLang=" + g.source + "&targetLang=" + g.target;
                    p.attr("data-ios-query", a + m).attr("data-android-query", a + h).attr("data-ios-universal-fullurl", v("ocr", g.source, g.target)).show()
                } else p.hide();
                c.empty();
                var r = "",
                    s = "",
                    d = M[g.source].target;
                d.forEach(function(e, t) {
                    var n = '<li class="ut_litem"><button type="button" class="ut_btn_l _MM_TODAY_TRANS_TARGET_ITEM" data-code="' + e + '">' + M[e].name + "</button></li>";
                    t % 2 == 0 ? r += n : s += n
                }), c.append('<ul class="ut_ll ut_lcol1">' + r + "</ul>"), d.length > 1 && c.append('<ul class="ut_ll ut_lcol2">' + s + "</ul>")
            }
            e.exports = {
                init: function(e) {
                    0 != (a = e.find("#_MM_TODAY_TRANS_MORE")).length && (o = a.find("#_MM_TODAY_TRANS_SOURCE"), i = a.find("#_MM_TODAY_TRANS_TARGET"), r = a.find("#_MM_TODAY_TRANS_SOURCE_LIST"), c = a.find("#_MM_TODAY_TRANS_TARGET_LIST"), s = a.find("#_MM_TODAY_TRANS_FORM"), d = a.find("#_MM_TODAY_TRANS_TEXT"), l = a.find("#_MM_TODAY_TRANS_SUBMIT"), u = a.find("#_MM_TODAY_TRANS_DELETE"), _ = a.find("._MM_TODAY_TRANS_CHANGE"), f = a.find("#_MM_TODAY_TRANS_VOICE"), p = a.find("#_MM_TODAY_TRANS_CAMERA"), w(), o.click(T), i.click(E), _.click(C), r.on("click", "[data-code]", O), c.on("click", "[data-code]", N), d.on("input keyup paste", A), u.click(R), s.submit(I))
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    "88XTqC5D": function(e, t, n) {
        (function(e, t) {
            var a = n("baMwVjn2"),
                o = "https://ssl.pstatic.net/spi/js/release/ko_KR/splugin.m.js?" + svt.substr(0, 8);
            t("#mflick").ondemandClick(o, ".naver-splugin", function() {
                window.__splugin = SocialPlugIn_Core({
                    evKey: "mobilemain",
                    serviceName: "모바일메인",
                    dimmed: "fixed",
                    onClick: function() {},
                    onShow: function() {
                        var t = a.getCurInfo();
                        "MYFEED" === t.code ? e({}, t.getNclickCode() + ".pagesendit", "", "") : e({}, t.getNclickCode() + ".pagesend", "", "")
                    },
                    onHide: function() {
                        e({}, a.getCurInfo().getNclickCode() + "sendclose", "", "")
                    }
                })
            })
        }).call(this, n("C4iEnhWn"), n("QFBpxR1d"))
    },
    "8XO2EsYf": function(e, t, n) {
        (function(e) {
            var t = "$$__MM_RANDOM_REFRESH_DATA__";

            function n(n) {
                var a = function(e) {
                        return e.parent().parent().find("._MM_RANDOM_PAGING")
                    }(e(n.target)),
                    o = a.find("._MM_RANDOM_ITEM"),
                    i = a.data(t);
                (0 == e.isArray(i) || i.length >= o.length) && (i = [a.attr("data-random-index")]);
                var r = o.filter(function(t, n) {
                        return -1 == i.indexOf(e(n).attr("data-index"))
                    }),
                    c = r.eq(Math.floor(Math.random() * r.length));
                o.hide(), c.show();
                var s = c.attr("data-index");
                i.push(s), a.attr("data-random-index", s), a.data(t, i)
            }
            e.fn.randomRefresh = function() {
                return this.each(function(t, a) {
                    var o = e(a);
                    o.data("$$__MM_RANDOM_REFRESH_INITED__") || (o.on("click", "._MM_RANDOM_REFESH", n), o.data("$$__MM_RANDOM_REFRESH_INITED__", !0))
                })
            }
        }).call(this, n("QFBpxR1d"))
    },
    "91+Q4qDH": function(e, t, n) {
        (function(t, a) {
            var o = n("vvRPcpct"),
                i = n("frQ1Xk3Y"),
                r = null,
                c = function() {
                    var e = null;
                    return {
                        show: function(n) {
                            e || (e = t(t("#MM_POPUP_T13_TEMPLATE").html()).hide().on("click", "._MM_PAY_START", function() {
                                n()
                            }).on("click", "._MM_PAY_CANCEL", function() {
                                e.hide()
                            }), t(document.body).append(e)), e.show()
                        }
                    }
                }(),
                s = function(e) {
                    e.preventDefault();
                    var n = t(e.currentTarget),
                        i = n.closest(".MM_HOME_PAY_LIST_WRAP");
                    i.hasClass("cnn_open") ? (o.remove("MM_HOME_PAY_UNFOLDED"), n.html("더보기"), a(e.currentTarget, "home.paymorefold", "", "")) : (o.set("MM_HOME_PAY_UNFOLDED", "1", {
                        expires: 1 / 24 / 60 * 5
                    }), n.html("접기"), a(e.currentTarget, "home.paymore", "", "")), i.toggleClass("cnn_open")
                },
                d = function(e) {
                    e.preventDefault();
                    var n = t(e.currentTarget),
                        a = n.attr("href"),
                        o = "/nvnoti/messages/" + n.attr("data-noti-id");
                    n.closest("li").addClass("cnn_visited"), t.ajax({
                        url: o,
                        method: "PATCH",
                        timeout: 1e3,
                        success: function(e) {
                            location.href = a
                        },
                        error: function() {
                            i("[pay] fail to read noti. id: " + o), location.href = a
                        }
                    })
                },
                l = function(e) {
                    e.preventDefault(), $btn = t(e.currentTarget), "true" === $btn.attr("aria-expanded") ? (a(e.currentTarget, "home.payfold", "", ""), r.find(".MM_HOME_PAY_COMMON_FOLD_AREA").addClass("cui_card_fold").attr("aria-expanded", "false"), $btn.attr("aria-expanded", "false"), o.set("MM_HOME_PAY_COMMON_UNFOLDED", "1", {
                        expires: 365
                    })) : (a(e.currentTarget, "home.payunfold", "", ""), r.find(".MM_HOME_PAY_COMMON_FOLD_AREA").removeClass("cui_card_fold").attr("aria-expanded", "true"), $btn.attr("aria-expanded", "true"), o.remove("MM_HOME_PAY_COMMON_UNFOLDED"))
                },
                u = function(e) {
                    e.preventDefault();
                    var n = t(e.currentTarget);
                    "true" === n.attr("data-pay-agreement") && "true" !== n.attr("data-pay-move-to-pay") ? t.ajax({
                        url: "/ajax/mypaypoint/",
                        dataType: "json",
                        timeout: 1e3
                    }).then(function(e) {
                        if (!e || !0 !== e.isAgree && !1 !== e.isAgree) return t.Deferred().reject();
                        if (e.isAgree && !isNaN(e.point)) {
                            var a = n.html();
                            n.attr("data-clk", "paypoint").attr("data-pay-move-to-pay", "true").attr("data-old-html", a).html('<span class="cnn_amount"><em class="amount">' + e.point.toCommaFormat() + "</em>원</span>"), t(".MM_HOME_PAY_CHARGE").show()
                        } else location.href = "https://m.pay.naver.com/"
                    }).fail(function() {
                        alert("데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.")
                    }) : setTimeout(function() {
                        location.href = "https://m.pay.naver.com/"
                    }, 100)
                },
                _ = function(e) {
                    var n = t(".MM_HOME_PAY_POINT_BTN"),
                        a = n.attr("data-old-html");
                    n.attr("data-clk", "paypointquiry").attr("data-pay-move-to-pay", "false").html(a), t(".MM_HOME_PAY_CHARGE").hide()
                },
                f = function(e) {
                    e.preventDefault();
                    var n = function() {
                        setTimeout(function() {
                            location.href = "https://m.pay.naver.com/send/m/s"
                        }, 100)
                    };
                    "true" !== t(e.currentTarget).attr("data-pay-agreement") ? c.show(n) : n()
                },
                p = function(e) {
                    e.preventDefault();
                    setTimeout(function() {
                        nhn.mobile.launchApp(e.currentTarget)
                    }, 100)
                };
            e.exports = {
                init: function(e) {
                    (r = e.$element).on("click", ".MM_HOME_PAY_MORE", s).on("click", ".MM_HOME_PAY [data-noti-id]", d).on("click", ".MM_HOME_PAY .MM_HOME_PAY_COMMON_FOLD_BTN", l).on("click", ".MM_HOME_PAY_POINT_BTN", u).on("click", ".MM_HOME_PAY_CHARGE", _).on("click", ".MM_HOME_PAY_QR_BTN", p).on("click", ".MM_HOME_PAY_SEND_BTN", f)
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    "9BNJYWJ+": function(e, t, n) {
        (function(e) {
            var t = n("jShiu/8B");

            function a(e) {
                var t = e;
                return t.render(), t.addEvent(), t.typeCustomize(), t.$el.show()
            }
            e.popup || (e.popup = {}), e.popup.toast = function(t) {
                return (e.isArray(t) || "string" == typeof t) && (t = {
                        msg: t
                    }),
                    function(t) {
                        var n = t;
                        e.isArray(n.msg) && (n.msg = n.msg.map(function(e, t) {
                            return 1 == t ? "<span class='alt_name'>" + e + "</span>" : e
                        }).join(""));
                        return n.render(), n.$el.addClass(n.addClass).show().animate({
                            opacity: 1
                        }, n.showTime, function() {
                            e(this).css("opacity", "")
                        }).fadeOut(n.fadeOut), n.$el
                    }(e.extend({}, o, {
                        selector: "#MM_POPUP_TOAST",
                        msg: "잠시 후 <span class='alt_name'>다시 시도</span>해 주세요.",
                        bottom: "",
                        showTime: 2e3,
                        fadeOut: 1e3,
                        addClass: ""
                    }, t))
            }, e.popup.t1 = function(t) {
                var n = e.extend({}, o, {
                    selector: "#MM_POPUP_T1",
                    _clickCb: function() {
                        "function" == typeof this.clickCb && this.clickCb(), this.$el.hide()
                    },
                    typeCustomize: function() {
                        this.$el.on("click", e.proxy(n._clickCb, n))
                    }
                }, t);
                return a(n)
            }, e.popup.t3 = function(t) {
                var n = e.extend({}, o, {
                    selector: "#MM_POPUP_T3",
                    _clickCb: function() {
                        "function" == typeof this.clickCb && this.clickCb(), this.$el.hide()
                    },
                    typeCustomize: function() {
                        this.$el.on("click", e.proxy(n._clickCb, n))
                    }
                }, t);
                return a(n)
            }, e.popup.t4 = function(t) {
                var n = e.extend({}, o, {
                    selector: "#MM_POPUP_T4",
                    _clickCb: function() {
                        "function" == typeof this.clickCb && this.clickCb(), this.$el.hide()
                    },
                    typeCustomize: function() {
                        this.$el.on("click", e.proxy(n._clickCb, n))
                    }
                }, t);
                return a(n)
            }, e.popup.t5 = function(t) {
                var n = e.extend({}, o, {
                    selector: "#MM_POPUP_T5",
                    _clickCb: function() {
                        "function" == typeof this.clickCb && this.clickCb(), this.$el.hide()
                    },
                    typeCustomize: function() {
                        this.$el.on("click", e.proxy(n._clickCb, n))
                    }
                }, t);
                return a(n)
            }, e.popup.t7 = function(t) {
                return a(e.extend({}, o, {
                    selector: "#MM_POPUP_T7"
                }, t))
            }, e.popup.t8 = function(t) {
                var n = e.extend({}, o, {
                    selector: "#MM_POPUP_T8",
                    msg: "변경된 내용을 저장할까요?",
                    ok: "저장",
                    denial: "저장안함",
                    _denialCb: function() {
                        "function" == typeof this.denialCb && this.denialCb(), this.$el.hide()
                    },
                    typeCustomize: function() {
                        this.$el.on("click", "._MM_POPUP_DENIAL", e.proxy(n._denialCb, n))
                    }
                }, t);
                return a(n)
            }, e.popup.t9 = function(t) {
                return a(e.extend({}, o, {
                    selector: "#MM_POPUP_T9"
                }, t))
            }, e.popup.t10 = function(t) {
                return a(e.extend({}, o, {
                    selector: "#MM_POPUP_T10",
                    image: ""
                }, {
                    okClass: "la_del"
                }, t))
            }, e.popup.t12 = function(t) {
                return a(e.extend({}, o, {
                    selector: "#MM_POPUP_T12"
                }, t))
            }, e.popup.t16 = function(t) {
                return a(e.extend({}, o, {
                    selector: "#MM_POPUP_T16"
                }, t))
            }, e.popup.t18 = function(t) {
                return a(e.extend({}, o, {
                    selector: "#MM_POPUP_T18"
                }, t))
            }, e.popup.t19 = function(t) {
                return a(e.extend({}, o, {
                    selector: "#MM_POPUP_T19"
                }, t))
            };
            var o = {
                msg: "",
                ok: "확인",
                cancel: "취소",
                render: function() {
                    this.template = function(t) {
                        return e(t + "_TEMPLATE")
                    }(this.selector), this.$el = e(t.render(this.template.html(), this)), this.set && this.set.apply(this), this.$el.appendTo("body").trigger("popupInit"), e("body").one("popupInit", this.$el, e.proxy(this.reset, this))
                },
                reset: function() {
                    this.$el.stop(!0, !0).off().remove()
                },
                addEvent: function() {
                    this.$el.on("click", "._MM_POPUP_CANCEL", e.proxy(this._cancelCb, this)).on("click", "._MM_POPUP_OK", e.proxy(this._okCb, this))
                },
                _okCb: function(e) {
                    "function" == typeof this.okCb && this.okCb(e), this.$el.hide()
                },
                _cancelCb: function(e) {
                    "function" == typeof this.cancelCb && this.cancelCb(e), this.$el.hide()
                },
                typeCustomize: e.noop
            }
        }).call(this, n("QFBpxR1d"))
    },
    AOEo5Xn2: function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = n("+wBTMN/I"),
                i = n("adHGn4eU"),
                r = n("2lxEanc7"),
                c = n("1Fnl7I+q"),
                s = window.nmain.gv,
                d = "MM_LAB_TURNED_ON_WEB",
                l = "MM_LAB_CLEAN_SETTING",
                u = "MM_TEMP_cleaned_panels",
                _ = "MM_m",
                f = ";";

            function p(e) {
                var t = o.getMyContentsCodeList(),
                    n = r.getUnused(e, "lcs", t.join(f)),
                    i = "";
                s.isInApp || (i = a.get(_)), n = n.filter(function(e) {
                    return e !== i && "LAB_MYSECTION" !== e
                });
                var c = t.length - n.length;
                return c < 2 && n.splice(0, 2 - c), n
            }

            function h(e) {
                localStorage.setItem("MSDT.panel", e.newOnPanel.join(";")),
                    function(e) {
                        var t = localStorage.getItem("MSDT.lastOn"),
                            n = t ? JSON.parse(t) : {};
                        e.forEach(function(e) {
                            n[e] || (n[e] = window.svt.slice(0, 8))
                        }), localStorage.setItem("MSDT.lastOn", JSON.stringify(n))
                    }(e.newOnPanel), c.sendRaw("l.msdl.naver.com", "lab", {
                        ot: e.ot,
                        act: "cle",
                        ty: e.isRefresh ? "auto" : "manual",
                        menuBef: e.oldOnPanel.join(";"),
                        menuUpd: e.newOnPanel.join(";"),
                        menuUnu: e.unusedPanel.join(";"),
                        menuDe: e.deletedPanel.join(";")
                    })
            }
            e.exports = {
                cleanUnused: function(e) {
                    var n = o.getMyContentsCodeList();
                    if (0 == n.length) return !0;
                    var r = t.extend({
                        period: 1 * a.get(l),
                        isRefresh: !1,
                        isForce: !1,
                        showToast: !0,
                        onError: t.noop,
                        onSuccess: t.noop,
                        onAbort: t.noop
                    }, e);
                    if (r.showToast) {
                        var c = a.get(u);
                        if (c) return a.remove(u), void
                        function(e) {
                            if (e && !s.isApp) {
                                var n = e.split(";"),
                                    a = o.getMeta(n[0]);
                                if (a) {
                                    var i = a.menuName;
                                    n.length > 1 && (i += " 외 " + (n.length - 1) + "개"), t.popup.toast({
                                        msg: "<span class='alt_name'>" + i + "</span> 주제가 자동 정리되었습니다."
                                    })
                                }
                            }
                        }(c)
                    }(function(e) {
                        return t.Deferred(function(t) {
                            if (!e.period || e.period < 1) return t.reject("fail", "네이버연구소에서 등록된 확인주기 설정값이 없을 경우, 제거대상 주제판을 알 수 없으므로 종료한다.");
                            var n = a.get(d),
                                i = !!n && n.split(f).indexOf("CLEANER") > -1;
                            if (!e.isForce && !i) return t.reject("fail", "연구소에서 설정된 기능에 자동정리가 없으면 기능을 수행하지 않는다.");
                            var r = p(e.period);
                            return e.targetPanel && e.targetPanel.length > 0 && (r = e.targetPanel.filter(function(e) {
                                return r.indexOf(e) > -1
                            })), 0 == r.length ? t.reject("abort", "제거될 주제판 대상이 없으면 해당 기능을 수행하지 않는다.") : o.getMyContentsCodeList().length <= 2 ? t.reject("fail", "주제판이 최소 개수 이하로 노출되는 경우, 해당 기능을 수행하지 않는다.") : t.resolve(r)
                        }).promise()
                    })(r).fail(function(e) {
                        "fail" === e ? r.onError() : r.onAbort()
                    }).then(function(e) {
                        if (!s.isInApp) return r.ot = "web",
                            function(e) {
                                var n = [],
                                    a = [];
                                return e.oldOnPanel.forEach(function(t) {
                                    e.unusedPanel.indexOf(t) > -1 ? a.push(t) : n.push(t)
                                }), o.changeMyList("contents", n), t.extend(e, {
                                    newOnPanel: n,
                                    deletedPanel: a
                                })
                            }({
                                oldOnPanel: n,
                                unusedPanel: e
                            });
                        var a = i.compareBSC({
                            android: 500,
                            iphone: 550
                        });
                        if (isNaN(a) || a < 0) return t.Deferred().reject();
                        var c = window.nmain.gv.osType;
                        return "ANDROID" == c ? (r.ot = "A", function(e) {
                            var n = window.inapphome.cleanMenus(e.unusedPanel, e.isRefresh).split(";"),
                                a = e.oldOnPanel.filter(function(e) {
                                    return n.indexOf(e) < 0
                                });
                            return t.extend({
                                newOnPanel: a,
                                deletedPanel: n
                            })
                        }({
                            oldOnPanel: n,
                            unusedPanels: e,
                            isRefresh: r.isRefresh
                        })) : "IOS" != c || s.isPad ? void 0 : (r.ot = "ios", function(e) {
                            window.iOSUnusedPanel = e.unusedPanel.join(";"), location.replace("/naverapp/?cmd=cleanMenus&version=5&menuCodes=" + window.iOSUnusedPanel)
                        }(e), t.Deferred().reject())
                    }).done(function(e) {
                        t.extend(e, {
                            isRefresh: r.isRefresh
                        }), h(e), r.onSuccess(), "web" === r.ot && r.isRefresh && (a.set(u, e.deletedPanel), window.location.replace(location.href))
                    })
                },
                getUnusedPanel: p,
                afterCleanForIos: function(e, t, n, a) {
                    h({
                        ot: "ios",
                        isRefresh: "main" === e ? "auto" : "manual",
                        oldOnPane: t.split(";"),
                        newOnPanel: n.split(";"),
                        unusedPanel: window.iOSUnusedPanel.split(";"),
                        deletedPanel: a.split(";")
                    })
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    AZl0vAKZ: function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = n("frQ1Xk3Y"),
                i = n("oOU8Ku/P"),
                r = n("1Fnl7I+q"),
                c = n("2lxEanc7"),
                s = n("GKYnGYqr"),
                d = n("cR2QioJP"),
                l = n("baMwVjn2"),
                u = n("+wBTMN/I"),
                _ = n("AOEo5Xn2"),
                f = n("f+aW8DC0"),
                p = n("GxWpU6kP"),
                h = ";",
                m = window.nmain.gv;

            function M(e) {
                try {
                    if (!window.localStorage) return;
                    var t = localStorage.getItem("MSDT.panel");
                    if (t && e) {
                        var n = function(e, t) {
                            var n = e.split(h),
                                a = t.split(h),
                                o = a.filter(function(e) {
                                    if (n.indexOf(e) < 0) return !0
                                }),
                                i = localStorage.getItem("MSDT.lastOn"),
                                r = i ? JSON.parse(i) : {};
                            o.forEach(function(e) {
                                r[e] = window.svt.slice(0, 8)
                            });
                            var c = {};
                            for (var s in r) a.indexOf(s) > -1 && (c[s] = r[s]);
                            return c
                        }(t, e);
                        localStorage.setItem("MSDT.lastOn", JSON.stringify(n))
                    }
                    localStorage.setItem("MSDT.panel", e)
                } catch (e) {
                    e.code && e.QUOTA_EXCEEDED_ERR && e.code == e.QUOTA_EXCEEDED_ERR || o("[LCS] updateList : " + e)
                }
            }
            e.exports = {
                send: function(e, n) {
                    try {
                        var v = "OPENMAIN" == e,
                            g = m.isInApp || v;
                        if (n = n || {}, m.isApp) {
                            if (!n.isApp) return;
                            v || setTimeout(function() {
                                try {
                                    d.isBindedInApp() && d.removeAdScript(), d.setBindedInApp(!0), d.bind()
                                } catch (e) {
                                    setTimeout(function() {
                                        try {
                                            d.removeAdScript(), d.bind()
                                        } catch (e) {
                                            o("[LCS] nmain.da.bind retry error : " + e)
                                        }
                                    }, 300), o("[LCS] nmain.da.bind error : " + e)
                                }
                            }, 100)
                        }
                        try {
                            if (!n.isAppending) {
                                var T = a.get("NNB") || Math.random().toString(16).substr(2).toUpperCase();
                                window.pid = T + "-" + e + "-" + window.svt + "-" + parseInt(1e7 * Math.random())
                            }
                        } catch (e) {
                            window.pid = "pid-create-exception", o("[LCS] pid create error : " + e)
                        }
                        l.getCurInfo(!0).done(function(d) {
                            if (d) {
                                var l = {};
                                l.sti = (v ? "m_main_openmain" : d.getLcsCode()) + (g ? "_app" : ""), l.pid = pid, l.ugr = "newmain", n.ourl && (l.ourl = n.ourl), n.ni && (l.dni = n.ni, m.deviceId = n.ni), n.appInstallTimestamp && (l.reg = n.appInstallTimestamp), n.appUpdateTimestamp && (l.udt = n.appUpdateTimestamp), "NEWS_FEED" === d.subCode && (l.asid = d.$element.data("sessionid")), window.lcs_do(l),
                                    function(e) {
                                        "SHOP_VOGUE" != e.code && "SHOPPING" != e.code || p.sendAdInitialExpsLog()
                                    }(d), l.nsc = nsc,
                                    function(e, n, d, l) {
                                        try {
                                            d.orientation = 0 === t.orientation() ? "v" : "h", d.tz = (new Date).toString().replace(/^.*\((.*)\).*$/, "$1"), !1 === m.isApp && (d.menuOnList = u.getMyContentsCodeList().join(h), d.menuSetting = u.didSetup() ? "ON" : "OFF", d.commerceMenuOnList = u.getMyCommerceCodeList().join(h)), c.add(e, "lcs"), M(d.menuOnList), d.p60 = c.get(60, "lcs").join(h), d.p90 = c.get(90, "lcs").join(h), d.u60 = _.getUnusedPanel(30).join(h), d.u90 = _.getUnusedPanel(90).join(h), d.menu = e, d.subMenu = l, d.font = a.get("NFS") || "1";
                                            var p = i.get("SHORTCUT_SETTING");
                                            if (p && (d.shortcutSetting = p), "MYFEED" === e) {
                                                var v = a.get("MM_MF_SVC") || "";
                                                v = "DISCOVER" === a.get("MM_MF_TAB_SVC") ? "DISCOVER" : v, d.myfeed = v
                                            }
                                            "PLACE" === e && (d.regionCode = a.get("MM_PL"));
                                            var g = f.getMyCardIdList();
                                            g && (d.searchCardList = g.join(h)), s.sendMainData()
                                        } catch (e) {
                                            o("[LCS] lcs_do error : " + e)
                                        }
                                        d.act = "MSDT.lcs", r.lcs(d), t("#MM_FULL_SHOT_BANNER").length > 0 && a.set("MM_CK_FULL_SHOT_BANNER", "2", {
                                            expires: 7
                                        })
                                    }(e, 0, l, d.subCode)
                            }
                        })
                    } catch (e) {
                        o("[LCS] lcs_do error : " + e)
                    }
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    Apfa9pYC: function(e, t) {
        e.exports = function(e) {
            var t = (e = e || location.href).match(/^([A-z]+):\/\/([A-z0-9-.]+)(\/[^?#]*)?(\?([^#]*))?(#(.*))?/);
            if (!t) throw Error("[nmain.uri] invalue input. " + e);
            var n = null;
            this.getProtocol = function() {
                return t[1]
            }, this.getDomain = function() {
                return t[2]
            }, this.getPath = function() {
                return t[3]
            }, this.getQueryString = function() {
                return t[5]
            }, this.getQueryObject = function() {
                return t[5] ? n || (n = {}, t[5].split("&").forEach(function(e) {
                    var t = e.split("=");
                    n[t[0]] = 2 === t.length ? t[1] : null
                }), n) : null
            }, this.getAnchor = function() {
                return t[7]
            }
        }
    },
    BcFwBpME: function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = !1;

            function i(e) {
                e.preventDefault();
                var n = t(e.currentTarget).closest(".grid1").find("._MM_LAYER_WRAP");
                if (0 != n.length) {
                    var a = e.data.action;
                    "show" === a ? n.show() : "hide" === a ? n.hide() : n.toggle()
                }
            }

            function r(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    o = n.data("wrap") || "",
                    i = "" === o ? n.closest(".grid1") : n.closest(o),
                    r = n.data("name") || "",
                    c = n.data("value") || "1",
                    s = Number(n.data("expire")) || 30;
                0 !== i.length && (i.hide(), "" !== r && a.set(r, c, {
                    expires: s
                }), e.stopPropagation())
            }
            e.exports = {
                init: function() {
                    o || (t("#ct").on("click", "._MM_SHOW_LAYER_BTN", {
                        action: "show"
                    }, i).on("click", "._MM_HIDE_LAYER_BTN", {
                        action: "hide"
                    }, i).on("click", "._MM_CLOSE_LAYER_BTN", r), o = !0)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    BdTN1Wud: function(e, t, n) {
        (function(e) {
            e.fn.scrollTo = function(t, n) {
                return n = isNaN(parseInt(n, 10)) ? 250 : parseInt(n, 10), e([document.documentElement, document.body]).animate({
                    scrollTop: t
                }, n), this
            }, e.fn.hscrollTo = function(t, n) {
                return n = isNaN(parseInt(n, 10)) ? 250 : parseInt(n, 10), e(this).animate({
                    scrollLeft: t
                }, n), this
            }
        }).call(this, n("QFBpxR1d"))
    },
    CcLOrJYx: function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = n("adHGn4eU"),
                i = n("frQ1Xk3Y");
            var r = function(e, t) {
                return !(t < 124.057) && (!(132.622618 < t) && (!(e < 31.963) && (!(38.558 < e) && (e > 37 || (t < 127.93 || (t < 130.2619 && e > 34.902 || t < 128.971 && e > 33.841))))))
            };
            e.exports = {
                search: function(e) {
                    var n = (e = e || {}).nvgeoTimeout || 3e3,
                        c = e.geolocationOptions,
                        s = e.fail || function() {},
                        d = e.success || function() {},
                        l = e.onError || function(e) {
                            switch (e.code) {
                                case 1:
                                    o && o.compareBSC && o.compareBSC({
                                        iphone: 540,
                                        ipad: 133
                                    }) >= 0 ? location.href = "naverapp://failLocation" : "IOS" == window.nmain.gv.osType ? confirm("위치 정보 사용에 동의하지 않아 정보를 확인할 수 없습니다. 다시 동의하는 방법을 담고 있는 도움말로 이동하시겠습니까?") && (location.href = "https://m.help.naver.com/support/contents/contentsView.nhn?contentsNo=6022&lang=ko") : alert("현재 위치를 사용하려면 설정 정보를 확인해주세요"), i("[nmain.geolocation] permission denied.");
                                    break;
                                case 2:
                                    i("[nmain.geolocation] position unavailable.");
                                    break;
                                case 3:
                                    alert("위치를 찾을 수 없습니다. 잠시 후 다시 시도해 주세요."), i("[nmain.geolocation] timeout error. time limit : " + n);
                                    break;
                                default:
                                    alert("위치를 찾을 수 없습니다."), i("[nmain.weather.geolocation] undifined error.")
                            }
                        };
                    if (!navigator.geolocation) return alert("위치 서비스를 지원하지 않는 단말기입니다."), void s("not supported device");
                    navigator.geolocation.getCurrentPosition(function(e) {
                        var o = e.coords.latitude,
                            i = e.coords.longitude,
                            c = {};
                        c.lat = o, c.lng = i, void 0 !== e.coords.name && (c.name = e.coords.name), t.ajax({
                            url: "/nvgeo",
                            data: c,
                            dataType: "json",
                            timeout: n
                        }).then(function(e, n, o) {
                            return a.remove("MM_WD"), e.url || 0 === e.error ? t.Deferred().resolve(e, "naver.com") : (o.sCookieDomain = "naver.com", t.Deferred().reject(o, n))
                        }).done(function(e, t) {
                            e.url ? location.href = e.url : (a.set("m_loc", e.cookie, {
                                expires: 24,
                                domain: t
                            }), d(e))
                        }).fail(function(e) {
                            if (alert("위치를 찾을 수 없습니다."), 200 == e.status && !r(o, i)) {
                                var t = e.sCookieDomain;
                                a.set("MM_WD", "1", {
                                    expires: 30
                                }), a.remove("m_loc", {
                                    domain: t
                                }), a.remove("NV_WETR_LAST_ACCESS_RGN_M", {
                                    domain: t
                                }), a.remove("NV_WETR_LOCATION_RGN_M", {
                                    domain: t
                                })
                            }
                            s("ajax failed. " + e.responseText)
                        })
                    }, function(e) {
                        l(e), s("getCurrentPosition function failed. " + e)
                    }, c)
                },
                searchForPc: function(e) {
                    navigator.geolocation.getCurrentPosition(function(e) {
                        var t = e.coords.latitude,
                            n = e.coords.longitude,
                            a = {};
                        a.lat = t, a.lng = n, void 0 !== e.coords.name && (a.name = e.coords.name)
                    })
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "E6d+oP6K": function(e, t, n) {
        (function(t) {
            var n, a, o, i, r, c = {
                NEW: "/include/grid/today/",
                POPULAR: "/include/grid/today/",
                MY: "/nvhaproxy_plus/content/template/today-singingroom",
                SEARCH: "/nvhaproxy_plus/content/template/today-singingroom-search"
            };

            function s(e) {
                var n = t(e.target),
                    a = p().attr("data-category"),
                    o = parseInt(n.attr("data-move-to"), 10) || 1;
                if ("MY" == a) {
                    var i = parseInt(p().find(".MM_SINGINGROOM_TOTAL").text(), 10) || 0;
                    o > Math.ceil(i / 5) && (o = 1)
                }
                _(o), e.preventDefault()
            }

            function d(e) {
                var n = t(e.currentTarget);
                r.attr("aria-current", "false"), n.attr("aria-current", "true"), _(1), o.hide()
            }

            function l(e) {
                var n = t(e.currentTarget);
                i.attr("aria-selected", "false"), n.attr("aria-selected", "true"), a.text(n.text()), a.attr("data-current-provider", n.attr("data-provider")), _(1), o.hide()
            }

            function u(e) {
                if ("" == n.find("#MM_SINGINGROOM_SEARCH_TEXT").val().trim()) return alert("가수명 혹은 곡명을 입력하세요"), void e.preventDefault();
                r.attr("aria-current", "false"), r.filter(function(e, n) {
                    return t(n).is("[data-category='NEW'], [data-category='POPULAR']")
                }).hide(), r.filter(function(e, n) {
                    return t(n).is("[data-category='SEARCH']")
                }).attr("aria-current", "true").show(), _(1), e.preventDefault()
            }

            function _(e) {
                var o = p().attr("data-category"),
                    i = a.attr("data-current-provider"),
                    r = n.find("#MM_SINGINGROOM_SEARCH_TEXT").val().trim();
                if ("SEARCH" != o || "" != r) {
                    var s = c[o],
                        d = {};
                    switch (o) {
                        case "NEW":
                        case "POPULAR":
                            s += ("ALL" == i ? "" : i + "_") + o + "_" + e + ".html";
                            break;
                        case "SEARCH":
                            d = {
                                q: r,
                                page: e,
                                provider: i
                            };
                            break;
                        default:
                            d = {
                                page: e,
                                provider: i
                            }
                    }
                    t.ajax(s, {
                        timeout: 3e3,
                        data: d
                    }).done(f)
                } else alert("가수명 혹은 곡명을 입력하세요")
            }

            function f(e) {
                if (e) {
                    n.find("#MM_SINGINGROOM_RESULT").html(e);
                    var t = p().find(".MM_SINGINGROOM_TOTAL"),
                        a = n.find("#MM_SINGINGROOM_RESULT .sr_result_table").attr("data-total-count") || 0;
                    t.text(a), reaction.instance.update()
                }
            }

            function p() {
                return r.filter(function(e, n) {
                    return t(n).is("[aria-current='true']")
                })
            }
            e.exports = {
                init: function(e) {
                    0 != (n = e.find("#MM_SINGINGROOM_CONTAINER")).length && (a = n.find("#MM_SINGINGROOM_PROVIDER_SELECTBOX"), o = n.find("#MM_SINGINGROOM_PROVIDERS"), i = n.find(".MM_SINGINGROOM_PROVIDER"), r = n.find("#MM_SINGINGROOM_CATEGORY_LIST .MM_SINGINGROOM_CATEGORY"), n.on("click", ".MM_SINGINGROOM_PREV_BTN, .MM_SINGINGROOM_NEXT_BTN", s), n.find("#MM_SINGINGROOM_SEARCH_BTN").click(u), a.click(function() {
                        o.toggle()
                    }), i.click(l), r.click(d))
                },
                checkLikeLimit: function() {
                    var e = r.filter(function(e, n) {
                            return t(n).is("[data-category='MY']")
                        }).find(".MM_SINGINGROOM_TOTAL"),
                        n = parseInt(e.text(), 10);
                    return n >= 100 ? (t.popup.toast(["찜은 ", "최대 100곡까지", " 가능합니다."]), !1) : !isNaN(n) || (alert("일시적인 오류로 인해 찜하지 못했습니다.\n잠시 후 다시 시도해주세요."), !1)
                },
                refreshLikeCount: function(e) {
                    var n = r.filter(function(e, n) {
                            return t(n).is("[data-category='MY']")
                        }).find(".MM_SINGINGROOM_TOTAL"),
                        a = parseInt(n.text(), 10);
                    !isNaN(a) && nmain.gv.isLogin && (a += e ? 1 : -1, n.text(a), 0 == a ? n.hide() : n.show())
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    F3CmUOk2: function(e, t, n) {
        var a = n("f+aW8DC0");

        function o(e) {
            var t = e.find("#MM_today_boarding"),
                n = e.find(".csa_btn_lclose");
            (function() {
                var e = null,
                    t = 0;
                try {
                    e = JSON.parse(localStorage.getItem("MSDT.lcs"))
                } catch (e) {}
                return e && "object" == typeof e ? (Object.keys(e).forEach(function(n) {
                    var a = e[n];
                    a && "object" == typeof a && Object.keys(a).forEach(function(e) {
                        var n = a[e];
                        n && "object" == typeof n && (t += n.TODAY || 0)
                    })
                }), t) : 0
            })() > 1 ? t.hide() : (t.show(), e.find("#MM_today_add_tooltip").closest(".csa_banner_btn ").addClass("csa_empty"), n.on("click", function(e) {
                e.preventDefault(), t.hide()
            }))
        }
        e.exports = {
            init: function(e) {
                o(e),
                    function(e) {
                        var t = e.find("#MM_today_add_tooltip"),
                            n = a.getAllCardIdList().filter(a.isPromotionCard).join(";"),
                            o = "";
                        try {
                            o = localStorage.getItem("MM_TODAY_NEW_CARD")
                        } catch (e) {}
                        a.getMyCardIdList().length > 0 || n == o ? t.hide() : (t.closest(".csa_banner_btn ").addClass("csa_empty"), t.show(), t.find(".csa_close_btn").on("click", function(e) {
                            e.preventDefault(), t.hide();
                            try {
                                localStorage.setItem("MM_TODAY_NEW_CARD", n)
                            } catch (e) {}
                        }))
                    }(e)
            }
        }
    },
    FLlaIfTA: function(e, t, n) {
        var a = n("vvRPcpct"),
            o = "MM_VIDEO_RANK_CATEGORY_TAB",
            i = "MM_VIDEO_RANK_AGE_TAB";

        function r(e) {
            e.$wrap.find(".cpr_list_wrap").toggleClass("cpr_list_open")
        }

        function c(e) {
            switch (e.contentId) {
                case "enter":
                    a.set(o, "enter", {
                        expires: 365,
                        path: "/"
                    });
                    break;
                case "drama":
                    a.set(o, "drama", {
                        expires: 365,
                        path: "/"
                    });
                    break;
                case "sport":
                    a.set(o, "sport", {
                        expires: 365,
                        path: "/"
                    });
                    break;
                case "age10":
                    a.set(i, "age10", {
                        expires: 365,
                        path: "/"
                    });
                    break;
                case "age2030":
                    a.set(i, "age2030", {
                        expires: 365,
                        path: "/"
                    });
                    break;
                case "age4050":
                    a.set(i, "age4050", {
                        expires: 365,
                        path: "/"
                    })
            }
        }
        e.exports = {
            init: function(e) {
                e.$element.on("fold.after", "#MM_HOME_VIDEO_RANK", r).on("tab.afterChange", "#MM_HOME_VIDEO_RANK", c)
            }
        }
    },
    GKYnGYqr: function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = n("1Fnl7I+q"),
                i = n("+wBTMN/I"),
                r = n("AOEo5Xn2"),
                c = n("2lxEanc7"),
                s = window.nmain.gv;
            e.exports = {
                send: function() {
                    if (!window.nmain.gv.isApp) {
                        var e = i.getMyContentsCodeList(),
                            t = i.getTotalCodeList("contents").filter(function(t) {
                                return e.indexOf(t) < 0
                            }),
                            n = {
                                act: "WEB.menu",
                                menuOnList: e.join(";"),
                                menuList: e.join(";"),
                                oldMenuList: a.get("MM_panel") || "",
                                menuOffList: t.join(";"),
                                ni: a.get("NNB"),
                                menuSetting: i.didSetup() ? "ON" : "OFF"
                            };
                        o.lcs(n)
                    }
                },
                sendSetting: function(e) {
                    var n = i.getMyContentsCodeList(),
                        r = i.getTotalCodeList("contents").filter(function(e) {
                            return n.indexOf(e) < 0
                        }),
                        c = t.extend({
                            act: "WEB.setting",
                            ni: a.get("NNB"),
                            menuOnList: n,
                            menuOffList: r
                        }, e);
                    o.click(c)
                },
                sendMainData: function() {
                    !0 === s.isApp && void 0 !== window.inapphome && "function" == typeof window.inapphome.sendMainData && window.inapphome.sendMainData(JSON.stringify(function() {
                        var e = c.get(30, "lcs", !0),
                            t = Object.keys(e);
                        t = t.filter(function(e) {
                            return "REST" != e && "TODAY" != e
                        }).map(function(t) {
                            return {
                                menu: t,
                                count: e[t]
                            }
                        }).sort(function(e, t) {
                            return t.count - e.count
                        }).map(function(e) {
                            return e.menu
                        });
                        var n = r.getUnusedPanel(90),
                            a = r.getUnusedPanel(60),
                            o = [];
                        o = n;
                        for (var d = 0; d < a.length; d++) o.indexOf(a[d]) < 0 && o.push(a[d]);
                        var l = i.getTotalMeta("contents");
                        return {
                            unusedMenuList: o.join(";"),
                            unusedMenuPeriod: 60,
                            usedMenuList: t.join(";"),
                            usedMenuPeriod: 30,
                            defaultMenuList: "NEWS;ENT;SPORTS",
                            ranking: Object.keys(l).filter(function(e) {
                                return l[e].ranking >= 0
                            }).sort(function(e, t) {
                                return l[e].ranking - l[t].ranking
                            }).join(";"),
                            checkCoachPeriod: 60,
                            checkCoachTargetUserRatio: 0,
                            arrangeCoachPeriod: 14,
                            gender: s.gender || "-"
                        }
                    }()))
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    GSIIYAqa: function(e, t, n) {
        (function(t, a) {
            var o = n("CcLOrJYx"),
                i = n("baMwVjn2"),
                r = n("vvRPcpct");

            function c(e) {
                e.preventDefault(), o.search({
                    success: function() {
                        location.reload()
                    }
                })
            }

            function s(e) {
                e.preventDefault();
                var n = t(e.target),
                    o = n.parent().hasClass("uw_show_list"),
                    c = 0,
                    s = i.getCurInfo(!0) || "";
                o ? (n.parent().removeClass("uw_show_list"), i.getCurInfo(!0).done(function(e) {
                    a({
                        panelCode: e.code
                    }, s + ".weatherforecl", "", "")
                })) : (n.parent().addClass("uw_show_list"), i.getCurInfo(!0).done(function(e) {
                    a({
                        panelCode: e.code
                    }, s + ".weatherforeop", "", "")
                }), c = 1), r.set("NV_WEATHER_FORECAST", c, 365)
            }
            e.exports = {
                init: function(e) {
                    ! function(e) {
                        e.on("click", ".MM_WEATHER_HOURLY_FCAST_TOGGLE", s).on("click", ".MM_weather_search_location", c)
                    }(e)
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    GxWpU6kP: function(e, t, n) {
        (function(t) {
            var a, o, i, r, c, s, d = n("baMwVjn2"),
                l = n("vvRPcpct"),
                u = n("HxNnFbGk"),
                _ = window.logsrvshop || "adlog.shopping.naver.com",
                f = !1,
                p = !1;

            function h() {
                return "SHOP_VOGUE" === d.getCurCode() ? a : o
            }

            function m() {
                r = r || setTimeout(v, 4e3)
            }

            function M() {
                c = c || setTimeout(g, 6e4)
            }

            function v() {
                if (r = null, h()) {
                    var e = h().find(".MM_KEYWORD_LIST"),
                        t = e.find(".MM_KEYWORD").slice(0, e.hasClass("fold") ? 5 : 10),
                        n = t.filter(".csr_rolling_on, .csr_tab_on"),
                        a = t.eq((t.index(n) + 1) % t.length);
                    n.removeClass("csr_open csr_rolling_on csr_tab_on").addClass("csr_rolling_off"), a.removeClass("csr_rolling_off").addClass("csr_open csr_rolling_on csr_tab_on"), a.find("img.ondemand").removeClass("ondemand").loadImage(), m()
                }
            }

            function g() {
                c = null;
                var e = h() ? h().find("[data-floor='TIME']") : null,
                    t = e ? e.attr("data-end-ymdt") : null;
                if (t) {
                    var n = new u,
                        a = new u(parseInt(t.substr(0, 4), 10), parseInt(t.substr(4, 2), 10) - 1, parseInt(t.substr(6, 2), 10), parseInt(t.substr(8, 2), 10), parseInt(t.substr(10, 2), 10)),
                        o = Math.max(Math.floor(n.diffHours(a)) || 0, 0),
                        i = Math.max(Math.floor(n.diffMinutes(a) % 60) || 0, 0);
                    e.find(".MM_REMAIN_HOUR").text(o < 10 ? "0" + o : o), e.find(".MM_REMAIN_MINUTE").text(i < 10 ? "0" + i : i), i > 0 && M()
                }
            }

            function T(e) {
                e.preventDefault(), t.fn.scrollTo(0, 0), l.set("MM_VOGUE_GENDER", t(e.currentTarget).attr("data-gender"), {
                    expires: 7
                }), location.reload()
            }

            function E(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.closest(".MM_REFRESH_BOX"),
                    o = n.closest(".MM_KEYWORD_LIST").find(".MM_KEYWORD.csr_rolling_on, .MM_KEYWORD.csr_tab_on"),
                    i = n.closest(".MM_KEYWORD"),
                    c = "";
                switch (r && (clearTimeout(r), r = null), o.removeClass("csr_open csr_rolling_on csr_tab_on csr_rolling_off").addClass("csr_tab_off"), i.is(o) || i.removeClass("csr_rolling_off csr_tab_off").addClass("csr_open csr_tab_on"), i.find("img.ondemand").removeClass("ondemand").loadImage(), a.attr("data-demo-type")) {
                    case "F01":
                    case "M01":
                        c = "1";
                        break;
                    case "F02":
                    case "M02":
                        c = "2";
                        break;
                    default:
                        c = ""
                }
                n.is("[data-clk^='trdchartcontopen'], [data-clk^='trdchartcontclose']") && n.attr("data-clk", (i.hasClass("csr_open") ? "trdchartcontopen" : "trdchartcontclose") + ("P1D" === a.attr("data-period") ? "day" : "week") + c)
            }

            function C(e) {
                e.preventDefault(), t(e.currentTarget).closest(".MM_KEYWORD_LIST").toggleClass("fold")
            }

            function O(e) {
                e.preventDefault(), t(e.currentTarget).attr("aria-expanded", function(e, t) {
                    return !("true" === t)
                })
            }

            function N(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.attr("data-floor-code"),
                    o = n.attr("data-publish-floor-code") || "",
                    i = h().find("[data-floor='" + a + "']");
                if (i.length > 1) {
                    var r = h().find("[data-publish-floor='" + o + "']");
                    i = 0 !== r.length ? r : i
                }
                P(i.find(".MM_THEME_TITLE .MM_GO_FLOOR[aria-selected='true']")), P(n.closest(".MM_THEME_TITLE").find(".MM_GO_FLOOR[aria-selected='true']")), t.fn.scrollTo(i.offset().top - (t("#MM_HEADER").height() || 0))
            }

            function A(e) {
                var n = t(e.currentTarget),
                    a = n.closest("[data-floor]"),
                    o = n.find(".MM_COMMING_SOON").eq(0).offset().left < n.width() / 2;
                a.find(".MM_ING_TITLE").toggle(!o), a.find(".MM_COMMING_SOON_TITLE").toggle(o)
            }

            function R(e, n) {
                var a = n.find(".grid1:first");
                if (!n.attr("data-static") && 0 !== a.length) {
                    n.loadImage().loadGifImage(), n.find(".MM_KEYWORD_LIST").toggleClass("fold", e.find(".MM_KEYWORD_LIST").hasClass("fold"));
                    var o = e.find("._MM_HORIZONTAL_SCROLL").hscroll(),
                        i = o.length ? -o.get(0).x() : 0;
                    setTimeout(function() {
                        switch (e.replaceWith(a), a.find("._MM_HORIZONTAL_SCROLL").hscroll(), a.find("._MM_HORIZONTAL_SCROLL [aria-selected='true']").each(function(e, n) {
                            t(n).closest("._MM_HORIZONTAL_SCROLL").hscroll().get(0).scrollTo(i, 0), P(t(n), 200)
                        }), P(a.find(".MM_THEME_TITLE .MM_GO_FLOOR[aria-selected='true']"), 0), a.attr("data-floor")) {
                            case "TREND_PICK":
                                y();
                                break;
                            case "TREND_SHOP":
                                x();
                                break;
                            case "HOTDEAL":
                                L()
                        }
                        a.hasClass("MM_AITEMS") && (s = a.attr("data-snap-code"), l.set("MM_VOGUE_AITEMS", s, {
                            expires: 1
                        }))
                    }, 100)
                }
            }

            function I(e) {
                var t = e.closest(".MM_REFRESH_BOX");
                switch (t.attr("data-floor")) {
                    case "TREND_PICK":
                        return function(e, t) {
                            var n = t.hasClass("MM_REFRESH_NEXT"),
                                a = t.hasClass("MM_REFRESH_TAB"),
                                o = a ? t.attr("data-tab") : e.attr("data-tab"),
                                i = Number(e.attr("data-newitem-current-page")) - 1,
                                r = Number(e.attr("data-newitem-total-page")),
                                c = Number(e.attr("data-codiset-current-page")) - 1,
                                s = Number(e.attr("data-codiset-total-page"));
                            a || "newitem" !== o || (i = w(i, r, n));
                            a || "codiset" !== o || (c = w(c, s, n));
                            return S(e, {
                                tab: o,
                                newitemPageIndex: i,
                                codisetPageIndex: c,
                                pageList: e.attr("data-page-list")
                            })
                        }(t, e);
                    case "TREND_SHOP":
                    case "HOTDEAL":
                        return function(e, t) {
                            var n = t.hasClass("MM_REFRESH_NEXT"),
                                a = Number(e.attr("data-current-page")) - 1,
                                o = Number(e.attr("data-total-page"));
                            return S(e, {
                                pageIndex: w(a, o, n),
                                pageList: e.attr("data-page-list")
                            })
                        }(t, e);
                    case "LUCKYTODAY":
                        return function(e, t) {
                            var n = t.hasClass("MM_REFRESH_TAB"),
                                a = t.hasClass("MM_REFRESH_NEXT"),
                                o = Number(e.attr("data-tab-index")),
                                i = Number(e.attr("data-current-page")) - 1,
                                r = Number(e.attr("data-total-page"));
                            return S(e, n ? {
                                tabIndex: t.attr("data-tab-index")
                            } : {
                                tabIndex: o,
                                pageIndex: w(i, r, a)
                            })
                        }(t, e);
                    case "TREND_KEYWORD":
                        return function(e, t) {
                            var n = e.attr("data-demo-type"),
                                a = t.attr("data-period") || e.attr("data-period"),
                                o = t.attr("data-category") || e.attr("data-category");
                            return S(e, {
                                demoType: n,
                                period: a,
                                category: o
                            })
                        }(t, e);
                    case "AITEMS_TAGPICK":
                        return function(e) {
                            return S(e, {
                                pageNo: Number(e.attr("data-page")) % Number(e.attr("data-page-total")) + 1 || 1
                            })
                        }(t)
                }
                if (t.hasClass("MM_AITEMS")) return function(e, t) {
                    return s = s || e.attr("data-snap-code"), S(e, {
                        snapCode: s,
                        refreshInfo: t.hasClass("MM_REFRESH_TAB") ? t.attr("data-refresh-info") : e.attr("data-refresh-info")
                    })
                }(t, e);
                var n = Number(t.attr("data-card-index")),
                    a = Number(t.attr("data-card-length")),
                    o = e.hasClass("MM_REFRESH_NEXT"),
                    i = e.hasClass("MM_REFRESH_TAB"),
                    r = i ? Number(e.attr("data-tab-index")) : Number(t.attr("data-tab-index"));
                return S(t, {
                    cardIndex: i ? Number(e.attr("data-card-index")) || 0 : w(n, a, o),
                    tabIndex: r || 0
                })
            }

            function S(e, n) {
                var a = d.getCurInfo().subCode;
                "EAST_SHOPPING_WOMEN" === a ? a = "SHOPPINGMIZ" : "EAST_SHOPPING_MEN" === a ? a = "SHOPPINGMEN" : "EAST_SHOPPING_ITGIRL" === a && (a = "SHOPPINGWOMEN");
                var o = e.attr("data-publish-floor") || "";
                return "/nvhaproxy_plus/commerce/list?menu=" + a + "&floor=" + e.attr("data-floor") + "&publishFloor=" + o + "&" + t.param(n)
            }

            function w(e, t, n) {
                var a = e + (n ? 1 : -1);
                return a = (a = a < 0 ? t - 1 : a) >= t ? 0 : a
            }

            function b(e) {
                (new Image).src = e
            }

            function k(e, t) {
                b("https://" + _ + "/trendpick/adExposeLogger.nhn?adCntsSeqs=" + e.join(",") + "&mainMenu=" + t + "&ts=" + (new Date).getTime())
            }

            function y() {
                var e = h().find(".MM_TREND_PICK");
                if (0 !== e.length) {
                    var n = e.attr("data-tab"),
                        a = e.attr("data-main-menu");
                    k(e.find("newitem" === n ? "[data-cnts-seq]" : "[data-brd-seq]").map(function(e, a) {
                        return t(a).attr("newitem" === n ? "data-cnts-seq" : "data-brd-seq")
                    }).toArray(), a)
                }
            }

            function x() {
                var e = h().find(".MM_TREND_SHOP");
                0 !== e.length && k(e.find("[data-cnts-seq]").map(function(e, n) {
                    return t(n).attr("data-cnts-seq")
                }).toArray(), e.attr("data-main-menu"))
            }

            function L() {
                var e = h().find(".MM_HOTDEAL");
                if (0 !== e.length) {
                    var n = e.attr("data-main-menu");
                    k(e.find("[data-ad-cnts-seq]").map(function(e, n) {
                        return t(n).attr("data-ad-cnts-seq")
                    }).toArray(), n)
                }
            }

            function D(e) {
                if (void 0 === e) {
                    if (0 === (e = h().find(".MM_TREND_TOPTOP")).length) return
                } else if ("TOPTOP" !== e.closest(".grid1").attr("data-floor")) return;
                var t = e.attr("data-main-menu"),
                    n = e.attr("data-ad-brd-seq");
                if ("" !== t && "" !== n) {
                    var a = [];
                    a.push(n), k(a, t)
                }
            }

            function P(e, t) {
                var n = e.closest(".native_scroll, ._MM_HORIZONTAL_SCROLL");
                if (0 !== n.length)
                    if (n.hasClass("native_scroll")) n.hscrollTo(e.get(0).offsetLeft + e.width() / 2 - n.width() / 2, t);
                    else {
                        var a = n.hscroll().get(0),
                            o = e.get(0).offsetLeft + e.outerWidth() / 2 - n.width() / 2;
                        o = Math.max(0, o), o = Math.min(o, -a.maxScrollX()), a.scrollTo(o, t)
                    }
            }
            e.exports = {
                init: function(e) {
                    if ("SHOP_VOGUE" === e.code && f || "SHOPPING" === e.code && p) return m(), void M();
                    "SHOP_VOGUE" === e.code ? a = e.$element : (o = e.$element, i = o.find("[data-floor='GO_TREND']")), h().dataRefresh({
                            refreshButtonSelector: ".MM_REFRESH_PREV, .MM_REFRESH_NEXT, .MM_REFRESH_TAB",
                            refreshUrlFunction: I,
                            refreshTargetFunction: function(e) {
                                return e.closest(".MM_REFRESH_BOX")
                            },
                            refreshFunction: R
                        }).on("click", ".MM_GENDER_GUIDE [data-gender]", T).on("click", ".MM_KEYWORD_ITEM_TOGGLE", E).on("click", ".MM_KEYWORD_LIST_TOGGLE", C).on("click", ".MM_FLOOR_LIST_TOGGLE", O).on("click", ".MM_GO_FLOOR[data-floor-code]", N).on("paging.afterChange", function(e) {
                            D(e.$content)
                        }), h().find("[data-floor='TIME'] .MM_LIST").on("scroll", A), nmain.gv.isApp && i && t(window).on("scroll", function() {
                            i.find(".csc_trend").toggleClass("csc_hide", window.scrollY < 520)
                        }),
                        function() {
                            var e = h().find(".MM_TREND_PICK"),
                                t = d.getCurInfo().subCode,
                                n = e.attr("data-tab"),
                                a = "";
                            0 !== e.length && "SHOP_VOGUE_MEN" !== t && "SHOPPINGMEN" !== t && "EAST_SHOPPING_MEN" !== t && (a = "SHOP_VOGUE" === d.getCurCode() ? "SHOP_VOGUE_WOMEN" === t ? "WOMAN" : "GIRL" : t.indexOf("EAST") > -1 ? "EAST_SHOPPING_WOMEN" === t ? "WOMAN" : "GIRL" : "SHOPPINGMIZ" === t ? "WOMAN" : "GIRL", b("https://" + _ + "/trendpick/adInteractionLogger.nhn?mainMenu=" + ("newitem" === n ? "TRPICKWM_" : "TRPICKWM_CODI_") + a))
                        }(), m(), M(), setTimeout(function() {
                            h().find("._MM_HORIZONTAL_SCROLL .MM_REFRESH_TAB[aria-selected='true'], .native_scroll [aria-selected='true']").each(function(e, n) {
                                P(t(n))
                            })
                        }, 50), "SHOP_VOGUE" === e.code && (f = !0), "SHOPPING" === e.code && (nmain.gv.isApp ? i.find(".csc_trend").addClass("csc_hide").end().show() : i.show(), p = !0)
                },
                sendAdInitialExpsLog: function e() {
                    var t = d.getCurCode();
                    "SHOP_VOGUE" === t && !f || "SHOPPING" === t && !p ? setTimeout(function() {
                        e()
                    }, 250) : (y(), x(), L(), D())
                },
                getAitemsLogData: function(e) {
                    if ("SHOP_VOGUE" !== d.getCurCode() && "SHOPPING" !== d.getCurCode()) return null;
                    var n = e.closest(".MM_AITEMS");
                    if (0 === n.length) return null;
                    var a = e.hasClass("MM_AITEMS_TAB"),
                        o = parseInt(e.attr("data-item-index"), 10),
                        i = a ? n.find(".MM_REFRESH_TAB[data-refresh-info]").map(function(e, n) {
                            return t(n).attr("data-refresh-info").replace("c_", "").replace("s_", "")
                        }).toArray() : n.find(".MM_AITEMS_PRODUCT").map(function(e, n) {
                            return t(n).attr("data-nvmid")
                        }).toArray();
                    return {
                        tags: n.attr("data-tags").split(","),
                        itemList: i,
                        order: isNaN(o) ? "" : o + 1,
                        domain: n.attr("data-refresh-info").replace("c_", "").replace("s_", ""),
                        productId: e.attr("data-nvmid")
                    }
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    H60TeVA6: function(e, t, n) {
        (function(e, t) {
            var a, o, i, r = n("ozsbSvXK"),
                c = n("vvRPcpct"),
                s = n("Uh2+F60L"),
                d = n("frQ1Xk3Y"),
                l = window.nmain.gv.isLogin,
                u = "MM_ENT_TVDRAMA_FOLD",
                _ = [],
                f = [];

            function p() {
                var t = e.Deferred();
                return _.length > 0 ? (t.resolve(), t.promise()) : (e.ajax({
                    url: "/include/grid/entertainment/channelsV2.json",
                    timeout: 3e3,
                    dataType: "json"
                }).done(function(e) {
                    ! function(e) {
                        i = e.snsInfraChannelCount, _ = e.channelsInfo.shuffle();
                        var t = null;
                        try {
                            t = JSON.parse(window.sessionStorage.getItem("MM_ent_channelKeys"))
                        } catch (e) {}
                        if (t) return void(_ = _.sort(function(e, n) {
                            return t.indexOf(e.subscribeId.channelKey) - t.indexOf(n.subscribeId.channelKey)
                        }));
                        var n = _.filter(function(e) {
                                return e.isBroadToday
                            }),
                            a = _.filter(function(e) {
                                return !e.isBroadToday
                            });
                        _ = n.concat(a);
                        try {
                            window.sessionStorage.setItem("MM_ent_channelKeys", JSON.stringify(_.map(function(e) {
                                return e.subscribeId.channelKey
                            })))
                        } catch (e) {}
                    }(e), t.resolve()
                }).fail(function(e) {
                    d("[content/nmain.entertainment] fail to get channels. " + (e.status > 0 ? e.status : e.statusText)), t.reject()
                }), t.promise())
            }

            function h() {
                var t = e.Deferred();
                return l ? (e.ajax({
                    url: "/api_snsinfra/proxy/sg/EntCnlServiceBO/getSubscribingEntCnls.json?poolId=1",
                    timeout: 3e3,
                    dataType: "jsonp",
                    jsonpCallback: "_callback",
                    success: function(e) {
                        if (null === e || 0 !== e.code || !e.result) return d("[content/nmain.entertainment] fail to get my channels. invalid response"), void t.reject();
                        e.result.length > 0 && (f = e.result.map(function(e) {
                            return e.subscribeId.channelKey
                        })), t.resolve()
                    },
                    error: function(e) {
                        d("[content/nmain.entertainment] fail to get my channels. " + (e.status > 0 ? e.status : e.statusText)), t.reject()
                    }
                }), t.promise()) : (t.resolve(), t.promise())
            }
            var m = {
                    init: function() {
                        o.on("click", "a.ct_pa[data-channel-key]", this.onclickChannelTab).on("click", "button.ct_btn_rdesc", this.onclickSubscribe).on("click", ".MM_ent_channels_fold", this.onclickFoldBtn).on("click", ".MM_ent_channels_open", this.onclickOpenBtn)
                    },
                    onclickChannelTab: function(n) {
                        t({}, "ent.tvdrama" + (l ? "taplist" : "loginlist"), "", "");
                        var a = e(n.currentTarget).attr("data-channel-key");
                        M.drawContents(a);
                        try {
                            window.sessionStorage.setItem("MM_ent_channelKey", a)
                        } catch (e) {}
                        return !1
                    },
                    onclickSubscribe: function(t) {
                        if (!l) return s.login(), !1;
                        var n = e(t.currentTarget).attr("data-channel-key");
                        return e.ajax({
                            url: "/api_snsinfra/invoker/subscribe.json?serviceCode=tvcast&type=CHANNEL&id=" + n,
                            dataType: "jsonp",
                            jsonpCallback: "_callback",
                            timeout: 3e3,
                            success: function(t, n, a) {
                                if (!t && 0 !== t.code) return alert("구독에 실패하였습니다.\n잠시 후 다시 시도해주세요."), void d("[content/nmain.entertainment] fail to subscribe. " + (a.responseText || a.statusText));
                                e.when(p(), h()).done(M.draw)
                            },
                            error: function(e) {
                                alert("구독에 실패하였습니다.\n잠시 후 다시 시도해주세요."), d("[content/nmain.entertainment] ajax fail to subscribe. " + (e.status > 0 ? e.status : e.statusText))
                            }
                        }), !1
                    },
                    onclickFoldBtn: function() {
                        try {
                            localStorage.setItem(u, "1")
                        } catch (e) {}
                        return M.draw(), !1
                    },
                    onclickOpenBtn: function() {
                        try {
                            localStorage.removeItem(u)
                        } catch (e) {}
                        return M.draw(), !1
                    }
                },
                M = {
                    url: {
                        login: "https://nid.naver.com/nidlogin.login?svctype=262144&url=" + location.href,
                        setting: "http://m.entertain.naver.com/tvBrand?islayer=true&ref=main"
                    },
                    draw: function() {
                        a.show(), M.isFolded() ? M.drawFolded() : M.drawUnFolded()
                    },
                    isFolded: function() {
                        try {
                            return "1" == localStorage.getItem(u)
                        } catch (e) {
                            return !1
                        }
                    },
                    drawFolded: function() {
                        var e = f.length > 0 ? "구독한 TV 프로그램" : "TV 프로그램 구독";
                        o.html('<div class="ct_banner">' + e + '<a href="#" class="ct_banner_link MM_ent_channels_open" data-clk="tvdramatabopen">최신 콘텐츠 보기</a></div>').show()
                    },
                    drawUnFolded: function() {
                        var e = f.length > 0 ? "구독한 TV 프로그램" : "TV 프로그램 구독",
                            t = l ? M.url.setting : M.url.login,
                            n = l ? "tvdramaset" : "tvdramalogin",
                            a = l ? "설정" : "로그인";
                        o.html('<div class="ct_title_wrap _MM_TOGGLE_WRAP"> <div class="ct_title_tab"> <a href="' + t + '" class="ct_tta" data-clk="' + n + '">' + a + '</a> <a href="#" class="ct_tta ct_ton MM_ent_channels_fold" data-clk="tvdramatabfold"><span class="ct_tta_close">접기</span></a> </div> <h3 class="ct_title"> <span class="ct_main">' + e + '</span> <button type="button" class="ct_btn_help" data-toggle-index="MM_ent_channels_help" data-clk="tvdramahelp"><span class="blind">추천 도움말</span></button> </h3> <div class="ct_ly_help" style="display: none;z-index:3000;" data-toggle-layer="MM_ent_channels_help"> <p class="ct_help">현재 방송중인 드라마와 예능<br>프로그램을 구독하고 최신<br>콘텐츠를 확인할 수 있습니다.</p><button type="button" class="ct_btn_hclose" data-clk="tvdramahelpclose" data-toggle-index="MM_ent_channels_help"><span class="blind">추천 도움말 닫기</span></button> </div> </div> <div class="ct_scroll" role="tablist"> <div class="scroll-area _MM_HORIZONTAL_SCROLL _MM_IRREGULAR_WIDTH" role="presentation"> <div class="scroll-container" role="presentation" style="width:6000px;">' + M.getTabHtml() + "</div> </div> </div> ").show(), M.drawContents(), o.find("._MM_HORIZONTAL_SCROLL").hscroll();
                        var i = o.find("li:has(a.ct_pa)").index(o.find(".ct_scroll li:has(a.ct_pa_on)"));
                        o.find("._MM_HORIZONTAL_SCROLL").hscroll().get(0).scrollTo(i > 4 ? 59 * i : 0)
                    },
                    getTabHtml: function() {
                        var e = _.filter(function(e) {
                                return f.includes(e.subscribeId.channelKey)
                            }).slice(0, 20),
                            t = _.filter(function(e) {
                                return !f.includes(e.subscribeId.channelKey)
                            }).slice(0, 20 - e.length);
                        return M.getTabUlHtml(e, !0) + M.getTabUlHtml(t, !1)
                    },
                    drawContents: function(t) {
                        var n = "",
                            a = o.find("a.ct_pa[data-channel-key]");
                        if (!t) {
                            var r = "";
                            try {
                                r = window.sessionStorage.getItem("MM_ent_channelKey")
                            } catch (e) {}
                            t = r || a.eq(0).data("channel-key")
                        }
                        a.removeClass("ct_pa_on").filter(function() {
                            return e(this).data("channel-key") == t
                        }).addClass("ct_pa_on");
                        var c = _.find(function(e) {
                                return e.subscribeId.channelKey == t
                            }),
                            s = f.indexOf(t) > -1;
                        if (n += '<ul class="uio_thumbnail">' + c.contents.vod.shuffle().slice(0, 2).map(function(e) {
                                return e.clk = s ? "tvdramachocont" : "tvdramacommcont", e
                            }).map(M.toVodHtml).join("") + "</ul>", s) n += '<ul class="uio_text">' + c.contents.art.shuffle().slice(0, 3).map(M.toArticleHtml).join("") + "</ul>", c.talkCnt >= 0 && (n += '<div class="ct_sbox"><div class="ct_sbox_tab"><a href="http://m.entertain.naver.com/tvBrand/' + c.dssId + '/talk" class="ct_iab" data-clk="tvdramatalk">TALK<span class="ct_iabn">' + c.talkCnt.toCommaFormat() + '</span></a> <a href="http://m.entertain.naver.com/tvBrand/' + c.dssId + '/news" class="ct_iab" data-clk="tvdramamore">영상&뉴스 더보기</a></div></div>');
                        else {
                            var d = JSON.parse(c.meta);
                            n += '<div class="ct_sbox"><div class="ct_sbox_tw"> <span class="ct_sbox_t">' + c.name.escapeHtml() + '</span> <p class="ct_sbox_s"><span class="ct_sbox_d">' + d[0].broadcastOffice.escapeHtml() + '</span> <span class="ct_sbox_d">' + M.getEditedTime(d) + '</span> <span class="ct_sbox_d">구독 ' + c.subscriberCount.toCommaFormat() + '명</span> </p><button type="button" class="ct_btn_rdesc" data-channel-key="' + t + '" data-clk="tvdramabtn">구독</button> </div></div>'
                        }
                        n += '<div class="ct_info MM_infoFooter"><a href="http://m.entertain.naver.com/tvBrand?islayer=true&amp;ref=main" data-clk="tvdramafooter" class="ct_iab">' + (l ? "" : "로그인 후") + '<span class="ct_iabn">' + (i - f.length) + "개 프로그램</span>을 " + (f.length > 0 ? "더 구독할 수 있어요" : "구독해 보세요") + "</a></div>", o.find(".ct_scroll").nextAll().remove(), o.append(n)
                    },
                    getTabUlHtml: function(e, t) {
                        if (!e.length) return "";
                        var n = e.map(function(e) {
                                return '<li class="ct_pitem" role="presentation"> <a href="#" class="ct_pa" role="tab" aria-selected="true" data-channel-key="' + e.subscribeId.channelKey + '"> <div class="ct_pmw"> <img src="' + e.img + '" width="43" height="43" alt="' + e.name.escapeHtml() + '" class="ct_pm"> </div></a> </li> '
                            }).join(""),
                            a = "";
                        return t || (a = '<li class="ct_pitem" role="presentation"><a href="http://m.entertain.naver.com/tvBrand?islayer=true&ref=main" data-clk="tvdramamore" class="ct_pa ct_pa_more" role="tab" aria-selected="false"><span class="blind">구독 TV 프로그램 추가</span></a></li>'), '<ul class="ct_pl panelArea" role="presentation">' + n + a + "</ul>"
                    },
                    toVodHtml: function(e) {
                        return '<li class="ut_item"><a href="' + (0 === e.url.search("http") ? e.url : "http://" + e.url) + '" class="ut_a" data-clk="' + e.clk + '"> <span class="ut_mw"><img src="' + e.imgUrl + '?type=f270_166" width="100%" alt="' + e.title.escapeHtml() + '" class="ut_m">' + (e.isIncludeVideo ? '<span class="spuio spuio_movie_big">영상</span>' : "") + '</span><span class="ut_d"><strong class="ut_t">' + e.title.escapeHtml() + "</strong></span> </a></li> "
                    },
                    toArticleHtml: function(e) {
                        return '<li class="ut_item"><a href="' + (0 === e.url.search("http") ? e.url : "http://" + e.url) + '" class="ut_a" data-clk="tvdramachocont">' + e.title.escapeHtml() + "</a></li> "
                    },
                    getEditedTime: function(e) {
                        var t = e.map(function(e) {
                                return e.broadcastDay
                            }).join(","),
                            n = e[0].startTime.split(":"),
                            a = parseInt(n[0]),
                            o = a < 12 ? "오전" : "오후";
                        return a >= 12 && (a -= 12, n[0] = a < 10 ? "0" + a : "" + a), t + " " + o + " " + n.join(":")
                    }
                };
            r.setInitFn({
                code: "ENT",
                initFn: function() {
                    var t = c.get(u);
                    if (t) {
                        try {
                            localStorage.setItem(u, t)
                        } catch (e) {}
                        c.remove(u)
                    }
                    0 !== (a = e("#MM_tvprogram")).length && e.when(p(), h()).done(function() {
                        o = a.find(".MM_ent_channels"), M.draw(), m.init()
                    })
                }
            })
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    HtyHKtC0: function(e, t) {
        e.exports = {
            getBtnHtml: function() {
                return '<span class="sch_region"><button type="button" class="sch_btn" data-ios-scheme="naversearchapp" data-ios-query="search?qmenu=voicerecg&amp;version=26" data-ios-install="393499958" data-ios-universal-fullurl="https://naverapp.m.naver.com/?urlScheme=naversearchapp%3A%2F%2Fsearch%3Fqmenu%3Dvoicerecg%26version%3D26" data-android-scheme="naversearchapp" data-android-query="search?qmenu=voicerecg&amp;version=26" data-android-package="com.nhn.android.search" onclick="nclk(this, \'home.inspeak\', \'\', \'\', 1);nhn.mobile.launchApp(this);return false;"><span class="ico_sch_btn sch_voice">인식검색 음성검색</span></button><button type="button" class="sch_btn" data-ios-scheme="naversearchapp" data-ios-query="search?qmenu=searchbyimage&amp;version=26" data-ios-install="393499958" data-ios-universal-fullurl="https://naverapp.m.naver.com/?urlScheme=naversearchapp%3A%2F%2Fsearch%3Fqmenu%3Dsearchbyimage%26version%3D26" data-android-scheme="naversearchapp" data-android-query="search?qmenu=searchbyimage&amp;version=26" data-android-package="com.nhn.android.search" onclick="nclk(this, \'home.sbi\', \'\', \'\', 1);nhn.mobile.launchApp(this);return false;"><span class="ico_sch_btn sch_smartlens">인식검색 스마트렌즈</span></button><button type="button" class="sch_btn" onclick="nclk(this, \'home.around\', \'\', \'\', 1);location.href=\'https://s.search.naver.com/p/around/search.naver?\';return false;"><span class="ico_sch_btn sch_smartaround">인식검색 스마트어라운드</span></button></span>'
            }
        }
    },
    "I/sDg8Fb": function(e, t, n) {
        (function(t, a) {
            n("baMwVjn2");
            var o = n("frQ1Xk3Y");

            function i(e) {
                e.$children.find("div.cs_item").removeClass("cs_rolling_on"), setTimeout(e.rollingItem._showCurrentIndex, 300)
            }

            function r(e) {
                e.$activeChildren.find("div.cs_item").addClass("cs_rolling_on")
            }

            function c() {
                a(this, "home.finrefresh", "", ""), t.ajax("/nvhaproxy_plus/support/template?name=home-finance", {
                    timeout: 3e3,
                    dataType: "html"
                }).done(function(e) {
                    var n = t(e).find(".MM_FEED_TITLE");
                    t("#ct .id_cui_stock .MM_FEED_TITLE").replaceWith(n);
                    var a = t(e).find("[data-element-id]"),
                        o = t("#ct .id_cui_stock [data-element-id]");
                    a.length !== o.length && location.reload(), o.each(function(e, n) {
                        var o = t(n),
                            i = o.attr("data-element-id"),
                            r = a.filter("[data-element-id='" + i + "']");
                        o.html(r.html())
                    })
                }).fail(function(e) {
                    o("[nmain.finance] update ajax error. " + e.statusText)
                })
            }
            e.exports = {
                init: function() {
                    t("#ct").on("rolling.before", ".id_cui_stock ._ROLLING._TRIGGER_BEFORE_AFTER_ROLLING", i), t("#ct").on("rolling.after", ".id_cui_stock ._ROLLING._TRIGGER_BEFORE_AFTER_ROLLING", r), t("#ct").on("click", ".id_cui_stock .MM_FIN_REFRESH", c)
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    IoKoYtxT: function(e, t, n) {
        (function(t, a) {
            var o, i, r, c, s = n("ozsbSvXK"),
                d = n("baMwVjn2"),
                l = n("46FWNNQh"),
                u = n("frQ1Xk3Y"),
                _ = n("Uh2+F60L"),
                f = window.nmain.gv,
                p = n("AZl0vAKZ"),
                h = ".cui_selective_box",
                m = "/api_gw/mobile_main/nSelective/west/",
                M = "scroll",
                v = !1,
                g = 0,
                T = l(),
                E = !0 !== ("android" == T.os.name && /^[0-7]\..*$/.test(T.os.version)),
                C = null,
                O = !1;

            function N(e) {
                t(window).off(M, A), e && t(window).on(M, A)
            }

            function A() {
                v || R() || function() {
                    var e = document.body.parentElement.offsetHeight;
                    if ((window.pageYOffset || (document.documentElement || document.body).scrollTop) + c + 300 > e - c / 2) return !0;
                    return !1
                }() && (! function() {
                    ! function() {
                        v = !0;
                        var e = d.getCurInfo();
                        r.css({
                            display: "",
                            position: e ? null : "relative",
                            top: e ? null : window.innerHeight / 2 - 2e3 + "px"
                        })
                    }();
                    var e = Number(o.attr("data-next") || -1),
                        n = o.attr("data-componentId") || "",
                        a = o.attr("data-aitemsTagGroupId") || "",
                        i = Number(o.attr("data-aitemsTagGroupSize") || -1);
                    t.ajax({
                        url: "/nvhaproxy_plus/commerce/list?menu=SHOP_SELECTIVE",
                        type: "GET",
                        data: {
                            next: e,
                            slvComponentId: n,
                            aitemsTagGroupId: a,
                            aitemsTagGroupSize: i
                        },
                        timeout: 3e3,
                        dataType: "html",
                        success: function(e) {
                            if ("" === e || -1 === e.indexOf("cui_selective_box") || e.indexOf("data-static") > -1) S(!1);
                            else {
                                var n = t(e).find(h);
                                0 !== n.length ? (! function(e) {
                                    var t = e.attr("data-next") || -1,
                                        n = !e.attr("data-last") || "true" === e.attr("data-last"),
                                        a = e.attr("data-componentId") || "",
                                        i = e.attr("data-aitemsTagGroupId") || "",
                                        r = e.attr("data-aitemsTagGroupSize") || -1,
                                        c = e.children();
                                    o.append(c), o.attr("data-next", t).attr("data-last", n).attr("data-componentId", a).attr("data-aitemsTagGroupId", i).attr("data-aitemsTagGroupSize", r)
                                }(n), g = 0, p.send(d.getCurInfo().code, {
                                    isAppending: "true"
                                }), S(!0)) : S(!1)
                            }
                        },
                        error: function(e, t, n) {
                            S(!1), u("[contents.shop.selective] 데이터 조회가 실패했습니다." + n)
                        }
                    })
                }(), a({}, "dis.more", "", ""))
            }

            function R() {
                return "true" === (o.attr("data-last") || "true") && (N(!1), !0)
            }

            function I(e) {
                var t = d.getCurInfo();
                e ? t.$element.siblings("._MM_FOOTER").css("display", "").attr("aria-hidden", "false") : t.$element.siblings("._MM_FOOTER").css("display", "none").attr("aria-hidden", "true")
            }

            function S(e) {
                o.loadImage(), b(), r.css({
                    display: "none",
                    position: null,
                    top: null
                }), e || g++;
                var t = !e && g >= 3;
                (R() || t) && (I(!0), function(e) {
                    i.find(".grid1_wrap").attr("data-last", e)
                }(!0)), t && o.attr("data-last", !0), setTimeout(function() {
                    v = !1
                }, 300)
            }

            function w(e) {
                if (!f.isLogin) return _.login(), !1;
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.attr("data-id") || "";
                if ("" !== a) {
                    var o = n.attr("data-status") || "",
                        i = "follow" === o;
                    t.ajax({
                        url: m + o,
                        method: i ? "POST" : "DELETE",
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8"
                        },
                        timeout: 3e3,
                        dataType: "json",
                        data: function(e, t) {
                            var n = {
                                serviceType: "WEST"
                            };
                            if (t) {
                                var a = [];
                                a.push(e), n.memberIds = a
                            } else n.memberId = e;
                            return JSON.stringify(n)
                        }(a, i),
                        success: function(e) {
                            (function(e, t, n) {
                                if (n) {
                                    var a = Number(e[0]);
                                    return a === Number(t)
                                }
                                if (!n) return !0 === e
                            })(e, a, i) && (n.siblings(".MM_SELECTIVE_FOLLOW").show(), n.hide(), function(e, t) {
                                var n = e.closest(".csb_creator_info").find(".csb_follow");
                                if (0 === n.length) return;
                                var a = Number(n.attr("data-follower")) || 0;
                                if (a >= 1e4 || a <= 0) return;
                                a = t ? a + 1 : a - 1, a = Number(a), n.text("팔로워 " + a.toCommaFormat() + "명").attr("data-follower", a)
                            }(n, i))
                        },
                        error: function(e, t, n) {
                            u("[contents.shop.selective] onClickFollow : " + n)
                        }
                    })
                }
            }

            function b() {
                null !== C && E && o.find(".video").not('[data-observe="true"]').each(function(e, n) {
                    var a = t(n);
                    if ("" === (a.attr("data-vid") || "")) return !0;
                    C.observe(a.get(0)), a.attr("data-observe", "true")
                })
            }

            function k() {
                C = null, void 0 !== o && 0 !== o.length && o.find(".video").each(function(e, n) {
                    t(n).attr("data-loaded", !1).attr("data-observe", !1);
                    var a = t(n).children("source");
                    if ("" === a.attr("src")) return !0;
                    a.attr("src", ""), n.load()
                })
            }

            function y(e) {
                e.forEach(function(e) {
                    var n = e.target,
                        a = n.prevRatio || 0,
                        o = t(n),
                        i = t(n).children("source"),
                        r = "";
                    if (e.intersectionRatio.toFixed(2) > a.toFixed(2)) {
                        "false" === (o.attr("data-loaded") || "false") ? function(e, n) {
                            var a = e.attr("data-vid") || "",
                                o = e.attr("data-quality") || "LOW";
                            t.ajax({
                                url: m + "videos/play-urls",
                                type: "GET",
                                data: {
                                    vIds: a,
                                    videoQuality: o
                                },
                                timeout: 3e3,
                                dataType: "json",
                                success: function(t) {
                                    var a = Object.keys(t);
                                    if ("" === t || 0 === a.length) return !0;
                                    var o = a[0];
                                    e.children("source").attr("src", t[o]).attr("data-vid", o), e.attr("data-loaded", "true"), x(n)
                                },
                                error: function(e, t, n) {
                                    u("[contents.shop.selective] setVideoUrlAndPlay : " + n)
                                }
                            })
                        }(o, n) : (r = i.attr("data-src"), i.attr("src", r), x(n))
                    } else {
                        if ("" === (r = i.attr("src")) || "#" === r) return !0;
                        i.attr("data-src", r).attr("src", ""), n.load()
                    }
                    n.prevRatio = e.intersectionRatio
                })
            }

            function x(e) {
                e.load();
                var t = e.play();
                void 0 !== t && t.then(function() {}).catch(function() {})
            }

            function L(e) {
                e.preventDefault();
                var n = t(e.currentTarget).closest(".csb_component").find(".MM_SELECTIVE_HOME_ITEM");
                if (0 !== n.length) {
                    var a = n.find(".csb_recommend_list"),
                        o = Number(a.attr("data-component-next") || 0),
                        i = a.attr("data-component-Id") || "",
                        r = a.attr("data-component-Type") || "ITEM";
                    t.ajax({
                        url: "/nvhaproxy_plus/content/template/shop-selective-home-item?",
                        type: "GET",
                        data: {
                            componentNext: o,
                            componentId: i,
                            componentType: r
                        },
                        timeout: 3e3,
                        dataType: "html",
                        success: function(e) {
                            "" !== e && -1 !== e.indexOf("csb_recommend_list") ? (n.html(e), n.hscrollTo(0)) : t.popup.toast("요청이 실패하였습니다. 다시 시도해주세요.")
                        },
                        error: function(e, n, a) {
                            t.popup.toast("요청이 실패하였습니다. 다시 시도해주세요."), u("[contents.shop.selective] 홈 아이템 새로보기 조회가 실패했습니다." + a)
                        }
                    })
                }
            }
            s.setInitFn({
                code: "SHOP_SELECTIVE",
                initFn: function(e) {
                    e.$element.on("click", ".MM_SELECTIVE_FOLLOW", w).on("click", ".MM_SELECTIVE_ITEM_REFRESH_BTN", L)
                }
            }), s.setUpdateFn({
                code: "SHOP_SELECTIVE",
                updateFn: function(e) {
                    "SHOP_SELECTIVE" === d.getCurInfo().code && (i = t("#mflick"), r = t("#MM_LOADING"), o = e.$element.find(h), g = 0, c = window.innerHeight, function() {
                        if (f.isLogin) {
                            var e = o.find(".MM_SELECTIVE_PROFILE");
                            0 !== e.length && "true" !== (e.attr("data-loaded") || "false") && t.ajax({
                                url: m + "member/profileByLogin",
                                type: "GET",
                                data: {
                                    serviceType: "WEST"
                                },
                                timeout: 3e3,
                                dataType: "json",
                                success: function(t) {
                                    if ("" !== t.linkFullUrl || "" !== t.profileThumbnailUrl) {
                                        e.attr("href", t.linkFullUrl), e.find("img").attr("src", t.profileThumbnailUrl).attr("onerror", "this.outerHTML='<span class=\"csb_noimage\"></span>'");
                                        var n = t.unreadNotificationCount;
                                        n > 0 && e.find(".csb_badge").text(n).show(), e.attr("data-loaded", "true"), e.show()
                                    }
                                },
                                error: function(e, t, n) {
                                    u("[contents.shop.selective] 프로필 조회가 실패했습니다." + n)
                                }
                            })
                        }
                    }(), R() ? I(!0) : N(!0), function() {
                        if (E) {
                            k();
                            try {
                                C = new IntersectionObserver(y, {
                                    root: t(".wrap id_shop_selective_box").get(0),
                                    rootMargin: "100px 0px 100px 0px",
                                    threshold: .4
                                }), b()
                            } catch (e) {
                                u("[ contents.shop.selective ] IntersectionObserver 가 지원되지 않습니다. : " + e)
                            }
                        }
                    }())
                }
            }), e.exports = {
                offEvent: function() {
                    t(window).off(M, A), O || (k(), O = !0)
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    Iqy0zjC0: function(e, t, n) {
        (function(t) {
            var a, o, i, r, c = n("Zzo7p8aP"),
                s = !1,
                d = 0,
                l = !1,
                u = {
                    none: "#b1b3bf",
                    good: "#00a8ff",
                    normal: "#00d01d",
                    bad: "#ffa200",
                    verybad: "#e54748"
                };

            function _(e) {
                return e <= 30 ? "good" : e <= 80 ? "normal" : e <= 150 ? "bad" : "verybad"
            }

            function f(e) {
                return 0 == e ? "none" : e <= 15 ? "good" : e <= 35 ? "normal" : e <= 75 ? "bad" : "verybad"
            }

            function p(e, t, n) {
                switch (e = Math.min(e, 190), _(e = Math.max(e, 6))) {
                    case "good":
                        return n - (t - (30 - e) / 30 * t);
                    case "normal":
                        return n - (2 * t - (80 - e) / 50 * t);
                    case "bad":
                        return n - (3 * t - (150 - e) / 70 * t);
                    case "verybad":
                        return n - (4 * t - (200 - e) / 50 * t)
                }
            }

            function h(e, t, n) {
                switch (e = Math.min(e, 135), f(e = Math.max(e, 3))) {
                    case "none":
                    case "good":
                        return n - (t - (15 - e) / 15 * t);
                    case "normal":
                        return n - (2 * t - (35 - e) / 20 * t);
                    case "bad":
                        return n - (3 * t - (75 - e) / 40 * t);
                    case "verybad":
                        return n - (4 * t - (150 - e) / 75 * t)
                }
            }

            function m(e, t) {
                e.fillStyle = "white", e.strokeStyle = u[t]
            }

            function M(e, n) {
                var a = {
                    index: e,
                    isNow: t(n).find(".cwa_current").length > 0,
                    pm10: Number(t(n).attr("data-pm10")),
                    pm25: Number(t(n).attr("data-pm25")),
                    $el: t(n)
                };
                if (0 == a.pm25) {
                    var o = a.$el.find(".MM_PM25_LABEL");
                    o.addClass("dust_no_data"), o.html("데이터 없음")
                }
                return a
            }

            function v() {
                if (null != a) {
                    a.resize();
                    for (var e = 0, n = 0; n < o.length; n++)
                        if (o[n].isNow) {
                            e = n;
                            break
                        }
                    var i = a.getRect(),
                        r = a.getXCoordiByIndex(e);
                    a.drawRect(0, 0, r, i.height, function(e) {
                            var t = e.createLinearGradient(0, 0, 0, i.height);
                            t.addColorStop(0, "#ffffff"), t.addColorStop(1, "#f2f4f9"), e.fillStyle = t, e.strokeStyle = "transparent"
                        }), a.drawRowLine(function(e) {
                            e.strokeStyle = "#1b2035", e.globalAlpha = .03
                        }), a.drawData(function(e, t, n) {
                            if (e) return p(e.pm10, t, n)
                        }, function(e, t, n, a, o, i, r) {
                            ! function(e, t, n, a, o, i, r) {
                                var c = ["none", "good", "normal", "bad", "verybad"],
                                    s = c.indexOf(t),
                                    d = n ? c.indexOf(n) : s,
                                    l = Math.abs(d - s),
                                    _ = "";
                                if (l) {
                                    for (var f = s < d, p = e.createLinearGradient(a, o, i, r), h = 0; h < l + 1; h++) {
                                        var m = h / l,
                                            M = u[c[s + (f ? +h : -h)]];
                                        p.addColorStop(m, M)
                                    }
                                    _ = p
                                } else _ = u[c[s]];
                                e.strokeStyle = _, e.lineWidth = 2
                            }(e, _(t.pm10), n ? _(n.pm10) : null, a, o, i, r)
                        }, function(e, t) {
                            t.index == d ? m(e, _(t.pm10)) : (e.strokeStyle = "transparent", e.fillStyle = "transparent")
                        }), a.drawDataOnePath(function(e, t, n) {
                            if (e) return h(e.pm25, t, n)
                        }, function(e, t, n) {
                            e.setLineDash([3, 2]),
                                function(e, t, n, a) {
                                    for (var o = ["none", "good", "normal", "bad", "verybad"], i = e.createLinearGradient(t[0].x, 0, t[t.length - 1].x, 0), r = 0; r < t.length; r++) {
                                        var c = a(n[r]),
                                            s = o.indexOf(c),
                                            d = r / (t.length - 1);
                                        i.addColorStop(d, u[c]);
                                        var l = n[r + 1];
                                        if (l) {
                                            var _ = a(l),
                                                f = o.indexOf(_),
                                                p = Math.abs(f - s),
                                                h = s < f;
                                            if (0 == p) continue;
                                            for (var m = 1 / (t.length - 1) / (p + 1), M = 0; M < p; M++) {
                                                var v = u[o[s + (h ? +M : -M)]];
                                                i.addColorStop(d + m * M, v)
                                            }
                                        }
                                    }
                                    e.strokeStyle = i, e.lineWidth = 2
                                }(e, t, n, function(e) {
                                    return f(e.pm25)
                                })
                        }, function(e, t) {
                            t.index == d ? m(e, f(t.pm25)) : (e.strokeStyle = "transparent", e.fillStyle = "transparent")
                        }),
                        function() {
                            var e = a.getRect(),
                                n = o[d],
                                i = p(n.pm10, e.cellHeight, e.height),
                                r = h(n.pm25, e.cellHeight, e.height),
                                c = e.height - i,
                                s = e.height - r,
                                l = n.$el,
                                M = l.find(".MM_PM10_LABEL"),
                                v = l.find(".MM_PM25_LABEL");
                            t(".MM_DUST_ITEM .MM_PM10_LABEL, .MM_DUST_ITEM .MM_PM25_LABEL").hide(), M.show(), v.show();
                            var g = a.getXCoordiByIndex(d),
                                T = i,
                                E = r,
                                C = c < s ? "down" : "up",
                                O = c < s ? "up" : "down";
                            C = c - M.height() < 4 ? "up" : C, O = s - v.height() < 4 ? "up" : O, C = c > e.height - 4 ? "down" : C, O = s > e.height - 4 ? "down" : O, "up" == C && "up" == O && Math.abs(c - s) < M.height() + 9 ? c < s ? E = (T = r) - M.height() - 3 : T = (E = i) - v.height() - 3 : "down" == C && "down" == O && Math.abs(c - s) < M.height() + 8 && (c < s ? T = (E = i) + v.height() + 3 : E = (T = r) + M.height() + 3);
                            var N = T + ("down" == C ? 9 : -M.height() - 9),
                                A = E + ("down" == O ? 9 : -v.height() - 9);
                            a.drawLine(g, 0, g, Math.min(i, r) - 3, function(e) {
                                e.lineWidth = 2, e.strokeStyle = "#bdbfc8", e.globalAlpha = .2
                            }), a.drawLine(g, Math.max(i, r) + 3, g, e.height, function(e) {
                                e.lineWidth = 2, e.strokeStyle = "#bdbfc8", e.globalAlpha = .2
                            }), Math.abs(i - r) > 6 && a.drawLine(g, Math.min(i, r) + 4, g, Math.max(i, r) - 4, function(e) {
                                e.lineWidth = 2, e.strokeStyle = "#bdbfc8", e.globalAlpha = .2
                            }), a.drawLine(g, i + (i < r ? -4 : 3), g, N, function(e) {
                                e.strokeStyle = u[_(n.pm10)]
                            }), a.drawLine(g, r + (i < r ? 3 : -4), g, A, function(e) {
                                e.strokeStyle = u[f(n.pm25)]
                            }), a.drawPoint(g, i, 3.5, function(e) {
                                m(e, _(n.pm10))
                            }), a.drawPoint(g, r, 3.5, function(e) {
                                m(e, f(n.pm25))
                            }), M.css("top", N + "px"), v.css("top", A + "px"), M.css("left", e.cellWidth / 2 - 14 + 3 + "px"), v.css("left", e.cellWidth / 2 - 14 + 3 + "px"), (M.offset().left + M.outerWidth() > window.innerWidth || v.offset().left + v.outerWidth() > window.innerWidth) && (M.css("left", window.innerWidth - (M.offset().left + M.outerWidth()) - 13 + "px"), v.css("left", window.innerWidth - (v.offset().left + v.outerWidth()) - 13 + "px"))
                        }()
                }
            }
            var g = {
                x: 0,
                y: 0
            };

            function T(e) {
                t(e.currentTarget).trigger("innerTouchStart"), e.originalEvent.touches && (g.x = e.originalEvent.touches[0].pageX, g.y = e.originalEvent.touches[0].pageY), l = !0, i = d, r = e.clientX || e.originalEvent.touches[0].clientX
            }

            function E(e) {
                t(e.currentTarget).trigger("innerTouchEnd"), l = !1
            }

            function C(e) {
                if (l) {
                    e.originalEvent.touches && Math.abs(g.x - e.originalEvent.touches[0].pageX) > Math.abs(g.y - e.originalEvent.touches[0].pageY) && e.preventDefault();
                    var t = a.getRect(),
                        n = (e.clientX || e.originalEvent.touches[0].clientX) - r,
                        c = Math.round(n / t.cellWidth),
                        s = i + c;
                    return s = Math.min(s, o.length - 1), s = Math.min(s, (window.innerWidth < 320 ? 6 : 8) - 1), s = Math.max(s, 0), d = s, v(), g
                }
            }
            e.exports = {
                init: function(e, n) {
                    var i = t(".MM_DUST_GRAPH");
                    if (e || 0 !== i.length && !i.data("__$CANVAS_INITED__")) {
                        o = t(".MM_DUST .MM_DUST_ITEM").map(M).toArray();
                        for (var r = 0; r < o.length; r++)
                            if (o[r].isNow) {
                                d = r;
                                break
                            }
                        a = new c(i, {
                            data: o.slice(0, window.innerWidth < 320 ? 6 : 8),
                            rowCount: 4,
                            xOffset: -2
                        }), v(), s || (n || t("#ct")).on("touchstart mousedown", ".MM_DUST", T).on("touchend mouseup", ".MM_DUST", E).on("touchmove mousemove", ".MM_DUST", C), s = !0, i.data("__$CANVAS_INITED__", !0)
                    }
                },
                draw: v,
                onResize: function() {
                    a && (a = new c(t(".MM_DUST_GRAPH"), {
                        data: o.slice(0, window.innerWidth < 320 ? 6 : 8),
                        rowCount: 4,
                        xOffset: -2
                    }), d = Math.min(d, (window.innerWidth < 320 ? 6 : 8) - 1), v())
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    K0zMvcnj: function(e, t, n) {
        var a = n("frQ1Xk3Y"),
            o = n("+wBTMN/I"),
            i = n("baMwVjn2"),
            r = window.nmain.gv;
        e.exports = {
            run: function(e) {
                e || (e = i.getCurCode()), o.isValid(e) ? r.isInApp ? location.href = "/naverapp/?version=3&cmd=onMenu&menuCode=" + e : (o.changeActive(e), location.href = "/") : a("[pageRefresh:run] 유효하지 않은 패널명입니다. Panel : " + e)
            }
        }
    },
    KedLfa4B: function(e, t, n) {
        (function(t) {
            var a = n("Uh2+F60L");
            e.exports = {
                init: function() {
                    a.attach("onUpdateSuccess", function(e) {
                        var n = e.account.noti,
                            a = t("#MM_ASIDE_BTN .MM_ASIDE_BADGE"),
                            o = a.find(".MM_ASIDE_NOTI_COUNT");
                        if (!n) return a.hide(), void o.html("0");
                        a.show(), o.html(n < 100 ? n : "99+")
                    })
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "LfJdR/5p": function(e, t, n) {
        (function(t, a) {
            var o = n("baMwVjn2"),
                i = n("+wBTMN/I"),
                r = n("2lxEanc7"),
                c = n("1Fnl7I+q"),
                s = n("GxWpU6kP");

            function d(e, n) {
                o.getCurInfo(!0).done(function(o) {
                    var c = n || a(e.currentTarget),
                        d = c.closest(".grid1"),
                        l = c.attr("data-clk") || ""; - 1 == l.indexOf(".") && (l = o.getNclickCode() + "." + l);
                    var u = c.attr("data-gdid") || "",
                        _ = c.attr("data-rank") || "",
                        f = c.attr("data-ugdid") || "",
                        p = d.attr("data-tags") || "",
                        h = p ? p.split(",") : [],
                        m = parseInt(d.attr("data-index"));
                    "" != _ || isNaN(m) || (_ = m + 1);
                    var M = {
                        device: {},
                        sn: {
                            r: window.innerWidth + "x" + window.innerHeight,
                            m: 0 === a.orientation() ? "v" : "h",
                            pid: pid
                        },
                        ar: {
                            i: m
                        },
                        lk: {
                            g: f
                        },
                        tg: {
                            al: h
                        }
                    };
                    if (window.nmain.gv.deviceId && (M.device.dni = window.nmain.gv.deviceId), c.hasClass("_MM_AIRS_DATA_ITEM")) {
                        var v = d.find("._MM_AIRS_DATA_ITEM"),
                            g = [],
                            T = c.attr("data-more") || !1;
                        v.each(function(e, t) {
                            var n = a(t);
                            n.attr("data-more") == T && g.push(n.attr("data-gdid"))
                        }), c.attr("data-gdids") && (g = c.attr("data-gdids").split(",")), M.ar.gl = g, c.attr("data-item-rank") && (M.lk.r = c.attr("data-item-rank"));
                        var E = d.find("._MM_AIRS_DATA:first");
                        if (0 === E.length && (E = a("#_MM_AIRS_INFO_" + o.code)), 0 !== E.length) {
                            var C = E.attr("data-model-version"),
                                O = E.attr("data-session-id");
                            C && O && (M.md = {
                                v: C,
                                s: O
                            })
                        }
                    }
                    if (c.hasClass("_MM_NEWS_FEED_AIRS_ITEM") || c.hasClass("_MM_NEWS_FEED_AIRS_ITEM_CLUSTER") || c.hasClass("_MM_NEWS_AIRS_RECOMMEND_ITEM")) {
                        var N = c;
                        c.hasClass("_MM_NEWS_FEED_AIRS_ITEM_CLUSTER") || c.hasClass("_MM_NEWS_AIRS_RECOMMEND_ITEM") ? M.ar.gl = N.attr("data-gdid").split(",") : M.ar.gl = N.attr("data-gdids").split(","), M.lk.r = N.attr("data-item-rank");
                        var A = N.closest("._MM_NEWS_FEED_AIRS");
                        M.md = {
                            v: A.attr("data-model-version"),
                            s: A.attr("data-session-id")
                        }
                    }
                    if (c.hasClass("MM_AIRS_KC_TOPIC") || c.hasClass("MM_AIRS_KC_ITEM")) {
                        var R = c,
                            I = [];
                        I.push(R.attr("data-topic") || ""), I.push(o.getNclickCode() + "." + (R.attr("data-tab") || "")), M.md = {
                            s: R.attr("data-session-id")
                        }, M.tg.al = I
                    }
                    var S = s.getAitemsLogData(c);
                    if (S && (M.ar.gl = S.itemList, M.lk.g = S.productId || S.domain, M.lk.r = S.order, M.tg.al = S.tags, M.md = {
                            v: "",
                            s: ""
                        }), c.is("._MM_SHOPPING_AITEMS_PRODUCT, ._MM_SHOPPING_AITEMS_REFRESH, ._MM_SHOPPING_AITEMS_MORE")) {
                        var w = c.closest("._MM_SHOPPING_AITEMS").find("._MM_SHOPPING_AITEMS_CATEGORY:first");
                        0 === w.length && (w = c.closest("._MM_SHOPPING_AITEMS_CATEGORY")), 0 !== w.length && (M.ar.gl = w.find("._MM_SHOPPING_AITEMS_PRODUCT").map(function(e, t) {
                            return a(t).attr("data-ugdid")
                        }).toArray(), M.lk.r = c.attr("data-item-rank") || "", M.tg.al = (w.attr("data-tags") || "").split(","), M.md = {
                            v: "",
                            s: ""
                        })
                    }
                    if (c.is("[data-oid]") && (M.lk.oid = c.attr("data-oid") || ""), c.is("[data-aid]") && (M.lk.aid = c.attr("data-aid") || ""), c.hasClass("_MM_TV_DATA_ITEM")) {
                        u = c.attr("data-channel-id") || c.attr("data-clip-no") || "";
                        var b = Number(c.attr("data-index") || ""),
                            k = Number(c.attr("data-page") || "");
                        M.lk.r = b + 5 * (k - 1), M.md = {
                            v: c.attr("data-timestamp")
                        }
                    }
                    i.changeActive(o.code);
                    var y = !window.nmain.gv.willPlayNaverapp;
                    t(c[0], l, u, _, y ? 0 : 1, encodeURIComponent(JSON.stringify(M))), window.nmain.gv.willPlayNaverapp = !1, r.add(o.code, "click")
                })
            }

            function l(e, n, i) {
                o.getCurInfo(!0).done(function(o) {
                    var c = n || a(e.currentTarget),
                        s = i || c.attr("data-fclk") || "";
                    s = s + "." + o.getNclickCode();
                    var d = {
                        device: {},
                        sn: {
                            r: window.innerWidth + "x" + window.innerHeight,
                            m: 0 === a.orientation() ? "v" : "h"
                        }
                    };
                    window.nmain.gv.deviceId && (d.device.dni = window.nmain.gv.deviceId), t(c[0], s, "", "", 0, encodeURIComponent(JSON.stringify(d))), r.add(o.code, "click")
                })
            }! function() {
                if ("function" == typeof t) {
                    var e, n = {
                        m: t.m,
                        gl: t.gl
                    };
                    t.m = function(t) {
                        return e = t || {}, n.m.apply(this, arguments)
                    }, t.gl = function(t, a, i, r, s, d, l) {
                        return c.mnclk({
                            elem: e,
                            nclickCode: t,
                            gdid: a,
                            index: i,
                            menu: e.panelCode || o.getCurCode()
                        }), n.gl.apply(this, arguments)
                    }
                }
            }(), e.exports = function(e) {
                e instanceof a != 0 ? e.on("click", "[data-clk]", d).on("mnclk", d).on("click", "[data-fclk]", l).on("fclk", l) : console.error("invalid argument")
            }
        }).call(this, n("C4iEnhWn"), n("QFBpxR1d"))
    },
    Np7mytd0: function(e, t, n) {
        (function(e) {
            var t = n("vvRPcpct"),
                a = n("uXtDkIOo"),
                o = n("CcLOrJYx"),
                i = n("ozsbSvXK"),
                r = "MM_PL",
                c = "MM_PL_LOC",
                s = "MM_PL_MORE",
                d = Object.keys(a).reduce(function(e, t) {
                    return a[t].placeMenuCode === t && e.push(t), e
                }, []),
                l = "#place_location_desc",
                u = "<em class='point'>다른 지역</em>의 <em class='point'>동네소식</em>도 확인해보세요",
                _ = window.nmain.gv;

            function f(n) {
                n.preventDefault();
                var a = e(n.currentTarget).data("code");
                t.set(r, a, {
                    expires: 3650
                }), t.set(c, a, {
                    expires: 3650
                }), location.reload()
            }

            function p(n) {
                n.preventDefault(), e(n.currentTarget).toggleClass("cp_more_on"), e("#_MM_REGION_TAB").toggle().toggleClass("cp_tab_on"), e("#_MM_REGION_TAB").is(":visible") ? t.remove(s) : t.set(s, "1", {
                    expires: 3650
                })
            }

            function h(n) {
                n.preventDefault();
                var a = e(n.currentTarget).addClass("loading");
                o.search({
                    success: function(e) {
                        var n = M(e.code.substr(0, 2));
                        d.includes(n) ? (t.set(r, n, {
                            expires: 3650
                        }), t.set(c, n, {
                            expires: 3650
                        }), location.reload()) : m("현 지역은 아직 제공되지 않습니다."), a.removeClass("loading")
                    },
                    fail: function() {
                        a.removeClass("loading")
                    }
                })
            }

            function m(t) {
                var n = e(l);
                n.length < 0 || n.iff(t).html(t).end().delay(5e3).queue(function() {
                    e(this).html(u)
                })
            }

            function M(e) {
                return a[e] ? a[e].placeMenuCode : e
            }
            i.setInitFn({
                code: "PLACE",
                initFn: function(e) {
                    e.$element.on("click", "._MM_REGION", f).on("click", "._MM_REGION_MORE", p).on("click", "._MM_MYPLACE_LOCATION_BTN", h)
                }
            }), i.setUpdateFn({
                code: "PLACE",
                updateFn: function(n) {
                    ! function() {
                        var e = t.get(c);
                        e && d.includes(e) && (m("<em class='point'>" + function(e) {
                            return a[e].placeMenuName
                        }(e) + "</em>지역으로 변경되었습니다."), t.remove(c))
                    }(),
                    function(n) {
                        if (t.get(r)) {
                            var a = _.regionCode;
                            if (!(void 0 === a || a.length < 2)) {
                                var o = t.get(r),
                                    i = M(a.substr(0, 2));
                                o !== i && d.includes(i) && (n.find("._MM_REGION").each(function(t, n) {
                                    var a = e(n);
                                    if (a.attr("data-code") === i) return a.children().eq(0).append("<span class='cp_recommend'>추천</span>"), !1
                                }), m())
                            }
                        }
                    }(n.$element), n.$element.find("._MM_REGION_MORE").attr("data-clk", "regmore")
                }
            })
        }).call(this, n("QFBpxR1d"))
    },
    NvzQef5B: function(e, t, n) {
        (function(t, n) {
            var a, o = window.nmain.gv;

            function i(e) {
                if (e.preventDefault(), window.inapphome && "function" == typeof window.inapphome.openHomeCover) window.inapphome.openHomeCover();
                else {
                    var a = "ANDROID" == o.osType ? "<span style='margin-top:10px;display:inline-block;'>최신 베타 버전에서 사용할 수 있는<br>기능입니다. 지금 플레이스토어에서<br>업데이트 하시겠습니까?</span>" : "<span style='margin-top:10px;display:inline-block;'>네이버앱 최신 버전에서 사용할 수 있는<br>기능입니다. 지금 앱스토어로 이동하여<br>업데이트 하시겠습니까?</span>",
                        i = "ANDROID" == o.osType ? "market://details?id=com.nhn.android.search" : "http://itunes.apple.com/app/id393499958";
                    t.popup.t10({
                        title: "네이버 홈커버",
                        msg: a,
                        ok: "확인",
                        okClass: "la_ok",
                        okCb: function() {
                            n({}, "home.homecoveryes", "", ""), location.href = i
                        },
                        cancelCb: function() {
                            n({}, "home.homecovercel", "", "")
                        },
                        cancel: "취소"
                    })
                }
            }
            e.exports = {
                init: function() {
                    0 != (a = t("#MM_HOME_COVER")).length && a.find("a.cs_a").on("click", i)
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    OV2YOGNG: function(e, t) {
        e.exports = {
            hasJong: function(e) {
                var t = e.charCodeAt(e.length - 1);
                if (function(e) {
                        return e > 44031 && e < 55204
                    }(t)) return (t - 44032) % 28 > 0;
                switch (t) {
                    case 76:
                    case 108:
                    case 77:
                    case 109:
                    case 78:
                    case 110:
                    case 82:
                    case 104:
                        return !0;
                    default:
                        return !1
                }
            }
        }
    },
    OtOKt3QL: function(e, t, n) {
        (function(t) {
            var a, o = n("baMwVjn2"),
                i = n("+wBTMN/I"),
                r = n("K0zMvcnj"),
                c = n("frQ1Xk3Y"),
                s = n("vvRPcpct"),
                d = n("CcLOrJYx"),
                l = window.nmain.gv,
                u = !1,
                _ = "/nvhaproxy_plus/content/template/content-todoSmartAround?tab=",
                f = "",
                p = "MM_TODO_SUBMENU_HELP",
                h = "MM_TODO_SUBMENU_LAYER",
                m = "MM_TODO_SUBMENU";

            function M(e) {
                e.preventDefault();
                var n = t(e.currentTarget);
                null != n && null != n.closest("#SMTARND_ALARM") && (s.set("SMTARND_ALR_CLOSE", "Y", {
                    expires: 1
                }), n.closest("#SMTARND_ALARM").hide())
            }

            function v(e) {
                null != e && null != e.find("#SMTARND_ALARM") ? t("#SMTARND_ALARM").show() : c("[nmain.shopTodo] 뭐하지 스마트어라운드 위치 못찾음 말풍선 영역이 없습니다. - #SMTARND_ALARM")
            }

            function g(e) {
                e.preventDefault();
                var n = t(e.currentTarget).data("type");
                t.ajax({
                    url: _ + n + function() {
                        var e = "";
                        "(none)" != l.lng && (e = "&long=" + l.lng);
                        "(none)" != l.lat && (e = e + "&lat=" + l.lat);
                        return e
                    }(),
                    timeout: 1e3
                }).done(function(e) {
                    if ("" !== e) {
                        var n = t("#SMTARND_TMPL_WRAP");
                        if (null == n) return t.popup.toast("일시적 데이터 오류입니다. 잠시 후 다시 시도해 주세요."), void c("[nmain.shopTodo] 뭐하지 스마트어라운드 갱신 ajax 오류. 데이터를 붙일 요소가 없습니다. - #SMTARND_TMPL_WRAP");
                        n.html(e);
                        var a = n.find("._MM_HORIZONTAL_SCROLL");
                        if (null == t("#TODO_SMTARND_TAB_LIST") || null == a || null == a.hscroll() || a.hscroll().length < 1) return;
                        var o = a.hscroll();
                        if (Number(t("#TODO_SMTARND_TAB_LIST> li> a[aria-selected='true']").attr("data-tab-index")) > 3) o.get(0).scrollTo(t("#TODO_SMTARND_TAB_LIST> li> a[aria-selected='true']"), 0)
                    } else v(t("#SMTARND_TMPL_WRAP")), c("[nmain.shopTodo] 뭐하지 스마트어라운드 갱신 ajax 오류. PS로부터 데이터 호출 실패..")
                }).fail(function(e) {
                    v(t("#SMTARND_TMPL_WRAP")), c("[nmain.shopTodo] changeSmartAroundContents PS로부터 데이터 호출 실패. " + e.statusText)
                })
            }

            function T(e) {
                e.preventDefault();
                var n = t(e.currentTarget);
                "true" === n.attr("aria-expanded") ? n.attr("aria-expanded", !1) : n.attr("aria-expanded", !0)
            }

            function E(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.attr("data-id"),
                    o = n.closest(".grid1");
                n.hasClass("_MM_TODO_AGERANK_BTN") ? (s.set("MM_TODO_AR_AGE", a, {
                    expires: 365
                }), o.find("._MM_TODO_AGERANK_BTN").attr("aria-selected", !1)) : o.find("._MM_TODO_NOW_LIST_BTN").attr("aria-selected", !1), n.attr("aria-selected", !0), o.find("._MM_CATEGORY_LIST[data-id='" + a + "']").find("img.ondemand").removeClass("ondemand").loadImage(), setTimeout(function() {
                    o.find("._MM_CATEGORY_LIST_IMG").hide().end().find("._MM_CATEGORY_LIST_IMG[data-id='" + a + "']").show().end().find("._MM_CATEGORY_LIST").hide().end().find("._MM_CATEGORY_LIST[data-id='" + a + "']").show().end().find("._MM_CATEGORY_LIST_MORE, ._MM_TODO_NOW_MORE").hide().end().find("._MM_CATEGORY_LIST_MORE[data-id='" + a + "'], ._MM_TODO_NOW_MORE[data-id='" + a + "']").show()
                }, 50)
            }

            function C(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = O(n),
                    o = null != n.attr("data-next-item-group") ? Number(n.attr("data-next-item-group")) : 0,
                    i = null != n.attr("data-total-group") ? Number(n.attr("data-total-group")) : 1,
                    r = n.closest(".TODO_" + a + "_CATEGORY_CONTENT").attr("data-category-num") || "1";
                o == i && (o = 0), n.find("span.current").text(o + 1), n.closest(".TODO_" + a + "_WRAP").find(".cbl_contents[data-category-num='" + r + "']").find(".TODO_" + a + "_ITEM[data-item-num!='" + o + "']").hide().end().find("img.ondemand").removeClass("ondemand").loadImage().end().find(".TODO_" + a + "_ITEM[data-item-num='" + o + "']").show(), n.attr("data-next-item-group", o + 1)
            }

            function O(e) {
                var t = e.attr("class");
                return t.indexOf("_WITH_") > -1 ? "WITH" : t.indexOf("_PLAY_") > -1 ? "PLAY" : t.indexOf("_SHOW_") > -1 ? "SHOW" : null
            }

            function N(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = O(n),
                    o = n.hasClass("TODO_KIDS") ? "Kids" : n.hasClass("TODO_FRIENDS") ? "Friends" : "";
                if (null != a) {
                    var i = null != n.attr("data-region-code") ? n.attr("data-region-code") : "0",
                        r = a.toLowerCase() + o + "_" + i + ".shtml";
                    r.indexOf("with") > -1 && (r = r.replace("with", "withwhom")), t.ajax("/include/commerce/todo/" + r, {
                        timeout: 1e3,
                        dataType: "html"
                    }).done(function(e) {
                        if (e.indexOf("EMPTY") > 0) n.closest(".TODO_" + a + "_FILTER_AREA").find(".TODO_NODATA_ALERT") && (n.closest(".TODO_" + a + "_FILTER").hide(), n.closest(".TODO_" + a + "_FILTER_AREA").find(".TODO_NODATA_ALERT").show());
                        else if (e.length > 1) {
                            var o = t(e);
                            n.closest(".TODO_" + a + "_WRAP").replaceWith(o).resize(), o.find("._MM_HORIZONTAL_SCROLL").hscroll()
                        } else c("[nmain.shopTodo] 뭐3종 지역선택시 파일 교체 실패. 존재하지 않는 파일 read 시도. 템플릿 종류 : " + a + ", ajax 호출 url : /include/commerce/todo/" + r)
                    }).fail(function(e) {
                        c("[nmain.shopTodo] 뭐3종 지역선택시 파일 교체 실패. 템플릿 종류 : " + a + ", ajax 오류 내용 : " + e.statusText)
                    })
                }
            }

            function A(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.attr("data-category-num"),
                    o = O(n);
                if (null != o) {
                    var i = n.closest(".cui_booking_list").find(".TODO_" + o + "_CATEGORY_CONTENT[data-category-num='" + a + "']");
                    if (null != i) {
                        var r = n.closest(".cui_booking_list");
                        r.find(".TODO_" + o + "_CATEGORY_BTN").attr("aria-selected", "fasle"), r.find(".TODO_" + o + "_CATEGORY_CONTENT").hide(), n.attr("aria-selected", "true"), i.show(), i.find("img.ondemand").removeClass("ondemand").loadImage()
                    }
                }
            }

            function R(e) {
                e.preventDefault();
                var n = t(e.currentTarget).closest(".TODO_TREND_3TYPES_GROUP"),
                    a = n.attr("data-total-group-count"),
                    o = n.attr("data-current-group-index");
                o == a ? o = 1 : o++, n.attr("data-current-group-index", o).find(".TODO_TREND_3TYPES_ITEM").hide().end().find(".TODO_TREND_3TYPES_TAB").attr("aria-selected", !1).end().find(".TODO_TREND_3TYPES_ITEM[data-group-index='" + o + "']").show().end().find(".TODO_TREND_3TYPES_TAB[data-group-index='" + o + "']").attr("aria-selected", !0).resize()
            }

            function I(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.attr("data-group-name"),
                    o = n.closest("." + a + "_GROUP"),
                    i = o.attr("data-total-group-count"),
                    r = o.attr("data-current-group-index"),
                    c = JSON.parse(o.attr("data-background-list") ? o.attr("data-background-list") : null);
                r == i ? r = 1 : r++, n.hasClass("TODO_INTRODUCE_THEME_MORE") || n.hasClass("TODO_IMAGE_REVIEW_3BY3_MORE") || n.hasClass("TODO_DATE_COURSE_MORE") || n.find("span.current").text(r), o.attr("data-current-group-index", r).find("." + a + "_ITEM").hide().end().find("." + a + "_ITEM[data-group-index='" + r + "']").show().resize(), c && o.removeClass("cpp_bg_type" + c[r - 2 > -1 ? r - 2 : i - 1]).addClass("cpp_bg_type" + c[r - 1])
            }

            function S(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.data("id"),
                    o = t(n.children("a")[0]),
                    i = o.hasClass("before"),
                    r = t("._MM_CATEGORY_LIST[data-id='" + a + "']");
                i ? (o.removeClass("before"), o.find(".BTN_TEXT").text("다음 순위"), r.find("li").toggle()) : (o.addClass("before"), o.find(".BTN_TEXT").text("이전 순위"), r.find("li").toggle())
            }

            function w(e) {
                e.preventDefault();
                var n = t(e.currentTarget);
                if (null != n.closest(".TODO_BENEFIT") && null != n.closest(".TODO_BENEFIT").find(".TODO_TREND_GROUP")) {
                    var a = n.closest(".TODO_BENEFIT").find(".TODO_BENEFIT_GROUP"),
                        o = a.attr("data-total-group-count"),
                        i = a.attr("data-current-group-index");
                    i == o ? i = 1 : i++, n.find("span.current").text(i), a.attr("data-current-group-index", i).end().find(".TODO_BENEFIT_ITEM").hide().end().find(".TODO_BENEFIT_ITEM[data-group-index='" + i + "']").show().resize()
                }
            }

            function b(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.attr("data-id"),
                    o = n.attr("data-sub-menu") || "",
                    i = n.closest("._MM_TODO_AGERANK_AREA"),
                    r = i.parent();
                t.ajax({
                    url: "/include/commerce/todo/ageRank" + o + "_" + a + ".shtml",
                    timeout: 3e3,
                    dataType: "html"
                }).done(function(e) {
                    if ("" !== e) {
                        var n = t(e);
                        r.html(n).resize();
                        var c = (i = r.find("._MM_TODO_AGERANK_AREA")).find("._MM_HORIZONTAL_SCROLL").hscroll(),
                            d = "Friends" === o ? 262 : "Kids" === o ? 232 : 99;
                        if (Number(a) > d) {
                            var l = c.get(0);
                            l.hscroll().get(0).scrollTo(l.find("._MM_CATEGORY_LIST_BTN[aria-selected='true']").parent(), 0)
                        }
                        r.loadImage(), s.set("MM_TODO_AR_FILTER", a, {
                            expires: 365
                        })
                    } else t.popup.toast("데이터를 가져오지 못했습니다.")
                }).fail(function(e) {
                    c("[nmain.shopTodo] 세대별 연령 파일 교체 실패. " + e.statusText)
                })
            }

            function k(e) {
                e.preventDefault(), t(e.currentTarget).closest("._MM_TODO_NOWPICK_ALARM") && t(e.currentTarget).closest("._MM_TODO_NOWPICK_ALARM").hide()
            }

            function y(e) {
                e.preventDefault(), t(e.currentTarget).closest(".TODO_NODATA_ALERT") && t(e.currentTarget).closest(".TODO_NODATA_ALERT").hide()
            }

            function x(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.parent();
                n.addClass("cbl_loading"), d.search({
                    success: function() {
                        location.reload()
                    },
                    fail: function() {
                        t.popup.toast("위치를 갱신하지 못했습니다."), a.removeClass("cbl_loading")
                    },
                    geolocationOptions: {
                        enableHighAccuracy: !0,
                        timeout: 5e3,
                        maximumAge: 0
                    }
                })
            }

            function L(e) {
                "SHOP_TODO" !== e.fromCode && "SHOP_TODO" !== e.toCode || t(".TODO_SWITCH_HELP").removeClass("ani_fadein")
            }

            function D() {
                var e = t(".TODO_SWITCH_SUBMENU[aria-checked='true']");
                e.length && ("FRIENDS" === (f = e.attr("data-sub")) && setTimeout(P, 500), s.get(m) !== f && s.set(m, f, {
                    expires: 3650
                }))
            }

            function P() {
                var e = s.get(h);
                (e = t.isNumeric(e) ? Number(e) : 0) < 3 ? (t(".TODO_SWITCH_HELP").addClass("ani_fadein"), s.set(h, ++e, {
                    expires: 365
                })) : t(".TODO_SWITCH_HELP").hide(), s.get(p) && s.remove(p)
            }

            function F(e) {
                e.preventDefault();
                var n = t(this),
                    a = n.attr("data-sub");
                a || (a = "FRIENDS" === f ? "KIDS" : "FRIENDS"), ("FRIENDS" === a ? n.next() : n.prev()).attr("aria-checked", "false"), n.attr("aria-checked", "true"), s.set(m, a, {
                    expires: 3650
                }), setTimeout(function() {
                    l.isApp && "ANDROID" === l.osType && /subMenu/.test(location.href) ? (i.changeActive("SHOP_TODO"), location.href = "/?newMain=YES&contentOnly=YES&menu=SHOP_TODO") : r.run()
                }, 550)
            }

            function B() {
                s.set(h, 3, {
                    expires: 365
                }), t(".TODO_SWITCH_HELP").hide()
            }
            e.exports = {
                init: function(e) {
                    a = e.$element;
                    var n = e.type;
                    a.find(".native_scroll:not([data-scroll-moved])").each(function(e, n) {
                        var a = t(n),
                            o = a.find("a:gt(1)[aria-selected='true']");
                        o && o.position() && a.hscrollTo(o.position().left - 15, 150)
                    }), u ? "panelChanged" === n && D() : (a.on("click", ".TODO_SMTARND_TAB", g).on("click", "#SMTARND_ALARM_CLOSE", M).on("click", "._MM_CATEGORY_LIST_BTN", b).on("click", "._MM_CATEGORY_LIST_MORE", S).on("click", ".TODO_HOTPICK_MORE", w).on("click", ".TODO_TREND_3TYPE_MORE", R).on("click", ".TODO_DATE_COURSE_MORE, .TODO_IMAGE_REVIEW_3BY3_MORE, .TODO_BENEFIT_MORE, .TODO_INTRODUCE_THEME_MORE, .TODO_HOT_PLACE_ROAD_MORE, .TODO_HIGH_QUALITY_IMAGE_MORE, .TODO_DISCOVERY_FOOD_MORE, .TODO_DISCOVERY_SPOT_MORE, .TODO_COMINGSOON_MORE, .TODO_PLAY_MORE", I).on("click", "._MM_ARIA_EXPANDED_BTN, .TODO_SHOW_FILTER_BTN, .TODO_WITH_FILTER_BTN, .TODO_PLAY_FILTER_BTN", T).on("click", ".TODO_SHOW_FILTER_REGION, .TODO_WITH_FILTER_REGION, .TODO_PLAY_FILTER_REGION", N).on("click", ".TODO_SHOW_CATEGORY_BTN, .TODO_WITH_CATEGORY_BTN, .TODO_PLAY_CATEGORY_BTN", A).on("click", ".TODO_SHOW_REFRESH, .TODO_WITH_REFRESH, .TODO_PLAY_REFRESH", C).on("click", "._MM_TODO_AGERANK_BTN, ._MM_TODO_NOW_LIST_BTN", E).on("click", "#LOC_BUTTON, ._MM_TODO_NOWPICK_LOCATION_BTN", x).on("click", "._MM_CLOSE_BTN", k).on("click", ".TODO_NODATA_ALERT_CLOSE", y).on("click", ".TODO_SWITCH_HELP_CLOSE", B).on("click", ".TODO_SWITCH_SUBMENU", F), t(o).on("panelBeforeChange", L), D(), u = !0)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    PoGrn8lT: function(e, t, n) {
        (function(t) {
            var a = n("baMwVjn2"),
                o = n("frQ1Xk3Y"),
                i = n("xHdGogJp"),
                r = {
                    succ: ["", "구독컨텐츠", "는 포스트 MY구독에서 볼 수 있습니다."],
                    fail: ["잠시 후", "다시 시도", "해 주세요."]
                };

            function c(e) {
                e.preventDefault();
                var n = i.request("POST_RECOMMEND", t(e.currentTarget), function(e) {
                    return "success" === e.resultStatus
                });
                n && n.done(function() {
                    t("._MM_SUBSCRIBE_POST").attr("data-processed", null), s(), t.popup.toast(r.succ)
                }).fail(function(e, n, a) {
                    t.popup.toast(r.fail), o("[post recommend] subscribe api response error" + a)
                })
            }

            function s(e) {
                if (e || (e = a.getCurInfo().$element), e.find(".id_uio_cd_subscribe:not(._MM_MYFEED):not(._MM_GRAFOLIO_CREATOR) .ucs_tit_wrap a").css("display", ""), window.nmain.gv.isLogin) {
                    var n = [],
                        i = [];
                    e.find("._MM_SUBSCRIBE_POST").each(function(e, a) {
                        t(a).attr("data-authorno") && !t(a).attr("data-processed") && (n.push(t(a).attr("data-authorno")), t(a).attr("data-processed", "true"), i.push(t(a)))
                    }), 0 != n.length && t.ajax("/api_post/navermain/follow/checkFollowStatus.nhn", {
                        dataType: "jsonp",
                        jsonp: "_callback",
                        timeout: 5e3,
                        data: {
                            followType: "PERSON",
                            authorNoList: n.join(",")
                        },
                        success: function(e) {
                            "success" === e.resultStatus ? i.forEach(function(t) {
                                var n = t.attr("data-authorno"),
                                    a = !1;
                                e.result.authors.some(function(e) {
                                    var t = e.authorNo == n;
                                    return t && (a = e.isFollowed), t
                                });
                                var o = t.attr("data-class");
                                0 == a ? t.addClass(o).find("._MM_SUBSCRIBE_POST_BUTTON").show().end().find("._MM_SUBSCRIBE_POST_MORE").hide() : t.removeClass(o).find("._MM_SUBSCRIBE_POST_BUTTON").hide().end().find("._MM_SUBSCRIBE_POST_MORE").show()
                            }) : o("[ post recommend ] update result is not success, res = " + JSON.stringfy(e))
                        },
                        error: function(e, t, n) {
                            o("[ post recommend ] update result is not success, res = " + n)
                        }
                    })
                }
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", "._MM_SUBSCRIBE_POST_BUTTON", c), t("#ct").on("click", "._MM_SUBSCRIBE_MORE", s)
                },
                update: s
            }
        }).call(this, n("QFBpxR1d"))
    },
    PxOZqjlQ: function(e, t, n) {
        (function(t) {
            var a, o = n("f+aW8DC0"),
                i = !1,
                r = t('<div class="ly_fct_more_wrap MM_TODAY_MENU" style="display: block; z-index: 9999"><a href="#" data-action="move_to_top" class="lfm_a" data-clk="cardtop"><span class="lfm_ico ico_change"></span>맨위로 위치변경</a><a href="#" data-action="remove" class="lfm_a" data-clk="cardoff"><span class="lfm_ico ico_delete"></span>이카드 삭제</a><a href="#" data-action="edit" class="lfm_a" data-clk="cardadd"><span class="lfm_ico ico_add"></span>카드 추가 및 위치변경</a><a href="#" data-action="close" class="lfm_close"><span class="blind">닫기</span></a></div>');

            function c(e) {
                var n = t(e.target),
                    a = n.closest(".grid1").find(".MM_TODAY_MENU");
                a.length > 0 ? a.detach() : n.after(r), e.preventDefault()
            }

            function s(e) {
                var n = t(e.target),
                    i = n.closest(".grid1"),
                    r = i.find(".MM_TODAY_MENU"),
                    c = n.attr("data-action"),
                    s = i.find("[data-card-id]").attr("data-card-id"),
                    d = o.getMyCardIdList();
                switch (r.detach(), c) {
                    case "move_to_top":
                        d.splice(d.indexOf(s), 1), d.splice(0, 0, s), o.saveMyCardIdList(d), a.find(".grid1").first().before(i);
                        break;
                    case "remove":
                        d.splice(d.indexOf(s), 1), o.saveMyCardIdList(d), i.remove(), a.resize();
                        break;
                    case "edit":
                        setTimeout(function() {
                            location.href = "/settings/today/"
                        }, 250)
                }
                e.preventDefault()
            }
            e.exports = {
                check: function(e) {
                    "TODAY" !== e.code || i || (a = e.$element, n("F3CmUOk2").init(a), n("GSIIYAqa").init(a), n("7X7cpXTY").init(a), n("0XrWN3w/").init(a), n("4gsfEReV").init(a), n("E6d+oP6K").init(a), r.on("click", "[data-action]", s), a.on("click", "[data-card-id]", c), i = !0)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    REPuKaNG: function(e, t, n) {
        (function(e) {
            var t = n("xPZnxsY/"),
                a = {
                    itemSelector: ".panelArea"
                };

            function o(n, o) {
                var i = e.extend(o, a),
                    r = e(n),
                    c = null;

                function s(t, a) {
                    var o = !isNaN(parseInt(t, 10)),
                        i = t instanceof e && e.contains(n, t.get(0)),
                        r = t instanceof Element && e.contains(n, t);
                    o ? c.scrollTo(-parseInt(t, 10), 0, a) : i ? c.scrollToElement(t.get(0), a) : r && c.scrollToElement(t, a)
                }

                function d() {
                    var t = 0,
                        n = 0,
                        a = l();
                    if (r.hasClass("_MM_IRREGULAR_WIDTH")) a.each(function(a, o) {
                        var i = e(o);
                        t += parseInt(i.attr("data-width"), 10) || i.outerWidth() + parseInt(i.css("margin-left"), 10) + parseInt(i.css("margin-right"), 10), n = Math.max(parseInt(i.attr("data-height"), 10) || i.outerHeight(), n)
                    }), t += 1;
                    else {
                        var o = a.eq(0);
                        t = (parseInt(o.attr("data-width"), 10) || o.outerWidth()) * a.length, n = parseInt(o.attr("data-height"), 10) || o.outerHeight()
                    }
                    r.children().first().width(t).height(n)
                }

                function l() {
                    return r.find(i.itemSelector)
                }

                function u() {
                    r.children().first().width() > r.width() && r.trigger("innerTouchStart")
                }

                function _() {
                    r.trigger("innerTouchEnd")
                }
                d(), c = function() {
                        var e = new t(n, {
                            scrollX: !0,
                            scrollY: !1,
                            preventDefault: !1,
                            eventPassthrough: !0
                        });
                        return e.on("beforeScrollStart", u), e.on("scrollEnd", _), r.on("mouseup touchend", _), r.on("mousedown", "a", function(e) {
                            e.preventDefault()
                        }), r.on("click", "a", function(t) {
                            e.moved && (t.preventDefault(), t.stopPropagation())
                        }), r.get(0).addEventListener("touchstart", p), r.get(0).addEventListener("touchmove", h), e
                    }(),
                    function() {
                        var e = l(),
                            t = !!r.attr("data-random"),
                            n = parseInt(r.attr("data-scroll-pos"), 10),
                            a = parseInt(r.attr("data-scroll-pos-idx"), 10);
                        if (t) {
                            var o = Math.floor(Math.random() * e.length);
                            s(e.get(o))
                        } else isNaN(n) ? !isNaN(a) && a < e.length && s(e.get(a)) : s(-n)
                    }(), this.scrollTo = s, this.resize = function() {
                        d(), c.refresh()
                    }, this.on = function(e, t) {
                        c.on(e, t)
                    }, this.x = function() {
                        return c.x
                    }, this.maxScrollX = function() {
                        return c.maxScrollX
                    };
                var f = {
                    x: 0,
                    y: 0
                };

                function p(e) {
                    f.x = e.touches[0].pageX, f.y = e.touches[0].pageY
                }

                function h(e) {
                    return r.children().first().width() < r.width() ? f : (Math.abs(f.x - e.touches[0].pageX) > Math.abs(f.y - e.touches[0].pageY) && e.preventDefault(), f)
                }
            }
            e.fn.hscroll = function(t) {
                return this.map(function(n, a) {
                    var i = e(a);
                    return i.data("$$__NMAIN_HSCROLL__") instanceof o ? i.data("$$__NMAIN_HSCROLL__") : i.data("$$__NMAIN_HSCROLL__", new o(a, t))
                })
            }
        }).call(this, n("QFBpxR1d"))
    },
    ShD3JPAq: function(e, t, n) {
        (function(e) {
            var t = n("frQ1Xk3Y");

            function a(t) {
                var n = e(t.target),
                    a = c(n),
                    o = a.find("._MM_MORE_ITEM:hidden"),
                    i = n.attr("data-more-unit"),
                    r = o.slice(0, i);
                r.find("img.ondemand").removeClass("ondemand").loadImage(), r.show(), o.length <= i && (n.hide(), a.find("._MM_MORE_START_WRAP").hide(), a.find("._MM_MORE_END, ._MM_MORE_END_WRAP").show()), a.resize(), t.preventDefault(), t.stopPropagation()
            }

            function o(n) {
                var a = e(n.currentTarget),
                    o = c(a),
                    i = a.attr("data-url");
                return e.ajax({
                    url: i,
                    timeout: 5e3,
                    dataType: "html",
                    success: function(e) {
                        o.html(e).trigger("ajaxmoreloaded")
                    },
                    error: function(e) {
                        t("[common/nmain.ui.more] fail to ajax more. " + i + ". " + (e.status > 0 ? e.status : e.statusText))
                    }
                }), !1
            }

            function i(t) {
                var n = e(t.target),
                    a = c(n),
                    o = a.find("._MM_MORE_ITEM"),
                    i = n.attr("data-default-unit");
                o.slice(i).hide(), n.hide(), a.find("._MM_MORE_END_WRAP").hide(), a.find("._MM_MORE_START, ._MM_MORE_START_WRAP").show(), a.resize(), t.preventDefault()
            }

            function r(t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    a = c(n),
                    o = n.attr("data-more-toggle");
                a.toggleClass(o), a.find("._MM_MORE_ITEM").toggle()
            }

            function c(e) {
                var t = e.closest("._MM_MORE"),
                    n = t.find("._MM_MORE_TARGET");
                return n.length > 0 ? n : t
            }
            e.fn.more = function() {
                return this.each(function(t, n) {
                    var c = e(n);
                    c.data("$$__NMAIN_MORE__") || (c.on("click", "._MM_MORE [data-more-unit]", a).on("click", "._MM_MORE [data-ajax-unit]", o).on("click", "._MM_MORE [data-default-unit]", i).on("click", "._MM_MORE [data-more-toggle]", r), c.data("$$__NMAIN_MORE__", !0))
                })
            }
        }).call(this, n("QFBpxR1d"))
    },
    "SpK1u+uO": function(e, t, n) {
        (function(t) {
            var a = n("baMwVjn2"),
                o = n("frQ1Xk3Y"),
                i = !1,
                r = "",
                c = "._MM_kinquestion_textarea",
                s = "._MM_kinquestion_start",
                d = "._MM_kinquestion_input",
                l = "._MM_kinquestion_done",
                u = s + ", " + d + ", " + l;

            function _(e) {
                e.find(u).hide(), e.find(d).show()
            }

            function f(e) {
                var n = "현재 질문 등록이 어렵습니다.";
                switch (e) {
                    case 4e3:
                        n = "잘못된 접근입니다. 다시 시도해 주세요.";
                        break;
                    case 4001:
                        n = "질문 내용은 <span class='alt_name'>5자 이상</span> 입력해야 합니다.";
                        break;
                    case 4031:
                        n = "<span class='alt_name'>이용제한 중인 IP</span>로 질문할 수 없습니다.";
                        break;
                    case 4032:
                        n = "<span class='alt_name'>이용제한 중인 ID</span>로 질문할 수 없습니다.";
                        break;
                    case 4033:
                        n = "지식iN 등급별 등록 가능 질문 수를 초과하였습니다.";
                        break;
                    case 4034:
                        n = "지식iN  <span class='alt_name'>질문 마감률</span>이 낮아 질문할 수 없습니다.";
                        break;
                    case 4120:
                        n = "<span class='alt_name'>부적절한 키워드</span>가 포함되어 등록할 수 없습니다.";
                        break;
                    case 5030:
                        n = "죄송합니다. 현재 <span class='alt_name'>시스템 점검중</span>입니다."
                }
                t.popup.toast(n)
            }

            function p(e) {
                var n = t(e.currentTarget).closest("._MM_kinquestion_wrap");
                return r = "naver_" + a.getCurCode().toLowerCase(), i ? (_(n), !1) : (t.ajax({
                    url: "/api_kin/kin/v1/services/" + r + "/qna/dirs/0/docs/writable",
                    timeout: 3e3,
                    dataType: "json",
                    success: function(e) {
                        e.isWritable ? (i = !0, _(n)) : f(e.errorCode)
                    },
                    error: function(e) {
                        e.responseJSON && f(e.responseJSON.errorCode), o("[nmain.kin] ajax fail. check available. " + (e.status > 0 ? e.status : e.statusText))
                    }
                }), !1)
            }

            function h(e) {
                var n = t(e.currentTarget).closest("._MM_kinquestion_wrap");
                return n.find(u).hide(), n.find(s).show(), !1
            }

            function m(e) {
                var n = t(e.currentTarget).closest("._MM_kinquestion_wrap");
                return t.ajax({
                    url: "/api_kin/kin/v1/services/" + r + "/qna/dirs/0/docs",
                    timeout: 3e3,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    data: JSON.stringify({
                        contents: n.find(c).val()
                    }),
                    success: function() {
                        n.find(u).hide(), n.find(l).show()
                    },
                    error: function(e) {
                        e.responseJSON && f(e.responseJSON.errorCode), o("[nmain.kin] ajax fail. submit. " + (e.status > 0 ? e.status : e.statusText))
                    }
                }), !1
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", "._MM_kinquestion_question", p).on("click", "._MM_kinquestion_close", h).on("click", "._MM_kinquestion_submit", m)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    StP3R8nt: function(e, t, n) {
        (function(e) {
            e.fn.ondemandClick = function(t, n, a) {
                var o = this,
                    i = !1;
                return o.on("click", n, function r(c) {
                    return e.ajax({
                        url: t,
                        dataType: "script",
                        cache: !0,
                        success: function() {
                            o.off("click", n, r), "function" == typeof a && !1 === i && a(), i = !0, c.currentTarget.click()
                        }
                    }), !1
                }), o
            }
        }).call(this, n("QFBpxR1d"))
    },
    "T/3/M4c2": function(e, t, n) {
        (function(t) {
            var a, o = n("vvRPcpct"),
                i = n("Uh2+F60L"),
                r = n("HtyHKtC0"),
                c = n("ozsbSvXK"),
                s = n("NvzQef5B"),
                d = n("xJAwpQhn"),
                l = n("fcr6xQ7D"),
                u = n("zAloRAYX"),
                _ = n("z+gjgRDo"),
                f = n("KedLfa4B"),
                p = n("Z16Wmyu8"),
                h = n("I/sDg8Fb"),
                m = n("kLDOLPGr"),
                M = n("tqcQ3bAn"),
                v = n("5mF5OJJW"),
                g = n("91+Q4qDH"),
                T = n("flag3YBs"),
                E = n("gUV3XHOG"),
                C = n("FLlaIfTA"),
                O = window.nmain.gv,
                N = Number.NaN,
                A = {
                    onfocusFakeSearchBox: function() {
                        t("#query").focus()
                    }
                };
            c.setInitFn({
                code: "SEARCH",
                initFn: function(e) {
                    s.init(), g.init(e), T.init(e), p.init(), h.init(), m.init(), M.init(), C.init(e);
                    var n = t("#HOME_KEYWORDS_TREND_END_CLOSE");
                    n.length > 0 && n.on("click", function() {
                        n.remove(), o.remove("SHOW_ME_THE_KEYWORDS")
                    }), O.isApp ? (d.initInApp(), t(window).on("panelViewCenter", function() {
                        d.refreshInApp()
                    }).on("appmainload", function(e) {
                        if ("inapp-browser" == e.detail.from) {
                            var t = decodeURIComponent(e.detail.url || ""); - 1 != t.indexOf("m.naver.com/settings/shortcut") && d.refreshInApp(), -1 == t.indexOf("mail.naver.com") && -1 == t.indexOf("me.naver.com") && -1 == t.indexOf("note.naver.com") && -1 == t.indexOf("cafe.naver.com") && -1 == t.indexOf("talk.naver.com") || i.update()
                        }
                    }).on("asideClose", function(e) {
                        e.detail.favoritService && o.set("SVC_LIST", e.detail.favoritService, 1825), d.refreshInApp()
                    })) : (a = t("#sch_fake"), N = a.offset().top, t("#MM_SEARCH_FAKE").on("focus", A.onfocusFakeSearchBox), d.initInWeb(), l.init(), u.init(), f.init(), E.init(e), u.isSupported() || (a.find(".sch_w").addClass("region_triple"), a.find(".sch_inpw_in").append(r.getBtnHtml()))), _.show(), v.init();
                    try {
                        nmain.gv.isApp && window.inapphome && window.inapphome.sendLocationDiffLog && window.inapphome.sendLocationDiffLog(!1, 100)
                    } catch (e) {}
                }
            });
            var R = n("frQ1Xk3Y");
            c.setUpdateFn({
                code: "SEARCH",
                updateFn: function() {
                    try {
                        0 === t("#main_search_specialda_1").children().length && R("[DA] empty special da! : " + t("#main_search_specialda_1").html())
                    } catch (e) {}
                }
            }), e.exports = {
                getFakeSearchBoxTop: function() {
                    return N
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "Uh2+F60L": function(e, t, n) {
        (function(t) {
            var n = t({});
            e.exports = {
                update: function() {
                    if (window.nmain.gv.isLogin) return t.ajax({
                        url: "/preview/index.json",
                        timeout: 3e3,
                        data: {
                            bizTalk: "yes",
                            uid: parseInt(1e7 * Math.random())
                        },
                        dataType: "json",
                        success: function(e) {
                            if (e && "SUCCESS" == e.result) return e.data.talktalk = e.data.biztalk, n.trigger(t.Event("onUpdateSuccess", {
                                account: e.data
                            })), e.data
                        },
                        error: function(e) {
                            n.trigger(t.Event("onUpdateFail", {
                                status: e.status
                            }))
                        }
                    })
                },
                attach: function(e, t) {
                    n.on(e, t)
                },
                logout: function() {
                    confirm("로그아웃 하시겠습니까?") && location.replace("https://nid.naver.com/nidlogin.logout?svctype=262144&amp;url=" + encodeURIComponent(location.href))
                },
                login: function(e) {
                    e = e || {}, location.href = "https://nid.naver.com/nidlogin.login?svctype=262144" + (e.returnUrl ? "&url=" + encodeURIComponent(e.returnUrl) : "")
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "V+CVRE48": function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = "$$__QUIZ_INITIATED__",
                i = "MM_QUIZ_SOLVED_",
                r = ",",
                c = "._MM_QUIZ_ITEM, ._MM_QUIZ_QUESTION, ._MM_QUIZ_DESC, ._MM_QUIZ_MOVE_PREV, ._MM_QUIZ_MOVE_NEXT, ._MM_QUIZ_MOVE_AREA";

            function s(e) {
                var t = e.find("._MM_QUIZ_ITEM").hide(),
                    n = a.get(i + e.find("._MM_QUIZ_LIST").data("seq"));
                if (n && n.split(r).uniq().forEach(function(e) {
                        t.eq(e).removeClass("NOT_SOLVED")
                    }), !t.is(".NOT_SOLVED")) return e.find("._MM_QUIZ_FINISH").addBack().show(), void e.find("._MM_QUIZ_CURRENT").text(t.length);
                u(t.filter(".NOT_SOLVED").first().index(), e), e.show()
            }

            function d(e) {
                e.preventDefault();
                var n = t(e.currentTarget).closest("._MM_QUIZ_CONTAINER");
                u(n.find("._MM_QUIZ_CURRENT").text() - 1 + 1, n)
            }

            function l(e) {
                e.preventDefault();
                var n = t(e.currentTarget).closest("._MM_QUIZ_CONTAINER");
                u(n.find("._MM_QUIZ_CURRENT").text() - 1 - 1, n)
            }

            function u(e, t) {
                t.find(c).hide();
                var n = t.find("._MM_QUIZ_ITEM"),
                    a = n.length;
                if (a <= e) t.find("._MM_QUIZ_FINISH").show();
                else {
                    t.find("._MM_QUIZ_CURRENT").text(e + 1);
                    var o = n.eq(e);
                    o.hasClass("NOT_SOLVED") ? (o.find("._MM_QUIZ_QUESTION").addBack().show(), t.find("._MM_QUIZ_MOVE_AREA").show(), 0 != e && t.find("._MM_QUIZ_MOVE_PREV").show(), a != e + 1 && t.find("._MM_QUIZ_MOVE_NEXT").show()) : o.find("._MM_QUIZ_DESC").addBack().show()
                }
            }

            function _(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    o = "._MM_QUIZ_WRONG";
                n.data("correct") && (o = "._MM_QUIZ_CORRECT");
                var c = n.closest("._MM_QUIZ_CONTAINER"),
                    s = c.find("._MM_QUIZ_CURRENT").text() - 1,
                    d = c.find(o);
                d.show(), setTimeout(function() {
                    d.hide();
                    var e = n.closest("._MM_QUIZ_ITEM");
                    e.removeClass("NOT_SOLVED"), e.find("._MM_QUIZ_QUESTION").hide().end().find("._MM_QUIZ_DESC").show(), c.find("._MM_QUIZ_MOVE_AREA").hide()
                }, 1e3);
                var l = i + c.find("._MM_QUIZ_LIST").data("seq"),
                    u = a.get(l);
                u = null != u && "" != u ? u + r + s : s, a.set(l, u, {
                    expires: 1
                })
            }

            function f(e) {
                e.preventDefault();
                var n = t(e.currentTarget).closest("._MM_QUIZ_CONTAINER");
                n.find("._MM_QUIZ_ITEM").addClass("NOT_SOLVED").end().find("._MM_QUIZ_FINISH").hide(), a.remove(i + n.find("._MM_QUIZ_LIST").data("seq")), s(n)
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", "._MM_EXAMPLE", _).on("click", "._MM_QUIZ_MOVE_PREV", l).on("click", "._MM_QUIZ_MOVE_NEXT", d).on("click", "._MM_QUIZ_NEXT", d).on("click", "._MM_QUIZ_RETRY", f)
                },
                update: function(e) {
                    e.find("._MM_QUIZ_CONTAINER").each(function(e, n) {
                        var a = t(n);
                        !0 !== a.data(o) && (s(a), a.data(o, !0))
                    })
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    VCakpjM9: function(e, t, n) {
        (function(t) {
            var a, o, i, r, c = n("Zzo7p8aP");

            function s() {
                null != a && (a.resize(), a.drawData(function(e, t, n) {
                    if (e) {
                        var a = function(e, t, n) {
                            var a = n - (t - (i - e) / (i - r) * t);
                            return a = Math.min(a, n - 5), a = Math.max(a, 5)
                        }(e.temp, t, n);
                        return e.$e.find(".MM_TEMPERATURE_LABEL").css("top", a), a
                    }
                }, function(e, t, n, a, o, i, r) {
                    e.strokeStyle = "#c6c7ca", n && n.isSpeedForecast && (e.strokeStyle = "#43484b")
                }, function(e, t, n) {
                    e.strokeStyle = "#c6c7ca", n && t.isSpeedForecast && (e.strokeStyle = "#43484b"), e.fillStyle = "white"
                }))
            }
            e.exports = {
                init: function(e) {
                    var n = t(".MM_TEMPERATURE_GRAPH");
                    if (e || 0 != n.length && !n.data("__$CANVAS_INITED__")) {
                        var d, l = (o = t(".MM_TEMPERATURE .MM_TEMPERATURE_ITEM").map(function(e, n) {
                            var a = {
                                index: e,
                                hour: Number(t(n).attr("data-hour")),
                                temp: Number(t(n).attr("data-temperature")),
                                $e: t(n)
                            };
                            return d && 1 == Math.abs(a.hour - d.hour) && (d.isSpeedForecast = !0, a.isSpeedForecast = !0, d.$e.find(".MM_TEMPERATURE_LABEL").addClass("cwt_shortterm"), a.$e.find(".MM_TEMPERATURE_LABEL").addClass("cwt_shortterm")), d = a, a
                        }).toArray()).slice(0, window.innerWidth < 320 ? 6 : 8);
                        a = new c(n, {
                            data: l,
                            pointRadius: 2.5
                        }), i = l[0].temp, r = l[0].temp, t(l).each(function(e, t) {
                            i = Math.max(i, t.temp), r = Math.min(r, t.temp)
                        }), s(), n.data("__$CANVAS_INITED__", !0)
                    } else a = null
                },
                draw: s,
                onResize: function() {
                    if (a) {
                        var e = o.slice(0, window.innerWidth < 320 ? 6 : 8);
                        a = new c(t(".MM_TEMPERATURE_GRAPH"), {
                            data: e,
                            pointRadius: 2.5
                        }), i = e[0].temp, r = e[0].temp, t(e).each(function(e, t) {
                            i = Math.max(i, t.temp), r = Math.min(r, t.temp)
                        }), s()
                    }
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    W7kfDc5n: function(e, t, n) {
        (function(t, n) {
            var a = window.innerWidth;

            function o(e) {
                e = e || {}, this.OPTION = {
                    wrapSelector: e.wrapSelector || ".grid1_wrap",
                    vowelSelector: e.vowelSelector || ".brick-vowel",
                    brickSelector: e.brickSelection || ".grid1",
                    vowelCountCacheAttribute: e.vowelCountCacheAttribute || "data-vowel-size",
                    computeVowelCount: e.computeVowelCount || i
                }
            }

            function i() {
                return "IOS" === window.nmain.gv.osType && window.nmain.gv.isApp && window.nmain.gv.isInApp && !window.nmain.gv.isPad ? 1 : a < 640 ? 1 : a <= 1024 ? 2 : 3
            }
            t(window).resize(function(e) {
                e.target === window && (a = window.innerWidth)
            }), o.prototype.layout = function(e, a, o) {
                if (e) {
                    (a = a && 0 !== a.length ? a : []) instanceof n && (a = a.toArray());
                    var i = e.is(this.OPTION.wrapSelector) ? e : e.find(this.OPTION.wrapSelector),
                        r = i.find(this.OPTION.vowelSelector),
                        c = i.find(this.OPTION.brickSelector).length,
                        s = parseInt(i.attr(this.OPTION.vowelCountCacheAttribute), 10) || r.filter(function(e, n) {
                            return t(n).children().length > 0
                        }).length,
                        d = Math.min(this.OPTION.computeVowelCount(), r.length),
                        l = s != d;
                    if (c && d && (l || 0 !== a.length)) {
                        var u = this.getFlattenBrickList(i);
                        o instanceof n ? o = this.getCardOffset(o).index : "number" != typeof o && (o = u.length);
                        var _ = 0;
                        l || o !== u.length || (_ = o);
                        var f = u.slice(0, o),
                            p = u.slice(o);
                        u = f.concat(a).concat(p);
                        for (var h = _; h < u.length; h++) {
                            var m = h % d,
                                M = u[h];
                            r.eq(m).append(M)
                        }
                        i.attr(this.OPTION.vowelCountCacheAttribute, d)
                    }
                }
            }, o.prototype.getFlattenBrickList = function(e) {
                var n = e.find(this.OPTION.vowelSelector).map(function(e) {
                        return function(n, a) {
                            return t(a).find(e)
                        }
                    }(this.OPTION.brickSelector)),
                    a = e.find(this.OPTION.brickSelector).length,
                    o = n.filter(function(e, t) {
                        return t.length > 0
                    }).length;
                if (!a || !o) return [];
                for (var i = [], r = 0; r < a + 1; r++) {
                    var c = n.get(r % o).eq(Math.floor(r / o)).get(0);
                    c && i.push(c)
                }
                return i
            }, o.prototype.getCardOffset = function(e) {
                e.hasClass(this.OPTION.brickSelector) || (e = e.eq(0).closest(this.OPTION.brickSelector));
                var t = e.closest(this.OPTION.wrapSelector),
                    n = this.getFlattenBrickList(t),
                    a = t.find(this.OPTION.vowelSelector),
                    o = e.closest(this.OPTION.vowelSelector),
                    i = o.find(this.OPTION.brickSelector);
                return {
                    index: n.indexOf(e.get(0)),
                    vowel: a.index(o),
                    indexInVowel: i.index(e)
                }
            }, e.exports = o
        }).call(this, n("QFBpxR1d"), n("QFBpxR1d"))
    },
    XtWWKVGp: function(e, t, n) {
        (function(t) {
            n("baMwVjn2");
            var a, o = n("vvRPcpct"),
                i = (n("K0zMvcnj"), n("frQ1Xk3Y"), n("yNPIeKN9")),
                r = n("YgI2xh/a"),
                c = !1;

            function s(e) {
                o.set("MM_PAY_TOOLTIP", "Y", {
                    expires: 1
                })
            }

            function d(e) {
                e.preventDefault();
                var n = t(e.currentTarget).attr("data-floor-code"),
                    o = a.find("[data-floor='" + n + "']")[0].offsetTop - 20;
                a.scrollTo(o, 700)
            }

            function l(e) {
                e.preventDefault();
                var n = t(e.currentTarget);
                n.closest("#MM_STORE_LIST").find("li").each(function(e, n) {
                    t(n).show()
                }), n.hide(), n.next().css("display", "block")
            }

            function u(e) {
                e.preventDefault(), t("#MM_POINT_PLUS_PAY").toggleClass("csn_open")
            }
            e.exports = {
                init: function(e) {
                    c || (a = e, r.init(), i.init(a), a.on("click", ".MM_GO_FLOOR[data-floor-code]", d).on("click", "#MM_STORE_MORE", l).on("click", "._MM_POINT_PLUS_TOGGLE", u).on("click", "._MM_DAILY_COOKIE", s), c = !0)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    YXPuggvE: function(e, t, n) {
        (function(e, t) {
            var a = n("e9QBZxT+"),
                o = n("adHGn4eU"),
                i = n("frQ1Xk3Y"),
                r = n("1Fnl7I+q"),
                c = n("AZl0vAKZ"),
                s = n("baMwVjn2"),
                d = n("+wBTMN/I"),
                l = n("AOEo5Xn2"),
                u = n("6whQhhuA"),
                _ = n("ahM7uf/B"),
                f = n("Z16Wmyu8"),
                p = n("z+gjgRDo"),
                h = n("xJAwpQhn"),
                m = n("erV2gdow"),
                M = n("Uh2+F60L"),
                v = n("46FWNNQh")(),
                g = {
                    url: "/nvweather_mmap?path=include/grid/weatherBanner&fname=WEATHER_HOME&foreign_multi=Y",
                    timeout: 5e3,
                    dataType: "html"
                };
            window.nclk = e;
            var T, E = window.nmain.gv;

            function C(e) {
                e.search(/ERROR/) < 0 || s.getCurInfo(!0).done(function() {
                    _.changeWeatherHtml(e), f.refresh()
                })
            }
            E.support = {
                video: !0 !== ("android" === v.os.name && /^[0-7]\..*$/.test(v.os.version))
            }, window.nbp_corp_da.service.setHeight = function() {
                try {
                    s.getCurInfo().$element.resize()
                } catch (e) {}
            }, window.nbp_corp_da.service.getSectionName = function() {
                return s.getCurCode()
            }, window.callAvailableFunctionsBeforeOnload = function() {
                T || t.ajax(g).done(function(e) {
                    T = !0, C(e)
                }).fail(function(e, n) {
                    t.ajax(g).done(function(e) {
                        C(e), T = !0
                    }).fail(function(e, t) {
                        i("[nmain.weather.fromApp] failed ajax (status=" + t + " / code=" + e.status + ")")
                    })
                })
            }, window.naver.main.NaverApp = function() {
                function e(e) {
                    var t = JSON.parse(e),
                        n = {
                            act: "browsing"
                        };
                    if (!t || 0 === t.length) return n;

                    function a(e) {
                        return Object.keys(e).map(function(t) {
                            return t + ":" + e[t]
                        }).join(";")
                    }
                    n.count = t.length, window.naver.main.NaverApp.di = t[0].di || window.naver.main.NaverApp.di || "", n.di = window.naver.main.NaverApp.di;
                    var o = {},
                        i = {},
                        r = {},
                        c = {},
                        s = {};
                    for (var d in t) {
                        var l = t[d],
                            u = l.url.split("//")[1].split("/")[0];
                        o[u] = o[u] || 0, o[u]++;
                        var _ = l.network_type || "NONE";
                        i[_] = i[_] || 0, i[_]++;
                        var f = l.network_usage_app || 0,
                            p = l.network_usage_total || 0;
                        if (r[_] = r[_] || 0, r[_] += f, c[_] = c[_] || 0, c[_] += p, /^(([A-z0-9-]+\.)*(naver\.com|modoo\.at|grafolio\.(net|com)|vlive\.tv|pholar\.co|blog\.me)|naver\.me|band\.us|line\.me)$/.test(u)) {
                            var h = l.duration || 0;
                            s[u] = s[u] || 0, s[u] += h
                        }
                    }
                    return n.domain = a(o), n.network_type = a(i), n.network_usage_app = a(r), n.network_usage_total = a(c), n.duration = a(s), n
                }
                return {
                    notifyDAScroll: function(e) {
                        try {
                            window.naver_corp_da.webviewY = e;
                            var t = new Event("scroll");
                            window.dispatchEvent(t)
                        } catch (e) {
                            i("[nmain.global] native scroll event trigger fail. " + e)
                        }
                    },
                    setPaddingTop: function(e) {
                        t("#MM_PADDING_TOP").css("padding-top", e + "px")
                    },
                    setPaddingBottom: function(e) {
                        t("body").css("padding-bottom", e + "px")
                    },
                    notify: function(e, a) {
                        switch (e.toLowerCase()) {
                            case "pageshow":
                                try {
                                    var o = s.getCurCode(),
                                        i = JSON.parse(a);
                                    "ext" === i.from && (d.updatePanelCodeCache(), "TODAY" === o && n("K0zMvcnj").run(), t(window).trigger(t.Event("asideClose", {
                                        detail: i
                                    })))
                                } catch (e) {}
                        }
                    },
                    triggerSendShortcutData: function() {
                        m.sendToApp()
                    },
                    triggerSendHomeShortcutSelectedData: function() {
                        m.sendMyIdListToApp()
                    },
                    refreshHomeShortcut: function() {
                        h.refreshInApp(), M.update()
                    },
                    reload: function(e) {
                        "INAPP" !== e && "BG_FG" !== e || location.reload()
                    },
                    setBirthDayCover: function() {
                        var e = t("#mflick .id_search");
                        if (0 !== e.length && "undefined" != typeof inapphome && "function" == typeof inapphome.setBirthDayCover) {
                            var n = e.attr("data-birthday-search-border-color");
                            try {
                                inapphome.setBirthDayCover(JSON.stringify({
                                    isBirthDay: "Y" === e.attr("data-birthday"),
                                    name: E.nmUtf8,
                                    image3x: e.attr("data-birthday-img"),
                                    gif3x: "",
                                    gif2x: "",
                                    alt: "",
                                    searchBorderColor: n
                                }))
                            } catch (e) {
                                i("[nmain.global] inapphome.setBirthDayCover")
                            }
                        }
                    },
                    lcsDo: function(e, t) {
                        e.match(/MY[0-9]{1,}/g) && window.naver.main.LcsLog.lcsDo("OPENMAIN", t)
                    },
                    sendLogData: function(e) {
                        window.__bmrTime && (e.bm = window.__bmrTime), window.edgeIP && (e.edgeIP = window.edgeIP, e.firstEdgeIP = window.edgeIP.replace(/,.*/, "")), "undefined" != typeof performance && "object" == typeof performance.timing && t.extend(e, performance.timing), r.send("t", e)
                    },
                    notifyContextLog: function() {
                        if (void 0 !== window.mainHomeCuFeed) try {
                            var t = JSON.parse(window.mainHomeCuFeed.getContextLog("env", !0));
                            window.naver.main.NaverApp.di = t.di || window.naver.main.NaverApp.di || "", t.act = "env", r.send("ctx", t);
                            var n = e(window.mainHomeCuFeed.getContextLog("browsing", !0));
                            r.send("ctx", n)
                        } catch (e) {
                            i("[nmain.global] naver.main.NaverApp.notifyContextLog : " + e)
                        } else i("[nmain.global] mainHomeCuFeed is undefined")
                    },
                    addContextLog: function(t, n, a) {
                        try {
                            if ("env" === t) {
                                var o = JSON.parse(n);
                                window.naver.main.NaverApp.di = o.di || window.naver.main.NaverApp.di || "", o.act = "env", r.send("ctx", o)
                            }
                            if (a) {
                                if ("browsing" === t) {
                                    var c = e(n);
                                    r.send("ctx", c)
                                }
                                window.webkit.messageHandlers.QFeedFlushLog.postMessage("")
                            }
                        } catch (e) {
                            i("[nmain.global] naver.main.NaverApp.addContextLog : " + e)
                        }
                    },
                    getFavoriteMenu: function() {},
                    callHtmlLoadingFinished: function() {
                        i("[nmain.global] deprecated call - callHtmlLoadingFinished"), o.compareBSC({
                            android: 420
                        })
                    },
                    sendPreference: function() {
                        i("[nmain.global] deprecated call - sendPreference")
                    },
                    log: function() {
                        i("[nmain.global] deprecated call - log")
                    },
                    notifyAppEvent: function() {
                        i("[nmain.global] deprecated call - notifyAppEvent")
                    },
                    showSearchHomeToastBanner: function(e) {
                        switch (e) {
                            case "DUAL":
                                p.showDualToastBanner()
                        }
                    },
                    getTermsAgreement: function() {
                        return !!E.locAgreed
                    },
                    setFloatingButtonLocation: function(e) {
                        var n = t(".ccj_set_fixed");
                        if (n) {
                            var a = Number(n.css("bottom").replace("px", "")),
                                o = Number(n.attr("data-bottom"));
                            o || (n.attr("data-bottom", a), o = a);
                            var i = o + Number(e) + "px";
                            n.css("bottom", i)
                        }
                    },
                    getOverSeaToolShow: function() {
                        return f.isExposeToastBanner()
                    },
                    setStartHandoff: function() {
                        if (window.inapphome && window.inapphome.setStartHandoff) try {
                            var e = parseInt(E.age),
                                t = !1;
                            e < 20 && (t = !0), i("[SET_START_HANDOFF] age=" + e + ", isStart=" + t), inapphome.setStartHandoff(t)
                        } catch (e) {
                            i("[nmain.global] naver.main.NaverApp.setStartHandoff : " + e)
                        }
                    }
                }
            }(), window.naver.main.NaverApp.setBirthDayCover(), window.naver.main.NaverApp.setStartHandoff(), window.naver.main.gVariable = {
                bContentOnly: E.isApp
            }, window.naver.main.updateFontSize = function(e) {
                a.changeFont(e), t(s.getCurInfo().$element).find("._MM_HORIZONTAL_SCROLL").hscroll().each(function(e, t) {
                    t.resize()
                }), u.adjustFontButton()
            }, window.naver.main.LcsLog = {}, window.naver.main.LcsLog.lcsDo = function(e, t) {
                c.send(e, t)
            }, window.naverapp_cleanMenus = l.afterCleanForIos, window.naverapp_checkMenuOn = t.noop, window.naverapp_currentMenuList = window.naverapp_currentMenuList || t.noop
        }).call(this, n("C4iEnhWn"), n("QFBpxR1d"))
    },
    "YgI2xh/a": function(e, t, n) {
        (function(t) {
            var a = n("baMwVjn2"),
                o = n("K0zMvcnj"),
                i = n("frQ1Xk3Y"),
                r = n("vvRPcpct"),
                c = !1;

            function s(e) {
                e.preventDefault();
                var n = t(e.currentTarget).data("removeKey"),
                    a = t(e.currentTarget).data("removable"),
                    o = t(e.currentTarget).data("type");
                if (a) {
                    var r = "미노출 처리된 결제내역은 복구할 수 없습니다.<br>정말로 미노출 처리 하시겠습니까?";
                    "order" == o && (r = "해당 결제내역을 볼 수 없게 되며, 해당 구매 상품에 대해 리뷰를 작성하지 않으셨을 경우 더 이상 리뷰를 작성할 수 없습니다. <br>정말로 미노출 처리 하시겠습니까?"), t.popup.t10({
                        title: "주문내역 삭제",
                        msg: r,
                        ok: "확인",
                        cancel: "취소",
                        okCb: function() {
                            t.ajax("/fragment/commerce/shopOrderRemoveHistory.shtml", {
                                dataType: "json",
                                timeout: 5e3,
                                data: {
                                    removeKey: n
                                },
                                success: function(e) {
                                    e.success ? t.popup.t16({
                                        msg: e.message,
                                        okCb: function() {
                                            location.reload()
                                        }
                                    }) : (t.popup.t16({
                                        msg: e.message
                                    }), i("[shop order] 주문 내역 삭제, res = " + JSON.stringify(e)))
                                },
                                error: function(e, n, a) {
                                    t.popup.t16({
                                        msg: "주문내역 삭제에 실패하였습니다. 다시 시도해주세요."
                                    }), i("[shop order] 주문 내역 삭제 , res = " + a)
                                }
                            })
                        },
                        nclk: {
                            ok: "",
                            cancel: ""
                        }
                    })
                } else t.popup.t12({
                    msg: "구매확정 또는 취소/반품/교환 완료 후 주문내역 미노출 처리가 가능 합니다."
                })
            }

            function d(e) {
                e.preventDefault();
                var n = t(e.currentTarget).closest("._MM_SHOP_ORDER_CHARGE_TOOLTIP");
                r.set("MM_SHOP_ORDER_CHARGE_TOOLTIP", "1", {
                    expires: 1
                }), n.hide()
            }

            function l(e) {
                e.preventDefault(), nhn.mobile.launchApp(e.currentTarget)
            }

            function u(e) {
                e.preventDefault();
                var n = t(e.currentTarget);
                n.hide(), n.next().show(), n.closest(".cnh_condition_box").find("li.cnh_condition_item").show()
            }

            function _(e) {
                e.preventDefault();
                var n = e.target.value;
                t.ajax({
                    url: "/nvhaproxy_plus/commerce/shoporder/history/contents?filter=" + n,
                    timeout: 5e3,
                    dataType: "html",
                    success: function(e) {
                        "" != e ? function(e) {
                            t("#MM_HISTORY_FILTER_TEXT").first().text(t("#MM_HISTORY_FILTER option:checked").first().text()), t(".cnh_condition_box[data-tab=order]").replaceWith(e), t("#MM_ORDER_TAB_COUNT").first().text(t(".cnh_condition_box[data-tab=order]").attr("data-tab-size"))
                        }(e) : i("[nmain.shopOrder] onClickHistoryFilterChange - Filtered contents is empty.")
                    },
                    error: function() {
                        i("[nmain.shopOrder] onClickHistoryFilterChange - Filtered contents loading failure.")
                    }
                })
            }

            function f(e) {
                e.preventDefault(), t("#MM_POINT_PLUS").toggleClass("csn_open")
            }
            e.exports = {
                init: function() {
                    c || (function() {
                        var e = t("#ext_profile");
                        0 != e.length && "true" !== (e.attr("data-loaded") || "") && t.ajax({
                            url: "https://static.nid.naver.com/getProfile.nhn?svc=m_main_aside",
                            timeout: 5e3,
                            dataType: "jsonp",
                            callback: "callback",
                            data: {
                                uid: parseInt(1e7 * Math.random())
                            },
                            success: function(n) {
                                if ("Success" == n.rtn_msg) {
                                    if ("" != n.image_url) {
                                        var a = t("<img>").attr("src", n.image_url + "?type=s80").attr("width", "100%").attr("onerror", "this.outerHTML=''");
                                        e.html(a.prop("outerHTML")).attr("data-loaded", "true")
                                    }
                                } else i("[nmain.showOrder] showProfileImage: " + n.failType)
                            },
                            error: function(e, t, n) {
                                i("[nmain.shopOrder] getProfileImage: " + n)
                            }
                        })
                    }(), t(window).on("appmainload", function(e) {
                        if ("SHOP_ORDER" == a.getCurCode() && "inapp-browser" == e.detail.from) {
                            var t = decodeURIComponent(e.detail.url || ""); - 1 == t.indexOf("m.pay.naver.com/o/purchaseReview/") && -1 == t.indexOf("order.pay.naver.com/o/purchaseDecision/") && -1 == t.indexOf("m.pay.naver.com/o/purchaseDecision/orders/") && -1 == t.indexOf("shopping.naver.com/reviews/") && -1 == t.indexOf("m.pay.naver.com/npoint/pay/mobile/charge") && -1 == t.indexOf("m.pay.naver.com/send/m/account/selectBank") && -1 == t.indexOf("m.pay.naver.com/oclick") && -1 == t.indexOf("dbill.naver.com/build") || o.run()
                        }
                    }), t("#ct").on("click", "._MM_SHOPORDER_HISTORY_MORE", u), t("#ct").on("click", "._MM_QR_ORDER", l), t("#ct").on("click", "._MM_SHOP_ORDER_REMOVE_HISTORY", s), t("#ct").on("click", "._MM_SHOP_ORDER_CHARGE_TOOLTIP_CLOSE", d), t("#MM_HISTORY_FILTER").on("change", _), t("#MM_POINT_PLUS").on("click", "._MM_POINT_PLUS_TOGGLE", f), c = !0)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    YsFzcyw2: function(e, t, n) {
        (function(e) {
            n("/HgzRUyC"), n("+2sDQzTp"), n("zHqhTWUU"), n("SKzvqfhs"), n("OYS9GgiH"), n("icU1iw6Y"), n("/uehhxD5"), n("50F1XvmD"), n("9BNJYWJ+"), n("dmHbt6Xw"), n("seBZDTLQ"), n("StP3R8nt"), n("b/l8t8J6"), n("go+fg0F6"), n("BdTN1Wud"), n("i7fuE2jX"), n("REPuKaNG"), n("ZSh8K769"), n("68C+Ej/M"), n("Yy8xtyvU"), n("ShD3JPAq"), n("8XO2EsYf"), n("pF0hIjpg"), n("10ztHDB4"), n("T/3/M4c2"), n("s8gEYAJ4"), n("H60TeVA6"), n("g3OWnEks"), n("2y0RiEkK"), n("a08zWdQu"), n("Np7mytd0"), n("lMsB9/T3"), n("6lFuCf88"), n("e/HHx9+I"), n("YXPuggvE"), n("frQ1Xk3Y").setEnable(!0);
            var t = n("adHGn4eU"),
                a = n("AZl0vAKZ"),
                o = n("LfJdR/5p"),
                i = n("GKYnGYqr"),
                r = n("+wBTMN/I"),
                c = n("baMwVjn2"),
                s = n("24BoVec2"),
                d = n("cR2QioJP"),
                l = n("3ahMUZKY"),
                u = n("6whQhhuA"),
                _ = n("wT6xdWC1"),
                f = n("K0zMvcnj"),
                p = n("tiO0fkrE"),
                h = n("l6ioPQQn"),
                m = n("mWQXg0D3"),
                M = n("yJaq6oZv"),
                v = n("PoGrn8lT"),
                g = n("V+CVRE48"),
                T = n("g45UpFdn"),
                E = n("xHdGogJp"),
                C = n("ahM7uf/B"),
                O = n("mF8z463q"),
                N = n("SpK1u+uO"),
                A = n("nTaCWwD3"),
                R = n("PxOZqjlQ"),
                I = n("Zb9NOJlP"),
                S = n("ZYCMp4eD"),
                w = n("aiVRAQR7"),
                b = n("cP2zWeG1"),
                k = n("YgI2xh/a"),
                y = n("XtWWKVGp"),
                x = n("yNPIeKN9"),
                L = (y = n("XtWWKVGp"), n("OtOKt3QL")),
                D = n("GxWpU6kP"),
                P = n("1ka/hqZS"),
                F = n("frQ1Xk3Y"),
                B = n("eswtSY/X"),
                H = n("mdCbEu7W"),
                U = n("ozsbSvXK"),
                W = n("BcFwBpME"),
                G = n("IoKoYtxT"),
                j = n("zGVilkLJ"),
                Y = n("4CvozYHE"),
                V = n("d8PZHZa+");
            n("88XTqC5D"), e(window).on("appmainload", function(e) {
                var t = "";
                e && e.detail && (t = decodeURIComponent(e.detail.url || "")), (t.search("m.sports.naver.com/myteam/auth/index.nhn") > -1 || t.search("m.sports.naver.com/mysection/auth/index.nhn") > -1 || t.search("m.sports.naver.com/myteam/index.nhn") > -1 || t.search("m.sports.naver.com/myteam/auth/nvm/updateForNeedLogin.nhn") > -1) && f.run()
            }).on("load", function() {
                setTimeout(function() {
                    r.updatePanelCodeCache();
                    e("#ct").tab().fold().more().toggleLayer().toggleAttribute().randomRefresh().dataRefresh().paging().on("paging.beforeChange", function(e) {
                        e.$toContent.find("img.ondemand").removeClass("ondemand").loadImage().loadGifImage()
                    }).on("paging.afterChange", function(e) {
                        e.$content.find("._MM_HORIZONTAL_SCROLL").hscroll().each(function(e, t) {
                            t.resize()
                        }), e.$content.resize()
                    }).on("tab.beforeChange", function(t) {
                        t.$toContent.find("img.ondemand").filter(function(t, n) {
                            return 0 === e(n).parents("._MM_PAGING_CONT").length
                        }).removeClass("ondemand").loadImage().loadGifImage(), t.$toContent.eachPagingComponent(t.$toContent, function(e, t, n) {
                            n.find("img.ondemand").removeClass("ondemand").loadImage().loadGifImage()
                        }), t.$toContent.find("._MM_HORIZONTAL_SCROLL").hscroll().each(function(e, t) {
                            t.resize()
                        })
                    }).on("tab.afterChange", function(e) {
                        e.$content.find("._MM_HORIZONTAL_SCROLL").hscroll().each(function(e, t) {
                            t.resize()
                        }), e.$content.innerFlickingInit().loadImage().resize()
                    }).on("fold.after", function(e) {
                        e.$foldItem.find("img.ondemand").removeClass("ondemand").loadImage()
                    }), e(c).on("panelShow panelAppended", function(e) {
                        try {
                            a.send(e.code, {
                                isAppending: "panelAppended" === e.type
                            }), "panelAppended" === e.type && "NEWS_FEED" === e.subCode && (d.removeAdScript(), d.bind(e))
                        } catch (e) {
                            F("[index] fail to index.js panelshow handler")
                        }
                    }).on("panelChanged panelAppended", function(n) {
                        if (n.$element) {
                            if ("panelChanged" !== n.type || window.nmain.gv.isApp || (d.removeAdScript(), d.bind(n)), U.init(n), U.update(n), h.init(n), n.$element.eachTabComponent(n.$element, function(t, n, a) {
                                    a.find("img.ondemand").filter(function(t, n) {
                                        return 0 === e(n).parents("._MM_PAGING_CONT").length
                                    }).removeClass("ondemand").loadImage().loadGifImage()
                                }).rolling().innerFlickingInit().call(v.update).call(g.update).call(A.attachNewsFeedEvent(n)).call(A.onPanelChanged(n)).call(P.init(n)).call(B.check).call(H.check, n.code).loadImage(), window.nmain.gv.isApp || n.$element.loadGifImage(), setTimeout(function() {
                                    n.$element.find("._MM_HORIZONTAL_SCROLL").hscroll()
                                }, 0), l.check(n.code), S.check(n), R.check(n), C.checkScroll(n.code), "SEARCH" === n.code && C.init(n.$element), "SHOP_VOGUE" !== n.code && "SHOPPING" !== n.code || D.init(n), "BBOOM" === n.code && O.init(n.$element), "SHOP_RANK" === n.code && b.init(n.$element), "SHOP_FEED" === n.code && x.init(n.$element), "SHOP_ORDER" === n.code && k.init(), "SHOP_PAY" === n.code && y.init(n.$element), "SHOP_TODO" === n.code && L.init(n), "SHOP_SELECTIVE" !== n.code && G.offEvent(), "ENTER" === n.code && w.init(n), u.check(n), r.changeActive(n.code), E.refreshVideoSubscribeStatus(n.$element), setTimeout(function() {
                                    t.finishWebLoading(n.code)
                                }, 100), !window.nmain.gv.isApp) try {
                                j.attach(n)
                            } catch (e) {
                                F("[index] fail to attach recommend card")
                            }
                            try {
                                window.dispatchEvent(new Event("resize"))
                            } catch (e) {}
                            window.nmain.ImgWatcher && setTimeout(function() {
                                var e = window.nmain.ImgWatcher.getErrImgs();
                                e.length > 0 && e.length < 5 && window.nmain.ImgWatcher.clearErrImgs()
                            }, 1500)
                        }
                    }), e(document.body).on("innerTouchStart", function() {
                        "object" == typeof TEvent && "function" == typeof TEvent.touchStartEvent && TEvent.touchStartEvent()
                    }), e(window).on("panelViewCenter", function() {
                        r.updatePanelCodeCache(), c.getCurInfo(!0).then(function(e) {
                            e.$element.loadGifImage()
                        })
                    }), c.init(), o(e("body")), window.nmain.gv.isApp || (s.init(), _.init()), M.run(), d.setNappHomePadding(), u.init(), m.init(e("#mflick"), e(".eg-flick-container")), v.init(), T.init(), E.init(), g.init(), N.init(), A.init(), I.init(), C.resetCookie(), W.init(), V.init(), Y.init(), nmain.gv.nvpPlayable && p.attachVideoLink(document.getElementById("ct"), {
                        selector: '.MM_VIDEO, [data-video-nvpplayable="true"]',
                        onBeforeOpenPlayer: function(t, n) {
                            var a = c.getCurInfo();
                            a && (n.clickCode = a.getNclickCode()), n.url = e(n.target).attr("href")
                        },
                        onAfterOpenPlayer: function(e) {
                            e.preventDefault(), window.nmain.gv.willPlayNaverapp = !0
                        }
                    }), t.finishHtmlLoading(), i.send()
                }, 0)
            })
        }).call(this, n("QFBpxR1d"))
    },
    Yy8xtyvU: function(e, t, n) {
        (function(e) {
            var t = n("vvRPcpct");

            function a(n) {
                var a = e(n.target).hasClass("_MM_FOLD") ? e(n.target) : e(n.target).closest("._MM_FOLD"),
                    o = a.attr("data-other-button"),
                    i = a.attr("data-wrap") ? a.attr("data-wrap") : ".grid1",
                    r = a.attr("data-seq"),
                    c = r ? "MM_FOLD_" + r : "",
                    s = a.closest(i),
                    d = s.find("." + o),
                    l = null != a.attr("data-expire") ? parseFloat(a.attr("data-expire"), 10) : 1 / 24 / 60 * 10,
                    u = s.find("._MM_FOLD_ITEM"),
                    _ = s.find("._MM_FOLD");
                d.show(), u.toggle(), _.toggle(), c && (a.hasClass("_MM_FOLD_SET") ? t.set(c, "1", {
                    expires: l,
                    path: "/"
                }) : t.remove(c)), s.trigger(e.Event("fold.after", {
                    $wrap: s,
                    $fold: _,
                    $foldBtn: a,
                    $foldItem: u,
                    $otherBtn: d,
                    cookieName: c,
                    cookieExpire: l
                })), s.resize()
            }
            e.fn.fold = function() {
                return this.each(function(t, n) {
                    var o = e(n);
                    o.data("$$__NMAIN_FOLD_") || (o.on("click", "._MM_FOLD", a), o.data("$$__NMAIN_FOLD_", !0))
                })
            }
        }).call(this, n("QFBpxR1d"))
    },
    Z16Wmyu8: function(e, t, n) {
        (function(t, a) {
            var o, i, r, c, s = n("vvRPcpct"),
                d = n("oOU8Ku/P"),
                l = window.nmain.gv,
                u = n("adHGn4eU"),
                _ = n("baMwVjn2"),
                f = n("frQ1Xk3Y"),
                p = n("cQz4uzJ+").papagoLanguage,
                h = 1e3,
                m = -540,
                M = ["일", "월", "화", "수", "목", "금", "토"],
                v = "MM_COUNTRY_TB_UNFOLD",
                g = "MM_TB_BANNER_EXPOSURE",
                T = "MM_LAST_ACCESS_IN_DOMESTIC",
                E = "KRW",
                C = "#HOME_FLOATING_TOOLBOX_BANNER",
                O = "&version=1.1.14",
                N = "&version=1.2.1",
                A = "#select_source_lang",
                R = "#select_target_lang",
                I = "#select_source_langname",
                S = "#select_target_langname",
                w = "#origin_text_area",
                b = ".ct_btn_translate",
                k = "#source_text_sound_btn",
                y = "#target_text_sound_btn",
                x = "#source_diction_area",
                L = "#trans_text_area",
                D = "#trans_diction_area",
                P = "#source_lang_wrap",
                F = "#target_lang_wrap",
                B = ".cft_translator_wrap",
                H = "cft_focus",
                U = "cft_write",
                W = "cft_complete",
                G = "cft_exception",
                j = "data-pronounce-sound",
                Y = "data-conversation-idx";

            function V() {
                r && r.off(), c && c.off(), r = i.find("#MM_COUNTRY_PAPAGO"), 0 === (c = t("#HOME_FLOATING_TOOLBOX_LONG_TEXT_LAYER")).length && (c = t("#HOME_FLOATING_TOOLBOX_LONG_TEXT_ALERT")), r.on("click", A + "," + R, $).on("blur", A + "," + R, K).on("change", A, Q).on("change", R, z).on("click", ".ct_btn_refresh", X).on("click", ".ct_btn_delete", q).on("click", "#trans_language_swtich", J).on("focus", w, Z).on("input", w, ee).on("click", b, te).on("click", b, function(e) {
                    a(e.currentTarget, "home.overltranslate", "", "")
                }).on("click", k, ne).on("click", y, ae).on("click", "#source_text_clipboard_btn", oe).on("click", "#target_text_clipboard_btn", ie), c.on("click", ".ct_ly_close", re).on("click", ".alt_btn_close", re), r.find(A).empty(), r.find(R).empty(), Object.keys(p).forEach(function(e) {
                    var t = p[e],
                        n = '<option value="' + t.code + '" data-clkcode="home.overlleft' + t.clkcode + '">' + t.name + "</option>",
                        a = '<option value="' + t.code + '" data-clkcode="home.overlright' + t.clkcode + '">' + t.name + "</option>";
                    r.find(A).append(n), r.find(R).append(a)
                });
                var e = r.find(R).attr("data-init-langcode");
                p[e] || (e = "en"), r.find(A + " option[value=ko]").attr("selected", "selected"), r.find(R + " option[value=" + e + "]").attr("selected", "selected"), de(), t.ajax("/nvhaproxy_plus/home/api/countrytoolbox/globalPronounce", {
                    timeout: 3e3
                }).then(function(e) {
                    var t = JSON.parse(e || null);
                    t && (Object.keys(t).forEach(function(e) {
                        var n = p[e],
                            a = t[e];
                        if (a.length > 0) {
                            var o = r.attr(Y),
                                i = a.length - 1;
                            o = Math.min(i, o);
                            var c = a[o];
                            a.splice(o, 1), (a = a.shuffle()).splice(0, 0, c)
                        }
                        n.conversationList = a
                    }), r.attr(Y, 0))
                }), ue()
            }

            function $(e) {
                t(e.currentTarget).toggleClass("clicked")
            }

            function K(e) {
                t(e.currentTarget).removeClass("clicked")
            }

            function Q(e) {
                t(e.currentTarget).removeClass("clicked");
                var n = t(e.currentTarget).find("option:selected"),
                    o = n.val(),
                    i = p[o];
                r.find(I).html(i.name), r.find(x).html(""), a(e.currentTarget, n.attr("data-clkcode"), "", ""), de(), Me() ? le() : ge() ? (he(), _e(), ue()) : (Te(), he(H), le())
            }

            function z(e) {
                t(e.currentTarget).removeClass("clicked");
                var n = t(e.currentTarget).find("option:selected"),
                    o = n.val(),
                    i = p[o];
                r.find(S).html(i.name), a(e.currentTarget, n.attr("data-clkcode"), "", ""), de(), Me() ? (le(), te()) : ge() ? (he(), _e(), ue()) : (Te(), he(H), le()), me()
            }

            function X() {
                _e()
            }

            function q() {
                he(H), r.find(P).removeClass("sound_on"), r.find(F).removeClass("sound_on"), r.find(b).attr("disabled", "disabled"), r.find(w).val("").focus(), r.find(x).html(""), ce()
            }

            function J() {
                var e = r.find(A).val(),
                    t = r.find(R).val();
                r.find(A + " option").removeAttr("selected").removeAttr("disabled"), r.find(R + " option").removeAttr("selected").removeAttr("disabled");
                var n = r.find(A).val(t).find("option[value=" + t + "]").attr("selected", "selected").html(),
                    a = r.find(R).val(e).find("option[value=" + e + "]").attr("selected", "selected").html();
                if (r.find(I).html(n), r.find(S).html(a), de(), r.find(B).hasClass(W)) {
                    var o = r.find(w).val(),
                        i = r.find(L).html(),
                        c = r.find(x).html(),
                        s = r.find(D).html();
                    i.length > 200 && (i = i.substring(0, 200)), r.find(w).val(i), r.find(L).html(o), r.find(x).html(s), r.find(D).html(c), ce()
                }
                0 == Me() && ge() ? (_e(), he()) : 0 == Me() && (Te(), he(H)), me()
            }

            function Z(e) {
                ve() && (Te(), he(H)), le()
            }

            function ee() {
                "" === r.find(w).val() ? (he(H), r.find(b).attr("disabled", "disabled")) : (he(U), r.find(b).removeAttr("disabled")), ce(), r.find(x).html("")
            }

            function te() {
                r.find(b).attr("disabled", "disabled"), r.find(L).html(""), r.find(D).html("");
                var e = r.find(A).val(),
                    n = r.find(R).val(),
                    a = r.find(w).val(),
                    o = "withTlit=" + p[n].pronounce.text + "&source=" + e + "&target=" + n + "&text=" + encodeURIComponent(a);
                t.ajax("/nvhaproxy_plus/home/api/countrytoolbox/translate?" + o, {
                    timeout: 3e3
                }).then(function(e) {
                    var t = JSON.parse(e || null);
                    if (!t || !t.success) return r.find(b).removeAttr("disabled"), void alert("네트워크 오류로 번역에 실패하였습니다.\n다시 시도해주세요.");
                    he(W), r.find(L).html(t.translatedText), r.find(D).html(t.tlitText)
                })
            }

            function ne(e) {
                var t = r.find(A).val(),
                    n = p[t];
                r.find(b).attr("disabled") || (r.find(b).attr("disabled", "disabled"), te());
                var o = n.pronounce.soundSpeaker,
                    i = r.find(w).val();
                n.pronounce.soundGoPapago ? confirm("해당 언어의 발음 듣기는\n파파고에서 지원하는 기능입니다.\n파파고로 이동하시겠습니까?") ? (a(e.currentTarget, "home.overlgopapagorestricted", "", ""), location.href = se()) : a(e.currentTarget, "home.overlgopapagorestrictedclose", "", "") : Ee(o, i) && r.find(P).addClass("sound_on")
            }

            function ae(e) {
                var t = r.find(R).val(),
                    n = p[t],
                    o = n.pronounce.soundSpeaker,
                    i = r.find(L).html(),
                    c = !1;
                if (ve()) {
                    var s = r.find(L).attr(j);
                    c = Ce("/nvhaproxy_plus/home/api/countrytoolbox/conversation/mp3?mp3FilePath=" + encodeURIComponent(s))
                } else {
                    if (n.pronounce.soundGoPapago) return void(confirm("해당 언어의 발음 듣기는\n파파고에서 지원하는 기능입니다.\n파파고로 이동하시겠습니까?") ? (a(e.currentTarget, "home.overlgopapagorestricted", "", ""), location.href = se()) : a(e.currentTarget, "home.overlgopapagorestrictedclose", "", ""));
                    c = Ee(o, i)
                }
                c && r.find(F).addClass("sound_on")
            }

            function oe() {
                r.find(b).attr("disabled") || te(), r.find(b).attr("disabled", "disabled"), pe(r.find(w).val()), r.find(P).addClass("copy_on"), setTimeout(function() {
                    r.find(P).removeClass("copy_on")
                }, 1e3)
            }

            function ie() {
                pe(r.find(L).html()), r.find(F).addClass("copy_on"), setTimeout(function() {
                    r.find(F).removeClass("copy_on")
                }, 1e3)
            }

            function re() {
                c.hide()
            }

            function ce() {
                var e = r.find(w);
                e.val().length >= 200 && (c.find("a.alt_link").attr("href", se()), c.find("a.ct_ly_link").attr("href", se()), c.show()), e.css("overflow", "hidden"), e[0].style.height = "1px";
                var t = 26 + e[0].scrollHeight;
                t > 156 && (t = 156), e[0].style.height = t + "px", e.css("overflow", "")
            }

            function se() {
                var e = r.find(A).val(),
                    t = r.find(R).val(),
                    n = r.find(w).val();
                return "https://papago.naver.com?sk=" + e + "&tk=" + t + "&st=" + encodeURIComponent(n)
            }

            function de() {
                var e = r.find(A).val(),
                    t = r.find(R).val();
                r.find(A + " option").removeAttr("disabled"), r.find(R + " option").removeAttr("disabled"), r.find(A + " option[value=" + t + "]").attr("disabled", "disabled"), r.find(R + " option[value=" + e + "]").attr("disabled", "disabled");
                var n = p[e];
                $voice = r.find(".ct_btn_voice"), $lens = r.find(".ct_btn_lens"), !n.voice || "IOS" !== l.osType && "ANDROID" !== l.osType ? $voice.addClass("ct_dimmed").attr("disabled", "disabled") : $voice.removeClass("ct_dimmed").removeAttr("disabled"), !n.ocr || "IOS" !== l.osType && "ANDROID" !== l.osType ? $lens.addClass("ct_dimmed").attr("disabled", "disabled") : $lens.removeClass("ct_dimmed").removeAttr("disabled");
                var a = "site.voice?sourceLang=" + e + "&targetLang=" + t;
                $voice.attr("data-ios-query", a + N).attr("data-android-query", a + O).attr("data-ios-universal-fullurl", fe("voice", e, t));
                var o = "site.ocr?sourceLang=" + e + "&targetLang=" + t;
                $lens.attr("data-ios-query", o + N).attr("data-android-query", o + O).attr("data-ios-universal-fullurl", fe("ocr", e, t))
            }

            function le() {
                var e = r.find(A).val(),
                    t = r.find(R).val();
                p[e].pronounce.sound && window.HTMLAudioElement ? r.find(k).removeClass("ct_dimmed").removeAttr("disabled") : r.find(k).addClass("ct_dimmed").attr("disabled", "disabled"), p[t].pronounce.sound && window.HTMLAudioElement ? r.find(y).removeClass("ct_dimmed").removeAttr("disabled") : r.find(y).addClass("ct_dimmed").attr("disabled", "disabled")
            }

            function ue() {
                window.HTMLAudioElement && (r.find(k).removeClass("ct_dimmed").removeAttr("disabled"), r.find(y).removeClass("ct_dimmed").removeAttr("disabled"))
            }

            function _e() {
                var e = r.find(R).val(),
                    t = p[e].conversationList,
                    n = r.attr(Y) || -1;
                (n = parseInt(n) + 1) >= t.length && (n = 0), r.attr(Y, n);
                var a = t[n];
                r.find(w).val(a.koText), r.find(L).html(a.transText), r.find(L).attr(j, a.transPronounceSound), r.find(D).html(a.transPronounceText)
            }

            function fe(e, t, n) {
                return "https://cont-papago.naver.com/universallink?site=" + e + "&sourceLang=" + t + "&targetLang=" + n + ("IOS" == window.nmain.gv.osType ? N : O)
            }

            function pe(e) {
                t("#copy_textinput").attr("type", "text").val(e);
                var n = document.getElementById("copy_textinput");
                if ("IOS" === l.osType) {
                    var a = n.contentEditable,
                        o = n.readOnly;
                    n.contentEditable = !0, n.readOnly = !0;
                    var i = document.createRange();
                    i.selectNodeContents(n);
                    var r = window.getSelection();
                    r.removeAllRanges(), r.addRange(i), n.setSelectionRange(0, 999999), n.contentEditable = a, n.readOnly = o
                } else n.select();
                document.execCommand("copy"), n.blur(), t("#copy_textinput").attr("type", "hidden"), t("#HOME_FLOATING_TOOLBOX_COPY_TEXT").show().fadeOut(2e3)
            }

            function he(e) {
                r.find(B).removeClass(U).removeClass(H).removeClass(W), e && r.find(B).addClass(e), me()
            }

            function me() {
                "ko" === r.find(R).val() ? r.find(B).addClass(G) : r.find(B).removeClass(G)
            }

            function Me() {
                return r.find(w).val().length > 0 && !ve()
            }

            function ve() {
                return !!r.attr(Y)
            }

            function ge() {
                var e = r.find(A).val(),
                    t = r.find(R).val();
                return "ko" === e && p[t].conversationList.length > 0
            }

            function Te() {
                r.removeAttr(Y), r.find(w).val(""), r.find(x).html(""), r.find(L).html(""), r.find(D).html("")
            }

            function Ee(e, t) {
                return Ce("/nvhaproxy_plus/home/api/countrytoolbox/make/ttsid?" + ("speaker=" + e + "&text=" + encodeURIComponent(t)))
            }

            function Ce(e) {
                if (r.find("#textSoundAudio").length > 0) return !1;
                var n = document.createElement("audio");
                return n.id = "textSoundAudio", n.src = e, n.type = "audio/mpeg", t(n).on("ended error", function() {
                    r.find(P).removeClass("sound_on"), r.find(F).removeClass("sound_on"), t(this).remove()
                }), r.append(n), n.play(), !0
            }

            function Oe(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.closest(".grid1").find(".cft_tool_wrap"),
                    r = i.find(".cui_foreign_toolbox");
                "true" === n.attr("data-unfold") ? (s.set(v, "2", {
                    expires: 365
                }), n.attr("data-clk", "overseasclose").attr("data-unfold", "false").attr("aria-expanded", "false"), r.attr("aria-expanded", "false").addClass("cui_card_fold"), a.hide(), o && clearInterval(o)) : (s.remove(v), Ne(), n.attr("data-clk", "overseasopen").attr("data-unfold", "true").attr("aria-expanded", "true"), r.attr("aria-expanded", "true").removeClass("cui_card_fold"), setTimeout(function() {
                    a.show()
                }, 300))
            }

            function Ne() {
                o = setInterval(function() {
                    ! function() {
                        var e, t = i.find(".ctd_nation"),
                            n = t.first(),
                            a = t.last(),
                            o = new Date,
                            r = o.getTimezoneOffset(),
                            c = o.getTime();
                        if (m == r) {
                            e = new Date;
                            var s = t.parent().attr("data-timeDiff");
                            0 !== s && (c = e.getTime() + 60 * s * 1e3, o = new Date(c))
                        } else {
                            var d = m - r,
                                l = c - 60 * d * 1e3;
                            e = new Date(l)
                        }
                        Ae(o, n), Ae(e, a)
                    }()
                }, h)
            }

            function Ae(e, t) {
                var n = e.getHours(),
                    a = e.getMinutes(),
                    o = n >= 12 ? "PM" : "AM",
                    i = n % 12 * 30 + .5 * a,
                    r = 6 * a,
                    c = parseInt(t.attr("data-sunrise")),
                    s = parseInt(t.attr("data-sunset")),
                    d = 60 * n + a;
                c <= d && d < s ? t.find(".ctd_clock").removeClass("ctd_night") : t.find(".ctd_clock").addClass("ctd_night"), 0 == (n = n > 12 ? n - 12 : n) && (n = "12");
                var l = (n < 10 ? "0" : "") + n;
                l += (a < 10 ? ":0" : ":") + a;
                var u = e.getMonth() + 1 + ". ";
                u += e.getDate() + "  ", u += M[e.getDay()] + "요일", Re(t.find(".hour"), i), Re(t.find(".minute"), r), t.find(".time").text(l), t.find(".meridiem").text(o), t.find(".date").text(u)
            }

            function Re(e, t) {
                t > 180 ? e.addClass("shadow") : e.removeClass("shadow"), e.css("transform", "rotate(" + t + "deg)").css("-webkit-transform", "rotate(" + t + "deg)")
            }

            function Ie(e) {
                if (!l.isInApp || "ANDROID" !== l.osType) {
                    var n = t(e.currentTarget);
                    "true" === (n.attr("data-open") || "false") ? n.removeClass("clicked").attr("data-open", "false"): n.addClass("clicked").attr("data-open", "true")
                }
            }

            function Se(e) {
                t(e.currentTarget).removeClass("clicked").attr("data-open", "false")
            }

            function we(e) {
                e.preventDefault(), l.isInApp && "IOS" === l.osType && Se(e);
                var n = t(e.currentTarget).find("option:selected"),
                    a = n.attr("data-hname"),
                    o = n.attr("data-unit"),
                    i = n.attr("data-standard"),
                    r = n.attr("data-currencyCode"),
                    c = n.attr("data-displayName"),
                    s = n.attr("data-clk-postfix"),
                    d = "ce_ico_flag ce_" + r.toLowerCase(),
                    u = n.closest(".ce_country"),
                    _ = u.attr("data-position");
                u.find(".select_item").find(".select_txt").html(a + '<em class="ce_unit">' + r + "</em>"), u.find(":text").attr("value", o).attr("data-unit", o).attr("data-standard", i).attr("data-currencyCode", r).end().find(".unit").text(c).end().find(".select_bx").attr("data-clk", "over" + _ + s), void 0 != u.find(".ce_ico_flag").get(0) && (u.find(".ce_ico_flag").get(0).className = d), ke(e, !0)
            }

            function be(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.val();
                if ("" === a) return n.val(0), void ke(e, !1);
                /\.$/.test(a) || /\.0+$/.test(a) || (n.val(a.replace(/[^0-9|.]/gi, "")), ke(e, !1))
            }

            function ke(e, n) {
                e.preventDefault();
                var a = t(e.currentTarget).closest(".ce_country"),
                    o = a.attr("data-position"),
                    i = a.find(":text"),
                    r = i.attr("data-standard"),
                    c = i.attr("data-unit"),
                    s = i.attr("data-currencyCode"),
                    d = n ? c : i.val(),
                    l = a.closest(".cft_exchange"),
                    u = ("left" === o ? l.find("[data-position='right']") : l.find("[data-position='left']")).find(":text"),
                    _ = u.attr("data-unit"),
                    f = u.attr("data-standard"),
                    p = u.attr("data-currencyCode"),
                    h = 0,
                    m = 0;
                if (s === p ? m = d : s === E ? (h = d, m = parseFloat(h / (f / _)).toFixed(2)) : p === E ? m = h = parseFloat(d * (r / c)).toFixed(2) : (h = (d * parseFloat(r / c)).toFixed(2), m = parseFloat(h / (f / _)).toFixed(2)), !1 === t.isNumeric(d) || !1 === t.isNumeric(m)) return i.val(0), void u.val(0);
                i.val(Number(d).toCommaFormat()), u.val(Number(m).toCommaFormat())
            }

            function ye() {
                d.set(T, "1", 365), s.remove(g), s.remove(v)
            }

            function xe(e) {
                e.preventDefault(), a(e.currentTarget, "home.overseasinfo", "", ""), !1 === i.find(".cft_tool_wrap").is(":visible") && i.find("._MM_TOOLBOX_OPEN").trigger("click");
                var n = i.offset().top,
                    o = 112;
                l.isApp && (o = "ANDROID" === l.osType ? 83 : 75), t.fn.scrollTo(n - o), De()
            }

            function Le() {
                t(window).scrollTop() <= 5 || De()
            }

            function De() {
                var e = t(C);
                0 !== e.length && (e.hide(), t(window).off("scroll", Le))
            }

            function Pe(e) {
                return !/^WD.+/.test(e)
            }
            e.exports = {
                init: function() {
                    0 != (i = t("#MM_COUNTRY_TOOLBOX")).length && (i.on("click", "._MM_TOOLBOX_OPEN", Oe).on("click", "._MM_TOOLBOX_CURRENCY_SELECT", Ie).on("blur", "._MM_TOOLBOX_CURRENCY_SELECT", Se).on("change", "._MM_TOOLBOX_CURRENCY_SELECT", we).on("keyup", "._MM_TOOLBOX_CURRENCY_INPUT", be), !0 === i.find(".cft_tool_wrap").is(":visible") && Ne(), V())
                },
                update: function() {
                    if (i && 0 != i.length && "SEARCH" === _.getCurInfo().code)
                        if (0 !== i.length || Pe(l.regionCode)) {
                            if (0 !== i.length) return Pe(l.regionCode) ? (i.html(""), void i.hide()) : void t.ajax("/nvhaproxy_plus/content/template/home-country-toolbox?rcode=" + l.regionCode).done(function(e) {
                                e && (i.html(e), V())
                            }).fail(function(e) {
                                f("[toolbox] updateToolBox  : " + e)
                            })
                        } else location.reload()
                },
                refresh: function() {
                    "SEARCH" === _.getCurInfo().code && (Pe(l.regionCode) ? ye() : location.reload())
                },
                isExposeToastBanner: function() {
                    var e = t(C);
                    return 0 !== e.length && e.is(":visible")
                },
                showToastBanner: function() {
                    return function() {
                        if (!i || 0 == i.length) return !1;
                        if (t(window).scrollTop() > 5) return !1;
                        if (0 === i.find(".cui_foreign_toolbox").length) return !1;
                        if (0 === t(C).length) return !1;
                        if (l.isInApp && "IOS" === l.osType && u.compareBSC({
                                iphone: 620
                            }) < 0) return !1;
                        if (1 === (s.get(g) || 0)) return !1;
                        var e = d.pop(T) || "0";
                        return !Pe(l.regionCode) && "1" === e
                    }() ? (d.set(T, "0", 365), function() {
                        var e = t(C);
                        window.inapphome && window.inapphome.alarmNudgeHandler && window.inapphome.alarmNudgeHandler(!0), t.ajax({
                            url: "/nvhaproxy_plus/home/countryInfo?rcode=" + l.regionCode,
                            timeout: 3e3,
                            dataType: "json"
                        }).done(function(n) {
                            var a = !t.isEmptyObject(n);
                            if (a && "" !== n) {
                                var o = n.toastFlagImage,
                                    i = n.countryName,
                                    r = '<p class="alt_msg">지금 <img src="' + o + '" width="19" alt="" class="alt_flag"><span class="alt_name">' + i + "</span>에 계신가요?</p>";
                                e.html(r), e.show()
                            } else e.show();
                            e.on("click", xe), s.set(g, "1", {
                                expires: 365
                            }), t(window).on("scroll", Le), t(_).on("panelChanged", De)
                        }).fail(function() {
                            e.show()
                        })
                    }(), !0) : (Pe(l.regionCode) && ye(), !1)
                },
                hideToastBanner: De
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    ZSh8K769: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e.find("[data-tab-nav]").not(e.find("._MM_TAB [data-tab-nav]"))
            }

            function n(n, a) {
                var o = n.attr("data-nav-on-class");
                t(n).removeClass(o).attr({
                    "aria-selected": "false"
                }), n.find("[data-tab-nav=" + a + "]").addClass(o).attr({
                    "aria-selected": "true"
                }), setTimeout(function() {
                    (function(e) {
                        return e.find("[data-tab-contents]").not(e.find("._MM_TAB [data-tab-contents]"))
                    })(n).hide();
                    var t = n.find("[data-tab-contents=" + a + "]");
                    t.show(), n.trigger(e.Event("tab.afterChange", {
                        contentId: a,
                        $wrap: n,
                        $content: t
                    }))
                }, 100)
            }

            function a(a) {
                var o = a.closest("._MM_TAB"),
                    i = o.attr("data-nav-on-class"),
                    r = t(o),
                    c = (i ? r.filter("." + i) : r.filter("[aria-selected=true]")).attr("data-tab-nav"),
                    s = o.find("[data-tab-contents='" + c + "']"),
                    d = a.attr("data-tab-nav"),
                    l = o.find("[data-tab-contents='" + d + "']");
                o.trigger(e.Event("tab.beforeChange", {
                    toContentId: d,
                    $wrap: o,
                    $content: s,
                    $toContent: l
                }));
                var u = l.attr("data-tab-ajax-url");
                u ? e.ajax(u, {
                    timeout: 3e3
                }).done(function(e) {
                    l.html(e.toString()).attr("data-tab-ajax-url", null), n(o, d)
                }).fail(function() {
                    o.trigger(e.Event("tab.ajaxfail", {
                        contentId: d,
                        $wrap: o,
                        $content: l
                    })), n(o, d)
                }) : n(o, d)
            }

            function o(t) {
                var n = e(t.target);
                n.attr("data-tab-nav") || (n = n.closest("[data-tab-nav]")), a(n), t.preventDefault()
            }
            e.fn.eachTabComponent = function(n, a) {
                return n.find("._MM_TAB").each(function(n, o) {
                    var i = e(o),
                        r = t(i),
                        c = i.attr("data-nav-on-class"),
                        s = c ? r.filter("." + c) : r.filter("[aria-selected='true']"),
                        d = i.find("[data-tab-contents='" + s.attr("data-tab-nav") + "']");
                    a(i, s, d)
                }), this
            }, e.fn.tab = function() {
                return this.each(function(t, n) {
                    var a = e(n);
                    a.data("$$__NMAIN_TAB__") || a.on("click", "._MM_TAB [data-tab-nav]", o).on("tab.active", "._MM_TAB [data-tab-nav]", o).data("$$__NMAIN_TAB__", !0)
                })
            }, e.fn.moveTab = function(e) {
                return a(this.eq(0).find("[data-tab-nav=" + e + "]")), this
            }
        }).call(this, n("QFBpxR1d"))
    },
    ZYCMp4eD: function(e, t, n) {
        (function(t, a) {
            var o = n("vvRPcpct"),
                i = n("jShiu/8B"),
                r = n("frQ1Xk3Y"),
                c = n("oOU8Ku/P"),
                s = n("K0zMvcnj"),
                d = n("baMwVjn2"),
                l = "._MM_AIRS_CONTAINER, .MM_search_airs[data-airs], .grid1[data-airs]:not(._MM_MORE)",
                u = window.nmain.gv,
                _ = {
                    NEWS: {
                        api: u.isLogin ? "/nvhaproxy_plus/content/template/news-feed-airsNewsRecommend?pNum=2&contsPos=7&callerId=nvr_today&from=TODAY" : "/include/grid/contingency/content_template_news-feed-airsNewsRecommend.shtml.html?from=TODAY",
                        loading: !1,
                        name: "뉴스",
                        todayCardId: "AIRS_NEWS",
                        todayClk: "news"
                    },
                    ENT: {
                        api: "/api_airs_ent?st=rec&display=7&",
                        loading: !1,
                        itemLimit: 7,
                        getContentsHtml: function(e) {
                            return M(e) + v(e, 2)
                        },
                        name: "연예",
                        todayCardId: "AIRS_ENT",
                        todayClk: "ent"
                    },
                    SPORTS: {
                        api: "/api_airs_sports?st=rec&pages=5&display=5&",
                        loading: !1,
                        itemLimit: 5,
                        getContentsHtml: function(e) {
                            return v(e)
                        },
                        name: "스포츠",
                        todayCardId: "AIRS_SPORTS",
                        todayClk: "spt",
                        totalCountLimit: 20
                    },
                    FINANCE: {
                        api: "/api_airs_finance?st=rec&display=5&",
                        ccnClass: "ccn_finance",
                        loading: !1,
                        itemLimit: 5,
                        getContentsHtml: function(e) {
                            return M(e) + v(e, 2)
                        }
                    },
                    VIDEO: {
                        api: "/nvhaproxy/content/today/airs/video.nhn",
                        name: "동영상",
                        todayCardId: "AIRS_VIDEO",
                        todayClk: "mov"
                    },
                    GAMEAPP: {}
                },
                f = {
                    loaded: !1
                },
                p = (window.location.protocol || "http:") + "//lcs.naver.com/m?u=" + encodeURIComponent("https://mtop." + (u.isInApp ? "inapp4." : "v4.")),
                h = !1,
                m = !1;

            function M(e) {
                var n = t.extend({}, e);
                return n.recommend = e.recommend.filter(function(e, t) {
                    return e.rank = t + 1, e.image = function(e, t) {
                        return !e || e.search("https") > -1 ? e : "https://s.pstatic.net/dthumb.phinf/?src=%22" + encodeURIComponent(e) + "%22&type=" + t
                    }(e.image, "nf335_206"), t < 2
                }), t(n.recommend).each(function(e, t) {
                    var n = (function(e) {
                        if (!e.bypass) return {};
                        var t = {};
                        try {
                            t = JSON.parse(e.bypass)
                        } catch (e) {}
                        return t && "object" == typeof t ? t : {}
                    }(t).videoInfos || [])[0];
                    n && (t.videoId = n.vid, t.nvpPlayable = n.nvpPlayable && n.vid, t.displayPlayTime = n.playTime ? function(e) {
                        var t = parseInt(e / 3600) || 0,
                            n = parseInt(e / 60 % 60) || 0,
                            a = parseInt(e % 60) || 0;
                        return (t > 0 ? t + ":" : "") + (n < 10 ? "0" + n : n) + ":" + (a < 10 ? "0" + a : a)
                    }(n.playTime) : null)
                }), i.render(f.MM_TPL_AIRS_TWO_THUMBS, n)
            }

            function v(e, n) {
                n = n || 0;
                var a = t.extend({}, e);
                return a.recommend = e.recommend.filter(function(e, t) {
                    return e.rank = t + 1, t >= n
                }), i.render(f.MM_TPL_AIRS_TEXT, a)
            }

            function g() {
                var e = t.Deferred();
                return f.loaded ? e.resolve() : t.ajax({
                    url: "/templates/airs.shtml",
                    timeout: 5e3,
                    dataType: "html",
                    success: function(n) {
                        t(n).each(function() {
                            var e = t(this),
                                n = e.attr("id");
                            f[n] = e.html(), i.parse(f[n])
                        }), e.resolve()
                    },
                    error: function(t) {
                        r("[content/nmain.airs] fail to get Template. " + (t.status > 0 ? t.status : t.statusText)), e.reject()
                    }
                }), e.promise()
            }

            function T(e, n) {
                var a = t.Deferred();
                return t.ajax({
                    url: e,
                    timeout: 5e3,
                    dataType: "json",
                    success: function(e) {
                        ! function(e, t) {
                            var n = "";
                            return e && e.status ? "200" != e.status.code ? n = "[content/nmain.airs] response status code is not 200. " + e.status.code : e.result && e.result.recommend && e.result.recommend.length ? e.result.recommend.length < t && (n = "[content/nmain.airs] the number of recommend(" + e.result.recommend.length + ") is less than limit(" + t + ").") : n = "[content/nmain.airs] no result or recommend" : n = "[content/nmain.airs] no response or response status", "" == n || (r(n), !1)
                        }(e, n) ? a.reject(): a.resolve(e.result)
                    },
                    error: function(e) {
                        r("[content/nmain.airs] fail to get api data. " + (e.status > 0 ? e.status : e.statusText)), a.reject()
                    }
                }), a.promise()
            }

            function E(e, n, a) {
                var o = t.Deferred();
                return n.loading = !0, "TODAY" === e && "AIRS_NEWS" === n.todayCardId ? t.when(function(e) {
                    var n = t.Deferred();
                    return t.ajax({
                        url: e,
                        timeout: 5e3,
                        dataType: "html",
                        success: function(e) {
                            n.resolve(e)
                        },
                        error: function(e) {
                            r("[content/nmain.airs] fail to get api HTML data. " + (e.status > 0 ? e.status : e.statusText)), n.reject()
                        }
                    }), n.promise()
                }(n.api)).done(function(e) {
                    n.loading = !1, o.resolve(e)
                }) : t.when(g(), T(n.api + "start=" + a, n.itemLimit)).done(function(a, r) {
                    n.loading = !1, o.resolve(t(function(e, n, a) {
                        var o = {};
                        return o.contentsHtml = n.getContentsHtml(a), "TODAY" === e ? (o.name = n.name, o.cardId = n.todayCardId, i.render(f.MM_TPL_TODAY_AIRS, o).replace(/(data-clk=['"])(airscont['"])/g, "$1" + n.todayClk + "$2").replace(/(data-clk=['"])(airsrefresh['"])/g, "$1" + n.todayClk + "$2")) : (t.extend(o, n), i.render(f.MM_TPL_AIRS, o))
                    }(e, n, r))), n.startIdx = parseInt(r.start), n.itemCount = r.item_count || r.return_count || r.display || n.itemLimit, n.totalCount = r.total_count
                }), o.promise()
            }

            function C(e, t) {
                var n = t.find("._MM_AIRS_DATA"),
                    a = t.find("._MM_AIRS_REFRESH, [data-ajax-unit][data-url]"),
                    o = Number(n.attr("data-page")),
                    i = n.attr("data-template"),
                    r = Number(n.attr("data-timestamp"));
                o = o % 10 + 1;
                var c = "/nvhaproxy_plus/content/template/" + i + "?menu=" + d.getCurCode() + "&page=" + o + "&ts=" + r + "&template=" + i,
                    s = d.getCurInfo();
                s && s.$element && "Y" === s.$element.parent().attr("data-smr-playable") && (c += "&smrPlayable=Y"), t.addClass("_MM_MORE").find("._MM_AIRS").addClass("_MM_MORE_TARGET"), a.removeClass("_MM_AIRS_REFRESH").attr("data-url", c).attr("data-ajax-unit", "")
            }

            function O(e) {
                return function() {
                    var n = t(this),
                        a = n.attr("data-airs") || e;
                    if (n.attr("data-subject", a), "VIDEO" === e || "GAMEAPP" === e) return C(0, n), void n.on("ajaxmoreloaded", function() {
                        C(0, n)
                    }).attr("data-inited", "true");
                    var r = _[a];
                    r.subject = a, r.airsName = r.airsName || "뉴스";
                    var s = function(e) {
                        return e == c.pop("MM_airs_last_menu") && c.pop("MM_airs_last") || ""
                    }(e);
                    if ("TODAY" === e || "1" != o.get("MM_AIRS_DENY_" + e))
                        if ("TODAY" !== e || "VIDEO" !== a) {
                            if ("TODAY" !== e && s) return n.html(s).attr("data-inited", "true").show(), void(m = !0);
                            var d = 1;
                            "NEWS" !== a || u.isLogin || (d = 8 * Math.floor(8 * Math.random()) + 1), E(e, r, d).done(function(e) {
                                n.html(e).attr("data-inited", "true").show()
                            })
                        } else t.ajax({
                            url: r.api,
                            timeout: 5e3,
                            dataType: "html",
                            success: function(e) {
                                var a = t(e);
                                a.find(".cb_title_wrap").append('<a href="#" class="fct_more_btn" role="button" data-card-id="' + r.todayCardId + '"><span class="blind">기능 더보기</span></a>').find(".cb_main").call(function(e) {
                                    e.html(e.html().replace("추천", "추천 " + r.name))
                                }).end().end().find("._MM_AIRS_REFRESH").attr("data-clk", r.todayClk + "airsrefresh").end().find("[data-clk=rcmmov]").attr("data-clk", r.todayClk + "airscont"), n.html(a).on("ajaxmoreloaded", function() {
                                    C(0, n)
                                }).attr("data-inited", "true").show(), C(0, n)
                            }
                        });
                    else g().done(function() {
                        n.html(i.render(f.MM_TPL_AIRS_OFF, {
                            menuCode: e,
                            airsName: r.airsName
                        })).show()
                    })
                }
            }({
                init: function() {
                    t("#ct").on("click", "._MM_AIRS_DATA_ITEM", this.onclickAirsData).on("click", "._MM_AIRS_REFRESH", this.onclickRefresh).on("click", "._MM_AIRS_CLOSE", this.onclickClose).on("click", "._MM_AIRS_COMMENT_LINK", this.onclickComment).on("click", "._MM_AIRS_COMMENT_CLOSE_BTN", this.onclickCommentClose).on("click", "._MM_AIRS_COMMENT_SEND_BTN", this.onclickCommentSend).on("click", "._MM_AIRS_FOLD_BTN", this.onclickFold).on("click", ".MM_OPEN_AIRS_BTN", this.onclickOpen).on("click", ".MM_NEWS_AIRS_MORE", this.onclickMoreAirs).on("click", ".MM_NEWS_AIRS_FOLD", this.onclickFoldAirs)
                },
                onclickAirsData: function(e) {
                    var n = t(e.currentTarget).closest(l),
                        a = d.getCurCode();
                    return !a || "TODAY" === a || (c.set("MM_airs_last_menu", a, 1 / 24 / 60 * 10), c.set("MM_airs_last", n.html(), 1 / 24 / 60 * 10), !0)
                },
                onclickRefresh: function(e) {
                    var n = t(e.currentTarget).closest(l);
                    if (0 === n.length) return !1;
                    var a = _[n.attr("data-subject")],
                        o = a.startIdx + a.itemCount,
                        i = a.totalCountLimit || a.totalCount;
                    return (o >= i || i - o + 1 < a.itemLimit) && (o = 1), E(d.getCurCode(), a, o).done(function(e) {
                        n.html(e)
                    }), !1
                },
                onclickClose: function(e) {
                    var n = t(e.currentTarget).closest(l),
                        i = _[n.attr("data-subject")],
                        r = d.getCurInfo().getNclickCode();
                    return t.popup.t9({
                        msg: "AiRS 추천 " + i.airsName + " 영역을<br>보지 않으시겠습니까?",
                        okCb: function() {
                            a(this, r + ".airsclosecheck", "", ""), o.set("MM_AIRS_DENY_" + i.subject, "1", {
                                expires: 365
                            }), setTimeout(function() {
                                s.run()
                            }, 250)
                        },
                        cancelCb: function() {
                            a(this, r + ".airsclosecancel", "", "")
                        }
                    }), !1
                },
                onclickComment: function(e) {
                    return t(e.currentTarget).closest(".grid1").find("._MM_AIRS_COMMENT").show().end().find("._MM_AIRS_COMMENT ._MM_AIRS_COMMENT_SEND_BTN").attr("onclick", null).end().find("._MM_AIRS_COMMENT_AREA").resize().hide(), !1
                },
                onclickCommentClose: function(e) {
                    return t(e.currentTarget).closest(".grid1").find("._MM_AIRS_COMMENT").hide().end().find("._MM_AIRS_COMMENT_AREA").show().resize(), !1
                },
                onclickCommentSend: function(e) {
                    var n = t(this),
                        a = t(e.currentTarget).closest(".grid1").find("._MM_AIRS_COMMENT_CONTENT");
                    if (0 == a.length) return !1;
                    var o = a.val().trim();
                    if (!o) return t.popup.t12({
                        msg: "입력하신 내용이 없습니다.<br/>다시 시도해 주세요."
                    }), !1;
                    var i = {
                        comment: encodeURIComponent(o),
                        panel: d.getCurCode()
                    };
                    return t.ajax({
                        url: "/nvhaproxy/airs/proposal",
                        data: i,
                        timeout: 3e3,
                        dataType: "json",
                        success: function(e) {
                            e && "success" == e.result ? n.closest(".grid1").find("._MM_AIRS_COMMENT").hide().end().find("._MM_AIRS_COMMENT_SEND_FINISH_LAYER").show().resize() : r("[content/nmain.airs] fail to send comment. invalid response. " + JSON.stringify(e))
                        },
                        error: function(e) {
                            r("[content/nmain.airs] fail to send comment. " + (e.status > 0 ? e.status : e.statusText)), t.popup.t12({
                                msg: "메세지 전송중 오류가 발생했습니다.<br/>다시 시도해 주세요."
                            })
                        }
                    }), !1
                },
                onclickFold: function(e) {
                    var n = d.getCurInfo().$element,
                        a = t(e.currentTarget).attr("data-content-seq");
                    return n.find("#MM_VIDEO_RECOMMEND_FOLDED_" + a).show(), n.find("#MM_VIDEO_RECOMMEND_" + a).hide(), o.set("MM_VIDEO_RECOMMEND_FOLD_" + a, "1", {
                        expires: 60
                    }), !1
                },
                onclickOpen: function(e) {
                    var n = d.getCurInfo().$element,
                        a = t(e.currentTarget).attr("data-content-seq");
                    return n.find("#MM_VIDEO_RECOMMEND_FOLDED_" + a).hide(), n.find("#MM_VIDEO_RECOMMEND_" + a).show(), o.remove("MM_VIDEO_RECOMMEND_FOLD_" + a), !1
                },
                onclickMoreAirs: function(e) {
                    var n = t(e.currentTarget),
                        a = t(e.currentTarget.nextElementSibling),
                        o = t("#MM_AIRS_RECOMMEND").find(".MM_NEWS_AIRS_ITEM").filter(":hidden");
                    o.each(function(e, n) {
                        var a = t(n);
                        if (!(e < 10)) return !1;
                        a.show()
                    }), o.length - 10 <= 0 && (n.hide(), a.show())
                },
                onclickFoldAirs: function(e) {
                    var n = t(e.currentTarget.previousElementSibling),
                        a = t(e.currentTarget),
                        o = t("#MM_AIRS_RECOMMEND");
                    o.find(".MM_NEWS_AIRS_ITEM").each(function(e, n) {
                        var a = t(n);
                        e >= 10 && a.hide()
                    }), window.scrollTo(0, o.offsetTop), n.show(), a.hide()
                }
            }).init(), t(window).on("scrollend", function() {
                var e = window.pageYOffset;
                setTimeout(function() {
                    if (e == window.pageYOffset) {
                        var n = d.getCurInfo();
                        if (n) {
                            var a = n.code,
                                o = n.getNclickCode(),
                                i = n.$element.find(l);
                            if (0 !== i.length) {
                                var r = i[0].getBoundingClientRect().top,
                                    c = "";
                                if (window.innerHeight >= r && r + i.height() > 0) {
                                    if (!h && !m && (h = !0, c = p + o + "/in", "VIDEO" === a || "GAMEAPP" === a)) {
                                        var s = i.find("._MM_AIRS_DATA"),
                                            u = s.attr("data-timestamp"),
                                            _ = s.attr("data-page"),
                                            f = s.find("._MM_TV_DATA_ITEM").toArray().map(function(e) {
                                                return t(e).attr("data-clip-no")
                                            }),
                                            M = '{"ar": {"gl":' + JSON.stringify(f) + ',"refresh" : ' + _ + '},"md": {"s":"' + u + '"}}';
                                        c = c + "&air=" + encodeURIComponent(M)
                                    }
                                } else h && (h = !1, m = !1, c = p + o + "/out");
                                if (c) {
                                    var v = new Image;
                                    v.src = c, v.onload = function() {
                                        v.onload = null
                                    }
                                }
                            }
                        }
                    }
                }, 500)
            }), e.exports = {
                check: function(e) {
                    e.$element.find(l).filter(function() {
                        return t(this).is(":not([data-inited=true])")
                    }).each(O(e.code))
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    Zb9NOJlP: function(e, t, n) {
        (function(t) {
            n("9BNJYWJ+");
            var a = n("+wBTMN/I"),
                o = n("baMwVjn2"),
                i = window.nmain.gv;

            function r(e) {
                e.preventDefault();
                var n = t(e.currentTarget).attr("data-change-panel");
                if (i.isApp) location.href = "/naverapp/?version=3&cmd=onMenu&menuCode=" + n + "&order=1";
                else {
                    var o = a.getMeta(n);
                    t.popup.t7({
                        msg: "<span class='lmr_st'>" + o.menuName + "</span> 주제를 첫 번째 순서로<br/>이동하시겠습니까?",
                        ok: "예",
                        cancel: "아니오",
                        okCb: function() {
                            setTimeout(function() {
                                location.href = "/naverapp/?version=3&cmd=onMenu&menuCode=" + n + "&order=1"
                            }, 100)
                        },
                        nclk: {
                            ok: "tabmovyes",
                            cancel: "tabmovno"
                        }
                    })
                }
            }

            function c(e) {
                e.preventDefault();
                var n = t(e.currentTarget).attr("data-panel");
                if (i.isInApp) a.subscribe(n);
                else {
                    var r = "<span class='lmr_st'>" + a.getMeta(n).menuName + "</span> 판을 추가할까요?",
                        c = o.getCurInfo().getNclickCode();
                    t.popup.t7({
                        msg: r,
                        ok: "예",
                        cancel: "아니오",
                        okCb: function() {
                            a.subscribe(n)
                        },
                        nclk: {
                            ok: c + ".tabrcmonyes",
                            cancel: c + ".tabrcmonno"
                        }
                    })
                }
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", "._MM_CHANGE_PANEL_BANNER", r).on("click", "._MM_ADD_PANEL", c)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    Zzo7p8aP: function(e, t) {
        var n = window.devicePixelRatio || 1;
        e.exports = function(e, t) {
            var a = {
                    data: t.data,
                    rowCount: t.rowCount,
                    pointRadius: t.pointRadius || 3.5
                },
                o = e,
                i = o.get(0).getContext("2d"),
                r = o.width(),
                c = o.height(),
                s = t.data,
                d = a.rowCount || 1,
                l = s.length,
                u = Math.round(r / l),
                _ = Math.round(c / d);

            function f(e) {
                return u * e + Math.round(u / 2)
            }

            function p(e, t, n, a, o) {
                i.save(), i.beginPath(), i.moveTo(e, t + .5), i.lineTo(n, a + .5), o && o(i), i.stroke(), i.restore()
            }

            function h(e, t, n, a) {
                i.save(), i.beginPath(), i.arc(e, t + .5, n, 0, 2 * Math.PI, !0), a && a(i), i.fill(), i.stroke(), i.restore()
            }

            function m() {
                o.css({
                    width: "",
                    height: ""
                }), r = o.width(), c = o.height(), u = Math.round(r / l), _ = Math.round(c / d), o.attr("width", r * n), o.attr("height", c * n), o.css({
                    width: r + "px",
                    height: c + "px"
                }), i.scale(n, n)
            }
            return m(), {
                drawRowLine: function(e) {
                    for (var t = 0; t < d - 1; t++) p(0, Math.round(_ * (t + 1)), r, Math.round(_ * (t + 1)), e)
                },
                drawLine: p,
                drawPoint: h,
                drawData: function(e, t, n) {
                    for (var o = 0; o < l; o++) {
                        var i = s[o],
                            r = s[o + 1],
                            d = f(o),
                            u = e(i, _, c),
                            m = f(o + 1),
                            M = e(r, _, c);
                        o + 1 < s.length && p(d, u, m, M, function(e) {
                            t(e, i, r, d, u, m, M)
                        }), h(d, u, a.pointRadius, function(e) {
                            n(e, i, r)
                        })
                    }
                },
                drawDataOnePath: function(e, t, n) {
                    for (var a = [], o = 0; o < l; o++) {
                        var r = s[o],
                            d = f(o),
                            u = e(r, _, c);
                        a.push({
                            x: d,
                            y: u
                        })
                    }! function(e, t) {
                        i.save(), i.beginPath(), i.moveTo(e[0].x, e[0].y);
                        for (var n = e.slice(1), a = 0; a < n.length; a++) i.lineTo(n[a].x, n[a].y);
                        t && t(i), i.stroke(), i.restore()
                    }(a, function(e) {
                        t(e, a, s)
                    });
                    for (var p = 0; p < l; p++) {
                        var m = s[p],
                            M = s[p + 1];
                        h(a[p].x, a[p].y, 3.5, function(e) {
                            n(e, m, M)
                        })
                    }
                },
                drawArc: function(e, t, n, a, o, r) {
                    i.save(), i.beginPath(), r && r(i), i.arc(e, t, n, a, o), i.stroke(), i.fill(), i.restore()
                },
                drawArcGradation: function(e, t, n, a, o, r) {
                    i.save(), i.beginPath(), r && r(i), i.arc(e, t, n, a, a), i.arc(e, t, n + o, a, a), i.stroke(), i.restore()
                },
                drawRect: function(e, t, n, a, o) {
                    i.save(), o && o(i), i.fillRect(e, t, n, a), i.strokeRect(e, t, n, a), i.restore()
                },
                getRect: function() {
                    return {
                        width: r,
                        height: c,
                        cellWidth: u,
                        cellHeight: _,
                        DPR: n
                    }
                },
                getXCoordiByIndex: f,
                resize: m
            }
        }
    },
    a08zWdQu: function(e, t, n) {
        (function(e) {
            var t, a = n("vvRPcpct"),
                o = n("frQ1Xk3Y"),
                i = n("baMwVjn2"),
                r = n("ozsbSvXK"),
                c = 8e4,
                s = 126e5;

            function d() {
                "DATA" == i.getCurCode() && p()
            }

            function l() {
                var n = e(event.target),
                    a = n.attr("data-wrap") ? n.attr("data-wrap") : ".grid1";
                n.closest(a).find(".cd_list").show().end().find("._MM_FOLD_RTK_MORE").hide().end().find("._MM_FOLD_RTK_FOLD").show(), t.reload()
            }

            function u() {
                var n = e(event.target),
                    a = n.attr("data-wrap") ? n.attr("data-wrap") : ".grid1";
                n.closest(a).find(".cd_list._MM_FOLD_ITEM").hide().end().find("._MM_FOLD_RTK_MORE").show().end().find("._MM_FOLD_RTK_FOLD").hide(), t.reload(), e.fn.scrollTo(0)
            }

            function _() {
                var t = e("#DATA_RTK_TIME").text();
                e("#DATA_RTK_DISPLAY_TIME").text(t)
            }

            function f() {
                a.get("DATA_RTK_FILTER_SELECTED") || a.set("DATA_RTK_FILTER_SELECTED", 1, {
                    expires: 365,
                    path: "/"
                })
            }

            function p() {
                null != e("#RTK_AGE_POINTERS") && null != e("#RTK_TIME_POINTERS") && (v(e("#RTK_AGE_POINTERS > span > span > a[aria-checked='true']")), v(e("#RTK_TIME_POINTERS > span > span > a[aria-checked='true']")))
            }

            function h() {
                null != nmain.rtk.RTKServerTimestamp && null != e("#RTK_LIST") && null != e("#RTK_LIST").data("ts") ? m(nmain.rtk.RTKServerTimestamp, e("#RTK_LIST").data("ts"), c) && (null != e("#DATA_RTK_ERROR") ? e("#DATA_RTK_ERROR").show() : o("[nmain.data] 데이터판 실급검 데이터 지연시 노출할 오류 문구영역이 없음.")) : o("[nmain.data] 데이터판 데이터 지연을 판단할 timestamp 데이터가 없음. (1) server Timestamp : " + nmain.rtk.RTKServerTimestamp + ", (2) 실급검 timestamp : " + e("#RTK_LIST").data("ts"))
            }

            function m(e, t, n) {
                return 1e3 * Number(e) - new Date(t).getTime() > n
            }

            function M(n) {
                t.stop();
                var i = e(n.target);
                i.hasClass("graph_link") || (i = i.closest(".graph_link")),
                    function(n) {
                        var i = e(".DATA_RTK_FILTER_AGE[aria-checked='true']"),
                            r = e(".DATA_RTK_FILTER_TIME[aria-checked='true']");
                        n && (n.hasClass("DATA_RTK_FILTER_TIME") ? r = n : n.hasClass("DATA_RTK_FILTER_AGE") && (i = n));
                        var c = r.attr("data-option") || "now",
                            s = i.attr("data-option") || "all",
                            d = s + "_" + c + ".shtml";
                        e.ajax("/include/search/" + d, {
                                dataType: "html"
                            }).done(function(n) {
                                e(".DATA_RTK_FILTER_AGE").attr("aria-checked", "false"), e(".DATA_RTK_FILTER_TIME").attr("aria-checked", "false"), e("#RTK_FILTER").find(".DATA_RTK_FILTER_AGE.check_in").removeClass("check_in").addClass("check_out"), e("#RTK_FILTER").find(".DATA_RTK_FILTER_TIME.check_in").removeClass("check_in").addClass("check_out"), r.attr("aria-checked", "true").removeClass("check_out").addClass("check_in"), i.attr("aria-checked", "true").removeClass("check_out").addClass("check_in"), p(),
                                    function() {
                                        var t = e(".DATA_RTK_FILTER_AGE[aria-checked='true']").attr("data-filter-text") || "전체",
                                            n = e(".DATA_RTK_FILTER_TIME[aria-checked='true']").attr("data-filter-text") || " · 현재";
                                        e("#DATA_RTK_FILTER_TEXT").text(t + n), e("#DATA_RTK_FILTER_TEXT").siblings("button").text(t + n)
                                    }(), n.length > 0 && t.replaceList(e(n))
                            }).fail(function(e) {
                                o("[nmain.data] 데이터판 실급검 ajax 호출 실패." + e.statusText)
                            }),
                            function(e, t) {
                                a.set("DATA_RTK_OPT", e + "_" + t, {
                                    expires: 365,
                                    path: "/"
                                })
                            }(s, c)
                    }(i)
            }

            function v(e) {
                if (null != e && null != e.offset()) {
                    var t = e.closest(".cf_item").children(".cf_graph_point"),
                        n = e.offset().left + 15;
                    e.hasClass("start") ? t.css("left", 16) : e.hasClass("last") ? t.css("left", e.closest("._MM_FOLD_ITEM").width() - 35) : t.css("left", n)
                }
            }
            r.setInitFn({
                code: "DATA",
                initFn: function(n) {
                    n.$element.on("click", ".DATA_RTK_FILTER_AGE, .DATA_RTK_FILTER_TIME", M).on("click", "#DATA_RTK_FILTER_TEXT", f).on("click", "._MM_FOLD_RTK_MORE", l).on("click", "._MM_FOLD_RTK_FOLD", u).resize(d), e(window).resize(d), t = new function() {
                        var t, n, a, o = 0,
                            r = "1500",
                            c = 0;

                        function s() {
                            t = e("#RTK_LIST .cd_item:visible")
                        }

                        function d() {
                            n && clearInterval(n)
                        }

                        function l() {
                            d(), s(), o = 0, u(), n = setInterval(function() {
                                u()
                            }, r)
                        }

                        function u() {
                            if ("DATA" == i.getCurCode()) {
                                o >= t.length && (o = 0);
                                var e = t.eq(o);
                                a = Date.now(), e.addClass("cd_item_fadeout"), setTimeout(function() {
                                    e.addClass("cd_item_fadein")
                                }, 300), setTimeout(function() {
                                    e.removeClass("cd_item_fadeout").removeClass("cd_item_fadein")
                                }, 800), o++
                            } else d()
                        }
                        return {
                            start: l,
                            stop: d,
                            reload: s,
                            replaceList: function(t) {
                                var n = Date.now() - a,
                                    o = t,
                                    i = 800 - n > 0 ? 800 - n : 0;
                                c = Date.now(), n = c, setTimeout(function() {
                                    e("#RTK_LIST").removeClass("list_fadein").addClass("list_fadeout")
                                }, i), setTimeout(function() {
                                    e("#RTK_LIST").removeClass("list_fadeout").html(o.html()), e("#RTK_LIST").attr("data-ts", o.data("ts")), h(), _(), e("#RTK_LIST").addClass("list_fadein")
                                }, i + 300), setTimeout(function() {
                                    e("#RTK_LIST").removeClass("list_fadein").removeClass("list_fadeout")
                                }, i + 850), setTimeout(function() {
                                    n - c < 0 || l()
                                }, i + 2e3)
                            }
                        }
                    }
                }
            }), r.setUpdateFn({
                code: "DATA",
                updateFn: function() {
                    h(), null != e("#DATA_NEWS_TOPIC_TS") && null != e("#DATA_NEWS_TOPIC_TS").data("ts") ? m(nmain.rtk.RTKServerTimestamp, e("#DATA_NEWS_TOPIC_TS").data("ts"), s) && (null != e("#DATA_NEWS_TOPIC_ERROR") ? e("#DATA_NEWS_TOPIC_ERROR").show() : o("[nmain.data] 데이터판 뉴스토픽 데이터 지연시 노출할 오류 문구영역이 없음."), null != e("#DATA_ENT_TOPIC_ERROR") ? e("#DATA_ENT_TOPIC_ERROR").show() : o("[nmain.data] 데이터판 연예토픽 데이터 지연시 노출할 오류 문구영역이 없음.")) : o("[nmain.data] 데이터판 뉴스토픽 데이터 지연을 판단할 timestamp 데이터가 없음."), p(), _(), t.stop(), setTimeout(function() {
                        t.start()
                    }, 1e3)
                }
            })
        }).call(this, n("QFBpxR1d"))
    },
    aY11sVfy: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    adHGn4eU: function(e, t) {
        var n, a, o = window.nmain.gv,
            i = /NAVER\((\S+);\s(\S+);\s(\S+);\s(\S+)(;\s(\S+))?\)/,
            r = void 0;
        e.exports = {
            compareBSC: function(e) {
                if (!o.isInApp) return Number.NaN;
                e = e || {}, n = n || window.nmain.gv.osType, a = a || navigator.userAgent.match(i);
                var t = parseInt(a[3], 0);
                return "ANDROID" === n && "number" == typeof e.android ? t - e.android : "IOS" !== n || o.isPad || "number" != typeof e.iphone ? "IOS" === n && o.isPad && "number" == typeof e.ipad ? t - e.ipad : Number.NaN : t - e.iphone
            },
            compareVersion: function(e) {
                if (!o.isInApp) return Number.NaN;
                if (e = e || {}, n = n || window.nmain.gv.osType, !(a = a || navigator.userAgent.match(i))[4]) return Number.NaN;
                var t = a[4].split(".");
                if (t.length < 3) return Number.NaN;
                var r = [],
                    c = !0;
                return "ANDROID" === n && e.android ? r = e.android.split(".") : "IOS" === n && !o.isPad && e.iphone ? r = e.iphone.split(".") : "IOS" === n && o.isPad && e.ipad && (r = e.ipad.split(".")), 0 == r.length ? Number.NaN : (t.some(function(e, t) {
                    return parseInt(e) < parseInt(r[t]) ? (c = !1, !0) : parseInt(e) > parseInt(r[t])
                }), c)
            },
            finishHtmlLoading: function() {
                -1 != location.search.indexOf("needScheme=YES") && (location.href = "naverapp://htmlLoadingFinished")
            },
            finishWebLoading: function(e) {
                -1 != location.search.indexOf("needScheme=YES") && (location.href = "naverapp://webLoadingFinished?code=" + e)
            },
            getAppPanelList: function(e) {
                if (e = !1 !== e, window.inapphome && window.inapphome.getPanelList) {
                    if (!e || !r) {
                        var t = window.inapphome.getPanelList();
                        try {
                            t = "object" == typeof t ? t : JSON.parse(t), Array.isArray(t.COMMERCE) && t.COMMERCE.reverse(), r = t
                        } catch (e) {
                            r = void 0
                        }
                    }
                    return r
                }
            },
            getAppOpenMainList: function() {
                if (window.inapphome && window.inapphome.getOpenMainList) {
                    var e = window.inapphome.getOpenMainList();
                    try {
                        e = "object" == typeof e ? e : JSON.parse(e);
                        for (var t = 0; t < e.length; t++) e[t].url = decodeURIComponent(e[t].url);
                        return e.openMain
                    } catch (e) {
                        return
                    }
                }
            },
            getHeaderSearchHeight: function() {
                return "ANDROID" === o.osType ? 83 : 75
            }
        }
    },
    "ahM7uf/B": function(e, t, n) {
        (function(t, a) {
            var o = n("vvRPcpct"),
                i = n("CcLOrJYx"),
                r = n("adHGn4eU"),
                c = n("frQ1Xk3Y"),
                s = n("K0zMvcnj"),
                d = n("baMwVjn2"),
                l = n("Z16Wmyu8"),
                u = n("flag3YBs"),
                _ = n("VCakpjM9"),
                f = n("Iqy0zjC0"),
                p = n("ruBhlHUf"),
                h = n("4G6dRG8c"),
                m = window.nmain.gv,
                M = !1;

            function v(e) {
                var n = t("#MM_FORECAST_TAB_WRAP [aria-selected=true]").attr("data-tab-nav");
                t("._MM_WEATHER_BANNER").html(e).resize().find("#MM_FORECAST_TAB_WRAP [data-tab-nav=" + n + "]").trigger("tab.active").end().find("#WTH_WRAP").rolling(), u.refreshWeatherHtml(), x(), L(), S(), P()
            }

            function g(e) {
                return !/^WD.+/.test(e)
            }

            function T(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.attr("data-v");
                n.addClass("uw_ico_loading"), i.search({
                    success: function(e) {
                        if (e && e.code) {
                            var n = g(m.regionCode),
                                o = g(e.code);
                            m.regionCode = e.code, n && !o && setTimeout(function() {
                                s.run()
                            }, 250)
                        }
                        h.update(),
                            function(e) {
                                t.ajax(e, {
                                    timeout: 3e3,
                                    dataType: "html"
                                }).done(function(e) {
                                    e.search(/ERROR/) < 0 && v(e), l.update()
                                }).fail(function(e) {
                                    c("[nmain.weather] update ajax error. " + e.statusText)
                                })
                            }(Number(a) > 4 ? "/nvweather_mmap?path=include/grid/weatherBanner&fname=WEATHER_HOME&foreign_multi=Y" : "/nvweather_mmap?path=include/grid/weatherBanner&fname=WEATHER&foreign_multi=Y")
                    },
                    nvgeoTimeout: 3e3,
                    fail: function(e) {
                        n.removeClass("uw_ico_loading"), c("[nmain.weather.geolocation] update location info fail." + e)
                    },
                    geolocationOptions: {
                        enableHighAccuracy: !0,
                        maximumAge: 0
                    }
                })
            }

            function E() {
                a(this, "home.weatheralarm", "", ""), location.href = "naverapp://pushsetting?serviceid=22&onoff=on"
            }

            function C(e) {
                switch (e.contentId) {
                    case "temperature":
                        _.init(!0);
                        break;
                    case "dust":
                        f.init(!0);
                        break;
                    case "weekly_temperature":
                        break;
                    case "weekly_dust":
                        p.init(!0), t("#WTH_WRAP .cw_weekdust_wrap ._ROLLING").removeClass("PAUSE");
                        break;
                    default:
                        return
                }
                I()
            }

            function O(e) {
                e.rollingItem._showCurrentIndex()
            }

            function N(e) {
                var n = e.$activeChildren.attr("data-relation-daylabel-id");
                e.$children.removeClass("state_show"), e.$children.each(function(e, a) {
                    var o = t(a).attr("data-relation-daylabel-id"),
                        i = n === o;
                    t("#" + o).toggleClass("day_on", i).attr("aria-selected", i.toString())
                }), e.$activeChildren.addClass("state_show")
            }

            function A() {
                var e = t(window).scrollTop(),
                    n = 180;
                !0 === m.isApp && (n = 1), t("#SEARCH_HOME_WRAP").toggleClass("type_gradient", e < n)
            }

            function R(e) {
                e ? t(window).on("scroll", A) : t(window).off("scroll", A)
            }

            function I() {
                var e = t("#ct").find("#MM_FORECAST_TAB_WRAP .native_scroll");
                if (0 !== e.length) {
                    var n = 0;
                    e.find("li").each(function(e, a) {
                        var o = t(a);
                        return !(o.find("a[aria-selected=true]").length > 0) && (n += o.outerWidth(), !0)
                    }), e.hscrollTo(n)
                }
            }

            function S() {
                m.isLogin && m.isInApp && o.get("m_loc") && r.compareBSC({
                    android: 650
                }) >= 0 ? t("._MM_WEATHER_ALARM").show() : t("._MM_WEATHER_DATA_SOURCE").show()
            }

            function w(e) {
                t(e.target).closest("#WTH_WARN_INFO").find("#WTH_WARN_STANDARD").toggle()
            }

            function b(e) {
                t(e.target).siblings("#WTH_ACCURACY_DETAIL").toggle()
            }

            function k(e) {
                t(e.target).closest("#WTH_ACCURACY_DETAIL").hide()
            }

            function y() {
                a(this, "home.weanewsclo", "", ""), t("#WTH_ALARM").remove(), o.set("HIDE_WARN_CARD", "Y", {
                    expires: 1
                })
            }

            function x() {
                var e = t("#SEARCH_HOME_WRAP");
                0 !== e.find(".WTH_AIR_TEXT, .WTH_AIR_LEVEL").length && D(e.find(".WTH_AIR_LEVEL"), e.find(".WTH_AIR_TEXT"))
            }

            function L() {
                var e = t("#WTH_DESC li");
                e.length < 2 || D(e.eq(0), e.eq(1))
            }

            function D(e, t) {
                e.delay(2500).fadeOut(500).delay(50).promise().done(function() {
                    t.fadeIn(500)
                })
            }

            function P() {
                f.init(), p.init(), _.init()
            }
            e.exports = {
                init: function(e) {
                    M || (e.on("rolling.before", "#WTH_WRAP .cw_weekdust_wrap ._ROLLING._TRIGGER_BEFORE_AFTER_ROLLING", O).on("rolling.after", "#WTH_WRAP .cw_weekdust_wrap ._ROLLING._TRIGGER_BEFORE_AFTER_ROLLING", N).on("tab.afterChange", C).on("click", "._MM_WEATHER_LOC", T).on("click", "._MM_WEATHER_ALARM", E).on("click", "#CLOSE_WTH_BREAKING_NEWS_CARD", y), e.on("click", "#WTH_HELP, #CLOSE_WTH_LAYER", w).on("click", "#WTH_ACCURACY_INFO", b).on("click", "#WTH_ACCURACY_CLOSE", k), I(), x(), L(), S(), P(), t(window).resize(function() {
                        "SEARCH" === d.getCurCode() && (_.onResize(), f.onResize(), p.onResize())
                    }), M = !0)
                },
                resetCookie: function() {
                    var e = o.get("NV_WETR_LAST_ACCESS_RGN_M");
                    e && e.search("CT") > -1 && o.remove("NV_WETR_LAST_ACCESS_RGN_M", {
                        domain: "naver.com"
                    })
                },
                checkScroll: function(e) {
                    R("SEARCH" === e)
                },
                changeWeatherHtml: v
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    aiVRAQR7: function(e, t, n) {
        (function(t) {
            var a, o = n("baMwVjn2"),
                i = n("vvRPcpct"),
                r = n("frQ1Xk3Y"),
                c = n("K0zMvcnj"),
                s = !1,
                d = window.nmain.gv,
                l = {
                    sDomain: window.talkDomain || "https://ssl.pstatic.net/static.cbox",
                    sApiDomain: window.talkApiDomain || "https://apis.naver.com/commentBox/cbox6",
                    bLogin: !!d.isLogin,
                    sTicket: "ent01",
                    nPageSize: 10,
                    nIndexSize: 1,
                    aFormation: ["count", "write", "list"],
                    sTemplateId: "main",
                    sDateFormat: "Y.m.d. H:i:s",
                    sCssId: "main_talk_w",
                    sLanguage: "ko",
                    bHideZeroVoteCount: !0,
                    htMessage: {
                        template: {
                            write_long_placeholder: "주제와 무관한 댓글, 악플은 삭제될 수 있습니다"
                        }
                    },
                    htErrorHandler: {
                        onerror: function() {
                            r("[ enterTalk ] onerror")
                        },
                        ontimeout: function(e) {
                            r("[ enterTalk ] ontimeout : " + e)
                        }
                    },
                    htEventHandler: {
                        initialized: function(e) {
                            var n = e.htOption.sId,
                                a = t("#" + n),
                                o = a.attr("data-dssid"),
                                r = a.parents("._MM_TALK_WRAP");
                            if (o) {
                                var c = o ? "MM_TALK_NOTICE_" + o : "";
                                if (c) "1" !== i.get(c) && r.find("._MM_TALK_NOTICE_BODY").show()
                            }
                            r.show()
                        },
                        afterCreate: function(e) {
                            e.oJson.success || alert("다시 시도해주세요")
                        },
                        beforeCreate: function(e) {
                            "" === e.htParams.contents && e.stop()
                        }
                    }
                };

            function u() {
                var e = t(".MM_ENTER_TYPE_GUIDE [aria-selected='true']");
                if (e.length) {
                    var n = e.attr("data-enter-type"),
                        a = i.get("MM_ENTER_TYPE");
                    d.isApp && /subMenu/.test(location.href) && a !== n && i.set("MM_ENTER_TYPE", n, {
                        expires: 2
                    })
                }
            }

            function _(e) {
                e.preventDefault(), a.find("._MM_ENTER_COMMENT_BANNER").find("._MM_ENTER_COMMENT_GUIDE_WRAP").hide().end().find("._MM_ENTER_COMMENT_INPUT_WRAP").show().resize()
            }

            function f(e) {
                e.preventDefault(), a.find("._MM_ENTER_COMMENT_BANNER").find("._MM_ENTER_COMMENT_INPUT_WRAP").hide().end().find("._MM_ENTER_COMMENT_GUIDE_WRAP").show().resize()
            }

            function p(e) {
                e.preventDefault();
                var n = a.find("._MM_ENTER_COMMENT_BANNER"),
                    i = n.find("._MM_ENTER_COMMENT_INPUT").val().trim();
                if (!i) return t.popup.t12({
                    msg: "입력하신 내용이 없습니다.<br/>다시 시도해 주세요."
                }), !1;
                var c = {
                    comment: encodeURIComponent(i),
                    panel: o.getCurInfo().subCode
                };
                return t.ajax({
                    url: "/nvhaproxy/airs/proposal",
                    data: c,
                    timeout: 3e3,
                    dataType: "json",
                    success: function(e) {
                        e && "success" == e.result ? n.find("._MM_ENTER_COMMENT_INPUT_WRAP").hide().end().find("._MM_ENTER_COMMENT_SUBMIT_RESULT").show().resize() : r("[content/nmain.enter] fail to send comment. invalid response. " + JSON.stringify(e))
                    },
                    error: function(e) {
                        r("[content/nmain.enter] fail to send comment. " + (e.status > 0 ? e.status : e.statusText)), t.popup.t12({
                            msg: "메세지 전송중 오류가 발생했습니다.<br/>다시 시도해 주세요."
                        })
                    }
                }), !1
            }

            function h(e) {
                e.preventDefault(), t(e.currentTarget).toggleClass("talk_notice_expanded")
            }

            function m(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.attr("data-dss-id"),
                    o = a ? "MM_TALK_NOTICE_" + a : "",
                    r = new Date;
                r.setHours(24, 0, 0, 0), o && i.set(o, "1", {
                    expires: r
                }), n.parents("._MM_TALK_NOTICE_BODY").hide()
            }

            function M(e) {
                v(e.$toContent)
            }

            function v(e) {
                var n = e.find(".MM_ENTER_TALK");
                if (0 !== n.length) {
                    var a = {
                            sId: n.attr("id"),
                            sObjectId: n.attr("data-object-id")
                        },
                        o = t.extend(l, a);
                    void 0 !== window.cbox ? window.cbox.Core.init(o) : function(e) {
                        window.__htCboxOption = e;
                        var t = document.createElement("script");
                        t.type = "text/javascript", t.charset = "utf-8", t.src = e.sDomain + "/js/cbox.core.js?v=" + Math.floor((new Date).getTime() / 12e5), (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
                    }(o)
                }
            }

            function g(e) {
                e.preventDefault(), t.fn.scrollTo(0, 0), i.set("MM_ENTER_TYPE", t(e.currentTarget).attr("data-enter-type"), {
                    expires: 2
                }), c.run()
            }
            e.exports = {
                init: function(e) {
                    var t = e.type;
                    s ? "panelChanged" === t && u() : ((a = e.$element).on("click", ".MM_ENTER_TYPE_GUIDE [data-enter-type]", g).on("click", "._MM_TALK_NOTICE_BODY", h).on("click", "._MM_TALK_NOTICE_CLOSE", m).on("tab.beforeChange", "._MM_TAB", M).on("click", "._MM_ENTER_COMMENT", _).on("click", "._MM_ENTER_COMMENT_CLOSE", f).on("click", "._MM_ENTER_COMMENT_SUBMIT", p), u(), v(function() {
                        var e = a.find("._MM_ENTER_BROADCAST_HEADER[aria-selected=true]").attr("data-tab-nav");
                        return a.find("._MM_ENTER_BROADCAST_BODY[data-id='" + e + "']")
                    }()), s = !0)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "b/l8t8J6": function(e, t, n) {
        (function(e) {
            e.fn.if = function(e, t, n) {
                return e ? t.apply(this) : void 0 !== n && n.apply(this), this
            }, e.fn.iff = function(e) {
                var t = e ? this : [];
                return this.pushStack(t, "iff", e)
            }
        }).call(this, n("QFBpxR1d"))
    },
    baMwVjn2: function(e, t, n) {
        (function(t, a) {
            var o = n("vvRPcpct"),
                i = n("IPQ71O+c"),
                r = n("frQ1Xk3Y"),
                c = n("+wBTMN/I"),
                s = n("W7kfDc5n"),
                d = n("2jNgLtZK"),
                l = n("1Fnl7I+q"),
                u = "data-panel",
                _ = !0,
                f = !1,
                p = !1,
                h = !0,
                m = t("#mflick"),
                M = {};
            ! function() {
                var e = m.find(".flick-panel[" + u + "]").attr(u),
                    t = c.getMeta(e);
                M.code = e, M.subFlickingCode = t && t.childMenuFlicking ? m.find(".flick-panel[" + u + "=" + M.code + "] .grid1_wrap").attr("data-sub-section") : null
            }();
            var v, g, T, E, C, O = [],
                N = 0,
                A = new d("mm_panel_element"),
                R = new d("mm_scroll"),
                I = window.nmain.gv,
                S = {
                    NV_MAIN_NEW: "YES",
                    NV_OS_TYPE: I.osType,
                    NV_UA_FROM: I.uaFrom,
                    m_loc_rcode: I.regionCode
                };

            function w(e) {
                (p = g.isPlaying() || e.holding && e.isTrusted) && E.trigger(t.Event("panelMoving", t.extend({
                    distance: e.distance
                }, M)))
            }

            function b(e) {
                var n = e.direction == i.DIRECTION_LEFT ? Q() : K();
                if (!n) return e.stop(), void g.restore();
                E.trigger(t.Event("panelBeforeChange", {
                    fromCode: M.code,
                    toCode: n.code,
                    toSubFlickingCode: n.subFlickingCode
                }))
            }

            function k(e) {
                p = !1, N++;
                var n = e.direction == i.DIRECTION_LEFT ? Q() : K(),
                    o = n.code,
                    r = n.subFlickingCode;
                _ ? (M.code = o, M.subFlickingCode = r, E.trigger(t.Event("panelShow", M)), z.getCache(M.code, M.subFlickingCode) && E.trigger(t.Event("panelChanged", z.getCurInfo())), window.scrollTo(0, 0), z.getDeferredInfo(M.code, M.subFlickingCode).done(function(t) {
                    var n = e.direction == i.DIRECTION_LEFT ? "n" : "p",
                        o = "flk." + t.getNclickCode() + n;
                    a({
                        panelCode: t.code
                    }, o, "", N)
                })) : $(o, r)
            }

            function y() {
                p = !1, m.resize(), E.trigger(t.Event("panelRestore", M))
            }

            function x() {
                z.getCache(M.code, M.subFlickingCode) || (m.height(2e3), Y()), setTimeout(function() {
                    j()
                }, 0)
            }

            function L(e) {
                v.layout(e.$element), Y(), m.resize(), setTimeout(function() {
                    t(window).trigger("scrollend")
                }, 250)
            }

            function D(e) {
                ["MANUAL", "EVENT"].indexOf(e.getMoreType()) < 0 && G(e.code, e.subFlickingCode)
            }

            function P(e) {
                m.resize();
                var t = e.getNclickCode();
                setTimeout(function() {
                    Y()
                }, 250), "MYFEED" == e.code ? a({}, t + "." + (e.$element.attr("data-submenu") || "all") + "more" + (e.getPageNum() - 1), "", "") : a({}, "lod." + t, "", "")
            }

            function F(e) {
                G(M.code, M.subFlickingCode), e.preventDefault()
            }

            function B() {
                var e = document.body.parentElement.offsetHeight;
                (window.pageYOffset || (document.documentElement || document.body).scrollTop) + T > e - T / 2 && (m.resize(), z.getCurInfo() && E.trigger(t.Event("panelAppendPosition", z.getCurInfo())))
            }

            function H(e) {
                var n = e.detail && e.detail.isImmediate;
                I.isApp ? m.css("height", "") : f && !n || (f = !0, function e() {
                    setTimeout(function() {
                        if (p) e();
                        else if (h && !(t(g.getElement()).children().outerHeight() <= 0)) {
                            m.height(t(g.getElement()).children().outerHeight()), v.layout(z.getCache(M.code, M.subFlickingCode)), g.resize();
                            var n = M.subFlickingCode || M.code;
                            null !== R.get(n) && (t.fn.scrollTo(R.get(n), 0), R.set(n)), o.get("MM_scroll") && (t.fn.scrollTo(o.get("MM_scroll"), 0), o.remove("MM_scroll", {
                                domain: "naver.com"
                            }), o.remove("MM_scroll")), f = !1
                        }
                    }, n ? 10 : 250)
                }(), e.stopPropagation())
            }

            function U(e, n, a) {
                if (-1 != O.indexOf(e))
                    if (z.getInfo(e, n)) W(e, n, a);
                    else {
                        a.children().detach();
                        var o = "/include/grid/panel_" + e + ".shtml";
                        n && (o += "?subMenu=" + n), "SHOP_VOGUE" == e && -1 != location.href.indexOf("moreType") && (o += (o.search(/\?/) < 0 ? "?" : "&") + "moreType"), t.ajax(o, {
                            headers: S,
                            success: function(o) {
                                z.setCache(e, n, t(o)), a.attr(u) == e && W(e, n, a)
                            },
                            error: function() {
                                a.html(t("#TPL_PANEL_LOAD_ERROR").html())
                            }
                        })
                    }
            }

            function W(e, n, a) {
                a.children().detach(), a.append(z.getCache(e, n)), e != M.code || n && n != M.subFlickingCode || E.trigger(t.Event("panelChanged", z.getCurInfo()))
            }

            function G(e, n) {
                var a = z.getInfo(e, n),
                    o = a.$element;
                a.isAppending() || a.isLast() || (o.attr("data-appending", !0), Y(), t.ajax(function(e) {
                    var t = e.$element,
                        n = "content",
                        a = e.getPageNum(),
                        o = t.attr("data-rev"),
                        i = t.attr("data-cursor"),
                        r = parseInt(t.attr("data-linenum"), 10) || t.find(".grid1").length,
                        c = parseInt(t.attr("data-contspos"), 10);
                    if (c = isNaN(c) ? 1 : c, "MYFEED" == e.code) {
                        var s = t.attr("data-basemessageid");
                        return "/nvhaproxy_plus/content/list/myfeed?menu=" + e.subCode + "&pNum=" + (a + 1) + "&baseMessageId=" + s
                    }
                    "COMMERCE" == e.homeCode && (n = "commerce");
                    if ("NEWS" == e.code && "NEWS_FEED" == e.subCode) {
                        var d = t.attr("data-gdids") || "",
                            l = t.attr("data-sessionId") || "";
                        return d && window.nmain.gv.isLogin ? "/nvhaproxy_plus/" + n + "/list?menu=" + e.subCode + "&cRev=" + o + "&pNum=" + (a + 1) + "&contsPos=" + c + "&gdids=" + d + "&sessionId=" + l : "/include/grid/contingency/contents_NEWS_FEED_" + (a + 1) + ".shtml.html"
                    }
                    return "/nvhaproxy_plus/" + n + "/list?menu=" + e.subCode + "&cRev=" + o + "&pNum=" + (a + 1) + "&lineNum=" + r + "&contsPos=" + c + "&cursor=" + i
                }(a), {
                    headers: S,
                    success: function(a) {
                        ! function(e, n, a) {
                            var o = z.getInfo(n, a),
                                i = o.$element,
                                r = o.getPageNum(),
                                c = !!e.attr("data-last") && "true" == e.attr("data-last"),
                                s = e.attr("data-linenum") || i.find(".grid1").length + e.find(".grid1").length,
                                d = e.attr("data-contspos"),
                                l = e.attr("data-cursor") || "";
                            if (i.attr("data-last", c).attr("data-page", r + 1).attr("data-linenum", s).attr("data-contsPos", d).attr("data-cursor", l).attr("data-appending", !1), "MYFEED" == o.code) {
                                var u = e.attr("data-basemessageid");
                                i.attr("data-basemessageid", u)
                            }
                            var _ = v.getFlattenBrickList(e);
                            v.layout(z.getCache(n, a), _), E.trigger(t.Event("panelAppended", o))
                        }(t(a), e, n)
                    },
                    error: function() {
                        o.attr("data-appending", !1)
                    }
                }))
            }

            function j() {
                var e = t(g.getPrevElement()),
                    n = t(g.getNextElement());
                if (0 != e.length && 0 != n.lenght) {
                    var a = K(),
                        o = Q();
                    a && e.attr(u, a.code), o && n.attr(u, o.code), o && (_ || z.getInfo(o.code, o.subFlickingCode)) ? U(o.code, o.subFlickingCode, n) : n.children().detach(), a && (_ || z.getInfo(a.code, a.subFlickingCode)) ? U(a.code, a.subFlickingCode, e) : e.children().detach()
                }
            }

            function Y() {
                var e = z.getCurInfo();
                e && e.isLast() ? (e.$element.siblings(".MM_BOTTOM_MORE").css("display", "none").attr("aria-hidden", "true"), e.$element.siblings("._MM_FOOTER").css("display", "").attr("aria-hidden", "false"), C.css({
                    display: "none",
                    position: null,
                    top: null
                })) : !e || ["AUTO", "INFINITY", "EVENT"].indexOf(e.getMoreType()) > -1 ? C.css({
                    display: "",
                    position: e ? null : "relative",
                    top: e ? null : window.innerHeight / 2 - 2e3 + "px"
                }) : C.css({
                    display: "none",
                    position: null,
                    top: null
                })
            }

            function V() {
                T = window.innerHeight, o.set("MM_width", window.innerWidth)
            }

            function $(e, n) {
                if (-1 != O.indexOf(e)) {
                    var a = c.getMeta(e);
                    n = n || (a.childMenuFlicking ? a.childMenus[0] : null), (M.code != e || a.childeMenuFlicking && M.subFlickingCode != n || !z.getCache(e, n)) && (E.trigger(t.Event("panelBeforeChange", {
                        fromCode: M.code,
                        toCode: e,
                        toSubFlickingCode: n
                    })), M.code = e, M.subFlickingCode = n, E.trigger(t.Event("panelShow", {
                        code: e,
                        subFlickingCode: n
                    })), U(e, n, t(g.getElement()).attr(u, e)), _ && setTimeout(function() {
                        j()
                    }, 0), window.scrollTo(0, 0))
                }
            }

            function K() {
                var e = O.indexOf(M.code);
                if (-1 != e) {
                    var t = c.getMeta(M.code);
                    if (t.childMenuFlicking && t.childMenus.indexOf(M.subFlickingCode) > 0) return {
                        code: M.code,
                        subFlickingCode: t.childMenus[t.childMenus.indexOf(M.subFlickingCode) - 1]
                    };
                    var n = O[e > 0 ? e - 1 : O.length - 1],
                        a = c.getMeta(n);
                    return {
                        code: n,
                        subFlickingCode: a.childMenuFlicking ? a.childMenus[a.childMenus.length - 1] : null
                    }
                }
            }

            function Q() {
                var e = O.indexOf(M.code);
                if (-1 != e) {
                    var t = c.getMeta(M.code);
                    if (t.childMenuFlicking && t.childMenus.indexOf(M.subFlickingCode) < t.childMenus.length - 1) return {
                        code: M.code,
                        subFlickingCode: t.childMenus[t.childMenus.indexOf(M.subFlickingCode) + 1]
                    };
                    var n = O[(e + 1) % O.length],
                        a = c.getMeta(n);
                    return {
                        code: n,
                        subFlickingCode: a.childMenuFlicking ? a.childMenus[0] : null
                    }
                }
            }
            var z = function() {
                var e = {},
                    n = {};

                function a(t, n) {
                    return !n && e[t] ? e[t] : n && e[t] && e[t][n] ? e[t][n] : null
                }

                function o(e, a) {
                    return a ? (n[e] = n[e] || {}, n[e][a] = n[e][a] || t.Deferred(), n[e][a]) : (n[e] = n[e] || t.Deferred(), n[e])
                }

                function i(e, t) {
                    var n = a(e, t);
                    if (!n || 0 == n.length) return null;
                    var o = n.find(".grid1_wrap"),
                        i = c.getMeta(e);
                    return {
                        code: e,
                        subFlickingCode: t,
                        $element: o,
                        subCode: o.attr("data-sub-section"),
                        homeCode: i ? i.homeCode : void 0,
                        isLast: function() {
                            return "true" == o.attr("data-last")
                        },
                        isAppending: function() {
                            return "true" == o.attr("data-appending") || !1
                        },
                        getPageNum: function() {
                            return parseInt(o.attr("data-page"), 10) || 1
                        },
                        getMoreType: function() {
                            return o.attr("data-more-type") || "AUTO"
                        },
                        getLcsCode: function() {
                            return o.attr("data-lcs-code")
                        },
                        getNclickCode: function() {
                            return o.attr("data-nclick-code")
                        }
                    }
                }
                return {
                    getCache: a,
                    setCache: function(t, n, a) {
                        a && 0 != a.length || r("[PIM.setCache] $wrap is empty"), n ? (e[t] = e[t] || {}, e[t][n] = a) : e[t] = a, o(t, n).resolve(i(t, n))
                    },
                    getDeferredInfo: function(e, t) {
                        return o(e, t).promise()
                    },
                    getInfo: i,
                    getCurInfo: function(e) {
                        if (e) {
                            var t = c.getMeta(M.code);
                            return M.code && t && (!t.childMenuFlicking || M.subFlickingCode) || (l.lcs({
                                act: "TEMP.omitted"
                            }), r("[panel view] invalid current. " + JSON.stringify(M))), z.getDeferredInfo(M.code, M.subFlickingCode)
                        }
                        return z.getInfo(M.code, M.subFlickingCode)
                    }
                }
            }();
            e.exports = {
                init: function() {
                    if (O = O.concat(c.getMyCommerceCodeList().reverse()).concat(["SEARCH"]).concat(c.getMyContentsCodeList()), E = t(this), C = t("#MM_LOADING"), I.isApp) g = {
                        disableInput: function() {},
                        enableInput: function() {},
                        getElement: function() {
                            return m.find(".flick-panel[" + u + "]").get(0)
                        },
                        getPrevElement: function() {
                            return null
                        },
                        getNextElement: function() {
                            return null
                        },
                        getAllElements: function() {
                            return null
                        },
                        next: function() {},
                        prev: function() {},
                        on: function() {
                            return this
                        },
                        resize: function() {}
                    }, O = [M.code];
                    else {
                        g = new i("#mflick", {
                            defaultIndex: 1,
                            circular: !0,
                            threshold: 60,
                            duration: 200
                        });
                        var e = t(g.getElement()).find(".grid1_wrap"),
                            n = M.subFlickingCode || M.code;
                        e.is("[data-persist=true]") && A.get(n) && (e.replaceWith(A.get(n)), A.set(n), (e = t(g.getElement())).find(".grid1_wrap").attr("data-replace", !0), e.find(".native_scroll[data-scroll-left]").each(function(e, n) {
                            var a = t(n);
                            a.scrollLeft(a.attr("data-scroll-left"))
                        }))
                    }
                    g.on("flick", w).on("beforeFlickStart", b).on("flickEnd", k).on("restore", y), E.on("panelShow", x).on("panelChanged", L).on("panelAppended", P).on("panelAppendPosition", D).on("enableResize", function() {
                        h = !0
                    }).on("disableResize", function() {
                        h = !1
                    }), m.on("click", "a", function(e) {
                        p && (e.preventDefault(), e.stopImmediatePropagation())
                    }).on("mousedown", "a", function(e) {
                        e.preventDefault()
                    }).on("click", ".MM_PANEL_ERROR .MM_PANEL_LOAD_RETRY", function(e) {
                        e.preventDefault(), U(M.code, M.subFlickingCode, t(g.getElement()))
                    }).on("innerTouchStart", function() {
                        g.disableInput()
                    }).on("innerTouchEnd", function() {
                        g.enableInput()
                    }).on("resize", H).on("click", ".MM_BOTTOM_MORE", F), t(window).resize(function(e) {
                        e.target == window && h && (V(), v.layout(z.getCache(M.code, M.subFlickingCode)), g.resize(), m.resize())
                    }).on("scrollend", B), V(), v = new s, z.setCache(M.code, M.subFlickingCode, t(g.getElement()).children()), E.trigger(t.Event("panelShow", M)).trigger(t.Event("panelChanged", z.getCurInfo()))
                },
                moveTo: $,
                moveToNext: function() {
                    g.next()
                },
                moveToPrev: function() {
                    g.prev()
                },
                setCache: z.setCache,
                getCurCode: function() {
                    return M.code
                },
                getCurInfo: z.getCurInfo,
                getCardOffset: function(e) {
                    return v.getCardOffset(e)
                },
                getFlickingPanelList: function() {
                    return O
                },
                insertCard: function(e, t, n) {
                    v.layout(e, t, n)
                },
                isFlicking: function() {
                    return p
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    cP2zWeG1: function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = !1;

            function i(e) {
                e.preventDefault(), t(e.currentTarget).hide().closest(".grid1").find("._MM_SHOPRANK_THEME_LIST").addClass("csr_open").end().find("._MM_SHOPRANK_THEME_MORE_ALL").show().resize()
            }

            function r(e) {
                e.preventDefault();
                var n = t(e.currentTarget).attr("data-code");
                a.set("MM_SHOPRANK_GENDER", n, {
                    expires: 7
                }), location.reload()
            }
            e.exports = {
                init: function(e) {
                    o || (e.on("click", "._MM_SHOPRANK_THEME_MORE", i).on("click", "._MM_SHOPRANK_GENDER", r), o = !0)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "cQz4uzJ+": function(e, t) {
        e.exports = {
            papagoLanguage: {
                ko: {
                    code: "ko",
                    clkcode: "ko",
                    name: "한국어",
                    conversationList: [],
                    transable: ["en", "ja", "zh-CN", "zh-TW", "es", "fr", "de", "ru", "it", "vi", "th", "id"],
                    voice: !0,
                    ocr: !0,
                    pronounce: {
                        text: !1,
                        sound: !0,
                        soundSpeaker: "hana",
                        soundGoPapago: !1
                    }
                },
                en: {
                    code: "en",
                    clkcode: "en",
                    name: "영어",
                    conversationList: [{
                        koText: "예약하고 싶어요.",
                        transText: "I'd like to make a reservation.",
                        transPronounceText: "아잇 라익 투 메익 어 레저베이션",
                        transPronounceSound: "/sound/en/cnts/male/enm001562.mp3"
                    }],
                    transable: ["ko", "ja", "zh-CN", "zh-TW", "es", "fr", "de", "ru", "it", "vi", "th", "id"],
                    voice: !0,
                    ocr: !0,
                    pronounce: {
                        text: !0,
                        sound: !0,
                        soundSpeaker: "clara",
                        soundGoPapago: !1
                    }
                },
                ja: {
                    code: "ja",
                    clkcode: "ja",
                    name: "일본어",
                    conversationList: [{
                        koText: "안녕하세요. 만나서 반갑습니다.",
                        transText: "初[はじ]めまして。どうぞよろしく。",
                        transPronounceText: "하지메마시테? 도-조 요로시쿠",
                        transPronounceSound: "/sound/jp/cnts/female/jpf000191.mp3"
                    }],
                    transable: ["ko", "en", "zh-CN", "zh-TW", "es", "fr", "de", "ru", "it", "vi", "th", "id"],
                    voice: !0,
                    ocr: !0,
                    pronounce: {
                        text: !0,
                        sound: !0,
                        soundSpeaker: "yuri",
                        soundGoPapago: !1
                    }
                },
                "zh-CN": {
                    code: "zh-CN",
                    clkcode: "cn",
                    name: "중국어(간체)",
                    conversationList: [{
                        koText: "안녕하세요",
                        transText: "您好!",
                        transPronounceText: "닌 하오",
                        transPronounceSound: "/sound/cn/cnts/male/cnm000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-TW", "es", "fr", "de", "ru", "it", "vi", "th", "id"],
                    voice: !0,
                    ocr: !0,
                    pronounce: {
                        text: !1,
                        sound: !0,
                        soundSpeaker: "meimei",
                        soundGoPapago: !1
                    }
                },
                "zh-TW": {
                    code: "zh-TW",
                    clkcode: "tw",
                    name: "중국어(번체)",
                    conversationList: [{
                        koText: "안녕하세요",
                        transText: "您好!",
                        transPronounceText: "닌 하오",
                        transPronounceSound: "/sound/cn/cnts/male/cnm000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "es", "fr", "de", "ru", "it", "vi", "th", "id"],
                    voice: !1,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !1,
                        soundGoPapago: !1
                    }
                },
                es: {
                    code: "es",
                    clkcode: "es",
                    name: "스페인어",
                    conversationList: [{
                        koText: "안녕하세요.",
                        transText: "Hola!",
                        transPronounceText: "올라!",
                        transPronounceSound: "/sound/es/cnts/male/esm000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "zh-TW", "fr", "de", "ru", "it", "vi", "th", "id"],
                    voice: !0,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !0,
                        soundSpeaker: "carmen",
                        soundGoPapago: !1
                    }
                },
                fr: {
                    code: "fr",
                    clkcode: "fr",
                    name: "프랑스어",
                    conversationList: [{
                        koText: "안녕하세요. 만나서 반가워요.",
                        transText: "Bonjour. Enchantée.",
                        transPronounceText: "봉주흐. 엉셩떼",
                        transPronounceSound: "/sound/fr/cnts/female/frf000170.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "de", "ru", "it", "vi", "th", "id"],
                    voice: !0,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !0,
                        soundGoPapago: !0
                    }
                },
                de: {
                    code: "de",
                    clkcode: "de",
                    name: "독일어",
                    conversationList: [{
                        koText: "안녕하세요.",
                        transText: "Guten Tag.",
                        transPronounceText: "구-텐 탁-",
                        transPronounceSound: "/sound/de/cnts/male/dem000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "ru", "it", "vi", "th", "id"],
                    voice: !1,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !1,
                        soundGoPapago: !1
                    }
                },
                ru: {
                    code: "ru",
                    clkcode: "ru",
                    name: "러시아어",
                    conversationList: [{
                        koText: "안녕하세요.",
                        transText: "Здравствуйте.",
                        transPronounceText: "즈드랏스부이쪠",
                        transPronounceSound: "/sound/ru/cnts/male/rum000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "de", "it", "vi", "th", "id"],
                    voice: !1,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !0,
                        soundGoPapago: !0
                    }
                },
                it: {
                    code: "it",
                    clkcode: "it",
                    name: "이탈리아어",
                    conversationList: [{
                        koText: "안녕하세요.",
                        transText: "Buon giorno.",
                        transPronounceText: "부온 죠르노",
                        transPronounceSound: "/sound/it/cnts/male/itm000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "de", "ru", "vi", "th", "id"],
                    voice: !1,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !1,
                        soundGoPapago: !1
                    }
                },
                vi: {
                    code: "vi",
                    clkcode: "vi",
                    name: "베트남어",
                    conversationList: [{
                        koText: "안녕하세요.",
                        transText: "Xin chào.",
                        transPronounceText: "씬 짜오",
                        transPronounceSound: "/sound/vn/cnts/male/vnm000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "de", "ru", "it", "th", "id"],
                    voice: !1,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !1,
                        soundGoPapago: !1
                    }
                },
                th: {
                    code: "th",
                    clkcode: "th",
                    name: "태국어",
                    conversationList: [{
                        koText: "안녕하세요.",
                        transText: "สวัสดีครับ",
                        transPronounceText: "싸왓디- 크랍",
                        transPronounceSound: "/sound/th/cnts/male/thm000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "de", "ru", "it", "vi", "id"],
                    voice: !1,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !0,
                        soundGoPapago: !0
                    }
                },
                id: {
                    code: "id",
                    clkcode: "id",
                    name: "인도네시아어",
                    conversationList: [{
                        koText: "안녕하세요.",
                        transText: "Apa kabar?",
                        transPronounceText: "아빠 까바르?",
                        transPronounceSound: "/sound/id/cnts/male/idm000169.mp3"
                    }],
                    transable: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "de", "ru", "it", "vi", "th"],
                    voice: !1,
                    ocr: !1,
                    pronounce: {
                        text: !1,
                        sound: !1,
                        soundGoPapago: !1
                    }
                }
            }
        }
    },
    cR2QioJP: function(module, exports, __webpack_require__) {
        (function($) {
            var nerror = __webpack_require__("frQ1Xk3Y"),
                PanelView = __webpack_require__("baMwVjn2"),
                isCalledServerAd = !1,
                $scriptContainer = $("#_MM_VETA");
            window.naver_corp_da = window.naver_corp_da || {};
            var gv = window.nmain.gv,
                bindInApp = !1,
                getADBDManager = function() {
                    var e = null;
                    return function() {
                        return !e && naver_adbd && naver_adbd.Manager && (e = naver_adbd.Manager({
                            media: "NM_NEW"
                        })), e || {
                            activate: function() {},
                            deactivate: function() {}
                        }
                    }
                }();

            function bind() {
                gv.isApp && !bindInApp || PanelView.getCurInfo(!0).done(function(e) {
                    if (window.naver_corp_da.specialDaAdcallTime = +Date.now(), window.naver_corp_da.brandingDaAdcallTime = +Date.now(), "NEWS_CHANNEL" == e.subCode) try {
                        getADBDManager().activate()
                    } catch (e) {
                        nerror("[DA] naver_adbd.Manager().activate() - " + e)
                    } else try {
                        getADBDManager().deactivate()
                    } catch (e) {
                        nerror("[DA] naver_adbd.Manager().deactivate() - " + e)
                    }
                    var t = {
                        dom: []
                    };
                    e.$element.find("[data-main-da=_MM_MAIN_DA]").toArray().reverse().forEach(function(e) {
                        var n = $(e);
                        "main_search_specialda_1" == n.attr("id") ? bindServerCallAd(n) : bindClientCallAd(n, t)
                    }), t.dom.length > 0 && appendScript(t.adSrc + "su=" + t.unit + "&mdom=" + t.dom.join(",") + "&tb=" + t.tb + "&rui=" + (new Date).getTime() + "&main_svt=" + svt + (t.extra ? "&" + t.extra : ""))
                })
            }

            function bindServerCallAd($ad) {
                var scriptDomId = "#ad_marketing_script",
                    $scriptDom = $(scriptDomId);
                if ($scriptDom.length > 0 && !$scriptDom.attr("data-eval")) try {
                    eval($scriptDom.text()), $scriptDom.attr("data-eval", "true")
                } catch (e) {
                    nerror("[DA] - eval_fail = " + e)
                } else if (1 == isCalledServerAd) {
                    var adId = $ad.attr("id"),
                        tb = $ad.attr("data-tb-id") || "SEARCH_1";
                    $.ajax({
                        url: "/include/HOME/SEARCH/fxshow.shtml?da_dom_id=" + adId + "&tb=" + tb,
                        timeout: 5e3,
                        dataType: "html"
                    }).done(function(resp) {
                        try {
                            resp && "undefined" !== resp && "" !== $.trim(resp) || nerror("[DA] - emptydaresp!! = /include/HOME/SEARCH/fxshow.shtml?da_dom_id=" + adId + "&tb=" + tb)
                        } catch (e) {}
                        var adType = $.trim(resp).replace(/^<!--\s*([\w]+)\s*-->[\w\W]*$/, "$1");
                        $ad.html(resp), $("#HOME_AD").attr("data-ad-type", adType), setNappHomePadding();
                        var $scriptDom = $(scriptDomId);
                        try {
                            eval($scriptDom.text()), $scriptDom.attr("data-eval", "true")
                        } catch (e) {
                            nerror("[DA] - eval_fail flicking = " + e)
                        }
                    })
                }
                isCalledServerAd = !0
            }

            function bindClientCallAd(e, t) {
                var n = e.attr("id"),
                    a = e.attr("data-unit"),
                    o = e.attr("data-tb"),
                    i = e.attr("data-extra"),
                    r = e.attr("data-calp"),
                    c = (e.attr("data-dom-url") + "?").replace("http:", location.protocol);
                "true" == e.attr("data-mdom") ? (t.dom.push(a + ":" + r + ":" + n), t.adSrc = c, t.tb = o, t.unit = e.attr("data-mdom-unit"), t.extra = i) : appendScript(c + "su=" + a + "&da_dom_id=" + n + "&tb=" + o + "&rui=" + (new Date).getTime() + "&main_svt=" + svt + (i ? "&" + i : "") + "&calp=" + r)
            }

            function appendScript(e) {
                var t = document.createElement("script");
                t.src = e, t.charset = "utf-8", t.setAttribute("data-da", "true"), $scriptContainer.append(t)
            }

            function removeAdScript() {
                try {
                    $scriptContainer.html(""), window.onscroll = null
                } catch (e) {
                    nerror("[DA] remove ad script error - " + e)
                }
            }

            function clearActiveView() {
                if ("undefined" != typeof naver_corp_da) {
                    if ("function" == typeof naver_corp_da.clearActiveViews) try {
                        naver_corp_da.clearActiveViews()
                    } catch (e) {
                        nerror("[DA] error at clearActiveViews = " + e)
                    }
                    if ("function" == typeof naver_corp_da.clearViewableImpressionManagers) try {
                        naver_corp_da.clearViewableImpressionManagers()
                    } catch (e) {
                        nerror("[DA] error at clearViewableImpressionManagers = " + e)
                    }
                    if ("function" == typeof naver_corp_da.clearAdEvent) try {
                        naver_corp_da.clearAdEvent()
                    } catch (e) {
                        nerror("[DA] error at clearAdEvent = " + e)
                    }
                }
            }

            function setNappHomePadding() {
                if (gv.isApp && "SEARCH" == PanelView.getCurCode()) try {
                    inapphome.setHomePadding(130)
                } catch (e) {
                    nerror("[DA] inapphome.setHomePadding - " + e)
                }
            }
            $(PanelView).on("panelBeforeChange", clearActiveView), gv.isApp ? $(window).on("appflickingend", function(e) {
                if (!e.detail.visible && "undefined" != typeof naver_corp_da && "function" == typeof naver_corp_da.clearAdEvent) try {
                    naver_corp_da.clearAdEvent()
                } catch (e) {
                    nerror("[DA] error clearAdEvent(isApp) = " + e)
                }
            }) : window.naver_corp_da.home_nav_height = $("#MM_HOME_NAV").outerHeight(), module.exports = {
                bind: bind,
                removeAdScript: removeAdScript,
                setBindedInApp: function(e) {
                    bindInApp = e
                },
                isBindedInApp: function() {
                    return bindInApp
                },
                setNappHomePadding: setNappHomePadding
            }
        }).call(this, __webpack_require__("QFBpxR1d"))
    },
    "d8PZHZa+": function(e, t, n) {
        (function(t) {
            function n(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.closest(".grid1");
                a.find(".MM_AIRS_KC_TAB").removeClass("cm_ta_on"), n.addClass("cm_ta_on");
                var o = n.attr("data-tab-service-nav");
                a.find(".MM_AIRS_KC_TAB_CONTENTS").hide(), a.find('.MM_AIRS_KC_TAB_CONTENTS[data-tab-service-contents="' + o + '"]').show()
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", ".MM_AIRS_KC_TAB", n)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    dmHbt6Xw: function(e, t, n) {
        var a, o, i;
        o = [n("QFBpxR1d")], void 0 === (i = "function" == typeof(a = function(e) {
            e.fn.call = function(e) {
                if (0 === arguments.length || "function" != typeof e) return this;
                var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                return t[0] = this, e.apply(e, t), this
            }
        }) ? a.apply(t, o) : a) || (e.exports = i)
    },
    "e/HHx9+I": function(e, t, n) {
        (function(e) {
            var t, a = n("baMwVjn2"),
                o = n("ozsbSvXK"),
                i = window.nmain.gv,
                r = null,
                c = (e(), 0);

            function s(n) {
                n.preventDefault(), t && (clearTimeout(t), t = null);
                var a = e(this),
                    o = a.closest(".MM_KEYWORD_LIST").find(".MM_KEYWORD.csr_rolling_on, .MM_KEYWORD.csr_tab_on"),
                    i = a.closest(".MM_KEYWORD");
                o.removeClass("csr_open csr_rolling_on csr_tab_on csr_rolling_off").addClass("csr_tab_off"), i.is(o) || i.removeClass("csr_rolling_off csr_tab_off").addClass("csr_open csr_tab_on")
            }

            function d(t) {
                t.preventDefault(), e(this).closest(".MM_WEST_BEAUTY_SHOPPING_TREND_CHART").find(".MM_KEYWORD_LIST").toggleClass("fold")
            }

            function l() {
                t = t || setTimeout(u, 4e3)
            }

            function u() {
                if (t = null, "SHOP_BEAUTY" === a.getCurCode()) {
                    var e = a.getCurInfo();
                    if (e && e.$element) {
                        var n = e.$element.find(".MM_WEST_BEAUTY_SHOPPING_TREND_CHART .MM_KEYWORD_LIST:visible"),
                            o = n.find(".MM_KEYWORD").slice(0, n.hasClass("fold") ? 5 : 10),
                            i = o.filter(".csr_rolling_on, .csr_tab_on"),
                            r = o.eq((o.index(i) + 1) % o.length);
                        i.removeClass("csr_open csr_rolling_on csr_tab_on").addClass("csr_rolling_off"), r.removeClass("csr_rolling_off").addClass("csr_open csr_rolling_on csr_tab_on"), r.find("img.ondemand").removeClass("ondemand").loadImage(), l()
                    }
                }
            }
            o.setInitFn({
                code: "SHOP_BEAUTY",
                initFn: function(t) {
                    if (l(), t.$element.on("click", ".MM_KEYWORD_ITEM_TOGGLE", s).on("click", ".MM_KEYWORD_LIST_TOGGLE", d), i.support.video) {
                        var n = t.$element.find(".MM_AUTOPLAY");
                        if (0 === n.length) return;
                        i.isApp || (c = -1 * e("#MM_HEADER").height()), r = new IntersectionObserver(function(t) {
                            t.forEach(function(t) {
                                var n = e(t.target),
                                    a = n.find("video"),
                                    o = n.find("source[data-src]"),
                                    i = a.data("data-play-timeout");
                                t.intersectionRatio > .8 ? (i = setTimeout(function() {
                                    o.attr("src", o.attr("data-src")), a.one("canplaythrough", function() {
                                        n.addClass("ct_preview")
                                    }), a.attr("data-loaded", "true")[0].load()
                                }, 1e3), a.data("data-play-timeout", i)) : (i && (clearTimeout(i), a.data("data-play-timeout", null)), n.removeClass("ct_preview"), o.attr("src", null), a[0].load())
                            })
                        }, {
                            rootMargin: c + "px 0px 0px 0px",
                            threshold: .8
                        }), n.each(function(e, t) {
                            r.observe(t)
                        })
                    }
                }
            }), o.setUpdateFn({
                code: "SHOP_BEAUTY",
                updateFn: l
            })
        }).call(this, n("QFBpxR1d"))
    },
    "e9QBZxT+": function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = n("frQ1Xk3Y"),
                i = "NFS",
                r = "MM_FS",
                c = ["", "fzoom", "fzoom2", "fzoom3", "fzoom4"],
                s = function() {
                    var e = a.get(i);
                    if (!isNaN(e) && e > 0 && e < 6) return c[e - 1];
                    var n = a.get(r);
                    if (c.indexOf(n) > -1) return n;
                    var o = "fzoom";
                    return t.each(c, function(e) {
                        if (t("html").hasClass(e)) return o = e, !1
                    }), o
                }();

            function d(e) {
                return e < 1 || e > c.length ? (o("[ Font ] changeFontSize : size  is invalid."), !1) : (s = c[e - 1], a.set(r, s, {
                    expires: 3650
                }), a.set(i, e, {
                    expires: 3650,
                    domain: "naver.com"
                }), t("html").removeClass(c.join(" ")).addClass(s), s)
            }
            a.set(i, c.indexOf(s) + 1, {
                expires: 3650,
                domain: "naver.com"
            }), a.set(r, s, {
                expires: 3650
            }), e.exports = {
                getMyFontSize: function() {
                    return s
                },
                getMyFontSizeNumber: function() {
                    return c.indexOf(s) + 1
                },
                increaseFont: function() {
                    return d(c.indexOf(s) + 1 + 1)
                },
                decreaseFont: function() {
                    return d(c.indexOf(s) + 1 - 1)
                },
                changeFont: function(e) {
                    d("number" == typeof e ? e : c.indexOf(e) + 1)
                },
                isSmallest: function(e) {
                    return void 0 === e && (e = s), c[0] === e
                },
                isBiggest: function(e) {
                    return void 0 === e && (e = s), c[c.length - 1] === e
                },
                applyFontSize: function(e) {
                    t(e).removeClass(c.join(" ")).addClass(s)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    erV2gdow: function(e, t, n) {
        (function(t) {
            var a, o = n("vvRPcpct"),
                i = n("adHGn4eU"),
                r = n("+wBTMN/I"),
                c = r.getMyContentsCodeList(),
                s = r.getMyCommerceCodeList(),
                d = function() {
                    var e = {};

                    function n(n) {
                        return 0 == n.search("menu.") ? function(t) {
                            var n = t.substring("menu.".length),
                                a = r.getMeta(n);
                            a && "Y" == a.serviceYn && (e[t] = {
                                code: t,
                                nclickCode: a.nclickCode,
                                type: "PANEL",
                                title: a.menuName + "판",
                                url: "/naverapp/?cmd=onMenu&version=3&menuCode=" + n,
                                iconUrl: a.iconUrl || a.thumbnailUrl
                            })
                        }(n) : 0 == n.search("svc.") ? function(n) {
                            n.search(":") < 0 && (n += ":1");
                            var o = a.serviceMeta.metadata[n];
                            if (o) {
                                var i = t.extend({}, {
                                    code: n,
                                    type: "SERVICE",
                                    nclickCode: n.substring(n.indexOf(".") + 1, n.indexOf(":")),
                                    title: o.title,
                                    iconUrl: o.iconUrl,
                                    badge: o.badge || ""
                                });
                                if (/^.*:1$/.test(n)) i.url = o.url || "";
                                else if (/^.*:2$/.test(n)) switch (a.serviceMeta.os) {
                                    case "ANDROID":
                                        t.extend(i, {
                                            runANDROID: o.androidScheme + "://" + o.androidQuery,
                                            package: o.androidPackage,
                                            androidScheme: o.androidScheme,
                                            androidQuery: o.androidQuery,
                                            isApp: !0
                                        });
                                        break;
                                    case "IOS":
                                        t.extend(i, {
                                            runIOS: o.iosScheme + "://" + o.iosQuery,
                                            appstoreUrl: o.iosAppStoreUrl,
                                            iosScheme: o.iosScheme,
                                            iosQuery: o.iosQuery,
                                            iosInstallId: o.iosInstallId,
                                            isApp: !0
                                        })
                                }
                                e[n] = i
                            }
                        }(n) : 0 == n.search("my.") && function(t) {
                            var n = t.substring("my.".length),
                                a = (i.getAppOpenMainList() || []).filter(function(e) {
                                    return e && e.code == n
                                });
                            a && a[0] && (e[t] = {
                                code: t,
                                nclickCode: "openmain",
                                type: "OPENMAIN",
                                title: a[0].title.replace("#", "") + "판",
                                url: "/naverapp/?cmd=onMenu&version=3&menuCode=" + n,
                                iconUrl: "https://s.pstatic.net/static/www/mobile/up/panel/20180914/32_open-main.png"
                            })
                        }(n), e[n]
                    }
                    return {
                        get: function(t) {
                            return e[t] || n(t)
                        },
                        getAll: function() {
                            return e
                        }
                    }
                }();

            function l(e, t) {
                return e = e || "MM_SHORTCUT", void 0 !== o.get(e) ? o.get(e).split(";").filter(function(e) {
                    return !!e && (!/^[0-9]+/.test(e) && (!(0 == e.search("menu.") && !r.isSubscribed(e.replace("menu.", ""))) && !!d.get(e)))
                }) : t && t.length > 0 ? t : u()
            }

            function u() {
                var e = [],
                    n = window.nmain.gv.age,
                    r = window.nmain.gv.gender;
                e.push("menu." + c[0]), c.indexOf("DATA") > 0 && e.push("menu.DATA"), "m" == r && c.indexOf("SPORTS") > -1 ? e.push("menu.SPORTS") : c.indexOf("ENT") > -1 && e.push("menu.ENT"), s.indexOf("SHOP_VOGUE") > -1 && e.push("menu.SHOP_VOGUE");
                var l = (o.get("SVC_LIST") || "").split("@").filter(function(e) {
                    return e
                });
                if (l.length > 0) e = e.concat(l);
                else {
                    var u = a.serviceMeta.defaultList.filter(function(e) {
                        return !(!isNaN(n) && n >= 30 && 0 == e.search("svc.comic")) && 0 != e.search("svc.stock")
                    });
                    e = e.concat(u)
                }
                if (d.get("svc.keep:1")) {
                    var _ = (window.nmain.gv.isApp || window.nmain.gv.isInApp) && i.compareBSC({
                            android: 660,
                            iphone: 660,
                            ipad: 660
                        }) >= 0,
                        f = !window.nmain.gv.isApp && !window.nmain.gv.isInApp;
                    (_ || f) && (e = t.map(e, function(e) {
                        return "svc.bmk:1" == e ? "svc.keep:1" : e
                    }))
                }
                return e.slice(0, 12)
            }
            e.exports = {
                init: function() {
                    (a = JSON.parse(t("#MM_SHORTCUT_META").html())).labRev = parseInt(t("#MM_SHORTCUT_LAB_META *").attr("data-lab-revision"), 10) || 0, t.extend(a.serviceMeta.metadata, a.serviceExt)
                },
                isExistShortcutCookie: function() {
                    return void 0 !== o.get("MM_SHORTCUT")
                },
                getMyIdList: l,
                setMyIdList: function(e, t) {
                    var n = e.uniq(),
                        a = "";
                    n.length > 0 && (a = n.length + ";" + n.join(";")), t = t || "MM_SHORTCUT", o.set(t, a, {
                        expires: 365,
                        path: "/"
                    })
                },
                isDefaultSetting: function() {
                    var e = u();
                    return l().join(",") == e.join(",")
                },
                getMeta: d.get,
                getLabRev: function() {
                    return a.labRev
                },
                sendToApp: function() {
                    if (window.inapphome && window.inapphome.sendHomeShortcutData && a) {
                        var e = l().map(d.get).filter(function(e) {
                            return !!e
                        }).map(function(e) {
                            var n = t.extend({}, e);
                            return "svc.music:1" == n.code && (n.nclickCode = "musicser"), n.code = n.code.replace("menu.", "").replace("my.", ""), n
                        });
                        window.inapphome.sendHomeShortcutData(JSON.stringify({
                            shortcutList: e
                        }))
                    }
                },
                sendMyIdListToApp: function() {
                    if (window.inapphome && window.inapphome.sendHomeShortcutSelectedData && a) {
                        var e = l().map(function(e) {
                            return e.replace("menu.", "").replace("my.", "")
                        });
                        window.inapphome.sendHomeShortcutSelectedData(JSON.stringify(e))
                    }
                },
                sendGreendotShortcutMetaToApp: function() {
                    if (window.inapphome && window.inapphome.sendGreendotShortcutMeta && a) {
                        var e = [];
                        e = e.concat(c.map(function(e) {
                            return t.extend({}, d.get("menu." + e), {
                                code: e
                            })
                        })).concat(s.map(function(e) {
                            return t.extend({}, d.get("menu." + e), {
                                code: e
                            })
                        })).concat(Object.keys(a.serviceMeta.metadata).map(function(e) {
                            return d.get(e)
                        })), window.inapphome.sendGreendotShortcutMeta(JSON.stringify({
                            shortcutMeta: e
                        }))
                    }
                },
                sendGreendotShortcutDataToApp: function(e) {
                    if (window.inapphome && window.inapphome.sendGreendotShortcutData) {
                        var n = e.map(d.get).filter(function(e) {
                            return !!e
                        }).map(function(e) {
                            return t.extend({}, e, {
                                code: e.code.replace("menu.", "").replace("my.", "")
                            })
                        });
                        return window.inapphome.sendGreendotShortcutData(JSON.stringify(n))
                    }
                },
                getGreendotShortcutIdFromApp: function() {
                    if (window.inapphome && window.inapphome.getGreendotShortcutData) {
                        var e = window.inapphome.getGreendotShortcutData();
                        try {
                            e = "object" == typeof e ? e : JSON.parse(e)
                        } catch (t) {
                            e = []
                        }
                        return e || []
                    }
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "eswtSY/X": function(e, t, n) {
        (function(t) {
            e.exports = {
                check: function(e) {
                    e.each(function(e, n) {
                        t(n).find(".MM_JS_RANDOM").each(function(e, n) {
                            var a = t(n).find("[data-js-random=true]");
                            if (a.length > 1) {
                                var o = parseInt(Math.random() * a.length);
                                a.hide().eq(o).show()
                            }
                        })
                    })
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "f+aW8DC0": function(e, t, n) {
        var a = n("vvRPcpct"),
            o = "MM_SEARCH_CARD_LIST",
            i = ["RTK", "WETR", "DIC", "TRANS", "RANK", "SVC", "VIDEO", "MUSIC", "AIRS_NEWS", "AIRS_ENT", "AIRS_SPORTS", "AIRS_VIDEO", "SINGINGROOM"],
            r = ["SINGINGROOM"],
            c = {
                RTK: {
                    title: "급상승 검색어·뉴스토픽",
                    clk: "cardklh"
                },
                WETR: {
                    title: "날씨",
                    clk: "cardwth"
                },
                DIC: {
                    title: "사전",
                    clk: "carddic"
                },
                TRANS: {
                    title: "번역기",
                    clk: "cardtrans"
                },
                RANK: {
                    title: "연령별 더 많이 본 뉴스",
                    clk: "cardanws"
                },
                SVC: {
                    title: "서비스 바로가기",
                    clk: "cardsvc"
                },
                VIDEO: {
                    title: "동영상 TOP 100",
                    clk: "cardvideo"
                },
                MUSIC: {
                    title: "뮤직 TOP 100",
                    clk: "cardmusic"
                },
                AIRS_NEWS: {
                    title: "추천 뉴스",
                    clk: "cardnewsairs"
                },
                AIRS_ENT: {
                    title: "추천 연예",
                    clk: "cardentairs"
                },
                AIRS_SPORTS: {
                    title: "추천 스포츠",
                    clk: "cardsptairs"
                },
                AIRS_VIDEO: {
                    title: "추천 동영상",
                    clk: "cardvidairs"
                },
                SINGINGROOM: {
                    title: "노래방 노래검색",
                    clk: "cardsongon"
                }
            };

        function s(e) {
            return c[e]
        }
        e.exports = {
            getCardInfo: s,
            getAllCardIdList: function() {
                return i.filter(s)
            },
            isPromotionCard: function(e) {
                return -1 !== r.indexOf(e)
            },
            saveMyCardIdList: function(e) {
                var t = e.filter(s);
                a.set(o, t.join(";"), {
                    expires: 3650,
                    path: "/"
                })
            },
            getMyCardIdList: function() {
                var e = a.get(o);
                return "string" != typeof e ? [] : e.trim().split(";").filter(s)
            }
        }
    },
    fcr6xQ7D: function(e, t, n) {
        (function(t) {
            var a, o = n("vvRPcpct"),
                i = function(e) {
                    e.preventDefault(), o.set("MM_HOME_SEARCH_APP_PROMOTION", "1", {
                        expires: 1
                    }), a.hide()
                };
            e.exports = {
                init: function() {
                    0 != (a = t("#MM_HOME_SEARCH_APP_PROMOTION")).length && a.on("click", "a[data-action=no]", i)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    flag3YBs: function(e, t, n) {
        (function(t, a) {
            var o = n("frQ1Xk3Y"),
                i = n("vvRPcpct"),
                r = ".cui_weather",
                c = ".MM_NOW_WRAP",
                s = void 0,
                d = void 0,
                l = !1,
                u = {
                    play: function(e) {
                        var n = inapphome.getCurrentAudioData() ? JSON.parse(inapphome.getCurrentAudioData()) : void 0;
                        return n && n.contentId === e && !0 === n.isPlaying ? (_.fadein(e), void _.setTimeoutFadeout(2e3)) : n && n.contentId === e && !1 === n.isPlaying ? (inapphome.playCurrentAudio(!1), _.fadein(e), void _.setTimeoutFadeout(2e3)) : (n && n.contentId !== e && !0 === n.isPlaying && inapphome.pauseCurrentAudio(), _.fadein(e), void
                            function(e, n) {
                                var a = document.getElementById("nowliveJingleSoundAudio");
                                a && (a.pause(), t(a).remove());
                                var o = document.createElement("audio");
                                o.id = "nowliveJingleSoundAudio", o.src = e, o.type = "audio/mpeg", t(o).on("ended pause abort", function() {
                                    t(this).remove(), n()
                                }).on("error stalled", function() {
                                    t(this).remove(), setTimeout(n, 1500)
                                }), t(c).append(o), o.play()
                            }(_.getJingle(e), function() {
                                u.clickIntro || (inapphome.playAudioMiniPlayer(e), _.fadeout())
                            }))
                    },
                    playAudioFullPlayer: function(e) {
                        inapphome.playAudioFullPlayer(e, !1)
                    }
                },
                _ = {
                    getJingle: function(e) {
                        return t(".MM_NOW_INTRO[data-content-id=" + e + "]").attr("data-jingle")
                    },
                    fadein: function(e) {
                        u.clickIntro = !1;
                        var n = t(".MM_NOW_INTRO[data-content-id=" + e + "]");
                        t(".MM_NOW_INTRO").hide(), n.show(), t(r).addClass("cw_now_slide"), t(c).removeClass("MM_ACTIVE").addClass("MM_INACTIVE")
                    },
                    fadeout: function() {
                        u.clickIntro || (t(r).removeClass("cw_now_onair").addClass("cw_now_out"), setTimeout(function() {
                            t(r).removeClass("cw_now_slide").removeClass("cw_now_out")
                        }, 300))
                    },
                    setTimeoutFadeout: function(e) {
                        _.clearTimeoutFadeout(), _.timeoutId = setTimeout(_.fadeout, e)
                    },
                    clearTimeoutFadeout: function() {
                        _.timeoutId && clearTimeout(_.timeoutId)
                    },
                    hide: function() {
                        t(r).removeClass("cw_now_onair").removeClass("cw_now_slide").removeClass("cw_now_out").removeClass("cw_coach"), _.clearTimeoutFadeout()
                    }
                };

            function f(e) {
                e.preventDefault(), _.hide();
                var n = t(e.currentTarget).attr("data-content-id");
                u.playAudioFullPlayer(n), u.clickIntro = !0, a(this, "home.nowplayintro", "", "")
            }

            function p(e) {
                e.preventDefault();
                var n = t(e.currentTarget).attr("data-content-id");
                u.play(n)
            }
            var h = {
                    onscrollPlaylist: function(e) {
                        var n = t(e.currentTarget);
                        n.scrollLeft() > 0 ? n.closest(".cw_now_player").addClass("cw_scroll") : n.closest(".cw_now_player").removeClass("cw_scroll")
                    },
                    touchStart: function(e) {
                        var n = t(e.currentTarget);
                        n.trigger("innerTouchStart"), e.stopPropagation(), d = !1 === n.closest(".cw_now_player").hasClass("cw_scroll") ? e.clientX || e.originalEvent.touches[0].clientX : void 0
                    },
                    touchMove: function(e) {
                        if (d) {
                            var n = t(e.currentTarget);
                            n.children().outerWidth() < n.outerWidth() && e.preventDefault(), (e.clientX || e.originalEvent.touches[0].clientX) - d > 40 && (m.unexpandNowArea(), a(this, "home.nowdwswp", "", ""))
                        }
                    },
                    touchEnd: function(e) {
                        d = void 0
                    }
                },
                m = {
                    nowliveTouchStart: function(e) {
                        t(e.currentTarget).trigger("innerTouchStart"), e.stopPropagation(), s || (s = e.clientX || e.originalEvent.touches[0].clientX, nowliveTouchStartY = e.clientY || e.originalEvent.touches[0].clientY)
                    },
                    nowliveTouchEnd: function(e) {
                        s && (t(e.currentTarget).trigger("innerTouchEnd"), e.stopPropagation(), "true" === t(c).attr("data-expand") ? (m.expandNowArea(), a(this, "home.nowupswp", "", "")) : "true" === t(c).attr("data-unexpand") && (m.unexpandNowArea(), a(this, "home.nowdwswp", "", "")), t(c).css("left", "").css("background", "").attr("data-expand", "").attr("data-unexpand", ""), s = void 0)
                    },
                    nowliveTouchMoveInactive: function(e) {
                        if (s) {
                            if (nowliveTouchStartY) {
                                var n = Math.abs(s - e.touches[0].clientX),
                                    a = Math.abs(nowliveTouchStartY - e.touches[0].clientY);
                                if (nowliveTouchStartY = void 0, a > n) return void(s = void 0)
                            }
                            t(e.currentTarget);
                            e.stopPropagation(), e.preventDefault();
                            var o = e.touches[0].pageX;
                            if (o > s) t(c).attr("data-expand", "false");
                            else {
                                var i = (s - o) / window.innerWidth,
                                    r = 60 - 100 * i;
                                t(c).css("left", r + "%").css("background", "rgba(219, 237, 250, " + (.2 + i) + ")").attr("data-expand", "true")
                            }
                        }
                    },
                    nowliveTouchMoveActive: function(e) {
                        if (s) {
                            t(e.currentTarget);
                            e.stopPropagation(), e.preventDefault();
                            var n = e.touches[0].pageX;
                            if (n < s) t(c).attr("data-unexpand", "false");
                            else {
                                var a = (n - s) / window.innerWidth * 100;
                                t(c).css("left", a + "%").attr("data-unexpand", "true")
                            }
                        }
                    },
                    expandNowArea: function() {
                        t(c).removeClass("MM_INACTIVE").addClass("MM_ACTIVE"), t(r).addClass("cw_now_onair").removeClass("cw_coach"),
                            function() {
                                var e = t(".cw_cnow"),
                                    n = e.attr("data-timestamp");
                                if (!n || l) return;
                                (new Date).getTime() - n > 6e5 && (l = !0, t.ajax("/include/grid/nowlive/home_nowlive.shtml", {
                                    timeout: 3e3,
                                    dataType: "html"
                                }).done(function(n) {
                                    $html = t(n);
                                    var a = t($html[0]).attr("data-timestamp"),
                                        o = $html.find(".cw_play_l").html(),
                                        i = $html.find(".MM_NOW_INTRO");
                                    e.attr("data-timestamp", a), e.find(".cw_play_l").html(o), i.each(function() {
                                        $this = t(this);
                                        var n = $this.attr("data-content-id"),
                                            a = e.find(".MM_NOW_INTRO[data-content-id=" + n + "]");
                                        0 === a.length ? e.append(this) : a.attr("data-jingle", $this.attr("data-jingle"))
                                    }), e.loadImage(), l = !1
                                }).fail(function(e) {
                                    l = !1, o("[nowlive] refresh list ajax error. " + e.statusText)
                                }))
                            }()
                    },
                    unexpandNowArea: function() {
                        t(c).removeClass("MM_ACTIVE").addClass("MM_INACTIVE"), t(r).removeClass("cw_now_onair"), s = void 0
                    }
                };

            function M() {
                t(".MM_NOWLIVE_LIST").on("scroll", h.onscrollPlaylist), t(".cw_cnow").loadImage()
            }
            e.exports = {
                init: function(e) {
                    window.inapphome && window.inapphome.playAudioMiniPlayer && (i.get("MM_NOW_COACH") || (i.set("MM_NOW_COACH", "1", {
                        expires: 365,
                        domain: "naver.com"
                    }), t(r).addClass("cw_coach")), e.$element.on("touchstart", ".MM_INACTIVE", m.nowliveTouchStart).on("touchend", ".MM_INACTIVE", m.nowliveTouchEnd).on("touchmove", ".MM_INACTIVE", m.nowliveTouchMoveInactive).on("touchstart", ".MM_ACTIVE .cw_now_title", m.nowliveTouchStart).on("touchend", ".MM_ACTIVE .cw_now_title", m.nowliveTouchEnd).on("touchmove", ".MM_ACTIVE .cw_now_title", m.nowliveTouchMoveActive).on("click", ".MM_INACTIVE .cw_now_title", function() {
                        m.expandNowArea(), a(this, "home.nowupcls", "", "")
                    }).on("click", ".MM_ACTIVE .cw_now_title", function() {
                        m.unexpandNowArea(), a(this, "home.nowdwcls", "", "")
                    }).on("click", ".MM_NOW_INTRO", f).on("click", ".MM_INACTIVE .MM_PLAY_NOWLIVE", function(e) {
                        p(e), a(this, "home.nowplay", "", "")
                    }).on("click", ".MM_ACTIVE .MM_PLAY_NOWLIVE", function(e) {
                        p(e), a(this, "home.nowupplay", "", "")
                    }).on("click", ".cw_play_plan", function() {
                        a(this, "home.nowupcm", "", "")
                    }).on("touchstart", ".MM_ACTIVE .MM_NOWLIVE_LIST", h.touchStart).on("touchmove", ".MM_ACTIVE .MM_NOWLIVE_LIST", h.touchMove).on("touchend", ".MM_ACTIVE .MM_NOWLIVE_LIST", h.touchEnd), M())
                },
                refreshWeatherHtml: M
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    frQ1Xk3Y: function(e, t) {
        function n(e) {
            window.nmain.sendNelo(e)
        }
        n.setEnable = function(e) {
            window.nmain.setEnableNelo(e)
        }, e.exports = n
    },
    g3OWnEks: function(e, t, n) {
        (function(e) {
            var t = n("ozsbSvXK"),
                a = n("CcLOrJYx"),
                o = n("frQ1Xk3Y");

            function i(t) {
                var n = e(t.currentTarget);
                r(n, !0), a.search({
                    success: function() {
                        r(n, !1),
                            function(t) {
                                e.ajax({
                                    url: "/nvweather_mmap?path=include/grid/lifeWeatherIndexBanner&fname=LIFE_WEATHER_INDEX",
                                    method: "GET",
                                    timeout: 5e3,
                                    success: function(e) {
                                        if (e) {
                                            var n = t.closest(".grid1");
                                            n.html(e)
                                        }
                                    },
                                    error: function(e, t, n) {
                                        o("[ healthIndex ] updateHealthIndexData response error" + n)
                                    }
                                })
                            }(n)
                    },
                    fail: function() {
                        r(n, !1)
                    },
                    geolocationOptions: {
                        enableHighAccuracy: !0,
                        timeout: 5e3,
                        maximumAge: 0
                    }
                })
            }

            function r(e, t) {
                t ? e.addClass("cw_ico_loading") : e.removeClass("cw_ico_loading")
            }

            function c(t) {
                var n = e(t.currentTarget),
                    a = n.closest(".grid1");
                n.hasClass("cw_up") ? (n.removeClass("cw_up").children().first().text("지수 펼치기"), a.find("._MM_hidden").hide()) : (n.addClass("cw_up").children().first().text("지수 접기"), a.find("._MM_hidden").show())
            }
            t.setInitFn({
                code: "HEALTH",
                initFn: function(e) {
                    e.$element.on("click", "._MM_lifeWeatherIndexLocation", i).on("click", "._MM_lifeWeatherIndexMore", c)
                }
            })
        }).call(this, n("QFBpxR1d"))
    },
    g45UpFdn: function(e, t, n) {
        (function(t) {
            var a = n("xHdGogJp"),
                o = n("frQ1Xk3Y"),
                i = n("baMwVjn2"),
                r = {
                    subscribe: "구독이 실패하였습니다.",
                    unsubscribe: "구독 해지가 실패하였습니다."
                };

            function c(e) {
                var n = t(e.currentTarget),
                    i = n.data("status"),
                    c = a.request("JOURNALIST", n, function(e) {
                        return "SUCCESS" === e.message
                    }, {
                        status: i
                    });
                c && c.done(function() {
                    n.hide().siblings("._MM_JR_SUBSCRIBE").show()
                }).fail(function(e, n, a) {
                    t.popup.toast(r[i]), o("[ journalist ] subscribe api response error" + a)
                })
            }

            function s(e) {
                var n = t(e.currentTarget),
                    a = n.data("exposurecount"),
                    r = n.parent().prev("._MM_JR").first();
                t.ajax({
                    url: "/nvhaproxy_plus/content/template/content-journalistRecommend",
                    type: "GET",
                    timeout: 5e3,
                    dataType: "html",
                    data: {
                        menu: i.getCurCode(),
                        exposureCount: a
                    },
                    success: function(e) {
                        e && r.html(e)
                    },
                    error: function(e, n, a) {
                        t.popup.toast("다른 기자 보기에 실패하였습니다."), o("[ journalist ] refresh has response error" + a)
                    }
                })
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", "._MM_JR_SUBSCRIBE", c).on("click", "._MM_JR_REFRESH", s)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    gUV3XHOG: function(e, t, n) {
        var a = n("vvRPcpct"),
            o = null,
            i = function(e) {
                e.preventDefault();
                var t = e.currentTarget.getAttribute("data-closed-key");
                a.set("MM_HOME_ISSUEBANNER", t, {
                    expires: 3
                }), o.find(".MM_HOME_ISSUEBANNER").hide()
            };
        e.exports = {
            init: function(e) {
                (o = e.$element).on("click", "button.MM_HOME_ISSUEBANNER_CLOSE", i)
            }
        }
    },
    "go+fg0F6": function(e, t, n) {
        (function(e) {
            e.fn.isInViewport = function(t, n) {
                if (0 === e(this).length) return !1;
                var a = t || 0,
                    o = n || 0,
                    i = e(this).offset().top,
                    r = i + e(this).outerHeight(),
                    c = e(window).scrollTop() + a,
                    s = c + e(window).height() - o;
                return r > c && i < s
            }
        }).call(this, n("QFBpxR1d"))
    },
    i7fuE2jX: function(e, t, n) {
        (function(e) {
            var t = {
                refreshButtonSelector: ".MM_DATA_REFRESH",
                refreshUrlFunction: function(e) {
                    return e.attr("data-refresh-url")
                },
                refreshTargetFunction: function(e) {
                    return e.closest(e.attr("data-refresh-target").replace("!", ""))
                },
                refreshResponseTargetFunction: function(t, n) {
                    var a = t.attr("data-refresh-resp-target");
                    return a ? e(n.find(a).get(0).outerHTML) : n
                },
                refreshFunction: function(e, t) {
                    t.loadImage(), e.html(t)
                },
                refreshFailFunction: function() {}
            };

            function n(t, n) {
                var a = n.refreshTargetFunction(t),
                    o = n.refreshUrlFunction(t);
                o && e.ajax(o, {
                    timeout: 3e3
                }).done(function(o) {
                    var i = n.refreshResponseTargetFunction(t, e(o));
                    n.refreshFunction(a, i)
                }).fail(n.refreshFailFunction)
            }
            e.fn.dataRefresh = function(a) {
                var o = e.extend({}, t, a || {});
                return this.each(function(t, a) {
                    var i = e(a),
                        r = i.data("$$__DATA_REFRESH_INITED__") || [];
                    r.includes(o.refreshButtonSelector) || (i.on("click", o.refreshButtonSelector, function(t) {
                        return function(t, a) {
                            t.preventDefault(), n(e(t.currentTarget), a)
                        }(t, o)
                    }), r.push(o.refreshButtonSelector), i.data("$$__DATA_REFRESH_INITED__", r))
                })
            }, e.fn.doDataRefresh = function(a) {
                var o = e.extend({}, t, a || {});
                return this.each(function(t, a) {
                    n(e(a), o)
                })
            }
        }).call(this, n("QFBpxR1d"))
    },
    icU1iw6Y: function(e, t, n) {
        var a, o, i;
        o = [n("QFBpxR1d")], void 0 === (i = "function" == typeof(a = function(e) {
            var t = function(e) {
                if (e.attr("data-fixedsize")) e.addClass("change");
                else {
                    var t = e.attr("width");
                    "100%" !== t && e.attr({
                        width: "100%",
                        height: null
                    }).addClass("change")
                }
            };
            e.fn.loadImage = function(n) {
                "boolean" == typeof n && (n = {
                    processAll: n
                });
                var a = e.extend({
                    loadingCount: 2,
                    selector: "img[data-src]:not(.ondemand)",
                    processAll: !0
                }, n);
                return this.each(function(n, o) {
                    var i = e(o).is(a.selector) ? e(o) : e(o).find(a.selector);
                    0 != i.length && (a.processAll || (i = i.slice(0, a.loadingCount)), function(n) {
                        n.each(function(n, a) {
                            var o = e(a),
                                i = o.attr("data-src");
                            i && (o.attr("src", i).addClass("loaded change").removeAttr("data-src"), t(o))
                        })
                    }(i))
                })
            }
        }) ? a.apply(t, o) : a) || (e.exports = i)
    },
    ieoLjlAQ: function(e, t, n) {
        (function(t, a) {
            var o, i, r, c = n("baMwVjn2"),
                s = n("+wBTMN/I"),
                d = {
                    update: function() {
                        d.hscroll = i.hscroll().get(0), d.$search = o.find(".nav_item:has([data-id=SEARCH])");
                        var e, n, a = d.hscroll.maxScrollX(),
                            c = s.getMyContentsCodeList()[0],
                            l = s.getMyCommerceCodeList()[0],
                            u = s.getMeta(i.find(".nav_item.nav_on [data-id]").attr("data-id")),
                            _ = -1 * (d.hscroll.x() + i.width() / 2);
                        u && "COMMERCE" == u.homeCode ? (a -= r, e = _ + r / 2, n = _) : (e = _, n = _ - r / 2), i.find(".nav_item").each(function(o, i) {
                            var r = t(i),
                                u = r.find("a.nav_a").attr("data-id"),
                                _ = r.offset().left + r.width() / 2;
                            "CONTENTS" != s.getMeta(u).homeCode ? _ += n : _ += e, _ = Math.min(_, Math.abs(a)), d.hscrollX[u] = Math.max(_, 0), u == c ? (d.contentsFirstX = _, d.$contentsFirst = r) : u == l ? (d.commerceFirstX = Math.max(0, _), d.$commerceFirst = r) : "SEARCH" == u && (d.$search = r)
                        })
                    },
                    hscrollX: {}
                };

            function l(e) {
                if (e) {
                    o.find(".nav_on").removeClass("nav_on").children("a").find("span.blind").eq(1).remove(), o.find(".nav_item:has([data-id=" + e.code + "])").addClass("nav_on").children("a").append('<span class="blind">선택됨</span>'), d.hscroll.scrollTo(d.hscrollX[e.code], 450);
                    var n = s.getMeta(e.code);
                    if (n && n.childMenuFlicking) {
                        var a = o.find(".nav_on"),
                            i = a.find(".nav_page");
                        0 == i.length && (i = t('<span class="nav_page">' + n.childMenus.map(function(e) {
                            return '<span class="page">' + e + "</span>"
                        }).join("") + "</spn>"), a.append(i)), i.children().removeClass("current").eq(n.childMenus.indexOf(e.subFlickingCode)).addClass("current")
                    }
                }
            }
            var u = function(e) {
                    "COMMERCE" == s.getMeta(e.toCode).homeCode ? o.addClass("nav_commerce") : o.removeClass("nav_commerce"), l({
                        code: e.toCode,
                        subFlickingCode: e.toSubFlickingCode,
                        fromCode: e.fromCode
                    })
                },
                _ = function(e) {
                    "SEARCH" == e.code && (d.$commerceFirst.removeClass("nav_on"), d.$contentsFirst.removeClass("nav_on"), d.$search.addClass("nav_on"), d.hscroll.scrollTo(d.hscrollX[e.code]))
                },
                f = function(e) {
                    e.preventDefault();
                    var n = t(e.currentTarget).attr("data-id");
                    c.moveTo(n), c.getCurInfo(!0).done(function(e) {
                        a({
                            panelCode: e.code
                        }, "ctg." + e.getNclickCode(), "", "")
                    })
                };
            e.exports = {
                init: function() {
                    o = t("#MM_NAV"), i = t("#MM_NAV_SCROLL"), r = o.find(".MM_nav_more").width(), i.hscroll(), d.update(), l(c.getCurInfo()), o.on("click", "[data-id]", f), t(c).on("panelBeforeChange", u).on("panelRestore", _)
                },
                addNewMark: function(e) {
                    var t = o.find("[data-id=" + e + "]");
                    t.find(".nav_notice").length > 0 || t.append('<span class="nav_notice"></span>')
                },
                onCommerceFirst: function() {
                    d.$search.removeClass("nav_on"), d.$contentsFirst.removeClass("nav_on"), d.$commerceFirst.addClass("nav_on"), d.hscroll.scrollTo(d.commerceFirstX)
                },
                onContentsFirst: function() {
                    d.$search.removeClass("nav_on"), d.$commerceFirst.removeClass("nav_on"), d.$contentsFirst.addClass("nav_on"), d.hscroll.scrollTo(d.contentsFirstX)
                },
                updatePanelPosition: function() {
                    d && d.hscroll && (d.hscroll.resize(), d.update())
                },
                resize: function() {
                    d && d.hscroll && d.hscroll.resize && d.hscroll.resize()
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    kLDOLPGr: function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = "MM_WEBT_LIGHT";
            e.exports = {
                init: function() {
                    ! function() {
                        if (window.nmain.gv.isLogin && "false" === t(".MM_WEBTOON").attr("data-heavy")) {
                            if (a.get(o)) return;
                            a.set(o, "1", {
                                expires: 1 / 24,
                                path: "/"
                            })
                        }
                    }()
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    l6ioPQQn: function(e, t, n) {
        (function(t) {
            var n = null;

            function a(e) {
                e.forEach(function(e) {
                    if (e.isIntersecting) {
                        var a = t(e.target);
                        a.find(".ondemand").removeClass("ondemand"), a.loadImage(), n.unobserve(e.target)
                    }
                })
            }
            e.exports = {
                init: function(e) {
                    n && (n.disconnect(), n = null), "DISCOVER" === e.subCode && (n = new IntersectionObserver(a, {
                        rootMargin: "150px",
                        threshold: 0
                    })) && e.$element.find(".grid1").each(function(e, a) {
                        t(a).find("img[data-src]").addClass("ondemand"), n.observe(a)
                    })
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "lMsB9/T3": function(e, t, n) {
        (function(e, t) {
            var a, o = n("vvRPcpct"),
                i = n("+wBTMN/I"),
                r = n("baMwVjn2"),
                c = n("frQ1Xk3Y"),
                s = n("ozsbSvXK"),
                d = "/api_bookmark",
                l = 10,
                u = i.getMeta("MYFEED"),
                _ = "/api_snsinfra",
                f = "MM_MF_SVC",
                p = ["BLOG", "POST", "CAFE", "TVCAST"],
                h = "ALL",
                m = "MY구독",
                M = {
                    blog: "이웃 글",
                    post: "팔로잉 글",
                    cafe: "구독 게시판",
                    tvcast: "채널"
                },
                v = {
                    blog: "이웃 관계는 유지, " + m + "에서만 새 글을 받지 않겠습니다.",
                    post: "팔로잉은 유지, " + m + "에서만 새 글을 받지 않겠습니다.",
                    cafe: "구독은 유지, " + m + "에서만 새 글을 받지 않겠습니다.",
                    tvcast: "구독은 유지, " + m + "에서만 새 글을 받지 않겠습니다."
                };

            function g(t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    a = n.data("service"),
                    o = n.data("id");
                e.ajax({
                    url: _ + "/proxy/sg/MyFeedConfigServiceBO/setRecommendExposure",
                    timeout: 5e3,
                    dataType: "jsonp",
                    data: {
                        exposure: !1
                    },
                    success: function(t) {
                        if (0 === t.code) {
                            var i = a + "_" + o,
                                r = n.closest('._MM_MF_CONTENT[data-contentid="' + i + '"]');
                            if (r.length <= 0 && (r = n.closest('._MM_MF_PANEL_CONTENT[data-contentid="' + i + '"]')), r.length > 0) r.find("._MM_MF_AGE_RECOMMEND_HIDDEN").show("block"), r.find("._MM_MF_MORE_LAYER").hide()
                        } else e.popup.toast("추천 컨텐츠 30일간 안보기가 실패하였습니다.")
                    },
                    error: function() {
                        e.popup.toast("추천 컨텐츠 30일간 안보기가 실패하였습니다.")
                    }
                })
            }

            function T(t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    a = n.data("category");
                n.hide(), e.ajax({
                    url: _ + "/proxy/sg/MyFeedServiceBO/hideOnBoardCategory.json",
                    timeout: 5e3,
                    dataType: "jsonp",
                    data: {
                        category: a
                    },
                    success: function(t) {
                        if (0 === t.code) {
                            var o = n.closest('._MM_MF_CONTENT[data-category="' + a + '"]');
                            if (o) o.find("._MM_MF_HIDDEN").show("block"), o.find("._MM_MF_MORE_LAYER").hide()
                        } else e.popup.toast("이 컨텐츠 30일간 안보기가 실패하였습니다.")
                    },
                    error: function() {
                        e.popup.toast("이 컨텐츠 30일간 안보기가 실패하였습니다.")
                    }
                })
            }

            function E(t) {
                t.preventDefault(), e.ajax({
                    url: _ + "/proxy/sg/MyFeedServiceBO/hideAllOnBoardCategories.json",
                    timeout: 5e3,
                    dataType: "jsonp",
                    success: function() {},
                    error: function(e, t, n) {
                        c("[nmain.myfeed] onClickHideAllOnboardBanner : " + n)
                    }
                })
            }

            function C(t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    a = n.siblings("._MM_MF_MORE_LAYER");
                a.is(":visible") ? (a.hide(), a.removeClass("ucm_ftop"), n.removeClass("ucm_btn_on")) : (a.hide(), n.removeClass("ucm_btn_on"), n.addClass("ucm_btn_on"), a.show(), e("#ct").height() - a.offset().top < a.height() ? a.addClass("ucm_ftop") : a.removeClass("ucm_ftop"))
            }

            function O(t) {
                var n = e(t.currentTarget).parent();
                n && n.hide()
            }

            function N(t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    a = n.data("service"),
                    o = n.data("id");
                e.ajax({
                    url: _ + "/proxy/sg/MyFeedServiceBO/hideContent.json",
                    timeout: 5e3,
                    dataType: "jsonp",
                    data: {
                        serviceCode: a,
                        messageIdList: o
                    },
                    success: function(t) {
                        if (0 === t.code) {
                            var i = a + "_" + o;
                            n.closest('._MM_MF_CONTENT[data-contentid="' + i + '"]').find("._MM_MF_HIDDEN").show(), n.closest("._MM_MF_MORE_LAYER").hide()
                        } else e.popup.toast("이 글만 안보기가 실패하였습니다.")
                    },
                    error: function() {
                        e.popup.toast("이 글만 안보기가 실패하였습니다.")
                    }
                })
            }

            function A(n) {
                n.preventDefault();
                var a = e(n.currentTarget),
                    o = a.data("service"),
                    i = a.attr("data-status"),
                    s = a.data("channel-name"),
                    d = a.data("gdid") || "",
                    l = "hideChannel",
                    f = "[" + s + "]" + M[o] + "을" + m + "에서 더 이상 보지 않습니다.\n새로고침 하시면 바로 반영 됩니다.",
                    p = M[o] + " 안보기가 실패하였습니다.";
                "show" === i && (l = "showChannel", f = "[" + s + "]" + M[o] + "을" + m + "에서 계속 보겠습니다.", p = M[o] + "보기가 실패하였습니다.");
                var h = u.nclickCode;
                t(a, h + o + i + "all", d, ""), !1 !== confirm(f) ? (t(a, h + i + "allok", "", ""), e.ajax({
                    url: _ + "/invoker/" + l + ".json",
                    timeout: 5e3,
                    dataType: "jsonp",
                    data: {
                        serviceCode: o,
                        type: a.data("type"),
                        hideKey: a.data("hide-key")
                    },
                    success: function(t) {
                        var n = r.getCurInfo();
                        if (!0 === t.result && "MYFEED" === n.code) {
                            e("._MM_MF_MORE_LAYER").hide();
                            var c = n.subCode,
                                d = a.data("class") || "uct",
                                l = "",
                                u = "show" === i ? " 안보기" : " 보기",
                                _ = "show" === i ? v[o] : "";
                            l = "MYFEED_NEW" === c || "MYFEED_VIEW" === c ? '<div class="' + d + '_function_info"><span class="=info_main"><span class="main_txt">&#39;<span class="txt">' + s + "</span>&#39;</span>" + M[o] + u + '</span><span class="info_sub">' + _ + "</span></div>" : '<div class="ucm_fw"><span class="ucm_fat"><span class="ucm_ftt">&#39;<span class="ucm_fst">' + s + "</span>&#39;</span>" + u + '</span><span class="ucm_fas">' + _ + "</span></div>", a.html(l), a.attr("data-status", "show" === i ? "hide" : "show")
                        } else e.popup.toast(p)
                    },
                    error: function(t, n, a) {
                        e.popup.toast(p), c("[nmain.myfeed] onClickMoreHideAll", a)
                    }
                })) : t(a, h + i + "allno", "", "")
            }

            function R(t) {
                var n = e(t.currentTarget);
                n.hasClass("_MM_MF_HIDE_EACH") || e.ajax({
                    url: _ + "/proxy/sg/MyFeedServiceBO/readContent",
                    timeout: 5e3,
                    dataType: "jsonp",
                    data: {
                        serviceCode: n.data("service"),
                        messageIdList: n.data("id")
                    },
                    success: function() {},
                    error: function(e, t, n) {
                        c("[nmain.myfeed] onClickContent -" + m + " 읽음처리 실패 : " + n)
                    }
                })
            }

            function I(t) {
                t.preventDefault();
                var n = e(t.currentTarget).data("view");
                o.set("MM_MF_VIEW", n, {
                    expires: 3650
                }), L()
            }

            function S(t) {
                var n = e(t.currentTarget),
                    i = a || h,
                    r = n.data("service"),
                    c = !1,
                    s = o.get("MM_MF_TAB_SVC") || "";
                r !== i ? (a = r, o.remove("MM_SUB_MENU"), c = !0) : "DISCOVER" === s && (c = !0), a === h ? o.remove("MM_MF_SVC") : a && o.set("MM_MF_SVC", a, {
                    expires: 3650
                }), t.preventDefault(), c && (o.remove("MM_MF_TAB_SVC"), L())
            }

            function w(e) {
                e.preventDefault(), o.set("MM_MF_TAB_SVC", "DISCOVER", {
                    expires: 3650
                }), L()
            }

            function b(t) {
                t.preventDefault();
                var n = e(t.data.elId);
                n && (n.show(), t.stopPropagation()), k(t)
            }

            function k(t) {
                var n = e(t.currentTarget),
                    a = e("#_MM_MF_SERVICE_OPTION"),
                    o = e("#_MM_MF_VIEWTYPE_OPTION");
                if (a.length > 0) y(a, o, "_MM_MF_SUBMENU_LAYER_BTN", "_MM_MF_VIEWTYPE_LAYER_BTN", n);
                else {
                    var i = e("#_MM_MF_LOGOUT_AGE_OPTION"),
                        r = e("#_MM_MF_LOGOUT_GENDER_OPTION");
                    i.length > 0 && y(i, r, "_MM_MF_LOGOUT_AGE_BTN", "_MM_MF_LOGOUT_GENDER_BTN", n)
                }
            }

            function y(e, t, n, a, o) {
                var i = e.is(":visible"),
                    r = t.is(":visible");
                o.hasClass(n) ? r && t.hide() : o.hasClass(a) ? i && e.hide() : (i && e.hide(), r && t.hide())
            }

            function x(t) {
                t.preventDefault();
                var n = e(t.currentTarget).data("code");
                "" !== n && (location.href = "/naverapp/?version=3&cmd=onMenu&menuCode=" + n)
            }

            function L() {
                i.changeActive("MYFEED");
                var e = location.href.split("#")[0];
                setTimeout(function() {
                    location.replace(e)
                }, 100)
            }

            function D(t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    a = n.closest(".grid1"),
                    i = n.data("name"),
                    r = n.data("value"),
                    c = Number(n.data("expire"));
                a && (a.hide(), o.set(i, r, {
                    expires: c
                }), t.stopPropagation())
            }

            function P(t) {
                var n = [];
                t.each(function(t, a) {
                    n.push(e(a).attr("data-url"))
                }), 0 !== n.length && e.ajax({
                    url: d + "/main/api2/bookmark/exist_v2.nhn",
                    timeout: 3e3,
                    method: "POST",
                    data: {
                        urls: JSON.stringify(n)
                    }
                }).done(function(n) {
                    if ("" !== n && "0" === n.code) {
                        var a = n.result.list.filter(function(e) {
                            return !0 === e.exist
                        });
                        a.length > 0 && t.each(function(t, n) {
                            a.forEach(function(t) {
                                t.url === e(n).attr("data-url") && e(n).addClass("on").attr("data-urlHash", t.urlHash)
                            })
                        })
                    }
                    t.attr("data-loaded", "true").show()
                }).fail(function() {
                    t.attr("data-loaded", "true").show(), c("[nmain.myfeed] initBookmark 북마크 목록 조회 실패")
                })
            }

            function F(n) {
                n.preventDefault();
                var a = e(n.currentTarget),
                    o = u.nclickCode;
                a.hasClass("on") ? (t({}, o + ".unmark", "", ""), function(t) {
                    var n = [];
                    n.push(t.attr("data-urlHash")), e.ajax({
                        url: d + "/api2/bookmark/delete.nhn",
                        timeout: 3e3,
                        method: "POST",
                        data: {
                            urlHashs: JSON.stringify(n)
                        }
                    }).done(function(n) {
                        "" !== n && "0" === n.code ? t.attr("data-urlHash", "").removeClass("on") : e.popup.toast("북마크 삭제가 실패하였습니다.")
                    }).fail(function() {
                        c("[nmain.myfeed] deleteBookmark fail"), e.popup.toast("북마크 삭제가 실패하였습니다.")
                    })
                }(a)) : (t({}, o + ".mark", "", ""), function(t) {
                    e.ajax({
                        url: d + "/api2/bookmark/add.nhn",
                        timeout: 3e3,
                        method: "POST",
                        data: {
                            title: t.attr("data-title"),
                            url: t.attr("data-url")
                        }
                    }).done(function(n) {
                        "" !== n && "0" === n.code ? t.attr("data-urlHash", n.result.urlHash).addClass("on") : e.popup.toast("북마크 추가가 실패하였습니다.")
                    }).fail(function() {
                        c("[nmain.myfeed] addBookmark fail"), e.popup.toast("북마크 추가가 실패하였습니다.")
                    })
                }(a))
            }
            s.setInitFn({
                code: "MYFEED",
                initFn: function(t) {
                    "DISCOVER" !== t.$element.attr("data-sub-section") ? (t.$element.on("click", ".id_mychannel", k).on("click", "._MM_MF_VIEW_OPTION_ITEM", I).on("click", "._MM_MF_VIEWTYPE_LAYER_BTN", {
                        elId: "#_MM_MF_VIEWTYPE_OPTION"
                    }, b).on("click", "._MM_MF_SUBMENU_OPTION_ITEM", S).on("click", "._MM_MF_TABMENU_OPTION", w).on("click", "._MM_MF_SUBMENU_LAYER_BTN", {
                        elId: "#_MM_MF_SERVICE_OPTION"
                    }, b).on("click", "._MM_MF_MORE_AGE_RECOMMEND_HIDE", g).on("click", "._MM_MF_ONBOARD_BANNER_HIDE", T).on("click", "._MM_MF_ONBOARD_BANNER_ALL_HIDE", E).on("click", "._MM_MF_MORE", C).on("click", "._MM_MF_MORE_HIDE", N).on("click", "._MM_MF_MORE_HIDE_ALL", A).on("click", "._MM_MF_MORE_CLOSE", O).on("click", "._MM_MF_ITEM", R).on("click", "._MM_MF_PANEL_GO", x).on("click", "._MM_MF_NB", D).on("click", "._MM_MF_BOOKMARK", F), function() {
                        var t = o.get("MM_SUB_MENU") || "",
                            n = o.get(f),
                            i = "" !== t ? t : n;
                        e.each(p, function(e, t) {
                            i === t && (a = i)
                        })
                    }(), o.get("MM_MF_VIEW_GUIDE") || o.set("MM_MF_VIEW_GUIDE", "1", {
                        expires: 365
                    }), o.get("MM_MF_SET_GUIDE") || o.set("MM_MF_SET_GUIDE", "1", {
                        expires: 365
                    }), function() {
                        var t = e("#ext_profile");
                        0 !== t.length && "true" !== (t.attr("data-loaded") || "") && e.ajax({
                            url: "https://static.nid.naver.com/getProfile.nhn?svc=m_main_aside",
                            timeout: 5e3,
                            dataType: "jsonp",
                            callback: "callback",
                            data: {
                                uid: parseInt(1e7 * Math.random(), 10)
                            },
                            success: function(e) {
                                "Success" === e.rtn_msg ? "" !== e.image_url && (t.attr("src", e.image_url + "?type=s80"), t.attr("data-loaded", "true")) : c("[nmain.myfeed] onClickMySetTab" + e.failType)
                            },
                            error: function(e, t, n) {
                                c("[nmain.myfeed] onClickMySetTab" + n)
                            }
                        })
                    }(), function() {
                        var t = o.get("MM_MF_VIEW_GUIDE") || "4",
                            n = e("#MM_MF_VIEW_GUIDE");
                        n.length > 0 && "1" === t && (n.show(), o.set("MM_MF_VIEW_GUIDE", "4", {
                            expires: 365
                        }), setTimeout(function() {
                            n.hide()
                        }, 5e3))
                    }()) : n("6lFuCf88").init(t)
                }
            }), s.setUpdateFn({
                code: "MYFEED",
                updateFn: function(e) {
                    ! function(e) {
                        var t = e.$element.find("._MM_MF_BOOKMARK[data-loaded=false]"),
                            n = t.length;
                        if (0 !== n) {
                            var a = n % l > 0,
                                o = parseInt(n / l);
                            a && (o += 1);
                            for (var i = 0; i < o; i++) {
                                var r = i * l,
                                    c = r + l;
                                c > n && (c = n);
                                var s = t.slice(r, c);
                                P(s)
                            }
                        }
                    }(e), window.__splugin && window.__splugin.init()
                }
            })
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    mF8z463q: function(e, t, n) {
        (function(t) {
            Cookies = n("vvRPcpct");
            var a = !1;

            function o(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    a = n.data("tab-nav"),
                    o = n.closest(".cui_video_ranking").data("categorys").split(", ").indexOf(a);
                o > -1 && Cookies.set("MM_WT_TAB", o, {
                    expires: 1
                })
            }
            e.exports = {
                init: function(e) {
                    a || (e.on("click", "._MM_WT_TAB", o), a = !0)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    mWQXg0D3: function(e, t, n) {
        (function(t) {
            e.exports = {
                init: function(e, n) {
                    nmain.gv.isApp || "IOS" !== nmain.gv.osType || e.on("touchend", function() {
                        var e = t(".native_scroll").get(0);
                        if (e) {
                            var n = e.scrollLeft;
                            e.scrollLeft = n ? n - 1 : 1
                        }
                    }), (nmain.gv.isApp ? e : n).on("touchstart", ".native_scroll", function(e) {
                        var n = t(e.currentTarget);
                        n.children().outerWidth() < n.outerWidth() || (n.trigger("innerTouchStart"), e.stopPropagation())
                    }).on("touchmove", ".native_scroll", function(e) {
                        var n = t(e.currentTarget);
                        n.children().outerWidth() < n.outerWidth() || e.stopPropagation()
                    }).on("touchend", ".native_scroll", function(e) {
                        var n = t(e.currentTarget);
                        n.children().outerWidth() < n.outerWidth() || (n.trigger("innerTouchEnd"), e.stopPropagation())
                    }), e.on("click", ".native_scroll[data-active-position] .MM_SCROLL_ITEM", function(e) {
                        var n = e.currentTarget,
                            a = t(n),
                            o = a.closest(".native_scroll"),
                            i = o.attr("data-active-position");
                        "center" === i ? o.hscrollTo(n.offsetLeft + a.outerWidth() / 2 - o.width() / 2) : "left" === i && o.hscrollTo(n.offsetLeft - 10)
                    })
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    mdCbEu7W: function(e, t, n) {
        (function(t, a) {
            var o = n("baMwVjn2"),
                i = {
                    SPORTS: !1,
                    ENT: !1
                };
            e.exports = {
                check: function(e, n) {
                    n in i && !i[n] && (e.on("click", "[role=link][data-link]", function(e) {
                        var n = t(e.currentTarget),
                            i = o.getCurInfo().getNclickCode() + "." + n.attr("data-clk");
                        return a(this, i, "", ""), setTimeout(function() {
                            location.href = n.attr("data-link")
                        }, 300), !1
                    }), i[n] = !0)
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    nTaCWwD3: function(e, t, n) {
        (function(t) {
            var a, o = n("vvRPcpct"),
                i = n("baMwVjn2"),
                r = n("K0zMvcnj"),
                c = n("frQ1Xk3Y"),
                s = (window.nmain.gv, 0),
                d = !1,
                l = 1,
                u = !1,
                _ = "MM_NEWS_SUBTAB",
                f = t("#ct");

            function p(e) {
                e.preventDefault();
                var n = t(e.currentTarget);
                if (!n.data("disabled")) {
                    var a = n.attr("aria-expanded"),
                        o = n.parent().data("officeId");
                    "true" == a ? (n.attr("aria-expanded", !1), t("#NEWS_FLASH_WRAP").find("._MM_NEWS_FLASH_MORE_ITEM").hide()) : (n.attr("aria-expanded", !0), t("#NEWS_FLASH_WRAP").find("._MM_NEWS_FLASH_MORE_ITEM[data-office-id=" + o + "]").show()), n.toggleClass("cn_up").closest("._ROLLING").toggleClass("PAUSE")
                }
            }

            function h(e) {
                var n = t(e.currentTarget).data("sub-menu");
                t("#MM_DESCRIPTION_" + n).hide(), o.set("MM_DESCRIPTION_CLOSE_" + n, 1, {
                    expires: 365
                })
            }

            function m(e) {
                e.preventDefault(), o.remove(_), location.href = "/naverapp/?version=3&cmd=onMenu&menuCode=NEWS_FEED"
            }

            function M(e) {
                e.preventDefault(), o.remove(_), location.href = "/naverapp/?version=3&cmd=onMenu&menuCode=NEWS_CHANNEL"
            }

            function v(e) {
                window.nmain.gv.isApp && g(e)
            }

            function g(e) {
                var n = t(e.currentTarget).closest("li"),
                    a = n.find("._MM_NEWS_FEED_AIRS_ITEM_CLUSTER"),
                    o = a.find(".can_cluster_num");
                n.hasClass("can_visited") || (n.addClass("can_visited"), a.append(" 개 관련기사"), o.text(Number(o.text() - 1)))
            }

            function T(e) {
                e.preventDefault(), o.set("MM_scroll", "0", {
                    expires: 1 / 24 / 60
                }), setTimeout(function() {
                    location.reload()
                }, 250)
            }

            function E() {
                ! function() {
                    var e = t("._MM_JOURNAL_BOX"),
                        n = t(".id_nmap[data-da=wrap_nmap_news_channel_1]"),
                        a = t(".id_nmap[data-da=wrap_nmap_news_channel_2]"),
                        o = n.next();
                    e.first().after(n), o.hasClass("_MM_JOURNAL_BOX") || n.after(o);
                    e.length >= 3 ? t("._MM_JOURNAL_BOX:eq(2)").after(a) : a.remove()
                }(), t("._MM_MOVE_TOP").removeClass("dimmed"), t("._MM_MOVE_TOP").first().addClass("dimmed")
            }

            function C(e) {
                e.preventDefault();
                var n = t(this).closest("._MM_JOURNAL_BOX"),
                    a = n.data("press"),
                    o = n.data("oid");
                if (a && o) {
                    var i = '네이버 메인에서 구독한 <span class="la_st">' + a + "</span><br />언론사가 제외됩니다.";
                    t.popup.t9({
                        msg: i,
                        ok: "완료",
                        cancel: "취소",
                        okCb: function() {
                            t.ajax({
                                url: "/api_media/channel/removeChannel.nhn?officeId=" + o,
                                type: "DELETE",
                                timeout: 3e3,
                                data: {
                                    oid: o
                                },
                                success: function(e) {
                                    ! function(e, n) {
                                        if (!e) return;
                                        if (n.remove(), s = t("._MM_JOURNAL_BOX").length, t("#MM_SUBSCRIBE_COUNT").text(s), t("._MM_JOURNAL_BOX").length <= 0) return void I.refreshPage();
                                        E()
                                    }(e, n)
                                },
                                error: function(e, n, a) {
                                    t.popup.toast("언론사 구독 해제에 실패하였습니다."), c("[newsPress] 구독 언론사 '구독 해제' 응답 오류." + a)
                                }
                            })
                        }
                    })
                }
            }

            function O(e) {
                var n = t(e.currentTarget).closest("._MM_JOURNAL_BOX");
                n.find("._MM_MORE_ARTICLE").show(), n.find("._MM_JOURNAL_MORE").hide(), n.find("._MM_JOURNAL_FOLD").show()
            }

            function N(e) {
                var n = t(e.currentTarget).closest("._MM_JOURNAL_BOX");
                n.find("._MM_MORE_ARTICLE").hide(), n.find("._MM_JOURNAL_MORE").show(), n.find("._MM_JOURNAL_FOLD").hide()
            }

            function A(e) {
                var n = t(e.currentTarget);
                location.href = n.data("link")
            }

            function R(e) {
                var n = ".MM_NEWS_CHANNEL_PROMOTION_ITEM[aria-checked=true]";
                "main_category" == e ? n = "._MM_NEWS_CHANNEL_CATEGORY_BANNER_ITEM[aria-checked=true]" : "main_recommend" == e ? n = "._MM_RECOMMEND_CHANNEL_ITEM[aria-checked=true]" : "main_all" == e && (n = "a[aria-checked=true]");
                var a = t(n).toArray().map(function(e) {
                    return {
                        oid: e.dataset.oid,
                        name: e.dataset.press
                    }
                });
                return t.grep(a, function(e) {
                    return "" != e.oid
                })
            }
            var I = {
                    init: function() {
                        ! function() {
                            if (o.get("MM_CHANNEL_SUBSCRIBE_COMPLETE")) o.remove("MM_CHANNEL_SUBSCRIBE_COMPLETE"), t.popup.toast({
                                selector: "#MM_POPUP_TOAST_CIRCLE",
                                msg: "적용완료",
                                showTime: 1e3,
                                fadeOut: 500
                            })
                        }()
                    },
                    refreshPage: function() {
                        r.run()
                    },
                    refresh: function() {
                        t(".MM_NEWS_CHANNEL_PROMOTION_SAVE");
                        t("._MM_NEWS_CHANNEL_CATEGORY_BANNER_SAVE")
                    },
                    refreshPromotionBanner: function() {
                        var e = t(".MM_NEWS_CHANNEL_PROMOTION_SAVE");
                        R().length > 0 ? e.removeClass("disabled") : e.addClass("disabled")
                    },
                    refreshCategoryBanner: function() {
                        R("main_category").length > 0 ? S.showFloatingButton() : S.hideFloatingButton()
                    }
                },
                S = {
                    init: function() {
                        f.on("click", ".MM_NEWS_CHANNEL_PROMOTION_ITEM", this.onClickChannelPromotionItem).on("click", ".MM_NEWS_CHANNEL_PROMOTION_SAVE", this.onClickChannelSave).on("click", ".MM_NEWS_CHANNEL_ORDER_TYPE", this.onClickChannelOrder).on("click", "._MM_CHANNEL_COMMENT_BANNER a.ccn_title_link", this.onClickCommentBanner).on("click", "._MM_CHANNEL_COMMENT_BANNER button[data-type=submit]", this.onClickCommentSubmit).on("click", "._MM_CHANNEL_COMMENT_BANNER button[data-type=close]", this.onClickCommentClose).on("click", "._MM_PIN", this.onClickPin).on("click", "._MM_NEWS_TOP_BANNER_CLOSE", this.onClickNewsTopBannerClose), f.on("click", ".MM_NEWS_CHANNEL_ALL_SELECT", this.onClickSelectAll).on("click", "._MM_RECOMMEND_CHANNEL_ITEM", this.onClickSubscribeRecommendItems).on("click", "._MM_RECOMMEND_CHANNEL_ITEM_ALL", this.onClickSubscribeRecommendItems).on("click", "._MM_RECOMMEND_CHANNEL_REFRESH", this.onClickRecommendIRefresh).on("click", "._MM_RECOMMEND_ITEM", this.onClickSubscribeRecommendItems).on("click", "._MM_RECOMMEND_REFRESH", this.onClickRecommendRefresh).on("click", "._MM_NEWS_CHANNEL_ORDER_BANNER_CLOSE", this.onClickChannelOrderBannerClose).on("click", "._MM_CHANNEL_REMOVE_THIS_BUNDLE", this.onClickRemoveThisBundle).on("click", "._MM_NEWS_CHANNEL_CATEGORY_BANNER_ITEM", this.onClickChannelCategoryItem).on("click", "._MM_NEWS_CHANNEL_CATEGORY_ALL_SELECT", this.onClickCategorySelectAll).on("click", ".MM_NEWS_CHANNEL_PROMOTION_ALL_SELECT", this.onClickChannelPromotionSelectAll).on("click", "._MM_REJECT_ALL_SELECTED", this.onClickRejectAllSelected), t(i).on("panelBeforeChange", this.hideFloatingButton), t(document).on("click", "._MM_NEWS_CHANNEL_CATEGORY_BANNER_SAVE", this.onClickChannelSave)
                    },
                    onClickChannelOrderBannerClose: function(e) {
                        t(e.currentTarget).closest(".id_cui_channel_journal").hide(), o.set("MM_CHANNEL_ORDER_BANNER_HIDE", "2", {
                            expires: 3650
                        })
                    },
                    onClickChannelCategoryItem: function(e) {
                        S.onClickChannelItem(e, "._MM_NEWS_CHANNEL_CATEGORY_BANNER", I.refreshCategoryBanner)
                    },
                    onClickChannelPromotionItem: function(e) {
                        S.onClickChannelItem(e, ".MM_NEWS_CHANNEL_PROMOTION", I.refreshPromotionBanner)
                    },
                    onClickChannelItem: function(e, n, a) {
                        e.preventDefault();
                        var o = t(e.currentTarget),
                            i = o.closest("._MM_PAGING_CONT"),
                            r = "false" == o.attr("aria-checked") ? "true" : "false";
                        o.attr("aria-checked", r);
                        var c = o.closest(".brick-vowel").find("a" + n + "_ITEM[aria-checked=true]").length,
                            s = n + "_SAVE",
                            d = t(s);
                        if (i.length > 0 && (d = i.find(s)), d) {
                            var l = c > 0 ? c + "개 " : "";
                            d.text(l + "언론사 구독");
                            var u = d.siblings(".MM_NEWS_CHANNEL_PROMOTION_ALL_SELECT");
                            u.length > 0 && (c > 0 ? (u.hide(), d.show()) : (u.show(), d.hide()))
                        }
                        a()
                    },
                    onClickRejectAllSelected: function(e) {
                        var n = t(e.currentTarget).closest("._MM_PAGING_CONT");
                        n.find("a.MM_NEWS_CHANNEL_PROMOTION_ITEM").attr("aria-checked", !1), n.find(".MM_NEWS_CHANNEL_PROMOTION_ALL_SELECT").show(), n.find(".MM_NEWS_CHANNEL_PROMOTION_SAVE").hide()
                    },
                    onClickChannelSave: function(e) {
                        e.preventDefault();
                        var n = t(e.currentTarget).attr("data-from"),
                            a = R(n).map(function(e) {
                                return e.oid
                            }).reduce(function(e, t) {
                                return e.indexOf(t) < 0 && e.push(t), e
                            }, []);
                        if (!d && 0 != a.length) {
                            d = !0;
                            var o = "?officeIds=" + a.toString() + "&from=" + n;
                            t.ajax({
                                url: "/api_media/channel/addChannels.nhn" + o,
                                type: "POST",
                                timeout: 3e3,
                                contentType: "application/json",
                                complete: function(e) {
                                    S.onLoadSaveAjax(e)
                                },
                                error: function(e) {
                                    S.onLoadSaveAjax(e)
                                }
                            })
                        }
                    },
                    onClickSubscribeRecommendItems: function(e) {
                        e.preventDefault(), S.displayLoadingAnimation(!0);
                        t(e.currentTarget).attr("data-type");
                        S.subscribeItem(e)
                    },
                    subscribeItem: function(e) {
                        var n = t(e.currentTarget),
                            a = n.data("oid"),
                            o = n.data("from"),
                            i = n.data("select"),
                            r = "false" == n.attr(i) ? "true" : "false";
                        n.attr("aria-checked", r);
                        var c = {
                            officeIds: a,
                            from: o,
                            isSubscribe: r
                        };
                        S.saveSelectedItem(c)
                    },
                    subscribeItemRecommend: function(e) {
                        var n = {
                            officeIds: t(e.currentTarget).closest(".cui_channel_journal").find("._MM_CHANNEL_RECOMMEND_JOURNAL").filter(":visible").toArray().map(function(e) {
                                return t(e).attr("data-oid")
                            }).toString(),
                            from: "main_category",
                            isSubscribe: !0
                        };
                        S.saveSelectedItem(n)
                    },
                    subscribeItemPackage: function(e) {
                        for (var n = t(e.currentTarget), a = S.getIsSelected(n.closest(".id_cui_channel_journal"), "false" == n.attr("data-selected") ? "true" : "false", !0), o = n.closest(".cui_channel_journal").find(".ccj_card_item").eq(3 * (l - 1)), i = 0; i < 3; i++) {
                            var r = o.find("a").attr("data-oid");
                            o.find("a").attr("aria-checked", a), S.syncItemStatus(r, a), o = o.next()
                        }
                        n.attr("data-selected", a), S.toggleClickCode(n, a), I.refresh()
                    },
                    getIsSelected: function(e, t, n) {
                        var a = !0;
                        return S.checkAllSelected(e, n) > 0 ? a = !1 : S.checkAllSelected(e, n) < 0 && (a = !0), a
                    },
                    checkAllSelected: function(e, t) {
                        var n = e.find("a[aria-checked]");
                        t && (n = n.filter(":visible"));
                        var a = n.filter("[aria-checked=true]");
                        return a.length == n.length ? 1 : 0 == a.length ? -1 : 0
                    },
                    syncItemStatus: function(e, n) {
                        t("a[aria-checked]").filter("[data-oid=" + e + "]").attr("aria-checked", n)
                    },
                    saveSelectedItem: function(e) {
                        var n = "/api_media/channel/addChannels.nhn",
                            a = "?officeIds=" + e.officeIds + "&from=" + e.from,
                            o = "POST",
                            i = "구독";
                        "false" == e.isSubscribe && (n = "/api_media/channel/removeChannels.nhn", a = "?officeIds=" + e.officeIds, o = "DELETE", i = "구독 해지"), t.ajax({
                            url: n + a,
                            type: o,
                            timeout: 3e3,
                            contentType: "application/json",
                            complete: function() {
                                S.afterSaveProcess()
                            },
                            error: function(e, t, n) {
                                S.afterSaveProcess(), c("[news-channel] 추천템플릿 언론사 '" + i + "' 응답 오류." + n)
                            }
                        })
                    },
                    afterSaveProcess: function() {
                        S.displayLoadingAnimation(!1), I.refreshPage()
                    },
                    displayLoadingAnimation: function(e) {
                        var n = t("#MM_LOADING2");
                        e ? n.show() : n.hide()
                    },
                    onClickRecommendRefresh: function(e) {},
                    onClickRecommendIRefresh: function(e) {
                        var n, a = t(e.currentTarget).attr("data-recommend-count"),
                            o = t(e.currentTarget).closest(".cui_channel_journal").find(".ccj_rank_item");
                        o.hide();
                        var i = 3 * l++;
                        a > i ? n = o.eq(i) : (n = o.first(), l = 1, i = 0);
                        for (var r = 0; r < 3; r++) n.show(), n = n.next();
                        var c = Math.min(a, 3 * l) - i;
                        t("._MM_RECOMMEND_CHANNEL_ITEM_ALL").text("언론사 " + c + "개 구독"), t("._MM_RECOMMEND_CHANNEL_ITEM_ALL").attr("data-page", l)
                    },
                    onClickChannelPromotionSelectAll: function(e) {
                        var n = t(e.currentTarget),
                            a = n.closest("#MM_NEWS_CHANNEL_PROMOTION_BANNER"),
                            o = a.find("a.MM_NEWS_CHANNEL_PROMOTION_ITEM");
                        o.attr("aria-checked", !0), n.hide();
                        var i = a.find("button.MM_NEWS_CHANNEL_PROMOTION_SAVE");
                        i.text(o.length + "개 언론사 구독"), i.show(), I.refreshPromotionBanner()
                    },
                    onClickCategorySelectAll: function(e) {
                        var n = t(e.currentTarget).closest(".brick-vowel").find("a._MM_NEWS_CHANNEL_CATEGORY_BANNER_ITEM");
                        n.attr("aria-checked", !0);
                        var a = n.length,
                            o = t("._MM_NEWS_CHANNEL_CATEGORY_BANNER_SAVE");
                        if (o) {
                            var i = a > 0 ? a + "개 " : "";
                            o.text(i + "언론사 구독")
                        }
                        I.refreshCategoryBanner()
                    },
                    onClickSelectAll: function(e) {
                        var n, a = t(e.currentTarget),
                            o = S.getIsSelected(t("#ct"), a.attr("data-selected"));
                        "true" === o ? ((n = a.closest(".id_news").find(".MM_NEWS_CHANNEL_CATEGORY_BANNER_ITEM")).attr("aria-checked", !1), a.attr("data-selected", !1), n.each(function(e, n) {
                            var a = t(n).attr("data-oid");
                            S.syncItemStatus(a, o)
                        })) : ((n = a.closest(".id_news").find(".MM_NEWS_CHANNEL_CATEGORY_BANNER_ITEM")).attr("aria-checked", !0), a.attr("data-selected", !0), n.each(function(e, n) {
                            var a = t(n).attr("data-oid");
                            S.syncItemStatus(a, o)
                        })), S.toggleClickCode(a, o), I.refresh()
                    },
                    toggleClickCode: function(e, t) {
                        var n = e.attr("data-" + t + "-clk");
                        e.attr("data-clk", n)
                    },
                    onLoadSaveAjax: function(e) {
                        200 <= e.status && e.status <= 299 ? (o.set("MM_L_HASH", "NEWS_CHANNEL", {
                            expires: 365
                        }), I.refreshPage()) : d = !1
                    },
                    onClickChannelOrder: function(e) {
                        var n = t(e.currentTarget).attr("data-order");
                        t.ajax({
                            url: "/api_media/channel/setOrder",
                            type: "POST",
                            data: {
                                sort: n
                            },
                            timeout: 3e3,
                            dataType: "json",
                            success: function(e) {
                                e ? I.refreshPage() : c("[news-channel] 순서 설정 변경에 실패했습니다. response - false")
                            },
                            error: function(e, t, n) {
                                c("[news-channel] 채널 순서 설정 API 호출에 실패했습니다. " + n)
                            }
                        })
                    },
                    onClickPin: function(e) {
                        e.preventDefault();
                        var n = {
                                pin: t(e.currentTarget).attr("data-pin"),
                                oid: t(e.currentTarget).attr("data-oid"),
                                press: t(e.currentTarget).attr("data-press")
                            },
                            a = '<span class="la_st">' + n.press + "</span> 언론사를<br />상단에 고정합니다.";
                        if ("false" == n.pin) {
                            if ((0 | t("._MM_PIN[data-pin=true]").length) >= 5) return void alert("핀 기능은 최대 5개까지 가능합니다.");
                            t.popup.t9({
                                msg: a,
                                ok: "핀 고정",
                                cancel: "취소",
                                okCb: function() {
                                    S.setPin(n)
                                },
                                nclk: {
                                    ok: "editpinok",
                                    cancel: "editpinokx"
                                }
                            })
                        } else S.setPin(n)
                    },
                    setPin: function(e) {
                        var n = "[news-channel] 핀 " + ("true" == e.pin ? "해제" : "설정") + " 실패, oid = " + e.oid + ", press = " + e.press;
                        t.ajax({
                            url: "/api_media/channel/setPin.nhn",
                            type: "GET",
                            data: {
                                officeId: e.oid,
                                pin: "true" != e.pin
                            },
                            timeout: 3e3,
                            dataType: "json",
                            success: function(e) {
                                e ? I.refreshPage() : c(n)
                            },
                            error: function(e, t, a) {
                                c(n + ". " + a)
                            }
                        })
                    },
                    hideFloatingButton: function() {
                        t("#MM_NEWS_FLOATING_BUTTON").hide()
                    },
                    showFloatingButton: function() {
                        "NEWS_CHANNEL" == a && t("#MM_NEWS_FLOATING_BUTTON").show()
                    },
                    onPanelChanged: function(e) {
                        if ("NEWS" === e.code) {
                            a = e.subCode, o.set(_, e.subCode, {
                                expires: .625 / 60
                            });
                            var n = t("._MM_NEWS_SUBTAB[data-subscribed]").attr("data-subscribed");
                            if ("NEWS_FEED" != e.subCode) {
                                if ("false" == n) R("main_all").length > 0 && S.showFloatingButton();
                                setTimeout(function() {
                                    t("#MM_CHANNEL_MORE_SUBSCRIBE_BANNER").hide(), o.set("MM_CHANNEL_MORE_SUBSCRIBE_BANNER", "2", {
                                        expires: 365
                                    })
                                }, 4e3)
                            } else t(i).trigger(t.Event("panelAppendPosition", i.getCurInfo()))
                        }
                    },
                    onClickCommentBanner: function() {
                        f.find("._MM_CHANNEL_COMMENT_BANNER .ccn_journal[data-type]").hide(), f.find("._MM_CHANNEL_COMMENT_BANNER .ccn_journal[data-type=input]").show().resize()
                    },
                    onClickCommentSubmit: function() {
                        var e = f.find("._MM_CHANNEL_COMMENT_BANNER textarea").val();
                        return t.ajax({
                            url: "/demo-opinion/news_press/",
                            timeout: 2e3,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            data: JSON.stringify({
                                content: e,
                                registerId: window.nmain.gv.isLogin
                            }),
                            success: function() {
                                f.find("._MM_CHANNEL_COMMENT_BANNER .ccn_journal[data-type]").hide(), f.find("._MM_CHANNEL_COMMENT_BANNER .ccn_journal[data-type=thanks]").show().resize()
                            }
                        }), !1
                    },
                    onClickCommentClose: function() {
                        return f.find("._MM_CHANNEL_COMMENT_BANNER .ccn_journal[data-type]").hide(), f.find("._MM_CHANNEL_COMMENT_BANNER .ccn_journal[data-type=guide]").show().resize(), !1
                    },
                    onClickNewsTopBannerClose: function(e) {
                        e.preventDefault(), e.stopPropagation(), t(this).closest("._MM_NEWS_TOP_BANNER").hide(), o.set("MM_CHANNEL_NEWSPAPER_BANNER_HIDE", "3", {
                            expires: 3650
                        })
                    },
                    onClickRemoveThisBundle: function(e) {
                        var n = t(this),
                            a = n.closest("._MM_PAGING")[0],
                            o = Number(a.dataset.pagingIndex) - 1,
                            i = Number(a.dataset.pagingCount) - 1;
                        a.dataset.pagingIndex = o, a.dataset.pagingCount = i, n.closest("._MM_PAGING_CONT").remove()
                    }
                };
            e.exports = {
                init: function() {
                    t(window).on("appmainload", function(e) {
                        "NEWS_CHANNEL" == i.getCurInfo().subCode && "inapp-browser" == e.detail.from && -1 != decodeURIComponent(e.detail.url || "").indexOf("media.naver.com/channel/setting") && I.refreshPage()
                    }), t("#ct").on("click", "._MM_DESCRIPTION_CLOSE", h), t("#ct").on("click", "._MM_UNSUBSCRIBE", C).on("click", "._MM_SHOW_MORE_ARTICLE", O).on("click", "._MM_HIDE_MORE_ARTICLE", N).on("click", "._MM_SHOW_ALL_ARTICLE", A).on("click", "._MM_NEWS_SUBTAB[data-code='FEED']", m), t("#ct").on("click", "._MM_NEWS_FEED_CHANNEL_BANNER", M).on("click", "._MM_NEWS_FEED_AIRS_ITEM, ._MM_NEWS_FEED_AIRS_ITEM_CLUSTER", v).on("click", "._MM_NEWS_FLASH_FOLD", p), S.init(), I.init()
                },
                attachNewsFeedEvent: function(e) {
                    u || "NEWS" === e.code && "NEWS_FEED" === i.getCurInfo().subCode && (e.$element.on("click", "#MM_NEWS_FEED_REFRESH", T), u = !0)
                },
                onPanelChanged: S.onPanelChanged,
                onClickArticle: g
            }
        }).call(this, n("QFBpxR1d"))
    },
    "oOU8Ku/P": function(e, t) {
        var n = function() {
                var e, t = 864e5,
                    n = "__ELStorage_EX_INFO",
                    a = !0;
                try {
                    e = localStorage.getItem(n)
                } catch (e) {
                    a = !1
                }
                if (a) try {
                    e = JSON.parse(e) || {}
                } catch (t) {
                    e = {}
                }

                function o() {
                    try {
                        localStorage.setItem(n, JSON.stringify(e))
                    } catch (e) {}
                }

                function i(t) {
                    delete e[t], o()
                }
                return {
                    set: function(t, n) {
                        if (a)
                            if (n) {
                                if (n = Number(n), isNaN(n)) throw Error("ELStorage : expires is NaN");
                                e[t] = {
                                    stored: (new Date).getTime(),
                                    expires: n
                                }, o()
                            } else i(t)
                    },
                    remove: i,
                    expired: function(n) {
                        return !!a && !!e[n] && (new Date).getTime() - e[n].stored > e[n].expires * t && (delete e[n], o(), !0)
                    }
                }
            }(),
            a = function() {
                var e = n;

                function t(t) {
                    try {
                        var n = localStorage.getItem(t);
                        return e.expired(t) ? (localStorage.removeItem(t), null) : n
                    } catch (e) {
                        return null
                    }
                }

                function a(t) {
                    try {
                        localStorage.removeItem(t), e.remove(t)
                    } catch (e) {}
                }
                return {
                    get: t,
                    set: function(t, n, a) {
                        try {
                            localStorage.setItem(t, n)
                        } catch (e) {}
                        e.set(t, a)
                    },
                    remove: a,
                    pop: function(e) {
                        var n = t(e);
                        return n && a(e), n
                    }
                }
            }();
        e.exports = a
    },
    ozsbSvXK: function(e, t) {
        var n = {},
            a = {};
        e.exports = {
            setInitFn: function(e) {
                if (!e.code || "function" != typeof e.initFn) throw Error("[panel.manager] INVALID ARGUMENTS. code : " + e.code + ", initFn type : " + typeof e.initFn);
                var t = e.code;
                if (e.subCode) {
                    if ("function" == typeof n[t]) throw Error("[panel.manager] INVALID USE. already init function was setted without subCode. code : " + t);
                    n[t] = n[t] || {}, n[t][e.subCode] = e.initFn
                } else n[t] = e.initFn
            },
            init: function(e) {
                if (1 != e.$element.data("panel-inited")) {
                    var t = n[e.code];
                    if (t && "function" != typeof t && (t = t[e.subCode]), "function" == typeof t) try {
                        t(e), e.$element.data("panel-inited", !0)
                    } catch (e) {
                        window.nmain.sendNelo(e)
                    }
                }
            },
            setUpdateFn: function(e) {
                if (!e.code || "function" != typeof e.updateFn) throw Error("[panel.manager] INVALID ARGUMENTS. code : " + e.code + ", updateFn type : " + typeof e.updateFn);
                var t = e.code;
                if (e.subCode) {
                    if ("function" == typeof a[t]) throw Error("[panel.manager] INVALID USE. already update function was setted without subCode. code : " + t);
                    a[t] = a[t] || {}, a[t][e.subCode] = e.updateFn
                } else a[t] = e.updateFn
            },
            update: function(e) {
                var t = a[e.code];
                if (t && "function" != typeof t && (t = t[e.subCode]), "function" == typeof t) try {
                    t(e)
                } catch (e) {
                    window.nmain.sendNelo(e)
                }
            }
        }
    },
    pF0hIjpg: function(e, t, n) {
        (function(e) {
            function t(t) {
                var n = e(t.target),
                    a = n.closest("._MM_PAGING"),
                    o = a.find("._MM_PAGING_DISPLAY"),
                    i = a.find("._MM_PAGING_CONT"),
                    r = parseInt(a.attr("data-paging-count"), 10) || i.length,
                    c = parseInt(a.attr("data-paging-index"), 10),
                    s = n.attr("data-paging-direction") || (n.hasClass("_MM_PAGING_PREV") ? "prev" : "next"),
                    d = c + ("prev" == s ? r - 1 : 1);
                d %= r;
                var l = i.eq(c),
                    u = i.eq(d);
                a.trigger(e.Event("paging.beforeChange", {
                    direction: s,
                    pageIndex: c,
                    $wrap: a,
                    $content: l,
                    $toContent: u
                })), a.attr("data-paging-index", d), o.text(d + 1), setTimeout(function() {
                    l.hide(), u.show(), a.trigger(e.Event("paging.afterChange", {
                        pageIndex: d,
                        $wrap: a,
                        $content: u
                    }))
                }, 100), n.blur(), t.preventDefault()
            }
            e.fn.eachPagingComponent = function(t, n) {
                var a = t.hasClass("_MM_PAGING") ? t : t.find("._MM_PAGING");
                return a.each(function(t, a) {
                    var o = e(a),
                        i = parseInt(o.attr("data-paging-index"), 10),
                        r = o.find("._MM_PAGING_CONT").eq(i);
                    n(o, i, r)
                }), a
            }, e.fn.paging = function() {
                return this.each(function(n, a) {
                    var o = e(a);
                    o.data("$$__MM_PAGING_DATA__") || (o.on("click", "._MM_PAGING_PREV, ._MM_PAGING_NEXT", t), o.data("$$__MM_PAGING_DATA__", !0))
                })
            }
        }).call(this, n("QFBpxR1d"))
    },
    ruBhlHUf: function(e, t, n) {
        (function(t) {
            var a, o, i, r, c = n("Zzo7p8aP");

            function s(e, n) {
                var a = t(n);
                return {
                    index: e,
                    amColor: a.attr("data-am-color"),
                    pmColor: a.attr("data-pm-color"),
                    $el: a
                }
            }

            function d() {
                if (null != a) {
                    a.resize(), o.resize();
                    var e = (a.getRect().width - 12) / 2;
                    if (!(e <= 0)) {
                        var t = a.getRect().width / 2,
                            n = a.getRect().height;
                        e = Math.max(e, 0);
                        for (var c = 180 / (2 * i.length), s = Math.PI / (2 * i.length), d = [], _ = [], f = 0; f < i.length; f++) {
                            var p = Math.PI + 2 * f * s,
                                h = p + s + s,
                                m = .2 * c,
                                M = c * (2 * f),
                                v = M + c,
                                g = v + c,
                                T = (e - e * Math.cos(l(M + m))) / (2 * e),
                                E = (e - e * Math.cos(l(v - m))) / (2 * e),
                                C = (e - e * Math.cos(l(v + m))) / (2 * e),
                                O = (e - e * Math.cos(l(g - m))) / (2 * e);
                            d.push({
                                offset: T,
                                color: i[f].amColor
                            }), d.push({
                                offset: E,
                                color: i[f].amColor
                            }), d.push({
                                offset: C,
                                color: i[f].pmColor
                            }), d.push({
                                offset: O,
                                color: i[f].pmColor
                            }), _.push({
                                offset: T,
                                color: r[f].amColor
                            }), _.push({
                                offset: E,
                                color: r[f].amColor
                            }), _.push({
                                offset: C,
                                color: r[f].pmColor
                            }), _.push({
                                offset: O,
                                color: r[f].pmColor
                            });
                            var N = e + 1.5 + 1;
                            a.drawArcGradation(t, n, N, p, 4, u), a.drawArcGradation(t, n, N, h, 4, u), o.drawArcGradation(t, n, N, p, 4, u), o.drawArcGradation(t, n, N, h, 4, u)
                        }
                        a.drawArc(t, n, e, Math.PI, 2 * Math.PI, function(n) {
                            n.lineWidth = 3;
                            for (var a = n.createLinearGradient(t - e, 0, t + e, 0), o = 0; o < d.length; o++) {
                                var i = d[o];
                                a.addColorStop(i.offset, i.color)
                            }
                            n.strokeStyle = a, n.fillStyle = "rgba(0, 0, 0, 0.0)"
                        }), o.drawArc(t, n, e, Math.PI, 2 * Math.PI, function(n) {
                            n.lineWidth = 3;
                            for (var a = n.createLinearGradient(t - e, 0, t + e, 0), o = 0; o < _.length; o++) {
                                var i = _[o];
                                a.addColorStop(i.offset, i.color)
                            }
                            n.setLineDash([3, 1]), n.strokeStyle = a, n.fillStyle = "rgba(0, 0, 0, 0.0)"
                        })
                    }
                }
            }

            function l(e) {
                return e * Math.PI / 180
            }

            function u(e) {
                e.lineWidth = 1, e.strokeStyle = "#E1E6E9"
            }
            e.exports = {
                init: function(e) {
                    var n = t("#CANVAS_WEKKLY_DUST_PM10"),
                        l = t("#CANVAS_WEKKLY_DUST_PM25");
                    (e || 0 !== n.length && !n.data("__$CANVAS_INITED__")) && (i = t("#MM_WEEKLY_DUST_PM10 .MM_WEEKLY_DUST").map(s).toArray(), r = t("#MM_WEEKLY_DUST_PM25 .MM_WEEKLY_DUST").map(s).toArray(), a = new c(n, {
                        data: i
                    }), o = new c(l, {
                        data: r
                    }), d(), n.data("__$CANVAS_INITED__", !0))
                },
                draw: d,
                onResize: function() {
                    a && (a = new c(t("#CANVAS_WEKKLY_DUST_PM10"), {
                        data: i
                    }), o = new c(t("#CANVAS_WEKKLY_DUST_PM25"), {
                        data: r
                    }), d())
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    s8gEYAJ4: function(e, t, n) {
        (function(e, t) {
            var a = n("ozsbSvXK"),
                o = n("OV2YOGNG"),
                i = n("K0zMvcnj"),
                r = n("oOU8Ku/P"),
                c = n("vvRPcpct"),
                s = window.nmain.gv,
                d = function() {
                    var t, n, a;
                    return {
                        init: function() {
                            t = e("#MM_SPORTS_MAINNEWS"), n = t.find("._MM_SPORTS_MAINNEWS_PAGE_NUM"), a = t.find("._MM_SPORTS_MAINNEWS_CONT"), t.on("click", "._MM_SPORTS_MAINNEWS_PAGE_NEXT", function(e) {
                                e.preventDefault();
                                var o = parseInt(t.attr("data-paging-index"), 10),
                                    i = (o + 1) % parseInt(t.attr("data-paging-count"), 10);
                                a.eq(o).hide(), a.eq(i).show(), t.attr("data-paging-index", i), n.text(i + 1)
                            })
                        }
                    }
                }(),
                l = function() {
                    var t;
                    return {
                        init: function() {
                            0 !== (t = e("#MM_NEW_SPORTS_PROMO_BANNER_OFF")).length && t.find("[data-action=close]").on("click", function(e) {
                                e.preventDefault(), c.set("MM_NEW_SPORTS_PROMO_BANNER_OFF", "1", {
                                    expires: 365
                                }), t.hide()
                            })
                        }
                    }
                }(),
                u = function() {
                    var t;

                    function n(t) {
                        t.preventDefault();
                        var n = "hscrollSchedule" === e(this).attr("data-tab-nav") ? "HSCROLL" : "LIST";
                        c.set("MM_MATCHBOX_TAB", n, {
                            period: 30
                        }), e("#MATCHBOX_HSCROLL_WRAP").attr("aria-hidden", "HSCROLL" === n), e("#MATCHBOX_LIST_WRAP").attr("aria-hidden", "LIST" === n)
                    }
                    return {
                        init: function() {
                            0 != (t = e("#MM_SPORTS_MATCH_SCHEDULE")).length && (t.find(".cm_onair").addClass("cm_ani"), t.on("click", "._MM_MATCHBOX_TAB_BTN", n))
                        }
                    }
                }(),
                _ = function() {
                    var t, n, a = "MM_sports_mysection_tab";

                    function o(e) {
                        r.set(a, e.toContentId, 1)
                    }

                    function i(t) {
                        t.preventDefault();
                        var n = e(t.currentTarget).closest(".cm_list_wrap");
                        n.toggleClass("cm_open"), n.find(".MM_SPORTS_SCHEDULE_ALL").toggle(), n.find(".MM_SPORTS_SCHEDULE_ONLY_HEAD").toggle()
                    }

                    function c(e) {
                        e.$content.find(".cms_loading").html('<p class="cms_err">일시적인 오류로<br>정보를 불러올 수 없습니다.</p><a href="#" class="cms_btn_reload" data-action="reload" data-section="' + e.contentId + '" data-clk="mysectreload">다시 불러오기</a>')
                    }

                    function s(t) {
                        t.preventDefault();
                        var a = e(this).attr("data-section");
                        n.moveTab(a)
                    }
                    return {
                        init: function() {
                            if (0 !== (t = e("#MM_SPORTS_MYSECTION")).length) {
                                t.on("click", "[data-action=schedule-toggle]", i).on("tab.ajaxfail", "._MM_TAB", c).on("click", "a.cms_btn_reload[data-action=reload]", s);
                                var d = (n = t.find("> ._MM_TAB")).find("[data-tab-nav]").eq(0).attr("data-tab-nav"),
                                    l = r.get(a);
                                if (l && 1 === n.find("[data-tab-nav=" + l + "]").length) d = l;
                                else if ("true" === t.attr("data-is-default")) {
                                    var u = parseInt(100 * Math.random());
                                    d = u < 30 ? "kbaseball" : u < 50 ? "wbaseball" : u < 60 ? "kfootball" : u < 85 ? "wfootball" : u < 90 ? "basketball" : u < 95 ? "volleyball" : u < 97 ? "golf" : u < 99 ? "general" : "esports"
                                }
                                n.moveTab(d);
                                var _ = n.find("[data-tab-nav=" + d + "]").closest("li").index();
                                n.find("._MM_HORIZONTAL_SCROLL").attr("data-scroll-pos-idx", _), n.on("tab.beforeChange", o)
                            }
                        }
                    }
                }(),
                f = function() {
                    var n, a = 9;

                    function c(t) {
                        t.preventDefault();
                        var a = e(this),
                            r = a.attr("data-channelId"),
                            c = a.attr("data-teamName"),
                            s = o.hasJong(c) ? "이" : "가";
                        e.popup.t9({
                            msg: "구독하신 마이팀에서<br><span class='la_st'>" + c + "</span>" + s + " 제외됩니다.",
                            ok: "완료",
                            okCb: function() {
                                e.ajax({
                                    url: "https://m.sports.naver.com/myteam/auth/nvm/updateJsonp.nhn",
                                    data: {
                                        channelKey: r
                                    },
                                    dataType: "jsonp",
                                    jsonp: "_callback",
                                    timeout: 3e3
                                }).then(function(t) {
                                    if ("success" !== t.result) return e.Deferred().reject();
                                    var a = n.find(".cm_setting_scroll .scroll-panel:has(a[data-tab-nav=" + r + "])"),
                                        o = a.next().find("[data-tab-nav]").attr("data-tab-nav") || a.prev().find("[data-tab-nav]").attr("data-tab-nav");
                                    o || i.run(), a.remove();
                                    var c = n.find(".count");
                                    c.html(parseInt(c.html(), 10) - 1), n.find(".cui_myteam._MM_TAB").moveTab(o), d()
                                }).fail(function() {})
                            },
                            cancel: "취소",
                            cancelCb: function() {}
                        })
                    }

                    function d() {
                        var e = n.find(".cm_setting_scroll .scroll-panel").length;
                        if (!(e >= a))
                            for (var t = n.find(".cm_setting_scroll .scroll-container"), o = e; o < a; o++) t.append("<div class='scroll-panel' role='presentation'><a href='https://m.sports.naver.com/myteam/index.nhn' data-clk='myteamplus' class='cm_team_add panelArea' aria-selected='false'>추가하기</a></div>")
                    }

                    function l(t) {
                        if (t.$wrap.is(this)) {
                            var a = Math.max(t.$wrap.find("[data-tab-nav=" + t.toContentId + "]").offset().left - n.offset().left, 0),
                                o = n.width() / 2,
                                i = n.find(".cm_setting_scroll ._MM_HORIZONTAL_SCROLL").hscroll().get(0);
                            i instanceof e && (i = n.find(".cm_setting_scroll ._MM_HORIZONTAL_SCROLL").hscroll().get(0)), i.scrollTo(Math.min(Math.max(0, a - i.x() - o + 31.5), -1 * i.maxScrollX()), 100)
                        }
                    }
                    return {
                        init: function() {
                            if (0 !== (n = e("#MM_SPORTS_MYTEAM")).length) {
                                var a = r.pop("MM_SPORTS_LAST_MYTEAM"),
                                    i = r.pop("MM_SPORTS_MYTEAM_WANT");
                                0 === n.find(".cm_setting_title .count").length && a && i && (n.html(a), n.find(".cui_myteam._MM_TAB").moveTab(i)), r.set("MM_SPORTS_LAST_MYTEAM", n.html(), 1), d(), n.on("click", ".cm_btn_board.remove[data-channelId]", c), n.find(".cui_myteam._MM_TAB").on("tab.beforeChange", l), n.on("click", "a.cm_shortcut[data-clk=myteammore]", function(a) {
                                    t({}, "spt.myteammore", "", "");
                                    var i = e(a.currentTarget),
                                        c = i.attr("data-channelId");
                                    s.isLogin ? function(t, a) {
                                        var i = o.hasJong(a) ? "이" : "가";
                                        e.popup.t9({
                                            msg: "구독하신 마이팀에서<br><span class='la_st'>" + a + "</span>" + i + " 추가됩니다.",
                                            ok: "완료",
                                            okCb: function() {
                                                e.ajax({
                                                    url: "https://m.sports.naver.com/myteam/auth/nvm/updateJsonp.nhn",
                                                    data: {
                                                        channelKey: t
                                                    },
                                                    dataType: "jsonp",
                                                    jsonp: "_callback",
                                                    timeout: 3e3
                                                }).then(function(t) {
                                                    if ("success" !== t.result) return e.Deferred().reject();
                                                    e.ajax({
                                                        url: "/nvhaproxy_plus/content/template/media-sportsMyTeam"
                                                    }).then(function(e) {
                                                        n.html(e), d(), n.find(".cm_setting_scroll ._MM_HORIZONTAL_SCROLL").hscroll()
                                                    })
                                                }).fail(function() {})
                                            },
                                            cancel: "취소",
                                            cancelCb: function() {}
                                        })
                                    }(c, i.attr("data-teamName")) : (r.set("MM_SPORTS_MYTEAM_WANT", c, 1), location.href = "https://m.sports.naver.com/myteam/auth/nvm/updateForNeedLogin.nhn?channelKey=" + c);
                                    return !1
                                })
                            }
                        }
                    }
                }(),
                p = function() {
                    var t;

                    function n(n) {
                        n = n || 1, e.ajax({
                            url: "/nvhaproxy_plus/airs/sports/video?rc=4&rts=" + window.svt + "&rcp=" + n,
                            timeout: 3e3,
                            dataType: "html",
                            success: function(e) {
                                t.html(e).loadImage()
                            }
                        })
                    }
                    return {
                        init: function() {
                            0 != (t = e("#MM_sports_recommend_video")).length && (n(1), t.on("click", "button.cb_btn_refresh", function(t) {
                                n(e(t.currentTarget).attr("data-next-page"))
                            }))
                        }
                    }
                }();
            a.setInitFn({
                code: "SPORTS",
                initFn: function(e) {
                    u.init(e), l.init(), _.init(), f.init(), p.init(), d.init()
                }
            })
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    seBZDTLQ: function(e, t, n) {
        var a, o, i;
        o = [n("QFBpxR1d")], void 0 === (i = "function" == typeof(a = function(e) {
            var t = {};

            function n() {
                Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    n.intervalId && (clearInterval(n.intervalId), n.intervalId = null);
                    var a = n.items.some(function(e) {
                        return e.getEnable()
                    });
                    a && (n.intervalId = setInterval(function() {
                        n.items.forEach(function(e) {
                            e.roll()
                        })
                    }, 1e3 * parseInt(e, 10)))
                })
            }

            function a() {
                var e = [];
                for (var n in t) e = e.concat(t[n].items);
                return e
            }
            e.fn.rolling = function(o) {
                var i = e.extend({
                        onlyIn: !0
                    }, o),
                    r = this,
                    c = a();
                return r.find("._ROLLING, ._ROLLING_2X").filter(function(t, n) {
                    var a = e(n);
                    return !(a.children().length < 2 || c.some(function(e) {
                        return e.getElement() === n
                    }))
                }).each(function(a, o) {
                    var i = e(o),
                        r = new function(t) {
                            var a = e(t),
                                o = "true" === a.attr("data-has-wrapper") ? a.closest("._ROLLING_WRAPPER") : null,
                                i = 0,
                                r = a.children(),
                                c = !0,
                                s = !!a.find("img[data-src]").length,
                                d = 0,
                                l = a.attr("data-rolling-limit") || -1,
                                u = a.hasClass("_TRIGGER_BEFORE_AFTER_ROLLING");

                            function _() {
                                var e = (i + 1) % r.length;
                                r.eq(e).find(".ondemand").removeClass("ondemand").loadImage(), s = !!a.find("img[data-src]").length
                            }
                            this.showCurrentIndex = function() {
                                u ? a.trigger(e.Event("rolling.before", {
                                    $children: r,
                                    rollingItem: this
                                })) : this._showCurrentIndex()
                            }, this._showCurrentIndex = function() {
                                r.hide();
                                var t = r.eq(i).show();
                                s && _(), u && a.trigger(e.Event("rolling.after", {
                                    $children: r,
                                    $activeChildren: t
                                }))
                            }, this.getEnable = function() {
                                return c
                            }, this.setEnable = function(e) {
                                c && (r = a.children()), a.hasClass("_ROLLING_RESET") && (i = 0, r.hide(), r.eq(0).show()), c = e
                            }, this.getElement = function() {
                                return t
                            }, this.roll = function() {
                                c && (a.hasClass("PAUSE") || l > -1 && d >= l || this.next())
                            }, this.next = function() {
                                d++, i = (i + 1) % r.length, this.showCurrentIndex()
                            }, this.prev = function() {
                                d--, i = (0 === i ? r.length : i) - 1, this.showCurrentIndex()
                            }, r.toArray().some(function(t, n) {
                                return "none" !== e(t).css("display") && (i = n, !0)
                            }), s && _();
                            var f = this;
                            a.on("click", "._ROLLING_JUMP", function(t) {
                                var a = parseInt(e(t.currentTarget).attr("data-index"), 10) || 0;
                                return r.hide(), r.eq(a).show(), i = a, n(), !1
                            }), o && o.on("click", "._ROLLING_NEXT", function(e) {
                                f.next(), n()
                            }).on("click", "._ROLLING_PREV", function(e) {
                                f.prev(), n()
                            })
                        }(o),
                        c = parseInt(i.attr("data-rolling-interval"), 10) || (i.hasClass("_ROLLING_2X") ? 6 : 3);
                    t[c] ? t[c].items.push(r) : (t[c] = {}, t[c].items = [r])
                }), i.onlyIn && a().forEach(function(e) {
                    e.setEnable(!!r.has(e.getElement()).length)
                }), n(), this
            }
        }) ? a.apply(t, o) : a) || (e.exports = i)
    },
    tiO0fkrE: function(e, t, n) {
        var a, o, i;
        o = [], void 0 === (i = "function" == typeof(a = function() {
            function e(e) {
                return function(t) {
                    var o = n(t.target, e.selector) ? t.target : a(t.target, e.selector),
                        i = o ? o.getAttribute(e.videoIdAttributeName) : null;
                    if (i) {
                        var r = {
                            videoId: i,
                            target: o,
                            clickCode: void 0,
                            url: void 0
                        };
                        if (null != window.inapphome && "object" == typeof window.inapphome && "function" == typeof window.inapphome.playVideo) {
                            var c = !0;
                            if (e.onBeforeOpenPlayer) {
                                var s = e.onBeforeOpenPlayer(t, r);
                                c = "boolean" != typeof s || s
                            }
                            c && (window.inapphome.playVideo(JSON.stringify({
                                videoId: r.videoId,
                                menuCode: r.clickCode,
                                url: r.url
                            })), e.onAfterOpenPlayer && e.onAfterOpenPlayer(t, r))
                        } else e.onUnsupportBrowser(t, r)
                    }
                }
            }

            function t(e) {
                return function(t) {
                    var o = n(t.target, e.selector) ? t.target : a(t.target, e.selector),
                        i = o ? o.getAttribute(e.channelIdAttributeName) : null,
                        r = o ? o.getAttribute(e.serviceTypeAttributeName) : null;
                    if (i && r) {
                        var c = {
                            channelId: i,
                            serviceType: r,
                            target: o
                        };
                        if (null != window.inapphome && "object" == typeof window.inapphome && "function" == typeof window.inapphome.playChannel) {
                            var s = !0;
                            if (e.onBeforeOpenChannelView) {
                                var d = e.onBeforeOpenChannelView(t, c);
                                s = "boolean" != typeof d || d
                            }
                            s && (window.inapphome.playChannel(c.channelId, c.serviceType), e.onAfterOpenChannelView && e.onAfterOpenChannelView(t, c))
                        } else e.onUnsupportBrowser(t, c)
                    }
                }
            }

            function n(e, t) {
                var n = e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
                return n.call(e, t)
            }

            function a(e, t) {
                for (var a = e; a && 1 == a.nodeType;) {
                    if (n(a, t)) return a;
                    a = a.parentElement || a.parentNode
                }
                return null
            }
            return {
                attachVideoLink: function(t, n) {
                    var a = {
                        selector: n.selector || null,
                        videoIdAttributeName: n.videoIdAttributeName || "data-video-cid",
                        onBeforeOpenPlayer: n.onBeforeOpenPlayer || function(e, t) {},
                        onAfterOpenPlayer: n.onAfterOpenPlayer || function(e, t) {
                            e.preventDefault()
                        },
                        onUnsupportBrowser: n.onUnsupportBrowser || function(e, t) {}
                    };
                    if (!a.selector) throw Error("Empty video link selector");
                    t.addEventListener("click", e(a))
                },
                attachChannelLink: function(e, n) {
                    var a = {
                        selector: n.selector || null,
                        channelIdAttributeName: n.channelIdAttributeName || "data-video-chid",
                        serviceTypeAttributeName: n.serviceTypeAttributeName || "data-video-sid",
                        onBeforeOpenChannelView: n.onBeforeOpenChannelView || function(e, t) {},
                        onAfterOpenChannelView: n.onAfterOpenChannelView || function(e, t) {
                            e.preventDefault()
                        },
                        onUnsupportBrowser: n.onUnsupportBrowser || function(e, t) {}
                    };
                    if (!a.selector) throw Error("Empty video link selector");
                    e.addEventListener("click", t(a))
                }
            }
        }) ? a.apply(t, o) : a) || (e.exports = i)
    },
    tqcQ3bAn: function(e, t, n) {
        (function(t, a) {
            var o = n("vvRPcpct"),
                i = n("baMwVjn2"),
                r = "cui_card_fold";

            function c(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    c = n.closest(".MM_FOLDABLE"),
                    s = c.attr("data-fold-key"),
                    d = c.attr("data-clk-prefix");
                c.hasClass(r) ? (c.removeClass(r), c.attr("aria-expanded", !0), n.attr("aria-expanded", !0), n.find("span.blind").html("접기"), a(e.currentTarget, d + "unfold", "", ""), o.set(s, "N", {
                    expires: 365
                })) : (c.addClass(r), c.attr("aria-expanded", !1), n.attr("aria-expanded", !1), n.find("span.blind").html("펼치기"), a(e.currentTarget, d + "fold", "", ""), o.set(s, "Y", {
                    expires: 365
                }));
                var l = i.getCurInfo();
                t(l.$element).find("._MM_HORIZONTAL_SCROLL").hscroll().each(function(e, t) {
                    t.resize()
                })
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", ".MM_FOLD_BTN", c)
                }
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    uXtDkIOo: function(e) {
        e.exports = {
            10: {
                name: "울산",
                placeCode: "10",
                placeMenuName: "울산·경남",
                placeMenuCode: "10",
                menuStandAlone: !1
            },
            11: {
                name: "인천",
                placeCode: "11",
                placeMenuName: "인천",
                placeMenuCode: "11",
                menuStandAlone: !0
            },
            12: {
                name: "전남",
                placeCode: "12",
                placeMenuName: "광주·전남",
                placeMenuCode: "05",
                menuStandAlone: !1
            },
            13: {
                name: "전북",
                placeCode: "13",
                placeMenuName: "전북",
                placeMenuCode: "13",
                menuStandAlone: !0
            },
            14: {
                name: "제주",
                placeCode: "14",
                placeMenuName: "제주",
                placeMenuCode: "14",
                menuStandAlone: !0
            },
            15: {
                name: "충남",
                placeCode: "15",
                placeMenuName: "대전·세종·충남",
                placeMenuCode: "07",
                menuStandAlone: !1
            },
            16: {
                name: "충북",
                placeCode: "16",
                placeMenuName: "충북",
                placeMenuCode: "16",
                menuStandAlone: !0
            },
            17: {
                name: "세종",
                placeCode: "17",
                placeMenuName: "대전·세종·충남",
                placeMenuCode: "07",
                menuStandAlone: !1
            },
            "01": {
                name: "강원",
                placeCode: "01",
                placeMenuName: "강원",
                placeMenuCode: "01",
                menuStandAlone: !0
            },
            "02": {
                name: "경기",
                placeCode: "02",
                placeMenuName: "경기",
                placeMenuCode: "02",
                menuStandAlone: !0
            },
            "03": {
                name: "경남",
                placeCode: "03",
                placeMenuName: "울산·경남",
                placeMenuCode: "10",
                menuStandAlone: !1
            },
            "04": {
                name: "경북",
                placeCode: "04",
                placeMenuName: "대구·경북",
                placeMenuCode: "06",
                menuStandAlone: !1
            },
            "05": {
                name: "광주",
                placeCode: "05",
                placeMenuName: "광주·전남",
                placeMenuCode: "05",
                menuStandAlone: !1
            },
            "06": {
                name: "대구",
                placeCode: "06",
                placeMenuName: "대구·경북",
                placeMenuCode: "06",
                menuStandAlone: !1
            },
            "07": {
                name: "대전",
                placeCode: "07",
                placeMenuName: "대전·세종·충남",
                placeMenuCode: "07",
                menuStandAlone: !1
            },
            "08": {
                name: "부산",
                placeCode: "08",
                placeMenuName: "부산",
                placeMenuCode: "08",
                menuStandAlone: !0
            },
            "09": {
                name: "서울",
                placeCode: "09",
                placeMenuName: "서울",
                placeMenuCode: "09",
                menuStandAlone: !0
            }
        }
    },
    wT6xdWC1: function(e, t, n) {
        (function(t) {
            var a = n("baMwVjn2"),
                o = n("2jNgLtZK"),
                i = n("nTaCWwD3"),
                r = new o("mm_panel_element"),
                c = new o("mm_scroll");

            function s(e) {
                var n, o, s, d = t(e.currentTarget);
                !1 !== d.data("persist") && (n = a.getCurInfo()).$element.is("[data-persist=true]") && ((d.hasClass("_MM_NEWS_FEED_AIRS_ITEM") || d.hasClass("_MM_NEWS_FEED_AIRS_ITEM_CLUSTER")) && (i.onClickArticle(e), a.setCache(n.code, n.subFlickingCode, d.closest(".grid1_wrap"))), n.$element.find(".native_scroll").each(function(e, n) {
                    var a = t(n);
                    a.attr("data-scroll-left", a.scrollLeft())
                }), o = n.subFlickingCode || n.code, (s = function(e) {
                    return e.clone().find(".nmap_wrapper").children().empty().end().end()
                }(n.$element)).find(".MM_PERSIST_FILTER").empty(), r.set(o, s.get(0).outerHTML), c.set(o, window.scrollY))
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", 'a[href]:not([href="#"]), a[data-href], .MM_persist', s)
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    xHdGogJp: function(e, t, n) {
        (function(t) {
            var a = n("Uh2+F60L"),
                o = n("frQ1Xk3Y"),
                i = ["잠시 후 ", "다시 시도", "해 주세요."],
                r = {
                    subscribe: "구독이 실패하였습니다.",
                    unsubscribe: "구독 해지가 실패하였습니다."
                },
                c = window.nmain.gv;

            function s(e) {
                var n, a = t(e.currentTarget),
                    r = a.closest("._MM_MYTEAM"),
                    c = _("MY_TEAM", a, function(e) {
                        return ["success", "alreadyAdd", "overMaxMyTeamCount"].includes(e.result)
                    });
                c && c.done(function(e) {
                    switch (e.result) {
                        case "success":
                            var o = t("#_MM_MYTEAM_COUNT"),
                                i = Number(o.text());
                            o.html(i + 1), a.hide(), r.find("._MM_MYTEAM_SUBSCRIBE_INFO").show(), n = ["해당 팀을 마이팀에 ", "추가", "했습니다."];
                            break;
                        case "alreadyAdd":
                            n = ["이미", "마이 팀", "으로 설정되어 있습니다."];
                            break;
                        case "overMaxMyTeamCount":
                            n = ["마이 팀은", "9개 팀만", "설정할 수 있습니다."]
                    }
                }).fail(function(e, t, a) {
                    n = i, o("[ subscribe ] myteam subscribe - api response fail : " + a)
                }).always(function() {
                    t.popup.toast(n)
                })
            }

            function d(e) {
                var n, a = t(e.currentTarget),
                    r = a.closest("._MM_MYPLACE"),
                    c = _("MY_PLACE", a, function(e) {
                        return 0 == e.code
                    }, {
                        $place: r
                    });
                c && c.done(function() {
                    a.hide().siblings("._MM_MYPLACE_LINK").removeClass("cs_has_btn"), n = [r.data("office") + " " + r.data("service") + " 소식을 구독 ", "추가", "했습니다."]
                }).fail(function(e, t, a) {
                    n = i, o("[ subscribe ] myplace subscribe - api response fail : " + a)
                }).always(function() {
                    t.popup.toast(n)
                })
            }

            function l(e) {
                var n = t(e.currentTarget),
                    a = n.data("status"),
                    i = _("MY_FEED", n, function(e) {
                        return "success" === e.message || "OK" === e.message
                    }, {
                        status: a
                    });
                i && i.done(function() {
                    n.hide().siblings("._MM_MF_SUBSCRIBE_BTN").show()
                }).fail(function(e, n, i) {
                    t.popup.toast(r[a]), o("[ subscribe ] myfeed recommend - api response fail : " + i)
                })
            }

            function u(e) {
                e.preventDefault();
                var n = t(this),
                    i = n.hasClass("_MM_TVCH_SUBSCRIBE"),
                    c = _("VIDEO", n, function(e) {
                        return e.header && "success" === e.header.code
                    }, {
                        reqSub: i
                    });
                c && (n.attr("data-clk", i ? n.attr("data-sub-clk") || "rcmsubs" : n.attr("data-unsub-clk") || "rcmsubsed"), c.done(function() {
                    var e = n.attr("data-channel-id"),
                        t = n.closest(".grid1"),
                        a = t.find("._MM_TVCH_SUBSCRIBE[data-channel-id='" + e + "'], ._MM_TVCH_UNSUBSCRIBE[data-channel-id='" + e + "']"),
                        o = t.find(".MM_VIDEO_CHANNEL_SUBSCRIBER_COUNT[data-video-chid='" + e + "']");
                    i ? a.text("구독중").attr("aria-checked", "true").addClass("ct_btn_on _MM_TVCH_UNSUBSCRIBE").removeClass("_MM_TVCH_SUBSCRIBE") : a.text("구독").attr("aria-checked", "false").addClass("_MM_TVCH_SUBSCRIBE").removeClass("ct_btn_on _MM_TVCH_UNSUBSCRIBE");
                    var r = Number(o.eq(0).text().replace(/,/g, "")) + (i ? 1 : -1);
                    o.text(r.toCommaFormat())
                }).fail(function(e, n, c) {
                    try {
                        200 == e.status && "NOT LOGIN" === c.text ? a.login() : (t.popup.toast(i ? r.subscribe : r.unsubscribe), o("[ subscribe ] recommend video - api response fail : " + c))
                    } catch (e) {
                        o("[ subscribe ] recommend video - response parsing error : " + e)
                    }
                }))
            }

            function _(e, n, o, i) {
                var r = function(e, t, n) {
                        switch (e) {
                            case "MY_TEAM":
                                return {
                                    url: "https://m.sports.naver.com/myteam/auth/nvm/addJsonp.nhn",
                                    data: {
                                        channelKey: t.closest("._MM_MYTEAM").data("teamid")
                                    }
                                };
                            case "MY_PLACE":
                                return {
                                    url: "/api_feed/invoker/subscribe",
                                    data: {
                                        serviceCode: n.$place.data("servicecode"),
                                        type: n.$place.data("type"),
                                        id: n.$place.data("id")
                                    }
                                };
                            case "MY_FEED":
                                return {
                                    url: "/api_snsinfra/invoker/" + n.status + ".json",
                                    data: {
                                        serviceCode: t.data("servicecode"),
                                        type: t.data("type"),
                                        id: t.data("id")
                                    }
                                };
                            case "VIDEO":
                                return {
                                    url: "/api_tv/api/subscription/channel/" + (n.reqSub ? "subscribe" : "unsubscribe"),
                                    data: {
                                        channelId: t.attr("data-channel-id")
                                    }
                                };
                            case "POST_RECOMMEND":
                                return {
                                    url: "/api_post/navermain/follow/addFollow.nhn",
                                    data: {
                                        followType: "PERSON",
                                        followTarget: t.parent().attr("data-authorno")
                                    }
                                };
                            case "JOURNALIST":
                                return {
                                    url: "/api_snsinfra/proxy/sg/MyFeedForMainSubjectServiceBO/" + n.status + ".json",
                                    data: {
                                        service: "news",
                                        channelGroup: "JOURNALIST",
                                        channelKey: t.data("channelkey")
                                    }
                                }
                        }
                    }(e, n, i),
                    s = t.extend({
                        dataType: "jsonp",
                        jsonp: "_callback",
                        timeout: 3e3
                    }, r, i);
                return c.isLogin ? "true" !== n.attr("data-request-ing") && (n.attr("data-request-ing", !0), t.ajax(s).always(function() {
                    n.removeAttr("data-request-ing")
                }).then(function(e, n, a) {
                    return "function" == typeof o ? o(e, n, a) ? a : t.Deferred.reject : a
                })) : (a.login(), !1)
            }
            e.exports = {
                init: function() {
                    t("#ct").on("click", "._MM_MYTEAM_SUBSCRIBE_BTN", s).on("click", "._MM_MYPLACE_SUBSCRIBE_BTN", d).on("click", "._MM_MF_SUBSCRIBE_BTN", l).on("click", "._MM_TVCH_SUBSCRIBE, ._MM_TVCH_UNSUBSCRIBE", u)
                },
                request: _,
                refreshVideoSubscribeStatus: function(e) {
                    if (c.isLogin) {
                        var n = e.hasClass("._MM_TVCH_SUBSCRIBE") ? e : e.find("._MM_TVCH_SUBSCRIBE"),
                            a = n.map(function(e, n) {
                                return t(n).attr("data-channel-id")
                            }).toArray().uniq();
                        0 != a.length && t.ajax({
                            url: "/api_tv/api/subscription/channel/contents?channelIds=[" + a.join(",") + "]",
                            dataType: "json",
                            timeout: 3e3
                        }).done(function(e) {
                            e && e.body && e.body.contents && t(e.body.contents).each(function(e, t) {
                                t && "Y" == t.subscriptionYn && n.filter("[data-channel-id='" + t.channelId + "']").addClass("ct_btn_on _MM_TVCH_UNSUBSCRIBE").attr("aria-checked", "true").removeClass("_MM_TVCH_SUBSCRIBE").text("구독중")
                            })
                        })
                    }
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    xJAwpQhn: function(e, t, n) {
        (function(t, a) {
            var o = n("jShiu/8B"),
                i = n("vvRPcpct"),
                r = n("ocFmbBVe"),
                c = n("erV2gdow"),
                s = n("baMwVjn2"),
                d = n("Uh2+F60L"),
                l = n("oOU8Ku/P");
            window.nmain.gv;

            function u(e) {
                nhn.mobile.launchApp(e.currentTarget), e.preventDefault()
            }
            var _ = function() {
                    var e, n;

                    function i(t) {
                        var n = t.account;
                        Object.keys(n).forEach(function(t) {
                            var a = n[t],
                                o = e.find('[data-shortcut-code*="svc.' + t + ':"] .MM_BUBBLE');
                            if (a > 0) {
                                var i = a > 99 ? "99+" : a.toString();
                                o.html(i).show()
                            } else o.hide()
                        })
                    }

                    function r() {
                        history.state && history.state.current && (s.moveTo(history.state.current), t(window).one("popstate", r))
                    }

                    function _(e) {
                        var n = e.currentTarget.getAttribute("href").replace(/^.*menuCode=([A-Z_0-9]+).*$/, "$1");
                        a({}, "home." + t(e.currentTarget).attr("data-clk"), "", ""), s.moveTo(n), history.replaceState({
                            current: "SEARCH"
                        }, "SEARCH", location.href), history.pushState({
                            current: n
                        }, n, location.href), t(window).one("popstate", r), e.preventDefault()
                    }
                    return {
                        init: function() {
                            e = t("#MM_WEB_SHORTCUT"), n = e.find(".MM_SHORTCUT_LIST_TEMPLATE").html(), o.parse(n);
                            var a = c.getMyIdList().map(c.getMeta).filter(function(e) {
                                return !!e
                            }).slice(0, 7).map(function(e) {
                                return o.render(n, e)
                            }).join("");
                            a && (a += '<li class="sv_item"><a href="/services.html" class="sv_a" data-clk="shortallser"><div class="sv_all"><span class="blind">서비스 전체보기</span><span class="dots"><span class="ico_dot"></span> <span class="ico_dot"></span> <span class="ico_dot"></span></span></div></a></li>'), e.find(".sv_list").html(a), e.on("click", "[data-shortcut-code^=menu] .MM_SHORTCUT_ITEM_LINK", _), e.on("click", '.MM_SHORTCUT_ITEM[data-shortcut-code$=":2"] .MM_SHORTCUT_ITEM_LINK', u), d.attach("onUpdateSuccess", i), l.set("SHORTCUT_SETTING", c.isDefaultSetting() ? "DEFAULT" : "CUSTOM", 14)
                        }
                    }
                }(),
                f = function() {
                    var e, n, a = "MM_H_FOLD_SHORTCUT";

                    function s(t) {
                        var n = e.find(".MM_EDIT_BTN_WRAP"),
                            a = e.find(".MM_TOOL_BTN_WRAP"),
                            o = e.find(".MM_SHORTCUT_LIST"),
                            i = e.find(".MM_SHORTCUT_LIST_WRAP"),
                            c = o.data("__SORTABLE_INSTANCE__") || r.create(o.get(0), {
                                dataIdAttr: "data-shortcut-code",
                                ghostClass: "cs_dropzone",
                                chosenClass: "cs_draging",
                                onStart: function() {
                                    i.addClass("list_ondrag")
                                },
                                onEnd: function() {
                                    i.removeClass("list_ondrag")
                                }
                            });
                        o.data("__SORTABLE_INSTANCE__", c), t ? (n.show(), a.hide(), i.addClass("list_onedit"), c.option("disabled", !1)) : (n.hide(), a.show(), i.removeClass("list_onedit"), c.option("disabled", !0))
                    }

                    function _() {
                        return e.find(".MM_SHORTCUT_LIST [data-shortcut-code]").map(function(e, n) {
                            return t(n).attr("data-shortcut-code")
                        }).toArray()
                    }

                    function f(e) {
                        var n = t(e.currentTarget),
                            a = n.hasClass("MM_EDIT_BTN"),
                            o = n.hasClass("MM_EDIT_SAVE_BTN");
                        a && 0 == _().length || (s(a), o && c.setMyIdList(_()), a ? l.get("MM_HOME_SHORTCUT_SETTING_TOAST") || (t.popup.toast({
                            msg: "아이콘을 눌러 순서변경 하세요."
                        }), l.set("MM_HOME_SHORTCUT_SETTING_TOAST", 1, 30)) : (m(), d.update()))
                    }

                    function p(n) {
                        setTimeout(function() {
                            t(n.currentTarget).closest(".MM_SHORTCUT_ITEM").remove(), 0 == _().length && (e.find(".MM_SHORTCUT_LIST_WRAP").hide(), e.find(".MM_SHORTCUT_EMPTY").show())
                        }, 0)
                    }

                    function h(e) {
                        e.preventDefault(), i.get(a) ? i.remove(a) : i.set(a, "1", {
                            expires: 365
                        }), m()
                    }

                    function m() {
                        var t = v();
                        if (e && 0 != e.length) {
                            c.sendToApp();
                            var a = c.getMyIdList();
                            if (a.length > 0) {
                                var r = a.map(c.getMeta).filter(function(e) {
                                    return !!e
                                });
                                e.find(".MM_SHORTCUT_LIST").html(o.render(n, {
                                    shortcutList: r
                                }))
                            }
                            t || function(t) {
                                    t ? (e.find(".MM_SHORTCUT_LIST_WRAP").removeClass("list_loding").show(), e.find(".MM_EDIT_BTN").removeClass("cs_dimd"), e.find(".MM_SHORTCUT_EMPTY").hide()) : (e.find(".MM_SHORTCUT_LIST_WRAP").removeClass("list_loding").hide(), e.find(".MM_EDIT_BTN").addClass("cs_dimd"), e.find(".MM_SHORTCUT_EMPTY").show())
                                }(a.length > 0),
                                function() {
                                    var e = parseInt(i.get("MM_LAB_REVISION"), 10) || 0;
                                    return c.getLabRev() > e
                                }() && e.find('[data-shortcut-code="svc.nlabs:1"] .MM_BADGE').html('<span class="ico_cs_new">신규</span>').show(), l.set("SHORTCUT_SETTING", c.isDefaultSetting() ? "DEFAULT" : "CUSTOM", 14), c.isExistShortcutCookie() && c.setMyIdList(c.getMyIdList())
                        }
                    }

                    function M(t) {
                        s(!1);
                        var n = t.account;
                        Object.keys(n).forEach(function(t) {
                            var a = n[t];
                            if (a > 0) {
                                var o = a > 99 ? "99+" : a.toString();
                                "cafe" == t && (o = '<span class="ico_cs_new">신규</span>'), e.find('[data-shortcut-code="svc.' + t + ':1"] .MM_BADGE').html(o).show()
                            } else e.find('[data-shortcut-code="svc.' + t + ':1"] .MM_BADGE').hide()
                        }), v()
                    }

                    function v() {
                        var t = i.get(a) || !1,
                            n = e.find(".MM_H_FOLD_BTN"),
                            o = e.find(".MM_H_FOLD_TARGET"),
                            r = n.attr("data-fold-css") || "";
                        return t ? (o.addClass(r), n.attr("aria-expanded", "false").attr("data-clk", "shortfold"), s(!1), e.find(".MM_TOOL_BTN_WRAP").hide(), e.find(".MM_SHORTCUT_LIST_WRAP").hide(), e.find(".MM_SHORTCUT_EMPTY").hide()) : (o.removeClass(r), n.attr("aria-expanded", "true").attr("data-clk", "shortunfold"), s(!1)), t
                    }

                    function g() {
                        var t = e.find(".MM_SHORTCUT_LIST").data("__SORTABLE_INSTANCE__");
                        t && !t.option("disabled") && (e.trigger("innerTouchStart"), window.nmain.gv.isApp || (t.options.fallbackOffset = {
                            x: 0,
                            y: window.scrollY
                        }))
                    }
                    return {
                        init: function() {
                            e = t("#MM_APP_SHORTCUT"), n = e.find(".MM_SHORTCUT_LIST_TEMPLATE").html(), o.parse(n), e.on("click", ".MM_EDIT_BTN, .MM_EDIT_SAVE_BTN, .MM_EDIT_CANCLE_BTN", f).on("click", ".MM_REMOVE", p).on("click", ".MM_H_FOLD_BTN", h).on("click", ".MM_SHORTCUT_LIST_WRAP.list_onedit .MM_SHORTCUT_ITEM_LINK", function(e) {
                                e.preventDefault(), e.stopImmediatePropagation()
                            }).on("click", '.MM_SHORTCUT_ITEM[data-shortcut-code$=":2"] .MM_SHORTCUT_ITEM_LINK', u).on("touchstart touchmove mousedown", ".MM_SHORTCUT_LIST", g).on("touchend mouseup", ".MM_SHORTCUT_LIST", function() {
                                e.trigger("innerTouchEnd")
                            }), d.attach("onUpdateSuccess", M), m()
                        },
                        refresh: function() {
                            m(), d.update()
                        }
                    }
                }();
            e.exports = {
                initInWeb: function() {
                    c.init(), _.init(), d.update()
                },
                initInApp: function() {
                    c.init(), c.sendMyIdListToApp(), c.sendGreendotShortcutMetaToApp(), f.init(), d.update()
                },
                refreshInApp: f.refresh
            }
        }).call(this, n("QFBpxR1d"), n("C4iEnhWn"))
    },
    yJaq6oZv: function(e, t, n) {
        (function(t) {
            var a = n("vvRPcpct"),
                o = n("frQ1Xk3Y"),
                i = n("Apfa9pYC"),
                r = n("+wBTMN/I"),
                c = (n("baMwVjn2"), n("AOEo5Xn2")),
                s = n("1Fnl7I+q"),
                d = n("ieoLjlAQ"),
                l = "MM_menu_alter",
                u = ";";
            e.exports = {
                run: function() {
                    try {
                        ! function() {
                            if (window.nmain.gv.forceSubscribe && !r.isSubscribed("ENTER") && "1" !== a.get("MM_SUBSCRIBE_ENTER"))
                                if (o("[subscribeEnterPanel] subscribe ENTER"), a.set("MM_SUBSCRIBE_ENTER", "1"), window.localStorage.setItem("MM_SUBSCRIBE_ENTER", "1"), window.nmain.gv.isApp) setTimeout(function() {
                                    location.href = "/naverapp/?cmd=showMenu&menuCode=ENTER"
                                }, 250);
                                else {
                                    var e = r.getMyCommerceCodeList();
                                    e.push("ENTER"), r.changeMyList("commerce", e), location.reload()
                                }
                        }()
                    } catch (e) {
                        o("[subscribeEnterPanel] subscribe ENTER = " + e)
                    }! function() {
                        var e = a.getJSON(l);
                        if (e) switch (a.remove(l, {
                            domain: "m.naver.com"
                        }), a.remove(l), e.from) {
                            case "link":
                                ! function(e) {
                                    if (e.update) return t.popup.t3({
                                        msg: "홈 메뉴 설정은<br/>최신 네이버앱에서<br/>가능합니다."
                                    });
                                    if (!e.silent && (e.add || e.order) && e.code) {
                                        var n = "";
                                        if (1 == e.order) return t.popup.t19({
                                            menuName: r.getMeta(e.code).menuName,
                                            extraText: "첫판으로 ",
                                            isCommerceHome: "COMMERCE" === r.getMeta(e.code).homeCode
                                        });
                                        if (!e.order) return t.popup.t19({
                                            menuName: r.getMeta(e.code).menuName,
                                            isCommerceHome: "COMMERCE" === r.getMeta(e.code).homeCode
                                        }), void d.addNewMark(e.code);
                                        n = "판 순서가<br/> 변경되었습니다!", t.popup.t4({
                                            menuName: r.getMeta(e.code).menuName,
                                            isCommerceHome: "COMMERCE" === r.getMeta(e.code).homeCode,
                                            msg: n
                                        })
                                    }
                                }(e);
                                break;
                            case "edit":
                                ! function(e) {
                                    e.code.forEach(function(e) {
                                        d.addNewMark(e)
                                    }), t.popup.toast({
                                        selector: "#MM_POPUP_TOAST_CIRCLE",
                                        msg: "적용완료",
                                        showTime: 1e3,
                                        fadeOut: 500
                                    })
                                }(e);
                                break;
                            case "script":
                                ! function(e) {
                                    if ("s" === e.type) {
                                        var n = t('<div id="t20" class="ly_beauty_event ly_closepan"> <div class="area_lbe"> <div class="lbe_wrap"> <div class="lbe_tw"> <p class="lbe_t"><span class="lbe_pn">쇼핑</span>판이 삭제되었습니다.</p> <p class="lbe_s">이제 <span class="lbe_pn">트렌드판</span>에서<br> 네이버쇼핑을 만나보세요</p> </div> </div> </div> </div>');
                                        n.on("click", function() {
                                            n.remove()
                                        }), setTimeout(function() {
                                            n.remove()
                                        }, 3e3), t(document.body).append(n)
                                    }
                                }(e)
                        }
                    }(),
                    function() {
                        c.cleanUnused({
                            isRefresh: !0
                        });
                        var e = {
                            act: "main.unused"
                        };
                        e.pnls30 = c.getUnusedPanel(30).join(u), e.pnls30.length && (e.pnls60 = c.getUnusedPanel(60).join(u), e.pnls90 = c.getUnusedPanel(90).join(u), e.pnls120 = c.getUnusedPanel(120).join(u), e.pnls150 = c.getUnusedPanel(150).join(u), e.pnls180 = c.getUnusedPanel(180).join(u), s.send("menu", e))
                    }();
                    var e = (new i).getQueryObject();
                    navigator.userAgent.search("NAVER") >= 0 && e && ("main" == e.app_page || "main" == e.page) ? (o("[index.onload] old naver app"), a.remove("MM_NEW"), a.remove("MM_NEW", {
                        domain: "naver.com"
                    }), a.remove("MM_NEW", {
                        domain: "m.naver.com"
                    }), location.reload()) : a.set("MM_NEW", "1", {
                        expires: 365,
                        domain: "naver.com"
                    });
                    try {
                        localStorage.removeItem("MM_NUDGE_LAST")
                    } catch (e) {}
                    try {
                        var n = a.get("MM_panel"),
                            _ = a.get("MM_contents");
                        if (_ && a.set("MM_contents", _, {
                                expires: 3650
                            }), navigator.userAgent.search("NAVER") < 0 && n && !_) {
                            o("[index.onload] panels migration !! : " + n);
                            var f = n.split(";").filter(function(e) {
                                return !!e
                            });
                            f && f.length > 0 && (_ = (f.length > 3 ? f.slice(0, 3).concat(["DATA"]).concat(f.slice(3)) : f.concat(["DATA"])).join(";"), a.remove("MM_S"), a.remove("MM_m"), a.remove("MM_h"), a.set("MM_contents", _, {
                                expires: 3650
                            }), location.reload())
                        }
                    } catch (e) {}
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    yNPIeKN9: function(e, t, n) {
        (function(t) {
            var a, o, i, r = n("baMwVjn2"),
                c = n("vvRPcpct"),
                s = n("K0zMvcnj"),
                d = n("frQ1Xk3Y"),
                l = 1,
                u = 1,
                _ = !0;

            function f() {
                _ && a && a.hide(), _ || (_ = !0)
            }

            function p(e) {
                e.preventDefault(), a && a.hide(), _ = !1, a = t(e.currentTarget).next().show()
            }

            function h(e) {
                e.preventDefault(), a ? (a.hide(), a = null) : t(e.currentTarget).parent().hide()
            }

            function m() {
                l >= u || (o.find(".id_cui_shop_regular[data-page='" + ++l + "']").show(), l >= u && (M(), v()))
            }

            function M() {
                i.css({
                    display: "none",
                    position: null,
                    top: null
                })
            }

            function v() {
                o.attr("data-last", !0), r.getCurInfo().$element.siblings("._MM_FOOTER").css("display", "").attr("aria-hidden", "false")
            }

            function g(e) {
                e.preventDefault();
                var n = t(e.currentTarget).data("code");
                c.set("MM_SHOPFEED_GENDER", n, {
                    expires: 1 / 24 / 60
                }), s.run()
            }

            function T(e) {
                e.preventDefault();
                var n = t(e.currentTarget).data("channelNo");
                t.ajax("/nvhaproxy_plus/commerce/api/zzim/store/follow?channelNo=" + n, {
                    timeout: 3e3,
                    dataType: "json",
                    success: function(e) {
                        e && e.success ? t.popup.t16({
                            msg: "<span class='la_st'>스토어찜</span>이 되었습니다.<br/>앞으로 신상품 및 소식을 전달드릴게요.",
                            ok: "완료",
                            okCb: function() {
                                s.run()
                            }
                        }) : (t.popup.t16({
                            msg: "일시적인 문제로 단골맺기에 실패하였습니다.<br>스토어에 방문하셔서, 스토어찜을 진행해 주세요."
                        }), d("[shop feed] 찜 실패, res = " + e))
                    },
                    error: function(e, n, a) {
                        t.popup.t16({
                            msg: "일시적인 문제로 단골맺기에 실패하였습니다.<br>스토어에 방문하셔서, 스토어찜을 진행해 주세요."
                        }), d("[shop feed] 찜 실패, res = " + a)
                    }
                })
            }

            function E(e) {
                e.preventDefault(), _ = !1;
                var n = t(e.currentTarget),
                    o = n.data("name"),
                    i = n.data("channelNo");
                t.popup.t9({
                    msg: "<span class='la_st'>" + o + "</span> 스토어와<br/>단골을 해지하시겠어요?<br/>스토어찜이 취소되며,<br/>기존 컨텐츠가 더 이상 보이지 않습니다.",
                    ok: "해지",
                    cancel: "취소",
                    okCb: function() {
                        t.ajax("/nvhaproxy_plus/commerce/api/zzim/store/unfollow?channelNo=" + i, {
                            timeout: 3e3,
                            dataType: "json",
                            success: function(e) {
                                e && e.success ? t.popup.t16({
                                    msg: "단골이 해지되었습니다.",
                                    okCb: function() {
                                        s.run()
                                    }
                                }) : (t.popup.t16({
                                    msg: "일시적인 문제로 단골해지에 실패하였습니다.<br>스토어에 방문하셔서, 스토어찜 취소를 진행해 주세요."
                                }), d("[shop feed] 찜 해지 실패, res = " + e))
                            },
                            error: function(e, n, a) {
                                t.popup.t16({
                                    msg: "일시적인 문제로 단골해지에 실패하였습니다.<br>스토어에 방문하셔서, 스토어찜 취소를 진행해 주세요."
                                }), d("[shop feed] 찜 해지 실패, res = " + a)
                            },
                            complete: function() {
                                _ = !0
                            }
                        })
                    },
                    cancelCb: function() {
                        a && (a.hide(), _ = !0)
                    },
                    nclk: {
                        ok: "",
                        cancel: ""
                    }
                })
            }
            e.exports = {
                init: function(e) {
                    o = e, i = t("#MM_LOADING"), M(), o.on("click", "._MM_SHOPFEED_GENDER", g).on("click", "._MM_SHOPFEED_CHANNEL_FOLLOW", T).on("click", "._MM_SHOPFEED_CHANNEL_UNFOLLOW", E).on("click", "._MM_SHOPFEED_MORE_OPEN", p).on("click", "._MM_SHOPFEED_MORE_CLOSE", h).on("click", f), o.data("last") || "EVENT" != o.data("moreType") || (t(r).on("panelAppendPosition", m), (u = o.find(".id_cui_shop_store").data("lastPage") || 1) && 1 != u ? function() {
                        var e = r.getCurInfo();
                        i.css({
                            display: "",
                            position: e ? null : "relative",
                            top: e ? null : window.innerHeight / 2 - 2e3 + "px"
                        })
                    }() : v())
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    "z+gjgRDo": function(e, t, n) {
        (function(t) {
            var a = n("oOU8Ku/P"),
                o = n("baMwVjn2"),
                i = n("Z16Wmyu8"),
                r = window.nmain.gv,
                c = t("#ct"),
                s = function() {
                    var e, n = r.isPad || "SEARCH" != o.getCurCode() || !window.inapphome || "function" != typeof window.inapphome.moveSettings,
                        a = t(window),
                        i = !1;

                    function s() {
                        e.remove(), a.off("scroll", d)
                    }

                    function d() {
                        window.pageYOffset < 10 ? (c.append(e), setTimeout(s, 5e3)) : s()
                    }
                    return {
                        show: function() {
                            n || (i = !0, (e = t('<div class="float_realtime"> <a href="#" class="fr_banner" data-clk="setfloating"> <strong class="fr_title"><em class="fr_st fr_setting">앱 설정</em>에서 원하는 버전을 선택할 수 있어요</strong> </a> </div>')).find("a").on("click", function(e) {
                                e.preventDefault(), window.inapphome.moveSettings()
                            }), d(), a.on("scroll", d))
                        },
                        isExposed: function() {
                            return i
                        }
                    }
                }();
            ! function() {
                var e, n, a = t(window);

                function o() {
                    window.pageYOffset > 5 && (e.removeClass("fc_fade_in").addClass("fc_fade_out"), a.off("scroll", o))
                }
            }();
            e.exports = {
                show: function() {
                    s.isExposed() || i.showToastBanner()
                },
                showDualToastBanner: s.show
            }
        }).call(this, n("QFBpxR1d"))
    },
    zAloRAYX: function(e, t, n) {
        (function(t) {
            var a = window.nmain.gv,
                o = n("46FWNNQh"),
                i = n("jShiu/8B"),
                r = n("oOU8Ku/P"),
                c = n("vvRPcpct"),
                s = n("baMwVjn2"),
                d = n("erV2gdow"),
                l = o(),
                u = t(window),
                _ = parseInt(window.innerHeight),
                f = parseInt(window.innerWidth),
                p = "ios" == l.os.name && !/^[0-9]\..*$/.test(l.os.version) && (_ >= 530 || f >= 530) || "android" == l.os.name && !/^[0-4]\..*$/.test(l.os.version) && (_ >= 550 || f >= 550);
            p = p && window.m && window.m.naverGreendotMain && "function" == typeof window.m.naverGreendotMain.injectDependency;
            var h = function() {
                var e = t("#MM_GREENDOT");

                function n() {
                    u.scrollTop() <= 0 ? e.removeClass("greendot_out") : e.addClass("greendot_out")
                }

                function o() {
                    n()
                }
                return {
                    init: function(a) {
                        if (p) {
                            var r = {};
                            a.forEach(function(e) {
                                r[e] = d.getMeta(e)
                            });
                            var l = c.get("MM_GREENDOT_SHORTCUT");
                            l && l.split(";").forEach(function(e) {
                                r[e] = d.getMeta(e)
                            });
                            var _ = window.m.naverGreendotMain.injectDependency({
                                $: t,
                                Mustache: i,
                                Cookies: c,
                                nclk: window.nclk,
                                launchApp: window.nhn.mobile.launchApp
                            }).create({
                                trend: {
                                    api: {
                                        url: "/searchRank",
                                        param: {
                                            frm: "webmain"
                                        }
                                    },
                                    search: {
                                        url: "https://m.search.naver.com/search.naver?",
                                        param: {
                                            sm: "mob_grd.lve",
                                            where: "m",
                                            query: ""
                                        }
                                    }
                                },
                                shortcut: {
                                    storageKey: "MM_GREENDOT_SHORTCUT",
                                    airsRecommendCodeList: a,
                                    allItemMeta: r,
                                    settingsUrl: "/settings/shortcut/?greendot=YES&airsRecommendCodeList=" + encodeURIComponent(a.join(";")),
                                    badge: {
                                        api: {
                                            url: "/preview/index.json",
                                            param: {
                                                bizTalk: "yes"
                                            }
                                        }
                                    }
                                }
                            });
                            e.on("click", function() {
                                _.show()
                            });
                            var f = document.getElementById("ct"),
                                h = e[0];
                            _.on("show", function() {
                                f.style.display = h.style.display = "none"
                            }).on("hide", function() {
                                f.style.display = h.style.display = ""
                            }).on("onClickSearch", function(e) {
                                _.hide(), e.preventDefault(), document.getElementById("query").focus()
                            }), "SEARCH" == s.getCurCode() && (u.on("scroll", o), n()), t(s).on("panelBeforeChange", function(t) {
                                "SEARCH" == t.toCode ? (u.on("scroll", o), e.removeClass("greendot_out")) : (u.off("scroll", o), e.addClass("greendot_out"))
                            })
                        }
                    },
                    getAirsRecommend: function() {
                        var e = parseInt(a.age),
                            n = a.gender;
                        if (isNaN(e) || !/^[mf]$/.test(n)) return t.Deferred().resolve({
                            result: {}
                        });
                        var o = r.get("MM_airs_shortcut_my_" + a.isLogin);
                        if (o) return t.Deferred().resolve(JSON.parse(o));
                        var i = {
                            url: "/api_airs_shortcut",
                            data: {
                                st: "service",
                                display: 12,
                                cid: "main_dev",
                                demographic: n.toUpperCase() + ":"
                            },
                            dataType: "json",
                            timeout: 500
                        };
                        return i.data.demographic += e <= 12 ? "00-12" : e <= 18 ? "13-18" : e <= 24 ? "19-24" : e <= 29 ? "25-29" : e <= 34 ? "30-34" : e <= 39 ? "35-39" : e <= 49 ? "40-49" : e <= 59 ? "50-59" : "60-99", t.ajax(i)
                    }
                }
            }();
            e.exports = {
                init: function() {
                    h.getAirsRecommend().always(function(e) {
                        var n = [];
                        if (!(e && e.result && e.result.service && e.result.service.length)) try {
                            e = JSON.parse(t("#MM_AIRS_SHORTCUT_GLOBAL").html())
                        } catch (t) {
                            e = null
                        }
                        e && e.result && e.result.service && e.result.service.length && (r.set("MM_airs_shortcut_my_" + a.isLogin, JSON.stringify(e), 3), n = e.result.service.map(function(e) {
                            var t = 0 == e.code.search("svc.") ? e.code : "menu." + e.code,
                                n = d.getMeta(t);
                            return n ? n.code : null
                        }).filter(function(e) {
                            return null != e
                        })), h.init(n)
                    })
                },
                isSupported: function() {
                    return p
                }
            }
        }).call(this, n("QFBpxR1d"))
    },
    zGVilkLJ: function(e, t, n) {
        (function(t) {
            var a = n("+wBTMN/I"),
                o = n("jShiu/8B"),
                i = window.nmain.gv,
                r = i.menuMeta.CONTENTS,
                c = a.getMyContentsCodeList(),
                s = null;
            e.exports = {
                attach: function(e) {
                    var n = e.$element;
                    if (!("COMMERCE" == e.homeCode || n.find(".brick-vowel > .MM_PANEL_RECOMMEND").length > 0 || "SHOPPING" == e.code || "TODAY" == e.code)) {
                        if (null == s) {
                            var a = {};
                            switch (i.gender) {
                                case "f":
                                    a.title = "동일 연령대 여자 인기 주제 판";
                                    break;
                                case "m":
                                    a.title = "동일 연령대 남자 인기 주제 판";
                                    break;
                                default:
                                    a.title = "인기 주제 판을 확인해 보세요!"
                            }
                            a.recommends = Object.keys(r).filter(function(e) {
                                var t = r[e];
                                return c.indexOf(e) < 0 && t.ranking > -1 && "Y" == t.serviceYn && "SHOPPING" != e
                            }).sort(function(e, t) {
                                return r[e].ranking - r[t].ranking
                            }).slice(0, 4).map(function(e) {
                                return t.extend({
                                    code: e
                                }, r[e])
                            }), s = !a.recommends || !a.recommends.length || a.recommends.length < 4 ? "" : o.render('<div class="grid1 id_cui_recommend_board MM_PANEL_RECOMMEND"><div class="cui_recommend_board"><div class="crb_title_wrap"><h3 class="crb_title">{{title}}<a class="crb_right_a" href="/settings/menu/" data-clk="panopen">판관리</a></h3></div><div class="crb_shortcut_wrap"><ul class="crb_list">{{#recommends}}<li class="crb_item"><a href="/naverapp/?cmd=onMenu&version=3&menuCode={{code}}" class="crb_a" data-clk="comm{{nclickCode}}"><div class="crb_mw"><img src="{{thumbnailUrl}}" class="crb_m" width="34px" height="34px" alt=""></div><span class="crb_t">{{menuName}}판</span></a></li>{{/recommends}}</ul></div></div></div>', a)
                        }
                        e.isLast() && s ? n.find("#MM_HOME_SEARCH_RECOMMEND_PANEL").length > 0 ? n.find("#MM_HOME_SEARCH_RECOMMEND_PANEL").replaceWith(s).resize() : n.find(".brick-vowel").eq(0).append(s).resize() : n.find("#MM_HOME_SEARCH_RECOMMEND_PANEL").remove()
                    }
                }
            }
        }).call(this, n("QFBpxR1d"))
    }
});
//# sourceMappingURL=nmain.20191010.js.map