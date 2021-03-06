"use strict";
! function() {
    function e(e) {
        for (var t = 0, n = e.length; t < n; t++) {
            var i = e[t].toLowerCase();
            this[i] = new Number(t), this[i].string = i
        }
    }
    var t = {
            index: 0,
            check: function(e) {
                e[$.expando] || (e[$.expando] = ++t.index)
            },
            make: function(e, n) {
                return t.check(e), n.guid + "-" + e[$.expando]
            }
        },
        n = {
            TYPE: new e(["onscreen", "inview"]),
            INVIEW_STATES: new e(["none", "top", "bottom", "left", "right", "both"]),
            registered: [],
            shouldReProcess: !0,
            register: function(e, i, o) {
                var s = r.isLocked(),
                    u = $(e);
                n.registered.push({
                    id: t.make(e, i),
                    data: i,
                    $element: u,
                    type: o,
                    _onscreen: s ? null : a.get(u).uniqueMeasurementId,
                    _hasTriggered: !1
                }), n.shouldReProcess = !0
            },
            unregister: function(e, i, r) {
                for (var o = n.registered, s = t.make(e, i), a = o.length - 1, u = -1; a > u; a--) {
                    var c = o[a];
                    c.id == s && c.type == r && (o.splice(a, 1), n.shouldReProcess = !0)
                }
            },
            process: function() {
                var e, t = n.registered;
                for (n.shouldReProcess = !0; n.shouldReProcess;) {
                    if (n.shouldReProcess = !1, 0 == (e = t.length)) return;
                    for (var i = 0; i < e; i++) {
                        var r = t[i],
                            o = a.get(r.$element);
                        if (r._onscreen !== undefined && r._hasTriggered) {
                            if (!(r._onscreen != o.uniqueMeasurementId)) continue
                        }
                        switch (r._onscreen = o.uniqueMeasurementId, r._hasTriggered = !0, r.type) {
                            case n.TYPE.onscreen:
                                n.processOnScreen(r, o);
                                break;
                            case n.TYPE.inview:
                                n.processInView(r, o)
                        }
                        if (n.shouldReProcess) break
                    }
                }
            },
            processOnScreen: function(e, t) {
                e.$element.trigger("onscreen", t)
            },
            processInView: function(e, t) {
                var i, r = t.percentFromTop >= 0 && t.percentFromTop <= 100,
                    s = t.percentFromBottom >= 0 && t.percentFromBottom <= 100,
                    a = t.percentFromLeft >= 0 && t.percentFromLeft <= 100,
                    u = t.percentFromRight >= 0 && t.percentFromRight <= 100;
                i = r && s ? n.INVIEW_STATES.both.string : r ? n.INVIEW_STATES.top.string : s ? n.INVIEW_STATES.bottom.string : n.INVIEW_STATES.none.string;
                var c;
                c = a && u ? n.INVIEW_STATES.both.string : a ? n.INVIEW_STATES.left.string : u ? n.INVIEW_STATES.right.string : n.INVIEW_STATES.none.string;
                var l = [t.onscreen, c, i];
                if (e._inviewPreviousState !== undefined && o.options.allowScrollOver) {
                    var h = e._measurePreviousState.percentFromBottom <= 100 && t.percentFromBottom >= 100;
                    if (e._inviewPreviousState[0] == l[0] && e._inviewPreviousState[1] == l[1] && e._inviewPreviousState[2] == l[2] && !h) return;
                    h && (l[0] = !0, l[1] = "both", l[2] = "both")
                }
                e._inviewPreviousState = l, e._measurePreviousState = t, e.$element.trigger("inview", l)
            }
        },
        i = {
            lastStartEvent: 0,
            timeoutHandle: null,
            intervalDuration: 100,
            hasRaf: !1,
            start: function() {
                i.lastStartEvent = (new Date).getTime(), i.repeat()
            },
            repeat: function() {
                i.stop(), i.hasRaf ? i.timeoutHandle = requestAnimationFrame(i.main) : i.timeoutHandle = setTimeout(i.main, i.intervalDuration)
            },
            hasExpired: function() {
                if (!((new Date).getTime() - i.lastStartEvent < 1500)) return i.stop(), !0
            },
            isThrottled: function() {
                return !((new Date).getTime() - i.lastMain > i.intervalDuration)
            },
            lastMain: (new Date).getTime(),
            main: function() {
                if (i.isThrottled()) return void i.repeat();
                i.lastMain = (new Date).getTime(), i.hasExpired() || (0 == n.registered.length ? (i.stop(), i.intervalDuration = 200, i.repeat()) : (i.stop(), i.intervalDuration = 100, i.repeat()), r.isLocked() || n.process())
            },
            stop: function() {
                null !== i.timeoutHandle && (i.hasRaf ? (cancelAnimationFrame(i.timeoutHandle), i.timeoutHandle = null) : (clearTimeout(i.timeoutHandle), i.timeoutHandle = null))
            }
        };
    $.extend($.event.special, {
        onscreen: {
            noBubble: !0,
            add: function(e) {
                n.register(this, e, n.TYPE.onscreen)
            },
            remove: function(e) {
                n.unregister(this, e, n.TYPE.onscreen)
            }
        },
        inview: {
            noBubble: !0,
            add: function(e) {
                n.register(this, e, n.TYPE.inview)
            },
            remove: function(e) {
                n.unregister(this, e, n.TYPE.inview)
            }
        }
    }), $.extend($.fn, {
        onscreen: function(e) {
            return e ? (this.on("onscreen", e), this) : a.get(this)
        },
        inview: function(e) {
            return e ? (this.on("inview", e), this) : a.get(this)
        }
    });
    var r = {
            locks: [],
            lock: function(e) {
                r.isLocked(e) || r.locks.push(e)
            },
            unlock: function(e) {
                if (r.isLocked(e)) {
                    for (var t = 0, n = r.locks.length; t < n; t++) {
                        if (r.locks[t] == e) {
                            r.locks.splice(t, 1);
                            break
                        }
                    }
                    i.start()
                }
            },
            isLocked: function(e) {
                if (!e) return r.locks.length > 0;
                for (var t = 0, n = r.locks.length; t < n; t++) {
                    if (r.locks[t] == e) return !0
                }
                return !1
            }
        },
        o = {
            options: {
                allowScrollOver: !0
            },
            config: function(e) {
                "object" == typeof e && $.extend(o.options, e)
            }
        };
    $.inview = $.onscreen = function() {
        i.start()
    }, $.extend($.inview, r, o);
    var s = {
            $el: $(window),
            height: null,
            width: null,
            heightRatio: null,
            widthRatio: null,
            resize: function() {
                s.height = window.innerHeight || s.$el.height(), s.width = window.innerWidth || s.$el.width(), s.heightRatio = 100 / s.height, s.widthRatio = 100 / s.width, i.start()
            }
        },
        a = {
            featureDetect: function() {
                i.hasRaf = window.requestAnimationFrame && window.cancelAnimationFrame
            },
            get: function(e) {
                if (0 != e.length) {
                    var t, n = e[0];
                    try {
                        t = n.getBoundingClientRect()
                    } catch (e) {
                        t = {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    var i = t.height,
                        r = t.width,
                        o = t.top,
                        u = t.left,
                        c = s.height - (o + i),
                        l = s.width - (u + r),
                        h = Math.round(s.heightRatio * o),
                        d = Math.round(s.widthRatio * u),
                        f = Math.round(s.heightRatio * c),
                        g = Math.round(s.widthRatio * l),
                        m = null;
                    m = u + r > 0 && l < 0 && u < 0 ? r : u < 0 ? r + u : u + r > s.width ? s.width - u : r;
                    var v = null;
                    v = o + i > 0 && c < 0 && o < 0 ? i : o < 0 ? i + o : o + i > s.height ? s.height - o : i, v < 0 && (v = 0), m < 0 && (m = 0);
                    var p = Math.round(100 / i * v),
                        w = Math.round(100 / r * m),
                        T = i * r,
                        E = v * m,
                        S = Math.round(100 / T * E),
                        I = !0;
                    (g > 100 || d > 100 || f > 100 || h > 100) && (I = !1);
                    i <= 0 && r <= 0 && (I = !1);
                    var k = a.isElementHidden(n);
                    if (k && (I = !1), I)
                        for (var $ = a.getParents(n), b = 0, P = $.length - 1; b < P; b++) {
                            var R = $[b];
                            if (k = a.isElementHidden(R)) {
                                I = !1;
                                break
                            }
                            var _ = a.isOutOfBounds(n, R);
                            if (_) {
                                I = !1;
                                break
                            }
                        }
                    return {
                        top: o,
                        left: u,
                        bottom: c,
                        right: l,
                        percentFromTop: h,
                        percentFromLeft: d,
                        percentFromBottom: f,
                        percentFromRight: g,
                        percentInview: S,
                        percentInviewHorizontal: w,
                        percentInviewVertical: p,
                        onscreen: I,
                        uniqueMeasurementId: "" + o + u + c + l + i + r + s.height + s.width + I,
                        timestamp: (new Date).getTime()
                    }
                }
            },
            getParents: function(e) {
                for (var t, n = []; t = e.parentElement;) n.push(t), e = t;
                return n
            },
            isElementHidden: function(e) {
                var t = "none" == e.style.display || "hidden" == e.style.visibility;
                if (t) return !0;
                var n = window.getComputedStyle(e, null);
                return t = "none" == n.display || "hidden" == n.visibility
            },
            isOutOfBounds: function(e, t) {
                var n = t.clientWidth < t.scrollWidth,
                    i = t.clientHeight < t.scrollHeight,
                    r = n || i,
                    o = $(t);
                if (!r || "visible" === o.css("overflow")) return !1;
                var s = $(e),
                    a = s.offset(),
                    u = o.offset(),
                    c = a.top - u.top,
                    l = a.left - u.left,
                    h = c + e.clientHeight,
                    d = l + e.clientWidth;
                return c >= t.clientHeight || l >= t.clientWidth || h <= 0 || d <= 0
            }
        };
    $(window).on({
        "touchmove scroll mousedown keydown": i.start,
        resize: s.resize
    }), $(a.featureDetect), s.resize()
}();