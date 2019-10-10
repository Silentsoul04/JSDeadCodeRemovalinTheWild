(window.webpackJsonp = window.webpackJsonp || []).push([
    [56], {
        "/J+c": function(e, t, a) {
            "use strict";
            var i = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = l;
            var n = i(a("q1tI")),
                r = (i(a("17x9")), i(a("wXC7")));

            function l(e) {
                var t, a = e.className,
                    i = e.fill;
                return "up" === e.direction && (t = "rotate(180)"), n.default.createElement("svg", {
                    className: a,
                    viewBox: "0 0 13 8",
                    transform: t
                }, n.default.createElement("polygon", {
                    fill: i,
                    points: "6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"
                }))
            }
            l.displayName = "CaretIcon", l.defaultProps = {
                className: void 0,
                direction: "down",
                fill: r.default.color.black
            }
        },
        QgjT: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sectionClass = t.interactiveDivClass = void 0;
            var i = a("UmXO"),
                n = (0, i.css)("box-sizing:border-box;vertical-align:top;");
            t.interactiveDivClass = n;
            t.sectionClass = function(e) {
                return (0, i.css)("width:100%;margin:0 auto;height:auto;", e.maxWidth ? "max-width: ".concat(e.maxWidth, "px;") : null, " ", e.minWidth ? "min-width: ".concat(e.minWidth, "px;") : null)
            }
        },
        RG0N: function(e, t, a) {
            "use strict";
            var i = a("284h"),
                n = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.replaceChildren = m, t.cloneScript = p, t.runScripts = h, t.default = void 0;
            var r = n(a("pVnL")),
                l = n(a("QILm")),
                o = n(a("lwsE")),
                s = n(a("W8MJ")),
                d = n(a("a1gu")),
                c = n(a("Nsbk")),
                u = n(a("7W2i")),
                f = i(a("q1tI"));

            function m(e, t) {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.length > 0;) e.appendChild(t[0])
            }

            function p(e) {
                var t = document.createElement("script");
                return Array.from(e.attributes).forEach((function(e) {
                    t.setAttribute(e.name, e.value)
                })), t.innerHTML = e.innerHTML, t
            }

            function h(e) {
                return new Promise((function(t) {
                    var a = Array.from(e);
                    ! function e() {
                        if (a.length) {
                            var i = a.shift(),
                                n = p(i);
                            document.head.appendChild(n).parentNode.removeChild(n), i.async || i.defer || !i.hasAttribute("src") ? e() : n.onload = e
                        } else t()
                    }()
                }))
            }

            function v() {
                return !!window.getInteractiveBridge
            }
            var g = function(e) {
                function t() {
                    var e, a;
                    (0, o.default)(this, t);
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return (a = (0, d.default)(this, (e = (0, c.default)(t)).call.apply(e, [this].concat(n)))).setupRef = function(e) {
                        a.el = e
                    }, a
                }
                return (0, u.default)(t, e), (0, s.default)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        if (v()) {
                            var e = this.props.id,
                                t = window.getInteractiveBridge(e);
                            t || (console.info("[interactive] run: ".concat(this.props.id)), h(this.el.querySelectorAll("script")), t = window.getInteractiveBridge(e)), t && t.stashedDomNodes && (console.info("[interactive] restore: ".concat(this.props.id)), m(this.el, t.stashedDomNodes))
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (v()) {
                            var e = window.getInteractiveBridge(this.props.id);
                            e && (console.info("[interactive] stash: ".concat(this.props.id)), e.stashedDomNodes = this.el.childNodes)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.html,
                            a = e.id,
                            i = (0, l.default)(e, ["html", "id"]),
                            n = '\n      <script>window.registerInteractive && window.registerInteractive("'.concat(a, '");<\/script>\n    ');
                        return f.default.createElement("div", (0, r.default)({}, i, {
                            ref: this.setupRef,
                            "data-sourceid": a,
                            dangerouslySetInnerHTML: {
                                __html: n + t
                            }
                        }))
                    }
                }]), t
            }(f.Component);
            g.displayName = "NYTComponent";
            var y = g;
            t.default = y
        },
        RKHt: function(e, t, a) {
            "use strict";
            var i = a("284h"),
                n = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(a("q1tI")),
                l = (n(a("17x9")), a("UmXO")),
                o = n(a("OB6K")),
                s = n(a("gtCS")),
                d = n(a("tXdy")),
                c = i(a("uW2s")),
                u = function(e) {
                    var t, a, i = e.interactive,
                        n = e.className,
                        u = e.children,
                        f = e.theme,
                        m = e.manageScripts,
                        p = e.enableInteractiveBridge,
                        h = i.leadin,
                        v = i.note,
                        g = i.credit,
                        y = i.dataSource,
                        _ = i.headline,
                        b = i.displayProperties,
                        E = b.minimumWidth,
                        O = b.maximumWidth,
                        N = b.displayForPromotionOnly,
                        w = void 0 !== N && N,
                        R = O,
                        S = _ && _.default,
                        I = S && !w;
                    return (h || I) && (t = r.default.createElement("header", {
                        id: "interactive-header",
                        className: (0, l.cx)(c.headerClass, "interactive-header")
                    }, I && r.default.createElement("h2", {
                        id: "interactive-headline",
                        className: (0, l.cx)(c.headlineClass, "interactive-headline")
                    }, S), h && r.default.createElement("p", {
                        "data-testid": "leadin",
                        id: "interactive-leadin",
                        className: (0, l.cx)(c.leadinClass, "interactive-leadin"),
                        dangerouslySetInnerHTML: {
                            __html: h
                        }
                    }))), (v || y || g) && (a = r.default.createElement(s.default, {
                        interactive: i,
                        footerClass: c.footerClass,
                        metaClass: c.metaClass
                    })), r.default.createElement(o.default, {
                        theme: f
                    }, r.default.createElement(d.default, {
                        maxWidth: R,
                        minWidth: E,
                        interactive: i,
                        className: n,
                        manageScripts: m,
                        enableInteractiveBridge: p,
                        Header: t,
                        Footer: a
                    }, u))
                };
            u.displayName = "Embedded", u.defaultProps = {
                interactive: {
                    html: null,
                    displayProperties: {},
                    headline: {
                        default: ""
                    }
                },
                className: "",
                children: null,
                theme: {},
                manageScripts: !1,
                enableInteractiveBridge: !1
            };
            var f = u;
            t.default = f
        },
        bNs8: function(e, t, a) {
            "use strict";
            var i = a("284h"),
                n = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.simpleByline = c, t.default = void 0;
            var r = n(a("pVnL")),
                l = n(a("QILm")),
                o = a("UmXO"),
                s = n(a("q1tI")),
                d = (n(a("17x9")), i(a("oZ2M")));

            function c(e) {
                var t = e.authors,
                    a = e.format,
                    i = void 0 === a ? "string" : a,
                    n = e.prefix,
                    r = void 0 === n ? "by" : n,
                    l = [];
                if (!t || 0 === t.length) return "";
                for (var c = "Por" === r ? " y " : " and ", u = 0; u < t.length; u += 1) {
                    var f = t[u].displayName,
                        m = t[u].bioUrl;
                    switch (u) {
                        case 0:
                            break;
                        case t.length - 1:
                            l.push(c);
                            break;
                        default:
                            l.push(", ")
                    }
                    var p = "";
                    p = u === t.length - 1 ? (0, o.cx)(d.spanClass, "last-byline") : d.spanClass, "string" === i ? l.push(f) : void 0 !== m && "" !== m ? l.push(s.default.createElement(d.BylineLink, {
                        href: m,
                        key: u
                    }, s.default.createElement("span", {
                        className: p,
                        itemProp: "name"
                    }, f))) : l.push(s.default.createElement("span", {
                        key: u,
                        className: p,
                        itemProp: "name"
                    }, f))
                }
                return "string" === i ? l.join("") : l
            }
            var u = function(e) {
                var t = e.bylines,
                    a = e.className,
                    i = e.html,
                    n = e.InlineTimestamp,
                    u = (0, l.default)(e, ["bylines", "className", "html", "InlineTimestamp"]),
                    f = "enabled" === i ? "array" : "string";
                return t.map((function(e, i) {
                    var l, m = !!(null == (l = e.creators) ? void 0 : l.length),
                        p = m ? {
                            itemProp: "author",
                            itemScope: !0,
                            itemType: "http://schema.org/Person"
                        } : {};
                    return m && e.bioUrl && (p.itemID = e.bioUrl), s.default.createElement(d.default, (0, r.default)({
                        className: (0, o.cx)(t.length > 1 ? d.compoundBylineStyle : null, a)
                    }, u, p, {
                        key: i.toString(16)
                    }), !m && s.default.createElement("span", {
                        className: d.spanClass,
                        itemProp: "author"
                    }, e.renderedRepresentation), m && e.prefix, " ", c({
                        authors: e.creators,
                        format: f,
                        prefix: e.prefix
                    }), n && n)
                }))
            };
            u.defaultProps = {
                theme: {
                    section: "default"
                },
                bylines: [],
                html: "enabled",
                InlineTimestamp: null
            };
            var f = u;
            t.default = f
        },
        eUG7: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.aspectRatioInnerStyle = t.aspectRatioOuterStyle = void 0;
            var i = a("3NoI"),
                n = (0, i.css)("height:0;width:100%;position:relative;background-color:transparent;");
            t.aspectRatioOuterStyle = n;
            var r = (0, i.css)("position:absolute;top:0;left:0;width:100%;height:100%;");
            t.aspectRatioInnerStyle = r
        },
        fN96: function(e, t, a) {
            var i = a("XKFU");
            i(i.S, "Number", {
                isInteger: a("nBIS")
            })
        },
        gtCS: function(e, t, a) {
            "use strict";
            var i = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(a("q1tI")),
                r = (i(a("17x9")), a("UmXO"));

            function l(e) {
                var t = e.interactive,
                    a = e.footerClass,
                    i = e.metaClass,
                    l = t.note,
                    o = t.dataSource,
                    s = t.credit;
                return n.default.createElement("footer", {
                    id: "interactive-footer",
                    className: (0, r.cx)(a, "interactive-footer")
                }, l && n.default.createElement("p", {
                    "data-testid": "note",
                    id: "interactive-notes",
                    className: (0, r.cx)(i, "interactive-notes"),
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                }), o && n.default.createElement("p", {
                    "data-testid": "source",
                    id: "interactive-source",
                    className: (0, r.cx)(i, "interactive-source"),
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                }), s && n.default.createElement("p", {
                    "data-testid": "credit",
                    id: "interactive-credit",
                    className: (0, r.cx)(i, "interactive-credit"),
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                }))
            }
            l.displayName = "Footer";
            var o = l;
            t.default = o
        },
        nBIS: function(e, t, a) {
            var i = a("0/R4"),
                n = Math.floor;
            e.exports = function(e) {
                return !i(e) && isFinite(e) && n(e) === e
            }
        },
        "nGF/": function(e, t, a) {
            "use strict";
            var i = a("284h"),
                n = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(a("pVnL")),
                l = n(a("lwsE")),
                o = n(a("W8MJ")),
                s = n(a("a1gu")),
                d = n(a("Nsbk")),
                c = n(a("7W2i")),
                u = i(a("q1tI")),
                f = (n(a("17x9")), n(a("x9rc"))),
                m = a("vOGy");
            var p = function(e) {
                function t() {
                    var e, a, i;
                    return (0, l.default)(this, t), (e = (0, s.default)(this, (0, d.default)(t).call(this))).isVideoPlaying = function() {
                        var t;
                        if (null == (t = e.videoRef) ? void 0 : t.current) {
                            var a = e.videoRef.current;
                            if (a.currentTime > 0 && !a.paused && !a.ended && a.readyState > 2) return !0
                        }
                        return !1
                    }, e.handleBadProps = function() {
                        var t = e.props,
                            a = t.src,
                            i = t.imgFallback;
                        a || i || e.handleVideoError()
                    }, e.handleVideoError = function() {
                        e.setState({
                            useFallback: !0
                        })
                    }, e.handleOnLoad = (a = function() {
                        e.props.onLoad()
                    }, i = !1, function() {
                        if (!i) return i = !0, a.apply(void 0, arguments)
                    }), e.handleOnError = function() {
                        e.props.onError()
                    }, e.shouldReducedMotion = function() {
                        try {
                            return window.matchMedia("(prefers-reduced-motion)").matches
                        } catch (e) {
                            return !1
                        }
                    }, e.state = {
                        useFallback: !1,
                        reduceMotion: !1
                    }, e.videoRef = u.default.createRef(), e.imgRef = u.default.createRef(), e
                }
                return (0, c.default)(t, e), (0, o.default)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e;
                        this.shouldReducedMotion() ? this.setState({
                            useFallback: !0,
                            reduceMotion: !0
                        }) : setTimeout(this.handleBadProps, 500), this.isVideoPlaying() && this.handleOnLoad(), (null == (e = this.imgRef.current) ? void 0 : e.complete) && (this.imgRef.current.naturalHeight > 0 ? this.handleOnLoad() : this.handleOnError())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                src: this.props.src
                            },
                            t = !this.state.useFallback && this.props.imgLoading,
                            a = this.state.useFallback || !this.props.src;
                        return t && (e.poster = this.props.imgLoading), u.default.createElement(f.default, {
                            className: this.props.className,
                            ratio: this.props.ratio,
                            style: {
                                overflow: "hidden"
                            }
                        }, this.state.reduceMotion || a ? u.default.createElement("img", {
                            src: this.props.imgFallback || this.props.imgLoading,
                            onLoad: this.handleOnLoad,
                            onError: this.handleOnError,
                            className: m.mediaStyle,
                            alt: "Cinemagraph",
                            ref: this.imgRef
                        }) : u.default.createElement("video", (0, r.default)({}, e, {
                            ref: this.videoRef,
                            className: m.mediaStyle,
                            muted: !0,
                            loop: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            onPlay: this.handleOnLoad,
                            onError: this.handleVideoError
                        })))
                    }
                }]), t
            }(u.PureComponent);
            p.displayName = "Cinemagraph", p.defaultProps = {
                src: null,
                onLoad: function() {},
                onError: function() {},
                ratio: "16:9",
                imgLoading: null,
                className: ""
            };
            var h = p;
            t.default = h
        },
        nosR: function(e, t, a) {
            "use strict";
            var i = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.commonPrioritizedVideoRenditions = t.findRenditionsByRatio = t.findCropsByRatio = t.findRenditionOfBestFitUrl = t.findRenditionOfBestFit = void 0;
            var n = i(a("RIqP")),
                r = a("vFws"),
                l = function(e, t) {
                    var a, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    try {
                        var r = (0, n.default)(e);
                        if ((r = r.filter((function(e) {
                                return "number" == typeof e.width
                            }))).sort((function(e, t) {
                                return e.width - t.width
                            })), i)
                            for (var l = r.filter((function(e) {
                                    return /_mobile/.test(e.type)
                                })), o = 0; o < l.length; o += 1)
                                if (l[o].width > t) {
                                    a = l[o];
                                    break
                                }
                        if (!a)
                            for (var s = 0; s < r.length && !((a = r[s]).width > t); s += 1);
                    } catch (e) {
                        return null
                    }
                    return a
                };
            t.findRenditionOfBestFit = l;
            t.findRenditionOfBestFitUrl = function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = l(e, t, a);
                return i ? i.url : null
            };
            var o = function(e, t) {
                if (null == e ? void 0 : e.find) {
                    var a = e.find((function(e) {
                        return e.name === r.RATIOS[t]
                    }));
                    if (a) return a;
                    var i = e.find((function(e) {
                        return "MASTER" === e.name
                    }));
                    if (i) return i
                }
                return null
            };
            t.findCropsByRatio = o;
            t.findRenditionsByRatio = function(e, t) {
                var a = o(e, t);
                return (null == a ? void 0 : a.renditions) ? a.renditions : null
            };
            t.commonPrioritizedVideoRenditions = {
                smartphone: ["hlsfmp4_mobile", "hls_mobile", "hlsfmp4", "hls", "video_1080p_mp4_mobile", "video_720p_mp4_mobile", "video_480p_mp4_mobile", "video_360p_mp4_mobile", "video_240p_mp4_mobile"],
                tablet: ["hlsfmp4", "hls", "video_1080p_mp4", "video_720p_mp4", "video_480p_mp4", "video_360p_mp4", "video_240p_mp4"],
                desktop: ["hlsfmp4", "hls", "video_1080p_mp4", "video_720p_mp4", "video_480p_mp4", "video_360p_mp4", "video_240p_mp4"]
            }
        },
        oZ2M: function(e, t, a) {
            "use strict";
            var i = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.compoundBylineStyle = t.spanClass = t.BylineLink = void 0;
            var n = a("UmXO"),
                r = i(a("3NoI")),
                l = i(a("rV9i")),
                o = i(a("wXC7")),
                s = (0, l.default)("section", {
                    default: (0, n.css)("font-family:", o.default.font.franklinBase, ";font-weight:", o.default.font.weight.bold, ";color:", o.default.color.gray20, ";"),
                    magazine: (0, n.css)("font-family:", o.default.font.magazineSansBase, ";font-weight:", o.default.font.weight.bold, ";color:", o.default.color.black, ";"),
                    "t-magazine": (0, n.css)("font-family:", o.default.font.tmagSansBase, ";font-weight:", o.default.font.weight.medium, ";color:", o.default.color.gray20, ";")
                }),
                d = (0, r.default)("a", {
                    target: "e1jsehar0"
                })("display:inline;color:", o.default.color.gray20, ";span{text-decoration:underline;text-decoration-color:", o.default.color.gray50, ";}span{&:hover,&:focus{text-decoration:none;}}");
            t.BylineLink = d;
            var c = (0, n.css)("display:inline-block;");
            t.spanClass = c;
            var u = (0, n.css)("text-align:inherit;padding-right:12px;&:last-child{padding-right:0;}");
            t.compoundBylineStyle = u;
            var f = (0, r.default)("p", {
                target: "e1jsehar1"
            })("display:inline-block;letter-spacing:0.02em;font-size:", o.default.font.size(14), ";line-height:", o.default.font.size(18), ";margin:0;font-family:", o.default.font.franklinBase, ";font-weight:", o.default.font.weight.bold, ";color:", o.default.color.gray20, ";", (function(e) {
                return e.theme.breakpointMap.medium
            }), "{font-size:", o.default.font.size(15), ";line-height:", o.default.font.size(20), ";}", s, ";");
            t.default = f
        },
        tXdy: function(e, t, a) {
            "use strict";
            var i = a("284h"),
                n = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.interactiveShape = void 0;
            var r = n(a("lwsE")),
                l = n(a("W8MJ")),
                o = n(a("a1gu")),
                s = n(a("Nsbk")),
                d = n(a("7W2i")),
                c = i(a("q1tI")),
                u = n(a("17x9")),
                f = a("UmXO"),
                m = n(a("RG0N")),
                p = a("QgjT"),
                h = function(e) {
                    function t() {
                        var e, a;
                        (0, r.default)(this, t);
                        for (var i = arguments.length, n = new Array(i), l = 0; l < i; l++) n[l] = arguments[l];
                        return (a = (0, o.default)(this, (e = (0, s.default)(t)).call.apply(e, [this].concat(n)))).state = {}, a.htmlWrapperRef = function(e) {
                            if (a.props.manageScripts && e) {
                                var t = Array.prototype.slice.call(e.querySelectorAll("script"));
                                if (t.length) {
                                    var i = [];
                                    t.forEach((function(e) {
                                        i.push({
                                            html: e.innerHTML,
                                            src: e.getAttribute("src")
                                        }), e.parentNode.removeChild(e)
                                    })), a.setState({
                                        html: e.innerHTML
                                    }, (function() {
                                        i.forEach((function(t) {
                                            var a = t.html,
                                                i = t.src,
                                                n = document.createElement("script");
                                            n.innerHTML = a, i && (n.src = i), e.appendChild(n)
                                        }))
                                    }))
                                }
                            }
                        }, a
                    }
                    return (0, d.default)(t, e), (0, l.default)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.interactive,
                                a = e.maxWidth,
                                i = e.minWidth,
                                n = e.className,
                                r = e.children,
                                l = e.Header,
                                o = e.Footer,
                                s = e.enableInteractiveBridge,
                                d = t.slug,
                                u = t.sourceId,
                                h = this.state.html || t.html,
                                v = a ? "scoop" : "medium";
                            return c.default.createElement("section", {
                                id: d,
                                "data-id": u,
                                className: (0, f.cx)((0, p.sectionClass)({
                                    maxWidth: a,
                                    minWidth: i
                                }), n, "interactive-content interactive-size-".concat(v))
                            }, l, s ? c.default.createElement(m.default, {
                                className: (0, f.cx)(p.interactiveDivClass, "interactive-body"),
                                html: h,
                                id: u
                            }) : c.default.createElement("div", {
                                className: (0, f.cx)(p.interactiveDivClass, "interactive-body"),
                                ref: this.htmlWrapperRef,
                                dangerouslySetInnerHTML: {
                                    __html: h
                                }
                            }), o, r)
                        }
                    }]), t
                }(c.Component);
            h.displayName = "InlineInteractive";
            var v = u.default.shape({
                sourceId: u.default.string,
                leadin: u.default.string,
                note: u.default.string,
                kicker: u.default.string,
                firstPublished: u.default.string,
                updatedText: u.default.string,
                bylines: u.default.arrayOf(u.default.object),
                credit: u.default.string,
                dataSource: u.default.string,
                slug: u.default.string,
                html: u.default.string,
                displayProperties: u.default.shape({
                    maximumWidth: u.default.number,
                    minimumWidth: u.default.number,
                    displayForPromotionOnly: u.default.bool
                }),
                headline: u.default.shape({
                    default: u.default.string
                })
            });
            t.interactiveShape = v, h.defaultProps = {
                Header: null,
                Footer: null,
                interactive: {
                    html: null,
                    displayProperties: {},
                    headline: {
                        default: ""
                    }
                },
                className: "",
                children: [],
                maxWidth: 0,
                minWidth: 0,
                manageScripts: !1,
                enableInteractiveBridge: !1
            };
            var g = h;
            t.default = g
        },
        uW2s: function(e, t, a) {
            "use strict";
            var i = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.metaClass = t.footerClass = t.leadinClass = t.headlineClass = t.headerClass = void 0;
            var n = a("UmXO"),
                r = i(a("wXC7")),
                l = r.default.color,
                o = r.default.font,
                s = (0, n.css)("margin:0 0 1rem;");
            t.headerClass = s;
            var d = (0, n.css)("color:", l.gray10, ";font-family:", o.serifMedium, ";font-size:", o.size(21), ";font-weight:", o.weight.mediumBold, ";line-height:", o.size(24), ";margin-bottom:5px;");
            t.headlineClass = d;
            var c = (0, n.css)("color:", l.gray30, ";font-family:", o.serifBase, ";font-size:", o.size(15), ";line-height:", o.size(20), ";");
            t.leadinClass = c;
            var u = (0, n.css)("margin:10px auto 20px;max-width:100%;line-height:0;");
            t.footerClass = u;
            var f = (0, n.css)("margin:0;display:inline;color:", l.gray35, ";font-family:", o.serifBase, ";font-size:", o.size(12), ";line-height:", o.size(16), ";letter-spacing:0.01em;", r.default.breakpoint.large, "{font-size:", o.size(13), ";line-height:", o.size(17), ";}&:not(:last-child):after{content:'•';color:", l.gray60, ";margin:0 10px;font-size:10px;white-space:no-wrap;}");
            t.metaClass = f
        },
        vFws: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.COUNTRIES_ALLOWED_TO_WATCH_THE_WEEKLY = t.RATIOS = t.VIDEO_HEADER_LAYOUTS = void 0;
            t.VIDEO_HEADER_LAYOUTS = {
                MOBILE: "mobile",
                DESKTOP: "desktop"
            };
            t.RATIOS = {
                "1:1": "MEDIUM_SQUARE",
                "3:2": "THREE_BY_TWO",
                "2:3": "TWO_BY_THREE",
                "16:9": "SIXTEEN_BY_NINE",
                "15:7": "FIFTEEN_BY_SEVEN"
            };
            var i = Object.freeze(["US"]);
            t.COUNTRIES_ALLOWED_TO_WATCH_THE_WEEKLY = i
        },
        vOGy: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mediaStyle = void 0;
            var i = (0, a("3NoI").css)("position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;object-fit:cover;:after{content:'';display:block;background-color:transparent;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;min-height:50px;}");
            t.mediaStyle = i
        },
        x9rc: function(e, t, a) {
            "use strict";
            var i = a("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = c;
            var n = i(a("lSNA")),
                r = i(a("J4zp")),
                l = i(a("q1tI")),
                o = (i(a("17x9")), a("UmXO")),
                s = a("eUG7");

            function d(e) {
                for (var t = 1; t < arguments.length; t++)
                    if (t % 2) {
                        var a = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(a);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(a, e).enumerable
                        })))), i.forEach((function(t) {
                            (0, n.default)(e, t, a[t])
                        }))
                    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
                return e
            }

            function c() {
                var e, t, a, i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    c = n.ratio ? {
                        paddingBottom: "".concat(100 * (e = n.ratio, t = e.split(":"), a = (0, r.default)(t, 2), i = a[0], a[1] / i), "%")
                    } : {};
                return l.default.createElement("div", {
                    className: (0, o.cx)(s.aspectRatioOuterStyle, n.className),
                    style: d({
                        width: "100%"
                    }, c, {}, n.style)
                }, l.default.createElement("div", {
                    className: s.aspectRatioInnerStyle
                }, n.children))
            }
            c.displayName = "AspectRatio", c.defaultProps = {
                className: "",
                ratio: "16:9",
                style: {},
                children: null
            }
        }
    }
]);
//# sourceMappingURL=vendors~home-38ed02a5b0bf945efbf7.js.map