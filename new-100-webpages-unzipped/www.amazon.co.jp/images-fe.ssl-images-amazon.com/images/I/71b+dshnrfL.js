(function(l) {
    var h = window.AmazonUIPageJS || window.P,
        z = h._namespace || h.attributeErrors,
        a = z ? z("GoldboxUDPAssets", "") : h;
    a.guardFatal ? a.guardFatal(l)(a, window) : a.execute(function() {
        l(a, window)
    })
})(function(l, h, z) {
    l.when("A").register("gb-udp-event-emitter", function(a) {
        return a.createClass({
            init: function() {
                this._events = this._events || {}
            },
            on: function(a, d) {
                this._events[a] = this._events[a] || [];
                this._events[a].push(d)
            },
            off: function(a, d) {
                !1 !== a in this._events && this._events[a].splice(this._events[a].indexOf(d),
                    1)
            },
            trigger: function(a) {
                if (!1 !== a in this._events)
                    for (var d = 0; d < this._events[a].length; d++) this._events[a][d].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        })
    });
    h.GBResources || function() {
        h.GBResources = new function(a, b) {
            if (void 0 === b)
                for (var d in b) a[d] = b[d];
            b = a && a.__init__ || function() {};
            b.prototype = a;
            return b
        }({
            __init__: function(a) {
                this.strings = {};
                this.images = {};
                this.features = {};
                this.customerData = {};
                this.categories = [];
                this.dealDebug = !1;
                this.loadedUrls = {};
                this.amznMerchantID = this.preload_img_div =
                    null;
                this.nodeIdToCategoryMap = {};
                this.registered = {};
                null != a && (a.strings && this.registerStrings(a.strings), a.images && this.registerImages(a.images), a.features && this.registerFeatures(a.features))
            },
            registerStrings: function(a) {
                this.registerResources(this.strings, a)
            },
            getString: function(a, b) {
                if (!(a in this.strings)) return this.log('!!! ERROR: StringId "' + a + '" does not exist in the strings repository.'), "";
                a = "" + this.strings[a];
                if (null == b) return a;
                for (var d in b) a = a.replace(new RegExp("\\${" + d + "}", "g"), b[d]);
                return a
            },
            registerImages: function(a) {
                this.registerResources(this.images, a);
                for (var b in this.images) this.preloadImage(this.images[b])
            },
            preloadImage: function(a) {
                this.preload_img_div || (this.preload_img_div = this.div({
                    style: "display:none"
                }));
                this.preload_img_div.appendChild(this.img({
                    src: a
                }))
            },
            getImage: function(a) {
                return this.images[a]
            },
            registerFeatures: function(a) {
                this.registerResources(this.features, a)
            },
            getFeature: function(a) {
                return this.features[a]
            },
            registerCustomerData: function(a) {
                this.registerResources(this.customerData,
                    a)
            },
            getCustomerData: function(a) {
                return this.customerData[a]
            },
            registerResources: function(a, b) {
                if (null !== b && null !== a)
                    for (var d in b) a[d] = b[d]
            },
            setDealDebug: function(a) {
                this.dealDebug = a
            },
            getDealDebug: function() {
                return this.dealDebug
            },
            registerFromJSON: function(a) {
                a.GBStrings && this.registerStrings(a.GBStrings);
                a.GBImages && this.registerImages(a.GBImages);
                a.GBWeblabs && this.registerFeatures(a.GBWeblabs);
                a.GBCustomerData && this.registerCustomerData(a.GBCustomerData);
                a.GBWidgetName && this.registerFeatures(a.GBWidgetName);
                a.GBZone && this.registerFeatures(a.GBZone);
                a.GBDealDebug && this.setDealDebug(a.GBDealDebug)
            },
            img: function(a) {
                a = a || {};
                a.border = a.border || 0;
                return this.el("img", a)
            },
            div: function(a, b) {
                return this.el("div", a, b)
            },
            el: function(a, b, d) {
                a = document.createElement(a);
                b && this.set_attributes(a, b);
                d && this.appendChildren(a, d);
                return a
            },
            set_attributes: function(a, b) {
                for (var d in b) "style" == d ? a.style.cssText = b[d] : a[{
                    "class": "className",
                    checked: "defaultChecked",
                    usemap: "useMap",
                    "for": "htmlFor",
                    readonly: "readOnly",
                    colspan: "colSpan",
                    bgcolor: "bgColor",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    valign: "vAlign",
                    nowrap: "noWrap"
                }[d] || d] = b[d]
            },
            log: function(a) {
                a = new Date + ": " + a;
                h.console && h.console.log(a)
            },
            getParamValueFromUrl: function(a, b) {
                a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                return (a = (new RegExp("[\\?\x26]" + a + "\x3d([^\x26#]*)")).exec(b)) ? h.decodeURIComponent(a[1].replace(/\+/g, " ")) : ""
            }
        })
    }();
    h.P && h.P.AUI_BUILD_DATE && (h.gbResources || (h.gbResources = new GBResources), h.gbRegistered = h.gbRegistered || {}, h.gbResources.registered =
        h.gbResources.registered || {}, h.gbRegistered.dealResources || h.gbResources.registered.dealResources || (h.gbRegistered.dealResources = !0, h.gbResources.registered.dealResources = !0, l.register("dealResources", function() {
            return h.GBResources
        })));
    h.Deal || function() {
        h.Deal = {};
        Deal.availableStr = "Available";
        Deal.inCartStr = "InCart";
        Deal.claimedStr = "Claimed";
        Deal.expiredStr = "Expired";
        Deal.waitInLineStr = "WaitInLine";
        Deal.pendingAtcStr = "PendingAddToCart";
        Deal.min = function(a) {
            for (var b = arguments[0], d = 1; d < arguments.length; d++) arguments[d] <
                b && (b = arguments[d]);
            return b
        };
        Deal.max = function(a) {
            for (var b = arguments[0], d = 1; d < arguments.length; d++) arguments[d] > b && (b = arguments[d]);
            return b
        };
        Deal.sortByAsinTimes = function(a, b) {
            return a.status.purchaseStatus.expiresDate - b.status.purchaseStatus.expiresDate
        };
        Deal.filterAsinsByState = function(a, b) {
            for (var d = [], e = 0; e < a.length; e++)
                for (var c = a[e], f = 0; f < b.length; f++)
                    if (c.status.purchaseStatus.state == b[f]) {
                        d.push(c);
                        break
                    }
            return d
        };
        Deal.stateAlertsEnum = {
            ATC_EXPIRES_SOON: 0,
            ATC_EXPIRED: 1,
            WL_PATC: 2,
            WL_PATC_EXPIRED: 3,
            WL_SOLD_OUT: 4,
            WL_DEAL_ENDED: 5
        };
        Deal.pStateTypeEnum = {
            CART: 0,
            WAITLIST: 1,
            EITHER: 2,
            NO_ACTION: 3
        };
        Deal.accessTypeEnum = {
            PRIME_EARLY_ACCESS: "PRIME_EARLY_ACCESS",
            PRIME_ONLY_LD: "PRIME_ONLY_LD",
            PRIME_ONLY_DOTD: "PRIME_ONLY_DOTD",
            APP_EARLY_ACCESS: "APP_EARLY_ACCESS",
            APP_ONLY_LD: "APP_ONLY_LD"
        };
        Deal.pStateTypeMap = {};
        Deal.pStateTypeMap[Deal.availableStr] = Deal.pStateTypeEnum.NO_ACTION;
        Deal.pStateTypeMap[Deal.inCartStr] = Deal.pStateTypeEnum.CART;
        Deal.pStateTypeMap[Deal.claimedStr] = Deal.pStateTypeEnum.NO_ACTION;
        Deal.pStateTypeMap[Deal.expiredStr] =
            Deal.pStateTypeEnum.EITHER;
        Deal.pStateTypeMap[Deal.waitInLineStr] = Deal.pStateTypeEnum.WAITLIST;
        Deal.pStateTypeMap[Deal.pendingAtcStr] = Deal.pStateTypeEnum.WAITLIST;
        Deal.Class = function(a, b) {
            if (void 0 === b)
                for (var d in b) a[d] = b[d];
            b = a && a.__init__ || function() {};
            b.prototype = a;
            return b
        };
        Deal.Signal = {
            methods: ["connect", "disconnectAll", "signal"],
            init: function(a) {
                var b, d;
                if (a.__signals__) throw Error("already registered");
                if (void 0 === a.signals) throw Error("expected 'signals' attribute");
                for (b = 0; b < this.methods.length; b++)
                    if (d =
                        this.methods[b], void 0 !== a[d]) throw Error("method " + d + " is already defined");
                a.__signals__ = {};
                for (b = 0; b < a.signals.length; b++) a.__signals__[a.signals[b]] = {};
                for (b = 0; b < this.methods.length; b++) d = this.methods[b], a[d] = this[d]
            },
            next_id: 100,
            connect: function(a, b, d) {
                var e = this;
                if (void 0 === e.__signals__[a]) throw Error("no such signal " + a);
                var c = Deal.Signal.next_id++,
                    f = {
                        signals: ["disconnect"],
                        disconnect: function() {
                            delete e.__signals__[a][c];
                            this.signal("disconnect");
                            this.disconnect = function() {}
                        }
                    };
                if (b instanceof Function) f.trigger = b;
                else {
                    if (void 0 === b[d]) throw Error("method '" + d + "' for obj " + b + " doesn't exist");
                    if (!b[d] instanceof Function) throw Error("method '" + d + "' for obj " + b + " isn't a Function");
                    f.trigger = function() {
                        b[d].apply(b, arguments)
                    }
                }
                e.__signals__[a][c] = f;
                Deal.Signal.init(f);
                return f
            },
            disconnectAll: function(a) {
                var b;
                if (a) {
                    if (void 0 === this.__signals__[a]) throw Error("no such signal " + a);
                    for (var d in this.__signals__[a]) this.__signals__[a][d].disconnect()
                } else
                    for (b in this.__signals__) this.disconnectAll(b)
            },
            signal: function(a) {
                if (void 0 === this.__signals__[a]) throw Error("no such signal " + a);
                var b = [],
                    d = 1;
                1 == arguments.length && (d = 0);
                for (d; d < arguments.length; d++) b.push(arguments[d]);
                var d = [],
                    e;
                for (e in this.__signals__[a]) {
                    var c = this.__signals__[a][e];
                    try {
                        c.trigger.apply(c, b)
                    } catch (f) {
                        d.push(f)
                    }
                }
                if (1 < d.length) throw b = Error("multiple errors. See 'errors'"), b.errors = d, b;
                if (1 == d.length) throw d[0];
            }
        };
        Deal.Model = {};
        Deal.Model.Metadata = Deal.Class({
            __init__: function(a, b) {
                this.filters = a;
                for (var d in this.filters) {
                    a =
                        this.filters[d];
                    this.filters[d] = {};
                    for (var e = 0; e < a.length; e++) this.filters[d][a[e]] = !0
                }
                this.orderings = b
            },
            get_deal_ids: function(a, b) {
                a = this.filters[a];
                b = b ? this.orderings[b] : [];
                var d = [],
                    e = {},
                    c, f;
                for (c = 0; c < b.length; c++) f = b[c], e[f] = !0, a[f] && d.push(f);
                for (f in a) e[f] || d.push(f);
                return d
            }
        });
        Deal.Model.Deals = Deal.Class({
            __init__: function(a) {
                this.deals = {};
                for (var b = 0; b < a.length; b++) {
                    var d = a[b];
                    this.get_deal(d.dealID).load_from_deal(d)
                }
            },
            get_deal: function(a) {
                void 0 === this.deals[a] && (this.deals[a] = new Deal.Model.Deal(a));
                return this.deals[a]
            }
        });
        Deal.Model.Deal = Deal.Class({
            signals: ["change", "expire", "status_expire", "pstatus_expires_soon", "pstatus_expire"],
            __init__: function(a) {
                Deal.Signal.init(this);
                this.dealID = a;
                this.timeouts = {};
                this.expired = this.loading = !0;
                this.status = {
                    expired: !0
                };
                this.detail = {};
                this.asins = [];
                this.asinExpiresSoonStack = [];
                this.asinExpiredStack = [];
                this.purchaseStatusWarningThreshold = 6E5
            },
            _init_status: function(a) {
                var b = this;
                b.status.cacheExpiresDate = new Date(a.getTime() + parseInt(b.status.msToCacheExpires,
                    10));
                b.status.expired = !1;
                b.status.startDate = new Date(a.getTime() + parseInt(b.status.msToStart, 10));
                b.status.started = 0 >= b.status.msToStart;
                b.status.endDate = new Date(a.getTime() + parseInt(b.status.msToEnd, 10));
                b.status.ended = 0 >= b.status.msToEnd;
                b.timeouts.start_timeout && h.clearTimeout(b.timeouts.start_timeout);
                b.status.started || (b.timeouts.start_timeout = h.setTimeout(function() {
                    b.status.started = !0;
                    b.signal("change", b)
                }, b.status.startDate.getTime() - (new Date).getTime()));
                b.timeouts.end_timeout && h.clearTimeout(b.timeouts.end_timeout);
                b.status.ended || (b.timeouts.end_timeout = h.setTimeout(function() {
                    b.status.ended = !0;
                    b.signal("change", b)
                }, b.status.endDate.getTime() - (new Date).getTime()));
                b.timeouts.status_expire_timeout && h.clearTimeout(b.timeouts.status_expire_timeout);
                b.timeouts.status_expire_timeout = h.setTimeout(function() {
                    b.status.expired = !0;
                    b.signal("status_expire", b)
                }, b.status.cacheExpiresDate.getTime() - (new Date).getTime())
            },
            _init_asin_statuses: function() {
                var a = this;
                if (a.asins) {
                    for (var b = new Date, d = Deal.filterAsinsByState(a.asins, [Deal.inCartStr, Deal.expiredStr, Deal.waitInLineStr, Deal.pendingAtcStr]), e = 0; e < d.length; e++) {
                        var c = d[e];
                        a.purchaseStatusWarningThreshold && (c.status.purchaseStatus.expiresDate = new Date(b.getTime() + parseInt(c.status.purchaseStatus.msToExpiry, 10)))
                    }
                    d.sort(Deal.sortByAsinTimes);
                    a.asinExpiresSoonStack = [];
                    a.asinExpiredStack = [];
                    for (e = 0; e < d.length; e++) {
                        c = d[e];
                        a.timeouts.pstatus_exp_soon[c.asin] && h.clearTimeout(a.timeouts.pstatus_exp_soon[c.asin]);
                        var b = c.status.purchaseStatus.expiresDate.getTime() - (new Date).getTime(),
                            f = b - a.purchaseStatusWarningThreshold;
                        0 > f && (f = 0);
                        var m = "" + c.asin;
                        0 < b && c.status.purchaseStatus.state != Deal.waitInLineStr && c.status.purchaseStatus.state != Deal.pendingAtcStr && (a.asinExpiresSoonStack.push(m), a.timeouts.pstatus_exp_soon[m] = h.setTimeout(function() {
                            var e = a.asinExpiresSoonStack.shift();
                            a.signal("pstatus_expires_soon", a, e)
                        }, f));
                        a.timeouts.pstatus_expire[c.asin] && h.clearTimeout(a.timeouts.pstatus_expire[c.asin]);
                        a.asinExpiredStack.push(m);
                        a.timeouts.pstatus_expire[c.asin] = h.setTimeout(function() {
                            var e =
                                a.asinExpiredStack.shift();
                            a.signal("pstatus_expire", a, e);
                            a.signal("change", a)
                        }, b)
                    }
                } else Deal.log("No Asins, not initializing statuses.")
            },
            load_from_deal: function(a) {
                var b = this,
                    d = new Date,
                    e;
                for (e in a) b[e] = a[e];
                b.loading = !1;
                b.startDate = new Date(1E3 * b.startDate);
                b.endDate = new Date(1E3 * b.endDate);
                b.cacheExpiresDate = new Date(d.getTime() + parseInt(b.msToCacheExpires, 10));
                b.expired = !1;
                b.timeouts.expire_timeout && h.clearTimeout(b.timeouts.expire_timeout);
                b.timeouts.expire_timeout = h.setTimeout(function() {
                    b.expired = !0;
                    b.signal("expire", b)
                }, b.cacheExpiresDate.getTime() - (new Date).getTime());
                b.limitedQuantity = "1" == b.limitedQuantity;
                b.customer && (b.customer.claimed = "1" == b.customer.claimed);
                if (b.asins)
                    for (b.timeouts.pstatus_exp_soon || (b.timeouts.pstatus_exp_soon = {}), b.timeouts.pstatus_expire || (b.timeouts.pstatus_expire = {}), a = 0; a < b.asins.length; a++) b.asins[a].offerServiceSoldOut = "1" == b.asins[a].offerServiceSoldOut;
                b._init_status(d);
                b._init_asin_statuses();
                b.signal("change", b)
            },
            load_from_status: function(a) {
                this.status =
                    a;
                this._init_status(new Date);
                this.signal("change", this)
            },
            load_from_asin_status: function(a) {
                if (null != this.asins && null != a) {
                    for (var b = a.asin, d = 0; d < this.asins.length; d++)
                        if (this.asins[d].asin == b) {
                            this.asins[d].status = a;
                            break
                        }
                    this._init_asin_statuses();
                    this.signal("change", this)
                }
            },
            setPurchaseStatusWarningThreshold: function(a) {
                self.purchaseStatusWarningThreshold = 0 < a ? a : 12E4
            },
            getPurchaseStatusWarningThreshold: function() {
                return this.purchaseStatusWarningThreshold
            },
            load_from_deal_dao: function(a) {
                this.loading = !1;
                this.marketplaceID = a.detail.marketplaceID;
                null !== a.auxiliaryData.merchantDetails && void 0 !== a.auxiliaryData.merchantDetails && (this.merchantID = a.auxiliaryData.merchantDetails.merchantID, this.merchantName = a.auxiliaryData.merchantDetails.merchantName);
                var b = a.auxiliaryData.reviewData;
                b && (this.reviews = {}, this.reviews.URL = b.reviewsURL, this.reviews.total = b.totalReviews, this.reviews.rating = b.averageRating);
                this.dealID = a.dealID;
                this.startDate = a.status.startDate;
                this.endDate = a.status.endDate;
                this.limitedQuantity =
                    a.isLimitedQuantity;
                this.parentAsin = a.parentAsin;
                this.msToCacheExpires = a.status.msToCacheExpires;
                this.cacheExpiresDate = a.status.cacheExpiresDate;
                this.expired = a.expired;
                this.status = {
                    marketplaceID: a.detail.marketplaceID,
                    dealID: a.dealID,
                    percentClaimed: a.status.percentClaimed,
                    msToStart: a.status.msToStart,
                    startDate: a.status.startDate,
                    started: a.status.started,
                    msToEnd: a.status.msToEnd,
                    endDate: a.status.endDate,
                    ended: a.status.ended,
                    msToCacheExpires: a.status.msToCacheExpires,
                    cacheExpiresDate: a.status.cacheExpiresDate,
                    expired: a.status.expired
                };
                this.detail = {
                    marketplaceID: a.detail.marketplaceID,
                    dealID: a.dealID,
                    title: a.detail.title,
                    description: a.detail.description,
                    imageAsin: a.detail.imageAsin,
                    url: a.detail.URL,
                    buyBoxUrl: a.detail.buyBoxURL
                };
                this.asins = [];
                for (var b = a.dealAsins, d = 0; d < b.length; d++) {
                    var e = b[d];
                    this.asins.push({
                        marketplaceID: a.detail.marketplaceID,
                        dealID: a.dealID,
                        asin: e.ASIN,
                        basisPrice: e.basisPrice,
                        basisKind: e.basisKind,
                        dealPrice: e.dealPrice,
                        percentOff: e.percentOff,
                        offerServiceSoldOut: e.status.offerServiceSoldOut,
                        variationData: e.variationData,
                        imageURL: e.imageURL,
                        status: {
                            marketplaceID: a.detail.marketplaceID,
                            dealID: a.dealID,
                            asin: e.ASIN,
                            percentClaimed: e.status.percentClaimed,
                            percentSoldOut: e.status.percentSoldOut,
                            itemState: e.status.itemState,
                            offerServiceSoldOut: e.status.offerServiceSoldOut,
                            currentlyUnavailable: e.status.currentlyUnavailable,
                            purchaseStatus: {
                                state: e.status.state,
                                msToExpiry: e.status.msToExpiry
                            }
                        }
                    })
                }
                this.customer = {
                    marketplaceID: a.detail.marketplaceID,
                    dealID: a.dealID,
                    customerID: a.customerID,
                    claimed: a.claimed
                }
            },
            load_status_from_deal_dao: function(a) {
                var b = this,
                    d = new Date;
                b.load_from_deal_dao(a);
                b.timeouts.expire_timeout && h.clearTimeout(b.timeouts.expire_timeout);
                b.cacheExpiresDate && (b.timeouts.expire_timeout = h.setTimeout(function() {
                    b.expired = !0;
                    b.signal("expire", b)
                }, b.cacheExpiresDate.getTime() - (new Date).getTime()));
                b.asins && (b.timeouts.pstatus_exp_soon || (b.timeouts.pstatus_exp_soon = {}), b.timeouts.pstatus_expire || (b.timeouts.pstatus_expire = {}));
                b._init_status(d);
                b._init_asin_statuses();
                b.signal("change",
                    b)
            }
        });
        Deal.Controller = Deal.Class({
            signals: ["cell_change", "page_change", "metadata_change"],
            __init__: function(a) {
                Deal.Signal.init(this);
                this.login_uri = a.login_uri;
                this.images = a.images;
                this.buying = {};
                this.deals = new Deal.Model.Deals(a.deals);
                this.metadata = new Deal.Model.Metadata(a.filters, a.orderings);
                this.browseNodes = a.browseNodes;
                this.ordering = a.ordering;
                this.varPopCloseFunction = null;
                this.connections = [];
                this.cells = 1;
                this.cell_to_deal = {};
                this.deal_id_to_cell = {};
                this.pages = this.page = 1;
                this.order = this.filter =
                    void 0;
                this.deal_ids = []
            },
            closeVarPopover: function() {
                this.varPopCloseFunction && this.varPopCloseFunction()
            },
            setVarPopCloseFunction: function(a) {
                this.closeVarPopover();
                this.varPopCloseFunction = a
            },
            _calc_deal_ids: function() {
                this.deal_ids = this.metadata.get_deal_ids(this.filter, this.order);
                this._calc_pages()
            },
            _calc_pages: function() {
                this.pages = Math.ceil(this.deal_ids.length / this.cells)
            },
            disconnect_all: function() {
                for (var a = 0; a < this.connections.length; a++) this.connections[a].disconnect();
                this.connections = []
            }
        });
        Deal.DOM = {
            set_attributes: function(a, b) {
                for (var d in b) "style" == d ? a.style.cssText = b[d] : a[{
                    "class": "className",
                    checked: "defaultChecked",
                    usemap: "useMap",
                    "for": "htmlFor",
                    readonly: "readOnly",
                    colspan: "colSpan",
                    bgcolor: "bgColor",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    valign: "vAlign",
                    nowrap: "noWrap"
                }[d] || d] = b[d]
            },
            el: function(a, b, d) {
                a = document.createElement(a);
                b && Deal.DOM.set_attributes(a, b);
                d && this.appendChildren(a, d);
                return a
            },
            img: function(a) {
                a = a || {};
                a.border = a.border || 0;
                return this.el("img",
                    a)
            },
            div: function(a, b) {
                return this.el("div", a, b)
            },
            span: function(a, b) {
                return this.el("span", a, b)
            },
            p: function(a, b) {
                return this.el("p", a, b)
            },
            a: function(a, b) {
                return this.el("a", a, b)
            },
            table: function(a, b) {
                a || (a = {});
                a.cellpadding = a.cellpadding || 0;
                a.cellspacing = a.cellspacing || 0;
                a.border = a.border || 0;
                return this.el("table", a, [this.el("tbody", null, b)])
            },
            tr: function(a, b) {
                return this.el("tr", a, b)
            },
            td: function(a, b) {
                return this.el("td", a, b)
            },
            td_nowrap: function(a, b) {
                return this.el("td", a, [this.span({
                        style: "white-space:nowrap"
                    },
                    b)])
            },
            br: function(a, b) {
                return this.el("br", a, b)
            },
            hr: function(a) {
                return this.el("hr")
            },
            select: function(a, b) {
                return this.el("select", a, b)
            },
            option: function(a, b) {
                return this.el("option", a, b)
            },
            appendChildren: function(a, b) {
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    if ("string" == typeof e || "number" == typeof e) e = this.text(e);
                    else if (e instanceof Array) {
                        this.appendChildren(a, e);
                        continue
                    } else if (null === e || void 0 === e) continue;
                    a.appendChild(e)
                }
            },
            clearChildren: function(a) {
                for (; a.firstChild;) a.removeChild(a.firstChild)
            },
            replaceChildren: function(a, b) {
                this.clearChildren(a);
                this.appendChildren.call(this, a, b)
            },
            text: function(a) {
                return document.createTextNode(a)
            }
        };
        Deal.Widget = {};
        Deal.Widget.preload_img = function(a) {
            Deal.Widget.preload_img.div || (Deal.Widget.preload_img.div = Deal.DOM.div({
                style: "display:none"
            }));
            Deal.Widget.preload_img.div.appendChild(Deal.DOM.img({
                src: a
            }))
        };
        Deal.clock = {
            signals: ["tick"]
        };
        Deal.Signal.init(Deal.clock);
        Deal.clock.tick = function() {
            Deal.clock.signal("tick")
        };
        h.setInterval(Deal.clock.tick, 250)
    }();
    Deal.constants = {
        WIDGET_ID_START: 100,
        GET_DEALS_MAX_JITTER: 2,
        NON_RETRYABLE_QUANTITY_RESTRICTION_VIOLATION_ERROR: "4002"
    };
    Deal.rankingStrategies = {
        PERSONALIZED: "PERSONALIZED",
        CLAIMED_RATE: "CLAIMED_RATE",
        TRENDING: "TRENDING",
        NEW_TO_GL_EXCLUSIVE: "NEW_TO_GL_EXCLUSIVE",
        NEW_TO_GL_INCLUSIVE: "NEW_TO_GL_INCLUSIVE"
    };
    Deal.statusFilters = {
        AVAILABLE: "available",
        UPCOMING: "upcoming",
        MISSED: "missed"
    };
    Deal.availableStr = "Available";
    Deal.inCartStr = "InCart";
    Deal.claimedStr = "Claimed";
    Deal.expiredStr = "Expired";
    Deal.waitInLineStr =
        "WaitInLine";
    Deal.waitlistFullStr = "WaitlistFull";
    Deal.pendingAtcStr = "PendingAddToCart";
    Deal.dealTypes = {
        BD: "BEST_DEAL",
        LD: "LIGHTNING_DEAL",
        DOTD: "DEAL_OF_THE_DAY",
        LOCAL: "LOCAL_DEAL",
        COUPON: "COUPON_DEAL"
    };
    Deal.savingsBasisKind = {
        LIST_PRICE: "LP",
        OUR_PRICE: "OP",
        PREV_PUBLISHED_PRICE: "PPP",
        UVP_LIST_PRICE: "ULP",
        ORIGINAL_EDITION_PRICE: "OEP",
        RETAIL_PREV_PRICE: "REP",
        SEPARATE_PURCHASE_LIST_PRICE: "SPLP",
        DIGITAL_LIST_PRICE: "DLP",
        PRINT_LIST_PRICE: "PLP",
        UNRECOGNIZED: "UNR"
    };
    Deal.categoryFilters = {
        ALL: "all"
    };
    Deal.dealStateEnum = {
        Available: 1,
        Variation: 2,
        WaitListed: 3,
        WaitListFull: 4,
        WaitListOnly: 5,
        Claimed: 6,
        InCart: 7,
        PendingAddToCart: 8,
        LearnMore: 9,
        ClipCoupon: 10,
        ViewDeal: 11,
        Upcoming: 12,
        SoldOut: 13,
        Expired: 14,
        InvalidPurchaseState: -1
    };
    Deal.itemTypes = {
        SingleItem: "SINGLE_ITEM",
        MultiItem: "MULTI_ITEM",
        ContentOnly: "CONTENT_ONLY"
    };
    Deal.itemStates = {
        Available: "AVAILABLE",
        Soldout: "SOLDOUT",
        Expired: "EXPIRED",
        Upcoming: "UPCOMING",
        Waitlist: "WAITLISTAVAILABLE",
        WaitlistFull: "WAITLISTFULL",
        Suppressed: "SUPPRESSED"
    };
    Deal.responseItemTypeToItemType = {
        NONE: "CONTENT_ONLY",
        SINGLE_ITEM: "SINGLE_ITEM",
        MULTI_ITEM: "MULTI_ITEM",
        VARIATION_ITEM: "MULTI_ITEM"
    };
    Deal.clientActions = {
        ADD_TO_CART: "A",
        JOIN_WAITLIST: "J",
        LEARN_MORE: "L",
        TITLE: "T",
        IMAGE: "P",
        REVIEWS: "R",
        DISCUSSION_BOARD: "D",
        IMPRESSION: "I"
    };
    Deal.purchaseTypes = {
        ADD_TO_CART: "add_to_cart",
        JOIN_WAITLIST: "join_waitlist"
    };
    Deal.stateBasedSubTemplates = {
        available: "image price_block title checking_deal_status prime progress_bar percent_claimed prime_early_access time_remaining prime_only_access claimed reviews state variation_status_message button description total_coupons_count share_bar geo_display_location merchant_name deal_action_content deal_status_content badge fast_track".split(" "),
        expired: "image price_block title prime progress_bar percent_claimed claimed reviews state button total_coupons_count merchant_name description geo_display_location deal_action_content deal_status_content badge".split(" "),
        soldout: "image price_block title prime progress_bar percent_claimed claimed reviews button total_coupons_count merchant_name description deal_action_content".split(" "),
        coming_soon: "image title merchant_name share_bar reviews prime description badge".split(" "),
        upcoming: "image teaser starts_in description early_access_message prime_only_message".split(" "),
        loading: ["checking_deal_status", "available"],
        empty: []
    };
    Deal.stateToTemplateMap = {
        Available: "available",
        SoldOut: "soldout",
        Expired: "expired",
        Upcoming: "upcoming",
        Loading: "loading",
        ComingSoon: "coming_soon",
        Waitlist: "available",
        WaitlistFull: "available"
    };
    Deal.dealStates = {
        AVAILABLE: "Available",
        SOLDOUT: "SoldOut",
        EXPIRED: "Expired",
        UPCOMING: "Upcoming",
        WAITLIST: "Waitlist",
        WAITLISTAVAILABLE: "Waitlist",
        WAITLISTFULL: "WaitlistFull"
    };
    Deal.customerStates = {
        NONE: Deal.availableStr,
        INCART: Deal.inCartStr,
        CLAIMED: Deal.claimedStr,
        INWAITLIST: Deal.waitInLineStr,
        PENDINGATC: Deal.pendingAtcStr,
        EXPIRED: Deal.expiredStr
    };
    Deal.itemStateToPurchaseStateMap = {
        AVAILABLE: Deal.dealStateEnum.Available,
        WAITLIST: Deal.dealStateEnum.WaitListOnly,
        WAITLISTED: Deal.dealStateEnum.WaitListed,
        WAITLISTFULL: Deal.dealStateEnum.WaitListFull,
        WAITLISTONLY: Deal.dealStateEnum.WaitListOnly,
        WAITLISTAVAILABLE: Deal.dealStateEnum.WaitListOnly,
        UPCOMING: Deal.dealStateEnum.Upcoming,
        SOLDOUT: Deal.dealStateEnum.SoldOut,
        EXPIRED: Deal.dealStateEnum.Expired
    };
    Deal.customerStateToPurchaseStateMap = {
        AVAILABLE: Deal.dealStateEnum.Available,
        CLAIMED: Deal.dealStateEnum.Claimed,
        INCART: Deal.dealStateEnum.InCart,
        PENDINGADDTOCART: Deal.dealStateEnum.PendingAddToCart,
        PENDINGATC: Deal.dealStateEnum.PendingAddToCart,
        INWAITLIST: Deal.dealStateEnum.WaitListed,
        EXPIRED: Deal.dealStateEnum.Expired
    };
    Deal.apiName = {
        GET_DEAL_METADATA: "GetDealMetadata",
        GET_DEALS: "GetDeals",
        GET_DEAL_STATUS: "GetDealStatus",
        REDEEM_DEAL: "RedeemDeal",
        CLAIM_DEAL: "ClaimDeal"
    };
    Deal.Class = function(a, b) {
        if (void 0 !== b)
            for (var d in b) a[d] = b[d];
        b = a && a.__init__ || function() {};
        b.prototype = a;
        return b
    };
    Deal.log = function(a) {
        void 0 !== h.gbResources && null !== h.gbResources && h.gbResources.getDealDebug() && (a = new Date + ": " + a, h.console && h.console.log(a))
    };
    Deal.parseBool = function(a) {
        return !0 === a || 1 === a || "1" === a
    };
    Deal.getRandomNumber = function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    };
    Deal.areNestedKeysPresent = function(a, b) {
        if (!_.isObject(a) || !_.isString(b)) return !1;
        b = b.split(".");
        for (var d = 0; d < b.length; d++) {
            if (!a || !a.hasOwnProperty(b[d])) return !1;
            a = a[b[d]]
        }
        return !0
    };
    Deal.checkIfDealExpired = function(a) {
        return void 0 === a || null === a ? !1 : void 0 !== a.status && null !== a.status && void 0 !== a.status.msToEnd && null !== a.status.msToEnd && 0 >= a.status.msToEnd || void 0 !== a.status.ended && null !== a.status.ended && a.status.ended || void 0 !== a.status.endDate && null !== a.status.endDate && a.status.endDate < new Date ? !0 : !1
    };
    Deal.sortByAsinTimes = function(a, b) {
        return a.status.purchaseStatus.expiresDate - b.status.purchaseStatus.expiresDate
    };
    Deal.sortByDealAsinDAOTimes = function(a, b) {
        return a.status.expiresDate -
            b.status.expiresDate
    };
    Deal.setSafeTimeout = function(a, b) {
        return void 0 === a || null === a || void 0 === b || null === b ? (Deal.log("Cannot setTimeout on undefined/null fn/timeout."), null) : 2147483647 < b ? h.setTimeout(a, 1073741823) : h.setTimeout(a, 10)
    };
    Deal.objectsIdentical = function(a, b) {
        return void 0 === a || void 0 === b ? (Deal.log("Cannot check for objectsIdentical for undefined requestArgs."), !1) : _.isEqual(a, b)
    };
    Deal.filterAsinsByState = function(a, b) {
        var d = [];
        _.each(a, function(a) {
            _.each(b, function(c) {
                a.status.purchaseStatus.state ===
                    c && d.push(a)
            })
        });
        return d
    };
    Deal.filterAsinsHashByState = function(a, b) {
        var d = [];
        _.each(a, function(a) {
            _.each(b, function(c) {
                a.status.state === c && d.push(a)
            })
        });
        return d
    };
    Deal.filterDealIdsByParams = function(a, b) {
        var d = [];
        if (null === a || void 0 === a || null === b || void 0 === b) return d;
        for (var e = 0; e < a.length; e++) {
            var c = a[e];
            c in b && (d = _.union(d, b[c]))
        }
        return d
    };
    Deal.getPaginationCellPositions = function(a, b, d, e) {
        var c = [];
        a && b && d && (c = 1, e || (c = Math.ceil(d / b)), c = 3 >= c ? _.range(0, d < c * b ? d : c * b) : 1 == a ? _.union(_.range(0, 2 * b), _.range((c -
            1) * b, d)) : _.range((a - 2) * b, d < (a + 1) * b ? d : (a + 1) * b));
        return c
    };
    Deal.getCrypticPrice = function(a) {
        return _.isNumber(a) ? a.toString().split("").map(function(a) {
            return String.fromCharCode(a.charCodeAt(0) + 17).replace("?", "X")
        }).join("") : null
    };
    Deal.hasPricingDetails = function(a) {
        var b = !1;
        a = a.pricingData.dealPriceHash.max.price || a.pricingData.dealPriceHash.min.price;
        void 0 !== a && null !== a && (b = !0);
        return b
    };
    Deal.Price = {
        currencies: {
            USD: {
                decimals: 2,
                format: function(a) {
                    return "$" + a
                }
            },
            MXN: {
                decimals: 2,
                format: function(a) {
                    return "$" +
                        a
                }
            },
            BRL: {
                decimals: 2,
                format: function(a) {
                    return "R$ " + a
                }
            },
            GBP: {
                decimals: 2,
                format: function(a) {
                    return "\x26pound;" + a
                }
            },
            EUR: {
                decimals: 2,
                format: function(a) {
                    return (a + " \x26euro;").replace(".", ",")
                }
            },
            TRY: {
                decimals: 2,
                format: function(a) {
                    return (a + " TL").replace(".", ",")
                }
            },
            JPY: {
                decimals: 0,
                format: function(a) {
                    return "\x26yen; " + a
                }
            },
            AUD: {
                decimals: 2,
                format: function(a) {
                    return "$" + a
                }
            },
            CNY: {
                decimals: 2,
                format: function(a) {
                    return "\x26yen;" + a
                }
            },
            CAD: {
                decimals: 2,
                format: function(a) {
                    return ("C$" + a).replace(",", "")
                }
            },
            INR: {
                decimals: 2,
                format: function(a) {
                    return "\x26#8377;" + a
                }
            },
            other: {
                decimals: 2,
                format: function(a) {
                    return a + " " + a.currency
                }
            }
        },
        make_price: function(a, b) {
            return {
                currency: a,
                price: b
            }
        },
        test_same_currency: function(a, b) {
            if (a.currency != b.currency) throw Error("Currencies don't match: " + a.currency + " and " + b.currency);
        },
        minus: function(a, b) {
            if (a && b) return this.test_same_currency(a, b), this.make_price(a.currency, a.price - b.price)
        },
        percent_off: function(a, b) {
            if (!a || !b || null === a.price || void 0 === a.price || null === b.price || void 0 === b.price ||
                0 === b.price) return null;
            this.test_same_currency(a, b);
            var d = a.price - b.price;
            if (0 >= d) return null;
            b = 0;
            "CN" == gbResources.getCustomerData("realm") ? (b = 1, a = 10 * (1 - d / a.price)) : a = 100 * d / a.price;
            return Math.round(a * Math.pow(10, b)) / Math.pow(10, b)
        },
        displayable_percent_off: function(a) {
            return a && "number" === typeof a ? "CN" == gbResources.getCustomerData("realm") ? (100 - a) / 10 : a : null
        },
        format: function(a, b) {
            if (!a) return b;
            b = this.currencies[a.currency] || this.currencies.other;
            a = b.format(Deal.commify(a.price, b.decimals));
            b = Deal.DOM.span();
            b.innerHTML = a;
            return b.innerText || b.textContent
        },
        getEmptyPriceHash: function() {
            return {
                price: null,
                formattedPrice: null,
                currency: null
            }
        },
        getEmptyPriceObject: function() {
            return {
                maxBasisPrice: Deal.Price.getEmptyPriceHash(),
                minBasisPrice: Deal.Price.getEmptyPriceHash(),
                maxDealPrice: Deal.Price.getEmptyPriceHash(),
                minDealPrice: Deal.Price.getEmptyPriceHash()
            }
        },
        isEmptyPriceObject: function(a) {
            var b = Deal.Price.getEmptyPriceObject();
            return _.isEqual(a, b) ? !0 : !1
        },
        findMaxMinPrices: function(a, b) {
            if (void 0 === a || !a) return Deal.log("Cannot findMaxMinPrices on undefined/null deal obj"), {};
            if (!a.dealAsinsHash) return Deal.log("Cannot operate on undefined/null dealAsinsHash"), {};
            var d = null,
                e = null,
                c = null,
                f = null,
                m;
            for (m in a.dealAsinsHash) {
                var k = a.dealAsinsHash[m];
                k.basisPrice && (null === d ? d = k.basisPrice : d.price < k.basisPrice.price && (d = k.basisPrice), null === e ? e = k.basisPrice : e.price > k.basisPrice.price && (e = k.basisPrice));
                k.dealPrice && (null === c ? c = k.dealPrice : c.price < k.dealPrice.price && (c = k.dealPrice), null === f ? f = k.dealPrice : f.price > k.dealPrice.price && (f = k.dealPrice))
            }
            a.dealAsins && 0 === a.dealAsins.length &&
                b && b.currencyCode && (null !== b.maxBAmount && void 0 !== b.maxBAmount && null !== b.minBAmount && void 0 !== b.minBAmount && (d = {
                    price: parseFloat(b.maxBAmount),
                    currency: b.currencyCode
                }, e = {
                    price: parseFloat(b.minBAmount),
                    currency: b.currencyCode
                }), null !== b.maxDealPrice && void 0 !== b.maxDealPrice && null !== b.minDealPrice && void 0 !== b.minDealPrice && (c = {
                    price: parseFloat(b.maxDealPrice),
                    currency: b.currencyCode
                }, f = {
                    price: parseFloat(b.minDealPrice),
                    currency: b.currencyCode
                }));
            a = Deal.Price.getEmptyPriceObject();
            null !== d && (a.maxBasisPrice = {
                price: d.price,
                currency: d.currency,
                formattedPrice: Deal.Price.format(d)
            });
            null !== e && (a.minBasisPrice = {
                price: e.price,
                currency: e.currency,
                formattedPrice: Deal.Price.format(e)
            });
            null !== c && (a.maxDealPrice = {
                price: c.price,
                currency: c.currency,
                formattedPrice: Deal.Price.format(c)
            });
            null !== f && (a.minDealPrice = {
                price: f.price,
                currency: f.currency,
                formattedPrice: Deal.Price.format(f)
            });
            return a
        },
        hasPriceData: function(a) {
            return void 0 === a || null === a || void 0 === a.max || null === a.max || void 0 === a.max.price || null === a.max.price ||
                void 0 === a.min || null === a.min || void 0 === a.min.price || null === a.min.price || a.min.price > a.max.price ? !1 : !0
        },
        compareTo: function(a, b) {
            if (void 0 === a || null === a || void 0 === b || null === b) return Deal.log("Cannot do compareTo on undefined/null prices"), 2;
            var d = 2;
            try {
                a == b ? d = 0 : a > b ? d = 1 : a < b && (d = -1)
            } catch (e) {
                Deal.log("Error caught during attempting compareTo" + e)
            }
            return d
        },
        maxEqualMin: function(a) {
            return void 0 !== a && a ? 0 === Deal.Price.compareTo(a.max.price, a.min.price) ? !0 : !1 : (Deal.log("Cannot check if an undefined/null object has pricedata."), !1)
        }
    };
    Deal.commify = function(a, b) {
        a = parseFloat(a);
        a = void 0 !== b ? a.toFixed(b) : a.toString();
        a = a.split(".");
        b = a[0];
        for (var d = b.length - 3; 0 < d; d -= 3) b = b.substr(0, d) + "," + b.substr(d, b.length - d);
        return 2 == a.length ? b + "." + a[1] : b
    };
    Deal.amabotParams = {
        pf_rd_p: "placementID",
        pf_rd_s: "slotName",
        pf_rd_t: "pageType",
        pf_rd_i: "pageIndent",
        pf_rd_m: "merchantID",
        pf_rd_r: "requestID"
    };
    Deal.reverseMapAmabotParams = {
        placementID: "pf_rd_p",
        slotName: "pf_rd_s",
        pageType: "pf_rd_t",
        pageIndent: "pf_rd_i",
        merchantID: "pf_rd_m",
        requestID: "pf_rd_r"
    };
    Deal.addAmabotRecordClickParameters = function(a, b) {
        if (!a || !b) return Deal.log("Cannot add amabot record click params for undefined/null uri/params."), a;
        var d = Deal.reverseMapAmabotParams;
        b.merchantID && (a = Deal.param_appender(a, d.merchantID + "\x3d" + b.merchantID));
        b.pageType && (a = Deal.param_appender(a, d.pageType + "\x3d" + b.pageType));
        b.slotName && (a = Deal.param_appender(a, d.slotName + "\x3d" + b.slotName));
        b.requestID && (a = Deal.param_appender(a, d.requestID + "\x3d" + b.requestID));
        b.pageIndent && (a = Deal.param_appender(a,
            d.pageIndent + "\x3d" + b.pageIndent));
        b.placementID && (a = Deal.param_appender(a, d.placementID + "\x3d" + b.placementID));
        return a
    };
    Deal.getSlotRefTag = function(a) {
        if (!a) return Deal.log("Cannot get slot ref tag for undefined/null amabotParams."), "";
        if (void 0 === a.slotName || null === a.slotName) return Deal.log("Cannot get slot ref tag for undefined/null slotName."), "";
        a = a.slotName;
        return 4 > a.length ? a + "_" : a.substring(0, 1) + a.substring(a.length - 2, a.length) + "_"
    };
    Deal.getPlacementID = function(a) {
        if (!a) return Deal.log("Cannot get placement id for undefined/null amabotParams."),
            "";
        if (void 0 === a.placementID || null === a.placementID) return Deal.log("Cannot get placement id for undefined/null slotName."), "";
        a = a.placementID;
        return 5 > a.length ? a + "_" : a.substring(a.length - 4, a.length) + "_"
    };
    Deal.addRefTag = function(a, b) {
        var d = /^(.*)\?(.*)$/,
            e = /^(.*)#(.*)$/,
            c = /^(.*)\/$/,
            f = /^(.*)$/;
        b = "ref\x3d" + b;
        d.test(a) ? (c = "/", /.*\/\?/.test(a) && (c = ""), a = a.replace(d, "$1" + c + b + "?$2")) : e.test(a) ? (c = "/", /.*\/#/.test(a) && (c = ""), a = a.replace(e, "$1" + c + b + "#$2")) : a = c.test(a) ? a.replace(c, "$1/" + b) : a.replace(f, "$1/" +
            b);
        return a
    };
    Deal.param_appender = function(a, b) {
        if (!a || !b) return Deal.log("Cannot apend refTags for undefined/null URI/refTag"), "";
        var d = "?";
        a.match(/\?/) && (d = "?" === a.charAt(a.length - 1) ? "" : "\x26");
        return a + d + b
    };
    Deal.getWidgetCDSRef = function(a) {
        var b = Deal.controller.getAmabotParams(a);
        a = Deal.configManager[Deal.controller.widgetIdToWidgetNameMap[a]].widgetViewConfig.clickStreamRefMarker;
        _.isEmpty(b) || (a = a + "_" + Deal.getSlotRefTag(b), a += Deal.getPlacementID(b));
        return a
    };
    Deal.shouldRecordClickAction = function(a) {
        return null ===
            a || void 0 === a ? !1 : Deal.controller.getDeal(a).impressionAsin ? !0 : !1
    };
    Deal.checkAndSetSSLImageUrl = function(a) {
        if (null === a) return a;
        if ("https:" === h.location.protocol) {
            var b = "images-na.ssl-images-amazon.com";
            "CN" === gbResources.getCustomerData("realm") && (b = "images-cn.ssl-images-amazon.com");
            var d = document.createElement("a");
            d.href = a;
            d.protocol = "https:";
            d.hostname = b;
            a = d.href
        }
        return a
    };
    Deal.findBackBoneDealAsin = function(a, b) {
        return a && a.dealAsinsHash ? _.find(a.dealAsinsHash, function(a) {
                return !b || a.ASIN === b
            }) ||
            null : null
    };
    Deal.PurchaseStatusGatherer = Deal.Class({
        __init__: function(a) {
            a && (this.deal = a, this.now = new Date, this.timeSensitiveStates = {}, this.timeSensitiveStates[Deal.inCartStr] = 1, this.timeSensitiveStates[Deal.pendingAtcStr] = 1, this.stateAsins = {}, this.gatherStates())
        },
        gatherStates: function() {
            if (this.deal && this.deal.dealAsinsHash) {
                for (var a in this.deal.dealAsinsHash) {
                    var b = this.deal.dealAsinsHash[a];
                    if (b && b.status) {
                        var d = b.status.state;
                        d && (void 0 === this.stateAsins[d] && (this.stateAsins[d] = []), void 0 !==
                            this.timeSensitiveStates[d] && b && b.status && null !== b.status.expiresDate && b.status.expiresDate <= this.now || this.stateAsins[d].push(b))
                    }
                }
                for (var e in this.timeSensitiveStates) void 0 !== this.stateAsins[e] && null !== this.stateAsins[e] && this.stateAsins[e].sort(Deal.sortByPurchaseStatusExpirations)
            }
        },
        hasTimeSensitiveState: function() {
            if (void 0 === this.stateAsins || null === this.stateAsins) return Deal.log("Cannot check if a timesensitive stateexists on undefined/null stateAsins."), !1;
            var a = !1,
                b;
            for (b in this.stateAsins)
                if ((b ===
                        Deal.inCartStr || b === Deal.pendingAtcStr || b === Deal.waitInLineStr) && void 0 !== this.stateAsins[b] && null !== this.stateAsins[b] && 0 < this.stateAsins[b].length) {
                    a = !0;
                    break
                }
            return a
        },
        getStateDisplayData: function() {
            var a = {},
                b = !1,
                d = 0,
                e;
            for (e in this.stateAsins) {
                void 0 === a[e] && (a[e] = []);
                e != Deal.availableStr && e != Deal.expiredStr && e != Deal.claimedStr && 0 < this.stateAsins[e].length && (b = !0);
                var c = this.stateAsins[e],
                    f;
                for (f = 0; f < c.length; f++) {
                    d++;
                    var m = c[f],
                        k = {
                            asin: m.ASIN
                        };
                    1 == this.timeSensitiveStates[e] && void 0 !== m.status &&
                        void 0 !== m.status.expiresDate && (k.expiresDate = m.status.expiresDate);
                    a[e].push(k)
                }
            }
            a.hasActionableStatus = b;
            a.totalAsins = d;
            return a
        }
    });
    Deal.sortByPurchaseStatusExpirations = function(a, b) {
        return a.status.expiresDate - b.status.expiresDate
    };
    Deal.UDPTimer = function(a, b, d) {
        var e = {};
        e.t = a;
        e.span = null;
        e.onTimeoutFunction = null;
        e.setOnTimeoutFunction = function(a) {
            e.onTimeoutFunction = a
        };
        e.update = function() {
            var a = Deal.max(e.t.getTime() - (new Date).getTime(), 0);
            if (0 >= a) {
                if (e.disconnect(), null != e.onTimeoutFunction) e.onTimeoutFunction()
            } else e.timeString =
                Deal.getUDPTimeString(a, b, d), null != e.span && void 0 != e.span && (0 < e.span.length ? e.span.html(e.timeString) : (l.when("A").execute(function(a) {
                    l.log("Price Block markup dump using A.$ - " + a.$("#price").html(), "WARN", "GoldboxUDPAssets");
                    l.log("A.$ Version - " + a.$.fn.jquery, "WARN", "GoldboxUDPAssets")
                }), l.when("jQuery").execute(function(a) {
                    l.log("Price Block markup dump using jQuery - " + a("#price").html(), "WARN", "GoldboxUDPAssets");
                    l.log("jQuery Version - " + a.fn.jquery, "WARN", "GoldboxUDPAssets")
                })))
        };
        e.disconnect =
            function() {
                e.cx.disconnect()
            };
        e.cx = Deal.clock.connect("tick", e.update);
        e.update();
        return e
    };
    Deal.getUDPTimeString = function(a, b, d) {
        var e = Math.floor(a / 36E5),
            c = Math.floor(a / 6E4 % 60);
        a = Math.floor(a / 1E3 % 60);
        var f = gbResources.getString("gbd_ends_in_label"),
            m = gbResources.getString("gbd_prime_starts_in_label"),
            k = gbResources.getString("gb_starts_in"),
            n = gbResources.getString("gbd_hour_label"),
            h = gbResources.getString("gbd_min_label"),
            p = gbResources.getString("gbd_sec_label");
        d = b ? " " : d.detail.accessType === Deal.accessTypeEnum.PRIME_EARLY_ACCESS &&
            Deal.isDealInEarlyAccessWindow(d) && !gbResources.getCustomerData("hasEarlyAccessBenefit") ? m + " " : d.detail.accessType === Deal.accessTypeEnum.APP_EARLY_ACCESS && Deal.isDealInEarlyAccessWindow(d) ? gbResources.getCustomerData("isApp") && gbResources.getCustomerData("isMobile") ? f + " " : k + " " : f + " ";
        0 == b ? (d = 10 > e ? d + ("0" + e + n + " ") : d + (e + n + " "), d = 10 > c ? d + ("0" + c + h + " ") : d + (c + h + " "), d = 10 > a ? d + ("0" + a + p) : d + (a + p)) : (d += c + ":", d = 10 > a ? d + ("0" + a) : d + a);
        return d
    };
    Deal.getOfferListingID = function(a, b) {
        return void 0 === a || null === a || void 0 ===
            a.dealAsinsHash || null === a.dealAsinsHash || void 0 === a.dealAsinsHash[b] || null === a.dealAsinsHash[b] ? void 0 === a.offerListingID || null === a.offerListingID ? null : a.offerListingID : a.dealAsinsHash[b].offerID
    };
    Deal.ConvertToPaladinUrl = function(a) {
        return void 0 === a || null === a ? null : a.replace(/^https?:\/\/[a-z0-9\.\-]*\.amazon.com\//i, h.location.protocol + "//" + h.location.host + "/")
    };
    Deal.digitalCategories = {
        US: "16261631 2350149011 154606011 163856011 979455011 1233514011 2402172011".split(" ")
    };
    Deal.BookCategories = {
        CN: ["658390051"]
    };
    Deal.hasDigitalCategory = function(a) {
        var b = gbResources.getCustomerData("realm");
        return _.intersection(a, Deal.digitalCategories[b]).length ? !0 : !1
    };
    Deal.getWhitelistedBookCategories = function() {
        var a = gbResources.getCustomerData("realm");
        return Deal.BookCategories[a] || []
    };
    Deal.isDealInEarlyAccessWindow = function(a) {
        var b = !1;
        a.detail && (a.detail.accessType === Deal.accessTypeEnum.PRIME_EARLY_ACCESS || a.detail.accessType === Deal.accessTypeEnum.APP_EARLY_ACCESS) && a.status && 0 >= a.status.msToStart && -a.status.msToStart <
            a.detail.accessDurationInMs && (b = !0);
        return b
    };
    Deal.isPrimeEarlyAccessDeal = function(a) {
        var b = !1;
        a.detail && a.detail.accessType === Deal.accessTypeEnum.PRIME_EARLY_ACCESS && (b = !0);
        return b
    };
    Deal.isPrimeOnlyDeal = function(a) {
        var b = !1;
        !a.detail || a.detail.accessType !== Deal.accessTypeEnum.PRIME_ONLY_LD && a.detail.accessType !== Deal.accessTypeEnum.PRIME_ONLY_DOTD && a.detail.accessType !== Deal.accessTypeEnum.PRIME_ONLY_BD || (b = !0);
        return b
    };
    Deal.isPrimeOnlyDotd = function(a) {
        var b = !1;
        a.detail && a.detail.accessType ===
            Deal.accessTypeEnum.PRIME_ONLY_DOTD && (b = !0);
        return b
    };
    Deal.getEarlyAccessEndTime = function(a) {
        return new Date(a.detail.accessDurationInMs + a.status.startDate.getTime())
    };
    Deal.setURLParameter = function(a, b, d) {
        if (a) {
            var e = a.indexOf("#"),
                c = -1 === e ? "" : a.substr(e);
            a = -1 === e ? a : a.substr(0, e);
            var e = new RegExp("([?\x26])" + b + "\x3d.*?(\x26|$)", "i"),
                f = -1 !== a.indexOf("?") ? "\x26" : "?";
            a = a.match(e) ? a.replace(e, "$1" + b + "\x3d" + d + "$2") : a + f + b + "\x3d" + d;
            return a + c
        }
        return null
    };
    Deal.getParameterByName = function(a) {
        a = a.replace(/[\[]/,
            "\\[").replace(/[\]]/, "\\]");
        a = (new RegExp("[\\?\x26]" + a + "\x3d([^\x26#]*)")).exec(location.search);
        return null === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
    };
    Deal.isPEAEnabledMarketplace = function(a) {
        return "US" === a || "UK" === a || "CA" === a || "DE" === a || "FR" === a || "ES" === a || "IT" === a || "JP" === a
    };
    Deal.incrementCounter = function(a) {
        a && h.ue && "function" === typeof h.ue.count && ue.count(a, (ue.count(a) || 0) + 1)
    };
    Deal.setCounter = function(a, b) {
        a && h.ue && "function" === typeof h.ue.count && ue.count(a, b)
    };
    Deal._generateAPIMetricName =
        function(a) {
            if (!a) return null;
            var b = "goldbox";
            a.apiName && (b += ":" + a.apiName, a.apiVersion && (b += ":" + a.apiVersion));
            b += ":" + (a.isSuccess ? "success" : "error");
            b += ":" + (a.isRetry ? "retry" : "noretry");
            a.clientId && (b += ":" + a.clientId);
            return b.toLowerCase()
        };
    Deal.recordAPIMetrics = function(a) {
        if (a) {
            var b = Deal._generateAPIMetricName(a);
            Deal.incrementCounter(b);
            a.latency && Deal.setCounter(b + ":time", a.latency)
        }
    };
    (function() {
        function a(e, c, b) {
            if (e === c) return 0 !== e || 1 / e == 1 / c;
            if (null == e || null == c) return e === c;
            e._chain &&
                (e = e._wrapped);
            c._chain && (c = c._wrapped);
            if (e.isEqual && g.isFunction(e.isEqual)) return e.isEqual(c);
            if (c.isEqual && g.isFunction(c.isEqual)) return c.isEqual(e);
            var d = n.call(e);
            if (d != n.call(c)) return !1;
            switch (d) {
                case "[object String]":
                    return e == String(c);
                case "[object Number]":
                    return e != +e ? c != +c : 0 == e ? 1 / e == 1 / c : e == +c;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +c;
                case "[object RegExp]":
                    return e.source == c.source && e.global == c.global && e.multiline == c.multiline && e.ignoreCase == c.ignoreCase
            }
            if ("object" !=
                typeof e || "object" != typeof c) return !1;
            for (var f = b.length; f--;)
                if (b[f] == e) return !0;
            b.push(e);
            var f = 0,
                m = !0;
            if ("[object Array]" == d) {
                if (f = e.length, m = f == c.length)
                    for (; f-- && (m = f in e == f in c && a(e[f], c[f], b)););
            } else {
                if ("constructor" in e != "constructor" in c || e.constructor != c.constructor) return !1;
                for (var k in e)
                    if (g.has(e, k) && (f++, !(m = g.has(c, k) && a(e[k], c[k], b)))) break;
                if (m) {
                    for (k in c)
                        if (g.has(c, k) && !f--) break;
                    m = !f
                }
            }
            b.pop();
            return m
        }
        var b = this,
            d = b._,
            e = {},
            c = Array.prototype,
            f = Object.prototype,
            m = c.slice,
            k = c.unshift,
            n = f.toString,
            h = f.hasOwnProperty,
            p = c.forEach,
            l = c.map,
            q = c.reduce,
            w = c.reduceRight,
            A = c.filter,
            t = c.every,
            x = c.some,
            C = c.indexOf,
            H = c.lastIndexOf,
            f = Array.isArray,
            J = Object.keys,
            D = Function.prototype.bind,
            g = function(e) {
                return new y(e)
            };
        "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = g), exports._ = g) : b._ = g;
        g.VERSION = "1.3.1";
        var u = g.each = g.forEach = function(a, c, b) {
            if (null != a)
                if (p && a.forEach === p) a.forEach(c, b);
                else if (a.length === +a.length)
                for (var d = 0, f = a.length; d <
                    f && !(d in a && c.call(b, a[d], d, a) === e); d++);
            else
                for (d in a)
                    if (g.has(a, d) && c.call(b, a[d], d, a) === e) break
        };
        g.map = g.collect = function(a, e, c) {
            var b = [];
            if (null == a) return b;
            if (l && a.map === l) return a.map(e, c);
            u(a, function(a, d, f) {
                b[b.length] = e.call(c, a, d, f)
            });
            a.length === +a.length && (b.length = a.length);
            return b
        };
        g.reduce = g.foldl = g.inject = function(a, e, c, b) {
            var d = 2 < arguments.length;
            null == a && (a = []);
            if (q && a.reduce === q) return b && (e = g.bind(e, b)), d ? a.reduce(e, c) : a.reduce(e);
            u(a, function(a, f, B) {
                d ? c = e.call(b, c, a, f, B) : (c =
                    a, d = !0)
            });
            if (!d) throw new TypeError("Reduce of empty array with no initial value");
            return c
        };
        g.reduceRight = g.foldr = function(a, e, c, b) {
            var d = 2 < arguments.length;
            null == a && (a = []);
            if (w && a.reduceRight === w) return b && (e = g.bind(e, b)), d ? a.reduceRight(e, c) : a.reduceRight(e);
            var f = g.toArray(a).reverse();
            b && !d && (e = g.bind(e, b));
            return d ? g.reduce(f, e, c, b) : g.reduce(f, e)
        };
        g.find = g.detect = function(a, e, c) {
            var b;
            z(a, function(a, d, f) {
                if (e.call(c, a, d, f)) return b = a, !0
            });
            return b
        };
        g.filter = g.select = function(a, e, c) {
            var b = [];
            if (null == a) return b;
            if (A && a.filter === A) return a.filter(e, c);
            u(a, function(a, d, f) {
                e.call(c, a, d, f) && (b[b.length] = a)
            });
            return b
        };
        g.reject = function(a, e, c) {
            var b = [];
            if (null == a) return b;
            u(a, function(a, d, f) {
                e.call(c, a, d, f) || (b[b.length] = a)
            });
            return b
        };
        g.every = g.all = function(a, c, b) {
            var d = !0;
            if (null == a) return d;
            if (t && a.every === t) return a.every(c, b);
            u(a, function(a, f, B) {
                if (!(d = d && c.call(b, a, f, B))) return e
            });
            return d
        };
        var z = g.some = g.any = function(a, c, b) {
            c || (c = g.identity);
            var d = !1;
            if (null == a) return d;
            if (x && a.some ===
                x) return a.some(c, b);
            u(a, function(a, f, B) {
                if (d || (d = c.call(b, a, f, B))) return e
            });
            return !!d
        };
        g.include = g.contains = function(a, e) {
            var c = !1;
            return null == a ? c : C && a.indexOf === C ? -1 != a.indexOf(e) : c = z(a, function(a) {
                return a === e
            })
        };
        g.invoke = function(a, e) {
            var c = m.call(arguments, 2);
            return g.map(a, function(a) {
                return (g.isFunction(e) ? e || a : a[e]).apply(a, c)
            })
        };
        g.pluck = function(a, e) {
            return g.map(a, function(a) {
                return a[e]
            })
        };
        g.max = function(a, e, c) {
            if (!e && g.isArray(a)) return Math.max.apply(Math, a);
            if (!e && g.isEmpty(a)) return -Infinity;
            var b = {
                computed: -Infinity
            };
            u(a, function(a, d, f) {
                d = e ? e.call(c, a, d, f) : a;
                d >= b.computed && (b = {
                    value: a,
                    computed: d
                })
            });
            return b.value
        };
        g.min = function(a, e, c) {
            if (!e && g.isArray(a)) return Math.min.apply(Math, a);
            if (!e && g.isEmpty(a)) return Infinity;
            var b = {
                computed: Infinity
            };
            u(a, function(a, d, f) {
                d = e ? e.call(c, a, d, f) : a;
                d < b.computed && (b = {
                    value: a,
                    computed: d
                })
            });
            return b.value
        };
        g.shuffle = function(a) {
            var e = [],
                c;
            u(a, function(a, b, d) {
                0 == b ? e[0] = a : (c = Math.floor(Math.random() * (b + 1)), e[b] = e[c], e[c] = a)
            });
            return e
        };
        g.sortBy = function(a,
            e, c) {
            return g.pluck(g.map(a, function(a, b, d) {
                return {
                    value: a,
                    criteria: e.call(c, a, b, d)
                }
            }).sort(function(a, e) {
                a = a.criteria;
                e = e.criteria;
                return a < e ? -1 : a > e ? 1 : 0
            }), "value")
        };
        g.groupBy = function(a, e) {
            var c = {},
                b = g.isFunction(e) ? e : function(a) {
                    return a[e]
                };
            u(a, function(a, e) {
                e = b(a, e);
                (c[e] || (c[e] = [])).push(a)
            });
            return c
        };
        g.sortedIndex = function(a, e, c) {
            c || (c = g.identity);
            for (var b = 0, d = a.length; b < d;) {
                var f = b + d >> 1;
                c(a[f]) < c(e) ? b = f + 1 : d = f
            }
            return b
        };
        g.toArray = function(a) {
            return a ? a.toArray ? a.toArray() : g.isArray(a) || g.isArguments(a) ?
                m.call(a) : g.values(a) : []
        };
        g.size = function(a) {
            return g.toArray(a).length
        };
        g.first = g.head = function(a, e, c) {
            return null == e || c ? a[0] : m.call(a, 0, e)
        };
        g.initial = function(a, e, c) {
            return m.call(a, 0, a.length - (null == e || c ? 1 : e))
        };
        g.last = function(a, e, c) {
            return null == e || c ? a[a.length - 1] : m.call(a, Math.max(a.length - e, 0))
        };
        g.rest = g.tail = function(a, e, c) {
            return m.call(a, null == e || c ? 1 : e)
        };
        g.compact = function(a) {
            return g.filter(a, function(a) {
                return !!a
            })
        };
        g.flatten = function(a, e) {
            return g.reduce(a, function(a, c) {
                if (g.isArray(c)) return a.concat(e ?
                    c : g.flatten(c));
                a[a.length] = c;
                return a
            }, [])
        };
        g.without = function(a) {
            return g.difference(a, m.call(arguments, 1))
        };
        g.uniq = g.unique = function(a, e, c) {
            c = c ? g.map(a, c) : a;
            var b = [];
            g.reduce(c, function(c, d, f) {
                0 != f && (!0 === e ? g.last(c) == d : g.include(c, d)) || (c[c.length] = d, b[b.length] = a[f]);
                return c
            }, []);
            return b
        };
        g.union = function() {
            return g.uniq(g.flatten(arguments, !0))
        };
        g.intersection = g.intersect = function(a) {
            var e = m.call(arguments, 1);
            return g.filter(g.uniq(a), function(a) {
                return g.every(e, function(e) {
                    return 0 <= g.indexOf(e,
                        a)
                })
            })
        };
        g.difference = function(a) {
            var e = g.flatten(m.call(arguments, 1));
            return g.filter(a, function(a) {
                return !g.include(e, a)
            })
        };
        g.zip = function() {
            for (var a = m.call(arguments), e = g.max(g.pluck(a, "length")), c = Array(e), b = 0; b < e; b++) c[b] = g.pluck(a, "" + b);
            return c
        };
        g.indexOf = function(a, e, c) {
            if (null == a) return -1;
            var b;
            if (c) return c = g.sortedIndex(a, e), a[c] === e ? c : -1;
            if (C && a.indexOf === C) return a.indexOf(e);
            c = 0;
            for (b = a.length; c < b; c++)
                if (c in a && a[c] === e) return c;
            return -1
        };
        g.lastIndexOf = function(a, e) {
            if (null == a) return -1;
            if (H && a.lastIndexOf === H) return a.lastIndexOf(e);
            for (var c = a.length; c--;)
                if (c in a && a[c] === e) return c;
            return -1
        };
        g.range = function(a, e, c) {
            1 >= arguments.length && (e = a || 0, a = 0);
            c = arguments[2] || 1;
            for (var b = Math.max(Math.ceil((e - a) / c), 0), d = 0, f = Array(b); d < b;) f[d++] = a, a += c;
            return f
        };
        var I = function() {};
        g.bind = function(a, e) {
            var c, b;
            if (a.bind === D && D) return D.apply(a, m.call(arguments, 1));
            if (!g.isFunction(a)) throw new TypeError;
            b = m.call(arguments, 2);
            return c = function() {
                if (!(this instanceof c)) return a.apply(e, b.concat(m.call(arguments)));
                I.prototype = a.prototype;
                var d = new I,
                    f = a.apply(d, b.concat(m.call(arguments)));
                return Object(f) === f ? f : d
            }
        };
        g.bindAll = function(a) {
            var e = m.call(arguments, 1);
            0 == e.length && (e = g.functions(a));
            u(e, function(e) {
                a[e] = g.bind(a[e], a)
            });
            return a
        };
        g.memoize = function(a, e) {
            var c = {};
            e || (e = g.identity);
            return function() {
                var b = e.apply(this, arguments);
                return g.has(c, b) ? c[b] : c[b] = a.apply(this, arguments)
            }
        };
        g.delay = function(a, e) {
            var c = m.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(a, c)
            }, e)
        };
        g.defer = function(a) {
            return g.delay.apply(g, [a, 1].concat(m.call(arguments, 1)))
        };
        g.throttle = function(a, e) {
            var c, b, d, f, m, k = g.debounce(function() {
                m = f = !1
            }, e);
            return function() {
                c = this;
                b = arguments;
                d || (d = setTimeout(function() {
                    d = null;
                    m && a.apply(c, b);
                    k()
                }, e));
                f ? m = !0 : a.apply(c, b);
                k();
                f = !0
            }
        };
        g.debounce = function(a, e) {
            var c;
            return function() {
                var b = this,
                    d = arguments;
                clearTimeout(c);
                c = setTimeout(function() {
                    c = null;
                    a.apply(b, d)
                }, e)
            }
        };
        g.once = function(a) {
            var e = !1,
                c;
            return function() {
                if (e) return c;
                e = !0;
                return c = a.apply(this, arguments)
            }
        };
        g.wrap = function(a, e) {
            return function() {
                var c = [a].concat(m.call(arguments, 0));
                return e.apply(this, c)
            }
        };
        g.compose = function() {
            var a = arguments;
            return function() {
                for (var e = arguments, c = a.length - 1; 0 <= c; c--) e = [a[c].apply(this, e)];
                return e[0]
            }
        };
        g.after = function(a, e) {
            return 0 >= a ? e() : function() {
                if (1 > --a) return e.apply(this, arguments)
            }
        };
        g.keys = J || function(a) {
            if (a !== Object(a)) throw new TypeError("Invalid object");
            var e = [],
                c;
            for (c in a) g.has(a, c) && (e[e.length] = c);
            return e
        };
        g.values = function(a) {
            return g.map(a, g.identity)
        };
        g.functions = g.methods = function(a) {
            var e = [],
                c;
            for (c in a) g.isFunction(a[c]) && e.push(c);
            return e.sort()
        };
        g.extend = function(a) {
            u(m.call(arguments, 1), function(e) {
                for (var c in e) a[c] = e[c]
            });
            return a
        };
        g.defaults = function(a) {
            u(m.call(arguments, 1), function(e) {
                for (var c in e) null == a[c] && (a[c] = e[c])
            });
            return a
        };
        g.clone = function(a) {
            return g.isObject(a) ? g.isArray(a) ? a.slice() : g.extend({}, a) : a
        };
        g.tap = function(a, e) {
            e(a);
            return a
        };
        g.isEqual = function(e, c) {
            return a(e, c, [])
        };
        g.isEmpty = function(a) {
            if (g.isArray(a) || g.isString(a)) return 0 === a.length;
            for (var e in a)
                if (g.has(a,
                        e)) return !1;
            return !0
        };
        g.isElement = function(a) {
            return !(!a || 1 != a.nodeType)
        };
        g.isArray = f || function(a) {
            return "[object Array]" == n.call(a)
        };
        g.isObject = function(a) {
            return a === Object(a)
        };
        g.isArguments = function(a) {
            return "[object Arguments]" == n.call(a)
        };
        g.isArguments(arguments) || (g.isArguments = function(a) {
            return !(!a || !g.has(a, "callee"))
        });
        g.isFunction = function(a) {
            return "[object Function]" == n.call(a)
        };
        g.isString = function(a) {
            return "[object String]" == n.call(a)
        };
        g.isNumber = function(a) {
            return "[object Number]" ==
                n.call(a)
        };
        g.isNaN = function(a) {
            return a !== a
        };
        g.isBoolean = function(a) {
            return !0 === a || !1 === a || "[object Boolean]" == n.call(a)
        };
        g.isDate = function(a) {
            return "[object Date]" == n.call(a)
        };
        g.isRegExp = function(a) {
            return "[object RegExp]" == n.call(a)
        };
        g.isNull = function(a) {
            return null === a
        };
        g.isUndefined = function(a) {
            return void 0 === a
        };
        g.has = function(a, e) {
            return h.call(a, e)
        };
        g.noConflict = function() {
            b._ = d;
            return this
        };
        g.identity = function(a) {
            return a
        };
        g.times = function(a, e, c) {
            for (var b = 0; b < a; b++) e.call(c, b)
        };
        g.escape =
            function(a) {
                return ("" + a).replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#x27;").replace(/\//g, "\x26#x2F;")
            };
        g.mixin = function(a) {
            u(g.functions(a), function(e) {
                K(e, g[e] = a[e])
            })
        };
        var L = 0;
        g.uniqueId = function(a) {
            var e = L++;
            return a ? a + e : e
        };
        g.templateSettings = {
            evaluate: /<~([\s\S]+?)~>/g,
            interpolate: /\$\(([\s\S]+?)\)/g,
            escape: /~\$\(([\s\S]+?)\)/g
        };
        var E = /.^/,
            F = function(a) {
                return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
            };
        g.template = function(a,
            e) {
            var c = g.templateSettings;
            a = "var __p\x3d[],print\x3dfunction(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(c.escape || E, function(a, e) {
                return "',_.escape(" + F(e) + "),'"
            }).replace(c.interpolate || E, function(a, e) {
                return "'," + F(e) + ",'"
            }).replace(c.evaluate || E, function(a, e) {
                return "');" + F(e).replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');";
            var b = new Function("obj",
                "_", a);
            return e ? b(e, g) : function(a) {
                return b.call(this, a, g)
            }
        };
        g.chain = function(a) {
            return g(a).chain()
        };
        var y = function(a) {
            this._wrapped = a
        };
        g.prototype = y.prototype;
        var G = function(a, e) {
                return e ? g(a).chain() : a
            },
            K = function(a, e) {
                y.prototype[a] = function() {
                    var a = m.call(arguments);
                    k.call(a, this._wrapped);
                    return G(e.apply(g, a), this._chain)
                }
            };
        g.mixin(g);
        u("pop push reverse shift sort splice unshift".split(" "), function(a) {
            var e = c[a];
            y.prototype[a] = function() {
                var c = this._wrapped;
                e.apply(c, arguments);
                var b = c.length;
                "shift" != a && "splice" != a || 0 !== b || delete c[0];
                return G(c, this._chain)
            }
        });
        u(["concat", "join", "slice"], function(a) {
            var e = c[a];
            y.prototype[a] = function() {
                return G(e.apply(this._wrapped, arguments), this._chain)
            }
        });
        y.prototype.chain = function() {
            this._chain = !0;
            return this
        };
        y.prototype.value = function() {
            return this._wrapped
        }
    }).call(this);
    l.when("A", "gb-udp-event-emitter").register("gb-udp-deal-dao", function(a, b) {
        return b.extend({
            init: function(a) {
                this._super();
                if (!a) throw Error("Cannot create a DealDAO object with undefined dealID");
                this.timeouts = {
                    startTimeout: null,
                    endTimeout: null,
                    endTimeoutDelayed: null,
                    statusExpireTimeout: null,
                    expireTimeout: null,
                    pstatusExpire: null,
                    pstatusExpiresSoon: null
                };
                this.checkingDealStatus = !1;
                this.lastPstatusExpireState = "";
                this.dealID = a;
                this.loading = !0;
                this.customerID = null;
                this.expired = !1;
                this.parentItems = this.parentAsin = null;
                this.claimed = !1;
                this.itemType = this.dealType = null;
                this.dealState = Deal.stateToTemplateMap.Loading;
                this.offerListingID = this.impressionAsin = this.buyAsin = this.discussionBoardURL = this.legacyDealID =
                    this.cacheExpiresDate = this.msToCacheExpires = null;
                this.detail = {
                    title: null,
                    description: null,
                    marketplaceID: null,
                    imageAsin: null,
                    score: null,
                    secondaryImages: null,
                    URL: null,
                    buyBoxURL: null,
                    displayPriority: null,
                    isFeatured: null,
                    marketingMessage: null,
                    geoDisplayName: null,
                    accessType: null,
                    isPrimeOnly: null,
                    isPrimeEarly: null,
                    accessDurationInMs: null
                };
                this.pricingData = {
                    dealPriceHash: {
                        isRange: null,
                        max: {
                            price: null,
                            formattedPrice: null,
                            currency: null
                        },
                        min: {
                            price: null,
                            formattedPrice: null,
                            currency: null
                        }
                    },
                    basisPriceHash: {
                        isRange: null,
                        max: {
                            price: null,
                            formattedPrice: null,
                            currency: null
                        },
                        min: {
                            price: null,
                            formattedPrice: null,
                            currency: null
                        }
                    }
                };
                this.percentOff = {
                    isRange: null,
                    max: null,
                    min: null
                };
                this.status = {
                    dealState: null,
                    currentlyUnavailable: !1,
                    percentClaimed: null,
                    percentSoldOut: null,
                    lastUpdated: null,
                    totalCouponsCount: null,
                    msToStart: null,
                    msToEnd: null,
                    startDate: null,
                    endDate: null,
                    ended: null,
                    msToCacheExpires: null,
                    cacheExpiresDate: null,
                    started: null,
                    expired: null
                };
                this.isLimitedQuantity = null;
                this.teaser = {
                    teaserLine: null,
                    teaserImage: null,
                    teaserURL: null,
                    teaserAsin: null
                };
                this.fastTrackMessage = this.swfContents = null;
                this.dealAsins = [];
                this.dealAsinsHash = {};
                this.auxiliaryData = {
                    isPrimeEligible: null,
                    breaksMAP: null,
                    merchantDetails: {
                        merchantID: null,
                        merchantName: null
                    },
                    reviewData: {
                        averageRating: null,
                        totalReviews: null,
                        reviewsURL: null
                    }
                };
                this.purchaseStatusWarningThreshold = 6E5
            },
            validate: function(a) {},
            setItemType: function(a) {
                this.itemType = this.dealAsins && 1 < this.dealAsins.length ? Deal.itemTypes.MultiItem : this.dealAsins && 1 === this.dealAsins.length ? Deal.itemTypes.SingleItem :
                    a ? Deal.responseItemTypeToItemType[a] : Deal.itemTypes.ContentOnly
            },
            calculateStateData: function() {
                this.dealState = Deal.stateToTemplateMap.Available;
                0 < this.status.msToStart && !this.status.started ? this.dealState = Deal.stateToTemplateMap.Upcoming : Deal.checkIfDealExpired(this) ? this.dealState = Deal.stateToTemplateMap.Expired : this.isDealSoldOut() && (this.dealState = Deal.stateToTemplateMap.SoldOut)
            },
            calculateStatusData: function(a, e) {
                if (a) {
                    this.status.currentlyUnavailable = a.currentlyUnavailable;
                    this.status.percentClaimed =
                        a.percentClaimed;
                    var c;
                    this.dealAsins && (c = this.dealAsins.length);
                    var b = 0;
                    if (c)
                        for (var m = 0; m < c; m++) 100 === this.dealAsins[m].status.percentClaimed && b++;
                    this.isDealSoldOut() && (this.status.percentClaimed = 100);
                    this.status.percentSoldOut = a.percentSoldOut;
                    this.status.totalCouponsCount = a.totalAvailable;
                    this.status.msToCacheExpires = a.msToCacheExpires;
                    this.status.msToStart = a.msToStart;
                    this.status.msToEnd = a.msToEnd;
                    this.status.cacheExpiresDate = new Date(e.getTime() + parseInt(this.status.msToCacheExpires, 10));
                    this.status.endDate =
                        new Date(e.getTime() + parseInt(this.status.msToEnd, 10));
                    this.status.startDate = new Date(e.getTime() + parseInt(this.status.msToStart, 10))
                } else Deal.log("Cannot set Deal DAO status for undefined/null statusObj.")
            },
            isDealSoldOut: function() {
                if (!this.dealAsinsHash) return !1;
                for (var a in this.dealAsinsHash) {
                    var e = this.dealAsinsHash[a];
                    if (!e.status.offerServiceSoldOut && 100 > e.status.percentSoldOut) return !1
                }
                return !0
            },
            calculatePriceData: function(a) {
                var e = Deal.Price.findMaxMinPrices(this, a);
                Deal.Price.isEmptyPriceObject(e) ||
                    (this.pricingData.basisPriceHash.max = e.maxBasisPrice, this.pricingData.basisPriceHash.min = e.minBasisPrice, Deal.Price.maxEqualMin(this.pricingData.basisPriceHash) ? this.pricingData.basisPriceHash.isRange = !1 : this.pricingData.basisPriceHash.isRange = !0, this.pricingData.dealPriceHash.max = e.maxDealPrice, this.pricingData.dealPriceHash.min = e.minDealPrice, Deal.Price.maxEqualMin(this.pricingData.dealPriceHash) ? this.pricingData.dealPriceHash.isRange = !1 : this.pricingData.dealPriceHash.isRange = !0);
                a && (a.maxPercentOff &&
                    (this.percentOff.max = parseInt(a.maxPercentOff)), a.minPercentOff && (this.percentOff.min = parseInt(a.minPercentOff)), this.percentOff.isRange = this.percentOff.max === this.percentOff.min ? !1 : !0)
            },
            calculateAuxiliaryDataFromItem: function() {
                var a = Deal.findBackBoneDealAsin(this);
                if (a) {
                    if (null === this.auxiliaryData.isPrimeEligible || void 0 === this.auxiliaryData.isPrimeEligible) this.auxiliaryData.isPrimeEligible = a.auxiliaryData.isPrimeEligible;
                    if (null === this.auxiliaryData.breaksMAP || void 0 === this.auxiliaryData.breaksMAP) this.auxiliaryData.breaksMAP =
                        a.auxiliaryData.breaksMAP;
                    if (null === this.auxiliaryData.merchantDetails || void 0 === this.auxiliaryData.merchantDetails) this.auxiliaryData.merchantDetails = a.auxiliaryData.merchantDetails;
                    if (null === this.auxiliaryData.reviewData || void 0 === this.auxiliaryData.reviewData) this.auxiliaryData.reviewData = a.auxiliaryData.reviewData
                }
            }
        })
    });
    l.when("A", "gb-udp-event-emitter").register("gb-udp-deal-asin-dao", function(a, b) {
        return b.extend({
            init: function(a) {
                this._super();
                if (void 0 === a || !a) throw Error("Cannot create a DealAsinDAO object with undefined asin");
                Deal.log("Created DealAsinDAO instance for: " + a);
                this.ASIN = a;
                this.timeouts = {};
                this.imageURL = this.basisKind = this.basisPriceFormatted = this.basisPrice = this.dealPriceFormatted = this.dealPrice = this.marketplaceID = this.parentDealDAO = this.dealID = null;
                this.isParent = !1;
                this.percentOff = this.percentOffBasisPrice = this.totalAvailable = null;
                this.status = {
                    state: null,
                    itemState: null,
                    expiresDate: null,
                    offerServiceSoldOut: null,
                    currentlyUnavailable: null,
                    percentClaimed: null,
                    percentSoldOut: null,
                    lastUpdated: null,
                    msToExpiry: null,
                    totalCouponsCount: null
                };
                this.isCustomerClaimed = !1;
                this.waitListStatus = {
                    position: null,
                    chance: null,
                    timeToWait: null
                };
                this.offerListingID = this.variationData = null;
                this.auxiliaryData = {
                    isPrimeEligible: null,
                    breaksMAP: null,
                    merchantDetails: {
                        merchantID: null,
                        merchantName: null
                    },
                    reviewData: {
                        averageRating: null,
                        totalReviews: null,
                        reviewsURL: null
                    }
                };
                this.perCustomerAmount = this.offerID = this.isWaitlistable = this.isTimeLimited = this.isOneClickable = this.isParentItem = this.ingressUrl = this.egressUrl = null
            },
            validate: function(a) {}
        })
    });
    l.when("A", "gb-udp-deal-asin-dao", "gb-udp-event-emitter").register("gb-deal-content-service-translation-helper", function(a, b, d) {
        return d.extend({
            init: function(a) {
                this._super()
            },
            validate: function(a) {},
            populateFromGetDealMetadata: function() {},
            populateFromGetDeals: function(a, c) {
                if (a && c) {
                    a.loading = !1;
                    a.legacyDeal || (a.legacyDeal = new Deal.Model.Deal(c.dealID));
                    a.customerID = gbResources.getCustomerData("customerId");
                    a.claimed = !1;
                    a.dealID = c.dealID;
                    a.legacyDealID = c.legacyDealID;
                    a.parentAsin = null;
                    a.dealType =
                        c.type;
                    if (c.parentItems) {
                        a.parentItems || (a.parentItems = {});
                        for (var b in c.parentItems) a.parentAsin || (a.parentAsin = b), a.parentItems[b] = c.parentItems[b]
                    }
                    a.isLimitedQuantity = !1;
                    a.limitedQuantity = !1;
                    c.quantity && (c.quantity = parseInt(c.quantity, 10));
                    if (a.dealType == Deal.dealTypes.LD || c.quantity && 0 < c.quantity) a.isLimitedQuantity = !0, a.limitedQuantity = !0;
                    a.detail.marketplaceID = null;
                    a.detail.score = parseInt(c.score, 10);
                    a.detail.title = c.title;
                    a.detail.description = c.description;
                    a.detail.leakDescription = c.leakDescription;
                    a.detail.marketingMessage = c.marketingMessage;
                    a.detail.geoDisplayName = c.geoDisplayName;
                    a.detail.imageAsin = Deal.checkAndSetSSLImageUrl(c.primaryImage);
                    a.detail.secondaryImages = c.secondaryImages;
                    a.detail.URL = c.egressUrl;
                    a.detail.buyBoxURL = c.ingressUrl;
                    a.detail.displayPriority = parseInt(c.displayPriority, 10);
                    a.detail.isFeatured = Deal.parseBool(c.isFeatured);
                    a.detail.imageAsin || (a.detail.imageAsin = gbResources.getImage("no_image"));
                    c.impressionAsin && (a.impressionAsin = c.impressionAsin);
                    a.detail.isPrimeEarly = !1;
                    a.detail.isPrimeOnly = !1;
                    c.primeAccessType == Deal.accessTypeEnum.PRIME_EARLY_ACCESS ? (a.detail.accessType = Deal.accessTypeEnum[c.primeAccessType], a.detail.accessDurationInMs = 6E4 * parseInt(c.primeAccessDuration, 10), a.detail.isPrimeEarly = !0) : c.primeAccessType == Deal.accessTypeEnum.PRIME_ONLY_LD ? (a.detail.isPrimeOnly = !0, a.detail.accessType = Deal.accessTypeEnum.PRIME_ONLY_LD) : c.primeAccessType == Deal.accessTypeEnum.PRIME_ONLY_DOTD ? (a.detail.isPrimeOnly = !0, a.detail.accessType = Deal.accessTypeEnum.PRIME_ONLY_DOTD) :
                        c.primeAccessType == Deal.accessTypeEnum.PRIME_ONLY_BD && (a.detail.isPrimeOnly = !0, a.detail.accessType = Deal.accessTypeEnum.PRIME_ONLY_BD);
                    a.discussionBoardURL = "/gp/goldbox/discussion/" + a.dealID;
                    a.auxiliaryData.isPrimeEligible = Deal.parseBool(c.isPrimeEligible);
                    a.auxiliaryData.breaksMAP = Deal.parseBool(c.isMAP);
                    a.auxiliaryData.merchantDetails = c.merchantID || c.merchantName ? {
                        merchantID: c.merchantID,
                        merchantName: c.merchantName
                    } : null;
                    c.reviewAsin ? (a.buyAsin = c.reviewAsin, a.auxiliaryData.reviewData = {
                        averageRating: parseFloat(c.reviewRating),
                        totalReviews: parseInt(c.totalReviews, 10),
                        reviewsURL: "/gp/product-reviews/" + c.reviewAsin
                    }) : a.auxiliaryData.reviewData = null;
                    c.teaser && (a.teaser.teaserLine = c.teaser, c.teaserImage && (a.teaser.teaserImage = Deal.checkAndSetSSLImageUrl(c.teaserImage)), c.teaserAsin && (a.teaser.teaserAsin = c.teaserAsin, a.teaser.teaserURL = "/gp/product/" + c.teaserAsin));
                    c.items && this.populateFromItems(a, c);
                    this.executePostTranslationRules(a);
                    a.legacyDeal.load_from_deal_dao(a)
                } else Deal.log("ERROR: DealContentServiceTranslationHelper: deal/jsonDeal object passed into populateFromGetDeals was null/undefined.")
            },
            translateClaimDealResponse: function(a, c, b) {
                if (void 0 !== b && null !== b) {
                    var d = new Date;
                    a.loading = !1;
                    var k = _.find(a.dealAsins, function(a) {
                            if (a.ASIN === c) return a
                        }),
                        n = b.dealItemStatus;
                    k && void 0 !== n && null !== n && (k.status.itemState = b.dealItemStatus.itemState, k.status.state = Deal.customerStates[b.dealItemStatus.customerState], k.status.msToExpiry = b.dealItemStatus.msToCustomerStateExpiry);
                    void 0 !== b.msCacheTtl && null !== b.msCacheTtl && (a.status.msToCacheExpires = parseInt(b.msCacheTtl, 10));
                    a.legacyDeal = new Deal.Model.Deal(a.dealID);
                    a.legacyDeal.load_from_deal_dao(a);
                    this.initStatus(a, d);
                    this.initAsinStatus(a)
                }
            },
            populateFromItems: function(a, c) {
                if (void 0 === a || null == a || void 0 == c || null == c) {
                    var d = "";
                    a ? c || (d += "jsonDeal \x3d null. dealID \x3d " + a.dealID) : d += "deal \x3d null";
                    Deal.log("ERROR: DealContentServiceTranslationHelper: Deal object or jsonDeal object passed into populateFromItems was null or undefined. " + d)
                } else {
                    var m = c.items,
                        k;
                    for (k = 0; k < m.length; k++) {
                        var n = m[k],
                            h = n.itemID;
                        if (void 0 === a.dealAsinsHash[h] || null === a.dealAsinsHash[h]) n.itemID ||
                            (d = "dealID \x3d " + a.dealID, Deal.log("ERROR: DealContentServiceTranslationHelper: populateFromItems: Null or undefined Asin passed. " + d)), a.dealAsinsHash[h] = new b(n.itemID), a.dealAsins.push(a.dealAsinsHash[h]);
                        a.dealAsinsHash[h].parentDealDAO = a;
                        this.populateFromItem(a.dealAsinsHash[h], n, a.dealType)
                    }
                    a.setItemType(c.itemType);
                    null !== a.itemType && void 0 !== a.itemType || a.itemType != Deal.itemTypes.SingleItem || !a.dealAsins || 1 != a.dealAsins.length || (a.buyAsin = a.dealAsins[0].ASIN);
                    if (null === a.offerListingID ||
                        void 0 === a.offerListingID) a.dealAsins && 1 == a.dealAsins.length ? a.offerListingID = a.dealAsins[0].offerID : a.itemType == Deal.itemTypes.SingleItem && c.offerID && (a.offerListingID = c.offerID);
                    a.calculatePriceData(c);
                    a.calculateAuxiliaryDataFromItem();
                    Deal.log("DealContentServiceTranslationHelper: Populate form Items Complete Pushed " + k + " DealAsins")
                }
            },
            populateFromItem: function(a, c, b) {
                a.ASIN = c.itemID;
                a.dealID = c.dealID;
                c.variationDimensions && (a.variationData = a.variationData || {}, _.each(c.variationDimensions, function(b,
                    d) {
                    b = b.replace(/\s+/g, " ");
                    c.variationDimensions[d] = b;
                    a.variationData[d] = b
                }));
                void 0 !== c.dealPrice && null !== c.dealPrice && (a.dealPrice = {
                    currency: c.currencyCode,
                    price: parseFloat(c.dealPrice)
                }, a.dealPriceFormatted = Deal.Price.format(a.dealPrice));
                void 0 !== c.bAmount && null !== c.bAmount && (a.basisPrice = {
                    currency: c.currencyCode,
                    price: parseFloat(c.bAmount)
                }, a.basisPriceFormatted = Deal.Price.format(a.basisPrice), a.basisKind = c.bKind);
                if (a.basisPrice && a.dealPrice && (a.percentOffBasisPrice = Deal.Price.percent_off(a.basisPrice,
                        a.dealPrice), a.percentOffBasisPrice)) try {
                    a.percentOffBasisPriceFormatted = Math.round(a.percentOffBasisPrice)
                } catch (d) {
                    Deal.log("UnknownFormat percentageOffBasisPrice Object." + d)
                }
                a.percentOff = Deal.Price.displayable_percent_off(parseInt(c.percentOff));
                a.egressUrl = c.egressUrl;
                a.ingressUrl = c.ingressUrl;
                a.isParentItem = c.isParentItem;
                a.imageURL = c.primaryImage;
                if (void 0 === a.imageURL || null === a.imageURL) a.imageURL = gbResources.getImage("no_image");
                null !== c.isOneClickable && void 0 !== c.isOneClickable && (a.isOneClickable =
                    Deal.parseBool(c.isOneClickable));
                null !== c.isTimeLimited && void 0 !== c.isTimeLimited && (a.isTimeLimited = Deal.parseBool(c.isTimeLimited));
                null !== c.isWaitlistable && void 0 !== c.isWaitlistable && (a.isWaitlistable = Deal.parseBool(c.isWaitlistable));
                a.offerID = c.offerID;
                null !== c.perCustomerAmount && void 0 !== c.perCustomerAmount && (a.perCustomerAmount = parseInt(c.perCustomerAmount, 10));
                a.auxiliaryData.isPrimeEligible = Deal.parseBool(c.isPrimeEligible);
                a.auxiliaryData.breaksMAP = Deal.parseBool(c.isMAP);
                a.auxiliaryData.merchantDetails = {
                    merchantID: c.merchantID,
                    merchantName: c.merchantName
                };
                a.auxiliaryData.reviewData = {
                    averageRating: parseFloat(c.reviewRating),
                    totalReviews: parseInt(c.totalReviews, 10),
                    reviewsURL: "/gp/product-reviews/" + c.itemID
                };
                return a
            },
            populateFromSelectDealsMetadata: function(a, c) {
                if (void 0 === a || null === a) Deal.log("Cannot populate select deals metadata for undefined/null widgetID.");
                else if (void 0 === c || null === c) Deal.log("Cannot populate select deals metadata for undefined/null data.");
                else {
                    var b = {};
                    b.dealStateHash =
                        c.dealsByState;
                    b.dealCategoryHash = c.dealsByCategory;
                    b.dealAccessTypeHash = c.dealsByAccessType;
                    b.sortedDealList = c.sortedDealIDs;
                    b.selectDealsPageSize = c.selectDealsPageSize;
                    Deal.controller.metadata.registerResponseData(a, b)
                }
            },
            populateFromGetDealStatuses: function(a, c) {
                if (void 0 === a || null === a) Deal.log("Cannot populateFromGetDealStatuses for undefined/null json obj.");
                else {
                    var b, d;
                    for (d in a) void 0 !== c.deals[d] && null !== c.deals[d] ? (b = c.getDeal(d), this.populateFromGetDealStatus(b, a[d])) : Deal.log("We cannot do a status update on a DealObject that doesn't exist.")
                }
            },
            populateFromGetDealStatus: function(a, c) {
                var d = new Date;
                if (void 0 === a || null === a) Deal.log("Cannot populateFromDealStatus for undefined/null deal obj.");
                else if (void 0 === c || null === c) Deal.log("Cannot populateFromDealStatus for undefined/null json obj.");
                else {
                    if (void 0 !== c.lastUpdated && null !== c.lastUpdated) {
                        c.lastUpdated = parseInt(c.lastUpdated, 10);
                        if (void 0 !== a.status.lastUpdated && null !== a.status.lastUpdated && a.status.lastUpdated > c.lastUpdated) return;
                        a.status.lastUpdated = c.lastUpdated
                    }
                    if (!(a.dealType ===
                            Deal.dealTypes.LD && a.status.cacheExpiresDate > d)) {
                        void 0 !== c.totalCouponCount && null !== c.totalCouponCount && (a.status.totalCouponsCount = parseInt(c.totalCouponCount, 10));
                        if (void 0 !== c.dealState && null !== c.dealState) {
                            a.status.dealState = c.dealState;
                            var m = Deal.stateToTemplateMap[Deal.dealStates[c.dealState]];
                            void 0 !== m && null !== m && (a.dealState = m)
                        }
                        void 0 !== c.msToEnd && null !== c.msToEnd && (a.status.msToEnd = parseInt(c.msToEnd, 10));
                        void 0 !== c.msToStart && null !== c.msToStart && (a.status.msToStart = parseInt(c.msToStart,
                            10), a.dealState === Deal.stateToTemplateMap.Upcoming && 0 >= a.status.msToStart && (a.dealState = Deal.stateToTemplateMap.ComingSoon));
                        void 0 !== c.msCacheTtl && null !== c.msCacheTtl && (a.status.msToCacheExpires = parseInt(c.msCacheTtl, 10));
                        void 0 !== c.percentClaimed && null !== c.percentClaimed && (a.status.percentClaimed = parseInt(c.percentClaimed, 10));
                        for (var k in c.dealItemStatus)
                            if (null === a.dealAsinsHash[k] || void 0 === a.dealAsinsHash[k]) m = new b(k), m.parentDealDAO = a, a.dealAsins.push(m), a.dealAsinsHash[k] = m;
                        void 0 !== c.dealItemStatus &&
                            null !== c.dealItemStatus && this.populateFromDealItemStatuses(a, c.dealItemStatus);
                        this.initStatus(a, d);
                        this.initAsinStatus(a);
                        a.trigger("change", a);
                        void 0 !== a.legacyDeal && null !== a.legacyDeal && a.legacyDeal.load_status_from_deal_dao(a)
                    }
                }
            },
            populateFromDealItemStatuses: function(a, c) {
                if (void 0 === a || null === a) Deal.log("Cannot populateFromDealItemStatuses for undefined/null deal obj.");
                else if (void 0 === c || null === c) Deal.log("Cannot populateFomDealItemStatuses for undefined/null json obj.");
                else {
                    var b, d;
                    for (d in c) void 0 !==
                        a.dealAsinsHash[d] && null !== a.dealAsinsHash[d] ? (b = a.dealAsinsHash[d], this.populateFromDealItemStatus(b, c[d])) : Deal.log("Cannot populate itemStatus on a non-existed item for imte: " + d)
                }
            },
            populateFromDealItemStatus: function(a, c) {
                if (void 0 === a || null === a) Deal.log("Cannot populateFromDealItemStatus for undefined/null dealAsin.");
                else if (void 0 === c || null === c) Deal.log("Cannot populate DealItemStatus from undefined/null json obj.");
                else {
                    if (void 0 !== c.lastUpdated && null !== c.lastUpdated) {
                        c.lastUpdated = parseInt(c.lastUpdated,
                            10);
                        if (void 0 !== a.status.lastUpdated && null !== a.status.lastUpdated && a.status.lastUpdated > c.lastUpdated) return;
                        a.status.lastUpdated = c.lastUpdated
                    }
                    void 0 !== c.totalCouponCount && null !== c.totalCouponCount && (a.status.totalCouponsCount = parseInt(c.totalCouponCount, 10));
                    void 0 !== c.customerState && null !== c.customerState && (a.status.state = Deal.customerStates[c.customerState]);
                    void 0 !== c.itemState && null !== c.itemState && (a.status.itemState = c.itemState, Deal.itemStateToPurchaseStateMap[a.status.itemState] == Deal.dealStateEnum.SoldOut &&
                        (a.status.percentSoldOut = 100));
                    void 0 !== c.msCacheTtl && null !== c.msCacheTtl && (a.status.msToCacheExpires = parseInt(c.msCacheTtl, 10));
                    void 0 !== c.msToCustomerStateExpiry && null !== c.msToCustomerStateExpiry && (a.status.msToExpiry = parseInt(c.msToCustomerStateExpiry, 10));
                    void 0 !== c.percentClaimed && null !== c.percentClaimed && (a.status.percentClaimed = parseInt(c.percentClaimed, 10));
                    void 0 !== c.waitlistChance && null !== c.waitlistChance && (a.waitListStatus.chance = c.waitlistChance);
                    void 0 !== c.waitlistPosition && null !== c.waitlistPosition &&
                        (a.waitListStatus.position = parseInt(c.waitlistPosition, 10));
                    a.isCustomerClaimed = Deal.customerStates[c.customerState] === Deal.claimedStr ? !0 : !1
                }
            },
            initStatus: function(a, c) {
                a.status.cacheExpiresDate = new Date(c.getTime() + parseInt(a.status.msToCacheExpires, 10));
                a.status.expired = !1;
                a.status.startDate = new Date(c.getTime() + parseInt(a.status.msToStart, 10));
                a.status.started = 0 >= a.status.msToStart;
                a.status.endDate = new Date(c.getTime() + parseInt(a.status.msToEnd, 10));
                a.status.ended = 0 >= a.status.msToEnd;
                a.claimed &&
                    (a.claimed = "1" == a.claimed);
                a.timeouts.startTimeout && (h.clearTimeout(a.timeouts.startTimeout), Deal.log("DealContentServiceTranslationHelper._init_status: Clearing out deal.timeouts.startTimeout for deal: " + a.dealID));
                a.status.started || (a.timeouts.startTimeout = h.setTimeout(function() {
                    if (a.dealType === Deal.dealTypes.LD && Deal.hasPricingDetails(a)) a.status.started = !0, a.status.msToStart = 0, a.status.dealState = Deal.itemStates.Available, a.dealState = Deal.stateToTemplateMap[Deal.dealStates.AVAILABLE], _.each(a.dealAsinsHash,
                        function(a, c, e) {
                            a.status.itemState = Deal.itemStates.Available
                        }), a.trigger("change", a);
                    else {
                        var c = a.dealID;
                        Deal.controller.dealServiceClients.DealContentService.dealsWithDetails[c] = !1;
                        a.trigger("change", Deal.controller.getDeal("DummyDealID"));
                        Deal.controller.dealServiceClients.DealContentService.addToGetDealsCache(c);
                        Deal.log("Triggering change signal on deal: " + a.dealID + " from deal.timeouts.startTimeout Trigger.")
                    }
                }, a.status.startDate.getTime() - (new Date).getTime()), Deal.log("DealContentServiceTranslationHelper._init_status: Setting deal.timeouts.startTimeout for deal: " +
                    a.dealID));
                a.timeouts.endTimeout && (h.clearTimeout(a.timeouts.endTimeout), Deal.log("DealContentServiceTranslationHelper._init_status: Clearing out deal.timeouts.endTimeout for deal: " + a.dealID));
                a.status.ended || (c = a.status.endDate.getTime() - (new Date).getTime(), a.timeouts.endTimeoutDelayed && h.clearTimeout(a.timeouts.endTimeoutDelayed), a.timeouts.endTimeoutDelayed = Deal.setSafeTimeout(function() {
                    a.timeouts.endTimeout = h.setTimeout(function() {
                        a.status.ended = !0;
                        a.trigger("change", a);
                        Deal.log("Triggering change signal on deal: " +
                            a.dealID + " from deal.timeouts.endTimeout Trigger.")
                    }, a.status.endDate.getTime() - (new Date).getTime())
                }, c), Deal.log("DealContentServiceTranslationHelper._init_status: Setting deal.timeouts.endTimeOut for deal: " + a.dealID));
                a.timeouts.earlyAccessTimeOut && h.clearTimeout(a.timeouts.earlyAccessTimeOut);
                Deal.isDealInEarlyAccessWindow(a) && (a.timeouts.earlyAccessTimeOut = h.setTimeout(function() {
                        a.status.msToStart = -a.detail.accessDurationInMs;
                        a.trigger("change", a)
                    }, a.status.startDate.getTime() + a.detail.accessDurationInMs -
                    (new Date).getTime()));
                a.timeouts.statusExpireTimeout && (h.clearTimeout(a.timeouts.statusExpireTimeout), Deal.log("DealContentServiceTranslationHelper._init_status: Clearing out deal.timeouts.statusExpireTimeout for deal: " + a.dealID));
                c = a.status.cacheExpiresDate.getTime() - (new Date).getTime();
                Deal.checkIfDealExpired(a) && (new Deal.PurchaseStatusGatherer(a)).hasTimeSensitiveState() && (c = 12E3);
                a.timeouts.statusExpireTimeout = h.setTimeout(function() {
                    if (a.dealType !== Deal.dealTypes.LD || a.status.started || Deal.hasPricingDetails(a)) a.status.expired = !0, a.trigger("status_expire", a), Deal.log("Triggering status_expire signal on deal: " + a.dealID + " from deal.timeouts.statusExpireTimeout Trigger.");
                    else {
                        var c = Deal.controller.dealServiceClients.DealContentService;
                        c.dealsWithDetails[a.dealID] = !1;
                        c.addToGetDealsCache(a.dealID)
                    }
                }, c);
                Deal.log("DealContentServiceTranslationHelper._init_status: Setting deal.timeouts.statusExpireTimeout for deal: " + a.dealID + " for timeout: " + (a.status.cacheExpiresDate.getTime() - (new Date).getTime()));
                Deal.log("DealContentServiceTranslationHelper.initStatus completed.")
            },
            initAsinStatus: function(a) {
                if (void 0 === a || null === a) Deal.log("Cannot operate on undefined/null deal object.");
                else if (void 0 === a.dealType || null === a.dealType) Deal.log("Cannot operate on undefined/null dealType.");
                else if (a.dealType !== Deal.dealTypes.LD) Deal.log("Returning initAsinStatus as NO-OP for non-LD's.");
                else if (a.dealAsinsHash) {
                    a.timeouts.pstatusExpiresSoon || (a.timeouts.pstatusExpiresSoon = {});
                    a.timeouts.pstatusExpire || (a.timeouts.pstatusExpire = {});
                    _.each(a.dealAsins, function(a) {
                        Deal.dealStates[a.status.itemState] ===
                            Deal.waitlistFullStr && (a.status.currentlyUnavailable = !0)
                    });
                    for (var c = Deal.filterAsinsHashByState(a.dealAsinsHash, [Deal.inCartStr, Deal.expiredStr, Deal.waitInLineStr, Deal.pendingAtcStr]), b = new Date, d = 0; d < c.length; d++) {
                        var k = c[d];
                        a.purchaseStatusWarningThreshold && (k.status.expiresDate = new Date(b.getTime() + parseInt(k.status.msToExpiry, 10)))
                    }
                    c.sort(Deal.sortByDealAsinDAOTimes);
                    a.asinExpiresSoonStack = [];
                    a.asinExpiredStack = [];
                    for (d = 0; d < c.length; d++) {
                        k = c[d];
                        a.timeouts.pstatusExpiresSoon[k.ASIN] && (h.clearTimeout(a.timeouts.pstatusExpiresSoon[k.ASIN]),
                            Deal.log("DealContentServiceTranslationHelper.initAsinStatus: Clearing deal.timeouts.pstatusExpiresSoon for  ASIN: " + k.ASIN));
                        var n = k.status.expiresDate.getTime() - (new Date).getTime(),
                            b = n - a.purchaseStatusWarningThreshold;
                        0 > b && (b = 0);
                        var v = "" + k.ASIN;
                        0 < n && k.status.state != Deal.waitInLineStr && k.status.state != Deal.pendingAtcStr && (a.asinExpiresSoonStack.push(v), a.timeouts.pstatusExpiresSoon[v] = h.setTimeout(function() {
                            var c = a.asinExpiresSoonStack.shift();
                            Deal.log("DealContentServiceTranslationHelper.initAsinStatus: TimeOut completed for pstatusExpiresSoon: originalStaticAsin: " +
                                v + " tmpAsin: " + c)
                        }, b), Deal.log("DealContentServiceTranslationHelper.initAsinStatus: Timeout set for pstatusExpiresSoon for ASIN : " + v + " for endsSoonTimeout: " + b));
                        a.timeouts.pstatusExpire[k.ASIN] && (h.clearTimeout(a.timeouts.pstatusExpire[k.ASIN]), Deal.log("DealContentServiceTranslationHelper.initAsinStatus: Clearing pstatusExpire for ASIN: " + k.ASIN));
                        a.asinExpiredStack.push(v);
                        0 < n && (a.timeouts.pstatusExpire[k.ASIN] = h.setTimeout(function() {
                            var c = n,
                                b = a.asinExpiredStack.shift();
                            void 0 !== c && null !== c &&
                                0 < c ? a.trigger("pstatus_expire", a, b) : a.trigger("change", a);
                            Deal.log("DealContentServiceTranslationHelper.initAsinStatus: TimeOut completed for: pstatusExpire for ASIN: " + k.ASIN + " tmpAsin: " + b)
                        }, n));
                        Deal.log("DealContentServiceTranslationHelper.initAsinStatus: Timeout set for pstatusExpire for ASIN: " + k.ASIN + " pStatusTimeout: " + n)
                    }
                    Deal.log("DealContentServiceTranslationHelper.initAsinStatus completed.")
                } else Deal.log("No Asins, not initializing asinStatuses")
            },
            executePostTranslationRules: function(a) {
                if (void 0 !==
                    a && null !== a) {
                    if ("LOCAL_DEAL" === a.dealType && a.detail) {
                        var c = a.detail.URL;
                        if (c) {
                            var b = c.match(/:\/\/(.[^/]+)/)[1];
                            if (b && b.match(/^local\./)) {
                                var d = c.split(b),
                                    b = b.replace(/^local\./, "www."),
                                    c = d[0],
                                    d = d[1];
                                c && d && (a.detail.URL = c + b + "/local" + d)
                            }
                        }
                    }
                    if (h.Deal.isPaladin && 1 === h.Deal.isPaladin && (a.detail && (a.detail.URL = Deal.ConvertToPaladinUrl(a.detail.URL), a.detail.buyBoxURL = Deal.ConvertToPaladinUrl(a.detail.buyBoxURL)), a.dealAsinsHash))
                        for (var k in a.dealAsinsHash) b = a.dealAsinsHash[k], null !== b && void 0 !== b && (b.egressUrl =
                            Deal.ConvertToPaladinUrl(b.egressUrl), b.ingressUrl = Deal.ConvertToPaladinUrl(b.ingressUrl))
                }
            }
        })
    });
    l.when("A", "jQuery", "gb-udp-event-emitter").register("gb-deals-interface", function(a, b, d) {
        return d.extend({
            defaults: {
                versionInfo: null
            },
            baseURL: null,
            base_retry_interval: 6E4,
            continue_requests: !0,
            marketplace_id: "1",
            includeVariations: "True",
            customer_id: "",
            session_id: null,
            timeout: 3E5,
            translationHelper: null,
            filter: {},
            statuses: {},
            browseNodes: null,
            ordering: null,
            controllerReference: null,
            init: function() {
                this._super()
            },
            ajax_with_retries: function(a, c) {
                var d = this,
                    m = new Date,
                    k = 0,
                    n, v, p = a.retryInterval || this.base_retry_interval || 6E4;
                delete a.retryInterval;
                var l = a.error;
                delete a.error;
                a.retry && a.apiConfig && (n = a.retry, delete a.retry, v = a.apiConfig, delete a.apiConfig);
                var q = a.success;
                a.success = function(b, d, f) {
                    "function" === typeof f.getResponseHeader && f.getResponseHeader("X-CSRFToken") && gbResources && "function" === typeof gbResources.registerCustomerData && gbResources.registerCustomerData({
                        csrfToken: f.getResponseHeader("X-CSRFToken")
                    });
                    b && Deal.parseBool(b.retry) ? a.error() : (c && (c.isRetry = 0 < k, c.isSuccess = !0, c.latency = (new Date).getTime() - m.getTime(), Deal.recordAPIMetrics(c)), q(b))
                };
                var w = function() {
                    d.continue_requests ? (a.url = Deal.setURLParameter(a.url, "nocache", (new Date).getTime()), a.error = function(b) {
                        var q = !0;
                        c && (c.isRetry = 0 < k, c.isSuccess = !1, c.latency = (new Date).getTime() - m.getTime(), Deal.recordAPIMetrics(c));
                        a.url = Deal.setURLParameter(a.url, "retrying", 1);
                        if (v && n) {
                            var x = d.getRetryInterval(++k, v);
                            k > v.maxRetries && (l(Error("Retries timed out " +
                                a.url + JSON.stringify(b))), q = !1)
                        } else x = p * (1 + Math.pow(2, k++) * Math.random()), x + (new Date).getTime() - m.getTime() > d.timeout && (l(Error("Retries timed out " + a.url + JSON.stringify(b))), q = !1);
                        q && (Deal.log("Retrying after " + x + "ms"), "function" === typeof n && n(), h.setTimeout(w, x))
                    }, b.ajax(a)) : l(Error("continue_requests is false. No more requests should be made " + a.url))
                };
                w()
            },
            next_id: 100,
            getRetryInterval: function(a, c) {
                return Math.pow(2, a - 1) * (c.baseRetryInterval + Deal.getRandomNumber(-1E3, 1E3))
            }
        })
    });
    l.when("A", "gb-deals-interface",
        "gb-deal-content-service-translation-helper").register("gb-deal-redemption-service", function(a, b, d) {
        return b.extend({
            baseRetryIntervalMs: 1E4,
            translationHelper: null,
            clientId: "goldbox",
            apiConfig: {
                maxRetries: 1,
                baseRetryInterval: 4E3,
                endPoint: "/gp/deal/ajax/v2/claimDeal.html"
            },
            init: function(a) {
                this._super();
                this.translationHelper = new d
            },
            claimDeal: function(a, c, b, d, k, n, h) {
                var l = this.apiConfig.endPoint,
                    r;
                gbResources && "function" === typeof gbResources.getCustomerData && gbResources.getCustomerData("csrfToken") &&
                    (r = function(a) {
                        a.setRequestHeader("X-CSRFToken", gbResources.getCustomerData("csrfToken"))
                    });
                l += "/ref\x3d" + b + "?dealId\x3d" + a + "\x26itemId\x3d" + c + "\x26quantity\x3d" + d + "\x26clientId\x3d" + this.clientId;
                this.call(l, {}, k, n, this.baseRetryIntervalMs, {
                    apiName: Deal.apiName.CLAIM_DEAL,
                    clientId: this.clientId
                }, h, r)
            },
            call: function(a, c, b, d, k, n, h, l) {
                a = {
                    success: function(a) {
                        b(a)
                    },
                    error: d,
                    retry: h,
                    url: a,
                    type: "POST",
                    data: JSON.stringify(c),
                    dataType: "json"
                };
                l && (a.beforeSend = l);
                a.apiConfig = this.apiConfig;
                this.ajax_with_retries(a,
                    n)
            }
        })
    });
    l.when("A", "jQuery", "gb-udp-event-emitter").register("gb-mnss-service", function(a, b, d) {
        return d.extend({
            base_retry_interval: 2E4,
            continue_requests: !0,
            customer_id: "",
            session_id: null,
            timeout: 3E5,
            init: function(a) {
                this._super();
                this.customer_id = gbResources.getCustomerData("customerId");
                this.session_id = gbResources.getCustomerData("sessionId")
            },
            ajax_with_retries: function(a) {
                var c = this,
                    d = new Date,
                    m = 0,
                    k = a.retryInterval || this.base_retry_interval || 6E4;
                delete a.retryInterval;
                var n = a.error;
                delete a.error;
                var l = function() {
                    c.continue_requests ? (-1 == a.url.indexOf("?") ? a.url = a.url + "?nocache\x3d" + (new Date).getTime() : a.url = a.url + "\x26nocache\x3d" + (new Date).getTime(), a.error = function(a) {
                        var b = k * (1 + Math.pow(2, m++) * Math.random());
                        b + (new Date).getTime() - d.getTime() > c.timeout ? n(Error("Retries timed out" + JSON.stringify(a))) : (Deal.log("retrying after " + b + "ms"), h.setTimeout(l, b))
                    }, b.ajax(a)) : n(Error("continue_requests is false: no more requests should be made."))
                };
                l()
            },
            call: function(a, c, b, d, k) {
                a = {
                    success: b,
                    error: d,
                    url: a,
                    type: "POST",
                    data: JSON.stringify(c),
                    dataType: "json"
                };
                void 0 !== k && (a.retryInterval = k);
                this.ajax_with_retries(a)
            },
            register_for_notifications: function(a, c, b) {
                this.call("/gp/deal/ajax/registerForNotifications.html/ref\x3dgb_mshop?customer\x3d" + this.customer_id + "\x26sessionId\x3d" + this.session_id + "\x26token\x3d" + a.pushToken + "\x26application\x3d" + a.appID + "\x26protocol\x3d" + a.protocol, {}, c, b, this.base_retry_interval)
            }
        })
    });
    l.when("A", "jQuery", "gb-deals-interface", "gb-deal-content-service-translation-helper").register("gb-deal-content-service",
        function(a, b, d, e) {
            return d.extend({
                base_retry_interval: 6E4,
                client_id: "goldbox",
                continue_requests: !0,
                customer_id: null,
                dealsPerPage: null,
                marketplace_id: null,
                page: 1,
                session_id: null,
                timeout: 3E5,
                translationHelper: null,
                getDealsMaxJitter: Deal.constants.GET_DEALS_MAX_JITTER,
                shouldPublishGDSCompletion: !0,
                widgetMetadataCache: {},
                selectDealsRequestArgs: {},
                uniqueSelectDealsRequestArgs: [],
                onGoingSelectDealsRequest: {},
                widgetIdToArgs: {},
                firstGetDeals: {},
                dealsWithDetails: {},
                dealStateFilter: {
                    available: ["AVAILABLE"],
                    missed: ["EXPIRED", "SOLDOUT"],
                    expired: ["EXPIRED"],
                    upcoming: ["UPCOMING"],
                    soldout: ["SOLDOUT"]
                },
                getDealsCache: [],
                init: function(a) {
                    this._super();
                    this.customer_id = gbResources.getCustomerData("customerId");
                    this.marketplace_id = gbResources.getCustomerData("marketplaceId");
                    this.session_id = gbResources.getCustomerData("sessionId");
                    a && a.client_id && (this.client_id = a.client_id);
                    this.translationHelper = new e
                },
                addToGetDealsCache: function(a) {
                    var b = this;
                    null === a || void 0 === a ? Deal.log("addToGetDealsCache called with null/undefined dealID") :
                        _.contains(b.getDealsCache, a) || (b.getDealsCache.push(a), 1 === b.getDealsCache.length && h.setTimeout(function() {
                            var a = [];
                            _.each(b.getDealsCache, function(c) {
                                b.dealsWithDetails[c] || a.push(c)
                            });
                            b.getDealsCache = [];
                            a.length && b.get_Deals(a, Deal.controller, !1)
                        }, Math.floor(Math.random() * b.getDealsMaxJitter * 1E3) + 500))
                },
                getMetadataCacheWidgets: function() {
                    return _.map(_.keys(this.widgetMetadataCache), function(a) {
                        return parseInt(a, 10)
                    }).sort()
                },
                processWidgetMetadataCache: function(a) {
                    for (var b = this.getMetadataCacheWidgets(),
                            d = 0; d < b.length; d++) {
                        var e = b[d];
                        this.isReadyToLoadMetadata(e, a) && this.processWidgetMetadataCacheEntry(e, a)
                    }
                },
                processWidgetMetadataCacheEntry: function(a, b) {
                    b.trigger("process_selectdeals_metadata" + a, a, this.widgetMetadataCache[a]);
                    delete this.widgetMetadataCache[a]
                },
                isReadyToLoadMetadata: function(a, b) {
                    if (b.disableDeduping[a]) return !0;
                    b = b.getWidgetsToLoadMetadata(a);
                    b.push(a);
                    for (a = 0; a < b.length; a++)
                        if (!(b[a] in this.widgetMetadataCache)) return !1;
                    return !0
                },
                call: function(a, b, d, e, n, h) {
                    a = {
                        success: function(a) {
                            d(a)
                        },
                        error: e,
                        url: a,
                        type: "POST",
                        data: JSON.stringify(b),
                        dataType: "json"
                    };
                    void 0 !== n && (a.retryInterval = n);
                    this.ajax_with_retries(a, h)
                },
                getDeals: function(a, d, e, k, n, h, l, r) {
                    if (void 0 === a || null === a) Deal.log("Need a proper controller reference to getDeals.");
                    else if (void 0 === d || null === d) Deal.log("Cannot getDeals for an undefined/null widgetID.");
                    else {
                        void 0 === this.firstGetDeals[d] && (this.firstGetDeals[d] = !0);
                        a.listOfDeals[d] = [];
                        var q = this;
                        a.on("startGetDealStatusesAdhoc", function(b) {
                            for (var d = [], e = 0; e < b.length; e++) {
                                var f =
                                    b[e];
                                q.dealsWithDetails[f] || (d.push(f), q.dealsWithDetails[f] = !0)
                            }
                            d.length && q.get_Deals(d, a)
                        });
                        var w = function(b) {
                                delete q.onGoingSelectDealsRequest[d];
                                Deal.log("Select Deals call returned.");
                                a.off("selectdeals_change" + d, w);
                                void 0 === b || null === b ? Deal.log("Cannot populateGetDeals data with undefined/null data.") : (a.on("process_selectdeals_metadata" + d, function(b, d) {
                                        Deal.log("Processing SelectDealsMetadataResponse for widgetID " + b);
                                        if (void 0 === b || null === b) Deal.log("Cannont processSelectDealsMetadataResponse for null/undefined widgetID");
                                        else if (void 0 === d || null === d) Deal.log("Cannont processSelectDealsMetadataResponse for null/undefined metadataCacheEntry");
                                        else {
                                            var e = d.callingParams;
                                            q.translationHelper.populateFromSelectDealsMetadata(b, d.responseData);
                                            a.hasMetadata[b] = !0;
                                            a.trigger("metadata_change" + b);
                                            a.setOrdering(b, e.ordering);
                                            a.setFilter(b, e.filter);
                                            a.setCells(b, e.cells);
                                            a.trigger("startGetDealsConnectionWiring" + b);
                                            a.setPage(b, e.page)
                                        }
                                    }), q.widgetMetadataCache[d] = {
                                        responseData: b,
                                        callingParams: {
                                            ordering: n,
                                            filter: h,
                                            cells: k,
                                            page: l
                                        }
                                    },
                                    q.processWidgetMetadataCache(a))
                            },
                            A = function() {
                                var b = [],
                                    e = Deal.getPaginationCellPositions(l, k, a.dealIDs[d].length, a.disablePagination[d]);
                                a.listOfDeals[d] = [];
                                for (var m = 0; m < e.length; m++) {
                                    var n = e[m],
                                        h = a.dealIDs[d][n],
                                        g = a.getDeal(h);
                                    null !== g && (b.push(h), Deal.connectionManager.connectDealExpire(a, d, g), n < k * l && n >= k * (l - 1) && a.listOfDeals[d].push(g))
                                }
                                a.trigger("startGetDealStatusesAdhoc", b);
                                a.off("startGetDealsConnectionWiring" + d);
                                a.trigger("startCellChangeAndStatusConnectionWiring" + d, a.listOfDeals[d])
                            },
                            t =
                            a.getWidgetParams(d);
                        void 0 !== r && null !== r && b.extend(!0, t, r);
                        void 0 === this.selectDealsRequestArgs[d] && (this.selectDealsRequestArgs[d] = t);
                        r = this.requestArgsExist(t);
                        r || (this.selectDealsRequestArgs[d] = t, this.uniqueSelectDealsRequestArgs.push(t));
                        !1 !== this.firstGetDeals[d] || r || (this.firstGetDeals[d] = !0);
                        if (!0 === this.firstGetDeals[d])
                            if (this.firstGetDeals[d] = !1, r && this.onGoingSelectDealsRequestForArgs(t) && void 0 === this.onGoingSelectDealsRequest[d]) {
                                if (this.onGoingSelectDealsRequest[d] = !0, e = function(b) {
                                        delete q.onGoingSelectDealsRequest[d];
                                        a.trigger("selectdeals_change" + d, b)
                                    }, t = this.currentWidgetIdForArgs(t), void 0 !== t || null !== t) a.on("selectdeals_change" + d, w), a.on("startGetDealsConnectionWiring" + d, A), a.on("selectdeals_change" + t, e)
                            } else a.on("selectdeals_change" + d, w), a.on("startGetDealsConnectionWiring" + d, A), this.onGoingSelectDealsRequest[d] = !0, this.recordArgs(d, t), this.select_deals(d, k, t, a);
                        else a.metadata.checkIfStatusFilterSeen(d, e) && void 0 === this.onGoingSelectDealsRequest[d] && (a.on("startGetDealsConnectionWiring" + d, A), a.trigger("startGetDealsConnectionWiring" +
                            d))
                    }
                },
                get_deal_statuses: function(a, b) {
                    var d = this,
                        e = d.get_getDealStatuses_request_data(a);
                    d.call("/xa/dealcontent/v2/GetDealStatus", e, function(e) {
                        var k = {},
                            h, l;
                        for (h in e.dealStatus) l = e.dealStatus[h], a[h][0](l), k[h] = !0;
                        var q = d._deal_ids_to_item_ids_from_callbacks(a);
                        for (l = 0; l < q.length; l++)
                            if (h = q[l].dealID, !k[h]) a[h][1](Error("No status returned for dealID " + h));
                        d.translationHelper.populateFromGetDealStatuses(e.dealStatus, b);
                        d.publishGDSCompletion()
                    }, function(b) {
                        var e, f, k = d._deal_ids_to_item_ids_from_callbacks(a);
                        for (e = 0; e < k.length; e++) f = k[e].dealID, a[f][1](b);
                        d.publishGDSCompletion()
                    }, null, {
                        apiName: Deal.apiName.GET_DEAL_STATUS,
                        clientId: d.client_id
                    })
                },
                publishGDSCompletion: function() {
                    this.shouldPublishGDSCompletion && (l.register("gb-getdealstatus-available"), this.shouldPublishGDSCompletion = !1)
                },
                get_Deals: function(a, b, d) {
                    var e = this;
                    d = e.getDeals_request_Data(a, d);
                    e.call("/xa/dealcontent/v2/GetDeals", d, function(a) {
                        for (var c in a.dealDetails) {
                            var d = b.getDeal(c);
                            e.translationHelper.populateFromGetDeals(d, a.dealDetails[c])
                        }
                        e.translationHelper.populateFromGetDealStatuses(a.dealStatus,
                            b)
                    }, function(b) {
                        for (b = 0; b < a.length; b++) e.dealsWithDetails[a[b]] = !1
                    }, null, {
                        apiName: Deal.apiName.GET_DEALS,
                        clientId: e.client_id
                    })
                },
                get_getDealStatuses_request_data: function(a) {
                    a = this._deal_ids_to_item_ids_from_callbacks(a);
                    a = {
                        requestMetadata: {
                            marketplaceID: this.marketplace_id,
                            clientID: this.client_id,
                            sessionID: this.session_id
                        },
                        dealTargets: a,
                        responseSize: "STATUS_ONLY",
                        itemResponseSize: "NONE"
                    };
                    null !== this.customer_id && "" !== this.customer_id && (a.requestMetadata.customerID = this.customer_id);
                    return a
                },
                getDeals_request_Data: function(a,
                    b) {
                    var d = a.sort();
                    a = [];
                    for (var e = 0; e < d.length; e++) a.push({
                        dealID: d[e]
                    });
                    a = {
                        requestMetadata: {
                            marketplaceID: this.marketplace_id,
                            clientID: this.client_id,
                            sessionID: this.session_id
                        },
                        dealTargets: a,
                        responseSize: "ALL",
                        itemResponseSize: "DEFAULT_WITH_PREEMPTIVE_LEAKING"
                    };
                    b || null === this.customer_id || "" === this.customer_id || (a.requestMetadata.customerID = this.customer_id);
                    return a
                },
                requestArgsExist: function(a) {
                    if (void 0 === a || null === a) return Deal.log("Cannot check if request args exist for undefined/null args."), !1;
                    if (0 === this.uniqueSelectDealsRequestArgs.length) return !1;
                    for (var b, d = 0; d < this.uniqueSelectDealsRequestArgs.length; d++)
                        if (b = this.uniqueSelectDealsRequestArgs[d], Deal.objectsIdentical(b, a)) return !0;
                    return !1
                },
                onGoingSelectDealsRequestForArgs: function(a) {
                    if (void 0 === a || null === a) return Deal.log("Cannot check if onGoingSelectDealsRequestForArgs exist for undefined/null args."), !1;
                    a = this.currentWidgetIdForArgs(a);
                    return this.onGoingSelectDealsRequest[a] ? !0 : !1
                },
                currentWidgetIdForArgs: function(a) {
                    if (void 0 ===
                        a || null === a) return Deal.log("Cannot check if request args exist for undefined/null args."), null;
                    for (var b in this.widgetIdToArgs)
                        for (var d = 0; d < this.widgetIdToArgs[b].length; d++)
                            if (Deal.objectsIdentical(a, this.widgetIdToArgs[b][d])) return b;
                    return null
                },
                recordArgs: function(a, b) {
                    void 0 === a || null === a ? Deal.log("Cannot recordArgs for undefined/null widgetID.") : void 0 === b || null === b ? Deal.log("Cannot recordArgs for undefined/null args.") : (void 0 === this.widgetIdToArgs[a] && (this.widgetIdToArgs[a] = []), this.widgetIdToArgs[a].push(b))
                },
                _deal_ids_to_item_ids_from_callbacks: function(a) {
                    a = _.keys(a).sort();
                    for (var b = [], d = 0; d < a.length; d++) b.push({
                        dealID: a[d],
                        itemIDs: null
                    });
                    return b
                },
                get_deal_status: function(a, b, d, e) {
                    return this._add_request("get_deal_status", a, b, d, e)
                },
                next_id: 100,
                _pending: {
                    select_deals: {
                        current: !1,
                        timeout: void 0,
                        deal_ids: {}
                    },
                    get_deal_status: {
                        current: !1,
                        timeout: void 0,
                        deal_ids: {}
                    }
                },
                _add_request: function(a, b, d, e, h) {
                    var l = this._pending[a];
                    void 0 === l.deal_ids[b] && (l.deal_ids[b] = {});
                    var p = l.deal_ids[b],
                        r = this.next_id++;
                    b = {
                        cancel: function() {
                            delete p[r];
                            this.cancel = function() {
                                throw Error("already cancelled");
                            }
                        },
                        success: d,
                        error: e
                    };
                    p[r] = b;
                    this._start_request_timer(a, h);
                    return b
                },
                _start_request_timer: function(a, b) {
                    var d = this,
                        e = d._pending[a];
                    e.current || (e.timeout && h.clearTimeout(e.timeout), e.timeout = h.setTimeout(function() {
                        e.timeout = void 0;
                        d._start_request(a, b)
                    }, 0))
                },
                _start_request: function(a, b) {
                    var d = this,
                        e = d._pending[a];
                    e.timeout && (h.clearTimeout(e.timeout), e.timeout = void 0);
                    if (!e.current) {
                        var n = [],
                            l = {},
                            p;
                        for (p in e.deal_ids) {
                            if (10 <=
                                n.length) break;
                            var r = !1,
                                q;
                            for (q in e.deal_ids[p]) {
                                r = !0;
                                break
                            }
                            if (!r) {
                                delete e.deal_ids[p];
                                break
                            }
                            e.deal_ids[p].current || (e.deal_ids[p].current = !0, n.push(p), function(e) {
                                l[e] = [function(k) {
                                    d._request_success(a, e, k, b)
                                }, function(k) {
                                    d._request_error(a, e, k, b)
                                }]
                            }(p))
                        }
                        0 !== n.length && "get_deal_status" == a && d.get_deal_statuses(l, b)
                    }
                },
                _request_success: function(a, b, d, e) {
                    var h = this._pending[a];
                    h.current = !1;
                    var l = h.deal_ids[b];
                    if (void 0 !== l) {
                        delete h.deal_ids[b];
                        delete l.current;
                        for (var p in l) l[p].success(d)
                    }
                    this._start_request_timer(a,
                        e)
                },
                _request_error: function(a, b, d, e) {
                    var h = this._pending[a];
                    h.current = !1;
                    var l = h.deal_ids[b];
                    if (void 0 !== l) {
                        delete h.deal_ids[b];
                        delete l.current;
                        for (var p in l) l[p].error(d)
                    }
                    this._start_request_timer(a, e)
                },
                get_deal_asin_status2: function() {
                    return {
                        cancel: function() {}
                    }
                },
                get_deal: function() {
                    return {
                        cancel: function() {}
                    }
                }
            })
        });
    l.when("A", "gb-udp-event-emitter").register("gb-deal-config-manager", function(a, b) {
        return b.extend({
            init: function(a) {
                this._super();
                if (!a) throw Error("Cannot initialize configManager with empty params.");
                a.dealContentServiceConfig && (this.dealContentServiceConfig = a.dealContentServiceConfig);
                a.controllerConfig && (this.controllerConfig = a.controllerConfig)
            },
            getWidgetConfig: function(a) {
                return this[a]
            },
            getControllerConfig: function() {
                return this.controllerConfig
            },
            getABTestingConfig: function() {
                return this.abTestingConfig
            },
            getDealContentServiceConfig: function() {
                return this.dealContentServiceConfig
            },
            getDealViewTemplate: function(a, b) {
                var c = "";
                return a && b ? Deal.configManager[a] && Deal.configManager[a].dealViewConfig &&
                    Deal.configManager[a].dealViewConfig.templates && Deal.configManager[a].dealViewConfig.templates[b] ? c = Deal.configManager[a].dealViewConfig.templates[b] : (Deal.log("No entry exists for specified widgetName/templateName"), c) : (Deal.log("No widget or template name specified."), c)
            },
            getWidgetViewTemplate: function(a, b) {
                var c = "";
                return a && b ? Deal.configManager[a] && Deal.configManager[a].templates && Deal.configManager[a].templates[b] ? c = Deal.configManager[a].templates[b] : c : (Deal.log("No widget or template name specified."),
                    c)
            }
        })
    });
    h.Deal || (h.Deal = {});
    Deal.connectionManager = {
        connections: {},
        dealObjectToCallBacks: [],
        nextSignalID: 100,
        signals: {
            cell_change: {},
            pstatus_expire: {},
            page_change: {},
            metadata_change: {}
        },
        registerWidgetConnections: function(a) {
            _.each(this.signals, function(b) {
                b[a] = {}
            });
            void 0 === this.connections[a] && (this.connections[a] = [])
        },
        connectDealExpire: function(a, b, d) {
            if (!Deal.watcher.doesCallBackExist(d.dealID, "expire")) {
                var e = function(c) {
                    var d = a.dealServiceInstance[b].get_deal(c.dealID, function(d) {
                        c.off("cancelGetDealRequest");
                        a.dealServiceInstance[b].translationHelper.populateFromGetDeals(c, d)
                    }, function(a) {
                        Deal.log("Error getting deal: " + a + " stack: " + a.stack)
                    });
                    c.on("cancelGetDealRequest", function() {
                        d.cancel();
                        c.off("cancelGetDealRequest")
                    })
                };
                d.on("expire", e);
                this.dealObjectToCallBacks.push({
                    signalName: "expire",
                    scope: d,
                    callBackValue: e
                });
                Deal.watcher.addCallBack(d.dealID, "expire")
            }(d.expired || d.loading) && d.trigger("expire", d)
        },
        connectDealChange: function(a, b, d, e) {
            var c = function(c) {
                a.trigger("cell_change" + b, {
                    cell: d,
                    deal: c
                })
            };
            e.on("change", c);
            this.connections[b].push({
                signalName: "change",
                scope: e,
                callBackValue: c
            })
        },
        connectPstatusExpire: function(a, b, d, e) {
            var c = function(c, e) {
                if (void 0 !== c.dealAsinsHash && null !== c.dealAsinsHash && 1 >= _.keys(c.dealAsinsHash).length) {
                    var k = Deal.findBackBoneDealAsin(c);
                    void 0 !== k && null !== k && void 0 !== k.status && null !== k.status && void 0 !== k.status.state && null !== k.status.state && (c.lastPstatusExpireState = k.status.state, !Deal.checkIfDealExpired(c) || k.status.state !== Deal.inCartStr && k.status.state !== Deal.pendingAtcStr ||
                        (k.status.state = "Expired", c.trigger("change", c)));
                    c.checkingDealStatusTimeout = h.setTimeout(function() {
                        c.lastPstatusExpireState = "";
                        delete c.checkingDealStatusTimeout
                    }, 4E4)
                }
                c.trigger("status_expire", c);
                a.trigger("pstatus_expire" + b, {
                    cell: d,
                    deal: c,
                    expiring_asin: e
                })
            };
            e.on("pstatus_expire", c);
            this.connections[b].push({
                signalName: "pstatus_expire",
                scope: e,
                callBackValue: c
            })
        },
        connectDealStatusExpire: function(a, b, d) {
            if (!Deal.watcher.isDealBeingWatched(d.dealID, b)) {
                var e = function(c) {
                    var d = a.dealServiceInstance[b].get_deal_status(c.dealID,
                        function(d) {
                            c.off("cancelGetDealStatusRequest");
                            a.dealServiceInstance[b].translationHelper.populateFromGetDealStatus(c, d)
                        },
                        function(a) {
                            Deal.log("Error getting status: " + a + " stack: " + a.stack)
                        }, a);
                    c.on("cancelGetDealStatusRequest", function() {
                        d.cancel();
                        c.off("cancelGetDealStatusRequest")
                    });
                    var e = a.dealServiceInstance[b].get_deal_asin_status2(c.dealID, function(d) {
                            c.off("cancelGetDealAsinStatusRequest");
                            a.dealServiceInstance[b].translationHelper.populateFromGetDealAsinStatus(c, d);
                            c.trigger("change", c)
                        },
                        function(a) {
                            Deal.log("Error with GetDealAsinStatus(" + c.dealID + "): " + a)
                        });
                    c.on("cancelGetDealAsinStatusRequest", function() {
                        e.cancel();
                        c.off("cancelGetDealAsinStatusRequest")
                    })
                };
                d.on("status_expire", e);
                this.dealObjectToCallBacks.push({
                    signalName: "status_expire",
                    scope: d,
                    callBackValue: e
                })
            }!d.status.expired || d.expired || d.loading || d.trigger("status_expire", d)
        },
        connectSignal: function(a, b, d, e, c) {
            if (void 0 === a || null === a || void 0 === b || null === b || void 0 === d || null === d || void 0 === e || null === e || void 0 === c || null ===
                c) throw Error("Please provide a valid scope, signalName, widgetID, functionName");
            if (void 0 === this.signals[b]) throw Error("Please provide a valid scope, signalName, widgetID, functionName");
            if (void 0 === this.signals[b][d]) throw Error("Please provide a valid scope, signalName, widgetID, functionName");
            var f = this.nextSignalID,
                h;
            void 0 !== c && (h = c[e], c.on(b + d, h), e = function(a) {
                c.trigger(b + d, a)
            });
            a.on(b + d, e);
            this.signals[b][d][f] = {
                callBackValue: e,
                scope: c,
                scopeCallBackValue: h
            };
            this.nextSignalID++;
            return {
                widgetID: d,
                id: f
            }
        },
        disconnectCurrentPageSignals: function(a, b) {
            _.each(a.dealsInCurrentView[b], function(a) {
                Deal.watcher.unwatchDeal(a.dealID, b)
            });
            _.each(a.dealsInNextView[b], function(a) {
                Deal.watcher.unwatchDeal(a.dealID, b)
            });
            a.dealsInCurrentView[b] = [];
            a.dealsInNextView[b] = [];
            for (a = 0; a < this.dealObjectToCallBacks.length; a++) {
                var d = this.dealObjectToCallBacks[a];
                if (void 0 !== d && null !== d && d.scope && d.signalName && d.scope.dealID) {
                    var e = d.scope;
                    Deal.watcher.isDealBeingWatched(e.dealID) || ("expire" === d.signalName && Deal.watcher.doesCallBackExist(e.dealID,
                        "expire") && (e.trigger("cancelGetDealRequest"), Deal.watcher.removeCallBack(e.dealID, "expire")), "status_expire" === d.signalName && (e.trigger("cancelGetDealStatusRequest"), e.trigger("cancelGetDealAsinStatusRequest")), e.off(d.signalName, d.callBackValue), this.dealObjectToCallBacks.splice(_.indexOf(this.dealObjectToCallBacks, d), 1), --a)
                }
            }
            for (a = 0; a < this.connections[b].length; a++) d = this.connections[b][a], void 0 !== d && null !== d && d.scope && d.signalName && d.scope.dealID && ("change" === d.signalName || "pstatus_expire" ===
                d.signalName) && (d.scope.off(d.signalName, d.callBackValue), this.connections[b].splice(_.indexOf(this.connections[b], d), 1), --a)
        }
    };
    l.when("A", "gb-udp-deal-watcher", "gb-mnss-service", "gb-deal-content-service", "gb-deal-redemption-service", "gb-udp-deal-dao", "gb-udp-event-emitter").register("gb-udp-controller", function(a, b, d, e, c, f, m) {
        return m.extend({
            loginURI: null,
            deals: {},
            buying: {},
            connections: {},
            cells: {},
            cellToDeal: {},
            page: {},
            pages: {},
            widgetIdToWidgetNameMap: {},
            dealIDs: {},
            dealsInCurrentView: {},
            dealsInNextView: {},
            dealServiceClass: null,
            dealServiceInstance: null,
            dealRedemptionServiceClient: null,
            mnssInstance: null,
            dealServiceConfig: null,
            dealServiceVersion: null,
            buyboxWidgetID: 200,
            nextWidgetID: 200,
            varRedemptionCallback: {},
            canCustomerClaimPrimeOnlyDOTD: !0,
            isCustomerClaimingPrimeOnlyDOTD: !1,
            init: function(a) {
                this._super();
                if (void 0 !== a && 0 !== a.length) {
                    this.login_uri = a.login_uri;
                    this.dealServiceConfig = Deal.configManager.getDealContentServiceConfig();
                    this.dealServiceInstance = new e(this.dealServiceConfig);
                    this.dealRedemptionServiceClient =
                        new c;
                    this.mnssInstance = new d;
                    Deal.watcher = new b;
                    a = Deal.getParameterByName("updateCart");
                    var f = Deal.getParameterByName("cartQuantity");
                    "1" == a && this._updateNavCartQty(f)
                } else Deal.log("Error: Cannot instantiate UDPDealController with no Model/Config data")
            },
            registerWidget: function(a) {
                if (void 0 === a || !a) return Deal.log("Cannot register undefined/null widgetID"), null;
                var b = this.nextWidgetID;
                this.widgetIdToWidgetNameMap[b] = a;
                Deal.connectionManager.registerWidgetConnections(b);
                void 0 === this.cellToDeal[b] &&
                    (this.cellToDeal[b] = {});
                this.dealServiceInstance[b] = this.dealServiceInstance;
                void 0 === this.dealIDs[b] && (this.dealIDs[b] = []);
                void 0 === this.dealsInCurrentView[b] && (this.dealsInCurrentView[b] = []);
                void 0 === this.dealsInNextView[b] && (this.dealsInNextView[b] = []);
                void 0 === this.varRedemptionCallback[b] && (this.varRedemptionCallback[b] = null);
                this.page[b] = 1;
                this.nextWidgetID++;
                return b
            },
            getWidget: function(a) {
                for (var b in Deal.Widgets)
                    if (Deal.Widgets[b].widgetName === a) return Deal.Widgets[b];
                return null
            },
            getDeal: function(a) {
                return void 0 !==
                    this.deals ? (void 0 === this.deals[a] && (this.deals[a] = new f(a), Deal.log("UDPDealController.getDeal: Created a new DealDAO obj for dealID: " + a)), this.deals[a]) : null
            },
            setPageDealID: function(a, b) {
                Deal.log("UDPDealController.setPageDealID called");
                void 0 !== a && a ? void 0 !== b && b ? (Deal.connectionManager.disconnectCurrentPageSignals(this, a), b = this.getDeal(b), this.cellToDeal[a][0] = b, this.dealsInCurrentView[a].push(b), Deal.connectionManager.connectDealChange(this, a, 0, b), Deal.connectionManager.connectPstatusExpire(this,
                    a, 0, b), Deal.connectionManager.connectDealStatusExpire(this, a, b), this.trigger("cell_change" + a, {
                    cell: 0,
                    deal: b
                }), Deal.watcher.watchDeal(b, a), b.trigger("status_expire", b)) : Deal.log("Cannot setPageDealID on undefined dealID") : Deal.log("Cannot setPageDealID on undefined widgetID")
            },
            redemptionCallback: function(a, b) {
                if (this.varRedemptionCallback[a]) this.varRedemptionCallback[a](b)
            },
            setRedemptionCallback: function(a, b) {
                this.varRedemptionCallback[a] = b
            },
            registerForNotifications: function(a) {
                this.mnssInstance.register_for_notifications(a,
                    function() {
                        Deal.log("Registered customer for notification")
                    },
                    function() {
                        Deal.log("Error registering customer for notification")
                    })
            },
            claimDeal: function(a, b, c, d, e) {
                var f = this,
                    m = f.cellToDeal[a][0];
                e || (e = 1);
                f.buying[m.dealID] || (f.buying[m.dealID] = !0, f.dealRedemptionServiceClient.claimDeal(b, c, d, e, function(b) {
                    Deal.isPrimeOnlyDotd(m) && (f.isCustomerClaimingPrimeOnlyDOTD = !0, b && b.errorCode === Deal.constants.NON_RETRYABLE_QUANTITY_RESTRICTION_VIOLATION_ERROR && (f.canCustomerClaimPrimeOnlyDOTD = !1, f._updateNavCartQty(b.currentCartQuantity)));
                    if (b && b.dealItemStatus) {
                        f.dealRedemptionServiceClient.translationHelper.translateClaimDealResponse(m, c, b);
                        var d = Deal.customerStates[b.dealItemStatus.customerState];
                        if (d === Deal.inCartStr || d === Deal.waitInLineStr) f.redemptionCallback(a, c), l.when("A").execute(function(a) {
                            a = a.$;
                            a("#gb_in_cart_co").trigger("redeemed", d)
                        });
                        f._updateNavCartQty(b.currentCartQuantity);
                        var e = m.legacyDeal;
                        e && m.legacyDealID && (e.legacyDealID = m.legacyDealID, f.registerDealWithNotifier(c, e))
                    }
                    delete f.buying[m.dealID];
                    var h = b.errorCode ===
                        Deal.constants.NON_RETRYABLE_QUANTITY_RESTRICTION_VIOLATION_ERROR;
                    l.when("gb-getdealstatus-available").execute(function() {
                        "undefined" === typeof b.retry || h ? m.trigger("change", m) : f.redemptionCallback(a, null)
                    })
                }, function(b) {
                    var c = function() {
                        f.redemptionCallback(a, null);
                        delete f.buying[m.dealID];
                        m.trigger("change", m)
                    };
                    l.when("A", "gb-getdealstatus-available").execute(function(a) {
                        var b = a.$;
                        0 < b(".deal_atc_progress").length && 0 < b("#deal_redemption_retry_failure_msg").length ? (b(".deal_atc_progress").addClass("a-hidden"),
                            b("#deal_redemption_retry_failure_msg").removeClass("a-hidden"), h.setTimeout(function() {
                                b(".deal_atc_progress").addClass("a-hidden");
                                b("#deal_processing_msg").removeClass("a-hidden");
                                c()
                            }, 3E3)) : c()
                    })
                }, function() {
                    l.when("A").execute(function(a) {
                        a = a.$;
                        0 < a(".deal_atc_progress").length && 0 < a("#deal_redemption_retry_msg").length && (a(".deal_atc_progress").addClass("a-hidden"), a("#deal_redemption_retry_msg").removeClass("a-hidden"))
                    })
                }))
            },
            _updateNavCartQty: function(a) {
                l.when("nav.setCartCount").execute(function(b) {
                    b(a)
                });
                l.when("mash").execute(function(b) {
                    b.cart.didUpdate({
                        newCartQuantity: parseInt(a, 10)
                    })
                })
            },
            registerDealWithNotifier: function(a, b) {
                h.dealNotifier && dealNotifier.registerDeal(a, b)
            }
        })
    });
    l.when("A", "gb-udp-event-emitter").register("gb-udp-deal-watcher", function(a, b) {
        return b.extend({
            activeDealsHash: {},
            callbackHash: {},
            asinImpressionsHash: {},
            hasRendered: {},
            hasImpressions: [],
            init: function() {
                this._super()
            },
            doesCallBackExist: function(a, b) {
                return void 0 === a || null === a || void 0 === b || null === b ? (Deal.log("DealWatcher.doesCallBackExist called with null/undefined dealID/signalName"), !1) : void 0 === this.callbackHash[a] ? !1 : _.contains(this.callbackHash[a], b)
            },
            addCallBack: function(a, b) {
                void 0 === a || null === a || void 0 === b || null === b ? Deal.log("DealWatcher.addCallBack called with null/undefined dealID/signalName") : (void 0 === this.callbackHash[a] && (this.callbackHash[a] = []), _.contains(this.callbackHash[a], b) || this.callbackHash[a].push(b))
            },
            removeCallBack: function(a, b) {
                void 0 === a || null === a || void 0 === b || null === b ? Deal.log("DealWatcher.removeCallBack called with null/undefined dealID/signalName") :
                    void 0 !== this.callbackHash[a] && _.contains(this.callbackHash[a], b) && (this.callbackHash[a].splice(_.indexOf(this.callbackHash[a], b), 1), 0 === this.callbackHash[a].length && delete this.callbackHash[a])
            },
            isDealBeingWatched: function(a, b) {
                return void 0 === a || null === a ? (Deal.log("DealWatcher.isDealBeingWatched called with null/undefined dealID"), !1) : void 0 === this.activeDealsHash[a] ? !1 : void 0 === b ? !0 : _.contains(this.activeDealsHash[a].widgetIDs, b)
            },
            watchDeal: function(a, b) {
                var c = a.dealID;
                void 0 === c || null === c || void 0 ===
                    b || null === b ? Deal.log("DealWatcher.watchDeal called with null/undefined dealID/widgetID") : (void 0 === this.activeDealsHash[c] && (this.activeDealsHash[c] = {
                        deal: a,
                        widgetIDs: []
                    }), _.contains(this.activeDealsHash[c].widgetIDs, b) || this.activeDealsHash[c].widgetIDs.push(b))
            },
            unwatchDeal: function(a, b) {
                void 0 === a || null === a || void 0 === b || null === b ? Deal.log("DealWatcher.unwatchDeal called with null/undefined dealID/widgetID") : void 0 !== this.activeDealsHash[a] && _.contains(this.activeDealsHash[a].widgetIDs, b) && (this.activeDealsHash[a].widgetIDs.splice(_.indexOf(this.activeDealsHash[a].widgetIDs,
                    b), 1), 0 === this.activeDealsHash[a].widgetIDs.length && delete this.activeDealsHash[a])
            }
        })
    });
    l.when("A", "gb-udp-deal-view", "gb-udp-deal-asin-dao", "gb-udp-event-emitter").register("gb-udp-deal-widget", function(a, b, d, e) {
        return e.extend({
            dealViews: {},
            widgetID: 0,
            widgetName: "",
            pushNotificationDetails: {},
            init: function(a) {
                this._super();
                void 0 !== a && null !== a && (this.widgetID = Deal.udpController.registerWidget(a), this.widgetName = a);
                this.registerSignals()
            },
            registerSignals: function() {
                Deal.connectionManager.connectSignal(Deal.udpController,
                    "page_change", this.widgetID, "pageChange", this);
                Deal.connectionManager.connectSignal(Deal.udpController, "cell_change", this.widgetID, "cellChange", this);
                Deal.connectionManager.connectSignal(Deal.udpController, "pstatus_expire", this.widgetID, "purchaseStatusExpire", this)
            },
            purchaseStatusExpire: function(a) {
                void 0 !== a && a || Deal.log("UDPDealWidget.cellChange: Null params.");
                if (void 0 !== a.deal && a.deal)
                    if (void 0 === a.cell || null === a.cell) Deal.log("UDPDealWidget.purchaseStatusExpire: Null/undefined cell");
                    else {
                        var b =
                            this.getViewId(a.cell);
                        void 0 !== this.dealViews[b] && this.dealViews[b].updatePurchaseState(a.deal)
                    }
                else Deal.log("UDPDealWidget.purchaseStatusExpire: Null deal object.")
            },
            getViewId: function(a) {
                return this.widgetID + "_udpDealView_" + a
            },
            cellChange: function(a) {
                if (void 0 !== a && a) {
                    var b;
                    void 0 !== a.deal && a.deal ? (Deal.log("UDPDealWidget.cellChange:  Cell: " + a.cell + " has new data change for deal: " + a.deal.dealID), b = "available") : (Deal.log("UDPDealWidget.cellChange: Null deal object Clearing the dealView."), b = "empty");
                    var d = this.getViewId(a.cell),
                        e = Deal.udpController && Deal.udpController.buying && a.deal.dealID && Deal.udpController.buying[a.deal.dealID];
                    void 0 === this.dealViews[d] || e || this.dealViews[d].trigger("change", {
                        state: b,
                        deal: a.deal
                    })
                } else Deal.log("UDPDealWidget.cellChange: Null params.")
            },
            pageChange: function(a) {
                if (void 0 !== a && a) {
                    var b;
                    void 0 !== a.deal && a.deal ? (Deal.log("UDPDealWidget.cellChange:  Cell: " + a.cell + " has new data change for deal: " + a.deal.dealID), b = "available") : (Deal.log("UDPDealWidget.cellChange: Null deal object Clearing the dealView."),
                        b = "empty");
                    var d = this.getViewId(a.cell);
                    void 0 !== this.dealViews[d] && (Deal.log("UDPDealWidget.pageChange:  Triggering change signal for dealView: " + d), this.dealViews[d].trigger("change", {
                        state: b,
                        deal: a.deal
                    }))
                } else Deal.log("UDPDealWidget.cellChange: Null params.")
            },
            setDealId: function(a) {
                var e = Deal.udpController.getDeal(a.dealId),
                    h = a.asin;
                e.detail.accessType = a.primeAccessType;
                e.detail.accessDurationInMs = a.primeAccessDurationInMs;
                if (null === e.dealType || void 0 === e.dealType) e.dealType = a.dealType;
                e.legacyDealID =
                    a.legacyDealId;
                if (h && e.dealAsinsHash && !e.dealAsinsHash[h]) {
                    var k = new d(h);
                    k.parentDealDAO = e;
                    e.dealAsins.push(k);
                    e.dealAsinsHash[h] = k
                }
                e = this.getViewId(0);
                void 0 === this.dealViews[e] ? this.dealViews[e] = new b(this.widgetID, e, a) : this.dealViews[e].setDealInfo(a.dealId, a.asin);
                Deal.udpController.setPageDealID(this.widgetID, a.dealId)
            },
            setPushNotificationDetails: function(a) {
                this.pushNotificationDetails = a;
                var b = this.getViewId(0);
                this.dealViews[b].setPushNotificationDetails(a)
            },
            registerEvents: function() {
                var a =
                    this;
                l.when("jQuery", "accordionBuyBoxJS").execute(function(b) {
                    var d = a.getViewId(0);
                    void 0 !== a.dealViews[d] && (b("#usedBuySection").bind("click", a.dealViews[d].onSelectRegularBuybox), b("#buyNewSection").bind("click", a.dealViews[d].onSelectRegularBuybox), b("#lightningDealSection").bind("click", a.dealViews[d].onSelectLDBuybox))
                });
                l.when("jQuery").execute(function(b) {
                    b("#gb_in_cart_co").bind("redeemed", function(b, d) {
                        b = a.getViewId(0);
                        void 0 !== a.dealViews[b] && a.dealViews[b].showChangeOver(d)
                    })
                })
            }
        })
    });
    l.when("A",
        "gb-udp-event-emitter").register("gb-udp-deal-view", function(a, b) {
        return b.extend({
            className: "udp-deal-view",
            timers: [],
            dealId: null,
            asin: null,
            widgetId: null,
            viewId: null,
            pushNotificationDetails: {},
            viewSpanIds: {
                appOnlyAccessMessage: "",
                appEarlyAccessMessage: "",
                spanATC: "",
                spanJoinWaitlist: "",
                spanWillNotify: "",
                spanTurnNotifOn: "",
                spanSoldOut: "",
                spanInCart: "",
                spanWaitInLine: "",
                spanPendingAtc: "",
                spanClaimed: "",
                spanDealOver: "",
                spanWaitlistFull: "",
                spanDealTimerContainer: "",
                spanSpinner: "",
                availability: "",
                dotdCountdownTimer: "",
                dotdExpired: "",
                primeEarlyAccessMessage: "",
                primeOnlyAccessMessage: "",
                spanShowProgress: "",
                spanShowQuantity: "",
                spanPrimeOnlyDotdCartMessage: ""
            },
            viewTimerSpanIds: {
                spanDealTimer: "",
                spanCheckoutTimer: "",
                spanPendingATCTimer: "",
                spanDealStsProgBar: "",
                spanDealStsPercent: "",
                spanDealStsAvailMsg: "",
                spanDealStsClaimedText: ""
            },
            viewHeaderMsgSpanIds: {
                spanJoinWaitlist: "",
                spanSoldOut: "",
                spanInCart: "",
                spanWaitInLine: "",
                spanPendingAtc: "",
                spanClaimed: "",
                spanDealOver: "",
                spanWaitlistFull: "",
                spanHeaderPrice: ""
            },
            viewChangeOverSpanIds: {
                spanWaitInLine: "",
                spanInCart: "",
                spanDealOrderQuantity: "",
                spanBooksAvailabilitySection: "",
                spanBooksFastTrackMessaging: ""
            },
            init: function(a, b, c) {
                this._super();
                var f = this;
                f.timers = [];
                f.widgetId = a;
                f.viewId = b;
                f.pushNotificationDetails = Deal.udpController.getWidget("udpDealLDWidget").pushNotificationDetails;
                f.setDealInfo(c.dealId, c.asin);
                f.on("change", f.cleanup);
                f.on("change", f.render);
                l.when("A", "jQuery", "ready").execute(function(a, b) {
                    a.on("a:accordion:buybox_accordion:gb_ld_buybox:select", f.onSelectLDBuybox);
                    a.on("a:accordion:buybox_accordion:regular_buybox:select",
                        f.onSelectRegularBuybox);
                    a.on("a:accordion:buybox_accordion:sampling-accordion:select", f.onSelectRegularBuybox);
                    a.on("a:accordion:buybox_accordion:select", f.onSelectBuybox);
                    a.on("a:accordion:buybox-accordion:gb_ld_buybox:select", f.onSelectLDBuybox);
                    a.on("a:accordion:buybox-accordion:onetime-accordion:select", f.onSelectRegularBuybox);
                    a.on("a:accordion:buybox-accordion:sns-accordion:select", f.onSelectRegularBuybox);
                    a.on("a:accordion:buybox-accordion:sampling-accordion:select", f.onSelectRegularBuybox);
                    a.on("a:accordion:buybox-accordion:select", f.onSelectBuybox);
                    a.declarative("a-accordion", ["click"], f.handleAccordionSelection);
                    a.on("a:accordion:buybox-accordion:dealsAccordionRow:select", f.onSelectLDBuybox);
                    a.on("a:accordion:buybox-accordion:newAccordionRow:select", f.onSelectRegularBuybox);
                    a.on("a:accordion:buybox-accordion:select", f.onSelectBuybox);
                    a.on("alohaLDBuyBox", function() {
                        f.onSelectLDBuybox()
                    });
                    a.on("alohaNormalBuyBox", function() {
                        f.onSelectRegularBuybox()
                    })
                });
                l.when("jQuery", "accordionBuyBoxJS",
                    "ready").execute(function(a) {
                    a("#usedBuySection").bind("click", f.onSelectRegularBuybox);
                    a("#buyNewSection").bind("click", f.onSelectRegularBuybox);
                    a("#lightningDealSection").bind("click", f.onSelectLDBuybox)
                })
            },
            setPushNotificationDetails: function(a) {
                this.pushNotificationDetails = a
            },
            setDealInfo: function(a, b) {
                var c = this;
                l.when("jQuery").execute(function(f) {
                    c.dealId = a;
                    c.asin = b;
                    c.viewSpanIds.spanATC = f("#gb_atc_" + c.dealId);
                    c.viewSpanIds.spanJoinWaitlist = f("#gb_join_waitlist_" + c.dealId);
                    c.viewSpanIds.spanSoldOut =
                        f("#deal_soldout_" + c.dealId);
                    c.viewSpanIds.spanInCart = f("#deal_in_cart_" + c.dealId);
                    c.viewSpanIds.spanWaitInLine = f("#deal_wait_in_line_" + c.dealId);
                    c.viewSpanIds.spanWillNotify = f("#deal_waitlisted_will_notify_" + c.dealId);
                    c.viewSpanIds.spanTurnNotifOn = f("#deal_waitlisted_turn_on_notif_" + c.dealId);
                    c.viewSpanIds.spanPendingAtc = f("#deal_pending_atc_" + c.dealId);
                    c.viewSpanIds.spanClaimed = f("#deal_claimed_" + c.dealId);
                    c.viewSpanIds.spanDealOver = f("#deal_over_" + c.dealId);
                    c.viewSpanIds.spanWaitlistFull = f("#deal_waitlist_full_" +
                        c.dealId);
                    c.viewSpanIds.spanDealTimerContainer = f("#dealCountdownTimer_" + c.dealId);
                    c.viewSpanIds.spanSpinner = f("#deal_processing_" + c.dealId);
                    c.viewSpanIds.availability = f("#deal_availability_" + c.dealId);
                    c.viewSpanIds.dotdCountdownTimer = f("#dotd_countdown_timer_" + c.dealId);
                    c.viewSpanIds.dotdExpired = f("#dotd_expired_" + c.dealId);
                    c.viewSpanIds.primeEarlyAccessMessage = f("#primeEarlyAccessMessage_" + c.dealId);
                    c.viewSpanIds.primeOnlyAccessMessage = f("#primeOnlyAccessMessage_" + c.dealId);
                    c.viewSpanIds.appEarlyAccessMessage =
                        f("#appEarlyAccessMessage_" + c.dealId);
                    c.viewSpanIds.appOnlyAccessMessage = f("#appOnlyAccessMessage_" + c.dealId);
                    c.viewSpanIds.primeEarlyAccessWaitlistAvailableMessage = f("#primeEarlyAccessWaitlistAvailableMessage_" + c.dealId);
                    c.viewSpanIds.primeEarlyAccessWaitlistFullMessage = f("#primeEarlyAccessWaitlistFullMessage_" + c.dealId);
                    c.viewSpanIds.primeEarlyAccessTryPrimeButton = f("#tryPrimeButton_" + c.dealId);
                    c.viewSpanIds.appDownloadButton = f("#appDownloadButton_" + c.dealId);
                    c.viewSpanIds.spanShowProgress = f("#deal_status_progress_" +
                        c.dealId);
                    c.viewSpanIds.spanShowQuantity = f("#dealOrderQuantity");
                    c.viewSpanIds.spanPrimeOnlyDotdCartMessage = f("#deal_podotd_cart_message_" + c.dealId);
                    c.viewTimerSpanIds.spanDealTimer = f("#deal_expiry_timer_" + c.dealId);
                    c.viewTimerSpanIds.spanDealStsProgBar = f("#dealStatusProgressBar_" + c.dealId);
                    c.viewTimerSpanIds.spanDealStsPercent = f("#dealStatusPercentage_" + c.dealId);
                    c.viewTimerSpanIds.spanDealStsAvailMsg = f("#dealStatusAvailability_" + c.dealId);
                    c.viewTimerSpanIds.spanCheckoutTimer = f("#deal_checkout_timer_" +
                        c.dealId);
                    c.viewTimerSpanIds.spanPendingATCTimer = f("#deal_pending_atc_timer_" + c.dealId);
                    c.viewTimerSpanIds.spanDealStsClaimedText = f("#dealStatusClaimedText_" + c.dealId);
                    c.viewHeaderMsgSpanIds.spanJoinWaitlist = f("#gbld_header_msg_waitlistonly");
                    c.viewHeaderMsgSpanIds.spanSoldOut = f("#gbld_header_msg_soldout");
                    c.viewHeaderMsgSpanIds.spanInCart = f("#gbld_header_msg_incart");
                    c.viewHeaderMsgSpanIds.spanWaitInLine = f("#gbld_header_msg_inwaitlist");
                    c.viewHeaderMsgSpanIds.spanPendingAtc = f("#gbld_header_msg_pendingatc");
                    c.viewHeaderMsgSpanIds.spanClaimed = f("#gbld_header_msg_claimed");
                    c.viewHeaderMsgSpanIds.spanWaitlistFull = f("#gbld_header_msg_waitlistfull");
                    c.viewChangeOverSpanIds.spanWaitInLine = f("#gb_wl_joined_co");
                    c.viewChangeOverSpanIds.spanInCart = f("#gb_in_cart_co");
                    c.viewChangeOverSpanIds.spanDealOrderQuantity = f("#dealOrderQuantity");
                    c.viewChangeOverSpanIds.spanBooksAvailabilitySection = f("#books_availability_section_" + c.dealId);
                    c.viewChangeOverSpanIds.spanBooksFastTrackMessaging = f("#dp-fast-track_feature_div_" +
                        c.dealId)
                })
            },
            cleanup: function() {
                if (this.timers) {
                    for (var a = 0; a < this.timers.length; a++) this.timers[a].disconnect();
                    this.timers = []
                } else Deal.log("No timers to clean up. Returning.")
            },
            render: function(a) {
                void 0 !== a && a ? void 0 !== a.state && void 0 !== a.deal && a.state && a.deal ? (this.cleanup(), this.renderDealDetails(a.deal)) : Deal.log("DealView.render: Unknown state / Null deal object. params :" + JSON.stringify(a)) : Deal.log("DealView.render: Null params specified")
            },
            updatePurchaseState: function(a) {
                Deal.checkIfDealExpired(a) &&
                    (this.hideSpansExcept(["spanDealOver"]), this.viewTimerSpanIds.spanDealStsProgBar.addClass("a-inactive"));
                if (a.dealAsinsHash[a.dealAsins[0].ASIN].status.state === Deal.inCartStr || a.dealAsinsHash[a.dealAsins[0].ASIN].status.state === Deal.pendingAtcStr) a.dealAsinsHash[a.dealAsins[0].ASIN].status.msToExpiry = 0;
                a.trigger("change", a)
            },
            showChangeOver: function(a) {
                a === Deal.inCartStr ? this.viewChangeOverSpanIds.spanInCart.show() : this.viewChangeOverSpanIds.spanWaitInLine.show()
            },
            renderDealDetails: function(a) {
                Deal.isPrimeOnlyDotd(a) ?
                    this.renderPrimeOnlyDealOfTheDayBuybox(a) : Deal.dealTypes.LD === a.dealType ? this.renderLightningDealBuybox(a) : Deal.dealTypes.DOTD === a.dealType ? this.renderDealOfTheDay(a) : Deal.log("UDPWidgetView: Unsupported deal type caught in renderDealDetails")
            },
            renderDealOfTheDay: function(a) {
                if (Deal.checkIfDealExpired(a)) this.viewSpanIds.dotdCountdownTimer.addClass("a-hidden"), this.viewSpanIds.dotdExpired.removeClass("a-hidden");
                else if (a.status && a.status.endDate) {
                    var b = Deal.UDPTimer(a.status.endDate, 0, a);
                    b.span =
                        this.viewTimerSpanIds.spanDealTimer;
                    36E5 > a.status.msToEnd && this.viewTimerSpanIds.spanDealTimer.addClass("a-color-success");
                    this.timers.push(b)
                }
            },
            renderPrimeOnlyDealOfTheDayBuybox: function(a) {
                var b = Deal.udpController.canCustomerClaimPrimeOnlyDOTD,
                    c = Deal.udpController.isCustomerClaimingPrimeOnlyDOTD;
                if (null != a.dealAsinsHash) {
                    var f = a.dealAsinsHash[this.asin];
                    null != f && null != f.status && (f.offerServiceSoldOut ? (this.hideSpansExcept(["spanSoldOut", "spanShowProgress", "spanShowQuantity"]), this.updateHeaderMessage("spanSoldOut")) :
                        Deal.checkIfDealExpired(a) ? (this.hideSpansExcept(["spanDealOver", "spanShowProgress", "spanShowQuantity"]), this.viewTimerSpanIds.spanDealStsProgBar.addClass("a-inactive"), this.updateHeaderMessage()) : gbResources.getCustomerData("hasExclusiveAccessBenefit") ? b ? c ? this.hideSpansExcept("spanATC primeOnlyAccessMessage spanDealTimerContainer spanShowProgress spanShowQuantity spanInCart".split(" ")) : this.hideSpansExcept(["spanATC", "primeOnlyAccessMessage", "spanDealTimerContainer", "spanShowProgress", "spanShowQuantity"]) :
                        (this.hideSpansExcept(["spanATC", "primeOnlyAccessMessage", "spanDealTimerContainer", "spanShowProgress", "spanPrimeOnlyDotdCartMessage"]), this.viewSpanIds.spanATC.removeClass("a-hidden").addClass("a-hidden")) : this.hideSpansExcept(["primeOnlyAccessMessage", "spanShowProgress", "spanDealTimerContainer", "primeEarlyAccessTryPrimeButton"]), a.status && a.status.endDate && (b = Deal.UDPTimer(a.status.endDate, 0, a), b.span = this.viewTimerSpanIds.spanDealTimer, 36E5 > a.status.msToEnd && this.viewTimerSpanIds.spanDealTimer.addClass("a-color-success"),
                            this.timers.push(b)))
                }
            },
            renderLightningDealBuybox: function(a) {
                if (null !== a.dealAsinsHash && void 0 !== a.dealAsinsHash) {
                    var b = a.dealAsinsHash[this.asin];
                    null !== b && void 0 !== b && null !== b.status && void 0 !== b.status && (b.status.state === Deal.claimedStr ? (this.hideSpansExcept(["spanClaimed", "spanDealTimerContainer", "spanShowProgress", "spanShowQuantity"]), this.updateHeaderMessage("spanClaimed")) : b.status.state === Deal.inCartStr ? 0 < b.status.msToExpiry ? (this.hideSpansExcept(["spanInCart"]), this.updateHeaderMessage("spanInCart")) :
                        this.hideSpansExcept(["spanSpinner"]) : Deal.checkIfDealExpired(a) ? (this.hideSpansExcept(["spanDealOver", "spanShowProgress", "spanShowQuantity"]), this.viewTimerSpanIds.spanDealStsProgBar.addClass("a-inactive"), this.updateHeaderMessage()) : b.status.state === Deal.pendingAtcStr ? 0 < b.status.msToExpiry ? a.detail.accessType !== Deal.accessTypeEnum.APP_ONLY_LD || gbResources.getCustomerData("isApp") ? (this.hideSpansExcept(["spanPendingAtc", "spanATC"]), this.updateHeaderMessage("spanPendingAtc")) : this.hideSpansExcept(["spanShowProgress",
                            "appOnlyAccessMessage", "appDownloadButton", "spanShowQuantity"
                        ]) : this.hideSpansExcept(["spanSpinner"]) : b.status.state === Deal.waitInLineStr ? (void 0 !== this.pushNotificationDetails && null !== this.pushNotificationDetails && void 0 !== this.pushNotificationDetails.pushToken && null !== this.pushNotificationDetails.pushToken ? this.hideSpansExcept(["spanWaitInLine", "spanWillNotify", "spanDealTimerContainer", "spanShowProgress"]) : this.hideSpansExcept(["spanWaitInLine", "spanTurnNotifOn", "spanDealTimerContainer", "spanShowProgress"]),
                            this.updateHeaderMessage("spanWaitInLine")) : b.offerServiceSoldOut || 100 <= b.status.percentSoldOut ? (this.hideSpansExcept(["spanSoldOut", "spanShowProgress", "spanShowQuantity"]), this.updateHeaderMessage("spanSoldOut")) : 100 <= b.status.percentClaimed ? b.status.currentlyUnavailable ? Deal.isDealInEarlyAccessWindow(a) ? a.detail.accessType === Deal.accessTypeEnum.PRIME_EARLY_ACCESS ? gbResources.getCustomerData("hasEarlyAccessBenefit") ? (this.hideSpansExcept(["spanWaitlistFull", "spanDealTimerContainer", "spanShowProgress",
                            "primeEarlyAccessMessage", "spanShowQuantity"
                        ]), this.updateHeaderMessage("spanWaitlistFull")) : this.hideSpansExcept(["primeEarlyAccessMessage", "spanShowProgress", "primeEarlyAccessWaitlistFullMessage", "spanShowQuantity"]) : a.detail.accessType === Deal.accessTypeEnum.APP_EARLY_ACCESS && (gbResources.getCustomerData("isApp") ? (this.hideSpansExcept(["spanWaitlistFull", "spanDealTimerContainer", "spanShowProgress", "spanShowQuantity"]), this.updateHeaderMessage("spanWaitlistFull")) : this.hideSpansExcept(["spanDealTimerContainer",
                            "spanShowProgress", "appEarlyAccessMessage", "appDownloadButton", "spanShowQuantity"
                        ])) : Deal.isPrimeOnlyDeal(a) ? gbResources.getCustomerData("hasExclusiveAccessBenefit") ? (this.hideSpansExcept(["spanWaitlistFull", "spanDealTimerContainer", "spanShowProgress", "primeOnlyAccessMessage", "spanShowQuantity"]), this.updateHeaderMessage("spanWaitlistFull")) : this.hideSpansExcept(["primeOnlyAccessMessage", "spanShowProgress", "primeEarlyAccessWaitlistFullMessage", "spanShowQuantity"]) : a.detail.accessType === Deal.accessTypeEnum.APP_ONLY_LD ?
                        gbResources.getCustomerData("isApp") ? (this.hideSpansExcept(["spanShowProgress", "spanDealTimerContainer", "spanWaitlistFull", "spanShowQuantity"]), this.updateHeaderMessage("spanWaitlistFull")) : this.hideSpansExcept(["appOnlyAccessMessage", "appDownloadButton", "spanShowProgress", "spanShowQuantity"]) : (this.hideSpansExcept(["spanWaitlistFull", "spanDealTimerContainer", "spanShowProgress", "spanShowQuantity"]), this.updateHeaderMessage("spanWaitlistFull")) : Deal.isDealInEarlyAccessWindow(a) ? a.detail.accessType ===
                        Deal.accessTypeEnum.PRIME_EARLY_ACCESS && gbResources.getCustomerData("hasEarlyAccessBenefit") ? (this.hideSpansExcept(["spanJoinWaitlist", "spanDealTimerContainer", "spanShowProgress", "primeEarlyAccessMessage", "spanShowQuantity"]), this.updateHeaderMessage("spanJoinWaitlist")) : a.detail.accessType === Deal.accessTypeEnum.APP_EARLY_ACCESS ? gbResources.getCustomerData("isApp") ? (this.hideSpansExcept(["spanShowProgress", "spanDealTimerContainer", "spanShowQuantity", "spanJoinWaitlist"]), this.updateHeaderMessage("spanJoinWaitlist")) :
                        this.hideSpansExcept(["spanShowProgress", "spanDealTimerContainer", "appEarlyAccessMessage", "appDownloadButton", "spanShowQuantity"]) : this.hideSpansExcept(["primeEarlyAccessMessage", "spanShowProgress", "spanShowQuantity", "spanDealTimerContainer", "primeEarlyAccessWaitlistAvailableMessage"]) : Deal.isPrimeOnlyDeal(a) ? gbResources.getCustomerData("hasExclusiveAccessBenefit") ? (this.hideSpansExcept(["spanJoinWaitlist", "spanDealTimerContainer", "spanShowProgress", "primeOnlyAccessMessage", "spanShowQuantity"]), this.updateHeaderMessage("spanJoinWaitlist")) :
                        this.hideSpansExcept(["primeOnlyAccessMessage", "spanShowProgress", "spanShowQuantity", "spanDealTimerContainer", "primeEarlyAccessWaitlistAvailableMessage"]) : a.detail.accessType === Deal.accessTypeEnum.APP_ONLY_LD ? gbResources.getCustomerData("isApp") ? (this.hideSpansExcept(["spanShowProgress", "spanDealTimerContainer", "spanJoinWaitlist", "spanShowQuantity"]), this.updateHeaderMessage("spanJoinWaitlist")) : this.hideSpansExcept(["appOnlyAccessMessage", "spanShowProgress", "spanShowQuantity", "appDownloadButton"]) :
                        (this.hideSpansExcept(["spanJoinWaitlist", "spanDealTimerContainer", "spanShowProgress", "spanShowQuantity"]), this.updateHeaderMessage("spanJoinWaitlist")) : null != b.status.percentClaimed && 100 > b.status.percentClaimed ? (Deal.isDealInEarlyAccessWindow(a) || (this.viewSpanIds.primeEarlyAccessMessage.addClass("a-hidden"), this.viewSpanIds.appEarlyAccessMessage.addClass("a-hidden"), a.detail.accessType === Deal.accessTypeEnum.APP_ONLY_LD ? gbResources.getCustomerData("isApp") ? this.hideSpansExcept(["spanShowProgress",
                                "spanDealTimerContainer", "spanATC", "spanShowQuantity"
                            ]) : this.hideSpansExcept(["spanShowProgress", "appOnlyAccessMessage", "appDownloadButton", "spanShowQuantity"]) : Deal.isPrimeOnlyDeal(a) ? this.hideSpansExcept(["spanATC", "primeOnlyAccessMessage", "spanDealTimerContainer", "spanShowProgress", "spanShowQuantity"]) : this.hideSpansExcept(["spanATC", "spanDealTimerContainer", "spanShowProgress", "spanShowQuantity"]), this.updateHeaderMessage()), Deal.isDealInEarlyAccessWindow(a) ? a.detail.accessType !== Deal.accessTypeEnum.PRIME_EARLY_ACCESS ||
                            gbResources.getCustomerData("hasEarlyAccessBenefit") ? a.detail.accessType === Deal.accessTypeEnum.APP_EARLY_ACCESS && (gbResources.getCustomerData("isApp") ? this.hideSpansExcept(["spanShowProgress", "spanDealTimerContainer", "spanATC", "spanShowQuantity"]) : this.hideSpansExcept(["spanShowProgress", "spanDealTimerContainer", "appEarlyAccessMessage", "appDownloadButton", "spanShowQuantity"])) : this.hideSpansExcept(["primeEarlyAccessMessage", "spanShowProgress", "spanShowQuantity", "spanDealTimerContainer", "primeEarlyAccessTryPrimeButton"]) :
                            Deal.isPrimeOnlyDeal(a) && !gbResources.getCustomerData("hasExclusiveAccessBenefit") ? this.hideSpansExcept(["primeOnlyAccessMessage", "spanShowProgress", "spanShowQuantity", "spanDealTimerContainer", "primeEarlyAccessTryPrimeButton"]) : a.detail.accessType === Deal.accessTypeEnum.APP_ONLY_LD && (gbResources.getCustomerData("isApp") ? this.hideSpansExcept(["spanShowProgress", "spanDealTimerContainer", "spanATC", "spanShowQuantity"]) : this.hideSpansExcept(["spanShowProgress", "appOnlyAccessMessage", "appDownloadButton",
                                "spanShowQuantity"
                            ]))) : Deal.log("UDPWidgetView: unhandled case in renderLightningDealBuybox"), this.updateDealStatus(a))
                }
            },
            hideSpansExcept: function(a) {
                var b, c;
                for (c in this.viewSpanIds) {
                    b = !1;
                    for (var f in a)
                        if (a[f] === c) {
                            b = !0;
                            this.viewSpanIds[c].removeClass("a-hidden");
                            break
                        }!1 === b && this.viewSpanIds[c].addClass("a-hidden")
                }
            },
            updateHeaderMessage: function(a) {
                var b = this;
                l.when("jQuery").execute(function(c) {
                    c("#gbld_header_message").children().addClass("a-hidden");
                    void 0 !== a && null !== a && b.viewHeaderMsgSpanIds[a].removeClass("a-hidden")
                })
            },
            updateDealStatus: function(a) {
                var b, c = a.dealAsinsHash[this.asin];
                b = b = null;
                c.status.state === Deal.inCartStr ? (b = (new Date).getTime(), b = new Date(b + parseInt(c.status.msToExpiry)), b = Deal.UDPTimer(b, 1, a), b.span = this.viewTimerSpanIds.spanCheckoutTimer, this.timers.push(b)) : c.status.state === Deal.pendingAtcStr ? (b = (new Date).getTime(), b = new Date(b + parseInt(c.status.msToExpiry)), b = Deal.UDPTimer(b, 1, a), b.span = this.viewTimerSpanIds.spanPendingATCTimer, this.timers.push(b)) : a.status.endDate && (Deal.isDealInEarlyAccessWindow(a) ?
                    a.detail.accessType !== Deal.accessTypeEnum.PRIME_EARLY_ACCESS || gbResources.getCustomerData("hasEarlyAccessBenefit") ? a.detail.accessType === Deal.accessTypeEnum.APP_EARLY_ACCESS ? (b = Deal.getEarlyAccessEndTime(a), this.viewTimerSpanIds.spanDealTimer.addClass("a-color-success")) : (b = a.status.endDate, this.viewTimerSpanIds.spanDealTimer.removeClass("a-color-success").addClass("a-color-base")) : b = Deal.getEarlyAccessEndTime(a) : (b = a.status.endDate, this.viewTimerSpanIds.spanDealTimer.removeClass("a-color-success").addClass("a-color-base")),
                    b = Deal.UDPTimer(b, 0, a), b.span = this.viewTimerSpanIds.spanDealTimer, 36E5 > a.status.msToEnd && this.viewTimerSpanIds.spanDealTimer.addClass("a-color-success"), this.timers.push(b));
                if ((b = c.status.percentClaimed) && 0 <= parseFloat(b) && 100 >= parseFloat(b)) {
                    b = Math.round(b);
                    var f = this.viewTimerSpanIds.spanDealStsProgBar.find("#progBarBase"),
                        h = this.viewTimerSpanIds.spanDealStsProgBar.find("#progBarTick");
                    f.css("width", b + "%");
                    h.css("width", b + "%");
                    this.viewTimerSpanIds.spanDealStsPercent.html(b + "%");
                    this.viewTimerSpanIds.spanDealStsAvailMsg.html(b +
                        "%");
                    89 >= b ? (this.viewTimerSpanIds.spanDealStsPercent.removeClass("a-color-error").removeClass("a-color-success").addClass("a-color-base"), this.viewTimerSpanIds.spanDealStsClaimedText.removeClass("a-color-error").removeClass("a-color-success").addClass("a-color-base")) : 99 >= b ? (this.viewTimerSpanIds.spanDealStsPercent.removeClass("a-color-base").removeClass("a-color-success").addClass("a-color-success"), this.viewTimerSpanIds.spanDealStsClaimedText.removeClass("a-color-base").removeClass("a-color-success").addClass("a-color-success")) :
                        (this.viewTimerSpanIds.spanDealStsPercent.removeClass("a-color-base").removeClass("a-color-success").addClass("a-color-error"), this.viewTimerSpanIds.spanDealStsClaimedText.removeClass("a-color-base").removeClass("a-color-success").addClass("a-color-error"));
                    if (c.offerServiceSoldOut || 100 <= c.status.percentSoldOut || Deal.checkIfDealExpired(a)) f.removeClass("progbar"), h.removeClass("progbartick"), f.addClass("progbarmissed"), h.addClass("progbartickmissed")
                }
                l.when("A").execute(function(b) {
                    var c = b.$;
                    if (void 0 !==
                        b.state("offerBadges")) {
                        var e = b.state("offerBadges").displayOfferBadge;
                        b = b.state("offerBadges").lightningDealString;
                        !e || Deal.checkIfDealExpired(a) || Deal.isDealInEarlyAccessWindow(a) || Deal.isPrimeOnlyDeal(a) || 0 < c("#sticker-label").length && c("#sticker-label").html(b)
                    }
                });
                Deal.isDealInEarlyAccessWindow(a) || Deal.isPrimeOnlyDeal(a) || c.status.state === Deal.waitInLineStr || c.status.state === Deal.inCartStr || this.viewChangeOverSpanIds.spanDealOrderQuantity.removeClass("a-hidden");
                Deal.isDealInEarlyAccessWindow(a) ||
                    Deal.isPrimeOnlyDeal(a) || (this.viewChangeOverSpanIds.spanBooksAvailabilitySection.removeClass("a-hidden"), this.viewChangeOverSpanIds.spanBooksFastTrackMessaging.removeClass("a-hidden"));
                Deal.isDealInEarlyAccessWindow(a) && l.when("A").execute(function(a) {
                    a.on("a:popover:show:primePopoverContent", function(a) {
                        a.popover.$container.find("button").css("display", "block")
                    })
                })
            },
            expandLDBuybox: function() {
                l.when("jQuery").execute(function(a) {
                    a("#gb_ld_buybox").trigger("click")
                })
            },
            expandRegularBuybox: function() {
                l.when("jQuery").execute(function(a) {
                    a("#regular_buybox").trigger("click")
                })
            },
            onSelectLDBuybox: function(a) {
                l.when("jQuery").execute(function(a) {
                    var b = Deal.udpController.dealsInCurrentView[Deal.udpController.buyboxWidgetID];
                    void 0 !== b && null !== b && (b = b[0], void 0 !== b && "LIGHTNING_DEAL" === b.dealType && (0 < a("#priceblock_businessprice").size() ? (a("#priceblock_businessprice_row").addClass("aok-hidden"), a("#priceblock_dealprice_row").removeClass("aok-hidden")) : (a("#priceblock_ourprice").removeClass("a-size-medium").addClass("a-size-base").removeClass("a-color-price").addClass("a-color-secondary").addClass("a-text-strike"),
                            a("#priceblock_saleprice").removeClass("a-size-medium").addClass("a-size-base").removeClass("a-color-price").addClass("a-color-secondary").addClass("a-text-strike")), a("#priceblock_dealprice").removeClass("a-size-base").addClass("a-size-medium").removeClass("a-color-secondary").addClass("a-color-price"), a("#ourprice_shippingmessage").addClass("a-hidden"), a("#businessprice_shippingmessage").addClass("aok-hidden"), a("#saleprice_shippingmessage").addClass("a-hidden"), a("#dealprice_shippingmessage").removeClass("a-hidden"),
                        a("#priceblock_dealprice_row").find(".priceblock_vat_inc_price").addClass("a-color-price").removeClass("a-color-secondary"), a("#priceblock_dealprice_row").find(".priceblock_vat_excl_label, .priceblock_vat_excl_price, .priceblock_vat_inc_label ").removeClass("a-hidden"), a("#priceblock_ourprice_row").find(".priceblock_vat_inc_price").removeClass("a-color-price").addClass("a-color-secondary"), a("#priceblock_ourprice_row").find(".priceblock_vat_excl_label, .priceblock_vat_excl_price, .priceblock_vat_inc_label ").addClass("a-hidden"),
                        a("#priceblock_saleprice_row").find(".priceblock_vat_inc_price").removeClass("a-color-price").addClass("a-color-secondary"), a("#priceblock_saleprice_row").find(".priceblock_vat_excl_label, .priceblock_vat_excl_price, .priceblock_vat_inc_label ").addClass("a-hidden"), a("#atfRedesign_priceblock_priceToPay, #atfRedesign_priceToPay_savings").removeClass("a-hidden"), a("#atfRedesign_priceblock_buyingPrice, #atfRedesign_buyingPrice_savings").addClass("a-hidden"), a("#atfRedesign_pricePerUnit").removeClass("a-hidden"),
                        a("#atfRedesign_buyingPricePerUnit").addClass("a-hidden"), l.when("A").execute(function(b) {
                            void 0 !== b.state("strikeThroughPrice") && b.state("strikeThroughPrice").hideStrikeThroughPrice && a("#atfRedesign_strikeThroughPrice").removeClass("a-hidden")
                        }), a("#dealprice_savings").removeClass("a-hidden"), a("#regularprice_savings").addClass("a-hidden"), a("#businessprice_savings").addClass("a-hidden"), a("#gbld_header_message").addClass("a-hidden"), a("#ourprice_fbabadge").addClass("a-hidden"), 0 < a("#deal_availability").length &&
                        !Deal.isPrimeOnlyDotd(b) && (a("#deal_availability").removeClass("a-hidden"), a("#availability").addClass("a-hidden")), a("#product-price").removeClass("a-size-medium").addClass("a-size-base").removeClass("a-color-price").addClass("a-color-secondary"), a("#ourprice_addonitem").addClass("a-hidden"), a("#ourprice_prime").addClass("a-hidden")))
                })
            },
            onSelectRegularBuybox: function(a) {
                l.when("jQuery").execute(function(a) {
                    var b = Deal.udpController.dealsInCurrentView[Deal.udpController.buyboxWidgetID];
                    void 0 !== b &&
                        null !== b && (b = b[0], void 0 !== b && "LIGHTNING_DEAL" === b.dealType && (0 < a("#priceblock_businessprice").size() ? (a("#priceblock_businessprice_row").removeClass("aok-hidden"), a("#priceblock_dealprice_row").addClass("aok-hidden")) : (a("#priceblock_ourprice").removeClass("a-size-base").addClass("a-size-medium").removeClass("a-color-secondary").addClass("a-color-price").removeClass("a-text-strike"), a("#priceblock_saleprice").removeClass("a-size-base").addClass("a-size-medium").removeClass("a-color-secondary").addClass("a-color-price").removeClass("a-text-strike")),
                            a("#priceblock_dealprice").removeClass("a-size-medium").addClass("a-size-base").removeClass("a-color-price").addClass("a-color-secondary"), a("#ourprice_shippingmessage").removeClass("a-hidden"), a("#businessprice_shippingmessage").removeClass("aok-hidden"), a("#saleprice_shippingmessage").removeClass("a-hidden"), a("#dealprice_shippingmessage").addClass("a-hidden"), a("#priceblock_dealprice_row").find(".priceblock_vat_inc_price").removeClass("a-color-price").addClass("a-color-secondary"), a("#priceblock_dealprice_row").find(".priceblock_vat_excl_label, .priceblock_vat_excl_price, .priceblock_vat_inc_label ").addClass("a-hidden"),
                            a("#priceblock_ourprice_row").find(".priceblock_vat_inc_price").addClass("a-color-price").removeClass("a-color-secondary"), a("#priceblock_ourprice_row").find(".priceblock_vat_excl_label, .priceblock_vat_excl_price, .priceblock_vat_inc_label ").removeClass("a-hidden"), a("#priceblock_saleprice_row").find(".priceblock_vat_inc_price").addClass("a-color-price").removeClass("a-color-secondary"), a("#priceblock_saleprice_row").find(".priceblock_vat_excl_label, .priceblock_vat_excl_price, .priceblock_vat_inc_label ").removeClass("a-hidden"),
                            a("#atfRedesign_priceblock_priceToPay, #atfRedesign_priceToPay_savings").addClass("a-hidden"), a("#atfRedesign_priceblock_buyingPrice, #atfRedesign_buyingPrice_savings").removeClass("a-hidden"), a("#atfRedesign_pricePerUnit").addClass("a-hidden"), a("#atfRedesign_buyingPricePerUnit").removeClass("a-hidden"), l.when("A").execute(function(b) {
                                void 0 !== b.state("strikeThroughPrice") && b.state("strikeThroughPrice").hideStrikeThroughPrice && a("#atfRedesign_strikeThroughPrice").addClass("a-hidden")
                            }), a("#dealprice_savings").addClass("a-hidden"),
                            a("#regularprice_savings").removeClass("a-hidden"), a("#businessprice_savings").removeClass("a-hidden"), a("#gbld_header_message").removeClass("a-hidden"), a("#ourprice_fbabadge").removeClass("a-hidden"), 0 < a("#deal_availability").length && (a("#deal_availability").addClass("a-hidden"), a("#availability").removeClass("a-hidden")), a("#product-price").removeClass("a-size-base").addClass("a-size-medium").removeClass("a-color-secondary").addClass("a-color-price"), a("#ourprice_addonitem").removeClass("a-hidden"),
                            a("#ourprice_prime").removeClass("a-hidden")))
                })
            },
            onSelectBuybox: function(a) {},
            handleAccordionSelection: function(a) {
                l.when("A").execute(function(b) {
                    var c = a.$target.closest(".a-accordion");
                    b = a.$target.closest(".a-box");
                    var f = c.find(".a-box").not(b),
                        c = f.find(".gb-accordion-active"),
                        f = f.find(".a-color-price"),
                        h = b.find(".gb-accordion-inactive");
                    b = b.find(".a-color-secondary");
                    c.removeClass("gb-accordion-active").addClass("gb-accordion-inactive");
                    f.removeClass("a-color-price").addClass("a-color-secondary");
                    h.removeClass("gb-accordion-inactive").addClass("gb-accordion-active");
                    b.removeClass("a-color-secondary").addClass("a-color-price")
                })
            }
        })
    });
    h.Deal || (h.Deal = {});
    h.gbResources || (h.gbResources = new GBResources);
    h.Deal.configManager || l.when("gb-deal-config-manager").execute(function(a) {
        Deal.configManager = new a({
            controllerConfig: {
                versionInfo: "",
                login_uri: ""
            },
            dealContentServiceConfig: {
                continueRequests: !0,
                timeout: "10",
                baseRetryInterval: 6E4,
                baseURL: "http://internal.amazon.com/coral/com.amazon.dcs.model/",
                client_id: "goldbox_udp"
            }
        })
    });
    h.Deal.Widgets || (h.Deal.Widgets = []);
    "use strict";
    h.P && h.P.AUI_BUILD_DATE && (h.gbRegistered.udp_ld_widget_js || l.when("gb-udp-controller", "gb-udp-deal-widget").register("udp_ld_widget_js", function(a, b) {
        h.UDPDealController = a;
        h.UDPDealWidget = b;
        h.Backbone = {
            setDomLibrary: function() {}
        };
        return {
            dealUdpComponent: function() {}
        }
    }))
});