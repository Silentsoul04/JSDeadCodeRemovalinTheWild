
            Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
                var s, i;
                if (null == this) throw new TypeError(" this is null or not defined");
                var a = Object(this),
                    n = a.length >>> 0;
                if ("function" != typeof t) throw new TypeError(t + " is not a function");
                for (1 < arguments.length && (s = e), i = 0; i < n;) {
                    var o;
                    i in a && (o = a[i], t.call(s, o, i, a)), i++
                }
            }), Array.prototype.filter || (Array.prototype.filter = function(t) {
                "use strict";
                if (null == this) throw new TypeError;
                var e = Object(this),
                    s = e.length >>> 0;
                if ("function" != typeof t) throw new TypeError;
                for (var i = [], a = 2 <= arguments.length ? arguments[1] : void 0, n = 0; n < s; n++)
                    if (n in e) {
                        var o = e[n];
                        t.call(a, o, n, e) && i.push(o)
                    }
                return i
            }), Array.prototype.map || (Array.prototype.map = function(t, e) {
                var s, i, a;
                if (null == this) throw new TypeError(" this is null or not defined");
                var n = Object(this),
                    o = n.length >>> 0;
                if ("function" != typeof t) throw new TypeError(t + " is not a function");
                for (1 < arguments.length && (s = e), i = new Array(o), a = 0; a < o;) {
                    var r, c;
                    a in n && (r = n[a], c = t.call(s, r, a, n), i[a] = c), a++
                }
                return i
            }), String.prototype.includes || (String.prototype.includes = function(t, e) {
                "use strict";
                return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
            });
            var assistJS = function(r, h) {
                var u = function() {
                    if ("Microsoft Internet Explorer" !== r.navigator.appName) return !1;
                    var t = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(r.navigator.userAgent);
                    return t && t[1] && parseFloat(t[1])
                }();

                function t(t, e) {
                    t.prototype = Object.create ? Object.create(e.prototype) : function(t) {
                        function e() {}
                        return e.prototype = t, new e
                    }(e.prototype), t.prototype.constructor = t
                }

                function c(t) {
                    return "function" == typeof t.trim ? t.trim() : t.replace(/^\s+|\s+$/gm, "")
                }

                function e(t) {
                    if (u && u < 9 && void 0 !== t.createTextRange) {
                        var e = t.createTextRange();
                        e.collapse(!1), e.select()
                    } else "number" == typeof t.selectionStart && (t.selectionStart = t.selectionEnd = t.value.length)
                }

                function a(t) {
                    "focus" in t && t.focus()
                }

                function o(t) {
                    return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\\\$&")
                }

                function s() {
                    this.config = {}
                }

                function i() {
                    this.itemList = [], this.selectedItem = !1
                }

                function n(t) {
                    this.saView = t, this.currentStatus = !1, this.callBackIdx = 0, this.cbTable = {}, this.triggered = !1
                }

                function l(t, e) {
                    this.saModel = t, this.saView = e
                }

                function g() {
                    this.config = {
                        searchBoxId: "yschsp",
                        clearButtonId: "sbq-clear",
                        fr2: "sa-gp-search",
                        saBase: "//search.yahoo.com/sugg/gossip/gossip-us-ura/",
                        ylcParam: {
                            _r: 2,
                            gprid: "",
                            n_rslt: 0,
                            n_sugg: 0,
                            pos: 0,
                            pqstr: "",
                            pqstrl: 0
                        },
                        gossipParam: {
                            l: 1,
                            bm: 3,
                            output: "sd1",
                            appid: "search.yahoo.com",
                            nresults: 10
                        },
                        max: 255,
                        clrLog: {},
                        boldTag: "<b>{s}</b>",
                        annotation: {},
                        cssClass: {
                            container: "sa-sbx-container",
                            trayContainer: "sa lowlight",
                            tray: "sa-tray",
                            traySub: "sa-tray sub-assist no-wrap",
                            ul: "sa-tray-list-container",
                            liHighlight: "list-item-hover",
                            li: "",
                            span: "",
                            text: "",
                            aria: "sa-aria-live-region",
                            actionContainer: "sa-fd-actn-cont",
                            relatedSearches: "related-title",
                            trendingNow: "trending-title"
                        },
                        text: {
                            relatedSearches: "Related Searches",
                            trendingNow: "Trending Now",
                            ariaShown: "new suggestions shown",
                            ariaClosed: "Suggestion box closed"
                        },
                        customEvent: !1,
                        suppressEmptyQuery: !1,
                        enableAnnotation: !1,
                        enableIpos: !0,
                        subAssist: !0,
                        subTrayDelta: 5,
                        trayPadding: 12,
                        debug: !1,
                        objectName: "SA",
                        anykey: !1,
                        clearBeaconing: !1,
                        enableYlc: !0,
                        autofocus: !1,
                        highlight: {
                            pattern: "",
                            exact: !1
                        },
                        minQueryLength: 0,
                        enableTabRender: !0
                    }
                }
                return r.YAHOO = r.YAHOO || {}, s.prototype = {
                    set: function(t, e, s) {
                        t.setAttribute(e, s)
                    },
                    get: function(t, e) {
                        return t.getAttribute(e)
                    },
                    merge: function t(e, s) {
                        for (var i in s) "object" == typeof s[i] && "object" == typeof e[i] ? t(e[i], s[i]) : e[i] = s[i]
                    },
                    extend: t,
                    buildUrl: function(t, e) {
                        var s = [];
                        for (var i in e) e.hasOwnProperty(i) && s.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                        return 0 < s.length && (t = t + (-1 === t.indexOf("?") ? "?" : "&") + s.join("&")), t
                    },
                    stopPropagation: function(t) {
                        t.returnValue = !1, t.cancelBubble = !0, t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation()
                    },
                    setFocus: function(t) {
                        e(t), a(t)
                    },
                    cursorEnd: e,
                    select: function(t, e, s) {
                        if (u && u < 9 && void 0 !== t.createTextRange) {
                            var i = t.createTextRange();
                            i.moveStart("character", e), i.moveEnd("character", s), i.select()
                        } else t.selectionStart = e, t.selectionEnd = s, a(t)
                    },
                    htmlEncode: function(t) {
                        return t.replace(/[\u00A0-\u9999<>\&]/gim, function(t) {
                            return "&#" + t.charCodeAt(0) + ";"
                        })
                    },
                    ae: function(t, e, s, i) {
                        if (i = i || !1, t.addEventListener) t.addEventListener(e, s, i);
                        else {
                            if (!t.attachEvent) return !1;
                            t.attachEvent("on" + e, s)
                        }
                    },
                    de: function(t, e, s) {
                        if (t.removeEventListener) t.removeEventListener(e, s);
                        else {
                            if (!t.detachEvent) return !1;
                            t.detachEvent("on" + e, s)
                        }
                    },
                    ts: function() {
                        return Math.round((new Date).getTime() / 1e3)
                    },
                    bold: function(t, e, s, i) {
                        var a, n = (i.pattern ? i.pattern : "") + "(&[^;\\s]*)?(%needles)";
                        return (a = i.exact ? [o(s)] : s.split(/[\s|,]+/).filter(function(t) {
                            return "" !== t
                        }).sort(function(t, e) {
                            return e.length - t.length
                        }).map(function(t) {
                            return o(t)
                        })).length ? (n = n.replace("%needles", a.join("|")), e = e.replace(new RegExp(n, "gi"), function(i) {
                            return function(t, e, s) {
                                return e && !/\s/.test(s) ? t : i.replace(/\{s\}/g, s)
                            }
                        }(t))) : e
                    },
                    debug: function(t) {
                        this.config.debug && r.console && r.console.log && r.console.log(t)
                    }
                }, t(i, s), i.prototype.init = function(t, e) {
                    var s = this;
                    if (this.saModel = e, this.config = t, this.clearButton = this.clearButton || h.getElementById(this.config.clearButtonId), this.searchbox = this.searchbox || h.getElementById(this.config.searchBoxId), !this.searchbox) return !1;
                    this.config.gossipParam.pq = this.searchbox.value;
                    for (var i = this.searchbox; i && !this.formTag;) i.tagName && "form" === i.tagName.toLowerCase() && (this.formTag = i), i = i.parentNode;
                    return !!this.formTag && (this.container = h.createElement("div"), this.container.className = this.config.cssClass.container, this.trayContainer = h.createElement("div"), this.trayContainer.className = this.config.cssClass.trayContainer, this.container.appendChild(this.trayContainer), this.searchbox.parentNode.insertBefore(this.container, this.searchbox.nextSibling), this.searchbox.setAttribute("role", "combobox"), this.searchbox.setAttribute("aria-autocomplete", "both"), this.ae(r, "load", function() {
                        s.aria = h.createElement("div"), s.aria.className = s.config.cssClass.aria, s.set(s.aria, "aria-live", "polite"), s.aria.style.position = "absolute", s.aria.style.left = "-9999px", h.body.appendChild(s.aria)
                    }), !0)
                }, i.prototype.getWidth = function(t, e) {
                    var s, i = {
                            p: t,
                            t: this.config.boldTag.replace("{s}", this.htmlEncode(t)),
                            idx: 0
                        },
                        a = h.createElement("div");
                    a.className = this.config.cssClass.container;
                    var n = h.createElement("div");
                    n.className = this.config.cssClass.trayContainer, a.appendChild(n);
                    var o = h.createElement("div");
                    o.className = this.config.cssClass.traySub, o.style.left = "-9999px", n.appendChild(o);
                    var r = h.createElement("ul");
                    r.className = this.config.cssClass.ul, o.appendChild(r);
                    var c = this.createItem(i);
                    e && ((s = h.createElement("span")).innerHTML = e, c.suggestionSpan.appendChild(s)), r.appendChild(c.li), this.searchbox.parentNode.insertBefore(a, this.searchbox.nextSibling);
                    var l = c.suggestionSpan.clientWidth + this.config.subTrayDelta;
                    return a.outerHTML = "", l
                }, i.prototype.display = function(t) {
                    var e = t.data,
                        a = t.sqpos,
                        s = t.hiddenNeedle,
                        n = this,
                        o = {};
                    this.hide(), this.selectedItem = !1, this.tray = h.createElement("div"), this.set(this.tray, "type", "normal"), this.tray.className = this.config.cssClass.tray, a && this.config.subAssist && (this.tray.className = this.config.cssClass.traySub, this.tray.style.left = this.getWidth(s) + "px"), this.ul = h.createElement("ul"), this.ul.className = this.config.cssClass.ul, this.set(this.ul, "role", "listbox"), this.tray.appendChild(this.ul), this.itemList = [], this.config.ylcParam.n_sugg = n.saModel.ylc.n_sugg, e.forEach(function(i) {
                        var t;
                        if (i.idx = n.itemList.length, 4 === i.m && n.config.text.trendingNow && !o.trending) {
                            var e = h.createElement("span");
                            e.className = n.config.cssClass.trendingNow, e.innerHTML = n.config.text.trendingNow, n.ul.appendChild(e), o.trending = !0
                        }
                        var s = n.createItem(i);
                        !a && n.config.enableAnnotation && i.m && n.config.annotation[i.m] && i.fd && (t = n.getItemAnnotation(i, s.suggestionSpan)) && s.suggestionSpan.appendChild(t), n.ul.appendChild(s.li), n.itemList.push(s.li), n.ae(s.li, "mouseenter", function(t) {
                            n.resetHighlight(), s.li.className = n.config.cssClass.li + " " + n.config.cssClass.liHighlight, n.selectedItem = i.idx
                        }), n.ae(s.li, "mouseleave", function(t) {
                            s.li.className = n.config.cssClass.li
                        }), n.ae(s.li, "click", function(t) {
                            var e = n.searchbox.value,
                                s = t.target || t.srcElement;
                            n.saModel.ylc.pos = i.idx + 1, n.saModel.ylc.pqstr = e, n.saModel.ylc.pqstrl = e.length, n.saModel.ylc.use_case = "", n.formTag.fr2 && (n.formTag.fr2.value = n.config.fr2), n.searchbox.value = i.p, s.tagName && "a" === s.tagName.toLowerCase() && (n.searchbox.value = n.get(s, "data"), n.saModel.ylc.use_case = s.innerHTML), n.hide(), n.saModel.addYlc(n.saModel.clickTarget), n.config.customEvent ? (n.saModel.addYlk(s), function(t, e, s) {
                                var i;
                                "function" == typeof r.CustomEvent ? (i = new r.CustomEvent(e, {
                                    detail: s
                                }), t.dispatchEvent(i)) : "function" == typeof h.createEvent ? ((i = h.createEvent("CustomEvent")).initCustomEvent(e, !1, !1, s), t.dispatchEvent(i)) : (h.attachEvent, document.documentElement[e] = s)
                            }(n.searchbox, "assistSelection", {
                                data: i
                            })) : n.suggestionClick(t, i)
                        })
                    }), this.aria && (this.set(this.aria, "aria-expanded", "true"), this.aria.innerHTML = "<p>" + n.itemList.length + " " + this.config.text.ariaShown + "</p>"), this.show()
                }, i.prototype.suggestionClick = function(t, e) {
                    this.formTag.submit()
                }, i.prototype.show = function() {
                    this.shown = !0, this.resetHighlight(), this.trayContainer.appendChild(this.tray)
                }, i.prototype.hide = function() {
                    this.aria && (this.set(this.aria, "aria-expanded", "false"), this.aria.innerHTML = "<p>" + this.config.text.ariaClosed + "</p>"), this.shown = !1, this.resetHighlight(), this.trayContainer.innerHTML = ""
                }, i.prototype.resetHightlight = i.prototype.resetHighlight = function() {
                    !1 !== this.selectedItem && this.itemList.length && (this.itemList[this.selectedItem].className = this.config.cssClass.li)
                }, i.prototype.tab = function() {
                    if (!this.shown || !this.itemList.length) return !1;
                    if (!1 !== this.selectedItem) this.searchbox.value = this.get(this.itemList[this.selectedItem], "data"), this.saModel.fetch();
                    else {
                        if (this.searchbox.value === this.get(this.itemList[0], "data")) return this.saModel.unset(), !1;
                        this.searchbox.value = this.get(this.itemList[0], "data"), this.saModel.fetch()
                    }
                    return !0
                }, i.prototype.moveUpDown = function(t) {
                    return !(!this.shown || !this.itemList.length) && (this.resetHighlight(), t ? !1 === this.selectedItem || this.selectedItem <= 0 ? this.selectedItem = this.itemList.length - 1 : this.selectedItem-- : !1 === this.selectedItem || this.selectedItem >= this.itemList.length - 1 ? this.selectedItem = 0 : this.selectedItem++, this.itemList[this.selectedItem].className = this.config.cssClass.li + " " + this.config.cssClass.liHighlight, this.searchbox.value = this.get(this.itemList[this.selectedItem], "data"), !0)
                }, i.prototype.createItem = function(t) {
                    var e = h.createElement("li"),
                        s = this;
                    if (e.className = this.config.cssClass.li, this.set(e, "pos", t.idx), this.set(e, "role", "option"), this.config.formatResult) {
                        var i = this.config.ylcVal;
                        i && (i = i.replace("cposV", t.idx), s.config.ylcParam && (i = i.replace("t9Val", s.config.ylcParam.n_sugg)), this.set(e, "data-ylk", i)), this.set(e, "data-position", t.idx)
                    }
                    s.set(e, "data", t.p);
                    var a = h.createElement("span");
                    a.className = s.config.cssClass.span, a.style.display = "block", e.appendChild(a);
                    var n = h.createElement("span");
                    return n.className = s.config.cssClass.text, n.innerHTML = t.t, a.appendChild(n), {
                        li: e,
                        suggestionSpan: a
                    }
                }, i.prototype.getItemAnnotation = function(t) {
                    var e, s, i, a = this.config.annotation[t.m] || {},
                        n = this.config.cssClass,
                        o = t.fd,
                        r = "",
                        c = "",
                        l = this.searchbox.clientWidth - 2 * this.config.trayPadding;
                    if (a.subtitle && o.subtitle) {
                        if (c = a.subtitle.replace("{subtitle}", this.htmlEncode(o.subtitle)), !(this.getWidth(t.p, c) < l)) return e;
                        r += c
                    }
                    if (a.actions && o.actions && o.actions.length) {
                        for (c = "", i = 0; i < o.actions.length; i++)
                            if (s = o.actions[i], c && a.actionsSeparator && (c += a.actionsSeparator), c += a.actions.replace("{text}", this.htmlEncode(s.text)).replace("{res}", this.htmlEncode(s.res)), l < this.getWidth(t.p, r + '<span class="' + n.actionContainer + '">' + c + "</span>")) {
                                c = "";
                                break
                            }
                        c && (r += '<span class="' + n.actionContainer + '">' + c + "</span>")
                    }
                    return r && ((e = h.createElement("span")).innerHTML = r), e
                }, t(n, s), n.prototype.unset = function() {
                    this.triggered = !1, this.saView.hide()
                }, n.prototype.jsonp = function(t, e) {
                    var s = {
                        command: this.saView.searchbox.value,
                        t_stmp: this.ts(),
                        callback: "YAHOO." + this.config.objectName + ".cb." + t
                    };
                    this.merge(s, this.config.gossipParam), e && this.merge(s, e);
                    var i = this.buildUrl(this.config.saBase, s),
                        a = h.getElementsByTagName("head")[0],
                        n = h.createElement("script");
                    this.set(n, "type", "text/javascript"), this.set(n, "src", i), a.appendChild(n), this.ae(n, "load", function() {
                        a.removeChild(n)
                    })
                }, n.prototype.read = function(e) {
                    var s, i = this,
                        a = [],
                        n = e.sqpos,
                        o = e.q = e.q || "",
                        r = "";
                    e && "object" == typeof e.r && 0 < e.r.length ? (i.config.subAssist && n && (o = e.q.substr(n), r = e.q.substr(0, n), e.r.forEach(function(t) {
                        i.saView.getWidth(t.k) > i.saView.searchbox.clientWidth && (n = 0, o = e.q, r = "")
                    })), e.r.forEach(function(t) {
                        s = i.config.subAssist && n ? t.k.substr(n) : t.k, a.push({
                            p: t.k,
                            t: i.bold(i.config.boldTag, i.htmlEncode(s), i.htmlEncode(o), i.config.highlight),
                            fd: t.fd,
                            m: t.m
                        })
                    }), this.ylc.n_sugg = e.r.length, this.ylc.pos = 0, this.saView.display({
                        data: a,
                        sqpos: n,
                        hiddenNeedle: r
                    })) : (this.ylc.n_sugg = 0, this.ylc.pos = 0, this.saView.hide()), e && e.l && (this.ylc.gprid = e.l.gprid)
                }, n.prototype.fetch = function() {
                    var t, e = this.saView.searchbox,
                        s = this,
                        i = null,
                        a = s.lastValue === s.saView.searchbox.value;
                    if (s.config.suppressEmptyQuery && "" == c(e.value)) return s.unset(), !0;
                    if (s.saView.shown && a) return !0;
                    if (this.config.enableIpos && !a && void 0 !== s.lastValue && ((t = this.getCursorPosition()) === e.value.length && (t = null), null !== t && (i = {
                            ipos: t
                        })), s.lastValue = s.saView.searchbox.value, this.config.minQueryLength && this.saView.searchbox.value.length < this.config.minQueryLength) return this.unset(), !1;
                    if (this.config.max && this.saView.searchbox.value.length > this.config.max) return this.unset(), !0;
                    this.triggered = !0, this.callBackIdx++;
                    var n = "sacb" + this.callBackIdx;
                    for (var o in s.cbTable) s.cbTable.hasOwnProperty(o) && (s.cbTable[o] = function() {});
                    this.cbTable[n] = function(t) {
                        s.read(t || {}), s.cbTable[n] = function() {}
                    }, this.jsonp(n, i)
                }, n.prototype.getCursorPosition = function() {
                    var t, e = this.saView.searchbox,
                        s = null;
                    return "number" == typeof e.selectionStart ? s = e.selectionStart : h.selection && (e.focus(), (t = h.selection.createRange()).moveStart("character", -h.activeElement.value.length), s = t.text.length), s
                }, n.prototype.addYlc = function(t) {
                    var e = encodeURIComponent(this.saView.searchbox.value);
                    this.ylc.query = e, this.ylc.qstrl = e.length, this.ylc.t_stmp = this.ts(), this.config.enableYlc && this.ULT ? this.saView.formTag.action = this.ULT.y64_token("ylc", t, this.ylc) : this.debug("YLC logging is disabled")
                }, n.prototype.addYlk = function(t) {
                    var e = this,
                        s = [];
                    if (["gprid", "query", "pqstr"].forEach(function(t) {
                            e.ylc[t] && s.push(t + ":" + e.ylc[t])
                        }), e.config.ylcVal = e.config.ylcVal + ";" + s.join(";"), t) {
                        var i = e.get(t, "data-ylk") + ";" + s.join(";");
                        e.set(t, "data-ylk", i)
                    }
                }, n.prototype.init = function(t) {
                    return this.config = t, this.ULT = r.YAHOO.ULT, this.ULT || (this.debug("ULT library is missing. Disabling ylc logging"), this.config.enableYlc = !1), this.ylc = {}, this.merge(this.ylc, this.config.ylcParam), this.clickTarget = this.config.clkLink ? this.config.clkLink : this.saView.formTag.action, this.submitTarget = this.saView.formTag.action, !0
                }, t(l, s), l.prototype.init = function(t) {
                    var l = this;
                    l.lastValue = null, this.config = t, this.config.autofocus && this.setFocus(this.saView.searchbox), !u || 9 <= u ? this.ae(this.saView.searchbox, "input", function(t) {
                        l.saModel.fetch()
                    }) : 8 === u && this.ae(this.saView.searchbox, "propertychange", function(t) {
                        "value" === t.propertyName && !1 === l.saView.selectedItem && l.saModel.fetch()
                    }), l.config.anykey && this.ae(h, "keydown", function(t) {
                        var e = h.activeElement;
                        if (!e.tagName || "input" !== e.tagName.toLowerCase() && "textarea" !== e.tagName.toLowerCase()) return 27 === t.keyCode && !l.saView.shown && l.saView.searchbox.value.length ? (l.select(l.saView.searchbox, 0, l.saView.searchbox.value.length), void l.stopPropagation(t)) : void(t.keyCode <= 40 || t.ctrlKey || t.metaKey || (l.saView.searchbox.value = c(l.saView.searchbox.value), "" !== l.saView.searchbox.value && (l.saView.searchbox.value += " "), l.saModel.triggered = !0, l.setFocus(l.saView.searchbox)))
                    }), this.ae(this.saView.searchbox, "keydown", function(t) {
                        switch (t.keyCode) {
                            case 40:
                                l.saView.moveUpDown(!1), l.stopPropagation(t);
                                break;
                            case 38:
                                l.saView.moveUpDown(!0), l.stopPropagation(t);
                                break;
                            case 27:
                                if (!l.saView.shown) return;
                                return l.cursorEnd(l.saView.searchbox), l.saView.searchbox.blur(), l.saModel.unset(), l.saView.resetHighlight(), l.saView.selectedItem = !1, l.stopPropagation(t), !1;
                            case 9:
                                if (l.saView.searchbox.selectionEnd == l.saView.searchbox.value.length && l.saView.searchbox.selectionStart == l.saView.searchbox.value.length) {
                                    if (!l.config.enableTabRender) return l.saModel.unset(), !1;
                                    if (l.saView.tab()) return l.stopPropagation(t), !1
                                } else l.saView.searchbox.selectionEnd = l.saView.searchbox.selectionStart = l.saView.searchbox.value.length, l.stopPropagation(t);
                                break;
                            case 39:
                                l.saView.searchbox.selectionEnd == l.saView.searchbox.value.length && l.saView.searchbox.selectionStart == l.saView.searchbox.value.length && l.saView.tab();
                                break;
                            default:
                                l.saView.resetHighlight(), l.saView.selectedItem = !1
                        }
                    });

                    function e(t) {
                        if (u && u <= 8 && h.selection) {
                            var e, s, i = l.saView.searchbox,
                                a = i.value.replace(/\r\n/g, "\n"),
                                n = h.selection.createRange(),
                                o = i.value.length,
                                r = i.createTextRange();
                            r.moveToBookmark(n.getBookmark());
                            var c = i.createTextRange();
                            c.collapse(!1), -1 < r.compareEndPoints("StartToEnd", c) ? e = s = o : (e = -r.moveStart("character", -o), e += a.slice(0, e).split("\n").length - 1, -1 < r.compareEndPoints("EndToEnd", c) ? s = o : (s = -r.moveEnd("character", -o), s += a.slice(0, s).split("\n").length - 1)), i.selectionStart = e, i.selectionEnd = s
                        }
                        l.lastValue !== l.saView.searchbox.value && !1 === l.saView.selectedItem && l.saModel.fetch()
                    }
                    this.ae(this.saView.searchbox, "focus", function(t) {
                        l.saModel.triggered || l.saModel.fetch(), u && 9 === u && !l.ie9_attached && (l.ae(h, "selectionchange", e), l.ie9_attached = !0)
                    }), this.ae(this.saView.searchbox, "blur", function(t) {
                        u && 9 === u && l.ie9_attached && (l.de(h, "selectionchange", e), l.ie9_attached = !1)
                    }), this.ae(this.saView.searchbox, "click", function(t) {
                        l.saModel.triggered || l.saModel.fetch()
                    });

                    function s(t) {
                        if (l.saView.shown) {
                            for (var e = t.target ? t.target : t.srcElement; e;) {
                                if (e === l.saView.formTag) return;
                                e = e.parentNode
                            }
                            l.config.touchOriented && l.stopPropagation(t), l.saModel.unset()
                        }
                    }
                    return "ontouchstart" in r ? (this.config.touchOriented = !0, this.ae(h.body, "touchstart", s, !0)) : this.ae(h, "click", s), this.ae(this.saView.formTag, "submit", function(t) {
                        l.saModel.addYlc(l.saModel.submitTarget)
                    }), this.saView.clearButton && this.ae(this.saView.clearButton, "click", function(t) {
                        if (l.saView.searchbox.value = "", l.saModel.triggered = !1, l.setFocus(l.saView.searchbox), l.config.enableYlc && l.config.clearBeaconing && l.saModel.ULT) {
                            var e = {
                                _r: 2,
                                actn: "clk",
                                pos: 1,
                                sec: "clearsearch",
                                slk: "clear",
                                t1: "hdr",
                                t2: "searchbox",
                                t3: "clear"
                            };
                            l.merge(e, l.config.clrLog), l.saModel.ULT.beacon_click(e)
                        }
                    }), !0
                }, t(g, s), g.prototype.saModelClass = n, g.prototype.saViewClass = i, g.prototype.saControlClass = l, g.prototype.init = function(t) {
                    return !(u && u < 8) && ("object" == typeof t && this.merge(this.config, t), this.saView = new this.saViewClass, this.saModel = new this.saModelClass(this.saView), this.saControl = new this.saControlClass(this.saModel, this.saView), this.cb = this.saModel.cbTable, this.config.customEvent && 8 === u && (h.documentElement.assistSelection = null), this.ready = this.saView.init(this.config, this.saModel) && this.saModel.init(this.config) && this.saControl.init(this.config), !!this.ready && (r.YAHOO[this.config.objectName] = this, void(r.performance && "function" == typeof r.performance.now && (this.latency = r.performance.now()))))
                }, g
            };
            "undefined" != typeof module && (module.exports = {
                assistJS: assistJS
            }), "undefined" != typeof window && (window.YAHOO = window.YAHOO || {}, window.YAHOO.SAClass = assistJS(window, document));
            var init = function(t) {
                window.YAHOO && window.YAHOO.SAClass && (window.YAHOO.SA = new window.YAHOO.SAClass, window.YAHOO.SA.init(t))
            };
            ! function() {
                var r, a, i, s = "data-submit-only",
                    o = "data-assist-only",
                    n = /\S/;

                function e(e) {
                    var t = this;
                    t.config = e || {}, t.searchForm = a.querySelector("#header-search-form"), t.searchButton = a.querySelector("#header-search-button"), t.desktopSearchBtn = a.querySelector("#header-desktop-search-button"), t.searchForm && (t.searchInput = t.searchForm.querySelector("#header-search-input")), t.searchInput && (t.restoreInitialState(), t.attachEventListeners(), t.beaconReadiness())
                }

                function t() {
                    r.YAHOO && r.YAHOO.SAClass && (r.YAHOO.SA = new r.YAHOO.SAClass, r.YAHOO.SA.init(i), r.YAHOO.SA_ADAPTER = new e(i.adapterConfig))
                }

                function c(e, t, n) {
                    r = e, a = t, i = n || {
                        "adapterConfig": {
                            "focusOnButtonClick": true,
                            "i13nForm": {
                                "elm": "kb-ent",
                                "elmt": "srch",
                                "itc": "0",
                                "rspns": "nav",
                                "sec": "srch",
                                "slk": "srchweb",
                                "t1": "a1",
                                "t2": "hd",
                                "tar": "search.yahoo.com"
                            },
                            "i13nSuggestion": {
                                "cpos": "cposV",
                                "elm": "itm",
                                "elmt": "srch",
                                "itc": "0",
                                "rspns": "nav",
                                "sec": "srch",
                                "slk": "srchast",
                                "t1": "a1",
                                "t2": "srch",
                                "t3": "tray",
                                "t9": "10",
                                "gprid": "",
                                "query": "",
                                "pqstr": "",
                                "tar": "search.yahoo.com"
                            },
                            "searchOpenClassName": "search-open"
                        },
                        "boldTag": "<b class=\"Fw(b)\">{s}</b>",
                        "clearButtonId": "header-clear-search",
                        "cssClass": {
                            "container": "header-search-assist",
                            "li": "Bdc($c-fuji-grey-d) Bdts(s) Bdtw(1px) Lh(21px) List(n) Pos(r) Ta(l)",
                            "liHighlight": "",
                            "span": "C(#000) Ff(ss) Fz(18px) Mend(40px) Pb(10px) Pend(3px) Pstart(17px) Pt(9px) Wow(bw)",
                            "tray": "Pos(a) Start(0) W(100%)",
                            "trayContainer": "",
                            "ul": "Bdc($c-fuji-grey-d) Bdbs(s) Bdbw(1px) My(8px) P(0)"
                        },
                        "customEvent": true,
                        "enableTabRender": false,
                        "formatResult": true,
                        "gossipParam": {
                            "appid": "fp"
                        },
                        "highlight": {
                            "exact": true,
                            "pattern": "^"
                        },
                        "initializeImmediately": false,
                        "minQueryLength": 1,
                        "saBase": "https://search.yahoo.com/sugg/gossip/gossip-us-ura/",
                        "searchBoxId": "header-search-input",
                        "subAssist": false,
                        "ylcVal": "cpos:cposV;elm:itm;elmt:srch;itc:0;rspns:nav;sec:srch;slk:srchast;t1:a1;t2:srch;t3:tray;t9:10;gprid:;query:;pqstr:;tar:search.yahoo.com"
                    }
                }
                e.prototype = {
                    attachEventListeners: function() {
                        var t = this;
                        t.searchInput.addEventListener("keypress", function(e) {
                            13 === e.keyCode && (e.preventDefault(), t.handleFormSubmission.call(t, e))
                        }), t.desktopSearchBtn && t.desktopSearchBtn.addEventListener("click", function(e) {
                            e.preventDefault(), t.handleFormSubmission.call(t, e)
                        }), t.searchInput.addEventListener("assistSelection", function(e) {
                            t.handleAssistSelection.call(t, e)
                        }), t.searchButton && t.config.focusOnButtonClick && t.searchButton.addEventListener("click", function(e) {
                            t.handleSearchOpen.call(t, e)
                        })
                    },
                    beaconClick: function(e, t) {
                        function n() {
                            t && t.apply(a, [].concat(Array.prototype.slice.call(arguments)))
                        }
                        var a = this,
                            i = r.YAHOO && r.YAHOO.i13n && r.YAHOO.i13n.rapidInstance || r.rapidInstance;
                        i ? i.beaconClick(e.sec, e.slk, e._p, e, null, n) : n()
                    },
                    beaconReadiness: function() {
                        var e = Date.now(),
                            t = r.performance || r.webkitPerformance || r.msPerformance || r.mozPerformance || r.Performance;
                        if (t && t.timing) {
                            var n = "/p.gif?beaconType=saready&timeFromNavigationStart=" + (e - t.timing.navigationStart) + "&timeFromDomLoading=" + (e - t.timing.domLoading);
                            r.wafer && r.wafer.utils && r.wafer.utils.fireBeacon && r.wafer.utils.fireBeacon(n)
                        }
                    },
                    getItemI13n: function(e, t) {
                        var n = {};
                        try {
                            n = JSON.parse(JSON.stringify(this.config.i13nSuggestion || {}))
                        } catch (e) {}
                        return n._p = e, n.cpos = e, n.pqstr = t.pqstr, n.query = t.query, n.gprid = t.gprid, n
                    },
                    handleAssistSelection: function(e) {
                        var t = this,
                            n = {};
                        t.toggleInputState(o, !1), t.toggleInputState(s, !0);
                        var a = (e.detail && e.detail.data && e.detail.data.idx || 0) + 1;
                        r.YAHOO && r.YAHOO.SA && r.YAHOO.SA.saModel.ylc && (n = r.YAHOO.SA.saModel.ylc), t.beaconClick(t.getItemI13n(a, n), t.submitForm)
                    },
                    handleFormSubmission: function(e) {
                        var t = this;
                        n.test(t.searchInput.value) && t.beaconClick(t.config.i13nForm, t.submitForm)
                    },
                    handleSearchOpen: function(e) {
                        var t = this;
                        t.searchInput.value = "", t.config.searchOpenClassName && a.body.className.indexOf(t.config.searchOpenClassName) < 0 && (a.body.className += " " + t.config.searchOpenClassName), t.searchInput.focus()
                    },
                    restoreInitialState: function() {
                        this.toggleInputState(o, !0), this.toggleInputState(s, !1)
                    },
                    submitForm: function() {
                        this.searchForm.submit()
                    },
                    toggleInputState: function(e, t) {
                        var n, a = this.searchForm.querySelectorAll("input[" + e + "]"),
                            i = "disabled";
                        for (n = 0; n < a.length; n++) t ? a[n].setAttribute(i, "") : a[n].removeAttribute(i)
                    }
                }, "undefined" != typeof module ? (module.exports.AssistJsAdapter = e, module.exports.defineGlobals = c, module.exports.initAssistJs = t) : (c(window, document), i.initializeImmediately ? t() : a.addEventListener("DOMContentLoaded", t))
            }();
        