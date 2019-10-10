define("modules/clean/payments/snapengage", ["require", "exports", "tslib", "jquery", "modules/clean/web_timing_logger", "modules/core/exception", "modules/clean/web_timing_logger", "modules/core/uri"], function(e, r, t, s, n, o, a, i) {
    "use strict";

    function l(r) {
        n.waitForTTI().then(function() {
            var n = new i.URI({
                path: "/business/ajax_fetch_snapengage_params"
            });
            s.ajax(String(n), {
                method: "GET",
                success: function(s) {
                    var n;
                    try {
                        n = JSON.parse(s)
                    } catch (e) {
                        return void o.reportException({
                            err: e,
                            severity: o.SEVERITY.CRITICAL,
                            tags: ["retain-expand"]
                        })
                    }
                    new Promise(function(r, t) {
                        e(["modules/clean/snapengage"], r, t)
                    }).then(t.__importStar).then(function(e) {
                        var s = e.DropboxSnapEngage;
                        s.registerExperiments(n.experiments), s.init(t.__assign({}, n.params, r || {}))
                    })
                },
                error: function(e, r, t) {
                    o.reportException({
                        err: new Error("Failed to load snapengage parameters (status: " + r + ", message: " + t + ")"),
                        severity: o.SEVERITY.CRITICAL,
                        tags: ["retain-expand"]
                    })
                }
            })
        })
    }

    function u(r, s, n) {
        a.waitForTTI().then(function() {
            new Promise(function(r, t) {
                e(["modules/clean/stormcrow/stormcrow_exposure_logger"], r, t)
            }).then(t.__importStar).then(function(e) {
                var t = e.StormcrowExposureLogger;
                window.setTimeout(function() {
                    (new t).logExposure(r, s)
                }, 1e3 * n)
            })
        })
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), s = t.__importStar(s), o = t.__importStar(o), a = t.__importStar(a);
    (function(e) {
        e.DiscoverExperiment = "DISCOVER_EXPERIMENT", e.Test = "TEST", e.Default = "DEFAULT"
    })(r.ProactiveIdKeys || (r.ProactiveIdKeys = {}));
    (function(e) {
        e.DiscoConsumerHP = "growth_disco_chat_consumer_hp", e.DiscoBizHP = "growth_disco_chat_bizip_hp", e.DiscoPlans = "growth_db_plans_web_chat"
    })(r.ChatExperiments || (r.ChatExperiments = {})), r.ajaxFetchAndLoadSnapengageParams = l, r.logChatExposureTimed = u
}), define("modules/clean/react/business/components/headers/biz_standard_header", ["require", "exports", "tslib", "react", "modules/constants/trademark", "modules/core/i18n", "modules/clean/react/arbor/aspen/elements/arbor_supernav", "modules/clean/react_format", "modules/clean/analytics"], function(e, r, t, s, n, o, a, i, l) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), s = t.__importDefault(s);
    var u = (function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return t.__extends(r, e), r.prototype.getCTA = function() {
            if (!this.props.disableTry) {
                var e = this.props,
                    r = e.isTryItFree,
                    t = e.trialDays,
                    s = e.isLegacy,
                    n = o._("Try free for %(trial_days)d days").format({
                        trial_days: t
                    }),
                    a = "/business/try";
                (r || s) && (n = o._("Try it free")), s && (a = "/business/try?_tk=picard&_camp=picard-bar");
                return {
                    title: n,
                    url: a,
                    trackingId: "biz_nav_try"
                }
            }
        }, r.prototype.getNavLinks = function() {
            var e = this.props,
                r = e.locale,
                t = e.disableSnapengage,
                a = e.phoneNumber;
            return e.isLegacy ? [{
                url: "/ftp",
                title: o._("FTP")
            }, {
                url: "/email-file-sharing",
                title: o._("Email")
            }, {
                url: "/vpn",
                title: o._("VPN")
            }, {
                url: "/storage-devices",
                title: o._("Storage devices")
            }] : [{
                title: o._("Pricing"),
                url: "/business/pricing",
                trackingId: "biz_nav_px"
            }, {
                title: o._("Compare plans"),
                url: "/business/plans-comparison",
                trackingId: "biz_nav_compare"
            }, {
                title: o._("Features"),
                url: "/business/tour",
                trackingId: "biz_nav_features"
            }, {
                title: i.reactFormat(o._("Learn more <span>about %(trademark_business)s</span>", {
                    comment: 'This string appears in the Business header. "about Dropbox Business" will only show for visually-impaired users. This will be uniquely translated for JP'
                }), {
                    span: s.default.createElement("span", {
                        className: "ax-visually-hidden"
                    }),
                    trademark_business: n.TRADEMARK_BUSINESS
                }),
                children: [{
                    title: o._("Security"),
                    url: "/business/trust"
                }, {
                    title: o._("Customers"),
                    url: "/business/customers"
                }, {
                    title: o._("App integrations"),
                    url: "/business/app-integrations"
                }, {
                    title: o._("Solutions"),
                    url: "/business/solutions"
                }, {
                    title: o._("Events & webinars"),
                    url: "/business/events-webinars",
                    disabled: !("en" === r || "en_GB" === r)
                }, {
                    title: o._("FAQs"),
                    url: "/business/faqs"
                }]
            }, {
                title: o._("Contact sales"),
                children: [{
                    title: o._("Chat"),
                    url: "#",
                    type: "chat",
                    disabled: t
                }, {
                    title: o._("Email"),
                    url: "/business/contact",
                    type: "email"
                }, {
                    title: "%(phone_number)s".format({
                        phone_number: a
                    }),
                    url: "tel:%(phone_number)s".format({
                        phone_number: a
                    }),
                    type: "phone",
                    disabled: !a
                }]
            }]
        }, r.prototype.onDropdownClick = function(e) {
            l.TeamsWebActionsLogger.log("business_nav_dropdown_click", {
                title: e
            })
        }, r.prototype.render = function() {
            return s.default.createElement(a.ArborSuperNav, {
                className: this.props.className,
                fixed: !0,
                leftAlignLogo: !0,
                navLinksRight: this.getNavLinks(),
                navCTA: this.getCTA(),
                logoPlatform: "business",
                overlay: this.props.deferNavUntilScroll ? "dark" : null,
                glyph: this.props.glyph,
                wordmark: this.props.wordmark,
                onDropdownClick: this.onDropdownClick
            })
        }, r
    })(s.default.Component);
    r.BizStandardHeader = u
}), define("modules/clean/react/business/components/headers/logged_in_header", ["require", "exports", "tslib", "react", "modules/clean/react/arbor/aspen/elements/arbor_logo", "modules/clean/react/arbor/aspen/elements/arbor_supernav", "modules/clean/viewer", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, r, t, s, n, o, a, i, l) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), s = t.__importDefault(s);
    var u = i.Loadable({
            loader: function() {
                return l.waitForTTI().then(function() {
                    return new Promise(function(r, t) {
                        e(["modules/clean/react/arbor/aspen/elements/arbor_account_menu"], r, t)
                    }).then(t.__importStar).then(function(e) {
                        return e.ArborAccountMenu
                    })
                })
            }
        }),
        p = (function(e) {
            function r() {
                var r = null !== e && e.apply(this, arguments) || this;
                return r.viewer = a.Viewer.get_viewer(), r.user = r.viewer.is_work_user_signed_in ? r.viewer.work_user : r.viewer.personal_user, r
            }
            return t.__extends(r, e), r.prototype.render = function() {
                var e;
                if (this.props.logoUrl) {
                    var r = n.generatePlatformMap(this.props.glyph, this.props.wordmark);
                    e = r.business, this.props.logoPlatform && this.props.logoPlatform in r && (e = r[this.props.logoPlatform]), e = t.__assign({}, e), e.url = this.props.logoUrl
                }
                return s.default.createElement(o.ArborSuperNav, {
                    accountMenu: this.user && s.default.createElement(u, {
                        user: this.user,
                        viewer: this.viewer
                    }),
                    className: this.props.className,
                    customPlatform: e,
                    fixed: this.props.fixed,
                    glyph: this.props.glyph,
                    logoPlatform: this.props.logoPlatform || "business",
                    logoGlyphOnly: !0,
                    noShadow: !!this.props.noShadow,
                    wordmark: this.props.wordmark,
                    leftAlignLogo: this.props.leftAlignLogo,
                    transparentBackground: !!this.props.transparentBackground
                })
            }, r
        })(s.default.Component);
    r.LoggedInHeader = p
});
//# sourceMappingURL=pkg-business-common.min.js-vflRcNVqg.map