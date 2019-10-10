this.DisneyVideo = this.DisneyVideo || {},
    function(e) {
        "use strict";
        var t = e.console,
            n = e.DisneyVideo,
            r = e._;
        n.MessageBus = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (r) try {
                        r.callback(e)
                    } catch (e) {
                        u(e)
                    }
                }
            }

            function a(e, t) {
                var n = {
                        name: e,
                        body: t
                    },
                    r = (s[e] || []).slice(0);
                i(n, r), r = (s["*"] || []).slice(0), i(n, r)
            }

            function o(e, t, n) {
                r.each(l, function(r) {
                    if (r !== n) try {
                        r.bus[r.functionName](e, t)
                    } catch (e) {}
                })
            }
            var s = {},
                c = this,
                l = {},
                u = function(n) {
                    var r = e.onerror;
                    t && t.error && t.error("MessageBus:: " + n.stack || "MessageBus:: " + n.toString()), r && r("MessageBus:: " + n.toString())
                };
            "undefined" == typeof n.MessageBus.Connections && (n.MessageBus.Connections = {}), this.addConnection = function(e, t, r) {
                if (!r) {
                    var i = e + "_" + Math.round(1e6 * Math.random()),
                        s = "DisneyVideo.MessageBus.Connections." + i,
                        u = i + "_primarySendMessage",
                        d = i + "_secondarySendMessage",
                        f = function(e, t) {
                            a(e, t), o(e, t, p)
                        },
                        h = {
                            id: e,
                            bus: c,
                            "function": f,
                            functionName: u,
                            uniqueId: i,
                            globalId: s
                        };
                    n.MessageBus.Connections[i] = {}, n.MessageBus.Connections[i][u] = f, c[u] = f;
                    var p = {
                        id: e,
                        bus: {
                            sendMessage: t.sendMessage,
                            addMessageListener: t.addMessageListener,
                            removeMessageListener: t.removeMessageListener,
                            addConnection: t.addConnection,
                            removeConnection: t.removeConnection
                        },
                        functionName: d,
                        uniqueId: i,
                        globalId: s
                    };
                    r = {
                        primary: h,
                        secondary: p
                    }, n.MessageBus.Connections[i].connection = r, l[e] = p;
                    try {
                        t.addConnection(e, c, r)
                    } catch (e) {}
                    p.bus = t
                }
            }, this.removeConnection = function(e) {
                var t = l[e];
                if (t) {
                    var r = n.MessageBus.Connections[t.uniqueId].connection;
                    c[r.primary.functionName] = null, n.MessageBus.Connections[t.uniqueId] = null, l[e] = null, t && t.bus && t.bus.removeConnection && t.bus.removeConnection(e)
                }
            }, this.sendMessage = function(e, t) {
                a(e, t), o(e, t)
            }, this.addMessageListener = function(e, t) {
                var n = {
                    name: e,
                    callback: t
                };
                s[e] || (s[e] = []), s[e].push(n)
            }, this.removeMessageListener = function(e, t) {
                for (var n = s[e] || [], r = 0; r < n.length; r++) {
                    var i = n[r];
                    i && i.name === e && i.callback === t && (n[r] = null)
                }
            }, this.destroy = function() {
                r.each(l, function(e) {
                    c.removeConnection(e)
                }), l = null, r.each(s, function(e) {
                    c.removeMessageListener(e.name, e.callback)
                }), s = null, c = null
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = e.jQuery,
            r = {
                newrelic: function() {
                    return "undefined" != typeof e.newrelic ? e.newrelic : null
                },
                addPageAction: function(e, t) {
                    var n = this.newrelic();
                    n && n.addPageAction(e, t)
                },
                addToTrace: function(e) {
                    var t = this.newrelic();
                    t && t.addToTrace(e)
                },
                createTraceObj: function(e, t, r, i, a) {
                    return t = t || (new Date).getTime(), n.extend({}, {
                        name: e,
                        start: t,
                        end: r,
                        origin: i,
                        type: a
                    })
                },
                noticeError: function(e) {
                    var t = this.newrelic();
                    t && t.noticeError(e)
                },
                setCustomAttribute: function(e, t) {
                    var n = this.newrelic();
                    n && n.setCustomAttribute(e, t)
                },
                customAttributes: {
                    bandwidth: "DisneyVideoBandwidth",
                    height: "DisneyVideoHeight",
                    playerName: "DisneyVideoPlayer",
                    playerVersion: "DisneyVideoPlayerVersion",
                    videoId: "DisneyVideoCoreId",
                    width: "DisneyVideoWidth"
                }
            },
            i = function() {
                return r
            };
        t.NewRelic = new i
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo;
        t.Capabilities = {
            MIN_FP_VERSION: [9, 0],
            isHTML5Capable: function() {
                return e.Modernizr.canvas
            },
            isMobileBrowser: function() {
                return e.navigator.userAgent.match(/(ipod|iphone|ipad|android|silk|iemobile)/i)
            },
            isiOSBrowser: function() {
                return e.navigator.userAgent.match(/(ipod|iphone|ipad)/i)
            },
            isOnlyFullscreenPlaybackCapable: function() {
                return e.navigator.userAgent.match(/(ipod|iphone)/i)
            },
            isAndroidBrowser: function() {
                return e.navigator.userAgent.match(/(android)/i)
            },
            isKindleBrowser: function() {
                return e.navigator.userAgent.match(/(kindle|silk)/i)
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = e.jQuery,
            r = e._;
        t.Video = function(e, i) {
            var a = this;
            n.extend(a, e, i), this.getCoreId = function() {
                return a.core_id || a.core_record_id || a.id
            }, this.hasCountryRestrictions = function() {
                return a.allowedCountries && a.allowedCountries.length && a.allowedCountries.length > 0
            }, this.isCountryAllowed = function(e) {
                return !a.allowedCountries || a.allowedCountries.length <= 0 || r.contains(a.allowedCountries, e)
            }, this.requiresDRM = function() {
                var e = ["progressive"],
                    n = ["mp4"],
                    r = 1220;
                t.Capabilities.isiOSBrowser() && (e.unshift("encrypted_hls"), n.push.apply(n, ["applehttp", "hls"]));
                var i = this.getFlavor(e, n, r);
                return !i
            }, this.getFlavor = function(e, t, i) {
                var o, s = a.flavors,
                    c = [];
                r.each(t, function(t) {
                    var i = r.filter(s, function(e) {
                        return e.format === t
                    }) || [];
                    i.sort(function(t, n) {
                        return r.difference(t.security_profile, n.security_profile).length > 0 && r.each(e, function(e) {
                            var i = r.contains(t.security_profile, e),
                                a = r.contains(n.security_profile, e);
                            if (i !== a) return i ? -1 : 1
                        }), -1
                    }), n.merge(c, i)
                });
                var l = r.filter(c, function(t) {
                    return !t.security_profile || t.security_profile.length <= 0 || r.intersection(e, t.security_profile).length > 0
                });
                if (0 !== l.length && (o = r.min(l, function(e) {
                        return Math.abs(e.width - i)
                    })), o && ("applehttp" === o.format || "hls" === o.format)) {
                    var u = r.filter(s, function(e) {
                        return e.url.indexOf("hls/master") > -1
                    });
                    o = u[0]
                }
                return o && o.url ? o : null
            }, this.getCaptions = function(e) {
                if (!a.captions || a.captions.length <= 0) return null;
                var t, n = r.filter(a.captions, function(t) {
                    return t.format === e
                });
                return t = n[0]
            }, this.hasCaptions = function() {
                return a && a.captions && !!a.captions.length
            }, this.hasFlavors = function() {
                return a && a.flavors && !!a.flavors.length
            }, this.isPlayable = function(e) {
                var n = a.getFlavor(e.profiles, e.formats, t.getIdealWidth());
                return !a.expired && a.hasFlavors() && null !== n
            }, this.getPoster = function() {
                return a.poster || a.promo || a.preview || a.thumb || ""
            }, this.getTitle = function() {
                return a.title
            }, this.getBadge = function() {
                return a.badge
            }, this.getDuration = function() {
                return a.duration
            }, this.isTotalEclips = function() {
                var e = !1;
                return !!this.hasFlavors() && (a.flavors.forEach(function(t) {
                    t && t.url && t.url.indexOf("totaleclips") !== -1 && (e = !0)
                }), e)
            }, this.getFlavorsBitrateDescending = function() {
                return a.flavors.sort(function(e, t) {
                    return e.bitrate && t.bitrate ? e.bitrate < t.bitrate ? 1 : e.bitrate > t.bitrate ? -1 : 0 : 0
                })
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = e.jQuery,
            r = e.document,
            i = null;
        t.BasePlayer = function() {
            function a(t) {
                var r, i, a;
                n.when(o("//tredir.go.com/capmon/GetDE/?set=j&param=countryisocode&param=state&param=connection")).done(function() {
                    r = e.countryisocode, i = e.state, a = e.connection || "broadband", t(r, i, a)
                })
            }

            function o(e) {
                return n.ajax({
                    url: e,
                    dataType: "script",
                    cache: !0
                })
            }

            function s() {
                var e = n.Deferred();
                return E && E.dependency ? E.dependency(e.resolve) : (O = !0, e.resolve()), e
            }

            function c() {
                return O
            }

            function l() {
                var e = n.Deferred();
                return E && E.video && E.video.hasCountryRestrictions() && E.geo.enabled ? E.geo.geoFunc(function(t) {
                    i = t, e.resolve()
                }) : e.resolve(), e
            }

            function u() {
                E.config.dependencies = E.config.dependencies || [], E.config.dependencies.push(s()), E.config.dependencies.push(l())
            }

            function d() {
                var e = n("#" + E.id),
                    t = E.video.getPoster(),
                    r = E.video.getTitle(),
                    i = E.video.getBadge(),
                    a = E.video.getDuration(),
                    o = E.video.posterSize ? " " + E.video.posterSize : "",
                    s = '<div class="overlay posterClick"><div class="posterControls"><button class="posterPlayButton"></button></div></div><div class="videoPoster' + o + '" style="background-image: url(\'' + t + "')\"></div>";
                i && (s += '<div class="badgeImage"><img src="' + i + '" class="badge"></div>'), E.config.showTitle && (s += '<div class="details"><h3>' + r + "</h3></div>"), E.config.showDuration && (s += '<div class="duration"><p>' + a + "</p></div>"), e.html(s), e.addClass("disneyVideo"), e.addClass("poster"), T = "poster", f(), E.messageBus.sendMessage("finishedEmbedPoster")
            }

            function f() {
                P = n("#" + E.id).children(".posterClick"), P.bind("click", p)
            }

            function h() {
                P && (P.unbind("click", p), P = null)
            }

            function p(e) {
                e.preventDefault(), E.controls.play()
            }

            function g() {
                E.adPattern.init(E);
                var e = n("#" + E.id);
                if (e.addClass("disneyVideo"), E.config.embedded && E.video.notEmbeddable) {
                    var t = "?cmp=Embed|vid|ExtEmbedRedir||||||||||";
                    E.embedError(E.config.translations.embedding_disabled + '<p><a href="' + E.video.href + t + '" target="_top">' + E.config.translations.watch_now + "</a>"), n("#" + E.id + " .player_error a").bind("click", function(e) {
                        var t = n(e.currentTarget).attr("href");
                        E.tracking.trackLink({
                            linkName: "embed/notEmbeddableError/" + E.video.slug + "-" + E.video.getCoreId(),
                            linkPosition: "embed/player_error",
                            href: t
                        })
                    })
                } else E.video.expired ? E.embedError(E.config.translations.video_expired) : !E.video.isCountryAllowed(i) && E.config.geo.enabled ? E.embedError(E.config.translations.country_disallowed) : (O = !0, E.embed(), E.config.autoPlay && E.config.autoPlay_mute && E.controls.mute());
                E.messageBus.sendMessage("finishedEmbedPlayer")
            }

            function m() {
                E.config.clickToPlay && "poster" === T && (E.config.autoPlay = !0, E.config.autoPlay_mute = !1, A(), E.embedPlayer())
            }

            function v() {}

            function b() {
                E.config.clickToPlay && "poster" !== T && (E.cleanupListeners(), E.embedPoster())
            }

            function y() {}

            function _(e) {
                e || (e = r.getElementById(E.id)), e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
            }

            function w(e) {
                if (e && t.Capabilities.isiOSBrowser()) try {
                    e.webkitExitFullscreen()
                } catch (e) {} else r.exitFullscreen ? r.exitFullscreen() : r.msExitFullscreen ? r.msExitFullscreen() : r.mozCancelFullScreen ? r.mozCancelFullScreen() : r.webkitExitFullscreen && r.webkitExitFullscreen()
            }

            function k() {
                r.fullScreenElement && null !== r.fullScreenElement || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement ? E.controls.exitFullscreen() : E.controls.enterFullscreen()
            }

            function S() {
                E.messageBus.addMessageListener("play", m), E.messageBus.addMessageListener("pause", v), E.messageBus.addMessageListener("stop", b), E.messageBus.addMessageListener("resume", y)
            }

            function x() {
                E.messageBus.removeMessageListener("play", m), E.messageBus.removeMessageListener("pause", v), E.messageBus.removeMessageListener("stop", b), E.messageBus.removeMessageListener("resume", y)
            }

            function A() {
                T = "", n("#" + E.id).removeClass("poster")
            }

            function C(t) {
                var n = /(?:\?|^|&)player=([0-9,a-zA-Z]*)/,
                    r = n.exec(e.location.search),
                    i = r ? r[1] : null,
                    a = /(?:\?|^|&)kpid=([0-9a-f]+)/,
                    o = a.exec(e.location.search);
                o && (t.kPartnerId = o[1]);
                var s = /(?:\?|^|&)kuiconfid=([0-9a-f]+)/,
                    c = s.exec(e.location.search);
                c && (t.kUiconfId = c[1]);
                var l = new RegExp("[?&]tagId(=([^&#]*)|&|#|$)"),
                    u = l.exec(e.location.search);
                u && (t.video.externals[0].data.tags = u[2]);
                var d = new RegExp("[?&]entryId(=([^&#]*)|&|#|$)"),
                    f = d.exec(e.location.search);
                f && (t.video.externals[0].data_id = f[2]), i && (t.playerType = i)
            }
            var P, T = "",
                E = this,
                O = !1;
            E.extendUnlessPresent = function(e, t) {
                n.each(t, function(n) {
                    void 0 === e[n] && (e[n] = t[n])
                })
            }, E.embedPoster = function() {
                var e = n.when.apply(n, E.config.dependencies);
                return e.done(d), e.promise()
            }, E.embedError = function(e) {
                var t = n("#" + E.id);
                t.html('<div class="player_error">' + e + "</div>"), E.type = "error"
            }, E.embedPlayer = function() {
                var e = n.when.apply(n, E.config.dependencies);
                return e.done(g), e.promise()
            };
            var I = {
                    autoPlay: !1,
                    continuousPlay: !1,
                    clickToPlay: !1,
                    showTitle: !1,
                    addBaseDependencies: u
                },
                R = {
                    enabled: !0
                };
            I.tracking = R;
            var L = {
                enabled: !0,
                geoFunc: a
            };
            I.geo = L, E.dependenciesDone = c, E.config = I, E.config.translations = {
                no_javascript: "Uh, oh! It seems JavaScript is disabled in your internet browser. Please enable JavaScript if you would like to watch videos on this site.",
                video_expired: "Sorry, this video is no longer available.",
                dependencies_not_met: "Uh, oh! It appears your internet browser is out of date. Please upgrade your internet browser or update Adobe Flash Player.",
                get_flash_player: "Get Adobe Flash Player",
                embedding_disabled: "Sorry, but this video can only be played on Disney.com",
                country_disallowed: "We're sorry, this video cannot be played in your region.",
                device_not_supported: "Sorry, but your device does not support the playback of this video.",
                video_not_found: "Uh, oh! We can't find this video right now. Please try again later!",
                advertisement: "Advertisement",
                skip_ad: "Skip Ad",
                watermark_text: "Watch on Disney.com"
            }, E.ads = {
                enabled: !0
            }, E.controls = {
                play: function() {
                    E.messageBus.sendMessage("play")
                },
                pause: function() {
                    E.messageBus.sendMessage("pause")
                },
                togglePlayPause: function() {
                    E.messageBus.sendMessage("togglePlayPause")
                },
                replay: function() {
                    E.messageBus.sendMessage("replay")
                },
                scrub: function(e) {
                    E.messageBus.sendMessage("scrub", e)
                },
                stop: function() {
                    E.messageBus.sendMessage("stop")
                },
                enterFullscreen: _,
                exitFullscreen: w,
                toggleFullscreen: k
            }, E.init = function(e, r) {
                e && (E.id = e, t.Players[E.id] = {}, C(r), E.config = n.extend(!0, E.config, r), E.ads = n.extend(E.ads, r.ads), E.tracking = n.extend(E.config.tracking, r.tracking), E.geo = n.extend(E.config.geo, r.geo), S())
            }, E.cleanupListeners = function() {}, E.destroy = function() {
                E.cleanupListeners(), x(), A(), h(), t.Players[E.id] = null;
                var e = n("#" + E.id);
                E.messageBus && (E.messageBus.destroy(), E.messageBus = null), E.config = null, E.controls = null, E.ads = null, E.info = null, E.video = null, E = null, e.empty()
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = e.document,
            r = e.$,
            i = e._;
        t.Accessibility = function(t) {
            function a(e) {
                e.preventDefault(), r("#" + t.id).mousemove()
            }

            function o(e) {
                if (d[e.which] = !0, 1 === i.size(d) && u.indexOf(e.which) < 0) switch (e.which) {
                    case l.SPACEBARKEY:
                        t.controls.togglePlayPause(), a(e);
                        break;
                    case l.UPARROWKEY:
                        t.controls.mute(!1), a(e);
                        break;
                    case l.DOWNARROWKEY:
                        t.controls.mute(), a(e);
                        break;
                    case l.LEFTARROWKEY:
                        t.controls.scrub(-5), a(e);
                        break;
                    case l.RIGHTARROWKEY:
                        t.controls.scrub(5), a(e);
                        break;
                    case l.FKEY:
                        t.controls.enterFullscreen(), a(e);
                        break;
                    case l.ESCKEY:
                        t.controls.exitFullscreen(), a(e)
                }
            }

            function s(e) {
                if (d[e.which] && 1 === i.size(d) && u.indexOf(e.which) < 0) switch (e.which) {
                    case l.SPACEBARKEY:
                    case l.UPARROWKEY:
                    case l.DOWNARROWKEY:
                    case l.LEFTARROWKEY:
                    case l.RIGHTARROWKEY:
                    case l.FKEY:
                    case l.TKEY:
                    case l.ESCKEY:
                        a(e)
                }
                delete d[e.which]
            }

            function c() {
                d = {}
            }
            var l = {
                    SPACEBARKEY: 32,
                    UPARROWKEY: 38,
                    DOWNARROWKEY: 40,
                    LEFTARROWKEY: 37,
                    RIGHTARROWKEY: 39,
                    FKEY: 70,
                    TKEY: 67,
                    ESCKEY: 27,
                    ENTERKEY: 13
                },
                u = [],
                d = {};
            this.setupKeyboardControls = function() {
                return r("#" + t.id).on("keydown", o), r("#" + t.id).on("keyup", s), r(e.window).on("focusout", c), {
                    disable: function() {
                        i.each(arguments, function(e) {
                            l.hasOwnProperty(e) ? u.push(l[e]) : e === parseInt(e, 10) && u.push(e)
                        })
                    }
                }
            }, this.cleanupKeyboardControls = function() {
                d = {}, u = [], r("#" + t.id).off("keydown", o), r("#" + t.id).off("keyup", s), r(e.window).off("focusout", c)
            }, this.using = function(e) {
                function i() {
                    c = r(n.activeElement), c.addClass("hover"), r("#" + t.id).mousemove()
                }

                function a() {
                    c && (c.removeClass("hover"), c = null)
                }

                function o() {
                    r("#" + t.id).focus(), a()
                }

                function s(e) {
                    d[l.ENTERKEY] ? r("#" + t.id).mousemove() : e.data.handler()
                }
                if (e) {
                    var c;
                    return {
                        onFocusDoHover: function() {
                            return e.on("focusin", i), e.on("focusout", a), this
                        },
                        cleanupOnFocusDoHover: function() {
                            return e.off("focusin", i), e.off("focusout", a), this
                        },
                        removeFocusOn: function(t) {
                            return e.on(t, {
                                handler: o
                            }, s), this
                        },
                        cleanupRemoveFocusOn: function(t) {
                            return e.off(t, s), this
                        }
                    }
                }
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = e.Disney;
        t.language = n.language || function(e) {
            var t = e && e[0],
                n = t && t.replace(/-.*$/, "");
            return n || "en"
        }(n.locales)
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = e.Disney,
            r = e.jQuery,
            i = e._,
            a = "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
            o = 6;
        t.KalturaV2VideoPlayer = function(t) {
            function s(e) {
                var t = "https://cdnapisec.kaltura.com/p/" + h() + "/sp/" + h() + "00/embedIframeJs/uiconf_id/" + p() + "/partner_id/" + h();
                r.when(g(t)).then(function() {
                    d(), e()
                })
            }

            function c(e) {
                r.ajax(a, {
                    dataType: "script",
                    cache: !0,
                    success: function() {
                        l(e)
                    },
                    error: function() {
                        u(e)
                    },
                    timeout: 2e3
                })
            }

            function l(e) {
                Y || (Y = !0, e())
            }

            function u(e) {
                Y || e()
            }

            function d() {
                var n;
                switch (t.video.hasFlavors() && (n = i.contains(t.video.flavors[0].security_profile, "hls_only_android") ? "android" : i.contains(t.video.flavors[0].security_profile, "hls_only_all") ? "all" : void 0), n) {
                    case "android":
                        e.mw.setConfig("Kaltura.LeadHLSOnAndroid", !0);
                        break;
                    case "all":
                        e.mw.setConfig("LeadWithHLSOnFlash", !0), e.mw.setConfig("Kaltura.LeadHLSOnAndroid", !0);
                        break;
                    default:
                        e.mw.setConfig("Kaltura.LeadWithHTML5", !0)
                }
            }

            function f() {
                for (var e, n = t.video, r = 0; r < n.externals.length; r++) "kaltura" === n.externals[r].source && (e = n.externals[r]);
                return e
            }

            function h() {
                return t.config.kPartnerId ? t.config.kPartnerId : f().account
            }

            function p() {
                if (t.config.kUiconfId) return t.config.kUiconfId;
                var e = "platform",
                    n = t.config.kaltura.adSystems,
                    r = n.noads[e];
                return t.video && t.video.ads && i.each(n, function(n, a, o) {
                    i.isUndefined(t.video.ads[a]) || (r = o[a][e])
                }), r
            }

            function g(e) {
                return r.ajax({
                    url: e,
                    dataType: "script",
                    cache: !0
                })
            }

            function m() {
                if (t.config.kalturaHostedTag) return !0;
                if (t.config.video) {
                    var e = t.config.video.externals[0],
                        n = e.data && e.data.tags && e.data.tags.indexOf("kaltura-hosted") > -1,
                        r = e.source && e.source.indexOf("kaltura") > -1;
                    if (n || r) return !0
                }
                return !1
            }

            function v() {
                var e = {},
                    r = t.video && t.video.ads ? t.video.ads.dfp : null;
                if (r) {
                    var i = t.video.ads.enabled && r.adTagUrl ? r.adTagUrl : null,
                        a = r.companion || null,
                        o = n.locales || [],
                        s = o[0] || "en";
                    e = {
                        localizationCode: s,
                        doubleClick: {
                            disableCompanionAds: !1,
                            htmlCompanions: a,
                            adsManagerLoadedTimeout: 5e3,
                            plugin: !0,
                            useExternalImaLib: !0,
                            adTagUrl: i
                        }
                    }
                } else e = {
                    doubleClick: {
                        plugin: !1
                    }
                };
                return e
            }

            function b() {
                var i = n.locales || [],
                    a = i[0] || "en",
                    o = {
                        externalInterfaceDisabled: !1,
                        loop: !!t.config.loop,
                        "EmbedPlayer.ForceNativeFullscreenOnClipDone": !!t.config.loop,
                        metadataProfileId: t.config.kaltura && t.config.kaltura.metadataProfileId ? t.config.kaltura.metadataProfileId : null,
                        autoPlay: t.config.autoPlay || !1,
                        autoMute: t.config.autoPlay_mute || !1,
                        "controlBarContainer.plugin": !t.config.hideControlBarContainer,
                        "topBarContainer.plugin": !t.config.hideTopBarContainer,
                        "largePlayBtn.plugin": !t.config.hideLargePlayBtn,
                        localizationCode: a,
                        strings: {
                            "mwe-embedplayer-share": t.config.translations.share
                        }
                    },
                    s = {
                        IframeCustomPluginCss1: t.config.kalturaSkinUrl || void 0,
                        IframeCustomPluginCss2: t.config.kalturaSkinCssOverridesUrl ? t.config.kalturaSkinCssOverridesUrl : void 0,
                        IframeCustomPluginJs1: t.config.kalturaSkinJsUrl ? t.config.kalturaSkinJsUrl : void 0
                    },
                    c = {
                        LeadWithHLSOnJs: !0,
                        hlsjs: {
                            plugin: !0
                        }
                    },
                    l = {
                        closedCaptions: {
                            plugin: !0,
                            hideWhenEmpty: !0
                        }
                    },
                    u = {
                        "accessibility-plugin": {
                            plugin: !0,
                            iframeHTML5Js: t.config.accessibilityPluginUrl || void 0
                        }
                    },
                    d = {
                        titleLabel: {
                            plugin: !t.video.hideTitle,
                            align: "left",
                            text: t.video.getTitle()
                        }
                    },
                    g = {
                        thumbnailUrl: t.video.getPoster()
                    },
                    b = {};
                if (t.config.spinnerPlugin) {
                    var _ = t.config.spinnerPlugin;
                    b[_.name] = {
                        plugin: !(!_.jsUrl && !_.cssUrl),
                        iframeHTML5Js: _.jsUrl || null,
                        iframeHTML5Css: _.cssUrl || null
                    }
                }
                var w, k, S = {},
                    x = {},
                    A = t.video.isTotalEclips();
                if (J = m(), J || A) {
                    var C = t.config.sharePluginUrl || void 0,
                        P = t.config.logoPluginUrl || void 0;
                    t.config.embedded && (t.video.hideShare = !0), t.video.share = {
                        id: t.video.getCoreId() || "",
                        href: t.video.href || "",
                        thumb: t.video.thumb || "",
                        title: t.video.title || "",
                        source: t.video.href || "",
                        embedURL: t.video.embedUrl || ""
                    }, w = {
                        name: "videoplayer-skin-share-plugin",
                        cssUrl: !t.video.hideShare && s.IframeCustomPluginCss1,
                        jsUrl: !t.video.hideShare && C
                    }, S[w.name] = {
                        plugin: !!w.jsUrl,
                        iframeHTML5Js: C,
                        iframeHTML5Css: w.cssUrl || null
                    }, k = {
                        name: "videoplayer-skin-logo-plugin",
                        cssUrl: !t.video.hideLogo && s.IframeCustomPluginCss1,
                        jsUrl: !t.video.hideLogo && P,
                        alignRight: !t.video.hasCaptions()
                    }, x[k.name] = {
                        plugin: !(!k.jsUrl && !k.cssUrl),
                        iframeHTML5Js: P,
                        iframeHTML5Css: k.cssUrl ? k.cssUrl : null,
                        alignRight: k.alignRight
                    }, r.extend(o, b), r.extend(o, S), r.extend(o, x), r.extend(o, g), r.extend(o, d), r.extend(o, l), r.extend(o, u)
                }
                r.extend(o, s), (Z || J) && r.extend(o, c);
                var T = v();
                if (r.extend(o, T), A) {
                    var E = t.video.getFlavorsBitrateDescending(),
                        O = E.map(function(e) {
                            return {
                                src: e.url,
                                type: "video/" + e.format
                            }
                        });
                    o.mediaProxy = {
                        entry: {
                            thumbnailUrl: t.video.thumb
                        },
                        sources: O
                    }
                }
                var I = {
                    targetId: t.id + "_playerElement",
                    wid: "_" + h(),
                    uiconf_id: p(),
                    flashvars: o,
                    cache_st: 1382978527,
                    readyCallback: y
                };
                A || (I.entry_id = f().data_id), e.kWidget.embed(I)
            }

            function y(e) {
                G = r("#" + e).get(0), _()
            }

            function _() {
                t.messageBus.addMessageListener("scrub", x), t.messageBus.addMessageListener("replay", P), t.messageBus.addMessageListener("pause", k), t.messageBus.addMessageListener("play", S), G.addJsListener("adStart", O), G.addJsListener("adErrorEvent", I), G.addJsListener("adEnd", R), G.addJsListener("onAdPlay", E), G.addJsListener("changeMedia", D), G.addJsListener("closeFullScreen", L), G.addJsListener("mediaReady", j), G.addJsListener("doPlay", F), G.addJsListener("doPause", U), G.addJsListener("doStop", B), G.addJsListener("openFullScreen", M), G.addJsListener("playerPlayEnd", q), G.addJsListener("playerSeekEnd", z), G.addJsListener("playerSeekStart", H), G.addJsListener("playerUpdatePlayhead", N), G.addJsListener("volumeChanged", W), G.addJsListener("shareVideo", A), G.addJsListener("videoHome", C), $ = !0
            }

            function w() {
                $ && (t.messageBus.removeMessageListener("scrub", x), t.messageBus.removeMessageListener("replay", P), t.messageBus.removeMessageListener("pause", k), t.messageBus.removeMessageListener("play", S), G.removeJsListener("adStart", O), G.removeJsListener("adErrorEvent", I), G.removeJsListener("adEnd", R), G.removeJsListener("onAdPlay", E), G.removeJsListener("changeMedia", D), G.removeJsListener("closeFullScreen", L), G.removeJsListener("mediaReady", j), G.removeJsListener("doPlay", F), G.removeJsListener("doPause", U), G.removeJsListener("doStop", B), G.removeJsListener("openFullScreen", M), G.removeJsListener("playerPlayEnd", q), G.removeJsListener("playerSeekEnd", z), G.removeJsListener("playerSeekStart", H), G.removeJsListener("playerUpdatePlayhead", N), G.removeJsListener("volumeChanged", W), G.removeJsListener("shareVideo", A), G.removeJsListener("videoHome", C))
            }

            function k() {
                X && G ? G.sendNotification("doStop") : G && G.sendNotification("doPause")
            }

            function S() {
                G && G.sendNotification("doPlay")
            }

            function x(e) {
                G.sendNotification(t.info.getPosition() + parseInt(e.body, 10))
            }

            function A() {
                if (t.video) {
                    t.controls.exitFullscreen();
                    var e = t.video.href || t.video.share.href,
                        r = t.video.thumb || t.video.share.thumb,
                        i = t.video.title || t.video.share.title,
                        a = t.video.embedUrl || t.video.share.embedURL;
                    n.AgeGate.triggerSocialAgeGate({
                        href: e || "",
                        thumb: r || "",
                        title: i || "",
                        source: e || "",
                        isSocial: !0,
                        embedURL: a || ""
                    })
                } else t.video = t.config.video || {}
            }

            function C() {
                e.window.location.href = "https://video.disney.com"
            }

            function P() {
                ee ? t.loadVideo() : (G.sendNotification("replayMH"), G.sendNotification("doPlay"))
            }

            function T() {
                return Math.round(t.info.getPosition() / t.info.getDuration() * 100)
            }

            function E(e, t, n, i, a) {
                if (J) {
                    var s = G.getElementsByTagName("iframe")[0];
                    a > o ? (r(s).contents().find(".ad-notice-label").show(), G.setKDPAttribute("controlBarContainer", "visible", !0), G.setKDPAttribute("titleLabel", "visible", !0)) : (r(s).contents().find(".ad-notice-label").hide(), G.setKDPAttribute("controlBarContainer", "visible", !1), G.setKDPAttribute("titleLabel", "visible", !1))
                }
            }

            function O() {
                t.messageBus.sendMessage("adStart"), X = !0
            }

            function I() {
                t.messageBus.sendMessage("adOpportunityEnd"), X = !1, J && (G.setKDPAttribute("controlBarContainer", "visible", !0), G.setKDPAttribute("titleLabel", "visible", !0))
            }

            function R() {
                X && t.messageBus.sendMessage("adEnd"), t.messageBus.sendMessage("adOpportunityEnd"), X = !1, J && (G.setKDPAttribute("controlBarContainer", "visible", !0), G.setKDPAttribute("titleLabel", "visible", !0))
            }

            function L() {
                t.messageBus.sendMessage("exitedFullscreen")
            }

            function M() {
                t.messageBus.sendMessage("enteredFullscreen")
            }

            function D() {
                var e = t.video && t.video.ads ? t.video.ads.dfp : null;
                e && t.video.ads.enabled && t.messageBus.sendMessage("adOpportunityStart"), t.messageBus.sendMessage("loadURI")
            }

            function j() {
                t.messageBus.sendMessage("mediaReady")
            }

            function F() {
                K = !1, t.messageBus.sendMessage("played")
            }

            function N() {
                t.messageBus.sendMessage("progress")
            }

            function B() {
                t.messageBus.sendMessage("doStop")
            }

            function U() {
                T(t) >= 100 || K || t.messageBus.sendMessage("paused")
            }

            function q() {
                K = !0, t.messageBus.sendMessage("playComplete")
            }

            function z() {
                t.messageBus.sendMessage("seekEnd")
            }

            function H() {
                t.messageBus.sendMessage("seekStart")
            }

            function W() {
                t.messageBus.sendMessage("volumeChange")
            }

            function V() {
                t.controls = te
            }
            var G, $ = !1,
                K = !1,
                X = !1,
                Y = !1,
                J = !1;
            t.config.geo.enabled = !1, t.geo = r.extend(t.geo, t.config.geo), t.config.tracking.enabled = !0, t.tracking = r.extend(t.tracking, t.config.tracking);
            var Q = new RegExp("[?&]hlsjs(=([^&#]*)|&|#|$)"),
                Z = t.config.useHls ? t.config.useHls : Q.exec(e.location.search),
                ee = e.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
            t.embed = function() {
                t.writeEmbed(), b()
            }, t.writeEmbed = function() {
                var e = r("#" + t.id);
                e.html('<div id="' + t.id + '_playerElement" class="player-container"></div>')
            }, t.dependency = function(e) {
                J = m();
                var n = r.Deferred(),
                    i = r.Deferred();
                r.when(n, i).done(e), s(n.resolve), t.ads.enabled && !Y && J ? c(i.resolve) : i.resolve()
            }, t.cleanupListeners = function() {
                w(), e.kWidget && e.kWidget.destroy(t.id + "_playerElement"), V()
            }, t.loadVideo = function() {
                if (X) {
                    var e = G.getElementsByTagName("iframe")[0];
                    r(e).contents().find(".mwPlayerContainer").each(function() {
                        r(this).removeClass("adplay-state")
                    }), X = !1
                }
                if (J) {
                    G.setKDPAttribute("titleLabel", "text", t.video.getTitle());
                    var n = t.video && t.video.ads && t.video.ads.dfp && t.video.ads.dfp.adTagUrl && t.video.ads.enabled ? t.video.ads.dfp.adTagUrl : "";
                    G.setKDPAttribute("doubleClick", "adTagUrl", n);
                    var i = !t.video.hasCaptions();
                    G.setKDPAttribute("videoplayer-skin-logo-plugin", "alignRight", i), t.video.share || (t.video.share = {
                        id: t.video.getCoreId(),
                        href: t.video.url,
                        thumb: t.video.thumbnail_image_fog,
                        title: t.video.title,
                        source: t.video.url,
                        embedURL: t.video.embedUrl
                    }), G.setKDPAttribute("mediaProxy.entry", "thumbnailUrl", t.video.getPoster())
                }
                G.sendNotification("changeMedia", {
                    entryId: f().data_id
                })
            };
            var te = t.controls;
            t.controls = r.extend({}, t.controls, {
                getVolume: function() {
                    return G ? G.evaluate("{video.volume}") : 0
                },
                setVolume: function(e) {
                    return G && G.sendNotification("changeVolume", e / 100), t.controls.getVolume()
                },
                mute: function() {
                    return t.controls.setVolume(0)
                },
                hide: function() {
                    r("#" + t.id).css("margin-right", "2000px")
                },
                show: function() {
                    r("#" + t.id).css("margin-right", "0")
                },
                enterFullscreen: function() {
                    G && G.sendNotification("openFullScreen")
                },
                exitFullscreen: function() {
                    G && G.sendNotification("closeFullScreen")
                }
            }), t.info = {
                isAd: function() {
                    return X
                },
                getPosition: function() {
                    var e = G.evaluate("{video.player.currentTime}");
                    return e
                },
                getDuration: function() {
                    return G.evaluate("{duration}")
                },
                getPlayerName: function() {
                    return "kaltura"
                }
            }
        }
    }(this), /*! jshint:false */ ! function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("KalturaUi", [], t) : "object" == typeof exports ? exports.KalturaUi = t() : (e.DisneyVideo = e.DisneyVideo || {}, e.DisneyVideo.KalturaUi = t())
    }("undefined" != typeof self ? self : this, function() {
        return function(e) {
            function t(e) {
                var t = P[e];
                if (!t) return c;
                var r = function(n) {
                        return t.hot.active ? (P[n] ? -1 === P[n].parents.indexOf(e) && P[n].parents.push(e) : (b = [e], u = n), -1 === t.children.indexOf(n) && t.children.push(n)) : (console.warn("[HMR] unexpected require(" + n + ") from disposed module " + e), b = []), c(n)
                    },
                    i = function(e) {
                        return {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return c[e]
                            },
                            set: function(t) {
                                c[e] = t
                            }
                        }
                    };
                for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && "e" !== s && Object.defineProperty(r, s, i(s));
                return r.e = function(e) {
                    function t() {
                        S--, "prepare" === w && (x[e] || a(e), 0 === S && 0 === k && o())
                    }
                    return "ready" === w && n("prepare"), S++, c.e(e).then(t, function(e) {
                        throw t(), e
                    })
                }, r
            }

            function n(e) {
                w = e;
                for (var t = 0; t < _.length; t++) _[t].call(null, e)
            }

            function r(e) {
                return +e + "" === e ? +e : e
            }

            function i(e) {
                if ("idle" !== w) throw new Error("check() is only allowed in idle status");
                return p = e, n("check"), (t = m, t = t || 1e4, new Promise(function(e, n) {
                    if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
                    try {
                        var r = new XMLHttpRequest,
                            i = c.p + "" + g + ".hot-update.json";
                        r.open("GET", i, !0), r.timeout = t, r.send(null)
                    } catch (e) {
                        return n(e)
                    }
                    r.onreadystatechange = function() {
                        if (4 === r.readyState)
                            if (0 === r.status) n(new Error("Manifest request to " + i + " timed out."));
                            else if (404 === r.status) e();
                        else if (200 !== r.status && 304 !== r.status) n(new Error("Manifest request to " + i + " failed."));
                        else {
                            try {
                                var t = JSON.parse(r.responseText)
                            } catch (e) {
                                return void n(e)
                            }
                            e(t)
                        }
                    }
                })).then(function(e) {
                    if (!e) return n("idle"), null;
                    A = {}, x = {}, C = e.c, h = e.h, n("prepare");
                    var t = new Promise(function(e, t) {
                        d = {
                            resolve: e,
                            reject: t
                        }
                    });
                    return f = {}, a(0), "prepare" === w && 0 === S && 0 === k && o(), t
                });
                var t
            }

            function a(e) {
                C[e] ? (A[e] = !0, k++, function(e) {
                    var t = document.getElementsByTagName("head")[0],
                        n = document.createElement("script");
                    n.charset = "utf-8", n.src = c.p + "" + e + "." + g + ".hot-update.js", t.appendChild(n)
                }(e)) : x[e] = !0
            }

            function o() {
                n("ready");
                var e = d;
                if (d = null, e)
                    if (p) Promise.resolve().then(function() {
                        return s(p)
                    }).then(function(t) {
                        e.resolve(t)
                    }, function(t) {
                        e.reject(t)
                    });
                    else {
                        var t = [];
                        for (var i in f) Object.prototype.hasOwnProperty.call(f, i) && t.push(r(i));
                        e.resolve(t)
                    }
            }

            function s(t) {
                function i(e) {
                    for (var t = [e], n = {}, r = t.slice().map(function(e) {
                            return {
                                chain: [e],
                                id: e
                            }
                        }); r.length > 0;) {
                        var i = r.pop(),
                            o = i.id,
                            s = i.chain;
                        if ((u = P[o]) && !u.hot._selfAccepted) {
                            if (u.hot._selfDeclined) return {
                                type: "self-declined",
                                chain: s,
                                moduleId: o
                            };
                            if (u.hot._main) return {
                                type: "unaccepted",
                                chain: s,
                                moduleId: o
                            };
                            for (var c = 0; c < u.parents.length; c++) {
                                var l = u.parents[c],
                                    d = P[l];
                                if (d) {
                                    if (d.hot._declinedDependencies[o]) return {
                                        type: "declined",
                                        chain: s.concat([l]),
                                        moduleId: o,
                                        parentId: l
                                    }; - 1 === t.indexOf(l) && (d.hot._acceptedDependencies[o] ? (n[l] || (n[l] = []), a(n[l], [o])) : (delete n[l], t.push(l), r.push({
                                        chain: s.concat([l]),
                                        id: l
                                    })))
                                }
                            }
                        }
                    }
                    return {
                        type: "accepted",
                        moduleId: e,
                        outdatedModules: t,
                        outdatedDependencies: n
                    }
                }

                function a(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n]; - 1 === e.indexOf(r) && e.push(r)
                    }
                }
                if ("ready" !== w) throw new Error("apply() is only allowed in ready status");
                var o, s, l, u, d;
                t = t || {};
                var p = {},
                    m = [],
                    y = {},
                    _ = function() {
                        console.warn("[HMR] unexpected require(" + S.moduleId + ") to disposed module")
                    };
                for (var k in f)
                    if (Object.prototype.hasOwnProperty.call(f, k)) {
                        var S;
                        d = r(k);
                        var x = !1,
                            A = !1,
                            T = !1,
                            E = "";
                        switch ((S = f[k] ? i(d) : {
                            type: "disposed",
                            moduleId: k
                        }).chain && (E = "\nUpdate propagation: " + S.chain.join(" -> ")), S.type) {
                            case "self-declined":
                                t.onDeclined && t.onDeclined(S), t.ignoreDeclined || (x = new Error("Aborted because of self decline: " + S.moduleId + E));
                                break;
                            case "declined":
                                t.onDeclined && t.onDeclined(S), t.ignoreDeclined || (x = new Error("Aborted because of declined dependency: " + S.moduleId + " in " + S.parentId + E));
                                break;
                            case "unaccepted":
                                t.onUnaccepted && t.onUnaccepted(S), t.ignoreUnaccepted || (x = new Error("Aborted because " + d + " is not accepted" + E));
                                break;
                            case "accepted":
                                t.onAccepted && t.onAccepted(S), A = !0;
                                break;
                            case "disposed":
                                t.onDisposed && t.onDisposed(S), T = !0;
                                break;
                            default:
                                throw new Error("Unexception type " + S.type)
                        }
                        if (x) return n("abort"), Promise.reject(x);
                        if (A)
                            for (d in y[d] = f[d], a(m, S.outdatedModules), S.outdatedDependencies) Object.prototype.hasOwnProperty.call(S.outdatedDependencies, d) && (p[d] || (p[d] = []), a(p[d], S.outdatedDependencies[d]));
                        T && (a(m, [S.moduleId]), y[d] = _)
                    }
                var O, I = [];
                for (s = 0; s < m.length; s++) d = m[s], P[d] && P[d].hot._selfAccepted && I.push({
                    module: d,
                    errorHandler: P[d].hot._selfAccepted
                });
                n("dispose"), Object.keys(C).forEach(function(e) {
                    !1 === C[e] && function(e) {
                        delete installedChunks[e]
                    }(e)
                });
                for (var R, L, M = m.slice(); M.length > 0;)
                    if (d = M.pop(), u = P[d]) {
                        var D = {},
                            j = u.hot._disposeHandlers;
                        for (l = 0; l < j.length; l++)(o = j[l])(D);
                        for (v[d] = D, u.hot.active = !1, delete P[d], delete p[d], l = 0; l < u.children.length; l++) {
                            var F = P[u.children[l]];
                            F && (O = F.parents.indexOf(d)) >= 0 && F.parents.splice(O, 1)
                        }
                    }
                for (d in p)
                    if (Object.prototype.hasOwnProperty.call(p, d) && (u = P[d]))
                        for (L = p[d], l = 0; l < L.length; l++) R = L[l], (O = u.children.indexOf(R)) >= 0 && u.children.splice(O, 1);
                for (d in n("apply"), g = h, y) Object.prototype.hasOwnProperty.call(y, d) && (e[d] = y[d]);
                var N = null;
                for (d in p)
                    if (Object.prototype.hasOwnProperty.call(p, d) && (u = P[d])) {
                        L = p[d];
                        var B = [];
                        for (s = 0; s < L.length; s++)
                            if (R = L[s], o = u.hot._acceptedDependencies[R]) {
                                if (-1 !== B.indexOf(o)) continue;
                                B.push(o)
                            }
                        for (s = 0; s < B.length; s++) {
                            o = B[s];
                            try {
                                o(L)
                            } catch (e) {
                                t.onErrored && t.onErrored({
                                    type: "accept-errored",
                                    moduleId: d,
                                    dependencyId: L[s],
                                    error: e
                                }), t.ignoreErrored || N || (N = e)
                            }
                        }
                    }
                for (s = 0; s < I.length; s++) {
                    var U = I[s];
                    d = U.module, b = [d];
                    try {
                        c(d)
                    } catch (e) {
                        if ("function" == typeof U.errorHandler) try {
                            U.errorHandler(e)
                        } catch (n) {
                            t.onErrored && t.onErrored({
                                type: "self-accept-error-handler-errored",
                                moduleId: d,
                                error: n,
                                originalError: e
                            }), t.ignoreErrored || N || (N = n), N || (N = e)
                        } else t.onErrored && t.onErrored({
                            type: "self-accept-errored",
                            moduleId: d,
                            error: e
                        }), t.ignoreErrored || N || (N = e)
                    }
                }
                return N ? (n("fail"), Promise.reject(N)) : (n("idle"), new Promise(function(e) {
                    e(m)
                }))
            }

            function c(n) {
                if (P[n]) return P[n].exports;
                var r = P[n] = {
                    i: n,
                    l: !1,
                    exports: {},
                    hot: function(e) {
                        var t = {
                            _acceptedDependencies: {},
                            _declinedDependencies: {},
                            _selfAccepted: !1,
                            _selfDeclined: !1,
                            _disposeHandlers: [],
                            _main: u !== e,
                            active: !0,
                            accept: function(e, n) {
                                if (void 0 === e) t._selfAccepted = !0;
                                else if ("function" == typeof e) t._selfAccepted = e;
                                else if ("object" == typeof e)
                                    for (var r = 0; r < e.length; r++) t._acceptedDependencies[e[r]] = n || function() {};
                                else t._acceptedDependencies[e] = n || function() {}
                            },
                            decline: function(e) {
                                if (void 0 === e) t._selfDeclined = !0;
                                else if ("object" == typeof e)
                                    for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
                                else t._declinedDependencies[e] = !0
                            },
                            dispose: function(e) {
                                t._disposeHandlers.push(e)
                            },
                            addDisposeHandler: function(e) {
                                t._disposeHandlers.push(e)
                            },
                            removeDisposeHandler: function(e) {
                                var n = t._disposeHandlers.indexOf(e);
                                n >= 0 && t._disposeHandlers.splice(n, 1)
                            },
                            check: i,
                            apply: s,
                            status: function(e) {
                                return e ? void _.push(e) : w
                            },
                            addStatusHandler: function(e) {
                                _.push(e)
                            },
                            removeStatusHandler: function(e) {
                                var t = _.indexOf(e);
                                t >= 0 && _.splice(t, 1)
                            },
                            data: v[e]
                        };
                        return u = void 0, t
                    }(n),
                    parents: (y = b, b = [], y),
                    children: []
                };
                return e[n].call(r.exports, r, r.exports, t(n)), r.l = !0, r.exports
            }
            var l = "undefined" != typeof self ? self : this.webpackHotUpdate;
            "undefined" != typeof self ? self : this.webpackHotUpdate = function(e, t) {
                ! function(e, t) {
                    if (C[e] && A[e]) {
                        for (var n in A[e] = !1, t) Object.prototype.hasOwnProperty.call(t, n) && (f[n] = t[n]);
                        0 == --k && 0 === S && o()
                    }
                }(e, t), l && l(e, t)
            };
            var u, d, f, h, p = !0,
                g = "e2e06804b825657777cd",
                m = 1e4,
                v = {},
                b = [],
                y = [],
                _ = [],
                w = "idle",
                k = 0,
                S = 0,
                x = {},
                A = {},
                C = {},
                P = {};
            return c.m = e, c.c = P, c.d = function(e, t, n) {
                c.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }, c.r = function(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, c.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return c.d(t, "a", t), t
            }, c.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, c.p = "", c.h = function() {
                return g
            }, t("./src/kaltura-ui/index.js")(c.s = "./src/kaltura-ui/index.js")
        }({
            "./src/kaltura-ui/components/overlay-play-button/index.js": function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n("./src/kaltura-ui/components/overlay-play-button/overlay-play-button.js");
                Object.defineProperty(t, "generateOverlayPlayButton", {
                    enumerable: !0,
                    get: function() {
                        return r.generateOverlayPlayButton
                    }
                })
            },
            "./src/kaltura-ui/components/overlay-play-button/overlay-play-button.js": function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function a(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.OVERLAY_ACTION_DEFAULT_TIMEOUT = void 0;
                var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
                t.generateOverlayPlayButton = function(e) {
                    var t = e.ui.Components.BaseComponent,
                        n = e.ui.Components.IconType,
                        s = e.ui.redux.connect,
                        l = e.ui.Utils.bindActions,
                        d = {
                            ENTER: 13,
                            TAB: 9
                        },
                        f = function(t) {
                            function s() {
                                return r(this, s), i(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
                            }
                            return a(s, t), o(s, [{
                                key: "render",
                                value: function(t) {
                                    switch (t.type) {
                                        case n.Play:
                                            return e.ui.h("i", {
                                                className: [u["default"].icon, u["default"].iconPlay].join(" ")
                                            });
                                        case n.Pause:
                                            return e.ui.h("i", {
                                                className: [u["default"].icon, u["default"].iconPause].join(" ")
                                            })
                                    }
                                }
                            }]), s
                        }(t),
                        h = function(t) {
                            function s(e) {
                                r(this, s);
                                var t = i(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, {
                                    name: "OverlayPlayButton",
                                    player: e.player
                                }));
                                return t._iconTimeout = null, t._firstClickTime = 0, t._clickTimeout = 0, t.onOverlayClick = t.onOverlayClick.bind(t), t.onOverlayButtonClick = t.onOverlayButtonClick.bind(t), t.onOverlayTouch = t.onOverlayTouch.bind(t), t
                            }
                            return a(s, t), o(s, [{
                                key: "isPlayingAdOrPlayback",
                                value: function() {
                                    return this.props.adBreak && this.props.adIsPlaying || !this.props.adBreak && this.props.isPlaying
                                }
                            }, {
                                key: "togglePlayPause",
                                value: function() {
                                    this.isPlayingAdOrPlayback() ? (this.player.pause(), this.props.updateOverlayActionIcon(n.Play)) : (this.player.play(), this.props.updateOverlayActionIcon(n.Pause)), this.props.updatePlayerHoverState(!0), this.notifyClick({
                                        type: "PlayPause"
                                    })
                                }
                            }, {
                                key: "toggleFullscreen",
                                value: function() {
                                    this.player.isFullscreen() ? (this.logger.debug("Exit fullscreen"), this.player.exitFullscreen()) : (this.logger.debug("Enter fullscreen"), this.player.enterFullscreen()), this.notifyClick({
                                        type: "Fullscreen"
                                    })
                                }
                            }, {
                                key: "onOverlayClick",
                                value: function(e) {
                                    var t = this;
                                    if (e.preventDefault(), !this.props.isMobile) {
                                        var n = Date.now();
                                        if (n - this._firstClickTime < 200) return this.cancelClickTimeout(), void this.toggleFullscreen();
                                        if (n - this._firstClickTime < 500) return this.cancelClickTimeout(), this.togglePlayPause(), this.toggleFullscreen(), void(this._firstClickTime = 0);
                                        this._firstClickTime = n, this._clickTimeout = setTimeout(function() {
                                            t._clickTimeout = null, t.togglePlayPause()
                                        }, 200)
                                    }
                                }
                            }, {
                                key: "onOverlayButtonClick",
                                value: function(e) {
                                    e.stopPropagation(), this.blurEventTarget(e), this.onOverlayClick(e)
                                }
                            }, {
                                key: "blurEventTarget",
                                value: function() {
                                    this.forceUpdate()
                                }
                            }, {
                                key: "cancelClickTimeout",
                                value: function() {
                                    this._clickTimeout && (clearTimeout(this._clickTimeout), this._clickTimeout = null)
                                }
                            }, {
                                key: "onOverlayTouch",
                                value: function() {
                                    this.props.playerHover && this.togglePlayPause()
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var t = this.isPlayingAdOrPlayback();
                                    return e.ui.h("div", {
                                        className: u["default"].overlayActionPlayButton + " " + (t ? u["default"].isPlaying : ""),
                                        onClick: this.onOverlayClick,
                                        onTouchStart: this.onOverlayTouch
                                    }, e.ui.h("button", {
                                        "aria-label": t ? "Pause" : "Play",
                                        className: u["default"].overlayPlayButton,
                                        onClick: this.onOverlayButtonClick,
                                        onMouseDown: function(e) {
                                            return e.currentTarget.classList.add(u["default"].clicked)
                                        },
                                        onKeyUp: function(e) {
                                            e.keyCode === d.TAB && e.currentTarget.classList.remove(u["default"].clicked)
                                        }
                                    }, e.ui.h(f, {
                                        type: t ? n.Pause : n.Play
                                    })))
                                }
                            }]), s
                        }(t);
                    return s(function(e) {
                        return {
                            isPlaying: e.engine.isPlaying,
                            adBreak: e.engine.adBreak,
                            adIsPlaying: e.engine.adIsPlaying,
                            playerHover: e.shell.playerHover,
                            isMobile: e.shell.isMobile
                        }
                    }, l(c.actions))(h)
                };
                var s, c = n("./src/kaltura-ui/reducers/overlay-play-button.js"),
                    l = n("./src/kaltura-ui/components/overlay-play-button/overlay-play-button.scss"),
                    u = (s = l) && s.__esModule ? s : {
                        "default": s
                    };
                t.OVERLAY_ACTION_DEFAULT_TIMEOUT = 300
            },
            "./src/kaltura-ui/components/overlay-play-button/overlay-play-button.scss": function(e) {
                e.exports = {
                    "overlay-action-play-button": "playkit-overlay-action-play-button",
                    overlayActionPlayButton: "playkit-overlay-action-play-button",
                    player: "playkit-player",
                    hover: "playkit-hover",
                    "is-playing": "playkit-is-playing",
                    isPlaying: "playkit-is-playing",
                    "overlay-play-button": "playkit-overlay-play-button",
                    overlayPlayButton: "playkit-overlay-play-button",
                    icon: "playkit-icon",
                    clicked: "playkit-clicked",
                    "icon-play": "playkit-icon-play",
                    iconPlay: "playkit-icon-play",
                    "icon-pause": "playkit-icon-pause",
                    iconPause: "playkit-icon-pause"
                }
            },
            "./src/kaltura-ui/index.js": function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Presets = void 0;
                var r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t["default"] = e, t
                }(n("./src/kaltura-ui/ui-presets/index.js"));
                t.Presets = r
            },
            "./src/kaltura-ui/reducers/overlay-play-button.js": function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = t.types = {
                    UPDATE_PLAYER_HOVER_STATE: "shell/UPDATE_PLAYER_HOVER_STATE",
                    UPDATE_ACTION_ICON: "overlay-action/UPDATE_ACTION_ICON"
                };
                t.actions = {
                    updatePlayerHoverState: function(e) {
                        return {
                            type: n.UPDATE_PLAYER_HOVER_STATE,
                            hover: e
                        }
                    },
                    updateOverlayActionIcon: function(e) {
                        return {
                            type: n.UPDATE_ACTION_ICON,
                            iconType: e
                        }
                    }
                }
            },
            "./src/kaltura-ui/ui-presets/index.js": function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n("./src/kaltura-ui/ui-presets/play-button-ui.js");
                Object.defineProperty(t, "generateDefaultUIWithPlayButton", {
                    enumerable: !0,
                    get: function() {
                        return r.generateDefaultUIWithPlayButton
                    }
                }), Object.defineProperty(t, "generatePlayButtonUI", {
                    enumerable: !0,
                    get: function() {
                        return r.generatePlayButtonUI
                    }
                })
            },
            "./src/kaltura-ui/ui-presets/play-button-ui.js": function(e, t, n) {
                "use strict";

                function r() {
                    function e(e, t) {
                        var n = e.components[t];
                        return !(0 === Object.keys(n).length && n.constructor === Object)
                    }
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = (0, i.generateOverlayPlayButton)(t),
                        r = (t.ui || {}).Components,
                        a = r.KeyboardControl,
                        o = r.Loading,
                        s = r.OverlayPortal,
                        c = r.UnmuteIndication,
                        l = r.BottomBar,
                        u = r.SeekBarPlaybackContainer,
                        d = r.PlayPauseControl,
                        f = r.RewindControl,
                        h = r.TimeDisplayPlaybackContainer,
                        p = r.VolumeControl,
                        g = r.LanguageControl,
                        m = r.SettingsControl,
                        v = r.FullscreenControl,
                        b = r.PrePlaybackPlayOverlay,
                        y = r.Watermark;
                    return {
                        defaultUIWithPlayBtn: function(r) {
                            return t.ui.h("div", null, t.ui.h(a, {
                                player: r.player,
                                config: r.config
                            }), t.ui.h(o, {
                                player: r.player
                            }), t.ui.h("div", {
                                "class": "playkit-player-gui",
                                id: "playkit-player-gui"
                            }, t.ui.h(s, null), t.ui.h(c, {
                                player: r.player
                            }), t.ui.h(n, {
                                player: r.player
                            }), t.ui.h(l, null, t.ui.h(u, {
                                showFramePreview: !0,
                                showTimeBubble: !0,
                                player: r.player,
                                playerContainer: r.playerContainer
                            }), t.ui.h("div", {
                                className: "playkit-left-controls"
                            }, t.ui.h(d, {
                                player: r.player
                            }), t.ui.h(f, {
                                player: r.player,
                                step: 10
                            }), t.ui.h(h, {
                                format: "current / total"
                            })), t.ui.h("div", {
                                className: "playkit-right-controls"
                            }, t.ui.h(p, {
                                player: r.player
                            }), t.ui.h(g, {
                                player: r.player
                            }), t.ui.h(m, {
                                player: r.player
                            }), t.ui.h(v, {
                                player: r.player
                            })))), t.ui.h(b, {
                                player: r.player
                            }), e(r.config, y.displayName) ? t.ui.h(y, {
                                player: r.player
                            }) : void 0)
                        },
                        playButtonUI: function(r) {
                            return t.ui.h("div", null, t.ui.h(a, {
                                player: r.player,
                                config: r.config
                            }), t.ui.h(o, {
                                player: r.player
                            }), t.ui.h("div", {
                                "class": "playkit-player-gui",
                                id: "playkit-player-gui"
                            }, t.ui.h(s, null), t.ui.h(c, {
                                player: r.player
                            }), t.ui.h(n, {
                                player: r.player
                            })), t.ui.h(b, {
                                player: r.player
                            }), e(r.config, y.displayName) ? t.ui.h(y, {
                                player: r.player
                            }) : void 0)
                        }
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.generateDefaultUIWithPlayButton = function() {
                    return r(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).defaultUIWithPlayBtn
                }, t.generatePlayButtonUI = function() {
                    return r(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).playButtonUI
                };
                var i = n("./src/kaltura-ui/components/overlay-play-button/index.js")
            }
        })
    }),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = e.KalturaPlayer,
            r = t.NewRelic,
            i = e.jQuery,
            a = e._;
        t.KalturaV3VideoPlayer = function(o) {
            function s() {
                return pe || (pe = {
                    AD_BREAK_START: c,
                    AD_BREAK_END: l,
                    AD_CAN_PLAY: u,
                    AD_CLICKED: d,
                    AD_COMPLETED: f,
                    AD_ERROR: h,
                    AD_LOADED: p,
                    AD_MUTED: g,
                    AD_PAUSED: m,
                    AD_PROGRESS: v,
                    AD_RESUMED: b,
                    AD_SKIPPED: y,
                    AD_STARTED: _,
                    AD_VOLUME_CHANGED: w,
                    ALL_ADS_COMPLETED: k,
                    CAN_PLAY: S,
                    ENTER_FULLSCREEN: x,
                    ERROR: A,
                    EXIT_FULLSCREEN: C,
                    LOAD_START: P,
                    MUTE_CHANGE: T,
                    PAUSE: E,
                    PLAY: O,
                    PLAYBACK_ENDED: R,
                    PLAYING: I,
                    PLAYER_STATE_CHANGED: L,
                    SEEKED: M,
                    SEEKING: D,
                    TIME_UPDATE: j,
                    VIDEO_TRACK_CHANGED: F,
                    VOLUME_CHANGE: N
                }), pe
            }

            function c() {
                de = !0, ae("adOpportunityStart")
            }

            function l() {
                de = !1, ue = void 0, fe = void 0, ae("adOpportunityEnd")
            }

            function u() {
                ae("adCanPlay")
            }

            function d() {
                r && r.addPageAction("adClicked"), ae("adClicked")
            }

            function f() {
                ae("adEnd")
            }

            function h(e) {
                var t = e && e.payload,
                    n = t && t.error,
                    i = n && n.code,
                    a = n && n.message;
                r && (r.noticeError(n), r.addPageAction("adError", {
                    code: i,
                    value: a
                })), ae("adError", n)
            }

            function p(e) {
                var t = e && e.payload,
                    n = t && t.extraAdData,
                    r = n && n.duration;
                ue = r, fe = 0, ae("adLoaded")
            }

            function g() {
                ae("adMuteChange", o.info.getMuteState())
            }

            function m() {}

            function v(e) {
                if (de) {
                    var t = e && e.payload,
                        n = t && t.adProgress,
                        r = n && n.currentTime,
                        i = n && n.duration;
                    fe = Math.round(r), ue = i, ae("adProgress")
                }
            }

            function b() {
                ae("adResumed")
            }

            function y() {
                ae("adSkipped")
            }

            function _() {
                ae("adStart")
            }

            function w(e) {
                var t = e && e.payload,
                    n = t && t.volume;
                t || (n = o.info.getMuteState() ? 0 : o.controls.getVolume()), ae("adVolumeChange", n)
            }

            function k() {}

            function S() {
                ae("canPlay")
            }

            function x() {
                ae("enteredFullscreen")
            }

            function A(e) {
                var t = e && e.payload,
                    n = t && t.error,
                    i = n && n.data,
                    a = i && i.code,
                    o = i && i.message;
                r && (r.noticeError(n), r.addPageAction("error", {
                    code: a,
                    value: o
                })), ae("error", n)
            }

            function C() {
                ae("exitedFullscreen")
            }

            function P() {
                ae("loadURI")
            }

            function T() {
                ae("muteChange", o.info.getMuteState())
            }

            function E() {
                ae("paused")
            }

            function O() {
                ae("played")
            }

            function I() {
                ae("playing")
            }

            function R() {
                ae("playComplete")
            }

            function L(e) {
                if (r) {
                    var t = te(),
                        n = e && e.payload,
                        i = n && n.oldState,
                        a = i && i.type,
                        o = n && n.newState,
                        s = o && o.type;
                    "BUFFERING" === t[s] ? he = r.createTraceObj("buffering") : "BUFFERING" === t[a] && he && (he.end = (new Date).getTime(), r.addPageAction("buffering", {
                        duration: he.end - he.start
                    }), he = null)
                }
            }

            function M() {
                ae("seekEnd")
            }

            function D() {
                ae("seekStart")
            }

            function j() {
                ae("progress")
            }

            function F(e) {
                var t = e && e.payload,
                    n = t && t.selectedVideoTrack,
                    i = r && r.customAttributes;
                n && i && (r.setCustomAttribute(i.bandwidth, n._bandwidth), r.setCustomAttribute(i.height, n._height), r.setCustomAttribute(i.width, n._width))
            }

            function N(e) {
                var t = e && e.payload,
                    n = t && t.volume;
                t || (n = o.info.getMuteState() ? 0 : o.controls.getVolume()), r && r.addPageAction("volumeChange", {
                    volume: n
                }), ae("volumeChange", n)
            }

            function B(e) {
                if (e && ve) {
                    var t = ve.currentTime || 0,
                        n = parseInt(e.body, 10);
                    ve.currentTime = t + n
                }
            }

            function U() {
                ve && ve.play()
            }

            function q() {
                ve && ve.pause()
            }

            function z() {
                ve && ve.play()
            }

            function H() {
                ve && (ve.pause(), ve.currentTime = 0)
            }

            function W() {
                ue = void 0, de = void 0, fe = void 0, he = void 0, pe = void 0, ge = void 0, me = void 0, be = void 0, ve = void 0, ye = void 0, _e = void 0, we = void 0
            }

            function V() {
                if (ve && ve.removeEventListener && ge) {
                    var e = Object.keys(ge);
                    e.forEach(function(e) {
                        ve.removeEventListener(e, le)
                    })
                }
            }

            function G() {
                o.messageBus && (o.messageBus.removeMessageListener("scrub", B), o.messageBus.removeMessageListener("replay", U), o.messageBus.removeMessageListener("pause", q), o.messageBus.removeMessageListener("play", z), o.messageBus.removeMessageListener("stop", H))
            }

            function $() {
                var e = r && r.customAttributes;
                e && (r.setCustomAttribute(e.bandwidth), r.setCustomAttribute(e.height), r.setCustomAttribute(e.width), r.setCustomAttribute(e.playerVersion))
            }

            function K() {
                if (n) {
                    var e = n.ui || {},
                        t = e.Presets || {};
                    return [{
                        template: function(e) {
                            return t.idleUI && t.idleUI(e)
                        },
                        condition: function(e) {
                            return e.engine.isIdle
                        }
                    }, {
                        template: function(e) {
                            return t.errorUI && t.errorUI(e)
                        },
                        condition: function(e) {
                            return e.engine.hasError
                        }
                    }, {
                        template: function(e) {
                            return t.adsUI && t.adsUI(e)
                        },
                        condition: function(e) {
                            return e.engine.adBreak
                        }
                    }, {
                        template: function(e) {
                            return t.liveUI && t.liveUI(e)
                        },
                        condition: function(e) {
                            return e.engine.isLive
                        }
                    }, {
                        template: function(e) {
                            return t.playbackUI && t.playbackUI(e)
                        }
                    }]
                }
            }

            function X(e, t) {
                return "https://cdnapisec.kaltura.com/p/" + e + "/sp/" + e + "00/embedPlaykitJs/uiconf_id/" + t
            }

            function Y(e) {
                var n = e || o.id,
                    r = o.video && o.video.app_token_ks,
                    a = o.config || {},
                    s = J(),
                    c = Q(),
                    l = {},
                    u = {},
                    d = {},
                    f = {};
                return o.ads && o.ads.enabled && (l = {
                    ima: {
                        adTagUrl: s
                    }
                }), void 0 !== a.autoPlay && (u.autoplay = !!a.autoPlay), void 0 !== a.loop && (u.loop = !!a.loop), void 0 !== a.autoPlay_mute && (u.muted = !!a.autoPlay_mute), void 0 !== a.playsinline && (u.playsinline = !!a.playsinline), o.config.embedded && t.Capabilities.isiOSBrowser() && (u.inBrowserFullscreen = !1), u.pictureInPicture = !1, c && (f = {
                    customPreset: c
                }), d.partnerId = ne(), d.uiConfId = ie(), r && (d.ks = r), {
                    targetId: n,
                    provider: d,
                    playback: u,
                    plugins: i.extend({}, l),
                    ui: i.extend({}, f)
                }
            }

            function J() {
                var e = o.video || {},
                    t = e.ads || {},
                    n = t ? t.dfp : {};
                return t.enabled ? n.adTagUrl : null
            }

            function Q() {
                var e = t.KalturaUi;
                if (n && e) {
                    var r = o.config || {},
                        i = e.Presets || {},
                        a = i.generateDefaultUIWithPlayButton,
                        s = i.generatePlayButtonUI,
                        c = a && a(n),
                        l = s && s(n),
                        u = K();
                    return c && u.splice(u.length - 1, 0, {
                        template: function(e) {
                            return l(e)
                        },
                        condition: function() {
                            return r.hideControlBar && r.showLargePlayButton
                        }
                    }), l && u.splice(u.length - 1, 0, {
                        template: function(e) {
                            return c(e)
                        },
                        condition: function() {
                            return r.showLargePlayButton
                        }
                    }), u
                }
            }

            function Z() {
                if (!ge && ve && ve.Event) {
                    var e = s(),
                        t = Object.keys(e);
                    ge = a.reduce(t, function(e, t) {
                        var n = ve.Event[t];
                        return n && (e[n] = t), e
                    }, {})
                }
                return ge || {}
            }

            function ee(e) {
                if (!me || e) {
                    var t = o.video || {},
                        n = t.externals || [];
                    me = a.find(n, function(e) {
                        return e && e.source && "kaltura" === e.source
                    })
                }
                return me
            }

            function te() {
                if (!be && ve && ve.State) {
                    be = {};
                    var e = ve.State;
                    Object.keys(e).forEach(function(t) {
                        be[e[t]] = t
                    })
                }
                return be || {}
            }

            function ne() {
                if (!_e) {
                    var e = o.config || {},
                        t = ee() || {},
                        n = t.account;
                    _e = e.kPartnerId ? e.kPartnerId : n
                }
                return _e
            }

            function re(e) {
                return i.ajax(i.extend({
                    url: null,
                    dataType: "script",
                    cache: !0
                }, e))
            }

            function ie() {
                if (!we) {
                    var e = o.config || {},
                        t = e.kaltura || {},
                        n = t.adSystems || {},
                        r = o.video && o.video.ads;
                    if (we = e.kUiconfId, !we && (we = n.noads && n.noads.platform, r)) {
                        var i = a.find(n, function(e, t) {
                            return r.hasOwnProperty(t) && r[t]
                        });
                        i && (we = i.platform)
                    }
                }
                return we
            }

            function ae(e, t) {
                o.messageBus && o.messageBus.sendMessage(e, t)
            }

            function oe() {
                if (ve && ve.addEventListener) {
                    var e = Z(),
                        t = Object.keys(e);
                    t.forEach(function(e) {
                        ve.addEventListener(e, le)
                    })
                }
            }

            function se(e) {
                n && (ve = n.setup(e), oe())
            }

            function ce() {
                o.messageBus && (o.messageBus.addMessageListener("scrub", B), o.messageBus.addMessageListener("replay", U), o.messageBus.addMessageListener("pause", q), o.messageBus.addMessageListener("play", z), o.messageBus.addMessageListener("stop", H))
            }

            function le(e) {
                if (e && ve) {
                    var t = e.type,
                        n = Z(),
                        r = s(),
                        i = n[t],
                        a = r[i];
                    a && a(e)
                }
            }
            if (!o) throw new TypeError("KalturaV3VideoPlayer requires a player object.");
            if (!o.id) throw new TypeError("Player must include an id.");
            var ue, de, fe, he, pe, ge, me, ve, be, ye, _e, we, ke = o.controls;
            return o.cleanupListeners = function() {
                $(), G(), V(), ve.destroy(), W(), o.controls = ke
            }, o.controls = i.extend(o.controls, {
                enterFullscreen: function() {
                    ve && ve.enterFullscreen()
                },
                exitFullscreen: function() {
                    ve && ve.exitFullscreen()
                },
                getVolume: function() {
                    if (ve) return ve.volume
                },
                hide: function() {
                    i("#" + o.id).hide()
                },
                mute: function(e) {
                    if (ve) return ve.muted = !!e, ve.muted
                },
                setVolume: function(e) {
                    if (ve) return ve.volume = e, ve.volume
                },
                show: function() {
                    i("#" + o.id).show()
                }
            }), o.dependency = function(a) {
                var s = [],
                    c = "function" == typeof e.require && e.require,
                    l = "function" == typeof e.define && e.define,
                    u = o.config || {},
                    d = u.kalturaV3SkinUrl;
                if (t.stylesLoaded = t.stylesLoaded || {}, !t.kalturaJsLoaded) {
                    var f, h = X(ne(), ie());
                    c ? (f = i.Deferred(), c.config({
                        paths: {
                            KalturaPlayer: h
                        }
                    }), l("playkit-js", ["KalturaPlayer"], function(e) {
                        return e.core
                    }), c(["KalturaPlayer"], function(e) {
                        c(["ima", "vr"], function() {
                            n = e, f.resolve()
                        })
                    })) : f = re({
                        url: h
                    }).done(function() {
                        n = e.KalturaPlayer
                    }), f.done(function() {
                        var e = r && r.attributes;
                        t.kalturaJsLoaded = !0, ae("scriptLoaded", {
                            scriptName: "kalturaV3",
                            url: h
                        }), n && e && r.setCustomAttribute(e.playerVersion, n.VERSION)
                    }), s.push(f)
                }
                if (d && !t.stylesLoaded[d]) {
                    var p = i('<link rel="stylesheet" type="text/css" />').attr("href", d);
                    i("head").append(p), t.stylesLoaded[d] = p
                }
                return i.when.apply(null, s).done(function() {
                    a && a()
                })
            }, o.embed = function() {
                var e = Y(o.id),
                    t = ee() || {},
                    n = t.data_id,
                    r = e.player || {},
                    i = r.playback || {};
                ye = !!i.loop, se(e), ce(), o.loadVideo(n)
            }, o.info = {
                isAd: function() {
                    return de
                },
                getPosition: function() {
                    if (ve) return ve.currentTime
                },
                getDuration: function() {
                    if (ve) return ve.duration
                },
                getAdPosition: function() {
                    return fe
                },
                getAdDuration: function() {
                    return ue
                },
                getMuteState: function() {
                    if (ve) return ve.muted
                },
                getPlayerName: function() {
                    return "kalturaV3"
                }
            }, o.loadVideo = function(e) {
                if (!e) {
                    var t = ee(!0) || {};
                    e = t.data_id
                }
                ve && (o.ads && o.ads.enabled && ve.configure({
                    plugins: {
                        ima: {
                            adTagUrl: J()
                        }
                    }
                }), ve.loadMedia({
                    entryId: e
                }).then(function() {
                    ae("mediaReady"), ye && i("#" + o.id).find("video").prop("loop", !0)
                }))
            }, {
                cleanupInternalVariables: W,
                cleanupKalturaListeners: V,
                cleanupMessageBusListeners: G,
                cleanupNewRelicAttributes: $,
                getCustomUiPresets: Q,
                generateDefaultUiPresets: K,
                generateKalturaJsUrl: X,
                generateKalturaV3Config: Y,
                getAdTagUrl: J,
                getKalturaJsLoaded: function() {
                    return t && t.kalturaJsLoaded
                },
                getKalturaPlayerReference: function() {
                    return n
                },
                getKalturaPlayer: function() {
                    return ve
                },
                getKalturaEventHandlers: s,
                getKalturaEventsByName: Z,
                getKalturaExternal: ee,
                getKalturaStatesByName: te,
                getPartnerId: ne,
                getScript: re,
                getUiConfId: ie,
                handleKalturaEvent: le,
                setupKalturaListeners: oe,
                setupKalturaPlayer: se,
                setupMessageBusListeners: ce
            }
        }
    }(window || this),
    function(e) {
        "use strict";
        var t = e._,
            n = e.DisneyVideo;
        n.LocationHelpers = {
            parseQueryParams: function(e) {
                if (e.length <= 0) return {};
                var n, r = e.replace("?", "").split("&"),
                    i = {};
                return t.each(r, function(e) {
                    if (n = e.split("="), n && n.length >= 2) {
                        var t = decodeURIComponent(n[0]).toLowerCase(),
                            r = decodeURIComponent(n[1]);
                        i[t] = r
                    }
                }), i
            },
            generateQueryParams: function(e) {
                return "?" + t.map(e, function(e, t) {
                    return e ? encodeURIComponent(t) + "=" + encodeURIComponent(e) : encodeURIComponent(t)
                }).join("&")
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = !1,
            r = !0,
            i = 0,
            a = 0,
            o = 0,
            s = 0,
            c = "",
            l = 0;
        t.AdPattern = function(t) {
            function u() {
                w && (b() && T(), w = !1, T()), k()
            }

            function d() {
                S()
            }

            function f() {
                O(!1)
            }

            function h() {
                O(!0), T(), s++
            }

            function p() {
                t.messageBus.addMessageListener("played", u), t.messageBus.addMessageListener("paused", d), t.messageBus.addMessageListener("adStart", f), t.messageBus.addMessageListener("adEnd", h)
            }

            function g() {
                t.messageBus.removeMessageListener("played", u), t.messageBus.removeMessageListener("paused", d), t.messageBus.removeMessageListener("adStart", f), t.messageBus.removeMessageListener("adEnd", h)
            }
            var m = function(e) {
                    S(), n ? l >= c.length && P() : y(e);
                    var t = b();
                    return t && C(), t
                },
                v = function(e) {
                    return t.video.ads.context.useAdPattern() && e && e.adPattern ? e.adPattern : "AC"
                },
                b = function() {
                    if (!t.ads.enabled) return !1;
                    if (n && r && "Timer" === c) return !!E() || 0 === s;
                    if (!r) return !0;
                    switch (c[l]) {
                        case "A":
                            return !0;
                        case "C":
                            return !1;
                        default:
                            return !1
                    }
                },
                y = function(e) {
                    e.adPattern !== c && (P(), O(!0), c = v(e))
                },
                _ = 0,
                w = !0,
                k = function() {
                    _ && e.clearInterval(_), _ = e.setInterval(x, 1e3)
                },
                S = function() {
                    _ && e.clearInterval(_)
                },
                x = function() {
                    o += 1
                },
                A = function() {
                    a += o, o = 0
                },
                C = function() {
                    a = 0
                },
                P = function() {
                    l = 0
                },
                T = function() {
                    l++, l >= c.length && P()
                },
                E = function() {
                    return A(), a >= i
                },
                O = function(e) {
                    r = e
                };
            this.setPlaylistLoaded = function(e) {
                n = e
            }, this.setPlaylistAdTime = function(e) {
                i = parseFloat(e)
            }, this.setPlaylistAdPattern = function(e) {
                c = e
            }, this.init = function(e) {
                P(), e.ads.enabled = !e.ads.hasOwnProperty("enabled") || e.ads.enabled, e.video.ads = e.video.ads || {}, e.video.ads.noAds = !e.video.ads.hasOwnProperty("context") || e.video.ads.context.noAds(), e.video.ads.enabled = !e.video.ads.noAds && e.ads.enabled && m(e.video)
            };
            var I = t.init,
                R = t.destroy;
            t.init = function(e, t) {
                p(), I(e, t)
            }, t.destroy = function() {
                g(), R()
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = t.NewRelic,
            r = e.jQuery,
            i = e._,
            a = e.console,
            o = e.document,
            s = e.location,
            c = e.Modernizr.sessionstorage,
            l = e.sessionStorage,
            u = !1,
            d = !1,
            f = "",
            h = 0,
            p = "dvaid1959",
            g = "dvaseg1959",
            m = "dvaprevurl",
            v = function() {
                h = l.getItem(g) || h || 0, h++, c && l.setItem(g, h)
            };
        t.Analytics = function(t) {
            function b() {
                var e = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                };
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }

            function y() {
                if (t && t.messageBus && t.config.tracking.enabled)
                    for (var e = 0; e < N.length; e++) t.messageBus.addMessageListener(N[e], k)
            }

            function _() {
                if (t && t.messageBus && t.config.tracking.enabled)
                    for (var e = 0; e < N.length; e++) t.messageBus.removeMessageListener(N[e], k)
            }

            function w() {
                var e = q;
                q = null;
                for (var n = 0; n < e.length; n++) t.messageBus.sendMessage(e[n])
            }

            function k(e) {
                var r = {
                    event: e.name,
                    time: t.info.getPosition(),
                    value: 0
                };
                if (!i.contains(["adStart", "adEnd", "adLoaded", "adCanPlay", "loadURI", "adOpportunityStart", "adOpportunityEnd", "adProgress", "playerLoad"], e.name)) {
                    if (q) return void q.push(e);
                    if (t.info.isAd()) return
                }
                if (i.contains(B, e.name)) {
                    var a = n.createTraceObj(e.name);
                    n.addToTrace(a), n.addPageAction(e.name, e.body)
                }
                switch (e.name) {
                    case "scriptLoaded":
                        var o = e.body && e.body.scriptName,
                            s = e.body && e.body.url;
                        r.value = o + "|" + s;
                        break;
                    case "replay":
                        return void v();
                    case "loadURI":
                        v(), r.event = "changeMedia", H = -1, $ = !0, z = !1;
                        break;
                    case "autoPlay":
                        r.value = "autoPlay";
                        break;
                    case "playerLoad":
                        r.value = "playerLoad";
                        break;
                    case "mediaReady":
                        if (A("mediaReady"), z) return;
                        z = !0;
                        break;
                    case "adOpportunityStart":
                        q = [];
                        break;
                    case "adStart":
                        q = null, r.value = "adStart";
                        break;
                    case "adCanPlay":
                        A("adCanPlay");
                        break;
                    case "adLoaded":
                        A("adLoaded");
                        break;
                    case "adEnd":
                        r.value = "{timeSlot:preroll}", r.time = 0;
                        break;
                    case "adOpportunityEnd":
                        q && w();
                        break;
                    case "adProgress":
                        var c;
                        c = K === -1 ? 0 : I(t);
                        var l = 25,
                            u = Math.floor(c / l),
                            d = Math.floor(K / l);
                        if (K = c, d !== u) {
                            0 === c && x("adPercentReached");
                            var f = {
                                event: "adPercentReached",
                                time: t.info.getAdPosition(),
                                value: c
                            };
                            S(f)
                        }
                        return;
                    case "doStop":
                        r.event = "doStop";
                        break;
                    case "played":
                        z || t.messageBus.sendMessage("mediaReady"), r.event = "doPlay", r.value = Math.round(isNaN(r.time) ? 0 : r.time);
                        break;
                    case "playing":
                        x("playing");
                        break;
                    case "paused":
                        r.event = "doPause", r.value = Math.round(isNaN(r.time) ? 0 : r.time);
                        break;
                    case "progress":
                        if (!z) return;
                        var h;
                        if (h = H === -1 ? 0 : O(t), [void 0, 10, 25].indexOf(t.config.tracking.percentReachedInterval) === -1) throw "Option value out of range";
                        var p = t.config.tracking.percentReachedInterval || 10,
                            g = Math.floor(h / p),
                            m = Math.floor(H / p);
                        if (H = h, 0 === h && $) {
                            $ = !1;
                            var b = {
                                event: "videoStart",
                                time: t.info.getPosition(),
                                value: h
                            };
                            S(b)
                        }
                        if (m !== g) {
                            G = h >= 100;
                            var y = {
                                event: "percentReached",
                                time: t.info.getPosition(),
                                value: h
                            };
                            S(y)
                        }
                        var _ = Math.round(t.info.getPosition());
                        if (_ % 10 !== 0 || W === _) return;
                        r.event = "playerUpdatePlayhead", r.value = Math.round(isNaN(r.time) ? 0 : r.time), W = _;
                        break;
                    case "playComplete":
                        if (!G) {
                            G = !0;
                            var k = {
                                event: "percentReached",
                                time: t.info.getPosition(),
                                value: 100
                            };
                            S(k)
                        }
                        r.event = "playerPlayEnd", r.value = Math.round(isNaN(r.time) ? 0 : r.time);
                        break;
                    case "volumeChange":
                        r.event = "changeVolume";
                        var C = void 0 !== e.body ? e.body : t.controls.getVolume();
                        r.value = 100 * C;
                        break;
                    case "enteredFullscreen":
                        r.event = "openedFullScreen";
                        break;
                    case "exitedFullscreen":
                        r.event = "closedFullScreen";
                        break;
                    case "seekStart":
                        if (V) return;
                        r.event = "playerSeekStart", r.value = Math.round(isNaN(r.time) ? 0 : r.time), V = !0;
                        break;
                    case "seekEnd":
                        r.event = "playerSeekEnd", r.value = Math.round(isNaN(r.time) ? 0 : r.time), V = !1
                }
                S(r)
            }

            function S(e) {
                var r = t.video,
                    a = t.flavor,
                    o = 0;
                if (r && r.duration)
                    if ("string" == typeof r.duration) {
                        var s = r.duration.split(":").reverse();
                        o = parseInt(s[0], 10), s.length > 1 && (o += 60 * parseInt(s[1], 10)), s.length > 2 && (o += 3600 * parseInt(s[2], 10))
                    } else o = Math.round(r.duration / 1e3);
                var c = {
                    ASSETNAME: r ? r.analytics : null,
                    VIDLEN: o,
                    ASSETID: r ? r.analyticsId : null,
                    BITRATE: a ? a.bitrate : 0,
                    KDPEVNT: e.event,
                    KDPDAT_PLAYHEAD: e.time,
                    KDPDAT_VALUE: e.value,
                    KSESSIONSEQ: h,
                    GENTIME: Math.round((new Date).getTime()),
                    COREVIDEOID: r ? r.getCoreId() : null,
                    videoAdPattern: r ? r.adPattern : null,
                    videoIdSource: "core"
                };
                if (i.extend(c, F), t.tracking.trackVideo({
                        analyticsData: c,
                        info: e
                    }), i.contains(U, e.event)) {
                    var l = n.createTraceObj(e.event);
                    n.addToTrace(l), n.addPageAction(e.event, {
                        value: e.value
                    })
                }
            }

            function x(e) {
                d || (d = !0, S({
                    event: "firstFrame",
                    value: e
                }))
            }

            function A(e) {
                u || (u = !0, S({
                    event: "firstFrameReady",
                    value: e
                }))
            }

            function C(e) {
                var t = {
                    analyticsData: null,
                    info: null
                };
                r.extend(t, e);
                try {
                    D(t.analyticsData)
                } catch (e) {
                    R(e);
                }
            }

            function P(e) {
                var t = {
                    eventCategory: null,
                    action: null,
                    label: null,
                    value: null
                };
                r.extend(t, e), t.engagementType = t.eventCategory + ":" + t.action;
                try {
                    j(t)
                } catch (e) {
                    R(e)
                }
            }

            function T(e) {
                var t = {
                    linkName: null,
                    linkPosition: null,
                    isChrome: !1,
                    href: null
                };
                r.extend(t, e);
                try {
                    M(t.linkName, t.linkPosition, void 0, t.href)
                } catch (e) {
                    R(e)
                }
                t.isChrome && (t.linkPosition = "Chrome: " + t.linkPosition)
            }

            function E(t, n) {
                return n && n.tracking && n.tracking[t] ? n.tracking[t] : e.cto && e.cto[t] ? e.cto[t] : function() {}
            }

            function O(e) {
                var t = e.info.getPosition(),
                    n = e.info.getDuration();
                return n > 0 && isFinite(t) ? Math.round(t / n * 100) : 0
            }

            function I(e) {
                var t = e.info.getAdPosition(),
                    n = e.info.getAdDuration();
                return n > 0 && isFinite(t) ? Math.round(t / n * 100) : 0
            }
            var R = function(t) {
                var n = e.onerror;
                a && a.error && a.error("DisneyVideo.Analytics:: " + t.stack || "DisneyVideo.Analytics:: " + t.toString()), n && n("DisneyVideo.Analytics:: " + t.stack + "DisneyVideo.Analytics:: " + t.toString())
            };
            this.player = t;
            var L;
            c ? (o.referrer === l.getItem(m) ? f = l.getItem(p) : (L = b(), l.setItem(p, L), l.removeItem(g), f = L), l.setItem(m, s.href)) : (L = b(), f = L);
            var M, D, j, F = {
                    KSESSIONID: f,
                    GENTITLE: o.title,
                    GENURL: s.href,
                    DEVID: -1,
                    USRAGNT: e.navigator.userAgent,
                    WIGID: "1959",
                    KDPPROTO: t.type,
                    KDPID: "1959"
                },
                N = ["scriptLoaded", "loadURI", "playerLoad", "mediaReady", "autoPlay", "adCanPlay", "adLoaded", "adOpportunityStart", "adOpportunityEnd", "adStart", "adEnd", "canPlay", "played", "playing", "paused", "progress", "playComplete", "volumeChange", "enteredFullscreen", "exitedFullscreen", "seekStart", "seekEnd", "noCompanionAd", "noBannerAd", "replay", "doStop", "adProgress"],
                B = ["scriptLoaded", "loadURI", "mediaReady", "autoPlay", "adOpportunityStart", "adOpportunityEnd", "adStart", "adEnd"],
                U = ["adPercentReached", "firstFrame", "firstFrameReady", "videoStart", "playerUpdatePlayhead"],
                q = null,
                z = !1,
                H = -1,
                W = 0,
                V = !1,
                G = !1,
                $ = !0,
                K = -1,
                X = t.init,
                Y = t.destroy;
            t.init = function(e, n) {
                X(e, n);
                var r = t && t.config,
                    i = r && r.playlist;
                r && (F.AUTO = r.autoPlay ? "true" : "false", i && i.id && (F.PLAYLISTID = i.id)), D = E("trackVideo", n), M = E("trackLink", n), j = E("trackEvent", n), t.tracking && (t.tracking.trackVideo = C, t.tracking.trackEvent = P, t.tracking.trackLink = T), _(), y()
            }, t.destroy = function() {
                _(), t = null, Y()
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.DisneyVideo,
            n = t.NewRelic,
            r = e.jQuery,
            i = e._;
        t.PlayerTypes = {
            KALTURA: "kaltura",
            KALTURA3: "kaltura3",
            KALTURAV3: "kalturaV3"
        }, t.VideoPlayer = function(a, o) {
            function s(e, i) {
                var a, o, s, c;
                m.controls.pause(), i && (a = !0), m.video && m.video.externals && m.video.externals.length > 0 && (o = m.video.externals[0].account, c = l(m.video).player), e && e.externals && e.externals.length > 0 && e.externals[0] && (s = e.externals[0].account);
                var u = l(e).player;
                m.video = new t.Video(e, {
                    poster: e.poster
                }), o !== s ? a = !0 : "error" === m.type ? a = !0 : u !== c && (a = !0), a && (m.controls.getVolume && (m.config.autoPlay_mute = !m.controls.getVolume()), m.cleanupListeners(), h(e), n.setCustomAttribute(n.customAttributes.playerName, m.info.getPlayerName()), n.setCustomAttribute(n.customAttributes.videoId, m.video.getCoreId())), m.config.addBaseDependencies();
                var d;
                a ? d = !m.config.autoPlay && m.config.clickToPlay ? m.embedPoster() : m.embedPlayer() : (d = r.when.apply(r, m.config.dependencies), m.adPattern.init(m), d.done(m.loadVideo))
            }

            function c(e, t) {
                var n = e && e.data && e.data.tags;
                return i.some([t.config.kalturaHostedTag, i.isString(n) && n.indexOf("kaltura-hosted") > -1])
            }

            function l(e) {
                var n = {},
                    r = {
                        1082342: {
                            platform: "39857001"
                        },
                        1068292: {
                            platform: "40058201"
                        }
                    },
                    a = {
                        1082342: {
                            platform: "35673902"
                        },
                        1068292: {
                            platform: "35976132"
                        }
                    },
                    o = {
                        1082342: {
                            platform: "41781642"
                        },
                        1068292: {
                            platform: "41907192"
                        }
                    },
                    s = e && e.externals && e.externals.length > 0 && e.externals[0];
                if (e.playerConfig) return e.playerConfig;
                if (s) {
                    var l = s.source,
                        d = s.account,
                        h = s.group;
                    if ("kaltura" === l) {
                        var p = "es_419,es_AR,es_CL,es_CO,es_MX,pt_BR".split(",");
                        if (i.indexOf(p, f(e)) > -1 && (m.config.kalturaHostedTag = !0, m.config.isLatam = !0), "us" === h || "628012" === d || "666132" === d || m.config.isLatam) {
                            n.player = "matterhorn-kaltura", u(m), m.config.tracking.percentReachedInterval = 10, m.config.playerType = m.config.playerType ? m.config.playerType : t.PlayerTypes.KALTURAV3, m.config.accessibilityPluginUrl = "https://static-mh.content.disney.io/matterhorn/assets/plugins/accessibility-plugin-378e76799550.js".replace(/^(https|http):/, ""), m.config.sharePlugin = !0, m.config.sharePluginUrl = "https://static-mh.content.disney.io/matterhorn/assets/plugins/videoplayer_skin_share_plugin-ba5ee9d1bb0c.js".replace(/^(https|http):/, ""), m.config.logoPluginUrl = "https://static-mh.content.disney.io/matterhorn/assets/plugins/videoplayer_skin_logo_plugin-13f014ec4388.js".replace(/^(https|http):/, "");
                            var g = m.config.playerType === t.PlayerTypes.KALTURAV3 ? o : a;
                            n.adSystems = {
                                dfp: g[d] || g[1068292],
                                admaster: g[d] || g[1068292],
                                noads: g[d] || g[1068292]
                            }
                        } else c(s, m) ? (m.config.accessibilityPluginUrl = "https://static-mh.content.disney.io/matterhorn/assets/plugins/accessibility-plugin-378e76799550.js".replace(/^(https|http):/g, ""), m.config.playerType = m.config.playerType ? m.config.playerType : t.PlayerTypes.KALTURA3) : v.kaltura = void 0, u(m), n.player = "emea", n.metadataProfileId = 541161, m.config.tracking.percentReachedInterval = 25, r[d] && (n.adSystems = {
                            dfp: r[d],
                            admaster: r[d],
                            noads: r[d]
                        })
                    }
                }
                return e.playerConfig = n, n
            }

            function u(e) {
                e.config.kalturaSkinUrl = d("kaltura"), e.config.kalturaV3SkinUrl = d("kalturaV3"), e.config.kalturaSkinCssOverridesUrl = d("kalturaCssOverrides"), e.config.kalturaSkinJsUrl = d("kalturaJs")
            }

            function d(e) {
                var t = v[e];
                if (m.config && m.config.skinUrl)
                    if (!i.isString(m.config.skinUrl) && m.config.skinUrl[e]) t = m.config.skinUrl[e];
                    else if (i.isString(m.config.skinUrl)) {
                    var n = m.config.skinUrl.substr(m.config.skinUrl.lastIndexOf(".") + 1);
                    "kaltura" !== e && "kalturaCssOverrides" !== e || "css" !== n ? "kalturaJs" === e && "js" === n && (t = m.config.skinUrl) : t = m.config.skinUrl
                }
                return t
            }

            function f(e) {
                var t;
                return e && e.externals && e.externals.length > 0 && e.externals[0] && e.externals[0].data && (t = e.externals[0].data.Locale), t
            }

            function h(e) {
                var t = l(e);
                switch (t.player) {
                    case "emea":
                    case "matterhorn-kaltura":
                        return p(t);
                    case "matterhorn":
                        return g();
                    default:
                        return g()
                }
            }

            function p(n) {
                return m.config.playerType && m.config.playerType !== t.PlayerTypes.KALTURA && m.config.playerType !== t.PlayerTypes.KALTURA3 && m.config.playerType !== t.PlayerTypes.KALTURAV3 ? g() : (m.config.kaltura = n, m.config.playerType === t.PlayerTypes.KALTURAV3 ? (m.config.geo.enabled = !!m.config.isLatam, m.geo = r.extend(m.geo, m.config.geo), m.config.tracking.enabled = !0, m.tracking = r.extend(m.tracking, m.config.tracking), t.KalturaV3VideoPlayer(m)) : (m.config.playerType === t.PlayerTypes.KALTURA3 && e.console.warn("KALTURA3 player is no longer supported"), t.KalturaV2VideoPlayer(m)))
            }

            function g() {
                return m.config.playerType === t.PlayerTypes.KALTURA ? t.KalturaV2VideoPlayer(m) : void e.console.warn("HTMLVideoPlayer player is no longer supported")
            }
            "undefined" == typeof t.Players && (t.Players = {});
            var m = new t.BasePlayer,
                v = {
                    kaltura: "https://static-mh.content.disney.io/matterhorn/assets/matterhorn-static-player-skin-cf963ad954a6.css",
                    kalturaV3: "https://static-mh.content.disney.io/matterhorn/assets/matterhorn-v3-player-skin-77381cd10564.css"
                };
            return m.messageBus = new t.MessageBus, m.adPattern = new t.AdPattern(m), m.analytics = new t.Analytics(m), m.accessibility = new t.Accessibility(m), m.init(a, o), m.loadVideoByObject = s, m.loadVideoByObject(o.video), t.ActivePlayers = t.ActivePlayers || [], t.ActivePlayers.push(m), m
        }, t.getIdealWidth = function() {
            var t = r(e).width();
            return t < 480 && (t = 480), t < 768 && e.devicePixelRatio > 1 && (t = 768), t
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.jQuery,
            r = e._;
        t.VideoUtilities = t.VideoUtilities || {}, r.extend(t.VideoUtilities, {
            fetchVideoDetails: function(e, t) {
                var r = n.Deferred();
                return n.getJSON("/video/details/" + e, {
                    domain: t
                }).done(function(e) {
                    var t = e.video;
                    t.ads = e.ads || {}, r.resolve(t)
                }).fail(function() {
                    r.reject()
                }), r.promise()
            }
        })
    }(this);
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
var Hogan = {};
! function(e) {
    "use strict";

    function t(e, t, n) {
        var r;
        return t && "object" == typeof t && (void 0 !== t[e] ? r = t[e] : n && t.get && "function" == typeof t.get && (r = t.get(e))), r
    }

    function n(e, t, n, r, i, a) {
        function o() {}

        function s() {}
        o.prototype = e, s.prototype = e.subs;
        var c, l = new o;
        l.subs = new s, l.subsText = {}, l.buf = "", r = r || {}, l.stackSubs = r, l.subsText = a;
        for (c in t) r[c] || (r[c] = t[c]);
        for (c in r) r.hasOwnProperty(c) && (l.subs[c] = r[c]);
        i = i || {}, l.stackPartials = i;
        for (c in n) n.hasOwnProperty(c) && !i[c] && (i[c] = n[c]);
        for (c in i) i.hasOwnProperty(c) && (l.partials[c] = i[c]);
        return l
    }

    function r(e) {
        return String(null === e || void 0 === e ? "" : e)
    }

    function i(e) {
        return e = r(e), u.test(e) ? e.replace(a, "&amp;").replace(o, "&lt;").replace(s, "&gt;").replace(c, "&#39;").replace(l, "&quot;") : e
    }
    e.Template = function(e, t, n, r) {
        e = e || {}, this.r = e.code || this.r, this.c = n, this.options = r || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.buf = ""
    }, e.Template.prototype = {
        r: function() {
            return ""
        },
        v: i,
        t: r,
        render: function(e, t, n) {
            return this.ri([e], t || {}, n)
        },
        ri: function(e, t, n) {
            return this.r(e, t, n)
        },
        ep: function(e, t) {
            var r = this.partials[e],
                i = t[r.name];
            if (r.instance && r.base === i) return r.instance;
            if ("string" == typeof i) {
                if (!this.c) throw new Error("No compiler available.");
                i = this.c.compile(i, this.options)
            }
            if (!i) return null;
            if (this.partials[e].base = i, r.subs) {
                t.stackText || (t.stackText = {});
                for (var a in r.subs) r.subs.hasOwnProperty(a) && !t.stackText[a] && (t.stackText[a] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                i = n(i, r.subs, r.partials, this.stackSubs, this.stackPartials, t.stackText)
            }
            return this.partials[e].instance = i, i
        },
        rp: function(e, t, n, r) {
            var i = this.ep(e, n);
            return i ? i.ri(t, n, r) : ""
        },
        rs: function(e, t, n) {
            var r = e[e.length - 1];
            if (!d(r)) {
                if (!this.options.modelGet || "object" != typeof r || "number" != typeof r.length || "function" != typeof r.slice) return void n(e, t, this);
                r = r.slice(0, r.length)
            }
            for (var i = 0; i < r.length; i++) e.push(r[i]), n(e, t, this), e.pop()
        },
        s: function(e, t, n, r, i, a, o) {
            var s;
            return (!d(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, n, r, i, a, o)), s = !!e, !r && s && t && t.push("object" == typeof e ? e : t[t.length - 1]), s)
        },
        d: function(e, n, r, i) {
            var a, o = e.split("."),
                s = this.f(o[0], n, r, i),
                c = this.options.modelGet,
                l = null;
            if ("." === e && d(n[n.length - 2])) s = n[n.length - 1];
            else
                for (var u = 1; u < o.length; u++) a = t(o[u], s, c), void 0 !== a ? (l = s, s = a) : s = "";
            return !(i && !s) && (i || "function" != typeof s || (n.push(l), s = this.mv(s, n, r), n.pop()), s)
        },
        f: function(e, n, r, i) {
            for (var a = !1, o = null, s = !1, c = this.options.modelGet, l = n.length - 1; l >= 0; l--)
                if (o = n[l], a = t(e, o, c), void 0 !== a) {
                    s = !0;
                    break
                }
            return s ? (i || "function" != typeof a || (a = this.mv(a, n, r)), a) : !i && ""
        },
        ls: function(e, t, n, i, a) {
            var o = this.options.delimiters;
            return this.options.delimiters = a, this.b(this.ct(r(e.call(t, i)), t, n)), this.options.delimiters = o, !1
        },
        ct: function(e, t, n) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(e, this.options).render(t, n)
        },
        b: function(e) {
            this.buf += e
        },
        fl: function() {
            var e = this.buf;
            return this.buf = "", e
        },
        ms: function(e, t, n, r, i, a, o) {
            var s, c = t[t.length - 1],
                l = e.call(c);
            return "function" == typeof l ? !!r || (s = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(l, c, n, s.substring(i, a), o)) : l
        },
        mv: function(e, t, n) {
            var i = t[t.length - 1],
                a = e.call(i);
            return "function" == typeof a ? this.ct(r(a.call(i)), i, n) : a
        },
        sub: function(e, t, n, r) {
            var i = this.subs[e];
            i && (this.activeSub = e, i(t, n, this, r), this.activeSub = !1)
        }
    };
    var a = /&/g,
        o = /</g,
        s = />/g,
        c = /\'/g,
        l = /\"/g,
        u = /[&<>\"\']/,
        d = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
}("undefined" != typeof exports ? exports : Hogan), this.Whiskers || ! function(e) {
        "use strict";
        var t = e.Hogan,
            n = function(e, t) {
                var n, r = this;
                for (e = e.split("."); e.length > 1;) n = e.shift(), r = r.hasOwnProperty(n) ? r[n] : r[n] = {};
                r[e[0]] = t
            },
            r = e.Whiskers = function(e, i) {
                var a = "function" == typeof t.compile ? t : null;
                n.call(r, e, new t.Template(i, "", a, {
                    modelGet: !0
                }))
            }
    }(this), Whiskers("partials.call_action", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<div class="title-action"> <a href="'), r.b(r.v(r.d("ctTitle.url", e, t, 0))), r.b('" '), r.s(r.d("ctTitle.target", e, t, 1), e, t, 0, 72, 99, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('target="'), n.b(n.v(n.d("ctTitle.target", e, t, 0))), n.b('"')
            }), e.pop()), r.b(' title="'), r.b(r.v(r.d("ctTitle.title", e, t, 0))), r.b('">'), r.s(r.d("ctTitle.asset_desktop_image", e, t, 1), e, t, 0, 177, 270, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('<span style="background-image:url('), n.b(n.v(n.d("ctTitle.asset_desktop_image", e, t, 0))), n.b(')" class="cta-image"></span>')
            }), e.pop()), r.b('<span class="cta-title">'), r.b(r.v(r.d("ctTitle.title", e, t, 0))), r.b("</span></a> </div> "), r.s(r.f("ctPromo", e, t, 1), e, t, 0, 374, 514, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <div class="promo-action"> <a href="'), n.b(n.v(n.d("ctPromo.url", e, t, 0))), n.b('" title="'), n.b(n.v(n.d("ctPromo.title", e, t, 0))), n.b('"><span class="cta-title">'), n.b(n.v(n.d("ctPromo.title", e, t, 0))), n.b("</span></a> </div> ")
            }), e.pop()), r.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.logo_btn", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<button class="btn icon-logo'), r.s(r.f("alignRight", e, t, 1), e, t, 0, 43, 54, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(" alignRight")
            }), e.pop()), r.b('" title="'), r.b(r.v(r.f("link_disney_video", e, t, 0))), r.b('" id="logoBtn" aria-label="'), r.b(r.v(r.f("link_disney_video", e, t, 0))), r.b('"></button>'), r.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.share_btn", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<button class="btn icon-share" title="'), r.b(r.v(r.f("shareVideo", e, t, 0))), r.b('" id="shareBtn" aria-label="'), r.b(r.v(r.f("shareVideo", e, t, 0))), r.b('" data-show-tooltip="true"></button> <div class="tooltips top"><span class="share-tooltip">'), r.b(r.v(r.f("shareVideo", e, t, 0))), r.b("</span></div>"), r.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.tooltips", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<div class="tooltips bottom"> <span class="play-tooltip">'), r.b(r.v(r.f("play", e, t, 0))), r.b('</span> <span class="pause-tooltip">'), r.b(r.v(r.f("pause", e, t, 0))), r.b('</span> <span class="unmute-tooltip">'), r.b(r.v(r.f("unmute", e, t, 0))), r.b('</span> <span class="mute-tooltip">'), r.b(r.v(r.f("mute", e, t, 0))), r.b('</span> <span class="logo-tooltip">'), r.b(r.v(r.f("link_disney_video", e, t, 0))), r.b('</span> <span class="language-tooltip">'), r.b(r.v(r.f("captions", e, t, 0))), r.b('</span> <span class="maximize-tooltip">'), r.b(r.v(r.f("maximize", e, t, 0))), r.b('</span> <span class="minimize-tooltip">'), r.b(r.v(r.f("minimize", e, t, 0))), r.b("</span> </div>"), r.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.DisneyVideo,
            r = t.Utilities,
            i = e.Whiskers,
            a = e.Tracker,
            o = e.jQuery,
            s = t.Style.breakpoints;
        r.loadStylesheet("https://static-mh.content.disney.io/matterhorn/assets/videoplayer-29ffe06c8edf.css"), t.MatterhornVideoPlayer = function(c, l) {
            function u(e) {
                d(e), f(e), p(e), m(e)
            }

            function d(e) {
                e.messageBus && (e.messageBus.addMessageListener("playComplete", k), e.messageBus.addMessageListener("volumeChange", S), e.messageBus.addMessageListener("enteredFullscreen", x), e.messageBus.addMessageListener("exitedFullscreen", A))
            }

            function f(t) {
                var n, i = t.config.showPauseCard,
                    a = e.window.innerWidth > s.midLow;
                i && a && (n = "https://static-mh.content.disney.io/matterhorn/assets/videoplayer/video_pausecard-22e3fee6bdc7.js", r.loadScript(n, h))
            }

            function h() {
                D.pauseCard = new t.PauseCard(D)
            }

            function p(e) {
                if (e.config.showEndCard) {
                    var t = "https://static-mh.content.disney.io/matterhorn/assets/videoplayer/video_endcard-784324a8973f.js";
                    r.loadScript(t, g)
                }
            }

            function g() {
                D.endCard = new t.EndCard(D)
            }

            function m(e) {
                var t, n, r = e.video;
                if (e && e.ads && e.ads.enabled && (t = !0), r && r.ads && r.ads.context && r.ads.context.status && (n = r.ads.context), t && n) {
                    n.video = r;
                    var i = r.ads.context.status();
                    i.done(v)
                } else N(), F.resolve()
            }

            function v() {
                var e = D.video.ads,
                    n = e.context;
                switch (n.adSystem) {
                    case "dfp":
                        j = n.getVideoAdTagUrl(l.video), e.dfp = {
                            adTagUrl: j,
                            companion: n.companion
                        }, t.Ads && t.Ads.setPlayer(D);
                        break;
                    case "admaster":
                        e.dfp = {
                            adTagUrl: n.adTagUrl,
                            adTagPreUrl: n.adTagPreUrl,
                            adTagPostUrl: n.adTagPostUrl,
                            dfpAdRule: n.dfpAdRule,
                            companion: n.companion
                        }
                }
                N(), F.resolve()
            }

            function b(e, r) {
                var i;
                r.video.ads[r.video.ads.context.adSystem] = {};
                var a = {
                    showEndCard: i,
                    tracking: {
                        trackVideo: y,
                        trackEvent: _,
                        trackLink: w
                    },
                    geo: {
                        geoFunc: t.geo
                    },
                    dependencies: [F, N],
                    loadVideoInline: !0
                };
                o.extend(!0, a, r);
                var s = new n.VideoPlayer(e, a);
                return s
            }

            function y(e) {
                a.video({
                    analyticsData: e
                })
            }

            function _(e, t, n) {
                a.link({
                    linkName: e,
                    linkPosition: t,
                    href: n
                })
            }

            function w(e, t, n) {
                a.event({
                    eventCategory: e,
                    action: t,
                    label: n
                })
            }

            function k() {
                D.config.continuousPlay || D.controls.exitFullscreen();
                var t = D.config.video;
                !D.config.showEndCard && t.next_in_slider && t.next_in_slider.href && (e.location.href = t.next_in_slider.href)
            }

            function S() {
                "kalturaV3" === D.config.playerType && (D.info.getMuteState() ? (I(o(".mute-tooltip")), R(o(".unmute-tooltip"))) : (I(o(".unmute-tooltip")), R(o(".mute-tooltip"))))
            }

            function x() {
                o(".module.video_playlist_inline").find(".bound").addClass("full-screen-mode"), o(".module.watch-basic-view").find(".bound").addClass("full-screen-mode"), o(".module.watch-side-playlist-view").find(".bound").addClass("full-screen-mode"), o(".module.watch_playlist_2").find(".bound").addClass("full-screen-mode"), o("#" + D.id + " .playkit-player-gui").find(".playkit-control-fullscreen button").focus()
            }

            function A() {
                o(".module .bound").removeClass("full-screen-mode"), o("#" + D.id + " .playkit-player-gui").find(".playkit-control-fullscreen button").focus()
            }

            function C(n) {
                var r = !D.video.hasCaptions(),
                    o = n.find(".icon-logo");
                if (o.length <= 0) {
                    var s = {
                        alignRight: r,
                        link_disney_video: D.config.translations.link_disney_video || "Link Disney Video"
                    };
                    n.append(i.partials.logo_btn.render(s))
                } else r ? o.addClass("alignRight") : o.removeClass("alignRight");
                n.find(".icon-logo").on("click", function() {
                    var n, r = "http://video.disney.com",
                        i = "",
                        o = "";
                    if (D.config.parentView && D.config.parentView.model) {
                        var s = D.config.parentView.model;
                        n = s.attributes.view + "/", i = n + D.video.title, o = n + s.collection.href
                    } else if (t.EmbedVideo) {
                        var c = t.EmbedVideo.cto;
                        n = "Embed Video/" + c.property + "/", i = n + D.video.title, o = n + D.video.href
                    }
                    a.link({
                        linkName: i,
                        linkPosition: o,
                        href: r
                    }), e.window.location.href = r
                })
            }

            function P() {
                return !!t.EmbedVideo && M()
            }

            function T(n) {
                if (o(n).on("shareVideo", function() {
                        if (D.video) {
                            D.controls.exitFullscreen();
                            var n = D.video.href || D.video.url,
                                r = D.video.thumb || "",
                                i = D.video.title || D.video.share.title,
                                a = D.video.embedURL || "";
                            if (t.EmbedVideo) {
                                if (n) {
                                    var o = n.indexOf("?") >= 0 ? "&" : "?";
                                    n = n + o + "share=1", e.open(n, "_blank")
                                }
                            } else t.AgeGate.triggerSocialAgeGate({
                                href: n || "",
                                thumb: r || "",
                                title: i || "",
                                source: n || "",
                                isSocial: !0,
                                embedURL: a || ""
                            })
                        } else D.video = D.config.video || {}
                    }), !D.video.hideShare) {
                    if (!P() && n.find(".icon-share").length <= 0) {
                        var r = {
                            shareVideo: D.config.translations.share || "Share"
                        };
                        n.append(i.partials.share_btn.render(r))
                    }
                    D.video.contentToolbarTitleLink && E(n)
                }
                n.find(".icon-share").on("click", function() {
                    o(n).trigger("shareVideo")
                })
            }

            function E(e) {
                var t = {
                    ctTitle: D.video.contentToolbarTitleLink,
                    ctPromo: D.video.contentToolbarPromoLink && D.video.contentToolbarPromoLink[0] || !1
                };
                e.append(i.partials.call_action.render(t))
            }

            function O(e) {
                if (o(".tooltips.bottom").length <= 0) {
                    var t = {
                        play: D.config.translations.play || "Play",
                        pause: D.config.translations.pause || "Pause",
                        unmute: D.config.translations.unmute || "Unmute",
                        mute: D.config.translations.mute || "Mute",
                        link_disney_video: D.config.translations.link_disney_video || "Link Disney Video",
                        captions: D.config.translations.captions || "Captions",
                        maximize: D.config.translations.maximize || "Maximize",
                        minimize: D.config.translations.minimize || "Minimize"
                    };
                    e.append(i.partials.tooltips.render(t))
                } else I(o(".tooltips.bottom"));
                var n, r, a, s = e.find('.playkit-control-play-pause button, button[aria-label="Volume"], .playkit-icon-language, .icon-logo, .icon-share, .playkit-icon-maximize, .playkit-icon-minimize'),
                    c = o(".tooltips");
                s.on("mouseover", function() {
                    R(c), I(c.find("span")), n = o(this)[0].className.toLowerCase(), n.includes("playkit-control-button") && (n = o(this).attr("aria-label").toLowerCase()), "volume" !== n && "language" !== n ? (a = n.lastIndexOf("-") + 1, n = n.substring(a), n.indexOf("alignright") > 0 && (n = "logo")) : "volume" === n && (n = o(this).parent().hasClass("playkit-is-muted") ? "unmute" : "mute"), r = "." + n.toLowerCase() + "-tooltip", R(o(r))
                }), s.on("mouseleave", function() {
                    I(c.find("span")), n = o(this).selector, n && (a = n.lastIndexOf("-") + 1, n = n.substring(a), r = n + "-tooltip", I(o(r)))
                })
            }

            function I(e) {
                e.removeClass("visible")
            }

            function R(e) {
                e.addClass("visible")
            }

            function L(t, n) {
                e.window.setTimeout(function() {
                    o(t).length ? n(t, o(t)) : L(t, n)
                }, 500)
            }

            function M() {
                return n.Capabilities.isMobileBrowser()
            }
            var D, j, F = o.Deferred(),
                N = function() {
                    var t = new e.MutationObserver(function(e) {
                            e.forEach(function() {
                                for (var e = o(".adControls iframe"), t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "-1")
                            })
                        }),
                        n = {
                            childList: !0,
                            subtree: !0
                        },
                        r = e.document.getElementById("frame");
                    r && t.observe(r, n)
                };
            D = b(c, l), D && !o.isEmptyObject(D) && u(D);
            var B = D.loadVideoByObject;
            D.loadVideoByObject = function(e) {
                e && (D.pauseCard && (D.pauseCard.destroy(), D.pauseCard = new t.PauseCard(D)), D.config.showEndCard && !D.endCard && (D.endCard = new t.EndCard(D)), F = o.Deferred(), D.config.dependencies = [F], B.apply(this, arguments), m(D))
            };
            var U = D.loadVideo;
            D.loadVideo = function(n) {
                if ("kalturaV3" !== D.config.playerType) return U(n);
                var r, i;
                i = "undefined" != typeof D.id ? "#" + D.id + " .playkit-player-gui" : ".playkit-player-gui", L(i, function() {
                    r = o(i), r.find(".video-title").length <= 0 ? D.video.hideTitle || r.append('<div class="video-title">' + D.video.title + "</div>") : r.find(".video-title").text(D.video.title), r.closest(".playkit-player").on("focus", function() {
                        o(".playkit-player").addClass("playkit-hover")
                    }), D.video.hideLogo || C(r), T(r), !t.EmbedVideo && e.location.search.indexOf("share=1") >= 0 && o(r).trigger("shareVideo"), M() || O(r)
                }), U(n)
            };
            var q = D.destroy;
            if (D.destroy = function() {
                    D.messageBus && D.messageBus.removeMessageListener("playComplete", k), D.endCard && D.endCard.destroy(), D.pauseCard && D.pauseCard.destroy(), q()
                }, D.messageBus && D.video) {
                var z = D.video.id,
                    H = D.video.title,
                    W = D.video.thumb,
                    V = e.window.parent,
                    G = [
                        ["adStart", "videoAdStart"],
                        ["adEnd", "videoAdEnd"],
                        ["played", "videoPlayed"],
                        ["paused", "videoPaused"],
                        ["playComplete", "videoPlayComplete"],
                        ["finishedEmbedPoster", "videoFinishedEmbedPoster"],
                        ["finishedEmbedPlayer", "videoFinishedEmbedPlayer"],
                        ["mediaReady", "videoMediaReady"]
                    ];
                G.forEach(function(e) {
                    D.messageBus.addMessageListener(e[0], function() {
                        V.postMessage([e[1], z, H, W], "*")
                    })
                }), e.window.addEventListener("message", function(t) {
                    if (e.window !== t.source && t.data && t.data[0]) switch (t.data[0]) {
                        case "videoPause":
                            D.controls.pause();
                            break;
                        case "videoPlay":
                            D.controls.play();
                            break;
                        case "videoMute":
                        case "videoUnmute":
                            t.data[1] && D.controls.mute(t.data[1])
                    }
                })
            }
            return D
        }
    }(this);