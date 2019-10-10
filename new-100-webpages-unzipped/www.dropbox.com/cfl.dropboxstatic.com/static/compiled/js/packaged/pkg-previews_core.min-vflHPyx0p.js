define("file-viewer/assets-metaserver", ["require", "exports", "modules/clean/static_urls"], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.assets = {
        "2NQat": i.static_url("/static/js/file-viewer/img/error/unavailable_1x-vflG2AHMd.png"),
        "1M0Da": i.static_url("/static/js/file-viewer/img/error/unavailable_2x-vflGPrE5d.png"),
        "3_SVR": i.static_url("/static/js/file-viewer/img/error/file_too_large_1x-vflDGNPuo.png"),
        "1KZOf": i.static_url("/static/js/file-viewer/img/error/file_too_large_2x-vfl-r0UPt.png"),
        d7hcI: i.static_url("/static/js/file-viewer/img/error/file_uploading_1x-vflRuLSg0.png"),
        "1WylU": i.static_url("/static/js/file-viewer/img/error/file_uploading_2x-vflKOdrWj.png"),
        "1j0Ik": i.static_url("/static/js/file-viewer/img/error/filetype_not_supported_1x-vflmIVODZ.png"),
        "3afH2": i.static_url("/static/js/file-viewer/img/error/filetype_not_supported_2x-vflE8HW8X.png"),
        "32YjM": i.static_url("/static/js/file-viewer/img/error/password_protected_1x-vflnFAKjt.png"),
        "29R06": i.static_url("/static/js/file-viewer/img/error/password_protected_2x-vflnBXZ1k.png")
    }
}), define("file-viewer/core/bootstrap", ["require", "exports", "tslib", "redux", "file-viewer/core/data/reducer", "file-viewer/core/data/actions", "file-viewer/core/urls", "file-viewer/core/uuid", "modules/clean/api_v2/redux/previews", "file-viewer/core/middlewares/riviera_data", "file-viewer/core/utils", "file-viewer/core/config", "file-viewer/core/middlewares/analytics", "file-viewer/core/middlewares/ui_action_redispatcher", "file-viewer/core/middlewares/local_cache_data", "modules/clean/api_v2/redux/users", "file-viewer/core/middlewares/navigation", "file-viewer/core/invariant", "file-viewer/core/middlewares/native_apps", "file-viewer/core/errors", "file-viewer/core/middlewares/network_state"], function(e, t, i, r, n, o, a, s, l, c, d, u, p, _, f, m, v, h, g, w, A) {
    "use strict";

    function b(e) {
        var t = e.id || s.v4(),
            r = e.store,
            n = e.intl,
            c = e.config,
            d = e.resolveAsset,
            u = e.deviceType,
            p = void 0 === u ? "desktop" : u;
        return r.dispatch(o.initializeFileViewer({
            fileViewerId: t,
            deviceType: p
        })), r.dispatch(m.getCurrentAccountAction({
            arg: void 0
        })), {
            id: t,
            getPlatformProps: function() {
                return {
                    intl: n,
                    store: r,
                    config: c,
                    resolveAsset: d,
                    accountId: e.accountId,
                    deviceType: e.deviceType || "desktop"
                }
            },
            setCurrentFileInfo: function(e) {
                r.dispatch(o.setCurrentFilePreview({
                    fileViewerId: t,
                    fileInfo: e
                }))
            },
            resolveFilePreview: function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return h.invariant(!(!e.url && !e.file_id), w.FVErrorCode.InvalidFileInfo, "You have to either provide a file ID or shared link url to fetch the preview data"), [4, r.dispatch(l.getPreviewDataBatchAction({
                                    arg: {
                                        files: [{
                                            url: e.url,
                                            file_id: e.file_id
                                        }]
                                    },
                                    params: {}
                                }, {
                                    fileViewerId: t
                                }))];
                            case 1:
                                return i.sent(), [2]
                        }
                    })
                })
            },
            loadPreviewMetadata: function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, n, s, l, c, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (e = r.getState().currentFileInfo[t].file_id, r.dispatch(o.fetchNativeApps({
                                        fileId: e
                                    })), n = r.getState().previewData[e], !n || !n.content) throw new w.FVError(w.FVErrorCode.MalformedPreviewsDataApiResponse, "Missing `content` from preview data api payload");
                                switch (s = [], n.content[".tag"]) {
                                    case "ssr_doc":
                                    case "cloud_doc":
                                        l = n.content, c = l.text_url_tmpl, d = l.image_url_tmpl, h.invariant(!(!c && !d), w.FVErrorCode.MissingContentMetadata, "Content metadata is not present"), null != c && null != d && (s.push(r.dispatch(o.fetchPageDataWithMetadata({
                                            fileIdOrRevisionId: e,
                                            textUrlTmpl: c,
                                            startPage: 0,
                                            endPage: 50
                                        }))), r.dispatch(o.prewarmUnifiedPreviewAsset(a.imageUrl(d, {
                                            page: 0,
                                            scale_percent: 0
                                        }))))
                                }
                                return [4, Promise.all(s)];
                            case 1:
                                return i.sent(), [2]
                        }
                    })
                })
            }
        }
    }

    function y(e) {
        var t = e.middlewares,
            o = void 0 === t ? [] : t,
            a = e.initialState,
            s = e.additionalReducers,
            l = void 0 === s ? {} : s,
            c = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ ? r.compose(r.applyMiddleware.apply(void 0, o), window.__REDUX_DEVTOOLS_EXTENSION__()) : r.applyMiddleware.apply(void 0, o),
            d = i.__assign({}, n.reducers, l);
        return r.createStore(r.combineReducers(d), a, c)
    }

    function F(e) {
        var t = e.additionalMiddlewares,
            r = void 0 === t ? [] : t,
            n = e.initialState,
            o = e.additionalReducers,
            a = void 0 === o ? {} : o,
            s = e.assets,
            h = e.intl,
            w = e.logger,
            F = (e.nativeAppsIOClient ? [g.middleware(e.nativeAppsIOClient)] : []).concat(e.localCacheClient ? [f.localCacheMiddleware(e.localCacheClient)] : [], e.navigationClient ? [v.middleware(e.navigationClient)] : [], e.networkStateClient ? [A.middleware(e.networkStateClient)] : [], [c.rivieraDataMiddleware(e.rivieraIOClient), l.middleware(e.apiv2ClientBase.ns("previews")), m.middleware(e.apiv2ClientBase.ns("users")), _.uiActionRedispatcher], r, w ? [p.analyticsMiddleware(w)] : []),
            R = y({
                middlewares: F,
                initialState: n,
                additionalReducers: a
            }),
            C = u.DEFAULT_CONFIG;
        return e.config && (C = i.__assign({}, C, e.config)), {
            createFileViewer: function(t) {
                return b({
                    id: t,
                    intl: h,
                    store: R,
                    config: C,
                    resolveAsset: d.resolveAsset.bind(null, s),
                    accountId: e.accountId,
                    deviceType: e.deviceType
                })
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createSDKStore = y, t.createFileViewerSDK = F
}), define("file-viewer/core/config", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_CONFIG = {
        pdf_size_limit: 524288e3,
        ppt_size_limit: 301989888,
        word_doc_size_limit: 167772160,
        archive_size_limit: 1073741824,
        text_size_limit: 8388608,
        linkfile_size_limit: 10240,
        annotations: !1,
        load_image_only: !1,
        file_flipping: !1,
        keyboard_shortcuts: !1,
        slack_integration: !1,
        zoom_integration: !1,
        show_offline_errors: !1,
        enable_documentation_pane: !1
    }
}), define("file-viewer/core/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MAX_IMG_SCALE_FACTOR = 16, t.MIN_IMG_SCALE_FACTOR = .01, t.IMG_ZOOM_MULTIPLIER = 1.25, t.MAX_DOC_SCALE_FACTOR = 10, t.MIN_DOC_SCALE_FACTOR = .1, t.DOC_ZOOM_MULTIPLIER = 1.1, t.ZOOM_PERCENT_DELTA = .05
}), define("file-viewer/core/data/actions", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        return {
            payload: e,
            type: "@@previews/fetchPageDataWithMetadata"
        }
    }

    function r(e, t) {
        return {
            type: "@@previews/fetchPageDataWithMetadataResult",
            payload: e,
            error: t
        }
    }

    function n(e) {
        return {
            payload: e,
            type: "@@previews/refreshBlob"
        }
    }

    function o(e) {
        return {
            payload: e,
            type: "@@previews/refreshBlobSuccess"
        }
    }

    function a(e) {
        return {
            type: "@@previews/fetchUnifiedPreviewAsset",
            payload: {
                assetUrl: e
            }
        }
    }

    function s(e) {
        return {
            type: "@@previews/updateDocCurrentPageIndex",
            payload: e
        }
    }

    function l(e) {
        return {
            type: "@@previews/zoomIn",
            payload: e
        }
    }

    function c(e) {
        return {
            type: "@@previews/zoomOut",
            payload: e
        }
    }

    function d(e) {
        return {
            type: "@@previews/updateFitScaleFactor",
            payload: e
        }
    }

    function u(e) {
        return {
            type: "@@previews/zoomOriginalOrFit",
            payload: e
        }
    }

    function p(e) {
        return {
            type: "@@previews/initializeFilePreview",
            payload: e
        }
    }

    function _(e) {
        return {
            type: "@@previews/initializeFilePreviewSession",
            payload: e
        }
    }

    function f(e) {
        return {
            type: "@@previews/fileViewerUi/openDocSidebar",
            payload: e
        }
    }

    function m(e) {
        return {
            type: "@@previews/fileViewerUi/closeDocSidebar",
            payload: e
        }
    }

    function v(e) {
        return {
            type: "@@previews/setCurrentFilePreview",
            payload: e
        }
    }

    function h(e) {
        return {
            type: "@@previews/updateScaleFactor",
            payload: e
        }
    }

    function g(e) {
        return {
            type: "@@previews/pageDown",
            payload: e
        }
    }

    function w(e) {
        return {
            type: "@@previews/pageUp",
            payload: e
        }
    }

    function A(e) {
        return {
            type: "@@previews/setInitialFocus",
            payload: e
        }
    }

    function b(e) {
        return {
            type: "@@previews/modes/changeMode",
            payload: e
        }
    }

    function y(e) {
        return {
            payload: e,
            type: "@@previews/sidebarControlClick"
        }
    }

    function F(e) {
        return {
            payload: e,
            type: "@@previews/setSidebarVisibility"
        }
    }

    function R(e) {
        return {
            type: "@@previews/share",
            payload: e
        }
    }

    function C(e) {
        return {
            type: "@@previews/openWith",
            payload: e
        }
    }

    function S(e) {
        return {
            type: "@@previews/fetchNativeApps",
            payload: e
        }
    }

    function x(e) {
        return {
            type: "@@previews/fetchNativeAppsResult",
            payload: e
        }
    }

    function P(e) {
        return {
            type: "@@previews/initializeFileViewer",
            payload: e
        }
    }

    function k(e) {
        return {
            type: "@@previews/pushSidebarPane",
            payload: e
        }
    }

    function E(e) {
        return {
            type: "@@previews/popSidebarPane",
            payload: e
        }
    }

    function I(e) {
        return {
            type: "@@previews/openWebPreview",
            payload: e
        }
    }

    function M(e) {
        return {
            type: "@@previews/openVersionHistory",
            payload: e
        }
    }

    function D(e) {
        return {
            type: "@@previews/openUrl",
            payload: e
        }
    }

    function T(e) {
        return {
            type: "@@previews/navigation/flipToNextFile",
            payload: e
        }
    }

    function O(e) {
        return {
            type: "@@previews/navigation/flipToPreviousFile",
            payload: e
        }
    }

    function B(e) {
        return {
            type: "@@previews/setFileMetadata",
            payload: e
        }
    }

    function U(e) {
        return {
            type: "@@previews/openFullscreenPreview",
            payload: e
        }
    }

    function V(e) {
        return {
            type: "@@previews/openContainingFolder",
            payload: e
        }
    }

    function L(e) {
        return {
            type: "@@previews/setNetworkState",
            payload: e
        }
    }

    function G() {
        return {
            type: "@@previews/subscribeNetworkState",
            payload: {}
        }
    }

    function N() {
        return {
            type: "@@previews/unsubscribeNetworkState",
            payload: {}
        }
    }

    function j(e) {
        return {
            type: "@@previews/setBootstrappedFileId",
            payload: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e.ChangeMode = "@@previews/modes/changeMode", e.CloseDocSidebar = "@@previews/fileViewerUi/closeDocSidebar", e.FetchPageDataWithMetadata = "@@previews/fetchPageDataWithMetadata", e.FetchPageDataWithMetadataResult = "@@previews/fetchPageDataWithMetadataResult", e.FetchPhotoMetadataResult = "@@previews/fetchPhotoMetadataResult", e.FlipToNextFile = "@@previews/navigation/flipToNextFile", e.FlipToPreviousFile = "@@previews/navigation/flipToPreviousFile", e.InitializeFilePreview = "@@previews/initializeFilePreview", e.OpenDocSidebar = "@@previews/fileViewerUi/openDocSidebar", e.PageDown = "@@previews/pageDown", e.PageUp = "@@previews/pageUp", e.PrewarmUnifiedPreviewAsset = "@@previews/fetchUnifiedPreviewAsset", e.RefreshBlob = "@@previews/refreshBlob", e.RefreshBlobSuccess = "@@previews/refreshBlobSuccess", e.SetCurrentFilePreview = "@@previews/setCurrentFilePreview", e.SetInitialFocus = "@@previews/setInitialFocus", e.UpdateDocCurrentPageIndex = "@@previews/updateDocCurrentPageIndex", e.UpdateFitScaleFactor = "@@previews/updateFitScaleFactor", e.UpdateScaleFactor = "@@previews/updateScaleFactor", e.ZoomIn = "@@previews/zoomIn", e.ZoomOriginalOrFit = "@@previews/zoomOriginalOrFit", e.ZoomOut = "@@previews/zoomOut", e.SidebarControlClick = "@@previews/sidebarControlClick", e.SetSidebarVisibility = "@@previews/setSidebarVisibility", e.Share = "@@previews/share", e.OpenWith = "@@previews/openWith", e.OpenWebPreview = "@@previews/openWebPreview", e.OpenVersionHistory = "@@previews/openVersionHistory", e.OpenUrl = "@@previews/openUrl", e.FetchNativeApps = "@@previews/fetchNativeApps", e.FetchNativeAppsResult = "@@previews/fetchNativeAppsResult", e.InitializeFilePreviewSession = "@@previews/initializeFilePreviewSession", e.InitializeFileViewer = "@@previews/initializeFileViewer", e.PushSidebarPane = "@@previews/pushSidebarPane", e.PopSidebarPane = "@@previews/popSidebarPane", e.SetFileMetadata = "@@previews/setFileMetadata", e.OpenFullscreenPreview = "@@previews/openFullscreenPreview", e.OpenContainingFolder = "@@previews/openContainingFolder", e.SetNetworkState = "@@previews/setNetworkState", e.SubscribeNetworkState = "@@previews/subscribeNetworkState", e.UnsubscribeNetworkState = "@@previews/unsubscribeNetworkState", e.SetBootstrappedFileId = "@@previews/setBootstrappedFileId"
    })(t.Action || (t.Action = {})), t.fetchPageDataWithMetadata = i, t.fetchPageDataWithMetadataResult = r, t.refreshBlobAction = n, t.refreshBlobSuccessAction = o, t.prewarmUnifiedPreviewAsset = a, t.updateDocCurrentPageIndex = s, t.zoomIn = l, t.zoomOut = c, t.updateFitScaleFactor = d, t.zoomOriginalOrFit = u, t.initializeFilePreview = p, t.initializeFilePreviewSession = _, t.openDocSidebar = f, t.closeDocSidebar = m, t.setCurrentFilePreview = v, t.updateScaleFactor = h, t.pageDown = g, t.pageUp = w, t.setInitialFocus = A, t.changeMode = b, t.sidebarControlClickAction = y, t.setSidebarVisibilityAction = F, t.shareAction = R, t.openWith = C, t.fetchNativeApps = S, t.fetchNativeAppsResult = x, t.initializeFileViewer = P, t.pushSidebarPane = k, t.popSidebarPane = E, t.openWebPreview = I, t.openVersionHistory = M, t.openUrl = D, t.flipToNextFile = T, t.flipToPreviousFile = O, t.setFileMetadata = B, t.openFullscreenPreview = U, t.openContainingFolder = V, t.setNetworkConnectivityState = L, t.subscribeNetworkState = G, t.unsubscribeNetworkState = N, t.setBootstrappedFileId = j
}), define("file-viewer/core/data/models", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e.Archive = "archive", e.Audio = "audio", e.CloudDoc = "cloud_doc", e.Excel = "excel", e.Error = "error", e.HTML = "html", e.Image = "image", e.Linkfile = "linkfile", e.Other = "other", e.SsrDoc = "ssr_doc", e.RawHTML = "raw_html", e.Restricted = "restricted", e.Video = "video", e.Doc = "doc", e.Photo = "photo", e.Text = "text"
    })(t.PreviewType || (t.PreviewType = {}))
}), define("file-viewer/core/data/modes/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e.Closed = "closed", e.Open = "open"
    })(t.SidebarVisibility || (t.SidebarVisibility = {})), (function(e) {
        e.White = "white", e.Chalk = "chalk"
    })(t.SidebarColor || (t.SidebarColor = {})), (function(e) {
        e.Documentation = "documentation", e.Comments = "comments", e.Watermarking = "watermarking", e.Zoom = "zoom", e.Slack = "slack"
    })(t.SidebarControlId || (t.SidebarControlId = {})), (function(e) {
        e.Documentation = "documentation", e.Metadata = "metadata", e.Comments = "comments", e.Activity = "activity", e.Watermarking = "watermarking", e.Zoom = "zoom", e.ZoomCreateMeeting = "zoom_create_meeting", e.ZoomMeetingDetail = "zoom_meeting_detail", e.SlackHome = "slack_home"
    })(t.SidebarPaneId || (t.SidebarPaneId = {})), (function(e) {
        e.Default = "default", e.Commenting = "commenting", e.Documentation = "documentation", e.Watermarking = "watermarking", e.Zoom = "zoom", e.Slack = "slack"
    })(t.FileViewerMode || (t.FileViewerMode = {}))
}), define("file-viewer/core/data/reducer", ["require", "exports", "tslib", "file-viewer/core/logging/session", "file-viewer/core/data/modes/types", "file-viewer/core/extension_constants", "file-viewer/core/uuid", "file-viewer/core/constants"], function(e, t, i, r, n, o, a, s) {
    "use strict";

    function l(e, t) {
        if (1 === t || !e) return 1;
        var i = Math.round(e * t / s.ZOOM_PERCENT_DELTA) * s.ZOOM_PERCENT_DELTA;
        return Math.abs(i - e) < s.ZOOM_PERCENT_DELTA && (i += t > 1 ? s.ZOOM_PERCENT_DELTA : -s.ZOOM_PERCENT_DELTA), Math.min(Math.max(i, s.MIN_IMG_SCALE_FACTOR), s.MAX_IMG_SCALE_FACTOR)
    }

    function c(e, t) {
        return Math.max(Math.min(e * t, s.MAX_DOC_SCALE_FACTOR), s.MIN_DOC_SCALE_FACTOR)
    }
    var d;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_USER = {
        locale: "en",
        referral_link: "",
        is_paired: !1,
        account_type: {
            ".tag": "basic"
        },
        uid: 0,
        user_name: "",
        root_info: {
            ".tag": "user"
        },
        is_deferred_password: !1,
        is_deferred_password_set: !1,
        is_business_domain: !1,
        is_paid: !1,
        uses_apple_relay_email: !1,
        has_ever_linked_desktop: !1,
        has_user_added_files: !1,
        video_uploads_enabled_default: !1,
        email_verified: !1,
        visibility_quota_info: {
            normal: 0,
            shared: 0,
            quota: 0
        },
        pending_forced_migration: !1,
        referral_bonus_info: {
            bonus_space: 0,
            max_num_bonus: 0
        },
        quota_info: {
            normal: 0,
            shared: 0,
            quota: 0
        },
        account_id: "",
        disabled: !1,
        email: "",
        role: "",
        teams_member: !1,
        name: {
            given_name: "Guest",
            surname: "",
            display_name: "Guest",
            familiar_name: "",
            abbreviated_name: "G"
        }
    };
    var u = {
        visibility: n.SidebarVisibility.Closed,
        paneStack: []
    };
    t.DEFAULT_MODE = {
        mode: n.FileViewerMode.Default,
        sidebar: u
    }, t.DEFAULT_STATE = {
        previewData: {},
        fileMetadata: {},
        rivieraData: {},
        filePreviewUi: {},
        fileViewerUi: {},
        currentFileInfo: {},
        loggingSession: {},
        users: {},
        currentUser: t.DEFAULT_USER,
        modes: {},
        nativeApps: {},
        networkConnectivity: {
            isOffline: !1
        },
        uploadInfo: {},
        fileContentMetadata: {}
    }, t.DEFAULT_FILE_PREVIEW_UI = {
        fitScaleFactor: 0,
        currentPageIndex: 0,
        isSidebarOpen: !1
    }, t.DEFAULT_FILE_VIEWER_UI = {
        isDocSidebarOpen: !0
    };
    var p = function(e, r) {
            var n, o;
            switch (void 0 === e && (e = t.DEFAULT_STATE.previewData), r.type) {
                case "@@previews/initializeFilePreview":
                    return e[r.payload.fileInfo.file_id] ? e : i.__assign({}, e, (n = {}, n[r.payload.fileInfo.file_id] = {}, n));
                case "@@apiv2_redux/previews/get_preview_data_batch_result":
                    if (!r.payload || !r.payload.result) return e;
                    var a = r.payload.result.results;
                    return i.__assign({}, e, a.reduce(function(e, t) {
                        var i = t.file.file_id;
                        if (null == i) throw Error("Invalid response: file_id must be present in FileInfo for get_preview_data_batch");
                        return t.preview && (e[i] = t.preview), e
                    }, {}));
                case "@@previews/refreshBlobSuccess":
                    if (!r.payload) return e;
                    var s = r.payload,
                        l = s.fileIdOrRevisionId,
                        c = s.preview,
                        d = e[l] ? e[l].content : {};
                    return i.__assign({}, e, (o = {}, o[l] = i.__assign({}, e[l], {
                        content: i.__assign({}, d, c)
                    }), o))
            }
            return e
        },
        _ = function(e, r) {
            var n, o;
            if (void 0 === e && (e = t.DEFAULT_STATE.fileMetadata), !r.payload) return e;
            if ("@@previews/initializeFilePreview" === r.type) {
                var a = r.payload.fileInfo.file_id;
                return i.__assign({}, e, (n = {}, n[a] = i.__assign({}, e[a], {
                    file_id: a,
                    file_name: r.payload.fileName
                }), n))
            }
            return "@@previews/setFileMetadata" === r.type ? i.__assign({}, e, (o = {}, o[r.payload.file_id] = r.payload, o)) : e
        };
    t.DEFAULT_DOC_PREVIEW_METADATA = {
        metadata: {
            page_count: 0,
            dimensions: [
                [0, 0, 0]
            ]
        },
        pages: []
    };
    var f = function(e, r) {
            var n, o, a, s;
            void 0 === e && (e = t.DEFAULT_STATE.rivieraData);
            var l = r.payload,
                c = r.error;
            if (!l) return e;
            var d;
            switch (r.type) {
                case "@@previews/initializeFilePreview":
                    var u = r.payload.fileInfo.file_id;
                    return e[u] ? e : i.__assign({}, e, (n = {}, n[u] = {}, n));
                case "@@previews/fetchPhotoMetadataResult":
                    return i.__assign({}, e, (o = {}, o[r.payload.fileIdOrRevisionId] = {
                        originalWidth: r.payload.originalWidth,
                        originalHeight: r.payload.originalHeight
                    }, o));
                case "@@previews/fetchPageDataWithMetadataResult":
                    d = r.payload.fileIdOrRevisionId;
                    var p = (e[d] || t.DEFAULT_DOC_PREVIEW_METADATA).pages;
                    if (c) return p && p.length ? e : i.__assign({}, e, (a = {}, a[d] = i.__assign({}, t.DEFAULT_DOC_PREVIEW_METADATA, {
                        error: c
                    }), a));
                    if (r.payload && r.payload.data) {
                        var _ = r.payload.data,
                            f = _.metadata,
                            m = _.pages;
                        if (!f) return e;
                        var v = p || new Array(f.page_count);
                        return Array.isArray(m) && m.length && (v = v.slice(), m.forEach(function(e) {
                            return v[e.pageIndex] = i.__assign({}, v[e.pageIndex], e)
                        })), i.__assign({}, e, (s = {}, s[d] = {
                            metadata: f,
                            pages: v
                        }, s))
                    }
            }
            return e
        },
        m = function(e, r) {
            var n, a, d, u, p, _, f, m, v, h, g, w, A, b, y, F, R;
            if (void 0 === e && (e = t.DEFAULT_STATE.filePreviewUi), !r.payload) return e;
            if ("@@previews/initializeFileViewer" === r.type) return i.__assign({}, e, (n = {}, n[r.payload.fileViewerId] = {}, n));
            var C = "@@previews/initializeFilePreview" === r.type ? r.payload.fileInfo.file_id : r.payload.fileIdOrRevisionId,
                S = r.payload.fileViewerId,
                x = e[S] || {},
                P = x[C] || {},
                k = P.zoomScaleFactor || P.fitScaleFactor;
            switch (r.type) {
                case "@@previews/initializeFilePreview":
                    return i.__assign({}, e, (a = {}, a[S] = i.__assign({}, x, (d = {}, d[C] = i.__assign({}, t.DEFAULT_FILE_PREVIEW_UI, P, {
                        isDocSidebarOpen: o.PRESENTATION_EXTS.includes(r.payload.fileExtension)
                    }), d)), a));
                case "@@previews/updateDocCurrentPageIndex":
                    var E = r.payload,
                        I = E.pageIndex,
                        M = E.pageCount;
                    return I < 0 ? I = 0 : M && I >= M - 1 && (I = M - 1), i.__assign({}, e, (u = {}, u[S] = i.__assign({}, x, (p = {}, p[C] = i.__assign({}, P, {
                        currentPageIndex: I
                    }), p)), u));
                case "@@previews/pageUp":
                    return i.__assign({}, e, (_ = {}, _[S] = i.__assign({}, x, (f = {}, f[C] = i.__assign({}, P, {
                        currentPageIndex: Math.max(P.currentPageIndex - 1, 0)
                    }), f)), _));
                case "@@previews/pageDown":
                    return i.__assign({}, e, (m = {}, m[S] = i.__assign({}, x, (v = {}, v[C] = i.__assign({}, P, {
                        currentPageIndex: Math.min(P.currentPageIndex + 1, r.payload.pageCount || 1)
                    }), v)), m));
                case "@@previews/zoomIn":
                    return i.__assign({}, e, (h = {}, h[S] = i.__assign({}, x, (g = {}, g[C] = i.__assign({}, P, {
                        zoomScaleFactor: "ssr_doc" === r.payload.previewType ? c(k, s.DOC_ZOOM_MULTIPLIER) : l(k, s.IMG_ZOOM_MULTIPLIER)
                    }), g)), h));
                case "@@previews/zoomOut":
                    return i.__assign({}, e, (w = {}, w[S] = i.__assign({}, x, (A = {}, A[C] = i.__assign({}, P, {
                        zoomScaleFactor: "ssr_doc" === r.payload.previewType ? c(k, 1 / s.DOC_ZOOM_MULTIPLIER) : l(k, 1 / s.IMG_ZOOM_MULTIPLIER)
                    }), A)), w));
                case "@@previews/zoomOriginalOrFit":
                    return i.__assign({}, e, (b = {}, b[S] = i.__assign({}, x, (y = {}, y[C] = i.__assign({}, P, {
                        zoomScaleFactor: k === P.fitScaleFactor ? 1 : void 0
                    }), y)), b));
                case "@@previews/updateFitScaleFactor":
                    return P.fitScaleFactor === r.payload.fitScaleFactor ? e : i.__assign({}, e, (F = {}, F[S] = i.__assign({}, x, (R = {}, R[C] = i.__assign({}, P, {
                        fitScaleFactor: r.payload.fitScaleFactor
                    }), R)), F))
            }
            return e
        };
    t.loggingSessionReducer = function(e, n) {
        var o, s, l;
        if (void 0 === e && (e = t.DEFAULT_STATE.loggingSession), "@@previews/initializeFilePreviewSession" === n.type) {
            var c = n.payload,
                d = c.fileViewerId,
                u = c.sourceSession;
            return i.__assign({}, e, (o = {}, o[d] = r.createFilePreviewSession({
                file_viewer_session_id: n.payload.fileViewerId,
                file_preview_session_id: a.v4(),
                file_id: n.payload.fileId,
                device_type: n.payload.deviceType,
                file_extension: n.payload.fileExtension,
                extra: u
            }), o))
        }
        if ("@@previews/updateSession" === n.type) return i.__assign({}, e, (s = {}, s[n.payload.file_viewer_session_id] = n.payload, s));
        if ("@@previews/initializeFilePreview" === n.type) {
            var p = n.payload,
                d = p.fileViewerId,
                _ = p.fileInfo;
            return i.__assign({}, e, (l = {}, l[d] = i.__assign({}, e[d], {
                file_id: _.file_id,
                ns_id: _.ns_id
            }), l))
        }
        return e
    }, t.currentFileInfoReducer = function(e, r) {
        var n, o;
        switch (void 0 === e && (e = t.DEFAULT_STATE.currentFileInfo), r.type) {
            case "@@previews/setCurrentFilePreview":
                return i.__assign({}, e, (n = {}, n[r.payload.fileViewerId] = i.__assign({
                    fileId: "0"
                }, r.payload.fileInfo, {
                    bootstrapped: !1
                }), n));
            case "@@apiv2_redux/previews/get_preview_data_batch_result":
                if (r.payload.result) {
                    for (var a = {}, s = 0, l = Object.keys(e); s < l.length; s++)
                        for (var c = l[s], d = e[c], u = 0, p = r.payload.result.results; u < p.length; u++) {
                            var _ = p[u];
                            _.file.url !== d.url && _.file.file_id !== d.file_id || (a[c] = i.__assign({}, _.file, {
                                bootstrapped: !1
                            }))
                        }
                    if (Object.keys(a).length > 0) return i.__assign({}, e, a)
                }
                return e;
            case "@@previews/setBootstrappedFileId":
                if (e[r.payload.fileViewerId].file_id === r.payload.fileId) return i.__assign({}, e, (o = {}, o[r.payload.fileViewerId] = i.__assign({}, e[r.payload.fileViewerId], {
                    bootstrapped: !0
                }), o));
            default:
                return e
        }
    };
    var v = function(e, i) {
        return void 0 === e && (e = t.DEFAULT_STATE.currentUser), "@@apiv2_redux/users/get_current_account_result" === i.type && i.payload.result ? i.payload.result : e
    };
    t.usersReducer = function(e, r) {
        return void 0 === e && (e = t.DEFAULT_STATE.users), "@@apiv2_redux/users/get_account_batch_result" === r.type && r.payload.result ? i.__assign({}, e, r.payload.result.reduce(function(e, t) {
            return e[t.account_id] = t, e
        }, {})) : e
    };
    var h = function(e) {
            return i.__assign({}, e, {
                sidebar: i.__assign({}, e.sidebar, {
                    visibility: e.sidebar.visibility === n.SidebarVisibility.Open ? n.SidebarVisibility.Closed : n.SidebarVisibility.Open
                })
            })
        },
        g = (d = {}, d[n.FileViewerMode.Default] = function(e) {
            return e.mode === n.FileViewerMode.Default ? e : i.__assign({}, e, {
                mode: n.FileViewerMode.Default
            })
        }, d[n.FileViewerMode.Documentation] = function(e) {
            return e.mode === n.FileViewerMode.Documentation ? h(e) : i.__assign({}, e, {
                mode: n.FileViewerMode.Documentation,
                sidebar: i.__assign({}, e.sidebar, {
                    paneStack: [n.SidebarPaneId.Documentation],
                    selectedControlId: n.SidebarControlId.Documentation,
                    visibility: n.SidebarVisibility.Open
                })
            })
        }, d[n.FileViewerMode.Commenting] = function(e) {
            return e.mode === n.FileViewerMode.Commenting ? h(e) : i.__assign({}, e, {
                mode: n.FileViewerMode.Commenting,
                sidebar: i.__assign({}, e.sidebar, {
                    paneStack: [n.SidebarPaneId.Comments],
                    selectedControlId: n.SidebarControlId.Comments,
                    visibility: n.SidebarVisibility.Open
                })
            })
        }, d[n.FileViewerMode.Watermarking] = function(e) {
            return e.mode === n.FileViewerMode.Watermarking ? h(e) : i.__assign({}, e, {
                mode: n.FileViewerMode.Watermarking,
                sidebar: i.__assign({}, e.sidebar, {
                    paneStack: [n.SidebarPaneId.Watermarking],
                    selectedControlId: n.SidebarControlId.Watermarking,
                    visibility: n.SidebarVisibility.Open
                })
            })
        }, d[n.FileViewerMode.Zoom] = function(e) {
            return e.mode === n.FileViewerMode.Zoom ? h(e) : i.__assign({}, e, {
                mode: n.FileViewerMode.Zoom,
                sidebar: i.__assign({}, e.sidebar, {
                    paneStack: [n.SidebarPaneId.Zoom],
                    selectedControlId: n.SidebarControlId.Zoom,
                    visibility: n.SidebarVisibility.Open
                })
            })
        }, d[n.FileViewerMode.Slack] = function(e) {
            return e.mode === n.FileViewerMode.Slack ? h(e) : i.__assign({}, e, {
                mode: n.FileViewerMode.Slack,
                sidebar: i.__assign({}, e.sidebar, {
                    paneStack: [n.SidebarPaneId.SlackHome],
                    selectedControlId: n.SidebarControlId.Slack,
                    visibility: n.SidebarVisibility.Open
                })
            })
        }, d);
    t.modesReducer = function(e, r) {
        var n, o, a, s, l, c;
        switch (void 0 === e && (e = t.DEFAULT_STATE.modes), r.type) {
            case "@@previews/initializeFileViewer":
                return i.__assign({}, e, (n = {}, n[r.payload.fileViewerId] = t.DEFAULT_MODE, n));
            case "@@previews/setInitialFocus":
                return i.__assign({}, e, (o = {}, o[r.payload.fileViewerId] = g[r.payload.mode](t.DEFAULT_MODE), o));
            case "@@previews/setSidebarVisibility":
                var d = r.payload,
                    u = d.fileViewerId,
                    p = d.visibility;
                return i.__assign({}, e, (a = {}, a[u] = i.__assign({}, e[u], {
                    sidebar: i.__assign({}, e[u].sidebar, {
                        visibility: p
                    })
                }), a));
            case "@@previews/modes/changeMode":
                var _ = g[r.payload.mode](e[r.payload.fileViewerId]);
                return _ !== e[r.payload.fileViewerId] ? i.__assign({}, e, (s = {}, s[r.payload.fileViewerId] = _, s)) : e;
            case "@@previews/pushSidebarPane":
                var f = r.payload,
                    u = f.fileViewerId,
                    m = f.paneId,
                    v = e[u] || t.DEFAULT_MODE,
                    h = v.sidebar.paneStack;
                return h.includes(m) ? e : i.__assign({}, e, (l = {}, l[u] = i.__assign({}, v, {
                    sidebar: i.__assign({}, v.sidebar, {
                        paneStack: h.concat([m])
                    })
                }), l));
            case "@@previews/popSidebarPane":
                var u = r.payload.fileViewerId,
                    v = e[u] || t.DEFAULT_MODE,
                    h = v.sidebar.paneStack;
                return 0 === h.length ? e : i.__assign({}, e, (c = {}, c[u] = i.__assign({}, v, {
                    sidebar: i.__assign({}, v.sidebar, {
                        paneStack: h.slice(0, -1)
                    })
                }), c));
            default:
                return e
        }
    };
    var w = function(e, r) {
            var n, o;
            return void 0 === e && (e = t.DEFAULT_STATE.nativeApps), "@@previews/initializeFilePreview" === r.type ? i.__assign({}, e, (n = {}, n[r.payload.fileInfo.file_id] = {
                apps: []
            }, n)) : "@@previews/fetchNativeAppsResult" === r.type ? i.__assign({}, e, (o = {}, o[r.payload.fileId] = r.payload.result, o)) : e
        },
        A = function(e, i) {
            return void 0 === e && (e = t.DEFAULT_STATE.networkConnectivity), "@@previews/setNetworkState" === i.type ? {
                isOffline: i.payload.isOffline
            } : e
        },
        b = function(e, r) {
            var n, o, a;
            if (void 0 === e && (e = t.DEFAULT_STATE.fileViewerUi), !r.payload) return e;
            var s = r.payload.fileViewerId,
                l = e[s] || {};
            switch (r.type) {
                case "@@previews/initializeFileViewer":
                    return i.__assign({}, e, (n = {}, n[s] = {
                        isDocSidebarOpen: !0
                    }, n));
                case "@@previews/fileViewerUi/openDocSidebar":
                    return i.__assign({}, e, (o = {}, o[s] = i.__assign({}, l, {
                        isDocSidebarOpen: !0
                    }), o));
                case "@@previews/fileViewerUi/closeDocSidebar":
                    return i.__assign({}, e, (a = {}, a[s] = i.__assign({}, l, {
                        isDocSidebarOpen: !1
                    }), a));
                default:
                    return e
            }
        },
        y = function(e, r) {
            var n;
            return void 0 === e && (e = t.DEFAULT_STATE.uploadInfo), "@@apiv2_redux/files/get_upload_info_result" === r.type && r.payload.result ? i.__assign({}, e, (n = {}, n[r.payload.arg.file_path_or_id] = r.payload.result, n)) : e
        },
        F = function(e, r) {
            var n;
            return void 0 === e && (e = t.DEFAULT_STATE.fileContentMetadata), "@@apiv2_redux/files/get_file_content_metadata_result" === r.type && r.payload.result ? i.__assign({}, e, (n = {}, n[r.payload.arg.file_path_or_id] = r.payload.result, n)) : e
        };
    t.reducers = {
        modes: t.modesReducer,
        previewData: p,
        fileMetadata: _,
        rivieraData: f,
        filePreviewUi: m,
        fileViewerUi: b,
        loggingSession: t.loggingSessionReducer,
        currentFileInfo: t.currentFileInfoReducer,
        users: t.usersReducer,
        currentUser: v,
        nativeApps: w,
        networkConnectivity: A,
        uploadInfo: y,
        fileContentMetadata: F
    }
}), define("file-viewer/core/data/riviera/api", ["require", "exports", "tslib"], function(e, t, i) {
    "use strict";

    function r(e, t, i) {
        return 401 === e && i ? new o("Password required", 12) : new o("Load Error", t.rivieraStatusCode)
    }

    function n(e, t, i, r, n) {
        void 0 === i && (i = 0), void 0 === r && (r = 50), void 0 === n && (n = !1);
        var o = new URL(e);
        return t && o.searchParams.set("metadata", "1"), void 0 !== i && (o.searchParams.set("text", "1"), o.searchParams.set("page_start", i.toString()), o.searchParams.set("page_end", r.toString())), n && o.searchParams.set("canned_file_name", "spdf/audi.pdf.json"), o.toString()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = (function(e) {
        function t(t, i) {
            void 0 === i && (i = 0);
            var r = e.call(this, t) || this;
            return r.statusCode = i, r
        }
        return i.__extends(t, e), t
    })(Error);
    t.RivieraError = o;
    var a = function(e) {
        var t = {};
        try {
            e && (t = JSON.parse(e))
        } catch (e) {}
        return t
    };
    t.textUrl = n;
    var s = (function() {
        function e() {}
        return e.prototype.refreshDocBlob = function(e, t) {
            return i.__awaiter(this, void 0, void 0, function() {
                var r, n, o;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return r = t ? {
                                password: t
                            } : {}, [4, fetch(e, {
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(r),
                                credentials: "include",
                                method: "POST"
                            })];
                        case 1:
                            return n = i.sent(), [4, n.json()];
                        case 2:
                            return o = i.sent(), [2, {
                                ok: n.ok,
                                status: n.status,
                                data: o,
                                headers: {
                                    "x-dropbox-metadata": n.headers.get("x-dropbox-metadata"),
                                    "x-dropbox-pdf-password-needed": n.headers.get("x-dropbox-pdf-password-needed")
                                }
                            }]
                    }
                })
            })
        }, e.prototype.fetchDocMetadata = function(e, t, r, o, a) {
            return i.__awaiter(this, void 0, void 0, function() {
                var s, l;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, fetch(n(e, t, r, o, a), {
                                headers: {
                                    "content-type": "application/json"
                                },
                                credentials: "include",
                                method: "POST"
                            })];
                        case 1:
                            return s = i.sent(), [4, s.json()];
                        case 2:
                            return l = i.sent(), [2, {
                                ok: s.ok,
                                status: s.status,
                                data: l,
                                headers: {
                                    "x-dropbox-metadata": s.headers.get("x-dropbox-metadata"),
                                    "x-dropbox-pdf-password-needed": s.headers.get("x-dropbox-pdf-password-needed")
                                }
                            }]
                    }
                })
            })
        }, e
    })();
    t.WebRivieraIOClient = s;
    var l = (function() {
        function e(e) {
            this.ioClient = e
        }
        return e.prototype.refreshDocBlob = function(e, t) {
            return i.__awaiter(this, void 0, void 0, function() {
                var n, o, s, l, c, d, u, p, _, f;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.ioClient.refreshDocBlob(e, t)];
                        case 1:
                            if (n = i.sent(), o = n.data, s = n.status, l = n.ok, c = n.headers, !l) throw d = "1" === c["x-dropbox-pdf-password-needed"], u = a(c["x-dropbox-metadata"]), r(s, u, d);
                            return p = o.text, _ = o.image, f = o.refresh, [2, {
                                text_url_tmpl: p,
                                image_url_tmpl: _,
                                refresh_url: f
                            }]
                    }
                })
            })
        }, e.prototype.fetchDocMetadata = function(e, t, n, o, s) {
            return void 0 === t && (t = !1), void 0 === n && (n = 0), void 0 === o && (o = 50), void 0 === s && (s = !1), i.__awaiter(this, void 0, void 0, function() {
                var l, c, d, u, p, _, f;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.ioClient.fetchDocMetadata(e, t, n, o, s)];
                        case 1:
                            if (l = i.sent(), c = l.ok, d = l.data, u = l.status, p = l.headers, c) return [2, d];
                            throw _ = "1" === p["x-dropbox-pdf-password-needed"], f = a(p["x-dropbox-metadata"]), r(u, f, _)
                    }
                })
            })
        }, e
    })();
    t.RivieraClientBase = l
}), define("file-viewer/core/data/riviera", ["require", "exports", "file-viewer/core/data/riviera/api", "file-viewer/core/data/riviera/types"], function(e, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RivieraError = i.RivieraError, t.RivieraClientBase = i.RivieraClientBase, t.WebRivieraIOClient = i.WebRivieraIOClient, t.RivieraStatus = r.RivieraStatus
}), define("file-viewer/core/data/riviera/transform", ["require", "exports", "tslib", "file-viewer/core/urls"], function(e, t, i, r) {
    "use strict";

    function n(e) {
        var t = e.n.lastIndexOf(",");
        return {
            fontFamily: '"' + (t > -1 ? e.n.substr(0, t) : e.n) + '", ' + (1 & e.f ? "monospace" : "serif"),
            isBold: (e.f & 1 << 18) > 0,
            isItalic: (64 & e.f) > 0
        }
    }

    function o(e, t, i) {
        void 0 === t && (t = []);
        for (var n = t.reduce(function(e, t) {
                for (var i = t[0], r = t[1], n = t[2], o = 0; o < n; o++) e.push([i, r]);
                return e
            }, []), o = new Array(i), a = 0; a < i; a++) o[a] = {
            pageIndex: a,
            dimension: n[a],
            thumbnailUrl: r.imageUrl(e, {
                page: a,
                scale_percent: 0
            }),
            imgUrls: {
                "1x": r.imageUrl(e, {
                    page: a,
                    scale_percent: 0
                }),
                "4x": r.imageUrl(e, {
                    page: a,
                    scale_percent: 400
                })
            },
            textboxes: [],
            links: []
        };
        return o
    }

    function a(e) {
        var t = e.text;
        if (!t || !t.pages) return [];
        var r = t.links,
            o = t.pages,
            a = (t.fonts || []).reduce(function(e, t) {
                return e[t.f] = n(t), e
            }, {});
        return Object.keys(o).map(function(e) {
            return {
                pageIndex: +e,
                textboxes: (o[e] || []).map(function(e) {
                    return i.__assign({}, e, {
                        font: a[e.f]
                    })
                }),
                links: r && r[e] || []
            }
        })
    }

    function s(e, t, r, n) {
        void 0 === t && (t = []);
        var s = o(e, t, r);
        return a(n).forEach(function(e) {
            var t = e.pageIndex;
            s[t] = i.__assign({}, s[t], e)
        }), s
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.processTextAndUrl = s
}), define("file-viewer/core/data/riviera/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.OK = 1] = "OK", e[e.ConversionFailure = 2] = "ConversionFailure", e[e.TemporaryFailure = 3] = "TemporaryFailure", e[e.InternalFailure = 4] = "InternalFailure", e[e.UnsupportedFormat = 5] = "UnsupportedFormat", e[e.Timeout = 6] = "Timeout", e[e.TooBig = 7] = "TooBig", e[e.InvalidMetadata = 8] = "InvalidMetadata", e[e.SourceCorrupt = 9] = "SourceCorrupt", e[e.TimeBudgetExceeded = 10] = "TimeBudgetExceeded", e[e.NotFound = 11] = "NotFound", e[e.PasswordProtected = 12] = "PasswordProtected", e[e.InvalidRequest = 13] = "InvalidRequest", e[e.VirusDetected = 14] = "VirusDetected", e[e.BlockMissing = 15] = "BlockMissing"
    })(t.RivieraStatus || (t.RivieraStatus = {}))
}), define("file-viewer/core/data/selectors", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e, t) {
        var i = t.fileViewerId;
        return e.currentFileInfo[i]
    }

    function r(e, t) {
        return i(e, {
            fileViewerId: t.fileViewerId
        }).file_id
    }

    function n(e, t) {
        var i = t.fileViewerId;
        return e.filePreviewUi[i]
    }

    function o(e, t) {
        var i = t.fileViewerId,
            o = r(e, {
                fileViewerId: i
            });
        return n(e, {
            fileViewerId: i
        })[o]
    }

    function a(e) {
        return e.zoomScaleFactor || e.fitScaleFactor
    }

    function s(e, t) {
        var i = t.fileViewerId,
            r = o(e, {
                fileViewerId: i
            }),
            n = r.zoomScaleFactor,
            a = r.fitScaleFactor;
        return !!n && n > a
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCurrentScaleFactorFromFilePreviewUi = a, t.isPreviewZoomed = s
}), define("file-viewer/core/errors", ["require", "exports", "tslib"], function(e, t, i) {
    "use strict";

    function r(e) {
        return e instanceof n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e[e.PreviewsDataApiFailure = 0] = "PreviewsDataApiFailure", e[e.MalformedPreviewsDataApiResponse = 1] = "MalformedPreviewsDataApiResponse", e[e.PreviewRendererFetchFailure = 2] = "PreviewRendererFetchFailure", e[e.LayerRendererFetchFailure = 3] = "LayerRendererFetchFailure", e[e.RivieraDataFetchFailure = 4] = "RivieraDataFetchFailure", e[e.MalformedRivieraData = 5] = "MalformedRivieraData", e[e.FileTooLarge = 6] = "FileTooLarge", e[e.UnsupportedPreviewType = 7] = "UnsupportedPreviewType", e[e.NoExtension = 8] = "NoExtension", e[e.PasswordProtected = 9] = "PasswordProtected", e[e.FileUploading = 10] = "FileUploading", e[e.Unknown = 11] = "Unknown", e[e.FileSwitched = 12] = "FileSwitched", e[e.InvalidFileInfo = 13] = "InvalidFileInfo", e[e.InvalidLoggingOrder = 14] = "InvalidLoggingOrder", e[e.InvalidLoggingSession = 15] = "InvalidLoggingSession", e[e.UserOffline = 16] = "UserOffline", e[e.MissingContentMetadata = 17] = "MissingContentMetadata"
    })(t.FVErrorCode || (t.FVErrorCode = {}));
    var n = (function(e) {
        function t(i, r) {
            var n = e.call(this, r) || this;
            return n.type = i, Error.captureStackTrace && Error.captureStackTrace(n, t), n
        }
        return i.__extends(t, e), t
    })(Error);
    t.FVError = n, t.isFVError = r
}), define("file-viewer/core/extension_constants", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        return e = e.toLowerCase(), t.DOC_EXTS.includes(e) ? "ssr_doc" : t.IMAGE_EXTS.includes(e) ? "image" : h.includes(e) ? "video" : g.includes(e) ? "audio" : b.includes(e) ? "linkfile" : v.includes(e) ? "html" : S.includes(e) ? "cloud_doc" : "other"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = [".odt", ".wpd"],
        n = [".odp"],
        o = [".doc", ".docx", ".docm", ".rtf"],
        a = [".ppt", ".pps", ".ppsx", ".ppsm", ".pptx", ".pptm"],
        s = [".pdf"],
        l = [".ai", ".eps"];
    t.PHOTO_EXTS = [".bmp", ".gif", ".jpeg", ".jpg", ".png", ".tif", ".tiff", ".wbmp", ".webp"];
    var c = [".xd"];
    t.IMAGE_EXTS = t.PHOTO_EXTS.concat(c);
    var d = [".key", ".keynote"],
        u = [".dwg"],
        p = [".as", ".as3", ".asm", ".aspx", ".bat", ".c", ".cc", ".cmake", ".coffee", ".cpp", ".cs", ".css", ".cxx", ".diff", ".erb", ".erl", ".groovy", ".gry", ".h", ".haml", ".hh", ".hpp", ".hxx", ".java", ".js", ".json", ".jsx", ".less", ".lst", ".m", ".make", ".ml", ".mm", ".out", ".patch", ".php", ".pl", ".plist", ".properties", ".py", ".rb", ".sass", ".scala", ".scm", ".script", ".scss", ".sh", ".sml", ".sql", ".tsx", ".vb", ".vi", ".vim", ".xml", ".xsd", ".xsl", ".yaml", ".yml"],
        _ = [".epub"],
        f = [".markdown", ".mdown", ".mkdn", ".md"],
        m = [".abap", ".ada", ".adp", ".ahk", ".asc", ".ascx", ".asp", ".awk", ".bash", ".bash_login", ".bash_logout", ".bash_profile", ".bashrc", ".bib", ".bsh", ".build", ".builder", ".c++", ".capfile", ".cfc", ".cfm", ".cfml", ".cl", ".clj", ".cls", ".cmd", ".cpt", ".cpy", ".cshtml", ".cson", ".csproj", ".ctp", ".d", ".ddl", ".di", ".dif", ".disco", ".dml", ".dtd", ".dtml", ".el", ".emakefile", ".f", ".f90", ".f95", ".fs", ".fsi", ".fsscript", ".fsx", ".gemfile", ".gemspec", ".gitconfig", ".go", ".gvy", ".h++", ".handlebars", ".hbs", ".hcp", ".hrl", ".hs", ".htc", ".idl", ".iim", ".inc", ".inf", ".ini", ".inl", ".ipp", ".irbrc", ".jade", ".jav", ".jsp", ".l", ".lhs", ".lisp", ".log", ".ltx", ".lua", ".markdn", ".mli", ".mll", ".mly", ".mud", ".nfo", ".opml", ".osascript", ".out", ".p", ".pas", ".patch", ".php2", ".php3", ".php4", ".php5", ".phtml", ".pm", ".pod", ".pp", ".profile", ".ps1", ".psd1", ".psm1", ".pt", ".pyw", ".r", ".rake", ".rbx", ".rc", ".re", ".readme", ".reg", ".rest", ".resw", ".resx", ".rhtml", ".rjs", ".rprofile", ".rpy", ".rss", ".rst", ".rxml", ".s", ".scm", ".sconscript", ".sconstruct", ".sgml", ".shtml", ".sty", ".swift", ".tcl", ".tex", ".text", ".textile", ".tld", ".tli", ".tmpl", ".tpl", ".txt", ".vim", ".wsdl", ".xhtml", ".xoml", ".xslt", ".yaws", ".zsh"],
        v = p.concat(_, f, m),
        h = [".3gp", ".3gpp", ".3gpp2", ".asf", ".avi", ".dv", ".flv", ".m2t", ".m4v", ".mkv", ".mov", ".mp4", ".mpeg", ".mpg", ".mts", ".mxf", ".oggtheora", ".ogv", ".rm", ".ts", ".vob", ".webm", ".wmv"],
        g = [".aac", ".aif", ".aiff", ".m4a", ".m4r", ".mp3", ".oga", ".wav", ".wma"],
        w = [".url", ".website"],
        A = [".webloc"],
        b = w.concat(A),
        y = [".paper", ".papert"],
        F = [".gdoc", ".gslides"],
        R = [".gsheet"],
        C = [".web"],
        S = y.concat(R, F, C);
    t.PRESENTATION_EXTS = a.concat(n), t.DOC_EXTS = s.concat(l, n, r, a, o, d, u), t.resolvePreviewTypeFromExtension = i
}), define("file-viewer/core/i18n", ["require", "exports", "tslib", "intl-messageformat", "file-viewer/core/uuid"], function(e, t, i, r, n) {
    "use strict";

    function o(e, t) {
        var i = Array.isArray(e) ? e.slice() : [e];
        if (i.sort(), !t) return i.join("|");
        var r = Object.keys(t);
        return r.sort(), r.reduce(function(e, i) {
            return e + "|" + i + "=" + t[i]
        }, i.join("|"))
    }

    function a(e, t) {
        return function(i, r) {
            var n = o(e, r);
            return t[n] || (t[n] = new Intl.NumberFormat(e, r)), t[n].format(i)
        }
    }

    function s(e, t) {
        return function(i, r) {
            var n = o(e, r);
            return t[n] || (t[n] = new Intl.DateTimeFormat(e, r)), t[n].format(i)
        }
    }

    function l(e) {
        return e.replace(/%\((.*?)\)s/g, "{$1}")
    }

    function c(e, t) {
        var i = {},
            r = {};
        t && (i = Object.keys(t).reduce(function(e, i) {
            var o = t[i];
            if ("object" == typeof o) {
                var a = n.v4();
                r[a] = o, e[i] = g + a + g
            } else e[i] = o;
            return e
        }, {}));
        var o = e(i),
            a = Object.keys(r);
        return t && a.length ? o.split(g).filter(Boolean).map(function(e) {
            return e in r ? r[e] : e
        }) : o
    }

    function d(e, t, i) {
        return void 0 === i && (i = {}),
            function(n, o) {
                var a, s = n.id,
                    l = n.defaultMessage;
                return s ? (a = i[s], a || (a = new r.default(t[s] || l, e)), i[s] = a) : a = new r.default(l, e), c(function(e) {
                    return a.format(e)
                }, o)
            }
    }

    function u(e, t, i) {
        void 0 === i && (i = {});
        var r = Object.keys(t).reduce(function(e, i) {
                var r = t[i];
                return "object" == typeof r ? (e[i + "-one"] = l(r.message(1)), e[i + "-other"] = l(r.message(2))) : e[i] = l(r), e
            }, {}),
            n = d(e, r, i);
        return function(e, i) {
            var r = e.id,
                o = e.defaultMessage;
            if (r) {
                var a = t[r];
                if ("object" == typeof a && i) {
                    return n({
                        id: i[a.token] > 1 ? r + "-other" : r + "-one",
                        defaultMessage: o
                    }, i)
                }
            }
            return i ? n(e, i) : n(e)
        }
    }

    function p() {
        return {
            messageFormat: {},
            numberFormat: {},
            dateTimeFormat: {}
        }
    }

    function _(e) {
        function t(e) {
            return (e || "en").replace(/_/gi, "-")
        }
        return Array.isArray(e) ? e.map(t) : t(e)
    }

    function f(e, t, i) {
        return {
            formatMessage: d(e, t, i.messageFormat),
            formatNumber: a(e, i.numberFormat),
            formatDateTime: s(e, i.dateTimeFormat)
        }
    }

    function m(e, t, i) {
        return e = _(e), {
            formatMessage: u(e, t, i.messageFormat),
            formatNumber: a(e, i.numberFormat),
            formatDateTime: s(e, i.dateTimeFormat)
        }
    }

    function v(e, t) {
        var i = {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        };
        return e < 1024 ? t.formatMessage({
            id: "3ptrG",
            defaultMessage: "{value, plural, one {# byte} other {# bytes}}"
        }, {
            value: t.formatNumber(e, i)
        }) : e < 921600 ? t.formatMessage({
            id: "2StGi",
            defaultMessage: "{value} KB"
        }, {
            value: t.formatNumber(e / 1024, i)
        }) : e < 900 * Math.pow(1024, 2) ? t.formatMessage({
            id: "1IUi0",
            defaultMessage: "{value} MB"
        }, {
            value: t.formatNumber(e / Math.pow(1024, 2), i)
        }) : e < 900 * Math.pow(1024, 3) ? t.formatMessage({
            id: "39Cwd",
            defaultMessage: "{value} GB"
        }, {
            value: t.formatNumber(e / Math.pow(1024, 3), i)
        }) : t.formatMessage({
            id: "3Ukg4",
            defaultMessage: "{value} TB"
        }, {
            value: t.formatNumber(e / Math.pow(1024, 4), i)
        })
    }

    function h(e, t) {
        if (e && !(isNaN(e) || e <= 0)) return e < 6e4 ? t.formatMessage({
            id: "3oKzS",
            defaultMessage: "{value, plural, one{# second} other{# seconds}}"
        }, {
            value: Math.round(e / 1e3)
        }) : e < 36e5 ? t.formatMessage({
            id: "20Xme",
            defaultMessage: "{value, plural, one{# minute} other{# minutes}}"
        }, {
            value: Math.round(e / 6e4)
        }) : e < 864e5 ? t.formatMessage({
            id: "3L3dr",
            defaultMessage: "{value, plural, one{# hour} other{# hours}}"
        }, {
            value: Math.round(e / 36e5)
        }) : e < 6048e5 ? t.formatMessage({
            id: "1XFv4",
            defaultMessage: "{value, plural, one{# day} other{# days}}"
        }, {
            value: Math.round(e / 864e5)
        }) : e < 2592e6 ? t.formatMessage({
            id: "2ltJd",
            defaultMessage: "{value, plural, one{# week} other{# weeks}}"
        }, {
            value: Math.round(e / 6048e5)
        }) : e < 31536e6 ? t.formatMessage({
            id: "1ZMrP",
            defaultMessage: "{value, plural, one{# month} other{# months}}"
        }, {
            value: Math.round(e / 2592e6)
        }) : t.formatMessage({
            id: "2KExw",
            defaultMessage: "{value, plural, one{# year} other{# years}}"
        }, {
            value: Math.round(e / 31536e6)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importDefault(r);
    var g = "@__" + n.v4() + "__@";
    t.createI18nCache = p, t.createFormatters = f, t.createMetaserverFormatters = m, t.dummyFormatMessage = function(e) {
        return e.defaultMessage
    }, t.dummyI18nFormatters = f("en", {}, p()), t.dummyMetaserverI18nFormatters = m("en", {}, p()), t.formatBytes = v;
    t.formatDuration = h
}), define("file-viewer/core", ["require", "exports", "file-viewer/core/utils", "file-viewer/core/i18n", "file-viewer/core/invariant", "file-viewer/core/ui/types", "file-viewer/core/uuid", "file-viewer/core/bootstrap", "file-viewer/core/data/reducer", "file-viewer/core/data/models", "file-viewer/core/data/actions", "modules/clean/api_v2/redux/previews", "file-viewer/core/logging/session", "file-viewer/core/logging/actions", "file-viewer/core/urls", "file-viewer/core/data/riviera", "file-viewer/core/extension_constants", "file-viewer/core/utils", "file-viewer/core/config", "file-viewer/core/data/modes/types", "file-viewer/core/middlewares/navigation", "file-viewer/core/middlewares/native_apps", "file-viewer/core/constants", "file-viewer/core/errors"], function(e, t, i, r, n, o, a, s, l, c, d, u, p, _, f, m, v, h, g, w, A, b, y, F) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.calculateFitBox = i.calculateFitBox, t.shallowEqual = i.shallowEqual, t.createFormatters = r.createFormatters, t.createI18nCache = r.createI18nCache, t.dummyFormatMessage = r.dummyFormatMessage, t.dummyI18nFormatters = r.dummyI18nFormatters, t.createMetaserverFormatters = r.createMetaserverFormatters, t.dummyMetaserverI18nFormatters = r.dummyMetaserverI18nFormatters, t.formatBytes = r.formatBytes, t.formatDuration = r.formatDuration, t.invariant = n.invariant, t.Theme = o.Theme, t.uuidV4 = a.v4, t.createFileViewerSDK = s.createFileViewerSDK, t.createSDKStore = s.createSDKStore, t.reducers = l.reducers, t.DEFAULT_FILE_PREVIEW_UI = l.DEFAULT_FILE_PREVIEW_UI, t.DEFAULT_USER = l.DEFAULT_USER, t.DEFAULT_MODE = l.DEFAULT_MODE, t.DEFAULT_FILE_VIEWER_UI = l.DEFAULT_FILE_VIEWER_UI, t.DEFAULT_STATE = l.DEFAULT_STATE, t.PreviewType = c.PreviewType, t.Action = d.Action, t.setBootstrappedFileId = d.setBootstrappedFileId, t.refreshBlobSuccessAction = d.refreshBlobSuccessAction, t.updateDocCurrentPageIndex = d.updateDocCurrentPageIndex, t.fetchPageDataWithMetadata = d.fetchPageDataWithMetadata, t.zoomIn = d.zoomIn, t.zoomOut = d.zoomOut, t.zoomOriginalOrFit = d.zoomOriginalOrFit, t.updateFitScaleFactor = d.updateFitScaleFactor, t.refreshBlobAction = d.refreshBlobAction, t.openDocSidebar = d.openDocSidebar, t.closeDocSidebar = d.closeDocSidebar, t.setCurrentFilePreview = d.setCurrentFilePreview, t.pageUp = d.pageUp, t.pageDown = d.pageDown, t.changeMode = d.changeMode, t.sidebarControlClickAction = d.sidebarControlClickAction, t.setSidebarVisibilityAction = d.setSidebarVisibilityAction, t.shareAction = d.shareAction, t.openWith = d.openWith, t.openWebPreview = d.openWebPreview, t.setFileMetadata = d.setFileMetadata, t.initializeFilePreviewSession = d.initializeFilePreviewSession, t.initializeFilePreview = d.initializeFilePreview, t.fetchPageDataWithMetadataResult = d.fetchPageDataWithMetadataResult, t.pushSidebarPane = d.pushSidebarPane, t.openVersionHistory = d.openVersionHistory, t.previewsDataMiddleware = u.middleware, t.createFilePreviewSession = p.createFilePreviewSession, t.DeviceType = p.DeviceType, t.EventType = p.EventType, t.SourceAction = p.SourceAction, t.SourceContext = p.SourceContext, t.UserAction = p.UserAction, t.UserActionContext = p.UserActionContext, t.logEvent = _.logEvent, t.logTTI = _.logTTI, t.imageUrl = f.imageUrl, t.RivieraStatus = m.RivieraStatus, t.RivieraError = m.RivieraError, t.WebRivieraIOClient = m.WebRivieraIOClient, t.PHOTO_EXTS = v.PHOTO_EXTS, t.DOC_EXTS = v.DOC_EXTS, t.PRESENTATION_EXTS = v.PRESENTATION_EXTS, t.resolvePreviewTypeFromExtension = v.resolvePreviewTypeFromExtension, t.getFileExtension = h.getFileExtension, t.getParentFolderFromPath = h.getParentFolderFromPath, t.fileSizeSupported = h.fileSizeSupported, t.getFileSizeLimit = h.getFileSizeLimit, t.resolveAsset = h.resolveAsset, t.resolvePreviewType = h.resolvePreviewType, t.calculatePageRange = h.calculatePageRange, t.memoizeOne = h.memoizeOne, t.DEFAULT_CONFIG = g.DEFAULT_CONFIG, t.SidebarControlId = w.SidebarControlId, t.SidebarPaneId = w.SidebarPaneId, t.SidebarVisibility = w.SidebarVisibility, t.FileViewerMode = w.FileViewerMode, t.navigationMiddleware = A.middleware, t.nativeAppsMiddleware = b.middleware, t.MAX_IMG_SCALE_FACTOR = y.MAX_IMG_SCALE_FACTOR, t.MIN_IMG_SCALE_FACTOR = y.MIN_IMG_SCALE_FACTOR, t.FVErrorCode = F.FVErrorCode, t.FVError = F.FVError, t.isFVError = F.isFVError
}), define("file-viewer/core/invariant", ["require", "exports", "file-viewer/core/errors"], function(e, t, i) {
    "use strict";

    function r(e, t, r) {
        if (void 0 === t && (t = i.FVErrorCode.Unknown), !e) {
            var n = void 0;
            throw n = void 0 === r ? new i.FVError(t, "An error occurred for unknown reason") : new i.FVError(t, r), n.framesToPop = 1, n
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.invariant = r
}), define("file-viewer/core/logging/actions", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        return {
            type: "@@previews/log",
            payload: e
        }
    }

    function r(e) {
        return {
            type: "@@previews/logTTI",
            payload: e
        }
    }

    function n(e) {
        return {
            type: "@@previews/updateSession",
            payload: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e.UpdateSession = "@@previews/updateSession", e.Log = "@@previews/log", e.LogTTI = "@@previews/logTTI"
    })(t.Action || (t.Action = {})), t.logEvent = i, t.logTTI = r, t.updateSession = n
}), define("file-viewer/core/logging/session", ["require", "exports", "tslib", "file-viewer/core/uuid", "file-viewer/core/invariant", "file-viewer/core/errors"], function(e, t, i, r, n, o) {
    "use strict";

    function a(e) {
        var t = e || {},
            n = t.file_viewer_session_id,
            o = void 0 === n ? r.v4() : n,
            a = t.file_preview_session_id,
            s = void 0 === a ? r.v4() : a,
            l = t.file_id,
            c = void 0 === l ? "" : l,
            d = t.file_extension,
            u = void 0 === d ? "" : d,
            p = t.device_type,
            _ = void 0 === p ? "desktop" : p,
            f = t.extra,
            m = void 0 === f ? {} : f;
        return {
            file_viewer_session_id: o,
            file_preview_session_id: s,
            file_id: c,
            file_extension: u,
            device_type: _,
            extra: i.__assign({}, m, {
                source_action: m.source_action || "visit",
                source_context: m.source_context || "file_viewer",
                file_preview_timeline: {}
            })
        }
    }

    function s(e, t, r) {
        var a, s = e.extra.last_event;
        switch (n.invariant(s !== t, o.FVErrorCode.InvalidLoggingOrder, "Cannot log duplicate event " + t), t) {
            case "support_confirmed":
            case "support_denied":
                n.invariant("preview_attempted" === s, o.FVErrorCode.InvalidLoggingOrder, "Event out of order, expect `last_event` to be 'preview_attempted' but was '" + s + "'");
                break;
            case "download_attempted":
                n.invariant("support_confirmed" === s, o.FVErrorCode.InvalidLoggingOrder, "Event out of order, expect `last_event` to be 'support_confirmed' but was '" + s + "'");
                break;
            case "download_failed":
            case "download_succeeded":
                n.invariant("download_attempted" === s, o.FVErrorCode.InvalidLoggingOrder, "Event out of order, expect `last_event` to be 'download_attempted' but was '" + s + "'");
                break;
            case "render_succeeded":
            case "render_failed":
                n.invariant("download_succeeded" === s, o.FVErrorCode.InvalidLoggingOrder, "Event out of order, expect `last_event` to be 'download_succeeded' but was '" + s + "'")
        }
        return i.__assign({}, e, {
            extra: i.__assign({}, e.extra, {
                file_preview_timeline: i.__assign({}, e.extra.file_preview_timeline, (a = {}, a[t] = Date.now(), a))
            }, r || {})
        })
    }

    function l(e, t) {
        return i.__assign({}, e, {
            extra: i.__assign({}, e.extra, {
                last_event: t
            })
        })
    }

    function c(e, t) {
        return i.__assign({}, e, {
            extra: i.__assign({}, e.extra, t)
        })
    }

    function d(e) {
        var t = i.__assign({}, e.extra);
        if (t.time_to_primary_mark) return e;
        switch (t.primary_mark_ts || (t.primary_mark_ts = Date.now()), t.source_action) {
            case "visit":
                n.invariant(!!t.page_start_ts, o.FVErrorCode.InvalidLoggingSession, "Cannot calculate 1st page TTI without page_start_ts"), t.time_to_primary_mark = t.primary_mark_ts - t.page_start_ts;
                break;
            case "click":
                n.invariant(t.file_preview_timeline && !!t.file_preview_timeline.preview_attempted, o.FVErrorCode.InvalidLoggingSession, "Cannot calculate subsequent page TTI without preview_attempted timestamp"), t.time_to_primary_mark = t.primary_mark_ts - t.file_preview_timeline.preview_attempted
        }
        return i.__assign({}, e, {
            extra: t
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e.mobile = "mobile", e.tablet = "tablet", e.desktop = "desktop"
    })(t.DeviceType || (t.DeviceType = {})), (function(e) {
        e.Click = "click", e.DoubleClick = "double_click", e.Visit = "visit"
    })(t.SourceAction || (t.SourceAction = {})), (function(e) {
        e.FilePreviewSessionEnded = "preview_session_ended", e.FilePreviewAttemptStarted = "preview_attempted", e.FilePreviewSupportConfirmed = "support_confirmed", e.FilePreviewSupportDenied = "support_denied", e.FilePreviewDownloadAttempted = "download_attempted", e.FilePreviewDownloadSucceeded = "download_succeeded", e.FilePreviewDownloadFailed = "download_failed", e.FilePreviewRenderSucceeded = "render_succeeded", e.FilePreviewRenderFailed = "render_failed", e.UserAction = "user_action"
    })(t.EventType || (t.EventType = {})), (function(e) {
        e.ArchiveFile = "archive_file", e.Browse = "browse", e.CollabBrowse = "collab_browse", e.DesktopCommentNotification = "desktop_comment_notification", e.Desktop = "desktop", e.DesktopDetailsPaneMenu = "desktop_details_pane_menu", e.DesktopPreviewPane = "desktop_preview_pane", e.DesktopTray = "desktop_tray", e.DesktopTrayPopoverExpand = "desktop_tray_popover_expand", e.DesktopTrayContextMenu = "desktop_tray_context_menu", e.EmbeddedSharedLinkFile = "embedded_sl_file", e.FileViewer = "file_viewer", e.SharedLinkCollection = "sl_collection", e.SharedLinkFile = "sl_file", e.SharedLinkFolder = "sl_folder", e.TrelloPreview = "trello_preview", e.Unknown = "unknown", e.VersionHistory = "version_history"
    })(t.SourceContext || (t.SourceContext = {})), (function(e) {
        e.Share = "share", e.Download = "download", e.PageChange = "page_change", e.PageUp = "page_up", e.PageDown = "page_down", e.ToggleFullscreenOn = "toggle_fullscreen_on", e.ToggleFullscreenOff = "toggle_fullscreen_off", e.CloseDocSidebar = "close_doc_sidebar", e.OpenDocSidebar = "open_doc_sidebar", e.FlipNext = "flip_next", e.FlipPrevious = "flip_prev", e.ZoomIn = "zoom_in", e.ZoomOut = "zoom_out", e.ZoomOriginalOrFit = "zoom_original_or_fit", e.ToggleSidebarOn = "toggle_sidebar_on", e.ToggleSidebarOff = "toggle_sidebar_off", e.PageJump = "page_jump", e.ModeChange = "mode_change", e.OpenWith = "open_with", e.OpenWebPreview = "open_web_preview", e.OpenVersionHistory = "open_version_history", e.OpenFullscreenPreview = "open_fullscreen_preview"
    })(t.UserAction || (t.UserAction = {})), (function(e) {
        e.Toolbar = "toolbar", e.DocSidebar = "doc_sidebar", e.Sidebar = "sidebar", e.MouseWheel = "mouse_wheel", e.DocReset = "doc_reset", e.DocLink = "doc_link", e.SurfaceGesture = "surface_gesture", e.PreviewError = "preview_error", e.TrayButton = "tray_button", e.Initialization = "initialization", e.Keyboard = "keyboard"
    })(t.UserActionContext || (t.UserActionContext = {})), t.createFilePreviewSession = a, t.recordEvent = s, t.updateSessionLastEvent = l, t.recordExtra = c, t.markTTI = d
}), define("file-viewer/core/middlewares/analytics", ["require", "exports", "tslib", "file-viewer/core/logging/actions", "file-viewer/core/logging/session"], function(e, t, i, r, n) {
    "use strict";

    function o(e) {
        return Object.keys(e).reduce(function(t, i) {
            var r = e[i];
            return "string" == typeof r || "number" == typeof r ? t[i] = String(r) : "boolean" == typeof r ? t[i] = String(+r) : "object" == typeof r && r && (t[i] = JSON.stringify(r)), t
        }, {})
    }

    function a(e) {
        return i.__assign({}, e, {
            extra: o(e.extra)
        })
    }

    function s(e) {
        return function(t) {
            var s = t.getState;
            return function(t) {
                return function(l) {
                    var d = null;
                    if ("@@previews/log" === l.type) {
                        var u = l.payload,
                            p = u.event,
                            _ = u.fileViewerId,
                            f = u.extra;
                        return d = n.recordEvent(s().loggingSession[_], p, f), e.log(p, a(d)), d = n.updateSessionLastEvent(d, p), t(r.updateSession(d))
                    }
                    if ("@@previews/logTTI" === l.type) return d = n.markTTI(s().loggingSession[l.payload]), e.logTTI(), t(r.updateSession(d));
                    if (l.type in c) {
                        var m = l.payload,
                            _ = m.fileViewerId,
                            v = m.sourceContext,
                            h = s().loggingSession[_];
                        e.log("user_action", a(i.__assign({}, h, {
                            extra: o({
                                context: v,
                                action: c[l.type]
                            })
                        })))
                    }
                    return t(l)
                }
            }
        }
    }
    var l;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = (l = {}, l["@@previews/zoomIn"] = "zoom_in", l["@@previews/zoomOut"] = "zoom_out", l["@@previews/fileViewerUi/closeDocSidebar"] = "close_doc_sidebar", l["@@previews/fileViewerUi/openDocSidebar"] = "open_doc_sidebar", l["@@previews/zoomOriginalOrFit"] = "zoom_original_or_fit", l["@@previews/modes/changeMode"] = "mode_change", l["@@previews/updateDocCurrentPageIndex"] = "page_jump", l["@@previews/pageDown"] = "page_down", l["@@previews/pageUp"] = "page_up", l["@@previews/share"] = "share", l["@@previews/openWith"] = "open_with", l["@@previews/openWebPreview"] = "open_web_preview", l["@@previews/navigation/flipToNextFile"] = "flip_next", l["@@previews/navigation/flipToPreviousFile"] = "flip_prev", l["@@previews/openFullscreenPreview"] = "open_fullscreen_preview", l["@@previews/openVersionHistory"] = "open_version_history", l);
    t.analyticsMiddleware = s
}), define("file-viewer/core/middlewares/local_cache_data", ["require", "exports", "tslib", "modules/clean/api_v2/redux/previews", "file-viewer/core/logging/session", "file-viewer/core/logging/actions"], function(e, t, i, r, n, o) {
    "use strict";

    function a(e) {
        var t = this;
        return function(a) {
            var s = a.getState,
                l = a.dispatch;
            return function(a) {
                return function(c) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        var t, d, u, p, u;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return "@@apiv2_redux/previews/get_preview_data_batch" != c.type ? [3, 2] : e.previewDataCacheClient ? [4, e.previewDataCacheClient.getByFileIds(c.payload.arg.files.map(function(e) {
                                        return e.file_id
                                    }).filter(function(e) {
                                        return "string" == typeof e
                                    }))] : [3, 2];
                                case 1:
                                    if (t = i.sent(), Array.isArray(t.results) && t.results.length > 0) return d = {
                                        arg: c.payload.arg,
                                        result: t
                                    }, c.meta && c.meta.fileViewerId && (u = n.recordExtra(s().loggingSession[c.meta.fileViewerId], {
                                        preview_data_cache_hit: "1"
                                    }), l(o.updateSession(u))), p = r.getPreviewDataBatchResultAction(d, c.meta), [2, l(p)];
                                    c.meta && c.meta.fileViewerId && (u = n.recordExtra(s().loggingSession[c.meta.fileViewerId], {
                                        preview_data_cache_hit: "0"
                                    }), l(o.updateSession(u))), i.label = 2;
                                case 2:
                                    return [2, a(c)]
                            }
                        })
                    })
                }
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.localCacheMiddleware = a
}), define("file-viewer/core/middlewares/native_apps", ["require", "exports", "tslib", "file-viewer/core/data/actions"], function(e, t, i, r) {
    "use strict";

    function n(e) {
        var t = this;
        return function(n) {
            var o = n.dispatch;
            return function(n) {
                return function(a) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        var t, s, l, c;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = n(a), "@@previews/fetchNativeApps" !== a.type ? [3, 2] : (s = o, l = r.fetchNativeAppsResult, c = {
                                        fileId: a.payload.fileId
                                    }, [4, e.getAppsForCurrentFile()]);
                                case 1:
                                    s.apply(void 0, [l.apply(void 0, [(c.result = i.sent(), c)])]), i.label = 2;
                                case 2:
                                    return [2, t]
                            }
                        })
                    })
                }
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.middleware = n
}), define("file-viewer/core/middlewares/navigation", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        return function(t) {
            return function(t) {
                return function(i) {
                    if ("@@previews/share" === i.type) e.openShareModal();
                    else if ("@@previews/openWith" === i.type) e.openDefaultNativeApp();
                    else if ("@@previews/openWebPreview" === i.type) e.openWebPreview();
                    else if ("@@previews/openVersionHistory" === i.type) e.openVersionHistory && e.openVersionHistory();
                    else if ("@@previews/openFullscreenPreview" === i.type) e.openFullScreenPreview && e.openFullScreenPreview();
                    else if ("@@previews/openContainingFolder" === i.type) e.openContainingFolder && e.openContainingFolder();
                    else if ("@@previews/openUrl" === i.type) {
                        var r = i.payload,
                            n = r.url,
                            o = r.fallbackUrl;
                        e.openUrl && e.openUrl(n, o)
                    }
                    return "@@previews/navigation/flipToNextFile" === i.type && e.flipToNextFile(), "@@previews/navigation/flipToPreviousFile" === i.type && e.flipToPreviousFile(), t(i)
                }
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.middleware = i
}), define("file-viewer/core/middlewares/network_state", ["require", "exports", "file-viewer/core/data/actions"], function(e, t, i) {
    "use strict";

    function r(e) {
        return function(t) {
            var r = t.dispatch,
                n = function(e) {
                    r(i.setNetworkConnectivityState({
                        isOffline: e
                    }))
                },
                o = function() {
                    n(e.getNetworkIsOffline())
                };
            return function(t) {
                return function(i) {
                    switch (i.type) {
                        case "@@previews/initializeFilePreviewSession":
                            o();
                            break;
                        case "@@previews/subscribeNetworkState":
                            e.subscribe(o);
                            break;
                        case "@@previews/unsubscribeNetworkState":
                            e.unsubscribe()
                    }
                    return t(i)
                }
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.middleware = r
}), define("file-viewer/core/middlewares/riviera_data", ["require", "exports", "tslib", "file-viewer/core/data/actions", "file-viewer/core/data/riviera", "file-viewer/core/data/riviera/transform", "file-viewer/core/invariant", "file-viewer/core/errors", "file-viewer/core/utils"], function(e, t, i, r, n, o, a, s, l) {
    "use strict";

    function c(e) {
        var t = this,
            c = new n.RivieraClientBase(e);
        return function(e) {
            var n = e.getState,
                d = e.dispatch;
            return function(e) {
                return function(u) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        var t, p, _, f, m, v, h, g, w, A, b, g, y, F, R;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    switch (p = n(), _ = u.type) {
                                        case "@@previews/fetchPageDataWithMetadata":
                                            return [3, 1];
                                        case "@@previews/refreshBlob":
                                            return [3, 5]
                                    }
                                    return [3, 9];
                                case 1:
                                    f = u.payload, m = f.textUrlTmpl, v = f.startPage, h = f.endPage, t = u.payload.fileIdOrRevisionId, i.label = 2;
                                case 2:
                                    return i.trys.push([2, 4, , 5]), [4, c.fetchDocMetadata(m, !0, v, h)];
                                case 3:
                                    return g = i.sent(), a.invariant(!!p.previewData[t], s.FVErrorCode.InvalidFileInfo, "Preview Data for " + t + " should have been available"), w = p.previewData[t].content.image_url_tmpl, A = g.metadata, a.invariant(!!A, s.FVErrorCode.MalformedRivieraData, "Response from riviera ssr_doc has no metadata and we also have no existing metadata"), [2, e(r.fetchPageDataWithMetadataResult({
                                        fileIdOrRevisionId: t,
                                        data: {
                                            metadata: A,
                                            pages: o.processTextAndUrl(w, A.dimensions, A.page_count, g)
                                        }
                                    }))];
                                case 4:
                                    return b = i.sent(), [2, e(r.fetchPageDataWithMetadataResult({
                                        fileIdOrRevisionId: t,
                                        data: void 0
                                    }, b))];
                                case 5:
                                    t = u.payload.fileIdOrRevisionId, i.label = 6;
                                case 6:
                                    return i.trys.push([6, 8, , 9]), [4, c.refreshDocBlob(u.payload.refreshUrl, u.payload.password)];
                                case 7:
                                    return g = i.sent(), e(r.refreshBlobSuccessAction({
                                        fileIdOrRevisionId: t,
                                        preview: g
                                    })), a.invariant(!!p.previewData[t], s.FVErrorCode.InvalidFileInfo, "Preview Data for " + t + " should have been available"), u.payload.password ? [2, d(r.fetchPageDataWithMetadata({
                                        fileIdOrRevisionId: t,
                                        textUrlTmpl: g.text_url_tmpl
                                    }))] : (y = p.filePreviewUi[u.payload.fileViewerId][t].currentPageIndex, F = l.calculatePageRange(y), [2, d(r.fetchPageDataWithMetadata({
                                        fileIdOrRevisionId: t,
                                        textUrlTmpl: g.text_url_tmpl,
                                        startPage: F[0],
                                        endPage: F[1]
                                    }))]);
                                case 8:
                                    return R = i.sent(), [2, e(r.fetchPageDataWithMetadataResult({
                                        fileIdOrRevisionId: u.payload.fileIdOrRevisionId,
                                        data: void 0
                                    }, R))];
                                case 9:
                                    return [2, e(u)]
                            }
                        })
                    })
                }
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.rivieraDataMiddleware = c
}), define("file-viewer/core/middlewares/ui_action_redispatcher", ["require", "exports", "tslib", "file-viewer/core/data/actions"], function(e, t, i, r) {
    "use strict";

    function n(e) {
        return !!e.metadata
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.uiActionRedispatcher = function(e) {
        var t = e.getState;
        return function(e) {
            return function(o) {
                var a = t(),
                    s = a.filePreviewUi,
                    l = a.previewData,
                    c = a.rivieraData,
                    d = o.payload,
                    u = d.fileIdOrRevisionId,
                    p = d.fileViewerId,
                    _ = l[u],
                    f = c[u];
                if (!(s[p] && _ && _.content && f)) return e(o);
                if (!s[p][u]) return e(o);
                switch (o.type) {
                    case "@@previews/zoomIn":
                        return e(r.zoomIn(i.__assign({}, o.payload, {
                            previewType: "ssr_doc" === _.content[".tag"] ? "ssr_doc" : "image"
                        })));
                    case "@@previews/zoomOut":
                        return e(r.zoomOut(i.__assign({}, o.payload, {
                            previewType: "ssr_doc" === _.content[".tag"] ? "ssr_doc" : "image"
                        })));
                    case "@@previews/updateDocCurrentPageIndex":
                        if (("ssr_doc" === _.content[".tag"] || "cloud_doc" === _.content[".tag"]) && n(f) && f.metadata) return e(r.updateDocCurrentPageIndex(i.__assign({}, o.payload, {
                            pageCount: f.metadata.page_count
                        })));
                        break;
                    case "@@previews/pageDown":
                        if (("ssr_doc" === _.content[".tag"] || "cloud_doc" === _.content[".tag"]) && n(f) && f.metadata) return e(r.pageDown(i.__assign({}, o.payload, {
                            pageCount: f.metadata.page_count
                        })))
                }
                return e(o)
            }
        }
    }
}), define("file-viewer/core/ui/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e.win = "win", e.osx = "osx", e.web = "web"
    })(t.Theme || (t.Theme = {}))
}), define("file-viewer/core/urls", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e, t) {
        Object.keys(t).forEach(function(i) {
            e.searchParams.set(i, t[i])
        })
    }

    function r(e, t) {
        var i = new URL(e);
        return i.searchParams.set("page", t[n.page].toString()), i.searchParams.set("scale_percent", t[n.scale_percent].toString()), i.toString()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.updateQueryParam = i;
    var n;
    (function(e) {
        e.scale_percent = "scale_percent", e.page = "page"
    })(n || (n = {})), t.imageUrl = r
}), define("file-viewer/core/utils", ["require", "exports", "file-viewer/core/extension_constants"], function(e, t, i) {
    "use strict";

    function r(e, t) {
        return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
    }

    function n(e, t) {
        if (r(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var i = Object.keys(e),
            n = Object.keys(t);
        if (i.length !== n.length) return !1;
        for (var o = 0; o < i.length; o++)
            if (!Object.prototype.hasOwnProperty.call(t, i[o]) || !r(e[i[o]], t[i[o]])) return !1;
        return !0
    }

    function o(e) {
        var t, i, r = !1;
        return function(n) {
            return r && t === n ? i : (i = e(n), t = n, r = !0, i)
        }
    }

    function a(e, t, i) {
        var r = e / t;
        return isNaN(i) || isNaN(r) || !isFinite(r) || !isFinite(i) ? [0, 0] : r > i ? [t * i, t] : [e, e / i]
    }

    function s(e) {
        var t = e.toLowerCase().match(/\.\w+$/);
        return t ? t[0] : ""
    }

    function l(e) {
        if (!e) return null;
        var t = e.split("/");
        return t.length < 2 ? null : t[t.length - 2]
    }

    function c(e) {
        if (!e || !e.content) return "error";
        switch (e.content[".tag"]) {
            case "archive":
                return "archive";
            case "audio":
                return "audio";
            case "cloud_doc":
                return "cloud_doc";
            case "excel":
                return "excel";
            case "html":
                return "html";
            case "image":
                return "image";
            case "linkfile":
                return "linkfile";
            case "raw_html":
                return "raw_html";
            case "restricted":
                return "restricted";
            case "ssr_doc":
                return "ssr_doc";
            case "video":
                return "video";
            default:
                return "other"
        }
    }

    function d(e, t, r) {
        var n = s(e);
        return ".pdf" === n ? r.pdf_size_limit : i.PRESENTATION_EXTS.includes(n) ? r.ppt_size_limit : i.DOC_EXTS.includes(n) ? r.word_doc_size_limit : "archive" === t ? r.archive_size_limit : "html" === t || "text" === t ? r.text_size_limit : "linkfile" === t ? r.linkfile_size_limit : 0
    }

    function u(e, t, i, r) {
        if (!isFinite(t)) return !0;
        var n = d(e, i, r);
        return !n || t <= n
    }

    function p(e, t) {
        return e[t] || t
    }

    function _(e) {
        var t = 50 * Math.floor(e / 50);
        return t + 50 - e < 15 && (t += 50), [t, t + 50]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shallowEqual = n, t.memoizeOne = o, t.calculateFitBox = a;
    t.getFileExtension = s, t.getParentFolderFromPath = l, t.resolvePreviewType = c, t.getFileSizeLimit = d, t.fileSizeSupported = u, t.resolveAsset = p;
    t.calculatePageRange = _
}), define("file-viewer/core/uuid", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        return e.map(function(e) {
            return o[e]
        }).join("")
    }

    function r() {
        var e = new Uint8Array(16);
        return "undefined" != typeof window && (window.crypto || window.msCrypto) && (window.crypto || window.msCrypto).getRandomValues(e), e
    }

    function n() {
        var e = r();
        e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128;
        var t = Array.prototype.slice.call(e);
        return [t.slice(0, 4), t.slice(4, 6), t.slice(6, 8), t.slice(8, 10), t.slice(10, 16)].map(i).join("-")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = (function() {
        var e, t, i = [];
        for (e = 0, t = e; e <= 255; e++, t = e) i.push((t + 256).toString(16).substr(1));
        return i
    })();
    t.v4 = n
}), define("intl-messageformat", [], function() {
    return function() {
        "use strict";

        function e(e) {
            var t, i, r, n, o = Array.prototype.slice.call(arguments, 1);
            for (t = 0, i = o.length; t < i; t += 1)
                if (r = o[t])
                    for (n in r) s.call(r, n) && (e[n] = r[n]);
            return e
        }

        function t(e, t, i) {
            this.locales = e, this.formats = t, this.pluralFn = i
        }

        function i(e) {
            this.id = e
        }

        function r(e, t, i, r, n) {
            this.id = e, this.useOrdinal = t, this.offset = i, this.options = r, this.pluralFn = n
        }

        function n(e, t, i, r) {
            this.id = e, this.offset = t, this.numberFormat = i, this.string = r
        }

        function o(e, t) {
            this.id = e, this.options = t
        }

        function a(e, t, i) {
            var r = "string" == typeof e ? a.__parse(e) : e;
            if (!r || "messageFormatPattern" !== r.type) throw new TypeError("A message must be provided as a String or AST.");
            i = this._mergeFormats(a.formats, i), c(this, "_locale", {
                value: this._resolveLocale(t)
            });
            var n = this._findPluralRuleFunction(this._locale),
                o = this._compilePattern(r, t, i, n),
                s = this;
            this.format = function(t) {
                try {
                    return s._format(o, t)
                } catch (t) {
                    throw t.variableId ? new Error("The intl string context variable '" + t.variableId + "' was not provided to the string '" + e + "'") : t
                }
            }
        }
        var s = Object.prototype.hasOwnProperty,
            l = (function() {
                try {
                    return !!Object.defineProperty({}, "a", {})
                } catch (e) {
                    return !1
                }
            })(),
            c = (!l && Object.prototype.__defineGetter__,
                l ? Object.defineProperty : function(e, t, i) {
                    "get" in i && e.__defineGetter__ ? e.__defineGetter__(t, i.get) : (!s.call(e, t) || "value" in i) && (e[t] = i.value)
                }),
            d = Object.create || function(e, t) {
                function i() {}
                var r, n;
                i.prototype = e, r = new i;
                for (n in t) s.call(t, n) && c(r, n, t[n]);
                return r
            },
            u = t;
        t.prototype.compile = function(e) {
            return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, this.compileMessage(e)
        }, t.prototype.compileMessage = function(e) {
            if (!e || "messageFormatPattern" !== e.type) throw new Error('Message AST is not of type: "messageFormatPattern"');
            var t, i, r, n = e.elements,
                o = [];
            for (t = 0, i = n.length; t < i; t += 1) switch (r = n[t], r.type) {
                case "messageTextElement":
                    o.push(this.compileMessageText(r));
                    break;
                case "argumentElement":
                    o.push(this.compileArgument(r));
                    break;
                default:
                    throw new Error("Message element does not have a valid type")
            }
            return o
        }, t.prototype.compileMessageText = function(e) {
            return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new n(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, "#")
        }, t.prototype.compileArgument = function(e) {
            var t = e.format;
            if (!t) return new i(e.id);
            var n, a = this.formats,
                s = this.locales,
                l = this.pluralFn;
            switch (t.type) {
                case "numberFormat":
                    return n = a.number[t.style], {
                        id: e.id,
                        format: new Intl.NumberFormat(s, n).format
                    };
                case "dateFormat":
                    return n = a.date[t.style], {
                        id: e.id,
                        format: new Intl.DateTimeFormat(s, n).format
                    };
                case "timeFormat":
                    return n = a.time[t.style], {
                        id: e.id,
                        format: new Intl.DateTimeFormat(s, n).format
                    };
                case "pluralFormat":
                    return n = this.compileOptions(e), new r(e.id, t.ordinal, t.offset, n, l);
                case "selectFormat":
                    return n = this.compileOptions(e), new o(e.id, n);
                default:
                    throw new Error("Message element does not have a valid format type")
            }
        }, t.prototype.compileOptions = function(e) {
            var t = e.format,
                i = t.options,
                r = {};
            this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === t.type ? e : null;
            var n, o, a;
            for (n = 0, o = i.length; n < o; n += 1) a = i[n], r[a.selector] = this.compileMessage(a.value);
            return this.currentPlural = this.pluralStack.pop(), r
        }, i.prototype.format = function(e) {
            return e || "number" == typeof e ? "string" == typeof e ? e : String(e) : ""
        }, r.prototype.getOption = function(e) {
            var t = this.options;
            return t["=" + e] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other
        }, n.prototype.format = function(e) {
            var t = this.numberFormat.format(e - this.offset);
            return this.string.replace(/(^|[^\\])#/g, "$1" + t).replace(/\\#/g, "#")
        }, o.prototype.getOption = function(e) {
            var t = this.options;
            return t[e] || t.other
        };
        var p = (function() {
                function e(e, t) {
                    function i() {
                        this.constructor = e
                    }
                    i.prototype = t.prototype, e.prototype = new i
                }

                function t(e, i, r, n) {
                    this.message = e, this.expected = i, this.found = r, this.location = n, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t)
                }

                function i(e) {
                    function i() {
                        return n(Ie, Ee)
                    }

                    function r(t) {
                        var i, r, n = Me[t];
                        if (n) return n;
                        for (i = t - 1; !Me[i];) i--;
                        for (n = Me[i], n = {
                                line: n.line,
                                column: n.column,
                                seenCR: n.seenCR
                            }; i < t;) r = e.charAt(i), "\n" === r ? (n.seenCR || n.line++, n.column = 1, n.seenCR = !1) : "\r" === r || "\u2028" === r || "\u2029" === r ? (n.line++, n.column = 1, n.seenCR = !0) : (n.column++, n.seenCR = !1), i++;
                        return Me[t] = n, n
                    }

                    function n(e, t) {
                        var i = r(e),
                            n = r(t);
                        return {
                            start: {
                                offset: e,
                                line: i.line,
                                column: i.column
                            },
                            end: {
                                offset: t,
                                line: n.line,
                                column: n.column
                            }
                        }
                    }

                    function o(e) {
                        Ee < De || (Ee > De && (De = Ee, Te = []), Te.push(e))
                    }

                    function a(e, i, r, n) {
                        function o(e) {
                            var t = 1;
                            for (e.sort(function(e, t) {
                                    return e.description < t.description ? -1 : e.description > t.description ? 1 : 0
                                }); t < e.length;) e[t - 1] === e[t] ? e.splice(t, 1) : t++
                        }

                        function a(e, t) {
                            function i(e) {
                                function t(e) {
                                    return e.charCodeAt(0).toString(16).toUpperCase()
                                }
                                return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
                                    return "\\x0" + t(e)
                                }).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
                                    return "\\x" + t(e)
                                }).replace(/[\u0100-\u0FFF]/g, function(e) {
                                    return "\\u0" + t(e)
                                }).replace(/[\u1000-\uFFFF]/g, function(e) {
                                    return "\\u" + t(e)
                                })
                            }
                            var r, n, o, a = new Array(e.length);
                            for (o = 0; o < e.length; o++) a[o] = e[o].description;
                            return r = e.length > 1 ? a.slice(0, -1).join(", ") + " or " + a[e.length - 1] : a[0], n = t ? '"' + i(t) + '"' : "end of input", "Expected " + r + " but " + n + " found."
                        }
                        return null !== i && o(i), new t(null !== e ? e : a(i, r), i, r, n)
                    }

                    function s() {
                        return l()
                    }

                    function l() {
                        var e, t, i;
                        for (e = Ee, t = [], i = c(); i !== M;) t.push(i), i = c();
                        return t !== M && (Ie = e, t = O(t)), e = t
                    }

                    function c() {
                        var e;
                        return e = u(), e === M && (e = _()), e
                    }

                    function d() {
                        var t, i, r, n, o, a;
                        if (t = Ee, i = [], r = Ee, n = R(), n !== M ? (o = k(), o !== M ? (a = R(), a !== M ? (n = [n, o, a], r = n) : (Ee = r, r = M)) : (Ee = r, r = M)) : (Ee = r, r = M), r !== M)
                            for (; r !== M;) i.push(r), r = Ee, n = R(), n !== M ? (o = k(), o !== M ? (a = R(), a !== M ? (n = [n, o, a], r = n) : (Ee = r, r = M)) : (Ee = r, r = M)) : (Ee = r, r = M);
                        else i = M;
                        return i !== M && (Ie = t, i = B(i)), t = i, t === M && (t = Ee, i = F(), t = i !== M ? e.substring(t, Ee) : i), t
                    }

                    function u() {
                        var e, t;
                        return e = Ee, t = d(), t !== M && (Ie = e, t = U(t)), e = t
                    }

                    function p() {
                        var t, i, r;
                        if (t = x(), t === M) {
                            if (t = Ee, i = [], V.test(e.charAt(Ee)) ? (r = e.charAt(Ee), Ee++) : (r = M, 0 === Oe && o(L)), r !== M)
                                for (; r !== M;) i.push(r), V.test(e.charAt(Ee)) ? (r = e.charAt(Ee), Ee++) : (r = M, 0 === Oe && o(L));
                            else i = M;
                            t = i !== M ? e.substring(t, Ee) : i
                        }
                        return t
                    }

                    function _() {
                        var t, i, r, n, a, s, l, c, d;
                        return t = Ee, 123 === e.charCodeAt(Ee) ? (i = "{", Ee++) : (i = M, 0 === Oe && o(G)), i !== M ? (r = R(), r !== M ? (n = p(), n !== M ? (a = R(), a !== M ? (s = Ee, 44 === e.charCodeAt(Ee) ? (l = ",", Ee++) : (l = M, 0 === Oe && o(N)), l !== M ? (c = R(), c !== M ? (d = f(), d !== M ? (l = [l, c, d], s = l) : (Ee = s, s = M)) : (Ee = s, s = M)) : (Ee = s, s = M), s === M && (s = null), s !== M ? (l = R(), l !== M ? (125 === e.charCodeAt(Ee) ? (c = "}", Ee++) : (c = M, 0 === Oe && o(j)), c !== M ? (Ie = t, i = W(n, s), t = i) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M), t
                    }

                    function f() {
                        var e;
                        return e = m(), e === M && (e = v(), e === M && (e = h(), e === M && (e = g()))), e
                    }

                    function m() {
                        var t, i, r, n, a, s, l;
                        return t = Ee, "number" === e.substr(Ee, 6) ? (i = "number", Ee += 6) : (i = M, 0 === Oe && o(z)), i === M && ("date" === e.substr(Ee, 4) ? (i = "date", Ee += 4) : (i = M, 0 === Oe && o(q)), i === M && ("time" === e.substr(Ee, 4) ? (i = "time", Ee += 4) : (i = M, 0 === Oe && o(K)))), i !== M ? (r = R(), r !== M ? (n = Ee, 44 === e.charCodeAt(Ee) ? (a = ",", Ee++) : (a = M, 0 === Oe && o(N)), a !== M ? (s = R(), s !== M ? (l = k(), l !== M ? (a = [a, s, l], n = a) : (Ee = n, n = M)) : (Ee = n, n = M)) : (Ee = n, n = M), n === M && (n = null), n !== M ? (Ie = t, i = X(i, n), t = i) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M), t
                    }

                    function v() {
                        var t, i, r, n, a, s;
                        return t = Ee, "plural" === e.substr(Ee, 6) ? (i = "plural", Ee += 6) : (i = M, 0 === Oe && o(H)), i !== M ? (r = R(), r !== M ? (44 === e.charCodeAt(Ee) ? (n = ",", Ee++) : (n = M, 0 === Oe && o(N)), n !== M ? (a = R(), a !== M ? (s = y(), s !== M ? (Ie = t, i = Z(s), t = i) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M), t
                    }

                    function h() {
                        var t, i, r, n, a, s;
                        return t = Ee, "selectordinal" === e.substr(Ee, 13) ? (i = "selectordinal", Ee += 13) : (i = M, 0 === Oe && o(J)), i !== M ? (r = R(), r !== M ? (44 === e.charCodeAt(Ee) ? (n = ",", Ee++) : (n = M, 0 === Oe && o(N)), n !== M ? (a = R(), a !== M ? (s = y(), s !== M ? (Ie = t, i = Q(s), t = i) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M), t
                    }

                    function g() {
                        var t, i, r, n, a, s, l;
                        if (t = Ee, "select" === e.substr(Ee, 6) ? (i = "select", Ee += 6) : (i = M, 0 === Oe && o(Y)), i !== M)
                            if (r = R(), r !== M)
                                if (44 === e.charCodeAt(Ee) ? (n = ",", Ee++) : (n = M, 0 === Oe && o(N)), n !== M)
                                    if (a = R(), a !== M) {
                                        if (s = [], l = A(), l !== M)
                                            for (; l !== M;) s.push(l), l = A();
                                        else s = M;
                                        s !== M ? (Ie = t, i = $(s), t = i) : (Ee = t, t = M)
                                    } else Ee = t, t = M;
                        else Ee = t, t = M;
                        else Ee = t, t = M;
                        else Ee = t, t = M;
                        return t
                    }

                    function w() {
                        var t, i, r, n;
                        return t = Ee, i = Ee, 61 === e.charCodeAt(Ee) ? (r = "=", Ee++) : (r = M, 0 === Oe && o(ee)), r !== M ? (n = x(), n !== M ? (r = [r, n], i = r) : (Ee = i, i = M)) : (Ee = i, i = M), t = i !== M ? e.substring(t, Ee) : i, t === M && (t = k()), t
                    }

                    function A() {
                        var t, i, r, n, a, s, c, d, u;
                        return t = Ee, i = R(), i !== M ? (r = w(), r !== M ? (n = R(), n !== M ? (123 === e.charCodeAt(Ee) ? (a = "{", Ee++) : (a = M, 0 === Oe && o(G)), a !== M ? (s = R(), s !== M ? (c = l(), c !== M ? (d = R(), d !== M ? (125 === e.charCodeAt(Ee) ? (u = "}", Ee++) : (u = M, 0 === Oe && o(j)), u !== M ? (Ie = t, i = te(r, c), t = i) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M), t
                    }

                    function b() {
                        var t, i, r, n;
                        return t = Ee, "offset:" === e.substr(Ee, 7) ? (i = "offset:", Ee += 7) : (i = M, 0 === Oe && o(ie)), i !== M ? (r = R(), r !== M ? (n = x(), n !== M ? (Ie = t, i = re(n), t = i) : (Ee = t, t = M)) : (Ee = t, t = M)) : (Ee = t, t = M), t
                    }

                    function y() {
                        var e, t, i, r, n;
                        if (e = Ee, t = b(), t === M && (t = null), t !== M)
                            if (i = R(), i !== M) {
                                if (r = [], n = A(), n !== M)
                                    for (; n !== M;) r.push(n), n = A();
                                else r = M;
                                r !== M ? (Ie = e, t = ne(t, r), e = t) : (Ee = e, e = M)
                            } else Ee = e, e = M;
                        else Ee = e, e = M;
                        return e
                    }

                    function F() {
                        var t, i;
                        if (Oe++, t = [], ae.test(e.charAt(Ee)) ? (i = e.charAt(Ee), Ee++) : (i = M, 0 === Oe && o(se)), i !== M)
                            for (; i !== M;) t.push(i), ae.test(e.charAt(Ee)) ? (i = e.charAt(Ee), Ee++) : (i = M, 0 === Oe && o(se));
                        else t = M;
                        return Oe--, t === M && (i = M, 0 === Oe && o(oe)), t
                    }

                    function R() {
                        var t, i, r;
                        for (Oe++, t = Ee, i = [], r = F(); r !== M;) i.push(r), r = F();
                        return t = i !== M ? e.substring(t, Ee) : i, Oe--, t === M && (i = M, 0 === Oe && o(le)), t
                    }

                    function C() {
                        var t;
                        return ce.test(e.charAt(Ee)) ? (t = e.charAt(Ee), Ee++) : (t = M, 0 === Oe && o(de)), t
                    }

                    function S() {
                        var t;
                        return ue.test(e.charAt(Ee)) ? (t = e.charAt(Ee), Ee++) : (t = M, 0 === Oe && o(pe)), t
                    }

                    function x() {
                        var t, i, r, n, a, s;
                        if (t = Ee, 48 === e.charCodeAt(Ee) ? (i = "0", Ee++) : (i = M, 0 === Oe && o(_e)), i === M) {
                            if (i = Ee, r = Ee, fe.test(e.charAt(Ee)) ? (n = e.charAt(Ee), Ee++) : (n = M, 0 === Oe && o(me)), n !== M) {
                                for (a = [], s = C(); s !== M;) a.push(s), s = C();
                                a !== M ? (n = [n, a], r = n) : (Ee = r, r = M)
                            } else Ee = r, r = M;
                            i = r !== M ? e.substring(i, Ee) : r
                        }
                        return i !== M && (Ie = t, i = ve(i)), t = i
                    }

                    function P() {
                        var t, i, r, n, a, s, l, c;
                        return he.test(e.charAt(Ee)) ? (t = e.charAt(Ee), Ee++) : (t = M, 0 === Oe && o(ge)), t === M && (t = Ee, "\\\\" === e.substr(Ee, 2) ? (i = "\\\\", Ee += 2) : (i = M, 0 === Oe && o(we)), i !== M && (Ie = t, i = Ae()), t = i, t === M && (t = Ee, "\\#" === e.substr(Ee, 2) ? (i = "\\#", Ee += 2) : (i = M, 0 === Oe && o(be)), i !== M && (Ie = t, i = ye()), t = i, t === M && (t = Ee, "\\{" === e.substr(Ee, 2) ? (i = "\\{", Ee += 2) : (i = M, 0 === Oe && o(Fe)), i !== M && (Ie = t, i = Re()), t = i, t === M && (t = Ee, "\\}" === e.substr(Ee, 2) ? (i = "\\}", Ee += 2) : (i = M, 0 === Oe && o(Ce)), i !== M && (Ie = t, i = Se()), t = i, t === M && (t = Ee, "\\u" === e.substr(Ee, 2) ? (i = "\\u", Ee += 2) : (i = M, 0 === Oe && o(xe)), i !== M ? (r = Ee, n = Ee, a = S(), a !== M ? (s = S(), s !== M ? (l = S(), l !== M ? (c = S(), c !== M ? (a = [a, s, l, c], n = a) : (Ee = n, n = M)) : (Ee = n, n = M)) : (Ee = n, n = M)) : (Ee = n, n = M), r = n !== M ? e.substring(r, Ee) : n, r !== M ? (Ie = t, i = Pe(r), t = i) : (Ee = t, t = M)) : (Ee = t, t = M)))))), t
                    }

                    function k() {
                        var e, t, i;
                        if (e = Ee, t = [], i = P(), i !== M)
                            for (; i !== M;) t.push(i), i = P();
                        else t = M;
                        return t !== M && (Ie = e, t = ke(t)), e = t
                    }
                    var E, I = arguments.length > 1 ? arguments[1] : {},
                        M = {},
                        D = {
                            start: s
                        },
                        T = s,
                        O = function(e) {
                            return {
                                type: "messageFormatPattern",
                                elements: e,
                                location: i()
                            }
                        },
                        B = function(e) {
                            var t, i, r, n, o, a = "";
                            for (t = 0, r = e.length; t < r; t += 1)
                                for (n = e[t], i = 0, o = n.length; i < o; i += 1) a += n[i];
                            return a
                        },
                        U = function(e) {
                            return {
                                type: "messageTextElement",
                                value: e,
                                location: i()
                            }
                        },
                        V = /^[^ \t\n\r,.+={}#]/,
                        L = {
                            type: "class",
                            value: "[^ \\t\\n\\r,.+={}#]",
                            description: "[^ \\t\\n\\r,.+={}#]"
                        },
                        G = {
                            type: "literal",
                            value: "{",
                            description: '"{"'
                        },
                        N = {
                            type: "literal",
                            value: ",",
                            description: '","'
                        },
                        j = {
                            type: "literal",
                            value: "}",
                            description: '"}"'
                        },
                        W = function(e, t) {
                            return {
                                type: "argumentElement",
                                id: e,
                                format: t && t[2],
                                location: i()
                            }
                        },
                        z = {
                            type: "literal",
                            value: "number",
                            description: '"number"'
                        },
                        q = {
                            type: "literal",
                            value: "date",
                            description: '"date"'
                        },
                        K = {
                            type: "literal",
                            value: "time",
                            description: '"time"'
                        },
                        X = function(e, t) {
                            return {
                                type: e + "Format",
                                style: t && t[2],
                                location: i()
                            }
                        },
                        H = {
                            type: "literal",
                            value: "plural",
                            description: '"plural"'
                        },
                        Z = function(e) {
                            return {
                                type: e.type,
                                ordinal: !1,
                                offset: e.offset || 0,
                                options: e.options,
                                location: i()
                            }
                        },
                        J = {
                            type: "literal",
                            value: "selectordinal",
                            description: '"selectordinal"'
                        },
                        Q = function(e) {
                            return {
                                type: e.type,
                                ordinal: !0,
                                offset: e.offset || 0,
                                options: e.options,
                                location: i()
                            }
                        },
                        Y = {
                            type: "literal",
                            value: "select",
                            description: '"select"'
                        },
                        $ = function(e) {
                            return {
                                type: "selectFormat",
                                options: e,
                                location: i()
                            }
                        },
                        ee = {
                            type: "literal",
                            value: "=",
                            description: '"="'
                        },
                        te = function(e, t) {
                            return {
                                type: "optionalFormatPattern",
                                selector: e,
                                value: t,
                                location: i()
                            }
                        },
                        ie = {
                            type: "literal",
                            value: "offset:",
                            description: '"offset:"'
                        },
                        re = function(e) {
                            return e
                        },
                        ne = function(e, t) {
                            return {
                                type: "pluralFormat",
                                offset: e,
                                options: t,
                                location: i()
                            }
                        },
                        oe = {
                            type: "other",
                            description: "whitespace"
                        },
                        ae = /^[ \t\n\r]/,
                        se = {
                            type: "class",
                            value: "[ \\t\\n\\r]",
                            description: "[ \\t\\n\\r]"
                        },
                        le = {
                            type: "other",
                            description: "optionalWhitespace"
                        },
                        ce = /^[0-9]/,
                        de = {
                            type: "class",
                            value: "[0-9]",
                            description: "[0-9]"
                        },
                        ue = /^[0-9a-f]/i,
                        pe = {
                            type: "class",
                            value: "[0-9a-f]i",
                            description: "[0-9a-f]i"
                        },
                        _e = {
                            type: "literal",
                            value: "0",
                            description: '"0"'
                        },
                        fe = /^[1-9]/,
                        me = {
                            type: "class",
                            value: "[1-9]",
                            description: "[1-9]"
                        },
                        ve = function(e) {
                            return parseInt(e, 10)
                        },
                        he = /^[^{}\\\0-\x1F \t\n\r]/,
                        ge = {
                            type: "class",
                            value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                            description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
                        },
                        we = {
                            type: "literal",
                            value: "\\\\",
                            description: '"\\\\\\\\"'
                        },
                        Ae = function() {
                            return "\\"
                        },
                        be = {
                            type: "literal",
                            value: "\\#",
                            description: '"\\\\#"'
                        },
                        ye = function() {
                            return "\\#"
                        },
                        Fe = {
                            type: "literal",
                            value: "\\{",
                            description: '"\\\\{"'
                        },
                        Re = function() {
                            return "{"
                        },
                        Ce = {
                            type: "literal",
                            value: "\\}",
                            description: '"\\\\}"'
                        },
                        Se = function() {
                            return "}"
                        },
                        xe = {
                            type: "literal",
                            value: "\\u",
                            description: '"\\\\u"'
                        },
                        Pe = function(e) {
                            return String.fromCharCode(parseInt(e, 16))
                        },
                        ke = function(e) {
                            return e.join("")
                        },
                        Ee = 0,
                        Ie = 0,
                        Me = [{
                            line: 1,
                            column: 1,
                            seenCR: !1
                        }],
                        De = 0,
                        Te = [],
                        Oe = 0;
                    if ("startRule" in I) {
                        if (!(I.startRule in D)) throw new Error("Can't start parsing from rule \"" + I.startRule + '".');
                        T = D[I.startRule]
                    }
                    if (E = T(), E !== M && Ee === e.length) return E;
                    throw E !== M && Ee < e.length && o({
                        type: "end",
                        description: "end of input"
                    }), a(null, Te, De < e.length ? e.charAt(De) : null, De < e.length ? n(De, De + 1) : n(De, De))
                }
                return e(t, Error), {
                    SyntaxError: t,
                    parse: i
                }
            })(),
            _ = a;
        c(a, "formats", {
            enumerable: !0,
            value: {
                number: {
                    currency: {
                        style: "currency"
                    },
                    percent: {
                        style: "percent"
                    }
                },
                date: {
                    short: {
                        month: "numeric",
                        day: "numeric",
                        year: "2-digit"
                    },
                    medium: {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    },
                    long: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    full: {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                time: {
                    short: {
                        hour: "numeric",
                        minute: "numeric"
                    },
                    medium: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    },
                    long: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    },
                    full: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    }
                }
            }
        }), c(a, "__localeData__", {
            value: d(null)
        }), c(a, "__addLocaleData", {
            value: function(e) {
                if (!e || !e.locale) throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
                a.__localeData__[e.locale.toLowerCase()] = e
            }
        }), c(a, "__parse", {
            value: p.parse
        }), c(a, "defaultLocale", {
            enumerable: !0,
            writable: !0,
            value: void 0
        }), a.prototype.resolvedOptions = function() {
            return {
                locale: this._locale
            }
        }, a.prototype._compilePattern = function(e, t, i, r) {
            return new u(t, i, r).compile(e)
        }, a.prototype._findPluralRuleFunction = function(e) {
            for (var t = a.__localeData__, i = t[e.toLowerCase()]; i;) {
                if (i.pluralRuleFunction) return i.pluralRuleFunction;
                i = i.parentLocale && t[i.parentLocale.toLowerCase()]
            }
            throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + e)
        }, a.prototype._format = function(e, t) {
            var i, r, n, o, a, l, c = "";
            for (i = 0, r = e.length; i < r; i += 1)
                if (n = e[i], "string" != typeof n) {
                    if (o = n.id, !t || !s.call(t, o)) throw l = new Error("A value must be provided for: " + o), l.variableId = o, l;
                    a = t[o], c += n.options ? this._format(n.getOption(a), t) : n.format(a)
                } else c += n;
            return c
        }, a.prototype._mergeFormats = function(t, i) {
            var r, n, o = {};
            for (r in t) s.call(t, r) && (o[r] = n = d(t[r]), i && s.call(i, r) && e(n, i[r]));
            return o
        }, a.prototype._resolveLocale = function(e) {
            "string" == typeof e && (e = [e]), e = (e || []).concat(a.defaultLocale);
            var t, i, r, n, o = a.__localeData__;
            for (t = 0, i = e.length; t < i; t += 1)
                for (r = e[t].toLowerCase().split("-"); r.length;) {
                    if (n = o[r.join("-")]) return n.locale;
                    r.pop()
                }
            var s = e.pop();
            throw new Error("No locale data has been added to IntlMessageFormat for: " + e.join(", ") + ", or the default locale: " + s)
        };
        var f = {
            locale: "en",
            pluralRuleFunction: function(e, t) {
                var i = String(e).split("."),
                    r = !i[1],
                    n = Number(i[0]) == e,
                    o = n && i[0].slice(-1),
                    a = n && i[0].slice(-2);
                return t ? 1 == o && 11 != a ? "one" : 2 == o && 12 != a ? "two" : 3 == o && 13 != a ? "few" : "other" : 1 == e && r ? "one" : "other"
            }
        };
        _.__addLocaleData(f), _.defaultLocale = "en";
        var m = _;
        this.IntlMessageFormat = m
    }.call(this), this.IntlMessageFormat
}.bind(Object.create(null))), define("file-viewer/keyboard/bindings", ["require", "exports", "file-viewer/core/data/actions", "file-viewer/keyboard/keycodes"], function(e, t, i, r) {
    "use strict";

    function n(e) {
        return null != e && null != e.preventDefault
    }

    function o(e) {
        return function(t) {
            e(), n(t) && t.preventDefault()
        }
    }

    function a(e) {
        var t = e.dispatch,
            n = e.fileViewerId,
            a = e.fileId,
            s = e.requireCommandKey,
            l = o(function() {
                t(i.flipToPreviousFile({
                    fileViewerId: n,
                    fileIdOrRevisionId: a,
                    sourceContext: "keyboard"
                }))
            }),
            c = {
                keyboardEventCriteria: {
                    keyCode: r.KeyCode.LEFT,
                    osModifierKey: !0
                },
                callback: l
            };
        return s ? [c] : [{
            keyboardEventCriteria: {
                keyCode: r.KeyCode.LEFT
            },
            callback: l
        }, c]
    }

    function s(e) {
        var t = e.dispatch,
            n = e.fileViewerId,
            a = e.fileId,
            s = e.requireCommandKey,
            l = o(function() {
                t(i.flipToNextFile({
                    fileViewerId: n,
                    fileIdOrRevisionId: a,
                    sourceContext: "keyboard"
                }))
            }),
            c = {
                keyboardEventCriteria: {
                    keyCode: r.KeyCode.RIGHT,
                    osModifierKey: !0
                },
                callback: l
            };
        return s ? [c] : [{
            keyboardEventCriteria: {
                keyCode: r.KeyCode.RIGHT
            },
            callback: l
        }, c]
    }

    function l(e) {
        return s(e).concat(a(e))
    }

    function c(e) {
        return {
            keyboardEventCriteria: {
                keyCode: r.KeyCode.PAGE_UP
            },
            callback: o(e)
        }
    }

    function d(e) {
        return {
            keyboardEventCriteria: {
                keyCode: r.KeyCode.PAGE_DOWN
            },
            callback: o(e)
        }
    }

    function u(e) {
        var t = e.pageUp,
            i = e.pageDown;
        return [c(t), d(i)]
    }

    function p(e) {
        return {
            keyboardEventCriteria: {
                keyCode: r.KeyCode.UP
            },
            callback: o(e)
        }
    }

    function _(e) {
        return {
            keyboardEventCriteria: {
                keyCode: r.KeyCode.DOWN
            },
            callback: o(e)
        }
    }

    function f(e) {
        var t = e.up,
            i = e.down;
        return [p(t), _(i)]
    }

    function m(e) {
        return [{
            keyboardEventCriteria: {
                keyCode: r.KeyCode.PLUS_CHROME,
                osModifierKey: !0
            },
            callback: o(e)
        }]
    }

    function v(e) {
        return [{
            keyboardEventCriteria: {
                keyCode: r.KeyCode.MINUS_CHROME,
                osModifierKey: !0
            },
            callback: o(e)
        }]
    }

    function h(e) {
        var t = e.zoomIn,
            i = e.zoomOut;
        return m(t).concat(v(i))
    }

    function g(e) {
        return {
            keyboardEventCriteria: {
                keyCode: r.KeyCode.HOME
            },
            callback: o(e)
        }
    }

    function w(e) {
        return {
            keyboardEventCriteria: {
                keyCode: r.KeyCode.END
            },
            callback: o(e)
        }
    }

    function A(e) {
        var t = e.home,
            i = e.end;
        return [g(t), w(i)]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getFileFlippingBindings = l, t.getPageUpDownBindings = u, t.getUpDownBindings = f, t.getZoomInOutBindings = h, t.getHomeEndBindings = A
}), define("file-viewer/keyboard/context", ["require", "exports", "tslib", "react"], function(e, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r);
    var n = function() {};
    t.KeyboardBindingContext = r.createContext({
        registerKeyBindings: n,
        unregisterKeyBindings: n,
        updateKeyBindings: n
    })
}), define("file-viewer/keyboard", ["require", "exports", "file-viewer/keyboard/keyboard_provider", "file-viewer/keyboard/keyboard_connector", "file-viewer/keyboard/keycodes", "file-viewer/keyboard/bindings"], function(e, t, i, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.KeyboardBindingProvider = i.KeyboardBindingProvider, t.KeyboardBindingConnector = r.KeyboardBindingConnector, t.KeyCode = n.KeyCode, t.getFileFlippingBindings = o.getFileFlippingBindings, t.getZoomInOutBindings = o.getZoomInOutBindings, t.getUpDownBindings = o.getUpDownBindings, t.getPageUpDownBindings = o.getPageUpDownBindings, t.getHomeEndBindings = o.getHomeEndBindings
}), define("file-viewer/keyboard/keyboard_binding", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        return {
            altKey: e.altKey === !0,
            ctrlKey: e.ctrlKey === !0,
            metaKey: e.metaKey === !0,
            shiftKey: e.shiftKey === !0,
            keyCode: e.keyCode
        }
    }

    function r(e, t) {
        var i;
        return i = {
            altKey: e.altKey === !0,
            shiftKey: e.shiftKey === !0,
            keyCode: e.keyCode,
            ctrlKey: !1,
            metaKey: !1
        }, i[t] = e.osModifierKey === !0, i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.genericNormalizedKeyboardEventCriteria = {
        altKey: !1,
        ctrlKey: !1,
        metaKey: !1,
        shiftKey: !1,
        keyCode: 0
    }, t.NormalizedKeyboardEventCriteriaKeys = Object.keys(t.genericNormalizedKeyboardEventCriteria), t.normalizeKeyboardEvent = i, t.normalizeKeyboardEventCriteria = r
}), define("file-viewer/keyboard/keyboard_binding_map", ["require", "exports", "file-viewer/keyboard/keyboard_binding"], function(e, t, i) {
    "use strict";

    function r(e, t) {
        return e.reduce(function(e, i) {
            var r = i.keyboardEventCriteria,
                n = i.callback;
            return e[t(r)] = n, e
        }, {})
    }

    function n(e) {
        return i.NormalizedKeyboardEventCriteriaKeys.map(function(t) {
            return t + ":" + e[t]
        }).join("")
    }

    function o(e, t) {
        return n(i.normalizeKeyboardEventCriteria(e, t))
    }

    function a(e, t) {
        return r(e, function(e) {
            return o(e, t)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = (function() {
        function e(e, t) {
            this.bindingDict = {}, this.bindingDict = a(e, t)
        }
        return e.prototype.getCallbackForEvent = function(e) {
            var t = i.normalizeKeyboardEvent(e);
            return this.bindingDict[n(t)]
        }, e
    })();
    t.KeyboardBindingMap = s
}), define("file-viewer/keyboard/keyboard_connector", ["require", "exports", "tslib", "react", "file-viewer/keyboard/context"], function(e, t, i, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r);
    var o = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i.__extends(t, e), t.prototype.componentDidMount = function() {
            this.registrationIdentifier = this.context.registerKeyBindings(this.props.keyboardBindings)
        }, t.prototype.componentDidUpdate = function(e) {
            this.props.keyboardBindings !== e.keyboardBindings && null != this.registrationIdentifier && this.context.updateKeyBindings(this.registrationIdentifier, this.props.keyboardBindings)
        }, t.prototype.componentWillUnmount = function() {
            null != this.registrationIdentifier && this.context.unregisterKeyBindings(this.registrationIdentifier)
        }, t.prototype.render = function() {
            return null
        }, t
    })(r.Component);
    t.KeyboardBindingConnector = o, o.contextType = n.KeyboardBindingContext
}), define("file-viewer/keyboard/keyboard_provider", ["require", "exports", "tslib", "react", "external/lodash", "file-viewer/keyboard/keyboard_binding_map", "file-viewer/keyboard/context"], function(e, t, i, r, n, o, a) {
    "use strict";

    function s(e) {
        var t = e.target || e.srcElement;
        if (!t) return !0;
        var i = t.tagName,
            r = "INPUT" === i || "SELECT" === i || "TEXTAREA" === i,
            n = ["submit", "button"].indexOf(t.type) !== -1,
            o = t.hasAttribute && t.hasAttribute("contenteditable") && "false" !== t.getAttribute("contenteditable").toLowerCase();
        return !(r && !n || o)
    }

    function l(e) {
        return e.map(function(e) {
            return i.__assign({}, e, {
                callback: n.throttle(e.callback, 20)
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r);
    var c = a.KeyboardBindingContext.Provider;
    t.LISTENER_KEY = "keydown";
    var d = (function(e) {
        function a() {
            var t = e.apply(this, arguments) || this;
            return t.registrationIdentifier = 0, t.registeredBindings = [], t.bindingMap = new o.KeyboardBindingMap([], "ctrlKey"), t.registerKeyBindings = function(e) {
                var i = t.registrationIdentifier++;
                return t.updateKeyBindings(i, e), i
            }, t.unregisterKeyBindings = function(e) {
                t.updateKeyBindings(e, [])
            }, t.updateKeyBindings = function(e, i) {
                t.registeredBindings[e] = null != i ? i : [], t.bindingMap = new o.KeyboardBindingMap(l(n.flatten(t.registeredBindings)), t.props.osModifierKey)
            }, t.onKeyDown = function(e) {
                if (s(e)) {
                    var i = t.bindingMap.getCallbackForEvent(e);
                    i && i(e)
                }
            }, t.contextValue = {
                registerKeyBindings: t.registerKeyBindings,
                unregisterKeyBindings: t.unregisterKeyBindings,
                updateKeyBindings: t.updateKeyBindings
            }, t
        }
        return i.__extends(a, e), a.prototype.componentDidMount = function() {
            this.props.disableBindings !== !0 && document.addEventListener(t.LISTENER_KEY, this.onKeyDown)
        }, a.prototype.componentWillUnmount = function() {
            document.removeEventListener(t.LISTENER_KEY, this.onKeyDown)
        }, a.prototype.render = function() {
            return r.createElement(c, {
                value: this.contextValue
            }, this.props.children)
        }, a
    })(r.Component);
    t.KeyboardBindingProvider = d
}), define("file-viewer/keyboard/keycodes", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e[e.A = 65] = "A", e[e.F = 70] = "F", e[e.P = 80] = "P", e[e.BACKSPACE = 8] = "BACKSPACE", e[e.TAB = 9] = "TAB", e[e.ENTER = 13] = "ENTER", e[e.SHIFT = 16] = "SHIFT", e[e.CONTROL = 17] = "CONTROL", e[e.ALT = 18] = "ALT", e[e.ESC = 27] = "ESC", e[e.SPACE = 32] = "SPACE", e[e.PAGE_UP = 33] = "PAGE_UP", e[e.PAGE_DOWN = 34] = "PAGE_DOWN", e[e.END = 35] = "END", e[e.HOME = 36] = "HOME", e[e.LEFT = 37] = "LEFT", e[e.UP = 38] = "UP", e[e.RIGHT = 39] = "RIGHT", e[e.DOWN = 40] = "DOWN", e[e.INSERT = 45] = "INSERT", e[e.DELETE = 46] = "DELETE", e[e.TWO_KEY = 50] = "TWO_KEY", e[e.EQUALS = 61] = "EQUALS", e[e.COMMAND = 91] = "COMMAND", e[e.PLUS_EQUALS_FF = 107] = "PLUS_EQUALS_FF", e[e.MINUS_FF = 109] = "MINUS_FF", e[e.F1 = 112] = "F1", e[e.F2 = 113] = "F2", e[e.F3 = 114] = "F3", e[e.F4 = 115] = "F4", e[e.F5 = 116] = "F5", e[e.F6 = 117] = "F6", e[e.F7 = 118] = "F7", e[e.F8 = 119] = "F8", e[e.F9 = 120] = "F9", e[e.F10 = 121] = "F10", e[e.F11 = 122] = "F11", e[e.F12 = 123] = "F12", e[e.PLUS_EQUALS_FF_GERMAN = 171] = "PLUS_EQUALS_FF_GERMAN", e[e.MINUS_FF_MAC = 173] = "MINUS_FF_MAC", e[e.PLUS_CHROME = 187] = "PLUS_CHROME", e[e.MINUS_CHROME = 189] = "MINUS_CHROME", e[e.FORWARD_SLASH = 191] = "FORWARD_SLASH", e[e.PROCESSING = 229] = "PROCESSING"
    })(t.KeyCode || (t.KeyCode = {}))
}), define("file-viewer/modes", ["require", "exports", "file-viewer/modes/sidebar/sidebar", "file-viewer/modes/sidebar/pane", "file-viewer/modes/sidebar/control", "file-viewer/modes/sidebar/utils", "file-viewer/modes/sidebar/pane_title", "file-viewer/modes/middleware"], function(e, t, i, r, n, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Sidebar = i.Sidebar, t.Pane = r.Pane, t.CommentControl = n.CommentControl, t.DocumentationControl = n.DocumentationControl, t.WatermarkControl = n.WatermarkControl, t.ZoomControl = n.ZoomControl, t.SlackControl = n.SlackControl;
    t.SIDEBAR_OPEN_WIDTH = parseInt("385px", 10), t.SIDEBAR_CLOSED_WIDTH = parseInt("49px", 10), t.createSidebarDispatchHandler = o.createSidebarDispatchHandler, t.isSidebarOpen = o.isSidebarOpen, t.PaneTitle = a.PaneTitle, t.middleware = s.middleware
}), define("file-viewer/modes/middleware", ["require", "exports", "file-viewer/core", "modules/clean/api_v2/redux/comments2", "modules/clean/api_v2/redux/files"], function(e, t, i, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.middleware = function(e) {
        var t = e.dispatch,
            o = e.getState;
        return function(e) {
            return function(a) {
                if ("@@previews/modes/changeMode" !== a.type && "@@previews/setCurrentFilePreview" !== a.type) return e(a);
                var s, l, c = a.payload.fileViewerId,
                    d = o().currentFileInfo[c],
                    u = o().modes[c],
                    p = "";
                if ("@@previews/modes/changeMode" === a.type ? s = a.payload.mode : u && (s = u.mode), "@@previews/setCurrentFilePreview" === a.type ? (p = a.payload.fileInfo.file_id || "", l = a.payload.fileInfo.url) : d && (p = d.file_id, l = d.url), !p && !l) return e(a);
                if (s === i.FileViewerMode.Commenting) {
                    var _ = p ? {
                        ".tag": "file_path_or_id",
                        file_path_or_id: p
                    } : l ? {
                        ".tag": "shared_link_details",
                        url: l
                    } : null;
                    _ && t(r.listCommentsAction({
                        arg: {
                            stream: {
                                identifier: _,
                                type: {
                                    ".tag": "file"
                                }
                            }
                        }
                    }))
                } else s === i.FileViewerMode.Documentation && (t(n.getUploadInfoAction({
                    arg: {
                        file_path_or_id: p,
                        url: l
                    }
                })), t(n.getFileContentMetadataAction({
                    arg: {
                        file_path_or_id: p,
                        url: l
                    }
                })));
                return e(a)
            }
        }
    }
}), define("file-viewer/modes/sidebar/control", ["require", "exports", "tslib", "classnames", "react", "spectrum/tooltip", "file-viewer/core", "file-viewer/modes/sidebar/utils"], function(e, t, i, r, n, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importDefault(r), n = i.__importStar(n);
    var l = {
        totalWidthOpen: "385px",
        totalWidthClosed: "49px",
        controlListWidth: "48px",
        control: "BXSQ8s4gfq",
        isSelected: "_3l-Swh4sdi",
        controlIcon: "_33nnkxMPOU",
        controlIconDisabled: "_1hQqP-W_56",
        threadCount: "_1C3CBcf46o",
        closedUnreadVariant: "_33UVYisbPW",
        closedReadVariant: "_8dXPgaeMLM",
        plus: "_1eve4QrCBO",
        paneOpen: "_15ggD5dslP",
        redDot: "_1MqE83Y6lv"
    };
    t.Control = function(e) {
        var t, i, c = e.labelText,
            d = e.id,
            u = e.children,
            p = e.dispatch,
            _ = e.fileViewerUiData,
            f = e.fileViewerId,
            m = e.disabled,
            v = e.onClick,
            h = e.innerRef,
            g = e.className,
            w = e.ariaLabel,
            A = s.isSidebarOpen(_.sidebar),
            b = A && _.sidebar.selectedControlId === d;
        return n.createElement("button", {
            "aria-label": null != w ? w : c,
            "data-control-id": d,
            "data-available": !m,
            role: "tab",
            className: r.default(l.control, g, (t = {}, t[l.isSelected] = b, t)),
            onClick: function() {
                m || (v && v(), p(a.sidebarControlClickAction({
                    fileViewerId: f,
                    controlId: d
                })))
            },
            ref: h,
            "aria-expanded": b,
            "aria-selected": b
        }, n.createElement(o.Tooltip, {
            positionOffset: 8,
            positioning: "left",
            tooltipContent: c
        }, n.createElement(n.Fragment, null, n.createElement("div", {
            className: r.default(l.controlIcon, (i = {}, i[l.controlIconDisabled] = m, i))
        }), u)))
    }, t.DocumentationControl = function(e) {
        var i = e.intl;
        return n.createElement(t.Control, Object.assign({}, e, {
            id: a.SidebarControlId.Documentation,
            labelText: i.formatMessage({
                id: "17znK",
                defaultMessage: "About"
            })
        }))
    }, t.CommentControl = function(e) {
        var i, o = e.areAnyThreadsUnread,
            s = e.threadCount,
            c = e.fileViewerUiData,
            d = e.intl,
            u = a.SidebarControlId.Comments,
            p = d.formatMessage({
                id: "3rjoD",
                defaultMessage: "Comments"
            }),
            _ = d.formatMessage({
                id: "2EDv9",
                defaultMessage: "Toggle Comments Sidebar"
            });
        return c.sidebar.visibility === a.SidebarVisibility.Open || null == s || 0 === s ? n.createElement(t.Control, Object.assign({}, e, {
            id: u,
            ariaLabel: _,
            labelText: p
        })) : n.createElement(t.Control, Object.assign({}, e, {
            id: u,
            labelText: p,
            ariaLabel: _,
            className: r.default((i = {}, i[l.closedUnreadVariant] = o, i[l.closedReadVariant] = !o, i[l.plus] = s > 99, i))
        }), n.createElement("div", {
            className: l.threadCount
        }, Math.min(s, 99)))
    }, t.WatermarkControl = function(e) {
        var i = e.labelText,
            r = e.intl,
            o = e.children,
            s = e.disabled,
            l = i || r.formatMessage({
                id: "1l5w1",
                defaultMessage: "Watermark"
            });
        return n.createElement(t.Control, Object.assign({}, e, {
            id: a.SidebarControlId.Watermarking,
            labelText: l,
            disabled: s,
            ariaLabel: l + r.formatMessage({
                id: "2Lzae",
                defaultMessage: " (opens a modal dialog)"
            })
        }), o)
    }, t.ZoomControl = function(e) {
        var i, o = e.intl,
            s = e.fileViewerUiData.sidebar.selectedControlId === a.SidebarControlId.Zoom;
        return n.createElement(t.Control, Object.assign({}, e, {
            id: a.SidebarControlId.Zoom,
            labelText: o.formatMessage({
                id: "32jM8",
                defaultMessage: "Zoom"
            }),
            className: r.default((i = {}, i[l.paneOpen] = s, i))
        }))
    }, t.SlackControl = function(e) {
        var i, o = e.intl,
            s = e.fileViewerUiData.sidebar.selectedControlId === a.SidebarControlId.Slack;
        return n.createElement(t.Control, Object.assign({}, e, {
            id: a.SidebarControlId.Slack,
            labelText: o.formatMessage({
                id: "tiMzO",
                defaultMessage: "Slack"
            }),
            className: r.default((i = {}, i[l.paneOpen] = s, i[l.redDot] = e.hasUnreadMessage, i))
        }))
    }, t.defaultRenderSidebarControlsFn = function(e) {
        return [n.createElement(t.DocumentationControl, Object.assign({
            key: "documentation-control"
        }, e)), n.createElement(t.CommentControl, Object.assign({
            key: "comment-control"
        }, e, {
            areAnyThreadsUnread: !1,
            threadCount: 0
        })), n.createElement(t.WatermarkControl, Object.assign({
            key: "watermark-control"
        }, e))]
    }
}), define("file-viewer/modes/sidebar/control_list", ["require", "exports", "tslib", "classnames", "react", "file-viewer/core", "file-viewer/modes/sidebar/utils", "file-viewer/core/data/modes/types"], function(e, t, i, r, n, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importDefault(r), n = i.__importStar(n);
    var l = {
        totalWidthOpen: "385px",
        totalWidthClosed: "49px",
        controlListWidth: "48px",
        controlList: "_5hRhvsTRDu",
        isHidden: "UwBOjdbhwT",
        isBackgroundChalk: "_1WTXOA8l8h",
        isControlsOnly: "iQS0u8699j",
        wrapper: "_2u9TnyYmDT",
        passWrapper: "_1l56KnLCts _2u9TnyYmDT",
        ctaWrapper: "_1JOG8AxeAH _2u9TnyYmDT",
        controlsWrapper: "_3DfCFtkX0k _2u9TnyYmDT",
        overflowMenuWrapper: "_28j2UUwxL0 _2u9TnyYmDT",
        controlListSeparator: "_1hg15rVhTv"
    };
    t.ControlList = function(e) {
        var t, c = e.renderSidebarCallToActionsFn,
            d = e.renderSidebarControlsFn,
            u = e.renderSidebarOverflowMenuFn,
            p = e.renderSidebarPASSFn,
            _ = e.backgroundColor,
            f = i.__rest(e, ["renderSidebarCallToActionsFn", "renderSidebarControlsFn", "renderSidebarOverflowMenuFn", "renderSidebarPASSFn", "backgroundColor"]),
            m = f.fileViewerUiData.sidebar.visibility === o.SidebarVisibility.Closed,
            v = m && c,
            h = m && p,
            g = _ === s.SidebarColor.Chalk;
        return n.createElement("div", {
            className: r.default(l.controlList, (t = {}, t[l.isControlsOnly] = !v && !h, t[l.isBackgroundChalk] = g, t[l.isHidden] = a.isEditMode(f.fileViewerUiData.currentMode), t))
        }, h && n.createElement("div", {
            className: l.passWrapper
        }, p(f)), v && n.createElement("div", {
            className: l.ctaWrapper
        }, c(f)), (v || h) && n.createElement("hr", {
            className: l.controlListSeparator
        }), n.createElement("div", {
            className: l.controlsWrapper,
            role: "tablist"
        }, d(f)), u && n.createElement(n.Fragment, null, n.createElement("hr", {
            className: l.controlListSeparator
        }), n.createElement("div", {
            className: l.overflowMenuWrapper
        }, u(f))))
    }
}), define("file-viewer/modes/sidebar/header", ["require", "exports", "tslib", "react", "file-viewer/core", "file-viewer/modes/sidebar/utils"], function(e, t, i, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r);
    var a = {
        totalWidthOpen: "385px",
        totalWidthClosed: "49px",
        controlListWidth: "48px",
        header: "_2PGvvyezID",
        passAndActionWrapper: "JNzCLEJ9KG",
        passWrapper: "_38xOCX25Qt",
        ctaWrapper: "_2YfLaf8L7b",
        notificationWrapper: "_15d1-PI7jT"
    };
    t.Header = function(e) {
        var t = e.renderSidebarCallToActionsFn,
            s = e.renderSidebarNotificationsFn,
            l = e.renderSidebarPASSFn,
            c = i.__rest(e, ["renderSidebarCallToActionsFn", "renderSidebarNotificationsFn", "renderSidebarPASSFn"]);
        return !t && !l || c.fileViewerUiData.sidebar.visibility !== n.SidebarVisibility.Open || o.isEditMode(c.fileViewerUiData.currentMode) ? null : r.createElement("div", {
            className: a.header
        }, r.createElement("div", {
            className: a.passAndActionWrapper
        }, r.createElement("div", {
            className: a.passWrapper
        }, l && l(c)), r.createElement("div", {
            className: a.ctaWrapper
        }, t && t(c))), r.createElement("div", {
            className: a.notificationWrapper
        }, s && s(c)))
    }
}), define("file-viewer/modes/sidebar/pane", ["require", "exports", "tslib", "react", "file-viewer/modes/sidebar/utils", "classnames"], function(e, t, i, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r), o = i.__importDefault(o);
    var a = {
        pane: "mr8CWsBI-a"
    };
    t.Pane = function(e) {
        var t = e.fileViewerUiData.sidebar,
            i = n.isSidebarOpen(t) && n.isSidebarPaneIdAtTopOfStack(e.paneId, t);
        return r.createElement("div", {
            role: "tabpanel",
            className: o.default(a.pane, e.className),
            hidden: !i
        }, e.children)
    }
}), define("file-viewer/modes/sidebar/pane_stack", ["require", "exports", "tslib", "react", "classnames", "file-viewer/modes/sidebar/utils", "file-viewer/core/data/modes/types"], function(e, t, i, r, n, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r), n = i.__importDefault(n);
    var s = {
        totalWidthOpen: "385px",
        totalWidthClosed: "49px",
        controlListWidth: "48px",
        paneStack: "_1I6XjY7iD9",
        isBackgroundChalk: "ybNsPBVOwD",
        paneStackFullWidth: "lvkSVSVrWv"
    };
    t.PaneStack = function(e) {
        var t, l = e.registerSidebarPanesFn,
            c = e.backgroundColor,
            d = e.width,
            u = i.__rest(e, ["registerSidebarPanesFn", "backgroundColor", "width"]),
            p = l(u),
            _ = c === a.SidebarColor.Chalk,
            f = u.fileViewerUiData.sidebar.paneStack.map(function(e) {
                var t = p[e];
                return t || console.error('Unable to find pane with paneId: "' + e + '"'), t
            }).filter(Boolean);
        return r.createElement("div", {
            className: n.default(s.paneStack, (t = {}, t[s.paneStackFullWidth] = o.isEditMode(u.fileViewerUiData.currentMode), t[s.isBackgroundChalk] = _, t)),
            hidden: !o.isSidebarOpen(u.fileViewerUiData.sidebar),
            style: d ? {
                width: d
            } : void 0
        }, f)
    }
}), define("file-viewer/modes/sidebar/pane_title", ["require", "exports", "tslib", "react", "spectrum/icon_arrow", "spectrum/colorized_icon", "spectrum/button", "file-viewer/modes/sidebar/utils", "file-viewer/core/data/actions"], function(e, t, i, r, n, o, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r);
    var c = {
        paneTitle: "_1h6cAvmgpD",
        paneTitleButton: "NWcHe_xUI8",
        paneTitleArrowRightIcon: "_2MI7U7kgx4",
        paneTitleText: "_2ghT5N5NWx"
    };
    t.PaneTitleComponent = function(e) {
        return e.onClick ? r.createElement("div", {
            className: c.paneTitle
        }, r.createElement(a.Button, {
            variant: "styleless",
            className: c.paneTitleButton,
            onClick: e.onClick,
            "aria-label": e.intl.formatMessage({
                id: "TaUXe",
                defaultMessage: "Back"
            })
        }, r.createElement("span", {
            className: c.paneTitleArrowRightIcon
        }, r.createElement(o.ColorizedIcon, null, r.createElement(n.IconArrow, {
            name: "right-small",
            width: 12,
            height: 16,
            viewBox: "0 0 8 12"
        })))), r.createElement("span", {
            className: c.paneTitleText
        }, e.title)) : r.createElement("div", {
            className: c.paneTitle
        }, r.createElement("span", {
            className: c.paneTitleText
        }, e.title))
    };
    var d = (function(e) {
        function n() {
            var t = e.apply(this, arguments) || this;
            return t.canGoBackToPreviousPane = function() {
                var e = t.props,
                    i = e.paneId,
                    r = e.fileViewerUiData;
                return s.isSidebarPaneIdAtTopOfStack(i, r.sidebar) && r.sidebar.paneStack.length > 1
            }, t.goBackToPreviousPane = function() {
                t.props.dispatch(l.popSidebarPane({
                    fileViewerId: t.props.fileViewerId
                }))
            }, t
        }
        return i.__extends(n, e), n.prototype.render = function() {
            return r.createElement(t.PaneTitleComponent, {
                title: this.props.title,
                intl: this.props.intl,
                onClick: this.canGoBackToPreviousPane() ? this.goBackToPreviousPane : void 0
            })
        }, n
    })(r.Component);
    t.PaneTitle = d
}), define("file-viewer/modes/sidebar/sidebar", ["require", "exports", "tslib", "classnames", "react", "file-viewer/modes/sidebar/control_list", "file-viewer/modes/sidebar/header", "file-viewer/modes/sidebar/pane_stack", "file-viewer/modes/sidebar/utils"], function(e, t, i, r, n, o, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importDefault(r), n = i.__importStar(n);
    var c = {
        totalWidthOpen: "385px",
        totalWidthClosed: "49px",
        controlListWidth: "48px",
        sidebar: "_1ah_BhOiDc",
        sidebarContent: "_2HMOm5Hi5o",
        isOpen: "_35m4GZHt8p",
        widthClosed: "49px",
        widthOpen: "385px"
    };
    t.Sidebar = function(e) {
        var t, d = e.registerSidebarPanesFn,
            u = e.renderSidebarCallToActionsFn,
            p = e.renderSidebarControlsFn,
            _ = e.renderSidebarNotificationsFn,
            f = e.renderSidebarOverflowMenuFn,
            m = e.renderSidebarPASSFn,
            v = e.backgroundColor,
            h = e.width,
            g = i.__rest(e, ["registerSidebarPanesFn", "renderSidebarCallToActionsFn", "renderSidebarControlsFn", "renderSidebarNotificationsFn", "renderSidebarOverflowMenuFn", "renderSidebarPASSFn", "backgroundColor", "width"]);
        return n.createElement("aside", {
            className: r.default(c.sidebar, (t = {}, t[c.isOpen] = l.isSidebarOpen(g.fileViewerUiData.sidebar), t)),
            style: h ? {
                width: h
            } : void 0
        }, n.createElement(a.Header, Object.assign({}, g, {
            renderSidebarCallToActionsFn: u,
            renderSidebarPASSFn: m,
            renderSidebarNotificationsFn: _
        })), n.createElement("div", {
            className: c.sidebarContent
        }, n.createElement(o.ControlList, Object.assign({}, g, {
            renderSidebarCallToActionsFn: u,
            renderSidebarControlsFn: p,
            renderSidebarOverflowMenuFn: f,
            renderSidebarPASSFn: m,
            backgroundColor: v
        })), n.createElement(s.PaneStack, Object.assign({}, g, {
            registerSidebarPanesFn: d,
            backgroundColor: v,
            width: h ? h - parseInt("48px", 10) : void 0
        }))))
    }
}), define("file-viewer/modes/sidebar/utils", ["require", "exports", "file-viewer/core"], function(e, t, i) {
    "use strict";

    function r(e) {
        return "@@previews/sidebarControlClick" === e.type
    }

    function n(e) {
        return "@@previews/setSidebarVisibility" === e.type
    }
    var o;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (o = {}, o[i.SidebarControlId.Documentation] = function(e, t) {
        e(i.changeMode({
            fileViewerId: t,
            mode: i.FileViewerMode.Documentation,
            sourceContext: "sidebar"
        }))
    }, o[i.SidebarControlId.Comments] = function(e, t) {
        e(i.changeMode({
            fileViewerId: t,
            mode: i.FileViewerMode.Commenting,
            sourceContext: "sidebar"
        }))
    }, o[i.SidebarControlId.Watermarking] = function(e, t) {
        e(i.changeMode({
            fileViewerId: t,
            mode: i.FileViewerMode.Watermarking,
            sourceContext: "sidebar"
        }))
    }, o[i.SidebarControlId.Zoom] = function(e, t) {
        e(i.changeMode({
            fileViewerId: t,
            mode: i.FileViewerMode.Zoom,
            sourceContext: "sidebar"
        }))
    }, o[i.SidebarControlId.Slack] = function(e, t) {
        e(i.changeMode({
            fileViewerId: t,
            mode: i.FileViewerMode.Slack,
            sourceContext: "sidebar"
        }))
    }, o);
    t.createSidebarDispatchHandler = function(e, t) {
        return function(i) {
            if (r(i)) {
                return (0, a[i.payload.controlId])(e, t, i)
            }
            return e(n(i) ? i : i)
        }
    }, t.isSidebarOpen = function(e) {
        return e.visibility === i.SidebarVisibility.Open
    }, t.isSidebarPaneIdAtTopOfStack = function(e, t) {
        var i = t.paneStack;
        return i.length > 0 && i[i.length - 1] === e
    }, t.isEditMode = function(e) {
        return e === i.FileViewerMode.Watermarking
    }
}), define("file-viewer/strings", ["require", "exports", "modules/core/i18n"], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.strings = {
        "3ptrG": {
            token: "value",
            message: function(e) {
                return i.ungettext("%(value)s byte", "%(value)s bytes", e, {
                    comment: "file size in bytes"
                })
            }
        },
        "2StGi": i._("%(value)s KB", {
            comment: "file size in Kilobytes"
        }),
        "1IUi0": i._("%(value)s MB", {
            comment: "file size in Megabytes"
        }),
        "39Cwd": i._("%(value)s GB", {
            comment: "file size in Gigabytes"
        }),
        "3Ukg4": i._("%(value)s TB", {
            comment: "file size in Terabytes"
        }),
        "3oKzS": {
            token: "value",
            message: function(e) {
                return i.ungettext("%(value)s second", "%(value)s seconds", e, {
                    comment: "duration"
                })
            }
        },
        "20Xme": {
            token: "value",
            message: function(e) {
                return i.ungettext("%(value)s minute", "%(value)s minutes", e, {
                    comment: "duration"
                })
            }
        },
        "3L3dr": {
            token: "value",
            message: function(e) {
                return i.ungettext("%(value)s hour", "%(value)s hours", e, {
                    comment: "duration"
                })
            }
        },
        "1XFv4": {
            token: "value",
            message: function(e) {
                return i.ungettext("%(value)s day", "%(value)s days", e, {
                    comment: "duration"
                })
            }
        },
        "2ltJd": {
            token: "value",
            message: function(e) {
                return i.ungettext("%(value)s week", "%(value)s weeks", e, {
                    comment: "duration"
                })
            }
        },
        "1ZMrP": {
            token: "value",
            message: function(e) {
                return i.ungettext("%(value)s month", "%(value)s months", e, {
                    comment: "duration"
                })
            }
        },
        "2KExw": {
            token: "value",
            message: function(e) {
                return i.ungettext("%(value)s year", "%(value)s years", e, {
                    comment: "duration"
                })
            }
        },
        "6nnDP": {
            token: "number",
            message: function(e) {
                return i.ungettext("Viewed %(number)s year ago", "Viewed %(number)s years ago", e, {
                    comment: "label for last time a user has viewed the file"
                })
            }
        },
        HTBEh: {
            token: "number",
            message: function(e) {
                return i.ungettext("Viewed %(number)s month ago", "Viewed %(number)s months ago", e, {
                    comment: "label for last time a user has viewed the file"
                })
            }
        },
        "32pDF": {
            token: "number",
            message: function(e) {
                return i.ungettext("Viewed %(number)s week ago", "Viewed %(number)s weeks ago", e, {
                    comment: "label for last time a user has viewed the file"
                })
            }
        },
        Roztq: {
            token: "number",
            message: function(e) {
                return i.ungettext("Viewed %(number)s day ago", "Viewed %(number)s days ago", e, {
                    comment: "label for last time a user has viewed the file"
                })
            }
        },
        "1Vt6M": {
            token: "number",
            message: function(e) {
                return i.ungettext("Viewed %(number)s hour ago", "Viewed %(number)s hours ago", e, {
                    comment: "label for last time a user has viewed the file"
                })
            }
        },
        "1-Qnz": {
            token: "number",
            message: function(e) {
                return i.ungettext("Viewed %(number)s min ago", "Viewed %(number)s mins ago", e, {
                    comment: "label for last time a user has viewed the file"
                })
            }
        },
        "1A8Wt": i._("Viewed just now", {
            comment: "label for last time a user has viewed the file"
        }),
        "3f1s4": i._("Viewing now", {
            comment: "tooltip showing a user viewing a file"
        }),
        "3bhF-": i._("Guest", {
            comment: "Name of guest user"
        }),
        "3O68s": i._("99+", {
            comment: "label for facepile when there are more than 99 people having seen the file"
        }),
        "2u_Bg": {
            token: "count",
            message: function(e) {
                return i.ungettext("%(count)s other", "%(count)s others", e, {
                    comment: "label for number of other people that viewed this file"
                })
            }
        },
        "17znK": i._("About", {
            comment: "Label next to a button that opens a sidebar pane with things like file metadata and activity."
        }),
        "3rjoD": i._("Comments", {
            comment: "Label next to a button that opens a sidebar pane for leaving comments on a file."
        }),
        "2EDv9": i._("Toggle Comments Sidebar", {
            comment: "Aria Label for a button that opens and closes sidebar pane for leaving comments on a file."
        }),
        "1l5w1": i._("Watermark", {
            comment: "Label next to a button that opens a sidebar pane for creating a watermark."
        }),
        "2Lzae": i._(" (opens a modal dialog)", {
            comment: "Behavior explanation of button for screen-readers"
        }),
        "32jM8": i._("Zoom", {
            comment: "Refers to the third party Zoom."
        }),
        tiMzO: i._("Slack", {
            comment: "Label next to a button that opens a sidebar pane for the Slack extension."
        }),
        TaUXe: i._("Back", {
            comment: "Back button on sidebar to go back to the last sidebar panel"
        }),
        "380FK": i._("Hide sidebar", {
            comment: "Tooltip text to hide preview sidebar"
        }),
        "1-hY4": i._("Show sidebar", {
            comment: "Tooltip text to show preview sidebar"
        }),
        "3r1su": i._("Fullscreen", {
            comment: "Fullscreen control for preview toolbar"
        }),
        "1crUg": i._("Page down", {
            comment: "Page down control for preview toolbar"
        }),
        "30U9L": i._("Page up", {
            comment: "Page up control for preview toolbar"
        }),
        yOZ5I: i._("Zoom in", {
            comment: "Zoom in control for preview toolbar"
        }),
        "2dTGQ": i._("Zoom out", {
            comment: "Zoom out control for preview toolbar"
        }),
        "3A0DU": i._("Previous", {
            comment: "Flip to the previous file in a series of files when previewing files on the web"
        }),
        "1XG6i": i._("Next", {
            comment: "Flip to the next file in a series of files when previewing files on the web"
        }),
        "1LWb5": i._("%(file_number)s of %(file_count)s", {
            comment: "Index indicator for preview toolbar file flipping controls"
        }),
        "3Dloj": i._("Page...", {
            comment: "Placeholder text for preview toolbar page indicator input"
        }),
        Z4LHJ: i._("Click to jump to a page", {
            comment: "Tooltip text for the page indicator"
        }),
        "1BXqX": i._("Zoom to fit", {
            comment: "Toolbar tooltip text for zooming an image to fit the viewport"
        }),
        "2iKGa": i._("View actual size", {
            comment: "Toolbar tooltip text for zooming an image to its real size"
        }),
        "2yLzB": i._("Page %(index)s", {
            comment: "label for each document page"
        }),
        "2w1Rq": i._("Document Sidebar", {
            comment: "a11y label for doc sidebar"
        }),
        uh_2T: i._("External Link", {
            comment: "Label for external anchor link"
        }),
        PLDnD: i._("Internal Link", {
            comment: "Label for internal anchor link"
        }),
        ACvIY: i._("Reload", {
            comment: "Reload button label"
        }),
        "1_qu7": i._("Close", {
            comment: "Close button label"
        }),
        "2nXNn": i._("Document Password Modal", {
            comment: "password modal label"
        }),
        "35GUv": i._("This file is password protected", {
            comment: "modal title"
        }),
        MBnKP: i._("Submit", {
            comment: "submit button label"
        }),
        Cx9Xf: i._("Cancel", {
            comment: "Cancel button label"
        }),
        "2eyfy": i._("The password you entered is incorrect, please try again.", {
            comment: "message in modal when user enters wrong passwords"
        }),
        "3X32N": i._("Enter the password to open this file.", {
            comment: "Password input prompt"
        }),
        NlVBZ: i._("Password", {
            comment: "Password input placeholder"
        }),
        b7cZq: i._("Open", {
            comment: "Open with button label"
        }),
        "1H_zL": i._("%(extension)s files can’t currently be previewed.", {
            comment: "Preview Error section message"
        }),
        "1qTZi": i._("View on dropbox.com", {
            comment: "View preview on dropbox.com link"
        }),
        "2f_eX": i._("This %(extension)s file is password-protected", {
            comment: "Preview Error section title"
        }),
        "1qFPZ": i._("This file cannot be previewed", {
            comment: "Preview Error section title"
        }),
        "3IvZ8": i._("Files without extensions cannot be previewed", {
            comment: "Preview Error section title"
        }),
        "1sf_t": i._("This file is too big to preview", {
            comment: "Preview Error section title"
        }),
        "3KmLP": i._("The maximum size for %(extension)s files is %(size)s", {
            comment: "Preview Error section message"
        }),
        "2aX8q": i._("File is uploading", {
            comment: "Preview Error section title"
        }),
        "3-4kT": i._("This file cannot be previewed because you are offline", {
            comment: "Preview Error section title"
        }),
        "3c4MZ": i._("Previous Page", {
            comment: "Button to move to previous page in document"
        }),
        mMrPB: i._("Next Page", {
            comment: "Button to move to next page in document"
        }),
        "1D-MZ": i._("Can’t show link. Something’s wrong with this file.", {
            comment: "Shown instead of description if there is an error"
        }),
        iTxna: i._("Open in new tab", {
            comment: "Label text for open button"
        }),
        IsYDw: i._("%(hours)s:%(minutes)s:%(seconds)s", {
            comment: "media duration, like `02:49:23` for 2 hours 49 minutes 23 seconds"
        }),
        "2mIya": i._("%(audio_freq)s mHz %(audio_chan_layout)s", {
            comment: "frequency with channel layout"
        }),
        "1i88i": i._("%(audio_freq)s mHz", {
            comment: "frequency"
        }),
        "3EGwQ": i._("Creation Time", {
            comment: "Field label shown on top of the Capture Date of a Audio file. E.g. Capture Date and on the next line Jan 1 2010"
        }),
        "1foOL": i._("Capturing Device", {
            comment: "Field label shown on top of the capturing of a Video file. E.g. Capturing Device and on the next line Apple iPhone 8"
        }),
        "3-cmd": i._("Resolution", {
            comment: "Field label shown on top of the resolution of a Video file. E.g. Resolution and on the next line 800x600"
        }),
        "3YA08": i._("Aspect Ratio", {
            comment: "Field label shown on top of the aspect ratio of a Video file. E.g. Aspect Ratio and on the next line 16:9"
        }),
        "1Wf2t": i._("Duration", {
            comment: "Field label shown on top of the duration of a Audio file. E.g. duration and on the next line 58 minutes"
        }),
        "2Hk_S": i._("Frame Rate", {
            comment: "Field label shown on top of the Frame Rate of a Video file. E.g. Frame Rate and on the next line"
        }),
        "1CrWp": i._("Color Space", {
            comment: "Field label shown on top of the color space of a Video file. E.g. Color Space and on the next line bt709"
        }),
        yspZE: i._("Bit Rate", {
            comment: "Field label shown on top of the Bit Rate of a Audio file. E.g. Bit Rate and on the next line"
        }),
        "1rdRv": i._("%(bit_rate)s kb/s", {
            comment: "bit rate"
        }),
        "1Fslx": i._("Audio", {
            comment: "Field label shown on top of the Audio information (frequency and channel layout)of a Video file. E.g. Audio and on the next line 455mHz stereo"
        }),
        F4sU_: i._("Codec", {
            comment: "Media codec"
        }),
        "2pWn4": i._("Sampling Rate", {
            comment: "Field label shown on top of the Sampling Rate of a Audio file. E.g. Sampling Rate and on the next line"
        }),
        "22CXV": i._("Channels", {
            comment: "Field label shown on top of the number of channels of a Audio file. E.g. Channels and on the next line 6"
        }),
        "231U7": i._("%(name)s edited just now", {
            comment: "Like John Smith edited just now"
        }),
        "2fLsj": i._("You edited just now", {
            comment: "Label describing that you edited the file just now"
        }),
        uU6mk: i._("%(owner_name)s (%(owner_team_name)s)", {
            comment: "Label displaying file owners information"
        }),
        "3dQ5Z": i._("From", {
            comment: "Field label shown before the source of shared link, e.g. From Andrea (Suntech Inc)"
        }),
        "1zBzj": i._("Last modified", {
            comment: "Field label shown on top of the modified time of a file. E.g. Last modified and on the next line <some date string>"
        }),
        "2hkDJ": i._("View previous versions", {
            comment: "Text for outbound link from the file preview sidebar to take the user to the version history page showing the list of versions/revisions of the current file."
        }),
        "2JcRH": i._("Size", {
            comment: "Field label shown before the file size."
        }),
        "25yUS": i._("Details", {
            comment: "Title of File Details section"
        }),
        "2C4NJ": i._("View all details", {
            comment: "Text for button on the file preview sidebar to take the user to the section."
        }),
        "1KmW5": i._("Title", {
            comment: "Field label shown on top of the title explicitly set for the Office file. E.g. Title and on the next line <some title string>"
        }),
        uYJtO: i._("Owner", {
            comment: "Field label shown on top of the name of the person who created the Office file. E.g. Owner and on the next line <some name string>"
        }),
        "2PBAq": i._("Company", {
            comment: "Field label shown on top of the name of the company that created the Office file or that is affiliated with the creator. E.g. Company and on the next line <some name string>"
        }),
        uiaGp: i._("Subject", {
            comment: "Field label shown on top of the subject explicitly set for the Office file. E.g. Subject and on the next line <some descriptive string>"
        }),
        "1dvO8": i._("Keywords", {
            comment: "Field label shown on top of the keywords explicitly set for the Office file. E.g. Keywords and on the next line <some descriptive string>"
        }),
        "2psG9": i._("Description", {
            comment: "Field label shown on top of the description explicitly set for the Office file. E.g. Description and on the next line <some descriptive string>"
        }),
        "38IDQ": i._("Total edit time", {
            comment: "Field label shown on top of the time  E.g. Slides and on the next line 20"
        }),
        JjlJr: i._("Pages", {
            comment: "Number of pages in a document"
        }),
        "2uwbj": i._("Words", {
            comment: "Field label shown on top of the number of words in the Office file (specifically Word file). E.g. Words and on the next line 1000"
        }),
        "19BtJ": i._("Slides", {
            comment: "Field label shown on top of the number of slides in the Office file (specifically PowerPoint file). E.g. Slides and on the next line 20"
        }),
        "1Uzsj": i._("Dimensions", {
            comment: "Label for dimension: width x height"
        }),
        "3H4CF": i._("%(width)s x %(height)s", {
            comment: "Dimension: width x height"
        }),
        "3s7cy": i._("%(exposure_time)s s", {
            comment: "For a given exposure time/shutter speed value of an image expressed as fraction of seconds (e.g., 1/100) or float (e.g. 1.0), append the unit of seconds (s) to the value, e.g., 1/100 s or 1.0 s"
        }),
        "1cRMh": i._("Unknown", {
            comment: "When we dont know what category this belongs to"
        }),
        "3U3hN": i._("sRGB", {
            comment: "Field value displayed under a field label titled Color profile. It represents a color space setting tag value for a given image under the EXIF tags specification."
        }),
        "2FO4v": i._("Adobe RGB", {
            comment: "Field value displayed under a field label titled Color profile. It represents a color space setting tag value for a given image under the EXIF tags specification."
        }),
        jiDD_: i._("Wide Gamut RGB", {
            comment: "Field value displayed under a field label titled Color profile. It represents a color space setting tag value for a given image under the EXIF tags specification."
        }),
        "25Rbj": i._("ICC Profile", {
            comment: "Field value displayed under a field label titled Color profile. It represents a color space setting tag value for a given image under the EXIF tags specification."
        }),
        "32UEJ": i._("Uncalibrated", {
            comment: "Field value displayed under a field label titled Color profile. It represents a color space setting tag value for a given image under the EXIF tags specification."
        }),
        "3py90": i._("Other", {
            comment: "Category we have not specified yet"
        }),
        "2mj-b": i._("Average", {
            comment: "Metering mode setting tag value for a given image under the EXIF tags specification"
        }),
        fHXEr: i._("Center-weighted average", {
            comment: "Metering mode setting tag value for a given image under the EXIF tags specification"
        }),
        "3cLPA": i._("Spot", {
            comment: "Metering mode setting tag value for a given image under the EXIF tags specification"
        }),
        "1U3dD": i._("Multi-spot", {
            comment: "Metering mode setting tag value for a given image under the EXIF tags specification"
        }),
        cI36M: i._("Multi-segment", {
            comment: "Metering mode setting tag value for a given image under the EXIF tags specification"
        }),
        "2peHQ": i._("Partial", {
            comment: "Metering mode setting tag value for a given image under the EXIF tags specification"
        }),
        "3UFcy": i._("No flash", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "30UZ5": i._("Fired", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "2Z-zX": i._("Fired, return not detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        hrp0n: i._("Fired, return detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "1-TTP": i._("On, did not fire", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "1pUBS": i._("On, fired", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "3utTp": i._("On, return not detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "3nQ9U": i._("On, return detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "2gEO8": i._("Off, did not fire", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "1QyEW": i._("Off, did not fire, return not detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "3mgc2": i._("Auto, did not fire", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "3vM9T": i._("Auto, fired", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "3MOkq": i._("Auto, fired, return not detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        PdZuv: i._("Auto, fired, return detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "289UD": i._("No flash function", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "2HFA9": i._("Off, no flash function", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "2V_5n": i._("Fired, red-eye reduction", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "2QihZ": i._("Fired, red-eye reduction, return not detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "1mzM3": i._("Fired, red-eye reduction, return detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "151-t": i._("On, red-eye reduction", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "1XnNl": i._("On, red-eye reduction, return not detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        GIJy1: i._("On, red-eye reduction, return detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "3NIxN": i._("Off, red-eye reduction", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "2090a": i._("Auto, did not fire, red-eye reduction", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "2Qlxc": i._("Auto, fired, red-eye reduction", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        "1Kn8z": i._("Auto, fired, red-eye reduction, return not detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        LQvhO: i._("Auto, fired, red-eye reduction, return detected", {
            comment: "Field value displayed under a field label titled Flash. It represents a flash setting tag value for a given image under the EXIF tags specification."
        }),
        xxHTG: i._("Auto", {
            comment: "Field value displayed under a field label titled White Balance. It represents a white balance setting tag value for a given image under the EXIF tags specification."
        }),
        XfUnQ: i._("Manual", {
            comment: "Field value displayed under a field label titled White Balance. It represents a white balance setting tag value for a given image under the EXIF tags specification."
        }),
        "2J0Qf": i._("Original date", {
            comment: "Field label shown on top of the date/time when the original image was taken under EXIF tags specification. E.g. Original date and on the next line <some date string>"
        }),
        E0qMA: i._("Focal length", {
            comment: "Field label shown on top of the focal length setting used to capture the image, in millimiters. E.g. Focal length and on the next line 16.2 mm"
        }),
        "32IIt": i._("%(focal_length)s mm", {
            comment: "Focal length, like 12.4 mm"
        }),
        Sj7xL: i._("Shutter speed", {
            comment: "Field label shown on top of the shutter speed setting used to capture the image, as a fraction of a second. E.g. Shutter speed and on the next line 1/10"
        }),
        twcZi: i._("Aperture", {
            comment: "Field label shown on top of the aperture value setting (logarithmic number expressed as an F-stop number) used to capture the image. E.g. Aperture and on the next line f/2.8"
        }),
        "2q5HT": i._("f/%(aperture)s", {
            comment: "For a given aperture value of an image expresed as an f-number (e.g., 2.2), prepend the f-number label f/ to the value, e.g., f/2.2"
        }),
        Qk49k: i._("ISO", {
            comment: "Field label shown on top of the ISO speed setting (measure of film/sensor sensitivity) used to capture the image. E.g. ISO and on the next line 200"
        }),
        "2Q8oO": i._("Metering", {
            comment: "Field label shown on top of the metering mode used to capture the image. E.g. Metering and on the next line, one of Multi-segment, Multi-spot, Partial, etc."
        }),
        "3Y6de": i._("Flash", {
            comment: "Field label shown on top of the flash setting used to capture the image. E.g. Flash and on the next line Off, Did not fire"
        }),
        "2KN5j": i._("White balance", {
            comment: "Field label shown on top of the white balance setting used to capture the image. E.g. White balance and on the next line Auto or Manual"
        }),
        "29g82": i._("Camera make", {
            comment: "Field label shown on top of the name of the maker of the device used to capture the image. E.g. Camera make and on the next line Apple"
        }),
        "3K2vB": i._("Camera model", {
            comment: "Field label shown on top of the name of the model of the device used to capture the image. E.g. Camera model and on the next line Canon PowerShot S330"
        }),
        "3TKd6": i._("Lens model", {
            comment: "Field label shown on top of the name of the model of the lens used to capture the image. E.g. Lens model and on the next line iPad Pro (10.5-inch) back camera 3.99mm f/1.8"
        }),
        Wioe1: i._("Color profile", {
            comment: "Field label shown on top of the color profile of the image. E.g. Color profile and on the next line sRGB"
        }),
        "31VDS": i._("Artist", {
            comment: "Field label shown on top of the name of person or company that captured or designed the image. E.g. Artist and on the next line <some name string>"
        }),
        TZ43u: i._("Copyright", {
            comment: "Field label shown on top of the name of the entity that holds a copyright on the image. E.g. Copyright and on the next line <some string>"
        }),
        "2iPX8": i._("Uploaded by", {
            comment: "Field label shown on top of the user who uploaded the file. E.g. Uploaded by and on the next line <some user display name>"
        }),
        "2bgfi": i._("Date uploaded", {
            comment: "Field label shown on top of the uploaded time of a file. E.g. Date uploaded and on the next line <some date string>"
        }),
        l5Fvn: i._("Extension", {
            comment: "Field label shown before the file extension."
        }),
        "2ZHPw": i._("Image details", {
            comment: "Section header label for image details"
        }),
        "1P0GZ": i._("Microsoft details", {
            comment: "Section header label for MS Office details"
        }),
        "2s132": i._("PDF details", {
            comment: "Section header label for PDF details"
        }),
        "2ldKe": i._("Audio details", {
            comment: "Section header label for PDF details"
        }),
        Tjgh8: i._("Video details", {
            comment: "Section header label for PDF details"
        }),
        "1ftLX": i._("Dropbox details", {
            comment: "Section header label shown on top of the section listing general file metadata (uploaded by, upload date, size, extension)."
        }),
        "2l6UF": {
            token: "number",
            message: function(e) {
                return i.ungettext("%(number)s year ago", "%(number)s years ago", e, {
                    comment: "label for comment that was left a few years ago"
                })
            }
        },
        "4jyR0": {
            token: "number",
            message: function(e) {
                return i.ungettext("%(number)s month ago", "%(number)s months ago", e, {
                    comment: "label for comment that was left a few months ago"
                })
            }
        },
        "1i3A1": {
            token: "number",
            message: function(e) {
                return i.ungettext("%(number)s week ago", "%(number)s weeks ago", e, {
                    comment: "label for comment that was left a few weeks ago"
                })
            }
        },
        Vu6ED: {
            token: "number",
            message: function(e) {
                return i.ungettext("%(number)s day ago", "%(number)s days ago", e, {
                    comment: "label for comment that was left a few days ago"
                })
            }
        },
        "2qR7n": {
            token: "number",
            message: function(e) {
                return i.ungettext("%(number)s hour ago", "%(number)s hours ago", e, {
                    comment: "label for comment that was left a few hours ago"
                })
            }
        },
        "8pkVG": {
            token: "number",
            message: function(e) {
                return i.ungettext("%(number)s min ago", "%(number)s mins ago", e, {
                    comment: "label for comment that was left a few mins ago"
                })
            }
        },
        "2qZ7G": i._("Just now", {
            comment: "label for comment that was left less than a min ago"
        }),
        "8fDlH": i._("@mention someone to share this file", {
            comment: "mention instruction message"
        }),
        "3iN4V": i._("@mention someone", {
            comment: "mention btn label"
        }),
        "1nqpH": i._("Searching contacts…", {
            comment: "message displayed while search is processed"
        }),
        "2lweF": i._("No Users Found", {
            comment: "No Users Found"
        }),
        "nlds-": i._("Invite %(user_name)s", {
            comment: "invite message"
        }),
        "3pIbH": i._("Save", {
            comment: "edit button label"
        }),
        "2Wo9h": i._("This comment was deleted.", {
            comment: "message after comment is deleted"
        }),
        "3x7uu": i._("Edit", {
            comment: "edit button label"
        }),
        "2oCAM": i._("Delete", {
            comment: "delete button label"
        }),
        "3ZEru": i._("Mark as read", {
            comment: "Mark as read button label"
        }),
        "3UAhM": i._("Mark as unread", {
            comment: "Mark as unread button label"
        }),
        "1oD4j": i._("Marked as resolved", {
            comment: "Marked as resolved button label"
        }),
        LeHxj: i._("On older version", {
            comment: "message displayed when user is viewing an older version of the file"
        }),
        "3a8xH": i._("Reply…", {
            comment: "Reply affordance shown when hovering a collapsed thread"
        }),
        "1zif5": i._("Comment", {
            comment: "Placeholder for Comment Editor"
        }),
        "1-FNO": i._("Post", {
            comment: "Post button label"
        }),
        "31CgX": i._("Restore", {
            comment: "Restore button label"
        }),
        "2cH3Z": i._("Resolve", {
            comment: "Resolve button label"
        }),
        "1X0tz": i._("Reply", {
            comment: "Reply button label"
        }),
        "1jeeF": i._("View version history", {
            comment: "View version history button label"
        }),
        "3qNGZ": i._("Page %(page)s", {
            comment: "page number where comment was left on"
        }),
        "1CYeW": i._("%(count)s comments", {
            comment: "number of comments left"
        }),
        "1g0Xl": i._("%(count)s unread", {
            comment: "number of unread comments"
        }),
        "1j6jP": i._("Comment thread", {
            comment: "Comment thread accessbility label"
        }),
        "3zwVy": i._("Unread comment thread", {
            comment: "Unread comment thread accessbility label"
        }),
        "28Doq": i._("Previous sticker set", {
            comment: "Prev sticker set accessbility label"
        }),
        vcPhy: i._("Next sticker set", {
            comment: "Next sticker set accessbility label"
        }),
        "2-yFx": i._("Sticker menu", {
            comment: "Sticker menu accessbility label"
        }),
        "2e8Pa": i._("Sticker: %(description)s", {
            comment: "Sticker in a comment. Example: Sticker: Wizard jumping with joy"
        }),
        "2j1Sw": i._("Select %(description)s", {
            comment: "Select specific sticker set accessibility label"
        }),
        "3y_nb": i._("Insert %(description)s", {
            comment: "Insert specific sticker accessibility label"
        }),
        "2Zz4g": i._("Download", {
            comment: "Download button label"
        }),
        "3hwIp": i._("Sign in", {
            comment: "Sign in button label"
        }),
        "13yJF": i._("Share", {
            comment: "Share button label"
        }),
        "1W2uL": i._("Loading...", {
            comment: "`Indicating some data is loading. Another view will show up once its loaded`"
        }),
        "13oti": {
            token: "number",
            message: function(e) {
                return i.ungettext("%(number)s slide", "%(number)s slides", e, {
                    comment: "number of slides in a presentation"
                })
            }
        },
        "3LGzA": {
            token: "number",
            message: function(e) {
                return i.ungettext("%(number)s page", "%(number)s pages", e, {
                    comment: "number of pages in a document"
                })
            }
        },
        "2BZaZ": i._("Open with Dropbox Preview", {
            comment: "Hover text for button that will open a file with Dropbox Preview"
        }),
        hyeca: i._("In %(folder_name)s", {
            comment: "describing the folder that a file belongs to"
        })
    }
}), define("modules/clean/api_v2/redux/base_action", ["require", "exports", "tslib"], function(e, t, i) {
    "use strict";

    function r(e) {
        return function(t, i, r) {
            return {
                type: e,
                payload: t,
                meta: i,
                error: r
            }
        }
    }

    function n(e) {
        return function(t) {
            var r = this;
            return function(n) {
                var o = n.dispatch;
                return function(n) {
                    return function(a) {
                        return i.__awaiter(r, void 0, void 0, function() {
                            var r, s, l, c, d, u, p;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (s = n(a), l = e[a.type], !l) return [3, 5];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), d = (c = l).action, u = {
                                            arg: a.payload.arg
                                        }, [4, t.rpc(l.endpoint, a.payload.arg, a.payload.params)];
                                    case 2:
                                        return r = d.apply(c, [(u.result = i.sent(), u), a.meta]), [3, 4];
                                    case 3:
                                        return p = i.sent(), r = l.action({
                                            arg: a.payload.arg,
                                            params: a.payload.params
                                        }, a.meta, p), [3, 4];
                                    case 4:
                                        return [2, o(r)];
                                    case 5:
                                        return [2, s]
                                }
                            })
                        })
                    }
                }
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t._createAction = r, t._createMiddleware = n
}), define("modules/clean/api_v2/redux/comments2", ["require", "exports", "modules/clean/api_v2/redux/base_action"], function(e, t, i) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Action = {
        AddComment: "@@apiv2_redux/comments2/add_comment",
        AddCommentResult: "@@apiv2_redux/comments2/add_comment_result",
        CheckOnboardingStatus: "@@apiv2_redux/comments2/check_onboarding_status",
        CheckOnboardingStatusResult: "@@apiv2_redux/comments2/check_onboarding_status_result",
        CheckUpsellExperiment: "@@apiv2_redux/comments2/check_upsell_experiment",
        CheckUpsellExperimentResult: "@@apiv2_redux/comments2/check_upsell_experiment_result",
        DeleteComment: "@@apiv2_redux/comments2/delete_comment",
        DeleteCommentResult: "@@apiv2_redux/comments2/delete_comment_result",
        DisableCommenting: "@@apiv2_redux/comments2/disable_commenting",
        DisableCommentingResult: "@@apiv2_redux/comments2/disable_commenting_result",
        DismissUpsellExperiment: "@@apiv2_redux/comments2/dismiss_upsell_experiment",
        DismissUpsellExperimentResult: "@@apiv2_redux/comments2/dismiss_upsell_experiment_result",
        DismissUpsellTooltip: "@@apiv2_redux/comments2/dismiss_upsell_tooltip",
        DismissUpsellTooltipResult: "@@apiv2_redux/comments2/dismiss_upsell_tooltip_result",
        EditComment: "@@apiv2_redux/comments2/edit_comment",
        EditCommentResult: "@@apiv2_redux/comments2/edit_comment_result",
        EnableCommenting: "@@apiv2_redux/comments2/enable_commenting",
        EnableCommentingResult: "@@apiv2_redux/comments2/enable_commenting_result",
        GetFolderLiveUpdatingInfo: "@@apiv2_redux/comments2/get_folder_live_updating_info",
        GetFolderLiveUpdatingInfoResult: "@@apiv2_redux/comments2/get_folder_live_updating_info_result",
        ListComments: "@@apiv2_redux/comments2/list_comments",
        ListCommentsResult: "@@apiv2_redux/comments2/list_comments_result",
        ListCommentsBatch: "@@apiv2_redux/comments2/list_comments_batch",
        ListCommentsBatchResult: "@@apiv2_redux/comments2/list_comments_batch_result",
        LogEvent: "@@apiv2_redux/comments2/log_event",
        LogEventResult: "@@apiv2_redux/comments2/log_event_result",
        LogLandingPageClick: "@@apiv2_redux/comments2/log_landing_page_click",
        LogLandingPageClickResult: "@@apiv2_redux/comments2/log_landing_page_click_result",
        LogPerfEvent: "@@apiv2_redux/comments2/log_perf_event",
        LogPerfEventResult: "@@apiv2_redux/comments2/log_perf_event_result",
        LoggedOutListComments: "@@apiv2_redux/comments2/logged_out/list_comments",
        LoggedOutListCommentsResult: "@@apiv2_redux/comments2/logged_out/list_comments_result",
        MarkHasOnboarded: "@@apiv2_redux/comments2/mark_has_onboarded",
        MarkHasOnboardedResult: "@@apiv2_redux/comments2/mark_has_onboarded_result",
        MarkThreadRead: "@@apiv2_redux/comments2/mark_thread_read",
        MarkThreadReadResult: "@@apiv2_redux/comments2/mark_thread_read_result",
        MarkThreadUnread: "@@apiv2_redux/comments2/mark_thread_unread",
        MarkThreadUnreadResult: "@@apiv2_redux/comments2/mark_thread_unread_result",
        ResolveThread: "@@apiv2_redux/comments2/resolve_thread",
        ResolveThreadResult: "@@apiv2_redux/comments2/resolve_thread_result",
        Subscribe: "@@apiv2_redux/comments2/subscribe",
        SubscribeResult: "@@apiv2_redux/comments2/subscribe_result",
        UnresolveThread: "@@apiv2_redux/comments2/unresolve_thread",
        UnresolveThreadResult: "@@apiv2_redux/comments2/unresolve_thread_result",
        Unsubscribe: "@@apiv2_redux/comments2/unsubscribe",
        UnsubscribeResult: "@@apiv2_redux/comments2/unsubscribe_result"
    }, t.addCommentAction = i._createAction(t.Action.AddComment), t.addCommentResultAction = i._createAction(t.Action.AddCommentResult), t.checkOnboardingStatusAction = i._createAction(t.Action.CheckOnboardingStatus), t.checkOnboardingStatusResultAction = i._createAction(t.Action.CheckOnboardingStatusResult), t.checkUpsellExperimentAction = i._createAction(t.Action.CheckUpsellExperiment), t.checkUpsellExperimentResultAction = i._createAction(t.Action.CheckUpsellExperimentResult), t.deleteCommentAction = i._createAction(t.Action.DeleteComment), t.deleteCommentResultAction = i._createAction(t.Action.DeleteCommentResult), t.disableCommentingAction = i._createAction(t.Action.DisableCommenting), t.disableCommentingResultAction = i._createAction(t.Action.DisableCommentingResult), t.dismissUpsellExperimentAction = i._createAction(t.Action.DismissUpsellExperiment), t.dismissUpsellExperimentResultAction = i._createAction(t.Action.DismissUpsellExperimentResult), t.dismissUpsellTooltipAction = i._createAction(t.Action.DismissUpsellTooltip), t.dismissUpsellTooltipResultAction = i._createAction(t.Action.DismissUpsellTooltipResult), t.editCommentAction = i._createAction(t.Action.EditComment), t.editCommentResultAction = i._createAction(t.Action.EditCommentResult), t.enableCommentingAction = i._createAction(t.Action.EnableCommenting), t.enableCommentingResultAction = i._createAction(t.Action.EnableCommentingResult), t.getFolderLiveUpdatingInfoAction = i._createAction(t.Action.GetFolderLiveUpdatingInfo), t.getFolderLiveUpdatingInfoResultAction = i._createAction(t.Action.GetFolderLiveUpdatingInfoResult), t.listCommentsAction = i._createAction(t.Action.ListComments), t.listCommentsResultAction = i._createAction(t.Action.ListCommentsResult), t.listCommentsBatchAction = i._createAction(t.Action.ListCommentsBatch), t.listCommentsBatchResultAction = i._createAction(t.Action.ListCommentsBatchResult), t.logEventAction = i._createAction(t.Action.LogEvent), t.logEventResultAction = i._createAction(t.Action.LogEventResult), t.logLandingPageClickAction = i._createAction(t.Action.LogLandingPageClick), t.logLandingPageClickResultAction = i._createAction(t.Action.LogLandingPageClickResult), t.logPerfEventAction = i._createAction(t.Action.LogPerfEvent), t.logPerfEventResultAction = i._createAction(t.Action.LogPerfEventResult), t.loggedOutListCommentsAction = i._createAction(t.Action.LoggedOutListComments), t.loggedOutListCommentsResultAction = i._createAction(t.Action.LoggedOutListCommentsResult), t.markHasOnboardedAction = i._createAction(t.Action.MarkHasOnboarded), t.markHasOnboardedResultAction = i._createAction(t.Action.MarkHasOnboardedResult), t.markThreadReadAction = i._createAction(t.Action.MarkThreadRead), t.markThreadReadResultAction = i._createAction(t.Action.MarkThreadReadResult), t.markThreadUnreadAction = i._createAction(t.Action.MarkThreadUnread), t.markThreadUnreadResultAction = i._createAction(t.Action.MarkThreadUnreadResult), t.resolveThreadAction = i._createAction(t.Action.ResolveThread), t.resolveThreadResultAction = i._createAction(t.Action.ResolveThreadResult), t.subscribeAction = i._createAction(t.Action.Subscribe), t.subscribeResultAction = i._createAction(t.Action.SubscribeResult), t.unresolveThreadAction = i._createAction(t.Action.UnresolveThread), t.unresolveThreadResultAction = i._createAction(t.Action.UnresolveThreadResult), t.unsubscribeAction = i._createAction(t.Action.Unsubscribe), t.unsubscribeResultAction = i._createAction(t.Action.UnsubscribeResult);
    var n = (r = {}, r[t.Action.AddComment] = {
        endpoint: "add_comment",
        action: t.addCommentResultAction
    }, r[t.Action.CheckOnboardingStatus] = {
        endpoint: "check_onboarding_status",
        action: t.checkOnboardingStatusResultAction
    }, r[t.Action.CheckUpsellExperiment] = {
        endpoint: "check_upsell_experiment",
        action: t.checkUpsellExperimentResultAction
    }, r[t.Action.DeleteComment] = {
        endpoint: "delete_comment",
        action: t.deleteCommentResultAction
    }, r[t.Action.DisableCommenting] = {
        endpoint: "disable_commenting",
        action: t.disableCommentingResultAction
    }, r[t.Action.DismissUpsellExperiment] = {
        endpoint: "dismiss_upsell_experiment",
        action: t.dismissUpsellExperimentResultAction
    }, r[t.Action.DismissUpsellTooltip] = {
        endpoint: "dismiss_upsell_tooltip",
        action: t.dismissUpsellTooltipResultAction
    }, r[t.Action.EditComment] = {
        endpoint: "edit_comment",
        action: t.editCommentResultAction
    }, r[t.Action.EnableCommenting] = {
        endpoint: "enable_commenting",
        action: t.enableCommentingResultAction
    }, r[t.Action.GetFolderLiveUpdatingInfo] = {
        endpoint: "get_folder_live_updating_info",
        action: t.getFolderLiveUpdatingInfoResultAction
    }, r[t.Action.ListComments] = {
        endpoint: "list_comments",
        action: t.listCommentsResultAction
    }, r[t.Action.ListCommentsBatch] = {
        endpoint: "list_comments_batch",
        action: t.listCommentsBatchResultAction
    }, r[t.Action.LogEvent] = {
        endpoint: "log_event",
        action: t.logEventResultAction
    }, r[t.Action.LogLandingPageClick] = {
        endpoint: "log_landing_page_click",
        action: t.logLandingPageClickResultAction
    }, r[t.Action.LogPerfEvent] = {
        endpoint: "log_perf_event",
        action: t.logPerfEventResultAction
    }, r[t.Action.LoggedOutListComments] = {
        endpoint: "logged_out/list_comments",
        action: t.loggedOutListCommentsResultAction
    }, r[t.Action.MarkHasOnboarded] = {
        endpoint: "mark_has_onboarded",
        action: t.markHasOnboardedResultAction
    }, r[t.Action.MarkThreadRead] = {
        endpoint: "mark_thread_read",
        action: t.markThreadReadResultAction
    }, r[t.Action.MarkThreadUnread] = {
        endpoint: "mark_thread_unread",
        action: t.markThreadUnreadResultAction
    }, r[t.Action.ResolveThread] = {
        endpoint: "resolve_thread",
        action: t.resolveThreadResultAction
    }, r[t.Action.Subscribe] = {
        endpoint: "subscribe",
        action: t.subscribeResultAction
    }, r[t.Action.UnresolveThread] = {
        endpoint: "unresolve_thread",
        action: t.unresolveThreadResultAction
    }, r[t.Action.Unsubscribe] = {
        endpoint: "unsubscribe",
        action: t.unsubscribeResultAction
    }, r);
    t.middleware = i._createMiddleware(n)
}), define("modules/clean/api_v2/redux/files", ["require", "exports", "modules/clean/api_v2/redux/base_action"], function(e, t, i) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Action = {
            AddContentReferences: "@@apiv2_redux/files/add_content_references",
            AddContentReferencesResult: "@@apiv2_redux/files/add_content_references_result",
            AddContentReferencesToPath: "@@apiv2_redux/files/add_content_references_to_path",
            AddContentReferencesToPathResult: "@@apiv2_redux/files/add_content_references_to_path_result",
            AlphaGetMetadata: "@@apiv2_redux/files/alpha/get_metadata",
            AlphaGetMetadataResult: "@@apiv2_redux/files/alpha/get_metadata_result",
            Browse: "@@apiv2_redux/files/browse",
            BrowseResult: "@@apiv2_redux/files/browse_result",
            CopyV2: "@@apiv2_redux/files/copy_v2",
            CopyV2Result: "@@apiv2_redux/files/copy_v2_result",
            Copy: "@@apiv2_redux/files/copy",
            CopyResult: "@@apiv2_redux/files/copy_result",
            CopyBatchV2: "@@apiv2_redux/files/copy_batch_v2",
            CopyBatchV2Result: "@@apiv2_redux/files/copy_batch_v2_result",
            CopyBatch: "@@apiv2_redux/files/copy_batch",
            CopyBatchResult: "@@apiv2_redux/files/copy_batch_result",
            CopyBatchCheckV2: "@@apiv2_redux/files/copy_batch/check_v2",
            CopyBatchCheckV2Result: "@@apiv2_redux/files/copy_batch/check_v2_result",
            CopyBatchCheck: "@@apiv2_redux/files/copy_batch/check",
            CopyBatchCheckResult: "@@apiv2_redux/files/copy_batch/check_result",
            CopyBatchSync: "@@apiv2_redux/files/copy_batch_sync",
            CopyBatchSyncResult: "@@apiv2_redux/files/copy_batch_sync_result",
            CopyReferenceGet: "@@apiv2_redux/files/copy_reference/get",
            CopyReferenceGetResult: "@@apiv2_redux/files/copy_reference/get_result",
            CopyReferenceSave: "@@apiv2_redux/files/copy_reference/save",
            CopyReferenceSaveResult: "@@apiv2_redux/files/copy_reference/save_result",
            CreateFolderV2: "@@apiv2_redux/files/create_folder_v2",
            CreateFolderV2Result: "@@apiv2_redux/files/create_folder_v2_result",
            CreateFolder: "@@apiv2_redux/files/create_folder",
            CreateFolderResult: "@@apiv2_redux/files/create_folder_result",
            CreateFolderBatch: "@@apiv2_redux/files/create_folder_batch",
            CreateFolderBatchResult: "@@apiv2_redux/files/create_folder_batch_result",
            CreateFolderBatchCheck: "@@apiv2_redux/files/create_folder_batch/check",
            CreateFolderBatchCheckResult: "@@apiv2_redux/files/create_folder_batch/check_result",
            DeleteV2: "@@apiv2_redux/files/delete_v2",
            DeleteV2Result: "@@apiv2_redux/files/delete_v2_result",
            Delete: "@@apiv2_redux/files/delete",
            DeleteResult: "@@apiv2_redux/files/delete_result",
            DeleteBatch: "@@apiv2_redux/files/delete_batch",
            DeleteBatchResult: "@@apiv2_redux/files/delete_batch_result",
            DeleteBatchCheck: "@@apiv2_redux/files/delete_batch/check",
            DeleteBatchCheckResult: "@@apiv2_redux/files/delete_batch/check_result",
            DeleteBatchWithChangesetSync: "@@apiv2_redux/files/delete_batch_with_changeset_sync",
            DeleteBatchWithChangesetSyncResult: "@@apiv2_redux/files/delete_batch_with_changeset_sync_result",
            DeleteWithChangeset: "@@apiv2_redux/files/delete_with_changeset",
            DeleteWithChangesetResult: "@@apiv2_redux/files/delete_with_changeset_result",
            GetBrowseBoltData: "@@apiv2_redux/files/get_browse_bolt_data",
            GetBrowseBoltDataResult: "@@apiv2_redux/files/get_browse_bolt_data_result",
            GetContentReferencesBatch: "@@apiv2_redux/files/get_content_references_batch",
            GetContentReferencesBatchResult: "@@apiv2_redux/files/get_content_references_batch_result",
            GetContentReferencesInfo: "@@apiv2_redux/files/get_content_references_info",
            GetContentReferencesInfoResult: "@@apiv2_redux/files/get_content_references_info_result",
            GetDescriptionBatch: "@@apiv2_redux/files/get_description_batch",
            GetDescriptionBatchResult: "@@apiv2_redux/files/get_description_batch_result",
            GetFileContentMetadata: "@@apiv2_redux/files/get_file_content_metadata",
            GetFileContentMetadataResult: "@@apiv2_redux/files/get_file_content_metadata_result",
            GetFileLockBatch: "@@apiv2_redux/files/get_file_lock_batch",
            GetFileLockBatchResult: "@@apiv2_redux/files/get_file_lock_batch_result",
            GetMetadata: "@@apiv2_redux/files/get_metadata",
            GetMetadataResult: "@@apiv2_redux/files/get_metadata_result",
            GetMetadataBatch: "@@apiv2_redux/files/get_metadata_batch",
            GetMetadataBatchResult: "@@apiv2_redux/files/get_metadata_batch_result",
            GetPreviewableExtensions: "@@apiv2_redux/files/get_previewable_extensions",
            GetPreviewableExtensionsResult: "@@apiv2_redux/files/get_previewable_extensions_result",
            GetQuerySuggestions: "@@apiv2_redux/files/get_query_suggestions",
            GetQuerySuggestionsResult: "@@apiv2_redux/files/get_query_suggestions_result",
            GetTemporaryLink: "@@apiv2_redux/files/get_temporary_link",
            GetTemporaryLinkResult: "@@apiv2_redux/files/get_temporary_link_result",
            GetTemporaryUploadLink: "@@apiv2_redux/files/get_temporary_upload_link",
            GetTemporaryUploadLinkResult: "@@apiv2_redux/files/get_temporary_upload_link_result",
            GetUploadInfo: "@@apiv2_redux/files/get_upload_info",
            GetUploadInfoResult: "@@apiv2_redux/files/get_upload_info_result",
            ListFolder: "@@apiv2_redux/files/list_folder",
            ListFolderResult: "@@apiv2_redux/files/list_folder_result",
            ListFolderContinue: "@@apiv2_redux/files/list_folder/continue",
            ListFolderContinueResult: "@@apiv2_redux/files/list_folder/continue_result",
            ListFolderGetLatestCursor: "@@apiv2_redux/files/list_folder/get_latest_cursor",
            ListFolderGetLatestCursorResult: "@@apiv2_redux/files/list_folder/get_latest_cursor_result",
            ListFolderGetMountInfo: "@@apiv2_redux/files/list_folder/get_mount_info",
            ListFolderGetMountInfoResult: "@@apiv2_redux/files/list_folder/get_mount_info_result",
            ListRevisions: "@@apiv2_redux/files/list_revisions",
            ListRevisionsResult: "@@apiv2_redux/files/list_revisions_result",
            ListSubfolders: "@@apiv2_redux/files/list_subfolders",
            ListSubfoldersResult: "@@apiv2_redux/files/list_subfolders_result",
            LockFileBatch: "@@apiv2_redux/files/lock_file_batch",
            LockFileBatchResult: "@@apiv2_redux/files/lock_file_batch_result",
            MediaTranscode: "@@apiv2_redux/files/media_transcode",
            MediaTranscodeResult: "@@apiv2_redux/files/media_transcode_result",
            MoveV2: "@@apiv2_redux/files/move_v2",
            MoveV2Result: "@@apiv2_redux/files/move_v2_result",
            Move: "@@apiv2_redux/files/move",
            MoveResult: "@@apiv2_redux/files/move_result",
            MoveBatchV2: "@@apiv2_redux/files/move_batch_v2",
            MoveBatchV2Result: "@@apiv2_redux/files/move_batch_v2_result",
            MoveBatch: "@@apiv2_redux/files/move_batch",
            MoveBatchResult: "@@apiv2_redux/files/move_batch_result",
            MoveBatchCheckV2: "@@apiv2_redux/files/move_batch/check_v2",
            MoveBatchCheckV2Result: "@@apiv2_redux/files/move_batch/check_v2_result",
            MoveBatchCheck: "@@apiv2_redux/files/move_batch/check",
            MoveBatchCheckResult: "@@apiv2_redux/files/move_batch/check_result",
            MoveBatchSync: "@@apiv2_redux/files/move_batch_sync",
            MoveBatchSyncResult: "@@apiv2_redux/files/move_batch_sync_result",
            PermanentlyDelete: "@@apiv2_redux/files/permanently_delete",
            PermanentlyDeleteResult: "@@apiv2_redux/files/permanently_delete_result",
            PropertiesAdd: "@@apiv2_redux/files/properties/add",
            PropertiesAddResult: "@@apiv2_redux/files/properties/add_result",
            PropertiesOverwrite: "@@apiv2_redux/files/properties/overwrite",
            PropertiesOverwriteResult: "@@apiv2_redux/files/properties/overwrite_result",
            PropertiesRemove: "@@apiv2_redux/files/properties/remove",
            PropertiesRemoveResult: "@@apiv2_redux/files/properties/remove_result",
            PropertiesTemplateGet: "@@apiv2_redux/files/properties/template/get",
            PropertiesTemplateGetResult: "@@apiv2_redux/files/properties/template/get_result",
            PropertiesTemplateList: "@@apiv2_redux/files/properties/template/list",
            PropertiesTemplateListResult: "@@apiv2_redux/files/properties/template/list_result",
            PropertiesUpdate: "@@apiv2_redux/files/properties/update",
            PropertiesUpdateResult: "@@apiv2_redux/files/properties/update_result",
            RemoveContentReferences: "@@apiv2_redux/files/remove_content_references",
            RemoveContentReferencesResult: "@@apiv2_redux/files/remove_content_references_result",
            RequestUnlockFileBatch: "@@apiv2_redux/files/request_unlock_file_batch",
            RequestUnlockFileBatchResult: "@@apiv2_redux/files/request_unlock_file_batch_result",
            Restore: "@@apiv2_redux/files/restore",
            RestoreResult: "@@apiv2_redux/files/restore_result",
            RestorePathBatchSync: "@@apiv2_redux/files/restore_path_batch_sync",
            RestorePathBatchSyncResult: "@@apiv2_redux/files/restore_path_batch_sync_result",
            SaveUrl: "@@apiv2_redux/files/save_url",
            SaveUrlResult: "@@apiv2_redux/files/save_url_result",
            SaveUrlCheckJobStatus: "@@apiv2_redux/files/save_url/check_job_status",
            SaveUrlCheckJobStatusResult: "@@apiv2_redux/files/save_url/check_job_status_result",
            Search: "@@apiv2_redux/files/search",
            SearchResult: "@@apiv2_redux/files/search_result",
            SearchV2: "@@apiv2_redux/files/search_v2",
            SearchV2Result: "@@apiv2_redux/files/search_v2_result",
            SearchContinueV2: "@@apiv2_redux/files/search/continue_v2",
            SearchContinueV2Result: "@@apiv2_redux/files/search/continue_v2_result",
            SearchEx: "@@apiv2_redux/files/search_ex",
            SearchExResult: "@@apiv2_redux/files/search_ex_result",
            SearchImagePrompt: "@@apiv2_redux/files/search_image_prompt",
            SearchImagePromptResult: "@@apiv2_redux/files/search_image_prompt_result",
            SetDescription: "@@apiv2_redux/files/set_description",
            SetDescriptionResult: "@@apiv2_redux/files/set_description_result",
            TreeViewFolders: "@@apiv2_redux/files/tree_view_folders",
            TreeViewFoldersResult: "@@apiv2_redux/files/tree_view_folders_result",
            UndoBatch: "@@apiv2_redux/files/undo_batch",
            UndoBatchResult: "@@apiv2_redux/files/undo_batch_result",
            UnlockFileBatch: "@@apiv2_redux/files/unlock_file_batch",
            UnlockFileBatchResult: "@@apiv2_redux/files/unlock_file_batch_result",
            UploadSessionCheckFinishBatchJobStatus: "@@apiv2_redux/files/upload_session/check_finish_batch_job_status",
            UploadSessionCheckFinishBatchJobStatusResult: "@@apiv2_redux/files/upload_session/check_finish_batch_job_status_result",
            UploadSessionFinishBatch: "@@apiv2_redux/files/upload_session/finish_batch",
            UploadSessionFinishBatchResult: "@@apiv2_redux/files/upload_session/finish_batch_result",
            UploadSessionFinishBatchCheck: "@@apiv2_redux/files/upload_session/finish_batch/check",
            UploadSessionFinishBatchCheckResult: "@@apiv2_redux/files/upload_session/finish_batch/check_result",
            UploadSessionFinishBatchSync: "@@apiv2_redux/files/upload_session/finish_batch_sync",
            UploadSessionFinishBatchSyncResult: "@@apiv2_redux/files/upload_session/finish_batch_sync_result",
            UploadSessionFinishProcessedCheck: "@@apiv2_redux/files/upload_session/finish_processed/check",
            UploadSessionFinishProcessedCheckResult: "@@apiv2_redux/files/upload_session/finish_processed/check_result",
            ValidateUpload: "@@apiv2_redux/files/validate_upload",
            ValidateUploadResult: "@@apiv2_redux/files/validate_upload_result"
        }, t.addContentReferencesAction = i._createAction(t.Action.AddContentReferences), t.addContentReferencesResultAction = i._createAction(t.Action.AddContentReferencesResult), t.addContentReferencesToPathAction = i._createAction(t.Action.AddContentReferencesToPath), t.addContentReferencesToPathResultAction = i._createAction(t.Action.AddContentReferencesToPathResult), t.alphaGetMetadataAction = i._createAction(t.Action.AlphaGetMetadata), t.alphaGetMetadataResultAction = i._createAction(t.Action.AlphaGetMetadataResult), t.browseAction = i._createAction(t.Action.Browse), t.browseResultAction = i._createAction(t.Action.BrowseResult), t.copyV2Action = i._createAction(t.Action.CopyV2), t.copyV2ResultAction = i._createAction(t.Action.CopyV2Result), t.copyAction = i._createAction(t.Action.Copy), t.copyResultAction = i._createAction(t.Action.CopyResult), t.copyBatchV2Action = i._createAction(t.Action.CopyBatchV2), t.copyBatchV2ResultAction = i._createAction(t.Action.CopyBatchV2Result), t.copyBatchAction = i._createAction(t.Action.CopyBatch), t.copyBatchResultAction = i._createAction(t.Action.CopyBatchResult), t.copyBatchCheckV2Action = i._createAction(t.Action.CopyBatchCheckV2), t.copyBatchCheckV2ResultAction = i._createAction(t.Action.CopyBatchCheckV2Result), t.copyBatchCheckAction = i._createAction(t.Action.CopyBatchCheck), t.copyBatchCheckResultAction = i._createAction(t.Action.CopyBatchCheckResult), t.copyBatchSyncAction = i._createAction(t.Action.CopyBatchSync), t.copyBatchSyncResultAction = i._createAction(t.Action.CopyBatchSyncResult), t.copyReferenceGetAction = i._createAction(t.Action.CopyReferenceGet), t.copyReferenceGetResultAction = i._createAction(t.Action.CopyReferenceGetResult), t.copyReferenceSaveAction = i._createAction(t.Action.CopyReferenceSave), t.copyReferenceSaveResultAction = i._createAction(t.Action.CopyReferenceSaveResult), t.createFolderV2Action = i._createAction(t.Action.CreateFolderV2), t.createFolderV2ResultAction = i._createAction(t.Action.CreateFolderV2Result), t.createFolderAction = i._createAction(t.Action.CreateFolder), t.createFolderResultAction = i._createAction(t.Action.CreateFolderResult), t.createFolderBatchAction = i._createAction(t.Action.CreateFolderBatch), t.createFolderBatchResultAction = i._createAction(t.Action.CreateFolderBatchResult), t.createFolderBatchCheckAction = i._createAction(t.Action.CreateFolderBatchCheck), t.createFolderBatchCheckResultAction = i._createAction(t.Action.CreateFolderBatchCheckResult), t.deleteV2Action = i._createAction(t.Action.DeleteV2), t.deleteV2ResultAction = i._createAction(t.Action.DeleteV2Result), t.deleteAction = i._createAction(t.Action.Delete), t.deleteResultAction = i._createAction(t.Action.DeleteResult), t.deleteBatchAction = i._createAction(t.Action.DeleteBatch), t.deleteBatchResultAction = i._createAction(t.Action.DeleteBatchResult), t.deleteBatchCheckAction = i._createAction(t.Action.DeleteBatchCheck), t.deleteBatchCheckResultAction = i._createAction(t.Action.DeleteBatchCheckResult), t.deleteBatchWithChangesetSyncAction = i._createAction(t.Action.DeleteBatchWithChangesetSync), t.deleteBatchWithChangesetSyncResultAction = i._createAction(t.Action.DeleteBatchWithChangesetSyncResult), t.deleteWithChangesetAction = i._createAction(t.Action.DeleteWithChangeset), t.deleteWithChangesetResultAction = i._createAction(t.Action.DeleteWithChangesetResult), t.getBrowseBoltDataAction = i._createAction(t.Action.GetBrowseBoltData), t.getBrowseBoltDataResultAction = i._createAction(t.Action.GetBrowseBoltDataResult), t.getContentReferencesBatchAction = i._createAction(t.Action.GetContentReferencesBatch), t.getContentReferencesBatchResultAction = i._createAction(t.Action.GetContentReferencesBatchResult), t.getContentReferencesInfoAction = i._createAction(t.Action.GetContentReferencesInfo), t.getContentReferencesInfoResultAction = i._createAction(t.Action.GetContentReferencesInfoResult), t.getDescriptionBatchAction = i._createAction(t.Action.GetDescriptionBatch), t.getDescriptionBatchResultAction = i._createAction(t.Action.GetDescriptionBatchResult), t.getFileContentMetadataAction = i._createAction(t.Action.GetFileContentMetadata), t.getFileContentMetadataResultAction = i._createAction(t.Action.GetFileContentMetadataResult), t.getFileLockBatchAction = i._createAction(t.Action.GetFileLockBatch), t.getFileLockBatchResultAction = i._createAction(t.Action.GetFileLockBatchResult), t.getMetadataAction = i._createAction(t.Action.GetMetadata), t.getMetadataResultAction = i._createAction(t.Action.GetMetadataResult), t.getMetadataBatchAction = i._createAction(t.Action.GetMetadataBatch), t.getMetadataBatchResultAction = i._createAction(t.Action.GetMetadataBatchResult), t.getPreviewableExtensionsAction = i._createAction(t.Action.GetPreviewableExtensions), t.getPreviewableExtensionsResultAction = i._createAction(t.Action.GetPreviewableExtensionsResult), t.getQuerySuggestionsAction = i._createAction(t.Action.GetQuerySuggestions), t.getQuerySuggestionsResultAction = i._createAction(t.Action.GetQuerySuggestionsResult), t.getTemporaryLinkAction = i._createAction(t.Action.GetTemporaryLink), t.getTemporaryLinkResultAction = i._createAction(t.Action.GetTemporaryLinkResult), t.getTemporaryUploadLinkAction = i._createAction(t.Action.GetTemporaryUploadLink), t.getTemporaryUploadLinkResultAction = i._createAction(t.Action.GetTemporaryUploadLinkResult), t.getUploadInfoAction = i._createAction(t.Action.GetUploadInfo), t.getUploadInfoResultAction = i._createAction(t.Action.GetUploadInfoResult), t.listFolderAction = i._createAction(t.Action.ListFolder), t.listFolderResultAction = i._createAction(t.Action.ListFolderResult), t.listFolderContinueAction = i._createAction(t.Action.ListFolderContinue), t.listFolderContinueResultAction = i._createAction(t.Action.ListFolderContinueResult), t.listFolderGetLatestCursorAction = i._createAction(t.Action.ListFolderGetLatestCursor), t.listFolderGetLatestCursorResultAction = i._createAction(t.Action.ListFolderGetLatestCursorResult), t.listFolderGetMountInfoAction = i._createAction(t.Action.ListFolderGetMountInfo), t.listFolderGetMountInfoResultAction = i._createAction(t.Action.ListFolderGetMountInfoResult), t.listRevisionsAction = i._createAction(t.Action.ListRevisions), t.listRevisionsResultAction = i._createAction(t.Action.ListRevisionsResult), t.listSubfoldersAction = i._createAction(t.Action.ListSubfolders), t.listSubfoldersResultAction = i._createAction(t.Action.ListSubfoldersResult), t.lockFileBatchAction = i._createAction(t.Action.LockFileBatch), t.lockFileBatchResultAction = i._createAction(t.Action.LockFileBatchResult), t.mediaTranscodeAction = i._createAction(t.Action.MediaTranscode), t.mediaTranscodeResultAction = i._createAction(t.Action.MediaTranscodeResult), t.moveV2Action = i._createAction(t.Action.MoveV2), t.moveV2ResultAction = i._createAction(t.Action.MoveV2Result), t.moveAction = i._createAction(t.Action.Move), t.moveResultAction = i._createAction(t.Action.MoveResult), t.moveBatchV2Action = i._createAction(t.Action.MoveBatchV2), t.moveBatchV2ResultAction = i._createAction(t.Action.MoveBatchV2Result), t.moveBatchAction = i._createAction(t.Action.MoveBatch), t.moveBatchResultAction = i._createAction(t.Action.MoveBatchResult), t.moveBatchCheckV2Action = i._createAction(t.Action.MoveBatchCheckV2), t.moveBatchCheckV2ResultAction = i._createAction(t.Action.MoveBatchCheckV2Result), t.moveBatchCheckAction = i._createAction(t.Action.MoveBatchCheck), t.moveBatchCheckResultAction = i._createAction(t.Action.MoveBatchCheckResult), t.moveBatchSyncAction = i._createAction(t.Action.MoveBatchSync), t.moveBatchSyncResultAction = i._createAction(t.Action.MoveBatchSyncResult), t.permanentlyDeleteAction = i._createAction(t.Action.PermanentlyDelete), t.permanentlyDeleteResultAction = i._createAction(t.Action.PermanentlyDeleteResult), t.propertiesAddAction = i._createAction(t.Action.PropertiesAdd), t.propertiesAddResultAction = i._createAction(t.Action.PropertiesAddResult), t.propertiesOverwriteAction = i._createAction(t.Action.PropertiesOverwrite), t.propertiesOverwriteResultAction = i._createAction(t.Action.PropertiesOverwriteResult), t.propertiesRemoveAction = i._createAction(t.Action.PropertiesRemove), t.propertiesRemoveResultAction = i._createAction(t.Action.PropertiesRemoveResult), t.propertiesTemplateGetAction = i._createAction(t.Action.PropertiesTemplateGet), t.propertiesTemplateGetResultAction = i._createAction(t.Action.PropertiesTemplateGetResult), t.propertiesTemplateListAction = i._createAction(t.Action.PropertiesTemplateList), t.propertiesTemplateListResultAction = i._createAction(t.Action.PropertiesTemplateListResult), t.propertiesUpdateAction = i._createAction(t.Action.PropertiesUpdate), t.propertiesUpdateResultAction = i._createAction(t.Action.PropertiesUpdateResult), t.removeContentReferencesAction = i._createAction(t.Action.RemoveContentReferences), t.removeContentReferencesResultAction = i._createAction(t.Action.RemoveContentReferencesResult), t.requestUnlockFileBatchAction = i._createAction(t.Action.RequestUnlockFileBatch),
        t.requestUnlockFileBatchResultAction = i._createAction(t.Action.RequestUnlockFileBatchResult), t.restoreAction = i._createAction(t.Action.Restore), t.restoreResultAction = i._createAction(t.Action.RestoreResult), t.restorePathBatchSyncAction = i._createAction(t.Action.RestorePathBatchSync), t.restorePathBatchSyncResultAction = i._createAction(t.Action.RestorePathBatchSyncResult), t.saveUrlAction = i._createAction(t.Action.SaveUrl), t.saveUrlResultAction = i._createAction(t.Action.SaveUrlResult), t.saveUrlCheckJobStatusAction = i._createAction(t.Action.SaveUrlCheckJobStatus), t.saveUrlCheckJobStatusResultAction = i._createAction(t.Action.SaveUrlCheckJobStatusResult), t.searchAction = i._createAction(t.Action.Search), t.searchResultAction = i._createAction(t.Action.SearchResult), t.searchV2Action = i._createAction(t.Action.SearchV2), t.searchV2ResultAction = i._createAction(t.Action.SearchV2Result), t.searchContinueV2Action = i._createAction(t.Action.SearchContinueV2), t.searchContinueV2ResultAction = i._createAction(t.Action.SearchContinueV2Result), t.searchExAction = i._createAction(t.Action.SearchEx), t.searchExResultAction = i._createAction(t.Action.SearchExResult), t.searchImagePromptAction = i._createAction(t.Action.SearchImagePrompt), t.searchImagePromptResultAction = i._createAction(t.Action.SearchImagePromptResult), t.setDescriptionAction = i._createAction(t.Action.SetDescription), t.setDescriptionResultAction = i._createAction(t.Action.SetDescriptionResult), t.treeViewFoldersAction = i._createAction(t.Action.TreeViewFolders), t.treeViewFoldersResultAction = i._createAction(t.Action.TreeViewFoldersResult), t.undoBatchAction = i._createAction(t.Action.UndoBatch), t.undoBatchResultAction = i._createAction(t.Action.UndoBatchResult), t.unlockFileBatchAction = i._createAction(t.Action.UnlockFileBatch), t.unlockFileBatchResultAction = i._createAction(t.Action.UnlockFileBatchResult), t.uploadSessionCheckFinishBatchJobStatusAction = i._createAction(t.Action.UploadSessionCheckFinishBatchJobStatus), t.uploadSessionCheckFinishBatchJobStatusResultAction = i._createAction(t.Action.UploadSessionCheckFinishBatchJobStatusResult), t.uploadSessionFinishBatchAction = i._createAction(t.Action.UploadSessionFinishBatch), t.uploadSessionFinishBatchResultAction = i._createAction(t.Action.UploadSessionFinishBatchResult), t.uploadSessionFinishBatchCheckAction = i._createAction(t.Action.UploadSessionFinishBatchCheck), t.uploadSessionFinishBatchCheckResultAction = i._createAction(t.Action.UploadSessionFinishBatchCheckResult), t.uploadSessionFinishBatchSyncAction = i._createAction(t.Action.UploadSessionFinishBatchSync), t.uploadSessionFinishBatchSyncResultAction = i._createAction(t.Action.UploadSessionFinishBatchSyncResult), t.uploadSessionFinishProcessedCheckAction = i._createAction(t.Action.UploadSessionFinishProcessedCheck), t.uploadSessionFinishProcessedCheckResultAction = i._createAction(t.Action.UploadSessionFinishProcessedCheckResult), t.validateUploadAction = i._createAction(t.Action.ValidateUpload), t.validateUploadResultAction = i._createAction(t.Action.ValidateUploadResult);
    var n = (r = {}, r[t.Action.AddContentReferences] = {
        endpoint: "add_content_references",
        action: t.addContentReferencesResultAction
    }, r[t.Action.AddContentReferencesToPath] = {
        endpoint: "add_content_references_to_path",
        action: t.addContentReferencesToPathResultAction
    }, r[t.Action.AlphaGetMetadata] = {
        endpoint: "alpha/get_metadata",
        action: t.alphaGetMetadataResultAction
    }, r[t.Action.Browse] = {
        endpoint: "browse",
        action: t.browseResultAction
    }, r[t.Action.CopyV2] = {
        endpoint: "copy_v2",
        action: t.copyV2ResultAction
    }, r[t.Action.Copy] = {
        endpoint: "copy",
        action: t.copyResultAction
    }, r[t.Action.CopyBatchV2] = {
        endpoint: "copy_batch_v2",
        action: t.copyBatchV2ResultAction
    }, r[t.Action.CopyBatch] = {
        endpoint: "copy_batch",
        action: t.copyBatchResultAction
    }, r[t.Action.CopyBatchCheckV2] = {
        endpoint: "copy_batch/check_v2",
        action: t.copyBatchCheckV2ResultAction
    }, r[t.Action.CopyBatchCheck] = {
        endpoint: "copy_batch/check",
        action: t.copyBatchCheckResultAction
    }, r[t.Action.CopyBatchSync] = {
        endpoint: "copy_batch_sync",
        action: t.copyBatchSyncResultAction
    }, r[t.Action.CopyReferenceGet] = {
        endpoint: "copy_reference/get",
        action: t.copyReferenceGetResultAction
    }, r[t.Action.CopyReferenceSave] = {
        endpoint: "copy_reference/save",
        action: t.copyReferenceSaveResultAction
    }, r[t.Action.CreateFolderV2] = {
        endpoint: "create_folder_v2",
        action: t.createFolderV2ResultAction
    }, r[t.Action.CreateFolder] = {
        endpoint: "create_folder",
        action: t.createFolderResultAction
    }, r[t.Action.CreateFolderBatch] = {
        endpoint: "create_folder_batch",
        action: t.createFolderBatchResultAction
    }, r[t.Action.CreateFolderBatchCheck] = {
        endpoint: "create_folder_batch/check",
        action: t.createFolderBatchCheckResultAction
    }, r[t.Action.DeleteV2] = {
        endpoint: "delete_v2",
        action: t.deleteV2ResultAction
    }, r[t.Action.Delete] = {
        endpoint: "delete",
        action: t.deleteResultAction
    }, r[t.Action.DeleteBatch] = {
        endpoint: "delete_batch",
        action: t.deleteBatchResultAction
    }, r[t.Action.DeleteBatchCheck] = {
        endpoint: "delete_batch/check",
        action: t.deleteBatchCheckResultAction
    }, r[t.Action.DeleteBatchWithChangesetSync] = {
        endpoint: "delete_batch_with_changeset_sync",
        action: t.deleteBatchWithChangesetSyncResultAction
    }, r[t.Action.DeleteWithChangeset] = {
        endpoint: "delete_with_changeset",
        action: t.deleteWithChangesetResultAction
    }, r[t.Action.GetBrowseBoltData] = {
        endpoint: "get_browse_bolt_data",
        action: t.getBrowseBoltDataResultAction
    }, r[t.Action.GetContentReferencesBatch] = {
        endpoint: "get_content_references_batch",
        action: t.getContentReferencesBatchResultAction
    }, r[t.Action.GetContentReferencesInfo] = {
        endpoint: "get_content_references_info",
        action: t.getContentReferencesInfoResultAction
    }, r[t.Action.GetDescriptionBatch] = {
        endpoint: "get_description_batch",
        action: t.getDescriptionBatchResultAction
    }, r[t.Action.GetFileContentMetadata] = {
        endpoint: "get_file_content_metadata",
        action: t.getFileContentMetadataResultAction
    }, r[t.Action.GetFileLockBatch] = {
        endpoint: "get_file_lock_batch",
        action: t.getFileLockBatchResultAction
    }, r[t.Action.GetMetadata] = {
        endpoint: "get_metadata",
        action: t.getMetadataResultAction
    }, r[t.Action.GetMetadataBatch] = {
        endpoint: "get_metadata_batch",
        action: t.getMetadataBatchResultAction
    }, r[t.Action.GetPreviewableExtensions] = {
        endpoint: "get_previewable_extensions",
        action: t.getPreviewableExtensionsResultAction
    }, r[t.Action.GetQuerySuggestions] = {
        endpoint: "get_query_suggestions",
        action: t.getQuerySuggestionsResultAction
    }, r[t.Action.GetTemporaryLink] = {
        endpoint: "get_temporary_link",
        action: t.getTemporaryLinkResultAction
    }, r[t.Action.GetTemporaryUploadLink] = {
        endpoint: "get_temporary_upload_link",
        action: t.getTemporaryUploadLinkResultAction
    }, r[t.Action.GetUploadInfo] = {
        endpoint: "get_upload_info",
        action: t.getUploadInfoResultAction
    }, r[t.Action.ListFolder] = {
        endpoint: "list_folder",
        action: t.listFolderResultAction
    }, r[t.Action.ListFolderContinue] = {
        endpoint: "list_folder/continue",
        action: t.listFolderContinueResultAction
    }, r[t.Action.ListFolderGetLatestCursor] = {
        endpoint: "list_folder/get_latest_cursor",
        action: t.listFolderGetLatestCursorResultAction
    }, r[t.Action.ListFolderGetMountInfo] = {
        endpoint: "list_folder/get_mount_info",
        action: t.listFolderGetMountInfoResultAction
    }, r[t.Action.ListRevisions] = {
        endpoint: "list_revisions",
        action: t.listRevisionsResultAction
    }, r[t.Action.ListSubfolders] = {
        endpoint: "list_subfolders",
        action: t.listSubfoldersResultAction
    }, r[t.Action.LockFileBatch] = {
        endpoint: "lock_file_batch",
        action: t.lockFileBatchResultAction
    }, r[t.Action.MediaTranscode] = {
        endpoint: "media_transcode",
        action: t.mediaTranscodeResultAction
    }, r[t.Action.MoveV2] = {
        endpoint: "move_v2",
        action: t.moveV2ResultAction
    }, r[t.Action.Move] = {
        endpoint: "move",
        action: t.moveResultAction
    }, r[t.Action.MoveBatchV2] = {
        endpoint: "move_batch_v2",
        action: t.moveBatchV2ResultAction
    }, r[t.Action.MoveBatch] = {
        endpoint: "move_batch",
        action: t.moveBatchResultAction
    }, r[t.Action.MoveBatchCheckV2] = {
        endpoint: "move_batch/check_v2",
        action: t.moveBatchCheckV2ResultAction
    }, r[t.Action.MoveBatchCheck] = {
        endpoint: "move_batch/check",
        action: t.moveBatchCheckResultAction
    }, r[t.Action.MoveBatchSync] = {
        endpoint: "move_batch_sync",
        action: t.moveBatchSyncResultAction
    }, r[t.Action.PermanentlyDelete] = {
        endpoint: "permanently_delete",
        action: t.permanentlyDeleteResultAction
    }, r[t.Action.PropertiesAdd] = {
        endpoint: "properties/add",
        action: t.propertiesAddResultAction
    }, r[t.Action.PropertiesOverwrite] = {
        endpoint: "properties/overwrite",
        action: t.propertiesOverwriteResultAction
    }, r[t.Action.PropertiesRemove] = {
        endpoint: "properties/remove",
        action: t.propertiesRemoveResultAction
    }, r[t.Action.PropertiesTemplateGet] = {
        endpoint: "properties/template/get",
        action: t.propertiesTemplateGetResultAction
    }, r[t.Action.PropertiesTemplateList] = {
        endpoint: "properties/template/list",
        action: t.propertiesTemplateListResultAction
    }, r[t.Action.PropertiesUpdate] = {
        endpoint: "properties/update",
        action: t.propertiesUpdateResultAction
    }, r[t.Action.RemoveContentReferences] = {
        endpoint: "remove_content_references",
        action: t.removeContentReferencesResultAction
    }, r[t.Action.RequestUnlockFileBatch] = {
        endpoint: "request_unlock_file_batch",
        action: t.requestUnlockFileBatchResultAction
    }, r[t.Action.Restore] = {
        endpoint: "restore",
        action: t.restoreResultAction
    }, r[t.Action.RestorePathBatchSync] = {
        endpoint: "restore_path_batch_sync",
        action: t.restorePathBatchSyncResultAction
    }, r[t.Action.SaveUrl] = {
        endpoint: "save_url",
        action: t.saveUrlResultAction
    }, r[t.Action.SaveUrlCheckJobStatus] = {
        endpoint: "save_url/check_job_status",
        action: t.saveUrlCheckJobStatusResultAction
    }, r[t.Action.Search] = {
        endpoint: "search",
        action: t.searchResultAction
    }, r[t.Action.SearchV2] = {
        endpoint: "search_v2",
        action: t.searchV2ResultAction
    }, r[t.Action.SearchContinueV2] = {
        endpoint: "search/continue_v2",
        action: t.searchContinueV2ResultAction
    }, r[t.Action.SearchEx] = {
        endpoint: "search_ex",
        action: t.searchExResultAction
    }, r[t.Action.SearchImagePrompt] = {
        endpoint: "search_image_prompt",
        action: t.searchImagePromptResultAction
    }, r[t.Action.SetDescription] = {
        endpoint: "set_description",
        action: t.setDescriptionResultAction
    }, r[t.Action.TreeViewFolders] = {
        endpoint: "tree_view_folders",
        action: t.treeViewFoldersResultAction
    }, r[t.Action.UndoBatch] = {
        endpoint: "undo_batch",
        action: t.undoBatchResultAction
    }, r[t.Action.UnlockFileBatch] = {
        endpoint: "unlock_file_batch",
        action: t.unlockFileBatchResultAction
    }, r[t.Action.UploadSessionCheckFinishBatchJobStatus] = {
        endpoint: "upload_session/check_finish_batch_job_status",
        action: t.uploadSessionCheckFinishBatchJobStatusResultAction
    }, r[t.Action.UploadSessionFinishBatch] = {
        endpoint: "upload_session/finish_batch",
        action: t.uploadSessionFinishBatchResultAction
    }, r[t.Action.UploadSessionFinishBatchCheck] = {
        endpoint: "upload_session/finish_batch/check",
        action: t.uploadSessionFinishBatchCheckResultAction
    }, r[t.Action.UploadSessionFinishBatchSync] = {
        endpoint: "upload_session/finish_batch_sync",
        action: t.uploadSessionFinishBatchSyncResultAction
    }, r[t.Action.UploadSessionFinishProcessedCheck] = {
        endpoint: "upload_session/finish_processed/check",
        action: t.uploadSessionFinishProcessedCheckResultAction
    }, r[t.Action.ValidateUpload] = {
        endpoint: "validate_upload",
        action: t.validateUploadResultAction
    }, r);
    t.middleware = i._createMiddleware(n)
}), define("modules/clean/api_v2/redux/previews", ["require", "exports", "modules/clean/api_v2/redux/base_action"], function(e, t, i) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Action = {
        GetArchiveFiles: "@@apiv2_redux/previews/get_archive_files",
        GetArchiveFilesResult: "@@apiv2_redux/previews/get_archive_files_result",
        GetPreviewDataBatch: "@@apiv2_redux/previews/get_preview_data_batch",
        GetPreviewDataBatchResult: "@@apiv2_redux/previews/get_preview_data_batch_result",
        GetPreviewDataByFileIdsBatch: "@@apiv2_redux/previews/get_preview_data_by_file_ids_batch",
        GetPreviewDataByFileIdsBatchResult: "@@apiv2_redux/previews/get_preview_data_by_file_ids_batch_result",
        GetPreviewDataBySpecsBatch: "@@apiv2_redux/previews/get_preview_data_by_specs_batch",
        GetPreviewDataBySpecsBatchResult: "@@apiv2_redux/previews/get_preview_data_by_specs_batch_result",
        LoggedOutGetArchiveFiles: "@@apiv2_redux/previews/logged_out/get_archive_files",
        LoggedOutGetArchiveFilesResult: "@@apiv2_redux/previews/logged_out/get_archive_files_result"
    }, t.getArchiveFilesAction = i._createAction(t.Action.GetArchiveFiles), t.getArchiveFilesResultAction = i._createAction(t.Action.GetArchiveFilesResult), t.getPreviewDataBatchAction = i._createAction(t.Action.GetPreviewDataBatch), t.getPreviewDataBatchResultAction = i._createAction(t.Action.GetPreviewDataBatchResult), t.getPreviewDataByFileIdsBatchAction = i._createAction(t.Action.GetPreviewDataByFileIdsBatch), t.getPreviewDataByFileIdsBatchResultAction = i._createAction(t.Action.GetPreviewDataByFileIdsBatchResult), t.getPreviewDataBySpecsBatchAction = i._createAction(t.Action.GetPreviewDataBySpecsBatch), t.getPreviewDataBySpecsBatchResultAction = i._createAction(t.Action.GetPreviewDataBySpecsBatchResult), t.loggedOutGetArchiveFilesAction = i._createAction(t.Action.LoggedOutGetArchiveFiles), t.loggedOutGetArchiveFilesResultAction = i._createAction(t.Action.LoggedOutGetArchiveFilesResult);
    var n = (r = {}, r[t.Action.GetArchiveFiles] = {
        endpoint: "get_archive_files",
        action: t.getArchiveFilesResultAction
    }, r[t.Action.GetPreviewDataBatch] = {
        endpoint: "get_preview_data_batch",
        action: t.getPreviewDataBatchResultAction
    }, r[t.Action.GetPreviewDataByFileIdsBatch] = {
        endpoint: "get_preview_data_by_file_ids_batch",
        action: t.getPreviewDataByFileIdsBatchResultAction
    }, r[t.Action.GetPreviewDataBySpecsBatch] = {
        endpoint: "get_preview_data_by_specs_batch",
        action: t.getPreviewDataBySpecsBatchResultAction
    }, r[t.Action.LoggedOutGetArchiveFiles] = {
        endpoint: "logged_out/get_archive_files",
        action: t.loggedOutGetArchiveFilesResultAction
    }, r);
    t.middleware = i._createMiddleware(n)
}), define("modules/clean/api_v2/redux/users", ["require", "exports", "modules/clean/api_v2/redux/base_action"], function(e, t, i) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Action = {
        FeaturesGetValues: "@@apiv2_redux/users/features/get_values",
        FeaturesGetValuesResult: "@@apiv2_redux/users/features/get_values_result",
        GetAccount: "@@apiv2_redux/users/get_account",
        GetAccountResult: "@@apiv2_redux/users/get_account_result",
        GetAccountBatch: "@@apiv2_redux/users/get_account_batch",
        GetAccountBatchResult: "@@apiv2_redux/users/get_account_batch_result",
        GetCurrentAccount: "@@apiv2_redux/users/get_current_account",
        GetCurrentAccountResult: "@@apiv2_redux/users/get_current_account_result",
        GetFileModifierAccount: "@@apiv2_redux/users/get_file_modifier_account",
        GetFileModifierAccountResult: "@@apiv2_redux/users/get_file_modifier_account_result",
        GetMobileClientSettings: "@@apiv2_redux/users/get_mobile_client_settings",
        GetMobileClientSettingsResult: "@@apiv2_redux/users/get_mobile_client_settings_result",
        GetPlanInfo: "@@apiv2_redux/users/get_plan_info",
        GetPlanInfoResult: "@@apiv2_redux/users/get_plan_info_result",
        GetRootInfo: "@@apiv2_redux/users/get_root_info",
        GetRootInfoResult: "@@apiv2_redux/users/get_root_info_result",
        GetSharingPrefs: "@@apiv2_redux/users/get_sharing_prefs",
        GetSharingPrefsResult: "@@apiv2_redux/users/get_sharing_prefs_result",
        GetSpaceUsage: "@@apiv2_redux/users/get_space_usage",
        GetSpaceUsageResult: "@@apiv2_redux/users/get_space_usage_result",
        GetUserUiInfo: "@@apiv2_redux/users/get_user_ui_info",
        GetUserUiInfoResult: "@@apiv2_redux/users/get_user_ui_info_result",
        NeedsScaleMitigation: "@@apiv2_redux/users/needs_scale_mitigation",
        NeedsScaleMitigationResult: "@@apiv2_redux/users/needs_scale_mitigation_result",
        SaveMobileClientSettings: "@@apiv2_redux/users/save_mobile_client_settings",
        SaveMobileClientSettingsResult: "@@apiv2_redux/users/save_mobile_client_settings_result",
        SetSharingPrefs: "@@apiv2_redux/users/set_sharing_prefs",
        SetSharingPrefsResult: "@@apiv2_redux/users/set_sharing_prefs_result"
    }, t.featuresGetValuesAction = i._createAction(t.Action.FeaturesGetValues), t.featuresGetValuesResultAction = i._createAction(t.Action.FeaturesGetValuesResult), t.getAccountAction = i._createAction(t.Action.GetAccount), t.getAccountResultAction = i._createAction(t.Action.GetAccountResult), t.getAccountBatchAction = i._createAction(t.Action.GetAccountBatch), t.getAccountBatchResultAction = i._createAction(t.Action.GetAccountBatchResult), t.getCurrentAccountAction = i._createAction(t.Action.GetCurrentAccount), t.getCurrentAccountResultAction = i._createAction(t.Action.GetCurrentAccountResult), t.getFileModifierAccountAction = i._createAction(t.Action.GetFileModifierAccount), t.getFileModifierAccountResultAction = i._createAction(t.Action.GetFileModifierAccountResult), t.getMobileClientSettingsAction = i._createAction(t.Action.GetMobileClientSettings), t.getMobileClientSettingsResultAction = i._createAction(t.Action.GetMobileClientSettingsResult), t.getPlanInfoAction = i._createAction(t.Action.GetPlanInfo), t.getPlanInfoResultAction = i._createAction(t.Action.GetPlanInfoResult), t.getRootInfoAction = i._createAction(t.Action.GetRootInfo), t.getRootInfoResultAction = i._createAction(t.Action.GetRootInfoResult), t.getSharingPrefsAction = i._createAction(t.Action.GetSharingPrefs), t.getSharingPrefsResultAction = i._createAction(t.Action.GetSharingPrefsResult), t.getSpaceUsageAction = i._createAction(t.Action.GetSpaceUsage), t.getSpaceUsageResultAction = i._createAction(t.Action.GetSpaceUsageResult), t.getUserUiInfoAction = i._createAction(t.Action.GetUserUiInfo), t.getUserUiInfoResultAction = i._createAction(t.Action.GetUserUiInfoResult), t.needsScaleMitigationAction = i._createAction(t.Action.NeedsScaleMitigation), t.needsScaleMitigationResultAction = i._createAction(t.Action.NeedsScaleMitigationResult), t.saveMobileClientSettingsAction = i._createAction(t.Action.SaveMobileClientSettings), t.saveMobileClientSettingsResultAction = i._createAction(t.Action.SaveMobileClientSettingsResult), t.setSharingPrefsAction = i._createAction(t.Action.SetSharingPrefs), t.setSharingPrefsResultAction = i._createAction(t.Action.SetSharingPrefsResult);
    var n = (r = {}, r[t.Action.FeaturesGetValues] = {
        endpoint: "features/get_values",
        action: t.featuresGetValuesResultAction
    }, r[t.Action.GetAccount] = {
        endpoint: "get_account",
        action: t.getAccountResultAction
    }, r[t.Action.GetAccountBatch] = {
        endpoint: "get_account_batch",
        action: t.getAccountBatchResultAction
    }, r[t.Action.GetCurrentAccount] = {
        endpoint: "get_current_account",
        action: t.getCurrentAccountResultAction
    }, r[t.Action.GetFileModifierAccount] = {
        endpoint: "get_file_modifier_account",
        action: t.getFileModifierAccountResultAction
    }, r[t.Action.GetMobileClientSettings] = {
        endpoint: "get_mobile_client_settings",
        action: t.getMobileClientSettingsResultAction
    }, r[t.Action.GetPlanInfo] = {
        endpoint: "get_plan_info",
        action: t.getPlanInfoResultAction
    }, r[t.Action.GetRootInfo] = {
        endpoint: "get_root_info",
        action: t.getRootInfoResultAction
    }, r[t.Action.GetSharingPrefs] = {
        endpoint: "get_sharing_prefs",
        action: t.getSharingPrefsResultAction
    }, r[t.Action.GetSpaceUsage] = {
        endpoint: "get_space_usage",
        action: t.getSpaceUsageResultAction
    }, r[t.Action.GetUserUiInfo] = {
        endpoint: "get_user_ui_info",
        action: t.getUserUiInfoResultAction
    }, r[t.Action.NeedsScaleMitigation] = {
        endpoint: "needs_scale_mitigation",
        action: t.needsScaleMitigationResultAction
    }, r[t.Action.SaveMobileClientSettings] = {
        endpoint: "save_mobile_client_settings",
        action: t.saveMobileClientSettingsResultAction
    }, r[t.Action.SetSharingPrefs] = {
        endpoint: "set_sharing_prefs",
        action: t.setSharingPrefsResultAction
    }, r);
    t.middleware = i._createMiddleware(n)
}), define("modules/clean/file_store/actions", ["require", "exports", "tslib", "modules/clean/file_store/types", "modules/clean/file_store/utils", "external/lodash"], function(e, t, i, r, n, o) {
    "use strict";

    function a(e, t) {
        return {
            type: r.FileNamespaceActions.PutFile,
            payload: {
                file: e,
                fileId: null != t ? t : n.getFileStoreId(e)
            }
        }
    }

    function s(e) {
        var t = o.keyBy(e, n.getFileStoreId);
        return {
            type: r.FileNamespaceActions.PutFileMap,
            payload: t
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importStar(o), t.putFile = a, t.putFiles = s
}), define("modules/clean/file_store/reducer", ["require", "exports", "tslib", "modules/clean/file_store/types"], function(e, t, i, r) {
    "use strict";

    function n(e, n) {
        var o;
        switch (void 0 === e && (e = t.defaultFileState), n.type) {
            case r.FileNamespaceActions.PutFile:
                return i.__assign({}, e, (o = {}, o[n.payload.fileId] = n.payload.file, o));
            case r.FileNamespaceActions.PutFileMap:
                return i.__assign({}, e, n.payload)
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.defaultFileState = {}, t.fileNamespaceReducer = n
}), define("modules/clean/file_store/selectors", ["require", "exports", "modules/clean/file_store/reducer", "modules/clean/redux/namespaces", "modules/clean/redux/selectors"], function(e, t, i, r, n) {
    "use strict";

    function o(e) {
        return n.getStateAtNamespace(e, r.FILE_NAMESPACE_KEY) || i.defaultFileState
    }

    function a(e, t) {
        return t ? o(e)[t] : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getFile = a
}), define("modules/clean/file_store/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.PutFile = "PUT_FILE", e.PutFileMap = "PUT_FILE_MAP"
    })(t.FileNamespaceActions || (t.FileNamespaceActions = {}))
}), define("modules/clean/file_store/utils", ["require", "exports", "tslib", "modules/clean/filepath"], function(e, t, i, r) {
    "use strict";

    function n(e, t) {
        return e.ns_id === t.ns_id && e.sjid === t.sjid
    }

    function o(e) {
        return "fq_path" in e
    }

    function a(e) {
        return "subpath" in e
    }

    function s(e) {
        return !o(e) && !a(e)
    }

    function l(e) {
        return u(e)
    }

    function c(e) {
        return e.is_dir
    }

    function d(e) {
        return e.is_dir && "fq_path" in e
    }

    function u(e) {
        return e.ns_id + ":" + e.sjid
    }

    function p(e) {
        var t = "fq_path" in e ? r.filename(e.fq_path) : e.filename;
        return r.file_extension(t)
    }

    function _(e) {
        return c(e) ? d(e) ? r.filename(e.fq_path) : e.filename : o(e) ? r.filename(e.fq_path) : e.filename
    }

    function f(e) {
        var t = _(e);
        return r.filename_without_extension(t)
    }

    function m(e) {
        return 0 === e.bytes
    }

    function v(e) {
        return e.is_symlink && m(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r), t.areFilesEqual = n, t.isBrowseFile = o, t.isArchiveFile = a, t.isSharedFile = s, t.getFileStoreId = l, t.isFolder = c, t.isBrowseFolder = d, t.getFileRevisionId = u, t.getExtension = p, t.getFilename = _, t.getFilenameWithoutExtension = f, t.isEmptyFile = m, t.isSymLink = v
}), define("modules/clean/logging/hive/schemas/web-file_previews", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function() {
        function e(e) {
            this.category = "web-file_previews", this.active_user_id = null, this.authed_user_ids = null, this.identity_gid = null, this.locale_browser_header = null, this.locale_user_selected = null, this.referrer = null, this.session_id = null, this.team_id = null, this.team_type = null, this.ua_browser_name = null, this.ua_browser_version = null, this.ua_dist_name = null, this.ua_dist_version = null, this.ua_os_name = null, this.ua_os_version = null, this.user_agent = null, this.user_id = null, this.device_type = e.device_type, this.event_name = e.event_name, this.extra = e.extra, this.file_extension = e.file_extension, this.file_last_edit_ts = e.file_last_edit_ts, this.file_obj_id = e.file_obj_id, this.file_preview_session_id = e.file_preview_session_id, this.file_preview_size = e.file_preview_size, this.file_sf_status = e.file_sf_status, this.file_size = e.file_size, this.file_viewer_session_id = e.file_viewer_session_id, this.is_starred = e.is_starred, this.ns_id = e.ns_id, this.sj_id = e.sj_id, this.x_dropbox_path = e.x_dropbox_path, this.timestamp = Date.now() / 1e3 | 0, Object.seal(this)
        }
        return e
    })();
    t.WebFilePreviewsLoggingRow = i
}), define("modules/clean/open_in_app/types", ["require", "exports", "tslib", "modules/constants/file_viewer"], function(e, t, i, r) {
    "use strict";

    function n(e) {
        return e.platform === a.IPAD || e.platform === a.IPHONE
    }

    function o(e) {
        return e.platform === a.ANDROID_MARKET
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r);
    var a = r.OpenInMobileAppPlatform;
    t.areUrlsIOS = n, t.areUrlsAndroid = o
}), define("modules/clean/previews/api", ["require", "exports", "tslib", "modules/clean/api_v2/user_client", "modules/clean/api_v2/noauth_client", "modules/clean/ajax_as_promised", "modules/core/uri", "file-viewer/core"], function(e, t, i, r, n, o, a, s) {
    "use strict";

    function l(e, t) {
        if (!t) return Promise.reject(new Error("user not logged in, no support for un-auth'd users yet"));
        var i = {
            files: e.map(function(e) {
                return {
                    ns_id: e.ns_id,
                    sj_id: e.sjid
                }
            })
        };
        return t ? (new r.UserApiV2Client).ns("previews").rpc("get_preview_data_batch", i, {
            subjectUserId: t.id
        }) : (new n.NoAuthApiV2Client).ns("previews").rpc("get_preview_data_batch", i, {})
    }

    function c(e) {
        return void 0 !== e.image
    }

    function d(e) {
        var i = t.getParsedDropboxMetadataHeader(e.jqXHR);
        return 401 === e.jqXHR.status && "1" === e.jqXHR.getResponseHeader("x-dropbox-pdf-password-needed") ? new s.RivieraError("Password required", s.RivieraStatus.PasswordProtected) : new s.RivieraError("Load Error", i.rivieraStatusCode)
    }

    function u(e, t, r) {
        return i.__awaiter(this, void 0, Promise, function() {
            var n, a, s, l;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 3]), [4, o.SilentBackgroundRequest({
                            url: e,
                            dataType: "json",
                            type: "POST",
                            data: r ? {
                                password: r
                            } : {},
                            xhrFields: {
                                withCredentials: !0
                            },
                            skipInjectCsrf: _(e)
                        })];
                    case 1:
                        return n = i.sent(), [3, 3];
                    case 2:
                        throw a = i.sent(), d(a);
                    case 3:
                        return c(n) ? [2, {
                            text_url_tmpl: n.text,
                            image_url_tmpl: n.image,
                            refresh_url: n.refresh
                        }] : (s = n.old_blob, l = n.new_blob, [2, {
                            text_url_tmpl: t.text_url_tmpl.replace(s, l),
                            image_url_tmpl: t.image_url_tmpl.replace(s, l),
                            refresh_url: t.refresh_url.replace(s, l)
                        }])
                }
            })
        })
    }

    function p(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            var t;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 3]), [4, o.SilentBackgroundRequest({
                            dataType: "json",
                            type: "GET",
                            url: e,
                            xhrFields: {
                                withCredentials: !0
                            },
                            skipInjectCsrf: _(e)
                        })];
                    case 1:
                        return [2, i.sent()];
                    case 2:
                        throw t = i.sent(), d(t);
                    case 3:
                        return [2]
                }
            })
        })
    }

    function _(e) {
        return a.URI.parse(e).getAuthority().toLocaleLowerCase().indexOf("dropbox.com") < 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importStar(o), t.MAX_REQUEST_SIZE = 50, t.fetchPreviewData = l, t.refreshBlob = u, t.requestDocMetadata = p, t.getParsedDropboxMetadataHeader = function(e) {
        var t = {};
        try {
            var i = e.getResponseHeader("x-dropbox-metadata");
            i && (t = JSON.parse(i))
        } catch (e) {}
        return t
    }
}), define("modules/clean/previews/data/actions", ["require", "exports", "tslib", "external/lodash", "modules/clean/previews/data/types", "modules/clean/redux/types", "modules/clean/previews/data/util", "modules/clean/previews/api", "modules/clean/file_store/utils", "modules/clean/react/previews/pdf_viewer/urls"], function(e, t, i, r, n, o, a, s, l, c) {
    "use strict";

    function d(e) {
        var t = {};
        return e.forEach(function(e) {
            var i = l.getFileRevisionId(e),
                r = e.preview;
            r && (t[i] = {
                data: r,
                status: o.ApiClientStatus.Success
            })
        }), {
            type: n.ActionTypes.UpdatePreviewData,
            payload: t
        }
    }

    function u(e, t) {
        var i = e.revision_id;
        return {
            type: n.ActionTypes.OverrideWithComments1Revision,
            payload: {
                revisionId: i,
                preview: t
            }
        }
    }

    function p(e) {
        var t = e.revision_id;
        return {
            type: n.ActionTypes.ClearOverrideWithComments1Revision,
            payload: {
                revisionId: t
            }
        }
    }

    function _(e, t) {
        var i, r = l.getFileRevisionId(e),
            o = (i = {}, i[r] = {}, i);
        return t.forEach(function(e) {
            e.preview && (o[r][e.subpath] = e.preview)
        }), {
            type: n.ActionTypes.PopulateArchiveFiles,
            payload: o
        }
    }

    function f(e, t, r) {
        var n = this;
        return function(o, l) {
            return i.__awaiter(n, void 0, void 0, function() {
                var n, c, d;
                return i.__generator(this, function(i) {
                    return n = a.filterFilesMissingPreviewData(l(), e, r), 0 === n.length ? [2] : (c = a.chunkFiles(n, s.MAX_REQUEST_SIZE), d = c.map(function(e) {
                        return v(o, e, t)
                    }), [2, Promise.all(d)])
                })
            })
        }
    }

    function m(e, t) {
        return s.fetchPreviewData([e], t).then(function(e) {
            if (e.results.length > 0) {
                var t = e.results[0].preview;
                if (t && t.preview_url) return t.preview_url
            }
        })
    }

    function v(e, r, n) {
        return i.__awaiter(this, void 0, void 0, function() {
            var o, a, l;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        o = h(r), e(t.apiRequestInFlightAction(o)), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, s.fetchPreviewData(r, n)];
                    case 2:
                        return a = i.sent(), [2, e(A(a))];
                    case 3:
                        return l = i.sent(), [2, e(b(o))];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function h(e) {
        return e.reduce(function(e, t) {
            return e[l.getFileRevisionId(t)] = {
                data: void 0,
                status: o.ApiClientStatus.Request
            }, e
        }, {})
    }

    function g(e, t) {
        return e.reduce(function(e, i) {
            return e[l.getFileRevisionId(i)] = {
                data: i.preview,
                status: t
            }, e
        }, {})
    }

    function w(e) {
        return {
            type: n.ActionTypes.UpdatePreviewData,
            payload: e
        }
    }

    function A(e) {
        return {
            type: n.ActionTypes.UpdatePreviewData,
            payload: e.results.reduce(function(e, t) {
                return e[a.buildRevisionId(t.file.ns_id, t.file.sj_id)] = {
                    data: t.preview || t.err,
                    status: t.err || !t.preview ? o.ApiClientStatus.Error : o.ApiClientStatus.Success
                }, e
            }, {})
        }
    }

    function b(e) {
        return {
            type: n.ActionTypes.UpdatePreviewData,
            payload: r.mapValues(e, function(e) {
                return {
                    data: void 0,
                    status: o.ApiClientStatus.Error
                }
            })
        }
    }

    function y(e, t) {
        return {
            type: n.ActionTypes.RefreshDocBlobResult,
            payload: {
                revisionId: e,
                preview: t
            }
        }
    }

    function F(e, t, r, n) {
        var o = this;
        return function(a) {
            return i.__awaiter(o, void 0, void 0, function() {
                var o, l;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, s.refreshBlob(t, r, n)];
                        case 1:
                            return o = i.sent(), a(y(e, o)), a(S(e, o.text_url_tmpl)), [3, 3];
                        case 2:
                            return l = i.sent(), a(R(e, void 0, l)), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }
    }

    function R(e, t, i) {
        return {
            type: n.ActionTypes.FetchDocMetadataResult,
            payload: {
                revisionId: e,
                metadata: t
            },
            error: i
        }
    }

    function C(e, t, i) {
        return {
            type: n.ActionTypes.FetchDataForPageResult,
            payload: {
                revisionId: e,
                metadata: t
            },
            error: i
        }
    }

    function S(e, t) {
        var r = this;
        return function(n) {
            return i.__awaiter(r, void 0, void 0, function() {
                var r, o;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, s.requestDocMetadata(c.textUrl(t, !0))];
                        case 1:
                            return r = i.sent(), [3, 3];
                        case 2:
                            return o = i.sent(), n(R(e, void 0, o)), [3, 3];
                        case 3:
                            return n(R(e, r)), [2]
                    }
                })
            })
        }
    }

    function x(e, t, r, n) {
        var o = this;
        return function(a) {
            return i.__awaiter(o, void 0, void 0, function() {
                var o, l;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, s.requestDocMetadata(c.textUrl(t, !1, r, n))];
                        case 1:
                            return o = i.sent(), a(C(e, o)), [3, 3];
                        case 2:
                            return l = i.sent(), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }
    }

    function P() {
        return {
            type: n.ActionTypes.ClearVirtualPreviewMetadata
        }
    }

    function k(e, t) {
        var i = e.ns_id,
            r = e.sjid;
        return {
            type: n.ActionTypes.SetVirtualPreviewMetadata,
            payload: {
                revisionId: a.buildRevisionId(i, r),
                preview: t
            }
        }
    }

    function E(e) {
        var t = e.ns_id,
            i = e.sjid;
        return {
            type: n.ActionTypes.ApplyVirtualPreviewMetadata,
            payload: a.buildRevisionId(t, i)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.populateFilesPreviewData = d, t.overridePreviewForComments = u, t.clearCommentsPreviewOverride = p, t.populateArchivePreviews = _, t.fetchPreviewData = f, t.fetchPreviewUrl = m, t.buildPreviewData = g, t.updatePreviewData = w, t.apiRequestInFlightAction = w, t.apiRequestSuccessAction = A, t.apiRequestErrorAction = b, t.refreshBlobAction = F, t.fetchDocMetadataResultAction = R, t.fetchDataForPageResultAction = C, t.fetchDocMetadata = S, t.fetchDataForPage = x, t.clearVirtualPreviewMetadata = P, t.setVirtualPreviewMetadata = k, t.applyVirtualPreviewMetadata = E
}), define("modules/clean/previews/data/reducer", ["require", "exports", "tslib", "external/lodash", "modules/clean/previews/data/types", "modules/clean/react/previews/pdf_viewer/urls"], function(e, t, i, r, n, o) {
    "use strict";

    function a(e) {
        if (!e || !e.pages) return {};
        var t = e.links,
            r = e.schema_version,
            n = e.pages,
            o = e.fonts,
            a = void 0 === o ? [] : o,
            s = Object.keys(n),
            l = {
                schema_version: r,
                links: t,
                pages: {}
            };
        return s.filter(function(e) {
            return !!n[e]
        }).forEach(function(e) {
            l.pages[e] = n[e].map(function(e) {
                return i.__assign({}, e, {
                    font: a[e.f]
                })
            })
        }), l
    }

    function s(e, s) {
        var c, d, u, p, _, f, m, v, h;
        void 0 === e && (e = t.initialState);
        var g;
        switch (s.type) {
            case n.ActionTypes.PopulateArchiveFiles:
                return i.__assign({}, e, {
                    archivePreviews: r.merge({}, e.archivePreviews, s.payload)
                });
            case n.ActionTypes.ClearVirtualPreviewMetadata:
                return i.__assign({}, e, {
                    virtualPreviews: {}
                });
            case n.ActionTypes.SetVirtualPreviewMetadata:
                var w = s.payload,
                    A = w.preview,
                    b = w.revisionId;
                return i.__assign({}, e, {
                    virtualPreviews: r.merge({}, e.virtualPreviews, (c = {}, c[b] = A, c))
                });
            case n.ActionTypes.ApplyVirtualPreviewMetadata:
                var y = s.payload;
                return i.__assign({}, e, {
                    filePreviews: r.merge({}, e.filePreviews, (d = {}, d[y] = {
                        data: e.virtualPreviews[y]
                    }, d)),
                    virtualPreviews: r.omit(e.virtualPreviews, y)
                });
            case n.ActionTypes.UpdatePreviewData:
                return i.__assign({}, e, {
                    filePreviews: i.__assign({}, e.filePreviews, s.payload)
                });
            case n.ActionTypes.OverrideWithComments1Revision:
                return g = s.payload.revisionId, i.__assign({}, e, {
                    comments1Override: i.__assign({}, e.comments1Override, (u = {}, u[g] = s.payload.preview, u))
                });
            case n.ActionTypes.ClearOverrideWithComments1Revision:
                return i.__assign({}, e, {
                    comments1Override: i.__assign({}, e.comments1Override, (p = {}, p[s.payload.revisionId] = void 0, p))
                });
            case n.ActionTypes.RefreshDocBlobResult:
                return g = s.payload.revisionId, i.__assign({}, e, {
                    filePreviews: i.__assign({}, e.filePreviews, (_ = {}, _[g] = i.__assign({}, e.filePreviews[g], {
                        data: i.__assign({}, e.filePreviews[g].data, {
                            content: i.__assign({}, e.filePreviews[g].data.content, s.payload.preview, {
                                placeholder_image_url: s.payload.preview.placeholder_image_url || o.imageUrl(s.payload.preview.image_url_tmpl)
                            })
                        })
                    }), _))
                });
            case n.ActionTypes.FetchDocMetadataResult:
                if (g = s.payload.revisionId, s.error) return i.__assign({}, e, {
                    docPreviewMetadata: i.__assign({}, e.docPreviewMetadata, (f = {}, f[g] = {
                        metadata: l,
                        text: {},
                        error: s.error
                    }, f))
                });
                if (s.payload.metadata) {
                    var F = s.payload.metadata,
                        R = F.metadata,
                        C = void 0 === R ? l : R,
                        S = F.text,
                        x = {},
                        P = e.docPreviewMetadata[g];
                    return C && (C = i.__assign({}, P && P.metadata || {}, C)), S && (x = i.__assign({}, P && P.text || {}, a(S))), i.__assign({}, e, {
                        docPreviewMetadata: i.__assign({}, e.docPreviewMetadata, (m = {}, m[g] = {
                            metadata: C,
                            text: x
                        }, m))
                    })
                }
                return e;
            case n.ActionTypes.FetchDataForPageResult:
                g = s.payload.revisionId;
                var P = e.docPreviewMetadata[g] || {
                    metadata: l,
                    text: {}
                };
                if (s.error) return i.__assign({}, e, {
                    docPreviewMetadata: i.__assign({}, e.docPreviewMetadata, (v = {}, v[g] = i.__assign({}, P, {
                        error: s.error
                    }), v))
                });
                if (s.payload.metadata) {
                    var k = s.payload.metadata,
                        C = k.metadata,
                        S = k.text,
                        x = {};
                    if (C = C ? r.merge({}, P.metadata, C) : P.metadata, S) {
                        var E = a(S);
                        x = r.merge({}, P.text, E)
                    } else x = P.text;
                    return i.__assign({}, e, {
                        docPreviewMetadata: i.__assign({}, e.docPreviewMetadata, (h = {}, h[g] = {
                            metadata: C,
                            text: x
                        }, h))
                    })
                }
                return e;
            default:
                return e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r), t.initialState = {
        filePreviews: {},
        docPreviewMetadata: {},
        comments1Override: {},
        archivePreviews: {},
        virtualPreviews: {}
    };
    var l = {
        schema_version: 0,
        page_count: 0,
        dimensions: []
    };
    t.reducer = s
}), define("modules/clean/previews/data/selectors", ["require", "exports", "modules/clean/redux/types", "modules/clean/redux/selectors", "modules/clean/file_store/utils", "modules/clean/redux/namespaces"], function(e, t, i, r, n, o) {
    "use strict";

    function a(e) {
        return r.getStateAtNamespace(e, o.PREVIEW_NAMESPACE_KEY)
    }

    function s(e, t) {
        var i = a(e);
        return i && t ? i.comments1Override[t] || i.virtualPreviews[t] || i.filePreviews[t] && i.filePreviews[t].data : {}
    }

    function l(e, t) {
        var i = a(e);
        return !(!i || !t) && (!i.comments1Override[t] && !!i.virtualPreviews[t])
    }

    function c(e, t) {
        var r = a(e);
        if (!r || !t) return _;
        var o = n.getFileRevisionId(t),
            s = r.comments1Override[t.revision_id];
        if (s) return {
            data: s,
            status: i.ApiClientStatus.Success
        };
        if (r.virtualPreviews[o]) return {
            data: r.virtualPreviews[o],
            status: i.ApiClientStatus.Success
        };
        var l = r.filePreviews[o];
        return l && l.status ? l : _
    }

    function d(e, t) {
        return t.reduce(function(t, i) {
            return t[n.getFileRevisionId(i)] = c(e, i), t
        }, {})
    }

    function u(e, t) {
        var a = r.getStateAtNamespace(e, o.PREVIEW_NAMESPACE_KEY);
        if (!a || !t) return _;
        var s = a.archivePreviews[n.getFileRevisionId(t)];
        return s ? {
            data: s[t.subpath],
            status: i.ApiClientStatus.Success
        } : _
    }

    function p(e, t) {
        var i = r.getStateAtNamespace(e, o.PREVIEW_NAMESPACE_KEY);
        if (i) return i.docPreviewMetadata[t]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var _ = {
        data: void 0,
        status: i.ApiClientStatus.Error
    };
    t.getApiDataForRevisionId = s, t.getIsVirtualRevisionId = l, t.getApiDataForFile = c, t.getApiDataForFiles = d, t.getPreviewForArchiveFile = u, t.getDocMetadataByRevisionId = p
}), define("modules/clean/previews/data/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.PopulateArchiveFiles = "FileViewer/Previews/PopulateArchiveFiles", e.UpdatePreviewData = "FileViewer/Previews/UpdatePreviewData", e.OverrideWithComments1Revision = "FileViewer/Previews/OverrideWithComments1Revision", e.ClearOverrideWithComments1Revision = "FileViewer/Previews/ClearOverrideWithComments1Revision", e.RefreshDocBlob = "FileViewer/Previews/RefreshDocBlob", e.RefreshDocBlobResult = "FileViewer/Previews/RefreshDocBlobResult", e.FetchDocMetadata = "FileViewer/Previews/FetchDocMetadata", e.FetchDocMetadataResult = "FileViewer/Previews/FetchDocMetadataResult", e.FetchDataForPageResult = "FileViewer/Previews/FetchDataForPageResult", e.ApplyVirtualPreviewMetadata = "FileViewer/Previews/ApplyVirtualPreviewMetadata", e.ClearVirtualPreviewMetadata = "FileViewer/Previews/ClearVirtualPreviewMetadata", e.SetVirtualPreviewMetadata = "FileViewer/Previews/SetVirtualPreviewMetadata"
    })(t.ActionTypes || (t.ActionTypes = {}))
}), define("modules/clean/previews/data/util", ["require", "exports", "tslib", "external/lodash", "modules/clean/previews/data/selectors", "modules/clean/file_store/utils", "modules/clean/redux/types"], function(e, t, i, r, n, o, a) {
    "use strict";

    function s(e, t, i) {
        if (void 0 === i && (i = !1), i) return t;
        var s = n.getApiDataForFiles(e, t);
        return r.filter(t, function(e) {
            var t = o.getFileRevisionId(e);
            return !e.is_dir && (!s[t] || !s[t].data && s[t].status === a.ApiClientStatus.Error)
        })
    }

    function l(e, t) {
        return e + ":" + t
    }

    function c(e, t) {
        var i = n.getApiDataForFile(e, t);
        return !(!i || !i.data || i.status === a.ApiClientStatus.Error)
    }

    function d(e, t) {
        return u(e, t) === a.ApiClientStatus.Request
    }

    function u(e, t) {
        var i = n.getApiDataForFile(e, t);
        return i ? i.status : void 0
    }

    function p(e, t) {
        if (e.length <= 0) return [];
        if (e.length < t) return [e];
        for (var i = Array(Math.ceil(e.length / t)), r = 0, n = 0; r < e.length;) i[n++] = e.slice(r, r += t);
        return i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = i.__importStar(r), t.filterFilesMissingPreviewData = s, t.buildRevisionId = l, t.previewDataPresentForFile = c, t.previewDataInFlight = d, t.previewDataStatus = u, t.chunkFiles = p
}), define("modules/clean/react/previews/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.LoadError = "LOAD_ERROR", e.SupportError = "SUPPORT_ERROR", e.ExtensionError = "EXTENSION_ERROR", e.NeedFlashError = "NEED_FLASH_ERROR", e.FileSizeError = "FILE_SIZE_ERROR", e.PasswordProtectedError = "PASSWORD_PROTECTED_ERROR", e.PendingUploadError = "PENDING_UPLOAD_ERROR", e.EmptyFileError = "EMPTY_FILE_ERROR", e.SymLinkError = "SYM_LINK_ERROR", e.WatermarkingError = "WATERMARKING_ERROR", e.UpsellError = "UPSELL_ERROR"
    })(t.ErrorType || (t.ErrorType = {}));
    (function(e) {
        e.Browse = "browse", e.Home = "home", e.SharedLinkFile = "sl_file", e.SharedLinkFolder = "sl_folder", e.SharedLinkCollection = "sl_collection", e.VersionHistory = "version_history", e.FileViewer = "file_viewer", e.Desktop = "desktop", e.EmbeddedSharedLinkFile = "embedded_sl_file", e.ArchiveFile = "archive_file", e.Workflow = "workflow", e.TrelloPreview = "trello_preview"
    })(t.PreviewSourceContext || (t.PreviewSourceContext = {}));
    (function(e) {
        e.Visit = "visit", e.Click = "click", e.FileViewerExit = "file_viewer_exit"
    })(t.PreviewSourceAction || (t.PreviewSourceAction = {}));
    (function(e) {
        e.Unknown = "unknown", e.NewFile = "new_file", e.BeforeUnload = "before_unload", e.Unmount = "unmount"
    })(t.PreviewSessionEndReason || (t.PreviewSessionEndReason = {}));
    (function(e) {
        e.EnableRegionCreation = "EnableRegionCreation", e.Fullscreen = "Fullscreen", e.PageDown = "PageDown", e.PageIndicator = "PageIndicator", e.PageUp = "PageUp", e.Print = "Print", e.Sidebar = "Sidebar", e.ZoomIn = "ZoomIn", e.ZoomOut = "ZoomOut", e.FlipControls = "FlipControls"
    })(t.PreviewToolbarButtonType || (t.PreviewToolbarButtonType = {}))
}), define("modules/clean/react/previews/pdf_viewer/urls", ["require", "exports", "tslib", "modules/core/uri", "modules/constants/file_viewer"], function(e, t, i, r, n) {
    "use strict";

    function o(e, t, i, r, n) {
        return void 0 === i && (i = 0), void 0 === r && (r = 50), void 0 === n && (n = !1), t && (e = s(e, {
            metadata: "1"
        })), void 0 !== i && (e = s(e, {
            text: "1",
            page_start: "" + i,
            page_end: "" + r
        })), n && (e = s(e, {
            canned_file_name: "spdf/audi.pdf.json"
        })), e
    }

    function a(e, t, i, r) {
        void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === r && (r = !1);
        var o = {
            page: t.toString()
        };
        n.SVG_PDF_PREVIEW && i > 0 ? o.format = "svg" : o.scale_percent = i.toString();
        var a = s(e, o);
        return r && (a = s(a, {
            canned_file_name: "spdf/audi.pdf." + t + ".png"
        })), a
    }

    function s(e, t) {
        return r.URI.parse(e).updateQuery(t).toString()
    }

    function l(e) {
        return r.URI.parse(e).getAuthority().toLocaleLowerCase().indexOf("dropbox.com") < 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = i.__importStar(n), t.textUrl = o, t.imageUrl = a, t.updateQueryParam = s, t.skipCsrfTokenInjection = l
});
//# sourceMappingURL=pkg-previews_core.min.js-vflq_s27G.map