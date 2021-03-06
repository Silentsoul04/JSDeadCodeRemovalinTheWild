define("modules/clean/open_in_app/actions", ["require", "exports", "tslib", "modules/clean/open_in_app/types", "modules/clean/open_in_mobile_app"], function(e, t, i, r, n) {
        "use strict";

        function a() {
            var e = navigator.userAgent || "",
                t = e.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return !t || parseInt(t[1], 10) >= 9
        }

        function o(e, t) {
            var i = t.onAppNeeded,
                o = t.onAppInstalled;
            r.areUrlsIOS(e) ? n.default.open_ios(e.iOSAppUrl, e.iOSAppStoreUrl, a(), i, o) : r.areUrlsAndroid(e) && n.default.open_android_intent(e.androidAppUrl)
        }

        function s(e) {
            var t;
            if (r.areUrlsIOS(e)) t = e.iOSAppUrl;
            else {
                if (!r.areUrlsAndroid(e)) return;
                t = e.androidAppUrl
            }
            var i = document.createElement("iframe");
            i.setAttribute("class", "open-in-app-transport"), i.setAttribute("src", t), i.setAttribute("style", "display: none"), document.body.appendChild(i)
        }

        function l() {
            n.default.cleanup()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = i.__importDefault(n), t.openInApp = o, t.openImmediately = s, t.cleanUp = l
    }), define("modules/clean/open_in_mobile_app", ["require", "exports", "tslib", "jquery", "modules/clean/analytics", "modules/core/exception", "modules/core/i18n", "modules/clean/sharing/constants"], function(e, t, i, r, n, a, o, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importDefault(r), n = i.__importStar(n);
        var l = (function() {
            function e() {}
            return e.initClass = function() {
                var e = this;
                this.vischange_listener = null, this.open_app_mode = !0, this.try_open_ios_9 = function(t, i, r, n) {
                    return void 0 === r && (r = function() {}), void 0 === n && (n = function() {}), e.vischange_listener || (e.vischange_listener = function(t) {
                        return e.open_app_mode = !0, n()
                    }, document.addEventListener("visibilitychange", e.vischange_listener)), e.open_app_mode ? (e.open_app_mode = !1, e._onOpenLoggingHandler(), r(), window.location = t) : (e._onInstallLoggingHandler(), window.location = i)
                }, this.fallback_will_launch = !1, this.try_open = function(t, i, a) {
                    if (e._onOpenLoggingHandler(), !e.fallback_will_launch) {
                        var o = r.default("body"),
                            l = function() {
                                var e = r.default("<iframe />", {
                                    src: t,
                                    style: "display: none;"
                                });
                                return o.append(e)
                            },
                            c = !1,
                            u = function(e) {
                                return c = !0
                            };
                        document.addEventListener("visibilitychange", u);
                        var d = !1,
                            p = function(e) {
                                return d = !0
                            };
                        window.addEventListener("pagehide", p), null != a && n.ShareTibEventLogger.log_unauth("CLICK_MOBILE_OPEN", s.SHARE_ACTION_ORIGIN_TYPE.WEB_MOBILE, {
                            scl_url: a
                        }), l();
                        var m = Date.now(),
                            f = function() {
                                if (e.fallback_will_launch = !1, document.removeEventListener("visibilitychange", u), window.removeEventListener("pagehide", p), !d && !c && Date.now() < m + 4700) return null != a && n.ShareTibEventLogger.log_unauth("CLICK_MOBILE_INSTALL", s.SHARE_ACTION_ORIGIN_TYPE.WEB_MOBILE, {
                                    scl_url: a
                                }), window.location.replace(i)
                            };
                        return setTimeout(f, 3200), e.fallback_will_launch = !0
                    }
                }
            }, e._onOpenLoggingHandler = function() {}, e._onInstallLoggingHandler = function() {}, e.registerLoggingHandlers = function(e, t) {
                return this._onOpenLoggingHandler = e, this._onInstallLoggingHandler = t
            }, e.open_on_click = function(e, t, i, n, a, s, l) {
                var c = this;
                void 0 === s && (s = null);
                var u = function(i) {
                    if (i.preventDefault(), l) return c.open_android_intent(l);
                    if (a) {
                        n || (n = r.default("<div/>"));
                        var u = n.text();
                        return c.try_open_ios_9(e, t, function() {
                            return n.text(o._("Install app?"))
                        }, function() {
                            return n.text(u)
                        })
                    }
                    return c.try_open(e, t, s)
                };
                return r.default(i).on("click", u)
            }, e.open_ios = function(e, t, i, r, n) {
                return void 0 === r && (r = function() {}), void 0 === n && (n = function() {}), i ? this.try_open_ios_9(e, t, r, n) : this.try_open(e, t)
            }, e.open_android_intent = function(e) {
                return a.assert(e && e.startsWith("intent://www.dropbox.com/sm/launch_intent_or_fallback_page"), "intentUrl must use intent:// protocol"), this._onOpenLoggingHandler && this._onOpenLoggingHandler(), window.location.href = e
            }, e.redirect_on_load = function(e, t) {
                return this.try_open(e, t)
            }, e.cleanup = function() {
                if (this.vischange_listener) return document.removeEventListener("visibilitychange", this.vischange_listener)
            }, e
        })();
        l.initClass(), t.default = l
    }), define("modules/clean/react/file_viewer/app_download_interstitial/app_download_interstitial", ["require", "exports", "tslib", "external/classnames", "react", "spectrum/button", "spectrum/file_icon", "spectrum/icon_content", "spectrum/icon_form", "modules/clean/open_in_app/types", "modules/clean/static_urls", "modules/core/i18n", "modules/clean/react/css"], function(e, t, i, r, n, a, o, s, l, c, u, d, p) {
        "use strict";

        function m(e) {
            var t = e.onClose;
            return n.default.createElement("header", null, n.default.createElement("h1", {
                className: "DropboxLogo"
            }, n.default.createElement("img", {
                src: u.static_url("/static/images/index/rebrand/logos/glyphs/glyph_blue-vfla3iXuq.svg"),
                className: "DropboxLogo--glyph",
                alt: "Dropbox"
            }), n.default.createElement("img", {
                src: u.static_url("/static/images/index/rebrand/logos/wordmarks/wordmark_black-vflmhE3RY.svg"),
                className: "Dropbox--wordmark",
                alt: "Dropbox"
            })), n.default.createElement("button", {
                className: "button-as-link app-download-interstitial-close",
                "aria-label": "Close",
                onClick: t
            }, n.default.createElement(l.IconForm, {
                name: "cancel"
            })))
        }

        function f(e) {
            var t = e.appUrl,
                i = e.onContinue,
                r = e.onAppDownload;
            return n.default.createElement("div", {
                className: "app-download-interstitial-ctas"
            }, n.default.createElement(a.Button, {
                className: "app-download-interstitial-cta",
                size: "large",
                href: t,
                onClick: r
            }, d._("Get the app")), n.default.createElement(a.Button, {
                className: "app-download-interstitial-cta",
                size: "large",
                variant: "secondary",
                onClick: i
            }, d._("Or continue to website")))
        }

        function _(e, t) {
            return e && t ? d._("%(owner)s (%(team)s) shared this with you.").format({
                owner: e,
                team: t
            }) : e && !t ? d._("%(owner)s shared this with you.").format({
                owner: e
            }) : !e && t ? d._("%(team)s shared this with you.").format({
                team: t
            }) : d._("This file was shared with you.")
        }

        function g(e) {
            var t = e.fileOrFolderName,
                i = e.isFolder,
                r = e.ownerName,
                a = e.ownerTeamName;
            return n.default.createElement("section", {
                className: "app-download-interstitial-content"
            }, n.default.createElement("header", null, n.default.createElement("h2", null, d._("Get a better view with our mobile app"))), n.default.createElement("div", {
                className: "app-download-interstitial-content-thumbnail"
            }, i ? n.default.createElement(s.IconContent, {
                name: "folder_shared-large"
            }) : n.default.createElement(o.FileIcon, {
                path: t,
                variant: "large"
            }), n.default.createElement("p", {
                className: "app-download-interstitial-filename"
            }, t), n.default.createElement("p", {
                className: "app-download-interstitial-owner"
            }, _(r, a))))
        }

        function v(e) {
            if (e) {
                if (c.areUrlsIOS(e)) return e.iOSAppStoreUrl;
                if (c.areUrlsAndroid(e)) return e.androidAppUrl
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importDefault(r), n = i.__importDefault(n);
        var w = function(e) {
                var t = e.className,
                    i = e.open_in_app_data,
                    a = e.fileOrFolderName,
                    o = e.isFolder,
                    s = e.onClose,
                    l = e.onContinue,
                    c = e.onAppDownload,
                    u = e.ownerName,
                    d = e.ownerTeamName;
                return n.default.createElement("section", {
                    className: r.default("app-download-interstitial-container", t)
                }, n.default.createElement(m, {
                    onClose: s
                }), n.default.createElement(g, {
                    isFolder: o,
                    fileOrFolderName: a,
                    ownerName: u,
                    ownerTeamName: d
                }), n.default.createElement(f, {
                    onContinue: l,
                    onAppDownload: c,
                    appUrl: v(i)
                }))
            },
            S = p.requireCssWithComponent(w, ["/static/css/index/obsidian/logo-vflbo_vhR.css", "/static/css/file_viewer/app_download_interstitial-vflfWF8_8.css"]);
        t.AppDownloadInterstitial = S
    }), define("modules/clean/react/file_viewer/controller_mode", ["require", "exports", "modules/clean/api_v2/noauth_client", "modules/clean/api_v2/user_client"], function(e, t, i, r) {
        "use strict";

        function n(e, t) {
            return (new r.UserApiV2Client).ns("file_viewer").rpc("get_mode", e, {
                subjectUserId: t.id
            })
        }

        function a(e) {
            return (new i.NoAuthApiV2Client).ns("file_viewer").rpc("logged_out/get_mode", e, {})
        }

        function o(e, t) {
            return null != t ? n(e, t) : a(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fetchControllerMode = o
    }), define("modules/clean/react/file_viewer/data/actions", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/react/file_viewer/constants", "modules/clean/file_store/actions", "modules/clean/previews/data/actions", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer/data/selectors", "modules/clean/file_store/utils", "modules/clean/react/file_viewer/data/types", "modules/clean/previews/data/util", "modules/clean/react/file_viewer/constants", "modules/clean/downloads", "modules/core/uri", "modules/core/browser", "modules/clean/react/file_viewer/controller_mode", "modules/clean/react/file_viewer/models", "modules/clean/react/file_viewer/file_preview_event_emitter", "modules/clean/react/watermarking/utils", "file-viewer/core", "modules/clean/react/file_viewer/prompt/campaign_api", "modules/clean/react/size_class/utils", "modules/clean/react/watermarking/selectors"], function(e, t, i, r, n, a, o, s, l, c, u, d, p, m, f, _, g, v, w, S, h, y, b, E) {
        "use strict";

        function A(e, t) {
            return void 0 === e && (e = n.DocType.default),
                function(i) {
                    i({
                        type: u.Actions.OpenSidebar,
                        payload: {
                            type: e
                        }
                    }), s.logUserAction(n.UserAction.ToggleSidebarOn, t)
                }
        }

        function M(e, t) {
            return void 0 === e && (e = n.DocType.default),
                function(i) {
                    i({
                        type: u.Actions.CloseSidebar,
                        payload: {
                            type: e
                        }
                    }), s.logUserAction(n.UserAction.ToggleSidebarOff, t)
                }
        }

        function F() {
            return {
                type: u.Actions.DismissAppDownloadInterstitial
            }
        }

        function I(e) {
            return {
                type: u.Actions.OpenFile,
                payload: {
                    fileId: e
                }
            }
        }

        function C() {
            return {
                type: u.Actions.CloseFile
            }
        }

        function T(e) {
            return function(t, i) {
                var r, n = (r = {}, r[h.FileViewerMode.Default] = fe, r[h.FileViewerMode.Documentation] = we, r[h.FileViewerMode.Commenting] = Se, r[h.FileViewerMode.Watermarking] = he, r[h.FileViewerMode.Zoom] = ye, r[h.FileViewerMode.Slack] = be, r);
                n[e] && n[e](t, i)
            }
        }

        function P(e) {
            return {
                type: u.Actions.DisableMode,
                payload: {
                    mode: e
                }
            }
        }

        function O(e) {
            return {
                type: u.Actions.EnableMode,
                payload: {
                    mode: e
                }
            }
        }

        function R(e) {
            return w.filePreviewEventEmitter.emit(p.EventType.SidebarModeSelected, v.FilePreviewSession.currentSession, {
                selected_mode: e
            }), {
                type: u.Actions.UpdateMode,
                payload: {
                    mode: e
                }
            }
        }

        function k(e) {
            var t = this;
            return function(r, n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    var t, s, l;
                    return i.__generator(this, function(i) {
                        return t = c.getFileStoreId(e), s = a.putFile(e), r(s), l = !d.previewDataPresentForFile(n(), e) && !d.previewDataInFlight(n(), e), l && r(s.payload.file.preview ? o.populateFilesPreviewData([s.payload.file]) : o.fetchPreviewData([s.payload.file])), r(I(t)), [2]
                    })
                })
            }
        }

        function D(e, t) {
            return {
                type: u.Actions.UpdateRenderStatus,
                payload: {
                    fileId: e,
                    renderStatus: t
                }
            }
        }

        function V(e) {
            return function(t, i) {
                var r = l.getCurrentFileId(i());
                r && t(D(r, e))
            }
        }

        function x() {
            return V(p.PreviewRenderStatus.Succeeded)
        }

        function L(e) {
            return {
                type: u.Actions.SetShowOverQuotaUpsell,
                payload: e
            }
        }

        function U(e) {
            return function(t, i) {
                e && void 0 === l.getShowOverQuotaUpsell(i()) && r.SilentBackgroundRequest({
                    url: "/should_show_file_preview_upsell",
                    data: {
                        _subject_uid: e.id
                    },
                    success: function(e) {
                        try {
                            var i = JSON.parse(e);
                            i && t(L(i.shouldShowFilePreviewUpsell))
                        } catch (e) {}
                    }
                })
            }
        }

        function N(e) {
            return w.filePreviewEventEmitter.emit(p.EventType.SidebarPaneSelected, v.FilePreviewSession.currentSession, {
                selected_pane: e
            }), {
                type: u.Actions.PushSidebarPane,
                payload: {
                    paneId: e
                }
            }
        }

        function W() {
            return {
                type: u.Actions.PopSidebarPane
            }
        }

        function z() {
            return {
                type: u.Actions.ResetSidebarPaneStack
            }
        }

        function H() {
            return {
                type: u.Actions.ResetSelectedSidebarControlId
            }
        }

        function B(e) {
            return {
                type: u.Actions.SetSelectedSidebarControlId,
                payload: {
                    controlId: e
                }
            }
        }

        function j(e) {
            return {
                type: u.Actions.SetCurrentCalloutType,
                payload: {
                    type: e
                }
            }
        }

        function q(e) {
            var t = e === h.SidebarVisibility.Open ? p.EventType.SidebarOpened : p.EventType.SidebarClosed;
            return w.filePreviewEventEmitter.emit(t, v.FilePreviewSession.currentSession), {
                type: u.Actions.SetSidebarVisibility,
                payload: {
                    visibility: e
                }
            }
        }

        function K(e) {
            return {
                type: u.Actions.SetPageDimensions,
                payload: {
                    pageDimensions: e
                }
            }
        }

        function Z(e) {
            return function(t, i) {
                t({
                    type: u.Actions.UpdateWatermarkOptions,
                    payload: {
                        options: e
                    }
                }), S.setLocalStorageWatermarkingState(l.getCurrentUser(i()), E.getWatermarkState(i()))
            }
        }

        function G(e) {
            return function(t, i) {
                t({
                    type: u.Actions.SwitchWatermarkingkMode,
                    payload: {
                        mode: e
                    }
                }), S.setLocalStorageWatermarkingState(l.getCurrentUser(i()), E.getWatermarkState(i()))
            }
        }

        function Y(e) {
            return function(t) {
                e.preview && t(o.overridePreviewForComments(e, e.preview)), t({
                    type: u.Actions.SwitchRevision,
                    payload: {
                        file: e
                    }
                })
            }
        }

        function Q() {
            return function(e, t) {
                var i = l.getActiveFile(t());
                i && e(o.clearCommentsPreviewOverride(i)), e({
                    type: u.Actions.RestoreRevision
                })
            }
        }

        function X(e) {
            return function(t) {
                t(a.putFile(e, e.revision_id)), e.preview && t(o.overridePreviewForComments(e, e.preview)), t({
                    type: u.Actions.SaveForwardRevision,
                    payload: {
                        revisionKey: e.revision_id
                    }
                })
            }
        }

        function J(e) {
            var t = f.URI.parse(e.href);
            t.updateQuery({
                dl: "1"
            }), m.get({
                url: t.toString()
            })
        }

        function $() {
            _.reload(!0)
        }

        function ee() {
            return function(e) {
                e({
                    type: u.Actions.PlayMedia
                })
            }
        }

        function te() {
            return function(e) {
                e({
                    type: u.Actions.PauseMedia
                })
            }
        }

        function ie() {
            return function(e) {
                e({
                    type: u.Actions.ResetStore
                })
            }
        }

        function re() {
            return {
                type: u.Actions.ForceHideToolbar
            }
        }

        function ne() {
            return {
                type: u.Actions.DisableForceHideToolbar
            }
        }

        function ae(e) {
            var t = h.FileViewerMode.Default;
            if (e) switch (e[".tag"]) {
                case "commenting_mode":
                    t = h.FileViewerMode.Commenting;
                    break;
                case "documentation_mode":
                    t = h.FileViewerMode.Documentation;
                    break;
                case "other":
                    t = h.FileViewerMode.Default
            }
            return t
        }

        function oe(e, t, r) {
            var n = this;
            return function(a, o) {
                return i.__awaiter(n, void 0, void 0, function() {
                    var n, s, c, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                a({
                                    type: u.Actions.FetchControllerModeRequest
                                }), i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, g.fetchControllerMode(e, t)];
                            case 2:
                                return n = i.sent().mode, w.filePreviewEventEmitter.emit(p.EventType.FilePreviewModeDetermined, v.FilePreviewSession.currentSession, {
                                    mode: n
                                }), void 0 !== r && b.isSmallerThanLarge(r) || (s = ae(n), c = l.getMode(o()), c && c !== h.FileViewerMode.Default || a(T(s))), [3, 4];
                            case 3:
                                return d = i.sent(), a({
                                    type: u.Actions.FetchControllerModeError,
                                    payload: d
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
        }

        function se(e, t) {
            var r = this;
            return function(n, a) {
                return i.__awaiter(r, void 0, void 0, function() {
                    var r;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, y.fetchBestCampaigns(e.id, t)];
                            case 1:
                                return r = i.sent().campaigns, n({
                                    type: u.Actions.SetBestCampaign,
                                    payload: {
                                        campaign: r[0]
                                    }
                                }), [2]
                        }
                    })
                })
            }
        }

        function le(e) {
            return {
                type: u.Actions.UpdateCurrentPageIndex,
                payload: {
                    currentPageIndex: e
                }
            }
        }

        function ce() {
            return {
                type: u.Actions.PageDown
            }
        }

        function ue() {
            return {
                type: u.Actions.PageUp
            }
        }

        function de(e) {
            return function(t, i) {
                t({
                    type: u.Actions.RegisterUser,
                    payload: {
                        user: e
                    }
                });
                var r = S.getLocalStorageWatermarkingState(e);
                if (r) Z({
                    textWatermarkingOptions: r.textWatermarkingOptions,
                    imageWatermarkingOptions: r.imageWatermarkingOptions
                })(t, i), G(r.mode)(t, i);
                else {
                    Z({
                        textWatermarkingOptions: {
                            text: S.getDefaultText(e)
                        }
                    })(t, i)
                }
            }
        }

        function pe(e, t) {
            var i = t(),
                r = l.getSidebar(i).visibility,
                n = r === h.SidebarVisibility.Open ? h.SidebarVisibility.Closed : h.SidebarVisibility.Open;
            e(q(n)), n === h.SidebarVisibility.Closed && e(me(!1))
        }

        function me(e) {
            return {
                type: u.Actions.SetTrialMode,
                payload: {
                    isTrialMode: e
                }
            }
        }

        function fe(e, t) {
            var i = t(),
                r = l.getSidebar(i).visibility,
                n = l.getMode(i);
            e(me(!1)), e(H()), r === h.SidebarVisibility.Open && e(q(h.SidebarVisibility.Closed)), n !== h.FileViewerMode.Default && e(R(h.FileViewerMode.Default))
        }

        function _e(e, t, i, r) {
            return function(n, a) {
                var o = a(),
                    s = l.getSidebar(o).visibility;
                if (l.getMode(o) === e) return void pe(n, a);
                n(me(!!r && r(o))), n(B(t)), n(z()), n(N(i)), s === h.SidebarVisibility.Closed && n(q(h.SidebarVisibility.Open)), n(R(e))
            }
        }

        function ge() {
            return {
                type: u.Actions.OverflowZoomOn
            }
        }

        function ve() {
            return {
                type: u.Actions.OverflowZoomOff
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importStar(r), m = i.__importStar(m), _ = i.__importStar(_), t.openFullScreen = function() {
            return {
                type: u.Actions.OpenFullScreen
            }
        }, t.closeFullScreen = function() {
            return {
                type: u.Actions.CloseFullScreen
            }
        }, t.openSidebar = A, t.closeSidebar = M, t.dismissAppDownloadInterstitial = F, t.openFileById = I, t.closeFile = C, t.changeMode = T, t.disableMode = P, t.enableMode = O, t.updateMode = R, t.openFile = k, t.setRenderStatusForCurrentFile = V, t.setRenderStatusSuccessForCurrentFile = x, t.fetchShowOverQuotaUpsell = U, t.pushSidebarPane = N, t.popSidebarPane = W, t.resetSidebarPaneStack = z, t.resetSelectedSidebarControlId = H, t.setSelectedSidebarControlId = B, t.setCurrentCalloutType = j, t.setSidebarVisibility = q, t.setPageDimensions = K, t.updateWatermarkOptions = Z, t.switchWatermarkingMode = G, t.switchRevisionAction = Y, t.restoreRevisionAction = Q, t.saveForwardRevision = X, t.download = J, t.pendingFileUploaded = $, t.setMediaPlaying = ee, t.setMediaPaused = te, t.resetFileViewerStore = ie, t.forceHideToolbar = re, t.disableForceHideToolbar = ne, t.fetchControllerModeAction = oe, t.fetchBestCampaignsAction = se, t.updateCurrentPageIndex = le, t.pageDown = ce, t.pageUp = ue, t.registerUser = de;
        var we = _e(h.FileViewerMode.Documentation, h.SidebarControlId.Documentation, h.SidebarPaneId.Documentation),
            Se = _e(h.FileViewerMode.Commenting, h.SidebarControlId.Comments, h.SidebarPaneId.Comments),
            he = _e(h.FileViewerMode.Watermarking, h.SidebarControlId.Watermarking, h.SidebarPaneId.Watermarking, function(e) {
                return S.allowWatermarkTrial(l.getCurrentUser(e))
            }),
            ye = _e(h.FileViewerMode.Zoom, h.SidebarControlId.Zoom, h.SidebarPaneId.Zoom),
            be = _e(h.FileViewerMode.Slack, h.SidebarControlId.Slack, h.SidebarPaneId.SlackHome);
        t.overflowZoomOn = ge, t.overflowZoomOff = ve
    }), define("modules/clean/react/file_viewer/data/reducer", ["require", "exports", "tslib", "modules/clean/react/file_viewer/data/types", "modules/clean/react/watermarking/utils", "modules/clean/react/file_viewer/constants", "file-viewer/core"], function(e, t, i, r, n, a, o) {
        "use strict";

        function s(e, n) {
            var a, s, l, c, u;
            switch (void 0 === e && (e = t.defaultState), n.type) {
                case r.Actions.CloseFile:
                    return i.__assign({}, e, {
                        currentFileId: void 0,
                        fileRevision: void 0,
                        latestFileId: void 0
                    });
                case r.Actions.OpenFile:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        currentFileId: d.fileId,
                        fileRevision: void 0,
                        latestFileId: void 0
                    });
                case r.Actions.SwitchRevision:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        fileRevision: d.file
                    });
                case r.Actions.RestoreRevision:
                    return i.__assign({}, e, {
                        fileRevision: void 0,
                        currentFileId: e.latestFileId || e.currentFileId,
                        latestFileId: void 0
                    });
                case r.Actions.SetPageDimensions:
                    var p = n.payload.pageDimensions;
                    return i.__assign({}, e, {
                        pageDimensions: p
                    });
                case r.Actions.UpdateWatermarkOptions:
                    var m = n.payload.options;
                    return i.__assign({}, e, {
                        watermark: i.__assign({}, e.watermark, {
                            textWatermarkingOptions: i.__assign({}, e.watermark.textWatermarkingOptions, m.textWatermarkingOptions),
                            imageWatermarkingOptions: i.__assign({}, e.watermark.imageWatermarkingOptions, m.imageWatermarkingOptions)
                        })
                    });
                case r.Actions.SwitchWatermarkingkMode:
                    var f = n.payload.mode;
                    return i.__assign({}, e, {
                        watermark: i.__assign({}, e.watermark, {
                            mode: f
                        })
                    });
                case r.Actions.SaveForwardRevision:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        latestFileId: d.revisionKey
                    });
                case r.Actions.UpdateMode:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        mode: d.mode
                    });
                case r.Actions.DisableMode:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        disabledModes: i.__assign({}, e.disabledModes, (a = {}, a[d.mode] = !0, a))
                    });
                case r.Actions.EnableMode:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        disabledModes: i.__assign({}, e.disabledModes, (s = {}, s[d.mode] = !1, s))
                    });
                case r.Actions.OpenFullScreen:
                    return i.__assign({}, e, {
                        isFullScreen: !0
                    });
                case r.Actions.CloseFullScreen:
                    return i.__assign({}, e, {
                        isFullScreen: !1
                    });
                case r.Actions.OpenSidebar:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        isSidebarOpen: i.__assign({}, e.isSidebarOpen, (l = {}, l[d.type] = !0, l))
                    });
                case r.Actions.CloseSidebar:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        isSidebarOpen: i.__assign({}, e.isSidebarOpen, (c = {}, c[d.type] = !1, c))
                    });
                case r.Actions.DismissAppDownloadInterstitial:
                    return i.__assign({}, e, {
                        appDownloadInterstitialDismissed: !0
                    });
                case r.Actions.SetShowOverQuotaUpsell:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        showOverQuotaUpsell: d
                    });
                case r.Actions.UpdateRenderStatus:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        renderStatuses: i.__assign({}, e.renderStatuses, (u = {}, u[d.fileId] = d.renderStatus, u))
                    });
                case r.Actions.PlayMedia:
                    return i.__assign({}, e, {
                        isMediaPlaying: !0
                    });
                case r.Actions.PauseMedia:
                    return i.__assign({}, e, {
                        isMediaPlaying: !1,
                        pauseCount: e.pauseCount ? e.pauseCount + 1 : 1
                    });
                case r.Actions.ResetStore:
                    return t.defaultState;
                case r.Actions.UpdateCurrentPageIndex:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        currentPageIndex: d.currentPageIndex
                    });
                case r.Actions.ForceHideToolbar:
                    return i.__assign({}, e, {
                        forceHideToolbar: !0
                    });
                case r.Actions.DisableForceHideToolbar:
                    return i.__assign({}, e, {
                        forceHideToolbar: !1
                    });
                case r.Actions.PopSidebarPane:
                    return e.sidebar.paneStack.length < 1 ? e : i.__assign({}, e, {
                        sidebar: i.__assign({}, e.sidebar, {
                            paneStack: e.sidebar.paneStack.slice(0, -1)
                        })
                    });
                case r.Actions.PushSidebarPane:
                    var d = n.payload;
                    return e.sidebar.paneStack.includes(d.paneId) ? e : i.__assign({}, e, {
                        sidebar: i.__assign({}, e.sidebar, {
                            paneStack: e.sidebar.paneStack.concat([d.paneId])
                        })
                    });
                case r.Actions.SetSelectedSidebarControlId:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        sidebar: i.__assign({}, e.sidebar, {
                            selectedControlId: d.controlId
                        })
                    });
                case r.Actions.ResetSidebarPaneStack:
                    return i.__assign({}, e, {
                        sidebar: i.__assign({}, e.sidebar, {
                            paneStack: []
                        })
                    });
                case r.Actions.ResetSelectedSidebarControlId:
                    return i.__assign({}, e, {
                        sidebar: i.__assign({}, e.sidebar, {
                            selectedControlId: void 0
                        })
                    });
                case r.Actions.SetCurrentCalloutType:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        currentCalloutType: d.type
                    });
                case r.Actions.SetSidebarVisibility:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        sidebar: i.__assign({}, e.sidebar, {
                            visibility: d.visibility
                        })
                    });
                case r.Actions.FetchControllerModeError:
                    return i.__assign({}, e, {
                        mode: o.FileViewerMode.Commenting
                    });
                case r.Actions.SetBestCampaign:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        campaign: d.campaign
                    });
                case r.Actions.PageDown:
                    var _ = e.currentPageIndex;
                    return void 0 === _ ? e : i.__assign({}, e, {
                        currentPageIndex: _ + 1
                    });
                case r.Actions.PageUp:
                    var _ = e.currentPageIndex;
                    return void 0 === _ ? e : i.__assign({}, e, {
                        currentPageIndex: _ - 1
                    });
                case r.Actions.RegisterUser:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        currentUser: d.user
                    });
                case r.Actions.SetTrialMode:
                    var d = n.payload;
                    return i.__assign({}, e, {
                        isTrialMode: d.isTrialMode
                    });
                case r.Actions.OverflowZoomOn:
                    return i.__assign({}, e, {
                        overflowZoom: !0
                    });
                case r.Actions.OverflowZoomOff:
                    return i.__assign({}, e, {
                        overflowZoom: !1
                    });
                default:
                    return e
            }
        }
        var l;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultState = {
            currentCalloutType: void 0,
            currentFileId: void 0,
            currentPageIndex: 0,
            fileRevision: void 0,
            latestFileId: void 0,
            forceHideToolbar: !1,
            isFullScreen: !1,
            isSidebarOpen: (l = {}, l[a.DocType.ppt] = !0, l[a.DocType.pdf] = !1, l),
            mode: o.FileViewerMode.Default,
            disabledModes: {},
            renderStatuses: {},
            showOverQuotaUpsell: void 0,
            sidebar: {
                visibility: o.SidebarVisibility.Closed,
                paneStack: [],
                selectedControlId: void 0
            },
            watermark: n.DEFAULT_WATERMARKING_STATE,
            campaign: void 0,
            overflowZoom: !1
        }, t.fileViewerReducer = s
    }), define("modules/clean/react/file_viewer/data/selectors", ["require", "exports", "tslib", "modules/clean/redux/namespaces", "modules/clean/redux/selectors", "modules/clean/file_store/selectors", "modules/clean/previews/data/selectors", "modules/clean/previews/data/preview_type_util", "external/reselect", "external/lodash", "modules/clean/react/extensions/data/selectors", "modules/clean/react/extensions/client", "file-viewer/core", "modules/clean/react/file_viewer/files2_utils"], function(e, t, i, r, n, a, o, s, l, c, u, d, p, m) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), c = i.__importStar(c), t.getFileViewerState = function(e) {
            return n.getStateAtNamespace(e, r.FILE_VIEWER_NAMESPACE_KEY)
        }, t.getIsFullScreen = function(e) {
            return t.getFileViewerState(e).isFullScreen
        }, t.getIsSidebarOpen = function(e) {
            return t.getFileViewerState(e).isSidebarOpen
        }, t.getCurrentPageIndex = function(e) {
            return t.getFileViewerState(e).currentPageIndex
        }, t.getAppDownloadInterstitial = function(e) {
            return t.getFileViewerState(e).appDownloadInterstitialDismissed
        }, t.getCurrentCalloutType = function(e) {
            return t.getFileViewerState(e).currentCalloutType
        }, t.getCurrentFileId = function(e) {
            return t.getFileViewerState(e).currentFileId
        }, t.getCurrentFile = l.createSelector(c.nthArg(0), t.getCurrentFileId, a.getFile), t.getPastFile = function(e) {
            return t.getFileViewerState(e).fileRevision
        }, t.getCurrentUser = function(e) {
            return t.getFileViewerState(e).currentUser
        }, t.getMode = function(e) {
            return t.getFileViewerState(e).mode
        }, t.getDisabledModes = function(e) {
            return t.getFileViewerState(e).disabledModes
        }, t.getSidebar = function(e) {
            return t.getFileViewerState(e).sidebar
        }, t.getAnnotationAllowed = l.createSelector(t.getMode, function(e) {
            return !m.isFiles2Enabled() || e === p.FileViewerMode.Commenting
        }), t.getIsTrialMode = function(e) {
            return t.getFileViewerState(e).isTrialMode
        }, t.getIsEditMode = function(e) {
            return t.getMode(e) === p.FileViewerMode.Watermarking
        }, t.getIsWatermarkingMode = function(e) {
            return t.getMode(e) === p.FileViewerMode.Watermarking
        }, t.getPageDimensions = function(e) {
            return t.getFileViewerState(e).pageDimensions
        }, t.getActiveFile = function(e) {
            return t.getPastFile(e) || t.getCurrentFile(e)
        }, t.getShowOverQuotaUpsell = function(e) {
            return t.getFileViewerState(e).showOverQuotaUpsell
        };
        var f = function(e, i) {
            return t.getFileViewerState(e).renderStatuses[i]
        };
        t.getSelectedPromptCampaign = function(e) {
            return t.getFileViewerState(e).campaign
        }, t.getRenderStatusForCurrentFile = function(e) {
            var i = t.getCurrentFileId(e);
            if (i) return f(e, i)
        }, t.getIsMediaPlaying = function(e) {
            return t.getFileViewerState(e).isMediaPlaying
        }, t.getPauseCount = function(e) {
            var i = t.getFileViewerState(e).pauseCount;
            return i ? i : 0
        }, t.getPreviewApiDataForCurrentFile = function(e) {
            var i = t.getCurrentFile(e);
            return o.getApiDataForFile(e, i).data
        }, t.getIsFlippingEnabled = function(e) {
            var i = t.getPreviewApiDataForCurrentFile(e);
            return !(t.getMode(e) === p.FileViewerMode.Watermarking || t.getIsMediaPlaying(e) || t.getIsFullScreen(e) && s.isSsrDoc(i))
        }, t.shouldForceHideToolbar = function(e) {
            return t.getFileViewerState(e).forceHideToolbar
        }, t.getExtensionsConfig = function(e) {
            var i = t.getActiveFile(e);
            return i && u.fileExtensionsConfigs(e)[i.file_id] ? u.fileExtensionsConfigs(e)[i.file_id] : d.newExtensionsConfig("", [], d.DisplayState.LOADING)
        }, t.isOverflowZoomMode = function(e) {
            return t.getFileViewerState(e).overflowZoom === !0
        }
    }), define("modules/clean/react/file_viewer/data/store", ["require", "exports", "modules/clean/redux/store", "modules/clean/redux/namespaces", "modules/clean/file_store/reducer", "modules/clean/react/file_viewer/data/reducer", "modules/clean/previews/data/reducer", "modules/clean/previews/data/actions", "modules/clean/file_store/actions", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/extensions/data/store"], function(e, t, i, r, n, a, o, s, l, c, u) {
        "use strict";

        function d() {
            return t.fileViewerReducerMap
        }

        function p(e, t, i) {
            var r = t.file;
            r && e.dispatch(c.openFile(r)), i && e.dispatch(c.registerUser(i))
        }

        function m(e, t) {
            e.dispatch(s.populateFilesPreviewData(t)), e.dispatch(l.putFiles(t))
        }

        function f(e, t) {
            e.dispatch(l.putFiles(t))
        }
        var _;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fileViewerReducerMap = (_ = {}, _[r.FILE_NAMESPACE_KEY] = n.fileNamespaceReducer, _[r.FILE_VIEWER_NAMESPACE_KEY] = a.fileViewerReducer, _[r.PREVIEW_NAMESPACE_KEY] = o.reducer, _), t.getStoreForFileViewer = function() {
            return u.getStore(), i.getStoreAndRegisterReducers(d())
        }, t.hydrateFileViewerNamespace = p, t.hydrateFileStore = m, t.updateFileStore = f
    }), define("modules/clean/react/file_viewer/data/types", ["require", "exports"], function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        (function(e) {
            e.CloseFile = "FileViewer/CloseFile", e.CloseFullScreen = "FileViewer/CloseFullScreen", e.CloseSidebar = "FileViewer/CloseSidebar", e.DismissAppDownloadInterstitial = "FileViewer/DismissAppDownloadInterstitial", e.DisableForceHideToolbar = "FileViewer/DisableForceHideToolbar", e.ForceHideToolbar = "FileViewer/ForceHideToolbar", e.UpdateMode = "FileViewer/UpdateMode", e.DisableMode = "FileViewer/DisableMode", e.EnableMode = "FileViewer/EnableMode", e.OpenFile = "FileViewer/OpenFile", e.OpenFullScreen = "FileViewer/OpenFullScreen", e.OpenSidebar = "FileViewer/OpenSidebar", e.PageDown = "FileViewer/PageDown", e.PageUp = "FileViewer/PageUp", e.PauseMedia = "FileViewer/PauseMedia", e.PlayMedia = "FileViewer/PlayMedia", e.PopSidebarPane = "FileViewer/PopSidebarPane", e.PushSidebarPane = "FileViewer/PushSidebarPane", e.SetSelectedSidebarControlId = "FileViewer/SetSelectedSidebarControlId", e.ResetSidebarPaneStack = "FileViewer/ResetSidebarPaneStack", e.ResetSelectedSidebarControlId = "FileViewer/ResetSelectedSidebarControlId", e.ResetStore = "FileViewer/ResetStore", e.UpdateCurrentPageIndex = "FileViewer/UpdateCurrentPageIndex", e.RestoreRevision = "FileViewer/RestoreRevision", e.SaveForwardRevision = "FileViewer/SaveForwardRevision", e.SetCurrentCalloutType = "FileViewer/SetCurrentCalloutType", e.SetShowOverQuotaUpsell = "FileViewer/SetShowOverQuotaUpsell", e.SetSidebarVisibility = "FileViewer/SetSidebarVisibility", e.SetPageDimensions = "FileViewer/SetPageDimensions", e.SetTextWatermark = "FileViewer/SetTextWatermark", e.SetImageWatermark = "FileViewer/SetImageWatermark", e.UpdateWatermarkOptions = "FileViewer/UpdateWatermarkOptions", e.SwitchWatermarkingkMode = "FileViewer/SwitchWatermarkingkMode", e.SwitchRevision = "FileViewer/SwitchRevision", e.UpdateRenderStatus = "FileViewer/UpdateRenderStatus", e.RegisterUser = "FileViewer/RegisterUser", e.SetTrialMode = "FileViewer/SetTrialMode", e.FetchControllerModeRequest = "FileViewer/FetchControllerModeRequest", e.FetchControllerModeSuccess = "FileViewer/FetchControllerModeSuccess", e.FetchControllerModeError = "FileViewer/FetchControllerModeError", e.FetchBestCampaign = "FileViewer/FetchBestCampaign", e.SetBestCampaign = "FileViewer/SetBestCampaign", e.OverflowZoomOn = "FileViewer/OverflowZoomOn", e.OverflowZoomOff = "FileViewer/OverflowZoomOff"
        })(t.Actions || (t.Actions = {}))
    }), define("modules/clean/react/file_viewer/file_preview_event_emitter", ["require", "exports", "tslib", "external/eventemitter3"], function(e, t, i, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importDefault(r), t.filePreviewEventEmitter = new r.default
    }), define("modules/clean/react/file_viewer/files2_utils", ["require", "exports", "modules/constants/file_viewer"], function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isFiles2Enabled = function() {
            return "M2" === i.PREVIEWS_FILES_2 || "M3" === i.PREVIEWS_FILES_2
        }, t.isFiles2M3Enabled = function() {
            return "M3" === i.PREVIEWS_FILES_2
        }, t.isFiles2M2Enabled = function() {
            return "M2" === i.PREVIEWS_FILES_2
        }
    }), define("modules/clean/react/file_viewer/location_utils", ["require", "exports", "tslib", "modules/clean/react/file_viewer/constants", "modules/clean/history", "modules/core/exception"], function(e, t, i, r, n, a) {
        "use strict";

        function o(e) {
            return e ? e.query.preview : ""
        }

        function s(e, t) {
            return e ? e + "/" + t : "/" + t
        }

        function l(e, t) {
            if (e && !(t <= 0)) return e.split("/").slice(0, t + 1).join("/")
        }

        function c(e, t) {
            if (e) {
                if (t <= 0) return e;
                return l(e, e.split("/").length - t - 1)
            }
        }

        function u(e) {
            p(d(r.SubpathQueryKey, e))
        }

        function d(e, t) {
            var i = n.default.get_uri();
            return t ? i.updateQuery(e, t) : i.removeQuery(e), i
        }

        function p(e) {
            n.default.push_state(e.getPath(), e.getQuery())
        }

        function m(e) {
            var t, i = e.query[r.SubpathQueryKey];
            return t = i instanceof Array ? i.length ? i[0] : void 0 : i, t && 0 !== t.indexOf("/") ? void a.reportStack("path malformed", {
                severity: a.SEVERITY.NONCRITICAL,
                exc_extra: {
                    fileSubpath: t
                }
            }) : t
        }

        function f(e) {
            var t = e.query[r.PageQueryKey];
            if (t) {
                var i = +t;
                return i ? i : void 0
            }
        }

        function _(e) {
            e ? e > 0 && p(d(r.PageQueryKey, e.toString())) : p(d(r.PageQueryKey, null))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = i.__importDefault(n), a = i.__importStar(a), t.getFilenameFromLocation = o, t.addToFileSubpath = s, t.truncateFileSubpath = l, t.shortenFileSubpathBy = c, t.updateFileSubpathQuery = u, t.getFileSubpath = m, t.getPageQuery = f, t.updatePageQuery = _
    }), define("modules/clean/react/file_viewer/logging", ["require", "exports", "modules/clean/react/file_viewer/models", "modules/clean/react/file_viewer/file_preview_event_emitter", "modules/clean/react/file_viewer/constants"], function(e, t, i, r, n) {
        "use strict";

        function a(e, i) {
            return function() {
                for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
                var o = e.apply(void 0, r);
                return t.logUserAction(i, n.UserActionContext.Toolbar), o
            }
        }

        function o(e, i) {
            return function() {
                for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
                var o = e.apply(void 0, r);
                return t.logUserAction(i, n.UserActionContext.Keyboard), o
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.logUserAction = function(e, t, a) {
            void 0 === a && (a = {}), null != i.FilePreviewSession.currentSession && r.filePreviewEventEmitter.emit(n.EventType.FilePreviewUserAction, i.FilePreviewSession.currentSession, e, t, a)
        }, t.wrapToolbarActionWithLogging = a, t.wrapKeyboardActionWithLogging = o
    }),
    define("modules/clean/react/file_viewer/models", ["require", "exports", "tslib", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/file_preview_event_emitter", "modules/clean/react/previews/constants", "modules/clean/uuid", "modules/clean/web_timing_logger", "modules/core/browser", "modules/core/browser_detection", "modules/core/exception"], function(e, t, i, r, n, a, o, s, l, c, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), l = i.__importStar(l), u = i.__importStar(u);
        var d = {};
        d[r.EventType.FilePreviewAttemptStarted] = null, d[r.EventType.FilePreviewSupportConfirmed] = r.EventType.FilePreviewAttemptStarted, d[r.EventType.FilePreviewSupportDenied] = r.EventType.FilePreviewAttemptStarted, d[r.EventType.FilePreviewDownloadAttempted] = r.EventType.FilePreviewSupportConfirmed, d[r.EventType.FilePreviewDownloadSucceeded] = r.EventType.FilePreviewDownloadAttempted, d[r.EventType.FilePreviewDownloadFailed] = r.EventType.FilePreviewDownloadAttempted, d[r.EventType.FilePreviewRenderSucceeded] = r.EventType.FilePreviewDownloadSucceeded, d[r.EventType.FilePreviewRenderFailed] = r.EventType.FilePreviewDownloadSucceeded;
        var p = (function() {
            function e(e) {
                this.id = e || o.UUID.v4({
                    allowInsecure: !0
                }), this.deviceType = this._deviceTypeString()
            }
            return e.prototype._deviceTypeString = function() {
                return c.is_supported_mobile_browser() ? "mobile" : c.is_tablet() ? "tablet" : "desktop"
            }, e.currentSession = null, e
        })();
        t.FileViewerSession = p;
        var m = (function() {
            function e(e) {
                var t = e.id,
                    i = e.fileViewerSession,
                    r = e.file,
                    n = e.previewType,
                    a = e.sourceContext,
                    s = e.sourceAction;
                this.passwordNeeded = !1, u.assert(!!i, "FileViewerSession required"), u.assert(!!r, "File required"), this.id = t || o.UUID.v4({
                    allowInsecure: !0
                }), this.fileViewerSession = i, this.file = r, this.previewType = n, this.sourceContext = a, this.sourceAction = s, this.previewTimeline = {}, this.lastEvent = null
            }
            return e.prototype.recordEvent = function(e, t) {
                if (void 0 === t && (t = {}), !(t instanceof Object)) throw new Error("extra param of recordEvent should be an object.");
                this.isEventInTimeline(e) || d.hasOwnProperty(e) && this.lastEvent !== d[e] || (this.addToTimeline(e), n.filePreviewEventEmitter.emit(e, this, t), this.lastEvent = e)
            }, e.prototype.markPrimaryEvent = function() {
                var e;
                e = window._timingData && window._timingData.tti ? window._timingData.tti.getTime() : l.now(), this.primaryMarkTs || (this.primaryMarkTs = e)
            }, e.prototype.timeToPrimaryMark = function() {
                return this.timeToMark(this.primaryMarkTs)
            }, e.prototype.timeToMark = function(e) {
                if (void 0 !== e) switch (this.sourceAction) {
                    default: return;
                    case a.PreviewSourceAction.Visit:
                            var t = s.start_time();
                        if (void 0 !== t) return e - t;
                        return;
                    case a.PreviewSourceAction.Click:
                            var i = this.previewTimeline[r.EventType.FilePreviewAttemptStarted];
                        if (!i) return;
                        var n = i.timestamp;
                        if (void 0 === n) return;
                        return e - n
                }
            }, e.prototype.isEventInTimeline = function(e) {
                return e in this.previewTimeline
            }, e.prototype.addToTimeline = function(e) {
                this.previewTimeline[e] = {
                    timestamp: l.now()
                }
            }, e.currentSession = null, e
        })();
        t.FilePreviewSession = m
    }), define("modules/clean/react/file_viewer/open_button/types", ["require", "exports"], function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        (function(e) {
            e[e.DOWNLOAD = 0] = "DOWNLOAD", e[e.UNITY_FILE = 1] = "UNITY_FILE", e[e.UNITY_FOLDER = 2] = "UNITY_FOLDER", e[e.OPEN_WITH = 3] = "OPEN_WITH", e[e.OPEN_IN_PAPER = 4] = "OPEN_IN_PAPER", e[e.APP_ACTION = 5] = "APP_ACTION", e[e.PREPARE_FOR_SIGNATURE = 6] = "PREPARE_FOR_SIGNATURE", e[e.SHARE_TO_SLACK = 7] = "SHARE_TO_SLACK", e[e.PRESENT_IN_ZOOM = 8] = "PRESENT_IN_ZOOM", e[e.SHARE_TO_TRELLO = 9] = "SHARE_TO_TRELLO", e[e.INVITE_VIA_EMAIL = 10] = "INVITE_VIA_EMAIL", e[e.OPEN_WITH_CLOUD_DOC = 11] = "OPEN_WITH_CLOUD_DOC"
        })(t.OpenButtonAction || (t.OpenButtonAction = {}))
    }), define("modules/clean/react/file_viewer/prompt/campaign_api", ["require", "exports", "modules/clean/api_v2/user_client"], function(e, t, i) {
        "use strict";

        function r(e, t) {
            var r = new i.UserApiV2Client,
                n = {
                    platform: "web",
                    locations: ["targeted_bubble"],
                    ref_page: ["preview", "file_viewer"],
                    display_context: "fv_preview_type=" + t
                },
                a = {
                    client_context: n
                };
            return r.ns("prompt").rpc("get_best_campaigns", a, {
                subjectUserId: e
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fetchBestCampaigns = r
    }), define("modules/clean/react/file_viewer/title_utils", ["require", "exports", "modules/constants/python", "modules/clean/filepath", "modules/clean/file_store/utils", "modules/core/i18n"], function(e, t, i, r, n, a) {
        "use strict";

        function o(e) {
            var t = e.file,
                o = e.fileViewAction,
                s = e.fileViewOrigin;
            return e.isVersionHistoryMode ? a._("Version history") : s === i.FileViewOriginType.RECENTS ? a._("Recents") : s === i.FileViewOriginType.HOME ? a._("Home") : s !== i.FileViewOriginType.PHOTOS && o !== i.FileViewActionType.SEARCH && n.isBrowseFile(t) && t.fq_path ? r.filename(r.parent_dir(t.fq_path)) : void 0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.closeButtonTitle = function(e) {
            var t = o(e);
            return !e.sharedLinkInfo && t ? a._("Back to %(folder)s").format({
                folder: t
            }) : a._("Close")
        }, t.customLogoUrl = function(e) {
            return e ? e.ownerTeamLogo : void 0
        }
    }), define("modules/clean/react/file_viewer/url_utils", ["require", "exports", "tslib", "modules/clean/history", "modules/core/browser"], function(e, t, i, r, n) {
        "use strict";

        function a(e) {
            return function(t) {
                t.ctrlKey || t.metaKey || e(t)
            }
        }

        function o() {
            var e = n.get_uri();
            return e.removeQuery("preview"), e
        }

        function s() {
            d("preview")
        }

        function l(e) {
            u("preview", e.filename)
        }

        function c(e) {
            r.default.push_state(e.getPath(), e.getQuery())
        }

        function u(e, t) {
            var i = {};
            i[e] = t;
            var n = r.default.get_uri();
            n.updateQuery(i), c(n)
        }

        function d(e) {
            var t = r.default.get_uri();
            t.removeQuery(e), c(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importDefault(r), n = i.__importStar(n), t.linkClickHandler = a, t.getCurrentFolderHref = o, t.closeFile = s, t.openFile = l
    }), define("modules/clean/react/location/types", ["require", "exports"], function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (function() {
            function e(e, t) {
                void 0 === t && (t = {}), this.path = e, this.query = t
            }
            return e.fromURI = function(t) {
                return new e(t.getPath(), t.getQuery())
            }, e
        })();
        t.Location = i
    }), define("modules/clean/react/location/with_location", ["require", "exports", "tslib", "react", "modules/clean/react/location/types", "modules/core/browser", "modules/clean/history", "modules/clean/react/helpers"], function(e, t, i, r, n, a, o, s) {
        "use strict";

        function l(e, t) {
            void 0 === t && (t = c);
            var l;
            return l = (function(s) {
                function l(e) {
                    var i = s.call(this, e) || this;
                    i.onLocationChange = function(e, r) {
                        i.setState(t(new n.Location(i.basePathComponent + "/" + decodeURIComponent(e), r), i.props))
                    };
                    var r = a.get_uri(),
                        o = r.getPath();
                    return i.basePathComponent = "/" + o.split("/")[1], i.state = t(n.Location.fromURI(r), e), i
                }
                return i.__extends(l, s), l.prototype.componentDidMount = function() {
                    o.default.add_callback(this.basePathComponent, this.onLocationChange, !0)
                }, l.prototype.componentWillUnmount = function() {
                    o.default.remove_callback(this.basePathComponent, this.onLocationChange)
                }, l.prototype.render = function() {
                    return r.default.createElement(e, i.__assign({}, this.props, this.state))
                }, l
            })(r.default.PureComponent), l.displayName = "WithLocation(" + s.getDisplayName(e) + ")", l
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importDefault(r), a = i.__importStar(a), o = i.__importDefault(o);
        var c = function(e) {
            return {
                location: e
            }
        };
        t.withLocation = l
    }), define("modules/clean/react/open_in_app/banner", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/open_in_app/actions", "modules/core/i18n"], function(e, t, i, r, n, a, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importDefault(r);
        var s = (function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        closed: !1,
                        showInstallAppText: !1
                    }, t.handleAppRedirect = function() {
                        t.props.onClick && t.props.onClick(), a.openInApp(t.props.urls, {
                            onAppNeeded: function() {
                                return t.setState({
                                    showInstallAppText: !0
                                })
                            },
                            onAppInstalled: function() {
                                return t.setState({
                                    showInstallAppText: !1
                                })
                            }
                        })
                    }, t.dismiss = function() {
                        t.setState({
                            closed: !0
                        });
                        var e = t.props.onClose;
                        e && e()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    a.cleanUp()
                }, t.prototype.render = function() {
                    var e = this.state,
                        t = e.closed,
                        i = e.showInstallAppText;
                    return t ? null : r.default.createElement("div", {
                        className: "open-in-app-banner-container"
                    }, r.default.createElement("button", {
                        className: "button-as-link open-in-app-banner-text",
                        onClick: this.handleAppRedirect
                    }, i ? o._("Get the Dropbox App") : o._("View In App")), r.default.createElement("button", {
                        className: "button-as-link open-in-app-banner-close",
                        "aria-label": "Close",
                        onClick: this.dismiss
                    }))
                }, t
            })(r.default.Component),
            l = ["/static/css/open_in_app/banner-vfl04evRj.css"],
            c = n.requireCssWithComponent(s, l);
        t.OpenInAppBanner = c
    }), define("modules/clean/react/previews/preview_toolbar_button", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/sprite", "modules/clean/static_urls", "spectrum/icon_document", "spectrum/tooltip"], function(e, t, i, r, n, a, o, s, l) {
        "use strict";

        function c(e) {
            var t = e.className,
                i = e["data-test"],
                c = e.disabled,
                u = e.iconName,
                d = e.onClick,
                p = e.spriteGroup,
                m = e.spriteName,
                f = e.spectrumIconName,
                _ = e.tooltip;
            return n.default.createElement("div", {
                className: r.default(t, "toolbar-button-entry"),
                "data-test": i
            }, n.default.createElement(l.Tooltip, {
                positioning: "above",
                positionOffset: 24,
                tooltipContent: _
            }, n.default.createElement("button", {
                className: t + "-button",
                "aria-label": _,
                onClick: d
            }, void 0 !== u ? n.default.createElement("img", {
                src: o.static_url("/static/images/previews/toolbar/" + u + ".svg"),
                alt: _,
                className: r.default({
                    disabled: c
                })
            }) : void 0 !== m ? n.default.createElement(a.Sprite, {
                group: p,
                name: m,
                alt: _,
                className: r.default({
                    disabled: c
                })
            }) : n.default.createElement(s.IconDocument, {
                name: f
            }))))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importDefault(r), n = i.__importDefault(n), t.PreviewToolbarButton = c
    }), define("modules/clean/react/size_class/size_class", ["require", "exports", "tslib", "react", "external/classnames", "hoist-non-react-statics", "spectrum/match", "modules/clean/react/size_class/constants", "modules/clean/react/helpers"], function(e, t, i, r, n, a, o, s, l) {
        "use strict";

        function c(e, t) {
            void 0 === t && (t = {});
            var c = (function(a) {
                function c(t) {
                    var i = a.call(this, t) || this;
                    return i.displayName = "WithSizeClass(" + l.getDisplayName(e), i.onMatchSmall = function() {
                        return i.setState({
                            sizeClass: s.SizeClass.Small
                        })
                    }, i.onMatchMedium = function() {
                        return i.setState({
                            sizeClass: s.SizeClass.Medium
                        })
                    }, i.onMatchLarge = function() {
                        return i.setState({
                            sizeClass: s.SizeClass.Large
                        })
                    }, i.onMatchExtraLarge = function() {
                        return i.setState({
                            sizeClass: s.SizeClass.ExtraLarge
                        })
                    }, window.matchMedia(s.MEDIA_SIZE_CLASS_EXTRA_LARGE).matches ? i.state = {
                        sizeClass: s.SizeClass.ExtraLarge
                    } : window.matchMedia(s.MEDIA_SIZE_CLASS_LARGE).matches ? i.state = {
                        sizeClass: s.SizeClass.Large
                    } : window.matchMedia(s.MEDIA_SIZE_CLASS_MEDIUM).matches ? i.state = {
                        sizeClass: s.SizeClass.Medium
                    } : i.state = {
                        sizeClass: s.SizeClass.Small
                    }, i
                }
                return i.__extends(c, a), c.prototype.render = function() {
                    var a, l = t.isResponsiveEnabled,
                        c = t.responsiveClassName,
                        u = void 0 === c ? "" : c,
                        d = !l || l();
                    return r.default.createElement("div", {
                        className: n.default((a = {}, a[u] = d, a))
                    }, r.default.createElement(o.Match, {
                        media: s.MEDIA_SIZE_CLASS_SMALL,
                        onMatch: this.onMatchSmall
                    }), r.default.createElement(o.Match, {
                        media: s.MEDIA_SIZE_CLASS_MEDIUM,
                        onMatch: this.onMatchMedium
                    }), r.default.createElement(o.Match, {
                        media: s.MEDIA_SIZE_CLASS_LARGE,
                        onMatch: this.onMatchLarge
                    }), r.default.createElement(o.Match, {
                        media: s.MEDIA_SIZE_CLASS_EXTRA_LARGE,
                        onMatch: this.onMatchExtraLarge
                    }), r.default.createElement(e, i.__assign({}, this.props, {
                        sizeClass: d ? this.state.sizeClass : s.SizeClass.Large
                    })))
                }, c
            })(r.default.Component);
            return a.default(c, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importDefault(r), n = i.__importDefault(n), a = i.__importDefault(a), t.SizeClass = s.SizeClass, t.withSizeClass = c
    }), define("modules/clean/react/size_class/utils", ["require", "exports", "modules/clean/react/size_class/constants"], function(e, t, i) {
        "use strict";

        function r(e) {
            return e !== i.SizeClass.Large && e !== i.SizeClass.ExtraLarge
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isSmallerThanLarge = r
    }), define("modules/clean/react/watermarking/drawing", ["require", "exports"], function(e, t) {
        "use strict";

        function i(e, t, i, r) {
            e.save(), e.font = i + "px " + r;
            var n = e.measureText(t);
            return e.restore(), {
                width: n.width,
                height: n.fontBoundingBoxAscent + n.fontBoundingBoxDescent || i
            }
        }

        function r(e, t, r, n, a, o) {
            var s = document.createElement("canvas"),
                l = s.getContext("2d");
            if (!l) throw new Error("Cannot draw on canvas");
            var c = i(l, e, t, r),
                u = c.width,
                d = c.height;
            s.width = Math.round(Math.abs(u * Math.cos(o)) + Math.abs(d * Math.sin(o))), s.height = Math.round(Math.abs(u * Math.sin(o)) + Math.abs(d * Math.cos(o))), l.font = t + "px " + r, l.globalAlpha = a, l.fillStyle = n, l.textBaseline = "bottom";
            var p = 0,
                m = s.height;
            return o < .5 * Math.PI ? p = d * Math.sin(o) : o < Math.PI ? (p = d * Math.sin(o) - u * Math.cos(o), m += d * Math.cos(o)) : o < 1.5 * Math.PI ? (p = -u * Math.cos(o), m = 0) : m += u * Math.sin(o), l.translate(p, m), l.rotate(-o), l.fillText(e, 0, 0), s
        }

        function n(e, t, i, r) {
            var n = document.createElement("canvas"),
                a = n.getContext("2d");
            if (!a) throw new Error("Cannot draw on canvas");
            var o = r ? r : 0,
                s = e.width * t,
                l = e.height * t;
            n.width = Math.round(Math.abs(s * Math.cos(o)) + Math.abs(l * Math.sin(o))), n.height = Math.round(Math.abs(s * Math.sin(o)) + Math.abs(l * Math.cos(o)));
            var c = 0,
                u = 0;
            return o < .5 * Math.PI ? u = s * Math.sin(o) : o < Math.PI ? (c = -s * Math.cos(o), u = s * Math.sin(o) - l * Math.cos(o)) : o < 1.5 * Math.PI ? (c = -s * Math.cos(o) - l * Math.sin(o), u = -l * Math.cos(o)) : c = -l * Math.sin(o), a.globalAlpha = i, a.translate(c, u), a.rotate(-o), a.drawImage(e, 0, 0, s, l), n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.drawTextTile = r, t.drawImageTile = n
    }), define("modules/clean/react/watermarking/selectors", ["require", "exports", "tslib", "external/reselect", "external/lodash", "modules/clean/react/watermarking/types", "modules/clean/react/watermarking/utils", "modules/clean/react/watermarking/drawing", "modules/clean/react/file_viewer/data/selectors"], function(e, t, i, r, n, a, o, s, l) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = i.__importStar(n), t.getWatermarkState = function(e) {
            return l.getFileViewerState(e).watermark
        }, t.getWatermarkTilingFunc = r.createSelector(t.getWatermarkState, function(e) {
            var t = function(t) {
                var i = a.getWatermarkingOptions(e),
                    r = i.angle,
                    n = i.opacity,
                    l = i.size,
                    c = i.marginX,
                    u = i.marginY,
                    d = r % 360,
                    p = r / 180 * Math.PI,
                    m = p % (Math.PI / 2),
                    f = function(i) {
                        if (e.mode === a.WatermarkingMode.TEXT) {
                            var r = e.textWatermarkingOptions,
                                c = r.color,
                                u = r.fontFamily,
                                d = r.text;
                            return s.drawTextTile(d, l * t, u, c, n / 100, i)
                        }
                        var p = e.imageWatermarkingOptions.image;
                        if (!p) throw new o.WatermarkingError(o.WatermarkingError.TILE_NO_INPUT);
                        return s.drawImageTile(p, l * t, n / 100, i)
                    },
                    _ = f(0),
                    g = _.width,
                    v = _.height,
                    w = f(p),
                    S = w.height,
                    h = w.width,
                    y = 2 * c * t,
                    b = 2 * u * t;
                if (e.mode === a.WatermarkingMode.TEXT) {
                    var E = e.textWatermarkingOptions.lineHeight;
                    y = 2 * v, b = E * v
                }
                var A = g + y,
                    M = v + b,
                    F = 0,
                    I = 0,
                    C = 0;
                return d % 180 === 0 ? (F = A, I = M, C = y / -1.2) : d % 180 === 90 ? (F = M, I = A) : d > 0 && d < 90 || d > 180 && d < 270 ? (F = M / Math.sin(m), I = A * Math.sin(m), C = -A * Math.cos(m)) : (d > 90 && d < 180 || d > 270 && d < 360) && (F = M / Math.cos(m), I = A * Math.cos(m), C = A * Math.sin(m)), {
                    canvas: w,
                    width: h,
                    height: S,
                    distanceX: Math.round(F),
                    distanceY: Math.round(I),
                    startX: Math.round(-h / 2),
                    startY: Math.round(-S / 2),
                    offsetXPerRow: Math.round(C),
                    offsetYPerCol: 0
                }
            };
            return n.memoize(t)
        })
    }), define("modules/clean/react/watermarking/types", ["require", "exports"], function(e, t) {
        "use strict";

        function i(e) {
            return e.mode === r.TEXT ? e.textWatermarkingOptions : e.imageWatermarkingOptions
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r;
        (function(e) {
            e.TEXT = "text", e.IMAGE = "image"
        })(r = t.WatermarkingMode || (t.WatermarkingMode = {}));
        (function(e) {
            e.REPEAT = "REPEAT", e.CENTER = "CENTER", e.NORTHWEST = "NORTHWEST", e.NORTHEAST = "NORTHEAST", e.SOUTHEAST = "SOUTHEAST", e.SOUTHWEST = "SOUTHWEST"
        })(t.WatermarkPosition || (t.WatermarkPosition = {})), t.getWatermarkingOptions = i
    }), define("modules/clean/react/watermarking/utils", ["require", "exports", "tslib", "external/sjcl", "modules/constants/file_viewer", "file-viewer/core", "modules/constants/page_load", "modules/clean/file_store/utils", "modules/core/i18n", "modules/clean/previews/constants", "modules/clean/react/watermarking/types", "modules/clean/storage", "modules/core/cookies", "modules/core/exception"], function(e, t, i, r, n, a, o, s, l, c, u, d, p, m) {
        "use strict";

        function f(e) {
            return e && n.WATERMARK_TRIAL_VARIANT_BY_USER_ID ? n.WATERMARK_TRIAL_VARIANT_BY_USER_ID[e.id] : ""
        }

        function _(e) {
            return !P(e) && ["DEACTIVATED_MENU", "POPOVER_WM_VALUE_PROPS", "POPOVER_PRO_VALUE_PROPS", "TOOLTIP_ON_HOVER"].includes(f(e))
        }

        function g(e, i) {
            return t.allowWatermark(e, i) || _(i)
        }

        function v(e) {
            if (!e) return "DRAFT";
            var t = a.createMetaserverFormatters(I, {}, a.createI18nCache()).formatDateTime,
                i = t(new Date, {}),
                r = e.display_name + " | " + i;
            return n.WATERMARKING_BY_USER_ID && "ON" === n.WATERMARKING_BY_USER_ID[e.id] ? r + " | " : r
        }

        function w(e, i) {
            if (!e || !i) return t.DEFAULT_SIZES;
            var r = e.width / i.width,
                n = e.height / i.height,
                a = Math.max(r, n);
            if (a * t.DEFAULT_SIZES.maxSize <= .9) return t.DEFAULT_SIZES;
            var o = .9 / a,
                s = o / 25;
            return {
                size: o / 5,
                minSize: s,
                maxSize: o,
                step: (o - s) / t.TOTAL_STEPS
            }
        }

        function S(e) {
            return e === c.PreviewType.SsrDoc ? 300 / 72 : 1
        }

        function h(e, t) {
            if (e) return F(t === c.PreviewType.Image ? "Watermarking is available on PDFs, PNGs, JPEGs, and BMPs." : "Watermarking is available on PDFs and images.")
        }

        function y(e) {
            return new Promise(function(t, i) {
                var r = new Image;
                r.onload = function() {
                    t(r)
                }, r.onerror = function(e) {
                    i(e)
                }, r.crossOrigin = "anonymous", r.src = e
            })
        }

        function b(e) {
            return e && n.WATERMARKING_BY_USER_ID ? n.WATERMARKING_BY_USER_ID[e.id] : ""
        }

        function E(e, n) {
            if (e && n) {
                var a = i.__assign({}, n, {
                    imageWatermarkingOptions: i.__assign({}, n.imageWatermarkingOptions, {
                        image: void 0
                    })
                });
                try {
                    var o = r.codec.utf8String.toBits(p.Cookies.read("__Host-js_csrf")),
                        s = r.encrypt(o, JSON.stringify(a));
                    d.UserLocalStorage.set(e.id, t.WATERMARKING_LOCAL_STORAGE_KEY, s)
                } catch (e) {
                    m.reportException({
                        err: e,
                        severity: m.SEVERITY.NONCRITICAL,
                        tags: ["watermarking"]
                    })
                }
            }
        }

        function A(e) {
            var i = d.UserLocalStorage.get(e.id, t.WATERMARKING_LOCAL_STORAGE_KEY);
            if (i) try {
                var n = r.codec.utf8String.toBits(p.Cookies.read("__Host-js_csrf"));
                return JSON.parse(r.decrypt(n, i))
            } catch (e) {
                m.reportException({
                    err: e,
                    severity: m.SEVERITY.NONCRITICAL,
                    tags: ["watermarking"]
                })
            }
        }

        function M(e) {
            return !(!e || "over_quota_error" !== e[".tag"])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importStar(r), m = i.__importStar(m);
        var F = l.i18n_default_project("watermarking")._,
            I = o.USER_LOCALE && [o.USER_LOCALE.replace("_", "-")] || [],
            C = [".pdf", ".jpg", ".jpeg", ".png", ".bmp"];
        t.DEFAULT_SIZES = {
            size: 1,
            minSize: .2,
            maxSize: 5,
            step: .1
        }, t.TOTAL_STEPS = 48, t.WATERMARKING_LOCAL_STORAGE_KEY = "fileviewer_watermarking_data";
        var T = (function(e) {
            function t(t) {
                var i = e.call(this, t) || this;
                return i.message = t, i.name = "WatermarkingError", i
            }
            return i.__extends(t, e), t.TILE_NO_INPUT = "Unable to tile: missing text or image", t
        })(Error);
        t.WatermarkingError = T, t.fileIsEditable = function(e) {
            return !!e && (s.isBrowseFile(e) && !e.read_only)
        }, t.fileIsWatermarkable = function(e) {
            return !!e && (s.isBrowseFile(e) && !e.read_only && !!e.ext && C.includes(e.ext.toLowerCase()))
        };
        var P = function(e) {
                return ["ON", "M1", "M2"].includes(b(e))
            },
            O = function(e) {
                return !!(e && e.is_team && n.WATERMARKING_DISABLED_BY_TEAM_ADMIN) && n.WATERMARKING_DISABLED_BY_TEAM_ADMIN[e.id]
            };
        t.userCanWatermark = function(e) {
            return P(e) && !O(e)
        }, t.allowWatermark = function(e, i) {
            return t.userCanWatermark(i) && t.fileIsWatermarkable(e)
        }, t.getWatermarkTrialVariant = f, t.allowWatermarkTrial = _, t.allowWatermarkOrTrial = g, t.getDefaultText = v, t.getImageDefaultSizes = w, t.DEFAULT_WATERMARKING_STATE = {
            mode: u.WatermarkingMode.TEXT,
            textWatermarkingOptions: {
                angle: 45,
                color: "black",
                opacity: 30,
                fontFamily: "Helvetica, sans-serif",
                size: 20,
                minSize: 5,
                maxSize: 200,
                lineHeight: 3,
                text: "DRAFT",
                position: u.WatermarkPosition.REPEAT,
                marginX: 40,
                marginY: 40,
                scale: 1,
                step: 1
            },
            imageWatermarkingOptions: i.__assign({
                angle: 45,
                opacity: 30,
                position: u.WatermarkPosition.REPEAT,
                marginX: 40,
                marginY: 40,
                scale: 1
            }, t.DEFAULT_SIZES)
        }, t.getWatermarkScale = S, t.getWatermarkingLabelText = h, t.getImageFromURL = y, t.isImageCustomizationEnabled = function(e) {
            return "M2" === b(e)
        }, t.getWatermarkMilestone = b, t.setLocalStorageWatermarkingState = E, t.getLocalStorageWatermarkingState = A, t.isOverQuotaError = M
    }), define("modules/clean/security/sjcl_crypto", ["require", "exports", "tslib", "external/sjcl"], function(e, t, i, r) {
        "use strict";

        function n(e) {
            for (var t = r.random.randomWords(e.length), i = 0, n = e.length, a = 0 <= n; a ? i < n : i > n; a ? i++ : i--) e[i] = t[i];
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importStar(r), t.getRandomValues = n
    }), define("modules/clean/uuid", ["require", "exports", "tslib", "modules/clean/insecure_uuid", "modules/clean/security/sjcl_crypto"], function(e, t, i, r, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.getRandomBytes = function(e) {
                var t = this;
                void 0 === e && (e = {});
                var i = new Array(16);
                try {
                    n.getRandomValues(i)
                } catch (t) {
                    if (t.message.match(/generator isn't seeded/) && e.allowInsecure) return this.getInsecureRandomValues(i);
                    throw t
                }
                return i.map(function(e) {
                    return t.toByte(e)
                })
            }, t.v4 = function(e) {
                void 0 === e && (e = {});
                var t = this.getRandomBytes({
                    allowInsecure: e.allowInsecure
                });
                return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, this.bytesToUUIDString(t)
            }, t
        })(r.InsecureUUID);
        t.UUID = a
    }), define("spectrum/icon_document/bundle", ["require", "exports"], function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ICONS = {
            "date-small": {
                attrs: {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                },
                dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#000" fill-rule="nonzero"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6z"></path><path d="M5 8h14v2H5zM7 2h2v4H7zM15 2h2v4h-2z"></path></g></g>'
            },
            date: {
                attrs: {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                },
                dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#000" fill-rule="nonzero"><path d="M6 6h20v20H6V6zm2 2v16h16V8H8z"></path><path d="M7 11h18v2H7zM11 4h2v4h-2zM19 4h2v4h-2z"></path></g></g>'
            },
            "signature-small": {
                attrs: {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                },
                dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#000" fill-rule="nonzero"><path d="M1 18h22v1H1z"></path><path d="M10.874 17.262c-1.33 1.046-1.25 2.246-.297 2.723 1.076.537 2.438-.321 3.206-2.953.226-.774.42-1.509.583-2.205-1.06.632-2.251 1.46-3.492 2.435zm4.589.26c-1.044 3.578-3.487 5.118-5.668 4.028-2.131-1.065-2.317-3.844-.003-5.664 1.857-1.46 3.565-2.6 5.014-3.317.634-4.207-.218-6.501-2.436-6.681-1.374-.111-1.993.459-2.027 1.713-.041 1.48.799 3.57 2.34 5.61l-1.397 1.054c-1.76-2.33-2.746-4.782-2.693-6.713.062-2.246 1.534-3.602 3.918-3.408 3.355.272 4.634 3.065 4.144 7.711 1.236-.31 2.137-.102 2.578.742.211.404.28.842.24 1.308a3.4 3.4 0 0 1-.025.205c1.118-.989 1.885-1.388 2.896-1.103.22.063.432.163.632.299l-.986 1.446a.42.42 0 0 0-.121-.06c-.223-.063-.618.152-1.332.792l-.42.379c-.17.151-.308.267-.442.37-.42.32-.786.5-1.217.5-.758 0-1.248-.545-1.188-1.264a2.4 2.4 0 0 1 .12-.543c.034-.105.181-.524.157-.454.11-.32.166-.532.182-.719a.652.652 0 0 0-.037-.325c.02.04.003.044-.143.053-.287.018-.69.127-1.183.324a38.652 38.652 0 0 1-.903 3.717zM1.381 11.619L2.62 10.38l4.95 4.95-1.238 1.237z"></path><path d="M6.377 10.382l1.238 1.236-4.948 4.952-1.238-1.237z"></path></g></g>'
            },
            signature: {
                attrs: {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                },
                dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#000" fill-rule="nonzero"><path d="M3 24h26v1H3z"></path><path d="M12.5 23.31c-1.983 1.56-1.857 3.437-.376 4.177 1.643.821 3.682-.464 4.79-4.26.37-1.271.68-2.47.931-3.594-1.6.917-3.43 2.172-5.345 3.678zm6.334.476c-1.423 4.878-4.698 6.942-7.604 5.49-2.828-1.413-3.075-5.094.034-7.538 2.627-2.065 5.04-3.666 7.065-4.65.94-6.089-.293-9.445-3.584-9.712-2.047-.166-3.02.73-3.072 2.607-.058 2.126 1.133 5.09 3.313 7.976l-1.595 1.206c-2.431-3.218-3.79-6.597-3.717-9.237.082-3.012 2.03-4.805 5.233-4.546 4.596.373 6.315 4.295 5.547 10.86 1.785-.52 3.073-.3 3.663.83.273.523.363 1.094.31 1.705a4.971 4.971 0 0 1-.175.925c.12-.105.252-.223.4-.356 1.565-1.402 2.605-1.969 3.947-1.59.285.08.558.21.818.387l-1.126 1.652a.807.807 0 0 0-.235-.114c-.414-.117-1.015.21-2.07 1.155-.07.063-.47.426-.586.529a10.64 10.64 0 0 1-.604.506c-.55.42-1.024.653-1.565.653-.928 0-1.51-.649-1.437-1.524.018-.219.07-.436.158-.71.046-.143.25-.725.217-.63.16-.462.24-.774.265-1.057.023-.255-.008-.449-.09-.605-.063-.122-.828-.083-2.231.498-.3 1.634-.728 3.4-1.279 5.29z"></path><path d="M8.293 14.294l1.415 1.414-4.997 5-1.414-1.414z"></path><path d="M3.297 15.708l1.414-1.414 5 5-1.414 1.414z"></path></g></g>'
            },
            "text-small": {
                attrs: {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                },
                dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#000" fill-rule="nonzero"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6z"></path><path d="M8 8h8v2H8z"></path><path d="M11 9h2v7h-2z"></path></g></g>'
            },
            text: {
                attrs: {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                },
                dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#000" fill-rule="nonzero"><path d="M6 6h20v20H6V6zm2 2v16h16V8H8z"></path><path d="M11 11h10v2H11zM15 13h2v8h-2z"></path></g></g>'
            }
        }
    }), define("spectrum/icon_document", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/stateless", "spectrum/svg_icon_bundle", "spectrum/icon_document/bundle"], function(e, t, i, r, n, a, o, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r = i.__importStar(r), n = i.__importStar(n), t.ICONS = s.ICONS, t.IconDocument = function(e) {
            var t = e.name,
                i = n.createElement(o.SvgIconBundle, {
                    focusable: "false",
                    icon: s.ICONS[t]
                });
            return n.createElement(a.Component, r.__assign({
                icon: i
            }, e))
        }, t.IconDocument.displayName = "IconDocument"
    });
//# sourceMappingURL=pkg-shared_link_core.min.js-vfl-EQzH-.map