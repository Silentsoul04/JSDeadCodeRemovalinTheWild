/* CLIENTCONFIG build v1.0.22*/
! function(n, e) {
    "use strict";
    var t = "1.0.22",
        o = "NOLBUNDLE",
        a = 0,
        r = {
            paramPrefix: "",
            maxRetries: 5
        },
        s = {
            defaultNSDKV: 600,
            defaultSfcode: "sdk",
            subdomain: "cdn-gl",
            domain: "imrworldwide.com",
            protocol: 0 === n.location.protocol.indexOf("http:") ? "http:" : "https:",
            sdkUrl: "{{protocol}}//{{subdomain}}.{{domain}}/novms/js/{{sdksubpath}}/nlsSDK{{nsdkv}}.bundle.min.js"
        },
        i = {
            eu: "600.eu",
            "eu-cert": "600.eu",
            "eu-uat": "600.eu"
        },
        l = {
            parseNOLParams: function(n) {
                var e = n.replace(/^[^\#]+\#?/, ""),
                    t = {};
                if (!e) return t;
                var o = new RegExp("&" + r.paramPrefix, "gi"),
                    a = "<<nol_delimeter>>",
                    s = a + r.paramPrefix;
                e = e.replace(o, s);
                for (var i = e.split(a), l = null, c = 0; c < i.length; c++) {
                    l = i[c].indexOf("=");
                    var u = unescape(i[c].substr(0, l)),
                        d = unescape(i[c].substr(l + 1));
                    d = d.replace(/\+/g, " "), t[u.replace(r.paramPrefix, "")] = d
                }
                return t
            },
            findScript: function(n) {
                if (document.currentScript) return document.currentScript.src;
                console && console.log && (console.log("Config", new Date), console.log("Config", new Date));
                var e = document.getElementsByTagName("script"),
                    t = [];
                if (e)
                    for (var o = null, a = "", r = null, s = new RegExp(n + ".*?.js"), i = 0; i < e.length; i++) r = e[i], a = r && r.attributes && r.attributes.src ? r.attributes.src.value : "", (o = a.match(s)) && t.push(a);
                return t
            },
            loadScript: function(e, t, o) {
                function a(e, t, o) {
                    var a = n.document.createElement("script");
                    a.async = !0, a.setAttribute("data-jsonpid", name), a.src = e, a.onload = t, a.onerror = o;
                    var r = n.document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(a, r)
                }

                function s(n) {
                    i < r.maxRetries ? (i++, setTimeout(function() {
                        console && console.warn && console.warn("Retry request # " + i), a(e, t, s)
                    }, 2e3)) : (console && console.error && console.error("Unable to load script " + e), o && o())
                }
                var i = 0;
                a(e, t, s)
            },
            setTesting: function(n) {
                return n && n.enableTesting && e && e.nol_GLOBALS && s ? ("true" === n.enableTesting && "true" === e.nol_GLOBALS.nol_allowTesting && (n.sfcode = "cert", s.subdomain = "futuremaster.nonprod", s.domain = "digitalengsdk.com"), n) : n
            },
            getGlobalsField: function(e, t, o) {
                if (t && o && n[e] && n[e].configs) {
                    var a = n[e].configs[t];
                    if (a && a.nol_GLOBALS) return a.nol_GLOBALS[o]
                }
                return null
            },
            getDefaultField: function(e, t, o) {
                if (t && o && n[e] && n[e].configs) {
                    var a = n[e].configs[t];
                    if (a && a.nol_GLOBALS && a.nol_GLOBALS.nol_tagMap && a.nol_GLOBALS.nol_tagMap.nol_defaults) return a.nol_GLOBALS.nol_tagMap.nol_defaults[o]
                }
                return null
            }
        },
        c = {
            setNamespace: function(e) {
                return n[e] = n[e] || {
                    nlsQ: function(t, o, a, r, s, i) {
                        return s = w.document, r = s.createElement("script"), r.async = 1, r.src = ("http:" === n.location.protocol ? "http:" : "https:") + "//cdn-gl.imrworldwide.com/conf/" + t + ".js#name=" + o + "&ns=" + e, i = s.getElementsByTagName("script")[0], i.parentNode.insertBefore(r, i), w[o] = w[o] || {
                            g: a,
                            ggPM: function(n, e, t, a, r) {
                                (w[o].q = w[o].q || []).push([n, e, t, a, r])
                            }
                        }, w[o]
                    }
                }
            },
            setConfig: function(n, e, t) {
                t.configs = t.configs || {}, t.configs[n] = t.configs[n] || e
            }
        },
        u = {
            getInstanceGlobals: function(e, t, o) {
                var a = {
                        apid: t,
                        sfcode: l.getDefaultField("nol_sfcode") || s.defaultSfcode,
                        nsdkv: s.defaultNSDKV
                    },
                    r = n[e][o.name] || n[o.name],
                    c = r ? r.g : {};
                if (c)
                    for (var u = Object.keys(c), d = 0; d < u.length; d++) void 0 !== c[u[d]] && null !== c[u[d]] && "" !== c[u[d]] && (a[u[d]] = c[u[d]]);
                a.sfcode = l.getGlobalsField(e, t, "nol_sfcode") || a.sfcode, a.nsdkv = l.getGlobalsField(e, t, "nol_nsdkvConfig") || l.getGlobalsField(e, t, "nol_nsdkv") || i[a.sfcode] || a.nsdkv, a = l.setTesting(a);
                var f = l.getGlobalsField(e, t, "nol_sdkDebug");
                return f && (a.nol_sdkDebug = f), a
            },
            isSDKReady: function(e) {
                var t = n[e];
                return t && t.hasOwnProperty("isBuilt") && "function" == typeof t.isBuilt && t.isBuilt()
            },
            loadSDK: function(e, t, o, a) {
                try {
                    var r = u.getInstanceGlobals(a, t, o),
                        i = function() {
                            try {
                                if (e && o && o.name) {
                                    var t = n[a].getInstance(o.name, !0);
                                    t && !t.initialized && t.ggInitialize(r)
                                }
                            } catch (n) {}
                        };
                    if (u.isSDKReady(a)) i();
                    else {
                        var c = (r && r.sdkUrl ? r.sdkUrl : s.sdkUrl).replace("{{protocol}}", s.protocol).replace("{{subdomain}}", o && o.subdomain ? o.subdomain : r && r.subdomain ? r.subdomain : s.subdomain).replace("{{domain}}", o && o.domain ? o.domain : r && r.domain ? r.domain : s.domain).replace("{{sdksubpath}}", "NOLSDKBUNDLE" === a ? "nolsdk" : "2").replace("{{nsdkv}}", r.nsdkv);
                        l.loadScript(c, i)
                    }
                } catch (n) {}
            },
            iterateInstances: function(n, e) {
                if (e) {
                    var t = l.findScript(n);
                    if ("string" == typeof t) e(n, l.parseNOLParams(t));
                    else
                        for (var o = 0; o < t.length; o++) e(n, l.parseNOLParams(t[o]))
                }
            }
        },
        d = e && e.nol_GLOBALS ? e.nol_GLOBALS.nol_appid : "";
    try {
        d ? u.iterateInstances(d, function(t, a) {
            var r = a && a.ns ? n[a.ns][a.name] : null;
            if (r || (r = a && a.ns ? n[a.name] : null), r && !r.initialized) {
                var s = c.setNamespace(a && a.ns ? a.ns : o);
                c.setConfig(t, e, s), u.loadSDK(s, t, a, a && a.ns ? a.ns : o)
            }
        }) : console && console.warn && console.warn("Nielsen Log: Client config structure is invalid or corrupt.")
    } catch (n) {}
}(
    window, {
        "nol_GLOBALS": {
            "nol_dma": "",
            "nol_deviceId": "",
            "nol_countryCode2": "",
            "nol_countryCode3": "",
            "nol_errorURL": "|!nol_prefProtocol!|://secure-|!nol_sfcode!|.imrworldwide.com/cgi-bin/error?message=|!(nol_errorMessage)!|,c13_|![nol_appid]!|,c16_|![nol_sdkv]!|,c8_|![nol_devGroup]!|,c7_|![nol_osGroup]!|,c10_|![nol_platform]!|,c17_|![nol_stationId]!|,c18_|![nol_assetid]!|,c6_|![nol_product]!|,ci_|![nol_clientid]!|",
            "nol_useroptUrl_lat": "https://priv-policy.imrworldwide.com/priv/|!nol_devicetype!|/|![nol_localeCountryCode]!|/|![nol_language]!|/optout.html",
            "nol_useroptUrl": "https://priv-policy.imrworldwide.com/priv/mobile/us/en/optout_legacy.html",


            "nol_devGroup": "",
            "nol_osver": "NA",
            "nol_clocksrc": "S",
            "nol_osGroup": "",
            "nol_platform": "",
            "nol_clientid": "us-308174",
            "nol_vcid": "b01",
            "nol_dayoffset": "0",
            "nol_clientCMSmap": {
                "nol_clientid": "clientid",
                "nol_vcid": "subbrand",
                "nol_vidtype": "type",
                "nol_assetid": "assetid",
                "nol_category": "(program)",
                "nol_title": "(title)",
                "nol_length": "length",
                "nol_assetName": "(section)",
                "nol_segmentA": "(segA)",
                "nol_segmentB": "(segB)",
                "nol_segmentC": "(segC)",
                "nol_reportSuiteID": "(reportSuite)",
                "nol_adobeId": "adobeId",
                "nol_crossRefID1": "crossId1",
                "nol_crossRefID2": "crossId2",
                "nol_airDate": "(airdate)",
                "nol_adLoadType": "adloadtype",
                "nol_isFullEpisode": "isfullepisode",
                "nol_cref3": "cref3",
                "nol_mediaURL": "(mediaURL)",
                "nol_adobeSessionId": "adobeVsid",
                "nol_ottStatus": "ottStatus",
                "nol_ottType": "(ottType)",
                "nol_adSupportFlg": "hasAds",
                "nol_fbbybackend": "1"
            },
            "hasAds": "0",
            "nol_cidOffsetNull": "00000",
            "nol_emmsfcodelist": ["eu", "eu-cert", "eu-uat", "pl", "pl-cert"],
            "nol_cidNull": "X100zdCIGeIlgZnkYj6UvQ==",
            "nol_caSeed": "2019Q4",
            "nol_tsvevt": "tsvupdate",
            "nol_md5Seed": "N!3ls3nBL",
            "nol_tsvBreakoutMap": {
                "enable": "00,01,02,03,04,05,06,07,08,09",
                "disable": ""
            },
            "nol_sdkDelimiter": "_",


            "nol_channelName": "defaultChannelName",
            "nol_fbver": "1",
            "nol_appid": "P3816F089-E5B5-4BF1-9D71-A955F54BCDE3",
            "nol_contentType": "content,radio",
            "nol_aqhDuration": "00000",
            "nol_linearAdLoadFlag": "0",
            "nol_tagSrc": "cms",
            "nol_flag": "2",
            "nol_gpsPrecision": "1000",
            "nol_intrvlThrshld": "90",
            "nol_chnlCountThrshld": "10",
            "nol_cacheBusterLmt": "1",
            "nol_id3IntrvlGp": "15",
            "nol_useragent": "NLSDK (|![nol_osver]!|,|![nol_devtypeid]!| BUILD/|![nol_sdkver]!|) |![nol_appid]!|/|![nol_appver]!|",
            "nol_xorSeed": "cr055pltfrm",
            "nol_unQualSegmentValue": "5",
            "nol_backgroundMode": "1",
            "nol_assetName": "defChnAsset",
            "nol_bgTimeOut": "5",
            "nol_duration": "30",
            "nol_encryptDevId": "true",
            "nol_SDKEncDevIdFlag": "true",
            "nol_devTimeZone": "",
            "nol_apn": "",
            "nol_sdkv": "bj.6.0.0",
            "nol_suppress": "0",
            "nol_admeas": "0",
            "nol_maxStaticInstances": "5",
            "nol_pendingPingsLimit": "8",
            "nol_pendingPingsDelay": "1",
            "nol_staticType": "static,text",
            "nol_spFlag": "_P",
            "nol_pauseTimeout": "1800",
            "nol_maxRetry": "0",
            "nol_defReasonCode": "",
            "nol_adSupportFlg": "2",
            "nol_eventDataDelimiter": "~",
            "nol_eventDataEvents": "play,pause,resume,stop,mute,rewind,forward",
            "nol_pauseEventTimeoutPlayhead": "15",


            "nol_id3Map": {
                "nol_nWebAddress": "0",
                "nol_pccid": "1",
                "nol_fdcid": "2",
                "nol_watermark": "3",
                "nol_pcoffset": "4",
                "nol_fdoffset": "5",
                "nol_breakout": "6"
            },

            "nol_customExtension": [
                "nol_dprCustom",
                "nol_legacyCustom",
                "nol_mtvrCustom",
                "nol_drmCustom",
                "nol_mtvraqhCustom",
                "nol_drmaqhCustom",
                "nol_dprid3Custom",
                "nol_dcrVideoCustom",
                "nol_dcrStaticCustom",
                "nol_dcrCustomEnc",
                "nol_vriCustom"
            ],
            "nol_eventFilter": {
                "onCmsDetected": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dpr"
                        },
                        "cond": ["nol_tagSrc"],
                        "is": {
                            "type": "+",
                            "value": "cms"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "drm"
                        },
                        "cond": ["nol_tagSrc"],
                        "is": {
                            "type": "+",
                            "value": "cms"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_tagSrc"],
                        "is": {
                            "type": "+",
                            "value": "id3"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_pccid", "nol_fdcid"],
                        "is": {
                            "type": "+",
                            "value": ""
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_tsvFlag"],
                        "is": {
                            "type": "+",
                            "value": "nol_tsvMap"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_breakout"],
                        "is": {
                            "type": "+",
                            "value": "09"
                        },
                        "then": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_linearAdLoadFlag"],
                        "is": {
                            "type": "+",
                            "value": "2"
                        },
                        "then": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "dprid3"
                        },
                        "cond": ["nol_pccid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "dprid3"
                        },
                        "cond": ["nol_pccid", "nol_fdcid"],
                        "is": {
                            "type": "-",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "mtvr"
                        },
                        "cond": ["nol_tagSrc"],
                        "is": {
                            "type": "+",
                            "value": "id3"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "mtvr"
                        },
                        "cond": ["nol_pccid", "nol_fdcid"],
                        "is": {
                            "type": "+",
                            "value": ""
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "vc"
                        },
                        "cond": ["nol_tagSrc"],
                        "is": {
                            "type": "+",
                            "value": "id3"
                        },
                        "then": {
                            "nol_disabled": "true"
                        },
                        "else": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "ocr"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "+",
                            "value": "preroll,midroll,postroll,ad"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrvideo"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "+",
                            "value": "content,preroll,midroll,postroll,ad"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrstatic"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "+",
                            "value": "static"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "vrivideo"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "+",
                            "value": "content"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrvideo"
                        },
                        "cond": ["nol_isAudio"],
                        "is": {
                            "type": "+",
                            "value": "1,true,True,TRUE,y,Y,yes,Yes,YES"
                        },
                        "then": {
                            "nol_rt": "audio"
                        }
                    }
                ],
                "onDcrCmsDetected": [{
                    "tagVar": {
                        "name": "nol_product",
                        "value": "dcrstatic"
                    },
                    "cond": ["nol_ac"],
                    "is": {
                        "type": "+",
                        "value": "static"
                    },
                    "then": {
                        "nol_disabled": "false"
                    },
                    "else": {
                        "nol_disabled": "true"
                    }
                }],
                "onDcrDetected": {
                    "dcrStatic": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrstatic"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "+",
                            "value": "preroll,midroll,postroll,ad,content"
                        },
                        "then": {
                            "nol_disabled": "true"
                        },
                        "else": {
                            "nol_disabled": "false"
                        }
                    }],
                    "dcrVideo": [{
                            "tagVar": {
                                "name": "nol_product",
                                "value": "dcrvideo"
                            },
                            "cond": ["nol_vidtype"],
                            "is": {
                                "type": "+",
                                "value": "preroll,midroll,postroll,ad,content"
                            },
                            "then": {
                                "nol_disabled": "false"
                            },
                            "else": {
                                "nol_disabled": "true"
                            }
                        },
                        {
                            "tagVar": {
                                "name": "nol_product",
                                "value": "dcrvideo"
                            },
                            "cond": ["nol_vidtype"],
                            "is": {
                                "type": "+",
                                "value": "postroll"
                            },
                            "then": {
                                "nol_minWonOverride": "1"
                            }
                        }
                    ]
                },
                "onOTTDetected": [{
                    "tagVar": {
                        "name": "nol_product_content",
                        "value": "dcrvideo"
                    },
                    "cond": ["nol_pingCount_content"],
                    "is": {
                        "type": "+",
                        "value": "1"
                    },
                    "then": {
                        "nol_pingCount_content": "0"
                    }
                }],
                "onId3Detected": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "mtvr"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "+",
                            "value": "content"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_tagSrc"],
                        "is": {
                            "type": "+",
                            "value": "id3"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "id3"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "+",
                            "value": "content"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "dprid3"
                        },
                        "cond": ["nol_pccid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "mtvr"
                        },
                        "cond": ["nol_pccid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "dprid3"
                        },
                        "cond": ["nol_pccid", "nol_fdcid"],
                        "is": {
                            "type": "-",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    }
                ],
                "onViewWon": [{
                        "tagVar": {
                            "name": "nol_cadence",
                            "value": "interval"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "S"
                        },
                        "then": {
                            "nol_segmentPrefix": "D"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_cadence",
                            "value": "interval"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "D"
                        },
                        "then": {
                            "nol_at": "timer"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_dpr"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "D"
                        },
                        "then": {
                            "nol_fbCountryCode": ""
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_drm"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "D"
                        },
                        "then": {
                            "nol_fbCountryCode": ""
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_mtvr"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "D"
                        },
                        "then": {
                            "nol_fbCountryCode": ""
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_drm"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "V"
                        },
                        "then": {
                            "nol_fbCountryCode": "IMP"
                        }
                    }
                ],
                "onAssetIdChanged": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dpr"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "-",
                            "value": "content"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "-",
                            "value": "content"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dpr"
                        },
                        "cond": ["nol_assetid"],
                        "is": {
                            "type": "+",
                            "value": ""
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dpr"
                        },
                        "cond": ["nol_dpr"],
                        "is": {
                            "type": "+",
                            "value": "true"
                        },
                        "then": {
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        },
                        "else": {
                            "nol_forward": "0",
                            "nol_aggregate": "0"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "drm"
                        },
                        "cond": ["nol_vidtype"],
                        "is": {
                            "type": "-",
                            "value": "radio"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "drm"
                        },
                        "cond": ["nol_assetid"],
                        "is": {
                            "type": "+",
                            "value": ""
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "ocr"
                        },
                        "cond": ["nol_ocrtag"],
                        "is": {
                            "type": "+",
                            "value": ""
                        },
                        "then": {
                            "nol_disabled": "true"
                        },
                        "else": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_cadence",
                            "value": "streamduration"
                        },
                        "cond": ["nol_ac"],
                        "is": {
                            "type": "+",
                            "value": "ad"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrvideo"
                        },
                        "cond": ["nol_isAudio"],
                        "is": {
                            "type": "+",
                            "value": "1,true,True,TRUE,y,Y,yes,Yes,YES"
                        },
                        "then": {
                            "nol_rt": "audio"
                        }
                    }
                ],
                "onId3FdCidChanged": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "mtvr"
                        },
                        "cond": ["nol_fdcid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        },
                        "else": {
                            "nol_disabled": "false",
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_fdcid"],
                        "is": {
                            "type": "+",
                            "value": ""
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    }
                ],
                "onId3PcCidChanged": [{
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "mtvr"
                        },
                        "cond": ["nol_pccid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        },
                        "else": {
                            "nol_disabled": "false",
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "mtvr"
                        },
                        "cond": ["nol_pccid", "nol_fdcid"],
                        "is": {
                            "type": "-",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_forward": "0",
                            "nol_aggregate": "0"
                        },
                        "else": {
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "dprid3"
                        },
                        "cond": ["nol_pccid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "mtvr"
                        },
                        "cond": ["nol_fdrtvod"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_forward": "0",
                            "nol_aggregate": "0"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "mtvr"
                        },
                        "cond": ["nol_fdrtvod"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        }
                    }
                ],
                "nol_tagFilter": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "mtvr"
                        },
                        "cond": ["nol_fdcid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_fdcid"],
                        "is": {
                            "type": "+",
                            "value": ""
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "mtvr"
                        },
                        "cond": ["nol_pccid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        },
                        "else": {
                            "nol_disabled": "false",
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "mtvr"
                        },
                        "cond": ["nol_pccid", "nol_fdcid"],
                        "is": {
                            "type": "-",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_forward": "0",
                            "nol_aggregate": "0"
                        },
                        "else": {
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "dprid3"
                        },
                        "cond": ["nol_pccid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    }
                ],
                "onComplete": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_breakout"],
                        "is": {
                            "type": "+",
                            "value": "03"
                        },
                        "then": {
                            "nol_tsvMap": "00,01,02,03,04"
                        },
                        "else": {
                            "nol_tsvMap": "00,01,02,03,04,05,06,07,08"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_dpr"
                        },
                        "cond": ["nol_aggregate"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_drm"
                        },
                        "cond": ["nol_aggregate"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_mtvr"
                        },
                        "cond": ["nol_aggregate"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_disabled": "false"
                        },
                        "else": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_dpr"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "S"
                        },
                        "then": {
                            "nol_fbCountryCode": "IMP"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_drm"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "S"
                        },
                        "then": {
                            "nol_fbCountryCode": ""
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb_mtvr"
                        },
                        "cond": ["nol_segmentPrefix"],
                        "is": {
                            "type": "+",
                            "value": "S"
                        },
                        "then": {
                            "nol_fbCountryCode": "IMP"
                        }
                    }
                ],
                "onPaginateDetected": [{
                    "tagVar": {
                        "name": "nol_product",
                        "value": "dcrstatic"
                    },
                    "cond": ["nol_pingCount"],
                    "is": {
                        "type": "-",
                        "value": "0"
                    },
                    "then": {
                        "nol_pingCount": "0"
                    }
                }],
                "onEndDetected": [

                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrvideo"
                        },
                        "cond": ["nol_davty"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_davty": "2"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrstatic"
                        },
                        "cond": ["nol_davty"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_davty": "2"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "mtvr"
                        },
                        "cond": ["nol_davty"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_davty": "2"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "drm"
                        },
                        "cond": ["nol_davty"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_davty": "2"
                        }
                    }

                ],
                "onAdLoadFlag": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrvideo"
                        },
                        "cond": ["nol_adLoadType"],
                        "is": {
                            "type": "+",
                            "value": "dynamic"
                        },
                        "then": {
                            "nol_adLoadType": "2"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrvideo"
                        },
                        "cond": ["nol_adLoadType"],
                        "is": {
                            "type": "+",
                            "value": "linear"
                        },
                        "then": {
                            "nol_adLoadType": "1"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dcrvideo"
                        },
                        "cond": ["nol_adLoadType"],
                        "is": {
                            "type": "-",
                            "value": "1,2"
                        },
                        "then": {
                            "nol_adLoadType": "2"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subProduct",
                            "value": "fb"
                        },
                        "cond": ["nol_adLoadType"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_disabled": "true"
                        },
                        "else": {
                            "nol_disabled": "false"
                        }
                    }
                ]


            },

            "nol_serviceFilter": {
                "tsv": [{
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_tsvFlag"],
                        "is": {
                            "type": "+",
                            "value": "nol_tsvMap"
                        },
                        "then": {
                            "nol_disabled": "true"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_breakout"],
                        "is": {
                            "type": "+",
                            "value": "09"
                        },
                        "then": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "dprid3"
                        },
                        "cond": ["nol_linearAdLoadFlag"],
                        "is": {
                            "type": "+",
                            "value": "2"
                        },
                        "then": {
                            "nol_disabled": "false"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_product",
                            "value": "mtvr"
                        },
                        "cond": ["nol_fdrtvod"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_forward": "0",
                            "nol_aggregate": "0"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "mtvr"
                        },
                        "cond": ["nol_fdrtvod"],
                        "is": {
                            "type": "+",
                            "value": "1"
                        },
                        "then": {
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        },
                        "else": {
                            "nol_forward": "0",
                            "nol_aggregate": "0"
                        }
                    },
                    {
                        "tagVar": {
                            "name": "nol_subTag",
                            "value": "mtvr"
                        },
                        "cond": ["nol_fdcid"],
                        "is": {
                            "type": "+",
                            "value": "nol_cidNull"
                        },
                        "then": {
                            "nol_forward": "1",
                            "nol_aggregate": "1"
                        }
                    }
                ],
                "stn": []
            },
            "nol_tagMap": {
                "nol_product": ["dpr", "mtvr", "vc", "id3", "ocr", "drm", "dprid3", "dcrstatic", "dcrvideo", "vrivideo"],
                "nol_cadence": ["interval", "episode", "stream", "impression", "daypart", "appstart", "streamduration", "modcadence"],
                "nol_defaults": {
                    "nol_sessionURL": "|!nol_prefProtocol!|://secure-|!nol_sfcode!|.imrworldwide.com/cgi-bin/gn?prd=session&c9=devid,|![nol_deviceId]!|&c13=asid,|!nol_appid!|&sessionId=|!nol_userSessionId!|&c16=sdkv,|!nol_sdkv!|&uoo=|![nol_useroptout]!|&retry=|![nol_retry]!|",
                    "nol_sfcode": "sdk",
                    "nol_creditFlag": "1",
                    "nol_creditValue": "30",
                    "nol_segmentLength": "5",
                    "nol_segmentValue": "60",
                    "nol_maxLength": "1832",
                    "nol_forward": "1",
                    "nol_aggregate": "1",
                    "nol_tsvFlag": "99",
                    "nol_rt": "video",
                    "nol_accessMethod": "0",
                    "nol_breakout": "00",
                    "nol_currSeg": "0",
                    "nol_minWonOverride": "0",
                    "nol_segmentA": "NA",
                    "nol_segmentB": "NA",
                    "nol_segmentC": "NA",
                    "nol_placement": "NA",
                    "nol_content": "NA",
                    "nol_adLoadType": "2",
                    "nol_segmentTimeSpent": "0",
                    "nol_adDuration": "0",
                    "nol_adCount": "0",
                    "nol_isFullEpisode": "n",
                    "nol_emmURL": "https://|![(nol_userSessionId)]!|.nuid.imrworldwide.com",
                    "nol_prefProtocol": "https",
                    "nol_dcrsfcode": "sdk",
                    "nol_sendTime": "0",
                    "nol_davty": "0"
                },
                "nol_url": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "|!nol_ocrtag!|&c9=devid,|![nol_deviceId]!|&c8=devgrp,&c29=plid,|![nol_playerId]!|&c30=bldv,|![nol_bldv]!|&c7=osgrp,&c10=plt,&c11=agg,|!nol_aggregate!|&c12=apv,&c13=asid,P3816F089-E5B5-4BF1-9D71-A955F54BCDE3&c14=osver,NA&c26=dmap,3&c24=zip,99&uoo=|![nol_useroptout]!|&c68=bndlid,&c61=createtm,|![nol_createTime||nol_pingCreationTime]!|&c62=sendTime,|![nol_sendTime]!|&nodeTM=|![nol_nodetm]!|&logTM=|![nol_logtm]!|&c73=phtype,&c74=dvcnm,",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "|!nol_prefProtocol!|://secure-|!nol_dcrsfcode!|.imrworldwide.com/cgi-bin/gn?prd=dcr&ci=|!nol_clientid_content!|&ch=|!nol_clientid_content+nol_sdkDelimiter+nol_vcid_content+[nol_spFlag]!|&asn=|!nol_assetName_content!|&sessionId=|![(nol_userSessionId)]!|&tl=|![nol_title_content]!|&prv=1&c6=vc,|![nol_vcid_content]!|&ca=|!nol_clientid_content+nol_sdkDelimiter+nol_vcid_content+nol_sdkDelimiter+nol_assetid_content!|&cg=|![nol_category_content]!|&c13=asid,P3816F089-E5B5-4BF1-9D71-A955F54BCDE3&c32=segA,|![nol_segmentA_content]!|&c33=segB,|![nol_segmentB_content]!|&c34=segC,|![nol_segmentC_content]!|&c15=apn,|![nol_apn]!|&plugv=|![nol_plugv]!|&playerv=|![nol_playerv]!|&sup=0&segment2=|![nol_dma]!|&segment1=|!([nol_countryCode3])!|&forward=|![nol_forward]!|&ad=|!nol_accessMethod!|&cr=|!nol_tagPresence+nol_sdkDelimiter+nol_breakout_content+nol_sdkDelimiter+nol_tsvFlag_content+nol_sdkDelimiter+nol_segmentPrefix+nol_currSeg_content+nol_sdkDelimiter+nol_duration_content!|&c9=devid,|![nol_deviceId]!|&enc=|!nol_encryptDevId!|&c1=nuid,|![nol_nuid||nol_playerId]!|&at=|!nol_at!|&rt=|!nol_rt_content!|&c16=sdkv,|![nol_sdkv]!|&c27=cln,|![nol_segmentTimeSpent_content]!|&crs=|![nol_appCrash]!|&lat=|![nol_latitude]!|&lon=|![nol_longitude]!|&c29=plid,|![nol_playerId]!|&c30=bldv,|![nol_bldv]!|&st=dcr&c7=osgrp,|![nol_osGroup]!|&c8=devgrp,|![nol_devGroup]!|&c10=plt,|!([nol_platform])!|&c40=adbid,|![nol_adobeId]!|&c14=osver,|![(nol_osver)]!|&c26=dmap,1&dd=|![nol_dataDate]!|&hrd=|![nol_hourCode]!|&wkd=|![nol_dayId]!|&c35=adrsid,|![nol_reportSuiteID]!|&c36=cref1,|![nol_crossRefID1_content]!|&c37=cref2,|![nol_crossRefID2_content]!|&c11=agg,|!nol_aggregate!|&c12=apv,&c51=adl,|![nol_segmentTimeSpent_ad]!|&c52=noad,|![nol_count_ad]!|&sd=|![nol_length_content]!|&devtypid=|![nol_devtypeid]!|&pc=NA&c53=fef,|![nol_isFullEpisode_content]!|&c54=oad,|![nol_airDate_content]!|&c55=cref3,|![nol_cref3]!|&c57=adldf,|![nol_adLoadType_content]!|&ai=|![nol_assetid_content]!|&c3=|![nol_c3]!|&c64=starttm,|![nol_pingStartTimeUTC]!|&adid=|![nol_assetid_content]!|&c58=isLive,|![nol_isLive_content]!|&c59=sesid,|![nol_sessionId]!|&c61=createtm,|![nol_createTime||nol_pingCreationTime]!|&c63=pipMode,|![nol_pipMode_content]!||![nol_dcrVideoCustom]!|&c62=sendTime,|![nol_sendTime]!|&c68=bndlid,&nodeTM=|![nol_nodetm]!|&logTM=|![nol_logtm]!|&c73=phtype,&c74=dvcnm,&c76=adbsnid,|![nol_adobeSessionId]!|&c77=adsuprt,|![nol_adSupportFlg_content]!|&uoo=|![nol_useroptout]!|&evdata=|![(nol_eventData_content)]!|&c71=ottflg,|![nol_ottStatus_content]!|&c72=otttyp,|![nol_ottType_content]!|&c44=progen,|![(nol_progen)]!|&davty=|![nol_davty_content]!|&si=|![(nol_pageURL_content)]!|&c66=mediaurl,|![(nol_mediaURL_content)]!|",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""

                ]
            }
        },
        "nol_TAGS": [{
                "nol_comment": "DCR Video view",
                "nol_product": "8",
                "nol_cadence": "3",
                "nol_defaults": {
                    "nol_maxPingCount": "1",
                    "nol_creditFlag": "0",
                    "nol_segmentPrefix": "V",
                    "nol_timer": "nol_cmsoffset",
                    "nol_at": "view",
                    "nol_rt": "video",
                    "nol_tagPresence": "4",
                    "nol_c3": "st,c",
                    "nol_davty": "0"
                },
                "nol_url": "18"
            },
            {
                "nol_comment": "DCR Video duration",
                "nol_product": "8",
                "nol_cadence": "0",
                "nol_eventDataEnabled": "true",
                "nol_defaults": {
                    "nol_minWonOverride": "1",
                    "nol_creditFlag": "1",
                    "nol_segmentPrefix": "D",
                    "nol_timer": "nol_cmsoffset",
                    "nol_at": "timer",
                    "nol_rt": "video",
                    "nol_tagPresence": "4",
                    "nol_c3": "st,c",
                    "nol_davty": "1"
                },
                "nol_url": "18"
            },

            {
                "nol_comment": "ID3 raw red herring",
                "nol_product": "3",
                "nol_cadence": "0",
                "nol_url": "4",
                "nol_defaults": {
                    "nol_tagPresence": "2"
                },
                "nol_flag": "2"
            },


            {
                "nol_comment": "OCR tag",
                "nol_product": "4",
                "nol_cadence": "3",
                "nol_defaults": {
                    "nol_maxPingCount": "1",
                    "nol_timer": "nol_cmsoffset"
                },
                "nol_url": "5"
            }

        ]
    }
);