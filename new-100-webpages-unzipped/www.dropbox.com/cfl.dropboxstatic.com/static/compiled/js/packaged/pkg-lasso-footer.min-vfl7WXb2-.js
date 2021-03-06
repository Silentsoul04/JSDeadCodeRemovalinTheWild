define("modules/clean/growth/types", ["require", "exports", "tslib", "modules/core/browser"], function(e, t, o, n) {
    "use strict";

    function r(e) {
        return "folder" === e[".tag"]
    }

    function a(e) {}

    function l() {
        var e = n.get_uri().path;
        return /^\/h$/.test(e) ? "home" : "browse"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.isFolder = r;
    (function(e) {
        e.Private = "post_setup_edu_rich_upload_confirmation_private_folder", e.Team = "post_setup_edu_rich_upload_confirmation_team_folder", e.Shared = "post_setup_edu_rich_upload_confirmation_shared_folder"
    })(t.FolderType || (t.FolderType = {})), t.enforceExhaustive = a, t.calculateViewContext = l
}), define("modules/clean/intl_router_utils", ["require", "exports", "tslib", "modules/core/browser", "modules/constants/locales"], function(e, t, o, n, r) {
    "use strict";

    function a() {
        var e = n.get_pathname();
        if ("/" !== e[0]) return !1;
        for (var t = e.split("/", 2), o = t[1], a = 0, l = r.LIST_OF_LOCALES_WITHOUT_INTERNAL; a < l.length; a++) {
            if (l[a].localeCode === o) return !0
        }
        return !1
    }

    function l(e) {
        var t = n.get_pathname();
        if ("/" !== t[0]) return t;
        var o = t.split("/"),
            a = o[1];
        return r.LIST_OF_LOCALES_WITHOUT_INTERNAL.some(function(t) {
            return t.localeCode === e
        }) && r.LIST_OF_LOCALES_WITHOUT_INTERNAL.some(function(e) {
            return e.localeCode === a
        }) ? (o[1] = e, o.join("/")) : t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), r = o.__importStar(r), t.isIntlRouterPath = a, t.getCurrentPathWithLocaleCode = l
}), define("modules/clean/react/callout_orchestrator", ["require", "exports", "tslib", "react", "external/react-redux", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer/data/selectors", "modules/clean/react/file_viewer/files2_utils"], function(e, t, o, n, r, a, l, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var i;
    (function(e) {
        e[e.CloudDocsEdit = 0] = "CloudDocsEdit", e[e.Comments = 1] = "Comments", e[e.Edu = 2] = "Edu", e[e.OpenButton = 3] = "OpenButton", e[e.Paper = 4] = "Paper", e[e.PASS = 5] = "PASS", e[e.Watermarking = 6] = "Watermarking"
    })(i = t.CalloutType || (t.CalloutType = {}));
    var c = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.componentWillMount = function() {
            var e = this.props,
                t = e.currentCalloutType,
                o = e.setCurrentCalloutType,
                n = e.type,
                r = e.campaignVersionId,
                a = e.currentUser;
            s.isFiles2M3Enabled() ? !a && o && n && !t && o(n) : r || !o || !n || t && n !== i.Watermarking || o(n)
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.children,
                o = e.currentCalloutType,
                n = e.type,
                r = e.campaignVersionId,
                a = e.selectedPromptCampaign,
                l = e.currentUser,
                i = r && a && r === a.version_id;
            return s.isFiles2M3Enabled() ? l || o !== n ? i ? t : null : t : i ? o ? null : t : r || n && o !== n ? null : t
        }, t
    })(n.default.Component);
    t.UnconnectedCalloutOrchestrator = c;
    var u = function(e) {
            return {
                currentCalloutType: l.getCurrentCalloutType(e),
                selectedPromptCampaign: l.getSelectedPromptCampaign(e),
                currentUser: l.getCurrentUser(e)
            }
        },
        d = r.connect(u, {
            setCurrentCalloutType: a.setCurrentCalloutType
        })(c);
    t.CalloutOrchestrator = d
}), define("modules/clean/react/growth/util", ["require", "exports", "modules/clean/api_v2/user_client", "modules/clean/payments/skus/constants"], function(e, t, o, n) {
    "use strict";

    function r() {
        if (window.ensemble) return window.ensemble.viewer.getActiveUser().userId
    }

    function a() {
        return window && window.navigator && window.navigator.platform && window.navigator.platform.indexOf && window.navigator.platform.indexOf("Mac") !== -1 ? "mac" : "win"
    }

    function l(e) {
        if (e.finalSubState.planSku) {
            if (e.finalSubState.planSku.productType === n.ProductPlanType.PLUS) return s.PLUS;
            if (e.finalSubState.planSku.productType === n.ProductPlanType.PROFESSIONAL) return s.PROFESSIONAL
        }
        return null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s;
    (function(e) {
        e[e.MONTHLY = 1] = "MONTHLY", e[e.YEARLY = 2] = "YEARLY", e[e.PLUS = 3] = "PLUS", e[e.PROFESSIONAL = 4] = "PROFESSIONAL", e[e.ADD_EVH = 5] = "ADD_EVH", e[e.REMOVE_EVH = 6] = "REMOVE_EVH"
    })(s = t.PerformPlanTransition || (t.PerformPlanTransition = {})), t.getActiveUserId = r, t.getImageOS = a, t.getTransitionChangeType = l;
    (function(e) {
        e.LOCAL = "local", e.ONDEMAND = "on_demand"
    })(t.SmartSyncOption || (t.SmartSyncOption = {})), t.markModuleAsCompleted = function(e, t) {
        (new o.UserApiV2Client).ns("growth").rpc("mark_onboarding_modules_as_completed", {
            modules: [t]
        }, {
            subjectUserId: e
        })
    }
}), define("modules/clean/react/lasso/footer", ["require", "exports", "tslib", "modules/clean/loggers/growth_features_events_logger", "react", "modules/clean/react/title_bubble", "modules/clean/react/locale_selector", "spectrum/overflow_button", "spectrum/popover", "modules/clean/analytics", "modules/core/i18n"], function(e, t, o, n, r, a, l, s, i, c, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), r = o.__importDefault(r), l = o.__importStar(l);
    var d = l.LocaleSelectorModal,
        p = (function(t) {
            function l() {
                var a = null !== t && t.apply(this, arguments) || this;
                return a.state = {
                    hasMouseOver: !1
                }, a.noop = function() {}, a.loadComponent = function(t) {
                    new Promise(function(t, o) {
                        e(["modules/clean/web_timing_logger"], t, o)
                    }).then(o.__importStar).then(function(n) {
                        (0, n.waitForTTI)().then(function() {
                            var n = function(e) {
                                var o = e.Modal;
                                a.setState({
                                    modal: o
                                }), t()
                            };
                            n.perfName = "react_modal", new Promise(function(t, o) {
                                e(["modules/clean/react/modal"], t, o)
                            }).then(o.__importStar).then(n)
                        })
                    })
                }, a.renderPopoverContentItem = function(e) {
                    return r.default.createElement(i.PopoverContentItem, {
                        className: "other-link",
                        key: e.text.toLowerCase(),
                        href: e.href,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, e.text)
                }, a.logLinkClick = function(e) {
                    c.TeamsWebActionsLogger.log("footer_button_clicked"), n.logLassoEvent("footer_button_clicked", {
                        buttonText: e.currentTarget.text,
                        buttonHref: e.currentTarget.href
                    })
                }, a.handleLinkSelection = function(e, t) {
                    a.logLinkClick(t), "language-button" === t.currentTarget.id && a.showLocaleModal()
                }, a.onMouseEnter = function(e) {
                    a.setState({
                        hasMouseOver: !0
                    })
                }, a.onMouseLeave = function(e) {
                    a.setState({
                        hasMouseOver: !1
                    })
                }, a
            }
            return o.__extends(l, t), l.prototype.componentDidMount = function() {
                this.loadComponent(this.noop)
            }, l.prototype.renderPopoverContentItems = function() {
                var e = this.props.otherLinks.map(this.renderPopoverContentItem),
                    t = r.default.createElement(i.PopoverContentItem, {
                        className: "other-link",
                        key: "language",
                        id: "language-button",
                        href: "#"
                    }, this.props.buttonContent.language);
                return e.push(t), e
            }, l.prototype.showLocaleModal = function() {
                var e = this.state.modal;
                e ? e.showInstance(r.default.createElement(d, {
                    isTeamAdminSettingsConsole: !1,
                    shouldAllowInternalLocales: !1,
                    isRebrand: !1
                })) : this.loadComponent(this.showLocaleModal)
            }, l.prototype.render = function() {
                var e = this.props,
                    t = e.buttonContent,
                    o = e.privacyHref,
                    n = e.helpHref,
                    l = this.state.hasMouseOver ? "secondary" : "borderless";
                return r.default.createElement("footer", {
                    className: "lasso-footer",
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave
                }, r.default.createElement("div", {
                    id: "page-footer"
                }, r.default.createElement(i.Popover, {
                    className: "other-links",
                    onSelection: this.handleLinkSelection
                }, r.default.createElement(i.PopoverTrigger, null, r.default.createElement(s.OverflowButton, {
                    tagName: "span",
                    "aria-label": t.more,
                    variant: l
                })), r.default.createElement(i.PopoverContent, {
                    attachment: "right",
                    position: "above"
                }, this.renderPopoverContentItems())), r.default.createElement("a", {
                    className: "privacy-link",
                    href: o,
                    onClick: this.logLinkClick,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, t.privacy), r.default.createElement(a.TitleBubble, {
                    content: t.help,
                    position: a.TitleBubble.POSITIONS.TOP,
                    isTargetPositionFixed: !1,
                    distanceFromTarget: 5
                }, r.default.createElement("a", {
                    className: "help-button",
                    "aria-label": u._("Help center"),
                    href: n,
                    onClick: this.logLinkClick,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "?"))))
            }, l
        })(r.default.Component);
    t.LassoFooter = p, t.RootComponent = function(e) {
        return r.default.createElement(p, o.__assign({}, e))
    }
}), define("modules/clean/react/locale_selector", ["require", "exports", "tslib", "react", "external/react-dom-factories", "external/prop-types", "external/lodash", "jquery", "modules/clean/ajax", "modules/clean/intl_router_utils", "modules/clean/react/css", "modules/clean/react/modal", "modules/clean/react/sprite", "modules/constants/locales", "modules/constants/page_load", "modules/core/browser", "modules/core/i18n", "modules/core/notify", "modules/core/uri"], function(e, t, o, n, r, a, l, s, i, c, u, d, p, m, _, f, h, g, C) {
    "use strict";

    function v(e) {
        if (null != e ? e.dom_id : void 0) return s.default(document).ready(function() {
            return s.default("#" + e.dom_id).click(function() {
                return y.wrappedClass.showModal()
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r), a = o.__importStar(a), s = o.__importDefault(s), i = o.__importStar(i), m = o.__importStar(m), _ = o.__importStar(_), f = o.__importStar(f);
    var T = n.default.createElement,
        L = function(e, t, o) {
            void 0 === o && (o = !1);
            var n = o ? "/team/admin/set_locale" : "/set_locale";
            return g.Notify.success(h._("Changing language...")), i.SilentBackgroundRequest({
                url: new C.URI({
                    path: n
                }),
                data: {
                    locale: e,
                    locale_cont: t
                },
                success: function() {
                    return f.redirect(t)
                }
            })
        },
        S = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = this.props.locale.localeName;
                return "" !== this.props.locale.decorator && (e += " [" + this.props.locale.decorator + "]"), r.span({
                    "data-locale": this.props.locale.localeCode
                }, e)
            }, t.displayName = "LocaleTag", t.propTypes = {
                locale: a.shape({
                    localeCode: a.string.isRequired,
                    localeName: a.string.isRequired,
                    decorator: a.string.isRequired
                }).isRequired
            }, t
        })(n.default.Component),
        b = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleCloseModal = function(e) {
                    return history.pushState("", document.title, f.get_href_no_hash())
                }, t.handleLocaleSelected = function(e) {
                    return function(o) {
                        return o.preventDefault(), history.pushState("", document.title, f.get_href_no_hash()), d.Modal.close(), L(e, f.get_href_no_hash(), t.props.isTeamAdminSettingsConsole)
                    }
                }, t._renderLocaleList = function() {
                    var e, o = c.isIntlRouterPath();
                    return e = t.props.shouldAllowInternalLocales ? m.LIST_OF_LOCALES_WITH_INTERNAL : m.LIST_OF_LOCALES_WITHOUT_INTERNAL, r.div({
                        className: "react-locale-selector-modal"
                    }, r.ul({
                        className: "react-locale-selector-modal__list u-unlist u-trim-padding"
                    }, Array.from(e).map(function(e) {
                        return t._renderLocale(e, o)
                    })))
                }, t._renderLocale = function(e, o) {
                    return o ? n.default.createElement("li", {
                        key: e.localeCode
                    }, n.default.createElement("a", {
                        href: c.getCurrentPathWithLocaleCode(e.localeCode)
                    }, n.default.createElement(S, {
                        locale: e
                    }))) : n.default.createElement("li", {
                        key: e.localeCode
                    }, n.default.createElement("button", {
                        className: "locale-option button-as-link react-locale-selector-modal__list-item-button",
                        onClick: t.handleLocaleSelected(e.localeCode)
                    }, n.default.createElement(S, {
                        locale: e
                    })))
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = "uxa-modal",
                    t = "default",
                    o = 550;
                return this.props.isRebrand && (t = "simple", o = null, e += " rebrand-locale-modal"), T(d.Modal, {
                    onDismissCompleted: this.handleCloseModal,
                    className: e,
                    id: "locale-selector-modal",
                    ref: "modal",
                    width: o,
                    title: h._("Choose a language:"),
                    acceptButtonText: null,
                    style: t
                }, this._renderLocaleList())
            }, t.displayName = "LocaleSelectorModal", t.propTypes = {
                isTeamAdminSettingsConsole: a.bool.isRequired,
                shouldAllowInternalLocales: a.bool.isRequired,
                isRebrand: a.bool.isRequired
            }, t
        })(n.default.Component);
    t.LocaleSelectorModal = u.requireCssWithComponent(b, ["/static/css/components/react_locale_selector-vflyHsPEh.css", "/static/css/font_atlas_grotesk-vfldINMge.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css", "/static/css/modal-vflKK1XSJ.css"]);
    var w = (function(e) {
        function n() {
            var o = null !== e && e.apply(this, arguments) || this;
            return o.handleLocaleLinkClick = function(e) {
                return e.preventDefault(), d.Modal.showInstance(T(t.LocaleSelectorModal, {
                    isTeamAdminSettingsConsole: o.props.isTeamAdminSettingsConsole,
                    shouldAllowInternalLocales: o.props.shouldAllowInternalLocales,
                    isRebrand: o.props.isRebrand
                }))
            }, o._renderLocaleLink = function() {
                return r.span({
                    id: "locale-link"
                }, T(p.Sprite, {
                    group: "web",
                    name: "globe_gray_20x20",
                    alt: ""
                }), r.button({
                    className: "button-as-link react-locale-selector-link",
                    title: h._("Choose a language"),
                    onClick: o.handleLocaleLinkClick
                }, T(S, {
                    locale: l.find(m.LIST_OF_LOCALES_WITH_INTERNAL, function(e) {
                        return e.localeCode === _.USER_LOCALE
                    })
                }), T(p.Sprite, {
                    class: "arrow",
                    group: "web",
                    name: "arrow-up-gray",
                    alt: ""
                })))
            }, o
        }
        return o.__extends(n, e), n.showModal = function(e, o) {
            return void 0 === e && (e = !1), void 0 === o && (o = !0), d.Modal.showInstance(T(t.LocaleSelectorModal, {
                isTeamAdminSettingsConsole: e,
                shouldAllowInternalLocales: o,
                isRebrand: !1
            }))
        }, n.prototype.render = function() {
            return r.div({
                id: "locale-container"
            }, this._renderLocaleLink())
        }, n.displayName = "LocaleSelector", n.propTypes = {
            isTeamAdminSettingsConsole: a.bool,
            shouldAllowInternalLocales: a.bool,
            isRebrand: a.bool
        }, n.defaultProps = {
            isTeamAdminSettingsConsole: !1,
            shouldAllowInternalLocales: !0,
            isRebrand: !1
        }, n
    })(n.default.Component);
    t.LocaleSelectorWithoutCss = w;
    var y = u.requireCssWithComponent(w, ["/static/css/components/react_locale_selector-vflyHsPEh.css", "/static/css/font_atlas_grotesk-vfldINMge.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css"]);
    t.LocaleSelector = y, t.initialize_module = v
}), define("modules/clean/react/maestro/callout", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css", "modules/clean/react/bubble_dropdown_v2", "modules/clean/react/overlay", "modules/clean/react/callout_orchestrator", "spectrum/button"], function(e, t, o, n, r, a, l, s, i, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r);
    var u = [l.BubbleDropdownPositions.BOTTOM, l.BubbleDropdownPositions.BOTTOM_LEFT, l.BubbleDropdownPositions.TOP_LEFT, l.BubbleDropdownPositions.TOP_ALIGN_RIGHT, l.BubbleDropdownPositions.LEFT],
        d = (function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.onContentClicked = function(e) {
                    e.stopPropagation()
                }, o.onDismiss = function() {
                    o.setState({
                        show: !1
                    }, o.props.onDismiss)
                }, o.updateTargetDimension = function() {
                    var e = o.props.targetNode;
                    if (e) {
                        var t = e.getBoundingClientRect(),
                            n = t.width,
                            r = t.height;
                        o.setState({
                            targetNodeDimensions: {
                                width: n,
                                height: r
                            }
                        })
                    }
                }, o.state = {
                    show: t.show
                }, o
            }
            return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                !this.props.show && e.show && this.setState({
                    show: !0
                }), !this.props.parentHasBeenClicked && e.parentHasBeenClicked && this.onDismiss()
            }, t.prototype.componentDidUpdate = function(e, t) {
                !e.targetNode && this.props.targetNode && this.props.targetNode.addEventListener("click", this.onDismiss)
            }, t.prototype.getArrowPositionOverrides = function() {
                return this.state.targetNodeDimensions && this.props.position === l.BubbleDropdownPositions.TOP_ALIGN_RIGHT ? {
                    left: "calc(100% - " + this.state.targetNodeDimensions.width / 2 + "px)"
                } : {}
            }, t.prototype.getCssPositioningClass = function(e) {
                return e === l.BubbleDropdownPositions.TOP_ALIGN_RIGHT ? l.POSITION_TO_CSS_CLASS_MAP[l.BubbleDropdownPositions.TOP_LEFT] : l.POSITION_TO_CSS_CLASS_MAP[e]
            }, t.prototype.render = function() {
                if (!this.props.show || !this.state.show || !this.props.targetNode) return null;
                var e = this.props.position || l.BubbleDropdownPositions.BOTTOM;
                if (!u.includes(e)) return null;
                var t = this.props.calloutType || this.props.campaignVersionId ? i.CalloutOrchestrator : i.UnconnectedCalloutOrchestrator,
                    o = n.default("callout-container", "callout-container--" + this.getCssPositioningClass(e), this.props.className),
                    a = r.default.createElement(s.PositionedOverlay, {
                        targetNode: this.props.targetNode,
                        position: e,
                        onReposition: this.updateTargetDimension
                    }, r.default.createElement("div", {
                        className: o
                    }, r.default.createElement("div", {
                        onClick: this.onContentClicked,
                        className: n.default("callout-content", this.props.contentClassName)
                    }, r.default.createElement("div", {
                        className: "callout-content-title"
                    }, r.default.createElement("button", {
                        className: "callout-dismiss",
                        "aria-label": "dismiss-callout",
                        onClick: this.onDismiss
                    }), this.props.title), r.default.createElement("div", {
                        className: "callout-content-message"
                    }, this.props.message), this.props.CTAText && this.props.onClickCTA && r.default.createElement(c.Button, {
                        className: "callout-cta",
                        onClick: this.props.onClickCTA,
                        variant: "borderless"
                    }, this.props.CTAText)), r.default.createElement("div", {
                        className: "callout-arrow-container",
                        style: this.getArrowPositionOverrides()
                    }, r.default.createElement("div", {
                        className: "callout-arrow-border"
                    }), r.default.createElement("div", {
                        className: "callout-arrow"
                    }))));
                return this.props.unorchestrated ? a : r.default.createElement(t, {
                    type: this.props.calloutType,
                    campaignVersionId: this.props.campaignVersionId
                }, a)
            }, t
        })(r.default.Component),
        p = ["/static/css/callout-vflCkWQ7L.css"];
    t.Callout = a.requireCssWithComponent(d, p)
});
//# sourceMappingURL=pkg-lasso-footer.min.js-vflbzgeDF.map