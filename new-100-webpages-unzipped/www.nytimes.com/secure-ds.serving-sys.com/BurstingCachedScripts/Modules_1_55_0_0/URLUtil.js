EBG = window.EBG || {};
if (EBG.declareNamespace) {
    EBG.declareNamespace("URLUtil");
}
EBG.URLUtil = function(reportCallback, options) {
    this._maximumUrlLength = options ? options.maximumUrlLength : null;
    this._maximumAorgUrls = options ? options.maximumAorgUrls : null;
    this.TOP_WINDOW = EBG.URLUtil.getTopAccessibleWindow(false);
    if (reportCallback) {
        reportCallback({
            referrer: this.getReferrerUrl(),
            top: this.getTopUrl(),
            aorg: this.getAncestorOriginsUrls(this._maximumAorgUrls)
        });
    }
};
EBG.URLUtil.prototype = {
    capUrl: function(url) {
        if (!url || !this._maximumUrlLength) {
            return url;
        }
        return url.substring(0, this._maximumUrlLength);
    },
    getReferrerUrl: function() {
        return this.capUrl(this.TOP_WINDOW.document.referrer);
    },
    getTopUrl: function() {
        return this.capUrl(this.TOP_WINDOW.location.href);
    },
    getAncestorOriginsUrls: function(maximumUrls) {
        var aorg = [];
        if (window && window.location && window.location.ancestorOrigins && typeof window.URL == "function") {
            var a = window.location.ancestorOrigins;
            if (a.length > 0) {
                var len = maximumUrls ? Math.min(maximumUrls, a.length) : a.length;
                for (var i = 0; i < len; i++) {
                    if (location.ancestorOrigins[i]) {
                        aorg.push(this.capUrl(location.ancestorOrigins[i]));
                    }
                }
            }
        }
        return aorg;
    }
};
EBG.URLUtil.getTopAccessibleWindow = function(contiguous) {
    contiguous = typeof contiguous == 'boolean' ? contiguous : true;
    var win = window;
    var doIfAccessible = function() {
        win = this;
    };
    EBG.Adaptors.StdWebAdaptor._walkUpIframes(doIfAccessible, null, window, !contiguous);
    return win;
};
EBG.URLUtil._walkUpIframes = function(doIfAccessible, doIfNotAccessible, win, iterateUnfriendly) {
    var startWin = win || window,
        startOrigin = startWin.location.origin || (startWin.location.protocol + "/" + "/" + startWin.location.host),
        currWin = startWin,
        isFriendly = false,
        parentOrigin = "";
    iterateUnfriendly = !!iterateUnfriendly;
    try {
        if (startWin.location.ancestorOrigins) {
            doIfAccessible && doIfAccessible.call(currWin);
            for (var i = 0; i < startWin.location.ancestorOrigins.length; i++) {
                if (i == 0 && startOrigin == "null") {
                    startOrigin = startWin.location.ancestorOrigins[0];
                }
                currWin = currWin.parent;
                isFriendly = false;
                if (startWin.location.ancestorOrigins[i] == startOrigin) {
                    try {
                        parentOrigin = currWin.location.origin;
                        isFriendly = true;
                    } catch (e) {
                        isFriendly = false;
                    }
                }
                if (isFriendly) {
                    doIfAccessible && doIfAccessible.call(currWin);
                } else {
                    try {
                        doIfNotAccessible && doIfNotAccessible.call(currWin);
                    } catch (e) {}
                    if (!iterateUnfriendly) {
                        break;
                    }
                }
            }
        } else {
            doIfAccessible && doIfAccessible.call(currWin);
            while (currWin !== currWin.parent) {
                currWin = currWin.parent;
                parentOrigin = null;
                try {
                    parentOrigin = currWin.location.origin || (currWin.location.protocol + "/" + "/" + currWin.location.host);
                    if (startOrigin == "null" || startOrigin == ("about:/" + "/")) {
                        startOrigin = parentOrigin;
                    }
                } catch (e) {}
                if (parentOrigin === startOrigin) {
                    doIfAccessible && doIfAccessible.call(currWin);
                } else {
                    try {
                        doIfNotAccessible && doIfNotAccessible.call(currWin);
                    } catch (e) {}
                    if (!iterateUnfriendly) {
                        break;
                    }
                }
            }
        }
    } catch (e) {}
};
if (EBG.declareClass) {
    EBG.declareClass(EBG.URLUtil, null);
}