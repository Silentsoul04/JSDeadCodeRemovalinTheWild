(function(q) {
    var e = window.AmazonUIPageJS || window.P,
        y = e._namespace || e.attributeErrors,
        a = y ? y("DetailPageAlohaAssets", "") : e;
    a.guardFatal ? a.guardFatal(q)(a, window) : a.execute(function() {
        q(a, window)
    })
})(function(q, e, y) {
    q.when("A", "a-secondary-view", "a-checkbox", "aloha-simplebundle-common", "ready").execute(function(a, e, v, d) {
        function l(c, d) {
            a.$(b.SB_ROOT + " " + b.SB_CHECKBOX).filter(function() {
                return a.$(this).data("asin") === c
            }).find("input[type\x3d'checkbox']").prop("checked", d).change()
        }

        function c(a) {
            (a = e.get("SBPopover_" +
                a)) && a.hide()
        }

        function t() {
            var c = a.$(b.BUY_BOX).find(b.A_DECLARATIVE).has(b.ADD_TO_CART_BUTTON);
            return 1 === c.length ? c : c = a.$(b.ATC_DECLARATIVE)
        }

        function m(b) {
            function d() {
                b.logExpandedLink()
            }
            a.declarative("add-to-order", "click", function(a) {
                l(a.data.targetAsin, !0);
                c(a.data.targetAsin)
            });
            a.declarative("hide-secondary-view", "click", function(a) {
                l(a.data.targetAsin, !1);
                c(a.data.targetAsin)
            });
            a.on("a:popover:afterShow:modal-expanded-items", d);
            a.one("a:pageUpdate", function() {
                a.off("a:popover:afterShow:modal-expanded-items",
                    d)
            })
        }
        var b = {
                ADD_TO_CART_FORM: "#addToCart, #mobile-installments",
                ADD_TO_CART_BUTTON: "#add-to-cart-button, #installments-button",
                SESSION_ID: "#verificationSessionID",
                ATC_DECLARATIVE: "#atc-declarative",
                A_DECLARATIVE: ".a-declarative",
                BUY_BOX: "#buybox",
                INPUT_TYPE_CHECKBOX: "input[type\x3d'checkbox']",
                BASE_PRODUCT_PRICE: "#base-product-price",
                BASE_PRODUCT_PRICE_DATA: "base-product-price",
                ACCORDION_BUYBOX: "#buyBoxAccordion",
                ACCORDION_BUYBOX_ROW_CONTENT: "#buyBoxAccordion .accordion-row-content",
                SB_ROOT: ".showBundleAsins.simpleBundleFeatureContainer",
                SB_DETAILS_LINK_PREFIX: ".sb-touch-link-",
                SB_CHECKBOX: ".sb-checkbox",
                SB_BUYBOX_CHECKBOX_PREFIX: ".sb-buybox-item-checkbox-",
                SB_EXPANDED_CHECKBOX_PREFIX: ".sb-expanded-item-checkbox-",
                SB_BUYBOX_CHECKBOX_CONTAINER_PREFIX: ".sb-buybox-item-section-",
                SB_EXPANDED_CHECKBOX_CONTAINER_PREFIX: ".sb-buybox-item-container-"
            },
            q = !1;
        v = a.debounce(function() {
            var c = a.$(b.SB_ROOT);
            if (c.length) {
                var l = a.$(b.ADD_TO_CART_FORM),
                    e = 0 < l.find(":submit").length,
                    A = a.$(b.ADD_TO_CART_BUTTON),
                    w = t(),
                    F = (w = w.data("aw-mash") || w.data("show-services-interstitial") ||
                        w.data("show-attach-interstitial")) && w.inputs && w.inputs.verificationSessionID;
                if (e || w) {
                    var g = d.getSimpleBundlePageState() || {},
                        B = g.expandedBuyboxEnabled,
                        u = g.selectionMode || "SINGLE",
                        n = g.items || [],
                        p = [],
                        r = F || a.$(b.SESSION_ID).val(),
                        e = {
                            baseAsin: g.baseAsin,
                            baseItemPrice: a.$(b.BASE_PRODUCT_PRICE).data(b.BASE_PRODUCT_PRICE_DATA),
                            clientType: "aloha-simplebundle-mobile",
                            currencyOfPreferenceSupported: g.currencyOfPreferenceSupported || !1
                        },
                        h = d.createMetricsLogger(e);
                    m(h);
                    n.forEach(function(a, k) {
                        var r = c.find(b.SB_DETAILS_LINK_PREFIX +
                            k);
                        r.unbind("click.MiniDpClickHandler");
                        r.bind("click.MiniDpClickHandler", function() {
                            h.logItemLink(k);
                            h.logNexusOpenMiniDP(k, a);
                            h.logMiniDPRefTag(k)
                        });
                        d.setupCheckboxes(p, k, B, a.asin, g.maxBuyboxItemsMobile, b.SB_BUYBOX_CHECKBOX_PREFIX + k + " " + b.INPUT_TYPE_CHECKBOX, b.SB_EXPANDED_CHECKBOX_PREFIX + k + " " + b.INPUT_TYPE_CHECKBOX, b.SB_BUYBOX_CHECKBOX_CONTAINER_PREFIX + k, b.SB_EXPANDED_CHECKBOX_CONTAINER_PREFIX + k, u)
                    });
                    q || (q = !0, a.defer(function() {
                        var a = n.filter(function(a, h) {
                            return p[h] && p[h].isVisible()
                        });
                        h.logNexusImpression(a);
                        h.logImpressionRefTag()
                    }));
                    w ? A.each(function() {
                        var f = a.$(this),
                            k;
                        k = a.$(b.ACCORDION_BUYBOX).length ? f.closest(b.ACCORDION_BUYBOX_ROW_CONTENT) : a.$(b.BUY_BOX);
                        d.setupAddToCartForDeclarative(f, p, n, h, r, B, k)
                    }) : d.setupAddToCart(l, p, n, h, r, B);
                    l = a.$("#buyNowCheckout");
                    d.setupAddToCart(l, p, n, h, r, B)
                } else c.hide()
            }
        }, 200);
        v();
        a.on("a:pageUpdate", v)
    });
    "use strict";
    q.when("A", "a-checkbox", "aloha-uatc", "aloha-buy-now-integration", "aloha-buybox-form-util").register("aloha-simplebundle-common", function(a, E, v, d, l) {
        function c(b,
            c) {
            var d = a.$(b);
            d.change(function() {
                d.prop("checked", this.checked)
            });
            var g = a.$(c);
            g.length || (g = d);
            return {
                $element: d,
                $container: g,
                api: E(b),
                show: function() {
                    g.hasClass(z.AUI_HIDDEN) && g.removeClass(z.AUI_HIDDEN);
                    g.show()
                },
                hide: function() {
                    g.hasClass(z.AUI_HIDDEN) || g.addClass(z.AUI_HIDDEN)
                },
                isVisible: function() {
                    return !g.hasClass(z.AUI_HIDDEN)
                }
            }
        }

        function t(a, b, c) {
            b.forEach(function(b) {
                a.addItem(b.asin, b.offerListingId, b.quantity);
                c.logCheckboxSelected(b.index, b.quantity);
                c.logAddToCartRefTag(b.index)
            })
        }

        function m(a, b, c) {
            var g = [],
                d = [];
            b.forEach(function(b, l) {
                var p = a[l];
                b.api.isChecked() ? g.push({
                    asin: p.asin,
                    offerListingId: p.offerListingId,
                    ourPrice: p.ourPrice,
                    ourPriceAmount: p.ourPriceAmount,
                    ourPriceSymbol: p.ourPriceSymbol,
                    ourPriceCode: p.ourPriceCode,
                    index: l,
                    quantity: c
                }) : d.push({
                    asin: p.asin,
                    ourPrice: p.ourPrice,
                    ourPriceAmount: p.ourPriceAmount,
                    ourPriceSymbol: p.ourPriceSymbol,
                    ourPriceCode: p.ourPriceCode,
                    index: l,
                    isVisible: b.isVisible()
                })
            });
            return {
                selectedLineItems: g,
                unselectedItems: d
            }
        }
        var b = /[^\d,\.]/g,
            D = /,/g,
            C = /\./g,
            y = /(^\D+|\D+$)/,
            z = {
                AUI_HIDDEN: "aok-hidden"
            };
        return {
            createMetricsLogger: function(c) {
                function d(a, b) {
                    e.ue && e.ue.count && e.ue.count("aloha-simplebundle-" + a, b)
                }

                function l() {
                    var a;
                    a = c.currencyOfPreferenceSupported ? {
                        priceFormatted: c.baseItemPrice,
                        priceDecimal: null,
                        currencySymbol: null
                    } : n(c.baseItemPrice);
                    return {
                        baseAsin: c.baseAsin,
                        baseItemPrice: a.priceFormatted,
                        baseItemCurrencySymbol: a.currencySymbol,
                        baseItemPriceDecimal: a.priceDecimal,
                        clientType: c.clientType,
                        feature: "abb"
                    }
                }

                function g(a, b) {
                    e.ue &&
                        e.ue.event && e.ue.event(a, "atch", b)
                }

                function m(b) {
                    a.ajax("/gp/product/ajax-handlers/reftag.html?ref_\x3d" + b, {
                        method: "get"
                    })
                }

                function u(a) {
                    return c.currencyOfPreferenceSupported ? {
                        priceFormatted: a.ourPrice,
                        priceDecimal: parseFloat(a.ourPriceAmount) || null,
                        currencySymbol: a.ourPriceSymbol
                    } : n(a.ourPrice)
                }

                function n(a) {
                    a = a || "";
                    var c = a.lastIndexOf(","),
                        h = a.lastIndexOf("."),
                        f;
                    c > h ? (h = C, f = D) : (h = D, f = C);
                    (c = a.match(y)) && (c = c[0].trim());
                    h = a.replace(b, "").replace(h, "").replace(f, ".");
                    h = parseFloat(h);
                    return {
                        priceFormatted: a,
                        currencySymbol: c,
                        priceDecimal: h
                    }
                }
                a.defer(function() {
                    d("view", 1)
                });
                return {
                    logAddToCart: function(a) {
                        d("addtocart", a)
                    },
                    logExpandedLink: function() {
                        d("buybox-expanded-link", 1)
                    },
                    logCheckboxSelected: function(a, b) {
                        d("checkbox-" + (a + 1), b)
                    },
                    logItemLink: function(a) {
                        d("link-" + (a + 1), 1)
                    },
                    logImpressionRefTag: function() {
                        m("dp_atch_abb_i")
                    },
                    logAddToCartRefTag: function(a) {
                        m("dp_atch_abb_atc_" + (a + 1))
                    },
                    logMiniDPRefTag: function(a) {
                        m("dp_atch_abb_smdp_" + (a + 1))
                    },
                    logNexusImpression: function(a) {
                        var b = l();
                        b.accessories = a.map(function(a,
                            b) {
                            var c = u(a);
                            return {
                                asin: a.asin,
                                displayPosition: b + 1,
                                price: c.priceFormatted,
                                currencySymbol: c.currencySymbol,
                                priceDecimal: c.priceDecimal
                            }
                        });
                        g(b, "attach.ABBImpression.3")
                    },
                    logNexusAddBaseToCart: function(a, b, c) {
                        var f = l();
                        f.baseQuantity = Number(c);
                        f.accessoriesAdded = a.map(function(a) {
                            var b = u(a);
                            return {
                                asin: a.asin,
                                displayPosition: a.index + 1,
                                quantity: Number(a.quantity),
                                price: b.priceFormatted,
                                currencySymbol: b.currencySymbol,
                                priceDecimal: b.priceDecimal
                            }
                        });
                        f.accessoriesNotAdded = b.map(function(a) {
                            var b = u(a);
                            return {
                                asin: a.asin,
                                displayPosition: a.index + 1,
                                price: b.priceFormatted,
                                currencySymbol: b.currencySymbol,
                                priceDecimal: b.priceDecimal
                            }
                        });
                        g(f, "attach.ABBAddBaseToCart.7")
                    },
                    logNexusOpenMiniDP: function(a, b) {
                        var c = u(b),
                            f = l();
                        f.accessoryAsin = b.asin;
                        f.accessoryDisplayPosition = Number(a) + 1;
                        f.accessoryPrice = c.priceFormatted;
                        f.accessoryItemCurrencySymbol = c.currencySymbol;
                        f.accessoryItemPriceDecimal = c.priceDecimal;
                        g(f, "attach.ABBShowMiniDP.3")
                    }
                }
            },
            getSimpleBundlePageState: function() {
                var b = a.$(".simpleBundleJavascriptParameters").find("script").html();
                return a.parseJSON(b)
            },
            getCheckboxCollectionObject: c,
            setupAddToCart: function(b, c, l, g, q, u) {
                function n(b, f) {
                    if (p) {
                        var k = a.$(b.currentTarget);
                        if (d.isBuyNow(k)) {
                            var x = u ? 1 : r.find("*[name\x3d'quantity']").val() || 1,
                                n = m(l, c, x);
                            d.checkoutWith(n.selectedLineItems, k)
                        } else return
                    }
                    var A = v.createAddToCartRequest(q, function() {
                            f()
                        }, function() {
                            e.ueLogError && e.ueLogError({
                                message: "[There was an error while adding items to the cart using the universal add to cart api.]"
                            }, {
                                logLevel: "ERROR",
                                attribution: "SimpleBundle"
                            });
                            f()
                        }),
                        x = u ? 1 : r.find("*[name\x3d'quantity']").val() || 1,
                        n = m(l, c, x);
                    t(A, n.selectedLineItems, g);
                    k = n.unselectedItems.filter(function(a) {
                        return a.isVisible
                    });
                    g.logNexusAddBaseToCart(n.selectedLineItems, k, x);
                    x = A.count();
                    0 !== x && (k = a.$(b.currentTarget), d.isBuyNow(k) ? d.checkoutWith(n.selectedLineItems, k) : (p = !0, b.preventDefault(), g.logAddToCart(x), A.call()))
                }
                var p = !1,
                    r = b;
                b.unbind("submit.SimpleBundleSubmitHandler");
                b.bind("submit.SimpleBundleSubmitHandler", function(b) {
                    var c = a.$(this);
                    n(b, function() {
                        c.submit()
                    })
                });
                b.find(":submit").unbind("click.SBB");
                b.find(":submit").bind("click.SBB", function(b) {
                    var c = a.$(this),
                        d = c.closest(".a-accordion-row-container");
                    d.length && (r = d, n(b, function() {
                        c.click()
                    }))
                })
            },
            setupAddToCartForDeclarative: function(a, b, c, d, l, u, n) {
                a.unbind("click.SimpleBundleClickHandler");
                a.bind("click.SimpleBundleClickHandler", function(a) {
                    a = v.createAddToCartRequest(l, function() {
                            q.now("attach-external-atc-interceptor").execute(function(a) {
                                a && h.selectedLineItems.forEach(function(b) {
                                    a.updateAttachModule(b.asin)
                                })
                            })
                        },
                        function() {
                            e.ueLogError && e.ueLogError({
                                message: "[There was an error while adding items to the cart using the universal add to cart api.]"
                            }, {
                                logLevel: "ERROR",
                                attribution: "SimpleBundle"
                            })
                        });
                    var r = u ? 1 : n.find("*[name\x3d'quantity']").val() || 1,
                        h = m(c, b, r);
                    t(a, h.selectedLineItems, d);
                    var f = h.unselectedItems.filter(function(a) {
                        return a.isVisible
                    });
                    d.logNexusAddBaseToCart(h.selectedLineItems, f, r);
                    if (r = a.count()) d.logAddToCart(r), a.call()
                })
            },
            setupCheckboxes: function(a, b, d, l, m, e, n, p, r, h) {
                var f = c(e, p);
                a.push(f);
                f.api.enable();
                f.$element.data("asin", l);
                if (d) {
                    var k = c(n, r);
                    k.api.enable();
                    k.api.check(f.api.isChecked());
                    k.$element.change(function() {
                        var a = k.api.isChecked();
                        f.api.check(a)
                    });
                    f.$element.change(function() {
                        var b = f.api.isChecked();
                        k.api.check(b);
                        var c = 0;
                        a.forEach(function(a) {
                            c < m && a.api.isChecked() ? (c++, a.show()) : a.hide()
                        });
                        c < m && a.forEach(function(a) {
                            c < m && a.api.isUnchecked() && (c++, a.show())
                        })
                    })
                } else "SINGLE" === h && f.$element.change(function() {
                    f.api.isChecked() && a.forEach(function(a, c) {
                        b !== c && a.api.uncheck()
                    })
                });
                0 < a.length && a[0].$element.change()
            },
            setupAddToCartForButton: function(b, c, d, g, e, v, n) {
                function p() {
                    var a = v ? 1 : r.find("*[name\x3d'quantity']").val() || 1,
                        b = m(d, c, a);
                    l.addItems(n, b.selectedLineItems, g);
                    var k = b.unselectedItems.filter(function(a) {
                        return a.isVisible
                    });
                    q.now("attach-external-atc-interceptor").execute(function(a) {
                        a && b.selectedLineItems.forEach(function(b) {
                            a.updateAttachModule(b.asin)
                        })
                    });
                    g.logNexusAddBaseToCart(b.selectedLineItems, k, a);
                    g.logAddToCart(b.selectedLineItems.length)
                }
                var r = n;
                b.unbind("click.button.SBB");
                b.bind("click.button.SBB", function() {
                    var b = a.$(this).closest(".a-accordion-row-container");
                    b.length && (r = b);
                    p()
                })
            }
        }
    });
    "use strict";
    q.when("A").register("aloha-uatc", function(a) {
        function e(q, d, l, c, t) {
            var m = 0;
            t = t || 5E3;
            c = c || l;
            var b = {
                clientName: "AmazonWireless"
            };
            b.verificationSessionID = q;
            return {
                count: function() {
                    return m
                },
                call: function() {
                    m && a.post("/gp/add-to-cart/json", {
                        timeout: t,
                        params: b,
                        success: d,
                        error: l,
                        abort: c
                    })
                },
                addItem: function(a, c, d) {
                    b["ASIN." + m] = a;
                    b["offerListingID." + m] = c;
                    b["quantity." + m] = d || 1;
                    m++
                }
            }
        }
        return {
            createAddToCartRequest: e,
            createSingleFinalCallbackAddToCartRequest: function(a, d) {
                return e(a, d, d, d)
            }
        }
    });
    "use strict";
    q.when("ready").register("aloha-buy-now-integration", function() {
        var a = {};
        q.when("turbo-checkout-buy-now-integration").execute(function(e) {
            a = e
        });
        return {
            isBuyNow: function(e) {
                return "function" === typeof a.isBuyNow && a.isBuyNow(e)
            },
            checkoutWith: function(e, q) {
                return a.checkoutWith(e, q)
            }
        }
    });
    "use strict";
    q.when("A").register("aloha-buybox-form-util", function(a) {
        function e(a) {
            for (var c =
                    2; 0 < a.find('input[name\x3d"asin.' + c + '"]').length || 0 < a.find('input[name\x3d"offeringID.' + c + '"]').length;) c++;
            return c
        }

        function q(d, c) {
            return [a.$("\x3cinput /\x3e", {
                type: "hidden",
                name: "asin." + c,
                value: d.asin,
                class: "aloha-accessory-form-input"
            }), a.$("\x3cinput /\x3e", {
                type: "hidden",
                name: "offeringID." + c,
                value: d.offerListingId,
                class: "aloha-accessory-form-input"
            }), a.$("\x3cinput /\x3e", {
                type: "hidden",
                name: "quantity." + c,
                value: d.quantity || 1,
                class: "aloha-accessory-form-input"
            })]
        }
        var d = [];
        a.on("aloha:detailPage:reappear",
            function() {
                d = [];
                a.$(".aloha-accessory-form-input").remove()
            });
        return {
            addItems: function(a, c, t) {
                var m = e(a);
                c.forEach(function(b) {
                    if (b !== y && b.asin && b.offerListingId) {
                        var c = q(b, m);
                        c.forEach(function(b) {
                            a.append(b)
                        });
                        d.push(c);
                        m++;
                        t && (t.logCheckboxSelected(b.index, b.quantity), t.logAddToCartRefTag(b.index))
                    }
                });
                c = a.find('input[name\x3d"itemCount"]');
                0 === c.length ? a.append('\x3cinput type\x3d"hidden" name\x3d"itemCount" value\x3d"' + m + '"\x3e') : c[0].value = m
            }
        }
    })
});