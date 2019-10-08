define(function(require) {
    function a(a, h) {
        this.invokeData = a, this.options = h, this.isCarousel = !1, this.init()
    }
    var h = require("wiseindex/lib/ivk/common/ivkBox"),
        c = h.getLogData;
    return a.prototype = {
        constructor: a,
        init: function() {
            if (this.invokeData.carouselArr) {
                this.isCarousel = !0;
                var a = this.invokeData.carouselArr;
                this.carouselArr = [];
                var h = this;
                a.forEach(function(a) {
                    h.carouselArr.push({
                        invokeData: a,
                        logData: $.extend(c(a), h.options.loginfo)
                    })
                })
            } else this.logData = $.extend(c(this.invokeData), this.options.loginfo)
        },
        getInvokeData: function(a) {
            var h = this.getData(a).invokeData,
                c = this.getData(a).logData;
            return $.extend({
                union: c.from,
                browserid: c.browserid,
                qid: c.qid
            }, h)
        },
        getLogData: function(a) {
            return this.getData(a).logData
        },
        getData: function(a) {
            return this.isCarousel && this.carouselArr && this.carouselArr.length ? this.carouselArr[a || 0] : this
        }
    }, a
});