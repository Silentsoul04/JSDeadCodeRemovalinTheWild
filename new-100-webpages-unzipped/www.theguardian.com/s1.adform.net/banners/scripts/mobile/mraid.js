"use strict";
! function(e, t, n, i) {
    var r = n.utils = n.utils || {};
    r.clone = function(e) {
        return e ? JSON.parse(JSON.stringify(e)) : e
    }, r.has = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.extend = function(e, t) {
        if (!e) return e;
        for (var n in t) r.has(t, n) && (e[n] = t[n])
    }, r.extendDesired = function(e, t, n) {
        var i = r.clone(t);
        for (var o in i) - 1 === n.indexOf(o) && delete i[o];
        r.extend(e, i)
    }, r.containsValue = function(e, t) {
        for (var n in e)
            if (r.has(e, n) && e[n] === t) return !0;
        return !1
    }, r.now = Date.now || function() {
        return (new Date).getTime()
    }
}(window, document, window.Adform = window.Adform || {}),
function(e, t, n, i) {
    var o = n.utils = n.utils || {};
    if (!o.DOM) {
        var r = {
            hasClass: function(e, t) {
                return "object" == typeof e && "string" == typeof t && (e.classList ? e.classList.contains(t) : -1 !== (" " + e.className + " ").indexOf(" " + t + " "))
            },
            addClass: function(e, t) {
                return "object" == typeof e && "string" == typeof t && (e.classList ? e.classList.add(t) : r.hasClass(e, t) || (e.className = e.className || "", e.className += (e.className ? " " : "") + t), !0)
            },
            removeClass: function(e, t) {
                return "object" == typeof e && "string" == typeof t && (e.classList ? e.classList.remove(t) : r.hasClass(e, t) && (e.className = (" " + e.className + " ").replace(" " + t + " ", " ").slice(1, -1)), !0)
            }
        };
        o.DOM = r
    }
}(window, document, window.Adform = window.Adform || {}),
function(b, w, e, R) {
    var l = e.utils,
        C = l.is;
    if (C.frame) {
        var x = b.parent;
        if (x.Adform && !b.mraid) {
            var a = x.Adform.adData;
            if (a) {
                for (var s = x.Adform.mraidBridge, t = !e.isReload && s, n = 0; n < a.length; n++) {
                    var i = a[n].frame;
                    if (!i || s && s.frame === i && !i.ownerDocument.body.contains(i)) {
                        t = !1;
                        break
                    }
                }
                if (!t) {
                    var O, A = l.DOM,
                        N = {
                            INLINE: "inline",
                            INTERSTITIAL: "interstitial"
                        },
                        P = {
                            LOADING: "loading",
                            DEFAULT: "default",
                            EXPANDED: "expanded",
                            RESIZED: "resized",
                            HIDDEN: "hidden"
                        },
                        d = {
                            TOP_LEFT: "top-left",
                            TOP_CENTER: "top-center",
                            TOP_RIGHT: "top-right",
                            CENTER: "center",
                            BOTTOM_LEFT: "bottom-left",
                            BOTTOM_CENTER: "bottom-center",
                            BOTTOM_RIGHT: "bottom-right"
                        },
                        f = d.TOP_RIGHT,
                        c = {
                            NONE: "none",
                            PORTRAIT: "portrait",
                            LANDSCAPE: "landscape"
                        },
                        u = "adfm-close",
                        T = "adfm-placeholder",
                        D = "adfm-fullscreen",
                        L = "adfm-fullscreen-touch",
                        z = "adfm-fullscreen-mouse",
                        I = "adfm-zindex-auto",
                        k = "adfm-position-reset",
                        m = "adfm-close",
                        p = "adfm-close-custom",
                        S = "adfm-expanding",
                        v = "adfm-resizing",
                        h = {
                            state: P.LOADING,
                            useCustomClose: !1,
                            customClosePosition: f,
                            allowOffscreen: !0,
                            expandWidth: null,
                            expandHeight: null,
                            offsetX: 0,
                            offsetY: 0,
                            resizeWidth: null,
                            resizeHeight: null,
                            hasOrientationProperties: !1,
                            allowOrientationChange: !0,
                            forceOrientation: c.NONE
                        },
                        M = [],
                        H = null,
                        B = null,
                        W = 2147e6,
                        j = null,
                        U = ["touch-action", "-ms-touch-action"],
                        G = e.safeFrame;
                    G && (O = G.geom());
                    var g, y, E = function() {
                            var t = screen.orientation || screen.mozOrientation;
                            return (E = t ? function() {
                                var e;
                                return e = "object" == typeof(t = screen.orientation || screen.mozOrientation) ? t.type : t, 0 === String(e).indexOf("landscape") ? c.LANDSCAPE : c.PORTRAIT
                            } : b.matchMedia ? function() {
                                return x.matchMedia("(orientation: landscape)").matches ? c.LANDSCAPE : c.PORTRAIT
                            } : function() {
                                return x.innerHeight >= x.innerWidth ? c.PORTRAIT : c.LANDSCAPE
                            })()
                        },
                        o = E(),
                        r = x.innerWidth;
                    x.onorientationchange ? x.addEventListener("orientationchange", te, !1) : C.AndroidBrowser ? ne() : C.SamsungBrowser ? setInterval(te, 1e3) : x.matchMedia ? (x.matchMedia("(orientation: portrait)").addListener(te), x.matchMedia("(orientation: landscape)").addListener(te)) : ne(), x.addEventListener("scroll", function() {
                        a.forEach(function(e) {
                            e.frame && !A.hasClass(e.frame.ownerDocument.documentElement, D) && (_(e), $(e))
                        })
                    }, !0), x.addEventListener("resize", function() {
                        a.forEach(function(e) {
                            e.frame && !A.hasClass(e.container, S) && (ee(e), se(e), H !== e && (e.width <= 1 || e.height <= 1) && (_(e), $(e)))
                        })
                    }, !0);
                    var X, V, Z, Y = {
                        init: function(t) {
                            A.addClass(t.container, "adfm-" + t.type);
                            var e = t.mraid;
                            if (e.notify("supports", {
                                    inlineVideo: Boolean(w.createElement("video").canPlayType)
                                }), e.notify("placementType", t.type), t.type === N.INTERSTITIAL && t.frame.contentWindow.addEventListener("load", function() {
                                    M.length || re(t), M.push(t)
                                }, !1), K(t), _(t), $(t), ee(t), x.CreativeToolset && !t.gct && t.type !== N.INTERSTITIAL) try {
                                (t.gct = new x.CreativeToolset).enableExpansion({
                                    width: t.width,
                                    height: t.height,
                                    expansionMode: 0,
                                    expansionCallback: function() {
                                        fe(t)
                                    },
                                    collapseCallback: function() {}
                                })
                            } catch (e) {
                                delete t.gct
                            }
                            e.notify("state", P.DEFAULT), e.notify("ready")
                        },
                        open: function(e, t) {
                            b.open(t, "_blank")
                        },
                        expand: function(e, t) {
                            re(e, t)
                        },
                        resize: function(e) {
                            e.gct ? e.gct.expandWindow() : fe(e)
                        },
                        close: function(e) {
                            var t = e.mraid.state;
                            t === P.EXPANDED ? ae(e) : t === P.RESIZED && le(e)
                        },
                        hide: function(e) {
                            e.type === N.INTERSTITIAL && (M.shift(), ae(e), M.length && re(M[0]))
                        },
                        playVideo: function(e, t) {
                            b.open(t)
                        },
                        useCustomClose: function(e, t) {
                            var n = e.mraid;
                            n.useCustomClose !== t && (n.useCustomClose = t, n.notify("expandProperties", {
                                useCustomClose: t
                            }), e.type !== N.INTERSTITIAL && n.state !== P.EXPANDED && n.state !== P.RESIZED || ie(e))
                        },
                        setExpandProperties: function(e, t) {
                            var n = e.mraid;
                            l.has(t, "width") && (n.expandWidth = t.width), l.has(t, "height") && (n.expandHeight = t.height), t.useCustomClose !== R && (n.useCustomClose = t.useCustomClose), n.notify("expandProperties", t)
                        },
                        setResizeProperties: function(e, t) {
                            var n, i, o = e.mraid;
                            if (l.has(t, "offsetX") && (o.offsetX = t.offsetX), l.has(t, "offsetY") && (o.offsetY = t.offsetY), l.has(t, "width") && (n = o.resizeWidth = t.width), l.has(t, "height") && (i = o.resizeHeight = t.height), l.has(t, "customClosePosition") && (o.customClosePosition = t.customClosePosition), l.has(t, "allowOffscreen") && (o.allowOffscreen = t.allowOffscreen), e.gct) {
                                var r = e.gct;
                                try {
                                    var a = 2;
                                    for (var s in r) {
                                        var d = r[s];
                                        if (d && "object" == typeof d && d.width && d.height && (d.width = n, d.height = i, 0 === --a)) break
                                    }
                                } catch (e) {}
                            }
                            o.notify("resizeProperties", t)
                        },
                        setOrientationProperties: function(e, t) {
                            var n = e.mraid;
                            l.has(t, "allowOrientationChange") && (n.allowOrientationChange = t.allowOrientationChange), l.has(t, "forceOrientation") && (n.forceOrientation = t.forceOrientation), n.hasOrientationProperties = !0, H === e && ce(e), n.notify("orientationProperties", t)
                        },
                        log: function() {}
                    };
                    for (var F in (s = x.Adform.mraidBridge = new e.EventEmitter).frame = frameElement, Y) s.on(F, function(r) {
                        return function() {
                            if (!(arguments.length < 1)) {
                                var e = Array.prototype.slice.call(arguments, 0),
                                    t = e[0],
                                    n = a[t];
                                if (n) {
                                    var i, o = n.mraid;
                                    o || ((o = n.mraid = l.clone(h)).notify = (i = t, function() {
                                        var e = x.Array.prototype.slice.call(arguments, 0);
                                        e.unshift(i), s.notify.apply(s, e)
                                    })), e.splice(0, 1, n), Y[r].apply(Y, e)
                                }
                            }
                        }
                    }(F));
                    s.notify = function(e) {
                        var t = a[e];
                        if (t && t.frame) {
                            var n = t.frame.contentWindow;
                            if (n && n.Adform) {
                                var i = n.Adform.mraidBridge;
                                if (i) {
                                    var o = x.Array.prototype.slice.call(arguments, 0);
                                    o.splice(0, 1), i.emit.apply(i, o)
                                }
                            }
                        }
                    }, s.reset = function(e) {
                        e.mraid && (Y.close(e), Y.hide(e), delete e.mraid, delete e.close)
                    }, X = "adfm-mraid-style", V = "adfm-ad iframe,adfm-close{position:absolute!important}.adfm-fullscreen-mouse,.adfm-fullscreen-mouse body,adfm-ad.adfm-inline{overflow:hidden!important}adfm-ad,adfm-placeholder{position:relative}adfm-ad,adfm-ad iframe,adfm-close,adfm-placeholder{display:block;opacity:1;visibility:visible!important;top:auto;left:auto;right:auto;bottom:auto;margin:0;padding:0;border:none!important;outline:0!important;background-color:transparent!important;background-image:none!important;-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}adfm-ad .adfm-expand-url{background-color:#fff!important}adfm-close{display:none;width:50px;height:50px;cursor:pointer;background-repeat:no-repeat;background-position:9px 9px;background-size:32px 32px;background-image:url(data:image/png;base64,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)!important}adfm-close:active{background-position:9px 10px}adfm-close.adfm-close-top-left{top:0;left:0}adfm-close.adfm-close-top-right{top:0;right:0}adfm-close.adfm-close-center{left:50%;top:50%;margin:-25px 0 0 -25px}adfm-close.adfm-close-bottom-left{bottom:0;left:0}adfm-close.adfm-close-bottom-right{bottom:0;right:0}adfm-close.adfm-close-top-center{top:0;left:50%;margin-left:-25px}adfm-close.adfm-close-bottom-center{bottom:0;left:50%;margin-left:-25px}adfm-close.adfm-close-custom{background-image:none!important}.adfm-fullscreen,.adfm-fullscreen body{position:relative!important;left:0!important;top:0!important;right:auto!important;bottom:auto!important;width:100%!important;height:100%!important;border:none!important;padding:0!important;margin:0!important}.adfm-fullscreen-touch,.adfm-fullscreen-touch body{touch-action:none;-ms-touch-action:none;-ms-content-zooming:none}adfm-ad.adfm-interstitial{opacity:0!important}.adfm-fullscreen adfm-ad.adfm-inline{background-color:rgba(0,0,0,.85)!important}.adfm-fullscreen adfm-ad.adfm-expanding,.adfm-fullscreen adfm-ad.adfm-interstitial{opacity:1!important;transition:opacity .25s}adfm-ad.adfm-expanding iframe,adfm-ad.adfm-resizing{transition:top .25s,left .25s,width .25s,height .25s}adfm-ad.adfm-expanding iframe{opacity:.99}.adfm-zindex-auto{z-index:auto!important;transform:none!important;-webkit-transform:none!important}.adfm-position-reset{position:static!important}", (Z = frameElement.ownerDocument.getElementById(X)) || ((Z = w.createElement("style")).id = X, Z.type = "text/css", Z.styleSheet ? Z.styleSheet.cssText = V : Z.appendChild(w.createTextNode(V)), frameElement.parentNode.appendChild(Z))
                }
            }
        }
    }

    function J(e, t) {
        var n = e.mraid;
        n && (t === n.state && t !== P.RESIZED || (n.state = P[t.toUpperCase()], n.notify("state", n.state)))
    }

    function q(e, t, n) {
        var i = e.mraid;
        i && i.notify(t, n)
    }

    function K(e) {
        var t = screen.width,
            n = screen.height,
            i = b.devicePixelRatio || 1;
        (C.iOS || C.IEMobile) && E() === c.LANDSCAPE && (t = screen.height, n = screen.width), C.AndroidBrowser && (t /= i, n /= i), q(e, "screenSize", {
            width: Math.round(t),
            height: Math.round(n)
        })
    }

    function Q(e) {
        var t = x.Math,
            n = e.getBoundingClientRect();
        return {
            x: t.round(n.left),
            y: t.round(n.top),
            width: t.round(n.width || n.right - n.left),
            height: t.round(n.height || n.bottom - n.top)
        }
    }

    function _(e) {
        var t = e.container;
        H && (t = e.frameURL ? e.frameURL : e.frame), q(e, "currentPos", Q(t))
    }

    function $(e) {
        var t = e.container;
        H && (t = e.placeholder || e.frame), q(e, "defaultPos", Q(t))
    }

    function ee(e) {
        q(e, "maxSize", {
            width: Math.round(x.innerWidth),
            height: Math.round(x.innerHeight)
        })
    }

    function te() {
        var e = E();
        if (e !== o) {
            o = e;
            for (var t = 0; t < a.length; t++) {
                var n = a[t];
                n.frame && (K(n), _(n), $(n), ee(n), C.iOS ? setTimeout(function() {
                    se(n)
                }, 0) : se(n), C.SamsungBrowser && n.close && (n.container.style.display = "none", n.container.offsetHeight = n.container.offsetHeight, n.container.style.display = "block"))
            }
        }
    }

    function ne() {
        x.addEventListener("resize", function() {
            x.innerWidth !== r && te(), r = x.innerWidth
        }, !1)
    }

    function ie(t, e) {
        if (t.container) {
            var n = t.close,
                i = t.mraid;
            if (!n) {
                if (w.registerElement) try {
                    w.registerElement(u)
                } catch (e) {}(n = w.createElement(u)).addEventListener("click", r, !0), C.touchEnabled && n.addEventListener("touchstart", r, !0), t.container.appendChild(n), t.close = n
            }
            for (var o in i.useCustomClose || i.state === P.RESIZED ? A.addClass(n, p) : A.removeClass(n, p), e = e || f, d) A.removeClass(n, m + "-" + d[o]);
            A.addClass(n, m + "-" + e), n.style.display = "block"
        }

        function r(e) {
            try {
                e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
            } catch (e) {}
            i.notify("close"), C.AndroidBrowser && (t.container.style.webkitTransform = "scale(1)")
        }
    }

    function oe(e) {
        var t = e.target || e.srcElement || e.touches && e.touches[0];
        if (!t) return i(e);
        if ("body" === t.nodeName.toLowerCase()) return i(e);
        for (var n = t; n.parentNode;) {
            if (~["auto", "scroll"].indexOf(getComputedStyle(n).overflowY)) return;
            n = n.parentNode
        }

        function i(e) {
            e.preventDefault && e.preventDefault(), e.returnValue = !1
        }
        i(e)
    }

    function re(t, n) {
        if (t.container && !H) {
            H = t, C.touchEnabled && !C.AndroidBrowser || (B = x.document.documentElement.scrollTop || x.document.body.scrollTop), C.AndroidBrowser && x.scrollTo(0, 1);
            var i, e, o = t.type,
                r = t.container,
                a = r.style,
                s = t.frame,
                d = s.style;
            if (t.defaultStyle || (t.defaultStyle = r.getAttribute("style")), o === N.INLINE) {
                if (n) {
                    if (!new RegExp("^(?:[a-z]+:)?//", "i").test(n)) try {
                        n = s.contentWindow.Adform.assetsUrlBase + "/" + n.replace(/^\/+/, "")
                    } catch (e) {}(i = w.createElement("iframe")).setAttribute("webkitallowfullscreen", !0), i.setAttribute("mozallowfullscreen", !0), i.setAttribute("allowfullscreen", !0), i.setAttribute("frameborder", 0);
                    var l = new XMLHttpRequest;
                    l.open("GET", n, !0), l.onreadystatechange = function() {
                        if (4 === l.readyState)
                            if (200 === l.status) {
                                var e = l.responseText,
                                    t = i.contentWindow.document;
                                setTimeout(function() {
                                    t.open(), t.write('<base href="' + n.replace(/[^\/]*$/, "") + '">'), i.contentWindow.mraid = s.contentWindow.mraid, i.contentWindow.Adform = s.contentWindow.Adform, t.write(e), t.close()
                                }, 0)
                            } else i.setAttribute("src", n)
                    }, l.withCredentials = !0, l.send(), A.addClass(i, "adfm-expand-url"), t.close ? r.insertBefore(i, t.close) : r.appendChild(i), t.frameURL = i
                }
                if (e = s.getBoundingClientRect(), !t.placeholder) {
                    try {
                        w.registerElement(T)
                    } catch (e) {}
                    var f = t.placeholder = w.createElement(T);
                    f.setAttribute("style", r.getAttribute("style")), r.parentNode.insertBefore(f, r.nextSibling || r)
                }
            }
            if (G) {
                var c = G.geom(),
                    u = {
                        t: Number(c.exp.t),
                        l: Number(c.exp.l),
                        r: Number(c.exp.r)
                    };
                u.b = Number(c.win.h) - Number(O.self.b) + Number(O.self.t) - u.t, e = {
                    left: u.l,
                    top: u.t,
                    width: Number(c.self.w),
                    height: Number(c.self.h)
                }, G.expand(u)
            }
            if (a.position = "fixed", a.zIndex = ++W, a.left = a.top = a.bottom = a.right = 0, C.touchEnabled) {
                var m = s.contentWindow.document,
                    p = m.body.style;
                if (null === j) {
                    j = !1;
                    for (var h = 0; h < U.length; h++) {
                        var g = U[h];
                        if (g in p) {
                            U = g, j = !0;
                            break
                        }
                    }
                }
                j ? p.setProperty(U, "none", "important") : m.addEventListener("touchmove", oe, !0)
            }
            if (!M.length) {
                var y = s.ownerDocument.documentElement;
                A.addClass(y, D), C.touchEnabled ? A.addClass(y, L) : A.addClass(y, z)
            }
            if (o === N.INLINE) {
                if (d.minWidth = d.minHeight = "", d.left = e.left + "px", d.top = e.top + "px", d.width = e.width + "px", d.height = e.height + "px", i) {
                    var v = i.style;
                    v.left = d.left, v.top = d.top, v.width = d.width, v.height = d.height, d.display = "none"
                }
                a.opacity = 0, J(t, P.EXPANDED), setTimeout(function() {
                    A.addClass(r, S), de(r, function() {
                        var e = t.mraid;
                        A.removeClass(r, S), e.expandWidth || (d.width = "1px", d.minWidth = "100%"), e.expandHeight || (d.height = "1px", d.minHeight = "100%"), _(t)
                    }), a.opacity = 1, se(t)
                }, 16)
            } else t.isInterstitialExpanding = !0, de(r, function() {
                delete t.isInterstitialExpanding, _(t);
                var e = t.isInterstitialViewable;
                e !== R && (t.mraid.notify("isViewable", e, e ? 100 : 0), delete t.isInterstitialViewable)
            }), se(t);
            ie(t);
            for (var E = r; E.parentNode;) {
                if (1 === (E = E.parentNode).nodeType) A.addClass(E, I), "fixed" === b.getComputedStyle(E).position && A.addClass(E, k)
            }
            t.mraid.hasOrientationProperties && ce(t)
        }
    }

    function ae(e) {
        if (e.container) {
            var t = e.container,
                n = e.frame,
                i = n.contentWindow.document,
                o = i.body.style;
            if (!M.length) {
                var r = n.ownerDocument.documentElement;
                A.removeClass(r, D), C.touchEnabled ? A.removeClass(r, L) : A.removeClass(r, z)
            }
            for (var a = t; a.parentNode;) 1 === (a = a.parentNode).nodeType && (A.removeClass(a, I), A.removeClass(a, k));
            if (C.touchEnabled && (j ? o.removeProperty(U) : i.removeEventListener("touchmove", oe, !0)), null !== B && x.scrollTo(0, B), e.frameURL && (e.frameURL.style.display = "none", delete e.frameURL), e.placeholder) {
                var s = e.placeholder;
                s.parentNode.removeChild(s), delete e.placeholder
            }
            n.style.display = "block", H = null, y && e.mraid.hasOrientationProperties && y(), le(e)
        }
    }

    function se(e) {
        if (e.container && e === H) {
            var t, n = e.type,
                i = e.mraid,
                o = e.container.style;
            t = e.frameURL ? e.frameURL.style : e.frame.style;
            var r = x.innerWidth,
                a = x.innerHeight;
            o.width = o.height = "auto", n === N.INLINE && setTimeout(function() {
                null !== i.expandWidth ? (t.left = Math.round((r - i.expandWidth) / 2) + "px", t.width = i.expandWidth + "px") : (t.left = 0, t.width = "100%"), null !== i.expandHeight ? (t.top = Math.round((a - i.expandHeight) / 2) + "px", t.height = i.expandHeight + "px") : (t.top = 0, t.height = "100%")
            }, 0), _(e), n === N.INTERSTITIAL && $(e)
        }
    }

    function de(t, n) {
        var i = !1;

        function o(e) {
            if (e) {
                r && (clearTimeout(r), r = null);
                try {
                    e.stopPropagation(), e.stopImmediatePropagation()
                } catch (e) {}
                t.removeEventListener(e.type, o, !0)
            }
            i || (n(), i = !0)
        }["transitionend", "webkitTransitionEnd", "oTransitionEnd"].forEach(function(e) {
            t.addEventListener(e, o, !0)
        });
        var r = setTimeout(o, 500)
    }

    function le(t) {
        var e = t.type,
            n = t.mraid,
            i = t.container,
            o = (i.style, t.frame.style),
            r = !1;

        function a() {
            _(t), $(t);
            var e = t.gct;
            G ? G.collapse() : e && e.isExpanded() && e.collapseWindow()
        }
        t.close.style.display = "", n.state === P.RESIZED && (r = !0, A.addClass(i, v), de(i, function() {
            A.removeClass(i, v), a()
        })), e === N.INTERSTITIAL ? J(t, P.HIDDEN) : J(t, P.DEFAULT), t.defaultStyle && (i.setAttribute("style", t.defaultStyle), delete t.defaultStyle), e === N.INLINE && (o.width = o.height = "1px", o.minWidth = o.minHeight = "100%", o.left = 0, o.top = 0), r || a()
    }

    function fe(e) {
        var t, n = e.mraid,
            i = e.container,
            o = i.style;
        G && (t = G.geom()), e.defaultStyle || (e.defaultStyle = i.getAttribute("style")), J(e, P.RESIZED), A.addClass(i, v), de(i, function() {
            A.removeClass(i, v), _(e)
        });
        var r = Math.round(x.document.body.clientWidth),
            a = Math.round(x.innerHeight);
        t && (r = Number(t.exp.l) + Number(t.self.w) + Number(t.exp.r), a = Number(t.exp.t) + Number(t.self.h) + Number(t.exp.b)), (!r || r < e.width) && (r = Math.round(x.innerWidth));
        var s = Q(i),
            d = n.resizeWidth,
            l = n.resizeHeight,
            f = n.offsetX,
            c = n.offsetY,
            u = s.x + f,
            m = s.y + c,
            p = (d - s.width) / 2;
        if ("fixed" === o.position && (p = 0), u -= p, n.allowOffscreen) {
            var h = 0,
                g = 0;
            m < 0 ? g = m : a < m + l && (g = m + l - a), u < 0 ? h = u : r < u + d && (h = u + d - r), (h || g) && x.scrollBy(h, g)
        } else u = Math.max(0, u), m = Math.max(0, m), r < u + d && (u = r - d) < 0 && (u = 0, p = ((d = r) - s.width) / 2), a < m + l && (m = a - l) < 0 && (m = 0, l = a), f = u - s.x + p, c = m - s.y;
        if (t) {
            var y = {
                r: d - Number(O.self.w),
                b: l - Number(O.self.h)
            };
            f < 0 ? (y.l = Math.abs(f), y.r -= y.l) : f = 0, c < 0 ? (y.t = Math.abs(c), y.b -= y.t) : c = 0, G.expand(y)
        }
        o.zIndex = ++W, o.width = d + "px", o.height = l + "px", o.left = parseInt(o.left, 10) + f + "px", o.top = parseInt(o.top, 10) + c + "px", ie(e, n.customClosePosition)
    }

    function ce(e) {
        var t = e.mraid;
        if (!g || !y) {
            var n = b.screen,
                i = n.orientation;
            if ("object" == typeof i && i.lock && i.unlock) g = function(e) {
                try {
                    i.lock(e)
                } catch (e) {}
            }, y = function() {
                try {
                    i.unlock()
                } catch (e) {}
            };
            else {
                var o = ["moz", "ms"],
                    r = "lockOrientation",
                    a = "unlockOrientation",
                    s = r,
                    d = a;
                do {
                    if (!s || !d) {
                        var l = o.shift();
                        s = l + r.charAt(0).toUpperCase() + r.slice(1), d = l + a.charAt(0).toUpperCase() + a.slice(1)
                    }
                    if (n[s] && n[d]) {
                        g = function(e) {
                            try {
                                n[s](e)
                            } catch (e) {}
                        }, y = function() {
                            try {
                                n[d]()
                            } catch (e) {}
                        };
                        break
                    }
                    d = s = null
                } while (o.length)
            }
        }
        g && y && (t.forceOrientation === c.NONE || t.allowOrientationChange ? y() : t.forceOrientation !== c.NONE ? g(t.forceOrientation) : t.allowOrientationChange || g(E()))
    }
}(window, document, window.Adform = window.Adform || {}),
function(o, e, r, i) {
    if (!o.mraid) {
        var s = r.utils,
            n = new r.EventEmitter,
            t = o.mraid = Object.create ? Object.create(null) : {};
        t._adfPoly = !0;
        var a = "inline",
            d = "default",
            l = "expanded",
            f = "resized",
            c = {
                READY: "ready",
                ERROR: "error",
                STATE_CHANGE: "stateChange",
                VIEWABLE_CHANGE: "viewableChange",
                VIEWABLE_PERCENTAGE_CHANGE: "viewablePercentageChange",
                SIZE_CHANGE: "sizeChange"
            },
            u = "top-right",
            m = u,
            p = ["top-left", "top-center", u, "center", "bottom-left", "bottom-center", "bottom-right"],
            h = "loading",
            g = "unknown",
            y = {
                width: null,
                height: null,
                useCustomClose: !1,
                isModal: !0
            },
            v = {
                width: 0,
                height: 0,
                offsetX: 0,
                offsetY: 0,
                customClosePosition: m,
                allowOffscreen: !0
            },
            E = {
                allowOrientationChange: !0,
                forceOrientation: "none"
            },
            b = !1,
            w = ["portrait", "landscape", "none"],
            R = {
                width: 0,
                height: 0
            },
            C = {
                width: 0,
                height: 0
            },
            x = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            O = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            A = !1,
            N = 0,
            P = {
                sms: !1,
                tel: !1,
                calendar: !1,
                storePicture: !1,
                inlineVideo: !1,
                viewablePercentage: !0
            },
            T = -1,
            D = -1;
        t.getVersion = function() {
            return "2.0"
        }, t.addEventListener = function(e, t) {
            "string" == typeof e && "function" == typeof t ? s.containsValue(c, e) ? n.on(e, t) : k(c.ERROR, "Unknown MRAID event type: " + e, "addEventListener") : k(c.ERROR, "Both event type and listener are required.", "addEventListener")
        }, t.removeEventListener = function(e, t) {
            "string" == typeof e ? t === i || "function" == typeof t ? n.off(e, t) : k(c.ERROR, "Event listener is not a function.", "removeEventListener") : k(c.ERROR, "Event type is required.", "removeEventListener")
        }, t.getState = function() {
            return h
        }, t.getPlacementType = function() {
            return g
        }, t.isViewable = function() {
            return A
        }, t.getViewablePercentage = function() {
            return N
        }, t.open = function(e) {
            "string" != typeof e ? k(c.ERROR, "URL is required.", "open") : z.notify("open", e)
        }, t.getExpandProperties = function() {
            var e = s.clone(y);
            return null === e.width && (e.width = C.width), null === e.height && (e.height = C.height), e
        }, t.setExpandProperties = function(e) {
            if ("object" == typeof e)
                if (h !== l) {
                    var t = s.clone(e);
                    if (s.has(t, "isModal")) k(c.ERROR, "isModal expand property is read-only.", "setExpandProperties");
                    else {
                        var n = !1;
                        t.useCustomClose !== i && "boolean" != typeof t.useCustomClose && (delete t.useCustomClose, n = !0), isNaN(parseInt(t.width, 10)) && (delete t.width, n = !0), isNaN(parseInt(t.height, 10)) && (delete t.height, n = !0), n && k(c.ERROR, "Wrong expand property values specified.", "setExpandProperties"), z.notify("setExpandProperties", t)
                    }
                } else k(c.ERROR, "Expand properties cannot be set when the ad is in expanded state.", "setExpandProperties");
            else k(c.ERROR, "Expand properties is not an object.", "setExpandProperties")
        }, t.expand = function(e) {
            g === a ? h !== d && h !== f ? k(c.ERROR, "Ad can only be expanded from default or resized states.", "expand") : (z.notify("expand", e), S(O.width, O.height)) : k(c.ERROR, "Ad can only be expanded from inline placement type.", "expand")
        }, t.close = function() {
            h === l || h === f ? (z.notify("close"), S(O.width, O.height)) : h === d ? z.notify("hide") : k(c.ERROR, "Ad can only be closed from default, expanded or resized states.", "close")
        }, t.useCustomClose = function(e) {
            "boolean" == typeof e ? z.notify("useCustomClose", e) : k(c.ERROR, "Boolean value expected.", "useCustomClose")
        }, t.getMaxSize = function() {
            return s.clone(C)
        }, t.getScreenSize = function() {
            return s.clone(R)
        }, t.getDefaultPosition = function() {
            return s.clone(x)
        }, t.getCurrentPosition = function() {
            return s.clone(O)
        }, t.getResizeProperties = function() {
            return s.clone(v)
        }, t.setResizeProperties = function(e) {
            if (b = !1, "object" == typeof e) {
                for (var t = ["width", "height", "offsetX", "offsetY"], n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (!s.has(e, i) || isNaN(parseInt(e[i], 10))) return void k(c.ERROR, "Required resize properties must include width, height, offsetX and offsetY.", "setResizeProperties")
                }
                if (e.width < 50 || e.height < 50) k(c.ERROR, "Resized ad must be at least 50x50 pixels in size.", "setResizeProperties");
                else {
                    var o = s.clone(e);
                    if (o.customClosePosition && p.indexOf(o.customClosePosition) < 0 && (delete o.customClosePosition, k(c.ERROR, "Specified customClosePosition value is not supported.", "setResizeProperties")), "boolean" != typeof o.allowOffscreen && (o.allowOffscreen = !0), !1 === o.allowOffscreen) {
                        var r = o.offsetX + x.x,
                            a = o.offsetY + x.y;
                        (r < 0 || a < 0 || o.width > C.width || o.height > C.height) && k(c.ERROR, "Resize properties are offscreen (allowOffscreen is set to false).", "setResizeProperties")
                    }
                    o.customClosePosition || (o.customClosePosition = m), z.notify("setResizeProperties", o)
                }
            } else k(c.ERROR, "Resize properties is not an object.", "setResizeProperties")
        }, t.resize = function() {
            g === a ? b ? h !== d && h !== f ? k(c.ERROR, "Ad can only be resized from default and resized states.", "resize") : (z.notify("resize"), S(O.width, O.height)) : k(c.ERROR, "Ad can only be resized when setResizeProperties is called.", "resize") : k(c.ERROR, "Ad can only be resized from inline placement type.", "resize")
        }, t.getOrientationProperties = function() {
            return s.clone(E)
        }, t.setOrientationProperties = function(e) {
            if ("object" == typeof e) {
                var t = s.clone(e);
                s.has(e, "forceOrientation") && w.indexOf(e.forceOrientation) < 0 && (delete t.forceOrientation, k(c.ERROR, "Specified forceOrientation value is not supported.", "setOrientationProperties")), s.has(e, "allowOrientationChange") && "boolean" != typeof e.allowOrientationChange && (delete t.allowOrientationChange, k(c.ERROR, "Value of allowOrientationChange must be boolean.", "setOrientationProperties")), z.notify("setOrientationProperties", t)
            } else k(c.ERROR, "Orientation properties is not an object.", "setOrientationProperties")
        }, t.playVideo = function(e) {
            z.notify("playVideo", e)
        }, t.supports = function(e) {
            return !(!s.has(P, e) || !P[e])
        }, t.storePicture = function(e) {
            P.storePicture ? z.notify("storePicture", e) : k(c.ERROR, "Method not supported.", "storePicture")
        }, t.createCalendarEvent = function(e) {
            P.calendar ? z.notify("createCalendarEvent", e) : k(c.ERROR, "Method not supported.", "createCalendarEvent")
        };
        var L = {
                state: function(e) {
                    h = e, k(c.STATE_CHANGE, h)
                },
                isViewable: function(e, t) {
                    e != A && (A = e, k(c.VIEWABLE_CHANGE, A)), t !== i && t != N && (N = t, k(c.VIEWABLE_PERCENTAGE_CHANGE, N))
                },
                placementType: function(e) {
                    g = e
                },
                screenSize: function(e) {
                    s.extendDesired(R, e, Object.keys(R))
                },
                maxSize: function(e) {
                    s.extendDesired(C, e, Object.keys(C))
                },
                defaultPos: function(e) {
                    s.extendDesired(x, e, Object.keys(x))
                },
                currentPos: function(e) {
                    s.extendDesired(O, e, Object.keys(O)), setTimeout(function() {
                        S(O.width, O.height)
                    }, 0)
                },
                expandProperties: function(e) {
                    s.extendDesired(y, e, Object.keys(y))
                },
                resizeProperties: function(e) {
                    b = !0, s.extendDesired(v, e, Object.keys(v))
                },
                orientationProperties: function(e) {
                    s.extendDesired(E, e, Object.keys(E))
                },
                supports: function(e) {
                    s.extendDesired(P, e, Object.keys(P))
                },
                close: function() {
                    t.close()
                },
                error: function(e, t) {
                    k(c.ERROR, e, t)
                },
                ready: function() {
                    k(c.READY)
                }
            },
            z = r.mraidBridge = new r.EventEmitter;
        for (var I in z.notify = function() {
                if (arguments.length) {
                    var e, t = Array.prototype.slice.call(arguments, 0),
                        n = 0;
                    if (r.mraidFrameBridge) e = r.mraidFrameBridge;
                    else {
                        var i = o.parent;
                        if (!i.Adform || !i.Adform.mraidBridge) return;
                        e = i.Adform.mraidBridge, n = frameElement.getAttribute("data-adfm-ad")
                    }
                    t.splice(1, 0, n), e.emit.apply(e, t)
                }
            }, L) z.on(I, L[I]);
        z.notify("init")
    }

    function k(e) {
        if (n.emit.apply(n, arguments), e === c.ERROR) {
            var t = "MRAID";
            arguments[2] && (t += "." + arguments[2]), t += ": " + arguments[1], z.notify("log", t, 1)
        }
    }

    function S(e, t) {
        e === T && t === D || (k(c.SIZE_CHANGE, e, t), T = e, D = t)
    }
}(window, document, window.Adform = window.Adform || {});