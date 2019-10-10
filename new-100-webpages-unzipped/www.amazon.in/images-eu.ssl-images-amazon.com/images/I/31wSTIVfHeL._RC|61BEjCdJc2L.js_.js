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
    k.when("A", "CartUpdate").register("CartAddToCart", function(a, c) {
        return function(b, e, d, f) {
            e.data("encoded-offering", d["encoded-offering"]);
            e.data("asin", d.asin);
            e.data("itemId", d["item-id"]);
            var h = ["encoded-offering", "asin", "item-id"],
                l = [{
                    name: "pageAction",
                    value: "AddToCart"
                }, {
                    name: "submit.add-to-cart",
                    value: 1
                }];
            if (void 0 !== d && "object" === typeof d)
                for (var g in d) d.hasOwnProperty(g) && -1 === h.indexOf(g) && l.push({
                    name: g,
                    value: d[g]
                });
            var r = function(c, e) {
                a.trigger("sc:add-to-cart:" + b + ":" + c, e)
            };
            c.takeCartActionForSingleItem(e, "add-to-cart", l, f, function() {
                r("before", e)
            }, function() {
                r("after", e)
            }).done(function() {
                r("done", e)
            }).fail(function(a, c) {
                r("fail", e)
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
    k.when("A", "CartUpdate", "an-mini-buy-box-ready").register("CartAndroidAppMiniBuyBox", function(a, c) {
        function b(a) {
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
                    e = a.find("#sc-android-pinned-buy-box");
                a.height(e.outerHeight())
            };
        d("#content").delegate("#sc-android-pinned-buy-box .sc-ptc-agent", "click", function(a) {
            a = d("#sc-buy-box .sc-ptc-button .a-button-primary");
            if (0 <
                a.find("a").length) {
                a = a.find("a").attr("href");
                if (a.match("addon-confirm")) {
                    var e = document.getElementsByName("isToBeGiftWrapped")[0];
                    e && e.checked && (a += "?isToBeGiftWrapped\x3d1")
                }
                n.location.href = a
            } else a.find("button").click()
        });
        c.registerForAjaxSuccess(function(a) {
            a && a.features && (a = a.features["android-mini-buy-box"]) && (d.each(a, function(a, e) {
                d("#sc-" + a).replaceWith(e)
            }), e())
        });
        c.registerForAjaxComplete(function() {
            f()
        });
        a.on("a:popover:beforeHide:imb_2nd_view", function(a) {
            f()
        });
        d(document).delegate('input[type\x3d"text"], input[type\x3d"tel"]',
            "focusin focusout",
            function(a) {
                b("focusin" === a.type)
            });
        b()
    });
    "use strict";
    k.when("A", "mash").execute("app-navigate", function(a, c) {
        a.declarative("app-navigate-ingress", "click", function(a) {
            (a = a.data && a.data.url) && c.navigate({
                url: a
            })
        })
    });
    "use strict";
    k.when("A", "CartServerSetting", "mash").execute("NavBarBottomSheetController", function(a, c, b) {
        c.features.collapseMobileAppNavBarWithBottomSheet && (a.on("a:sheet:beforeShow", function() {
            b.dispatchEvent({
                type: "appOverlays.Hide"
            })
        }), a.on("a:sheet:afterHide", function() {
            b.dispatchEvent({
                type: "appOverlays.Show"
            })
        }))
    });
    "use strict";
    k.when("A", "CartServerSetting", "jQuery").register("CartAuthPortal", function(a, c, b) {
        b(document).delegate("#sc-buy-box form", "submit", function(a) {
            var c = b("#sc-authportal-migration").data("signinurl");
            c && (a.preventDefault(), n.location.href = c)
        })
    });
    "use strict";
    k.when("A", "a-sheet", "Cart", "CartBottomSheetBackgroundScroller").execute("BatchDestination", function(a, c, b, e) {
        function d(a) {
            var e = c.get("glux_bottom_sheet");
            e ? a = e : (g("body").append('\x3cdiv id\x3d"sc-glow-bottom-sheet"\x3e\x3c/div\x3e'),
                a = c.create({
                    name: "glux_bottom_sheet",
                    preloadDomId: "sc-glow-bottom-sheet",
                    sheetType: "web",
                    closeType: "message",
                    closeMessage: a
                }));
            a.show()
        }

        function f(a) {
            b.logUECounter("Cart:LocationWidget:" + a)
        }

        function h(a) {
            "function" === typeof uet && uet(a, "Cart:LocationWidget", {
                wb: 1
            })
        }

        function l() {
            "function" === typeof uex && uex("ld", "Cart:LocationWidget", {
                wb: 1
            })
        }
        var g = a.$,
            r = b.debounceByPromise(function(a) {
                var e = '\x3cdiv id\x3d"sc-glow-data"\x3e' + ('\x3cinput id\x3d"sc-batch-destination-update-items-list" type\x3d"hidden" value\x3d"' +
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
                    a ? a = a.concat(e) : (f("GlowWidgetEmptyError"), a = g("#sc-glow-ajax-error").html());
                    g("#sc-glow-bottom-sheet").html(a);
                    h("cf")
                }).fail(function() {
                    f("GlowWidgetLoadError");
                    var a = g("#sc-glow-ajax-error").html();
                    g("#sc-glow-bottom-sheet").html(a)
                }).then(l)
            });
        a.declarative("sc-batch-edit-destination", "click", function(a) {
            f("BatchEditDestination:" + a.data.locationType);
            r(a)
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
    k.when("A", "a-sheet").execute("batch-interstitial", function(a, c) {
        var b = a.$;
        a.declarative("batch-interstitial", "click", function(a) {
            a = b.extend({
                inlineContent: b("#" + a.data.name).html()
            }, a.data);
            c.create(a).show()
        })
    });
    "use strict";
    k.when("A", "CartServerSetting").register("BatchPTC", function(a, c) {
        function b() {
            return h("#sc-buy-box form").serializeArray().filter(g)
        }

        function e(a, e) {
            0 < e.length && (a += -1 < a.indexOf("?") ? "\x26" : "?", a += h.param(e));
            return a
        }

        function d() {
            a.declarative("batch-ptc", "click",
                function(a) {
                    var c = b();
                    a = e(a.data.url, c);
                    n.location.href = a
                });
            a.declarative("continue-shopping", "click", function(a) {
                n.location.href = a.data.url
            })
        }

        function f() {
            k.when("mash", "CartUpdate").execute(function(c, d) {
                a.declarative("batch-ptc", "click", function(f) {
                    var h = b(),
                        g = e(f.data.url, h);
                    f = a.extend({}, h.reduce(r, {}), {
                        cartItemIds: f.data.preCheckoutParameters.cartItemIds
                    }, {
                        hasPrimeGift: f.data.preCheckoutParameters.hasPrimeGift
                    });
                    h = f.isToBeGiftWrapped || 0;
                    g.match("addon-confirm") || g.match("addon-reminder") ? c.navigate({
                            url: g
                        }) :
                        d.prepareForAppCheckout(h, f).done(function() {
                            c.navigate({
                                url: g
                            })
                        })
                });
                a.declarative("continue-shopping", "click", function(a) {
                    c.navigate({
                        url: a.data.url
                    })
                })
            })
        }
        if (c.features.enableBatching) {
            var h = a.$,
                l = ["hasPrimeGift", "hasKindleUnlimitedGift", "cartInitiateId"],
                g = function(a) {
                    return -1 === l.indexOf(a.name)
                },
                r = function(c, e) {
                    var b = {};
                    b[e.name] = e.value;
                    return a.extend({}, c, b)
                };
            c.device.isApp ? f() : d()
        }
    });
    "use strict";
    k.when("A", "a-sheet", "Cart", "CartUpdate", "CartServerSetting", "CartPageSpinner", "CartBottomSheetBackgroundScroller",
        "ready").register("BatchRec", function(a, c, b, e, d, f, h) {
        function l(e) {
            if (!0 === m(e).data("iscontentloaded")) t("AlreadyLoaded");
            else {
                var c = m(e).data("sourcedata");
                c ? (c = m.extend({
                    sourceDataJson: JSON.stringify(c)
                }, d.csrf), b.ajax("/gp/cart/ajax-load-batch-rec.html", {
                    data: c
                }).done(function(c) {
                    c.csrfViolation ? t("CsrfViolation") : ("true" === c.hasContent ? (m(e).find(".sc-batch-rec-bs-content").replaceWith(c.content), m(e).data("iscontentloaded", !0), t("SuccessfullyLoaded")) : t("NoRecsContentReturned"), a.trigger("sc:batch_rec:after_load_done",
                        c))
                }).fail(function(c, e) {
                    t("LoadingAjaxFailed");
                    a.trigger("sc:batch_rec:after_load_fail", c)
                })) : t("SourceDataEmpty")
            }
        }

        function g() {
            m(".sc-batch-rec-widget").each(function() {
                l(m(this))
            })
        }

        function r(a) {
            d.device.isApp ? k.when("mash").execute(function(c) {
                c.navigate({
                    url: a
                })
            }) : n.location.href = a
        }

        function p(a, c) {
            t("AddToCartAction");
            var b = "ox_sc_batch_rec_atc_" + a.data("item-count"),
                d = [{
                    name: "pageAction",
                    value: "AddToCart"
                }, {
                    name: "submit.add-to-cart",
                    value: 1
                }];
            if (void 0 !== c && "object" === typeof c)
                for (var g in c) c.hasOwnProperty(g) &&
                    d.push({
                        name: g,
                        value: c[g]
                    });
            h.enablePageScrolling();
            f.show();
            e.takeCartActionForSingleItem(a, "add-to-cart", d, b).done(function() {
                a.find(".sc-batch-rec-add-to-cart-button").addClass("aok-hidden");
                a.find(".sc-batch-rec-added-to-cart-message").removeClass("aok-hidden").fadeIn();
                t("AddToCartSuccess")
            }).fail(function(a, c) {
                t("AddToCartFailed")
            }).always(function() {
                f.close();
                h.disablePageScrolling()
            })
        }

        function v() {
            m(".a-sheet-web.aok-hidden").each(function() {
                0 < m(this).find(".sc-batch-rec-bs-container").length &&
                    m(this).remove()
            })
        }

        function x(a) {
            a.each(function() {
                var a = 0,
                    c = m(this).find(".sc-br-item .sc-batch-rec-add-to-cart");
                c.each(function() {
                    a = Math.max(a, m(this).offset().top)
                });
                c.each(function() {
                    var c = a - m(this).offset().top;
                    0 < c && m(this).css("padding-top", c + "px")
                })
            })
        }

        function q(e, b) {
            a.off("a:sheet:beforeShow:" + e);
            a.off("a:sheet:afterHide:" + e);
            v();
            var d = m(b).find(".sc-batch-rec-bs-scroll-content").first().height() + 30;
            b = c.create({
                name: e,
                inlineContent: m(b).html(),
                closeType: "icon",
                sheetType: "web",
                height: d
            });
            a.on("a:sheet:beforeShow:" + e, function(a) {
                h.disablePageScrolling();
                a.sheet && a.sheet.$container && x(a.sheet.$container.find(".sc-batch-recommendations"))
            });
            a.on("a:sheet:afterHide:" + e, function(a) {
                h.enablePageScrolling();
                u = void 0;
                t("BottomSheetClosed")
            });
            u = e;
            b.show()
        }

        function t(a) {
            b.logUECounter("recommendationWidget:" + a)
        }
        var m = a.$,
            u = "";
        m("#a-page");
        m("body");
        a.declarative("sc-batch-rec-add-to-cart", "click", function(a) {
            var c = a.$target.closest(".sc-batch-rec-add-to-cart");
            c && p(c, a.data)
        });
        a.declarative("sc-batch-launch-rec-widget",
            "click",
            function(a) {
                var c = a.data;
                a = c.widgetId;
                var e = c.fallbackUrl,
                    c = c.source;
                t("LaunchOperationTriggered:" + c);
                var b = m("#" + a);
                b && m(b).data("iscontentloaded") ? (q(a, b), t("Launched:" + c)) : (t("LaunchFailed:" + c), e && "#" !== e && (r(e), t("FallBackUrl:" + c)))
            });
        a.on("sc:ajaxupdate:succeed", function(a) {
            g()
        });
        a.on("sc:c2_content_slot:content_slot_update", function() {
            var a = m("#rcx-sc-content-slot-container div.sc-batch-rec-bs-header"),
                a = 0 < a.length ? a.html() : "";
            m("div.sc-batch-rec-bs-container div.sc-batch-rec-bs-header").html(a);
            a || (a = c.get(u)) && a.hide()
        });
        a.on.orientationchange(function() {
            if (void 0 !== u) {
                var e = c.get(u);
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
    k.when("A", "a-sheet", "Cart", "CartUpdate", "CartPageSpinner", "CartServerSetting").register("GLUXExternalConfig", function(a, c, b, e, d, f) {
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
                        c.get("glux_bottom_sheet").hide();
                        d.show()
                    }, function() {
                        b.logUECounter("Cart:LocationWidget:UpdateDestination");
                        d.close()
                    }, "ox_sc_update_destination")
                }
            }
        }
    });
    "use strict";
    k.when("A", "Cart", "CartAddToCart").register("BenefitConcierge-AddToCartButton", function(a, c, b) {
        a.declarative("sc-add-to-cart-action",
            "click",
            function(a) {
                var c = a.data;
                b("benefit-concierge", a.$currentTarget, c, c.reftag)
            });
        a.on("sc:add-to-cart:benefit-concierge:before", function() {
            c.logUECounter("benefit-concierge:AddToCartAction")
        });
        a.on("sc:add-to-cart:benefit-concierge:done", function(a) {
            a.find(".sc-atc-add-to-cart-button").addClass("aok-hidden");
            a.find(".sc-atc-added-to-cart-text").removeClass("aok-hidden");
            c.logUECounter("benefit-concierge:AddToCartSuccessed")
        });
        a.on("sc:add-to-cart:benefit-concierge:fail", function() {
            c.logUECounter("benefit-concierge:AddToCartFailed")
        })
    });
    "use strict";
    k.when("A", "Cart").register("BenefitConcierge-Header", function(a, c) {
        var b = a.$;
        a.declarative("sc-bc-header-action", "click", function() {
            var a = b("#sc-bc-carousel-container .sc-bc-tile-item").first().position().left,
                d = b("#sc-bc-carousel-container .a-carousel-viewport"),
                f = d.scrollLeft();
            d.scrollLeft(f + a - 10);
            c.logUECounter("benefit-concierge:HeaderClicked")
        })
    });
    "use strict";
    k.when("A", "Cart", "CartUpdate", "PageManipulator").register("BenefitConcierge-Content", function(a, c, b, e) {
        var d = a.$;
        b.registerForAjaxSuccess(function(a) {
            a.features &&
                a.features["content-slot"] && (d.each(a.features["content-slot"].manipulations, function(a, c) {
                    e.perform(c)
                }), a = a.features["content-slot"].featurehtml, void 0 === a && (a = ""), d("#rcx-sc-benefit-concierge-container").replaceWith(a), c.logUECounter("benefit-concierge:refreshed"))
        })
    });
    "use strict";
    k.when("A", "ready").register("CartBottomSheetBackgroundScroller", function(a) {
        a = a.$;
        var c = a("#a-page"),
            b = a("body");
        return {
            disablePageScrolling: function() {
                var a = b.scrollTop();
                c.css({
                    position: "fixed",
                    top: "-" + a + "px"
                })
            },
            enablePageScrolling: function() {
                var a = Math.abs(c.position().top);
                c.css({
                    position: "",
                    top: ""
                });
                b.scrollTop(a)
            }
        }
    });
    "use strict";
    k.when("Cart").execute("MobileCartBrowserHistory", function(a) {
        a.replaceBrowserHistory()
    });
    "use strict";
    k.when("A", "mash", "ready").register("mobile-cart-item-quantity", function(a, c) {
        (a = a.state("mobile-cart-page-state")) && void 0 !== a.cartItemQuantity && c.cart && c.cart.didUpdate && c.cart.didUpdate({
            newCartQuantity: a.cartItemQuantity
        })
    });
    "use strict";
    k.when("A", "CartUpdate").execute("CartUpdate-AddBestOffer",
        function(a, c) {
            var b = a.$;
            b("#content").delegate(".sc-list-item .sc-action-add-best-offer input[type\x3dsubmit]", "click", function(a) {
                a.preventDefault();
                a = c.getItem(b(this));
                var d = "ox_sc_abotc_" + a.data("item-count"),
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
                c.takeCartActionForSingleItem(a, "add-best-offer-to-cart",
                    f, d)
            })
        });
    "use strict";
    k.when("A", "jQuery", "CartUpdate").register("CartUpdate-Handler-AddonReminder", function(a, c, b) {
        return {
            toggleAddonItemIncludeInNextQualifyingOrder: function(a, c, f) {
                c = [{
                    name: "itemIsIncludedInNextQualifyingOrder." + a.data("itemid"),
                    value: c ? 1 : 0
                }, {
                    name: "submit.addon-reminder." + a.data("itemid"),
                    value: 1
                }, {
                    name: "pageAction",
                    value: "addon-reminder"
                }];
                b.takeCartActionForSingleItem(a, "addon-reminder", c, f)
            }
        }
    });
    k.when("A", "jQuery", "CartServerSetting", "CartUpdate", "CartUpdate-Handler-AddonReminder").register("CartUpdate-AddonReminder",
        function(a, c, b, e, d) {
            b.features.enableAddOnReminder && c("#content").delegate(".sc-addon-reminder-option input[type\x3dcheckbox]", "change", function() {
                var a = c(this),
                    b = e.getItem(a),
                    l = "ox_sc_addonreminder_" + b.data("item-count");
                d.toggleAddonItemIncludeInNextQualifyingOrder(b, a.is(":checked"), l)
            })
        });
    "use strict";
    k.when("A", "Cart", "CartServerSetting").execute("ViewPortCorrector", function(a, c, b) {
        function e(a) {
            return "move-to-cart" === c.getParamValue("pageAction", a)
        }
        if (b.features.enableBatching) {
            var d = a.$,
                f =
                0,
                h = 0,
                l = 0;
            a.on("sc:ajaxupdate:start", function(a) {
                e(a) && (a = d("#sc-active-cart"), h = d(n).scrollTop(), f = a.position().top, l = f + a.outerHeight())
            });
            a.on("sc:ajaxupdate:succeed", function(a) {
                e(a) && (a = d("#sc-active-cart"), h > f && (a = a.position().top + a.outerHeight(), a = h + a - l, d(n).scrollTop(a)))
            })
        }
    });
    "use strict";
    k.when("A", "BatchedItemUpdateMessageBuilder").execute("BatchedItemUpdateMessage", function(a, c) {
        function b() {
            var a = e("#sc-batched-item-update-message");
            a.length || (a = e("\x3cdiv\x3e", {
                id: "sc-batched-item-update-message"
            }).appendTo("#a-page"));
            return a
        }
        var e = a.$,
            d, f;
        a.on("sc:displayMessage", function(a, b) {
            f = c.getItemUpdateMessage(a, b)
        });
        a.on("sc:ajaxupdate:complete", function() {
            f = null
        });
        a.on("sc:ajaxupdate:succeed", function() {
            f && 0 < f.length && (d && clearTimeout(d), b().html(f).fadeIn(), d = setTimeout(function() {
                e("#sc-batched-item-update-message").fadeOut()
            }, 3200))
        })
    });
    "use strict";
    k.when("A", "Cart", "CartPerfWrapper", "CartServerSetting", "LoadPageData", "CartPageSpinner", "CartUpdate-Load", "QuantityUpdatePopoverController").register("CartUpdate", function(a,
        c, b, e, d, f, h, l) {
        var g = a.$,
            r = function(a, c, b, e, d, h) {
                b.push({
                    name: "actionItemID",
                    value: a.data("itemid")
                });
                b.push({
                    name: "actionType",
                    value: c
                });
                b.push({
                    name: "asin",
                    value: a.data("asin")
                });
                b.push({
                    name: "encodedOffering",
                    value: a.data("encoded-offering")
                });
                return p(b, function() {
                    l.closeQuantityPopover(a);
                    f.show();
                    d && d()
                }, function() {
                    f.close();
                    h && h()
                }, e)
            },
            p = function(a, b, e, d, f) {
                var h = c.getParamValue("pageAction", a);
                if (C.tryAbort(h)) return v(a, function(a) {
                    C.setAction(h, a, f);
                    b && b()
                }, function() {
                    C.setAjaxRequest(null);
                    e && e()
                }, d)
            },
            v = function(f, p, l, r) {
                var A;
                e.features.wrapCartPerf ? (b.resetUEForAJAXRequest(), A = b.getScope()) : (CartPerf.resetUEForAJAXRequest(), A = CartPerf.getScope());
                w();
                h.callQ("beforeSend");
                a.trigger("sc:ajaxupdate:start", f);
                return c.makeAjaxCall("/gp/cart/ajax-update.html" + (r ? "/ref\x3d" + r : ""), g.param(g.merge(f, q())), c.getAjaxTimeout(1E4), function(g) {
                    if (g.csrfViolation) c.reloadOnCSRFViolation(g, e.device.isApp);
                    else {
                        var p;
                        if (p = g.features) p = (p = g.features["active-cart"]) ? (e.features.enableBatching ? !0 :
                            !1) !== (p.manipulations ? !0 : !1) : !1;
                        p ? (c.logUECounter("cart-packard-activeCartUpdateMismatch"), c.refreshPage("ox_sc_cart_upd_msm")) : (e.features.wrapCartPerf ? (b.setStartTimeForAJAXRequest(), b.setIDForAJAXRequest(g.requestid)) : (CartPerf.setStartTimeForAJAXRequest(), CartPerf.setIDForAJAXRequest(g.requestid)), d.loadCriticalPageData(g, f), h.callQ("success-critical", g), e.features.wrapCartPerf ? (b.atfLoadedForAJAXRequest(), b.fnLoadedForAJAXRequest(), b.cfLoadedForAJAXRequest()) : (CartPerf.atfLoadedForAJAXRequest(),
                            CartPerf.fnLoadedForAJAXRequest(), CartPerf.cfLoadedForAJAXRequest()), d.loadNonCriticalPageData(g, f), h.callQ("success", g), e.features.wrapCartPerf ? b.pageLoadedForAJAXRequest(A) : CartPerf.pageLoadedForAJAXRequest(A), a.trigger("sc:ajaxupdate:succeed", f))
                    }
                }, function(a, b) {
                    var d = c.getParamValue("pageAction", f);
                    "load-infinite-sfl" !== d && c.reloadOnAjaxFailed(a, b, e.device.isApp);
                    h.callQ("error", {
                        pageAction: d,
                        status: b
                    })
                }, p, function() {
                    B();
                    h.callQ("complete");
                    l && l();
                    a.trigger("sc:ajaxupdate:complete")
                })
            },
            x = function(b,
                h, p, r, A, H) {
                p.push({
                    name: "actionItemID",
                    value: b.data("itemid")
                });
                p.push({
                    name: "actionType",
                    value: h
                });
                g("#sc-fresh-cart .sc-list-item[data-removed!\x3d'true']").each(function() {
                    var a = g(this);
                    p.push({
                        name: "activeItems",
                        value: m(a)
                    })
                });
                w();
                l.closeQuantityPopover(b);
                f.show();
                a.trigger("sc:ajaxupdate:start");
                return c.makeAjaxCall("/gp/cart/mobile/ajax-fresh-update.html" + (r ? "/ref\x3d" + r : ""), p, c.getAjaxTimeout(1E4), function(c) {
                    d.loadFreshPageData(c, p);
                    a.trigger("sc:ajaxupdate:succeed")
                }, function(a, b) {
                    c.reloadOnAjaxFailed(a,
                        b, e.device.isApp)
                }, A, function() {
                    H && H();
                    B();
                    f.close()
                })
            },
            q = function() {
                var b = [{
                    name: "displayedSavedItemNum",
                    value: g('#sc-saved-cart .sc-list-item[data-removed!\x3dtrue][data-itemtype\x3d"saved"]').length
                }];
                g("#sc-active-cart .sc-list-item[data-removed!\x3d'true']").each(function() {
                    var a = g(this);
                    e.features && "1" === e.features.enablePrimePantry ? a.attr("data-itemcategory") && "pantrybundle" === a.attr("data-itemcategory") ? b.push({
                            name: "activePantryBundle",
                            value: y(a)
                        }) : a.attr("data-itemcategory") && "pantry" ===
                        a.attr("data-itemcategory") ? b.push({
                            name: "activePantryItems",
                            value: m(a)
                        }) : b.push({
                            name: "activeItems",
                            value: m(a)
                        }) : b.push({
                            name: "activeItems",
                            value: m(a)
                        })
                });
                g("#sc-saved-cart .sc-list-item[data-removed!\x3d'true']").each(function() {
                    var a = g(this);
                    e.features && "1" === e.features.enablePrimePantry ? a.attr("data-itemcategory") && "pantrybundle" === a.attr("data-itemcategory") ? b.push({
                        name: "savedPantryBundle",
                        value: y(a)
                    }) : a.attr("data-itemcategory") && "pantry" === a.attr("data-itemcategory") ? b.push({
                        name: "savedPantryItems",
                        value: n(a)
                    }) : b.push({
                        name: "savedItems",
                        value: n(a)
                    }) : b.push({
                        name: "savedItems",
                        value: n(a)
                    })
                });
                if (e.features.enableMobileFLC && !e.features.enableBatching) {
                    var d = g("#sc-subtotals-breakdown .sc-subtotal-address input[name\x3daddressID]");
                    0 < d.length && (b.push({
                        name: "flcAddressId",
                        value: d.attr("value")
                    }), b.push({
                        name: "flcAddressZip",
                        value: d.data("addresszip")
                    }))
                }
                e.features.enableBatching && (b.push({
                    name: "enableBatching",
                    value: e.features.enableBatching
                }), b.push({
                    name: "batchTreeState",
                    value: JSON.stringify(t())
                }));
                e.features.enableCollapsedSFL && b.push({
                    name: "enableCollapsedSFL",
                    value: e.features.enableCollapsedSFL
                });
                e.features.enableAddedTimeGroupedSFL && b.push({
                    name: "groupSFLTreeState",
                    value: JSON.stringify({
                        addedWithInAWeek: g("#sc-group-content-AddedWithInWeek").is(":visible"),
                        addedWithInSixMonths: g("#sc-group-content-AddedWithInSixMonths").is(":visible"),
                        olderThanSixMonths: g("#sc-group-content-OlderThanSixMonths").is(":visible")
                    })
                });
                (d = c.getUrlParameter("mockTestCase")) && b.push({
                    name: "mockTestCase",
                    value: d
                });
                a.each(e.csrf, function(a, c) {
                    b.push({
                        name: c,
                        value: a
                    })
                });
                return b
            },
            t = function() {
                var a = g("#sc-batch-tree-state").text();
                return a && 0 < a.length && g.parseJSON(a)
            },
            m = function(a) {
                return [a.data("itemid"), a.data("giftable"), a.data("giftwrapped"), a.data("quantity"), a.data("price"), a.data("promotiontype"), a.data("discountprice"), a.data("installmentsselected"), a.data("installmentsprogram"), a.data("iscodavailable")].join("|")
            },
            n = function(a) {
                return [a.data("itemid"), a.data("price")].join("|")
            },
            y = function(a) {
                return [a.data("totalweight"),
                    a.data("totalitem")
                ].join("|")
            },
            w = function() {
                var a = [];
                a.push(g(".sc-list-item[data-removed\x3d'true']"));
                g.each(a, function(a, c) {
                    c.slideUp(500, function() {
                        c.remove()
                    })
                })
            },
            B = function() {
                function b() {
                    if (d && d.shouldDelay) d.retryLater = !0;
                    else {
                        var a = parseInt(g("#sc-buy-box").data("quantity"), 10);
                        isNaN(a) && (a = 0);
                        k.when("mash").execute(function(c) {
                            c.cart.didUpdate({
                                newCartQuantity: a,
                                successCallback: function() {},
                                failCallback: function(a) {}
                            })
                        })
                    }
                }
                if (!e.device.isApp) return function() {};
                var d = function() {
                    if ("iPhoneApp" ===
                        e.device.type) {
                        var d = {
                            shouldDelay: !1,
                            retryLater: !1
                        };
                        a.on("a:popover:beforeShow:imb_2nd_view", function(a) {
                            c.logUECounter("Cart:IMB:SecondaryView:Open");
                            d.shouldDelay = !0
                        });
                        a.on("a:popover:afterHide:imb_2nd_view", function(a) {
                            c.logUECounter("Cart:IMB:SecondaryView:Close");
                            d.shouldDelay = !1;
                            d.retryLater && (d.retryLater = !1, b())
                        });
                        return d
                    }
                }();
                return b
            }();
        B();
        var C = function() {
            var a = null,
                c = null,
                b = !1,
                d = !1;
            return {
                setAction: function(e, f, h) {
                    a = e;
                    c = f;
                    b = h;
                    d = !1
                },
                tryAbort: function(e) {
                    return null === c || d ? !0 : b && a !== e ?
                        (c.abort(), d = !0) : !1
                },
                isAborted: function() {
                    return d
                },
                setAjaxRequest: function(a) {
                    c = a
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
                h.addToQ("error", a)
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
            prepareForAppCheckout: function(b,
                d) {
                b = {
                    data: a.extend({
                        isToBeGiftWrapped: b,
                        "submit.before-checkout": 1
                    }, c.pick("isToBeGiftWrappedBefore", d), c.pick("hasPrimeGift", d), c.pick("cartItemIds", d)),
                    timeout: 15E3
                };
                f.show();
                return c.ajax("/gp/cart/ajax-update.html", b).done(f.close).fail(function(a, b) {
                    c.reloadOnAjaxFailed(a, b, e.device.isApp)
                })
            },
            takeBlockingCartUpdateAction: p,
            takeCartUpdateAction: v,
            takeCartActionForSingleItem: r,
            takeFreshCartActionForSingleItem: x,
            updateSNS: function(c, b, d) {
                b = [{
                        name: "submit.sns-change." + c.data("itemid"),
                        value: b
                    },
                    {
                        name: "pageAction",
                        value: "sns-change"
                    }
                ];
                return r(c, "sns-change", b, d, void 0, function() {
                    a.trigger("sc:ajaxupdate:cf")
                })
            },
            modifySnS: function(c, b, d) {
                b = [{
                    name: "submit.modify-sns." + c.data("itemid"),
                    value: b
                }, {
                    name: "pageAction",
                    value: "sns-modify"
                }];
                return r(c, "sns-modify", b, d, void 0, function() {
                    a.trigger("sc:ajaxupdate:cf")
                })
            },
            removeItem: function(a, c) {
                var b = [{
                    name: "submit.delete." + a.data("itemid"),
                    value: 1
                }, {
                    name: "pageAction",
                    value: "delete-" + a.data("itemtype")
                }];
                e.features.enabledPseudoPrime && b.push({
                    name: "isPrimeAsin",
                    value: a.data("isprimeasin")
                });
                a.data("related-item-ids") && b.push({
                    name: "relatedItems." + a.data("itemid"),
                    value: a.data("related-item-ids")
                });
                return r(a, "delete", b, c)
            },
            removeFreshItem: function(a, c, b, d) {
                var e = [{
                    name: "submit.fresh-delete." + a.data("itemid"),
                    value: 1
                }, {
                    name: "pageAction",
                    value: "fresh-delete-" + a.data("itemtype")
                }];
                return x(a, "delete", e, c, b, d)
            },
            saveItemForLater: function(a, c) {
                var b = [{
                    name: "pageAction",
                    value: "save-for-later"
                }, {
                    name: "submit.save-for-later." + a.data("itemid"),
                    value: 1
                }];
                e.features.enabledPseudoPrime &&
                    b.push({
                        name: "isPrimeAsin",
                        value: a.data("isprimeasin")
                    });
                return r(a, "save-for-later", b, c)
            },
            updateItemSelectionForCheckout: function(a, c, b) {
                b = [{
                    name: "pageAction",
                    value: "update-item-selection-for-checkout"
                }, {
                    name: "submit.update-item-selection-for-checkout." + a.data("itemid"),
                    value: 1
                }, {
                    name: "isSelectedForCheckout." + a.data("itemid"),
                    value: b
                }];
                return r(a, "update-item-selection-for-checkout", b, c)
            }
        }
    });
    k.when("A", "jQuery").register("CartUpdate-Load", function(a, c) {
        var b = {
            "success-critical": [],
            success: [],
            error: [],
            beforeSend: [],
            complete: []
        };
        return {
            addToQ: function(a, c) {
                b[a] && b[a].push(c)
            },
            callQ: function(a, c) {
                if (b[a]) {
                    a = b[a];
                    for (var f in a)
                        if (a.hasOwnProperty(f)) a[f](c)
                }
            }
        }
    });
    "use strict";
    k.when("A", "CartUpdate").register("CartUpdate-Remove", function(a, c) {
        var b = a.$,
            e = function(a) {
                var b = n.ue;
                b && b.count && b.count("delete:JavaCart", 1);
                var b = "ox_sc_",
                    b = "fresh" === a.data("itemcategory") ? b + "fresh_" : b + ("active" === a.data("itemtype") ? "cart_" : "sfl_"),
                    e;
                e = a.data("item-count");
                b = b + "delete_" + e;
                "fresh" === a.data("itemcategory") ?
                    c.removeFreshItem(a, b) : c.removeItem(a, b)
            };
        b("#content").delegate(".sc-list-item .sc-action-delete input[type\x3dsubmit]", "click", function(a) {
            a.preventDefault();
            a = c.getItem(b(this));
            e(a)
        });
        return {
            remove: e
        }
    });
    "use strict";
    k.when("A", "Cart", "CartUpdate", "CartPageSpinner", "CartServerSetting").execute(function(a, c, b, e, d) {
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
            l = function() {
                e.close()
            };
        a.declarative("sc-expand-saved-for-later",
            "click",
            function(a) {
                a.$event.preventDefault();
                d.features.enableCollapsedSFL = 0;
                c.logUECounter("Cart:AcceleratedExperience:CollapsedSavedForLater:Expand");
                b.takeBlockingCartUpdateAction(f, h, l, "ox_sc_expand_sfl")
            })
    });
    "use strict";
    k.when("A", "CartUpdate", "CartServerSetting").register("CartInfiniteLoading", function(a, c, b) {
        function e() {
            r.bind("scroll.inf", f).bind("touchstart.inf touchend.inf", k)
        }

        function d() {
            r.unbind("scroll.inf touchstart.inf touchend.inf")
        }

        function f() {
            h(0) && l()
        }

        function h(a) {
            if (0 >= g("#sc-saved-cart").find(".sc-pagination .sc-pagination-button.a-hidden").length) return !1;
            var c = 2 * r.height(),
                c = p.height() - c;
            return p.scrollTop() + r.height() + a >= c
        }

        function l() {
            c.takeBlockingCartUpdateAction([{
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
            r = g(n),
            p = g(document);
        if (b.features.enableInfiniteScroll) {
            var k = function(a) {
                var c, b;
                return function(a) {
                    if ("touchstart" ===
                        a.type) c = Date.now(), b = a.originalEvent.changedTouches[0].clientY;
                    else if ("touchend" === a.type) {
                        var d = Date.now() - c;
                        a = (b - a.originalEvent.changedTouches[0].clientY) / d / .0015;
                        0 < a && h(a) && l()
                    }
                }
            }();
            c.registerForAjaxError(function(a) {
                a && "load-infinite-sfl" === a.pageAction && (g("#sc-saved-cart").find(".sc-pagination .sc-loading").addClass("a-hidden"), "abort" !== a.status && g("#sc-saved-cart").find(".sc-pagination .sc-pagination-button.a-hidden").removeClass("a-hidden").bind("click", function() {
                    g(this).addClass("a-hidden").unbind("click");
                    l()
                }))
            });
            a.on("a:popover:beforeShow:imb_2nd_view", d);
            a.on("a:popover:afterHide:imb_2nd_view", e);
            e()
        }
    });
    "use strict";
    k.when("A", "jQuery", "Cart", "CartServerSetting", "CartUpdate").register("CartLightningDeal", function(a, c, b, e, d) {
        var f = function() {
                var a = [],
                    c = function(a) {
                        return "string" !== typeof a || "C" !== a.substr(0, 1) && "S" !== a.substr(0, 1) ? a : a.substr(1)
                    };
                return {
                    runTimer: function(b, d, e) {
                        b = c(b);
                        a[b] || (a[b] = setInterval(d, e), d())
                    },
                    removeTimer: function(b) {
                        b = c(b);
                        a[b] && (clearInterval(a[b]), delete a[b])
                    }
                }
            }(),
            h =
            function(a) {
                return c(".sc-list-item[data-itemid*\x3d" + a.substr(1) + "]").not("[data-removed]")
            },
            l = function() {
                c(".sc-list-item .sc-ld-timer").each(function(a, b) {
                    a = c(b);
                    var e = d.getItem(a),
                        l = e.data("itemid");
                    if (!a || !a.attr("pending")) {
                        var k = parseInt(a.attr("mstoexpiry"), 10),
                            q = (new Date).getTime();
                        a = function() {
                            return function() {
                                var a = h(l).find(".sc-ld-timer"),
                                    b = (new Date).getTime();
                                k -= b - q;
                                q = b;
                                if (0 >= k) f.removeTimer(l), d.takeCartActionForSingleItem(e, "refresh", [{
                                    name: "pageAction",
                                    value: "refresh"
                                }]);
                                else {
                                    var b =
                                        a.find("#sc-ld-minutes"),
                                        c = a.find("#sc-ld-seconds"),
                                        g = Math.floor(k / 6E4),
                                        w = Math.floor((k - 6E4 * g) / 1E3);
                                    b.html(10 > g ? "0" + g.toString() : g.toString());
                                    c.html(10 > w ? "0" + w.toString() : w.toString());
                                    a.is(":visible") || a.show();
                                    a.find(".sc-ld-timer-span").removeClass("a-hidden")
                                }
                            }
                        }();
                        f.runTimer(l, a, 1E3)
                    }
                })
            };
        l();
        c(document).ready(function() {
            var a = "";
            c("div.sc-list-item").each(function() {
                var b = c(this),
                    d = b.find(".sc-ld-timer");
                d && d.attr("pending") && (a += b.data("itemid") + ":" + b.data("asin") + ";")
            });
            a && setTimeout(function() {
                b.makeAjaxCall("/gp/cart/ajax-lightning-deal.html", [{
                    name: "itemMarks",
                    value: a
                }], 1E4, function(a) {
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b],
                            d = h(c.itemId);
                        (d = d && d.find(".sc-ld-timer")) && d.attr("pending") && (d.removeAttr("pending"), d.attr("mstoexpiry", c.msToExpiry), d.find(".sc-ld-static").addClass("a-hidden"))
                    }
                    l()
                })
            }, 1E3 * e.deals.delaySecondsForLightningDealUpdate)
        });
        d.registerForAjaxSuccess(function() {
            l()
        })
    });
    "use strict";
    k.when("A", "Cart", "CartPerfWrapper", "CartServerSetting", "BatchedActiveCartUpdater", "PageManipulator", "QuantityUpdatePopoverController",
        "Cart-Updates").register("LoadPageData", function(a, c, b, e, d, f, h, l) {
        function g(a, b) {
            a && "1" === a.removePrimeExperience && b()
        }

        function r(b, c) {
            var d = b.find(".sc-list-item-content"),
                e = b.find(".sc-list-item-removed-msg"),
                f = b.find('.sc-list-item-removed-msg div[data-action\x3d"' + c + '"]');
            c = e.outerHeight();
            e.removeClass("a-padding-mini").show();
            c += f.outerHeight();
            e.hide().addClass("a-padding-mini");
            a.animate(b, {
                height: c
            }, 500, "easeInOutQuad", function() {
                d.remove();
                e.show();
                f.show()
            })
        }

        function p(b, c) {
            a.animate(b.find(".sc-list-item-content"), {
                opacity: 0,
                scale: "0.4"
            }, 500, "linear", function() {
                r(b, c)
            })
        }

        function v(a, b) {
            b && b.itemcount && a.attr("data-item-count", b.itemcount);
            b && b.totalweight && a.attr("data-totalweight", b.totalweight);
            b && b.totalitem && a.attr("data-totalitem", b.totalitem)
        }

        function n(a, b, c, d) {
            1 === d ? a.find(".sc-list-body").append(b.html) : a.find(".sc-pantry-bundle-body").append(b.html)
        }
        var q = a.$,
            t, m = q.noop;
        k.when("nav.setCartCount").execute(function(a) {
            m = function(b) {
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
                g(b, function() {
                    a && a.user && a.user.changedPrimeStatus && "function" === typeof a.user.changedPrimeStatus && a.user.changedPrimeStatus({
                        primeStatus: a.user.PrimeStatus && a.user.PrimeStatus.NONE ? a.user.PrimeStatus.NONE : 1
                    })
                })
            }
        });
        var B = function(a) {
                if (a) {
                    var b = q("#sc-active-cart");
                    a.refreshfeature ? b.replaceWith(a.featurehtml) : a.manipulations ? q.each(a.manipulations, function(a,
                        b) {
                        f.perform(b)
                    }) : (D(b, a.items, "activeCart", 1), a.listCaption && b.find(".sc-list-caption").replaceWith(a.listCaption), a.pagination && b.find(".sc-pagination").replaceWith(a.pagination), a.divider && b.find(".sc-divider-wrapper").replaceWith(a.divider))
                }
            },
            C = function(a) {
                if (a) {
                    var b = q("#sc-saved-cart");
                    a.refreshfeature ? b.replaceWith(a.featurehtml) : a.manipulations ? q.each(a.manipulations, function(a, b) {
                        f.perform(b)
                    }) : (D(b, a.items, "savedCart", 1), a.listCaption && b.find(".sc-list-caption").replaceWith(a.listCaption),
                        a.pagination && b.find(".sc-pagination").replaceWith(a.pagination))
                }
            },
            D = function(a, b, c, d) {
                if (a && b) {
                    var f = [];
                    q.each(b, function(b, g) {
                        b = g.ispantrybundle ? a.find(".sc-pantry-bundle") : a.find(".sc-list-item[data-itemid\x3d'" + g.id + "']");
                        "remove" === g.operation ? g.ispantrybundle ? (b.attr("data-removed", "true"), b.find(".sc-pantry-bundle-content").remove(), b.find(".sc-pantry-bundle-body-header").remove(), b.find(".sc-pantry-bundle-body").remove(), b.find(".sc-pantry-bundle-removed-msg").show(), b.find(".sc-pantry-bundle-removed-msg div").show()) :
                            F("actionItemID") === g.id ? (g = F("actionType"), e.features.enableDeleteAnimate && "delete" === g || (b.find(".sc-list-item-content").remove(), b.find(".sc-list-item-removed-msg").show()), b.attr("data-removed", "true"), e.features.enableDeleteAnimate && "delete" === g ? p(b, g) : b.find('.sc-list-item-removed-msg div[data-action\x3d"' + g + '"]').show()) : b.remove() : "replace" === g.operation ? g.ispantrybundle ? (v(b, g), b.find(".sc-pantry-bundle-content").replaceWith(g.headerhtml), D(b, g.subItems, c, d + 1)) : (b.replaceWith(g.html), F("actionItemID") ===
                                g.id && h.showQuantityPopover(q(".sc-list-item[data-itemid\x3d" + g.id + "]"))) : "insert" === g.operation ? f.push(g) : g.ispantrybundle ? v(b, g) : (b.attr("data-item-count", g.itemcount), b.data("item-count", g.itemcount))
                    });
                    var g;
                    q.each(f, function(b, e) {
                        g = !1;
                        a.find(".sc-list-item[data-removed!\x3d'true']").each(function(a, b) {
                            b = q(b);
                            a = b;
                            var c = l.isItemPositionBeforeCurrentItem(e.itemcount, a.data("item-count"), "\x3c");
                            1 === d ? (c && (c = "normal" === a.data("itemcategory") || "pantrybundle" === a.data("itemcategory")), a = c) : a = c && "pantry" ===
                                a.data("itemcategory");
                            if (a) return b.before(e.html), g = !0, !1
                        });
                        g || n(a, e, c, d)
                    })
                }
            },
            G = function(a, b, c) {
                (b = c.features[b]) && (b.refreshfeature ? q(a).replaceWith(b.featurehtml) : b.manipulations && q.each(b.manipulations, function(a, b) {
                    f.perform(b)
                }))
            },
            z = function(a, b) {
                G("#sc-" + a, a, b)
            },
            F = function(a) {
                for (var b = 0; b < t.length; b++)
                    if (t[b].name === a) return t[b].value;
                return null
            };
        return {
            loadCriticalPageData: function(a, c) {
                t = c;
                a.features && (a.features["fresh/collapsed-view"] ? G("#sc-fresh-buy-box", "fresh/collapsed-view", a) :
                    (c = q("#sc-fresh-buy-box"), c.is(":empty") && c.empty()), z("buy-box", a), e.features.wrapCartPerf ? b.x2LoadedForAJAXRequest() : CartPerf.x2LoadedForAJAXRequest(), (c = a.features["active-cart"]) && e.features.enableBatching ? (d.update(c), c = q('.sc-list-item[data-itemid\x3d"' + c.actionItemID + '"]'), h.showQuantityPopover(c)) : B(c), e.features.wrapCartPerf ? (0 < u(a.features["nav-cart"]) && b.x1LoadedForAJAXRequest(), b.x3LoadedForAJAXRequest()) : (0 < u(a.features["nav-cart"]) && CartPerf.x1LoadedForAJAXRequest(), CartPerf.x3LoadedForAJAXRequest()),
                    z("cart-header", a), z("emi-messages", a), z("trust-message", a), z("affordability-widget", a), z("incentivized-cart-widget", a), m(a.features["nav-cart"]), a = a.features["nav-cart"], e.features.enabledPseudoPrime && (y(a), w(a)))
            },
            loadNonCriticalPageData: function(a, d) {
                t = d;
                a.features && (C(a.features["saved-cart"]), 0 >= u(a.features["nav-cart"]) && (e.features.wrapCartPerf ? b.x1LoadedForAJAXRequest() : CartPerf.x1LoadedForAJAXRequest()), z("continue-shopping", a), z("authportal-migration", a), z("upsell", a), z("pantry-dyf", a),
                    (a = a.features["mock-test-case"]) && c.setUrlParameter("mockTestCase", a))
            },
            loadFreshPageData: function(a, b) {
                t = b;
                if (a.features) {
                    (b = a.features["fresh/full-view/info-container"]) && b.refreshfeature && q("#sc-fresh-info-container").replaceWith(b.featurehtml);
                    (b = a.features["fresh/full-view/subtotal-container"]) && b.refreshfeature && q("#sc-fresh-subtotal-container").replaceWith(b.featurehtml);
                    if (b = a.features["fresh/full-view/fresh-active-cart"]) {
                        var c = q("#sc-fresh-cart");
                        b.refreshfeature ? c.replaceWith(b.featurehtml) :
                            D(c, b, "freshCart", 1)
                    }
                    m(a.features["nav-cart"])
                }
            }
        }
    });
    "use strict";
    k.when("A", "CartUpdate").execute("CartUpdate-MoveToCart", function(a, c) {
        var b = a.$;
        b("#content").delegate(".sc-list-item .sc-action-move-to-cart input[type\x3dsubmit]", "click", function(a) {
            a.preventDefault();
            a = c.getItem(b(this));
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
            c.takeCartActionForSingleItem(a,
                "move-to-cart", f, d)
        })
    });
    "use strict";
    k.when("jQuery", "CartUpdate", "CartServerSetting").register("CartPagination", function(a, c, b) {
        b.features.enableInfiniteScroll || a("#content").delegate("#sc-saved-cart .sc-pagination button", "click", function() {
            c.takeBlockingCartUpdateAction([{
                    name: "submit.load-infinite-sfl",
                    value: 1
                }, {
                    name: "pageAction",
                    value: "load-infinite-sfl"
                }], function() {
                    a("#sc-saved-cart .sc-pagination .sc-pagination-button").hide();
                    a("#sc-saved-cart .sc-pagination .sc-loading").removeClass("a-hidden")
                },
                function() {
                    a("#sc-saved-cart .sc-pagination .sc-pagination-button").show();
                    a("#sc-saved-cart .sc-pagination .sc-loading").addClass("a-hidden")
                }, "ox_page_sfl", !0)
        })
    });
    "use strict";
    k.when("jQuery", "CartUpdate").register("CartUpdate-PantryBulkMoveToCart", function(a, c) {
        a("#content").delegate(".sc-action-pantry-bulk-move-to-cart input[type\x3dsubmit]", "click", function(b) {
            b.preventDefault();
            b = a("#sc-saved-cart .sc-pantry-bundle");
            c.takeCartActionForPantryBundle(b, [{
                name: "submit.pantry-bulk-move-to-cart",
                value: 1
            }, {
                name: "pageAction",
                value: "pantry-bulk-move-to-cart"
            }], "ox_sc_pantry_mtc")
        })
    });
    "use strict";
    k.when("jQuery", "CartUpdate").register("CartUpdate-PantryBulkSaveForLater", function(a, c) {
        a("#content").delegate(".sc-action-pantry-bulk-save-for-later input[type\x3dsubmit]", "click", function(b) {
            b.preventDefault();
            b = a("#sc-active-cart .sc-pantry-bundle");
            c.takeCartActionForPantryBundle(b, [{
                name: "submit.pantry-bulk-save-for-later",
                value: 1
            }, {
                name: "pageAction",
                value: "pantry-bulk-save-for-later"
            }], "ox_sc_pantry_sfl")
        })
    });
    "use strict";
    k.when("A", "CartServerSetting", "a-sheet").register("CartPantryDYF-BottomSheet", function(a, c, b) {
        if (c && c.features && c.features.enabledPantryDYF) {
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
                    var a = b.get("pantry-dyf-bs");
                    return a ? a : null
                },
                h = function() {
                    var a = f();
                    if (d && a) return a;
                    d = !0;
                    return b.create(e)
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
                        var a =
                            f();
                        a && a.$container && a.$container.remove()
                    }
                    d = !1
                }
            }
        }
    });
    "use strict";
    k.when("A", "a-carousel-framework", "CartServerSetting", "CartUpdate", "CartPageSpinner", "CartPantryDYF-BottomSheet", "CartUpdate-PantryMetrics").execute(function(a, c, b, e, d, f, h) {
        b && b.features && b.features.enabledPantryDYF && (b = function() {
            f.reset();
            var b = document.getElementById("pantry-dyf");
            null !== b && (h.logMetrics({
                pageWidget: "DYF",
                uiAction: "GlanceView"
            }), a.delay(function() {
                a.get("/gp/pantry/ajax/get-dyf-carousel.html", {
                    cache: !1,
                    success: function(c) {
                        b.innerHTML =
                            c;
                        b.className = a.trim(b.className.replace(/(?:^|\b)a-popover-loading(?:\b|$)/g, ""))
                    }
                })
            }, 100))
        }, a.on("sc:ajaxupdate:succeed", b), a.declarative("sc-pantry-dyf", "click", function(a) {
            a.$event.preventDefault();
            f.show();
            h.logMetrics({
                pageWidget: "DYF",
                uiAction: "OpenBottomSheet"
            })
        }), a.on("a:sheet:afterShow:pantry-dyf-bs", function(a) {
            c.createAll()
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
            }, "pantry_cart_dyf")
        }), b())
    });
    "use strict";
    k.when("A", "CartServerSetting").register("CartUpdate-PantryMetrics", function(a, c) {
        if (c && c.features && c.features.enabledPantryDYF) return {
            logMetrics: function(b, e) {
                b.pageType = "ShoppingCart" +
                    (c.device.isApp ? "Webview" : "AW");
                b = {
                    pageType: b.pageType,
                    subPageType: b.pageWidget,
                    eventData: JSON.stringify(b)
                };
                a.post(e ? "/gp/pantry/ajax/log-nexus-message-with-cart.html" : "/gp/pantry/ajax/log-nexus-message.html", {
                    params: b
                })
            }
        }
    });
    "use strict";
    k.when("A", "CartServerSetting", "CartUpdate-Remove", "CartUpdate-SaveForLater").execute("CartUpdate-Popover", function(a, c, b, e) {
        var d = a.$,
            f = function(a) {
                a = a.attr("name").split(/[. ]+/).pop();
                return d('div[data-itemid\x3d"' + a + '"]')
            };
        c.features.enabledPseudoPrime && (d("body").delegate(".sc-action-delete-popover input[type\x3dsubmit]",
            "touchend click",
            function(a) {
                a.preventDefault();
                a = f(d(this));
                b.remove(a)
            }), d("body").delegate(".sc-action-save-for-later-popover input[type\x3dsubmit]", "touchend click", function(a) {
            a.preventDefault();
            a = f(d(this));
            e.saveForLater(a)
        }))
    });
    "use strict";
    k.when("A", "a-modal", "CartUpdate", "CartServerSetting", "Cart").execute("CartUpdate-Quantity", function(a, c, b, e, d) {
        var f = a.$,
            h = /^\d+$/,
            l = /^0{2,}/,
            g = /^0+(\d+)/,
            k = e && e.features && 1 === e.features.enableMinimumOrderQuantity,
            p = e && e.features && 1 === e.features.disableUpdateUserQuantityToMOQ;
        a.on("a:dropdown:selected:quantity", function(a) {
            var c = f(a.selectNode),
                d = c.closest(".sc-action-quantity");
            if (k) {
                var e = c.closest(".sc-list-item").data("minquantity");
                parseInt(a.value, 10) === parseInt(e, 10) + 9 ? u(c, d) : v(b.getItem(c), a.value)
            } else "10" === a.value ? u(c, d) : v(b.getItem(c), a.value)
        });
        a.declarative("sc-update-quantity", "click", function(a) {
            var c = a.data.quantity,
                d = a.data.type;
            v(b.getItem(a.$target), c, d)
        });
        f("#content").delegate(".sc-action-quantity .sc-update-link", "click", function() {
            var a = f(this),
                c = b.getItem(a),
                a = a.closest(".sc-action-quantity").find(".sc-quantity-textfield input").val();
            c.find(".sc-action-quantity input").blur();
            v(c, a)
        });
        f("#content").delegate(".sc-quantity-textfield input", "focus", function() {
            var b = f(this);
            1 > a.trim(b.val()).length && y(b);
            setTimeout(function() {
                b.select()
            }, 100);
            x(b)
        });
        f("#content").delegate(".sc-quantity-textfield input", "keydown", function(a) {
            return 48 <= a.which && 57 >= a.which || 96 <= a.which && 105 >= a.which || 8 === a.which || 46 === a.which || 9 === a.which
        });
        f("#content").delegate(".sc-quantity-textfield input",
            "keyup",
            function(a) {
                var c = f(this),
                    e = c.val();
                e && c.val(d.getValidQuantityNumber(e));
                13 === a.which ? (c.blur(), m(c) && v(b.getItem(c), c.val())) : x(f(this))
            });
        f(document).delegate(".quantity-options a", "click", function(a) {
            var b = a.target,
                d = b.dataset.value,
                b = f(b).parents(".sc-dropdown").data("itemid"),
                e = f(".sc-list-item[data-itemid\x3d" + b + "]");
            v(e, d);
            c.get(f("#quantity-label-" + b)).hide();
            a.preventDefault()
        });
        var v = function(a, c, d) {
            var f = "ox_sc_";
            d = d ? d + "_" : "";
            e.features.enableFreshCart && "fresh" === a.data("itemcategory") &&
                (f += "fresh_");
            var g;
            g = a.data("item-count");
            d = f + "update_quantity_" + d + g;
            if (0 === parseInt(c, 10))(c = n.ue) && c.count && c.count("quantityDelete:JavaCart", 1), e.features.enableFreshCart && "fresh" === a.data("itemcategory") ? b.removeFreshItem(a, d) : b.removeItem(a, d);
            else if (p || (f = a.data("minquantity"), 0 < parseInt(c, 10) && parseInt(c, 10) < parseInt(f, 10) && (c = f)), e.features.enableFreshCart && "fresh" === a.data("itemcategory")) c = [{
                name: "quantity." + a.data("itemid"),
                value: c
            }, {
                name: "pageAction",
                value: "fresh-quantity"
            }, {
                name: "submit.fresh-quantity." +
                    a.data("itemid"),
                value: 1
            }], b.takeFreshCartActionForSingleItem(a, "fresh-quantity", c, d, void 0, void 0);
            else {
                if (0 >= parseInt(c, 10)) throw Error("SHOULD NOT: quantity LE 0");
                f = [{
                    name: "quantity." + a.data("itemid"),
                    value: c
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
                g && (d = d + "|" + g + "|" + c);
                b.takeCartActionForSingleItem(a, "update-quantity", f, d)
            }
        };
        f("#content").delegate(".sc-quantity-textfield input",
            "input",
            function() {
                x(f(this))
            });
        f("#content").delegate(".sc-quantity-textfield input", "blur", function() {
            var c = f(this);
            1 > a.trim(c.val()).length ? y(c) : !m(c) || "iPhoneApp" !== e.device.type && "iPadAppPopOver" !== e.device.type || v(b.getItem(c), c.val())
        });
        var x = function(b) {
                var c = a.trim(b.val());
                h.test(c) ? (b.val(t(c)), m(b) ? (b = b.closest(".sc-action-quantity"), b.find(".sc-update-link").removeClass("sc-hidden"), b.find(".sc-quantity-update-button").removeClass("a-hidden")) : q(b)) : q(b)
            },
            q = function(a) {
                a = a.closest(".sc-action-quantity");
                a.find(".sc-update-link").addClass("sc-hidden");
                a.find(".sc-quantity-update-button").addClass("a-hidden")
            },
            t = function(a) {
                return l.test(a) ? "0" : g.test(a) ? a.replace(g, "$1") : a
            },
            m = function(a) {
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
    k.when("A", "CartUpdate").register("CartUpdate-SaveForLater", function(a, c) {
        var b = a.$,
            e = function(a) {
                var b = "ox_sc_mtsfl_" + a.data("item-count");
                c.saveItemForLater(a, b)
            };
        b("#content").delegate(".sc-list-item .sc-action-save-for-later input[type\x3dsubmit]", "click", function(a) {
            a.preventDefault();
            a = c.getItem(b(this));
            e(a)
        });
        return {
            saveForLater: e
        }
    });
    "use strict";
    k.when("A", "CartServerSetting", "CartUpdate").execute("CartUpdateItemSelectionForCheckout", function(a, c, b) {
        if (c.features.enablePartialCheckout) {
            var e =
                a.$;
            e("#content").delegate(".sc-list-item .sc-item-check-checkbox input[type\x3dcheckbox]", "click", function(a) {
                var f = b.getItem(e(this));
                a = a.target.checked;
                var h = "ox_sc_update_isSelectedForCheckout_" + f.data("item-count");
                c.features.enableFreshCart && "fresh" === f.data("itemcategory") || b.updateItemSelectionForCheckout(f, h, a)
            })
        }
    });
    "use strict";
    k.when("CartServerSetting").execute(function(a) {
        a.device.isApp && !a.features.deprecateMashNavigateOnMobileApp ? k.when("mash").register("CartNavigateToCheckout", function(c) {
            return {
                navigate: function(b) {
                    c.navigate({
                        url: b,
                        failCallback: function(c) {
                            n.ueLogError && n.ueLogError(c, {
                                logLevel: "ERROR",
                                attribution: "mash navigate fail"
                            });
                            a.features.enableUnifyPTCExperience && (n.location.href = b)
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
    k.when("A", "Cart", "CartNavigateToCheckout", "CartPageSpinner", "CartServerSetting").register("CartCheckout", function(a, c, b, e, d) {
        function f(a, b) {
            c.makeAjaxCall("/gp/cart/ajax-update.html", a, c.getAjaxTimeout(15E3), function() {
                e.close();
                b && b()
            }, function(a, b) {
                c.reloadOnAjaxFailed(a, b, d.device.isApp)
            }, function(a) {
                e.show()
            })
        }

        function h(a, b) {
            b && (a += "?" + l.param(b));
            return a
        }
        var l = a.$;
        l("#content").delegate("#sc-proceed-to-checkout-params-form", "submit", function(a) {
            a.preventDefault();
            a = l(a.target);
            var c = a.attr("action");
            a = a.serializeArray();
            var e = c.match("addon-confirm") || c.match("pantry-interstitial");
            d.features.enableUnifyPTCExperience || !d.device.isApp || e ? (c = h(c, a), b.navigate(c)) : (a.push({
                name: "submit.before-checkout",
                value: 1
            }), f(a,
                function() {
                    b.navigate(c)
                }))
        });
        l("#content").delegate("#sc-buy-box button[name\x3d'proceedToCheckout']", "click", function(a) {
            var e = l(a.target);
            a.preventDefault();
            a = e.closest("form");
            var p = a.attr("action");
            a = a.serializeArray();
            if (d.features.enableMobileFLC) {
                var k = {
                        addressID: "1"
                    },
                    n = [];
                l.each(a, function(a, b) {
                    k[b.name] && n.push(b)
                });
                0 < n.length && (p += -1 < p.indexOf("?") ? "\x26" : "?", p += l.param(n));
                l("#sc-mflc-hasexpandedsubtotals").length ? c.logUECounter("hasExpandedSubtotalsBeforePTC") : c.logUECounter("hasNotExpandedSubtotalsBeforePTC")
            }
            d.features.enableUnifyPTCExperience ?
                (a.push({
                    name: "proceedToCheckout",
                    value: 1
                }), p = h(p, a), b.navigate(p)) : (a.push({
                    name: "submit.before-checkout",
                    value: 1
                }), f(a, function() {
                    b.navigate(p)
                }))
        })
    });
    "use strict";
    k.when("A").execute(function(a) {
        var c = a.$;
        a.declarative("vpc_clip_coupon", ["click", "tap"], function(a) {
            function e(a) {
                c(g).hide();
                c(k).removeClass("vpc-invisible");
                c(k).show()
            }
            var d = a.data.promo_id,
                f = a.data.item_asin,
                h = ".vpc-unclipped-coupon-" + d,
                l = ".vpc-clipped-coupon-" + d,
                g = "#vpc-unclipped-coupon-" + f,
                k = "#vpc-clipped-coupon-error-" + f;
            c.ajax({
                type: "GET",
                url: "/gp/promotions/vpc/ref\x3dox_sc_clip_coupon?promoId\x3d" + d + "\x26source\x3d" + a.data.section + "_" + a.data.device + "_" + f + "_" + a.data.button_color,
                success: function(a) {
                    -1 < a.indexOf("SUCCESS") || -1 < a.indexOf("REDEEMED") ? (c(h).hide(), c(l).removeClass("vpc-invisible"), c(l).show()) : e(a)
                },
                error: e
            });
            a.$event.preventDefault();
            a.$event.stopImmediatePropagation();
            a.$event.stopPropagation()
        })
    });
    "use strict";
    k.when("A", "CartUpdate", "CartBottomSheetBackgroundScroller", "CartPageSpinner", "ComparisonWidget", "ready").execute("ComparisonWidget-AddToCart",
        function(a, c, b, e, d) {
            var f = a.$;
            a.declarative("comparison-in-cart-mobile-atc-action", "click", function(a) {
                var l = [{
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
                b.enablePageScrolling();
                e.show();
                c.takeCartUpdateAction(l, f.noop, f.noop, a).always(function() {
                    e.close();
                    d.hideComparisonSheet()
                })
            })
        });
    "use strict";
    k.when("A", "CartBottomSheetBackgroundScroller", "a-sheet", "ready").register("ComparisonWidget", function(a,
        c, b) {
        function e(a) {
            var c = b.get("comparison-sheet");
            c || (a = {
                name: "comparison-sheet",
                preloadDomId: a.sheetPreloadDomId,
                height: 450,
                closeType: "message",
                closeMessage: a.sheetCloseMessage.toUpperCase(),
                sheetType: "web"
            }, c = b.create(a));
            return c
        }

        function d(a) {
            var c = b.get("comparison-sheet");
            c.$container.find("#comparison-view-content").html(a);
            a = c.$container.find("#comparison-view-content").outerHeight();
            c.changeHeight({
                height: Math.max(450, a)
            })
        }
        var f = a.$;
        a.declarative("comparison-in-cart-sheet", "click", function(a) {
            var b =
                e(a.data);
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
            c.disablePageScrolling()
        });
        a.on("a:sheet:afterShow:comparison-sheet", function(a) {
            a = a.sheet;
            0 === a.$container.find("#comparison-view-content").html().length && (a = a.$container.find("#comparison-bottom-sheet-spinner-container").html(), d(a))
        });
        a.on("a:sheet:afterHide:comparison-sheet",
            function(a) {
                c.enablePageScrolling();
                a.sheet.$container.find("#comparison-view-content").empty()
            });
        return {
            hideComparisonSheet: function() {
                var a = b.get("comparison-sheet");
                a && a.hide()
            }
        }
    });
    "use strict";
    k.when("A", "a-sheet", "Cart", "CartBottomSheetBackgroundScroller", "CartUpdate").register("ContentSlotDetails", function(a, c, b, e, d) {
        function f(b) {
            b.features && b.features["content-slot"] && (b = b.features["content-slot"].featurehtml, void 0 === b && (b = ""), k("#rcx-sc-content-slot-container").replaceWith(b), a.trigger("sc:c2_content_slot:content_slot_update",
                b))
        }

        function h(a) {
            b.logUECounter("Cart:ContentSlot:" + a)
        }

        function l(a) {
            h("BottomSheetLoadStarted");
            k.ajax({
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
            k("#sc-content-slot-bottom-sheet").html(a)
        }
        var k = a.$;
        a.declarative("sc-click-content-slot", "click", function(a) {
            h("WidgetClicked");
            (a = c.get("content_slot_bottom_sheet")) ? h("GetExistingBottomSheet"):
                (h("CreateNewBottomSheet"), k("body").append('\x3cdiv id\x3d"sc-content-slot-bottom-sheet"\x3e\x3c/div\x3e'), (a = k("#sc-content-slot-pre-loaded-dom-id").val()) && g(k("#" + a).html()), a = c.create({
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
            (a = k("#sc-content-slot-on-after-load-portlet-path").val()) && l(a)
        });
        d.registerForAjaxSuccess(f);
        return {
            updateContentSlotOnUpdate: f
        }
    });
    k.when("A", "ContentSlotDetails").register("ContentSlotDetailsCfs", function(a, c) {
        function b(a, b) {
            var c = e("#rcx-sc-content-slot-container span[data-action\x3dsc-batch-launch-rec-widget]");
            0 < c.length && (a = c.attr("data-sc-batch-launch-rec-widget").replace(a, b), c.attr("data-sc-batch-launch-rec-widget",
                a))
        }
        var e = a.$;
        a.on("sc:batch_rec:after_load_done", function() {
            b("cart_cs_cfs_srch", "cart_cs_cfs_no_recs_srch")
        });
        a.on("sc:batch_rec:after_load_fail", function() {
            b("cart_cs_cfs_srch", "cart_cs_cfs_fail_recs_srch")
        })
    });
    "use strict";
    k.when("A", "Cart", "CartServerSetting", "a-secondary-view").execute(function(a, c, b, e) {
        function d(a) {
            a.find(".sc-subtotal-address").hide();
            a.find(".sc-spinner:first").hide();
            a.find(".sc-subtotal-error").show();
            a.find(".sc-flc-content").show();
            u = 0
        }

        function f() {
            return m("#sc-subtotals-breakdown")
        }

        function h() {
            var a = m("#sc-android-pinned-buy-box-wrapper");
            if (0 < a.length) {
                var b = a.find("#sc-android-pinned-buy-box");
                a.height(b.outerHeight())
            }
        }

        function l() {
            m("#sc-cart-flc-addr-popover-trigger a").focus()
        }

        function g(a, b, c, d) {
            var e = m("#sc-android-pinned-buy-box-wrapper");
            d = {
                duration: "fast",
                complete: d,
                queue: "false"
            };
            if ("up" === c) a.slideUp(d);
            else if ("down" === c) a.slideDown(d);
            else return;
            0 < e.length && e.animate({
                height: b
            }, d)
        }

        function k() {
            var a = f(),
                b = m("#sc-mflc-expander-icon");
            g(a, w.collapsed, "up", function() {
                b.removeClass("a-icon-section-collapse");
                b.addClass("a-icon-section-expand");
                u = 0;
                h()
            })
        }

        function p() {
            var a = f(),
                b = m("#sc-mflc-expander-icon");
            g(a, w.expanded, "down", function() {
                b.removeClass("a-icon-section-expand");
                b.addClass("a-icon-section-collapse");
                u = 0;
                h();
                l()
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
            if (!b.features.enableBatching) {
                var h = m(".sc-subtotal-address input[name\x3daddressID]");
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
            var h = m("#sc-buy-box .sc-gift input[type\x3dcheckbox]"),
                l = m("#sc-buy-box .sc-gift input[type\x3dhidden][name\x3disToBeGiftWrappedBefore]");
            g.push({
                name: "showGiftCheckbox",
                value: 0 < h.length ? 1 : 0
            });
            g.push({
                name: "cartHasGiftableItems",
                value: l.attr("value") ? 1 : 0
            });
            g.push({
                name: "giftCheckoxIsChecked",
                value: h.is(":checked") ? 1 : 0
            });
            0 < m("#sc-android-pinned-buy-box").length && g.push({
                name: "isPinnedBuyBox",
                value: 1
            });
            f = f && f.reftag;
            y || (y = 1, f && (f += "-firstload"));
            c.makeAjaxCall("/gp/cart/ajax-load-flc.html" + (f ? "/ref\x3d" + f : ""), g, 3E4, function(b) {
                c.logUECounter("loadFLCAjaxSuccess");
                if (b.features && b.features["buy-box"]) {
                    c.logUECounter("loadFLCAjaxSuccessHasContent");
                    b = b.features["buy-box"];
                    var e = m("#sc-buy-box"),
                        f = e.find(".sc-imb");
                    e.replaceWith(b.featurehtml);
                    m("#sc-imb-placeholder").replaceWith(f);
                    a()
                } else b.features && b.features["android-mini-buy-box"] ? (c.logUECounter("loadFLCAjaxSuccessHasPinnedContent"),
                    b = b.features["android-mini-buy-box"], m("#sc-android-pinned-buy-box-wrapper").replaceWith(b["android-pinned-buy-box-wrapper"]), m("#sc-buy-box").replaceWith(b["buy-box"]), a()) : d && d(m("#sc-subtotals-breakdown"))
            }, function(a) {
                c.logUECounter("loadFLCAjaxFailure");
                d && d(m("#sc-subtotals-breakdown"))
            }, function() {
                e && e()
            }, function() {})
        }

        function q(a, b) {
            a.find(".sc-flc-zip-error").hide();
            a.find("input[name\x3dzipcode]").addClass("a-form-error");
            a.find(b).show()
        }

        function t(b, e, f) {
            function g(a) {
                b.find(".sc-city-section").replaceWith(a.html);
                1 > a.citynum ? q(b, ".sc-no-city-found") : 1 === a.citynum && (e && e.hide(), a = {
                    addressid: "new",
                    addresszip: b.find(".sc-city-section input[name\x3daddressZip]:checked").attr("value"),
                    reftag: f
                }, x(p, d, n, a))
            }
            var h = b.find("input[name\x3dzipcode]");
            b.find(".a-button");
            b.find(".sc-zipcode-required");
            (h = a.trim(h.attr("value"))) ? c.makeAjaxCall("/gp/cart/ajax-load-zipcode-cities.html/ref\x3dcart_cart_loadZipCities", [{
                name: "zipcode",
                value: h
            }], 5E3, g, function() {}, function() {
                b.find("input[name\x3dzipcode]").removeClass("a-form-error");
                b.find(".sc-flc-zip-error").hide()
            }, function() {}): q(b, ".sc-zipcode-required")
        }
        if (b.features.enableMobileFLC) {
            var m = a.$,
                u = 0,
                y = 0,
                w = {
                    collapsed: "100px",
                    spinner: "158px",
                    expanded: "304px"
                };
            a.declarative("sc-mobile-flc-expander", ["click"], function(a) {
                u || (u = 1, a = f(), a.is(":visible") ? k() : 0 < a.find(".sc-mflc-call-ajax").length ? x(p, d, n, {
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
                })) : t(b.closest(".sc-zipcode-option"), f, a)
            });
            a.on("a:popover:afterHide:mobile-flc-address-select",
                function(a) {
                    setTimeout(l, 500)
                })
        }
    });
    "use strict";
    k.when("A", "mash", "Cart", "FreshCheckout").execute(function(a, c, b, e) {
        function d(a) {
            b.logUECounter("Fresh:Pickup:Checkout:PermissionsFailure")
        }

        function f(a) {
            h = a.permission
        }
        var h;
        a.declarative("sc-fresh-redirect-to-permissions", "click", function(a) {
            a = a.data.forward;
            "notDetermined" === h ? (b.logUECounter("Fresh:Pickup:Checkout:ToGeosettings"), a = document.location.origin + "/fresh/geosettings/enable?permission\x3dnotDetermined\x26forward\x3d" + encodeURIComponent(a +
                "\x26CheckoutPermissionsIntercept\x3d1"), c.navstack.begin().modalOpen(a).end()) : (b.logUECounter("Fresh:Pickup:Checkout:ToCheckout"), e.navigateToCheckout(document.location.origin + a))
        });
        k.when("location-permission", "ready").execute(function(a) {
            a.locationPermissionStatus({
                successCallback: f,
                failCallback: d
            })
        })
    });
    "use strict";
    k.when("A", "mash", "CartServerSetting", "CartPageSpinner").register("FreshCheckout", function(a, c, b, e) {
        function d(a) {
            c.navigate({
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
        if (b.device.isApp) {
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
    k.when("A", "jQuery", "CartServerSetting", "CartPageSpinner", "a-button").register("FreshCart", function(a, c, b, e, d) {
        b.device.isApp || c("#content").delegate("#sc-fresh-buy-box-pmods-button",
            "click",
            function(a) {
                d(a.currentTarget).isEnabled() && e.show()
            })
    });
    "use strict";
    k.when("Cart", "A").register("imb-stats", function(a, c) {
        var b = c.$;
        if (0 < b(".sc-imb").length) {
            var e = !1;
            c.on("a:popover:show:imb_2nd_view", function f() {
                e = !0;
                a.logClientEvent("imb-seen");
                c.off("a:popover:show:imb_2nd_view", f)
            });
            c.on("sc:ajaxupdate:start", function h(b) {
                b = a.getParamValue("pageAction", b);
                b = ["imb", e ? "seen" : "not-seen", b].join("-");
                a.logClientEvent(b);
                c.off("sc:ajaxupdate:start", h)
            })
        }
    });
    "use strict";
    k.when("A", "jQuery",
        "CartServerSetting", "mash").register("CartItemAppLink", function(a, c, b, e) {
        a.declarative("app-link", ["click"], function(a) {
            var b = "img" === a.targetTag && a.$target.parent().is("a") && a.$target.parent().hasClass("ags-badge-link"),
                h = a.$target.hasClass("sc-suppress-item-dp-link") || a.$target.parent().is("a") && a.$target.parent().hasClass("sc-suppress-item-dp-link");
            "a" === a.targetTag && !a.$event.target.href.match("void") || b || h || (b = a.data.url, a = a.data["offer-listing-page-asin"], "string" === typeof b && 0 < (b = c.trim(b)).length ?
                e.navigate({
                    url: b
                }) : "string" === typeof a && 0 < (a = c.trim(a)).length && e.showOfferListingPage({
                    asin: a
                }))
        });
        c("#content").delegate("#sc-saved-cart .sc-lowest-price-offer", "click", function(a) {
            var b = c(this).attr("data-asin");
            e.showOfferListingPage({
                asin: b
            });
            a.stopPropagation()
        })
    });
    "use strict";
    k.when("jQuery").register("CartItemDPLink", function(a) {
        a("#content").delegate(".sc-item-dp-link", "click", function(c) {
            var b = a(c.target.parentElement).is("a") && a(c.target.parentElement).hasClass("ags-badge-link"),
                e = a(c.target).hasClass("sc-suppress-item-dp-link") ||
                a(c.target.parentElement).is("a") && a(c.target.parentElement).hasClass("sc-suppress-item-dp-link");
            a(c.target).is(".a-popover-trigger") || b || e || (n.location.href = a(this).data("url"))
        })
    });
    "use strict";
    k.when("A", "CartUpdate", "CartMiniBuyBox-Lib", "mini-buy-box-ready").execute("CartMiniBuyBox", function(a, c, b) {
        var e = a.$,
            d = !1,
            f = b.isUseSticky(),
            h = function() {
                var a = b.getMiniBuyBox(),
                    c;
                if (!(c = 0 >= a.length)) {
                    c = a.hasClass("sc-bottom-pinned");
                    var d = "fixed" === a.css("position"),
                        f = a.is(":visible");
                    c = !(c && d && f)
                }
                c || (a =
                    a.outerHeight(), e("body").css("padding-bottom", a + "px"))
            },
            k = function() {
                function a() {
                    d ? b.getMiniBuyBox().css("position", "static") : b.getMiniBuyBox().css("position", f)
                }
                h();
                return f ? a : function() {}
            }();
        c.registerForAjaxSuccess(function(a) {
            a && a.features && a.features["mini-buy-box"] && (a = a.features["mini-buy-box"], a.refreshfeature && b.getMiniBuyBox().replaceWith(a.featurehtml))
        });
        c.registerForAjaxComplete(function() {
            k()
        });
        e("#content").delegate('a[href\x3d"#similar-items"]', "click", function(a) {
            var c = e("#similar-items");
            if (c && 0 < c.length) {
                var c = c.offset().top,
                    d = 0 >= e("#sc-buy-box").data("quantity"),
                    f = b.getMiniBuyBox();
                0 < f.length && !d && (d = f.outerHeight(), n.scrollTo(0, c - d), a.preventDefault())
            }
        });
        e(document).delegate('input[type\x3d"text"], input[type\x3d"tel"]', "focusin focusout", function(a) {
            d = "focusin" === a.type;
            k()
        })
    });
    "use strict";
    k.when("jQuery").register("CartPageSpinner", function(a) {
        var c = a(document),
            b = a(n),
            e = a("#sc-page-spinner"),
            d = e.find(".sc-overwrap"),
            f = e.find(".sc-spinner"),
            h = function() {
                e.hasClass("a-hidden") ||
                    (d.css({
                        height: c.height()
                    }), f.css({
                        top: b.scrollTop() + b.height() / 2 - f.height() / 2
                    }))
            };
        b.resize(function() {
            h()
        });
        c.scroll(function() {
            h()
        });
        b.bind("orientationchange", function() {
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
    k.when("A", "a-modal-factory").execute(function(a, c) {
        a.declarative("a-modal", "click", function(a) {
            c.get(a.$declarativeParent).show();
            a.$event.preventDefault();
            a.data.preventPropagation && a.$event.stopImmediatePropagation()
        })
    });
    "use strict";
    k.when("A", "a-popover").register("QuantityUpdatePopoverController", function(a, c) {
        return {
            showQuantityPopover: function(b) {
                var e = b.find(".sc-quantity-update-message");
                if (!(1 > e.length)) {
                    var d = "quantity-popover-" + b.data("actionItemID");
                    c.create(b.find(".sc-action-quantity"), {
                        content: e.contents(),
                        name: d
                    }).show();
                    a.on("a:popover:hide:" + d, function(a) {
                        c.remove(a.popover);
                        e.remove()
                    })
                }
            },
            closeQuantityPopover: function(a) {
                a = a.find(".sc-action-quantity");
                0 < a.length && c.remove(a)
            }
        }
    });
    k.when("jQuery",
        "a-secondary-view", "ready").execute(function(a, c) {
        k.now("mash").execute(function(b) {
            a('.cart-pmp-details \x3e .a-declarative[data-action\x3d"a-secondary-view"]').click(function(a) {
                a.stopImmediatePropagation();
                a.preventDefault();
                void 0 !== b ? b.navigate({
                    successCallback: function() {
                        c.get(a.currentTarget).show({
                            preventNavigate: !1
                        })
                    }
                }) : c.get(a.currentTarget).show()
            })
        })
    });
    "use strict";
    k.when("A", "ready").register("SnSBackgroundController", function(a) {
        var c = a.$;
        return {
            blockBackgroundScrollLockPosition: function() {
                c("html body").addClass("background-scroll-toggle")
            },
            unblockBackgroundScrollRetrievePosition: function() {
                c("html body").removeClass("background-scroll-toggle")
            }
        }
    });
    "use strict";
    k.when("A", "a-sheet", "snsData", "ready").register("SnSBottomSheetUtility", function(a, c, b) {
        var e = a.$,
            d = {
                closeEnabled: !0,
                closeType: "message",
                closeMessage: b.getAllSnSData().sheetCloseMessage,
                sheetType: "web"
            };
        a.on("a:sheet:afterShow:snsBottomSheet", function(a) {
            a = a.sheet;
            var b = a.$container.find("#" + a._preloadDomId).find(".a-scroller").children().innerHeight();
            a.$container.height() >
                b && a.changeHeight({
                    height: b,
                    duration: .2
                })
        });
        return {
            getBottomSheet: function(a) {
                var b = c.get(a.data.preloadDomId);
                b || (b = c.get(a.data.preloadDomId) || c.create(e.extend({
                    name: "snsBottomSheet",
                    preloadDomId: a.data.preloadDomId,
                    height: a.data.height || 250
                }, d)));
                return b
            }
        }
    });
    "use strict";
    k.when("A", "ready").register("snsData", function(a) {
        var c = a.$;
        return {
            getAllSnSData: function(a) {
                var e = "",
                    d = !1;
                if (0 < c("#sns-onml-factory-data").length && c("#sns-onml-factory-data").data()) var f = c("#sns-onml-factory-data").data(),
                    e = f.sheetCloseMessage;
                a = "#sns-data-" + a;
                0 < c(a).length && c(a).data() && (f = c(a).data(), d = f.iscustomertiered);
                return {
                    sheetCloseMessage: e,
                    isCustomerTiered: d
                }
            }
        }
    });
    "use strict";
    k.when("A", "SnSUpdate", "SnSBottomSheetUtility", "ready").execute(function(a, c, b) {
        var e = a.$,
            d = c.getRequest(),
            f = !1,
            h, k = function() {
                h && h.hide()
            },
            g = {
                upsell: function(a) {
                    f = !1;
                    a.sheet.$container.find("#frequencySelector_" + a.data.itemid).html(d.overrideFrequencyText)
                },
                frequency: function(a) {
                    a = a.sheet.$container.find("[data-a-accordion-name\x3d'sns-accordion'] [data-a-accordion-row-name\x3d'frequency_" +
                        d.overrideFrequency + "'] a");
                    a.addClass("sc-suppress-item-dp-link");
                    a.click()
                }
            },
            n = {
                upsell: function(a) {
                    !0 === f ? (a.data.preloadDomId = a.data.associateddomid, a.data.height = a.data.associateddomheight, h = b.getBottomSheet(a), h.show()) : d = c.getRequest()
                },
                frequency: function(a) {
                    !0 === f ? (a.data.preloadDomId = a.data.associateddomid, a.data.height = a.data.associateddomheight, h = b.getBottomSheet(a), h.show()) : (d.itemId = a.data.itemid, c.fulfil(d), d = c.getRequest())
                }
            };
        a.declarative("sns-a-opt-in-selected", "click", function(a) {
            h =
                b.getBottomSheet(a);
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
            c.fulfil(d)
        });
        a.declarative("sns-a-list-frequency-selected", "click", function(a) {
            d.frequency || (d.frequency = d.overrideFrequency = a.data.selectedFrequency);
            a.data.isNested ? (f = !0, k()) : (h = b.getBottomSheet(a), h.show())
        });
        a.declarative("sns-unsubscribe-selected", "click", function(a) {
            h = b.getBottomSheet(a);
            h.show()
        });
        a.declarative("sns-unsubscribe-confirm-selected", "click", function(a) {
            k();
            d.itemId = a.data.itemId;
            d.overrideFrequency = 0;
            c.fulfil(d)
        });
        a.on("a:accordion:sns-accordion:select", function(a) {
            a = e(a.selectedRow.$row[0]);
            d.overrideFrequencyText = a.data().rowinformation;
            d.overrideFrequency = a.data().frequencyvalue
        });
        a.on("a:sheet:beforeShow:snsBottomSheet",
            function(b) {
                var c = e(b.sheet.$container.find(".bottomSheet")[0]).data();
                b.data = a.extend(c, b.data);
                if (c && g[c.subject]) g[c.subject](b)
            });
        a.on("a:sheet:afterHide:snsBottomSheet", function(b) {
            var c = e(b.sheet.$container.find(".bottomSheet")[0]).data();
            b.data = a.extend(c, b.data);
            if (c && n[c.subject]) n[c.subject](b)
        });
        a.declarative("sns-popover-close", "click", k)
    });
    "use strict";
    k.when("A", "CartServerSetting", "CartUpdate", "snsData").register("SnSUpdate", function(a, c, b, e) {
        function d(a) {
            var b = a.overrideFrequency ||
                a.frequency;
            return ["ox_sc_sfc", h[c.device.type] || "ua", b, parseInt(b, 10) === parseInt(a.mostCommonFrequency, 10) ? "mcf" : "nmcf", e.getAllSnSData(a.itemId).isCustomerTiered ? "t" : "nt"].join("|")
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
                var g = a.$('div[data-itemid\x3d"' +
                    f.itemId + '"]');
                f.isItemSubscribed ? f.frequency !== f.overrideFrequency && b.updateSNS(g, f.overrideFrequency, ["ox_sc_ch", h[c.device.type] || "ua", f.overrideFrequency, e.getAllSnSData(f.itemId).isCustomerTiered ? "t" : "nt"].join("|")) : f.serverParameter && b.modifySnS(g, [f.overrideFrequency || f.frequency, f.serverParameter].join("|"), d(f))
            }
        }
    });
    "use strict";
    k.when("A").register("CartMiniBuyBox-Lib", function(a) {
        function c() {
            return e("#sc-mini-buy-box")
        }

        function b() {
            var a = c().css("position");
            return a && a.match("sticky") ?
                a : !1
        }
        var e = a.$;
        return {
            getFloatingBuyBoxHeight: function() {
                if (b()) return c().height();
                var a = e("#sc-android-pinned-buy-box-wrapper");
                return 0 < a.length ? a.height() : 0
            },
            getMiniBuyBox: c,
            isUseSticky: b
        }
    });
    "use strict";
    n.amz_js_PopWin = function(a, c, b) {
        n.open(a, c, b).focus();
        return !1
    }
});
/* ******** */