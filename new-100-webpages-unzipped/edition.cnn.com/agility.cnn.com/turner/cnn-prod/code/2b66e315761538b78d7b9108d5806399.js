Bootstrapper.bindDependencyImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    PubSub.subscribe("cnnvideo-start", function(data) {
        Bootstrapper.sendTwitterPixel()
    });
    PubSub.subscribe("cnnvideo-autostart", function(data) {
        Bootstrapper.sendTwitterPixel()
    });
    PubSub.subscribe("cnnvideo-live", function(data) {
        Bootstrapper.sendTwitterPixel()
    });
    Bootstrapper.sendTwitterPixel = function() {
        var hostName = window.location.hostname;
        if (hostName.indexOf("edition") ==
            -1) {
            var pathname = "/i/adsct?txn_id\x3dl6t98\x26p_id\x3dTwitter\x26tw_sale_amount\x3d0\x26tw_order_quantity\x3d0";
            Bootstrapper.Util.sendImagePixel("//analytics.twitter.com" + pathname);
            Bootstrapper.Util.sendImagePixel("//t.co" + pathname)
        }
    }
}, 2988764, [2988688], 594752, [578909]);
Bootstrapper.bindDependencyImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    PubSub.subscribe("cnnvideo-start", function(data) {
        Bootstrapper.sendFloodlightVideoBeacon()
    });
    PubSub.subscribe("cnnvideo-autostart", function(data) {
        Bootstrapper.sendFloodlightVideoBeacon()
    });
    PubSub.subscribe("cnnvideo-live", function(data) {
        Bootstrapper.sendFloodlightVideoBeacon()
    });
    Bootstrapper.callFloodlightIFrame = function(source, type, cat) {
        var axel = Math.random() +
            "";
        var a = axel * 1E13;
        var url = "//" + source + ".fls.doubleclick.net/activityi;src\x3d" + source + ";type\x3d" + type + ";cat\x3d" + cat + ";ord\x3d1;num\x3d" + a + "?";
        var iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.style.display = "none";
        var b = document.body;
        b.insertBefore(iframe, b.firstChild)
    };
    Bootstrapper.sendFloodlightVideoBeacon = function() {
        var hostName = window.location.hostname;
        if (hostName.indexOf("edition") == -1) Bootstrapper.callFloodlightIFrame("4735610", "videos1", "highp0")
    }
}, 2988767, [2988688], 594749, [578909]);
Bootstrapper.bindDependencyImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    try {
        requirejs(["//i.cdn.turner.com/analytics/comscore/streamsense.5.2.0.160629.min.js"], function() {})
    } catch (e) {
        Bootstrapper.insertScript("//s.cdn.turner.com/analytics/comscore/streamsense.5.2.0.160629.min.js")
    }
    PubSub.subscribe("Player_Ready", function(data) {
        if (typeof Bootstrapper.myStreamingTag != "undefined") Bootstrapper.myStreamingTag.stop();
        Bootstrapper.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        })
    });
    PubSub.subscribe("cs_video-preroll", function(data) {
        if (typeof Bootstrapper.myStreamingTag != "undefined") Bootstrapper.myStreamingTag.stop();
        if (!Bootstrapper.prev_vid) Bootstrapper.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
        else if (Bootstrapper.prev_vid && Bootstrapper.prev_vid !== data.id) Bootstrapper.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
        else if (Bootstrapper.completed_vid && Bootstrapper.completed_vid == data.id) {
            Bootstrapper.completed_vid = "";
            Bootstrapper.myStreamingTag =
                new ns_.StreamingTag({
                    customerC2: "6035748"
                })
        }
        Bootstrapper.prev_vid = data.id;
        var clength = data.ad_duration || 0;
        try {
            clength = parseInt(clength);
            if (clength % 1E3 !== 0) clength = clength * 1E3
        } catch (e) {
            clength = 0
        }
        var metadata = {
            ns_st_cl: clength || 3E3
        };
        if (ns_) ns_.StreamingTag.AdType = {
            BrandedOnDemandContent: "34",
            BrandedOnDemandLive: "35",
            BrandedOnDemandMidRoll: "32",
            BrandedOnDemandPostRoll: "33",
            BrandedOnDemandPreRoll: "31",
            LinearLive: "21",
            LinearOnDemandMidRoll: "12",
            LinearOnDemandPostRoll: "13",
            LinearOnDemandPreRoll: "11",
            Other: "00"
        };
        var atype = ns_.StreamingTag.AdType.LinearOnDemandPreRoll;
        if (data.adType && data.adType === "midroll") atype = ns_.StreamingTag.AdType.LinearOnDemandMidRoll;
        if (data.adType && data.adType === "postroll") atype = ns_.StreamingTag.AdType.LinearOnDemandPostRoll;
        if (data.isLive && data.isLive == "true") atype = ns_.StreamingTag.AdType.LinearLive;
        Bootstrapper.myStreamingTag.playVideoAdvertisement(metadata, atype)
    });
    PubSub.subscribe("cs_ad-complete", function(data) {
        if (typeof Bootstrapper.myStreamingTag != "undefined") Bootstrapper.myStreamingTag.stop()
    });
    PubSub.subscribe("cs_video-play", function(data) {
        if (typeof Bootstrapper.myStreamingTag != "undefined") Bootstrapper.myStreamingTag.stop();
        if (!Bootstrapper.prev_vid) Bootstrapper.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
        else if (Bootstrapper.prev_vid && Bootstrapper.prev_vid !== data.id) Bootstrapper.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
        else if (Bootstrapper.completed_vid && Bootstrapper.completed_vid == data.id) {
            Bootstrapper.completed_vid = "";
            Bootstrapper.myStreamingTag = new ns_.StreamingTag({
                customerC2: "6035748"
            })
        }
        Bootstrapper.prev_vid =
            data.id;
        var clength = data.trt || 0;
        var c4 = "CNN";
        try {
            clength = parseInt(clength);
            if (clength % 1E3 !== 0) clength = clength * 1E3
        } catch (e) {
            clength = 0
        }
        var adate = data.timestamp || "";
        try {
            if (adate) {
                adate = new Date(adate);
                adate = adate.toISOString().substring(0, 10)
            }
        } catch (e) {}
        if (window.location.hostname.indexOf("edition") != -1) c4 = "CNNI";
        if (typeof data.category != "undefined" && data.category.toLowerCase() === "spanish") c4 = "CNNESPANOL";
        if (typeof data.category != "undefined" && data.category.toLowerCase() === "cnnmoney") c4 = "CNNMONEY";
        var metadata = {
            ns_st_ci: data.id,
            ns_st_cl: clength,
            ns_st_st: "*null",
            ns_st_pu: "CNN",
            ns_st_pr: data.subcategory || "*null",
            ns_st_ep: data.headline || "*null",
            ns_st_sn: "*null",
            ns_st_en: "*null",
            ns_st_ge: data.category || "*null",
            ns_st_ia: "0",
            ns_st_ce: "0",
            ns_st_ddt: "*null",
            ns_st_tdt: adate || "*null",
            c3: "*null",
            c4: c4,
            c6: "*null"
        };
        if (ns_) ns_.StreamingTag.ContentType = {
            Bumper: "99",
            Live: "13",
            LongFormOnDemand: "12",
            Other: "00",
            ShortFormOnDemand: "11",
            UserGeneratedLive: "23",
            UserGeneratedLongFormOnDemand: "22",
            UserGeneratedShortFormOnDemand: "21"
        };
        var vtype = ns_.StreamingTag.ContentType.ShortFormOnDemand;
        if (data.content_type && data.content_type == "episode") vtype = ns_.StreamingTag.ContentType.LongFormOnDemand;
        if (data.id == "cvplive/cnngo") vtype = ns_.StreamingTag.ContentType.Live;
        if (data.isLive && data.isLive == "true") vtype = ns_.StreamingTag.ContentType.Live;
        Bootstrapper.myStreamingTag.playVideoContentPart(metadata, vtype)
    });
    PubSub.subscribe("cs_video-pause", function(data) {
        if (typeof Bootstrapper.myStreamingTag != "undefined") Bootstrapper.myStreamingTag.stop()
    });
    PubSub.subscribe("cs_video-resume", function(data) {
        if (typeof Bootstrapper.myStreamingTag != "undefined") Bootstrapper.myStreamingTag.stop();
        var clength = data.trt || 0;
        var c4 = "CNN";
        try {
            clength = parseInt(clength);
            if (clength % 1E3 !== 0) clength = clength * 1E3
        } catch (e) {
            clength = 0
        }
        var adate = data.timestamp || "";
        try {
            if (adate) {
                adate = new Date(adate);
                adate = adate.toISOString().substring(0, 10)
            }
        } catch (e) {}
        if (window.location.hostname.indexOf("edition") != -1) c4 = "CNNI";
        if (typeof data.category != "undefined" && data.category.toLowerCase() ===
            "spanish") c4 = "CNNESPANOL";
        if (typeof data.category != "undefined" && data.category.toLowerCase() === "cnnmoney") c4 = "CNNMONEY";
        var metadata = {
            ns_st_ci: data.id,
            ns_st_cl: clength,
            ns_st_st: "*null",
            ns_st_pu: "CNN",
            ns_st_pr: data.subcategory || "*null",
            ns_st_ep: data.headline || "*null",
            ns_st_sn: "*null",
            ns_st_en: "*null",
            ns_st_ge: data.category || "*null",
            ns_st_ia: "0",
            ns_st_ce: "0",
            ns_st_ddt: "*null",
            ns_st_tdt: adate || "*null",
            c3: "*null",
            c4: c4,
            c6: "*null"
        };
        if (ns_) ns_.StreamingTag.ContentType = {
            Bumper: "99",
            Live: "13",
            LongFormOnDemand: "12",
            Other: "00",
            ShortFormOnDemand: "11",
            UserGeneratedLive: "23",
            UserGeneratedLongFormOnDemand: "22",
            UserGeneratedShortFormOnDemand: "21"
        };
        var vtype = ns_.StreamingTag.ContentType.ShortFormOnDemand;
        if (data.content_type && data.content_type == "episode") vtype = ns_.StreamingTag.ContentType.LongFormOnDemand;
        if (data.id == "cvplive/cnngo") vtype = ns_.StreamingTag.ContentType.Live;
        if (data.isLive && data.isLive == "true") vtype = ns_.StreamingTag.ContentType.Live;
        Bootstrapper.myStreamingTag.playVideoContentPart(metadata, vtype)
    });
    PubSub.subscribe("cs_video-complete",
        function(data) {
            Bootstrapper.completed_vid = data.id;
            if (typeof Bootstrapper.myStreamingTag != "undefined") Bootstrapper.myStreamingTag.stop()
        });
    PubSub.subscribe("Video_Completed", function(data) {
        Bootstrapper.completed_vid = data.id;
        if (typeof Bootstrapper.myStreamingTag != "undefined") Bootstrapper.myStreamingTag.stop()
    })
}, 2988782, [2988688], 579350, [578909]);
Bootstrapper.bindDependencyImmediate(function() {
        var Bootstrapper = window["Bootstrapper"];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.nielsenPageBeacon = function() {
            var ci, si, rp, random;
            ci = "us-204044h";
            si = escape(window.location.href);
            rp = escape(document.referrer);
            random = +new Date;
            Bootstrapper.imageRequest("//secure-us.imrworldwide.com/cgi-bin/m?ci\x3d" + ci + "\x26cg\x3d0\x26cc\x3d1\x26si\x3d" + si + "\x26rp\x3d" + rp + "\x26ts\x3dcompact\x26rnd\x3d" + random)
        };
        if (!Bootstrapper.Util.isRefreshPage()) Bootstrapper.nielsenPageBeacon()
    },
    2988778, [2988688], 594566, [578909]);
Bootstrapper.bindDependencyImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    PubSub.subscribe("cnnvideo-start", function(data) {
        Bootstrapper.nielsenVideoBeacon("dav0", data)
    });
    PubSub.subscribe("cnnvideo-autostart", function(data) {
        Bootstrapper.nielsenVideoBeacon("dav0", data)
    });
    PubSub.subscribe("cnnvideo-live", function(data) {
        Bootstrapper.nielsenVideoBeacon("dav0", data, "live")
    });
    PubSub.subscribe("cnnvideo-episode", function(data) {
        Bootstrapper.nielsenVideoBeacon("dav0",
            data)
    });
    PubSub.subscribe("cnnvideo-complete", function(data) {
        Bootstrapper.nielsenVideoBeacon("dav2", data)
    });
    Bootstrapper.nielsenVideoBeacon = function(state, data, cg) {
        var v = Bootstrapper.Util.getVideoMetadata(data);
        var ci, c6, tl, random, url;
        ci = "us-100120";
        c6 = v.category && (v.category == "cnnmoney" || v.category == "business") ? "vc,c02" : "vc,b01";
        tl = state + "-" + v.id;
        random = +new Date;
        url = "//secure-us.imrworldwide.com/cgi-bin/m?ci\x3d" + ci + "\x26c6\x3d" + c6 + "\x26cc\x3d1\x26tl\x3d" + tl + "\x26rnd\x3d" + random;
        if (cg) url += "\x26cg\x3d" +
            cg;
        Bootstrapper.imageRequest(url)
    }
}, 2988774, [2988688], 594593, [578909]);
Bootstrapper.bindDependencyImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    PubSub.subscribe("cnnvideo-start", function(data) {
        Bootstrapper.sendFacebookPixel()
    });
    PubSub.subscribe("cnnvideo-autostart", function(data) {
        Bootstrapper.sendFacebookPixel()
    });
    PubSub.subscribe("cnnvideo-live", function(data) {
        Bootstrapper.sendFacebookPixel()
    });
    Bootstrapper.sendFacebookPixel = function() {
        var hostName = window.location.hostname;
        if (hostName.indexOf("edition") ==
            -1) Bootstrapper.Util.sendImagePixel("//www.facebook.com/tr?id\x3d1407388882899381\x26ev\x3dPageView\x26noscript\x3d1")
    }
}, 2988770, [2988688], 594751, [578909]);