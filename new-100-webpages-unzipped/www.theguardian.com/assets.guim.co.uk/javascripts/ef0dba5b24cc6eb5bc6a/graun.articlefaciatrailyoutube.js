(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        118: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return r
            });
            var i = function(t, e, n, i, r, o) {
                    var a = i,
                        c = {
                            eventCategory: "media",
                            eventAction: r(t),
                            eventLabel: n,
                            dimension19: o,
                            dimension20: a
                        },
                        u = e[t.eventType];
                    return u && (c[u] = 1), c
                },
                r = function(t) {
                    var e = "".concat(t.mediaType, " ");
                    return t.isPreroll ? e += "preroll" : e += "content", e
                }
        },
        173: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return u
            }), n.d(e, "b", function() {
                return d
            });
            var i = n(0),
                r = n(2),
                o = n(14),
                a = n(4),
                c = 0,
                u = function(t) {
                    var e, n = !1 !== t ? (e = "kx".concat("segs"), a.a.getRaw(e) || Object(r.d)("".concat(e, "=([^;]*)")) || "") : "";
                    return n ? n.split(",") : []
                },
                d = {
                    shouldRun: i.a.get("switches.krux", !1),
                    url: "//cdn.krxd.net/controltag?confid=JVZiE3vn",
                    onLoad: function() {
                        ! function t() {
                            if (window.Krux) {
                                var e = {
                                    dc: !0,
                                    al: !0,
                                    tg: !0,
                                    cd: !1,
                                    sh: !1,
                                    re: !1
                                };
                                window.Krux("consent:set", e, function(t) {
                                    if (t) switch (t.idv) {
                                        case "no identifier found for user":
                                        case "user opted out via (optout or dnt)":
                                            break;
                                        default:
                                            var n = Object.keys(t).map(function(e) {
                                                    return "".concat(e, " -> '").concat(t[e], "'")
                                                }).join(", "),
                                                i = "KRUX: ".concat(n);
                                            Object(o.a)(new Error(i), {
                                                feature: "krux:consent:set",
                                                consentFlags: e
                                            })
                                    }
                                })
                            } else c < 20 && (c += 1, setTimeout(function() {
                                t()
                            }, 100))
                        }()
                    }
                }
        },
        197: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return s
            }), n.d(e, "a", function() {
                return d
            });
            var i = n(6),
                r = n(0),
                o = n(30),
                a = n.n(o),
                c = n(118),
                u = function(t, e) {
                    return "".concat(t, ":").concat(e)
                },
                d = function(t) {
                    var e = r.a.get("googleAnalytics.trackers.editorial"),
                        n = {
                            play: "metric1",
                            skip: "metric2",
                            25: "metric3",
                            50: "metric4",
                            75: "metric5",
                            end: "metric6"
                        },
                        o = function(t) {
                            var e = {
                                video: {
                                    id: "gu-video-youtube-".concat(t.mediaId),
                                    eventType: "video:content:".concat(t.eventType)
                                }
                            };
                            a.a.record(e)
                        };
                    ["play", "25", "50", "75", "end"].forEach(function(r) {
                        i.a.once(u(r, t), function(i) {
                            var a = {
                                mediaId: t,
                                mediaType: "video",
                                eventType: r,
                                isPreroll: !1
                            };
                            o(a), window.ga("".concat(e, ".send"), "event", Object(c.a)(a, n, i, "gu-video-youtube", function() {
                                return "video content"
                            }, t))
                        })
                    }), o({
                        mediaId: t,
                        mediaType: "video",
                        eventType: "ready",
                        isPreroll: !1
                    })
                },
                s = function(t, e) {
                    i.a.emit(u(t, e), e)
                }
        },
        24: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return l
            });
            var i = n(16),
                r = n.n(i),
                o = n(1),
                a = n.n(o),
                c = n(0),
                u = n(7),
                d = n(40),
                s = n(26),
                f = n(80),
                l = new function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.a;
                    r()(this, t), a()(this, "dfpAdvertising", void 0), a()(this, "shouldBlockAnalytics", void 0), a()(this, "stickyTopBannerAd", void 0), a()(this, "articleBodyAdverts", void 0), a()(this, "articleAsideAdverts", void 0), a()(this, "carrotTrafficDriver", void 0), a()(this, "videoPreRolls", void 0), a()(this, "highMerch", void 0), a()(this, "thirdPartyTags", void 0), a()(this, "outbrain", void 0), a()(this, "commentAdverts", void 0), a()(this, "liveblogAdverts", void 0), a()(this, "paidforBand", void 0), a()(this, "asynchronous", void 0), a()(this, "adFree", void 0);
                    var n = /[#&]noads(&.*)?$/.test(window.location.hash),
                        i = /[#&]noadsaf(&.*)?$/.test(window.location.hash),
                        o = /[?&]forceads(&.*)?$/.test(window.location.search),
                        l = !n && !f.a.isOff("adverts"),
                        g = e.get("page.shouldHideAdverts") || "childrens-books-site" === e.get("page.section"),
                        m = e.get("page.isMinuteArticle"),
                        v = "Article" === e.get("page.contentType"),
                        p = "Interactive" === e.get("page.contentType"),
                        b = e.get("page.isLiveBlog"),
                        h = e.get("page.isHosted"),
                        y = "Identity" === e.get("page.contentType") || "identity" === e.get("page.section"),
                        w = e.get("switches"),
                        j = "wide" === Object(u.d)(),
                        O = document.documentElement && document.documentElement.classList.contains("has-sticky"),
                        A = e.get("page.showNewRecipeDesign") && e.get("tests.abNewRecipeDesign"),
                        T = ["help/ng-interactive/2017/mar/17/contact-the-guardian-securely", "help/2016/sep/19/how-to-contact-the-guardian-securely"].includes(e.get("page.pageId", ""));
                    this.adFree = !!i || Object(d.g)(), this.dfpAdvertising = o || w.commercial && l && !g && !y && !this.adFree, this.shouldBlockAnalytics = T, this.stickyTopBannerAd = !this.adFree && !e.get("page.disableStickyTopBanner") && !O, this.articleBodyAdverts = this.dfpAdvertising && !this.adFree && !m && v && !b && !h && !A, this.carrotTrafficDriver = !this.adFree && this.articleBodyAdverts && e.get("switches.carrotTrafficDriver", !1) && !e.get("page.isPaidContent"), this.videoPreRolls = this.dfpAdvertising && !this.adFree, this.highMerch = this.dfpAdvertising && !this.adFree && !m && !h && !p && !e.get("page.isFront") && !A, this.thirdPartyTags = !this.adFree && l && !y && !T, this.outbrain = this.dfpAdvertising && !this.adFree && w.outbrain && !n && !g && v && !e.get("page.isPreview") && e.get("page.showRelatedContent") && !(Object(s.l)() && e.get("page.commentable")), this.commentAdverts = this.dfpAdvertising && !this.adFree && !m && e.get("switches.enableDiscussionSwitch") && e.get("page.commentable") && (!b || j), this.liveblogAdverts = b && this.dfpAdvertising && !this.adFree, this.paidforBand = e.get("page.isPaidContent") && !O
                }
        },
        328: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return r
            }), n.d(e, "a", function() {
                return o
            });
            var i = n(80),
                r = function(t) {
                    Object.keys(t).forEach(function(e) {
                        i.a.set("".concat("accessibility", ".").concat(e), t[e])
                    })
                },
                o = function(t) {
                    return !0 === function(t) {
                        return !1 !== i.a.get("".concat("accessibility", ".").concat(t))
                    }(t)
                }
        },
        329: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return P
            }), n.d(e, "b", function() {
                return E
            });
            var i = n(3),
                r = (n(11), n(15)),
                o = n(14),
                a = n(339),
                c = n(197),
                u = n(76),
                d = n(8),
                s = n(0),
                f = n(7),
                l = n(55),
                g = n.n(l),
                m = n(328),
                v = n(20),
                p = {},
                b = [];
            document.addEventListener("focusout", function() {
                b.forEach(function(t) {
                    i.a.read(function() {
                        if (document.activeElement === t) return Object(d.a)(".vjs-big-play-button", t.parentElement)
                    }).then(function(t) {
                        i.a.write(function() {
                            t && t.addClass("youtube-play-btn-focussed")
                        })
                    })
                })
            }), document.addEventListener("focusin", function() {
                i.a.read(function() {
                    return Object(d.a)(".vjs-big-play-button")
                }).then(function(t) {
                    i.a.write(function() {
                        t && t.removeClass("youtube-play-btn-focussed")
                    })
                })
            });
            var h = function(t) {
                    p[t] && p[t].progressTracker && clearInterval(p[t].progressTracker)
                },
                y = function(t, e) {
                    var n = e.atomId,
                        i = e.iframe,
                        r = e.overlay,
                        o = e.endSlate,
                        a = e.paused;
                    h(t),
                        function(t) {
                            p[t].progressTracker = setInterval(function(t) {
                                var e = p[t];
                                if (e) {
                                    var n = e.pendingTrackingCalls,
                                        i = e.youtubePlayer,
                                        r = e.duration,
                                        o = e.atomId;
                                    if (n.length) {
                                        var a = i.getCurrentTime();
                                        if (r) {
                                            var u = Math.round(a / r * 100);
                                            n.length && u >= n[0] && (Object(c.b)(n[0].toString(), o), n.shift())
                                        }
                                    }
                                }
                            }.bind(null, t), 1e3), p[t].progressTracker
                        }(t), a ? e.paused = !1 : Object(c.b)("play", n);
                    var u = i.closest(".immersive-main-media");
                    if (u && u.classList.add("atom-playing"), r && o && !o.rendered) {
                        var d = r.parentElement;
                        d && o.fetch(d, "html")
                    }
                },
                w = function(t) {
                    var e = t.split("?");
                    return 1 === e.length ? "" : Object(v.d)(e[1]).v || ""
                },
                j = {
                    ENDED: function(t) {
                        var e = p[t];
                        h(t), Object(c.b)("end", e.atomId), e.pendingTrackingCalls = [25, 50, 75];
                        var n = e.iframe && e.iframe.closest(".immersive-main-media") || null;
                        n && n.classList.remove("atom-playing")
                    },
                    PLAYING: function(t) {
                        var e = p[t];
                        if (e) {
                            var n = p[t],
                                i = n.youtubePlayer,
                                a = n.youtubeId,
                                u = w(i.getVideoUrl());
                            u !== a ? Object(r.a)("/atom/youtube/".concat(u, ".json")).then(function(n) {
                                var r = n.atomId;
                                r && (e.atomId = r, e.youtubeId = u, e.duration = i.getDuration(), Object(c.a)(r), y(t, e))
                            }).catch(function(t) {
                                Object(o.a)(Error("Failed to get atom ID for youtube ID ".concat(u, ". ").concat(t)), {
                                    feature: "youtube"
                                }, !1)
                            }) : y(t, e)
                        }
                    },
                    PAUSED: function(t) {
                        p[t].paused = !0, h(t)
                    }
                },
                O = function() {
                    var t = document.querySelector(".immersive-main-media__media .youtube-media-atom"),
                        e = t ? t.offsetHeight : 0,
                        n = document.querySelector(".immersive-main-media__headline-container"),
                        i = e - (n ? n.offsetHeight : 0),
                        r = document.querySelector(".youtube-media-atom__immersive-interface");
                    r && (r.style.top = "".concat(i, "px"))
                },
                A = function(t, e, n, i, r) {
                    var o = document.getElementById(n);
                    if (o) {
                        b.push(o);
                        var a = r.target,
                            c = w(a.getVideoUrl()),
                            d = a.getDuration();
                        if (p[e] = {
                                iframe: o,
                                atomId: t,
                                youtubeId: c,
                                duration: d,
                                youtubePlayer: a,
                                paused: !1,
                                pendingTrackingCalls: [25, 50, 75]
                            }, function(t) {
                                return ("video" === s.a.get("page.contentType", "").toLowerCase() && (s.a.get("page.isDev") ? 0 === document.referrer.indexOf(window.location.origin) : 0 === document.referrer.indexOf(s.a.get("page.host"))) && (p[t].iframe && !!p[t].iframe.closest('figure[data-component="main video"]') || !1) || s.a.get("page.isFront")) && !(Object(f.o)() || Object(f.l)()) && Object(m.a)("flashing-elements")
                            }(e) && r.target.playVideo(), i && (p[e].overlay = i, s.a.get("page.section") && !s.a.get("switches.youtubeRelatedVideos") && Object(f.m)({
                                min: "desktop"
                            }))) {
                            var l = function(t) {
                                var e = t.parentNode;
                                if (e instanceof HTMLElement) {
                                    var n = (e.dataset || {}).endSlate;
                                    if (n) {
                                        var i = new u.a;
                                        return i.endpoint = n, i
                                    }
                                }
                            }(i);
                            l && (p[e].endSlate = l)
                        }
                        o.closest(".immersive-main-media__media") && (O(), window.addEventListener("resize", g()(O.bind(null), 200)))
                    }
                },
                T = function(t) {
                    i.a.read(function() {
                        if (t) {
                            var e = t.querySelector(".youtube-media-atom__iframe");
                            if (e) {
                                var n = e.id,
                                    i = t.getAttribute("data-media-atom-id") || "",
                                    r = "".concat(i, "/").concat(Math.random().toString(36).substr(2, 9));
                                t.setAttribute("data-unique-atom-id", r);
                                var o = t.querySelector(".youtube-media-atom__overlay"),
                                    u = t.getAttribute("data-channel-id") || "";
                                Object(c.a)(i), Object(a.a)(e, {
                                    onPlayerReady: function(t) {
                                        A(i, r, n, o, t)
                                    },
                                    onPlayerStateChange: function(t) {
                                        ! function(t, e) {
                                            var n = e.data,
                                                i = Object.keys(j).find(function(t) {
                                                    return n === window.YT.PlayerState[t]
                                                });
                                            i && j[i](t)
                                        }(r, t)
                                    }
                                }, e.dataset.assetId, u)
                            }
                        }
                    })
                },
                k = function(t) {
                    t && i.a.read(function() {
                        Object(d.a)(".youtube-media-atom:not(.no-player)", t).each(function(t) {
                            var e = t.querySelector(".youtube-media-atom__overlay");
                            s.a.get("page.isFront") ? e.addEventListener("click", function() {
                                T(t)
                            }) : T(t)
                        })
                    })
                },
                P = function(t) {
                    t && t.length ? t.forEach(k) : k(document.body)
                },
                E = function(t) {
                    var e = p[t];
                    e && e.youtubePlayer.pauseVideo()
                }
        },
        339: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return p
            });
            var i, r = n(12),
                o = n.n(r),
                a = n(0),
                c = n(85),
                u = n(20),
                d = n(34),
                s = n(24),
                f = n(105),
                l = new Promise(function(t) {
                    window.YT && window.YT.Player ? t() : window.onYouTubeIframeAPIReady = t
                }),
                g = function(t) {
                    t && t.classList.add("youtube__video-started")
                };
            Object(f.onIabConsentNotification)(function(t) {
                i = t[1] && t[2] && t[3] && t[4] && t[5]
            });
            var m = function(t, e, n) {
                    return t ? {
                        disableAds: !0
                    } : n ? {
                        nonPersonalizedAd: !e,
                        adTagParameters: {
                            iu: a.a.get("page.adUnit"),
                            cust_params: encodeURIComponent(Object(u.b)(Object(d.c)()))
                        }
                    } : {
                        nonPersonalizedAd: !e
                    }
                },
                v = function(t) {
                    return document.getElementById("youtube-".concat(t))
                },
                p = function(t, e, n, r) {
                    return Object(c.a)("https://www.youtube.com/iframe_api", {}), l.then(function() {
                        return function(t, e, n, r, o, c) {
                            var u = a.a.get("switches.commercialYoutubePfpAdTargeting", !1),
                                d = !a.a.get("switches.youtubeRelatedVideos"),
                                f = m(s.a.adFree, !!i, u);
                            return new window.YT.Player(t.id, {
                                host: s.a.adFree || !t.classList.contains("youtube-media-atom__iframe") ? "https://www.youtube-nocookie.com" : "https://www.youtube.com",
                                videoId: e,
                                width: "100%",
                                height: "100%",
                                events: {
                                    onReady: r,
                                    onStateChange: o,
                                    onError: function(t) {
                                        console.error("YOUTUBE: ".concat(t.data)), console.dir(t)
                                    }
                                },
                                embedConfig: {
                                    relatedChannels: [],
                                    disableRelatedVideos: d,
                                    adsConfig: f
                                }
                            })
                        }(t, n, 0, function(t) {
                            var i = v(n);
                            (function(t) {
                                return t.target.getCurrentTime() > 0
                            })(t) && g(i),
                                function(t, e, n) {
                                    o.a.write(function() {
                                        n && n.classList.add("youtube__video-ready")
                                    }), e && "function" == typeof e.onPlayerReady && e.onPlayerReady(t)
                                }(t, e, i)
                        }, function(t) {
                            ! function(t, e, n) {
                                if (n && a.a.get("page.isDev")) {
                                    var i = window.YT.PlayerState,
                                        r = Object.keys(i).find(function(e) {
                                            return i[e] === t.data
                                        });
                                    r && console.log("Player ".concat(n.id, " is ").concat(r))
                                }
                                o.a.write(function() {
                                    ["ENDED", "PLAYING", "PAUSED", "BUFFERING", "CUED"].forEach(function(e) {
                                        n && (n.classList.toggle("youtube__video-".concat(e.toLocaleLowerCase()), t.data === window.YT.PlayerState[e]), g(n))
                                    })
                                }), e && "function" == typeof e.onPlayerStateChange && e.onPlayerStateChange(t)
                            }(t, e, v(n))
                        })
                    })
                }
        },
        34: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return S
            }), n.d(e, "a", function() {
                return C
            }), n.d(e, "b", function() {
                return I
            });
            var i, r = n(28),
                o = n.n(r),
                a = n(0),
                c = n(2),
                u = n(7),
                d = n(5),
                s = n(4),
                f = n(20),
                l = n(173),
                g = n(26),
                m = n(210),
                v = n(105),
                p = n(24),
                b = n(64),
                h = n(9),
                y = n(161),
                w = n.n(y),
                j = n(33),
                O = n.n(j),
                A = n(203),
                T = n.n(A),
                k = n(218),
                P = n.n(k),
                E = {},
                I = O()(function(t) {
                    return Object(h.p)({
                        sens: t.sens,
                        pt1: t.url,
                        pt2: t.edition,
                        pt3: t.ct,
                        pt4: t.p,
                        pt5: t.k,
                        pt6: t.su,
                        pt7: t.bp,
                        pt8: t.x,
                        pt9: [t.gdncrm, t.pv, t.co, t.tn, t.slot].join("|")
                    })
                }),
                C = O()(function(t) {
                    return e = I(t), w()(Object.keys(e).filter(function(t) {
                        return "" !== e[t] && null !== e[t]
                    }).map(function(t) {
                        var n = e[t];
                        return Array.isArray(n) ? n.map(function(e) {
                            return "".concat(t, "=").concat(e)
                        }) : "".concat(t, "=").concat(n)
                    })).join(",");
                    var e
                }),
                S = function() {
                    return 0 !== Object.keys(E).length ? E : (Object(v.onIabConsentNotification)(function(t) {
                        var e = t[1] && t[2] && t[3] && t[4] && t[5];
                        e !== i && (E = function(t) {
                            var e, n, i, r, v = a.a.get("page"),
                                h = {
                                    pa: t ? "t" : "f"
                                },
                                y = p.a.adFree ? {
                                    af: "t"
                                } : {},
                                w = Object.assign({
                                    sens: v.isSensitive ? "t" : "f",
                                    x: Object(l.a)(t),
                                    pv: a.a.get("ophan.pageViewId"),
                                    bp: function() {
                                        switch (Object(u.d)(!0)) {
                                            case "mobile":
                                            case "mobileMedium":
                                            case "mobileLandscape":
                                                return "mobile";
                                            case "phablet":
                                            case "tablet":
                                                return "tablet";
                                            case "desktop":
                                            case "leftCol":
                                            case "wide":
                                                return "desktop";
                                            default:
                                                return "mobile"
                                        }
                                    }(),
                                    at: Object(c.d)("adtest") || void 0,
                                    si: Object(g.l)() ? "t" : "f",
                                    gdncrm: Object(m.a)(t),
                                    ab: function() {
                                        var t = Object(b.c)(),
                                            e = [],
                                            n = function(t, n) {
                                                if ("string" == typeof n && "notintest" !== n) {
                                                    var i = "".concat(t, "-").concat(n);
                                                    e.push(i.substring(0, 40))
                                                }
                                            };
                                        Object.keys(t).forEach(function(e) {
                                            var i = t[e];
                                            n(e, i.variant)
                                        });
                                        var i = a.a.get("tests");
                                        return i && Object.entries(i).forEach(function(t) {
                                            var e = o()(t, 2),
                                                i = e[0],
                                                r = e[1];
                                            n(i, r)
                                        }), e
                                    }(),
                                    ref: ([{
                                        id: "facebook",
                                        match: "facebook.com"
                                    }, {
                                        id: "twitter",
                                        match: "t.co/"
                                    }, {
                                        id: "reddit",
                                        match: "reddit.com"
                                    }, {
                                        id: "google",
                                        match: "www.google"
                                    }].filter(function(t) {
                                        return Object(u.e)().indexOf(t.match) > -1
                                    })[0] || {}).id,
                                    ms: (i = v.source, i ? (r = i, r.replace(/[+\s]+/g, "-").toLowerCase()).replace(/&/g, "and").replace(/'/g, "") : null),
                                    fr: (n = s.a.get("gu.alreadyVisited") || 0, n <= 5 ? n.toString() : n >= 6 && n <= 9 ? "6-9" : n >= 10 && n <= 15 ? "10-15" : n >= 16 && n <= 19 ? "16-19" : n >= 20 && n <= 29 ? "20-29" : n >= 30 ? "30plus" : n.toString()),
                                    vl: v.videoDuration ? (30 * Math.ceil(v.videoDuration / 30)).toString() : void 0,
                                    cc: Object(d.g)(),
                                    s: v.section,
                                    rp: a.a.get("isDotcomRendering", !1) ? "dotcom-rendering" : "dotcom-platform",
                                    inskin: (e = Object(u.g)(), e && e.width >= 1560 ? "t" : "f")
                                }, v.sharedAdTargeting, h, y, T()(Object(f.d)(), ["0p19G"])),
                                j = P()(w, function(t) {
                                    return Array.isArray(t) ? t.length > 0 : t
                                });
                            return v.appNexusPageTargeting = C(j), v.pageAdTargeting = j, j
                        }(e), i = e)
                    }), E)
                }
        },
        9: function(t, e, n) {
            "use strict";
            n.d(e, "p", function() {
                return v
            }), n.d(e, "C", function() {
                return p
            }), n.d(e, "n", function() {
                return b
            }), n.d(e, "o", function() {
                return h
            }), n.d(e, "l", function() {
                return y
            }), n.d(e, "m", function() {
                return w
            }), n.d(e, "f", function() {
                return j
            }), n.d(e, "b", function() {
                return O
            }), n.d(e, "c", function() {
                return A
            }), n.d(e, "a", function() {
                return T
            }), n.d(e, "g", function() {
                return k
            }), n.d(e, "e", function() {
                return P
            }), n.d(e, "d", function() {
                return E
            }), n.d(e, "j", function() {
                return I
            }), n.d(e, "i", function() {
                return C
            }), n.d(e, "k", function() {
                return S
            }), n.d(e, "x", function() {
                return D
            }), n.d(e, "u", function() {
                return L
            }), n.d(e, "z", function() {
                return _
            }), n.d(e, "w", function() {
                return F
            }), n.d(e, "y", function() {
                return R
            }), n.d(e, "q", function() {
                return x
            }), n.d(e, "v", function() {
                return B
            }), n.d(e, "B", function() {
                return M
            }), n.d(e, "r", function() {
                return U
            }), n.d(e, "A", function() {
                return N
            }), n.d(e, "s", function() {
                return Y
            }), n.d(e, "t", function() {
                return V
            }), n.d(e, "D", function() {
                return q
            }), n.d(e, "E", function() {
                return z
            }), n.d(e, "h", function() {
                return G
            });
            var i = n(33),
                r = n.n(i),
                o = n(7),
                a = n(20),
                c = n(5),
                u = n(0),
                d = n(64),
                s = n(97),
                f = n(98),
                l = function(t, e) {
                    var n = new RegExp("".concat(e, "$"));
                    return t.replace(n, "")
                },
                g = r()(function() {
                    return Object(c.g)()
                }),
                m = function(t, e) {
                    return Boolean(t.find(function(t) {
                        return t[0] === e[0] && t[1] === e[1]
                    }))
                },
                v = function(t) {
                    return Object.keys(t).reduce(function(e, n) {
                        return t[n] && (e[n] = t[n]), e
                    }, {})
                },
                p = function(t) {
                    return function(t, e) {
                        var n = new RegExp("^".concat("dfp-ad--"));
                        return t.replace(n, "")
                    }(t)
                },
                b = function() {
                    return "GB" === g()
                },
                h = function() {
                    return ["US", "CA"].includes(g())
                },
                y = function() {
                    return ["AU", "NZ"].includes(g())
                },
                w = function() {
                    return !b() && !h() && !y()
                },
                j = function(t) {
                    return m(t, [300, 250])
                },
                O = function(t) {
                    return m(t, [300, 600])
                },
                A = function(t) {
                    return m(t, [728, 90])
                },
                T = function(t) {
                    return m(t, [970, 250])
                },
                k = function(t) {
                    return j(t) || O(t)
                },
                P = function(t) {
                    return m(t, [320, 50])
                },
                E = function(t) {
                    return A(t) || T(t)
                },
                I = function(t) {
                    return t.length > 0 ? t.reduce(function(t, e) {
                        return t[0] >= e[0] && t[1] >= e[1] ? t : e
                    }) : null
                },
                C = function() {
                    switch (Object(o.d)()) {
                        case "mobile":
                        case "mobileMedium":
                        case "mobileLandscape":
                            return "M";
                        case "phablet":
                        case "tablet":
                            return "T";
                        case "desktop":
                        case "leftCol":
                        case "wide":
                            return "D";
                        default:
                            return "M"
                    }
                },
                S = function(t, e) {
                    var n = Math.ceil(t),
                        i = Math.floor(e);
                    return Math.floor(Math.random() * (i - n + 1)) + n
                },
                D = function() {
                    return h()
                },
                L = function() {
                    return !h()
                },
                _ = function() {
                    return h()
                },
                F = function() {
                    return Object(d.d)(f.a, "variant")
                },
                R = function() {
                    return Object(d.d)(s.a, "variant")
                },
                x = function(t) {
                    return j(t)
                },
                B = function() {
                    return !h() && !y()
                },
                M = function() {
                    return !h() && !y() && u.a.get("switches.prebidOzone")
                },
                U = function() {
                    return y() || u.a.get("switches.prebidAppnexusUkRow") && !h() || !!Object(a.e)().and
                },
                N = function() {
                    return b() && (u.a.get("page.isDev", !0) || 1 === S(1, 10))
                },
                Y = function() {
                    return b() || w()
                },
                V = r()(function() {
                    return -1 !== window.location.hash.indexOf("#mobile-sticky") || u.a.get("switches.mobileStickyLeaderboard") && Object(o.m)({
                        min: "mobile",
                        max: "mobileLandscape"
                    }) && h() && "Article" === u.a.get("page.contentType")
                }),
                q = function(t) {
                    return l(t, "--mobile")
                },
                z = function(t) {
                    return l(t, "([2-9]|\\d{2,})")
                },
                G = function(t) {
                    return m(t, [160, 600])
                }
        }
    }
]);
//# sourceMappingURL=graun.article~facia~trail~youtube.js.map