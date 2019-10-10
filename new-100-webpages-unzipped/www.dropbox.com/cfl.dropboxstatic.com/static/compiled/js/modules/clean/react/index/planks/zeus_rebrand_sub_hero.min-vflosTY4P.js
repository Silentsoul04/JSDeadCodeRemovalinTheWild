define(["require", "exports", "tslib", "react", "modules/clean/react/css", "spectrum-arbor/atoms/arbor_grid_container", "spectrum-arbor/atoms/arbor_grid_element", "spectrum-arbor/atoms/arbor_headline", "spectrum-arbor/atoms/arbor_copy", "spectrum-arbor/atoms/arbor_aspect_box", "modules/clean/react/index/components/rebrand_navigation", "modules/clean/react/image"], function(e, r, a, t, n, o, m, i, l, s, u, d) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), t = a.__importDefault(t);
    var c = (function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return a.__extends(r, e), r.prototype.render = function() {
            var e = this.props,
                r = e.content,
                a = r.header,
                n = r.body,
                c = r.imgSrc,
                b = r.imgSrcHiRes,
                g = e.navTheme,
                p = e.backgroundColor,
                h = e.headlineColor;
            return t.default.createElement(o.ArborGridContainer, {
                alignment: "center",
                backgroundColor: p,
                topPaddingSize: "none",
                bottomPaddingSize: {
                    base: "xl",
                    medium: "xxl",
                    large: "xxxl"
                },
                widthType: "full",
                className: "zeus-rebrand-sub-hero"
            }, t.default.createElement(u.RebrandNavigation, {
                theme: g
            }), t.default.createElement(m.ArborGridElement, {
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
                    large: 1
                },
                marginBottomSize: "large",
                className: "zeus-rebrand-sub-hero__image"
            }, t.default.createElement(s.ArborAspectBox, {
                aspect: {
                    width: 860,
                    height: 537.5
                },
                content: t.default.createElement(d.Image, {
                    src: c,
                    srcHiRes: b
                })
            })), t.default.createElement(m.ArborGridElement, {
                columnWidth: {
                    base: 10,
                    medium: 10,
                    large: 6
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 2,
                    large: 1
                },
                marginRightColumns: {
                    base: 1,
                    medium: 2
                }
            }, t.default.createElement(i.ArborHeadline, {
                tag: "h3",
                color: h,
                marginBottomSize: "small"
            }, a), t.default.createElement(l.ArborCopy, {
                color: "panda-black"
            }, n)))
        }, r
    })(t.default.PureComponent);
    r.ZeusRebrandSubHero = n.requireCssWithComponent(c, ["/static/css/index/planks/zeus_rebrand_sub_hero-vflXrHzJn.css"])
});
//# sourceMappingURL=zeus_rebrand_sub_hero.min.js-vflPWB8xB.map