define(["require", "exports", "tslib", "react", "modules/core/i18n", "modules/core/browser", "modules/core/exception", "modules/clean/ajax", "modules/clean/auth/common/types", "modules/clean/auth/common/utils", "modules/clean/auth/register/types", "modules/clean/auth/register/view", "modules/clean/form_util/name_parser", "modules/clean/profile_services/auth_callback_handler", "modules/clean/profile_services/profile_services_constants", "modules/clean/profile_services/profile_services_link", "modules/clean/react/css", "modules/clean/web_timing_logger", "modules/clean/web_register_logging_data"], function(e, t, s, r, o, i, a, n, l, p, m, c, g, d, u, h, _, f, v) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = s.__importDefault(r), i = s.__importStar(i), a = s.__importStar(a), n = s.__importStar(n), g = s.__importDefault(g), u = s.__importDefault(u);
    var S = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            r.testOnlyGetViewComponent = function() {
                return r.viewComponent
            }, r.setViewComponent = function(e) {
                r.viewComponent = e
            }, r.onClickSignUp = function(e) {
                e.preventDefault(), r.handleRegisterFormEvent(m.RegisterFormEvent.REGISTER_CLICK);
                var t = r.getFormErrors();
                if (t.fname || t.email || t.password || t.tos) return void r.setState({
                    localErrors: t
                });
                r.viewComponent.getRecaptchaComponent().getWrappedComponent().submit()
            }, r.onSubmit = function() {
                r.setState({
                    isSubmitting: !0
                });
                var e = r.registerData(),
                    t = r.props.thirdPartyInitiatedSignupData ? "/ajax_thirdparty_register" : "/ajax_register";
                n.WebRequest({
                    url: t,
                    type: "POST",
                    data: e,
                    success: function(e, t, s) {
                        r.handleSuccess(e)
                    },
                    error: function(e, t, s) {
                        r.handleServerErrors(JSON.parse(s))
                    }
                })
            }, r.handleGoogleCallback = function(e) {
                var t = r.props,
                    o = t.additionalParams,
                    i = void 0 === o ? {} : o,
                    a = t.marketingOptInProps,
                    n = void 0 === a ? {} : a,
                    l = r.props.googleRegisterProps || {},
                    p = l.signupContinuationUrl || "/",
                    c = v.getWebRegisterLoggingData();
                d.handleRegisterResponse(e, s.__assign({
                    showMarketingOptIn: !!n.show,
                    registerCont: p,
                    loginCont: l.optimisticLoginContinuationUrl || p,
                    signupTag: i.signup_tag || "",
                    canRedirect: r.props.canRedirect !== !1,
                    k: i.k,
                    eh: i.eh,
                    signupEndpoint: r.props.signupEndpoint
                }, c), void 0, function() {
                    return r.handleRegisterFormEvent(m.RegisterFormEvent.GOOGLE_REGISTER_SUCCESS)
                })
            }, r.onGoogleRegisterClick = function() {
                r.handleRegisterFormEvent(m.RegisterFormEvent.REGISTER_CLICK);
                var e = !r.props.googleRegisterProps || r.props.googleRegisterProps.popup;
                (new h.ProfileServicesLinkingHandler).auth_service_create_user_if_needed(u.default.GOOGLE, r.handleGoogleCallback, "register_form", e)
            }, r.onInputChange = function(e) {
                var t = {},
                    s = e.currentTarget,
                    o = s.name,
                    i = s.value,
                    a = s.checked;
                "fname" === o ? t.fname = i : "lname" === o ? t.lname = i : "email" === o ? t.email = i : "password" === o ? t.password = i : "tos_agree" === o ? t.tosAgree = a : "marketing_opt_in" === o && (t.marketingOptIn = a), r.setState(t), r.clearFormErrors(t)
            }, a.assert(t.canRedirect !== !1 || !!t.onRegisterSuccess, "Need an on register success handler if we cannot redirect the user", {
                tags: ["react-register-form"]
            });
            var o = t.fnameProps,
                i = void 0 === o ? {} : o,
                l = t.lnameProps,
                p = void 0 === l ? {} : l,
                c = t.emailProps,
                g = void 0 === c ? {} : c,
                _ = t.tosCheckboxProps,
                f = void 0 === _ ? {} : _,
                S = t.marketingOptInProps,
                E = void 0 === S ? {} : S,
                R = !E.show || !!E.checked;
            return r.state = {
                localErrors: {},
                isSubmitting: !1,
                fname: i.initialValue || "",
                lname: p.initialValue || "",
                email: g.initialValue || "",
                password: "",
                tosAgree: !!f.checked,
                marketingOptIn: R
            }, r.mounted = !1, r
        }
        return s.__extends(t, e), t.prototype.handleServerErrors = function(e) {
            if (this.mounted && !this.viewComponent.handleRecaptchaErrors(e)) {
                var t = s.__assign({}, this.state.localErrors);
                e.email && (t.email = e.email), e.password && (t.password = e.password), e.fname && (t.fname = e.fname), e.tos_agree && (t.tos = e.tos_agree), this.setState({
                    localErrors: t
                }), this.setState({
                    isSubmitting: !1
                })
            }
        }, t.prototype.handleSuccess = function(e) {
            if (this.mounted) {
                var t = JSON.parse(e),
                    s = {
                        id: t.id,
                        email: t.email,
                        display_name: t.display_name
                    };
                if (this.handleRegisterFormEvent(m.RegisterFormEvent.REGISTER_IMMEDIATE_SUCCESS, {
                        userInfo: s
                    }), this.props.canRedirect !== !1) {
                    var r = this.props.continuationUrlForNonGoogleSignup || t.redirect_url || "/";
                    i.redirect(r)
                } else this.props.onRegisterSuccess && this.props.onRegisterSuccess(s);
                this.setState({
                    isSubmitting: !1
                })
            }
        }, t.prototype.handleRegisterFormEvent = function(e, t) {
            this.props.onRegisterFormEvent && this.props.onRegisterFormEvent(e, t)
        }, t.prototype.getFormattedName = function() {
            var e = this.state,
                t = e.fname,
                s = e.lname;
            return this.props.combinedName ? p.lastNameGoesFirst() ? [s, t] : g.default.splitFullName(t) : [t, s]
        }, t.prototype.registerData = function() {
            var e = this.getFormattedName(),
                t = e[0],
                r = e[1],
                o = i.get_uri().getQuery(),
                a = this.state,
                n = a.email,
                l = a.password,
                p = a.tosAgree,
                m = a.marketingOptIn,
                c = this.props,
                g = c.additionalParams,
                d = c.thirdPartyInitiatedSignupData,
                u = s.__assign({
                    fname: t,
                    lname: r,
                    email: n,
                    tos_agree: p
                }, d ? {} : {
                    password: l
                }),
                h = s.__assign({
                    signup_endpoint: this.props.signupEndpoint,
                    demandbase_override: o.demandbase_override,
                    marketing_opt_in: m
                }, u, d || {}, this.viewComponent && this.viewComponent.getRecaptchaResponses() || {}, g);
            return v.setWebRegisterLoggingData(h)
        }, t.prototype.clearFormErrors = function(e) {
            var t = this.state.localErrors;
            e.fname && (t.fname = {}), e.email && (t.email = {}), e.password && (t.password = {}), e.tosAgree && (t.tos = {}), this.setState({
                localErrors: t
            })
        }, t.prototype.getFormErrors = function() {
            var e = {};
            return this.props.validateClientSide ? (this.state.fname ? e.fname = void 0 : e.fname = {
                message_text: o._("Please enter your name")
            }, this.state.email ? e.email = void 0 : e.email = {
                message_text: o._("Please enter an email address")
            }, this.state.password ? e.password = void 0 : e.password = {
                message_text: o._("Please enter a password")
            }, this.state.tosAgree ? e.tos = void 0 : e.tos = {
                message_text: o._("Please agree to the terms of service")
            }, e) : e
        }, t.prototype.componentDidMount = function() {
            this.props.markTti && f.mark_time_to_interactive(), this.mounted = !0
        }, t.prototype.componentWillUnmount = function() {
            this.mounted = !1
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.marketingOptInProps,
                s = void 0 === t ? {} : t,
                o = e.variant,
                i = e.emailProps,
                a = e.maestroStyle,
                n = e.disabled,
                p = e.className,
                m = e.combinedName,
                g = e.fnameProps,
                d = e.lnameProps,
                u = e.passwordProps,
                h = e.tosCheckboxProps,
                _ = e.submitButtonProps,
                f = e.googleRegisterProps,
                v = e.thirdPartyInitiatedSignupData;
            return r.default.createElement(c.RegisterFormView, {
                ref: this.setViewComponent,
                variant: o || l.AuthFormVariant.STANDARD,
                maestroStyle: !!a,
                disabled: !!n,
                className: p,
                combinedName: !!m,
                fnameProps: g || {},
                fnameValue: this.state.fname,
                fnameError: this.state.localErrors.fname,
                lnameProps: d || {},
                lnameValue: this.state.lname,
                emailProps: i || {},
                emailValue: this.state.email,
                emailError: this.state.localErrors.email,
                passwordProps: u || {},
                passwordValue: this.state.password,
                passwordError: this.state.localErrors.password,
                tosCheckboxProps: h || {},
                tosChecked: this.state.tosAgree,
                tosError: this.state.localErrors.tos,
                submitButtonProps: _ || {},
                googleRegisterProps: f,
                thirdPartyInitiatedSignup: !!v,
                isSubmitting: this.state.isSubmitting,
                onClickSignUp: this.onClickSignUp,
                onInputChange: this.onInputChange,
                onSubmit: this.onSubmit,
                onGoogleRegisterClick: this.onGoogleRegisterClick,
                showMarketingOptIn: !!s.show,
                marketingOptInChecked: this.state.marketingOptIn
            })
        }, t
    })(r.default.Component);
    t.TestOnlyRegisterFormComponent = S, t.RegisterForm = _.requireCssWithComponent(S, ["/static/css/login_or_register-vfl33XXu1.css", "/static/css/components/login_form-vflaxe1fJ.css", "/static/css/components/button-vflzsghBU.css"])
});
//# sourceMappingURL=form.min.js-vflpQMhkI.map