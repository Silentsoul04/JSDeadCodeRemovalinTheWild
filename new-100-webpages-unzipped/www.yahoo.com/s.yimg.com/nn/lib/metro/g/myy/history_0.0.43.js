"use strict";
var Y = window.Y || {};
var EVENT_POPSTATE = "popstate";

function isUndefined(a) {
    return a === undefined;
}
Y.History = function(a) {
    this.win = (a && a.win) || window;
    this._hasPushState = !!(this.win && this.win.history && this.win.history.pushState);
};
Y.History.prototype = {
    on: function(a) {
        if (this._hasPushState) {
            this.win.addEventListener(EVENT_POPSTATE, a);
        }
    },
    off: function(a) {
        if (this._hasPushState) {
            this.win.removeEventListener(EVENT_POPSTATE, a);
        }
    },
    getState: function() {
        return (this.win.history && this.win.history.state) || null;
    },
    getUrl: function() {
        var d = this.getState();
        var a = d && d.origUrl;
        var b = this.win.location;
        if (a) {
            var c = b.protocol + "//" + b.host;
            if (a.indexOf(c) === 0) {
                a = a.substring(c.length) || "/";
            }
            return a;
        }
        return b.pathname + b.search;
    },
    pushState: function(d, f, c) {
        var e = this.win;
        if (this._hasPushState) {
            f = isUndefined(f) ? e.document.title : f;
            c = isUndefined(c) ? e.location.href : c;
            var a = Object.assign({
                origUrl: c,
                referrerUrl: e.location.href
            }, d);
            try {
                e.history.pushState(a, f, c);
            } catch (b) {
                e.location.href = c;
            }
            this.setTitle(f);
        } else {
            if (c) {
                e.location.href = c;
            }
        }
    },
    replaceState: function(d, f, c) {
        var e = this.win;
        if (this._hasPushState) {
            f = isUndefined(f) ? e.document.title : f;
            c = isUndefined(c) ? e.location.href : c;
            var a = Object.assign({
                origUrl: c
            }, d);
            try {
                e.history.replaceState(a, f, c);
            } catch (b) {
                e.location.replace(c);
            }
            this.setTitle(f);
        } else {
            if (c) {
                e.location.replace(c);
            }
        }
    },
    setTitle: function(a) {
        if (a && a !== this.win.document.title) {
            this.win.document.title = a;
        }
    }
}; /* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */