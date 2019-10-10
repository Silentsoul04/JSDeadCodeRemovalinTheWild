(function() {
    var e;

    function aa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        for (var d in b)
            if (Object.defineProperties) {
                var f = Object.getOwnPropertyDescriptor(b, d);
                f && Object.defineProperty(a, d, f)
            } else a[d] = b[d]
    };

    function ba(a, b) {
        var c = void 0 === b ? this.contains(a) : !b;
        if (c) return this.remove(a), !1;
        this.add(a);
        return !0
    };

    function ca(a) {
        return a == this || this.documentElement.contains(a)
    };

    function da(a) {
        return (a = Number(a)) ? 0 < a ? 1 : -1 : a
    };
    var ea = Object.prototype.hasOwnProperty;

    function fa(a, b) {
        if (null == a) throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1; d < arguments.length; d++) {
            var f = arguments[d];
            if (null != f)
                for (var g in f) ea.call(f, g) && (c[g] = f[g])
        }
        return c
    };
    var ga = Object.prototype.hasOwnProperty;

    function ha(a) {
        if (null == a) throw new TypeError("Cannot convert undefined or null to object");
        var b = [],
            c;
        for (c in a) ga.call(a, c) && b.push(a[c]);
        return b
    };

    function q(a) {
        if (!(this instanceof q)) throw new TypeError("Constructor Promise requires `new`");
        if (!ia(a)) throw new TypeError("Must pass resolver function");
        this._state = ja;
        this._value = [];
        this._isChainEnd = !0;
        ka(this, la(this, ma), la(this, na), {
            then: a
        })
    }
    q.prototype.then = function(a, b) {
        a = ia(a) ? a : void 0;
        b = ia(b) ? b : void 0;
        if (a || b) this._isChainEnd = !1;
        return this._state(this._value, a, b)
    };
    q.prototype.catch = function(a) {
        return this.then(void 0, a)
    };
    q.resolve = function(a) {
        var b = this,
            c;
        return c = a === Object(a) && a instanceof this ? a : new b(function(b) {
            b(a)
        })
    };
    q.reject = function(a) {
        return new this(function(b, c) {
            c(a)
        })
    };
    q.all = function(a) {
        var b = this;
        return new b(function(c, d) {
            var f = a.length,
                g = Array(f);
            if (0 === f) return c(g);
            oa(a, function(a, k) {
                b.resolve(a).then(function(a) {
                    g[k] = a;
                    0 === --f && c(g)
                }, d)
            })
        })
    };
    q.race = function(a) {
        var b = this;
        return new b(function(c, d) {
            for (var f = 0; f < a.length; f++) b.resolve(a[f]).then(c, d)
        })
    };

    function pa(a) {
        throw a;
    }
    q._overrideUnhandledExceptionHandler = function(a) {
        pa = a
    };

    function ma(a, b, c, d) {
        if (!b) {
            if (b = d) b = b.promise, b._state = ma, b._value = a;
            return this
        }
        d || (d = new qa(this.constructor));
        ra(sa(d, b, a));
        return d.promise
    }

    function na(a, b, c, d) {
        if (!c) return d && (b = d.promise, b._state = na, b._value = a), this;
        d || (d = new qa(this.constructor));
        ra(sa(d, c, a));
        return d.promise
    }

    function ja(a, b, c, d) {
        if (!d) {
            if (!b && !c) return this;
            d = new qa(this.constructor)
        }
        a.push({
            deferred: d,
            onFulfilled: b || d.resolve,
            onRejected: c || d.reject
        });
        return d.promise
    }

    function qa(a) {
        var b = this;
        this.promise = new a(function(a, d) {
            b.resolve = a;
            b.reject = d
        });
        return b
    }

    function ta(a, b, c, d) {
        var f = a._value;
        a._state = b;
        a._value = c;
        d && b === ja && d._state(c, void 0, void 0, {
            promise: a,
            resolve: void 0,
            reject: void 0
        });
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            a._state(c, h.onFulfilled, h.onRejected, h.deferred)
        }
        f.length = 0;
        b === na && a._isChainEnd && setTimeout(function() {
            a._isChainEnd && pa(c, a)
        }, 0)
    }

    function la(a, b) {
        return function(c) {
            ta(a, b, c)
        }
    }

    function ua() {}

    function ia(a) {
        return "function" === typeof a
    }

    function oa(a, b) {
        for (var c = 0; c < a.length; c++) b(a[c], c)
    }

    function sa(a, b, c) {
        var d = a.promise,
            f = a.resolve,
            g = a.reject;
        return function() {
            try {
                var a = b(c);
                ka(d, f, g, a, a)
            } catch (k) {
                g(k)
            }
        }
    }
    var ra = function() {
        function a() {
            for (var a = 0; a < f; a++) {
                var b = d[a];
                d[a] = null;
                b()
            }
            f = 0
        }

        function b(a) {
            0 === f && c();
            d[f++] = a
        }
        var c;
        "undefined" !== typeof window && window.postMessage ? (window.addEventListener("message", a), c = function() {
            window.postMessage("macro-task", "*")
        }) : c = function() {
            setTimeout(a, 0)
        };
        var d = Array(16),
            f = 0;
        return b
    }();

    function ka(a, b, c, d, f) {
        var g = c,
            h, k;
        try {
            if (d === a) throw new TypeError("Cannot fulfill promise with itself");
            var l = d === Object(d);
            l && d instanceof a.constructor ? ta(a, d._state, d._value, d) : l && (h = d.then) && ia(h) ? (k = function(d) {
                k = g = ua;
                ka(a, b, c, d, d)
            }, g = function(a) {
                k = g = ua;
                c(a)
            }, h.call(f, function(a) {
                k(a)
            }, function(a) {
                g(a)
            })) : b(d)
        } catch (n) {
            g(n)
        }
    };

    function va(a, b) {
        var c = b || 0,
            d = this.length;
        for (b = 0 <= c ? c : Math.max(d + c, 0); b < d; b++) {
            var f = this[b];
            if (f === a || a !== a && f !== f) return !0
        }
        return !1
    };
    (function(a) {
        /Trident|MSIE|IEMobile/i.test(a.navigator.userAgent) && a.DOMTokenList && a.Object.defineProperty(a.DOMTokenList.prototype, "toggle", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: ba
        })
    })(self);
    (function(a) {
        a.Math.sign || a.Object.defineProperty(a.Math, "sign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: da
        })
    })(self);
    (function(a) {
        a.Object.assign || a.Object.defineProperty(a.Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: fa
        })
    })(self);
    (function(a) {
        a.Object.values || a.Object.defineProperty(a.Object, "values", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: ha
        })
    })(self);
    (function(a) {
        a.Promise || (a.Promise = q, q.default && (a.Promise = q.default), a.Promise.resolve = q.resolve, a.Promise.reject = q.reject, a.Promise.all = q.all, a.Promise.race = q.race)
    })(self);
    (function(a) {
        a.HTMLDocument.prototype.contains || a.Object.defineProperty(a.HTMLDocument.prototype, "contains", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: ca
        })
    })(self);
    (function(a) {
        a.Array.prototype.includes || a.Object.defineProperty(Array.prototype, "includes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: va
        })
    })(self);
    var wa = {
            UNKNOWN: 0,
            IMPRESSION_PAYWALL: 1,
            IMPRESSION_AD: 2,
            IMPRESSION_OFFERS: 3,
            IMPRESSION_SUBSCRIBE_BUTTON: 4,
            IMPRESSION_SMARTBOX: 5,
            IMPRESSION_SWG_BUTTON: 6,
            IMPRESSION_CLICK_TO_SHOW_OFFERS: 7,
            IMPRESSION_CLICK_TO_SHOW_OFFERS_OR_ALREADY_SUBSCRIBED: 8,
            IMPRESSION_SUBSCRIPTION_COMPLETE: 9,
            IMPRESSION_ACCOUNT_CHANGED: 10,
            ACTION_SUBSCRIBE: 1E3,
            ACTION_PAYMENT_COMPLETE: 1001,
            ACTION_ACCOUNT_CREATED: 1002,
            ACTION_ACCOUNT_ACKNOWLEDGED: 1003,
            ACTION_SUBSCRIPTIONS_LANDING_PAGE: 1004,
            ACTION_PAYMENT_FLOW_STARTED: 1005,
            ACTION_OFFER_SELECTED: 1006,
            ACTION_SWG_BUTTON_CLICK: 1007,
            ACTION_VIEW_OFFERS: 1008,
            ACTION_ALREADY_SUBSCRIBED: 1009,
            ACTION_NEW_DEFERRED_ACCOUNT: 1010,
            EVENT_PAYMENT_FAILED: 2E3,
            EVENT_CUSTOM: 3E3,
            EVENT_CONFIRM_TX_ID: 3001,
            EVENT_CHANGED_TX_ID: 3002,
            EVENT_GPAY_NO_TX_ID: 3003,
            EVENT_GPAY_CANNOT_CONFIRM_TX_ID: 3004,
            EVENT_SUBSCRIPTION_STATE: 4E3
        },
        xa = {
            UNKNOWN_CLIENT: 0,
            SWG_CLIENT: 1,
            AMP_CLIENT: 2,
            PROPENSITY_CLIENT: 3,
            SWG_SERVER: 4,
            PUBLISHER_CLIENT: 5
        };

    function r(a) {
        a = void 0 === a ? [] : a;
        this.R = null == a[1] ? null : a[1]
    }
    r.prototype.getComplete = function() {
        return this.R
    };
    r.prototype.setComplete = function(a) {
        this.R = a
    };
    r.prototype.toArray = function() {
        return [this.label(), this.R]
    };
    r.prototype.label = function() {
        return "AccountCreationRequest"
    };

    function t(a) {
        a = void 0 === a ? [] : a;
        this.Ob = null == a[1] ? null : a[1];
        this.tb = null == a[2] ? null : a[2]
    }
    e = t.prototype;
    e.getSubscriberOrMember = function() {
        return this.Ob
    };
    e.setSubscriberOrMember = function(a) {
        this.Ob = a
    };
    e.getLinkRequested = function() {
        return this.tb
    };
    e.setLinkRequested = function(a) {
        this.tb = a
    };
    e.toArray = function() {
        return [this.label(), this.Ob, this.tb]
    };
    e.label = function() {
        return "AlreadySubscribedResponse"
    };

    function ya(a) {
        a = void 0 === a ? [] : a;
        this.jb = null == a[1] ? null : a[1];
        this.Sb = null == a[2] ? null : a[2];
        this.Fb = null == a[3] ? null : a[3];
        this.Xb = null == a[4] ? null : a[4];
        this.Vb = null == a[5] ? null : a[5];
        this.Wb = null == a[6] ? null : a[6];
        this.ea = null == a[7] ? null : a[7];
        this.Db = null == a[8] ? null : a[8];
        this.wa = a[9] || []
    }
    e = ya.prototype;
    e.getEmbedderOrigin = function() {
        return this.jb
    };
    e.setEmbedderOrigin = function(a) {
        this.jb = a
    };
    e.getTransactionId = function() {
        return this.Sb
    };
    e.setTransactionId = function(a) {
        this.Sb = a
    };
    e.getReferringOrigin = function() {
        return this.Fb
    };
    e.setReferringOrigin = function(a) {
        this.Fb = a
    };
    e.getUtmSource = function() {
        return this.Xb
    };
    e.setUtmSource = function(a) {
        this.Xb = a
    };
    e.getUtmCampaign = function() {
        return this.Vb
    };
    e.setUtmCampaign = function(a) {
        this.Vb = a
    };
    e.getUtmMedium = function() {
        return this.Wb
    };
    e.setUtmMedium = function(a) {
        this.Wb = a
    };
    e.getSku = function() {
        return this.ea
    };
    e.setSku = function(a) {
        this.ea = a
    };
    e.getReadyToPay = function() {
        return this.Db
    };
    e.setReadyToPay = function(a) {
        this.Db = a
    };
    e.getLabelList = function() {
        return this.wa
    };
    e.setLabelList = function(a) {
        this.wa = a
    };
    e.toArray = function() {
        return [this.label(), this.jb, this.Sb, this.Fb, this.Xb, this.Vb, this.Wb, this.ea, this.Db, this.wa]
    };
    e.label = function() {
        return "AnalyticsContext"
    };

    function za(a) {
        a = void 0 === a ? [] : a;
        this.kb = null == a[1] ? null : a[1];
        this.rb = null == a[2] ? null : a[2]
    }
    e = za.prototype;
    e.getEventOriginator = function() {
        return this.kb
    };
    e.setEventOriginator = function(a) {
        this.kb = a
    };
    e.getIsFromUserAction = function() {
        return this.rb
    };
    e.setIsFromUserAction = function(a) {
        this.rb = a
    };
    e.toArray = function() {
        return [this.label(), this.kb, this.rb]
    };
    e.label = function() {
        return "AnalyticsEventMeta"
    };

    function Aa(a) {
        a = void 0 === a ? [] : a;
        this.u = null == a[1] || void 0 == a[1] ? null : new ya(a[1]);
        this.lb = null == a[2] ? null : a[2];
        this.Ma = null == a[3] || void 0 == a[3] ? null : new za(a[3]);
        this.Oa = null == a[4] || void 0 == a[4] ? null : new u(a[4])
    }
    e = Aa.prototype;
    e.getContext = function() {
        return this.u
    };
    e.setContext = function(a) {
        this.u = a
    };
    e.getEvent = function() {
        return this.lb
    };
    e.setEvent = function(a) {
        this.lb = a
    };
    e.getMeta = function() {
        return this.Ma
    };
    e.setMeta = function(a) {
        this.Ma = a
    };
    e.getParams = function() {
        return this.Oa
    };
    e.setParams = function(a) {
        this.Oa = a
    };
    e.toArray = function() {
        return [this.label(), this.u ? this.u.toArray() : [], this.lb, this.Ma ? this.Ma.toArray() : [], this.Oa ? this.Oa.toArray() : []]
    };
    e.label = function() {
        return "AnalyticsRequest"
    };

    function v(a) {
        a = void 0 === a ? [] : a;
        this.sb = null == a[1] ? null : a[1]
    }
    v.prototype.getJwt = function() {
        return this.sb
    };
    v.prototype.setJwt = function(a) {
        this.sb = a
    };
    v.prototype.toArray = function() {
        return [this.label(), this.sb]
    };
    v.prototype.label = function() {
        return "EntitlementsResponse"
    };

    function u(a) {
        a = void 0 === a ? [] : a;
        this.Lb = null == a[1] ? null : a[1];
        this.nb = null == a[2] ? null : a[2];
        this.ob = null == a[3] ? null : a[3]
    }
    e = u.prototype;
    e.getSmartboxMessage = function() {
        return this.Lb
    };
    e.setSmartboxMessage = function(a) {
        this.Lb = a
    };
    e.getGpayTransactionId = function() {
        return this.nb
    };
    e.setGpayTransactionId = function(a) {
        this.nb = a
    };
    e.getHadLogged = function() {
        return this.ob
    };
    e.setHadLogged = function(a) {
        this.ob = a
    };
    e.toArray = function() {
        return [this.label(), this.Lb, this.nb, this.ob]
    };
    e.label = function() {
        return "EventParams"
    };

    function Ba(a) {
        a = void 0 === a ? [] : a;
        this.Ya = null == a[1] ? null : a[1];
        this.Rb = null == a[2] ? null : a[2]
    }
    e = Ba.prototype;
    e.getAuthCode = function() {
        return this.Ya
    };
    e.setAuthCode = function(a) {
        this.Ya = a
    };
    e.getToken = function() {
        return this.Rb
    };
    e.setToken = function(a) {
        this.Rb = a
    };
    e.toArray = function() {
        return [this.label(), this.Ya, this.Rb]
    };
    e.label = function() {
        return "LinkSaveTokenRequest"
    };

    function w(a) {
        a = void 0 === a ? [] : a;
        this.Hb = null == a[1] ? null : a[1]
    }
    w.prototype.getRequested = function() {
        return this.Hb
    };
    w.prototype.setRequested = function(a) {
        this.Hb = a
    };
    w.prototype.toArray = function() {
        return [this.label(), this.Hb]
    };
    w.prototype.label = function() {
        return "LinkingInfoResponse"
    };

    function Ca(a) {
        a = void 0 === a ? [] : a;
        this.ea = null == a[1] ? null : a[1];
        this.wb = null == a[2] ? null : a[2]
    }
    e = Ca.prototype;
    e.getSku = function() {
        return this.ea
    };
    e.setSku = function(a) {
        this.ea = a
    };
    e.getOldSku = function() {
        return this.wb
    };
    e.setOldSku = function(a) {
        this.wb = a
    };
    e.toArray = function() {
        return [this.label(), this.ea, this.wb]
    };
    e.label = function() {
        return "SkuSelectedResponse"
    };

    function x(a) {
        a = void 0 === a ? [] : a;
        this.qb = null == a[1] ? null : a[1]
    }
    x.prototype.getIsClicked = function() {
        return this.qb
    };
    x.prototype.setIsClicked = function(a) {
        this.qb = a
    };
    x.prototype.toArray = function() {
        return [this.label(), this.qb]
    };
    x.prototype.label = function() {
        return "SmartBoxMessage"
    };

    function y(a) {
        a = void 0 === a ? [] : a;
        this.Nb = null == a[1] ? null : a[1]
    }
    y.prototype.getSubscribe = function() {
        return this.Nb
    };
    y.prototype.setSubscribe = function(a) {
        this.Nb = a
    };
    y.prototype.toArray = function() {
        return [this.label(), this.Nb]
    };
    y.prototype.label = function() {
        return "SubscribeResponse"
    };

    function z(a) {
        a = void 0 === a ? [] : a;
        this.vb = null == a[1] ? null : a[1]
    }
    z.prototype.getNative = function() {
        return this.vb
    };
    z.prototype.setNative = function(a) {
        this.vb = a
    };
    z.prototype.toArray = function() {
        return [this.label(), this.vb]
    };
    z.prototype.label = function() {
        return "ViewSubscriptionsResponse"
    };
    var Da = {
        AccountCreationRequest: r,
        AlreadySubscribedResponse: t,
        AnalyticsContext: ya,
        AnalyticsEventMeta: za,
        AnalyticsRequest: Aa,
        EntitlementsResponse: v,
        EventParams: u,
        LinkSaveTokenRequest: Ba,
        LinkingInfoResponse: w,
        SkuSelectedResponse: Ca,
        SmartBoxMessage: x,
        SubscribeResponse: y,
        ViewSubscriptionsResponse: z
    };

    function Ea(a) {
        if (/swg.debug=1/.test(self.location.hash)) {
            var b = Array.prototype.slice.call(arguments, 0);
            b.unshift("[Subscriptions]");
            A.apply(A, b)
        }
    }

    function A(a) {
        console.log.apply(console, arguments)
    }

    function C(a, b, c) {
        var d;
        if (!a) {
            var f = (b || "Assertion failed").split("%s"),
                g = f.shift(),
                h = g,
                k = [];
            "" != g && k.push(g);
            for (g = 2; g < arguments.length; g++) {
                var l = arguments[g];
                l && l.tagName && (d = l);
                var n = f.shift();
                k.push(l);
                var m = n.trim();
                "" != m && k.push(m);
                var m = h,
                    p;
                p = (p = l) && 1 == p.nodeType ? p.tagName.toLowerCase() + (p.id ? "#" + p.id : "") : p;
                h = m + (p + n)
            }
            g = Error(h);
            g.fromAssert = !0;
            g.associatedElement = d;
            g.messageArray = k;
            throw g;
        }
        return a
    };
    /*

     Copyright 2017 The Web Activities Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    function D(a) {
        return a && "object" == typeof a ? "AbortError" === a.name : !1
    }

    function Fa(a, b) {
        b = "AbortError" + (b ? ": " + b : "");
        var c = null;
        if ("function" == typeof a.DOMException) {
            var d = a.DOMException;
            try {
                c = new d(b, "AbortError")
            } catch (f) {}
        }
        c || (c = Error(b), c.name = "AbortError", c.code = 20);
        return c
    }

    function Ga(a, b, c, d, f, g) {
        this.code = a;
        this.data = "ok" == a ? b : null;
        this.mode = c;
        this.origin = d;
        this.originVerified = f;
        this.secureChannel = g;
        this.ok = "ok" == a;
        this.error = "failed" == a ? Error(String(b) || "") : null
    }
    var Ha;

    function Ia(a) {
        Ha || (Ha = document.createElement("a"));
        Ha.href = a;
        return Ha
    }

    function Ja(a) {
        if (a.origin) return a.origin;
        var b = a.protocol,
            c = a.host;
        "https:" == b && c.indexOf(":443") == c.length - 4 ? c = c.replace(":443", "") : "http:" == b && c.indexOf(":80") == c.length - 3 && (c = c.replace(":80", ""));
        return b + "//" + c
    }

    function Ka(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substring(0, b)
    }

    function La(a) {
        return a ? (/^[?#]/.test(a) ? a.slice(1) : a).split("&").reduce(function(a, c) {
            var b = c.split("=");
            c = decodeURIComponent(b[0] || "");
            var f = decodeURIComponent(b[1] || "");
            c && (a[c] = f);
            return a
        }, {}) : {}
    }

    function Ma(a) {
        var b = {
            requestId: a.requestId,
            returnUrl: a.returnUrl,
            args: a.args
        };
        void 0 !== a.origin && (b.origin = a.origin);
        void 0 !== a.originVerified && (b.originVerified = a.originVerified);
        return JSON.stringify(b)
    }

    function Na(a, b, c) {
        b.ok ? c(b) : (a = b.error || Fa(a), a.activityResult = b, c(Promise.reject(a)))
    }

    function Oa(a) {
        var b = a.navigator;
        return /Trident|MSIE|IEMobile/i.test(b && b.userAgent)
    }

    function Pa(a) {
        a = a.navigator;
        return /Edge/i.test(a && a.userAgent)
    }

    function Qa(a) {
        setTimeout(function() {
            throw a;
        })
    }

    function Ra(a, b, c, d) {
        this.a = a;
        this.Pb = b;
        this.D = c;
        this.Uc = d;
        this.Qb = null;
        this.Yb = !1;
        this.W = this.xb = this.Y = this.m = null;
        this.$b = this.Bc.bind(this)
    }
    e = Ra.prototype;
    e.connect = function(a) {
        if (this.Y) throw Error("already connected");
        this.Y = a;
        this.a.addEventListener("message", this.$b)
    };
    e.disconnect = function() {
        if (this.Y && (this.Y = null, this.m && (Sa(this.m), this.m = null), this.a.removeEventListener("message", this.$b), this.W)) {
            for (var a in this.W) {
                var b = this.W[a];
                b.port1 && Sa(b.port1);
                b.port2 && Sa(b.port2)
            }
            this.W = null
        }
    };
    e.isConnected = function() {
        return null != this.D
    };
    e.getTarget = function() {
        var a = Ta(this);
        if (!a) throw Error("not connected");
        return a
    };

    function Ta(a) {
        a.Y && !a.Qb && (a.Qb = "function" == typeof a.Pb ? a.Pb() : a.Pb);
        return a.Qb
    }
    e.getTargetOrigin = function() {
        if (null == this.D) throw Error("not connected");
        return this.D
    };
    e.sendConnectCommand = function() {
        var a = Oa(this.a) || Pa(this.a);
        this.sendCommand("connect", {
            acceptsChannel: a
        })
    };
    e.sendStartCommand = function(a) {
        var b = null;
        this.Yb && "function" == typeof this.a.MessageChannel && (b = new this.a.MessageChannel);
        b ? (this.sendCommand("start", a, [b.port2]), Ua(this, b.port1)) : this.sendCommand("start", a)
    };
    e.sendCommand = function(a, b, c) {
        var d = {
            sentinel: "__ACTIVITIES__",
            cmd: a,
            payload: b || null
        };
        if (this.m) this.m.postMessage(d, c || void 0);
        else {
            var f = this.getTarget(),
                g = "connect" == a ? null != this.D ? this.D : "*" : this.getTargetOrigin();
            f.postMessage(d, g, c || void 0)
        }
    };
    e.customMessage = function(a) {
        this.sendCommand("msg", a)
    };
    e.onCustomMessage = function(a) {
        this.xb = a
    };
    e.startChannel = function(a) {
        a = a || "";
        var b = Va(this, a);
        if (!b.port1) {
            var c = new this.a.MessageChannel;
            b.port1 = c.port1;
            b.port2 = c.port2;
            b.resolver(b.port1)
        }
        b.port2 && (this.sendCommand("cnset", {
            name: a
        }, [b.port2]), b.port2 = null);
        return b.promise
    };
    e.askChannel = function(a) {
        a = a || "";
        var b = Va(this, a);
        b.port1 || this.sendCommand("cnget", {
            name: a
        });
        return b.promise
    };

    function Va(a, b) {
        a.W || (a.W = {});
        var c = a.W[b];
        if (!c) {
            var d, c = new Promise(function(a) {
                    d = a
                }),
                c = {
                    port1: null,
                    port2: null,
                    resolver: d,
                    promise: c
                };
            a.W[b] = c
        }
        return c
    }

    function Ua(a, b) {
        a.m && Sa(a.m);
        a.m = b;
        a.m.onmessage = function(b) {
            var c = b.data,
                f = c && c.cmd,
                c = c && c.payload || null;
            f && a.ia(f, c, b)
        }
    }
    e.Bc = function(a) {
        if (!this.Uc || Ta(this) == a.source) {
            var b = a.data;
            if (b && "__ACTIVITIES__" == b.sentinel) {
                var c = b.cmd;
                if (!this.m || "connect" == c || "start" == c) {
                    var d = a.origin,
                        b = b.payload || null;
                    null == this.D && "start" == c && (this.D = d);
                    null == this.D && a.source && Ta(this) == a.source && (this.D = d);
                    d == this.D && this.ia(c, b, a)
                }
            }
        }
    };
    e.ia = function(a, b, c) {
        "connect" == a ? (this.m && (Sa(this.m), this.m = null), this.Yb = b && b.acceptsChannel || !1, this.Y(a, b)) : "start" == a ? ((c = c.ports && c.ports[0]) && Ua(this, c), this.Y(a, b)) : "msg" == a ? null != this.xb && null != b && this.xb(b) : "cnget" == a ? this.startChannel(b.name) : "cnset" == a ? (a = c.ports[0], b = Va(this, b.name), b.port1 = a, b.resolver(a)) : this.Y(a, b)
    };

    function Sa(a) {
        try {
            a.close()
        } catch (b) {}
    }

    function Wa(a, b, c) {
        var d = this;
        this.j = a;
        this.Xa = b;
        this.F = c || null;
        this.a = this.j.ownerDocument.defaultView;
        this.D = Ja(Ia(b));
        this.hb = !1;
        this.sa = null;
        this.gb = new Promise(function(a) {
            d.sa = a
        });
        this.Ta = null;
        this.Ba = new Promise(function(a) {
            d.Ta = a
        });
        this.I = null;
        this.Wa = new Promise(function(a) {
            d.I = a
        });
        this.Va = this.yb = null;
        this.o = new Ra(this.a, function() {
            return d.j.contentWindow
        }, this.D, !0)
    }
    e = Wa.prototype;
    e.getMode = function() {
        return "iframe"
    };
    e.connect = function() {
        var a;
        a = this.j;
        if ("isConnected" in a) a = a.isConnected;
        else {
            var b = a.ownerDocument && a.ownerDocument.documentElement;
            a = b && b.contains(a) || !1
        }
        if (!a) throw Error("iframe must be in DOM");
        this.o.connect(this.ia.bind(this));
        this.j.src = this.Xa;
        return this.gb
    };
    e.disconnect = function() {
        this.hb = !1;
        this.o.disconnect()
    };
    e.acceptResult = function() {
        return this.Wa
    };
    e.getTargetWin = function() {
        return this.j.contentWindow || null
    };
    e.message = function(a) {
        this.o.customMessage(a)
    };
    e.onMessage = function(a) {
        this.o.onCustomMessage(a)
    };
    e.messageChannel = function(a) {
        return this.o.askChannel(a)
    };
    e.whenReady = function() {
        return this.Ba
    };
    e.onResizeRequest = function(a) {
        var b = this;
        this.yb = a;
        Promise.resolve().then(function() {
            null != b.Va && a(b.Va)
        })
    };
    e.resized = function() {
        this.hb && this.o.sendCommand("resized", {
            height: this.j.offsetHeight
        })
    };
    e.ia = function(a, b) {
        "connect" == a ? (this.hb = !0, this.o.sendStartCommand(this.F), this.sa()) : "result" == a ? this.I && (a = b.code, b = new Ga(a, "failed" == a ? Error(b.data || "") : b.data, "iframe", this.o.getTargetOrigin(), !0, !0), Na(this.a, b, this.I), this.I = null, this.o.sendCommand("close"), this.disconnect()) : "ready" == a ? this.Ta && (this.Ta(), this.Ta = null) : "resize" == a && (this.Va = b.height, this.yb && this.yb(this.Va))
    };

    function Xa(a, b, c, d, f, g) {
        var h = this,
            k = d && ("_blank" == d || "_top" == d || "_" != d[0]);
        if (!k) throw Error('The only allowed targets are "_blank", "_top" and name targets');
        this.a = a;
        this.Tc = b;
        this.Xa = c;
        this.kc = d;
        this.F = f || null;
        this.s = g || {};
        this.sa = null;
        this.gb = new Promise(function(a) {
            h.sa = a
        });
        this.I = null;
        this.Wa = new Promise(function(a) {
            h.I = a
        });
        this.o = this.ca = this.Z = null
    }
    e = Xa.prototype;
    e.getMode = function() {
        return "_top" == this.kc ? "redirect" : "popup"
    };
    e.open = function() {
        return Ya(this)
    };
    e.whenConnected = function() {
        return this.gb
    };
    e.disconnect = function() {
        this.ca && (this.a.clearInterval(this.ca), this.ca = null);
        this.o && (this.o.disconnect(), this.o = null);
        if (this.Z) {
            try {
                this.Z.close()
            } catch (a) {}
            this.Z = null
        }
        this.I = null
    };
    e.getTargetWin = function() {
        return this.Z
    };
    e.acceptResult = function() {
        return this.Wa
    };
    e.message = function(a) {
        this.o.customMessage(a)
    };
    e.onMessage = function(a) {
        this.o.onCustomMessage(a)
    };
    e.messageChannel = function(a) {
        return this.o.askChannel(a)
    };

    function Ya(a) {
        var b = Za(a),
            c = a.Xa;
        if (!a.s.skipRequestInUrl) var d = a.s.returnUrl || Ka(a.a.location.href),
            f = Ma({
                requestId: a.Tc,
                returnUrl: d,
                args: a.F
            }),
            c = c + (-1 == c.indexOf("#") ? "#" : "&") + encodeURIComponent("__WA__") + "=" + encodeURIComponent(f);
        var g, h = a.kc;
        "_top" != h && Oa(a.a) && (h = "_top");
        try {
            g = a.a.open(c, h, b)
        } catch (k) {}
        if (!g && "_top" != h && !a.s.disableRedirectFallback) {
            h = "_top";
            try {
                g = a.a.open(c, h)
            } catch (k) {}
        }
        g ? (a.Z = g, "_top" != h && $a(a)) : ab(a, Error("failed to open window"));
        return a.Wa.catch(function() {})
    }

    function Za(a) {
        var b = a.a.screen,
            c = b.availWidth || b.width,
            d = b.availHeight || b.height,
            f = a.a == a.a.top,
            g = Pa(a.a),
            h = f && a.a.outerWidth > a.a.innerWidth ? Math.min(100, a.a.outerWidth - a.a.innerWidth) : g ? 100 : 0,
            k = f && a.a.outerHeight > a.a.innerHeight ? Math.min(100, a.a.outerHeight - a.a.innerHeight) : g ? 100 : 0,
            l = Math.max(c - h, .5 * c),
            n = Math.max(d - k, .5 * d),
            m = Math.floor(Math.min(600, .9 * l)),
            p = Math.floor(Math.min(600, .9 * n));
        a.s.width && (m = Math.min(a.s.width, l));
        a.s.height && (p = Math.min(a.s.height, n));
        a = Math.floor((b.width - m) / 2);
        b = Math.floor((b.height -
            p) / 2);
        m = {
            height: p,
            width: m,
            resizable: "yes",
            scrollbars: "yes"
        };
        g || (m.left = a, m.top = b);
        var p = "",
            B;
        for (B in m) p && (p += ","), p += B + "=" + m[B];
        return p
    }

    function $a(a) {
        a.ca = a.a.setInterval(function() {
            bb(a, !0)
        }, 500);
        a.o = new Ra(a.a, a.Z, null, !0);
        a.o.connect(a.ia.bind(a))
    }

    function bb(a, b) {
        if (!a.Z || a.Z.closed) a.ca && (a.a.clearInterval(a.ca), a.ca = null), a.a.setTimeout(function() {
            try {
                cb(a, "canceled", null)
            } catch (c) {
                ab(a, c)
            }
        }, b ? 3E3 : 0)
    }

    function ab(a, b) {
        a.I && a.I(Promise.reject(b));
        a.disconnect()
    }

    function cb(a, b, c) {
        if (a.I) {
            var d = a.o.isConnected();
            b = new Ga(b, c, "popup", d ? a.o.getTargetOrigin() : Ja(Ia(a.Xa)), d, d);
            Na(a.a, b, a.I);
            a.I = null
        }
        a.o && a.o.sendCommand("close");
        a.disconnect()
    }
    e.ia = function(a, b) {
        var c = this;
        "connect" == a ? (this.o.sendStartCommand(this.F), this.sa()) : "result" == a ? (a = b.code, cb(this, a, "failed" == a ? Error(b.data || "") : b.data)) : "check" == a && this.a.setTimeout(function() {
            return bb(c)
        }, 200)
    };

    function db(a, b, c, d, f) {
        this.a = a;
        this.vc = b;
        this.yc = c;
        this.D = d;
        this.Yc = f
    }
    db.prototype.getMode = function() {
        return "redirect"
    };
    db.prototype.acceptResult = function() {
        var a = this,
            b = new Ga(this.vc, this.yc, "redirect", this.D, this.Yc, !1);
        return new Promise(function(c) {
            Na(a.a, b, c)
        })
    };

    function eb(a) {
        var b = this;
        this.version = "1.24";
        this.a = a;
        this.dc = a.location.hash;
        this.Gb = {};
        this.A = {};
        this.oc = null;
        this.Sc = new Promise(function(a) {
            b.oc = a
        })
    }
    e = eb.prototype;
    e.openIframe = function(a, b, c) {
        var d = new Wa(a, b, c);
        return d.connect().then(function() {
            return d
        })
    };
    e.open = function(a, b, c, d, f) {
        return {
            targetWin: fb(this, a, b, c, d, f).getTargetWin()
        }
    };
    e.openWithMessaging = function(a, b, c, d, f) {
        var g = fb(this, a, b, c, d, f);
        return g.whenConnected().then(function() {
            return g
        })
    };
    e.onResult = function(a, b) {
        var c = this.Gb[a];
        c || (c = [], this.Gb[a] = c);
        c.push(b);
        var d = this.A[a];
        if (!d && this.dc) {
            try {
                var f = this.a,
                    g = La(this.dc).__WA_RES__;
                if (g) {
                    var h = JSON.parse(g);
                    if (h && h.requestId == a) {
                        var k;
                        var l = f.location.hash;
                        if (l) {
                            var n = encodeURIComponent("__WA_RES__") + "=",
                                g = -1;
                            do
                                if (g = l.indexOf(n, g), -1 != g) {
                                    var m = 0 < g ? l.substring(g - 1, g) : "";
                                    if ("" == m || "?" == m || "#" == m || "&" == m) {
                                        var p = l.indexOf("&", g + 1); - 1 == p && (p = l.length);
                                        l = l.substring(0, g) + l.substring(p + 1)
                                    } else g++
                                }
                            while (-1 != g && g < l.length)
                        }
                        k = l;
                        k = k || "";
                        if (k != f.location.hash && f.history && f.history.replaceState) try {
                            f.history.replaceState(f.history.state, "", k)
                        } catch (lb) {}
                        var B = h.code,
                            Rd = h.data,
                            lc = h.origin,
                            Sd = f.document.referrer && Ja(Ia(f.document.referrer)),
                            d = new db(f, B, Rd, lc, lc == Sd)
                    } else d = null
                } else d = null
            } catch (lb) {
                Qa(lb), this.oc(lb)
            }
            d && (this.A[a] = d)
        }
        var mc = d;
        mc && gb(mc, b)
    };
    e.onRedirectError = function(a) {
        this.Sc.then(a)
    };

    function fb(a, b, c, d, f, g) {
        var h = new Xa(a.a, b, c, d, f, g);
        h.open().then(function() {
            hb(a, b, h)
        });
        return h
    }

    function gb(a, b) {
        Promise.resolve().then(function() {
            b(a)
        })
    }

    function hb(a, b, c) {
        var d = a.Gb[b];
        d && d.forEach(function(a) {
            gb(c, a)
        });
        a.A[b] = c
    };

    function ib(a) {
        this.m = a
    }
    ib.prototype.acceptResult = function() {
        return this.m.acceptResult()
    };

    function jb(a, b, c) {
        this.O = new Wa(a, b, c);
        this.$a = {};
        this.ab = null
    }
    e = jb.prototype;
    e.whenReady = function() {
        return this.O.whenReady()
    };
    e.connect = function() {
        var a = this;
        return this.O.connect().then(function() {
            a.O.onMessage(function(b) {
                a.ab && a.ab(b);
                var c = b && b.RESPONSE;
                if (c && (b = a.$a[c[0]])) {
                    a: {
                        var d = c ? c[0] : null;
                        if (d && (d = Da[d])) {
                            c = new d(c);
                            break a
                        }
                        throw Error("Deserialization failed for " + c);
                    }
                    b(c)
                }
            })
        })
    };
    e.disconnect = function() {
        this.O.disconnect()
    };
    e.getMode = function() {
        return this.O.getMode()
    };
    e.acceptResult = function() {
        return this.O.acceptResult()
    };
    e.onResizeRequest = function(a) {
        return this.O.onResizeRequest(a)
    };
    e.messageDeprecated = function(a) {
        this.O.message(a);
        Ea("WARNING: messageDeprecated() is deprecated")
    };
    e.onMessageDeprecated = function(a) {
        this.ab = a;
        Ea("WARNING: use of deprecated API onMessageDeprecated()")
    };
    e.execute = function(a) {
        this.O.message({
            REQUEST: a.toArray()
        })
    };
    e.on = function(a, b) {
        a = (new a).label();
        if (!a) throw Error("Invalid data type");
        if (this.$a[a]) throw Error("Invalid type or duplicate callback for ", a);
        this.$a[a] = b
    };
    e.resized = function() {
        this.O.resized()
    };

    function kb(a) {
        this.g = new eb(a)
    }
    e = kb.prototype;
    e.openIframe = function(a, b, c) {
        var d = new jb(a, b, c);
        return d.connect().then(function() {
            return d
        })
    };
    e.open = function(a, b, c, d, f) {
        return this.g.open(a, b, c, d, f)
    };
    e.onResult = function(a, b) {
        this.g.onResult(a, function(a) {
            b(new ib(a))
        })
    };
    e.onRedirectError = function(a) {
        this.g.onRedirectError(a)
    };
    e.getOriginalWebActivityPorts = function() {
        return this.g
    };

    function mb() {
        var a = Date.now().toString(16),
            b = a.substring(a.length - 8).toUpperCase() + "-",
            c = 0,
            a = new Uint8Array(23);
        if (crypto && crypto.getRandomValues) {
            crypto.getRandomValues(a);
            for (var d = a.length - 1; - 1 < d; d--) a[d] %= 16
        } else
            for (d = a.length - 1; - 1 < d; d--) a[d] = Math.floor(16 * Math.random());
        for (var f = a, a = 9; 36 > a; a++) switch (a) {
            case 13:
            case 18:
            case 23:
                b += "-";
                break;
            case 14:
                b += "4";
                break;
            case 19:
                b += "0123456789ABCDEF" [f[c++] & 3 | 8];
                break;
            default:
                b += "0123456789ABCDEF" [f[c++]]
        }
        return b
    };
    var nb, ob = "Webkit webkit Moz moz ms O o".split(" "),
        pb = {
            "align-content": "normal",
            animation: "none",
            "align-items": "normal",
            "align-self": "auto",
            "alignment-baseline": "auto",
            "backface-visibility": "hidden",
            "background-clip": "border-box",
            "background-image": "none",
            "baseline-shift": "0",
            "block-size": "auto",
            border: "none",
            "border-collapse": "separate",
            bottom: "0",
            "box-sizing": "border-box",
            "break-after": "auto",
            "break-before": "auto",
            "break-inside": "auto",
            "buffered-rendering": "auto",
            "caption-side": "top",
            "caret-color": "rgb(51, 51, 51)",
            clear: "none",
            color: "rgb(51, 51, 51)",
            "color-rendering": "auto",
            "column-count": "auto",
            "column-fill": "balance",
            "column-gap": "normal",
            "column-rule-color": "rgb(51, 51, 51)",
            "column-rule-style": "none",
            "column-rule-width": "0",
            "column-span": "none",
            "column-width": "auto",
            contain: "none",
            "counter-increment": "none",
            "counter-reset": "none",
            cursor: "auto",
            direction: "inherit",
            display: "block",
            "empty-cells": "show",
            filter: "none",
            flex: "none",
            "flex-flow": "row nowrap",
            "float": "none",
            "flood-color": "rgb(0, 0, 0)",
            "flood-opacity": "1",
            font: "none",
            "font-size": "medium",
            "font-family": "",
            height: "auto",
            hyphens: "manual",
            "image-rendering": "auto",
            "inline-size": "",
            isolation: "auto",
            "justify-content": "normal",
            "justify-items": "normal",
            "justify-self": "auto",
            "letter-spacing": "normal",
            "lighting-color": "rgb(255, 255, 255)",
            "line-break": "auto",
            "line-height": "normal",
            mask: "none",
            "max-block-size": "none",
            "max-height": "none",
            "max-inline-size": "none",
            "max-width": "none",
            "min-block-size": "none",
            "min-height": "0",
            "min-inline-size": "0",
            "min-width": "0",
            "mix-blend-mode": "normal",
            "object-fit": "fill",
            "offset-distance": "none",
            "offset-path": "none",
            "offset-rotate": "auto 0deg",
            opacity: "1",
            order: "0",
            orphans: "2",
            outline: "none",
            "overflow-anchor": "auto",
            "overflow-wrap": "normal",
            overflow: "visible",
            padding: "0",
            page: "",
            perspective: "none",
            "pointer-events": "auto",
            position: "static",
            quotes: "",
            resize: "none",
            right: "0",
            "scroll-behavior": "auto",
            "tab-size": "8",
            "table-layout": "auto",
            "text-align": "start",
            "text-align-last": "auto",
            "text-anchor": "start",
            "text-combine-upright": "none",
            "text-decoration": "none",
            "text-indent": "0",
            "text-orientation": "mixed",
            "text-overflow": "clip",
            "text-rendering": "auto",
            "text-shadow": "none",
            "text-size-adjust": "auto",
            "text-transform": "none",
            "text-underline-position": "auto",
            top: "auto",
            "touch-action": "auto",
            transform: "none",
            transition: "none 0s ease 0s",
            "unicode-bidi": "normal",
            "user-select": "auto",
            "vector-effect": "none",
            "vertical-align": "baseline",
            visibility: "visible",
            "white-space": "normal",
            widows: "2",
            "word-break": "normal",
            "word-spacing": "0",
            "word-wrap": "normal",
            "writing-mode": "horizontal-tb",
            zoom: "1",
            "z-index": "auto"
        };

    function qb(a, b, c) {
        if (2 > b.length ? 0 : 0 == b.lastIndexOf("--", 0)) return b;
        nb || (nb = Object.create(null));
        var d = nb[b];
        if (!d || c) {
            d = b;
            if (void 0 === a[b]) {
                var f = b.charAt(0).toUpperCase() + b.slice(1);
                a: {
                    for (var g = 0; g < ob.length; g++) {
                        var h = ob[g] + f;
                        if (void 0 !== a[h]) {
                            f = h;
                            break a
                        }
                    }
                    f = ""
                }
                var k = f;
                void 0 !== a[k] && (d = k)
            }
            c || (nb[b] = d)
        }
        return d
    }

    function E(a, b) {
        for (var c in b) a.style.setProperty(qb(b, c), b[c].toString(), "important")
    }

    function rb(a, b) {
        for (var c in b) {
            var d = a,
                f = b[c],
                g = qb(d.style, c, void 0);
            g && (d.style[g] = f)
        }
    }

    function sb(a) {
        var b = ["height"],
            c = {};
        b.forEach(function(a) {
            c[a] = null
        });
        rb(a, c)
    };

    function F(a, b, c) {
        var d;
        b = a.createElement(b);
        for (var f in c) "style" == f ? rb(b, c[f]) : b.setAttribute(f, c[f]);
        if (null != d)
            if ("string" == typeof d) b.textContent = d;
            else if (d.nodeType) b.appendChild(d);
        else if ("length" in d)
            for (c = 0; c < d.length; c++) b.appendChild(d[c]);
        else C(!1, "Unsupported content: %s", d);
        return b
    }

    function tb(a, b) {
        var c = F(a.getWin().document, "style", {
            type: "text/css"
        });
        c.textContent = b;
        a.getHead().appendChild(c)
    }

    function ub(a) {
        a = a.navigator;
        return /Edge/i.test(a && a.userAgent)
    };

    function vb(a) {
        for (var b = wb, c = a ? "string" == typeof a ? a : a.lang || a.ownerDocument && a.ownerDocument.documentElement.lang : "", d = (c && c.toLowerCase() || "en").replace(/_/g, "-"); d;) {
            if (d in b) return b[d];
            var f = d.lastIndexOf("-"),
                d = -1 != f ? d.substring(0, f) : ""
        }
        return b.en
    };
    var xb = Object.prototype.toString;

    function G(a) {
        return "[object Object]" === xb.call(a)
    }

    function yb(a, b) {
        for (var c in a)
            if (a[c] === b) return !0;
        return !1
    }

    function H(a) {
        return !0 === a || !1 === a
    };
    var zb, Ab;

    function Bb(a) {
        var b;
        zb || (zb = self.document.createElement("a"), Ab = self.UrlCache || (self.UrlCache = Object.create(null)));
        var c = Ab[a];
        if (c) return c;
        var d = zb;
        d.href = a;
        d.protocol || (d.href = d.href);
        var f = {
            href: d.href,
            protocol: d.protocol,
            host: d.host,
            hostname: d.hostname,
            port: "0" == d.port ? "" : d.port,
            pathname: d.pathname,
            search: d.search,
            hash: d.hash,
            origin: ""
        };
        "/" !== f.pathname[0] && (f.pathname = "/" + f.pathname);
        if ("http:" == f.protocol && 80 == f.port || "https:" == f.protocol && 443 == f.port) f.port = "", f.host = f.hostname;
        f.origin =
            d.origin && "null" != d.origin ? d.origin : "data:" != f.protocol && f.host ? f.protocol + "//" + f.host : f.href;
        var g = f;
        return Ab[a] = g
    }

    function Cb(a) {
        return a ? (/^[?#]/.test(a) ? a.slice(1) : a).split("&").reduce(function(a, c) {
            var b = c.split("=");
            c = decodeURIComponent(b[0] || "");
            b = decodeURIComponent(b[1] || "");
            c && (a[c] = b);
            return a
        }, {}) : {}
    }

    function Db(a) {
        var b;
        b = Eb.hr1;
        null == b && (b = 1);
        if (0 === b) b = "_";
        else {
            var c = Date.now();
            b = String(1 >= b ? c : Math.floor(c / b))
        }
        var d = a.indexOf("?"),
            f = a.indexOf("#"),
            c = ""; - 1 != f && (c = a.substring(f), a = a.substring(0, f)); - 1 == d ? a += "?" : d < a.length - 1 && (a += "&");
        a += encodeURIComponent("_") + "=" + encodeURIComponent(b);
        return a + c
    };
    var Eb = {
        nocache: 1,
        hr1: 36E5,
        hr12: 432E5
    };

    function Fb() {
        return Bb("https://news.google.com").origin
    }

    function I(a, b) {
        return Db("https://news.google.com" + (void 0 === b ? "" : b) + "/swg/_/ui/v1" + a)
    }

    function J(a) {
        return Object.assign(a, {
            _client: "SwG 0.1.22.73"
        })
    };
    var Gb = {
        frameborder: "0",
        scrolling: "no"
    };

    function Hb(a, b, c, d) {
        this.c = a;
        this.a = a.win();
        this.b = this.a.document;
        this.g = a.activities();
        this.j = F(this.b, "iframe", Gb);
        this.ac = b;
        this.s = c;
        this.G = d;
        this.fa = I("/smartboxiframe");
        var f = {
                productId: this.c.pageConfig().getProductId(),
                publicationId: this.c.pageConfig().getPublicationId(),
                theme: this.s && this.s.theme || "light",
                lang: this.s && this.s.lang || "en"
            },
            g = this.s && this.s.messageTextColor;
        g && (f.messageTextColor = g);
        this.F = J(f)
    }
    Hb.prototype.Dc = function(a) {
        if (a && a.getIsClicked()) {
            if (!this.G) throw Error("No callback!");
            this.G()
        }
    };
    Hb.prototype.start = function() {
        var a = this;
        this.ac.addEventListener("click", function() {
            a.G()
        });
        E(this.j, {
            opacity: 1,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            height: "100%",
            right: 0,
            width: "100%"
        });
        this.ac.appendChild(this.j);
        var b = this.c.analytics().getContext().toArray();
        this.F.analyticsContext = b;
        this.g.openIframe(this.j, this.fa, this.F).then(function(b) {
            b.on(x, a.Dc.bind(a))
        });
        return this.j
    };
    var wb = {
        en: "Subscribe with Google",
        ar: "Google \u0627\u0634\u062a\u0631\u0643\u00a0\u0645\u0639",
        de: "Abonnieren mit Google",
        es: "Suscr\u00edbete con Google",
        "es-latam": "Suscr\u00edbete con Google",
        "es-latn": "Suscr\u00edbete con Google",
        fr: "S'abonner avec Google",
        hi: "Google \u0915\u0947 \u095b\u0930\u093f\u092f\u0947 \u0938\u0926\u0938\u094d\u092f\u0924\u093e",
        id: "Berlangganan dengan Google",
        it: "Abbonati con Google",
        jp: "Google \u3067\u8cfc\u8aad",
        ko: "Google \uc744 \ud1b5\ud55c\uad6c\ub3c5",
        ms: "Langgan dengan Google",
        nl: "Abonneren via Google",
        no: "Abonner med Google",
        pl: "Subskrybuj z Google",
        pt: "Subscrever com o Google",
        "pt-br": "Assine com o Google",
        ru: "\u041f\u043e\u0434\u043f\u0438cka \u0447\u0435\u0440\u0435\u0437 Google",
        se: "Prenumerera med Google",
        th: "\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e1f\u0e32\u0e19 Google",
        tr: "Google ile Abone Ol",
        uk: "\u041f\u0456\u0434\u043f\u0438\u0441\u0430\u0442\u0438\u0441\u044f \u0447\u0435\u0440\u0435\u0437 Google",
        "zh-tw": "\u900f\u904e Google \u8a02\u95b1"
    };

    function K(a, b) {
        this.b = a;
        this.fb = b
    }
    K.prototype.init = function() {
        var a = this.b.getHead();
        if (a) {
            var b = a.querySelector('link[href="https://news.google.com/swg/js/v1/swg-button.css"]');
            b || a.appendChild(F(this.b.getWin().document, "link", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://news.google.com/swg/js/v1/swg-button.css"
            }))
        }
    };
    K.prototype.create = function(a, b) {
        var c = F(this.b.getWin().document, "button", {});
        return this.attach(c, a, b)
    };
    K.prototype.attach = function(a, b, c) {
        var d = this,
            f = Ib(b);
        b = ("function" == typeof b ? b : null) || c;
        var g = f.theme;
        a.classList.add("swg-button-" + g);
        a.setAttribute("role", "button");
        f.lang && a.setAttribute("lang", f.lang);
        a.setAttribute("title", vb(a) || "");
        a.addEventListener("click", b);
        a.addEventListener("click", function() {
            d.fb.then(function(a) {
                a.eventManager().logSwgEvent(1007, !0)
            })
        });
        this.fb.then(function(a) {
            a.eventManager().logSwgEvent(6)
        });
        return a
    };

    function Ib(a) {
        a = a && "function" != typeof a ? a : {
            theme: "light"
        };
        var b = a.theme;
        "light" !== b && "dark" !== b && (a.theme = "light");
        return a
    }
    K.prototype.attachSmartButton = function(a, b, c, d) {
        var f = this,
            g = Ib(c);
        c = ("function" == typeof c ? c : null) || d;
        b.classList.add("swg-smart-button");
        b.addEventListener("click", function() {
            return f.fb.then(function(a) {
                return a.eventManager().logSwgEvent(1007, !0)
            })
        });
        return (new Hb(a, b, g, c)).start()
    };

    function Jb() {
        this.v = {};
        this.A = {}
    }
    e = Jb.prototype;
    e.setOnEntitlementsResponse = function(a) {
        L(this, 1, a)
    };
    e.triggerEntitlementsResponse = function(a) {
        return M(this, 1, a.then(function(a) {
            return a.clone()
        }))
    };
    e.hasEntitlementsResponsePending = function() {
        return !!this.A[1]
    };
    e.setOnLoginRequest = function(a) {
        L(this, 4, a)
    };
    e.triggerLoginRequest = function(a) {
        return M(this, 4, a)
    };
    e.setOnLinkProgress = function(a) {
        L(this, 5, a)
    };
    e.triggerLinkProgress = function() {
        return M(this, 5, !0)
    };
    e.resetLinkProgress = function() {
        5 in this.A && delete this.A[5]
    };
    e.setOnLinkComplete = function(a) {
        L(this, 6, a)
    };
    e.triggerLinkComplete = function() {
        return M(this, 6, !0)
    };
    e.hasLinkCompletePending = function() {
        return !!this.A[6]
    };
    e.setOnSubscribeRequest = function(a) {
        L(this, 2, a)
    };
    e.triggerSubscribeRequest = function() {
        return M(this, 2, !0)
    };
    e.hasSubscribeRequestCallback = function() {
        return !!this.v[2]
    };
    e.setOnSubscribeResponse = function(a) {
        L(this, 3, a)
    };
    e.setOnContributionResponse = function(a) {
        L(this, 9, a)
    };
    e.triggerSubscribeResponse = function(a) {
        return M(this, 3, a.then(function(a) {
            return a.clone()
        }))
    };
    e.triggerContributionResponse = function(a) {
        return M(this, 9, a.then(function(a) {
            return a.clone()
        }))
    };
    e.hasSubscribeResponsePending = function() {
        return !!this.A[3]
    };
    e.hasContributionResponsePending = function() {
        return !!this.A[9]
    };
    e.setOnFlowStarted = function(a) {
        L(this, 7, a)
    };
    e.triggerFlowStarted = function(a, b) {
        return M(this, 7, {
            flow: a,
            data: b || {}
        })
    };
    e.setOnFlowCanceled = function(a) {
        L(this, 8, a)
    };
    e.triggerFlowCanceled = function(a, b) {
        return M(this, 8, {
            flow: a,
            data: b || {}
        })
    };

    function L(a, b, c) {
        a.v[b] = c;
        b in a.A && Kb(a, b, c, a.A[b])
    }

    function M(a, b, c) {
        a.A[b] = c;
        var d = a.v[b];
        d && Kb(a, b, d, c);
        return !!d
    }

    function Kb(a, b, c, d) {
        Promise.resolve().then(function() {
            c(d);
            b in a.A && delete a.A[b]
        })
    };

    function Lb() {}
    e = Lb.prototype;
    e.getElement = function() {};
    e.init = function() {};
    e.resized = function() {};
    e.whenComplete = function() {};
    e.shouldFadeBody = function() {};
    e.hasLoadingIndicator = function() {};

    function Mb(a) {
        setTimeout(function() {
            throw a;
        })
    };

    function Nb(a, b, c, d) {
        return a.acceptResult().then(function(a) {
            if (a.origin != b || c && !a.originVerified || d && !a.secureChannel) throw Error("channel mismatch");
            return a.data
        })
    };
    var Ob = {
        frameborder: "0",
        scrolling: "no"
    };

    function N(a, b, c, d, f, g) {
        f = void 0 === f ? !1 : f;
        g = void 0 === g ? !1 : g;
        var h = this;
        this.a = a;
        this.b = this.a.document;
        this.j = F(this.b, "iframe", Ob);
        this.g = b;
        this.fa = c;
        this.F = d || {};
        this.Wc = f;
        this.Ec = g;
        this.lc = this.m = null;
        this.ja = new Promise(function(a) {
            h.lc = a
        })
    }
    aa(N, Lb);
    e = N.prototype;
    e.getElement = function() {
        return this.j
    };
    e.init = function(a) {
        var b = this;
        return this.g.openIframe(this.j, this.fa, this.F).then(function(c) {
            return Pb(b, c, a)
        })
    };
    e.shouldFadeBody = function() {
        return this.Wc
    };
    e.hasLoadingIndicator = function() {
        return this.Ec
    };

    function Pb(a, b, c) {
        a.m = b;
        a.lc(b);
        a.m.onResizeRequest(function(b) {
            c.resizeView(a, b)
        });
        return a.m.whenReady()
    }
    e.messageDeprecated = function(a) {
        this.ja.then(function(b) {
            b.messageDeprecated(a)
        })
    };
    e.onMessageDeprecated = function(a) {
        this.ja.then(function(b) {
            b.onMessageDeprecated(a)
        })
    };
    e.on = function(a, b) {
        this.ja.then(function(c) {
            c.on(a, b)
        })
    };
    e.execute = function(a) {
        this.ja.then(function(b) {
            b.execute(a)
        })
    };
    e.acceptResult = function() {
        return this.ja.then(function(a) {
            return a.acceptResult()
        })
    };
    e.acceptResultAndVerify = function(a, b, c) {
        return this.ja.then(function(d) {
            return Nb(d, a, b, c)
        })
    };
    e.whenComplete = function() {
        return this.acceptResult()
    };
    e.onCancel = function(a) {
        this.acceptResult().catch(function(b) {
            D(b) && a();
            throw b;
        })
    };
    e.resized = function() {
        this.m && this.m.resized()
    };
    var Qb = {
        "-": "+",
        _: "/",
        ".": "="
    };

    function Rb(a) {
        for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            C(255 >= d, "Characters must be in range [0,255]");
            b[c] = d
        }
        return b
    }

    function Sb(a) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = String.fromCharCode(a[c]);
        return b.join("")
    }

    function Tb(a) {
        if ("undefined" !== typeof TextDecoder) return (new TextDecoder("utf-8")).decode(a);
        var b = Sb(new Uint8Array(a.buffer || a));
        return decodeURIComponent(escape(b))
    }

    function Ub(a) {
        return "undefined" !== typeof TextEncoder ? (new TextEncoder("utf-8")).encode(a) : Rb(unescape(encodeURIComponent(a)))
    }

    function Vb(a) {
        var b = atob(a.replace(/[-_.]/g, function(a) {
            return Qb[a]
        }));
        return Rb(b)
    };

    function Wb(a) {
        return JSON.parse(a)
    }

    function Xb(a, b) {
        try {
            return Wb(a)
        } catch (c) {
            b && b(c)
        }
    };

    function Yb() {}
    Yb.prototype.decode = function(a) {
        return Zb(a).payload
    };

    function Zb(a) {
        function b() {
            throw Error('Invalid token: "' + a + '"');
        }
        var c = a.split(".");
        3 != c.length && b();
        var d = Vb(c[0]),
            f = Vb(c[1]);
        return {
            header: Xb(Tb(d), b),
            payload: Xb(Tb(f), b),
            verifiable: c[0] + "." + c[1],
            sig: c[2]
        }
    };

    function $b(a, b, c, d, f, g, h) {
        this.service = a;
        this.raw = b;
        this.entitlements = c;
        this.isReadyToPay = g || !1;
        this.decryptedDocumentKey = h || null;
        this.Cb = d;
        this.Zb = f
    }
    e = $b.prototype;
    e.clone = function() {
        return new $b(this.service, this.raw, this.entitlements.map(function(a) {
            return a.clone()
        }), this.Cb, this.Zb, this.isReadyToPay, this.decryptedDocumentKey)
    };
    e.json = function() {
        return {
            service: this.service,
            entitlements: this.entitlements.map(function(a) {
                return a.json()
            }),
            isReadyToPay: this.isReadyToPay
        }
    };
    e.enablesThis = function(a) {
        return this.enables(this.Cb, a)
    };
    e.enablesAny = function(a) {
        for (var b = 0; b < this.entitlements.length; b++)
            if (0 < this.entitlements[b].products.length && (!a || a == this.entitlements[b].source)) return !0;
        return !1
    };
    e.enables = function(a, b) {
        return a ? !!this.getEntitlementFor(a, b) : !1
    };
    e.getEntitlementForThis = function(a) {
        return this.getEntitlementFor(this.Cb, a)
    };
    e.getEntitlementFor = function(a, b) {
        if (a && 0 < this.entitlements.length)
            for (var c = 0; c < this.entitlements.length; c++)
                if (this.entitlements[c].enables(a) && (!b || b == this.entitlements[c].source)) return this.entitlements[c];
        return null
    };
    e.getEntitlementForSource = function(a) {
        if (0 < this.entitlements.length)
            for (var b = 0; b < this.entitlements.length; b++)
                if (this.entitlements[b].subscriptionToken && a == this.entitlements[b].source) return this.entitlements[b];
        return null
    };
    e.ack = function() {
        this.Zb(this)
    };

    function ac(a, b, c) {
        this.source = a;
        this.products = b;
        this.subscriptionToken = c
    }
    ac.prototype.clone = function() {
        return new ac(this.source, this.products.slice(0), this.subscriptionToken)
    };
    ac.prototype.json = function() {
        return {
            source: this.source,
            products: this.products,
            subscriptionToken: this.subscriptionToken
        }
    };
    ac.prototype.enables = function(a) {
        if (!a) return !1;
        var b = a.indexOf(":");
        return -1 != b && this.products.includes(a.substring(0, b + 1) + "*") ? !0 : this.products.includes(a)
    };

    function bc(a) {
        var b = Array.isArray(a) ? a : [a];
        return b.map(function(a) {
            a || (a = {});
            return new ac(a.source || "", a.products || [], a.subscriptionToken)
        })
    };

    function cc(a, b) {
        this.idToken = a;
        this.data = b;
        this.id = b.sub;
        this.email = b.email;
        this.emailVerified = b.email_verified;
        this.name = b.name;
        this.givenName = b.given_name;
        this.familyName = b.family_name;
        this.pictureUrl = b.picture
    }
    cc.prototype.clone = function() {
        return new cc(this.idToken, this.data)
    };
    cc.prototype.json = function() {
        return {
            id: this.id,
            email: this.email,
            emailVerified: this.emailVerified,
            name: this.name,
            givenName: this.givenName,
            familyName: this.familyName,
            pictureUrl: this.pictureUrl
        }
    };

    function O(a, b, c, d, f, g) {
        this.raw = a;
        this.purchaseData = b;
        this.userData = c;
        this.entitlements = d;
        this.productType = f;
        this.qa = g
    }
    O.prototype.clone = function() {
        return new O(this.raw, this.purchaseData, this.userData, this.entitlements, this.productType, this.qa)
    };
    O.prototype.json = function() {
        return {
            purchaseData: this.purchaseData.json(),
            userData: this.userData ? this.userData.json() : null,
            entitlements: this.entitlements ? this.entitlements.json() : null,
            productType: this.productType
        }
    };
    O.prototype.complete = function() {
        return this.qa()
    };

    function P(a, b) {
        this.data = this.raw = a;
        this.signature = b
    }
    P.prototype.clone = function() {
        return new P(this.raw, this.signature)
    };
    P.prototype.json = function() {
        return {
            data: this.raw,
            signature: this.signature
        }
    };
    var dc = {
            UNKNOWN: "unknown",
            NON_SUBSCRIBER: "non_subscriber",
            SUBSCRIBER: "subscriber",
            PAST_SUBSCRIBER: "past_subscriber"
        },
        ec = {
            IMPRESSION_PAYWALL: "paywall",
            IMPRESSION_AD: "ad_shown",
            IMPRESSION_OFFERS: "offers_shown",
            ACTION_SUBSCRIPTIONS_LANDING_PAGE: "subscriptions_landing_page",
            ACTION_OFFER_SELECTED: "offer_selected",
            ACTION_PAYMENT_FLOW_STARTED: "payment_flow_start",
            ACTION_PAYMENT_COMPLETED: "payment_complete",
            EVENT_CUSTOM: "custom"
        };
    var fc = {
        GENERAL: "general",
        PAYWALL: "paywall"
    };

    function gc(a, b, c, d) {
        this.entitlements = a;
        this.userData = b;
        this.purchaseDataList = c;
        this.purchaseData = c[0];
        this.qa = d
    }
    gc.prototype.clone = function() {
        return new gc(this.entitlements, this.userData, this.purchaseDataList, this.qa)
    };
    gc.prototype.json = function() {
        return {
            entitlements: this.entitlements.json(),
            userData: this.userData.json(),
            purchaseDataList: this.purchaseDataList.map(function(a) {
                return a.json()
            }),
            purchaseData: this.purchaseData.json()
        }
    };
    gc.prototype.complete = function() {
        return this.qa()
    };
    var hc = {
        IMMEDIATE_WITH_TIME_PRORATION: 1
    };

    function Q(a, b, c) {
        c = void 0 === c ? "SUBSCRIPTION" : c;
        this.c = a;
        this.Pa = a.payClient();
        this.H = a.pageConfig();
        this.h = a.dialogManager();
        this.Ea = "string" == typeof b ? {
            skuId: b
        } : b;
        this.Qc = c;
        this.J = a.analytics();
        this.l = a.eventManager();
        this.prorationMode = this.Ea.replaceSkuProrationMode;
        this.prorationEnum = 0;
        this.prorationMode ? this.prorationEnum = hc[this.prorationMode] : this.Ea.oldSku && (this.prorationEnum = hc.IMMEDIATE_WITH_TIME_PRORATION)
    }
    Q.prototype.start = function() {
        var a = Object.assign({}, this.Ea, {
            publicationId: this.H.getPublicationId()
        });
        this.prorationEnum && (a.replaceSkuProrationMode = this.prorationEnum);
        this.c.callbacks().triggerFlowStarted("subscribe", this.Ea);
        this.J.setSku(this.Ea.skuId);
        this.l.logSwgEvent(1005, !0);
        this.Pa.start({
            apiVersion: 1,
            allowedPaymentMethods: ["CARD"],
            environment: "PRODUCTION",
            playEnvironment: "PROD",
            swg: a,
            i: {
                startTimeMs: Date.now(),
                googleTransactionId: this.J.getTransactionId(),
                productType: this.Qc
            }
        }, {
            forceRedirect: "redirect" == this.c.config().windowOpenMode
        });
        return Promise.resolve()
    };

    function ic(a) {
        this.a = a.win();
        this.c = a;
        this.g = a.activities();
        this.h = a.dialogManager();
        this.Ba = this.ma = this.f = null;
        this.J = a.analytics();
        this.l = a.eventManager()
    }

    function jc(a) {
        var b = a.eventManager();
        a.payClient().onResponse(function(c) {
            a.entitlementsManager().blockNextNotification();
            var d = new ic(a),
                f = kc(a, c, d.complete.bind(d));
            a.callbacks().triggerSubscribeResponse(f);
            return f.then(function(a) {
                b.logSwgEvent(1001, !0);
                d.start(a)
            }, function(b) {
                D(b) ? a.callbacks().triggerFlowCanceled("subscribe") : (a.eventManager().logSwgEvent(2E3, !1), a.jserror().error("Pay failed", b));
                throw b;
            })
        })
    }
    ic.prototype.start = function(a) {
        var b = this;
        if (!this.J.getSku()) {
            this.J.addLabels(["redirect"]);
            var c = nc(a.purchaseData);
            c && this.J.setSku(c)
        }
        this.l.logSwgEvent(10, !0);
        this.c.entitlementsManager().reset(!0);
        this.ma = a;
        c = {
            publicationId: this.c.pageConfig().getPublicationId(),
            productType: this.ma.productType
        };
        a.userData && a.entitlements ? (c.idToken = a.userData.idToken, this.c.entitlementsManager().pushNextEntitlements(a.entitlements.raw)) : c.loginHint = a.userData && a.userData.email;
        this.f = new N(this.a, this.g, I("/payconfirmiframe"),
            J(c), !0);
        this.f.on(v, this.Ac.bind(this));
        this.f.acceptResult().then(function() {
            b.h.completeView(b.f)
        });
        return this.Ba = this.h.openView(this.f)
    };
    ic.prototype.Ac = function(a) {
        var b = a.getJwt();
        b && this.c.entitlementsManager().pushNextEntitlements(b)
    };
    ic.prototype.complete = function() {
        var a = this;
        this.l.logSwgEvent(1002, !0);
        this.c.entitlementsManager().unblockNextNotification();
        this.Ba.then(function() {
            var b = new r;
            b.setComplete(!0);
            a.f.execute(b)
        });
        return this.f.acceptResult().catch(function() {}).then(function() {
            a.l.logSwgEvent(1003, !0);
            a.c.entitlementsManager().setToastShown(!0)
        })
    };

    function kc(a, b, c) {
        return b.then(function(b) {
            var d = a.analytics().getHasLogged(),
                g, h = void 0;
            if ("object" === typeof b && b.googleTransactionId) {
                var k = a.analytics().getTransactionId(),
                    l = b.googleTransactionId;
                d ? k === l ? g = 3001 : (h = new u, h.setGpayTransactionId(l), g = 3002) : (a.analytics().setTransactionId(l), g = 3004)
            } else h = new u, h.setHadLogged(d), g = 3003;
            a.eventManager().logSwgEvent(g, !0, h);
            var n = null,
                m = null;
            g = null;
            b && ("string" == typeof b ? m = b : ("productType" in b && (g = b.productType), "swgCallbackData" in b ? n = b.swgCallbackData :
                "integratorClientCallbackData" in b && (m = b.integratorClientCallbackData)));
            g || (g = "SUBSCRIPTION");
            m && !n && (m = atob(m)) && (n = Wb(m).swgCallbackData);
            if (!n) throw Error("unexpected payment response");
            b = m = JSON.stringify(n);
            var m = new P(n.purchaseData, n.purchaseDataSignature),
                p;
            if (p = n.idToken) {
                var B = (new Yb).decode(p);
                p = new cc(p, B)
            } else p = null;
            n = n.signedEntitlements ? a.entitlementsManager().parseEntitlements(n) : null;
            return new O(b, m, p, n, g, c)
        })
    }

    function nc(a) {
        return (a = Xb(a.raw)) && a.productId || null
    };

    function oc(a, b) {
        this.c = a;
        this.s = b;
        this.a = a.win();
        this.g = a.activities();
        this.h = a.dialogManager();
        var c = b && b.isClosable || !0;
        this.f = new N(this.a, this.g, I("/contributionsiframe"), J({
            productId: a.pageConfig().getProductId(),
            publicationId: a.pageConfig().getPublicationId(),
            productType: "UI_CONTRIBUTION",
            list: b && b.list || "default",
            skus: b && b.skus || null,
            isClosable: c
        }), !0)
    }
    oc.prototype.va = function(a) {
        a.getSubscriberOrMember() && this.c.callbacks().triggerLoginRequest({
            linkRequested: !!a.getLinkRequested()
        })
    };
    oc.prototype.Mb = function(a) {
        (a = a.getSku()) && (new Q(this.c, a, "UI_CONTRIBUTION")).start()
    };
    oc.prototype.start = function() {
        var a = this;
        this.c.callbacks().triggerFlowStarted("showContributionOptions");
        this.f.onCancel(function() {
            a.c.callbacks().triggerFlowCanceled("showContributionOptions")
        });
        this.f.on(t, this.va.bind(this));
        this.f.on(Ca, this.Mb.bind(this));
        return this.h.openView(this.f)
    };

    function pc(a, b) {
        this.c = a;
        this.a = a.win();
        this.g = a.activities();
        this.h = a.dialogManager();
        this.V = this.f = null;
        var c = {
            entitlements: null,
            consent: !0
        };
        this.s = Object.assign(c, b || {})
    }
    pc.prototype.start = function() {
        var a = this,
            b = this.s.entitlements;
        if (!b || !b.getEntitlementForSource("google")) throw Error('No entitlements with "google" source');
        this.c.callbacks().triggerFlowStarted("completeDeferredAccountCreation");
        this.f = new N(this.a, this.g, I("/recoveriframe"), J({
            publicationId: this.c.pageConfig().getPublicationId(),
            productId: this.c.pageConfig().getProductId(),
            entitlements: b && b.raw || null,
            consent: this.s.consent
        }), !0);
        this.V = this.h.openView(this.f);
        return this.f.acceptResult().then(function(b) {
            return qc(a,
                b.data)
        }, function(b) {
            D(b) ? a.c.callbacks().triggerFlowCanceled("completeDeferredAccountCreation") : a.h.completeView(a.f);
            throw b;
        })
    };

    function qc(a, b) {
        a.c.entitlementsManager().blockNextNotification();
        var c = b.entitlements,
            d = b.idToken,
            f = b.productType,
            g = a.c.entitlementsManager().parseEntitlements({
                signedEntitlements: c
            }),
            d = new cc(d, (new Yb).decode(d));
        b = b.purchaseDataList ? b.purchaseDataList.map(function(a) {
            return new P(a.data, a.signature)
        }) : [new P(b.purchaseData.data, b.purchaseData.signature)];
        var h = new ic(a.c),
            k = h.complete.bind(h),
            k = new gc(g, d, b, k);
        a.c.eventManager().logSwgEvent(1010, !0);
        h.start(new O("", b[0], d, g, f, function() {
            return Promise.resolve()
        }));
        return k
    };

    function rc(a) {
        var b = a.readyState;
        return "loading" != b && "uninitialized" != b
    }

    function sc(a, b) {
        var c = rc,
            d = c(a);
        if (d) b(a);
        else {
            var f = function() {
                c(a) && (d || (d = !0, b(a)), a.removeEventListener("readystatechange", f))
            };
            a.addEventListener("readystatechange", f)
        }
    }

    function tc(a) {
        return new Promise(function(b) {
            sc(a, b)
        })
    };

    function uc(a) {
        var b = !!a.document;
        this.a = b ? a : a.defaultView;
        this.b = b ? a.document : a
    }
    e = uc.prototype;
    e.getWin = function() {
        return this.a
    };
    e.getRootNode = function() {
        return this.b
    };
    e.getRootElement = function() {
        return this.b.documentElement
    };
    e.getHead = function() {
        return this.b.head
    };
    e.getBody = function() {
        return this.b.body
    };
    e.isReady = function() {
        return rc(this.b)
    };
    e.whenReady = function() {
        return tc(this.b)
    };
    e.addToFixedLayer = function() {
        return Promise.resolve()
    };

    function vc(a) {
        return 9 === a.nodeType || a.document ? new uc(a) : a
    };

    function R(a, b, c) {
        var d = "ease-out",
            f = a.ownerDocument.defaultView,
            g = a.style.transition || "";
        return (new Promise(function(g) {
            f.setTimeout(function() {
                f.setTimeout(g, c);
                var h = c + "ms " + d;
                E(a, Object.assign({
                    transition: "transform " + h + ", opacity " + h
                }, b))
            })
        })).then(function() {
            E(a, {
                transition: g
            })
        })
    };

    function wc(a, b) {
        this.b = a;
        this.N = this.b.getWin().document.createElement("swg-popup-background");
        E(this.N, {
            "z-index": b,
            display: "none",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            "background-color": "rgba(32, 33, 36, .6)"
        })
    }
    e = wc.prototype;
    e.getElement = function() {
        return this.N
    };
    e.isAttached = function() {
        return !!this.N.parentNode
    };
    e.attach = function() {
        this.b.getBody().appendChild(this.N)
    };
    e.destroy = function() {
        this.b.getBody().removeChild(this.N)
    };
    e.show = function(a) {
        a = void 0 === a ? !0 : a;
        E(this.N, {
            display: "block",
            opacity: a ? 0 : 1
        });
        if (a) return R(this.N, {
            opacity: 1
        }, 300)
    };
    e.hide = function(a) {
        var b = this;
        if (void 0 === a || a) return R(this.N, {
            opacity: 0
        }, 300).then(function() {
            E(b.N, {
                display: "none"
            })
        });
        E(this.N, {
            display: "none"
        })
    };

    function xc(a) {
        this.b = a;
        this.xa = F(this.b, "swg-loading-container", {});
        this.hc = F(this.b, "swg-loading", {});
        this.xa.appendChild(this.hc);
        this.xa.style.setProperty("display", "none", "important");
        var b = this.hc;
        a = F(this.b, "swg-loading-animate", {});
        b.appendChild(a);
        b = F(this.b, "swg-loading-image", {});
        a.appendChild(b)
    }
    xc.prototype.getElement = function() {
        return this.xa
    };
    xc.prototype.show = function() {
        this.xa.style.removeProperty("display")
    };
    xc.prototype.hide = function() {
        this.xa.style.setProperty("display", "none", "important")
    };
    var yc = {
        frameborder: 0,
        scrolling: "no",
        src: "about:blank"
    };

    function zc(a, b) {
        b = void 0 === b ? {} : b;
        var c = this,
            d = Object.assign({}, yc, b);
        this.j = F(a, "iframe", d);
        E(this.j, pb);
        this.Ua = new Promise(function(a) {
            c.j.onload = a
        })
    }
    e = zc.prototype;
    e.whenReady = function() {
        return this.Ua
    };
    e.getElement = function() {
        return this.j
    };
    e.getDocument = function() {
        var a = this.getElement().contentDocument || this.getElement().contentWindow && this.getElement().contentWindow.document;
        if (!a) throw Error("not loaded");
        return a
    };
    e.getBody = function() {
        return this.getDocument().body
    };
    e.isConnected = function() {
        var a;
        a = this.getElement();
        if ("isConnected" in a) a = a.isConnected;
        else {
            var b = a.ownerDocument && a.ownerDocument.documentElement;
            a = b && b.contains(a) || !1
        }
        return a
    };
    var Ac = {
            "min-height": "50px",
            border: "none",
            display: "block",
            position: "fixed",
            "z-index": 2147483647,
            "box-sizing": "border-box"
        },
        Bc = {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            opacity: 0,
            height: 0,
            "max-height": "100%",
            "max-width": "100%",
            "min-height": "100%",
            "min-width": "100%",
            width: 0
        };

    function Cc(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? {} : c;
        this.b = a;
        this.j = new zc(a.getWin().document, {
            "class": "swg-dialog"
        });
        this.X = new wc(a, 2147483646);
        var d = Object.assign({}, Ac, b);
        E(this.j.getElement(), d);
        rb(this.j.getElement(), c);
        this.aa = this.na = this.Ia = this.La = null;
        this.Ja = !1;
        this.Sa = null
    }
    e = Cc.prototype;
    e.open = function(a) {
        a = void 0 === a ? !1 : a;
        var b = this,
            c = this.j;
        if (c.isConnected()) throw Error("already opened");
        this.b.getBody().appendChild(c.getElement());
        this.X.attach();
        a ? (E(c.getElement(), {
            visibility: "hidden",
            opacity: 0
        }), this.Ja = a) : Dc(this);
        return this.b.addToFixedLayer(c.getElement()).then(function() {
            return c.whenReady()
        }).then(function() {
            var a = b.j.getBody(),
                c = b.j.getDocument();
            tb(vc(c), "body{padding:0;margin:0}swg-container,swg-loading,swg-loading-animate,swg-loading-image{display:block}swg-loading-container{width:100%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;min-height:148px!important;height:100%!important;bottom:0!important;margin-top:5px!important;z-index:2147483647!important}@media (min-height:630px), (min-width:630px){swg-loading-container{width:560px!important;margin-left:35px!important;border-top-left-radius:8px!important;border-top-right-radius:8px!important;background-color:#fff!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important}}swg-loading{z-index:2147483647!important;width:36px;height:36px;overflow:hidden;animation:mspin-rotate 1568.63ms linear infinite}swg-loading-animate{animation:mspin-revrot 5332ms steps(4) infinite}swg-loading-image{background-image:url(https://news.google.com/swg/js/v1/loader.svg);background-size:100%;width:11664px;height:36px;animation:swg-loading-film 5332ms steps(324) infinite}@keyframes swg-loading-film{0%{transform:translateX(0)}to{transform:translateX(-11664px)}}@keyframes mspin-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes mspin-revrot{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}\n/*# sourceURL=/./src/ui/ui.css*/");
            b.La = new xc(c);
            a.appendChild(b.La.getElement());
            b.Ia = F(c, "swg-container", {});
            a.appendChild(b.Ia);
            E(b.getElement(), Ec());
            return b
        })
    };
    e.close = function(a) {
        var b = this,
            c;
        c = void 0 === a || a ? this.$(function() {
            b.X.hide(!0);
            return R(b.getElement(), {
                transform: "translateY(100%)"
            }, 300)
        }) : Promise.resolve();
        return c.then(function() {
            b.b.getBody().removeChild(b.j.getElement());
            b.b.getRootElement().style.removeProperty("padding-bottom");
            b.X.destroy()
        })
    };
    e.getContainer = function() {
        if (!this.Ia) throw Error("not opened yet");
        return this.Ia
    };
    e.getIframe = function() {
        return this.j
    };
    e.getElement = function() {
        return this.j.getElement()
    };
    e.getCurrentView = function() {
        return this.na
    };
    e.openView = function(a) {
        var b = this;
        E(a.getElement(), Bc);
        this.na && this.na.hasLoadingIndicator() ? this.Sa = this.na : (this.getContainer().textContent = "", this.La.show());
        this.na = a;
        this.getContainer().appendChild(a.getElement());
        a.shouldFadeBody() && !this.Ja && this.X.show(!0);
        return a.init(this).then(function() {
            E(a.getElement(), {
                opacity: 1
            });
            b.Ja && (a.shouldFadeBody() && b.X.show(!0), Dc(b));
            if (b.Sa) {
                var c = b.Sa.getElement();
                c.parentElement && c.parentElement.removeChild(c);
                b.Sa = null
            } else b.La.hide()
        })
    };

    function Dc(a) {
        a.$(function() {
            E(a.getElement(), {
                transform: "translateY(100%)",
                opactiy: 1,
                visibility: "visible"
            });
            return R(a.getElement(), {
                transform: "translateY(0)",
                opacity: 1,
                visibility: "visible"
            }, 300)
        });
        a.Ja = !1
    }
    e.resizeView = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = this;
        if (this.na != a) return null;
        var f = Math.min(b, .9 * this.b.getWin().innerHeight);
        if (c) {
            var g = this.getElement().offsetHeight;
            c = f >= g ? this.$(function() {
                E(d.getElement(), {
                    height: f + "px",
                    transform: "translateY(" + (f - g) + "px)"
                });
                return R(d.getElement(), {
                    transform: "translateY(0)"
                }, 300)
            }) : this.$(function() {
                return R(d.getElement(), {
                    transform: "translateY(" + (g - f) + "px)"
                }, 300).then(function() {
                    E(d.getElement(), {
                        height: f + "px",
                        transform: "translateY(0)"
                    })
                })
            })
        } else E(this.getElement(), {
            height: f + "px"
        }), c = Promise.resolve();
        return c.then(function() {
            var c = b + 20,
                f = d.b.getRootElement();
            E(f, {
                "padding-bottom": c + "px"
            });
            a.resized()
        })
    };
    e.$ = function(a) {
        var b = this,
            c = this.aa || Promise.resolve();
        return this.aa = c.then(function() {
            return a()
        }, function() {}).then(function() {
            b.aa = null
        })
    };
    e.cd = function() {
        return this.getElement().offsetHeight
    };

    function Ec() {
        var a = "BOTTOM";
        switch (a) {
            case "BOTTOM":
                return {
                    bottom: 0
                };
            case "TOP":
                return {
                    top: 0
                };
            case "FLOAT":
                return {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                };
            case "FULL":
                return {
                    position: "fixed",
                    height: "100%",
                    top: 0,
                    bottom: 0
                };
            default:
                return {
                    bottom: 0
                }
        }
    };

    function Fc(a) {
        var b = this;
        this.b = a;
        this.V = this.S = null;
        this.da = new wc(a, 2147483647);
        this.Qa = null;
        this.da.getElement().addEventListener("click", function() {
            if (b.Qa) try {
                b.Qa.focus()
            } catch (c) {}
        })
    }
    e = Fc.prototype;
    e.openDialog = function(a) {
        a = void 0 === a ? !1 : a;
        this.V || (this.S = new Cc(this.b), this.V = this.S.open(a));
        return this.V
    };
    e.openView = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = this;
        a.whenComplete().catch(function(b) {
            D(b) && c.completeView(a);
            throw b;
        });
        return this.openDialog(b).then(function(b) {
            return b.openView(a)
        })
    };
    e.completeView = function(a) {
        var b = this;
        setTimeout(function() {
            b.S && b.S.getCurrentView() == a && (b.S.close(), b.S = null, b.V = null)
        }, 100)
    };
    e.completeAll = function() {
        this.S && (this.S.close(), this.V = this.S = null);
        this.da.isAttached() && this.da.destroy()
    };
    e.popupOpened = function(a) {
        this.Qa = a || null;
        this.da.isAttached() || this.da.attach();
        this.da.show()
    };
    e.popupClosed = function() {
        this.Qa = null;
        try {
            this.da.hide()
        } catch (a) {}
    };
    var Gc = {
            height: 0
        },
        Hc = {
            frameborder: "0",
            scrolling: "no",
            "class": "swg-toast"
        };

    function Ic(a, b, c) {
        var d = this;
        this.b = a.doc();
        this.g = a.activities();
        this.fa = b;
        this.F = c;
        this.aa = null;
        this.j = F(this.b.getWin().document, "iframe", Hc);
        E(this.j, Gc);
        this.Ua = new Promise(function(a) {
            d.j.onload = a
        })
    }
    Ic.prototype.getElement = function() {
        return this.j
    };
    Ic.prototype.open = function() {
        this.b.getBody().appendChild(this.j);
        return Jc(this)
    };

    function Jc(a) {
        var b = 7;
        return a.g.openIframe(a.j, a.fa, a.F).then(function(a) {
            return a.whenReady()
        }).then(function() {
            sb(a.j);
            a.$(function() {
                E(a.j, {
                    transform: "translateY(100%)",
                    opactiy: 1,
                    visibility: "visible"
                });
                return R(a.j, {
                    transform: "translateY(0)",
                    opacity: 1,
                    visibility: "visible"
                }, 400)
            });
            a.b.getWin().setTimeout(function() {
                a.close()
            }, 1E3 * (b + 1))
        })
    }
    Ic.prototype.$ = function(a) {
        var b = this;
        return this.aa = (this.aa || Promise.resolve()).then(function() {
            return a()
        }, function() {}).then(function() {
            b.aa = null
        })
    };
    Ic.prototype.close = function() {
        var a = this;
        return this.$(function() {
            a.b.getWin().setTimeout(function() {
                a.b.getBody().removeChild(a.j);
                return Promise.resolve()
            }, 500);
            return R(a.j, {
                transform: "translateY(100%)",
                opacity: 1,
                visibility: "visible"
            }, 400)
        })
    };

    function Kc(a, b, c, d) {
        this.a = a;
        this.H = b;
        this.P = this.H.getPublicationId();
        this.K = c;
        this.c = d;
        this.Gc = new Yb;
        this.Ca = null;
        this.ka = 0;
        this.Ha = !1;
        this.B = d.storage();
        this.J = d.analytics();
        this.M = d.config()
    }
    e = Kc.prototype;
    e.reset = function(a) {
        this.Ca = null;
        this.ka = Math.max(this.ka, a ? 3 : 0);
        a && (this.B.remove("ents"), this.B.remove("isreadytopay"))
    };
    e.clear = function() {
        this.Ca = null;
        this.ka = 0;
        this.unblockNextNotification();
        this.B.remove("ents");
        this.B.remove("toast");
        this.B.remove("isreadytopay")
    };
    e.ec = function() {
        return this.a.location.search
    };
    e.getEntitlements = function(a) {
        var b = this;
        this.Ca || (this.Ca = Lc(this, a));
        return this.Ca.then(function(a) {
            null != a.isReadyToPay && b.J.setReadyToPay(a.isReadyToPay);
            return a
        })
    };
    e.pushNextEntitlements = function(a, b) {
        var c = Mc(this, a, !0, b);
        return c && c.enablesThis() ? (this.B.set("ents", a), !0) : !1
    };

    function Lc(a, b) {
        return Nc(a, b).then(function(b) {
            var c = a.Ha;
            a.Ha = !1;
            c || (a.c.callbacks().triggerEntitlementsResponse(Promise.resolve(b)), Oc(a, b));
            return b
        })
    }

    function Nc(a, b) {
        return Promise.all([a.B.get("ents"), a.B.get("isreadytopay")]).then(function(c) {
            var d = c[0],
                f = c[1];
            if (d && !b) {
                var g = Mc,
                    h;
                a: {
                    switch (f) {
                        case "true":
                            h = !0;
                            break a;
                        case "false":
                            h = !1;
                            break a
                    }
                    h = void 0
                }
                var k = g(a, d, !0, h);
                if (k && k.enablesThis()) return a.ka = 0, k
            }
            return Pc(a, b).then(function(b) {
                b && b.enablesThis() && b.raw && a.B.set("ents", b.raw);
                return b
            })
        })
    }

    function Pc(a, b) {
        function c() {
            d--;
            return a.ua(b).then(function(b) {
                return b.enablesThis() || 0 >= d ? b : new Promise(function(b) {
                    a.a.setTimeout(function() {
                        b(c())
                    }, 550)
                })
            })
        }
        var d = a.ka;
        a.ka = 0;
        return c()
    }
    e.setToastShown = function(a) {
        this.B.set("toast", a ? "1" : "0")
    };
    e.blockNextNotification = function() {
        this.Ha = !0
    };
    e.unblockNextNotification = function() {
        this.Ha = !1
    };
    e.parseEntitlements = function(a) {
        var b = a.isReadyToPay;
        null == b ? this.B.remove("isreadytopay") : this.B.set("isreadytopay", String(b));
        var c = a.signedEntitlements;
        if (c) {
            if (a = Mc(this, c, !1, b)) return a
        } else {
            var d = a.entitlements;
            if (d) return Qc(this, "", d, b)
        }
        return Qc(this, "", [], b)
    };

    function Mc(a, b, c, d) {
        var f;
        try {
            var g = a.Gc.decode(b);
            if (c) {
                var h = Date.now(),
                    k = g.exp;
                if (1E3 * parseFloat(k) < h) return null
            }
            var l = g.entitlements;
            return l && Qc(a, b, l, d, f) || null
        } catch (n) {
            a.a.setTimeout(function() {
                throw n;
            })
        }
        return null
    }

    function Qc(a, b, c, d, f) {
        return new $b("subscribe.google.com", b, bc(c), a.H.getProductId(), a.sc.bind(a), d, f)
    }

    function Oc(a, b) {
        var c = b.getEntitlementForThis();
        c ? a.B.get("toast").then(function(b) {
            "1" != b && c && (b = c.source || "google", (new Ic(a.c, I("/toastiframe"), J({
                publicationId: a.P,
                source: b
            }))).open())
        }) : Promise.resolve()
    }
    e.sc = function(a) {
        a.getEntitlementForThis() && this.setToastShown(!0)
    };
    e.ua = function(a) {
        var b = this,
            c = "/publication/" + encodeURIComponent(this.P) + "/entitlements";
        a && (c += "?crypt=" + encodeURIComponent(a));
        return this.K.fetchCredentialedJson("https://news.google.com/swg/_/api/v1" + c).then(function(a) {
            return b.parseEntitlements(a)
        })
    };
    var Rc = ["GET", "POST"],
        Sc = {
            document: 1,
            text: 2
        };

    function Tc(a) {
        this.win = a
    }
    Tc.prototype.ua = function(a, b) {
        C("string" == typeof a, "Only URL supported: %s", a);
        var c = b.credentials;
        C(void 0 === c || "include" == c || "omit" == c, "Only credentials=include|omit support: %s", c);
        return "document" == b.responseType ? Uc(a, b) : (this.win.fetch || Uc).apply(null, arguments)
    };
    Tc.prototype.fetch = function(a, b) {
        b = Vc(b);
        return this.ua(a, b).then(function(a) {
            return a
        }, function(b) {
            var c = Bb(a).origin;
            throw Error("XHR Failed fetching (" + c + "/...):", b && b.message);
        }).then(function(a) {
            return Wc(a)
        })
    };

    function Vc(a) {
        var b;
        a = a || {};
        var c;
        c = a.method;
        void 0 === c ? c = "GET" : (c = c.toUpperCase(), C(Rc.includes(c), "Only one of %s is currently allowed. Got %s", Rc.join(", "), c));
        a.method = c;
        a.headers = a.headers || {};
        b && (a.headers.Accept = b);
        return a
    }

    function Uc(a, b) {
        return new Promise(function(c, d) {
            var f = Xc(b.method || "GET", a);
            "include" == b.credentials && (f.withCredentials = !0);
            b.responseType in Sc && (f.responseType = b.responseType);
            b.headers && Object.keys(b.headers).forEach(function(a) {
                f.setRequestHeader(a, b.headers[a])
            });
            f.onreadystatechange = function() {
                2 > f.readyState || (100 > f.status || 599 < f.status ? (f.onreadystatechange = null, d(Error("Unknown HTTP status " + f.status))) : 4 == f.readyState && c(new Yc(f)))
            };
            f.onerror = function() {
                d(Error("Network failure"))
            };
            f.onabort =
                function() {
                    d(Error("Request aborted"))
                };
            "POST" == b.method ? f.send(b.body) : f.send()
        })
    }

    function Xc(a, b) {
        var c = new XMLHttpRequest;
        if ("withCredentials" in c) c.open(a, b, !0);
        else throw Error("CORS is not supported");
        return c
    }

    function Wc(a) {
        return new Promise(function(b) {
            if (a.ok) return b(a);
            b = a.status;
            var c = Error("HTTP error " + b);
            c.retriable = 415 == b || 500 <= b && 600 > b;
            c.response = a;
            throw c;
        })
    }

    function Yc(a) {
        this.L = a;
        this.status = this.L.status;
        this.ok = 200 <= this.status && 300 > this.status;
        this.headers = new Zc(a);
        this.bodyUsed = !1;
        this.body = null
    }
    e = Yc.prototype;
    e.clone = function() {
        C(!this.bodyUsed, "Body already used");
        return new Yc(this.L)
    };

    function $c(a) {
        C(!a.bodyUsed, "Body already used");
        a.bodyUsed = !0;
        return Promise.resolve(a.L.responseText)
    }
    e.text = function() {
        return $c(this)
    };
    e.json = function() {
        return $c(this).then(Wb)
    };
    e.bd = function() {
        C(!this.bodyUsed, "Body already used");
        this.bodyUsed = !0;
        C(this.L.responseXML, "responseXML should exist. Make sure to return Content-Type: text/html header.");
        return Promise.resolve(C(this.L.responseXML))
    };
    e.arrayBuffer = function() {
        return $c(this).then(Ub)
    };

    function Zc(a) {
        this.L = a
    }
    Zc.prototype.get = function(a) {
        return this.L.getResponseHeader(a)
    };
    Zc.prototype.has = function(a) {
        return null != this.L.getResponseHeader(a)
    };

    function ad(a) {
        this.L = new Tc(a)
    }
    ad.prototype.fetchCredentialedJson = function(a) {
        return this.L.fetch(a, {
            method: "GET",
            headers: {
                Accept: "text/plain, application/json"
            },
            credentials: "include"
        }).then(function(a) {
            return a.json()
        })
    };
    ad.prototype.fetch = function(a, b) {
        return this.L.fetch(a, b)
    };

    function bd(a) {
        this.b = a;
        this.Lc = Promise.resolve()
    }
    bd.prototype.error = function(a) {
        var b = this,
            c = Array.prototype.slice.call(arguments, 0);
        return this.Lc.then(function() {
            var a = cd.apply(null, c);
            a.reported || (b.b.getWin().document.createElement("img").src = "https://news.google.com/_/SubscribewithgoogleClientUi/jserror?error=" + encodeURIComponent(String(a)) + "&script=" + encodeURIComponent("https://news.google.com/swg/js/v1/swg.js") + "&line=" + (a.lineNumber || 1) + "&trace=" + encodeURIComponent(a.stack), a.reported = !0)
        })
    };

    function cd(a) {
        for (var b = null, c = "", d = 0; d < arguments.length; d++) {
            var f = arguments[d];
            if (f instanceof Error && !b) {
                var b = void 0,
                    g = Object.getOwnPropertyDescriptor(f, "message");
                if (g && g.writable) b = f;
                else {
                    var g = f.stack,
                        h = Error(f.message);
                    for (b in f) h[b] = f[b];
                    h.stack = g;
                    b = h
                }
            } else c && (c += " "), c += f
        }
        b ? c && (b.message = c + ": " + b.message) : b = Error(c);
        return b
    };

    function dd(a) {
        this.c = a;
        this.a = a.win();
        this.g = a.activities();
        this.h = a.dialogManager();
        this.ya = null;
        this.f = new N(this.a, this.g, I("/loginiframe"), J({
            publicationId: a.pageConfig().getPublicationId(),
            productId: a.pageConfig().getProductId(),
            userConsent: !0
        }), !0)
    }
    dd.prototype.start = function() {
        var a = this;
        this.c.callbacks().triggerFlowStarted("showLoginPrompt");
        this.ya = this.h.openView(this.f);
        return this.f.acceptResult().then(function() {
            a.h.completeView(a.f)
        }, function(b) {
            D(b) ? a.c.callbacks().triggerFlowCanceled("showLoginPrompt") : a.h.completeView(a.f);
            throw b;
        })
    };

    function ed(a) {
        this.c = a;
        this.a = a.win();
        this.g = a.activities();
        this.h = a.dialogManager();
        this.ya = null;
        this.f = new N(this.a, this.g, I("/loginiframe"), J({
            publicationId: a.pageConfig().getPublicationId(),
            productId: a.pageConfig().getProductId(),
            userConsent: !1
        }), !0)
    }
    ed.prototype.start = function() {
        var a = this;
        this.c.callbacks().triggerFlowStarted("showLoginNotification");
        this.ya = this.h.openView(this.f);
        return this.f.acceptResult().then(function() {
            a.h.completeView(a.f)
        }, function(b) {
            a.h.completeView(a.f);
            throw b;
        })
    };
    /*

     Copyright 2018 Google Inc. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var fd = {
            LOCAL: "LOCAL",
            PREPROD: "PREPROD",
            PRODUCTION: "PRODUCTION",
            SANDBOX: "SANDBOX",
            TEST: "TEST",
            TIN: "TIN"
        },
        gd = {
            CARD: "CARD",
            TOKENIZED_CARD: "TOKENIZED_CARD",
            UPI: "UPI"
        },
        hd = {
            CRYPTOGRAM_3DS: "CRYPTOGRAM_3DS",
            PAN_ONLY: "PAN_ONLY"
        },
        id = {
            ESTIMATED: "ESTIMATED",
            FINAL: "FINAL",
            NOT_CURRENTLY_KNOWN: "NOT_CURRENTLY_KNOWN"
        };

    function jd(a) {
        this.w = a;
        this.G = null
    }
    jd.prototype.onResult = function(a) {
        this.G = a
    };
    jd.prototype.isReadyToPay = function(a) {
        var b = kd(a);
        return new Promise(function(c) {
            b.canMakePayment().then(function(b) {
                window.sessionStorage.setItem("google.payments.api.storage.isreadytopay.result", b.toString());
                var d = {
                    result: b
                };
                2 <= a.apiVersion && a.existingPaymentMethodRequired && (d.paymentMethodPresent = b);
                c(d)
            }).catch(function() {
                window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result") ? c({
                        result: "true" == window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result")
                    }) :
                    c({
                        result: !1
                    })
            })
        })
    };
    jd.prototype.prefetchPaymentData = function(a) {
        kd(a, this.w, a.transactionInfo.currencyCode, a.transactionInfo.totalPrice)
    };
    jd.prototype.loadPaymentData = function(a) {
        ld(this, a)
    };

    function kd(a, b, c, d) {
        var f = {};
        a && (f = JSON.parse(JSON.stringify(a)));
        f.apiVersion || (f.apiVersion = 1);
        f.swg && (f.allowedPaymentMethods = ["CARD"]);
        b && "TEST" == b && (f.environment = b);
        var g = [{
            supportedMethods: ["https://google.com/pay"],
            data: f
        }];
        return new PaymentRequest(g, {
            total: {
                label: "Estimated Total Price",
                amount: {
                    currency: c || "USD",
                    value: d || "0"
                }
            }
        })
    }

    function ld(a, b) {
        b = kd(b, a.w, b.transactionInfo && b.transactionInfo.currencyCode || void 0, b.transactionInfo && b.transactionInfo.totalPrice || void 0);
        a.G(b.show().then(function(a) {
            a.complete("success");
            return a.details
        }).catch(function(a) {
            a.statusCode = "CANCELED";
            throw a;
        }))
    };

    function md(a) {
        var b = this;
        this.b = a;
        this.T = a.createElement("gpay-graypane");
        nd(this.T, {
            "z-index": 2147483647,
            display: "none",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            "background-color": "rgba(32, 33, 36, .6)"
        });
        this.Ra = null;
        this.T.addEventListener("click", function() {
            if (b.Ra) try {
                b.Ra.focus()
            } catch (c) {}
        })
    }
    md.prototype.show = function(a) {
        this.Ra = a || null;
        this.b.body.appendChild(this.T);
        nd(this.T, {
            display: "block",
            opacity: 0
        });
        return od(this.T, {
            opacity: 1
        })
    };
    md.prototype.hide = function() {
        var a = this;
        this.Ra = null;
        if (this.T.parentElement) return od(this.T, {
            opacity: 0
        }).then(function() {
            nd(a.T, {
                display: "none"
            });
            a.b.body.removeChild(a.T)
        })
    };

    function nd(a, b) {
        for (var c in b) a.style.setProperty(c, b[c].toString(), "important")
    }

    function od(a, b) {
        var c = a.ownerDocument.defaultView,
            d = a.style.transition || "";
        return (new Promise(function(d) {
            c.setTimeout(function() {
                c.setTimeout(d, 300);
                nd(a, Object.assign({
                    transition: "transform 300ms ease-out, opacity 300ms ease-out"
                }, b))
            })
        })).then(function() {
            nd(a, Object.assign({
                transition: d
            }, b))
        })
    };

    function pd(a) {
        this.$c = a
    }
    pd.prototype.postMessage = function(a, b) {
        this.$c.postMessage(a, b)
    };
    var S = null,
        qd = null,
        rd = null,
        sd = null,
        td = Date.now(),
        ud = null,
        vd = !1,
        wd = [];

    function xd() {
        document.body.appendChild(S);
        qd = new pd(S.contentWindow)
    }

    function yd(a, b) {
        var c = "isReadyToPayResponse";

        function d(a) {
            a.data[c] && (b(a), window.removeEventListener("message", d))
        }
        window.addEventListener("message", d);
        var f = Object.assign({
            eventType: 6
        }, a);
        T(f)
    }

    function T(a) {
        vd ? (a = Object.assign({
            buyFlowActivityMode: ud,
            googleTransactionId: sd,
            originTimeMs: td
        }, a), qd.postMessage(a, zd())) : wd.push(a)
    }

    function Ad() {
        var a = Bd;
        sd = a
    }

    function Cd() {
        vd = !0;
        wd.forEach(function(a) {
            T(a)
        });
        wd.length = 0
    }

    function zd() {
        var a = "https://pay";
        "SANDBOX" == rd ? a += ".sandbox" : "PREPROD" == rd && (a += "-preprod.sandbox");
        return a + ".google.com"
    }
    (function() {
        if (!S) {
            var a = window.gpayInitParams || {};
            rd = a.environment || "PRODUCTION";
            S = document.createElement("iframe");
            S.src = "https://pay" + ("PREPROD" == rd ? "-preprod.sandbox" : "SANDBOX" == rd ? ".sandbox" : "") + ".google.com/gp/p/ui/payframe?origin=" + window.location.origin + "&mid=%{merchantId}";
            T({
                eventType: 15,
                clientLatencyStartMs: Date.now()
            });
            S.height = "0";
            S.width = "0";
            S.style.display = "none";
            S.style.visibility = "hidden";
            S.onload = function() {
                T({
                    eventType: 17,
                    clientLatencyStartMs: Date.now()
                });
                Cd()
            };
            document.body ? xd() :
                document.addEventListener("DOMContentLoaded", function() {
                    return xd()
                })
        }
    })();

    function Dd() {
        var a, b;
        return !1
    }

    function Ed() {
        var a = -1 != window.navigator.userAgent.indexOf("OPR/");
        if (a) return !1;
        if (Dd()) return !0;
        var b = window.navigator.userAgent.match(/Android/i),
            c = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
        return null != b && "PaymentRequest" in window && "Google Inc." == window.navigator.vendor && null != c && 59 <= Number(c[1])
    }

    function Fd(a) {
        if (2 <= a.apiVersion) {
            var b = Gd(a);
            if (b && 1 == b.length && "CRYPTOGRAM_3DS" == b[0]) return !0
        }
        return 1 == a.allowedPaymentMethods.length && "TOKENIZED_CARD" == a.allowedPaymentMethods[0]
    }

    function Hd(a, b) {
        return 2 <= a.apiVersion && (a = Gd(a)) && a.includes(b) ? !0 : !1
    }

    function Id() {
        return void 0 === window.isSecureContext ? null : window.isSecureContext ? null : "Google Pay APIs should be called in secure context!"
    }

    function Jd(a) {
        if (a.environment && !Object.values(fd).includes(a.environment)) throw Error("Parameter environment in PaymentOptions can optionally be set to PRODUCTION, otherwise it defaults to TEST.");
    }

    function Kd(a) {
        if (!a) return "isReadyToPayRequest must be set!";
        if (2 <= a.apiVersion) {
            if (!("apiVersionMinor" in a)) return "apiVersionMinor must be set!";
            if (!a.allowedPaymentMethods || !Array.isArray(a.allowedPaymentMethods) || 0 == a.allowedPaymentMethods.length) return "for v2 allowedPaymentMethods must be set to an array containing a list of accepted payment methods";
            for (var b = 0; b < a.allowedPaymentMethods.length; b++) {
                var c = a.allowedPaymentMethods[b];
                if ("CARD" == c.type) {
                    if (!c.parameters) return "Field parameters must be setup in each allowedPaymentMethod";
                    var d = c.parameters.allowedCardNetworks;
                    if (!d || !Array.isArray(d) || 0 == d.length) return "allowedCardNetworks must be setup in parameters for type CARD";
                    var f = c.parameters.allowedAuthMethods;
                    if (!f || !Array.isArray(f) || 0 == f.length || !f.every(Ld)) return "allowedAuthMethods must be setup in parameters for type 'CARD'  and must contain 'CRYPTOGRAM_3DS' and/or 'PAN_ONLY'"
                }
            }
        } else if (!a.allowedPaymentMethods || !Array.isArray(a.allowedPaymentMethods) || 0 == a.allowedPaymentMethods.length || !a.allowedPaymentMethods.every(Md)) return "allowedPaymentMethods must be set to an array containing 'CARD' and/or 'TOKENIZED_CARD'!";
        return null
    }

    function Md(a) {
        return Object.values(gd).includes(a)
    }

    function Ld(a) {
        return Object.values(hd).includes(a)
    }

    function Nd(a) {
        if (!a) return "paymentDataRequest must be set!";
        if (a.swg) return (a = a.swg) ? a.skuId && a.publicationId ? null : "Both skuId and publicationId must be provided" : "Swg parameters must be provided";
        if (a.transactionInfo)
            if (a.transactionInfo.currencyCode) {
                if (!a.transactionInfo.totalPriceStatus || !Object.values(id).includes(a.transactionInfo.totalPriceStatus)) return "totalPriceStatus in transactionInfo must be set to one of NOT_CURRENTLY_KNOWN, ESTIMATED or FINAL!";
                if ("NOT_CURRENTLY_KNOWN" !== a.transactionInfo.totalPriceStatus &&
                    !a.transactionInfo.totalPrice) return "totalPrice in transactionInfo must be set when totalPriceStatus is ESTIMATED or FINAL!"
            } else return "currencyCode in transactionInfo must be set!";
        else return "transactionInfo must be set!";
        var b = Od(a);
        if (b) {
            if (!b.parameters) return "parameters must be set in allowedPaymentMethod!";
            var c = b.parameters;
            if (c.payeeVpa)
                if (c.payeeName)
                    if (c.referenceUrl) {
                        if (!c.mcc) return "mcc in allowedPaymentMethod parameters must be set!";
                        if (!c.transactionReferenceId) return "transactionReferenceId in allowedPaymentMethod parameters must be set!"
                    } else return "referenceUrl in allowedPaymentMethod parameters must be set!";
            else return "payeeName in allowedPaymentMethod parameters must be set!";
            else return "payeeVpa in allowedPaymentMethod parameters must be set!";
            if ("INR" !== a.transactionInfo.currencyCode) return "currencyCode in transactionInfo must be set to INR!";
            if ("FINAL" !== a.transactionInfo.totalPriceStatus) return "totalPriceStatus in transactionInfo must be set to FINAL!";
            if (!a.transactionInfo.transactionNote) return "transactionNote in transactionInfo must be set!"
        }
        return null
    }

    function Od(a) {
        return !Ed() || 2 > a.apiVersion || !a.allowedPaymentMethods ? null : Pd(a, "UPI")
    }

    function Gd(a) {
        return a.allowedPaymentMethods && (a = Pd(a, "CARD")) && a.parameters ? a.parameters.allowedAuthMethods : null
    }

    function Pd(a, b) {
        for (var c = 0; c < a.allowedPaymentMethods.length; c++) {
            var d = a.allowedPaymentMethods[c];
            if (d.type == b) return d
        }
        return null
    };

    function Qd(a, b, c, d, f) {
        this.w = a;
        this.activities = d || new eb(window);
        this.X = new md(window.document);
        this.gd = this.G = null;
        this.Kb = !1;
        this.zc = this.m = null;
        this.dd = b;
        this.pc = f || null;
        this.Da = null
    }
    e = Qd.prototype;
    e.onResult = function(a) {
        this.G || (this.G = a, this.activities.onResult("GPAY", this.Oc.bind(this)))
    };
    e.Oc = function(a) {
        var b = this;
        this.X.hide();
        this.G(a.acceptResult().then(function(a) {
            if (a.origin != Td(b)) throw Error("channel mismatch");
            var c = a.data;
            if (c.redirectEncryptedCallbackData) return ud = 3, Ud(b, c.redirectEncryptedCallbackData).then(function(a) {
                var b = Object.assign({}, c);
                delete b.redirectEncryptedCallbackData;
                return Object.assign(b, a)
            });
            if (!a.originVerified || !a.secureChannel) throw Error("channel mismatch");
            return c
        }, function(a) {
            var b = a.message,
                c = a.message;
            try {
                c = JSON.parse(b.substring(7))
            } catch (g) {}
            c.statusCode &&
                -1 == ["DEVELOPER_ERROR", "MERCHANT_ACCOUNT_ERROR"].indexOf(c.statusCode) && (c = {
                    statusCode: "CANCELED"
                });
            "AbortError" == c && (c = {
                statusCode: "CANCELED"
            });
            return Promise.reject(c)
        }))
    };

    function Ud(a, b) {
        return new Promise(function(c, d) {
            var f = Vd(a),
                g = new XMLHttpRequest;
            g.open("POST", f, !0);
            "withCredentials" in g && (g.withCredentials = !0);
            g.onreadystatechange = function() {
                if (!(2 > g.readyState))
                    if (100 > g.status || 599 < g.status) g.onreadystatechange = null, d(Error("Unknown HTTP status " + g.status));
                    else if (4 == g.readyState) try {
                    c(JSON.parse(g.responseText))
                } catch (h) {
                    d(h)
                }
            };
            g.onerror = function() {
                d(Error("Network failure"))
            };
            g.onabort = function() {
                d(Error("Request aborted"))
            };
            g.send(b)
        })
    }
    e.isReadyToPay = function(a) {
        var b = this;
        return new Promise(function(c) {
            if (Fd(a)) c({
                result: !1
            });
            else {
                var d = window.navigator.userAgent,
                    f = 0 < d.indexOf("GSA/") && 0 < d.indexOf("Safari");
                if (f) c({
                    result: !1
                });
                else {
                    var g = 0 < d.indexOf("FxiOS");
                    if (g) c({
                        result: !1
                    });
                    else {
                        var h = 0 < d.indexOf("Chrome") || 0 < d.indexOf("Firefox") || 0 < d.indexOf("Safari");
                        h && 2 <= a.apiVersion && a.existingPaymentMethodRequired ? (a.environment = b.w, yd(a, function(b) {
                            var d = {
                                result: h
                            };
                            a.existingPaymentMethodRequired && (d.paymentMethodPresent = "READY_TO_PAY" ==
                                b.data.isReadyToPayResponse);
                            c(d)
                        })) : c({
                            result: h
                        })
                    }
                }
            }
        })
    };
    e.prefetchPaymentData = function() {
        var a, b
    };
    e.loadPaymentData = function(a) {
        var b, c;
        a.swg || a.apiVersion || (a.apiVersion = 1);
        a.environment = this.w;
        ud = a.forceRedirect ? 3 : 2;
        var d = this.activities.open("GPAY", "TIN" == this.w ? "/ui/pay" : Td(this) + "/gp/p/ui/pay", a.forceRedirect ? "_top" : "gp-js-popup", a, {
            width: 600,
            height: 600
        });
        this.X.show(d && d.targetWin)
    };

    function Td(a) {
        if ("LOCAL" == a.w) return "";
        var b;
        b = "PREPROD" == a.w ? "pay-preprod.sandbox" : "SANDBOX" == a.w ? "pay.sandbox" : "pay";
        return "https://" + b + ".google.com"
    }

    function Vd(a) {
        var b = Td(a) + "/gp/p/apis/buyflow/process";
        a.pc && (b += "?rk=" + encodeURIComponent(a.pc));
        return b
    }
    e.getIframeUrl = function(a, b) {
        var c = "https://pay.google.com/gp/p/ui/pay?origin=" + b;
        if ("SANDBOX" == a || "PREPROD" == a) c = "https://pay'+  (environment == Constants.Environment.PREPROD ? '-preprod' : '')+  '.sandbox.google.com/gp/p/ui/pay?origin=" + b;
        return c
    };

    function Wd(a, b) {
        var c = "all 250ms ease 0s";
        Xd(b, c);
        b.height = "0px";
        setTimeout(function() {
            a.parentNode && a.parentNode.removeChild(a)
        }, 250)
    }
    e.ed = function() {
        var a = document.createElement("div");
        a.classList.add("google-payments-dialogContainer");
        var b = document.createElement("div");
        b.classList.add("iframeContainer");
        var c = document.createElement("iframe");
        c.classList.add("google-payments-dialog");
        c.setAttribute("frameborder", "0");
        c.setAttribute("scrolling", "no");
        b.appendChild(c);
        a.appendChild(b);
        document.body.appendChild(a);
        a = {
            container: a,
            iframe: c
        };
        b = a.iframe;
        c = a.container;
        c.addEventListener("click", this.uc.bind(this, a));
        c.style.display = "none";
        b.style.display = "none";
        b.height = "0px";
        Xd(b, "all 250ms ease 0s");
        this.Kb = !1;
        return a
    };
    e.ad = function(a) {
        a.container.parentNode && (this.zc(Promise.reject({
            errorCode: "CANCELED"
        })), Wd(a.container, a.iframe), this.m && this.m.disconnect())
    };
    e.uc = function(a) {
        a.container.parentNode && history.back()
    };
    e.hd = function(a, b) {
        var c = this;
        a.style.display = "block";
        b.style.display = "block";
        setTimeout(function() {
            b.height = "280px";
            setTimeout(function() {
                c.Kb = !0;
                c.Da && (Xd(b, c.Da.transition), b.height = c.Da.height, c.Da = null)
            }, 250)
        }, 1)
    };

    function Xd(a, b) {
        a.style.setProperty("transition", b);
        a.style.setProperty("-webkit-transition", b)
    }
    e.fd = function(a, b, c) {
        var d = this;
        c.swg || c.apiVersion || (c.apiVersion = 1);
        c.environment = this.w;
        var f, g = this.getIframeUrl(this.w, window.location.origin);
        return this.activities.openIframe(b, g, c).then(function(a) {
            d.m = a;
            a.onMessage(function(a) {
                "resize" === a.type && d.Kb ? (f || (f = Date.now()), Date.now() < f + 250 ? Xd(b, a.transition + ", height 250ms") : Xd(b, a.transition), b.height = a.height) : d.Da = {
                    height: a.height,
                    transition: a.transition
                }
            });
            return a.acceptResult()
        }).then(function(c) {
            Wd(a, b);
            history.back();
            return c.data
        }, function(c) {
            Wd(a,
                b);
            history.back();
            return Promise.reject(c)
        })
    };

    function Yd() {}
    Yd.prototype.isUpiRequest = function(a) {
        return !!Od(a)
    };
    Yd.prototype.isReadyToPay = function(a) {
        if (Od(a)) return a.existingPaymentMethodRequired ? Promise.resolve({
            result: !0,
            paymentMethodPresent: !0
        }) : Promise.resolve({
            result: !0
        });
        throw Error("No Upi payment method found in handler");
    };
    Yd.prototype.loadPaymentData = function(a, b, c) {
        var d = b.parameters,
            f = a.transactionInfo,
            g = [{
                supportedMethods: ["https://tez.google.com/pay"],
                data: {
                    pa: d.payeeVpa,
                    pn: d.payeeName,
                    tr: d.transactionReferenceId,
                    url: d.referenceUrl,
                    mc: d.mcc,
                    tn: f.transactionNote
                }
            }];
        d.transactionId && (g[0].data.tid = d.transactionId);
        var h = new PaymentRequest(g, {
            total: {
                label: "Total",
                amount: {
                    currency: f.currencyCode,
                    value: f.totalPrice
                }
            },
            displayItems: [{
                label: "Original Amount",
                amount: {
                    currency: f.currencyCode,
                    value: f.totalPrice
                }
            }]
        });
        c(Zd(h).then(function(a) {
            a ?
                a = $d(h) : (window.location.replace("https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"), a = Promise.reject({
                    errorMessage: "Cannot redirect to Tez page in Google Play."
                }));
            return a
        }).then(function(c) {
            var d;
            d = b;
            var f = JSON.parse(c.tezResponse);
            if ("FAILURE" === f.Status) {
                switch (f.responseCode) {
                    case "ZM":
                        d = {
                            errorCode: 3,
                            errorMessage: "Payment failure due to invalid MPIN."
                        };
                        break;
                    case "Z9":
                        d = {
                            errorCode: 3,
                            errorMessage: "Payment failure due to insufficient funds."
                        };
                        break;
                    case "91":
                        d = {
                            errorCode: 1,
                            errorMessage: "Payment failure due to transaction timeout or connection issue."
                        };
                        break;
                    default:
                        d = {
                            errorMessage: "Payment cancelled."
                        }
                }
                d = Promise.reject(d)
            } else d = Promise.resolve({
                apiVersion: a.apiVersion,
                apiVersionMinor: a.apiVersionMinor,
                paymentMethodData: {
                    type: d.type,
                    tokenizationData: {
                        type: "DIRECT",
                        token: {
                            protocolVersion: "ECv1",
                            signature: "",
                            signedMessage: {
                                paymentMethodType: "UPI",
                                payeeVpa: d.parameters.payeeVpa,
                                status: f.Status,
                                transactionReferenceId: d.parameters.transactionReferenceId,
                                transactionId: d.parameters.transactionId ?
                                    d.parameters.transactionId : f.txnId,
                                transactionInfo: a.transactionInfo
                            }
                        }
                    }
                }
            });
            return d
        }).catch(function(a) {
            a.statusCode = "CANCELED";
            return Promise.reject(a)
        }))
    };

    function $d(a) {
        return a.show().then(function(a) {
            a.complete("success");
            return a.details
        })
    }

    function Zd(a) {
        var b = window.sessionStorage.getItem("google.payments.api.storage.upi.canMakePaymentCache");
        if (b) return Promise.resolve("true" === b);
        if (!a.canMakePayment) return Promise.resolve(!0);
        var c = a.canMakePayment();
        return c.then(function(a) {
            a && window.sessionStorage.setItem("google.payments.api.storage.upi.canMakePaymentCache", a.toString());
            return a
        })
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var ae = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

    function be(a) {
        for (var b = Array(36), c = 0, d, f = 0; 36 > f; f++) 8 == f || 13 == f || 18 == f || 23 == f ? b[f] = "-" : 14 == f ? b[f] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[f] = ae[19 == f ? d & 3 | 8 : d]);
        return b.join("") + "." + a
    };
    var ce = "actions.google.com amp-actions.sandbox.google.com amp-actions-staging.sandbox.google.com amp-actions-autopush.sandbox.google.com payments.developers.google.com payments.google.com".split(" ");

    function de(a, b, c, d) {
        this.jc = b;
        Jd(a);
        this.gc = null;
        this.w = a.environment || "TEST";
        Bd || (Bd = -1 != ce.indexOf(window.location.hostname) && a.i && a.i.googleTransactionId ? a.i.googleTransactionId : be(this.w));
        this.Pc = a;
        this.ga = new Qd(this.w, Bd, 0, d, a.i && a.i.redirectKey);
        var f = Ed();
        this.ta = f && !c ? new jd(this.w) : this.ga;
        this.Ub = new Yd;
        this.ga.onResult(this.zb.bind(this));
        this.ta.onResult(this.zb.bind(this));
        Dd() ? ud = 5 : f && (ud = 4);
        Ad();
        T({
            eventType: 9,
            clientLatencyStartMs: Date.now()
        });
        window.addEventListener("message", function(a) {
            -1 !=
                ce.indexOf(window.location.hostname) && "logPaymentData" === a.data.name && T(a.data.data)
        })
    }
    var Bd;
    e = de.prototype;
    e.isReadyToPay = function(a) {
        a && (a = Object.assign({}, this.Pc, a));
        var b = Date.now(),
            c = Id() || Kd(a);
        if (c) return new Promise(function(a, b) {
            ee("isReadyToPay", c);
            T({
                eventType: 0,
                error: 2
            });
            b({
                statusCode: "DEVELOPER_ERROR",
                statusMessage: c
            })
        });
        var d = fe(this, a);
        d.then(function(a) {
            T({
                eventType: 0,
                clientLatencyStartMs: b,
                isReadyToPayApiResponse: a
            });
            return a
        });
        return d
    };

    function fe(a, b) {
        if (a.Ub.isUpiRequest(b)) return a.Ub.isReadyToPay(b);
        if (Ed() && !ge(b)) {
            if (2 <= b.apiVersion) return he(a, b);
            var c = a.ga.isReadyToPay(b),
                d = a.ta.isReadyToPay(b);
            return Fd(b) && !Dd() ? d : d.then(function() {
                return c
            })
        }
        var f = a.ga.isReadyToPay(b);
        return f
    }

    function he(a, b) {
        var c = Promise.resolve({
            result: !1
        });
        b.existingPaymentMethodRequired && (c = Promise.resolve({
            result: !1,
            paymentMethodPresent: !1
        }));
        var d = c;
        if (Hd(b, "CRYPTOGRAM_3DS")) {
            for (var f = JSON.parse(JSON.stringify(b)), d = 0; d < f.allowedPaymentMethods.length; d++) "CARD" == f.allowedPaymentMethods[d].type && (f.allowedPaymentMethods[d].parameters.allowedAuthMethods = ["CRYPTOGRAM_3DS"]);
            d = a.ta.isReadyToPay(f)
        }
        var g = c;
        Hd(b, "PAN_ONLY") && (g = a.ga.isReadyToPay(b));
        return Dd() ? d.then(function() {
            return g
        }) : d.then(function(a) {
            return 1 ==
                (a && a.result) ? a : g
        })
    }
    e.prefetchPaymentData = function(a) {
        var b = Id() || Nd(a);
        b ? ee("prefetchPaymentData", b) : (ie(a), Ed() && !ge(a) ? this.ta.prefetchPaymentData(a) : this.ga.prefetchPaymentData(a))
    };
    e.loadPaymentData = function(a) {
        T({
            eventType: 5
        });
        var b = Id() || Nd(a);
        if (b) this.jc(new Promise(function(a, c) {
            T({
                eventType: 1,
                error: 2
            });
            ee("loadPaymentData", b);
            c({
                statusCode: "DEVELOPER_ERROR",
                statusMessage: b
            })
        }));
        else {
            var c = Od(a);
            if (c) this.Ub.loadPaymentData(a, c, this.zb.bind(this));
            else {
                var d = window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result");
                this.gc = Date.now();
                ie(a);
                Dd() && "true" !== d || ge(a) ? this.ga.loadPaymentData(a) : this.ta.loadPaymentData(a)
            }
        }
    };

    function ee(a, b) {
        console.error("DEVELOPER_ERROR in " + a + " : " + b)
    }
    e.createButton = function() {
        var a = Date.now();
        T({
            eventType: 2,
            clientLatencyStartMs: a
        });
        return null
    };
    e.zb = function(a) {
        var b = this;
        a.then(function() {
            T({
                eventType: 1,
                clientLatencyStartMs: b.gc
            })
        }).catch(function(a) {
            a.errorCode ? T({
                eventType: 1,
                error: a.errorCode
            }) : T({
                eventType: 1,
                error: 6
            })
        });
        this.jc(a)
    };

    function ie(a) {
        var b = {
            startTimeMs: Date.now(),
            googleTransactionId: Bd
        };
        a.i = a.i ? Object.assign(b, a.i) : b
    }

    function ge(a) {
        return !0 === (a.i && a.i.disableNative)
    };
    var je = null;

    function U(a) {
        if (!je) {
            je = {};
            var b = "gpay-api,gpay-native:50c";
            try {
                var c = Cb(a.location.hash)["swg.experiments"];
                c && (b += "," + c)
            } catch (d) {
                Mb(d)
            }
            b.split(",").forEach(function(b) {
                if (b = b.trim()) try {
                    var c = b;
                    b = je;
                    var d, h, k = !1,
                        l = c.indexOf(":"); - 1 == l ? (d = c, h = 100, k = !1) : (d = c.substring(0, l).trim(), c = c.substring(l + 1), "c" == c.substring(c.length - 1) && (k = !0, c = c.substring(0, c.length - 1)), h = parseInt(c, 10));
                    if (isNaN(h)) throw Error("invalid fraction");
                    var n;
                    if (99 < h) n = !0;
                    else if (1 > h) n = !1;
                    else if (a.sessionStorage) {
                        k = k && 20 >= h;
                        try {
                            var l =
                                "subscribe.google.com:e:" + d + ":" + h + (k ? "c" : ""),
                                m, p = a.sessionStorage.getItem(l);
                            m = "e" == p ? "e" : "c" == p ? "c" : null;
                            !m && 100 * a.Math.random() <= h * (k ? 2 : 1) && (m = (k ? .5 >= a.Math.random() : 1) ? "e" : "c", a.sessionStorage.setItem(l, m));
                            n = !!m;
                            "c" == m && (d = "c-" + d)
                        } catch (B) {
                            n = !1, Mb(B)
                        }
                    } else n = !1;
                    b[d] = n
                } catch (B) {
                    Mb(B)
                }
            })
        }
        return je
    }

    function ke(a) {
        a = U(a);
        var b = [],
            c;
        for (c in a) a[c] && b.push(c);
        return b
    };
    var le = {
        PRODUCTION: "https://pay.google.com",
        SANDBOX: "https://pay.sandbox.google.com"
    };

    function me() {
        return Db(le.PRODUCTION + "/gp/p/ui/pay")
    }

    function ne(a, b, c) {
        this.Za = U(a)["gpay-api"] ? new oe(a, b) : new pe(a, b, c)
    }
    ne.prototype.preconnect = function(a) {
        a.prefetch(me());
        a.prefetch("https://payments.google.com/payments/v4/js/integrator.js?ss=md");
        a.prefetch("https://clients2.google.com/gr/gr_full_2.0.6.js");
        a.preconnect("https://www.gstatic.com/");
        a.preconnect("https://fonts.googleapis.com/");
        a.preconnect("https://www.google.com/")
    };
    ne.prototype.getType = function() {
        return this.Za.getType()
    };
    ne.prototype.start = function(a, b) {
        b = void 0 === b ? {} : b;
        this.Za.start(a, b)
    };
    ne.prototype.onResponse = function(a) {
        this.Za.onResponse(a)
    };

    function pe(a, b, c) {
        this.a = a;
        this.g = b;
        this.h = c
    }
    pe.prototype.getType = function() {
        return "SWG"
    };
    pe.prototype.start = function(a, b) {
        a = this.g.open("GPAY", me(), b.forceRedirect ? "_top" : "_blank", J(a), {});
        this.h.popupOpened(a && a.targetWin || null)
    };
    pe.prototype.onResponse = function(a) {
        function b(b) {
            c.h.popupClosed();
            a(qe(c, b))
        }
        var c = this;
        this.g.onResult("GPAY", b);
        this.g.onResult("swg-pay", b)
    };

    function qe(a, b) {
        return b.acceptResult().then(function(b) {
            if (b.origin != le.PRODUCTION) throw Error("channel mismatch");
            var c = b.data;
            if (c.redirectEncryptedCallbackData) return (new Tc(a.a)).fetch(le.PRODUCTION + "/gp/p/apis/buyflow/process", {
                method: "post",
                headers: {
                    Accept: "text/plain, application/json"
                },
                credentials: "include",
                body: c.redirectEncryptedCallbackData,
                mode: "cors"
            }).then(function(a) {
                return a.json()
            }).then(function(a) {
                var b = Object.assign({}, c);
                delete b.redirectEncryptedCallbackData;
                return Object.assign(b,
                    a)
            });
            if (b.originVerified && b.secureChannel) return c;
            throw Error("channel mismatch");
        })
    }

    function oe(a, b) {
        this.a = a;
        this.g = b;
        this.ma = this.Ib = null;
        this.Eb = new re(this.a);
        a = {
            environment: "PRODUCTION",
            i: {
                redirectKey: this.Eb.restoreKey()
            }
        };
        b = this.Cc.bind(this);
        this.tc = new de(a, b, !1, this.g.getOriginalWebActivityPorts());
        this.Eb.prepare()
    }
    oe.prototype.getType = function() {
        return "PAYJS"
    };
    oe.prototype.start = function(a, b) {
        var c = this;
        b.forceRedirect && (a = Object.assign(a, {
            forceRedirect: b.forceRedirect || !1
        }));
        se(a, "disableNative", this.a != this.a.top || !U(this.a)["gpay-native"]);
        this.Eb.useVerifier(function(b) {
            b && se(a, "redirectVerifier", b);
            c.tc.loadPaymentData(a)
        })
    };
    oe.prototype.onResponse = function(a) {
        var b = this;
        this.Ib = a;
        var c = this.ma;
        c && Promise.resolve().then(function() {
            c && a(te(b, c))
        })
    };
    oe.prototype.Cc = function(a) {
        this.ma = a;
        this.Ib && this.Ib(te(this, this.ma))
    };

    function te(a, b) {
        return b.catch(function(b) {
            return "object" == typeof b && "CANCELED" == b.statusCode ? Promise.reject(Fa(a.a, void 0)) : Promise.reject(b)
        })
    }

    function re(a) {
        this.a = a;
        this.Na = !1;
        this.Aa = this.Ab = null
    }
    re.prototype.prepare = function() {
        return ue(this, function() {})
    };
    re.prototype.useVerifier = function(a) {
        var b = this;
        ue(this, function(c) {
            if (c) try {
                b.a.localStorage.setItem("subscribe.google.com:rk", c.key)
            } catch (d) {
                c = null
            }
            a(c && c.verifier || null)
        })
    };
    re.prototype.restoreKey = function() {
        try {
            return this.a.localStorage && this.a.localStorage.getItem("subscribe.google.com:rk") || null
        } catch (a) {
            return null
        }
    };

    function ue(a, b) {
        ve(a);
        a.Na ? b(a.Ab) : a.Aa && a.Aa.then(function(a) {
            return b(a)
        });
        return a.Aa
    }

    function ve(a) {
        if (!a.Na && !a.Aa) {
            var b = a.a.crypto;
            a.a.localStorage && b && b.getRandomValues && b.subtle && b.subtle.digest ? a.Aa = (new Promise(function(a, d) {
                var c = new Uint8Array(16);
                b.getRandomValues(c);
                var g = btoa(Sb(c));
                b.subtle.digest({
                    name: "SHA-384"
                }, Rb(g)).then(function(b) {
                    b = btoa(Sb(new Uint8Array(b)));
                    a({
                        key: g,
                        verifier: b
                    })
                }, function(a) {
                    d(a)
                })
            })).catch(function() {
                return null
            }).then(function(b) {
                a.Na = !0;
                return a.Ab = b
            }) : (a.Na = !0, a.Ab = null)
        }
    }

    function se(a, b, c) {
        var d = {};
        a.i = Object.assign(a.i || {}, (d[b] = c, d))
    };

    function we(a, b) {
        this.c = a;
        this.a = a.win();
        this.g = a.activities();
        this.h = a.dialogManager();
        this.ya = null;
        this.rc = b || null;
        this.f = new N(this.a, this.g, I("/waitforsubscriptionlookupiframe"), J({
            publicationId: a.pageConfig().getPublicationId(),
            productId: a.pageConfig().getProductId()
        }), !0, !0)
    }
    we.prototype.start = function() {
        var a = this;
        this.ya = this.h.openView(this.f);
        return this.rc.then(function(b) {
            a.h.completeView(a.f);
            return b
        }, function(b) {
            a.h.completeView(a.f);
            throw b;
        })
    };

    function xe(a, b) {
        this.M = a;
        this.K = b
    }
    xe.prototype.getOffers = function(a) {
        var b = a || this.M.getProductId();
        if (!b) throw Error("getOffers requires productId in config or arguments");
        return this.ua(b)
    };
    xe.prototype.ua = function(a) {
        a = "https://news.google.com/swg/_/api/v1" + ("/publication/" + encodeURIComponent(this.M.getPublicationId()) + "/offers?label=" + encodeURIComponent(a));
        return this.K.fetchCredentialedJson(a).then(function(a) {
            return a.offers || []
        })
    };

    function V(a, b) {
        this.c = a;
        this.a = a.win();
        this.g = a.activities();
        this.h = a.dialogManager();
        this.l = a.eventManager();
        var c = b && b.isClosable;
        void 0 == c && (c = !1);
        var d = {
            productId: a.pageConfig().getProductId(),
            publicationId: a.pageConfig().getPublicationId(),
            showNative: a.callbacks().hasSubscribeRequestCallback(),
            productType: "SUBSCRIPTION",
            list: b && b.list || "default",
            skus: b && b.skus || null,
            isClosable: c
        };
        this.prorationMode = d.replaceSkuProrationMode || void 0;
        b && b.oldSku && (d.oldSku = b.oldSku);
        if (d.oldSku) {
            C(d.skus, "Need a sku list if old sku is provided!");
            var f = d.skus,
                g = d.oldSku,
                f = f.filter(function(a) {
                    return a !== g
                });
            C(0 < f.length, "Sku list only contained offer user already has");
            d.skus = f
        }
        if (d.skus && 1 === d.skus.length && (a = d.skus[0], b = d.oldSku)) {
            (new Q(this.c, {
                skuId: a,
                oldSku: b,
                replaceSkuProrationMode: this.prorationMode
            })).start();
            return
        }
        this.f = new N(this.a, this.g, I("/offersiframe"), J(d), !0)
    }
    V.prototype.Mb = function(a) {
        var b = a.getSku();
        a = a.getOldSku();
        b && (this.l.logSwgEvent(1006, !0), (new Q(this.c, a ? {
            skuId: b,
            oldSku: a
        } : b)).start())
    };
    V.prototype.va = function(a) {
        a.getSubscriberOrMember() && (this.l.logSwgEvent(1009, !0), this.c.callbacks().triggerLoginRequest({
            linkRequested: !!a.getLinkRequested()
        }))
    };
    V.prototype.Xc = function(a) {
        a.getNative() && this.c.callbacks().triggerSubscribeRequest()
    };
    V.prototype.start = function() {
        var a = this;
        return this.f ? (this.c.callbacks().triggerFlowStarted("showOffers"), this.f.onCancel(function() {
            a.c.callbacks().triggerFlowCanceled("showOffers")
        }), this.f.on(Ca, this.Mb.bind(this)), this.f.on(t, this.va.bind(this)), this.f.on(z, this.Xc.bind(this)), this.l.logSwgEvent(3), this.h.openView(this.f)) : Promise.resolve()
    };

    function ye(a, b) {
        this.c = a;
        this.s = b;
        this.g = a.activities();
        this.h = a.dialogManager();
        this.l = a.eventManager();
        this.f = new N(a.win(), this.g, I("/optionsiframe"), J({
            publicationId: a.pageConfig().getPublicationId(),
            productId: a.pageConfig().getProductId(),
            list: b && b.list || "default",
            skus: b && b.skus || null,
            isClosable: !0
        }), !1)
    }
    ye.prototype.start = function() {
        var a = this;
        this.c.callbacks().triggerFlowStarted("showSubscribeOption");
        this.f.onCancel(function() {
            a.c.callbacks().triggerFlowCanceled("showSubscribeOption")
        });
        this.f.on(y, this.ic.bind(this));
        this.f.acceptResult().then(function(b) {
            b = b.data;
            var c = new y;
            b.subscribe && c.setSubscribe(!0);
            a.ic(c)
        }, function(b) {
            a.h.completeView(a.f);
            throw b;
        });
        this.l.logSwgEvent(7);
        return this.h.openView(this.f)
    };
    ye.prototype.ic = function(a) {
        a.getSubscribe() && (a = this.s || {}, void 0 == a.isClosable && (a.isClosable = !0), this.l.logSwgEvent(1008, !0), (new V(this.c, a)).start())
    };

    function ze(a, b) {
        b = void 0 === b ? {} : b;
        this.c = a;
        this.s = b;
        this.a = a.win();
        this.g = a.activities();
        this.h = a.dialogManager();
        this.l = a.eventManager();
        this.f = new N(this.a, this.g, I("/abbrvofferiframe"), J({
            publicationId: a.pageConfig().getPublicationId(),
            productId: a.pageConfig().getProductId(),
            showNative: a.callbacks().hasSubscribeRequestCallback(),
            list: b && b.list || "default",
            skus: b && b.skus || null,
            isClosable: !0
        }), !1)
    }
    ze.prototype.va = function(a) {
        a.getSubscriberOrMember() && (this.l.logSwgEvent(1009, !0), this.c.callbacks().triggerLoginRequest({
            linkRequested: !!a.getLinkRequested()
        }))
    };
    ze.prototype.start = function() {
        var a = this;
        this.c.callbacks().triggerFlowStarted("showAbbrvOffer");
        this.f.onCancel(function() {
            a.c.callbacks().triggerFlowCanceled("showAbbrvOffer")
        });
        this.f.on(t, this.va.bind(this));
        this.f.acceptResult().then(function(b) {
            b.data.viewOffers ? (b = a.s || {}, void 0 == b.isClosable && (b.isClosable = !0), a.l.logSwgEvent(1008, !0), (new V(a.c, b)).start()) : b.data["native"] && (a.c.callbacks().triggerSubscribeRequest(), a.h.completeView(a.f))
        });
        this.l.logSwgEvent(8);
        return this.h.openView(this.f)
    };

    function W(a, b) {
        var c, d, f = a.indexOf(":");
        if (-1 != f) {
            if (c = a.substring(0, f), d = a.substring(f + 1), "*" == d) throw Error("wildcard disallowed");
        } else c = a, d = a = null;
        this.P = c;
        this.la = a;
        this.wa = d;
        this.Ic = b
    }
    W.prototype.getPublicationId = function() {
        return this.P
    };
    W.prototype.getProductId = function() {
        return this.la
    };
    W.prototype.getLabel = function() {
        return this.wa
    };
    W.prototype.isLocked = function() {
        return this.Ic
    };

    function Ae(a) {
        this.b = a
    }
    Ae.prototype.preconnect = function(a) {
        Be(this, a, "preconnect")
    };
    Ae.prototype.dnsPrefetch = function(a) {
        Be(this, a, "dns-prefetch")
    };
    Ae.prototype.prefetch = function(a) {
        Be(this, a, "preconnect prefetch")
    };
    Ae.prototype.preload = function(a, b) {
        Be(this, a, "preconnect preload", b)
    };

    function Be(a, b, c, d) {
        var f = F(a.b, "link", {
            rel: c,
            href: b
        });
        d && f.setAttribute("as", d);
        a.b.head.appendChild(f)
    };

    function Ce(a) {
        this.a = a;
        this.Fa = {}
    }
    Ce.prototype.get = function(a) {
        var b = this;
        this.Fa[a] || (this.Fa[a] = new Promise(function(c) {
            if (b.a.sessionStorage) try {
                c(b.a.sessionStorage.getItem(De(a)))
            } catch (d) {
                c(null)
            } else c(null)
        }));
        return this.Fa[a]
    };
    Ce.prototype.set = function(a, b) {
        var c = this;
        this.Fa[a] = Promise.resolve(b);
        return new Promise(function(d) {
            if (c.a.sessionStorage) try {
                c.a.sessionStorage.setItem(De(a), b)
            } catch (f) {}
            d()
        })
    };
    Ce.prototype.remove = function(a) {
        var b = this;
        delete this.Fa[a];
        return new Promise(function(c) {
            if (b.a.sessionStorage) try {
                b.a.sessionStorage.removeItem(De(a))
            } catch (d) {}
            c()
        })
    };

    function De(a) {
        return "subscribe.google.com:" + a
    };

    function Ee(a, b) {
        return "Event has an invalid " + a + "(" + b + ")"
    }

    function Fe(a) {
        if (!G(a)) throw Error("Event must be a valid object");
        if (!yb(wa, a.eventType)) throw Error(Ee("eventType", a.eventType));
        if (!yb(xa, a.eventOriginator)) throw Error(Ee("eventOriginator", a.eventOriginator));
        if (!G(a.additionalParameters) && null != a.additionalParameters) throw Error(Ee("additionalParameters", a.additionalParameters));
        if (null != a.isFromUserAction && !H(a.isFromUserAction)) throw Error(Ee("isFromUserAction", a.isFromUserAction));
    }

    function Ge(a) {
        this.ub = [];
        this.mb = [];
        this.Ka = null;
        this.Fc = a
    }
    Ge.prototype.registerEventListener = function(a) {
        if (null === a || "function" !== typeof a) throw Error("Event manager listeners must be a function");
        this.ub.push(a)
    };
    Ge.prototype.registerEventFilterer = function(a) {
        if (null === a || "function" !== typeof a) throw Error("Event manager filterers must be a function");
        this.mb.push(a)
    };
    Ge.prototype.logEvent = function(a) {
        var b = this;
        Fe(a);
        this.Ka = this.Fc.then(function() {
            for (var c = 0; c < b.mb.length; c++) try {
                if (1 === b.mb[c](a)) return Promise.resolve()
            } catch (d) {
                A(d)
            }
            for (c = 0; c < b.ub.length; c++) try {
                b.ub[c](a)
            } catch (d) {
                A(d)
            }
            return Promise.resolve()
        })
    };
    Ge.prototype.logSwgEvent = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        this.logEvent({
            eventType: a,
            eventOriginator: 1,
            isFromUserAction: b,
            additionalParameters: void 0 === c ? null : c
        })
    };
    var He = {
        display: "none"
    };

    function Ie(a) {
        this.b = a.doc();
        this.c = a;
        this.g = a.activities();
        this.j = F(this.b.getWin().document, "iframe", {});
        E(this.j, He);
        this.fa = I("/serviceiframe");
        this.P = a.pageConfig().getPublicationId();
        this.F = J({
            publicationId: this.P
        });
        this.cc = !1;
        this.u = new ya;
        this.u.setTransactionId(mb());
        this.Ka = this.Jb = null;
        this.l = a.eventManager();
        this.l.registerEventListener(this.pb.bind(this))
    }
    e = Ie.prototype;
    e.setTransactionId = function(a) {
        this.u.setTransactionId(a)
    };
    e.getTransactionId = function() {
        return this.u.getTransactionId()
    };
    e.getSku = function() {
        return this.u.getSku()
    };
    e.setSku = function(a) {
        this.u.setSku(a)
    };
    e.addLabels = function(a) {
        if (a && 0 < a.length) {
            var b = [].concat(this.u.getLabelList());
            a.forEach(function(a) {
                -1 == b.indexOf(a) && b.push(a)
            });
            this.u.setLabelList(b)
        }
    };
    e.getElement = function() {
        return this.j
    };
    e.ec = function() {
        return this.b.getWin().location.search
    };

    function Je(a) {
        var b = Cb(a.ec());
        a.u.setReferringOrigin(Bb(a.b.getWin().document.referrer).origin);
        var c = b.utm_campaign,
            d = b.utm_medium,
            f = b.utm_source;
        c && a.u.setUtmCampaign(c);
        d && a.u.setUtmMedium(d);
        f && a.u.setUtmSource(f);
        a.addLabels(ke(a.b.getWin()))
    }

    function Ke(a) {
        a.Jb || (a.b.getBody().appendChild(a.getElement()), a.Jb = a.g.openIframe(a.j, a.fa, a.F).then(function(b) {
            Je(a);
            return b.whenReady().then(function() {
                return b
            })
        }));
        return a.Jb
    }
    e.setReadyToPay = function(a) {
        this.u.setReadyToPay(a)
    };
    e.close = function() {
        this.b.getBody().removeChild(this.getElement())
    };
    e.getContext = function() {
        return this.u
    };
    e.getHasLogged = function() {
        return this.cc
    };
    e.onMessage = function(a) {
        this.Ka = Ke(this).then(function(b) {
            b.onMessageDeprecated(a)
        })
    };
    e.pb = function(a) {
        var b = this;
        4E3 !== a.eventType && (3 !== a.eventOriginator && 5 !== a.eventOriginator && 2 !== a.eventOriginator || !0 === this.c.config().enableSwgAnalytics) && (this.Ka = Ke(this).then(function(c) {
            var d = new za;
            d.setEventOriginator(a.eventOriginator);
            d.setIsFromUserAction(a.isFromUserAction);
            var f = new Aa;
            f.setEvent(a.eventType);
            f.setContext(b.u);
            f.setMeta(d);
            a.additionalParameters instanceof u && f.setParams(a.additionalParameters);
            b.cc = !0;
            c.execute(f)
        }))
    };
    var X = {},
        Le = (X.paywall = 1, X.ad_shown = 2, X.offers_shown = 3, X.subscriptions_landing_page = 1004, X.offer_selected = 1006, X.payment_flow_start = 1005, X.payment_complete = 1001, X.custom = 3E3, X),
        Y = {},
        Me = (Y[0] = null, Y[1] = "paywall", Y[2] = "ad_shown", Y[3] = "offers_shown", Y[4] = null, Y[5] = null, Y[1E3] = null, Y[1001] = "payment_complete", Y[1002] = null, Y[1003] = null, Y[1004] = "subscriptions_landing_page", Y[1005] = "payment_flow_start", Y[1006] = "offer_selected", Y[2E3] = null, Y[3E3] = "custom", Y);

    function Ne(a, b, c) {
        this.a = a;
        this.c = b;
        this.P = this.c.pageConfig().getPublicationId();
        this.bb = null;
        this.K = c;
        this.Zc = 1;
        this.c.eventManager().registerEventListener(this.pb.bind(this))
    }

    function Oe(a, b) {
        b = b + "&u_tz=240&v=" + a.Zc;
        if (!a.bb) {
            var c = a.a.document.cookie.match("(^|;)\\s*__gads\\s*=\\s*([^;]+)");
            a.bb = c && encodeURIComponent(c.pop())
        }
        var d = a.bb;
        d && (b = b + "&cookie=" + d);
        return b = b + "&cdm=" + a.a.location.hostname
    }
    Ne.prototype.sendSubscriptionState = function(a, b) {
        var c = this.P + ":" + a;
        b && (c = c + ":" + encodeURIComponent(b));
        a = "https://pubads.g.doubleclick.net/subopt/data?states=" + encodeURIComponent(c);
        return this.K.fetch(Oe(this, a), {
            method: "GET",
            credentials: "include"
        })
    };
    Ne.prototype.pb = function(a) {
        if (this.c.config().enablePropensity || 3 === a.eventOriginator)
            if (4E3 === a.eventType) this.sendSubscriptionState(a.additionalParameters.state, a.additionalParameters.productsOrSkus);
            else {
                var b = Me[a.eventType];
                if (null != b) {
                    var c = a.additionalParameters;
                    c instanceof u && (c = void 0);
                    H(a.isFromUserAction) && (G(c) || (c = {}), c.is_active = a.isFromUserAction);
                    a = JSON.stringify(c);
                    var d = this.P + ":" + b;
                    a && (d = d + ":" + encodeURIComponent(a));
                    a = "https://pubads.g.doubleclick.net/subopt/data?events=" + encodeURIComponent(d);
                    this.K.fetch(Oe(this,
                        a), {
                        method: "GET",
                        credentials: "include"
                    })
                }
            }
    };
    Ne.prototype.getPropensity = function(a, b) {
        return this.K.fetch(Oe(this, "https://pubads.g.doubleclick.net/subopt/pts?products=" + this.P + "&type=" + b + "&ref=" + a), {
            method: "GET",
            credentials: "include"
        }).then(function(a) {
            return a.json()
        }).then(function(a) {
            var b = {};
            if (a.header)
                if (a.header.ok) {
                    var c = a.scores;
                    a = [];
                    for (var g = 0; g < c.length; g++) {
                        var h = c[g];
                        a.push(h.score ? {
                            product: h.product,
                            score: {
                                value: h.score,
                                bucketed: 2 == h.score_type
                            }
                        } : {
                            product: h.product,
                            error: h.error_message
                        })
                    }
                    a && (b = {
                        header: {
                            ok: !0
                        },
                        body: {
                            scores: a
                        }
                    })
                } else b = {
                    header: {
                        ok: !1
                    },
                    body: {
                        error: a.error
                    }
                };
            else b = {
                header: {
                    ok: !1
                },
                body: {
                    error: "No valid response"
                }
            };
            return b
        })
    };

    function Pe(a, b, c) {
        this.a = a;
        this.nc = new Ne(a, b, c);
        this.l = b.eventManager()
    }
    Pe.prototype.sendSubscriptionState = function(a, b) {
        if (!Object.values(dc).includes(a)) throw Error("Invalid subscription state provided");
        if (("subscriber" == a || "past_subscriber" == a) && !b) throw Error("Entitlements must be provided for users with active or expired subscriptions");
        if (b && !G(b)) throw Error("Entitlements must be an Object");
        var c = null;
        b && (c = JSON.stringify(b));
        this.nc.sendSubscriptionState(a, c)
    };
    Pe.prototype.getPropensity = function(a) {
        if (a && !Object.values(fc).includes(a)) throw Error("Invalid propensity type requested");
        a || (a = "general");
        return this.nc.getPropensity(this.a.document.referrer, a)
    };
    Pe.prototype.sendEvent = function(a) {
        var b = Le[a.name],
            c = null;
        if (!yb(ec, a.name) || !b) throw Error("Invalid user event provided(" + a.name + ")");
        if (a.data)
            if (G(a.data)) c = {}, Object.assign(c, a.data);
            else throw Error("Event data must be an Object(" + a.data + ")");
        if (H(a.active)) c || (c = {}), Object.assign(c, {
            is_active: a.active
        });
        else if (null != a.active) throw Error("Event active must be a boolean");
        this.l.logEvent({
            eventType: b,
            eventOriginator: 3,
            isFromUserAction: a.active,
            additionalParameters: c
        })
    };

    function Qe(a) {
        this.l = a.eventManager()
    }
    Qe.prototype.sendSubscriptionState = function(a, b) {
        if (!yb(dc, a)) throw Error("Invalid subscription state provided");
        if (("subscriber" == a || "past_subscriber" == a) && !b) throw Error("Entitlements must be provided for users with active or expired subscriptions");
        if (b && !G(b)) throw Error("Entitlements must be an Object");
        var c = null;
        b && (c = JSON.stringify(b));
        this.l.logEvent({
            eventType: 4E3,
            eventOriginator: 5,
            isFromUserAction: null,
            additionalParameters: {
                state: a,
                productsOrSkus: c
            }
        })
    };
    Qe.prototype.sendEvent = function(a) {
        var b = null;
        if (!yb(ec, a.name) || !Le[a.name]) throw Error("Invalid user event provided(" + a.name + ")");
        if (a.data)
            if (G(a.data)) b = {}, Object.assign(b, a.data);
            else throw Error("Event data must be an Object(" + a.data + ")");
        if (H(a.active)) b || (b = {}), Object.assign(b, {
            is_active: a.active
        });
        else if (null != a.active) throw Error("Event active must be a boolean");
        this.l.logEvent({
            eventType: Le[a.name],
            eventOriginator: 5,
            isFromUserAction: a.active,
            additionalParameters: b
        })
    };

    function Re(a) {
        this.c = a;
        this.g = a.activities();
        this.H = a.pageConfig();
        this.h = a.dialogManager()
    }
    Re.prototype.start = function() {
        this.c.callbacks().triggerFlowStarted("linkAccount");
        var a = "redirect" == this.c.config().windowOpenMode,
            b = this.g.open("swg-link", I("/linkbackstart"), a ? "_top" : "_blank", J({
                publicationId: this.H.getPublicationId()
            }), {});
        this.h.popupOpened(b && b.targetWin);
        return Promise.resolve()
    };

    function Se(a, b) {
        var c = this;
        this.a = a.win();
        this.g = a.activities();
        this.h = a.dialogManager();
        this.U = a.entitlementsManager();
        this.v = a.callbacks();
        this.f = new N(this.a, this.g, I("/linkconfirmiframe", "/u/" + (b && b.index || "0")), J({
            productId: a.pageConfig().getProductId(),
            publicationId: a.pageConfig().getPublicationId()
        }), !0);
        this.bc = null;
        this.wc = new Promise(function(a) {
            c.bc = a
        })
    }

    function Te(a) {
        a.activities().onResult("swg-link", function(b) {
            a.entitlementsManager().blockNextNotification();
            a.callbacks().triggerLinkProgress();
            a.dialogManager().popupClosed();
            return Nb(b, Fb(), !1, !1).then(function(b) {
                (new Se(a, b)).start()
            }, function(b) {
                D(b) && a.callbacks().triggerFlowCanceled("linkAccount")
            })
        })
    }
    Se.prototype.start = function() {
        var a = this;
        this.f.acceptResultAndVerify(Fb(), !0, !0).then(function(b) {
            a.R(b)
        }).catch(function(a) {
            setTimeout(function() {
                throw a;
            })
        }).then(function() {
            a.h.completeView(a.f)
        });
        return this.h.openView(this.f)
    };
    Se.prototype.R = function(a) {
        this.v.triggerLinkComplete();
        this.v.resetLinkProgress();
        this.U.setToastShown(!0);
        this.U.unblockNextNotification();
        this.U.reset(a && a.success || !1);
        a && a.entitlements && this.U.pushNextEntitlements(a.entitlements);
        this.bc()
    };
    Se.prototype.whenComplete = function() {
        return this.wc
    };

    function Ue(a, b) {
        this.a = a.win();
        this.c = a;
        this.g = a.activities();
        this.h = a.dialogManager();
        this.G = b;
        this.f = this.V = this.qc = null
    }
    Ue.prototype.getRequestPromise = function() {
        return this.qc
    };
    Ue.prototype.R = function() {
        this.h.completeView(this.f)
    };

    function Ve(a, b) {
        a.R();
        var c, d = null;
        b.linked ? (a.h.popupClosed(), a.c.callbacks().triggerFlowStarted("linkAccount"), d = new Se(a.c, b), c = d.start()) : c = Promise.reject(Fa(a.a, "not linked"));
        var f = c.then(function() {
            a.c.callbacks().triggerLinkProgress();
            return d.whenComplete()
        });
        return f.then(function() {
            return !0
        })
    }
    Ue.prototype.Vc = function(a) {
        var b = this;
        a && a.getRequested() && (this.qc = (new Promise(function(a) {
            a(b.G())
        })).then(function(a) {
            var c = new Ba;
            if (a && a.token) {
                if (a.authCode) throw Error("Both authCode and token are available");
                c.setToken(a.token)
            } else if (a && a.authCode) c.setAuthCode(a.authCode);
            else throw Error("Neither token or authCode is available");
            b.f.execute(c)
        }).catch(function(a) {
            b.R();
            throw a;
        }))
    };
    Ue.prototype.start = function() {
        var a = this,
            b = {
                publicationId: this.c.pageConfig().getPublicationId(),
                isClosable: !0
            };
        this.f = new N(this.a, this.g, I("/linksaveiframe"), J(b), !1, !0);
        this.f.on(w, this.Vc.bind(this));
        this.V = this.h.openView(this.f, !0);
        return this.f.acceptResultAndVerify(Fb(), !0, !0).then(function(b) {
            return Ve(a, b)
        }).catch(function(b) {
            a.R();
            if (D(b)) return a.c.callbacks().triggerFlowCanceled("linkAccount"), !1;
            throw b;
        })
    };
    var We = "CreativeWork Article NewsArticle Blog Comment Course HowTo Message Review WebPage".split(" "),
        Xe = new RegExp(We.join("|"));

    function Ye(a) {
        var b = this;
        this.b = vc(a);
        this.ha = null;
        this.xc = new Promise(function(a) {
            b.ha = a
        });
        this.Kc = new Ze(this.b);
        this.Hc = new $e(this.b);
        this.Mc = new af(this.b)
    }
    Ye.prototype.resolveConfig = function() {
        Promise.resolve().then(this.check.bind(this));
        this.b.whenReady().then(this.check.bind(this));
        return this.xc
    };
    Ye.prototype.check = function() {
        if (!this.ha) return null;
        var a = this.Kc.check();
        a || (a = this.Hc.check());
        a || (a = this.Mc.check());
        a ? (this.ha(a), this.ha = null) : this.b.isReady() && (this.ha(Promise.reject(Error("No config could be discovered in the page"))), this.ha = null);
        Ea(a);
        return a
    };

    function bf() {}
    bf.prototype.checkValue = function(a, b) {
        return a ? this.checkArray(cf(a), b) : !1
    };
    bf.prototype.checkString = function(a, b) {
        return a ? this.checkArray(a.split(/\s+/), b) : !1
    };
    bf.prototype.checkArray = function(a, b) {
        var c = !1;
        a.forEach(function(a) {
            c = c || b.includes(a.replace(/^http:\/\/schema.org\//i, ""))
        });
        return c
    };

    function cf(a) {
        return Array.isArray(a) ? a : [a]
    }

    function Ze(a) {
        this.b = a
    }
    Ze.prototype.check = function() {
        if (!this.b.getBody()) return null;
        var a = df(this.b.getRootNode(), "subscriptions-product-id");
        if (!a) return null;
        var b = df(this.b.getRootNode(), "subscriptions-accessible-for-free"),
            c = b && "false" == b.toLowerCase() || !1;
        return new W(a, c)
    };

    function $e(a) {
        this.b = a;
        this.oa = new bf
    }
    $e.prototype.check = function() {
        if (!this.b.getBody()) return null;
        for (var a = this.b.isReady(), b = this.b.getRootNode().querySelectorAll('script[type="application/ld+json"]'), c = 0; c < b.length; c++) {
            var d = b[c],
                f;
            if ((f = !d["__SWG-SEEN__"] && d.textContent) && !(f = a)) a: {
                f = d;do
                    if (f.nextSibling) {
                        f = !0;
                        break a
                    }
                while ((f = f.parentNode) && void 0 != f);
                f = !1
            }
            if (f && (d["__SWG-SEEN__"] = !0, Xe.test(d.textContent))) {
                var g = this.Tb(d);
                if (g) return g
            }
        }
        return null
    };
    $e.prototype.Tb = function(a) {
        a = Xb(a.textContent);
        if (!a || !this.oa.checkValue(a["@type"], We)) return null;
        var b = null,
            c = ef(a, "isPartOf");
        if (c)
            for (var d = 0; d < c.length && !(b = this.ib(c[d])); d++);
        if (!b) return null;
        var f = ff(gf(a, "isAccessibleForFree"));
        return new W(b, !f)
    };

    function ff(a) {
        var b = !0;
        if (null == a || "" === a) return b;
        if ("boolean" == typeof a) return a;
        if ("string" == typeof a) {
            var c = a.toLowerCase();
            if ("false" == c) return !1;
            if ("true" == c) return !0
        }
        return b
    }
    $e.prototype.ib = function(a) {
        return this.oa.checkValue(a["@type"], ["Product"]) ? gf(a, "productID") : null
    };

    function ef(a, b) {
        a = a[b];
        return null == a || "" === a ? null : Array.isArray(a) ? a : [a]
    }

    function gf(a, b) {
        var c = ef(a, b);
        a = c && c[0];
        return null == a || "" === a ? null : a
    }

    function af(a) {
        this.b = a;
        this.la = this.Ga = null;
        this.oa = new bf
    }

    function hf(a, b) {
        var c = "alreadySeenForAccessInfo",
            d = b.querySelectorAll("[itemprop='isAccessibleForFree']");
        for (b = 0; d[b]; b++) {
            var f = d[b],
                g = f.getAttribute("content") || f.textContent;
            if (g && jf(a, f, c)) {
                var h = null;
                "true" == g.toLowerCase() ? h = !0 : "false" == g.toLowerCase() && (h = !1);
                return h
            }
        }
        return null
    }

    function jf(a, b, c) {
        for (var d = b; d && !d[c]; d = d.parentNode)
            if (d[c] = !0, d.hasAttribute && d.hasAttribute("itemscope")) return d = d.getAttribute("itemtype"), a.oa.checkString(d, We);
        return !1
    }
    af.prototype.ib = function(a) {
        a = a.querySelectorAll('[itemprop="productID"]');
        for (var b = 0; a[b]; b++) {
            var c = a[b],
                d = c.getAttribute("content") || c.textContent,
                c = c.closest("[itemtype][itemscope]");
            if (!(-1 >= c.getAttribute("itemtype").indexOf("http://schema.org/Product")) && jf(this, c.parentElement, "alreadySeenForProductInfo")) return d
        }
        return null
    };

    function kf(a) {
        var b = null;
        null != a.Ga ? b = !a.Ga : a.b.isReady() && (b = !1);
        return null != a.la && null != b ? new W(a.la, b) : null
    }
    af.prototype.Tb = function() {
        var a = this,
            b = kf(this);
        if (b) return b;
        for (var c = Array.prototype.slice.call(this.b.getRootNode().querySelectorAll("[itemscope][itemtype]")).filter(function(b) {
                return a.oa.checkString(b.getAttribute("itemtype"), We)
            }), d = 0; c[d] && null == b; d++) b = c[d], null == this.Ga && (this.Ga = hf(this, b)), this.la || (this.la = this.ib(b)), b = kf(this);
        return b
    };
    af.prototype.check = function() {
        return this.b.getBody() ? this.Tb() : null
    };

    function df(a, b) {
        return (a = a.querySelector('meta[name="' + b + '"]')) ? a.getAttribute("content") : null
    };

    function lf(a) {
        var b = this;
        this.a = a;
        this.b = vc(a);
        this.Ua = Promise.resolve();
        this.Bb = null;
        this.M = {};
        this.cb = !1;
        this.ra = null;
        this.eb = new Promise(function(a) {
            b.ra = a
        });
        this.za = null;
        this.ba = new K(this.b, this.eb);
        this.ba.init()
    }
    e = lf.prototype;
    e.whenReady = function() {
        return this.Ua
    };

    function Z(a, b) {
        if (!a.cb && b) {
            a.cb = !0;
            var c;
            a.Bb ? c = Promise.resolve(new W(a.Bb, !1)) : (a.za = new Ye(a.b), c = a.za.resolveConfig().then(function(b) {
                a.za = null;
                return b
            }));
            c.then(function(b) {
                a.ra(new mf(a.b, b, {
                    configPromise: a.eb
                }, a.M));
                a.ra = null
            }, function(b) {
                a.ra(Promise.reject(b));
                a.ra = null
            })
        } else b && a.za && a.za.check();
        return a.eb
    }
    e.startSubscriptionsFlowIfNeeded = function() {
        var a;
        a = this.a.document;
        var b = df(a, "subscriptions-control");
        a = b ? b : (a = a.querySelector("script[subscriptions-control]")) ? a.getAttribute("subscriptions-control") : null;
        Ea(a, "mode");
        return "manual" == a ? null : this.start()
    };
    e.init = function(a) {
        C(!this.cb, "already configured");
        this.Bb = a
    };
    e.configure = function(a) {
        Object.assign(this.M, a);
        return Z(this, !1).then(function(b) {
            return b.configure(a)
        })
    };
    e.start = function() {
        return Z(this, !0).then(function(a) {
            return a.start()
        })
    };
    e.reset = function() {
        return Z(this, !0).then(function(a) {
            return a.reset()
        })
    };
    e.clear = function() {
        return Z(this, !0).then(function(a) {
            return a.clear()
        })
    };
    e.getEntitlements = function(a) {
        return Z(this, !0).then(function(b) {
            return b.getEntitlements(a)
        })
    };
    e.setOnEntitlementsResponse = function(a) {
        return Z(this, !1).then(function(b) {
            return b.setOnEntitlementsResponse(a)
        })
    };
    e.getOffers = function(a) {
        return Z(this, !0).then(function(b) {
            return b.getOffers(a)
        })
    };
    e.showOffers = function(a) {
        return Z(this, !0).then(function(b) {
            return b.showOffers(a)
        })
    };
    e.showUpdateOffers = function(a) {
        return Z(this, !0).then(function(b) {
            return b.showUpdateOffers(a)
        })
    };
    e.showSubscribeOption = function(a) {
        return Z(this, !0).then(function(b) {
            return b.showSubscribeOption(a)
        })
    };
    e.showAbbrvOffer = function(a) {
        return Z(this, !0).then(function(b) {
            return b.showAbbrvOffer(a)
        })
    };
    e.showContributionOptions = function(a) {
        return Z(this, !0).then(function(b) {
            return b.showContributionOptions(a)
        })
    };
    e.waitForSubscriptionLookup = function(a) {
        return Z(this, !0).then(function(b) {
            return b.waitForSubscriptionLookup(a)
        })
    };
    e.setOnNativeSubscribeRequest = function(a) {
        return Z(this, !1).then(function(b) {
            return b.setOnNativeSubscribeRequest(a)
        })
    };
    e.setOnSubscribeResponse = function(a) {
        return Z(this, !1).then(function(b) {
            return b.setOnSubscribeResponse(a)
        })
    };
    e.subscribe = function(a) {
        return Z(this, !0).then(function(b) {
            return b.subscribe(a)
        })
    };
    e.updateSubscription = function(a) {
        return Z(this, !0).then(function(b) {
            return b.updateSubscription(a)
        })
    };
    e.setOnContributionResponse = function(a) {
        return Z(this, !1).then(function(b) {
            return b.setOnContributionResponse(a)
        })
    };
    e.contribute = function(a) {
        return Z(this, !0).then(function(b) {
            return b.contribute(a)
        })
    };
    e.completeDeferredAccountCreation = function(a) {
        return Z(this, !0).then(function(b) {
            return b.completeDeferredAccountCreation(a)
        })
    };
    e.setOnLoginRequest = function(a) {
        return Z(this, !1).then(function(b) {
            return b.setOnLoginRequest(a)
        })
    };
    e.setOnLinkComplete = function(a) {
        return Z(this, !1).then(function(b) {
            return b.setOnLinkComplete(a)
        })
    };
    e.linkAccount = function() {
        return Z(this, !0).then(function(a) {
            return a.linkAccount()
        })
    };
    e.setOnFlowStarted = function(a) {
        return Z(this, !1).then(function(b) {
            return b.setOnFlowStarted(a)
        })
    };
    e.setOnFlowCanceled = function(a) {
        return Z(this, !1).then(function(b) {
            return b.setOnFlowCanceled(a)
        })
    };
    e.saveSubscription = function(a) {
        return Z(this, !0).then(function(b) {
            return b.saveSubscription(a)
        })
    };
    e.showLoginPrompt = function() {
        return Z(this, !0).then(function(a) {
            return a.showLoginPrompt()
        })
    };
    e.showLoginNotification = function() {
        return Z(this, !0).then(function(a) {
            return a.showLoginNotification()
        })
    };
    e.createButton = function(a, b) {
        return this.ba.create(a, b)
    };
    e.attachSmartButton = function(a, b, c) {
        return Z(this, !0).then(function(d) {
            return d.attachSmartButton(a, b, c)
        })
    };
    e.attachButton = function(a, b, c) {
        return this.ba.attach(a, b, c)
    };
    e.getPropensityModule = function() {
        return Z(this, !0).then(function(a) {
            return a.getPropensityModule()
        })
    };
    e.getLogger = function() {
        return Z(this, !0).then(function(a) {
            return a.getLogger()
        })
    };

    function mf(a, b, c, d) {
        var f = this;
        c = c || {};
        c.configPromise = c.configPromise || Promise.resolve();
        this.l = new Ge(c.configPromise);
        this.b = vc(a);
        this.a = this.b.getWin();
        this.M = {
            windowOpenMode: "auto",
            analyticsMode: 0,
            enableSwgAnalytics: !1,
            enablePropensity: !1
        };
        ub(this.a) && (this.M.windowOpenMode = "redirect");
        d && nf(this, d);
        this.H = b;
        this.C = this.b.whenReady();
        this.fc = new bd(this.b);
        this.K = c.fetcher || new ad(this.a);
        this.B = new Ce(this.a);
        this.h = new Fc(this.b);
        this.g = new kb(this.a);
        this.Pa = new ne(this.a, this.g, this.h);
        this.v = new Jb;
        this.Jc = new Qe(this);
        this.J = new Ie(this);
        this.U = new Kc(this.a, this.H, this.K, this);
        this.Rc = new Pe(this.a, this, this.K);
        this.Nc = new xe(this.H, this.K);
        this.ba = new K(this.b, Promise.resolve(this));
        var g = new Ae(this.a.document);
        g.prefetch("https://news.google.com/swg/js/v1/loader.svg");
        Te(this);
        jc(this);
        this.Pa.preconnect(g);
        tb(this.b, ".swg-dialog,.swg-toast{box-sizing:border-box;background-color:#fff!important}.swg-toast{position:fixed!important;bottom:0!important;max-height:46px!important;z-index:2147483647!important;border:none!important}@media (max-height:640px), (max-width:640px){.swg-dialog,.swg-toast{width:480px!important;left:-240px!important;margin-left:50vw!important;border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important}}@media (min-width:640px) and (min-height:640px){.swg-dialog{width:630px!important;left:-315px!important;margin-left:50vw!important;background-color:transparent!important;border:none!important}.swg-toast{left:0!important}}@media (max-width:480px){.swg-dialog,.swg-toast{width:100%!important;left:0!important;right:0!important;margin-left:0!important}}\n/*# sourceURL=/./src/components/dialog.css*/");
        this.g.onRedirectError(function(a) {
            f.J.addLabels(["redirect"]);
            f.l.logSwgEvent(2E3, !1);
            f.fc.error("Redirect error", a)
        })
    }
    e = mf.prototype;
    e.doc = function() {
        return this.b
    };
    e.win = function() {
        return this.a
    };
    e.pageConfig = function() {
        return this.H
    };
    e.jserror = function() {
        return this.fc
    };
    e.activities = function() {
        return this.g
    };
    e.payClient = function() {
        return this.Pa
    };
    e.dialogManager = function() {
        return this.h
    };
    e.entitlementsManager = function() {
        return this.U
    };
    e.callbacks = function() {
        return this.v
    };
    e.storage = function() {
        return this.B
    };
    e.analytics = function() {
        return this.J
    };
    e.init = function() {};
    e.configure = function(a) {
        nf(this, a)
    };

    function nf(a, b) {
        var c = "",
            d;
        for (d in b) {
            var f = b[d];
            switch (d) {
                case "windowOpenMode":
                    "auto" != f && "redirect" != f && (c = "Unknown windowOpenMode: " + f);
                    break;
                case "experiments":
                    f.forEach(function(b) {
                        U(a.a)[b] = !0
                    });
                    break;
                case "analyticsMode":
                    0 != f && 1 != f && (c = "Unknown analytics mode: " + f);
                    break;
                case "enableSwgAnalytics":
                    H(f) || (c = "Unknown enableSwgAnalytics value: " + f);
                    break;
                case "enablePropensity":
                    H(f) || (c = "Unknown enablePropensity value: " + f);
                    break;
                default:
                    c = "Unknown config property: " + d
            }
        }
        C(!c, c || void 0);
        Object.assign(a.M,
            b)
    }
    e.config = function() {
        return this.M
    };
    e.reset = function() {
        this.U.reset();
        this.h.completeAll()
    };
    e.clear = function() {
        this.U.clear();
        this.h.completeAll()
    };
    e.start = function() {
        if (!this.H.getProductId() || !this.H.isLocked()) return Promise.resolve();
        this.getEntitlements()
    };
    e.getEntitlements = function(a) {
        return this.U.getEntitlements(a).then(function(a) {
            return a.clone()
        })
    };
    e.setOnEntitlementsResponse = function(a) {
        this.v.setOnEntitlementsResponse(a)
    };
    e.getOffers = function(a) {
        return this.Nc.getOffers(a && a.productId)
    };
    e.showOffers = function(a) {
        var b = this;
        return this.C.then(function() {
            C(a ? !a.oldSku : !0, "The showOffers() method cannot be used to update a subscription. Use the showUpdateOffers() method instead.");
            return (new V(b, a)).start()
        })
    };
    e.showUpdateOffers = function(a) {
        var b = this;
        C(U(this.a)["replace-subscription"] || !1, "Not yet launched!");
        return this.C.then(function() {
            C(a ? !!a.oldSku : !1, "The showUpdateOffers() method cannot be used for new subscribers. Use the showOffers() method instead.");
            return (new V(b, a)).start()
        })
    };
    e.showSubscribeOption = function(a) {
        var b = this;
        return this.C.then(function() {
            return (new ye(b, a)).start()
        })
    };
    e.showAbbrvOffer = function(a) {
        var b = this;
        return this.C.then(function() {
            return (new ze(b, a)).start()
        })
    };
    e.showContributionOptions = function(a) {
        var b = this;
        C(U(this.a).contributions || !1, "Not yet launched!");
        return this.C.then(function() {
            return (new oc(b, a)).start()
        })
    };
    e.waitForSubscriptionLookup = function(a) {
        var b = this;
        return this.C.then(function() {
            return (new we(b, a)).start()
        })
    };
    e.setOnLoginRequest = function(a) {
        this.v.setOnLoginRequest(a)
    };
    e.setOnLinkComplete = function(a) {
        this.v.setOnLinkComplete(a)
    };
    e.linkAccount = function() {
        var a = this;
        return this.C.then(function() {
            return (new Re(a)).start()
        })
    };
    e.saveSubscription = function(a) {
        var b = this;
        return this.C.then(function() {
            return (new Ue(b, a)).start()
        })
    };
    e.showLoginPrompt = function() {
        var a = this;
        return this.C.then(function() {
            return (new dd(a)).start()
        })
    };
    e.showLoginNotification = function() {
        var a = this;
        return this.C.then(function() {
            return (new ed(a)).start()
        })
    };
    e.setOnNativeSubscribeRequest = function(a) {
        this.v.setOnSubscribeRequest(a)
    };
    e.setOnSubscribeResponse = function(a) {
        this.v.setOnSubscribeResponse(a)
    };
    e.subscribe = function(a) {
        var b = this;
        C("string" === typeof a, "The subscribe() method can only take a sku as its parameter; for subscription updates please use the updateSubscription() method");
        return this.C.then(function() {
            return (new Q(b, a)).start()
        })
    };
    e.updateSubscription = function(a) {
        var b = this;
        C(U(this.a)["replace-subscription"] || !1, "Not yet launched!");
        C(a ? a.oldSku : !1, "The updateSubscription() method should be used for subscription updates; for new subscriptions please use the subscribe() method");
        return this.C.then(function() {
            return (new Q(b, a)).start()
        })
    };
    e.setOnContributionResponse = function(a) {
        this.v.setOnContributionResponse(a)
    };
    e.contribute = function(a) {
        var b = this;
        C(U(this.a).contributions || !1, "Not yet launched!");
        return this.C.then(function() {
            return (new Q(b, a, "UI_CONTRIBUTION")).start()
        })
    };
    e.completeDeferredAccountCreation = function(a) {
        var b = this;
        return this.C.then(function() {
            return (new pc(b, a || null)).start()
        })
    };
    e.setOnFlowStarted = function(a) {
        this.v.setOnFlowStarted(a)
    };
    e.setOnFlowCanceled = function(a) {
        this.v.setOnFlowCanceled(a)
    };
    e.createButton = function(a, b) {
        return this.ba.create(a, b)
    };
    e.attachButton = function(a, b, c) {
        this.ba.attach(a, b, c)
    };
    e.attachSmartButton = function(a, b, c) {
        C(U(this.a).smartbox || !1, "Not yet launched!");
        this.ba.attachSmartButton(this, a, b, c)
    };
    e.getPropensityModule = function() {
        return Promise.resolve(this.Rc)
    };
    e.eventManager = function() {
        return this.l
    };
    e.getLogger = function() {
        return Promise.resolve(this.Jc)
    };

    function of (a) {
        return {
            init: a.init.bind(a),
            configure: a.configure.bind(a),
            start: a.start.bind(a),
            reset: a.reset.bind(a),
            clear: a.clear.bind(a),
            getEntitlements: a.getEntitlements.bind(a),
            linkAccount: a.linkAccount.bind(a),
            showLoginPrompt: a.showLoginPrompt.bind(a),
            showLoginNotification: a.showLoginNotification.bind(a),
            getOffers: a.getOffers.bind(a),
            showOffers: a.showOffers.bind(a),
            showUpdateOffers: a.showUpdateOffers.bind(a),
            showAbbrvOffer: a.showAbbrvOffer.bind(a),
            showSubscribeOption: a.showSubscribeOption.bind(a),
            showContributionOptions: a.showContributionOptions.bind(a),
            waitForSubscriptionLookup: a.waitForSubscriptionLookup.bind(a),
            subscribe: a.subscribe.bind(a),
            updateSubscription: a.updateSubscription.bind(a),
            contribute: a.contribute.bind(a),
            completeDeferredAccountCreation: a.completeDeferredAccountCreation.bind(a),
            setOnEntitlementsResponse: a.setOnEntitlementsResponse.bind(a),
            setOnLoginRequest: a.setOnLoginRequest.bind(a),
            setOnLinkComplete: a.setOnLinkComplete.bind(a),
            setOnNativeSubscribeRequest: a.setOnNativeSubscribeRequest.bind(a),
            setOnSubscribeResponse: a.setOnSubscribeResponse.bind(a),
            setOnContributionResponse: a.setOnContributionResponse.bind(a),
            setOnFlowStarted: a.setOnFlowStarted.bind(a),
            setOnFlowCanceled: a.setOnFlowCanceled.bind(a),
            saveSubscription: a.saveSubscription.bind(a),
            createButton: a.createButton.bind(a),
            attachButton: a.attachButton.bind(a),
            attachSmartButton: a.attachSmartButton.bind(a),
            getPropensityModule: a.getPropensityModule.bind(a),
            getLogger: a.getLogger.bind(a)
        }
    };
    A("Subscriptions Runtime: 0.1.22.73");
    (function(a) {
        function b(a) {
            a && c.whenReady().then(function() {
                a(f)
            })
        }
        if (!a.SWG || Array.isArray(a.SWG)) {
            var c = new lf(a),
                d = [].concat(a.SWG, a.SUBSCRIPTIONS),
                f = of (c),
                g = {};
            Object.defineProperty(g, "push", {
                get: function() {
                    return b
                },
                configurable: !1
            });
            a.SWG = g;
            a.SUBSCRIPTIONS = g;
            d && d.forEach(b);
            c.startSubscriptionsFlowIfNeeded()
        }
    })(self);
})();
//# sourceMappingURL=swg.js.map