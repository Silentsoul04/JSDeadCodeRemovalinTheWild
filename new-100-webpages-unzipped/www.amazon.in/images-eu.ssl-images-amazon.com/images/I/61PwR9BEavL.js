(function(t) {
    var h = window.AmazonUIPageJS || window.P,
        w = h._namespace || h.attributeErrors,
        G = w ? w("IDPMobileAssets", "") : h;
    G.guardFatal ? G.guardFatal(t)(G, window) : G.execute(function() {
        t(G, window)
    })
})(function(t, h, w) {
    t.now("idp-client-constants").execute(function(a) {
        a ? h.areIDPAssetsAlreadyLoaded = !0 : t.declare("idp-client-constants", {
            DEAL_TYPE: {
                DOTD: "DEAL_OF_THE_DAY",
                LD: "LIGHTNING_DEAL",
                BD: "BEST_DEAL",
                ED: "EVENT_DEAL",
                LOCD: "LOCAL_DEAL",
                CD: "COUPON_DEAL"
            },
            BUTTON_ACTION_MAP: {
                addToCart: "ADD_TO_CART",
                joinWaitlist: "JOIN_WAITLIST",
                learnMore: "LEARN_MORE",
                watchDeal: "WATCH_DEAL",
                seeAll: "SEE_MORE",
                chooseOption: "SEE_MORE",
                viewDeal: "SEE_MORE"
            },
            CLIENT_ACTIONS: {
                ADD_TO_CART: "A",
                JOIN_WAITLIST: "J",
                WATCH_DEAL: "W",
                SEE_MORE: "M",
                TITLE: "T",
                IMAGE: "I",
                DEAL_CLICK: "D",
                LEARN_MORE: "L"
            },
            IDP_PREFIX: "IDP:",
            STATE_CONSTANTS: "Constants",
            STATE_DEAL_IDS: "dealIDs",
            WATCHLIST: "watchlist",
            STATE_SCHEDULER_CONFIG: "SchedulerConfig",
            WIDGET_REFMARKER: "gbmi",
            PRIME_EARLY_ACCESS: "PRIME_EARLY_ACCESS",
            PRIME_ONLY_LD: "PRIME_ONLY_LD",
            IDP_GB_WIDGET_CLASS: "gbmiWidget",
            DIV: "div.",
            CONSTANT_Y: "Y",
            IMAGE: "IMAGE",
            TITLE: "TITLE",
            DEALID_CLASS_PREFIX: ".idp-",
            DEAL_STATE: {
                AVAILABLE: "AVAILABLE",
                UPCOMING: "UPCOMING",
                WAITLIST: "WAITLIST",
                RESERVED: "RESERVED",
                WAITLISTFULL: "WAITLISTFULL",
                EXPIRED: "EXPIRED",
                SOLDOUT: "SOLDOUT"
            },
            TIMER_CLASS: ".idp-timer",
            TIMER_TIME_CLASS: ".idp-timer-time",
            DEAL_CONTAINER: ".dealContainer",
            EMPTY_STRING: "",
            ALL_DEALS_CONTAINER_SELECTOR: ".all-deals-widget",
            DEAL_HEADER_SELECTOR: ".dealHeader-ph2\x3espan.a-declarative",
            REF_PLACEMENT_ID_LENGTH: 4,
            DEAL_BATCH_SIZE: 10,
            LOADING_TIMEOUT: 6E3,
            DEFAULT_LOADING_HEIGHT: 1E3,
            DEALS_NAV_HEIGHT_WEB: 130,
            DEALS_NAV_HEIGHT_APP: 80,
            ENABLED: 1,
            DECIMAL: 10,
            DISABLED: 0,
            DISABLE_ACTION: "no-action",
            CUSTOMER_STATE: {
                NONE: "NONE",
                INCART: "INCART",
                CLAIMED: "CLAIMED",
                INWAITLIST: "INWAITLIST",
                PENDINGATC: "PENDINGATC",
                EXPIRED: "EXPIRED"
            },
            DEAL_PARAMS: {
                PERCENT_CLAIMED: "percentClaimed",
                REDEEMED: "redeemed",
                CLAIMED: "isClaimed",
                MS_TO_EXPIRY: "msToExpiry",
                MS_EXPIRY: "msExpiry",
                MS_TO_CUSTOMER_STATE_EXPIRY: "msToCustomerStateExpiry",
                CUSTOMER_STATE: "customerState"
            }
        })
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded ||
        t.when("idp-button-helper", "a-alert", "idp-dom-utils", "idp-client-constants", "idp-service-utils", "idp-state-accessor", "idp-impression-tracker", "ready").register("idp-add-to-cart", function(a, c, d, b, f, k, e) {
            function l(l, a) {
                if (a.dealType === b.DEAL_TYPE.LD) {
                    var c = l.find(".idp-claim-bar");
                    c.removeClass("aok-hidden").removeClass("emptyDiv").show();
                    c.parent().removeClass("aok-hidden").removeClass("emptyDiv").show()
                }
            }

            function n(l, a) {
                if (a.dealType === b.DEAL_TYPE.LD) {
                    var c = l.find(".idp-claim-bar");
                    c.hide();
                    c.parent().hide()
                }
            }

            function r(l) {
                l && l.hide()
            }

            function p(l) {
                l = l.find(".customer-cart-expiry");
                l.hasClass("aok-hidden") || l.addClass("aok-hidden")
            }

            function g(l) {
                for (var b = Array.prototype.slice.call(arguments, 1), a = 0; a < b.length; a++) {
                    var c = b[a];
                    if (c.jquery && c.length && (c = c.closest(".emptyDiv", l)) && c.length && c.hasClass(".emptyDiv")) {
                        c.removeClass(".emptyDiv");
                        break
                    }
                }
            }

            function h(l) {
                return !l.customerState || l.customerState === b.CUSTOMER_STATE.NONE || l.customerState === b.CUSTOMER_STATE.EXPIRED || l.customerState === b.CUSTOMER_STATE.INWAITLIST
            }

            function m(l) {
                var a = [x.PRIME_EARLY_ACCESS, x.PRIME_ONLY_LD, x.PRIME_ONLY_DOTD];
                return f.getConstantFromState(x.isEnabledLocale) && !f.getConstantFromState(x.isPrimeCustomer) && -1 !== a.indexOf(l.primeAccessType)
            }

            function z(l) {
                return !f.getConstantFromState(u.isApp) && (l.isAppEarly || l.isAppOnly)
            }

            function F(l, a, c, e, n, B, m) {
                if (f.getConstantFromState(x.isEnabledLocale) && c.dealState === b.DEAL_STATE.AVAILABLE && !d.isPrimeEarlyAccessDeal(c) && c.primeAccessType === x.PRIME_EARLY_ACCESS) {
                    var r = {};
                    r[m] = "";
                    k.setDealStateWithObject(c,
                        r);
                    D(l, a, c, e, n, B)
                }
            }
            var x = {
                    isPrimeCustomer: "isPrimeCustomer",
                    isEnabledLocale: "isEnabledLocale",
                    PRIME_EARLY_ACCESS: "PRIME_EARLY_ACCESS",
                    PRIME_ONLY_LD: "PRIME_ONLY_LD",
                    PRIME_ONLY_DOTD: "PRIME_ONLY_DOTD",
                    primeAccessType: "primeAccessType"
                },
                u = {
                    isApp: "isApp",
                    isAppEarly: "isAppEarly"
                };
            f.getConstantFromState(u.isApp);
            var D = function(c, b, n, p, y, B) {
                if (!(d.isPrimeEarlyAccessDeal(n) && !f.getConstantFromState(x.isPrimeCustomer) || (d.isAppEarlyAccessDeal(n) || d.isAppOnlyAccessDeal(n)) && !f.getConstantFromState(u.isApp))) {
                    switch (n.dealState) {
                        case "SOLDOUT":
                            r(B);
                            a.hideButton(p);
                            a.showTextInButton(y, ".dealSoldOut");
                            e.recordRender(b);
                            break;
                        case "WAITLISTFULL":
                            if (h(n)) {
                                if (m(n)) break;
                                if (z(n)) break;
                                r(B);
                                a.hideButton(p);
                                a.showTextInButton(y, ".waitlistFull");
                                e.recordRender(b)
                            }
                            break;
                        case "EXPIRED":
                            r(B);
                            a.hideButton(p);
                            a.showTextInButton(y, ".dealExpired");
                            e.recordRender(b);
                            break;
                        case "AVAILABLE":
                            if (h(n)) {
                                r(B);
                                switch (n.itemType) {
                                    case "SINGLE_ITEM":
                                        if (m(n)) break;
                                        if (z(n)) break;
                                        l(c, n);
                                        a.hideButton(y);
                                        d.isEbookDeal(n) && f.getConstantFromState("isEbook") || n.isEbook ? (a.showTextInButton(p,
                                            ".viewDeal"), a.hideAtcIcon(p)) : (a.showTextInButton(p, ".addToCart"), a.showAtcIcon(p));
                                        e.recordRender(b);
                                        break;
                                    case "MULTI_ITEM":
                                        l(c, n);
                                        a.hideButton(y);
                                        a.showTextInButton(p, ".seeAll");
                                        a.hideAtcIcon(p);
                                        e.recordRender(b);
                                        break;
                                    case "VARIATION_ITEM":
                                        a.hideButton(y), a.showTextInButton(p, ".chooseOption"), a.hideAtcIcon(p), e.recordRender(b)
                                }
                                g(c, p, y, B)
                            }
                            break;
                        case "WAITLIST":
                            if (h(n)) {
                                if (m(n)) break;
                                if (z(n)) break;
                                r(B);
                                a.hideButton(y);
                                a.showTextInButton(p, ".joinWaitlist");
                                a.hideAtcIcon(p);
                                e.recordRender(b)
                            }
                            break;
                        case "UPCOMING":
                            r(B), a.hideButton(y), a.hideButton(p), e.recordRender(b)
                    }
                    g(c, p, y, B)
                }
            };
            return {
                render: function(g, k, v, h) {
                    if (g && g.length) {
                        var y = a.getButton(".idp-primary-button", g),
                            B = a.getButton(".idp-disabled-button", g),
                            q = c(".idp-alert", g);
                        f.getConstantFromState(x.isEnabledLocale) && !d.isPrimeEarlyAccessDeal(v) && f.getConstantFromState(x.isEnabledLocale) && v.dealState === b.DEAL_STATE.AVAILABLE && !d.isPrimeEarlyAccessDeal(v) && v.primeAccessType === x.PRIME_EARLY_ACCESS && F(g, k, v, y, B, q, x.primeAccessType);
                        d.isAppEarlyAccessDeal(v) ||
                            v.dealState === b.DEAL_STATE.AVAILABLE && !d.isAppEarlyAccessDeal(v) && v.isAppEarly && F(g, k, v, y, B, q, u.isAppEarly);
                        h.dealState && D(g, k, v, y, B, q);
                        if (h.customerState || h.isAttemptingAddToCart) {
                            switch (v.customerState) {
                                case "NONE":
                                    D(g, k, v, y, B, q);
                                    break;
                                case "INCART":
                                    n(g, v);
                                    a.hideButton(y);
                                    a.hideButton(B);
                                    a.showTextInButton(q._$element, ".dealInCart");
                                    v.dealType === b.DEAL_TYPE.LD && (h = g.find(".customer-cart-expiry"), h.hasClass("aok-hidden") || h.removeClass("aok-hidden").show(), g.find(b.DEAL_HEADER_SELECTOR).attr("data-action",
                                        b.DISABLE_ACTION));
                                    e.recordRender(k);
                                    break;
                                case "CLAIMED":
                                    p(g);
                                    n(g, v);
                                    a.hideButton(y);
                                    a.hideButton(B);
                                    a.showTextInButton(B, ".dealPurchased");
                                    e.recordRender(k);
                                    break;
                                case "INWAITLIST":
                                    if (m(v)) break;
                                    if (z(v)) break;
                                    p(g);
                                    a.hideButton(y);
                                    a.hideButton(B);
                                    a.showTextInButton(q._$element, ".onWaitlist");
                                    e.recordRender(k);
                                    break;
                                case "PENDINGATC":
                                    if (m(v)) break;
                                    if (z(v)) break;
                                    p(g);
                                    r(q);
                                    a.hideButton(B);
                                    a.showTextInButton(y, ".addToCart");
                                    e.recordRender(k);
                                    break;
                                case "EXPIRED":
                                    p(g), l(g, v), D(g, k, v, y, B, q), e.recordRender(k)
                            }(k =
                                c(".idp-alert-info", g)._$element) && v.isAttemptingAddToCart ? (n(g, v), a.hideButton(y), a.hideButton(B), a.showTextInButton(k, ".attemptingAddToCart")) : k.addClass("aok-hidden")
                        }
                    }
                }
            }
        });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "a-button", "idp-dom-utils").register("idp-button-helper", function(a, c, d) {
        return {
            getButton: function(c, d) {
                return a.$(c, d)
            },
            hideAtcIcon: function(c) {
                c && c.length && c.hasClass("add-to-cart-icon") && c.removeClass("add-to-cart-icon")
            },
            showAtcIcon: function(c) {
                c && c.length && !c.hasClass("add-to-cart-icon") &&
                    c.addClass("add-to-cart-icon")
            },
            showTextInButton: function(c, a) {
                c.hasClass("aok-hidden") && c.removeClass("aok-hidden");
                c.hasClass("emptyDiv") && c.removeClass("emptyDiv");
                var k = c.find(".a-button-text, .a-alert-content").find("span:not(" + a + ")"),
                    e = c.find(a);
                k && k.length && k.hide();
                d.show(e);
                d.show(c)
            },
            hideButton: function(c) {
                c.hide()
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-dom-utils", "idp-client-constants", "idp-impression-tracker").register("idp-claimbar", function(a, c, d, b) {
        function f(a) {
            if (c.getText("enableMultiLang")) {
                var l =
                    c.getText("sold");
                return String.localizeFormat(l, Math.floor(a.percentClaimed))
            }
            return Math.floor(a.percentClaimed) + "% Sold"
        }
        var k = function(c, l) {
            l.dealState !== d.DEAL_STATE.UPCOMING && (l.dealState !== d.DEAL_STATE.SOLDOUT && l.dealState !== d.DEAL_STATE.EXPIRED ? c.hasClass("notAvailable") && c.removeClass("notAvailable") : c.hasClass("notAvailable") || c.addClass("notAvailable"))
        };
        return {
            render: function(a, l, n, r) {
                if (n.dealType === d.DEAL_TYPE.LD && n && r) {
                    if (r.percentClaimed && !c.isEmpty(n.percentClaimed)) {
                        b.recordRender(l);
                        l = a.find(".progress-bar");
                        var p = l.find(".deal-progress"),
                            g = a.find(".progress-bar-text");
                        p && p.length && (p.width(n.percentClaimed + "%"), k(l, n));
                        g && g.length && g.text(f(n))
                    }
                    r.dealState && (l = a.find(".progress-bar"), k(l, n))
                }
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-add-to-cart", "idp-claimbar", "idp-timers", "ready").register("idp-dom-updater", function(a, c, d, b) {
        return {
            render: function(a, k, e, l) {
                d.render(a, k, e, l);
                c.render(a, k, e, l);
                b.render(a, e, l)
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded ||
        t.when("A", "idp-impression-tracker").register("redirect-url", function(a, c) {
            var d = function(c) {
                h.amazon && h.amazon.mash ? h.amazon.mash.navigate({
                    url: c
                }) : h.location.href = c
            };
            a.declarative("redirect-to-url", "click", function(a) {
                a.$event.preventDefault();
                var f, k;
                null !== a.data.dealID && a.data.dealID !== w && null !== a.data.actionType && a.data.dealID !== w && (f = a.data.dealID, k = a.data.actionType, c.recordAction(f, k));
                d(a.data.url)
            });
            return {
                redirect: d
            }
        });
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-dom-utils", "idp-client-constants",
        "idp-state-accessor", "idp-service-utils").register("idp-timers", function(a, c, d, b, f) {
        function k(c, a) {
            var l = e(c);
            l && l.length && l.text(a)
        }

        function e(c) {
            if ((c = c.find(d.TIMER_CLASS)) || c.length) return (c = c.find(d.TIMER_TIME_CLASS)) && c.length ? c : w
        }

        function l(c, a) {
            return (!c.msToStart || c.msToStart && 0 > c.msToStart) && (c.dealType === d.DEAL_TYPE.BD || c.dealType === d.DEAL_TYPE.DOTD) && c.dealState === d.DEAL_STATE.UPCOMING
        }

        function n(c) {
            c = new Date(c);
            var a = new Date((new Date).getTime());
            a.setHours(24, 0, 0, 0);
            return 6E4 >= Math.abs(c -
                a) ? !0 : !1
        }

        function r(c) {
            c.hasClass("aok-hidden") || c.addClass("aok-hidden")
        }

        function p(c) {
            c.hasClass("aok-hidden") && c.removeClass("aok-hidden")
        }

        function g(c) {
            c && c.length && c.hasClass("a-color-success") && c.removeClass("a-color-success");
            return c
        }

        function h(c) {
            c && c.length && !c.hasClass("a-color-success") && c.addClass("a-color-success");
            return c
        }

        function m(c, a) {
            var l = e(c);
            g(l);
            k(c, a)
        }

        function z(c, a) {
            return c += 6E4 * a.earlyAccessDuration
        }

        function F(a, l) {
            var b = c.getText("dealStartsInText"),
                d = l.msStart - Date.now();
            D(l) && (d = z(d, l));
            (d = c.formatTime(d, !0)) ? (b = A(b, d), d = e(a), h(d), k(a, b)) : k(a, "")
        }

        function x(a, l) {
            var d = c.getText("dealStartsForAllText"),
                b = c.formatTime(6E4 * l.primeAccessDuration + l.msToStart, !0),
                d = c.getText("enableMultiLang") ? String.localizeFormat(d, b) : d + " " + b,
                b = e(a);
            h(b);
            k(a, d)
        }

        function u(a) {
            return f.getConstantFromState("isEnabledLocale") && a.dealType === d.DEAL_TYPE.LD && c.isUpcomingPrimeEarlyAccessDeal(a) && !f.getConstantFromState("isPrimeCustomer") ? !0 : !1
        }

        function D(a) {
            return a.dealType === d.DEAL_TYPE.LD &&
                c.isUpcomingAppEarlyAccessDeal(a) && !f.getConstantFromState(C.isApp) ? !0 : !1
        }

        function E(a, l) {
            var d = l.msEnd - Date.now();
            if (0 < d) {
                var b = c.getText("dealEndsInText"),
                    e = a.find(".idp-timer");
                if (e || e.length)
                    if (e = e.find(".idp-timer-time"), g(e), e && e.length && (d = c.formatTime(d, !0))) b = A(b, d), e.text(b)
            } else 0 >= d && k(a, "")
        }

        function A(a, l) {
            return c.getText("enableMultiLang") ? String.localizeFormat(a, l) : a + l
        }

        function v(a, l) {
            var d = e(a);
            h(d);
            k(a, c.getText("dealAvailableNow") || "Deal is available now")
        }
        var C = {
            isApp: "isApp"
        };
        f.getConstantFromState(C.isApp);
        b.getState(d.IDP_PREFIX + d.STATE_CONSTANTS);
        return {
            render: function(a, b, e) {
                var g = b.msToStart;
                u(b) && (g += 6E4 * b.primeAccessDuration);
                D(b) && (g = z(g, b));
                if (b.dealState === d.DEAL_STATE.UPCOMING && 0 >= g) v(a, b);
                else {
                    var f;
                    f = g;
                    f = !c.isEmpty(b.dealState) && b.dealState === d.DEAL_STATE.AVAILABLE && b.transitionedFromUpcoming && 0 >= f ? !0 : !1;
                    if (f) e.dealState && v(a, b);
                    else {
                        a: {
                            if (!c.isEmpty(b.dealState)) {
                                if (b.dealState === d.DEAL_STATE.EXPIRED || b.dealState === d.DEAL_STATE.SOLDOUT || "PRIME_ONLY_DOTD" ===
                                    b.primeAccessType) {
                                    g = !1;
                                    break a
                                }
                                if (b.transitionedFromUpcoming && 0 >= g) {
                                    g = !1;
                                    break a
                                }
                            }
                            g = !0
                        }
                        if (g) {
                            if (b && e) {
                                e.msToStart && !c.isEmpty(b.msToStart) && (l(b, e) ? k(a, c.getText("dealStartingNow") || "Deal starting now...") : b.dealType === d.DEAL_TYPE.LD || b.dealType === d.DEAL_TYPE.BD ? (g = b.msStart - Date.now(), u(b) && (g += 6E4 * b.primeAccessDuration), D(b) && (g = z(g, b)), 72E5 <= g ? (g = new Date(b.msStart), f = new Date, f.setDate(f.getDate() + 1), f.setHours(24, 0, 0, 0), g > f ? (f = b.msStart - Date.now(), g = c.getText("dealStartsText"), u(b) && (f += 6E4 *
                                    b.primeAccessDuration, g = c.getText("dealStartsForAllOnText")), D(b) && (f = z(f, b)), 0 < f ? (f = new Date(Date.now() + f), g = A(g, c.formatUpcomingDate(f)), m(a, g)) : k(a, "")) : n(b.msStart) ? (g = c.getText("startsAtMidnight"), u(b) && (g = c.getText("dealStartsForAllAtMidnightText")), Date.now(), k(a, g)) : (g = new Date(b.msStart), f = new Date, f.setHours(24, 0, 0, 0), g > f ? (f = b.msStart - Date.now(), g = c.getText("dealStartsTomorrowAtText"), u(b) && (f += 6E4 * b.primeAccessDuration, g = c.getText("dealStartsForAllAtText")), D(b) && (f = z(f, b)), 0 < f ? (f = new Date(Date.now() +
                                    f), g = A(g, c.formatHHMM(f)), m(a, g)) : k(a, "")) : (g = new Date(b.msStart), f = new Date, f.setHours(24, 0, 0, 0), g < f && (f = b.msStart - Date.now(), g = c.getText("dealStartsAtText"), u(b) && (f += 6E4 * b.primeAccessDuration, g = c.getText("dealStartsForAllAtText")), D(b) && (f = z(f, b)), 0 < f ? (f = new Date(Date.now() + f), g = A(g, c.formatHHMM(f)), m(a, g)) : k(a, ""))))) : u(b) ? x(a, b) : F(a, b)) : b.dealType === d.DEAL_TYPE.DOTD && k(a, ""), p(a.find(".idp-timer-time")));
                                if (e.msToEnd && !c.isEmpty(b.msToEnd) && !l(b, e) && (!b.msToStart || b.msToStart && 0 > b.msToStart))
                                    if (u(b)) x(a,
                                        b);
                                    else if (D(b)) F(a, b);
                                else if (b.dealType === d.DEAL_TYPE.LD) E(a, b);
                                else if (b.dealType === d.DEAL_TYPE.BD || b.dealType === d.DEAL_TYPE.DOTD)
                                    if (72E5 <= b.msEnd - Date.now())
                                        if (n(b.msEnd)) g = c.getText("endsAtMidnight"), k(a, g);
                                        else {
                                            g = new Date;
                                            f = new Date(b.msEnd);
                                            var h = new Date(g.getTime());
                                            h.setHours(24, 0, 0, 0);
                                            g.getMonth() === f.getMonth() && g.getDate() === f.getDate() && 6E4 < Math.abs(f.getTime() - h.getTime()) ? E(a, b) : (g = c.getText("dealEndsText"), g = A(g, c.getDDMM(Date.now() + b.msToEnd)), k(a, g))
                                        }
                                else E(a, b);
                                e.msToExpiry && !c.isEmpty(b.msToExpiry) &&
                                    0 <= b.msToExpiry && !c.isEmpty(b.customerState) && b.customerState === d.CUSTOMER_STATE.INCART ? (g = b.msExpiry - Date.now(), b = a.find(".customer-cart-expiry"), e = b.find(".cart-expiry-timer"), a = a.find(".idp-claim-bar"), 0 < g) ? e && (g = c.formatTime(g, !1)) && (r(a), e.text(g + " "), p(b)) : 0 >= g && (r(b), p(a)) : !c.isEmpty(b.msToExpiry) && 0 >= b.msToExpiry && (b = a.find(".customer-cart-expiry"), a = a.find(".idp-claim-bar"), b && b.length && r(b), a && a.length && p(a))
                            }
                        } else k(a, "")
                    }
                }
            },
            renderStartsForAll: x,
            renderStartsIn: F
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded ||
        t.when("idp-state-accessor", "idp-client-constants").register("idp-dom-utils", function(a, c) {
            function d(a) {
                if (0 > a) return "";
                var c = new Date(a);
                a = f[c.getMonth()];
                c = c.getDate();
                c = k(c);
                return c + " " + a
            }
            var b = a.getState(c.IDP_PREFIX + c.STATE_CONSTANTS),
                f = (b = b && b.months) && JSON.parse(b).months || "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
            String.localizeFormat = function(a) {
                var c = Array.prototype.slice.call(arguments, 1);
                return a.replace(/\{(\d+)\}/g, function(a, b) {
                    return c[b]
                })
            };
            var k = function(a) {
                    return 10 >
                        a ? "0" + a : a
                },
                e = function(a) {
                    var c = "",
                        b = a.getHours();
                    a = a.getMinutes();
                    var e = !1;
                    12 > b ? e = !1 : 12 <= b && (e = !0);
                    0 === b && (b = 12);
                    e && 12 < b && (b -= 12);
                    c = c.concat(k(b));
                    c = c.concat(":", k(a));
                    return c = e ? c.concat(" PM") : c.concat(" AM")
                };
            return {
                getText: function(b) {
                    var e = a.getState(c.IDP_PREFIX + c.STATE_CONSTANTS);
                    return e ? e[b] || "" : ""
                },
                isEmpty: function(a) {
                    return null === a || a === w || "" === a
                },
                formatTime: function(a, c) {
                    if (!(0 > a)) {
                        var b = "";
                        if (864E5 > a) {
                            var e = Math.floor(a / 1E3),
                                d = e % 60,
                                e = Math.floor(e / 60),
                                f = e % 60;
                            if (c) {
                                var m = 0;
                                36E5 < a ? (e = Math.floor(e /
                                    60), m = e % 24) : 36E5 === a && (m = 1);
                                b = b.concat(k(m) + ":")
                            }
                            b = b.concat(k(f) + ":" + k(d))
                        }
                        return b
                    }
                },
                formatHHMM: e,
                getDDMM: d,
                formatUpcomingDate: function(a) {
                    return a = "".concat(d(a.getTime()), " ", e(a))
                },
                show: function(a) {
                    a && a.length && (a.show(), a.hasClass("aok-hidden") && a.removeClass("aok-hidden"))
                },
                isPrimeEarlyAccessDeal: function(a) {
                    return a.primeAccessType && "PRIME_EARLY_ACCESS" === a.primeAccessType && 0 >= a.msToStart && -a.msToStart < 6E4 * a.primeAccessDuration ? !0 : !1
                },
                isUpcomingPrimeEarlyAccessDeal: function(a) {
                    return a.primeAccessType &&
                        "PRIME_EARLY_ACCESS" === a.primeAccessType && 0 < a.msToStart + 6E4 * a.primeAccessDuration ? !0 : !1
                },
                isAppEarlyAccessDeal: function(a) {
                    var c = 0 >= a.msToStart && Math.abs(a.msToStart) < 6E4 * a.earlyAccessDuration;
                    return a.isAppEarly && c ? !0 : !1
                },
                isUpcomingAppEarlyAccessDeal: function(a) {
                    var c = 0 < a.msToStart + 6E4 * a.earlyAccessDuration;
                    return a.isAppEarly && c ? !0 : !1
                },
                isAppOnlyAccessDeal: function(a) {
                    return a.isAppOnly && 0 >= a.msToStart ? !0 : !1
                },
                isEbookDeal: function(a) {
                    return a.isEbook && 0 >= a.msToStart ? !0 : !1
                }
            }
        });
    "use strict";
    h.areIDPAssetsAlreadyLoaded ||
        t.when("A", "jQuery", "ajax-util", "deals-nav", "idp-filter", "idp-scroll-handler", "csm-utils", "idp-client-constants", "lazyload-utils", "idp-state-accessor", "idp-dom-utils").register("page-hooks", function(a, c, d, b, f, k, e, l, n, r, p) {
            function g(m, f, k, p) {
                null !== u && (u.abort(), u = null);
                u = a.ajax(f, {
                    method: "get",
                    params: {
                        ajax: 1,
                        updateNav: k
                    },
                    accepts: C.acceptHeader,
                    success: function() {
                        var v = r.getState(l.IDP_PREFIX + l.STATE_DEAL_IDS);
                        y && y.isLazyLoadEnabled && D && n.checkKeyInLazyLoadDataCache(f) && v && 5 >= Object.keys(v).length &&
                            (v = n.getLazyLoadDataCache(f), a.$(n.Constants.LAZYLOAD_CONTENT_SELECTOR).append(v.domData));
                        e.incrementCSMCounter("ajaxTotalSuccess");
                        !1 === d.verifyAjaxSuccess(k) && (e.incrementCSMCounter("ajaxContentFailure"), g(m, f, k, p));
                        e.incrementCSMCounter("ajaxSuccess");
                        d.resetStates();
                        y && y.isLazyLoadEnabled && n.checkKeyInLazyLoadDataCache(f) && D && m.originalEvent && 0 < m.originalEvent.state.scrollTop ? d.scrollInitLazyLoad(m, p) : d.scrollInit(m, p);
                        d.hideEmptyDiv();
                        c(".ajax-error-page").addClass("aok-hidden");
                        a.trigger("a:pageAjaxUpdate");
                        b.init();
                        D && m.originalEvent ? y && y.isLazyLoadEnabled ? 0 < m.originalEvent.state.scrollTop ? n.checkKeyInLazyLoadDataCache(f) ? h.scrollTo(0, m.originalEvent.state.scrollTop) : B ? d.scrollInit(m, p) : h.scrollTo(0, m.originalEvent.state.scrollTop) : d.scrollInit(m, p) : 0 < m.originalEvent.state.scrollTop && (B ? d.scrollInit(m, p) : h.scrollTo(0, m.originalEvent.state.scrollTop)) : d.scrollInit(m, p);
                        B = D = !1
                    },
                    error: function() {
                        e.incrementCSMCounter("ajaxTotalError");
                        D && 0 === E && d.isAppRequest && d.displayEmptyDiv(k);
                        ++E;
                        3 > E ? g(m, f, k, p) : (e.incrementCSMCounter("ajaxErrorDisplay"),
                            d.hideEmptyDiv(), c(".ajax-error-page").removeClass("aok-hidden"), c(".ajax-try-again").click(function() {
                                d.loadUrl(f)
                            }))
                    },
                    abort: function() {
                        h.clearTimeout(d.loadingTimer);
                        e.incrementCSMCounter("ajaxAbort")
                    }
                });
                return !0
            }

            function q(a, c) {
                return p.getText("enableMultiLang") ? String.localizeFormat(c, a) : a + " " + c
            }

            function m(a) {
                if (d.isHistorySupported) {
                    var b = {
                            phPS: !0,
                            scrollTop: 0,
                            url: a
                        },
                        b = c.extend({}, h.history.state, b);
                    history.pushState(b, w, a)
                }
                F = x;
                x = a
            }

            function z(a) {
                d.isHistorySupported ? (d.initializeAjaxScope(),
                    f.hideView(), K(), I(), d.displayEmptyDiv(l.DISABLED)) : d.loadUrl(a)
            }
            var F, x, u = null,
                D = !1,
                E = 0,
                A = !1,
                v = l.DISABLED,
                C = a.state("ajax-transition-state") || "0",
                y = r.getState("lazy-load-state"),
                B = !1;
            a.on("a:pageAjaxUpdate", function(b) {
                a.loadDynamicImage(c(".a-dynamic-image"));
                null !== u && (u.abort(), u = null);
                E = 0;
                A = !1;
                a.loadImageManually(c(".dealAsinImage"));
                v = l.DISABLED;
                P()
            });
            var K = function() {
                    x = location.href;
                    if (d.isHistorySupported) {
                        var a = {
                                phPS: !0,
                                scrollTop: 0,
                                url: location.href
                            },
                            a = c.extend({}, h.history.state, a);
                        history.replaceState(a,
                            w, location.href)
                    }
                },
                P = function() {
                    var b = a.state("IDP:viewAllWidgetConfig"),
                        e = a.state("IDP:Constants"),
                        d = c(".viewALLWidgetTitle").text().trim(),
                        l = c(".deal-item-count").text().trim(),
                        g;
                    if (p.getText("enableMultiLang")) g = c(".deal-item-count-number").text().trim(), g = 0 < parseInt(g, 10);
                    else {
                        g = a.state("IDP:Constants");
                        var m = c(".viewALLWidgetTitle").text().trim(),
                            f = c(".deal-item-count").text().trim();
                        g = -1 < m.indexOf(f) || -1 < m.indexOf(g.oneDeal)
                    }
                    g ? (c(".seeAll-header-itemCount").text(l), c(".seeAll-header-title").text(e.categoryName)) :
                        (p.getText("enableMultiLang") ? g = (g = c(".deal-item-count-number").text().trim()) && 0 >= parseInt(g, 10) : (g = a.state("IDP:Constants"), g = -1 < c(".viewALLWidgetTitle").text().trim().indexOf(g.noDealIn)), g ? (c(".seeAll-header-title").text(e.categoryName), c(".seeAll-header-itemCount").text(l)) : b ? (c(".seeAll-header-title").text(b.widgetName), 0 < c(".noDealsWidget").length ? c(".seeAll-header-itemCount").text(q("0", e.dealHeading)) : b.widgetItemCount ? c(".seeAll-header-itemCount").text(q(b.widgetItemCount, e.dealHeading)) :
                            c(".seeAll-header-itemCount").text(" ")) : (c(".seeAll-header-itemCount").text(l), c(".seeAll-header-title").text(d)));
                    b = b && b.widgetColor || e.defaultBGHeadingColor;
                    c(".deals-nav-header").css("background-color", b);
                    0 === c(".dealHeadingRow #filter_view").length ? (c(".seeAll-header-details").css("max-width", "100%"), c(".seeall-filter-button").addClass("aok-hidden")) : (c(".seeAll-header-details").css("max-width", "66%"), c(".seeall-filter-button").removeClass("aok-hidden"))
                },
                I = function() {
                    x = location.href;
                    if (d.isHistorySupported) {
                        var a = {
                                phPS: !0,
                                scrollTop: c(h).scrollTop(),
                                url: location.href
                            },
                            a = c.extend({}, h.history.state, a);
                        history.replaceState(a, w, location.href)
                    }
                },
                J = function(a, c, b, e) {
                    c !== w && (c = c.call ? c(a.target) : c, g(a, c, b, e) && m(c))
                };
            c(h).bind("popstate", function(a) {
                if (d.isHistorySupported && a.originalEvent.state && a.originalEvent.state.phPS && (a.preventDefault(), !(v !== l.DISABLED || 0 < a.originalEvent.state.url.indexOf("#filter"))))
                    if (A && v === l.DISABLED) m(a.originalEvent.state.url), f.hideView(), f.cancelFilters();
                    else {
                        d.initializeAjaxScope();
                        var c = l.ENABLED;
                        D = !0;
                        var b = l.ENABLED,
                            e = a.originalEvent.state.url,
                            b = e.length;
                        "#top" === e.substr(b - 4, 4) && (e = e.substr(0, b - 4));
                        null !== d.getUrlParamValue(x, "tabId") && null === d.getUrlParamValue(x, "viewAll") ? B = !0 : null !== d.getUrlParamValue(x, "viewAll") && (B = !0);
                        null !== d.getUrlParamValue(x, "viewAll") && null === d.getUrlParamValue(F, "viewAll") ? B = !1 : null !== d.getUrlParamValue(x, "viewAll") && null !== d.getUrlParamValue(F, "viewAll") && (d.isAppRequest || (B = !1));
                        null === d.getUrlParamValue(e, "tabId") && null === d.getUrlParamValue(x,
                            "tabId") || null !== d.getUrlParamValue(e, "viewAll") || null !== d.getUrlParamValue(x, "viewAll") ? null === d.getUrlParamValue(e, "page") && null === d.getUrlParamValue(x, "page") || !(null === d.getUrlParamValue(e, "viewAll") && null === d.getUrlParamValue(x, "viewAll") || null !== d.getUrlParamValue(e, "viewAll") && null !== d.getUrlParamValue(x, "viewAll")) ? (b = l.ENABLED, c = l.DISABLED) : b = l.DISABLED : (b = "tab-1", null !== d.getUrlParamValue(e, "tabId") && (b = "tab-" + d.getUrlParamValue(e, "tabId")), d.switchTab(b), b = l.DISABLED);
                        d.scrollInit(a, c);
                        n.hideElementById(n.Constants.LAZYLOAD_SPINNER_SELECTOR);
                        d.displayEmptyDiv(b);
                        g(a, e, b, c);
                        F = x;
                        x = a.originalEvent.state.url
                    }
            });
            a.on("a:popover:show:filter_view", function(a) {
                A = !0;
                v = l.DISABLED
            });
            a.on("a:popover:hide:filter_view", function(a) {
                A = !1;
                v === l.DISABLED && (f.cancelFilters(), v = -2)
            });
            a.declarative("ajax-apply-filters", "click", function(a) {
                e.incrementCSMCounter("applyFilterClick");
                v = 1;
                z(f.updateFilters())
            });
            a.declarative("ajax-clear-filters", "click", function(a) {
                e.incrementCSMCounter("clearFilterClick");
                v = -1;
                z(f.clearFilters())
            });
            a.on("a:popover:afterHide:filter_view", function(a) {
                if (1 === v) {
                    var c = f.updateFilters();
                    d.scrollInit(a, l.DISABLED);
                    J(a, c, l.DISABLED, l.DISABLED)
                } else -1 === v ? (c = f.clearFilters(), d.scrollInit(a, l.DISABLED), J(a, c, l.DISABLED, l.DISABLED)) : (v = l.DISABLED, A = !1)
            });
            return {
                ajaxify: J,
                handler: g,
                setCurrentUrlState: K,
                setScrollState: I,
                setSeeAllHeaderValue: P
            }
        });
    "use strict";
    t.when("A", "jQuery", "page-hooks", "ajax-util", "csm-utils", "idp-client-constants", "idp-state-accessor", "lazyload-utils").execute(function(a,
        c, d, b, f, k, e, l) {
        var n = !(!h.amazon || !h.amazon.mash),
            r = e.getState("lazy-load-state");
        e.getState("web-lab-states");
        if (a.state("ajax-transition-state") !== w) {
            f.incrementCSMCounter("totalRequests");
            h.addAjaxCF = {
                a: 1,
                cf: function(a) {
                    0 === --a.addAjaxCF.a && a.uet("cf", a.ajaxScope)
                }
            };
            h.addAjaxAF = {
                a: 1,
                af: function(a) {
                    0 === --a.addAjaxAF.a && a.uet("af", a.ajaxScope)
                }
            };
            c(".view-more-button, .deals-nav-back-button, .pagination-button").each(function() {
                c(this).removeClass("a-button-disabled")
            });
            var p = function(c, e, g, n) {
                    b.isHistorySupported ?
                        (b.initializeAjaxScope(), f.incrementCSMCounter("ajaxClick"), a.trigger("a:ajaxClick"), d.setScrollState(), b.scrollInit(c, n), l.hideElementById(l.Constants.LAZYLOAD_SPINNER_SELECTOR), b.displayEmptyDiv(g), d.ajaxify(c, e, g, n)) : (f.incrementCSMCounter("historyNotSupported"), b.loadUrl(e))
                },
                g = function(e, g, r, k) {
                    if (g !== w) {
                        var p = location.href,
                            q = g.call ? g(e.target) : g;
                        b.isHistorySupported && (0 <= q.indexOf("/gp/aw/gb") || 0 <= q.indexOf("/gp/mobile/deals") || 0 <= q.indexOf("/idp/horizonte/app") || 0 <= q.indexOf("/idp/horizonte/web")) ?
                            (l.checkKeyInLazyLoadDataCache(p) && (q = l.getLazyLoadDataCache(p), q.scrollTop = c(h).scrollTop(), l.putLazyLoadDataCache(p, q), n || h.sessionStorage.setItem(p, JSON.stringify(q))), b.initializeAjaxScope(), f.incrementCSMCounter("ajaxClick"), a.trigger("a:ajaxClick"), d.setScrollState(), b.scrollInit(e, k), l.hideElementById(l.Constants.LAZYLOAD_SPINNER_SELECTOR), b.displayEmptyDiv(r), d.ajaxify(e, g, r, k)) : (f.incrementCSMCounter("historyNotSupported"), 0 > q.indexOf("/gp/aw/gb") && 0 > q.indexOf("/gp/mobile/deals") && 0 > q.indexOf("/idp/horizonte/app") &&
                                0 > q.indexOf("/idp/horizonte/web") && l.checkKeyInLazyLoadDataCache(p) && h.sessionStorage && (q = l.getLazyLoadDataCache(p), q.scrollTop = c(h).scrollTop(), n || h.sessionStorage.setItem(p, JSON.stringify(q))), b.loadUrl(g))
                    }
                },
                q = function() {
                    h.addAjaxAF.a = 1;
                    h.addAjaxCF.a = 1;
                    d.setCurrentUrlState();
                    d.setSeeAllHeaderValue();
                    c(".view-more-button, .deals-nav-back-button, .sponsored-viewAll, .nav-tab, .pagination-button").unbind("click");
                    c(".view-more-button, .deals-nav-back-button, .sponsored-viewAll").bind("click", function(a) {
                        a.preventDefault();
                        p(a, a.target.href || a.currentTarget.href, k.ENABLED, k.DISABLED)
                    });
                    c(".pagination-button").bind("click", function(a) {
                        a.preventDefault();
                        p(a, a.target.href, k.DISABLED, k.ENABLED)
                    });
                    c(".nav-tab").bind("click", function(a) {
                        a.preventDefault();
                        p(a, a.target.href, k.DISABLED, k.ENABLED);
                        b.switchTab(a.target.id)
                    })
                };
            a.declarative("ajax-redirect", "click", function(a) {
                a.data.url ? g(a, a.data.url, k.ENABLED, k.DISABLED) : g(a, a.data.egressUrl, k.ENABLED, k.DISABLED)
            });
            a.declarative("ajax-pagination", "click", function(a) {
                p(a, a.data.url,
                    k.DISABLED, k.ENABLED)
            });
            a.declarative("ajax-tab", "click", function(a) {
                r && r.isLazyLoadEnabled && (l.resetLazyLoadDataCache(), h.sessionStorage.removeItem(location.href));
                p(a, a.data.url, k.DISABLED, k.ENABLED);
                b.switchTab(a.data.id)
            });
            q();
            a.on("a:pageAjaxUpdate", function() {
                q();
                h.uex("ld", h.ajaxScope)
            });
            a.on("a:pageLazyLoadUpdate", function() {
                c(".view-more-button, .deals-nav-back-button, .sponsored-viewAll").unbind("click");
                c(".view-more-button, .deals-nav-back-button, .sponsored-viewAll").bind("click", function(a) {
                    a.preventDefault();
                    p(a, a.target.href, k.ENABLED, k.DISABLED)
                })
            })
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "jQuery", "idp-client-constants", "idp-state-accessor").register("ajax-util", function(a, c, d, b) {
        var f = null,
            k = !1,
            e = !(!h.amazon || !h.amazon.mash),
            k = function() {
                if (!(h.history && history.pushState && history.replaceState)) return !1;
                var a = h.navigator.userAgent,
                    c = /iPhone|iPad|iPod/.test(a),
                    b = null,
                    e = -1 !== a.indexOf("Android"),
                    d = null,
                    f = null,
                    m;
                c && (m = a.match(/OS ([0-9]+)(?:_([0-9]+))?/)) && (b = m[1]);
                e && (a = a.match(/Android ([0-9]+)(?:\.([0-9]+))?/)) &&
                    (d = a[1], f = a[2]);
                return !(c && null !== b && 5 > b) && !(e && null !== d && (4 > d || 4 === d && null !== f && 2 > f))
            }();
        return {
            scrollInit: function(b, f) {
                var k = 0,
                    p = a.state("deals-navbar-state") || "0";
                f && "dealsNavBar" === p.key && (k = e ? d.DEALS_NAV_HEIGHT_APP : d.DEALS_NAV_HEIGHT_WEB);
                ("dealsNavBar" === p.key ? c("#deals-nav-bar") : c("#deals-view-all-nav-bar")).removeClass("persistent");
                c("#placeholderDiv").hide();
                c(h).scrollTop() >= k && 0 !== k ? h.scrollTo(0, k) : -1 < c(h).scrollTop() && h.scrollTo(0, 0)
            },
            scrollInitLazyLoad: function(b, e) {
                ("dealsNavBar" ===
                    (a.state("deals-navbar-state") || "0").key ? c("#deals-nav-bar") : c("#deals-view-all-nav-bar")).removeClass("persistent");
                c("#placeholderDiv").hide()
            },
            initializeAjaxScope: function() {
                h.ajaxScope = "idp-ajax-" + Math.random().toString(36).slice(-5);
                h.uet("tc", h.ajaxScope)
            },
            loadUrl: function(a) {
                e ? h.amazon.mash.navigate({
                    url: a
                }) : h.location.href = a
            },
            resetStates: function() {
                var b = [];
                c('script[type\x3d"a-state"]').each(function() {
                    var e = JSON.parse(c(this).attr("data-a-state"));
                    b[e.key] === w ? (a.state.replace(e.key, JSON.parse(c(this).text())),
                        b[e.key] = d.ENABLED) : a.state(e.key, JSON.parse(c(this).text()))
                })
            },
            displayEmptyDiv: function(a) {
                var b = ".deals-dynamic";
                a === d.DISABLED && (b = "#next-page-swipe-area", c(".still-loading").addClass("aok-hidden"), c(".loading").removeClass("aok-hidden"));
                a = Math.max(c(b).height(), d.DEFAULT_LOADING_HEIGHT);
                c(".empty-div").css("height", a).removeClass("aok-hidden");
                null === f && (f = setTimeout(function() {
                    c(".loading").addClass("aok-hidden");
                    c(".still-loading").removeClass("aok-hidden")
                }, d.LOADING_TIMEOUT));
                c(b).empty()
            },
            hideEmptyDiv: function() {
                c(".empty-div, .loading, .still-loading").addClass("aok-hidden");
                h.clearTimeout(f);
                f = null
            },
            getUrlParamValue: function(a, c) {
                var b = (new RegExp("[?\x26]" + c + "\x3d([^\x26#]*)")).exec(a);
                return null === b ? null : b[1] || 0
            },
            switchTab: function(a) {
                c(".nav-active-link").addClass("nav-inactive-link").removeClass("nav-active-link");
                c("#" + a).removeClass("nav-inactive-link").addClass("nav-active-link")
            },
            verifyAjaxSuccess: function(a) {
                return (a === d.ENABLED && 0 < c(".deals-dynamic").children().length ||
                    a === d.DISABLED) && 0 < c("#next-page-swipe-area").children().length
            },
            isAppRequest: e,
            loadingTimer: f,
            isHistorySupported: k,
            resetStatesLazyLoad: function() {
                var e = {},
                    f = b.getState(d.IDP_PREFIX + d.STATE_DEAL_IDS);
                a.each(f, function(c, b) {
                    a.each(c, function(a) {
                        e[d.IDP_PREFIX + a] = 1
                    })
                });
                var k = [];
                c('script[type\x3d"a-state"]').each(function() {
                    var b = JSON.parse(c(this).attr("data-a-state"));
                    e[b.key] || (k[b.key] === w ? (a.state.replace(b.key, JSON.parse(c(this).text())), k[b.key] = d.ENABLED) : a.state(b.key, JSON.parse(c(this).text())))
                })
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "a-secondary-view", "idp-state-accessor", "csm-utils", "ready").register("idp-filter", function(a, c, d, b) {
        function f() {
            a.$("#filterContent").height(a.$(h).height() + "px");
            a.$("#filterMenuColumn1").height(a.$(h).height() + "px").hide().show();
            a.$(".sectionScroll").height(a.$(h).height() + "px")
        }

        function k(b) {
            var c = 0;
            a.each(b, function(b, e) {
                a.each(b.options, function(a, b) {
                    1 === a.selected && "any" !== a.id && c++
                })
            });
            c = 0 === c ? "" : " (" + c + ")";
            a.$(".filterHeadingSelectedCount").text(" " +
                c)
        }

        function e(b) {
            a.each(b, function(b, c) {
                a.each(b.options, function(c, e) {
                    var d = a.$("#" + (b.name + "_" + c.htmlId)),
                        g = d.find("i");
                    0 === c.selected ? (d.removeClass(C.select_filter_option), "MULTI" !== b.type ? d.removeClass(C.single_select_active) : (g.removeClass(C.multi_select_active), g.addClass(C.multi_select_inactive))) : (d.addClass(C.select_filter_option), "MULTI" !== b.type ? d.addClass(C.single_select_active) : (g.removeClass(C.multi_select_inactive), g.addClass(C.multi_select_active)))
                })
            })
        }

        function l(a) {
            h.amazon && h.amazon.mash ?
                h.amazon.mash.navigate({
                    url: a
                }) : h.location.href = a
        }

        function n(a) {
            if (a.parameters) return a.parameters["idp_f_idp-m-deals"] && delete a.parameters["idp_f_idp-m-deals"], a.parameters.page && delete a.parameters.page, a.parameters.pageNo && delete a.parameters.pageNo, a.parameters.ref && delete a.parameters.ref, a.parameters.ref_ && delete a.parameters.ref_, a.parameters.ajax && (delete a.parameters.updateNav, delete a.parameters.ajax), a
        }
        d.getState("web-lab-states");
        a.on("a:popover:show:filter_view", function(a) {
            f();
            b.incrementCSMCounter("filterButtonClicked")
        });
        a.on.orientationchange(function() {
            f()
        });
        var r = function() {
            u = a.$.extend(!0, [], x);
            e(u);
            k(u)
        };
        a.declarative("cancel-filters", "click", function(a) {
            z.hide();
            r()
        });
        a.declarative("show-section", "click", function(b) {
            a.$("#" + F).addClass(C.aok_hidden);
            a.$("#" + b.data.contentId).removeClass(C.aok_hidden);
            a.$("#" + D).removeClass(C.select_filter_tab);
            a.$("#" + b.data.tabId).addClass(C.select_filter_tab);
            F = b.data.contentId;
            D = b.data.tabId
        });
        a.declarative("clear-all-filters", "click", function(a) {
            l(p())
        });
        var p = function() {
            if (q) return q =
                n(q), q.uri + "/ref\x3dgbmi_asm_idp_filter_clear_all?" + a.$.param(q.parameters)
        };
        a.declarative("apply-filters", "click", function(a) {
            l(g())
        });
        var g = function() {
            if (u) {
                var b = "",
                    c = 0;
                a.each(u, function(e, d) {
                    var g = 1;
                    a.each(e.options, function(a, d) {
                        if ("RANGE" !== e.type) 1 === a.selected && "any" !== a.id && (c++, 1 === g && (b += e.urlParam + ":", g = 0), b = "MULTI" !== e.type ? b + a.id : b + (a.id + ","));
                        else if (1 === a.selected && "any" !== a.id) {
                            c++;
                            var l = e.urlParam.split("-"),
                                f = a.id.split("-");
                            "" !== f[0] && (b += l[0] + ":" + f[0] + ";");
                            "" !== f[1] && (b += l[1] +
                                ":" + f[1] + ";")
                        }
                    });
                    0 === g && (b = "," === b[b.length - 1] ? b.substr(0, b.length - 1) + ";" : b + ";")
                });
                b += "applyFiltersClicked:true;";
                q = n(q);
                0 < c && (q.parameters["idp_f_idp-m-deals"] = b);
                return q.uri + "/ref\x3dgbmi_asm_idp_filter_apply?" + a.$.param(q.parameters)
            }
        };
        a.declarative("toggle-filter-item", "click", function(b) {
            if (u) {
                var c = a.$("#" + b.data.itemId);
                a.each(u, function(e, d) {
                    if (e.urlParam === b.data.urlParam) {
                        var g = a.$("#" + e.name);
                        a.each(e.options, function(a, c) {
                            var d = e.name + "_" + a.htmlId;
                            d === b.data.itemId ? a.selected = "MULTI" ===
                                e.type ? 0 === a.selected ? 1 : 0 : 1 : "MULTI" !== e.type && (a.selected = 0, g.find("#" + d).removeClass(C.single_select_active + " " + C.select_filter_option))
                        });
                        if ("MULTI" !== e.type) c.addClass(C.single_select_active + " " + C.select_filter_option);
                        else {
                            var f = c.find("i");
                            f.hasClass(C.multi_select_inactive) ? (f.removeClass(C.multi_select_inactive), f.addClass(C.multi_select_active), c.addClass(C.select_filter_option)) : (f.removeClass(C.multi_select_active), f.addClass(C.multi_select_inactive), c.removeClass(C.select_filter_option))
                        }
                    }
                });
                k(u)
            }
        });
        var q, m, z, F, x, u, D, E, A, v, C = {
                aok_hidden: "aok-hidden",
                single_select_active: "a-active",
                multi_select_active: "a-icon-touch-multi-select-active",
                multi_select_inactive: "a-icon-touch-multi-select",
                select_filter_tab: "selectedFilterTab",
                select_filter_option: "filterSelectedItem"
            },
            y = function() {
                E = a.$("#filter_view");
                q = a.state("IDP:currentURL");
                m = a.state("IDP:filters");
                0 !== E.length && m && q && (z = c.get(E), A = a.$(".sectionScroll"), v = a.$(".filterMenu"), 0 !== A.length && 0 !== v && (A = A.first(), v = v.first(), A.removeClass(C.aok_hidden),
                    v.addClass(C.select_filter_tab), F = A.attr("id"), D = v.attr("id"), u = m, k(u), e(u), x = a.$.extend(!0, [], u)))
            };
        y();
        a.on("a:pageAjaxUpdate", function(a) {
            y()
        });
        return {
            init: y,
            updateFilters: g,
            hideView: function() {
                z.hide()
            },
            clearFilters: p,
            cancelFilters: r
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-state-accessor", "csm-utils").register("idp-gesture", function(a, c, d) {
        a = a.$;
        var b = c.getState("next-page-swipe");
        a("#next-page-swipe-area").bind("swipe-horizontal", function(a, c) {
            b && ("left" === c.direction && b.nextPageUrl ?
                (h.location.href = b.nextPageUrl, d.incrementCSMCounter("leftSwipe")) : "right" === c.direction && b.previousPageUrl && (h.location.href = b.previousPageUrl, d.incrementCSMCounter("rightSwipe")))
        })
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A").register("idp-deal", function(a) {
        return a.createClass({
            init: function(a) {
                this.dealID = a || null;
                this.dealType = this.legacyDealID = null;
                this.dealDetails = {
                    title: null,
                    description: null,
                    marketingMessage: null,
                    geoDisplayName: null,
                    isFeatured: null,
                    primeAccessType: null,
                    primeAccessDuration: null,
                    isAppEarly: null,
                    isAppOnly: null,
                    isEbook: null,
                    earlyAccessDuration: null,
                    score: null,
                    teaser: null,
                    image: {
                        primaryImage: null,
                        secondaryImages: []
                    },
                    itemDetails: {
                        items: [],
                        parentItems: {},
                        itemType: null
                    }
                };
                this.dealStatus = {
                    dealState: null,
                    msToStart: null,
                    msToEnd: null,
                    msCacheTtl: null,
                    totalCouponCount: null,
                    percentClaimed: null,
                    dealItemStatus: {},
                    lastUpdated: null,
                    claimedCouponCount: null
                }
            }
        })
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-state-accessor", "ready").register("deals-nav", function(a, c) {
        function d() {
            var a =
                k(".nav-active-link").position();
            a && (a = a.left, 0 < a && (a -= 100), k(".deals-carousel-viewport").stop().animate({
                scrollLeft: "+\x3d" + a
            }, 500))
        }

        function b(a) {
            var b = 0,
                c = k(".deals-carousel-viewport"),
                e = k("#deals-view-all-nav-bar");
            c && c.height() ? b = c.height() : e && e.height() && (b = e.height());
            b += 5;
            (a = k("#" + a)) && a.offset() && k("html,body").animate({
                scrollTop: a.offset().top - b
            }, 250)
        }

        function f(a, c, g, f) {
            e = k(c);
            null !== e && null !== e.offset() && (l = e.offset().top + f, n = k("\x3cdiv id\x3d'placeholderDiv'\x3e").css({
                position: "relative",
                display: "none",
                width: "100%",
                height: g + "px"
            }).insertBefore(e), a.on("scroll", q), a.on.ready(function() {
                d();
                r.scrollTop() >= g && (e.addClass("persistent"), n.show())
            }));
            a.on.orientationchange(function() {
                d()
            });
            a.declarative("deals-nav-menu-redirect", "click", function(a) {
                var b = h.location.origin;
                h.amazon && h.amazon.mash ? h.amazon.mash.navigate({
                    url: b + a.data.url
                }) : h.location.href = b + a.data.url
            });
            a.on.ready(function() {
                var a = k(".nav-inactive-link, .nav-active-link"),
                    c = 0;
                a.length && a.each(function() {
                    c += parseFloat(k(this).outerWidth()) +
                        20
                });
                c = parseInt(c, 10);
                0 < c && k(".deals-carousel").width(c + 10);
                k('a[href\x3d"#nav-search-keywords"]').bind("click", function() {
                    var a = k(this).attr("href").substring(1);
                    b(a)
                });
                h.location.hash && (a = h.location.hash.substring(1), b(a))
            })
        }
        var k = a.$,
            e, l, n, r = k(h),
            p = 0,
            g = !1,
            q = function() {
                r.scrollTop() >= l && (e.addClass("persistent"), n.show());
                r.scrollTop() < l && (e.removeClass("persistent"), n.hide())
            },
            m = function() {
                k("#placeholderDiv").remove();
                a.off("scroll", q);
                var b = a.state("deals-navbar-state");
                b && ("dealsNavBar" === b.key &&
                    f(a, "#deals-nav-bar", 130, 80), "dealsViewAllNav" === b.key && f(a, "#deals-view-all-nav-bar", 50, 0));
                d()
            };
        m();
        return {
            init: m,
            getHasUserSearch: function() {
                return p
            },
            setHasUserSearch: function(a) {
                p = a
            },
            getSearchPressed: function() {
                return g
            },
            setSearchPressed: function(a) {
                g = a
            },
            setLazyLoadInProgress: function(a) {}
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-client-constants", "idp-state-accessor", "redirect-url", "csm-utils", "common-util").register("idp-handlers", function(a, c, d, b, f, k) {
        var e = c.CUSTOMER_STATE.INCART,
            l = c.CUSTOMER_STATE.INWAITLIST,
            n = c.DEAL_PARAMS.REDEEMED,
            r = c.DEAL_PARAMS.CLAIMED,
            p = c.DEAL_PARAMS.MS_TO_EXPIRY,
            g = c.DEAL_PARAMS.MS_TO_CUSTOMER_STATE_EXPIRY,
            q = c.DEAL_PARAMS.CUSTOMER_STATE,
            m = c.DEAL_TYPE.DOTD,
            z = c.DEAL_TYPE.LD,
            F = c.DEAL_TYPE.BD,
            x = c.IDP_PREFIX,
            u = function() {
                var c = "/gp/sign-in.html",
                    e = h.location.search,
                    e = e.replace("?", ""),
                    e = a.$.param({
                        useRedirectOnSuccess: 1,
                        path: h.location.pathname,
                        query: e
                    });
                b.redirect(c + ("?" + e))
            },
            D = function(a, b) {
                var c = {};
                c.isAttemptingAddToCart = b;
                d.setDealStateWithObject(a,
                    c)
            };
        return {
            addToCart: function(a) {
                t.when("A", "idp-dcs", "idp-atc", "ready").execute(function(b, v, h) {
                    var y = d.getState(x + a);
                    if (y) {
                        b = d.getState(x + c.STATE_CONSTANTS);
                        var B = y.asin,
                            K = b.sessionID,
                            t = y.dealType,
                            I = {},
                            J = function(a) {
                                if (a.dealItemStatus && a.dealItemStatus.customerState) {
                                    var b = a.dealItemStatus,
                                        c = a.currentCartQuantity;
                                    if (document.querySelector(".nav-cart-empty") && 0 < c) {
                                        var m = document.querySelector(".nav-cart-empty").classList;
                                        m.remove("nav-cart-empty");
                                        m.add("nav-cart-1")
                                    }(m = document.querySelector(".nav-cart-count")) &&
                                    0 < c && (m.textContent = c);
                                    c = {};
                                    c[n] = a[r];
                                    m = b.customerState;
                                    m === e ? (c.msExpiry = (parseInt(b[g], 10) || 0) + Date.now(), c[p] = b[g], c[q] = e) : m === l && (c[q] = l);
                                    t === z && "PRIME_ONLY_DOTD" === y.primeAccessType && a.isClaimed && (c[q] = e);
                                    d.setDealStateWithObject(y, c)
                                } else f.incrementCSMCounter("IDPClaimDealFailed");
                                D(y, !1)
                            },
                            Q = function(a) {
                                D(y, !1)
                            },
                            G = function(a) {
                                a.isOK && (a = {}, a[q] = e, d.setDealStateWithObject(y, a))
                            },
                            H = function(a) {},
                            M = y.slotId,
                            N = y.placementId;
                        null !== N && N !== w && null !== M && M !== w && (I.refTag = k.getReftag("atc", M, N, a));
                        t === z ? 0 !== b.customerID ? (D(y, !0), v.claimDeal(y.dealID, B, I, J, Q)) : u() : t !== m && t !== F || h.addToCart(B, y.offerID, K, G, H, I, a)
                    }
                })
            },
            watchDeal: function(a) {
                t.when("A", "idp-watchlist", "ready").execute(function(b, e) {
                    0 !== d.getState(x + c.STATE_CONSTANTS).customerID ? e.handleWatchDeal(a) : u()
                })
            },
            unwatchDeal: function(a) {
                t.when("A", "idp-watchlist", "ready").execute(function(b, e) {
                    0 !== d.getState(x + c.STATE_CONSTANTS).customerID ? e.handleUnwatchDeal(a) : u()
                })
            },
            registerForNotifications: function() {
                t.when("A", "idp-watchlist", "mash",
                    "ready").execute(function(a, b, c) {
                    0 === b.getWatchedDealIds().length && h.amazon.mash.privateAPI && h.amazon.mash.privateAPI.getPushNotificationInfo({
                        successCallback: function(a) {
                            f.incrementCSMCounter("idpDeviceTokenSuccess");
                            b.notificationAjax(a)
                        },
                        failCallback: function(a) {
                            f.incrementCSMCounter("idpDeviceTokenUnavailable")
                        }
                    })
                })
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-dom-updater", "idp-scheduler", "idp-client-constants", "idp-state-accessor", "idp-handlers", "redirect-url", "idp-state-transitions",
        "idp-impression-tracker", "lazyload-utils").register("idp-reactor", function(a, c, d, b, f, k, e, l, n, r) {
        var p = a.$,
            g = b.IDP_PREFIX,
            q = g + "dealIDs",
            m = function() {
                var b = f.getState(q);
                b && a.each(b, function(b, e) {
                    a.each(b, function(a) {
                        f.bindToState(g + String(a), function(a, b, e) {
                            if (a.dealID) {
                                var g = p(".idp-" + a.dealID);
                                g && g.length && (l.applyTransition(a, b, e), c.render(g, a.dealID, a, b), d.schedule(a, b))
                            }
                        })
                    })
                })
            },
            z = function() {
                var b = f.getState(q);
                b && a.each(b, function(b, c) {
                    a.each(b, function(a) {
                        var b = f.getState(g + String(a));
                        b && (b.tick ||
                            0 === b.tick || (b.tick = 0), b.msToEnd && 0 < b.msToEnd && !b.msEnd && (b.msEnd = (parseInt(b.msToEnd, 10) || 0) + Date.now()), b.msToStart && 0 < b.msToStart && !b.msStart && (b.msStart = (parseInt(b.msToStart, 10) || 0) + Date.now()), b.msToExpiry && 0 < b.msToExpiry && !b.msExpiry && (b.msExpiry = (parseInt(b.msToExpiry, 10) || 0) + Date.now()), f.setState(g + String(a), b))
                    })
                })
            },
            F = function(b) {
                if (b) {
                    var c = b + r.Constants.LAZYLOAD_NUM_SLOTS,
                        e = f.getState(q);
                    e && a.each(e, function(e, d) {
                        for (var l = !1, m = b; m < c; m++)
                            if ("s-" + m === d) {
                                l = !0;
                                break
                            }
                        l && a.each(e, function(a) {
                            var b =
                                f.getState(g + String(a));
                            b && (b.tick || 0 === b.tick || (b.tick = 0), b.msToEnd && 0 < b.msToEnd && !b.msEnd && (b.msEnd = (parseInt(b.msToEnd, 10) || 0) + Date.now()), b.msToStart && 0 < b.msToStart && !b.msStart && (b.msStart = (parseInt(b.msToStart, 10) || 0) + Date.now()), b.msToExpiry && 0 < b.msToExpiry && !b.msExpiry && (b.msExpiry = (parseInt(b.msToExpiry, 10) || 0) + Date.now()), f.setState(g + String(a), b))
                        })
                    })
                }
            },
            x = function(b) {
                if (b) {
                    var e = b + r.Constants.LAZYLOAD_NUM_SLOTS,
                        m = f.getState(q);
                    m && a.each(m, function(m, n) {
                        for (var k = !1, r = b; r < e; r++)
                            if ("s-" + r ===
                                n) {
                                k = !0;
                                break
                            }
                        k && a.each(m, function(a) {
                            f.bindToState(g + String(a), function(a, b, e) {
                                if (a.dealID) {
                                    var g = p(".idp-" + a.dealID);
                                    g && g.length && (l.applyTransition(a, b, e), c.render(g, a.dealID, a, b), d.schedule(a, b))
                                }
                            })
                        })
                    })
                }
            },
            u = function(b) {
                if (b) {
                    var e = b + r.Constants.LAZYLOAD_NUM_SLOTS,
                        m = f.getState(q);
                    m && a.each(m, function(m, n) {
                        for (var k = !1, r = b; r < e; r++)
                            if ("s-" + r === n) {
                                k = !0;
                                break
                            }
                        k && a.each(m, function(a) {
                            f.bindToState(g + String(a), function(a, b, e) {
                                if (a.dealID) {
                                    var g = p(".idp-" + a.dealID);
                                    if (g && g.length) {
                                        l.applyTransition(a,
                                            b, e);
                                        for (e = 0; e < g.length; e++) {
                                            var f = g[e],
                                                m;
                                            if (!(m = !0 === D(b))) {
                                                "function" === typeof jQuery && f instanceof jQuery && "undefined" !== typeof jQuery && (f = f[0]);
                                                m = f.getBoundingClientRect();
                                                var n = h.innerWidth || document.documentElement.clientWidth,
                                                    k = h.innerHeight || document.documentElement.clientHeight;
                                                0 > m.right || 0 > m.bottom || m.left > n || m.top > k ? m = !1 : (n = m.left <= n && 0 <= m.left + m.width, m = m.top <= k && 0 <= m.top + m.height && n || f.contains(document.elementFromPoint(m.left, m.top)) || f.contains(document.elementFromPoint(m.right, m.top)) ||
                                                    f.contains(document.elementFromPoint(m.right, m.bottom)) || f.contains(document.elementFromPoint(m.left, m.bottom)))
                                            }
                                            m && c.render(g, a.dealID, a, b)
                                        }
                                        d.schedule(a, b)
                                    }
                                }
                            })
                        })
                    })
                }
            },
            D = function(a) {
                a = JSON.stringify(a);
                var b = JSON.parse(a),
                    c = !1;
                Object.keys(b).forEach(function(a) {
                    if (!0 === b[a] && "msToStart" !== a && "msToEnd" !== a && "msSinceCacheRefresh" !== a && "tick" !== a && "msToExpiry" !== a) return c = !0
                });
                return c
            },
            t = function() {
                r.lazyloadG2S2Init();
                var a = f.getState("lazy-load-state"),
                    c = f.getState("IDP:lazyLoadConfig"),
                    c = c && c.lazyLoadOtherWidgets,
                    e = f.getState(b.IDP_PREFIX + b.STATE_DEAL_IDS);
                a && a.isLazyLoadEnabled && !a.isViewAll && e && (1 < Object.keys(e).length || 1 === Object.keys(e).length && "true" === c) ? A(1) : (z(), m())
            },
            A = function(a) {
                r.lazyloadG2S2Init();
                F(a);
                var b = f.getState("lazy-load-state");
                b && b.isDomUpdateInView ? u(a) : x(a)
            };
        t();
        a.on("a:pageAjaxUpdate", function(a) {
            t()
        });
        a.on("a:pageLazyLoadUpdateStateBind", function(a) {
            A(a)
        });
        a.declarative("idp-button", "click", function(a) {
            n.recordAction(a.data.dealID, b.BUTTON_ACTION_MAP[a.data.buttonType]);
            "addToCart" ===
            a.data.buttonType || "joinWaitlist" === a.data.buttonType ? (k.addToCart(a.data.dealID), "joinWaitlist" === a.data.buttonType && k.registerForNotifications()) : "seeAll" === a.data.buttonType || "chooseOption" === a.data.buttonType || "learnMore" === a.data.buttonType || "viewDeal" === a.data.buttonType ? e.redirect(a.data.egressUrl) : "watchDeal" === a.data.buttonType ? (k.watchDeal(a), k.registerForNotifications()) : "watching" === a.data.buttonType && k.unwatchDeal(a)
        });
        return {
            timersInit: z,
            initLazyLoad: A
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded ||
        t.when("A", "idp-state-accessor", "idp-client-constants").register("idp-state-transitions", function(a, c, d) {
            return {
                applyTransition: function(a, f, k) {
                    if (f.msToExpiry && 0 >= a.msToExpiry && (a.customerState === d.CUSTOMER_STATE.PENDINGATC || a.customerState === d.CUSTOMER_STATE.INCART)) {
                        var e = {
                            customerState: d.CUSTOMER_STATE.NONE
                        };
                        c.setDealStateWithObject(a, e)
                    }
                    f.msToEnd && 0 > a.msEnd - Date.now() && (e = {
                        dealState: d.DEAL_STATE.EXPIRED
                    }, c.setDealStateWithObject(a, e));
                    k && f.dealState && k.dealState === d.DEAL_STATE.UPCOMING && c.setDealStateWithObject(a, {
                        transitionedFromUpcoming: !0
                    }, !0)
                }
            }
        });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-dcs", "idp-state-accessor", "idp-dom-utils", "idp-client-constants", "idp-service-utils").register("idp-scheduler", function(a, c, d, b, f, k) {
        function e(b) {
            a.each(b, function(b, c) {
                if (b && b.dealItemStatus && !a.$.isEmptyObject(b.dealItemStatus)) {
                    var e = Object.keys(b.dealItemStatus)[0];
                    b.customerState = b.dealItemStatus[e].customerState
                }
            })
        }

        function l(b) {
            a.each(b, function(b, c) {
                0 <= b.msToStart && (b.msStart = parseInt(b.msToStart,
                    10) + Date.now());
                0 <= b.msToEnd && (b.msEnd = parseInt(b.msToEnd, 10) + Date.now());
                b && 0 <= b.msCacheTtl && (b.lastMsCacheTtl = parseInt(b.msCacheTtl, 10));
                if (b.dealItemStatus && !a.$.isEmptyObject(b.dealItemStatus)) {
                    var e = Object.keys(b.dealItemStatus)[0];
                    0 < b.dealItemStatus[e].msToCustomerStateExpiry && (b.msExpiry = parseInt(b.dealItemStatus[e].msToCustomerStateExpiry, 10) + Date.now(), b.msToExpiry = b.dealItemStatus[e].msToCustomerStateExpiry)
                }
            })
        }

        function n(a) {
            l(a);
            e(a);
            d.setDealState(a)
        }

        function r(a) {
            t(Object.keys(a));
            n(a)
        }

        function p(b, c) {
            c && a.each(c, function(a) {
                var b, c = d.getDealStateObject(a);
                c && (b = c.lastMsCacheTtl || k.apis.GDS.baseRetryInterval);
                b && h.setTimeout(function() {
                    q[a] = 1;
                    delete z[a]
                }, b)
            })
        }
        var g = d.getState(f.IDP_PREFIX + f.STATE_SCHEDULER_CONFIG),
            q = {},
            m = {},
            z = {},
            F = g && g.maxRequestSize ? g.maxRequestSize : 10,
            x = g && g.maxMsBetweenRequests ? g.maxMsBetweenRequests : 12E3;
        d.getState(f.IDP_PREFIX + f.STATE_CONSTANTS);
        var u = function(b) {
                a.each(b, function(a) {
                    delete q[a];
                    z[a] = 1
                })
            },
            t = function(b) {
                a.each(b, function(a) {
                    delete z[a]
                })
            },
            w = function(b) {
                return Object.keys(b).length >= F || Object.keys(b).some(function(c) {
                    return a.now() - b[c] > x
                }) || !1
            };
        return {
            forceGetDealStatusUpdate: function() {
                var b = d.getState(f.IDP_PREFIX + f.STATE_DEAL_IDS);
                if (b) {
                    var e = {};
                    a.each(b, function(b, c) {
                        a.each(b, function(a, b) {
                            d.getState(f.IDP_PREFIX + a) && (e[a] = !0)
                        })
                    });
                    b = Object.keys(e);
                    0 < b.length && c.getDealStatus(b, {}, n, p)
                }
            },
            schedule: function(e, d) {
                if (d.msSinceCacheRefresh && (b.isEmpty(e.msSinceCacheRefresh) || b.isEmpty(e.msCacheTtl) || !(e.msSinceCacheRefresh > e.msCacheTtl) ||
                        m[e.dealID] || z[e.dealID] || (q[e.dealID] = q[e.dealID] || a.now()), w(q))) {
                    var g = Object.keys(q);
                    u(g);
                    c.getDealStatus(g, {}, r, p)
                }
            },
            isScheduled: function(a) {
                return q[a] ? !0 : !1
            },
            isRequested: function(a) {
                return z[a] ? !0 : !1
            },
            getScheduledDeals: function() {
                return q
            },
            getUpcomingScheduledDeals: function() {
                return m
            },
            getRequestedDeals: function() {
                return z
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-state-accessor", "idp-client-constants", "idp-reactor", "csm-utils").register("idp-scroll-handler", function(a,
        c, d, b, f) {
        var k = a.$,
            e, l = [],
            n = null,
            r = d.ALL_DEALS_CONTAINER_SELECTOR,
            p = d.DEAL_BATCH_SIZE,
            g, q, m, z, F, x = !1,
            u = function() {
                var b = c.getState(d.IDP_PREFIX + d.STATE_DEAL_IDS);
                b && (0 === F.length ? a.each(b, function(a, b) {
                    a.length > p && (e = {
                        deals: a.slice(p),
                        isCurrentlyLoading: !1,
                        id: b
                    })
                }) : a.each(b, function(a, b) {
                    e = {
                        deals: a,
                        isCurrentlyLoading: !1,
                        id: b
                    }
                }))
            },
            t = function() {
                a.off("scroll", v);
                e = w;
                g = k("#idp-loading-spinner");
                q = k(r);
                m = k(".paginationButtons");
                F = k("#sp-mobile");
                z = 0;
                u();
                q.length && e && (C(), a.on("scroll", v))
            };
        a.on("a:pageAjaxUpdate",
            function(a) {
                t()
            });
        a.on("a:ajaxClick", function() {
            a.off("scroll", v);
            null !== n && (n.abort(), n = null)
        });
        var E = function(e, m) {
                for (var n = [], r = !1, r = k(".sp-deals"), p = 0; p < r.length; p++) n.push(r.get(p).getAttribute("id"));
                42 > n.length && 12 <= n.length && !x ? e() && (10 <= n.length - l.length ? (l = n, r = !0) : r = !1, r && (f.incrementCSMCounter("continousScroll"), g.removeClass("aok-hidden"), x = !0, a.ajax("/gp/nemo/spdeals/handlers/spdeals-scroll.html", {
                    method: "get",
                    params: {
                        seenAsins: JSON.stringify(l),
                        placementID: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).placementID,
                        amabotSlotName: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).amabotSlotName,
                        pageType: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).pageType,
                        placement: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).placement,
                        refTag: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).refTagPrefix,
                        appWidgetName: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).widgetName,
                        searchQuery: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).searchQuery,
                        browseNode: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).browseNode
                    },
                    success: function(a) {
                        q.append(a);
                        g.addClass("aok-hidden");
                        x = !1;
                        b.timersInit();
                        m && m()
                    },
                    error: function() {
                        g.addClass("aok-hidden");
                        m && m()
                    }
                }))) : 12 > n.length && g.addClass("aok-hidden")
            },
            A = function(l, k) {
                if (0 === F.length) {
                    if (e && !e.isCurrentlyLoading && l()) {
                        f.incrementCSMCounter("continousScroll");
                        m.addClass("aok-hidden");
                        g.removeClass("aok-hidden");
                        e.isCurrentlyLoading = !0;
                        var h = c.getState(d.IDP_PREFIX + d.WATCHLIST);
                        n = a.ajax("/gp/aw/idp/ajax/getDeals.html", {
                            method: "get",
                            params: {
                                containerToAppendTo: r,
                                dealIds: JSON.stringify(e.deals.slice(0, p)),
                                placementID: c.getState(d.IDP_PREFIX +
                                    d.STATE_CONSTANTS).placementID,
                                amabotSlotName: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).amabotSlotName,
                                tabId: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).tabId,
                                isPrimeCustomer: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).isPrimeCustomer,
                                watchedDeals: JSON.stringify(h !== w && h.watchedDealIds !== w ? h.watchedDealIds : []),
                                isWatchlistEnabled: h !== w ? h.isWatchlistEnabled : "false",
                                originalRequestID: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).requestID,
                                isDealsPage: c.getState(d.IDP_PREFIX + d.STATE_CONSTANTS).isDealsPage
                            },
                            success: function() {
                                e && (f.incrementCSMCounter("continousScrollSuccess"), e.deals = e.deals.slice(p), e.isCurrentlyLoading = !1, z++, 0 === e.deals.length && (e = w), g.addClass("aok-hidden"), a.trigger("a:scrollSuccess"), h !== w && h.isWatchlistTab || m.removeClass("aok-hidden"), b.timersInit(), k && k());
                                n = null
                            },
                            error: function() {
                                f.incrementCSMCounter("continousScrollError");
                                g.addClass("aok-hidden");
                                m.removeClass("aok-hidden");
                                k && k()
                            }
                        })
                    }
                } else E(l, k)
            },
            v = function(b, c, e, d, f, m, l) {
                A(function() {
                    var b = (0 === F.length ? q.children(".dealWidget").slice(z *
                        p / 2, (z + 1) * p / 2) : k(".sp-deals").slice(-5)).add(g);
                    return a.onScreen(b) || null !== g.offset() && k(h).scrollTop() > g.offset().top
                }, l)
            },
            C = function(b) {
                A(function() {
                    return a.onScreen(k(g)) || k(h).scrollTop() > g.offset().top
                }, b)
            };
        t();
        return {
            scrollHandler: v,
            init: t,
            getWidgetToInfiniteScrollOn: function() {
                return e
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-state-accessor", "ready").execute(function(a, c) {
        var d = a.$,
            b = c.getState("IDP:scroll-to-top");
        b && b.scrollToTop && 1 === b.scrollToTop && d("html, body").animate({
                scrollTop: 0
            },
            0)
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-client-constants", "idp-service-utils", "csm-utils", "idp-state-accessor").register("idp-atc", function(a, c, d, b, f) {
        var k = function(a) {
                throw Error(a);
            },
            e = function(a, b, c, e) {
                var g;
                d.falsey(a) ? g = "asin" : d.falsey(b) ? g = "offeringID" : d.falsey(c) ? g = "sessionID" : d.falsey(e) && (g = "successCallback");
                return g
            };
        return {
            addToCart: function(a, n, r, p, g, h, m) {
                b.incrementCSMCounter("IDPAddToCartClick");
                (m = f.getState(c.IDP_PREFIX + m)) && m.dealType === c.DEAL_TYPE.LD && b.incrementCSMCounter("IDPAddToCartServiceCallForLightingDeal");
                d.falsey(g) && (g = k);
                if (m = e(a, n, r, p)) b.incrementCSMCounter("IDPAddToCartError"), g(new TypeError(m + " is required"));
                else {
                    var z = h && h.refTag ? h.refTag : w;
                    m = "/gp/add-to-cart/json";
                    z !== w && (m = m + "/ref\x3d" + z);
                    n = {
                        asin: a,
                        offeringID: n,
                        verificationSessionID: r,
                        nextPage: d.falsey(h, "nextPage") ? "default" : h.nextPage
                    };
                    r = function(a) {
                        "string" === typeof a && (a = d.responseToJSON(a));
                        a.isOK ? (a.cartQuantity && f && f.getState("IDP:cartCountUpdate") && f.getState("IDP:cartCountUpdate").shouldUpdateCartCountATC && d.updateCartCount(a.cartQuantity),
                            b.incrementCSMCounter("IDPAddToCartSuccess"), p(a)) : a.isOK || (b.incrementCSMCounter("IDPAddToCartError"), g(a))
                    };
                    d.request("ATC", m, n, "GET", r, r, function(b) {
                        b.params = a
                    }, a)
                }
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-deal", "idp-deal-translator", "idp-service-utils", "csm-utils", "idp-state-accessor").register("idp-dcs", function(a, c, d, b, f, k) {
        return {
            enums: {
                marketplaceID: "A21TJRUUN4KGV",
                clientID: b.getConstantFromState("dcsClientID", "idp_mobile_browser"),
                endpoint: "/xa/dealcontent/v2/",
                responseSize: "STATUS_ONLY",
                itemResponseSize: "NONE",
                baseRetryInterval: 6E4,
                continueRetries: !0,
                callTimeoutValue: 3E5,
                batchSize: 10
            },
            initialize: function(a) {
                this.marketplaceID = a && a.marketplaceID ? a.marketplaceID : this.enums.marketplaceID;
                this.clientID = a && a.clientID ? a.clientID : b.getConstantFromState("dcsClientID", "idp_mobile_browser");
                this.responseSize = a && a.responseSize ? a.responseSize : this.enums.responseSize;
                this.itemResponseSize = a && a.itemResponseSize ? a.itemResponseSize : this.enums.itemResponseSize;
                this.continueRetries = this.enums.continueRetries;
                this.customerID = a && a.customerID ? a.customerID : b.getConstantFromState("customerID");
                this.sessionID = a && a.sessionID ? a.sessionID : b.getConstantFromState("sessionID")
            },
            getRequestMetadata: function() {
                var a = {
                    marketplaceID: this.marketplaceID,
                    clientID: this.clientID
                };
                this.customerID && (a.customerID = this.customerID);
                this.sessionID && (a.sessionID = this.sessionID);
                return a
            },
            getDealTargets: function(c, d) {
                return a.map(c, function(a) {
                    if ("GetDealStatus" === d) return {
                        dealID: a
                    };
                    var c = b.getAsinsForDeal(a);
                    return {
                        dealID: a,
                        itemIDs: c
                    }
                })
            },
            getSortedDealIDs: function(a) {
                return a.sort()
            },
            getDealStatusRequest: function(a) {
                a = this.getSortedDealIDs(a);
                return {
                    requestMetadata: this.getRequestMetadata(),
                    dealTargets: this.getDealTargets(a, "GetDealStatus"),
                    responseSize: this.responseSize,
                    itemResponseSize: this.itemResponseSize
                }
            },
            getDealsRequest: function(a) {
                a = this.getSortedDealIDs(a);
                return {
                    requestMetadata: this.getRequestMetadata(),
                    dealTargets: this.getDealTargets(a, "GetDeals"),
                    needDealGroupMetadata: !1
                }
            },
            dcsErrorCallback: function(a) {
                throw Error(a);
            },
            dcsSuccessCallback: function(a) {
                return a
            },
            getStatusUpdate: function(e, l, n, k, h) {
                if (k === w) throw Error(b.apis[e].name + ": successCallback is required");
                var g = this;
                h = h || g.dcsErrorCallback;
                if (1 > l.length) h(Error(b.apis[e].name + ": Atleast one dealID required to update"));
                else {
                    g.initialize(n);
                    n = [];
                    for (var q = 0; q < l.length; q += g.enums.batchSize) n.push(l.slice(q, q + g.enums.batchSize));
                    var m = {},
                        z = function(e) {
                            var f = e.dealStatus;
                            f && a.each(f, function(a, b) {
                                var e = new c(b);
                                d.translateDealStatus(e, a);
                                m[e.dealID] = e.dealStatus
                            });
                            e === w || e.responseMetadata === w || e.responseMetadata.continueRetries === w || e.responseMetadata.continueRetries || (g.continueRetries = e.responseMetadata.continueRetries);
                            b.size(m) === l.length && k(m)
                        },
                        F = g.enums.endpoint + b.apis[e].name;
                    a.each(n, function(c, d) {
                        var m = g.getDealStatusRequest(c),
                            l = Math.floor(2E3 * Math.random()) + 1;
                        a.delay(function() {
                            f.incrementCSMCounter(b.apis[e].name);
                            b.request(e, F, m, "POST", z, h, function(a) {
                                a.params = c
                            }, c)
                        }, l)
                    })
                }
            },
            getDealStatus: function(a, b, c, d) {
                this.getStatusUpdate("GDS", a, b, c, d)
            },
            getDeals: function(a, b, c, d) {
                this.getStatusUpdate("GD", a, b, c, d)
            },
            getRedeemDealRequest: function(a, c, d, f) {
                return {
                    dealID: a,
                    asin: c,
                    sessionID: d,
                    marketplaceID: this.marketplaceID,
                    ref: b.falsey(f, "refTag") ? w : f.refTag
                }
            },
            getClaimDealRequest: function(a, b, c) {
                return {
                    dealId: a,
                    itemId: b
                }
            },
            claimDealAjax: function(c, d, n, h, p, g, q) {
                f.incrementCSMCounter("IDPRedeemDealClick");
                var m;
                q || (q = this.dcsErrorCallback);
                if (b.falsey(d)) m = "dealID";
                else if (b.falsey(n)) m = "asin";
                else if (b.falsey(g)) throw Error("redeemDeal: successCallback is required");
                if (h = m ? new TypeError(m) : !1) f.incrementCSMCounter("IDPRedeemDealError"), q(h);
                else {
                    this.initialize(p);
                    h = p && p.refTag ? p.refTag : w;
                    m = "/gp/deal/ajax/claimDeal.html";
                    h !== w && (m = m + "/ref\x3d" + h);
                    var z = this.getClaimDealRequest(d, n, p);
                    m = m + "?" + a.$.param(z);
                    b.request("CD", m, z, c, function(c) {
                        "object" !== typeof c && "string" === typeof c && (c = a.trim(c), c = c.replace(/\r?\n|\r/g, ""), c = JSON.parse(c));
                        k && k.getState("IDP:cartCountUpdate") && k.getState("IDP:cartCountUpdate").shouldUpdateCartCount && c.currentCartQuantity && b.updateCartCount(c.currentCartQuantity);
                        f.incrementCSMCounter("IDPRedeemDealSuccess");
                        g(c)
                    }, q, function(a) {
                        a.params = z
                    }, z)
                }
            },
            claimDeal: function(a, b, c, d, f) {
                this.claimDealAjax("POST", a, b, w, c, d, f)
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-client-constants", "idp-state-accessor").register("idp-service-utils", function(a, c, d) {
        function b(a) {
            var b = a.lastIndexOf("#"); - 1 < b && b === a.length - 1 && (a = a.substring(0, b));
            return a
        }

        function f(c, e) {
            c = b(c);
            a.each(e, function(a, b) {
                var e = new RegExp("([?\x26])" + a + "\x3d.*?(\x26|$)", "gi");
                c.match(e) &&
                    (c = c.replace(e, ""))
            });
            c = c.replace(/[?&]$/, "");
            return c = c.replace(/[\/]$/, "")
        }

        function k(a, b) {
            a = f(a, Object.keys(b));
            return a = l(a, b)
        }
        var e = {
                GDS: {
                    name: "GetDealStatus",
                    maxRetries: 0,
                    baseRetryInterval: 12E3
                },
                GD: {
                    name: "GetDeals",
                    maxRetries: 3,
                    baseRetryInterval: 4E3
                },
                CD: {
                    name: "ClaimDeal",
                    maxRetries: 2,
                    baseRetryInterval: 2E4
                }
            },
            l = function(c, e) {
                c = b(c);
                0 < Object.keys(e).length && (c = -1 === c.indexOf("?") ? c.concat("/?") : c.concat("\x26"), c = c.concat(a.$.param(e)));
                return c
            },
            n = function(a, b) {
                return !(a && (b ? a.prop : 1))
            },
            r = 6E4,
            p = function(b, c, d) {
                var f = new Date,
                    l = 0,
                    n = c.error;
                delete c.error;
                var h, p = 0,
                    q;
                d && d in e && (q = e[d], p = 1);
                c.retry && (h = c.retry, delete c.retry);
                var t = function() {
                    b = k(b, {
                        nocache: (new Date).getTime()
                    });
                    c.error = function() {
                        if (p)
                            if (++l > q.maxRetries) n(Error("Request timed out"), c.xhrParams);
                            else {
                                var b = g(l, q);
                                "function" === typeof h && h();
                                a.delay(t, b)
                            }
                        else b = r * (1 + Math.pow(2, l++) * Math.random()), 3E5 < b + (new Date).getTime() - f.getTime() ? n(Error("Request timed out")) : a.delay(t, b)
                    };
                    a.$.ajax(b, c)
                };
                t()
            },
            g = function(a, b) {
                if (a &&
                    b) return Math.pow(2, a - 1) * (b.baseRetryInterval + q(-1E3, 1E3))
            },
            q = function(a, b) {
                return Math.floor(Math.random() * (b - a + 1)) + a
            };
        return {
            falsey: n,
            size: function(b) {
                var c = 0;
                a.each(b, function(a, e) {
                    b.hasOwnProperty(e) && c++
                });
                return c
            },
            addParametersToURL: l,
            request: function(a, b, c, d, g, f, l, k, h) {
                f = {
                    beforeSend: l,
                    error: f,
                    retry: h,
                    xhrParams: k,
                    success: function(b) {
                        if (!(a in e)) {
                            var c = !n(b, "responseMetadata") && !n(b.responseMetadata, "baseRetryInterval"),
                                d = !n(b, "baseRetryInterval"),
                                f = {
                                    exists: c || d
                                };
                            f.exists && (c ? f.baseRetryInterval =
                                b.responseMetadata.baseRetryInterval : d && (f.baseRetryInterval = b.baseRetryInterval));
                            !n(f, void 0) && f.exists && (r = f.baseRetryInterval)
                        }
                        g && g(b)
                    },
                    contentType: "application/json"
                };
                "GET" === d ? (f.type = "GET", f.data = c) : "POST" === d && (f.type = "POST", f.data = JSON.stringify(c));
                p(b, f, a)
            },
            responseToJSON: function(b) {
                b = a.trim(b);
                b = b.replace(/\r?\n|\r/g, "");
                return b = JSON.parse(b)
            },
            doesURLContainParam: function(a, c) {
                a = b(a);
                return a.match(new RegExp("([?\x26])" + c + "\x3d.*?(\x26|$)", "gi")) ? !0 : !1
            },
            clearURLParam: f,
            clearHashedPartFromURL: b,
            checkAndAddParamsToUrl: k,
            truthy: function(a, b) {
                return !n(a, b)
            },
            getConstantFromState: function(a, b) {
                var e = d.getState(c.IDP_PREFIX + c.STATE_CONSTANTS);
                return e && e[a] ? e[a] : b
            },
            getAsinsForDeal: function(a) {
                return (a = d.getState(c.IDP_PREFIX + a)) && a.asin ? Array(a.asin) : w
            },
            updateCartCount: function(a) {
                a = parseInt(a, 10);
                if (h.amazon && h.amazon.mash && h.amazon.mash.cart && h.amazon.mash.cart.didUpdate && a) h.amazon.mash.cart.didUpdate({
                    newCartQuantity: a
                });
                else {
                    if (document.querySelector(".nav-cart-empty") && 0 < a) {
                        var b = document.querySelector(".nav-cart-empty").classList;
                        b.remove("nav-cart-empty");
                        b.add("nav-cart-1")
                    }(b = document.querySelector(".nav-cart-count")) && 0 < a && (b.textContent = a)
                }
            },
            apis: e,
            getRandomNumber: q,
            getRetryInterval: g
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "jQuery", "idp-client-constants", "csm-utils", "idp-state-accessor", "common-util").register("idp-watchlist", function(a, c, d, b, f, k) {
        c(".watchlist-changeover .a-icon-checkmark-inverse").addClass("aok-hidden");
        f.getState("web-lab-states");
        var e = function(b) {
                var c = a.state(d.IDP_PREFIX + d.WATCHLIST);
                c !== w && (c = {
                    isWatchlistEnabled: c.isWatchlistEnabled,
                    isWatchlistTab: c.isWatchlistTab,
                    watchedDealIds: b
                }, a.state.replace("IDP:watchlist", c))
            },
            l = function() {
                var b = a.state(d.IDP_PREFIX + d.WATCHLIST);
                return b === w || b.watchedDealIds === w ? [] : b.watchedDealIds
            };
        return {
            handleWatchDeal: function(a) {
                b.incrementCSMCounter("totalWatchDealClick");
                var d = f.getDealStateObject(a.data.dealID),
                    h = "",
                    g = "";
                d !== w && (h = d.slotId, g = d.placementId);
                c.ajax({
                    url: "/idp/horizonte/ajax/bookmarkDeal.html/ref\x3d" + k.getReftag("wtd", h, g, a.data.dealID),
                    type: "get",
                    data: {
                        dealId: a.data.dealID,
                        watchAction: "ADD"
                    },
                    success: function(d) {
                        b.incrementCSMCounter("watchDealAjaxSuccess");
                        d && 1 === JSON.parse(d).status ? (b.incrementCSMCounter("watchDealStatusSuccess"), c(".idp-" + a.data.dealID + " .watchDeal").addClass("aok-hidden"), c(".idp-" + a.data.dealID + " .watching").removeClass("a-button-primary aok-hidden a-button-focus"), a.data.buttonType = "watching", c("#watching-changeover").show(), d = l(), d.push(a.data.dealID), e(d)) : (b.incrementCSMCounter("watchDealStatusFailure"),
                            c("#error-changeover").show())
                    },
                    error: function(a) {
                        b.incrementCSMCounter("watchDealAjaxError");
                        c("#error-changeover").show()
                    }
                })
            },
            handleUnwatchDeal: function(a) {
                b.incrementCSMCounter("totalunwatchDealClick");
                var d = f.getDealStateObject(a.data.dealID),
                    h = "",
                    g = "";
                d !== w && (h = d.slotId, g = d.placementId);
                c.ajax({
                    url: "/idp/horizonte/ajax/bookmarkDeal.html/ref\x3d" + k.getReftag("uwd", h, g, a.data.dealID),
                    type: "get",
                    data: {
                        dealId: a.data.dealID,
                        watchAction: "REMOVE"
                    },
                    success: function(d) {
                        b.incrementCSMCounter("unwatchDealAjaxSuccess");
                        d && 1 === JSON.parse(d).status ? (b.incrementCSMCounter("unwatchDealStatusSuccess"), c(".idp-" + a.data.dealID + " .watching").addClass("aok-hidden"), c(".idp-" + a.data.dealID + " .watchDeal").removeClass("aok-hidden a-button-focus"), c(".idp-" + a.data.dealID + " .idp-primary-button").addClass("a-button-primary"), a.data.buttonType = "watchDeal", c("#unwatch-changeover").show(), d = l(), d.splice(d.indexOf(a.data.dealID), 1), e(d)) : (b.incrementCSMCounter("unwatchDealStatusFailure"), c("#error-changeover").show())
                    },
                    error: function(a) {
                        b.incrementCSMCounter("unwatchDealAjaxError");
                        c("#error-changeover").show()
                    }
                })
            },
            getWatchedDealIds: l,
            notificationAjax: function(e) {
                var f = a.state(d.IDP_PREFIX + d.STATE_CONSTANTS);
                f !== w && c.ajax({
                    url: "/gp/aw/idp/ajax/registerForNotifications.html/ref\x3didp_mshop",
                    type: "get",
                    data: {
                        customer: f.customerID,
                        sessionId: f.sessionID,
                        token: e.pushToken,
                        application: e.appID,
                        protocol: e.protocol
                    },
                    success: function(a) {
                        b.incrementCSMCounter("watchlistRegisterForNotificationSuccess")
                    },
                    error: function() {
                        b.incrementCSMCounter("watchlistRegisterForNotificationFailure")
                    }
                })
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-client-constants", "ready").register("idp-state-accessor", function(a, c) {
        var d = "msToStart msToEnd itemType dealState percentClaimed msCacheTtl dealID msStart msEnd msExpiry msToExpiry customerState primeAccessType primeAccessDuration isAppEarly isAppOnly isEbook earlyAccessDuration isAttemptingAddToCart".split(" "),
            b = c.IDP_PREFIX,
            f = function(b) {
                return a.state(b)
            },
            k = function(b, c, e) {
                a.state(b, c, e)
            },
            e = function(a) {
                return f(b + a)
            };
        return {
            getState: f,
            setState: k,
            getDealStateObject: e,
            bindToState: function(b, c) {
                a.state.bind(b, c)
            },
            setDealState: function(l) {
                a.each(l, function(l, h) {
                    var p = e(h);
                    if (p) {
                        var g;
                        g = p ? a.$.extend(!0, {}, p) : w;
                        (p = f(c.IDP_PREFIX + c.STATE_CONSTANTS)) && p.isAttemptingAddToCart && (g.isAttemptingAddToCart = !1);
                        a.each(d, function(a, b) {
                            g.hasOwnProperty(a) || (g[a] = "");
                            l && l[a] && (g[a] = l[a]);
                            "" === g[a] && delete g[a]
                        });
                        g.msSinceCacheRefresh = 0;
                        g.lastMsCacheTtl = null;
                        k(b + h, g)
                    }
                })
            },
            setDealStateWithObject: function(c, e, d) {
                k(b + c.dealID, e, d);
                a.$.extend(c, e)
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-state-accessor", "idp-client-constants").register("idp-time-updater", function(a, c, d) {
        var b = {
                msToExpiry: 1E3,
                msToStart: 1E3,
                msToEnd: 1E3
            },
            f = {
                msSinceCacheRefresh: 1E3,
                tick: 1
            };
        a.interval(function() {
            var k = c.getState(d.IDP_PREFIX + d.STATE_DEAL_IDS);
            k && a.each(k, function(e, l) {
                e && a.each(e, function(e, l) {
                    var k = {},
                        g = c.getState(d.IDP_PREFIX + e);
                    g && (a.each(b, function(a, b) {
                        g && g[b] && (k[b] = g[b] - a)
                    }), a.each(f, function(a, b) {
                        g && (k[b] = g[b] || 0 === g[b] ? g[b] + a : 0)
                    }), c.setDealStateWithObject(g,
                        k))
                })
            })
        }, 1E3)
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A").register("idp-deal-translator", function(a) {
        return {
            translateDealStatus: function(c, d) {
                c.dealStatus = a.$.extend(!0, {}, d)
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "ready").register("csm-utils", function(a) {
        var c = h.ue;
        return {
            incrementCSMCounter: function(a) {
                "undefined" !== typeof c && "undefined" !== typeof c.count && c.count(a, (c.count(a) || 0) + 1)
            }
        }
    });
    "use strict";
    t.when("A", "ready", "af").execute(function(a) {
        var c = a.$;
        0 !== c("#idp-first-image").length &&
            a.loadDynamicImage(c("#idp-first-image"))
    });
    "use strict";
    var G = {},
        L = {},
        H, O;
    h.areIDPAssetsAlreadyLoaded || (t.when("A", "idp-client-constants", "idp-state-accessor", "common-util", "ready").register("asin-impression-report", function(a, c, d, b) {
        function f(c) {
            var e = b.setUrlParam("/gp/aw/idp/impressionTracker.html", "sID", H.sessionID),
                d = JSON.stringify(c),
                e = b.setUrlParam(e, "oID", H.requestID),
                e = b.setUrlParam(e, "imp", d);
            if (2E3 >= h.encodeURIComponent(e).length) b.sendLogData(e);
            else {
                var l = [];
                a.each(c, function(a, b) {
                    l.push(b)
                });
                var k = {},
                    n = {};
                if (1 === l.length) {
                    d = c[l[0]].split(",");
                    if (1 >= d.length) return;
                    e = d.slice(0, Math.ceil(d.length / 2));
                    d = d.slice(Math.ceil(d.length / 2), d.length);
                    k[l[0]] = e.join();
                    n[l[0]] = d.join()
                } else e = l.slice(0, Math.ceil(l.length / 2)), d = l.slice(Math.ceil(l.length / 2), l.length), a.each(e, function(a) {
                    k[a] = c[a]
                }), a.each(d, function(a) {
                    n[a] = c[a]
                });
                f(k);
                f(n)
            }
        }
        var k = a.$;
        H = d.getState(c.IDP_PREFIX + "Constants");
        O = c.IDP_PREFIX;
        if (H && H.isDealsPage) {
            var e = function() {
                    var e = {},
                        d, g;
                    a.each(G, function(f, k) {
                        var h = [],
                            n = [];
                        d = l(k);
                        g = L[k];
                        if (d && null !== d) {
                            var t, u;
                            g && null !== g && (t = g.asin, u = g.percentClaimed);
                            t && (t = [t, k], b.isDealActionable(g) && t.push(c.CONSTANT_Y), !isNaN(parseInt(u, c.DECIMAL)) && isFinite(u) && 0 < u && t.push(u), a.each(f, function(a, b) {
                                n.push(b, a)
                            }), 0 < n.length && t.push(n.join("")), e[d] && h.push(e[d]), h.push(t.join("-")), 0 < h.length && (e[d] = h.join()))
                        }
                    });
                    f(e);
                    G = {};
                    L = {}
                },
                l = function(a) {
                    if (a !== w && null !== a) {
                        var b = L[a];
                        if (b) {
                            a = b.slotId;
                            var b = b.placementId,
                                e = c.WIDGET_REFMARKER;
                            if (a && b && e) {
                                a = [e, a, b];
                                if (b = d.getState(O + c.STATE_DEAL_IDS)) var e =
                                    Object.keys(b),
                                    f = e.length,
                                    b = 1 === f && 2 === b[e[0]].length || 1 < f ? c.CONSTANT_Y : void 0;
                                else b = void 0;
                                b && a.push(b);
                                return a.join(".")
                            }
                        }
                    }
                };
            k(h).unload(function() {
                h.clearInterval(n);
                H && H.isAsinImpEnabled && e()
            });
            var n = h.setInterval(function() {
                H && H.isAsinImpEnabled && e()
            }, 3E5);
            return {
                reportImpressionLog: e
            }
        }
    }), t.when("A", "asin-impression-report", "idp-state-accessor", "idp-client-constants", "common-util", "ready").register("idp-impression-tracker", function(a, c, d, b, f) {
        var k = b.CLIENT_ACTIONS,
            e = a.$,
            l = function(a) {
                var c =
                    b.DEALID_CLASS_PREFIX + a;
                a !== w && null !== a && f.isGBDealsWidget(e(c)) && (G[a] || (G[a] = {}), L[a] = d.getState(O + a))
            };
        return {
            recordAction: function(a, b) {
                a !== w && null !== a && b !== w && null !== b && k[b] && (l(a), G[a][k[b]] || (G[a][k[b]] = 0), G[a][k[b]]++)
            },
            recordRender: l,
            verifyAndPushRecord: function() {
                0 < Object.keys(G).length && H && H.isAsinImpEnabled && c.reportImpressionLog()
            }
        }
    }));
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "idp-client-constants", "idp-state-accessor").register("common-util", function(a, c, d) {
        return {
            setUrlParam: function(b,
                c, d) {
                var e = b.indexOf("#"),
                    l = -1 === e ? "" : b.substr(e);
                b = -1 === e ? b : b.substr(0, e);
                var e = new RegExp("([?\x26])" + c + "\x3d.*?(\x26|$)", "i"),
                    h = -1 !== b.indexOf("?") ? "\x26" : "?",
                    r = {};
                r[c] = d;
                b = b.match(e) ? b.replace(e, "$1" + a.$.param(r) + "$2") : b + h + a.$.param(r);
                return b + l
            },
            sendLogData: function(b, c) {
                h.navigator && navigator.sendBeacon ? navigator.sendBeacon(b, c) : a.$.ajax({
                    url: b,
                    method: "POST",
                    async: !1
                })
            },
            getDealCurrentState: function(b, c) {
                return a.state(b + c)
            },
            isDealActionable: function(a) {
                var f = d.getState(c.IDP_PREFIX + c.STATE_CONSTANTS);
                return a && f && a.dealState && (a.dealState === c.DEAL_STATE.AVAILABLE || a.dealState === c.DEAL_STATE.WAITLIST) && (f.customerID && f.isPrimeCustomer || null === a.primeAccessType || a.primeAccessType !== c.PRIME_EARLY_ACCESS && a.primeAccessType !== c.PRIME_ONLY_LD) ? !0 : !1
            },
            isGBDealsWidget: function(a) {
                return a.parents(c.DIV + c.IDP_GB_WIDGET_CLASS) || a.hasClass(c.IDP_GB_WIDGET_CLASS) ? !0 : !1
            },
            getReftag: function(a, d, k, e) {
                k = k ? k.substr(k.length - c.REF_PLACEMENT_ID_LENGTH) : c.EMPTY_STRING;
                return ["gbmi", a, d, k, e].join("_")
            }
        }
    });
    "use strict";
    t.when("A", "idp-state-accessor", "idp-client-constants", "idp-impression-tracker", "common-util", "ready").execute(function(a, c, d, b, f) {
        function k(a) {
            a = a.parents(d.DIV + d.IDP_GB_WIDGET_CLASS).attr("class");
            return null === a || a === w ? null : /idp-(\S+)/.exec(a.toString())[1]
        }

        function e() {
            h(".deal-image, .deal-image-ags").click(function(a) {
                a = k(h(this));
                f.isGBDealsWidget(h(this)) && b.recordAction(a, d.IMAGE)
            })
        }

        function l() {
            h(".deal-title-bar").click(function(a) {
                a = k(h(this));
                f.isGBDealsWidget(h(this)) && b.recordAction(a,
                    d.TITLE)
            })
        }
        var h = a.$;
        a.on("a:pageAjaxUpdate", function() {
            e();
            l()
        });
        a.on("a:scrollSuccess", function() {
            e();
            l()
        });
        a.on("a:pageLazyLoadUpdate", function() {
            e();
            l()
        });
        e();
        l()
    });
    "use strict";
    t.when("A", "idp-state-accessor", "idp-impression-tracker", "common-util", "idp-client-constants", "ready").execute(function(a, c, d, b, f) {
        function h() {
            var b = c.getState(r + f.STATE_DEAL_IDS);
            if (b && 0 !== Object.keys(b).length) {
                var d = Object.keys(b);
                d && 0 !== d.length && a.each(d, function(a, c) {
                    var d = b[a];
                    d && (d.length > n && (p = d.slice(n), d = d.slice(0,
                        n)), e(d))
                })
            }
        }

        function e(c) {
            c && a.each(c, function(a, c) {
                b.isGBDealsWidget(l(f.DEALID_CLASS_PREFIX + a)) && d.recordRender(a)
            })
        }
        var l = a.$,
            n = f.DEAL_BATCH_SIZE,
            r = f.IDP_PREFIX,
            p;
        a.on("a:pageAjaxUpdate", function() {
            d.verifyAndPushRecord();
            h()
        });
        a.on("a:pageLazyLoadUpdate", function() {
            d.verifyAndPushRecord();
            h()
        });
        a.on("a:scrollSuccess", function() {
            var a;
            p.length >= n && (a = p.slice(0, n), p = p.slice(n));
            e(a)
        });
        h()
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "ajax-util", "idp-state-accessor", "lazyload-utils", "deals-nav",
        "idp-client-constants", "idp-reactor").register("lazy-load", function(a, c, d, b, f, k, e) {
        var l = a.$,
            n, r, p, g, q, m = !1,
            t, w, x, u, D = h.amazon && h.amazon.mash,
            E = null,
            A;
        f = function() {
            var f = d.getState(k.IDP_PREFIX + k.STATE_DEAL_IDS),
                u = d.getState("IDP:lazyLoadConfig"),
                u = u && u.lazyLoadOtherWidgets;
            if (f && (1 > Object.keys(f).length || 1 === Object.keys(f).length && "false" === u)) b.hideElementById(b.Constants.LAZYLOAD_SPINNER_SELECTOR), b.hideElementById(b.Constants.LAZYLOAD_SPINNER_TEXT_SELECTOR);
            else if (w = d.getState("lazy-load-state"),
                w || (b.showElementById(b.Constants.LAZYLOAD_SPINNER_SELECTOR), b.showElementById(b.Constants.LAZYLOAD_SPINNER_TEXT_SELECTOR)), w && w.isViewAll) H(), b.showElementById(b.Constants.BOTTOM_SLOTS_SELECTOR);
            else {
                A = location.href;
                n = b.Constants.PAGE_LOAD_NUM_SLOTS + 1;
                r = 0;
                g = !0;
                q = !1;
                p = b.Constants.LAZYLOAD_NUM_SLOTS;
                v();
                l(b.Constants.LAZYLOAD_CONTENT_SELECTOR).prepend(b.generateLazyLoadMarker(r));
                r++;
                if (0 < l(h).scrollTop() && b.checkKeyInLazyLoadDataCache(A)) u = b.getLazyLoadDataCache(A), n = u.slotId + u.numSlots, r = u.scrollMarkerId +
                    1;
                else if (h.sessionStorage && h.sessionStorage.getItem(A)) {
                    if (u = JSON.parse(h.sessionStorage.getItem(A)), b.putLazyLoadDataCache(A, u), n = u.slotId + u.numSlots, r = u.scrollMarkerId + 1, f && Object.keys(f).length <= b.Constants.PAGE_LOAD_NUM_SLOTS && a.$(b.Constants.LAZYLOAD_CONTENT_SELECTOR).append(u.domData), u.scrollTop && h.scrollTo(0, u.scrollTop), h.sessionStorage.removeItem(A), (!h.amazon || !h.amazon.mash) && f && Object.keys(f).length <= b.Constants.PAGE_LOAD_NUM_SLOTS)
                        for (c.resetStates(), f = 0, f = b.Constants.PAGE_LOAD_NUM_SLOTS +
                            1; f <= u.slotId; f += b.Constants.LAZYLOAD_NUM_SLOTS) e.initLazyLoad(f)
                } else m = !1, C();
                t = a.interval(function() {
                    m && (m = !1, C())
                }, b.Constants.SCROLL_THROTTLE_INTERVAL_MILLIS)
            }
        };
        var v = function() {
                l(h).scroll(function() {
                    m = B() ? !1 : !0
                })
            },
            C = function() {
                if (n > b.Constants.MAX_SLOT_LIMIT) H(), h.clearInterval(t);
                else {
                    var a = l(b.Constants.MARKER_ID_PREFIX + (r - 1));
                    b.isElementTopInViewPort(a) && g && !q && (b.showElementById(b.Constants.LAZYLOAD_SPINNER_SELECTOR), b.showElementById(b.Constants.LAZYLOAD_SPINNER_TEXT_SELECTOR), y())
                }
            },
            y = function() {
                q = !0;
                null !== E && (E.abort(), E = null);
                E = a.ajax(b.getAjaxUrl(), {
                    method: "GET",
                    params: b.getAjaxParams(n, p),
                    success: function(e) {
                        if (null === e || 0 === e.trim().length) G();
                        else {
                            var d = !1;
                            B() && (d = !0);
                            var f;
                            b.checkKeyInLazyLoadDataCache(A) ? (f = b.getLazyLoadDataCache(A), f = f.domData + b.generateLazyLoadMarker(r) + e) : f = b.generateLazyLoadMarker(r) + e;
                            f = {
                                domData: f,
                                slotId: n,
                                numSlots: p,
                                scrollMarkerId: r,
                                scrollTop: l(h).scrollTop()
                            };
                            b.putLazyLoadDataCache(A, f);
                            l(b.Constants.LAZYLOAD_CONTENT_SELECTOR).append(b.generateLazyLoadMarker(r) +
                                e);
                            d && D && (e = l("#bottomSlots")) && (e = e.offset().top, h.scrollTo(0, x + e - u));
                            l(b.Constants.LAZYLOAD_CONTENT_SELECTOR);
                            e = n;
                            a.loadDynamicImage(l(".a-dynamic-image"));
                            a.loadImageManually(l(".dealAsinImage"));
                            c.resetStatesLazyLoad();
                            a.trigger("a:pageLazyLoadUpdate");
                            a.trigger("a:pageLazyLoadUpdateStateBind", e);
                            e > b.Constants.MAX_SLOT_LIMIT && b.hideElementById(b.Constants.LAZYLOAD_SPINNER_SELECTOR);
                            r++;
                            n += p;
                            p = b.Constants.LAZYLOAD_NUM_SLOTS;
                            q = !1
                        }
                    },
                    error: function(a, b) {
                        G()
                    },
                    timeout: b.Constants.AJAX_TIMEOUT_MILLIS
                })
            },
            B = function() {
                x = l(document).scrollTop();
                var a = l("#bottomSlots");
                return a && (u = a.offset().top, x >= u) ? !0 : !1
            },
            G = function() {
                b.hideElementById(b.Constants.LAZYLOAD_SPINNER_SELECTOR);
                n += p;
                p *= 2;
                n > b.Constants.MAX_SLOT_LIMIT ? H() : y()
            },
            H = function() {
                g = !1;
                b.showElementById(b.Constants.BOTTOM_SLOTS_SELECTOR);
                b.hideElementById(b.Constants.LAZYLOAD_SPINNER_SELECTOR)
            };
        (w = d.getState("lazy-load-state")) && w.isLazyLoadEnabled && f();
        a.declarative("ajax-redirect", "click", function(a) {
            null !== E && (E.abort(), E = null)
        });
        a.declarative("ajax-tab",
            "click",
            function(a) {
                null !== E && (E.abort(), E = null);
                b.resetLazyLoadDataCache()
            });
        a.declarative("ajax-pagination", "click", function(a) {
            null !== E && (E.abort(), E = null)
        });
        return {
            init: f
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A", "jQuery", "idp-state-accessor").register("lazyload-utils", function(a, c, d) {
        var b = {
                URL_PARAMS: {
                    SLOT_ID: "ll_sid",
                    NUM_SLOTS: "ll_ns"
                },
                PAGE_LOAD_NUM_SLOTS: 5,
                LAZYLOAD_NUM_SLOTS: 5,
                MAX_SLOT_LIMIT: 50,
                SPINNER_TEXT_TIMEOUT_MILLIS: 7E3,
                AJAX_TIMEOUT_MILLIS: 15E3,
                AJAX_ENDPOINT_URL: "/idp/horizonte/ajax/lazyload",
                SCROLL_THROTTLE_INTERVAL_MILLIS: 1E3,
                LAZYLOAD_SPINNER_SELECTOR: "#idp-lazyload-spinner",
                LAZYLOAD_SPINNER_TEXT_SELECTOR: "#spinnerText",
                LAZYLOAD_CONTENT_SELECTOR: "#next-page-swipe-area",
                BOTTOM_SLOTS_SELECTOR: "#bottomSlots",
                MARKER_ID_PREFIX: "#marker-"
            },
            f = {
                data: {},
                remove: function(a) {
                    delete f.data[a]
                },
                exist: function(a) {
                    return !!f.data[a]
                },
                get: function(a) {
                    if (f.data[a]) return f.data[a].data
                },
                set: function(a, b) {
                    f.remove(a);
                    f.data[a] = {
                        data: b
                    }
                }
            },
            k = function(a) {
                (a = c(a)) && !a.hasClass("aok-hidden") && a.addClass("aok-hidden")
            };
        return {
            Constants: b,
            isElementTopInViewPort: function(a) {
                if (c(a) && c(a).offset() && c(h)) {
                    a = c(a).offset().top;
                    var b = c(h).scrollTop() + c(h).height();
                    return a <= b
                }
            },
            generateLazyLoadMarker: function(a) {
                return '\x3cdiv id\x3d"marker-' + a + '"/\x3e'
            },
            getAjaxUrl: function() {
                var a = "";
                h.location && (a = h.location.search);
                return b.AJAX_ENDPOINT_URL + a
            },
            getAjaxParams: function(a, c) {
                var d = {};
                d[b.URL_PARAMS.SLOT_ID] = a;
                d[b.URL_PARAMS.NUM_SLOTS] = c;
                return d
            },
            clearLazyLoadContent: function() {
                k(b.LAZYLOAD_SPINNER_SELECTOR);
                var a = c(b.LAZYLOAD_CONTENT_SELECTOR);
                a && a.empty()
            },
            hideElementById: k,
            showElementById: function(a) {
                (a = c(a)) && a.hasClass("aok-hidden") && a.removeClass("aok-hidden")
            },
            checkKeyInLazyLoadDataCache: function(a) {
                return f.exist(a)
            },
            putLazyLoadDataCache: function(a, b) {
                f.set(a, b)
            },
            resetLazyLoadDataCache: function(a, b) {
                f.data = {}
            },
            getLazyLoadDataCache: function(a) {
                return f.get(a)
            },
            lazyloadG2S2Init: function() {
                var a = d.getState("lazyload-config-state");
                a && (b.PAGE_LOAD_NUM_SLOTS = parseInt(a.PAGE_LOAD_NUM_SLOTS, 10), b.LAZYLOAD_NUM_SLOTS = parseInt(a.LAZYLOAD_NUM_SLOTS,
                    10), b.MAX_SLOT_LIMIT = parseInt(a.MAX_SLOT_LIMIT, 10), b.SPINNER_TEXT_TIMEOUT_MILLIS = parseInt(a.SPINNER_TEXT_TIMEOUT_MILLIS, 10), b.AJAX_TIMEOUT_MILLIS = parseInt(a.AJAX_TIMEOUT_MILLIS, 10), b.AJAX_ENDPOINT_URL = a.AJAX_ENDPOINT_URL, b.SCROLL_THROTTLE_INTERVAL_MILLIS = parseInt(a.SCROLL_THROTTLE_INTERVAL_MILLIS, 10))
            }
        }
    });
    "use strict";
    h.areIDPAssetsAlreadyLoaded || t.when("A").execute("icart-atc-actions", function(a) {
        function c(a) {
            var b = {};
            b.ASIN = a.data.asin;
            b.verificationSessionID = a.data.verificationSessionID;
            b.quantity =
                1;
            b.offerListingID = a.data.offerId;
            b.clientName = "INR13N";
            b["custom-name.1"] = a.data.customName;
            b["custom-value.1"] = a.data.customValue;
            return b
        }

        function d(a) {
            f("#icart-success-changeover").show();
            k && h.amazon.mash.cart ? h.amazon.mash.cart.didUpdate({
                newCartQuantity: parseInt(a.cartQuantity, 10)
            }) : t.when("nav.setCartCount").execute(function(b) {
                b(parseInt(a.cartQuantity, 10))
            })
        }

        function b() {
            f("#icart-error-changeover").show()
        }
        var f = a.$,
            k = h.amazon && h.amazon.mash;
        f(".icart-atc-changeover .a-icon-checkmark-inverse").addClass("aok-hidden");
        a.declarative("icart-deal-atc", "click", function(e) {
            a.post(e.data.addToCartUrl, {
                params: c(e),
                success: function(a) {
                    a && a.isOK ? d(a) : b()
                },
                error: function() {
                    b()
                }
            })
        })
    })
});