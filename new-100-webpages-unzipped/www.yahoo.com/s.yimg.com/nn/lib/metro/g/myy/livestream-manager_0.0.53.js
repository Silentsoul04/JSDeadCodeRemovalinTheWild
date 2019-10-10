(function() {
    var c = window;
    var s = {};
    var n = "";
    var t = {};
    var f = null;
    var b = null;
    var k = false;
    var h = {};
    const q = "nfl";
    const l = "accepted";
    const d = "denied";
    const a = "geolocation";
    const r = "livestream";
    const j = "started";
    const m = "ended";
    const p = "unknown";

    function g() {
        f = c && c.Y && c.Y.videoManagerMobileCards || undefined;
        var v = f && f.getConfig();
        n = v && v.veModulePath || "";
        t.site = v && v.site || "fp";
        t.lang = v && v.lang || "en-US";
        t.region = v && v.region || "US";
        t.dev_type = v && v.device || "smartphone";
        b = v && v.livestreamParams && JSON.parse(v.livestreamParams) || {};
        k = v && v.honorPreviousGeoChoice || false;
    }

    function e(z, A) {
        var w = "text/javascript";
        var v = document.createElement("script");
        v.type = w;
        if (z) {
            v.src = z;
            v.async = true;
            v.defer = true;
            if (v.readyState) {
                v.onreadystatechange = function y() {
                    if (v.readyState === "loaded" || v.readyState === "complete") {
                        v.onreadystatechange = null;
                        A && A();
                    }
                };
            } else {
                v.onload = function x() {
                    A && A();
                };
            }
            document.getElementsByTagName("head")[0].appendChild(v);
        }
    }

    function i(y, x, w) {
        if (h.status === y && h.code === x) {
            return;
        }
        h.status = y;
        h.code = x;
        const v = "/p.gif?beaconType=geo&device=" + t.dev_type + "&intl=" + t.region + "&geolocation=" + y + "&code=" + x + "&message=" + w;
        c && c.wafer && c.wafer.utils && c.wafer.utils.fireBeacon(v);
    }

    function u(v, y) {
        if (navigator && navigator.geolocation && s && v) {
            s[v].geoid = navigator.geolocation.watchPosition(function x(z) {
                o(a, l);
                i(l, 0, "User accepted geolocation prompt");
                y && y(l, z);
            }, function w(z) {
                var A = (z && z.code === 1) ? d : l;
                o(a, A);
                z && i(A, z.code, z.message);
                y && y(A);
            }, {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 0
            });
        }
    }

    function o(v, w) {
        if (c && c.localStorage) {
            if (w) {
                c.localStorage.setItem(v, w);
            } else {
                return c.localStorage.getItem(v) || p;
            }
        }
    }
    g.prototype = {
        registerVideoplayer: function(y, x, z, v) {
            var w = this;
            if (c && c.VEModule) {
                w.initVEModule(y, x, z, v);
            } else {
                n && e(n, function() {
                    console.log("VEModule script (" + n + ") has been loaded!");
                    c && c.VEModule && w.initVEModule(y, x, z, v);
                });
            }
        },
        initVEModule: function(y, x, A, v) {
            var w = this;
            if (y && x && A && c.VEModule && s) {
                var B = {
                    channelId: A,
                    chyronContainerElem: document.getElementById(y),
                    commonParams: t,
                    videoplayer: x
                };
                if (v === q) {
                    B.enableNFLLocationChyron = true;
                }
                s[y] = s[y] || {};
                s[y].vp = x;
                var z = new c.VEModule(B);
                s[y].vemod = z;
                console.log("VEModule has been instantiated for videoplayer:", y);
                w.attachHandlers(y, v);
            }
        },
        attachHandlers: function(x, v) {
            if (!(x && c && c.VEModule && c.VEModule.events && c.VEModule.Alert)) {
                return;
            }
            var w = this;
            switch (v) {
                case q:
                    w.attachNFLHandlers(x);
                    break;
                default:
                    console.log("Unknown livestream support request: ", v);
            }
        },
        attachNFLHandlers: function(y) {
            console.log("Attaching NFL related handlers on VEModule instance.");
            var x = this;
            var v = s[y] && s[y].vemod;
            var w = s[y] && s[y].vp;
            if (k && o(a) === d) {
                v && v.setLocation(false);
                o(r) !== m && x.displaySportsAppPromo();
            }
            v.on(c.VEModule.events.onScheduledVideoStart, function(z) {
                o(r, j);
                (!k || o(a) !== d) && x.changeVideoHeader(b.featuredVideoNFLSportsTitle);
            });
            v.on(c.VEModule.events.onScheduledVideoComplete, function(B) {
                o(r, m);
                const A = s[y] && s[y].geoid;
                A && navigator && navigator.geolocation && navigator.geolocation.clearWatch(A);
                x.changeVideoHeader(b.featuredVideoSportsTitle);
                var z = document.querySelector(".nfl-sports-app-promo");
                if (z) {
                    z.style.display = "none";
                }
            });
            v.on(c.VEModule.events.onAlertAction, function(A) {
                const z = document.querySelector(".ve-loc-chyron");
                c.VEModule.Alert.ACTION_NAMES.RequestLocation === A.actionName && z && z.style.display === "block" && f && f._pauseVideo({
                    player: w
                });
                c.VEModule.Alert.ACTION_NAMES.RequestLocation === A.actionName && A.actionTrigger === c.VEModule.Alert.ACTION_TRIGGERS.TAP && u(y, function(C, B) {
                    f && f._playVideo({
                        player: w
                    });
                    if (C === l && B) {
                        v.setLocation({
                            lat: String(B.coords.latitude),
                            "long": String(B.coords.longitude),
                            accuracy: String(B.coords.accuracy)
                        });
                        console.log("Set geolocation coordinates on vemodule.");
                        o(r) === j && x.changeVideoHeader(b.featuredVideoNFLSportsTitle);
                    }
                    if (C === d) {
                        x.displaySportsAppPromo();
                        x.changeVideoHeader(b.featuredVideoSportsTitle);
                        v.setLocation(false);
                    }
                });
            });
        },
        changeVideoHeader: function(v) {
            if (c && c.wafer && c.wafer.base && c.wafer.base.state && c.wafer.base.state.featuredVideoParams !== v) {
                c.wafer.base.state = {
                    featuredVideoParams: v
                };
            }
        },
        displaySportsAppPromo: function() {
            if (c && c.wafer && c.wafer.base && c.wafer.base.state) {
                c.wafer.base.state = {
                    displaySportsAppPromo: true
                };
            }
        }
    };
    c.LivestreamManager = g;
})(); /* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */