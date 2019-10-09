
                                ! function() {
                                    var a, c, n, m, i = "click",
                                        l = "push-promo",
                                        u = "pushPromo.ldt",
                                        h = "pushPromo.dc",
                                        p = "display-push-promos",
                                        d = "pushPromoVisible";

                                    function t(o) {
                                        var i = this;
                                        i.config = o || {}, i.tracker = a.YAHOO && a.YAHOO.i13n && a.YAHOO.i13n.rapidInstance, m = a.wafer, i.backOffPeriodValidity() && (i.config.autoInitSubscription ? (i.initializeTimestamp(u), i.onboardPushNotifications({
                                            sec: "mobile-auto"
                                        })) : i.setupPushPromo())
                                    }

                                    function o(o) {
                                        var s;
                                        "function" == typeof o && (s = o), a.subscriptionHelperInstance && "default" === a.Notification.permission && n.pushPromoSubscriptionTopic ? a.subscriptionHelperInstance.shouldPromotePushNotificationsForTopic(n.pushPromoSubscriptionTopic, function(o, i) {
                                            if (i) {
                                                var e = new t(n);
                                                s && s(e)
                                            } else s && s()
                                        }) : s && s()
                                    }

                                    function e(o, i, e) {
                                        a = o, c = i, n = e || {
                                            "autoInitSubscription": false,
                                            "enableOtherPromoCheck": true,
                                            "i13nDismissBtn": {
                                                "elm": "btn",
                                                "itc": "1",
                                                "sec": "push-promo",
                                                "slk": "dismiss",
                                                "pos": "2"
                                            },
                                            "i13nYesBtn": {
                                                "elm": "btn",
                                                "itc": "1",
                                                "sec": "push-promo",
                                                "slk": "onboard",
                                                "pos": "1"
                                            },
                                            "pushPromoScrollThreshold": 200,
                                            "promoMaxViewsCount": 1,
                                            "promoPosition": "bottom",
                                            "pushPromoSubscriptionTopic": "gondor_homerun_news",
                                            "pushPromoTimeToResurrect": 1814400
                                        }
                                    }
                                    t.prototype = {
                                        backOffPeriodValidity: function() {
                                            var o = this,
                                                i = !1,
                                                e = Math.floor((new Date).getTime() / 1e3),
                                                s = parseInt(a.localStorage.getItem(u), 10),
                                                n = parseInt(a.localStorage.getItem(h), 10),
                                                t = o.config.pushPromoTimeToResurrect || 604800;
                                            return o.config.promoMaxViewsCount && (!n || n < o.config.promoMaxViewsCount) ? i = !0 : s ? s && t < e - s && (i = !0) : i = !0, i
                                        },
                                        onboardPushNotifications: function(o) {
                                            var e = this.config.promoMaxViewsCount || 0;
                                            a.subscriptionHelperInstance.pushNotificationSubscribe({
                                                topic: this.config.pushPromoSubscriptionTopic,
                                                trackingParams: o
                                            }, function(o, i) {
                                                (o || "granted" !== a.Notification.permission) && e && a.localStorage.setItem(h, e)
                                            })
                                        },
                                        setupPushPromo: function() {
                                            var o = this;
                                            o.promoNode = c.querySelector("#push-promo"), o.onboardBtn = c.querySelector(".push-promo-onboard-btn"), o.dismissBtn = c.querySelector(".push-promo-dismiss-btn"), o.promoNode && o.onboardBtn && o.dismissBtn && (o.showPushPromo = o.showPushPromo.bind(o), o.handlePushPromoOnboard = o.handlePushPromoOnboard.bind(o), o.handlePushPromoDismiss = o.handlePushPromoDismiss.bind(o), o.onboardBtn.addEventListener(i, o.handlePushPromoOnboard), o.dismissBtn.addEventListener(i, o.handlePushPromoDismiss), Number(o.config.pushPromoScrollThreshold) ? m && m.on && m.on("scroll", o.showPushPromo) : o.showPushPromo(), c.body.classList.contains(p) && (o.checkGlobalPromoClass = !0))
                                        },
                                        showPushPromo: function(o) {
                                            var s, n = this,
                                                t = Number(n.config.promoMaxViewsCount) || 0,
                                                i = Number(n.config.pushPromoScrollThreshold) || 0,
                                                e = Number(n.config.enableOtherPromoCheck) || 0,
                                                r = n.config.promoPosition;
                                            e && a.hpClientInstance && a.hpClientInstance.promoSlots && (s = a.hpClientInstance.promoSlots) && s.getItemAtSlot(r) || (!i || o && o.scrollY && i <= o.scrollY) && (m && m.removeListener && m.removeListener("scroll", n.showPushPromo), n.checkGlobalPromoClass && !c.body.classList.contains(p) || a.subscriptionHelperInstance.shouldPromotePushNotificationsForTopic(n.config.pushPromoSubscriptionTopic, function(o, i) {
                                                if (i) {
                                                    n.initializeTimestamp(u), t && n.initializeCounter(h, t), c.body.classList.add(d), s && s.addToSlot(r, l);
                                                    var e = {
                                                        sec: l,
                                                        _links: [{
                                                            slk: n.config.i13nYesBtn.slk,
                                                            elm: n.config.i13nYesBtn.elm
                                                        }, {
                                                            slk: n.config.i13nDismissBtn.slk,
                                                            elm: n.config.i13nDismissBtn.elm
                                                        }]
                                                    };
                                                    n.tracker && n.tracker.beaconLinkViews([e])
                                                }
                                            }))
                                        },
                                        hidePushPromo: function() {
                                            var o = this;
                                            c.body.classList.remove(d), o.onboardBtn.removeEventListener(i, o.handlePushPromoOnboard), o.dismissBtn.removeEventListener(i, o.handlePushPromoDismiss)
                                        },
                                        handlePushPromoOnboard: function() {
                                            var o = this;
                                            o.onboardPushNotifications({
                                                sec: l,
                                                subsec: "browser-prompt",
                                                elm: "btn",
                                                itc: 1
                                            }), o.config.i13nYesBtn.cat = parseInt(a.localStorage.getItem(h), 10), o.tracker && o.tracker.beaconClick(o.config.i13nYesBtn.sec, o.config.i13nYesBtn.slk, o.config.i13nYesBtn.pos, o.config.i13nYesBtn), o.hidePushPromo()
                                        },
                                        handlePushPromoDismiss: function() {
                                            var o = this,
                                                i = Number(o.config.promoMaxViewsCount) || 0;
                                            o.initializeTimestamp(u), o.config.i13nDismissBtn.cat = parseInt(a.localStorage.getItem(h), 10), i && a.localStorage.setItem(h, i), o.tracker && o.tracker.beaconClick(o.config.i13nDismissBtn.sec, o.config.i13nDismissBtn.slk, o.config.i13nDismissBtn.pos, o.config.i13nDismissBtn), o.hidePushPromo()
                                        },
                                        initializeTimestamp: function(o) {
                                            var i = Math.floor((new Date).getTime() / 1e3),
                                                e = parseInt(a.localStorage.getItem(o), 10) || 0;
                                            (!e || e < i) && a.localStorage.setItem(o, i)
                                        },
                                        initializeCounter: function(o, i) {
                                            var e = parseInt(a.localStorage.getItem(o), 10) || 0;
                                            i <= e && (e = 0), e += 1, a.localStorage.setItem(o, e)
                                        }
                                    }, "undefined" != typeof module ? (module.exports.PushPromoFunc = t, module.exports.defineGlobals = e, module.exports.initPushPromo = o) : (e(window, document), function(o) {
                                        var i = a[o],
                                            e = "__storage_test__";
                                        try {
                                            return i.setItem(e, e), i.removeItem(e), !0
                                        } catch (o) {
                                            return o instanceof DOMException && (22 === o.code || 1014 === o.code || "QuotaExceededError" === o.name || "NS_ERROR_DOM_QUOTA_REACHED" === o.name) && 0 !== i.length
                                        }
                                    }("localStorage") && ("complete" === c.readyState ? o() : a.addEventListener("load", o)))
                                }();
                            