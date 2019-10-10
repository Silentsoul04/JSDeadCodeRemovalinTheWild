(function(t) {
    var h = window.AmazonUIPageJS || window.P,
        l = h._namespace || h.attributeErrors,
        e = l ? l("QTipsWebLibrary", "") : h;
    e.guardFatal ? e.guardFatal(t)(e, window) : e.execute(function() {
        t(e, window)
    })
})(function(t, h, l) {
    (function() {
        t.when("jQuery", "QTipsConstants", "ready").register("QTipLibrary", function(e, h) {
            var b = {
                Model: function(a) {
                    this.attributes = a || {};
                    this.set(a);
                    this.initialize.apply(this, arguments)
                }
            };
            e.extend(b.Model.prototype, {
                initialize: function() {},
                get: function(a) {
                    if (this.attributes && this.attributes.hasOwnProperty(a)) return this.attributes[a]
                },
                has: function(a) {
                    return null !== this.get(a) && this.get(a) !== l
                },
                set: function(a) {
                    for (var b in a) a.hasOwnProperty(b) && (this.attributes[b] = a[b])
                },
                unset: function(a) {
                    delete this.attributes[a]
                },
                parse: function(a, b) {
                    return a
                },
                toJson: function() {
                    return this.attributes ? JSON.stringify(this.attributes) : ""
                }
            });
            b.Collection = function(a) {
                this.models = a || {};
                this.initialize.apply(this, arguments)
            };
            e.extend(b.Collection.prototype, {
                initialize: function() {},
                at: function(a) {
                    if (this.models && this.models.hasOwnProperty(a)) return this.models[a]
                },
                add: function(a) {
                    a && (this.models[this.modelLength()] = a)
                },
                remove: function(a) {
                    for (var b in this.models) this.models[b] === a && delete this.models[b]
                },
                create: function(a) {
                    a = this.parse(a);
                    for (var b in a) a.hasOwnProperty(b) && this.add(a[b])
                },
                _prepareModel: function(a) {
                    if (this.model && a) {
                        for (var e in a)
                            if (a.hasOwnProperty(e)) {
                                var u = a[e];
                                h.regex.numberRegex.test(u) && (u = Number(u));
                                a[e] = u
                            }
                        a = new b.Model(a)
                    }
                    return a
                },
                set: function(a) {
                    this.model = a
                },
                modelLength: function() {
                    if (this.models) return Object.keys(this.models).length
                },
                parse: function(a, b) {
                    return a
                },
                toJson: function() {
                    return JSON.stringify(this.models)
                }
            });
            b.View = function(a) {
                this.tagName = a || "\x3cdiv/\x3e";
                this.template = this.template || "";
                this.initialize.apply(this, arguments)
            };
            e.extend(b.View.prototype, {
                events: {},
                initialize: function() {},
                render: function() {},
                remove: function() {},
                _removeElement: function(a) {
                    (a = this.getElement(a)) && (a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a))
                },
                setElement: function(a, b) {
                    e(a).append(b)
                },
                getElement: function(a) {
                    if ((a = e(a)) &&
                        0 < a.length) return a[0].lastChild
                },
                add: function(a, b) {
                    var e = this._createElement(this.template, b);
                    this.setElement(a, e);
                    return e
                },
                _createElement: function(a, b) {
                    var u = this._processTemplate(a, b);
                    return e(this.tagName).html(u)
                },
                _processTemplate: function(a, b) {
                    var e = a.match(h.regex.templateSpliterRegex);
                    if (e)
                        for (var p = 0; p < e.length; p++) {
                            var g = e[p].match(/\w+/)[0];
                            b && b.has(g) && (a = a.replace(e[p], b.get(g)))
                        }
                    return a
                }
            });
            b.Model.extend = b.Collection.extend = b.View.extend = function(a, b) {
                var h = this,
                    p = a && "object" === typeof a &&
                    a.hasOwnProperty("constructor") ? a.constructor : function() {
                        return h.apply(this, arguments)
                    };
                e.extend(p, h, b);
                var g = function() {
                    this.constructor = p
                };
                g.prototype = h.prototype;
                p.prototype = new g;
                a && e.extend(p.prototype, a);
                p.__super__ = h.prototype;
                return p
            };
            return b
        })
    })();
    (function() {
        var e = !1;
        t.when("A", "a-sheet", "QTips").execute(function(h, b, a) {
            h.on("a:sheet:beforeShow", function(b) {
                e = !0;
                a.view.dismissAndRender()
            });
            h.on("a:sheet:afterHide", function(b) {
                e = !1;
                a.view.dismissAndRender()
            })
        });
        t.when("A", "jQuery", "QTipsConstants",
            "QTipLibrary", "QTipsStyles", "QTipsMetrics").register("QTips", function(w, b, a, v, u, p) {
            var g = {
                    isDefined: function(c) {
                        return null !== c && c !== l
                    },
                    processAnchor: function(c, d) {
                        var a = c.split(d);
                        Array.isArray(a) || (a = [a]);
                        Array.prototype.find || (Array.prototype.find = function(c, d) {
                            var a = this.length,
                                b;
                            for (b = 0; b < a; b += 1)
                                if (c.call(d, this[b], b, this)) return this[b];
                            return l
                        });
                        return a.find(function(c, d, a) {
                            return b(c).length
                        }) || c
                    },
                    getIndexByAnchor: function(c, d) {
                        Array.prototype.findIndex || (Array.prototype.findIndex = function(c,
                            d) {
                            if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                            if ("function" !== typeof c) throw new TypeError("callback must be a function");
                            for (var a = Object(this), b = a.length, e, g = 0; g < b; g++)
                                if (e = a[g], c.call(d, e, g, a)) return g;
                            return -1
                        });
                        return c.findIndex(function(c, a, b) {
                            return d === Object.keys(b[a])[0]
                        }, d)
                    },
                    getCookie: function(c) {
                        for (var d = document.cookie ? document.cookie.split(";") : [], a = 0; a < d.length; a++) {
                            var b = d[a].trim().split("\x3d"),
                                q = b[0].replace(/(%[0-9A-Z]{2})+/g,
                                    decodeURIComponent);
                            if (c === q) return b.slice(1).join("\x3d").replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                        }
                    }
                },
                r = {};
            r.model = new v.Model;
            r.utils = g;
            r.addStyles = function() {
                var c = document.createElement("style");
                c.innerHTML = u;
                document.head.appendChild(c)
            };
            var y = v.Collection.extend({
                model: r.model,
                elementAnchorList: [],
                invokingEventsMap: {},
                isSet: !1,
                registerEvent: function(c) {
                    var d = c.data.eventType,
                        a = c.data.invokingEventElement;
                    c = c.data.self;
                    if (d in c.invokingEventsMap) r.utils.isDefined(c.invokingEventsMap[d]) &&
                        -1 === c.invokingEventsMap[d].indexOf(a) && c.invokingEventsMap[d].push(a);
                    else {
                        var b = [];
                        b.push(a);
                        c.invokingEventsMap[d] = b
                    }
                },
                add: function(c) {
                    try {
                        if (p.incrementCounter("qtips_add_initiated"), g.isDefined(c) && g.isDefined(c.get("maxDisplayCount")) && g.isDefined(c.get("elementAnchor")) && 0 < c.get("maxDisplayCount")) {
                            var d = c.get("elementAnchor"),
                                k = g.processAnchor(d, a.regex.anchorSpliterRegex);
                            c.set({
                                elementAnchor: k
                            });
                            d = {};
                            d[c.get("elementAnchor")] = c.get("sequenceNum");
                            this.elementAnchorList.push(d);
                            this.models[c.get("elementAnchor")] =
                                c;
                            var f = c.get("invokingEventElement"),
                                q = c.get("invokingEventType");
                            r.utils.isDefined(f) && 0 < f.length && r.utils.isDefined(q) && 0 < q.length && (f = g.processAnchor(f, a.regex.anchorSpliterRegex), b(f).bind(q, {
                                eventType: q,
                                invokingEventElement: f,
                                self: this
                            }, this.registerEvent))
                        }
                    } catch (e) {
                        p.incrementCounter("qtips_model_undefined"), t.log(e, "WARN", "QTips")
                    }
                },
                parse: function(c, d) {
                    if (g.isDefined(c)) {
                        var a = this._prepareModel.bind(this);
                        c.forEach(function(d, b, e) {
                            c[b] = a(d)
                        });
                        return c
                    }
                }
            });
            r.collection = new y;
            v = v.View.extend({
                isDismissInvoked: !0,
                currentSequence: 0,
                qtipsId: "#qtips",
                pageAnchor: "#a-page",
                qtipDismissIcon: "#qtip-dismiss-cross",
                qtipVideoId: "#qtip-video",
                popoverClass: ".a-popover",
                searchSugesstions: "#suggestions, #nav_srch_sggst, .nav_suggest_link",
                searchFilterPage: ".sx-page.sx-filter-page.sx-animable",
                anchor: "#buyNow",
                defaultArrowPosition: "topright",
                qtipThumbnailId: "#qtip-thumbnail",
                qtipThumbnailTextId: "#qtip-thumbnail-text",
                collection: r.collection,
                events: {
                    "touchstart click keyup": "dismissAndRender",
                    scroll: "dismissAndRender",
                    orientationchange: "dismissAndRender",
                    "blur focus": "dismissOrRender",
                    "visibilitychange webkitvisibilitychange": "visibilityChange"
                },
                eventHandlers: {},
                toolTipVideoPlayed: {},
                addStaticToolTipHandlers: function(c) {
                    if (c.get("videoSource")) {
                        var d = this,
                            a = c.get("identifier");
                        d.addDismissIconHandlers(c);
                        b(d.qtipsId).bind("click.videoToolTip", {
                            model: c,
                            tipId: a
                        }, function(a) {
                            g.isDefined(d.animateIntervalId) && (clearInterval(d.animateIntervalId), d.animateIntervalId = l);
                            d.animateVideo(c);
                            d.clearFadeOut();
                            b(d.qtipsId).unbind("click.videoToolTip");
                            d.addVideoToolTipHandlers(c);
                            d.addDismissIconHandlers(c)
                        })
                    }
                },
                addDismissIconHandlers: function(c) {
                    var d = this;
                    c = c.get("identifier");
                    b(this.qtipDismissIcon).bind("click.staticToolTip", {
                        eventType: "dismissalByUser",
                        tipId: c
                    }, function(c) {
                        var a = c.data.tipId;
                        d.countLogger("dismiss_icon_clicked", a);
                        d.toolTipVideoPlayed && d.toolTipVideoPlayed[a] ? d.countLogger("dismissed_after_video_played", a) : d.countLogger("dismissed_before_video_played", a);
                        d.dismissAndRender.call(d, c);
                        c.stopPropagation()
                    })
                },
                addVideoToolTipHandlers: function(c) {
                    var d = this;
                    c = c.get("identifier");
                    b(this.qtipVideoId).bind("play.videoToolTip", {
                        tipId: c
                    }, function(c) {
                        c = c.data.tipId;
                        d.toolTipVideoPlayed && !d.toolTipVideoPlayed[c] && (d.toolTipVideoPlayed[c] = d.getVideoPlayedMetricsObject());
                        d.countLogger("video_played", c)
                    });
                    b(this.qtipVideoId).bind("timeupdate.videoToolTip", {
                        tipId: c
                    }, w.throttle(function(c) {
                        c = c.data.tipId;
                        var a = b(d.qtipVideoId);
                        if (a[0]) {
                            var a = Math.ceil(4 * a[0].currentTime / a[0].duration),
                                q = d.toolTipVideoPlayed[c];
                            if (d.toolTipVideoPlayed && q) {
                                var e;
                                1 <= a && (q.firstQuarterPublished ||
                                    (e = 1, q.firstQuarterPublished = !0), 2 <= a && (q.secondQuarterPublished || (e = 2, q.secondQuarterPublished = !0), 3 <= a && (q.thirdQuartedrublished || (e = 3, q.thirdQuartedrublished = !0), 4 <= a && !q.fourthQuarterPublished && (e = 4, q.fourthQuarterPublished = !0))), e && d.countLogger("video_length_played_" + e, c), d.toolTipVideoPlayed[c] = q)
                            }
                        }
                    }, 1E3));
                    b(this.qtipVideoId).bind("error.videoToolTip", {
                        tipId: c
                    }, function(c) {
                        d.countLogger("video_failed_to_load", c.data.tipId)
                    })
                },
                getVideoPlayedMetricsObject: function() {
                    return {
                        firstQuarterPublished: !1,
                        secondQuarterPublished: !1,
                        thirdQuartedrublished: !1,
                        fourthQuarterPublished: !1
                    }
                },
                addAutoDismissalHandlers: function() {
                    for (var c in this.events) this.events.hasOwnProperty(c) && !g.isDefined(this.eventHandlers[c]) && (this.eventHandlers[c] = this[this.events[c]].bind(this), b(h).bind(c, this.eventHandlers[c]))
                },
                removeStaticToolTipHandlers: function() {
                    b(this.qtipDismissIcon).unbind("click.staticToolTip");
                    b(this.qtipsId).unbind("click.videoToolTip");
                    b(this.qtipVideoId).unbind("play.videoToolTip");
                    b(this.qtipVideoId).unbind("error.videoToolTip");
                    b(this.qtipVideoId).unbind("timeupdate.videoToolTip")
                },
                removeAutoDismissalHandlers: function() {
                    for (var c in this.events) this.events.hasOwnProperty(c) && g.isDefined(this.eventHandlers[c]) && (b(h).unbind(c, this.eventHandlers[c]), this.eventHandlers[c] = l)
                },
                render: function(c) {
                    this.fadeOut(this.remove.bind(this));
                    var d = this.addAndPosition(this.anchor, c);
                    if ("hidden" !== document.visibilityState && this.hasNoPopover() && g.isDefined(d)) {
                        this.animateIn(c);
                        var d = b(".qtips-text").width() + a.view.deltaX,
                            k = b(this.qtipsId).width();
                        c.get("videoWidth");
                        d < k && !c.get("videoSource") && (b(this.qtipsId).width(d), a.regex.positionRightRegex.test(c.get("elementArrowPosition")) && (d = parseInt(b(this.qtipsId).css("left"), 10) + (k - d) + a.view.deltaX, b(this.qtipsId).css({
                            left: d
                        })));
                        c = c.get("elementDuration") || a.timer.defaultAnimationTime;
                        this.fadeTimeoutId = setTimeout(this.fadeOut.bind(this), c, this.nextQTip);
                        c = g.getIndexByAnchor(this.collection.elementAnchorList, this.anchor); - 1 !== c && (this.dismissalTimeoutId = setTimeout(this.dismissalHandler.bind(this),
                            a.timer.defaultDismissalCallbackTime, c))
                    } else this.fadeOut(this.remove.bind(this)), this.renderTimeoutId = setTimeout(this.render.bind(this), c.get("elementStartOffset"), c)
                },
                dismissalHandler: function(c) {
                    var a = Object.keys(this.collection.elementAnchorList[c])[0],
                        b = this.collection.elementAnchorList[c][a],
                        a = this.collection.at(a).get("identifier");
                    this.collection.elementAnchorList.splice(c, 1);
                    g.isDefined(this.dismissalCallback) && this.dismissalCallback({
                        identifier: a,
                        sequenceNum: b
                    })
                },
                postQTipRender: function() {
                    if (this.collection.elementAnchorList) {
                        this.addAutoDismissalHandlers();
                        for (var c = this.collection.elementAnchorList, d = 0; d < c.length; d++) {
                            var b = g.processAnchor(Object.keys(c[d])[0], a.regex.anchorSpliterRegex);
                            if (this.isElementVisible(b)) {
                                var f = this.collection.at(b),
                                    e = f.get("invokingEventType"),
                                    h = f.get("invokingEventElement"),
                                    n = this.collection.invokingEventsMap[e],
                                    m = f.get("dismissalType");
                                m && "USER" === m.toUpperCase() && this.removeAutoDismissalHandlers();
                                if (!e || !h || r.utils.isDefined(n) && -1 !== n.indexOf(h)) {
                                    this.currentSequence = c[d][b];
                                    this.anchor = b;
                                    this.clearRender();
                                    c = f.get("elementStartOffset");
                                    if (isNaN(c) || 0 > c) c = a.timer.defaultStartOffset;
                                    this.hasNoPopover() ? this.renderTimeoutId = setTimeout(this.render.bind(this), c, f) : this.renderTimeoutId = setTimeout(this.postQTipRender.bind(this), c);
                                    break
                                }
                            }
                        }
                        g.isDefined(this.renderTimeoutId) || (this.renderTimeoutId = setTimeout(this.postQTipRender.bind(this), a.timer.defaultStartOffset))
                    }
                },
                dismissAndRender: function(c) {
                    var a = function() {
                            this.clearRender();
                            this.fadeOut(function() {
                                this.nextQTip()
                            })
                        },
                        b = w.throttle(a.bind(this), 1E3);
                    c && c.data && "dismissalByUser" === c.data.eventType ?
                        a.call(this) : b.call(this)
                },
                dismissOrRender: function(c) {
                    !this.isBlurSet && c && "blur" === c.type ? (this.clearRender(), this.clearFadeOut(), this.fadeOut(this.remove.bind(this)), this.isBlurSet = !0, this.isWindowVisible = l) : this.isBlurSet && c && "focus" === c.type && (this.isWindowVisible || this.postQTipRender(), this.isBlurSet = !1)
                },
                visibilityChange: function() {
                    this.isWindowVisible !== l && !0 !== this.isWindowVisible || "hidden" !== document.visibilityState ? !1 === this.isWindowVisible && "hidden" !== document.visibilityState && (this.postQTipRender(),
                        this.isWindowVisible = !0) : (this.isBlurSet || (this.clearFadeOut(), this.clearRender(), this.fadeOut(this.remove.bind(this))), this.isWindowVisible = !1)
                },
                clearRender: function() {
                    g.isDefined(this.renderTimeoutId) && (clearTimeout(this.renderTimeoutId), delete this.renderTimeoutId);
                    g.isDefined(this.dismissalTimeoutId) && clearTimeout(this.dismissalTimeoutId)
                },
                clearFadeOut: function() {
                    g.isDefined(this.fadeTimeoutId) && clearTimeout(this.fadeTimeoutId)
                },
                isElementVisible: function(c) {
                    var a = h.scrollY || h.pageYOffset,
                        k = document.documentElement.scrollTop ||
                        document.body.scrollTop,
                        a = g.isDefined(a) ? a : k,
                        k = a + (h.innerHeight || b(h).height()),
                        f = b(c),
                        f = g.isDefined(f) ? f.offset() : l;
                    return g.isDefined(f) && (f = f.top, b(c + ":visible")[0] && a <= f && f < k) ? !0 : !1
                },
                hasNoPopover: function() {
                    for (var c = b(this.popoverClass), a = 0; a < c.length; a++) {
                        var k = c[a].style;
                        if (k && k.display && "none" !== k.display) return !1
                    }
                    return !b(this.searchSugesstions).is(":visible") && !b(this.searchFilterPage).is(":visible") && !e
                },
                addAndPosition: function(c, d) {
                    var k = this._createElement(a.templates.defaultTemplate,
                            d),
                        f = k,
                        e;
                    d.get("videoSource") && (d.get("videoThumbnail") || (f = d.get("videoSource").split(","), d.set({
                        videoThumbnail: f[0].replace(/^\s*/, "").replace(/\s*$/, "")
                    }), 1 < f.length ? d.set({
                        videoSource: f[1].replace(/^\s*/, "").replace(/\s*$/, "")
                    }) : d.set({
                        videoSource: ""
                    })), f = this._createElement(a.templates.preVideoTemplate, d), e = this._createElement(a.templates.dismissIconTemplate, d), k.find("span.qtips-text").html(e).append(f), f = k);
                    this.setElement(this.pageAnchor, f);
                    b(this.qtipsId).hide();
                    this.addStaticToolTipHandlers(d);
                    var x = this;
                    b(f).click(function() {
                        if (d && d.attributes) {
                            var a = d.attributes.identifier;
                            g.isDefined(x.terminationCallback) && x.terminationCallback({
                                identifier: a
                            })
                        }
                    });
                    if (0 < b(this.qtipsId).length) {
                        e = b(h).width() * a.view.maxWidthFactor;
                        e = e >= a.view.maxWidth ? a.view.maxWidth : e;
                        if (d.get("videoSource") && d.get("videoWidth") > b(this.qtipsId).width()) {
                            var n = b(this.qtipsId).width();
                            b(this.qtipsId).width(d.get("videoWidth") + a.view.deltaX);
                            var m = d.get("videoWidth");
                            a.regex.positionRightRegex.test(d.get("elementArrowPosition")) &&
                                (n = parseInt(b(this.qtipsId).css("left"), 10) - (m - n) - a.view.deltaX, b(this.qtipsId).css({
                                    left: n
                                }))
                        }
                        b(this.qtipsId).width() > e && (b(this.qtipsId).width(e), d.set({
                            videoWidth: e - a.view.deltaX
                        }));
                        this.setThumbnailCss(k, d);
                        return c === this.pageAnchor || this.adjustCoordinates(c, d.get("elementArrowPosition") || this.defaultArrowPosition) ? f : void 0
                    }
                },
                setThumbnailCss: function(a, d) {
                    if (d.get("videoSource")) {
                        var k = .25 * b(this.qtipsId).width(),
                            f = .15 * b(this.qtipsId).width(),
                            e = a.find("i#qtip-dismiss-cross").height();
                        a.find("div#qtip-thumbnail").css({
                            width: k +
                                "px",
                            height: f + "px"
                        });
                        a.find("img#qtip-thumbnail-image").css({
                            width: k + "px",
                            height: f + "px"
                        });
                        a.find("img#qtip-thumbnail-play").css({
                            width: .64 * f + "px",
                            height: .64 * f + "px"
                        });
                        var g = b(this.qtipsId).height() > f ? b(this.qtipsId).height() : f;
                        a.find("img#qtip-thumbnail-play").css({
                            left: (k - .64 * f) / 2 + "px",
                            top: (g - .64 * f) / 2 + "px"
                        });
                        a.find("i#qtip-dismiss-cross").css({
                            position: "relative",
                            right: "0px",
                            top: (g - e) / 2 + "px"
                        })
                    }
                },
                animateIn: function(c) {
                    b(this.qtipsId).fadeIn(a.timer.defaultFadeTime);
                    setTimeout(this.bounceAnimate.bind(this),
                        0, c.get("elementBounceDuration"))
                },
                animateVideo: function(c) {
                    var d = this,
                        k = b(d.qtipsId).prop("classList"),
                        f = !1,
                        e;
                    for (e = 0; e < k.length; e++) a.regex.positionTopRegex.test(k[e]) && (f = !0);
                    b(d.qtipDismissIcon).css({
                        top: ""
                    });
                    k = d._createElement(a.templates.videoTemplate, c);
                    d._createElement(a.templates.dismissIconTemplate, c);
                    var g = b(d.qtipThumbnailTextId).position();
                    e = b(d.qtipsId).position().top;
                    var h = b(d.qtipsId).height();
                    b(d.qtipThumbnailId).remove();
                    b(d.qtipThumbnailTextId).css({
                        "padding-left": "",
                        "padding-bottom": "10px"
                    });
                    var m = b(d.qtipThumbnailTextId).height();
                    b(d.qtipThumbnailTextId).css({
                        position: "absolute",
                        left: g.left + "px",
                        top: g.top + "px"
                    });
                    b(d.qtipsId).find("span.qtips-text").append(k);
                    b(d.qtipThumbnailTextId).animate({
                        left: "-\x3d" + g.left + "px"
                    }, {
                        duration: 800,
                        queue: !1,
                        complete: function() {
                            b(d.qtipThumbnailTextId).css({
                                position: "",
                                left: "",
                                top: ""
                            })
                        }
                    });
                    b(d.qtipVideoId).removeAttr("controls");
                    f ? (f = k.height(), b(d.qtipVideoId).css({
                        height: k.height()
                    }), b(d.qtipVideoId).attr("poster", c.get("videoThumbnail")), k.hide(), k.animate({
                        height: "toggle"
                    }, {
                        duration: 1E3,
                        queue: !1,
                        complete: function() {
                            b(d.qtipVideoId).attr("controls", "")
                        }
                    })) : (f = k.height() + m, b(d.qtipVideoId).css({
                        height: k.height()
                    }), b(d.qtipVideoId).attr("poster", c.get("videoThumbnail")), k.hide(), b(d.qtipsId).css({
                        top: e + h + "px"
                    }), k.animate({
                        height: "toggle"
                    }, {
                        duration: 800,
                        queue: !1,
                        complete: function() {
                            b(d.qtipVideoId).attr("controls", "")
                        }
                    }), b(d.qtipsId).animate({
                        height: "+\x3d" + f + "px",
                        marginTop: -f + "px"
                    }, {
                        duration: 1E3,
                        queue: !1,
                        complete: function() {}
                    }).css("overflow", "visible"))
                },
                bounceAnimate: function(c) {
                    var d =
                        a.bounce.amplitude;
                    this.animate({
                        delay: 10,
                        duration: c,
                        delta: function(c) {
                            var b = a.bounce.alpha,
                                d = a.bounce.beta;
                            return Math.pow(Math.E, -1 * a.bounce.gamma * c) * Math.cos(d * c - b)
                        },
                        anchor: this.qtipsId,
                        basePosition: b(this.qtipsId).position().top,
                        step: function(a) {
                            b(this.anchor).css({
                                top: this.basePosition - d * a + "px"
                            })
                        }
                    })
                },
                animate: function(a) {
                    var b = Date.now();
                    this.animateIntervalId = setInterval(function() {
                            var e = (Date.now() - b) / a.duration;
                            1 < e && (e = 1);
                            var f = a.delta(e);
                            a.step(f);
                            1 === e && clearInterval(this.animateIntervalId)
                        },
                        a.delay)
                },
                fadeOut: function(c) {
                    g.isDefined(c) ? 0 < b(this.qtipsId).length ? b(this.qtipsId).fadeOut(a.timer.defaultFadeTime, c.bind(this)) : (c = c.bind(this), c()) : b(this.qtipsId).fadeOut(a.timer.defaultFadeTime);
                    g.isDefined(this.animateIntervalId) && (clearInterval(this.animateIntervalId), this.animateIntervalId = l)
                },
                nextQTip: function() {
                    this.clearFadeOut();
                    g.isDefined(this.collection.elementAnchorList) && 0 < this.collection.elementAnchorList.length ? (this.remove(), this.postQTipRender()) : this.stopQTips()
                },
                stopQTips: function() {
                    this.removeAutoDismissalHandlers();
                    this.removeStaticToolTipHandlers();
                    var a = this.collection.invokingEventsMap,
                        d;
                    for (d in a)
                        if (a.hasOwnProperty(d) && g.isDefined(a[d]))
                            for (var e = a[d], f = 0; f < e.length; f++) b(e[f]).unbind(d, this.collection.registerEvent);
                    this.collection.invokingEventsMap = {};
                    this.fadeOut(this.remove.bind(this));
                    this.clearRender()
                },
                adjustCoordinates: function(c, d) {
                    var e = b(this.qtipsId);
                    if (0 >= e.length) return !1;
                    var f = b(c)[0].getBoundingClientRect(),
                        g = b(c).offset().top - f.top || 0,
                        p = a.view.arrowHeight + a.view.marginFactor * a.view.deltaY,
                        n, m;
                    if ("topleft" === d) n = f.left, m = f.bottom + a.view.arrowHeight + a.view.deltaY;
                    else if ("bottomleft" === d) n = f.left, m = f.top - Math.abs(e.height()) - p;
                    else if ("bottomright" === d) n = f.right - Math.abs(e.width()) - a.view.deltaX, m = f.top - Math.abs(e.height()) - p;
                    else if ("topright" === d) n = f.right - Math.abs(e.width()) - a.view.deltaX, m = f.bottom + a.view.arrowHeight + a.view.deltaY;
                    else if ("topmiddle" === d) {
                        m = f.right - f.left;
                        n = f.left + parseFloat(((m - Math.abs(e.width()) - a.view.deltaX) / 2).toFixed(2));
                        m = f.bottom + a.view.arrowHeight + a.view.deltaY;
                        var l = parseFloat((Math.abs(e.width()) / 2).toFixed(2));
                        this._setClassLeftStyleProperty("qtips-arrow-topmiddle", l + "px")
                    } else if ("bottommiddle" === d) m = f.right - f.left, n = f.left + parseFloat(((m - Math.abs(e.width()) - a.view.deltaX) / 2).toFixed(2)), m = f.top - Math.abs(e.height()) - p, l = parseFloat((Math.abs(e.width()) / 2).toFixed(2)), this._setClassLeftStyleProperty("qtips-arrow-bottommiddle", l + "px");
                    else return !1;
                    l = h.innerHeight || b(h).height();
                    0 > m ? (m = f.bottom + a.view.arrowHeight + a.view.deltaY, "bottomleft" === d ? b(this.qtipsId).removeClass("qtips-arrow-bottomleft").addClass("qtips-arrow-topleft") :
                        "bottomright" === d ? b(this.qtipsId).removeClass("qtips-arrow-bottomright").addClass("qtips-arrow-topright") : "bottommiddle" === d && (b(this.qtipsId).removeClass("qtips-arrow-bottommiddle").addClass("qtips-arrow-topmiddle"), l = parseFloat((Math.abs(e.width()) / 2).toFixed(2)), this._setClassLeftStyleProperty("qtips-arrow-topmiddle", l + "px"))) : f.bottom + Math.abs(e.height()) + p > l && (m = f.top - Math.abs(e.height()) - p, "topleft" === d ? b(this.qtipsId).removeClass("qtips-arrow-topleft").addClass("qtips-arrow-bottomleft") : "topright" ===
                        d ? b(this.qtipsId).removeClass("qtips-arrow-topright").addClass("qtips-arrow-bottomright") : "topmiddle" === d && (b(this.qtipsId).removeClass("qtips-arrow-topmiddle").addClass("qtips-arrow-bottommiddle"), l = parseFloat((Math.abs(e.width()) / 2).toFixed(2)), this._setClassLeftStyleProperty("qtips-arrow-bottommiddle", l + "px")));
                    m += g;
                    0 > n && f.left < f.right - f.left ? "topright" === d ? (n = f.left + a.view.deltaX, b(this.qtipsId).removeClass("qtips-arrow-topright").addClass("qtips-arrow-topleft")) : "bottomright" === d ? (n = f.left + a.view.deltaX,
                        b(this.qtipsId).removeClass("qtips-arrow-bottomright").addClass("qtips-arrow-bottomleft")) : (e = Math.abs(e.width()) + n, b(this.qtipsId).width(e), n = a.view.deltaX) : 0 === n && (n = a.view.deltaX);
                    b(this.qtipsId).css({
                        left: n + "px",
                        top: m + "px",
                        visibility: "visible"
                    });
                    return !0
                },
                _setClassLeftStyleProperty: function(a, b) {
                    var e = document.createElement("style");
                    document.head.appendChild(e);
                    (e = e.sheet) && (e.insertRule ? e.insertRule("." + a + "::after { left:" + b + " }", 0) : e.addRule && e.addRule("." + a + "::after", "left:" + b))
                },
                remove: function() {
                    b(this.qtipsId) &&
                        b(this.qtipsId)[0] !== l && this._removeElement(this.pageAnchor)
                },
                setDismissalCallback: function(a) {
                    this.dismissalCallback = a
                },
                setTerminationCallback: function(a) {
                    this.terminationCallback = a
                },
                countLogger: function() {},
                setCountLogger: function(a) {
                    this.countLogger = a
                }
            });
            r.view = new v;
            r.addStyles();
            return r
        })
    })();
    (function() {
        t.register("QTipsConstants", function() {
            return {
                view: {
                    deltaX: 20,
                    deltaY: 5,
                    marginFactor: 4,
                    arrowHeight: 8,
                    maxWidth: 300,
                    maxWidthFactor: .8
                },
                bounce: {
                    alpha: 10,
                    beta: 60,
                    gamma: 2,
                    amplitude: 7
                },
                timer: {
                    defaultStartOffset: 3E3,
                    defaultDismissalCallbackTime: 800,
                    defaultAnimationTime: 7E3,
                    defaultFadeTime: 400
                },
                regex: {
                    anchorSpliterRegex: /\|/g,
                    templateSpliterRegex: /<\%\s*\w*\s*\%>/g,
                    numberRegex: /^(\-|\+)?([0-9]+|Infinity)$/,
                    positionRightRegex: /right/,
                    positionTopRegex: /top/
                },
                templates: {
                    defaultTemplate: '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background { top: \x3c% elementY %\x3epx; left: \x3c% elementX %\x3epx; background-color: \x3c% elementBackgroundColor %\x3e; } .qtips-background:after { border-color : \x3c% elementBackgroundColor %\x3e transparent;}\x3c/style\x3e \x3cdiv class\x3d"qtips-textholder aok-relative aok-float-left"\x3e \x3cspan class\x3d"qtips-text"\x3e \x3c% elementValue %\x3e \x3c/span\x3e \x3c/div\x3e \x3c/div\x3e',
                    dismissIconTemplate: '\x3cdiv id\x3d"qtip-dismiss"\x3e\x3ci id\x3d"qtip-dismiss-cross" class\x3d"a-icon a-icon-close" role\x3d"img" style\x3d"float:right;padding-left:5%;padding-bottom:5%;"\x3e\x3c/i\x3e\x3c/div\x3e',
                    preVideoTemplate: '\x3cdiv id\x3d"qtip-thumbnail" style\x3d"text-align: left;display: table-cell; vertical-align: middle; border-style: solid; border-width: 1px; border-color: #FFFFFF; position:relative;"\x3e\x3cimg id\x3d"qtip-thumbnail-image"src\x3d\x3c%videoThumbnail%\x3e style\x3d"vertical-align: middle;position:relative"\x3e\x3cimg id\x3d"qtip-thumbnail-play"src\x3d"https://m.media-amazon.com/images/G/31/shopping-aids/play-icon._CB456863585_.png" style\x3d"vertical-align: middle;position:absolute;left:0"\x3e\x3c/div\x3e\x3cspan id\x3d"qtip-thumbnail-text" style\x3d"text-align: left;padding-left: 5%;display: table-cell;vertical-align: middle;width: 75%; line-height:1.2"\x3e\x3c% elementValue %\x3e\x3c/span\x3e',
                    videoTemplate: '\x3cvideo id\x3d"qtip-video" width\x3d\x3c%videoWidth%\x3e style\x3d"background-color: black;vertical-align:bottom" controls autoplay controlslist\x3d"nodownload" preload\x3d"metadata"\x3e\x3csource src\x3d\x3c%videoSource%\x3e type\x3d"video/mp4"\x3e\x3c/video\x3e'
                }
            }
        })
    })();
    (function() {
        t.register("QTipsStyles", function() {
            return "#qtips{position:absolute;overflow:initial}.qtips-background{position:fixed;z-index:90000;padding:10px;opacity:1;border-radius:3px;-webkit-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-o-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.qtips-background:after{position:absolute;display:block;width:0;content:'';border-style:solid;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.qtips-arrow-topleft:after,.qtips-arrow-topmiddle:after,.qtips-arrow-topright:after{top:-8px;border-width:0 8px 9px}.qtips-arrow-bottomleft:after,.qtips-arrow-topleft:after{left:14px}.qtips-arrow-bottomright:after,.qtips-arrow-topright:after{right:14px}.qtips-arrow-bottomleft:after,.qtips-arrow-bottommiddle:after,.qtips-arrow-bottomright:after{bottom:-8px;border-width:9px 8px 0;-webkit-box-shadow:0 0 0 -2px rgba(17,17,17,.25);-moz-box-shadow:0 0 0 -2px rgba(17,17,17,.25);box-shadow:0 0 0 -2px rgba(17,17,17,.25);-o-box-shadow:0 0 0 -2px rgba(17,17,17,.25)}.qtips-textholder{width:100%;height:100%}.slate-image-video-loader {background: #ffffff;border-radius: 50%;position: absolute;opacity: 0.7;}.slate-image-play-button {margin: auto;position: absolute;border-style: solid;border-color: transparent transparent transparent #ada6a6;}"
        })
    })();
    (function() {
        t.when("A").register("QTipsMetrics", function() {
            var e = h.ue;
            return {
                incrementCounter: function(h, b) {
                    b = b || 1;
                    e && e.count && e.count(h, (e.count(h) || 0) + b)
                }
            }
        })
    })();
    (function() {
        t.register("ShoppingAidsSparkles", function(e, h, b) {
            return {
                init: function() {}
            }
        })
    })()
});
/* ******** */
(function(m) {
    var e = window.AmazonUIPageJS || window.P,
        l = e._namespace || e.attributeErrors,
        k = l ? l("SABottomSheetLibrary", "") : e;
    k.guardFatal ? k.guardFatal(m)(k, window) : k.execute(function() {
        m(k, window)
    })
})(function(m, e, l) {
    (function() {
        m.when("A", "a-sheet", "SA_MemoryManager", "SA_BottomSheetStyles", "QTipLibrary", "QTipsMetrics", "vernacBSStyles", "QTips").register("SA_BottomSheet", function(k, u, v, q, n, d, r, g) {
            var c = k.$,
                b = {
                    isDefined: function(a) {
                        return null !== a && a !== l
                    },
                    _getWindowLocationHref: function() {
                        return e.location.href
                    },
                    getVernacContent: function(a) {
                        a = (new DOMParser).parseFromString(a, "text/html");
                        a.getElementById("icp-btn-close-announce").removeAttribute("href");
                        if (this.isApp) {
                            var h = a.getElementsByTagName("form");
                            if (1 <= h.length) {
                                var h = h[0],
                                    b = h.innerHTML,
                                    c = h.parentNode;
                                c.removeChild(h);
                                c.insertAdjacentHTML("beforeend", b)
                            } else return d.incrementCounter("VernacBS_Content_Error"), " "
                        }
                        h = a.getElementById("icp-sl-t-text");
                        a.getElementById("icp-btn-save").insertAdjacentElement("afterend", h);
                        h = document.createElement("div");
                        h.id = "customer-preferences";
                        h.appendChild(a.getElementById("customer-preferences").getElementsByClassName("a-column a-span12")[0]);
                        return h
                    },
                    isVernacSheet: function(a) {
                        return a && -1 !== a.indexOf("vernac") ? !0 : !1
                    },
                    addVernacEventHandlers: function(a) {
                        var b = this;
                        c("#icp-btn-save").bind("click", a, function(t) {
                            var p = c("input[name\x3dLOP]:checked").val();
                            d.incrementCounter("bottomSheet" + t.data.currentBottomSheet + "_lopSet");
                            d.incrementCounter("bottomSheet" + t.data.currentBottomSheet + p);
                            d.incrementCounter("bottomSheet" +
                                t.data.currentBottomSheet + b.getMetricTag() + "_lopSet");
                            d.incrementCounter("bottomSheet" + t.data.currentBottomSheet + b.getMetricTag() + p);
                            a.isApp && m.when("mash", "i18n").execute("vernac-update-native-pref", function(a, b) {
                                var h = {
                                    marketplaceObfuscatedId: e.ue_mid,
                                    locale: p,
                                    failCallback: function(a) {
                                        b.recordMetrics({
                                            metricName: "language-picker/continue/failed"
                                        })
                                    }
                                };
                                e && e.ue_mid || d.incrementCounter("VernacBS_mId_Not_Available");
                                b.changeAppLocalizationPrefs(h);
                                a.goBack()
                            })
                        });
                        k.$("#icp-btn-close").bind("click", a, function(a) {
                            u.get(a.data.currentBottomSheet).hide();
                            d.incrementCounter("bottomSheet" + a.data.currentBottomSheet + "_dimissedCancel");
                            d.incrementCounter("bottomSheet" + a.data.currentBottomSheet + b.getMetricTag() + "_dismissedCancel")
                        })
                    },
                    getQueryParam: function(a) {
                        for (var b = this.getSearchParams().split("\x26"), d = 0; d < b.length; d++) {
                            var c = b[d].split("\x3d"),
                                g = decodeURIComponent(c[0]),
                                c = decodeURIComponent(c[1]);
                            if (g === a) return c
                        }
                    },
                    getMetricTag: function() {
                        if (!this.isIndirectTraffic()) return "direct";
                        var a = this.getQueryParam("tag");
                        return a ? "_" + a : "_blank"
                    },
                    getSearchParams: function() {
                        return e.location.search.substring(1)
                    },
                    isIndirectTraffic: function() {
                        return !!this.getQueryParam("ext_vrnc")
                    }
                };
            b.isIndirectTraffic() && (d.incrementCounter("bottomSheet_" + b.getQueryParam("ext_vrnc")), d.incrementCounter("bottomSheet" + b.getMetricTag() + "_" + b.getQueryParam("ext_vrnc")));
            var f = {
                addStyles: function() {
                    var a = document.createElement("style");
                    a.innerHTML = q;
                    document.head.appendChild(a)
                }
            };
            f.model = new n.Model;
            f.utils = b;
            var w = n.Collection.extend({
                model: f.model,
                identifierList: [],
                add: function(a) {
                    if (b.isDefined(a) && b.isDefined(a.get("maxDisplayCount")) &&
                        0 < a.get("maxDisplayCount")) {
                        var d = a.get("identifier"),
                            c = {};
                        c[a.get("identifier")] = a.get("sequenceNum");
                        this.identifierList.push(c);
                        this.models[d] = a
                    }
                },
                parse: function(a, d) {
                    if (b.isDefined(a)) {
                        var c = this._prepareModel.bind(this);
                        a.forEach(function(b, d, h) {
                            a[d] = c(b)
                        });
                        return a
                    }
                }
            });
            f.collection = new w;
            n = n.View.extend({
                defaultStartOffset: 5E3,
                preloadDomId: "saBottomSheet-bottom-sheet",
                sheetInstance: "",
                collection: f.collection,
                start: function(a, c) {
                    this.isApp = !1;
                    typeof c !== l && c && (this.isApp = c);
                    if (this.collection.identifierList) {
                        this.page =
                            a;
                        for (var f = this.collection.identifierList, p = 0; p < f.length; p++) {
                            var r = Object.keys(f[p])[0],
                                e = this.collection.at(r);
                            this.currentBottomSheet = Object.keys(f[p])[0];
                            d.incrementCounter("bottomSheet" + this.currentBottomSheet + "ext_vrnc_" + b.getQueryParam("ext_vrnc"));
                            d.incrementCounter("bottomSheet" + this.currentBottomSheet + b.getMetricTag() + "ext_vrnc_" + b.getQueryParam("ext_vrnc"));
                            this.bottomSheetParams = {
                                preloadDomId: this.preloadDomId,
                                name: Object.keys(f[p])[0],
                                closeType: e.get("closeType"),
                                closeMessage: e.get("closeMessage"),
                                height: 345,
                                historySupportEnabled: !0
                            };
                            this.collection.at(r).set({
                                bottomSheetParams: this.bottomSheetParams
                            });
                            if (v.shouldShowShoppingAids("bottomSheet", e.get("identifier"), e.get("impressionInterval")) && (this.isApp || g.utils.getCookie("lc-acbin") === l)) {
                                e.get("contentUrl") ? this.getBottomSheetContent(e.get("contentUrl"), this.renderBottomSheet.bind(this)) : e.get("staticContent") && this.renderBottomSheet(e.get("staticContent"));
                                this.clickHandlers(e.get("identifier"));
                                break
                            } else d.incrementCounter("bottomSheet" +
                                e.get("identifier") + "_intervalTimeout")
                        }
                    }
                },
                renderBottomSheet: function(a) {
                    this.sheetInstance || 0 === a.trim().length || (this.createBottomSheetDiv(), b.isVernacSheet(this.currentBottomSheet) && (a = b.getVernacContent.call(this, a)), this.sheetInstance = u.create(this.bottomSheetParams).show(), c("#" + this.preloadDomId).append(a), b.isVernacSheet(this.currentBottomSheet) && (b.addVernacEventHandlers(this), a = document.createElement("style"), a.setAttribute("id", "vernacBS"), a.innerHTML = r, document.head.appendChild(a)))
                },
                createBottomSheetDiv: function() {
                    var a = document.createElement("div");
                    a.id = this.preloadDomId;
                    document.body.appendChild(a)
                },
                getBottomSheetContent: function(a, h) {
                    var e = b._getWindowLocationHref().replace(/^.*\/\/[^\/]+/, "");
                    c.ajax({
                        url: a,
                        type: "GET",
                        dataType: "html",
                        data: {
                            preferencesReturnUrl: e
                        },
                        success: function(a) {
                            d.incrementCounter("bottomSheet_contentCall_success");
                            a = (new DOMParser).parseFromString(a, "text/html");
                            a = (new XMLSerializer).serializeToString(a);
                            h(a)
                        },
                        error: function(a, b) {
                            d.incrementCounter("bottomSheet_contentCall_failed")
                        }
                    })
                },
                modifyPageScrollStatus: function(a) {
                    var b, d = c("#a-page"),
                        f = c("body");
                    b = e.scrollY || e.pageYOffset;
                    a ? f.css({
                        position: "fixed",
                        top: "-" + b + "px",
                        overflow: "hidden"
                    }) : (b = Math.abs(d.position().top), f.css({
                        position: "",
                        top: "",
                        overflow: ""
                    }), c("html,body").scrollTop(b))
                },
                clearAndRender: function(a) {
                    this.modifyPageScrollStatus(!1);
                    b.isVernacSheet(this.currentBottomSheet) && c("#vernacBS").remove();
                    a.sheet.$container.remove();
                    delete this.sheetInstance;
                    this.nextSheet()
                },
                adjustBottomSheet: function() {
                    d.incrementCounter("bottomSheet" +
                        this.currentBottomSheet + "_shown");
                    d.incrementCounter("bottomSheet" + this.currentBottomSheet + b.getMetricTag() + "_shown");
                    v.writeShoppingAidsData("bottomSheet", this.currentBottomSheet, this.page);
                    b.isVernacSheet(this.currentBottomSheet) && k.$("input[name\x3dLOP][value\x3dhi_IN]").prop("checked", !0).trigger("change")
                },
                nextSheet: function() {
                    setTimeout(this.start.bind(this), this.defaultStartOffset, this.page)
                },
                clickHandlers: function(a) {
                    var c = this;
                    k.on("a:sheet:afterHide:" + a, function(a) {
                        c.clearAndRender.call(c,
                            a);
                        d.incrementCounter("bottomSheet" + c.currentBottomSheet + "_sheetDismissed");
                        d.incrementCounter("bottomSheet" + c.currentBottomSheet + b.getMetricTag() + "_sheetDismissed")
                    });
                    k.on("a:sheet:beforeShow:" + a, function() {
                        c.modifyPageScrollStatus(!0)
                    });
                    k.on("a:sheet:afterShow:" + a, function() {
                        c.adjustBottomSheet.call(c)
                    })
                }
            });
            f.view = new n;
            f.addStyles();
            return f
        })
    })();
    (function() {
        m.register("SA_BottomSheetStyles", function() {
            return "#saBottomSheet-bottom-sheet{-webkit-transition:height 2s;transition:height 2s;overflow-y:auto;height:100%}"
        })
    })();
    (function() {
        m.when("A", "jQuery").register("SA_MemoryManager", function(k, m) {
            var l = function() {
                    try {
                        if (e.localStorage) return 1
                    } catch (d) {
                        return e.ue.count("SA_MemoryManager_LocalStorageNotExposed", 1), 0
                    }
                },
                q = {
                    bottomSheet: "SA_BottomSheetObj"
                },
                n = function() {
                    return (new Date).setHours(0, 0, 0, 0).toString()
                };
            return {
                shouldFetchShoppingAids: function(d, e, g, c) {
                    if (!l()) return !1;
                    d = localStorage.getItem(q[d]);
                    if (null === d) return !0;
                    d = JSON.parse(d);
                    var b = d.lastShownDate;
                    if (n() !== b) return !0;
                    b = d.dayCount;
                    return d.pageCounts[e] <
                        c && b < g ? !0 : !1
                },
                writeShoppingAidsData: function(d, e, g) {
                    if (l()) {
                        var c = localStorage.getItem(q[d]),
                            b = {},
                            f = Math.round((new Date).getTime() / 36E5);
                        null === c ? (b.lastShownDate = n(), b.dayCount = 1, c = {}, c[g] = 1, b.pageCounts = c, g = {}, g.lastTimeStamp = f, g.count = 1, f = {}, f[e] = g, b.elements = f) : (b = JSON.parse(c), b.lastShownDate = n(), b.dayCount += 1, c = b.pageCounts, c[g] += 1, b.pageCounts = c, c = b.elements, c[e] ? (c[e].count += 1, c[e].lastTimeStamp = f) : (g = {}, g.lastTimeStamp = f, g.count = 1, c[e] = g), b.elements = c);
                        localStorage.setItem(q[d], JSON.stringify(b))
                    }
                },
                shouldShowShoppingAids: function(d, e, g, c) {
                    if (!l()) return !1;
                    d = localStorage.getItem(q[d]);
                    if (null === d) return !0;
                    d = JSON.parse(d).elements;
                    if (!d[e]) return !0;
                    var b = d[e].lastTimeStamp,
                        f = Math.round((new Date).getTime() / 36E5);
                    return b + g <= f && d[e].count < c ? !0 : !1
                }
            }
        })
    })();
    (function() {
        m.register("vernacBSStyles", function() {
            return '.a-container{padding-bottom : 12px !important;}.a-spacing-base{margin-bottom : -2.5rem !important;}#saBottomSheet-bottom-sheet form{margin-bottom : 0 !important;}.a-box-inner{padding-bottom : 10px !important;padding-top : 10px !important;}.a-form-actions{padding-top : 8px}#icp-sl-t-text{margin-left : 10px !important;margin-right : 10px !important;margin-bottom : 7px !important; font-size : 1.2rem;}div[data-a-input-name\x3d"LOP"]{font-size : 1.3rem !important;}#icp-btn-close{margin-bottom : 0.5rem; margin-top : 0!important}#icp-btn-save{margin-bottom : 0.5rem; margin-top : 0!important}'
        })
    })()
});
/* ******** */
(function(k) {
    var h = window.AmazonUIPageJS || window.P,
        n = h._namespace || h.attributeErrors,
        g = n ? n("QTipsMobileWebAssets", "") : h;
    g.guardFatal ? g.guardFatal(k)(g, window) : g.execute(function() {
        k(g, window)
    })
})(function(k, h, n) {
    (function() {
        k.when("A", "SA_BottomSheet", "SA_MemoryManager", "QTips", "QTipsMetrics", "QTipsConstants").register("QTipsHandler", function(g, k, n, l, e, q) {
            var r = g.$;
            return {
                page: "",
                storageKey: "identifier",
                shownPrefix: "_shown_",
                temporaryStoragePrefix: "tempData_",
                sourceName: "QTipsMWeb_",
                dateKey: "date",
                maxSessionDayTipsCountKey: "maxOverallTipsCount",
                maxPageTipsCountKey: "maxPageTipsCount",
                sessionDayTipsCountKey: "sessionDayTipsCount",
                pageTipsCountKey: "pageTipsCount",
                defaultMaxPageTipCount: 3,
                defaultMaxSessionDayTipCount: 8,
                isPreviewRequest: !1,
                defaultMaxPageSheetCount: 1,
                defaultMaxSessionDaySheetCount: 1,
                init: function() {
                    var a = this;
                    e.incrementCounter(this.sourceName + "assetsLoaded");
                    if (!this._isLocalStorageExposed()) return 0;
                    if (this.page = this._pageAdapter()) {
                        var b = function(b) {
                            var f = b.qTipsElements;
                            f && Array.isArray(f) &&
                                a.filter(f, a._display.bind(a));
                            (b = b.bottomSheetList) && Array.isArray(b) && (b.sort(function(a, b) {
                                return a.sequenceNum - b.sequenceNum
                            }), k.collection.create(b), k.view.start(a.page))
                        };
                        "preview" === this._getParameterByName("mode") ? (this._refreshLocalStorage(), this.isPreviewRequest = !0, a._writeConfigValuesToLocalStorage({
                            maxPageTipsCount: 100,
                            maxOverallTipsCount: 100
                        }), a.fetch(a.page, b)) : a._shouldFetchQTips(a.page, function() {
                            a.fetch(a.page, b)
                        })
                    } else e.incrementCounter(this.sourceName + "pageTypeMismatch")
                },
                _getParameterByName: function(a,
                    b) {
                    b || (b = h.location.href);
                    a = a.replace(/[\[\]]/g, "\\$\x26");
                    var c = (new RegExp("[?\x26]" + a + "(\x3d([^\x26#]*)|\x26|#|$)")).exec(b);
                    return c ? c[2] ? decodeURIComponent(c[2].replace(/\+/g, " ")) : "" : null
                },
                fetch: function(a, b, c) {
                    var f = this.sourceName + "fetchQTipElements_",
                        d = document.referrer,
                        m = /.*\.amazon\..*/g,
                        p = "DIRECT";
                    m && m.test(d) && (p = "INDIRECT");
                    d = "/gp/aw/mshop/qtips.html";
                    this.isPreviewRequest && (d += h.location.search);
                    g.ajax(d, {
                        method: "GET",
                        contentType: "application/json; charset\x3dutf-8",
                        timeout: 6E4,
                        params: {
                            page: a,
                            url: h.location.href,
                            trafficType: p
                        },
                        success: function(c) {
                            e.incrementCounter(f + a + "_success");
                            b && "function" === typeof b && b(c)
                        },
                        error: function(b, d) {
                            "Request Timeout" === d && e.incrementCounter(f + a + "_request_timeout");
                            e.incrementCounter(f + a + "_failed");
                            c && "function" === typeof c && c(b)
                        }
                    })
                },
                _pageAdapter: function() {
                    var a = this._getWindowLocationHref(),
                        b;
                    a && (a.match(/\/(d|product|dp|reader|detail|ASIN|udp)(\/|\?.*ASIN=)([A-Z0-9]{8,13})[$\/&\?]?/i) ? b = "detailpage" : a.match(/\/(search|s)\//i) ? b = "search" : a.match(/(\.amazon\.[^\/\?]+$)|(gp\/(homepage\.html|aw(?!\/(d|s|search)))|(exec\/obidos\/subst\/home\/home.html)|\/{2}.*?\/$|\/{2}[^\/]*?\/(ref|sessionID|\?|#))/i) ?
                        b = "gateway" : a.match(/\/gp\/(sva|payment\/statement)\/*/i) && (b = "pay"));
                    a = {
                        "gateway-phone-web": "gateway",
                        DetailAW: "detailpage",
                        SearchAW: "search",
                        AmazonMoneyMobile: "pay"
                    };
                    if (!b) {
                        var c = h.ue_pty;
                        c && a[c] && (b = a[c], e.incrementCounter("qtipsWindowUePtyUsed"))
                    }
                    return b
                },
                _getWindowLocationHref: function() {
                    return h.location.href
                },
                filter: function(a, b) {
                    for (var c = [], f = 0; f < a.length; f++) {
                        var d = a[f],
                            m = parseInt(d.maxDisplayCount, 10);
                        isNaN(m) && (m = 1);
                        var g = d.elementAnchor,
                            g = l.utils.processAnchor(g, q.regex.anchorSpliterRegex);
                        1 < r(g).length ? e.incrementCounter("qtipsElementAnchorNotUnique") : this._isQTipShown(this.shownPrefix + d[this.storageKey], m) || this._isQTipShownInCurrentSessionDay(d) || c.push(d)
                    }
                    b && "function" === typeof b && (e.incrementCounter(this.sourceName + "filteredQTips", c.length), c.sort(function(a, b) {
                        return a.sequenceNum - b.sequenceNum
                    }), f = parseInt(this._getNumberOfTipsToShow(), 10), e.incrementCounter(this.sourceName + "numberOfTipsToShow", f), b(c.slice(0, f)))
                },
                _getNumberOfTipsToShow: function() {
                    var a = Math.min(this._getMaxPageTipsCount(),
                            this._getMaxSessionDayTipsCount()),
                        b = this._getPageTipsCount(),
                        a = a - b;
                    return 0 < a ? a : 0
                },
                _display: function(a) {
                    l.collection.create(a);
                    l.view.setDismissalCallback(this.setQTipShown.bind(this));
                    l.view.setTerminationCallback(this.terminateQTip.bind(this));
                    l.utils.isDefined(l.view.setCountLogger) && l.view.setCountLogger(this.logCounter.bind(this));
                    l.view.postQTipRender()
                },
                logCounter: function(a, b, c) {
                    e.incrementCounter(a + "_" + b, c)
                },
                setQTipShown: function(a) {
                    a = a[this.storageKey];
                    var b = "Total" + this.sourceName;
                    e.incrementCounter(this.sourceName +
                        a);
                    e.incrementCounter(b + this.page);
                    a = this.shownPrefix + a;
                    b = parseInt(this._getFromLocalStorage(a), 10);
                    isNaN(b) && (b = 0);
                    this._setInLocalStorage(a, parseInt(b, 10) + 1);
                    this._setInLocalStorage(this.temporaryStoragePrefix + this.sessionDayTipsCountKey, parseInt(this._getSessionDayTipsCount(), 10) + 1);
                    this._setInLocalStorage(this.temporaryStoragePrefix + this.pageTipsCountKey + this.page, parseInt(this._getPageTipsCount(), 10) + 1);
                    this._setInLocalStorage(this.temporaryStoragePrefix + a, 1)
                },
                terminateQTip: function(a) {
                    e.incrementCounter("terminate_" +
                        a[this.storageKey])
                },
                _isQTipShown: function(a, b) {
                    var c = parseInt(this._getFromLocalStorage(a), 10);
                    return !isNaN(c) && c >= b ? !0 : !1
                },
                _isQTipShownInCurrentSessionDay: function(a) {
                    return this._getFromLocalStorage(this.temporaryStoragePrefix + this.shownPrefix + a[this.storageKey]) || 0
                },
                _shouldFetchQTips: function(a, b) {
                    var c = this;
                    this._getQTipsConfigValues(a, function(a) {
                        var d = parseInt(a.maxPageTipsCountKey, 10);
                        a = parseInt(a.maxSessionDayTipsCountKey, 10);
                        var e = c._getSessionDayTipsCount(),
                            g = c._getPageTipsCount(),
                            d = e <
                            a && g < d;
                        a = n.shouldFetchShoppingAids("bottomSheet", c.page, c.defaultMaxPageSheetCount, c.defaultMaxSessionDaySheetCount);
                        (d || a) && b && "function" === typeof b && b()
                    })
                },
                _getMaxPageTipsCount: function() {
                    var a = parseInt(this._getFromLocalStorage(this.temporaryStoragePrefix + this.maxPageTipsCountKey), 10);
                    isNaN(a) && (a = this.defaultMaxPageTipCount);
                    return a
                },
                _getPageTipsCount: function() {
                    var a = parseInt(this._getFromLocalStorage(this.temporaryStoragePrefix + this.pageTipsCountKey + this.page), 10);
                    this.page ? isNaN(a) && (this._setInLocalStorage(this.temporaryStoragePrefix +
                        this.pageTipsCountKey + this.page, 0), a = 0) : a = this.defaultMaxPageTipCount;
                    return a
                },
                _getMaxSessionDayTipsCount: function() {
                    var a = parseInt(this._getFromLocalStorage(this.temporaryStoragePrefix + this.maxSessionDayTipsCountKey), 10);
                    isNaN(a) && (a = this.defaultMaxSessionDayTipCount);
                    return a
                },
                _getSessionDayTipsCount: function() {
                    var a = parseInt(this._getFromLocalStorage(this.temporaryStoragePrefix + this.sessionDayTipsCountKey), 10);
                    isNaN(a) && (a = this.defaultMaxSessionDayTipCount);
                    return a
                },
                _getQTipsConfigValues: function(a,
                    b) {
                    if (this._isPreferencesValid() && this._isConfigPresentInPreferences()) {
                        e.incrementCounter("ConfigFetch_local");
                        var c = this._getFromLocalStorage(this.temporaryStoragePrefix + this.maxPageTipsCountKey),
                            f = this._getFromLocalStorage(this.temporaryStoragePrefix + this.maxSessionDayTipsCountKey);
                        b && "function" === typeof b && b({
                            maxPageTipsCountKey: c,
                            maxSessionDayTipsCountKey: f
                        })
                    } else {
                        e.incrementCounter("ConfigFetch_serviceCall");
                        this._clearExpiredConfigValues();
                        this._refreshLocalStorage();
                        var d = this;
                        this._fetchConfigServiceCall(a,
                            function(a) {
                                d._writeConfigValuesToLocalStorage(a);
                                b({
                                    maxPageTipsCountKey: a.maxPageTipsCount,
                                    maxSessionDayTipsCountKey: a.maxOverallTipsCount
                                })
                            },
                            function(a) {
                                d._writeConfigValuesToLocalStorage(a);
                                b({
                                    maxPageTipsCountKey: a.maxPageTipsCount,
                                    maxSessionDayTipsCountKey: a.maxOverallTipsCount
                                })
                            })
                    }
                },
                _isPreferencesValid: function() {
                    var a = this._getFromLocalStorage(this.dateKey),
                        b = (new Date).setHours(0, 0, 0, 0).toString();
                    return null !== a && b === a
                },
                _isConfigPresentInPreferences: function() {
                    return this._isPresentInLocalStorage(this.temporaryStoragePrefix +
                        this.maxSessionDayTipsCountKey) && this._isPresentInLocalStorage(this.temporaryStoragePrefix + this.maxPageTipsCountKey)
                },
                _isPresentInLocalStorage: function(a) {
                    return null !== this._getFromLocalStorage(a)
                },
                _clearExpiredConfigValues: function() {
                    for (var a in localStorage) - 1 !== a.indexOf(this.temporaryStoragePrefix) && this._removeFromLocalStorage(a)
                },
                _refreshLocalStorage: function() {
                    this._setInLocalStorage(this.dateKey, (new Date).setHours(0, 0, 0, 0));
                    this._setInLocalStorage(this.temporaryStoragePrefix + this.sessionDayTipsCountKey,
                        0)
                },
                _fetchConfigServiceCall: function(a, b, c) {
                    var f = this.sourceName + "fetchQTipsConfig_",
                        d = this;
                    g.ajax("/gp/aw/qtips/configs.html", {
                        method: "GET",
                        contentType: "application/json; charset\x3dutf-8",
                        timeout: 6E4,
                        params: {},
                        success: function(a) {
                            e.incrementCounter(f + "_success");
                            b && "function" === typeof b && b(a)
                        },
                        error: function(b, g) {
                            "Request Timeout" === g && e.incrementCounter(f + a + "_request_timeout");
                            e.incrementCounter(f + "_failed");
                            if (c && "function" === typeof c) {
                                var h = {};
                                h.maxOverallTipsCount = d.defaultMaxSessionDayTipCount;
                                h.maxPageTipsCount = d.defaultMaxPageTipCount;
                                c(h)
                            }
                        }
                    })
                },
                _writeConfigValuesToLocalStorage: function(a) {
                    var b = a.maxOverallTipsCount;
                    a = a.maxPageTipsCount;
                    b && a && (this._setInLocalStorage(this.temporaryStoragePrefix + this.maxSessionDayTipsCountKey, b), this._setInLocalStorage(this.temporaryStoragePrefix + this.maxPageTipsCountKey, a))
                },
                _getFromLocalStorage: function(a) {
                    if (localStorage) return localStorage.getItem(a)
                },
                _setInLocalStorage: function(a, b) {
                    if (localStorage) try {
                        localStorage.setItem(a, b)
                    } catch (c) {
                        e.incrementCounter(this.sourceName +
                            "QuotaExceededError")
                    }
                },
                _removeFromLocalStorage: function(a) {
                    localStorage && localStorage.removeItem(a)
                },
                _isLocalStorageExposed: function() {
                    try {
                        if (h.localStorage) return 1
                    } catch (a) {
                        return e.incrementCounter(this.sourceName + "LocalStorageNotExposed"), 0
                    }
                }
            }
        });
        k.when("QTipsHandler", "ready").execute(function(g) {
            g.init()
        })
    })()
});
/* ******** */