(function(c) {
    var b = window.AmazonUIPageJS || window.P,
        d = b._namespace || b.attributeErrors,
        a = d ? d("WuKongAmazonFamilyMobileGatewayAssets", "") : b;
    a.guardFatal ? a.guardFatal(c)(a, window) : a.execute(function() {
        c(a, window)
    })
})(function(c, b, d) {});
/* ******** */
(function(d) {
    var g = window.AmazonUIPageJS || window.P,
        x = g._namespace || g.attributeErrors,
        u = x ? x("AmazonFamilyMobileGatewayAssets", "") : g;
    u.guardFatal ? u.guardFatal(d)(u, window) : u.execute(function() {
        d(u, window)
    })
})(function(d, g, x) {
    d.declare("gwm-js-assets-loaded", {});
    d.when("increment-counter").execute(function(a) {
        d.when("gwm-web-asset-loaded").execute(function() {
            a("gwm-web-asset-loaded")
        });
        d.when("gwm-app-asset-loaded").execute(function() {
            a("gwm-app-asset-loaded")
        });
        d.when("gwm-history-asset-loaded").execute(function() {
            a("gwm-history-asset-loaded")
        });
        d.when("mash").execute(function() {
            a("gwm-mash-loaded")
        })
    });
    "use strict";
    d.when("jQuery").register("gwm-jq", function(a) {
        a.fn.apply || (a.fn.apply = function(a) {
            return a.apply(this, [this])
        });
        return a
    });
    "use strict";
    d.register("bind", function(a, b) {
        null == Function.prototype.bind && (Function.prototype.bind = function(a) {
            var c = function() {},
                e = this;
            if (! function(a) {
                    if ("function" !== typeof a) return !1;
                    a = Object.prototype.toString.call(a);
                    return "[object Function]" === a || "[object GeneratorFunction]" === a
                }(e)) throw new TypeError("Function.prototype.bind called on incompatible " +
                e);
            for (var b = [].slice.call(arguments, 1), f, k = 0 > e.length - b.length ? 0 : e.length - b.length, n = [], d = 0; d < k; d++)[].push.call(n, "$" + d);
            f = (new Function("binder", "return function (" + n.join(",") + "){ return binder.apply(this, arguments); }"))(function() {
                if (this instanceof f) {
                    var c = e.apply(this, [].concat.call(b, [].slice.call(arguments)));
                    return Object(c) === c ? c : this
                }
                return e.apply(a, [].concat.call(b, [].slice.call(arguments)))
            });
            e.prototype && (c.prototype = e.prototype, f.prototype = new c, c.prototype = null);
            return f
        });
        return function(a,
            c) {
            return Function.prototype.bind.apply(a, Array.prototype.slice.call(arguments, 1))
        }
    });
    "use strict";
    d.when("gwm-jq").register("ajax", function(a) {
        return function(b) {
            var h = a.Deferred(),
                c, e;
            b = a.extend({
                timeout: 1E4,
                retries: 0,
                success: h.resolve
            }, b);
            c = b.error;
            e = b.retries;
            b.error = function() {
                0 <= --e ? a.ajax(b) : (c && c.apply(this, Array.prototype.slice.call(arguments)), h.reject.apply(this, Array.prototype.slice.call(arguments)))
            };
            a.ajax(b);
            return h
        }
    });
    "use strict";
    d.when("gwm-jq", "A", "bind", "ajax", "gwm-card-loader-config",
        "csm-widget-builder", "card-inserter", "loading-indicator", "ready").register("card-loader", function(a, b, h, c, e, q, f, k) {
        function d() {
            g.ue && "function" === typeof g.ue.count && (y = function() {
                g.ue.count("gwmCardAjaxFailure", (g.ue.count("gwmCardAjaxFailure") || 0) + 1)
            })
        }

        function p() {
            var a = b.state("gwm-card-loader");
            return (b.state("gwm-card-inserter").bottom - (t.scrollTop() + a.viewportHeight)) / a.viewportHeight
        }

        function l() {
            b.state("gwm-card-loader", {
                screensTillBottom: p()
            })
        }

        function m() {
            b.state("gwm-card-loader", {
                viewportHeight: t.height()
            })
        }

        function v() {
            k.hide();
            b.state("gwm-card-loader", {
                request: null
            })
        }

        function r(l, h) {
            h.viewportHeight && b.state("gwm-card-loader", {
                screensTillBottom: p()
            });
            if (!l.request && 3 > l.screensTillBottom && !(b.state("gwm-secondary") || {}).open) {
                var m = b.state("gwm-card-loader").cards.slice(0),
                    g = m.splice(0, Math.ceil(3 * (b.state("gwm-card-loader").viewportHeight / 380))),
                    t = {
                        hmac: e.hmac,
                        requestId: e.requestId,
                        cards: g
                    },
                    r = e.ajaxUrl;
                0 !== g.length && (r = r.match(/\?/) ? r + "\x26" : r + "?", r += "rshVal\x3d" + Date.now(), g = q.build("card-load"),
                    g.bb(), k.show(), t = c({
                        type: "POST",
                        url: r,
                        contentType: "application/json",
                        data: JSON.stringify(t),
                        retries: 3
                    }), t.then([g.cf, f, g.ld], y).always(v), b.state.replace("gwm-card-loader", a.extend(b.state("gwm-card-loader"), {
                        request: t,
                        cards: m
                    })))
            }
            h.request && !l.request && 0 === l.cards.length && k.hide();
            h.noCardsLoaded && l.noCardsLoaded && k.hide();
            h.enableCSM && l.enableCSM && d()
        }

        function w(a, c) {
            c.bottom && b.state("gwm-card-loader", {
                screensTillBottom: p()
            })
        }
        var t = a(g),
            y = a.noop;
        return function(a) {
            var c = a.cardsData;
            f(a.html);
            b.state.bind("gwm-card-loader", r);
            b.state.bind("gwm-card-inserter", w);
            b.state("gwm-card-loader", {
                viewportHeight: t.height(),
                cards: c.slice(0),
                enableCSM: !0,
                noCardsLoaded: 0 === c.length
            });
            t.bind("scroll", b.debounce(l, 50));
            t.bind("resize", b.debounce(m, 250))
        }
    });
    "use strict";
    d.when("jQuery", "A", "card-insertion-marker", "insertHTMLBefore", "ready").register("card-inserter", function(a, b, h, c) {
        b.state("gwm-card-inserter", {
            bottom: h().offset().top,
            inserted: []
        });
        return function(a) {
            var q = a.replace(/^\s+/, "").replace(/\s+$/,
                    ""),
                f = h(),
                f = f && f.get(0);
            "" !== q && f && (c(a, f), b.state("gwm-card-inserter", {
                bottom: h().offset().top,
                inserted: b.state("gwm-card-inserter").inserted.concat([a])
            }))
        }
    });
    "use strict";
    d.when("jQuery", "A", "ready").register("primary-scroll-depth", function(a, b) {
        function h() {
            b.state("gwm-primary-scroll-depth", {
                depth: q.scrollTop()
            })
        }

        function c() {
            var c = b.state("gwm-primary-scroll-depth"),
                e = 0;
            a(".gwm-widget").each(function(h) {
                0 === h && (e = a(this).offset().top);
                e += a(this).height() + 5;
                if (c.depth + q.height() < e) return c.maxCardDepth <
                    h + 1 && b.state("gwm-primary-scroll-depth", {
                        maxCardDepth: h + 1
                    }), !1
            });
            e <= c.depth + q.height() && b.state("gwm-primary-scroll-depth", {
                maxCardDepth: a(".gwm-widget").length
            })
        }

        function e(a, e) {
            e.depth && c();
            e.maxCardDepth && g.ue.count("gwmPrimaryCardDepth", b.state("gwm-primary-scroll-depth").maxCardDepth)
        }
        var q = a(g);
        return function() {
            b.state("gwm-primary-scroll-depth", {});
            g.ue && "function" === typeof g.ue.count && (q.bind("scroll", b.debounce(h, 50)), b.state("gwm-primary-scroll-depth", {
                depth: 0,
                maxCardDepth: 0
            }, !0), b.state.bind("gwm-primary-scroll-depth",
                e))
        }
    });
    "use strict";
    d.when("A", "jQuery", "ready").register("loading-indicator-counter", function(a, b) {
        function h() {
            var c = a.state("gwm-loading-indicator");
            if (c.active) {
                var e = q.scrollTop();
                c.maxDepth < e && a.state("gwm-loading-indicator", {
                    maxDepth: e,
                    visible: k.getBoundingClientRect().top < f
                })
            }
        }

        function c(c, e) {
            c.active && e.visible && c.visible && (g.ue && g.ue.count && g.ue.count("gwmLoadingIndicatorShown", (g.ue.count("gwmLoadingIndicatorShown") || 0) + 1), a.state("gwm-loading-indicator", {
                active: !1
            }, !0))
        }

        function e(c, e) {
            e.request &&
                a.state("gwm-loading-indicator", {
                    active: !!c.request,
                    visible: !!c.request && k.getBoundingClientRect().top < f
                })
        }
        var q = b(g),
            f = q.height(),
            k = document.getElementById("gwm-CardLoadingIndicator");
        g.ue && g.ue.count && g.ue.count("gwmLoadingIndicatorShown", 0);
        return function() {
            a.state("gwm-loading-indicator", {});
            k && g.ue && "function" === typeof g.ue.count && (a.state("gwm-loading-indicator", {
                active: !1,
                maxDepth: 0,
                visible: !1
            }), b(g).bind("scroll", a.throttle(h, 300)), a.state.bind("gwm-loading-indicator", c), a.state.bind("gwm-card-loader",
                e))
        }
    });
    "use strict";
    d.when("jQuery", "recordClick", "ready").execute(function(a, b) {
        a("body").delegate(".gwm-VideoCard-videoWrapper", "click", function(h) {
            h = a(this);
            var c = h.children(".gwm-VideoCard-video"),
                e = c.get(0),
                q = c.data("hasbeenplayed"),
                f = c.data("shouldplayinline"),
                k = g.ue.count ? g.ue.count.bind(g.ue) : a.noop,
                d = c.parents(".gwm-Card").data("campaignid"),
                p = c.data("recordclickurl"),
                l = "gwmVideoPlayed" + d,
                m = "gwmVideoFinished" + d,
                d = e.requestFullscreen || e.msRequestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullscreen ||
                a.noop,
                d = d.bind(e);
            h.children(".gwm-VideoCard-playButton").children(".gwm-VideoCard-playButton-image").hide();
            h.children(".gwm-VideoCard-playButton").focus();
            e.paused ? (a(".gwm-VideoCard-video").each(function() {
                this !== e && this.pause()
            }), q || (k(l, 1), c.bind("ended", function(a) {
                k(m, 1)
            })), f || d(), null !== e.getAttribute("controls") && c.removeClass("gwm-VideoCard-noControls"), e.play(), c.data({
                hasbeenplayed: !0
            }), p && b(p, a.noop)) : e.pause()
        });
        a(document).bind("visibilitychange", function() {
            a(".gwm-VideoCard-video").each(function() {
                this.pause()
            })
        });
        a(g).bind("blur", function() {
            a(".gwm-VideoCard-video").each(function() {
                this.pause()
            })
        })
    });
    "use strict";
    d.when("jQuery", "A").execute(function(a, b) {
        var h = function(a, e) {
            e = a.find(".gwm-ThumbnailCard-product[data-item-id\x3d" + e + "]");
            a.find(".gwm-ThumbnailCard-product").addClass("gwm-ThumbnailCard-hidden");
            e.removeClass("gwm-ThumbnailCard-hidden")
        };
        a("body").delegate("[data-thumbnail-onclick]", "click", function(c) {
            var e = a(this),
                b;
            c = e.parents(".gwm-Card");
            b = e.attr("data-item-id");
            (e = c.data("rotatingTimer")) &&
            clearInterval(e);
            h(c, b)
        });
        d.when("jQuery", "A").register("gwm-thumbnail-card-rotator", function(a, e) {
            return function(b) {
                var f = a(b).eq(0),
                    d, g = 1;
                f && f.length && (b = f.find(".gwm-ThumbnailCard-thumbnail"), d = e.map(b, function(b) {
                    return a(b).attr("data-item-id")
                }), b = setInterval(function() {
                    g >= d.length && (g = 0);
                    h(f, d[g]);
                    g++
                }, 4E3), f.data({
                    rotatingTimer: b
                }))
            }
        })
    });
    "use strict";
    d.when("jQuery", "A", "loading-indicator", "csm-widget-builder", "get-atf-asins").register("fetch-merch-data-store", function(a, b, h, c, e) {
        function q(c,
            b, e) {
            try {
                return a.Deferred().resolve(a.parseJSON(e.responseText)).promise()
            } catch (l) {
                return a.Deferred().reject(l).promise()
            }
        }

        function f(a) {
            d.now("merch-data-store").execute(function(c) {
                "undefined" === typeof c && d.declare("merch-data-store", a)
            })
        }

        function k(c, b) {
            function e() {
                b().done(l.resolve.bind(l)).fail(function() {
                    c.apply(this, arguments) ? e() : (l.reject.apply(l, arguments), f({
                        html: "",
                        cardsData: []
                    }))
                })
            }
            var l = a.Deferred();
            e();
            return l.promise()
        }

        function n() {
            var a = 0;
            return function(c, b, e) {
                return 300 <=
                    c.status && 600 > c.status ? !1 : 2 >= ++a
            }
        }

        function p(c, b) {
            return function() {
                return b().pipe(function() {
                    var c = a.Deferred();
                    return c.resolve.apply(c, arguments)
                }, function() {
                    var b = a.Deferred();
                    r(c, ++t);
                    return b.reject.apply(b, arguments)
                })
            }
        }

        function l(c, b, e) {
            w || (v.cf(), v.ld(), w = !0);
            return a.Deferred().resolve(c, b, e)
        }

        function m() {
            var a = (b.state("gwm-fetch-merch-data-store") || {}).failCount || 0;
            h.hide();
            b.state("gwm-fetch-merch-data-store", {
                failCount: a + 1
            })
        }
        var v = c.build("data-store");
        c = function() {};
        var r = g.ue && g.ue.count ?
            g.ue.count.bind(g.ue) : c,
            w, t = 0;
        return function(c) {
            if ("" !== c) {
                var b;
                try {
                    b = e()
                } catch (d) {
                    b = []
                }
                0 < b.length && (c = c.match(/\?/) ? c + "\x26" : c + "?", c += "atfAsins\x3d" + b.join());
                b = a.ajax.bind(a, {
                    url: c,
                    type: "GET",
                    contentType: "application/json",
                    timeout: 1E4
                });
                b = p("gwmMerchGetDataStoreFailure", b);
                b = k.bind(null, n(), b);
                h.show();
                v.bb();
                return b().pipe(l).pipe(q).done(f).fail(m)
            }
        }
    });
    "use strict";
    d.when("jQuery").register("loading-indicator", function(a) {
        return {
            hide: function() {
                a(".gwm-RecommendationsText").hide();
                return a(".gwm-LoadingIndicator").addClass("aok-hidden")
            },
            show: function() {
                a(".gwm-RecommendationsText").show();
                return a(".gwm-LoadingIndicator").removeClass("aok-hidden")
            }
        }
    });
    "use strict";
    d.when("A").execute(function(a) {
        var b = a.once(function() {
            d.when("afterLoad").execute(function() {
                d.register("gw-start-preload", function() {})
            })
        });
        d.when("merch-data-store").execute(function(h) {
            a.state.bind("gwm-card-loader", function(a, e) {
                e.request && a.request && a.request.done(b);
                e.cards && 0 === a.cards.length && b()
            })
        })
    });
    "use strict";
    var u = {},
        z = function() {};
    d.when("bind").execute(function(a) {
        var b =
            "function" === typeof g.uet ? a(g.uet, g) : z,
            h = "function" === typeof g.uex ? a(g.uex, g) : z;
        d.register("csm-widget-builder", function() {
            return {
                build: function(a) {
                    a in u ? u[a]++ : u[a] = 1;
                    var e = a + "-" + u[a];
                    return {
                        bb: function() {
                            b("bb", e, {
                                wb: 1
                            })
                        },
                        cf: function() {
                            b("cf", e, {
                                wb: 1
                            })
                        },
                        ld: function() {
                            h("ld", e, {
                                wb: 1
                            })
                        },
                        scope: function() {
                            return e
                        }
                    }
                }
            }
        })
    });
    "use strict";
    d.when("jQuery", "A", "atf-asins-marked").register("get-atf-asins", function(a, b) {
        return function() {
            var b = [],
                c;
            a(".gwm-widget-atf").each(function() {
                this.classList.forEach(function(a) {
                    0 ===
                        a.indexOf("csm-asin-") && (c = a.replace("csm-asin-", "").split("-"), c.forEach(function(a) {
                            a && "X" !== a && -1 === b.indexOf(a) && b.push(a)
                        }))
                })
            });
            return b
        }
    });
    "use strict";
    d.when("A", "jQuery", "ready").execute(function(a, b) {
        function h() {
            var a, e, h, f, d, g;
            b(".gwm-widget").each(function() {
                e = [];
                f = [];
                b(this).find("a").filter(":not(.gwm-Card-secondaryViewLink,[aria-hidden\x3dfalse],[class*\x3dcsm-asin])").each(function() {
                    (a = (g = /\/(?:(?:product|d|dp|udp|reader|detail)|(?:d(?:\/[^\/]+)*))\/([0-9][0-9]{8}[0-9X]|[A-Z][A-Z0-9]{9})/.exec(b(this).attr("href"))) &&
                        g[1]) && -1 === e.indexOf(a) && e.push(a);
                    if (d = b(this).parent().attr("data-deal-target")) h = b.parseJSON(d).dealID, -1 === f.indexOf(h) && (f.push(h), a || e.push("X"))
                });
                0 < e.length && b(this).addClass("csm-asin-" + e.join("-"));
                0 < f.length && b(this).addClass("csm-deal-id-" + f.join("-"))
            })
        }
        h();
        d.declare("atf-asins-marked", 1);
        d.when("A", "jQuery", "merch-data-store").execute(h);
        d.when("run-when-new-cards").execute(function(a) {
            a(h)
        })
    });
    "use strict";
    d.when("merch-data-store", "mark-af").execute(function(a, b) {
        function h(a) {
            try {
                document.getElementById("gwm-Deck-btf").appendChild(a)
            } catch (b) {
                g.ueLogError &&
                    g.ueLogError(b, {
                        logLevel: "Error",
                        attribute: "data-store-af-images",
                        message: "error thrown while executing " + a.innerHTML
                    })
            }
        }
        g.gm.o("af", function() {
            var c = g.gm.r("af-additional-images") || [];
            if ("afImageUrls" in a && a.afImageUrls) {
                var c = c.concat(a.afImageUrls),
                    e = document.createElement("script");
                e.innerHTML = "window.gm.s('data-store-af-images', " + JSON.stringify(a.afImageUrls) + ");";
                h(e)
            } else g.gm.r("data-store-af-images") && (c = c.concat(g.gm.r("data-store-af-images")));
            g.gm.wil(c, function() {
                g.gm.w("cf", function() {
                    b()
                })
            })
        })
    });
    "use strict";
    d.when("A").register("insertHTMLBefore", function(a) {
        return function(b, h) {
            var c = document.createElement("div"),
                e, d, f, k;
            c.innerHTML = b;
            e = Array.prototype.slice.call(c.getElementsByTagName("img"));
            b = Array.prototype.slice.call(c.getElementsByTagName("script"));
            d = Array.prototype.slice.call(c.children);
            for (c = 0; c < d.length; ++c) h.parentNode.insertBefore(d[c], h);
            for (c = 0; c < e.length; ++c) a.loadDynamicImage(a.$(e[c]));
            for (c = 0; c < b.length; ++c) {
                e = b[c];
                d = document.createElement("script");
                f = e.attributes;
                for (h =
                    0; h < f.length; ++h) k = f.item(h), k.specified && d.setAttribute(k.name, k.value);
                d.innerHTML = e.innerHTML;
                try {
                    (document.head || document.getElementsByTagName("head")[0]).appendChild(d).parentNode.removeChild(d)
                } catch (n) {
                    g.ueLogError && g.ueLogError(n, {
                        logLevel: "ERROR",
                        attribution: "gateway-phone:insert-before:docHead",
                        message: "error thrown while executing " + e.innerHTML
                    })
                }
            }
        }
    });
    "use strict";
    d.when("A").execute(function(a) {
        var b = [];
        a.state.bind("gwm-card-inserter", function(a, c) {
            if (c.inserted)
                for (a = 0; a < b.length; ++a) b[a]()
        });
        d.declare("run-when-new-cards", function(a) {
            b.push(a)
        })
    });
    "use strict";
    d.when("jQuery", "increment-counter", "get-jitter").register("watch-deal", function(a, b, h) {
        function c(d, f, g, n, p) {
            var l = a.Deferred(),
                m = "/gp/deal/ajax/watchDeal.html";
            g && (m = m.match(/\?/) ? m + "\x26" : m + "?", m += "ref_\x3d" + g);
            if (!(d in e)) throw "Invalid acttion (" + d + ") when calling watchDealAjax.";
            a.ajax({
                type: "POST",
                url: m,
                data: {
                    dealId: f,
                    watchAction: d
                },
                contentType: "application/x-www-form-urlencoded"
            }).success(function(a) {
                l.resolve(a)
            }).fail(function() {
                b("gwmWatchDealAjaxFailure");
                0 < p ? setTimeout(function() {
                    c(d, f, 2 * n, --p).done(function(a) {
                        l.resolve(a)
                    }).fail(function() {
                        l.reject()
                    })
                }, n + h(1E3)) : l.reject()
            });
            return l
        }
        var e = {
            ADD: !0,
            REMOVE: !0
        };
        return function(a, b, e) {
            return c(a, b, e, 1E4, 3)
        }
    });
    d.when("A", "deal-tracker").execute(function(a, b) {
        a.declarative("toggle-watch-deal", "click", function(a) {
            var c = a.data.dealId;
            a = a.$currentTarget.find(".gwm-DealsCard-watchThisDealToggle");
            a.is(":disabled") || (a = a.data("ref-tag").replace(/ACTION/, b.isWatched(c) ? "uwd" : "wtd"), b.isWatched(c) ? b.unwatchDeal(c,
                a) : b.watchDeal(c, a))
        })
    });
    "use strict";
    d.when("A", "sessionId", "marketplaceId", "increment-counter").execute(function(a, b, h, c) {
        var e;
        d.now("customerId").execute(function(a) {
            a && (e = a)
        });
        d.declare("request-status-batch", function(d) {
            d = a.$.map(d, function(a) {
                return a.getDealTarget()
            });
            d = {
                requestMetadata: {
                    marketplaceID: h,
                    clientID: "gateway-mobile",
                    sessionID: b
                },
                dealTargets: d,
                responseSize: "STATUS_ONLY",
                itemResponseSize: "DEFAULT_WITH_PREEMPTIVE_LEAKING"
            };
            e && (d.requestMetadata.customerID = e);
            c("gwmGetDealStatusCall");
            return a.$.ajax({
                type: "POST",
                url: "/xa/dealcontent/v2/GetDealStatus?nocache\x3d" + Date.now(),
                data: JSON.stringify(d)
            }).success(function() {
                c("gwmDealStatusAjaxSuccess")
            }).fail(function() {
                c("gwmDealStatusAjaxFailure")
            })
        })
    });
    "use strict";
    d.declare("get-jitter", function(a) {
        return Math.round(2 * Math.random() * a - a)
    });
    "use strict";
    d.declare("increment-counter", function(a) {
        g.ue && g.ue.count && g.ue.count(a, 1 + (g.ue.count(a) || 0))
    });
    "use strict";
    d.when("bind").register("deal-status-batcher", function(a) {
        var b = {
            _deals: [],
            enqueueDeal: function(a) {
                this._deals.push(a);
                this._deals.sort(function(a, b) {
                    return a.getDealStatusExpirationTime() - b.getDealStatusExpirationTime()
                })
            },
            popNextDealStatusBatch: function() {
                var a = this.getNextDealExpiration(),
                    c = [],
                    b = 0;
                if (!this._deals.length) return c;
                for (; 12 > b && b < this._deals.length && 12E3 > this._deals[b].getDealStatusExpirationTime() - a;) b++;
                b && c.push.apply(c, this._deals.splice(0, b));
                c.sort(function(a, b) {
                    return a.cmp(b)
                });
                return c
            },
            getNextDealExpiration: function() {
                return 0 === this._deals.length ?
                    null : this._deals[0].getDealStatusExpirationTime()
            }
        };
        b.enqueueDeal = a(b.enqueueDeal, b);
        b.popNextDealStatusBatch = a(b.popNextDealStatusBatch, b);
        b.getNextDealExpiration = a(b.getNextDealExpiration, b);
        return b
    });
    "use strict";
    d.when("A", "jQuery", "ready").register("widget-counter", function(a, b) {
        var d, c;
        return {
            addCounts: function() {
                d = 1;
                b(".gwm-widget").each(function() {
                    var a = ("0" + d).slice(-2),
                        c = b(this),
                        f = 1;
                    c.attr("cel_widget_id", "card-" + a);
                    c.attr("data-cel-widget", "card-" + a);
                    c.find(".gwm-widget-slide").each(function() {
                        var c =
                            b(this);
                        (new RegExp("card-" + a + ".*")).exec(c.attr("cel_widget_id")) || c.attr("cel_widget_id", "card-" + a + "-" + ("0" + f).slice(-2));
                        f++
                    });
                    d++
                });
                c && "function" === typeof c && c()
            },
            setCallback: function(a) {
                c = a
            }
        }
    });
    d.when("widget-counter", "run-when-new-cards").execute(function(a, b) {
        a.addCounts();
        b(a.addCounts)
    });
    "use strict";
    d.declare("mark-af", function() {
        g.gm.mpe("af", {
            ld: 1
        })
    });
    "use strict";
    d.when("jQuery", "bind", "watch-deal", "increment-counter").register("deal", function(a, b, d, c) {
        function e(a) {
            return 10 > parseInt(a,
                10) ? "0" + a : "" + a
        }

        function g(a) {
            return {
                hours: Math.floor(a / 36E5),
                minutes: Math.floor(a / 6E4) % 60,
                seconds: Math.floor(a / 1E3) % 60
            }
        }

        function f(a, c) {
            this.domElements = [];
            this.lastMsCacheTtl = 6E4;
            this.lastDealStatus;
            this.lastDealStatusExpiration = c || Date.now() + 6E4;
            this.timerStatus;
            this.lastCssClass;
            this.endTime;
            this.dealID = a
        }
        var k = {
                AVAILABLE: "gwm-DealsState-dealAvailable",
                UPCOMING: "gwm-DealsState-dealUpcoming",
                WAITLIST: "gwm-DealsState-dealAvailable",
                RESERVED: "gwm-DealsState-dealAvailable",
                WAITLISTFULL: "gwm-DealsState-dealAvailable",
                EXPIRED: "gwm-DealsState-dealExpired",
                SUPPRESSED: "gwm-DealsState-dealExpired",
                SOLDOUT: "gwm-DealsState-dealSoldOut"
            },
            n = {
                EXPIRED: !0,
                SUPPRESSED: !0,
                SOLDOUT: !0
            },
            p = {
                AVAILABLE: !0,
                WAITLIST: !0,
                RESERVED: !0,
                WAITLISTFULL: !0
            };
        f.prototype.determineCurrentDealState = function() {
            return this.lastDealStatus && this.timerStatus && this.lastDealStatus === this.timerStatus ? this.timerStatus : this.lastDealStatus && this.lastDealStatus in n ? this.lastDealStatus : this.timerStatus && this.timerStatus in n ? this.timerStatus : this.timerStatus ||
                this.lastDealStatus ? this.timerStatus && !this.lastDealStatus ? this.timerStatus : !this.timerStatus && this.lastDealStatus ? this.lastDealStatus : "UPCOMING" === this.timerStatus && this.lastDealStatus in p || "UPCOMING" === this.lastDealStatus && this.timerStatus in p ? this.timerStatus : this.lastDealStatus : "UNKNOWN"
        };
        f.prototype.updateUIState = function() {
            var b = this.determineCurrentDealState(),
                e = a(this.domElements),
                d = k[b] || "",
                f = "";
            "EXPIRED" === b ? (f = e.find("div.gwm-DealsCard-dealExpiredText").text(), e.trigger("dealChanged")) :
                "SOLDOUT" === b && (f = e.find("div.gwm-DealsCard-dealSoldOutText").text(), e.trigger("dealChanged"));
            "UNKNOWN" === b ? c("gwmUnknownDealState") : b in k ? d !== this.lastCssClass && (e.removeClass(function(a, b) {
                return (b.match(/gwm-DealsState\S+/g) || []).join(" ")
            }).addClass(d), this.lastCssClass = d, f && (e.find("a.gwm-u-a11y-hidden").append(". " + f), e.find("a.gwm-u-a11y-timer").remove())) : c("gwmUnrecognizedDealState")
        };
        f.prototype.initializeDealCountdown = function(b, c) {
            var e = this;
            b.find(".gwm-DealsCard-timer").each(function() {
                var b =
                    a(this),
                    d, l;
                b.data("start-time") ? d = b.data("start-time") : (d = parseInt(b.data("ms-to-start"), 10), d = c + d, b.attr("data-start-time", d));
                b.data("end-time") ? l = parseInt(b.data("end-time"), 10) : (l = parseInt(b.data("ms-to-end"), 10), l = c + l, b.attr("data-end-time", l));
                e.timerStatus = c > l ? "EXPIRED" : c < d ? "UPCOMING" : "AVAILABLE"
            })
        };
        f.prototype.addDealDomElement = function(a, b) {
            a.data("tracked") || (a.data("tracked", !0), this.domElements.push(a.get(0)), this.initializeDealCountdown(a, b), this.lastCssClass = "", this.updateUIState())
        };
        f.prototype.update = function(a, b) {
            a.dealState && (this.lastDealStatus = a.dealState);
            a.msCacheTtl && (this.lastMsCacheTtl = Math.max(6E4, a.msCacheTtl));
            this.lastDealStatusExpiration = b + this.lastMsCacheTtl;
            this.updateUIState()
        };
        f.prototype.updateTimersAndState = function(b) {
            var c = this;
            a(this.domElements).find(".gwm-DealsCard-timer").each(function() {
                var d = a(this),
                    f = d.data("start-time"),
                    h = d.data("end-time"),
                    k;
                !f && b < h || (k = b >= f ? g(h - b) : g(f - b), b < f ? (c.timerStatus = "UPCOMING", f = 0 === k.hours ? d.data("minutes-countdown-to-start-template") :
                    d.data("hours-countdown-to-start-template")) : b > h ? (c.timerStatus = "EXPIRED", f = "") : (c.timerStatus = "AVAILABLE", f = 0 === k.hours ? d.data("minutes-countdown-to-end-template") : d.data("hours-countdown-to-end-template")), f = f.replace("_hours_", k.hours), f = f.replace("_minutes_", e(k.minutes)), f = f.replace("_seconds_", e(k.seconds)), d.html(f))
            });
            this.updateUIState()
        };
        f.prototype.isCountdownEnabled = function() {
            var a = this.getEndTime();
            return a && a > Date.now()
        };
        f.prototype.isFinished = function() {
            var a;
            return this.lastDealStatus &&
                this.lastDealStatus in n ? !0 : (a = this.getEndTime()) && a <= Date.now()
        };
        f.prototype.getEndTime = function() {
            this.endTime || (this.endTime = a(this.domElements).find(".gwm-DealsCard-timer").data("end-time"));
            return this.endTime
        };
        f.prototype.getDealStatusExpirationTime = function() {
            return this.lastDealStatusExpiration
        };
        f.prototype.watchDeal = function(b) {
            var c = a(this.domElements).find(".gwm-DealsCard-watchThisDealToggle");
            c.prop("disabled", !0);
            d("ADD", this.dealID, b).done(function(a) {
                a.status && c.addClass("gwm-DealsCard-watchingDeal")
            }).always(function() {
                c.prop("disabled", !1)
            })
        };
        f.prototype.unwatchDeal = function(b) {
            var c = a(this.domElements).find(".gwm-DealsCard-watchThisDealToggle");
            c.prop("disabled", !0);
            d("REMOVE", this.dealID, b).done(function(a) {
                a.status && c.removeClass("gwm-DealsCard-watchingDeal")
            }).always(function() {
                c.prop("disabled", !1)
            })
        };
        f.prototype.isWatched = function() {
            var b = null;
            a(this.domElements).find(".gwm-DealsCard-watchThisDealToggle").each(function() {
                b = a(this).hasClass("gwm-DealsCard-watchingDeal")
            });
            return b
        };
        f.prototype.getDealTarget = function() {
            return {
                dealID: this.dealID
            }
        };
        f.prototype.cmp = function(a) {
            a = a.dealID;
            return this.dealID < a ? -1 : this.dealID === a ? 0 : 1
        };
        return f
    });
    "use strict";
    d.when("jQuery", "run-when-new-cards", "deal", "deal-status-batcher", "request-status-batch", "get-jitter", "increment-counter").register("deal-tracker", function(a, b, d, c, e, g, f) {
        function k() {
            var a = c.getNextDealExpiration(),
                b = a - Date.now();
            0 > b && (b = 0);
            r && clearTimeout(r);
            a && (r = setTimeout(n, b + g(Math.min(b, 1E3))))
        }

        function n() {
            var a = Date.now(),
                b = -1,
                d = -1,
                f;
            r = null;
            var h = [];
            do f = c.popNextDealStatusBatch(),
                0 < f.length && (b = e(f), h.push({
                    deferred: b,
                    batch: f
                }), d = c.getNextDealExpiration(), b = c.getNextDealExpiration() - a); while (0 < d && 0 >= b);
            for (a = 0; a < h.length; ++a) f = h[a].batch, h[a].deferred.always(function(a, b, e) {
                var d, h = Date.now();
                for (e = 0; e < f.length; ++e) b = f[e], d = b.dealID, a.dealStatus && a.dealStatus.hasOwnProperty(d) ? (d = a.dealStatus[d], b.update(d, h)) : b.update({}, h), b.isFinished() || c.enqueueDeal(b);
                k()
            });
            0 < d && 0 < b && k()
        }

        function p() {
            var a = Date.now(),
                b = !1,
                c;
            for (c in m) m.hasOwnProperty(c) && (m[c].updateTimersAndState(a),
                b = b || m[c].isCountdownEnabled());
            b && (v = setTimeout(p, 1E3))
        }

        function l() {
            var b = Date.now(),
                e, f = [],
                g;
            a("[data-deal-target]").each(function() {
                var c = a(this),
                    e = c.data("deal-target").dealID;
                m[e] || (m[e] = new d(e), f.push(m[e]));
                m[e].addDealDomElement(c, b);
                m[e].updateTimersAndState(b)
            });
            for (g = 0; g < f.length; ++g) c.enqueueDeal(f[g]);
            f.length && k();
            if (!v)
                for (e in m)
                    if (m[e] && m[e].isCountdownEnabled()) {
                        v = setTimeout(p, 1E3);
                        break
                    }
        }
        var m = {},
            v, r;
        l();
        b(l);
        return {
            watchDeal: function(a, b) {
                a in m && m[a].watchDeal(b)
            },
            unwatchDeal: function(a,
                b) {
                a in m && m[a].unwatchDeal(b)
            },
            isWatched: function(a) {
                return a in m ? m[a].isWatched() : null
            }
        }
    });
    "use strict";
    d.when("jQuery", "increment-counter").execute("deal-staus-tracker", function(a, b) {
        function h() {
            a(document).ready(function() {
                $stack = a(this);
                $stack.find(".gwm-DealsStack").each(function() {
                    a(this).bind("dealChanged", function() {
                        var c = a(this);
                        c ? (c.remove(), b("gwCollapsedDeal")) : b("gwCannotCollapseDeal")
                    })
                })
            })
        }
        h();
        d.when("run-when-new-cards").execute(function(a) {
            a(h)
        })
    });
    "use strict";
    d.when("jQuery",
        "increment-counter").execute(function(a, b) {
        d.declare("recordClick", function(d, c, e) {
            a.ajax(d, {
                complete: c,
                timeout: e || 5E3
            }).error(function() {
                b("recordClickFailure")
            })
        })
    });
    "use strict";
    d.when("jQuery", "A", "recordClick").execute(function(a, b, d) {
        function c(b) {
            b.find("img").each(function() {
                a(this).toggleClass("aok-hidden")
            })
        }

        function e(b, e) {
            if (b.target.classList.contains("gwm-u-touchTarget")) {
                b.preventDefault();
                if (a(e).find("#gwm-MultiDrilldownAsins").is(":visible")) {
                    e = a(e);
                    var g = e.find("#gwm-MultiDrilldownAsins"),
                        n = e.find(".gwm-Card-secondaryViewLink");
                    e.find(".gwm-DrilldownBtn").addClass("gwm-DrilldownBtn-closed");
                    g.hide();
                    n.show();
                    c(g)
                } else n = a(e), e = n.find("#gwm-MultiDrilldownAsins"), g = n.find(".gwm-Card-secondaryViewLink"), n = n.find(".gwm-DrilldownBtn"), c(e), n.removeClass("gwm-DrilldownBtn-closed"), e.show(), g.hide();
                (b = b.target.getAttribute("data-recordclickurl")) && d(b, a.noop);
                return !1
            }
        }
        a("body").delegate(".gwm-widget.csm-widget-type-multi-asin-card:has(.gwm-DrilldownBtn)", "click", function(a) {
            return e(a,
                this)
        });
        a("body").delegate(".gwm-widget.csm-widget-type-alexa-multi-skillz-card:has(.gwm-DrilldownBtn)", "click", function(a) {
            return e(a, this)
        })
    });
    "use strict";
    d.when("jQuery", "A", "recordClick").execute(function(a, b, d) {
        function c(b) {
            a(b).find("img").each(function() {
                a(this).addClass("aok-hidden")
            })
        }

        function e(b) {
            a(b).find("img").each(function() {
                a(this).removeClass("aok-hidden")
            })
        }

        function g(b) {
            b.children().each(function() {
                1 === a(this).data("expanded") && (e(this), a(this).show())
            })
        }

        function f(b) {
            b.children().each(function() {
                a(this).is(":visible") &&
                    (a(this).data("expanded", 1), a(this).hide())
            })
        }

        function k(b) {
            var c = b.find("#gwm-QuadDrilldownAsins \x3e .gwm-QuadCard-quadrant"),
                d = b.find(".gwm-Card-secondaryViewLink"),
                f = b.find(".gwm-DrilldownBtn");
            b = b.find(".gwm-QuadCard-productDetailCards");
            e(c);
            f.removeClass("gwm-DrilldownBtn-closed");
            a(c).each(function() {
                a(this).show()
            });
            d.hide();
            b.length && g(b)
        }

        function n(b) {
            var e = b.find("#gwm-QuadDrilldownAsins \x3e .gwm-QuadCard-quadrant"),
                d = b.find(".gwm-Card-secondaryViewLink"),
                g = b.find(".gwm-DrilldownBtn");
            b = b.find(".gwm-QuadCard-productDetailCards");
            g.addClass("gwm-DrilldownBtn-closed");
            a(e).each(function() {
                a(this).hide()
            });
            d.show();
            b.length && f(b);
            c(e)
        }

        function p(b, c) {
            var e;
            if (b.target.classList.contains("gwm-u-touchTarget")) return b.preventDefault(), e = a(c).find("#gwm-QuadDrilldownAsins \x3e .gwm-QuadCard-quadrant"), a(e[0]).is(":visible") ? n(a(c)) : k(a(c)), (b = b.target.getAttribute("data-recordclickurl")) && d(b, a.noop), !1
        }
        a("body").delegate(".gwm-widget.csm-widget-type-quad-card:has(.gwm-DrilldownBtn)",
            "click",
            function(a) {
                return p(a, this)
            });
        a("body").delegate(".gwm-widget.csm-widget-type-bright-buy-pccs-card:has(.gwm-DrilldownBtn)", "click", function(a) {
            return p(a, this)
        })
    });
    "use strict";
    "use strict";
    d.when("jQuery", "increment-counter", "pageType", "ready").execute(function(a, b, d) {
        function c() {
            d.match(/gateway-phone-apps/) ? b("gwmGatewayPhoneAppClicksCount") : d.match(/gateway-phone-web/) && b("gwmGatewayPhoneWebClicksCount")
        }(a = document.getElementById("gwm-Deck")) && a.addEventListener && a.addEventListener("click",
            c)
    });
    "use strict";
    d.when("jQuery", "A", "ready").execute("grid-bottom-1", function(a, b) {
        var d = b.once(function() {
            var c = a(".gwm-grid-bottom-1");
            c.removeClass("aok-hidden");
            c.addClass("celwidget");
            if (0 < c.length)
                for (var c = c[0].getElementsByClassName("a-dynamic-image"), e = 0; e < c.length; e++) b.loadDynamicImage(c[e])
        });
        b.state.bind("gwm-card-loader", function(a) {
            !a.request && a.cards && 0 === a.cards.length && d()
        })
    });
    "use strict";
    d.when("A", "jQuery").register("client-weblab", function(a, b) {
        function d(a, b, g, f) {
            this.id =
                a;
            this.name = b;
            this.treatment = g;
            this.element = f;
            this.timer = null;
            this.hasFired = this.timerStarted = !1
        }
        d.prototype.isHalfOnScreen = function() {
            var a = this.element.getBoundingClientRect(),
                b = a.top,
                a = a.bottom,
                d = (a - b) / 2;
            return a >= d && b <= g.innerHeight - d
        };
        return d
    });
    "use strict";
    d.when("jQuery", "client-weblab-manager", "run-when-new-cards", "ready").execute("client-weblab-finder", function(a, b, d) {
        function c() {
            var c = a(".client-wlt"),
                d = c.length - b.getNumWeblabsSeen();
            0 < d && c.slice(-d).each(function() {
                var c = a(this).attr("client-wlt-id"),
                    d = a(this).attr("client-wlt-name"),
                    e = a(this).attr("client-wlt-treatment"),
                    g = a(this)[0];
                b.addClientWeblab(c, d, e, g)
            })
        }
        c();
        d(c)
    });
    "use strict";
    d.when("A", "jQuery", "client-weblab").register("client-weblab-manager", function(a, b, d) {
        function c(a) {
            g.ue.trigger && g.ue.trigger(String(a.name), String(a.treatment));
            delete q[a.id];
            f[a.id] = !0
        }
        var e = 0,
            q = {},
            f = {};
        g.history && history.state && history.state.triggeredClientWeblabs && (f = history.state.triggeredClientWeblabs);
        a.on("resize scroll load", function() {
            for (clientWeblab in q) {
                var a =
                    q[clientWeblab];
                if (a.isHalfOnScreen()) {
                    var b = c;
                    a.timerStarted || (a.timerStarted = !0, a.timer = setTimeout(b, 1E3, a))
                } else a.timerStarted && (a.timerStarted = !1, clearTimeout(a.timer))
            }
        });
        return {
            addClientWeblab: function(a, b, c, g) {
                e++;
                f[a] || (q[a] = new d(a, b, c, g))
            },
            getNumWeblabsSeen: function() {
                return e
            },
            getTriggeredWeblabs: function() {
                return f
            }
        }
    });
    "use strict";
    d.when("A", "jQuery", "increment-counter", "ready").register("auto-crop-image-finder", function(a, b, d) {
        var c, e, g = 0,
            f = /card-(\d+)/,
            k = /(images-((na)|(eu)|(fe)|(cn)).ssl-images-amazon.com|m.media-amazon.com)\/images\/I\/.*.jpg/;
        return {
            findImage: function() {
                b(".gwm-widget").each(function() {
                    var a = b(this);
                    c = a.attr("data-csm-widget-type");
                    e = !1;
                    var p = parseInt(f.exec(a.attr("cel_widget_id"))[1], 10);
                    p > g && (g = p, a.find("img").each(function() {
                        if (!0 !== e) {
                            var a = b(this).attr("src");
                            k.exec(a) && -1 === a.indexOf("_AC_") && (d("GWM:Diagnostics:MissingImageACTag:" + c), e = !0)
                        }
                    }))
                })
            }
        }
    });
    d.when("auto-crop-image-finder", "run-when-new-cards").execute(function(a, b) {
        a.findImage();
        b(a.findImage)
    })
});
/* ******** */
(function(f) {
    var b = window.AmazonUIPageJS || window.P,
        m = b._namespace || b.attributeErrors,
        a = m ? m("GWMWebAssets", "") : b;
    a.guardFatal ? a.guardFatal(f)(a, window) : a.execute(function() {
        f(a, window)
    })
})(function(f, b, m) {
    f.when("jQuery", "A", "gwm-nav", "ready").execute("basic-footer", function(a, b, c) {
        function f(a) {
            !a.request && a.cards && 0 === a.cards.length && d.removeClass("aok-hidden")
        }
        var d = c.getFooterEl();
        b.state.bind("gwm-card-loader", f);
        f(b.state("gwm-card-loader") || {})
    });
    "use strict";
    f.when("jQuery", "bind").register("gwm-nav",
        function(a, p) {
            function c() {
                return a("#navbar")
            }

            function h() {
                return "nav-search-keywords"
            }

            function d() {
                return c().find("#nav-search-form")
            }

            function g() {
                return c().outerHeight()
            }
            var l = a(b),
                e = {
                    hide: a.noop,
                    show: a.noop,
                    hideGlass: a.noop,
                    showGlass: a.noop
                },
                n = {
                    getNavEl: c,
                    getFooterEl: function() {
                        return a("#gwm-Nav-footer")
                    },
                    getSearchInputID: h,
                    getSearchInput: function() {
                        return c().find("#" + h())
                    },
                    getSearchForm: d,
                    height: g,
                    heightWithoutSearch: function() {
                        return g() - d().outerHeight()
                    },
                    scrollNavToTop: function() {
                        var a =
                            c()[0].object.getBoundingClientRect();
                        0 < a.top && l.scrollTop(l.scrollTop() + a.top)
                    },
                    hideSearch: function() {
                        e.hide()
                    },
                    showSearch: function() {
                        e.show()
                    },
                    hideGlass: function() {
                        e.hideGlass()
                    },
                    showGlass: function() {
                        e.showGlass()
                    }
                };
            f.when("nav.searchbar").execute(function(a) {
                e = a;
                e.maintainHeightWhenClosed(!0);
                n.hideSearch = p(e.hide, e);
                n.showSearch = p(e.show, e)
            });
            return n
        });
    "use strict";
    b.history && history.state && "function" === typeof history.replaceState && history.state.cards && history.state.deck && history.state.deck.btf &&
        "scrollTop" in history.state ? b.ue && b.ue.tag && b.ue.tag("gwmCardHistory") : b.ue && b.ue.tag && b.ue.tag("gwmNoCardHistory");
    f.when("A", "cfImages", "isRecognized", "isSpecialSlots", "isPercolate", "store-card-history", "renderingStack", "client-weblab-manager").execute(function(a, f, c, h, d, g, l, e) {
        function n(a) {
            return (a = document.getElementById(a)) && a.innerHTML || ""
        }

        function m(k) {
            if ((k = a.state("gwm-clear-card-history")) && k.value) g({});
            else {
                k = a.state("gwm-card-loader");
                var q;
                q = history.state && "number" === typeof history.state.time ?
                    history.state.time : b.performance && b.performance.timing && b.performance.timing.domComplete || Date.now();
                a.$("#gwm-Deck img").each(function() {
                    if (this.complete && this.naturalHeight && a.$(this).is(":visible")) {
                        var b = parseInt(a.$(this).css("padding-left"), 10),
                            c = parseInt(a.$(this).css("padding-right"), 10),
                            d = parseInt(a.$(this).css("padding-top"), 10),
                            e = parseInt(a.$(this).css("padding-bottom"), 10);
                        this.setAttribute("width", this.width + b + c);
                        this.setAttribute("height", this.height + d + e)
                    }
                });
                k = {
                    deck: {
                        btf: n("gwm-Deck-btf")
                    },
                    cards: k && k.cards || [],
                    time: q,
                    scrollTop: b.scrollY,
                    cfImages: f,
                    wasRec: c,
                    wasSpecialSlots: h,
                    wasPercolate: d,
                    lastStack: l,
                    triggeredClientWeblabs: e.getTriggeredWeblabs()
                };
                g(k)
            }
        }
        b.navigator.userAgent.match(/Android 4\.1/) || b.addEventListener("beforeunload", m)
    });
    "use strict";
    f.when("A", "isJava").register("store-card-history", function(a, f) {
        return function(c) {
            var h = b.ueLogError || a.$.noop;
            if (c && c.deck) try {
                if (f) {
                    var d = location.href,
                        g = {
                            wasRec: c.wasRec,
                            wasSpecialSlots: c.wasSpecialSlots,
                            wasPercolate: c.wasPercolate,
                            time: c.time
                        },
                        g = btoa(JSON.stringify(g)),
                        g = "gwHistory\x3d" + g;
                    if (/gwHistory=[^&#]*/.test(d)) d.replace(/gwHistory=[^&#]*/, g);
                    else if ("?" === d.slice(-1) || "\x26" === d.slice(-1)) d += g;
                    else var l = /\?/.test(d) ? "\x26" : "?",
                        d = d + (l + g);
                    history.replaceState(c, null, d)
                } else history.replaceState(c, null)
            } catch (e) {
                history.replaceState({}, null), h(e, {
                    logLevel: "WARN",
                    attribution: "GWM:CardHistory",
                    message: "stateObjectHasDeck"
                })
            } else try {
                history.replaceState({}, null)
            } catch (e) {
                h(e, {
                    logLevel: "WARN",
                    attribution: "GWM:CardHistory",
                    message: "stateObjectNoDeck"
                })
            }
        }
    });
    "use strict";
    f.when("A", "ready").register("clear-card-history", function(a) {
        a.state("gwm-clear-card-history", {
            value: !1
        });
        return function() {
            a.state("gwm-clear-card-history", {
                value: !0
            })
        }
    });
    f.declare("gwm-web-asset-loaded", {})
});
/* ******** */