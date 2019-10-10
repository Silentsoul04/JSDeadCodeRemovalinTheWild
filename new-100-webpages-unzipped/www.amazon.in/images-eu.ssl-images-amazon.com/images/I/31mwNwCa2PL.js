(function() {
    window.$AmazonWebApp = window.$AmazonWebApp || {};
    window.$AmazonWebApp.config = {
        cookies: {
            recognition: "x-acbin"
        }
    };
    (function(a) {
        a.injectCss = function(a) {
            var b = document.createElement("style");
            b.appendChild(document.createTextNode(a));
            document.head.appendChild(b)
        }
    })(window.$AmazonWebApp);
    (function(a) {
        a.utils = {
            isWebApp: function() {
                return window.matchMedia && window.matchMedia("(display-mode: standalone)").matches
            },
            supportsP: function() {
                return !!(window.P && P.AUI_BUILD_DATE && P.when && P.register && P.log)
            },
            logCSMCounter: function(a, b) {
                window.ue && ue.count && ue.count("awa:" + a, b || 1)
            },
            logCSMTag: function(a) {
                window.ue && ue.tag && ue.tag("awa:" + a)
            },
            logCSMWidgetLatency: function(a, b) {
                "ld" === b && "function" === typeof uex ? uex("ld", a, {
                    wb: 1
                }) : "function" === typeof uet && uet(b, a, {
                    wb: 1
                })
            },
            logAjaxRef: function(a) {
                if (a) {
                    var b = new XMLHttpRequest;
                    b.open("GET", "/gp/aw/amazonwebapp/reflog.html/ref\x3dawa_" + a, !0);
                    b.send()
                }
            },
            logError: function(a, b, c) {
                this.supportsP() && P.log(a, b || "ERROR", c || "AmazonWebApp")
            },
            daysBetween: function(a, b) {
                return Math.round(Math.abs(a -
                    b) / 864E5)
            },
            safeParseJSON: function(a) {
                var b;
                try {
                    b = JSON.parse(a)
                } catch (c) {}
                b && "object" === typeof b && b.constructor === Object || (b = {});
                return b
            },
            merge: function(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b],
                        d;
                    for (d in c) c.hasOwnProperty(d) && (a[d] = c[d])
                }
                return a
            },
            getCookie: function(a) {
                for (var b = document.cookie ? document.cookie.split(";") : [], c = 0; c < b.length; c++) {
                    var d = b[c].trim().split("\x3d"),
                        f = d[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                    if (a === f) return d.slice(1).join("\x3d").replace(/(%[0-9A-Z]{2})+/g,
                        decodeURIComponent)
                }
            },
            getPageType: function() {
                var a = {
                        "gateway-phone-web": "gateway",
                        DetailAW: "detail",
                        SearchAW: "search",
                        GoldBoxAW: "deals",
                        CheckoutThankYouAW: "typ"
                    },
                    b = window.ue_pty;
                return b && a[b] ? a[b] : "other"
            },
            triggerCustomEvent: function(a, b, c, d, f) {
                b = new CustomEvent(b, {
                    bubbles: c || !0,
                    cancelable: d || !1,
                    detail: f || void 0
                });
                a.dispatchEvent(b)
            },
            getUserAgentDetails: function(a) {
                for (var b = [{
                        name: "windows",
                        nameRegex: /Windows/i
                    }, {
                        name: "chromeos",
                        nameRegex: /CrOS/i
                    }, {
                        name: "mac",
                        nameRegex: /Macintosh/i
                    }, {
                        name: "ios",
                        nameRegex: /(iPhone|iPad|iOS)/i
                    }, {
                        name: "android",
                        nameRegex: /(Android|Adr)/i
                    }, {
                        name: "linux",
                        nameRegex: /Linux/i
                    }], c = [{
                            name: "googlebot",
                            nameRegex: /Googlebot\/(\d*)/i
                        }, {
                            name: "samsungbrowser",
                            nameRegex: /SamsungBrowser\/(\d*)/i
                        }, {
                            name: "ucbrowser",
                            nameRegex: /UCBrowser\/(\d*)/i
                        }, {
                            name: "msie",
                            nameRegex: /(?:MSIE |Trident.*rv:)(\d*)/i
                        }, {
                            name: "edge",
                            nameRegex: /Edge\/(\d*)/i
                        }, {
                            name: "opera",
                            nameRegex: /(?:OPR|Opera.*Version)\/(\d*)/i
                        }, {
                            name: "chrome",
                            nameRegex: /(?:Chrome|CriOS)\/(\d*)/i
                        }, {
                            name: "firefox",
                            nameRegex: /(?:Firefox|FxiOS)\/(\d*)/i
                        },
                        {
                            name: "safari",
                            nameRegex: /Safari\//i,
                            versionRegex: /Version\/(\d*)/i
                        }
                    ], d = {
                        os: "unknown",
                        name: "unknown",
                        version: "unknown"
                    }, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g.nameRegex.test(a)) {
                        d.os = g.name;
                        break
                    }
                }
                for (f = 0; f < c.length; f++)
                    if (g = c[f], g.versionRegex ? void 0 : g.versionRegex = g.nameRegex, g.nameRegex.test(a) && g.versionRegex.test(a)) {
                        d.name = g.name;
                        d.version = a.match(g.versionRegex)[1];
                        break
                    }
                return d
            },
            navigateTo: function(a) {
                window.location.href = a
            }
        }
    })(window.$AmazonWebApp);
    (function(a) {
        a.storage = {
            get: function(a) {
                var b =
                    null;
                try {
                    window.localStorage && (b = localStorage.getItem(a))
                } catch (c) {}
                return b
            },
            set: function(a, b) {
                try {
                    window.localStorage && localStorage.setItem(a, b)
                } catch (c) {}
            },
            remove: function(a) {
                try {
                    window.localStorage && localStorage.removeItem(a)
                } catch (b) {}
            }
        }
    })(window.$AmazonWebApp);
    window.$AmazonWebApp.injectCss('.a2hs-ingress-container,a[href^\x3d"#nav-hbm-a2hs-trigger"]{display:none!important}.a2hs-ingress-container.a2hs-ingress-visible,a[href^\x3d"#nav-hbm-a2hs-trigger"].a2hs-ingress-visible{display:block!important}');
    (function(a) {
        function e(b, c) {
            a.utils.logCSMCounter("a2hs:" + b, c);
            a.utils.logCSMTag("a2hs:" + b)
        }

        function b(b) {
            a.utils.logAjaxRef("app_" + b)
        }

        function c() {
            var c = a.utils.safeParseJSON(a.storage.get("awa:webapp:installinfo"));
            c.install && (c = a.utils.daysBetween(Date.now(), parseInt(c.install, 10)), b("uninstl"), e("appuninstalled", c), a.storage.remove("awa:webapp:installinfo"))
        }

        function d() {
            return new Promise(function(a) {
                if (f) a(f);
                else {
                    var b = function() {
                        a(f);
                        document.removeEventListener("a2hs:installpromptready",
                            b)
                    };
                    document.addEventListener("a2hs:installpromptready", b)
                }
            })
        }
        if (window.Promise) {
            var f;
            window.addEventListener("beforeinstallprompt", function(d) {
                d.preventDefault();
                e("biptrigger");
                c();
                f = {
                    show: function(a) {
                        d.prompt();
                        d.promptAttribution = a;
                        b("dlg_shw_" + a);
                        e("dialog:shown")
                    },
                    done: new Promise(function(a) {
                        d.userChoice.then(function(c) {
                            f = void 0;
                            b("dlg_" + c.outcome.substring(0, 3) + "_" + d.promptAttribution);
                            e("dialog:" + c.outcome);
                            a({
                                result: c.outcome,
                                attribution: d.promptAttribution
                            })
                        })
                    })
                };
                setTimeout(function() {
                    a.utils.triggerCustomEvent(document,
                        "a2hs:installpromptready", !0, !1)
                }, 0)
            });
            window.addEventListener("appinstalled", function() {
                a.storage.set("awa:webapp:installinfo", JSON.stringify({
                    install: Date.now()
                }));
                b("instl");
                e("appinstalled")
            });
            a.addToHomescreen = {
                getInstallPrompt: d,
                logCSM: e,
                logRef: b
            }
        }
    })(window.$AmazonWebApp);
    (function(a) {
        function e(b) {
            a.addToHomescreen.getInstallPrompt().then(function(c) {
                var d = function(d) {
                    d.preventDefault();
                    c.show(b.attribution);
                    a.addToHomescreen.logCSM("ingress:clicked:" + b.attribution)
                };
                c.done.then(function() {
                    b.container.classList.remove("a2hs-ingress-visible");
                    b.cta.removeEventListener("click", d);
                    a.addToHomescreen.logCSM("ingress:closed:" + b.attribution);
                    e(b)
                });
                b.cta.addEventListener("click", d);
                b.container.classList.add("a2hs-ingress-visible");
                a.addToHomescreen.logCSM("ingress:shown:" + b.attribution)
            })
        }
        a.addToHomescreen && (a.addToHomescreen.setupIngress = e)
    })(window.$AmazonWebApp);
    (function(a) {
        function e() {
            return new Promise(function(a) {
                var c = document.querySelector('.hmenu a[href^\x3d"#nav-hbm-a2hs-trigger"]');
                if (c) a(c);
                else {
                    var d = function() {
                        var c = document.querySelector('.hmenu a[href^\x3d"#nav-hbm-a2hs-trigger"]');
                        c && (document.removeEventListener("nav:hbm:updated", d), a(c))
                    };
                    document.addEventListener("nav:hbm:updated", d)
                }
            })
        }
        a.addToHomescreen && e().then(function(b) {
            a.addToHomescreen.setupIngress({
                container: b,
                cta: b,
                attribution: "hbm"
            })
        })
    })(window.$AmazonWebApp);
    (function(a) {
        function e() {
            for (var b = document.querySelectorAll(".a2hs-ingress-container"), c = 0; c < b.length; c++) {
                var d = b[c];
                if (!d.classList.contains("a2hs-ingress-registered")) {
                    var e = d.querySelector(".a2hs-ingress-cta");
                    e && (d.classList.add("a2hs-ingress-registered"),
                        a.addToHomescreen.setupIngress({
                            container: d,
                            cta: e,
                            attribution: e.getAttribute("data-ref") || "unknown"
                        }))
                }
            }
        }
        a.addToHomescreen && (document.addEventListener("a2hs:ingress:added", e), e())
    })(window.$AmazonWebApp);
    (function(a) {
        function e() {
            var c = a.utils.getUserAgentDetails(navigator.userAgent);
            if (!("android" === c.os && "chrome" === c.name && 68 <= c.version && 75 >= c.version)) {
                var d, e = !1;
                a.addToHomescreen.getInstallPrompt().then(function(c) {
                    c.done.then(function(a) {
                        e && d && "function" === typeof d.requestUpdate && ("accepted" ===
                            a.result && "sapspk" === a.attribution ? d.requestUpdate({
                                signal: "complete",
                                state: b.THANK_YOU
                            }) : d.requestUpdate({
                                signal: "abort"
                            }))
                    });
                    a.utils.triggerCustomEvent(document.querySelector(":root"), "shopping-aids:dynamic-sparkle:a2hs:eligible", !0, !1, {
                        state: b.ELIGIBLE,
                        onShow: function(b) {
                            e = !0;
                            d = b;
                            a.addToHomescreen.logCSM("ingress:shown:sapspk")
                        },
                        onClick: function(k) {
                            if (e && k) switch (a.addToHomescreen.logCSM("ingress:clicked:sapspk"), k.state) {
                                case b.ELIGIBLE:
                                    d.requestUpdate({
                                        signal: "statechange",
                                        state: b.REQUESTING_PERMISSION
                                    });
                                    c.show("sapspk");
                                    break;
                                case b.THANK_YOU:
                                    d.requestUpdate({
                                        signal: "complete"
                                    })
                            }
                        },
                        onClose: function(b) {
                            e = !1;
                            d = void 0;
                            a.addToHomescreen.logCSM("ingress:closed:sapspk")
                        }
                    })
                })
            }
        }
        if (a.addToHomescreen && a.utils.supportsP()) {
            var b = {
                ELIGIBLE: "eligible",
                REQUESTING_PERMISSION: "permission",
                THANK_YOU: "thankyou"
            };
            P.when("shopping-aids-ready").execute(e)
        }
    })(window.$AmazonWebApp);
    window.$AmazonWebApp.injectCss("@media all and (display-mode:standalone){#chromeless-view-progress-bar,#chromeless-view-progress-bar::after{position:fixed;top:0;left:0;right:0;height:2px}@keyframes pbAnimation{0%{right:90%}100%{right:10%}}#chromeless-view-progress-bar{background:rgba(255,255,255,.1);z-index:9999999}#chromeless-view-progress-bar::after{content:'';background:#fcbb6a;animation:pbAnimation 10s forwards}}");
    window.$AmazonWebApp.utils.isWebApp() ? document.documentElement.classList.add("awa-webapp") : document.documentElement.classList.add("awa-browser");
    (function(a) {
        function e(a) {
            (a = document.getElementById(a)) && document.body.removeChild(a)
        }

        function b() {
            e("chromeless-view-progress-bar");
            var a = document.createElement("div");
            a.id = "chromeless-view-progress-bar";
            a.classList.add("nav-ignore-pinning");
            document.body.appendChild(a);
            setTimeout(function() {
                e("chromeless-view-progress-bar")
            }, 6E4);
            document.addEventListener("visibilitychange",
                function() {
                    e("chromeless-view-progress-bar")
                })
        }
        a.utils.isWebApp() && window.addEventListener("beforeunload", b)
    })(window.$AmazonWebApp);
    (function(a) {
        if (a.utils.isWebApp()) {
            a.utils.logCSMTag("webapp");
            var e = a.utils.safeParseJSON(a.storage.get("awa:webapp:installinfo"));
            if (e.install && !e.firstOpen) {
                e.firstOpen = Date.now();
                var b = a.utils.daysBetween(e.firstOpen, parseInt(e.install, 10));
                a.utils.logAjaxRef("app_frstopn");
                a.utils.logCSMCounter("a2hs:appfirstopen", b);
                a.utils.logCSMTag("a2hs:appfirstopen");
                a.storage.set("awa:webapp:installinfo",
                    JSON.stringify(e))
            }
        } else a.utils.logCSMTag("website")
    })(window.$AmazonWebApp);
    (function(a) {
        var e = a.storage.get("awa:offlinepage:csmcounters") || "",
            e = a.utils.safeParseJSON(e),
            b;
        for (b in e)
            if (e.hasOwnProperty(b)) {
                var c = e[b],
                    c = parseInt(c, 10);
                isNaN(c) || a.utils.logCSMCounter("offlinepage:" + b, c)
            }
        a.storage.remove("awa:offlinepage:csmcounters")
    })(window.$AmazonWebApp);
    (function(a) {
        function e() {
            return new Promise(function(a, b) {
                window && "ServiceWorkerRegistration" in window && "showNotification" in ServiceWorkerRegistration.prototype &&
                    "Notification" in window && "PushManager" in window && "PushSubscription" in window && "getKey" in PushSubscription.prototype && "toJSON" in PushSubscription.prototype && "indexedDB" in window ? a(d(!0, h.SUPPORTED)) : b(d(!1, h.NO_BROWSER_SUPPORT))
            })
        }

        function b() {
            if (!navigator.serviceWorker || !navigator.serviceWorker.getRegistrations || !navigator.serviceWorker.ready) return Promise.reject(d(!1, h.NO_BROWSER_SUPPORT));
            var a = new Promise(function(a, b) {
                    var c = navigator.serviceWorker.getRegistrations();
                    c ? c.then(function(c) {
                        0 < c.length ?
                            a(d(!0, h.SUPPORTED)) : b(d(!1, h.NO_REGISTRATION))
                    }) : b(d(!1, h.NO_REGISTRATION))
                }),
                b = new Promise(function(a, b) {
                    navigator.serviceWorker.controller ? a(navigator.serviceWorker.controller) : b(d(!1, h.NO_CONTROLLER))
                });
            return Promise.all([a, b, navigator.serviceWorker.ready])
        }

        function c(b, c) {
            return (new Promise(function(e, f) {
                a.utils.logCSMWidgetLatency("wpn_sw_msg", "bb");
                var g = new MessageChannel;
                g.port1.onmessage = function(a) {
                    a.data ? e(a.data) : f(d(!1, h.NO_RESPONSE_DATA))
                };
                setTimeout(function() {
                        f(d(!1, h.TIMED_OUT))
                    },
                    1E3 * c);
                navigator.serviceWorker.controller.postMessage(b, [g.port2])
            })).then(function(b) {
                a.utils.logCSMWidgetLatency("wpn_sw_msg", "ld");
                return Promise.resolve(b)
            }).catch(function(b) {
                a.utils.logCSMWidgetLatency("wpn_sw_msg", "ld");
                return Promise.reject(b)
            })
        }

        function d(a, b) {
            return {
                ok: a,
                exitCode: b
            }
        }

        function f(b, c) {
            a.utils.logCSMCounter("wpn:" + b);
            a.utils.logCSMTag("wpn:" + b);
            "string" === typeof c && c.trim() && (a.utils.logCSMCounter("wpn:" + b + ":" + c), a.utils.logCSMTag("wpn:" + b + ":" + c))
        }

        function g(b, c) {
            "string" ===
            typeof c && c.trim() && (b += "_" + c);
            a.utils.logAjaxRef("wpn_" + b)
        }

        function k() {
            return e().then(function() {
                return b()
            })
        }

        function l(b) {
            return e().then(function() {
                return new Promise(function(a, c) {
                    f("bperm:request", b);
                    g("bperm_request", b);
                    Notification.requestPermission().then(function(c) {
                        f("bperm:" + c, b);
                        g("bperm_" + c, b);
                        a(c)
                    })
                })
            }).catch(function() {
                f("bperm:unsupported", b);
                g("bperm_unsp", b);
                return Promise.resolve("unsupported")
            }).then(function(c) {
                a.utils.triggerCustomEvent(document, "wpn:permissionchange", !0, !1, {
                    permission: c,
                    attribution: b
                });
                return Promise.resolve(c)
            })
        }

        function m(b) {
            b = a.utils.merge({
                topics: [],
                timeout: 30
            }, b);
            return k().then(function() {
                var a = {
                    feature: "webpush",
                    command: "sync_subscribe",
                    options: {
                        cookies: document.cookie
                    }
                };
                Array.isArray(b.topics) && (a.options.topics = b.topics);
                return c(a, b.timeout).then(function(a) {
                    return new Promise(function(b, c) {
                        "webpush" === a.feature ? a.response.ok ? b(a.response) : c(a.response) : c(d(!1, h.BAD_DATA))
                    })
                })
            }).then(function(a) {
                f("syncsub:success");
                return a
            }).catch(function(b) {
                f("syncsub:fail:" +
                    b.exitCode);
                switch (b.exitCode) {
                    case "operation_failed":
                    case "sync_subscription_failure":
                        a.utils.logError(b.message)
                }
                return Promise.resolve(b)
            })
        }
        if (window.Promise) {
            var h = {
                SUPPORTED: "supported",
                NO_BROWSER_SUPPORT: "browser_no_support",
                NO_REGISTRATION: "sw_no_reg",
                NO_CONTROLLER: "sw_no_ctlr",
                NO_RESPONSE_DATA: "sw_msg_no_data",
                BAD_DATA: "sw_msg_bad_data",
                TIMED_OUT: "sw_msg_timeout"
            };
            a.webPushNotifications = {
                supported: k,
                requestPermission: l,
                syncSubscribe: m,
                logCSM: f,
                logRef: g
            }
        }
    })(window.$AmazonWebApp);
    (function(a) {
        a.webPushNotifications ?
            a.webPushNotifications.supported().then(function() {
                document.documentElement.classList.add("wpn-supported");
                a.webPushNotifications.logCSM("supported")
            }).catch(function(e) {
                a.webPushNotifications.logCSM("unsupported");
                e && e.exitCode && a.webPushNotifications.logCSM("unsupported:" + e.exitCode)
            }) : a.utils.logCSMCounter("wpn:unsupported")
    })(window.$AmazonWebApp);
    (function(a) {
        a.webPushNotifications && a.webPushNotifications.supported().then(function() {
            return document.documentElement.classList.contains("wpn-no-auto-sync") ||
                document.body.classList.contains("wpn-no-auto-sync") ? (a.webPushNotifications.logCSM("autosync:skip"), Promise.resolve()) : a.webPushNotifications.syncSubscribe()
        }).catch(function() {})
    })(window.$AmazonWebApp);
    (function(a) {
        function e() {
            var c, d = !1;
            (function() {
                return a.webPushNotifications.supported().then(function() {
                    return new Promise(function(b) {
                        a.utils.getCookie(a.config.cookies.recognition) && "default" === Notification.permission && b()
                    })
                })
            })().then(function() {
                function e() {
                    c.requestUpdate({
                        signal: "statechange",
                        state: b.REQUESTING_PERMISSION
                    });
                    a.webPushNotifications.requestPermission("sapspk").then(function(d) {
                        "granted" === d ? (c.requestUpdate({
                            signal: "statechange",
                            state: b.WORKING
                        }), a.webPushNotifications.syncSubscribe().then(function() {
                            c.requestUpdate({
                                signal: "complete",
                                state: b.VIEW_SETTINGS
                            })
                        })) : c.requestUpdate({
                            signal: "abort"
                        })
                    })
                }
                document.addEventListener("wpn:permissionchange", function(a) {
                    d && c && "function" === typeof c.requestUpdate && "sapspk" !== a.detail.attribution && c.requestUpdate({
                        signal: "abort"
                    })
                });
                a.utils.triggerCustomEvent(document.querySelector(":root"),
                    "shopping-aids:dynamic-sparkle:wpn:eligible", !0, !1, {
                        state: b.ELIGIBLE,
                        onShow: function(b) {
                            d = !0;
                            c = b;
                            a.webPushNotifications.logCSM("ingress:shown:sapspk")
                        },
                        onClick: function(g) {
                            if (d && g) switch (a.webPushNotifications.logCSM("ingress:clicked:sapspk"), g.state) {
                                case b.ELIGIBLE:
                                    e();
                                    break;
                                case b.VIEW_SETTINGS:
                                    c.requestUpdate({
                                        signal: "complete"
                                    }), a.utils.navigateTo("/preferences/webpush/ref\x3dsparkle")
                            }
                        },
                        onClose: function(b) {
                            d = !1;
                            c = void 0;
                            a.webPushNotifications.logCSM("ingress:closed:sapspk")
                        }
                    })
            })
        }
        if (a.webPushNotifications &&
            a.utils.supportsP()) {
            var b = {
                ELIGIBLE: "eligible",
                REQUESTING_PERMISSION: "permission",
                WORKING: "working",
                VIEW_SETTINGS: "viewsettings"
            };
            P.when("shopping-aids-ready").execute(e)
        }
    })(window.$AmazonWebApp);
    (function(a) {
        a.webPushNotifications && (a.webPushNotifications.isPageEligibleForAutoPrompt = !1)
    })(window.$AmazonWebApp);
    (function(a) {
        if (a.webPushNotifications) {
            var e = !!a.utils.getCookie(a.config.cookies.recognition),
                b = parseInt(a.storage.get("awa:wpn:autoperm:lastprompt"), 10),
                b = isNaN(b) ? Infinity : a.utils.daysBetween(Date.now(),
                    b);
            e && a.webPushNotifications.isPageEligibleForAutoPrompt && 30 <= b && a.webPushNotifications.supported().then(function() {
                "default" === Notification.permission && (a.webPushNotifications.logRef("bperm_autoeglb_" + a.webPushNotifications.autoPromptAttribution), setTimeout(function() {
                    a.webPushNotifications.requestPermission(a.webPushNotifications.autoPromptAttribution).then(function(b) {
                        a.storage.set("awa:wpn:autoperm:lastprompt", Date.now());
                        "granted" === b && a.webPushNotifications.syncSubscribe()
                    })
                }, 5E3))
            })
        }
    })(window.$AmazonWebApp);
    (function(a) {
        a.utils.supportsP() && P.register("$AmazonWebApp", function() {
            return window.$AmazonWebApp
        })
    })(window.$AmazonWebApp)
})();