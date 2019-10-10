/* release date : 2013-11-05 */
nhn = window.nhn || {}, nhn.mobile = nhn.mobile || {}, nhn.mobile.RemoteFrameStorage = function(a) {
    a || (a = {}), this._oOption = a, this._htHandler = [], this._oStorage = window.localStorage, this._oReceiver = new nhn.mobile.FrameMessageReceiver(this._oOption.receiverOption)
}, nhn.mobile.RemoteFrameStorage.prototype.setItem = function(a, b) {
    this._oStorage.setItem(a, b), this.fireEvent("onAddItem", {
        itemKey: a
    })
}, nhn.mobile.RemoteFrameStorage.prototype.setItems = function(a) {
    for (var b in a) this._oStorage.setItem(b, a[b])
}, nhn.mobile.RemoteFrameStorage.prototype.getItem = function(a) {
    var b = this._oStorage.getItem(a);
    return this.fireEvent("onReadItem", {
        itemValue: b,
        itemKey: a
    }), b
}, nhn.mobile.RemoteFrameStorage.prototype.getAllItems = function() {
    var a = this._oStorage.length,
        b = {},
        c = null;
    for (var d = 0; d < a; d++) c = this._oStorage.key(d), b[c] = this._oStorage.getItem(c);
    return this.fireEvent("onReadAllItem", {
        item: b
    }), b
}, nhn.mobile.RemoteFrameStorage.prototype.removeItem = function(a) {
    this._oStorage.removeItem(a), this.fireEvent("onRemoveItem", {
        itemKey: a
    })
}, nhn.mobile.RemoteFrameStorage.prototype.removeItem = function(a) {
    this._oStorage.removeItem(a), this.fireEvent("onRemoveItem", {
        itemKey: a
    })
}, nhn.mobile.RemoteFrameStorage.prototype.clearStorage = function() {
    this._oStorage.clear(), this.fireEvent("onClearStorage")
}, nhn.mobile.RemoteFrameStorage.prototype.getLength = function() {
    return this._oStorage.length
}, nhn.mobile.RemoteFrameStorage.prototype._isSupportsLocalStorage = function() {
    try {
        return "localStorage" in window && window.localStorage !== null
    } catch (a) {
        return !1
    }
}, nhn.mobile.RemoteFrameStorage.prototype.reloadStorage = function() {
    this._oStorage = window.localStorage
}, nhn.mobile.RemoteFrameStorage.prototype.load = function() {
    var a = this,
        b = null;
    Function.prototype.bind ? b = Function.prototype.bind.apply(this._responseStorageData, [this]) : b = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return a._responseStorageData.apply(a, b)
    }, this._oReceiver.start("sync", b)
}, nhn.mobile.RemoteFrameStorage.prototype._responseStorageData = function(a) {
    var b = a.reqData,
        c = b.action ? b.action : "none";
    return {
        reqId: a.reqId,
        resData: this._excuteAction(c, b)
    }
}, nhn.mobile.RemoteFrameStorage.prototype._excuteAction = function(a, b) {
    var c = {};
    try {
        switch (a) {
            case "GET_ITEM":
                c.value = this.getItem(b.key), c.key = b.key;
                break;
            case "SET_ITEM":
                this.setItem(b.key, b.value), c.key = b.key;
                break;
            case "REMOVE_ITEM":
                this.removeItem(b.key), c.key = b.key;
                break;
            case "CLEAR_STORAGE":
                this.clearStorage();
                break;
            default:
        }
        c.success = !0
    } catch (d) {
        c.success = !1
    }
    return c
}, nhn.mobile.RemoteFrameStorage.prototype.destroy = function() {
    this._oStorage = null, this._oReceiver.destroy()
}, nhn.mobile.RemoteFrameStorage.prototype.attach = function(a, b) {
    if (arguments.length == 1) {
        var c = arguments[0];
        for (a in c) this.attach(a, c[a]);
        return this
    }
    var d = this._htHandler[a];
    return typeof d == "undefined" && (d = this._htHandler[a] = []), d.push(b), this
}, nhn.mobile.RemoteFrameStorage.prototype.fireEvent = function(a, b) {
    b = b || {};
    var c = this["on" + a],
        d = this._htHandler[a] || [],
        e = typeof c == "function",
        f = d.length > 0;
    if (!e && !f) return !0;
    d = d.concat(), b.sType = a, typeof b._aExtend == "undefined" && (b._aExtend = [], b.stop = function() {
        b._aExtend.length > 0 && (b._aExtend[b._aExtend.length - 1].bCanceled = !0)
    }), b._aExtend.push({
        sType: a,
        bCanceled: !1
    });
    var g = [b],
        h, i;
    for (h = 2, i = arguments.length; h < i; h++) g.push(arguments[h]);
    e && c.apply(this, g);
    if (f) {
        var j;
        for (h = 0; h < d.length; h++) j = d[h], j.apply(this, g)
    }
    return !b._aExtend.pop().bCanceled
}, nhn.mobile.FrameMessageReceiver = function(a) {
    if (!window.postMessage) throw new Error("Unsupported browser.");
    this._bAsync = !1, this._wfnEvent = null, this._bCheckDomain = a.bCheckDomain || !1, this._aWhiteServerDomains = a.aWhiteDomainList || []
}, nhn.mobile.FrameMessageReceiver.prototype._attachEvent = function() {
    var a = null;
    if (Function.prototype.bind) a = Function.prototype.bind.apply(this._onMessage, [this]);
    else {
        var b = this;
        a = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return b._onMessage.apply(b, a)
        }
    }
    window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent ? window.attachEvent("onMessage", a) : window.onMessage = a
}, nhn.mobile.FrameMessageReceiver.prototype.start = function(a, b) {
    this._fCallback = b, this._bAsync = a && a === "async" ? !0 : !1, this._attachEvent()
}, nhn.mobile.FrameMessageReceiver.prototype._isVerifyDomain = function(a) {
    a = a.replace(/^https?:\/\/|:\d{1,4}$/g, "").toLowerCase();
    var b = this._aWhiteServerDomains,
        c = b.length,
        d = !1;
    for (var e = 0; e < c; e++)
        if (b[e] == a) {
            d = !0;
            break
        }
    return d
}, nhn.mobile.FrameMessageReceiver.prototype._onMessage = function(a) {
    if (this._bCheckDomain && !this._isVerifyDomain(a.origin)) return !1;
    var b = JSON.parse(a.data);
    if (this._bAsync) b.host = a.source, b.hostDomain = a.origin, this._fCallback(b, this);
    else {
        var c = this._fCallback(b);
        this.sendMessage(a.source, a.origin, c)
    }
}, nhn.mobile.FrameMessageReceiver.prototype.sendMessage = function(a, b, c) {
    if (!c || !c.reqId || !c.resData) throw new Error("Not Exist Protocol Data.");
    a.postMessage(JSON.stringify(c), b)
}, nhn.mobile.FrameMessageReceiver.prototype.destroy = function() {
    this._aWhiteServerDomains = null, this._fnCallback = null, this._wfnEvent = null
}