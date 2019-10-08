define(function() {
    function a(a) {
        $.extend(this, h, a), this.listData = [], this.originNum = this.list.length, this.activeIndex = 0, this.indicatorActiveIndex = 1, this.originIndicatorActiveIndex = 0, this.autoPlayInterval = null, this.width = 0, this.slideProtect = !1, this.slideProtectTimeout = null, this.fixLoopTimeout = null, this.slideWrapperDom, this.slideMainDom, this.slideIndicatorDom, this.closeDom, this.isSingle = 1 === this.list.length, this.preProcess()
    }
    var h = {
            autoplay: !0,
            loop: !0,
            delay: 5e3,
            showIndicator: !0,
            indicatorActiveColor: "#d9d9d8",
            indicatorDefaultColor: "#eee",
            minChangeWidth: 50,
            waitTime: 300,
            transition: "all .3s cubic-bezier(.42, 0, .58, 1)",
            backgroundSize: "cover"
        },
        c = {
            TOP: 1,
            BOTTOM: 2,
            LEFT: 3,
            RIGHT: 4
        };
    return a.prototype = {
        constructor: a,
        preProcess: function() {
            if (this.listData = JSON.parse(JSON.stringify(this.list)), this.loop) {
                if (this.listData && this.listData.length > 1) {
                    var a = Object.assign(this.listData[0]),
                        h = Object.assign(this.listData[this.originNum - 1]);
                    this.listData.push(a), this.listData.unshift(h)
                }
                this.activeIndex = 1
            }
        },
        init: function(a) {
            $.extend(this, a), this.slideMainDom.bind("click", this.handleImgItemClick.bind(this)), this.closeDom.bind("click", this.handleImgClose.bind(this)), this.showIndicator && !this.isSingle && this.slideIndicatorDom.show(), this.isSingle || (this.width = this.getSlideMainWidth(), this.bindEvents(), this.setAutoPlayInterval(), this.setSlideMainPositionX(-this.activeIndex * this.width), this.changeIndicatorActiveIndex())
        },
        bindEvents: function() {
            this.mediaQueryList = window.matchMedia("(orientation: portrait)"), this.mediaQueryList.addListener(this.mediaQueryOrientationListener.bind(this)), this.slideMainDom.bind("touchstart", this.touchStartHandler.bind(this)), this.slideMainDom.bind("touchmove", this.touchMoveHandler.bind(this)), this.slideMainDom.bind("touchend", this.touchEndHandler.bind(this))
        },
        touchStartHandler: function(e) {
            this.slideProtect || (this.clearAutoPlayInterval(), 1 === e.changedTouches.length && (this.fixLoopTimeout && (clearTimeout(this.fixLoopTimeout), this.fixLoopTimeout = null), this.startX = e.touches[0].clientX, this.startY = e.touches[0].clientY))
        },
        touchMoveHandler: function(e) {
            if (this.slideProtect) return e.cancelable && e.preventDefault(), e.stopPropagation(), !0;
            if (1 !== e.changedTouches.length) return !0;
            this.moveX = e.touches[0].clientX, this.moveY = e.touches[0].clientY;
            var a = this.moveX - this.startX,
                h = this.moveY - this.startY;
            if (this.noLoopTouchJudgement(a)) return !0;
            var v = this.getDirection(a, h);
            return (v === c.LEFT || v === c.RIGHT) && (e.cancelable && e.preventDefault(), e.stopPropagation(), this.removeTransition(), this.setSlideMainPositionX(a - this.activeIndex * this.width)), !0
        },
        touchEndHandler: function(e) {
            if (!this.slideProtect && (this.setAutoPlayInterval(), this.addTransition(), 1 === e.changedTouches.length)) {
                this.endX = e.changedTouches[0].clientX, this.endY = e.changedTouches[0].clientY;
                var a = this.endX - this.startX;
                if (this.noLoopTouchJudgement(a)) return !0;
                Math.abs(a) > this.minChangeWidth && (e.preventDefault(), e.stopPropagation(), this.originIndicatorActiveIndex = this.indicatorActiveIndex, a > 0 ? (this.modifyActiveIndex(-1), this.indicatorActiveIndex = 0 === this.activeIndex && this.loop ? this.originNum + this.activeIndex : this.loop ? this.activeIndex : this.activeIndex + 1) : (this.modifyActiveIndex(1), this.indicatorActiveIndex = this.activeIndex === this.originNum + 1 && this.loop ? this.activeIndex - this.originNum : this.loop ? this.activeIndex : this.activeIndex + 1), this.emitChange(!0)), this.slideProtect = !0, this.slideProtectTimeout && (clearTimeout(this.slideProtectTimeout), this.slideProtectTimeout = null);
                var h = this;
                this.slideProtectTimeout = setTimeout(function() {
                    h.slideProtect = !1
                }, this.waitTime), this.setSlideMainPositionX(-this.activeIndex * this.width)
            }
        },
        setAutoPlayInterval: function() {
            if (this.autoplay && this.loop) {
                this.clearAutoPlayInterval();
                var a = this;
                this.autoPlayInterval = setInterval(function() {
                    a.modifyActiveIndex(1), a.originIndicatorActiveIndex = a.indicatorActiveIndex, a.indicatorActiveIndex = a.activeIndex === a.originNum + 1 ? a.activeIndex - a.originNum : a.activeIndex, a.addTransition(), a.setSlideMainPositionX(-a.activeIndex * a.width), a.emitChange()
                }, this.delay)
            }
        },
        clearAutoPlayInterval: function() {
            this.autoPlayInterval && (clearInterval(this.autoPlayInterval), this.autoPlayInterval = null)
        },
        setSlideMainPositionX: function(a) {
            this.slideMainDom.css("transform", "translateX(" + a + "px) scale(1)")
        },
        changeIndicatorActiveIndex: function() {
            var a = this.slideIndicatorDom.children();
            $(a[this.originIndicatorActiveIndex - 1]).css("background-color", this.indicatorDefaultColor), $(a[this.indicatorActiveIndex - 1]).css("background-color", this.indicatorActiveColor)
        },
        modifyActiveIndex: function(a) {
            this.activeIndex = this.activeIndex + a, this.loop && this.fixLoop()
        },
        removeTransition: function() {
            this.slideMainDom.css("transition", "")
        },
        addTransition: function(a) {
            this.slideMainDom.css("transition", a || this.transition)
        },
        emitChange: function(a) {
            this.changeIndicatorActiveIndex();
            var h = this.activeIndex - 1;
            0 > h ? h = this.originNum + h : h >= this.originNum && (h = this.originNum - h), this.onChange(h, a)
        },
        destroy: function() {
            this.isSingle || (this.clearAutoPlayInterval(), this.mediaQueryList.removeListener(this.mediaQueryOrientationListener))
        },
        mediaQueryOrientationListener: function() {
            var a = this;
            setTimeout(function() {
                a.addTransition(), a.width = a.getSlideMainWidth(), a.setSlideMainPositionX(-a.activeIndex * a.width)
            }, 200)
        },
        getSlideMainWidth: function() {
            return this.slideMainDom.width()
        },
        noLoopTouchJudgement: function(a) {
            if (!this.loop) {
                if (0 > a && this.activeIndex + 1 === this.originNum) return !0;
                if (a > 0 && 0 === this.activeIndex) return !0
            }
            return !1
        },
        getDirection: function(a, h) {
            var v = 0;
            if (Math.abs(a) < 2 && Math.abs(h) < 2) return v;
            var I = this.getAngle(a, h);
            return I >= -135 && -45 >= I ? v = c.TOP : I > 45 && 135 > I ? v = c.BOTTOM : I >= 135 && 180 >= I || I >= -180 && -135 > I ? v = c.LEFT : I >= -45 && 45 >= I && (v = c.RIGHT), v
        },
        getAngle: function(a, h) {
            return 180 * Math.atan2(h, a) / Math.PI
        },
        fixLoop: function() {
            var a = this;
            this.fixLoopTimeout = setTimeout(function() {
                a.removeTransition(), 0 === a.activeIndex ? a.activeIndex = a.originNum : a.activeIndex === a.originNum + 1 && (a.activeIndex = a.activeIndex - a.originNum), a.setSlideMainPositionX(-a.activeIndex * a.width)
            }, this.waitTime)
        },
        handleImgItemClick: function(e) {
            var a = this.slideMainDom.children(),
                h = a.indexOf(e.target);
            if (-1 >= h) {
                var c = $(e.target).parents();
                for (var i in c)
                    if (a.indexOf(c[i]) > -1) {
                        h = a.indexOf(c[i]);
                        break
                    }
            }
            var v;
            h > -1 && (v = this.loop && this.originNum > 1 ? --h : h), this.onClickItem(v, this.listData[h], e)
        },
        handleImgClose: function(e) {
            e.preventDefault(), e.stopPropagation(), this.destroy(), this.onClickClose(e)
        }
    }, a
});