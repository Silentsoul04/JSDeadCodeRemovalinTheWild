(window.QJP = window.QJP || []).push([
    [55], {
        "/yDZ": function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            t.PUSH = "PUSH", t.REPLACE = "REPLACE", t.POP = "POP"
        },
        "47uU": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var r = n("pVnL"),
                a = n.n(r),
                o = n("VbXa"),
                i = n.n(o),
                s = n("q1tI"),
                c = n.n(s),
                l = n("JxFz"),
                u = n("Pxp3"),
                d = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        return c.a.createElement(u.a, {
                            className: "UpsellModalCtaButton"
                        }, c.a.createElement(l.a, a()({
                            hero: !0
                        }, this.props)))
                    }, t
                }(c.a.Component)
        },
        "5nSj": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("VbXa"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return a()(t, e), t.prototype.render = function() {
                        return i.a.createElement("s", {
                            className: "UIStrikethrough"
                        }, this.props.children)
                    }, t
                }(i.a.PureComponent)
        },
        "78K5": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("q1tI"),
                a = n.n(r),
                o = n("DGXf"),
                i = n("PqcE"),
                s = n("bBvF").default;

            function c(e) {
                var t = e.label,
                    n = e.facebookLoginUrl,
                    r = e.variant,
                    s = e.onClick,
                    c = e.title;
                return a.a.createElement(i.a, {
                    icon: a.a.createElement(o.a, null),
                    label: t,
                    linkTo: n,
                    onClick: s,
                    title: c,
                    variant: r
                })
            }
            c.defaultProps = {
                label: s("en-US", "Log in with Facebook")
            }
        },
        "8U9d": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.default = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = n.selectLocationState,
                    s = void 0 === i ? o : i,
                    c = n.adjustUrlOnReplay,
                    l = void 0 === c || c;
                if (void 0 === s(t.getState())) throw new Error("Expected the routing state to be available either as `state.routing` or as the custom expression you can specify as `selectLocationState` in the `syncHistoryWithStore()` options. Ensure you have added the `routerReducer` to your store's reducers via `combineReducers` or whatever method you use to isolate your reducers.");
                var u = void 0,
                    d = void 0,
                    p = void 0,
                    h = void 0,
                    m = void 0,
                    f = function(e) {
                        var n = s(t.getState());
                        return n.locationBeforeTransitions || (e ? u : void 0)
                    };
                if (u = f(), l) {
                    var g = function() {
                        var t = f(!0);
                        m !== t && u !== t && (d = !0, m = t, e.transitionTo(r({}, t, {
                            action: "PUSH"
                        })), d = !1)
                    };
                    p = t.subscribe(g), g()
                }
                var v = function(e) {
                    d || (m = e, !u && (u = e, f()) || t.dispatch({
                        type: a.LOCATION_CHANGE,
                        payload: e
                    }))
                };
                h = e.listen(v), e.getCurrentLocation && v(e.getCurrentLocation());
                return r({}, e, {
                    listen: function(n) {
                        var r = f(!0),
                            a = !1,
                            o = t.subscribe(function() {
                                var e = f(!0);
                                e !== r && (r = e, a || n(r))
                            });
                        return e.getCurrentLocation || n(r),
                            function() {
                                a = !0, o()
                            }
                    },
                    unsubscribe: function() {
                        l && p(), h()
                    }
                })
            };
            var a = n("dan0"),
                o = function(e) {
                    return e.routing
                }
        },
        "932g": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            });
            var r = n("VbXa"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = n("nXOR"),
                c = "m",
                l = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return a()(t, e), t.prototype.render = function() {
                        return i.a.createElement(s.a, {
                            above: this.props.above ? c : void 0,
                            below: this.props.above ? void 0 : c
                        }, this.props.children)
                    }, t
                }(o.PureComponent)
        },
        A00f: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r, a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = n("cr+I"),
                i = n("Yqds"),
                s = (r = i) && r.__esModule ? r : {
                    default: r
                },
                c = n("mHnE"),
                l = n("ZR02");
            var u = function(e) {
                    return (0, o.stringify)(e).replace(/%20/g, "+")
                },
                d = o.parse;
            t.default = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e(t),
                        r = t.stringifyQuery,
                        o = t.parseQueryString;
                    "function" != typeof r && (r = u), "function" != typeof o && (o = d);
                    var i = function(e) {
                            return e ? (null == e.query && (e.query = o(e.search.substring(1))), e) : e
                        },
                        p = function(e, t) {
                            if (null == t) return e;
                            var n = "string" == typeof e ? (0, l.parsePath)(e) : e,
                                o = r(t);
                            return a({}, n, {
                                search: o ? "?" + o : ""
                            })
                        };
                    return a({}, n, {
                        getCurrentLocation: function() {
                            return i(n.getCurrentLocation())
                        },
                        listenBefore: function(e) {
                            return n.listenBefore(function(t, n) {
                                return (0, s.default)(e, i(t), n)
                            })
                        },
                        listen: function(e) {
                            return n.listen(function(t) {
                                return e(i(t))
                            })
                        },
                        push: function(e) {
                            return n.push(p(e, e.query))
                        },
                        replace: function(e) {
                            return n.replace(p(e, e.query))
                        },
                        createPath: function(e) {
                            return n.createPath(p(e, e.query))
                        },
                        createHref: function(e) {
                            return n.createHref(p(e, e.query))
                        },
                        createLocation: function(e) {
                            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                            var o = n.createLocation.apply(n, [p(e, e.query)].concat(r));
                            return e.query && (o.query = (0, c.createQuery)(e.query)), i(o)
                        }
                    })
                }
            }
        },
        Ad4u: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            t.addEventListener = function(e, t, n) {
                return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
            }, t.removeEventListener = function(e, t, n) {
                return e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
            }, t.supportsHistory = function() {
                var e = window.navigator.userAgent;
                return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && (window.history && "pushState" in window.history)
            }, t.supportsGoWithoutReloadUsingHash = function() {
                return -1 === window.navigator.userAgent.indexOf("Firefox")
            }, t.supportsPopstateOnHashchange = function() {
                return -1 === window.navigator.userAgent.indexOf("Trident")
            }, t.isExtraneousPopstateEvent = function(e) {
                return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            }
        },
        BX20: function(e, t, n) {
            "use strict";
            var r = n("pVnL"),
                a = n.n(r),
                o = n("VbXa"),
                i = n.n(o),
                s = n("o0o1"),
                c = n.n(s),
                l = n("yXPU"),
                u = n.n(l),
                d = n("TSYQ"),
                p = n.n(d),
                h = n("q1tI"),
                m = n.n(h),
                f = n("KAy6"),
                g = n("KX5j"),
                v = n("T3U7"),
                C = n("zK28"),
                E = n("YU+Q"),
                y = n("t1Ez"),
                S = n("nXOR"),
                b = n("Vd5f"),
                _ = n("S41V"),
                k = n("Pxp3"),
                O = n("FFEN"),
                P = n("/i8B"),
                w = n("vlgG"),
                A = n("a08m"),
                U = n("E/Xc"),
                I = n("DLQF"),
                M = n("OpqZ"),
                T = n("5nSj"),
                L = n("su65"),
                N = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.getCardClass = function() {
                        switch (this.props.creditCardType) {
                            case "American Express":
                                return "amex";
                            case "Discover":
                                return "discover";
                            case "MasterCard":
                                return "mastercard";
                            case "Visa":
                                return "visa";
                            default:
                                return "unknown"
                        }
                    }, n.render = function() {
                        var e = this.getCardClass(),
                            t = p()("CheckoutCreditCardLogo", "CheckoutCreditCardLogo--" + e);
                        return m.a.createElement("span", {
                            className: t
                        })
                    }, t
                }(m.a.PureComponent),
                D = n("TtcH"),
                F = n("QLaP"),
                R = n.n(F),
                j = n("Ri2w"),
                H = n("EFuM"),
                B = n("ZKm7"),
                x = n("s52C"),
                W = n("bBvF").default,
                V = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.renderCardByline = function() {
                        return m.a.createElement("div", {
                            className: "CheckoutItemPreview-cardBylineWrapper"
                        }, m.a.createElement(B.a, null, this.props.numSets ? this.renderSetCount() : null, this.props.numTerms ? this.renderTermCount() : null, this.props.numMcqs ? this.renderMcqCount() : null, this.renderCreatorLink()))
                    }, n.renderCreatorLink = function() {
                        var e = this.props.creator;
                        return m.a.createElement("div", {
                            className: "CheckoutItemPreview-cardBylineCreator"
                        }, m.a.createElement(x.a, {
                            badge: e.isVerified,
                            highlightQuery: this.props.highlightQuery,
                            user: e
                        }))
                    }, n.renderMcqCount = function() {
                        var e = this.props.numMcqs;
                        return R()(e, "numMcqs should exist at this point."), m.a.createElement("span", {
                            className: "CheckoutItemPreview-cardBylineItemsCount"
                        }, m.a.createElement(y.a, {
                            _precomputed: W("en-US", "{mcqCount, plural, one {1 practice question} other {# practice questions}}", {
                                mcqCount: e
                            })
                        }))
                    }, n.renderSetCount = function() {
                        var e = this.props.numSets;
                        return R()(e, "numSets should exist at this point."), m.a.createElement("span", {
                            className: "CheckoutItemPreview-cardBylineItemsCount"
                        }, m.a.createElement(y.a, {
                            _precomputed: W("en-US", "{setCount, plural, one {1 set} other {# sets}}", {
                                setCount: e
                            })
                        }))
                    }, n.renderTermCount = function() {
                        var e = this.props.numTerms;
                        return R()(e, "numTerms should exist at this point."), m.a.createElement("span", {
                            className: "CheckoutItemPreview-cardBylineItemsCount"
                        }, m.a.createElement(y.a, {
                            _precomputed: W("en-US", "{termCount, plural, one {1 Term} other {# Terms}}", {
                                termCount: e
                            })
                        }))
                    }, n.renderThumbnail = function() {
                        R()(this.props.thumbnail, "Thumbnail cannot be null here because null check already completed.");
                        var e = this.props.thumbnail;
                        return m.a.createElement("div", {
                            className: "CheckoutItemPreview-thumbnail",
                            style: {
                                backgroundImage: 'url("' + e + '")'
                            }
                        })
                    }, n.renderTitle = function() {
                        R()(this.props.title, "Title cannot be null here because null check already completed.");
                        var e = this.props.title;
                        return m.a.createElement("div", {
                            className: "CheckoutItemPreview-title"
                        }, m.a.createElement(O.a, {
                            size: 4
                        }, e))
                    }, n.render = function() {
                        return m.a.createElement("div", {
                            className: "CheckoutItemPreview"
                        }, this.props.thumbnail ? this.renderThumbnail() : null, m.a.createElement("div", {
                            className: "CheckoutItemPreview-wrapper"
                        }, this.props.title ? this.renderTitle() : null, this.props.creator ? this.renderCardByline() : null))
                    }, t
                }(m.a.Component),
                z = n("xNal"),
                q = n("og3H"),
                G = n("bBvF").default,
                Y = Object(f.renderToStaticMarkup)(m.a.createElement(A.a, {
                    newTab: !0,
                    to: "/help/2807911/article"
                }, m.a.createElement(y.a, {
                    _precomputed: G("en-US", "here", {})
                }))),
                Q = Object(f.renderToStaticMarkup)(m.a.createElement(A.a, {
                    newTab: !0,
                    to: "/tos"
                }, m.a.createElement(y.a, {
                    _precomputed: G("en-US", "here", {})
                }))),
                X = "coupon",
                J = "opened_coupon_field",
                K = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).handleRecurlyStateChange = function(e) {
                            var t = n.state.errorFields;
                            Object.keys(e.fields).forEach(function(r) {
                                var a = e.fields[r];
                                a.focus && n.recurlyFieldHasChanged(r, a) && (t = t.filter(function(e) {
                                    return e !== r
                                }))
                            }), n.setState({
                                lastRecurlyState: JSON.parse(JSON.stringify(e)),
                                errorFields: t
                            }, function() {
                                n.clearErrorMessageIfThereAreNoErrors()
                            })
                        }, n.handleFormRef = function(e) {
                            n.creditCardForm = e
                        }, n.handleSubmit = function(e) {
                            e && e.preventDefault(), n.setState({
                                errorFields: [],
                                errorMessages: [],
                                status: "submitting"
                            }, function() {
                                n.props.onCheckoutAttempt && n.props.onCheckoutAttempt(), n.shouldRenderSavedCreditCardRows() ? n.checkout(null) : window.recurly.token(n.creditCardForm, function(e, t) {
                                    e ? n.handleErrors(["recurly.payment_errors." + e.code], e.fields) : n.checkout(t.id)
                                })
                            })
                        }, n.handleSubmitResponse = function(e) {
                            e.success ? n.setState({
                                status: "complete"
                            }, n.handleUpgraded) : n.handleErrors(e.errors, e.fields, e.couponErrorIdentifier)
                        }, n.handleUpgraded = function() {
                            n.props.onCheckoutComplete()
                        }, n.handleApplyCoupon = function() {
                            return n.applyCoupon()
                        }, n.handleCouponCodeChange = function(e) {
                            z.c.read(q.m.TOAST_NOTIFICATION__COUPON_CODE) && z.c.dispose(q.m.TOAST_NOTIFICATION__COUPON_CODE), n.setState({
                                couponCode: e.target.value,
                                couponData: null,
                                couponCodeErrorMessage: null,
                                errorFields: n.state.errorFields.filter(function(e) {
                                    return e !== X
                                }),
                                formattedDiscountPrice: null
                            }, function() {
                                n.clearErrorMessageIfThereAreNoErrors()
                            })
                        }, n.handleCouponCodeFocus = function() {
                            n.hasLoggedCouponCodeFocus || (n.hasLoggedCouponCodeFocus = !0, Object(v.a)(J))
                        }, n.handleDurationChange = function(e) {
                            n.props.onChangePurchaseDuration && n.props.onChangePurchaseDuration(e), Object(v.a)("clicked_study_guide_duration", {
                                duration: e
                            }), n.state.couponData && n.setState({
                                couponData: null
                            }, function() {
                                return n.applyCoupon(e)
                            })
                        }, n.handleSaveCreditCardChange = function() {
                            n.setState({
                                saveCreditCard: !n.state.saveCreditCard
                            })
                        }, n.handleInputChange = function(e) {
                            var t = e.target.getAttribute("data-recurly");
                            n.setState({
                                errorFields: n.state.errorFields.filter(function(e) {
                                    return e !== t
                                })
                            }, function() {
                                n.clearErrorMessageIfThereAreNoErrors()
                            })
                        }, n.handleChangeCard = function(e) {
                            e.preventDefault(), n.setState({
                                isOverridingSavedPaymentData: !0
                            }, function() {
                                n.initializeRecurlyFormFields()
                            })
                        }, n.clearErrorMessageIfThereAreNoErrors = function() {
                            n.state.errorFields.length < 1 && n.setState({
                                errorMessages: []
                            })
                        }, n.recurlyFieldHasChanged = function(e, t) {
                            return n.state.lastRecurlyState && t.length !== n.state.lastRecurlyState.fields[e].length
                        }, n.state = {
                            couponCode: t.couponCode || null,
                            couponCodeErrorMessage: null,
                            couponData: null,
                            errorFields: [],
                            errorMessages: [],
                            formattedDiscountPrice: null,
                            isOverridingSavedPaymentData: !1,
                            isValidatingCoupon: !1,
                            lastRecurlyState: null,
                            saveCreditCard: "us" === C.a.countryCode,
                            status: "default"
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.initializeRecurlyFormFields(), this.firstNameInput && this.firstNameInput.focus(), this.state.couponCode && this.handleApplyCoupon()
                    }, n.componentWillUnmount = function() {
                        var e = this;
                        QWait("qrecurly", function() {
                            window.recurly.off("change", e.handleRecurlyStateChange), window.recurly.off("field:submit", e.handleSubmit)
                        })
                    }, n.getCouponCode = function() {
                        return this.state.couponCode ? this.state.couponCode.trim() : null
                    }, n.getCouponCodeInvalidState = function() {
                        var e = this.state,
                            t = e.couponCodeErrorMessage,
                            n = e.couponData;
                        return !(null === t && !this.hasError(X)) || null === n && void 0
                    }, n.getCouponCodeLabel = function() {
                        var e = this.state,
                            t = e.couponCodeErrorMessage,
                            n = e.couponData;
                        return null !== t ? m.a.createElement(m.a.Fragment, null, t) : null !== n ? m.a.createElement(y.a, {
                            _precomputed: G("en-US", "PROMO APPLIED!", {})
                        }) : m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Promo code", {})
                        })
                    }, n.handleErrors = function(e, t, n) {
                        var r = e.map(g.a);
                        Object(v.a)("contextual_checkout_error", {
                            errorMessages: r
                        }), n && this.handleCouponCodeError([n]), this.setState({
                            errorFields: t || [],
                            errorMessages: r,
                            status: "default"
                        }), this.props.onCheckoutError && this.props.onCheckoutError()
                    }, n.handleCouponCodeError = function(e) {
                        var t = G("en-US", "PLEASE ENTER A VALID CODE");
                        if (Object(v.a)("contextual_checkout_coupon_code_error"), e && e.length > 0) switch (e[0]) {
                            case "coupon_code_max_redemption":
                                t = G("en-US", "YOU’VE ALREADY USED THIS CODE");
                                break;
                            case "coupon_code_expired":
                                t = G("en-US", "THIS CODE HAS EXPIRED");
                                break;
                            case "coupon_code_invalid":
                            default:
                                t = G("en-US", "PLEASE ENTER A VALID CODE")
                        }
                        this.setState({
                            couponCodeErrorMessage: t,
                            couponData: null,
                            formattedDiscountPrice: null,
                            isValidatingCoupon: !1
                        })
                    }, n.renderCardField = function(e, t) {
                        var n = p()("CheckoutForm-input", {
                            "is-invalid": this.hasError(e)
                        });
                        return m.a.createElement("div", {
                            className: n
                        }, m.a.createElement("div", {
                            "data-recurly": e
                        }), m.a.createElement("div", {
                            className: "CheckoutForm-label"
                        }, t))
                    }, n.renderCouponField = function() {
                        var e = this.state.couponCode || "";
                        return m.a.createElement("span", {
                            className: "CheckoutForm-couponCodeInput"
                        }, m.a.createElement(w.a, {
                            "data-recurly": X,
                            invalid: this.getCouponCodeInvalidState(),
                            label: this.getCouponCodeLabel(),
                            name: X,
                            onChange: this.handleCouponCodeChange,
                            onFocus: this.handleCouponCodeFocus,
                            placeholder: G("en-US", "Enter code here"),
                            value: e
                        }))
                    }, n.renderNameField = function(e, t, n, r) {
                        return m.a.createElement(w.a, {
                            "data-recurly": e,
                            invalid: !!this.hasError(e) || void 0,
                            label: t,
                            onChange: this.handleInputChange,
                            placeholder: n,
                            ref: r
                        })
                    }, n.renderErrors = function() {
                        var e = this.state.errorMessages.length ? this.state.errorMessages : [G("en-US", "An error occurred trying to process your payment")];
                        return m.a.createElement(I.a, {
                            boxed: !0,
                            uppercaseDeprecated: !0,
                            variant: "alert"
                        }, e.map(function(e, t) {
                            return m.a.createElement(k.a, {
                                key: t
                            }, e)
                        }))
                    }, n.renderHeader = function(e) {
                        return m.a.createElement(k.a, {
                            className: "CheckoutForm-heading"
                        }, m.a.createElement(O.a, {
                            size: 3
                        }, e))
                    }, n.renderCouponCodeArea = function() {
                        return m.a.createElement(m.a.Fragment, null, m.a.createElement(P.a, null), m.a.createElement(M.a, null, m.a.createElement(_.a, {
                            width: 2 / 3
                        }, this.renderCouponField()), m.a.createElement(_.a, {
                            width: 1 / 3
                        }, m.a.createElement(U.a, {
                            disabled: this.shouldDisableApplyCouponCodeButton(),
                            loading: this.state.isValidatingCoupon,
                            onClick: this.handleApplyCoupon,
                            type: "button",
                            width: "fill"
                        }, null === this.state.couponData ? m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Apply", {})
                        }) : m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Applied!", {})
                        })))))
                    }, n.renderSaveCreditCardRow = function() {
                        return m.a.createElement(M.a, null, m.a.createElement(_.a, {
                            width: 1
                        }, m.a.createElement(b.a, {
                            checked: this.state.saveCreditCard,
                            extraClassNames: "CheckoutForm-saveCreditCardCheckbox",
                            label: m.a.createElement(y.a, {
                                _precomputed: G("en-US", "Save this card for future purchases and subscriptions", {})
                            }),
                            onChange: this.handleSaveCreditCardChange
                        })))
                    }, n.renderNewCreditCardRows = function() {
                        var e = this;
                        return m.a.createElement(m.a.Fragment, null, m.a.createElement(M.a, null, m.a.createElement(_.a, {
                            width: .5
                        }, this.renderNameField("first_name", m.a.createElement(y.a, {
                            _precomputed: G("en-US", "First name", {})
                        }), G("en-US", "First name"), function(t) {
                            e.firstNameInput = t
                        })), m.a.createElement(_.a, {
                            width: .5
                        }, this.renderNameField("last_name", m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Last name", {})
                        }), G("en-US", "Last name")))), m.a.createElement(M.a, null, m.a.createElement(_.a, {
                            width: 1
                        }, this.renderCardField("number", m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Card number", {})
                        })))), m.a.createElement(M.a, null, m.a.createElement(_.a, {
                            width: Object(H.c)() ? .25 : 1 / 3
                        }, this.renderCardField("month", m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Month", {})
                        }))), m.a.createElement(_.a, {
                            width: Object(H.c)() ? .25 : 1 / 3
                        }, this.renderCardField("year", m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Year", {})
                        }))), m.a.createElement(_.a, {
                            width: 1 / 3
                        }, this.renderCardField("cvv", m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Card code", {})
                        })))), this.shouldRenderSaveCreditCardRow() ? this.renderSaveCreditCardRow() : null)
                    }, n.renderChangeCreditCardLink = function() {
                        return m.a.createElement(A.a, {
                            onClick: this.handleChangeCard
                        }, m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Change card", {})
                        }))
                    }, n.renderSavedCreditCardRows = function() {
                        var e = this.props.creditCardDetails;
                        return R()(e, "Credit card details must exist"), m.a.createElement(M.a, null, m.a.createElement(_.a, null, m.a.createElement("div", {
                            className: "CheckoutForm-savedCreditCard"
                        }, m.a.createElement("div", {
                            className: "CheckoutForm-creditCardLogo"
                        }, m.a.createElement(N, {
                            creditCardType: e.cardType
                        })), m.a.createElement("span", {
                            className: "CheckoutForm-creditCardDescription"
                        }, this.hasExpiredSavedCreditCardDetails() ? m.a.createElement("span", {
                            className: "CheckoutForm-savedCardExpirationMessage"
                        }, m.a.createElement(y.a, {
                            _precomputed: G("en-US", "This card is no longer valid", {})
                        })) : null, m.a.createElement(L.a, null, m.a.createElement(y.a, {
                            _precomputed: G("en-US", "{creditCardType} ending in {lastFour}", {
                                creditCardType: e.cardType,
                                lastFour: e.lastFour
                            })
                        })), m.a.createElement(S.a, {
                            below: "s"
                        }, m.a.createElement("div", {
                            className: "CheckoutForm-changeCreditCardLink"
                        }, this.renderChangeCreditCardLink()))), m.a.createElement(S.a, {
                            above: "s"
                        }, this.renderChangeCreditCardLink()))))
                    }, n.renderForm = function() {
                        return m.a.createElement("form", {
                            className: "CheckoutForm-form",
                            onSubmit: this.handleSubmit,
                            ref: this.handleFormRef
                        }, this.shouldRenderSavedCreditCardRows() ? this.renderSavedCreditCardRows() : this.renderNewCreditCardRows(), this.props.showCouponCode ? this.renderCouponCodeArea() : null, m.a.createElement("input", {
                            "data-recurly": "token",
                            type: "hidden"
                        }), m.a.createElement("div", {
                            className: "CheckoutForm-submit"
                        }, this.renderCheckoutButton()), m.a.createElement("div", {
                            className: "CheckoutForm-disclaimer"
                        }, this.props.disclaimer || this.renderUpsellDisclaimer()))
                    }, n.renderUpsellDisclaimer = function() {
                        return R()(this.props.cartData.formattedMonthlyPrice, "subscription cartData should include formattedMonthlyPrice"), this.props.showMonthlyPricing ? m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Pay {formattedTotalPrice} ({monthlyPrice}/month x 12 months). By clicking Check out you agree to be charged the subscription fee automatically every year until you cancel. Full terms and conditions available {tosLink}. Details on managing your subscription available {faqLink}.", {
                                faqLink: Y,
                                formattedTotalPrice: this.props.cartData.formattedPrice,
                                monthlyPrice: this.props.cartData.formattedMonthlyPrice,
                                tosLink: Q
                            })
                        }) : m.a.createElement(y.a, {
                            _precomputed: G("en-US", "By clicking Check out you agree to be charged the subscription fee automatically every year until you cancel. Full terms and conditions available {tosLink}. Details on managing your subscription available {faqLink}.", {
                                faqLink: Y,
                                tosLink: Q
                            })
                        })
                    }, n.renderCheckoutItemPreview = function(e) {
                        return m.a.createElement("div", {
                            className: "CheckoutForm-checkoutItemPreview"
                        }, m.a.createElement("div", {
                            className: "CheckoutForm-checkoutItemBackground"
                        }), m.a.createElement(V, {
                            creator: e.creator,
                            numMcqs: e.numMcqs,
                            numSets: e.numSets,
                            numTerms: e.numTerms,
                            thumbnail: e.thumbnail,
                            title: e.title
                        }))
                    }, n.renderTotalPrice = function() {
                        return m.a.createElement(L.a, null, this.props.cartData.formattedPrice)
                    }, n.renderDiscountedPrice = function() {
                        return m.a.createElement(L.a, null, m.a.createElement(T.a, null, this.props.cartData.formattedPrice), this.state.formattedDiscountPrice)
                    }, n.renderCartLineItemCheckoutButton = function() {
                        return this.props.checkoutButtonTextSource ? this.props.checkoutButtonTextSource : m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Check out ({formattedPrice}/yr)", {
                                formattedPrice: this.props.cartData.formattedPrice
                            })
                        })
                    }, n.renderCheckoutButton = function() {
                        var e = this.props.cartData;
                        return m.a.createElement(U.a, {
                            disabled: this.shouldDisableCheckoutButton(),
                            hero: !0,
                            loading: "submitting" === this.state.status,
                            type: "submit",
                            width: "fill"
                        }, this.isCartDataPurchasableContent(e) ? m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Buy now - {totalAmount}", {
                                totalAmount: this.state.formattedDiscountPrice || this.props.cartData.formattedPrice
                            })
                        }) : this.renderCartLineItemCheckoutButton())
                    }, n.renderOrderTotalSection = function() {
                        return m.a.createElement(m.a.Fragment, null, m.a.createElement(M.a, null, m.a.createElement(_.a, null, m.a.createElement("div", {
                            className: "CheckoutForm-totalSection"
                        }, m.a.createElement(L.a, null, m.a.createElement(y.a, {
                            _precomputed: G("en-US", "Total", {})
                        }), this.state.couponData ? m.a.createElement("span", {
                            className: "CheckoutForm-discount"
                        }, m.a.createElement(y.a, {
                            _precomputed: G("en-US", "{discount}% OFF", {
                                discount: this.state.couponData.discountPercent
                            })
                        })) : null), m.a.createElement("div", {
                            className: "CheckoutForm-totalPrice"
                        }, this.state.couponData ? this.renderDiscountedPrice() : this.renderTotalPrice())))), m.a.createElement(P.a, null))
                    }, n.render = function() {
                        var e = this.props,
                            t = e.cartData,
                            n = e.headerContent;
                        return m.a.createElement("div", {
                            className: "CheckoutForm"
                        }, this.isCartDataPurchasableContent(t) ? this.renderCheckoutItemPreview(t) : null, this.shouldDisplayErrorsHeader() ? this.renderErrors() : null, n && !this.shouldDisplayErrorsHeader() ? this.renderHeader(n) : null, this.props.showCouponCode ? this.renderOrderTotalSection() : null, this.renderForm())
                    }, n.initializeRecurlyFormFields = function() {
                        var e = this;
                        Object(E.a)(C.a.recurlyKey), QWait("qrecurly", function() {
                            window.recurly.on("change", e.handleRecurlyStateChange), window.recurly.on("field:submit", e.handleSubmit)
                        })
                    }, n.hasError = function(e) {
                        return this.state.errorFields.indexOf(e) > -1
                    }, n.applyCoupon = function(e) {
                        var t = this,
                            n = this.props.cartData;
                        this.isCartDataPurchasableContent(n) && this.setState({
                            isValidatingCoupon: !0
                        }, u()(c.a.mark(function r() {
                            var o;
                            return c.a.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.next = 2, Object(j.f)("/recurly/coupon/" + (t.state.couponCode || ""), a()({}, n.modelData, {
                                            purchaseDuration: e || n.purchaseDuration
                                        }));
                                    case 2:
                                        if (!(o = r.sent)) {
                                            r.next = 6;
                                            break
                                        }
                                        return o.success ? (t.setState({
                                            couponCodeErrorMessage: null,
                                            couponData: o.coupon,
                                            formattedDiscountPrice: o.formattedDiscountPrice,
                                            isValidatingCoupon: !1
                                        }), Object(v.a)("contextual_checkout_coupon_code_applied")) : t.handleCouponCodeError(o.errors), r.abrupt("return");
                                    case 6:
                                        t.handleCouponCodeError();
                                    case 7:
                                    case "end":
                                        return r.stop()
                                }
                            }, r)
                        })))
                    }, n.checkout = function(e) {
                        var t = this,
                            n = this.props,
                            r = n.cartData,
                            a = n.source,
                            o = n.channel,
                            i = r.modelData ? Object(D.n)(e, this.getCouponCode(), this.state.saveCreditCard, r, o) : Object(D.m)(e, a, r);
                        i && i.then(this.handleSubmitResponse).catch(function() {
                            t.handleErrors(["checkout.submit_payment.error"])
                        })
                    }, n.isCartDataPurchasableContent = function(e) {
                        return "creator" in e
                    }, n.shouldDisableApplyCouponCodeButton = function() {
                        return 0 === (this.getCouponCode() || "").length || null !== this.state.couponData
                    }, n.hasExpiredSavedCreditCardDetails = function() {
                        var e = this.props.creditCardDetails;
                        if (!e) return !1;
                        if (this.state.isOverridingSavedPaymentData) return !1;
                        var t = new Date;
                        return new Date(e.expirationYear, e.expirationMonth - 1, 1) < t
                    }, n.shouldDisableCheckoutButton = function() {
                        return this.hasExpiredSavedCreditCardDetails() || "complete" === this.state.status
                    }, n.shouldDisplayErrorsHeader = function() {
                        return this.state.errorMessages.length > 0 || this.state.errorFields.length > 0 && (!this.props.showCouponCode || !(1 === this.state.errorFields.length && this.hasError(X)))
                    }, n.shouldRenderSavedCreditCardRows = function() {
                        return null !== this.props.creditCardDetails && !this.state.isOverridingSavedPaymentData
                    }, n.shouldRenderSaveCreditCardRow = function() {
                        return !(!this.props.offerToSaveCreditCard || this.props.creditCardDetails && !this.state.isOverridingSavedPaymentData)
                    }, t
                }(m.a.Component);
            K.defaultProps = {
                offerToSaveCreditCard: !1,
                showCouponCode: !1
            };
            var Z = n("dxfC"),
                $ = n("17x9"),
                ee = n.n($),
                te = n("ojxP"),
                ne = n.n(te),
                re = n("xvNY"),
                ae = n("X0lI"),
                oe = n.n(ae),
                ie = n("fdo3"),
                se = n("ysfV");
            n.d(t, "a", function() {
                return de
            });
            var ce = n("bBvF").default,
                le = Object(se.a)(m.a.createElement(A.a, {
                    newTab: !0,
                    to: "/tos"
                }, m.a.createElement(y.a, {
                    _precomputed: ce("en-US", "Terms of Service", {})
                }))),
                ue = Object(se.a)(m.a.createElement(A.a, {
                    newTab: !0,
                    to: "/help/2807911/article"
                }, m.a.createElement(y.a, {
                    _precomputed: ce("en-US", "here", {})
                }))),
                de = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).getPrice = function() {
                            switch (n.props.productType) {
                                case q.E.RECURRING_ONE_YEAR_GO:
                                case q.E.RECURRING_ONE_YEAR_GO_TIER2:
                                case q.E.RECURRING_ONE_YEAR_GO_TIER3:
                                    return Object(D.g)();
                                default:
                                    return Object(D.j)()
                            }
                        }, n.handleInlineCheckoutStart = function(e, t) {
                            window.recurly || n.loadRecurlyJs(), n.state.inlineCheckoutCartData ? n.setState({
                                inlineCheckoutShowing: !0,
                                inlineCheckoutState: "default"
                            }) : n.setState({
                                inlineCheckoutState: "loading"
                            }, function() {
                                Object(D.a)(e, t).then(function(e) {
                                    return n.setState({
                                        inlineCheckoutCartData: e,
                                        inlineCheckoutShowing: !0,
                                        inlineCheckoutState: "default"
                                    })
                                }).catch(function() {
                                    return Object(ie.a)(Object(D.h)(t))
                                })
                            })
                        }, n.handleInlineCheckoutAttempt = function() {
                            n.setState({
                                inlineCheckoutState: "submitting"
                            })
                        }, n.handleInlineCheckoutCancel = function() {
                            n.setState({
                                inlineCheckoutShowing: !1,
                                inlineCheckoutCartData: null,
                                inlineCheckoutState: "default"
                            }, function() {
                                n.props.onInlineCheckoutCancel && n.props.onInlineCheckoutCancel()
                            })
                        }, n.handleInlineCheckoutComplete = function() {
                            var e = n.state.inlineCheckoutCartData,
                                t = n.props.purchasableContentData;
                            if (e) Object(re.q)(e.trackingData.purchaseAmount, e.trackingData.purchaseCurrency, e.trackingData.purchasedUpgrade, !1);
                            else if (t) {
                                var r = t.title,
                                    a = t.trackingData,
                                    o = a.priceCurrency,
                                    i = a.priceValue;
                                Object(re.g)({
                                    title: r,
                                    priceValue: i,
                                    priceCurrency: o
                                })
                            }
                            n.setState({
                                inlineCheckoutState: "complete"
                            }), n.props.onInlineCheckoutComplete && n.props.onInlineCheckoutComplete()
                        }, n.handleInlineCheckoutError = function() {
                            n.setState({
                                inlineCheckoutState: "default"
                            })
                        }, n.handleModalClose = function() {
                            n.state.inlineCheckoutShowing && "default" === n.state.inlineCheckoutState ? n.handleInlineCheckoutCancel() : n.state.inlineCheckoutShowing || n.props.onClose && n.props.onClose()
                        }, n.handleModalOpen = function() {
                            n.props.purchasableContentData && !n.state.inlineCheckoutShowing && n.initiatePurchasableContentInlineCheckout(), n.props.onOpen && n.props.onOpen()
                        }, n.loadRecurlyJs = function() {
                            ne()("https://js.recurly.com/v4/recurly.js", function() {
                                QWait("dom", function() {
                                    QLoad("qrecurly")
                                })
                            })
                        }, n.state = {
                            inlineCheckoutShowing: !1,
                            inlineCheckoutCartData: null,
                            inlineCheckoutState: "default"
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentDidUpdate = function(e, t) {
                        !t.inlineCheckoutShowing && this.state.inlineCheckoutShowing && this.props.onInlineCheckoutStart && this.props.onInlineCheckoutStart()
                    }, n.getChildContext = function() {
                        return {
                            inlineCheckout: this.props.inlineCheckout,
                            inlineCheckoutStart: this.handleInlineCheckoutStart,
                            inlineCheckoutState: this.state.inlineCheckoutState,
                            productType: this.props.productType
                        }
                    }, n.renderInlineCheckout = function() {
                        var e = this.props.purchasableContentData;
                        return e ? m.a.createElement(K, {
                            cartData: e,
                            channel: this.props.channel,
                            couponCode: this.props.couponCode,
                            creditCardDetails: this.props.creditCardDetails,
                            disclaimer: this.props.disclaimer,
                            offerToSaveCreditCard: !0,
                            onChangePurchaseDuration: this.props.onInlineCheckoutChangePurchaseDuration,
                            onCheckoutAttempt: this.handleInlineCheckoutAttempt,
                            onCheckoutComplete: this.handleInlineCheckoutComplete,
                            onCheckoutError: this.handleInlineCheckoutError,
                            showCouponCode: !0,
                            source: this.props.inlineCheckoutSource
                        }) : m.a.createElement(K, {
                            cartData: oe()(this.state.inlineCheckoutCartData),
                            checkoutButtonTextSource: Object(D.o)() ? this.renderFreeTrialCheckoutButtonText() : null,
                            creditCardDetails: this.props.creditCardDetails,
                            disclaimer: Object(D.o)() ? this.renderFreeTrialDisclaimer() : null,
                            headerContent: this.props.inlineCheckoutHeadline,
                            onCheckoutAttempt: this.handleInlineCheckoutAttempt,
                            onCheckoutComplete: this.handleInlineCheckoutComplete,
                            onCheckoutError: this.handleInlineCheckoutError,
                            showMonthlyPricing: this.props.showMonthlyPricing,
                            source: this.props.inlineCheckoutSource
                        })
                    }, n.renderFreeTrialCheckoutButtonText = function() {
                        var e = Object(D.e)();
                        switch (e.unit) {
                            case q.tb.DAY:
                                return m.a.createElement(y.a, {
                                    _precomputed: ce("en-US", "Start {couponFreeTrialAmount, plural, one {1-day} other {#-day}} free trial", {
                                        couponFreeTrialAmount: e.amount
                                    })
                                });
                            case q.tb.WEEK:
                                return m.a.createElement(y.a, {
                                    _precomputed: ce("en-US", "Start {couponFreeTrialAmount, plural, one {1-week} other {#-week}} free trial", {
                                        couponFreeTrialAmount: e.amount
                                    })
                                });
                            case q.tb.MONTH:
                                return m.a.createElement(y.a, {
                                    _precomputed: ce("en-US", "Start {couponFreeTrialAmount, plural, one {1-month} other {#-month}} free trial", {
                                        couponFreeTrialAmount: e.amount
                                    })
                                });
                            default:
                                throw new Error("Invalid freeTrialData unit supplied!")
                        }
                    }, n.renderFreeTrialDisclaimer = function() {
                        var e = Object(D.e)();
                        switch (e.unit) {
                            case q.tb.DAY:
                                return m.a.createElement(y.a, {
                                    _precomputed: ce("en-US", "Your subscription will renew automatically every 12 months. By clicking Start {couponFreeTrialAmount, plural, one {1-day} other {#-day}} free trial, you agree to be charged {formattedPrice} when your trial ends and each subsequent year until you cancel. You also agree to Quizlet's {tosLink}. Details on managing your subscription available {faqLink}", {
                                        couponFreeTrialAmount: e.amount,
                                        faqLink: ue,
                                        formattedPrice: this.getPrice(),
                                        tosLink: le
                                    })
                                });
                            case q.tb.WEEK:
                                return m.a.createElement(y.a, {
                                    _precomputed: ce("en-US", "Your subscription will renew automatically every 12 months. By clicking Start {couponFreeTrialAmount, plural, one {1-week} other {#-week}} free trial, you agree to be charged {formattedPrice} when your trial ends and each subsequent year until you cancel. You also agree to Quizlet's {tosLink}. Details on managing your subscription available {faqLink}", {
                                        couponFreeTrialAmount: e.amount,
                                        faqLink: ue,
                                        formattedPrice: this.getPrice(),
                                        tosLink: le
                                    })
                                });
                            case q.tb.MONTH:
                                return m.a.createElement(y.a, {
                                    _precomputed: ce("en-US", "Your subscription will renew automatically every 12 months. By clicking Start {couponFreeTrialAmount, plural, one {1-month} other {#-month}} free trial, you agree to be charged {formattedPrice} when your trial ends and each subsequent year until you cancel. You also agree to Quizlet's {tosLink}. Details on managing your subscription available {faqLink}", {
                                        couponFreeTrialAmount: e.amount,
                                        faqLink: ue,
                                        formattedPrice: this.getPrice(),
                                        tosLink: le
                                    })
                                });
                            default:
                                throw new Error("Invalid freeTrialData unit supplied!")
                        }
                    }, n.render = function() {
                        var e = a()({}, this.props);
                        return delete e.children, delete e.inlineCheckout, delete e.inlineCheckoutHeadline, delete e.inlineCheckoutSource, delete e.onInlineCheckoutCancel, delete e.onInlineCheckoutComplete, delete e.onInlineCheckoutStart, this.state.inlineCheckoutShowing ? m.a.createElement(Z.a, a()({}, e, {
                            background: "white",
                            fullWidthBody: !1,
                            headerContent: this.props.headerContent || m.a.createElement(y.a, {
                                _precomputed: ce("en-US", "Upgrade your account", {})
                            }),
                            includeCloseButton: !0,
                            onClose: this.handleModalClose
                        }), m.a.createElement("div", {
                            className: "UpsellModal"
                        }, this.renderInlineCheckout())) : m.a.createElement(Z.a, a()({}, e, {
                            onClose: this.handleModalClose,
                            onOpen: this.handleModalOpen
                        }), m.a.createElement("div", {
                            className: "UpsellModal"
                        }, this.props.children))
                    }, n.initiatePurchasableContentInlineCheckout = function() {
                        window.recurly || this.loadRecurlyJs(), this.setState({
                            inlineCheckoutShowing: !0,
                            inlineCheckoutState: "default"
                        })
                    }, t
                }(m.a.Component);
            de.childContextTypes = {
                inlineCheckout: ee.a.bool,
                inlineCheckoutStart: ee.a.func,
                inlineCheckoutState: ee.a.string,
                productType: ee.a.number
            }, de.defaultProps = {
                background: "gray",
                creditCardDetails: null,
                fullWidthBody: !0,
                headerContent: m.a.createElement(y.a, {
                    _precomputed: ce("en-US", "Upgrade your account", {})
                }),
                isOpen: !1,
                onClose: function() {},
                productType: Object(D.k)()
            }
        },
        EVih: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r, a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = n("Yqds"),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                },
                s = n("ZR02");
            t.default = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e(t),
                        r = t.basename,
                        o = function(e) {
                            return e ? (r && null == e.basename && (0 === e.pathname.toLowerCase().indexOf(r.toLowerCase()) ? (e.pathname = e.pathname.substring(r.length), e.basename = r, "" === e.pathname && (e.pathname = "/")) : e.basename = ""), e) : e
                        },
                        c = function(e) {
                            if (!r) return e;
                            var t = "string" == typeof e ? (0, s.parsePath)(e) : e,
                                n = t.pathname,
                                o = "/" === r.slice(-1) ? r : r + "/",
                                i = "/" === n.charAt(0) ? n.slice(1) : n;
                            return a({}, t, {
                                pathname: o + i
                            })
                        };
                    return a({}, n, {
                        getCurrentLocation: function() {
                            return o(n.getCurrentLocation())
                        },
                        listenBefore: function(e) {
                            return n.listenBefore(function(t, n) {
                                return (0, i.default)(e, o(t), n)
                            })
                        },
                        listen: function(e) {
                            return n.listen(function(t) {
                                return e(o(t))
                            })
                        },
                        push: function(e) {
                            return n.push(c(e))
                        },
                        replace: function(e) {
                            return n.replace(c(e))
                        },
                        createPath: function(e) {
                            return n.createPath(c(e))
                        },
                        createHref: function(e) {
                            return n.createHref(c(e))
                        },
                        createLocation: function(e) {
                            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                            return o(n.createLocation.apply(n, [c(e)].concat(r)))
                        }
                    })
                }
            }
        },
        "GE6+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return h
            });
            var r = n("VbXa"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = n("t1Ez"),
                c = n("zt8I"),
                l = n("BX20"),
                u = n("PTpY"),
                d = n("qbFX"),
                p = n("bBvF").default,
                h = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return a()(t, e), t.prototype.render = function() {
                        return i.a.createElement(l.a, {
                            headerContent: i.a.createElement(s.a, {
                                _precomputed: p("en-US", "No more classes left", {})
                            }),
                            isOpen: this.props.isOpen,
                            onClose: this.props.actions.onClose
                        }, i.a.createElement(u.a, null, i.a.createElement(c.a, null, i.a.createElement(s.a, {
                            _precomputed: p("en-US", "You can only join a maximum of {numClassesAllowed, plural, other {# classes}} (you have {numClassesUsed, number}).", {
                                numClassesAllowed: this.props.numClassesAllowed,
                                numClassesUsed: this.props.numClassesUsed
                            })
                        })), i.a.createElement(c.a, null, i.a.createElement(s.a, {
                            _precomputed: p("en-US", "You can drop an old class in order to add a new one or upgrade your account for an unlimited number of classes.", {})
                        })), i.a.createElement(d.a, {
                            shouldShowFreeTrial: !0,
                            showMonthlyPricing: !0,
                            source: "classes"
                        })))
                    }, t
                }(i.a.PureComponent)
        },
        GcHW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("q1tI"),
                a = n.n(r),
                o = n("KAy6");

            function i(e, t, n) {
                return Object(o.renderToStaticMarkup)(a.a.createElement(e, t, n))
            }
        },
        HGUJ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = t.CALL_HISTORY_METHOD = "@@router/CALL_HISTORY_METHOD";

            function a(e) {
                return function() {
                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    return {
                        type: r,
                        payload: {
                            method: e,
                            args: n
                        }
                    }
                }
            }
            var o = t.push = a("push"),
                i = t.replace = a("replace"),
                s = t.go = a("go"),
                c = t.goBack = a("goBack"),
                l = t.goForward = a("goForward");
            t.routerActions = {
                push: o,
                replace: i,
                go: s,
                goBack: c,
                goForward: l
            }
        },
        HKPj: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", function() {
                return g
            });
            var r = n("VbXa"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = n("t1Ez"),
                c = n("FFEN"),
                l = n("a08m"),
                u = n("BX20"),
                d = n("XUS/"),
                p = n("PTpY"),
                h = n("qbFX"),
                m = n("M3Qh"),
                f = n("bBvF").default,
                g = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return a()(t, e), t.prototype.render = function() {
                        var e = "en-us" === Object(m.a)() ? "/features/teacher-class-progress" : "/features/class-progress";
                        return i.a.createElement(u.a, {
                            isOpen: this.props.isOpen,
                            onClose: this.props.onClose
                        }, i.a.createElement(p.a, null, i.a.createElement(c.a, {
                            size: 3
                        }, i.a.createElement(s.a, {
                            _precomputed: f("en-US", "Introducing class progress", {})
                        })), i.a.createElement("div", {
                            className: "ClassProgressUpsellModal-message"
                        }, i.a.createElement(s.a, {
                            _precomputed: f("en-US", "Gain valuable insights into your students' performance and study habits, all in one place.", {})
                        })), i.a.createElement(h.a, {
                            onClick: this.props.onUpgradeButtonClick,
                            shouldShowFreeTrial: !0,
                            showMonthlyPricing: !0,
                            source: this.props.upgradeSource || "class_progress"
                        }), i.a.createElement("div", {
                            className: "ClassProgressUpsellModal-learnMoreLink"
                        }, i.a.createElement(l.a, {
                            newTab: !0,
                            to: e
                        }, i.a.createElement(s.a, {
                            _precomputed: f("en-US", "Learn more", {})
                        })))), i.a.createElement(d.a, {
                            headline: i.a.createElement(s.a, {
                                _precomputed: f("en-US", "Track student progress", {})
                            }),
                            icon: "class"
                        }, i.a.createElement(s.a, {
                            _precomputed: f("en-US", "See how your students are studying and track their progress", {})
                        })), i.a.createElement(d.a, {
                            headline: i.a.createElement(s.a, {
                                _precomputed: f("en-US", "Most missed words", {})
                            }),
                            icon: "test"
                        }, i.a.createElement(s.a, {
                            _precomputed: f("en-US", "View which words or concepts your students are struggling with most.", {})
                        })), i.a.createElement(d.a, {
                            headline: i.a.createElement(s.a, {
                                _precomputed: f("en-US", "See progress over time", {})
                            }),
                            icon: "clock"
                        }, i.a.createElement(s.a, {
                            _precomputed: f("en-US", "Compare study data from the past day, week, and year.", {})
                        })), i.a.createElement(d.a, {
                            headline: i.a.createElement(s.a, {
                                _precomputed: f("en-US", "Convenient and simple to use", {})
                            }),
                            icon: "check"
                        }, i.a.createElement(s.a, {
                            _precomputed: f("en-US", "Check these stats on any set you create (or any set in your classes).", {})
                        })))
                    }, t
                }(o.PureComponent)
        },
        HaSr: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            t.canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement)
        },
        KX5j: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("GcHW"),
                a = n("9WHe"),
                o = n("a08m"),
                i = n("bBvF").default;

            function s(e) {
                switch (e) {
                    case "errors.purchase_error.already_subscribed.self":
                        return i("en-US", "YOU ALREADY HAVE A QUIZLET SUBSCRIPTION.");
                    case "errors.purchase_error.already_subscribed.someone_else":
                        return i("en-US", "THE USER ALREADY HAS A QUIZLET SUBSCRIPTION.");
                    case "errors.purchase_error.already_subscribed_plus.self":
                        return i("en-US", "YOU ALREADY HAVE A QUIZLET PLUS SUBSCRIPTION.");
                    case "errors.purchase_error.already_subscribed_plus.someone_else":
                        return i("en-US", "THE USER ALREADY HAS A QUIZLET PLUS SUBSCRIPTION.");
                    case "errors.purchase_error.already_subscribed_teacher.self":
                        return i("en-US", "YOU ALREADY HAVE A QUIZLET TEACHER SUBSCRIPTION.");
                    case "errors.purchase_error.already_subscribed_teacher.someone_else":
                        return i("en-US", "THE USER ALREADY HAS A QUIZLET TEACHER SUBSCRIPTION.");
                    case "errors.purchase_error.cart_out_of_date":
                        return i("en-US", "YOUR CART IS OUT OF DATE! RELOAD THE PAGE BEFORE CHECKING OUT.");
                    case "errors.purchase_error.error_loading_cart":
                        return i("en-US", "ERROR LOADING YOUR CART. PLEASE RELOAD THIS PAGE.");
                    case "errors.purchase_error.generic_error":
                        return i("en-US", "THERE WAS A PROBLEM PROCESSING YOUR TRANSACTION. PLEASE TRY AGAIN AND LET US KNOW IF THE PROBLEM PERSISTS.");
                    case "recurly.payment_errors.cardholder_requested_stop":
                        return i("en-US", "Your requested recurring payments can no longer be accepted using this card. Please update your billing information.");
                    case "recurly.payment_errors.customer_canceled_transaction":
                        return i("en-US", "You canceled the transaction after it was approved. Please update your billing information to authorize a new transaction.");
                    case "recurly.payment_errors.declined":
                        return i("en-US", "The transaction was declined. Please use a different card or contact your bank.");
                    case "recurly.payment_errors.declined_missing_data":
                        return i("en-US", "The card information you entered is not valid. Please double check.");
                    case "recurly.payment_errors.duplicate_transaction":
                        return i("en-US", "A similar transaction was recently submitted. Please wait a few minutes and try again.");
                    case "recurly.payment_errors.exceeds_daily_limit":
                        return i("en-US", "The transaction exceeds your daily approval limit. Please contact your bank or try another card.");
                    case "recurly.payment_errors.fraud_too_many_attempts":
                        return i("en-US", "The transaction was declined. You have exceeded a reasonable number of attempts. Please wait a while before retrying or try a different card.");
                    case "recurly.payment_errors.insufficient_funds":
                        return i("en-US", "The transaction was declined due to insufficient funds in your account. Please use a different card or contact your bank.");
                    case "recurly.payment_errors.invalid_account_number":
                        return i("en-US", "The account number you provided is not valid. Please double check.");
                    case "recurly.payment_errors.invalid_email":
                        return i("en-US", "Your email address is not valid. Please double check.");
                    case "recurly.payment_errors.temporary_hold":
                        return i("en-US", "Your card has a temporary hold. Please use a different card or contact your bank.");
                    case "recurly.payment_errors.declined_card_number":
                    case "recurly.payment_errors.invalid_card_number":
                        return i("en-US", "The card number you entered is not valid. Please double check.");
                    case "recurly.payment_errors.declined_expiration_date":
                    case "recurly.payment_errors.expired_card":
                        return i("en-US", "Your credit card is expired, please update your card.");
                    case "recurly.payment_errors.declined_security_code":
                    case "recurly.payment_errors.fraud_security_code":
                        return i("en-US", "The CVC you entered is not valid. Please double check.");
                    case "recurly.payment_errors.approved":
                    case "recurly.payment_errors.approved_fraud_review":
                        return i("en-US", "Approved");
                    case "recurly.payment_errors.restricted_card":
                    case "recurly.payment_errors.restricted_card_chargeback":
                        return i("en-US", "Your card cannot be accepted. Please contact your bank for details or try another card.");
                    case "recurly.payment_errors.authorization_expired":
                    case "recurly.payment_errors.gateway_token_not_found":
                    case "recurly.payment_errors.no_billing_information":
                        var t = Object(r.a)(o.a, {
                            to: "/settings#upgrade-setting"
                        }, i("en-US", "billing information"));
                        return i("en-US", "Your payment details were not found. Please update your {billingLink}.", {
                            billingLink: t
                        });
                    case "recurly.payment_errors.cvv_required":
                    case "recurly.payment_errors.declined_exception":
                    case "recurly.payment_errors.recurly_failed_to_get_token":
                    case "recurly.payment_errors.try_again":
                    case "recurly.payment_errors.unknown":
                        return i("en-US", "The payment processing system experienced an error. Your card was not charged. Please try again later.");
                    case "recurly.payment_errors.paypal_account_issue":
                    case "recurly.payment_errors.paypal_declined_use_alternate":
                    case "recurly.payment_errors.paypal_hard_decline":
                    case "recurly.payment_errors.paypal_invalid_billing_agreement":
                    case "recurly.payment_errors.paypal_primary_declined":
                        return i("en-US", "Your primary funding source was declined. Please update your billing information with PayPal or try again.");
                    case "recurly.payment_errors.call_issuer":
                    case "recurly.payment_errors.call_issuer_update_cardholder_data":
                    case "recurly.payment_errors.card_not_activated":
                    case "recurly.payment_errors.card_type_not_accepted":
                    case "recurly.payment_errors.invalid_data":
                    case "recurly.payment_errors.invalid_issuer":
                    case "recurly.payment_errors.invalid_merchant_type":
                    case "recurly.payment_errors.invalid_transaction":
                    case "recurly.payment_errors.payment_not_accepted":
                        return i("en-US", "You cannot complete this transaction using this card. Please try another card or contact your bank.");
                    case "recurly.payment_errors.ach_transactions_not_supported":
                    case "recurly.payment_errors.api_error":
                    case "recurly.payment_errors.api-error":
                    case "recurly.payment_errors.authorization_already_captured":
                    case "recurly.payment_errors.authorization_amount_depleted":
                    case "recurly.payment_errors.cannot_refund_unsettled_transactions":
                    case "recurly.payment_errors.contact_gateway":
                    case "recurly.payment_errors.currency_not_supported":
                    case "recurly.payment_errors.deposit_referenced_chargeback":
                    case "recurly.payment_errors.fraud_address":
                    case "recurly.payment_errors.fraud_address_recurly":
                    case "recurly.payment_errors.fraud_advanced_verification":
                    case "recurly.payment_errors.fraud_gateway":
                    case "recurly.payment_errors.fraud_generic":
                    case "recurly.payment_errors.fraud_ip_address":
                    case "recurly.payment_errors.fraud_manual_decision":
                    case "recurly.payment_errors.fraud_risk_check":
                    case "recurly.payment_errors.fraud_stolen_card":
                    case "recurly.payment_errors.fraud_velocity":
                    case "recurly.payment_errors.gateway_error":
                    case "recurly.payment_errors.gateway_timeout":
                    case "recurly.payment_errors.gateway_unavailable":
                    case "recurly.payment_errors.invalid_gateway_configuration":
                    case "recurly.payment_errors.invalid_login":
                    case "recurly.payment_errors.issuer_unavailable":
                    case "recurly.payment_errors.no_gateway":
                    case "recurly.payment_errors.partial_credits_not_supported":
                    case "recurly.payment_errors.payment_cannot_void_authorization":
                    case "recurly.payment_errors.processor_unavailable":
                    case "recurly.payment_errors.recurly_error":
                    case "recurly.payment_errors.recurly_token_not_found":
                    case "recurly.payment_errors.ssl_error":
                    case "recurly.payment_errors.three_d_secure_not_supported":
                    case "recurly.payment_errors.contact_support":
                    case "recurly.payment_errors.total_credit_exceeds_capture":
                    case "recurly.payment_errors.transaction_already_voided":
                    case "recurly.payment_errors.transaction_cannot_be_refunded":
                    case "recurly.payment_errors.transaction_cannot_be_voided":
                    case "recurly.payment_errors.transaction_failed_to_settled":
                    case "recurly.payment_errors.transaction_not_found":
                    case "recurly.payment_errors.transaction_settled":
                    case "recurly.payment_errors.zero_dollar_auth_not_supported":
                        var n = Object(r.a)(o.a, {
                            to: "mailto:upgradesupport@quizlet.com"
                        }, i("en-US", "upgradesupport@quizlet.com"));
                        return i("en-US", "The payment processing system experienced an error. Your card was not charged. Please contact us at {supportLink}.", {
                            supportLink: n
                        });
                    case "recurly.payment_errors.validation":
                    case "recurly.payment_errors.invalid-parameter":
                        return i("en-US", "The credit card information you provided is invalid. Please correct the fields highlighted in red and try again.");
                    case "recurly.payment_errors.paypal-canceled":
                        return i("en-US", "You canceled the PayPal transaction.");
                    case "recurly.payment_errors.amazon_error":
                        return i("en-US", "There was a problem processing your Amazon transaction. Please double check your funding source in Amazon and try again.");
                    case "recurly.payment_errors.coupon.max_redemption":
                        return i("en-US", "YOU’VE ALREADY USED THIS DISCOUNT.");
                    default:
                        return a.a.error("Invalid exception in getLocalizedCheckoutException()", {
                            exceptionKey: e
                        }), i("en-US", "THERE WAS A PROBLEM PROCESSING YOUR TRANSACTION. PLEASE TRY AGAIN AND LET US KNOW IF THE PROBLEM PERSISTS.")
                }
            }
        },
        L2el: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function() {
                    return function(t) {
                        return function(n) {
                            if (n.type !== r.CALL_HISTORY_METHOD) return t(n);
                            var a = n.payload,
                                o = a.method,
                                i = a.args;
                            e[o].apply(e, function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                    return n
                                }
                                return Array.from(e)
                            }(i))
                        }
                    }
                }
            };
            var r = n("HGUJ")
        },
        L3Ur: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.routerMiddleware = t.routerActions = t.goForward = t.goBack = t.go = t.replace = t.push = t.CALL_HISTORY_METHOD = t.routerReducer = t.LOCATION_CHANGE = t.syncHistoryWithStore = void 0;
            var r = n("dan0");
            Object.defineProperty(t, "LOCATION_CHANGE", {
                enumerable: !0,
                get: function() {
                    return r.LOCATION_CHANGE
                }
            }), Object.defineProperty(t, "routerReducer", {
                enumerable: !0,
                get: function() {
                    return r.routerReducer
                }
            });
            var a = n("HGUJ");
            Object.defineProperty(t, "CALL_HISTORY_METHOD", {
                enumerable: !0,
                get: function() {
                    return a.CALL_HISTORY_METHOD
                }
            }), Object.defineProperty(t, "push", {
                enumerable: !0,
                get: function() {
                    return a.push
                }
            }), Object.defineProperty(t, "replace", {
                enumerable: !0,
                get: function() {
                    return a.replace
                }
            }), Object.defineProperty(t, "go", {
                enumerable: !0,
                get: function() {
                    return a.go
                }
            }), Object.defineProperty(t, "goBack", {
                enumerable: !0,
                get: function() {
                    return a.goBack
                }
            }), Object.defineProperty(t, "goForward", {
                enumerable: !0,
                get: function() {
                    return a.goForward
                }
            }), Object.defineProperty(t, "routerActions", {
                enumerable: !0,
                get: function() {
                    return a.routerActions
                }
            });
            var o = s(n("8U9d")),
                i = s(n("L2el"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.syncHistoryWithStore = o.default, t.routerMiddleware = i.default
        },
        LODH: function(e, t, n) {
            "use strict";
            var r = n("VbXa"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = n("TSYQ"),
                c = n.n(s),
                l = n("zK28"),
                u = n("9WHe"),
                d = n("moAd"),
                p = n("bvRJ"),
                h = n("a08m"),
                m = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).renderPlayButton = function() {
                            return i.a.createElement(h.a, {
                                onClick: t.props.onPlay
                            }, i.a.createElement("div", {
                                className: "VideoAd-control"
                            }, i.a.createElement(p.a, {
                                className: "VideoAd-icon",
                                icon: "play"
                            })))
                        }, t.renderPauseButton = function() {
                            return i.a.createElement(h.a, {
                                onClick: t.props.onPause
                            }, i.a.createElement("div", {
                                className: "VideoAd-control"
                            }, i.a.createElement(p.a, {
                                className: "VideoAd-icon",
                                icon: "pause"
                            })))
                        }, t.renderMuteButton = function() {
                            return i.a.createElement(h.a, {
                                onClick: t.props.onUnmute
                            }, i.a.createElement("div", {
                                className: "VideoAd-control"
                            }, i.a.createElement(p.a, {
                                className: "VideoAd-icon",
                                icon: "mute"
                            })))
                        }, t.renderSoundButton = function() {
                            return i.a.createElement(h.a, {
                                onClick: t.props.onMute
                            }, i.a.createElement("div", {
                                className: "VideoAd-control"
                            }, i.a.createElement(p.a, {
                                className: "VideoAd-icon",
                                icon: "audio"
                            })))
                        }, t
                    }
                    return a()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.isPaused,
                            n = e.isMuted,
                            r = e.playerSize,
                            a = r ? r[0] : 0;
                        return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                            className: "VideoAd-playback-controls",
                            style: {
                                width: a + "px"
                            }
                        }, t ? this.renderPlayButton() : this.renderPauseButton(), n ? this.renderMuteButton() : this.renderSoundButton()))
                    }, t
                }(i.a.PureComponent),
                f = n("C6mj"),
                g = n("T3U7"),
                v = n("08um"),
                C = n("o0o1"),
                E = n.n(C),
                y = n("yXPU"),
                S = n.n(y),
                b = n("ojxP"),
                _ = n.n(b);

            function k() {
                return (k = S()(E.a.mark(function e() {
                    return E.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([new Promise(function(e) {
                                    _()("https://imasdk.googleapis.com/js/sdkloader/ima3.js", e)
                                }), new Promise(function(e) {
                                    _()("https://content.jwplatform.com/libraries/LgLmI9tV.js", e)
                                })]);
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var O = n("WDAW");
            n.d(t, "a", function() {
                return B
            });
            var P = 1,
                w = 2e4,
                A = 20301,
                U = 20303,
                I = 20400,
                M = 20403,
                T = 20900,
                L = 20901,
                N = 21009,
                D = 21010,
                F = 21012,
                R = 21021,
                j = -1,
                H = -2,
                B = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).handlePlayerViewable = function(e) {
                            var t = e.viewable,
                                r = n.state,
                                a = r.adPlayed,
                                o = r.isPausedByUser,
                                i = t === P;
                            a && (i && !o ? n.play() : i || n.pause(), n.setState({
                                isPlayerVisible: i
                            }, function() {
                                n.props.onPlayerVisibilityChange(i)
                            }))
                        }, n.handlePlayerMute = function(e) {
                            var t = e.mute;
                            n.setState({
                                isMuted: t
                            })
                        }, n.handleAdClick = function() {
                            var e = n.props,
                                t = e.id,
                                r = e.onAdClick;
                            Object(g.a)("video_ad_clicked", {
                                id: t
                            }), r && r(t)
                        }, n.handleAdEnded = function() {
                            var e = n.props,
                                t = e.maxRepeats,
                                r = e.onVideoAdFinishes,
                                a = n.state.repeats;
                            n.setState({
                                adPlayed: !1,
                                repeats: a + 1
                            }, function() {
                                void 0 !== t && n.state.repeats >= t && (n.hideComponent(), r())
                            })
                        }, n.handleError = function(e) {
                            var t = n.props.onError;
                            clearTimeout(n.videoPlayerErrorTimer), -1 === [w, F, R, N, D, T, M, A, U, I, L, j, H].indexOf(e.adErrorCode) && (e.adUnit = n.props.id, u.a.warning("VideoAd error: " + e.message, e)), n.hideComponent(), t(e)
                        }, n.handleAdPause = function(e) {
                            var t = e.viewable === P;
                            n.setState({
                                isPaused: !0,
                                isPausedByUser: t
                            })
                        }, n.handleAdSuccess = function() {
                            var e = n.props.onAdsSuccess;
                            e && e()
                        }, n.handleAdPlay = function(e) {
                            var t = e.viewable,
                                r = n.state.startedPaused;
                            clearTimeout(n.videoPlayerErrorTimer);
                            var a = (r || t !== P) && n.videoPlayerInstance;
                            a && n.videoPlayerInstance.pause(), n.handleAdSuccess(), n.setState({
                                adPlayed: !0,
                                isPaused: a,
                                isPausedByUser: !1,
                                startedPaused: !1
                            })
                        }, n.handleAdStarted = function() {
                            n.props.onAdStarted(!0)
                        }, n.remountPlayer = function(e) {
                            n.state.hasInitProblems || (n.removePlayerInstance(), n.setState({
                                isDisabled: !1,
                                startedPaused: n.props.startPaused
                            }, function() {
                                Object(O.a)().then(function(t) {
                                    var r = t.isOutstream(e);
                                    n.videoPlayerInstance = t.displayVideoAd(e), n.initPlayerListeners(r)
                                })
                            }))
                        }, n.removePlayerInstance = function() {
                            n.videoPlayerInstance && (n.videoPlayerInstance.remove(), n.videoPlayerInstance = null)
                        }, n.hideComponent = function() {
                            n.removePlayerInstance(), n.setState({
                                adPlayed: !1,
                                isDisabled: !0
                            })
                        }, n.play = function() {
                            n.videoPlayerInstance && n.videoPlayerInstance.play && n.videoPlayerInstance.play()
                        }, n.pause = function() {
                            n.videoPlayerInstance && n.videoPlayerInstance.pause && n.videoPlayerInstance.pause()
                        }, n.mute = function() {
                            n.videoPlayerInstance && n.videoPlayerInstance.setMute && n.videoPlayerInstance.setMute(!0)
                        }, n.unmute = function() {
                            n.videoPlayerInstance && n.videoPlayerInstance.setMute && n.videoPlayerInstance.setMute(!1)
                        }, n.state = {
                            adPlayed: !1,
                            adType: "",
                            hasInitProblems: !1,
                            isDisabled: !1,
                            isMuted: !0,
                            isPaused: !1,
                            isPausedByUser: !1,
                            isPlayerVisible: !1,
                            monthlyPrice: l.a.goUpsellMonthlyPrice,
                            repeats: 0,
                            shouldShowAdHeading: !1,
                            startedPaused: t.startPaused
                        }, n
                    }
                    a()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this,
                            t = this.props.id;
                        Object(O.a)().then(function(n) {
                            var r = n.isRegistered(t),
                                a = !!n.getShowAdHeading(t),
                                o = n.getAdType(t) || "",
                                i = n.isOutstream(t);
                            e.videoPlayerSize = n.getVideoSize(t);
                            Object(f.b)() ? (e.handleError({
                                type: "adBlockerEnabled",
                                message: "Ad blocker is enabled. Video player instance will not be created.",
                                adErrorCode: w
                            }), e.setState({
                                hasInitProblems: !0
                            })) : r ? function() {
                                return k.apply(this, arguments)
                            }().then(function() {
                                e.setState({
                                    adType: o,
                                    hasInitProblems: !1,
                                    isDisabled: !r,
                                    shouldShowAdHeading: a
                                }, function() {
                                    e.videoPlayerInstance = n.displayVideoAd(t), e.initPlayerListeners(i)
                                })
                            }, function() {
                                e.setState({
                                    hasInitProblems: !0
                                }, function() {
                                    e.handleError({
                                        type: "playerLoading",
                                        message: "There was a failure when loading the JWPlayer lib"
                                    })
                                })
                            }) : e.setState({
                                adType: o,
                                hasInitProblems: !0,
                                isDisabled: !r,
                                shouldShowAdHeading: a
                            }, function() {
                                e.handleError({
                                    type: "adNotRegistered",
                                    message: "The provided Ad id has not been registered!"
                                })
                            })
                        }), window.QLoad && window.QLoad("Quizlet.AdMounted")
                    }, n.componentDidUpdate = function(e) {
                        this.props.shouldPlayVideo && this.props.shouldPlayVideo !== e.shouldPlayVideo && (this.play(), this.props.showControls || this.unmute())
                    }, n.componentWillUnmount = function() {
                        clearTimeout(this.videoPlayerErrorTimer), this.removePlayerInstance()
                    }, n.renderAdHeading = function() {
                        var e = this.props.id,
                            t = this.state.monthlyPrice;
                        return i.a.createElement(d.a, {
                            containerId: Object(v.b)(Object(v.g)(e)),
                            headingAlignment: this.props.headingAlignment,
                            monthlyPrice: t
                        })
                    }, n.render = function() {
                        var e = this.props.id,
                            t = this.state,
                            n = t.adType,
                            r = t.isDisabled,
                            a = c()("VideoAd", "VideoAd--" + e, "VideoAd--" + n, {
                                "VideoAd--disabled": r
                            });
                        return i.a.createElement("div", {
                            className: a
                        }, this.shouldShowAdHeading() ? this.renderAdHeading() : null, i.a.createElement("div", {
                            className: "VideoAd-playerWrapper"
                        }, i.a.createElement("div", {
                            id: Object(v.g)(e)
                        }), this.props.showControls ? i.a.createElement(m, {
                            isMuted: this.state.isMuted,
                            isPaused: this.state.isPaused,
                            isPlayerVisible: this.state.isPlayerVisible,
                            onMute: this.mute,
                            onPause: this.pause,
                            onPlay: this.play,
                            onUnmute: this.unmute,
                            playerSize: this.videoPlayerSize
                        }) : null))
                    }, n.initPlayerListeners = function(e) {
                        var t = this;
                        if (this.videoPlayerInstance) {
                            var n = this.props.startPaused;
                            (!e || e && n) && this.videoPlayerInstance.on("ready", function() {
                                t.videoPlayerInstance.play()
                            }), this.videoPlayerInstance.on("adError", this.handleError), this.videoPlayerInstance.on("error", this.handleError), this.videoPlayerInstance.on("setupError", this.handleError), this.videoPlayerInstance.on("adClick", this.handleAdClick), this.videoPlayerInstance.on("adComplete", this.handleAdEnded), this.videoPlayerInstance.on("adPause", this.handleAdPause), this.videoPlayerInstance.on("adPlay", this.handleAdPlay), this.videoPlayerInstance.on("adSkipped", this.handleAdEnded), this.videoPlayerInstance.on("adStarted", this.handleAdStarted), this.videoPlayerInstance.on("mute", this.handlePlayerMute), this.videoPlayerInstance.on("viewable", this.handlePlayerViewable), clearTimeout(this.videoPlayerErrorTimer), this.videoPlayerErrorTimer = window.setTimeout(function() {
                                t.handleError({
                                    type: "videoPlayerInstanceTimeout",
                                    message: "Video player took longer than 10s to run.",
                                    adErrorCode: j
                                })
                            }, 1e4)
                        } else this.handleError({
                            type: "videoPlayerInstanceNull",
                            message: "Failed to get a valid video player instance to show",
                            adErrorCode: H
                        })
                    }, n.shouldShowAdHeading = function() {
                        return !Object(f.b)() && this.state.shouldShowAdHeading
                    }, t
                }(i.a.Component);
            B.defaultProps = {
                showControls: !0,
                onAdStarted: function() {},
                onError: function() {},
                onPlayerVisibilityChange: function() {},
                onVideoAdFinishes: function() {},
                startPaused: !1,
                shouldPlayVideo: !1
            }
        },
        LszE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("q1tI"),
                a = n.n(r),
                o = n("TSYQ"),
                i = n.n(o);

            function s(e) {
                var t = e.inverted,
                    n = e.className,
                    r = i()("SiteLogo", n, {
                        "SiteLogo--inverted": !!t
                    });
                return a.a.createElement("div", {
                    "aria-label": "Quizlet",
                    className: r,
                    role: "img",
                    title: "Quizlet"
                }, a.a.createElement("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 244 53",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a.a.createElement("path", {
                    d: "M26.99 1.09c15.382 0 26.99 11.36 26.99 25.883 0 6.687-2.54 12.583-6.676 17.04l7.182 7.98H42.37l-2.49-2.847c-3.6 2.482-8.102 3.638-12.89 3.638C11.68 52.784 0 41.496 0 26.974 0 12.017 12.116 1.09 26.99 1.09zm0 41.7c2.03 0 3.844-.43 5.586-1.15L22.2 29.993h12.117l5.587 6.4c2.03-2.518 2.974-5.537 2.974-9.42 0-8.698-6.6-15.817-15.89-15.817-9.287 0-15.814 7.046-15.814 15.817 0 8.915 6.527 15.818 15.815 15.818zM61.035 15.76H71.99v20.706c0 4.89 3.048 6.686 6.676 6.686 3.627 0 6.675-1.797 6.675-6.686V15.758h10.956v21.64C96.296 48.04 88.026 53 78.666 53s-17.63-4.96-17.63-15.6V15.757zm42.75 36.235h10.81V15.758h-10.81v36.235zm-.992-45.69c0-3.56 2.92-6.303 6.36-6.303 3.518 0 6.36 2.743 6.36 6.303 0 3.485-2.842 6.23-6.36 6.23-3.44 0-6.36-2.745-6.36-6.23zm35.738 18.873h-16.74v-9.418h35.332l-20.15 26.817h19.133v9.418h-37.94l20.365-26.817zm23.67 26.817h10.81V1.883H162.2v50.11zm17.063-18.19c0-11.503 8.272-18.908 19.372-18.908 11.173 0 18.5 8.196 18.5 18.334 0 0 0 2.03-.217 3.684h-26.843c.218 4.314 3.48 6.883 9.648 6.883 6.966 0 10.883-2.085 12.987-3.523v9.347c-3.41 2.157-7.182 3.308-13.567 3.308-12.263 0-19.88-7.405-19.88-18.765v-.36zm26.99-4.026c0-3.235-3.337-5.967-7.618-5.967-4.498 0-8.27 2.66-8.488 5.967h16.105zm19.172-4.313h-4.86v-9.706h4.86V1.882h10.52v13.876H244v9.706h-8.054v26.53h-10.52v-26.53z",
                    fillRule: "evenodd"
                })))
            }
        },
        M3Qh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("zK28");

            function a() {
                return r.a.user ? r.a.derivedLocale : null
            }
        },
        Nxgj: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("TSYQ"),
                i = n.n(o),
                s = n("bvRJ");

            function c(e) {
                var t = e.className;
                return a.a.createElement(s.a, {
                    className: i()("GoogleIcon", t),
                    icon: "google-multicolor"
                })
            }
            var l = n("PqcE");
            n.d(t, "a", function() {
                return d
            });
            var u = n("bBvF").default;

            function d(e) {
                var t = e.label,
                    n = e.googleLoginUrl,
                    r = e.variant,
                    o = e.onClick,
                    i = e.title;
                return a.a.createElement(l.a, {
                    icon: a.a.createElement(c, null),
                    label: t,
                    linkTo: n,
                    onClick: o,
                    title: i,
                    variant: r
                })
            }
            d.defaultProps = {
                label: u("en-US", "Log in with Google")
            }
        },
        O97I: function(e, t, n) {
            "use strict";
            var r = n("mr8R");
            t.a = Object(r.a)(function() {
                return Promise.all([n.e(2), n.e(0), n.e(70)]).then(n.bind(null, "UQ0i"))
            })
        },
        PTpY: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("VbXa"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return a()(t, e), t.prototype.render = function() {
                        return i.a.createElement("div", {
                            className: "UpsellModalMessage"
                        }, this.props.children)
                    }, t
                }(o.Component)
        },
        Q051: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            });
            var r = n("fdo3");

            function a(e) {
                Object(r.b)(e.href)
            }

            function o(e) {
                e.preventDefault(), a(e.currentTarget)
            }
        },
        RF01: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = o(n("gDiQ")),
                a = o(n("ar35"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = (0, a.default)(r.default), e.exports = t.default
        },
        SCbk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("pVnL"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = n("Q051");

            function c(e) {
                return i.a.createElement("a", a()({}, e, {
                    onClick: s.a
                }))
            }
        },
        VPSI: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("KD7m");

            function a(e) {
                var t = e.queryParams,
                    n = e.searchAction,
                    a = void 0 === n ? "/subject/" : n,
                    o = e.searchInput,
                    i = Object(r.a)(o.replace(/\s+/g, " "));
                if (!i) return !1;
                var s = encodeURIComponent(i).replace(/\-/g, "%252D").replace(/%20/g, "-").replace(/%2F/g, "%252F"),
                    c = "/" + a.replace(/^\//m, "") + s + "/";
                void 0 !== t && (c = c + "?" + t), window.location.href = c
            }
        },
        XUBu: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return m
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "e", function() {
                return g
            }), n.d(t, "g", function() {
                return v
            }), n.d(t, "b", function() {
                return C
            }), n.d(t, "a", function() {
                return y
            }), n.d(t, "i", function() {
                return S
            }), n.d(t, "j", function() {
                return b
            }), n.d(t, "k", function() {
                return _
            }), n.d(t, "m", function() {
                return k
            }), n.d(t, "l", function() {
                return O
            }), n.d(t, "n", function() {
                return P
            }), n.d(t, "h", function() {
                return w
            }), n.d(t, "c", function() {
                return U
            });
            var r, a = n("pVnL"),
                o = n.n(a),
                i = n("YDJX"),
                s = n("peh1"),
                c = n("JPcv"),
                l = n("xhj2"),
                u = n("Ri2w"),
                d = n("mEm4"),
                p = Object(d.a)("SITE_NAV", {
                    CLEAR_CLASS_NOTIFICATION: null,
                    CLOSE_MOBILE_NAV: null,
                    DECLINE_INVITE: null,
                    OPEN_CREATE_CLASS_MODAL_FOR_TEACHER_ONBOARDING_TEST: null,
                    OPEN_MOBILE_NAV: null,
                    TOGGLE_CLASS_PROGRESS_UPSELL_MODAL: null,
                    TOGGLE_CREATE_CLASS_MODAL: null,
                    TOGGLE_CREATE_FOLDER_MODAL: null,
                    TOGGLE_CREATE_IMAGE_SET_UPSELL_MODAL: null,
                    TOGGLE_CREATE_SET_MODAL: null,
                    TOGGLE_MAX_CLASSES_UPSELL_MODAL: null
                }),
                h = ((r = {})[p.CLEAR_CLASS_NOTIFICATION] = function(e, t) {
                    var n = t.payload;
                    return e.update("classMemberships", function(e) {
                        return e.map(function(e) {
                            return e.get("id") === n.id ? e.set("numNotifications", 0) : e
                        })
                    })
                }, r[p.CLOSE_MOBILE_NAV] = function(e) {
                    return e.set("isMobileNavOpen", !1)
                }, r[p.DECLINE_INVITE] = function(e, t) {
                    var n = t.payload,
                        r = e.update("classInvitations", function(e) {
                            return e.map(function(e) {
                                return e && e.get("id") === n.id ? e.set("_dismissed", !0) : e
                            })
                        }),
                        a = r.get("classInvitations").filter(function(e) {
                            return !e.get("_dismissed")
                        }).first(),
                        o = a ? a.get("id") : null;
                    return r.set("activeInviteId", o)
                }, r[p.TOGGLE_CLASS_PROGRESS_UPSELL_MODAL] = function(e) {
                    return e.update("isClassProgressUpsellModalOpen", function(e) {
                        return !e
                    })
                }, r[p.TOGGLE_CREATE_CLASS_MODAL] = function(e) {
                    return e.update("isCreateClassModalOpen", function(e) {
                        return !e
                    }).update("isTriggeredFromTeacherTips", function() {
                        return !1
                    })
                }, r[p.TOGGLE_CREATE_FOLDER_MODAL] = function(e) {
                    return e.update("isCreateFolderModalOpen", function(e) {
                        return !e
                    })
                }, r[p.TOGGLE_CREATE_IMAGE_SET_UPSELL_MODAL] = function(e) {
                    return e.update("isCreateImageSetUpsellModalOpen", function(e) {
                        return !e
                    })
                }, r[p.TOGGLE_CREATE_SET_MODAL] = function(e) {
                    return e.update("isCreateSetModalOpen", function(e) {
                        return !e
                    })
                }, r[p.TOGGLE_MAX_CLASSES_UPSELL_MODAL] = function(e) {
                    return e.update("isUpsellModalMaxClassesOpen", function(e) {
                        return !e
                    })
                }, r[p.OPEN_CREATE_CLASS_MODAL_FOR_TEACHER_ONBOARDING_TEST] = function(e) {
                    return e.update("isCreateClassModalOpen", function() {
                        return !0
                    }).update("isTriggeredFromTeacherTips", function() {
                        return !0
                    })
                }, r[p.OPEN_MOBILE_NAV] = function(e) {
                    return e.set("isMobileNavOpen", !0)
                }, r),
                m = function(e, t, n) {
                    return n.get("siteNav")
                },
                f = Object(s.createSelector)(m, function(e) {
                    return e.get("canCreateClass")
                }),
                g = Object(s.createSelector)(m, function(e) {
                    return e.get("numClassesUsed") < e.get("numClassesAllowed")
                }),
                v = Object(i.createAction)(p.OPEN_MOBILE_NAV),
                C = Object(i.createAction)(p.CLOSE_MOBILE_NAV),
                E = Object(i.createAction)(p.DECLINE_INVITE),
                y = Object(i.createAction)(p.CLEAR_CLASS_NOTIFICATION),
                S = Object(i.createAction)(p.TOGGLE_CLASS_PROGRESS_UPSELL_MODAL),
                b = Object(i.createAction)(p.TOGGLE_CREATE_CLASS_MODAL),
                _ = (Object(i.createAction)(p.OPEN_CREATE_CLASS_MODAL_FOR_TEACHER_ONBOARDING_TEST), Object(i.createAction)(p.TOGGLE_CREATE_FOLDER_MODAL)),
                k = Object(i.createAction)(p.TOGGLE_CREATE_SET_MODAL),
                O = Object(i.createAction)(p.TOGGLE_CREATE_IMAGE_SET_UPSELL_MODAL),
                P = Object(i.createAction)(p.TOGGLE_MAX_CLASSES_UPSELL_MODAL),
                w = function(e) {
                    var t = e.id,
                        n = e.path;
                    return function(e) {
                        e(E({
                            id: t
                        })), Object(u.f)(n)
                    }
                },
                A = function(e) {
                    return Object(c.fromJS)(o()({}, e, {
                        activeInviteId: e.classInvitations.length > 0 ? e.classInvitations[0].id : null,
                        isCreateClassModalOpen: !1,
                        isCreateFolderModalOpen: !1,
                        isCreateSetModalOpen: !1,
                        isMobileNavOpen: !1,
                        isUpsellModalMaxClassesOpen: !1,
                        isUpsellModalOpen: !1
                    }))
                };

            function U(e) {
                var t = Object(i.handleActions)(h, A(e));
                l.a.register({
                    siteNav: t
                })
            }
        },
        "XUS/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("VbXa"),
                a = n.n(r),
                o = n("TSYQ"),
                i = n.n(o),
                s = n("q1tI"),
                c = n.n(s),
                l = n("bvRJ"),
                u = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return a()(t, e), t.prototype.render = function() {
                        var e = i()("UpsellModalFeature", {
                            "UpsellModalFeature--fill": "fill" === this.props.width
                        });
                        return c.a.createElement("div", {
                            className: e
                        }, c.a.createElement(l.a, {
                            className: "UpsellModalFeature-icon",
                            icon: this.props.icon
                        }), c.a.createElement("div", {
                            className: "UpsellModalFeature-text"
                        }, this.props.headline && c.a.createElement("span", {
                            className: "UpsellModalFeature-headline"
                        }, this.props.headline), this.props.children && c.a.createElement("span", {
                            className: "UpsellModalFeature-description"
                        }, this.props.children)))
                    }, t
                }(s.Component)
        },
        Y0sT: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r, a = n("mOtT"),
                o = n("ZR02"),
                i = n("Yqds"),
                s = (r = i) && r.__esModule ? r : {
                    default: r
                },
                c = n("/yDZ"),
                l = n("mHnE");
            t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.getCurrentLocation,
                    n = e.getUserConfirmation,
                    r = e.pushLocation,
                    i = e.replaceLocation,
                    u = e.go,
                    d = e.keyLength,
                    p = void 0,
                    h = void 0,
                    m = [],
                    f = [],
                    g = [],
                    v = function(e) {
                        var t = h && h.action === c.POP ? g.indexOf(h.key) : p ? g.indexOf(p.key) : -1;
                        (p = e).action === c.PUSH ? g = [].concat(g.slice(0, t + 1), [p.key]) : p.action === c.REPLACE && (g[t] = p.key), f.forEach(function(e) {
                            return e(p)
                        })
                    },
                    C = function(e) {
                        var t, d;
                        p && (0, l.locationsAreEqual)(p, e) || h && (0, l.locationsAreEqual)(h, e) || (h = e, t = e, d = function(t) {
                            if (h === e)
                                if (h = null, t) {
                                    if (e.action === c.PUSH) {
                                        var n = (0, o.createPath)(p);
                                        (0, o.createPath)(e) === n && (0, l.statesAreEqual)(p.state, e.state) && (e.action = c.REPLACE)
                                    }
                                    e.action === c.POP ? v(e) : e.action === c.PUSH ? !1 !== r(e) && v(e) : e.action === c.REPLACE && !1 !== i(e) && v(e)
                                } else if (p && e.action === c.POP) {
                                var a = g.indexOf(p.key),
                                    s = g.indexOf(e.key); - 1 !== a && -1 !== s && u(a - s)
                            }
                        }, (0, a.loopAsync)(m.length, function(e, n, r) {
                            (0, s.default)(m[e], t, function(e) {
                                return null != e ? r(e) : n()
                            })
                        }, function(e) {
                            n && "string" == typeof e ? n(e, function(e) {
                                return d(!1 !== e)
                            }) : d(!1 !== e)
                        }))
                    },
                    E = function() {
                        return Math.random().toString(36).substr(2, d || 6)
                    },
                    y = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E();
                        return (0, l.createLocation)(e, t, n)
                    };
                return {
                    getCurrentLocation: t,
                    listenBefore: function(e) {
                        return m.push(e),
                            function() {
                                return m = m.filter(function(t) {
                                    return t !== e
                                })
                            }
                    },
                    listen: function(e) {
                        return f.push(e),
                            function() {
                                return f = f.filter(function(t) {
                                    return t !== e
                                })
                            }
                    },
                    transitionTo: C,
                    push: function(e) {
                        return C(y(e, c.PUSH))
                    },
                    replace: function(e) {
                        return C(y(e, c.REPLACE))
                    },
                    go: u,
                    goBack: function() {
                        return u(-1)
                    },
                    goForward: function() {
                        return u(1)
                    },
                    createKey: E,
                    createPath: o.createPath,
                    createHref: function(e) {
                        return (0, o.createPath)(e)
                    },
                    createLocation: y
                }
            }
        },
        "YU+Q": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("pVnL"),
                a = n.n(r),
                o = n("9h4+"),
                i = n("bzNP"),
                s = n("bBvF").default;

            function c(e, t) {
                void 0 === t && (t = {}), QWait("qrecurly", function() {
                    window.recurly.configure({
                        fields: {
                            all: {
                                style: a()({
                                    fontColor: o.b,
                                    fontSize: i.c.fontSize + "px",
                                    fontSmoothing: "antialiased",
                                    fontWeight: i.c.fontWeight,
                                    lineHeight: i.c.lineHeight + "px",
                                    placeholder: {
                                        color: o.c
                                    }
                                }, t)
                            },
                            card: {
                                displayIcon: !1,
                                style: {
                                    fontSize: i.d.fontSize + "px",
                                    placeholder: {
                                        content: {
                                            number: "···· ···· ···· ····",
                                            cvv: s("en-US", "CVC"),
                                            expiry: s("en-US", "MM / YY")
                                        }
                                    }
                                }
                            },
                            number: {
                                style: {
                                    fontFamily: "Roboto",
                                    placeholder: {
                                        content: "···· ···· ···· ····"
                                    }
                                }
                            },
                            month: {
                                style: {
                                    fontFamily: "Roboto",
                                    placeholder: {
                                        content: s("en-US", "MM")
                                    }
                                }
                            },
                            year: {
                                style: {
                                    fontFamily: "Roboto",
                                    placeholder: {
                                        content: s("en-US", "YY")
                                    }
                                }
                            },
                            cvv: {
                                style: {
                                    fontFamily: "Roboto",
                                    placeholder: {
                                        content: s("en-US", "CVC")
                                    }
                                }
                            }
                        },
                        publicKey: e
                    })
                })
            }
        },
        YleJ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("T3U7"),
                a = n("6MTt"),
                o = n("zK28");

            function i(e) {
                var t = o.a.user && a.a.getVariationWithoutEnrolling("CreateSetNavigation[default,subscriptions]");
                Object(r.a)("create_set_navigation_" + e + "_click", {
                    variant: t
                })
            }
        },
        Yqds: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r, a = n("2W6z");
            (r = a) && r.__esModule;
            t.default = function(e, t, n) {
                var r = e(t, n);
                e.length < 2 && n(r)
            }
        },
        ZFOp: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
        },
        ZR02: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.createPath = t.parsePath = t.getQueryStringValueFromPath = t.stripQueryStringValueFromPath = t.addQueryStringValueToPath = void 0;
            var r, a = n("2W6z");
            (r = a) && r.__esModule;
            t.addQueryStringValueToPath = function(e, t, n) {
                var r = o(e),
                    a = r.pathname,
                    s = r.search,
                    c = r.hash;
                return i({
                    pathname: a,
                    search: s + (-1 === s.indexOf("?") ? "?" : "&") + t + "=" + n,
                    hash: c
                })
            }, t.stripQueryStringValueFromPath = function(e, t) {
                var n = o(e),
                    r = n.pathname,
                    a = n.search,
                    s = n.hash;
                return i({
                    pathname: r,
                    search: a.replace(new RegExp("([?&])" + t + "=[a-zA-Z0-9]+(&?)"), function(e, t, n) {
                        return "?" === t ? t : n
                    }),
                    hash: s
                })
            }, t.getQueryStringValueFromPath = function(e, t) {
                var n = o(e).search.match(new RegExp("[?&]" + t + "=([a-zA-Z0-9]+)"));
                return n && n[1]
            };
            var o = t.parsePath = function(e) {
                    var t, n, r = null == (n = (t = e).match(/^(https?:)?\/\/[^\/]*/)) ? t : t.substring(n[0].length),
                        a = "",
                        o = "",
                        i = r.indexOf("#"); - 1 !== i && (o = r.substring(i), r = r.substring(0, i));
                    var s = r.indexOf("?");
                    return -1 !== s && (a = r.substring(s), r = r.substring(0, s)), "" === r && (r = "/"), {
                        pathname: r,
                        search: a,
                        hash: o
                    }
                },
                i = t.createPath = function(e) {
                    if (null == e || "string" == typeof e) return e;
                    var t = e.basename,
                        n = e.pathname,
                        r = e.search,
                        a = e.hash,
                        o = (t || "") + n;
                    return r && "?" !== r && (o += r), a && (o += a), o
                }
        },
        ar35: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = void 0;
                i && (t = (0, o.default)(e)());
                return t
            };
            var r, a = n("n/dV"),
                o = (r = a) && r.__esModule ? r : {
                    default: r
                };
            var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = t.default
        },
        bzNP: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            });
            var r = {
                    fontSize: 12,
                    fontWeight: 400,
                    lineHeight: 16
                },
                a = {
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 18
                },
                o = {
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: 19
                },
                i = {
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: 22
                }
        },
        cKUA: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.go = t.replaceLocation = t.pushLocation = t.startListener = t.getUserConfirmation = t.getCurrentLocation = void 0;
            var r = n("mHnE"),
                a = n("Ad4u"),
                o = n("rTRU"),
                i = n("ZR02"),
                s = n("HaSr"),
                c = s.canUseDOM && !(0, a.supportsPopstateOnHashchange)(),
                l = function(e) {
                    var t = e && e.key;
                    return (0, r.createLocation)({
                        pathname: window.location.pathname,
                        search: window.location.search,
                        hash: window.location.hash,
                        state: t ? (0, o.readState)(t) : void 0
                    }, void 0, t)
                },
                u = t.getCurrentLocation = function() {
                    var e = void 0;
                    try {
                        e = window.history.state || {}
                    } catch (t) {
                        e = {}
                    }
                    return l(e)
                },
                d = (t.getUserConfirmation = function(e, t) {
                    return t(window.confirm(e))
                }, t.startListener = function(e) {
                    var t = function(t) {
                        (0, a.isExtraneousPopstateEvent)(t) || e(l(t.state))
                    };
                    (0, a.addEventListener)(window, "popstate", t);
                    var n = function() {
                        return e(u())
                    };
                    return c && (0, a.addEventListener)(window, "hashchange", n),
                        function() {
                            (0, a.removeEventListener)(window, "popstate", t), c && (0, a.removeEventListener)(window, "hashchange", n)
                        }
                }, function(e, t) {
                    var n = e.state,
                        r = e.key;
                    void 0 !== n && (0, o.saveState)(r, n), t({
                        key: r
                    }, (0, i.createPath)(e))
                });
            t.pushLocation = function(e) {
                return d(e, function(e, t) {
                    return window.history.pushState(e, null, t)
                })
            }, t.replaceLocation = function(e) {
                return d(e, function(e, t) {
                    return window.history.replaceState(e, null, t)
                })
            }, t.go = function(e) {
                e && window.history.go(e)
            }
        },
        "cr+I": function(e, t, n) {
            "use strict";
            var r = n("ZFOp"),
                a = n("MgzW");

            function o(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
            }
            t.extract = function(e) {
                return e.split("?")[1] || ""
            }, t.parse = function(e, t) {
                var n = function(e) {
                        var t;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, n, r) {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
                                };
                            case "bracket":
                                return function(e, n, r) {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                                };
                            default:
                                return function(e, t, n) {
                                    void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                                }
                        }
                    }(t = a({
                        arrayFormat: "none"
                    }, t)),
                    r = Object.create(null);
                return "string" != typeof e ? r : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
                    var t = e.replace(/\+/g, " ").split("="),
                        a = t.shift(),
                        o = t.length > 0 ? t.join("=") : void 0;
                    o = void 0 === o ? null : decodeURIComponent(o), n(decodeURIComponent(a), o, r)
                }), Object.keys(r).sort().reduce(function(e, t) {
                    var n = r[t];
                    return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) {
                            return Number(e) - Number(t)
                        }).map(function(e) {
                            return t[e]
                        }) : t
                    }(n) : e[t] = n, e
                }, Object.create(null))) : r
            }, t.stringify = function(e, t) {
                var n = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, n, r) {
                                return null === n ? [o(t, e), "[", r, "]"].join("") : [o(t, e), "[", o(r, e), "]=", o(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? o(t, e) : [o(t, e), "[]=", o(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? o(t, e) : [o(t, e), "=", o(n, e)].join("")
                            }
                    }
                }(t = a({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, t));
                return e ? Object.keys(e).sort().map(function(r) {
                    var a = e[r];
                    if (void 0 === a) return "";
                    if (null === a) return o(r, t);
                    if (Array.isArray(a)) {
                        var i = [];
                        return a.slice().forEach(function(e) {
                            void 0 !== e && i.push(n(r, e, i.length))
                        }), i.join("&")
                    }
                    return o(r, t) + "=" + o(a, t)
                }).filter(function(e) {
                    return e.length > 0
                }).join("&") : ""
            }
        },
        dHOp: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("pVnL"),
                a = n.n(r),
                o = "google-oauth-redirector",
                i = "fb-oauth-redirector";

            function s(e) {
                var t = e.oauthRedirectorUri,
                    n = e.redirect,
                    r = void 0 === n ? null : n,
                    o = e.reauthenticate,
                    i = void 0 !== o && o,
                    s = e.customParams,
                    c = void 0 === s ? {} : s,
                    l = r;
                null === l && (l = window.location.pathname + window.location.search);
                var u, d = {
                    from: l
                };
                return i && (d = a()({}, d, {
                    reauthenticate: "1"
                })), c && (d = a()({}, d, {
                    customParams: JSON.stringify(c)
                })), "/" + t + "?" + (u = d, Object.keys(u).map(function(e) {
                    return [e, u[e]].map(encodeURIComponent).join("=")
                }).join("&"))
            }

            function c(e) {
                var t = e.redirect,
                    n = void 0 === t ? null : t,
                    r = e.reauthenticate,
                    a = void 0 !== r && r,
                    i = e.customParams;
                return s({
                    oauthRedirectorUri: o,
                    redirect: n,
                    reauthenticate: a,
                    customParams: void 0 === i ? {} : i
                })
            }

            function l(e) {
                var t = e.redirect,
                    n = void 0 === t ? null : t,
                    r = e.reauthenticate,
                    a = void 0 !== r && r,
                    o = e.customParams;
                return s({
                    oauthRedirectorUri: i,
                    redirect: n,
                    reauthenticate: a,
                    customParams: void 0 === o ? {} : o
                })
            }
        },
        dan0: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.routerReducer = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.type,
                    i = t.payload;
                if (n === a) return r({}, e, {
                    locationBeforeTransitions: i
                });
                return e
            };
            var a = t.LOCATION_CHANGE = "@@router/LOCATION_CHANGE",
                o = {
                    locationBeforeTransitions: null
                }
        },
        fkdw: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("pVnL"),
                a = n.n(r),
                o = n("QR21"),
                i = n("zK28"),
                s = n("og3H"),
                c = n("sLV1");

            function l(e, t, n, r, l) {
                var u = {
                    agent: window.navigator.userAgent,
                    click_category: t,
                    click_name: n,
                    client_timestamp: Object(c.d)(),
                    platform: s.D.WEB,
                    screen_name: e,
                    action: l,
                    uid: i.a.uid,
                    user_id: i.a.user ? i.a.user.id : null
                };
                r && (u = a()({}, u, r)), Object(o.a)("navigation_events", u)
            }
        },
        gDiQ: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                a = d(n("QLaP")),
                o = n("HaSr"),
                i = u(n("cKUA")),
                s = u(n("ncWH")),
                c = n("Ad4u"),
                l = d(n("Y0sT"));

            function u(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o.canUseDOM || (0, a.default)(!1);
                var t = e.forceRefresh || !(0, c.supportsHistory)() ? s : i,
                    n = t.getUserConfirmation,
                    u = t.getCurrentLocation,
                    d = t.pushLocation,
                    p = t.replaceLocation,
                    h = t.go,
                    m = (0, l.default)(r({
                        getUserConfirmation: n
                    }, e, {
                        getCurrentLocation: u,
                        pushLocation: d,
                        replaceLocation: p,
                        go: h
                    })),
                    f = 0,
                    g = void 0,
                    v = function(e, t) {
                        1 == ++f && (g = i.startListener(m.transitionTo));
                        var n = t ? m.listenBefore(e) : m.listen(e);
                        return function() {
                            n(), 0 == --f && g()
                        }
                    };
                return r({}, m, {
                    listenBefore: function(e) {
                        return v(e, !0)
                    },
                    listen: function(e) {
                        return v(e, !1)
                    }
                })
            }
        },
        lHBz: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            });
            var r = n("xhj2"),
                a = n("RF01"),
                o = n.n(a),
                i = n("L3Ur");
            r.a.register({
                router: i.routerReducer
            });
            var s = function(e) {
                return e.get("router").locationBeforeTransitions
            };
            t.a = Object(i.syncHistoryWithStore)(o.a, r.b, {
                selectLocationState: function(e) {
                    return e.get("router")
                }
            })
        },
        mHnE: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.locationsAreEqual = t.statesAreEqual = t.createLocation = t.createQuery = void 0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = c(n("QLaP")),
                i = (c(n("2W6z")), n("ZR02")),
                s = n("/yDZ");

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.createQuery = function(e) {
                return a(Object.create(null), e)
            }, t.createLocation = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.POP,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = "string" == typeof e ? (0, i.parsePath)(e) : e;
                return {
                    pathname: r.pathname || "/",
                    search: r.search || "",
                    hash: r.hash || "",
                    state: r.state,
                    action: t,
                    key: n
                }
            };
            var l = function(e) {
                    return "[object Date]" === Object.prototype.toString.call(e)
                },
                u = t.statesAreEqual = function e(t, n) {
                    if (t === n) return !0;
                    var a = void 0 === t ? "undefined" : r(t);
                    if (a !== (void 0 === n ? "undefined" : r(n))) return !1;
                    if ("function" === a && (0, o.default)(!1), "object" === a) {
                        if (l(t) && l(n) && (0, o.default)(!1), !Array.isArray(t)) {
                            var i = Object.keys(t),
                                s = Object.keys(n);
                            return i.length === s.length && i.every(function(r) {
                                return e(t[r], n[r])
                            })
                        }
                        return Array.isArray(n) && t.length === n.length && t.every(function(t, r) {
                            return e(t, n[r])
                        })
                    }
                    return !1
                };
            t.locationsAreEqual = function(e, t) {
                return e.key === t.key && e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && u(e.state, t.state)
            }
        },
        mOtT: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            t.loopAsync = function(e, t, n) {
                var r = 0,
                    a = !1,
                    o = !1,
                    i = !1,
                    s = void 0,
                    c = function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        a = !0, o ? s = t : n.apply(void 0, t)
                    };
                ! function l() {
                    if (!a && (i = !0, !o)) {
                        for (o = !0; !a && r < e && i;) i = !1, t(r++, l, c);
                        o = !1, a ? n.apply(void 0, s) : r >= e && i && (a = !0, n())
                    }
                }()
            }
        },
        mahw: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var r = n("8OQS"),
                a = n.n(r),
                o = n("VbXa"),
                i = n.n(o),
                s = n("q1tI"),
                c = n.n(s),
                l = n("bvRJ"),
                u = n("ugal"),
                d = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.renderBadge = function() {
                        return c.a.createElement("span", {
                            className: "MenuItemWithIcon-featureBadge"
                        }, this.props.badgeText)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.icon,
                            n = e.iconPosition,
                            r = e.iconSize,
                            o = e.text,
                            i = a()(e, ["icon", "iconPosition", "iconSize", "text"]);
                        return c.a.createElement(u.a, i, c.a.createElement("span", {
                            className: "MenuItemWithIcon-inner"
                        }, c.a.createElement(l.a, {
                            className: "MenuItemWithIcon-" + n,
                            icon: t,
                            size: r
                        }), this.props.badgeText ? this.renderBadge() : null, c.a.createElement("span", {
                            className: "MenuItemWithIcon-text"
                        }, o)))
                    }, t
                }(c.a.PureComponent);
            d.defaultProps = {
                iconPosition: "left",
                iconSize: "medium"
            }
        },
        mr8R: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("8OQS"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = n("4K/9"),
                c = n("47yS"),
                l = function() {
                    return i.a.createElement("div", {
                        className: "LazilyLoadingPlaceholder"
                    }, i.a.createElement(c.a, {
                        size: "large"
                    }))
                };

            function u(e, t) {
                void 0 === t && (t = {});
                var n = i.a.lazy(function() {
                        return Object(s.a)(5, e)
                    }),
                    r = function(e) {
                        var r = e.innerRef,
                            o = e.loadingPlaceholder,
                            s = a()(e, ["innerRef", "loadingPlaceholder"]);
                        return r && (s.ref = r), i.a.createElement(i.a.Suspense, {
                            fallback: o || (t.withSpinner ? i.a.createElement(l, null) : i.a.createElement(i.a.Fragment, null))
                        }, i.a.createElement(n, s))
                    };
                return r.preload = function() {
                    Promise.resolve(e())
                }, r
            }
        },
        "n/dV": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                return function(t) {
                    var n = (0, r.default)((0, a.default)(e))(t);
                    return n
                }
            };
            var r = o(n("A00f")),
                a = o(n("EVih"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        ncWH: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.replaceLocation = t.pushLocation = t.getCurrentLocation = t.go = t.getUserConfirmation = void 0;
            var r = n("cKUA");
            Object.defineProperty(t, "getUserConfirmation", {
                enumerable: !0,
                get: function() {
                    return r.getUserConfirmation
                }
            }), Object.defineProperty(t, "go", {
                enumerable: !0,
                get: function() {
                    return r.go
                }
            });
            var a = n("mHnE"),
                o = n("ZR02");
            t.getCurrentLocation = function() {
                return (0, a.createLocation)(window.location)
            }, t.pushLocation = function(e) {
                return window.location.href = (0, o.createPath)(e), !1
            }, t.replaceLocation = function(e) {
                return window.location.replace((0, o.createPath)(e)), !1
            }
        },
        ojxP: function(e, t, n) {
            var r, a, o;
            /*!
             * $script.js JS loader & dependency manager
             * https://github.com/ded/script.js
             * (c) Dustin Diaz 2014 | License MIT
             */
            /*!
             * $script.js JS loader & dependency manager
             * https://github.com/ded/script.js
             * (c) Dustin Diaz 2014 | License MIT
             */
            o = function() {
                var e, t, n = document,
                    r = n.getElementsByTagName("head")[0],
                    a = !1,
                    o = "push",
                    i = "readyState",
                    s = "onreadystatechange",
                    c = {},
                    l = {},
                    u = {},
                    d = {};

                function p(e, t) {
                    for (var n = 0, r = e.length; n < r; ++n)
                        if (!t(e[n])) return a;
                    return 1
                }

                function h(e, t) {
                    p(e, function(e) {
                        return !t(e)
                    })
                }

                function m(t, n, r) {
                    t = t[o] ? t : [t];
                    var a = n && n.call,
                        i = a ? n : r,
                        s = a ? t.join("") : n,
                        g = t.length;

                    function v(e) {
                        return e.call ? e() : c[e]
                    }

                    function C() {
                        if (!--g)
                            for (var e in c[s] = 1, i && i(), u) p(e.split("|"), v) && !h(u[e], v) && (u[e] = [])
                    }
                    return setTimeout(function() {
                        h(t, function t(n, r) {
                            return null === n ? C() : (r || /^https?:\/\//.test(n) || !e || (n = -1 === n.indexOf(".js") ? e + n + ".js" : e + n), d[n] ? (s && (l[s] = 1), 2 == d[n] ? C() : setTimeout(function() {
                                t(n, !0)
                            }, 0)) : (d[n] = 1, s && (l[s] = 1), void f(n, C)))
                        })
                    }, 0), m
                }

                function f(e, a) {
                    var o, c = n.createElement("script");
                    c.onload = c.onerror = c[s] = function() {
                        c[i] && !/^c|loade/.test(c[i]) || o || (c.onload = c[s] = null, o = 1, d[e] = 2, a())
                    }, c.async = 1, c.src = t ? e + (-1 === e.indexOf("?") ? "?" : "&") + t : e, r.insertBefore(c, r.lastChild)
                }
                return m.get = f, m.order = function(e, t, n) {
                    ! function r(a) {
                        a = e.shift(), e.length ? m(a, r) : m(a, t, n)
                    }()
                }, m.path = function(t) {
                    e = t
                }, m.urlArgs = function(e) {
                    t = e
                }, m.ready = function(e, t, n) {
                    e = e[o] ? e : [e];
                    var r, a = [];
                    return !h(e, function(e) {
                        c[e] || a[o](e)
                    }) && p(e, function(e) {
                        return c[e]
                    }) ? t() : (r = e.join("|"), u[r] = u[r] || [], u[r][o](t), n && n(a)), m
                }, m.done = function(e) {
                    m([null], e)
                }, m
            }, e.exports ? e.exports = o() : void 0 === (a = "function" == typeof(r = o) ? r.call(t, n, t, e) : r) || (e.exports = a)
        },
        qbFX: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return g
            });
            var r = n("VbXa"),
                a = n.n(r),
                o = n("t1Ez"),
                i = n("JxFz"),
                s = n("Pxp3"),
                c = n("E/Xc"),
                l = n("og3H"),
                u = n("17x9"),
                d = n.n(u),
                p = n("q1tI"),
                h = n.n(p),
                m = n("TtcH"),
                f = n("bBvF").default,
                g = function(e) {
                    function t(t, n) {
                        var r;
                        if ((r = e.call(this, t, n) || this).getMonthlyPrice = function() {
                                switch (r.context.productType) {
                                    case l.E.RECURRING_ONE_YEAR_GO:
                                    case l.E.RECURRING_ONE_YEAR_GO_TIER2:
                                    case l.E.RECURRING_ONE_YEAR_GO_TIER3:
                                        return Object(m.f)();
                                    default:
                                        return Object(m.i)()
                                }
                            }, r.handleButtonClick = function() {
                                r.context.inlineCheckoutStart(r.context.productType, r.props.source)
                            }, r.context.inlineCheckout && r.props.onClick) throw new Error("Cannot pass a custom onClick to <UpsellModalUpgradeButton> when its parent <UpsellModal> has inlineCheckout=true");
                        return r
                    }
                    a()(t, e);
                    var n = t.prototype;
                    return n.renderText = function() {
                        return this.props.shouldShowFreeTrial && Object(m.o)() ? h.a.createElement(h.a.Fragment, null, Object(m.d)()) : this.props.customText ? h.a.createElement(h.a.Fragment, null, this.props.customText) : this.props.showMonthlyPricing ? h.a.createElement(o.a, {
                            _precomputed: f("en-US", "Upgrade ({monthlyPrice}/month)", {
                                monthlyPrice: this.getMonthlyPrice()
                            })
                        }) : h.a.createElement(o.a, {
                            _precomputed: f("en-US", "Upgrade ({annualPrice}/year)", {
                                annualPrice: this.props.price
                            })
                        })
                    }, n.renderLink = function() {
                        return h.a.createElement(i.a, {
                            hero: !0,
                            linkTo: Object(m.h)(this.props.source),
                            linkToNewTab: this.props.shouldOpenNewTab
                        }, this.renderText())
                    }, n.renderButton = function() {
                        return h.a.createElement(c.a, {
                            hero: !0,
                            loading: "loading" === this.context.inlineCheckoutState,
                            onClick: this.handleButtonClick
                        }, this.renderText())
                    }, n.render = function() {
                        return h.a.createElement(s.a, {
                            className: "UpsellModalUpgradeButton",
                            onClick: this.context.inlineCheckout ? null : this.props.onClick
                        }, this.context.inlineCheckout ? this.renderButton() : this.renderLink())
                    }, t
                }(h.a.Component);
            g.contextTypes = {
                inlineCheckout: d.a.bool,
                inlineCheckoutStart: d.a.func,
                inlineCheckoutState: d.a.string,
                productType: d.a.number
            }, g.defaultProps = {
                monthlyPrice: Object(m.i)(),
                price: Object(m.j)(),
                shouldOpenNewTab: !0,
                shouldShowFreeTrial: !1,
                showMonthlyPricing: !1
            }
        },
        rTRU: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.readState = t.saveState = void 0;
            var r, a = n("2W6z");
            (r = a) && r.__esModule;
            var o = {
                    QuotaExceededError: !0,
                    QUOTA_EXCEEDED_ERR: !0
                },
                i = {
                    SecurityError: !0
                },
                s = function(e) {
                    return "@@History/" + e
                };
            t.saveState = function(e, t) {
                if (window.sessionStorage) try {
                    null == t ? window.sessionStorage.removeItem(s(e)) : window.sessionStorage.setItem(s(e), JSON.stringify(t))
                } catch (n) {
                    if (i[n.name]) return;
                    if (o[n.name] && 0 === window.sessionStorage.length) return;
                    throw n
                }
            }, t.readState = function(e) {
                var t = void 0;
                try {
                    t = window.sessionStorage.getItem(s(e))
                } catch (n) {
                    if (i[n.name]) return
                }
                if (t) try {
                    return JSON.parse(t)
                } catch (n) {}
            }
        },
        su65: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("VbXa"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                s = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return a()(t, e), t.prototype.render = function() {
                        return i.a.createElement("strong", {
                            className: "UIStrong"
                        }, this.props.children)
                    }, t
                }(i.a.PureComponent)
        },
        ugal: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var r = n("pVnL"),
                a = n.n(r),
                o = n("8OQS"),
                i = n.n(o),
                s = n("VbXa"),
                c = n.n(s),
                l = n("q1tI"),
                u = n.n(l),
                d = n("TSYQ"),
                p = n.n(d),
                h = n("a08m"),
                m = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return c()(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.children,
                            r = t.variant,
                            a = i()(t, ["children", "variant"]),
                            o = p()("UIMenuItem", ((e = {})["UIMenuItem--" + r] = void 0 !== r && "none" !== r, e));
                        return u.a.createElement("span", {
                            className: o
                        }, u.a.createElement(h.a, a, u.a.createElement("span", {
                            className: "UIMenuItem-inner"
                        }, n)))
                    }, t
                }(u.a.PureComponent);
            m.defaultProps = a()({}, h.a.defaultProps)
        },
        ySsn: function(e, t, n) {
            "use strict";
            QWait("Quizlet.Common.i18n", function() {
                n.r(t);
                var e = n("pVnL"),
                    r = n.n(e),
                    a = n("o0o1"),
                    o = n.n(a),
                    i = n("yXPU"),
                    s = n.n(i),
                    c = n("q1tI"),
                    l = n.n(c),
                    u = n("mr8R"),
                    d = Object(u.a)(function() {
                        return n.e(60).then(n.bind(null, "EkJC"))
                    }),
                    p = n("Vg22"),
                    h = n("xhj2"),
                    m = n("pn57"),
                    f = n("XUBu"),
                    g = n("ETT7"),
                    v = n("8OQS"),
                    C = n.n(v),
                    E = n("VbXa"),
                    y = n.n(E),
                    S = n("og3H"),
                    b = n("xNal"),
                    _ = n("C6mj"),
                    k = n("M3Qh"),
                    O = n("fdo3"),
                    P = n("EFuM"),
                    w = n("sfiu"),
                    A = Object(u.a)(function() {
                        return Promise.all([n.e(0), n.e(39)]).then(n.bind(null, "6xDS"))
                    }),
                    U = Object(u.a)(function() {
                        return Promise.all([n.e(0), n.e(43)]).then(n.bind(null, "c+GJ"))
                    }),
                    I = Object(u.a)(function() {
                        return Promise.all([n.e(2), n.e(0), n.e(70)]).then(n.bind(null, "gTWh"))
                    }),
                    M = n("Ri2w"),
                    T = n("9WHe");

                function L(e, t) {
                    return void 0 === t && (t = !1),
                        function(e) {
                            return !!e && 2 === e.split("@").length && e.split("@")[1].split(".").length >= 2
                        }(e) ? function(e) {
                            var t = e.split("@")[0],
                                n = Math.min(t.length, 3);
                            return "" + t.slice(0, n) + "*".repeat(n)
                        }(e) + "@" + (t ? function(e) {
                            return e.split("@")[1]
                        }(e) : function(e) {
                            var t = e.split("@")[1].split("."),
                                n = t.pop(),
                                r = t.join(""),
                                a = Math.min(r.length, 3);
                            return "" + r.slice(0, a) + "*".repeat(a) + "." + n
                        }(e)) : e
                }
                var N = n("t1Ez"),
                    D = n("OpqZ"),
                    F = n("Pxp3"),
                    R = n("vlgG"),
                    j = n("E/Xc"),
                    H = n("dxfC"),
                    B = n("DLQF"),
                    x = n("zt8I"),
                    W = n("bBvF").default;

                function V(e) {
                    var t = l.a.useState(),
                        n = t[0],
                        a = t[1],
                        o = l.a.useState(),
                        i = o[0],
                        s = o[1],
                        c = l.a.useState(!1),
                        u = c[0],
                        d = c[1],
                        p = l.a.useState(!1),
                        h = p[0],
                        m = p[1],
                        f = l.a.useState({}),
                        g = f[0],
                        v = f[1],
                        C = function(e) {
                            e.preventDefault(), m(!0), Object(M.f)("/magic-login", {
                                username: n
                            }).then(function(e) {
                                m(!1), e.success ? (d(!0), s(e.email)) : v(e.errors || {})
                            }).catch(function(e) {
                                v({
                                    generic: W("en-US", "Oops, something went wrong! Please refresh and try again.")
                                }), T.a.error("magic_link_form_generic_error", e)
                            })
                        };
                    return l.a.createElement(H.a, r()({}, e, {
                        onClose: function() {
                            a(null), s(null), d(!1), v({}), e.onClose && e.onClose()
                        }
                    }), u ? l.a.createElement(l.a.Fragment, null, i && l.a.createElement(F.a, {
                        className: "MagicLinkPromptModal-successEmailWrapper"
                    }, l.a.createElement(N.a, {
                        _precomputed: W("en-US", "We've sent an email to {email}", {
                            email: L(i)
                        })
                    })), l.a.createElement(F.a, {
                        className: "MagicLinkPromptModal-successBodyWrapper"
                    }, l.a.createElement(N.a, {
                        _precomputed: W("en-US", "Please check your spam folder if you don't see the email in your inbox.", {})
                    })), l.a.createElement(F.a, {
                        className: "MagicLinkPromptModal-successLinkWrapper"
                    }, l.a.createElement("a", {
                        href: "/help",
                        target: "_blank"
                    }, l.a.createElement(N.a, {
                        _precomputed: W("en-US", "Need more help?", {})
                    })))) : l.a.createElement(l.a.Fragment, null, l.a.createElement(x.a, null, l.a.createElement(N.a, {
                        _precomputed: W("en-US", "Enter your Quizlet username or the email address you signed up with. We'll send you an email with a link to log in.", {})
                    })), l.a.createElement("form", {
                        className: "MagicLinkPromptModal-form",
                        method: "post",
                        onSubmit: C
                    }, g.generic && l.a.createElement(B.a, {
                        boxed: !0,
                        uppercaseDeprecated: !0,
                        variant: "alert"
                    }, g.generic), l.a.createElement(D.a, null, l.a.createElement(F.a, {
                        className: "MagicLinkPromptModal-fieldsWrapper"
                    }, l.a.createElement(R.a, {
                        autoCorrect: "off",
                        autoFocus: !0,
                        invalid: !!g.username || void 0,
                        label: g.username || l.a.createElement(N.a, {
                            _precomputed: W("en-US", "USERNAME OR EMAIL ADDRESS", {})
                        }),
                        onChange: function(e) {
                            return a(e.target.value)
                        },
                        placeholder: W("en-US", "Username or email address"),
                        spellCheck: !1,
                        type: "text",
                        value: n || ""
                    }))), l.a.createElement(j.a, {
                        hero: !0,
                        loading: h,
                        type: "submit",
                        width: "fill"
                    }, l.a.createElement(N.a, {
                        _precomputed: W("en-US", "Submit", {})
                    })))))
                }
                V.defaultProps = {
                    headerContent: l.a.createElement(N.a, {
                        _precomputed: W("en-US", "Request a magic link", {})
                    }),
                    includeCloseButton: !0
                };
                var z = Object(u.a)(function() {
                        return n.e(77).then(n.bind(null, "uJvi"))
                    }),
                    q = Object(u.a)(function() {
                        return n.e(76).then(n.bind(null, "iFkk"))
                    }),
                    G = n("O97I"),
                    Y = Object(u.a)(function() {
                        return Promise.all([n.e(0), n.e(20)]).then(n.bind(null, "z8WE"))
                    }),
                    Q = Object(u.a)(function() {
                        return Promise.all([n.e(0), n.e(19)]).then(n.bind(null, "KWko"))
                    }),
                    X = n("a08m"),
                    J = n("rfz2"),
                    K = n("TSYQ"),
                    Z = n.n(K),
                    $ = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        return y()(t, e), t.prototype.render = function() {
                            var e = Z()("SiteHeaderChiclet", {
                                "SiteHeaderChiclet--mWeb": this.props.isUpgradeChicletEnabled
                            });
                            return l.a.createElement(X.a, {
                                to: this.props.url,
                                variant: "inverted"
                            }, l.a.createElement("span", {
                                className: e
                            }, l.a.createElement(J.a, {
                                dangerouslySetInnerHTML: {
                                    __html: this.props.text
                                }
                            })))
                        }, t
                    }(c.PureComponent),
                    ee = n("LszE"),
                    te = n("nXOR"),
                    ne = n("8WOz"),
                    re = n("bvRJ"),
                    ae = n("ugal"),
                    oe = n("mahw"),
                    ie = n("jvKz"),
                    se = n("FJLI"),
                    ce = n("1q5m"),
                    le = n("+IfW"),
                    ue = n("T3U7"),
                    de = n("QR21"),
                    pe = n("3XR0");
                var he = n("YleJ"),
                    me = n("ApwE"),
                    fe = n("VPSI"),
                    ge = n("932g"),
                    ve = n("zK28"),
                    Ce = n("6MTt"),
                    Ee = n("JxFz"),
                    ye = n("bBvF").default;

                function Se(e) {
                    var t = e.onClickSignIn,
                        n = e.onClickSignUp;
                    return l.a.createElement("div", {
                        className: "SiteHeader-signIn"
                    }, l.a.createElement(X.a, {
                        key: "mobileSignInLink",
                        onClick: t,
                        variant: "inverted"
                    }, l.a.createElement("span", {
                        className: "SiteHeader-signInBtn"
                    }, l.a.createElement(N.a, {
                        _precomputed: ye("en-US", "Log in", {})
                    }))), l.a.createElement(Ee.a, {
                        onClick: n
                    }, l.a.createElement(N.a, {
                        _precomputed: ye("en-US", "Sign up", {})
                    })))
                }
                var be = n("Nxgj"),
                    _e = n("78K5"),
                    ke = n("PqcE"),
                    Oe = n("bBvF").default,
                    Pe = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        return y()(t, e), t.prototype.render = function() {
                            return l.a.createElement(ke.a, r()({
                                icon: l.a.createElement(re.a, {
                                    icon: "mail"
                                })
                            }, this.props))
                        }, t
                    }(c.PureComponent);
                Pe.defaultProps = {
                    label: Oe("en-US", "Log in with your email")
                };
                var we = n("dHOp"),
                    Ae = n("bBvF").default,
                    Ue = "global-header-direct",
                    Ie = "";

                function Me(e) {
                    return {
                        customParams: {
                            signupOrigin: e,
                            screenName: ve.a.actionString
                        },
                        redirect: window.location.href
                    }
                }

                function Te(e) {
                    var t, n = e.onClickEmail,
                        r = e.onClickSignIn,
                        a = e.email,
                        o = void 0 !== a && a,
                        i = e.facebook,
                        s = void 0 !== i && i,
                        c = Object(we.b)(Me(Ue)),
                        u = Object(we.a)(Me(Ue));
                    return l.a.createElement("div", {
                        className: "SignInAllButtons SiteHeader-section"
                    }, l.a.createElement("div", {
                        className: "SignInAllButtons-continue"
                    }, l.a.createElement(N.a, {
                        _precomputed: Ae("en-US", "Continue with", {})
                    })), l.a.createElement("div", {
                        className: "SignInAllButtons-loginButton"
                    }, l.a.createElement(be.a, {
                        googleLoginUrl: c,
                        label: Ie,
                        title: Ae("en-US", "Continue with Google"),
                        variant: "small"
                    })), s ? (t = u, l.a.createElement("div", {
                        className: "SignInAllButtons-loginButton"
                    }, l.a.createElement(_e.a, {
                        facebookLoginUrl: t,
                        label: Ie,
                        title: Ae("en-US", "Continue with Facebook"),
                        variant: "small"
                    }))) : null, o ? function(e) {
                        return l.a.createElement("div", {
                            className: "SignInAllButtons-loginButton"
                        }, l.a.createElement(Pe, {
                            label: Ie,
                            onClick: e,
                            title: Ae("en-US", "Continue with your email"),
                            variant: "small"
                        }))
                    }(n) : null, l.a.createElement("div", {
                        className: "SignInAllButtons-logIn SignInAllButtons-separator"
                    }, l.a.createElement(X.a, {
                        key: "mobileSignInLink",
                        onClick: r,
                        variant: "inverted"
                    }, l.a.createElement("span", {
                        className: "SignInAllButtons-signInBtn"
                    }, l.a.createElement(N.a, {
                        _precomputed: Ae("en-US", "Log in", {})
                    })))))
                }
                var Le = n("FFEN"),
                    Ne = n("KAy6"),
                    De = n("LODH"),
                    Fe = n("7RXM"),
                    Re = n("08um"),
                    je = n("bBvF").default;
                var He = Object(p.connect)(null, function(e) {
                        return {
                            actions: Object(m.bindActionCreators)({
                                updateIsWatchWallOpen: g.f,
                                finishedWatchWallVideo: g.e
                            }, e)
                        }
                    })(function(e) {
                        var t = Object(c.useState)(e.shouldPlayVideo || !1),
                            n = t[0],
                            r = t[1],
                            a = Object(c.useState)(e.hasVideoStartedPlaying || !1),
                            o = a[0],
                            i = a[1],
                            s = Object(c.useState)(e.hasAdStarted || !1),
                            u = s[0],
                            d = s[1];
                        Object(c.useEffect)(function() {
                            return Object(ue.a)("watch_wall_video_modal_opened")
                        }, []);
                        var p = Object(Re.e)("watch_wall_video_modal_upgrade_clicked"),
                            h = Object(Ne.renderToStaticMarkup)(l.a.createElement(N.a, {
                                _precomputed: je("en-US", "upgrade", {})
                            })),
                            m = '<a class="UILink" href="' + p + '" target="_blank">' + h + "</a>",
                            f = function() {
                                Object(ue.a)("watch_wall_video_started"), r(!0), o || i(!0)
                            },
                            g = function() {
                                e.actions.updateIsWatchWallOpen(!1), Object(ue.a)("watch_wall_video_modal_closed")
                            };
                        return l.a.createElement("div", {
                            className: "WatchWall"
                        }, l.a.createElement("div", {
                            className: "WatchWall-header"
                        }, l.a.createElement(Le.a, {
                            size: 4
                        }, l.a.createElement(N.a, {
                            _precomputed: je("en-US", "Watch this short video for an ad-free experience", {})
                        })), l.a.createElement("div", {
                            className: "WatchWall-closeIcon",
                            onClick: function() {
                                return g()
                            },
                            onKeyDown: function() {
                                return g()
                            }
                        }, l.a.createElement(re.a, {
                            icon: "x-thin",
                            size: "medium"
                        }))), l.a.createElement("div", {
                            className: "WatchWall-videoContainer"
                        }, l.a.createElement(De.a, {
                            id: Fe.NAME__WATCH_WALL_VIDEO,
                            maxRepeats: 1,
                            onAdClick: function() {
                                Object(ue.a)("watch_wall_video_clicked")
                            },
                            onAdStarted: function(e) {
                                Object(ue.a)("watch_wall_video_loaded"), d(e)
                            },
                            onError: function() {
                                e.actions.updateIsWatchWallOpen(!1), window.open(p, "_blank")
                            },
                            onPlayerVisibilityChange: function(e) {
                                if (!o) return !1;
                                n && !e && r(!1), !n && e && r(!0)
                            },
                            onVideoAdFinishes: e.actions.finishedWatchWallVideo,
                            shouldPlayVideo: n,
                            showControls: !1,
                            startPaused: !0
                        })), l.a.createElement("div", {
                            className: "WatchWall-upgradeLink"
                        }, l.a.createElement(Le.a, {
                            size: 5
                        }, l.a.createElement(N.a, {
                            _precomputed: je("en-US", "Or {upgradeLink} to remove ads", {
                                upgradeLink: m
                            })
                        }))), !n && u ? l.a.createElement("div", {
                            className: "WatchWall-videoPlayButton",
                            onClick: f,
                            onKeyDown: f
                        }, l.a.createElement(re.a, {
                            icon: "play",
                            size: "large"
                        })) : null)
                    }),
                    Be = n("xvNY"),
                    xe = n("jytc"),
                    We = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        y()(t, e);
                        var n = t.prototype;
                        return n.render = function() {
                            var e = this.props.userAccountType,
                                t = Z()("SiteHeaderUpgradedUserBadge-badge", {
                                    "SiteHeaderUpgradedUserBadge-badge--go": e === S.Eb.GO,
                                    "SiteHeaderUpgradedUserBadge-badge--plus": e === S.Eb.PLUS,
                                    "SiteHeaderUpgradedUserBadge-badge--teacher": e === S.Eb.TEACHER
                                });
                            return l.a.createElement(F.a, {
                                className: "SiteHeaderUpgradedUserBadge"
                            }, l.a.createElement(X.a, {
                                onClick: this.logBadgeClick,
                                to: "/upgrade/success?source=badge"
                            }, l.a.createElement(F.a, {
                                className: t,
                                "data-testid": "SiteHeaderUpgradedUserBadge-userAccountType-" + e
                            })))
                        }, n.logBadgeClick = function() {
                            Object(ue.a)("site_header_upgraded_user_badge_click")
                        }, t
                    }(c.PureComponent),
                    Ve = n("l6OD"),
                    ze = n("bBvF").default,
                    qe = "global-header-link",
                    Ge = "abmcc",
                    Ye = function(e) {
                        function t(t) {
                            var n;
                            (n = e.call(this, t) || this).getLoginContinueWithVariant = function() {
                                return Ce.a.getAllTestNames().includes("LoginContinueWithV2[default,growth]") ? Ce.a.getVariationAndEnroll("LoginContinueWithV2[default,growth]") : null
                            }, n.handleSubmitSearch = function(e) {
                                e.preventDefault(), Object(fe.a)({
                                    searchAction: n.getSearchActionWithSlash(),
                                    searchInput: n.state.query
                                })
                            }, n.handleClickSearchLink = function() {
                                n.expandSearch()
                            }, n.handleSignUpHeader = function(e) {
                                return function() {
                                    n.handleOpenSignupModal({
                                        signupOrigin: e,
                                        screenName: ve.a.actionString
                                    })
                                }
                            }, n.handleCollapseSearch = function() {
                                n.collapseSearch()
                            }, n.handleLogoutClick = function(e) {
                                e.preventDefault(), Object(O.b)("/logout")
                            }, n.handleOpenLoginModal = function(e) {
                                void 0 === e && (e = {}), n.setState({
                                    isLoginModalOpen: !0,
                                    isSignupModalOpen: !1,
                                    isMagicLinkModalOpen: !1,
                                    loginFormProps: e
                                })
                            }, n.handleCloseLoginModal = function() {
                                n.setState({
                                    isLoginModalOpen: !1
                                }, function() {
                                    n.state.loginFormProps && n.state.loginFormProps.onCloseLogin && n.state.loginFormProps.onCloseLogin()
                                })
                            }, n.handleOpenSignupModal = function(e, t) {
                                var a, o, i, s = e.couponCode,
                                    c = e.signupOrigin,
                                    l = void 0 === c ? qe : c,
                                    u = e.screenName;
                                Object(ue.a)("open_signup_modal", {
                                    signupOrigin: l
                                }), a = S.j.SIGNUP_FORM_OPENED, o = {
                                    auth_origin: l,
                                    screen_name: u
                                }, i = r()({
                                    action: a,
                                    app_session_id: Object(pe.b)()
                                }, o), Object(de.a)("auth_events", i, {
                                    includeUserDetails: !0
                                }), n.setState({
                                    couponCode: s,
                                    isLoginModalOpen: !1,
                                    isSignupModalOpen: !0,
                                    isMagicLinkModalOpen: !1,
                                    signupOrigin: l,
                                    signupProps: t
                                })
                            }, n.handleCloseSignupModal = function() {
                                n.setState({
                                    isSignupModalOpen: !1
                                })
                            }, n.handleOpenContactUsModal = function() {
                                n.setState({
                                    isContactUsModalOpen: !0
                                })
                            }, n.handleCloseContactUsModal = function() {
                                n.setState({
                                    isContactUsModalOpen: !1
                                })
                            }, n.handleHeaderLogoOnClick = function() {
                                n.logHeaderActions("header_quizlet_logo_click")
                            }, n.handleUserSectionOverlayTriggerBeforeOpen = function() {
                                n.logHeaderActions("header_user_name_click")
                            }, n.handleClosePartnerUpgradeRedemptionModal = function() {
                                n.setState({
                                    isPartnerUpgradeRedemptionModalOpen: !1
                                })
                            }, n.handleClosePartnerCurrentMobileSubscriberModal = function() {
                                n.setState({
                                    isPartnerCurrentMobileSubscriberModalOpen: !1
                                })
                            }, n.handleOpenDisableAdBlockerModal = function() {
                                n.setState({
                                    isDisableAdBlockerModalOpen: !0
                                }, function() {
                                    Object(ue.a)("disable_ad_blocker_modal_opened"), b.c.write(Ge, "1", {
                                        duration: 1
                                    })
                                })
                            }, n.handleCloseDisableAdBlockerModal = function(e) {
                                n.setState({
                                    isDisableAdBlockerModalOpen: !1
                                }, function() {
                                    Object(ue.a)("disable_ad_blocker_modal_closed", e)
                                })
                            }, n.handleOpenMagicLinkModal = function() {
                                n.setState({
                                    isMagicLinkModalOpen: !0,
                                    isLoginModalOpen: !1,
                                    isSignupModalOpen: !1
                                })
                            }, n.handleCloseMagicLinkModal = function() {
                                n.setState({
                                    isMagicLinkModalOpen: !1
                                })
                            }, n.isEnrolledInLoginContinueWith = function() {
                                var e = n.getLoginContinueWithVariant();
                                return null !== e && "control" !== e
                            }, n.shouldSeeWatchWallAdzFreeExpiredModal = function() {
                                var e = b.c.read(S.m.HAS_ADS_FREE_EXPERIENCE),
                                    t = "true" === Object(Re.d)();
                                return t && n.isUpgradedUser() && n.cleanUpWatchWallExperiment(), t && !e && !n.props.hasFinishedWatchWallExperiment && n.props.shouldShowWatchWall
                            }, n.isUpgradedUser = function() {
                                return !!n.props.user && n.props.user.type !== S.Eb.NO_UPGRADE
                            }, n.localStorageHelper = new xe.a;
                            var a = t.signupFormData && t.signupFormData.signupOrigin || qe;
                            return n.state = {
                                couponCode: void 0,
                                isContactUsModalOpen: t.isHelpCenter && "#send-feedback" === window.location.hash,
                                isDisableAdBlockerModalOpen: !1,
                                isLoginModalOpen: !!t.loginFormData,
                                isPartnerCurrentMobileSubscriberModalOpen: t.initialIsPartnerCurrentMobileSubscriberModalOpen,
                                isPartnerUpgradeRedemptionModalOpen: !!t.partnerUpgradeRedemptionModalData,
                                isSearchExpanded: t.initialIsSearchExpanded,
                                isSignupModalOpen: !!t.signupFormData,
                                isMagicLinkModalOpen: !1,
                                query: t.initialQuery,
                                loginFormProps: {
                                    onCloseLogin: function() {}
                                },
                                signupOrigin: a,
                                shouldRenderDisableAdBlockerModal: !1,
                                signupProps: void 0
                            }, n
                        }
                        y()(t, e);
                        var n = t.prototype;
                        return n.componentDidMount = function() {
                            Object(me.e)(me.b.TIME_TO_HEADER_INTERACTIVE), this.updateShouldRenderDisableAdBlockerModal()
                        }, n.componentWillUnmount = function() {
                            clearTimeout(this._focusTimeout)
                        }, n.getSearchActionWithSlash = function() {
                            return this.props.searchAction + "/"
                        }, n.onKeyDown = function(e) {
                            "Escape" === e.key && this.collapseSearch()
                        }, n.onChangeSearch = function(e) {
                            this.setState({
                                query: e.target.value
                            })
                        }, n.handleCreateLink = function() {
                            Object(Be.o)("header-create-set"), Object(he.a)("header_create")
                        }, n.renderSearchInput = function() {
                            var e = this;
                            return l.a.createElement("div", {
                                className: "SiteHeader-searchFormWrapper",
                                key: "searchForm"
                            }, l.a.createElement("form", {
                                action: this.getSearchActionWithSlash(),
                                className: "SiteHeader-searchForm searchForm",
                                onSubmit: this.handleSubmitSearch,
                                role: "search"
                            }, l.a.createElement(re.a, {
                                className: "SiteHeader-searchFormSubmitIcon SiteHeader-icon",
                                icon: "search",
                                size: "large"
                            }), l.a.createElement("div", {
                                className: "SiteHeader-searchInput"
                            }, l.a.createElement("input", {
                                autoComplete: "off",
                                autoFocus: "" === this.state.query,
                                className: "SiteHeader-searchInputBox",
                                onBlur: this.handleCollapseSearch,
                                onChange: this.onChangeSearch.bind(this),
                                onKeyDown: this.onKeyDown.bind(this),
                                placeholder: ze("en-US", "Search"),
                                ref: function(t) {
                                    e.searchInputRef = t
                                },
                                type: "text",
                                value: this.state.query
                            })), l.a.createElement("div", {
                                className: "SiteHeader-searchInputClose"
                            }, l.a.createElement("button", {
                                className: "SiteHeader-searchInputCloseButton",
                                onClick: this.handleCollapseSearch,
                                type: "button"
                            }, l.a.createElement(re.a, {
                                className: "SiteHeader-searchInputCloseIcon SiteHeader-icon",
                                icon: "x",
                                size: "medium"
                            })))))
                        }, n.renderSearchLink = function() {
                            return l.a.createElement("div", {
                                className: "SiteHeader-search SiteHeader-section",
                                key: "searchLink"
                            }, l.a.createElement(X.a, {
                                onClick: this.handleClickSearchLink,
                                variant: "inverted"
                            }, l.a.createElement("div", {
                                className: "SiteHeader-searchInner"
                            }, l.a.createElement(re.a, {
                                className: "SiteHeader-searchSubmitIcon SiteHeader-icon",
                                icon: "search",
                                size: "large"
                            }), l.a.createElement("span", {
                                className: "SiteHeader-linkText"
                            }, ze("en-US", "Search")))))
                        }, n.renderCreateLink = function() {
                            return l.a.createElement("div", {
                                className: "SiteHeader-create SiteHeader-section",
                                key: "createLink"
                            }, l.a.createElement(X.a, {
                                onClick: this.handleCreateLink,
                                to: this.props.createSetPath,
                                variant: "inverted"
                            }, l.a.createElement("div", {
                                className: "SiteHeader-createInner"
                            }, l.a.createElement(re.a, {
                                className: "SiteHeader-createIcon SiteHeader-icon",
                                icon: "create-set",
                                size: "large"
                            }), l.a.createElement("span", {
                                className: "SiteHeader-linkText"
                            }, ze("en-US", "Create")))))
                        }, n.renderHeaderChiclet = function(e) {
                            return l.a.createElement("div", {
                                className: "SiteHeader-chiclet"
                            }, l.a.createElement($, {
                                isUpgradeChicletEnabled: e,
                                text: e ? ze("en-US", "Upgrade") : this.props.headerChicletData[0],
                                url: this.props.headerChicletData[1]
                            }))
                        }, n.renderLogoutLink = function() {
                            return l.a.createElement("span", {
                                className: "SiteHeader-logoutLink"
                            }, l.a.createElement(ae.a, {
                                onClick: this.handleLogoutClick
                            }, ze("en-US", "Log Out")))
                        }, n.renderSectionLinks = function(e) {
                            return e.map(function(e, t) {
                                var n = e.url,
                                    r = e.attrs,
                                    a = void 0 === r ? {} : r,
                                    o = e.text,
                                    i = "link-" + t + "-" + (a.source ? a.source : n),
                                    s = function() {
                                        a.log && Object(ue.a)(a.log.actionName)
                                    };
                                return a.icon ? l.a.createElement(oe.a, {
                                    badgeText: a.badgeText,
                                    icon: a.icon,
                                    iconPosition: "right",
                                    key: i,
                                    onClick: s,
                                    source: a.source,
                                    text: o,
                                    to: n
                                }) : l.a.createElement(ae.a, {
                                    key: i,
                                    onClick: s,
                                    source: a.source,
                                    to: n
                                }, o)
                            })
                        }, n.renderUserDropdownContent = function() {
                            var e = this.props.userDropdownData,
                                t = e.upgradeLinks,
                                n = e.accountLinks,
                                a = e.helpLinks,
                                o = l.a.createElement("div", {
                                    className: "SiteHeader-userDropdownOptionSection",
                                    key: "upgradeLinks"
                                }, this.renderSectionLinks(t)),
                                i = {
                                    userId: this.props.user ? this.props.user.id : null,
                                    page: window.location.href,
                                    pathname: window.location.pathname,
                                    abTests: Ce.a.getAllEnrolledTestValueStrings()
                                },
                                s = btoa(JSON.stringify(i));
                            return l.a.createElement("div", {
                                className: "SiteHeader-userDropdown"
                            }, l.a.createElement("div", {
                                className: "SiteHeader-userDropdownOptionSection",
                                key: "accountLinks"
                            }, this.renderSectionLinks(n), this.renderLogoutLink()), l.a.createElement("div", {
                                className: "SiteHeader-userDropdownOptionSection",
                                key: "sectionLinks"
                            }, this.renderSectionLinks(a.map(function(e) {
                                return r()({}, e, {
                                    url: e.url + "?qinfo=" + s
                                })
                            }))), t.length > 0 ? o : null)
                        }, n.renderUsername = function(e) {
                            return l.a.createElement("div", {
                                className: "SiteHeader-userInfo",
                                key: "userInfo"
                            }, l.a.createElement(X.a, {
                                to: "#",
                                variant: "inverted"
                            }, l.a.createElement("span", {
                                className: "SiteHeader-avatar"
                            }, l.a.createElement(ce.a, {
                                size: 32,
                                user: e
                            })), l.a.createElement("span", {
                                className: "SiteHeader-username"
                            }, Object(le.a)(e.username, 10)), l.a.createElement(re.a, {
                                className: "SiteHeader-userDropdownIcon",
                                icon: "dropdown",
                                size: "small"
                            })))
                        }, n.renderUserSection = function() {
                            var e = this.props.user;
                            if (!e) return l.a.createElement("div", {
                                className: "SiteHeader-userSection SiteHeader-section"
                            }, this.renderSignInLink());
                            var t = l.a.createElement(se.a, {
                                includeArrowInBounds: !1
                            }, this.renderUserDropdownContent());
                            return l.a.createElement("div", {
                                className: "SiteHeader-userSection SiteHeader-section",
                                key: "userSection"
                            }, this.props.headerChicletData ? this.renderHeaderChiclet(!1) : null, this.shouldEnrollAndShowUpgradedUserBadge() ? this.renderUpgradedUserBadge() : null, l.a.createElement(ie.a, {
                                beforeOpen: this.handleUserSectionOverlayTriggerBeforeOpen,
                                className: "SiteHeader-userDropdownOverlayTrigger",
                                constrainToWindow: !1,
                                overlay: t,
                                position: "bottom right",
                                triggerAction: "click"
                            }, this.renderUsername(e)))
                        }, n.renderSignInLink = function() {
                            var e = this.getLoginContinueWithVariant(),
                                t = this.isEnrolledInLoginContinueWith() && "googleAndEmail" !== e,
                                n = this.isEnrolledInLoginContinueWith() && "googleAndFacebook" !== e;
                            return this.isEnrolledInLoginContinueWith() ? l.a.createElement(Te, {
                                email: n,
                                facebook: t,
                                onClickEmail: this.handleSignUpHeader("global-header-direct"),
                                onClickSignIn: this.handleOpenLoginModal
                            }) : this.renderSignInLinksMobile()
                        }, n.renderSignInLinksMobile = function() {
                            return l.a.createElement(Se, {
                                onClickSignIn: this.handleOpenLoginModal,
                                onClickSignUp: this.handleSignUpHeader(qe)
                            })
                        }, n.renderSignupPromptModal = function() {
                            var e = this,
                                t = this.props.signupFormData,
                                n = t && t.redir ? t.redir : window.location.href,
                                r = t && t.header ? t.header : null,
                                a = this.state.signupProps || {},
                                o = a.header,
                                i = a.includeCloseButton,
                                s = a.preventCloseOnOverlayClick,
                                c = C()(a, ["header", "includeCloseButton", "preventCloseOnOverlayClick"]);
                            return l.a.createElement(G.a, {
                                actions: {
                                    onClose: this.handleCloseSignupModal,
                                    onOpenLogin: function() {
                                        return e.handleOpenLoginModal(e.state.loginFormProps)
                                    }
                                },
                                couponCode: this.state.couponCode,
                                header: o || r,
                                includeCloseButton: i,
                                isOpen: this.state.isSignupModalOpen,
                                preventCloseOnOverlayClick: s,
                                redir: n,
                                signupFormData: t || c,
                                signupOrigin: this.state.signupOrigin
                            })
                        }, n.renderLoginPromptModal = function() {
                            return l.a.createElement(I, r()({}, this.props.loginFormData || this.state.loginFormProps, {
                                isOpen: this.state.isLoginModalOpen,
                                onClose: this.handleCloseLoginModal,
                                onOpenMagicLink: this.handleOpenMagicLinkModal
                            }))
                        }, n.renderMagicLinkPromptModal = function() {
                            return l.a.createElement(V, r()({}, this.props.magicLinkFormData, {
                                isOpen: this.state.isMagicLinkModalOpen,
                                onClose: this.handleCloseMagicLinkModal
                            }))
                        }, n.renderContactUsModal = function() {
                            return l.a.createElement(A, {
                                feedbackMinorCategoryId: this.props.feedbackMinorCategoryId,
                                isHelpCenter: this.props.isHelpCenter,
                                isOpen: this.state.isContactUsModalOpen,
                                onClose: this.handleCloseContactUsModal,
                                referer: this.props.referer,
                                user: this.props.user
                            })
                        }, n.renderPartnerUpgradeRedemptionModal = function(e) {
                            var t = e.amount,
                                n = e.expirationTimestamp,
                                r = e.isExtension,
                                a = e.userUpgradeType,
                                o = e.wasGo,
                                i = e.willRenew,
                                s = e.timeUnit;
                            return l.a.createElement(z, {
                                amount: t,
                                expirationTimestamp: n,
                                isExtension: r,
                                isOpen: this.state.isPartnerUpgradeRedemptionModalOpen,
                                onClose: this.handleClosePartnerUpgradeRedemptionModal,
                                timeUnit: s,
                                userUpgradeType: a,
                                wasGo: o,
                                willRenew: i
                            })
                        }, n.renderPartnerCurrentMobileSubscriberModal = function(e) {
                            return l.a.createElement(q, {
                                isOpen: this.state.isPartnerCurrentMobileSubscriberModalOpen,
                                onClose: this.handleClosePartnerCurrentMobileSubscriberModal,
                                userEmail: e.email
                            })
                        }, n.renderDisableAdBlockerModal = function() {
                            return l.a.createElement(U, {
                                isOpen: this.state.isDisableAdBlockerModalOpen,
                                onClose: this.handleCloseDisableAdBlockerModal
                            })
                        }, n.renderWatchWallAdzFreeModal = function() {
                            return l.a.createElement(Y, {
                                isOpen: this.props.isAdFreeModalOpen,
                                onClose: this.props.actions.closeWatchWallAdFreeModal
                            })
                        }, n.renderWatchWallAdzFreeExpiredModal = function() {
                            return l.a.createElement(Q, {
                                isOpen: this.shouldSeeWatchWallAdzFreeExpiredModal(),
                                onClose: this.props.actions.finishedWatchWallExperiment
                            })
                        }, n.renderDefaultDesktopHeader = function() {
                            return l.a.createElement("div", {
                                className: "SiteHeader-defaultDesktop",
                                key: "defaultHeader"
                            }, this.renderSearchLink(), this.renderCreateLink(), this.renderUserSection())
                        }, n.renderDesktopHeader = function() {
                            return l.a.createElement("div", {
                                className: "SiteHeader-wrapper"
                            }, l.a.createElement("div", {
                                className: "SiteHeader-logo SiteHeader-section"
                            }, l.a.createElement(X.a, {
                                onClick: this.handleHeaderLogoOnClick,
                                to: this.props.user ? "/latest" : "/",
                                variant: "inverted"
                            }, l.a.createElement("div", {
                                className: "SiteHeader-logoWrapper"
                            }, l.a.createElement(ee.a, null)))), l.a.createElement(w.a, {
                                transitionName: "SiteHeader-searchInputTransition"
                            }, this.state.isSearchExpanded ? this.renderSearchInput() : null), l.a.createElement(w.a, {
                                transitionName: "SiteHeader-searchDefaultHeaderTransition"
                            }, this.state.isSearchExpanded ? null : this.renderDefaultDesktopHeader()))
                        }, n.renderMobileLinks = function() {
                            var e = l.a.createElement("span", {
                                    "aria-label": ze("en-US", "Create"),
                                    className: "SiteHeader-mobileLinkArea SiteHeader-mobileCreate",
                                    key: "mobileCreateLink"
                                }, l.a.createElement(X.a, {
                                    to: "/create-set",
                                    variant: "inverted"
                                }, l.a.createElement(re.a, {
                                    className: "SiteHeader-icon",
                                    icon: "create-set",
                                    size: "large"
                                }))),
                                t = l.a.createElement("span", {
                                    "aria-label": ze("en-US", "Search"),
                                    className: "SiteHeader-mobileLinkArea SiteHeader-mobileSearch",
                                    key: "mobileSearchLink"
                                }, l.a.createElement(X.a, {
                                    onClick: this.handleClickSearchLink,
                                    variant: "inverted"
                                }, l.a.createElement(re.a, {
                                    className: "SiteHeader-icon",
                                    icon: "search",
                                    size: "large"
                                }))),
                                n = l.a.createElement("span", {
                                    className: "SiteHeader-mobileLinkArea SiteHeader-mobileNav",
                                    key: "mobileNavLink"
                                }, l.a.createElement(X.a, {
                                    onClick: this.props.actions.openMobileNav,
                                    variant: "inverted"
                                }, l.a.createElement(re.a, {
                                    className: "SiteHeader-icon",
                                    icon: "list",
                                    size: "large"
                                }), this.props.numClassInvitations > 0 ? l.a.createElement("div", {
                                    className: "SiteHeader-notification"
                                }, this.props.numClassInvitations) : null));
                            return this.props.user ? [e, t, n] : t
                        }, n.renderDefaultMobileHeader = function() {
                            return [l.a.createElement("div", {
                                className: "SiteHeader-logo SiteHeader-section",
                                key: "mobileLogo"
                            }, l.a.createElement(X.a, {
                                onClick: this.handleHeaderLogoOnClick,
                                to: this.props.user ? "/latest" : "/",
                                variant: "inverted"
                            }, l.a.createElement("div", {
                                className: "SiteHeader-logoWrapper"
                            }, l.a.createElement(ee.a, null)))), l.a.createElement("div", {
                                className: "SiteHeader-defaultMobileHeader SiteHeader-section",
                                key: "actions"
                            }, this.props.headerChicletData && this.shouldEnrollAndShowUpgradeChiclet() ? this.renderHeaderChiclet(!0) : null, this.renderMobileLinks(), this.props.user ? null : this.renderSignInLinksMobile())]
                        }, n.renderMobileHeader = function() {
                            return l.a.createElement("div", {
                                className: "SiteHeader-wrapper"
                            }, l.a.createElement(w.a, {
                                transitionName: "SiteHeader-searchInputTransition"
                            }, this.state.isSearchExpanded ? this.renderSearchInput() : null), l.a.createElement(w.a, {
                                transitionName: "SiteHeader-searchDefaultHeaderTransition"
                            }, this.state.isSearchExpanded ? null : this.renderDefaultMobileHeader()))
                        }, n.renderUpgradedUserBadge = function() {
                            return l.a.createElement(We, {
                                userAccountType: this.props.user && this.props.user.type
                            })
                        }, n.render = function() {
                            var e = Z()("SiteHeader", {
                                "is-Continue-with": this.isEnrolledInLoginContinueWith()
                            });
                            return l.a.createElement("header", {
                                className: e,
                                itemScope: !0,
                                itemType: "http://schema.org/WPHeader",
                                role: "navigation"
                            }, l.a.createElement(ne.a, {
                                isFullBleed: !0
                            }, l.a.createElement(te.a, {
                                below: ge.a
                            }, this.renderMobileHeader()), l.a.createElement(te.a, {
                                above: ge.a
                            }, this.renderDesktopHeader())), this.props.user ? null : this.renderSignupPromptModal(), this.props.user ? null : this.renderLoginPromptModal(), this.props.user ? null : this.renderMagicLinkPromptModal(), this.props.feedbackMinorCategoryId ? this.renderContactUsModal() : null, this.props.partnerUpgradeRedemptionModalData ? this.renderPartnerUpgradeRedemptionModal(this.props.partnerUpgradeRedemptionModalData) : null, this.state.shouldRenderDisableAdBlockerModal ? this.renderDisableAdBlockerModal() : null, ve.a.user ? this.renderPartnerCurrentMobileSubscriberModal(ve.a.user) : null, this.props.isWatchWallOpen ? l.a.createElement(He, null) : null, this.props.isAdFreeModalOpen && this.props.shouldShowWatchWall ? this.renderWatchWallAdzFreeModal() : null, this.shouldSeeWatchWallAdzFreeExpiredModal() ? this.renderWatchWallAdzFreeExpiredModal() : null)
                        }, n.updateShouldRenderDisableAdBlockerModal = function() {
                            var e = this;
                            new Promise(function(e) {
                                QWait("Quizlet.AdMounted", function() {
                                    return e()
                                })
                            }).then(function() {
                                e.shouldEnrollUserInAdBlockerModalTest() && ("experiment" === Ce.a.getVariationAndEnroll("DisableAdBlockerModal") && e.setState({
                                    shouldRenderDisableAdBlockerModal: !0
                                }, function() {
                                    window.setTimeout(function() {
                                        e.handleOpenDisableAdBlockerModal()
                                    }, 3e3)
                                }))
                            })
                        }, n.shouldEnrollAndShowUpgradeChiclet = function() {
                            return !!(this.props.user && this.props.user.type === S.Eb.NO_UPGRADE && Object(Ve.f)() && Ce.a.getAllTestNames().includes("MWebUpgradeChiclet[default,subscriptions]")) && "experiment" === Ce.a.getVariationAndEnroll("MWebUpgradeChiclet[default,subscriptions]")
                        }, n.shouldEnrollAndShowUpgradedUserBadge = function() {
                            if (this.props.user && this.props.user.type !== S.Eb.NO_UPGRADE) {
                                var e = "UpgradedUsersChiclet[default,subscriptions]";
                                if (Ce.a.getAllTestNames().includes(e)) return "variant" === Ce.a.getVariationAndEnroll(e)
                            }
                            return !1
                        }, n.shouldEnrollUserInAdBlockerModalTest = function() {
                            return ve.a.LOGGED_IN && "us" === ve.a.countryCode && "en-us" === Object(k.a)() && Object(P.b)() && Object(_.b)() && (window.document.querySelectorAll(".SiteAd").length > 0 || window.document.querySelectorAll(".VideoAd").length > 0) && null === b.c.read(Ge)
                        }, n.cleanUpWatchWallExperiment = function() {
                            this.localStorageHelper.setItem("has_seen_watch_wall_video_ad", ""), b.c.dispose(S.m.HAS_ADS_FREE_EXPERIENCE)
                        }, n.logHeaderActions = function(e) {
                            Object(ue.a)(e, {
                                page: ve.a.actionString
                            })
                        }, n.expandSearch = function() {
                            var e = this;
                            this.setState({
                                isSearchExpanded: !0
                            }, function() {
                                e._focusTimeout = window.setTimeout(function() {
                                    e.searchInputRef && e.searchInputRef.focus()
                                }, 350)
                            })
                        }, n.collapseSearch = function() {
                            clearTimeout(this._focusTimeout), this.setState({
                                isSearchExpanded: !1
                            })
                        }, t
                    }(c.PureComponent);
                Ye.defaultProps = {
                    hasFinishedWatchWallExperiment: !1,
                    isAdFreeModalOpen: !1,
                    isWatchWallOpen: !1,
                    shouldShowWatchWall: !1,
                    initialQuery: ""
                };
                var Qe = Object(p.connectAdvanced)(function(e) {
                        return function(t, n) {
                            return r()({}, (o = n, i = (a = t).get("siteNav"), s = a.get("core"), r()({}, o, {
                                numClassInvitations: i.get("classInvitations").count(),
                                hasFinishedWatchWallExperiment: s.get("hasFinishedWatchWallExperiment"),
                                isWatchWallOpen: s.get("isWatchWallOpen"),
                                isAdFreeModalOpen: s.get("isAdFreeModalOpen"),
                                shouldShowWatchWall: s.get("shouldShowWatchWall")
                            })), function(e) {
                                return {
                                    actions: Object(m.bindActionCreators)({
                                        openMobileNav: f.g,
                                        closeWatchWallAdFreeModal: g.b,
                                        finishedWatchWallExperiment: g.d
                                    }, e)
                                }
                            }(e));
                            var a, o, i, s
                        }
                    }, {
                        forwardRef: !0
                    })(Ye),
                    Xe = n("FdmV"),
                    Je = n("lHBz"),
                    Ke = n("HKPj"),
                    Ze = Object(u.a)(function() {
                        return Promise.all([n.e(2), n.e(0), n.e(114)]).then(n.bind(null, "o2l2"))
                    }),
                    $e = Object(u.a)(function() {
                        return Promise.all([n.e(2), n.e(0), n.e(114)]).then(n.bind(null, "hQWh"))
                    }),
                    et = n("SCbk"),
                    tt = n("ysfV"),
                    nt = n("bBvF").default,
                    rt = function(e) {
                        function t() {
                            for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                            return (t = e.call.apply(e, [this].concat(r)) || this).handleOverlayMount = function(e) {
                                t.overlayTrigger = e, t.shouldOpenOverlayTrigger() && window.setTimeout(function() {
                                    return t.overlayTrigger.open()
                                })
                            }, t.handleDeclineInvite = function() {
                                t.props.actions.requestDeclineInvite({
                                    id: t.props.invitation.get("id"),
                                    path: t.props.invitation.get("declinePath")
                                })
                            }, t.handleAcceptInviteWithMaxClassesReached = function() {
                                t.overlayTrigger && t.overlayTrigger.close(), t.props.actions.toggleUpsellModalMaxClasses()
                            }, t
                        }
                        y()(t, e);
                        var n = t.prototype;
                        return n.componentDidMount = function() {
                            this.shouldOpenOverlayTrigger() && this.overlayTrigger.open()
                        }, n.componentDidUpdate = function(e) {
                            var t = this;
                            !e.isActive && this.shouldOpenOverlayTrigger() && window.setTimeout(function() {
                                return t.overlayTrigger.open()
                            }, 200)
                        }, n.renderAcceptInviteButtonThatJoinsClass = function() {
                            return l.a.createElement(et.a, {
                                className: "UIButton",
                                href: this.props.invitation.get("acceptPath")
                            }, l.a.createElement(N.a, {
                                _precomputed: nt("en-US", "Accept", {})
                            }))
                        }, n.renderAcceptInviteButtonThatOpensUpsellModal = function() {
                            return l.a.createElement(Ee.a, {
                                onClick: this.handleAcceptInviteWithMaxClassesReached
                            }, l.a.createElement(N.a, {
                                _precomputed: nt("en-US", "Accept", {})
                            }))
                        }, n.renderPopover = function(e) {
                            var t = Object(tt.a)(l.a.createElement(X.a, {
                                to: "/" + this.props.invitation.getIn(["sender", "username"])
                            }, this.props.invitation.getIn(["sender", "username"])));
                            return l.a.createElement(se.a, {
                                includeArrowInBounds: !e
                            }, l.a.createElement("div", {
                                className: "SiteNavClassInvitation-popover"
                            }, l.a.createElement("div", {
                                className: "SiteNavClassInvitation-main"
                            }, l.a.createElement("span", {
                                className: "SiteNavClassInvitation-avatar"
                            }, l.a.createElement(ce.a, {
                                size: 24,
                                user: this.props.invitation.get("sender").toJS()
                            })), l.a.createElement("span", {
                                className: "SiteNavClassInvitation-message"
                            }, l.a.createElement(N.a, {
                                _precomputed: nt("en-US", "{username} invited you to this class", {
                                    username: t
                                })
                            }))), this.props.canJoinClasses ? this.renderAcceptInviteButtonThatJoinsClass() : this.renderAcceptInviteButtonThatOpensUpsellModal(), l.a.createElement(X.a, {
                                onClick: this.handleDeclineInvite
                            }, l.a.createElement(N.a, {
                                _precomputed: nt("en-US", "Ignore", {})
                            }))))
                        }, n.render = function() {
                            var e = this;
                            return l.a.createElement(te.a, {
                                below: "s"
                            }, function(t) {
                                return l.a.createElement(ie.a, {
                                    className: "SiteNavClassInvitation",
                                    overlay: e.renderPopover(t),
                                    position: t ? "bottom right" : "right",
                                    ref: e.handleOverlayMount,
                                    triggerAction: "click"
                                }, l.a.createElement(re.a, {
                                    icon: "exclamation"
                                }))
                            })
                        }, n.shouldOpenOverlayTrigger = function() {
                            return this.props.openOnMount && this.overlayTrigger && this.props.isActive
                        }, t
                    }(l.a.PureComponent),
                    at = Object(Xe.a)("siteNav", {
                        canJoinClasses: f.e
                    }),
                    ot = Object(p.connect)(at, function(e) {
                        return {
                            actions: Object(m.bindActionCreators)({
                                requestDeclineInvite: f.h,
                                toggleUpsellModalMaxClasses: f.n
                            }, e)
                        }
                    })(rt),
                    it = n("RF01"),
                    st = n.n(it);

                function ct(e) {
                    return function(e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                    }(e) || ! function(e) {
                        return 0 === e.button
                    }(e) || "/settings" === window.location.pathname || window.location.href.match(/quizlet.com\/.*\/admin/)
                }
                var lt = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).handleClick = function(e) {
                            t.props.onClick && !t.props.onClick(e) || ct(e) || Object(Ve.g)() || (e.preventDefault(), st.a.getCurrentLocation().pathname !== t.props.linkTo && st.a.push(t.props.linkTo))
                        }, t
                    }
                    return y()(t, e), t.prototype.render = function() {
                        var e = Z()("SiteNav-menuItem", {
                            "SiteNav-menuItem--active": this.props.isActive,
                            "SiteNav-menuItem--indented": this.props.isIndented,
                            "SiteNav-menuItem--noIcon": !this.props.icon,
                            "SiteNav-menuItem--viewMore": this.props.isNavViewMore
                        });
                        return l.a.createElement("div", {
                            className: e
                        }, l.a.createElement(ae.a, {
                            onClick: this.handleClick,
                            to: this.props.linkTo
                        }, this.props.icon ? l.a.createElement(re.a, {
                            className: "SiteNav-menuItemIcon",
                            icon: this.props.icon,
                            size: this.props.isIndented ? "small" : "medium"
                        }) : null, l.a.createElement("div", {
                            className: "SiteNav-menuItemTitle"
                        }, this.props.title, this.props.subtitle ? l.a.createElement("div", {
                            className: "SiteNav-menuItemSubtitle"
                        }, this.props.subtitle) : null)), this.props.notification ? l.a.createElement("span", {
                            className: "SiteNav-menuItemNotification"
                        }, this.props.notification) : null)
                    }, t
                }(l.a.PureComponent);
                lt.defaultProps = {
                    isIndented: !1,
                    isNavViewMore: !1
                };
                var ut = function(e) {
                        function t() {
                            for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                            return (t = e.call.apply(e, [this].concat(r)) || this).handleClick = function(e) {
                                ct(e) || Object(Ve.g)() || (e.preventDefault(), st.a.push(t.props.linkTo))
                            }, t
                        }
                        return y()(t, e), t.prototype.render = function() {
                            var e = l.a.createElement("span", {
                                className: "SiteNavSectionHeading"
                            }, this.props.children);
                            return this.props.linkTo ? l.a.createElement(X.a, {
                                onClick: this.handleClick,
                                to: this.props.linkTo
                            }, e) : e
                        }, t
                    }(l.a.PureComponent),
                    dt = n("S41V"),
                    pt = n("BX20"),
                    ht = n("XUS/"),
                    mt = n("PTpY"),
                    ft = n("qbFX"),
                    gt = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        return y()(t, e), t.prototype.render = function() {
                            return l.a.createElement("div", {
                                className: "UpsellModalPricingDisclaimer"
                            }, this.props.children)
                        }, t
                    }(c.PureComponent),
                    vt = n("TtcH"),
                    Ct = n("bBvF").default,
                    Et = function(e) {
                        function t() {
                            for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                            return (t = e.call.apply(e, [this].concat(r)) || this).handleInlineCheckoutStart = function() {
                                Object(ue.a)("open_checkout_modal__image_upsell")
                            }, t.handleInlineCheckoutComplete = function() {
                                window.location.reload()
                            }, t
                        }
                        y()(t, e);
                        var n = t.prototype;
                        return n.renderPricingDisclaimer = function() {
                            return l.a.createElement(gt, null, Object(vt.o)() ? l.a.createElement(N.a, {
                                _precomputed: Ct("en-US", "Billed annually at {annualPrice} when free trial ends", {
                                    annualPrice: this.props.price
                                })
                            }) : l.a.createElement(N.a, {
                                _precomputed: Ct("en-US", "Billed annually at {annualPrice}", {
                                    annualPrice: this.props.price
                                })
                            }))
                        }, n.render = function() {
                            return l.a.createElement(pt.a, {
                                includeCloseButton: !0,
                                inlineCheckout: !0,
                                inlineCheckoutHeadline: l.a.createElement(N.a, {
                                    _precomputed: Ct("en-US", "Create better study sets with images", {})
                                }),
                                inlineCheckoutSource: "contextual_checkout_images",
                                isOpen: this.props.isOpen,
                                onClose: this.props.onClose,
                                onInlineCheckoutComplete: this.handleInlineCheckoutComplete,
                                onInlineCheckoutStart: this.handleInlineCheckoutStart,
                                showMonthlyPricing: !0
                            }, l.a.createElement(mt.a, null, l.a.createElement(Le.a, {
                                size: 3
                            }, l.a.createElement(N.a, {
                                _precomputed: Ct("en-US", "Create better study sets with images", {})
                            })), l.a.createElement(ft.a, {
                                shouldShowFreeTrial: !0,
                                showMonthlyPricing: !0,
                                source: "images_new"
                            }), this.renderPricingDisclaimer()), l.a.createElement(ht.a, {
                                headline: l.a.createElement(N.a, {
                                    _precomputed: Ct("en-US", "Add engaging images", {})
                                }),
                                icon: "image"
                            }, l.a.createElement(N.a, {
                                _precomputed: Ct("en-US", "Add images to make studying more engaging", {})
                            })), l.a.createElement(ht.a, {
                                headline: l.a.createElement(N.a, {
                                    _precomputed: Ct("en-US", "Customize your images", {})
                                }),
                                icon: "camera"
                            }, l.a.createElement(N.a, {
                                _precomputed: Ct("en-US", "Upload your own images to customize your content", {})
                            })), l.a.createElement(ht.a, {
                                headline: l.a.createElement(N.a, {
                                    _precomputed: Ct("en-US", "Search our images", {})
                                }),
                                icon: "search"
                            }, l.a.createElement(N.a, {
                                _precomputed: Ct("en-US", "Pick from Quizlet's library of 10 million images", {})
                            })))
                        }, t
                    }(l.a.PureComponent);
                Et.defaultProps = {
                    isSelfIdentifiedTeacher: !1,
                    price: Object(vt.j)()
                };
                var yt = n("GE6+"),
                    St = n("47uU"),
                    bt = n("bBvF").default,
                    _t = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        y()(t, e);
                        var n = t.prototype;
                        return n.handleCreateSetClick = function() {
                            Object(Be.o)("onboarding-create-set")
                        }, n.render = function() {
                            var e = this.props.isTeacher ? l.a.createElement(N.a, {
                                _precomputed: bt("en-US", "Enter the words and concepts your students need to study in minutes.", {})
                            }) : l.a.createElement(N.a, {
                                _precomputed: bt("en-US", "Enter the words and concepts you need to study in minutes.", {})
                            });
                            return l.a.createElement(pt.a, {
                                headerContent: e,
                                includeCloseButton: !0,
                                isOpen: this.props.isOpen,
                                onClose: this.props.onClose
                            }, l.a.createElement(mt.a, null, l.a.createElement(St.a, {
                                linkTo: this.props.createSetPath,
                                onClick: this.handleCreateSetClick,
                                source: "onboarding-create-set"
                            }, l.a.createElement(N.a, {
                                _precomputed: bt("en-US", "Create a study set", {})
                            }))), l.a.createElement(ht.a, {
                                headline: l.a.createElement(N.a, {
                                    _precomputed: bt("en-US", "Any subject, any topic", {})
                                }),
                                icon: "create-set"
                            }, this.props.isTeacher ? l.a.createElement(N.a, {
                                _precomputed: bt("en-US", "Enter the words and concepts your students need to study in minutes.", {})
                            }) : l.a.createElement(N.a, {
                                _precomputed: bt("en-US", "Enter the words and concepts you need to study in minutes.", {})
                            })), l.a.createElement(ht.a, {
                                headline: l.a.createElement(N.a, {
                                    _precomputed: bt("en-US", "Take it anywhere", {})
                                }),
                                icon: "mobile"
                            }, this.props.isTeacher ? l.a.createElement(N.a, {
                                _precomputed: bt("en-US", "Students can access your study set anywhere with our iOS and Android apps.", {})
                            }) : l.a.createElement(N.a, {
                                _precomputed: bt("en-US", "Access your study set anywhere with our iOS and Android apps.", {})
                            })), l.a.createElement(ht.a, {
                                headline: l.a.createElement(N.a, {
                                    _precomputed: bt("en-US", "Quick and Easy", {})
                                }),
                                icon: "check"
                            }, l.a.createElement(N.a, {
                                _precomputed: bt("en-US", "Get started in minutes - and even import your terms from an existing document.", {})
                            })))
                        }, t
                    }(c.PureComponent);

                function kt(e, t) {
                    var n = t,
                        r = e;
                    "/" === n.charAt(n.length - 1) && (n = n.slice(0, -1)), "/" === r.charAt(r.length - 1) && (r = r.slice(0, -1));
                    for (var a = n.split("/"), o = r.split("/"), i = 0; i < o.length; i++)
                        if (o[i] !== a[i]) return !1;
                    return !0
                }
                _t.defaultProps = {
                    createSetPath: "/create-set"
                };
                var Ot = n("fkdw"),
                    Pt = n("lGCb"),
                    wt = n("bBvF").default,
                    At = 3,
                    Ut = {
                        blog: "/blog",
                        facebook: "https://www.facebook.com/quizlet/",
                        helpCenter: "/help",
                        mobile: "/mobile",
                        privacyPolicy: "/privacy",
                        renew: Object(vt.h)("mobile_nav_renew"),
                        teachers: "/teachers",
                        twitter: "https://twitter.com/quizlet",
                        instagram: "https://www.instagram.com/quizlet/",
                        upgrade: Object(vt.h)("mobile_nav")
                    },
                    It = function(e) {
                        function t(t) {
                            var n;
                            (n = e.call(this, t) || this).handleToggleMaxClassesUpsell = function() {
                                n.props.actions.toggleUpsellModalMaxClasses()
                            }, n.handleClickLogout = function(e) {
                                e.preventDefault(), Object(O.b)("/logout")
                            }, n.handleClickShowMoreBookmarks = function() {
                                n.setState({
                                    isShowingAllBookmarks: !0
                                })
                            }, n.handleClickShowMoreClasses = function() {
                                n.setState({
                                    isShowingAllClasses: !0
                                })
                            }, n.handleClickShowMoreFolders = function() {
                                n.setState({
                                    isShowingAllFolders: !0
                                })
                            }, n.handleClickDiagramShowcase = function() {
                                return n.logClickEvent("diagrams_browse_link"), !0
                            }, n.handleClickCreateClass = function() {
                                n.logClickEvent("create_class_link"), n.checkIsTeacher() && n.props.actions.toggleCreateClassModal()
                            }, n.handleClickCreateFolder = function() {
                                n.logClickEvent("create_folder_link"), n.props.actions.toggleCreateFolderModal()
                            }, n.checkIsTeacher = function() {
                                return n.props.user.get("selfIdentifiedTeacherStatus") === S.eb.TEACHER
                            }, n.logClickEvent = function(e) {
                                Object(Ot.a)("dashboard_sidebar", S.B.BROWSE, e)
                            };
                            var r = At;
                            return n.state = {
                                isShowingAllBookmarks: t.bookmarkedFolders.count() <= r + 1,
                                isShowingAllClasses: t.classMemberships.count() <= r + 1,
                                isShowingAllFolders: t.folders.count() <= r + 1,
                                expandableItemsThreshold: r
                            }, n
                        }
                        y()(t, e);
                        var n = t.prototype;
                        return n.getBlogImageSrc = function() {
                            return Object(P.h)() || !Object(Ve.h)() ? this.props.blogEntry.get("imagePath") : this.props.blogEntry.get("imagePath").replace("700.jpg", "200s.jpg")
                        }, n.renderCreateModals = function() {
                            var e = this.props.user.get("selfIdentifiedTeacherStatus") === S.eb.TEACHER;
                            return l.a.createElement("div", null, l.a.createElement(Ze, {
                                isOpen: this.props.isCreateClassModalOpen,
                                isTriggeredFromTeacherTips: this.props.isTriggeredFromTeacherTips,
                                mainSchool: this.props.mainSchool ? this.props.mainSchool.toJS() : null,
                                onClose: this.props.actions.toggleCreateClassModal,
                                schools: this.props.userSchools.isEmpty() ? {} : this.props.userSchools.toJS(),
                                user: this.props.user.toJS()
                            }), l.a.createElement($e, {
                                actions: {
                                    onClose: this.props.actions.toggleCreateFolderModal
                                },
                                isOpen: this.props.isCreateFolderModalOpen
                            }), l.a.createElement(_t, {
                                isOpen: this.props.isCreateSetModalOpen,
                                isTeacher: e,
                                onClose: this.props.actions.toggleCreateSetModal
                            }), l.a.createElement(Et, {
                                isOpen: this.props.isCreateImageSetUpsellModalOpen,
                                onClose: this.props.actions.toggleCreateImageSetUpsellModal
                            }), l.a.createElement(Ke.default, {
                                isOpen: this.props.isClassProgressUpsellModalOpen,
                                onClose: this.props.actions.toggleClassProgressUpsellModal
                            }))
                        }, n.renderTopSection = function() {
                            var e = "/latest",
                                t = "/settings";
                            this.props.user.get("username"), this.props.user.get("username");
                            return l.a.createElement("div", {
                                className: "SiteNav-section"
                            }, l.a.createElement(lt, {
                                icon: "home",
                                isActive: this.isActivePath(e),
                                linkTo: e,
                                title: wt("en-US", "Home")
                            }), this.renderDiagramsOrPremiumContentItem(), l.a.createElement(lt, {
                                icon: "settings",
                                isActive: this.isActivePath(t),
                                linkTo: t,
                                onClick: function() {
                                    Object(O.a)("/settings")
                                },
                                title: wt("en-US", "Settings")
                            }))
                        }, n.renderDiagramsOrPremiumContentItem = function() {
                            var e = {
                                browseDiagrams: "/diagram-showcase",
                                premiumContent: "/features/premium-content?channel=" + S.w.SIDEBAR_PROMO
                            };
                            return l.a.createElement(lt, {
                                icon: "showcase",
                                isActive: this.isActivePath(e.premiumContent),
                                linkTo: e.premiumContent,
                                notification: l.a.createElement("span", {
                                    className: "SiteNav-newFeatureBadge"
                                }, l.a.createElement(N.a, {
                                    _precomputed: wt("en-US", "NEW", {})
                                })),
                                onClick: function() {
                                    Object(Ot.a)("dashboard_sidebar", S.B.BROWSE, "premium_content"), Object(O.a)(e.premiumContent)
                                },
                                title: wt("en-US", "Premium Content")
                            })
                        }, n.renderLibrarySection = function() {
                            var e = {
                                classes: "/" + this.props.user.get("username") + "/classes",
                                folders: "/" + this.props.user.get("username") + "/folders",
                                profile: "/" + this.props.user.get("username")
                            };
                            return l.a.createElement("div", {
                                className: "SiteNav-section"
                            }, l.a.createElement(lt, {
                                icon: "sets",
                                isActive: this.isActivePath(e.profile),
                                linkTo: e.profile,
                                title: wt("en-US", "Sets") + " (" + this.props.numSetsCreated + ")"
                            }), l.a.createElement(lt, {
                                icon: "folder",
                                isActive: this.isActivePath(e.folders),
                                linkTo: e.folders,
                                title: wt("en-US", "Folders") + " (" + this.props.folders.count() + ")"
                            }), this.props.folders.count() > 0 ? this.renderFolders(!1) : null, l.a.createElement(lt, {
                                icon: "folder-add",
                                isActive: !1,
                                isIndented: !0,
                                onClick: this.handleClickCreateFolder,
                                title: wt("en-US", "Create a folder")
                            }), l.a.createElement(lt, {
                                icon: "people",
                                isActive: this.isActivePath(e.classes),
                                linkTo: e.classes,
                                title: wt("en-US", "Classes") + " (" + this.props.numClassesUsed + ")"
                            }), this.renderClasses(!1), l.a.createElement(yt.a, {
                                actions: {
                                    onClose: this.handleToggleMaxClassesUpsell
                                },
                                isOpen: this.props.isUpsellModalMaxClassesOpen,
                                numClassesAllowed: this.props.numClassesAllowed,
                                numClassesUsed: this.props.numClassesUsed
                            }), this.renderAddOrJoinClassLink())
                        }, n.renderClassesInvitedTo = function(e) {
                            var t = this;
                            return void 0 === e && (e = !0), this.props.classInvitations.map(function(n, r) {
                                var a = Object(Pt.a)(n.getIn(["class", "_webUrl"])).pathname,
                                    o = r >= t.state.expandableItemsThreshold && !t.state.isShowingAllClasses,
                                    i = l.a.createElement(ot, {
                                        invitation: n,
                                        isActive: t.props.activeInviteId === n.get("id"),
                                        openOnMount: !t.isCurrentLocationClassPage() && !Object(Ve.h)() && t.props.showSidebarOnDesktop
                                    });
                                return l.a.createElement(w.a, {
                                    key: r,
                                    transitionName: "SiteNav-classInvitationTransition"
                                }, n.get("_dismissed") ? null : l.a.createElement("div", {
                                    className: Z()({
                                        "SiteNav-menuItem--hidden": o
                                    }),
                                    key: "class-" + r
                                }, l.a.createElement(lt, {
                                    icon: e ? "class" : null,
                                    isActive: t.isActivePath(a),
                                    linkTo: a,
                                    notification: i,
                                    title: n.getIn(["class", "title"])
                                })))
                            })
                        }, n.renderClassesMemberOf = function(e) {
                            var t = this;
                            void 0 === e && (e = !0);
                            var n = this.props.classInvitations.count();
                            return this.props.classMemberships.map(function(r, a) {
                                var o = Object(Pt.a)(r.getIn(["class", "_webUrl"])).pathname,
                                    i = r.get("level") === S.k.APPLICANT,
                                    s = n + a >= t.state.expandableItemsThreshold && !t.state.isShowingAllClasses,
                                    c = r.get("numNotifications"),
                                    u = c > 0 ? l.a.createElement("div", {
                                        className: "SiteNav-classNotification"
                                    }, c) : null,
                                    d = Z()("SiteNav-menuItem--class", {
                                        "SiteNav-menuItem--hidden": s,
                                        "SiteNav-menuItem--pending": i
                                    });
                                return l.a.createElement("div", {
                                    className: d,
                                    key: "class-" + a
                                }, l.a.createElement(lt, {
                                    icon: e ? "class" : null,
                                    isActive: t.isActivePath(o),
                                    linkTo: o,
                                    notification: u,
                                    title: r.getIn(["class", "title"])
                                }))
                            })
                        }, n.renderAddOrJoinClassLink = function() {
                            var e = this.checkIsTeacher(),
                                t = wt("en-US", "Create a class");
                            e || (t = this.props.canCreateClass ? wt("en-US", "Join or create a class") : wt("en-US", "Join a class"));
                            var n = e ? null : "/add-class",
                                r = this.handleClickCreateClass;
                            return this.props.canJoinClasses || (n = null, r = this.handleToggleMaxClassesUpsell), l.a.createElement(lt, {
                                icon: "class-add",
                                isActive: this.isActivePath("/add-class"),
                                isIndented: !0,
                                linkTo: n,
                                onClick: r,
                                title: t
                            })
                        }, n.renderClasses = function(e) {
                            return void 0 === e && (e = !0), l.a.createElement(l.a.Fragment, null, this.props.classInvitations.count() > 0 ? this.renderClassesInvitedTo(e) : null, this.props.classMemberships.count() > 0 ? this.renderClassesMemberOf(e) : null, this.state.isShowingAllClasses ? null : l.a.createElement(lt, {
                                icon: e ? "wedge-down" : null,
                                isActive: !1,
                                isNavViewMore: !0,
                                onClick: this.handleClickShowMoreClasses,
                                title: wt("en-US", "View more")
                            }))
                        }, n.renderClassesSection = function() {
                            return l.a.createElement("div", {
                                className: "SiteNav-section"
                            }, l.a.createElement(ut, {
                                linkTo: "/" + this.props.user.get("username") + "/classes"
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "YOUR CLASSES", {})
                            })), l.a.createElement("div", {
                                className: "SiteNav-menuItemWrapper"
                            }, this.renderClasses()), l.a.createElement("div", {
                                className: "SiteNav-createButtonWrapper"
                            }, this.renderAddOrJoinClassLink()))
                        }, n.renderFoldersSection = function() {
                            return l.a.createElement("div", {
                                className: "SiteNav-section"
                            }, l.a.createElement(ut, {
                                linkTo: "/" + this.props.user.get("username") + "/folders"
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "YOUR FOLDERS", {})
                            })), l.a.createElement("div", {
                                className: "SiteNav-menuItemWrapper"
                            }, this.props.folders.count() > 0 ? this.renderFolders() : null), l.a.createElement("div", {
                                className: "SiteNav-createButtonWrapper"
                            }, l.a.createElement(lt, {
                                icon: "folder-add",
                                isActive: !1,
                                onClick: this.handleClickCreateFolder,
                                title: wt("en-US", "Create a folder")
                            })))
                        }, n.renderFolders = function(e) {
                            var t = this;
                            void 0 === e && (e = !0);
                            var n = this.props.folders.map(function(n, r) {
                                var a = Object(Pt.a)(n.get("_webUrl")).pathname,
                                    o = r >= t.state.expandableItemsThreshold && !t.state.isShowingAllFolders,
                                    i = !0 === t.props.userFoldersByFolderId.getIn(["" + n.get("id"), "hasSrsNotification"]);
                                return l.a.createElement("div", {
                                    className: Z()("SiteNav-menuItem--folder", {
                                        "SiteNav-menuItem--hidden": o
                                    }),
                                    key: "folder-" + r
                                }, l.a.createElement(lt, {
                                    icon: e ? "folder" : null,
                                    isActive: t.isActivePath(a),
                                    linkTo: a,
                                    notification: i ? l.a.createElement(re.a, {
                                        icon: "lightbulb"
                                    }) : null,
                                    title: n.get("name")
                                }))
                            });
                            return l.a.createElement(l.a.Fragment, null, n, this.state.isShowingAllFolders ? null : l.a.createElement(lt, {
                                icon: e ? "wedge-down" : null,
                                isActive: !1,
                                isNavViewMore: !0,
                                onClick: this.handleClickShowMoreFolders,
                                title: wt("en-US", "View more")
                            }))
                        }, n.renderBookmarksSection = function() {
                            var e = this;
                            return l.a.createElement("div", {
                                className: "SiteNav-section"
                            }, l.a.createElement(ut, null, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "BOOKMARKED FOLDERS", {})
                            })), l.a.createElement("div", {
                                className: "SiteNav-menuItemWrapper"
                            }, this.props.bookmarkedFolders.map(function(t, n) {
                                var r = Object(Pt.a)(t.get("_webUrl")).pathname,
                                    a = n >= e.state.expandableItemsThreshold && !e.state.isShowingAllBookmarks;
                                return l.a.createElement("div", {
                                    className: Z()("SiteNav-menuItem-bookmark", {
                                        "SiteNav-menuItem--hidden": a
                                    }),
                                    key: "class-" + n
                                }, l.a.createElement(lt, {
                                    icon: "folder-bookmarked",
                                    isActive: e.isActivePath(r),
                                    linkTo: r,
                                    subtitle: l.a.createElement(N.a, {
                                        _precomputed: wt("en-US", "by {folderCreator}", {
                                            folderCreator: t.getIn(["person", "username"])
                                        })
                                    }),
                                    title: t.get("name")
                                }))
                            }), this.state.isShowingAllBookmarks ? null : l.a.createElement(lt, {
                                icon: "wedge-down",
                                isActive: !1,
                                onClick: this.handleClickShowMoreBookmarks,
                                title: wt("en-US", "{numRemainingBookmarks, plural, other {# more}}", {
                                    numRemainingBookmarks: this.props.bookmarkedFolders.count() - this.state.expandableItemsThreshold
                                })
                            })))
                        }, n.renderBlogSection = function() {
                            return l.a.createElement("div", {
                                className: "SiteNav-section"
                            }, l.a.createElement(ut, {
                                linkTo: "/blog"
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "QUIZLET NEWS", {})
                            })), l.a.createElement("a", {
                                className: "SiteNav-blogSection",
                                href: "/blog/" + this.props.blogEntry.get("slug")
                            }, this.props.blogEntry.get("imagePath") ? l.a.createElement("span", {
                                className: "SiteNav-blogImageWrapper"
                            }, l.a.createElement("img", {
                                className: "SiteNav-blogImage",
                                role: "presentation",
                                src: this.getBlogImageSrc()
                            })) : null, l.a.createElement(Le.a, {
                                size: 4
                            }, this.props.blogEntry.get("title"))))
                        }, n.renderUpgradeFooterLink = function() {
                            if (this.props.user.get("selfIdentifiedTeacherStatus") === S.eb.TEACHER) return l.a.createElement("div", null, l.a.createElement(X.a, {
                                to: Ut.teachers
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Teachers", {})
                            })));
                            if (this.props.showRenewLink) {
                                var e = this.props.isUserInFreeTrial ? l.a.createElement(N.a, {
                                    _precomputed: wt("en-US", "Upgrade now", {})
                                }) : l.a.createElement(N.a, {
                                    _precomputed: wt("en-US", "Renew now", {})
                                });
                                return l.a.createElement("div", null, l.a.createElement(X.a, {
                                    to: Ut.renew
                                }, e))
                            }
                            return this.props.user.get("type") !== S.Eb.TEACHER && this.props.user.get("type") !== S.Eb.PLUS ? l.a.createElement("div", null, l.a.createElement(X.a, {
                                to: Ut.upgrade
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Upgrade", {})
                            }))) : void 0
                        }, n.renderDesktopFooter = function() {
                            return l.a.createElement("div", {
                                className: "SiteNav-footer"
                            }, l.a.createElement("div", null, l.a.createElement(X.a, {
                                to: Ut.helpCenter
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Help Center", {})
                            }))), l.a.createElement("div", null, l.a.createElement(X.a, {
                                to: Ut.privacyPolicy
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Privacy Policy", {})
                            }))), this.renderUpgradeFooterLink(), l.a.createElement("div", {
                                className: "SiteNav-socialIcons"
                            }, l.a.createElement(X.a, {
                                to: Ut.twitter
                            }, l.a.createElement(re.a, {
                                icon: "twitter",
                                size: "medium"
                            })), l.a.createElement(X.a, {
                                to: Ut.instagram
                            }, l.a.createElement(re.a, {
                                icon: "instagram",
                                size: "medium"
                            })), l.a.createElement(X.a, {
                                to: Ut.facebook
                            }, l.a.createElement(re.a, {
                                icon: "facebook",
                                size: "medium"
                            }))))
                        }, n.renderMobileFooter = function() {
                            return l.a.createElement("div", {
                                className: "SiteNav-footer"
                            }, l.a.createElement(D.a, null, l.a.createElement(dt.a, {
                                mobileWidth: .5,
                                width: .5
                            }, this.props.showBlog ? l.a.createElement("div", null, l.a.createElement(X.a, {
                                to: Ut.blog
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Latest Updates", {})
                            }))) : null, l.a.createElement("div", null, l.a.createElement(X.a, {
                                to: Ut.helpCenter
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Help Center", {})
                            }))), l.a.createElement("div", null, l.a.createElement(X.a, {
                                to: Ut.privacyPolicy
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Privacy Policy", {})
                            })))), l.a.createElement(dt.a, {
                                mobileWidth: .5,
                                width: .5
                            }, l.a.createElement("div", null, l.a.createElement(X.a, {
                                to: Ut.mobile
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Mobile", {})
                            }))), this.renderUpgradeFooterLink(), l.a.createElement("div", null, l.a.createElement(X.a, {
                                onClick: this.handleClickLogout,
                                variant: "alert"
                            }, l.a.createElement(N.a, {
                                _precomputed: wt("en-US", "Log out", {})
                            }))))))
                        }, n.renderDesktopNav = function() {
                            return l.a.createElement(F.a, {
                                className: "SiteNav"
                            }, this.renderTopSection(), this.renderLibrarySection(), this.props.bookmarkedFolders.count() > 0 ? this.renderBookmarksSection() : null, this.props.showBlog ? this.renderBlogSection() : null, this.renderDesktopFooter())
                        }, n.renderMobileNav = function() {
                            var e = l.a.createElement("div", {
                                className: "SiteNav-mobileHeader"
                            }, l.a.createElement(X.a, {
                                to: "/",
                                variant: "inverted"
                            }, l.a.createElement(ee.a, null)));
                            return l.a.createElement(H.a, {
                                fullWidthBody: !0,
                                headerContent: e,
                                isOpen: this.props.isMobileNavOpen,
                                onClose: this.props.actions.closeMobileNav,
                                takeoverScreenAt: "m"
                            }, l.a.createElement("div", {
                                className: "SiteNav"
                            }, this.renderTopSection(), this.renderLibrarySection(), this.props.bookmarkedFolders.count() > 0 ? this.renderBookmarksSection() : null, this.props.showBlog ? this.renderBlogSection() : null, this.renderMobileFooter()))
                        }, n.render = function() {
                            var e = this;
                            return l.a.createElement("div", null, l.a.createElement(ge.b, null, function(t) {
                                return t ? e.renderMobileNav() : e.props.showSidebarOnDesktop ? e.renderDesktopNav() : null
                            }), this.props.user ? this.renderCreateModals() : null)
                        }, n.isCurrentLocationClassPage = function() {
                            return this.props.currentLocation.pathname.indexOf("/class/") > -1
                        }, n.isUserUnderAge = function() {
                            return this.props.user && this.props.user.get("_isUnderAge")
                        }, n.isFolderPage = function(e) {
                            return e.includes("/folders/")
                        }, n.isProfileFolderPage = function(e) {
                            return e.endsWith("/folders")
                        }, n.isClassPage = function(e) {
                            return e.includes("/class/")
                        }, n.isProfileClassPage = function(e) {
                            return e.endsWith("/classes")
                        }, n.isProfileRecentPage = function(e) {
                            return e.endsWith("/recent")
                        }, n.isProfilePage = function(e) {
                            return e.endsWith(this.props.user.get("username"))
                        }, n.isHomePage = function(e) {
                            return "/latest" === e
                        }, n.isMemberOfClass = function(e) {
                            return this.props.classMemberships.filter(function(t) {
                                return e.includes(Object(Pt.a)(t.getIn(["class", "_webUrl"])).pathname)
                            }).size > 0
                        }, n.isActivePath = function(e) {
                            var t = this.props.currentLocation.pathname;
                            return this.isHomePage(e) ? this.isProfileRecentPage(t) || kt(e, t) : this.isProfileRecentPage(t) ? kt(e, t) && !this.isProfilePage(e) : this.isProfileFolderPage(t) || this.isFolderPage(t) ? kt(e, t) && this.isProfileFolderPage(e) : this.isProfileClassPage(t) ? kt(e, t) && this.isProfileClassPage(e) : this.isClassPage(t) ? this.isProfileClassPage(e) && this.isMemberOfClass(t) : !(this.isFolderPage(t) && !this.isFolderPage(e)) && kt(e, t)
                        }, t
                    }(c.PureComponent),
                    Mt = Object(Xe.a)("siteNav", {
                        activeInviteId: function(e) {
                            return e.get("activeInviteId")
                        },
                        blogEntry: function(e) {
                            return e.get("blogEntry")
                        },
                        bookmarkedFolders: function(e) {
                            return e.get("bookmarkedFolders")
                        },
                        canCreateClass: function(e) {
                            return e.get("canCreateClass")
                        },
                        canJoinClasses: f.e,
                        classInvitations: function(e) {
                            return e.get("classInvitations")
                        },
                        classMemberships: function(e) {
                            return e.get("classMemberships")
                        },
                        currentLocation: function(e, t, n) {
                            return Object(Je.b)(n)
                        },
                        folders: function(e) {
                            return e.get("folders")
                        },
                        isClassProgressUpsellModalOpen: function(e) {
                            return e.get("isClassProgressUpsellModalOpen")
                        },
                        isCreateClassModalOpen: function(e) {
                            return e.get("isCreateClassModalOpen")
                        },
                        isCreateFolderModalOpen: function(e) {
                            return e.get("isCreateFolderModalOpen")
                        },
                        isCreateImageSetUpsellModalOpen: function(e) {
                            return e.get("isCreateImageSetUpsellModalOpen")
                        },
                        isCreateSetModalOpen: function(e) {
                            return e.get("isCreateSetModalOpen")
                        },
                        isMobileNavOpen: function(e) {
                            return e.get("isMobileNavOpen")
                        },
                        isUpsellModalMaxClassesOpen: function(e) {
                            return e.get("isUpsellModalMaxClassesOpen")
                        },
                        isUserInFreeTrial: function(e) {
                            return e.get("isUserInFreeTrial")
                        },
                        mainSchool: function(e) {
                            return e.get("mainSchool")
                        },
                        numClassesAllowed: function(e) {
                            return e.get("numClassesAllowed")
                        },
                        numClassesUsed: function(e) {
                            return e.get("numClassesUsed")
                        },
                        numSetsCreated: function(e) {
                            return e.get("numSetsCreated")
                        },
                        showBlog: function(e) {
                            return e.get("showBlog")
                        },
                        showNewNav: function(e) {
                            return e.get("shouldShowNewNav")
                        },
                        showRenewLink: function(e) {
                            return e.get("showRenewLink")
                        },
                        showSidebarOnDesktop: function(e) {
                            return e.get("showSidebarOnDesktop")
                        },
                        user: function(e) {
                            return e.get("user")
                        },
                        userFoldersByFolderId: function(e) {
                            return e.get("userFoldersByFolderId")
                        },
                        userSchools: function(e) {
                            return e.get("userSchools")
                        },
                        isTriggeredFromTeacherTips: function(e) {
                            return e.get("isTriggeredFromTeacherTips")
                        }
                    }),
                    Tt = Object(p.connect)(Mt, function(e) {
                        return {
                            actions: Object(m.bindActionCreators)({
                                closeMobileNav: f.b,
                                toggleClassProgressUpsellModal: f.i,
                                toggleCreateClassModal: f.j,
                                toggleCreateFolderModal: f.k,
                                toggleCreateImageSetUpsellModal: f.l,
                                toggleCreateSetModal: f.m,
                                toggleUpsellModalMaxClasses: f.n
                            }, e)
                        }
                    })(It),
                    Lt = n("cmFr"),
                    Nt = n("WHvC"),
                    Dt = n("4K/9"),
                    Ft = n("2YiH"),
                    Rt = 1 / 24 / 6,
                    jt = 5e3,
                    Ht = 1e-4;

                function Bt(e) {
                    switch (e.type) {
                        case "noCredentialsAvailable":
                            break;
                        case "userCanceled":
                            b.c.write(S.m.AUTH__DISABLE_GOOGLE_YOLO, "1", {
                                duration: Rt
                            });
                            break;
                        case "requestFailed":
                            Math.random() < Ht && T.a.warning("Google YOLO request failed or timed out (sample rate: " + Ht + ").", e);
                            break;
                        default:
                            throw e
                    }
                }

                function xt() {
                    return Wt.apply(this, arguments)
                }

                function Wt() {
                    return (Wt = s()(o.a.mark(function e() {
                        var t, n, r, a, i, s;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "520305074949.apps.googleusercontent.com", t = "/google-yolo-login", window.googleyolo.setTimeouts(jt), n = window.googleyolo.retrieve({
                                        supportedAuthMethods: ["https://accounts.google.com"],
                                        supportedIdTokenProviders: [{
                                            uri: "https://accounts.google.com",
                                            clientId: "520305074949.apps.googleusercontent.com"
                                        }]
                                    }), e.prev = 4, e.next = 7, n;
                                case 7:
                                    return r = e.sent, a = r.idToken, e.next = 11, Object(M.f)("/users/check-google-account", {
                                        idToken: a
                                    });
                                case 11:
                                    if (i = e.sent, i.success) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 15:
                                    s = window.location.pathname, Object(O.a)(t + "?googleToken=" + a + "&autoLogin=1&from=" + s), e.next = 22;
                                    break;
                                case 19:
                                    e.prev = 19, e.t0 = e.catch(4), Bt(e.t0);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [4, 19]
                        ])
                    }))).apply(this, arguments)
                }
                if (Object(Lt.a)("headerData", "siteNavData", "coreData", function(e, t, a) {
                        if (Object(g.c)(a), Object(pe.a)(), !e.hidden || !t.hidden) {
                            var i, c = window.document.querySelector("#DashboardSidebarTarget");
                            t.showSidebarOnDesktop = !!c, Object(f.c)(t),
                                function(e) {
                                    var t = e || window.document.querySelector("#MobileNavTarget");
                                    t && Object(Nt.a)(l.a.createElement(p.Provider, {
                                        store: h.b
                                    }, l.a.createElement(Tt, null)), t)
                                }(c), ve.a.LOGGED_IN || Object(Dt.a)(10, s()(o.a.mark(function e() {
                                    return o.a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Promise.all([n.e(2), n.e(0), n.e(70)]).then(n.bind(null, "J9WF"));
                                            case 2:
                                                e.sent.default();
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })));
                            var u = window.document.querySelector("#SiteHeaderReactTarget");
                            if (u) {
                                var d = Qe;
                                Object(Nt.a)(l.a.createElement(p.Provider, {
                                    store: h.b
                                }, l.a.createElement(d, r()({}, e, {
                                    ref: function(e) {
                                        i = e
                                    }
                                }))), u)
                            }
                            ve.a.LOGGED_IN || (ve.a.openSignupModal = function(e, t) {
                                return i && i.handleOpenSignupModal(e, t)
                            }, QLoad("Quizlet.signupModal"), ve.a.openLoginModal = function(e) {
                                return void 0 === e && (e = {}), i && i.handleOpenLoginModal(e)
                            }, QLoad("Quizlet.loginModal")), ve.a.openContactUsModal = function() {
                                return i && i.handleOpenContactUsModal()
                            }, ve.a.clickSearchLink = function() {
                                return i && i.handleClickSearchLink()
                            }, QLoad("Quizlet.clickSearchLink")
                        }
                    }), Object(Ft.a)()) var Vt = window.setInterval(function() {
                    if (window.document.body) {
                        clearInterval(Vt);
                        var e = window.document.createElement("div");
                        e.style.display = "none", window.document.body.insertBefore(e, window.document.body.childNodes[0]), Object(Nt.a)(l.a.createElement(d, null), e)
                    }
                }, 10);
                else ve.a.iconUtils = {
                    loadIcon: function() {},
                    unloadIcon: function() {}
                }, QLoad("Quizlet.iconUtils");
                QWait("dom", function() {
                    Object(Dt.a)(10, s()(o.a.mark(function e() {
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all([n.e(0), n.e(74)]).then(n.bind(null, "WKau"));
                                case 2:
                                    e.sent.default();
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })))
                }), window.addEventListener("load", function() {
                    window.setTimeout(me.c, 1)
                }), Object(Lt.a)("userPromptsData", function(e) {
                    if (!e.hidden) {
                        var t = e.shouldShowBrazilAmbassadorPrompt,
                            r = e.shouldShowConfirmEmailPrompt,
                            a = e.shouldShowTeacherStatusPrompt,
                            i = e.shouldShowResetPasswordPrompt;
                        (r || a || t || i) && Object(Dt.a)(10, s()(o.a.mark(function t() {
                            return o.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Promise.all([n.e(0), n.e(133)]).then(n.bind(null, "e2ho"));
                                    case 2:
                                        t.sent.default(e);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        })))
                    }
                }), window.googleyolo ? xt() : window.onGoogleYoloLoad = function() {
                    xt()
                }
            })
        }
    },
    [
        ["ySsn", 1, 2, 3, 0]
    ]
]);
//# sourceMappingURL=header_and_common.bbac855f0cc1c6386585.a.js.map