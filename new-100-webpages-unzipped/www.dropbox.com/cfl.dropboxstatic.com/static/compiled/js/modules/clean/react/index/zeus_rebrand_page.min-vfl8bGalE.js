define(["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css", "modules/clean/web_timing_logger", "modules/clean/react/async/loadable", "modules/clean/react/index/components/rebrand_mobile_navigation", "modules/clean/react/index/components/rebrand_footer_plane", "modules/clean/react/index/planks/product_tour", "modules/clean/react/index/planks/zeus_rebrand_hero", "modules/clean/react/index/planks/zeus_rebrand_sub_hero", "modules/clean/react/index/planks/zeus_rebrand_pre_footer", "modules/clean/react/index/planks/zeus_rebrand_sidekick", "modules/clean/react/index/rebrand_page", "modules/clean/react/index/store"], function(e, n, t, r, a, o, s, d, i, l, c, u, p, m, h, b, f) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), r = t.__importDefault(r), a = t.__importDefault(a), s = t.__importStar(s);
    var _ = d.Loadable({
            loader: function() {
                return s.waitForTTI().then(function() {
                    return new Promise(function(n, t) {
                        e(["modules/clean/react/index/components/rebrand_footer_plane"], n, t)
                    }).then(t.__importStar).then(function(e) {
                        return e.RebrandFooterPlane
                    })
                })
            }
        }),
        g = (function(e) {
            function n(n) {
                var t = e.call(this, n) || this;
                return t.handleEvents = function(e) {
                    e.stopPropagation();
                    var n = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body).scrollTop,
                        t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    window.innerWidth >= 1023 && n >= .33 * t && f.RebrandStore.dispatch({
                        type: "hideDrawer"
                    })
                }, t.state = {
                    showMobileNav: !1
                }, window.innerWidth < 1024 && f.RebrandStore.dispatch({
                    type: "hideDrawer"
                }), t
            }
            return t.__extends(n, e), n.prototype.componentWillMount = function() {
                var e = this;
                f.RebrandStore.dispatch({
                    type: "setExperiments",
                    experiments: this.props.experiments
                }), f.RebrandStore.dispatch({
                    type: "setGates",
                    gates: this.props.gates
                }), f.RebrandStore.subscribe(function() {
                    return e.setState({
                        showMobileNav: f.RebrandStore.getState().mobileNav
                    })
                })
            }, n.prototype.componentDidMount = function() {
                var e = this.props.experiments.expDiscoChat;
                "V1" === e && b.discoChatUpdateURI(), b.showOrLogChat(e)
            }, n.prototype.render = function() {
                var e = this.props,
                    n = e.content,
                    t = e.gates,
                    o = e.isEdge,
                    s = e.isInternetExplorer,
                    d = e.footerContent;
                return a.default.createElement("main", {
                    className: r.default({
                        IndexZeusRebrandPage: !0,
                        "AtlasGrotesk-Regular-Web": !0,
                        "ob-type": !0,
                        "IndexZeusRebrandPage-mobile__visible": this.state.showMobileNav,
                        "IndexZeusRebrandPage-browser__internet-explorer": s,
                        "IndexZeusRebrandPage-browser__edge": o
                    }),
                    onClick: this.handleEvents
                }, this.state.showMobileNav && a.default.createElement(i.RebrandMobileNavigation, null), a.default.createElement(u.ZeusRebrandHero, {
                    content: n.hero,
                    backgroundColor: "sapphire",
                    headlineColor: "french-vanilla",
                    navTheme: "sapphire-french-vanilla"
                }), a.default.createElement(p.ZeusRebrandSubHero, {
                    content: n.subHero,
                    backgroundColor: "french-vanilla",
                    headlineColor: "sapphire",
                    navTheme: "french-vanilla"
                }), a.default.createElement(c.ProductTour, {
                    content: n.productTour,
                    isInternetExplorer: s
                }), a.default.createElement(m.ZeusRebrandPreFooter, {
                    content: n.preFooter,
                    backgroundColor: "sapphire",
                    headlineColor: "french-vanilla",
                    buttonTheme: "panda-white",
                    navTheme: "sapphire-french-vanilla"
                }), a.default.createElement(h.ZeusRebrandSidekick, {
                    content: n.sidekick
                }), !t.seoFooter && a.default.createElement(_, {
                    theme: "blackened",
                    footerContent: d,
                    homePreloadJsInHomepage: t.homePreloadJsInHomepage
                }), t.seoFooter && a.default.createElement(l.RebrandFooterPlane, {
                    theme: "blackened",
                    footerContent: d,
                    homePreloadJsInHomepage: t.homePreloadJsInHomepage
                }))
            }, n
        })(a.default.Component);
    n.IndexZeusRebrandPage = o.requireCssWithComponent(g, ["/static/css/index/rebrand_page-vflLg_VeF.css", "/static/css/index/zeus_rebrand_page-vflMd42Yn.css"])
});
//# sourceMappingURL=zeus_rebrand_page.min.js-vflfmIDNL.map