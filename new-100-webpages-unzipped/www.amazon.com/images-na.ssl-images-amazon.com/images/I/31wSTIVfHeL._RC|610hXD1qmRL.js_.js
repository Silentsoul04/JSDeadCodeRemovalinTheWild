(function(k) {
    var l = window.AmazonUIPageJS || window.P,
        q = l._namespace || l.attributeErrors,
        a = q ? q("SharedShoppingCartAsset", "") : l;
    a.guardFatal ? a.guardFatal(k)(a, window) : a.execute(function() {
        k(a, window)
    })
})(function(k, l, q) {
    k.when("CartServerSetting").execute("BatchedActiveCartUpdaterBuilder", function(a) {
        a.features && a.features.enableBatching ? k.when("A", "PageManipulator", "Cart").register("BatchedActiveCartUpdater", function(b, a, c) {
            var e = b.$;
            return {
                update: function(b) {
                    b && b.manipulations ? (e.each(b.manipulations,
                        function(b, e) {
                            a.perform(e)
                        }), c.logUECounter("Cart:Manipulations:Update:Match")) : c.logUECounter("Cart:Manipulations:Update:Mismatch")
                }
            }
        }) : k.declare("BatchedActiveCartUpdater", {})
    });
    "use strict";
    k.when("A").register("BatchedItemUpdateMessageBuilder", function(a) {
        var b = a.$;
        return {
            getItemUpdateMessage: function(a, c) {
                if ("pantry-bulk-save-for-later" === c) return b("#sc-active-cart .sc-pantry-bundle").find(".sc-pantry-bundle-removed-msg").html();
                if ("add-to-cart-success" === c) return b("#sc-bc-item-" + a).find(".sc-bc-item-add-success-msg").html();
                a = b('#sc-active-cart .sc-list-item[data-itemid\x3d"' + a + '"]');
                "active" !== a.data("itemtype") ? c = void 0 : (a = a.find(".sc-list-item-removed-msg"), c = "dibs-remove" === c ? a.html() : a.children('div[data-action\x3d"' + c + '"]"').html());
                return c
            }
        }
    });
    "use strict";
    k.when("A", "BuyBoxWinnersLoader", "ready").execute("buybox-winner-lazy-load", function(a, b) {
        a.on.afterLoad(function(a) {
            b.load()
        })
    });
    "use strict";
    k.when("A", "Cart", "PageManipulator").register("BuyBoxWinnersLoader", function(a, b, f) {
        function c(a) {
            var b = [];
            a.each(function() {
                var d =
                    h(this);
                b.push({
                    itemId: d.data("itemid"),
                    asin: d.data("asin"),
                    oldPrice: d.data("unavailable-price"),
                    oldCurrencyCode: d.data("unavailable-currencycode")
                })
            });
            return b
        }

        function e(a) {
            b.ajax("/cart/buybox-winners/1.0", {
                data: {
                    unavailableOffersPageData: JSON.stringify({
                        itemData: a
                    })
                }
            }).done(function(a) {
                a && a.manipulations && h.each(a.manipulations, function(d, g) {
                    f.perform(g)
                })
            })
        }
        var h = a.$;
        return {
            load: function() {
                var a = h("#sc-saved-cart .sc-list-item[data-unavailable-item]"),
                    a = c(a);
                1 > a.length || e(a)
            }
        }
    });
    "use strict";
    k.register("CartPerfWrapper", function() {
        return {
            aboveTheFoldLoaded: function() {
                CartPerf && CartPerf.aboveTheFoldLoaded()
            },
            functionalLoaded: function() {
                CartPerf && CartPerf.functionalLoaded()
            },
            atfLoadedForAJAXRequest: function() {
                CartPerf && CartPerf.atfLoadedForAJAXRequest()
            },
            fnLoadedForAJAXRequest: function() {
                CartPerf && CartPerf.fnLoadedForAJAXRequest()
            },
            cfLoadedForAJAXRequest: function() {
                CartPerf && CartPerf.cfLoadedForAJAXRequest()
            },
            criticalFeatureLoaded: function() {
                CartPerf && CartPerf.criticalFeatureLoaded()
            },
            x1Loaded: function() {
                CartPerf && CartPerf.x1Loaded()
            },
            getScope: function() {
                CartPerf && CartPerf.getScope()
            },
            pageLoadedForAJAXRequest: function(a) {
                CartPerf && CartPerf.pageLoadedForAJAXRequest(a)
            },
            resetUEForAJAXRequest: function() {
                CartPerf && CartPerf.resetUEForAJAXRequest()
            },
            setIDForAJAXRequest: function(a) {
                CartPerf && CartPerf.setIDForAJAXRequest(a)
            },
            setStartTimeForAJAXRequest: function() {
                CartPerf && CartPerf.setStartTimeForAJAXRequest()
            },
            x1LoadedForAJAXRequest: function() {
                CartPerf && CartPerf.x1LoadedForAJAXRequest()
            },
            x2Loaded: function() {
                CartPerf && CartPerf.x2Loaded()
            },
            x2LoadedForAJAXRequest: function() {
                CartPerf && CartPerf.x2LoadedForAJAXRequest()
            },
            x3Loaded: function() {
                CartPerf && CartPerf.x3Loaded()
            },
            x3LoadedForAJAXRequest: function() {
                CartPerf && CartPerf.x3LoadedForAJAXRequest()
            }
        }
    });
    "use strict";
    k.register("Cart-Updates", function() {
        var a = {
            "\x3c\x3d": function(a, f) {
                return a <= f
            },
            "\x3c": function(a, f) {
                return a < f
            }
        };
        return {
            isItemPositionBeforeCurrentItem: function(b, f, c) {
                c = a[c];
                b = b.toString().split(".");
                f = f.toString().split(".");
                for (var e = 0; e < b.length && e < f.length; e++) {
                    var h = parseInt(b[e], 10),
                        m = parseInt(f[e], 10);
                    if (h !== m) return c(h, m)
                }
                return c(b.length, f.length)
            }
        }
    });
    k.when("A", "jQuery", "Cart", "CartServerSetting").register("CartClipcoupon", function(a, b, f, c) {
        function e(d) {
            var g = d.find(".sc-clipped-msg").closest(".sc-wrapper");
            d = d.find(".sc-action-link").closest(".sc-wrapper");
            g.show();
            d.hide()
        }

        function h(d) {
            var g = d.find(".sc-clipped-msg").closest(".sc-wrapper");
            d = d.find(".sc-action-link").closest(".sc-wrapper");
            g.hide();
            d.show()
        }

        function m(d) {
            var g = b(".sc-clipcoupon[data-promoid\x3d" + d + "]");
            g.each(function() {
                e(b(this))
            });
            "1" == c.features.enabledVPCValidityMessage && b(".sc-clipcoupon-popover-content[data-promoid\x3d" + d + "]").each(function() {
                b(this).find(".sc-coupon-validity-msg").show()
            });
            a.trigger("sc:clipcoupons:clipped", g)
        }

        function p(d) {
            var g = d.attr("data-promoid"),
                a = d.attr("data-source");
            f.makeAjaxCall("/gp/promotions/vpc/ref\x3dox_sc_clip_coupon", [{
                    name: "promoId",
                    value: g
                }, {
                    name: "source",
                    value: a
                }, {
                    name: "returnAsJson",
                    value: 1
                }],
                5E3,
                function(a) {
                    !a.status || "REDEEMED" !== a.status && "SUCCESS" !== a.status ? h(d) : m(g)
                },
                function(g) {
                    h(d)
                })
        }
        b(document).delegate(".sc-clipcoupon .sc-action-link", "click", function(d) {
            d.preventDefault();
            d = b(this).closest(".sc-clipcoupon");
            p(d)
        });
        return {
            markCouponToClipped: e,
            markCouponToUnclipped: h,
            markCouponsToClipped: m,
            redeemCoupon: p
        }
    });
    "use strict";
    k.when("A", "a-popover-manager").execute(function() {
        k.when("A", "a-popover-base").register("sc-click-popover", function(a, b) {
            function f(e, d) {
                var g = b.get(e.$declarativeParent),
                    n = 1;
                "showCloseButton" in d && (n = d.showCloseButton);
                c(g);
                b.show({
                    $trigger: e.$declarativeParent,
                    header: d.header,
                    showCloseButton: n,
                    content: d.content,
                    width: d.width,
                    height: d.height,
                    position: d.position || "triggerVertical",
                    url: d.url,
                    ajaxFailMsg: d.ajaxFailMsg,
                    cache: "false" === d.cache || !1 === d.cache ? !1 : !0,
                    data: d.data,
                    name: d.name,
                    skin: h,
                    update: m,
                    hide: function() {
                        var d = this;
                        d.animating = !0;
                        a.fadeOut(this.$popover, 250);
                        a.delay(function() {
                            d.animating = !1
                        }, 250)
                    }
                })
            }

            function c(a) {
                a && a.destroyTimer && (clearTimeout(a.destroyTimer),
                    a.destroyTimer = null)
            }
            var e = a.$,
                h = function(a, d) {
                    var g = "";
                    d.showCloseButton && (g = '\x3cbutton data-action\x3d"a-popover-close" class\x3d"a-button-close a-declarative sc-close-button"\x3e\x3ci class\x3d"a-icon a-icon-close"\x3e\x3c/i\x3e\x3c/button\x3e');
                    var b = d.header,
                        g = b ? ['\x3cdiv class\x3d"a-popover-header"\x3e', "\x3ch4\x3e" + b + "\x3c/h4\x3e", g, "\x3c/div\x3e"].join("\n") : ["\x3cdiv\x3e", g, "\x3c/div\x3e"].join("\n"),
                        b = d.width;
                    d = d.height;
                    return ['\x3cdiv class\x3d"a-popover sc-click-popover"\x3e\n\x3cdiv class\x3d"a-popover-wrapper"',
                        b || d ? ['style\x3d"', d ? "height:" + d + "px;" : "", b ? "width:" + b + "px;" : "", '"'].join(" ") : "", "\x3e", g, '\x3cdiv class\x3d"a-popover-inner"\x3e', a, '\x3c/div\x3e\n\x3cdiv class\x3d"a-arrow-border"\x3e\n\x3cdiv class\x3d"a-arrow"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3c/div\x3e\n\x3c/div\x3e'
                    ].join("\n")
                },
                m = function(a) {
                    "string" === typeof a ? e(".a-popover-inner", this.$popover).html(a) : a && e(".a-popover-inner", this.$popover).html("").append(a)
                };
            a.declarative("sc-click-popover", "click", function(a) {
                f(a, a.data)
            })
        })
    });
    k.when("A",
        "a-popover-data").execute(function() {
        k.when("A", "a-popover").register("sc-click-popover", function(a, b) {
            a.declarative("sc-click-popover", "click", function(a) {
                b.create(a.$declarativeParent, a.data).attrs("activate", "onclick").show()
            })
        })
    });
    "use strict";
    k.when("A", "ready").register("countdown-timer", function(a) {
        function b(d) {
            var a = {},
                b = 0,
                e = 0,
                c = 0;
            0 < d && (c = Math.floor(d / 1E3), e = Math.floor(c / 60), b = Math.floor(e / 60), e %= 60, c %= 60);
            a.hours = b;
            a.minutes = e;
            a.seconds = c;
            return a
        }

        function f(d) {
            return 0 >= d ? "00" : 10 > d ? "0" +
                d.toString() : d.toString()
        }

        function c(d, a) {
            a.hoursBlock.html(f(d.hours));
            a.minutesBlock.html(f(d.minutes));
            a.secondsBlock.html(f(d.seconds))
        }

        function e(d, a) {
            a ? d.removeClass("aok-hidden") : d.addClass("aok-hidden")
        }

        function h(d, g) {
            var n = null,
                h = d.attr("data-remainingTime");
            if (h) var f = (new Date(h)).getTime(),
                n = a.interval(function() {
                    var a = (new Date).getTime(),
                        a = f - a,
                        h = b(a);
                    0 >= a ? (clearInterval(n), e(d, !1)) : (e(d, !0), c(h, g))
                }, 1E3)
        }

        function m() {
            for (var d = document.getElementsByClassName("sc-the-drop-timer-data"),
                    a = document.getElementsByClassName("sc-the-drop-hours"), b = document.getElementsByClassName("sc-the-drop-minutes"), e = document.getElementsByClassName("sc-the-drop-seconds"), c = 0; c < d.length; c++) {
                var f = {};
                f.hoursBlock = k(a[c]);
                f.minutesBlock = k(b[c]);
                f.secondsBlock = k(e[c]);
                h(k(d[c]), f)
            }
        }
        var k = a.$;
        m();
        return {
            getDigits: b,
            formatNumber: f,
            setHtmlFields: c,
            setVisibility: e,
            startTimers: m
        }
    });
    "use strict";
    k.when("A").register("sc-declaratives", function(a) {
        function b(a) {
            if (a.data && a.data.delay) {
                if ("number" !== typeof a.data.delay) throw new TypeError('sc-debounce-submit requires "delay" to be an integer (ex: data-sc-debounce-submit\x3d"{\'delay\':400}").');
                return a.data.delay
            }
            return 600
        }
        a.declarative("sc-stop-event-propagation", "click", function(a) {
            a.$event.stopPropagation()
        });
        var f = !1;
        a.declarative("sc-debounce-submit", "submit", function(c) {
            var e = b(c);
            f ? c.$event.preventDefault() : (f = !0, a.delay(function() {
                f = !1
            }, e))
        });
        return {
            testing: {
                "sc-debounce-submit": {
                    getDelayFromDeclarativeEvent: b,
                    DEBOUNCE_DELAY: 600
                }
            }
        }
    });
    "use strict";
    k.when("A", "jQuery", "a-button", "a-checkbox", "CartServerSetting").register("SharedFreshCart", function(a, b, f, c, e) {
        function h() {
            var a = f("#sc-fresh-buy-box-pmods-button"),
                e = c("#sc-fresh-age-verification-checkbox"),
                d = b("#sc-fresh-age-verification-checkbox");
            e.isChecked() || !d.is(":visible") ? a.enable() : a.disable()
        }
        a.declarative("sc-fresh-age-verification-check-action", "change", function(a) {
            h()
        });
        k.when("ready").execute(function() {
            h()
        });
        a.declarative("sc-fresh-device-deregister", "change", function(c) {
            var h = c.data,
                d = c.$target,
                g = d.prop("checked");
            c.$target.attr("disabled", !0);
            a.post("/alm/addtofreshcart/item/modify", {
                timeout: 5E3,
                success: function(d) {
                    c.$target.attr("disabled", !1)
                },
                error: function(a) {
                    c.$target.attr("disabled", !1);
                    d.prop("checked", !g)
                },
                contentType: "application/json; charset\x3dUTF-8",
                paramsFormat: "json",
                params: b.extend({
                    modifications: [{
                        itemId: h.itemID,
                        operation: "isDeviceDeregistered",
                        value: JSON.stringify({
                            isDeviceDeregistered: g
                        })
                    }]
                }, e.csrf)
            })
        });
        return {
            updateAddToFreshDeliverButtonState: h
        }
    });
    "use strict";
    k.when("A", "GLUXWidget").execute(function(a, b) {
        a.on("packard:glow:destinationChangeAll", function() {
            l.location.reload()
        })
    });
    "use strict";
    k.when("A", "Cart",
        "CartServerSetting").register("CartLists-API", function(a, b, f) {
        var c = b.pick;
        return {
            loadGlance: function(a, c) {
                return b.ajax("/gp/cart/mobile/ajax-glance-view.html/ref\x3d" + c, {
                    data: {
                        registryID: a
                    }
                })
            },
            loadList: function(e, h, f) {
                e = a.extend({
                    listId: h,
                    listType: e,
                    page: 0
                }, c("page", f), c("hasPantryBundleAlready", f));
                f = a.extend({
                    data: e
                }, c("refTag", f), c("timeout", f));
                return b.ajax("/gp/cart/ajax-load-list.html", f)
            },
            updateWishList: function(e, h, k, l) {
                e = a.extend({
                    action: e,
                    regItemID: k,
                    registryID: h,
                    reloadGlance: 1
                }, c("reloadGlance",
                    l), f.csrf);
                l = a.extend({
                    data: e,
                    timeout: b.getAjaxTimeout(void 0)
                }, c("refTag", l));
                return b.ajax("/gp/cart/ajax-wishlist-update.html", l).done(function(d) {
                    a.trigger("sc:cartAction:loadData:nonCF", d)
                })
            }
        }
    });
    "use strict";
    k.when("A").register("PageManipulator", function(a) {
        function b(a) {
            a = f("#" + a);
            if (0 !== a.length) return a
        }
        var f = a.$,
            c = {
                replace: function(a) {
                    var c = b(a.id);
                    c && c.replaceWith(a.content)
                },
                remove: function(a) {
                    (a = b(a.id)) && a.remove()
                },
                insert: function(a) {
                    var c = b(a.id);
                    c && c.after(a.content)
                },
                displayMessage: function(b) {
                    a.trigger("sc:displayMessage",
                        b.itemID, b.messageType)
                }
            };
        return {
            perform: function(a) {
                c[a.type](a)
            }
        }
    });
    "use strict";
    k.when("A", "CartServerSetting").register("Cart", function(a, b) {
        function f(a, g, c, e, f, k, l) {
            return h.ajax({
                type: "POST",
                url: a,
                data: g,
                contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8;",
                dataType: "json",
                timeout: "test" === b.domain ? 0 : c,
                beforeSend: function(a, d) {
                    a.setRequestHeader("X-AUI-View", b.view);
                    k && k(a, d)
                },
                success: function(a, d) {
                    e && e(a)
                },
                error: function(a, d) {
                    f && f(a, d)
                },
                complete: function(a, d) {
                    l && l()
                }
            })
        }

        function c(d,
            g) {
            g = a.extend({
                timeout: 5E3,
                beforeSend: h.noop
            }, g);
            g.refTag && (d += "/ref\x3d" + g.refTag);
            return f(d, g.data, g.timeout, h.noop, h.noop, g.beforeSend)
        }

        function e(a) {
            a = a || l.location.search.replace(/^[?#&]/, "");
            var g = {};
            if ("string" !== typeof a || 0 === a.length) return g;
            var b = /\+/g;
            a = a.split("\x26");
            for (var c = 0; c < a.length; ++c) {
                var e = a[c].replace(b, "%20"),
                    f = e.indexOf("\x3d"),
                    h;
                0 <= f ? (h = e.substr(0, f), e = e.substr(f + 1)) : (h = e, e = "");
                h = decodeURIComponent(h);
                e = decodeURIComponent(e);
                hasOwnProperty.call(g, h) ? Array.isArray(g[h]) ?
                    g[h].push(e) : g[h] = [g[h], e] : g[h] = e
            }
            return g
        }
        var h = a.$,
            k = function(a, g, b) {
                var c = p("/gp/cart/view.html", a, g);
                b && b();
                setTimeout(function() {
                    l.location.assign(c)
                }, 0)
            },
            p = function(a, g, b) {
                a = l.location.protocol + "//" + l.location.host + a;
                g && (a += "/ref\x3d" + g);
                if (b) {
                    a += "?";
                    for (var c in b) b.hasOwnProperty(c) && void 0 != b[c] && (a += c + "\x3d" + b[c] + "\x26");
                    a = a.substr(0, a.length - 1)
                }
                return a
            };
        return {
            ajax: c,
            concurrentPromiseQueue: function(a) {
                function g(a) {
                    var d = h.Deferred();
                    e.push([d, a]);
                    b();
                    return d.promise()
                }

                function b() {
                    if (!(0 >=
                            e.length || 0 >= c)) {
                        c--;
                        var a = e.shift(),
                            d = a[0];
                        (0, a[1])().then(d.resolve, d.reject).always(function() {
                            c++;
                            b()
                        })
                    }
                }
                var c = a,
                    e = [];
                return function(a) {
                    return function() {
                        var d = Array.prototype.slice.call(arguments);
                        return g(function() {
                            return a.apply(null, d)
                        })
                    }
                }
            },
            debounceByPromise: function(a) {
                var g = h.Deferred().resolve().promise();
                return function() {
                    if (g.isResolved() || g.isRejected()) g = a.apply(null, arguments)
                }
            },
            getAjaxTimeout: function(a) {
                return "test" === b.domain ? 0 : a
            },
            getFeatureData: function(a, g) {
                var b = h.Deferred();
                (a = g && g.features && g.features[a]) ? b.resolve(a): b.reject();
                return b.promise()
            },
            getParamValue: function(a, b) {
                if (b && a && !(0 >= b.length))
                    for (var c in b)
                        if (a === b[c].name) return b[c].value
            },
            getValidQuantityNumber: function(a) {
                return a.replace(/^0[2,]$/, "0").replace(/^0+(\d+)/g, "$1").replace(/\D/g, "")
            },
            getUrlParameter: function(a) {
                var b = e();
                return hasOwnProperty.call(b, a) && void 0 != b[a] ? b[a] : ""
            },
            isOnScreen: function(a, b) {
                var c = h(l);
                b = b || 0;
                var e = c.scrollLeft();
                b = c.scrollTop() + b;
                var f;
                f = e + c.width();
                var c = b + c.height(),
                    k = a.offset();
                k.right = k.left + a.outerWidth();
                k.bottom = k.top + a.outerHeight();
                return f >= k.left && e <= k.right && c >= k.top && b <= k.bottom
            },
            logClientEvent: function(a) {
                return c("/gp/cart/log-client-event.html", {
                    data: {
                        action: a
                    }
                })
            },
            logUECounter: function(a) {
                "undefined" !== typeof l.ue && "undefined" !== typeof l.ue.count && l.ue.count(a, 1)
            },
            makeAjaxCall: f,
            memoize: function() {
                var a = function(b, c) {
                    var e = a.cache;
                    null != e && hasOwnProperty.call(e, b) || (e[b] = c);
                    return e[b]
                };
                a.cache = {};
                return a
            },
            pick: function(a, b) {
                var c = {};
                if ("object" !==
                    typeof b) return c;
                a in b && (c[a] = b[a]);
                return c
            },
            pluck: function(a, b) {
                return h.map(b, function(b) {
                    return b && b[a]
                })
            },
            refreshPage: k,
            reloadOnAjaxFailed: function(a, c, e, f, h) {
                a = c ? "cart-ajax-" + c : 500 === a.status ? "cart-ajax-500" : "cart-ajax-error";
                c = "default";
                b.device && b.device.type && (c = b.device.type);
                k(a, {
                    dt: c,
                    "app-nav-type": e ? "none" : null,
                    "usecase-failure": h ? h : null
                }, f)
            },
            reloadOnCSRFViolation: function(a, c) {
                a = "default";
                b.device && b.device.type && (a = b.device.type);
                k("cart-ajax-csrf", {
                    dt: a,
                    "app-nav-type": c ? "none" : null
                })
            },
            replaceBrowserHistory: function() {
                a.capabilities.history && l.history.replaceState({}, l.document.title, l.location.href)
            },
            setUrlParameter: function(b, c) {
                if (a.capabilities.history) {
                    var f = e();
                    f[b] = c;
                    l.history.replaceState({}, l.document.title, "?" + h.param(f))
                }
            }
        }
    })
});
/* ******** */
(function(k) {
    var n = window.AmazonUIPageJS || window.P,
        E = n._namespace || n.attributeErrors,
        a = E ? E("SharedShoppingCartMobileAsset", "") : n;
    a.guardFatal ? a.guardFatal(k)(a, window) : a.execute(function() {
        k(a, window)
    })
})(function(k, n, E) {
    k.when("A", "CartUpdate").register("CartAddToCart", function(a, b) {
        return function(c, e, d, f) {
            e.data("encoded-offering", d["encoded-offering"]);
            e.data("asin", d.asin);
            e.data("itemId", d["item-id"]);
            var h = ["encoded-offering", "asin", "item-id"],
                m = [{
                    name: "pageAction",
                    value: "AddToCart"
                }, {
                    name: "submit.add-to-cart",
                    value: 1
                }];
            if (void 0 !== d && "object" === typeof d)
                for (var g in d) d.hasOwnProperty(g) && -1 === h.indexOf(g) && m.push({
                    name: g,
                    value: d[g]
                });
            var k = function(b, e) {
                a.trigger("sc:add-to-cart:" + c + ":" + b, e)
            };
            b.takeCartActionForSingleItem(e, "add-to-cart", m, f, function() {
                k("before", e)
            }, function() {
                k("after", e)
            }).done(function() {
                k("done", e)
            }).fail(function(a, b) {
                k("fail", e)
            })
        }
    });
    "use strict";
    k.when("A", "ready").register("addedTimeGroupExpander", function(a) {
        a.on("a:expander:groupExpander:toggle:expand", function(a) {
            a.expander.$expander.find(".sc-added-time-group-carousel").hide()
        });
        a.on("a:expander:groupExpander:toggle:collapse", function(a) {
            a.expander.$expander.find(".sc-added-time-group-carousel").show()
        })
    });
    "use strict";
    k.when("A", "CartUpdate", "an-mini-buy-box-ready").register("CartAndroidAppMiniBuyBox", function(a, b) {
        function c(a) {
            a ? d("#sc-android-pinned-buy-box").removeClass("sc-pinned") : d("#sc-android-pinned-buy-box").addClass("sc-pinned");
            e();
            f()
        }

        function e() {
            var a = d("#sc-android-pinned-buy-box.sc-pinned");
            if (a && d.trim(a.html()).length) {
                if (a = d(".sc-wfm-ingress-wrapper .sc-wfm-ingress").clone()) a.addClass("sc-wfm-ingress-pinned"),
                    d("#sc-android-pinned-buy-box").prepend(a), d(".sc-wfm-ingress-wrapper").addClass("aok-hidden")
            } else d(".sc-wfm-ingress-wrapper") && (d(".sc-wfm-ingress-pinned").remove(), d(".sc-wfm-ingress-wrapper").removeClass("aok-hidden"))
        }
        var d = a.$,
            f = function() {
                var a = d("#sc-android-pinned-buy-box-wrapper"),
                    b = a.find("#sc-android-pinned-buy-box");
                a.height(b.outerHeight())
            };
        d("#content").delegate("#sc-android-pinned-buy-box .sc-ptc-agent", "click", function(a) {
            a = d("#sc-buy-box .sc-ptc-button .a-button-primary");
            if (0 <
                a.find("a").length) {
                a = a.find("a").attr("href");
                if (a.match("addon-confirm")) {
                    var b = document.getElementsByName("isToBeGiftWrapped")[0];
                    b && b.checked && (a += "?isToBeGiftWrapped\x3d1")
                }
                n.location.href = a
            } else a.find("button").click()
        });
        b.registerForAjaxSuccess(function(a) {
            a && a.features && (a = a.features["android-mini-buy-box"]) && (d.each(a, function(a, b) {
                d("#sc-" + a).replaceWith(b)
            }), e())
        });
        b.registerForAjaxComplete(function() {
            f()
        });
        a.on("a:popover:beforeHide:imb_2nd_view", function(a) {
            f()
        });
        d(document).delegate('input[type\x3d"text"], input[type\x3d"tel"]',
            "focusin focusout",
            function(a) {
                c("focusin" === a.type)
            });
        c()
    });
    "use strict";
    k.when("A", "mash").execute("app-navigate", function(a, b) {
        a.declarative("app-navigate-ingress", "click", function(a) {
            (a = a.data && a.data.url) && b.navigate({
                url: a
            })
        })
    });
    "use strict";
    k.when("A", "CartServerSetting", "mash").execute("NavBarBottomSheetController", function(a, b, c) {
        b.features.collapseMobileAppNavBarWithBottomSheet && (a.on("a:sheet:beforeShow", function() {
            c.dispatchEvent({
                type: "appOverlays.Hide"
            })
        }), a.on("a:sheet:afterHide", function() {
            c.dispatchEvent({
                type: "appOverlays.Show"
            })
        }))
    });
    "use strict";
    k.when("A", "CartServerSetting", "jQuery").register("CartAuthPortal", function(a, b, c) {
        c(document).delegate("#sc-buy-box form", "submit", function(a) {
            var b = c("#sc-authportal-migration").data("signinurl");
            b && (a.preventDefault(), n.location.href = b)
        })
    });
    "use strict";
    k.when("A", "a-sheet", "Cart", "CartBottomSheetBackgroundScroller").execute("BatchDestination", function(a, b, c, e) {
        function d(a) {
            var e = b.get("glux_bottom_sheet");
            e ? a = e : (g("body").append('\x3cdiv id\x3d"sc-glow-bottom-sheet"\x3e\x3c/div\x3e'),
                a = b.create({
                    name: "glux_bottom_sheet",
                    preloadDomId: "sc-glow-bottom-sheet",
                    sheetType: "web",
                    closeType: "message",
                    closeMessage: a
                }));
            a.show()
        }

        function f(a) {
            c.logUECounter("Cart:LocationWidget:" + a)
        }

        function h(a) {
            "function" === typeof uet && uet(a, "Cart:LocationWidget", {
                wb: 1
            })
        }

        function m() {
            "function" === typeof uex && uex("ld", "Cart:LocationWidget", {
                wb: 1
            })
        }
        var g = a.$,
            k = c.debounceByPromise(function(a) {
                var b = '\x3cdiv id\x3d"sc-glow-data"\x3e' + ('\x3cinput id\x3d"sc-batch-destination-update-items-list" type\x3d"hidden" value\x3d"' +
                    a.data.batchItemIDs + '"\x3e') + "\x3c/div\x3e";
                h("bb");
                d(a && a.data && a.data.closeMessage);
                return g.ajax({
                    url: "/gp/glow/get-cart-address-selections.html",
                    data: {
                        selectedLocationType: "ADDRESS_ID",
                        deviceType: "mobile",
                        selectedLocationValue: a.data.batchAddressID
                    }
                }).done(function(a) {
                    a ? a = a.concat(b) : (f("GlowWidgetEmptyError"), a = g("#sc-glow-ajax-error").html());
                    g("#sc-glow-bottom-sheet").html(a);
                    h("cf")
                }).fail(function() {
                    f("GlowWidgetLoadError");
                    var a = g("#sc-glow-ajax-error").html();
                    g("#sc-glow-bottom-sheet").html(a)
                }).then(m)
            });
        a.declarative("sc-batch-edit-destination", "click", function(a) {
            f("BatchEditDestination:" + a.data.locationType);
            k(a)
        });
        a.on("a:sheet:beforeShow:glux_bottom_sheet", function(a) {
            e.disablePageScrolling()
        });
        a.on("a:sheet:afterShow:glux_bottom_sheet", function(a) {
            0 === g("#sc-glow-bottom-sheet").html().length && (a = g("#sc-glow-bottom-sheet-spinner").html(), g("#sc-glow-bottom-sheet").html(a))
        });
        a.on("a:sheet:afterHide:glux_bottom_sheet", function(a) {
            f("GlowWidgetClosed");
            e.enablePageScrolling();
            g("#sc-glow-bottom-sheet").empty()
        })
    });
    "use strict";
    k.when("A", "a-sheet").execute("batch-interstitial", function(a, b) {
        var c = a.$;
        a.declarative("batch-interstitial", "click", function(a) {
            a = c.extend({
                inlineContent: c("#" + a.data.name).html()
            }, a.data);
            b.create(a).show()
        })
    });
    "use strict";
    k.when("A", "CartServerSetting").register("BatchPTC", function(a, b) {
        function c() {
            return h("#sc-buy-box form").serializeArray().filter(g)
        }

        function e(a, b) {
            0 < b.length && (a += -1 < a.indexOf("?") ? "\x26" : "?", a += h.param(b));
            return a
        }

        function d() {
            a.declarative("batch-ptc", "click",
                function(a) {
                    var b = c();
                    a = e(a.data.url, b);
                    n.location.href = a
                });
            a.declarative("continue-shopping", "click", function(a) {
                n.location.href = a.data.url
            })
        }

        function f() {
            k.when("mash", "CartUpdate").execute(function(b, d) {
                a.declarative("batch-ptc", "click", function(f) {
                    var h = c(),
                        g = e(f.data.url, h);
                    f = a.extend({}, h.reduce(t, {}), {
                        cartItemIds: f.data.preCheckoutParameters.cartItemIds
                    }, {
                        hasPrimeGift: f.data.preCheckoutParameters.hasPrimeGift
                    });
                    h = f.isToBeGiftWrapped || 0;
                    g.match("addon-confirm") || g.match("addon-reminder") ? b.navigate({
                            url: g
                        }) :
                        d.prepareForAppCheckout(h, f).done(function() {
                            b.navigate({
                                url: g
                            })
                        })
                });
                a.declarative("continue-shopping", "click", function(a) {
                    b.navigate({
                        url: a.data.url
                    })
                })
            })
        }
        if (b.features.enableBatching) {
            var h = a.$,
                m = ["hasPrimeGift", "hasKindleUnlimitedGift", "cartInitiateId"],
                g = function(a) {
                    return -1 === m.indexOf(a.name)
                },
                t = function(b, e) {
                    var d = {};
                    d[e.name] = e.value;
                    return a.extend({}, b, d)
                };
            b.device.isApp ? f() : d()
        }
    });
    "use strict";
    k.when("A", "a-sheet", "Cart", "CartUpdate", "CartServerSetting", "CartPageSpinner", "CartBottomSheetBackgroundScroller",
        "ready").register("BatchRec", function(a, b, c, e, d, f, h) {
        function m(b) {
            if (!0 === l(b).data("iscontentloaded")) r("AlreadyLoaded");
            else {
                var e = l(b).data("sourcedata");
                e ? (e = l.extend({
                    sourceDataJson: JSON.stringify(e)
                }, d.csrf), c.ajax("/gp/cart/ajax-load-batch-rec.html", {
                    data: e
                }).done(function(e) {
                    e.csrfViolation ? r("CsrfViolation") : ("true" === e.hasContent ? (l(b).find(".sc-batch-rec-bs-content").replaceWith(e.content), l(b).data("iscontentloaded", !0), r("SuccessfullyLoaded")) : r("NoRecsContentReturned"), a.trigger("sc:batch_rec:after_load_done",
                        e))
                }).fail(function(b, e) {
                    r("LoadingAjaxFailed");
                    a.trigger("sc:batch_rec:after_load_fail", b)
                })) : r("SourceDataEmpty")
            }
        }

        function g() {
            l(".sc-batch-rec-widget").each(function() {
                m(l(this))
            })
        }

        function t(a) {
            d.device.isApp ? k.when("mash").execute(function(b) {
                b.navigate({
                    url: a
                })
            }) : n.location.href = a
        }

        function p(a, b) {
            r("AddToCartAction");
            var d = "ox_sc_batch_rec_atc_" + a.data("item-count"),
                c = [{
                    name: "pageAction",
                    value: "AddToCart"
                }, {
                    name: "submit.add-to-cart",
                    value: 1
                }];
            if (void 0 !== b && "object" === typeof b)
                for (var g in b) b.hasOwnProperty(g) &&
                    c.push({
                        name: g,
                        value: b[g]
                    });
            h.enablePageScrolling();
            f.show();
            e.takeCartActionForSingleItem(a, "add-to-cart", c, d).done(function() {
                a.find(".sc-batch-rec-add-to-cart-button").addClass("aok-hidden");
                a.find(".sc-batch-rec-added-to-cart-message").removeClass("aok-hidden").fadeIn();
                r("AddToCartSuccess")
            }).fail(function(a, b) {
                r("AddToCartFailed")
            }).always(function() {
                f.close();
                h.disablePageScrolling()
            })
        }

        function v() {
            l(".a-sheet-web.aok-hidden").each(function() {
                0 < l(this).find(".sc-batch-rec-bs-container").length &&
                    l(this).remove()
            })
        }

        function x(a) {
            a.each(function() {
                var a = 0,
                    b = l(this).find(".sc-br-item .sc-batch-rec-add-to-cart");
                b.each(function() {
                    a = Math.max(a, l(this).offset().top)
                });
                b.each(function() {
                    var b = a - l(this).offset().top;
                    0 < b && l(this).css("padding-top", b + "px")
                })
            })
        }

        function q(e, d) {
            a.off("a:sheet:beforeShow:" + e);
            a.off("a:sheet:afterHide:" + e);
            v();
            var c = l(d).find(".sc-batch-rec-bs-scroll-content").first().height() + 30;
            d = b.create({
                name: e,
                inlineContent: l(d).html(),
                closeType: "icon",
                sheetType: "web",
                height: c
            });
            a.on("a:sheet:beforeShow:" + e, function(a) {
                h.disablePageScrolling();
                a.sheet && a.sheet.$container && x(a.sheet.$container.find(".sc-batch-recommendations"))
            });
            a.on("a:sheet:afterHide:" + e, function(a) {
                h.enablePageScrolling();
                u = void 0;
                r("BottomSheetClosed")
            });
            u = e;
            d.show()
        }

        function r(a) {
            c.logUECounter("recommendationWidget:" + a)
        }
        var l = a.$,
            u = "";
        l("#a-page");
        l("body");
        a.declarative("sc-batch-rec-add-to-cart", "click", function(a) {
            var b = a.$target.closest(".sc-batch-rec-add-to-cart");
            b && p(b, a.data)
        });
        a.declarative("sc-batch-launch-rec-widget",
            "click",
            function(a) {
                var b = a.data;
                a = b.widgetId;
                var e = b.fallbackUrl,
                    b = b.source;
                r("LaunchOperationTriggered:" + b);
                var d = l("#" + a);
                d && l(d).data("iscontentloaded") ? (q(a, d), r("Launched:" + b)) : (r("LaunchFailed:" + b), e && "#" !== e && (t(e), r("FallBackUrl:" + b)))
            });
        a.on("sc:ajaxupdate:succeed", function(a) {
            g()
        });
        a.on("sc:c2_content_slot:content_slot_update", function() {
            var a = l("#rcx-sc-content-slot-container div.sc-batch-rec-bs-header"),
                a = 0 < a.length ? a.html() : "";
            l("div.sc-batch-rec-bs-container div.sc-batch-rec-bs-header").html(a);
            a || (a = b.get(u)) && a.hide()
        });
        a.on.orientationchange(function() {
            if (void 0 !== u) {
                var e = b.get(u);
                e && a.delay(function() {
                    e.hide()
                }, 100)
            }
        });
        return {
            loadRecommendationWidgets: g
        }
    });
    k.when("BatchRec", "cf").execute("batch-rec-loading", function(a) {
        a.loadRecommendationWidgets()
    });
    "use strict";
    k.when("A", "a-sheet", "Cart", "CartUpdate", "CartPageSpinner", "CartServerSetting").register("GLUXExternalConfig", function(a, b, c, e, d, f) {
        if (f.features.enableBatching) {
            var h = a.$;
            return {
                updateDestinationHandler: function(a) {
                    a = [{
                        name: "submit.update-destination",
                        value: 1
                    }, {
                        name: "pageAction",
                        value: "update-destination"
                    }, {
                        name: "updateDestinationItemIDs",
                        value: h("#sc-batch-destination-update-items-list").val()
                    }, {
                        name: "newAddressId",
                        value: a
                    }];
                    e.takeBlockingCartUpdateAction(a, function() {
                        b.get("glux_bottom_sheet").hide();
                        d.show()
                    }, function() {
                        c.logUECounter("Cart:LocationWidget:UpdateDestination");
                        d.close()
                    }, "ox_sc_update_destination")
                }
            }
        }
    });
    "use strict";
    k.when("A", "Cart", "CartAddToCart").register("BenefitConcierge-AddToCartButton", function(a, b, c) {
        a.declarative("sc-add-to-cart-action",
            "click",
            function(a) {
                var b = a.data;
                c("benefit-concierge", a.$currentTarget, b, b.reftag)
            });
        a.on("sc:add-to-cart:benefit-concierge:before", function() {
            b.logUECounter("benefit-concierge:AddToCartAction")
        });
        a.on("sc:add-to-cart:benefit-concierge:done", function(a) {
            a.find(".sc-atc-add-to-cart-button").addClass("aok-hidden");
            a.find(".sc-atc-added-to-cart-text").removeClass("aok-hidden");
            b.logUECounter("benefit-concierge:AddToCartSuccessed")
        });
        a.on("sc:add-to-cart:benefit-concierge:fail", function() {
            b.logUECounter("benefit-concierge:AddToCartFailed")
        })
    });
    "use strict";
    k.when("A", "Cart").register("BenefitConcierge-Header", function(a, b) {
        var c = a.$;
        a.declarative("sc-bc-header-action", "click", function() {
            var a = c("#sc-bc-carousel-container .sc-bc-tile-item").first().position().left,
                d = c("#sc-bc-carousel-container .a-carousel-viewport"),
                f = d.scrollLeft();
            d.scrollLeft(f + a - 10);
            b.logUECounter("benefit-concierge:HeaderClicked")
        })
    });
    "use strict";
    k.when("A", "Cart", "CartUpdate", "PageManipulator").register("BenefitConcierge-Content", function(a, b, c, e) {
        var d = a.$;
        c.registerForAjaxSuccess(function(a) {
            a.features &&
                a.features["content-slot"] && (d.each(a.features["content-slot"].manipulations, function(a, b) {
                    e.perform(b)
                }), a = a.features["content-slot"].featurehtml, void 0 === a && (a = ""), d("#rcx-sc-benefit-concierge-container").replaceWith(a), b.logUECounter("benefit-concierge:refreshed"))
        })
    });
    "use strict";
    k.when("A", "CartServerSetting", "cf").execute("BenefitPriceSavingsController", function(a, b) {
        b.benefitPriceModalSignupScript && k.load.js(b.benefitPriceModalSignupScript);
        a.on("wlp-widget-ready", function() {
            a.$(".prime-signup-ingress").attr("href",
                "#prime-modal");
            a.$(".prime-signup-ingress").click(function(a) {
                a.preventDefault()
            })
        })
    });
    "use strict";
    k.when("A", "ready").register("CartBottomSheetBackgroundScroller", function(a) {
        a = a.$;
        var b = a("#a-page"),
            c = a("body");
        return {
            disablePageScrolling: function() {
                var a = c.scrollTop();
                b.css({
                    position: "fixed",
                    top: "-" + a + "px"
                })
            },
            enablePageScrolling: function() {
                var a = Math.abs(b.position().top);
                b.css({
                    position: "",
                    top: ""
                });
                c.scrollTop(a)
            }
        }
    });
    "use strict";
    k.when("Cart").execute("MobileCartBrowserHistory", function(a) {
        a.replaceBrowserHistory()
    });
    "use strict";
    k.when("A", "mash", "ready").register("mobile-cart-item-quantity", function(a, b) {
        (a = a.state("mobile-cart-page-state")) && void 0 !== a.cartItemQuantity && b.cart && b.cart.didUpdate && b.cart.didUpdate({
            newCartQuantity: a.cartItemQuantity
        })
    });
    "use strict";
    k.when("A", "CartUpdate").execute("CartUpdate-AddBestOffer", function(a, b) {
        var c = a.$;
        c("#content").delegate(".sc-list-item .sc-action-add-best-offer input[type\x3dsubmit]", "click", function(a) {
            a.preventDefault();
            a = b.getItem(c(this));
            var d = "ox_sc_abotc_" +
                a.data("item-count"),
                f = [{
                    name: "submit.add-best-offer-to-cart." + a.data("itemid"),
                    value: 1
                }, {
                    name: "pageAction",
                    value: "add-best-offer-to-cart"
                }, {
                    name: "offeringID." + a.data("itemid"),
                    value: a.data("best-offer-id")
                }, {
                    name: "quantity." + a.data("itemid"),
                    value: a.data("quantity")
                }];
            b.takeCartActionForSingleItem(a, "add-best-offer-to-cart", f, d)
        })
    });
    "use strict";
    k.when("A", "jQuery", "CartUpdate").register("CartUpdate-Handler-AddonReminder", function(a, b, c) {
        return {
            toggleAddonItemIncludeInNextQualifyingOrder: function(a,
                b, f) {
                b = [{
                    name: "itemIsIncludedInNextQualifyingOrder." + a.data("itemid"),
                    value: b ? 1 : 0
                }, {
                    name: "submit.addon-reminder." + a.data("itemid"),
                    value: 1
                }, {
                    name: "pageAction",
                    value: "addon-reminder"
                }];
                c.takeCartActionForSingleItem(a, "addon-reminder", b, f)
            }
        }
    });
    k.when("A", "jQuery", "CartServerSetting", "CartUpdate", "CartUpdate-Handler-AddonReminder").register("CartUpdate-AddonReminder", function(a, b, c, e, d) {
        c.features.enableAddOnReminder && b("#content").delegate(".sc-addon-reminder-option input[type\x3dcheckbox]", "change",
            function() {
                var a = b(this),
                    c = e.getItem(a),
                    m = "ox_sc_addonreminder_" + c.data("item-count");
                d.toggleAddonItemIncludeInNextQualifyingOrder(c, a.is(":checked"), m)
            })
    });
    "use strict";
    k.when("A", "Cart", "CartServerSetting").execute("ViewPortCorrector", function(a, b, c) {
        function e(a) {
            return "move-to-cart" === b.getParamValue("pageAction", a)
        }
        if (c.features.enableBatching) {
            var d = a.$,
                f = 0,
                h = 0,
                m = 0;
            a.on("sc:ajaxupdate:start", function(a) {
                e(a) && (a = d("#sc-active-cart"), h = d(n).scrollTop(), f = a.position().top, m = f + a.outerHeight())
            });
            a.on("sc:ajaxupdate:succeed", function(a) {
                e(a) && (a = d("#sc-active-cart"), h > f && (a = a.position().top + a.outerHeight(), a = h + a - m, d(n).scrollTop(a)))
            })
        }
    });
    "use strict";
    k.when("A", "BatchedItemUpdateMessageBuilder").execute("BatchedItemUpdateMessage", function(a, b) {
        function c() {
            var a = e("#sc-batched-item-update-message");
            a.length || (a = e("\x3cdiv\x3e", {
                id: "sc-batched-item-update-message"
            }).appendTo("#a-page"));
            return a
        }
        var e = a.$,
            d, f;
        a.on("sc:displayMessage", function(a, d) {
            f = b.getItemUpdateMessage(a, d)
        });
        a.on("sc:ajaxupdate:complete",
            function() {
                f = null
            });
        a.on("sc:ajaxupdate:succeed", function() {
            f && 0 < f.length && (d && clearTimeout(d), c().html(f).fadeIn(), d = setTimeout(function() {
                e("#sc-batched-item-update-message").fadeOut()
            }, 3200))
        })
    });
    "use strict";
    k.when("A", "Cart", "CartPerfWrapper", "CartServerSetting", "LoadPageData", "CartPageSpinner", "CartUpdate-Load", "QuantityUpdatePopoverController").register("CartUpdate", function(a, b, c, e, d, f, h, m) {
        var g = a.$,
            t = function(a, b, d, c, e, h) {
                d.push({
                    name: "actionItemID",
                    value: a.data("itemid")
                });
                d.push({
                    name: "actionType",
                    value: b
                });
                d.push({
                    name: "asin",
                    value: a.data("asin")
                });
                d.push({
                    name: "encodedOffering",
                    value: a.data("encoded-offering")
                });
                return p(d, function() {
                    m.closeQuantityPopover(a);
                    f.show();
                    e && e()
                }, function() {
                    f.close();
                    h && h()
                }, c)
            },
            p = function(a, d, c, e, f) {
                var h = b.getParamValue("pageAction", a);
                if (C.tryAbort(h)) return v(a, function(a) {
                    C.setAction(h, a, f);
                    d && d()
                }, function() {
                    C.setAjaxRequest(null);
                    c && c()
                }, e)
            },
            v = function(f, p, m, k) {
                var A;
                e.features.wrapCartPerf ? (c.resetUEForAJAXRequest(), A = c.getScope()) : (CartPerf.resetUEForAJAXRequest(),
                    A = CartPerf.getScope());
                w();
                h.callQ("beforeSend");
                a.trigger("sc:ajaxupdate:start", f);
                return b.makeAjaxCall("/gp/cart/ajax-update.html" + (k ? "/ref\x3d" + k : ""), g.param(g.merge(f, q())), b.getAjaxTimeout(1E4), function(g) {
                    if (g.csrfViolation) b.reloadOnCSRFViolation(g, e.device.isApp);
                    else {
                        var p;
                        if (p = g.features) p = (p = g.features["active-cart"]) ? (e.features.enableBatching ? !0 : !1) !== (p.manipulations ? !0 : !1) : !1;
                        p ? (b.logUECounter("cart-packard-activeCartUpdateMismatch"), b.refreshPage("ox_sc_cart_upd_msm")) : (e.features.wrapCartPerf ?
                            (c.setStartTimeForAJAXRequest(), c.setIDForAJAXRequest(g.requestid)) : (CartPerf.setStartTimeForAJAXRequest(), CartPerf.setIDForAJAXRequest(g.requestid)), d.loadCriticalPageData(g, f), h.callQ("success-critical", g), e.features.wrapCartPerf ? (c.atfLoadedForAJAXRequest(), c.fnLoadedForAJAXRequest(), c.cfLoadedForAJAXRequest()) : (CartPerf.atfLoadedForAJAXRequest(), CartPerf.fnLoadedForAJAXRequest(), CartPerf.cfLoadedForAJAXRequest()), d.loadNonCriticalPageData(g, f), h.callQ("success", g), e.features.wrapCartPerf ? c.pageLoadedForAJAXRequest(A) :
                            CartPerf.pageLoadedForAJAXRequest(A), a.trigger("sc:ajaxupdate:succeed", f))
                    }
                }, function(a, d) {
                    var c = b.getParamValue("pageAction", f);
                    "load-infinite-sfl" !== c && b.reloadOnAjaxFailed(a, d, e.device.isApp);
                    h.callQ("error", {
                        pageAction: c,
                        status: d
                    })
                }, p, function() {
                    B();
                    h.callQ("complete");
                    m && m();
                    a.trigger("sc:ajaxupdate:complete")
                })
            },
            x = function(c, h, p, k, A, H) {
                p.push({
                    name: "actionItemID",
                    value: c.data("itemid")
                });
                p.push({
                    name: "actionType",
                    value: h
                });
                g("#sc-fresh-cart .sc-list-item[data-removed!\x3d'true']").each(function() {
                    var a =
                        g(this);
                    p.push({
                        name: "activeItems",
                        value: l(a)
                    })
                });
                w();
                m.closeQuantityPopover(c);
                f.show();
                a.trigger("sc:ajaxupdate:start");
                return b.makeAjaxCall("/gp/cart/mobile/ajax-fresh-update.html" + (k ? "/ref\x3d" + k : ""), p, b.getAjaxTimeout(1E4), function(b) {
                    d.loadFreshPageData(b, p);
                    a.trigger("sc:ajaxupdate:succeed")
                }, function(a, d) {
                    b.reloadOnAjaxFailed(a, d, e.device.isApp)
                }, A, function() {
                    H && H();
                    B();
                    f.close()
                })
            },
            q = function() {
                var d = [{
                    name: "displayedSavedItemNum",
                    value: g('#sc-saved-cart .sc-list-item[data-removed!\x3dtrue][data-itemtype\x3d"saved"]').length
                }];
                g("#sc-active-cart .sc-list-item[data-removed!\x3d'true']").each(function() {
                    var a = g(this);
                    e.features && "1" === e.features.enablePrimePantry ? a.attr("data-itemcategory") && "pantrybundle" === a.attr("data-itemcategory") ? d.push({
                        name: "activePantryBundle",
                        value: y(a)
                    }) : a.attr("data-itemcategory") && "pantry" === a.attr("data-itemcategory") ? d.push({
                        name: "activePantryItems",
                        value: l(a)
                    }) : d.push({
                        name: "activeItems",
                        value: l(a)
                    }) : d.push({
                        name: "activeItems",
                        value: l(a)
                    })
                });
                g("#sc-saved-cart .sc-list-item[data-removed!\x3d'true']").each(function() {
                    var a =
                        g(this);
                    e.features && "1" === e.features.enablePrimePantry ? a.attr("data-itemcategory") && "pantrybundle" === a.attr("data-itemcategory") ? d.push({
                        name: "savedPantryBundle",
                        value: y(a)
                    }) : a.attr("data-itemcategory") && "pantry" === a.attr("data-itemcategory") ? d.push({
                        name: "savedPantryItems",
                        value: n(a)
                    }) : d.push({
                        name: "savedItems",
                        value: n(a)
                    }) : d.push({
                        name: "savedItems",
                        value: n(a)
                    })
                });
                if (e.features.enableMobileFLC && !e.features.enableBatching) {
                    var c = g("#sc-subtotals-breakdown .sc-subtotal-address input[name\x3daddressID]");
                    0 < c.length && (d.push({
                        name: "flcAddressId",
                        value: c.attr("value")
                    }), d.push({
                        name: "flcAddressZip",
                        value: c.data("addresszip")
                    }))
                }
                e.features.enableBatching && (d.push({
                    name: "enableBatching",
                    value: e.features.enableBatching
                }), d.push({
                    name: "batchTreeState",
                    value: JSON.stringify(r())
                }));
                e.features.enableCollapsedSFL && d.push({
                    name: "enableCollapsedSFL",
                    value: e.features.enableCollapsedSFL
                });
                e.features.enableAddedTimeGroupedSFL && d.push({
                    name: "groupSFLTreeState",
                    value: JSON.stringify({
                        addedWithInAWeek: g("#sc-group-content-AddedWithInWeek").is(":visible"),
                        addedWithInSixMonths: g("#sc-group-content-AddedWithInSixMonths").is(":visible"),
                        olderThanSixMonths: g("#sc-group-content-OlderThanSixMonths").is(":visible")
                    })
                });
                (c = b.getUrlParameter("mockTestCase")) && d.push({
                    name: "mockTestCase",
                    value: c
                });
                a.each(e.csrf, function(a, b) {
                    d.push({
                        name: b,
                        value: a
                    })
                });
                return d
            },
            r = function() {
                var a = g("#sc-batch-tree-state").text();
                return a && 0 < a.length && g.parseJSON(a)
            },
            l = function(a) {
                return [a.data("itemid"), a.data("giftable"), a.data("giftwrapped"), a.data("quantity"), a.data("price"),
                    a.data("promotiontype"), a.data("discountprice"), a.data("installmentsselected"), a.data("installmentsprogram"), a.data("iscodavailable")
                ].join("|")
            },
            n = function(a) {
                return [a.data("itemid"), a.data("price")].join("|")
            },
            y = function(a) {
                return [a.data("totalweight"), a.data("totalitem")].join("|")
            },
            w = function() {
                var a = [];
                a.push(g(".sc-list-item[data-removed\x3d'true']"));
                g.each(a, function(a, b) {
                    b.slideUp(500, function() {
                        b.remove()
                    })
                })
            },
            B = function() {
                function d() {
                    if (c && c.shouldDelay) c.retryLater = !0;
                    else {
                        var a = parseInt(g("#sc-buy-box").data("quantity"),
                            10);
                        isNaN(a) && (a = 0);
                        k.when("mash").execute(function(b) {
                            b.cart.didUpdate({
                                newCartQuantity: a,
                                successCallback: function() {},
                                failCallback: function(a) {}
                            })
                        })
                    }
                }
                if (!e.device.isApp) return function() {};
                var c = function() {
                    if ("iPhoneApp" === e.device.type) {
                        var c = {
                            shouldDelay: !1,
                            retryLater: !1
                        };
                        a.on("a:popover:beforeShow:imb_2nd_view", function(a) {
                            b.logUECounter("Cart:IMB:SecondaryView:Open");
                            c.shouldDelay = !0
                        });
                        a.on("a:popover:afterHide:imb_2nd_view", function(a) {
                            b.logUECounter("Cart:IMB:SecondaryView:Close");
                            c.shouldDelay = !1;
                            c.retryLater && (c.retryLater = !1, d())
                        });
                        return c
                    }
                }();
                return d
            }();
        B();
        var C = function() {
            var a = null,
                b = null,
                d = !1,
                c = !1;
            return {
                setAction: function(e, f, h) {
                    a = e;
                    b = f;
                    d = h;
                    c = !1
                },
                tryAbort: function(e) {
                    return null === b || c ? !0 : d && a !== e ? (b.abort(), c = !0) : !1
                },
                isAborted: function() {
                    return c
                },
                setAjaxRequest: function(a) {
                    b = a
                },
                getName: function() {
                    return a
                }
            }
        }();
        return {
            registerForAjaxSuccessCritical: function(a) {
                h.addToQ("success-critical", a)
            },
            registerForAjaxSuccess: function(a) {
                h.addToQ("success", a)
            },
            registerForAjaxError: function(a) {
                h.addToQ("error",
                    a)
            },
            registerForAjaxBeforeSend: function(a) {
                h.addToQ("beforeSend", a)
            },
            registerForAjaxComplete: function(a) {
                h.addToQ("complete", a)
            },
            getItem: function(a) {
                return a.closest(".sc-list-item")
            },
            prepareForAppCheckout: function(d, c) {
                d = {
                    data: a.extend({
                        isToBeGiftWrapped: d,
                        "submit.before-checkout": 1
                    }, b.pick("isToBeGiftWrappedBefore", c), b.pick("hasPrimeGift", c), b.pick("cartItemIds", c)),
                    timeout: 15E3
                };
                f.show();
                return b.ajax("/gp/cart/ajax-update.html", d).done(f.close).fail(function(a, d) {
                    b.reloadOnAjaxFailed(a, d, e.device.isApp)
                })
            },
            takeBlockingCartUpdateAction: p,
            takeCartUpdateAction: v,
            takeCartActionForSingleItem: t,
            takeFreshCartActionForSingleItem: x,
            updateSNS: function(b, d, c) {
                d = [{
                    name: "submit.sns-change." + b.data("itemid"),
                    value: d
                }, {
                    name: "pageAction",
                    value: "sns-change"
                }];
                return t(b, "sns-change", d, c, void 0, function() {
                    a.trigger("sc:ajaxupdate:cf")
                })
            },
            modifySnS: function(b, d, c) {
                d = [{
                    name: "submit.modify-sns." + b.data("itemid"),
                    value: d
                }, {
                    name: "pageAction",
                    value: "sns-modify"
                }];
                return t(b, "sns-modify", d, c, void 0, function() {
                    a.trigger("sc:ajaxupdate:cf")
                })
            },
            removeItem: function(a, b) {
                var d = [{
                    name: "submit.delete." + a.data("itemid"),
                    value: 1
                }, {
                    name: "pageAction",
                    value: "delete-" + a.data("itemtype")
                }];
                e.features.enabledPseudoPrime && d.push({
                    name: "isPrimeAsin",
                    value: a.data("isprimeasin")
                });
                a.data("related-item-ids") && d.push({
                    name: "relatedItems." + a.data("itemid"),
                    value: a.data("related-item-ids")
                });
                return t(a, "delete", d, b)
            },
            removeFreshItem: function(a, b, d, c) {
                var e = [{
                    name: "submit.fresh-delete." + a.data("itemid"),
                    value: 1
                }, {
                    name: "pageAction",
                    value: "fresh-delete-" + a.data("itemtype")
                }];
                return x(a, "delete", e, b, d, c)
            },
            saveItemForLater: function(a, b) {
                var d = [{
                    name: "pageAction",
                    value: "save-for-later"
                }, {
                    name: "submit.save-for-later." + a.data("itemid"),
                    value: 1
                }];
                e.features.enabledPseudoPrime && d.push({
                    name: "isPrimeAsin",
                    value: a.data("isprimeasin")
                });
                return t(a, "save-for-later", d, b)
            },
            updateItemSelectionForCheckout: function(a, b, d) {
                d = [{
                    name: "pageAction",
                    value: "update-item-selection-for-checkout"
                }, {
                    name: "submit.update-item-selection-for-checkout." + a.data("itemid"),
                    value: 1
                }, {
                    name: "isSelectedForCheckout." +
                        a.data("itemid"),
                    value: d
                }];
                return t(a, "update-item-selection-for-checkout", d, b)
            }
        }
    });
    k.when("A", "jQuery").register("CartUpdate-Load", function(a, b) {
        var c = {
            "success-critical": [],
            success: [],
            error: [],
            beforeSend: [],
            complete: []
        };
        return {
            addToQ: function(a, b) {
                c[a] && c[a].push(b)
            },
            callQ: function(a, b) {
                if (c[a]) {
                    a = c[a];
                    for (var f in a)
                        if (a.hasOwnProperty(f)) a[f](b)
                }
            }
        }
    });
    "use strict";
    k.when("A", "CartUpdate").register("CartUpdate-Remove", function(a, b) {
        var c = a.$,
            e = function(a) {
                var c = n.ue;
                c && c.count && c.count("delete:JavaCart",
                    1);
                var c = "ox_sc_",
                    c = "fresh" === a.data("itemcategory") ? c + "fresh_" : c + ("active" === a.data("itemtype") ? "cart_" : "sfl_"),
                    e;
                e = a.data("item-count");
                c = c + "delete_" + e;
                "fresh" === a.data("itemcategory") ? b.removeFreshItem(a, c) : b.removeItem(a, c)
            };
        c("#content").delegate(".sc-list-item .sc-action-delete input[type\x3dsubmit]", "click", function(a) {
            a.preventDefault();
            a = b.getItem(c(this));
            e(a)
        });
        return {
            remove: e
        }
    });
    "use strict";
    k.when("A", "Cart", "CartUpdate", "CartPageSpinner", "CartServerSetting").execute(function(a, b, c, e,
        d) {
        var f = [{
                name: "submit.expand-saved-for-later",
                value: 1
            }, {
                name: "pageAction",
                value: "expand-saved-for-later"
            }],
            h = function() {
                e.show()
            },
            m = function() {
                e.close()
            };
        a.declarative("sc-expand-saved-for-later", "click", function(a) {
            a.$event.preventDefault();
            d.features.enableCollapsedSFL = 0;
            b.logUECounter("Cart:AcceleratedExperience:CollapsedSavedForLater:Expand");
            c.takeBlockingCartUpdateAction(f, h, m, "ox_sc_expand_sfl")
        })
    });
    "use strict";
    k.when("A", "CartUpdate", "CartServerSetting").register("CartInfiniteLoading",
        function(a, b, c) {
            function e() {
                k.bind("scroll.inf", f).bind("touchstart.inf touchend.inf", v)
            }

            function d() {
                k.unbind("scroll.inf touchstart.inf touchend.inf")
            }

            function f() {
                h(0) && m()
            }

            function h(a) {
                if (0 >= g("#sc-saved-cart").find(".sc-pagination .sc-pagination-button.a-hidden").length) return !1;
                var b = 2 * k.height(),
                    b = p.height() - b;
                return p.scrollTop() + k.height() + a >= b
            }

            function m() {
                b.takeBlockingCartUpdateAction([{
                    name: "submit.load-infinite-sfl",
                    value: 1
                }, {
                    name: "pageAction",
                    value: "load-infinite-sfl"
                }], function() {
                    d();
                    g("#sc-saved-cart").find(".sc-pagination .sc-loading").removeClass("a-hidden")
                }, function() {
                    setTimeout(f, 0);
                    setTimeout(e, 100)
                }, "ox_sc_infinite_sfl", !0)
            }
            var g = a.$,
                k = g(n),
                p = g(document);
            if (c.features.enableInfiniteScroll) {
                var v = function(a) {
                    var b, d;
                    return function(a) {
                        if ("touchstart" === a.type) b = Date.now(), d = a.originalEvent.changedTouches[0].clientY;
                        else if ("touchend" === a.type) {
                            var c = Date.now() - b;
                            a = (d - a.originalEvent.changedTouches[0].clientY) / c / .0015;
                            0 < a && h(a) && m()
                        }
                    }
                }();
                b.registerForAjaxError(function(a) {
                    a &&
                        "load-infinite-sfl" === a.pageAction && (g("#sc-saved-cart").find(".sc-pagination .sc-loading").addClass("a-hidden"), "abort" !== a.status && g("#sc-saved-cart").find(".sc-pagination .sc-pagination-button.a-hidden").removeClass("a-hidden").bind("click", function() {
                            g(this).addClass("a-hidden").unbind("click");
                            m()
                        }))
                });
                a.on("a:popover:beforeShow:imb_2nd_view", d);
                a.on("a:popover:afterHide:imb_2nd_view", e);
                e()
            }
        });
    "use strict";
    k.when("A", "jQuery", "Cart", "CartServerSetting", "CartUpdate").register("CartLightningDeal",
        function(a, b, c, e, d) {
            var f = function() {
                    var a = [],
                        b = function(a) {
                            return "string" !== typeof a || "C" !== a.substr(0, 1) && "S" !== a.substr(0, 1) ? a : a.substr(1)
                        };
                    return {
                        runTimer: function(d, c, e) {
                            d = b(d);
                            a[d] || (a[d] = setInterval(c, e), c())
                        },
                        removeTimer: function(d) {
                            d = b(d);
                            a[d] && (clearInterval(a[d]), delete a[d])
                        }
                    }
                }(),
                h = function(a) {
                    return b(".sc-list-item[data-itemid*\x3d" + a.substr(1) + "]").not("[data-removed]")
                },
                m = function() {
                    b(".sc-list-item .sc-ld-timer").each(function(a, c) {
                        a = b(c);
                        var e = d.getItem(a),
                            m = e.data("itemid");
                        if (!a ||
                            !a.attr("pending")) {
                            var k = parseInt(a.attr("mstoexpiry"), 10),
                                q = (new Date).getTime();
                            a = function() {
                                return function() {
                                    var a = h(m).find(".sc-ld-timer"),
                                        b = (new Date).getTime();
                                    k -= b - q;
                                    q = b;
                                    if (0 >= k) f.removeTimer(m), d.takeCartActionForSingleItem(e, "refresh", [{
                                        name: "pageAction",
                                        value: "refresh"
                                    }]);
                                    else {
                                        var b = a.find("#sc-ld-minutes"),
                                            c = a.find("#sc-ld-seconds"),
                                            g = Math.floor(k / 6E4),
                                            w = Math.floor((k - 6E4 * g) / 1E3);
                                        b.html(10 > g ? "0" + g.toString() : g.toString());
                                        c.html(10 > w ? "0" + w.toString() : w.toString());
                                        a.is(":visible") ||
                                            a.show();
                                        a.find(".sc-ld-timer-span").removeClass("a-hidden")
                                    }
                                }
                            }();
                            f.runTimer(m, a, 1E3)
                        }
                    })
                };
            m();
            b(document).ready(function() {
                var a = "";
                b("div.sc-list-item").each(function() {
                    var d = b(this),
                        c = d.find(".sc-ld-timer");
                    c && c.attr("pending") && (a += d.data("itemid") + ":" + d.data("asin") + ";")
                });
                a && setTimeout(function() {
                    c.makeAjaxCall("/gp/cart/ajax-lightning-deal.html", [{
                        name: "itemMarks",
                        value: a
                    }], 1E4, function(a) {
                        for (var b = 0; b < a.length; ++b) {
                            var d = a[b],
                                c = h(d.itemId);
                            (c = c && c.find(".sc-ld-timer")) && c.attr("pending") &&
                                (c.removeAttr("pending"), c.attr("mstoexpiry", d.msToExpiry), c.find(".sc-ld-static").addClass("a-hidden"))
                        }
                        m()
                    })
                }, 1E3 * e.deals.delaySecondsForLightningDealUpdate)
            });
            d.registerForAjaxSuccess(function() {
                m()
            })
        });
    "use strict";
    k.when("A", "Cart", "CartPerfWrapper", "CartServerSetting", "BatchedActiveCartUpdater", "PageManipulator", "QuantityUpdatePopoverController", "Cart-Updates").register("LoadPageData", function(a, b, c, e, d, f, h, m) {
        function g(a, b) {
            a && "1" === a.removePrimeExperience && b()
        }

        function t(b, d) {
            var c = b.find(".sc-list-item-content"),
                e = b.find(".sc-list-item-removed-msg"),
                f = b.find('.sc-list-item-removed-msg div[data-action\x3d"' + d + '"]');
            d = e.outerHeight();
            e.removeClass("a-padding-mini").show();
            d += f.outerHeight();
            e.hide().addClass("a-padding-mini");
            a.animate(b, {
                height: d
            }, 500, "easeInOutQuad", function() {
                c.remove();
                e.show();
                f.show()
            })
        }

        function p(b, d) {
            a.animate(b.find(".sc-list-item-content"), {
                opacity: 0,
                scale: "0.4"
            }, 500, "linear", function() {
                t(b, d)
            })
        }

        function v(a, b) {
            b && b.itemcount && a.attr("data-item-count", b.itemcount);
            b && b.totalweight &&
                a.attr("data-totalweight", b.totalweight);
            b && b.totalitem && a.attr("data-totalitem", b.totalitem)
        }

        function n(a, b, d, c) {
            1 === c ? a.find(".sc-list-body").append(b.html) : a.find(".sc-pantry-bundle-body").append(b.html)
        }
        var q = a.$,
            r, l = q.noop;
        k.when("nav.setCartCount").execute(function(a) {
            l = function(b) {
                b && a(b.cartQty)
            }
        });
        var u = function(a) {
                return a ? a.cartQty : 0
            },
            y = q.noop;
        k.when("nav.removePrimeExperience").execute(function(a) {
            y = function(b) {
                g(b, a)
            }
        });
        var w = q.noop;
        k.when("mash").execute(function(a) {
            w = function(b) {
                g(b,
                    function() {
                        a && a.user && a.user.changedPrimeStatus && "function" === typeof a.user.changedPrimeStatus && a.user.changedPrimeStatus({
                            primeStatus: a.user.PrimeStatus && a.user.PrimeStatus.NONE ? a.user.PrimeStatus.NONE : 1
                        })
                    })
            }
        });
        var B = function(a) {
                if (a) {
                    var b = q("#sc-active-cart");
                    a.refreshfeature ? b.replaceWith(a.featurehtml) : a.manipulations ? q.each(a.manipulations, function(a, b) {
                        f.perform(b)
                    }) : (D(b, a.items, "activeCart", 1), a.listCaption && b.find(".sc-list-caption").replaceWith(a.listCaption), a.pagination && b.find(".sc-pagination").replaceWith(a.pagination),
                        a.divider && b.find(".sc-divider-wrapper").replaceWith(a.divider))
                }
            },
            C = function(a) {
                if (a) {
                    var b = q("#sc-saved-cart");
                    a.refreshfeature ? b.replaceWith(a.featurehtml) : a.manipulations ? q.each(a.manipulations, function(a, b) {
                        f.perform(b)
                    }) : (D(b, a.items, "savedCart", 1), a.listCaption && b.find(".sc-list-caption").replaceWith(a.listCaption), a.pagination && b.find(".sc-pagination").replaceWith(a.pagination))
                }
            },
            D = function(a, b, d, c) {
                if (a && b) {
                    var f = [];
                    q.each(b, function(b, g) {
                        b = g.ispantrybundle ? a.find(".sc-pantry-bundle") : a.find(".sc-list-item[data-itemid\x3d'" +
                            g.id + "']");
                        "remove" === g.operation ? g.ispantrybundle ? (b.attr("data-removed", "true"), b.find(".sc-pantry-bundle-content").remove(), b.find(".sc-pantry-bundle-body-header").remove(), b.find(".sc-pantry-bundle-body").remove(), b.find(".sc-pantry-bundle-removed-msg").show(), b.find(".sc-pantry-bundle-removed-msg div").show()) : F("actionItemID") === g.id ? (g = F("actionType"), e.features.enableDeleteAnimate && "delete" === g || (b.find(".sc-list-item-content").remove(), b.find(".sc-list-item-removed-msg").show()), b.attr("data-removed",
                            "true"), e.features.enableDeleteAnimate && "delete" === g ? p(b, g) : b.find('.sc-list-item-removed-msg div[data-action\x3d"' + g + '"]').show()) : b.remove() : "replace" === g.operation ? g.ispantrybundle ? (v(b, g), b.find(".sc-pantry-bundle-content").replaceWith(g.headerhtml), D(b, g.subItems, d, c + 1)) : (b.replaceWith(g.html), F("actionItemID") === g.id && h.showQuantityPopover(q(".sc-list-item[data-itemid\x3d" + g.id + "]"))) : "insert" === g.operation ? f.push(g) : g.ispantrybundle ? v(b, g) : (b.attr("data-item-count", g.itemcount), b.data("item-count",
                            g.itemcount))
                    });
                    var g;
                    q.each(f, function(b, e) {
                        g = !1;
                        a.find(".sc-list-item[data-removed!\x3d'true']").each(function(a, b) {
                            b = q(b);
                            a = b;
                            var d = m.isItemPositionBeforeCurrentItem(e.itemcount, a.data("item-count"), "\x3c");
                            1 === c ? (d && (d = "normal" === a.data("itemcategory") || "pantrybundle" === a.data("itemcategory")), a = d) : a = d && "pantry" === a.data("itemcategory");
                            if (a) return b.before(e.html), g = !0, !1
                        });
                        g || n(a, e, d, c)
                    })
                }
            },
            G = function(a, b, d) {
                (b = d.features[b]) && (b.refreshfeature ? q(a).replaceWith(b.featurehtml) : b.manipulations &&
                    q.each(b.manipulations, function(a, b) {
                        f.perform(b)
                    }))
            },
            z = function(a, b) {
                G("#sc-" + a, a, b)
            },
            F = function(a) {
                for (var b = 0; b < r.length; b++)
                    if (r[b].name === a) return r[b].value;
                return null
            };
        return {
            loadCriticalPageData: function(a, b) {
                r = b;
                a.features && (a.features["fresh/collapsed-view"] ? G("#sc-fresh-buy-box", "fresh/collapsed-view", a) : (b = q("#sc-fresh-buy-box"), b.is(":empty") && b.empty()), z("buy-box", a), e.features.wrapCartPerf ? c.x2LoadedForAJAXRequest() : CartPerf.x2LoadedForAJAXRequest(), (b = a.features["active-cart"]) &&
                    e.features.enableBatching ? (d.update(b), b = q('.sc-list-item[data-itemid\x3d"' + b.actionItemID + '"]'), h.showQuantityPopover(b)) : B(b), e.features.wrapCartPerf ? (0 < u(a.features["nav-cart"]) && c.x1LoadedForAJAXRequest(), c.x3LoadedForAJAXRequest()) : (0 < u(a.features["nav-cart"]) && CartPerf.x1LoadedForAJAXRequest(), CartPerf.x3LoadedForAJAXRequest()), z("cart-header", a), z("emi-messages", a), z("trust-message", a), z("affordability-widget", a), z("incentivized-cart-widget", a), l(a.features["nav-cart"]), a = a.features["nav-cart"],
                    e.features.enabledPseudoPrime && (y(a), w(a)))
            },
            loadNonCriticalPageData: function(a, d) {
                r = d;
                a.features && (C(a.features["saved-cart"]), 0 >= u(a.features["nav-cart"]) && (e.features.wrapCartPerf ? c.x1LoadedForAJAXRequest() : CartPerf.x1LoadedForAJAXRequest()), z("continue-shopping", a), z("authportal-migration", a), z("upsell", a), z("pantry-dyf", a), (a = a.features["mock-test-case"]) && b.setUrlParameter("mockTestCase", a))
            },
            loadFreshPageData: function(a, b) {
                r = b;
                if (a.features) {
                    (b = a.features["fresh/full-view/info-container"]) &&
                    b.refreshfeature && q("#sc-fresh-info-container").replaceWith(b.featurehtml);
                    (b = a.features["fresh/full-view/subtotal-container"]) && b.refreshfeature && q("#sc-fresh-subtotal-container").replaceWith(b.featurehtml);
                    if (b = a.features["fresh/full-view/fresh-active-cart"]) {
                        var d = q("#sc-fresh-cart");
                        b.refreshfeature ? d.replaceWith(b.featurehtml) : D(d, b, "freshCart", 1)
                    }
                    l(a.features["nav-cart"])
                }
            }
        }
    });
    "use strict";
    k.when("A", "CartUpdate").execute("CartUpdate-MoveToCart", function(a, b) {
        var c = a.$;
        c("#content").delegate(".sc-list-item .sc-action-move-to-cart input[type\x3dsubmit]",
            "click",
            function(a) {
                a.preventDefault();
                a = b.getItem(c(this));
                var d = "ox_sc_mtc_" + a.data("item-count"),
                    f = [{
                        name: "pageAction",
                        value: "move-to-cart"
                    }, {
                        name: "submit.move-to-cart." + a.data("itemid"),
                        value: 1
                    }],
                    h = n.ue;
                h && h.count && h.count("moveToCart:JavaCart", 1);
                b.takeCartActionForSingleItem(a, "move-to-cart", f, d)
            })
    });
    "use strict";
    k.when("jQuery", "CartUpdate", "CartServerSetting").register("CartPagination", function(a, b, c) {
        c.features.enableInfiniteScroll || a("#content").delegate("#sc-saved-cart .sc-pagination button",
            "click",
            function() {
                b.takeBlockingCartUpdateAction([{
                    name: "submit.load-infinite-sfl",
                    value: 1
                }, {
                    name: "pageAction",
                    value: "load-infinite-sfl"
                }], function() {
                    a("#sc-saved-cart .sc-pagination .sc-pagination-button").hide();
                    a("#sc-saved-cart .sc-pagination .sc-loading").removeClass("a-hidden")
                }, function() {
                    a("#sc-saved-cart .sc-pagination .sc-pagination-button").show();
                    a("#sc-saved-cart .sc-pagination .sc-loading").addClass("a-hidden")
                }, "ox_page_sfl", !0)
            })
    });
    "use strict";
    k.when("jQuery", "CartUpdate").register("CartUpdate-PantryBulkMoveToCart",
        function(a, b) {
            a("#content").delegate(".sc-action-pantry-bulk-move-to-cart input[type\x3dsubmit]", "click", function(c) {
                c.preventDefault();
                c = a("#sc-saved-cart .sc-pantry-bundle");
                b.takeCartActionForPantryBundle(c, [{
                    name: "submit.pantry-bulk-move-to-cart",
                    value: 1
                }, {
                    name: "pageAction",
                    value: "pantry-bulk-move-to-cart"
                }], "ox_sc_pantry_mtc")
            })
        });
    "use strict";
    k.when("jQuery", "CartUpdate").register("CartUpdate-PantryBulkSaveForLater", function(a, b) {
        a("#content").delegate(".sc-action-pantry-bulk-save-for-later input[type\x3dsubmit]",
            "click",
            function(c) {
                c.preventDefault();
                c = a("#sc-active-cart .sc-pantry-bundle");
                b.takeCartActionForPantryBundle(c, [{
                    name: "submit.pantry-bulk-save-for-later",
                    value: 1
                }, {
                    name: "pageAction",
                    value: "pantry-bulk-save-for-later"
                }], "ox_sc_pantry_sfl")
            })
    });
    "use strict";
    k.when("A", "CartServerSetting", "a-sheet").register("CartPantryDYF-BottomSheet", function(a, b, c) {
        if (b && b.features && b.features.enabledPantryDYF) {
            var e = {
                    name: "pantry-dyf-bs",
                    preloadDomId: "pantry-dyf",
                    inlineContent: "content",
                    closeType: "icon",
                    sheetType: "web",
                    height: 326
                },
                d = !1,
                f = function() {
                    var a = c.get("pantry-dyf-bs");
                    return a ? a : null
                },
                h = function() {
                    var a = f();
                    if (d && a) return a;
                    d = !0;
                    return c.create(e)
                };
            return {
                show: function() {
                    var a = h();
                    a && a.show()
                },
                hide: function() {
                    var a = h();
                    a && a.hide()
                },
                reset: function() {
                    if (d) {
                        var a = f();
                        a && a.$container && a.$container.remove()
                    }
                    d = !1
                }
            }
        }
    });
    "use strict";
    k.when("A", "a-carousel-framework", "CartServerSetting", "CartUpdate", "CartPageSpinner", "CartPantryDYF-BottomSheet", "CartUpdate-PantryMetrics").execute(function(a, b, c, e, d, f, h) {
        c && c.features &&
            c.features.enabledPantryDYF && (c = function() {
                f.reset();
                var b = document.getElementById("pantry-dyf");
                null !== b && (h.logMetrics({
                    pageWidget: "DYF",
                    uiAction: "GlanceView"
                }), a.delay(function() {
                    a.get("/gp/pantry/ajax/get-dyf-carousel.html", {
                        cache: !1,
                        success: function(d) {
                            b.innerHTML = d;
                            b.className = a.trim(b.className.replace(/(?:^|\b)a-popover-loading(?:\b|$)/g, ""))
                        }
                    })
                }, 100))
            }, a.on("sc:ajaxupdate:succeed", c), a.declarative("sc-pantry-dyf", "click", function(a) {
                a.$event.preventDefault();
                f.show();
                h.logMetrics({
                    pageWidget: "DYF",
                    uiAction: "OpenBottomSheet"
                })
            }), a.on("a:sheet:afterShow:pantry-dyf-bs", function(a) {
                b.createAll()
            }), a.declarative("pantry-carousel-dyf-atc", "click", function(b) {
                b.$event.preventDefault();
                f.hide();
                d.show();
                h.logMetrics({
                    pageWidget: "DYF",
                    uiAction: "ATC",
                    ASIN: b.data.asin
                }, !0);
                e.takeCartUpdateAction([{
                        name: "submit.add-to-cart",
                        value: 1
                    }, {
                        name: "pageAction",
                        value: "AddToCart"
                    }, {
                        name: "encodedOffering",
                        value: b.data.offeringId
                    }], a.$.noop, function() {
                        d.close();
                        var b = a.$("#sc-pantry-dyf-msg-confirm");
                        0 < b.length && b.hide().removeClass("aok-hidden").slideDown()
                    },
                    "pantry_cart_dyf")
            }), c())
    });
    "use strict";
    k.when("A", "CartServerSetting").register("CartUpdate-PantryMetrics", function(a, b) {
        if (b && b.features && b.features.enabledPantryDYF) return {
            logMetrics: function(c, e) {
                c.pageType = "ShoppingCart" + (b.device.isApp ? "Webview" : "AW");
                c = {
                    pageType: c.pageType,
                    subPageType: c.pageWidget,
                    eventData: JSON.stringify(c)
                };
                a.post(e ? "/gp/pantry/ajax/log-nexus-message-with-cart.html" : "/gp/pantry/ajax/log-nexus-message.html", {
                    params: c
                })
            }
        }
    });
    "use strict";
    k.when("A", "CartServerSetting", "CartUpdate-Remove",
        "CartUpdate-SaveForLater").execute("CartUpdate-Popover", function(a, b, c, e) {
        var d = a.$,
            f = function(a) {
                a = a.attr("name").split(/[. ]+/).pop();
                return d('div[data-itemid\x3d"' + a + '"]')
            };
        b.features.enabledPseudoPrime && (d("body").delegate(".sc-action-delete-popover input[type\x3dsubmit]", "touchend click", function(a) {
            a.preventDefault();
            a = f(d(this));
            c.remove(a)
        }), d("body").delegate(".sc-action-save-for-later-popover input[type\x3dsubmit]", "touchend click", function(a) {
            a.preventDefault();
            a = f(d(this));
            e.saveForLater(a)
        }))
    });
    "use strict";
    k.when("A", "a-modal", "CartUpdate", "CartServerSetting", "Cart").execute("CartUpdate-Quantity", function(a, b, c, e, d) {
        var f = a.$,
            h = /^\d+$/,
            m = /^0{2,}/,
            g = /^0+(\d+)/,
            k = e && e.features && 1 === e.features.enableMinimumOrderQuantity,
            p = e && e.features && 1 === e.features.disableUpdateUserQuantityToMOQ;
        a.on("a:dropdown:selected:quantity", function(a) {
            var b = f(a.selectNode),
                d = b.closest(".sc-action-quantity");
            if (k) {
                var e = b.closest(".sc-list-item").data("minquantity");
                parseInt(a.value, 10) === parseInt(e, 10) + 9 ? u(b, d) :
                    v(c.getItem(b), a.value)
            } else "10" === a.value ? u(b, d) : v(c.getItem(b), a.value)
        });
        a.declarative("sc-update-quantity", "click", function(a) {
            var b = a.data.quantity,
                d = a.data.type;
            v(c.getItem(a.$target), b, d)
        });
        f("#content").delegate(".sc-action-quantity .sc-update-link", "click", function() {
            var a = f(this),
                b = c.getItem(a),
                a = a.closest(".sc-action-quantity").find(".sc-quantity-textfield input").val();
            b.find(".sc-action-quantity input").blur();
            v(b, a)
        });
        f("#content").delegate(".sc-quantity-textfield input", "focus", function() {
            var b =
                f(this);
            1 > a.trim(b.val()).length && y(b);
            setTimeout(function() {
                b.select()
            }, 100);
            x(b)
        });
        f("#content").delegate(".sc-quantity-textfield input", "keydown", function(a) {
            return 48 <= a.which && 57 >= a.which || 96 <= a.which && 105 >= a.which || 8 === a.which || 46 === a.which || 9 === a.which
        });
        f("#content").delegate(".sc-quantity-textfield input", "keyup", function(a) {
            var b = f(this),
                e = b.val();
            e && b.val(d.getValidQuantityNumber(e));
            13 === a.which ? (b.blur(), l(b) && v(c.getItem(b), b.val())) : x(f(this))
        });
        f(document).delegate(".quantity-options a",
            "click",
            function(a) {
                var d = a.target,
                    c = d.dataset.value,
                    d = f(d).parents(".sc-dropdown").data("itemid"),
                    e = f(".sc-list-item[data-itemid\x3d" + d + "]");
                v(e, c);
                b.get(f("#quantity-label-" + d)).hide();
                a.preventDefault()
            });
        var v = function(a, b, d) {
            var f = "ox_sc_";
            d = d ? d + "_" : "";
            e.features.enableFreshCart && "fresh" === a.data("itemcategory") && (f += "fresh_");
            var g;
            g = a.data("item-count");
            d = f + "update_quantity_" + d + g;
            if (0 === parseInt(b, 10))(b = n.ue) && b.count && b.count("quantityDelete:JavaCart", 1), e.features.enableFreshCart && "fresh" ===
                a.data("itemcategory") ? c.removeFreshItem(a, d) : c.removeItem(a, d);
            else if (p || (f = a.data("minquantity"), 0 < parseInt(b, 10) && parseInt(b, 10) < parseInt(f, 10) && (b = f)), e.features.enableFreshCart && "fresh" === a.data("itemcategory")) b = [{
                name: "quantity." + a.data("itemid"),
                value: b
            }, {
                name: "pageAction",
                value: "fresh-quantity"
            }, {
                name: "submit.fresh-quantity." + a.data("itemid"),
                value: 1
            }], c.takeFreshCartActionForSingleItem(a, "fresh-quantity", b, d, void 0, void 0);
            else {
                if (0 >= parseInt(b, 10)) throw Error("SHOULD NOT: quantity LE 0");
                f = [{
                    name: "quantity." + a.data("itemid"),
                    value: b
                }, {
                    name: "pageAction",
                    value: "update-quantity"
                }, {
                    name: "submit.update-quantity." + a.data("itemid"),
                    value: 1
                }];
                a: {
                    if (a.length && (g = a.find(".sc-action-quantity"), g.length)) {
                        g = g.data("old-value");
                        break a
                    }
                    g = 0
                }
                g && (d = d + "|" + g + "|" + b);
                c.takeCartActionForSingleItem(a, "update-quantity", f, d)
            }
        };
        f("#content").delegate(".sc-quantity-textfield input", "input", function() {
            x(f(this))
        });
        f("#content").delegate(".sc-quantity-textfield input", "blur", function() {
            var b = f(this);
            1 > a.trim(b.val()).length ?
                y(b) : !l(b) || "iPhoneApp" !== e.device.type && "iPadAppPopOver" !== e.device.type || v(c.getItem(b), b.val())
        });
        var x = function(b) {
                var d = a.trim(b.val());
                h.test(d) ? (b.val(r(d)), l(b) ? (b = b.closest(".sc-action-quantity"), b.find(".sc-update-link").removeClass("sc-hidden"), b.find(".sc-quantity-update-button").removeClass("a-hidden")) : q(b)) : q(b)
            },
            q = function(a) {
                a = a.closest(".sc-action-quantity");
                a.find(".sc-update-link").addClass("sc-hidden");
                a.find(".sc-quantity-update-button").addClass("a-hidden")
            },
            r = function(a) {
                return m.test(a) ?
                    "0" : g.test(a) ? a.replace(g, "$1") : a
            },
            l = function(a) {
                var b = a.closest(".sc-list-item").data("quantity");
                "number" !== typeof b && (b = parseInt(b, 10));
                a = a.val();
                "number" !== typeof a && (a = parseInt(a, 10));
                return b !== a
            },
            u = function(a, b) {
                a.parent().hide();
                b.find(".sc-quantity-textfield").show();
                b.find(".sc-quantity-textfield input").focus()
            },
            y = function(a) {
                var b = a.closest(".sc-list-item").data("quantity");
                a.val(b)
            }
    });
    "use strict";
    k.when("A", "CartUpdate").register("CartUpdate-SaveForLater", function(a, b) {
        var c = a.$,
            e = function(a) {
                var c =
                    "ox_sc_mtsfl_" + a.data("item-count");
                b.saveItemForLater(a, c)
            };
        c("#content").delegate(".sc-list-item .sc-action-save-for-later input[type\x3dsubmit]", "click", function(a) {
            a.preventDefault();
            a = b.getItem(c(this));
            e(a)
        });
        return {
            saveForLater: e
        }
    });
    "use strict";
    k.when("A", "CartServerSetting", "CartUpdate").execute("CartUpdateItemSelectionForCheckout", function(a, b, c) {
        if (b.features.enablePartialCheckout) {
            var e = a.$;
            e("#content").delegate(".sc-list-item .sc-item-check-checkbox input[type\x3dcheckbox]", "click",
                function(a) {
                    var f = c.getItem(e(this));
                    a = a.target.checked;
                    var h = "ox_sc_update_isSelectedForCheckout_" + f.data("item-count");
                    b.features.enableFreshCart && "fresh" === f.data("itemcategory") || c.updateItemSelectionForCheckout(f, h, a)
                })
        }
    });
    "use strict";
    k.when("CartServerSetting").execute(function(a) {
        a.device.isApp && !a.features.deprecateMashNavigateOnMobileApp ? k.when("mash").register("CartNavigateToCheckout", function(b) {
            return {
                navigate: function(c) {
                    b.navigate({
                        url: c,
                        failCallback: function(b) {
                            n.ueLogError && n.ueLogError(b, {
                                logLevel: "ERROR",
                                attribution: "mash navigate fail"
                            });
                            a.features.enableUnifyPTCExperience && (n.location.href = c)
                        }
                    })
                }
            }
        }) : k.register("CartNavigateToCheckout", function() {
            return {
                navigate: function(a) {
                    n.location.href = a
                }
            }
        })
    });
    "use strict";
    k.when("A", "Cart", "CartNavigateToCheckout", "CartPageSpinner", "CartServerSetting").register("CartCheckout", function(a, b, c, e, d) {
        function f(a, c) {
            b.makeAjaxCall("/gp/cart/ajax-update.html", a, b.getAjaxTimeout(15E3), function() {
                e.close();
                c && c()
            }, function(a, c) {
                b.reloadOnAjaxFailed(a,
                    c, d.device.isApp)
            }, function(a) {
                e.show()
            })
        }

        function h(a, b) {
            b && (a += "?" + m.param(b));
            return a
        }
        var m = a.$;
        m("#content").delegate("#sc-proceed-to-checkout-params-form", "submit", function(a) {
            a.preventDefault();
            a = m(a.target);
            var b = a.attr("action");
            a = a.serializeArray();
            var e = b.match("addon-confirm") || b.match("pantry-interstitial");
            d.features.enableUnifyPTCExperience || !d.device.isApp || e ? (b = h(b, a), c.navigate(b)) : (a.push({
                name: "submit.before-checkout",
                value: 1
            }), f(a, function() {
                c.navigate(b)
            }))
        });
        m("#content").delegate("#sc-buy-box button[name\x3d'proceedToCheckout']",
            "click",
            function(a) {
                var e = m(a.target);
                a.preventDefault();
                a = e.closest("form");
                var p = a.attr("action");
                a = a.serializeArray();
                if (d.features.enableMobileFLC) {
                    var k = {
                            addressID: "1"
                        },
                        n = [];
                    m.each(a, function(a, b) {
                        k[b.name] && n.push(b)
                    });
                    0 < n.length && (p += -1 < p.indexOf("?") ? "\x26" : "?", p += m.param(n));
                    m("#sc-mflc-hasexpandedsubtotals").length ? b.logUECounter("hasExpandedSubtotalsBeforePTC") : b.logUECounter("hasNotExpandedSubtotalsBeforePTC")
                }
                d.features.enableUnifyPTCExperience ? (a.push({
                        name: "proceedToCheckout",
                        value: 1
                    }),
                    p = h(p, a), c.navigate(p)) : (a.push({
                    name: "submit.before-checkout",
                    value: 1
                }), f(a, function() {
                    c.navigate(p)
                }))
            })
    });
    "use strict";
    k.when("A").execute(function(a) {
        var b = a.$;
        a.declarative("vpc_clip_coupon", ["click", "tap"], function(a) {
            function e(a) {
                b(g).hide();
                b(k).removeClass("vpc-invisible");
                b(k).show()
            }
            var d = a.data.promo_id,
                f = a.data.item_asin,
                h = ".vpc-unclipped-coupon-" + d,
                m = ".vpc-clipped-coupon-" + d,
                g = "#vpc-unclipped-coupon-" + f,
                k = "#vpc-clipped-coupon-error-" + f;
            b.ajax({
                type: "GET",
                url: "/gp/promotions/vpc/ref\x3dox_sc_clip_coupon?promoId\x3d" +
                    d + "\x26source\x3d" + a.data.section + "_" + a.data.device + "_" + f + "_" + a.data.button_color,
                success: function(a) {
                    -1 < a.indexOf("SUCCESS") || -1 < a.indexOf("REDEEMED") ? (b(h).hide(), b(m).removeClass("vpc-invisible"), b(m).show()) : e(a)
                },
                error: e
            });
            a.$event.preventDefault();
            a.$event.stopImmediatePropagation();
            a.$event.stopPropagation()
        })
    });
    "use strict";
    k.when("A", "CartUpdate", "CartBottomSheetBackgroundScroller", "CartPageSpinner", "ComparisonWidget", "ready").execute("ComparisonWidget-AddToCart", function(a, b, c, e, d) {
        var f =
            a.$;
        a.declarative("comparison-in-cart-mobile-atc-action", "click", function(a) {
            var m = [{
                name: "submit.add-to-cart",
                value: 1
            }, {
                name: "pageAction",
                value: "AddToCart"
            }, {
                name: "encodedOffering",
                value: a.data.offerListingID
            }];
            a = a.data.atcRefTag;
            c.enablePageScrolling();
            e.show();
            b.takeCartUpdateAction(m, f.noop, f.noop, a).always(function() {
                e.close();
                d.hideComparisonSheet()
            })
        })
    });
    "use strict";
    k.when("A", "CartBottomSheetBackgroundScroller", "a-sheet", "ready").register("ComparisonWidget", function(a, b, c) {
        function e(a) {
            var b =
                c.get("comparison-sheet");
            b || (a = {
                name: "comparison-sheet",
                preloadDomId: a.sheetPreloadDomId,
                height: 450,
                closeType: "message",
                closeMessage: a.sheetCloseMessage.toUpperCase(),
                sheetType: "web"
            }, b = c.create(a));
            return b
        }

        function d(a) {
            var b = c.get("comparison-sheet");
            b.$container.find("#comparison-view-content").html(a);
            a = b.$container.find("#comparison-view-content").outerHeight();
            b.changeHeight({
                height: Math.max(450, a)
            })
        }
        var f = a.$;
        a.declarative("comparison-in-cart-sheet", "click", function(a) {
            var b = e(a.data);
            b.show();
            f.ajax(a.data.compareUrl, {
                method: "GET",
                datatype: "html",
                success: function(a) {
                    d(a)
                },
                error: function() {
                    d(b.$container.find("#comparison-ajax-error-container").html())
                }
            })
        });
        a.on("a:sheet:beforeShow:comparison-sheet", function(a) {
            b.disablePageScrolling()
        });
        a.on("a:sheet:afterShow:comparison-sheet", function(a) {
            a = a.sheet;
            0 === a.$container.find("#comparison-view-content").html().length && (a = a.$container.find("#comparison-bottom-sheet-spinner-container").html(), d(a))
        });
        a.on("a:sheet:afterHide:comparison-sheet",
            function(a) {
                b.enablePageScrolling();
                a.sheet.$container.find("#comparison-view-content").empty()
            });
        return {
            hideComparisonSheet: function() {
                var a = c.get("comparison-sheet");
                a && a.hide()
            }
        }
    });
    "use strict";
    k.when("A", "a-sheet", "Cart", "CartBottomSheetBackgroundScroller", "CartUpdate").register("ContentSlotDetails", function(a, b, c, e, d) {
        function f(b) {
            b.features && b.features["content-slot"] && (b = b.features["content-slot"].featurehtml, void 0 === b && (b = ""), t("#rcx-sc-content-slot-container").replaceWith(b), a.trigger("sc:c2_content_slot:content_slot_update",
                b))
        }

        function h(a) {
            c.logUECounter("Cart:ContentSlot:" + a)
        }

        function k(a) {
            h("BottomSheetLoadStarted");
            t.ajax({
                url: "/gp/cart/ajax-load-content-slot-details.html",
                data: {
                    contentSlotPorletPath: a
                }
            }).done(function(a) {
                g(a);
                h("BottomSheetLoadSuccessful")
            }).fail(function() {
                h("BottomSheetLoadFailed")
            })
        }

        function g(a) {
            t("#sc-content-slot-bottom-sheet").html(a)
        }
        var t = a.$;
        a.declarative("sc-click-content-slot", "click", function(a) {
            h("WidgetClicked");
            (a = b.get("content_slot_bottom_sheet")) ? h("GetExistingBottomSheet"):
                (h("CreateNewBottomSheet"), t("body").append('\x3cdiv id\x3d"sc-content-slot-bottom-sheet"\x3e\x3c/div\x3e'), (a = t("#sc-content-slot-pre-loaded-dom-id").val()) && g(t("#" + a).html()), a = b.create({
                    name: "content_slot_bottom_sheet",
                    preloadDomId: "sc-content-slot-bottom-sheet",
                    sheetType: "web",
                    closeType: "icon"
                }));
            a.show()
        });
        a.on("a:sheet:beforeShow:content_slot_bottom_sheet", function(a) {
            e.disablePageScrolling()
        });
        a.on("a:sheet:afterShow:content_slot_bottom_sheet", function(a) {
            h("BottomSheetShown")
        });
        a.on("a:sheet:afterHide:content_slot_bottom_sheet",
            function(a) {
                h("BottomSheetClosed");
                e.enablePageScrolling()
            });
        a.on.afterLoad(function(a) {
            h("AfterLoadStarted");
            (a = t("#sc-content-slot-on-after-load-portlet-path").val()) && k(a)
        });
        d.registerForAjaxSuccess(f);
        return {
            updateContentSlotOnUpdate: f
        }
    });
    k.when("A", "ContentSlotDetails").register("ContentSlotDetailsCfs", function(a, b) {
        function c(a, b) {
            var c = e("#rcx-sc-content-slot-container span[data-action\x3dsc-batch-launch-rec-widget]");
            0 < c.length && (a = c.attr("data-sc-batch-launch-rec-widget").replace(a, b), c.attr("data-sc-batch-launch-rec-widget",
                a))
        }
        var e = a.$;
        a.on("sc:batch_rec:after_load_done", function() {
            c("cart_cs_cfs_srch", "cart_cs_cfs_no_recs_srch")
        });
        a.on("sc:batch_rec:after_load_fail", function() {
            c("cart_cs_cfs_srch", "cart_cs_cfs_fail_recs_srch")
        })
    });
    "use strict";
    k.when("A", "Cart", "CartServerSetting", "a-secondary-view").execute(function(a, b, c, e) {
        function d(a) {
            a.find(".sc-subtotal-address").hide();
            a.find(".sc-spinner:first").hide();
            a.find(".sc-subtotal-error").show();
            a.find(".sc-flc-content").show();
            u = 0
        }

        function f() {
            return l("#sc-subtotals-breakdown")
        }

        function h() {
            var a = l("#sc-android-pinned-buy-box-wrapper");
            if (0 < a.length) {
                var b = a.find("#sc-android-pinned-buy-box");
                a.height(b.outerHeight())
            }
        }

        function k() {
            l("#sc-cart-flc-addr-popover-trigger a").focus()
        }

        function g(a, b, d, c) {
            var e = l("#sc-android-pinned-buy-box-wrapper");
            c = {
                duration: "fast",
                complete: c,
                queue: "false"
            };
            if ("up" === d) a.slideUp(c);
            else if ("down" === d) a.slideDown(c);
            else return;
            0 < e.length && e.animate({
                height: b
            }, c)
        }

        function t() {
            var a = f(),
                b = l("#sc-mflc-expander-icon");
            g(a, w.collapsed, "up", function() {
                b.removeClass("a-icon-section-collapse");
                b.addClass("a-icon-section-expand");
                u = 0;
                h()
            })
        }

        function p() {
            var a = f(),
                b = l("#sc-mflc-expander-icon");
            g(a, w.expanded, "down", function() {
                b.removeClass("a-icon-section-expand");
                b.addClass("a-icon-section-collapse");
                u = 0;
                h();
                k()
            })
        }

        function n() {
            var a = f(),
                b = a.find(".sc-spinner");
            a.find(".sc-flc-content").hide();
            b.is(":visible") || (b.show(), g(a, w.spinner, "down", h))
        }

        function x(a, d, e, f) {
            var g = [];
            if (!c.features.enableBatching) {
                var h = l(".sc-subtotal-address input[name\x3daddressID]");
                g.push({
                    name: "addressId",
                    value: f &&
                        f.addressid ? f.addressid : h.attr("value")
                });
                g.push({
                    name: "addressZip",
                    value: f && f.addresszip ? f.addresszip : h.data("addresszip")
                })
            }
            var h = l("#sc-buy-box .sc-gift input[type\x3dcheckbox]"),
                k = l("#sc-buy-box .sc-gift input[type\x3dhidden][name\x3disToBeGiftWrappedBefore]");
            g.push({
                name: "showGiftCheckbox",
                value: 0 < h.length ? 1 : 0
            });
            g.push({
                name: "cartHasGiftableItems",
                value: k.attr("value") ? 1 : 0
            });
            g.push({
                name: "giftCheckoxIsChecked",
                value: h.is(":checked") ? 1 : 0
            });
            0 < l("#sc-android-pinned-buy-box").length && g.push({
                name: "isPinnedBuyBox",
                value: 1
            });
            f = f && f.reftag;
            y || (y = 1, f && (f += "-firstload"));
            b.makeAjaxCall("/gp/cart/ajax-load-flc.html" + (f ? "/ref\x3d" + f : ""), g, 3E4, function(c) {
                b.logUECounter("loadFLCAjaxSuccess");
                if (c.features && c.features["buy-box"]) {
                    b.logUECounter("loadFLCAjaxSuccessHasContent");
                    c = c.features["buy-box"];
                    var e = l("#sc-buy-box"),
                        f = e.find(".sc-imb");
                    e.replaceWith(c.featurehtml);
                    l("#sc-imb-placeholder").replaceWith(f);
                    a()
                } else c.features && c.features["android-mini-buy-box"] ? (b.logUECounter("loadFLCAjaxSuccessHasPinnedContent"),
                    c = c.features["android-mini-buy-box"], l("#sc-android-pinned-buy-box-wrapper").replaceWith(c["android-pinned-buy-box-wrapper"]), l("#sc-buy-box").replaceWith(c["buy-box"]), a()) : d && d(l("#sc-subtotals-breakdown"))
            }, function(a) {
                b.logUECounter("loadFLCAjaxFailure");
                d && d(l("#sc-subtotals-breakdown"))
            }, function() {
                e && e()
            }, function() {})
        }

        function q(a, b) {
            a.find(".sc-flc-zip-error").hide();
            a.find("input[name\x3dzipcode]").addClass("a-form-error");
            a.find(b).show()
        }

        function r(c, e, f) {
            function g(a) {
                c.find(".sc-city-section").replaceWith(a.html);
                1 > a.citynum ? q(c, ".sc-no-city-found") : 1 === a.citynum && (e && e.hide(), a = {
                    addressid: "new",
                    addresszip: c.find(".sc-city-section input[name\x3daddressZip]:checked").attr("value"),
                    reftag: f
                }, x(p, d, n, a))
            }
            var h = c.find("input[name\x3dzipcode]");
            c.find(".a-button");
            c.find(".sc-zipcode-required");
            (h = a.trim(h.attr("value"))) ? b.makeAjaxCall("/gp/cart/ajax-load-zipcode-cities.html/ref\x3dcart_cart_loadZipCities", [{
                name: "zipcode",
                value: h
            }], 5E3, g, function() {}, function() {
                c.find("input[name\x3dzipcode]").removeClass("a-form-error");
                c.find(".sc-flc-zip-error").hide()
            }, function() {}): q(c, ".sc-zipcode-required")
        }
        if (c.features.enableMobileFLC) {
            var l = a.$,
                u = 0,
                y = 0,
                w = {
                    collapsed: "100px",
                    spinner: "158px",
                    expanded: "304px"
                };
            a.declarative("sc-mobile-flc-expander", ["click"], function(a) {
                u || (u = 1, a = f(), a.is(":visible") ? t() : 0 < a.find(".sc-mflc-call-ajax").length ? x(p, d, n, {
                    reftag: "cart_cart_loadflccontent"
                }) : p())
            });
            a.declarative("flc-mobile-select-address", ["change"], function(a) {
                a = a.$currentTarget;
                a.closest(".sc-flc-address-selection").find(".sc-active-box").addClass("sc-inactive-box").removeClass("sc-active-box");
                a.find(".sc-flc-address-option").addClass("sc-active-box").removeClass("sc-inactive-box")
            });
            a.declarative("flc-mobile-get-estimate", ["click"], function(a) {
                var b = a.$currentTarget.find("button"),
                    c = b.data(),
                    f;
                a.$currentTarget.closest(".a-popover").length && (f = e.get("mobile-flc-address-select"));
                a = a && a.data && a.data.refTag;
                var g = c && c.addressid || "new",
                    c = c && c.addresszip;
                "new" !== g || c ? (f && f.hide(), x(p, d, n, {
                    addressid: g,
                    addresszip: c,
                    reftag: a
                })) : r(b.closest(".sc-zipcode-option"), f, a)
            });
            a.on("a:popover:afterHide:mobile-flc-address-select",
                function(a) {
                    setTimeout(k, 500)
                })
        }
    });
    "use strict";
    k.when("A", "mash", "Cart", "FreshCheckout").execute(function(a, b, c, e) {
        function d(a) {
            c.logUECounter("Fresh:Pickup:Checkout:PermissionsFailure")
        }

        function f(a) {
            h = a.permission
        }
        var h;
        a.declarative("sc-fresh-redirect-to-permissions", "click", function(a) {
            a = a.data.forward;
            "notDetermined" === h ? (c.logUECounter("Fresh:Pickup:Checkout:ToGeosettings"), a = document.location.origin + "/fresh/geosettings/enable?permission\x3dnotDetermined\x26forward\x3d" + encodeURIComponent(a +
                "\x26CheckoutPermissionsIntercept\x3d1"), b.navstack.begin().modalOpen(a).end()) : (c.logUECounter("Fresh:Pickup:Checkout:ToCheckout"), e.navigateToCheckout(document.location.origin + a))
        });
        k.when("location-permission", "ready").execute(function(a) {
            a.locationPermissionStatus({
                successCallback: f,
                failCallback: d
            })
        })
    });
    "use strict";
    k.when("A", "mash", "CartServerSetting", "CartPageSpinner").register("FreshCheckout", function(a, b, c, e) {
        function d(a) {
            b.navigate({
                url: a,
                failCallback: function(a) {
                    e.close();
                    n.ueLogError &&
                        n.ueLogError(a, {
                            logLevel: "ERROR",
                            attribution: "mash navigate fail"
                        })
                }
            })
        }
        if (c.device.isApp) {
            var f = a.$;
            f("#content").delegate("#sc-fresh-buy-box button[name\x3d'proceedToCheckout']", "click", function(a) {
                var b = f(a.target);
                a.preventDefault();
                a = b.closest("form").attr("action");
                d(a)
            });
            return {
                navigateToCheckout: d
            }
        }
    });
    "use strict";
    k.when("A", "jQuery", "CartServerSetting", "CartPageSpinner", "a-button").register("FreshCart", function(a, b, c, e, d) {
        c.device.isApp || b("#content").delegate("#sc-fresh-buy-box-pmods-button",
            "click",
            function(a) {
                d(a.currentTarget).isEnabled() && e.show()
            })
    });
    "use strict";
    k.when("Cart", "A").register("imb-stats", function(a, b) {
        var c = b.$;
        if (0 < c(".sc-imb").length) {
            var e = !1;
            b.on("a:popover:show:imb_2nd_view", function f() {
                e = !0;
                a.logClientEvent("imb-seen");
                b.off("a:popover:show:imb_2nd_view", f)
            });
            b.on("sc:ajaxupdate:start", function h(c) {
                c = a.getParamValue("pageAction", c);
                c = ["imb", e ? "seen" : "not-seen", c].join("-");
                a.logClientEvent(c);
                b.off("sc:ajaxupdate:start", h)
            })
        }
    });
    "use strict";
    k.when("A", "CartUpdate",
        "CartServerSetting").register("MobileInstallments", function(a, b, c) {
        if (c.features.enableCartInstallments) {
            var e = a.$;
            e("#content").delegate(".sc-installments-popover input[type\x3dcheckbox]", "change", function() {
                var a = e(this),
                    c = b.getItem(a),
                    a = a.is(":checked"),
                    a = [{
                        name: "installments-program." + c.data("itemid"),
                        value: c.data("installmentsprogram")
                    }, {
                        name: "installments-selected." + c.data("itemid"),
                        value: a ? 1 : 0
                    }, {
                        name: "submit.update-installments." + c.data("itemid"),
                        value: 1
                    }, {
                        name: "pageAction",
                        value: "installments"
                    }];
                b.takeCartActionForSingleItem(c, "installments", a, "ox_sc_mobile_inst_toggle")
            })
        }
    });
    "use strict";
    k.when("A", "jQuery", "CartServerSetting", "mash").register("CartItemAppLink", function(a, b, c, e) {
        a.declarative("app-link", ["click"], function(a) {
            var c = "img" === a.targetTag && a.$target.parent().is("a") && a.$target.parent().hasClass("ags-badge-link"),
                h = a.$target.hasClass("sc-suppress-item-dp-link") || a.$target.parent().is("a") && a.$target.parent().hasClass("sc-suppress-item-dp-link");
            "a" === a.targetTag && !a.$event.target.href.match("void") ||
                c || h || (c = a.data.url, a = a.data["offer-listing-page-asin"], "string" === typeof c && 0 < (c = b.trim(c)).length ? e.navigate({
                    url: c
                }) : "string" === typeof a && 0 < (a = b.trim(a)).length && e.showOfferListingPage({
                    asin: a
                }))
        });
        b("#content").delegate("#sc-saved-cart .sc-lowest-price-offer", "click", function(a) {
            var c = b(this).attr("data-asin");
            e.showOfferListingPage({
                asin: c
            });
            a.stopPropagation()
        })
    });
    "use strict";
    k.when("jQuery").register("CartItemDPLink", function(a) {
        a("#content").delegate(".sc-item-dp-link", "click", function(b) {
            var c =
                a(b.target.parentElement).is("a") && a(b.target.parentElement).hasClass("ags-badge-link"),
                e = a(b.target).hasClass("sc-suppress-item-dp-link") || a(b.target.parentElement).is("a") && a(b.target.parentElement).hasClass("sc-suppress-item-dp-link");
            a(b.target).is(".a-popover-trigger") || c || e || (n.location.href = a(this).data("url"))
        })
    });
    "use strict";
    k.when("A", "CartUpdate", "CartMiniBuyBox-Lib", "mini-buy-box-ready").execute("CartMiniBuyBox", function(a, b, c) {
        var e = a.$,
            d = !1,
            f = c.isUseSticky(),
            h = function() {
                var a = c.getMiniBuyBox(),
                    b;
                if (!(b = 0 >= a.length)) {
                    b = a.hasClass("sc-bottom-pinned");
                    var d = "fixed" === a.css("position"),
                        f = a.is(":visible");
                    b = !(b && d && f)
                }
                b || (a = a.outerHeight(), e("body").css("padding-bottom", a + "px"))
            },
            k = function() {
                function a() {
                    d ? c.getMiniBuyBox().css("position", "static") : c.getMiniBuyBox().css("position", f)
                }
                h();
                return f ? a : function() {}
            }();
        b.registerForAjaxSuccess(function(a) {
            a && a.features && a.features["mini-buy-box"] && (a = a.features["mini-buy-box"], a.refreshfeature && c.getMiniBuyBox().replaceWith(a.featurehtml))
        });
        b.registerForAjaxComplete(function() {
            k()
        });
        e("#content").delegate('a[href\x3d"#similar-items"]', "click", function(a) {
            var b = e("#similar-items");
            if (b && 0 < b.length) {
                var b = b.offset().top,
                    d = 0 >= e("#sc-buy-box").data("quantity"),
                    f = c.getMiniBuyBox();
                0 < f.length && !d && (d = f.outerHeight(), n.scrollTo(0, b - d), a.preventDefault())
            }
        });
        e(document).delegate('input[type\x3d"text"], input[type\x3d"tel"]', "focusin focusout", function(a) {
            d = "focusin" === a.type;
            k()
        })
    });
    "use strict";
    k.when("jQuery").register("CartPageSpinner", function(a) {
        var b = a(document),
            c = a(n),
            e = a("#sc-page-spinner"),
            d = e.find(".sc-overwrap"),
            f = e.find(".sc-spinner"),
            h = function() {
                e.hasClass("a-hidden") || (d.css({
                    height: b.height()
                }), f.css({
                    top: c.scrollTop() + c.height() / 2 - f.height() / 2
                }))
            };
        c.resize(function() {
            h()
        });
        b.scroll(function() {
            h()
        });
        c.bind("orientationchange", function() {
            h()
        });
        return {
            show: function() {
                e.removeClass("a-hidden");
                h()
            },
            close: function() {
                e.addClass("a-hidden")
            }
        }
    });
    "use strict";
    k.when("A", "a-modal-factory").execute(function(a, b) {
        a.declarative("a-modal", "click", function(a) {
            b.get(a.$declarativeParent).show();
            a.$event.preventDefault();
            a.data.preventPropagation && a.$event.stopImmediatePropagation()
        })
    });
    "use strict";
    k.when("A", "a-popover").register("QuantityUpdatePopoverController", function(a, b) {
        return {
            showQuantityPopover: function(c) {
                var e = c.find(".sc-quantity-update-message");
                if (!(1 > e.length)) {
                    var d = "quantity-popover-" + c.data("actionItemID");
                    b.create(c.find(".sc-action-quantity"), {
                        content: e.contents(),
                        name: d
                    }).show();
                    a.on("a:popover:hide:" + d, function(a) {
                        b.remove(a.popover);
                        e.remove()
                    })
                }
            },
            closeQuantityPopover: function(a) {
                a =
                    a.find(".sc-action-quantity");
                0 < a.length && b.remove(a)
            }
        }
    });
    k.when("jQuery", "a-secondary-view", "ready").execute(function(a, b) {
        k.now("mash").execute(function(c) {
            a('.cart-pmp-details \x3e .a-declarative[data-action\x3d"a-secondary-view"]').click(function(a) {
                a.stopImmediatePropagation();
                a.preventDefault();
                void 0 !== c ? c.navigate({
                    successCallback: function() {
                        b.get(a.currentTarget).show({
                            preventNavigate: !1
                        })
                    }
                }) : b.get(a.currentTarget).show()
            })
        })
    });
    "use strict";
    k.when("A", "ready").register("SnSBackgroundController",
        function(a) {
            var b = a.$;
            return {
                blockBackgroundScrollLockPosition: function() {
                    b("html body").addClass("background-scroll-toggle")
                },
                unblockBackgroundScrollRetrievePosition: function() {
                    b("html body").removeClass("background-scroll-toggle")
                }
            }
        });
    "use strict";
    k.when("A", "a-sheet", "snsData", "ready").register("SnSBottomSheetUtility", function(a, b, c) {
        var e = a.$,
            d = {
                closeEnabled: !0,
                closeType: "message",
                closeMessage: c.getAllSnSData().sheetCloseMessage,
                sheetType: "web"
            };
        a.on("a:sheet:afterShow:snsBottomSheet", function(a) {
            a =
                a.sheet;
            var b = a.$container.find("#" + a._preloadDomId).find(".a-scroller").children().innerHeight();
            a.$container.height() > b && a.changeHeight({
                height: b,
                duration: .2
            })
        });
        return {
            getBottomSheet: function(a) {
                var c = b.get(a.data.preloadDomId);
                c || (c = b.get(a.data.preloadDomId) || b.create(e.extend({
                    name: "snsBottomSheet",
                    preloadDomId: a.data.preloadDomId,
                    height: a.data.height || 250
                }, d)));
                return c
            }
        }
    });
    "use strict";
    k.when("A", "ready").register("snsData", function(a) {
        var b = a.$;
        return {
            getAllSnSData: function(a) {
                var e = "",
                    d = !1;
                if (0 < b("#sns-onml-factory-data").length && b("#sns-onml-factory-data").data()) var f = b("#sns-onml-factory-data").data(),
                    e = f.sheetCloseMessage;
                a = "#sns-data-" + a;
                0 < b(a).length && b(a).data() && (f = b(a).data(), d = f.iscustomertiered);
                return {
                    sheetCloseMessage: e,
                    isCustomerTiered: d
                }
            }
        }
    });
    "use strict";
    k.when("A", "SnSUpdate", "SnSBottomSheetUtility", "ready").execute(function(a, b, c) {
        var e = a.$,
            d = b.getRequest(),
            f = !1,
            h, k = function() {
                h && h.hide()
            },
            g = {
                upsell: function(a) {
                    f = !1;
                    a.sheet.$container.find("#frequencySelector_" +
                        a.data.itemid).html(d.overrideFrequencyText)
                },
                frequency: function(a) {
                    a = a.sheet.$container.find("[data-a-accordion-name\x3d'sns-accordion'] [data-a-accordion-row-name\x3d'frequency_" + d.overrideFrequency + "'] a");
                    a.addClass("sc-suppress-item-dp-link");
                    a.click()
                }
            },
            n = {
                upsell: function(a) {
                    !0 === f ? (a.data.preloadDomId = a.data.associateddomid, a.data.height = a.data.associateddomheight, h = c.getBottomSheet(a), h.show()) : d = b.getRequest()
                },
                frequency: function(a) {
                    !0 === f ? (a.data.preloadDomId = a.data.associateddomid, a.data.height =
                        a.data.associateddomheight, h = c.getBottomSheet(a), h.show()) : (d.itemId = a.data.itemid, b.fulfil(d), d = b.getRequest())
                }
            };
        a.declarative("sns-a-opt-in-selected", "click", function(a) {
            h = c.getBottomSheet(a);
            h.show();
            d.isItemSubscribed = !1;
            d.frequency = d.overrideFrequency = a.data.mostCommonFrequencyValue;
            d.overrideFrequencyText = a.data.mostCommonFrequencyText;
            d.mostCommonFrequency = a.data.mostCommonFrequencyValue
        });
        a.declarative("sns-subscribe-selected", "click", function(a) {
            k();
            d.serverParameter = a.data.subscriptionParams;
            d.itemId = a.data.itemId;
            b.fulfil(d)
        });
        a.declarative("sns-a-list-frequency-selected", "click", function(a) {
            d.frequency || (d.frequency = d.overrideFrequency = a.data.selectedFrequency);
            a.data.isNested ? (f = !0, k()) : (h = c.getBottomSheet(a), h.show())
        });
        a.declarative("sns-unsubscribe-selected", "click", function(a) {
            h = c.getBottomSheet(a);
            h.show()
        });
        a.declarative("sns-unsubscribe-confirm-selected", "click", function(a) {
            k();
            d.itemId = a.data.itemId;
            d.overrideFrequency = 0;
            b.fulfil(d)
        });
        a.on("a:accordion:sns-accordion:select",
            function(a) {
                a = e(a.selectedRow.$row[0]);
                d.overrideFrequencyText = a.data().rowinformation;
                d.overrideFrequency = a.data().frequencyvalue
            });
        a.on("a:sheet:beforeShow:snsBottomSheet", function(b) {
            var c = e(b.sheet.$container.find(".bottomSheet")[0]).data();
            b.data = a.extend(c, b.data);
            if (c && g[c.subject]) g[c.subject](b)
        });
        a.on("a:sheet:afterHide:snsBottomSheet", function(b) {
            var c = e(b.sheet.$container.find(".bottomSheet")[0]).data();
            b.data = a.extend(c, b.data);
            if (c && n[c.subject]) n[c.subject](b)
        });
        a.declarative("sns-popover-close",
            "click", k)
    });
    "use strict";
    k.when("A", "CartServerSetting", "CartUpdate", "snsData").register("SnSUpdate", function(a, b, c, e) {
        function d(a) {
            var c = a.overrideFrequency || a.frequency;
            return ["ox_sc_sfc", h[b.device.type] || "ua", c, parseInt(c, 10) === parseInt(a.mostCommonFrequency, 10) ? "mcf" : "nmcf", e.getAllSnSData(a.itemId).isCustomerTiered ? "t" : "nt"].join("|")
        }

        function f() {
            this.itemId = void 0;
            this.isItemSubscribed = !0;
            this.mostCommonFrequency = this.serverParameter = this.overrideFrequency = this.frequency = void 0
        }
        var h = {
            iPhoneApp: "ia",
            AndroidApp: "aa",
            iPadAppPopOver: "ita",
            AndroidTabletApp: "ata"
        };
        return {
            getRequest: function() {
                return new f
            },
            fulfil: function(f) {
                var g = a.$('div[data-itemid\x3d"' + f.itemId + '"]');
                f.isItemSubscribed ? f.frequency !== f.overrideFrequency && c.updateSNS(g, f.overrideFrequency, ["ox_sc_ch", h[b.device.type] || "ua", f.overrideFrequency, e.getAllSnSData(f.itemId).isCustomerTiered ? "t" : "nt"].join("|")) : f.serverParameter && c.modifySnS(g, [f.overrideFrequency || f.frequency, f.serverParameter].join("|"), d(f))
            }
        }
    });
    "use strict";
    k.when("A").register("CartMiniBuyBox-Lib",
        function(a) {
            function b() {
                return e("#sc-mini-buy-box")
            }

            function c() {
                var a = b().css("position");
                return a && a.match("sticky") ? a : !1
            }
            var e = a.$;
            return {
                getFloatingBuyBoxHeight: function() {
                    if (c()) return b().height();
                    var a = e("#sc-android-pinned-buy-box-wrapper");
                    return 0 < a.length ? a.height() : 0
                },
                getMiniBuyBox: b,
                isUseSticky: c
            }
        });
    "use strict";
    n.amz_js_PopWin = function(a, b, c) {
        n.open(a, b, c).focus();
        return !1
    }
});
/* ******** */