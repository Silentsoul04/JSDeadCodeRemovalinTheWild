if (window.Ya && Ya.Rum) {
    Ya.Rum.sendTimeMark("2700.2154");
}! function() {
    var t, e, i, s, n, o, a, r, u, h;
    window.MBEM = window.MBEM || {},
        function() {
            var t = function(t) {
                this.type = t, this.propagationStopped = !1
            };
            t.prototype.stopPropagation = function() {
                this.propagationStopped = !0
            };
            var e = function() {};
            e.prototype.on = function(t, e, i) {
                if ("object" == typeof t) {
                    for (var s in t) t.hasOwnProperty(s) && this.on(s, t[s], e);
                    return this
                }
                var n = this._handlerStorage || (this._handlerStorage = {});
                return (n[t] || (n[t] = [])).push({
                    fn: e,
                    ctx: i
                }), this
            }, e.prototype.un = function(t, e) {
                for (var i = this._handlerStorage || (this._handlerStorage = {}), s = i[t] || (i[t] = []), n = 0; n < s.length; ++n)
                    if (s[n].fn === e) return s.splice(n, 1), this;
                return this
            }, e.prototype.trigger = function(e, i) {
                for (var s, n = new t(e), o = this._handlerStorage || (this._handlerStorage = {}), a = o[e] || (o[e] = []), r = 0; r < a.length; ++r) {
                    var u = a[r];
                    if (!1 === (s = u.fn.call(u.ctx || this, n, i)) && n.stopPropagation(), n.propagationStopped) break
                }
                return s
            }, MBEM.Observable = e
        }(), MBEM.arrayFrom = function(t) {
            return Array.prototype.slice.call(t)
        }, MBEM.closest = function(t, e) {
            for (var i = new RegExp("\\b" + e + "\\b"); t;) {
                if (i.test(t.className)) return t;
                t = t.parentNode
            }
        }, t = /\s+/, MBEM.cls = {
            list: function(e) {
                return e.split(t).filter(Boolean)
            },
            contains: function(t, e) {
                return MBEM.cls.list(t.className).indexOf(e) > -1
            },
            add: function(t, e) {
                var i = MBEM.cls.list(t.className);
                return -1 === i.indexOf(e) && i.push(e), t.className = i.join(" "), this
            },
            remove: function(t, e) {
                var i = MBEM.cls.list(t.className),
                    s = i.indexOf(e);
                return s > -1 && i.splice(s, 1), t.className = i.join(" "), this
            },
            toggle: function(t, e, i) {
                return i === undefined && (i = !MBEM.cls.contains(t, e)), MBEM.cls[i ? "add" : "remove"](t, e)
            }
        }, MBEM.extend = function(t, e) {
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var s = e[i];
                    s instanceof Array || s instanceof Date || "object" != typeof s || null === s ? t[i] = s : (t[i] = t[i] || {}, MBEM.extend(t[i], s))
                }
            return t
        },
        function() {
            var t = "__uniqMBEM" + Math.random().toString().substr(2, 5),
                e = MBEM.blocks = {};
            MBEM.prototype = Object.create(MBEM.Observable.prototype), MBEM.prototype.getDefaultParams = function() {
                return {}
            };
            var i = MBEM._propListeners = "__uniqMBEMListeners" + Math.random().toString().substr(2, 5);
            MBEM.prototype.bindTo = function(t, e, s) {
                return "function" == typeof e && (s = e, e = t, t = this.domElem), "string" == typeof t ? t = this.elem(t) : Array.isArray(t) || (t = [t]), e.split(" ").forEach(function(e) {
                    t.forEach(function(t) {
                        var n = s.bind(this);
                        n.origHandler = s, t[i] || (t[i] = {}), t[i][e] || (t[i][e] = []), t[i][e].push(n), t.addEventListener(e, n, !1)
                    }, this)
                }, this), this
            }, MBEM.prototype.elem = function(t, e, i) {
                var s = [],
                    n = t.split(" ").map(function(t) {
                        var n = this.__self.className(t, e, i);
                        return MBEM.cls.contains(this.domElem, n) && s.push(this.domElem), "." + n
                    }, this).join(",");
                return s.concat(MBEM.arrayFrom(this.domElem.querySelectorAll(n)))
            };
            var s = function() {};
            MBEM.override = function(t, e) {
                return "function" == typeof e && e.toString().indexOf("__base") > -1 ? (t = t || s, function() {
                    var i = this.__base;
                    this.__base = t;
                    var s = e.apply(this, arguments);
                    return this.__base = i, s
                }) : e
            }, MBEM.staticProto = {}, MBEM.staticProto.className = function(t, e, i) {
                var s = this._name;
                return t && (s += "__" + t), e !== undefined && !1 !== i && (s += "_" + e + (!0 !== i && i !== undefined ? "_" + i : "")), s
            }, MBEM.decl = function(t, i, s) {
                i = i || {};
                var n, o, a, r, u, h = !1;
                for (var c in "object" == typeof t && t.baseBlock ? (h = !0, u = t.baseBlock, t = t.block) : u = t, u in e ? (o = e[u].prototype, n = a = e[u]) : (h = !0, o = MBEM.prototype, a = MBEM.staticProto), h && (o = Object.create(o), (n = function(t) {
                        this.__internalConstructor(t), this.__constructor(t), this.__afterConstructor(t)
                    }).prototype = o, n.prototype.constructor = n, n.prototype.__self = n, n._name = t, e[t] = n), i) i.hasOwnProperty(c) && (o[c] = MBEM.override(o[c], i[c]));
                for (r in a) s && s.hasOwnProperty(r) || n[r] || (n[r] = a[r]);
                if (s)
                    for (r in s) s.hasOwnProperty(r) && (n[r] = MBEM.override(a[r], s[r]));
                return n
            }, MBEM.getBlock = function(e, i) {
                return e[t] && e[t][i]
            }, MBEM.consoleError = function() {
                if (window.console && window.console.error) try {
                    window.console.error.apply(window.console, arguments)
                } catch (t) {}
            }, MBEM.prototype.__internalConstructor = function(e) {
                e = e || {}, this.domElem = e.node, this.params = MBEM.extend(this.getDefaultParams(), e.params || {}), e.node && ((e.node[t] || (e.node[t] = {}))[this.__self._name] = this)
            }, MBEM.prototype.__constructor = function() {}, MBEM.prototype.__afterConstructor = function() {}, MBEM.initBlockFromNode = function(t, e, i) {
                var s;
                return (s = MBEM.getBlock(t, e)) ? s : (i || (i = MBEM.getNodeParams(t)[e]), MBEM._createBlockFromNode({
                    node: t,
                    block: e,
                    params: i
                }))
            }, MBEM.createBlock = function(t) {
                if (e[t.block]) return new e[t.block](t);
                MBEM.consoleError("Block is not declared", t.block)
            }, MBEM._createBlockFromNode = MBEM.createBlock, MBEM.getNodeParams = function(t) {
                var e;
                try {
                    e = JSON.parse(t.getAttribute("data-bem")) || {}
                } catch (i) {
                    return void MBEM.consoleError("Incorrect params", t)
                }
                return e
            }
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            return function() {
                return e.apply(t, arguments)
            }
        }), e = function(t) {
            return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }, MBEM.decl("mini-suggest", {
            __constructor: function() {
                var t;
                this.__base.apply(this, arguments), this._input = t = this.elem("input")[0], this._val = t.value, this._popup = undefined, this._popupHasContent = !1, this._popupDelayTime = 0, this._popupTouchStartScroll = 0, this._focused = !1, this._freezeFocusDelayTime = 0, this._prevRequestText = null, this.bindTo("click", function(t) {
                    MBEM.cls.contains(t.target, "mini-suggest__button") || this._input.focus()
                }), this.bindTo("submit", function(t) {
                    !1 === this._onSubmit() && t.preventDefault()
                }), this.bindTo(t, "focus", this._onFocus), this.bindTo(t, "blur deactivate", this._onBlur), this.bindTo(t, "input", this._onValueChange), 9 === document.documentMode && this.bindTo(document, "selectionchange", function() {
                    document.activeElement === this._input && this._onValueChange()
                }), this.bindTo("button", "click", function() {
                    this.trigger("button-click")
                }), this.bindTo("touchstart mousedown", this._freezeFocus), this.bindTo("input-clear", "click MSPointerUp", this._onClearClick), this._updateInputVal(), this.bindTo(window, "orientationchange resize", function() {
                    this._popupShown && this.repositionPopup()
                }), document.activeElement === this._input && this._onFocus()
            },
            getDefaultParams: function() {
                return {
                    popupOffset: 3
                }
            },
            _moveCaretToEnd: function() {
                var t = this._val.length;
                try {
                    if ("undefined" != typeof this._input.createTextRange) {
                        var e = this._input.createTextRange();
                        e.collapse(!1), e.select()
                    } else "number" == typeof this._input.selectionStart && (this._input.scrollLeft = 999999, this._input.setSelectionRange(t, t))
                } catch (i) {}
            },
            _getCaretPosition: function() {
                var t, e = this._val.length;
                return document.selection ? ((t = document.selection.createRange()).moveStart("character", -e), t.text.length) : "number" == typeof this._input.selectionStart ? this._input.selectionStart : e
            },
            _freezeFocus: function() {
                this._freezeFocusDelayTime = Date.now() + 1e3
            },
            _appendTpah: function(t) {
                this._input.value = t.getAttribute("data-tpah") + " ", this._updateInputVal(), this._moveCaretToEnd(), this._input.focus(), this._update(), this.trigger("input-change", {
                    type: "tpah"
                })
            },
            _processItemClick: function(t, e, i) {
                var s, n;
                if ("tpah" === e) this._appendTpah(t), this.trigger("item-tpah", {
                    itemIndex: 0 | t.getAttribute("data-index"),
                    val: t.getAttribute("data-tpah")
                });
                else if ("fact" === e || "fulltext" === e) this._submitTime = Date.now(), this._input.value = this._val = i, this._updateInputVal(), this._moveCaretToEnd(), this.trigger("input-change", {
                    type: "suggest-item"
                }), !1 !== this.trigger("item-select", this._getItemEventProps(t, e, i)) && !1 !== this._onSubmit() && this.domElem.submit();
                else if ("nav" === e) return !1 !== (s = this.trigger("item-select", this._getItemEventProps(t, e, i))) && (n = t.getAttribute("data-safeclick")) && ((new Image).src = this.params.clickHost + n, this._addMetrikaCookie(t)), !1 === s;
                return !0
            },
            _getItemEventProps: function(t, e, i) {
                return {
                    node: t,
                    type: e,
                    byKeyboard: !1,
                    itemIndex: 0 | t.getAttribute("data-index"),
                    val: "nav" === e ? this._val : i
                }
            },
            _processPopupClick: function(t, e) {
                var i = MBEM.closest(t, "mini-suggest__item"),
                    s = i && i.getAttribute("data-type"),
                    n = i && i.getAttribute("data-text");
                return !i || ("click" === e || "nav" !== s) && this._processItemClick(i, s, n)
            },
            _onPopupClick: function(t) {
                return MBEM.cls.contains(t.target, "mini-suggest__popup-spacer") ? (this._popupDelayTime = 0, this._freezeFocusDelayTime = 0, void this._outClick()) : this._popupDelayTime > Date.now() || this._popupDisableClicks ? (this._input.focus(), this._freezeFocus(), void t.preventDefault()) : void(this._processPopupClick(t.target, "click") ? t.preventDefault() : this._hidePopup())
            },
            _getTouchCoords: function(t) {
                var e = t.touches && t.touches.length ? t.touches : t.changedTouches,
                    i = e && e[0] || t;
                return {
                    x: i.pageX || i.clientX || 0,
                    y: i.pageY || i.clientY || 0
                }
            },
            _onPopupTouchStart: function(t) {
                MBEM.cls.contains(t.target, "mini-suggest__popup-spacer") || (this._popupTouchStartCoords = this._getTouchCoords(t), "touchstart" === t.type && (this._popupTouchStarted = !0, this._popupDisableClicks = !1), this._freezeFocus())
            },
            _onPopupTouchEnd: function(t) {
                if (!MBEM.cls.contains(t.target, "mini-suggest__popup-spacer")) {
                    var e = this._getTouchCoords(t),
                        i = e.x - this._popupTouchStartCoords.x,
                        s = e.y - this._popupTouchStartCoords.y;
                    i * i + s * s > 64 ? this._freezeFocusDelayTime = 0 : this._popupDelayTime > Date.now() ? this._freezeFocus() : (this._freezeFocus(), this._processPopupClick(t.target, "touchend") && (t.preventDefault(), this._popupTouchStarted && (this._popupDisableClicks = !0)))
                }
            },
            _createPopup: function() {
                if (!this._popup) {
                    var t = this._popup = document.createElement("div");
                    t.className = "mini-suggest__popup mini-suggest__popup_hidden_yes mini-suggest__popup_svg_" + (this.__self._hasSvg() ? "yes" : "no"), this.bindTo(t, "click", this._onPopupClick), this.bindTo(t, "mousedown touchstart", this._onPopupTouchStart), this.bindTo(t, "touchend", this._onPopupTouchEnd);
                    var e = this._popupContent = document.createElement("div");
                    e.className = "mini-suggest__popup-content", t.appendChild(e);
                    var i = document.createElement("div");
                    i.className = "mini-suggest__popup-spacer", t.appendChild(i), document.body.appendChild(t)
                }
            },
            _outClick: function() {
                this._popupDelayTime > Date.now() || this._freezeFocusDelayTime > Date.now() ? this._input.focus() : this._onBlur()
            },
            _drawItem: function(t, e) {
                var i = t[0],
                    s = {
                        tag: "div",
                        className: "mini-suggest__item mini-suggest__item_type_" + i,
                        attrs: 'data-index="' + e + '" data-type="' + i + '"',
                        content: ""
                    };
                return (s = this._buildItem(t, s)).content ? "<" + s.tag + ' class="' + s.className + '" ' + s.attrs + ">" + s.content + "</" + s.tag + ">" : ""
            },
            _buildItem: function(t, i) {
                var s, n, o, a, r, u = t[0],
                    h = "nav" === u;
                return h || "fact" === u ? (s = h ? t[1] : t[2], n = t[3] || t[1], i.content = '<span class="mini-suggest__item-title">' + e(s) + '</span><span class="mini-suggest__item-info">' + e(n) + "</span>", h ? (i.tag = "a", i.attrs += ' href="' + (r = t[4], (/[/]{2}/.test(r) ? "" : "http://") + r) + '" target="_blank" rel="noopener"', (a = "object" == typeof t[5] && null !== t[5] ? t[5].counter : t[5]) && this.params.clickHost && (i.attrs += ' data-safeclick="' + e(a) + '"')) : i.attrs += ' data-text="' + e(n) + '"') : "tpah" === u ? (i.attrs += '  data-tpah="' + e(t[1]) + '"', o = t[1], t[3] && t[3].tpah && (o = o.substr(t[3].tpah[0])), i.content = e(o)) : "fulltext" === u && (i.attrs += ' data-text="' + e(t[1]) + '"', i.content = e(t[1])), i
            },
            _processResponse: function(t) {
                var e, i = [];
                return this._createPopup(), t[2] && i.push.apply(i, t[2].map(function(t) {
                    return ["tpah"].concat(t)
                })), !t[3] || "nav" !== t[3][0] && "fact" !== t[3][0] || i.push(t[3]), (e = t[t.length - 1]) && e.suggestions && i.push.apply(i, e.suggestions.map(function(t) {
                    return ["fulltext"].concat(t)
                })), i
            },
            _drawPopup: function(t) {
                t.length ? (this._popupContent.innerHTML = this._getItemsHTML(t), this._popupHasContent = !0, this.trigger("popup-update", {
                    items: t
                }), this._showPopup()) : (this._popupHasContent = !1, this._hidePopup())
            },
            _getItemsHTML: function(t) {
                return t.map(this._drawItem, this).join("")
            },
            _onSuggestData: function(t) {
                this._drawPopup(t)
            },
            _update: function(t) {
                !t && (this._prevRequestText === this._val || this._submitTime && Date.now() - this._submitTime < 500) || (this._prevRequestText = this._val, this._request(this._val), this.trigger("request", {
                    text: this._val
                }))
            },
            _onSubmit: function() {
                this._freezeFocus();
                try {
                    document.activeElement && document.activeElement.blur()
                } catch (t) {}
                return this.trigger("submit")
            },
            _showPopup: function() {
                !this._popupShown && this._focused && (this._popupShown = !0, this.repositionPopup(), MBEM.cls.remove(this._popup, "mini-suggest__popup_hidden_yes"), this._popupDelayTime = Date.now() + 500, this.trigger("popup-show"))
            },
            _hidePopup: function() {
                this._popupShown && (MBEM.cls.add(this._popup, "mini-suggest__popup_hidden_yes"), this._popupShown = !1, this.trigger("popup-hide"))
            },
            repositionPopup: function() {
                this._popupShown && (this._popup.style.top = MBEM.offset(this._input).top + this._input.offsetHeight + this.params.popupOffset + "px")
            },
            _onFocus: function() {
                this._focused || this._input.selectionStart === this._input.value.length && (this._input.scrollLeft = this._input.scrollWidth), MBEM.cls.add(document.body, "body_search_yes"), this._focused = !0, this._popupHasContent && this._showPopup(), this._fixScrollTop(), clearTimeout(this._blurTimeout), this._update()
            },
            _fixScrollTop: function() {
                window.pageYOffset < 1 && (document.body.scrollTop = 0)
            },
            _onBlur: function() {
                this._freezeFocusDelayTime > Date.now() || (this._focused = !1, this._hidePopup(), clearTimeout(this._blurTimeout), this._blurTimeout = setTimeout(this._afterBlur.bind(this), 300))
            },
            _afterBlur: function() {
                MBEM.cls.remove(document.body, "body_search_yes")
            },
            _onValueChange: function() {
                this._input.value !== this._val && (this._updateInputVal(), this._update(), this.trigger("input-change", {
                    type: "user"
                }))
            },
            _updateInputVal: function() {
                this._val = this._input.value, this._val || (this._popupHasContent = !1), MBEM.cls.toggle(this.domElem, this.__self.className("", "has-value", "yes"), !!this._val)
            },
            _onClearClick: function() {
                this._freezeFocus(), this._input.focus(), this._input.value = "", this._updateInputVal(), this._update(), this.trigger("input-change", {
                    type: "clear"
                })
            },
            _appendHiddenInput: function(t, e) {
                var i = this.domElem.querySelector("input[name=" + t + "]");
                i || ((i = document.createElement("input")).type = "hidden", i.name = t, this.domElem.appendChild(i)), i.value = e
            },
            _addMetrikaCookie: function(t) {
                var e = this._val,
                    i = this._reqID,
                    s = [e, t.href, this._getNavSource(), i].map(encodeURIComponent).join(":"),
                    n = Date.now();
                document.cookie = "sc_" + n + "=" + s + ";path=/watch;domain=." + (location.hostname.match(/yandex\..+$/) || [])[0] + ";expires=" + new Date(n + 6e5).toUTCString() + ";secure"
            },
            _getNavSource: function() {
                return null
            },
            _getMainUrlParams: function(t) {
                return {
                    svg: this.__self._hasSvg() ? 1 : 0,
                    part: t,
                    pos: this._getCaretPosition()
                }
            }
        }, {
            _hasSvg: function() {
                return -1 !== document.documentElement.className.indexOf("svg_yes")
            },
            _encode: e
        }), MBEM.decl("mini-suggest", {
            __constructor: function() {
                this.__base.apply(this, arguments), Ya.Rum.sendTimeMark("695.1309")
            },
            _getNavSource: function() {
                return "/"
            }
        }), MBEM.decl("mini-suggest", {
            __constructor: function() {
                this.__base.apply(this, arguments), this.on("popup-show", function() {
                    "undefined" != typeof BEM && BEM.channel("page").trigger("interaction")
                })
            },
            setInputVal: function(t, e) {
                this._input.value = t, this._updateInputVal(), e && this._update()
            },
            _onFocus: function() {
                var t = this._focused;
                this.__base.apply(this, arguments), t || this._log("click", "search_input.focus"), "undefined" != typeof BEM && (BEM.channel("reload").trigger("lock", {
                    block: "mini-suggest"
                }), BEM.channel("mini-suggest").trigger("focus"))
            },
            _onBlur: function() {
                this.__base.apply(this, arguments), this._focused || this._log("click", "search_input.blur"), "undefined" != typeof BEM && (BEM.channel("reload").trigger("release", {
                    block: "mini-suggest"
                }), BEM.channel("mini-suggest").trigger("blur"))
            },
            _log: function(t, e) {
                window.home && home.stat && home.stat.logPath(t, e)
            }
        }), setTimeout(function c() {
            document.querySelector(".search3__end") ? MBEM.initBlockFromNode(document.querySelector(".search3"), "mini-suggest") : setTimeout(c, 50)
        }, 0), Date.now || (Date.now = function() {
            return (new Date).getTime()
        }), MBEM.offset = function(t) {
            if (!t) return {
                top: 0,
                left: 0
            };
            var e = t.getBoundingClientRect(),
                i = document.documentElement.getBoundingClientRect();
            return {
                top: e.top - i.top,
                left: e.left - i.left
            }
        }, MBEM.decl("mini-suggest", {
            __constructor: function() {
                this.params.counter && (this._renderTime = 0, this._isSendBeaconAvailable = "sendBeacon" in navigator && -1 === navigator.userAgent.indexOf("UCBrowser"), this._clearCounters(), this.on("submit", this._handleSubmit, this).on("request", this._handleRequest, this).on("response", this._handleResponse, this).on("input-change", this._handleInputChange, this).on("popup-update", this._handlePopupUpdate, this).on("item-select", this._handleItemSelect, this).on("item-tpah", this._handleItemTpah, this).on("popup-show", this._handlePopupShow, this).on("button-click", this._handleButtonClick, this)), this.__base.apply(this, arguments)
            },
            _handleSubmit: function() {
                ("button_by_mouse" === this._path.submit || "keyboard" === this._path.submit && "keyboard" !== this._path.state) && this._addAction("submit"), this._sendCounters()
            },
            _handleRequest: function() {
                ++this._responses.rqs
            },
            _handleResponse: function(t, e) {
                e.duration !== undefined && (this._params.times += (this._params.times ? "." : "") + e.duration), this._renderTime = Date.now(), ++this._responses.rsp, e.items.length || ++this._responses.ersp, e.fromCache && ++this._responses.cchd
            },
            _handlePopupUpdate: function(t, e) {
                this._params.render_times += (this._params.render_times ? "." : "") + (Date.now() - this._renderTime), ++this._responses.rndr;
                var i = e.items.some(function(t) {
                    return t[3] && "Pers" === t[3].src
                });
                this._path.personal = i ? "nah_not_used" : "nah_not_shown"
            },
            _handleItemSelect: function(t, e) {
                var i = e.node.getAttribute("data-log-type") || ("nav" === e.type ? "nav" : "phrase");
                e.personal && (this._path.personal = "nah_used"), this._addAction(i, e.itemIndex + 1), this._path.state = e.byKeyboard ? "keyboard" : "mouse", this._path.index = e.itemIndex + 1, this._selectedText = e.val, this._path.submit = e.byKeyboard ? "keyboard" : "click_by_mouse", "nav" === e.type && this._sendCounters()
            },
            _handleItemTpah: function(t, e) {
                this._selectedText = e.val, this._path.state = "tpah", this._addAction("word", e.itemIndex + 1), ++this._responses.clks
            },
            _handlePopupShow: function() {
                "not_shown" === this._path.state && (this._path.state = "not_used")
            },
            _handleButtonClick: function() {
                "keyboard" !== this._path.submit && (this._path.submit = "button_by_mouse")
            },
            _handleInputChange: function(t, e) {
                var i;
                "user" === e.type ? this._params.user_input.length < this._input.value.length ? this._addAction("add") : this._addAction("del") : "clear" === e.type && this._params.user_input.length && this._addAction("clear"), "user" === e.type || "clear" === e.type ? ("add" === (i = this._calcInputChange(this._prevVal, this._input.value)).type ? (this._params.user_input += (this._params.user_input && !this._changedByUser ? "!" : "") + i.text, this._userInputVal += i.text) : "del" === i.type ? this._userInputVal.substr(this._userInputVal.length - i.text.length) === i.text && (this._params.user_input = this._params.user_input.slice(0, this._params.user_input.length - i.text.length), this._userInputVal = this._userInputVal.slice(0, this._userInputVal.length - i.text.length)) : (this._params.user_input = i.text, this._userInputVal = i.text), this._changedByUser = !0) : this._changedByUser = !1, "user" !== e.type && "clear" !== e.type && "tpah" !== e.type || (this._firstChange = this._firstChange || Date.now(), this._lastChange = Date.now(), this._startInputTime || (this._startInputTime = this._firstChange)), this._selectedText && (this._path.state = "edit"), this._ratio.actionsCount++, this._prevVal = this._input.value
            },
            _onFocus: function() {
                this.__base.apply(this, arguments), this._startInputTime = this._startInputTime || Date.now();
                var t = this._blurTime && Date.now() - this._blurTime;
                t && t > 300 && (this._blurDuration += t, this._blurTime = null, this._lastChange && (this._blurDurationLastChange += t), this._firstChange && (this._blurDurationFirstChange += t))
            },
            _onBlur: function() {
                this.__base.apply(this, arguments), this._blurTime = Date.now()
            },
            _sendCounters: function() {
                this._params.text = this._input.value, this._params.pos = this._getCaretPosition(), this._attachReqID();
                var t = this._getUrl();
                this._clearCounters(), this._sendStatUrl(t)
            },
            _sendStatUrl: function(t) {
                if ((t += (t.indexOf("?") > -1 ? "&" : "?") + "_=" + Date.now(), this._isSendBeaconAvailable) && navigator.sendBeacon(t, " ")) return;
                var e = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
                e.open("get", t, !0), e.withCredentials = !0, e.send()
            },
            _clearCounters: function() {
                this._params = {
                    user_input: "",
                    text: "",
                    exprt: "",
                    log: "",
                    region: "",
                    times: "",
                    render_times: ""
                }, this._path = {
                    service: this.params.counter.service,
                    state: "not_shown",
                    index: 0,
                    personal: "nah_not_shown",
                    submit: "button_by_mouse"
                }, this._ratio = {
                    len: 0,
                    queryLen: 0,
                    actionsCount: 0
                }, this._firstChange = 0, this._lastChange = 0, this._sinceChange = {
                    first: 0,
                    last: 0
                }, this._startInputTime = null, this._selectedText = "", this._reqID = this.__self._generateReqID(this.params.counter.yandexuid), this._tpah = [], this._firstActionTime = 0, this._prevVal = "", this._userInputVal = "", this._changedByUser = !0, this._responses = {
                    rqs: 0,
                    rsp: 0,
                    rndr: 0,
                    ersp: 0,
                    clks: 0,
                    cchd: 0
                }, this._blurDuration = 0, this._blurTime = null, this._blurDurationFirstChange = 0, this._blurDurationLastChange = 0
            },
            _addAction: function(t, e) {
                var i;
                this._firstActionTime ? i = Date.now() - this._firstActionTime : (this._firstActionTime = Date.now(), i = 0);
                var s = {
                    action: t,
                    time: i
                };
                e !== undefined && (s.index = e), this._tpah.push(s)
            },
            _attachReqID: function() {
                this._appendHiddenInput("suggest_reqid", this._reqID)
            },
            _getUrl: function() {
                return this.params.counter.url + "/" + this._getUrlParams().join("/").replace(/(\/+)/g, "/")
            },
            _getParamsList: function() {
                return [this.params.counter.params, this._getPath(), this._params, this._getRatio(), this._getSinceChange(), this._getSession(), this._getResponsesShows(), {
                    suggest_reqid: this._reqID
                }, this._getTpah()]
            },
            _getPath: function() {
                return {
                    path: [this._path.service, this._path.state, "p" + this._path.index, this._path.personal, this._path.submit].join(".")
                }
            },
            _getRatio: function() {
                return {
                    ratio: [this._userInputVal.length, this._params.text.length, this._ratio.actionsCount].join(".")
                }
            },
            _getSinceChange: function() {
                return {
                    since_first_change: this._getSinceTime("first"),
                    since_last_change: this._getSinceTime("last"),
                    total_input_time: this._getTotalInputTime()
                }
            },
            _getSinceTime: function(t) {
                var e = "_" + t + "Change";
                if (!this[e]) return 0;
                var i = "first" === t ? this._blurDurationFirstChange : this._blurDurationLastChange;
                return Date.now() - this[e] - i
            },
            _getTotalInputTime: function() {
                return this._startInputTime && Date.now() - this._startInputTime - this._blurDuration || 0
            },
            _getSession: function() {
                return {
                    session: Date.now() + Math.round(1e4 * Math.random())
                }
            },
            _getResponsesShows: function() {
                return this._responses
            },
            _getTpah: function() {
                return {
                    tpah_log: "[" + this._tpah.map(function(t) {
                        return "[" + [t.action, "p" + (t.index || 0), t.time].join(",") + "]"
                    }).join(",") + "]"
                }
            },
            _getUrlParams: function() {
                return this._getParamsList().concat({
                    "*data": "url=http://ya.ru"
                }).reduce(function(t, e) {
                    return t.concat(this._getParams(e))
                }.bind(this), []).concat(["/"])
            },
            _getParams: function(t) {
                return Object.keys(t).reduce(function(e, i) {
                    return "" === t[i] ? e : (e.push(i + "=" + encodeURIComponent(t[i]).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/%2C/g, ",")), e)
                }, [])
            },
            _calcInputChange: function(t, e) {
                return e.length > t.length && 0 === e.indexOf(t) ? {
                    type: "add",
                    text: e.substr(t.length)
                } : e.length < t.length && 0 === t.indexOf(e) ? {
                    type: "del",
                    text: t.substr(e.length)
                } : {
                    type: "other",
                    text: e
                }
            },
            _getMainUrlParams: function() {
                var t = this.__base.apply(this, arguments);
                return this._reqID && (t.suggest_reqid = this._reqID), t
            }
        }, {
            _generateReqID: function(t) {
                return (t = t || this._random(9) + this._random(9)) + Date.now().toString().slice(-7) + this._random(7)
            },
            _random: function(t) {
                return Math.random().toString().slice(2, Math.min(t, 10) + 2)
            }
        }), MBEM.decl("mini-suggest", {
            _onSubmit: function() {
                return this._input.value ? this.__base.apply(this, arguments) : (this._showAlert(), !1)
            },
            _onFocus: function() {
                this.__base.apply(this, arguments), this._hideAlert()
            },
            _onValueChange: function() {
                this.__base.apply(this, arguments), this._hideAlert()
            },
            _showAlert: function() {
                this._initAlert(), MBEM.cls.add(this.domElem, "mini-suggest_alert_yes"), this._alertTimeout = setTimeout(this._hideAlert.bind(this), 3e3)
            },
            _initAlert: function() {
                this._alert || (this._alert = this.elem("alert")[0], this.bindTo(this._alert, "click", this._onAlertClick), this._alertTimeout = null)
            },
            _onAlertClick: function() {
                this._hideAlert(), this._input.focus()
            },
            _hideAlert: function() {
                MBEM.cls.remove(this.domElem, "mini-suggest_alert_yes"), clearTimeout(this._alertTimeout)
            }
        }), MBEM.decl("mini-suggest", {
            _showAlert: function() {
                this._popup && this._hidePopup(), this.__base.apply(this, arguments), window.home && home.stat && home.stat.logPath("show", "alertEmptySearch")
            },
            _onAlertClick: function() {
                this.__base.apply(this, arguments), window.home && home.stat && home.stat.logPath("click", "alertEmptySearch")
            }
        }), MBEM.decl("mini-suggest", {
            autoscroll: function() {
                var t = this._getAutoscrollOffset(),
                    e = window.pageYOffset < t && this.params.autoscroll.animation || 0;
                MBEM.blocks["i-mini-scroll-to"].scrollY(t, e)
            },
            _getAutoscrollOffset: function() {
                var t = document.querySelector(".search3__end");
                return Math.max(0, MBEM.offset(t).top - this._input.offsetHeight)
            },
            _onFocus: function() {
                this.__base.apply(this, arguments), this.params.autoscroll && this.params.autoscroll.enabled && this._scrollToInput()
            },
            _scrollToInput: function() {
                var t = window.pageYOffset < this._getAutoscrollOffset() || this.params.isIOS13;
                if (this.params.autoscroll.delay && t) return setTimeout(this.autoscroll.bind(this), this.params.autoscroll.delay);
                this.autoscroll()
            }
        }), i = {}, MBEM.channel = function(t) {
            if (t !== undefined && i[t]) return i[t];
            var e = new MBEM.Observable;
            return t !== undefined && (i[t] = e), e
        }, o = "requestAnimationFrame" in window, a = MBEM.channel("i-mini-scroll-to"), r = {
            easeInOutSine: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            easeOutQuad: function(t) {
                return 1 - (1 - t) * (1 - t)
            }
        }, u = function() {
            s = null, o ? cancelAnimationFrame(n) : clearInterval(n)
        }, h = function() {
            if (s) {
                var t = Math.max(0, Math.min(1, (Date.now() - s.startTime) / s.duration)),
                    e = s.start + (s.end - s.start) * s.easing(t);
                window.scrollTo(window.pageXOffset, e), t >= 1 ? (u(), setTimeout(function() {
                    a.trigger("stop")
                }, 100)) : o && (n = requestAnimationFrame(h))
            } else u()
        }, MBEM.decl("i-mini-scroll-to", {}, {
            scrollY: function(t, e, i) {
                u(), a.trigger("start"), e ? function(t, e, i) {
                    s = {
                        start: window.pageYOffset,
                        end: t,
                        duration: e,
                        startTime: Date.now(),
                        easing: r[i] || r.easeInOutSine
                    }, n = o ? requestAnimationFrame(h) : setInterval(h, 13)
                }(t, e, i) : (window.scrollTo(window.pageXOffset, t), setTimeout(function() {
                    a.trigger("stop")
                }, 100))
            }
        }), MBEM.decl("mini-suggest", {
            __constructor: function() {
                this.__base.apply(this, arguments), this.params.overlayOnEmpty || this.on("popup-hide", function() {
                    this._toggleOverlay(!1)
                })
            },
            _onFocus: function() {
                this.__base.apply(this, arguments), this.params.overlayOnEmpty && this._toggleOverlay(!0)
            },
            _onBlur: function() {
                this.__base.apply(this, arguments), this.params.overlayOnEmpty && this._freezeFocusDelayTime <= Date.now() && (this._toggleOverlay(!1), MBEM.channel("mini-suggest").trigger("overlay-blur"))
            },
            repositionPopup: function() {
                this.__base.apply(this, arguments), this.params.overlayOnEmpty ? this._updateOverlayPosition() : this._popupShown && this._toggleOverlay(!0)
            },
            _onOverlayScroll: function(t, e) {
                (this._overlayVisible || this._focused) && (this._staticArrowElem = this._staticArrowElem || document.querySelector(this.params.staticArrow || ".search3__end"), null !== this._overlayScrollTop && e - this._overlayScrollTop >= 0 && MBEM.offset(this._staticArrowElem).top + 50 + Math.max(this._popup && this._popup.offsetHeight || 0, 100) < window.pageYOffset && (this._freezeFocusDelayTime = 0, this._onBlur(), document.activeElement && document.activeElement.blur()), this._overlayScrollTop = e)
            },
            _toggleOverlay: function(t) {
                (this._overlay || t) && (this._initOverlay(), MBEM.cls.toggle(this._overlay, "mini-suggest__overlay-index_visible_yes", t), this._overlayVisible = t, this._overlayScrollTop = null, this._updateOverlayPosition())
            },
            _updateOverlayPosition: function() {
                var t;
                this._overlayVisible && (t = this.params.overlayFixed ? 0 : MBEM.offset(this._input).top + this._input.offsetHeight + this.params.popupOffset, this._overlay.style.top = t + "px")
            },
            _initOverlay: function() {
                if (!this._overlay) {
                    var t = "mini-suggest__overlay-index";
                    this.params.overlayFixed && (t += " mini-suggest__overlay-index_fixed_yes"), this.params.overlayMix && (t += " " + this.params.overlayMix), this._overlay = document.createElement("div"), this._overlay.className = t, this._container = document.querySelector(this.params.overlaySelector || ".content"), this._container.appendChild(this._overlay), this._overlayVisible = !1, this.bindTo(this._overlay, "click", this._outClick), MBEM.channel("i-scroll-event").on("scroll", this._onOverlayScroll, this)
                }
            }
        }), window.home = window.home || {}, home.throttle = function(t, e, i) {
            var s, n, o, a = null,
                r = 0;
            i || (i = {});
            var u = function() {
                r = !1 === i.leading ? 0 : (new Date).getTime(), a = null, o = t.apply(s, n), a || (s = n = null)
            };
            return function() {
                var h = (new Date).getTime();
                r || !1 !== i.leading || (r = h);
                var c = e - (h - r);
                return s = this, n = arguments, c <= 0 || c > e ? (a && (clearTimeout(a), a = null), r = h, o = t.apply(s, n), a || (s = n = null)) : a || !1 === i.trailing || (a = setTimeout(u, c)), o
            }
        },
        function() {
            var t = MBEM.channel("i-scroll-event"),
                e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("test", null, i)
            } catch (o) {}
            var s = home.throttle(function() {
                    t.trigger("scroll", window.pageYOffset)
                }, 100),
                n = !!e && {
                    passive: !0
                };
            window.addEventListener("scroll", s, n), window.addEventListener("resize", s, n), window.addEventListener("orientationchange", s, n)
        }(), MBEM.decl("mini-suggest", {
            _getParams: function(t) {
                return Object.keys(t).reduce(function(e, i) {
                    return "" === t[i] ? e : (e.push(i + "=" + ("vars" === i ? t[i] : encodeURIComponent(t[i])).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/%2C/g, ",")), e)
                }, [])
            },
            _getParamsList: function() {
                var t, e, i = this.__base.apply(this, arguments),
                    s = window.home && home.stat && home.stat.getCustomPageParams(),
                    n = {};
                if (Ya.Rum.sendTimeMark("153.1896"), s) {
                    for (var o = 0, a = (s = s.replace(/^\//, "").split("/")).length; o < a; o++) t = (e = s[o]).indexOf("="), n[e.substr(0, t)] = e.substr(t + 1, e.length);
                    var r = home.stat.getRoot(),
                        u = home.getData ? home.getData("timing.reqid") : "";
                    return r && (n.lid = r + ".searchgo"), u && (n.sid = u), i.concat(n)
                }
                return i
            }
        }), MBEM.decl("mini-suggest", {
            _logSearchClick: function() {
                this._searchclickStats || (this._searchclickStats = !0, Ya.Rum.sendTimeMark("153.882"))
            },
            _onFocus: function() {
                this.__base.apply(this, arguments), this._logSearchClick()
            }
        }), MBEM.decl("mini-suggest", {
            __constructor: function() {
                this.__base.apply(this, arguments), window.addEventListener("pageshow", function(t) {
                    t.persisted && (this._input.value = this._val = "", this._updateInputVal(), this._popup && this._hidePopup())
                }.bind(this))
            }
        }), MBEM.decl("mini-suggest", {
            __constructor: function() {
                this.__base.apply(this, arguments), this._cachedUrls = {}
            },
            _initDataCallback: function() {
                return this._callbackName ? this._callbackName : (this._callbackName = "onSuggestResponse" + Math.random().toString().substr(2, 5), this._callbackStorage = {}, window[this._callbackName] = function(t) {
                    var e = this._processResponse(t),
                        i = "string" == typeof t[0] && this._callbackStorage[t[0]],
                        s = i && i.url,
                        n = Date.now();
                    this.trigger("response", {
                        data: t,
                        items: e,
                        url: s,
                        duration: i && n - i.start,
                        fromCache: this._cachedUrls[s] && n - this._cachedUrls[s] < 6e4
                    }), s && (this._cachedUrls[s] = n), "string" == typeof t[0] && t[0].toLowerCase() === this._prevRequestText.toLowerCase() && this._onSuggestData(e)
                }.bind(this), this._callbackName)
            },
            _request: function(t) {
                var e, i, s = document.createElement("script"),
                    n = this._initDataCallback();
                (i = this._getMainUrlParams(t)).callback = n, e = MBEM.appendUrlParams(this.params.url, i), this._callbackStorage[t.toLowerCase()] = {
                    start: Date.now(),
                    url: e
                }, s.src = e, s.onload = s.onerror = function() {
                    s.parentNode.removeChild(s)
                }, document.head.appendChild(s)
            }
        }), MBEM.appendUrlParams = function(t, e) {
            return t + (t.indexOf("?") > -1 ? "&" : "?") + Object.keys(e).map(function(t) {
                return t + "=" + encodeURIComponent(e[t])
            }).join("&")
        }, MBEM.decl("mini-suggest", {
            _buildItem: function(t, e) {
                e = this.__base.apply(this, arguments);
                var i = t[0],
                    s = t[5];
                if (("fact" === i || "nav" === i) && s) {
                    var n = this.__self._encode,
                        o = s.descr,
                        a = s.mark,
                        r = e.content;
                    a && (r += (a = Array.isArray(a) ? a : [a]).map(function(t) {
                        return '<span class="mini-suggest__item-mark mini-suggest__item-mark_type_' + n(t) + '"></span>'
                    }).join("")), o && (r += (o = Array.isArray(o) ? o : [o]).map(function(t) {
                        return '<span class="mini-suggest__item-descr">' + n(t) + "</span>"
                    }).join("")), s.img && s.img.url && (r = '<div class="mini-suggest__item-content">' + r + "</div>", r = this._buildThumb(s) + r), e.content = r
                }
                return e
            },
            _buildThumb: function(t) {
                var e = this.__self._encode,
                    i = "",
                    s = "",
                    n = "",
                    o = "";
                return t.img.badge && (o += '<div class="mini-suggest__item-thumb-badge"', t.img.badgeColor && (o += ' style="background-color:' + e(t.img.badgeColor) + ';color:#333;"'), o += ">" + e(t.img.badge) + "</div>"), i += " mini-suggest__item-thumb_orientation_" + (t.img.aspect ? e(t.img.aspect) : "square"), i += " mini-suggest__item-thumb_size_" + (t.img.size ? e(t.img.size) : "m"), i += t.img.shade ? " mini-suggest__item-thumb_shade" : "", i += t.img.contain ? " mini-suggest__item-thumb_contain" : "", i += t.img.cover ? " mini-suggest__item-thumb_cover" : "", n += "background-color:" + e(t.img.color) + ";", '<div class="mini-suggest__item-thumb' + i + '" ' + (s += 'style="' + (n += "background-image:url(" + e(t.img.url) + ");") + '"') + ">" + o + "</div>"
            }
        }), MBEM.decl("mini-suggest", {
            __constructor: function() {
                this.__base.apply(this, arguments), this._historyCounter = 0, this._afterTransition = this._afterTransition.bind(this)
            },
            _buildItem: function(t, e) {
                var i = this.__base.apply(this, arguments);
                return "fulltext" === t[0] && t[3] && "Pers" === t[3].src ? (e.className += " mini-suggest__item_personal", e.attrs += ' data-personal="1"', e.content += '<div class="mini-suggest__delete"></div>', e) : i
            },
            _processPopupClick: function(t) {
                return MBEM.closest(t, "mini-suggest__delete") ? (this._onDeleteClick(t), !0) : this.__base.apply(this, arguments)
            },
            _onDeleteClick: function(t) {
                var e;
                e = MBEM.closest(t, "mini-suggest__item"), MBEM.cls.add(e, "mini-suggest__item_hidden_yes"), e.addEventListener("webkitTransitionEnd", this._afterTransition), e.addEventListener("transitionend", this._afterTransition), setTimeout(function() {
                    this._afterDelete(e)
                }.bind(this), 350);
                var i = new XMLHttpRequest;
                i.open("get", this.params.deleteUrl + encodeURIComponent(e.getAttribute("data-text"))), i.withCredentials = !0, i.send(), ++this._historyCounter
            },
            _afterTransition: function(t) {
                this._afterDelete(t.target)
            },
            _afterDelete: function(t) {
                var e = t.parentNode;
                e && (e.removeChild(t), 0 === this._popup.querySelectorAll(".mini-suggest__item").length && this._update(!0))
            },
            _getMainUrlParams: function() {
                var t = this.__base.apply(this, arguments);
                return t.hs = this._historyCounter, t
            },
            _getItemEventProps: function(t) {
                var e = this.__base.apply(this, arguments);
                return e.personal = !!t.getAttribute("data-personal"), e
            }
        }), MBEM.decl("mini-suggest", {
            __constructor: function() {
                this.__base.apply(this, arguments), this._val || this._update()
            },
            _getItemsHTML: function(t) {
                var e = this.__base.apply(this, arguments);
                return t.some(function(t) {
                    return t[3] && "Pers" === t[3].src
                }) && (e += home.view("mini-suggest__history-tune", {
                    href: this.params.tuneUrl
                })), e
            },
            _processPopupClick: function(t) {
                return !MBEM.closest(t, "mini-suggest__history-tune") && this.__base.apply(this, arguments)
            }
        })
}(),
function() {
    var t = {};
    home.lang = home.lang && "undefined" != typeof MBEM ? MBEM.extend(home.lang, t) : t
}(),
function() {
    ! function() {
        "use strict";
        home.parseRules = {
            l10n: function(t, e, i) {
                return e.l10n || home.error("Can't proccess 'l10n:" + i + "', check context of template"), e.l10n && e.l10n(i)
            },
            baseViews: function(t, e, i) {
                return e.baseViews(i, t)
            },
            bem: function(t, e, i) {
                i = i.split("."), t = t || {};
                var s = i.pop(),
                    n = i.pop(),
                    o = i.pop();
                switch (s) {
                    case "class":
                        var a = home.getBEMClassname(n, (o ? t[o] : t) || {});
                        return e && e.cls && e.cls.contains(n) ? e.cls.full(a) : a;
                    case "js":
                        return home.getBEMParams(t[n || "js"] || {});
                    case "attrs":
                        return home.getAttributes(t[n || "attrs"])
                }
            },
            cls: function(t, e, i) {
                return e && e.cls ? e.cls.full(i) : i
            }
        }
    }();
    var t, e = home.view ? Object.create(home.view.templates) : {},
        i = {
            l10n: home.l10n,
            stat: {
                logShow: function(t, e) {
                    return e && (t += s(e)), home.stat.logPath("show", t), t
                },
                getAttr: function(t, e, i) {
                    return t ? ((i = i || {}).customParams && (t += s(i.customParams)), ' data-statlog="' + t + '"' + (!1 !== i.isRedirect ? "" : ' data-statlog-redir="0"') + (i.precise ? ' data-statlog-precise="1"' : "")) : ""
                },
                getAdaptiveCounter: function(t, e) {
                    return t ? ' data-statlog="' + t + '"' + (e ? ' data-statlog-redir="0"' : "") + ' data-statlog-autoshow="1"' : ""
                },
                getClientCounter: function(t, e, i) {
                    return (t = i ? t + s(i) : t) ? ' data-statlog="' + t + '"' + (e ? ' data-statlog-redir="0"' : "") : ""
                }
            },
            settingsJs: {
                add: function(t, e, i) {
                    home["export"][i] || (home["export"][i] = {}), home["export"][i][t] = e
                },
                has: function(t, e) {
                    return home.getData && home.getData(e + "." + t)
                }
            },
            csp: (t = {
                stub: !0
            }, ["allowDefault", "allowStyle", "allowPlugin", "allowObject", "allowMedia", "allowImg", "allowFont", "allowConnect", "allowScript", "allowChild", "allowForm"].forEach(function(e) {
                t[e] = function(t) {
                    if (home.error && (!home.getData || !0 === home.getData("csp.report"))) {
                        var i = new Error("req.csp." + e + " was called on clientside");
                        i.meta = {
                            url: t
                        }, i.block = "home.views", home.error.logError(i)
                    }
                }
            }), t)
        };

    function s(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else
            for (var i in t) t.hasOwnProperty(i) && t[i] !== undefined && e.push(i + "=" + encodeURIComponent(t[i]));
        return e.length ? "(" + e.join(";") + ")" : ""
    }

    function n(t, i) {
        if (i) {
            var s = e[t];
            i instanceof Function ? e[t] = i : e[t] = home.templateGenerator(i, t), s && (e[t].base = s)
        }
    }
    n.cached = function(t, i) {
        i && (n(t, i), e[t].cached = !0)
    }, home.view = function(t, s, n) {
        var o, a = n || s || {};
        for (o in i) a.hasOwnProperty(o) || (a[o] = i[o]);
        var r = window.home && home.getData && home.getData("common.req") || {};
        for (o in r) r.hasOwnProperty(o) && !a.hasOwnProperty(o) && (a[o] = r[o]);
        return function u(t, i) {
            var s = t instanceof Function ? t : e[t],
                n = "";
            return s && (n = s.cached ? s(a, u) : s(i, a, u)), n
        }(t, s)
    }, home.view.templates = e, home.view.define = n, n("mini-suggest__history-tune", function(t, e, i) {
        return '<a href="' + (void 0 !== t.href ? t.href : "") + '" class="mini-suggest__history-tune" data-statlog="suggest_example.history.tune">Настройка истории запросов</a>'
    })
}();
if (window.Ya && Ya.Rum) {
    Ya.Rum.sendTimeMark("2700.1428");
};
home.loadManager.trigger("suggest");