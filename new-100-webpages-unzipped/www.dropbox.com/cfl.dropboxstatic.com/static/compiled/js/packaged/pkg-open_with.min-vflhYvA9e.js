define("modules/clean/open_with", ["require", "exports", "tslib", "modules/clean/cloud_docs/constants", "modules/clean/filepath"], function(e, i, o, n, t) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), t = o.__importStar(t);
    var r = void 0,
        a = [{
            id: "word",
            icon: "word",
            name: "Microsoft Word Online",
            exts: ["odt", "docm", "docx"],
            editor: n.MicrosoftEditors.WORD
        }, {
            id: "excel",
            icon: "excel",
            name: "Microsoft Excel Online",
            exts: ["ods", "xlsb", "xlsm", "xlsx"],
            editor: n.MicrosoftEditors.EXCEL
        }, {
            id: "powerpoint",
            icon: "powerpoint",
            name: "Microsoft PowerPoint Online",
            exts: ["odp", "ppsx", "pptx"],
            editor: n.MicrosoftEditors.POWERPOINT
        }],
        _ = (function() {
            function e() {}
            return e.initClass = function() {
                this.PRELOAD_URLS = {}, this.MAX_SUPPORTED_FILE_SIZE_B = 157286400, r = ["com.adobe.Reader", "Acrord32.exe", "com.adobe.Acrobat", "Acrobat.exe"]
            }, e.is_adobe_app = function(e) {
                return Array.from(r).includes(e)
            }, e.getWopiOpenWithButtonInfo = function(e) {
                var i;
                i = e.fq_path ? e.fq_path : e.filename ? e.filename : "";
                for (var o = t.file_extension(i), n = 0, r = a; n < r.length; n++) {
                    var _ = r[n];
                    if (_.exts.indexOf(o) !== -1) return _
                }
                return null
            }, e
        })();
    _.initClass(), i.default = _
}), define("modules/clean/react/file_viewer/constants", ["require", "exports", "modules/clean/react/size_class/constants"], function(e, i, o) {
    "use strict";
    var n;
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    (function(e) {
        e.Setup = "SETUP", e.Cleanup = "CLEANUP", e.UpdateFiles = "UPDATE_FILES", e.FlipNext = "FLIP_NEXT", e.FlipPrevious = "FLIP_PREVIOUS", e.OpenFullscreen = "OPEN_FULLSCREEN", e.CloseFullscreen = "CLOSE_FULLSCREEN", e.SwitchRevision = "SWITCH_REVISION", e.RestoreRevision = "RESTORE_REVISION", e.SaveForwardRevision = "SAVE_FORWARD_REVISION", e.BroadcastRenderStatus = "BROADCAST_RENDER_STATUS", e.HideOpenInAppBanner = "HIDE_OPEN_IN_APP_BANNER"
    })(i.ActionType || (i.ActionType = {}));
    (function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.Loading = 1] = "Loading", e[e.Succeeded = 2] = "Succeeded"
    })(i.PreviewRenderStatus || (i.PreviewRenderStatus = {}));
    (function(e) {
        e.FileViewerOpened = "FILE_VIEWER_OPENED", e.FilePreviewSessionEnded = "FILE_PREVIEW_SESSION_ENDED", e.FilePreviewAttemptStarted = "FILE_PREVIEW_ATTEMPT_STARTED", e.FilePreviewSupportConfirmed = "FILE_PREVIEW_SUPPORT_CONFIRMED", e.FilePreviewSupportDenied = "FILE_PREVIEW_SUPPORT_DENIED", e.FilePreviewDownloadAttempted = "FILE_PREVIEW_DOWNLOAD_ATTEMPTED", e.FilePreviewDownloadSucceeded = "FILE_PREVIEW_DOWNLOAD_SUCCEEDED", e.FilePreviewDownloadFailed = "FILE_PREVIEW_DOWNLOAD_FAILED", e.FilePreviewRenderSucceeded = "FILE_PREVIEW_RENDER_SUCCEEDED", e.FilePreviewRenderFailed = "FILE_PREVIEW_RENDER_FAILED", e.FilePreviewPASSShown = "FILE_PREVIEW_PASS_SHOWN", e.FilePreviewPASSHover = "FILE_PREVIEW_PASS_HOVER", e.FilePreviewPASSClick = "FILE_PREVIEW_PASS_CLICK", e.BrowsePASSShown = "BROWSE_PASS_SHOWN", e.BrowsePASSHover = "BROWSE_PASS_HOVER", e.BrowsePASSClick = "BROWSE_PASS_CLICK", e.FilePreviewFidelitySurveyAsked = "FILE_PREVIEW_FIDELITY_SURVEY_ASKED", e.FilePreviewFidelitySurveyAnswered = "FILE_PREVIEW_FIDELITY_SURVEY_ANSWERED", e.FilePreviewFidelitySurveyDismissed = "FILE_PREVIEW_FIDELITY_SURVEY_DISMISSED", e.FilePreviewUserAction = "FILE_PREVIEW_USER_ACTION", e.FilePreviewVideoStalled = "FILE_PREVIEW_VIDEO_STALLED", e.FilePreviewVideoToggled = "FILE_PREVIEW_VIDEO_TOGGLED", e.FilePreviewVideoTruncated = "FILE_PREVIEW_VIDEO_TRUNCATED", e.ArchivePreviewContentsScanned = "ARCHIVE_PREVIEW_CONTENTS_SCANNED", e.FilePreviewModeDetermined = "FILE_PREVIEW_MODE_DETERMINED", e.FilePreviewModeBounce = "FILE_PREVIEW_MODE_BOUNCE", e.SidebarPaneSelected = "SIDEBAR_PANE_SELECTED", e.SidebarModeSelected = "SIDEBAR_MODE_SELECTED", e.SidebarOpened = "SIDEBAR_OPENED", e.SidebarClosed = "SIDEBAR_CLOSED", e.FilePreviewUpsellExposed = "FILE_PREVIEW_UPSELL_EXPOSED", e.FilePreviewUpsellClicked = "FILE_PREVIEW_UPSELL_CLICKED"
    })(i.EventType || (i.EventType = {}));
    (function(e) {
        e.ExcelHTML = "test-workbook.html"
    })(i.CannedTestFilename || (i.CannedTestFilename = {}));
    (function(e) {
        e[e.Frame = 0] = "Frame", e[e.Window = 1] = "Window"
    })(i.FileViewerInterfaceType || (i.FileViewerInterfaceType = {}));
    (function(e) {
        e[e.TitleBar = 0] = "TitleBar", e[e.PreviewContent = 1] = "PreviewContent", e[e.Sidebar = 2] = "Sidebar"
    })(i.FileViewerPane || (i.FileViewerPane = {}));
    (function(e) {
        e.AppDownloadInterstitialClose = "app_download_interstitial_close", e.AppDownloadInterstitialContinue = "app_download_interstitial_continue", e.AppDownloadInterstitialInstall = "app_download_interstitial_install", e.AppDownloadInterstitialView = "app_download_interstitial_view", e.ArchiveNavigation = "archive_navigation", e.CopyToPaper = "copy_to_paper", e.Share = "share", e.Download = "download", e.SaveToDropbox = "save_to_dropbox", e.SaveToDropboxPersonal = "save_to_dropbox_personal", e.SaveToDropboxWork = "save_to_dropbox_work", e.OpenInApp = "open_in_app", e.OpenInOfficeOnline = "open_in_office_online", e.OpenInUnity = "open_in_unity", e.OpenInUnityFolder = "open_in_unity_folder", e.OpenWithAppAction = "open_with_app_action", e.OpenWithCloudDocEditor = "open_with_cloud_doc_editor", e.OpenPrepareForSignature = "open_prepare_for_signature", e.ModeChange = "mode_change", e.PageChange = "page_change", e.PageUp = "page_up", e.PageDown = "page_down", e.PresentInZoom = "present_in_zoom", e.RemoveLink = "remove_link", e.ShareToSlack = "share_to_slack", e.ShareToTrello = "share_to_trello", e.InviteViaEmail = "invite_via_email", e.ViewRevisions = "view_revisions", e.ClickDropboxLogo = "click_dropbox_logo", e.ClickCustomLogo = "click_custom_logo", e.ToggleCommentsOn = "toggle_comments_on", e.ToggleCommentsOff = "toggle_comments_off", e.SignIn = "sign_in", e.ClickNotifications = "click_notifications", e.ClickAccountMenu = "click_account_menu", e.ToggleFullscreenOn = "toggle_fullscreen_on", e.ToggleFullscreenOff = "toggle_fullscreen_off", e.ToggleSidebarOn = "toggle_sidebar_on", e.ToggleSidebarOff = "toggle_sidebar_off", e.Print = "print", e.InlineSearch = "inline_search", e.FlipNext = "flip_next", e.FlipPrevious = "flip_prev", e.ZoomIn = "zoom_in", e.ZoomOut = "zoom_out", e.VideoPlaybackRateChanged = "playback_rate_changed", e.WatermarkOpenApplyMenu = "watermark_open_apply_menu", e.WatermarkApplySaveAsCopy = "watermark_apply_save_as_copy", e.WatermarkApplyOverwrite = "watermark_apply_overwrite", e.WatermarkCancel = "watermark_cancel", e.WatermarkEnable = "watermark_enable", e.WatermarkJumpToCopy = "watermark_jump_to_copy", e.ScrollUp = "scroll_up", e.ScrollDown = "scroll_down"
    })(i.UserAction || (i.UserAction = {}));
    (function(e) {
        e.AppDownloadInterstitial = "app_download_interstitial", e.TitleBarMain = "title_bar_main", e.TitleBarSplitButton = "title_bar_open_split_button", e.TitleBarMore = "title_bar_more", e.TitleBarBackButton = "title_bar_back_button", e.TitleBarSecondaryButton = "title_bar_secondary_button", e.PreviewContentMain = "preview_content_main", e.PreviewContentSplitButton = "preview_content_open_split_button", e.Toolbar = "toolbar", e.VideoPlayer = "video_player", e.OpenInAppBanner = "open_in_app_banner", e.LightboxFrame = "lightbox_frame", e.LightboxToolbar = "lightbox_toolbar", e.LightboxCloseButton = "lightbox_close_button", e.Sidebar = "sidebar", e.ModeView = "mode_view", e.ModeWatermark = "mode_watermark", e.Keyboard = "keyboard", e.Browser = "browser", e.Unknown = "unknown", e.WatermarkPane = "watermark_pane", e.WatermarkOverwriteNotice = "watermark_overwrite_notice", e.WatermarkSavedAsCopyNotice = "watermark_saved_as_copy_notice"
    })(i.UserActionContext || (i.UserActionContext = {}));
    (function(e) {
        e[e.Main = 0] = "Main", e[e.Split = 1] = "Split"
    })(i.SplitButtonActionLocation || (i.SplitButtonActionLocation = {}));
    i.SizeClassFilenameLengthMap = (n = {}, n[o.SizeClass.Small] = 12, n[o.SizeClass.Medium] = 25, n[o.SizeClass.Large] = 35, n[o.SizeClass.ExtraLarge] = 45, n), i.ResponsiveClassName = "responsive-enabled", i.SubpathQueryKey = "file_subpath", i.PageQueryKey = "page", i.UnsupportedExtensionHelpLink = "https://www.dropbox.com/help/files-folders/file-types-that-preview", i.PreviewsUpsellUrl = "/pro?_tk=autocad_modal";
    (function(e) {
        e.default = "default", e.html = "html", e.pdf = "pdf", e.ppt = "ppt", e.spreadsheet = "spreadsheet", e.image = "image"
    })(i.DocType || (i.DocType = {}));
    (function(e) {
        e[e.ABOVE = 0] = "ABOVE", e[e.BELOW = 1] = "BELOW"
    })(i.OverflowMenuDirection || (i.OverflowMenuDirection = {}))
}), define("modules/clean/react/file_viewer/open_with_helpers", ["require", "exports", "tslib", "modules/clean/open_with", "modules/constants/file_viewer"], function(e, i, o, n, t) {
    "use strict";

    function r(e, i) {
        return t.WOPI_BUTTON_VISIBLE && e.bytes <= n.default.MAX_SUPPORTED_FILE_SIZE_B && null !== n.default.getWopiOpenWithButtonInfo(e)
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), i.OpenWithHelpers = {
        canOpenWith: r
    }
}), define("modules/clean/react/size_class/constants", ["require", "exports"], function(e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large", e[e.ExtraLarge = 4] = "ExtraLarge"
    })(i.SizeClass || (i.SizeClass = {})), i.MEDIA_SIZE_CLASS_SMALL = "screen and (max-width: 735px)", i.MEDIA_SIZE_CLASS_MEDIUM = "screen and (min-width: 736px) and (max-width: 1023px)", i.MEDIA_SIZE_CLASS_LARGE = "screen and (min-width: 1024px) and (max-width: 1439px)", i.MEDIA_SIZE_CLASS_EXTRA_LARGE = "screen and (min-width: 1440px)"
});
//# sourceMappingURL=pkg-open_with.min.js-vflxqmMDw.map