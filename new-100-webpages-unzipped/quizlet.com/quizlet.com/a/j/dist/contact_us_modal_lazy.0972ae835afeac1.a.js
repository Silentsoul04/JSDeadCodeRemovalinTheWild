(window.QJP = window.QJP || []).push([
    [39], {
        "/zmy": function(e, t, a) {
            "use strict";
            var n, r, s, i, o, l, c = a("VbXa"),
                u = a.n(c),
                p = a("q1tI"),
                d = a.n(p),
                m = a("KAy6"),
                E = a("JPcv"),
                h = a("S40T"),
                S = a("xNal"),
                g = a("o0o1"),
                _ = a.n(g),
                f = a("yXPU"),
                T = a.n(f),
                U = a("og3H"),
                R = a("4w2y"),
                b = a("9WHe"),
                A = ((n = {})[U.p.LOGGING_IN] = [2495419, 2444155, 2444154, 2844962], n[U.p.CREATING_MANAGING_ACCOUNT] = [2444155, 2495419, 2444154, 2844962], n[U.p.BUG_REPORT] = [2444154, 2444157, 2843414, 2839979, 2495419], n[U.p.GETTING_STARTED] = [2444083, 2444100, 2444087, 2444108], n[U.p.UPGRADE_PURCHASE_PAYMENT] = [2807911, 2858599, 2444085], n),
                C = ((l = {})[U.q.STUDENT] = ((r = {})[U.p.GETTING_STARTED] = A[U.p.GETTING_STARTED], r[U.p.ACCESSING_CLASS_SET] = [2839979, 2444142, 2444110, 2444112, 2444143], r[U.p.LOGGING_IN] = A[U.p.LOGGING_IN], r[U.p.CREATING_MANAGING_ACCOUNT] = A[U.p.CREATING_MANAGING_ACCOUNT], r[U.p.UPGRADE_PURCHASE_PAYMENT] = [2858599, 2444085, 2807911], r[U.p.BUG_REPORT] = A[U.p.BUG_REPORT], r), l[U.q.TEACHER] = ((s = {})[U.p.GETTING_STARTED] = [2444126, 2444127, 2444125, 2444083, 2444100], s[U.p.CREATING_CLASSES] = [2444129, 2444130, 2444131, 2444141, 2444151], s[U.p.GETTING_STUDENTS_SIGNED_UP] = [2444151, 2444141, 2444091, 2444128], s[U.p.TRACKING_STUDENT_ACTIVITY] = [2856264, 2444134, 2444126, 2444137, 2444135], s[U.p.LOGGING_IN] = A[U.p.LOGGING_IN], s[U.p.CREATING_MANAGING_ACCOUNT] = A[U.p.CREATING_MANAGING_ACCOUNT], s[U.p.UPGRADE_PURCHASE_PAYMENT] = [2444127, 2807911, 2444140, 2862895, 2616833], s[U.p.BUG_REPORT] = A[U.p.BUG_REPORT], s), l[U.q.PARENT] = ((i = {})[U.p.UPDATING_CHILD_EMAIL_ADDRESS] = [2444151, 2444146], i[U.p.DELETING_CHILD_ACCOUNT] = [2444151, 2444146], i[U.p.INFO_ABOUT_QUIZLET] = [2444083, 2444151, 2444091], i[U.p.UPGRADE_PURCHASE_PAYMENT] = A[U.p.UPGRADE_PURCHASE_PAYMENT], i[U.p.BUG_REPORT] = A[U.p.BUG_REPORT], i), l[U.q.OTHER] = ((o = {})[U.p.GETTING_STARTED] = A[U.p.GETTING_STARTED], o[U.p.UPGRADE_PURCHASE_PAYMENT] = A[U.p.UPGRADE_PURCHASE_PAYMENT], o[U.p.BUG_REPORT] = A[U.p.BUG_REPORT], o), l),
                I = function() {
                    function e(e) {
                        this.locale = e, this.allArticlesForLocale = Object(E.Map)()
                    }
                    var t = e.prototype;
                    return t.loadAllPotentiallySuggestedArticles = function() {
                        var e = T()(_.a.mark(function e() {
                            var t, a, n, r;
                            return _.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this._getAllPotentiallySuggestedArticleIds(), e.prev = 1, e.next = 4, R.a.getByIds(t);
                                    case 4:
                                        a = e.sent, n = this._filterArticlesForLocale(a), r = Object(E.Map)(), this.allArticlesForLocale = r.withMutations(function(e) {
                                            n.map(function(t) {
                                                return e.set(t.get("id"), t)
                                            })
                                        }), e.next = 14;
                                        break;
                                    case 10:
                                        throw e.prev = 10, e.t0 = e.catch(1), b.a.error("Failed to load article suggestions for feedback flow", {
                                            articleIds: t,
                                            error: e.t0
                                        }), e.t0;
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [1, 10]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), t.getSuggestions = function(e, t) {
                        var a = this,
                            n = C[e] && C[e][t];
                        return n ? n.map(function(e) {
                            return a.allArticlesForLocale.get(e)
                        }).filter(Boolean) : []
                    }, t._getAllPotentiallySuggestedArticleIds = function() {
                        return Object(E.Set)().withMutations(function(e) {
                            Object.keys(C).forEach(function(t) {
                                Object.keys(C[t]).forEach(function(a) {
                                    e.union(Object(E.Set)(C[t][a]))
                                })
                            })
                        }).toArray()
                    }, t._filterArticlesForLocale = function(e) {
                        var t = this;
                        return e ? e.filter(function(e) {
                            return e.get("quizletLocale") === t.locale
                        }) : []
                    }, e
                }(),
                G = a("t1Ez"),
                N = a("JxFz"),
                P = a("Pxp3"),
                O = a("FFEN"),
                y = a("/i8B"),
                k = a("vlgG"),
                v = a("a08m"),
                M = a("47yS"),
                x = a("zt8I"),
                w = a("wcmh"),
                D = a("OpqZ"),
                L = a("V0yB"),
                F = a("XB5O");

            function H(e) {
                return Object.keys(F).filter(function(t) {
                    return F[t] === e
                })[0]
            }
            var B = a("T3U7"),
                j = a("ei4Y"),
                q = a("Ri2w"),
                z = a("dCi4"),
                V = a("niBS");
            a.d(t, "a", function() {
                return $
            });
            var Y = a("bBvF").default,
                Q = H(0),
                W = 1,
                J = 2,
                X = 3,
                K = 4,
                Z = W,
                $ = function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).state = {
                            email: "",
                            feedback: "",
                            isSubmitting: !1,
                            resultMessage: "",
                            verificationCaptcha: "",
                            currentStep: W,
                            isContactFormVisible: !1,
                            issue: "",
                            role: "",
                            suggestionsLoaded: !1
                        }, t.handleSuggestionsLoaded = function() {
                            t.setState({
                                suggestionsLoaded: !0
                            })
                        }, t.handleSuggestionLoadingFailure = function(e) {
                            Object(B.a)("feedback_modal_suggestion_loading_failure", {
                                error: e
                            }), t.setState({
                                suggestionsLoaded: !0
                            })
                        }, t.handleChangeTextarea = function(e) {
                            t.setState({
                                feedback: e.currentTarget.value
                            })
                        }, t.handleTextareaRef = function(e) {
                            t.textareaRef = e
                        }, t.handleChangeEmail = function(e) {
                            t.setState({
                                email: e.currentTarget.value
                            })
                        }, t.handleChangeVerification = function(e) {
                            t.setState({
                                verificationCaptcha: e.currentTarget.value
                            })
                        }, t.handleUpdateRole = function(e) {
                            var a = e.currentTarget.value;
                            t.setState({
                                role: a,
                                issue: ""
                            })
                        }, t.handleUpdateIssue = function(e) {
                            var a = e.currentTarget.value;
                            t.setState({
                                issue: a
                            })
                        }, t.handleErrorResponse = function(e) {
                            t.setState({
                                isSubmitting: !1,
                                resultMessage: e === h.Http.TooManyRequests ? Y("en-US", "Sorry, we have received too many requests from your IP address recently. Please wait a few moments and try again.") : Y("en-US", "Sorry, we had a problem receiving your request. Please try again.")
                            })
                        }, t.handleSubmit = function(e) {
                            e.preventDefault();
                            var a = [];
                            if (t.isFeedbackBlank() ? (a.push(Y("en-US", "Please enter the message you'd like to send us.")), t.logValidationError("feedback_blank"), t.textareaRef.focus()) : t.isFeedbackTooShort() && (a.push(Y("en-US", "That message is pretty short! Please include enough information to help us take appropriate action.")), t.logValidationError("feedback_too_short"), t.textareaRef.focus()), t.isEmailInvalid() && (a.push(Y("en-US", "Please provide a valid email address.")), t.logValidationError("" === t.state.email ? "email_blank" : "email_invalid")), t.isCaptchaInvalid() && (a.push(Y("en-US", "Please correctly answer the verification question.")), t.logValidationError("" === t.state.verificationCaptcha ? "captcha_blank" : "captcha_invalid")), a.length) alert(a.join("\n"));
                            else {
                                var n = t.state.issue === U.p.BUG_REPORT,
                                    r = {
                                        email: t.state.email,
                                        feedback: t.state.feedback,
                                        minorCategory: t.hasMinorCategory() ? H(t.props.feedbackMinorCategoryId) : Q,
                                        screenSize: Object(z.b)() + "x" + Object(z.a)() + " (" + screen.width + "x" + screen.height + ") -- Font scaling factor: " + Object(V.c)().toFixed(3),
                                        vfy: 4,
                                        role: t.state.role,
                                        issue: t.state.issue
                                    };
                                t.props.referer && (r.real_referer = t.props.referer), t.setState({
                                    currentStep: K,
                                    isSubmitting: !0
                                }), Object(q.f)("/feedback", r).then(function(e, a) {
                                    a ? t.handleErrorResponse(a.code) : e ? e.success ? t.setState({
                                        isSubmitting: !1,
                                        resultMessage: Y("en-US", n ? "Thanks! Your message has been sent and will be reviewed by our team." : "Thanks for your message! We'll respond as soon as we can.")
                                    }) : t.handleErrorResponse(e.http_code) : t.handleErrorResponse(null)
                                }), Object(B.a)("feedback_modal_submit", {
                                    didSeeSuggestions: t.didSeeSuggestions,
                                    role: t.state.role,
                                    issue: t.state.issue,
                                    locale: t.getLocale()
                                })
                            }
                        }, t.handleShowMessageArea = function() {
                            t.setState({
                                isContactFormVisible: !0
                            })
                        }, t.handleSubmitRole = function() {
                            Object(B.a)("feedback_modal_role_submitted", {
                                role: t.state.role,
                                locale: t.getLocale()
                            }), t.setState({
                                currentStep: J
                            })
                        }, t.handleGoBack = function() {
                            t.state.currentStep > Z && t.setState(function(e) {
                                return {
                                    currentStep: e.currentStep - 1
                                }
                            })
                        }, t.handleSubmitIssue = function() {
                            Object(B.a)("feedback_modal_issue_submitted", {
                                role: t.state.role,
                                issue: t.state.issue,
                                locale: t.getLocale()
                            }), t.setState({
                                currentStep: X
                            })
                        }, t.shouldDisableSubmitRole = function() {
                            return "" === t.state.role
                        }, t.shouldDisableSubmitIssue = function() {
                            return "" === t.state.issue
                        }, t.shouldDisableSubmitFeedback = function() {
                            return t.isFeedbackBlank()
                        }, t
                    }
                    u()(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        this.didSeeSuggestions = !1, this.allArticlesAvailableInCurrentLocale = Object(E.Map)(), this.locale = "en-us", this.loggedValidationErrors = Object(E.Set)(), this.staticArticleSuggestions = new I(this.locale), this.staticArticleSuggestions.loadAllPotentiallySuggestedArticles().then(this.handleSuggestionsLoaded).catch(this.handleSuggestionLoadingFailure)
                    }, a.getLocale = function() {
                        return this.locale
                    }, a.getIssueOptions = function() {
                        switch (this.state.role) {
                            case U.q.STUDENT:
                                return [{
                                    issue: U.p.GETTING_STARTED,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Getting started", {})
                                    })
                                }, {
                                    issue: U.p.ACCESSING_CLASS_SET,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Accessing a class or set", {})
                                    })
                                }, {
                                    issue: U.p.LOGGING_IN,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Logging in", {})
                                    })
                                }, {
                                    issue: U.p.CREATING_MANAGING_ACCOUNT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Creating or managing my account", {})
                                    })
                                }, {
                                    issue: U.p.SUGGESTION_FEATURE_REQUEST,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Sharing a suggestion or feature request", {})
                                    })
                                }, {
                                    issue: U.p.UPGRADE_PURCHASE_PAYMENT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Purchasing or managing an upgrade", {})
                                    })
                                }, {
                                    issue: U.p.BUG_REPORT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Reporting a system issue or bug", {})
                                    })
                                }, {
                                    issue: U.p.REPORT_INAPPROPRIATE,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Reporting inappropriate content", {})
                                    })
                                }];
                            case U.q.TEACHER:
                                return [{
                                    issue: U.p.GETTING_STARTED,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Getting started", {})
                                    })
                                }, {
                                    issue: U.p.CREATING_CLASSES,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Creating classes", {})
                                    })
                                }, {
                                    issue: U.p.GETTING_STUDENTS_SIGNED_UP,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Getting my students signed up", {})
                                    })
                                }, {
                                    issue: U.p.TRACKING_STUDENT_ACTIVITY,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Viewing student activity on Quizlet", {})
                                    })
                                }, {
                                    issue: U.p.LOGGING_IN,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Logging in", {})
                                    })
                                }, {
                                    issue: U.p.CREATING_MANAGING_ACCOUNT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Creating or managing my account", {})
                                    })
                                }, {
                                    issue: U.p.SUGGESTION_FEATURE_REQUEST,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Sharing a suggestion or feature request", {})
                                    })
                                }, {
                                    issue: U.p.UPGRADE_PURCHASE_PAYMENT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Purchasing or managing an upgrade", {})
                                    })
                                }, {
                                    issue: U.p.BUG_REPORT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Reporting a system issue or bug", {})
                                    })
                                }, {
                                    issue: U.p.REPORT_INAPPROPRIATE,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Reporting inappropriate content", {})
                                    })
                                }];
                            case U.q.PARENT:
                                return [{
                                    issue: U.p.UPDATING_CHILD_EMAIL_ADDRESS,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Updating my child's email address", {})
                                    })
                                }, {
                                    issue: U.p.DELETING_CHILD_ACCOUNT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Deleting my child's account", {})
                                    })
                                }, {
                                    issue: U.p.INFO_ABOUT_QUIZLET,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Obtaining information about Quizlet", {})
                                    })
                                }, {
                                    issue: U.p.UPGRADE_PURCHASE_PAYMENT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Purchasing or managing an upgrade", {})
                                    })
                                }, {
                                    issue: U.p.BUG_REPORT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Reporting a system issue or bug", {})
                                    })
                                }, {
                                    issue: U.p.REPORT_INAPPROPRIATE,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Reporting inappropriate content", {})
                                    })
                                }];
                            default:
                                return [{
                                    issue: U.p.GETTING_STARTED,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Getting started", {})
                                    })
                                }, {
                                    issue: U.p.UNSUBSCRIBE,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Unsubscribing from Quizlet emails", {})
                                    })
                                }, {
                                    issue: U.p.REPORT_INAPPROPRIATE,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Reporting inappropriate content", {})
                                    })
                                }, {
                                    issue: U.p.PARTNERSHIP_INQUIRY,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Inquiring regarding a partnership", {})
                                    })
                                }, {
                                    issue: U.p.UPGRADE_PURCHASE_PAYMENT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Purchasing or managing an upgrade", {})
                                    })
                                }, {
                                    issue: U.p.BUG_REPORT,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Reporting a system issue or bug", {})
                                    })
                                }, {
                                    issue: U.p.SUGGESTION_FEATURE_REQUEST,
                                    text: d.a.createElement(G.a, {
                                        _precomputed: Y("en-US", "Sharing a suggestion or feature request", {})
                                    })
                                }]
                        }
                    }, a.getSuggestions = function() {
                        return this.staticArticleSuggestions.getSuggestions(this.state.role, this.state.issue)
                    }, a.getSuggestionClickHandler = function(e) {
                        var t = this;
                        return function() {
                            Object(B.a)("feedback_modal_click_suggestion", {
                                role: t.state.role,
                                issue: t.state.issue,
                                locale: t.getLocale(),
                                url: e
                            })
                        }
                    }, a.renderUnderageMessage = function() {
                        var e = Object(m.renderToStaticMarkup)(d.a.createElement(v.a, {
                            to: "mailto:support@quizlet.com"
                        }, "support@quizlet.com"));
                        return d.a.createElement(x.a, null, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Please have your parent write to us at {link}", {
                                link: e
                            })
                        }))
                    }, a.renderEmailConfirmationMessage = function() {
                        return d.a.createElement(x.a, null, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Your signup email confirmation may take several hours to reach you or it may be in your spam folder. Please give it time before contacting us. Thanks!", {})
                        }))
                    }, a.renderDescription = function() {
                        return d.a.createElement(x.a, null, this.props.user ? d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "You can find more resources in our {linkHelpCenter}.", {
                                linkHelpCenter: Object(m.renderToStaticMarkup)(d.a.createElement(v.a, {
                                    to: "/help"
                                }, d.a.createElement(G.a, {
                                    _precomputed: Y("en-US", "Help Center", {})
                                })))
                            })
                        }) : d.a.createElement(G.a, {
                            _precomputed: Y("en-US", " You can also find more resources in our {linkHelpCenter}.", {
                                linkHelpCenter: Object(m.renderToStaticMarkup)(d.a.createElement(v.a, {
                                    to: "/help"
                                }, d.a.createElement(G.a, {
                                    _precomputed: Y("en-US", "Help Center", {})
                                })))
                            })
                        }))
                    }, a.renderForm = function() {
                        var e = Object(m.renderToStaticMarkup)(d.a.createElement(v.a, {
                            newTab: !this.props.isMobileWebView,
                            to: "/privacy"
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Privacy Policy", {})
                        })));
                        return d.a.createElement("form", {
                            onSubmit: this.handleSubmit
                        }, d.a.createElement(P.a, {
                            className: "ContactUsFlow-formSpacer"
                        }, d.a.createElement(y.a, null)), S.c.read(U.m.SIGNUP__IS_NEW_USER) ? this.renderEmailConfirmationMessage() : null, d.a.createElement(P.a, null, d.a.createElement(L.a, {
                            autoFocus: !0,
                            label: this.props.user ? null : d.a.createElement(G.a, {
                                _precomputed: Y("en-US", "HOW CAN WE HELP?", {})
                            }),
                            name: "feedback",
                            onChange: this.handleChangeTextarea,
                            placeholder: Y("en-US", "Please include as many details as possible."),
                            ref: this.handleTextareaRef,
                            rows: 3,
                            value: this.state.feedback
                        }), this.props.user && this.props.user.email ? null : d.a.createElement(k.a, {
                            label: d.a.createElement(G.a, {
                                _precomputed: Y("en-US", "WHAT IS YOUR EMAIL?", {})
                            }),
                            name: "email",
                            onChange: this.handleChangeEmail,
                            placeholder: Y("en-US", "example@quizlet.com"),
                            type: "email",
                            value: this.state.email
                        }), this.props.user ? null : d.a.createElement(k.a, {
                            label: d.a.createElement(G.a, {
                                _precomputed: Y("en-US", "WHAT IS 1 + 3?", {})
                            }),
                            name: "vfy",
                            onChange: this.handleChangeVerification,
                            value: this.state.verificationCaptcha
                        })), d.a.createElement(P.a, null, d.a.createElement(N.a, {
                            disabled: this.shouldDisableSubmitFeedback(),
                            type: "submit",
                            width: "fill"
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Send Message", {})
                        }))), d.a.createElement("div", {
                            className: "ContactUsFlow-disclaimer"
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Your submission and other information about your account will be sent to Quizlet to help us understand your issue. For more details about what we receive, see our {privacyPolicyLink}.", {
                                privacyPolicyLink: e
                            })
                        })))
                    }, a.renderResult = function() {
                        return this.state.isSubmitting ? d.a.createElement(M.a, {
                            size: "large"
                        }) : d.a.createElement(x.a, null, this.state.resultMessage)
                    }, a.renderRoleSelection = function() {
                        return d.a.createElement("div", null, d.a.createElement(O.a, {
                            size: 5
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Tell us how you use Quizlet", {})
                        })), d.a.createElement(P.a, null, this.renderRoleOptions(), d.a.createElement(P.a, {
                            className: "ContactUsFlow-buttonSection"
                        }, d.a.createElement(N.a, {
                            disabled: this.shouldDisableSubmitRole(),
                            onClick: this.handleSubmitRole
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Continue", {})
                        })))))
                    }, a.renderRoleOptions = function() {
                        var e = this;
                        return [{
                            role: U.q.STUDENT,
                            text: d.a.createElement(G.a, {
                                _precomputed: Y("en-US", "I use Quizlet to study", {})
                            })
                        }, {
                            role: U.q.TEACHER,
                            text: d.a.createElement(G.a, {
                                _precomputed: Y("en-US", "I am a teacher using Quizlet with my students", {})
                            })
                        }, {
                            role: U.q.PARENT,
                            text: d.a.createElement(G.a, {
                                _precomputed: Y("en-US", "I am a parent whose child uses Quizlet", {})
                            })
                        }, {
                            role: U.q.OTHER,
                            text: d.a.createElement(G.a, {
                                _precomputed: Y("en-US", "None of the above", {})
                            })
                        }].map(function(t) {
                            return d.a.createElement(D.a, {
                                key: t.role
                            }, d.a.createElement(w.a, {
                                checked: t.role === e.state.role,
                                label: t.text,
                                name: "role",
                                onChange: e.handleUpdateRole,
                                value: t.role
                            }))
                        })
                    }, a.renderIssueOptions = function() {
                        var e = this;
                        return this.getIssueOptions().map(function(t) {
                            return d.a.createElement(D.a, {
                                key: t.issue
                            }, d.a.createElement(w.a, {
                                checked: t.issue === e.state.issue,
                                label: t.text,
                                name: "issue",
                                onChange: e.handleUpdateIssue,
                                value: t.issue
                            }))
                        })
                    }, a.renderIssueSelection = function() {
                        return d.a.createElement("div", null, d.a.createElement(O.a, {
                            size: 5
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Select a category", {})
                        })), d.a.createElement(P.a, null, this.renderIssueOptions(), d.a.createElement(P.a, {
                            className: "ContactUsFlow-buttonSection"
                        }, d.a.createElement(v.a, {
                            onClick: this.handleGoBack
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Go back", {})
                        })), d.a.createElement(N.a, {
                            disabled: this.shouldDisableSubmitIssue(),
                            onClick: this.handleSubmitIssue
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Continue", {})
                        })))))
                    }, a.renderReportInappropriateContentMessage = function() {
                        return d.a.createElement(P.a, null, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "To report inappropriate content, please go to the study set, class or user profile you want to report, then log into your account and look for the option to report it from there.", {})
                        }))
                    }, a.renderPostIssueSelection = function() {
                        var e = this;
                        if (this.state.issue === U.p.REPORT_INAPPROPRIATE) return this.renderReportInappropriateContentMessage();
                        if (!this.state.suggestionsLoaded) return d.a.createElement(M.a, null);
                        var t = this.getSuggestions(),
                            a = t && t.length > 0,
                            n = this.state.isContactFormVisible;
                        return a ? this.didSeeSuggestions = !0 : (Object(B.a)("feedback_modal_no_suggestions", {
                            role: this.state.role,
                            issue: this.state.issue,
                            locale: this.getLocale()
                        }), n = !0), d.a.createElement("div", null, a ? d.a.createElement(P.a, null, d.a.createElement(O.a, {
                            size: 5
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Take a look at these FAQs", {})
                        })), t.map(function(t, a) {
                            return d.a.createElement(N.a, {
                                key: a,
                                linkTo: t.get("_webUrl"),
                                linkToNewTab: !0,
                                onClick: e.getSuggestionClickHandler(t.get("_webUrl")),
                                variant: "suggestion",
                                width: "fill"
                            }, t.get("subject"))
                        })) : d.a.createElement(O.a, {
                            size: 5
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Share your question or comment below", {})
                        })), this.props.isHelpCenter ? null : this.renderDescription(), n ? this.renderForm() : this.renderOptionToShowForm())
                    }, a.renderOptionToShowForm = function() {
                        return d.a.createElement(P.a, null, d.a.createElement("p", null, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Still have a question?", {})
                        }), " ", d.a.createElement(v.a, {
                            onClick: this.handleShowMessageArea
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Send us a message", {})
                        }))), d.a.createElement(P.a, {
                            className: "ContactUsFlow-buttonSection"
                        }, d.a.createElement(v.a, {
                            onClick: this.handleGoBack
                        }, d.a.createElement(G.a, {
                            _precomputed: Y("en-US", "Go back", {})
                        }))))
                    }, a.renderCurrentStep = function() {
                        switch (this.state.currentStep) {
                            case W:
                                return this.renderRoleSelection();
                            case J:
                                return this.renderIssueSelection();
                            case X:
                                return this.renderPostIssueSelection();
                            default:
                                return this.renderResult()
                        }
                    }, a.render = function() {
                        return d.a.createElement("div", null, this.props.user && this.props.user._isUnderAge ? this.renderUnderageMessage() : this.renderCurrentStep())
                    }, a.isFeedbackBlank = function() {
                        return "" === this.state.feedback
                    }, a.isFeedbackTooShort = function() {
                        return !this.state.feedback || this.state.feedback.length < 3
                    }, a.isCaptchaInvalid = function() {
                        return !this.props.user && "4" !== this.state.verificationCaptcha
                    }, a.isEmailInvalid = function() {
                        return !this.props.user && (!this.state.email || this.state.email.length < 3 || this.state.email.indexOf("@") < 1)
                    }, a.hasMinorCategory = function() {
                        return -1 !== this.props.feedbackMinorCategoryId && Object(j.a)(F).indexOf(this.props.feedbackMinorCategoryId) > -1
                    }, a.logValidationError = function(e) {
                        this.loggedValidationErrors.contains(e) || (Object(B.a)("feedback_modal_validation_error", {
                            errorType: e,
                            role: this.state.role,
                            issue: this.state.issue,
                            locale: this.getLocale()
                        }), this.loggedValidationErrors.add(e))
                    }, t
                }(d.a.Component);
            $.defaultProps = {
                isHelpCenter: !1,
                isMobileWebView: !1,
                feedbackMinorCategoryId: -1,
                referer: ""
            }
        },
        "4w2y": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return s
            });
            var n = a("VbXa"),
                r = a.n(n),
                s = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return r()(t, e), t._extractModelsFromResponses = function(t) {
                        return t.body.responses = this._filterResponses(t.body.responses), e._extractModelsFromResponses.call(this, t)
                    }, t._filterResponses = function(e) {
                        return e.filter(function(e) {
                            return !e.error
                        })
                    }, t
                }(a("RVJv").a);
            s.CAN_BE_SEARCHED = !0, s.MODEL_NAME = "helpArticle", s.URL_BASE = "help-articles"
        },
        "6xDS": function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", function() {
                return d
            });
            var n = a("VbXa"),
                r = a.n(n),
                s = a("q1tI"),
                i = a.n(s),
                o = a("/zmy"),
                l = a("t1Ez"),
                c = a("dxfC"),
                u = a("T3U7"),
                p = a("bBvF").default,
                d = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r()(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        this.props.isOpen && Object(u.a)("open_feedback_modal", {
                            version: 2
                        })
                    }, a.componentDidUpdate = function(e) {
                        !e.isOpen && this.props.isOpen && Object(u.a)("open_feedback_modal", {
                            version: 2
                        })
                    }, a.render = function() {
                        return i.a.createElement(c.a, {
                            headerContent: i.a.createElement(l.a, {
                                _precomputed: p("en-US", "How can we help?", {})
                            }),
                            isOpen: this.props.isOpen,
                            onClose: this.props.onClose
                        }, i.a.createElement(o.a, {
                            feedbackMinorCategoryId: this.props.feedbackMinorCategoryId,
                            isHelpCenter: this.props.isHelpCenter,
                            referer: this.props.referer,
                            user: this.props.user
                        }))
                    }, t
                }(s.PureComponent)
        },
        XB5O: function(e) {
            e.exports = JSON.parse('{"Uncategorized":0,"Bug Report":1,"Question / Need Help":2,"Other Comment / Feedback":3,"Suggestion":4,"Just Saying Thanks":5,"iPhone":6,"Flashcards":7,"android":8,"Setpage":9,"Flashcards - Flip":10,"Flashcards - Flow":11,"Teacher View":12,"Voice Recording":13,"Create Set":14,"Gravity":15,"Live Game":16,"Test Mode":17,"Cards":18,"Learn":19,"Spell":20,"Match":21,"Learning Assistant":22,"OCR":23,"Search":24,"Create Set Redesign":25,"Dashboard Redesign":26,"Diagrams":27,"New Learn Web":28,"Premium content":29}')
        },
        ei4Y: function(e, t, a) {
            "use strict";

            function n(e) {
                return Object.keys(e).map(function(t) {
                    return e[t]
                })
            }
            a.d(t, "a", function() {
                return n
            })
        }
    }
]);
//# sourceMappingURL=contact_us_modal_lazy.0972ae835afeac1.a.js.map