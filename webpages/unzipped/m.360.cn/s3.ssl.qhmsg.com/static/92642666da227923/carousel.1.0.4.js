(function() {
    var e = Widget.extend({
        attrs: {
            index: -1,
            count: 0,
            recyclable: !1
        },
        setup: function() {},
        next: function() {
            var e = this.get("index"),
                t = this.getNextIndex();
            return t != -1 ? (this.switchTo(t), !0) : !1
        },
        prev: function() {
            var e = this.get("index"),
                t = this.getPrevIndex();
            return t != -1 ? (this.switchTo(t), !0) : !1
        },
        getNextIndex: function() {
            var e = this.get("index"),
                t = -1,
                n = this.get("count");
            return this.get("recyclable") ? t = (e + 1) % n : e + 1 < n && (t = e + 1), t
        },
        getPrevIndex: function() {
            var e = this.get("index"),
                t = -1,
                n = this.get("count");
            return this.get("recyclable") ? t = (e + n - 1) % n : e - 1 >= 0 && (t = e - 1), t
        },
        switchTo: function(e) {
            var t = this.get("index");
            return t != e ? (this.set("index", e), !0) : !1
        }
    });
    this.Switchable = e
})(),
function() {
    var e = function() {
            var e = window.getComputedStyle(document.documentElement, ""),
                t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || e.OLink === "" && ["", "o"])[1],
                n = "WebKit|Moz|MS|O".match(new RegExp("(" + t + ")", "i"))[1];
            return {
                dom: n,
                lowercase: t,
                css: "-" + t + "-",
                js: t[0].toUpperCase() + t.substr(1)
            }
        }(),
        t = 25,
        n = 200,
        r = e.css + "transform",
        i = Switchable.extend({
            attrs: {
                index: 0,
                recyclable: !0,
                duration_ms: 200,
                autoplay: !1,
                autoplay_interval_ms: 1e4,
                swipable: !0,
                direction: "horizontal",
                selectors: {
                    content: ".carousel-cont",
                    contItem: ".cont-item",
                    control: ".carousel-control",
                    controlItem: ".control-item",
                    active: ".active",
                    current: ".current"
                },
                eles: {
                    before: null,
                    middle: null,
                    after: null,
                    control: null
                }
            },
            setup: function() {
                i.superclass.setup && i.superclass.setup.apply(this, arguments);
                var e = this,
                    t = e.get("selectors");
                e.slideDir = this.get("direction") == "vertical" ? 1 : -1, e.contItems = e.$element.children(t.content).children(t.contItem), e.controlItems = e.$element.children(t.control).children(t.controlItem), e.dirLength = e._getSlideLength(), e.on("change:index", e._onChangeIndex), e.on("change:eles", e._onChangeEles), e.before("prev", e._beforePrev), e.before("next", e._beforeNext), e.delegateEvents(e.controlItems, "tap", e._controlTapHandler), e.set("count", e.contItems.length), e.get("count") <= 1 && (e.set("recyclable", !1), e.set("swipable", !1)), this.set("index", parseInt(this.get("index"))), this.get("swipable") && this._initSwipe(e.contItems.parent()), this._bindResizeHandler(), this.render()
            },
            _getSlideLength: function() {
                return this.slideDir == -1 ? this.contItems.parent().width() : this.contItems.parent().height()
            },
            refresh: function() {
                this.dirLength = this._getSlideLength(), this._placeTo(this.get("eles.before"), -this.dirLength), this._placeTo(this.get("eles.after"), this.dirLength)
            },
            _initSwipe: function(e) {
                function p(e) {
                    var t = e.touches[0];
                    a = t.pageX - o, f = t.pageY - u, l == undefined && (l = Math.abs(f) > Math.abs(a) ? 1 : -1);
                    if (r.slideDir + l == 0) return;
                    stopPropagation || (i.off("touchmove"), i.on("touchmove", p), i.on("touchend", d), i.on("touchcancel", d), stopPropagation = !0), e.preventDefault(), r.trigger("swipemove", [r.slideDir == -1 ? a : f])
                }

                function d(e) {
                    r.set("autoplay", c);
                    if (r.slideDir + l == 0) return;
                    r.trigger("swipeend", [r.slideDir == -1 ? a : f]), i.off("touchmove", p), i.off("touchend", d)
                }
                var r = this,
                    i = $(document.body),
                    s, o, u, a, f, l, c, h;
                e.on("touchstart", function(e) {
                    c = r.get("autoplay"), stopPropagation = !1, i.off("touchmove", p), i.off("touchend", d), i.off("touchcancel", d), s = e.touches[0], o = s.pageX, u = s.pageY, a = 0, f = 0, l = undefined, i.on("touchmove", p), i.on("touchend", d), i.on("touchcancel", d), r.trigger("swipestart")
                }), this.on("swipestart", function() {
                    this.set("autoplay", !1)
                }), this.on("swipemove", function(e, t) {
                    if (this.sliding) return;
                    var n = t > 0 ? this.get("eles.after") : this.get("eles.before"),
                        r = t > 0 ? this.get("eles.before") : this.get("eles.after"),
                        i = t > 0 ? this.dirLength : -this.dirLength,
                        s = t > 0 ? -this.dirLength : this.dirLength;
                    !r[0] && t != 0 && (t /= 3), r.css(this._getOffsetCss(t + s)), n[0] != r[0] && n.css(this._getOffsetCss(i)), this.get("eles.middle").css(this._getOffsetCss(t))
                }), this.on("swipeend", function(e, i) {
                    if (this.sliding) return;
                    var s = !1;
                    Math.abs(i) > t ? s = i > 0 ? !this.prev() : !this.next() : s = !0;
                    if (s) {
                        var o = i > 0 ? this.get("eles.before") : this.get("eles.after"),
                            u = i > 0 ? -this.dirLength : this.dirLength;
                        r.get("eles.middle").animate(r._getOffsetCss(0), n, "ease"), o.animate(r._getOffsetCss(u), n, "ease")
                    }
                })
            },
            _bindResizeHandler: function() {
                this.delegateEvents(window, "resize", function() {
                    this.refresh()
                })
            },
            _controlTapHandler: function(e) {
                if (this.sliding) return;
                var t = this.get("index"),
                    n = this.controlItems.index(e.currentTarget);
                n != t && (this.dir = n > t ? 1 : -1);
                var r = this.get("autoplay");
                this.set("autoplay", !1), this.switchTo(n), this.set("autoplay", r)
            },
            _beforePrev: function() {
                this.dir = -1
            },
            _beforeNext: function() {
                this.dir = 1
            },
            _onChangeIndex: function(e, t, n) {
                this.trigger("beforeSwitch", [t, n]);
                var r = this.getPrevIndex(),
                    i = this.getNextIndex();
                this.set("eles", {
                    before: r != -1 ? this.contItems.eq(r) : $(),
                    middle: this.contItems.eq(t),
                    after: i != -1 ? this.contItems.eq(i) : $(),
                    control: this.controlItems.eq(t)
                }), this.trigger("afterSwitch", [t, n])
            },
            _onChangeEles: function(t, n, r) {
                function l() {
                    $.each(r, function(e, t) {
                        t && t.removeClass(o)
                    }), r.middle && r.middle.removeClass(u), $.each(n, function(t, n) {
                        n && n.addClass(o).css(e.css + "transition", "none")
                    }), n.middle && n.middle.addClass(u), a._getElesPosReady(n), a.sliding = !1
                }
                var i = this.dirLength,
                    s = this.get("duration_ms"),
                    o = this.get("selectors.active").slice(1),
                    u = this.get("selectors.current").slice(1),
                    a = this,
                    f = this.dir == 1 ? r.after : r.before;
                f && (f[0] != n.middle[0] || this._getTranslateOffset(f) * this.dir < 0) && this._placeTo(n.middle, this.dir * i), this.sliding = !0, r.middle && r.middle.size() && r.middle[0].clientLeft, n.middle && n.middle.size() && n.middle[0].clientLeft, this._slideTo(r.middle, -this.dir * i, s), this._slideTo(n.middle, 0, s, l)
            },
            _onRenderAutoplay: function(e, t, n) {
                if (t == n) return;
                var r = this;
                t ? this.autoplayTimer = setInterval(function() {
                    r.sliding || r.next()
                }, this.get("autoplay_interval_ms")) : (clearInterval(this.autoplayTimer), this.autoplayTimer = undefined)
            },
            _getElesPosReady: function(e) {
                this._placeTo(e.middle, 0), this._placeTo(e.before, -this.dirLength), this._placeTo(e.after, this.dirLength)
            },
            _placeTo: function(e, t) {
                if (!e) return;
                var n = this._getOffsetCss(t);
                e.css(n)
            },
            _slideTo: function(t, n, r, i) {
                n = Math.round(n);
                if (!t || !t[0]) return;
                var s = t[0].style,
                    o = e.css;
                if (!s) return;
                this.slideDir == -1 ? s.cssText += o + "transition:" + r + "ms ease;" + o + "transform: translate3d(" + n + "px, 0, 0);" : s.cssText += o + "transition:" + r + "ms ease;" + o + "transform: translate3d(0, " + n + "px, 0);", setTimeout(function() {
                    i && i()
                }, r)
            },
            _getOffsetCss: function(e) {
                e = Math.round(e);
                var t = {};
                return this.slideDir == -1 ? t[r] = "translate3d(" + e + "px, 0, 0)" : t[r] = "translate3d(0, " + e + "px, 0)", t
            },
            _getTranslateOffset: function(e) {
                var t = window.getComputedStyle(e[0])[r],
                    n = t.indexOf("3d") >= 0,
                    i = t.match(/\((.*)\)/)[1].split(","),
                    s = n ? [12, 13] : [4, 5];
                return s = this.slideDir == -1 ? s[0] : s[1], parseInt(i[s])
            }
        });
    this.Carousel = i
}();