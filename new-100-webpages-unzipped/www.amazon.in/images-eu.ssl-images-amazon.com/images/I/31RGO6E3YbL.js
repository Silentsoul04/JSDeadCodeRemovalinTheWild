(function(n) {
    var p = window.AmazonUIPageJS || window.P,
        x = p._namespace || p.attributeErrors,
        a = x ? x("DetailPageAlohaAssets", "") : p;
    a.guardFatal ? a.guardFatal(n)(a, window) : a.execute(function() {
        n(a, window)
    })
})(function(n, p, x) {
    n.when("A", "a-secondary-view", "a-checkbox", "aloha-simplebundle-common", "ready").execute(function(a, k, d, f) {
        function c(f, c) {
            a.$(e.SB_ROOT + " " + e.SB_CHECKBOX).filter(function() {
                return a.$(this).data("asin") === f
            }).find("input[type\x3d'checkbox']").prop("checked", c).change()
        }

        function b(a) {
            (a = k.get("SBPopover_" +
                a)) && a.hide()
        }

        function h() {
            var f = a.$(e.BUY_BOX).find(e.A_DECLARATIVE).has(e.ADD_TO_CART_BUTTON);
            return 1 === f.length ? f : f = a.$(e.ATC_DECLARATIVE)
        }

        function g(f) {
            function e() {
                f.logExpandedLink()
            }
            a.declarative("add-to-order", "click", function(a) {
                c(a.data.targetAsin, !0);
                b(a.data.targetAsin)
            });
            a.declarative("hide-secondary-view", "click", function(a) {
                c(a.data.targetAsin, !1);
                b(a.data.targetAsin)
            });
            a.on("a:popover:afterShow:modal-expanded-items", e);
            a.one("a:pageUpdate", function() {
                a.off("a:popover:afterShow:modal-expanded-items",
                    e)
            })
        }
        var e = {
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
        d = a.debounce(function() {
            var c = a.$(e.SB_ROOT);
            if (c.length) {
                var b = a.$(e.ADD_TO_CART_FORM),
                    d = 0 < b.find(":submit").length,
                    k = a.$(e.ADD_TO_CART_BUTTON),
                    m = h(),
                    B = (m = m.data("aw-mash") || m.data("show-services-interstitial") ||
                        m.data("show-attach-interstitial") || m.data("show-hctp-attach")) && m.inputs && m.inputs.verificationSessionID;
                if (d || m) {
                    var z = f.getSimpleBundlePageState() || {},
                        G = z.selectionMode || "SINGLE",
                        y = z.items || [],
                        A = [],
                        C = B || a.$(e.SESSION_ID).val(),
                        d = {
                            baseAsin: z.baseAsin,
                            baseItemPrice: a.$(e.BASE_PRODUCT_PRICE).data(e.BASE_PRODUCT_PRICE_DATA),
                            clientType: "aloha-simplebundle-mobile",
                            currencyOfPreferenceSupported: z.currencyOfPreferenceSupported || !1
                        },
                        t = f.createMetricsLogger(d);
                    g(t);
                    y = y.slice(0, z.maxBuyboxItemsMobile);
                    y.forEach(function(a,
                        b) {
                        var d = c.find(e.SB_DETAILS_LINK_PREFIX + b);
                        d.unbind("click.MiniDpClickHandler");
                        d.bind("click.MiniDpClickHandler", function() {
                            t.logItemLink(b);
                            t.logNexusOpenMiniDP(b, a);
                            t.logMiniDPRefTag(b)
                        });
                        f.setupCheckboxes(A, b, a, z.maxBuyboxItemsMobile, e.SB_BUYBOX_CHECKBOX_PREFIX + b + " " + e.INPUT_TYPE_CHECKBOX, e.SB_EXPANDED_CHECKBOX_PREFIX + b + " " + e.INPUT_TYPE_CHECKBOX, e.SB_BUYBOX_CHECKBOX_CONTAINER_PREFIX + b, e.SB_EXPANDED_CHECKBOX_CONTAINER_PREFIX + b, G)
                    });
                    q || (q = !0, a.defer(function() {
                        var a = y.filter(function(a, l) {
                            return A[l] &&
                                A[l].isVisible()
                        });
                        t.logNexusImpression(a);
                        t.logImpressionRefTag()
                    }));
                    m ? k.each(function() {
                        var l = a.$(this),
                            b;
                        b = a.$(e.ACCORDION_BUYBOX).length ? l.closest(e.ACCORDION_BUYBOX_ROW_CONTENT) : a.$(e.BUY_BOX);
                        f.setupAddToCartForDeclarative(l, A, y, t, C, b)
                    }) : f.setupAddToCart(b, A, y, t, C);
                    b = a.$("#buyNowCheckout");
                    f.setupAddToCart(b, A, y, t, C)
                } else c.hide()
            }
        }, 200);
        d();
        a.on("a:pageUpdate", d)
    });
    "use strict";
    n.when("A", "a-checkbox", "aloha-uatc", "aloha-buy-now-integration", "aloha-buybox-form-util", "aloha-buy-back-integration",
        "abb-buynow-api").register("aloha-simplebundle-common", function(a, k, d, f, c, b, h) {
        function g(b, f) {
            var c = a.$(b);
            c.change(function() {
                c.prop("checked", this.checked);
                var a = {
                    asin: c.data("asin"),
                    offeringID: c.data("offeringID"),
                    quantity: c.data("quantity")
                };
                this.checked ? (h.addFormParams("#buyNow", a), h.addFormParams("#buyBackBuyNow", a), h.addFormParams("#buyNowCheckout", a)) : (h.removeFormParams("#buyNow", a), h.removeFormParams("#buyBackBuyNow", a), h.removeFormParams("#buyNowCheckout", a))
            });
            var d = a.$(f);
            d.length ||
                (d = c);
            return {
                $element: c,
                $container: d,
                api: k(b),
                show: function() {
                    d.hasClass(m.AUI_HIDDEN) && d.removeClass(m.AUI_HIDDEN);
                    d.show()
                },
                hide: function() {
                    d.hasClass(m.AUI_HIDDEN) || d.addClass(m.AUI_HIDDEN)
                },
                isVisible: function() {
                    return !d.hasClass(m.AUI_HIDDEN)
                }
            }
        }

        function e(a, b, c) {
            b.forEach(function(b) {
                a.addItem(b.asin, b.offerListingId, b.quantity);
                c.logCheckboxSelected(b.index, b.quantity);
                c.logAddToCartRefTag(b.index)
            })
        }

        function q(a, b, c) {
            var d = [],
                f = [];
            b.forEach(function(b, e) {
                var l = a[e];
                b.api.isChecked() ? d.push({
                    asin: l.asin,
                    offerListingId: l.offerListingId,
                    ourPrice: l.ourPrice,
                    ourPriceAmount: l.ourPriceAmount,
                    ourPriceSymbol: l.ourPriceSymbol,
                    ourPriceCode: l.ourPriceCode,
                    index: e,
                    quantity: c
                }) : f.push({
                    asin: l.asin,
                    ourPrice: l.ourPrice,
                    ourPriceAmount: l.ourPriceAmount,
                    ourPriceSymbol: l.ourPriceSymbol,
                    ourPriceCode: l.ourPriceCode,
                    index: e,
                    isVisible: b.isVisible()
                })
            });
            return {
                selectedLineItems: d,
                unselectedItems: f
            }
        }
        var x = /[^\d,\.]/g,
            D = /,/g,
            E = /\./g,
            F = /(^\D+|\D+$)/,
            m = {
                AUI_HIDDEN: "aok-hidden"
            };
        return {
            createMetricsLogger: function(b) {
                function c(a,
                    b) {
                    p.ue && p.ue.count && p.ue.count("aloha-simplebundle-" + a, b)
                }

                function d() {
                    var a;
                    a = b.currencyOfPreferenceSupported ? {
                        priceFormatted: b.baseItemPrice,
                        priceDecimal: null,
                        currencySymbol: null
                    } : h(b.baseItemPrice);
                    return {
                        baseAsin: b.baseAsin,
                        baseItemPrice: a.priceFormatted,
                        baseItemCurrencySymbol: a.currencySymbol,
                        baseItemPriceDecimal: a.priceDecimal,
                        clientType: b.clientType,
                        feature: "abb"
                    }
                }

                function f(a, b) {
                    p.ue && p.ue.event && p.ue.event(a, "atch", b)
                }

                function e(b) {
                    a.ajax("/gp/product/ajax-handlers/reftag.html?ref_\x3d" +
                        b, {
                            method: "get"
                        })
                }

                function g(a) {
                    return b.currencyOfPreferenceSupported ? {
                        priceFormatted: a.ourPrice,
                        priceDecimal: parseFloat(a.ourPriceAmount) || null,
                        currencySymbol: a.ourPriceSymbol
                    } : h(a.ourPrice)
                }

                function h(a) {
                    a = a || "";
                    var b = a.lastIndexOf(","),
                        c = a.lastIndexOf("."),
                        d;
                    b > c ? (c = E, d = D) : (c = D, d = E);
                    (b = a.match(F)) && (b = b[0].trim());
                    c = a.replace(x, "").replace(c, "").replace(d, ".");
                    c = parseFloat(c);
                    return {
                        priceFormatted: a,
                        currencySymbol: b,
                        priceDecimal: c
                    }
                }
                a.defer(function() {
                    c("view", 1)
                });
                return {
                    logAddToCart: function(a) {
                        c("addtocart",
                            a)
                    },
                    logExpandedLink: function() {
                        c("buybox-expanded-link", 1)
                    },
                    logCheckboxSelected: function(a, b) {
                        c("checkbox-" + (a + 1), b)
                    },
                    logItemLink: function(a) {
                        c("link-" + (a + 1), 1)
                    },
                    logImpressionRefTag: function() {
                        e("dp_atch_abb_i")
                    },
                    logAddToCartRefTag: function(a) {
                        e("dp_atch_abb_atc_" + (a + 1))
                    },
                    logMiniDPRefTag: function(a) {
                        e("dp_atch_abb_smdp_" + (a + 1))
                    },
                    logNexusImpression: function(a) {
                        var b = d();
                        b.accessories = a.map(function(a, b) {
                            var c = g(a);
                            return {
                                asin: a.asin,
                                displayPosition: b + 1,
                                price: c.priceFormatted,
                                currencySymbol: c.currencySymbol,
                                priceDecimal: c.priceDecimal
                            }
                        });
                        f(b, "attach.ABBImpression.3")
                    },
                    logNexusAddBaseToCart: function(a, b, c) {
                        var e = d();
                        e.baseQuantity = Number(c);
                        e.accessoriesAdded = a.map(function(a) {
                            var b = g(a);
                            return {
                                asin: a.asin,
                                displayPosition: a.index + 1,
                                quantity: Number(a.quantity),
                                price: b.priceFormatted,
                                currencySymbol: b.currencySymbol,
                                priceDecimal: b.priceDecimal
                            }
                        });
                        e.accessoriesNotAdded = b.map(function(a) {
                            var b = g(a);
                            return {
                                asin: a.asin,
                                displayPosition: a.index + 1,
                                price: b.priceFormatted,
                                currencySymbol: b.currencySymbol,
                                priceDecimal: b.priceDecimal
                            }
                        });
                        f(e, "attach.ABBAddBaseToCart.7")
                    },
                    logNexusOpenMiniDP: function(a, b) {
                        var c = g(b),
                            e = d();
                        e.accessoryAsin = b.asin;
                        e.accessoryDisplayPosition = Number(a) + 1;
                        e.accessoryPrice = c.priceFormatted;
                        e.accessoryItemCurrencySymbol = c.currencySymbol;
                        e.accessoryItemPriceDecimal = c.priceDecimal;
                        f(e, "attach.ABBShowMiniDP.3")
                    }
                }
            },
            getSimpleBundlePageState: function() {
                var b = a.$(".simpleBundleJavascriptParameters").find("script").html();
                return a.parseJSON(b)
            },
            getCheckboxCollectionObject: g,
            setupAddToCart: function(c, g, h, k, m) {
                function n(c,
                    r) {
                    if (t) {
                        var u = a.$(c.currentTarget);
                        if (f.isBuyNow(u)) {
                            var v = l.find("*[name\x3d'quantity']").val() || 1,
                                w = q(h, g, v);
                            f.checkoutWith(w.selectedLineItems, u)
                        } else if (b.isBuyBack(u)) v = l.find("*[name\x3d'quantity']").val() || 1, w = q(h, g, v), b.checkoutWith(w.selectedLineItems, u);
                        else return
                    }
                    var B = d.createAddToCartRequest(m, function() {
                            r()
                        }, function() {
                            p.ueLogError && p.ueLogError({
                                message: "[There was an error while adding items to the cart using the universal add to cart api.]"
                            }, {
                                logLevel: "ERROR",
                                attribution: "SimpleBundle"
                            });
                            r()
                        }),
                        v = l.find("*[name\x3d'quantity']").val() || 1,
                        w = q(h, g, v);
                    e(B, w.selectedLineItems, k);
                    u = w.unselectedItems.filter(function(a) {
                        return a.isVisible
                    });
                    k.logNexusAddBaseToCart(w.selectedLineItems, u, v);
                    v = B.count();
                    0 !== v && (u = a.$(c.currentTarget), f.isBuyNow(u) ? f.checkoutWith(w.selectedLineItems, u) : b.isBuyBack(u) ? b.checkoutWith(w.selectedLineItems, u) : (t = !0, c.preventDefault(), k.logAddToCart(v), B.call()))
                }
                var t = !1,
                    l = c;
                c.unbind("submit.SimpleBundleSubmitHandler");
                c.bind("submit.SimpleBundleSubmitHandler", function(b) {
                    var c =
                        a.$(this);
                    n(b, function() {
                        c.submit()
                    })
                });
                c.find(":submit").unbind("click.SBB");
                c.find(":submit").bind("click.SBB", function(b) {
                    var d = a.$(this),
                        e = d.closest(".a-accordion-row-container");
                    e.length && (l = e, "addToCart" !== c.attr("id") && "buyNow" !== c.attr("id") || c.unbind("submit.SimpleBundleSubmitHandler"), n(b, function() {
                        d.click()
                    }))
                })
            },
            setupAddToCartForDeclarative: function(a, b, c, f, g, h) {
                a.unbind("click.SimpleBundleClickHandler");
                a.bind("click.SimpleBundleClickHandler", function(a) {
                    a = d.createAddToCartRequest(g,
                        function() {
                            n.now("attach-external-atc-interceptor").execute(function(a) {
                                a && k.selectedLineItems.forEach(function(b) {
                                    a.updateAttachModule(b.asin)
                                })
                            })
                        },
                        function() {
                            p.ueLogError && p.ueLogError({
                                message: "[There was an error while adding items to the cart using the universal add to cart api.]"
                            }, {
                                logLevel: "ERROR",
                                attribution: "SimpleBundle"
                            })
                        });
                    var l = h.find("*[name\x3d'quantity']").val() || 1,
                        k = q(c, b, l);
                    e(a, k.selectedLineItems, f);
                    var r = k.unselectedItems.filter(function(a) {
                        return a.isVisible
                    });
                    f.logNexusAddBaseToCart(k.selectedLineItems,
                        r, l);
                    if (l = a.count()) f.logAddToCart(l), a.call()
                })
            },
            setupCheckboxes: function(b, c, d, e, f, h, k, l, q) {
                var r = g(f, k);
                b.push(r);
                r.api.enable();
                r.$element.data("asin", d.asin);
                r.$element.data("offeringID", d.offerListingId);
                r.$element.data("quantity", 1);
                a.on("a:dropdown:mobileQuantityDropDown:select", function(a) {
                    r.$element.data("quantity", a.value)
                });
                a.on("a2idpx:buyback:discount-price", function(a) {
                    r.$element.change()
                });
                "SINGLE" === q && r.$element.change(function() {
                    r.api.isChecked() && b.forEach(function(a, b) {
                        c !== b &&
                            a.api.uncheck()
                    })
                })
            },
            setupAddToCartForButton: function(b, d, e, f, g, h) {
                function k() {
                    var a = l.find("*[name\x3d'quantity']").val() || 1,
                        b = q(e, d, a);
                    c.addItems(h, b.selectedLineItems, f);
                    var g = b.unselectedItems.filter(function(a) {
                        return a.isVisible
                    });
                    n.now("attach-external-atc-interceptor").execute(function(a) {
                        a && b.selectedLineItems.forEach(function(b) {
                            a.updateAttachModule(b.asin)
                        })
                    });
                    f.logNexusAddBaseToCart(b.selectedLineItems, g, a);
                    f.logAddToCart(b.selectedLineItems.length)
                }
                var l = h;
                b.unbind("click.button.SBB");
                b.bind("click.button.SBB", function() {
                    var b = a.$(this).closest(".a-accordion-row-container");
                    b.length && (l = b);
                    k()
                })
            }
        }
    });
    n.when("A", "ready").register("abb-buynow-api", function(a) {
        var k = function(d) {
            return a.$(d + " \x3e input[name\x3dofferingID]")
        };
        return {
            addFormParams: function(d, f) {
                var c = a.$(d + " \x3e input[name\x3dasin]"),
                    b = k(d);
                d = a.$(d + " \x3e input[name\x3dquantity]");
                if ((c = a.$(c)) && 0 !== c.length && c.val() && -1 === c.val().indexOf(f.asin) && a.$(d) && 0 !== a.$(d).length && a.$(d).val() && a.$(b) && 0 !== a.$(b).length &&
                    a.$(b).val()) {
                    var h = c.val() + "|" + f.asin,
                        g = a.$(b).val() + "|" + f.offeringID;
                    f = a.$(d).val() + "|" + f.quantity;
                    c.val(h);
                    a.$(b).val(g);
                    a.$(d).val(f)
                }
            },
            removeFormParams: function(d, f) {
                var c = a.$(d + " \x3e input[name\x3dasin]"),
                    b = k(d);
                d = a.$(d + " \x3e input[name\x3dquantity]");
                if ((c = a.$(c)) && 0 !== c.length && c.val() && -1 !== c.val().indexOf(f.asin) && a.$(d) && 0 !== a.$(d).length && a.$(d).val() && a.$(b) && 0 !== a.$(b).length && a.$(b).val()) {
                    var h = c.val().split("|");
                    f = h.indexOf(f.asin);
                    h.splice(f, 1);
                    c.val(h.join("|"));
                    c = a.$(b).val().split("|");
                    c.splice(f, 1);
                    a.$(b).val(c.join("|"));
                    b = a.$(d).val().split("|");
                    b.splice(f, 1);
                    a.$(d).val(b.join("|"))
                }
            }
        }
    });
    "use strict";
    n.when("A").register("aloha-uatc", function(a) {
        function k(d, f, c, b, h) {
            var g = 0;
            h = h || 5E3;
            b = b || c;
            var e = {
                clientName: "AmazonWireless"
            };
            e.verificationSessionID = d;
            return {
                count: function() {
                    return g
                },
                call: function() {
                    g && a.post("/gp/add-to-cart/json", {
                        timeout: h,
                        params: e,
                        success: f,
                        error: c,
                        abort: b
                    })
                },
                addItem: function(a, b, c) {
                    e["ASIN." + g] = a;
                    e["offerListingID." + g] = b;
                    e["quantity." + g] = c || 1;
                    g++
                }
            }
        }
        return {
            createAddToCartRequest: k,
            createSingleFinalCallbackAddToCartRequest: function(a, f) {
                return k(a, f, f, f)
            }
        }
    });
    "use strict";
    n.when("A").register("aloha-buy-now-integration", function(a) {
        var k = a.$,
            d = {};
        n.when("turbo-checkout-buy-now-integration").execute(function(a) {
            d = a
        });
        return {
            isBuyNow: function(a) {
                return 0 === Object.entries(d).length && d.constructor === Object ? "buy-now-button" === a.attr("id") || "addToCart" === a.attr("id") : "function" === typeof d.isBuyNow && d.isBuyNow(a) || "buy-now-button" === a.attr("id")
            },
            checkoutWith: function(a, c) {
                if (0 === Object.entries(d).length &&
                    d.constructor === Object) {
                    var b;
                    for (b = 1; 0 < c.find('input[name\x3d"asin.' + b + '"]').length || 0 < c.find('input[name\x3d"offeringID.' + b + '"]').length;) b++;
                    for (var h = [], g = 0; g < a.length; g++) {
                        var e = a[g];
                        if (e !== x && e.asin && e.offerListingId) {
                            var q = b,
                                e = [k("\x3cinput /\x3e", {
                                    type: "hidden",
                                    name: "asin." + q,
                                    value: e.asin
                                }), k("\x3cinput /\x3e", {
                                    type: "hidden",
                                    name: "offeringID." + q,
                                    value: e.offerListingId
                                }), k("\x3cinput /\x3e", {
                                    type: "hidden",
                                    name: "quantity." + q,
                                    value: e.quantity || 1
                                })];
                            Array.prototype.push.apply(h, e);
                            b++
                        } else logError('Line item inputs are invalid. Expected "asin" and "offerListingId" keys in object. Customer purchase inputs ignored!',
                            e)
                    }
                    a = c.find('input[name\x3d"itemCount"]');
                    1 === a.length ? a.val(b) : c.append(k("\x3cinput /\x3e", {
                        type: "hidden",
                        name: "itemCount",
                        value: b
                    }));
                    c.append.apply(c, h)
                } else return d.checkoutWith(a, c)
            }
        }
    });
    "use strict";
    n.when("A").register("aloha-buy-back-integration", function(a) {
        var k = a.$;
        return {
            isBuyBack: function(a) {
                return "buyBackBuyNow" === a.attr("id")
            },
            checkoutWith: function(a, f) {
                var c;
                for (c = 1; 0 < f.find('input[name\x3d"asin.' + c + '"]').length || 0 < f.find('input[name\x3d"offeringID.' + c + '"]').length;) c++;
                for (var b = [], h = 0; h < a.length; h++) {
                    var g = a[h];
                    if (g !== x && g.asin && g.offerListingId) {
                        var e = c,
                            g = [k("\x3cinput /\x3e", {
                                type: "hidden",
                                name: "asin." + e,
                                value: g.asin
                            }), k("\x3cinput /\x3e", {
                                type: "hidden",
                                name: "offeringID." + e,
                                value: g.offerListingId
                            }), k("\x3cinput /\x3e", {
                                type: "hidden",
                                name: "quantity." + e,
                                value: g.quantity || 1
                            })];
                        Array.prototype.push.apply(b, g);
                        c++
                    } else logError('Line item inputs are invalid. Expected "asin" and "offerListingId" keys in object. Customer purchase inputs ignored!', g)
                }
                a = f.find('input[name\x3d"itemCount"]');
                1 === a.length ? a.val(c) : f.append(k("\x3cinput /\x3e", {
                    type: "hidden",
                    name: "itemCount",
                    value: c
                }));
                f.append.apply(f, b)
            }
        }
    });
    "use strict";
    n.when("A").register("aloha-buybox-form-util", function(a) {
        function k(a) {
            for (var b = 2; 0 < a.find('input[name\x3d"asin.' + b + '"]').length || 0 < a.find('input[name\x3d"offeringID.' + b + '"]').length;) b++;
            return b
        }

        function d(c, b) {
            return [a.$("\x3cinput /\x3e", {
                type: "hidden",
                name: "asin." + b,
                value: c.asin,
                class: "aloha-accessory-form-input"
            }), a.$("\x3cinput /\x3e", {
                type: "hidden",
                name: "offeringID." +
                    b,
                value: c.offerListingId,
                class: "aloha-accessory-form-input"
            }), a.$("\x3cinput /\x3e", {
                type: "hidden",
                name: "quantity." + b,
                value: c.quantity || 1,
                class: "aloha-accessory-form-input"
            })]
        }
        var f = [];
        a.on("aloha:detailPage:reappear", function() {
            f = [];
            a.$(".aloha-accessory-form-input").remove()
        });
        return {
            addItems: function(a, b, h) {
                var g = k(a);
                b.forEach(function(b) {
                    if (b !== x && b.asin && b.offerListingId) {
                        var k = d(b, g);
                        k.forEach(function(b) {
                            a.append(b)
                        });
                        f.push(k);
                        g++;
                        h && (h.logCheckboxSelected(b.index, b.quantity), h.logAddToCartRefTag(b.index))
                    }
                });
                b = a.find('input[name\x3d"itemCount"]');
                0 === b.length ? a.append('\x3cinput type\x3d"hidden" name\x3d"itemCount" value\x3d"' + g + '"\x3e') : b[0].value = g
            }
        }
    })
});