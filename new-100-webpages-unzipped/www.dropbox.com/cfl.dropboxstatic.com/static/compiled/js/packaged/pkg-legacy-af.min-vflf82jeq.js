define("modules/clean/business/components/snap_engage_link", ["require", "exports", "modules/clean/snapengage"], function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (function() {
            function e(e, t) {
                var r = this;
                this.handleClick = function(e) {
                    e.preventDefault(), "support" === r.options.chatType ? a.DropboxSnapEngage.startSupportChat(r.options.supportWidgetId) : a.DropboxSnapEngage.startReactiveChat()
                }, this.options = t, e.on("click", this.handleClick)
            }
            return e
        })();
        t.SnapEngageLink = r
    }), define("modules/clean/components/password_strength_meter", ["require", "exports", "tslib", "react", "external/classnames", "modules/core/i18n", "modules/clean/react/css", "modules/clean/react/bubble_dropdown_v2", "modules/clean/web_timing_logger", "modules/core/cancelable_promise"], function(e, t, a, r, n, o, s, i, l, c) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var u = (function(t) {
            function s(r) {
                var n = t.call(this, r) || this;
                return n.setZxcvbn = function(e) {
                    var t = e.default;
                    n.setState({
                        zxcvbn: t
                    })
                }, n.getPasswordScore = function(e) {
                    return n.state.zxcvbn ? n.state.zxcvbn(e).score : 0
                }, n.state = {}, r.zxcvbnPostTti ? l.waitForTTI().then(function() {
                    n.zxcvbnPromise = c.makeCancelable(new Promise(function(t, a) {
                        e(["external/zxcvbn"], t, a)
                    }).then(a.__importStar)), n.zxcvbnPromise.then(n.setZxcvbn)
                }) : (n.zxcvbnPromise = c.makeCancelable(new Promise(function(t, a) {
                    e(["external/zxcvbn"], t, a)
                }).then(a.__importStar)), n.zxcvbnPromise.then(n.setZxcvbn)), n
            }
            return a.__extends(s, t), s.prototype.componentWillUnmount = function() {
                this.zxcvbnPromise && this.zxcvbnPromise.cancel()
            }, s.prototype.render = function() {
                var e = this.props.password,
                    t = e.length ? Math.max(1, this.getPasswordScore(e)) : 0,
                    a = ["", o._("Weak"), o._("So-so"), o._("Good"), o._("Great!")],
                    s = [4, 3, 2, 1],
                    l = "RIGHT";
                this.props.bubblePosition && this.props.bubblePosition in i.BubbleDropdown.POSITIONS && (l = this.props.bubblePosition);
                var c = this.props.bubbleDescription;
                return c || (c = o._("Passwords must be 6 characters or more. Good passwords             are hard to guess and use uncommon words, numbers, symbols, and             uppercase letters.")), r.default.createElement("div", {
                    className: "password-input-meter " + this.props.className,
                    tabIndex: -1,
                    "aria-label": o._("Password strength")
                }, s.map(function(e) {
                    var a = n.default({
                        "password-input-dot": !0,
                        "password-input-dot-selected--weak": t >= e && t <= 2,
                        "password-input-dot-selected": t >= e
                    });
                    return r.default.createElement("div", {
                        key: "password-input-dot-" + e,
                        className: a
                    })
                }), r.default.createElement(i.BubbleDropdown, {
                    position: i.BubbleDropdown.POSITIONS[l],
                    targetButton: r.default.createElement("button", {
                        className: "password-bubble__button"
                    }),
                    className: this.props.bubbleClassName
                }, r.default.createElement("div", {
                    className: "password-bubble__content"
                }, r.default.createElement("div", {
                    className: "password-bubble__title"
                }, a[t] || ""), r.default.createElement("div", {
                    className: "password-bubble__desc"
                }, c))))
            }, s
        })(r.default.Component);
        t.PasswordStrengthMeter = s.requireCssWithComponent(u, ["/static/css/components/password_strength_meter-vflAqZDga.css"])
    }), define("modules/clean/react/business/components/headers/payments_header", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger", "modules/clean/react/arbor/aspen/elements/arbor_supernav"], function(e, t, a, r, n, o, s, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), s = a.__importStar(s);
        var l = o.Loadable({
                loader: function() {
                    return s.waitForTTI().then(function() {
                        return new Promise(function(t, a) {
                            e(["modules/clean/react/payments/buy/components/payments/sox_compliance_warning"], t, a)
                        }).then(a.__importStar).then(function(e) {
                            return e.SOXComplianceBanner
                        })
                    })
                }
            }),
            c = (function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.renderSOXBanner = function() {
                    var e = this.props.SOXComplianceMessage;
                    return e ? r.default.createElement(l, {
                        message: e
                    }) : null
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        a = e.phoneNumber,
                        o = e.fixed,
                        s = e.glyph,
                        l = e.wordmark,
                        c = [{
                            title: n._("Contact sales"),
                            children: [{
                                title: n._("Email"),
                                url: "/business/contact",
                                type: "email",
                                disabled: !1
                            }, {
                                title: n._("%(phone_number)s").format({
                                    phone_number: a
                                }),
                                url: "tel:%(phone_number)s".format({
                                    phone_number: a
                                }),
                                type: "phone",
                                disabled: !a
                            }]
                        }];
                    return r.default.createElement("div", null, this.renderSOXBanner(), r.default.createElement(i.ArborSuperNav, {
                        className: t,
                        fixed: o !== !1,
                        leftAlignLogo: !0,
                        logoPlatform: "business",
                        navLinksRight: c,
                        glyph: s,
                        wordmark: l
                    }))
                }, t
            })(r.default.Component);
        t.PaymentsHeader = c
    }), define("modules/clean/react/business/components/headers/simple_header", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/react/arbor/aspen/elements/arbor_supernav"], function(e, t, a, r, n, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r);
        var s = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.trialDays,
                    a = e.isTryItFree;
                return r.default.createElement(o.ArborSuperNav, {
                    className: this.props.className,
                    leftAlignLogo: !0,
                    navCTA: {
                        title: a ? n._("Try it free") : n._("Try free for %(trial_days)s days").format({
                            trial_days: t
                        }),
                        url: "/business/try",
                        trackingId: "biz_nav_try"
                    },
                    fixed: !0,
                    logoPlatform: "business",
                    makeRightCtaPrimary: this.props.makeRightCtaPrimary,
                    glyph: this.props.glyph,
                    wordmark: this.props.wordmark
                })
            }, t
        })(r.default.Component);
        t.SimpleHeader = s
    }), define("modules/clean/react/payments/business/actions/business_action_creator", ["require", "exports", "tslib", "external/redux", "external/lodash", "modules/clean/react/payments/common/form/actions/actions", "modules/clean/react/payments/business/actions/business_actions", "modules/clean/react/payments/buy/actions/buy_form_actions", "modules/clean/react/payments/buy/actions/page_actions"], function(e, t, a, r, n, o, s, i, l) {
        "use strict";

        function c(e) {
            return r.bindActionCreators(p(), e)
        }

        function u(e) {
            var t = m(d(), p());
            return r.bindActionCreators(t, e)
        }

        function m(e, t) {
            return n.assignIn(e, t)
        }

        function d() {
            return {
                submitTeamAddBillingForm: s.submitAddBillingForm
            }
        }

        function p() {
            return {
                updateHistory: l.updateHistory,
                blurEmail: o.blurEmail,
                clickGoogleSignup: o.clickGoogleSignup,
                fetchSubChangePlans: s.fetchSubChangePlans,
                showFormFieldErrors: o.showFormFieldErrors,
                submitTeamForm: s.submitTeamForm,
                toggleExistingAccount: s.toggleExistingAccount,
                updateFormStep: s.updateFormStep,
                updateCountryCode: o.updateCountryCodeAndPrice,
                updateFirstName: o.updateFirstName,
                updateLastName: o.updateLastName,
                updateEmail: o.updateEmail,
                updatePassword: o.updatePassword,
                updateTeamName: o.updateTeamName,
                updateTeamPhone: o.updateTeamPhone,
                updateCompanySize: o.updateCompanySize,
                updateNumberOfUsers: o.updateNumberOfUsers,
                updateSchedule: o.updateSchedule,
                updateProductPlanType: o.updateProductPlanType,
                updatePaymentMethod: o.updatePaymentMethod,
                updateZipCode: o.updateZipCodeAndPrice,
                updateVat: o.updateVatAndPrice,
                updateCpf: o.updateCpf,
                updateCpfName: o.updateCpfName,
                updateNonce: o.updateNonce,
                updateAdyenEncryptedCard: o.updateAdyenEncryptedCard,
                updateBrowserInfo: o.updateBrowserInfo,
                updateThreeDsData: o.updateThreeDsData,
                triggerThreeDsChallenge: o.triggerThreeDsChallenge,
                triggerThreeDsFingerprint: o.triggerThreeDsFingerprint,
                updateBIN: o.updateBIN,
                updateAccountHolderName: o.updateAccountHolderName,
                updateIBAN: o.updateIBAN,
                updateMandateSigned: o.updateMandateSigned,
                updateTermsAndService: o.updateTermsAndService,
                updateHasMarkedTTI: s.updateHasMarkedTTI,
                updateEmailsToInvite: o.updateEmailsToInvite,
                updateFormHeight: s.updateFormHeight,
                updateRevealedSteps: s.updateRevealedSteps,
                updatePhone: o.updatePhone,
                updateCity: o.updateCity,
                updateName: o.updateName,
                updateAddress: o.updateAddress,
                blurZipCode: o.blurZipCode,
                blurVat: o.blurVat,
                blurCpf: o.blurCpf,
                blurAccountHolderName: o.blurAccountHolderName,
                blurIBAN: o.blurIBAN,
                blurPhone: o.blurPhone,
                blurCity: o.blurCity,
                blurName: o.blurName,
                blurAddress: o.blurAddress,
                updateIdealBank: i.updateIdealBank
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importStar(r), n = a.__importStar(n), o = a.__importStar(o), s = a.__importStar(s), i = a.__importStar(i), l = a.__importStar(l), t.bindTeamBuyActions = c, t.bindTeamAddBillingActions = u
    }), define("modules/clean/react/payments/business/actions/business_actions", ["require", "exports", "tslib", "modules/clean/ajax_as_promised", "modules/clean/payments/payment_form/payment_form_spec", "modules/clean/react/payments/common/form/actions/actions", "modules/clean/react/payments/business/state/business_state", "modules/clean/react/payments/checkout/components/modals/login_modal", "modules/clean/payments/skus/constants", "modules/clean/stormcrow/experiment", "modules/clean/payments/skus/subscription_change_plan", "modules/clean/payments/skus/pricing_data", "modules/clean/web_register_logging_data", "modules/core/i18n", "modules/core/notify", "modules/clean/react/payments/common/pricing/actions/actions"], function(e, t, a, r, n, o, s, i, l, c, u, m, d, p, f, h) {
        "use strict";

        function _(e, t, a, r, s) {
            return void 0 === a && (a = {}),
                function(i, l) {
                    var u = l(),
                        m = u.formData,
                        d = u.pageState,
                        p = m.countryCode.formattedValue,
                        f = d.experiments,
                        h = d.paymentFormSpec,
                        _ = d.existingAccountShowing;
                    if (m.productPlanType.formattedValue) {
                        var y = ["numberOfUsers", "schedule", "termsAndService", "countryCode"];
                        d.isTrial || y.push("teamName", "teamPhone", "companySize"), _ || y.push("firstName", "lastName", "email", "password"), c.Experiment(f.subgrowthBizNoCcTrials).isActive || (y.push("paymentMethod"), h.allow_zip_code_for_country(p) && y.push("zipCode"), h.should_show_vat_for_country(p) && y.push("vat"), f.showCpf && h.should_require_cpf(p, u.formData.paymentMethod.formattedValue) && (y.push("cpf"), f.showCpfName && y.push("cpfName")), f && h.showPSD2FieldsToUser(m.paymentMethod.formattedValue, p, !!f.psd2AddressFields) && y.push("name", "city", "address"), m.paymentMethod.formattedValue === n.PaymentMethod.CreditCard ? (y.push("nonce"), y.push("adyenEncryptedCard"), y.push("bin"), y.push("browserInfo"), y.push("threeDsData")) : m.paymentMethod.formattedValue === n.PaymentMethod.DirectDeposit && y.push("accountHolderName", "iban", "mandateSigned")), v(a, u).then(function(a) {
                            i(o.submitForm(e, y, t, a, void 0, r, s))
                        })
                    }
                }
        }

        function y(e, t) {
            return function(a, r) {
                var n = r(),
                    i = n.pageState,
                    l = n.formData,
                    c = i.formStep,
                    u = [];
                if (void 0 !== e) {
                    if (e === c && t !== C.PreSelectedSku) return
                } else e = c + 1;
                if (i.isTrial) {
                    var m = s.TryFormSteps(),
                        d = m.planSelectionStep,
                        p = m.paymentInfoStep;
                    e === d ? i.existingAccountShowing || (u = u.concat(["firstName", "lastName", "email", "password"])) : e === p && (u = u.concat(["schedule", "numberOfUsers"]))
                }
                t === C.RestoreContinueButton && (u = u.concat(["teamName", "teamPhone", "companySize", "emailsToInvite"])), o.isValidSubmitState(l, u) ? (a({
                    type: "UpdateFormStep",
                    step: e,
                    origin: t
                }), window.location.hash = e.toString(), window.scrollTo(0, 0)) : a(o.showFormFieldErrors(u, "UpdateFormStep"))
            }
        }

        function g(e) {
            return function(t, a) {
                var r = a();
                if (r.pageState.userInfo.existingAccount) t({
                    type: "ToggleExistingAccount",
                    show: e
                });
                else {
                    var n = p._("Sign in to your existing account");
                    i.LoginModal.getInstance(n).updateRedirectUrl(r.formData.productPlanType.rawValue).show()
                }
            }
        }

        function S(e, t, a, r, s) {
            return function(i, l) {
                var c = l(),
                    u = c.formData,
                    m = c.pageState,
                    d = u.countryCode.formattedValue,
                    p = m.paymentFormSpec;
                if (u.productPlanType.formattedValue) {
                    var f = {
                            should_redirect: !1,
                            from_add_billing_page: !a
                        },
                        h = ["numberOfUsers", "schedule", "countryCode", "paymentMethod"];
                    p.allow_zip_code_for_country(d) && h.push("zipCode"), p.should_show_vat_for_country(d) && h.push("vat"), m.experiments.showCpf && p.should_require_cpf(d, c.formData.paymentMethod.formattedValue) && (h.push("cpf"), m.experiments.showCpfName && h.push("cpfName")), p.showPSD2FieldsToUser(u.paymentMethod.formattedValue, d, !!c.pageState.experiments.psd2AddressFields) && h.push("name", "city", "address"), c.formData.paymentMethod.formattedValue === n.PaymentMethod.CreditCard ? (h.push("nonce"), h.push("adyenEncryptedCard"), h.push("bin"), h.push("browserInfo"), h.push("threeDsData")) : c.formData.paymentMethod.formattedValue === n.PaymentMethod.DirectDeposit && h.push("accountHolderName", "iban", "mandateSigned"), a && h.push("teamName", "teamPhone", "companySize", "emailsToInvite", "termsAndService"), v(f, c).then(function(n) {
                        var l = "/team/payments/ajax_add_billing";
                        t && !a || (l = "/business/ajax_create_team_buy"), i(o.submitForm(l, h, e, n, void 0, r, s))
                    })
                }
            }
        }

        function v(e, t) {
            return a.__awaiter(this, void 0, void 0, function() {
                var r, n, o, s, i, c, u, m, p;
                return a.__generator(this, function(a) {
                    return r = t.formData, n = t.pricingState, o = t.pageState, s = r.schedule.formattedValue, i = r.productPlanType.formattedValue, c = n.subChangePlans.withSchedule(s).withProductPlanType(i).plans.pop(), c && (u = c.tvm, e.sub_change_plan = JSON.stringify(c)), m = o.existingAccountShowing, e.account_info_type = m ? "existing" : "new", e.currency = u && u.getCurrency(), e.expected_price = u && u.getExpectedPriceToken(), e.tos_version = "3", e.is_pre_select = o.isPreSelect, p = n.discountInfo, p && (p.cashCode && (e.code = p.cashCode), p.discountCode && (r.schedule.formattedValue === l.ScheduleId.YEARLY || p.allowMonthly) && (e.dcode = p.discountCode), p.resellerHash && (e.reseller_hash = p.resellerHash, e.reseller_discount = p.discountRatio)), e.ignore_bad_emails_silently = !0, e.request_id = t.pageState.requestId, e.submit_seq = t.pageState.submitSeq, [2, d.setWebRegisterLoggingData(e)]
                })
            })
        }

        function b(e, t, a, n, o) {
            return function(s, i) {
                var l = a ? a.cashCode : void 0,
                    c = a ? a.discountCode : void 0,
                    d = a ? a.resellerHash : void 0,
                    p = a ? a.discountRatio : void 0,
                    _ = {
                        is_trial: e,
                        plan_id: t,
                        code: l,
                        dcode: c,
                        reseller_hash: d,
                        reseller_discount: p,
                        user_info: JSON.stringify(n),
                        team_info: JSON.stringify(o)
                    };
                s(h.updateTransitionsStart()), r.WebRequest({
                    type: "POST",
                    url: "/business/ajax_fetch_sub_change_plans",
                    data: _
                }).then(function(e) {
                    var t = JSON.parse(e);
                    h.updateTransitionsSuccess(s, t.map(u.SubscriptionChangePlan.deserialize))
                }).catch(function() {
                    f.Notify.error(m.PricingDataException.notifyErrorMessage, 20)
                })
            }
        }

        function E() {
            return {
                type: "UpdateHasMarkedTTI"
            }
        }

        function x(e) {
            return function(t, a) {
                t({
                    type: "UpdateFormHeight",
                    newHeight: e
                })
            }
        }

        function T(e) {
            return function(t, a) {
                t({
                    type: "UpdateRevealedSteps",
                    step: e
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = a.__importStar(n);
        var C;
        (function(e) {
            e[e.HashChange = 0] = "HashChange", e[e.ContinueButton = 1] = "ContinueButton", e[e.SelectStandardButton = 2] = "SelectStandardButton", e[e.SelectAdvancedButton = 3] = "SelectAdvancedButton", e[e.PreSelectedSku = 4] = "PreSelectedSku", e[e.RestoreContinueButton = 5] = "RestoreContinueButton"
        })(C = t.UpdateFormStepOrigins || (t.UpdateFormStepOrigins = {})), t.submitTeamForm = _, t.updateFormStep = y, t.toggleExistingAccount = g, t.submitAddBillingForm = S, t.fetchSubChangePlans = b, t.updateHasMarkedTTI = E, t.updateFormHeight = x, t.updateRevealedSteps = T
    }), define("modules/clean/react/payments/business/components/help_section/buy_help_section", ["require", "exports", "tslib", "react", "modules/clean/react/sprite_div", "modules/core/i18n", "modules/constants/python", "modules/clean/react/payments/checkout/components/help_section/order_summary", "modules/clean/payments/payment_form/payment_form_spec", "modules/clean/react_format", "modules/constants/trademark", "modules/clean/stormcrow/experiment", "modules/clean/payments/skus/sku_content"], function(e, t, a, r, n, o, s, i, l, c, u, m, d) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var p = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.renderNCCTFAQSection = function() {
                    var e = t.props,
                        a = e.ncctVariant,
                        n = e.trialIsActive,
                        s = o._("Your free trial period won’t be affected. You will be charged after your free trial ends on       %(trial_end_date)s and your plan will transition without interruption.").format({
                            trial_end_date: t.props.trialEndDate
                        });
                    if (m.Experiment(a).variantIn("V7", "V9", "V10", "V11", "V12", "V13")) {
                        if (!n) return;
                        s = o._("Your free trial period won’t be affected. You won’t be charged until after your free           trial ends on %(trial_end_date)s and your plan will transition without interruption.").format({
                            trial_end_date: t.props.trialEndDate
                        })
                    }
                    return r.default.createElement("div", {
                        className: "section grid__container--p-small"
                    }, r.default.createElement("h1", {
                        className: "type--help-title"
                    }, o._("What happens to my free trial?")), r.default.createElement("p", {
                        className: "type--help-copy"
                    }, s))
                }, t
            }
            return a.__extends(t, e), t.prototype.renderInvoicePayments = function() {
                var e = this.props.countryCode.toLowerCase(),
                    t = r.default.createElement("a", {
                        key: "business-help-section-contact-link",
                        href: "/business/contact"
                    });
                return "de" === e ? c.reactFormat(o._("For 15 or more licenses, we accept payments by bank transfer.            Please <a>contact sales</a> for an invoice."), {
                    a: t
                }) : s.EU_COUNTRIES.indexOf(e) > -1 ? c.reactFormat(o._("If you require an invoice to make a payment,            please <a>contact our sales team</a>."), {
                    a: t
                }) : c.reactFormat(o._("For 15 or more licenses, we accept payments by bank transfer or check.            Please <a>contact sales</a> for an invoice."), {
                    a: t
                })
            }, t.prototype.renderOrderSummary = function() {
                var e = this.props,
                    t = e.discountInfo,
                    a = e.experiments,
                    n = e.formStep,
                    o = e.ncctVariant,
                    s = e.numberOfUsers,
                    l = e.pricingData,
                    c = e.schedule,
                    u = e.productPlanType,
                    m = e.taxNamesByCountry,
                    d = e.trialIsActive,
                    p = e.subChangePlans;
                if (!u) return null;
                var f, h, _ = p.withProductPlanType(u),
                    y = _.withSchedule(c).plans.pop(),
                    g = _.monthly().plans.pop();
                return f = y && y.tvm, h = g && g.tvm, r.default.createElement(i.OrderSummary, {
                    className: "grid__item--order-1 grid__item--medium--order-2",
                    discountInfo: t,
                    experiments: a,
                    formStep: n,
                    monthlyTransition: h,
                    ncctVariant: o,
                    numberOfUsers: s,
                    pricingData: l,
                    schedule: c,
                    taxNamesByCountry: m,
                    transition: f,
                    trialIsActive: d
                })
            }, t.prototype.renderFeatureList = function() {
                var e = d.SkuContentClient.deserialize(this.props.standardPlanInfo.skuContent),
                    t = [o._("Individual Dropbox account for each user"), o._("Space for your team to share and collaborate"), o._("%(vacuuming_policy_max_days)s days of file recovery and versioning").format({
                        vacuuming_policy_max_days: e.vacuumingPolicyMaxDays()
                    }), o._("Admin controls and priority support")],
                    a = t.map(function(e, t) {
                        return r.default.createElement("li", {
                            key: "buy-feature-" + t
                        }, r.default.createElement(n.default, {
                            group: "business",
                            name: "check-blue"
                        }), r.default.createElement("span", null, e))
                    });
                return r.default.createElement("ul", {
                    className: "type--help-copy help__feature-list"
                }, a)
            }, t.prototype.renderInfoSection = function() {
                var e = o._("What is %(trademark_business)s?").format({
                    trademark_business: u.TRADEMARK_BUSINESS
                });
                return r.default.createElement("div", {
                    className: "section"
                }, r.default.createElement("h1", {
                    className: "type--help-title"
                }, e), this.renderFeatureList())
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.countryCode,
                    a = e.ncctVariant,
                    n = e.paymentSpec,
                    s = e.productPlanType,
                    i = e.trialIsActive;
                if (!s) return null;
                var c, u, d = [],
                    p = [],
                    f = n.available_payment_methods_for_country(t),
                    h = null;
                if (f.indexOf(l.PaymentMethod.CreditCard) > -1)
                    for (var _ = n.supported_credit_cards_for_country(t), y = 0, g = _; y < g.length; y++) {
                        var S = g[y];
                        p.push(S), c = "supported-payment-icon#" + S, d.push(r.default.createElement("span", {
                            key: c,
                            className: S
                        }))
                    }
                if (f.indexOf(l.PaymentMethod.PayPal) > -1 && (p.push("paypal"), c = "supported-payment-icon#paypal", d.push(r.default.createElement("span", {
                        key: c,
                        className: "paypal helper"
                    }))), p) {
                    var v = p.join(", ").replace("_", "-"),
                        b = o._("We accept %(payment_methods)s").format({
                            payment_methods: v
                        });
                    h = r.default.createElement("span", {
                        className: "ax-visually-hidden"
                    }, b)
                }
                u = r.default.createElement("div", {
                    className: "section"
                }, r.default.createElement("h1", {
                    className: "type--help-title"
                }, o._("Accepted payment types")), r.default.createElement("div", {
                    className: "payment-options grid__item grid--y-middle"
                }, h, d), r.default.createElement("div", {
                    className: "invoice-payments type--help-copy"
                }, this.renderInvoicePayments()));
                var E;
                return m.Experiment(a).variantIn("V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13") && i && (E = this.renderNCCTFAQSection()), r.default.createElement("div", {
                    className: "grid__item grid__item--stack business-help-section"
                }, r.default.createElement("div", {
                    className: "section-container grid__item--order-2 grid__item--medium--order-1"
                }, E, this.renderInfoSection(), u), this.renderOrderSummary())
            }, t
        })(r.default.Component);
        t.BuyHelpSection = p
    }), define("modules/clean/react/payments/business/components/help_section/try_feature_list", ["require", "exports", "tslib", "react", "modules/clean/react/sprite_div", "modules/core/i18n", "modules/clean/stormcrow/experiment", "modules/constants/trademark", "modules/clean/payments/skus/sku_content"], function(e, t, a, r, n, o, s, i, l) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var c = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.isGrowthBasicOneClickExperimentV1 = function() {
                var e = this.props.experiments;
                return !!e && s.Experiment(e.growthBasicOneClick).variantIs("V1")
            }, t.prototype.renderHeading = function() {
                var e = o._("What’s included in the free trial?"),
                    t = "type--help-title",
                    a = this.props,
                    n = a.trialLength,
                    s = a.isExistingAccount;
                return this.isGrowthBasicOneClickExperimentV1() && s && (t = "type--get-back", e = o._("Try %(trademark_business)s risk-free for %(trial_length)s days and upgrade your team’s productivity with:").format({
                    trademark_business: i.TRADEMARK_BUSINESS,
                    trial_length: n
                })), r.default.createElement("h1", {
                    className: t
                }, e)
            }, t.prototype.renderTagline = function() {
                var e = this.props.isExistingAccount;
                return this.isGrowthBasicOneClickExperimentV1() && e ? r.default.createElement("p", {
                    className: "tagline--not-needed"
                }, o._("No credit card required. No cancellation needed.")) : null
            }, t.prototype.renderFeatures = function() {
                var e = this.props,
                    t = e.experiments,
                    a = e.isExistingAccount,
                    c = e.orionStandardPlan,
                    u = e.vacuumingPolicyMaxDays,
                    m = [o._("Full access to %(trademark_business)s for %(trial_length)s days").format({
                        trademark_business: i.TRADEMARK_BUSINESS,
                        trial_length: this.props.trialLength
                    }), o._("Space for your team to share and collaborate"), o._("%(vacuuming_policy_max_days)s days of file recovery and versioning").format({
                        vacuuming_policy_max_days: u
                    }), o._("Admin controls for additional security")];
                if (t && s.Experiment(t.subgrowthBizNoCcTrials).variantIn("V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13") && (m = [o._("Full access to %(trademark_business)s for %(trial_length)s days").format({
                        trademark_business: i.TRADEMARK_BUSINESS,
                        trial_length: this.props.trialLength
                    }), o._("Space for your team to share and collaborate"), o._("Advanced sharing and collaboration tools"), o._("Admin controls for additional security")], s.Experiment(t.nbgTryFirstPersonCopy).variantIs("V1") && (m = [o._("Full access to %(trademark_business)s for %(trial_length)s days").format({
                        trademark_business: i.TRADEMARK_BUSINESS,
                        trial_length: this.props.trialLength
                    }), o._("Space for my team to share and collaborate"), o._("Advanced sharing and collaboration tools"), o._("Admin controls for additional security")]), this.isGrowthBasicOneClickExperimentV1() && a && c)) {
                    var d = c.skuContent,
                        p = l.SkuContentClient.deserialize(d);
                    this.isGrowthBasicOneClickExperimentV1() && a && !p.hasUnlimitedSpace() && (m = [o._("All the space you need, starting at %(plan_info)s").format({
                        plan_info: p.spaceLongFormRounded()
                    }), o._("Easy-to-use admin tools to manage your team"), o._("Enhanced file sharing and collaboration")])
                }
                var f = m.map(function(e, t) {
                    return r.default.createElement("li", {
                        key: "try-feature-" + t
                    }, r.default.createElement(n.default, {
                        group: "business",
                        name: "check-blue"
                    }), r.default.createElement("span", null, e))
                });
                return r.default.createElement("ul", {
                    className: "feature-list type--help-copy help__feature-list"
                }, f)
            }, t.prototype.render = function() {
                return r.default.createElement("div", {
                    className: "section"
                }, this.renderHeading(), this.renderFeatures(), this.renderTagline())
            }, t
        })(r.default.Component);
        t.TryFeatureList = c
    }), define("modules/clean/react/payments/business/components/help_section/try_payment_info", ["require", "exports", "tslib", "react", "modules/core/i18n"], function(e, t, a, r, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r);
        var o = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.productPlanType,
                    a = e.trialEndDate;
                return t ? r.default.createElement("div", null, r.default.createElement("div", {
                    className: "help-section"
                }, r.default.createElement("h1", {
                    className: "type--help-title"
                }, n._("Will my credit card be charged right now?")), r.default.createElement("div", {
                    className: "type--help-copy"
                }, n._("Don’t worry, you won’t be charged now.                  You’ll only be charged if you don’t cancel                  your trial before it ends on %(trial_end_date)s.").format({
                    trial_end_date: a
                }))), r.default.createElement("div", {
                    className: "help-section"
                }, r.default.createElement("h1", {
                    className: "type--help-title"
                }, n._("Can I cancel the trial at any time?")), r.default.createElement("div", {
                    className: "type--help-copy"
                }, n._("Yes! You can cancel at any time. This is a no-obligation free trial."))), r.default.createElement("div", {
                    className: "help-section"
                }, r.default.createElement("h1", {
                    className: "type--help-title"
                }, n._("Can I change my payment method later?")), r.default.createElement("div", {
                    className: "type--help-copy"
                }, n._("Yes! You can change your payment method any time.")))) : null
            }, t
        })(r.default.Component);
        t.TryPaymentInfo = o
    }), define("modules/clean/react/payments/business/components/team_header_section", ["require", "exports", "tslib", "external/classnames", "react", "modules/constants/trademark", "modules/core/i18n", "modules/clean/react_format"], function(e, t, a, r, n, o, s, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var l = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.discountHeaderThanks = function(e, t) {
                return e && t ? s._("%(familiar_name)s, thanks for participating in %(offer_name)s.").format({
                    familiar_name: e,
                    offer_name: t
                }) : e ? s._("%(familiar_name)s, you have an exclusive offer.").format({
                    familiar_name: e
                }) : t ? s._("Thanks for participating in %(offer_name)s.").format({
                    offer_name: t
                }) : s._("You have an exclusive offer.")
            }, t.prototype.discountHeaderTitle = function(e) {
                var t = this.props,
                    a = t.isTrial,
                    r = t.pricingData,
                    l = t.trialLength,
                    c = e.isExtendedTrial;
                return a ? c ? i.reactFormat(s._("You’re eligible for a free <span>%(trial_length)s-day</span> trial."), {
                    span: n.default.createElement("span", {
                        key: "extended-trial-discount",
                        className: "discount"
                    }),
                    trial_length: l
                }) : i.reactFormat(s._("Start your %(trial_length)s-day free trial now, and save <span>           %(discount_percentage)s</span><br/> off your annual subscription!"), {
                    span: n.default.createElement("span", {
                        key: "trial-discount",
                        className: "discount"
                    }),
                    br: n.default.createElement("br", {
                        key: "trial-discount-br"
                    }),
                    discount_percentage: s.format_percent(r.getPromoDiscount()),
                    trial_length: l
                }) : i.reactFormat(s._("Save <span>%(discount_percentage)s off</span>         your annual %(trademark_business)s subscription!"), {
                    span: n.default.createElement("span", {
                        key: "purchase-discount",
                        className: "discount"
                    }),
                    discount_percentage: s.format_percent(r.getPromoDiscount()),
                    trademark_business: o.TRADEMARK_BUSINESS
                })
            }, t.prototype.discountHeader = function(e) {
                var t, a = this.props.subTitle,
                    o = e.expiresBy,
                    i = e.offerName,
                    l = this.props.userInfo.familiarName;
                return a && (t = n.default.createElement("h3", {
                    className: "sub-header-small type--help-copy"
                }, a)), n.default.createElement("div", {
                    className: r.default("top-header", "grid__container", "grid--x-center", this.props.className)
                }, n.default.createElement("h1", {
                    className: "header type--title-1"
                }, this.discountHeaderThanks(l, i), n.default.createElement("div", null, this.discountHeaderTitle(e))), o && n.default.createElement("h3", {
                    className: "sub-header grid__item grid--x-center type--help-title"
                }, s._("This offer expires on %(expires_by)s.").format({
                    expires_by: o
                })), t)
            }, t.prototype.defaultHeader = function() {
                var e = this.props,
                    t = e.centered,
                    a = e.title,
                    o = e.subTitle,
                    s = r.default("header", "type--title-1", "grid__item", {
                        "grid--x-center": t
                    }),
                    i = r.default("type--copy-mini", "grid__item", "sub-header-small", {
                        "grid--x-center": t
                    }),
                    l = r.default("top-header", {
                        grid__container: t
                    }, this.props.className);
                return n.default.createElement("div", {
                    className: l
                }, a && n.default.createElement("h1", {
                    className: s
                }, a), n.default.createElement("h3", {
                    className: i
                }, o))
            }, t.prototype.render = function() {
                return this.props.discountInfo && !this.props.discountInfo.resellerHash ? this.discountHeader(this.props.discountInfo) : this.defaultHeader()
            }, t.defaultProps = {
                centered: !0
            }, t
        })(n.default.Component);
        t.TeamHeaderSection = l
    }), define("modules/clean/react/payments/business/reducers/reducers", ["require", "exports", "tslib", "external/redux", "modules/clean/react/payments/business/state/business_state", "modules/clean/react/payments/common/form_value_helpers", "modules/clean/react/payments/common/form/reducers/reducers", "modules/clean/react/payments/common/payments/reducers/reducers", "modules/clean/react/payments/common/pricing/reducers/reducers"], function(e, t, a, r, n, o, s, i, l) {
        "use strict";

        function c(e) {
            return function(t, a) {
                return Object.assign({}, t, e(t, a))
            }
        }

        function u() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return e.reduce(function(e, t) {
                return function(a, r) {
                    return t(e(a, r), r)
                }
            })
        }

        function m(e, t) {
            if (void 0 === e && (e = !1), "ToggleExistingAccount" !== t.type) return e;
            var a = t;
            return void 0 !== a.show ? a.show : !e
        }

        function d(e, t) {
            return void 0 === e && (e = 0), "UpdateFormHeight" === t.type ? t.newHeight : e
        }

        function p(e, t) {
            return void 0 === e && (e = 0), "UpdateFormStep" === t.type ? t.step : e
        }

        function f(e, t) {
            return void 0 === e && (e = !1), "UpdateHasMarkedTTI" === t.type || e
        }

        function h(e, t) {
            return void 0 === e && (e = 0), "UpdateRevealedSteps" === t.type ? t.step : e
        }

        function _(e, t) {
            if ("SubmitFormError" !== t.type) return e;
            var r = e.formData,
                s = n.TryFormSteps(),
                i = s.accountInfoStep,
                l = s.planSelectionStep,
                c = s.paymentInfoStep,
                u = c;
            return [r.firstName, r.lastName, r.email, r.password, r.teamName, r.teamPhone, r.companySize, r.captcha].some(o.FormValueHelper.hasServerError) ? u = i : o.FormValueHelper.hasServerError(r.numberOfUsers) && (u = l), a.__assign({}, e, {
                pageState: a.__assign({}, e.pageState, {
                    formStep: u
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.existingAccountShowing = m, t.formHeight = d, t.formStep = p, t.hasMarkedTTI = f, t.revealedStep = h, t.updateFormStepFromServerError = _, t.TeamBuyReducer = u.apply(void 0, [r.combineReducers({
            formData: function(e, t) {
                return void 0 === e && (e = {}), e
            },
            pageState: c(r.combineReducers({
                existingAccountShowing: m,
                formHeight: d,
                formStep: p,
                hasMarkedTTI: f,
                revealedStep: h
            })),
            pricingState: function(e, t) {
                return void 0 === e && (e = {}), e
            }
        }), s.FormReducer].concat(i.PaymentMethodReducers, i.TermsAndServiceReducers, l.TransitionManagementReducers)), t.TeamTryReducer = u(t.TeamBuyReducer, _)
    }), define("modules/clean/react/payments/business/state/business_store_creator", ["require", "exports", "tslib", "external/redux", "external/redux-thunk", "modules/clean/redux/unsupported", "modules/clean/payments/skus/constants", "modules/clean/react/payments/checkout/components/account_info/team_info", "modules/clean/react/payments/business/state/business_state", "modules/clean/react/payments/common/form_value_factory", "modules/clean/react/payments/common/middleware/web_teams_logger", "modules/clean/react/payments/common/form/middleware/middleware", "modules/clean/react/payments/common/payments/state/store_creator", "modules/clean/react/payments/common/pricing/state/store_creator", "modules/clean/react/payments/common/middleware/payments_ux_logger"], function(e, t, a, r, n, o, s, i, l, c, u, m, d, p, f) {
        "use strict";

        function h(e, t) {
            var a = _(e),
                s = r.applyMiddleware(n.default, u.webTeamsLogger(e.isTrial), m.submitFormErrorMiddleware, m.marketingEventMiddleware, new f.PaymentsUXLogger(e.requestId).reduxMiddleware);
            return o.createStore(t, a, s)
        }

        function _(e) {
            var t = g(e),
                a = y(e);
            return {
                pricingState: a,
                pageState: t,
                formData: S(e, t, a)
            }
        }

        function y(e) {
            var t = p.createPricingSubState(e),
                a = t.discountInfo,
                r = t.subChangePlans,
                n = d.createPaymentPricingState(e);
            return {
                discountInfo: a,
                subChangePlans: r,
                countryCode: n.countryCode,
                countryCodeLoading: n.countryCodeLoading,
                hasCurrencyChanged: n.hasCurrencyChanged,
                hasTaxChangedWithinCountry: n.hasTaxChangedWithinCountry,
                loadingPrices: n.loadingPrices,
                recentLoadEvent: n.recentLoadEvent,
                requestToken: n.requestToken
            }
        }

        function g(e) {
            var t = e.experiments,
                a = e.isPreSelect,
                r = e.isTrial,
                n = e.locale,
                o = e.marketingTracker,
                i = e.orionPlanInfo,
                c = e.productPlanType,
                u = e.skipAccountInfoStep,
                m = e.userInfo,
                p = l.SKU_SELECTION_STEP;
            a && (p = l.ACCOUNT_INFO_OR_CHECKOUT_STEP, u && (p = l.PLAN_SELECTION_STEP));
            var f = c === s.ProductPlanType.ADVANCED ? i.advanced.minLicenseCount : i.standard.minLicenseCount;
            void 0 !== e.teamNumUsers && (f = Math.max(f, e.teamNumUsers));
            var h = c === s.ProductPlanType.ADVANCED ? i.advanced.maxLicenseCount : i.standard.maxLicenseCount,
                _ = d.createPaymentPageState(e).paymentFormSpec;
            return {
                advancedMaxNumUsers: i.advanced.maxLicenseCount,
                advancedMinNumUsers: i.advanced.minLicenseCount,
                existingAccountShowing: m.existingAccount,
                experiments: t,
                formStep: p,
                hasMarkedTTI: !1,
                isPreSelect: a,
                isTrial: r,
                locale: n,
                marketingTracker: o,
                maxNumUsers: h,
                minNumUsers: f,
                paymentFormSpec: _,
                planId: e.planId,
                standardMaxNumUsers: i.standard.maxLicenseCount,
                standardMinNumUsers: i.standard.minLicenseCount,
                submitState: null,
                submitting: !1,
                teamNumUsers: e.teamNumUsers,
                userInfo: m,
                formHeight: 0,
                revealedStep: 0,
                requestId: e.requestId,
                submitSeq: 0
            }
        }

        function S(e, t, a) {
            var r = e.teamInfo,
                n = e.orionPlanInfo,
                o = e.userInfo,
                l = e.scheduleId,
                u = r.num_users ? r.num_users.toString() : "",
                m = r.phone || "",
                f = i.CompanySizes[r.company_size] ? r.company_size : i.DefaultCompanySize,
                h = r.name || "",
                _ = o.fname || "",
                y = o.lname || "",
                g = "";
            o.existingAccount || (g = o.email || "");
            var S = o.password || "",
                v = s.ScheduleId.YEARLY;
            l && s.ScheduleId.hasOwnProperty(l.toString()) && (v = l);
            var b = [],
                E = p.createPricingFormData(e, a).productPlanType,
                x = d.createPaymentFormData(e, t, a),
                T = x.paymentMethod,
                C = x.countryCode,
                P = x.zipCode,
                N = x.vat,
                w = x.cpf,
                k = x.nonce,
                D = x.adyenEncryptedCard,
                I = x.bin,
                V = x.browserInfo,
                F = x.threeDsData,
                A = x.accountHolderName,
                B = x.iban,
                M = x.mandateSigned,
                L = x.termsAndService,
                U = x.idealBankId,
                O = x.idealBankName,
                R = x.city,
                H = x.phone,
                z = x.name,
                Y = x.address,
                j = E.formattedValue === s.ProductPlanType.ADVANCED ? n.advanced.minLicenseCount : n.standard.minLicenseCount;
            return {
                city: c.FormValueFactory.createCity(R.rawValue),
                phone: c.FormValueFactory.createPhone(H.rawValue),
                name: c.FormValueFactory.createName(z.rawValue),
                address: c.FormValueFactory.createAddress(Y.rawValue),
                schedule: c.FormValueFactory.createSchedule(v),
                numberOfUsers: c.FormValueFactory.createNumberOfUsers(u, t, void 0, j, b.length),
                teamPhone: c.FormValueFactory.createTeamPhone(m),
                firstName: c.FormValueFactory.createInput(_),
                lastName: c.FormValueFactory.createInput(y),
                email: c.FormValueFactory.createEmail(g),
                password: c.FormValueFactory.createPassword(S),
                teamName: c.FormValueFactory.createInput(h),
                companySize: c.FormValueFactory.createInput(f),
                captcha: c.FormValueFactory.createInput(""),
                emailsToInvite: c.FormValueFactory.createEmailsToInvite(b),
                productPlanType: E,
                paymentMethod: T,
                countryCode: C,
                zipCode: P,
                vat: N,
                cpf: w,
                cpfName: c.FormValueFactory.createCpfNamePrefill("", "", o && o.displayName),
                nonce: k,
                adyenEncryptedCard: D,
                bin: I,
                browserInfo: V,
                threeDsData: F,
                accountHolderName: A,
                iban: B,
                mandateSigned: M,
                termsAndService: L,
                idealBankId: U,
                idealBankName: O
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importStar(r), n = a.__importDefault(n), l = a.__importStar(l), m = a.__importStar(m), t.createStore = h, t.createFormData = S
    }), define("modules/clean/react/payments/business/team_buy_page", ["require", "exports", "tslib", "react", "external/react-redux", "external/redux", "external/classnames", "external/lodash", "modules/core/browser", "modules/core/i18n", "modules/core/notify", "modules/core/uri", "modules/clean/react/payments/checkout/components/california_legal_terms", "modules/clean/analytics", "modules/clean/payments/skus/pricing_data", "modules/clean/payments/skus/constants", "modules/clean/payments/snapengage", "modules/clean/react_format", "modules/clean/react/payments/business/actions/business_actions", "modules/clean/react/payments/common/adapters/setup_cash", "modules/clean/react/payments/business/reducers/reducers", "modules/clean/react/payments/business/components/help_section/buy_help_section", "modules/clean/react/payments/business/state/business_store_creator", "modules/clean/react/payments/business/state/business_state", "modules/clean/react/payments/business/actions/business_action_creator", "modules/clean/react/payments/business/with_store", "modules/clean/react/payments/checkout/components/confirm_button", "modules/clean/react/payments/checkout/components/terms_and_service", "modules/clean/react/payments/checkout/components/worldpay_text", "modules/clean/react/payments/business/components/team_header_section", "modules/clean/react/payments/checkout/components/form_section", "modules/clean/react/payments/checkout/components/payment_method_form/business_payment_method_form", "modules/clean/react/payments/checkout/components/payment_method_form/payment_method_lock", "modules/clean/react/payments/checkout/components/team_plan_section", "modules/clean/react/payments/checkout/components/account_info/account_info_section", "modules/clean/react/payments/checkout/components/skus/sku_selection_section", "modules/clean/react/payments/error/errorBox", "modules/clean/stormcrow/experiment", "modules/clean/web_timing_logger", "modules/constants/trademark", "modules/clean/react/payments/common/form/actions/actions"], function(e, t, a, r, n, o, s, i, l, c, u, m, d, p, f, h, _, y, g, S, v, b, E, x, T, C, P, N, w, k, D, I, V, F, A, B, M, L, U, O, R) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), o = a.__importStar(o), s = a.__importDefault(s), i = a.__importStar(i), l = a.__importStar(l), U = a.__importStar(U);
        var H = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.refreshed = !1, t.planSectionErrorBuffer = 52, t.fieldErrorBuffer = 100, t.updateStepToHashEventListener = function() {
                    return t.updateStepToHash()
                }, t.updateStepToHash = function(e) {
                    void 0 === e && (e = !1);
                    var a = t.props.formData,
                        r = l.get_hash(),
                        n = r ? parseInt(r, 10) : null,
                        o = r ? parseInt(r, 10) : x.SKU_SELECTION_STEP,
                        s = x.BuyFormSteps().skuSelectionStep,
                        i = B.SkuSelectionSection.validProductPlanType.bind(null, a);
                    o > s && !i() && (o = s), n !== o && (e ? window.history.replaceState({}, "", "#" + o.toString()) : l.set_hash(o.toString())), t.props.actions.updateFormStep(o, g.UpdateFormStepOrigins.HashChange)
                }, t.prepareForSubmission = function() {
                    return t.paymentMethodForm.prepareForSubmission()
                }, t.submitForm = function(e) {
                    void 0 === e && (e = R.SubmitFormTriggerType.ButtonClick), t.props.actions.submitTeamForm("/business/ajax_create_team_buy", t.prepareForSubmission, void 0, t.paymentMethodForm.getCreditCardFrame().handle3DsMessage, e)
                }, t.getSubmitText = function() {
                    var e = t.props,
                        a = e.pageState,
                        r = e.pricingState;
                    return r.loadingPrices ? c._("Updating prices...") : a.submitting ? c._("Processing...") : c._("Complete purchase")
                }, t.renderFormSections = function(e) {
                    var a = t.props,
                        n = a.ccIframeUrl,
                        o = a.countryList,
                        i = a.formData,
                        l = a.orionPlanInfo,
                        u = a.pageState,
                        m = a.pricingState,
                        p = a.userInfo;
                    if (!e) return r.default.createElement("div", null);
                    var f = i.zipCode.rawValue,
                        h = 0 === t.props.pricingState.subChangePlans.plans.length,
                        _ = u.paymentFormSpec.should_show_vat_for_country(i.countryCode.formattedValue),
                        y = s.default({
                            "team-plan-section--is-revealed": t.expSubgrowthBizBuyRevealSteps.variantIs("V1") && u.revealedStep > 0
                        }, "grid__container", "grid__container--p-small", "team-plan-section"),
                        g = s.default({
                            "account-info-section--is-revealed": t.expSubgrowthBizBuyRevealSteps.variantIs("V1") && u.revealedStep > 1
                        }, "grid__container", "grid__container--p-small", "account-info-section"),
                        S = s.default({
                            "payment-info-section--is-revealed": t.expSubgrowthBizBuyRevealSteps.variantIs("V1") && 3 === u.revealedStep
                        }, "payment-info-section");
                    return t.expSubgrowthBizBuyRevealSteps.variantIs("V1") ? 0 === u.revealedStep ? r.default.createElement("div", {
                        className: "grid__item grid__item--medium--7-12"
                    }, r.default.createElement("div", {
                        className: "grid__item form__section form__section--revealing"
                    }, r.default.createElement("div", {
                        className: "business-form grid__item"
                    }, r.default.createElement("div", {
                        className: y,
                        ref: function(e) {
                            t.planSection = e
                        }
                    }, r.default.createElement(D.FormSection, {
                        title: c._("1. Choose your plan")
                    }, r.default.createElement(F.TeamPlanSection, {
                        actions: t.props.actions,
                        advancedDisplayName: l.advanced.skuContent.name,
                        experiments: u.experiments,
                        formData: i,
                        isTrial: !1,
                        isVatCountry: _,
                        pricingData: e,
                        skipPricing: h,
                        standardDisplayName: l.standard.skuContent.name
                    })))))) : r.default.createElement("div", {
                        className: "grid__item grid__item--medium--7-12"
                    }, r.default.createElement("div", {
                        className: "grid__item form__section form__section--revealing",
                        style: {
                            maxHeight: t.props.pageState.formHeight + "px"
                        }
                    }, r.default.createElement("div", {
                        className: "business-form grid__item"
                    }, r.default.createElement("div", {
                        className: y,
                        ref: function(e) {
                            t.planSection = e
                        }
                    }, r.default.createElement(D.FormSection, {
                        title: c._("1. Choose your plan")
                    }, r.default.createElement(F.TeamPlanSection, {
                        actions: t.props.actions,
                        advancedDisplayName: l.advanced.skuContent.name,
                        experiments: u.experiments,
                        formData: i,
                        isTrial: !1,
                        isVatCountry: _,
                        pricingData: e,
                        skipPricing: h,
                        standardDisplayName: l.standard.skuContent.name
                    }))), r.default.createElement("div", {
                        className: g,
                        ref: function(e) {
                            t.infoSection = e
                        }
                    }, r.default.createElement(A.AccountInfoSection, {
                        actions: t.props.actions,
                        currentUrl: t.getCurrentUrl(),
                        discountInfo: m.discountInfo,
                        existingAccountShowing: u.existingAccountShowing,
                        experiments: u.experiments,
                        formData: i,
                        isTrial: !1,
                        locale: u.locale,
                        sectionIndex: 2,
                        userInfo: p,
                        passwordStrengthPostTTI: !0,
                        onFirstFieldChange: t.resizeForm.bind(t, 3)
                    })), r.default.createElement("div", {
                        className: S,
                        ref: function(e) {
                            t.paymentSection = e
                        }
                    }, r.default.createElement("div", {
                        className: "grid__container grid__container--p-small"
                    }, r.default.createElement(D.FormSection, {
                        title: t.renderPaymentMethodTitle(),
                        className: "payment-method-section"
                    }, r.default.createElement(I.BusinessPaymentMethodForm, {
                        actions: t.props.actions,
                        countryList: o,
                        formData: i,
                        iframeUrl: n,
                        isTeam: !0,
                        paymentIsDown: u.experiments.subgrowthBizPaymentDownRedirect,
                        paymentSpec: u.paymentFormSpec,
                        ref: function(e) {
                            t.paymentMethodForm = e
                        },
                        showCpf: u.experiments.showCpf,
                        showCpfName: u.experiments.showCpfName,
                        psd2AddressFields: u.experiments.psd2AddressFields,
                        submitForm: t.submitForm
                    }))), r.default.createElement(N.TermsAndService, {
                        actions: t.props.actions,
                        experiments: u.experiments,
                        formData: i,
                        isTrial: !1
                    }), t.renderConfirmButton())), r.default.createElement(w.WorldpayText, {
                        countryCode: i.countryCode.formattedValue
                    }))) : r.default.createElement("div", {
                        className: "grid__item grid__item--medium--7-12"
                    }, r.default.createElement("div", {
                        className: "grid__item form__section"
                    }, r.default.createElement("div", {
                        className: "business-form grid__item"
                    }, r.default.createElement("div", {
                        className: y
                    }, r.default.createElement(D.FormSection, {
                        title: c._("1. Choose your plan")
                    }, r.default.createElement(F.TeamPlanSection, {
                        actions: t.props.actions,
                        advancedDisplayName: l.advanced.skuContent.name,
                        experiments: u.experiments,
                        formData: i,
                        isTrial: !1,
                        isVatCountry: _,
                        pricingData: e,
                        skipPricing: h,
                        standardDisplayName: l.standard.skuContent.name
                    }))), r.default.createElement("div", {
                        className: "grid__container grid__container--p-small account-info-section"
                    }, r.default.createElement(A.AccountInfoSection, {
                        actions: t.props.actions,
                        currentUrl: t.getCurrentUrl(),
                        discountInfo: m.discountInfo,
                        existingAccountShowing: u.existingAccountShowing,
                        experiments: u.experiments,
                        formData: i,
                        isTrial: !1,
                        locale: u.locale,
                        sectionIndex: 2,
                        userInfo: p,
                        passwordStrengthPostTTI: !0
                    })), r.default.createElement("div", {
                        className: "grid__container grid__container--p-small payment-info-section payment-info-section--CA-terms-included"
                    }, r.default.createElement(D.FormSection, {
                        title: t.renderPaymentMethodTitle(),
                        className: "payment-method-section"
                    }, r.default.createElement(I.BusinessPaymentMethodForm, {
                        actions: t.props.actions,
                        countryList: o,
                        formData: i,
                        iframeUrl: n,
                        isTeam: !0,
                        paymentIsDown: u.experiments.subgrowthBizPaymentDownRedirect,
                        paymentSpec: u.paymentFormSpec,
                        ref: function(e) {
                            t.paymentMethodForm = e
                        },
                        showCpf: u.experiments.showCpf,
                        showCpfName: u.experiments.showCpfName,
                        psd2AddressFields: u.experiments.psd2AddressFields,
                        submitForm: t.submitForm
                    }))), r.default.createElement(d.CaliforniaLegalTerms, {
                        zipCode: f
                    }), r.default.createElement(N.TermsAndService, {
                        actions: t.props.actions,
                        experiments: u.experiments,
                        formData: i,
                        isTrial: !1
                    }), i.email.isCapturable && r.default.createElement(M.ErrorBox, {
                        isTrial: !1,
                        email: i.email.formattedValue,
                        firstName: i.firstName.formattedValue,
                        lastName: i.lastName.formattedValue
                    }), t.renderConfirmButton())), r.default.createElement(w.WorldpayText, {
                        countryCode: i.countryCode.formattedValue
                    }))
                }, t.resizeForm = function(e) {
                    var a, r = t.props.pageState,
                        n = r.formHeight,
                        o = r.revealedStep,
                        s = t.props.actions,
                        i = s.updateFormHeight,
                        l = s.updateRevealedSteps,
                        c = e ? e : o;
                    switch (c) {
                        case 1:
                            a = t.planSection.getBoundingClientRect().height;
                            break;
                        case 2:
                            a = t.planSection.getBoundingClientRect().height + t.planSectionErrorBuffer + t.infoSection.getBoundingClientRect().height;
                            break;
                        case 3:
                            a = t.planSection.getBoundingClientRect().height + t.planSectionErrorBuffer + t.infoSection.getBoundingClientRect().height + t.paymentSection.getBoundingClientRect().height + t.fieldErrorBuffer;
                            break;
                        default:
                            a = n
                    }
                    l(c), i(a)
                }, t
            }
            return a.__extends(t, e), Object.defineProperty(t.prototype, "expSubgrowthBizBuyRevealSteps", {
                get: function() {
                    return L.Experiment(this.props.pageState.experiments.subgrowthBizBuyRevealSteps)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.renderPaymentMethodTitle = function() {
                return r.default.createElement("span", {
                    className: "payment-method-title grid__item grid--y-bottom"
                }, c._("3. Enter payment details"), r.default.createElement(V.PaymentMethodLock, null))
            }, t.prototype.getPersistentUrlParameters = function() {
                var e = this.props.formData.productPlanType.rawValue,
                    t = m.URI.parse(l.get_href_no_hash()).getQuery(),
                    a = Object.keys(t),
                    r = ["dcode", "code", "sku"],
                    n = {};
                r.forEach(function(e) {
                    a.indexOf(e) !== -1 && (n[e] = t[e])
                });
                var o;
                return e === h.ProductPlanType.NEW_STANDARD ? o = "std" : e === h.ProductPlanType.ADVANCED && (o = "adv"), o && (n.sku = o), n
            }, t.prototype.getCurrentUrl = function() {
                return m.URI.parse("/business/buy").setQuery(this.getPersistentUrlParameters()).toString()
            }, t.prototype.getTryLinkUrl = function() {
                return m.URI.parse("/business/try").setQuery(this.getPersistentUrlParameters()).toString()
            }, t.prototype.componentDidMount = function() {
                var e = this,
                    t = this.props,
                    a = t.formData,
                    r = t.pageState,
                    n = x.BuyFormSteps().checkoutStep;
                U.mark_time_to_interactive(), p.TeamsWebActionsLogger.log("react_checkout_buy_render_success", {
                    flow: r.isPreSelect ? "PreSelect" : "PlanSelect"
                });
                var o = B.SkuSelectionSection.validProductPlanType.bind(null, a);
                this.props.productPlanType && r.formStep === n && o() && this.props.actions.updateFormStep(n, g.UpdateFormStepOrigins.PreSelectedSku), window.addEventListener("hashchange", this.updateStepToHashEventListener), this.updateStepToHash(!0), U.waitForTTI().then(function() {
                    var t = e.props,
                        a = t.isTrial,
                        r = t.planId,
                        n = t.discountInfo,
                        o = t.userInfo,
                        s = t.teamInfo;
                    e.props.actions.fetchSubChangePlans(a, r, n, o, s), e.props.snapengagePostTti && _.ajaxFetchAndLoadSnapengageParams()
                }), this.expSubgrowthBizBuyRevealSteps.variantIs("V1") && (this.props.actions.updateRevealedSteps(1), this.resizeForm(1), this.windowResizeListener = i.debounce(this.resizeForm.bind(this, this.props.pageState.revealedStep), 200), this.step2Timeout = setTimeout(function() {
                    e.resizeForm(2)
                }, 1500), window.addEventListener("resize", this.windowResizeListener))
            }, t.prototype.componentWillUnmount = function() {
                window.removeEventListener("hashchange", this.updateStepToHashEventListener), window.removeEventListener("resize", this.windowResizeListener), clearTimeout(this.step2Timeout)
            }, t.prototype.renderConfirmButton = function() {
                var e = this.props,
                    t = e.pageState,
                    a = e.pricingState,
                    n = t.submitting || a.loadingPrices ? "ajax-loading" : "";
                return r.default.createElement(P.ConfirmButton, {
                    className: n,
                    text: this.getSubmitText(),
                    disabled: a.loadingPrices || t.submitting,
                    onClick: this.submitForm
                })
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.experiments,
                    a = e.isBusinessDomain,
                    n = e.formData,
                    o = e.orionPlanInfo,
                    i = e.pageState,
                    m = e.pricingData,
                    d = e.pricingState,
                    p = e.taxNamesByCountry,
                    h = e.trialLength,
                    _ = e.userInfo,
                    g = e.projectZeusMasterSwitch;
                if (this.refreshed) return r.default.createElement("div", null);
                if (m instanceof f.PricingDataException) return this.refreshed = !0, l.redirect("/team/admin"), r.default.createElement("div", null);
                if (!m) return u.Notify.error(f.PricingDataException.notifyErrorMessage, 20), r.default.createElement("div", null);
                var S = s.default({
                        grid__container: !0,
                        hidden: i.formStep === x.SKU_SELECTION_STEP
                    }),
                    v = c._("Purchase %(trademark_business)s").format({
                        trademark_business: O.TRADEMARK_BUSINESS
                    }),
                    E = void 0;
                this.props.eligibleForTrial && (E = r.default.createElement("span", null, y.reactFormat(c._("or <a>try free for %(trial_length)s days</a>."), {
                    a: r.default.createElement("a", {
                        key: "subtitle-purchase-cta",
                        "data-trackingid": "59bd8cb1-5955-4eaa-9bf1-346d65bf5dd2",
                        className: "type--semib",
                        href: this.getTryLinkUrl()
                    }),
                    trial_length: h
                })));
                var T;
                return d.subChangePlans && (T = r.default.createElement(B.SkuSelectionSection, {
                    actions: this.props.actions,
                    experiments: t,
                    formData: n,
                    formStep: i.formStep,
                    isBusinessDomain: a,
                    isTrial: !1,
                    locale: this.props.locale,
                    subChangePlans: d.subChangePlans,
                    visible: i.formStep === x.SKU_SELECTION_STEP,
                    standardPlanInfo: o.standard,
                    advancedPlanInfo: o.advanced,
                    projectZeusMasterSwitch: g
                })), r.default.createElement("div", {
                    className: "business-form-wrapper grid__section"
                }, r.default.createElement(k.TeamHeaderSection, {
                    discountInfo: d.discountInfo,
                    isTrial: !1,
                    pricingData: m,
                    subTitle: E,
                    title: v,
                    userInfo: _
                }), r.default.createElement("div", null, T, r.default.createElement("div", {
                    className: S
                }, r.default.createElement("div", {
                    className: "grid__container grid--x-bookend grid__container--p-medium"
                }, this.renderFormSections(m), r.default.createElement("div", {
                    className: "grid__item grid__item--medium--1-3"
                }, r.default.createElement(b.BuyHelpSection, {
                    standardPlanInfo: o.standard,
                    countryCode: n.countryCode.formattedValue,
                    discountInfo: d.discountInfo,
                    experiments: t,
                    numberOfUsers: n.numberOfUsers,
                    paymentSpec: i.paymentFormSpec,
                    pricingData: m,
                    productPlanType: n.productPlanType.formattedValue,
                    schedule: n.schedule.formattedValue,
                    subChangePlans: d.subChangePlans,
                    taxNamesByCountry: p
                }))))))
            }, t
        })(r.default.Component);
        t.TeamBuyPageView = H, t.TeamBuyPage = o.compose(C.withStore(function(e) {
            return S.setupCash(e.localeNumberFormat, e.currencyToFormatMap), E.createStore(e, v.TeamBuyReducer)
        }), n.connect(function(e, t) {
            return {
                formData: e.formData,
                pageState: e.pageState,
                pricingState: e.pricingState,
                pricingData: f.PricingDataFactory.createFromState(e, t)
            }
        }, function(e) {
            return {
                actions: T.bindTeamBuyActions(e)
            }
        }))(H)
    }), define("modules/clean/react/payments/business/team_try_page", ["require", "exports", "tslib", "react", "external/react-redux", "external/redux", "external/classnames", "modules/constants/trademark", "modules/core/browser", "modules/core/exception", "modules/core/notify", "modules/core/uri", "modules/core/i18n", "modules/clean/payments/snapengage", "modules/clean/react/payments/checkout/components/multistep/account_info_panel", "modules/clean/react/payments/checkout/components/account_info/account_toggle", "modules/clean/react/payments/checkout/components/confirm_button", "modules/clean/react/profile_services/google_register_button", "modules/clean/react/payments/checkout/components/worldpay_text", "modules/clean/stormcrow/experiment", "modules/clean/react/payments/checkout/components/multistep/multistep_indicator", "modules/clean/react/payments/checkout/components/multistep/payment_method_panel", "modules/clean/payments/skus/pricing_data", "modules/clean/payments/skus/constants", "modules/clean/react/payments/checkout/components/skus/sku_selection_section", "modules/clean/react/payments/business/state/business_state", "modules/clean/react/payments/business/components/team_header_section", "modules/clean/react/payments/business/with_store", "modules/clean/react/payments/checkout/components/multistep/team_plan_panel", "modules/clean/react/payments/business/reducers/reducers", "modules/clean/analytics", "modules/clean/react/payments/business/components/help_section/try_help_section", "modules/clean/react/payments/business/actions/business_actions", "modules/clean/react/payments/business/actions/business_action_creator", "modules/clean/react/payments/business/state/business_store_creator", "modules/clean/react_format", "modules/clean/react/payments/common/adapters/setup_cash", "modules/clean/web_timing_logger"], function(e, t, a, r, n, o, s, i, l, c, u, m, d, p, f, h, _, y, g, S, v, b, E, x, T, C, P, N, w, k, D, I, V, F, A, B, M, L) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), o = a.__importStar(o), s = a.__importDefault(s), l = a.__importStar(l), c = a.__importStar(c), L = a.__importStar(L);
        var U = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.refreshed = !1, t.formContinueClicked = function() {
                    t.props.pageState.formStep === C.TryFormSteps().paymentInfoStep ? t.submitForm() : t.props.actions.updateFormStep(t.props.pageState.formStep + 1, V.UpdateFormStepOrigins.ContinueButton)
                }, t.updateStepToHashEventListener = function() {
                    return t.updateStepToHash()
                }, t.updateStepToHash = function(e) {
                    void 0 === e && (e = !1);
                    var a = t.props,
                        r = a.formData,
                        n = a.pageState,
                        o = n.existingAccountShowing,
                        s = n.paymentFormSpec,
                        i = l.get_hash(),
                        c = i ? parseInt(i, 10) : null,
                        u = i ? parseInt(i, 10) : C.SKU_SELECTION_STEP,
                        m = C.TryFormSteps(),
                        d = m.skuSelectionStep,
                        p = m.accountInfoStep,
                        h = m.planSelectionStep,
                        _ = m.paymentInfoStep,
                        y = [
                            [p, f.AccountInfoPanel.validFormData.bind(null, r, o, t.props.experiments, n.isTrial)],
                            [h, w.TeamPlanPanel.validFormData.bind(null, r, t.props.experiments, n.isTrial)],
                            [_, b.PaymentMethodPanel.validFormData.bind(null, r, s, n.isTrial)]
                        ],
                        g = T.SkuSelectionSection.validProductPlanType.bind(null, r);
                    y.push([d, g]), y.sort(function(e, t) {
                        return e[0] - t[0]
                    }).every(function(e) {
                        var t = e[0],
                            a = e[1];
                        return !(u > t && !a()) || (u = t, !1)
                    }), t.props.actions.updateFormStep(u, V.UpdateFormStepOrigins.HashChange), c !== u && (e ? window.history.replaceState({}, "", "#" + u.toString()) : l.set_hash(u.toString()))
                }, t.getSubmitCopy = function() {
                    var e = S.Experiment(t.props.experiments.userJourneyBizTryGoogleSignUp).isActive;
                    return r.default.createElement("span", null, d._("Continue"), e ? null : r.default.createElement("div", {
                        className: "continue-arrow"
                    }))
                }, t.getSubmitText = function() {
                    var e = t.props,
                        a = e.pageState,
                        r = e.pricingState,
                        n = C.TryFormSteps().paymentInfoStep,
                        o = t.getSubmitCopy();
                    return a.formStep === n && (o = d._("Start free trial")), a.submitting ? o = d._("Processing...") : (r.loadingPrices || 0 === t.props.pricingState.subChangePlans.plans.length) && (o = d._("Loading...")), o
                }, t.renderConfirmButton = function() {
                    var e = t.props,
                        a = e.pageState,
                        n = e.pricingState,
                        o = C.TryFormSteps().paymentInfoStep,
                        i = "ON" === t.props.experiments.ujOneLicense && "ON" === t.props.experiments.ujProfessionalTrial,
                        l = s.default({
                            "ajax-loading": a.submitting || n.loadingPrices
                        }),
                        c = n.loadingPrices || i && t.props.formData.numberOfUsers.isUnderLimit || a.submitting || 0 === n.subChangePlans.plans.length,
                        u = "button";
                    return a.formStep === o && (u = "submit"), r.default.createElement(_.ConfirmButton, {
                        className: l,
                        disabled: c,
                        onClick: t.formContinueClicked,
                        text: t.getSubmitText(),
                        type: u
                    })
                }, t.renderProgressIndicator = function() {
                    var e = t.props.pageState;
                    return r.default.createElement("div", {
                        className: "multistep-indicator-wrapper"
                    }, r.default.createElement(v.MultistepIndicator, {
                        index: e.formStep
                    }))
                }, t.toggleExistingAccount = function() {
                    t.props.actions.toggleExistingAccount(!1)
                }, t.renderGoogleSignUpSection = function() {
                    var e = t.props.pageState,
                        a = C.TryFormSteps().accountInfoStep,
                        n = e.userInfo.existingAccount;
                    if (e.formStep === a && !n && !e.existingAccountShowing) {
                        var o = m.URI.parse("/business/try").setQuery(t.getPersistentUrlParameters()).updateQuery({
                            skip: ""
                        }).toString();
                        return r.default.createElement("div", {
                            className: "google-auth"
                        }, r.default.createElement(y.GoogleSignupButton, {
                            className: "google-auth__button",
                            registerCont: o,
                            loginCont: t.getCurrentUrl(),
                            cta: d._("Sign up with Google"),
                            importance: "styleless",
                            isPopup: !0,
                            onClick: t.props.actions.clickGoogleSignup,
                            referrer: "business_try",
                            signupTag: "business_try"
                        }), r.default.createElement("div", {
                            className: "existing-account"
                        }, r.default.createElement(h.AccountToggle, {
                            isNoCcTrial: !1,
                            onClick: t.toggleExistingAccount
                        })))
                    }
                }, t.setPaymentMethodPanelRef = function(e) {
                    t.paymentMethodPanel = e
                }, t.renderTrySteps = function(e) {
                    var a, n = t.props,
                        o = n.countryList,
                        i = n.experiments,
                        l = n.formData,
                        c = n.orionPlanInfo,
                        u = n.trialEndDate,
                        m = n.pageState,
                        d = n.pricingState,
                        p = n.skuContent,
                        h = C.TryFormSteps(),
                        _ = h.accountInfoStep,
                        y = h.planSelectionStep,
                        v = h.paymentInfoStep,
                        E = s.default("grid__item", "grid__item--medium--7-12", "grid__item--medium--order-1"),
                        x = s.default("form__section", "grid__item");
                    if (m.formStep === y) {
                        var T = m.paymentFormSpec.should_show_vat_for_country(l.countryCode.formattedValue);
                        a = r.default.createElement(w.TeamPlanPanel, {
                            actions: t.props.actions,
                            advancedDisplayName: c.advanced.skuContent.name,
                            experiments: i,
                            formData: l,
                            isVatCountry: T,
                            pricingData: e,
                            skuContent: p,
                            standardDisplayName: c.standard.skuContent.name,
                            skipPricing: 0 === t.props.pricingState.subChangePlans.plans.length
                        })
                    }
                    var P;
                    m.hasMarkedTTI && (P = r.default.createElement(b.PaymentMethodPanel, {
                        actions: t.props.actions,
                        countryList: o,
                        experiments: i,
                        formData: l,
                        hasCurrencyChanged: d.hasCurrencyChanged,
                        hasTaxChangedWithinCountry: d.hasTaxChangedWithinCountry,
                        iframeUrl: t.props.ccIframeUrl,
                        paymentSpec: m.paymentFormSpec,
                        pricingData: e,
                        ref: t.setPaymentMethodPanelRef,
                        trialEndDate: u,
                        visible: m.formStep === v,
                        paymentIsDown: m.experiments.subgrowthBizPaymentDownRedirect,
                        submitForm: t.submitForm
                    }));
                    var N;
                    m.formStep === v && (N = r.default.createElement(g.WorldpayText, {
                        countryCode: l.countryCode.formattedValue
                    }));
                    var k = S.Experiment(t.props.experiments.userJourneyBizTryGoogleSignUp).isActive;
                    return r.default.createElement("div", {
                        className: E
                    }, r.default.createElement("div", {
                        className: x
                    }, r.default.createElement("div", {
                        className: "business-form grid__item"
                    }, r.default.createElement(f.AccountInfoPanel, {
                        actions: t.props.actions,
                        currentUrl: t.getCurrentUrl(),
                        discountInfo: d.discountInfo,
                        existingAccountShowing: m.existingAccountShowing,
                        experiments: m.experiments,
                        formData: l,
                        isTrial: !0,
                        locale: m.locale,
                        userInfo: m.userInfo,
                        visible: m.formStep === _,
                        passwordStrengthPostTTI: !0
                    }), a, P, t.renderConfirmButton(), k ? t.renderGoogleSignUpSection() : null, t.renderProgressIndicator())), N)
                }, t.renderTryStepPanels = function(e) {
                    var a, n = t.props,
                        o = n.customerToCountryMap,
                        l = n.isBusinessDomain,
                        c = n.formData,
                        u = n.orionPlanInfo,
                        m = n.pageState,
                        p = n.pricingState,
                        f = n.trialEndDate,
                        h = n.trialLength,
                        _ = C.TryFormSteps().skuSelectionStep,
                        y = s.default({
                            hidden: m.formStep === _
                        }, "business-try-form"),
                        g = d._("Start your %(trial_length)s-day free trial now!").format({
                            trial_length: h
                        }),
                        S = r.default.createElement("span", null, B.reactFormat(d._("or <a>purchase %(trademark_business)s now</a>."), {
                            a: r.default.createElement("a", {
                                key: "subtitle-purchase-cta",
                                "data-trackingid": "ec9dcd13-a1e4-45b9-9253-75d4bdc40672",
                                className: "type--semib",
                                href: t.getBuyLinkUrl()
                            }),
                            trademark_business: i.TRADEMARK_BUSINESS
                        }));
                    return p.subChangePlans && (a = r.default.createElement(T.SkuSelectionSection, {
                        actions: t.props.actions,
                        experiments: m.experiments,
                        formData: c,
                        formStep: m.formStep,
                        isBusinessDomain: l,
                        isTrial: !0,
                        locale: t.props.locale,
                        subChangePlans: p.subChangePlans,
                        trialLength: h,
                        visible: m.formStep === _,
                        standardPlanInfo: u.standard,
                        advancedPlanInfo: u.advanced
                    })), [r.default.createElement(P.TeamHeaderSection, {
                        key: "team-header-section",
                        discountInfo: p.discountInfo,
                        isTrial: !0,
                        pricingData: e,
                        subTitle: S,
                        title: g,
                        trialLength: h,
                        userInfo: m.userInfo
                    }), r.default.createElement("div", {
                        key: "try-content-box"
                    }, a, r.default.createElement("div", {
                        className: y
                    }, r.default.createElement("div", {
                        className: s.default("grid__container", "grid--x-bookend", "grid__container--p-medium")
                    }, t.renderTrySteps(e), r.default.createElement(I.TryHelpSection, {
                        countryCode: c.countryCode.formattedValue,
                        customerToCountryMap: o,
                        discountInfo: p.discountInfo,
                        experiments: m.experiments,
                        formStep: m.formStep,
                        locale: m.locale,
                        numberOfUsers: c.numberOfUsers,
                        pricingData: e,
                        productPlanType: c.productPlanType.formattedValue,
                        schedule: c.schedule.formattedValue,
                        subChangePlans: p.subChangePlans,
                        taxNamesByCountry: t.props.taxNamesByCountry,
                        trialEndDate: f,
                        trialLength: h,
                        vacuumingPolicyMaxDays: u.standard.skuContent.vacuumingPolicyMaxDays
                    }))))]
                }, t
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                var e = this,
                    t = this.props,
                    a = t.formData,
                    r = t.pageState,
                    n = C.TryFormSteps(),
                    o = n.accountInfoStep,
                    s = n.planSelectionStep;
                L.mark_time_to_interactive(), D.TeamsWebActionsLogger.log("react_checkout_try_render_success", {
                    flow: r.isPreSelect ? "PreSelect" : "PlanSelect"
                });
                var i = T.SkuSelectionSection.validProductPlanType.bind(null, a);
                this.props.productPlanType && i() && (r.formStep === o || r.formStep === s) && this.props.actions.updateFormStep(r.formStep, V.UpdateFormStepOrigins.PreSelectedSku), window.addEventListener("hashchange", this.updateStepToHashEventListener), this.updateStepToHash(!0), L.waitForTTI().then(function() {
                    var t = e.props,
                        a = t.isTrial,
                        r = t.planId,
                        n = t.discountInfo,
                        o = t.userInfo,
                        s = t.teamInfo;
                    e.props.actions.fetchSubChangePlans(a, r, n, o, s), e.props.actions.updateHasMarkedTTI(), e.props.snapengagePostTti && p.ajaxFetchAndLoadSnapengageParams()
                })
            }, t.prototype.componentWillUnmount = function() {
                window.removeEventListener("hashchange", this.updateStepToHashEventListener)
            }, t.prototype.prepareForSubmission = function() {
                return this.paymentMethodPanel ? this.paymentMethodPanel.prepareForSubmission() : (c.reportStack("Attempted to prepare submission before payment method panel is loaded.", {
                    severity: c.SEVERITY.CRITICAL,
                    tags: ["business_try"]
                }), Promise.resolve(!1))
            }, t.prototype.submitForm = function() {
                this.props.actions.submitTeamForm("/business/ajax_create_team_try", this.prepareForSubmission.bind(this), {
                    is_trial: !0,
                    trial_schedule_id: this.props.trialScheduleId
                })
            }, t.prototype.getBuyLinkUrl = function() {
                return m.URI.parse("/business/buy").setQuery(this.getPersistentUrlParameters()).toString()
            }, t.prototype.getCurrentUrl = function() {
                return m.URI.parse("/business/try").setQuery(this.getPersistentUrlParameters()).toString()
            }, t.prototype.getPersistentUrlParameters = function() {
                var e = this.props.formData.productPlanType.rawValue,
                    t = m.URI.parse(l.get_href_no_hash()).getQuery(),
                    a = Object.keys(t),
                    r = ["dcode", "code", "sku"],
                    n = {};
                if (r.forEach(function(e) {
                        a.indexOf(e) !== -1 && (n[e] = t[e])
                    }), e) {
                    var o = void 0;
                    e === x.ProductPlanType.NEW_STANDARD ? o = "std" : e === x.ProductPlanType.ADVANCED && (o = "adv"), o && (n.sku = o)
                }
                return n
            }, t.prototype.render = function() {
                return this.refreshed ? r.default.createElement("div", null) : this.props.pricingData instanceof E.PricingDataException ? (this.refreshed = !0, l.redirect("/team/admin"), r.default.createElement("div", null)) : this.props.pricingData ? r.default.createElement("div", {
                    className: "business-form-wrapper grid__section"
                }, this.renderTryStepPanels(this.props.pricingData)) : (u.Notify.error(E.PricingDataException.notifyErrorMessage, 20), r.default.createElement("div", null))
            }, t
        })(r.default.Component);
        t.TeamTryPageView = U, t.TeamTryPage = o.compose(N.withStore(function(e) {
            return M.setupCash(e.localeNumberFormat, e.currencyToFormatMap), A.createStore(e, k.TeamTryReducer)
        }), n.connect(function(e, t) {
            return {
                formData: e.formData,
                pageState: e.pageState,
                pricingState: e.pricingState,
                pricingData: E.PricingDataFactory.createFromState(e, t)
            }
        }, function(e) {
            return {
                actions: F.bindTeamBuyActions(e)
            }
        }))(U)
    }), define("modules/clean/react/payments/checkout/components/account_info/account_info_section", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/react/payments/checkout/components/form_section", "modules/clean/react/payments/checkout/components/account_info/new_account_info", "modules/clean/react/payments/checkout/components/account_info/existing_account_info", "modules/clean/react/payments/checkout/components/account_info/team_info", "modules/clean/react/payments/checkout/components/modals/login_modal", "modules/clean/stormcrow/experiment", "modules/clean/react/payments/checkout/components/account_info/account_toggle"], function(e, t, a, r, n, o, s, i, l, c, u, m) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r);
        var d = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.showLoginDialog = function() {
                    c.LoginModal.getInstance().updateRedirectUrl(t.props.formData.productPlanType.rawValue).show()
                }, t.getTitle = function() {
                    var e, a = t.props,
                        r = a.existingAccountShowing,
                        o = a.experiments,
                        s = a.sectionIndex,
                        i = u.Experiment(o.userJourneyBizTryGoogleSignUp).isActive;
                    return e = r ? n._("%(index)s. Set initial administrator account").format({
                        index: s
                    }) : t.props.isTrial ? i ? n._("%(index)s. Sign Up").format({
                        index: s
                    }) : n._("%(index)s. About you").format({
                        index: s
                    }) : n._("%(index)s. Tell us about yourself").format({
                        index: s
                    }), u.Experiment(o.subgrowthBizNoCcTrials).isActive && (e = u.Experiment(o.subgrowthBizNoCcTrials).variantIn("V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13") && !r ? u.Experiment(o.nbgNcctTrySectionTitles).variantIs("V1") ? u.Experiment(o.nbgTryNumberedHeaders).variantIs("V1") ? n._("1. Create your account") : n._("Create your account") : u.Experiment(o.nbgTryFirstPersonCopy).variantIs("V1") ? n._("About me") : n._("About you") : ""), e
                }, t
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e, t = null,
                    a = this.props,
                    n = a.existingAccountShowing,
                    c = a.actions,
                    d = a.discountInfo,
                    p = d && !!d.resellerHash,
                    f = u.Experiment(this.props.experiments.subgrowthBizNoCcTrials);
                if (n) e = r.default.createElement(i.ExistingAccountInfo, {
                    experiments: this.props.experiments,
                    locale: this.props.locale,
                    showLoginDialog: this.showLoginDialog,
                    toggleExistingAccount: c.toggleExistingAccount,
                    userInfo: this.props.userInfo
                });
                else {
                    u.Experiment(this.props.experiments.userJourneyBizTryGoogleSignUp).isActive || (t = r.default.createElement(m.AccountToggle, {
                        experiments: this.props.experiments,
                        isNoCcTrial: f.isActive,
                        onClick: this.props.actions.toggleExistingAccount
                    })), e = r.default.createElement(s.NewAccountInfo, {
                        actions: this.props.actions,
                        experiments: this.props.experiments,
                        formData: this.props.formData,
                        isTrial: this.props.isTrial,
                        isValidMSP: Boolean(p),
                        passwordStrengthPostTTI: this.props.passwordStrengthPostTTI,
                        onFirstFieldChange: this.props.onFirstFieldChange
                    })
                }
                if (f.variantIn("V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13")) {
                    var h = [e, r.default.createElement(l.TeamInfo, {
                        actions: this.props.actions,
                        formData: this.props.formData,
                        experiments: this.props.experiments,
                        isTrial: this.props.isTrial,
                        isValidMSP: Boolean(p)
                    })];
                    return n || (h = f.variantIn("V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13") ? r.default.createElement(o.FormSection, {
                        title: this.getTitle(),
                        sideHeader: t
                    }, h) : r.default.createElement(o.FormSection, {
                        title: this.getTitle()
                    }, h)), r.default.createElement("div", {
                        className: "grid__item"
                    }, h)
                }
                return f.isActive ? r.default.createElement("div", {
                    className: "grid__item"
                }, t, e, r.default.createElement(l.TeamInfo, {
                    actions: this.props.actions,
                    formData: this.props.formData,
                    experiments: this.props.experiments,
                    isTrial: this.props.isTrial,
                    isValidMSP: Boolean(p)
                })) : r.default.createElement(o.FormSection, {
                    title: this.getTitle(),
                    sideHeader: t
                }, e, r.default.createElement(l.TeamInfo, {
                    actions: this.props.actions,
                    experiments: this.props.experiments,
                    formData: this.props.formData,
                    isTrial: this.props.isTrial,
                    isValidMSP: Boolean(p),
                    onFirstFieldChange: this.props.onFirstFieldChange
                }))
            }, t
        })(r.default.Component);
        t.AccountInfoSection = d
    }), define("modules/clean/react/payments/checkout/components/account_info/existing_account_info", ["require", "exports", "tslib", "react", "modules/clean/react_format", "modules/clean/stormcrow/experiment", "modules/constants/trademark", "modules/core/i18n"], function(e, t, a, r, n, o, s, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r);
        var l = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.getEnglishLayout = function() {
                var e, t = this.props,
                    a = t.experiments,
                    s = t.userInfo,
                    l = t.showLoginDialog,
                    c = t.toggleExistingAccount;
                return e = o.Experiment(a.subgrowthBizNoCcTrials).variantIn("V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13") ? r.default.createElement("p", {
                    className: "existing-account__headline"
                }, n.reactFormat(i._("You are now logged into <em>%(email)s</em>."), {
                    email: s.email,
                    em: r.default.createElement("span", {
                        className: "existing-account__bold"
                    })
                })) : r.default.createElement("p", null, i._("You’re currently logged into %(email)s.").format({
                    email: s.email
                })), r.default.createElement("div", {
                    className: "existing-account"
                }, e, r.default.createElement("p", null, i._("If you'd like to use a different e-mail for the admin account, feel free to"), " ", r.default.createElement("a", {
                    className: "account-toggle-new",
                    onClick: function() {
                        return c()
                    }
                }, i._("create a new account")), " ", i._("or"), " ", r.default.createElement("a", {
                    className: "account-toggle-existing",
                    onClick: function() {
                        return l()
                    }
                }, i._("use another account")), "."), r.default.createElement("p", null, i._("You can change admin accounts after starting the trial, and your current files             and folders will retain their privacy settings when upgrading.")), this.getSmartSyncWarning())
            }, t.prototype.getNonEnglishLayout = function() {
                var e = this.props,
                    t = e.userInfo,
                    a = e.showLoginDialog,
                    n = e.toggleExistingAccount;
                return r.default.createElement("div", {
                    className: "existing-account"
                }, r.default.createElement("p", null, i._("You're currently logged in as %(name)s (%(email)s), and this account will be                the administrator for your new %(trademark_business)s account.").format({
                    name: t.displayName,
                    email: t.email,
                    trademark_business: s.TRADEMARK_BUSINESS
                })), r.default.createElement("p", null, i._("After purchase, all your files and folders will remain private unless you             choose to share them with your team.")), r.default.createElement("p", null, i._("If you'd like to use a different account to manage your team, you can"), " ", r.default.createElement("a", {
                    onClick: function() {
                        return n()
                    }
                }, i._("create a new account")), " ", i._("or"), " ", r.default.createElement("a", {
                    onClick: function() {
                        return a()
                    }
                }, i._("use another account")), "."), this.getSmartSyncWarning())
            }, t.prototype.getSmartSyncWarning = function() {
                return this.props.userInfo.userHasInfinite ? r.default.createElement("p", null, i._("Once you sign up, you won’t be able to make new files online-only until               you enable Smart Sync for your team.")) : ""
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.userInfo,
                    a = e.locale;
                return t.existingAccount ? /^en/.test(a.toLowerCase()) ? this.getEnglishLayout() : this.getNonEnglishLayout() : r.default.createElement("div", null)
            }, t
        })(r.default.Component);
        t.ExistingAccountInfo = l
    }), define("modules/clean/react/payments/checkout/components/account_info/new_account_info", ["require", "exports", "tslib", "external/classnames", "react", "modules/core/browser", "modules/core/i18n", "modules/clean/components/password_strength_meter", "modules/clean/react/payments/checkout/components/inputs/labeled_text_input", "modules/clean/react/payments/common/form_values", "modules/clean/react/payments/common/form_value_helpers", "modules/clean/react_format", "modules/clean/stormcrow/experiment"], function(e, t, a, r, n, o, s, i, l, c, u, m, d) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n), o = a.__importStar(o), c = a.__importStar(c);
        var p = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onFirstNameChanged = function(e) {
                    t.props.onFirstFieldChange && t.props.onFirstFieldChange(), t.props.actions.updateFirstName(e.value)
                }, t.onLastNameChanged = function(e) {
                    t.props.onFirstFieldChange && t.props.onFirstFieldChange(), t.props.actions.updateLastName(e.value)
                }, t.onEmailBlur = function(e) {
                    t.props.actions.blurEmail(e.value), "" !== e.value && t.props.actions.showFormFieldErrors(["email"], "EmailBlur")
                }, t.getPlaceholder = function(e) {
                    var a = "";
                    if (t.ncctExp.variantIn("V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13")) switch (e) {
                        case "first":
                            a = s._("First name", {
                                comment: "Try and Buy placeholder text"
                            });
                            break;
                        case "email":
                            a = s._("Email", {
                                comment: "Try and Buy placeholder text"
                            });
                            break;
                        case "last":
                            a = s._("Last name", {
                                comment: "Try and Buy placeholder text"
                            });
                            break;
                        case "password":
                            a = s._("Password", {
                                comment: "Try and Buy placeholder text"
                            })
                    }
                    return a
                }, t.renderNameInputs = function() {
                    var e = t.props.formData,
                        a = r.default({
                            "hidden-label": t.ncctExp.variantIn("V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13")
                        });
                    return n.default.createElement("div", {
                        className: "name-fields grid__item grid--x-bookend"
                    }, n.default.createElement(l.BizLabeledTextInput, {
                        className: "grid__item grid__item--medium--11-24",
                        errorHTML: e.firstName.serverError,
                        errorText: t.firstNameErrorMessage(),
                        labelClass: a,
                        labelText: s._("First name"),
                        name: "fname",
                        onChange: t.onFirstNameChanged,
                        placeholder: t.getPlaceholder("first"),
                        value: e.firstName.rawValue
                    }), n.default.createElement(l.BizLabeledTextInput, {
                        className: "grid__item grid__item--medium--11-24",
                        errorHTML: e.lastName.serverError,
                        errorText: t.lastNameErrorMessage(),
                        labelClass: a,
                        labelText: s._("Last name"),
                        name: "lname",
                        onChange: t.onLastNameChanged,
                        placeholder: t.getPlaceholder("last"),
                        value: e.lastName.rawValue
                    }))
                }, t
            }
            return a.__extends(t, e), Object.defineProperty(t.prototype, "ncctExp", {
                get: function() {
                    return d.Experiment(this.props.experiments.subgrowthBizNoCcTrials)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onEmailChanged = function(e) {
                this.props.onFirstFieldChange && this.props.onFirstFieldChange(), this.props.actions.updateEmail(e.value)
            }, t.prototype.onPasswordChanged = function(e) {
                this.props.onFirstFieldChange && this.props.onFirstFieldChange(), this.props.actions.updatePassword(e.value)
            }, t.prototype.firstNameErrorMessage = function() {
                var e = this.props.formData.firstName;
                return e.showError && !u.FormValueHelper.isValid(e) ? s._("Please enter a valid first name.") : ""
            }, t.prototype.lastNameErrorMessage = function() {
                var e = this.props.formData.lastName;
                return e.showError && !u.FormValueHelper.isValid(e) ? s._("Please enter a valid last name.") : ""
            }, t.prototype.emailErrorMessage = function() {
                var e = this.props.formData,
                    t = e.email;
                if (t.showError) switch (t.errorState) {
                    case c.EmailErrorState.Empty:
                        return s._("Please enter an email address.");
                    case c.EmailErrorState.NoAt:
                        return s._("An email address must contain a single @");
                    case c.EmailErrorState.BadUsername:
                        var a = t.formattedValue.split("@")[0];
                        return s._("The username portion of the email address is invalid               (the portion before the @: %(username)s).").format({
                            username: a
                        });
                    case c.EmailErrorState.BadDomain:
                        var r = t.formattedValue.split("@")[1];
                        return "" === r ? s._("The domain portion of the email address is invalid                 (the portion after the @).") : s._("The domain portion of the email address is invalid                 (the portion after the @: %(domain)s).").format({
                            domain: r
                        });
                    case c.EmailErrorState.Taken:
                        var i = encodeURIComponent(o.get_href()),
                            l = "/login?cont=" + i,
                            u = n.default.createElement("a", {
                                key: "a-signin",
                                className: "login-register-switch-link",
                                href: l
                            });
                        return n.default.createElement("span", null, m.reactFormat(s._("This e-mail is already taken. <a_signin>Sign in</a_signin> or                   <a_forgot>reset your password</a_forgot>."), {
                            a_signin: u,
                            a_forgot: n.default.createElement("a", {
                                key: "a-forgot",
                                href: "/forgot"
                            })
                        }))
                }
                return ""
            }, t.prototype.passwordErrorMessage = function() {
                var e = this.props.formData.password;
                return e.errorState === c.PasswordErrorState.TooShort ? s._("Passwords must be 6 characters or more.") : e.showError && !u.FormValueHelper.isValid(e) ? s._("Please enter a valid password.") : ""
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.formData,
                    a = e.isValidMSP,
                    o = r.default({
                        "hidden-label": this.ncctExp.variantIn("V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13")
                    });
                return n.default.createElement("div", {
                    className: "new-account-info grid__item"
                }, this.renderNameInputs(), n.default.createElement("div", {
                    className: "credentials-fields grid__item grid--x-bookend"
                }, n.default.createElement(l.BizLabeledTextInput, {
                    className: "grid__item grid__item--medium--11-24",
                    disabled: a,
                    errorHTML: t.email.serverError,
                    errorText: this.emailErrorMessage(),
                    labelClass: o,
                    labelText: s._("Email"),
                    onBlur: this.onEmailBlur.bind(this),
                    onChange: this.onEmailChanged.bind(this),
                    name: "email",
                    placeholder: this.getPlaceholder("email"),
                    type: "email",
                    value: t.email.rawValue
                }), n.default.createElement("div", {
                    className: "credentials-fields__password grid__item grid__item--medium--11-24"
                }, n.default.createElement(i.PasswordStrengthMeter, {
                    password: t.password.rawValue,
                    zxcvbnPostTti: this.props.passwordStrengthPostTTI
                }), n.default.createElement(l.BizLabeledTextInput, {
                    errorHTML: t.password.serverError,
                    errorText: this.passwordErrorMessage(),
                    labelClass: o,
                    labelText: s._("Password"),
                    name: "password",
                    onChange: this.onPasswordChanged.bind(this),
                    placeholder: this.getPlaceholder("password"),
                    type: "password",
                    value: t.password.rawValue
                }))))
            }, t
        })(n.default.Component);
        t.NewAccountInfo = p
    }), define("modules/clean/react/payments/checkout/components/account_info/team_info", ["require", "exports", "tslib", "react", "modules/clean/react/sprite", "modules/core/i18n", "modules/clean/react/payments/common/form_value_helpers", "modules/clean/react/payments/checkout/components/inputs/labeled_select_input", "modules/clean/react/payments/checkout/components/inputs/labeled_text_input", "modules/constants/trademark", "modules/clean/react/tooltip"], function(e, t, a, r, n, o, s, i, l, c, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), t.DefaultCompanySize = "Below 50", t.CompanySizes = {
            "Below 50": o._("Below 50"),
            "50-99": o._("50-99"),
            "100-249": o._("100-249"),
            "250-499": o._("250-499"),
            "500-999": o._("500-999"),
            "1000-2499": o._("1000-2499"),
            "2500-4999": o._("2500-4999"),
            "5000+": o._("5000+")
        };
        var m = (function(e) {
            function m() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onTeamNameChanged = function(e) {
                    t.props.onFirstFieldChange && t.props.onFirstFieldChange(), t.props.actions.updateTeamName(e.value)
                }, t.onTeamPhoneChanged = function(e) {
                    t.props.onFirstFieldChange && t.props.onFirstFieldChange(), t.props.actions.updateTeamPhone(e.value)
                }, t.onCompanySizeChanged = function(e) {
                    t.props.onFirstFieldChange && t.props.onFirstFieldChange(), t.props.actions.updateCompanySize(e.value)
                }, t
            }
            return a.__extends(m, e), m.prototype.teamNameErrorString = function() {
                var e = this.props.formData.teamName;
                return e.showError && !s.FormValueHelper.isValid(e) ? o._("Please enter a valid team name.") : ""
            }, m.prototype.teamPhoneErrorString = function() {
                var e = this.props.formData.teamPhone;
                return e.showError && !s.FormValueHelper.isValid(e) ? o._("Please enter a valid contact telephone.") : ""
            }, m.prototype.companySizeErrorString = function() {
                var e = this.props.formData.companySize;
                return e.showError && !s.FormValueHelper.isValid(e) ? o._("Please enter your company size.") : ""
            }, m.prototype.renderTeamNameLabel = function() {
                var e = o._("Team name"),
                    t = o._("The ‘team name’ is the name your       %(trademark_business)s account will go by. For example,       ‘Team World Peace.’ You can always change this, even after       it’s been set.").format({
                        trademark_business: c.TRADEMARK_BUSINESS
                    }),
                    a = r.default.createElement(u.Tooltip, {
                        tooltip_classname: "team-name-label-tooltip-bubble",
                        position: u.TooltipPosition.RIGHT,
                        tooltip_contents: t
                    }, r.default.createElement(n.Sprite, {
                        group: "web",
                        name: "info",
                        alt: ""
                    }));
                return r.default.createElement("span", {
                    className: "grid__item grid--y-middle"
                }, e, a)
            }, m.prototype.render = function() {
                var e = this.props,
                    a = e.formData,
                    n = e.isTrial,
                    s = Object.keys(t.CompanySizes).map(function(e) {
                        return r.default.createElement("option", {
                            value: e,
                            key: e
                        }, t.CompanySizes[e])
                    });
                return n ? null : r.default.createElement("div", {
                    className: "team-info-fields grid__item grid--x-bookend"
                }, r.default.createElement(l.BizLabeledTextInput, {
                    name: "team_name",
                    labelText: this.renderTeamNameLabel(),
                    className: "grid__item grid__item--medium--7-24 input__label--team_name",
                    value: a.teamName.rawValue,
                    onChange: this.onTeamNameChanged,
                    errorText: this.teamNameErrorString(),
                    errorHTML: a.teamName.serverError,
                    disabled: this.props.isValidMSP,
                    maxLength: 20
                }), r.default.createElement(l.BizLabeledTextInput, {
                    name: "team_phone",
                    type: "tel",
                    labelText: o._("Contact telephone"),
                    className: "grid__item grid__item--medium--7-24 input__label--team_phone",
                    value: a.teamPhone.rawValue,
                    onChange: this.onTeamPhoneChanged,
                    errorText: this.teamPhoneErrorString(),
                    errorHTML: a.teamPhone.serverError,
                    disabled: this.props.isValidMSP
                }), r.default.createElement(i.BizLabeledSelectInput, {
                    errorHTML: a.companySize.serverError,
                    errorText: this.companySizeErrorString(),
                    labelText: o._("Company size"),
                    className: "grid__item grid__item--medium--7-24 input__label--company_size",
                    name: "company_size",
                    onChange: this.onCompanySizeChanged,
                    value: a.companySize.rawValue
                }, s))
            }, m
        })(r.default.Component);
        t.TeamInfo = m
    }), define("modules/clean/react/payments/checkout/components/confirm_button", ["require", "exports", "tslib", "react", "external/classnames"], function(e, t, a, r, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var o;
        (function(e) {
            e[e.Primary = 0] = "Primary", e[e.Secondary = 1] = "Secondary"
        })(o = t.Importance || (t.Importance = {}));
        var s = (function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleClick = function() {
                    a.props.onClick && a.props.onClick()
                }, a.state = {
                    loaded: !1
                }, a
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.setState(function(e) {
                    return {
                        loaded: !0
                    }
                })
            }, t.prototype.render = function() {
                var e, t = void 0 !== this.props.importance ? o[this.props.importance].toLowerCase() : o[o.Primary].toLowerCase(),
                    a = n.default((e = {
                        "confirm-button": !0,
                        "checkout-button": !0
                    }, e["checkout-button--" + t] = !0, e), this.props.className),
                    s = this.props.disabled || !this.state.loaded,
                    i = this.props.type || "submit";
                return r.default.createElement("button", {
                    type: i,
                    className: a,
                    disabled: s,
                    onClick: this.handleClick
                }, r.default.createElement("span", {
                    className: "confirm-text type--semib"
                }, this.props.text))
            }, t
        })(r.default.Component);
        t.ConfirmButton = s
    }), define("modules/clean/react/payments/checkout/components/form_section", ["require", "exports", "tslib", "react", "external/classnames"], function(e, t, a, r, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var o = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = n.default(["form-section", "grid__item", this.props.className]),
                    t = n.default({
                        "top-row": !0,
                        grid__item: !0,
                        "grid--x-bookend": !!this.props.sideHeader,
                        "grid--y-middle": !!this.props.sideHeader
                    });
                return r.default.createElement("section", {
                    className: e
                }, r.default.createElement("div", {
                    className: "section-header grid__item"
                }, r.default.createElement("div", {
                    className: t
                }, r.default.createElement("h3", {
                    className: "header-text type--form-title"
                }, this.props.title), r.default.createElement("span", {
                    className: "header-side-text type--form-help"
                }, this.props.sideHeader)), r.default.createElement("div", {
                    className: "sub-header type--form-help"
                }, this.props.subHeader)), this.props.children)
            }, t
        })(r.default.Component);
        t.FormSection = o
    }), define("modules/clean/react/payments/checkout/components/help_section/customer_list", ["require", "exports", "tslib", "modules/constants/python", "modules/constants/trademark", "external/classnames", "modules/clean/react/image", "react", "modules/core/i18n"], function(e, t, a, r, n, o, s, i, l) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = a.__importDefault(o), i = a.__importDefault(i);
        var c = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.renderCustomer = function(e) {
                var t = "customer-list--images " + e.slug;
                return i.default.createElement(s.Image, {
                    key: "customer-list#" + e.slug,
                    className: t,
                    src: e.logo,
                    srcHiRes: e.logo_hires,
                    alt: e.name
                })
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.customerToCountryMap,
                    a = e.countryCode,
                    s = e.showTaxDisclaimer,
                    c = t[a];
                c || (c = t.default);
                var u = void 0;
                s && (u = i.default.createElement("div", {
                    className: "help-section grid__container--p-small"
                }, i.default.createElement("div", {
                    className: "tax-disclaimer type--copy-legal"
                }, l._("Total prices quoted include applicable taxes."))));
                var m = o.default({
                    "customer-list": !0,
                    grid__container: !0,
                    "grid--x-bookend": !this.props.centerCustomers,
                    "grid--x-center": this.props.centerCustomers,
                    "grid--y-middle": !0
                });
                return i.default.createElement("div", {
                    className: "section customer-list-section"
                }, i.default.createElement("h1", {
                    className: "type--help-title"
                }, l._("Who’s using Dropbox?")), i.default.createElement("div", {
                    className: "type--help-copy"
                }, l._("Over %(million_user_count)s million people use Dropbox and         more than %(business_count)s teams use         %(trademark_business)s to work smarter, including:").format({
                    million_user_count: r.MILLION_USER_COUNT,
                    business_count: r.PUBLIC_DFB_COUNT,
                    trademark_business: n.TRADEMARK_BUSINESS
                })), i.default.createElement("div", {
                    className: m
                }, c.map(this.renderCustomer)), u)
            }, t
        })(i.default.Component);
        t.CustomerList = c
    }), define("modules/clean/react/payments/checkout/components/help_section/order_summary", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react_format", "modules/core/i18n", "modules/clean/payments/cash", "modules/clean/react/payments/common/form_value_helpers", "modules/clean/payments/skus/constants", "modules/clean/react/payments/business/state/business_state", "modules/clean/stormcrow/experiment", "modules/clean/stormcrow/stormcrow_exposure_logger"], function(e, t, a, r, n, o, s, i, l, c, u, m, d) {
        "use strict";

        function p(e) {
            return e === c.ScheduleId.MONTHLY ? s._("%(price)s per month") : s._("%(price)s per year")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var f = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                var e = this.props,
                    t = e.experiments,
                    a = e.formStep,
                    r = e.ncctVariant,
                    n = e.showDueToday,
                    o = e.trialIsActive;
                a === u.BillingFormSteps().checkoutStep && n && o && m.Experiment(r).variantIs("V13") && t && m.Experiment(t.subgrowthBizTpcrBillingDueToday).variantIn("CONTROL", "V1") && (new d.StormcrowExposureLogger).logExposure("subgrowth_biz_tpcr_billing_due_today", t.subgrowthBizTpcrBillingDueToday)
            }, t.prototype.renderLicenses = function(e, t, a, n) {
                var i = e.getInitialPlanInfo(),
                    l = i.count,
                    c = i.price;
                n && (i = t.getInitialPlanInfo(), l = i.count, c = i.price.multiply(12));
                var u = e.getTotalNumberOfLicenses(),
                    m = c.divide(l),
                    d = m.multiply(u);
                return [r.default.createElement("tr", {
                    className: "order-summary__licenses",
                    key: "combine-licenses-total-row"
                }, r.default.createElement("td", {
                    className: "line-item"
                }, o.reactFormat(s.ungettext("<span>%(count)s</span> user", "<span>%(count)s</span> users", u), {
                    count: u,
                    span: r.default.createElement("span", {
                        className: "order-summary__license-count"
                    })
                })), r.default.createElement("td", {
                    className: "price"
                }, a.format({
                    price: d.toString()
                })))]
            }, t.prototype.renderAnnualDiscount = function(e) {
                var t = e.getYearlySavingsWithoutPromoPercentage(),
                    a = e.getYearlySavingsWithoutPromo();
                return r.default.createElement("tr", {
                    className: "order-summary__savings order-summary__savings--yearly"
                }, r.default.createElement("td", {
                    className: "line-item"
                }, s._("Yearly savings (%(discount)s)").format({
                    discount: s.format_percent(Math.round(t))
                })), r.default.createElement("td", {
                    className: "price"
                }, "-", a.toString()))
            }, t.prototype.renderPromoDiscount = function(e) {
                var t = e.getPromoDiscount(),
                    a = e.getYearlyPriceWithoutPromo(!0),
                    n = a.multiply(t).divide(100);
                return r.default.createElement("tr", {
                    className: "order-summary__savings order-summary__savings--promo"
                }, r.default.createElement("td", {
                    className: "line-item"
                }, s._("Discount (%(discount)s)").format({
                    discount: s.format_percent(Math.round(t))
                })), r.default.createElement("td", {
                    className: "price"
                }, "-", n.toString()))
            }, t.prototype.getTaxNameForCountry = function(e) {
                var t = this.props.taxNamesByCountry;
                return t[e] || t.null
            }, t.prototype.renderTaxes = function(e) {
                var t = e.getTaxCountryCode(),
                    a = e.getTaxPercentage(),
                    n = e.getTaxPrice().toString();
                if (a > 0 && t) {
                    var o = this.getTaxNameForCountry(t);
                    return r.default.createElement("tr", {
                        className: "order-summary__taxes"
                    }, r.default.createElement("td", {
                        className: "line-item"
                    }, s._("%(tax_name)s (%(tax_percentage)s)").format({
                        tax_name: o,
                        tax_percentage: s.format_percent(a)
                    })), r.default.createElement("td", {
                        className: "price"
                    }, n))
                }
                return null
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    a = e.discountInfo,
                    o = e.experiments,
                    c = e.monthlyTransition,
                    u = e.ncctVariant,
                    d = e.numberOfUsers,
                    p = e.pricingData,
                    f = e.schedule,
                    h = e.showDueToday,
                    _ = e.showTotal,
                    y = e.transition,
                    g = e.trialIsActive;
                if (!l.FormValueHelper.isValid(d) && !d.isUnderLimit || d.isUnderLicenseLimit || !y || !c) return r.default.createElement("div", null);
                var S = y.getScheduleId() === c.getScheduleId(),
                    v = !S,
                    b = !0;
                a && a.hasOwnProperty("allowMonthly") && (b = !!a.allowMonthly);
                var E, x = !(!a || !b && S),
                    T = this.props.getScheduleText(f),
                    C = y.getTotalPrice().toString(),
                    P = n.default("order-summary", t);
                S || (E = this.renderAnnualDiscount(p));
                var N;
                x && (N = this.renderPromoDiscount(p));
                var w;
                return h && g && (m.Experiment(u).variantIn("V7", "V9") || m.Experiment(u).variantIs("V13") && o && m.Experiment(o.subgrowthBizTpcrBillingDueToday).variantIs("V1")) && (w = r.default.createElement("tr", {
                    className: "order-summary__due-today"
                }, r.default.createElement("td", {
                    className: "line-item"
                }, s._("Due today")), r.default.createElement("td", {
                    className: "price"
                }, new i.Cash(0, y.getTotalPrice().currency).toString()))), r.default.createElement("div", {
                    className: P
                }, this.props.header || r.default.createElement("h1", {
                    className: "type--help-title"
                }, s._("Order summary")), r.default.createElement("table", null, this.props.tableHeader || r.default.createElement("thead", null, r.default.createElement("tr", null, r.default.createElement("th", {
                    className: "type--help-copy"
                }, s._("Item")), r.default.createElement("th", {
                    className: "type--help-copy"
                }, s._("Price")))), r.default.createElement("tbody", {
                    className: "type--copy-mini"
                }, this.renderLicenses(y, c, T, v), E, N, this.renderTaxes(y), _ && r.default.createElement("tr", {
                    className: "order-summary__total"
                }, r.default.createElement("td", {
                    className: "line-item"
                }, s._("Total")), r.default.createElement("td", {
                    className: "price"
                }, T.format({
                    price: C
                }))), w), this.props.tableFooter))
            }, t.defaultProps = {
                getScheduleText: p,
                showDueToday: !0,
                showTotal: !0
            }, t
        })(r.default.Component);
        t.OrderSummary = f
    }), define("modules/clean/react/payments/checkout/components/multistep/account_info_panel", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react/payments/checkout/components/account_info/account_info_section"], function(e, t, a, r, n, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var s = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.validFormData = function(e, t, a, r) {
                return !!(t || "" !== e.firstName.rawValue && "" !== e.lastName.rawValue && "" !== e.email.rawValue && "" !== e.password.rawValue) && (!!r || "" !== e.teamName.rawValue && "" !== e.teamPhone.rawValue && "" !== e.companySize.rawValue)
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.actions,
                    a = e.currentUrl,
                    s = e.discountInfo,
                    i = e.experiments,
                    l = e.existingAccountShowing,
                    c = e.formData,
                    u = e.isTrial,
                    m = e.locale,
                    d = e.passwordStrengthPostTTI,
                    p = e.userInfo,
                    f = e.visible,
                    h = n.default({
                        "account-info-section": !0,
                        grid__item: !0,
                        hidden: f === !1
                    });
                return r.default.createElement("div", {
                    className: h
                }, r.default.createElement(o.AccountInfoSection, {
                    actions: t,
                    currentUrl: a,
                    discountInfo: s,
                    existingAccountShowing: l,
                    experiments: i,
                    formData: c,
                    isTrial: u,
                    locale: m,
                    sectionIndex: 1,
                    userInfo: p,
                    passwordStrengthPostTTI: d
                }))
            }, t
        })(r.default.Component);
        t.AccountInfoPanel = s
    }), define("modules/clean/react/payments/checkout/components/multistep/multistep_indicator", ["require", "exports", "tslib", "react", "modules/core/i18n"], function(e, t, a, r, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r);
        var o = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = "multistep-indicator step-" + this.props.index,
                    t = n._("Step %(index)s of 3").format({
                        index: this.props.index
                    });
                return r.default.createElement("div", {
                    className: e
                }, t)
            }, t
        })(r.default.Component);
        t.MultistepIndicator = o
    }), define("modules/clean/react/payments/checkout/components/multistep/payment_method_panel", ["require", "exports", "tslib", "react", "external/classnames", "modules/core/i18n", "modules/clean/react/payments/checkout/components/form_section", "modules/clean/payments/payment_form/payment_form_spec", "modules/clean/react/payments/checkout/components/payment_method_form/business_payment_method_form", "modules/clean/react/payments/checkout/components/payment_method_form/payment_method_lock", "modules/clean/payments/skus/constants", "modules/clean/react/payments/checkout/components/terms_and_service", "modules/clean/react/tooltip", "modules/clean/react/payments/checkout/components/california_legal_terms"], function(e, t, a, r, n, o, s, i, l, c, u, m, d, p) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var f = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.prepareForSubmission = function() {
                return this.paymentMethodForm.prepareForSubmission()
            }, t.validFormData = function(e, t) {
                if (e.paymentMethod.formattedValue === i.PaymentMethod.DirectDeposit && ("" === e.accountHolderName.rawValue || "" === e.iban.rawValue || !e.mandateSigned.rawValue)) return !1;
                var a = e.countryCode.formattedValue;
                return (!t.allow_zip_code_for_country(a) || "" !== e.zipCode.rawValue) && e.termsAndService.rawValue
            }, t.prototype.renderCurrencyBanner = function(e, t, a, n) {
                if (n) {
                    var s = void 0;
                    if (e.schedule.formattedValue === u.ScheduleId.MONTHLY ? s = o._("Your local currency has changed. Your selected plan\n        is %(monthly_per_user)s / user / month (%(monthly_price)s charged monthly).\n        You’ll only be charged if you don’t cancel your trial before it\n        ends on %(trial_end_date)s.").format({
                            trial_end_date: a,
                            monthly_per_user: t.getMonthlyPerUserPrice(),
                            monthly_price: t.getMonthlyPrice()
                        }) : e.schedule.formattedValue === u.ScheduleId.YEARLY && (s = o._("Your local currency has changed. Your selected plan\n        is %(monthly_per_user)s / user / month (%(annual_price)s charged yearly).\n        You’ll only be charged if you don’t cancel your trial before it\n        ends on %(trial_end_date)s.").format({
                            trial_end_date: a,
                            monthly_per_user: t.getYearlyPerUserPrice(),
                            annual_price: t.getYearlyPrice()
                        })), s) return r.default.createElement("div", {
                        className: "currency-banner"
                    }, s)
                }
            }, t.prototype.renderTaxBanner = function(e, t, a, n, s) {
                var i = t.getMonthlyPrice(!1),
                    l = t.getMonthlyPrice(!0),
                    c = 0 !== i.subtract(l).amount;
                if (n && !s && c) {
                    var m = void 0;
                    return e.schedule.formattedValue === u.ScheduleId.MONTHLY ? m = o._("Your billing location requires additional taxes. Your selected plan\n        is %(monthly_per_user)s / user / month (%(monthly_price)s charged monthly).\n        You’ll only be charged if you don’t cancel your trial before it\n        ends on %(trial_end_date)s.").format({
                        trial_end_date: a,
                        monthly_per_user: t.getMonthlyPerUserPrice(),
                        monthly_price: t.getMonthlyPrice()
                    }) : e.schedule.formattedValue === u.ScheduleId.YEARLY && (m = o._("Your billing location requires additional taxes. Your selected plan\n        is %(monthly_per_user)s / user / month (%(annual_price)s charged yearly).\n        You’ll only be charged if you don’t cancel your trial before it\n        ends on %(trial_end_date)s.").format({
                        trial_end_date: a,
                        monthly_per_user: t.getYearlyPerUserPrice(),
                        annual_price: t.getYearlyPrice()
                    })), r.default.createElement("div", {
                        className: "tax-banner"
                    }, m)
                }
            }, t.prototype.render = function() {
                var e, t, a = this,
                    i = this.props,
                    u = i.actions,
                    f = i.countryList,
                    h = i.experiments,
                    _ = i.formData,
                    y = i.iframeUrl,
                    g = i.paymentSpec,
                    S = i.pricingData,
                    v = i.trialEndDate,
                    b = i.visible,
                    E = _.zipCode.rawValue,
                    x = n.default({
                        "payment-info-section": !0,
                        grid__item: !0,
                        hidden: b === !1
                    });
                b && (e = this.renderCurrencyBanner(_, S, v, this.props.hasCurrencyChanged), t = this.renderTaxBanner(_, S, v, this.props.hasTaxChangedWithinCountry, this.props.hasCurrencyChanged));
                var T = r.default.createElement("span", null, o._("You won’t be charged now."));
                return r.default.createElement("div", {
                    className: x
                }, r.default.createElement("div", {
                    className: "payment-lock"
                }, r.default.createElement(c.PaymentMethodLock, {
                    spriteName: "lock_blue",
                    tooltipPosition: d.TooltipPosition.TOP
                })), r.default.createElement(s.FormSection, {
                    title: o._("3. Confirm your trial"),
                    sideHeader: T
                }, r.default.createElement(l.BusinessPaymentMethodForm, {
                    actions: u,
                    countryList: f,
                    formData: _,
                    iframeUrl: y,
                    isTeam: !0,
                    paymentIsDown: this.props.paymentIsDown,
                    paymentSpec: g,
                    ref: function(e) {
                        a.paymentMethodForm = e
                    },
                    showCpf: h.showCpf,
                    showCpfName: h.showCpfName,
                    psd2AddressFields: h.psd2AddressFields,
                    submitForm: this.props.submitForm
                }), r.default.createElement(p.CaliforniaLegalTerms, {
                    zipCode: E
                }), r.default.createElement(m.TermsAndService, {
                    actions: u,
                    experiments: h,
                    formData: _,
                    isTrial: !0
                }), t, e))
            }, t
        })(r.default.Component);
        t.PaymentMethodPanel = f
    }),
    define("modules/clean/react/payments/checkout/components/multistep/team_plan_panel", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/react/payments/common/form_value_helpers", "modules/clean/react/payments/checkout/components/form_section", "modules/clean/react/payments/checkout/components/team_plan_section"], function(e, t, a, r, n, o, s, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r);
        var l = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.validFormData = function(e, t) {
                return o.FormValueHelper.isValid(e.numberOfUsers) && o.FormValueHelper.isValid(e.schedule)
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.formData,
                    a = e.actions,
                    o = e.experiments,
                    l = e.skuContent,
                    c = r.default.createElement("span", null, n._("You won’t be charged now."));
                return r.default.createElement(s.FormSection, {
                    title: n._("2. Choose your plan"),
                    className: "team-plan-section",
                    sideHeader: c
                }, r.default.createElement(i.TeamPlanSection, {
                    actions: a,
                    advancedDisplayName: this.props.advancedDisplayName,
                    experiments: o,
                    formData: t,
                    isTrial: !0,
                    isVatCountry: this.props.isVatCountry,
                    pricingData: this.props.pricingData,
                    standardDisplayName: this.props.standardDisplayName,
                    skipPricing: this.props.skipPricing,
                    skuContent: l
                }))
            }, t
        })(r.default.Component);
        t.TeamPlanPanel = l
    }), define("modules/clean/react/payments/checkout/components/payment_method_form/payment_method_lock", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/react/sprite_div", "modules/clean/react/tooltip"], function(e, t, a, r, n, o, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), o = a.__importDefault(o), s = a.__importStar(s);
        var i = s.Tooltip,
            l = s.TooltipPosition,
            c = (function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.spriteName,
                        a = e.tooltipPosition;
                    return t || (t = "lock"), void 0 === a && (a = l.RIGHT), r.default.createElement(i, {
                        position: a,
                        tooltip_contents: n._("Payments are secured using SSL and client-side encryption.")
                    }, r.default.createElement(o.default, {
                        group: "web",
                        name: t
                    }))
                }, t
            })(r.default.Component);
        t.PaymentMethodLock = c
    }), define("modules/clean/react/payments/checkout/components/skus/sku_selection_section", ["require", "exports", "tslib", "react", "external/classnames", "modules/core/exception", "modules/clean/react/sprite_div", "modules/core/i18n", "modules/clean/payments/skus/sku_content", "modules/clean/react/payments/checkout/components/skus/sku_box", "modules/clean/stormcrow/experiment", "modules/clean/react/payments/common/form_value_helpers", "modules/clean/react/image", "modules/clean/react/payments/checkout/components/inputs/radio_input", "modules/clean/payments/skus/constants", "modules/clean/payments/skus/pricing_data", "modules/clean/react/payments/business/actions/business_actions", "modules/clean/static_urls", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, a, r, n, o, s, i, l, c, u, m, d, p, f, h, _, y, g, S) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n), o = a.__importStar(o), s = a.__importDefault(s);
        var v = g.Loadable({
                loader: function() {
                    return S.waitForTTI().then(function() {
                        return new Promise(function(t, a) {
                            e(["modules/clean/react/payments/checkout/components/skus/faq_columns"], t, a)
                        }).then(a.__importStar).then(function(e) {
                            return e.FAQColumns
                        })
                    })
                }
            }),
            b = (function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.type,
                        a = e.callout,
                        o = e.children;
                    return r.default.createElement("div", {
                        className: "sku__flex-wrapper"
                    }, r.default.createElement("div", {
                        className: n.default("sku__tab-callout", "sku__tab-callout--" + t)
                    }, r.default.createElement("p", {
                        className: "sku__tab-callout-text"
                    }, a || i._("Your current plan"))), r.default.createElement("div", {
                        className: "sku__inner-box"
                    }, o))
                }, t
            })(r.default.PureComponent),
            E = (function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onScheduleChange = function(e) {
                        var a = parseInt(e.value, 10);
                        t.props.actions.updateSchedule(a)
                    }, t.onSkuSelect = function(e) {
                        return function() {
                            var a = t.props,
                                r = a.formStep,
                                n = a.actions;
                            n.updateProductPlanType(e);
                            var o;
                            o = e === f.ProductPlanType.NEW_STANDARD ? _.UpdateFormStepOrigins.SelectStandardButton : _.UpdateFormStepOrigins.SelectAdvancedButton, n.updateFormStep(r + 1, o)
                        }
                    }, t.getConfirmButtonText = function() {
                        var e;
                        return t.props.isTrial ? (void 0 === t.props.trialLength && o.reportException({
                            err: new Error("trialLength prop not provided when expected for trials"),
                            severity: o.SEVERITY.CRITICAL
                        }), e = i.ungettext("Try free for %(trial_length)s day", "Try free for %(trial_length)s days", t.props.trialLength, {
                            comment: "confirm button on /business/try plan selection step"
                        }).format({
                            trial_length: t.props.trialLength
                        })) : e = i._("Select"), e
                    }, t.getSkuBoxClass = function(e) {
                        var a = t.props,
                            r = a.currentPlan,
                            o = a.ncctVariant,
                            s = u.Experiment(o).variantIn("V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13"),
                            i = "advanced" === e && t.shouldShowAdvancedBestValue && !s || "standard" === e && r === f.ProductPlanType.NEW_STANDARD && s || "advanced" === e && r === f.ProductPlanType.ADVANCED && s,
                            l = !i && (t.shouldShowAdvancedBestValue || s);
                        return n.default({
                            "grid__item--medium--7-24": !0,
                            "sku__box--has-callout-tab": i,
                            "sku__box--sibling-has-callout-tab": l
                        }, "sku__box", "grid__item", "grid__item--stack")
                    }, t
                }
                return a.__extends(t, e), Object.defineProperty(t.prototype, "shouldShowAdvancedBestValue", {
                    get: function() {
                        return this.props.isBusinessDomain !== !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.validProductPlanType = function(e) {
                    var t = e.productPlanType;
                    return m.FormValueHelper.isValid(t)
                }, t.prototype.renderPlanDescription = function(e) {
                    var t = this.props,
                        a = t.advancedPlanInfo,
                        n = t.standardPlanInfo,
                        o = l.SkuContentClient.deserialize(n.skuContent),
                        s = l.SkuContentClient.deserialize(a.skuContent),
                        c = function(e) {
                            return e.hasUnlimitedSpace() ? i._("As much space as your team needs") : i._("%(space)s of space for secure storage").format({
                                space: e.spaceShortFormTb()
                            })
                        },
                        u = c(o),
                        m = c(s);
                    return {
                        standard: r.default.createElement("ul", {
                            className: "sku__description"
                        }, r.default.createElement("li", {
                            className: "sku__highlight"
                        }, r.default.createElement("div", {
                            className: "sku__highlight--icon"
                        }, r.default.createElement(d.Image, {
                            alt: u,
                            src: y.static_url("/static/images/growth/experiments/storage_1x-vfl5rbt7y.png"),
                            srcHiRes: y.static_url("/static/images/growth/experiments/storage_2x-vflmnOXj_.png")
                        })), u), r.default.createElement("li", {
                            className: "sku__highlight"
                        }, r.default.createElement("div", {
                            className: "sku__highlight--icon"
                        }, r.default.createElement(d.Image, {
                            alt: i._("Easy-to-use sharing and collaboration tools"),
                            src: y.static_url("/static/images/growth/experiments/tools_1x-vfl6FHzkk.png"),
                            srcHiRes: y.static_url("/static/images/growth/experiments/tools_2x-vflCVMyyR.png")
                        })), i._("Easy-to-use sharing and collaboration tools"))),
                        advanced: r.default.createElement("ul", {
                            className: "sku__description"
                        }, r.default.createElement("li", {
                            className: "sku__highlight"
                        }, r.default.createElement("div", {
                            className: "sku__highlight--icon"
                        }, r.default.createElement(d.Image, {
                            alt: m,
                            src: y.static_url("/static/images/growth/experiments/needs_1x-vflylj0T-.png"),
                            srcHiRes: y.static_url("/static/images/growth/experiments/needs_2x-vflKGT6sv.png")
                        })), m), r.default.createElement("li", {
                            className: "sku__highlight"
                        }, r.default.createElement("div", {
                            className: "sku__highlight--icon"
                        }, r.default.createElement(d.Image, {
                            alt: i._("Sophisticated control and security features"),
                            src: y.static_url("/static/images/growth/experiments/features_1x-vflrHrAWR.png"),
                            srcHiRes: y.static_url("/static/images/growth/experiments/features_2x-vflEbWW-j.png")
                        })), i._("Sophisticated control and security features"))),
                        enterprise: r.default.createElement("ul", {
                            className: "sku__description"
                        }, r.default.createElement("li", {
                            className: "sku__highlight"
                        }, r.default.createElement("div", {
                            className: "sku__highlight--icon"
                        }, r.default.createElement(d.Image, {
                            alt: i._("Customizable solutions"),
                            src: y.static_url("/static/images/growth/experiments/solutions_1x-vflRvECNM.png"),
                            srcHiRes: y.static_url("/static/images/growth/experiments/solutions_2x-vflsnn3Wv.png")
                        })), i._("Customizable solutions")), r.default.createElement("li", {
                            className: "sku__highlight"
                        }, r.default.createElement("div", {
                            className: "sku__highlight--icon"
                        }, r.default.createElement(d.Image, {
                            alt: i._("Individualized support to help admins manage at scale"),
                            src: y.static_url("/static/images/growth/experiments/scale_1x-vfld5IKoP.png"),
                            srcHiRes: y.static_url("/static/images/growth/experiments/scale_2x-vflft3lHD.png")
                        })), i._("Individualized support to help admins manage at scale")))
                    }[e]
                }, t.prototype.renderBaseFeatureList = function(e, t) {
                    var a = e.map(function(e, t) {
                            return r.default.createElement("li", {
                                key: "try-feature-" + t
                            }, r.default.createElement(s.default, {
                                group: "business",
                                name: "check-blue"
                            }), r.default.createElement("span", null, e))
                        }),
                        n = t ? r.default.createElement("li", null, r.default.createElement(s.default, {
                            group: "business",
                            name: "check-blue"
                        }), r.default.createElement("span", null, r.default.createElement("strong", null, t))) : null;
                    return r.default.createElement("div", {
                        className: "section"
                    }, r.default.createElement("ul", {
                        className: "feature-list type--copy-small help__feature-list"
                    }, n, a))
                }, t.prototype.renderStandardFeatureList = function(e) {
                    var t = this.props.projectZeusMasterSwitch,
                        a = l.SkuContentClient.deserialize(e),
                        r = a.hasUnlimitedSpace() ? i._("As much space as needed") : i._("%(space)s of space", {
                            comment: 'e.g. "2 Tb of space"'
                        }).format({
                            space: a.spaceLongForm()
                        }),
                        n = i._("%(vacuumming_policy_max_days)s days of file recovery").format({
                            vacuumming_policy_max_days: a.vacuumingPolicyMaxDays()
                        }),
                        o = [r, n, i._("256-bit AES and SSL/TLS encryption"), i._("Smart Sync"), i._("Dropbox Paper admin tools"), i._("Office 365 integration"), i._("Admin console and audit log"), i._("Granular sharing permissions"), i._("User and company-managed groups"), i._("Remote device wipe"), i._("Two-factor authentication (2FA)", {
                            comment: "use indicative verb form"
                        }), i._("Unlimited API access to security and productivity platform partners"), i._("25,000 API calls/month for data transport partners"), i._("Live chat support")];
                    return t && (o = [n, i._("Single admin login to manage multiple teams"), i._("Admin console and audit log"), i._("256-bit AES and SSL/TLS encryption"), i._("Granular sharing permissions"), i._("User and company-managed groups"), i._("Remote device wipe"), i._("Two-factor authentication (2FA)", {
                        comment: "use indicative verb form"
                    }), i._("Smart Sync"), i._("Dropbox Paper admin tools"), i._("Office 365 integration"), i._("Unlimited API access to security and productivity platform partners"), i._("1 million API calls/month for data transport partners"), i._("Priority chat, email and business hours phone support")]), this.renderBaseFeatureList(o)
                }, t.prototype.renderAdvancedFeatureList = function(e, t) {
                    var a = i._("Everything in %(name)s").format({
                            name: e.name
                        }),
                        r = this.props.projectZeusMasterSwitch,
                        n = l.SkuContentClient.deserialize(t),
                        o = n.hasUnlimitedSpace() ? i._("As much space as needed") : i._("%(space)s of space").format({
                            space: n.spaceLongFormRounded()
                        }),
                        s = [o, i._("Advanced admin controls"), i._("Dropbox Showcase"), i._("Tiered admin roles"), i._("File event tracking"), i._("Advanced user management tools"), i._("Invite enforcement"), i._("Domain verification"), i._("Single sign on (SSO) integration"), i._("Device approvals"), i._("Business hours phone support")];
                    return r && (s = [i._("Advanced admin controls"), i._("Tiered admin roles"), i._("Advanced user management tools"), i._("Single sign on (SSO) integration"), i._("Invite enforcement"), i._("Domain verification"), i._("Device approvals"), i._("File event tracking")]), this.renderBaseFeatureList(s, a)
                }, t.prototype.renderEnterpriseFeatureList = function(e) {
                    var t = this.props.projectZeusMasterSwitch,
                        a = i._("Everything in %(advanced_name)s").format({
                            advanced_name: e
                        }),
                        r = i._("24/7 phone support (in English)");
                    "en" !== this.props.locale && "en_GB" !== this.props.locale || (r = i._("24/7 phone support"));
                    var n = [i._("Account Capture"), i._("Network control"), i._("Enterprise mobility management (EMM)"), i._("Domain Insights"), i._("Advanced training for end users and admins"), r];
                    return t && (n = [i._("Centralized admin console to view and manage all your Business teams at once"), i._("Account Capture"), i._("Network control"), i._("Enterprise mobility management (EMM)"), i._("Domain Insights"), i._("Advanced training for end users and admins"), r]), this.renderBaseFeatureList(n, a)
                }, t.prototype.renderPerUserText = function(e) {
                    return i.ungettext("/ user / month, starting with %(count)s user", "/ user / month, starting with %(count)s users", e).format({
                        count: e
                    })
                }, t.prototype.render = function() {
                    var e, t, a = this.props,
                        o = a.discountInfo,
                        s = a.formData,
                        l = a.ncctVariant,
                        m = a.subChangePlans,
                        d = a.visible,
                        _ = a.standardPlanInfo,
                        y = a.advancedPlanInfo,
                        g = a.currentPlan,
                        S = s.schedule.formattedValue,
                        E = o && o.discountPercentage;
                    m && m.plans.length > 0 ? (e = new h.PricingDataOrion(m, f.ProductPlanType.NEW_STANDARD, E), t = new h.PricingDataOrion(m, f.ProductPlanType.ADVANCED, E)) : (e = new h.PricingDataFromPlan(_, E), t = new h.PricingDataFromPlan(y, E));
                    var x, T;
                    S === f.ScheduleId.YEARLY ? (x = e.getYearlyPerUserPrice(!0), T = t.getYearlyPerUserPrice(!0)) : (x = e.getMonthlyPerUserPrice(!0), T = t.getMonthlyPerUserPrice(!0));
                    var C = n.default({
                            hidden: !d,
                            grid__container: !0,
                            "grid--x-center": !0
                        }),
                        P = n.default({
                            "sku__feature-list": !0,
                            grid__item: !0,
                            "grid__item--medium--7-24": !0,
                            "grid--x-left": !0
                        }),
                        N = r.default.createElement("a", {
                            rel: "noopener",
                            href: "/business/contact",
                            className: "confirm-button checkout-button checkout-button--secondary",
                            target: "_blank"
                        }, r.default.createElement("span", {
                            className: "confirm-text type--semib"
                        }, i._("Contact us", {
                            comment: "used in a button describing how to find out more about enterprise on the plan selection page"
                        }))),
                        w = r.default.createElement("div", {
                            className: "plan-info-current-container"
                        }, r.default.createElement("div", {
                            className: "plan-info-current"
                        }, i._("– Your current plan –"))),
                        k = void 0,
                        D = void 0,
                        I = u.Experiment(l).variantIn("V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13");
                    I || (g === f.ProductPlanType.NEW_STANDARD ? k = w : g === f.ProductPlanType.ADVANCED && (D = w));
                    var V = r.default.createElement(c.SkuBox, {
                            type: _.skuContent.name,
                            priceData: e,
                            title: x.toString(),
                            subDescription: this.renderPerUserText(_.minLicenseCount),
                            description: this.renderPlanDescription("standard"),
                            buttonText: this.getConfirmButtonText(),
                            onClick: this.onSkuSelect(f.ProductPlanType.NEW_STANDARD),
                            subText: k
                        }),
                        F = r.default.createElement(c.SkuBox, {
                            isPrimary: !0,
                            priceData: t,
                            type: y.skuContent.name,
                            title: T.toString(),
                            subDescription: this.renderPerUserText(y.minLicenseCount),
                            description: this.renderPlanDescription("advanced"),
                            buttonText: this.getConfirmButtonText(),
                            onClick: this.onSkuSelect(f.ProductPlanType.ADVANCED),
                            subText: D
                        }),
                        A = r.default.createElement(c.SkuBox, {
                            confirmButton: N,
                            type: i._("Enterprise"),
                            title: i._("Contact us", {
                                comment: "used in a header describing how to find out more about enterprise on the plan selection page"
                            }),
                            description: this.renderPlanDescription("enterprise"),
                            buttonText: this.getConfirmButtonText(),
                            onClick: this.onSkuSelect(f.ProductPlanType.ADVANCED)
                        });
                    return I ? g === f.ProductPlanType.NEW_STANDARD ? V = r.default.createElement(b, {
                        type: "standard"
                    }, V) : g === f.ProductPlanType.ADVANCED && (F = r.default.createElement(b, {
                        type: "advanced"
                    }, F)) : this.shouldShowAdvancedBestValue && (F = r.default.createElement(b, {
                        callout: i._("Best value"),
                        type: "advanced"
                    }, F)), r.default.createElement("div", {
                        className: C
                    }, r.default.createElement("div", {
                        className: "sku__schedule-container grid__item grid--x-center grid__container--p-small"
                    }, r.default.createElement("label", {
                        className: "pricing-option yearly grid__item grid__item--shrink grid--vcjc"
                    }, r.default.createElement(p.RadioInput, {
                        name: "sku_schedule_id",
                        id: "sku-annual-radio",
                        value: f.ScheduleId.YEARLY.toString(),
                        checked: S === f.ScheduleId.YEARLY,
                        onChange: this.onScheduleChange
                    }), r.default.createElement("div", {
                        className: "annually-label type--copy--small"
                    }, i._("Billed yearly"))), r.default.createElement("label", {
                        className: "pricing-option monthly grid__item grid__item--shrink grid--vcjc"
                    }, r.default.createElement(p.RadioInput, {
                        name: "sku_schedule_id",
                        id: "sku-monthly-radio",
                        value: f.ScheduleId.MONTHLY.toString(),
                        checked: S === f.ScheduleId.MONTHLY,
                        onChange: this.onScheduleChange
                    }), r.default.createElement("div", {
                        className: "monthly-label type--copy--small"
                    }, i._("Billed monthly")))), r.default.createElement("div", {
                        className: "sku__plan-container grid__item grid--x-center"
                    }, r.default.createElement("div", {
                        className: this.getSkuBoxClass("standard"),
                        "data-sku": "standard"
                    }, V), r.default.createElement("div", {
                        className: P
                    }, this.renderStandardFeatureList(_.skuContent)), r.default.createElement("div", {
                        className: this.getSkuBoxClass("advanced"),
                        "data-sku": "advanced"
                    }, F), r.default.createElement("div", {
                        className: P
                    }, this.renderAdvancedFeatureList(_.skuContent, y.skuContent)), r.default.createElement("div", {
                        className: this.getSkuBoxClass("enterprise"),
                        "data-sku": "enterprise"
                    }, A), r.default.createElement("div", {
                        className: P,
                        key: "enterprise-feature-list"
                    }, this.renderEnterpriseFeatureList(y.skuContent.name))), r.default.createElement(v, {
                        experiments: this.props.experiments,
                        planMinLicenses: _.minLicenseCount,
                        ncctVariant: this.props.ncctVariant,
                        trialIsActive: this.props.trialIsActive,
                        trialEndDate: this.props.trialEndDate,
                        standardSkuContent: _.skuContent,
                        advancedSkuContent: y.skuContent
                    }))
                }, t
            })(r.default.Component);
        t.SkuSelectionSection = E
    }), define("modules/clean/react/payments/checkout/components/team_plan_section", ["require", "exports", "tslib", "react", "external/classnames", "modules/core/i18n", "modules/clean/react/payments/checkout/components/modals/pro_trials_upsell_modal", "modules/clean/react_format", "modules/clean/react/payments/checkout/components/number_of_users", "modules/clean/react/payments/checkout/components/schedule_field", "modules/clean/react/payments/checkout/components/schedule_dropdown", "modules/clean/payments/skus/constants", "modules/clean/stormcrow/experiment", "modules/clean/payments/skus/sku_content", "modules/clean/react/modal"], function(e, t, a, r, n, o, s, i, l, c, u, m, d, p, f) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r), n = a.__importDefault(n);
        var h = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.invokeProTrialsUpsellModal = function() {
                    var e = t.props.skuContent;
                    if (e) {
                        var a = p.SkuContentClient.deserialize(e);
                        f.Modal.showInstance(r.default.createElement(s.ProTrialsUpsellModal, {
                            proSku: a
                        }))
                    }
                }, t
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e, t = this.props.experiments,
                    a = n.default({
                        "team-options-container": !0,
                        "grid__item grid--x-bookend": !0
                    }),
                    s = "ON" === this.props.experiments.ujOneLicense && "ON" === this.props.experiments.ujProfessionalTrial;
                s && (e = this.invokeProTrialsUpsellModal);
                var p, f = r.default.createElement(l.NumberOfUsers, {
                        actions: this.props.actions,
                        experiments: t,
                        formData: this.props.formData,
                        isTrial: this.props.isTrial
                    }),
                    h = r.default.createElement(l.UserLimitError, {
                        experiments: t,
                        formData: this.props.formData,
                        isTrial: this.props.isTrial,
                        ncctVariant: this.props.ncctVariant,
                        teamNumUsers: this.props.teamNumUsers,
                        trialIsActive: this.props.trialIsActive,
                        onErrorCTA: e
                    });
                p = d.Experiment(t.subgrowthBizNoCcTrials).isActive ? r.default.createElement(u.ScheduleDropdown, {
                    actions: this.props.actions,
                    formData: this.props.formData
                }) : r.default.createElement(c.ScheduleField, {
                    actions: this.props.actions,
                    callout: this.props.scheduleCallout,
                    experiments: t,
                    formData: this.props.formData,
                    isTrial: this.props.isTrial,
                    isVatCountry: this.props.isVatCountry,
                    pricingData: this.props.pricingData,
                    skipPricing: this.props.skipPricing
                });
                var _;
                return this.props.formData.schedule.formattedValue === m.ScheduleId.YEARLY && this.props.pricingData.getPromoDiscount() && !this.props.skipPricing && (_ = r.default.createElement("span", {
                    className: "discount-detailed-explanation"
                }, i.reactFormat(o._("You are saving %(discount_total)s in total on your yearly subscription. This includes a special %(discount_promo)s discount and a standard %(discount_yearly)s savings for choosing yearly."), {
                    discount_total: o.format_percent(this.props.pricingData.getYearlySavingsPercentage()),
                    discount_promo: o.format_percent(this.props.pricingData.getPromoDiscount()),
                    discount_yearly: o.format_percent(this.props.pricingData.getYearlySavingsWithoutPromoPercentage())
                }))), r.default.createElement("div", {
                    className: "grid__item"
                }, r.default.createElement("div", {
                    className: a
                }, f, p), h, _)
            }, t
        })(r.default.Component);
        t.TeamPlanSection = h
    }), define("modules/clean/react/payments/checkout/components/terms_and_service", ["require", "exports", "tslib", "react", "modules/clean/react_format", "modules/clean/react/payments/checkout/components/inputs/labeled_checkbox_input", "modules/clean/react/payments/buy/components/inputs/inputs", "modules/clean/react/payments/common/form_value_helpers", "modules/clean/stormcrow/experiment", "modules/constants/trademark", "modules/core/i18n"], function(e, t, a, r, n, o, s, i, l, c, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importDefault(r);
        var m = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), Object.defineProperty(t.prototype, "ncctExp", {
                get: function() {
                    return l.Experiment(this.props.experiments.subgrowthBizNoCcTrials)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onTermsAndServiceChange = function(e) {
                this.props.actions.updateTermsAndService(e.checked)
            }, t.prototype.onTermsAndServiceChangeArbor = function(e) {
                var t = this.props.formData.termsAndService.rawValue;
                this.props.actions.updateTermsAndService(!t)
            }, t.prototype.termsAndServiceErrorString = function() {
                var e = this.props.formData.termsAndService;
                return !i.FormValueHelper.isValid(e) && e.showError ? u._("Please agree to the terms of service.") : ""
            }, t.prototype.render = function() {
                var e = this.props.formData,
                    t = n.reactFormat(u._("I agree to the <link_agreement>%(trademark_business)s Agreement</link_agreement>       and <link_terms>Terms</link_terms>."), {
                        link_agreement: r.default.createElement("a", {
                            key: "tos-link-agreement",
                            href: "/business_agreement",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }),
                        link_terms: r.default.createElement("a", {
                            key: "tos-link-terms",
                            href: "/terms",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }),
                        trademark_business: c.TRADEMARK_BUSINESS
                    }),
                    a = r.default.createElement("span", {
                        className: "type--copy-small",
                        onClick: this.onTermsAndServiceChangeArbor.bind(this)
                    }, t);
                return this.ncctExp.variantIn("V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13") ? r.default.createElement(s.LabeledCheckboxInput, {
                    checked: e.termsAndService.rawValue,
                    containerClassName: "billing-terms-and-service grid__item grid--y-middle",
                    errorText: this.termsAndServiceErrorString(),
                    labelText: a,
                    name: "tos_agree",
                    onClick: this.onTermsAndServiceChangeArbor.bind(this)
                }) : r.default.createElement(o.LabeledCheckboxInput, {
                    checked: e.termsAndService.rawValue,
                    className: "billing-terms-and-service grid__item grid--y-middle",
                    errorHTML: e.termsAndService.serverError,
                    errorText: this.termsAndServiceErrorString(),
                    labelText: r.default.createElement("span", null, t),
                    name: "tos_agree",
                    onChange: this.onTermsAndServiceChange.bind(this)
                })
            }, t
        })(r.default.Component);
        t.TermsAndService = m
    }), define("modules/clean/react/payments/common/middleware/web_teams_logger", ["require", "exports", "tslib", "modules/clean/analytics", "modules/clean/react/payments/common/form_value_helpers", "modules/clean/payments/skus/constants", "modules/clean/react/payments/business/actions/business_actions"], function(e, t, a, r, n, o, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = a.__importStar(r);
        var i = r.TeamsWebActionsLogger;
        t.webTeamsLogger = function(e) {
            var t, a, r = (new Date).getTime(),
                l = ["UpdateFirstName", "UpdateLastName", "UpdateEmail", "UpdatePassword", "UpdateTeamName", "UpdateTeamPhone", "UpdateCompanySize", "UpdateZipCode", "UpdateVat", "UpdateAccountHolderName", "UpdateIBAN", "UpdateMandateSigned", "UpdateNonce"];
            return function(c) {
                return function(u) {
                    return function(m) {
                        try {
                            var d = c.getState(),
                                p = u(m),
                                f = m.type,
                                h = c.getState(),
                                _ = h.pageState,
                                y = h.formData,
                                g = void 0;
                            if (l.indexOf(f) !== -1 && t === f) return p;
                            "UpdateTransitionsStart" === f || "UpdateRenewTransitionsStart" === f ? a = (new Date).getTime() : "UpdateTransitionsSuccess" !== f && "UpdateTransitionsError" !== f && "UpdateRenewTransitionsSuccess" !== f && "UpdateRenewTransitionsError" !== f || (g = (((new Date).getTime() - a) / 1e3).toFixed(1));
                            var S = {
                                type: f,
                                flow: _.isPreSelect ? "PreSelect" : "PlanSelect"
                            };
                            if (void 0 !== g && (S.roundtrip = g), y.productPlanType.rawValue === o.ProductPlanType.NEW_STANDARD ? S.sku = "standard" : y.productPlanType.rawValue === o.ProductPlanType.ADVANCED && (S.sku = "advanced"), "UpdateFormStep" === f) {
                                var v = m;
                                S.curStep = d.pageState.formStep, S.nextStep = v.step, void 0 !== v.origin && (S.origin = s.UpdateFormStepOrigins[v.origin], v.origin === s.UpdateFormStepOrigins.PreSelectedSku && (S.curStep = 0))
                            }
                            if ("UpdateCountryCode" === f && (S.NewCountryCode = y.countryCode.rawValue, S.PreviousCountryCode = d.formData.countryCode.rawValue), "ShowFormFieldErrors" === f) {
                                S.step = _.formStep;
                                var b = m,
                                    E = b.fieldNames;
                                S.errorFields = E.filter(function(e) {
                                    if (y.hasOwnProperty(e)) {
                                        var t = y[e];
                                        return t && !n.FormValueHelper.isValid(t)
                                    }
                                    return !1
                                }).join(","), S.origin = b.origin
                            }
                            var x = !1,
                                T = !0;
                            if ("BlurEmail" === f && (n.FormValueHelper.isValid(y.email) ? (S.email = y.email.rawValue, x = !0) : T = !1), "SubmitFormSuccess" === f && (i.log("ncct_submission_congrats"), T = !0, S.numberOfUsers = y.numberOfUsers.formattedValue, S.schedule = 1 === y.schedule.formattedValue ? "monthly" : "yearly", S.paymentmethod = 1 === y.paymentMethod.rawValue ? "creditcard" : "paypal", S.country = y.countryCode.formattedValue, S.roundtrip = (((new Date).getTime() - r) / 1e3).toFixed(1)), "ToggleExistingAccount" === f) {
                                var C = "";
                                C = _.existingAccountShowing ? "showExisting" : "showNew", S.showType = C
                            }
                            if ("UpdatePaymentMethod" === f && (S.paymentmethod = 1 === y.paymentMethod.rawValue ? "creditcard" : "paypal", S.country = y.countryCode.formattedValue), "UpdateNumberOfUsers" === f) {
                                var P = m,
                                    N = parseInt(P.value, 10);
                                isNaN(N) ? (S.notANumber = !0, S.isUnderLimit = !1, S.isUnderLicenseLimit = !1, S.isOverLimit = !1) : (S.notANumber = !1, S.isUnderLimit = N < _.minNumUsers, S.isUnderLicenseLimit = N < y.numberOfUsers.minLicenseLimit, S.isOverLimit = N > _.maxNumUsers)
                            }
                            return "SubmitFormStart" === f && (S.numberOfUsers = y.numberOfUsers.formattedValue, S.schedule = 1 === y.schedule.formattedValue ? "monthly" : "yearly", S.paymentmethod = 1 === y.paymentMethod.rawValue ? "creditcard" : "paypal", S.country = y.countryCode.formattedValue, S.roundtrip = (((new Date).getTime() - r) / 1e3).toFixed(1)), T && i.log(_.isTrial ? "react_checkout_try_action" : "react_checkout_buy_action", S, void 0, void 0, x), t = f, p
                        } catch (t) {
                            throw i.log(e ? "react_checkout_try_crash" : "react_checkout_buy_crash", {
                                action: m.type,
                                error: t.stack || t.toString()
                            }), t
                        }
                    }
                }
            }
        }
    });
//# sourceMappingURL=pkg-legacy-af.min.js-vfly2ryGA.map