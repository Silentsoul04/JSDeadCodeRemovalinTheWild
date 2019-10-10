define(function(require) {
    function a(a) {
        return new Function("return " + a)()
    }

    function h(h, c) {
        var D = a(h);
        return D(c)
    }

    function c(a, c, D, g, v) {
        this.pos = a, this.options = g, this.logFrom = g.logFrom, this.selector = g.selector, this.destorySyncDom = v, this.insertMethod, this.invokeAppData = window.sSession.invokeApps, this.bannerStr = h(c, D), this.controlData = b(this.pos, this.invokeAppData), this.bannerDom, this.shieldMonitor, this.specialHandlerArr = [], this.dataProcess, this.init()
    }
    var D = require("wiseindex/lib/ivk/common/DataProcess"),
        g = require("wiseindex/lib/ivk/common/StrategyDataProcess"),
        v = require("wiseindex/lib/ivk/common/ivkBox"),
        b = v.getControlByPos,
        k = v.sendLog,
        y = require("wiseindex/lib/ivk/common/ShieldMonitor");
    return c.prototype = {
        constructor: c,
        init: function() {
            this.strategyDataHandler(), this.dataHandler(), this.specialHandlerArr.length || (this.destorySyncDom && "function" === $.type(this.destorySyncDom) && this.destorySyncDom(), this.appendToBody())
        },
        strategyDataHandler: function() {
            var a = new g(this.bannerStr, this.controlData);
            this.bannerStr = a.bannerStr, this.insertMethod = a.insertMethod || this.insertMethod, this.selector = a.selector || this.selector, this.specialHandlerArr = a.specialHandlerArr
        },
        dataHandler: function() {
            this.dataProcess = new D(this.controlData, this.options)
        },
        appendToBody: function() {
            this.bannerDom = $(this.bannerStr)[this.insertMethod](this.selector), this.startShieldMonitor()
        },
        startShieldMonitor: function() {
            this.shieldMonitor = new y(this.bannerDom, this.invokeAppData, this.pos, this.sendShieldMonitorLog.bind(this))
        },
        invokeHandler: function(a) {
            v.invoke(this.dataProcess.getInvokeData(a))
        },
        sendLog: function(a, h) {
            var c;
            switch (a) {
                case "show":
                    c = 1;
                    break;
                case "click":
                    c = 2;
                    break;
                case "close":
                    c = 2;
                    break;
                case "slide":
                    c = 3
            }
            k({
                ct: 10,
                cst: c,
                logFrom: this.logFrom,
                logInfo: $.extend(this.dataProcess.getLogData(h), {
                    action: a
                })
            })
        },
        destroy: function() {
            this.bannerDom && (this.modifyInvokeData(this.pos, 0), this.bannerDom.remove())
        },
        modifyInvokeData: function(a, h) {
            var c = this.invokeAppData.rule.split("");
            c[a] = h, window.sSession.invokeApps.rule = c.join("")
        },
        sendShieldMonitorLog: function(a) {
            var h = this.dataProcess.getLogData(),
                c = {
                    pos: this.pos,
                    browserid: h.browserid,
                    from: h.from,
                    channel: h.channel,
                    source: h.origin,
                    show: 1
                };
            a.length && (c.show = 0, c.reason = a), k({
                ct: 10,
                cst: 1,
                logFrom: "callbaidush",
                logInfo: JSON.stringify(c)
            })
        }
    }, c
});