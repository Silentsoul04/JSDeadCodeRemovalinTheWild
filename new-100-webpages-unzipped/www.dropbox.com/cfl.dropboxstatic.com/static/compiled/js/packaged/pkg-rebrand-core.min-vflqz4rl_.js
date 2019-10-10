define("modules/clean/react/rebrand/elements/device_size", ["require", "exports"], function(e, t) {
    "use strict";

    function o() {
        return window.screen.width <= 599 ? window.devicePixelRatio >= 1.6 ? n.PhoneHiRes : n.Phone : window.screen.width <= 899 ? window.devicePixelRatio >= 1.6 ? n.TabletHiRes : n.Tablet : window.devicePixelRatio >= 1.6 ? n.DesktopHiRes : n.Desktop
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    (function(e) {
        e[e.Phone = 0] = "Phone", e[e.PhoneHiRes = 1] = "PhoneHiRes", e[e.Tablet = 2] = "Tablet", e[e.TabletHiRes = 3] = "TabletHiRes", e[e.Desktop = 4] = "Desktop", e[e.DesktopHiRes = 5] = "DesktopHiRes"
    })(n = t.DeviceSize || (t.DeviceSize = {}));
    t.getDeviceSize = o
}), define("modules/clean/react/rebrand/elements/inline_video", ["require", "exports", "tslib", "react", "external/react-dom", "external/classnames", "modules/core/uri", "modules/clean/react/css", "modules/clean/react/rebrand/elements/device_size", "modules/clean/raf_throttle", "modules/clean/static_urls"], function(e, t, o, n, r, i, s, a, l, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r), i = o.__importDefault(i);
    var u = (function(e) {
        function a(o) {
            var n = e.call(this, o) || this;
            return n.percentBeforePlaying = n.props.percentBeforePlaying ? n.props.percentBeforePlaying : 30, n.state = {
                hasMounted: !1
            }, n.filenameWithoutExtension = function(e) {
                return n.hasRetina(e) ? e.split("@2x.").slice(0, -1).join(".") : e.indexOf(".") === -1 ? e : e.split(".").slice(0, -1).join(".")
            }, n.fileExtension = function(e) {
                var t = ".";
                n.hasRetina(e) && (t = "@2x.");
                var o = e.split(t),
                    r = e.length > 0 && "." === e[0],
                    i = e.indexOf(t) === -1;
                r && (i = o.length <= 2);
                var s = o.pop();
                return s && !i ? s.toLowerCase() : ""
            }, n.bindVideoAndMakeItPlaysInline = function(e) {
                e && (e.setAttribute("webkit-playsinline", "playsinline"), e.playsInline = !0, n.video = e)
            }, n.videoElementIsVisible = function() {
                if (!n.props.play) return !1;
                if (n.props.forcePlay) return !0;
                var e = r.findDOMNode(n).getBoundingClientRect(),
                    t = e.height,
                    o = e.top,
                    i = e.bottom,
                    s = Math.floor(t * n.percentBeforePlaying / 100),
                    a = Math.floor(window.innerHeight * (100 - n.percentBeforePlaying) / 100),
                    l = i > s,
                    c = o < a;
                return t > window.innerHeight ? l || c : l && c
            }, n.togglePauseBasedOnVisibility = function() {
                if (!n.state.prefersReducedMotion) {
                    var e = !!n.state.clickPause || !n.videoElementIsVisible();
                    n.setState({
                        pause: e
                    })
                }
            }, n.handleClickPause = function(e) {
                return function() {
                    var t = n.state.timerId;
                    if (t && window.clearTimeout(t), e) n.setState({
                        fadeOutButton: !1
                    });
                    else {
                        var o = window.setTimeout(function() {
                            n.setState({
                                fadeOutButton: !0
                            })
                        }, 1e3);
                        n.setState({
                            timerId: o
                        })
                    }
                    n.setState({
                        pause: e,
                        clickPause: e
                    })
                }
            }, n.videoSrc = function() {
                var e = n.props,
                    t = e.phoneSrc,
                    o = e.phoneHiResSrc,
                    r = e.tabletSrc,
                    i = e.tabletHiResSrc,
                    s = e.desktopSrc,
                    a = e.desktopHiResSrc;
                switch (n.state.deviceSize) {
                    case l.DeviceSize.PhoneHiRes:
                        return o || t || r || s;
                    case l.DeviceSize.Phone:
                        return t || r || s;
                    case l.DeviceSize.TabletHiRes:
                        return i || r || s;
                    case l.DeviceSize.Tablet:
                        return r || s;
                    case l.DeviceSize.DesktopHiRes:
                        return a || s;
                    default:
                        return s
                }
            }, n.localePostfix = function(e) {
                var t = n.props,
                    o = t.locale,
                    r = t.staticContentHost,
                    i = e;
                if (n.shouldAddLocale()) {
                    var a = n.filenameWithoutExtension(e),
                        l = n.fileExtension(e);
                    i = n.hasRetina(e) ? a + "-" + o + "@2x." + l : a + "-" + o + "." + l
                }
                return r ? new s.URI({
                    scheme: "https",
                    authority: r,
                    path: "/" + i
                }).toString() : i
            }, n.shouldAddLocale = function() {
                var e = n.props,
                    o = e.locale,
                    r = e.localeDefaultToEn;
                return !(!o || t.InlineVideo.NON_LOCALE_MAP.indexOf(o) !== -1 || !r || r.indexOf(o) !== -1)
            }, n.hasRetina = function(e) {
                return !!~e.indexOf("@2x.")
            }, n.scrollThrottle = new c.RafThrottle(n.togglePauseBasedOnVisibility), n
        }
        return o.__extends(a, e), a.prototype.componentDidMount = function() {
            var e = window.matchMedia("(prefers-reduced-motion)").matches;
            this.setState({
                deviceSize: l.getDeviceSize(),
                fadeOutButton: !1,
                hasMounted: !0,
                pause: e,
                prefersReducedMotion: e
            }), e || window.addEventListener("scroll", this.scrollThrottle.request)
        }, a.prototype.componentWillUnmount = function() {
            window.removeEventListener("scroll", this.scrollThrottle.request)
        }, a.prototype.componentDidUpdate = function(e, t) {
            var o = this;
            this.state.hasMounted && (this.props.reset && !e.reset && (this.video.currentTime = 0), this.props.play || t.hasMounted ? !this.props.play && e.play ? this.video.pause() : this.props.play && !e.play ? this.video.play() : this.state.pause ? this.video.pause() : this.video.play() : window.requestAnimationFrame(function() {
                o.props.play || o.video.pause()
            }))
        }, a.prototype.render = function() {
            return n.default.createElement("div", {
                className: "inline-video--wrapper"
            }, this.renderVideo())
        }, a.prototype.renderVideo = function() {
            if (!this.state.hasMounted) return null;
            var e = this.props,
                t = e.loop,
                o = e.poster,
                r = e.description,
                s = e.onEnd,
                a = e.hideButtonOverlay,
                c = this.state,
                u = c.clickPause,
                p = c.prefersReducedMotion,
                f = c.fadeOutButton,
                m = c.deviceSize,
                h = this.localePostfix(this.videoSrc()),
                v = "RebrandMedia-media",
                _ = u ? "Play" : "Pause",
                b = d.static_url("/static/images/growth/svgs/" + _ + ".svg"),
                y = v + "-isClick" + _,
                P = f ? v + "--button--fade" : null,
                g = m === l.DeviceSize.Phone || m === l.DeviceSize.PhoneHiRes,
                R = p || g || !!a,
                S = n.default.createElement("button", {
                    tabIndex: 0,
                    title: _,
                    className: i.default(v + "--button", P),
                    onClick: this.handleClickPause(!u)
                }, n.default.createElement("img", {
                    alt: _,
                    src: b
                }));
            return n.default.createElement("figure", {
                "aria-hidden": "true",
                className: i.default(v + "--figure", y)
            }, n.default.createElement("video", {
                "aria-hidden": "true",
                className: i.default(v + "--video", this.props.className),
                muted: !0,
                autoPlay: !0,
                loop: t,
                onEnded: s,
                poster: o,
                ref: this.bindVideoAndMakeItPlaysInline,
                src: h,
                tabIndex: -1
            }), R ? null : S, n.default.createElement("figcaption", {
                "aria-hidden": "true",
                className: "ax-visually-hidden"
            }, r))
        }, a.NON_LOCALE_MAP = ["en"], a.defaultProps = {
            description: "",
            forcePlay: !1,
            hideButtonOverlay: !1,
            play: !0,
            loop: !0,
            locale: "en",
            localeDefaultToEn: []
        }, a
    })(n.default.PureComponent);
    t.InlineVideo = a.requireCssWithComponent(u, ["/static/css/components/inline_video-vflsdPJtZ.css"])
}), define("modules/clean/react/rebrand/elements/rebrand_arbor_footer_component", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css", "modules/clean/react/locale_selector", "modules/core/i18n"], function(e, t, o, n, r, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r);
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.renderLinkItem = function(e) {
            return r.default.createElement("li", {
                key: e.label,
                className: "footer__link-list-item"
            }, r.default.createElement("a", {
                href: e.href,
                className: "footer__link"
            }, e.label))
        }, t.prototype.renderSectionListItem = function(e) {
            for (var t = [], o = 0, n = e.links; o < n.length; o++) {
                var i = n[o];
                i && i.label && i.href && t.push(this.renderLinkItem(i))
            }
            return r.default.createElement("li", {
                key: e.section,
                className: "footer__group-list-item"
            }, r.default.createElement("div", {
                className: "footer__headline"
            }, e.section), r.default.createElement("ul", {
                className: "footer__link-list"
            }, t))
        }, t.prototype.renderList = function() {
            for (var e = [], t = 0, o = this.props.content; t < o.length; t++) {
                var n = o[t];
                e.push(this.renderSectionListItem(n))
            }
            return r.default.createElement("ul", {
                className: "footer__group-list"
            }, e)
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.backgroundColor,
                o = e.textColor,
                i = n.default({
                    footer: !0
                }),
                a = {
                    backgroundColor: t,
                    color: o
                },
                l = {
                    borderBottom: "1px solid " + o
                };
            return r.default.createElement("section", {
                className: i,
                style: a
            }, r.default.createElement("div", {
                className: "footer__container"
            }, this.renderList(), r.default.createElement("div", {
                className: "footer__sub-footer"
            }, r.default.createElement("div", {
                className: "footer__border",
                style: l
            }), this.props.localeSelectorWithoutCss ? r.default.createElement(s.LocaleSelectorWithoutCss, {
                isRebrand: !0
            }) : r.default.createElement(s.LocaleSelector, {
                isRebrand: !0
            }))))
        }, t.defaultProps = {
            backgroundColor: "black",
            textColor: "white"
        }, t
    })(r.default.Component);
    t.RebrandArborFooterComponent = l, t.RebrandArborFooter = i.requireCssWithComponent(l, ["/static/css/components/react_locale_selector-vflyHsPEh.css", "/static/css/font_atlas_grotesk-vfldINMge.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css", "/static/css/modal-vflKK1XSJ.css", "/static/css/rebrand/elements/footer-vflE8nCIA.css"]);
    var c = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = n.default({
                footer: !0,
                "footer--minimal": !0
            });
            return r.default.createElement("section", {
                className: e
            }, r.default.createElement("a", {
                href: "/privacy",
                className: "footer__link"
            }, a._("Terms & Privacy")), this.props.localeSelectorWithoutCss ? r.default.createElement(s.LocaleSelectorWithoutCss, {
                isRebrand: !0
            }) : r.default.createElement(s.LocaleSelector, {
                isRebrand: !0
            }))
        }, t
    })(r.default.PureComponent);
    t.RebrandArborMinimalFooterComponent = c, t.RebrandArborMinimalFooter = i.requireCssWithComponent(c, ["/static/css/components/react_locale_selector-vflyHsPEh.css", "/static/css/rebrand/elements/footer-vflE8nCIA.css", "/static/css/font_atlas_grotesk-vfldINMge.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css", "/static/css/modal-vflKK1XSJ.css"])
});
//# sourceMappingURL=pkg-rebrand-core.min.js-vflqF9hR0.map