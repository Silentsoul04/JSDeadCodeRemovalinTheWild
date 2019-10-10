define(["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/react/arbor/birch/helpers/easings", "modules/core/i18n", "spectrum-arbor/atoms/arbor_grid_container", "spectrum-arbor/atoms/arbor_grid_element", "spectrum-arbor/atoms/arbor_headline", "spectrum-arbor/atoms/arbor_copy", "spectrum-arbor/atoms/arbor_button", "spectrum-arbor/atoms/arbor_aspect_box", "modules/clean/react/index/components/rebrand_navigation", "modules/clean/react/index/components/zeus_arrow_button", "modules/clean/react/index/store"], function(e, r, a, t, n, o, m, i, l, s, u, d, c, b, h, g) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), t = a.__importDefault(t);
    var p = (function(e) {
        function r() {
            var r = null !== e && e.apply(this, arguments) || this;
            return r.setContainerRef = function(e) {
                r.heroElement = e
            }, r.handleDrawer = function() {
                g.RebrandStore.dispatch({
                    type: "showDrawer"
                }), g.RebrandStore.dispatch({
                    type: "showSignUp"
                })
            }, r.handleScroll = function() {
                var e = "scrollBehavior" in document.documentElement.style,
                    a = r.heroElement,
                    t = a.offsetHeight - 90;
                if (e) window.scrollTo({
                    behavior: "smooth",
                    top: t
                });
                else {
                    var n = document.documentElement.scrollTop,
                        m = (new Date).getTime(),
                        i = function() {
                            var e = (new Date).getTime() - m,
                                r = o.easeInOutQuart({
                                    currentTime: e,
                                    beginningVal: n,
                                    changeVal: t - n,
                                    duration: 500
                                });
                            window.scrollTo(0, r), e <= 500 && window.requestAnimationFrame(i)
                        };
                    window.requestAnimationFrame(i)
                }
            }, r
        }
        return a.__extends(r, e), r.prototype.render = function() {
            var e = this.props,
                r = e.content,
                a = r.header,
                n = r.body,
                o = r.cta,
                g = e.navTheme,
                p = e.backgroundColor,
                f = e.headlineColor;
            return t.default.createElement("div", {
                className: "zeus-rebrand-hero",
                ref: this.setContainerRef
            }, t.default.createElement(b.RebrandNavigation, {
                theme: g
            }), t.default.createElement(i.ArborGridContainer, {
                alignment: "center",
                childSpacing: "flex-start",
                backgroundColor: p,
                verticalPaddingSize: {
                    base: "none"
                },
                widthType: "full"
            }, t.default.createElement(l.ArborGridElement, {
                columnWidth: {
                    base: 10,
                    medium: 12
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 2
                },
                marginRightColumns: {
                    base: 1,
                    medium: 10
                },
                marginBottomSize: {
                    base: "medium",
                    medium: "large"
                }
            }, t.default.createElement(s.ArborHeadline, {
                tag: "h3",
                className: "zeus-rebrand-hero__eyebrow",
                marginBottomSize: "small",
                color: f
            }, "Dropbox"), t.default.createElement(s.ArborHeadline, {
                tag: "h1",
                className: "zeus-rebrand-hero__headline",
                color: f
            }, a)), t.default.createElement(l.ArborGridElement, {
                columnWidth: {
                    base: 10,
                    medium: 9
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 2
                },
                marginRightColumns: {
                    base: 1,
                    medium: 13
                },
                marginBottomSize: {
                    base: "medium",
                    medium: "large"
                }
            }, t.default.createElement(u.ArborCopy, {
                color: "panda-white"
            }, n)), t.default.createElement(l.ArborGridElement, {
                columnWidth: {
                    base: 10,
                    medium: 9,
                    large: 0
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 2,
                    large: 0
                },
                marginRightColumns: {
                    base: 1,
                    medium: 13,
                    large: 0
                },
                marginBottomSize: "large"
            }, t.default.createElement(d.ArborButton, {
                className: "zeus-rebrand-hero__cta",
                theme: "panda-white",
                onClick: this.handleDrawer
            }, o)), t.default.createElement(l.ArborGridElement, {
                columnWidth: {
                    base: 10,
                    medium: 9
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 2
                },
                marginRightColumns: {
                    base: 1,
                    medium: 13
                }
            }, t.default.createElement(h.ZeusArrowButton, {
                ariaLabel: m._("waypoint"),
                className: "zeus-rebrand-hero__waypoint",
                onClick: this.handleScroll
            })), t.default.createElement(l.ArborGridElement, {
                columnWidth: {
                    base: 10,
                    medium: 20,
                    large: 12
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 2
                },
                marginRightColumns: {
                    base: 1,
                    medium: 2,
                    large: 10
                },
                className: "zeus-rebrand-hero__aspect-box"
            }, t.default.createElement(c.ArborAspectBox, {
                aspect: {
                    width: 860,
                    height: 537.5
                }
            }))))
        }, r
    })(t.default.PureComponent);
    r.ZeusRebrandHero = n.requireCssWithComponent(p, ["/static/css/index/planks/zeus_rebrand_hero-vfl7JfmfH.css"])
});
//# sourceMappingURL=zeus_rebrand_hero.min.js-vflxzlXDD.map