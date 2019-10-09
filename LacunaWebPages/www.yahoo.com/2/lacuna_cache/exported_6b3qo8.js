
                /* version: 0.0.15 */
                window.NotificationClient = function() {
                    "use strict";

                    function a(a, c) {
                        if (a && !b(a, c)) {
                            var d = a.className + j + c;
                            a.className = d
                        }
                    }

                    function b(a, b) {
                        var c = a && a.className && a.className.split(j);
                        return !!c && -1 !== c.indexOf(b)
                    }

                    function c(a, b) {
                        if (a) {
                            var c = a.className && a.className.split(j);
                            if (c) {
                                var d = c.indexOf(b);
                                0 <= d && c.splice(d, 1), a.className = c.join(j)
                            }
                        }
                    }

                    function d(a, b) {
                        if (a) {
                            if (!b) return a;
                            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                        }
                    }
                    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                            return typeof a
                        } : function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                        },
                        f = function(a, b) {
                            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
                        },
                        g = function() {
                            function a(a, b) {
                                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
                            }
                            return function(b, c, d) {
                                return c && a(b.prototype, c), d && a(b, d), b
                            }
                        }(),
                        h = "GET",
                        i = function() {
                            function a(b) {
                                f(this, a), this._config = b
                            }
                            return g(a, [{
                                key: "_getRequestUrl",
                                value: function(a) {
                                    var b = a.url || this._config.service.url;
                                    if (b) {
                                        var c = b.split("?"),
                                            d = {
                                                path: c[0],
                                                queryParams: c[1] ? c[1].split("&") : []
                                            };
                                        c = d.path.split(";"), d.path = c[0], d.matrixParams = c.slice(1);
                                        var e = a.queryParams,
                                            f = a.matrixParams;
                                        f && Object.keys(f).forEach(function(a) {
                                            d.matrixParams.push(encodeURIComponent(a) + "=" + encodeURIComponent(f[a] || ""))
                                        }), e && Object.keys(e).forEach(function(a) {
                                            d.queryParams.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a] || ""))
                                        });
                                        var g = d.path;
                                        return d.matrixParams.length && (g += ";" + d.matrixParams.join(";")), d.queryParams.length && (g += "?" + d.queryParams.join("&")), g
                                    }
                                }
                            }, {
                                key: "_getRequestBody",
                                value: function(a) {
                                    return a && JSON.stringify(a) || ""
                                }
                            }, {
                                key: "_parseRequestResult",
                                value: function(a) {
                                    if ("string" == typeof a) try {
                                        a = JSON.parse(a)
                                    } catch (b) {
                                        a = {}
                                    }
                                    return a = a || {}, {
                                        css: a.css,
                                        count: a.count,
                                        markup: a.html,
                                        newCount: a.newCount
                                    }
                                }
                            }, {
                                key: "read",
                                value: function(a, b) {
                                    this._attemptRequest(h, a, b)
                                }
                            }, {
                                key: "update",
                                value: function(a, b) {
                                    this._attemptRequest("PUT", a, b)
                                }
                            }, {
                                key: "create",
                                value: function(a, b) {
                                    this._attemptRequest("POST", a, b)
                                }
                            }, {
                                key: "_attemptRequest",
                                value: function(a, b, c) {
                                    var d = this._config.service.attemptCount;
                                    b || (b = {});
                                    var e = this._getRequestUrl(b),
                                        f = this._getRequestBody(b.body);
                                    this._sendRequest({
                                        body: f,
                                        method: a,
                                        url: e
                                    }, d, c)
                                }
                            }, {
                                key: "_sendRequest",
                                value: function(a, b, c) {
                                    var d = this;
                                    a = a || {};
                                    var e = d._config.service,
                                        f = 1e3 * e.attemptDelay,
                                        g = a,
                                        i = g.url,
                                        j = g.body,
                                        k = new XMLHttpRequest;
                                    k.open(a.method, i), k.responseType = e.responseType, k.timeout = e.timeout;
                                    var l = function() {
                                        0 < b ? (b--, setTimeout(function() {
                                            d._sendRequest(a, b, c)
                                        }, f)) : c && c(new Error("Error" + ": " + k.status + " " + k.statusText), null)
                                    };
                                    k.onload = function() {
                                        if (200 === k.status) {
                                            var b = d._parseRequestResult(k.response || k.responseText);
                                            c && c(null, b, a)
                                        } else l()
                                    }, k.onerror = l, a.method === h ? k.send() : k.send(j)
                                }
                            }]), a
                        }(),
                        j = " ",
                        k = function() {
                            function a(b, c) {
                                f(this, a);
                                var d = this;
                                d._config = b, d._markup = "", d._newCount, d._count, d._request = c
                            }
                            return g(a, [{
                                key: "_replaceAllNotifications",
                                value: function(a) {
                                    this._markup = a.markup || "", this._newCount = a.newCount && parseInt(a.newCount, 10) || 0, this._count = a.count && parseInt(a.count, 10) || 0
                                }
                            }, {
                                key: "resetNewCount",
                                value: function() {
                                    this._newCount = 0
                                }
                            }, {
                                key: "_requestNotifications",
                                value: function(a, b) {
                                    var c = this,
                                        e = c._config.panel,
                                        f = {
                                            count: e.maxCount,
                                            imageTag: e.imageTag
                                        };
                                    a || (a = {}), d(f, a.matrixParams);
                                    c._request.read({
                                        matrixParams: f
                                    }, function(a, d) {
                                        !a && d && c._replaceAllNotifications(d), d = d || {}, b && b(a, d)
                                    })
                                }
                            }, {
                                key: "getNotifications",
                                value: function() {
                                    return {
                                        count: this._count,
                                        markup: this._markup,
                                        newCount: this._newCount
                                    }
                                }
                            }, {
                                key: "fetchNotifications",
                                value: function(a, b) {
                                    this._requestNotifications(a, b)
                                }
                            }]), a
                        }(),
                        l = {
                            panelLoading: "yns-panel-loading",
                            panelNodeId: "yns-panel",
                            panelNodeClass: "yns-panel",
                            panelHideElement: "yns-hide",
                            panelError: "yns-panel-error",
                            panelPaddingBtm: "yns-panel-padding-btm"
                        },
                        m = function() {
                            function a(b, c) {
                                f(this, a);
                                var d = this;
                                d._config = b, d._panelNode = null, d._store = c
                            }
                            return g(a, [{
                                key: "_generatePanelMarkup",
                                value: function(a, c) {
                                    var d, e, f = this._config;
                                    "undefined" != typeof window && (d = window.Notification && "granted" === window.Notification.permission, e = b(document.body, f.promos.eligibleBodyClass));
                                    var g = f.promos.enableNotifOnboard && !d && e,
                                        h = g ? "<li class=\"yns-container yns-promo\"><div class=\"yns-link\"><img class=\"yns-img\" src=\"https://s.yimg.com/cv/ae/notifications/Y-Notif-Panel.png\" /><div class=\"yns-content\"><span class=\"yns-promo-title yns-title\">{notifOnboardMsg}</span><span class=\"yns-promo-button\"><button class=\"yns-promo-ctr js-push-subscribe\" data-subscription-topic=\"gondor_homerun_news\" data-ylk=\"sec:hd;subsec:notifications-promo;slk:Notify Me;\" data-subscription-ylk=\"sec:hd;subsec:notifications-promo;\" >Notify Me</button></span></div></div></li>" : "";
                                    h = h && h.replace("{notifOnboardMsg}", f.promos.notifOnboardMsg);
                                    var i, j = c.newCount > f.panel.maxCount,
                                        k = j ? c.newCount : "",
                                        m = f.panel.notificationCenterPath,
                                        n = m ? "" : l.panelHideElement,
                                        o = f.panel.headerMsg ? "" : " " + l.panelHideElement,
                                        p = m ? l.panelPaddingBtm : "";
                                    if (c.count) i = c.markup;
                                    else {
                                        i = "<li class=\"yns-container yns-empty\"><div class=\"yns-content\">{emptyPanelMsg}</div></li>".replace("{emptyPanelMsg}", f.panel.emptyPanelMsg)
                                    }
                                    return a = a.replace("{notifMarkup}", i).replace("{promoMarkup}", h).replace("{hideClass}", n).replace("{notifCenterLink}", m).replace("{paddingClass}", p).replace("{headerMsg}", f.panel.headerMsg).replace("{hideHeaderClass}", o).replace(/{notificationCenterNavMsg}/g, f.panel.notificationCenterNavMsg).replace(/{newCount}/g, k), a
                                }
                            }, {
                                key: "render",
                                value: function(a, b) {
                                    var c = this;
                                    if (!c._panelNode) return void(b && b(new Error("No panel parent")));
                                    var d, e, f, g = c._panelNode;
                                    switch (a) {
                                        case "expanded_panel":
                                            d = "<div class=\"yns-panel-header{hideHeaderClass}\"><span class=\"yns-panel-header-title\">{headerMsg}</span></div><div class=\"yns-panel-data\"><ul class=\"yns-notifications {paddingClass}\">{promoMarkup}{notifMarkup}</ul></div><div class=\"yns-panel-footer-action {hideClass}\"><a class=\"yns-navigate-center\" href=\"{notifCenterLink}\" data-ylk=\"sec:hd;subsec:notifications-viewall;slk:{notificationCenterNavMsg};\">{notificationCenterNavMsg}</a></div>", f = c._store.getNotifications(), e = c._generatePanelMarkup(d, f), g.innerHTML = e;
                                            break;
                                        case "error_panel":
                                            d = "<div class=\"yns-panel-error\"><span> {errorMsg} </span></div>", e = d.replace("{errorMsg}", c._config.panel.errorMsg), g.innerHTML = e;
                                            break;
                                        default:
                                    }
                                    b && b()
                                }
                            }, {
                                key: "createPanelParentNode",
                                value: function(a) {
                                    a && (a.innerHTML = "<div class=\"yns-panel\" id=\"yns-panel\"></div>", this._panelNode = document.getElementById(l.panelNodeId))
                                }
                            }, {
                                key: "updateBadgeNode",
                                value: function(a) {
                                    if (a) {
                                        var b = this._store.getNotifications(),
                                            c = b.newCount,
                                            d = this._config.badge.maxCount;
                                        if (c) {
                                            var e = c > d ? d + "+" : c;
                                            a.innerHTML = e
                                        } else a.innerHTML = ""
                                    }
                                }
                            }, {
                                key: "addStyles",
                                value: function(a) {
                                    if (a && "undefined" != typeof window) {
                                        var b = document.getElementById(this._config.panel.styleTagId);
                                        b || (b = document.createElement("style"), b.type = "text/css", b.id = this._config.panel.styleTagId, b.innerText = a, document.head.appendChild(b))
                                    }
                                }
                            }]), a
                        }(),
                        n = function() {
                            function b(a, c, d) {
                                f(this, b);
                                var e = this;
                                e._store = c, e._view = d, e._config = a;
                                var g = e._config.panel;
                                e._panelParentNode = document.querySelector(g.parentSelector), e._badgeNode = e._config.badge.selector && document.querySelector(e._config.badge.selector), e._indicatorNode = g.indicatorSelector && document.querySelector(g.indicatorSelector)
                            }
                            return g(b, [{
                                key: "createPanelParentNode",
                                value: function() {
                                    this._view.createPanelParentNode(this._panelParentNode), this._notifPanelNode = document.getElementById(l.panelNodeId)
                                }
                            }, {
                                key: "refreshPanelNode",
                                value: function(b, d) {
                                    var e = this;
                                    a(e._notifPanelNode, l.panelLoading), e._store.fetchNotifications(b, function(b, f) {
                                        b ? !e._notifPanelNode.innerHTML && (e._view.render("error_panel"), a(e._notifPanelNode, l.panelLoading)) : (e._view.render("expanded_panel"), e._view.updateBadgeNode(e._badgeNode), e._showBadge(), e._showIndicator(), e._view.addStyles(f.css)), c(e._notifPanelNode, l.panelLoading), d && d(b, f)
                                    })
                                }
                            }, {
                                key: "resetBadge",
                                value: function() {
                                    var b = this;
                                    b._store.resetNewCount(), b._view.updateBadgeNode(b._badgeNode), a(b._badgeNode, b._config.badge.hideClass)
                                }
                            }, {
                                key: "_showIndicator",
                                value: function() {
                                    if (this._indicatorNode) {
                                        var b = this._store.getNotifications(),
                                            d = b.newCount;
                                        d ? a(this._indicatorNode, this._config.panel.indicatorClass) : c(this._indicatorNode, this._config.panel.indicatorClass)
                                    }
                                }
                            }, {
                                key: "_showBadge",
                                value: function() {
                                    var b = this,
                                        d = b._store.getNotifications(),
                                        e = d.newCount;
                                    e ? c(b._badgeNode, b._config.badge.hideClass) : a(b._badgeNode, b._config.badge.hideClass)
                                }
                            }]), b
                        }(),
                        o = {
                            promos: {
                                eligibleBodyClass: "display-push-promos",
                                enableNotifOnboard: !0,
                                notifOnboardMsg: "Get Breaking News alerts on your desktop"
                            },
                            badge: {
                                hideClass: "",
                                maxCount: 5,
                                selector: ""
                            },
                            panel: {
                                emptyPanelMsg: "You have no new notifications.",
                                errorMsg: "",
                                headerMsg: "Notifications",
                                imageTag: "img:40x40|2|80",
                                indicatorClass: "yns-indicator",
                                indicatorSelector: null,
                                maxCount: 6,
                                notificationCenterNavMsg: "View all {newCount} notifications",
                                notificationCenterPath: "",
                                styleTagId: "notificationStyles",
                                parentSelector: null
                            },
                            service: {
                                attemptCount: 2,
                                attemptDelay: 1,
                                url: null,
                                responseType: "json",
                                timeout: 1500
                            }
                        },
                        p = function() {
                            function a(b) {
                                f(this, a);
                                var c = this;
                                c.config = c._parseConfig(b);
                                var d = c._validateRequiredConfigs();
                                d && (c._request = new i(c.config), c._store = new k(c.config, c._request), c._view = new m(c.config, c._store), c._panelController = new n(c.config, c._store, c._view), c._panelController.createPanelParentNode(), c._assignHelperMethods())
                            }
                            return g(a, [{
                                key: "_parseConfig",
                                value: function(a) {
                                    var b = {};
                                    for (var c in d(b, o), b)
                                        if (b.hasOwnProperty(c)) {
                                            var f = b[c],
                                                g = a[c];
                                            "object" === ("undefined" == typeof f ? "undefined" : e(f)) ? d(f, g): b[c] = a[c]
                                        }
                                    return b
                                }
                            }, {
                                key: "_validateRequiredConfigs",
                                value: function() {
                                    var a = this.config;
                                    return !!(a.panel.parentSelector && a.service.url)
                                }
                            }, {
                                key: "_assignHelperMethods",
                                value: function() {
                                    var a = this;
                                    a.helpers = {
                                        refreshPanelNode: a._panelController.refreshPanelNode.bind(a._panelController),
                                        resetBadge: a._panelController.resetBadge.bind(a._panelController),
                                        resetIndicator: function() {
                                            c(a._panelController._indicatorNode, a.config.panel.indicatorClass)
                                        }
                                    }
                                }
                            }]), a
                        }();
                    return p
                }();
                //# sourceMappingURL=notificationClient.min.js.map
                ! function() {
                    var a, o, i, n = "lnct";

                    function t(e, n) {
                        var t = this;
                        t.config = e || {}, t.accordion = o.querySelector(e.accordionSelector), t.countBadge = o.querySelector(e.countBadgeSelector), t.notificationButton = o.querySelector(e.notificationButtonSelector), t.profileButton = o.querySelector(e.profileButtonSelector), t.notificationClient = n;

                        function i(e) {
                            t.refreshPanel.call(t, e)
                        }
                        t.attachEventListeners(), i(t.handleBackgroundRefresh), e.pollingInterval && setInterval(i, 1e3 * e.pollingInterval, t.handleBackgroundRefresh)
                    }

                    function e() {
                        if (a.NotificationClient) {
                            var e = new window.NotificationClient(i);
                            e && e.helpers && new t(i.adapter, e)
                        }
                    }

                    function r(e, n, t) {
                        a = e, o = n, i = t || {
                            "adapter": {
                                "accordionSelector": "#profile-notification-accordion",
                                "countBadgeSelector": "#header-notification-badge",
                                "initializeImmediately": false,
                                "lang": "en-US",
                                "notificationButtonSelector": "#header-notification-button",
                                "pollingInterval": 300,
                                "profileButtonSelector": "#header-profile-button",
                                "rapidModuleId": "applet_p_50000322",
                                "region": "US"
                            },
                            "badge": {
                                "hideClass": "D(n)",
                                "selector": "#header-notification-badge"
                            },
                            "panel": {
                                "emptyPanelMsg": "You have no new notifications.",
                                "errorMsg": "Please check back later.",
                                "headerMsg": "",
                                "indicatorSelector": "#header-notification-indicator",
                                "maxCount": 4,
                                "notificationCenterNavMsg": "",
                                "notificationCenterPath": null,
                                "parentSelector": "#header-notification-panel"
                            },
                            "promos": {
                                "eligibleBodyClass": "display-push-promos",
                                "enableNotifOnboard": false,
                                "notifOnboardBtnLabel": "Notify Me",
                                "notifOnboardMsg": "Get Notifications for Your Favorite Topics",
                                "subscriptionTopic": "gondor_homerun_news"
                            },
                            "service": {
                                "url": "/_td_api/resource/notificationHistory"
                            }
                        }
                    }
                    t.prototype = {
                        attachEventListeners: function() {
                            var e = this;
                            e.profileButton && e.profileButton.addEventListener("click", function() {
                                e.refreshPanel.call(e)
                            }), e.accordion && e.accordion.addEventListener("click", function() {
                                e.handlePanelOpen.call(e)
                            }), e.notificationButton && (e.notificationButton.addEventListener("mouseenter", function() {
                                e.handlePanelOpen.call(e)
                            }), e.notificationButton.addEventListener("focus", function() {
                                e.handlePanelOpen.call(e)
                            }))
                        },
                        getConsumptionTime: function() {
                            return a.localStorage && a.localStorage.getItem(n)
                        },
                        handleBackgroundRefresh: function(e, n) {
                            var t = this,
                                i = a.YAHOO && a.YAHOO.i13n && a.YAHOO.i13n.rapidInstance || a.rapidInstance;
                            if (i && t.countBadge && t.countBadge.className.indexOf("D(n)") < 0) {
                                var o = {
                                    _links: [{
                                        cat: t.countBadge.innerText,
                                        elm: "btn",
                                        slk: "notification",
                                        subsec: "notification-badge"
                                    }],
                                    sec: "hd"
                                };
                                i.beaconLinkViews([o])
                            }
                        },
                        handlePanelOpen: function() {
                            var e = this,
                                n = a.YAHOO && a.YAHOO.i13n && a.YAHOO.i13n.rapidInstance || a.rapidInstance;
                            e.stampConsumptionTime(), e.notificationClient.helpers.resetBadge(), e.notificationClient.helpers.resetIndicator(), n && n.isModuleTracked(e.config.rapidModuleId) && n.refreshModule(e.config.rapidModuleId)
                        },
                        stampConsumptionTime: function() {
                            var e = "" + Math.floor((new Date).getTime() / 1e3);
                            return a.localStorage && a.localStorage.setItem(n, e), e
                        },
                        refreshPanel: function(t) {
                            var i = this,
                                e = i.getConsumptionTime() || i.stampConsumptionTime(),
                                n = i.config.region,
                                o = i.config.lang,
                                a = {
                                    lastUpdate: e
                                };
                            n && o && (a.lang = o, a.region = n), i.notificationClient.helpers.refreshPanelNode({
                                matrixParams: a
                            }, function(e, n) {
                                t && t.call(i, e, n)
                            })
                        }
                    }, "undefined" != typeof module ? (module.exports.NotificationClientAdapter = t, module.exports.defineGlobals = r, module.exports.initNotificationClient = e) : (r(window, document), i.adapter && i.adapter.initializeImmediately ? e() : o.addEventListener("DOMContentLoaded", e))
                }();
            