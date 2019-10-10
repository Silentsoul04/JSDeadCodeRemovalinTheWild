<< << << < HEAD
    ! function() {
        "use strict";
        var e = window.miconfig = window.miconfig || {},
            n = "pa.beacon",
            t = "ga",
            a = "dc",
            r = "fb",
            o = {
                apac: "sg|my|in|id|ph|vn|th|au|nz|hk|tw|kr|jp|cn|c2",
                emea: "at|ch|de|be|lu|nl|al|am|ax|az|ba|bg|by|cs|cy|cz|ee|fi|ge|gg|gi|gr|hr|hu|im|je|li|lt|lv|md|me|mk|mt|pl|ro|rs|si|sk|ua|yu|ie|dk|fo|gl|is|no|se|sj|ao|aq|bf|bi|bj|bv|bw|cd|cf|cg|ci|ck|cm|cv|dj|er|et|ga|gh|gm|gn|gq|gw|hm|il|ke|km|lr|ls|mg|ml|mr|mu|mw|mz|na|ne|ng|rw|sc|sd|sh|sl|sn|so|st|sz|td|tg|tz|ug|za|zm|zw|ae|af|bh|dz|eg|eh|iq|ir|jo|kg|kw|kz|lb|ly|ma|om|ps|qa|sa|sy|tj|tm|tn|tr|uz|ye|ru|fr|fx|gf|gp|mc|mq|nc|pf|pm|re|tf|wf|yt|ad|es|pt|it|sm|va|gb",
                latam: "br|mx|ar|cl|co|cr|do|pe|uy|ve|ai|ag|aw|bs|bb|bz|bm|bo|vg|ky|dm|ec|sv|fk|gd|gt|gy|hn|jm|ms|an|ni|pa|py|kn|lc|vc|sr|tt|tc",
                na: "^us|ca"
            },
            s = {
                type: "fn",
                name: "conditionalValue",
                args: [o, "fetchCountry", {
                    apac: "874",
                    emea: "875",
                    latam: "839",
                    na: "660"
                }]
            },
            i = {
                type: "fn",
                name: "conditionalValue",
                args: ["us", "fetchCountry"]
            },
            p = {
                type: "fn",
                name: "conditionalValue",
                args: ["de", "fetchCountry"]
            },
            d = {
                type: "fn",
                name: "conditionalValue",
                args: [o.apac, "fetchCountry"]
            },
            c = {
                type: "fn",
                name: "conditionalValue",
                args: ["au", "fetchCountry"]
            },
            m = {
                type: "fn",
                name: "conditionalValue",
                args: ["au|c2|hk|id|in|jp|kr|my|ph|sg|th|tw|vn|us|ca|br|mx|ar|cl|co|cr|do|pe|uy|ve|ai|ag|aw|bs|bb|bz|bm|bo|vg|ky|dm|ec|sv|fk|gd|gt|gy|hn|jm|ms|an|ni|pa|py|kn|lc|vc|sr|tt|tc", "fetchCountry"]
            },
            l = {
                type: "fn",
                name: "conditionalValue",
                args: ["us|ca|au|jp|mx|ar|cl|co|cr|do|pe|uy|ve|ai|ag|aw|bs|bb|bz|bm|bo|vg|ky|dm|ec|sv|fk|gd|gt|gy|hn|jm|ms|an|ni|pa|py|kn|lc|vc|sr|tt|tc|br", "fetchCountry"]
            },
            g = {
                type: "fn",
                name: "conditionalValue",
                args: ["at|ch|de|be|lu|nl|al|am|ax|az|ba|bg|by|cs|cy|cz|ee|fi|ge|gg|gi|gr|hr|hu|im|je|li|lt|lv|md|me|mk|mt|pl|ro|rs|si|sk|ua|yu|ie|dk|fo|gl|is|no|se|sj|ao|aq|bf|bi|bj|bv|bw|cd|cf|cg|ci|ck|cm|cv|dj|er|et|ga|gh|gm|gn|gq|gw|hm|il|ke|km|lr|ls|mg|ml|mr|mu|mw|mz|na|ne|ng|rw|sc|sd|sh|sl|sn|so|st|sz|td|tg|tz|ug|za|zm|zw|ae|af|bh|dz|eg|eh|iq|ir|jo|kg|kw|kz|lb|ly|ma|om|ps|qa|sa|sy|tj|tm|tn|tr|uz|ye|ru|fr|fx|gf|gp|mc|mq|nc|pf|pm|re|tf|wf|yt|ad|es|pt|it|sm|va|gb|sg|my|in|id|ph|vn|th|nz|hk|tw|kr|cn|c2", "fetchCountry"]
            },
            _ = {
                type: "fn",
                name: "conditionalValue",
                args: ["us|gb|ca|ie", "fetchCountry"]
            },
            v = {
                type: "fn",
                name: "conditionalValue",
                args: ["br", "fetchCountry"]
            },
            u = {
                type: "fn",
                name: "conditionalValue",
                args: [o, "fetchCountry"]
            },
            y = {
                google: {
                    name: "google",
                    endpoint: {
                        scheme: "https",
                        host: "www.google-analytics.com",
                        path: "/r/collect?"
                    },
                    enforce_gdpr: !1,
                    vars: {
                        dimension1: {
                            type: "fn",
                            name: "gaClientId"
                        },
                        dimension2: {
                            type: "var",
                            path: "fpti.cust"
                        },
                        dimension3: {
                            type: "fn",
                            name: "isLoggedIn"
                        },
                        dimension4: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        dimension5: {
                            type: "fn",
                            name: "fetchCountry"
                        },
                        dimension6: {
                            type: "var",
                            path: "fpti.locale"
                        },
                        dimension7: {
                            type: "var",
                            path: "fpti.acnt"
                        },
                        dimension8: "",
                        dimension9: "",
                        dimension10: {
                            type: "var",
                            path: "fpti.comp"
                        },
                        dimension19: {
                            type: "var",
                            path: "fpti.xe"
                        },
                        dimension20: {
                            type: "var",
                            path: "fpti.xt"
                        },
                        dimension22: {
                            type: "var",
                            path: "fpti.pgrp"
                        },
                        dimension25: {
                            type: "fn",
                            name: "fetchFptiCookie"
                        },
                        dimension26: {
                            type: "fn",
                            name: "gdprOptOut"
                        },
                        contentGroup3: {
                            type: "fn",
                            name: "isLoggedIn"
                        }
                    }
                },
                ga: {
                    name: t,
                    endpoint: {
                        scheme: "https",
                        host: "www.google-analytics.com",
                        path: "/r/collect?"
                    },
                    enforce_gdpr: !1,
                    vars: {
                        dimension1: {
                            type: "fn",
                            name: "gaClientId"
                        },
                        dimension2: {
                            type: "var",
                            path: "fpti.cust"
                        },
                        dimension3: {
                            type: "fn",
                            name: "isLoggedIn"
                        },
                        dimension4: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        dimension5: {
                            type: "fn",
                            name: "fetchCountry"
                        },
                        dimension6: {
                            type: "var",
                            path: "fpti.locale"
                        },
                        dimension7: {
                            type: "var",
                            path: "fpti.acnt"
                        },
                        dimension8: "",
                        dimension9: "",
                        dimension10: {
                            type: "var",
                            path: "fpti.comp"
                        },
                        dimension19: {
                            type: "var",
                            path: "fpti.xe"
                        },
                        dimension20: {
                            type: "var",
                            path: "fpti.xt"
                        },
                        dimension22: {
                            type: "var",
                            path: "fpti.pgrp"
                        },
                        dimension25: {
                            type: "fn",
                            name: "fetchFptiCookie"
                        },
                        dimension26: {
                            type: "fn",
                            name: "gdprOptOut"
                        },
                        content_group3: {
                            type: "fn",
                            name: "isLoggedIn"
                        }
                    }
                },
                dc: {
                    name: a,
                    endpoint: {
                        scheme: "https",
                        host: "ad.doubleclick.net",
                        path: "/activity/"
                    },
                    seperator: ";",
                    enforce_gdpr: !1,
                    action: "conversion",
                    vars: {
                        allow_custom_scripts: "true",
                        value: {
                            type: "var",
                            path: "fpti.amt"
                        },
                        transaction_id: {
                            type: "var",
                            path: "fpti.trid"
                        },
                        npa: {
                            type: "fn",
                            name: "gdprOptOut"
                        },
                        u1: {
                            type: "var",
                            path: "fpti.cust"
                        },
                        u2: {
                            type: "var",
                            path: "fpti.mrid"
                        },
                        u3: {
                            type: "var",
                            path: "fpti.amt"
                        },
                        u4: {
                            type: "var",
                            path: "fpti.curr"
                        },
                        u5: {
                            type: "var",
                            path: "fpti.trid"
                        },
                        u6: {
                            type: "var",
                            path: "fpti.page"
                        },
                        u7: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        u8: {
                            type: "var",
                            path: "fpti.flnm"
                        },
                        u9: {
                            type: "fn",
                            name: "fetchFptiCookie"
                        },
                        u10: {
                            type: "fn",
                            name: "fetchCountry"
                        }
                    }
                },
                mathtag: {
                    name: "mathtag",
                    endpoint: {
                        scheme: "https",
                        host: "pixel.mathtag.com",
                        path: "/event/img?"
                    },
                    vars: {
                        v1: {
                            type: "fn",
                            name: "fetchFptiCookie"
                        }
                    }
                },
                fb: {
                    name: r,
                    endpoint: {
                        scheme: "https",
                        host: "www.facebook.com",
                        path: "/tr?"
                    },
                    vars: {
                        id: "1674696026155243",
                        noscript: "1",
                        "cd[FPTICookie]": {
                            type: "fn",
                            name: "fetchFptiCookie"
                        },
                        "cd[CustomerID]": {
                            type: "var",
                            path: "fpti.cust",
                            enable: i
                        },
                        "cd[MerchantID]": {
                            type: "var",
                            path: "fpti.mrid"
                        },
                        "cd[MerchantTPV]": {
                            type: "var",
                            path: "fpti.amt"
                        },
                        "cd[MerchantTransaction]": {
                            type: "var",
                            path: "fpti.curr"
                        },
                        "cd[P2PTransaction]": "",
                        "cd[P2PTPV]": ""
                    }
                },
                visualiq: {
                    name: "visualiq",
                    endpoint: {
                        scheme: "https",
                        host: "t.myvisualiq.net",
                        path: "/activity_pixel?"
                    },
                    vars: {
                        ago: "212",
                        ao: "[ao_value]",
                        et: "a",
                        pt: "i",
                        ord: "[order_id]",
                        px: "[px_value]",
                        revenue: "[revenue]",
                        u1: {
                            type: "var",
                            path: "fpti.cust",
                            defaultVal: "[Placeholder_1]"
                        },
                        u2: {
                            type: "var",
                            path: "fpti.mrid",
                            defaultVal: "[Placeholder_2]"
                        },
                        u3: {
                            type: "var",
                            path: "fpti.amt",
                            defaultVal: "[Placeholder_3]"
                        },
                        u4: {
                            type: "var",
                            path: "fpti.curr",
                            defaultVal: "[Placeholder_4]"
                        },
                        u5: {
                            type: "var",
                            path: "fpti.trid",
                            defaultVal: "[Placeholder_5]"
                        },
                        u6: {
                            type: "var",
                            path: "fpti.page",
                            defaultVal: "[Placeholder_6]"
                        },
                        u7: {
                            type: "fn",
                            name: "constructUrl",
                            defaultVal: "[Placeholder_7]"
                        },
                        u8: {
                            type: "var",
                            path: "fpti.flnm",
                            defaultVal: "[Placeholder_8]"
                        },
                        u9: {
                            type: "fn",
                            name: "fetchFptiCookie",
                            defaultVal: "[Placeholder_9]"
                        },
                        u10: {
                            type: "fn",
                            name: "fetchCountry"
                        },
                        r: "[cachebuster]"
                    }
                },
                tapad: {
                    name: "tapad",
                    endpoint: {
                        scheme: "https",
                        host: "tapestry.tapad.com",
                        path: "/tapestry/1?"
                    },
                    vars: {
                        ta_partner_id: "950",
                        ta_redirect: {
                            type: "fn",
                            name: "encodeURIComponent",
                            args: ["https://t.myvisualiq.net/sync?prid=1001&ao=0&pruuid=TAPAD_${IDS:key}"]
                        }
                    }
                },
                liadm: {
                    name: "liadm",
                    endpoint: {
                        scheme: "https",
                        host: "d.liadm.com"
                    }
                },
                zemanta: {
                    name: "zemanta",
                    endpoint: {
                        scheme: "https",
                        host: "p1.zemanta.com",
                        path: "/p/342/585/"
                    }
                }
            },
            h = {
                type: "var",
                path: "pre.payee.res.data.merchant.id"
            },
            b = {
                type: "var",
                path: "fpti.cust"
            },
            f = {
                type: "var",
                path: "pre.cart.res.data.purchase.amounts.total.amount"
            },
            C = {
                type: "var",
                path: "dataLayer.contentCountry",
                defaultVal: ""
            },
            w = {
                type: "var",
                path: "pre.cart.res.data.purchase.amounts.total.currency_code"
            },
            k = {
                trigger: {
                    type: "fn",
                    name: "fireImmediate"
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/herme0+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }, {
                    name: "mathtag",
                    enable: i,
                    vars: {
                        mt_id: "1019462",
                        mt_adid: "136505",
                        v2: f,
                        s1: h
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: HermesFlowTxnStart",
                        eventAction: C,
                        eventLabel: h,
                        eventValue: {
                            type: "int",
                            path: "pre.cart.res.data.purchase.amounts.total.amount",
                            defaultVal: 0
                        },
                        dimension23: {
                            type: "var",
                            path: "pre.checkoutAppData.res.data.flow_id"
                        },
                        dimension24: w
                    }
                }]
            },
            D = {
                trigger: {
                    type: "fn",
                    name: "fireButtonClick"
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/herme00+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "Transaction-HermesFlowTxnEnd-HermesFlow",
                        "cd[MerchantID]": h,
                        "cd[MerchantTPV]": f,
                        "cd[MerchantTransaction]": w
                    }
                }, {
                    name: "mathtag",
                    enable: i,
                    vars: {
                        mt_id: "888637",
                        mt_adid: "136505",
                        v2: f,
                        s1: h
                    }
                }, {
                    name: "mathtag",
                    enable: i,
                    vars: {
                        mt_id: "984098",
                        mt_adid: "136505",
                        v2: f,
                        s1: h
                    }
                }, {
                    name: "liadm",
                    enable: i,
                    endpoint: {
                        path: "/pixel?"
                    },
                    vars: {
                        c: "19160"
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "413",
                                emea: "423",
                                latam: "595",
                                na: "576"
                            }]
                        },
                        u1: b,
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "attempted checkout",
                        eventAction: C,
                        eventLabel: h,
                        eventValue: {
                            type: "int",
                            path: "pre.cart.res.data.purchase.amounts.total.amount",
                            defaultVal: 0
                        },
                        dimension23: {
                            type: "var",
                            path: "pre.checkoutAppData.res.data.flow_id"
                        },
                        dimension24: w
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: HermesFlowTxnFin",
                        eventAction: C,
                        eventLabel: h,
                        eventValue: {
                            type: "int",
                            path: "pre.cart.res.data.purchase.amounts.total.amount",
                            defaultVal: 0
                        },
                        dimension23: {
                            type: "var",
                            path: "pre.checkoutAppData.res.data.flow_id"
                        },
                        dimension24: w
                    }
                }]
            },
            T = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:ec:hermes::(fullpage-signup|fullpage-guest):member:hermes:|main:xo:lite:weasley:guestAndSignup:billing"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/guest0+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }, {
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu0/guest0+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: GuestSUStart",
                        eventAction: C,
                        eventLabel: ""
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: GuestCheckoutStart",
                        eventAction: C,
                        eventLabel: ""
                    }
                }]
            },
            P = {
                trigger: {
                    type: "fn",
                    name: "fireButtonClick"
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/guest00+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: GuestCheckoutFin",
                        eventAction: C,
                        eventLabel: ""
                    }
                }]
            },
            L = {
                trigger: {
                    type: "fn",
                    name: "handleClick",
                    sel: "button[type=submit], input[type=submit]",
                    suppl: {
                        checked: "true",
                        sel: ["#saveMyInfo", "#guestSignup1", "#agree"]
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu0/guest00+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "417",
                                emea: "427",
                                latam: "599",
                                na: "580"
                            }]
                        },
                        u1: b,
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: GuestSUFin",
                        eventAction: C,
                        eventLabel: ""
                    }
                }]
            },
            x = {
                enable: c,
                trigger: {
                    type: "fn",
                    name: "handleClick",
                    sel: "#padToggle",
                    suppl: {
                        checked: "true",
                        sel: ["#padToggle"]
                    },
                    session: {
                        key: "aupad",
                        type: "start"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/test0/latm_0+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }]
            },
            A = {
                enable: c,
                trigger: {
                    type: "fn",
                    name: "handleClick",
                    sel: "#confirmButtonTop",
                    suppl: {
                        checked: "true",
                        sel: ["#padToggle"]
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/test0/latm_00+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }]
            },
            M = {
                enable: c,
                trigger: {
                    type: "fn",
                    name: "handleClick",
                    sel: "#confirmButtonTop",
                    suppl: {
                        checked: "true",
                        sel: ["#padToggle"]
                    },
                    session: {
                        key: "aupad",
                        type: "end"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/test0/latm_000+standard",
                        u2: h,
                        u3: f,
                        u4: w,
                        u10: C
                    }
                }]
            },
            S = [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch000/merch0+standard"
                }
            }],
            V = [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch000/merch00+standard"
                }
            }],
            q = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:businessweb:money:transfer:main:::"
                    }
                },
                vendors: S
            },
            U = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        fltp: "oct_flow",
                        pgrp: "main:businessweb:money:transfer:success"
                    }
                },
                vendors: V
            },
            z = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:businessweb:money:withdraw-funds:transfer-to::",
                        link: "instant"
                    }
                },
                vendors: S
            },
            I = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:businessweb:money:instant-funds:transfer-success::",
                        fltp: "instant"
                    }
                },
                vendors: V
            },
            F = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:create::basics:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/money0+standard"
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "create money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 1: create pool",
                        page_path: "/pools/c/create/basics",
                        page_title: "Set your pool's goal",
                        dimension9: "step 1: create pool",
                        dimension10: "pools"
                    }
                }]
            },
            E = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:campaign-create-success:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/money00+standard"
                    }
                }]
            },
            j = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:send::amount:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/money000+standard"
                    }
                }]
            },
            B = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:campaign-xxx-send-success:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/money001+standard"
                    }
                }]
            },
            R = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:(pools:campaign-xxx-send-success:::|transfer:guest:success:)"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 4: transfer success",
                        page_path: "/pools/c/send/complete",
                        page_title: "Chip in complete",
                        dimension9: "step 4: transfer success",
                        dimension10: "pools"
                    }
                }]
            },
            N = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:withdraw::amount:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/money002+standard"
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "withdraw money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 1: withdraw money",
                        page_path: "/pools/c/edit/transfer",
                        page_title: "Transfer money",
                        dimension9: "step 1: withdraw money",
                        dimension10: "pools"
                    }
                }]
            },
            H = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:withdraw::complete:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/money003+standard"
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "withdraw money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 2: withdraw success",
                        page_path: "/pools/c/edit/transfer/complete",
                        page_title: "Transfer money complete",
                        dimension9: "step 2: withdraw success",
                        dimension10: "pools"
                    }
                }]
            },
            O = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:send::amount:::",
                        pglk: "main:pools:campaign::page|chipIn"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 1: send money",
                        page_path: "/pools/c/send/amount",
                        page_title: "Chip in to a pool",
                        dimension9: "step 1: send money",
                        dimension10: "pools"
                    }
                }]
            },
            W = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:(send::note:::|guest::note:::)"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 2: add comment",
                        page_path: "/pools/c/send/note",
                        page_title: "Add a comment",
                        dimension9: "step 2: add comment",
                        dimension10: "pools"
                    }
                }]
            },
            G = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:(pools:send::review:::|p2p:guest:preview:)"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 3: review",
                        page_path: "/pools/c/send/review",
                        page_title: "Confirm transfer",
                        dimension9: "step 3: review",
                        dimension10: "pools"
                    }
                }]
            },
            J = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:create::preferences:::"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "create money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 2: pool preferences",
                        page_path: "/pools/c/create/preferences",
                        page_title: "How much can contributors pay?",
                        dimension9: "step 2: pool preferences",
                        dimension10: "pools"
                    }
                }]
            },
            $ = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:create::description:::"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "create money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 3: pool description",
                        page_path: "/pools/c/create/description",
                        page_title: "Describe your pool",
                        dimension9: "step 3: pool description",
                        dimension10: "pools"
                    }
                }]
            },
            K = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:create::preview:::"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "create money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 4: pool preview",
                        page_path: "/pools/c/create/preview",
                        page_title: "Preview your money pool",
                        dimension9: "step 4: pool preview",
                        dimension10: "pools"
                    }
                }]
            },
            Q = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:create::prepublish:::"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "create money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 5: pool prepublish",
                        page_path: "/pools/c/create/prepublish",
                        page_title: "Ready to publish",
                        dimension9: "step 5: pool prepublish",
                        dimension10: "pools"
                    }
                }]
            },
            X = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:pools:(campaign-create-success:::|create::publish:::)"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "create money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 6: success",
                        page_path: "/pools/c/create/publish",
                        page_title: "Pool Published",
                        dimension9: "step 6: success",
                        dimension10: "pools"
                    }
                }]
            },
            Y = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:pools:guest::amount:::",
                        pglk: "main:pools:guest::amount|next"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send money pools",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 1: send money",
                        page_path: "/pools/c/send/amount",
                        page_title: "Chip in to a pool",
                        dimension9: "step 1: send money",
                        dimension10: "pools"
                    }
                }]
            },
            Z = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:moneynodeweb:.*:amount",
                        sel_fmx_tp: "card"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu001/consi0+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "consumer instant transfer",
                        eventAction: "start",
                        eventLabel: {
                            type: "var",
                            path: "fpti.cust"
                        }
                    }
                }]
            },
            ee = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:moneynodeweb:.*:amount:review",
                        sel_fmx_tp: "card"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu001/consi00+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "consumer instant transfer",
                        eventAction: "mid",
                        eventLabel: {
                            type: "var",
                            path: "fpti.cust"
                        }
                    }
                }]
            },
            ne = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:moneynodeweb:.*:result",
                        sel_fmx_tp: "card"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu001/consi000+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "consumer instant transfer",
                        eventAction: "finish",
                        eventLabel: {
                            type: "var",
                            path: "fpti.cust"
                        }
                    }
                }]
            },
            te = "main:moneynodeweb:money:banks:new|main:walletweb:wallet:add:bankadd",
            ae = "main:walletweb:wallet:add:bank",
            re = "main:moneynodeweb:banks:new:confirmation",
            oe = "main:walletweb:wallet::card:addcard|main:moneynodeweb:cards:new:manual",
            se = "main:walletweb:wallet::card:addcardsuccess|main:moneynodeweb:new:manual:success",
            ie = "personal|premier",
            pe = "business",
            de = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: te,
                        acnt: ie
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/walle0/consw000+standard"
                    }
                }]
            },
            ce = [{
                name: a,
                vars: {
                    send_to: "DC-6386697/walle0/consu0+standard"
                }
            }],
            me = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: ae,
                        goal: "addbank:success",
                        acnt: ie
                    }
                },
                vendors: ce
            },
            le = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: re,
                        acnt: ie
                    }
                },
                vendors: ce
            },
            ge = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: oe,
                        acnt: ie
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/walle0/consw0+standard"
                    }
                }]
            },
            _e = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: se,
                        acnt: ie
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/walle0/consw00+standard"
                    }
                }]
            },
            ve = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: te,
                        acnt: pe
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/walle0/merch0+standard"
                    }
                }]
            },
            ue = [{
                name: a,
                vars: {
                    send_to: "DC-6386697/walle0/merch00+standard"
                }
            }],
            ye = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: ae,
                        goal: "addbank:success",
                        acnt: pe
                    }
                },
                vendors: ue
            },
            he = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: re,
                        acnt: pe
                    }
                },
                vendors: ue
            },
            be = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: oe,
                        acnt: pe
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/walle0/merch000+standard"
                    }
                }]
            },
            fe = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: se,
                        acnt: pe
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/walle0/merch001+standard"
                    }
                }]
            },
            Ce = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:moneynodeweb:banks:new:confirmation"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "account activity",
                        event_action: {
                            type: "var",
                            path: "dataLayer.userType"
                        },
                        event_label: "link bank account"
                    }
                }]
            },
            we = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:walletweb:wallet:add:bank",
                        goal: "addbank:success"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "account activity",
                        event_action: {
                            type: "var",
                            path: "dataLayer.userType"
                        },
                        event_label: "link bank account"
                    }
                }]
            },
            ke = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:(walletweb:wallet::card:addcardsuccess|moneynodeweb:new:manual:success)"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "account activity",
                        event_action: {
                            type: "var",
                            path: "dataLayer.userType"
                        },
                        event_label: "link card"
                    }
                }]
            },
            De = {
                enable: {
                    type: "fn",
                    name: "conditionalValue",
                    args: ["mx|jp|in|cn|c2", "fetchCountry"]
                },
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:mktg:personal::wamc-thank-you"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/mppmz0/thxwm0+standard"
                    }
                }]
            },
            Te = {
                enable: {
                    type: "fn",
                    name: "conditionalValue",
                    args: ["gb|fr|de|it|es|nl|pl|at|ch|be|se|dk|no", "fetchCountry"]
                },
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:mktg:personal:product:money-pools:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/mppmz0/money0+standard"
                    }
                }]
            },
            Pe = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:inv3:manage::invoices:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch0/egovc0+standard"
                    }
                }]
            },
            Le = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:mktg:business::results:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch0/egovc00+standard"
                    }
                }]
            },
            xe = {
                enable: c,
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:mktg:business::mcommerce-index:::",
                        link: "Hero\\|Read now"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/mppmz0/curre0+standard"
                    }
                }]
            },
            Ae = {
                enable: c,
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:mktg:business::mcommerce-index:::",
                        link: "Master mobile commerce today \\| Read the 2019 Trends Report"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/mppmz0/curre00+standard"
                    }
                }]
            },
            Me = {
                enable: c,
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:mktg:business::mcommerce-index:::",
                        link: "Master mobile commerce today \\| Read the 2018 Annual Report"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/mppmz0/previ0+standard"
                    }
                }]
            },
            Se = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:mktg::signup:accountselect:::",
                        link: "personal-account|personal|Personal Account \\| Next"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/mppmz0/apac_0+standard"
                    }
                }]
            },
            Ve = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:mktg::signup:(accountselect|account-selection):::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/mppmz0/accou0+standard"
                    }
                }]
            },
            qe = {
                enable: d,
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:mktg::signup:accountselect:::",
                        link: "merchant-account|business|Business Account \\| Next"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/mppmz0/apac_00+standard"
                    }
                }]
            },
            Ue = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        pgrp: "main:mktg:personal::(refunded-)?returns",
                        pglk: "main.*returns.*",
                        lgin: "out"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/freer0+standard"
                    }
                }]
            },
            ze = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:mktg:personal::(refunded-)?returns",
                        pglk: "main(.*personal.*returns.*|.*unifiedlogin.*)",
                        lgin: "in"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/freer00+standard"
                    }
                }]
            },
            Ie = {
                trigger: {
                    type: n,
                    condition: {
                        e: "fs",
                        flnm: "form_submit"
                    }
                },
                vendors: [{
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: {
                            type: "var",
                            obj: "data",
                            path: "ec",
                            defaultVal: "marketing form"
                        },
                        eventAction: {
                            type: "var",
                            obj: "data",
                            path: "ea",
                            defaultVal: "submit"
                        },
                        eventLabel: {
                            type: "var",
                            obj: "data",
                            path: "el",
                            defaultVal: "mpp"
                        }
                    }
                }]
            },
            Fe = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:mktg:::page-not-found"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "404 error",
                        event_action: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        event_label: {
                            type: "var",
                            path: "document.referrer",
                            defaultVal: "none"
                        },
                        content_group1: {
                            type: "var",
                            path: "dataLayer.pageType"
                        }
                    }
                }]
            },
            Ee = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        ccpg: "us",
                        pgrp: "main:mktg:business::partner-program-contact-us"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch000/pp_gb0+standard"
                    }
                }]
            },
            je = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        ccpg: "us",
                        pgrp: "main:mktg:business::partner-program-contactsupport-submission"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch000/pp_gb00+standard"
                    }
                }]
            },
            Be = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        ccpg: "us",
                        pgrp: "main:mktg:::contact-us"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch000/pp_gb000+standard"
                    }
                }]
            },
            Re = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        ccpg: "us",
                        pgrp: "main:mktg:::contact-us-complete"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch000/pp_gb001+standard"
                    }
                }]
            },
            Ne = {
                enable: _,
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        pgrp: "main:mktg::signup:accountselect",
                        link: "Personal"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 1: account selection"
                    }
                }]
            },
            He = {
                enable: _,
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        pgrp: "main:mktg::signup:accountselect",
                        link: "Business"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "merchant sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 1: account selection"
                    }
                }]
            },
            Oe = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:mktg:personal::product-selection"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "merchant sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 2: product selection",
                        dimension9: "step 2: product selection"
                    }
                }]
            },
            We = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:mktg:personal::offers"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "save offer to wallet",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: {
                            type: "var",
                            path: "fpti.link"
                        }
                    }
                }]
            },
            Ge = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl"
                    },
                    once: !(e.loadVendorDefault = function(e) {
                        return y[e]
                    })
                },
                vendors: [{
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "in-page link tracking",
                        eventAction: {
                            type: "var",
                            obj: "data",
                            path: "link"
                        },
                        eventLabel: {
                            type: "var",
                            obj: "data",
                            path: "lu"
                        }
                    }
                }]
            },
            Je = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:walletweb:summary::main:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/accou0/consu0+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "pageview",
                        location: {
                            type: "fn",
                            name: "constructUrl"
                        }
                    }
                }]
            },
            $e = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:walletweb:summary::main:::"
                    },
                    once: !1
                },
                vendors: [{
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "consumer account summary",
                        eventAction: "click",
                        eventLabel: {
                            type: "var",
                            obj: "data",
                            path: "link"
                        }
                    }
                }]
            },
            Ke = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:businessweb:mep:dashboard:"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/accou0/merch0+standard"
                    }
                }]
            },
            Qe = {
                type: "var",
                path: "dataLayer.contentCountry",
                defaultVal: ""
            },
            Xe = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:p2p:(unified:)?send::(email|review|phone):node::|main:consumer:p2p:(transfer:xb:country|gift:start)|main:p2p:transfer:xb:start"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/sendm0+standard",
                        u3: {
                            type: "var",
                            path: "fpti.txn_amt"
                        }
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: ConsumerSendMoneyStart",
                        eventAction: Qe,
                        eventLabel: ""
                    }
                }]
            },
            Ye = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:p2p:unified:(send::done|buy::done):node::|main:p2p:(send|gift)::done:node::"
                    }
                },
                vendors: [{
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "415",
                                emea: "425",
                                latam: "597",
                                na: "578"
                            }]
                        },
                        u3: {
                            type: "var",
                            path: "fpti.txn_amt"
                        }
                    }
                }, {
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/sendm00+standard",
                        u3: {
                            type: "var",
                            path: "fpti.txn_amt"
                        }
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "Transaction-SndMnyP2PPayFlow-P2PPayFlow",
                        "cd[P2PTransaction]": {
                            type: "var",
                            path: "fpti.curr"
                        },
                        "cd[P2PTPV]": {
                            type: "var",
                            path: "fpti.txn_amt"
                        }
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: ConsumerSendMoneyFin",
                        eventAction: Qe,
                        eventLabel: ""
                    }
                }]
            },
            Ze = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:p2p:request:(multi)?:review:node::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/reqmo0+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: ConsumerReqMoneyStart",
                        eventAction: Qe,
                        eventLabel: ""
                    }
                }]
            },
            en = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:p2p:request:(multi)?:done:node::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu00/reqmo00+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: ConsumerReqMoneyFin",
                        eventAction: Qe,
                        eventLabel: ""
                    }
                }]
            },
            nn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:p2p:unified:send::done"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send money/pay",
                        event_action: "send",
                        event_label: "send money to friends and family",
                        event_value: {
                            type: "var",
                            path: "fpti.txn_amt"
                        },
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        }
                    }
                }]
            },
            tn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:p2p:send::done",
                        pp_flow: "xb"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send money/pay",
                        event_action: "send",
                        event_label: "send to friends and family internationally",
                        event_value: {
                            type: "var",
                            path: "fpti.txn_amt"
                        },
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        }
                    }
                }]
            },
            an = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:p2p:gift::done"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send gift",
                        event_action: "send",
                        event_label: "send a gift",
                        event_value: {
                            type: "var",
                            path: "fpti.txn_amt"
                        },
                        dimension11: {
                            type: "var",
                            path: "fpti.sndcur"
                        },
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        }
                    }
                }]
            },
            rn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:p2p:request::done"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "request money",
                        event_action: "request",
                        event_label: "request",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        }
                    }
                }]
            },
            on = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:p2p:unified:buy::done"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "send money/pay",
                        event_action: "pay",
                        event_label: "pay for goods or services",
                        event_value: {
                            type: "var",
                            path: "fpti.txn_amt"
                        },
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        }
                    }
                }]
            },
            sn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:falconnode::(upgradeBusinessAccount|businessInfo|businessTypeSelection|upgradeDecision|upgradeBusinessTypeSelection)"
                    },
                    session: {
                        key: "persupg",
                        type: "start"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch0/acctu0+standard"
                    }
                }]
            },
            pn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:business:activation:businessSetup|main:activation:commercesetupnodeweb"
                    },
                    session: {
                        key: "persupg",
                        type: "end"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch0/acctu00+standard"
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "421",
                                emea: "431",
                                latam: "603",
                                na: "584"
                            }]
                        }
                    }
                }]
            },
            dn = {
                type: "var",
                path: "dataLayer.contentCountry",
                defaultVal: ""
            },
            cn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:ppme:create:welcome:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/gener0/paypa0+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PayPalMeSUStart",
                        eventAction: dn,
                        eventLabel: ""
                    }
                }]
            },
            mn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:ppme:create:done:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/gener0/paypa00+standard"
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ProductSignup-PayPalMeSUFin-PayPalMe"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PayPalMeSUFin",
                        eventAction: dn,
                        eventLabel: ""
                    }
                }]
            },
            ln = {
                type: n,
                condition: {
                    e: "im",
                    page: "main:onbrd:organic:signup:account:::"
                }
            },
            gn = {
                type: n,
                condition: {
                    e: "im",
                    page: "main:onbrd:organic:wallet:selectIntent:::|consonbdnodeweb/.*/signup/usePayPal.dust"
                }
            },
            _n = {
                type: "var",
                path: "dataLayer.contentCountry",
                defaultVal: ""
            },
            vn = {
                trigger: ln,
                vendors: [{
                    name: a,
                    enable: l,
                    vars: {
                        send_to: "DC-6386697/consu0/persa0+standard"
                    }
                }, {
                    name: "google",
                    enable: l,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PersAcctSUStart",
                        eventAction: _n,
                        eventLabel: ""
                    }
                }]
            },
            un = {
                trigger: gn,
                vendors: [{
                    name: a,
                    enable: l,
                    vars: {
                        send_to: "DC-6386697/consu0/persa00+standard"
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "416",
                                emea: "426",
                                latam: "598",
                                na: "579"
                            }]
                        }
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ConsumerSignup"
                    }
                }, {
                    name: "google",
                    enable: l,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PersAcctSUFin",
                        eventAction: _n,
                        eventLabel: ""
                    }
                }]
            },
            yn = {
                trigger: ln,
                vendors: [{
                    name: a,
                    enable: g,
                    vars: {
                        send_to: "DC-6386697/consu0/premi0+standard"
                    }
                }, {
                    name: "google",
                    enable: g,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PremierAcctSUStart",
                        eventAction: _n,
                        eventLabel: ""
                    }
                }]
            },
            hn = {
                trigger: gn,
                vendors: [{
                    name: a,
                    enable: g,
                    vars: {
                        send_to: "DC-6386697/consu0/premi00+standard"
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "442",
                                emea: "441",
                                latam: "613",
                                na: "612"
                            }]
                        }
                    }
                }, {
                    name: "google",
                    enable: g,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PremierAcctSUFin",
                        eventAction: _n,
                        eventLabel: ""
                    }
                }]
            },
            bn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:onbrd:organic:signup:account:::",
                        pglk: "main:mktg:Customer::account-selection\\|HPHero-cta-Continuar com CPF"
                    },
                    session: {
                        key: "sbsu",
                        type: "start"
                    }
                },
                vendors: [{
                    name: a,
                    enable: v,
                    vars: {
                        send_to: "DC-6386697/merch0/sbsus0+standard"
                    }
                }, {
                    name: "google",
                    enable: v,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: SBSUStart",
                        eventAction: _n,
                        eventLabel: ""
                    }
                }]
            },
            fn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:onbrd:organic:wallet:selectIntent:::"
                    },
                    session: {
                        key: "sbsu",
                        type: "end"
                    }
                },
                vendors: [{
                    name: a,
                    enable: v,
                    vars: {
                        send_to: "DC-6386697/merch0/sbsuf0+standard"
                    }
                }, {
                    name: "visualiq",
                    enable: v,
                    vars: {
                        ao: "839",
                        px: "634"
                    }
                }, {
                    name: "google",
                    enable: v,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: SBSUFin",
                        eventAction: _n,
                        eventLabel: ""
                    }
                }]
            },
            Cn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:falconnode::checkAccount",
                        prod: "pro_2_0"
                    }
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/merch00/merch001+standard"
                    }
                }]
            },
            wn = {
                trigger: {
                    type: "fn",
                    name: "matchPgTxt",
                    sel: ".statusHeader",
                    text: "success"
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/merch00/merch0+standard"
                    }
                }]
            },
            kn = {
                trigger: {
                    type: "fn",
                    name: "matchPgTxt",
                    sel: ".statusHeader",
                    text: "review"
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/merch00/merch00+standard"
                    }
                }]
            },
            Dn = {
                trigger: {
                    type: "fn",
                    name: "matchPgTxt",
                    sel: ".statusHeader",
                    text: "decline"
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/merch00/merch000+standard"
                    }
                }]
            },
            Tn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:falconnode::create"
                    },
                    session: {
                        key: "mercsu",
                        type: "start"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch0/bizac0+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: MerchantSUStart",
                        eventAction: _n,
                        eventLabel: ""
                    }
                }]
            },
            Pn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:business:activation:businessSetup|(main:onbrd:falconnode::((congrats(default|partner)?|done)))|main:activation:commercesetupnodeweb"
                    },
                    session: {
                        key: "mercsu",
                        type: "end"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch0/bizac00+standard"
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "420",
                                emea: "430",
                                latam: "602",
                                na: "583"
                            }]
                        }
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "MerchantSignup"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: MerchantSUFin",
                        eventAction: _n,
                        eventLabel: ""
                    }
                }]
            },
            Ln = {
                enable: p,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:falconnode::create"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch0/pplus0+standard"
                    }
                }]
            },
            xn = {
                enable: p,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:falconnode::congratsdefault"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch0/pplus00+standard"
                    }
                }]
            },
            An = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:organic:signup:account"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 2: account credentials",
                        page_path: "/welcome/signup/email_password",
                        page_title: "Create Email and Password",
                        dimension9: "step 2: account credentials",
                        dimension10: {
                            type: "var",
                            path: "dataLayer.application"
                        }
                    }
                }]
            },
            Mn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:organic:signup:(create|addresslookup)"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 3: personal details",
                        page_path: "/welcome/signup/name_address",
                        page_title: "Enter Personal Info",
                        dimension9: "step 3: personal details",
                        dimension10: {
                            type: "var",
                            path: "dataLayer.application"
                        }
                    }
                }]
            },
            Sn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:organic:wallet:selectIntent"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 4: success",
                        page_path: "/welcome/signup/intent_selection",
                        page_title: "Select Intent",
                        dimension9: "step 4: success",
                        dimension10: {
                            type: "var",
                            path: "dataLayer.application"
                        },
                        dimension46: "true"
                    }
                }]
            },
            Vn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:organic:wallet:addcard"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 5: add card",
                        page_path: "/welcome/signup/add_card",
                        page_title: "Add Card",
                        dimension9: "step 5: add card",
                        dimension10: {
                            type: "var",
                            path: "dataLayer.application"
                        }
                    }
                }]
            },
            qn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:organic:wallet:addbank"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 6: add bank",
                        page_path: "/welcome/signup/add_bank",
                        page_title: "Add Bank",
                        dimension9: "step 6: add bank",
                        dimension10: {
                            type: "var",
                            path: "dataLayer.application"
                        }
                    }
                }]
            },
            Un = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:organic:bgc:buyselltransfer"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer sign-up",
                        event_action: {
                            type: "var",
                            path: "dataLayer.contentCountry"
                        },
                        event_label: "step 7: activation",
                        page_path: "/welcome/signup/activation",
                        page_title: "Sign Up Complete",
                        dimension8: "active",
                        dimension9: "step 7: activation",
                        dimension10: {
                            type: "var",
                            path: "dataLayer.application"
                        }
                    }
                }]
            },
            zn = {
                type: "var",
                path: ["ensighten.buyerId", "buyerId", "fpti.cust"]
            },
            In = {
                type: "var",
                path: "dataLayer.contentCountry",
                defaultVal: ""
            },
            Fn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:billinginfopage:::::"
                    }
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/consu002/ppcre0+standard",
                        u1: zn
                    }
                }, {
                    name: "google",
                    enable: i,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPCreditAppStart",
                        eventAction: In,
                        eventLabel: ""
                    }
                }, {
                    name: t,
                    enable: i,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 1: billing info",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Confirm Billing Info"
                    }
                }]
            },
            En = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:newcust:::::"
                    },
                    session: {
                        key: "psucredit",
                        type: "start"
                    }
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/consu002/ppcre0+standard",
                        u1: zn
                    }
                }, {
                    name: "google",
                    enable: i,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPCreditAppStart",
                        eventAction: In,
                        eventLabel: ""
                    }
                }]
            },
            jn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:decisionpage:APPROVED::::"
                    }
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/consu002/ppcre00+standard",
                        u1: zn
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "422",
                                emea: "432",
                                latam: "604",
                                na: "585"
                            }]
                        },
                        u1: zn
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ProductSignup-CreditApproved-PayPalCreditApply"
                    }
                }, {
                    name: "google",
                    enable: i,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPCreditAppFinApproved",
                        eventAction: In,
                        eventLabel: ""
                    }
                }, {
                    name: t,
                    enable: i,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 4: decision",
                        event_label: "approved",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Decision Page"
                    }
                }]
            },
            Bn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:decisionpage:DECLINED::::"
                    }
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/consu002/ppcre000+standard",
                        u1: zn
                    }
                }, {
                    name: "google",
                    enable: i,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPCreditAppFinDeclined",
                        eventAction: In,
                        eventLabel: ""
                    }
                }, {
                    name: t,
                    enable: i,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 4: decision",
                        event_label: "declined",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Decision Page"
                    }
                }]
            },
            Rn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:decisionpage:APPROVED::::"
                    },
                    session: {
                        key: "psucredit",
                        type: "end"
                    }
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/consu0/persa00+standard"
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "416",
                                emea: "426",
                                latam: "598",
                                na: "579"
                            }]
                        },
                        u1: zn
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ConsumerSignup"
                    }
                }, {
                    name: "google",
                    enable: i,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PersAcctSUFin",
                        eventAction: In,
                        eventLabel: ""
                    }
                }, {
                    name: t,
                    enable: i,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 4: decision",
                        event_label: "approved",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Decision Page"
                    }
                }]
            },
            Nn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:decisionpage:DECLINED::::"
                    },
                    session: {
                        key: "psucredit",
                        type: "end"
                    }
                },
                vendors: [{
                    name: a,
                    enable: i,
                    vars: {
                        send_to: "DC-6386697/consu0/persa00+standard"
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: s,
                        px: {
                            type: "fn",
                            name: "conditionalValue",
                            args: [o, "fetchCountry", {
                                apac: "416",
                                emea: "426",
                                latam: "598",
                                na: "579"
                            }]
                        },
                        u1: zn
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ConsumerSignup"
                    }
                }, {
                    name: "google",
                    enable: i,
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PersAcctSUFin",
                        eventAction: In,
                        eventLabel: ""
                    }
                }, {
                    name: t,
                    enable: i,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 4: decision",
                        event_label: "declined",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Decision Page"
                    }
                }]
            },
            Hn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:mktg:personal::paypal-virtual-credit",
                        ccpg: "gb"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu002/ppcre001+standard",
                        u1: zn
                    }
                }]
            },
            On = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:creditapplyweb:(applypage:::::|newcust:::::)",
                        ccpg: "gb"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu002/ppcre002+standard",
                        u1: zn
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 1: billing info",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Confirm Billing Info"
                    }
                }]
            },
            Wn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:contractpage:CONSUMERCREDIT::::",
                        ccpg: "gb"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu003/ppcre00+standard",
                        u1: zn
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ProductSignup-CreditApproved-PayPalCreditApply"
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 3: terms and conditions",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Review Terms and Conditions"
                    }
                }]
            },
            Gn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:creditapplyweb:contractpage:CONSUMERCREDIT::::",
                        link: "creditContractAgreeToTermsGB",
                        ccpg: "gb"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu002/ppcre003+standard",
                        u1: zn
                    }
                }, {
                    name: "visualiq",
                    enable: u,
                    vars: {
                        ao: "875",
                        px: "440"
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 4: decision",
                        event_label: "approved",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Decision Page"
                    }
                }]
            },
            Jn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:decisionpage:DECLINED::::",
                        ccpg: "gb"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu002/ppcre004+standard",
                        u1: zn
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 4: decision",
                        event_label: "declined",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Decision Page"
                    }
                }]
            },
            $n = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:personalinfopage:::::"
                    }
                },
                vendors: [{
                    name: t,
                    enable: i,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 2: personal info",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Enter Personal Info"
                    }
                }]
            },
            Kn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:creditapplyweb:termspage:::::"
                    }
                },
                vendors: [{
                    name: t,
                    enable: i,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "consumer credit",
                        event_action: "step 3: terms and conditions",
                        page_path: {
                            type: "fn",
                            name: "constructUrl"
                        },
                        page_title: "Review Terms and Conditions"
                    }
                }]
            },
            Qn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:debitcardweb:debitcard:.*:createCard:primaryCard:entered"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/merch003+standard"
                    }
                }]
            },
            Xn = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:debitcardweb:debitcard:.*:createCard:primaryCard:success"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/merch004+standard"
                    }
                }]
            },
            Yn = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:bankingbundle:(upgrade:(wocip:confirmshipaddr|wcip:confirmbilladdr):::|signupupgrade::confirmshipaddr:::)",
                        product_type: "BUNDLE"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa0+standard"
                    }
                }]
            },
            Zn = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:bankingbundle:(upgrade:wocip|upgrade:wcip|signupupgrade:):upgradesuccess:::",
                        product_type: "BUNDLE"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa00+standard"
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ProductSignup-PayPalMeSUFin-PayPalMe"
                    }
                }]
            },
            et = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:bankingbundle:activatecard::(activatecardform|entrycardarrived):::",
                        product_type: "BUNDLE"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa000+standard"
                    }
                }]
            },
            nt = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:bankingbundle:activatecard::(createpinsuccess|activatesuccess):::",
                        product_type: "BUNDLE"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa001+standard"
                    }
                }]
            },
            tt = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:bankingbundle:(upgrade:(wocip:confirmshipaddr|wcip:confirmbilladdr):::|signupupgrade::confirmshipaddr:::)",
                        product_type: "BUNDLE_LITE"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa006+standard"
                    }
                }]
            },
            at = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:bankingbundle:(upgrade:wocip|upgrade:wcip|signupupgrade:):upgradesuccess:::",
                        product_type: "BUNDLE_LITE"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa007+standard"
                    }
                }]
            },
            rt = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:bankingbundle:activatecard::(activatecardform|entrycardarrived):::",
                        product_type: "BUNDLE_LITE"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa004+standard"
                    }
                }]
            },
            ot = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:bankingbundle:activatecard::(createpinsuccess|activatesuccess):::",
                        product_type: "BUNDLE_LITE"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa005+standard"
                    }
                }]
            },
            st = {
                enable: i,
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        link: "print"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/paypa002+standard"
                    }
                }]
            },
            it = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:falconnode::approval",
                        prod: "pph"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/pphsu0+standard"
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ProductSignup-PPHSuccess-MobileMerchant"
                    }
                }]
            },
            pt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:falconnode::denied",
                        prod: "pph"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/pphde0+standard"
                    }
                }]
            },
            dt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:onbrd:falconnode::review",
                        prod: "pph"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/pphre0+standard"
                    }
                }]
            },
            ct = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:businessweb:muse::tag-creation(::CreateTag|-mini::AgreeContinue)"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/musei0+standard"
                    }
                }]
            },
            mt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:businessweb:muse::tag.*Settings",
                        pglk: "main:businessweb:muse::tag-creation.*"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/musei00+standard"
                    }
                }]
            },
            lt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        pglk: "main:mktg:personal.*one-touch-checkout.*One.*Touch.*"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/oneto0+standard"
                    }
                }]
            },
            gt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:mktg:personal:buy:one-touch-checkout:::",
                        pglk: "main:unifiedlogin:::login|unifiedlogin-login-submit",
                        lgin: "in"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/consu000/oneto00+standard"
                    }
                }]
            },
            _t = {
                trigger: {
                    type: "fn",
                    name: "handleClick",
                    sel: "#\\/appData\\/action",
                    suppl: {
                        checked: "true",
                        sel: ["#paypalAccountData_oneTouchCheckbox"]
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "onetouch payments",
                        event_action: "consumer sign up"
                    }
                }]
            },
            vt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        page: "main:inv3:manage::invoices:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/invoi0+standard"
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "merchant invoicing",
                        event_action: "create"
                    }
                }]
            },
            ut = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:inv3:manage:msg:(invsent|scheduled|invshared):::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch00/invoi00+standard"
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ProductSignup-InvoiceFin-Invoice"
                    }
                }, {
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "merchant invoicing",
                        event_action: "send"
                    }
                }]
            },
            yt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:consumer:gifts:home:"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/gener0/ppdgl0+standard"
                    }
                }]
            },
            ht = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pgrp: "main:consumer:gifts:cart:"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/gener0/ppdgs0+standard"
                    }
                }]
            },
            bt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:consumer:gifts:cart:success:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/gener0/ppdge0+standard"
                    }
                }]
            },
            ft = {
                type: "var",
                path: "dataLayer.contentCountry",
                defaultVal: ""
            },
            Ct = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        page: "main:ppwc:::homepage:::"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch001/ppwcl0+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPWCLanding",
                        eventAction: ft,
                        eventLabel: ""
                    }
                }]
            },
            wt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        qual: "businessInfoView"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch001/ppwca0+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPWCAppStart",
                        eventAction: ft,
                        eventLabel: ""
                    }
                }]
            },
            kt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        qual: "offerInfoView"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch001/ppwca002+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPWCAppApproved",
                        eventAction: ft,
                        eventLabel: ""
                    }
                }]
            },
            Dt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        qual: "decision.*"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch001/ppwca001+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPWCAppDeclined",
                        eventAction: ft,
                        eventLabel: ""
                    }
                }]
            },
            Tt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        qual: "eligibility.*"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch001/ppwca000+standard"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPWCAppIneligible",
                        eventAction: ft,
                        eventLabel: ""
                    }
                }]
            },
            Pt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "im",
                        pglk: "workingcapitalnodeweb.*complete.*"
                    }
                },
                vendors: [{
                    name: a,
                    vars: {
                        send_to: "DC-6386697/merch001/ppwca00+standard"
                    }
                }, {
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ProductSignup-PPWCLoanFunded-PayPalWorkingCapital"
                    }
                }, {
                    name: "google",
                    vars: {
                        hitType: "event",
                        eventCategory: "DCM: PPWCAppFinLoanFunded",
                        eventAction: ft,
                        eventLabel: ""
                    }
                }]
            },
            Lt = {
                trigger: {
                    type: "generic"
                },
                vendors: [{
                    name: r,
                    enable: m,
                    vars: {
                        ev: "ViewContent"
                    }
                }]
            },
            xt = {
                trigger: {
                    type: n,
                    condition: {
                        e: "cl",
                        pgrp: "main:cause:fundraiser:hub:(landing|charity)"
                    }
                },
                vendors: [{
                    name: t,
                    vars: {
                        send_to: "default",
                        hitType: "event",
                        event_category: "donate to charity",
                        event_action: "donate",
                        event_value: {
                            type: "var",
                            path: "fpti.amt"
                        }
                    }
                }]
            },
            At = {
                activationnodeweb: ["pers_acc_upg_fin", "merc_acc_su_end"],
                bankingbundlenodeweb: ["ccfullreq_start", "ccfullreq_end", "ccfullact_start", "ccfullact_end", "cclitereq_start", "cclitereq_end", "ccliteact_start", "ccliteact_end", "ccdd_setup"],
                bizsignupnodeweb: ["pers_acc_upg_start", "pro_su_start", "pro_su_end_app", "pro_su_end_rev", "pro_su_end_dec", "merc_acc_su_start", "merc_acc_su_end", "pph_success", "pph_decline", "pph_review"],
                bizwalletnodeweb: ["oct_flow_start", "oct_flow_end"],
                checkoutuinodeweb: ["xo_start", "xo_end", "guest_xo_su_start", "guest_xo_su_end"],
                consonbdnodeweb: ["pers_acc_su_fin"],
                creditapplyweb: ["credit_app_start", "credit_app_succ", "credit_app_decl", "credit_psu_start", "start_uk", "appr_uk", "succ_end_uk", "dec_end_uk", "credit_app_per_info", "credit_app_terms"],
                debitcardnodeweb: ["bizdebit_start", "bizdebit_aprv"],
                financeportalnodeweb: ["fp_ln_click"],
                hermesnodeweb: ["xo_start", "xo_end", "pad_start", "pad_end", "pad_ps"],
                invoicingnodeweb: ["inv_start", "inv_end"],
                mepnodeweb: ["merc_acc_summ"],
                merchmoneynodeweb: ["mer_itx_start", "mer_itx_end"],
                merchantsignupnodeweb: ["merc_acc_su_start", "merc_acc_su_end", "pers_acc_upg_start", "pplus_start", "pplus_fin"],
                moneynodeweb: ["cons_ixfer_start", "cons_ixfer_mid", "cons_ixfer_end", "cons_add_bank_start", "cons_add_bank_end_v2", "cons_add_card_start", "cons_add_card_end", "mer_add_bank_start", "mer_add_bank_end_v2", "mer_add_card_start", "mer_add_card_end", "link_bank_cons", "link_bank_mer", "link_card"],
                mppnodeweb: ["mpp_thankyou", "mpp_mp_start", "land_uk", "ot_start", "ot_end", "egov_start", "egov_end", "mpp_form_submit", "rd_curr_top", "rd_curr", "rd_prev", "con_sel", "mer_sel", "shp_su_start", "shp_su_end", "mpp_404", "acc_sel", "pp_partner_cnt_start", "pp_partner_cnt_finish", "pp_merchant_cnt_start", "pp_merchant_cnt_finish", "ot_sign_up", "con_sel_click", "mer_sel_click", "prod_sel_pageview", "mpp_offer"],
                p2pnodeweb: ["send_mon_start", "send_mon_fin", "req_mon_start", "req_mon_fin", "psp_send_mon", "psp_send_mon_int", "psp_send_gift", "psp_req_mon", "psp_buy", "donate_cause"],
                poolsnodeweb: ["mp_start", "mp_end", "mp_send_start", "mp_send_end", "mp_wdl_start", "mp_wdl_end", "mp_send_amt_ga", "mp_send_note_ga", "mp_send_review_ga", "mp_create_pref_ga", "mp_create_desc_ga", "mp_create_prev_ga", "mp_create_prepub_ga", "mp_create_pub_ga", "chipIn_send_guest", "chipIn_end_guest"],
                ppdgnodeweb: ["ppdg_land", "ppdg_txn_start", "ppdg_txn_end"],
                ppme: ["ppme_start", "ppme_end"],
                progressivenodeweb: ["pers_acc_su_fin", "pers_acc_su_start", "premi_acc_su_start", "premi_acc_su_end", "sb_su_start", "sb_su_end", "psu_credit_succ", "psu_credit_decl", "tesla_su_account", "tesla_su_create", "tesla_su_intent", "tesla_su_addcard", "tesla_su_addbank", "tesla_su_buy"],
                summarynodeweb: ["cons_acc_summ", "cons_summ_cl"],
                tagmanagernodeweb: ["muse_start", "muse_end"],
                walletexpnodeweb: ["cons_acc_summ", "cons_summ_cl", "cons_add_bank_start", "cons_add_bank_end_v1", "cons_add_card_start", "cons_add_card_end", "mer_add_bank_start", "mer_add_bank_end_v1", "mer_add_card_start", "mer_add_card_end", "link_card"],
                workingcapitalnodeweb: ["landing", "start", "approved", "declined", "ineligible", "funded"],
                xoonboardingnodeweb: ["xo_start", "xo_end", "guest_xo_end", "guest_xo_su_start", "guest_xo_su_end"],
                __mi_generic: ["gen_fb"]
            };
        e.loadTags = function(e) {
            var n = At[e];
            if (e && n) return n.concat(At.__mi_generic)
        }, e.loadJs = function(e) {
            return {
                mppnodeweb: ["mpp"]
            }[e]
        };
        var Mt = {
            cons_acc_summ: Je,
            cons_ixfer_end: ne,
            cons_ixfer_mid: ee,
            cons_ixfer_start: Z,
            credit_app_decl: Bn,
            credit_app_start: Fn,
            credit_app_succ: jn,
            fp_ln_click: Ge,
            merc_acc_summ: Ke,
            merc_acc_su_end: Pn,
            merc_acc_su_start: Tn,
            mp_end: E,
            mp_send_end: B,
            mp_send_start: j,
            mp_start: F,
            mp_wdl_end: H,
            mp_wdl_start: N,
            mpp_mp_start: Te,
            mpp_thankyou: De,
            mpp_404: Fe,
            oct_flow_end: U,
            oct_flow_start: q,
            pers_acc_su_fin: un,
            pers_acc_su_start: vn,
            pers_acc_upg_fin: pn,
            pers_acc_upg_start: sn,
            ppme_start: cn,
            ppme_end: mn,
            premi_acc_su_start: yn,
            premi_acc_su_end: hn,
            req_mon_fin: en,
            req_mon_start: Ze,
            send_mon_fin: Ye,
            send_mon_start: Xe,
            xo_end: D,
            xo_start: k,
            guest_xo_su_start: T,
            guest_xo_su_end: L,
            sb_su_start: bn,
            sb_su_end: fn,
            pro_su_start: Cn,
            pro_su_end_app: wn,
            pro_su_end_rev: kn,
            pro_su_end_dec: Dn,
            guest_xo_end: P,
            cons_summ_cl: $e,
            mer_itx_start: z,
            mer_itx_end: I,
            cons_add_bank_start: de,
            cons_add_bank_end_v1: me,
            cons_add_bank_end_v2: le,
            mer_add_bank_start: ve,
            cons_add_card_start: ge,
            cons_add_card_end: _e,
            mer_add_bank_end_v1: ye,
            mer_add_bank_end_v2: he,
            mer_add_card_start: be,
            mer_add_card_end: fe,
            bizdebit_start: Qn,
            bizdebit_aprv: Xn,
            ccfullreq_start: Yn,
            ccfullreq_end: Zn,
            ccfullact_start: et,
            ccfullact_end: nt,
            cclitereq_start: tt,
            cclitereq_end: at,
            ccliteact_start: rt,
            ccliteact_end: ot,
            ccdd_setup: st,
            pph_success: it,
            pph_decline: pt,
            pph_review: dt,
            land_uk: Hn,
            start_uk: On,
            appr_uk: Wn,
            succ_end_uk: Gn,
            dec_end_uk: Jn,
            muse_start: ct,
            muse_end: mt,
            ot_start: lt,
            ot_end: gt,
            inv_start: vt,
            inv_end: ut,
            egov_start: Pe,
            egov_end: Le,
            pad_start: x,
            pad_end: A,
            pad_ps: M,
            mpp_form_submit: Ie,
            rd_curr_top: xe,
            rd_curr: Ae,
            rd_prev: Me,
            con_sel: Se,
            mer_sel: qe,
            shp_su_start: Ue,
            shp_su_end: ze,
            psu_credit_succ: Rn,
            psu_credit_decl: Nn,
            credit_psu_start: En,
            ppdg_land: yt,
            ppdg_txn_start: ht,
            ppdg_txn_end: bt,
            pplus_start: Ln,
            pplus_fin: xn,
            landing: Ct,
            start: wt,
            approved: kt,
            declined: Dt,
            ineligible: Tt,
            funded: Pt,
            acc_sel: Ve,
            gen_fb: Lt,
            pp_partner_cnt_start: Ee,
            pp_partner_cnt_finish: je,
            pp_merchant_cnt_start: Be,
            pp_merchant_cnt_finish: Re,
            ot_sign_up: _t,
            psp_send_mon: nn,
            psp_send_mon_int: tn,
            psp_send_gift: an,
            psp_req_mon: rn,
            psp_buy: on,
            con_sel_click: Ne,
            mer_sel_click: He,
            prod_sel_pageview: Oe,
            mpp_offer: We,
            link_bank_cons: Ce,
            link_bank_mer: we,
            link_card: ke,
            credit_app_per_info: $n,
            credit_app_terms: Kn,
            mp_send_amt_ga: O,
            mp_send_note_ga: W,
            mp_send_review_ga: G,
            mp_create_pref_ga: J,
            mp_create_desc_ga: $,
            mp_create_prev_ga: K,
            mp_create_prepub_ga: Q,
            mp_create_pub_ga: X,
            chipIn_send_guest: Y,
            chipIn_end_guest: R,
            donate_cause: xt,
            tesla_su_account: An,
            tesla_su_create: Mn,
            tesla_su_intent: Sn,
            tesla_su_addcard: Vn,
            tesla_su_addbank: qn,
            tesla_su_buy: Un
        };
        e.loadTagConfig = function(e) {
            return Mt[e]
        }
    }(); ===
=== = ! function() {
    "use strict";
    var e = window.miconfig = window.miconfig || {},
        n = "pa.beacon",
        t = "ga",
        a = "dc",
        r = "fb",
        o = {
            apac: "sg|my|in|id|ph|vn|th|au|nz|hk|tw|kr|jp|cn|c2",
            emea: "at|ch|de|be|lu|nl|al|am|ax|az|ba|bg|by|cs|cy|cz|ee|fi|ge|gg|gi|gr|hr|hu|im|je|li|lt|lv|md|me|mk|mt|pl|ro|rs|si|sk|ua|yu|ie|dk|fo|gl|is|no|se|sj|ao|aq|bf|bi|bj|bv|bw|cd|cf|cg|ci|ck|cm|cv|dj|er|et|ga|gh|gm|gn|gq|gw|hm|il|ke|km|lr|ls|mg|ml|mr|mu|mw|mz|na|ne|ng|rw|sc|sd|sh|sl|sn|so|st|sz|td|tg|tz|ug|za|zm|zw|ae|af|bh|dz|eg|eh|iq|ir|jo|kg|kw|kz|lb|ly|ma|om|ps|qa|sa|sy|tj|tm|tn|tr|uz|ye|ru|fr|fx|gf|gp|mc|mq|nc|pf|pm|re|tf|wf|yt|ad|es|pt|it|sm|va|gb",
            latam: "br|mx|ar|cl|co|cr|do|pe|uy|ve|ai|ag|aw|bs|bb|bz|bm|bo|vg|ky|dm|ec|sv|fk|gd|gt|gy|hn|jm|ms|an|ni|pa|py|kn|lc|vc|sr|tt|tc",
            na: "^us|ca"
        },
        s = {
            type: "fn",
            name: "conditionalValue",
            args: [o, "fetchCountry", {
                apac: "874",
                emea: "875",
                latam: "839",
                na: "660"
            }]
        },
        i = {
            type: "fn",
            name: "conditionalValue",
            args: ["us", "fetchCountry"]
        },
        p = {
            type: "fn",
            name: "conditionalValue",
            args: ["de", "fetchCountry"]
        },
        d = {
            type: "fn",
            name: "conditionalValue",
            args: [o.apac, "fetchCountry"]
        },
        c = {
            type: "fn",
            name: "conditionalValue",
            args: ["au", "fetchCountry"]
        },
        m = {
            type: "fn",
            name: "conditionalValue",
            args: ["au|c2|hk|id|in|jp|kr|my|ph|sg|th|tw|vn|us|ca|br|mx|ar|cl|co|cr|do|pe|uy|ve|ai|ag|aw|bs|bb|bz|bm|bo|vg|ky|dm|ec|sv|fk|gd|gt|gy|hn|jm|ms|an|ni|pa|py|kn|lc|vc|sr|tt|tc", "fetchCountry"]
        },
        l = {
            type: "fn",
            name: "conditionalValue",
            args: ["us|ca|au|jp|mx|ar|cl|co|cr|do|pe|uy|ve|ai|ag|aw|bs|bb|bz|bm|bo|vg|ky|dm|ec|sv|fk|gd|gt|gy|hn|jm|ms|an|ni|pa|py|kn|lc|vc|sr|tt|tc|br", "fetchCountry"]
        },
        g = {
            type: "fn",
            name: "conditionalValue",
            args: ["at|ch|de|be|lu|nl|al|am|ax|az|ba|bg|by|cs|cy|cz|ee|fi|ge|gg|gi|gr|hr|hu|im|je|li|lt|lv|md|me|mk|mt|pl|ro|rs|si|sk|ua|yu|ie|dk|fo|gl|is|no|se|sj|ao|aq|bf|bi|bj|bv|bw|cd|cf|cg|ci|ck|cm|cv|dj|er|et|ga|gh|gm|gn|gq|gw|hm|il|ke|km|lr|ls|mg|ml|mr|mu|mw|mz|na|ne|ng|rw|sc|sd|sh|sl|sn|so|st|sz|td|tg|tz|ug|za|zm|zw|ae|af|bh|dz|eg|eh|iq|ir|jo|kg|kw|kz|lb|ly|ma|om|ps|qa|sa|sy|tj|tm|tn|tr|uz|ye|ru|fr|fx|gf|gp|mc|mq|nc|pf|pm|re|tf|wf|yt|ad|es|pt|it|sm|va|gb|sg|my|in|id|ph|vn|th|nz|hk|tw|kr|cn|c2", "fetchCountry"]
        },
        _ = {
            type: "fn",
            name: "conditionalValue",
            args: ["us|gb|ca|ie", "fetchCountry"]
        },
        v = {
            type: "fn",
            name: "conditionalValue",
            args: ["br", "fetchCountry"]
        },
        u = {
            type: "fn",
            name: "conditionalValue",
            args: [o, "fetchCountry"]
        },
        y = {
            google: {
                name: "google",
                endpoint: {
                    scheme: "https",
                    host: "www.google-analytics.com",
                    path: "/r/collect?"
                },
                enforce_gdpr: !1,
                vars: {
                    dimension1: {
                        type: "fn",
                        name: "gaClientId"
                    },
                    dimension2: {
                        type: "var",
                        path: "fpti.cust"
                    },
                    dimension3: {
                        type: "fn",
                        name: "isLoggedIn"
                    },
                    dimension4: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    dimension5: {
                        type: "fn",
                        name: "fetchCountry"
                    },
                    dimension6: {
                        type: "var",
                        path: "fpti.locale"
                    },
                    dimension7: {
                        type: "var",
                        path: "fpti.acnt"
                    },
                    dimension8: "",
                    dimension9: "",
                    dimension10: {
                        type: "var",
                        path: "fpti.comp"
                    },
                    dimension19: {
                        type: "var",
                        path: "fpti.xe"
                    },
                    dimension20: {
                        type: "var",
                        path: "fpti.xt"
                    },
                    dimension22: {
                        type: "var",
                        path: "fpti.pgrp"
                    },
                    dimension25: {
                        type: "fn",
                        name: "fetchFptiCookie"
                    },
                    dimension26: {
                        type: "fn",
                        name: "gdprOptOut"
                    },
                    contentGroup3: {
                        type: "fn",
                        name: "isLoggedIn"
                    }
                }
            },
            ga: {
                name: t,
                endpoint: {
                    scheme: "https",
                    host: "www.google-analytics.com",
                    path: "/r/collect?"
                },
                enforce_gdpr: !1,
                vars: {
                    dimension1: {
                        type: "fn",
                        name: "gaClientId"
                    },
                    dimension2: {
                        type: "var",
                        path: "fpti.cust"
                    },
                    dimension3: {
                        type: "fn",
                        name: "isLoggedIn"
                    },
                    dimension4: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    dimension5: {
                        type: "fn",
                        name: "fetchCountry"
                    },
                    dimension6: {
                        type: "var",
                        path: "fpti.locale"
                    },
                    dimension7: {
                        type: "var",
                        path: "fpti.acnt"
                    },
                    dimension8: "",
                    dimension9: "",
                    dimension10: {
                        type: "var",
                        path: "fpti.comp"
                    },
                    dimension19: {
                        type: "var",
                        path: "fpti.xe"
                    },
                    dimension20: {
                        type: "var",
                        path: "fpti.xt"
                    },
                    dimension22: {
                        type: "var",
                        path: "fpti.pgrp"
                    },
                    dimension25: {
                        type: "fn",
                        name: "fetchFptiCookie"
                    },
                    dimension26: {
                        type: "fn",
                        name: "gdprOptOut"
                    },
                    content_group3: {
                        type: "fn",
                        name: "isLoggedIn"
                    }
                }
            },
            dc: {
                name: a,
                endpoint: {
                    scheme: "https",
                    host: "ad.doubleclick.net",
                    path: "/activity/"
                },
                seperator: ";",
                enforce_gdpr: !1,
                action: "conversion",
                vars: {
                    allow_custom_scripts: "true",
                    value: {
                        type: "var",
                        path: "fpti.amt"
                    },
                    transaction_id: {
                        type: "var",
                        path: "fpti.trid"
                    },
                    npa: {
                        type: "fn",
                        name: "gdprOptOut"
                    },
                    u1: {
                        type: "var",
                        path: "fpti.cust"
                    },
                    u2: {
                        type: "var",
                        path: "fpti.mrid"
                    },
                    u3: {
                        type: "var",
                        path: "fpti.amt"
                    },
                    u4: {
                        type: "var",
                        path: "fpti.curr"
                    },
                    u5: {
                        type: "var",
                        path: "fpti.trid"
                    },
                    u6: {
                        type: "var",
                        path: "fpti.page"
                    },
                    u7: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    u8: {
                        type: "var",
                        path: "fpti.flnm"
                    },
                    u9: {
                        type: "fn",
                        name: "fetchFptiCookie"
                    },
                    u10: {
                        type: "fn",
                        name: "fetchCountry"
                    }
                }
            },
            mathtag: {
                name: "mathtag",
                endpoint: {
                    scheme: "https",
                    host: "pixel.mathtag.com",
                    path: "/event/img?"
                },
                vars: {
                    v1: {
                        type: "fn",
                        name: "fetchFptiCookie"
                    }
                }
            },
            fb: {
                name: r,
                endpoint: {
                    scheme: "https",
                    host: "www.facebook.com",
                    path: "/tr?"
                },
                vars: {
                    id: "1674696026155243",
                    noscript: "1",
                    "cd[FPTICookie]": {
                        type: "fn",
                        name: "fetchFptiCookie"
                    },
                    "cd[CustomerID]": {
                        type: "var",
                        path: "fpti.cust",
                        enable: i
                    },
                    "cd[MerchantID]": {
                        type: "var",
                        path: "fpti.mrid"
                    },
                    "cd[MerchantTPV]": {
                        type: "var",
                        path: "fpti.amt"
                    },
                    "cd[MerchantTransaction]": {
                        type: "var",
                        path: "fpti.curr"
                    },
                    "cd[P2PTransaction]": "",
                    "cd[P2PTPV]": ""
                }
            },
            visualiq: {
                name: "visualiq",
                endpoint: {
                    scheme: "https",
                    host: "t.myvisualiq.net",
                    path: "/activity_pixel?"
                },
                vars: {
                    ago: "212",
                    ao: "[ao_value]",
                    et: "a",
                    pt: "i",
                    ord: "[order_id]",
                    px: "[px_value]",
                    revenue: "[revenue]",
                    u1: {
                        type: "var",
                        path: "fpti.cust",
                        defaultVal: "[Placeholder_1]"
                    },
                    u2: {
                        type: "var",
                        path: "fpti.mrid",
                        defaultVal: "[Placeholder_2]"
                    },
                    u3: {
                        type: "var",
                        path: "fpti.amt",
                        defaultVal: "[Placeholder_3]"
                    },
                    u4: {
                        type: "var",
                        path: "fpti.curr",
                        defaultVal: "[Placeholder_4]"
                    },
                    u5: {
                        type: "var",
                        path: "fpti.trid",
                        defaultVal: "[Placeholder_5]"
                    },
                    u6: {
                        type: "var",
                        path: "fpti.page",
                        defaultVal: "[Placeholder_6]"
                    },
                    u7: {
                        type: "fn",
                        name: "constructUrl",
                        defaultVal: "[Placeholder_7]"
                    },
                    u8: {
                        type: "var",
                        path: "fpti.flnm",
                        defaultVal: "[Placeholder_8]"
                    },
                    u9: {
                        type: "fn",
                        name: "fetchFptiCookie",
                        defaultVal: "[Placeholder_9]"
                    },
                    u10: {
                        type: "fn",
                        name: "fetchCountry"
                    },
                    r: "[cachebuster]"
                }
            },
            tapad: {
                name: "tapad",
                endpoint: {
                    scheme: "https",
                    host: "tapestry.tapad.com",
                    path: "/tapestry/1?"
                },
                vars: {
                    ta_partner_id: "950",
                    ta_redirect: {
                        type: "fn",
                        name: "encodeURIComponent",
                        args: ["https://t.myvisualiq.net/sync?prid=1001&ao=0&pruuid=TAPAD_${IDS:key}"]
                    }
                }
            },
            liadm: {
                name: "liadm",
                endpoint: {
                    scheme: "https",
                    host: "d.liadm.com"
                }
            },
            zemanta: {
                name: "zemanta",
                endpoint: {
                    scheme: "https",
                    host: "p1.zemanta.com",
                    path: "/p/342/585/"
                }
            }
        },
        b = {
            type: "var",
            path: "pre.payee.res.data.merchant.id"
        },
        h = {
            type: "var",
            path: "fpti.cust"
        },
        f = {
            type: "var",
            path: "pre.cart.res.data.purchase.amounts.total.amount"
        },
        C = {
            type: "fn",
            name: "fetchCountry",
            defaultVal: ""
        },
        w = {
            type: "var",
            path: "pre.cart.res.data.purchase.amounts.total.currency_code"
        },
        k = {
            trigger: {
                type: "fn",
                name: "fireImmediate"
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/herme0+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }, {
                name: "mathtag",
                enable: i,
                vars: {
                    mt_id: "1019462",
                    mt_adid: "136505",
                    v2: f,
                    s1: b
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: HermesFlowTxnStart",
                    eventAction: C,
                    eventLabel: b,
                    eventValue: {
                        type: "int",
                        path: "pre.cart.res.data.purchase.amounts.total.amount",
                        defaultVal: 0
                    },
                    dimension23: {
                        type: "var",
                        path: "pre.checkoutAppData.res.data.flow_id"
                    },
                    dimension24: w
                }
            }]
        },
        D = {
            trigger: {
                type: "fn",
                name: "fireButtonClick"
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/herme00+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "Transaction-HermesFlowTxnEnd-HermesFlow",
                    "cd[MerchantID]": b,
                    "cd[MerchantTPV]": f,
                    "cd[MerchantTransaction]": w
                }
            }, {
                name: "mathtag",
                enable: i,
                vars: {
                    mt_id: "888637",
                    mt_adid: "136505",
                    v2: f,
                    s1: b
                }
            }, {
                name: "mathtag",
                enable: i,
                vars: {
                    mt_id: "984098",
                    mt_adid: "136505",
                    v2: f,
                    s1: b
                }
            }, {
                name: "liadm",
                enable: i,
                endpoint: {
                    path: "/pixel?"
                },
                vars: {
                    c: "19160"
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "413",
                            emea: "423",
                            latam: "595",
                            na: "576"
                        }]
                    },
                    u1: h,
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "attempted checkout",
                    eventAction: C,
                    eventLabel: b,
                    eventValue: {
                        type: "int",
                        path: "pre.cart.res.data.purchase.amounts.total.amount",
                        defaultVal: 0
                    },
                    dimension23: {
                        type: "var",
                        path: "pre.checkoutAppData.res.data.flow_id"
                    },
                    dimension24: w
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: HermesFlowTxnFin",
                    eventAction: C,
                    eventLabel: b,
                    eventValue: {
                        type: "int",
                        path: "pre.cart.res.data.purchase.amounts.total.amount",
                        defaultVal: 0
                    },
                    dimension23: {
                        type: "var",
                        path: "pre.checkoutAppData.res.data.flow_id"
                    },
                    dimension24: w
                }
            }]
        },
        T = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:ec:hermes::(fullpage-signup|fullpage-guest):member:hermes:|main:xo:lite:weasley:guestAndSignup:billing"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/guest0+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }, {
                name: a,
                vars: {
                    send_to: "DC-6386697/consu0/guest0+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: GuestSUStart",
                    eventAction: C,
                    eventLabel: ""
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: GuestCheckoutStart",
                    eventAction: C,
                    eventLabel: ""
                }
            }]
        },
        P = {
            trigger: {
                type: "fn",
                name: "fireButtonClick"
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/guest00+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: GuestCheckoutFin",
                    eventAction: C,
                    eventLabel: ""
                }
            }]
        },
        x = {
            trigger: {
                type: "fn",
                name: "handleClick",
                sel: "button[type=submit], input[type=submit]",
                suppl: {
                    checked: "true",
                    sel: ["#saveMyInfo", "#guestSignup1", "#agree"]
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu0/guest00+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "417",
                            emea: "427",
                            latam: "599",
                            na: "580"
                        }]
                    },
                    u1: h,
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: GuestSUFin",
                    eventAction: C,
                    eventLabel: ""
                }
            }]
        },
        A = {
            enable: c,
            trigger: {
                type: "fn",
                name: "handleClick",
                sel: "#padToggle",
                suppl: {
                    checked: "true",
                    sel: ["#padToggle"]
                },
                session: {
                    key: "aupad",
                    type: "start"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/test0/latm_0+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }]
        },
        L = {
            enable: c,
            trigger: {
                type: "fn",
                name: "handleClick",
                sel: "#confirmButtonTop",
                suppl: {
                    checked: "true",
                    sel: ["#padToggle"]
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/test0/latm_00+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }]
        },
        S = {
            enable: c,
            trigger: {
                type: "fn",
                name: "handleClick",
                sel: "#confirmButtonTop",
                suppl: {
                    checked: "true",
                    sel: ["#padToggle"]
                },
                session: {
                    key: "aupad",
                    type: "end"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/test0/latm_000+standard",
                    u2: b,
                    u3: f,
                    u4: w,
                    u10: C
                }
            }]
        },
        M = [{
            name: a,
            vars: {
                send_to: "DC-6386697/merch000/merch0+standard"
            }
        }],
        V = [{
            name: a,
            vars: {
                send_to: "DC-6386697/merch000/merch00+standard"
            }
        }],
        q = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:businessweb:money:transfer:main:::"
                }
            },
            vendors: M
        },
        U = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    fltp: "oct_flow",
                    pgrp: "main:businessweb:money:transfer:success"
                }
            },
            vendors: V
        },
        I = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:businessweb:money:withdraw-funds:transfer-to::",
                    link: "instant"
                }
            },
            vendors: M
        },
        z = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:businessweb:money:instant-funds:transfer-success::",
                    fltp: "instant"
                }
            },
            vendors: V
        },
        F = {
            type: "fn",
            name: "fetchCountry",
            defaultVal: ""
        },
        E = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:create::basics:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/money0+standard"
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "create money pools",
                    event_action: F,
                    event_label: "step 1: create pool",
                    page_path: "/pools/c/create/basics",
                    page_title: "Set your pool's goal",
                    dimension9: "step 1: create pool",
                    dimension10: "pools"
                }
            }]
        },
        j = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:campaign-create-success:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/money00+standard"
                }
            }]
        },
        B = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:send::amount:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/money000+standard"
                }
            }]
        },
        R = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:campaign-xxx-send-success:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/money001+standard"
                }
            }]
        },
        N = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:(pools:campaign-xxx-send-success:::|transfer:guest:success:)"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send money pools",
                    event_action: F,
                    event_label: "step 4: transfer success",
                    page_path: "/pools/c/send/complete",
                    page_title: "Chip in complete",
                    dimension9: "step 4: transfer success",
                    dimension10: "pools"
                }
            }]
        },
        H = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:withdraw::amount:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/money002+standard"
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "withdraw money pools",
                    event_action: F,
                    event_label: "step 1: withdraw money",
                    page_path: "/pools/c/edit/transfer",
                    page_title: "Transfer money",
                    dimension9: "step 1: withdraw money",
                    dimension10: "pools"
                }
            }]
        },
        O = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:withdraw::complete:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/money003+standard"
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "withdraw money pools",
                    event_action: F,
                    event_label: "step 2: withdraw success",
                    page_path: "/pools/c/edit/transfer/complete",
                    page_title: "Transfer money complete",
                    dimension9: "step 2: withdraw success",
                    dimension10: "pools"
                }
            }]
        },
        W = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:send::amount:::",
                    pglk: "main:pools:campaign::page|chipIn"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send money pools",
                    event_action: F,
                    event_label: "step 1: send money",
                    page_path: "/pools/c/send/amount",
                    page_title: "Chip in to a pool",
                    dimension9: "step 1: send money",
                    dimension10: "pools"
                }
            }]
        },
        G = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:(send::note:::|guest::note:::)"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send money pools",
                    event_action: F,
                    event_label: "step 2: add comment",
                    page_path: "/pools/c/send/note",
                    page_title: "Add a comment",
                    dimension9: "step 2: add comment",
                    dimension10: "pools"
                }
            }]
        },
        J = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:(pools:send::review:::|p2p:guest:preview:)"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send money pools",
                    event_action: F,
                    event_label: "step 3: review",
                    page_path: "/pools/c/send/review",
                    page_title: "Confirm transfer",
                    dimension9: "step 3: review",
                    dimension10: "pools"
                }
            }]
        },
        $ = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:create::preferences:::"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "create money pools",
                    event_action: F,
                    event_label: "step 2: pool preferences",
                    page_path: "/pools/c/create/preferences",
                    page_title: "How much can contributors pay?",
                    dimension9: "step 2: pool preferences",
                    dimension10: "pools"
                }
            }]
        },
        K = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:create::description:::"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "create money pools",
                    event_action: F,
                    event_label: "step 3: pool description",
                    page_path: "/pools/c/create/description",
                    page_title: "Describe your pool",
                    dimension9: "step 3: pool description",
                    dimension10: "pools"
                }
            }]
        },
        Q = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:create::preview:::"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "create money pools",
                    event_action: F,
                    event_label: "step 4: pool preview",
                    page_path: "/pools/c/create/preview",
                    page_title: "Preview your money pool",
                    dimension9: "step 4: pool preview",
                    dimension10: "pools"
                }
            }]
        },
        X = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:create::prepublish:::"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "create money pools",
                    event_action: F,
                    event_label: "step 5: pool prepublish",
                    page_path: "/pools/c/create/prepublish",
                    page_title: "Ready to publish",
                    dimension9: "step 5: pool prepublish",
                    dimension10: "pools"
                }
            }]
        },
        Y = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:pools:(campaign-create-success:::|create::publish:::)"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "create money pools",
                    event_action: F,
                    event_label: "step 6: success",
                    page_path: "/pools/c/create/publish",
                    page_title: "Pool Published",
                    dimension9: "step 6: success",
                    dimension10: "pools"
                }
            }]
        },
        Z = {
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:pools:guest::amount:::",
                    pglk: "main:pools:guest::amount|next"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send money pools",
                    event_action: F,
                    event_label: "step 1: send money",
                    page_path: "/pools/c/send/amount",
                    page_title: "Chip in to a pool",
                    dimension9: "step 1: send money",
                    dimension10: "pools"
                }
            }]
        },
        ee = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:moneynodeweb:.*:amount",
                    sel_fmx_tp: "card"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu001/consi0+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "consumer instant transfer",
                    eventAction: "start",
                    eventLabel: {
                        type: "var",
                        path: "fpti.cust"
                    }
                }
            }]
        },
        ne = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:moneynodeweb:.*:amount:review",
                    sel_fmx_tp: "card"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu001/consi00+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "consumer instant transfer",
                    eventAction: "mid",
                    eventLabel: {
                        type: "var",
                        path: "fpti.cust"
                    }
                }
            }]
        },
        te = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:moneynodeweb:.*:result",
                    sel_fmx_tp: "card"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu001/consi000+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "consumer instant transfer",
                    eventAction: "finish",
                    eventLabel: {
                        type: "var",
                        path: "fpti.cust"
                    }
                }
            }]
        },
        ae = "main:moneynodeweb:money:banks:new|main:walletweb:wallet:add:bankadd",
        re = "main:walletweb:wallet:add:bank",
        oe = "main:moneynodeweb:banks:new:confirmation",
        se = "main:walletweb:wallet::card:addcard|main:moneynodeweb:cards:new:manual",
        ie = "main:walletweb:wallet::card:addcardsuccess|main:moneynodeweb:new:manual:success",
        pe = "personal|premier",
        de = "business",
        ce = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: ae,
                    acnt: pe
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/walle0/consw000+standard"
                }
            }]
        },
        me = [{
            name: a,
            vars: {
                send_to: "DC-6386697/walle0/consu0+standard"
            }
        }],
        le = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: re,
                    goal: "addbank:success",
                    acnt: pe
                }
            },
            vendors: me
        },
        ge = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: oe,
                    acnt: pe
                }
            },
            vendors: me
        },
        _e = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: se,
                    acnt: pe
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/walle0/consw0+standard"
                }
            }]
        },
        ve = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: ie,
                    acnt: pe
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/walle0/consw00+standard"
                }
            }]
        },
        ue = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: ae,
                    acnt: de
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/walle0/merch0+standard"
                }
            }]
        },
        ye = [{
            name: a,
            vars: {
                send_to: "DC-6386697/walle0/merch00+standard"
            }
        }],
        be = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: re,
                    goal: "addbank:success",
                    acnt: de
                }
            },
            vendors: ye
        },
        he = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: oe,
                    acnt: de
                }
            },
            vendors: ye
        },
        fe = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: se,
                    acnt: de
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/walle0/merch000+standard"
                }
            }]
        },
        Ce = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: ie,
                    acnt: de
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/walle0/merch001+standard"
                }
            }]
        },
        we = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:moneynodeweb:banks:new:confirmation"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "account activity",
                    event_action: {
                        type: "var",
                        path: "dataLayer.userType"
                    },
                    event_label: "link bank account"
                }
            }]
        },
        ke = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:walletweb:wallet:add:bank",
                    goal: "addbank:success"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "account activity",
                    event_action: {
                        type: "var",
                        path: "dataLayer.userType"
                    },
                    event_label: "link bank account"
                }
            }]
        },
        De = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:(walletweb:wallet::card:addcardsuccess|moneynodeweb:new:manual:success)"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "account activity",
                    event_action: {
                        type: "var",
                        path: "dataLayer.userType"
                    },
                    event_label: "link card"
                }
            }]
        },
        Te = {
            type: "fn",
            name: "fetchCountry"
        },
        Pe = {
            enable: {
                type: "fn",
                name: "conditionalValue",
                args: ["mx|jp|in|cn|c2", "fetchCountry"]
            },
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:mktg:personal::wamc-thank-you"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/thxwm0+standard"
                }
            }]
        },
        xe = {
            enable: {
                type: "fn",
                name: "conditionalValue",
                args: ["gb|fr|de|it|es|nl|pl|at|ch|be|se|dk|no", "fetchCountry"]
            },
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:mktg:personal:product:money-pools:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/money0+standard"
                }
            }]
        },
        Ae = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:inv3:manage::invoices:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch0/egovc0+standard"
                }
            }]
        },
        Le = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:mktg:business::results:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch0/egovc00+standard"
                }
            }]
        },
        Se = {
            enable: c,
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:mktg:business::mcommerce-index:::",
                    link: "Hero\\|Read now"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/curre0+standard"
                }
            }]
        },
        Me = {
            enable: c,
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:mktg:business::mcommerce-index:::",
                    link: "Master mobile commerce today \\| Read the 2019 Trends Report"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/curre00+standard"
                }
            }]
        },
        Ve = {
            enable: c,
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:mktg:business::mcommerce-index:::",
                    link: "Master mobile commerce today \\| Read the 2018 Annual Report"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/previ0+standard"
                }
            }]
        },
        qe = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:mktg::signup:accountselect:::",
                    link: "personal-account|personal|Personal Account \\| Next"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/apac_0+standard"
                }
            }]
        },
        Ue = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:mktg::signup:(accountselect|account-selection):::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/accou0+standard"
                }
            }]
        },
        Ie = {
            enable: d,
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:mktg::signup:accountselect:::",
                    link: "merchant-account|business|Business Account \\| Next"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/apac_00+standard"
                }
            }]
        },
        ze = {
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    pgrp: "main:mktg:personal::(refunded-)?returns",
                    pglk: "main.*returns.*",
                    lgin: "out"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/freer0+standard"
                }
            }]
        },
        Fe = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:mktg:personal::(refunded-)?returns",
                    pglk: "main(.*personal.*returns.*|.*unifiedlogin.*)",
                    lgin: "in"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/freer00+standard"
                }
            }]
        },
        Ee = {
            trigger: {
                type: n,
                condition: {
                    e: "fs",
                    flnm: "form_submit"
                }
            },
            vendors: [{
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: {
                        type: "var",
                        obj: "data",
                        path: "ec",
                        defaultVal: "marketing form"
                    },
                    eventAction: {
                        type: "var",
                        obj: "data",
                        path: "ea",
                        defaultVal: "submit"
                    },
                    eventLabel: {
                        type: "var",
                        obj: "data",
                        path: "el",
                        defaultVal: "mpp"
                    }
                }
            }]
        },
        je = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:mktg:::page-not-found"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "404 error",
                    event_action: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    event_label: {
                        type: "var",
                        path: "document.referrer",
                        defaultVal: "none"
                    },
                    content_group1: {
                        type: "var",
                        path: "dataLayer.pageType"
                    }
                }
            }]
        },
        Be = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    ccpg: "us",
                    pgrp: "main:mktg:business::partner-program-contact-us"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch000/pp_gb0+standard"
                }
            }]
        },
        Re = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    ccpg: "us",
                    pgrp: "main:mktg:business::partner-program-contactsupport-submission"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch000/pp_gb00+standard"
                }
            }]
        },
        Ne = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    ccpg: "us",
                    pgrp: "main:mktg:::contact-us"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch000/pp_gb000+standard"
                }
            }]
        },
        He = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    ccpg: "us",
                    pgrp: "main:mktg:::contact-us-complete"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch000/pp_gb001+standard"
                }
            }]
        },
        Oe = {
            enable: _,
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    pgrp: "main:mktg::signup:accountselect",
                    link: "Personal"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: Te,
                    event_label: "step 1: account selection"
                }
            }]
        },
        We = {
            enable: _,
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    pgrp: "main:mktg::signup:accountselect",
                    link: "Business"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "merchant sign-up",
                    event_action: Te,
                    event_label: "step 1: account selection"
                }
            }]
        },
        Ge = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:mktg:personal::product-selection"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "merchant sign-up",
                    event_action: Te,
                    event_label: "step 2: product selection",
                    dimension9: "step 2: product selection"
                }
            }]
        },
        Je = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:mktg:personal::offers"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "save offer to wallet",
                    event_action: Te,
                    event_label: {
                        type: "var",
                        path: "fpti.link"
                    }
                }
            }]
        },
        $e = {
            trigger: {
                type: n,
                condition: {
                    e: "cl"
                },
                once: !(e.loadVendorDefault = function(e) {
                    return y[e]
                })
            },
            vendors: [{
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "in-page link tracking",
                    eventAction: {
                        type: "var",
                        obj: "data",
                        path: "link"
                    },
                    eventLabel: {
                        type: "var",
                        obj: "data",
                        path: "lu"
                    }
                }
            }]
        },
        Ke = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:walletweb:summary::main:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/accou0/consu0+standard"
                }
            }]
        },
        Qe = {
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:walletweb:summary::main:::"
                },
                once: !1
            },
            vendors: [{
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "consumer account summary",
                    eventAction: "click",
                    eventLabel: {
                        type: "var",
                        obj: "data",
                        path: "link"
                    }
                }
            }]
        },
        Xe = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:businessweb:mep:dashboard:"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/accou0/merch0+standard"
                }
            }]
        },
        Ye = {
            type: "fn",
            name: "fetchCountry",
            defaultVal: ""
        },
        Ze = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:p2p:(unified:)?send::(email|review|phone):node::|main:consumer:p2p:(transfer:xb:country|gift:start)|main:p2p:transfer:xb:start"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/sendm0+standard",
                    u3: {
                        type: "var",
                        path: "fpti.txn_amt"
                    }
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: ConsumerSendMoneyStart",
                    eventAction: Ye,
                    eventLabel: ""
                }
            }]
        },
        en = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:p2p:unified:(send::done|buy::done):node::|main:p2p:(send|gift)::done:node::"
                }
            },
            vendors: [{
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "415",
                            emea: "425",
                            latam: "597",
                            na: "578"
                        }]
                    },
                    u3: {
                        type: "var",
                        path: "fpti.txn_amt"
                    }
                }
            }, {
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/sendm00+standard",
                    u3: {
                        type: "var",
                        path: "fpti.txn_amt"
                    }
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "Transaction-SndMnyP2PPayFlow-P2PPayFlow",
                    "cd[P2PTransaction]": {
                        type: "var",
                        path: "fpti.curr"
                    },
                    "cd[P2PTPV]": {
                        type: "var",
                        path: "fpti.txn_amt"
                    }
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: ConsumerSendMoneyFin",
                    eventAction: Ye,
                    eventLabel: ""
                }
            }]
        },
        nn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:p2p:request:(multi)?:review:node::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/reqmo0+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: ConsumerReqMoneyStart",
                    eventAction: Ye,
                    eventLabel: ""
                }
            }]
        },
        tn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:p2p:request:(multi)?:done:node::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu00/reqmo00+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: ConsumerReqMoneyFin",
                    eventAction: Ye,
                    eventLabel: ""
                }
            }]
        },
        an = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:p2p:unified:send::done"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send money/pay",
                    event_action: "send",
                    event_label: "send money to friends and family",
                    event_value: {
                        type: "var",
                        path: "fpti.txn_amt"
                    },
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    }
                }
            }]
        },
        rn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:p2p:send::done",
                    pp_flow: "xb"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send money/pay",
                    event_action: "send",
                    event_label: "send to friends and family internationally",
                    event_value: {
                        type: "var",
                        path: "fpti.txn_amt"
                    },
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    }
                }
            }]
        },
        on = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:p2p:gift::done"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send gift",
                    event_action: "send",
                    event_label: "send a gift",
                    event_value: {
                        type: "var",
                        path: "fpti.txn_amt"
                    },
                    dimension11: {
                        type: "var",
                        path: "fpti.sndcur"
                    },
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    }
                }
            }]
        },
        sn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:p2p:request::done"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "request money",
                    event_action: "request",
                    event_label: "request",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    }
                }
            }]
        },
        pn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:p2p:unified:buy::done"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "send money/pay",
                    event_action: "pay",
                    event_label: "pay for goods or services",
                    event_value: {
                        type: "var",
                        path: "fpti.txn_amt"
                    },
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    }
                }
            }]
        },
        dn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:falconnode::(upgradeBusinessAccount|businessInfo|businessTypeSelection|upgradeDecision|upgradeBusinessTypeSelection)"
                },
                session: {
                    key: "persupg",
                    type: "start"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch0/acctu0+standard"
                }
            }]
        },
        cn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:business:activation:businessSetup|main:activation:commercesetupnodeweb"
                },
                session: {
                    key: "persupg",
                    type: "end"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch0/acctu00+standard"
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "421",
                            emea: "431",
                            latam: "603",
                            na: "584"
                        }]
                    }
                }
            }]
        },
        mn = {
            trigger: {
                type: "fn",
                name: "handleClick",
                sel: "#personalInfoContinue, #personalInfoSubmitButton",
                session: {
                    key: "persupg",
                    type: "end"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/mppmz0/test_0+standard"
                }
            }]
        },
        ln = {
            type: "fn",
            name: "fetchCountry",
            defaultVal: ""
        },
        gn = {
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:ppme:create:welcome:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/gener0/paypa0+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PayPalMeSUStart",
                    eventAction: ln,
                    eventLabel: ""
                }
            }]
        },
        _n = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:ppme:create:done:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/gener0/paypa00+standard"
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ProductSignup-PayPalMeSUFin-PayPalMe"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PayPalMeSUFin",
                    eventAction: ln,
                    eventLabel: ""
                }
            }]
        },
        vn = {
            type: n,
            condition: {
                e: "im",
                page: "main:onbrd:organic:signup:account:::"
            }
        },
        un = {
            type: n,
            condition: {
                e: "im",
                page: "main:onbrd:organic:wallet:selectIntent:::|consonbdnodeweb/.*/signup/usePayPal.dust"
            }
        },
        yn = {
            type: "fn",
            name: "fetchCountry",
            defaultVal: ""
        },
        bn = {
            trigger: vn,
            vendors: [{
                name: a,
                enable: l,
                vars: {
                    send_to: "DC-6386697/consu0/persa0+standard"
                }
            }, {
                name: "google",
                enable: l,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PersAcctSUStart",
                    eventAction: yn,
                    eventLabel: ""
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: yn,
                    event_label: "step 2: account credentials",
                    page_path: "/welcome/signup/email_password",
                    page_title: "Create Email and Password",
                    dimension9: "step 2: account credentials",
                    dimension10: {
                        type: "var",
                        path: "dataLayer.application"
                    }
                }
            }]
        },
        hn = {
            trigger: un,
            vendors: [{
                name: a,
                enable: l,
                vars: {
                    send_to: "DC-6386697/consu0/persa00+standard"
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "416",
                            emea: "426",
                            latam: "598",
                            na: "579"
                        }]
                    }
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ConsumerSignup"
                }
            }, {
                name: "google",
                enable: l,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PersAcctSUFin",
                    eventAction: yn,
                    eventLabel: ""
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: yn,
                    event_label: "step 4: success",
                    page_path: "/welcome/signup/intent_selection",
                    page_title: "Select Intent",
                    dimension9: "step 4: success",
                    dimension10: {
                        type: "var",
                        path: "dataLayer.application"
                    },
                    dimension46: "true"
                }
            }]
        },
        fn = "Edison consumer sign up",
        Cn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:consumeronboarding:::signup",
                    tsrce: "Edison"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu0/pp_gb0+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: fn,
                    eventAction: "signup start",
                    eventLabel: {
                        type: "fn",
                        name: "fetchCountry"
                    }
                }
            }]
        },
        wn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:consumeronboarding:::wallet-fi-display",
                    tsrce: "Edison"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu0/pp_gb00+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: fn,
                    eventAction: "signup complete",
                    eventLabel: {
                        type: "fn",
                        name: "fetchCountry"
                    }
                }
            }]
        },
        kn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:unifiedlogin:::login",
                    tsrce: "conspartneronbnodeweb"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu0/pp_gb000+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: fn,
                    eventAction: "consent",
                    eventLabel: {
                        type: "fn",
                        name: "fetchCountry"
                    }
                }
            }]
        },
        Dn = {
            trigger: vn,
            vendors: [{
                name: a,
                enable: g,
                vars: {
                    send_to: "DC-6386697/consu0/premi0+standard"
                }
            }, {
                name: "google",
                enable: g,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PremierAcctSUStart",
                    eventAction: yn,
                    eventLabel: ""
                }
            }]
        },
        Tn = {
            trigger: un,
            vendors: [{
                name: a,
                enable: g,
                vars: {
                    send_to: "DC-6386697/consu0/premi00+standard"
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "442",
                            emea: "441",
                            latam: "613",
                            na: "612"
                        }]
                    }
                }
            }, {
                name: "google",
                enable: g,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PremierAcctSUFin",
                    eventAction: yn,
                    eventLabel: ""
                }
            }]
        },
        Pn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:onbrd:organic:signup:account:::",
                    pglk: "main:mktg:Customer::account-selection\\|HPHero-cta-Continuar com CPF"
                },
                session: {
                    key: "sbsu",
                    type: "start"
                }
            },
            vendors: [{
                name: a,
                enable: v,
                vars: {
                    send_to: "DC-6386697/merch0/sbsus0+standard"
                }
            }, {
                name: "google",
                enable: v,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: SBSUStart",
                    eventAction: yn,
                    eventLabel: ""
                }
            }]
        },
        xn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:onbrd:organic:wallet:selectIntent:::"
                },
                session: {
                    key: "sbsu",
                    type: "end"
                }
            },
            vendors: [{
                name: a,
                enable: v,
                vars: {
                    send_to: "DC-6386697/merch0/sbsuf0+standard"
                }
            }, {
                name: "visualiq",
                enable: v,
                vars: {
                    ao: "839",
                    px: "634"
                }
            }, {
                name: "google",
                enable: v,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: SBSUFin",
                    eventAction: yn,
                    eventLabel: ""
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: yn,
                    event_label: "step 4: success",
                    page_path: "/welcome/signup/intent_selection",
                    page_title: "Select Intent",
                    dimension9: "step 4: success",
                    dimension10: {
                        type: "var",
                        path: "dataLayer.application"
                    },
                    dimension46: "true"
                }
            }]
        },
        An = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:falconnode::checkAccount",
                    prod: "pro_2_0"
                }
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/merch00/merch001+standard"
                }
            }]
        },
        Ln = {
            trigger: {
                type: "fn",
                name: "matchPgTxt",
                sel: ".statusHeader",
                text: "success"
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/merch00/merch0+standard"
                }
            }]
        },
        Sn = {
            trigger: {
                type: "fn",
                name: "matchPgTxt",
                sel: ".statusHeader",
                text: "review"
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/merch00/merch00+standard"
                }
            }]
        },
        Mn = {
            trigger: {
                type: "fn",
                name: "matchPgTxt",
                sel: ".statusHeader",
                text: "decline"
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/merch00/merch000+standard"
                }
            }]
        },
        Vn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:falconnode::create"
                },
                session: {
                    key: "mercsu",
                    type: "start"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch0/bizac0+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: MerchantSUStart",
                    eventAction: yn,
                    eventLabel: ""
                }
            }]
        },
        qn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:business:activation:businessSetup|(main:onbrd:falconnode::((congrats(default|partner)?|done)))|main:activation:commercesetupnodeweb"
                },
                session: {
                    key: "mercsu",
                    type: "end"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch0/bizac00+standard"
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "420",
                            emea: "430",
                            latam: "602",
                            na: "583"
                        }]
                    }
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "MerchantSignup"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: MerchantSUFin",
                    eventAction: yn,
                    eventLabel: ""
                }
            }]
        },
        Un = {
            trigger: {
                type: "fn",
                name: "handleClick",
                sel: "#personalInfoContinue, #personalInfoSubmitButton",
                session: {
                    key: "mercsu",
                    type: "end"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/test0/latm_002+standard"
                }
            }]
        },
        In = {
            enable: p,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:falconnode::create"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch0/pplus0+standard"
                }
            }]
        },
        zn = {
            enable: p,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:falconnode::congratsdefault"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch0/pplus00+standard"
                }
            }]
        },
        Fn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:organic:signup:(create|addresslookup)"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: yn,
                    event_label: "step 3: personal details",
                    page_path: "/welcome/signup/name_address",
                    page_title: "Enter Personal Info",
                    dimension9: "step 3: personal details",
                    dimension10: {
                        type: "var",
                        path: "dataLayer.application"
                    }
                }
            }]
        },
        En = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:organic:wallet:addcard"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: yn,
                    event_label: "step 5: add card",
                    page_path: "/welcome/signup/add_card",
                    page_title: "Add Card",
                    dimension9: "step 5: add card",
                    dimension10: {
                        type: "var",
                        path: "dataLayer.application"
                    }
                }
            }]
        },
        jn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:organic:wallet:addbank"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: yn,
                    event_label: "step 6: add bank",
                    page_path: "/welcome/signup/add_bank",
                    page_title: "Add Bank",
                    dimension9: "step 6: add bank",
                    dimension10: {
                        type: "var",
                        path: "dataLayer.application"
                    }
                }
            }]
        },
        Bn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:organic:bgc:buyselltransfer"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: yn,
                    event_label: "step 7: activation",
                    page_path: "/welcome/signup/activation",
                    page_title: "Sign Up Complete",
                    dimension8: "active",
                    dimension9: "step 7: activation",
                    dimension10: {
                        type: "var",
                        path: "dataLayer.application"
                    }
                }
            }]
        },
        Rn = {
            type: "var",
            path: ["ensighten.buyerId", "buyerId", "fpti.cust"]
        },
        Nn = {
            type: "fn",
            name: "fetchCountry",
            defaultVal: ""
        },
        Hn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:billinginfopage:::::"
                }
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/consu002/ppcre0+standard",
                    u1: Rn
                }
            }, {
                name: "google",
                enable: i,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPCreditAppStart",
                    eventAction: Nn,
                    eventLabel: ""
                }
            }, {
                name: t,
                enable: i,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 1: billing info",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Confirm Billing Info"
                }
            }]
        },
        On = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:newcust:::::"
                },
                session: {
                    key: "psucredit",
                    type: "start"
                }
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/consu002/ppcre0+standard",
                    u1: Rn
                }
            }, {
                name: "google",
                enable: i,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPCreditAppStart",
                    eventAction: Nn,
                    eventLabel: ""
                }
            }]
        },
        Wn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:decisionpage:APPROVED::::"
                }
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/consu002/ppcre00+standard",
                    u1: Rn
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "422",
                            emea: "432",
                            latam: "604",
                            na: "585"
                        }]
                    },
                    u1: Rn
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ProductSignup-CreditApproved-PayPalCreditApply"
                }
            }, {
                name: "google",
                enable: i,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPCreditAppFinApproved",
                    eventAction: Nn,
                    eventLabel: ""
                }
            }, {
                name: t,
                enable: i,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 4: decision",
                    event_label: "approved",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Decision Page"
                }
            }]
        },
        Gn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:decisionpage:DECLINED::::"
                }
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/consu002/ppcre000+standard",
                    u1: Rn
                }
            }, {
                name: "google",
                enable: i,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPCreditAppFinDeclined",
                    eventAction: Nn,
                    eventLabel: ""
                }
            }, {
                name: t,
                enable: i,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 4: decision",
                    event_label: "declined",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Decision Page"
                }
            }]
        },
        Jn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:decisionpage:APPROVED::::"
                },
                session: {
                    key: "psucredit",
                    type: "end"
                }
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/consu0/persa00+standard"
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "416",
                            emea: "426",
                            latam: "598",
                            na: "579"
                        }]
                    },
                    u1: Rn
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ConsumerSignup"
                }
            }, {
                name: "google",
                enable: i,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PersAcctSUFin",
                    eventAction: Nn,
                    eventLabel: ""
                }
            }, {
                name: t,
                enable: i,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 4: decision",
                    event_label: "approved",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Decision Page"
                }
            }]
        },
        $n = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:decisionpage:DECLINED::::"
                },
                session: {
                    key: "psucredit",
                    type: "end"
                }
            },
            vendors: [{
                name: a,
                enable: i,
                vars: {
                    send_to: "DC-6386697/consu0/persa00+standard"
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: s,
                    px: {
                        type: "fn",
                        name: "conditionalValue",
                        args: [o, "fetchCountry", {
                            apac: "416",
                            emea: "426",
                            latam: "598",
                            na: "579"
                        }]
                    },
                    u1: Rn
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ConsumerSignup"
                }
            }, {
                name: "google",
                enable: i,
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PersAcctSUFin",
                    eventAction: Nn,
                    eventLabel: ""
                }
            }, {
                name: t,
                enable: i,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 4: decision",
                    event_label: "declined",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Decision Page"
                }
            }]
        },
        Kn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:mktg:personal::paypal-virtual-credit",
                    ccpg: "gb"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu002/ppcre001+standard",
                    u1: Rn
                }
            }]
        },
        Qn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:creditapplyweb:(applypage:::::|newcust:::::)",
                    ccpg: "gb"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu002/ppcre002+standard",
                    u1: Rn
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 1: billing info",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Confirm Billing Info"
                }
            }]
        },
        Xn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:contractpage:CONSUMERCREDIT::::",
                    ccpg: "gb"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu003/ppcre00+standard",
                    u1: Rn
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ProductSignup-CreditApproved-PayPalCreditApply"
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 3: terms and conditions",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Review Terms and Conditions"
                }
            }]
        },
        Yn = {
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:creditapplyweb:contractpage:CONSUMERCREDIT::::",
                    link: "creditContractAgreeToTermsGB",
                    ccpg: "gb"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu002/ppcre003+standard",
                    u1: Rn
                }
            }, {
                name: "visualiq",
                enable: u,
                vars: {
                    ao: "875",
                    px: "440"
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 4: decision",
                    event_label: "approved",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Decision Page"
                }
            }]
        },
        Zn = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:decisionpage:DECLINED::::",
                    ccpg: "gb"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu002/ppcre004+standard",
                    u1: Rn
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 4: decision",
                    event_label: "declined",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Decision Page"
                }
            }]
        },
        et = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:personalinfopage:::::"
                }
            },
            vendors: [{
                name: t,
                enable: i,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 2: personal info",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Enter Personal Info"
                }
            }]
        },
        nt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:creditapplyweb:termspage:::::"
                }
            },
            vendors: [{
                name: t,
                enable: i,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "consumer credit",
                    event_action: "step 3: terms and conditions",
                    page_path: {
                        type: "fn",
                        name: "constructUrl"
                    },
                    page_title: "Review Terms and Conditions"
                }
            }]
        },
        tt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:debitcardweb:debitcard:.*:createCard:primaryCard:entered"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/merch003+standard"
                }
            }]
        },
        at = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:debitcardweb:debitcard:.*:createCard:primaryCard:success"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/merch004+standard"
                }
            }]
        },
        rt = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:bankingbundle:(upgrade:(wocip:confirmshipaddr|wcip:confirmbilladdr):::|signupupgrade::confirmshipaddr:::)",
                    product_type: "BUNDLE"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa0+standard"
                }
            }]
        },
        ot = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:bankingbundle:(upgrade:wocip|upgrade:wcip|signupupgrade:):upgradesuccess:::",
                    product_type: "BUNDLE"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa00+standard"
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ProductSignup-PayPalMeSUFin-PayPalMe"
                }
            }]
        },
        st = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:bankingbundle:activatecard::(activatecardform|entrycardarrived):::",
                    product_type: "BUNDLE"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa000+standard"
                }
            }]
        },
        it = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:bankingbundle:activatecard::(createpinsuccess|activatesuccess):::",
                    product_type: "BUNDLE"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa001+standard"
                }
            }]
        },
        pt = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:bankingbundle:(upgrade:(wocip:confirmshipaddr|wcip:confirmbilladdr):::|signupupgrade::confirmshipaddr:::)",
                    product_type: "BUNDLE_LITE"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa006+standard"
                }
            }]
        },
        dt = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:bankingbundle:(upgrade:wocip|upgrade:wcip|signupupgrade:):upgradesuccess:::",
                    product_type: "BUNDLE_LITE"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa007+standard"
                }
            }]
        },
        ct = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:bankingbundle:activatecard::(activatecardform|entrycardarrived):::",
                    product_type: "BUNDLE_LITE"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa004+standard"
                }
            }]
        },
        mt = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:bankingbundle:activatecard::(createpinsuccess|activatesuccess):::",
                    product_type: "BUNDLE_LITE"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa005+standard"
                }
            }]
        },
        lt = {
            enable: i,
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    link: "print"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/paypa002+standard"
                }
            }]
        },
        gt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:falconnode::approval",
                    prod: "pph"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/pphsu0+standard"
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ProductSignup-PPHSuccess-MobileMerchant"
                }
            }]
        },
        _t = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:falconnode::denied",
                    prod: "pph"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/pphde0+standard"
                }
            }]
        },
        vt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:onbrd:falconnode::review",
                    prod: "pph"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/pphre0+standard"
                }
            }]
        },
        ut = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:businessweb:muse::tag-creation(::CreateTag|-mini::AgreeContinue)"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/musei0+standard"
                }
            }]
        },
        yt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:businessweb:muse::tag.*Settings",
                    pglk: "main:businessweb:muse::tag-creation.*"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/musei00+standard"
                }
            }]
        },
        bt = {
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    pglk: "main:mktg:personal.*one-touch-checkout.*One.*Touch.*"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/oneto0+standard"
                }
            }]
        },
        ht = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:mktg:personal:buy:one-touch-checkout:::",
                    pglk: "main:unifiedlogin:::login|unifiedlogin-login-submit",
                    lgin: "in"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/consu000/oneto00+standard"
                }
            }]
        },
        ft = {
            trigger: {
                type: "fn",
                name: "handleClick",
                sel: "#\\/appData\\/action",
                suppl: {
                    checked: "true",
                    sel: ["#paypalAccountData_oneTouchCheckbox"]
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "onetouch payments",
                    event_action: "consumer sign up"
                }
            }]
        },
        Ct = {
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    page: "main:inv3:manage::invoices:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/invoi0+standard"
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "merchant invoicing",
                    event_action: "create"
                }
            }]
        },
        wt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:inv3:manage:msg:(invsent|scheduled|invshared):::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch00/invoi00+standard"
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ProductSignup-InvoiceFin-Invoice"
                }
            }, {
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "merchant invoicing",
                    event_action: "send"
                }
            }]
        },
        kt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:consumer:gifts:home:"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/gener0/ppdgl0+standard"
                }
            }]
        },
        Dt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pgrp: "main:consumer:gifts:cart:"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/gener0/ppdgs0+standard"
                }
            }]
        },
        Tt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:consumer:gifts:cart:success:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/gener0/ppdge0+standard"
                }
            }]
        },
        Pt = {
            type: "fn",
            name: "fetchCountry",
            defaultVal: ""
        },
        xt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    page: "main:ppwc:::homepage:::"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch001/ppwcl0+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPWCLanding",
                    eventAction: Pt,
                    eventLabel: ""
                }
            }]
        },
        At = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    qual: "businessInfoView"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch001/ppwca0+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPWCAppStart",
                    eventAction: Pt,
                    eventLabel: ""
                }
            }]
        },
        Lt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    qual: "offerInfoView"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch001/ppwca002+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPWCAppApproved",
                    eventAction: Pt,
                    eventLabel: ""
                }
            }]
        },
        St = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    qual: "decision.*"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch001/ppwca001+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPWCAppDeclined",
                    eventAction: Pt,
                    eventLabel: ""
                }
            }]
        },
        Mt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    qual: "eligibility.*"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch001/ppwca000+standard"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPWCAppIneligible",
                    eventAction: Pt,
                    eventLabel: ""
                }
            }]
        },
        Vt = {
            trigger: {
                type: n,
                condition: {
                    e: "im",
                    pglk: "workingcapitalnodeweb.*complete.*"
                }
            },
            vendors: [{
                name: a,
                vars: {
                    send_to: "DC-6386697/merch001/ppwca00+standard"
                }
            }, {
                name: r,
                enable: m,
                vars: {
                    ev: "ProductSignup-PPWCLoanFunded-PayPalWorkingCapital"
                }
            }, {
                name: "google",
                vars: {
                    hitType: "event",
                    eventCategory: "DCM: PPWCAppFinLoanFunded",
                    eventAction: Pt,
                    eventLabel: ""
                }
            }]
        },
        qt = {
            trigger: {
                type: "generic"
            },
            vendors: [{
                name: r,
                enable: m,
                vars: {
                    ev: "ViewContent"
                }
            }]
        },
        Ut = {
            trigger: {
                type: n,
                condition: {
                    e: "cl",
                    pgrp: "main:cause:fundraiser:hub:(landing|charity)"
                }
            },
            vendors: [{
                name: t,
                vars: {
                    send_to: "default",
                    hitType: "event",
                    event_category: "donate to charity",
                    event_action: "donate",
                    event_value: {
                        type: "var",
                        path: "fpti.amt"
                    }
                }
            }]
        },
        It = {
            activationnodeweb: ["pers_acc_upg_fin", "merc_acc_su_end"],
            bankingbundlenodeweb: ["ccfullreq_start", "ccfullreq_end", "ccfullact_start", "ccfullact_end", "cclitereq_start", "cclitereq_end", "ccliteact_start", "ccliteact_end", "ccdd_setup"],
            bizsignupnodeweb: ["pers_acc_upg_start", "pro_su_start", "pro_su_end_app", "pro_su_end_rev", "pro_su_end_dec", "merc_acc_su_start", "merc_acc_su_end", "merc_acc_su_end_final", "pph_success", "pph_decline", "pph_review", "pers_acc_upg_fin_final"],
            bizwalletnodeweb: ["oct_flow_start", "oct_flow_end"],
            checkoutuinodeweb: ["xo_start", "xo_end", "guest_xo_su_start", "guest_xo_su_end"],
            consonbdnodeweb: ["pers_acc_su_fin"],
            creditapplyweb: ["credit_app_start", "credit_app_succ", "credit_app_decl", "credit_psu_start", "start_uk", "appr_uk", "succ_end_uk", "dec_end_uk", "credit_app_per_info", "credit_app_terms"],
            debitcardnodeweb: ["bizdebit_start", "bizdebit_aprv"],
            financeportalnodeweb: ["fp_ln_click"],
            hermesnodeweb: ["xo_start", "xo_end", "pad_start", "pad_end", "pad_ps"],
            invoicingnodeweb: ["inv_start", "inv_end"],
            mepnodeweb: ["merc_acc_summ"],
            merchmoneynodeweb: ["mer_itx_start", "mer_itx_end"],
            merchantsignupnodeweb: ["merc_acc_su_start", "merc_acc_su_end", "merc_acc_su_end_final", "pers_acc_upg_start", "pplus_start", "pplus_fin", "pers_acc_upg_fin_final"],
            moneynodeweb: ["cons_ixfer_start", "cons_ixfer_mid", "cons_ixfer_end", "cons_add_bank_start", "cons_add_bank_end_v2", "cons_add_card_start", "cons_add_card_end", "mer_add_bank_start", "mer_add_bank_end_v2", "mer_add_card_start", "mer_add_card_end", "link_bank_cons", "link_bank_mer", "link_card"],
            mppnodeweb: ["mpp_thankyou", "mpp_mp_start", "land_uk", "ot_start", "ot_end", "egov_start", "egov_end", "mpp_form_submit", "rd_curr_top", "rd_curr", "rd_prev", "con_sel", "mer_sel", "shp_su_start", "shp_su_end", "mpp_404", "acc_sel", "pp_partner_cnt_start", "pp_partner_cnt_finish", "pp_merchant_cnt_start", "pp_merchant_cnt_finish", "ot_sign_up", "con_sel_click", "mer_sel_click", "prod_sel_pageview", "mpp_offer"],
            p2pnodeweb: ["send_mon_start", "send_mon_fin", "req_mon_start", "req_mon_fin", "psp_send_mon", "psp_send_mon_int", "psp_send_gift", "psp_req_mon", "psp_buy", "donate_cause"],
            poolsnodeweb: ["mp_start", "mp_end", "mp_send_start", "mp_send_end", "mp_wdl_start", "mp_wdl_end", "mp_send_amt_ga", "mp_send_note_ga", "mp_send_review_ga", "mp_create_pref_ga", "mp_create_desc_ga", "mp_create_prev_ga", "mp_create_prepub_ga", "mp_create_pub_ga", "chipIn_send_guest", "chipIn_end_guest"],
            ppdgnodeweb: ["ppdg_land", "ppdg_txn_start", "ppdg_txn_end"],
            ppme: ["ppme_start", "ppme_end"],
            progressivenodeweb: ["pers_acc_su_fin", "pers_acc_su_start", "premi_acc_su_start", "premi_acc_su_end", "sb_su_start", "sb_su_end", "psu_credit_succ", "psu_credit_decl", "tesla_su_create", "tesla_su_addcard", "tesla_su_addbank", "tesla_su_buy"],
            conspartneronbnodeweb: ["acc_su_start_edison", "acc_su_fi_edison"],
            unifiedloginnodeweb: ["acc_su_consent_edison"],
            summarynodeweb: ["cons_acc_summ", "cons_summ_cl"],
            tagmanagernodeweb: ["muse_start", "muse_end"],
            walletexpnodeweb: ["cons_acc_summ", "cons_summ_cl", "cons_add_bank_start", "cons_add_bank_end_v1", "cons_add_card_start", "cons_add_card_end", "mer_add_bank_start", "mer_add_bank_end_v1", "mer_add_card_start", "mer_add_card_end", "link_card"],
            workingcapitalnodeweb: ["landing", "start", "approved", "declined", "ineligible", "funded"],
            xoonboardingnodeweb: ["xo_start", "xo_end", "guest_xo_end", "guest_xo_su_start", "guest_xo_su_end"],
            __mi_generic: ["gen_fb"]
        };
    e.loadTags = function(e) {
        var n = It[e];
        if (e && n) return n.concat(It.__mi_generic)
    }, e.loadJs = function(e) {
        return {
            mppnodeweb: ["mpp"]
        }[e]
    };
    var zt = {
        cons_acc_summ: Ke,
        cons_ixfer_end: te,
        cons_ixfer_mid: ne,
        cons_ixfer_start: ee,
        credit_app_decl: Gn,
        credit_app_start: Hn,
        credit_app_succ: Wn,
        fp_ln_click: $e,
        merc_acc_summ: Xe,
        merc_acc_su_end: qn,
        merc_acc_su_end_final: Un,
        merc_acc_su_start: Vn,
        mp_end: j,
        mp_send_end: R,
        mp_send_start: B,
        mp_start: E,
        mp_wdl_end: O,
        mp_wdl_start: H,
        mpp_mp_start: xe,
        mpp_thankyou: Pe,
        mpp_404: je,
        oct_flow_end: U,
        oct_flow_start: q,
        pers_acc_su_fin: hn,
        pers_acc_su_start: bn,
        pers_acc_upg_fin: cn,
        pers_acc_upg_start: dn,
        ppme_start: gn,
        ppme_end: _n,
        premi_acc_su_start: Dn,
        premi_acc_su_end: Tn,
        req_mon_fin: tn,
        req_mon_start: nn,
        send_mon_fin: en,
        send_mon_start: Ze,
        xo_end: D,
        xo_start: k,
        guest_xo_su_start: T,
        guest_xo_su_end: x,
        sb_su_start: Pn,
        sb_su_end: xn,
        pro_su_start: An,
        pro_su_end_app: Ln,
        pro_su_end_rev: Sn,
        pro_su_end_dec: Mn,
        guest_xo_end: P,
        cons_summ_cl: Qe,
        mer_itx_start: I,
        mer_itx_end: z,
        cons_add_bank_start: ce,
        cons_add_bank_end_v1: le,
        cons_add_bank_end_v2: ge,
        mer_add_bank_start: ue,
        cons_add_card_start: _e,
        cons_add_card_end: ve,
        mer_add_bank_end_v1: be,
        mer_add_bank_end_v2: he,
        mer_add_card_start: fe,
        mer_add_card_end: Ce,
        bizdebit_start: tt,
        bizdebit_aprv: at,
        ccfullreq_start: rt,
        ccfullreq_end: ot,
        ccfullact_start: st,
        ccfullact_end: it,
        cclitereq_start: pt,
        cclitereq_end: dt,
        ccliteact_start: ct,
        ccliteact_end: mt,
        ccdd_setup: lt,
        pph_success: gt,
        pph_decline: _t,
        pph_review: vt,
        land_uk: Kn,
        start_uk: Qn,
        appr_uk: Xn,
        succ_end_uk: Yn,
        dec_end_uk: Zn,
        muse_start: ut,
        muse_end: yt,
        ot_start: bt,
        ot_end: ht,
        inv_start: Ct,
        inv_end: wt,
        egov_start: Ae,
        egov_end: Le,
        pad_start: A,
        pad_end: L,
        pad_ps: S,
        mpp_form_submit: Ee,
        rd_curr_top: Se,
        rd_curr: Me,
        rd_prev: Ve,
        con_sel: qe,
        mer_sel: Ie,
        shp_su_start: ze,
        shp_su_end: Fe,
        psu_credit_succ: Jn,
        psu_credit_decl: $n,
        credit_psu_start: On,
        ppdg_land: kt,
        ppdg_txn_start: Dt,
        ppdg_txn_end: Tt,
        pplus_start: In,
        pplus_fin: zn,
        landing: xt,
        start: At,
        approved: Lt,
        declined: St,
        ineligible: Mt,
        funded: Vt,
        acc_sel: Ue,
        gen_fb: qt,
        pp_partner_cnt_start: Be,
        pp_partner_cnt_finish: Re,
        pp_merchant_cnt_start: Ne,
        pp_merchant_cnt_finish: He,
        ot_sign_up: ft,
        psp_send_mon: an,
        psp_send_mon_int: rn,
        psp_send_gift: on,
        psp_req_mon: sn,
        psp_buy: pn,
        con_sel_click: Oe,
        mer_sel_click: We,
        prod_sel_pageview: Ge,
        mpp_offer: Je,
        link_bank_cons: we,
        link_bank_mer: ke,
        link_card: De,
        credit_app_per_info: et,
        credit_app_terms: nt,
        mp_send_amt_ga: W,
        mp_send_note_ga: G,
        mp_send_review_ga: J,
        mp_create_pref_ga: $,
        mp_create_desc_ga: K,
        mp_create_prev_ga: Q,
        mp_create_prepub_ga: X,
        mp_create_pub_ga: Y,
        chipIn_send_guest: Z,
        chipIn_end_guest: N,
        donate_cause: Ut,
        tesla_su_create: Fn,
        tesla_su_addcard: En,
        tesla_su_addbank: jn,
        tesla_su_buy: Bn,
        pers_acc_upg_fin_final: mn,
        acc_su_consent_edison: kn,
        acc_su_fi_edison: wn,
        acc_su_start_edison: Cn
    };
    e.loadTagConfig = function(e) {
        return zt[e]
    }
}(); >>>
>>> > 435 ad39f6c4ddf82e58010244c18fadd55b7ab6e