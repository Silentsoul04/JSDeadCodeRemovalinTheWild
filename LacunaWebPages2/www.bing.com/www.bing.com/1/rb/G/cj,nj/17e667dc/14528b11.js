var AutoSuggest, __extends, Bing, sa_inst;
(function(n) {
    var t;
    (function(n) {
        var t, i, r, u, f, e;
        (function(n) {
            n.User = "SRCHHPGUSR"
        })(t = n.CookieNames || (n.CookieNames = {})),
        function(n) {
            n.AutoSuggest = "AS"
        }(i = n.CrumbNames || (n.CrumbNames = {})),
        function(n) {
            n.CursorPosition = "cp";
            n.ConversationId = "cvid";
            n.SuggestionCount = "sc";
            n.PartialQuery = "pq";
            n.SuggestionPosition = "sp";
            n.SuggestionType = "qs";
            n.PreviewPaneSuggestionType = "qsc";
            n.SkipValue = "sk";
            n.PreviewPaneSkipValue = "skc";
            n.Ghosting = "ghc";
            n.Css = "css";
            n.Count = "count";
            n.DataSet = "ds";
            n.SessionId = "sid";
            n.TimeStamp = "qt";
            n.Query = "q";
            n.ImpressionGuid = "ig";
            n.QFQuery = "qry";
            n.BaseQuery = "bq";
            n.FormCode = "form";
            n.HashedMuid = "nclid";
            n.RequestElToken = "elvr";
            n.ElTokenValue = "elv";
            n.AppId = "appid";
            n.History = "history";
            n.NoHistory = "nohs";
            n.ApiTextDecoration = "textdecorations";
            n.ClientId = "clientid";
            n.Market = "mkt";
            n.Scope = "scope";
            n.CountryCode = "cc";
            n.HomeGeographicRegion = "hgr";
            n.SetLang = "setlang";
            n.ZeroInputSerp = "zis"
        }(r = n.QueryParams || (n.QueryParams = {})),
        function(n) {
            n.ImpressionGuid = "X-MSEdge-IG"
        }(u = n.Headers || (n.Headers = {})),
        function(n) {
            n.HitHighlighting = "h";
            n.PopularNow = "p";
            n.Local = "l";
            n.Answers = "a"
        }(f = n.Options || (n.Options = {})),
        function(n) {
            n.Id = "id";
            n.Query = "query";
            n.Url = "url";
            n.Navigation = "nav";
            n.Type = "stype";
            n.Autocomplete = "hc";
            n.InstData = "h";
            n.AriaLabel = "aria-label"
        }(e = n.SuggestionAttributes || (n.SuggestionAttributes = {}))
    })(t = n.Service || (n.Service = {}))
})(AutoSuggest || (AutoSuggest = {})),
function(n) {
    var t;
    (function(n) {
        var t;
        (function(n) {
            function s(n) {
                return n ? n[n[i] !== undefined ? i : u] : undefined
            }

            function r(n, t) {
                n && t !== null && t !== undefined && (n[n[i] !== undefined ? i : u] = t)
            }

            function h(n) {
                return _w.getComputedStyle ? _w.getComputedStyle(n, null) : n.currentStyle
            }

            function c(n, t) {
                var r = new RegExp("[?&]{1}" + t + "=([^&]+)"),
                    i = n.match(r);
                return i ? i[1] : null
            }

            function l(n, t, i) {
                if (n.setSelectionRange) n.setSelectionRange(t, i);
                else {
                    var r = n.createTextRange();
                    r.moveEnd("sentence", -1e5);
                    r.moveStart("character", t);
                    r.moveEnd("character", i - t);
                    r.select()
                }
            }

            function a(n, t) {
                for (var r, i, u = 0; i = t[u]; ++u) r = n.getAttribute(i), r && (n[i] = r)
            }

            function v(n) {
                var t = sj_ev(n);
                return {
                    x: t.clientX,
                    y: t.clientY
                }
            }

            function y(n, t) {
                return function(i) {
                    var r = sj_ev(i),
                        u = r.relatedTarget || (r.type == "mouseout" ? r.toElement : r.fromElement);
                    t === u || f(u, t) || n.call(t, r)
                }
            }

            function p(n, t) {
                var i = 0,
                    r = _d.selection;
                if (n.selectionStart != null) i = n.selectionStart;
                else if (r && n.createTextRange) {
                    t && n.focus();
                    var u = n.createTextRange(),
                        f = u.duplicate(),
                        e = r.createRange();
                    t && u.moveToBookmark(e.getBookmark());
                    f.setEndPoint("EndToStart", e);
                    i = f.text.length
                }
                return i
            }

            function w(n, t) {
                n && (n.className = n.className.replace(t, ""))
            }

            function b(n, t) {
                var u, i, r, f;
                if (n) {
                    for (u = n.className.split(" "), i = 0, r = u; i < r.length; i++)
                        if (f = r[i], f === t) return;
                    n.className.length > 0 && (n.className += " ");
                    n.className += t
                }
            }

            function k(n, t) {
                return n ? n.replace(o, function(n, i) {
                    return t[i]
                }) : n
            }

            function d(n, t) {
                var i = t.replace(/\s+$/g, "");
                return t[t.length - 1] == " " && n.length > 0 && ut(t, i, n[0]) ? i : t
            }

            function f(n, t) {
                if (!n || !t || t === n) return !1;
                while (n && t !== n) n = n.parentElement;
                return t == n
            }

            function g(n, t, i) {
                var u = e.exec(t);
                if (!u || !u[1]) throw new Error("Given text format doesn't contain link markup");
                r(i, u[1]);
                r(n, sa_loc.SearchRemoved);
                n.innerHTML = n.innerHTML.replace("%e" + i.innerHTML + "%E", rt(i))
            }

            function nt(n, t, i, r) {
                var u, f;
                return i === void 0 && (i = null), r === void 0 && (r = !1), u = _d.createElement("span"), u.textContent = t, u.style.visibility = "hidden", i && (u.style.fontSize = i), r && (u.style.fontWeight = "bold"), n.appendChild(u), f = u.offsetWidth, n.removeChild(u), f
            }

            function tt(n, t, i) {
                try {
                    return n()
                } catch (r) {
                    return i && i(), t
                }
            }

            function it(n) {
                return n ? "Bearer " + n : ""
            }

            function rt(n) {
                var t = sj_ce("div");
                return t.appendChild(n), t.innerHTML
            }

            function ut(n, t, i) {
                return n == i.substr(0, n.length) || t == i
            }

            function t(n) {
                var t = Math.abs(Math.floor(n));
                return (t < 10 ? "0" : "") + t
            }

            function ft() {
                var n = new Date,
                    i = -n.getTimezoneOffset(),
                    r = i >= 0 ? "+" : "-";
                return n.getFullYear() + "-" + t(n.getMonth() + 1) + "-" + t(n.getDate()) + "T" + t(n.getHours()) + ":" + t(n.getMinutes()) + ":" + t(n.getSeconds()) + "." + t(n.getMilliseconds()) + r + t(i / 60) + ":" + t(i % 60)
            }

            function et(t, i, r, u) {
                var e, f;
                if (!t || !i || !r) return "";
                e = encodeURIComponent(i);
                f = {
                    triggeringMode: "Explicit",
                    intent: r
                };
                u && (f.entityId = u);
                var s = JSON.stringify(f),
                    h = encodeURIComponent(s),
                    o = n.formatString(t.bfbSearchUrl, [e, h, t.bfbfrmcde]);
                return _G && _G.IG ? o + "&cvid=" + encodeURIComponent(_G.IG) : o
            }
            var i = "textContent",
                u = "innerText",
                e = /%e([^%]+)%E/,
                o = /{([0-9]+)}/g;
            n.GetTextContent = s;
            n.SetTextContent = r;
            n.GetComputedStyle = h;
            n.GetQueryStringParam = c;
            n.SetSelectionRange = l;
            n.RewriteAttribsToProps = a;
            n.GetMouseCoords = v;
            n.MouseEnterLeave = y;
            n.getCursorPosition = p;
            n.RemoveClassName = w;
            n.AddClassName = b;
            n.formatString = k;
            n.TrimmedQueryFromSuggestions = d;
            n.isChildOf = f;
            n.SetTextContentWithLink = g;
            n.CalcWidth = nt;
            n.safeExecute = tt;
            n.getBearerTokenHeader = it;
            n.getDateWithTimezone = ft;
            n.buildBfbSearchUrl = et
        })(t = n.Utils || (n.Utils = {}))
    })(t = n.AS || (n.AS = {}))
}(Bing || (Bing = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n() {
                this._eventRegistry = []
            }
            return n.prototype.registerEvents = function(n) {
                this._eventRegistry.push(n)
            }, n.prototype.raiseEvent = function(n) {
                for (var i, r, f, u = [], t = 1; t < arguments.length; t++) u[t - 1] = arguments[t];
                for (i = 0, r = this._eventRegistry; i < r.length; i++) f = r[i], f.raise(n, u)
            }, n.prototype.clearEvents = function() {
                this._eventRegistry = []
            }, n
        }();
        n.EventRegisterer = t
    })(t = n.AS || (n.AS = {}))
}(Bing || (Bing = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n(n) {
                this._eventParent = n;
                this.events = []
            }
            return n.prototype.add = function(n, t) {
                this.events[n] = t
            }, n.prototype.proxy = function(n) {
                for (var i, r, e, u = this, f = [], t = 1; t < arguments.length; t++) f[t - 1] = arguments[t];
                for (i = 0, r = f; i < r.length; i++) e = r[i],
                    function(t) {
                        u.events[t] = function() {
                            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                            r.splice(0, 0, t);
                            n.apply(u._eventParent, r)
                        }
                    }(e)
            }, n.prototype.raise = function(n, t) {
                var i = this.events[n];
                i && i.apply(this._eventParent, t)
            }, n
        }();
        n.EventRegistration = t
    })(t = n.AS || (n.AS = {}))
}(Bing || (Bing = {}));
__extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(n, t) {
                n.__proto__ = t
            } || function(n, t) {
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
            }, n(t, i)
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function(n) {
        var t;
        (function(n) {
            var i, f;
            (function(n) {
                n.Web = "Web";
                n.BingAtWork = "BAW";
                n.Substrate = "SSUE";
                n.MicrosoftSearchInBing = "MSB";
                n.MicrosoftSearchInBingCached = "MSBC"
            })(i = n.DataSources || (n.DataSources = {})),
            function(n) {
                n.Bookmarks = "Bookmarks";
                n.People = "People"
            }(f = n.BingAtWorkDataTypes || (n.BingAtWorkDataTypes = {}));
            var t = AutoSuggest.Service.QueryParams,
                r = "ajax.unload",
                e = "msb:qf:rdy",
                u = [t.SuggestionPosition, t.Ghosting, ],
                o = u.concat([t.PartialQuery, t.SuggestionCount, t.SuggestionType, t.SkipValue, t.ConversationId, ]),
                s = function(f) {
                    function s(n, t, i, r, u, e, o, s, h, c) {
                        var l = f.call(this) || this;
                        return l.canvas = n, l._dataProvider = t, l._bingAtWorkDataProvider = i, l._substrateDataProvider = r, l._msbDataProvider = u, l._instrumentation = e, l._bingAtWorkSuggestionsParser = o, l._substrateSuggestionsParser = s, l._msbSuggestionsParser = h, l._bingAtWorkWebTelemetry = c, l.currentQuery = "", l.data = {}, l.ghostInstValue = 0, l._cursorPosition = 0, l._queryWithCurrentSuggestions = "", l._receivedAtLeastOnceValidResponse = !1, l._isDisposed = !1, l._requestSequence = -1, l._isBawPayloadAdded = !1, l._originalQuery = "", l._previousLocationCache = null, l.msbNtpKeyStrokeMaxRetry = 0, l.isMsbCachingBundleReady = !1, l
                    }
                    return __extends(s, f), s.prototype.init = function(t, i, r) {
                        var u = this,
                            e, o, h, c, f, l, a, v;
                        for (this._originalQuery = r.value, this.config = t, this._container = i, this.registerAjaxSerpUnloadEvent(), e = 0, o = s.ScopeExtensions; e < o.length; e++) h = o[e], h.init(this);
                        s.ScopeExtensions = [];
                        c = function(n, t, i, r, f) {
                            return u.dataProviderCallbackFunc(n, t, i, r, f)
                        };
                        this._dataProvider.init(t, t.u, c);
                        this.canvas.init(this, t, i, r);
                        f = new n.EventRegistration(this);
                        f.proxy(this.raiseEvent, 10, 12, 11);
                        this._bingAtWorkDataProvider && (l = function(n, t, i, r, f, e) {
                            return u.onBingAtWorkResponseReceived(n, t, i, e)
                        }, this._bingAtWorkDataProvider.init(t, this.config.bingAtWorkUrl, l));
                        this._substrateDataProvider && (a = function(n, t, i) {
                            return u.onSubstrateResponseReceived(n, t, i)
                        }, this._substrateDataProvider.init(t, "", a));
                        this._msbDataProvider && (v = function(n, t, i, r) {
                            return u.onSearchBoxFocusWithRetry(1, i, function() {
                                return u.onMsbResponseReceived(n, t, i, r)
                            })
                        }, this._msbDataProvider.init(v));
                        f.add(4, function(n, t, i) {
                            u.raiseEvent(4, n, t, i)
                        });
                        f.add(20, function(n, t) {
                            t.className.indexOf("as_qb") != -1 && (u.raiseEvent(13, n.query + " ", !1), _w.Log && Log.Log && Log.Log("Select", "QueryBuilder", "Click", !1, "ImpressionGuid", u.data.Inst.IG))
                        });
                        this.canvas.registerEvents(f);
                        this.raiseEvent(6, this);
                        t.isEdgeNtp && this.isMsbEnabled(t.enabledDataSources) && (this.msbNtpKeyStrokeMaxRetry = t.msbKsTnsTryMax || 0, this.raiseEvent(21));
                        t.msbqc && this.initMsbQfCaching()
                    }, s.prototype.initMsbQfCaching = function() {
                        for (var r = this, t = !1, n = 0; n < this.config.enabledDataSources.length; ++n)
                            if (this.config.enabledDataSources[n] === i.MicrosoftSearchInBing) {
                                this.config.enabledDataSources.splice(n, null, i.MicrosoftSearchInBingCached);
                                t = !0;
                                break
                            }
                        t || this.config.enabledDataSources.push(i.MicrosoftSearchInBingCached);
                        sj_evt.bind(e, function() {
                            return r.isMsbCachingBundleReady = !0
                        }, !0)
                    }, s.prototype.isMsbEnabled = function(n) {
                        var r, t, u, f;
                        if (!n) return !1;
                        for (r = !1, t = 0, u = n; t < u.length; t++)
                            if (f = u[t], f === i.BingAtWork) {
                                r = !0;
                                break
                            }
                        return r
                    }, s.prototype.raiseUpdateGhostedText = function(n, t, i) {
                        this.raiseEvent(14, n, t, i)
                    }, s.prototype.raiseUpdateTextAndRequery = function(n, t) {
                        this.raiseEvent(13, n, t)
                    }, s.prototype.raiseUpdateText = function(n) {
                        this.raiseEvent(12, n)
                    }, s.prototype.raiseTextChanged = function(n, t) {
                        this.raiseEvent(18, n, t)
                    }, s.prototype.onBfbNavigateCallback = function(n) {
                        this._bingAtWorkWebTelemetry && this._bingAtWorkWebTelemetry.logClicked(n)
                    }, s.prototype.onSubstrateNavigateCallback = function(n) {
                        this._substrateDataProvider && this._substrateDataProvider.instrumentClick(n)
                    }, s.prototype.setData = function(n) {
                        this.data = n
                    }, s.prototype.dataProviderCallbackFunc = function(t, r, u, f, e) {
                        if ((this._previousLocationCache = e || this._previousLocationCache, !this._isDisposed && this.canvas.searchBoxHasFocus()) && (n.CachedResponseUtils && n.CachedResponseUtils.checkCachedResponseAndLog && (t = n.CachedResponseUtils.checkCachedResponseAndLog(t, f)), this.raiseEvent(8), u == this.currentQuery) && t != null && (this.raiseEvent(9, u, r), this._queryWithCurrentSuggestions = u, this.canvas.render(t, this.currentQuery, r, i.Web), this._receivedAtLeastOnceValidResponse = !0, this._instrumentation)) {
                            var o = this.data && this.data.Inst ? this.data.Inst.IG : null;
                            this._instrumentation.updateImpressionGuid(o, r)
                        }
                    }, s.prototype.onSubstrateResponseReceived = function(t, r, u) {
                        var f = this,
                            e, o;
                        !this._isDisposed && this.canvas.searchBoxHasFocus() && u == this.currentQuery && (this.config.handleDuplicateFetch && r < this._requestSequence || (e = sb_gt(), o = function(t, o) {
                            var h = n.BingAtWorkTemplateManager.generateHtml(f.config, t, u),
                                s;
                            t.length && (f._instrumentation.instrumentResponseReceived(i.Substrate, r, e), f._bingAtWorkWebTelemetry && f._bingAtWorkWebTelemetry.logPerf("SSUESuggestions"));
                            f._instrumentation.instrumentDataSource(i.Substrate, t, r, o);
                            f.config.msbSusR && (f._substrateDataProvider.updateTraceId(o.TraceID), f.canvas.render(h, f.currentQuery, r, i.Substrate), h && (f._instrumentation.updateRendered(r), f._bingAtWorkWebTelemetry && (s = n.BingAtWorkTemplateManager.getTenantConfig(), f._bingAtWorkWebTelemetry.setContext({
                                traceId: o.TraceID,
                                tenantName: s ? s.displayName : "",
                                tenantId: f.config.bawTenantId
                            }), t.forEach(function(n) {
                                f._bingAtWorkWebTelemetry.logShown(n.id)
                            }))))
                        }, this._substrateSuggestionsParser.parse(u, t, r, o)))
                    }, s.prototype.onMsbResponseReceived = function(t, r, u, f) {
                        var e = this;
                        if (!this._isDisposed && this.canvas.searchBoxHasFocus() && u == this.currentQuery && (!this.config.handleDuplicateFetch || !(r < this._requestSequence))) {
                            var s = sb_gt(),
                                o = f ? i.MicrosoftSearchInBingCached : i.MicrosoftSearchInBing,
                                h = function(t, i) {
                                    var h = n.BingAtWorkTemplateManager.generateHtml(e.config, t, u, e.config.isMsbInline),
                                        f;
                                    t.length && e._instrumentation.instrumentResponseReceived(o, r, s);
                                    e._instrumentation.instrumentDataSource(o, t, r, i);
                                    e.canvas.render(h, e.currentQuery, r, o);
                                    h && (e._instrumentation.updateRendered(r), e._bingAtWorkWebTelemetry && (f = n.BingAtWorkTemplateManager.getTenantConfig(), e._bingAtWorkWebTelemetry.setContext({
                                        traceId: i ? i.TraceID : "",
                                        tenantName: f ? f.displayName : "",
                                        tenantId: e.config.bawTenantId
                                    }), t.forEach(function(n) {
                                        e._bingAtWorkWebTelemetry.logShown(n.id)
                                    })))
                                };
                            this._msbSuggestionsParser.parse(t, r, h)
                        }
                    }, s.prototype.onBingAtWorkResponseReceived = function(t, r, u, f) {
                        var e = this,
                            o, s;
                        !this._isDisposed && this.canvas.searchBoxHasFocus() && u == this.currentQuery && (this.config.handleDuplicateFetch && r < this._requestSequence || (o = sb_gt(), this.config.isEdgeNtp && (this.raiseEvent(8), f == 401 && this.msbNtpKeyStrokeMaxRetry > 0 && (this.msbNtpKeyStrokeMaxRetry--, this.raiseEvent(21))), s = function(t, f) {
                            var h = n.BingAtWorkTemplateManager.generateHtml(e.config, t, u, e.config.isMsbInline),
                                s;
                            t.length && (e.config.isEdgeNtp ? e.raiseEvent(9, u, r) : (e._instrumentation && e._instrumentation.instrumentResponseReceived(i.BingAtWork, r, o), e._bingAtWorkWebTelemetry && e._bingAtWorkWebTelemetry.logPerf("BAWSuggestions")));
                            e._instrumentation && e._instrumentation.instrumentDataSource(i.BingAtWork, t, r, f);
                            e.canvas.render(h, e.currentQuery, r, i.BingAtWork);
                            h && (!e.config.isEdgeNtp && e._instrumentation && e._instrumentation.updateRendered(r), e._bingAtWorkWebTelemetry && (s = n.BingAtWorkTemplateManager.getTenantConfig(), e._bingAtWorkWebTelemetry.setContext({
                                traceId: f.TraceID,
                                tenantName: s ? s.displayName : "",
                                tenantId: e.config.bawTenantId
                            }), t.forEach(function(n) {
                                e._bingAtWorkWebTelemetry.logShown(n.id)
                            })))
                        }, this._bingAtWorkSuggestionsParser.parse(u, t, r, s)))
                    }, s.prototype.getAllSuggestionInstUrl = function(n, t) {
                        for (var u, f, o = this.getInstrumentationKeys(t), i = [], r = 0, e = o; r < e.length; r++) u = e[r], f = this.getSuggestionInstValue(u, !0, n), f !== null && (i = i.concat(["&", u, "=", f]));
                        return i.join("")
                    }, s.prototype.getAllSuggestionInstObject = function(n, t) {
                        for (var r, u, o = this.getInstrumentationKeys(t), f = {}, i = 0, e = o; i < e.length; i++) r = e[i], u = this.getSuggestionInstValue(r, !1, n), u !== null && (f[r] = u);
                        return f
                    }, s.prototype.getInstrumentationKeys = function(n) {
                        return n ? o : u
                    }, s.prototype.getSuggestionInstValue = function(n, i, r) {
                        r = r || this.canvas.selectedSuggestion;
                        switch (n) {
                            case t.SuggestionCount:
                                return this.canvas.currentSuggestionList.length + "-" + this._queryWithCurrentSuggestions.length;
                            case t.PartialQuery:
                                return i ? encodeURIComponent(this._queryWithCurrentSuggestions) : this._queryWithCurrentSuggestions;
                            case t.SuggestionPosition:
                                return r ? "" + r.ord : "-1";
                            case t.SuggestionType:
                                return r ? r.src : "n";
                            case t.SkipValue:
                                return r && r.sk ? r.sk : "";
                            case t.Ghosting:
                                return this.ghostInstValue == 0 ? null : this.ghostInstValue.toString();
                            case t.ConversationId:
                                return _G.IG;
                            default:
                                return null
                        }
                    }, s.prototype.setCursorPosition = function(n) {
                        this._cursorPosition = n
                    }, s.prototype.finalizeKeystroke = function() {
                        this._instrumentation && this._requestSequence > -1 && this._instrumentation.finalizeKeystroke(this._requestSequence)
                    }, s.prototype.fetch = function(n) {
                        this.finalizeKeystroke();
                        this._requestSequence++;
                        this._instrumentation && this._instrumentation.beginRequest(this._requestSequence);
                        this.fetchWeb(n, this._requestSequence, !1);
                        this.config.msbqc && this.isMsbCachingBundleReady ? this.fetchMsb(n, this._requestSequence) : this.config.msbqc || this.fetchBingAtWork(n, this._requestSequence);
                        this.config.msbSusE && this.fetchSubstrate(n, this._requestSequence)
                    }, s.prototype.fetchSubstrate = function(t, i) {
                        if (this._substrateDataProvider && this.currentQuery.length >= this.config.bawminqlen) {
                            var r = n.BingAtWorkTemplateManager.getTenantConfig();
                            r && r.displayName && this._substrateDataProvider.fetch(t, i, !1)
                        }
                    }, s.prototype.fetchBingAtWork = function(t, i) {
                        if (this._bingAtWorkDataProvider && this.currentQuery.length >= this.config.bawminqlen) {
                            var r = n.BingAtWorkTemplateManager.getTenantConfig();
                            r && r.displayName ? (this.addBawPayload(t), this._bingAtWorkDataProvider.fetch(t, i, !1)) : this.config.isEdgeNtp && this.msbNtpKeyStrokeMaxRetry > 0 && (this.msbNtpKeyStrokeMaxRetry--, this.raiseEvent(21))
                        }
                    }, s.prototype.fetchMsb = function(t, i) {
                        if (this._msbDataProvider && this.currentQuery.length >= this.config.bawminqlen) {
                            var r = n.BingAtWorkTemplateManager.getTenantConfig();
                            r && r.displayName && this._msbDataProvider.fetch(t, i)
                        }
                    }, s.prototype.addBawPayload = function(n) {
                        var r = this.config.bawmax,
                            t, i;
                        this._isBawPayloadAdded ? this._bingAtWorkDataProvider.addPostValue("Query", n) : (t = ["Bookmark", "Qna", "Building"], this.config.msbSusR || t.push("Person"), i = {
                            count: r,
                            domains: t,
                            query: n,
                            conversationId: _G.IG
                        }, this._bingAtWorkDataProvider.addBody(i))
                    }, s.prototype.onSearchBoxFocusWithRetry = function(n, t, i, r) {
                        var u = this;
                        if (t !== this.currentQuery) {
                            r && r();
                            return
                        }
                        this.canvas.searchBoxHasFocus() ? i() : n < 5 && sb_st(function() {
                            u.onSearchBoxFocusWithRetry(n + 1, t, i, r)
                        }, 15)
                    }, s.prototype.fetchWeb = function(n, i, r) {
                        this._dataProvider.addParam(t.CursorPosition, this._cursorPosition.toString());
                        var u = this._container.parentNode.offsetWidth.toString();
                        this.config.cors ? this._dataProvider.addParam("contentWidth", u) : this._dataProvider.addHeader("X-Autosuggest-ContentWidth", u);
                        this._receivedAtLeastOnceValidResponse || this._dataProvider.addParam(t.Css, "1");
                        this.config.ezis && this._originalQuery === n && this._requestSequence == 0 && this._dataProvider.addParam(t.ZeroInputSerp, "1");
                        this.config.pc && this._dataProvider.addParam("pubcode", this.config.pc);
                        this._dataProvider.fetch(n, i, !0);
                        this.raiseEvent(7, this.currentQuery, i);
                        r || sj_evt.fire("AS.RequestSent", this.currentQuery)
                    }, s.prototype.registerAjaxSerpUnloadEvent = function() {
                        var n = this,
                            t = function(i) {
                                var u = i && i[1];
                                u && u.isInstantRequest || (n._isDisposed = !0, sj_evt.unbind(r, t), n.raiseEvent(17), n.clearEvents())
                            };
                        sj_evt.bind(r, t, !1)
                    }, s.prototype.setRawQuery = function(n) {
                        this.canvas.updateRawQuery(n)
                    }, s.prototype.setQuery = function(n) {
                        (this.currentQuery = n, typeof n != "undefined" && (n.length != 0 || this.config.fetchOnEmpty)) && this.fetch(n)
                    }, s.prototype.pretechQuery = function(n) {
                        this.fetchWeb(n, 0, !0)
                    }, s.ScopeExtensions = [], s
                }(n.EventRegisterer);
            n.WebCore = s
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {}));
__extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(n, t) {
                n.__proto__ = t
            } || function(n, t) {
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
            }, n(t, i)
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function(n) {
        var t;
        (function(n) {
            var u = AutoSuggest.Service.QueryParams,
                t = "sa_errorCnt",
                i = function() {
                    function n() {
                        this._callParams = {};
                        this._callHeaders = {};
                        this._callBody = {}
                    }
                    return n.prototype.fetchUrl = function() {}, n.prototype.init = function(n, t, i) {
                        this._config = n;
                        this._baseUrl = t;
                        this._callbackFunc = i
                    }, n.prototype.addParam = function(n, t) {
                        this._callParams[n] = t
                    }, n.prototype.addHeader = function(n, t) {
                        if (this._config.cors) throw "Custom headers are not allowed for cross domain calls";
                        this._callHeaders[n] = t
                    }, n.prototype.addPostValue = function(n, t) {
                        this._callBody[n] = t
                    }, n.prototype.addBody = function(n) {
                        this._callBody = n
                    }, n.prototype.fetch = function(n, t, i) {
                        this._requestSequence = t;
                        var r = this.getFinalFetchUrl(n);
                        this.fetchUrl(r, n, t, i)
                    }, n.prototype.getBaseUrl = function() {
                        return this._baseUrl
                    }, n.prototype.isPostCall = function() {
                        return this._callBody && typeof this._callBody == "object" && Object.keys(this._callBody).length > 0
                    }, n.prototype.getFinalFetchUrl = function(n) {
                        var i = decodeURIComponent(this.getBaseUrl()) + encodeURIComponent(n),
                            t;
                        this.addParam(u.ConversationId, _G.IG);
                        for (t in this._callParams) i += "&" + t + "=" + this._callParams[t];
                        return this._callParams = {}, i
                    }, n
                }(),
                r;
            n.DataProviderBase = i;
            r = function(i) {
                function r() {
                    return i !== null && i.apply(this, arguments) || this
                }
                return __extends(r, i), r.prototype.fetchUrl = function(i, r, u, f) {
                    var o = this,
                        e = sj_gx(),
                        s, h;
                    e.open(this.isPostCall() ? "POST" : "GET", i, !0);
                    for (s in this._callHeaders) e.setRequestHeader(s, this._callHeaders[s]);
                    this._callHeaders = {};
                    e.onreadystatechange = function() {
                        var s, n, h;
                        e.readyState == 4 && (e.onreadystatechange = function() {}, s = void 0, n = e.status, n == 200 ? s = e.responseText : _w[t] && (n == 0 || (n / 100 | 0) == 4 || (n / 100 | 0) == 5) && (s = _w[t]), h = null, f && (!o._config.cors || o._config.rbhc) && e.getResponseHeader && (h = e.getResponseHeader("X-BingQF-BLIS")), o._callbackFunc(s, u, r, i, h, n))
                    };
                    e.withCredentials !== undefined && (e.withCredentials = !0);
                    this.isPostCall() ? (h = n.Utils.safeExecute(function() {
                        return JSON.stringify(o._callBody)
                    }, ""), e.send(h)) : e.send()
                }, r
            }(i);
            n.DataProvider = r
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {}));
__extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(n, t) {
                n.__proto__ = t
            } || function(n, t) {
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
            }, n(t, i)
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function(n) {
        var t;
        (function(n) {
            var o = ["MD"],
                s = ["CustomSearch"],
                h = ["previousSibling", "nextSibling"],
                c = ["lastChild", "firstChild"],
                r = "sa_hv",
                u = /(\s|^)sa_hv/g,
                i = "data-sugcont",
                f = n.Utils,
                t = AutoSuggest.Service.SuggestionAttributes,
                e = [n.DataSources.BingAtWork, n.DataSources.Substrate, n.DataSources.MicrosoftSearchInBing, n.DataSources.MicrosoftSearchInBingCached],
                l = function(l) {
                    function a() {
                        var n = l.call(this) || this;
                        return n.currentSuggestionList = [], n._ie9orLower = sb_ie && !_w.atob, n._currentRequestSequence = -1, n._suggestionsQueue = {}, n
                    }
                    return __extends(a, l), a.prototype.init = function(t, i, r, u) {
                        this.autoSuggestInstance = t;
                        this.config = i;
                        this.container = r;
                        this._searchBox = u;
                        this._asContainer = _ge(i.c || "sw_as");
                        var f = new n.EventRegistration(this);
                        f.add(17, this.clearEvents);
                        this.autoSuggestInstance.registerEvents(f)
                    }, a.prototype.render = function(t, i, r, u) {
                        var a, o, p, k, c, v, l, d, y, w, g, b;
                        for (r > this._currentRequestSequence && (this._suggestionsQueue = {}, this._currentQuery = i, this._currentRequestSequence = r), this._suggestionsQueue[u] = {
                                suggestions: t,
                                rendered: !1,
                                dataSource: u
                            }, a = 0; a < this.config.enabledDataSources.length; a++) {
                            var s = [],
                                h = this.config.enabledDataSources,
                                f = this._suggestionsQueue[h[a]];
                            if (!f) return;
                            if (!f.rendered) {
                                for (o = _ge("sa_baw"), p = null, e.indexOf(f.dataSource) != -1 && (o ? this.config.msbSusR && (p = this.config.bawmax * 2 - o.children.length) : f.suggestions = '<div data-region="BAWC" id="sa_baw" data-sugcont="1">' + f.suggestions + "<\/div>"), k = this.createDivFromAjaxResponse(f.suggestions), h[0] == f.dataSource && (this.container.innerHTML = "", this.currentSuggestionList = [], this._currentSuggestion = null, this.selectedSuggestion = null, this._searchBox.removeAttribute("aria-activedescendant")), c = void 0, v = this.container.getElementsByTagName("UL"), l = 0; l < v.length; l++)
                                    if (v[l].className.indexOf("sa_drw") != -1) {
                                        c = v[l];
                                        break
                                    }
                                if (o = _ge("sa_baw"), !o || (c = o), this.insertAjaxResponseDivIntoDom(c ? c : this.container, k, p), this.buildSuggestions(s), f.rendered = !0, f.dataSource == n.DataSources.Web)
                                    if (s.length > 0) this.config.bi && (d = {
                                        currentQuery: i,
                                        suggestionElements: s,
                                        requestSequence: r
                                    }, sj_evt.fire("AS.SuggestionsRendered", d));
                                    else
                                        for (y = 0, w = h; y < w.length; y++)
                                            if (g = w[y], e.indexOf(g) != -1) {
                                                b = sj_ce("ul", this.config.slid, "sa_drw");
                                                b.setAttribute("data-priority", "2");
                                                this.container.appendChild(b);
                                                break
                                            }
                                s.length > 0 && this.raiseEvent(10, i, s, r, this.container, f.dataSource);
                                h[h.length - 1] == f.dataSource && this.currentSuggestionList.length == 0 && this.raiseEvent(11, i)
                            }
                        }
                    }, a.prototype.updateRawQuery = function(n) {
                        this._rawQuery = n
                    }, a.prototype.buildSuggestions = function(n) {
                        var o, s, e, r, h, u, c;
                        if (this._suggestionsContainer = _ge(this.config.slid), this._nextWordRawQuerySize = null, this._largestSuggestion = 0, this._nextWordRawQuerySize = 1e4, this.containsNextWord = !1, this._suggestionsContainer)
                            for (o = this._suggestionsContainer.getElementsByTagName("li"), s = this.currentSuggestionList.length, e = s; e < o.length; ++e)
                                if (r = o[e], h = r.parentNode, h.id == this.config.slid || h.getAttribute(i)) {
                                    if (r.className.indexOf("sa_hd") != -1) {
                                        r.hd = !0;
                                        continue
                                    }
                                    f.RewriteAttribsToProps(r, [t.Url, t.Query, t.Type, t.Autocomplete]);
                                    r.className.indexOf("pp_tile") != -1 && (r.panel = {
                                        ot: sb_gt()
                                    });
                                    r.stype && this.isSuggestionTypeInstrumentationDisabled(r.stype) || (r.addInst = !0);
                                    r.stype && this.isNavigationalSuggestion(r.stype) && (r.nav = !0);
                                    this.config.eNw && r.stype && r.stype.indexOf("NW") > -1 && (this.containsNextWord = !0, this.config.nwRz && (u = r.textContent || r.innerText, u && (c = r.query.replace(u, ""), u.length > this._largestSuggestion && c.length <= this._nextWordRawQuerySize && (this._largestSuggestion = u.length, this._nextWordRawQuerySize = c.length, this.largestNextWordElement = r))));
                                    this.currentSuggestionList.push(r.query);
                                    this.decorateSuggestion(r, ++s);
                                    n.push(r)
                                }
                    }, a.prototype.isSuggestionTypeInstrumentationDisabled = function(n) {
                        for (var r, t = 0, i = o; t < i.length; t++)
                            if (r = i[t], r === n) return !0;
                        return !1
                    }, a.prototype.isNavigationalSuggestion = function(n) {
                        for (var r, t = 0, i = s; t < i.length; t++)
                            if (r = i[t], r === n) return !0;
                        return !1
                    }, a.prototype.mouseOverSuggestionHandler = function(t, i) {
                        var u = n.Utils.GetMouseCoords(t);
                        i.url && this._previousMouseCoords && (this._previousMouseCoords.x != u.x || this._previousMouseCoords.y != u.y) ? (this._previousMouseCoords = u, i.className.indexOf(r) == -1 && this.highlightSuggestion(i)) : this._previousMouseCoords = this._previousMouseCoords || u
                    }, a.prototype.decorateSuggestion = function(t, i) {
                        var r = this,
                            u;
                        t.src = t.stype;
                        t.ord = i;
                        sj_be(t, "mousemove", function(n) {
                            return r.mouseOverSuggestionHandler(n, t)
                        });
                        sj_be(t, "mouseover", function(i) {
                            var u = n.Utils.MouseEnterLeave(function(n) {
                                return r.mouseOverSuggestionHandler(n, t)
                            }, t);
                            u(i)
                        });
                        sj_be(t, "mousedown", function(n) {
                            return r.onMouseDownSuggestion(n, t)
                        });
                        sj_be(t, "mouseup", function(n) {
                            r.cancelEventBubbling(n);
                            r.onMouseUpSuggestion(n, t)
                        });
                        u = window.navigator.msPointerEnabled ? "onMSPointerDown" : "ontouchstart";
                        u.toLowerCase() in _w && sj_be(t, u.substr(2), function(n) {
                            if (t.it = "m", n.pointerType) switch (n.pointerType) {
                                case n.MSPOINTER_TYPE_TOUCH:
                                    t.it = "t";
                                    break;
                                case n.MSPOINTER_TYPE_PEN:
                                    t.it = "p"
                            } else t.it = "t"
                        })
                    }, a.prototype.getTargetElement = function(n, t) {
                        var o = h[t],
                            f = c[t],
                            r = n ? n[o] : this._suggestionsContainer[f],
                            e, u;
                        return r ? (e = r.getAttribute(i), e && r.innerHTML ? (r = r[f], this.isSuggestionElement(r) || (r = this.getTargetElement(r, t))) : this.isSuggestionElement(r) || (r = this.getTargetElement(r, t))) : t == 0 && this._currentSuggestion && (u = this._currentSuggestion.parentNode, this.unHighlightSuggestionHandler(), u.getAttribute(i) && (r = this.getTargetElement(u, t))), r
                    }, a.prototype.isSuggestionElement = function(n) {
                        return n.url && n.tagName === "LI"
                    }, a.prototype.selectItem = function(n) {
                        var t = this.getTargetElement(this._currentSuggestion, n),
                            i;
                        t ? (this.setSearchValue(t), this.highlightSuggestion(t)) : this.clearSelectedSuggestion();
                        this.config.bi && (i = {
                            currentQuery: this._currentQuery,
                            suggestionElements: [t],
                            requestSequence: this._currentRequestSequence
                        }, sj_evt.fire("AS.SuggestionSelected", i))
                    }, a.prototype.isClickOnElementWithClass = function(n, t) {
                        var i = n.target;
                        return i && i.className.indexOf(t) > -1
                    }, a.prototype.cancelEventBubbling = function(n) {
                        n = sj_ev(n);
                        sj_sp(n)
                    }, a.prototype.highlightSuggestion = function(n) {
                        this.unHighlightSuggestionHandler();
                        this._currentSuggestion = n;
                        this.addHighlightClassName(this._currentSuggestion);
                        this._currentSuggestion != n && this.addHighlightClassName(n);
                        this._searchBox.setAttribute("aria-activedescendant", n.id);
                        n.setAttribute("aria-selected", "true")
                    }, a.prototype.unHighlightSuggestionHandler = function() {
                        this._currentSuggestion && (this.removeHighlightClassName(this._currentSuggestion), this._currentSuggestion.removeAttribute("aria-selected"), this._currentSuggestion = null)
                    }, a.prototype.clearSelectedSuggestion = function() {
                        this.setSearchValue();
                        this.unHighlightSuggestionHandler();
                        this._searchBox.removeAttribute("aria-activedescendant")
                    }, a.prototype.addHighlightClassName = function(n) {
                        u.test(n.className) || (n.className += " " + r)
                    }, a.prototype.removeHighlightClassName = function(n) {
                        f.RemoveClassName(n, u)
                    }, a.prototype.onMouseDownSuggestion = function(n, t) {
                        n = sj_ev(n);
                        var i = n.button;
                        i == 2 ? (this.cancelEventBubbling(n), sj_pd(n)) : t.url && (this.clickedSuggestion = t)
                    }, a.prototype.onMouseUpSuggestion = function(n, t) {
                        this.clickedSuggestion && this.clickedSuggestion == t && (n = sj_ev(n), this.config.ifrpop ? this.raiseEvent(23, t, !1, this.config.linkTarget) : this.config.clickIco && this.isClickOnElementWithClass(n, "as_icon") ? this.raiseEvent(20, t, sj_et(n)) : (this.setSearchValue(this.clickedSuggestion), sj_evt.fire("AS.Navigate", t, "mouseup"), this.raiseEvent(4, t, !1, this.config.linkTarget)), this.clickedSuggestion = null)
                    }, a.prototype.searchBoxHasFocus = function() {
                        return _d.activeElement == this._searchBox
                    }, a.prototype.setSearchValue = function(n) {
                        this.raiseEvent(19, this.selectedSuggestion, n);
                        this.selectedSuggestion = n;
                        var t = this._currentQuery;
                        this.config.trimwsnr && this._rawQuery && this._rawQuery[this._rawQuery.length - 1] == " " && (t = t + " ");
                        this.raiseEvent(12, n ? n.query : t)
                    }, a.prototype.getCssHolder = function() {
                        var n = _ge("ajaxStyles");
                        return n || (n = sj_ce("div"), n.id = "ajaxStyles", sj_b.insertBefore(n, sj_b.firstChild)), n
                    }, a.prototype.insertScriptIntoDom = function(n) {
                        var r = this,
                            t = sj_ce("script"),
                            i;
                        t.type = n.type;
                        i = n.getAttribute("src");
                        i ? t.setAttribute("src", i) : (t.setAttribute("data-bing-script", "1"), t.text = n.innerHTML);
                        n.parentNode.removeChild(n);
                        this._asContainer.appendChild(t);
                        sb_st(function() {
                            r._asContainer.contains(t) && r._asContainer.removeChild(t)
                        }, 1)
                    }, a.prototype.insertStyleIntoDom = function(t) {
                        this._ie9orLower ? (sj_ic(t.innerHTML), t.parentNode.removeChild(t)) : (t.setAttribute("data-rms", "1"), this.autoSuggestInstance.config.bi && n.Utils.AddClassName(t, "bi_preserve"), this.getCssHolder().appendChild(t))
                    }, a.prototype.createDivFromAjaxResponse = function(n) {
                        if (!n) return undefined;
                        var t = sj_ce("div");
                        return t.innerHTML = n, t
                    }, a.prototype.insertAjaxResponseDivIntoDom = function(n, t, i) {
                        var u, f, r;
                        if (t) {
                            for (u = _d.createDocumentFragment(), f = t.childNodes; f.length;) {
                                r = f[0];
                                switch (r.tagName) {
                                    case "SCRIPT":
                                        this.insertScriptIntoDom(r);
                                        break;
                                    case "STYLE":
                                        this.insertStyleIntoDom(r);
                                        break;
                                    default:
                                        i === null || i > 0 ? (u.appendChild(r), i != null && i--) : t.removeChild(r)
                                }
                            }
                            n.appendChild(u)
                        }
                    }, a
                }(n.EventRegisterer);
            n.Canvas = l
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function(n) {
        var t;
        (function(n) {
            var t = "sa_nw",
                i = /(\s|^)sa_nw/g,
                r = function() {
                    function r(t, i, r) {
                        this.config = t;
                        this._container = i;
                        this._canvas = r;
                        this._isRtl = n.Utils.GetComputedStyle(sj_b).direction == "rtl";
                        this._isRtl && this._container.setAttribute("dir", "rtl");
                        this._searchBoxElem = _ge(t.i);
                        this._outerContainer = sj_ce("div", "", "sa_as");
                        this._outerContainer.setAttribute("data-priority", "2");
                        this.hide();
                        this._container.appendChild(this._outerContainer)
                    }
                    return r.prototype.getSuggestionsDrawer = function() {
                        return this._outerContainer
                    }, r.prototype.show = function() {
                        this._outerContainer.style.display = "block"
                    }, r.prototype.hide = function() {
                        this._outerContainer.style.display = "none"
                    }, r.prototype.update = function() {
                        var f, e, r = n.Utils.GetComputedStyle(this._container.parentNode),
                            s, h;
                        if (this.config.eNw && this.config.nwRz && this._canvas.containsNextWord && this._canvas.largestNextWordElement) {
                            this.setMargins(0, 0);
                            s = n.Utils.GetComputedStyle(this._searchBoxElem);
                            n.Utils.AddClassName(this._outerContainer, t);
                            h = this._outerContainer.style.display;
                            this.setCanvasVisibility("hidden", "block");
                            var u = this._canvas.largestNextWordElement,
                                c = n.Utils.GetTextContent(u),
                                o = this.getFirstChild(u),
                                l = u.query.replace(c, ""),
                                a = o && o.innerHTML.indexOf("<strong>") > -1,
                                v = n.Utils.CalcWidth(u, o && o.textContent || c, null, a),
                                y = n.Utils.CalcWidth(u, l, s.fontSize);
                            f = y + 4;
                            e = this._outerContainer.offsetWidth - f - v - this.getNwExtraSz(u) - 4;
                            this.setCanvasVisibility("", h)
                        } else n.Utils.RemoveClassName(this._outerContainer, i), this._isRtl ? (e = (this.toFloat(r.paddingRight) + this.toFloat(r.borderRightWidth)) * -1, f = this.toFloat(r.borderLeftWidth) - this.toFloat(r.paddingLeft)) : (f = (this.toFloat(r.paddingLeft) + this.toFloat(r.borderLeftWidth)) * -1, e = this.toFloat(r.borderRightWidth) - this.toFloat(r.paddingRight));
                        this.setMargins(f, e);
                        this._searchBoxElem != null && this._searchBoxElem.dir.length > 0 && (this._outerContainer.dir = this._searchBoxElem.dir)
                    }, r.prototype.toFloat = function(n) {
                        var t = parseFloat(n);
                        return isNaN(t) ? 0 : t
                    }, r.prototype.setCanvasVisibility = function(n, t) {
                        this._outerContainer.style.visibility = n;
                        this._outerContainer.style.display = t
                    }, r.prototype.setMargins = function(n, t) {
                        this._container.style.marginLeft = n + "px";
                        this._container.style.marginRight = t + "px"
                    }, r.prototype.getFirstChild = function(n) {
                        return n && n.childNodes && n.childNodes.length > 0 && n.childNodes[0]
                    }, r.prototype.getNwExtraSz = function(t) {
                        var r = this.getFirstChild(t),
                            i;
                        return r ? (i = n.Utils.GetComputedStyle(r), this.toFloat(i.marginLeft) * 2 + this.toFloat(i.borderLeft) + this.toFloat(i.borderRight)) : 0
                    }, r
                }();
            n.Layout = r
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {}));
__extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(n, t) {
                n.__proto__ = t
            } || function(n, t) {
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
            }, n(t, i)
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function(n) {
        var t;
        (function(n) {
            function r(n) {
                return typeof n == "number" ? n : '"' + n.replace(/"/g, '\\"') + '"'
            }
            var u = "SRCHHPGUSR",
                f = "AS",
                e = 4,
                t = "AS.CurrentImpressionQuerySelected",
                i = sb_ie && sb_de.style.opacity === undefined,
                o = function(o) {
                    function s(t, i) {
                        var r = o.call(this) || this,
                            u, f, e;
                        for (r.config = t, r.autosuggest = i, r._pollInterval = 0, r._pendingRequestCount = 0, r._bRequeryOnTextChange = !0, r._hiddenFields = [], r._lastQuery = "", r._lastRawQuery = "", r._trimRegex = new RegExp("^\\s*", "g"), r._removeSpacesRegex = new RegExp("\\s+", "g"), r._lastTextChanged = "", r._textChangeSequence = 0, r.searchBoxTouchAction = function() {
                                r.config.handleDuplicateFetch && r._lastClickQuery == r.getCurrentQuery(!0) || (_d.activeElement !== r.searchBox && r.searchBox.focus(), r.onSearchBoxClick(), r._lastClickQuery = r.getCurrentQuery(!0))
                            }, r.searchBoxClickAction = function() {
                                r._lastClickQuery != r.getCurrentQuery(!0) && (r.searchBox.focus(), r.config.handleDuplicateFetch && (r._lastClickQuery = r.getCurrentQuery(!0)), r.onSearchBoxClick());
                                r.config.handleDuplicateFetch || (r._lastClickQuery = null)
                            }, r.onSubmit = function(n) {
                                var i, t;
                                if (r.cancelDefaultHandler(n), r.isEmptyQuery()) {
                                    i = _w._H && _w._H.sbeb;
                                    i && sb_st(function() {
                                        return r.hideDropDown(2)
                                    }, 5);
                                    return
                                }
                                sb_st(function() {
                                    return r.hideDropDown(2)
                                }, 5);
                                t = r.autosuggest.canvas.selectedSuggestion;
                                sj_evt.fire("AS.Navigate", t, "submit");
                                t ? r.navigate(t, !0, r.config.linkTarget) : r.submitForm(!0)
                            }, r.onSearchBoxKeyDown = function(t) {
                                var i = t.keyCode;
                                switch (i) {
                                    case 27:
                                        r.isQueryGhosted() || (r.hideDropDown(1), r.cancelDefaultHandler(t));
                                        break;
                                    case 38:
                                        r._isLayoutVisible && (r.autosuggest.canvas.selectItem(0), r.cancelDefaultHandler(t));
                                        break;
                                    case 40:
                                        r._isLayoutVisible ? r.autosuggest.canvas.selectItem(1) : r.config.fetchOnDownArrowKey && r.fetchForCurrentQuery();
                                        break;
                                    case 9:
                                        r.isQueryGhosted() || (r.config.removeSuggUrl ? sb_st(function() {
                                            var t = _d.activeElement;
                                            t != r.searchBox && (n.Utils.isChildOf(t, r.autosuggest.canvas.container) ? r.autosuggest.canvas.clearSelectedSuggestion() : r.hideDropDownOnFocusChange())
                                        }, 0) : r.hideDropDownOnFocusChange())
                                }
                            }, r.onSearchBoxClick = function() {
                                r._isLayoutVisible || r.fetchForCurrentQuery()
                            }, r.hideDropDownOnFocusChange = function(n) {
                                r.hideDropDown(1, n)
                            }, r.onTextInput = function() {
                                var n = r.searchBox.value;
                                r.triggerTextChangedEvent(n)
                            }, r.raiseEvent(5, t), u = 0, f = s.ScopeExtensions; u < f.length; u++) e = f[u], e.init(r);
                        return s.ScopeExtensions = [], r
                    }
                    return __extends(s, o), s.prototype.init = function(t) {
                        var e, u, f, r, o, s, i;
                        (this.config.globalId = t, this.config.slid = "sa_ul", this._bDisabled = this.isDisabled()) || (_w._H && _w._H.ajax ? (e = _ge("serpHeader"), e && (u = e.getElementsByTagName("form"), u && u.length > 0 && (this.searchForm = u[0], f = this.searchForm.getElementsByClassName("b_searchbox"), f && f.length > 0 && (this.searchBox = f[0])))) : (this.searchForm = _ge(this.config.f), this.searchBox = _ge(this.config.i)), this.searchForm.form && (this.config.fc = this.searchForm.form.value), this._currentImpressionQuery = this.searchBox.value, r = this.getContainer(), sj_be(r, "mousedown", function(n) {
                            return sj_sp(n)
                        }), r.style.display = "block", this.layout = this._layout = new n.Layout(this.config, r, this.autosuggest.canvas), this.layout.update(), this.registerUIElement(r), this.registerUIElement(this.searchBox), o = _ge("sb_form_go"), o && this.registerUIElement(o), this._pollInterval = this.config.d, this._pollThrottlingEnabled = this.config.t, s = this._layout.getSuggestionsDrawer(), this.autosuggest.init(this.config, s, this.searchBox), this._lastQuery = this.getQueryToFetch(), this.searchBox.setAttribute("aria-autocomplete", "both"), this.searchBox.setAttribute("aria-controls", "sw_as"), this.searchBox.setAttribute("aria-owns", "sw_as"), i = new n.EventRegistration(this), i.add(8, this.handleResponseReceived), i.add(11, this.startNoMatchTimeout), i.add(10, this.showDropDown), i.add(12, this.onUpdateText), i.add(13, this.onUpdateTextAndRequery), i.add(14, this.onUpdateGhostedText), i.add(4, this.navigate), i.add(17, this.dispose), this.autosuggest.registerEvents(i), this.bindEvents(sj_be, sj_evt.bind), this.pollForQueryChange(), this.raiseEvent(6, this))
                    }, s.prototype.setData = function(n) {
                        this.autosuggest.setData(n)
                    }, s.prototype.getCurrentImpressionQuery = function() {
                        return this._currentImpressionQuery
                    }, s.prototype.isDisabled = function() {
                        return sj_cook.get(u, f) == "0"
                    }, s.prototype.registerUIElement = function(n) {
                        sj_be(n, "touchend", sj_sp);
                        sj_be(n, "click", sj_sp)
                    }, s.prototype.addHiddenField = function(n, t) {
                        var i = sj_ce("input");
                        return i.id = "sa_" + n, i.name = n, i.value = t, i.type = "hidden", this.searchForm.appendChild(i), this.config.sbt && this._hiddenFields.push(i), i
                    }, s.prototype.cancelDefaultHandler = function(n) {
                        sj_sp(n);
                        sj_pd(n)
                    }, s.prototype.show = function() {
                        this.config.handleDuplicateFetch && this._lastClickQuery != this.getCurrentQuery(!0) && (this._lastClickQuery = this.getCurrentQuery(!0));
                        this.onSearchBoxClick()
                    }, s.prototype.getCursorPosition = function() {
                        return n.Utils.getCursorPosition(this.searchBox, !0)
                    }, s.prototype.makeAutoSuggestGPingCall = function(n) {
                        var t = _ge(n.replace("&", "")),
                            e;
                        if (t && document.images) {
                            var f = t.getAttribute("h"),
                                u = void 0,
                                i = {
                                    a: [],
                                    add: function(n, t) {
                                        this.a.push(r(n) + ":" + r(t))
                                    },
                                    get: function() {
                                        return this.a.length ? "&PR={" + this.a.join(",") + "}" : ""
                                    }
                                };
                            i.add("i", this.autosuggest.canvas.clickedSuggestion ? t.it || "m" : "k");
                            this.autosuggest.ghostInstValue && i.add("ghc", this.autosuggest.ghostInstValue);
                            t.panel && i.add("et", sb_gt() - t.panel.ot);
                            u = this.autosuggest.data && this.autosuggest.data.Inst ? this.autosuggest.data.Inst.IG : null;
                            u && f && (e = new Image, e.src = _G.gpUrl + "IG=" + u + "&" + f + i.get())
                        }
                        return !0
                    }, s.prototype.navigate = function(n, t, i) {
                        var u = this,
                            r;
                        sb_st(function() {
                            return u.hideDropDown(2)
                        }, 5);
                        this.makeAutoSuggestGPingCall(n.id);
                        r = n.query;
                        r != undefined && this.updateSearchBoxValue(r);
                        this.config.sbt && n.addInst && !n.nav ? this.submitForm(t, n.url) : this.navigateToUrl(n, t, i)
                    }, s.prototype.submitForm = function(n, i) {
                        var e, c, r, u, s, h, f;
                        if (this.config.sbt) {
                            for (e = void 0; e = this._hiddenFields.shift();) this.searchForm.removeChild(e);
                            this._hiddenFields = []
                        }
                        if (n && (this.raiseEvent(15), this.config.bi && this._currentImpressionQuery === this.searchBox.value)) {
                            sj_evt.fire(t);
                            return
                        }
                        this._instrumentationData = this.autosuggest.getAllSuggestionInstObject(null, n);
                        c = this.getCustomUrlParams(i);
                        r = _ge("sa_ghc");
                        r && r.parentNode.removeChild(r);
                        for (var l = 0, o = void 0, a = [this._instrumentationData, c]; o = a[l++];)
                            for (u in o) r = _ge("sa_" + u), s = o[u], r ? r.value = s : this.addHiddenField(u, s);
                        this.autosuggest.ghostInstValue = 0;
                        n || sj_evt.fire("onSearch", this.searchForm);
                        this.makeSearchboxGPingCall();
                        this.fireEvt ? (h = this.searchForm.getAttribute("action"), i && this.searchForm.setAttribute("action", i), this.searchForm.submit(), this.firePartnerEvents(n), h && this.searchForm.setAttribute("action", h)) : _w._H && _w._H.ajax && _w.sj_isAjax && n || this.searchForm.submit();
                        this.fireEvt && (this.autosuggest.canvas.selectedSuggestion = null, this.autosuggest.ghostInstValue = 0, f = _ge("sa_ghc"), !this._instrumentationData.ghc && f && f.parentNode.removeChild(f))
                    }, s.prototype.makeSearchboxGPingCall = function() {
                        var t = this.searchForm.getAttributeNode("onsubmit"),
                            n;
                        t && _w.si_T && (n = t.value.match(/si_T\('(.*)'\)/), n && n[1] && _w.si_T(n[1]))
                    }, s.prototype.isMsbSuggestion = function(n) {
                        return n == "Bookmark" || n == "Building" || n == "Person" || n == "Qna"
                    }, s.prototype.navigateToUrl = function(i, r, u) {
                        if (i.stype == n.BingAtWorkDataTypes.Bookmarks) this.autosuggest.onBfbNavigateCallback(i.id);
                        else if (i.stype == n.BingAtWorkDataTypes.People)
                            if (this.config.msbSusR) this.autosuggest.onSubstrateNavigateCallback(i.id);
                            else this.autosuggest.onBfbNavigateCallback(i.id);
                        else if (this.isMsbSuggestion(i.stype)) this.autosuggest.onBfbNavigateCallback(i.id);
                        if (this.searchForm.onsubmit) this.searchForm.onsubmit(null);
                        if (this.firePartnerEvents(r), this.config.bi && this._currentImpressionQuery === i.query) {
                            sj_evt.fire(t);
                            return
                        }
                        var f = i.url + (i.addInst ? this.autosuggest.getAllSuggestionInstUrl() : "");
                        f = this.addExtraQueryStrings(f);
                        i.nav && !n.Utils.GetQueryStringParam(f, "form") && (f = this.addFormCode(f));
                        u ? _w.open(f, u) : typeof sj_lc != "undefined" ? sj_lc(f) : _w.location.href = f
                    }, s.prototype.firePartnerEvents = function(n) {
                        !n && this.fireEvt && this.fireEvt(this.searchForm, "ASSugClicked")
                    }, s.prototype.getCustomUrlParams = function(n) {
                        var r = {},
                            t;
                        if (n)
                            for (var i = void 0, f = /\+/g, e = /([^&=]+)=?([^&]*)/g, u = function(n) {
                                    return decodeURIComponent(n.replace(f, " "))
                                }, o = n.substring(n.indexOf("?") + 1); i = e.exec(o);) t = u(i[1]).toLowerCase(), t !== "q" && t !== "form" && (r[t] = u(i[2]));
                        return r
                    }, s.prototype.bindEvents = function(n, t) {
                        var i = this,
                            r;
                        n(sj_b, "click", this.hideDropDownOnFocusChange);
                        n(sj_b, "touchend", this.hideDropDownOnFocusChange);
                        n(this.searchForm, "submit", this.onSubmit);
                        n(this.searchBox, "keydown", this.onSearchBoxKeyDown);
                        "ontouchend" in _w && n(this.searchBox, "touchend", this.searchBoxTouchAction);
                        n(this.searchBox, "click", this.searchBoxClickAction);
                        this.fireEvt && n(_w, "blur", this.hideDropDownOnFocusChange);
                        r = function() {
                            t("focusChange", function(n) {
                                return i.focusChange(n)
                            });
                            t("hideDrawer", function() {
                                return i.hideDropDown(3)
                            })
                        };
                        r();
                        this.config.bi && t("ajax.load", function(n) {
                            var t = n && n[1];
                            t && t.isInstantRequest && (i._currentImpressionQuery = t.query || i.searchBox.value, i.pollForQueryChange(), r())
                        });
                        "oninput" in this.searchBox && n(this.searchBox, "input", this.onTextInput)
                    }, s.prototype.fetchForCurrentQuery = function() {
                        (this._noResultsTimeout && sb_ct(this._noResultsTimeout), this._bDisabled) || (this._lastQuery = null, this.fetchSuggestions(this.getQueryToFetch(), this.getCurrentQuery(!0)))
                    }, s.prototype.showDropDown = function() {
                        this.addAccessibilityAttributes();
                        this._layout.update();
                        this._isLayoutVisible || (sj_evt.fire("focusChange", this.searchBox), this._layout.show(), this._isLayoutVisible = !0, sb_i6 && sj_evt.fire("autosuggestShown", this.searchBox), sj_evt.fire("onPopTR"))
                    }, s.prototype.hideDropDown = function(n, t) {
                        n != 0 && (this._lastClickQuery = null);
                        this._isLayoutVisible && (this._layout.hide(), this._isLayoutVisible = !1, n != 0 && (this._lastQuery = this.getQueryToFetch()), this.raiseEvent(16), this.autosuggest.finalizeKeystroke(), t && this.config.hdm && sj_pd(t), _w._H && sj_evt.fire("ASHide"), this.autosuggest.setQuery(undefined));
                        sj_evt.fire("autosuggestHide", this.searchBox, n)
                    }, s.prototype.focusChange = function(n) {
                        n[1] !== this.searchBox && this.hideDropDown(1)
                    }, s.prototype.startNoMatchTimeout = function() {
                        var n = this;
                        this._noResultsTimeout = sb_st(function() {
                            return n.hideDropDown(0)
                        }, 50)
                    }, s.prototype.onUpdateText = function(n) {
                        this.getCurrentQuery() != n && (this._bRequeryOnTextChange = !1);
                        this.updateSearchBoxValue(n)
                    }, s.prototype.updateSearchBoxValue = function(t, r) {
                        var u = r ? t + r : t,
                            f;
                        this._autoCompletedPrefixLength = r ? t.length : null;
                        u !== null && (this.searchBox.value = u, i || this.searchBox.setAttribute("value", u), f = u.length, f && this.getCurrentQuery() != t && n.Utils.SetSelectionRange(this.searchBox, f, f), t && t != this._lastTextChanged && this.triggerTextChangedEvent(t))
                    }, s.prototype.onUpdateTextAndRequery = function(t, i) {
                        if (this._bRequeryOnTextChange = !0, this.updateSearchBoxValue(t), !i) {
                            var r = t.length;
                            this.searchBox.focus();
                            n.Utils.SetSelectionRange(this.searchBox, r, r)
                        }
                    }, s.prototype.onUpdateGhostedText = function(n, t, i) {
                        this._bRequeryOnTextChange = i === undefined ? !0 : i;
                        this.updateSearchBoxValue(n, t)
                    }, s.prototype.triggerTextChangedEvent = function(n) {
                        this._lastTextChanged = n;
                        this.autosuggest.raiseTextChanged(n, ++this._textChangeSequence)
                    }, s.prototype.pollForQueryChange = function() {
                        var u = this,
                            t, n, r;
                        this._bDisabled || (t = this.getCurrentQuery(!0), this._lastRawQuery != t && (this.autosuggest.setRawQuery(t), this._lastRawQuery = t, this.config.bi && sj_evt.fire("AS.RawQueryChanged"), n = this.getQueryToFetch(), this._lastQuery == n && this._bRequeryOnTextChange || i || this.searchBox.setAttribute("value", n), n != this._lastQuery && (this._bRequeryOnTextChange && !this.suppressRequestForQuery ? this.fetchSuggestions(n, t) : this.suppressRequestForQuery && this.config.eNw && this._bRequeryOnTextChange ? this.hideDropDown(4) : this._bRequeryOnTextChange || (this._bRequeryOnTextChange = !0), this._lastQuery = n)), r = this._pollInterval, this._pollThrottlingEnabled && (r *= 1 << Math.max(0, this._pendingRequestCount - e + 1) / 2), sb_st(function() {
                            return u.pollForQueryChange()
                        }, r))
                    }, s.prototype.fetchSuggestions = function(n, t) {
                        this._noResultsTimeout && sb_ct(this._noResultsTimeout);
                        this.autosuggest.setCursorPosition(this.adjustCursorPositionForModifiedQuery(t, n));
                        this.autosuggest.setQuery(n);
                        n.length != 0 || this.config.fetchOnEmpty || this.hideDropDown(0);
                        this._pendingRequestCount++
                    }, s.prototype.adjustCursorPositionForModifiedQuery = function(n, t) {
                        var r = this.getCursorPosition(),
                            i;
                        if (t !== n && t != "")
                            for (i = 0; i < n.length && n[i] != t[0]; i++) r--;
                        return r
                    }, s.prototype.handleResponseReceived = function() {
                        this._pendingRequestCount--
                    }, s.prototype.getQueryToFetch = function() {
                        var t = this.getCurrentQuery();
                        return this.config.trimwsnr && (t = n.Utils.TrimmedQueryFromSuggestions(this.autosuggest.canvas.currentSuggestionList, t)), t
                    }, s.prototype.isQueryGhosted = function() {
                        return !!this._autoCompletedPrefixLength
                    }, s.prototype.getCurrentQuery = function(n) {
                        var t = this._autoCompletedPrefixLength ? this.searchBox.value.substr(0, this._autoCompletedPrefixLength) : this.searchBox.value;
                        return n ? t : t.replace(this._trimRegex, "").replace(this._removeSpacesRegex, " ").toLowerCase()
                    }, s.prototype.getPartnerCode = function(n) {
                        var t = n.indexOf("pc"),
                            i;
                        return t >= 0 ? (i = n.indexOf("&", t), i >= 0 ? "&" + n.substr(t, i - t) : "&" + n.substr(t)) : ""
                    }, s.prototype.checkMonitr = function(n) {
                        var t = n.indexOf("form=monitr");
                        return t >= 0 ? "&" + n.substr(t, 11) : ""
                    }, s.prototype.addExtraQueryStrings = function(n) {
                        if (this.config.pv) {
                            var t = document.URL.indexOf("pubcode"),
                                i = document.URL.substr(t + 8, 32);
                            return n + "&pubcode=" + i + "&pubexp=1&msbqf=false" + this.getPartnerCode(document.URL) + this.checkMonitr(document.URL)
                        }
                        return n
                    }, s.prototype.addFormCode = function(n) {
                        return n + "&form=" + this.searchForm.form.defaultValue
                    }, s.prototype.getLastRequestedQuery = function() {
                        return this._lastQuery
                    }, s.prototype.notifyDeleteHistory = function(n) {
                        this.raiseEvent(22, n)
                    }, s.prototype.dispose = function() {
                        this.clearEvents();
                        this.bindEvents(sj_ue, sj_evt.unbind);
                        sb_ct(this._noResultsTimeout)
                    }, s.prototype.isEmptyQuery = function() {
                        var n = _ge("sb_form_q");
                        return n && !n.getAttribute("value")
                    }, s.prototype.addAccessibilityAttributes = function() {
                        var n = this.getContainer();
                        n && (n.setAttribute("role", "listbox"), n.setAttribute("aria-label", sa_loc.Suggestions))
                    }, s.prototype.getContainer = function() {
                        return _ge(this.config.c || "sw_as")
                    }, s.ScopeExtensions = [], s
                }(n.EventRegisterer);
            n.SearchForm = o
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function(n) {
        var t;
        (function(n) {
            var t = function() {
                    function t() {}
                    return t.prototype.getCallbacks = function() {
                        var t = new n.EventRegistration(this);
                        return t.add(11, this.onNoResults), t.add(10, this.onSuggestionsRendered), t
                    }, t.prototype.set = function(n) {
                        this._data = n;
                        this._data.currentQuery.length <= 1 && (this._lastQueryWithNoResults = null)
                    }, t.prototype.match = function() {
                        return this._lastQueryWithNoResults && this._data.currentQuery.substr(0, this._lastQueryWithNoResults.length) == this._lastQueryWithNoResults
                    }, t.prototype.onNoResults = function(n) {
                        this._lastQueryWithNoResults = n
                    }, t.prototype.onSuggestionsRendered = function(t, i, r, u, f) {
                        f == n.DataSources.Web && (this._lastQueryWithNoResults = null)
                    }, t
                }(),
                i = function() {
                    function t(n) {
                        this._searchFormInstance = n;
                        this._exceededNextWordLimit = !1
                    }
                    return t.prototype.getCallbacks = function() {
                        return new n.EventRegistration(this)
                    }, t.prototype.set = function() {
                        var t = this._searchFormInstance.getCurrentQuery(),
                            i = this._searchFormInstance.searchBox.offsetWidth,
                            r = n.Utils.CalcWidth(this._searchFormInstance.searchForm, t),
                            u = r / i;
                        this._exceededNextWordLimit = u > .7
                    }, t.prototype.match = function() {
                        return this._exceededNextWordLimit
                    }, t
                }(),
                r = function() {
                    function r() {
                        this._rules = []
                    }
                    return r.prototype.init = function(t) {
                        var i = new n.EventRegistration(this);
                        i.add(6, this.onSearchFormInitialized);
                        t.registerEvents(i)
                    }, r.prototype.onSearchFormInitialized = function(n) {
                        this._searchFormInstance = n;
                        this.addRules();
                        this.addCallbacks()
                    }, r.prototype.addRules = function() {
                        var n = this._searchFormInstance.config;
                        n.eNw && n.nwLim && this._rules.push(new i(this._searchFormInstance));
                        n.suppnores && this._rules.push(new t(n))
                    }, r.prototype.addCallbacks = function() {
                        var o = this._rules.length,
                            i, r, t, u, e, f;
                        if (o)
                            for (i = this._searchFormInstance.autosuggest, r = new n.EventRegistration(this), r.add(18, this.onTextChanged), i.registerEvents(r), t = 0, u = this._rules; t < u.length; t++) e = u[t], f = e.getCallbacks(), f && i.registerEvents(f)
                    }, r.prototype.updateDataForRules = function() {
                        var n, t, i;
                        for (this._data = {
                                currentQuery: this._searchFormInstance.getCurrentQuery()
                            }, n = 0, t = this._rules; n < t.length; n++) i = t[n], i.set(this._data)
                    }, r.prototype.getSuppressRequestForQuery = function() {
                        var n, t, i;
                        if (this._data.currentQuery.length > 1)
                            for (n = 0, t = this._rules; n < t.length; n++)
                                if (i = t[n], i.match()) return 1;
                        return 0
                    }, r.prototype.onTextChanged = function() {
                        this.updateDataForRules();
                        this._searchFormInstance.suppressRequestForQuery = this.getSuppressRequestForQuery()
                    }, r
                }();
            n.SearchForm.ScopeExtensions.push(new r)
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function(n) {
        var t;
        (function(n) {
            var r = 10,
                t = AutoSuggest.Service.SuggestionAttributes,
                u = "ich",
                f = function() {
                    function u() {}
                    return u.prototype.init = function(t) {
                        var i, u;
                        t.config.removeSuggUrl && (i = new n.EventRegistration(this), i.add(6, this.internalInit), t.registerEvents(i), u = t.config.removeTextLength, u && sj_ic('#sw_as .sa_tmHS, .rtl #sw_as .sa_as[dir="ltr"] .sa_tmHS { padding-right: {0}px; padding-left: initial; } .rtl #sw_as .sa_as .sa_tmHS { padding-right: initial; padding-left: {0}px; }'.replace(/\{0\}/g, (u + r).toString())))
                    }, u.prototype.internalInit = function(t) {
                        var f = this,
                            r, u;
                        return this.searchForm = t, r = _ge("sb_form_go"), r && r.setAttribute("tabindex", "-1"), u = new n.EventRegistration(this), u.add(19, this.setTabIndexes), t.autosuggest.canvas.registerEvents(u), new i(t.autosuggest, function(n, t) {
                            return f.getUrl(n, t)
                        }, function(n, t, i) {
                            return f.handleResult(n, t, i)
                        })
                    }, u.prototype.getUrl = function(n, t) {
                        return n.getAttribute("href") == "#rm" || n.className.indexOf("as_hr") != -1 ? this.searchForm.config.removeSuggUrl.replace("%7b0%7d", encodeURIComponent(t.query)) : undefined
                    }, u.prototype.setTabIndexes = function() {
                        for (var r, t, f, u = [], i = 0; i < arguments.length; i++) u[i] = arguments[i];
                        if (document.querySelectorAll)
                            for (r = this.searchForm.autosuggest.canvas.container.querySelectorAll('a[ich="1"]'), t = 0; t < r.length; t++) f = "1", u[1] && n.Utils.isChildOf(r[t], u[1]) && (f = "0"), r[t].setAttribute("tabindex", f)
                    }, u.prototype.handleResult = function(n, i) {
                        var u = JSON.parse(n),
                            r;
                        u.success && (r = i.offsetHeight, i.className = "sa_rmvd", [t.InstData, t.Url, t.Query, t.AriaLabel].map(function(n) {
                            delete i[n];
                            i.removeAttribute(n)
                        }), i.style.paddingTop = i.style.paddingBottom = "0", i.style.height = r + "px", this.searchForm.notifyDeleteHistory(r - 2))
                    }, u
                }(),
                i;
            n.SearchForm.ScopeExtensions.push(new f);
            i = function() {
                function i(t, i, r) {
                    var u = this,
                        f;
                    this._autosuggest = t;
                    this._getUrl = i;
                    this._handleResponse = r;
                    f = new n.EventRegistration(this);
                    f.add(20, function(n, t) {
                        u.isValidLink(t) && u.process(t, !0)
                    });
                    t.canvas.registerEvents(f);
                    this._container = t.canvas.container;
                    sj_be(this._container, "mousedown", function(n) {
                        u.isValidLink(sj_et(n)) && sj_sp(n)
                    }, !0);
                    sj_be(this._container, "click", function(n) {
                        var t = sj_et(n),
                            i = n.screenX != 0 && n.screenY != 0;
                        u.isValidLink(t) && u.process(t, i) && (sj_sp(n), sj_pd(n))
                    }, !0)
                }
                return i.prototype.process = function(n, t) {
                    var i, r, u;
                    if (t === void 0 && (t = !1), i = this.getSuggestionContainer(n), !i) throw new Error("Suggestion container not found.");
                    return (r = this._getUrl(n, i), r) ? (this.sendRequest(r, i, t), u = this.getGpingData(i), Log.Log("Request", "Delete", "Click", !1, "ImpressionGuid", this._autosuggest.data.Inst.IG, "AppNS", u.appNs, "K", u.k), !0) : !1
                }, i.prototype.isValidLink = function(n) {
                    return n && (n.tagName == "A" && !!n.getAttribute(u) || n.className.indexOf("as_hr") != -1)
                }, i.prototype.sendRequest = function(n, t, i) {
                    var u = this,
                        r = sj_gx();
                    r.open("GET", n, !0);
                    r.onreadystatechange = function() {
                        r.readyState == 4 && r.status == 200 && u._handleResponse(r.responseText, t, i)
                    };
                    r.withCredentials !== undefined && (r.withCredentials = !0);
                    r.send()
                }, i.prototype.getSuggestionContainer = function(n) {
                    while (n && n != this._container && !n[t.Query]) n = n.parentElement;
                    return n[t.Query] ? n : undefined
                }, i.prototype.getGpingData = function(n) {
                    var i = n.getAttribute("h"),
                        t;
                    if (!i) throw new Error("Missing 'h' attribute on suggestion element.");
                    if (t = i.replace("ID=", "").split(","), t.length != 2) throw new Error("Invalid 'h' attribute on suggestion element.");
                    return {
                        appNs: t[0],
                        k: t[1]
                    }
                }, i
            }()
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function() {
        for (var n, a, t = sa_config, v = new Bing.AS.Canvas, y = Bing.AS.CommonPrefixDataProvider ? new Bing.AS.CommonPrefixDataProvider : new Bing.AS.DataProvider, f, e, o, s, h, c, r, i, u = 0, l = t.enabledDataSources; u < l.length; u++) n = l[u], (n === Bing.AS.DataSources.BingAtWork || n === Bing.AS.DataSources.Substrate || n === Bing.AS.DataSources.MicrosoftSearchInBing) && (i || (i = AutoSuggest.BingAtWorkWebTelemetry ? new AutoSuggest.BingAtWorkWebTelemetry(t, "AS") : null), r || (r = Bing.AS.WebClientInstrumentation ? new Bing.AS.WebClientInstrumentation : null)), n === Bing.AS.DataSources.BingAtWork ? (f = Bing.AS.CachingDataProvider ? new Bing.AS.CachingDataProvider(n) : Bing.AS.BingAtWorkDataProvider ? new Bing.AS.BingAtWorkDataProvider : null, s = Bing.AS.BingAtWorkSuggestionsParserV3 ? new Bing.AS.BingAtWorkSuggestionsParserV3(t) : null) : n === Bing.AS.DataSources.Substrate ? (e = Bing.AS.SubstrateDataProvider ? new Bing.AS.SubstrateDataProvider(i) : null, h = Bing.AS.SubstrateSuggestionsParser ? new Bing.AS.SubstrateSuggestionsParser(t) : null) : n === Bing.AS.DataSources.MicrosoftSearchInBing && (o = Bing.AS.MsbDataProvider ? new Bing.AS.MsbDataProvider : null, c = Bing.AS.MsbSuggestionsParser ? new Bing.AS.MsbSuggestionsParser(t) : null);
        a = new Bing.AS.WebCore(v, y, f, e, o, r, s, h, c, i);
        sa_inst = new Bing.AS.SearchForm(t, a);
        sa_inst.init("sa_inst");
        sa_eL && sa_inst.show();
        _w.sj_evt && sj_evt.fire("autoSugLoaded");
        sj_evt.bind("ajax.load", function(n) {
            var t = n && n[1];
            t && t.isInstantRequest && _w.sj_evt && sj_evt.fire("autoSugLoaded")
        })
    }()