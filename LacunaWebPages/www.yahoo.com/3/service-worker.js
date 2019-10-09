/* version: 1.0.65 */
(function() {
    'use strict';

    function a(mt, ht) {
        var gt = 32,
            vt = mt.length;
        if (vt > gt) {
            throw new Error('Invalid key length for ' + mt + '. Must be <= ' + gt)
        }
        var _t = /^[\w\-_\u0080-\uFFFF]+$/;
        if (!_t.exec(mt)) {
            throw new Error('Invalid key ' + mt)
        }
        var wt = /^[\u0002\u0020-\uFFFF]+$/;
        if (!wt.exec(ht)) {
            throw new Error('Invalid value for ' + mt)
        }
    }

    function y() {
        const mt = self.navigator && self.navigator.userAgent;
        return mt && (-1 < mt.indexOf('Android') || -1 < mt.indexOf('android')) ? !1 : !('image' in Notification.prototype)
    }
    Array.isArray || (Array.isArray = function(mt) {
        return '[object Array]' === Object.prototype.toString.call(mt)
    });
    var b = {
            cacheBuster: function() {
                for (var vt, mt = 0, ht = '', gt = ''; 16 > mt; mt++) vt = Math.floor(62 * Math.random()), gt = 10 > vt ? vt : String.fromCharCode(36 > vt ? vt + 55 : vt + 61), ht += gt;
                return ht + ',' + Math.random()
            },
            validate: a,
            validateObj: function(mt) {
                for (var ht in mt) mt.hasOwnProperty(ht) && a(ht, mt[ht])
            },
            absorb: function(mt, ht) {
                for (var gt in ht) ht.hasOwnProperty(gt) && (mt[gt] = ht[gt])
            },
            absorbValid: function(mt, ht) {
                for (var gt in ht) ht.hasOwnProperty(gt) && (a(gt, ht[gt]), mt[gt] = ht[gt])
            },
            clone: function(mt) {
                var ht = {};
                for (var gt in mt) mt.hasOwnProperty(gt) && (ht[gt] = mt[gt]);
                return ht
            },
            cloneValid: function(mt) {
                var ht = {};
                for (var gt in mt) mt.hasOwnProperty(gt) && (a(gt, mt[gt]), ht[gt] = mt[gt]);
                return ht
            },
            time: new function() {
                this.newTime = function() {
                    this.date = new Date, this.ts = Math.floor(this.date.getTime() / 1e3), this.ms = this.date.getMilliseconds()
                }, this.newTime()
            }
        },
        x = b,
        k = function(mt, ht, gt, vt) {
            var yt = 'click' === ht ? 'c' : 'pv' === ht ? 'b' : 'p';
            var _t = null,
                bt = '';
            gt && (bt = encodeURIComponent(gt._R || ''), delete gt._R, _t = function() {
                var kt = [];
                for (var Et in gt) gt.hasOwnProperty(Et) && kt.push(encodeURIComponent(Et + '\x03' + gt[Et]));
                return ('c' === yt ? '&_K=' : '&_P=') + kt.join('%04').replace(/'/g, '%27')
            }());
            var wt = function() {
                    if (!vt) return 'c' === yt ? '&_C=%04' : null;
                    var kt = [];
                    for (var Et in vt) vt.hasOwnProperty(Et) && kt.push(encodeURIComponent(Et + '\x03' + vt[Et]));
                    return ('c' === yt ? '&_C=' : '&_L=') + kt.join('%04').replace(/'/g, '%27')
                }(),
                St = '';
            'p' === yt && 'richview' === ht && (St = '&_V=R');
            var xt = ['?s=' + mt, St, '&t=' + b.cacheBuster(), '&_I=', '&_AO=', '&_NOL=', '&_R=' + bt, _t, wt].join('');
            return ['https://geo.yahoo.com/' + yt, xt].join('')
        },
        E = 1,
        R = '0.1.3',
        I = {
            EVENT_TRIGGER_CLICK: {
                etrg: 'click',
                usergenf: 1
            },
            EVENT_TRIGGER_PRESS: {
                etrg: 'press',
                usergenf: 1
            },
            EVENT_TRIGGER_SWIPE: {
                etrg: 'swipe',
                usergenf: 1
            },
            EVENT_TRIGGER_SCROLL: {
                etrg: 'scroll',
                usergenf: 1
            },
            EVENT_TRIGGER_HOVER: {
                etrg: 'hover',
                usergenf: 1
            },
            EVENT_TRIGGER_DROP: {
                etrg: 'drop',
                usergenf: 1
            },
            EVENT_TRIGGER_DRAG: {
                etrg: 'drag',
                usergenf: 1
            },
            EVENT_TRIGGER_PINCH: {
                etrg: 'pinch',
                usergenf: 1
            },
            EVENT_TRIGGER_ORIENT: {
                etrg: 'orient',
                usergenf: 1
            }
        },
        A = function(mt) {
            return function() {
                var ht = mt.apply(this, arguments);
                return new Promise(function(gt, vt) {
                    function yt(_t, bt) {
                        try {
                            var wt = ht[_t](bt),
                                St = wt.value
                        } catch (xt) {
                            return void vt(xt)
                        }
                        return wt.done ? void gt(St) : Promise.resolve(St).then(function(xt) {
                            yt('next', xt)
                        }, function(xt) {
                            yt('throw', xt)
                        })
                    }
                    return yt('next')
                })
            }
        },
        j = Object.assign || function(mt) {
            for (var gt, ht = 1; ht < arguments.length; ht++)
                for (var vt in gt = arguments[ht], gt) Object.prototype.hasOwnProperty.call(gt, vt) && (mt[vt] = gt[vt]);
            return mt
        },
        T = function(mt, ht) {
            var gt = {};
            for (var vt in mt) 0 <= ht.indexOf(vt) || Object.prototype.hasOwnProperty.call(mt, vt) && (gt[vt] = mt[vt]);
            return gt
        };
    const U = 'features',
        z = mt => new Promise((ht, gt) => {
            mt.onsuccess = ({
                target: {
                    result: vt
                }
            }) => ht(vt), mt.onerror = ({
                target: {
                    error: vt
                }
            }) => gt(vt)
        }),
        C = (() => {
            var mt = A(function*() {
                const ht = yield z(self.indexedDB.open('serviceWorker', 1));
                try {
                    if (ht.objectStoreNames.contains(U)) {
                        const gt = ht.transaction(U, 'readonly').objectStore(U);
                        return z(gt.get('features'))
                    }
                } finally {
                    ht.close()
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        B = (() => {
            var mt = A(function*() {
                const ht = yield C();
                return ht && ht.values || {}
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        O = (() => {
            const mt = navigator.userAgent,
                ht = navigator.platform;
            if (ht) {
                if (-1 !== ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(ht)) return !0;
                if (-1 !== ['iPhone', 'iPad', 'iPod'].indexOf(ht)) return !0;
                if (-1 !== ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(ht)) return !1
            }
            return !!/Android/.test(mt) || !!/iPad|iPhone|iPod/.test(mt)
        })(),
        q = 'offline',
        D = 'fetch',
        $ = mt => new Promise((ht, gt) => {
            mt.onsuccess = ({
                target: {
                    result: vt
                }
            }) => ht(vt), mt.onerror = ({
                target: {
                    error: vt
                }
            }) => gt(vt), mt.onupgradeneeded = ({
                target: {
                    result: vt
                }
            }) => {
                const yt = vt.createObjectStore(D, {
                    keyPath: 'url'
                });
                yt.createIndex('key', ['createdTime', 'url', 'ttl'])
            }
        }),
        Z = (() => {
            var mt = A(function*() {
                const ht = yield $(self.indexedDB.open(q, 1));
                try {
                    if (ht.objectStoreNames.contains(D)) {
                        const gt = ht.transaction(D, 'readonly').objectStore(D),
                            vt = gt.openCursor(),
                            yt = [];
                        return yield new Promise(function(_t) {
                            vt.onsuccess = function(bt) {
                                const wt = bt.target.result;
                                if (wt) {
                                    const {
                                        createdTime: St,
                                        retryCount: xt,
                                        url: kt
                                    } = wt.value;
                                    yt.push({
                                        createdTime: St,
                                        retryCount: xt,
                                        url: kt
                                    }), wt.continue()
                                } else return _t(yt), yt
                            }, vt.onerror = function(bt) {
                                fe(bt, {
                                    fr: 'getAll',
                                    fr1: 'requestError'
                                }), _t(yt)
                            }
                        })
                    }
                    return Promise.resolve([])
                } catch (gt) {
                    return fe(gt, {
                        fr: 'getAll',
                        fr1: 'catchError'
                    }), Promise.reject(gt)
                } finally {
                    ht.close()
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        G = (() => {
            var mt = A(function*(ht) {
                let gt;
                try {
                    gt = yield B(), gt = gt || {
                        offlineBeacon: 0
                    }
                } catch (vt) {
                    fe(vt, {
                        fr: 'offlineBeacon',
                        fr1: 'featuresFailed'
                    })
                }
                if (gt && 1 === parseInt(gt.offlineBeacon, 10)) {
                    const vt = yield $(self.indexedDB.open(q, 1));
                    try {
                        if (vt.objectStoreNames.contains(D)) {
                            const yt = vt.transaction(D, 'readwrite').objectStore(D);
                            return $(yt.put({
                                createdTime: Date.now(),
                                retryCount: 3,
                                url: ht
                            }))
                        }
                        return fe(new Error('store not found : ' + D), {
                            fr: 'add'
                        }), Promise.resolve(!1)
                    } catch (yt) {
                        return fe(yt, {
                            fr: 'add',
                            fr1: 'catchError'
                        }), Promise.reject(yt)
                    } finally {
                        vt.close()
                    }
                }
                return Promise.resolve(!1)
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        Y = (() => {
            var mt = A(function*(ht) {
                const gt = yield $(self.indexedDB.open(q, 1));
                try {
                    if (gt.objectStoreNames.contains(D)) {
                        const vt = gt.transaction(D, 'readwrite').objectStore(D),
                            yt = yield $(vt.get(ht));
                        return yt ? $(vt.put(j({}, yt, {
                            retryCount: --yt.retryCount
                        }))) : void 0
                    }
                    return fe(new Error('store not found : ' + D), {
                        fr: 'decrementRetry'
                    }), Promise.resolve(!1)
                } catch (vt) {
                    return fe(vt, {
                        fr: 'decrementRetry',
                        fr1: 'catchError'
                    }), Promise.reject(vt)
                } finally {
                    gt.close()
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        W = (() => {
            var mt = A(function*(ht) {
                const gt = yield $(self.indexedDB.open(q, 1));
                try {
                    if (gt.objectStoreNames.contains(D)) {
                        const vt = gt.transaction(D, 'readwrite').objectStore(D);
                        return $(vt.delete(ht))
                    }
                    return fe(new Error('store not found : ' + D), {
                        fr: 'remove'
                    }), Promise.resolve(!1)
                } catch (vt) {
                    return fe(vt, {
                        fr: 'decrementRetry',
                        fr1: 'remove'
                    }), Promise.reject(vt)
                } finally {
                    gt.close()
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        K = 'subscriptions',
        J = mt => new Promise((ht, gt) => {
            mt.onsuccess = ({
                target: {
                    result: vt
                }
            }) => ht(vt), mt.onerror = ({
                target: {
                    error: vt
                }
            }) => gt(vt)
        }),
        ee = (() => {
            var mt = A(function*() {
                const ht = yield J(self.indexedDB.open('yahooNotifications'));
                try {
                    if (ht.objectStoreNames.contains(K)) {
                        const gt = ht.transaction(K).objectStore(K);
                        return J(gt.get('push'))
                    }
                } finally {
                    ht.close()
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        te = (() => {
            var mt = A(function*() {
                const ht = yield self.registration.pushManager.getSubscription();
                return ht ? ht.endpoint : null
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        ae = (() => {
            var mt = A(function*() {
                const ht = Date.now(),
                    [gt, vt = {}] = yield Promise.all([te(), ee()]);
                return delete vt['type'], j({
                    spaceId: '1197802003'
                }, vt, {
                    version: '1.0.65',
                    scope: self.registration.scope,
                    subscription_endpoint: gt,
                    metadataTime: Date.now() - ht
                })
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        {
            unregisteredURL: ie
        } = {
            pageViewURL: function(mt, ht) {
                if ('string' != typeof mt && 'number' != typeof mt) throw new Error('Spaceid is REQUIRED');
                if (parseInt(mt) != mt) throw new Error('Spaceid is INVALID');
                x.time.newTime();
                var gt = {
                    _pl: 17,
                    _ms: x.time.ms,
                    _ts: x.time.ts,
                    A_v: 'YI13N-BG-' + R,
                    _gsqNo: E++
                };
                try {
                    ht && x.absorbValid(gt, ht)
                } catch (vt) {
                    throw new Error('pageParams Invalid')
                }
                return k(mt, 'pv', gt, null)
            },
            interactionURL: function(mt, ht, gt, vt, yt) {
                if ('string' != typeof mt && 'number' != typeof mt) throw new Error('Spaceid is REQUIRED');
                if (parseInt(mt) != mt) throw new Error('Spaceid is INVALID');
                if (!ht || 'string' != typeof ht || !I[ht]) throw new Error('eventTrigger REQUIRED');
                if (!gt || 'string' != typeof gt) throw new Error('eventName REQUIRED');
                x.time.newTime();
                var _t = {
                    _pl: 17,
                    _ms: x.time.ms,
                    _ts: x.time.ts,
                    A_v: 'YI13N-BG-' + R,
                    etrg: I[ht].etrg,
                    usergenf: I[ht].usergenf,
                    outcm: gt,
                    _gsqNo: E++
                };
                try {
                    vt && x.absorbValid(_t, vt)
                } catch (bt) {
                    throw new Error('pageParams Invalid')
                }
                if (yt) {
                    if ('object' != typeof yt || Array.isArray(yt)) throw new Error('interactionParams is INVALID');
                    try {
                        yt = x.cloneValid(yt)
                    } catch (bt) {
                        throw new Error('interactionParams are INVALID')
                    }
                }
                return k(mt, 'click', _t, yt)
            },
            unregisteredURL: function(mt, ht, gt) {
                if ('string' != typeof mt && 'number' != typeof mt) throw new Error('Spaceid is REQUIRED');
                if (parseInt(mt) != mt) throw new Error('Spaceid is INVALID');
                if (!ht || 'string' != typeof ht) throw new Error('eventName REQUIRED');
                x.time.newTime();
                var vt = {
                    _pl: 17,
                    _ms: x.time.ms,
                    _ts: x.time.ts,
                    A_v: 'YI13N-BG-' + R,
                    outcm: ht,
                    _gsqNo: E++
                };
                try {
                    gt && x.absorbValid(vt, gt)
                } catch (yt) {
                    throw new Error('pageParams Invalid')
                }
                return k(mt, 'lv', vt, null)
            }
        },
        ne = 'https://www.yahoo.com/_td_api/beacon/',
        se = 'notification-sw',
        ce = mt => (() => {
            var ht = A(function*(...gt) {
                let vt, yt = !1;
                try {
                    return vt = yield mt(...gt), yield fetch(vt, {
                        mode: 'no-cors',
                        credentials: 'include'
                    }), !0
                } catch (_t) {
                    yt = !0, console.error(_t)
                }
                if (vt && !0 !== navigator.onLine && yt) {
                    const {
                        href: _t
                    } = vt;
                    try {
                        yield G(_t)
                    } catch (bt) {
                        console.error(bt)
                    }
                }
            });
            return function() {
                return ht.apply(this, arguments)
            }
        })(),
        le = mt => ce((() => {
            var ht = A(function*(gt) {
                const {
                    spaceId: vt,
                    bucket: yt
                } = yield ae(), {
                    title: _t,
                    uuid: bt,
                    followId: wt,
                    onepush_submit: St,
                    notification_id: xt,
                    pl1: kt,
                    evaluateBuckets: Et,
                    publish_time: Rt,
                    timeline_name: It,
                    url: Nt
                } = gt || {}, At = {
                    msg_id: xt,
                    msg_type: It || 'brknews',
                    msg_txt: _t || 'fallback notification',
                    msg_format: 'text',
                    msg_sent_time: Rt,
                    pstaid: bt,
                    pl1: kt,
                    aid: wt,
                    test: Et || yt,
                    t: St,
                    _w: Nt
                };
                return Et && (At.stest = Et), mt({
                    spaceId: vt,
                    params: At
                })
            });
            return function() {
                return ht.apply(this, arguments)
            }
        })()),
        ue = mt => {
            return Object.keys(mt).filter(ht => mt[ht] !== void 0).map(ht => `${ht}=${mt[ht]}`).join('&')
        },
        de = (() => {
            var mt = A(function*(ht) {
                if (!ht || !Array.isArray(ht) || 0 === ht.length) return !1;
                const gt = yield ae();
                try {
                    const vt = JSON.stringify(ht.map(function(yt) {
                        return j({}, yt, gt)
                    }));
                    return yield fetch(ne + 'batch/', {
                        body: vt,
                        credentials: 'include',
                        method: 'POST',
                        mode: 'no-cors'
                    }), !0
                } catch (vt) {
                    return !1
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        pe = ce((() => {
            var mt = A(function*(ht) {
                const gt = yield ae(), vt = j({}, ht, gt, {
                    src: se,
                    code: 'info'
                });
                return new URL(`info?${ue(vt)}`, ne)
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })()),
        fe = ce((() => {
            var mt = A(function*(ht, gt) {
                const vt = yield ae(), yt = j({}, gt, vt, {
                    src: se,
                    code: 'error',
                    name: ht.name,
                    message: ht.message
                });
                return new URL(`error?${ue(yt)}`, ne)
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })()),
        me = le(({
            spaceId: mt,
            params: ht
        }) => {
            return ie(mt, 'notification_received', ht)
        }),
        he = le(({
            spaceId: mt,
            params: ht
        }) => {
            return ht.msg_action = 'open', ie(mt, 'notification_engaged', ht)
        }),
        ge = le(({
            spaceId: mt,
            params: ht
        }) => {
            return ht.msg_action = 'dismissed', ie(mt, 'notification_engaged', ht)
        }),
        ve = mt => ht => {
            return ht.waitUntil(A(function*() {
                try {
                    yield mt(ht)
                } catch (gt) {
                    yield fe(gt)
                }
            })())
        },
        _e = 'context',
        we = mt => new Promise((ht, gt) => {
            mt.onsuccess = ({
                target: {
                    result: vt
                }
            }) => ht(vt), mt.onerror = ({
                target: {
                    error: vt
                }
            }) => gt(vt)
        }),
        Se = (() => {
            var mt = A(function*() {
                const ht = yield we(self.indexedDB.open('serviceWorker', 1));
                try {
                    if (ht.objectStoreNames.contains(_e)) {
                        const gt = ht.transaction(_e, 'readonly').objectStore(_e);
                        return we(gt.get('context'))
                    }
                } finally {
                    ht.close()
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        xe = (() => {
            var mt = A(function*() {
                const ht = yield Se();
                return ht && ht.values || {}
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })();
    var ke = {
        "en-US": {
            "Service Unavailable": 'Service Unavailable',
            "You have new notifications": 'You have new notifications'
        },
        "ar-JO": {
            "Service Unavailable": '\u0627\u0644\u062E\u062F\u0645\u0629 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631\u0629',
            "You have new notifications": '\u0644\u062F\u064A\u0643 \u0631\u0633\u0627\u0626\u0644 \u0625\u0639\u0644\u0627\u0645 \u062C\u062F\u064A\u062F\u0629'
        },
        "de-DE": {
            "Service Unavailable": 'Dienst nicht verf\xFCgbar',
            "You have new notifications": 'Sie haben neue Benachrichtigungen'
        },
        "el-GR": {
            "Service Unavailable": '\u039C\u03B7 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7 \u03C5\u03C0\u03B7\u03C1\u03B5\u03C3\u03AF\u03B1',
            "You have new notifications": '\u0388\u03C7\u03B5\u03C4\u03B5 \u03BD\u03AD\u03B5\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2'
        },
        "es-ES": {
            "Service Unavailable": 'Servicio no disponible',
            "You have new notifications": 'Tienes notificaciones nuevas'
        },
        "es-US": {
            "Service Unavailable": 'Servicio no disponible',
            "You have new notifications": 'Tienes notificaciones nuevas'
        },
        "fr-BE": {
            "Service Unavailable": 'Service indisponible',
            "You have new notifications": 'Vous avez de nouvelles notifications'
        },
        "fr-CA": {
            "Service Unavailable": 'Service indisponible',
            "You have new notifications": 'Vous avez de nouvelles notifications'
        },
        "fr-FR": {
            "Service Unavailable": 'Service indisponible',
            "You have new notifications": 'Vous avez de nouvelles notifications'
        },
        "id-ID": {
            "Service Unavailable": 'Layanan Tidak Tersedia',
            "You have new notifications": 'Anda memiliki notifikasi baru'
        },
        "it-IT": {
            "Service Unavailable": 'Servizio non disponibile',
            "You have new notifications": 'Hai nuove notifiche'
        },
        "nl-BE": {
            "Service Unavailable": 'Service niet beschikbaar',
            "You have new notifications": 'Je hebt nieuwe meldingen'
        },
        "pt-BR": {
            "Service Unavailable": 'Servi\xE7o indispon\xEDvel',
            "You have new notifications": 'Voc\xEA tem novas notifica\xE7\xF5es'
        },
        "ro-RO": {
            "Service Unavailable": 'Serviciu indisponibil',
            "You have new notifications": 'Ave\u021Bi notific\u0103ri noi'
        },
        "sv-SE": {
            "Service Unavailable": 'Tj\xE4nsten \xE4r inte tillg\xE4nglig',
            "You have new notifications": 'Det finns nya meddelanden'
        },
        "vi-VN": {
            "Service Unavailable": 'D\u1ECBch v\u1EE5 hi\u1EC7n kh\xF4ng ho\u1EA1t \u0111\u1ED9ng',
            "You have new notifications": 'B\u1EA1n c\xF3 th\xF4ng b\xE1o m\u1EDBi'
        }
    };
    const Ee = /^:([a-z])(\((.+)\))?/;
    var Re = () => {
        const mt = {};
        return {
            use({
                locale: ht,
                defaultCurrency: gt,
                messageBundle: vt
            }) {
                return mt.locale = ht, mt.defaultCurrency = gt, mt.messageBundle = vt, this.translate.bind(this)
            },
            translate(ht, ...gt) {
                const vt = this._buildKey(ht),
                    yt = mt.messageBundle[vt];
                if (yt) {
                    const _t = ht.slice(1).map(this._extractTypeInfo),
                        bt = gt.map((wt, St) => this._localize(wt, _t[St]));
                    return this._buildMessage(yt, ...bt)
                }
                return `Error: ${vt} translation missing!`
            },
            _localizers: {
                s: ht => ht && ht.toLocaleString(mt.locale),
                c: (ht, gt) => ht && ht.toLocaleString(mt.locale, {
                    style: 'currency',
                    currency: gt || mt.defaultCurrency
                }),
                n: (ht, gt) => ht && ht.toLocaleString(mt.locale, {
                    minimumFractionDigits: gt,
                    maximumFractionDigits: gt
                })
            },
            _extractTypeInfo(ht) {
                const gt = Ee.exec(ht);
                return gt ? {
                    type: gt[1],
                    options: gt[3]
                } : {
                    type: 's',
                    options: ''
                }
            },
            _localize(ht, {
                type: gt,
                options: vt
            }) {
                return this._localizers[gt](ht, vt)
            },
            _buildKey(ht) {
                const gt = _t => _t.replace(Ee, ''),
                    vt = gt(ht[ht.length - 1]);
                return ht.slice(0, -1).reduceRight((_t, bt, wt) => `${gt(bt)}{${wt}}${_t}`, vt)
            },
            _buildMessage(ht, ...gt) {
                return ht.replace(/{(\d)}/g, (vt, yt) => gt[+yt])
            }
        }
    };
    let Ie;
    const Ne = (() => {
            var mt = A(function*() {
                if (Ie) return Ie;
                let ht = 'en-US';
                try {
                    const gt = yield xe();
                    ht = gt.lang || ht
                } catch (gt) {}
                return Ie = Re().use({
                    locale: ht,
                    defaultCurrency: 'USD',
                    messageBundle: ke[ht] || ke['en-US'] || {}
                }), Ie
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        Ae = /\/\/(?:[^\/\.]+\.)?([^\/\.]+)\.yahoo\.com\/?(.*)$/,
        Te = {
            ng: !0,
            za: !0,
            au: !0,
            nz: !0,
            cn: !0,
            h1: !0,
            hk: !0,
            in: !0,
            id: !0,
            jp: !0,
            kr: !0,
            my: !0,
            ph: !0,
            pk: !0,
            aa: !0,
            sg: !0,
            tw: !0,
            k1: !0,
            th: !0,
            vn: !0,
            xa: !0,
            xe: !0,
            me: !0,
            at: !0,
            b2: !0,
            b3: !0,
            ch: !0,
            cz: !0,
            de: !0,
            dk: !0,
            ee: !0,
            es: !0,
            ct: !0,
            fi: !0,
            fr: !0,
            uk: !0,
            gr: !0,
            hu: !0,
            ie: !0,
            it: !0,
            lt: !0,
            lv: !0,
            nl: !0,
            no: !0,
            pl: !0,
            ro: !0,
            se: !0,
            tr: !0,
            ua: !0,
            ca: !0,
            cf: !0,
            qc: !0,
            mx: !0,
            us: !0,
            e1: !0,
            espanol: !0,
            www: !0,
            ar: !0,
            bo: !0,
            br: !0,
            cl: !0,
            co: !0,
            ec: !0,
            gf: !0,
            gy: !0,
            pe: !0,
            py: !0,
            sr: !0,
            uy: !0,
            ve: !0
        },
        Pe = {
            celebridades: 'celebrity',
            cine: 'movies',
            cinema: 'movies',
            kino: 'movies',
            nachrichten: 'news',
            noticias: 'news',
            notizie: 'news',
            people: 'celebrity',
            stars: 'celebrity',
            "vida-estilo": 'style'
        },
        Ue = {
            all: !0,
            fp: !0
        },
        Fe = (mt, ht) => {
            if (!mt) return null;
            const gt = new RegExp('[?&]' + ht + '=([^&#]*)', 'i'),
                vt = gt.exec(mt);
            return vt ? vt[1] : null
        },
        ze = (mt, ht, gt) => {
            const vt = new RegExp('([?&])' + ht + '=.*?(&|$)', 'i'),
                yt = -1 === mt.indexOf('?') ? '?' : '&';
            return mt.match(vt) ? mt.replace(vt, '$1' + ht + '=' + gt + '$2') : mt + yt + ht + '=' + gt
        },
        Ce = (mt, ht, gt) => {
            if (!mt || -1 === mt.indexOf('yahoo.com') || !gt || !ht) return mt;
            const vt = mt.match(Ae);
            if (vt) {
                'omg' === gt && (gt = 'celebrity');
                const yt = 'all' === gt ? 'fp' : gt;
                let _t = Te[vt[1]] ? 'fp' : vt[1];
                const bt = vt[2];
                _t = Pe[_t] || _t, ht && !ht.endsWith('/') && (ht = `${ht}/`), yt === _t ? mt = `${ht}${bt}?re=0` : Ue[yt] && (mt = `${ht}${_t}/${bt}?re=0`)
            }
            return mt
        },
        qe = 'notificationStatusByTag',
        Ve = mt => new Promise((ht, gt) => {
            mt.onsuccess = ({
                target: {
                    result: vt
                }
            }) => ht(vt), mt.onerror = ({
                target: {
                    error: vt
                }
            }) => gt(vt), mt.onupgradeneeded = ({
                target: {
                    result: vt
                }
            }) => {
                const yt = vt.createObjectStore(qe, {
                    keyPath: 'tag'
                });
                yt.createIndex('key', ['tag'])
            }
        }),
        $e = () => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(mt) {
                const ht = 0 | 16 * Math.random(),
                    gt = 'x' === mt ? ht : 8 | 3 & ht;
                return gt.toString(16)
            })
        },
        Ze = (mt, ht = {}, gt = 2e3) => {
            return new Promise((vt, yt) => {
                const _t = setTimeout(() => {
                    yt(new Error('Evalute fetch timed out'))
                }, gt);
                fetch(mt, ht).then(bt => {
                    clearTimeout(_t), vt(bt)
                }).catch(bt => {
                    clearTimeout(_t), yt(bt)
                })
            })
        },
        Ge = (() => {
            var mt = A(function*(ht, gt = 3) {
                let vt;
                try {
                    if (vt = yield Ve(self.indexedDB.open('yahooNotificationsQueue', 1)), vt.objectStoreNames.contains(qe)) {
                        const yt = vt.transaction(qe, 'readwrite').objectStore(qe),
                            _t = Date.now();
                        let bt;
                        try {
                            bt = yield Ve(yt.get(ht))
                        } catch (kt) {}
                        bt = bt || {};
                        let wt = bt.counter || 0,
                            St = bt.createdTime;
                        wt >= gt && (wt = 0), St && ((_t - St) / 1e3 >= 30 ? wt++ : St > _t && fe(new Error('Previous time is greater than current time'), {
                            fr: 'getTagDetailsAfterUpdatingCounter'
                        }));
                        const xt = {
                            createdTime: _t,
                            counter: wt || 1,
                            tag: ht
                        };
                        return yield Ve(yt.put(xt)), xt
                    }
                    return Promise.resolve(!1)
                } catch (yt) {
                    return Promise.reject(yt)
                } finally {
                    vt && vt.close()
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        Ye = (() => {
            var mt = A(function*(ht, gt = 'en-US', vt = 'US') {
                if (!ht || !ht.data) return ht;
                const {
                    experiments: yt = []
                } = ht.data;
                if (!Array.isArray(yt)) return ht;
                const {
                    length: _t
                } = yt;
                let bt = 0,
                    wt = 'noexp',
                    St = '';
                if (_t) {
                    const xt = $e();
                    let kt;
                    try {
                        const Et = yield Ze(`${'https://evalplus-web-api.data.yahoo.com/v1/buckets'}?psn=fpnotification.${vt.toLowerCase()}.${gt.toLowerCase()}&rid=${xt}`, {
                            credentials: 'include'
                        }, 6e3), Rt = yield Et.json(), {
                            configuration: It = {},
                            logString: Nt = ''
                        } = Rt || {}, {
                            notificationBucket: At
                        } = It;
                        St = Nt, At && yt.some(function({
                            bucket: jt
                        } = {}, Tt) {
                            return jt && At === jt && (bt = Tt + 1, !0)
                        })
                    } catch (Et) {
                        fe(Et, {
                            fr: 'getBucketBasedPayload',
                            fr1: xt
                        })
                    }
                    return 0 === bt ? (kt = ht, bt = 0, wt = 'control') : (kt = {
                        data: yt[bt - 1] || {},
                        meta: ht.meta
                    }, wt = kt.data.bucket || 'bucketWithoutName'), kt.meta = kt.meta || {}, kt.meta.pl1 = wt, kt.meta.evaluateBuckets = St, kt.data.onepush_submit = ht.data.onepush_submit, kt
                }
                return ht
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        We = (() => {
            var mt = A(function*(ht) {
                let yt, gt = 'en-US',
                    vt = 'US',
                    _t = {};
                try {
                    const Mt = yield xe();
                    gt = Mt.lang || gt, vt = Mt.region || vt, yt = Mt.site
                } catch (Mt) {}
                try {
                    _t = yield B()
                } catch (Mt) {}
                let bt = yield Ye(ht, gt, vt);
                bt = bt || {
                    data: {},
                    meta: {
                        fallback: !0
                    }
                };
                const wt = yield Ne(), St = wt `You have new notifications`, xt = 'https://s.yimg.com/cv/apiv2/notifications/default-notif-img.png-168x168.png', Et = !(bt.data && bt.data.title) || bt.meta && bt.meta.fallback, Rt = y(), {
                    registration: It = {}
                } = self, {
                    scope: Nt = 'https://www.yahoo.com/'
                } = It, {
                    image: Ft = xt,
                    title: zt = St,
                    summary: Ct = '',
                    uuid: At,
                    followId: jt,
                    timeline_name: Tt,
                    notification_id: Pt,
                    gondor_received: Bt = 0,
                    onepush_submit: Ot = 0,
                    publish_time: Ut
                } = bt.data || {};
                let {
                    url: qt
                } = bt.data || {};
                const Dt = Tt || 'Breaking News';
                let Lt = Dt;
                qt = qt && (_t.convertNotificationUrl && Ce(qt, Nt, yt) || qt) || Nt;
                try {
                    let Mt = yield Ge(Dt);
                    Mt = Mt || {}, Lt = `${Dt}_${Mt.counter||1}`
                } catch (Mt) {
                    fe(new Error('details for tag not found in store'), {
                        fr: 'createNotification'
                    })
                }
                const Vt = Et ? xt : void 0,
                    $t = Rt ? Vt : Ft,
                    Zt = bt.meta || {},
                    {
                        notification_id: Gt,
                        pl1: Yt = 0
                    } = Zt,
                    Wt = T(Zt, ['notification_id', 'pl1']);
                return {
                    title: zt,
                    body: Ct,
                    icon: $t,
                    tag: Lt,
                    badge: 'https://s.yimg.com/cv/apiv2/notifications/YCon_Badge_90_90_2.png',
                    data: j({}, Wt, {
                        fallback: Et,
                        useNNS: Rt,
                        title: zt,
                        body: Ct,
                        url: qt,
                        uuid: At,
                        followId: jt,
                        timeline_name: Tt,
                        notification_id: Pt,
                        publish_time: Ut,
                        onepush_notification_id: Gt,
                        gondor_received: 1e3 * Bt,
                        onepush_submit: 1e3 * Ot,
                        pl1: Yt,
                        notification_shown: Date.now()
                    })
                }
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        Me = (mt, {
            prefix: ht = ''
        } = {}) => {
            return Promise.all(mt.filter(gt => {
                return !ht || !gt.startsWith(ht)
            }).map(gt => {
                return caches.delete(gt)
            })).then(() => !0).catch(gt => {
                return fe(gt, {
                    fr: '_deleteCacheNames'
                }), !1
            })
        },
        Ke = (mt, ht, {
            excludes: gt = new Set
        } = {}) => {
            return Promise.all(mt.filter(vt => {
                const {
                    url: yt
                } = vt;
                let _t = !0;
                if (gt && gt.size)
                    for (const bt of gt.keys())
                        if (bt) {
                            const wt = new RegExp(bt);
                            wt.test(yt) && (_t = !1)
                        }
                return _t
            }).map((() => {
                var vt = A(function*(yt) {
                    const _t = yield caches.open(ht);
                    return _t.delete(yt)
                });
                return function() {
                    return vt.apply(this, arguments)
                }
            })())).then(() => {
                return !0
            }).catch(vt => {
                return fe(vt, {
                    fr: '_deleteKeysForCacheName'
                }), !1
            })
        },
        Qe = (() => {
            var mt = A(function*(ht, gt, {
                overrideCache: vt = !0
            } = {}) {
                let yt, _t = !1;
                if (!ht || !Array.isArray(gt)) return _t;
                if (gt = gt.filter(String), !gt.length) return _t;
                try {
                    yt = yield B(), yt = yt || {
                        precache: 0
                    }
                } catch (bt) {
                    fe(bt, {
                        fr: 'precache',
                        fr1: 'featuresFailed'
                    })
                }
                if (yt && 1 === parseInt(yt.precache, 10)) {
                    let bt;
                    try {
                        bt = yield caches.open(ht)
                    } catch (wt) {
                        fe(wt, {
                            fr: 'precache',
                            fr1: 'cacheOpenFailed'
                        })
                    }
                    if (bt) try {
                        yield Promise.all(gt.map((() => {
                            var wt = A(function*(St) {
                                if (!vt) {
                                    const Rt = yield bt.match(St);
                                    if (Rt) return Promise.resolve();
                                    pe({
                                        event: 'precache_delayed',
                                        url: St
                                    })
                                }
                                const xt = ze(St, 'stamp', '0'),
                                    kt = yield fetch(xt, {
                                        headers: {
                                            "X-SI": 0
                                        }
                                    }), Et = kt.clone();
                                return yield bt.put(St, Et)
                            });
                            return function() {
                                return wt.apply(this, arguments)
                            }
                        })())), pe({
                            event: 'precache'
                        }), _t = !0
                    } catch (wt) {
                        fe(wt, {
                            fr: 'precache',
                            fr1: 'cacheAddAllFailed'
                        })
                    }
                } else;
                return _t
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        He = (() => {
            var mt = A(function*() {
                let ht = !1;
                try {
                    const gt = yield caches.keys();
                    ht = yield Me(gt)
                } catch (gt) {
                    fe(gt, {
                        fr: 'deleteAllCacheNames',
                        fr1: 'cacheKeysFailed'
                    })
                }
                return ht
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        Xe = (() => {
            var mt = A(function*(ht, {
                excludes: gt
            } = {}) {
                let vt = !1;
                if (!ht) return yield vt;
                try {
                    const yt = yield caches.open(ht), _t = yield yt.keys();
                    pe({
                        event: 'deleteCacheKeysForCacheName'
                    }), vt = yield Ke(_t, ht, {
                        excludes: gt
                    })
                } catch (yt) {
                    fe(yt, {
                        fr: 'deleteCacheKeysForCacheName'
                    })
                }
                return vt
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        Je = (() => {
            var mt = A(function*(ht) {
                let gt = !1;
                if (!ht) return yield gt;
                try {
                    const vt = yield caches.keys();
                    gt = yield Me(vt, {
                        prefix: ht
                    }), pe({
                        event: 'deleteCacheNamesWithoutPrefix'
                    })
                } catch (vt) {
                    fe(vt, {
                        fr: 'deleteCacheNamesWithoutPrefix',
                        fr1: 'cacheKeysFailed',
                        prefix: ht
                    })
                }
                return gt
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        et = mt => {
            const ht = ['_P', '_K'].some(gt => {
                const vt = Fe(mt, gt);
                return !!vt && (mt = ze(mt, gt, `${vt}%04_o%030`), !0)
            });
            return ht ? mt : `${mt}&_o=0`
        },
        at = (() => {
            let mt = {};
            return (() => {
                var ht = A(function*(gt) {
                    const vt = mt[gt];
                    return vt ? vt : (mt[gt] = yield caches.open(gt), mt[gt])
                });
                return function() {
                    return ht.apply(this, arguments)
                }
            })()
        })(),
        rt = (mt, ht, gt = !1) => (() => {
            var vt = A(function*(yt) {
                if (fe(yt, {
                        fr: '_unableToResolve',
                        redirect: gt,
                        strategy: ht,
                        url: mt.request.url
                    }), gt) {
                    const {
                        url: bt
                    } = mt.request, wt = 'cacheFirst' === ht ? bt : ze(bt, 'swnocache', '1'), St = new Request(wt, {
                        redirect: 'manual'
                    });
                    let xt;
                    try {
                        xt = yield fetch(St)
                    } catch (kt) {}
                    if (xt) return xt
                }
                const _t = yield Ne();
                return new Response(`<h1>${_t`Service Unavailable`}</h1>`, {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: new Headers({
                        "Content-Type": 'text/html'
                    })
                })
            });
            return function() {
                return vt.apply(this, arguments)
            }
        })(),
        it = (mt, ht, gt) => (vt, yt) => {
            return A(function*() {
                const _t = vt.clone();
                yt = yt || mt.request.url;
                let bt;
                try {
                    bt = yield B(), bt = bt || {
                        cache: 0
                    }
                } catch (wt) {
                    fe(wt, {
                        fr: '_cacheResponse',
                        fr1: 'featuresFailed',
                        strategy: gt,
                        url: yt
                    })
                }
                if (!bt) return vt;
                if (1 !== bt.cache) return He(), vt;
                try {
                    const wt = yield at(ht);
                    wt.put(yt || mt.request, _t).then(A(function*() {
                        if ('storage' in navigator && 'estimate' in navigator.storage) {
                            const xt = [yt].concat('/?start_url=homescreenicon&requesttype=appshell&apptype=pwa'.split(',')),
                                {
                                    usage: kt,
                                    quota: Et
                                } = yield navigator.storage.estimate(), Rt = Math.round(100 * (kt / Et));
                            Rt >= 80 && Xe(ht, {
                                excludes: new Set(xt)
                            })
                        }
                    })).catch(function() {})
                } catch (wt) {
                    fe(wt, {
                        fr: '_cacheResponse',
                        fr1: 'cacheOpenFailed',
                        strategy: gt,
                        url: yt
                    })
                }
                return vt
            })()
        },
        nt = (mt, ht) => {
            const gt = mt.request.url;
            return A(function*() {
                try {
                    const yt = yield at(ht), _t = yield yt.match(mt.request);
                    if (!_t) throw new Error('cache is empty');
                    return _t
                } catch (yt) {}
                try {
                    const yt = yield mt.preloadResponse;
                    if (yt) return yt
                } catch (yt) {
                    fe(yt, {
                        fr: '_cacheFirstStrategy',
                        fr1: 'preloadFailed',
                        strategy: 'cacheFirst',
                        url: gt
                    })
                }
                let vt;
                try {
                    vt = yield fetch(mt.request)
                } catch (yt) {
                    const _t = yield rt(mt, 'cacheFirst', !0)(yt);
                    return _t
                }
                if (vt) try {
                    it(mt, ht, 'cacheFirst')(vt)
                } catch (yt) {}
                return vt
            })()
        },
        st = mt => {
            return A(function*() {
                let ht;
                try {
                    ht = yield fetch(mt, {
                        credentials: 'include',
                        mode: 'no-cors'
                    })
                } catch (gt) {
                    yield G(mt)
                }
                return ht && 200 !== ht.status && (yield G(mt)), ht
            })()
        },
        ot = (mt, ht, gt, vt) => {
            const yt = mt.request.url;
            return fetch(gt, {
                headers: {
                    "X-SI": 0
                }
            }).then(_t => {
                return it(mt, ht, 'networkFirst')(_t, vt)
            }).catch(_t => {
                fe(_t, {
                    fr: '_networkFirstStrategy',
                    fr1: 'networkWithoutCredentialsFailed',
                    sanitizedUrl: vt,
                    strategy: 'networkFirst',
                    url: yt
                })
            })
        },
        ct = (mt, ht, gt, vt = !1) => {
            return A(function*() {
                const yt = mt.request.url;
                gt = gt || yt;
                try {
                    const _t = yield mt.preloadResponse;
                    if (_t) return _t
                } catch (_t) {
                    fe(_t, {
                        fr: '_networkFirstStrategy',
                        fr1: 'preloadFailed',
                        sanitizedUrl: gt,
                        strategy: 'networkFirst',
                        url: yt
                    })
                }
                try {
                    const _t = yield fetch(mt.request);
                    return setTimeout(function() {
                        const bt = ze(yt, 'stamp', '0');
                        ot(mt, ht, bt, gt).catch(function() {})
                    }, 300), _t
                } catch (_t) {
                    fe(_t, {
                        fr: '_networkFirstStrategy',
                        fr1: 'networkFailed',
                        sanitizedUrl: gt,
                        strategy: 'networkFirst',
                        url: yt
                    })
                }
                try {
                    const _t = yield at(ht), bt = yield _t.match(gt);
                    if (!bt) throw new Error('cache is empty');
                    return bt
                } catch (_t) {
                    const bt = yield rt(mt, 'networkFirst', vt)(_t);
                    return bt
                }
            })()
        },
        lt = (mt, {
            cacheFirstPatterns: gt = [],
            cacheName: ht,
            networkFirstPatterns: vt = [],
            networkFirstPatternsWithFailureRedirect: yt = [],
            offlineBeaconQueuePatterns: _t = []
        } = {}) => {
            if (ht && (gt.length || vt.length || yt.length)) {
                if ('undefined' == typeof O || O) {
                    const {
                        url: wt,
                        method: St
                    } = mt.request;
                    if ('GET' === St && -1 === wt.indexOf('swnocache=1')) {
                        let Et, xt = !1,
                            kt = !1,
                            Rt = wt;
                        if (vt.some(It => {
                                if (!It) return !1;
                                const Nt = new RegExp(It);
                                return !!Nt.test(wt) && (xt = !0, Rt = wt.match(Nt)[1], Et = 'networkFirst', !0)
                            }), yt.some(It => {
                                if (!It) return !1;
                                const Nt = new RegExp(It);
                                return !!Nt.test(wt) && (xt = !0, kt = !0, Et = 'networkFirst', !0)
                            }), xt || gt.some(It => {
                                if (!It) return !1;
                                const Nt = new RegExp(It);
                                return !!Nt.test(wt) && (xt = !0, Et = 'cacheFirst', !0)
                            }), !xt) {
                            if (!0 !== navigator.onLine) {
                                const It = _t.some(Nt => {
                                    const At = new RegExp(Nt);
                                    return At.test(wt)
                                });
                                if (It) return void mt.respondWith(st(wt))
                            }
                            return
                        }
                        'cacheFirst' === Et ? mt.respondWith(nt(mt, ht)) : 'networkFirst' == Et && mt.respondWith(ct(mt, ht, Rt, kt))
                    }
                }
            }
        },
        ut = (() => {
            var mt = A(function*() {
                let ht;
                try {
                    ht = yield Z()
                } catch (gt) {}
                if (ht && Array.isArray(ht)) {
                    try {
                        yield de(ht.map(function(gt) {
                            return {
                                fr: 'offlineBeacon',
                                offlineBeacon: gt
                            }
                        }))
                    } catch (gt) {}
                    return Promise.all(ht.map((() => {
                        var gt = A(function*({
                            retryCount: vt,
                            url: yt
                        } = {}) {
                            const _t = et(yt);
                            let bt;
                            try {
                                bt = yield fetch(_t, {
                                    credentials: 'include',
                                    mode: 'no-cors'
                                })
                            } catch (wt) {}
                            bt ? yield W(yt): 0 >= vt ? yield W(yt): yield Y(yt)
                        });
                        return function() {
                            return gt.apply(this, arguments)
                        }
                    })()))
                }
                return Promise.resolve(!1)
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })(),
        dt = (() => {
            var mt = A(function*() {
                return !!self.registration.navigationPreload && (pe({
                    event: 'navigationEnable',
                    fr: 'navigation',
                    fr1: 'preloadEnabled'
                }), yield self.registration.navigationPreload.enable(), !0)
            });
            return function() {
                return mt.apply(this, arguments)
            }
        })();
    self.addEventListener('install', ve(() => {
        return Promise.all([Qe('1.0.65-ysw', '/?start_url=homescreenicon&requesttype=appshell&apptype=pwa'.split(',')), pe({
            event: 'install',
            is_update: !!self.registration.active
        }), self.skipWaiting()])
    })), self.addEventListener('activate', ve(() => {
        const mt = self.navigator;
        return mt && mt.permissions && mt.permissions.query && mt.permissions.query({
            name: 'notifications'
        }).then(ht => {
            ht && (ht.onchange = function() {
                pe({
                    event: 'userPermissionUpdate',
                    newState: ht.state
                })
            })
        }), Promise.all([dt(), Je('1.0.65'), A(function*() {
            return pe({
                event: 'activate'
            })
        })()])
    })), self.addEventListener('fetch', ve(mt => {
        const ht = '.*\\/(os|aaq)\\/yc\\/[a-zA-Z0-9-\\.]+\\/en.js$,.*\\/3pm\\/cs_[a-zA-Z0-9-\\.]+js$,.*\\/aaq\\/(c|caas)\\/[a-zA-Z0-9\\.\\_\\-]+\\.js$,.*\\/history\\_[a-zA-Z0-9\\.]+\\.js$,.*\\/homepage-pwa\\-[a-zA-Z0-9\\.\\-]+\\.js$,.*\\/livestream-manager_[a-zA-Z0-9\\.]+\\.js$,.*\\/notifications\\/js\\/sh\\-[a-zA-Z0-9\\.\\-]+\\.js$,.*\\/rapid\\-[a-zA-Z0-9\\.]+\\.js$,.*\\/version\\/[a-zA-Z0-9\\.]+\\/cmp?[a-zA-Z0-9\\.\\-]+\\.js$,.*\\/video-manager-standalone\\_[a-zA-Z0-9\\.]+\\.js$,.*\\/wf\\-[a-zA-Z0-9\\.\\-]+\\.js$,.*\\/yaft-[a-zA-Z0-9-\\.]+js$,.*\\/(os|aaq)\\/fp\\/css\\/[a-zA-Z0-9-\\.\\/]+css$,.*\\/(os|aaq)\\/fp\\/css\\/tdv2-applet-[a-zA-Z0-9-\\]\\/[a-zA-Z0-9-\\.]+css$,.*\\/(os|aaq)\\/fp\\/atomic-css\\.[a-zA-Z0-9-\\]\\/[a-zA-Z0-9-\\.]+css$,.*\\/assets\\.video\\.yahoo.net\\/[a-zA-Z0-9-\\.\\/]+css$,.*\\/aaq\\/(c|caas)\\/[a-zA-Z0-9\\.\\_\\-]+\\.css$,.*\\/fuji-style\\/css\\/[a-zA-Z0-9-\\.]+css$,.*\\/(os|aaq)\\/fp\\/[a-zA-Z0-9-\\.\\/\\_]+js$,.*\\/(os|aaq)\\/yc\\/(css|js)\\/[a-zA-Z0-9-\\.]+(css|js)$,.*\\/rq\\/[a-zA-Z0-9-\\.\\-\\/\\_]+(css|js)$,.*\\/rx\\/builds\\/[a-zA-Z0-9-\\.\\/]+(css|js|html)$',
            gt = '(.*start_url=homescreenicon&requesttype=appshell&apptype=pwa)',
            vt = '',
            yt = '\\/_td_api\\/beacon\\/,\\/p.gif\\?,geo.yahoo.com\\/p\\?';
        return lt(mt, {
            cacheFirstPatterns: ht.split(','),
            cacheName: '1.0.65-ysw',
            networkFirstPatterns: gt.split(','),
            networkFirstPatternsWithFailureRedirect: [],
            offlineBeaconQueuePatterns: yt.split(',')
        })
    })), self.addEventListener('sync', ve(mt => {
        return 'online' === mt.tag ? ut() : Promise.resolve()
    })), self.addEventListener('notificationclick', ve(mt => {
        mt.notification.close();
        const ht = 'https://www.yahoo.com/',
            gt = mt.notification.data || {
                url: ht,
                chrome_fallback: !0
            },
            vt = gt.url || ht,
            yt = new URL(vt.replace(/&amp;/g, '&'));
        if (yt.searchParams && !yt.searchParams.has('.tsrc')) {
            const _t = yt.searchParams.get('tsrc') || 'notification-brknews';
            yt.searchParams.set('.tsrc', _t)
        }
        return Promise.all([pe(j({}, gt, {
            event: 'notificationclick',
            notification_interaction: Date.now()
        })), he(gt), self.clients.openWindow(yt)])
    })), self.addEventListener('notificationclose', ve(mt => {
        const ht = mt.notification.data || {
            chrome_fallback: !0
        };
        return Promise.all([pe(j({}, ht, {
            event: 'notificationclose',
            notification_interaction: Date.now()
        })), ge(ht)])
    })), self.addEventListener('push', ve((() => {
        var mt = A(function*(ht) {
            let vt, gt = {
                data: {},
                meta: {
                    fallback: !0
                }
            };
            try {
                ht.data ? gt = ht.data.json() : vt = new Error('"data" property is missing on push payload')
            } catch (kt) {
                vt = kt
            }
            const {
                title: yt,
                body: _t,
                icon: bt,
                tag: wt,
                badge: St,
                data: xt
            } = yield We(gt);
            try {
                const kt = yield self.registration.getNotifications({
                    tag: wt
                });
                kt && kt.forEach(function(Et) {
                    Et.close()
                })
            } catch (kt) {}
            return Promise.all([self.registration.showNotification(yt, {
                body: _t,
                icon: bt,
                tag: wt,
                badge: St,
                data: xt,
                renotify: !0,
                requireInteraction: !xt.fallback
            }), Promise.resolve(vt && fe(vt, xt)), me(xt), pe(j({}, xt, {
                event: 'push'
            }))])
        });
        return function() {
            return mt.apply(this, arguments)
        }
    })()));
    const ft = new class {
        constructor() {
            var mt = this;
            this.handlers = new Map, this.handleMessage = (() => {
                var ht = A(function*({
                    origin: gt,
                    data: {
                        method: yt,
                        params: _t
                    } = {},
                    ports: [vt]
                }) {
                    if (!mt.isValidOrigin(gt)) {
                        const St = new Error('Invalid post message origin');
                        return fe(St, {
                            origin: gt
                        })
                    }
                    let bt = null,
                        wt = null;
                    try {
                        const St = mt.handlers.get(yt);
                        if (!St) throw new ReferenceError(`No handler for: "${yt}"`);
                        wt = yield St(..._t)
                    } catch (St) {
                        bt = St.message, yield fe(St, {
                            method: yt
                        })
                    }
                    vt && vt.postMessage({
                        error: bt,
                        result: wt
                    })
                });
                return function() {
                    return ht.apply(this, arguments)
                }
            })()
        }
        handle(mt, ht) {
            this.handlers.set(mt, ht)
        }
        isValidOrigin(mt) {
            return self.registration.scope.startsWith(mt)
        }
    };
    ft.handle('precache', A(function*() {
        let ht;
        try {
            pe({
                event: 'postmessage',
                handler: 'precache'
            }), ht = yield Qe('1.0.65-ysw', '/?start_url=homescreenicon&requesttype=appshell&apptype=pwa'.split(','), {
                overrideCache: !1
            })
        } catch (gt) {
            return gt
        }
        return ht
    })), self.addEventListener('message', ve(ft.handleMessage))
})();
//# sourceMappingURL=mwc-sw.min.js.map