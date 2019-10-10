define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/browser", "modules/core/exception", "modules/core/html", "modules/core/notify", "modules/core/uri", "modules/clean/auth/common/types", "modules/clean/auth/login/2fa/authenticator_form", "modules/clean/auth/login/2fa/email_form", "modules/clean/auth/login/2fa/phone_form", "modules/clean/auth/login/2fa/seckey_form", "modules/clean/auth/login/api", "modules/clean/auth/login/credentials_form", "modules/clean/auth/login/sso_utils", "modules/clean/auth/login/types", "modules/clean/react/css", "modules/core/i18n", "modules/clean/react_format", "modules/clean/profile_services/profile_services_constants", "modules/clean/profile_services/profile_services_link", "modules/clean/auth/authenticator", "modules/clean/security/passwords"], function(e, t, o, r, s, a, i, n, c, l, p, u, m, h, d, g, _, S, f, w, y, F, T, E, C, b) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importDefault(r), s = o.__importDefault(s), a = o.__importStar(a), g = o.__importStar(g), T = o.__importDefault(T), C = o.__importStar(C);
    var A;
    (function(e) {
        e[e.CREDENTIALS_OR_SSO = 0] = "CREDENTIALS_OR_SSO", e[e.EMAIL_2FA = 1] = "EMAIL_2FA", e[e.PHONE_2FA = 2] = "PHONE_2FA", e[e.AUTHENTICATOR_2FA = 3] = "AUTHENTICATOR_2FA", e[e.SECKEY_2FA = 4] = "SECKEY_2FA"
    })(A || (A = {})), t.TestOnlyLoginStep = A;
    var v = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            r.testOnlyGetSsoChecker = function() {
                return r.ssoChecker
            }, r.setCredentialsFormComponent = function(e) {
                r.credentialsFormComponent = e
            }, r.testOnlyGetCredentialsFormComponent = function() {
                return r.credentialsFormComponent
            }, r.onInputChange = function(e) {
                var t = e.currentTarget,
                    s = {},
                    a = o.__assign({}, r.state.localErrors),
                    i = !1;
                switch (t.name) {
                    case "login_email":
                        s.email = t.value, a.email = void 0, i = !0;
                        break;
                    case "login_password":
                        s.password = t.value, a.password = void 0;
                        break;
                    case "remember_me":
                        s.rememberMe = t.checked;
                        break;
                    case "trusted":
                        s.trusted = t.checked;
                        break;
                    case "code":
                        s.twoFactorCode = t.value, a.twoFactor = void 0
                }
                s.localErrors = a, r.setState(s, function() {
                    i && r.ssoChecker.checkSsoState(s.email, r.onSsoStateUpdate)
                })
            }, r.onSsoStateUpdate = function(e, t) {
                e === r.state.email && r.setState({
                    ssoState: t
                })
            }, r.onSsoChangeClick = function() {
                i.assert(r.state.ssoState === f.SsoState.OPTIONAL, "User can change SSO state only when it is optional", {
                    tags: ["react-login-form"]
                }), r.setState({
                    ssoState: f.SsoState.OFF
                })
            }, r.generateThirdPartyAuthUrl = function(e, t) {
                var o = {
                    fname: e.profile.given_name,
                    lname: e.profile.family_name,
                    email: e.profile.email,
                    picture_url: e.profile.picture_url,
                    refresh_token: e.refresh_token,
                    email_sig: e.email_sig,
                    automatic_redirect: t.toString(),
                    cont: r.props.continuationUrl || "/"
                };
                return r.props.googleLoginProps && r.props.googleLoginProps.signupTag && (o.signup_tag = r.props.googleLoginProps.signupTag), r.props.googleLoginProps && r.props.googleLoginProps.signupEndpoint && (o.signup_endpoint = r.props.googleLoginProps.signupEndpoint), String(new l.URI({
                    path: "/third_party_signup"
                }).updateQuery(o))
            }, r.handleGoogleCallback = function(e) {
                if (e.success) r.handleLoginFormEvent(f.LoginFormEvent.GOOGLE_LOGIN_SUCCESS), c.Notify.success(y._("Log in successful! Your browser will be redirected in a few seconds.")), g.logProfileServicesSuccess(), a.redirect(r.props.continuationUrl || "/");
                else if (g.logProfileServicesFailure(), "emails_do_not_match_redirect" === e.err_msg) {
                    var t = r.generateThirdPartyAuthUrl(e, !0);
                    a.redirect(t)
                } else if ("emails_do_not_match" === e.err_msg)
                    if ("pairing" !== r.props.type && r.props.variant === p.AuthFormVariant.STANDARD) {
                        var t = r.generateThirdPartyAuthUrl(e, !1),
                            i = F.reactFormat(y._("Oops! We couldn’t find a Dropbox account matching that email. <a>Click here to create one.</a>"), {
                                a: s.default.createElement("a", {
                                    className: "third-party-signup-link",
                                    href: t
                                })
                            });
                        r.setState({
                            localErrors: o.__assign({}, r.state.localErrors, {
                                googleLogin: i
                            })
                        })
                    } else e.localized_error ? c.Notify.error(e.localized_error) : c.Notify.error(y._("There was a problem completing this request."));
                else if ("tfa_required" === e.err_msg) {
                    var t = new l.URI({
                        path: "/verify_code"
                    }).updateQuery({
                        cont: r.props.continuationUrl || "/",
                        remember_me: e.remember_me.toString(),
                        pair_user: e.pair_user.toString()
                    });
                    a.redirect(t.toString())
                } else if ("not_verified" === e.err_msg) {
                    var t = new l.URI({
                        path: "/show_password_form"
                    }).updateQuery({
                        cont: r.props.continuationUrl || "/",
                        remember_me: e.remember_me.toString(),
                        pair_user: e.pair_user.toString()
                    });
                    a.redirect(t.toString())
                } else e.localized_error ? c.Notify.error(e.localized_error) : c.Notify.error(y._("There was a problem completing this request.")), "google_login_not_allowed" !== e.err_msg && "sso_required" !== e.err_msg || (r.setState({
                    email: e.profile.email
                }), r.ssoChecker.checkSsoState(e.profile.email, r.onSsoStateUpdate))
            }, r.onGoogleLoginClick = function() {
                r.handleLoginFormEvent(f.LoginFormEvent.GOOGLE_LOGIN_CLICK), r.setState({
                    localErrors: {}
                });
                var e = !!r.props.googleLoginProps && r.props.googleLoginProps.popup !== !1;
                (new E.ProfileServicesLinkingHandler).auth_service_login_web(T.default.GOOGLE, r.handleGoogleCallback, "login_form", e, r.state.rememberMe, r.props.continuationUrl || "/", "pairing" === r.props.type)
            }, r.handleAppleCallback = function(e) {
                if (e.success) r.handleLoginFormEvent(f.LoginFormEvent.APPLE_LOGIN_SUCCESS), c.Notify.success(y._("Sign in successful! Your browser will be redirected in a few seconds.")), g.logProfileServicesSuccess(), a.redirect(r.props.continuationUrl || "/");
                else if (g.logProfileServicesFailure(), "no_email_in_response" === e.err_msg) {
                    var t = y._('<span>Sign in failed. If you’d like to sign in with Apple again, <a href="/help/accounts-billing/settings-sign-in/apple-sign-in-error">see how in our help center</a>. You could also sign in with your Dropbox account email and password.</span>');
                    c.Notify.error(new n.HTML(t), 30)
                } else if ("tfa_required" === e.err_msg) {
                    var o = new l.URI({
                        path: "/verify_code"
                    }).updateQuery({
                        cont: r.props.continuationUrl || "/",
                        remember_me: e.remember_me.toString(),
                        pair_user: e.pair_user.toString()
                    });
                    a.redirect(o.toString())
                } else if ("requires_password_on_first_link" === e.err_msg) {
                    var o = new l.URI({
                        path: "/show_password_form"
                    }).updateQuery({
                        cont: r.props.continuationUrl || "/",
                        remember_me: e.remember_me.toString(),
                        pair_user: e.pair_user.toString()
                    });
                    a.redirect(o.toString())
                } else e.localized_error ? c.Notify.error(e.localized_error) : c.Notify.error(y._("There was a problem completing this request.")), "apple_login_not_allowed" === e.err_msg && (r.setState({
                    email: e.profile.email
                }), r.ssoChecker.checkSsoState(e.profile.email, r.onSsoStateUpdate))
            }, r.onAppleLoginClick = function() {
                r.handleLoginFormEvent(f.LoginFormEvent.APPLE_LOGIN_CLICK), r.setState({
                    localErrors: {}
                });
                var e = !!r.props.appleLoginProps && r.props.appleLoginProps.popup !== !1;
                (new E.ProfileServicesLinkingHandler).auth_service_login_web(T.default.APPLE, r.handleAppleCallback, "login_form", e, r.state.rememberMe, r.props.continuationUrl || "/", "pairing" === r.props.type)
            }, r.credentialsFormData = function() {
                var e = o.__assign({
                    login_email: r.state.email,
                    login_password: r.state.password,
                    cont: r.props.continuationUrl,
                    remember_me: r.state.rememberMe
                }, r.credentialsFormComponent.getRecaptchaResponses(), r.props.additionalData);
                return r.props.encryptionOptions ? b.wrapPassword(r.state.password, r.props.encryptionOptions).then(function(t) {
                    return e.encrypted_password = t, Promise.resolve(e)
                }).catch(function(t) {
                    return i.reportException({
                        err: t,
                        severity: "non-critical"
                    }), Promise.resolve(e)
                }) : Promise.resolve(e)
            }, r.handleLoginSuccess = function(e) {
                return r.handleLoginFormEvent(f.LoginFormEvent.LOGIN_IMMEDIATE_SUCCESS, {
                    userInfo: e
                }), r.props.canRedirect !== !1 ? a.redirect(r.props.continuationUrl || "/") : r.props.onLoginSuccess ? r.props.onLoginSuccess(e) : a.redirect("/")
            }, r.handleSuccessResponse = function(e) {
                switch (r.setState({
                    isSubmitting: !1
                }), e.status) {
                    case f.LoginResponseStatus.ERROR:
                        var t = e.html_response ? new n.HTML(e.message) : e.message;
                        return c.Notify.error(t);
                    case f.LoginResponseStatus.EXPIRED:
                        return a.redirect(e.cont);
                    case f.LoginResponseStatus.OK:
                        var s = {
                            id: e.id,
                            email: e.email,
                            display_name: e.display_name,
                            locale: e.locale
                        };
                        r.handleLoginSuccess(s);
                        break;
                    case f.LoginResponseStatus.PASSWORD_EXPIRED:
                        return r.setState({
                            localErrors: o.__assign({}, r.state.localErrors, {
                                email: {
                                    message_text: y._("The password of the account associated with this email has expired.\n             Please login to this account and update its password before pairing.")
                                }
                            })
                        });
                    case f.LoginResponseStatus.RATELIMIT:
                        return r.setState({
                            localErrors: o.__assign({}, r.state.localErrors, {
                                email: {
                                    message_text: y._("You’ve tried to log in too many times. Please try again in a few minutes.")
                                }
                            })
                        });
                    case f.LoginResponseStatus.TWOFACTOR_REQUIRED:
                        return a.redirect(e.cont);
                    case f.LoginResponseStatus.TWOFACTOR:
                        e.use_email_2fa ? r.setState({
                            primaryTwoFactorType: f.TwoFactorType.EMAIL,
                            currentStep: A.EMAIL_2FA
                        }) : e.u2f_challenge && C.canUseAuthenticator(r.generateU2fRequest(e.u2f_challenge)) ? (r.setState({
                            primaryTwoFactorType: f.TwoFactorType.SEC_KEY,
                            currentStep: A.SECKEY_2FA
                        }), e.last_two_digits ? r.setState({
                            lastTwoDigits: e.last_two_digits,
                            secondaryTwoFactorType: f.TwoFactorType.SMS
                        }) : r.setState({
                            secondaryTwoFactorType: f.TwoFactorType.AUTHENTICATOR
                        }), r.kickOffU2f(e.u2f_challenge)) : e.last_two_digits ? r.setState({
                            primaryTwoFactorType: f.TwoFactorType.SMS,
                            lastTwoDigits: e.last_two_digits,
                            secondaryTwoFactorType: void 0,
                            currentStep: A.PHONE_2FA
                        }) : r.setState({
                            primaryTwoFactorType: f.TwoFactorType.AUTHENTICATOR,
                            lastTwoDigits: void 0,
                            secondaryTwoFactorType: void 0,
                            currentStep: A.AUTHENTICATOR_2FA
                        });
                        break;
                    case f.LoginResponseStatus.SSO:
                        return a.unsafeRedirect(e.sso_url);
                    case f.LoginResponseStatus.PASSWORD_DECRYPTION_ERROR:
                        return a.redirect(e.cont)
                }
            }, r.handleServerErrors = function(e) {
                if (!r.credentialsFormComponent.handleRecaptchaErrors(e)) {
                    var t = {};
                    e.login_email ? t.email = e.login_email : t.email = void 0, e.login_password ? t.password = e.login_password : t.password = void 0, e["failed-login-invalid-email-password"] ? t.login = F.reactFormat(y._("Oops! It looks like you may have forgotten your password. <a>Click here to reset it.</a>"), {
                        a: s.default.createElement("a", {
                            href: "/forgot"
                        })
                    }) : t.login = void 0, r.setState({
                        localErrors: t
                    }), r.setState({
                        isSubmitting: !1
                    })
                }
            }, r.onCredentialsFormSubmit = function() {
                r.setState({
                    isSubmitting: !0
                }), r.credentialsFormData().then(function(e) {
                    var t = g.submitCredentialsForm(r.props.type, e);
                    t.catch(r.handleServerErrors), t.then(r.handleSuccessResponse)
                })
            }, r.onLoginClick = function(e) {
                e.preventDefault(), r.handleLoginFormEvent(f.LoginFormEvent.LOGIN_CLICK), r.credentialsFormComponent.submitRecaptcha()
            }, r.handleResendCodeSuccess = function(e) {
                var t;
                switch (e) {
                    case f.TwoFactorResendResponse.OK:
                        return c.Notify.success(y._("We sent you a code. It may take a few minutes to arrive."));
                    case f.TwoFactorResendResponse.RATELIMIT:
                        t = y._("You’ve tried to log in too many times. Please try again in a few minutes.");
                        break;
                    case f.TwoFactorResendResponse.UNREACHABLE:
                        t = y._("We couldn’t reach your phone number. Are you sure it’s correct?");
                        break;
                    case f.TwoFactorResendResponse.EXPIRED:
                        t = y._("Sorry, your phone code has expired. Please log in again.");
                        break;
                    case f.TwoFactorResendResponse.BADCARRIER:
                        t = y._("Unfortunately, your carrier isn’t supported at this time.");
                        break;
                    case f.TwoFactorResendResponse.INVALIDNUMBER:
                        t = y._("That isn’t a valid phone number.");
                        break;
                    case f.TwoFactorResendResponse.NOTAMOBILE:
                        t = y._("That phone number doesn’t appear to be a valid mobile number.");
                        break;
                    default:
                        return c.Notify.error(y._("There was a problem completing this request."))
                }
                r.setState({
                    localErrors: o.__assign({}, r.state.localErrors, {
                        twoFactor: {
                            message_text: t
                        }
                    })
                })
            }, r.resendCode = function() {
                var e = g.resendTwoFactorCode(r.props.additionalData && r.props.additionalData.is_backup || !1, r.props.additionalData && r.props.additionalData.mobile_push || !1);
                e.then(r.handleResendCodeSuccess), e.catch(function() {
                    c.Notify.error(y._("There was a problem completing this request."))
                })
            }, r.handleTwoFactorSuccess = function(e) {
                switch (e.status) {
                    case f.LoginResponseStatus.OK:
                        r.state.currentStep === A.SECKEY_2FA && r.setState({
                            securityKeyState: f.SecurityKeyState.FOUND
                        });
                        var t = {
                            id: e.id,
                            email: e.email,
                            display_name: e.display_name,
                            locale: e.locale
                        };
                        r.handleLoginSuccess(t);
                        break;
                    case f.LoginResponseStatus.ERROR:
                        c.Notify.error(e.message);
                        break;
                    case f.LoginResponseStatus.REQUIRES_ROLE:
                    case f.LoginResponseStatus.EXPIRED:
                        r.setState({
                            localErrors: o.__assign({}, r.state.localErrors, {
                                email: {
                                    message_text: e.message
                                }
                            }),
                            currentStep: A.CREDENTIALS_OR_SSO
                        });
                        break;
                    case f.LoginResponseStatus.INVALID_CREDENTIALS:
                        r.setState({
                            localErrors: o.__assign({}, r.state.localErrors, {
                                password: {
                                    message_text: e.message
                                }
                            }),
                            currentStep: A.CREDENTIALS_OR_SSO
                        });
                        break;
                    default:
                        c.Notify.error(y._("There was a problem completing this request."))
                }
            }, r.twoFactorFormData = function() {
                return o.__assign({
                    remember_me: r.state.rememberMe,
                    cont: r.props.continuationUrl,
                    code: r.state.twoFactorCode,
                    trusted: r.state.trusted
                }, r.props.additionalData)
            }, r.submitTwoFactor = function() {
                r.setState({
                    isSubmitting: !0
                });
                var e = g.submitTwoFactorForm(r.props.type, r.twoFactorFormData());
                e.then(r.handleTwoFactorSuccess), e.catch(function(e) {
                    r.state.currentStep === A.SECKEY_2FA && e.u2f ? r.setState({
                        localErrors: o.__assign({}, r.state.localErrors, {
                            securityKey: e.u2f.message_text
                        }),
                        securityKeyState: f.SecurityKeyState.NOT_FOUND
                    }) : e.code ? r.setState({
                        localErrors: o.__assign({}, r.state.localErrors, {
                            twoFactor: e.code
                        })
                    }) : c.Notify.error(y._("There was a problem completing this request."))
                }), e.finally(function() {
                    r.setState({
                        isSubmitting: !1
                    })
                })
            }, r.onPhone2FASubmit = function(e) {
                e.preventDefault(), r.submitTwoFactor()
            }, r.onAuthenticator2FASubmit = function(e) {
                e.preventDefault(), r.submitTwoFactor()
            }, r.generateU2fRequest = function(e) {
                for (var t = JSON.parse(e), o = {}, r = 0, s = Object.keys(C.PROTOCOLS); r < s.length; r++) {
                    var a = s[r];
                    o[a] = t[a] && JSON.parse(t[a])
                }
                return o
            }, r.kickOffU2f = function(e) {
                return o.__awaiter(r, void 0, void 0, function() {
                    var t, r, s, a = this;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (t = this.generateU2fRequest(e), !C.canUseAuthenticator(t)) return [3, 5];
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, C.sign(t)];
                            case 2:
                                return r = o.sent(), this.state.currentStep === A.SECKEY_2FA && this.setState({
                                    twoFactorCode: JSON.stringify(r)
                                }, function() {
                                    return a.submitTwoFactor()
                                }), [3, 4];
                            case 3:
                                return s = o.sent(), this.state.currentStep === A.SECKEY_2FA && this.setState({
                                    securityKeyState: f.SecurityKeyState.NOT_FOUND
                                }), i.assert(!1, "U2F Error - " + s, {
                                    tags: ["react-login-form", "u2f"]
                                }), [3, 4];
                            case 4:
                                return [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })
            }, r.switch2FA = function() {
                i.assert(r.state.primaryTwoFactorType === f.TwoFactorType.SEC_KEY, "Unexpected two factor choice switch", {
                    tags: ["react-login-form"]
                });
                var e;
                r.state.secondaryTwoFactorType === f.TwoFactorType.SMS ? (e = A.PHONE_2FA, r.resendCode()) : e = A.AUTHENTICATOR_2FA, r.setState({
                    twoFactorCode: "",
                    primaryTwoFactorType: r.state.secondaryTwoFactorType,
                    secondaryTwoFactorType: void 0,
                    currentStep: e
                })
            }, r.onRetryU2f = function() {
                r.setState({
                    securityKeyState: f.SecurityKeyState.LOADING
                });
                var e = g.retryU2fAuthentication();
                e.then(r.kickOffU2f), e.catch(function() {
                    r.setState({
                        securityKeyState: f.SecurityKeyState.NOT_FOUND
                    }), c.Notify.error(y._("There was a problem completing this request."))
                })
            }, i.assert(t.canRedirect !== !1 || !!t.onLoginSuccess, "Need an on login success handler if we cannot redirect the user", {
                tags: ["react-login-form"]
            }), r.ssoChecker = new S.SsoStateChecker;
            var u = A.CREDENTIALS_OR_SSO,
                m = void 0,
                h = void 0,
                d = void 0;
            return t.twoFactorOnlyProps && (!t.twoFactorOnlyProps.u2fChallenge || t.additionalData && t.additionalData.is_backup || !C.canUseAuthenticator(r.generateU2fRequest(t.twoFactorOnlyProps.u2fChallenge)) ? t.twoFactorOnlyProps.lastTwoDigits ? (u = A.PHONE_2FA, m = f.TwoFactorType.SMS, d = t.twoFactorOnlyProps.lastTwoDigits) : (u = A.AUTHENTICATOR_2FA, m = f.TwoFactorType.AUTHENTICATOR) : (u = A.SECKEY_2FA, m = f.TwoFactorType.SEC_KEY, t.twoFactorOnlyProps.lastTwoDigits ? (h = f.TwoFactorType.SMS, d = t.twoFactorOnlyProps.lastTwoDigits) : h = f.TwoFactorType.AUTHENTICATOR)), r.state = {
                currentStep: u,
                email: t.emailProps && t.emailProps.initialValue || "",
                isSubmitting: !1,
                lastTwoDigits: d,
                localErrors: {},
                password: "",
                primaryTwoFactorType: m,
                secondaryTwoFactorType: h,
                rememberMe: t.rememberMeCheckboxProps && t.rememberMeCheckboxProps.checked || !1,
                securityKeyState: f.SecurityKeyState.LOADING,
                ssoState: f.SsoState.OFF,
                trusted: t.twoFactorTrustCheckboxProps && t.twoFactorTrustCheckboxProps.checked || !1,
                twoFactorCode: ""
            }, r
        }
        return o.__extends(t, e), t.prototype.handleLoginFormEvent = function(e, t) {
            this.props.onLoginFormEvent && this.props.onLoginFormEvent(e, t)
        }, t.prototype.componentDidMount = function() {
            this.props.twoFactorOnlyProps && this.props.twoFactorOnlyProps.u2fChallenge && this.state.currentStep === A.SECKEY_2FA && this.kickOffU2f(this.props.twoFactorOnlyProps.u2fChallenge)
        }, t.prototype.render = function() {
            var e;
            switch (this.state.currentStep) {
                case A.CREDENTIALS_OR_SSO:
                    var t = !["multi", "pairing", "cli_link", "cli_link_nonce"].includes(this.props.type);
                    e = s.default.createElement(_.LoginCredentialsForm, {
                        ref: this.setCredentialsFormComponent,
                        disabled: this.props.disabled || !1,
                        emailError: this.state.localErrors.email,
                        emailProps: this.props.emailProps || {},
                        emailValue: this.state.email,
                        forgotPasswordProps: this.props.forgotPasswordProps || {},
                        googleLoginError: this.state.localErrors.googleLogin,
                        googleLoginProps: this.props.googleLoginProps,
                        showAppleLogin: this.props.showAppleLogin || !1,
                        appleLoginError: this.state.localErrors.appleLogin,
                        appleLoginProps: this.props.appleLoginProps,
                        hideHelp: this.props.hideHelp || !1,
                        hideRememberMe: this.props.hideRememberMe || !1,
                        isSubmitting: this.state.isSubmitting,
                        loginButtonProps: this.props.loginButtonProps || {},
                        loginError: this.state.localErrors.login,
                        maestroStyle: this.props.maestroStyle || !1,
                        onGoogleLoginClick: this.onGoogleLoginClick,
                        onAppleLoginClick: this.onAppleLoginClick,
                        onInputChange: this.onInputChange,
                        onLoginClick: this.onLoginClick,
                        openLinksInNewTab: !!this.props.openLinksInNewTab,
                        onSsoChangeClick: this.onSsoChangeClick,
                        onSubmit: this.onCredentialsFormSubmit,
                        passwordError: this.state.localErrors.password,
                        passwordProps: this.props.passwordProps || {},
                        passwordValue: this.state.password,
                        rememberMeProps: this.props.rememberMeCheckboxProps || {},
                        rememberMeValue: this.state.rememberMe,
                        showNaviSiteLogin: !!this.props.showNaviSiteLogin,
                        ssoState: this.state.ssoState,
                        supportsCaptcha: t,
                        variant: this.props.variant || p.AuthFormVariant.STANDARD
                    });
                    break;
                case A.PHONE_2FA:
                    e = s.default.createElement(h.Phone2FAForm, {
                        continuationUrl: this.props.continuationUrl,
                        error: this.state.localErrors.twoFactor,
                        hideHelp: this.props.hideHelp || !1,
                        hideTrustCheckbox: this.props.hideRememberMe || !1,
                        inlineSubmit: void 0 === this.props.twoFactorSubmitButtonInline || this.props.twoFactorSubmitButtonInline,
                        lastTwoDigits: this.state.lastTwoDigits || "",
                        maestroStyle: this.props.maestroStyle || !1,
                        onInputChange: this.onInputChange,
                        onResendCodeClick: this.resendCode,
                        onSubmit: this.onPhone2FASubmit,
                        rememberMe: this.state.rememberMe,
                        trusted: this.state.trusted,
                        trustTooltipPosition: this.props.twoFactorTrustCheckboxProps && this.props.twoFactorTrustCheckboxProps.tooltipPosition,
                        value: this.state.twoFactorCode,
                        variant: this.props.variant || p.AuthFormVariant.STANDARD
                    });
                    break;
                case A.EMAIL_2FA:
                    e = s.default.createElement(m.Email2FAForm, {
                        email: this.state.email,
                        error: this.state.localErrors.twoFactor,
                        inlineSubmit: void 0 === this.props.twoFactorSubmitButtonInline || this.props.twoFactorSubmitButtonInline,
                        maestroStyle: this.props.maestroStyle || !1,
                        onInputChange: this.onInputChange,
                        onSubmit: this.onPhone2FASubmit,
                        value: this.state.twoFactorCode,
                        variant: this.props.variant || p.AuthFormVariant.STANDARD,
                        onResendCodeClick: this.resendCode
                    });
                    break;
                case A.AUTHENTICATOR_2FA:
                    e = s.default.createElement(u.Authenticator2FAForm, {
                        continuationUrl: this.props.continuationUrl,
                        error: this.state.localErrors.twoFactor,
                        hideHelp: this.props.hideHelp || !1,
                        hideTrustCheckbox: this.props.hideRememberMe || !1,
                        inlineSubmit: void 0 === this.props.twoFactorSubmitButtonInline || this.props.twoFactorSubmitButtonInline,
                        maestroStyle: this.props.maestroStyle || !1,
                        onInputChange: this.onInputChange,
                        onSubmit: this.onAuthenticator2FASubmit,
                        rememberMe: this.state.rememberMe,
                        trusted: this.state.trusted,
                        trustTooltipPosition: this.props.twoFactorTrustCheckboxProps && this.props.twoFactorTrustCheckboxProps.tooltipPosition,
                        value: this.state.twoFactorCode,
                        variant: this.props.variant || p.AuthFormVariant.STANDARD
                    });
                    break;
                case A.SECKEY_2FA:
                    e = s.default.createElement(d.SecKey2FAForm, {
                        error: this.state.localErrors.securityKey,
                        hideTrustCheckbox: this.props.hideRememberMe || !1,
                        maestroStyle: this.props.maestroStyle || !1,
                        onChange2FA: this.switch2FA,
                        onInputChange: this.onInputChange,
                        onRetry: this.onRetryU2f,
                        trusted: this.state.trusted,
                        trustTooltipPosition: this.props.twoFactorTrustCheckboxProps && this.props.twoFactorTrustCheckboxProps.tooltipPosition,
                        secondaryTwoFactorType: this.state.secondaryTwoFactorType,
                        securityKeyState: this.state.securityKeyState,
                        variant: this.props.variant || p.AuthFormVariant.STANDARD
                    })
            }
            var o = r.default("login-form-container", this.props.variant, this.props.className);
            return s.default.createElement("div", {
                className: o
            }, s.default.createElement("div", {
                className: "regular-login-forms"
            }, e))
        }, t
    })(s.default.Component);
    t.TestOnlyLoginFormComponent = v, t.LoginForm = w.requireCssWithComponent(v, ["/static/css/components/exp_cards-vfl7SGVTx.css", "/static/css/components/login_form-vflaxe1fJ.css", "/static/css/legacy_packages/components-vflWpppwv.css", "/static/css/login_or_register-vfl33XXu1.css", "/static/css/scooter/scooter-scoped-vflFpCY2P.css", "/static/css/spectrum/index.web-vflagwTbb.css", "/static/css/recaptcha_challenge-vflrcf67y.css", "/static/css/recaptcha_v2_challenge-vfl5GXpO2.css"])
});
//# sourceMappingURL=form.min.js-vfl-TVFXh.map