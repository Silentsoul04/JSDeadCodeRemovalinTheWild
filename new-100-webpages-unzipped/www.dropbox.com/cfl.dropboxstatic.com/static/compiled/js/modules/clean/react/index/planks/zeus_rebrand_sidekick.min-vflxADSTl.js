define(["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/react/index/components/rebrand_navigation", "spectrum-arbor/atoms/arbor_button", "spectrum-arbor/atoms/arbor_grid_element", "spectrum-arbor/atoms/arbor_grid_container", "spectrum-arbor/atoms/arbor_headline"], function(e, t, r, n, a, i, l, o, d, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var s;
    (function(e) {
        e.INDIVIDUAL = "individual", e.TEAM = "team"
    })(s || (s = {}));
    var c = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.renderSection = function(e, r) {
                var a = t.props.content[e],
                    i = a.heading,
                    d = a.cta;
                return n.default.createElement(o.ArborGridElement, {
                    key: i,
                    className: "sidekick-section",
                    columnWidth: {
                        base: 10,
                        medium: 12,
                        large: 9
                    },
                    marginLeftColumns: {
                        base: 1,
                        medium: 2
                    },
                    marginTopSize: r ? "none" : {
                        base: "large",
                        medium: "xl",
                        large: "none"
                    }
                }, n.default.createElement(m.ArborHeadline, {
                    tag: "h2",
                    className: "sidekick-section__heading",
                    marginBottomSize: {
                        base: "small",
                        medium: "large"
                    }
                }, i), n.default.createElement(l.ArborButton, {
                    href: d.href,
                    trackingId: d.trackingId
                }, d.text))
            }, t
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this;
            return n.default.createElement(d.ArborGridContainer, {
                containerRelative: !0,
                direction: "column",
                alignment: "flex-start",
                widthType: "full",
                verticalPaddingSize: {
                    base: "xxl",
                    medium: "xxxl"
                }
            }, n.default.createElement(i.RebrandNavigation, null), n.default.createElement(o.ArborGridElement, {
                className: "sidekick-headline",
                columnWidth: {
                    base: 10,
                    medium: 16,
                    large: 12
                },
                marginLeftColumns: {
                    base: 1,
                    medium: 2
                },
                marginBottomSize: {
                    base: "medium",
                    medium: "large"
                }
            }, n.default.createElement(m.ArborHeadline, {
                className: "sidekick-headline__text",
                tag: "h2"
            }, this.props.content.headline)), n.default.createElement(o.ArborGridElement, null, n.default.createElement(d.ArborGridContainer, {
                direction: {
                    base: "column",
                    large: "row"
                },
                alignment: "flex-start",
                childSpacing: "flex-start",
                widthType: "full",
                verticalPaddingSize: "none"
            }, [s.INDIVIDUAL, s.TEAM].map(function(t, r) {
                return e.renderSection(t, 0 === r)
            }))))
        }, t
    })(n.default.PureComponent);
    t.ZeusRebrandSidekickComponent = c, t.ZeusRebrandSidekick = a.requireCssWithComponent(c, ["/static/css/index/planks/zeus_rebrand_sidekick-vfl4PwtNs.css"])
});
//# sourceMappingURL=zeus_rebrand_sidekick.min.js-vfloKm86p.map