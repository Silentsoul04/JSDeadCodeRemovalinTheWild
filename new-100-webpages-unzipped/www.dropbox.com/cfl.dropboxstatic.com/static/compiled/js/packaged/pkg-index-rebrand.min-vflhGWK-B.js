define("modules/clean/index_rebrand", ["require", "exports", "modules/core/i18n", "modules/clean/raf_throttle", "modules/clean/auth_event_logger", "modules/clean/analytics", "modules/clean/react/index/store"], function(e, t, n, a, r, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = (function() {
        function e(e) {
            var t = this;
            if (void 0 === e && (e = !1), this.closeDrawerId = "close-panel", this.drawerClassName = "RebrandHero-drawer", this.closeDrawerClassName = "RebrandHero-drawer--closed", this.drawerSlidePixelBreakpoint = 1023, this.drawerToModalBreakpoint = 1024, this.signUpOrInLinkId = "sign-up-in", this.signInFormClassName = "signin-form", this.registerFormClassName = "register-form", this.rootElement = document.getElementsByTagName("html")[0], this.signInLinkId = "sign-in-link", this.signUpLinkId = "sign-up-link", this.triggered = !1, this.closePanel = document.getElementById(this.closeDrawerId), this.previousFocus = null, this.expSubgrowthProAXHomepage = !1, this.windowHeightBreakpoint = function(e) {
                    var t = .33 * e;
                    return Math.max(t, 330)
                }, this.maybeToggleDrawer = function() {
                    var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    if (!(e < t.drawerToModalBreakpoint)) {
                        var n = document.getElementsByTagName("iframe");
                        if (n && n.length <= 10)
                            for (var a = 0; a <= n.length; a++) {
                                var r = n[a];
                                if (r && "recaptcha challenge" === r.title && r && r.parentElement && r.parentElement.parentElement) {
                                    var o = r.parentElement.parentElement;
                                    if ("visible" === o.style.visibility) return
                                }
                            }
                        var s = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body).scrollTop,
                            d = !1;
                        e > t.drawerSlidePixelBreakpoint && (s <= t.windowHeightBreakpoint(e) && (d = !0), i.RebrandStore.dispatch({
                            type: d === !0 ? "showDrawer" : "hideDrawer"
                        }), t.closePanel.classList.add("animation-delay"), t.closePanel.classList.remove("button--visible"), i.RebrandStore.getState().drawer === !0 ? t.rootElement.classList.add("RebrandHero-drawer--visible") : t.rootElement.classList.remove("RebrandHero-drawer--visible"))
                    }
                }, this.hideDrawerResponsively = function(e) {
                    var n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    if (n !== e) {
                        var a = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body).scrollTop;
                        n < t.drawerToModalBreakpoint && t.triggered === !1 ? (i.RebrandStore.dispatch({
                            type: "hideDrawer"
                        }), t.triggered = !0) : n >= t.drawerToModalBreakpoint && a <= t.windowHeightBreakpoint(n) && (i.RebrandStore.dispatch({
                            type: "showDrawer"
                        }), t.triggered = !1)
                    }
                }, this.setupListeners = function() {
                    t.closePanel && t.closePanel.addEventListener("click", function(e) {
                        e.preventDefault(), t.openDrawer(!1)
                    });
                    var e = document.getElementsByClassName(t.signInFormClassName)[0],
                        n = document.getElementsByClassName(t.registerFormClassName)[0],
                        r = document.getElementById(t.signUpOrInLinkId);
                    r && r.addEventListener("click", function(a) {
                        a.preventDefault(), e && n && t.toggleRegisterSignInForms(e, n)
                    });
                    var o = document.getElementById(t.signInLinkId);
                    o && o.addEventListener("click", function(a) {
                        a.preventDefault(), e && n && t.toggleRegisterSignInForms(e, n)
                    });
                    var i = document.getElementById(t.signUpLinkId);
                    i && i.addEventListener("click", function(a) {
                        a.preventDefault(), e && n && t.toggleRegisterSignInForms(e, n)
                    }), t.scrollThrottle = new a.RafThrottle(t.maybeToggleDrawer), window.addEventListener("scroll", function(e) {
                        t.scrollThrottle.request()
                    });
                    var s = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    if (t.resizeThrottle = new a.RafThrottle(function() {
                            t.hideDrawerResponsively(s)
                        }), window.addEventListener("resize", function(e) {
                            t.resizeThrottle.request()
                        }), t.expSubgrowthProAXHomepage) {
                        var d = document.getElementById(t.signUpOrInLinkId);
                        d && d.addEventListener("keydown", t.handleSignInUpFocus), setTimeout(function() {
                            var e = document.querySelector(".auth-google.button-primary.button-undefined");
                            e && e.addEventListener("keydown", t.handleLastFocus)
                        }, 0);
                        var l = document.querySelector(".login-need-help");
                        l && l.addEventListener("keydown", t.handleLastFocus)
                    }
                }, this.handleLastFocus = function(e) {
                    9 === e.keyCode && (e.shiftKey || (e.preventDefault(), t.closeDrawer(), t.moveToPreviousFocus()))
                }, this.handleSignInUpFocus = function(e) {
                    if (9 === e.keyCode && e.shiftKey) {
                        e.preventDefault();
                        var t = document.getElementsByClassName("RebrandNavigation-nav--links-item")[1];
                        null !== t && t.focus()
                    }
                }, this.focusOnNamedInput = function(e) {
                    var t = document.querySelector('input[name$="' + e + '"]');
                    t && t.focus()
                }, this.toggleRegisterSignInForms = function(e, a) {
                    var s = document.getElementById("sign-up-in"),
                        d = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body).scrollTop,
                        l = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    e && a && s && (t.isHidden(e) ? (i.RebrandStore.dispatch({
                        type: "showSignUp"
                    }), s.textContent = n._("Sign in"), o.UserActivityLogger.log("", "web_register"), r.AuthEventLogger.log_web_signup_intent(), t.focusOnNamedInput("fname"), d <= t.windowHeightBreakpoint(l) && l >= t.drawerToModalBreakpoint && t.closePanel.classList.remove("button--visible")) : (i.RebrandStore.dispatch({
                        type: "showSignIn"
                    }), s.textContent = n._("Sign up"), o.UserActivityLogger.log("", "web_login"), r.AuthEventLogger.log_web_login_intent(), t.focusOnNamedInput("login_email"), d <= t.windowHeightBreakpoint(l) && l >= t.drawerToModalBreakpoint && t.closePanel.classList.remove("button--visible")))
                }, this.openDrawer = function(e) {
                    void 0 === e && (e = !0);
                    var a = document.getElementsByClassName(t.drawerClassName)[0];
                    a && (e ? a.classList.contains(t.closeDrawerClassName) && (a.classList.remove(t.closeDrawerClassName), t.rootElement.classList.add("RebrandHero-drawer--visible"), t.closePanel.classList.add("animation-delay"), t.closePanel.classList.remove("button--visible"), t.expSubgrowthProAXHomepage && (t.previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, setTimeout(function() {
                        if (document.activeElement && document.activeElement.textContent === n._("Sign up")) {
                            var e = document.querySelector('input[name$="fname"]');
                            e && e.focus()
                        } else if (document.activeElement && document.activeElement.textContent === n._("Sign in")) {
                            var t = document.querySelector('input[name$="login_email"]');
                            t && t.focus()
                        }
                    }, 0))) : t.closeDrawer())
                }, this.closeDrawer = function() {
                    var e = document.getElementsByClassName(t.drawerClassName)[0];
                    e.classList.contains(t.closeDrawerClassName) || (e.classList.add(t.closeDrawerClassName), t.rootElement.classList.remove("RebrandHero-drawer--visible"), t.expSubgrowthProAXHomepage && (t.moveToPreviousFocus(), t.previousFocus = null))
                }, this.moveToPreviousFocus = function() {
                    if (t.previousFocus) t.previousFocus.textContent !== n._("Sign in") && t.previousFocus.textContent !== n._("Sign up") || t.previousFocus.focus();
                    else {
                        var e = document.getElementsByClassName("RebrandNavigation-nav--links-item__sign-up")[0];
                        null !== e && e.focus()
                    }
                }, this.isHidden = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, this.expSubgrowthProAXHomepage = e, this.expSubgrowthProAXHomepage) {
                var s = document.querySelector("body");
                s && s.classList.add("RebrandIndex--expSubgrowthProAXHomepage")
            }
            document.getElementsByClassName(this.drawerClassName)[0].classList.add("RebrandHero-drawer--init");
            var d = document.getElementsByClassName(this.signInFormClassName)[0],
                l = document.getElementsByClassName(this.registerFormClassName)[0],
                c = document.getElementById("sign-up-in");
            i.RebrandStore.subscribe(function() {
                t.openDrawer(i.RebrandStore.getState().drawer), i.RebrandStore.getState().drawer === !0 ? t.rootElement.classList.add("RebrandHero-drawer--visible") : t.rootElement.classList.remove("RebrandHero-drawer--visible"), "signIn" === i.RebrandStore.getState().form && c ? (c.textContent = n._("Sign up"), d.classList.remove("form--hidden"), l.classList.add("form--hidden"), t.closePanel.classList.remove("animation-delay"), t.closePanel.classList.add("button--visible")) : "signUp" === i.RebrandStore.getState().form && c && (c.textContent = n._("Sign in"), d.classList.add("form--hidden"), l.classList.remove("form--hidden"), t.closePanel.classList.remove("animation-delay"), t.closePanel.classList.add("button--visible"))
            }), i.RebrandStore.dispatch({
                type: "showSignUp"
            }), this.maybeToggleDrawer(), this.setupListeners()
        }
        return e
    })();
    t.RebrandIndex = s
}), define("modules/clean/react/index/components/rebrand_creation", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css", "modules/clean/react/index/constants", "modules/clean/stormcrow/experiment", "modules/clean/react/placeholder_img", "modules/clean/react/index/components/rebrand_navigation", "spectrum-arbor/atoms/arbor_picture", "modules/clean/react/index/components/rebrand_video"], function(e, t, n, a, r, o, i, s, d, l, c, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), r = n.__importDefault(r);
    var u = (function(e) {
        function t(t) {
            var a = e.call(this, t) || this;
            return a.renderMedia = function() {
                var e = a.props.content,
                    t = e.media,
                    n = "RebrandCreation";
                return a.expBrandCamp2018HpTest ? r.default.createElement("section", {
                    className: n + "-column\n          " + n + "-column-5\n          ob-grid-column\n          ob-grid-column--xlarge-14\n          ob-grid-column--large-14"
                }, r.default.createElement(m.RebrandVideo, {
                    content: e.videos
                })) : [r.default.createElement("section", {
                    className: n + "-column\n        " + n + "-column-2\n        ob-grid-column\n        ob-grid-column--xlarge-8\n        ob-grid-column--large-8",
                    key: n + "-media-left"
                }, r.default.createElement("div", {
                    className: "ob-grid-content"
                }, a.renderAttribution(t.left.attribution), a.renderImage(t.left))), r.default.createElement("section", {
                    className: n + "-column\n          " + n + "-column-3\n          ob-grid-column\n          ob-grid-column--xlarge-6\n          ob-grid-column--large-6\n        ",
                    key: n + "-media-right"
                }, r.default.createElement("div", {
                    className: "ob-grid-content"
                }, a.renderImage(t.right), a.renderAttribution(t.right.attribution)))]
            }, a.renderFirstCondensedImage = function() {
                var e = a.props,
                    t = e.experiments,
                    o = e.content,
                    i = o.media;
                return a.expBrandCamp2018HpTest ? [r.default.createElement(l.RebrandNavigation, n.__assign({
                    theme: "banana"
                }, t)), r.default.createElement("div", {
                    className: "ob-grid-content\n                  ob-grid-content--pad-left-2\n                  ob-grid-content--pad-right-2\n                  ob-grid-content--medium--pad-left-2\n                  ob-grid-content--medium--pad-right-2\n                  ob-grid-content--small--pad-left-1\n                  ob-grid-content--small--pad-right-1\n                  ob-grid-content--xsmall--pad-left-2\n                  ob-grid-content--xsmall--pad-right-2\n              "
                }, r.default.createElement(m.RebrandVideo, {
                    content: o.videos
                }))] : r.default.createElement("section", {
                    className: "RebrandCreation-column RebrandCreation-column-1 ob-grid-column"
                }, r.default.createElement(l.RebrandNavigation, n.__assign({
                    theme: "burgundy"
                }, t)), r.default.createElement("div", {
                    className: "ob-grid-content\n                    ob-grid-content--pad-left-2\n                    ob-grid-content--pad-right-2\n                    ob-grid-content--medium--pad-left-2\n                    ob-grid-content--medium--pad-right-2\n                    ob-grid-content--small--pad-left-1\n                    ob-grid-content--small--pad-right-1\n                    ob-grid-content--xsmall--pad-left-2\n                    ob-grid-content--xsmall--pad-right-2\n                "
                }, a.renderAttribution(i.left.attribution), a.renderImage(i.left)))
            }, a.renderSecondCondensedImage = function() {
                var e = a.props,
                    t = e.experiments,
                    o = e.content,
                    i = o.media;
                if (!a.expBrandCamp2018HpTest) return r.default.createElement("section", {
                    className: "RebrandCreation-column RebrandCreation-column-2 ob-grid-column"
                }, r.default.createElement(l.RebrandNavigation, n.__assign({
                    theme: "aqua"
                }, t)), r.default.createElement("div", {
                    className: "ob-grid-content\n                  ob-grid-content--pad-left-4\n                  ob-grid-content--medium--pad-left-2\n                  ob-grid-content--medium--pad-right-2\n                  ob-grid-content--small--pad-left-1\n                  ob-grid-content--small--pad-right-1\n                  ob-grid-content--xsmall--pad-left-2\n                  ob-grid-content--xsmall--pad-right-2\n              "
                }, a.renderImage(i.right), a.renderAttribution(i.right.attribution)))
            }, a
        }
        return n.__extends(t, e), Object.defineProperty(t.prototype, "expBrandCamp2018HpTest", {
            get: function() {
                return s.Experiment(this.props.experiments.expBrandCamp2018HpTest).variantIn("V1", "V2")
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.renderImage = function(e) {
            var t = r.default.createElement(c.ArborPicture, {
                alt: e.alt,
                cover: !0,
                className: "RebrandCreation-media--picture",
                imgClassName: "RebrandCreation-media--image",
                sources: [{
                    media: "all and (min-width: " + i.breakpoints.tabletBreakPoint + ")",
                    srcSet: e.desktop.default+" 1x, " + e.desktop.hiRes + " 2x"
                }, {
                    media: "all and (min-width: " + i.breakpoints.mobileBreakPoint + ") and (max-width: " + i.breakpoints.tabletBreakPoint + ")",
                    srcSet: e.tablet.default+" 1x, " + e.tablet.hiRes + " 2x"
                }, {
                    media: "all and (max-width: " + i.breakpoints.mobileBreakPoint + ")",
                    srcSet: e.mobile.default+" 1x, " + e.mobile.hiRes + " 2x"
                }],
                src: e.desktop.default
            });
            return this.props.deferImages ? r.default.createElement(d.PlaceholderImg, {
                alt: e.alt,
                className: "RebrandCreation-media--image",
                src: e.desktop.preload
            }, t) : t
        }, t.prototype.renderAttribution = function(e) {
            return r.default.createElement("h6", {
                className: "attribution"
            }, e)
        }, t.prototype.renderWideLayout = function() {
            var e = this.props,
                t = e.content,
                a = e.experiments,
                o = "RebrandCreation";
            return r.default.createElement("section", {
                className: o + "__wide ob-grid-container",
                key: o + "__wide"
            }, r.default.createElement(l.RebrandNavigation, n.__assign({
                theme: this.expBrandCamp2018HpTest ? "watermelon-banana" : "burgundy-aqua"
            }, a)), r.default.createElement("section", {
                className: o + "-column\n                " + o + "-column-1\n                ob-grid-column\n                ob-grid-column--xlarge-8\n                ob-grid-column--large-8\n            "
            }, r.default.createElement("article", {
                className: o + "-text\n                    ob-grid-content\n                    ob-grid-content--pad-left-1\n                    ob-grid-content--pad-right-2\n                "
            }, r.default.createElement("h2", {
                id: o + "-text--tile",
                className: o + "-text--title ob-title ob-title--3"
            }, t.header), r.default.createElement("p", {
                className: o + "-text--copy ob-copy ob-copy--standard"
            }, t.body))), this.renderMedia())
        }, t.prototype.renderCondensedLayout = function() {
            var e = this.props,
                t = e.content,
                a = e.experiments,
                o = "RebrandCreation";
            return r.default.createElement("section", {
                className: o + "__condensed",
                key: o + "__condensed"
            }, this.renderFirstCondensedImage(), this.renderSecondCondensedImage(), r.default.createElement("section", {
                className: o + "-column\n                " + o + "-column-3\n                ob-grid-column\n                ob-grid-column--xlarge-7\n                ob-grid-column--large-7\n                ob-grid-column--medium-24\n                ob-grid-column--small-24\n            "
            }, r.default.createElement(l.RebrandNavigation, n.__assign({
                theme: this.expBrandCamp2018HpTest ? "banana" : "aqua"
            }, a)), r.default.createElement("article", {
                className: o + "-text ob-grid-content\n                    ob-grid-content--medium--pad-left-2\n                    ob-grid-content--medium--pad-right-9\n                    ob-grid-content--small--pad-1\n                    ob-grid-content--xsmall--pad-2\n                "
            }, r.default.createElement("h2", {
                className: o + "-text--title ob-title ob-title--3"
            }, t.header), r.default.createElement("p", {
                className: o + "-text--copy ob-copy ob-copy--standard"
            }, t.body))))
        }, t.prototype.render = function() {
            var e, t = a.default("RebrandCreation", "ob-grid", (e = {}, e["RebrandCreation--brand-campaign"] = !!this.expBrandCamp2018HpTest, e));
            return r.default.createElement("section", {
                className: t,
                role: "group",
                "aria-activedescendant": "RebrandCreation-text--tile"
            }, this.renderWideLayout(), this.renderCondensedLayout())
        }, t
    })(r.default.Component);
    t.RebrandCreation = o.requireCssWithComponent(u, ["/static/css/index/components/rebrand_creation-vflgQkoxG.css"])
}), define("modules/clean/react/index/components/rebrand_footer_plane", ["require", "exports", "tslib", "react", "modules/clean/web_timing_logger", "modules/clean/react/index/components/rebrand_plane", "modules/clean/react/rebrand/elements/rebrand_arbor_footer_component"], function(e, t, n, a, r, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a);
    var s = (function(t) {
        function s(e) {
            return t.call(this, e) || this
        }
        return n.__extends(s, t), s.prototype.componentDidMount = function() {
            this.props.homePreloadJsInHomepage && r.waitForTTI().then(function() {
                new Promise(function(t, n) {
                    e(["modules/clean/react/home/post_tti/interface"], t, n)
                }).then(n.__importStar).then(function() {})
            })
        }, s.prototype.render = function() {
            var e = this.props,
                t = e.theme,
                n = e.footerContent;
            return a.default.createElement(o.RebrandPlane, {
                theme: t
            }, a.default.createElement(i.RebrandArborFooter, {
                content: n
            }))
        }, s
    })(a.default.Component);
    t.RebrandFooterPlane = s
}), define("modules/clean/react/index/components/rebrand_hero", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react/css", "modules/clean/react/index/components/rebrand_navigation", "modules/clean/react_format", "modules/clean/stormcrow/experiment", "modules/core/i18n", "modules/clean/react/index/store"], function(e, t, n, a, r, o, i, s, d, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), r = n.__importDefault(r);
    var m = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.nameSpace = "RebrandHero", n.handleDrawer = function() {
                c.RebrandStore.dispatch({
                    type: "showDrawer"
                }), c.RebrandStore.dispatch({
                    type: "showSignUp"
                })
            }, n.handleScroll = function() {
                var e = function(e, t, n, a) {
                        return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                    },
                    t = document.getElementsByClassName("RebrandCreation")[0],
                    n = document.documentElement.scrollTop,
                    a = t.getBoundingClientRect().top + document.documentElement.scrollTop,
                    r = (new Date).getTime(),
                    o = setInterval(function() {
                        var i = (new Date).getTime() - r,
                            s = e(i, n, a - n, 500);
                        window.scrollTo(0, s), i >= 500 && (clearInterval(o), t && t instanceof HTMLElement && (t.setAttribute("tabindex", "-1"), t.focus()))
                    }, 1e3 / 60)
            }, n.renderSecondaryLink = function() {
                var e = n.props.content.secondary_cta,
                    t = n.nameSpace + "__secondary-cta",
                    o = r.default("ob-copy", t),
                    i = s.reactFormat(l._("or <a>see how we keep teams flowing</a>"), {
                        a: a.default.createElement("a", {
                            href: e.href,
                            className: n.nameSpace + "__secondary-link"
                        })
                    });
                return [a.default.createElement("p", {
                    className: r.default(o, "ob-copy--mini", t + "--small")
                }, i), a.default.createElement("a", {
                    href: e.href,
                    className: r.default(o, "ob-copy--standard", t + "--large", n.nameSpace + "__secondary-link")
                }, e.text)]
            }, n
        }
        return n.__extends(t, e), Object.defineProperty(t.prototype, "expBrandCamp2018HpTest", {
            get: function() {
                return d.Experiment(this.props.experiments.expBrandCamp2018HpTest).variantIn("V1", "V2")
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.renderHeader = function() {
            var e, t = this.props,
                n = t.content,
                o = t.locale,
                i = r.default(this.nameSpace + "--waypoint", "ob-button", "ob-button--waypoint", {
                    "ob-button--waypoint--white": !!this.expBrandCamp2018HpTest
                }),
                s = r.default(this.nameSpace + "--cta", "ob-button", "ob-button__cta", "ob-button--white", (e = {}, e["ob-button__cta--small-bottom"] = !!this.expBrandCamp2018HpTest, e)),
                d = r.default(this.nameSpace + "--title", "ob-title", "ob-title--1", {
                    "ob-title--2": !!this.expBrandCamp2018HpTest && "ru" === o
                });
            return a.default.createElement("header", {
                className: this.nameSpace + "-header"
            }, a.default.createElement("h1", {
                className: d
            }, n.header), a.default.createElement("p", {
                className: this.nameSpace + "--copy ob-copy ob-copy--standard"
            }, n.body), a.default.createElement("button", {
                className: s,
                onClick: this.handleDrawer
            }, n.cta), !!this.expBrandCamp2018HpTest && this.renderSecondaryLink(), a.default.createElement("button", {
                "aria-label": "waypoint",
                className: i,
                onClick: this.handleScroll
            }))
        }, t.prototype.render = function() {
            var e, t = this.props.experiments.expSubgrowthProAXHomepage,
                n = t ? "visible" : void 0,
                o = r.default(this.nameSpace, "ob-grid", (e = {}, e[this.nameSpace + "--brand-campaign"] = !!this.expBrandCamp2018HpTest, e));
            return a.default.createElement("section", {
                className: o
            }, a.default.createElement(i.RebrandNavigation, {
                theme: this.expBrandCamp2018HpTest ? "watermelon-banana" : "burgundy-aqua",
                ctaFocus: "signIn",
                ctaStyle: "outline",
                axVisibility: n
            }), a.default.createElement("section", {
                className: this.nameSpace + "-container ob-grid-container"
            }, a.default.createElement("aside", {
                className: this.nameSpace + "-aside\n              ob-grid-column\n              ob-grid-column--xlarge-16\n              ob-grid-column--large-16\n              ob-grid-column--medium-20\n              ob-grid-column--small-24\n              ob-grid-column--xsmall-24\n            "
            }, a.default.createElement("div", {
                className: "ob-grid-content\n                ob-grid-content--pad-2\n                ob-grid-content--xlarge--pad-2\n                ob-grid-content--large--pad-2\n                ob-grid-content--medium--pad-2\n                ob-grid-content--small--pad-1\n                ob-grid-content--xsmall--pad-2\n              "
            }, this.renderHeader()))))
        }, t
    })(a.default.Component);
    t.RebrandHero = o.requireCssWithComponent(m, ["/static/css/index/components/rebrand_hero-vfleLdFD_.css"])
}), define("modules/clean/react/index/components/rebrand_logo", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/static_urls"], function(e, t, n, a, r, o) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), t.DropboxLogoGlyphs = {
        default: "images/index/rebrand/logos/glyphs/glyph_blue.svg",
        aqua: "images/index/rebrand/logos/glyphs/glyph_cherry.svg",
        banana: "images/index/rebrand/logos/glyphs/glyph_watermelon.svg",
        blackened: "images/index/rebrand/logos/glyphs/glyph_blue.svg",
        burgundy: "images/index/rebrand/logos/glyphs/glyph_aqua.svg",
        "burgundy-aqua": "images/index/rebrand/logos/glyphs/glyph_aqua.svg",
        "sapphire-french-vanilla": "images/index/rebrand/logos/glyphs/glyph_french_vanilla.svg",
        "french-vanilla": "images/index/rebrand/logos/glyphs/glyph_dark_blue.svg",
        peach: "images/index/rebrand/logos/glyphs/glyph_dark_blue.svg",
        watermelon: "images/index/rebrand/logos/glyphs/glyph_yellow.svg",
        "watermelon-banana": "images/index/rebrand/logos/glyphs/glyph_yellow.svg",
        white: "images/index/rebrand/logos/glyphs/glyph_blue.svg"
    };
    var s = (i = (function(e) {
        function r(t) {
            return e.call(this, t) || this
        }
        return n.__extends(r, e), r.prototype.renderLogoGlyph = function(e) {
            return a.default.createElement("img", {
                src: o.static_url("/static/" + t.DropboxLogoGlyphs[e || this.props.theme || "default"]),
                className: "DropboxLogo--glyph",
                alt: "",
                role: "presentation"
            })
        }, r.prototype.renderLogoWordmark = function(e) {
            var t = {
                default: "images/index/rebrand/logos/wordmarks/wordmark_black.svg",
                aqua: "images/index/rebrand/logos/wordmarks/wordmark_black.svg",
                banana: "images/index/rebrand/logos/wordmarks/wordmark_black.svg",
                blackened: "images/index/rebrand/logos/wordmarks/wordmark_white.svg",
                burgundy: "images/index/rebrand/logos/wordmarks/wordmark_white.svg",
                "burgundy-aqua": "images/index/rebrand/logos/wordmarks/wordmark_white.svg",
                peach: "images/index/rebrand/logos/wordmarks/wordmark_black.svg",
                "sapphire-french-vanilla": "images/index/rebrand/logos/wordmarks/wordmark_white.svg",
                "french-vanilla": "images/index/rebrand/logos/wordmarks/wordmark_black.svg",
                watermelon: "images/index/rebrand/logos/wordmarks/wordmark_white.svg",
                "watermelon-banana": "images/index/rebrand/logos/wordmarks/wordmark_white.svg",
                white: "images/index/rebrand/logos/wordmarks/wordmark_black.svg"
            };
            return a.default.createElement("img", {
                src: o.static_url("/static/" + t[e || this.props.theme || "default"]),
                className: "DropboxLogo--wordmark",
                alt: "",
                role: "presentation"
            })
        }, r.prototype.render = function() {
            return a.default.createElement("div", {
                className: "DropboxLogo",
                role: "img",
                "aria-label": "Dropbox"
            }, this.renderLogoGlyph(), this.renderLogoWordmark())
        }, r
    })(a.default.Component), i.defaultProps = {
        theme: "default"
    }, i);
    t.DropboxLogo = r.requireCssWithComponent(s, ["/static/css/index/obsidian/logo-vflbo_vhR.css"])
}), define("modules/clean/react/index/components/rebrand_media", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css", "modules/clean/static_urls", "modules/clean/react/index/constants", "modules/clean/react/placeholder_img", "modules/clean/react/index/components/rebrand_navigation", "modules/clean/react/rebrand/elements/inline_video", "modules/clean/stormcrow/experiment"], function(e, t, n, a, r, o, i, s, d, l, c, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), r = n.__importDefault(r);
    var u = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return n.__extends(t, e), t.prototype.renderCTA = function() {
            var e = this.props.content;
            return r.default.createElement("a", {
                href: e.cta.link,
                className: "ob-button ob-button--white"
            }, e.cta.button)
        }, Object.defineProperty(t.prototype, "expBrandCamp2018HpTest", {
            get: function() {
                return !!this.props.experiments && m.Experiment(this.props.experiments.expBrandCamp2018HpTest).variantIn("V1", "V2")
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.renderImage = function() {
            var e = this.props.content;
            if (e.images) {
                var t = '\n          <source srcSet="' + i.static_url("/static/" + e.images.desktop.default) + " 1x,\n            " + i.static_url("/static/" + e.images.desktop.hiRes) + ' 2x"\n          media="(' + s.breakpoints.tabletBreakPoint + ')"></source>\n          <source srcSet="' + i.static_url("/static/" + e.images.tablet.default) + " 1x,\n            " + i.static_url("/static/" + e.images.tablet.hiRes + "}") + ' 2x"\n            media="(min-width: ' + s.breakpoints.mobileBreakPoint + ") and (max-width:               " + s.breakpoints.tabletBreakPoint + ')"></source>\n          <source srcSet="' + i.static_url("/static/" + e.images.mobile.default) + " 1x,\n            " + i.static_url("/static/" + e.images.mobile.hiRes) + ' 2x"\n            media="(max-width: ' + s.breakpoints.mobileBreakPoint + ')"></source>\n          <img sizes="' + i.static_url("/static/" + e.images.desktop.default) + " 1x,\n            " + i.static_url("/static/" + e.images.desktop.hiRes) + ' 2x"\n            src="' + i.static_url("/static/" + e.images.desktop.default) + '"\n            class="RebrandMedia-media--image" alt="' + e.images.alt + '" />',
                    n = r.default.createElement("picture", {
                        className: "RebrandMedia-media--picture",
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    });
                return this.props.deferImages ? r.default.createElement(d.PlaceholderImg, {
                    src: e.images.desktop.preload,
                    className: "RebrandMedia-media--image",
                    alt: e.images.alt
                }, n) : n
            }
        }, t.prototype.renderVideo = function() {
            var e = this.props,
                t = e.content,
                n = e.locale;
            if (t.videos) {
                var a = t.videos.poster.hiRes,
                    o = {
                        mp4: {
                            default: t.videos.desktop.mp4.default,
                            hiRes: t.videos.desktop.mp4.hiRes
                        },
                        webm: {
                            default: t.videos.desktop.webm.default,
                            hiRes: t.videos.desktop.webm.hiRes
                        }
                    },
                    i = '\n        <source srcSet="\n          ' + t.videos.static.mobile.default+" 1x,\n          " + t.videos.static.mobile.hiRes + ' 2x"\n          media="all and (max-width: ' + s.breakpoints.mobileBreakPoint + ')">\n        </source>\n        <img src="' + t.videos.static.mobile.default+'"\n          sizes="' + t.videos.static.mobile.default+" 1x,\n          " + t.videos.static.mobile.hiRes + ' 2x"\n          className="RebrandMedia-media--image"\n        />\n      ',
                    l = r.default.createElement("section", {
                        className: "RebrandMedia-media-container"
                    }, r.default.createElement("div", {
                        className: "video-wrapper"
                    }, r.default.createElement(c.InlineVideo, {
                        locale: n,
                        desktopSrc: o.mp4.default,
                        desktopHiResSrc: o.mp4.hiRes,
                        staticContentHost: "rebrand.dropboxstatic.com",
                        poster: a,
                        description: t.videos.description
                    })), r.default.createElement("picture", {
                        className: "RebrandMedia-media--picture",
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    }));
                return this.props.deferImages ? r.default.createElement(d.PlaceholderImg, {
                    src: t.videos.poster.preload,
                    className: "RebrandMedia-media--image"
                }, l) : l
            }
        }, t.prototype.render = function() {
            var e, t, n = this.props,
                o = n.content,
                i = n.theme,
                s = "RebrandMedia",
                d = a.default((e = {}, e[s] = !0, e["ob-grid"] = !0, e[s + "__theme-create"] = "create" === i, e[s + "__theme-collaborate"] = "collaborate" === i, e[s + "__theme-chaos"] = this.expBrandCamp2018HpTest, e)),
                c = "default";
            return "create" === i ? c = "watermelon" : "collaborate" === i && (c = "peach"), r.default.createElement("section", {
                className: d
            }, r.default.createElement(l.RebrandNavigation, {
                theme: c
            }), r.default.createElement("article", {
                className: a.default((t = {}, t[s + "-container"] = !0, t.reversedLayout = this.props.reversedLayout === !0, t["ob-grid-container"] = !0, t))
            }, r.default.createElement("div", {
                className: s + "-text\n              ob-grid-column\n              ob-grid-column--xlarge-7\n              ob-grid-column--large-7\n              ob-grid-column--medium-14\n              ob-grid-column--small-24\n              ob-grid-column--xmedium-24\n            "
            }, r.default.createElement("div", {
                className: a.default({
                    "ob-grid-content": !0,
                    "ob-grid-content--pad-left-1": this.props.reversedLayout !== !0,
                    "ob-grid-content--pad-right-1": this.props.reversedLayout === !0,
                    "ob-grid-content--medium--pad-2": !0,
                    "ob-grid-content--small--pad-1": !0,
                    "ob-grid-content--xsmall--pad-2": !0
                })
            }, r.default.createElement("h2", {
                className: s + "-text--headline ob-title ob-title--3"
            }, o.header), r.default.createElement("p", {
                className: s + "-text--body ob-copy ob-copy--standard"
            }, o.body), o.cta && this.renderCTA())), r.default.createElement("div", {
                className: s + "-media\n              ob-grid-column\n              ob-grid-column--xlarge-17\n              ob-grid-column--large-17\n              ob-grid-column--medium-24\n              ob-grid-column--small-24\n              ob-grid-column--xmedium-24\n            "
            }, r.default.createElement("div", {
                className: "ob-grid-content\n                ob-grid-content--pad-1\n                ob-grid-content--medium--pad-2\n                ob-grid-content--small--pad-1\n                ob-grid-content--xsmall--pad-2\n              "
            }, o.videos && this.renderVideo(), o.images && this.renderImage()))))
        }, t
    })(r.default.Component);
    t.RebrandMedia = o.requireCssWithComponent(u, ["/static/css/index/components/rebrand_media-vflSwQaRr.css"])
}), define("modules/clean/react/index/components/rebrand_mobile_navigation", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/core/i18n", "modules/clean/react/index/store", "modules/clean/react/index/components/rebrand_logo"], function(e, t, n, a, r, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a);
    var d = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleDrawer = function() {
                i.RebrandStore.dispatch({
                    type: "hideMobileNav"
                }), i.RebrandStore.dispatch({
                    type: "showDrawer"
                }), i.RebrandStore.dispatch({
                    type: "showSignIn"
                })
            }, n.handleMobileNav = function() {
                i.RebrandStore.dispatch({
                    type: "hideMobileNav"
                })
            }, n.state = {
                experiments: i.RebrandStore.getState().experiments,
                gates: i.RebrandStore.getState().gates
            }, n
        }
        return n.__extends(t, e), t.prototype.renderIndividualLink = function(e) {
            return a.default.createElement("a", {
                href: "/individual",
                className: e + "-nav--link",
                "data-trackingid": this.state.gates.isZeusOn ? "home_nav_individuals_zeus" : "home_nav_individuals"
            }, o._("For individuals"))
        }, t.prototype.render = function() {
            var e = "RebrandMobileNavigation";
            return a.default.createElement("section", {
                className: "" + e
            }, a.default.createElement("header", {
                className: e + "-header"
            }, a.default.createElement(s.DropboxLogo, {
                theme: "default"
            }), a.default.createElement("button", {
                className: "ob-button ob-button--close",
                onClick: this.handleMobileNav,
                "aria-label": o._("Close")
            }, o._("Close"))), a.default.createElement("nav", {
                className: e + "-nav"
            }, a.default.createElement("button", {
                className: e + "-nav--link ob-button ob-button--link",
                onClick: this.handleDrawer
            }, o._("Sign in")), a.default.createElement("a", {
                href: "/install",
                className: e + "-nav--link"
            }, o._("Download")), a.default.createElement("a", {
                href: "/business",
                className: e + "-nav--link",
                "data-trackingid": this.state.gates.isZeusOn ? "home_nav_teams_zeus" : "home_nav_teams"
            }, o._("For teams")), this.renderIndividualLink(e)))
        }, t
    })(a.default.Component);
    t.RebrandMobileNavigation = r.requireCssWithComponent(d, ["/static/css/index/components/rebrand_condensed_navigation-vflLByQ31.css"])
}), define("modules/clean/react/index/components/rebrand_navigation", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css", "modules/core/i18n", "modules/clean/react/index/store", "modules/clean/react/index/components/rebrand_logo"], function(e, t, n, a, r, o, i, s, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), r = n.__importDefault(r);
    var l = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleMobileNav = function(e) {
                e.stopPropagation(), s.RebrandStore.dispatch({
                    type: "showMobileNav"
                }), s.RebrandStore.dispatch({
                    type: "hideDrawer"
                })
            }, n.handleDrawer = function(e, t) {
                e.stopPropagation(), s.RebrandStore.dispatch({
                    type: "show" + t
                }), s.RebrandStore.dispatch({
                    type: "showDrawer"
                })
            }, n.handleDrawerButtonFocus = function(e) {
                if ("ON" === n.expSubgrowthProAXHomepage) {
                    e.stopPropagation();
                    var t = document.getElementsByTagName("html")[0],
                        a = document.getElementById("sign-up-in");
                    a && t.classList.contains("RebrandHero-drawer--visible") && a.focus()
                }
            }, n.state = {
                experiments: s.RebrandStore.getState().experiments,
                gates: s.RebrandStore.getState().gates
            }, n
        }
        return n.__extends(t, e), Object.defineProperty(t.prototype, "expSubgrowthProAXHomepage", {
            get: function() {
                return this.state.experiments.expSubgrowthProAXHomepage
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.renderCTA = function() {
            var e, t = 0,
                n = !1;
            "ON" === this.expSubgrowthProAXHomepage && (this.props.axVisibility && "visible" === this.props.axVisibility ? (t = 0, n = !1) : (t = -1, n = !0));
            var o = a.default((e = {
                "ob-button": !0,
                "ob-button--link": !0
            }, e["RebrandNavigation-nav--links-item"] = !0, e));
            return r.default.createElement("div", {
                className: "RebrandNavigation-nav-cta",
                "aria-hidden": n
            }, r.default.createElement("a", {
                className: o,
                href: "/business",
                tabIndex: t,
                "data-trackingid": this.state.gates.isZeusOn ? "home_nav_teams_zeus" : "home_nav_teams"
            }, i._("For Teams")), r.default.createElement("a", {
                className: o,
                href: "/individual",
                tabIndex: t,
                "data-trackingid": this.state.gates.isZeusOn ? "home_nav_individuals_zeus" : "home_nav_individuals"
            }, i._("For Individuals")))
        }, t.prototype.render = function() {
            var e, t, n, o = this,
                s = "RebrandNavigation",
                l = this.props.axVisibility && "visible" === this.props.axVisibility ? {
                    tabIndexValue: 0,
                    ariaHiddenValue: !1
                } : {
                    tabIndexValue: -1,
                    ariaHiddenValue: !0
                },
                c = l.tabIndexValue,
                m = l.ariaHiddenValue;
            return r.default.createElement("section", {
                className: s + " " + s + "-theme__" + this.props.theme,
                "aria-hidden": m
            }, r.default.createElement("div", {
                className: s + "-container"
            }, r.default.createElement("nav", {
                className: s + "-container-content"
            }, r.default.createElement(d.DropboxLogo, {
                theme: this.props.theme
            }), r.default.createElement("div", {
                className: s + "-nav"
            }, !this.props.hideCTA && this.renderCTA(), r.default.createElement("section", {
                className: s + "-nav--links"
            }, r.default.createElement("button", {
                className: a.default((e = {}, e[s + "-nav--links-item"] = !0, e[s + "-nav--links-item__sign-up"] = !0, e[s + "-nav--links-item__hidden"] = "signUp" === this.props.ctaFocus, e["ob-button"] = !0, e["ob-button--link"] = !0, e)),
                onClick: function(e) {
                    o.handleDrawer(e, "SignIn")
                },
                tabIndex: c,
                onFocus: this.handleDrawerButtonFocus
            }, i._("Sign in")), r.default.createElement("button", {
                className: a.default((t = {}, t[s + "-nav--links-item"] = !0, t[s + "-nav--links-item__sign-up"] = !0, t[s + "-nav--links-item__hidden"] = "signIn" === this.props.ctaFocus, t["ob-button"] = !0, t["ob-button--link"] = !0, t)),
                onClick: function(e) {
                    o.handleDrawer(e, "SignUp")
                },
                onFocus: this.handleDrawerButtonFocus,
                tabIndex: c
            }, i._("Sign up")), r.default.createElement("button", {
                className: a.default((n = {}, n[s + "-nav--links-item"] = !0, n["ob-button"] = !0, n["ob-button--cheeseburger"] = !0, n["ob-button--cheeseburger__white"] = "black" === this.props.theme || "burgundy" === this.props.theme || "burgundy-aqua" === this.props.theme || "watermelon" === this.props.theme || "watermelon-banana" === this.props.theme || "sapphire-french-vanilla" === this.props.theme, n)),
                onClick: this.handleMobileNav,
                tabIndex: c
            }, i._("Menu")))))))
        }, t.defaultProps = {
            ctaFocus: "signUp",
            theme: "default"
        }, t
    })(r.default.Component);
    t.RebrandNavigation = o.requireCssWithComponent(l, ["/static/css/index/components/rebrand_navigation-vflKKYn78.css"])
}), define("modules/clean/react/index/components/rebrand_plane", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/react/index/components/rebrand_navigation"], function(e, t, n, a, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a);
    var i = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = void 0 !== this.props.theme ? this.props.theme : "default";
            return a.default.createElement("section", {
                className: "RebrandPlane"
            }, a.default.createElement(o.RebrandNavigation, {
                theme: e
            }), this.props.children)
        }, t
    })(a.default.Component);
    t.RebrandPlane = r.requireCssWithComponent(i, ["/static/css/index/components/rebrand_plane-vflGHJ5Ou.css"])
}), define("modules/clean/react/index/components/rebrand_sidekick", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/react/index/components/rebrand_navigation"], function(e, t, n, a, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a);
    var i = (function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.props.trackingId,
                    t = this.props.content,
                    n = t.button,
                    r = t.link,
                    o = t.title;
                return a.default.createElement("div", {
                    className: "RebrandSidekick--item\n        ob-grid-column\n        ob-grid-column--xlarge-12\n        ob-grid-column--large-12\n        ob-grid-column--medium-14\n        ob-grid-column--small-24\n        ob-grid-column--xsmall-24\n      "
                }, a.default.createElement("div", {
                    className: "\n        ob-grid-content\n        ob-grid-content--pad-2\n        ob-grid-content--xlarge--pad-2\n        ob-grid-content--large--pad-2\n        ob-grid-content--medium--pad-2\n        ob-grid-content--small--pad-1\n        ob-grid-content--xsmall--pad-2\n      "
                }, a.default.createElement("h2", {
                    className: "\n          RebrandSidekick--item-title\n          ob-title\n          ob-title--2\n        "
                }, o), a.default.createElement("a", {
                    href: r,
                    className: "\n          RebrandSidekick--item-button\n          ob-button\n          ob-button--blue\n        ",
                    "data-trackingid": e
                }, n)))
            }, t
        })(a.default.Component),
        s = (function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.content,
                    n = e.hideCTA;
                return a.default.createElement("section", {
                    className: "RebrandSidekick ob-grid"
                }, a.default.createElement(o.RebrandNavigation, {
                    theme: "default",
                    hideCTA: n
                }), a.default.createElement("section", {
                    className: "RebrandSidekick-container ob-grid-container"
                }, a.default.createElement(i, {
                    content: t.individual,
                    trackingId: "home_prefooter_ind"
                }), a.default.createElement(i, {
                    content: t.teams,
                    trackingId: "home_prefooter_biz"
                })))
            }, t.defaultProps = {
                hideCTA: !0
            }, t
        })(a.default.Component);
    t.RebrandSidekick = r.requireCssWithComponent(s, ["/static/css/index/components/rebrand_sidekick-vfl--SN91.css"])
}), define("modules/clean/react/index/components/rebrand_video", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css", "modules/clean/react/placeholder_img", "modules/core/browser_detection", "modules/clean/react/index/interfaces/interfaces"], function(e, t, n, a, r, o, i, s, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), r = n.__importDefault(r);
    var l = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.nameSpace = "RebrandVideo", n.getVideoSources = function(e) {
                var t = e.desktop,
                    a = e.mobile,
                    r = s.is_high_density_display();
                switch (n.deviceSize) {
                    case "mobile":
                        return {
                            mp4: r ? a.mp4.hiRes : a.mp4.default,
                            poster: r ? a.poster.hiRes : a.poster.default,
                            webm: r ? a.webm.hiRes : a.webm.default
                        };
                    default:
                        return {
                            mp4: t.mp4.default,
                            poster: t.poster.default,
                            webm: t.webm.default
                        }
                }
            }, n.bindAndMakeVideoPlayInline = function(e) {
                e && (e.setAttribute("webkit-playsinline", "playsinline"), e.playsInline = !0, n.videoElement = e)
            }, n.handleBrandCampaignVideoClick = function() {
                var e = n.isVideoPlaying ? d.RebrandControlInteractionState.INTERACTIVE : d.RebrandControlInteractionState.HIDDEN,
                    t = n.isVideoPlaying ? d.RebrandVideoPlayState.PAUSED : d.RebrandVideoPlayState.PLAYING,
                    a = n.isVideoPlaying ? n.pauseVideo : n.playVideo;
                n.setState({
                    controlInteractivity: e,
                    videoPlayState: t
                }, function() {
                    a()
                })
            }, n.handleBrandCampaignVideoEnd = function() {
                n.setState({
                    videoPlayState: d.RebrandVideoPlayState.PAUSED
                })
            }, n.handleMouseLeave = function() {
                n.setState({
                    controlInteractivity: d.RebrandControlInteractionState.INTERACTIVE
                })
            }, n.playVideo = function() {
                n.videoElement.play()
            }, n.pauseVideo = function() {
                n.videoElement.pause()
            }, n.renderVideoControls = function() {
                var e = n.props.content,
                    t = e.pauseButton,
                    o = e.playButton,
                    i = n.state,
                    s = i.controlInteractivity;
                if (i.loaded) return [o, t].map(function(e, t) {
                    var o, i = e.description,
                        l = e.id,
                        c = e.source,
                        m = l === d.RebrandVideoPlayState.PLAYING || l === d.RebrandVideoPlayState.PAUSED && s === d.RebrandControlInteractionState.INTERACTIVE,
                        u = l === d.RebrandVideoPlayState.PLAYING ? n.isVideoPlaying : n.isVideoPaused;
                    return r.default.createElement("img", {
                        alt: i,
                        className: a.default(n.nameSpace + "__video-control", n.nameSpace + "__video-control--" + l, (o = {}, o[n.nameSpace + "__video-control--animatable"] = m, o[n.nameSpace + "__video-control--hidden"] = u, o)),
                        key: t,
                        src: c
                    })
                })
            }, n.renderVideo = function() {
                var e = n.props.content,
                    t = n.getVideoSources(e);
                return r.default.createElement("figure", {
                    className: n.nameSpace + "__video-wrapper"
                }, r.default.createElement("video", {
                    playsInline: !0,
                    className: n.nameSpace + "__video-wrapper__wrapper",
                    controls: !1,
                    poster: e.poster.hiRes,
                    tabIndex: -1,
                    ref: n.bindAndMakeVideoPlayInline
                }, r.default.createElement("source", {
                    src: t.mp4,
                    type: "video/mp4"
                }), r.default.createElement("source", {
                    src: t.webm,
                    type: "video/webm"
                })), r.default.createElement("figcaption", null, e.description))
            }, n.renderVideoChunk = function() {
                return r.default.createElement("section", {
                    className: n.nameSpace,
                    onMouseLeave: n.handleMouseLeave
                }, r.default.createElement("div", {
                    className: n.nameSpace + "__video-container"
                }, n.renderVideo(), r.default.createElement("button", {
                    className: n.nameSpace + "__video-overlay",
                    onClick: n.handleBrandCampaignVideoClick
                }, n.renderVideoControls())))
            }, n.state = {
                controlInteractivity: d.RebrandControlInteractionState.INTERACTIVE,
                loaded: !1,
                videoPlayState: d.RebrandVideoPlayState.PAUSED
            }, n
        }
        return n.__extends(t, e), t.prototype.componentDidMount = function() {
            this.videoElement.addEventListener("ended", this.handleBrandCampaignVideoEnd), this.setState({
                loaded: !0
            })
        }, Object.defineProperty(t.prototype, "isVideoPaused", {
            get: function() {
                return this.state.videoPlayState === d.RebrandVideoPlayState.PAUSED
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isVideoPlaying", {
            get: function() {
                return this.state.videoPlayState === d.RebrandVideoPlayState.PLAYING
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deviceSize", {
            get: function() {
                return window.innerWidth <= 800 ? "mobile" : "desktop"
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.render = function() {
            var e = this.props,
                t = e.content,
                n = e.deferImages,
                a = this.renderVideoChunk();
            return n ? r.default.createElement(i.PlaceholderImg, {
                src: t.poster.preload,
                className: this.nameSpace + "__preload-image"
            }, a) : a
        }, t
    })(r.default.Component);
    t.RebrandVideo = o.requireCssWithComponent(l, ["/static/css/index/components/rebrand_video-vflKCWBFS.css"])
}), define("modules/clean/react/index/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.breakpoints = {
        largeDesktopBreakPoint: "1440px",
        desktopBreakPoint: "1440px",
        tabletBreakPoint: "1024px",
        mobileBreakPoint: "767px",
        smallMobileBreakPoint: "375px"
    }, t.breakpointsName = {
        xlarge: t.breakpoints.largeDesktopBreakPoint,
        large: t.breakpoints.desktopBreakPoint,
        medium: t.breakpoints.tabletBreakPoint,
        small: t.breakpoints.mobileBreakPoint,
        xsmall: t.breakpoints.smallMobileBreakPoint
    }
}), define("modules/clean/react/index/interfaces/interfaces", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.PAUSED = "pause", e.PLAYING = "play"
    })(t.RebrandVideoPlayState || (t.RebrandVideoPlayState = {}));
    (function(e) {
        e[e.HIDDEN = 0] = "HIDDEN", e[e.INTERACTIVE = 1] = "INTERACTIVE"
    })(t.RebrandControlInteractionState || (t.RebrandControlInteractionState = {}))
}), define("modules/clean/react/index/rebrand_page", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css", "modules/clean/web_timing_logger", "modules/clean/react/async/loadable", "modules/core/browser", "modules/clean/react/index/components/rebrand_hero", "modules/clean/react/index/components/rebrand_creation", "modules/clean/react/index/components/rebrand_media", "modules/clean/react/index/components/rebrand_sidekick", "modules/clean/react/index/components/rebrand_mobile_navigation", "modules/clean/react/index/components/rebrand_footer_plane", "modules/clean/react/index/store"], function(e, t, n, a, r, o, i, s, d, l, c, m, u, p, b, g) {
    "use strict";

    function h() {
        if (window.history) {
            var e = d.get_uri();
            e.query.add({
                _hp: "c"
            });
            var t = "?" + e.query.toString();
            window.history.pushState(location.pathname, "", t)
        }
    }

    function f(t) {
        i.waitForTTI().then(function() {
            new Promise(function(t, n) {
                e(["modules/clean/payments/snapengage"], t, n)
            }).then(n.__importStar).then(function(e) {
                var n = e.ajaxFetchAndLoadSnapengageParams,
                    a = e.logChatExposureTimed,
                    r = e.ChatExperiments;
                switch (t) {
                    case "V1":
                        n({
                            experimentNameToLog: r.DiscoConsumerHP,
                            experimentVariantToLog: t
                        });
                        break;
                    case "CONTROL":
                        a(r.DiscoConsumerHP, t, 30)
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), r = n.__importDefault(r), i = n.__importStar(i);
    var v = s.Loadable({
            loader: function() {
                return i.waitForTTI().then(function() {
                    return new Promise(function(t, n) {
                        e(["modules/clean/react/index/components/rebrand_footer_plane"], t, n)
                    }).then(n.__importStar).then(function(e) {
                        return e.RebrandFooterPlane
                    })
                })
            }
        }),
        _ = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleEvents = function(e) {
                    e.stopPropagation();
                    var t = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body).scrollTop,
                        n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    window.innerWidth >= 1023 && t >= .33 * n && g.RebrandStore.dispatch({
                        type: "hideDrawer"
                    })
                }, n.state = {
                    showMobileNav: !1
                }, window.innerWidth < 1024 && g.RebrandStore.dispatch({
                    type: "hideDrawer"
                }), n
            }
            return n.__extends(t, e), t.prototype.componentWillMount = function() {
                var e = this;
                g.RebrandStore.dispatch({
                    type: "setExperiments",
                    experiments: this.props.experiments
                }), g.RebrandStore.dispatch({
                    type: "setGates",
                    gates: this.props.gates
                }), g.RebrandStore.subscribe(function() {
                    return e.setState({
                        showMobileNav: g.RebrandStore.getState().mobileNav
                    })
                })
            }, t.prototype.componentDidMount = function() {
                var e = this.props.experiments.expDiscoChat;
                "V1" === e && h(), f(e)
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.content,
                    n = e.experiments,
                    o = e.gates,
                    i = e.locale,
                    s = e.isEdge,
                    d = e.isInternetExplorer,
                    g = e.footerContent;
                return r.default.createElement("main", {
                    className: a.default({
                        IndexRebrandPage: !0,
                        "AtlasGrotesk-Regular-Web": !0,
                        "ob-type": !0,
                        "IndexRebrandPage-mobile__visible": this.state.showMobileNav,
                        "IndexRebrandPage-browser__internet-explorer": d,
                        "IndexRebrandPage-browser__edge": s
                    }),
                    onClick: this.handleEvents
                }, this.state.showMobileNav && r.default.createElement(p.RebrandMobileNavigation, null), r.default.createElement(l.RebrandHero, {
                    content: t.hero,
                    experiments: n,
                    locale: i
                }), r.default.createElement(c.RebrandCreation, {
                    content: t.sections.keep,
                    deferImages: !0,
                    experiments: n,
                    locale: i
                }), r.default.createElement(m.RebrandMedia, {
                    content: t.sections.collaborate,
                    reversedLayout: !0,
                    locale: i,
                    theme: "collaborate",
                    deferImages: !0
                }), r.default.createElement(m.RebrandMedia, {
                    content: t.sections.create,
                    experiments: n,
                    locale: i,
                    theme: "create",
                    deferImages: !0
                }), r.default.createElement(u.RebrandSidekick, {
                    content: t.sidekick,
                    hideCTA: !s && !d
                }), !o.seoFooter && r.default.createElement(v, {
                    theme: "blackened",
                    footerContent: g,
                    homePreloadJsInHomepage: o.homePreloadJsInHomepage
                }), o.seoFooter && r.default.createElement(b.RebrandFooterPlane, {
                    theme: "blackened",
                    footerContent: g,
                    homePreloadJsInHomepage: o.homePreloadJsInHomepage
                }))
            }, t
        })(r.default.Component);
    t.IndexRebrandPage = o.requireCssWithComponent(_, ["/static/css/index/rebrand_page-vflLg_VeF.css"]), t.discoChatUpdateURI = h, t.showOrLogChat = f
}), define("modules/clean/react/index/store", ["require", "exports", "tslib", "redux", "modules/clean/redux/unsupported", "modules/clean/redux/devtools", "external/redux-thunk"], function(e, t, n, a, r, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importDefault(i);
    var s = {},
        d = {},
        l = function(e, t) {
            switch (void 0 === e && (e = s), t.type) {
                case "setExperiments":
                    return t.experiments;
                default:
                    return e
            }
        },
        c = function(e, t) {
            switch (void 0 === e && (e = d), t.type) {
                case "setGates":
                    return t.gates;
                default:
                    return e
            }
        },
        m = function(e, t) {
            switch (void 0 === e && (e = !1), t.type) {
                case "showMobileNav":
                    return !0;
                case "hideMobileNav":
                    return !1;
                default:
                    return e
            }
        },
        u = function(e, t) {
            switch (void 0 === e && (e = !0), t.type) {
                case "showDrawer":
                    return !0;
                case "hideDrawer":
                    return !1;
                default:
                    return e
            }
        },
        p = function(e, t) {
            switch (void 0 === e && (e = "signUp"), t.type) {
                case "showSignUp":
                    return "signUp";
                case "showSignIn":
                    return "signIn";
                default:
                    return e
            }
        },
        b = a.combineReducers({
            drawer: u,
            experiments: l,
            form: p,
            gates: c,
            mobileNav: m
        });
    t.RebrandStore = r.createStore(b, {}, o.composeEnhancersWithDevTools(a.applyMiddleware(i.default)))
}), define("modules/clean/react/placeholder_img", ["require", "exports", "tslib", "react", "modules/clean/web_timing_logger"], function(e, t, n, a, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a);
    var o = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.state = {
                isPostTTI: !1
            }, n
        }
        return n.__extends(t, e), t.prototype.componentDidMount = function() {
            var e = this;
            r.waitForTTI().then(function() {
                e.setState({
                    isPostTTI: !0
                })
            })
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.src,
                n = e.className,
                r = e.alt,
                o = e.children;
            return this.state.isPostTTI ? a.default.createElement("span", null, o) : a.default.createElement("img", {
                src: t,
                sizes: t + " 1x " + t + " 2x",
                className: n,
                alt: r
            })
        }, t
    })(a.default.Component);
    t.PlaceholderImg = o
}), define("spectrum-arbor/atoms/arbor_picture", ["require", "exports", "tslib", "react", "classnames"], function(e, t, n, a, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importStar(a), r = n.__importDefault(r);
    var o = function(e, t) {
        var n = e.srcSet,
            r = e.media,
            o = void 0 === r ? "(all and min-width: 0)" : r;
        return a.createElement("source", {
            key: t,
            srcSet: n,
            media: o
        })
    };
    t.ArborPicture = function(e) {
        var t, n, i = e.alt,
            s = e.className,
            d = void 0 === s ? "" : s,
            l = e.cover,
            c = e.imgClassName,
            m = void 0 === c ? "" : c,
            u = e.objectPosition,
            p = void 0 === u ? "50% 50%" : u,
            b = e.sources,
            g = e.src,
            h = r.default((t = {
                "arbor-picture": !0,
                "arbor-picture--cover": l
            }, t[d] = Boolean(d), t)),
            f = r.default((n = {
                "arbor-picture__img": !0,
                "arbor-picture__img--cover": l
            }, n[m] = Boolean(m), n)),
            v = {
                objectPosition: p
            };
        return a.createElement("picture", {
            className: h
        }, b.map(o), a.createElement("img", {
            style: v,
            className: f,
            src: g,
            alt: i
        }))
    }
});
//# sourceMappingURL=pkg-index-rebrand.min.js-vflp3dYCa.map