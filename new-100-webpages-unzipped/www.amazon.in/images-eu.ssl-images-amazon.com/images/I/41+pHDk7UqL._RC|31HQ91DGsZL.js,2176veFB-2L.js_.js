(function(r) {
    var m = window.AmazonUIPageJS || window.P,
        q = m._namespace || m.attributeErrors,
        g = q ? q("QTipsWebLibrary", "") : m;
    g.guardFatal ? g.guardFatal(r)(g, window) : g.execute(function() {
        r(g, window)
    })
})(function(r, m, q) {
    (function() {
        r.when("jQuery", "QTipsConstants", "ready").register("QTipLibrary", function(g, m) {
            var c = {
                Model: function(a) {
                    this.attributes = a || {};
                    this.set(a);
                    this.initialize.apply(this, arguments)
                }
            };
            g.extend(c.Model.prototype, {
                initialize: function() {},
                get: function(a) {
                    if (this.attributes && this.attributes.hasOwnProperty(a)) return this.attributes[a]
                },
                has: function(a) {
                    return null !== this.get(a) && this.get(a) !== q
                },
                set: function(a) {
                    for (var c in a) a.hasOwnProperty(c) && (this.attributes[c] = a[c])
                },
                unset: function(a) {
                    delete this.attributes[a]
                },
                parse: function(a, c) {
                    return a
                },
                toJson: function() {
                    return this.attributes ? JSON.stringify(this.attributes) : ""
                }
            });
            c.Collection = function(a) {
                this.models = a || {};
                this.initialize.apply(this, arguments)
            };
            g.extend(c.Collection.prototype, {
                initialize: function() {},
                at: function(a) {
                    if (this.models && this.models.hasOwnProperty(a)) return this.models[a]
                },
                add: function(a) {
                    a && (this.models[this.modelLength()] = a)
                },
                remove: function(a) {
                    for (var c in this.models) this.models[c] === a && delete this.models[c]
                },
                create: function(a) {
                    a = this.parse(a);
                    for (var c in a) a.hasOwnProperty(c) && this.add(a[c])
                },
                _prepareModel: function(a) {
                    if (this.model && a) {
                        for (var g in a)
                            if (a.hasOwnProperty(g)) {
                                var k = a[g];
                                m.regex.numberRegex.test(k) && (k = Number(k));
                                a[g] = k
                            }
                        a = new c.Model(a)
                    }
                    return a
                },
                set: function(a) {
                    this.model = a
                },
                modelLength: function() {
                    if (this.models) return Object.keys(this.models).length
                },
                parse: function(a, c) {
                    return a
                },
                toJson: function() {
                    return JSON.stringify(this.models)
                }
            });
            c.View = function(a) {
                this.tagName = a || "\x3cdiv/\x3e";
                this.template = this.template || "";
                this.initialize.apply(this, arguments)
            };
            g.extend(c.View.prototype, {
                events: {},
                initialize: function() {},
                render: function() {},
                remove: function() {},
                _removeElement: function(a) {
                    (a = this.getElement(a)) && (a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a))
                },
                setElement: function(a, c) {
                    g(a).append(c)
                },
                getElement: function(a) {
                    if ((a = g(a)) &&
                        0 < a.length) return a[0].lastChild
                },
                add: function(a, c) {
                    var k = this._createElement(this.template, c);
                    this.setElement(a, k);
                    return k
                },
                _createElement: function(a, c) {
                    var k = this._processTemplate(a, c);
                    return g(this.tagName).html(k)
                },
                _processTemplate: function(a, c) {
                    var k = a.match(m.regex.templateSpliterRegex);
                    if (k)
                        for (var g = 0; g < k.length; g++) {
                            var f = k[g].match(/\w+/)[0];
                            c && c.has(f) && (a = a.replace(k[g], c.get(f)))
                        }
                    return a
                }
            });
            c.Model.extend = c.Collection.extend = c.View.extend = function(a, c) {
                var k = this,
                    m = a && "object" === typeof a &&
                    a.hasOwnProperty("constructor") ? a.constructor : function() {
                        return k.apply(this, arguments)
                    };
                g.extend(m, k, c);
                var f = function() {
                    this.constructor = m
                };
                f.prototype = k.prototype;
                m.prototype = new f;
                a && g.extend(m.prototype, a);
                m.__super__ = k.prototype;
                return m
            };
            return c
        })
    })();
    (function() {
        var g = !1;
        r.when("A", "a-sheet", "QTips").execute(function(m, c, a) {
            m.on("a:sheet:beforeShow", function(c) {
                g = !0;
                a.view.dismissAndRender()
            });
            m.on("a:sheet:afterHide", function(c) {
                g = !1;
                a.view.dismissAndRender()
            })
        });
        r.when("A", "jQuery", "QTipsConstants",
            "QTipLibrary", "QTipsStyles", "QTipsMetrics").register("QTips", function(y, c, a, v, k, x) {
            var f = {
                    isDefined: function(b) {
                        return null !== b && b !== q
                    },
                    processAnchor: function(b, d) {
                        var a = b.split(d);
                        Array.isArray(a) || (a = [a]);
                        Array.prototype.find || (Array.prototype.find = function(b, d) {
                            var a = this.length,
                                c;
                            for (c = 0; c < a; c += 1)
                                if (b.call(d, this[c], c, this)) return this[c];
                            return q
                        });
                        return a.find(function(b, d, a) {
                            return c(b).length
                        }) || b
                    },
                    getIndexByAnchor: function(b, d) {
                        Array.prototype.findIndex || (Array.prototype.findIndex = function(b,
                            d) {
                            if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                            if ("function" !== typeof b) throw new TypeError("callback must be a function");
                            for (var a = Object(this), c = a.length, h, l = 0; l < c; l++)
                                if (h = a[l], b.call(d, h, l, a)) return l;
                            return -1
                        });
                        return b.findIndex(function(b, a, c) {
                            return d === Object.keys(c[a])[0]
                        }, d)
                    },
                    getCookie: function(b) {
                        for (var d = document.cookie ? document.cookie.split(";") : [], a = 0; a < d.length; a++) {
                            var c = d[a].trim().split("\x3d"),
                                w = c[0].replace(/(%[0-9A-Z]{2})+/g,
                                    decodeURIComponent);
                            if (b === w) return c.slice(1).join("\x3d").replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                        }
                    }
                },
                p = {};
            p.model = new v.Model;
            p.utils = f;
            p.addStyles = function() {
                var b = document.createElement("style");
                b.innerHTML = k;
                document.head.appendChild(b)
            };
            var h = v.Collection.extend({
                model: p.model,
                elementAnchorList: [],
                invokingEventsMap: {},
                isSet: !1,
                registerEvent: function(b) {
                    var d = b.data.eventType,
                        a = b.data.invokingEventElement;
                    b = b.data.self;
                    if (d in b.invokingEventsMap) p.utils.isDefined(b.invokingEventsMap[d]) &&
                        -1 === b.invokingEventsMap[d].indexOf(a) && b.invokingEventsMap[d].push(a);
                    else {
                        var c = [];
                        c.push(a);
                        b.invokingEventsMap[d] = c
                    }
                },
                add: function(b) {
                    try {
                        if (x.incrementCounter("qtips_add_initiated"), f.isDefined(b) && f.isDefined(b.get("maxDisplayCount")) && f.isDefined(b.get("elementAnchor")) && 0 < b.get("maxDisplayCount")) {
                            var d = b.get("elementAnchor"),
                                n = f.processAnchor(d, a.regex.anchorSpliterRegex);
                            b.set({
                                elementAnchor: n
                            });
                            d = {};
                            d[b.get("elementAnchor")] = b.get("sequenceNum");
                            this.elementAnchorList.push(d);
                            this.models[b.get("elementAnchor")] =
                                b;
                            var e = b.get("invokingEventElement"),
                                w = b.get("invokingEventType");
                            p.utils.isDefined(e) && 0 < e.length && p.utils.isDefined(w) && 0 < w.length && (e = f.processAnchor(e, a.regex.anchorSpliterRegex), c(e).bind(w, {
                                eventType: w,
                                invokingEventElement: e,
                                self: this
                            }, this.registerEvent))
                        }
                    } catch (h) {
                        x.incrementCounter("qtips_model_undefined"), r.log(h, "WARN", "QTips")
                    }
                },
                parse: function(b, d) {
                    if (f.isDefined(b)) {
                        var a = this._prepareModel.bind(this);
                        b.forEach(function(d, c, h) {
                            b[c] = a(d)
                        });
                        return b
                    }
                }
            });
            p.collection = new h;
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
                collection: p.collection,
                events: {
                    "touchstart click keyup": "dismissAndRender",
                    scroll: "dismissAndRender",
                    orientationchange: "dismissAndRender",
                    "blur focus": "dismissOrRender",
                    "visibilitychange webkitvisibilitychange": "visibilityChange"
                },
                eventHandlers: {},
                toolTipVideoPlayed: {},
                addStaticToolTipHandlers: function(b) {
                    if (b.get("videoSource")) {
                        var d = this,
                            a = b.get("identifier");
                        d.addDismissIconHandlers(b);
                        c(d.qtipsId).bind("click.videoToolTip", {
                            model: b,
                            tipId: a
                        }, function(a) {
                            f.isDefined(d.animateIntervalId) && (clearInterval(d.animateIntervalId), d.animateIntervalId = q);
                            d.animateVideo(b);
                            d.clearFadeOut();
                            c(d.qtipsId).unbind("click.videoToolTip");
                            d.addVideoToolTipHandlers(b);
                            d.addDismissIconHandlers(b)
                        })
                    }
                },
                addDismissIconHandlers: function(b) {
                    var d = this;
                    b = b.get("identifier");
                    c(this.qtipDismissIcon).bind("click.staticToolTip", {
                        eventType: "dismissalByUser",
                        tipId: b
                    }, function(b) {
                        var a = b.data.tipId;
                        d.countLogger("dismiss_icon_clicked", a);
                        d.toolTipVideoPlayed && d.toolTipVideoPlayed[a] ? d.countLogger("dismissed_after_video_played", a) : d.countLogger("dismissed_before_video_played", a);
                        d.dismissAndRender.call(d, b);
                        b.stopPropagation()
                    })
                },
                addVideoToolTipHandlers: function(b) {
                    var d = this;
                    b = b.get("identifier");
                    c(this.qtipVideoId).bind("play.videoToolTip", {
                        tipId: b
                    }, function(b) {
                        b = b.data.tipId;
                        d.toolTipVideoPlayed && !d.toolTipVideoPlayed[b] && (d.toolTipVideoPlayed[b] = d.getVideoPlayedMetricsObject());
                        d.countLogger("video_played", b)
                    });
                    c(this.qtipVideoId).bind("timeupdate.videoToolTip", {
                        tipId: b
                    }, y.throttle(function(b) {
                        b = b.data.tipId;
                        var a = c(d.qtipVideoId);
                        if (a[0]) {
                            var a = Math.ceil(4 * a[0].currentTime / a[0].duration),
                                h = d.toolTipVideoPlayed[b];
                            if (d.toolTipVideoPlayed && h) {
                                var t;
                                1 <= a && (h.firstQuarterPublished ||
                                    (t = 1, h.firstQuarterPublished = !0), 2 <= a && (h.secondQuarterPublished || (t = 2, h.secondQuarterPublished = !0), 3 <= a && (h.thirdQuartedrublished || (t = 3, h.thirdQuartedrublished = !0), 4 <= a && !h.fourthQuarterPublished && (t = 4, h.fourthQuarterPublished = !0))), t && d.countLogger("video_length_played_" + t, b), d.toolTipVideoPlayed[b] = h)
                            }
                        }
                    }, 1E3));
                    c(this.qtipVideoId).bind("error.videoToolTip", {
                        tipId: b
                    }, function(b) {
                        d.countLogger("video_failed_to_load", b.data.tipId)
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
                    for (var b in this.events) this.events.hasOwnProperty(b) && !f.isDefined(this.eventHandlers[b]) && (this.eventHandlers[b] = this[this.events[b]].bind(this), c(m).bind(b, this.eventHandlers[b]))
                },
                removeStaticToolTipHandlers: function() {
                    c(this.qtipDismissIcon).unbind("click.staticToolTip");
                    c(this.qtipsId).unbind("click.videoToolTip");
                    c(this.qtipVideoId).unbind("play.videoToolTip");
                    c(this.qtipVideoId).unbind("error.videoToolTip");
                    c(this.qtipVideoId).unbind("timeupdate.videoToolTip")
                },
                removeAutoDismissalHandlers: function() {
                    for (var b in this.events) this.events.hasOwnProperty(b) && f.isDefined(this.eventHandlers[b]) && (c(m).unbind(b, this.eventHandlers[b]), this.eventHandlers[b] = q)
                },
                render: function(b) {
                    this.fadeOut(this.remove.bind(this));
                    var d = this.addAndPosition(this.anchor, b);
                    if ("hidden" !== document.visibilityState && this.hasNoPopover() && f.isDefined(d)) {
                        this.animateIn(b);
                        var d = c(".qtips-text").width() + a.view.deltaX,
                            n = c(this.qtipsId).width();
                        b.get("videoWidth");
                        d < n && !b.get("videoSource") && (c(this.qtipsId).width(d), a.regex.positionRightRegex.test(b.get("elementArrowPosition")) && (d = parseInt(c(this.qtipsId).css("left"), 10) + (n - d) + a.view.deltaX, c(this.qtipsId).css({
                            left: d
                        })));
                        b = b.get("elementDuration") || a.timer.defaultAnimationTime;
                        this.fadeTimeoutId = setTimeout(this.fadeOut.bind(this), b, this.nextQTip);
                        b = f.getIndexByAnchor(this.collection.elementAnchorList, this.anchor); - 1 !== b && (this.dismissalTimeoutId = setTimeout(this.dismissalHandler.bind(this),
                            a.timer.defaultDismissalCallbackTime, b))
                    } else this.fadeOut(this.remove.bind(this)), this.renderTimeoutId = setTimeout(this.render.bind(this), b.get("elementStartOffset"), b)
                },
                dismissalHandler: function(b) {
                    var d = Object.keys(this.collection.elementAnchorList[b])[0],
                        a = this.collection.elementAnchorList[b][d],
                        d = this.collection.at(d).get("identifier");
                    this.collection.elementAnchorList.splice(b, 1);
                    f.isDefined(this.dismissalCallback) && this.dismissalCallback({
                        identifier: d,
                        sequenceNum: a
                    })
                },
                postQTipRender: function() {
                    if (this.collection.elementAnchorList) {
                        this.addAutoDismissalHandlers();
                        for (var b = this.collection.elementAnchorList, d = 0; d < b.length; d++) {
                            var c = f.processAnchor(Object.keys(b[d])[0], a.regex.anchorSpliterRegex);
                            if (this.isElementVisible(c)) {
                                var e = this.collection.at(c),
                                    h = e.get("invokingEventType"),
                                    t = e.get("invokingEventElement"),
                                    g = this.collection.invokingEventsMap[h],
                                    l = e.get("dismissalType");
                                l && "USER" === l.toUpperCase() && this.removeAutoDismissalHandlers();
                                if (!h || !t || p.utils.isDefined(g) && -1 !== g.indexOf(t)) {
                                    this.currentSequence = b[d][c];
                                    this.anchor = c;
                                    this.clearRender();
                                    b = e.get("elementStartOffset");
                                    if (isNaN(b) || 0 > b) b = a.timer.defaultStartOffset;
                                    this.hasNoPopover() ? this.renderTimeoutId = setTimeout(this.render.bind(this), b, e) : this.renderTimeoutId = setTimeout(this.postQTipRender.bind(this), b);
                                    break
                                }
                            }
                        }
                        f.isDefined(this.renderTimeoutId) || (this.renderTimeoutId = setTimeout(this.postQTipRender.bind(this), a.timer.defaultStartOffset))
                    }
                },
                dismissAndRender: function(b) {
                    var d = function() {
                            this.clearRender();
                            this.fadeOut(function() {
                                this.nextQTip()
                            })
                        },
                        a = y.throttle(d.bind(this), 1E3);
                    b && b.data && "dismissalByUser" === b.data.eventType ?
                        d.call(this) : a.call(this)
                },
                dismissOrRender: function(b) {
                    !this.isBlurSet && b && "blur" === b.type ? (this.clearRender(), this.clearFadeOut(), this.fadeOut(this.remove.bind(this)), this.isBlurSet = !0, this.isWindowVisible = q) : this.isBlurSet && b && "focus" === b.type && (this.isWindowVisible || this.postQTipRender(), this.isBlurSet = !1)
                },
                visibilityChange: function() {
                    this.isWindowVisible !== q && !0 !== this.isWindowVisible || "hidden" !== document.visibilityState ? !1 === this.isWindowVisible && "hidden" !== document.visibilityState && (this.postQTipRender(),
                        this.isWindowVisible = !0) : (this.isBlurSet || (this.clearFadeOut(), this.clearRender(), this.fadeOut(this.remove.bind(this))), this.isWindowVisible = !1)
                },
                clearRender: function() {
                    f.isDefined(this.renderTimeoutId) && (clearTimeout(this.renderTimeoutId), delete this.renderTimeoutId);
                    f.isDefined(this.dismissalTimeoutId) && clearTimeout(this.dismissalTimeoutId)
                },
                clearFadeOut: function() {
                    f.isDefined(this.fadeTimeoutId) && clearTimeout(this.fadeTimeoutId)
                },
                isElementVisible: function(b) {
                    var a = m.scrollY || m.pageYOffset,
                        n = document.documentElement.scrollTop ||
                        document.body.scrollTop,
                        a = f.isDefined(a) ? a : n,
                        n = a + (m.innerHeight || c(m).height()),
                        e = c(b),
                        e = f.isDefined(e) ? e.offset() : q;
                    return f.isDefined(e) && (e = e.top, c(b + ":visible")[0] && a <= e && e < n) ? !0 : !1
                },
                hasNoPopover: function() {
                    for (var b = c(this.popoverClass), a = 0; a < b.length; a++) {
                        var n = b[a].style;
                        if (n && n.display && "none" !== n.display) return !1
                    }
                    return !c(this.searchSugesstions).is(":visible") && !c(this.searchFilterPage).is(":visible") && !g
                },
                addAndPosition: function(b, d) {
                    var n = this._createElement(a.templates.defaultTemplate,
                            d),
                        e = n,
                        h;
                    d.get("videoSource") && (d.get("videoThumbnail") || (e = d.get("videoSource").split(","), d.set({
                        videoThumbnail: e[0].replace(/^\s*/, "").replace(/\s*$/, "")
                    }), 1 < e.length ? d.set({
                        videoSource: e[1].replace(/^\s*/, "").replace(/\s*$/, "")
                    }) : d.set({
                        videoSource: ""
                    })), e = this._createElement(a.templates.preVideoTemplate, d), h = this._createElement(a.templates.dismissIconTemplate, d), n.find("span.qtips-text").html(h).append(e), e = n);
                    this.setElement(this.pageAnchor, e);
                    c(this.qtipsId).hide();
                    this.addStaticToolTipHandlers(d);
                    var t = this;
                    c(e).click(function() {
                        if (d && d.attributes) {
                            var b = d.attributes.identifier;
                            f.isDefined(t.terminationCallback) && t.terminationCallback({
                                identifier: b
                            })
                        }
                    });
                    if (0 < c(this.qtipsId).length) {
                        h = c(m).width() * a.view.maxWidthFactor;
                        h = h >= a.view.maxWidth ? a.view.maxWidth : h;
                        if (d.get("videoSource") && d.get("videoWidth") > c(this.qtipsId).width()) {
                            var g = c(this.qtipsId).width();
                            c(this.qtipsId).width(d.get("videoWidth") + a.view.deltaX);
                            var l = d.get("videoWidth");
                            a.regex.positionRightRegex.test(d.get("elementArrowPosition")) &&
                                (g = parseInt(c(this.qtipsId).css("left"), 10) - (l - g) - a.view.deltaX, c(this.qtipsId).css({
                                    left: g
                                }))
                        }
                        c(this.qtipsId).width() > h && (c(this.qtipsId).width(h), d.set({
                            videoWidth: h - a.view.deltaX
                        }));
                        this.setThumbnailCss(n, d);
                        return b === this.pageAnchor || this.adjustCoordinates(b, d.get("elementArrowPosition") || this.defaultArrowPosition) ? e : void 0
                    }
                },
                setThumbnailCss: function(b, a) {
                    if (a.get("videoSource")) {
                        var n = .25 * c(this.qtipsId).width(),
                            e = .15 * c(this.qtipsId).width(),
                            h = b.find("i#qtip-dismiss-cross").height();
                        b.find("div#qtip-thumbnail").css({
                            width: n +
                                "px",
                            height: e + "px"
                        });
                        b.find("img#qtip-thumbnail-image").css({
                            width: n + "px",
                            height: e + "px"
                        });
                        b.find("img#qtip-thumbnail-play").css({
                            width: .64 * e + "px",
                            height: .64 * e + "px"
                        });
                        var g = c(this.qtipsId).height() > e ? c(this.qtipsId).height() : e;
                        b.find("img#qtip-thumbnail-play").css({
                            left: (n - .64 * e) / 2 + "px",
                            top: (g - .64 * e) / 2 + "px"
                        });
                        b.find("i#qtip-dismiss-cross").css({
                            position: "relative",
                            right: "0px",
                            top: (g - h) / 2 + "px"
                        })
                    }
                },
                animateIn: function(b) {
                    c(this.qtipsId).fadeIn(a.timer.defaultFadeTime);
                    setTimeout(this.bounceAnimate.bind(this),
                        0, b.get("elementBounceDuration"))
                },
                animateVideo: function(b) {
                    var d = this,
                        n = c(d.qtipsId).prop("classList"),
                        e = !1,
                        h;
                    for (h = 0; h < n.length; h++) a.regex.positionTopRegex.test(n[h]) && (e = !0);
                    c(d.qtipDismissIcon).css({
                        top: ""
                    });
                    n = d._createElement(a.templates.videoTemplate, b);
                    d._createElement(a.templates.dismissIconTemplate, b);
                    var g = c(d.qtipThumbnailTextId).position();
                    h = c(d.qtipsId).position().top;
                    var f = c(d.qtipsId).height();
                    c(d.qtipThumbnailId).remove();
                    c(d.qtipThumbnailTextId).css({
                        "padding-left": "",
                        "padding-bottom": "10px"
                    });
                    var l = c(d.qtipThumbnailTextId).height();
                    c(d.qtipThumbnailTextId).css({
                        position: "absolute",
                        left: g.left + "px",
                        top: g.top + "px"
                    });
                    c(d.qtipsId).find("span.qtips-text").append(n);
                    c(d.qtipThumbnailTextId).animate({
                        left: "-\x3d" + g.left + "px"
                    }, {
                        duration: 800,
                        queue: !1,
                        complete: function() {
                            c(d.qtipThumbnailTextId).css({
                                position: "",
                                left: "",
                                top: ""
                            })
                        }
                    });
                    c(d.qtipVideoId).removeAttr("controls");
                    e ? (e = n.height(), c(d.qtipVideoId).css({
                        height: n.height()
                    }), c(d.qtipVideoId).attr("poster", b.get("videoThumbnail")), n.hide(), n.animate({
                        height: "toggle"
                    }, {
                        duration: 1E3,
                        queue: !1,
                        complete: function() {
                            c(d.qtipVideoId).attr("controls", "")
                        }
                    })) : (e = n.height() + l, c(d.qtipVideoId).css({
                        height: n.height()
                    }), c(d.qtipVideoId).attr("poster", b.get("videoThumbnail")), n.hide(), c(d.qtipsId).css({
                        top: h + f + "px"
                    }), n.animate({
                        height: "toggle"
                    }, {
                        duration: 800,
                        queue: !1,
                        complete: function() {
                            c(d.qtipVideoId).attr("controls", "")
                        }
                    }), c(d.qtipsId).animate({
                        height: "+\x3d" + e + "px",
                        marginTop: -e + "px"
                    }, {
                        duration: 1E3,
                        queue: !1,
                        complete: function() {}
                    }).css("overflow", "visible"))
                },
                bounceAnimate: function(b) {
                    var d =
                        a.bounce.amplitude;
                    this.animate({
                        delay: 10,
                        duration: b,
                        delta: function(b) {
                            var d = a.bounce.alpha,
                                c = a.bounce.beta;
                            return Math.pow(Math.E, -1 * a.bounce.gamma * b) * Math.cos(c * b - d)
                        },
                        anchor: this.qtipsId,
                        basePosition: c(this.qtipsId).position().top,
                        step: function(b) {
                            c(this.anchor).css({
                                top: this.basePosition - d * b + "px"
                            })
                        }
                    })
                },
                animate: function(b) {
                    var a = Date.now();
                    this.animateIntervalId = setInterval(function() {
                            var c = (Date.now() - a) / b.duration;
                            1 < c && (c = 1);
                            var e = b.delta(c);
                            b.step(e);
                            1 === c && clearInterval(this.animateIntervalId)
                        },
                        b.delay)
                },
                fadeOut: function(b) {
                    f.isDefined(b) ? 0 < c(this.qtipsId).length ? c(this.qtipsId).fadeOut(a.timer.defaultFadeTime, b.bind(this)) : (b = b.bind(this), b()) : c(this.qtipsId).fadeOut(a.timer.defaultFadeTime);
                    f.isDefined(this.animateIntervalId) && (clearInterval(this.animateIntervalId), this.animateIntervalId = q)
                },
                nextQTip: function() {
                    this.clearFadeOut();
                    f.isDefined(this.collection.elementAnchorList) && 0 < this.collection.elementAnchorList.length ? (this.remove(), this.postQTipRender()) : this.stopQTips()
                },
                stopQTips: function() {
                    this.removeAutoDismissalHandlers();
                    this.removeStaticToolTipHandlers();
                    var b = this.collection.invokingEventsMap,
                        a;
                    for (a in b)
                        if (b.hasOwnProperty(a) && f.isDefined(b[a]))
                            for (var h = b[a], e = 0; e < h.length; e++) c(h[e]).unbind(a, this.collection.registerEvent);
                    this.collection.invokingEventsMap = {};
                    this.fadeOut(this.remove.bind(this));
                    this.clearRender()
                },
                adjustCoordinates: function(b, d) {
                    var h = c(this.qtipsId);
                    if (0 >= h.length) return !1;
                    var e = c(b)[0].getBoundingClientRect(),
                        g = c(b).offset().top - e.top || 0,
                        f = a.view.arrowHeight + a.view.marginFactor * a.view.deltaY,
                        k, l;
                    if ("topleft" === d) k = e.left, l = e.bottom + a.view.arrowHeight + a.view.deltaY;
                    else if ("bottomleft" === d) k = e.left, l = e.top - Math.abs(h.height()) - f;
                    else if ("bottomright" === d) k = e.right - Math.abs(h.width()) - a.view.deltaX, l = e.top - Math.abs(h.height()) - f;
                    else if ("topright" === d) k = e.right - Math.abs(h.width()) - a.view.deltaX, l = e.bottom + a.view.arrowHeight + a.view.deltaY;
                    else if ("topmiddle" === d) {
                        l = e.right - e.left;
                        k = e.left + parseFloat(((l - Math.abs(h.width()) - a.view.deltaX) / 2).toFixed(2));
                        l = e.bottom + a.view.arrowHeight + a.view.deltaY;
                        var u = parseFloat((Math.abs(h.width()) / 2).toFixed(2));
                        this._setClassLeftStyleProperty("qtips-arrow-topmiddle", u + "px")
                    } else if ("bottommiddle" === d) l = e.right - e.left, k = e.left + parseFloat(((l - Math.abs(h.width()) - a.view.deltaX) / 2).toFixed(2)), l = e.top - Math.abs(h.height()) - f, u = parseFloat((Math.abs(h.width()) / 2).toFixed(2)), this._setClassLeftStyleProperty("qtips-arrow-bottommiddle", u + "px");
                    else return !1;
                    u = m.innerHeight || c(m).height();
                    0 > l ? (l = e.bottom + a.view.arrowHeight + a.view.deltaY, "bottomleft" === d ? c(this.qtipsId).removeClass("qtips-arrow-bottomleft").addClass("qtips-arrow-topleft") :
                        "bottomright" === d ? c(this.qtipsId).removeClass("qtips-arrow-bottomright").addClass("qtips-arrow-topright") : "bottommiddle" === d && (c(this.qtipsId).removeClass("qtips-arrow-bottommiddle").addClass("qtips-arrow-topmiddle"), u = parseFloat((Math.abs(h.width()) / 2).toFixed(2)), this._setClassLeftStyleProperty("qtips-arrow-topmiddle", u + "px"))) : e.bottom + Math.abs(h.height()) + f > u && (l = e.top - Math.abs(h.height()) - f, "topleft" === d ? c(this.qtipsId).removeClass("qtips-arrow-topleft").addClass("qtips-arrow-bottomleft") : "topright" ===
                        d ? c(this.qtipsId).removeClass("qtips-arrow-topright").addClass("qtips-arrow-bottomright") : "topmiddle" === d && (c(this.qtipsId).removeClass("qtips-arrow-topmiddle").addClass("qtips-arrow-bottommiddle"), u = parseFloat((Math.abs(h.width()) / 2).toFixed(2)), this._setClassLeftStyleProperty("qtips-arrow-bottommiddle", u + "px")));
                    l += g;
                    0 > k && e.left < e.right - e.left ? "topright" === d ? (k = e.left + a.view.deltaX, c(this.qtipsId).removeClass("qtips-arrow-topright").addClass("qtips-arrow-topleft")) : "bottomright" === d ? (k = e.left + a.view.deltaX,
                        c(this.qtipsId).removeClass("qtips-arrow-bottomright").addClass("qtips-arrow-bottomleft")) : (h = Math.abs(h.width()) + k, c(this.qtipsId).width(h), k = a.view.deltaX) : 0 === k && (k = a.view.deltaX);
                    c(this.qtipsId).css({
                        left: k + "px",
                        top: l + "px",
                        visibility: "visible"
                    });
                    return !0
                },
                _setClassLeftStyleProperty: function(b, a) {
                    var c = document.createElement("style");
                    document.head.appendChild(c);
                    (c = c.sheet) && (c.insertRule ? c.insertRule("." + b + "::after { left:" + a + " }", 0) : c.addRule && c.addRule("." + b + "::after", "left:" + a))
                },
                remove: function() {
                    c(this.qtipsId) &&
                        c(this.qtipsId)[0] !== q && this._removeElement(this.pageAnchor)
                },
                setDismissalCallback: function(b) {
                    this.dismissalCallback = b
                },
                setTerminationCallback: function(b) {
                    this.terminationCallback = b
                },
                countLogger: function() {},
                setCountLogger: function(b) {
                    this.countLogger = b
                }
            });
            p.view = new v;
            p.addStyles();
            return p
        })
    })();
    (function() {
        r.register("QTipsConstants", function() {
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
        r.register("QTipsStyles", function() {
            return "#qtips{position:absolute;overflow:initial}.qtips-background{position:fixed;z-index:90000;padding:10px;opacity:1;border-radius:3px;-webkit-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-o-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.qtips-background:after{position:absolute;display:block;width:0;content:'';border-style:solid;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.qtips-arrow-topleft:after,.qtips-arrow-topmiddle:after,.qtips-arrow-topright:after{top:-8px;border-width:0 8px 9px}.qtips-arrow-bottomleft:after,.qtips-arrow-topleft:after{left:14px}.qtips-arrow-bottomright:after,.qtips-arrow-topright:after{right:14px}.qtips-arrow-bottomleft:after,.qtips-arrow-bottommiddle:after,.qtips-arrow-bottomright:after{bottom:-8px;border-width:9px 8px 0;-webkit-box-shadow:0 0 0 -2px rgba(17,17,17,.25);-moz-box-shadow:0 0 0 -2px rgba(17,17,17,.25);box-shadow:0 0 0 -2px rgba(17,17,17,.25);-o-box-shadow:0 0 0 -2px rgba(17,17,17,.25)}.qtips-textholder{width:100%;height:100%}.slate-image-video-loader {background: #ffffff;border-radius: 50%;position: absolute;opacity: 0.7;}.slate-image-play-button {margin: auto;position: absolute;border-style: solid;border-color: transparent transparent transparent #ada6a6;}"
        })
    })();
    (function() {
        r.when("A").register("QTipsMetrics", function() {
            var g = m.ue;
            return {
                incrementCounter: function(m, c) {
                    c = c || 1;
                    g && g.count && g.count(m, (g.count(m) || 0) + c)
                }
            }
        })
    })();
    (function() {
        r.register("ShoppingAidsSparklesStyles", function() {
            var g = document.createElement("style");
            g.innerHTML = ".sparkle-container{background:#fff;position:fixed;bottom:0;left:0;right:0;box-sizing:border-box;display:table;box-shadow:0 0 5px #aaa;z-index:99;opacity:.5;transform:translateY(100%);transition:transform .5s,opacity .5s}.sparkle-content{display:table-cell;vertical-align:top;width:100%;padding:15px}.sparkle-close{display:table-cell;vertical-align:top;padding:15px 15px 0 0;font-weight:700}.sparkle-image-container{display:table-cell;vertical-align:top;width:22px}.sparkle-text-container{display:table-cell;vertical-align:top;padding-left:15px}.sparkle-text{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}.sparkle-image,.sparkle-image-loader{border:none;height:22px;width:22px}.sparkle-image-loader{display:none}.sparkle-container.sparkle-loading .sparkle-image-loader{display:block}.sparkle-container.sparkle-loading .sparkle-image{display:none}.sparkle-container.sparkle-loading .sparkle-content{pointer-events:none}.sparkle-container.sparkle-loading .sparkle-text{color:#aaa}.sparkle-container.sparkle-open{transform:translateY(0);opacity:1}.sparkle-container.sparkle-closing{transform:translateY(100%);opacity:.5}";
            document.head.appendChild(g)
        })
    })();
    (function() {
        r.when("A", "QTipsMetrics", "QTips", "ShoppingAidsSparklesStyles").register("ShoppingAidsSparkles", function(g, r, c) {
            var a = q,
                v = q,
                k = {
                    logImpression: function(c, b, d) {
                        g.ajax("/gp/aw/shoppingAids/logImpression.html", {
                            method: "GET",
                            contentType: "application/json; charset\x3dutf-8",
                            timeout: 6E4,
                            params: {
                                pageType: a,
                                shoppingAidsType: "sparkle",
                                id: c
                            },
                            success: b,
                            error: d
                        })
                    },
                    logInteraction: function(a, b, c) {
                        b()
                    },
                    logCounter: function(a, b) {
                        r.incrementCounter("shopping_aids_" + v + "_sparkle" +
                            a, b)
                    }
                },
                x = {
                    create: function(a) {
                        var b = a.sparkleType,
                            c = a.identifier,
                            g = a.invokingEventType,
                            e = a.invokingEventElement,
                            f = {},
                            t, p = !1;
                        if ("dynamic" === b && e && g) {
                            b = [];
                            try {
                                b = JSON.parse(a.stateData)
                            } catch (l) {
                                k.logCounter("illegal_input_stateData");
                                return
                            }
                            b.forEach(function(b) {
                                f[b.stateId] = {
                                    id: b.stateId,
                                    mode: b.mode,
                                    text: b.text,
                                    icon: b.icon
                                }
                            });
                            document.querySelector(e).addEventListener(g, function(b) {
                                t = b.detail
                            })
                        } else if ("static" === b) {
                            var f = {
                                    initial: {
                                        id: "initial",
                                        mode: "default",
                                        text: a.displayText,
                                        icon: a.displayIcon
                                    }
                                },
                                u = {
                                    requestUpdate: q,
                                    state: "initial",
                                    onShow: function(b) {
                                        this.requestUpdate = b.requestUpdate
                                    },
                                    onClick: function() {
                                        this.requestUpdate({
                                            signal: "complete"
                                        });
                                        setTimeout(function() {
                                            m.location.href = a.targetEndpoint
                                        }, 500)
                                    },
                                    onClose: function() {}
                                };
                            e && g ? document.querySelector(e).addEventListener(g, function() {
                                t = u
                            }) : t = u
                        } else {
                            k.logCounter("illegal_input");
                            return
                        }
                        return {
                            getIdentifier: function() {
                                return c
                            },
                            getState: function(b) {
                                return f[b]
                            },
                            isEligible: function() {
                                return !(!t || p)
                            },
                            getEventData: function() {
                                return t
                            },
                            isDone: function() {
                                return p
                            },
                            done: function() {
                                p = !0
                            }
                        }
                    }
                },
                f = {
                    create: function(a, b) {
                        function c(b) {
                            b ? f.classList.add("sparkle-loading") : f.classList.remove("sparkle-loading")
                        }

                        function g(b) {
                            f.classList.remove("sparkle-mode-warning", "sparkle-mode-success", "sparkle-mode-error");
                            "loading" === b.mode ? c(!0) : "default" !== b.mode && f.classList.add("sparkle-mode-" + b.mode);
                            r.innerHTML = b.text;
                            q.src = b.icon;
                            v = b
                        }

                        function e(c) {
                            f.classList.add("sparkle-closing");
                            setTimeout(function() {
                                f.remove()
                            }, 500);
                            b.sparkleClosed(a, c)
                        }

                        function k(f) {
                            if (a.isDone()) return !1;
                            switch (f.signal) {
                                case "statechange":
                                    if (f = a.getState(f.state)) return c(!1), g(f), !0;
                                    e("client_illegal_state");
                                    return !1;
                                case "complete":
                                    return b.sparkleComplete(a), (f = a.getState(f.state)) ? (c(!1), g(f), setTimeout(function() {
                                        e("client_complete")
                                    }, 1E4)) : e("client_complete"), !0;
                                case "abort":
                                    return e("client_abort"), !0;
                                default:
                                    return !1
                            }
                        }
                        var f = document.createElement("div");
                        f.classList.add("sparkle-container");
                        var m = document.createElement("div");
                        m.classList.add("sparkle-content");
                        var l = document.createElement("div");
                        l.classList.add("sparkle-image-container");
                        var p = document.createElement("img");
                        p.classList.add("sparkle-image-loader");
                        p.src = "https://m.media-amazon.com/images/G/01/amazonui/loading/loading-4x._V1_.gif";
                        var q = document.createElement("img");
                        q.classList.add("sparkle-image");
                        l.appendChild(p);
                        l.appendChild(q);
                        p = document.createElement("div");
                        p.classList.add("sparkle-text-container");
                        var r = document.createElement("a");
                        r.classList.add("sparkle-text");
                        r.href = "#";
                        p.appendChild(r);
                        m.appendChild(l);
                        m.appendChild(p);
                        l = document.createElement("div");
                        l.classList.add("sparkle-close");
                        l.innerHTML = "✕";
                        f.appendChild(m);
                        f.appendChild(l);
                        var v;
                        m.addEventListener("click", function() {
                            c(!0);
                            b.sparkleClicked(a, v)
                        });
                        l.addEventListener("click", function() {
                            e("customer_closed")
                        });
                        return {
                            display: function(c) {
                                k({
                                    signal: "statechange",
                                    state: c
                                }) && (document.body.appendChild(f), setTimeout(function() {
                                    f.classList.add("sparkle-open");
                                    b.sparkleShown(a, k)
                                }, 500))
                            }
                        }
                    }
                },
                p = {
                    models: {},
                    init: function(c) {
                        a = c.page;
                        v = c.platform || "mweb";
                        this.models = this.createModels(c.sparkles);
                        this.render()
                    },
                    createModels: function(a) {
                        var b = [];
                        a.forEach(function(a) {
                            (a = x.create(a)) && b.push(a)
                        });
                        return b
                    },
                    getNextEligible: function() {
                        for (var a = 0; a < this.models.length && !this.models[a].isEligible(); a++);
                        return this.models.splice(a, 1)[0]
                    },
                    render: function() {
                        setTimeout(function() {
                            if (c.view.hasNoPopover()) {
                                var a = this.getNextEligible();
                                a ? f.create(a, this).display(a.getEventData().state) : 0 < this.models.length && this.render()
                            } else this.render()
                        }.bind(this), 3E3)
                    },
                    sparkleShown: function(a, b) {
                        k.logImpression(a.getIdentifier(),
                            function() {
                                k.logCounter("logImpression_success")
                            },
                            function() {
                                k.logCounter("logImpression_error")
                            });
                        k.logCounter("sparkleShown");
                        a.getEventData().onShow({
                            requestUpdate: b
                        })
                    },
                    sparkleClicked: function(a, b) {
                        a.getEventData().onClick({
                            state: b.id
                        })
                    },
                    sparkleClosed: function(a, b) {
                        k.logCounter("sparkleClosed");
                        k.logCounter("sparkleClosed_" + b);
                        a.done();
                        a.getEventData().onClose({
                            reason: b
                        });
                        this.render()
                    },
                    sparkleComplete: function(a) {
                        k.logInteraction(a.getIdentifier(), function() {
                                k.logCounter("logInteraction_success")
                            },
                            function() {
                                k.logCounter("logInteraction_error")
                            })
                    }
                };
            return {
                init: p.init.bind(p)
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
(function(g) {
    var d = window.AmazonUIPageJS || window.P,
        h = d._namespace || d.attributeErrors,
        f = h ? h("QTipsMobileWebAssets", "") : d;
    f.guardFatal ? f.guardFatal(g)(f, window) : f.execute(function() {
        g(f, window)
    })
})(function(g, d, h) {
    (function() {
        g.when("A", "SA_BottomSheet", "SA_MemoryManager", "QTips", "QTipsMetrics", "QTipsConstants", "ShoppingAidsSparkles").register("QTipsHandler", function(f, h, m, k, e, n, l) {
            return {
                page: "",
                storageKey: "identifier",
                sourceName: "ShoppingAidsMWeb_",
                init: function() {
                    var a = this;
                    e.incrementCounter(this.sourceName +
                        "assetsLoaded");
                    if (!this._isLocalStorageExposed()) return 0;
                    if (this.page = this._pageAdapter()) {
                        var b = function(c) {
                            a.updateBackOffConfig(c);
                            var b = c.ShoppingAidsList.ToolTips;
                            b && Array.isArray(b) && b.length && a._display(b);
                            (b = c.ShoppingAidsList.BottomSheets) && Array.isArray(b) && b.length && (b.sort(function(a, b) {
                                return a.sequenceNum - b.sequenceNum
                            }), h.collection.create(b), h.view.start(a.page));
                            c = c.ShoppingAidsList.Sparkles;
                            Array.isArray(c) && c.length && l.init({
                                sparkles: c,
                                page: a.page,
                                platform: "mweb"
                            });
                            a.fireReady()
                        };
                        a.shouldBackOff() || a.fetch(a.page, b)
                    } else e.incrementCounter(this.sourceName + "pageTypeMismatch")
                },
                updateBackOffConfig: function(a) {
                    var b = a.IsValidCampaignAvailable,
                        c = this._getFromLocalStorage("backOffConfig"),
                        c = c ? JSON.parse(c) : {};
                    if (!c[this.page] || b) c[this.page] = {}, c[this.page].currentBackoffFactor = 0, c[this.page].nextFetchTime = (new Date).getTime();
                    b || (a = 6E4 * a.BackoffInterval * Math.pow(a.BackoffFactor, c[this.page].currentBackoffFactor), c[this.page].nextFetchTime += a, c[this.page].currentBackoffFactor +=
                        1);
                    this._setInLocalStorage("backOffConfig", JSON.stringify(c))
                },
                shouldBackOff: function() {
                    var a = (new Date).getTime(),
                        b = this._getFromLocalStorage("backOffConfig");
                    return (b = JSON.parse(b)) && b[this.page] && a < b[this.page].nextFetchTime ? !0 : !1
                },
                _getParameterByName: function(a, b) {
                    b || (b = d.location.href);
                    a = a.replace(/[\[\]]/g, "\\$\x26");
                    var c = (new RegExp("[?\x26]" + a + "(\x3d([^\x26#]*)|\x26|#|$)")).exec(b);
                    return c ? c[2] ? decodeURIComponent(c[2].replace(/\+/g, " ")) : "" : null
                },
                fetch: function(a, b, c) {
                    var d = this.sourceName +
                        "fetchShoppingAids_",
                        k = document.referrer,
                        g = /.*\.amazon\..*/g,
                        h = "DIRECT";
                    g && g.test(k) && (h = "INDIRECT");
                    f.ajax("/gp/aw/shoppingAids/fetchShoppingAids.html", {
                        method: "GET",
                        contentType: "application/json; charset\x3dutf-8",
                        timeout: 6E4,
                        params: {
                            page: a,
                            url: this._getWindowLocationHref(),
                            trafficType: h
                        },
                        success: function(c) {
                            e.incrementCounter(d + a + "_success");
                            b && "function" === typeof b && b(c)
                        },
                        error: function(b, f) {
                            "Request Timeout" === f && e.incrementCounter(d + a + "_request_timeout");
                            e.incrementCounter(d + a + "_failed");
                            c &&
                                "function" === typeof c && c(b)
                        }
                    })
                },
                _pageAdapter: function() {
                    var a = this._getWindowLocationHref(),
                        b;
                    a && (a.match(/\/(d|product|dp|reader|detail|ASIN|udp)(\/|\?.*ASIN=)([A-Z0-9]{8,13})[$\/&\?]?/i) ? b = "detailpage" : a.match(/\/(search|s)\//i) ? b = "search" : a.match(/(\.amazon\.[^\/\?]+$)|(gp\/(homepage\.html|aw(?!\/(d|s|search)))|(exec\/obidos\/subst\/home\/home.html)|\/{2}.*?\/$|\/{2}[^\/]*?\/(ref|sessionID|\?|#))/i) ? b = "gateway" : a.match(/\/gp\/(sva|payment\/statement)\/*/i) && (b = "pay"));
                    a = {
                        "gateway-phone-web": "gateway",
                        DetailAW: "detailpage",
                        SearchAW: "search",
                        AmazonMoneyMobile: "pay"
                    };
                    if (!b) {
                        var c = d.ue_pty;
                        c && a[c] && (b = a[c], e.incrementCounter("qtipsWindowUePtyUsed"))
                    }
                    return b
                },
                _getWindowLocationHref: function() {
                    return d.location.href
                },
                _display: function(a) {
                    k.collection.create(a);
                    k.view.setDismissalCallback(this.logImpression.bind(this));
                    k.view.setTerminationCallback(this.terminateQTip.bind(this));
                    k.utils.isDefined(k.view.setCountLogger) && k.view.setCountLogger(this.logCounter.bind(this));
                    k.view.postQTipRender()
                },
                logCounter: function(a,
                    b, c) {
                    e.incrementCounter(a + "_" + b, c)
                },
                logImpression: function(a) {
                    a = a[this.storageKey];
                    var b = this.sourceName + a + "_" + this.page;
                    f.ajax("/gp/aw/shoppingAids/logImpression.html", {
                        method: "GET",
                        contentType: "application/json; charset\x3dutf-8",
                        timeout: 6E4,
                        params: {
                            pageType: this.page,
                            shoppingAidsType: "tool_tip",
                            id: a
                        },
                        success: function(a) {
                            e.incrementCounter(b + "_logged")
                        },
                        error: function(a, d) {
                            e.incrementCounter(b + "_failedToLog")
                        }
                    })
                },
                terminateQTip: function(a) {
                    e.incrementCounter("terminate_" + a[this.storageKey])
                },
                _getFromLocalStorage: function(a) {
                    if (localStorage) return localStorage.getItem(a)
                },
                _setInLocalStorage: function(a, b) {
                    if (localStorage) try {
                        localStorage.setItem(a, b)
                    } catch (c) {
                        e.incrementCounter(this.sourceName + "QuotaExceededError")
                    }
                },
                _isLocalStorageExposed: function() {
                    try {
                        if (d.localStorage) return 1
                    } catch (a) {
                        return e.incrementCounter(this.sourceName + "LocalStorageNotExposed"), 0
                    }
                },
                fireReady: function() {
                    g.register("shopping-aids-ready", function() {})
                }
            }
        });
        g.when("QTipsHandler", "ready").execute(function(d) {
            d.init()
        })
    })()
});
/* ******** */