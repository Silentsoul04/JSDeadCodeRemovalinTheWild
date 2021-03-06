! function(e) {
    function t(e, t) {
        return l.call(e) === t
    }

    function r(t, r) {
        var n, i = t.split("."),
            s = i.length,
            u = e,
            o = 0;
        for (o; o < s; o++) {
            if (n = i[o], !u[n]) {
                if (!r) return null;
                u[n] = o + 1 === s ? r : {}
            }
            u = u[n]
        }
        return u
    }

    function n() {
        var t = e.document.querySelectorAll(_);
        m.i18n_locale(), Array.prototype.slice.call(t).forEach(function(e) {
            var t = JSON.parse(e.content);
            Object.keys(t).forEach(function(e) {
                r(u + e, t[e])
            })
        })
    }
    var i = "slideshare_object",
        s = i + "._modules.",
        u = i + "._i18n.",
        o = !1,
        a = "en",
        c = /[^a-zA-Z\d\-_]/g,
        l = Object.prototype.toString,
        f = "[object String]",
        p = "[object Number]",
        d = "[object Array]",
        h = "[object Object]",
        _ = 'meta[name="ss-i18n-translations"]',
        m = {},
        g = {
            en: "en_US",
            fr: "fr_FR",
            es: "es_ES",
            pt: "pt_BR",
            de: "de_DE"
        };
    m.i18n_locale = function() {
        if (!o) {
            var e = document.documentElement.lang || a;
            o = g[e] || g[a]
        }
        return o
    }, m.isString = function(e) {
        return t(e, f)
    }, m.isNumber = function(e) {
        return t(e, p)
    }, m.isArray = function(e) {
        return t(e, d)
    }, m.isPlainObject = function(e) {
        return t(e, h)
    }, m.addClass = function(e, t) {
        return (e = e && 1 === e.nodeType ? e : document.querySelector(e)) ? (e.className ? new RegExp("\\b" + t + "\\b").test(e.className) || (e.className += " " + t) : e.className = t, e) : null
    }, m.sanitizeForCSS = function(e) {
        return e.replace(c, "-")
    }, m.isUserAuthenticated = function() {
        var t = e[i].user;
        return "non-member" !== t.member_type && t.loggedin !== !1 && "guest" !== t.login
    }, m.i18n = function(e, t) {
        if (r(u) || n(), e) {
            var i = r(u + e);
            if (i && t && window.xmessage) {
                var s = window.xmessage.fromString(i, o);
                Array.isArray(t) || (t = [t]), i = s(t)
            }
            return i
        }
        return r(u.slice(0, -1))
    }, m.exports = function(e, t) {
        r(s + e, t)
    }, m.imports = function(e) {
        return r(s + e)
    }, r(i + ".utils", m)
}(window),
function(e) {
    function t(e) {
        this._groups = this._validateGroups(e)
    }
    var r = e.slideshare_object.utils;
    t.prototype = {
        isValid: function() {
            return this._groups.length > 0
        },
        containsUser: function() {
            return this._groups.some(function(e) {
                var t = this._getValidationMethod(e);
                return t && t.call(this)
            }, this)
        },
        _validateGroups: function(e) {
            return e = r.isArray(e) ? e : [e], e.filter(function(e) {
                return t.GROUPS.indexOf(e) !== -1
            })
        },
        _getValidationMethod: function(e) {
            return this["_userIs" + e.charAt(0).toUpperCase() + e.slice(1)]
        },
        _getUser: function() {
            return e.slideshare_object.user
        },
        _userIsSuperuser: function() {
            var e = this._getUser();
            return e && e.su
        },
        _userIsCompany: function() {
            var e = this._getUser();
            return e && e.li
        }
    }, t.GROUPS = ["superuser", "company"], r.exports("Whitelist", t)
}(window),
function(e, t) {
    function r() {
        var e = t[r.LS_NAMESPACE] && JSON.parse(t[r.LS_NAMESPACE]);
        this._experiments = e || {}
    }
    var n = e.slideshare_object.utils,
        i = n.imports("Whitelist");
    r.prototype = {
        is: function(e, t) {
            return this.getBucket(e) === t
        },
        getExperiment: function(e) {
            return this._experiments[e]
        },
        getBucket: function(e) {
            var t = this.getExperiment(e);
            return t && t.bucket
        },
        isOverride: function(e) {
            var t = this.getExperiment(e);
            return t && t.override
        },
        deleteExperiment: function(e) {
            return this.isOverride(e) ? null : (delete this._experiments[e], this._save())
        },
        addClass: function(e, t) {
            var r = this.getBucket(t);
            return r && n.addClass(e, "exp--" + n.sanitizeForCSS(t) + "--" + n.sanitizeForCSS(r)), this
        },
        register: function(e, t, r) {
            var n = new i(r),
                s = this.getBucket(e);
            if (n.isValid()) {
                if (n.containsUser()) {
                    if (!s) return this._save(e, this._assign(t))
                } else if (s) return this.deleteExperiment(e)
            } else if (!s) return this._save(e, this._assign(t));
            return s
        },
        override: function(e, t) {
            return this._save(e, this._assign(t), !0)
        },
        ga: function(e, t, r, n, i, s) {
            var u = this.getBucket(e);
            return u && _gaq.push(["_trackEvent", t, r, u + "_" + n, i, !!s]), null
        },
        _assign: function(e) {
            return n.isNumber(e) && (e = [e]), n.isArray(e) ? this._assignFromArray(e) : n.isPlainObject(e) ? this._assignFromObject(e) : n.isString(e) ? e : null
        },
        _assignFromArray: function(e, t) {
            var n, i, s = 100,
                u = Math.random();
            for (t = t || r.BUCKETS, e[e.length - 1] !== s && e.push(s), n = 0, i = e.length; n < i; n++)
                if (u <= e[n] / s) return t[n] || r.BUCKETS[n];
            return null
        },
        _assignFromObject: function(e) {
            var t, r = [],
                n = [];
            for (t in e) r.push(t), n.push(e[t]);
            return this._assignFromArray(n, r)
        },
        _save: function(e, n, i) {
            var s = this._experiments;
            return n = n || null, e && (s[e] = {
                bucket: n
            }, i && (s[e].override = !0)), t[r.LS_NAMESPACE] = JSON.stringify(this._experiments), n
        }
    }, r.BUCKETS = "a b c d e f".split(" "), r.LS_NAMESPACE = "slideshare.experiments", n.exports("Experiments", r)
}(window, window.localStorage || {}),
function(e) {
    var t = e.slideshare_object.utils.imports("Experiments"),
        r = new t;
    r.deleteExperiment("slideview-clip-button"), r.deleteExperiment("slideview-clip-button-exp-2"), r.deleteExperiment("slideview-clip-button-exp-3")
}(window),
function(e) {
    var t = e.slideshare_object.utils.imports("Experiments"),
        r = new t,
        n = "slideview-clickgen-cta",
        i = "slideview-clickgen-cta-2";
    r.deleteExperiment(n), r.register(i, {
        b: 100
    })
}(window);