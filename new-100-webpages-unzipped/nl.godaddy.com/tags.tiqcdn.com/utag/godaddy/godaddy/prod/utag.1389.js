//tealium universal tag - utag.1389 ut4.0.201909262027, Copyright 2019 Tealium.com Inc. All Rights Reserved.
window._analyticsDataLayer = window._analyticsDataLayer || [];
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag === undefined) {
            utag = {};
        }
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var a, b, c, l;
                a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type === "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id;
                }
                if (typeof o.cb === "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState === "complete" || this.readyState === "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l === "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b);
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            'view': 1,
            'link': 1
        };
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, i;
                u.data = {
                    base_url: '//www.googletagmanager.com/gtag/js?id=AW-1069554140&l=_analyticsDataLayer',
                    dcmAccount: (b['tealium_environment'] === 'prod') ? 'DC-8316070' : 'DC-8836859',
                    gaClientId: b.ga_client_id || '',
                    hashedShopperId: b.hashedShopperId || '',
                    visitorGuid: b.visitor_guid || ''
                };
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }

                function gtag() {
                    _analyticsDataLayer.push(arguments);
                }
                var adWordsConfigPushed;

                function pushAdwordsConfig() {
                    if (!adWordsConfigPushed) {
                        gtag('config', 'AW-1069554140');
                        adWordsConfigPushed = true;
                    }
                }
                gtag('config', u.data.dcmAccount);
                var salesApps = ['sales', 'salesvs', 'dcc', 'domainmanager', 'empro', 'gateway', 'mya', 'myh', 'onboarding', 'ssl', 'vNext', 'vnext-dashboard', 'wsb', 'wsbadmin', 'nemo', 'garage'];
                var isNotEmailPage = true;
                var blackList = ['news/unsubscribe', 'subscription/confirmed', 'subscription/signup'];
                for (var x = 0; x < blackList.length; x++) {
                    if (b.base_pathname.indexOf(blackList[x]) > -1) {
                        isNotEmailPage = false;
                    }
                }
                for (var y = 0; y < salesApps.length; y++) {
                    if (b.app_name === salesApps[y] && isNotEmailPage) {
                        pushAdwordsConfig();
                        gtag("event", "conversion", {
                            send_to: u.data.dcmAccount + '/retar0/ret-page+standard',
                            language: "en",
                            u13: b.session_id,
                            u14: b['dom.url'],
                            u15: b.ret_product_name,
                            u16: (b.rtd_event == 'true') ? b.rtd_adkey : '',
                            u17: b.status || '',
                            u18: b.package_id || '',
                            u19: (typeof b.package_id !== 'undefined') ? b.package_id[0] : '',
                            u20: u.data.gaClientId,
                            u21: u.data.hashedShopperId,
                            u22: u.data.visitorGuid
                        });
                        break;
                    }
                }
                var isConversionEvent = window.tagUtils.equals(b.conversion_event, 'true');
                var isConversionEventPending = window.tagUtils.equals(b.conversion_event_pending, 'true');
                if (isConversionEvent || isConversionEventPending) {
                    pushAdwordsConfig();
                    var types = {
                        adwords: {
                            newCustomer: 'AW-1069554140/rpNvCOKV_1UQ3LOA_gM',
                            existingCustomer: 'AW-1069554140/h-DhCMzP1wcQ3LOA_gM',
                            newCustomerPending: 'AW-1069554140/QkWSCIaN6oMBENyzgP4D',
                            existingCustomerPending: 'AW-1069554140/aEckCJyW-YMBENyzgP4D'
                        },
                        dcm: {
                            newCustomer: u.data.dcmAccount + '/gdconv/godad0+transactions',
                            existingCustomer: u.data.dcmAccount + '/gdconv/conordec+transactions',
                            newCustomerPending: u.data.dcmAccount + '/gdconv/godad000+transactions',
                            existingCustomerPending: u.data.dcmAccount + '/gdconv/godad00+transactions'
                        }
                    };
                    var adwordsType, dcmType;
                    if (isConversionEvent) {
                        adwordsType = (b.new_customer === 'true') ? types.adwords.newCustomer : types.adwords.existingCustomer;
                        dcmType = (b.new_customer === 'true') ? types.dcm.newCustomer : types.dcm.existingCustomer;
                    } else if (isConversionEventPending) {
                        adwordsType = (b.new_customer === 'true') ? types.adwords.newCustomerPending : types.adwords.existingCustomerPending;
                        dcmType = (b.new_customer === 'true') ? types.dcm.newCustomerPending : types.dcm.existingCustomerPending;
                    }
                    gtag("event", "conversion", {
                        send_to: adwordsType,
                        value: b.order_total_usd,
                        currency: "USD",
                        language: "en",
                        transaction_id: b.order_id
                    });
                    gtag("event", "purchase", {
                        send_to: dcmType,
                        value: b.order_total_usd,
                        currency: "USD",
                        transaction_id: b.order_id,
                        u1: b.oc_customer_type,
                        u3: b.order_total_usd,
                        u5: b.order_total_new_usd,
                        u6: b.currency_usd,
                        u7: b.product_category_name,
                        u8: b.product_quantity,
                        u9: b.product_id,
                        u10: b.product_name,
                        u12: b.product_price_usd,
                        u13: b.session_id,
                        u18: b.package_id,
                        u20: u.data.gaClientId,
                        u21: u.data.hashedShopperId,
                        u22: u.data.visitorGuid,
                        ord: b.cachebuster
                    });
                    if (window.tagUtils.equals(b.includes_reseller_plan, 'true')) {
                        gtag('event', 'conversion', {
                            send_to: 'AW-1069554140/gJ4BCIK0mJQBENyzgP4D',
                            value: 1.0,
                            currency: 'USD',
                            transaction_id: b.order_id
                        });
                        if (window.tagUtils.equals(b.new_customer, 'true')) {
                            gtag('event', 'purchase', {
                                send_to: 'DC-8316070/gdconv/godad002+transactions',
                                value: 1.0,
                                currency: 'USD',
                                transaction_id: b.order_id
                            });
                        } else {
                            gtag('event', 'purchase', {
                                send_to: 'DC-8316070/gdconv/godad001+transactions',
                                value: 1.0,
                                currency: 'USD',
                                transaction_id: b.order_id
                            });
                        }
                    }
                }
                if (window.tagUtils.equals(b.gocentralEvent, 'true')) {
                    pushAdwordsConfig();
                    gtag("event", "conversion", {
                        send_to: "AW-1069554140/XuLqCNy-im0Q3LOA_gM",
                        language: "en",
                        value: 0.0,
                        transaction_id: b.order_id
                    });
                    gtag("event", "purchase", {
                        send_to: u.data.dcmAccount + '/gdconv/ft-gcwsb+transactions',
                        language: "en",
                        value: 0.0,
                        transaction_id: b.order_id,
                        u13: b.session_id,
                        u20: u.data.gaClientId,
                        u21: u.data.hashedShopperId,
                        u22: u.data.visitorGuid,
                        ord: b.cachebuster
                    });
                    gtag('event', 'conversion', {
                        'send_to': 'AW-768339164/uf8TCOi22pMBENzZr-4C',
                        language: "en",
                        value: 0.0,
                        transaction_id: b.order_id
                    });
                }
                if (window.tagUtils.equals(b.webproEvent, 'true')) {
                    pushAdwordsConfig();
                    gtag("event", "conversion", {
                        send_to: "AW-1069554140/y2hjCP-hp1sQ3LOA_gM",
                        language: "en"
                    });
                    gtag("event", "conversion", {
                        send_to: u.data.dcmAccount + '/conve0/godad0+standard',
                        u13: b.session_id,
                        u20: u.data.gaClientId,
                        u21: u.data.hashedShopperId,
                        u22: u.data.visitorGuid,
                        language: "en"
                    });
                }
                if (window.tagUtils.equals(b.smartlineEvent, 'true')) {
                    pushAdwordsConfig();
                    gtag("event", "conversion", {
                        send_to: "AW-1069554140/bg2SCNbS5HAQ3LOA_gM",
                        language: "en",
                        value: 0.0,
                        transaction_id: b.order_id
                    });
                    gtag("event", "purchase", {
                        send_to: u.data.dcmAccount + '/gdconv/ft-smtln+transactions',
                        language: "en",
                        value: 0.0,
                        transaction_id: b.order_id,
                        u13: b.session_id,
                        u20: u.data.gaClientId,
                        u21: u.data.hashedShopperId,
                        u22: u.data.visitorGuid,
                        ord: b.cachebuster
                    });
                }
                if (b.requestACallEvent === 'true') {
                    var racLabel = '/conve0/reqpws+standard';
                    var eventLabelMap = {
                        'tcc.conversion.cms.office-business.none.call-request': '/conve0/godad00+standard',
                        'tcc.conversion.cms.godaddy-social.none.call-request': '/conve0/godad00+standard',
                        'tcc.conversion.cms.easy-ssl-service.none.call-request': '/conve0/godad001+standard',
                        'tcc.conversion.cms.seo-services.none.call-request': '/conve0/godad002+standard'
                    }
                    for (var eidToMatch in eventLabelMap) {
                        if (eidToMatch === b.eid) {
                            racLabel = eventLabelMap[eidToMatch];
                        }
                    }
                    gtag("event", "conversion", {
                        send_to: u.data.dcmAccount + racLabel,
                        u13: b.session_id,
                        u20: u.data.gaClientId,
                        u21: u.data.hashedShopperId,
                        u22: u.data.visitorGuid,
                        language: "en"
                    });
                }
                if (window.tagUtils.equals(b.mc, 'true')) {
                    pushAdwordsConfig();
                }
                if (typeof window._tccInternal === 'undefined') {
                    u.loader({
                        "type": "script",
                        "src": u.data.base_url,
                        "cb": u.loader_cb,
                        "loc": "script",
                        "id": 'utag_1389'
                    });
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("1389", "godaddy.godaddy");
} catch (error) {
    utag.DB(error);
}