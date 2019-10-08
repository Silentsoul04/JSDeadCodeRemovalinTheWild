define(function() {
    function a(a, h, c, y) {
        this.banner = a, this.invokeData = h, this.pos = c, this.callback = y, this.hideTypeList = [], this.observer, this.init()
    }
    var h = 800,
        c = {
            START: "start",
            ASYNC: "async"
        },
        y = 3;
    return a.prototype = {
        constructor: a,
        init: function() {
            var a = this.syncAnalysis();
            a && this.asyncAnalysi(), this.stopMonitor()
        },
        syncAnalysis: function() {
            var a = !0;
            return this.isRemoved() ? (this.addHideType(c.START + "_remove"), a = !1) : this.isHided() && (this.analysisBanner(this.banner, c.START), a = !1), a
        },
        analysisBanner: function(a, h, c) {
            c = c || y;
            var v = this,
                b = {
                    display: "none",
                    height: "0px",
                    visibility: "hidden",
                    width: "0px",
                    opacity: "0"
                };
            for (var i in b) a.css(i) === b[i] && v.addHideType(h + "_" + (y - c) + "_" + i);
            --c && a.children().forEach(function(a) {
                v.analysisBanner($(a), h, c)
            })
        },
        asyncAnalysi: function() {
            var a = this,
                h = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                y = !!h;
            if (y) {
                this.observer = new h(function(h) {
                    $.isArray(h) && h.forEach(function(h) {
                        "attributes" === h.type && "style" === h.attributeName ? a.analysisBanner($(h.target), c.ASYNC, 1) : "childList" === h.type && h.removedNodes.length && a.addHideType(c.ASYNC + "_remove_child")
                    })
                });
                var v = {
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !0
                };
                this.observer.observe(this.banner[0], v)
            }
        },
        stopMonitor: function() {
            var a = this;
            setTimeout(function() {
                a.observer && a.observer.disconnect(), 1 === +a.invokeData.rule[a.pos] && a.isRemoved() && a.addHideType(c.ASYNC + "_remove"), a.callback(a.getHideType())
            }, h)
        },
        addHideType: function(a) {
            this.hideTypeList.push(a)
        },
        getHideType: function() {
            return this.hideTypeList
        },
        isRemoved: function() {
            return !this.banner.parent().length
        },
        isHided: function() {
            return this.banner.offset().height < 50 || this.banner.offset().width < 50
        }
    }, a
});