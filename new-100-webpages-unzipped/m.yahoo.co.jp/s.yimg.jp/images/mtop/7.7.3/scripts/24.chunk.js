(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        212: function(t, e, i) {
            window,
            t.exports = function(t) {
                var e = {};

                function i(s) {
                    if (e[s]) return e[s].exports;
                    var n = e[s] = {
                        i: s,
                        l: !1,
                        exports: {}
                    };
                    return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                }
                return i.m = t, i.c = e, i.d = function(t, e, s) {
                    i.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: s
                    })
                }, i.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, i.t = function(t, e) {
                    if (1 & e && (t = i(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var s = Object.create(null);
                    if (i.r(s), Object.defineProperty(s, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var n in t) i.d(s, n, function(e) {
                            return t[e]
                        }.bind(null, n));
                    return s
                }, i.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return i.d(e, "a", e), e
                }, i.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, i.p = "", i(i.s = 12)
            }([function(t, e) {
                var i = [{
                    tile: [{
                        pages: {
                            web_search: "1225_1",
                            ytop: "W016"
                        },
                        configs: {
                            enable_tile: !0
                        }
                    }, {
                        pages: {
                            web_search: "1225_2",
                            ytop: "W015"
                        },
                        configs: {
                            enable_tile: !0,
                            dispSuggestNum: 23,
                            api_opts: {
                                lv: "1225_2",
                                results: 20
                            }
                        }
                    }],
                    clipboard: [{
                        pages: {
                            android: "AND_SCHCB_002"
                        },
                        configs: {
                            enable_clipboard: !0
                        }
                    }]
                }];
                t.exports = i.length <= 1 ? i[0] : i
            }, function(t, e) {
                t.exports = function(t) {
                    var e = [];
                    return e.toString = function() {
                        return this.map(function(e) {
                            var i = function(t, e) {
                                var i, s = t[1] || "",
                                    n = t[3];
                                if (!n) return s;
                                if (e && "function" == typeof btoa) {
                                    var o = (i = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
                                        a = n.sources.map(function(t) {
                                            return "/*# sourceURL=" + n.sourceRoot + t + " */"
                                        });
                                    return [s].concat(a).concat([o]).join("\n")
                                }
                                return [s].join("\n")
                            }(e, t);
                            return e[2] ? "@media " + e[2] + "{" + i + "}" : i
                        }).join("")
                    }, e.i = function(t, i) {
                        "string" == typeof t && (t = [
                            [null, t, ""]
                        ]);
                        for (var s = {}, n = 0; n < this.length; n++) {
                            var o = this[n][0];
                            "number" == typeof o && (s[o] = !0)
                        }
                        for (n = 0; n < t.length; n++) {
                            var a = t[n];
                            "number" == typeof a[0] && s[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), e.push(a))
                        }
                    }, e
                }
            }, function(t, e, i) {
                var s, n, o = {},
                    a = (s = function() {
                        return window && document && document.all && !window.atob
                    }, function() {
                        return void 0 === n && (n = s.apply(this, arguments)), n
                    }),
                    r = function(t) {
                        var e = {};
                        return function(t) {
                            if ("function" == typeof t) return t();
                            if (void 0 === e[t]) {
                                var i = function(t) {
                                    return document.querySelector(t)
                                }.call(this, t);
                                if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                                    i = i.contentDocument.head
                                } catch (t) {
                                    i = null
                                }
                                e[t] = i
                            }
                            return e[t]
                        }
                    }(),
                    c = null,
                    l = 0,
                    h = [],
                    d = i(9);

                function u(t, e) {
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i],
                            n = o[s.id];
                        if (n) {
                            n.refs++;
                            for (var a = 0; a < n.parts.length; a++) n.parts[a](s.parts[a]);
                            for (; a < s.parts.length; a++) n.parts.push(y(s.parts[a], e))
                        } else {
                            var r = [];
                            for (a = 0; a < s.parts.length; a++) r.push(y(s.parts[a], e));
                            o[s.id] = {
                                id: s.id,
                                refs: 1,
                                parts: r
                            }
                        }
                    }
                }

                function p(t, e) {
                    for (var i = [], s = {}, n = 0; n < t.length; n++) {
                        var o = t[n],
                            a = e.base ? o[0] + e.base : o[0],
                            r = {
                                css: o[1],
                                media: o[2],
                                sourceMap: o[3]
                            };
                        s[a] ? s[a].parts.push(r) : i.push(s[a] = {
                            id: a,
                            parts: [r]
                        })
                    }
                    return i
                }

                function f(t, e) {
                    var i = r(t.insertInto);
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                    var s = h[h.length - 1];
                    if ("top" === t.insertAt) s ? s.nextSibling ? i.insertBefore(e, s.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), h.push(e);
                    else if ("bottom" === t.insertAt) i.appendChild(e);
                    else {
                        if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                        var n = r(t.insertInto + " " + t.insertAt.before);
                        i.insertBefore(e, n)
                    }
                }

                function g(t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t);
                    var e = h.indexOf(t);
                    e >= 0 && h.splice(e, 1)
                }

                function m(t) {
                    var e = document.createElement("style");
                    return void 0 === t.attrs.type && (t.attrs.type = "text/css"), v(e, t.attrs), f(t, e), e
                }

                function v(t, e) {
                    Object.keys(e).forEach(function(i) {
                        t.setAttribute(i, e[i])
                    })
                }

                function y(t, e) {
                    var i, s, n, o;
                    if (e.transform && t.css) {
                        if (!(o = e.transform(t.css))) return function() {};
                        t.css = o
                    }
                    if (e.singleton) {
                        var a = l++;
                        i = c || (c = m(e)), s = _.bind(null, i, a, !1), n = _.bind(null, i, a, !0)
                    } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function(t) {
                        var e = document.createElement("link");
                        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), f(t, e), e
                    }(e), s = function(t, e, i) {
                        var s = i.css,
                            n = i.sourceMap,
                            o = void 0 === e.convertToAbsoluteUrls && n;
                        (e.convertToAbsoluteUrls || o) && (s = d(s)), n && (s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
                        var a = new Blob([s], {
                                type: "text/css"
                            }),
                            r = t.href;
                        t.href = URL.createObjectURL(a), r && URL.revokeObjectURL(r)
                    }.bind(null, i, e), n = function() {
                        g(i), i.href && URL.revokeObjectURL(i.href)
                    }) : (i = m(e), s = function(t, e) {
                        var i = e.css,
                            s = e.media;
                        if (s && t.setAttribute("media", s), t.styleSheet) t.styleSheet.cssText = i;
                        else {
                            for (; t.firstChild;) t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(i))
                        }
                    }.bind(null, i), n = function() {
                        g(i)
                    });
                    return s(t),
                        function(e) {
                            if (e) {
                                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                                s(t = e)
                            } else n()
                        }
                }
                t.exports = function(t, e) {
                    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                    (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                    var i = p(t, e);
                    return u(i, e),
                        function(t) {
                            for (var s = [], n = 0; n < i.length; n++) {
                                var a = i[n];
                                (r = o[a.id]).refs--, s.push(r)
                            }
                            for (t && u(p(t, e), e), n = 0; n < s.length; n++) {
                                var r;
                                if (0 === (r = s[n]).refs) {
                                    for (var c = 0; c < r.parts.length; c++) r.parts[c]();
                                    delete o[r.id]
                                }
                            }
                        }
                };
                var b, S = (b = [], function(t, e) {
                    return b[t] = e, b.filter(Boolean).join("\n")
                });

                function _(t, e, i, s) {
                    var n = i ? "" : s.css;
                    if (t.styleSheet) t.styleSheet.cssText = S(e, n);
                    else {
                        var o = document.createTextNode(n),
                            a = t.childNodes;
                        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
                    }
                }
            }, function(t, e) {
                t.exports = '<svg viewBox="0 0 48 48"><path d="M21 32c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11m20.414 6.586l-8.499-8.499A14.919 14.919 0 0 0 36 21c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15a14.91 14.91 0 0 0 9.086-3.085l8.5 8.499a2 2 0 1 0 2.828-2.828" fill-rule="evenodd"></path></svg>'
            }, function(t, e) {
                t.exports = '<svg viewBox="0 0 48 48"><path d="M31 26h-5v5a2 2 0 0 1-4 0v-5h-5a2 2 0 0 1 0-4h5v-5a2 2 0 0 1 4 0v5h5a2 2 0 0 1 0 4m7-20H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4" fill-rule="evenodd"></path></svg>'
            }, function(t, e) {
                t.exports = '<svg viewBox="0 0 48 48"><path d="M31 27.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V24h5.5a.5.5 0 0 1 .5.5v3zM24 5C13.507 5 5 13.507 5 24s8.507 19 19 19 19-8.507 19-19S34.493 5 24 5z" fill-rule="evenodd"></path></svg>'
            }, function(t, e) {
                t.exports = '<svg viewBox="0 0 48 48"><path d="M29.685 37.877c1.36-3.203 2.1-7.53 2.274-11.877h6.892a15.001 15.001 0 0 1-9.166 11.877zM9.15 26h6.892c.173 4.347.914 8.674 2.274 11.877A15.001 15.001 0 0 1 9.149 26zm9.166-15.877c-1.36 3.203-2.1 7.53-2.274 11.877H9.149a15.001 15.001 0 0 1 9.166-11.877zM20.045 22C20.397 13.544 22.92 9 24 9c1.08 0 3.603 4.544 3.955 13h-7.91zM24 39c-1.08 0-3.603-4.543-3.955-13h7.91C27.603 34.457 25.08 39 24 39zM38.85 22H31.96c-.173-4.347-.914-8.674-2.274-11.877A15.001 15.001 0 0 1 38.851 22zM24 5C13.507 5 5 13.507 5 24s8.507 19 19 19 19-8.507 19-19S34.493 5 24 5z" fill-rule="evenodd"></path></svg>'
            }, function(t, e, i) {
                var s = i(8);
                "string" == typeof s && (s = [
                    [t.i, s, ""]
                ]), i(2)(s, {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                }), s.locals && (t.exports = s.locals)
            }, function(t, e, i) {
                (t.exports = i(1)(!1)).push([t.i, ".SearchCommon-SearchAssist div,.SearchCommon-SearchAssist li,.SearchCommon-SearchAssist ul{margin:0;padding:0}.SearchCommon-SearchAssist button{margin:0;padding:0;border:none;border-radius:0;background-color:transparent;font-size:15px;-webkit-appearance:none;appearance:none}.SearchCommon-SearchAssist li{list-style:none}", ""])
            }, function(t, e) {
                t.exports = function(t) {
                    var e = "undefined" != typeof window && window.location;
                    if (!e) throw new Error("fixUrls requires window.location");
                    if (!t || "string" != typeof t) return t;
                    var i = e.protocol + "//" + e.host,
                        s = i + e.pathname.replace(/\/[^\/]*$/, "/");
                    return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                        var n, o = e.trim().replace(/^"(.*)"$/, function(t, e) {
                            return e
                        }).replace(/^'(.*)'$/, function(t, e) {
                            return e
                        });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? t : (n = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? i + o : s + o.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
                    })
                }
            }, function(t, e, i) {
                var s = i(11);
                "string" == typeof s && (s = [
                    [t.i, s, ""]
                ]), i(2)(s, {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                }), s.locals && (t.exports = s.locals)
            }, function(t, e, i) {
                (t.exports = i(1)(!1)).push([t.i, '.SearchCommon-SearchAssist{border-top:1px solid #fff}.SearchCommon-SearchAssist>ul{position:relative;overflow:hidden}.SearchCommon-SearchAssist .SearchAssist__listItem{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;min-height:44px;border-bottom:1px solid #eee;background-color:#fff;line-height:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-touch-callout:none}.SearchCommon-SearchAssist .SearchAssist__listItem:last-child{border-color:#ddd}.SearchCommon-SearchAssist .SearchAssist__listItem.SearchAssist__listItem--noMovingHighlight:before{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.1);content:"";pointer-events:none}.SearchCommon-SearchAssist .SearchAssist__button{display:block;-webkit-box-flex:1;-webkit-flex:1 1 0%;flex:1 1 0%}.SearchCommon-SearchAssist .SearchAssist__buttonDescription{margin:12px 12px 0;color:#777;text-align:left;font-size:12px}.SearchCommon-SearchAssist .SearchAssist__buttonInner{text-align:left}.SearchCommon-SearchAssist .SearchAssist__buttonInner,.SearchCommon-SearchAssist .SearchAssist__icon{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.SearchCommon-SearchAssist .SearchAssist__icon{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;min-height:44px;width:54px}.SearchCommon-SearchAssist .SearchAssist__icon i{display:block}.SearchCommon-SearchAssist .SearchAssist__icon i,.SearchCommon-SearchAssist .SearchAssist__icon svg{width:22px;height:22px}.SearchCommon-SearchAssist .SearchAssist__icon svg{fill:#ddd}.SearchCommon-SearchAssist .SearchAssist__icon--button i,.SearchCommon-SearchAssist .SearchAssist__icon--button svg{width:28px;height:28px}.SearchCommon-SearchAssist .SearchAssist__icon--button svg{fill:#d5d5d5}.SearchCommon-SearchAssist .SearchAssist__text{display:-webkit-box;-webkit-box-flex:1;-webkit-flex:1 1 0%;flex:1 1 0%;overflow:hidden;margin:11px 0 10px;min-width:0;color:#444;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-height:1.4}.SearchCommon-SearchAssist .SearchAssist__text .SearchAssist__subText{display:block;color:#777;font-size:10px;line-height:1}.SearchCommon-SearchAssist .SearchAssist__text--clamp1{-webkit-line-clamp:1;margin-right:12px}.SearchCommon-SearchAssist .SearchAssist__endButton{display:inline-block;padding:13px 0;width:100%;height:44px;background-color:#f7f7f7;color:#666;text-align:center;line-height:1}.SearchCommon-SearchAssist .SearchAssist__delete{position:absolute;right:-120%;display:-webkit-box;display:-webkit-flex;display:flex;min-height:44px;width:120%;height:100%;background-color:#fe3b30;color:#fff;text-align:center;font-weight:700;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.SearchCommon-SearchAssist .SearchAssist__delete .SearchAssist__deleteText{display:inline-block;width:72px}.SearchCommon-SearchAssist.SearchCommon-SearchAssist--tile>ul{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.SearchCommon-SearchAssist.SearchCommon-SearchAssist--tile>ul .SearchAssist__listItem{overflow:hidden;padding:0 20px;border:0;box-shadow:0 0 0 1px #eee;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.SearchCommon-SearchAssist.SearchCommon-SearchAssist--tile>ul .SearchAssist__button{overflow:hidden}.SearchCommon-SearchAssist.SearchCommon-SearchAssist--tile>ul .SearchAssist__text{display:inline;text-align:center;white-space:nowrap;text-overflow:ellipsis}.SearchCommon-SearchAssist.SearchCommon-SearchAssist--tile>ul .SearchAssist__icon{display:none}', ""])
            }, function(t, e, i) {
                "use strict";
                i.r(e);
                var s = i(0),
                    n = i.n(s);

                function o(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                var a = function t() {
                        if ("result" in t) return t.result;
                        var e = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                            i = document.getElementsByTagName("script")[0];
                        if (i) {
                            for (var s in i.style)
                                if (e.test(s)) return t.result = s.match(e)[0];
                            if ("WebkitOpacity" in i.style) return t.result = "Webkit";
                            if ("KhtmlOpacity" in i.style) return t.result = "Khtml"
                        }
                        return t.result = ""
                    }(),
                    r = "" === a ? "transform" : "".concat(a, "Transform"),
                    c = "" === a ? "transform" : "-".concat(a.toLowerCase(), "-transform"),
                    l = "" === a ? "transitionProperty" : "".concat(a, "TransitionProperty"),
                    h = "" === a ? "transitionDuration" : "".concat(a, "TransitionDuration"),
                    d = "" === a ? "transitionTimingFunction" : "".concat(a, "TransitionTimingFunction"),
                    u = !1;
                try {
                    var p = Object.defineProperty({}, "passive", {
                        get: function() {
                            u = !0
                        }
                    });
                    window.addEventListener("test", null, p)
                } catch (t) {}
                var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                        window.setTimeout(t, 1e3 / 60)
                    },
                    g = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || function(t) {
                        window.clearTimeout(t)
                    },
                    m = function() {
                        function t(e, i) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.el = {
                                deleteBtnTxt: e.querySelector(".js-SearchAssist__deleteText"),
                                deleteBtn: e.querySelector(".js-SearchAssist__delete"),
                                viewport: e
                            }, this.deleteBtnWidth = this.el.deleteBtnTxt.clientWidth, this.activeIndex = 0, this.viewOffsetX = [0, this.deleteBtnWidth], this.resizeTimer = !1, this.slideAnimation = null, this.cachedWidth = window.innerWidth, this.transitionSetting = {
                                duration: ".3s",
                                timingFn: "cubic-bezier(0.0, 0.0, 0.2, 1)"
                            }, this.state = {
                                dirDetected: !1,
                                isHorizontal: !1,
                                touched: !1,
                                touchmoved: !1,
                                isScrollDisabled: !1,
                                isDeleteVisible: !1,
                                isReleaseToDeletable: !1
                            }, this.pos = {
                                ox: null,
                                oy: null,
                                cx: null,
                                cy: null,
                                dx: null,
                                dy: null,
                                dir: null,
                                dist: null,
                                angle: null
                            }, this.callback = i, this.addEventListeners()
                        }
                        var e, i;
                        return e = t, (i = [{
                            key: "addEventListeners",
                            value: function() {
                                var t = this;
                                window.addEventListener("resize", function() {
                                    return t.resize()
                                }), window.addEventListener("touchmove", function(e) {
                                    t.state.isScrollDisabled && e.preventDefault()
                                }, !!u && {
                                    passive: !1
                                }), window.addEventListener("touchstart", function() {
                                    0 === t.activeIndex || t.state.touched || t.resetSliderPosition()
                                }), this.el.viewport.addEventListener("touchstart", function(e) {
                                    return t.touchstart(e)
                                }), this.el.viewport.addEventListener("touchmove", function(e) {
                                    return t.touchmove(e)
                                }, !!u && {
                                    passive: !0
                                }), this.el.viewport.addEventListener("touchend", function() {
                                    return t.touchend()
                                }), this.el.viewport.addEventListener("touchcancel", function() {
                                    t.resetSliderPosition(), t.el.viewport.classList.contains("SearchAssist__listItem--noMovingHighlight") && t.el.viewport.classList.remove("SearchAssist__listItem--noMovingHighlight")
                                }), this.el.deleteBtn.addEventListener("click", function() {
                                    return t.deleteSlider()
                                }), setTimeout(function() {
                                    t.el.viewport.style[l] = c, t.el.viewport.style[h] = t.transitionSetting.duration, t.el.viewport.style[d] = t.transitionSetting.timingFn, t.el.deleteBtnTxt.style[l] = c, t.el.deleteBtnTxt.style[h] = t.transitionSetting.duration, t.el.deleteBtnTxt.style[d] = t.transitionSetting.timingFn, t.el.deleteBtn.style[l] = c, t.el.deleteBtn.style[h] = t.transitionSetting.duration, t.el.deleteBtn.style[d] = t.transitionSetting.timingFn
                                }, 10), window.addEventListener("blur", function() {
                                    return t.resetSliderPosition()
                                })
                            }
                        }, {
                            key: "resize",
                            value: function() {
                                var t = this;
                                clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(function() {
                                    var e = window.innerWidth;
                                    t.cachedWidth !== e && (t.el.viewport.style[l] = "none", setTimeout(function() {
                                        t.el.viewport.style[l] = c, t.cachedWidth = e
                                    }, 300))
                                }, 300)
                            }
                        }, {
                            key: "touchstart",
                            value: function(t) {
                                t.touches.length > 1 || (0 !== this.activeIndex || this.el.viewport.classList.contains("SearchAssist__listItem--noMovingHighlight") || this.el.viewport.classList.add("SearchAssist__listItem--noMovingHighlight"), this.state.touched = !0, this.state.dirDetected = !1, this.pos.ox = t.touches[0].pageX, this.pos.oy = t.touches[0].pageY, "none" !== this.el.viewport.style[l] && (this.el.viewport.style[l] = "none"))
                            }
                        }, {
                            key: "touchmove",
                            value: function(t) {
                                if (!(this.pos.ox < 40)) {
                                    if (this.state.touchmoved = !0, this.pos.cx = t.touches[0].pageX, this.pos.cy = t.touches[0].pageY, this.pos.dx = this.pos.cx - this.pos.ox, this.pos.dy = this.pos.cy - this.pos.oy, 1 === this.activeIndex ? this.pos.dir = Math.floor((this.pos.dx - this.deleteBtnWidth) / this.cachedWidth * 100) : this.pos.dir = Math.floor(this.pos.dx / this.cachedWidth * 100), this.pos.angle = this.pos.dy / this.pos.dx, !this.state.dirDetected) {
                                        if (!(Math.abs(this.pos.angle) < .5)) return this.state.dirDetected = !0, this.state.touched = !1, this.state.touchmoved = !1, this.state.isHorizontal = !1, void(this.el.viewport.style[l] = c);
                                        this.state.dirDetected = !0, this.state.isHorizontal = !0, this.state.isScrollDisabled = !0
                                    }
                                    this.pos.dir >= 1 ? this.pos.dist = this.viewOffsetX[0] : this.pos.dist = this.pos.dx - this.viewOffsetX[this.activeIndex], this.slideAnimation = f(function() {
                                        this.moveSlider()
                                    }.bind(this))
                                }
                            }
                        }, {
                            key: "moveSlider",
                            value: function() {
                                var t = this;
                                this.state.dirDetected && this.state.isHorizontal && (this.el.viewport.classList.contains("SearchAssist__listItem--noMovingHighlight") && this.el.viewport.classList.remove("SearchAssist__listItem--noMovingHighlight"), this.pos.dist <= 3 * -this.cachedWidth / 5 ? (this.el.deleteBtnTxt.style[l] = c, this.el.deleteBtnTxt.style[r] = "", this.isReleaseToDeletable = !0) : this.pos.dist <= -this.viewOffsetX[1] && (this.isReleaseToDeletable ? (this.el.deleteBtnTxt.style[l] = c, setTimeout(function() {
                                    t.isReleaseToDeletable = !1
                                }, 100)) : this.el.deleteBtnTxt.style[l] = "none", this.el.deleteBtnTxt.style[r] = "translate3d(".concat(Math.abs(this.pos.dist) - this.viewOffsetX[1], "px, 0, 0)")), this.el.viewport.style[r] = "translate3d(".concat(this.pos.dist, "px, 0, 0)"), this.touched && this.touchmoved && (this.slideAnimation = f(function() {
                                    this.moveSlider()
                                }.bind(this))))
                            }
                        }, {
                            key: "touchend",
                            value: function() {
                                g(this.slideAnimation), this.el.viewport.classList.contains("SearchAssist__listItem--noMovingHighlight") && this.el.viewport.classList.remove("SearchAssist__listItem--noMovingHighlight"), this.state.dirDetected && this.state.isHorizontal ? (this.el.viewport.style[l] = c, this.el.deleteBtnTxt.style[l] = c, this.el.deleteBtnTxt.style[r] = "", this.pos.dist <= 3 * -this.cachedWidth / 5 ? this.deleteSlider() : this.isDeleteVisible && this.pos.dist < -this.viewOffsetX[1] / 2 && this.pos.dist <= 0 || !this.isDeleteVisible && this.pos.dist > -this.viewOffsetX[1] / 2 && this.pos.dist > 3 * -this.cachedWidth / 5 ? this.el.viewport.style[r] = "translate3d(-".concat(this.viewOffsetX[this.activeIndex], "px, 0, 0)") : this.activeHandler(this.activeIndex + (this.isDeleteVisible ? -1 : 1)), this.resetFlags()) : this.resetFlags()
                            }
                        }, {
                            key: "activeHandler",
                            value: function(t) {
                                this.activeIndex = t, this.el.viewport.style[r] = "translate3d(-".concat(this.viewOffsetX[t], "px, 0, 0)"), this.isDeleteVisible = t >= 1
                            }
                        }, {
                            key: "deleteSlider",
                            value: function() {
                                var t = this;
                                this.el.viewport.style[l] = "".concat(c, ", min-height, height"), this.el.deleteBtn.style[l] = "min-height, height", this.el.viewport.style[r] = "translate3d(-120%, -1px, 0)", setTimeout(function() {
                                    t.el.viewport.style.minHeight = "0", t.el.viewport.style.height = "0", t.el.deleteBtn.style.minHeight = "0", t.el.deleteBtn.style.height = "0", setTimeout(function() {
                                        t.el.viewport.style.display = "none", t.callback(t.el.viewport)
                                    }, 300)
                                }, 150)
                            }
                        }, {
                            key: "resetSliderPosition",
                            value: function() {
                                this.activeHandler(0), this.pos.dist = 0, this.resetFlags()
                            }
                        }, {
                            key: "resetFlags",
                            value: function() {
                                this.state.touched = !1, this.state.touchmoved = !1, this.state.dirDetected = !1, this.state.isHorizontal = !1, this.isReleaseToDeletable = !1, this.state.isScrollDisabled = !1
                            }
                        }]) && o(e.prototype, i), t
                    }();

                function v(t) {
                    return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function y() {
                    return (y = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = arguments[e];
                            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                        }
                        return t
                    }).apply(this, arguments)
                }

                function b(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                var S = i(3),
                    _ = i(4),
                    k = i(5),
                    w = i(6),
                    A = function() {
                        function t() {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.SASlider = [], this.opened_time = 0, this.config = {
                                setting: {
                                    suggest: !0,
                                    history: !0
                                },
                                log: {
                                    spaceid: 777
                                }
                            }, this.settings = ["suggest", "history", "clipboard"], this.settingsToRapid = {
                                suggest: "svis",
                                history: "hvis"
                            }, this.ins = null, this.rapidConfig = {}, this.sec = "assist", this.rmOneSlk = "removeOne", this.history = [], this.clipboard = "", this.dispClipboardCount = 0, this.cache = {}, this.sessionId = "", this.ai = "", this.currentCallbackName = "", this.oq = null, this.force = !1, this.didRemove = !1, this.dispHistoryNum = 20, this.dispHistory = [], this.dispHistoryCount = 0, this.dispSuggestNum = 10, this.dom = "", this.suggestConfig = {
                                api_host: "assist-search.yahooapis.jp",
                                api_path: "/SuggestSearchService/V5/webassistSearch"
                            }, this.assistSelectors = ".SearchCommon-SearchAssist", this.enable_clipboard = !1, this.enable_tile = !1, this.output_tile = !1
                        }
                        var e, i, s;
                        return e = t, s = [{
                            key: "looseCharCodeEqual",
                            value: function(t, e) {
                                return t === e || (t > 64 && t < 91 ? t + 32 === e : e > 64 && e < 91 ? t === e + 32 : t >= 12353 && t <= 12438 ? t + 96 === e : e >= 12353 && e <= 12438 && t === e + 96)
                            }
                        }, {
                            key: "matchLength",
                            value: function(e, i) {
                                var s;
                                if (i.length > e.length) return 0;
                                for (s = 0; s < i.length; s++) {
                                    var n = e.charCodeAt(s),
                                        o = i.charCodeAt(s);
                                    if (!t.looseCharCodeEqual(n, o)) break
                                }
                                return s
                            }
                        }], (i = [{
                            key: "createSuggestView",
                            value: function(t, e, i) {
                                var s = i + this.dispHistoryCount + this.dispClipboardCount,
                                    n = y({
                                        c_sec: this.sec,
                                        c_slk: "suggest",
                                        c_disp: t,
                                        c_pos: s
                                    }, this.getCommonYlk()),
                                    o = {};
                                return "ytop" === this.config.page ? (n = y({
                                    rsec: "search",
                                    slk: "web",
                                    pos: s
                                }, n), (o = y({}, n)).slk = "add", o.c_slk += "_plus") : ((o = y({}, n)).c_slk += "_plus", o.slk = o.c_slk, n.slk = n.c_slk), '\n<li class="SearchAssist__listItem" data-searchassist-type="suggest">\n<button class="SearchAssist__button js-SearchAssist__button" aria-label="'.concat(t, '" type="button" data-ylk="').concat(this.makeYlk(n), '">\n<span class="SearchAssist__buttonInner">\n<div class="SearchAssist__icon"><i aria-hidden="true">').concat(S, '</i></div>\n<span class="SearchAssist__text">').concat(e, "</span></span></button>\n").concat(!this.enable_tile || this.enable_tile && !this.output_tile ? '\n<button class="js-SearchAssist__addButton" aria-label="'.concat(t, '\u3092\u691c\u7d22\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u8ffd\u52a0\u3059\u308b" type="button" data-ylk="').concat(this.makeYlk(o), '">\n<div class="SearchAssist__icon SearchAssist__icon--button"><i aria-hidden="true">').concat(_, "</i></div>\n</div></button>\n") : "", "\n</li>\n")
                            }
                        }, {
                            key: "createHistoryView",
                            value: function(t, e, i) {
                                var s = i + this.dispClipboardCount,
                                    n = y({
                                        c_sec: this.sec,
                                        c_slk: t !== e ? "incremental_history" : "history",
                                        c_disp: t,
                                        c_pos: s
                                    }, this.getCommonYlk()),
                                    o = {},
                                    a = {};
                                return "ytop" === this.config.page ? (n = y({
                                    rsec: "search",
                                    slk: "web",
                                    npos: s
                                }, n), (o = y({}, n)).slk = "add", o.c_slk += "_plus", (a = y({}, n)).c_slk = this.rmOneSlk, a.slk = a.c_slk) : ((o = y({}, n)).c_slk += "_plus", o.slk = o.c_slk, (a = y({}, n)).c_slk = this.rmOneSlk, a.slk = a.c_slk, n.slk = n.c_slk), '\n<li class="SearchAssist__listItem" data-searchassist-type="history">\n<button class="SearchAssist__button js-SearchAssist__button" aria-label="'.concat(t, '" type="button" data-ylk="').concat(this.makeYlk(n), '">\n<span class="SearchAssist__buttonInner">\n<div class="SearchAssist__icon"><i aria-hidden="true">').concat(k, '</i></div>\n<span class="SearchAssist__text">').concat(e, "</span></span></button>\n").concat(!this.enable_tile || this.enable_tile && !this.output_tile ? '\n<button class="js-SearchAssist__addButton" aria-label="'.concat(t, '\u3092\u691c\u7d22\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u8ffd\u52a0\u3059\u308b" type="button" data-ylk="').concat(this.makeYlk(o), '">\n<div class="SearchAssist__icon SearchAssist__icon--button"><i aria-hidden="true">').concat(_, '</i></div>\n</div></button>\n<span class="SearchAssist__delete js-SearchAssist__delete" ><span class="SearchAssist__deleteText js-SearchAssist__deleteText">\n\u524a\u9664<a href="javascrpit:void();" data-ylk="').concat(this.makeYlk(a), '"></a></span></span>\n') : "", "\n</li>\n")
                            }
                        }, {
                            key: "createClipboardView",
                            value: function() {
                                var t = this.esc(this.clipboard),
                                    e = y({
                                        c_sec: this.sec,
                                        c_slk: "clipboard",
                                        c_pos: 1
                                    }, this.getCommonYlk()),
                                    i = /^https?:\/\/.+/.test(t);
                                return e.slk = e.c_slk, '\n<li class="SearchAssist__listItem" data-searchassist-type="clipboard">\n<button class="SearchAssist__button js-SearchAssist__button" aria-label="'.concat(t, '" type="button" data-ylk="').concat(this.makeYlk(e), '">\n<div class="SearchAssist__buttonDescription">\u30b3\u30d4\u30fc\u3057\u3066\u3044\u308b').concat(i ? "URL" : "\u30c6\u30ad\u30b9\u30c8", '</div>\n<span class="SearchAssist__buttonInner">\n<div class="SearchAssist__icon"><i aria-hidden="true">').concat(i ? w : S, '</i></div>\n<span class="SearchAssist__text SearchAssist__text--clamp1">').concat(t, "</span></span></button>\n</li>\n")
                            }
                        }, {
                            key: "createHistoryDeleteView",
                            value: function() {
                                var t = y({
                                    c_sec: this.sec,
                                    c_slk: "delete"
                                }, this.getCommonYlk());
                                return "ytop" === this.config.page ? t = y({
                                    rsec: "search",
                                    slk: "histdel",
                                    pos: 0
                                }, t) : t.slk = t.c_slk, '\n<li class="SearchAssist__listItem" data-searchassist-type="history">\n<button class="SearchAssist__endButton" type="button" data-ylk="'.concat(this.makeYlk(t), '">\n<span>\u691c\u7d22\u5c65\u6b74\u3092\u6d88\u53bb</span>\n</button></li>\n')
                            }
                        }, {
                            key: "getCommonYlk",
                            value: function() {
                                return {
                                    c_ki: this.sessionId,
                                    c_oq: this.esc(this.oq),
                                    c_svis: Number(this.config.setting.suggest),
                                    c_hvis: Number(this.config.setting.history),
                                    c_page: this.config.page || "",
                                    c_tile: Number(this.output_tile)
                                }
                            }
                        }, {
                            key: "makeYlk",
                            value: function(t) {
                                var e = [];
                                return Object.keys(t).forEach(function(i) {
                                    e.push("".concat(i, ":").concat(t[i]))
                                }), e.join(";")
                            }
                        }, {
                            key: "init",
                            value: function(t) {
                                var e = this;
                                if ("object" === v(t)) {
                                    if (t.setting && this.settings.forEach(function(i) {
                                            e.checkSetting(i, e.toBoolean(t.setting[i]))
                                        }), this.config = t, this.config.setting = this.config.setting || {}, void 0 === this.config.setting.suggest && (this.config.setting.suggest = !0), void 0 === this.config.setting.history && (this.config.setting.history = !0), void 0 === this.config.setting.clipboard && (this.config.setting.clipboard = !0), this.settings.forEach(function(i) {
                                            e.config.setting[i] = e.toBoolean(t.setting[i])
                                        }), this.config.log = this.config.log || {}, void 0 === this.config.log.spaceid && (this.config.log.spaceid = 333), n.a) {
                                        var i = !1,
                                            s = [];
                                        if ("web_search" === this.config.page && this.config.log.mtestid) {
                                            var o = this.config.log.mtestid.split("&");
                                            Object.keys(o).forEach(function(t) {
                                                var e = o[t].split("=");
                                                s.push(e[1])
                                            })
                                        } else "ytop" !== this.config.page && "android" !== this.config.page || !this.config.log.vtestid || ("string" == typeof this.config.log.vtestid ? s.push(this.config.log.vtestid) : "[object Array]" === Object.prototype.toString.call(this.config.log.vtestid) && (s = this.config.log.vtestid));
                                        s !== [] && (i = this.getTestSettings(this.config.page, s)) && (void 0 !== i.api_opts && (this.config.options = y(this.config.options, i.api_opts)), void 0 !== i.api_host && (this.suggestConfig.api_host = i.api_host), void 0 !== i.enable_clipboard && (this.enable_clipboard = i.enable_clipboard), void 0 !== i.enable_tile && (this.enable_tile = i.enable_tile), void 0 !== i.dispSuggestNum && (this.dispSuggestNum = i.dispSuggestNum))
                                    }
                                    void 0 !== this.config.api_host && (this.suggestConfig.api_host = this.config.api_host), this.setHistory(this.config.history), this.enable_clipboard && void 0 !== this.config.clipboard && this.config.clipboard.value && (this.clipboard = this.config.clipboard.value), this.setRapidConfig()
                                }
                            }
                        }, {
                            key: "getTestSettings",
                            value: function(t, e) {
                                var i = !1;
                                return Object.keys(n.a).forEach(function(s) {
                                    return Object.keys(n.a[s]).forEach(function(o) {
                                        "object" === v(n.a[s][o].pages) && null !== n.a[s][o].pages && t in n.a[s][o].pages && "[object Array]" === Object.prototype.toString.call(e) && -1 !== e.indexOf(n.a[s][o].pages[t]) && (i = n.a[s][o].configs)
                                    })
                                }), i
                            }
                        }, {
                            key: "setHistory",
                            value: function(t) {
                                t instanceof Array && t.toString() !== this.history.toString() && (this.history = t, this.oq = null)
                            }
                        }, {
                            key: "setRapidConfig",
                            value: function() {
                                this.rapidConfig.tracked_mods = [this.sec], this.rapidConfig.spaceid = this.config.log.spaceid, this.rapidConfig.keys = this.rapidConfig.keys || {}, this.rapidConfig.keys.service = "search_suggest", this.rapidConfig.keys.pagetype = "assist", this.rapidConfig.keys.opttype = "smartphone", this.rapidConfig.keys.apptype = "web", this.rapidConfig.keys.vtgrpid = this.config.log.vtgrpid || "stable", this.rapidConfig.keys.vtestid = this.config.log.vtestid || "", this.rapidConfig.keys.v_pkjp = this.config.log.v_pkjp || "", this.rapidConfig.keys.mtestid = this.config.log.mtestid || "", this.rapidConfig.keys.ki = this.sessionId, this.rapidConfig.keys.oq = this.oq, this.rapidConfig.keys.svis = Number(this.config.setting.suggest), this.rapidConfig.keys.hvis = Number(this.config.setting.history), this.rapidConfig.keys.page = this.config.page || "", this.rapidConfig.keys.tile = Number(this.output_tile), this.rapidConfig.keys.ts = Date.now()
                            }
                        }, {
                            key: "toBoolean",
                            value: function(t) {
                                var e = t;
                                return "string" == typeof t && (e = Number(t)), Boolean(e)
                            }
                        }, {
                            key: "setting",
                            value: function(t, e) {
                                "suggest" !== t && "history" !== t || (this.checkSetting(t, this.toBoolean(e)), this.config.setting[t] = this.toBoolean(e), this.rapidConfig.keys[this.settingsToRapid[t]] = Number(e))
                            }
                        }, {
                            key: "checkSetting",
                            value: function(t, e) {
                                void 0 !== this.config.setting && void 0 !== this.config.setting[t] && !0 !== this.config.setting[t] || !1 !== e || (this.removeElements(t), this.ins && (this.ins.removeModule(this.sec), this.ins.setRapidAttribute(this.rapidConfig), this.ins.addModules(this.sec))), !1 === this.config.setting[t] && !0 === e && (this.oq = null)
                            }
                        }, {
                            key: "setQuery",
                            value: function(t, e, i) {
                                if (this.opened_time || (this.opened_time = Date.now()), null != e)
                                    if ("string" == typeof e) {
                                        var s = JSON.parse(e);
                                        this.init(s)
                                    } else this.init(e);
                                (i || this.force || null === this.oq || this.oq !== t) && (this.force = !1, this.oq = t, this.getAssist(t))
                            }
                        }, {
                            key: "setQueryForce",
                            value: function(t) {
                                this.setQuery(t, null, !0)
                            }
                        }, {
                            key: "hide",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                t && (this.oq = null), this.emptyDom(document.querySelector(this.assistSelectors))
                            }
                        }, {
                            key: "display",
                            value: function() {
                                var t = this;
                                if (this.SASlider && (this.SASlider = []), this.ins && this.ins.removeModule(this.sec), this.dom) {
                                    var e = this.oq;
                                    window.MutationObserver && new MutationObserver(function(i, s) {
                                        e === t.oq && (t.addEvent(), s.disconnect())
                                    }).observe(document.querySelector(this.assistSelectors), {
                                        childList: !0
                                    }), this.render(), window.MutationObserver || setTimeout(function() {
                                        e === t.oq && t.addEvent()
                                    }, 100)
                                } else this.hide(!1);
                                this.didRemove && (this.didRemove = !1)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = "";
                                "ytop" !== this.config.page && (t = ' id="'.concat(this.sec, '"')), document.querySelector(this.assistSelectors).innerHTML = "<ul".concat(t, ">").concat(this.dom, "</ul>")
                            }
                        }, {
                            key: "removeElements",
                            value: function(t) {
                                var e = '[data-searchassist-type="'.concat(t, '"]'),
                                    i = document.querySelector(this.assistSelectors);
                                if (i) {
                                    var s, n, o = i.querySelectorAll(e);
                                    for (s = 0, n = o.length; s < n; s++) o[s].remove()
                                }
                            }
                        }, {
                            key: "getAssist",
                            value: function(t) {
                                this.dom = "", this.dispClipboardCount = 0, this.config.setting.clipboard && "" !== this.clipboard && this.config.clipboard.count < 2 && "" === t && (this.dom += this.createClipboardView(), this.dispClipboardCount = 1), this.output_tile = !(t.match(/[A-Za-z0-9]/) || "" === t), "" === t ? (this.getHistory(), this.dom && this.display()) : this.getSuggest(t), this.enable_tile && this.reloadStyle()
                            }
                        }, {
                            key: "getHistory",
                            value: function() {
                                var t = this,
                                    e = this.history;
                                this.currentCallbackName = "", this.hide(!1), !1 !== Boolean(this.config.setting.history) && (e && e.length > 0 && e.slice(0, this.dispHistoryNum).forEach(function(e, i) {
                                    t.createHistory(e, i)
                                }), this.dom && (this.dom += this.createHistoryDeleteView()))
                            }
                        }, {
                            key: "createHistory",
                            value: function(t, e, i) {
                                var s, n = this.esc(t);
                                n && (n !== (s = i || n) && (s = this.hl(t, i)), this.dom += this.createHistoryView(n, s, e + 1))
                            }
                        }, {
                            key: "getSuggest",
                            value: function(t) {
                                var e = this,
                                    i = {},
                                    s = "jsonp_".concat(this.randomStr()),
                                    n = "https://".concat(this.suggestConfig.api_host).concat(this.suggestConfig.api_path);
                                "stg-api1001.tabloid.ssk.yahoo.co.jp" === this.suggestConfig.api_host && (n = "http://".concat(this.suggestConfig.api_host).concat(this.suggestConfig.api_path));
                                var o, a, r = [];
                                if (this.searchHistory(t), !1 !== Boolean(this.config.setting.suggest) && t) {
                                    if (null !== document.getElementById("tabloid") && document.body.removeChild(document.getElementById("tabloid")), this.cache[t]) return this.setAi(this.cache[t]["@id"]), void this.createSuggest(this.cache[t]);
                                    var c = setTimeout(function() {
                                        delete window[s], e.display()
                                    }, 3e3);
                                    i.callback = s, i.query = t, this.config.options && Object.keys(this.config.options).forEach(function(t) {
                                        "" !== e.config.options[t] && (i[t] = e.config.options[t])
                                    }), this.sessionId && (i.ki = this.sessionId), Object.keys(i).forEach(function(t) {
                                        r = r.concat(e.formatParams(t, i[t]))
                                    }), o = r.join("&"), (a = document.createElement("script")).charset = "utf-8", a.src = "".concat(n, "?").concat(o), a.id = "tabloid", window[s] = function(t) {
                                        clearTimeout(c), e.sessionId || (e.sessionId = t["@id"]), e.setAi(t["@id"]), e.cache[t["@query"]] = t, e.currentCallbackName === s && e.createSuggest(t), delete window[s]
                                    }, this.currentCallbackName = s, document.body.appendChild(a)
                                } else this.display()
                            }
                        }, {
                            key: "searchHistory",
                            value: function(e) {
                                var i, s, n, o = this.history,
                                    a = o.length;
                                if (this.dispHistory = [], this.dispHistoryCount = 0, !1 !== Boolean(this.config.setting.history)) {
                                    for (i = 0, s = 0; i < a && (e === (n = o[i]) || t.matchLength(n, e) !== e.length || (this.createHistory(n, s, e), this.dispHistory.push(n), 3 !== ++s)); i++);
                                    this.dispHistoryCount = s
                                }
                            }
                        }, {
                            key: "createSuggest",
                            value: function(t) {
                                var e, i, s = 0;
                                for (e = 0, i = t.Result.length; e < i; e++)
                                    if (-1 === this.dispHistory.indexOf(t.Result[e].Suggest)) {
                                        var n = this.esc(t.Result[e].Suggest),
                                            o = this.hl(t.Result[e].Suggest, t["@query"]);
                                        if (s + this.dispHistoryCount >= this.dispSuggestNum) break;
                                        this.dom += this.createSuggestView(n, o, s + 1), s++
                                    }
                                this.dispHistoryCount && (!this.enable_tile || this.enable_tile && !this.output_tile) && (this.dom += this.createHistoryDeleteView()), this.display()
                            }
                        }, {
                            key: "setAi",
                            value: function(t) {
                                if (this.ai = t, "app" === this.config.from || "ios" === this.config.page || "android" === this.config.page) {
                                    var e = "yjtopapp://search/suggest/info?ai=".concat(t),
                                        i = document.createElement("iframe");
                                    i.id = "search_suggest_info_scheme", i.style.display = "none", i.src = e, document.body.appendChild(i)
                                }
                                void 0 !== this.config.callback && void 0 !== this.config.callback.ai && this.config.callback.ai(t)
                            }
                        }, {
                            key: "addEvent",
                            value: function() {
                                var t, e, i, s = this,
                                    n = document.querySelector(this.assistSelectors).querySelectorAll("li");
                                if ("undefined" != typeof YAHOO && void 0 !== YAHOO.i13n && void 0 !== YAHOO.i13n.JP && "function" == typeof YAHOO.i13n.JP.simpleRapid && "ytop" !== this.config.page) {
                                    var o = YAHOO.i13n.A_sid;
                                    YAHOO.i13n.JP.reSession(), this.setRapidConfig(), this.ins = YAHOO.i13n.JP.simpleRapid(this.rapidConfig).initRapid(), YAHOO.i13n.A_sid = o
                                }
                                for (t = 0, e = n.length - 1; t <= e; t++) {
                                    if (t === e && n[t].getElementsByClassName("SearchAssist__endButton").length) {
                                        (i = n[t].getElementsByClassName("SearchAssist__endButton")[0]).addEventListener("click", function() {
                                            "ios" === s.config.page || "android" === s.config.page ? window.location.href = "yjtopapp://search/history/clear" : s.config.callback.delete()
                                        });
                                        break
                                    }
                                    "ios" !== this.config.page && "android" !== this.config.page && void 0 === this.config.callback.removeHistory || !n[t].getElementsByClassName("js-SearchAssist__delete").length || this.enable_tile && (!this.enable_tile || this.output_tile) || this.SASlider.push(new m(n[t], this.removeHistory.bind(this))), (i = n[t].getElementsByClassName("js-SearchAssist__button")[0]).self = n[t], i.pos = t, i.addEventListener("click", function(t) {
                                        var e = {},
                                            i = t.currentTarget.self.getElementsByClassName("SearchAssist__text")[0].innerText.trim();
                                        e.aq = t.currentTarget.pos, e.oq = s.oq, e.ts = Date.now() - s.opened_time, e.at = "s", e.tile = s.output_tile ? "1" : void 0, "history" === t.currentTarget.self.getAttribute("data-searchassist-type") && (e.at = "h"), e.iau = 1, s.oq = i, "ios" === s.config.page || "android" === s.config.page ? window.location.href = "yjtopapp://common/searchWord/search?query=".concat(encodeURIComponent(i), "&ai=").concat(s.ai, "&aq=").concat(e.aq) : s.config.callback.href(i, e)
                                    }), n[t].getElementsByClassName("js-SearchAssist__addButton").length && ((i = n[t].getElementsByClassName("js-SearchAssist__addButton")[0]).self = n[t], i.pos = t, i.addEventListener("click", function(t) {
                                        var e = t.currentTarget.self.getElementsByClassName("js-SearchAssist__button")[0].innerText.trim(),
                                            i = {};
                                        i.aq = t.currentTarget.pos, i.oq = s.oq, i.aa = 1, i.at = "s", "history" === t.currentTarget.self.getAttribute("data-searchassist-type") && (i.at = "h"), e += " ", "ios" === s.config.page || "android" === s.config.page ? window.location.href = "yjtopapp://common/searchWord/set?query=".concat(encodeURIComponent(e)) : s.config.callback.plus(e, i)
                                    }))
                                }
                            }
                        }, {
                            key: "removeHistory",
                            value: function(t) {
                                if (!this.didRemove) {
                                    var e = {},
                                        i = t.querySelector(".js-SearchAssist__delete a").getAttribute("data-ylk").split(";");
                                    Object.keys(i).forEach(function(t) {
                                        var s = i[t].split(":");
                                        e[s[0]] = s[1]
                                    });
                                    var s = t.getElementsByClassName("js-SearchAssist__button")[0].innerText.trim(),
                                        n = this.history.indexOf(s);
                                    s && n >= 0 && (this.force = !0, this.didRemove = !0, "ios" === this.config.page || "android" === this.config.page ? window.location.href = "yjtopapp://search/history/delete?index=".concat(n, "&query=").concat(encodeURIComponent(s)) : "web_search" === this.config.page ? this.config.callback.removeHistory(n, s) : this.config.callback.removeHistory(n, s, {
                                        srcElement: t.querySelector(".js-SearchAssist__delete a"),
                                        data: e
                                    })), "ytop" !== this.config.page && this.ins.beaconClick(this.sec, this.rmOneSlk, t.querySelector(".js-SearchAssist__delete a").getAttribute("data-rapid_p"), e)
                                }
                            }
                        }, {
                            key: "randomStr",
                            value: function() {
                                return (Math.floor(1e5 * Math.random()) * Date.now()).toString(16)
                            }
                        }, {
                            key: "formatParams",
                            value: function(t, e) {
                                var i = [];
                                return i.push("".concat(t, "=").concat(encodeURIComponent(e))), i
                            }
                        }, {
                            key: "esc",
                            value: function(t) {
                                if ("string" != typeof t) return t;
                                var e = {
                                        "&": "&amp;",
                                        "'": "&#x27;",
                                        "`": "&#x60;",
                                        '"': "&quot;",
                                        "<": "&lt;",
                                        ">": "&gt;"
                                    },
                                    i = Object.keys(e).join("|");
                                return t.replace(new RegExp(i, "g"), function(t) {
                                    return e[t]
                                })
                            }
                        }, {
                            key: "hl",
                            value: function(e, i) {
                                var s = this.esc(e),
                                    n = this.esc(i),
                                    o = t.matchLength(s, n);
                                return o === s.length ? s : 0 !== o ? s.slice(0, o) + "<strong>" + s.slice(o) + "</strong>" : "<strong>" + s + "</strong>"
                            }
                        }, {
                            key: "emptyDom",
                            value: function(t) {
                                for (this.SASlider && (this.SASlider = []), this.ins && this.ins.removeModule(this.sec); t.lastChild;) t.removeChild(t.lastChild)
                            }
                        }, {
                            key: "reloadStyle",
                            value: function() {
                                var t = document.querySelector(this.assistSelectors),
                                    e = "SearchCommon-SearchAssist--tile";
                                null !== t && (!this.output_tile && t.classList.contains(e) && t.classList.remove(e), this.output_tile && !t.classList.contains(e) && t.classList.add(e))
                            }
                        }]) && b(e.prototype, i), s && b(e, s), t
                    }();
                i(7), i(10), e.default = A
            }])
        }
    }
]);
//# sourceMappingURL=24.chunk.js.map