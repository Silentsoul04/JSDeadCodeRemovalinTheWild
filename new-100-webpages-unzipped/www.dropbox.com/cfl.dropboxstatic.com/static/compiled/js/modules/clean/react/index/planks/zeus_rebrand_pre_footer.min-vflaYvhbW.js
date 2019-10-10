define(["require", "exports", "tslib", "react", "spectrum-arbor/atoms/arbor_grid_container", "spectrum-arbor/atoms/arbor_grid_element", "modules/clean/react/growth_pages/planks/pre_footer", "modules/clean/react/index/components/rebrand_navigation"], function(e, t, r, n, a, o, i, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var m = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.content,
                m = t.headline,
                u = t.cta,
                d = t.ctaSubtext,
                s = e.backgroundColor,
                c = e.headlineColor,
                b = e.textColor,
                f = e.buttonTheme,
                g = e.navTheme;
            return n.default.createElement(a.ArborGridContainer, {
                alignment: "flex-start",
                backgroundColor: s,
                containerRelative: !0,
                verticalPaddingSize: {
                    base: "xxl",
                    medium: "xxxl"
                },
                widthType: "full"
            }, n.default.createElement(l.RebrandNavigation, {
                theme: g
            }), n.default.createElement(o.ArborGridElement, {
                columnWidth: {
                    base: 10,
                    medium: 12
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 3
                },
                marginRightColumns: {
                    base: 1,
                    medium: 1
                }
            }, n.default.createElement(i.PreFooterLeftSection, r.__assign({}, {
                headline: m,
                headlineColor: c
            }))), n.default.createElement(o.ArborGridElement, {
                columnWidth: {
                    base: 10,
                    medium: 5
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 0
                },
                marginRightColumns: {
                    base: 1,
                    medium: 3
                },
                alignment: {
                    base: "flex-start",
                    medium: "flex-end"
                },
                marginTopSize: {
                    base: "medium",
                    medium: "none"
                }
            }, n.default.createElement(i.PreFooterRightSection, r.__assign({}, {
                cta: u,
                ctaSubtext: d,
                textColor: b,
                buttonTheme: f
            }))))
        }, t
    })(n.default.PureComponent);
    t.ZeusRebrandPreFooter = m
});
//# sourceMappingURL=zeus_rebrand_pre_footer.min.js-vfl5eIlcx.map