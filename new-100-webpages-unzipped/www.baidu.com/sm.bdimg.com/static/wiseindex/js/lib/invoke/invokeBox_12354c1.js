define(function() {
    function a() {
        var a = $.Deferred(),
            c = new Date;
        if (window.OpenBox) return a.resolve(), a.promise();
        var h = "" + c.getFullYear() + (c.getMonth() + 1) + c.getDate(),
            y = document.createElement("script");
        y.src = "//s.bdstatic.com/common/openjs/openBox.js?_v=" + h, y.async = !0, y.onload = y.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState ? a.reject() : (y.onload = y.onreadystatechange = null, y = null, a.resolve())
        }, y.onerror = function() {
            y.onerror = null, y = null, a.reject()
        };
        var v = document.getElementsByTagName("head")[0];
        return v.appendChild(y), a.promise()
    }

    function c(a) {
        this.openBox = null, this.status = "", this.readyCallbacks = [], this.opt = {}, this.opt = $.extend(!0, this.opt, a), this.init()
    }
    return c.prototype = {
        constructor: c,
        init: function() {
            var c = this,
                h = c.opt;
            $.when(a()).then(function() {
                c.openBox = window.OpenBox(h), c.status = "ready", c.doready()
            }, function() {})
        },
        open: function(a) {
            if (a) {
                var c = navigator.userAgent;
                /iP(ad|hone|od)/.test(c) && /MQQBrowser\//i.test(c) && (this.opt.iosForceScheme = !0), this.opt = $.extend(!0, this.opt, a), this.openBox && this.openBox.open(this.opt)
            } else this.openBox && this.openBox.open()
        },
        doready: function() {
            var a = this.readyCallbacks.length;
            if (a) {
                for (var i = 0; a > i; i++) this.readyCallbacks[i].call(this);
                this.readyCallbacks = []
            }
        },
        ready: function(a) {
            var c = this;
            "function" == typeof a && ("ready" === c.status ? a.call(this) : c.readyCallbacks.push(a))
        }
    }, c
});