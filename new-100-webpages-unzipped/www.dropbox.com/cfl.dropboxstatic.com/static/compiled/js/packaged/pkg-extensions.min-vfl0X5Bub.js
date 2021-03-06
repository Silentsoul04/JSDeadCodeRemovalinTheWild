define("modules/clean/cloud_docs/cloud_doc_api_client", ["require", "exports", "tslib"], function(e, t, n) {
        "use strict";

        function o() {
            return n.__awaiter(this, void 0, Promise, function() {
                var t;
                return n.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, new Promise(function(t, n) {
                                e(["modules/clean/api_v2/user_client"], t, n)
                            }).then(n.__importStar)];
                        case 1:
                            return t = o.sent().UserApiV2Client, [2, (new t).ns("cloud_docs")]
                    }
                })
            })
        }

        function r(e, t) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, n.sent().rpc("get_token", {
                                cloud_doc_id: t
                            }, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function i(e, t, n, o) {
            r(e, t).then(n, o)
        }

        function a(e, t) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, n.sent().rpc("get_lock_provider", {
                                file_id: t
                            }, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function s(e, t) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, n.sent().rpc("get_navigation_properties", {
                                cloud_doc_id: t
                            }, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function c(e, t, n, o) {
            s(e, t).then(n, o)
        }

        function u(e, t, r) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, n.sent().rpc("preferred_editor_prompt/disable", {
                                integration_name: t,
                                preferred_editor_doc_type: r
                            }, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function l(e, t) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, n.sent().rpc("pass_snackbar/get", {
                                cloud_doc_id: t
                            }, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function d(e) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, t.sent().rpc("pass_snackbar/set", void 0, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function _(e) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, t.sent().rpc("user_education_snackbar/get", void 0, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function p(e) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, t.sent().rpc("user_education_snackbar/set", void 0, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function f(e) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, t.sent().rpc("signin_snackbar/get", void 0, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function g(e) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, t.sent().rpc("signin_snackbar/set", void 0, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function E(e) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, t.sent().rpc("team_settings/get", void 0, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function h(e, t, r) {
            return n.__awaiter(this, void 0, Promise, function() {
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return [2, n.sent().rpc("get_preferred_editor_url", {
                                file_id: t,
                                file_ext: r
                            }, {
                                subjectUserId: e
                            })]
                    }
                })
            })
        }

        function S(e, t, r) {
            return n.__awaiter(this, void 0, Promise, function() {
                var i;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, o()];
                        case 1:
                            return i = n.sent(), [2, i.rpc("log_token_in_use", {
                                doc_id: t,
                                auth_token: r
                            }, {
                                subjectUserId: e
                            }).catch(function() {
                                return new Promise(function() {
                                    return null
                                })
                            })]
                    }
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getCloudDocToken = i, t.getLockProviderAsync = a, t.getNavigationProperties = c, t.dismissPreferredEditorPrompt = u, t.getPassSnackbarAsync = l, t.setPassSnackbarAsync = d, t.getUserEducationSnackbarAsync = _, t.setUserEducationSnackbarAsync = p, t.getSignInSnackbarAsync = f, t.setSignInSnackbarAsync = g, t.getTeamSettings = E, t.getPreferredUrl = h, t.logTokenInUse = S
    }), define("modules/clean/cloud_docs/constants", ["require", "exports", "tslib", "external/lodash", "modules/clean/filepath", "modules/clean/static_urls", "modules/core/i18n"], function(e, t, n, o, r, i, a) {
        "use strict";
        var s, c, u;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o);
        (function(e) {
            e.PAPER = "paper", e.PAPER_TEMPLATE = "papert", e.PAPER_BINDER = "binder"
        })(t.PaperNewFileTypes || (t.PaperNewFileTypes = {}));
        (function(e) {
            e.PAPER = "paper", e.PAPER_TEMPLATE = "papert", e.PAPER_BINDER = "binder"
        })(t.PaperFileTypes || (t.PaperFileTypes = {}));
        var l;
        (function(e) {
            e.GOOGLE_DSS_DOC = "gdoc", e.GOOGLE_DSS_SHEET = "gsheet", e.GOOGLE_DSS_SLIDES = "gslides"
        })(l = t.GoogleFileTypes || (t.GoogleFileTypes = {}));
        var d;
        (function(e) {
            e.SIMPLE_POINTER = "dlink"
        })(d = t.PointerFileTypes || (t.PointerFileTypes = {}));
        var _;
        (function(e) {
            e.WORD = "docx", e.EXCEL = "xlsx", e.POWERPOINT = "pptx"
        })(_ = t.MicrosoftFileTypes || (t.MicrosoftFileTypes = {}));
        (function(e) {
            e.WORD = "word", e.EXCEL = "excel", e.POWERPOINT = "powerpoint"
        })(t.MicrosoftEditors || (t.MicrosoftEditors = {}));
        (function(e) {
            e.HOME = "new_file_menu_home", e.BROWSE = "new_file_menu_browse"
        })(t.NewFileMenuFromType || (t.NewFileMenuFromType = {})), t.isMicrosoftFileType = function(e) {
            return o.values(_).includes(e)
        }, t.isPointerFileType = function(e) {
            return o.values(d).includes(e)
        }, t.LOADING_PAGE_URL = "/cloud_docs/loading", t.QueryParamBlackList = {
            platform: !0,
            dc_open_id: !0,
            web_open_id: !0,
            ts: !0,
            fileid_gid: !0
        }, t.DSS_TYPE_TO_OPEN_WITH_ICONS = (s = {}, s[l.GOOGLE_DSS_DOC] = i.static_url("/static/images/cloud_docs/gdoc-vfljy0OpJ.svg"), s[l.GOOGLE_DSS_SHEET] = i.static_url("/static/images/cloud_docs/gsheet-vflWVpJ8G.svg"), s[l.GOOGLE_DSS_SLIDES] = i.static_url("/static/images/cloud_docs/gslides-vflvsGNC8.svg"), s), t.DSS_TYPE_TO_TEXT = (c = {}, c[l.GOOGLE_DSS_DOC] = a._("Google Docs"), c[l.GOOGLE_DSS_SHEET] = a._("Google Sheets"), c[l.GOOGLE_DSS_SLIDES] = a._("Google Slides"), c), t.GOOGLE_DOC_SUPPORTED_EXTS = [".docx", ".gdoc"], t.GOOGLE_SHEET_SUPPORTED_EXTS = [".xlsx", ".gsheet"], t.GOOGLE_SLIDES_SUPPORTED_EXTS = [".pptx", ".gslides"], t.DSS_TYPE_TO_SUPPORTED_EXTS = (u = {}, u[l.GOOGLE_DSS_DOC] = t.GOOGLE_DOC_SUPPORTED_EXTS, u[l.GOOGLE_DSS_SHEET] = t.GOOGLE_SHEET_SUPPORTED_EXTS, u[l.GOOGLE_DSS_SLIDES] = t.GOOGLE_SLIDES_SUPPORTED_EXTS, u), t.POINTER_EXTS = ["web"], t.CLOUD_DOCS_EXTS = ["paper", "papert", "web", "gdoc", "gsheet", "gslides"], t.CLOUD_ENHANCED_FILE_EXTS = ["docx", "pptx", "xlsx"], t.isCloudDocByExtension = function(e) {
            return e.length > 0 && "." === e[0] && (e = e.substr(1)), t.CLOUD_DOCS_EXTS.includes(e.toLowerCase())
        }, t.isCloudEnhancedFileByExtension = function(e) {
            return e.length > 0 && "." === e[0] && (e = e.substr(1)), t.CLOUD_ENHANCED_FILE_EXTS.includes(e.toLowerCase())
        }, t.isPointerByExtension = function(e) {
            return t.POINTER_EXTS.includes(r.file_extension(e))
        };
        (function(e) {
            e.WEB = "web", e.WEB_HOME = "web_home", e.WEB_BROWSE = "web_browse", e.UNKOWN = "unknown"
        })(t.ActionSourceValue || (t.ActionSourceValue = {}))
    }), define("modules/clean/cloud_docs/types", ["require", "exports", "tslib"], function(e, t, n) {
        "use strict";
        var o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r;
        (function(e) {
            e.ChildReady = "cloud-docs-child-frame-ready", e.ChildViewable = "cloud-docs-child-frame-viewable", e.ChildInteractive = "cloud-docs-child-frame-interactive", e.OpenAddAccessUI = "cloud-docs-open-add-access-ui", e.NavigateNewFragment = "cloud-docs-navigate-new-fragment", e.OpenSharingUI = "cloud-docs-open-sharing-ui", e.TitleChanged = "cloud-docs-title-changed", e.ReloadHost = "cloud-docs-reload-host", e.ProviderFrameCalled = "cloud-docs-provider-frame-called"
        })(r = t.CloudDocActionsToDropbox || (t.CloudDocActionsToDropbox = {}));
        var i;
        (function(e) {
            e.LogEvent = "gdd-log-event", e.Ready = "gdd-ready", e.FrameLoaded = "gdd-frame-loaded"
        })(i = t.GDDSpecificActionsToDropbox || (t.GDDSpecificActionsToDropbox = {}));
        var a;
        (function(e) {
            e.GetToken = "cloud-docs-get-token", e.NavigateNewDoc = "cloud-docs-navigate-new-doc", e.NavigateCompleted = "cloud-docs-navigate-completed", e.OpenSearchUi = "open-search-ui", e.OpenDocMentionUI = "open-doc-mention-ui", e.MountDropboxNotificationsDropdown = "cloud-docs-mount-dropbox-notifications-dropdown"
        })(a = t.PaperSpecificActionsToDropbox || (t.PaperSpecificActionsToDropbox = {}));
        (function(e) {
            e.Init = "intermediate-frame-init"
        })(t.CloudDocActionsToIntermediateFrame || (t.CloudDocActionsToIntermediateFrame = {}));
        (function(e) {
            e.HostReady = "cloud-docs-host-ready", e.AddAccessUIResponse = "cloud-docs-add-access-response", e.NavigateNewFragment = "cloud-docs-navigate-new-fragment", e.NavigateNewHistory = "cloud-docs-navigate-new-history", e.MetadataChanged = "cloud-docs-metadata-changed", e.FrameMessengerParentReady = "parent-ready"
        })(t.CloudDocActionsToProvider || (t.CloudDocActionsToProvider = {}));
        (function(e) {
            e.NavigateNewDoc = "cloud-docs-navigate-new-doc", e.GrantToken = "cloud-docs-token", e.SearchUiClosed = "search-ui-closed", e.DocMentionUIClosed = "doc-mention-ui-closed", e.MemberCountChanged = "cloud-docs-member-count-changed"
        })(t.PaperSpecificActionsToProvider || (t.PaperSpecificActionsToProvider = {}));
        var s = (function() {
            function e() {}
            return e
        })();
        t.ChildReadyMessage = s;
        var c = (function() {
            function e() {}
            return e
        })();
        t.HostReadyMessage = c;
        var u = (function() {
            function e() {}
            return e
        })();
        t.ChildViewableMessage = u;
        var l = (function() {
            function e() {}
            return e
        })();
        t.ChildInteractiveMessage = l;
        var d = (function() {
            function e() {}
            return e
        })();
        t.IntermediateFrameInitMessage = d;
        var _ = (function() {
            function e() {}
            return e
        })();
        t.OpenAddAccessUIMessage = _;
        var p = (function() {
                function e() {}
                return e
            })(),
            f = (function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t
            })(p);
        t.NavigateNewHistoryMessageToProvider = f;
        var g = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t
        })(p);
        t.NavigateNewFragmentMessageToProvider = g;
        var E = (function() {
            function e() {}
            return e
        })();
        t.NavigateNewFragmentMessageToDropbox = E;
        var h = (function() {
            function e() {}
            return e
        })();
        t.ReloadHostMessage = h;
        var S = (function() {
            function e() {}
            return e
        })();
        t.TitleChangedMessage = S;
        var m = (function() {
            function e() {}
            return e
        })();
        t.OpenSharingUIMessage = m;
        var v = (function() {
            function e() {}
            return e
        })();
        t.AddAccessUIResponseMessage = v;
        var I = (function() {
            function e() {}
            return e
        })();
        t.MetadataChangedMessage = I;
        var y = (function() {
            function e() {}
            return e
        })();
        t.GddLogEventMessage = y;
        var T = (function() {
            function e() {}
            return e
        })();
        t.ProviderFrameCalledMessage = T;
        var b = (function() {
            function e() {}
            return e
        })();
        t.GetTokenMessage = b;
        var O = (function() {
            function e() {}
            return e
        })();
        t.GrantTokenMessage = O;
        var x = (function() {
            function e() {}
            return e
        })();
        t.NavigateNewDocMessage = x;
        var A = (function() {
            function e() {}
            return e
        })();
        t.NavigateCompletedMessage = A;
        var w = (function() {
            function e() {}
            return e
        })();
        t.MountDropboxNotificationsDropdownMessage = w;
        var N = (function() {
            function e() {}
            return e
        })();
        t.GddReadyMessage = N;
        var C = (function() {
            function e() {}
            return e
        })();
        t.GddFrameLoadedMessage = C;
        (function(e) {
            e.Navigate = "navigate", e.SendInfo = "send-info"
        })(t.SearchResultClickAction || (t.SearchResultClickAction = {}));
        var D = (function() {
            function e() {}
            return e
        })();
        t.OpenSearchUiMessage = D;
        var F = (function() {
            function e() {}
            return e
        })();
        t.SearchUiClosedMessage = F;
        var P = (function() {
            function e() {}
            return e
        })();
        t.OpenDocMentionUIMessage = P;
        (function(e) {
            e.CloudDoc = "cloud-doc", e.File = "file", e.Folder = "folder", e.Paper = "paper", e.PaperFolder = "paper-folder"
        })(t.SearchUIResultType || (t.SearchUIResultType = {}));
        var R = (function() {
            function e() {}
            return e
        })();
        t.DocMentionUIClosedMessage = R;
        var M = (function() {
            function e() {}
            return e
        })();
        t.MemberCountChanged = M;
        var L = (function() {
            function e() {}
            return e
        })();
        t.FrameMessengerParentReady = L;
        (function(e) {
            e.closed = "closed", e.prefilled = "prefilled", e.unfilled = "unfilled", e.linkSettings = "linksettings"
        })(t.ShareModalVariant || (t.ShareModalVariant = {})), t.SimplePointer = {
            ".tag": "simple_pointer"
        }, t.GddRegisterClientCalled = {
            ".tag": "gdd_register_client_called"
        }, t.LoadIframeAttempt = {
            ".tag": "load_iframe_attempt"
        }, t.LoadIframeSuccess = {
            ".tag": "load_iframe_success"
        }, t.LoadIframeFailed = {
            ".tag": "load_iframe_failed"
        }, t.LoadingScreenEnd = {
            ".tag": "loading_screen_end"
        }, t.LoadingScreenTimeout = {
            ".tag": "loading_screen_timeout"
        }, t.ReceivedMessageAclFixerClosed = {
            ".tag": "received_message_acl_fixer_closed"
        }, t.ReceivedMessageAclFixerOpened = {
            ".tag": "received_message_acl_fixer_opened"
        }, t.ReceivedMessageClientFragmentsChanged = {
            ".tag": "received_message_client_fragments_changed"
        }, t.ReceivedMessageClientReady = {
            ".tag": "received_message_client_ready"
        }, t.SentMessageHostFragmentsChanged = {
            ".tag": "sent_message_host_fragments_changed"
        }, t.SentMessageHostReady = {
            ".tag": "sent_message_host_ready"
        }, t.SentMessageMetadataChanged = {
            ".tag": "sent_message_metadata_changed"
        }, t.ReceivedMessageSharingOpened = {
            ".tag": "received_message_sharing_opened"
        }, t.ReceivedMessageTitleChanged = {
            ".tag": "received_message_title_changed"
        }, t.ReceivedMessageReloadHost = {
            ".tag": "received_message_reload_host"
        }, t.RestoreAttempt = {
            ".tag": "modal_restore_attempt"
        }, t.RestoreSuccess = {
            ".tag": "modal_restore_success"
        }, t.RestoreFailed = {
            ".tag": "modal_restore_failed"
        }, t.BackHome = {
            ".tag": "modal_back_home"
        }, t.PermissionUpgraded = {
            ".tag": "showed_modal_permission_upgraded"
        }, t.PermissionDowngraded = {
            ".tag": "showed_modal_permission_downgraded"
        }, t.Unauthenticated = {
            ".tag": "showed_modal_unauthenticated"
        }, t.PermissionDenied = {
            ".tag": "showed_modal_permission_denied"
        }, t.DeletedCanRestore = {
            ".tag": "showed_modal_deleted_can_restore"
        }, t.DeletedCantRestore = {
            ".tag": "showed_modal_deleted_cant_restore"
        }, t.PermanentlyDeleted = {
            ".tag": "showed_modal_permanently_deleted"
        }, t.UserNotLoggedIn = {
            ".tag": "showed_modal_user_not_logged_in"
        }, t.NearQuota = {
            ".tag": "showed_modal_near_quota"
        }, t.OverQuota = {
            ".tag": "showed_modal_over_quota"
        }, t.FileLocked = {
            ".tag": "showed_modal_file_locked"
        }, t.MaxAccessUrlChanged = {
            ".tag": "max_access_url_changed"
        }, t.actionReceivedToEvent = (o = {}, o[r.ChildReady] = t.ReceivedMessageClientReady, o[r.ChildViewable] = null, o[r.ChildInteractive] = null, o[r.OpenAddAccessUI] = t.ReceivedMessageAclFixerOpened, o[r.NavigateNewFragment] = t.ReceivedMessageClientFragmentsChanged, o[r.OpenSharingUI] = t.ReceivedMessageSharingOpened, o[r.TitleChanged] = t.ReceivedMessageTitleChanged, o[r.ReloadHost] = t.ReceivedMessageReloadHost, o[r.ProviderFrameCalled] = null, o[i.LogEvent] = null, o[i.Ready] = null, o[i.FrameLoaded] = null, o[a.GetToken] = null, o[a.NavigateNewDoc] = null, o[a.NavigateCompleted] = null, o[a.OpenSearchUi] = null, o[a.OpenDocMentionUI] = null, o[a.MountDropboxNotificationsDropdown] = null, o), t.docTypeToClient = {
            paper: {
                ".tag": "dropbox_paper"
            },
            gdoc: {
                ".tag": "gdd_docs"
            },
            gsheet: {
                ".tag": "gdd_sheets"
            },
            gslides: {
                ".tag": "gdd_slides"
            }
        };
        (function(e) {
            e.GOOGLE_DSS = "GOOGLE_DSS", e.PAPER_INTEGRATION = "PAPER_INTEGRATION", e.OFFICE_ONLINE = "OFFICE_ONLINE"
        })(t.IntegrationName || (t.IntegrationName = {})), t.CreateAction = {
            ".tag": "create"
        }, t.OpenAction = {
            ".tag": "open"
        }, t.PreOpenAction = {
            ".tag": "pre_open"
        }, t.PreviewAction = {
            ".tag": "preview"
        }, t.LoadingSnackbarImpression = {
            ".tag": "loading_snack_bar_impression"
        }, t.LoadingSnackbarOpenPreview = {
            ".tag": "loading_snack_bar_open_preview"
        }, t.UserActionEventType = {
            CREATE: t.CreateAction,
            OPEN: t.OpenAction,
            PRE_OPEN: t.PreOpenAction,
            PREVIEW: t.PreviewAction,
            LOADING_SNACKBAR_IMPRESSION: t.LoadingSnackbarImpression,
            LOADING_SNACKBAR_OPEN_PREVIEW: t.LoadingSnackbarOpenPreview
        }, t.WebBrowseSource = {
            ".tag": "web_browse"
        }, t.WebHomeSource = {
            ".tag": "web_home"
        }, t.WebSearchSource = {
            ".tag": "web_search"
        }, t.WebPreviewSource = {
            ".tag": "web_preview"
        }, t.WebSource = {
            ".tag": "web"
        }, t.UserActionSourceType = {
            WEB: t.WebSource,
            WEB_BROWSE: t.WebBrowseSource,
            WEB_HOME: t.WebHomeSource,
            WEB_SEARCH: t.WebSearchSource,
            WEB_PREVIEW: t.WebPreviewSource
        }, t.GoogleDocsEditor = {
            ".tag": "google_docs"
        }, t.GoogleSheetsEditor = {
            ".tag": "google_sheets"
        }, t.GoogleSlidesEditor = {
            ".tag": "google_slides"
        }, t.WordOnlineEditor = {
            ".tag": "word_online"
        }, t.ExcelOnlineEditor = {
            ".tag": "excel_online"
        }, t.PowerpointOnlineEditor = {
            ".tag": "powerpoint_online"
        }, t.PaperWebEditor = {
            ".tag": "paper_web"
        }, t.UserActionEditorType = {
            GOOGLE_DOCS: t.GoogleDocsEditor,
            GOOGLE_SHEETS: t.GoogleSheetsEditor,
            GOOGLE_SLIDES: t.GoogleSlidesEditor,
            WORD_ONLINE: t.WordOnlineEditor,
            EXCEL_ONLINE: t.ExcelOnlineEditor,
            POWERPOINT_ONLINE: t.PowerpointOnlineEditor,
            PAPER_WEB: t.PaperWebEditor
        };
        var k = (function() {
            function e() {}
            return e
        })();
        t.UserActionPreOpenMessage = k;
        var G = (function() {
            function e() {}
            return e
        })();
        t.UserActionCreateMessage = G;
        var U = (function() {
            function e() {}
            return e
        })();
        t.UserActionPreviewMessage = U;
        var W = (function() {
            function e() {}
            return e
        })();
        t.UserActionLoadingSnackbarImpressionMessage = W;
        var B = (function() {
            function e() {}
            return e
        })();
        t.UserActionLoadingSnackbarOpenPreviewMessage = B;
        (function(e) {
            e.Impression = "impression", e.Yes = "yes", e.No = "no"
        })(t.PromptActionTypes || (t.PromptActionTypes = {}));
        (function(e) {
            e[e.GDD_INTEGRATION = 1] = "GDD_INTEGRATION", e[e.PAPER_INTEGRATION = 2] = "PAPER_INTEGRATION"
        })(t.CloudDocProviderIntegration || (t.CloudDocProviderIntegration = {})), t.IntegrationViewOnly = {
            ".tag": "view_only"
        }, t.IntegrationCreateAndEdit = {
            ".tag": "create_and_edit"
        }
    }), define("modules/clean/react/app_actions/app_actions_menu", ["require", "exports", "tslib", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, n, o, r) {
        "use strict";
        var i = this;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ExtensionsMenu = o.Loadable({
            loader: function() {
                return n.__awaiter(i, void 0, void 0, function() {
                    var t;
                    return n.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, r.waitForTTI()];
                            case 1:
                                return o.sent(), [4, new Promise(function(t, n) {
                                    e(["modules/clean/react/extensions/extensions_menu_component_wrapper"], t, n)
                                }).then(n.__importStar)];
                            case 2:
                                return t = o.sent().ExtensionsMenu, [2, t]
                        }
                    })
                })
            }
        }), t.UnconnectedExtensionsMenu = o.Loadable({
            loader: function() {
                return new Promise(function(t, n) {
                    e(["modules/clean/react/app_actions/unconnected_menu_wrapper"], t, n)
                }).then(n.__importStar).then(function(e) {
                    return e.UnconnectedMenu
                })
            }
        })
    }), define("modules/clean/react/app_actions/category", ["require", "exports", "modules/core/i18n"], function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {
            0: {
                displayName: n._("DEFAULT")
            },
            1: {
                displayName: n._("Send for signature"),
                developerDescription: n._("Send for signature")
            },
            2: {
                displayName: n._("PDF Editing"),
                developerDescription: n._("PDF editing")
            },
            3: {
                displayName: n._("View or Edit"),
                developerDescription: n._("View or edit")
            },
            4: {
                displayName: n._("Image Editing"),
                developerDescription: n._("Image editing")
            },
            5: {
                displayName: n._("Video comment"),
                developerDescription: n._("Video comment")
            },
            6: {
                displayName: n._("Send fax"),
                developerDescription: n._("Send fax")
            },
            8: {
                displayName: n._("Edit"),
                developerDescription: n._("Video Editing")
            },
            9: {
                displayName: n._("Send with"),
                developerDescription: n._("Send Files")
            },
            10: {
                displayName: n._("Cloud Editors"),
                developerDescription: n._("Cloud Editors")
            }
        };
        (function(e) {
            function t(e) {
                return o[e] || null
            }

            function n(e) {
                var n = t(e);
                return n && n.displayName
            }

            function r(e) {
                var n = t(e);
                return n && n.developerDescription || null
            }
            e.DEFAULT = 0, e.ESIGNATURE = 1, e.PDF_EDITING = 2, e.VIEW_OR_EDIT = 3, e.IMAGE_EDITING = 4, e.VIDEO_COMMENT = 5, e.SEND_FAX = 6, e.OPEN_WITH_CLOUD_DOC = 7, e.VIDEO_EDITING = 8, e.SEND_WITH = 9, e.CLOUD_EDITORS = 10, e.getDisplayName = n, e.getDeveloperDescription = r
        })(t.Category || (t.Category = {}))
    }), define("modules/clean/react/app_actions/feedback_modal", ["require", "exports", "tslib", "modules/clean/ajax", "react", "modules/clean/react/css", "modules/clean/react/image", "spectrum/button", "modules/core/i18n", "modules/clean/react/modal", "spectrum/input", "modules/clean/static_urls", "modules/clean/filepath", "modules/clean/file_store/utils", "spectrum/dropdown_menu", "dropins_sdk_refactor/dropins_sdk_internal", "modules/constants/dropins"], function(e, t, n, o, r, i, a, s, c, u, l, d, _, p, f, g, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), t.bugReport = c._("Report a problem"), t.suggestSomething = c._("Suggest something");
        var h = "extensions-feedback",
            S = [t.bugReport, t.suggestSomething],
            m = (function(e) {
                function i(n) {
                    var i = e.call(this, n) || this;
                    return i.submitFeedback = function() {
                        var e = i.state.detailsText;
                        if (i.state.screenshotLinks.length > 0) {
                            e += " (Screenshot links: " + i.state.screenshotLinks.join("; ") + ")"
                        }
                        if (i.state.category === t.bugReport) {
                            var n = "[Extensions]" + i.state.subjectText;
                            o.SilentBackgroundRequest({
                                url: "/support_ajax/support_form",
                                data: {
                                    user_email: i.props.user.email,
                                    subject_posted: n,
                                    details_posted: e
                                }
                            })
                        } else o.SilentBackgroundRequest({
                            url: "/aa/app_choice_feedback",
                            subject_user: i.props.user.id,
                            data: {
                                ext: i.getFileExt(),
                                other_suggested_apps: i.state.subjectText,
                                comments: e,
                                surface: i.props.surface || "unknown",
                                menu_contents: i.props.visibleMenuItems ? i.props.visibleMenuItems.join(", ") : ""
                            }
                        });
                        i.setState({
                            showThankYouModal: !0
                        })
                    }, i.handleSubjectChanged = function(e) {
                        i.setState({
                            subjectText: e.currentTarget.value.trim()
                        })
                    }, i.handleDetailsChanged = function(e) {
                        i.setState({
                            detailsText: e.currentTarget.value.trim()
                        })
                    }, i.handleChooseFromDropbox = function() {
                        g.Dropbox.choose({
                            linkType: "preview",
                            multiselect: !0,
                            success: function(e) {
                                var t = e.map(function(e) {
                                        return e.link
                                    }),
                                    n = e.map(function(e) {
                                        return e.name
                                    });
                                i.setState({
                                    screenshotLinks: t,
                                    attachmentNames: n
                                })
                            },
                            extensions: ["images", "video"]
                        })
                    }, i.isAnyFeedbackInput = function() {
                        return i.state.subjectText.length > 0 || i.state.detailsText.length > 0
                    }, i.handleCategoryChange = function(e) {
                        i.setState({
                            category: e
                        })
                    }, i.renderFeedbackModel = function() {
                        return r.default.createElement(u.Modal, {
                            className: h + "-modal",
                            ariaLabel: "Feedback Modal",
                            acceptButtonText: null,
                            style: "clean",
                            autoFocusPrimaryInput: !1,
                            width: 560
                        }, r.default.createElement("div", {
                            className: h + "-inputs"
                        }, r.default.createElement("div", {
                            className: h + "-title"
                        }, r.default.createElement("h1", {
                            className: h + "-modal-header"
                        }, c._("Send feedback"))), r.default.createElement("div", {
                            className: h + "-container"
                        }, r.default.createElement(f.DropdownMenu, {
                            id: "select--category",
                            className: h + "-category-selector",
                            onSelection: i.handleCategoryChange
                        }, r.default.createElement(f.DropdownMenuButton, {
                            fullWidth: !0,
                            className: "menu-button"
                        }, i.state.category), r.default.createElement(f.Menu, null, i.renderCategoryItems())), r.default.createElement("label", {
                            htmlFor: h + "-subject-input",
                            className: h + "-label"
                        }, c._("Subject")), r.default.createElement(l.Input, {
                            id: "subject-input",
                            className: h + "-subject-input",
                            onChange: i.handleSubjectChanged,
                            "aria-label": c._("subject input")
                        }), r.default.createElement("label", {
                            htmlFor: h + "-details-input",
                            className: h + "-label"
                        }, c._("Details")), r.default.createElement("textarea", {
                            id: "details-input",
                            className: h + "-details-input",
                            onChange: i.handleDetailsChanged,
                            "aria-label": c._("details input"),
                            rows: 4
                        }), r.default.createElement(s.Button, {
                            variant: "secondary",
                            className: h + "-screenshot-button",
                            onClick: i.handleChooseFromDropbox
                        }, c._("Add a screenshot")), i.renderSelectedScreenshot())), r.default.createElement("div", {
                            className: h + "-action-bar"
                        }, r.default.createElement(s.Button, {
                            variant: "secondary",
                            className: "action-bar-cancel-button",
                            onClick: i.props.onBack
                        }, c._("Cancel")), r.default.createElement("div", {
                            className: h + "-action-bar-space"
                        }), r.default.createElement(s.Button, {
                            variant: "primary",
                            className: "action-bar-submit-button",
                            disabled: !i.isAnyFeedbackInput(),
                            onClick: i.submitFeedback
                        }, c._("Submit"))))
                    }, i.renderThankYouModal = function() {
                        return r.default.createElement(u.Modal, {
                            className: h + "-thank-you-modal",
                            ariaLabel: "Feedback Modal",
                            acceptButtonText: null,
                            style: "clean"
                        }, r.default.createElement(a.Image, {
                            className: h + "-thank-you-image",
                            alt: c._("Thank you"),
                            src: d.static_url("/static/images/app_actions/feedback_comments-vfluWMAvS.png"),
                            srcHiRes: d.static_url("/static/images/app_actions/feedback_comments@2x-vflWa-9nT.png")
                        }), r.default.createElement("h1", {
                            className: h + "-thank-you-header"
                        }, c._("Thanks for letting us know!")), r.default.createElement("h2", {
                            className: h + "-thank-you-subtext"
                        }, c._("Your feedback will help make Dropbox even better.")))
                    }, i.state = {
                        category: t.bugReport,
                        subjectText: "",
                        detailsText: "",
                        screenshotLinks: [],
                        attachmentNames: [],
                        showThankYouModal: !1
                    }, g.Dropbox.init({
                        appKey: E.CHOOSER_APP_KEY
                    }), i
                }
                return n.__extends(i, e), i.prototype.getFileExt = function() {
                    var e = this.props.file;
                    return void 0 === e ? null : p.isSharedFile(e) && e.filename ? _.file_extension(e.filename) : p.isBrowseFile(e) && e.ext ? e.ext : ""
                }, i.prototype.renderCategoryItems = function() {
                    var e = this;
                    return S.map(function(t) {
                        return r.default.createElement(f.MenuItem, {
                            value: t,
                            key: t,
                            selected: e.state.category === t
                        }, t)
                    })
                }, i.prototype.renderSelectedScreenshot = function() {
                    return this.state.attachmentNames.map(function(e) {
                        return r.default.createElement("p", null, e)
                    })
                }, i.prototype.render = function() {
                    return this.state.showThankYouModal ? this.renderThankYouModal() : this.renderFeedbackModel()
                }, i
            })(r.default.Component);
        t.FeedbackModal = i.requireCssWithComponent(m, ["/static/css/app_actions/index-vflP_P0Ft.css"])
    }), define("modules/clean/react/extensions/client", ["require", "exports", "tslib", "external/lodash", "modules/clean/api_v2/user_client", "modules/clean/react/extensions/feature_flags", "modules/clean/react/extensions/file", "modules/clean/cloud_docs/cloud_doc_api_client", "modules/clean/cloud_docs/types"], function(e, t, n, o, r, i, a, s, c) {
        "use strict";

        function u(e) {
            return "app_id" in e
        }

        function l() {
            return _("", [])
        }

        function d(e, t) {
            return e.priority && t.priority ? t.priority - e.priority : e.priority ? -1 : t.priority ? 1 : e.description < t.description ? -1 : e.description > t.description ? 1 : 0
        }

        function _(e, t, n, o, r, i, a) {
            return void 0 === n && (n = g.DISABLED), void 0 === o && (o = {}), void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === a && (a = {
                openWithGddSupported: !1
            }), {
                fileId: e,
                actionCategories: t,
                displayState: n,
                bylines: o,
                featureFlags: r,
                sharingServiceInfo: i,
                cloudDocsInfo: a
            }
        }

        function p() {
            return h || (h = new E(new r.UserApiV2Client)), h
        }

        function f(e) {
            var t = {},
                n = {};
            e.actions.forEach(function(e) {
                !t[e.id] && e.app_id && (t[e.id] = e, n[e.app_id] = e.icon)
            });
            var o = {};
            e.action_mapping.forEach(function(e) {
                var n = e.matcher;
                if ("extension" === n[".tag"]) {
                    var r = n.extension,
                        i = new Map;
                    e.action_ids.forEach(function(e) {
                        var n = t[e],
                            o = i.get(n.category);
                        o ? o.push(n.id) : (o = [n.id], i.set(n.category, o))
                    }), o[r] = i
                }
            });
            var r = {};
            return e.bylines.forEach(function(e) {
                var t = e.extension_id[".tag"];
                u(e.extension_id) && (t = e.extension_id.app_id), r[t] = e.byline
            }), {
                actionIdToAppAction: t,
                appActionAppIcons: n,
                bylines: r,
                categoryMapsByExt: o,
                featureFlags: i.parseFeatureFlags(e.stormcrow_assignments)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), t.isAppId = u;
        var g;
        (function(e) {
            e[e.LOADING = 0] = "LOADING", e[e.DISABLED = 1] = "DISABLED", e[e.ENABLED = 2] = "ENABLED"
        })(g = t.DisplayState || (t.DisplayState = {})), t.emptyExtensionsConfig = l, t.actionCompareFn = d, t.newExtensionsConfig = _;
        var E = (function() {
            function e(e) {
                this.trackedFiles = new Map, this.loaded = !1, this.state = {
                    actions: [],
                    actionMapping: [],
                    categoryInfos: [],
                    bylines: {},
                    featureFlags: {},
                    sharingServiceInfo: {},
                    cloudDocsInfo: {
                        openWithGddSupported: !1
                    },
                    actionIdToAppAction: {},
                    appActionAppIcons: {},
                    appActionsEnabled: !1,
                    categoryMapsByExt: {}
                }, this.parseCategoryActionGroupsFromState = o.memoize(function(e) {
                    var t = {},
                        n = function(n) {
                            if (e.categoryMapsByExt.hasOwnProperty(n)) {
                                var o = new Array;
                                e.categoryMapsByExt[n].forEach(function(t, n) {
                                    var r = t.map(function(t) {
                                        return e.actionIdToAppAction[t]
                                    }).sort(d);
                                    o.push({
                                        categoryId: n,
                                        actions: r
                                    })
                                }), t[n] = o
                            }
                        };
                    for (var o in e.categoryMapsByExt) n(o);
                    return t
                }), this.client = e
            }
            return e.prototype.getActionsForFile = function(e, t) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var o;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.getActionsForFileBatch([e], t)];
                            case 1:
                                return o = n.sent(), [2, o[e.file_id] || l()]
                        }
                    })
                })
            }, e.prototype.getActionsForFileBatch = function(e, t) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var o;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.loadState(t)];
                            case 1:
                                return o = n.sent(), [2, this.getExtensionsConfigsForFiles(o, e)]
                        }
                    })
                })
            }, e.prototype.getAppIcons = function() {
                return n.__assign({}, this.state.appActionAppIcons)
            }, e.prototype.refreshAppIcons = function(e) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var t, o, r, i, a;
                    return n.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                t = void 0, o = this.iconRequest, s.label = 1;
                            case 1:
                                return s.trys.push([1, 6, , 7]), o ? [4, o] : [3, 3];
                            case 2:
                                return t = s.sent(), [3, 5];
                            case 3:
                                return r = Object.keys(this.state.appActionAppIcons), o = this.client.ns("app_actions").rpc("get_app_icons", {
                                    app_ids: r
                                }, {
                                    subjectUserId: e
                                }), this.iconRequest = o, [4, o];
                            case 4:
                                t = s.sent(), s.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                return i = s.sent(), [3, 7];
                            case 7:
                                return this.iconRequest = void 0, t && (a = n.__assign({}, this.state.appActionAppIcons), t.icons.forEach(function(e) {
                                    a[e.app_id] = e.icon
                                }), this.state = n.__assign({}, this.state, {
                                    appActionAppIcons: a
                                })), [2]
                        }
                    })
                })
            }, e.prototype.getFeatureFlags = function() {
                return this.state.featureFlags
            }, e.prototype.updateLinkStateForAction = function(e, t) {
                for (var o = this.state.actions, r = 0, i = o; r < i.length; r++) {
                    var a = i[r];
                    a.id === e && (a.link_state = t)
                }
                this.state = n.__assign({}, this.state, {
                    actions: o
                })
            }, e.prototype.extensionsConfigsForTrackedFiles = function() {
                var e = [];
                return this.trackedFiles.forEach(function(t) {
                    return e.push(t)
                }), this.getExtensionsConfigsForFiles(this.state, e)
            }, e.prototype.loadState = function(e) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var t, o, r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (this.loaded) return [3, 4];
                                this.stateRequest || (this.stateRequest = this.fetchActions(e)), t = this.stateRequest, n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), o = this, [4, this.stateRequest];
                            case 2:
                                return o.state = n.sent(), [3, 4];
                            case 3:
                                return r = n.sent(), this.stateRequest === t && (this.stateRequest = void 0), [3, 4];
                            case 4:
                                return [2, this.state]
                        }
                    })
                })
            }, e.prototype.getExtensionsConfigsForFiles = function(e, t) {
                var n = this,
                    o = {},
                    r = this.parseCategoryActionGroupsFromState(e);
                return t.forEach(function(t) {
                    var i = a.getFileExt(t),
                        s = void 0;
                    i && (s = r[i]), o[t.file_id] = _(t.file_id, s || [], e.appActionsEnabled && !t.is_dir ? g.ENABLED : g.DISABLED, e.bylines, e.featureFlags, e.sharingServiceInfo, e.cloudDocsInfo), n.trackedFiles.set(t.file_id, t)
                }), o
            }, e.prototype.fetchActions = function(e) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var t, o, r, i, a, s, c;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), t = this.client.ns("app_actions").rpc("get_actions_for_user", {
                                    include_cloud_editors: !0
                                }, {
                                    subjectUserId: e
                                }), [4, Promise.all([t, this.refreshSharingServiceInfo(e), this.getCloudDocsInfo(e)])];
                            case 1:
                                return o = n.sent(), r = o[0], i = o[1], a = o[2], s = f(r), this.loaded = !0, [2, {
                                    actions: r.actions,
                                    actionMapping: r.action_mapping,
                                    categoryInfos: r.category_infos,
                                    bylines: s.bylines,
                                    featureFlags: s.featureFlags,
                                    sharingServiceInfo: i,
                                    cloudDocsInfo: a,
                                    appActionsEnabled: !0,
                                    actionIdToAppAction: s.actionIdToAppAction,
                                    appActionAppIcons: s.appActionAppIcons,
                                    categoryMapsByExt: s.categoryMapsByExt
                                }];
                            case 2:
                                if (c = n.sent(), c.error && "feature_gated" === c.error[".tag"]) return this.loaded = !0, [2, this.state];
                                throw c;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.getCloudDocsInfo = function(e) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var t, o, r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                t = {
                                    openWithGddSupported: !1
                                }, n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, s.getTeamSettings(e)];
                            case 2:
                                return o = n.sent(), t.openWithGddSupported = o.settings[c.CloudDocProviderIntegration.GDD_INTEGRATION][".tag"] === c.IntegrationCreateAndEdit[".tag"], [3, 4];
                            case 3:
                                return r = n.sent(), r.error && "not_in_team" === r.error[".tag"] && (t.openWithGddSupported = !0), [3, 4];
                            case 4:
                                return [2, t]
                        }
                    })
                })
            }, e.prototype.getSharingServiceInfo = function() {
                return n.__assign({}, this.state.sharingServiceInfo)
            }, e.prototype.getActions = function() {
                return this.state.actions
            }, e.prototype.getActionMapping = function() {
                return this.state.actionMapping
            }, e.prototype.getBylines = function() {
                return this.state.bylines
            }, e.prototype.getCategoryInfos = function() {
                return this.state.categoryInfos
            }, e.prototype.getCloudDocsInfoState = function() {
                return this.state.cloudDocsInfo
            }, e.prototype.refreshSharingServiceInfo = function(e) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var t, o, r;
                    return n.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (void 0 !== this.sharingServiceReq) return [2, this.sharingServiceReq];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, this.client.ns("profile_services").rpc("list_services", void 0, {
                                    subjectUserId: e
                                })];
                            case 2:
                                return t = i.sent(), o = {}, t.services.forEach(function(e) {
                                    o[e.service_type[".tag"]] = e
                                }), this.state = n.__assign({}, this.state, {
                                    sharingServiceInfo: o
                                }), [2, o];
                            case 3:
                                return r = i.sent(), this.sharingServiceReq = void 0, [2, {}];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e
        })();
        t.Client = E;
        var h;
        t.getExtensionsClient = p
    }),
    define("modules/clean/react/extensions/connect_flow", ["require", "exports", "tslib", "modules/clean/integrations/link_service", "modules/clean/integrations/log_event", "deep-integrations/platform/log_event", "deep-integrations/instrumentation/common_context", "deep-integrations/instrumentation/constants", "deep-integrations/instrumentation/connect_service_flow_wrapper"], function(e, t, n, o, r, i, a, s, c) {
        "use strict";

        function u(e, t) {
            return new Promise(function(n) {
                return t({
                    user: e,
                    onRefresh: n
                })
            })
        }

        function l(e, t) {
            return t in e && "is_connected" === e[t].connection_state[".tag"]
        }

        function d(e, t, d, _, p, f) {
            return n.__awaiter(this, void 0, Promise, function() {
                var g, E, h, S, m;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (l(t, _)) return [2, !0];
                            g = i.withDefaults(r.createIntegrationsActionsLogger().logEvent, {
                                extra: a.getCommonContextExtra({
                                    serviceList: Object.keys(t).map(function(e) {
                                        return t[e]
                                    })
                                })
                            }), E = t[_], E && g(c.buildStartEvent(E, p, s.InstrConnectServiceFlowOutcome.Connected)), n.label = 1;
                        case 1:
                            return n.trys.push([1, 4, , 5]), [4, o.linkService(e.id, _, f)];
                        case 2:
                            return n.sent(), [4, u(e, d)];
                        case 3:
                            return h = n.sent(), S = l(h, _), E && g(S ? c.buildEndEvent(E, p, s.InstrConnectServiceFlowOutcome.Connected, s.InstrConnectServiceFlowOutcome.Connected) : c.buildEndEvent(E, p, s.InstrConnectServiceFlowOutcome.Connected, s.InstrConnectServiceFlowOutcome.Error)), [2, S];
                        case 4:
                            throw m = n.sent(), E && g(c.buildEndEvent(E, p, s.InstrConnectServiceFlowOutcome.Connected, s.InstrConnectServiceFlowOutcome.Error, {
                                error: JSON.stringify(m)
                            })), m;
                        case 5:
                            return [2]
                    }
                })
            })
        }

        function _(e, t, n, o, r, i) {
            d(e, t, n, "zoom", r, i).then(function(e) {
                e && o()
            })
        }

        function p(t, o, r, i, a, s) {
            var c = this;
            d(t, o, r, "slack_dropbox", a, s).then(function(o) {
                return n.__awaiter(c, void 0, void 0, function() {
                    var r;
                    return n.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return o ? [4, new Promise(function(t, n) {
                                    e(["modules/clean/integrations/send_to_slack"], t, n)
                                }).then(n.__importStar)] : [3, 2];
                            case 1:
                                r = a.sent().showSendToSlackModal, r(t, i), a.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            })
        }

        function f(t, o, r, i, a, s) {
            var c = this;
            d(t, o, r, "trello", a, s).then(function(o) {
                return n.__awaiter(c, void 0, void 0, function() {
                    var r;
                    return n.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return o ? [4, new Promise(function(t, n) {
                                    e(["modules/clean/integrations/share_to_trello"], t, n)
                                }).then(n.__importStar)] : [3, 2];
                            case 1:
                                r = a.sent().showShareToTrelloModal, r(t, i), a.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.presentInZoomFlow = _, t.shareInSlackFlow = p, t.shareInTrelloFlow = f
    }), define("modules/clean/react/extensions/data/action_creators", ["require", "exports", "tslib", "modules/clean/react/extensions/client", "modules/clean/react/extensions/data/types", "modules/clean/integrations/data/actions"], function(e, t, n, o, r, i) {
        "use strict";

        function a(e) {
            var t = e.onRefresh;
            return function(e, n, o) {
                var a = t && function(e) {
                    "fulfilled" === e.state ? t(r.convertToSharingServiceInfo(e.value)) : t()
                };
                i.fetchListServices(a)(e, n, o)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.updateExtensionConfigWithNewFiles = function(e) {
            var i = e.files,
                a = e.user;
            return function(e) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var s, c, u, l, d, _, p, f, g;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, o.getExtensionsClient().getActionsForFileBatch(i, a.id)];
                            case 1:
                                return s = n.sent(), c = o.getExtensionsClient().getFeatureFlags(), e(t.setExtensionsFeatureFlags({
                                    featureFlags: c
                                })), u = o.getExtensionsClient().getAppIcons(), e({
                                    type: r.ActionTypes.REFRESH_ICONS,
                                    payload: {
                                        icons: u
                                    }
                                }), l = o.getExtensionsClient().getSharingServiceInfo(), e({
                                    type: r.ActionTypes.SET_SHARING_SERVICE_INFO_STATE,
                                    payload: {
                                        sharingServiceInfo: l
                                    }
                                }), e({
                                    type: r.ActionTypes.UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES,
                                    payload: {
                                        fileExtensionsConfigs: s
                                    }
                                }), d = o.getExtensionsClient().getActions(), _ = o.getExtensionsClient().getActionMapping(), p = o.getExtensionsClient().getBylines(), f = o.getExtensionsClient().getCategoryInfos(), g = o.getExtensionsClient().getCloudDocsInfoState(), e(t.updateExtensionsState({
                                    actions: d,
                                    actionMapping: _,
                                    bylines: p,
                                    categoryInfos: f
                                })), e(t.setCloudDocsInfoState({
                                    cloudDocsInfo: g
                                })), [2]
                        }
                    })
                })
            }
        }, t.setExtensionsFeatureFlags = function(e) {
            var t = e.featureFlags;
            return {
                type: r.ActionTypes.SET_EXTENSIONS_FEATURE_FLAGS,
                payload: {
                    featureFlags: t
                }
            }
        }, t.refreshAppIcons = function(e) {
            var t = e.user;
            return function(e) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var i;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, o.getExtensionsClient().refreshAppIcons(t.id)];
                            case 1:
                                return n.sent(), i = o.getExtensionsClient().getAppIcons(), e({
                                    type: r.ActionTypes.REFRESH_ICONS,
                                    payload: {
                                        icons: i
                                    }
                                }), [2]
                        }
                    })
                })
            }
        }, t.updateLinkState = function(e) {
            var r = e.actionId,
                i = e.linkState;
            return function(e) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var a, s, c, u, l;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, o.getExtensionsClient()];
                            case 1:
                                return a = n.sent(), a.updateLinkStateForAction(r, i), s = a.getActions(), c = a.getActionMapping(), u = a.getBylines(), l = a.getCategoryInfos(), e(t.updateExtensionsState({
                                    actions: s,
                                    actionMapping: c,
                                    bylines: u,
                                    categoryInfos: l
                                })), [2]
                        }
                    })
                })
            }
        }, t.refreshSharingServiceInfo = function(e) {
            var t = e.user,
                i = e.onRefresh;
            return function(e) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var a, s, c;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return a = o.getExtensionsClient(), [4, a.refreshSharingServiceInfo(t.id)];
                            case 1:
                                return n.sent(), [4, o.getExtensionsClient().getSharingServiceInfo()];
                            case 2:
                                return s = n.sent(), i && i(s), e({
                                    type: r.ActionTypes.SET_SHARING_SERVICE_INFO_STATE,
                                    payload: {
                                        sharingServiceInfo: s
                                    }
                                }), c = a.extensionsConfigsForTrackedFiles(), e({
                                    type: r.ActionTypes.UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES,
                                    payload: {
                                        fileExtensionsConfigs: c
                                    }
                                }), [2]
                        }
                    })
                })
            }
        }, t.refreshSharingServiceInfoAdapter = a, t.setInDownloadInterceptFlow = function(e) {
            var t = e.inDownloadInterceptFlow;
            return {
                type: r.ActionTypes.SET_IN_DOWNLOAD_INTERCEPT_FLOW,
                payload: {
                    inDownloadInterceptFlow: t
                }
            }
        }, t.updateExtensionsState = function(e) {
            var t = e.actions,
                n = e.actionMapping,
                o = e.bylines,
                i = e.categoryInfos;
            return {
                type: r.ActionTypes.UPDATE_EXTENSIONS_STATE,
                payload: {
                    actions: t,
                    actionMapping: n,
                    bylines: o,
                    categoryInfos: i
                }
            }
        }, t.setCloudDocsInfoState = function(e) {
            var t = e.cloudDocsInfo;
            return {
                type: r.ActionTypes.SET_CLOUD_DOCS_INFO_STATE,
                payload: {
                    cloudDocsInfo: t
                }
            }
        }
    }), define("modules/clean/react/extensions/data/reducer", ["require", "exports", "tslib", "modules/clean/react/extensions/data/types"], function(e, t, n, o) {
        "use strict";

        function r(e, n) {
            switch (void 0 === e && (e = t.defaultExtensionsState), n.type) {
                case o.ActionTypes.UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES:
                    return i(e, n);
                case o.ActionTypes.SET_EXTENSIONS_FEATURE_FLAGS:
                    return a(e, n);
                case o.ActionTypes.REFRESH_ICONS:
                    return s(e, n);
                case o.ActionTypes.SET_SHARING_SERVICE_INFO_STATE:
                    return c(e, n);
                case o.ActionTypes.SET_IN_DOWNLOAD_INTERCEPT_FLOW:
                    return u(e, n);
                case o.ActionTypes.UPDATE_EXTENSIONS_STATE:
                    return l(e, n);
                case o.ActionTypes.SET_CLOUD_DOCS_INFO_STATE:
                    return d(e, n)
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultExtensionsState = {
            actionMapping: [],
            actions: [],
            categoryInfos: [],
            bylines: {},
            featureFlags: {},
            appIcons: {},
            inDownloadInterceptFlow: !1,
            fileExtensionsConfigs: {},
            sharingServiceInfo: {},
            cloudDocsInfo: {
                openWithGddSupported: !1
            }
        };
        var i = function(e, t) {
                var o = t.payload.fileExtensionsConfigs;
                return n.__assign({}, e, {
                    fileExtensionsConfigs: n.__assign({}, e.fileExtensionsConfigs, o)
                })
            },
            a = function(e, t) {
                var o = t.payload.featureFlags;
                return n.__assign({}, e, {
                    featureFlags: o
                })
            },
            s = function(e, t) {
                var o = t.payload.icons;
                return n.__assign({}, e, {
                    appIcons: o
                })
            },
            c = function(e, t) {
                var o = t.payload.sharingServiceInfo;
                return n.__assign({}, e, {
                    sharingServiceInfo: o
                })
            },
            u = function(e, t) {
                var o = t.payload.inDownloadInterceptFlow;
                return n.__assign({}, e, {
                    inDownloadInterceptFlow: o
                })
            },
            l = function(e, t) {
                return n.__assign({}, e, t.payload)
            },
            d = function(e, t) {
                var o = t.payload.cloudDocsInfo;
                return n.__assign({}, e, {
                    cloudDocsInfo: o
                })
            };
        t.extensionsReducer = r
    }), define("modules/clean/react/extensions/data/selectors", ["require", "exports", "tslib", "modules/clean/redux/namespaces", "modules/clean/redux/selectors", "modules/clean/react/extensions/data/reducer", "modules/clean/react/extensions/client", "modules/clean/integrations/data/selectors", "modules/clean/react/extensions/data/types", "modules/clean/react/extensions/file"], function(e, t, n, o, r, i, a, s, c, u) {
        "use strict";

        function l(e, n) {
            return t.getExtensionsState(e).fileExtensionsConfigs[n] || a.emptyExtensionsConfig()
        }

        function d(e, o) {
            var r = _(e, o),
                i = {},
                s = [];
            r.forEach(function(e) {
                var t = i[e.category];
                void 0 !== t ? t.push(e) : (s.push(e.category), i[e.category] = [e])
            });
            var c = [];
            s.forEach(function(e) {
                var t = i[e].sort(a.actionCompareFn);
                c.push({
                    categoryId: e,
                    actions: t
                })
            });
            var u = l(e, o.file_id);
            return n.__assign({}, u, {
                actionCategories: c,
                cloudDocsInfo: t.getCloudDocInfo(e)
            })
        }

        function _(e, n) {
            return t.getActionsForFileImpl(n, t.getActions(e))
        }

        function p(e, t) {
            return _(e, t).map(function(e) {
                return e.id
            }).filter(function(e) {
                return e.startsWith("fp_action_id:")
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getExtensionsState = function(e) {
            return r.getStateAtNamespace(e, o.EXTENSIONS_NAMESPACE_KEY) || i.defaultExtensionsState
        }, t.fileExtensionsConfigs = function(e) {
            return t.getExtensionsState(e).fileExtensionsConfigs
        }, t.getFeatureFlags = function(e) {
            return t.getExtensionsState(e).featureFlags
        }, t.getConfigForFileId = l, t.getConfigForFile = d, t.getAppIcons = function(e) {
            return t.getExtensionsState(e).appIcons
        }, t.sharingServiceInfo = function(e) {
            return t.getExtensionsState(e).sharingServiceInfo
        }, t.getSharingServiceInfoAdapter = function(e) {
            var t = s.getListServicesInfo(e).latestListServicesResult;
            return t && c.convertToSharingServiceInfo(t)
        }, t.inDownloadInterceptFlow = function(e) {
            return t.getExtensionsState(e).inDownloadInterceptFlow
        }, t.getCloudDocInfo = function(e) {
            return t.getExtensionsState(e).cloudDocsInfo
        }, t.getActions = function(e) {
            return t.getExtensionsState(e).actions
        }, t.getBylines = function(e) {
            return t.getExtensionsState(e).bylines
        }, t.getCategoryInfos = function(e) {
            return t.getExtensionsState(e).categoryInfos
        }, t.getActionsForFileImpl = function(e, t) {
            return e.is_dir ? [] : void 0 === t ? [] : t.filter(function(t) {
                return void 0 === t.filters || t.filters.every(function(t) {
                    return "matcher_any" === t[".tag"] && !!t.matcher_any.some(function(t) {
                        if ("extension" === t[".tag"]) {
                            var n = u.getFileExt(e);
                            return t.extension === n
                        }
                        return "max_size_bytes" !== t[".tag"] || e.bytes <= t.max_size_bytes
                    })
                })
            })
        }, t.getActionsForFile = _, t.getFirstPartyActionIds = p
    }), define("modules/clean/react/extensions/data/store", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/extensions/data/action_creators", "modules/clean/redux/store", "modules/clean/redux/namespaces", "modules/clean/react/extensions/data/reducer", "modules/clean/integrations/data/store"], function(e, t, n, o, r, i, a, s, c) {
        "use strict";

        function u(e, n) {
            var o = t.getStore();
            return c.initStoreForIntegration(e.id), n && o.dispatch(r.updateExtensionConfigWithNewFiles({
                user: e,
                files: n
            })), o
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), t.getStore = o.once(function() {
            var e;
            return c.registerReducersForIntegration(), i.getStoreAndRegisterReducers((e = {}, e[a.EXTENSIONS_NAMESPACE_KEY] = s.extensionsReducer, e))
        }), t.initializeStore = u
    }), define("modules/clean/react/extensions/data/types", ["require", "exports"], function(e, t) {
        "use strict";

        function n(e) {
            try {
                var t = {};
                return e.services.forEach(function(e) {
                    t[e.service_type[".tag"]] = e
                }), t
            } catch (e) {}
            return {}
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        (function(e) {
            e.UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES = "EXTENSIONS/UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES", e.SET_EXTENSIONS_FEATURE_FLAGS = "EXTENSIONS/SET_EXTENSIONS_FEATURE_FLAGS", e.REFRESH_ICONS = "EXTENSIONS/REFRESH_ICONS", e.UPDATE_LINK_STATE = "EXTENSIONS/UPDATE_LINK_STATE", e.SET_SHARING_SERVICE_INFO_STATE = "EXTENSIONS/SET_SHARING_SERVICE_INFO_STATE", e.SET_IN_DOWNLOAD_INTERCEPT_FLOW = "EXTENSIONS/SET_IN_DOWNLOAD_INTERCEPT_FLOW", e.UPDATE_EXTENSIONS_STATE = "EXTENSIONS/UPDATE_EXTENSIONS_STATE", e.SET_CLOUD_DOCS_INFO_STATE = "EXTENSIONS/SET_CLOUD_DOCS_INFO_STATE"
        })(t.ActionTypes || (t.ActionTypes = {}));
        (function(e) {
            e.PrimaryButton = "primary_button", e.SecondaryButton = "secondary_button", e.SidebarLink = "sidebar_link", e.SidebarPrimaryButton = "sidebar_primary_button", e.CollapsedButton = "collapsed_button"
        })(t.TriggerType || (t.TriggerType = {})), t.convertToSharingServiceInfo = n
    }), define("modules/clean/react/extensions/feature_flags", ["require", "exports"], function(e, t) {
        "use strict";

        function n() {
            var e = [];
            for (var t in r)
                if (r.hasOwnProperty(t)) {
                    var n = t;
                    e.push([n, r[n]])
                }
            return e
        }

        function o(e) {
            var t = {};
            return n().forEach(function(n) {
                var o = n[0],
                    r = n[1],
                    i = e[r];
                void 0 !== i && (t[o] = i)
            }), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            testFlag: "test_gated_feature",
            expSplitShareBtn: "extensions_split_share_btn",
            expGmailAction: "extensions_gmail_action",
            expDownloadIntercept: "extensions_download_intercept",
            expMenuScaling: "extensions_menu_scaling",
            expSFADialog: "extensions_auth_v2",
            cloudEditorsEnabled: "app_actions_cloud_editors"
        };
        t.parseFeatureFlags = o
    }), define("modules/clean/react/extensions/file", ["require", "exports", "modules/clean/filepath"], function(e, t, n) {
        "use strict";

        function o(e) {
            return void 0 !== e.ext
        }

        function r(e) {
            return void 0 !== e.fq_path
        }

        function i(e) {
            return void 0 !== e.filename
        }

        function a(e) {
            return o(e) ? e.ext : r(e) ? "." + n.file_extension(n.filename(e.fq_path)) : i(e) ? "." + n.file_extension(e.filename) : void 0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasExt = o, t.hasFqPath = r, t.hasFilename = i, t.getFileExt = a
    });
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
};
define("modules/clean/react/extensions/split_share_button", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SplitShareButton = n.Loadable({
        loader: function() {
            return new Promise(function(t, n) {
                e(["modules/clean/react/extensions/split_share_button_component"], t, n)
            }).then(__importStar).then(function(e) {
                return e.SplitShareButton
            })
        }
    })
}), define("modules/clean/react/extensions/tooltips", ["require", "exports", "modules/core/i18n"], function(e, t, n) {
    "use strict";

    function o(e) {
        switch (e) {
            case "open_with_edu":
                return {
                    ".tag": e
                };
            case "split_share_edu":
                return {
                    ".tag": e
                };
            case "edit_experiment_image":
                return {
                    ".tag": e
                };
            case "edit_experiment_pdf":
                return {
                    ".tag": e
                };
            case "download_intercept_image":
                return {
                    ".tag": e
                };
            case "download_intercept_pdf":
                return {
                    ".tag": e
                };
            case "upload_intercept_image":
                return {
                    ".tag": e
                };
            case "upload_intercept_pdf":
                return {
                    ".tag": e
                };
            case "desktop_notification":
                return {
                    ".tag": e
                };
            case "other":
                return {
                    ".tag": e
                }
        }
    }

    function r(e, t) {
        return s.filter(function(n) {
            return a[n]({
                hasExtensions: e.actionCategories.length > 0,
                fileExt: t,
                featureFlags: e.featureFlags
            })
        })
    }

    function i(e, t, n) {
        return s.filter(function(o) {
            return a[o]({
                hasExtensions: e,
                fileExt: t,
                featureFlags: n
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.tooltipFromName = o;
    var a = {
            open_with_edu: function(e) {
                return e.hasExtensions
            },
            split_share_edu: function(e) {
                return "ON" === e.featureFlags.expSplitShareBtn
            },
            download_intercept_image: function(e) {
                var t = e.hasExtensions,
                    n = e.fileExt,
                    o = e.featureFlags;
                return t && "ON" === o.expDownloadIntercept && [".jpg", ".png", ".jpeg"].indexOf(n) !== -1
            },
            download_intercept_pdf: function(e) {
                var t = e.hasExtensions,
                    n = e.fileExt,
                    o = e.featureFlags;
                return t && "ON" === o.expDownloadIntercept && ".pdf" === n
            },
            upload_intercept_image: function() {
                return !1
            },
            upload_intercept_pdf: function() {
                return !1
            },
            edit_experiment_pdf: function() {
                return !1
            },
            edit_experiment_image: function() {
                return !1
            },
            desktop_notification: function() {
                return !1
            },
            other: function() {
                return !1
            }
        },
        s = ["open_with_edu", "split_share_edu", "download_intercept_pdf", "download_intercept_image", "desktop_notification"];
    t.allowedTooltipsForConfig = r, t.allowedTooltipsForConfigV2 = i;
    (function(e) {
        e.TOOLTIP_CONFIGS = {
            open_with_edu: {
                tooltipTitle: n._("Do more with your files"),
                tooltipMessage: n._("Work on this file in other apps. Updates you make will automatically save back to Dropbox.")
            },
            download_intercept_pdf: {
                tooltipTitle: n._("No need to download"),
                tooltipMessage: n._("Edit, annotate, fax, or sign PDFs in your browser.")
            }
        }, e.EDU_SPLIT_SHARE_MAP = {
            CONTROL: {
                tooltipTitle: n._("Extend the power of Dropbox"),
                tooltipMessage: n._("Now you can send files to Slack or present in Zoom without leaving Dropbox.")
            }
        }
    })(t.EduTooltipExperiment || (t.EduTooltipExperiment = {}))
}), define("modules/clean/react/extensions/utils", ["require", "exports"], function(e, t) {
    "use strict";

    function n(e, n, o) {
        var r = !!e.expSplitShareBtn && ("ON" === e.expSplitShareBtn || "ON_SHOW_INVITE" === e.expSplitShareBtn),
            i = !o.is_dir && (t.isSlackAvailable(n) || t.isZoomAvailable(n)),
            a = t.isTrelloAvailable(n);
        return r && (i || a)
    }

    function o(e, n, o) {
        return !o.is_dir && (t.isSlackAvailable(n) || t.isZoomAvailable(n)) && !!e.expSplitShareBtn && "CONTROL" === e.expSplitShareBtn
    }

    function r(e, t) {
        return t in e && "enabled" === e[t].service_availability[".tag"]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shouldShowSplitShare = n, t.shouldShowOpenWithShare = o, t.isSlackAvailable = function(e) {
        return r(e, "slack_dropbox")
    }, t.isZoomAvailable = function(e) {
        return r(e, "zoom")
    }, t.isTrelloAvailable = function(e) {
        return r(e, "trello")
    }
});
//# sourceMappingURL=pkg-extensions.min.js-vflBZ-6sL.map