define("modules/clean/browse/browse_bolt_client", ["require", "exports", "modules/clean/bolt", "modules/clean/react/browse/constants", "modules/clean/api_v2/user_client", "modules/core/exception"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (function() {
        function e(e) {
            var t = this;
            this.startLiveUpdate = function(e) {
                void 0 === e && (e = null), e && (t.handleUpdate = e), t.updateBoltClient(), t.status = o.BrowseBoltClientStatus.Live
            }, this.onBoltRefresh = function() {
                t.updateBoltClient(), t.status = o.BrowseBoltClientStatus.Live
            }, this.onBoltUpdate = function() {
                t.handleUpdate && t.handleUpdate()
            }, this.updateBoltClient = function() {
                var e = t.boltData.map(function(e) {
                    return new r.SignedChannelState("sfj", e.bolt_unique_id, e.latest_sjid.toString(), e.bolt_token)
                });
                t.boltClient ? t.boltClient.update_states(e) : (t.boltClient = new r.BoltClient(e, t.onBoltUpdate, t.onBoltRefresh), t.boltClient.start())
            }, this.userId = e, this.status = o.BrowseBoltClientStatus.NotReady, this.boltData = []
        }
        return e.prototype.isReady = function() {
            return this.status !== o.BrowseBoltClientStatus.NotReady
        }, e.prototype.setInitialBoltData = function(e) {
            this.boltData = e, this.status = o.BrowseBoltClientStatus.NotLive
        }, e.prototype.fetchInitialBoltData = function(e) {
            var t = this;
            this.initialBoltDataRequest && this.initialBoltDataRequest.abort(), (new n.UserApiV2Client).ns("files").rpc("get_browse_bolt_data", {}, {
                subjectUserId: this.userId
            }).then(function(r) {
                void 0 === r.bolt_token_response && i.reportException({
                    err: new Error("Receieve empty bolt token response from /get_browse_bolt_data"),
                    severity: "non-critical",
                    tags: ["js:browse"]
                });
                var o = r.bolt_token_response || [],
                    n = [];
                o.forEach(function(e) {
                    n.push({
                        bolt_token: e.bolt_token || "",
                        bolt_unique_id: e.bolt_unique_id || "",
                        latest_sjid: (e.latest_sjid || 0).toString()
                    })
                }), t.setInitialBoltData(n), e()
            }, function(e) {
                t.status = o.BrowseBoltClientStatus.NotReady, i.reportException({
                    err: new Error("Error getting bolt data from /get_browse_bolt_data"),
                    severity: "non-critical",
                    tags: ["js:browse"]
                })
            }).finally(function() {
                delete t.initialBoltDataRequest
            })
        }, e.prototype.handleUpdateBoltClient = function(e) {
            this.boltData = e, this.updateBoltClient()
        }, e.prototype.getNsMap = function() {
            var e = {};
            return this.boltData.forEach(function(t) {
                e[t.bolt_unique_id] = parseInt(t.latest_sjid, 10)
            }), e
        }, e.prototype.stopLiveUpdate = function() {
            this.status = o.BrowseBoltClientStatus.NotLive, this.boltClient && this.boltClient.unsubscribe()
        }, e
    })();
    t.BrowseBoltClient = a
}), define("modules/clean/cloud_docs/create_api", ["require", "exports", "tslib", "modules/clean/api_v2/user_client", "modules/clean/cloud_docs/constants", "modules/clean/cloud_docs/create_pointer_modal", "modules/clean/cloud_docs/event_logging", "modules/clean/cloud_docs/types", "modules/clean/filepath", "modules/clean/logging/hive/schemas/web-modal-activity", "modules/clean/react/async_file_modal_controller", "modules/clean/react/folder_dialog/async", "modules/clean/react/modal", "modules/clean/react/snackbar", "modules/clean/react/browse/api", "modules/clean/react/browse/action_logger", "modules/clean/web_user_action_events", "modules/core/browser", "modules/core/cookies", "modules/core/i18n", "spectrum/util/uuid_generator"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E) {
    "use strict";
    var w = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), l = r.__importStar(l), d = r.__importStar(d), u = r.__importStar(u), h = r.__importStar(h), S = r.__importStar(S);
    var b = v._("Create file in..."),
        T = v._("Create shortcut in..."),
        F = v._("Create");
    t.CloudDocSnackbarId = "create-cloud-doc", t.getDepthFromPath = function(e) {
        return (e.replace(/\/$/, "").match(/\//g) || []).length
    }, t.logCreateFileSuccessCallback = function(e, t) {
        return function(r) {
            f.logFileCreateSuccess({
                uid: r.userId,
                document_type: r.documentType,
                time_elapsed: Date.now() - e,
                open_id: t
            }), a.logUserAction({
                actionEvent: s.UserActionEventType.CREATE,
                userId: r.userId,
                docPathOrId: r.fq_path,
                actionSource: r.action_source,
                data: {
                    webOpenId: t
                }
            })
        }
    }, t.showAsyncFolderDialog = function(e) {
        var r = e.user,
            o = e.source,
            i = e.documentType,
            a = n.isPointerFileType(i) ? T : b;
        u.showFolderDialog({
            modalName: c.ModalName.CLOUD_DOCS_CREATE,
            user: r,
            title: a,
            primaryActionLabel: F,
            onSuccess: function(e, n) {
                var a = e ? e : "/";
                f.logFileCreateClick({
                    uid: r.id,
                    source: o,
                    action: m.WebUserActionLogEvent.FILE_CREATE_HOME_FOLDER_SELECTED,
                    depth_folder_selected: t.getDepthFromPath(a)
                }), t.createNewFile({
                    user: r,
                    path: a,
                    documentType: i,
                    source: o
                })
            }
        })
    }, t.createNewFile = function(o) {
        var a = o.user,
            s = o.path,
            l = o.documentType,
            c = o.source;
        return r.__awaiter(w, void 0, Promise, function() {
            return r.__generator(this, function(o) {
                return [2, Promise.all([new Promise(function(t, r) {
                    e(["modules/clean/account/email"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/account/email_verify_reasons"], t, r)
                }).then(r.__importStar)]).then(function(e) {
                    var r = e[0].EmailVerification,
                        o = e[1].CLOUD_DOCS;
                    if (r.get_for_user(a).verified_or_show(o)) {
                        var d = E.generateUUID("web-create");
                        if (n.isMicrosoftFileType(l)) {
                            var u = t.logCreateFileSuccessCallback(Date.now(), d);
                            y({
                                userId: a.id,
                                path: s,
                                documentType: l,
                                logSuccessCallback: u,
                                source: c
                            })
                        } else if (n.isPointerFileType(l)) i.CreatePointerModal.showInstance({
                            createOnSubmit: function(e) {
                                var r = t.logCreateFileSuccessCallback(Date.now(), d);
                                t.createNewPointer({
                                    userId: a.id,
                                    pathName: s,
                                    name: e.pointerData.name,
                                    url: e.pointerData.url,
                                    onError: e.onError,
                                    logSuccessCallback: r,
                                    source: c
                                })
                            }
                        });
                        else {
                            var u = t.logCreateFileSuccessCallback(Date.now(), d);
                            t.createNewCloudOnlyDoc({
                                userId: a.id,
                                pathName: s,
                                title: v._("Untitled", {
                                    comment: "The default name for a new Cloud Doc, e.g. Untitled.gdoc"
                                }),
                                documentType: l,
                                logSuccessCallback: u,
                                source: c,
                                openId: d
                            })
                        }
                    }
                })]
            })
        })
    };
    var y = function(e) {
        var r = e.userId,
            o = e.path,
            n = e.documentType,
            i = e.logSuccessCallback,
            s = e.source,
            l = {
                fq_path: o,
                extension: n,
                action_source: t.getCreateActionSource(s),
                _subject_uid: String(r),
                t: g.Cookies.read("__Host-js_csrf")
            },
            c = t.constructFormForCreateNewMicrosoftFile(l);
        document.body.appendChild(c), c.submit(), i({
            userId: r,
            documentType: n,
            fq_path: o,
            action_source: a.getActionSourceFromNewFileMenuType(s)
        })
    };
    t.constructFormForCreateNewMicrosoftFile = function(e) {
        var t = document.createElement("form");
        t.action = "/ow/msft/create_new_file", t.method = "POST", t.target = "_blank";
        for (var r = 0, o = Object.keys(e); r < o.length; r++) {
            var n = o[r],
                i = document.createElement("input");
            i.type = "hidden", i.name = n, i.value = e[n], t.appendChild(i)
        }
        return t
    }, t.createNewCloudOnlyDoc = function(e) {
        var r = e.userId,
            o = e.pathName,
            i = e.title,
            s = e.documentType,
            l = e.logSuccessCallback,
            c = e.source,
            u = e.openId,
            p = v._("Creating new file…"),
            f = v._("File created!"),
            m = function(e) {
                return e.preventDefault(), e.returnValue = "", ""
            };
        window.addEventListener("beforeunload", m);
        var g = n.LOADING_PAGE_URL + o,
            E = S.unsafe_open_tab(g),
            w = function(e) {
                _.Snackbar.sync(p, !0, t.CloudDocSnackbarId), h.createCloudDoc({
                    pathName: o,
                    title: i,
                    documentType: s,
                    userId: r,
                    onSuccess: function(e) {
                        var o = (e.changesets, e.createdFile),
                            n = e.failureDetails;
                        if (n) {
                            var i = function() {
                                l = t.logCreateFileSuccessCallback(Date.now(), u), E = S.unsafe_open_tab(g), w(!1)
                            };
                            E.close(), _.Snackbar.close(t.CloudDocSnackbarId), window.removeEventListener("beforeunload", m), d.showFileSystemWarningsModal({
                                fsws: n,
                                confirmText: v._("Create"),
                                onFinalAccept: i
                            })
                        } else if (_.Snackbar.complete(f, t.CloudDocSnackbarId), window.removeEventListener("beforeunload", m), null !== o && (l({
                                userId: r,
                                documentType: s,
                                fq_path: o.fq_path,
                                action_source: a.getActionSourceFromNewFileMenuType(c)
                            }), E)) {
                            var p = o.open_to_url;
                            try {
                                var h = new URL(p);
                                h.searchParams.set("web_open_id", u), p = h.toString()
                            } catch (e) {}
                            E.location.replace(p)
                        }
                    },
                    onError: function(e) {
                        _.Snackbar.fail(e, t.CloudDocSnackbarId), window.removeEventListener("beforeunload", m)
                    },
                    checkFSWs: e
                })
            };
        w(!0)
    }, t.createNewPointer = function(e) {
        var t = e.userId,
            r = e.pathName,
            i = e.name,
            c = e.url,
            d = e.onError,
            u = e.logSuccessCallback,
            h = e.source,
            f = new o.UserApiV2Client,
            m = v._("Creating new shortcut"),
            S = v._("Created shortcut");
        return _.Snackbar.sync(m, !0, "create-cloud-shortcut"), f.ns("cloud_docs").rpc("create", {
            to_path: l.normalize(r) || "/",
            title: i,
            cloud_doc_type: s.SimplePointer,
            pointer_url: c
        }, {
            subjectUserId: t
        }).then(function(e) {
            u({
                userId: t,
                documentType: n.PointerFileTypes.SIMPLE_POINTER,
                fq_path: e.result_path,
                action_source: a.getActionSourceFromNewFileMenuType(h)
            }), p.Modal.close(), _.Snackbar.complete(S + ' "' + l.filename(e.result_path) + '"', "create-cloud-shortcut")
        }).catch(function(e) {
            d(), _.Snackbar.fail(v._("Oops, something went wrong. Please try again later."), "create-cloud-shortcut")
        })
    }, t.getCreateActionSource = function(e) {
        switch (e) {
            case n.NewFileMenuFromType.BROWSE:
                return n.ActionSourceValue.WEB_BROWSE;
            case n.NewFileMenuFromType.HOME:
                return n.ActionSourceValue.WEB_HOME;
            default:
                return n.ActionSourceValue.WEB
        }
    }
}), define("modules/clean/cloud_docs/create_pointer_modal", ["require", "exports", "tslib", "react", "modules/clean/cloud_docs/pointers_common", "modules/clean/react/css", "modules/clean/react/modal", "modules/core/i18n", "spectrum/button", "spectrum/modal"], function(e, t, r, o, n, i, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o);
    var d = s._("Create a new shortcut"),
        u = s._("Create"),
        p = s._("Creating..."),
        _ = s._("Cancel"),
        h = s._("Name"),
        f = s._("URL"),
        m = s._("Invalid URL"),
        S = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.onChange = function(e) {
                    r.setState({
                        pointerData: e
                    })
                }, r.handleCreateOnClick = function() {
                    r.setState({
                        creationInProgress: !0
                    }), r.props.createOnSubmit({
                        pointerData: {
                            name: r.state.pointerData.name.trim(),
                            url: r.state.pointerData.url.trim()
                        },
                        onError: r.handleSubmitError
                    })
                }, r.handleSubmitError = function() {
                    r.setState({
                        creationInProgress: !1
                    })
                }, r.renderCreateButton = function() {
                    var e = n.CreatePointerFields.canSubmit(r.state.pointerData) && !r.state.creationInProgress;
                    return o.default.createElement(l.Button, {
                        variant: "primary",
                        disabled: !e,
                        onClick: r.handleCreateOnClick
                    }, r.state.creationInProgress ? p : u)
                }, r.renderCancelButton = function() {
                    return o.default.createElement(l.Button, {
                        variant: "secondary",
                        onClick: a.Modal.close
                    }, _)
                }, r.state = {
                    pointerData: {
                        name: "",
                        url: ""
                    },
                    creationInProgress: !1
                }, r
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return o.default.createElement(c.UtilityModal, {
                    title: d,
                    ariaLabel: "Shortcut Creation Modal",
                    primaryAction: this.renderCreateButton,
                    secondaryAction: this.renderCancelButton,
                    open: !0,
                    shouldRequestCloseOnActions: !1,
                    overlayClickClose: !0,
                    variant: "regular"
                }, o.default.createElement(n.CreatePointerFields, {
                    name: this.state.pointerData.name,
                    url: this.state.pointerData.url,
                    onChange: this.onChange,
                    onSubmit: this.handleCreateOnClick,
                    nameLabel: h,
                    urlLabel: f,
                    urlValidationMessage: m
                }))
            }, t.showInstance = function(e) {
                return a.Modal.showInstance(o.default.createElement(g, r.__assign({}, e)))
            }, t
        })(o.default.Component);
    t.CreatePointerModal = S;
    var g = i.requireCssWithComponent(S, ["/static/css/spectrum/index.web-vflagwTbb.css", "/static/css/cloud_docs/create_pointer_modal-vflATc8Dt.css"])
}), define("modules/clean/cloud_docs/event_logging", ["require", "exports", "tslib", "modules/clean/api_v2/user_client", "modules/clean/cloud_docs/types", "modules/clean/web_timing_logger", "modules/clean/web_user_action_events", "modules/clean/logging/hive/schemas/web-user-action", "modules/clean/logging/telemetry", "modules/constants/python", "modules/clean/cloud_docs/constants", "modules/core/browser", "modules/clean/perf_tools/web_timing_utils", "modules/core/exception"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _) {
    "use strict";

    function h(e, t, r) {
        var n = {
                ".tag": r
            },
            i = {
                shared_link_details: {
                    url: t
                }
            },
            a = {
                file_info: i,
                platform_type: n
            },
            s = {
                file_views: [a]
            };
        (new o.UserApiV2Client).ns("seen_state").rpc("log_file_view", s, {
            subjectUserId: e
        })
    }

    function f(e, t, r, a, s, l) {
        var c = l || [];
        c.push({
            key: "time_on_page_with_redirect",
            value: i.time_since_start().toString()
        }), c.some(function(e) {
            return "time_now" === e.key
        }) || c.push({
            key: "time_now",
            value: Date.now().toString()
        }), (new o.UserApiV2Client).ns("cloud_docs").rpc("log_client_event", {
            client: n.docTypeToClient[r],
            doc_id: t,
            event_name: a,
            auth_token: s,
            time_on_page: p.WebTimingUtil.getNow() - v(),
            extras: c
        }, {
            subjectUserId: e
        })
    }

    function m(e) {
        var t = (new o.UserApiV2Client).ns("cloud_docs"),
            r = {
                ".tag": "path_or_id",
                path_or_id: e.docPathOrId
            },
            n = e.data && e.data.webOpenId;
        t.rpc("log_user_action", {
            action: e.actionEvent,
            doc_id: r,
            source: e.actionSource,
            open_id: n
        }, {
            subjectUserId: e.userId
        })
    }

    function S(e, t, r, o, n) {
        (new l.HiveLogger).log(new s.WebUserActionRow({
            user_id: e,
            event_name: a.WebUserActionLogEvent.FILE_OPEN_PROMPT_ACTION,
            extra: {
                file_type: t,
                integration_name: r,
                prompt_action: o,
                ask_again: n
            }
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importStar(i), l = r.__importStar(l), u = r.__importStar(u);
    var g = void 0,
        v = function() {
            try {
                g = g || u.performance().timing.fetchStart
            } catch (e) {
                _.reportStack("Unable to get fetchStart from browser.", {
                    severity: _.SEVERITY.NONCRITICAL
                }), g = i.start_time()
            }
            return g
        };
    t.logViewEvent = h, t.logClientEvent = f, t.logUserAction = m, t.getActionSourceFromSurface = function(e) {
        return "search" === e ? n.UserActionSourceType.WEB_SEARCH : "previews" === e ? n.UserActionSourceType.WEB_PREVIEW : "home_recent" === e || "home_starred" === e ? n.UserActionSourceType.WEB_HOME : "browse" === e || "sidebar" === e ? n.UserActionSourceType.WEB_BROWSE : n.UserActionSourceType.WEB
    }, t.getActionSourceFromSourceArgs = function(e) {
        return e.fileViewAction === c.FileViewActionType.SEARCH || e.fileViewOrigin === c.FileViewOriginType.SEARCH ? n.UserActionSourceType.WEB_SEARCH : e.fileViewOrigin === c.FileViewOriginType.BROWSE ? n.UserActionSourceType.WEB_BROWSE : e.fileViewOrigin === c.FileViewOriginType.HOME ? n.UserActionSourceType.WEB_HOME : n.UserActionSourceType.WEB
    }, t.getActionSourceFromNewFileMenuType = function(e) {
        switch (e) {
            case d.NewFileMenuFromType.BROWSE:
                return n.UserActionSourceType.WEB_BROWSE;
            case d.NewFileMenuFromType.HOME:
                return n.UserActionSourceType.WEB_HOME;
            default:
                return n.UserActionSourceType.WEB
        }
    }, t.logFileOpenPromptAction = S
}), define("modules/clean/cloud_docs/new_file_menu", ["require", "exports", "tslib", "external/classnames", "react", "modules/constants/page_load", "spectrum/button", "spectrum/icon_partners", "spectrum/popover", "spectrum/tertiary_link", "modules/clean/cloud_docs/constants", "modules/clean/cloud_docs/create_api", "modules/clean/react/browse/action_logger", "modules/clean/react/browse/data/selectors", "modules/clean/react/browse/data/store", "modules/clean/react/css", "modules/clean/web_user_action_events", "modules/core/i18n", "modules/clean/search/types"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), i = r.__importStar(i), _ = r.__importStar(_), t.NewFileCreateLabel = S._("Create new file"), t.NewFileCreateLabelAbbreviated = S._("Create", {
        comment: "Button to create a new file"
    });
    var v = S._("Google Docs"),
        E = S._("Google Sheets"),
        w = S._("Google Slides"),
        b = S._("Microsoft Excel"),
        T = S._("Microsoft PowerPoint"),
        F = S._("Microsoft Word"),
        y = S._("Dropbox Paper"),
        C = S._("Dropbox Paper Template"),
        I = S._("Dropbox Binder (Beta)", {
            comment: 'Branded Feature - do not localize "Binder".'
        }),
        O = S._("Shortcut");
    t.handleNewFileSelection = function(e) {
        e.handleClick()
    };
    var P = function(e) {
            switch (e) {
                case d.MicrosoftFileTypes.WORD:
                    return m.WebUserActionLogEvent.FILE_CREATE_WORD;
                case d.MicrosoftFileTypes.EXCEL:
                    return m.WebUserActionLogEvent.FILE_CREATE_EXCEL;
                case d.MicrosoftFileTypes.POWERPOINT:
                    return m.WebUserActionLogEvent.FILE_CREATE_POWERPOINT;
                case d.GoogleFileTypes.GOOGLE_DSS_DOC:
                    return m.WebUserActionLogEvent.FILE_CREATE_GOOGLE_DOC;
                case d.GoogleFileTypes.GOOGLE_DSS_SHEET:
                    return m.WebUserActionLogEvent.FILE_CREATE_GOOGLE_SHEET;
                case d.GoogleFileTypes.GOOGLE_DSS_SLIDES:
                    return m.WebUserActionLogEvent.FILE_CREATE_GOOGLE_SLIDES;
                case d.PaperNewFileTypes.PAPER:
                    return m.WebUserActionLogEvent.FILE_CREATE_PAPER;
                case d.PaperNewFileTypes.PAPER_TEMPLATE:
                    return m.WebUserActionLogEvent.FILE_CREATE_PAPER_TEMPLATE;
                case d.PaperNewFileTypes.PAPER_BINDER:
                    return m.WebUserActionLogEvent.FILE_CREATE_BINDER;
                case d.PointerFileTypes.SIMPLE_POINTER:
                    return m.WebUserActionLogEvent.FILE_CREATE_SIMPLE_POINTER
            }
        },
        R = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.renderIcon = function() {
                return n.default.createElement(s.IconPartners, {
                    name: this.props.item.iconName,
                    width: "24px",
                    height: "24px"
                })
            }, t.prototype.render = function() {
                return n.default.createElement(l.PopoverContentItem, {
                    key: this.props.item.displayName,
                    value: this.props.item,
                    className: this.props.item.className
                }, n.default.createElement("div", {
                    className: "newfile-popover--item"
                }, this.renderIcon(), n.default.createElement("div", {
                    className: "newfile-popover--item-text"
                }, this.props.item.displayName)))
            }, t
        })(n.default.Component);
    t.NewFileTypeRow = R;
    var D = (function(e) {
            function s() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleCreateNewFile = function(e) {
                    return function() {
                        p.logFileCreateClick({
                            uid: t.props.user.id,
                            source: t.props.source,
                            action: P(e),
                            depth_folder_selected: t.props.path ? u.getDepthFromPath(t.props.path) : void 0
                        }), t.props.path ? u.createNewFile({
                            user: t.props.user,
                            path: t.props.path,
                            documentType: e,
                            source: t.props.source
                        }) : u.showAsyncFolderDialog({
                            user: t.props.user,
                            source: t.props.source,
                            documentType: e
                        })
                    }
                }, t.logTriggerClick = function() {
                    p.logFileCreateClick({
                        uid: t.props.user.id,
                        source: t.props.source,
                        action: m.WebUserActionLogEvent.FILE_CREATE_OPEN_MENU,
                        depth_folder_selected: t.props.path ? u.getDepthFromPath(t.props.path) : void 0
                    })
                }, t
            }
            return r.__extends(s, e), s.prototype.getNewFileTypeSections = function() {
                var e = [],
                    t = [];
                this.props.showPaper && (t.push({
                    displayName: y,
                    iconName: "dropbox_paper",
                    className: "action-create-file-paper-doc",
                    handleClick: this.handleCreateNewFile(d.PaperNewFileTypes.PAPER)
                }), t.push({
                    displayName: C,
                    iconName: "dropbox_paper_template",
                    className: "action-create-file-paper-template",
                    handleClick: this.handleCreateNewFile(d.PaperNewFileTypes.PAPER_TEMPLATE)
                })), this.props.showBinder && t.push({
                    displayName: I,
                    iconName: "dropbox_paper_binder",
                    className: "action-create-file-paper-binder",
                    handleClick: this.handleCreateNewFile(d.PaperNewFileTypes.PAPER_BINDER)
                }), this.props.showSimplePointer && t.push({
                    displayName: O,
                    iconName: "shortcut",
                    className: "action-create-simple-pointer",
                    handleClick: this.handleCreateNewFile(d.PointerFileTypes.SIMPLE_POINTER)
                }), t.length > 0 && e.push(t);
                var r = [];
                if (r.push({
                        displayName: F,
                        iconName: "microsoft_docx",
                        className: "action-create-file-word",
                        handleClick: this.handleCreateNewFile(d.MicrosoftFileTypes.WORD)
                    }), r.push({
                        displayName: b,
                        iconName: "microsoft_xlsx",
                        className: "action-create-file-excel",
                        handleClick: this.handleCreateNewFile(d.MicrosoftFileTypes.EXCEL)
                    }), r.push({
                        displayName: T,
                        iconName: "microsoft_pptx",
                        className: "action-create-file-powerpoint",
                        handleClick: this.handleCreateNewFile(d.MicrosoftFileTypes.POWERPOINT)
                    }), e.push(r), this.props.showGdd) {
                    var o = [];
                    o.push({
                        displayName: v,
                        iconName: "google_gdoc",
                        className: "action-create-file-google-doc",
                        handleClick: this.handleCreateNewFile(d.GoogleFileTypes.GOOGLE_DSS_DOC)
                    }), o.push({
                        displayName: E,
                        iconName: "google_gsheet",
                        className: "action-create-file-google-sheet",
                        handleClick: this.handleCreateNewFile(d.GoogleFileTypes.GOOGLE_DSS_SHEET)
                    }), o.push({
                        displayName: w,
                        iconName: "google_gslides",
                        className: "action-create-file-google-slides",
                        handleClick: this.handleCreateNewFile(d.GoogleFileTypes.GOOGLE_DSS_SLIDES)
                    }), e.push(o)
                }
                return e
            }, s.prototype.renderTrigger = function() {
                var e = h.getStoreForBrowse(),
                    r = _.isDetailsPaneEnabled(e.getState()) ? _.experiments(e.getState()).expBrowseDetailsPaneVariants === g.DetailsPaneVariants.CREATE_FILE_LABEL && 0 === i.USER_LOCALE.indexOf("en") ? t.NewFileCreateLabel : t.NewFileCreateLabelAbbreviated : t.NewFileCreateLabel;
                return this.props.primaryButton ? n.default.createElement(a.Button, {
                    key: t.NewFileCreateLabel,
                    onClick: this.logTriggerClick,
                    disabled: this.props.disabled,
                    className: o.default("primary-action-menu__button", "action-create-file"),
                    tagName: "span"
                }, r) : n.default.createElement(c.TertiaryLink, {
                    key: t.NewFileCreateLabel,
                    icon: "create",
                    onClick: this.logTriggerClick,
                    disabled: this.props.disabled,
                    className: o.default("secondary-action-menu__button", "action-create-file"),
                    tagName: "span"
                }, t.NewFileCreateLabel)
            }, s.prototype.renderSection = function(e, t) {
                return n.default.createElement("div", {
                    className: "newfile-popover--section",
                    key: t
                }, e.map(function(e) {
                    return n.default.createElement(R, {
                        item: e,
                        key: e.displayName
                    })
                }))
            }, s.prototype.render = function() {
                return n.default.createElement(l.Popover, {
                    onSelection: t.handleNewFileSelection
                }, n.default.createElement(l.PopoverTrigger, {
                    disabled: this.props.disabled,
                    className: "newfile-popover--trigger"
                }, this.renderTrigger()), n.default.createElement(l.PopoverContent, {
                    attachment: "right",
                    isRevealed: !this.props.disabled && void 0
                }, n.default.createElement("div", {
                    className: "newfile-popover"
                }, this.getNewFileTypeSections().map(this.renderSection))))
            }, s
        })(n.default.Component),
        A = f.requireCssWithComponent(D, ["/static/css/spectrum/index.web-vflagwTbb.css", "/static/css/cloud_docs/new_file_menu-vflkYlERm.css", "/static/css/cloud_docs/create_pointer_modal-vflATc8Dt.css"]);
    t.NewFileMenu = A
}), define("modules/clean/cloud_docs/open_with_utils", ["require", "exports", "tslib", "modules/clean/filepath", "modules/core/browser", "modules/clean/cloud_docs/constants", "modules/clean/cloud_docs/event_logging", "modules/clean/cloud_docs/types", "modules/clean/referrer_cleansing_redirect", "modules/clean/cloud_docs/constants", "modules/core/uri", "modules/clean/cloud_docs/utils", "modules/clean/open_with", "spectrum/util/uuid_generator", "modules/core/browser_detection"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h) {
    "use strict";

    function f() {
        return r.__awaiter(this, void 0, Promise, function() {
            var t;
            return r.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, new Promise(function(t, r) {
                            e(["modules/clean/api_v2/user_client"], t, r)
                        }).then(r.__importStar)];
                    case 1:
                        return t = o.sent().UserApiV2Client, [2, (new t).ns("cloud_docs")]
                }
            })
        })
    }

    function m(e) {
        if (void 0 !== e && void 0 !== e.error && void 0 !== e.error[".tag"]) return e.error[".tag"]
    }

    function S(e) {
        switch (m(e)) {
            case "invalid_file_id":
            case "permission_denied":
            case "other":
                return;
            default:
                return
        }
    }

    function g(e, t, r, o, i, l, c) {
        var u = _.generateUUID("web_open_id"),
            p = d.URI.parse(e.cloud_editor_url).updateQuery({
                cloud_editor: i,
                web_open_id: u
            });
        l && p.updateQuery({
            ignore_lock: "1"
        });
        var h = p.toString();
        h && (void 0 === c && (c = s.UserActionSourceType.WEB), a.logUserAction({
            actionEvent: s.UserActionEventType.PRE_OPEN,
            userId: o.id,
            docPathOrId: r.file_id,
            actionSource: c,
            data: {
                webOpenId: u
            }
        }), null != t ? n.redirect(h, t) : n.open_tab(h))
    }

    function v(e) {
        return [".gdoc", ".gsheet", ".gslides"].indexOf(u.getFileExt(e)) >= 0
    }

    function E(e) {
        return ".web" === u.getFileExt(e)
    }

    function w(e) {
        return !!v(e) || !!E(e)
    }

    function b(e, t) {
        for (var r = u.getFileExt(e), o = 0, n = Object.keys(c.DSS_TYPE_TO_SUPPORTED_EXTS); o < n.length; o++) {
            var i = n[o],
                a = i;
            if (c.DSS_TYPE_TO_SUPPORTED_EXTS[a].indexOf(r) >= 0) return a
        }
        switch (r) {
            case ".gdoc":
                return c.GoogleFileTypes.GOOGLE_DSS_DOC;
            case ".gsheet":
                return c.GoogleFileTypes.GOOGLE_DSS_SHEET;
            case ".gslides":
                return c.GoogleFileTypes.GOOGLE_DSS_SLIDES
        }
        return null
    }
    var T = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), l = r.__importStar(l), p = r.__importDefault(p), h = r.__importStar(h);
    var F;
    t.getCloudEditorUrlCached = function(e, o) {
        return r.__awaiter(T, void 0, Promise, function() {
            return r.__generator(this, function(r) {
                return F || (F = t.getCloudEditorUrl(e, o)), [2, F]
            })
        })
    }, t.getCloudEditorUrl = function(e, t) {
        return r.__awaiter(T, void 0, Promise, function() {
            var o;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, f()];
                    case 1:
                        return o = r.sent(), [2, o.rpc("get_cloud_editor_url", {
                            file_id: t
                        }, {
                            subjectUserId: e
                        })]
                }
            })
        })
    }, t.decodeAPIError = m, t.handleError = S, t.isInEdgeIframe = function() {
        var e = !1;
        if (h.edge || h.msie || h.edgeChromium()) try {
            e = window.self !== window.top
        } catch (t) {
            e = !0
        }
        return e
    }, t.openWithCloudEditor = function(e, r, o, i, a) {
        var s, l = c.LOADING_PAGE_URL;
        t.isInEdgeIframe() ? t.getCloudEditorUrlCached(r.id, e.file_id).then(function(t) {
            g(t, null, e, r, o, i, a)
        }).catch(function(e) {
            S(e)
        }) : (s = n.open_tab(l, !0), t.getCloudEditorUrl(r.id, e.file_id).then(function(t) {
            g(t, s, e, r, o, i, a)
        }).catch(function(e) {
            S(e)
        }))
    }, t.openCloudDoc = function(t, u, p) {
        if (p || (p = s.UserActionSourceType.WEB), t.href)
            if (i.isPointerByExtension(t.ns_path)) l.safe_open_tab_and_redirect(t.href), a.logUserAction({
                actionEvent: s.UserActionEventType.PRE_OPEN,
                userId: u.id,
                docPathOrId: t.file_id,
                actionSource: p
            });
            else {
                var h = _.generateUUID("web_open_id"),
                    f = d.URI.parse(t.href).updateQuery("web_open_id", h).toString();
                n.open_tab(f), a.logUserAction({
                    actionEvent: s.UserActionEventType.PRE_OPEN,
                    userId: u.id,
                    docPathOrId: t.file_id,
                    actionSource: p,
                    data: {
                        webOpenId: h
                    }
                })
            }
        else {
            var m = c.LOADING_PAGE_URL + o.parent_dir(t.fq_path),
                S = n.unsafe_open_tab(m);
            new Promise(function(t, r) {
                e(["modules/clean/previews/data/actions"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.fetchPreviewUrl(t, u)
            }).then(function(e) {
                e && null !== S && l.redirect(e, S, !0)
            })
        }
    };
    var y;
    (function(e) {
        e.OfficeOnline = "OfficeOnline", e.GoogleDSS = "GoogleDSS"
    })(y = t.OpenWithCloudDocProvider || (t.OpenWithCloudDocProvider = {})), t.getOpenWithCloudEditorInfo = function(e, r, o, n) {
        var i = [],
            a = t.getOpenWithWopiEditorInfo(e, r, n);
        a && o.wopi && i.push(a);
        var s = t.getOpenWithGoogleEditorInfo(e, r, n);
        return s && o.gdd && i.push(s), i
    }, t.getOpenWithGoogleEditorInfo = function(e, r, o) {
        var n = b(e, r);
        return n ? {
            text: c.DSS_TYPE_TO_TEXT[n],
            iconUrl: c.DSS_TYPE_TO_OPEN_WITH_ICONS[n],
            handler: function() {
                return t.openWithCloudEditor(e, r, n, !1, o)
            },
            provider: y.GoogleDSS
        } : null
    }, t.getOpenWithWopiEditorInfo = function(e, r, o) {
        var n = p.default.getWopiOpenWithButtonInfo(e);
        return n ? {
            text: n.name,
            spriteName: n.icon,
            handler: function() {
                return t.openWithCloudEditor(e, r, n.editor, !1, o)
            },
            provider: y.OfficeOnline
        } : null
    }, t.isGoogleDoc = v, t.isShortcut = E, t.isCloudBasedDoc = w, t.getGoogleEditorType = b
}), define("modules/clean/cloud_docs/pointers_common", ["require", "exports", "tslib", "modules/clean/keycode", "react", "spectrum/input"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var a = (function(e) {
        function t() {
            var r = null !== e && e.apply(this, arguments) || this;
            return r.handleKeyPress = function(e) {
                e.charCode === o.KeyCode.ENTER && t.canSubmit({
                    name: r.props.name,
                    url: r.props.url
                }) && r.props.onSubmit()
            }, r.handleNameChange = function(e) {
                var t = e.target.value;
                r.props.onChange({
                    name: t,
                    url: r.props.url
                })
            }, r.handleUrlChange = function(e) {
                var t = e.target.value;
                r.props.onChange({
                    name: r.props.name,
                    url: t
                })
            }, r.setNameFieldRef = function(e) {
                r.nameRef = e
            }, r
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = "" === this.props.url || t.isUrlValid(this.props.url),
                r = e ? "default" : "invalid",
                o = "";
            return e || (o = this.props.urlValidationMessage), n.createElement("div", {
                className: "create-pointer--fields"
            }, n.createElement("div", {
                className: "create-pointer--fieldset"
            }, n.createElement("label", {
                htmlFor: "create-pointer--link_input"
            }, this.props.urlLabel), n.createElement("div", {
                className: "create-pointer--fieldset-with-icon"
            }, this.props.urlIcon, n.createElement(i.Input, {
                id: "create-pointer--link_input",
                className: "create-pointer--link_input",
                variant: r,
                onChange: this.handleUrlChange,
                onKeyPress: this.handleKeyPress,
                value: this.props.url,
                autoFocus: !0
            }))), n.createElement("div", {
                className: "create-pointer--url-validation-warning"
            }, o), n.createElement("div", {
                className: "create-pointer--fieldset"
            }, n.createElement("label", {
                htmlFor: "create-pointer--name_input"
            }, this.props.nameLabel), n.createElement(i.Input, {
                id: "create-pointer--name_input",
                className: "create-pointer--name_input",
                onChange: this.handleNameChange,
                onKeyPress: this.handleKeyPress,
                forwardedRef: this.setNameFieldRef
            })))
        }, t.prototype.componentDidMount = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e;
                return r.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.props.urlPrepopulateFunction ? [4, this.props.urlPrepopulateFunction()] : [3, 2];
                        case 1:
                            e = t.sent(), e && (this.props.onChange({
                                name: this.props.name,
                                url: e
                            }), this.nameRef.focus()), t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, t.isUrlValid = function(e) {
            return /^((http|https):\/\/)?([^.:\/\\?#@!]+?\.)+[^.:\/\\?#@!]+/i.test(e.trim())
        }, t.canSubmit = function(e) {
            return "" !== e.name && "" !== e.url && t.isUrlValid(e.url)
        }, t
    })(n.Component);
    t.CreatePointerFields = a
}), define("modules/clean/cloud_docs/preferred_editor_utils", ["require", "exports", "tslib", "modules/core/i18n", "modules/core/browser", "modules/core/exception", "modules/clean/cloud_docs/event_logging", "modules/clean/cloud_docs/utils", "modules/clean/cloud_docs/types", "modules/clean/react_format", "react", "modules/clean/filepath", "modules/clean/cloud_docs/constants", "modules/clean/cloud_docs/open_with_utils", "modules/core/uri", "modules/clean/cloud_docs/cloud_doc_api_client", "spectrum/util/uuid_generator"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m) {
    "use strict";

    function S(e) {
        var t = s.getFileExt(e);
        return P.indexOf(t) >= 0
    }

    function g(e, r, o, c, d) {
        var u = s.getFileExt(r),
            S = o[e.id],
            g = "";
        if (!S) return void c();
        try {
            var v = S[t.EXTENSION_TO_DOC_TYPE[u]],
                E = v === F.GoogleDSS || v === F.OfficeOnline,
                w = m.generateUUID("web_open_id");
            if (E) {
                var b = n.open_tab(p.LOADING_PAGE_URL, !0);
                _.getCloudEditorUrl(e.id, r.file_id).then(function(t) {
                    g = h.URI.parse(t.cloud_editor_url).updateQuery("web_open_id", w).toString(), b ? b.location.replace(g) : c(), a.logUserAction({
                        actionEvent: l.UserActionEventType.PRE_OPEN,
                        userId: e.id,
                        docPathOrId: r.file_id,
                        actionSource: a.getActionSourceFromSourceArgs(d),
                        data: {
                            webOpenId: w
                        }
                    })
                }).catch(function(e) {
                    i.reportStack("Error getting cloud editor url from preferred editor open.", {
                        severity: i.SEVERITY.CRITICAL,
                        exc_extra: {
                            preferred_editor_url: g,
                            file_ext: u,
                            preferred_editor_configs: S,
                            error: e.message
                        }
                    }), b && b.close(), c()
                })
            } else f.getPreferredUrl(e.id, r.file_id, u).then(function(t) {
                t.preferred_editor_url && (g = h.URI.parse(t.preferred_editor_url).updateQuery("web_open_id", w).toString(), a.logUserAction({
                    actionEvent: l.UserActionEventType.PRE_OPEN,
                    userId: e.id,
                    docPathOrId: r.file_id,
                    actionSource: a.getActionSourceFromSourceArgs(d),
                    data: {
                        webOpenId: w
                    }
                }), n.redirect(g))
            }).catch(function(e) {
                i.reportStack("Error getting preferred editor url from preferred editor open.", {
                    severity: i.SEVERITY.CRITICAL,
                    exc_extra: {
                        preferred_editor_url: g,
                        file_ext: u,
                        preferred_editor_configs: S,
                        error: e.message
                    }
                })
            }), c()
        } catch (e) {
            i.reportStack("Error opening docs in preferred editor.", {
                severity: i.SEVERITY.CRITICAL,
                exc_extra: {
                    preferred_editor_url: g,
                    file_ext: u,
                    preferred_editor_configs: S,
                    error: e.message
                }
            }), c()
        }
    }

    function v(e, t) {
        var r = "." + u.file_extension(e),
            n = R[t][r],
            i = "<b>" + r + "</b>";
        return n ? {
            title: c.reactFormat(o._("Would you like to open %(file_extension)s files with %(web_editor_name)s by default?").format({
                file_extension: i,
                web_editor_name: n
            }), {
                b: d.default.createElement("b", null)
            }),
            body: c.reactFormat(o._("%(web_editor_name)s will automatically be used to open your %(file_extension)s files in Dropbox. You can always update this later in your Dropbox settings.").format({
                file_extension: i,
                web_editor_name: n
            }), {
                b: d.default.createElement("b", null)
            })
        } : null
    }
    var E, w, b, T;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), d = r.__importDefault(d);
    var F;
    (function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.FileViewer = 1] = "FileViewer", e[e.OfficeOnline = 2] = "OfficeOnline", e[e.GoogleDSS = 3] = "GoogleDSS"
    })(F = t.PreferredEditorTypes || (t.PreferredEditorTypes = {})), t.IntegrationNameToPreferredEditorEnums = (E = {}, E[l.IntegrationName.GOOGLE_DSS] = F.GoogleDSS, E[l.IntegrationName.OFFICE_ONLINE] = F.OfficeOnline, E[l.IntegrationName.PAPER_INTEGRATION] = F.Unknown, E);
    var y;
    (function(e) {
        e.WORD = "ms_word", e.EXCEL = "ms_excel", e.POWERPOINT = "ms_powerpoint"
    })(y = t.PreferredEditorDocTypes || (t.PreferredEditorDocTypes = {})), t.PreferredEditorOptionsMap = (w = {}, w[y.WORD] = {
        1: o._("View in dropbox.com"),
        2: o._("Microsoft Word Online"),
        3: o._("Google Docs")
    }, w[y.EXCEL] = {
        1: o._("View in dropbox.com"),
        2: o._("Microsoft Excel Online"),
        3: o._("Google Sheets")
    }, w[y.POWERPOINT] = {
        1: o._("View in dropbox.com"),
        2: o._("Microsoft PowerPoint Online"),
        3: o._("Google Slides")
    }, w), t.DssEditorTypeToPreferredEditorDocType = (b = {}, b[p.GoogleFileTypes.GOOGLE_DSS_DOC] = y.WORD, b[p.GoogleFileTypes.GOOGLE_DSS_SHEET] = y.EXCEL, b[p.GoogleFileTypes.GOOGLE_DSS_SLIDES] = y.POWERPOINT, b);
    var C = [".docx"],
        I = [".xlsx"],
        O = [".pptx"],
        P = C.concat(I, O);
    t.EXTENSION_TO_DOC_TYPE = {
        ".docx": y.WORD,
        ".xlsx": y.EXCEL,
        ".pptx": y.POWERPOINT
    }, t.hasPreferredEditorSupport = S, t.openInPreferredEditor = g;
    var R = (T = {}, T[l.IntegrationName.GOOGLE_DSS] = {
        ".docx": o._("Google Docs"),
        ".xlsx": o._("Google Sheets"),
        ".pptx": o._("Google Slides")
    }, T[l.IntegrationName.OFFICE_ONLINE] = {
        ".docx": o._("Microsoft Word Online"),
        ".xlsx": o._("Microsoft Excel Online"),
        ".pptx": o._("Microsoft PowerPoint Online")
    }, T[l.IntegrationName.PAPER_INTEGRATION] = {}, T);
    t.getPreferredEditorPrompt = v
}), define("modules/clean/cloud_docs/utils", ["require", "exports", "modules/clean/filepath", "modules/clean/sharing/constants", "modules/clean/cloud_docs/types"], function(e, t, r, o, n) {
    "use strict";

    function i(e) {
        var t = "";
        return e.hasOwnProperty("ext") ? t = e.ext : e.hasOwnProperty("filename") ? (t = r.file_extension(e.filename), t && (t = "." + t)) : (t = r.file_extension(e), t && (t = "." + t)), t
    }

    function a(e) {
        switch (e) {
            case n.IntegrationName.GOOGLE_DSS:
                return o.SHARE_ACTION_ORIGIN_TYPE.GOOGLE_DSS;
            case n.IntegrationName.PAPER_INTEGRATION:
                return o.SHARE_ACTION_ORIGIN_TYPE.PAPER_INTEGRATION;
            case n.IntegrationName.OFFICE_ONLINE:
                return o.SHARE_ACTION_ORIGIN_TYPE.OFFICE_INTEGRATION;
            default:
                throw "No mapping for integration to share action origin: " + e
        }
    }

    function s(e) {
        return e.replace(/[\/?<>:*\\]/g, "_")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getFileExt = i, t.integrationNameToShareActionOrigin = a, t.replaceInvalidFilenameChars = s
}), define("modules/clean/file_operations/notifications", ["require", "exports", "tslib", "external/lodash", "modules/clean/browse_interface", "modules/clean/em_string", "modules/clean/filepath", "modules/clean/react/browse/api", "modules/clean/undo", "modules/core/html", "modules/core/i18n", "modules/core/notify"], function(e, t, r, o, n, i, a, s, l, c, d, u) {
    "use strict";

    function p(e, t, r, o) {
        var n = function() {
            return s.rollbackChangeSets({
                changesets: r,
                userId: t.id,
                progressText: d._("Undoing…"),
                onSuccess: function() {
                    u.Notify.success(d._("Undo complete.")), o && o()
                }
            })
        };
        l.notifyWithUndo(e, r, n)
    }

    function _(e, t) {
        var r = n.browse_uri_for_fq_path(t, e),
            s = i.Emstring.em_snippet(a.filename(e), 40);
        return {
            href: r,
            text: o.escape(s)
        }
    }

    function h(e, t, r, o, n) {
        var i;
        if (o) {
            var a = _(o, t);
            i = d.ungettext('Copied %(num_items)d item to <a href="%(dest_href)s">%(dest_name)s</a>.', 'Copied %(num_items)d items to <a href="%(dest_href)s">%(dest_name)s</a>.', e).format({
                num_items: e,
                dest_href: a.href,
                dest_name: a.text
            }), i = new c.HTML(i)
        } else i = d.ungettext("Copied %(num_items)d item.", "Copied %(num_items)d items.", e).format({
            num_items: e
        });
        p(i, t, r, n)
    }

    function f(e, t, r, o, n) {
        var i;
        if (o) {
            var a = _(o, t);
            i = d.ungettext('Moved %(num_items)d item to <a href="%(dest_href)s">%(dest_name)s</a>.', 'Moved %(num_items)d items to <a href="%(dest_href)s">%(dest_name)s</a>.', e).format({
                num_items: e,
                dest_href: a.href,
                dest_name: a.text
            }), i = new c.HTML(i)
        } else i = d.ungettext("Moved %(num_items)d item.", "Moved %(num_items)d items.", e).format({
            num_items: e
        });
        p(i, t, r, n)
    }

    function m(e, t, r, o) {
        p(d.ungettext("Deleted %(num_items)d item.", "Deleted %(num_items)d items.", e).format({
            num_items: e
        }), t, r, o)
    }

    function S(e, t, r) {
        p(d._("Rename complete."), e, t, r)
    }

    function g(e, t, r) {
        p(d._("Created folder %(folder_name)s.").format({
            folder_name: e
        }), t, r)
    }

    function v(e) {
        var t = d.ungettext("Permanently deleted %(num)s item.", "Permanently deleted %(num)s items.", e).format({
            num: e
        });
        u.Notify.success(t)
    }

    function E(e) {
        var t, r = e.length;
        if (1 === r) {
            var n = o.escape(a.filename(e[0].fq_path));
            t = d._("Restored <strong>%(filename)s</strong>.").format({
                filename: n
            }), t = new c.HTML(t)
        } else t = d.ungettext("Restored %(num)s file.", "Restored %(num)s files.", r).format({
            num: r
        });
        u.Notify.success(t, 30)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), a = r.__importStar(a), s = r.__importStar(s), l = r.__importStar(l), t.notifyCopySuccess = h, t.notifyMoveSuccess = f, t.notifyDeleteSuccess = m, t.notifyRenameSuccess = S, t.notifyFolderCreationSuccess = g, t.notifyPurgeSuccess = v, t.notifyRestoreSuccess = E
}), define("modules/clean/growth/api", ["require", "exports", "tslib", "external/lodash", "modules/clean/api_v2/user_client"], function(e, t, r, o, n) {
    "use strict";

    function i(e) {
        return r.__awaiter(this, void 0, Promise, function() {
            return r.__generator(this, function(t) {
                return [2, (new n.UserApiV2Client).ns("onboarding_tracker").rpc("get_modules_statuses_for_tracker", {
                    tracker: "post_setup_edu"
                }, {
                    subjectUserId: e.id
                }).then(function(e) {
                    return o.mapValues(o.keyBy(e.modules, "name"), "completed")
                })]
            })
        })
    }

    function a(e, t) {
        return r.__awaiter(this, void 0, Promise, function() {
            return r.__generator(this, function(r) {
                return [2, (new n.UserApiV2Client).ns("onboarding_tracker").rpc("mark_modules_complete_for_tracker", {
                    tracker: "post_setup_edu",
                    modules: [e]
                }, {
                    subjectUserId: t.id
                }).then(function(e) {
                    return e.errors
                })]
            })
        })
    }

    function s(e, t) {
        return r.__awaiter(this, void 0, void 0, function() {
            return r.__generator(this, function(r) {
                return [2, (new n.UserApiV2Client).ns("files").rpc("get_metadata", {
                    path: e
                }, {
                    subjectUserId: t.id
                })]
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), t.fetchRichSnackbarSeenState = i, t.markRichSnackbarAsSeen = a, t.fetchMetadataForPath = s
}), define("modules/clean/pagination_manager", ["require", "exports", "tslib", "modules/clean/ajax", "modules/core/i18n", "modules/core/notify"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o);
    var a = (function() {
            function e(e) {
                this.hasMoreItems = e
            }
            return e.prototype.areAllItemsReady = function() {
                return !this.hasMoreItems
            }, e.prototype.invalidateHasMore = function() {
                this.hasMoreItems = !0
            }, e.prototype.addDataToAjax = function(e) {}, e
        })(),
        s = (function() {
            function e(e) {
                this.ajaxURL = e.ajaxURL, this.newDataCallback = e.newDataAvailableCallback, this.autoFetching = !1, this.mode = e.mode, this.keyName = e.keyName, this.items = {}, this.pages = [], this.nextRequestVoucher = e.firstPage.next_request_voucher, this.userID = e.userID, this.fqPathPrefix = e.fqPathPrefix ? "/" + e.fqPathPrefix : "", this.addPage(e.firstPage.items)
            }
            return e.prototype.areAllItemsReady = function() {
                return this.mode.areAllItemsReady()
            }, e.prototype.addPage = function(e) {
                for (var t = [], r = [], o = 0, a = e; o < a.length; o++) {
                    var s = a[o],
                        l = s[this.keyName];
                    if (null == l) return void i.Notify.warning(n._("Invalid server response"));
                    null == this.items[l] && (this.items[l] = s, r.push(s), t.push(l))
                }
                this.pages.push(t), this.newDataCallback(this, r)
            }, e.prototype.startAutoFetching = function() {
                this.autoFetching = !0, this.fetchNext()
            }, e.prototype.stopAutoFetching = function() {
                this.autoFetching = !1
            }, e.prototype.reSync = function(e) {
                void 0 === e && (e = !1), e && (this.nextRequestVoucher = null, this.items = {}, this.pages = []);
                var t = this.autoFetching && this.mode.areAllItemsReady();
                this.mode.invalidateHasMore(), t && this.startAutoFetching()
            }, e.prototype.fetchNext = function() {
                var e = this;
                if (!this.mode.areAllItemsReady()) {
                    var t = {};
                    this.nextRequestVoucher && (t.voucher = this.nextRequestVoucher), this.mode.addDataToAjax(t), o.WebRequest({
                        url: this.ajaxURL,
                        data: t,
                        subject_user: this.userID,
                        success: function(t) {
                            var r = JSON.parse(t);
                            e.nextRequestVoucher = r.next_request_voucher, e.mode.hasMoreItems = r.has_more_items, e.autoFetching && e.fetchNext();
                            for (var o = 0, n = r.items; o < n.length; o++) {
                                var i = n[o];
                                i.fq_path = e.fqPathPrefix + i.fq_path
                            }
                            e.addPage(r.items)
                        },
                        error: function() {
                            i.Notify.error(n._("There was a problem completing this request."))
                        }
                    })
                }
            }, e.prototype.loadedPageCount = function() {
                return this.pages.length
            }, e.prototype.getLoadedPage = function(e) {
                var t = this,
                    r = this.pages[e];
                return null == r ? null : r.map(function(e) {
                    return t.items[e]
                })
            }, e.prototype.getLastLoadedPage = function() {
                return this.getLoadedPage(this.loadedPageCount() - 1)
            }, e
        })();
    t.BasePaginationManager = s;
    var l = (function(e) {
        function t(t) {
            return e.call(this, r.__assign({}, t, {
                mode: new a(t.firstPage.has_more_items)
            })) || this
        }
        return r.__extends(t, e), t.create = function(e) {
            return new t(e)
        }, t
    })(s);
    t.PaginationManager = l
}), define("modules/clean/react/app_actions/education/async_extensions_edu_modal", ["require", "exports", "tslib", "react", "modules/clean/react/modal"], function(e, t, r, o, n) {
    "use strict";

    function i(t, i) {
        var a = this;
        return new Promise(function(t) {
            return r.__awaiter(a, void 0, void 0, function() {
                var a;
                return r.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, new Promise(function(t, r) {
                                e(["modules/clean/react/app_actions/education/edu_modal_component"], t, r)
                            }).then(r.__importStar)];
                        case 1:
                            return a = s.sent().AppActionsEduModal, t(n.Modal.showInstance(o.default.createElement(a, {
                                appName: i
                            }))), [2]
                    }
                })
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), t.asyncShowExtensionsEduModal = i
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/async_fileops_modals", ["require", "exports"], function(e, t) {
    "use strict";

    function r(t) {
        new Promise(function(t, r) {
            e(["modules/clean/react/fileops_modals"], t, r)
        }).then(__importStar).then(t)
    }

    function o(e) {
        r(function(t) {
            return (0, t.showCopy)(e)
        })
    }

    function n(e) {
        r(function(t) {
            return (0, t.showMove)(e)
        })
    }

    function i(e) {
        r(function(t) {
            return (0, t.showUpload)(e)
        })
    }

    function a(e) {
        r(function(t) {
            return (0, t.showAdminUpload)(e)
        })
    }

    function s(t) {
        new Promise(function(t, r) {
            e(["modules/clean/react/folder_dialog/move_dialog_modal"], t, r)
        }).then(__importStar).then(function(e) {
            return e.MoveDialogModal.show(t)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showCopy = o, t.showMove = n, t.showUpload = i, t.showAdminUpload = a, t.showMoveDialog = s
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/async_onboarding_move_modal", ["require", "exports"], function(e, t) {
    "use strict";

    function r(t) {
        new Promise(function(t, r) {
            e(["modules/clean/react/onboarding_folder_dialog/onboarding_move_dialog"], t, r)
        }).then(__importStar).then(function(e) {
            return (0, e.showMove)(t)
        })
    }

    function o(t) {
        new Promise(function(t, r) {
            e(["modules/clean/react/onboarding_folder_dialog/onboarding_move_dialog_v2"], t, r)
        }).then(__importStar).then(function(e) {
            return (0, e.showMoveDialog)(t)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showOnboardingMoveDialog = r, t.showOnboardingMoveDialogV2 = o
}), define("modules/clean/react/browse/actions", ["require", "exports", "tslib", "external/immutable", "modules/clean/cloud_docs/open_with_utils", "modules/clean/cloud_docs/preferred_editor_utils", "modules/clean/cloud_docs/types", "modules/clean/downloads", "modules/clean/file_operations/notifications", "modules/clean/filepath", "modules/clean/flux/dispatcher", "modules/clean/history", "modules/clean/react/async_file_modal_controller", "modules/clean/react/browse/action_logger", "modules/clean/react/browse/api", "modules/clean/react/browse/constants", "modules/clean/react/browse/data/action_creators", "modules/clean/react/browse/data/helpers", "modules/clean/react/browse/data/selectors", "modules/clean/react/browse/data/store", "modules/clean/react/browse/models", "modules/clean/react/browse/nav_actions", "modules/clean/react/file_uploader/constants", "modules/clean/react/file_viewer/async_controller", "modules/clean/react/fileops_actions", "modules/clean/react/files_view/types", "modules/clean/react/share_download/api", "modules/clean/sharing/browse_exports", "modules/clean/sharing/constants", "modules/clean/user_education/user_education_client", "modules/constants/python", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b, T, F, y, C, I, O, P, R, D) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), s = r.__importStar(s), l = r.__importStar(l), c = r.__importStar(c), u = r.__importDefault(u), p = r.__importStar(p), h = r.__importStar(h), m = r.__importStar(m), g = r.__importStar(g), F = r.__importStar(F), C = r.__importStar(C);
    var A = (function() {
        function A() {
            var n = this;
            this.initializeEverything = function(e) {
                var t = e.path,
                    r = e.files,
                    i = e.paginatedTotalNumFiles,
                    a = e.context,
                    s = e.mountPoints,
                    l = e.fqPathsToSelect,
                    c = e.loadingState,
                    u = e.teamFolders;
                n.reduxStore.dispatch(m.setPath({
                    path: t
                })), n.reduxStore.dispatch(m.appendFiles({
                    path: t,
                    files: r.concat(u).map(function(e) {
                        return e instanceof E.File ? e : E.File.fromServerObject(e)
                    })
                })), n.reduxStore.dispatch(m.setPaginatedTotalNumFiles({
                    paginatedTotalNumFiles: i
                })), n.reduxStore.dispatch(m.setMountPoints({
                    mountPoints: s
                })), n.reduxStore.dispatch(m.setLoadingState({
                    loadingState: c,
                    path: t
                })), c === y.LoadingState.LOADED ? n.reduxStore.dispatch(m.selectFilesByFqPath({
                    fqPathsToSelect: l
                })) : n.reduxStore.dispatch(m.setFilePathsToSelectOnNextUpdate({
                    filePathsToSelectOnNextUpdate: o.Set(l)
                })), n.reduxStore.dispatch(m.setContext({
                    context: a
                })), d.Dispatcher.dispatch({
                    type: b.UploaderActionType.SET_PATH,
                    data: {
                        path: t,
                        hasPermissionToUploadToFolder: a.isCurrentPathWriteable()
                    }
                }), d.Dispatcher.dispatch({
                    type: f.SharedWithActionType.BROWSE_FILES_LOADED,
                    data: {
                        parentPath: t,
                        files: r
                    }
                })
            }, this.addFilesAndSetLoadingState = function(e) {
                var t = e.path,
                    r = e.loadingState,
                    o = e.files,
                    i = e.paginatedTotalNumFiles;
                n.reduxStore.dispatch(m.appendFiles({
                    path: t,
                    files: o
                })), n.reduxStore.dispatch(m.setPaginatedTotalNumFiles({
                    paginatedTotalNumFiles: i
                })), n.reduxStore.dispatch(m.setLoadingState({
                    loadingState: r,
                    path: t
                })), d.Dispatcher.dispatch({
                    type: f.SharedWithActionType.BROWSE_FILES_LOADED,
                    data: {
                        parentPath: t,
                        files: o
                    }
                })
            }, this.nameNewFolder = function() {
                n.reduxStore.dispatch(m.setNewFolderCreationState({
                    newFolderCreationState: y.NewFolderCreationState.PENDING_INPUT
                }))
            }, this.createFolderPending = function() {
                _.logCreateFolderPending(), n.reduxStore.dispatch(m.setNewFolderCreationState({
                    newFolderCreationState: y.NewFolderCreationState.SAVING_INPUT
                }))
            }, this.cancelCreateFolder = function() {
                _.logCreateFolderCancel(), n.reduxStore.dispatch(m.setNewFolderCreationState({
                    newFolderCreationState: y.NewFolderCreationState.CREATE_FOLDER_INACTIVE
                })), window.setTimeout(function() {
                    P.UEClient.sendEvent("CdmNewFolderModal", "maybeFinished")
                }, 2500)
            }, this.createFolderComplete = function(e) {
                var t = e.folderName,
                    r = e.user,
                    o = e.changesets;
                _.logCreateFolderSuccess(), n.reduxStore.dispatch(m.setNewFolderCreationState({
                    newFolderCreationState: y.NewFolderCreationState.CREATE_FOLDER_INACTIVE
                })), l.notifyFolderCreationSuccess(t, r, o), window.setTimeout(function() {
                    P.UEClient.sendEvent("CdmNewFolderModal", "maybeFinished")
                }, 2500)
            }, this.createFolder = function(e) {
                var t = e.folderName,
                    o = e.pathName,
                    i = e.nsId,
                    a = void 0 === i ? null : i,
                    s = e.checkFSWs,
                    l = e.showShareModalOnSuccess,
                    d = e.redirectOnSuccess,
                    u = e.redirectOnCancel,
                    f = e.selectCreatedFolder,
                    m = void 0 === f || f,
                    S = g.user(n.reduxStore.getState());
                n.createFolderPending(), h.createNewFolder({
                    pathName: o,
                    folderName: t,
                    nsId: a,
                    checkFSWs: s,
                    userId: S.id,
                    onSuccess: function(o) {
                        var i = o.changesets,
                            a = o.createdFolder,
                            s = o.failureDetails;
                        if (s) {
                            var u = function() {
                                n.createFolder(r.__assign({}, e, {
                                    checkFSWs: !1
                                }))
                            };
                            p.showFileSystemWarningsModal({
                                fsws: s,
                                onFinalAccept: u,
                                confirmText: D._("Create folder"),
                                onAbortAction: n.cancelCreateFolder
                            })
                        } else {
                            var _ = a ? c.filename(a.fq_path) : t;
                            n.createFolderComplete({
                                user: S,
                                folderName: _,
                                changesets: i
                            }), a && (m && n.selectRowsFromBoltClient([a]), d && d(a.fq_path), l && n.handleShowShareModal(a, O.SHARE_ACTION_ORIGIN_TYPE.BROWSE_NEW_FOLDER_MODAL))
                        }
                    },
                    onError: function() {
                        _.logCreateFolderError(), n.cancelCreateFolder(), u && u()
                    }
                })
            }, this.createFolderInNewFolderModal = function(e) {
                var r = e.folderName,
                    o = e.isConfidential,
                    n = e.user,
                    i = e.context,
                    a = e.redirectOnSuccess,
                    s = e.redirectOnCancel,
                    l = e.fqPath,
                    c = e.selectCreatedFolder,
                    d = i ? i.currentFQPath : l,
                    u = i ? i.rootNSID : n.root_ns_id;
                o && i && !i.isInsideTeamFolderTree ? I.asyncShowNewFolderShareModal(n, null, d, r, !1, !1, null, w.browseNavActions.setPath, w.browseNavActions.setUrl) : t.browseActions.createFolder({
                    pathName: d,
                    folderName: r,
                    nsId: u,
                    checkFSWs: !1,
                    showShareModalOnSuccess: (n.is_cdm_member || o) && !!i && i.isInsideTeamFolderTree,
                    redirectOnSuccess: a,
                    redirectOnCancel: s,
                    selectCreatedFolder: c
                })
            }, this.handleNewFolderRedirectOnSuccess = function(e) {
                w.browseNavActions.setUrl({
                    path: e
                })
            }, this.doDeleteFilesWithModal = function(e) {
                var t = e.files,
                    r = (e.expDeleteUseApiV2, g.user(n.reduxStore.getState())),
                    o = g.context(n.reduxStore.getState());
                p.showDelete(r, t, o, c.filename(o.currentFQPath), function() {
                    h.deleteFiles({
                        files: t,
                        userId: r.id,
                        onSuccess: function(e) {
                            var o = e.changesets;
                            l.notifyDeleteSuccess(t.length, r, o, function() {
                                n.selectRowsFromBoltClient(t)
                            })
                        }
                    })
                })
            }, this.purgeSuccessCallback = function(e) {
                t.browseActions.reloadCurrentPath()
            }, this.onPurgeBatch = function(t, o) {
                new Promise(function(t, r) {
                    e(["modules/clean/react/trash/actions"], t, r)
                }).then(r.__importStar).then(function(e) {
                    (0, e.purgeByPathBatch)(t, o, n.purgeSuccessCallback)
                })
            }, this.doPermanentDeleteWithModal = function(e) {
                var t = g.user(n.reduxStore.getState()),
                    r = g.context(n.reduxStore.getState());
                p.showPurgeModal({
                    userId: t.id,
                    context: r,
                    files: e,
                    onPurge: n.onPurgeBatch
                })
            }, this.onRestore = function(e, t, r) {
                h.restoreFiles({
                    files: t,
                    userId: e,
                    onSuccess: function() {
                        l.notifyRestoreSuccess(t)
                    },
                    isSearchMode: r
                })
            }, this.doRestoreFilesWithUnifiedTrashModal = function(e) {
                var t = e.files,
                    r = g.user(n.reduxStore.getState()),
                    o = g.context(n.reduxStore.getState());
                p.showUnifiedTrashModal({
                    userId: r.id,
                    context: o,
                    files: t,
                    onRestore: function(e, t) {
                        n.onRestore(e, t, !1)
                    }
                })
            }, this.handleShowRewindPanel = function() {
                u.default.update_query_param(f.BrowseQueryArg.rewind, "true"), n.reduxStore.dispatch(m.showTimeline())
            }, this.fetchFolderSizes = function(e) {
                var t = e.file;
                return r.__awaiter(n, void 0, Promise, function() {
                    var e, o, n, i, a, s, l, c, d;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                e = g.user(this.reduxStore.getState()), o = f.MAX_FOLDER_SIZE_ITERATIONS, r.label = 1;
                            case 1:
                                return r.trys.push([1, 7, , 8]), this.reduxStore.dispatch(m.requestFolderSizes({
                                    fqPath: t.fq_path
                                })), [4, h.fetchSharedFolderSizes(e.id, {
                                    fq_path: t.fq_path
                                })];
                            case 2:
                                return n = r.sent(), this.reduxStore.dispatch(m.setFolderSizesPending({
                                    fetchFolderSizesResp: n
                                })), i = [], [4, this.fetchAndSetSameNamespaceFolderSize(e.id, {
                                    fq_path: t.fq_path,
                                    folder_limit: f.MAX_FOLDERS_PER_CALL
                                })];
                            case 3:
                                a = r.sent(), a.queue && (i = i.concat(a.queue)), r.label = 4;
                            case 4:
                                return i.length > 0 && o > 0 ? (o--, s = Math.min(f.MAX_FOLDER_SIZE_QUEUE_SIZE, i.length), l = i.splice(0, s), [4, this.fetchAndSetSameNamespaceFolderSize(e.id, {
                                    fq_path: t.fq_path,
                                    folder_limit: f.MAX_FOLDERS_PER_CALL,
                                    queue: l
                                })]) : [3, 6];
                            case 5:
                                return a = r.sent(), a.queue && i && (i = i.concat(a.queue)), [3, 4];
                            case 6:
                                return c = 0 !== o && a.queue && 0 === a.queue.length ? y.FetchFolderSizeState.COMPLETE : y.FetchFolderSizeState.ERROR, this.reduxStore.dispatch(m.completeFolderSizes({
                                    fetchFolderSizeState: c
                                })), [3, 8];
                            case 7:
                                return d = r.sent(), this.reduxStore.dispatch(m.setFolderSizesPending({
                                    fetchFolderSizesResp: {
                                        sizes_dict: [{
                                            fq_path: t.fq_path,
                                            size: 0
                                        }],
                                        queue: []
                                    }
                                })), this.reduxStore.dispatch(m.completeFolderSizes({
                                    fetchFolderSizeState: y.FetchFolderSizeState.ERROR
                                })), [3, 8];
                            case 8:
                                return [2]
                        }
                    })
                })
            }, this.fetchMultipleFolderSizes = function(e) {
                var t = e.files;
                return r.__awaiter(n, void 0, Promise, function() {
                    var e, o, n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                e = 0, o = t.toArray(), r.label = 1;
                            case 1:
                                return e < o.length ? (n = o[e], [4, this.fetchFolderSizes({
                                    file: n
                                })]) : [3, 4];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return e++, [3, 1];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, this.reduxStore = v.getStoreForBrowse()
        }
        return A.prototype.reloadCurrentPath = function() {
            this.setUrl({
                path: g.path(this.reduxStore.getState()),
                qargs: {
                    reload: "1"
                }
            })
        }, A.prototype.setUrl = function(e) {
            var t = e.path,
                r = e.qargs;
            w.browseNavActions.setUrl({
                path: t,
                qargs: r
            })
        }, A.prototype.selectRowsFromBoltClient = function(e) {
            void 0 === e && (e = []), this.reduxStore.dispatch(m.setFilePathsToSelectOnNextUpdate({
                filePathsToSelectOnNextUpdate: o.Set(e.map(function(e) {
                    return e.fq_path
                }))
            }))
        }, A.prototype.copyFiles = function(e) {
            F.copyFiles(e)
        }, A.prototype.moveFiles = function(e) {
            F.moveFiles(e)
        }, A.prototype.selectFilesAfterUpload = function(e) {
            var t = e.fqPathsToSelect,
                r = g.unsortedFilesWithFolderSizes(this.reduxStore.getState());
            t.every(function(e) {
                return r.has(e)
            }) ? this.reduxStore.dispatch(m.selectFilesByFqPath({
                fqPathsToSelect: t
            })) : this.reduxStore.dispatch(m.setFilePathsToSelectOnNextUpdate({
                filePathsToSelectOnNextUpdate: o.Set(t)
            }))
        }, A.prototype.selectFilesByFqPath = function(e) {
            var t = e.fqPathsToSelect;
            this.reduxStore.dispatch(m.selectFilesByFqPath({
                fqPathsToSelect: t
            }))
        }, A.prototype.navigateToFileOrFolder = function(e) {
            var t = this,
                r = e.file,
                o = e.shouldFocusComment,
                n = void 0 !== o && o,
                a = e.onFileViewerUnmount,
                s = e.fileViewAction,
                l = void 0 === s ? R.FileViewActionType.CLICK : s,
                c = e.fileViewOrigin,
                d = void 0 === c ? R.FileViewOriginType.BROWSE : c,
                u = e.preferredEditors,
                _ = g.user(this.reduxStore.getState()),
                h = g.context(this.reduxStore.getState());
            if (r.isDeleted) this.doRestoreFilesWithUnifiedTrashModal({
                files: [r]
            });
            else if (r.is_dir) E.File.isNoAccessSharedFolder(r) ? p.showNoAccess(_, r, h) : this.setUrl({
                path: r.fq_path
            });
            else {
                var f = function() {
                    t.openPreviewForBrowseFile(r, n, _, l, d, a)
                };
                !n && u && i.hasPreferredEditorSupport(r) ? i.openInPreferredEditor(_, r, u, f, {
                    fileViewAction: l,
                    fileViewOrigin: d
                }) : f()
            }
        }, A.prototype.openPreviewForBrowseFile = function(e, t, r, o, i, s) {
            var l = this,
                c = S.getIndexOfFile(e, this.reduxStore.getState()),
                d = c < 0 ? [e] : g.sortedFilesWithFolderSizes(this.reduxStore.getState()).toArray();
            if (c < 0 ? c = 0 : d[c] = e, e.is_cloud_doc) n.openCloudDoc(e, r, o === R.FileViewActionType.SEARCH ? a.WebSearchSource : a.WebBrowseSource);
            else {
                var u, p = function() {
                        T.showElementsBehindFileViewer(), l.reduxStore.dispatch(m.setIsFileViewerShown({
                            isShown: !1
                        })), s && s(), u && u.focus()
                    },
                    _ = function() {
                        u = document.querySelector(":focus"), T.hideElementsBehindFileViewer(), l.reduxStore.dispatch(m.setIsFileViewerShown({
                            isShown: !0
                        }))
                    };
                T.asyncOpenPreview({
                    containerId: f.BROWSE_FILE_VIEWER_ELEMENT_ID,
                    files: d,
                    indexOfPreviewFile: c,
                    shouldFocusComment: t,
                    user: r,
                    onFileViewerDidMount: _,
                    onFileViewerUnmount: p,
                    fileViewAction: o,
                    fileViewOrigin: i,
                    fileViewTarget: R.FileViewTargetType.PRIVATE
                })
            }
        }, A.prototype.navigateToResultObjectParentFolder = function(e) {
            var t = e.file,
                r = e.fileViewAction;
            void 0 === r && R.FileViewActionType.CLICK;
            if (E.File.isNoAccessSharedFolder(t)) p.showNoAccess(g.user(this.reduxStore.getState()), t, g.context(this.reduxStore.getState()));
            else {
                var o = c.parent_dir(t.fq_path);
                this.setUrl({
                    path: o
                })
            }
        }, A.prototype.navigateToParentFolder = function() {
            var e = c.parent_dir(g.path(this.reduxStore.getState()));
            this.setUrl({
                path: e
            })
        }, A.prototype.setShouldShowDeletedFiles = function(e) {
            e.shouldShowDeletedFiles ? u.default.update_query_param(f.BrowseQueryArg.d, "1") : u.default.remove_query_param(f.BrowseQueryArg.d)
        }, A.prototype.downloadFiles = function(e) {
            var t = e.files,
                o = e.context,
                n = e.user;
            return r.__awaiter(this, void 0, void 0, function() {
                var e, i, a, l, c;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return 1 !== t.count() || t.first().is_dir ? [3, 4] : (e = t.first(), e instanceof E.FileSharedWithMe ? [4, C.fetchDownloadUrl(e.href)] : [3, 2]);
                        case 1:
                            return a = r.sent(), [3, 3];
                        case 2:
                            a = e.href, r.label = 3;
                        case 3:
                            return i = a, s.get({
                                url: i
                            }), [2];
                        case 4:
                            return o.blockHash ? (l = o.currentFQPath, c = t.toArray().map(function(e) {
                                return e.fq_path
                            }), s.get_zip({
                                fq_paths: c,
                                subject_uid: n.id,
                                block_hash: o.blockHash,
                                parent_path: l
                            }), [2]) : [2]
                    }
                })
            })
        }, A.prototype.fetchAndSetSameNamespaceFolderSize = function(e, t) {
            return r.__awaiter(this, void 0, Promise, function() {
                var o;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, h.fetchSameNamespaceFolderSizes(e, t)];
                        case 1:
                            return o = r.sent(), this.reduxStore.dispatch(m.setFolderSizesPending({
                                fetchFolderSizesResp: o
                            })), [2, o]
                    }
                })
            })
        }, A.prototype.handleShowShareModal = function(e, t) {
            var r = g.user(this.reduxStore.getState()),
                o = g.context(this.reduxStore.getState());
            I.asyncShowShareModal(r, e, {
                browseContext: o,
                origin: t
            }, w.browseNavActions.setPath, w.browseNavActions.setUrl)
        }, A.prototype.handleShowShareInterstitialModal = function(e, t, r, o, n) {
            var i = g.user(this.reduxStore.getState()),
                a = g.context(this.reduxStore.getState());
            I.expAsyncShowShareInterstitialModal(i, e, r, o, n, {
                browseContext: a,
                origin: t
            }, w.browseNavActions.setPath, w.browseNavActions.setUrl)
        }, A
    })();
    t.browseActions = new A
}), define("modules/clean/react/browse/api", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/filepath", "external/lodash", "modules/core/i18n", "modules/clean/react/browse/models", "modules/core/html", "modules/core/notify", "modules/core/uri", "modules/clean/api_v2/user_client"], function(e, t, r, o, n, i, a, s, l, c, d, u) {
    "use strict";

    function p(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            if (!(e instanceof SyntaxError)) throw e
        }
        return null
    }

    function _(e) {
        var t = e.sortLabel,
            r = e.sortIsAscending,
            n = e.path,
            i = e.userId,
            a = e.onSuccess,
            s = e.includeDeletedFiles,
            l = void 0 !== s && s,
            c = e.sortFoldersFirst,
            d = void 0 === c || c,
            u = e.onError;
        return o.WebRequest({
            data: {
                sort_label: t,
                sort_is_ascending: r.toString(),
                show_deleted: l || "",
                sort_folders_first: d,
                include_file_info: "True",
                path2: n
            },
            url: "/browse",
            subject_user: i,
            success: function(e, t, r) {
                var o = p(e);
                o && a({
                    path: n,
                    data: o,
                    xhr: r
                })
            },
            error: function(e, t, r) {
                u && u(e, t, r)
            }
        })
    }

    function h(e) {
        var t = e.files,
            r = e.newPath,
            n = e.userId,
            l = e.onSuccess,
            d = e.checkFSWs,
            u = t.map(function(e) {
                return e.fq_path
            });
        return u.includes(r) ? (c.Notify.error(a._("You can’t copy a folder into itself.")), null) : o.WebProgressRequest({
            url: "/cmd/copy",
            data: {
                files: u,
                to_path: r,
                fsw_request: d ? "check" : void 0
            },
            subject_user: n,
            progress_text: a._("Copying files..."),
            success: function(e) {
                try {
                    var t = i.isString(e) ? JSON.parse(e) : e;
                    l({
                        newFiles: t.new_browse_files ? t.new_browse_files.map(s.File.fromServerObject) : [],
                        destinationPath: r,
                        changesets: t.changesets,
                        failureDetails: t.failure_details
                    })
                } catch (e) {}
            }
        })
    }

    function f(e) {
        var t = e.files,
            r = e.userId,
            n = e.onSuccess,
            s = t.map(function(e) {
                return e.fq_path
            });
        return o.WebProgressRequest({
            url: "/cmd/delete",
            data: {
                files: s
            },
            subject_user: r,
            progress_text: a._("Deleting files..."),
            success: function(e) {
                try {
                    var r = i.isString(e) ? JSON.parse(e) : e;
                    n({
                        fileDeltas: t.map(function(e) {
                            return {
                                before: e,
                                after: null
                            }
                        }),
                        changesets: r.changesets
                    })
                } catch (e) {}
            }
        })
    }

    function m(e, t) {
        return r.__awaiter(this, void 0, Promise, function() {
            var o;
            return r.__generator(this, function(r) {
                o = 2;
                try {
                    return "/" === e && (e = ""), [2, (new u.UserApiV2Client).ns("chronicle").rpc("can_rewind", {
                        path: e,
                        version: o
                    }, {
                        subjectUserId: t
                    })]
                } catch (e) {
                    return [2, {
                        can_rewind: !1
                    }]
                }
                return [2]
            })
        })
    }

    function S(e) {
        var t = e.path,
            r = e.files,
            d = e.newPath,
            u = e.userId,
            p = e.onSuccess,
            _ = e.allowOwnershipTransfer,
            h = e.checkFSWs;
        if (void 0 !== t && n.paths_are_equal(t, d)) return c.Notify.error(a._("Those files already exist in that folder.")), null;
        var f = r.map(function(e) {
            return e.fq_path
        });
        return f.includes(d) ? (c.Notify.error(a._("You can’t move a folder into itself.")), null) : o.WebProgressRequest({
            url: "/cmd/move",
            data: {
                files: f,
                to_path: d,
                allow_ownership_transfer: _,
                fsw_request: h ? "check" : void 0
            },
            subject_user: u,
            progress_text: a._("Moving files..."),
            skipNotifyError: !_,
            success: function(e) {
                try {
                    var r = i.isString(e) ? JSON.parse(e) : e;
                    p({
                        path: t,
                        destinationPath: d,
                        newFiles: r.new_browse_files ? r.new_browse_files.map(s.File.fromServerObject) : [],
                        changesets: r.changesets,
                        failureDetails: r.failure_details
                    })
                } catch (e) {}
            },
            error: function(t, r, o) {
                c.Notify.error(new l.HTML(o)), e.onError && e.onError(o)
            }
        })
    }

    function g(e) {
        var t = e.files,
            r = e.userId,
            n = e.onSuccess,
            i = e.isSearchMode;
        return o.WebProgressRequest({
            url: "/cmd/restore",
            data: {
                files: t.map(function(e) {
                    return e.fq_path
                }),
                source: i ? "search" : "browse"
            },
            subject_user: r,
            dataType: "text",
            progress_text: a._("Restoring…"),
            success: function() {
                n()
            }
        })
    }

    function v(e) {
        var t = e.userId,
            r = e.changesets,
            n = void 0 === r ? null : r,
            i = e.progressText,
            a = e.onSuccess;
        return o.WebProgressRequest({
            url: "/cmd/rollback",
            data: {
                ns_to_cs: JSON.stringify(n)
            },
            subject_user: t,
            progress_text: i,
            success: function() {
                a()
            }
        })
    }

    function E(e) {
        var t = e.pathName,
            r = e.folderName,
            n = e.userId,
            i = e.onSuccess,
            a = e.onError,
            l = e.checkFSWs;
        return o.WebProgressRequest({
            url: new d.URI({
                path: "/cmd/new" + t
            }).toString(),
            data: {
                to_path: r,
                folder: "yes",
                fsw_request: l ? "check" : void 0
            },
            subject_user: n,
            success: function(e) {
                var t = p(e);
                if (t) {
                    var r = t.new_browse_files ? s.File.fromServerObject(t.new_browse_files[0]) : null;
                    i({
                        changesets: t.changesets,
                        createdFolder: r,
                        failureDetails: t.failure_details
                    })
                }
            },
            error: function() {
                a()
            }
        })
    }

    function w(e) {
        var t = e.pathName,
            r = e.title,
            n = e.documentType,
            i = e.userId,
            a = e.onSuccess,
            l = e.onError,
            c = e.checkFSWs,
            u = e.actionSource,
            _ = (t + "/" + r + "." + n).replace("//", "/");
        return o.WebRequest({
            url: new d.URI({
                path: "/cmd/create_cloud_doc"
            }).toString(),
            subject_user: i,
            data: {
                to_path: _,
                title: r,
                fsw_request: c ? "check" : void 0,
                action_source: u
            },
            success: function(e) {
                var t = p(e);
                if (t) {
                    a({
                        changesets: null,
                        createdFile: t.new_browse_files ? s.File.fromServerObject(t.new_browse_files[0]) : null,
                        failureDetails: t.failure_details
                    })
                }
            },
            error: function(e, t, r) {
                l(r)
            },
            skipNotifyError: !0
        })
    }

    function b(e) {
        var t = e.path,
            r = e.userId,
            n = e.namespaceToJournalIdMap,
            a = e.onSuccess,
            s = e.includeDeletedFiles,
            l = "/" === t ? "" : t,
            c = {
                fq_dir: l,
                ns_map: i.map(n, function(e, t) {
                    return t + "_" + e
                }).join(","),
                show_deleted: !!s
            };
        return o.WebRequest({
            url: "/update/list_dir",
            subject_user: r,
            data: c,
            dataType: "text",
            success: function(e) {
                var t = p(e);
                t && a(t)
            }
        })
    }

    function T(e, t) {
        return (new u.UserApiV2Client).ns("folders").rpc("get_shared_subfolder_sizes", t, {
            subjectUserId: e
        })
    }

    function F(e, t) {
        return (new u.UserApiV2Client).ns("folders").rpc("get_subfolder_sizes_in_same_namespace", t, {
            subjectUserId: e
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), i = r.__importStar(i), t.loadPath = _, t.copyFiles = h, t.deleteFiles = f, t.isRewindButtonEnabled = m, t.moveFiles = S, t.renameFile = function(e) {
        var t = e.file,
            r = e.name,
            n = e.user,
            i = e.checkFSWs;
        return new Promise(function(e, a) {
            o.WebRequest({
                url: new d.URI({
                    path: "/cmd/rename" + t.fq_path
                }).toString(),
                subject_user: n.id,
                data: {
                    to_path: r,
                    fsw_request: i ? "check" : void 0
                },
                success: function(r) {
                    var o = p(r);
                    if (o) {
                        var n = o.new_browse_files ? t.merge(o.new_browse_files[0]) : "";
                        e({
                            changesets: o.changesets,
                            renamedFile: n,
                            failureDetails: o.failure_details
                        })
                    } else a(r)
                },
                error: a
            })
        })
    }, t.restoreFiles = g, t.rollbackChangeSets = v, t.createNewFolder = E, t.createCloudDoc = w, t.getChangesForDirectory = b, t.fetchSharedFolderSizes = T, t.fetchSameNamespaceFolderSizes = F
}), define("modules/clean/react/browse/async_extensions", ["require", "exports", "tslib", "modules/clean/web_timing_logger", "modules/clean/redux/store"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function() {
        function t() {
            var e = this;
            this.initOnce = !1, this.emptyState = {}, this.sharingServiceInfo = function() {
                return e.emptyState
            }, this.getFeatureFlags = function() {
                return e.emptyState
            }, this.initializeStore = function(t, r) {
                return e.files = r, e.user = t, n.getStoreAndRegisterReducers({})
            }
        }
        return t.prototype.init = function() {
            var e = this;
            this.initOnce || (o.waitForTTI().then(function() {
                return e.loadExtensionsStore()
            }), this.initOnce = !0)
        }, t.prototype.loadExtensionsStore = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, o, n, i, a, s, l;
                return r.__generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return [4, Promise.all([new Promise(function(t, r) {
                                e(["modules/clean/react/extensions/data/store"], t, r)
                            }).then(r.__importStar), new Promise(function(t, r) {
                                e(["modules/clean/react/extensions/data/selectors"], t, r)
                            }).then(r.__importStar)])];
                        case 1:
                            return t = c.sent(), o = t[0], n = o.getStore, i = o.initializeStore, a = t[1], s = a.sharingServiceInfo, l = a.getFeatureFlags, n(), this.sharingServiceInfo = s, this.getFeatureFlags = l, this.initializeStore = i, this.user && this.initializeStore(this.user, this.files), [2]
                    }
                })
            })
        }, t
    })();
    t.asyncExtensions = new i
}), define("modules/clean/react/browse/browse", ["require", "exports", "tslib", "external/react-redux", "react", "modules/clean/react/browse/async_extensions", "modules/clean/react/browse/controller", "modules/clean/react/browse/data/action_creators", "modules/clean/react/browse/data/selectors", "modules/clean/react/browse/data/store", "modules/clean/react/files_view/data/action_creators", "modules/clean/react/files_view/data/selectors", "modules/clean/react/files_view/data/store", "modules/clean/react/folder_overview/data/action_creators", "modules/clean/react/retrieval_success_banner/data/selectors", "modules/clean/react/retrieval_success_banner/data/store", "modules/clean/search/search_bar/data/action_creators", "modules/clean/search/search_bar/data/selectors", "modules/clean/viewer", "modules/clean/web_timing_logger"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), s = r.__importStar(s), l = r.__importStar(l), d = r.__importStar(d), u = r.__importStar(u), _ = r.__importStar(_), m = r.__importStar(m), S = r.__importStar(S), v = r.__importStar(v);
    var E = function(e) {
            var t = l.context,
                r = l.sortedFilesWithFoldersSizesWithoutTeamFolders,
                o = l.sortedFilesWithFolderSizes,
                n = l.teamFolders,
                a = l.paginatedTotalNumFiles,
                s = l.loadingState,
                c = l.path,
                d = l.selection,
                p = l.selectedFiles,
                _ = l.shouldShowDeletedFiles,
                f = l.shouldShowPinnedTeamFolders,
                m = l.shouldShowSharedFolderInvites,
                g = l.newFolderCreationState,
                v = l.isTimelineVisible,
                E = l.optedInToRewind,
                w = l.isRewindButtonEnabled,
                b = l.sortOrder,
                T = l.urlPrefix,
                F = l.canDisplayFolderSizes,
                y = l.isQueryingFolderSizes,
                C = l.user,
                I = l.viewer,
                O = l.browsePostTTIExperiments,
                P = l.mountPoints,
                R = l.isFileJumping,
                D = l.folderOverviewPinnedItems,
                A = l.clickTimelineTimestamp,
                N = u.viewType,
                L = u.viewTypeColumns,
                x = S.searchSessionId,
                M = S.isSearchBarFocused;
            return i.asyncExtensions.init(), {
                files: o(e),
                filesWithoutTeamFolders: r(e),
                teamFolders: n(e),
                paginatedTotalNumFiles: a(e),
                loadingState: s(e),
                path: c(e),
                fileRename: u.fileRename(e),
                shouldShowDeletedFiles: _(e),
                shouldShowPinnedTeamFolders: f(e),
                shouldShowSharedFolderInvites: m(e),
                isTextSelectable: !!u.fileRename(e),
                createNewFolderState: g(e),
                isTimelineVisible: v(e),
                clickTimelineTimestamp: A(e),
                optedInToRewind: E(e),
                isRewindButtonEnabled: w(e),
                currentSort: b(e),
                urlPrefix: T(e),
                canDisplayFolderSizes: F(e),
                viewTypeColumns: L(e),
                isQueryingFolderSizes: y(e),
                user: C(e),
                viewer: I(e),
                browsePostTTIExperiments: O(e),
                browseContext: t(e),
                selection: d(e),
                selectedFiles: p(e),
                mountPoints: P(e),
                isFileJumping: R(e),
                searchSessionId: x(e),
                isSearchBarFocused: M(e),
                viewType: N(e),
                sharingServiceInfo: i.asyncExtensions.sharingServiceInfo(e),
                extensionsFeatureFlags: i.asyncExtensions.getFeatureFlags(e),
                shouldShowRetrievalSuccessBanner: h.isRetrievalSuccessBannerVisible(e),
                pinnedItems: D(e),
                contentScroll: l.shouldMainContentScroll(e),
                isCreateButtonMoveEnabled: !!l.isCreateButtonMoveEnabled(e)
            }
        },
        w = {
            addFileJumpKeyCode: s.addFileJumpKeyCode,
            appendFiles: s.appendFiles,
            applyBoltUpdates: s.applyBoltUpdates,
            blurSearchBar: m.blurSearchBar,
            clearFiles: s.clearFiles,
            clearSearchBar: m.clearSearchBar,
            copyFilesToClipboard: s.copyFilesToClipboard,
            optInToRewind: s.optInToRewind,
            setIsRewindButtonEnabled: s.setIsRewindButtonEnabled,
            hideTimeline: s.hideTimeline,
            pasteFilesFromClipboard: s.pasteFilesFromClipboard,
            renameFile: s.renameFile,
            resetFileJumpFilter: s.resetFileJumpFilter,
            setAndStoreSortOrder: s.setAndStoreSortOrder,
            setBrowsePostTTIExperiments: s.setBrowsePostTTIExperiments,
            setBrowseScope: m.setBrowseScope,
            setCanDisplayFolderSizes: s.setCanDisplayFolderSizes,
            setFileCategories: m.setFileCategories,
            setFileRename: d.setFileRename,
            setLoadingState: s.setLoadingState,
            setMountPoints: s.setMountPoints,
            setPath: s.setPath,
            setPathData: s.setPathData,
            setSearchBarExperiments: m.setExperiments,
            setSearchQuery: m.setSearchQuery,
            setSelection: s.setSelection,
            setShouldShowDeletedFiles: s.setShouldShowDeletedFiles,
            setUrl: s.setUrl,
            setViewType: d.setViewType,
            setViewTypeColumns: d.setViewTypeColumns,
            setViewTypeScope: d.setViewTypeScope,
            showTimeline: s.showTimeline,
            handleFolderOverviewPrefetch: _.handlePrefetch,
            addFolderOverviewLoadedComponent: _.addLoadedComponent
        },
        b = o.connect(E, w)(a.BrowseController),
        T = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                v.log_js_modules_application_code_start(), p.getStoreForFilesView(), f.getStoreForSuccessBanner(), r.reduxStore = c.getStoreForBrowse();
                var o = g.Viewer.get_viewer(),
                    n = o.get_user_by_id(t["user-id"]);
                return r.reduxStore.dispatch(d.loadViewTypes({
                    user: n
                })), r.reduxStore.dispatch(d.loadViewTypeColumns({
                    user: n
                })), r.reduxStore.dispatch(s.setPath({
                    path: t["init-fq-path"] || "/"
                })), r.reduxStore.dispatch(s.appInit({
                    experiments: t["exp-browse-experiments"] || {},
                    shouldShowDeletedFiles: !!t["should-show-deleted-files"],
                    user: n,
                    viewer: o
                })), r
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return n.default.createElement(o.Provider, {
                    store: this.reduxStore
                }, n.default.createElement(b, r.__assign({}, this.props)))
            }, t
        })(n.default.PureComponent);
    t.BrowseApp = T, t.RootComponent = function(e) {
        var t = e.webTimingLoggerProps,
            o = r.__rest(e, ["webTimingLoggerProps"]);
        return v.initialize_module(t), n.default.createElement(T, r.__assign({}, o))
    }
}), define("modules/clean/react/browse/browse_prefetch_loader", ["require", "exports", "tslib", "modules/core/exception", "modules/clean/react/files_view/types", "modules/clean/react/browse/models", "modules/clean/pagination_manager", "modules/core/notify", "modules/clean/web_timing_logger"], function(e, t, r, o, n, i, a, s, l) {
    "use strict";

    function c(e) {
        if (0 === e.indexOf("err:")) {
            var t = e.substr("err:".length);
            s.Notify.error(t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), l = r.__importStar(l);
    var d = (function() {
        function e(e, t, r, s) {
            var d = this,
                u = e.user,
                p = e.path,
                _ = e.fqPathsToSelect,
                h = t.onPrefetchComplete,
                f = t.onPrefetchError,
                m = t.onLoadComplete,
                S = t.onPostTTIPrefetchComplete,
                g = t.onPostTTIPrefetchError,
                v = r.onInitializeEverything,
                E = r.onLoad,
                w = r.onAddFilesAndSetLoadingState;
            void 0 === s && (s = window), this.isPrefetching = function() {
                return !!d.browsePreloadHandler && !!d.firstPagePreloadHandler
            }, this.handlePrefetch = function() {
                o.assert(d.isPrefetching(), "trying to handle prefetching and think we aren't prefetching at the same time.  something is wrong"), d.browsePreloadHandler(d.handlePrefetchDataSuccess, d.onPrefetchError), l.waitForTTI().then(function() {
                    d.postTTIPreloadHandler(d.handlePostTTIDataSuccess, d.onPostTTIPrefetchError)
                })
            }, this.handlePostTTIDataSuccess = function(e) {
                var t = void 0;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return void d.onPostTTIPrefetchError(e)
                }
                if (!t) return void d.onPostTTIPrefetchError();
                d.onPostTTIPrefetchComplete(t)
            }, this.handlePrefetchDataSuccess = function(e) {
                var t = d.extractAjaxInitData(e);
                if (!t) return void d.onPrefetchError();
                var r, o, a = [],
                    s = 0,
                    l = n.LoadingState.LOADING_FIRST_PAGE,
                    c = d.firstPagePreloadHandler.getDataIfAvailable();
                if (c) {
                    if (!c.payload || c.error) return void d.onPrefetchError(new Error(c.error));
                    var u = d.extractAjaxFileInfo(c.payload);
                    if (!u) return void d.onPrefetchError();
                    r = u.file_info, o = u.first_page, o ? (a = [], s = o.total_num_items, l = n.LoadingState.LOADING_REMAINING_PAGES) : r && (a = r, s = a.length, l = n.LoadingState.LOADED)
                }
                var p = i.BrowseContext.fromServerObject(t);
                d.onInitializeEverything({
                    path: d.path,
                    files: a.map(i.File.fromServerObject),
                    paginatedTotalNumFiles: s,
                    context: p,
                    mountPoints: t.ns_id_to_mount_point,
                    fqPathsToSelect: d.fqPathsToSelect,
                    loadingState: l,
                    teamFolders: t.team_folders_js_info && t.team_folders_js_info.map(i.File.fromServerObject)
                }), r || o ? (o ? d.initializePaginationManager(o) : d.onLoadComplete(), d.onPrefetchComplete(t)) : d.firstPagePreloadHandler(function(e) {
                    d.handleFirstPagePrefetchDataSuccess(e, t, p)
                }, d.onPrefetchError)
            }, this.handleFirstPagePrefetchDataSuccess = function(e, t, r) {
                var o = d.extractAjaxFileInfo(e);
                if (!o) return void d.onPrefetchError();
                o.paginated ? d.initializePaginationManager(o.first_page) : (d.onLoad({
                    path: d.path,
                    files: o.file_info.map(i.File.fromServerObject),
                    paginatedTotalNumFiles: o.file_info.length,
                    context: r
                }), d.onLoadComplete()), d.onPrefetchComplete(t)
            }, this.extractAjaxInitData = function(e) {
                var t = void 0;
                try {
                    t = JSON.parse(e)
                } catch (t) {
                    c(e)
                }
                return t
            }, this.extractAjaxFileInfo = function(e) {
                var t = void 0;
                try {
                    t = JSON.parse(e)
                } catch (t) {
                    c(e)
                }
                return t
            }, this.initializePaginationManager = function(e) {
                var t = e.total_num_items,
                    r = a.PaginationManager.create({
                        firstPage: e,
                        keyName: "sjid",
                        ajaxURL: "/browse_get_next",
                        userID: d.user.id,
                        newDataAvailableCallback: function(e, r) {
                            var o = e.areAllItemsReady(),
                                a = o ? n.LoadingState.LOADED : n.LoadingState.LOADING_REMAINING_PAGES;
                            d.onAddFilesAndSetLoadingState({
                                path: d.path,
                                files: r.map(i.File.fromServerObject),
                                paginatedTotalNumFiles: t,
                                loadingState: a
                            }), o && (e.stopAutoFetching(), d.onLoadComplete())
                        }
                    });
                l.waitForTTI().then(function() {
                    return r.startAutoFetching()
                })
            }, this.user = u, this.path = p, this.fqPathsToSelect = _, this.onPrefetchComplete = h, this.onPrefetchError = f, this.onLoadComplete = m, this.onPostTTIPrefetchComplete = S, this.onPostTTIPrefetchError = g, this.onInitializeEverything = v, this.onLoad = E, this.onAddFilesAndSetLoadingState = w, this.browsePreloadHandler = s.__REGISTER_BROWSE_PRELOAD_HANDLER, this.firstPagePreloadHandler = s.__REGISTER_BROWSE_FIRST_PAGE_PRELOAD_HANDLER, this.postTTIPreloadHandler = s.__REGISTER_BROWSE_POST_TTI_PRELOAD_HANDLER
        }
        return e
    })();
    t.BrowsePrefetchLoader = d
}), define("modules/clean/react/browse/browse_view", ["require", "exports", "tslib", "classnames", "external/immutable", "react", "modules/clean/cloud_docs/constants", "modules/clean/cloud_docs/new_file_menu", "modules/clean/analytics", "modules/clean/browse_uri_interface", "modules/clean/filepath", "modules/clean/filetypes", "modules/clean/react/async/loadable", "modules/clean/react/browse/action_logger", "modules/clean/react/browse/constants", "modules/clean/react/browse/logger_util", "modules/clean/react/browse/sidebar_view", "modules/clean/react/browse/title", "modules/clean/react/browse/uri_helper", "modules/clean/react/browse/web_team_sharing_experiment", "modules/clean/react/education/education_module_experiment", "modules/clean/react/file_uploader/file_uploader", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/controller", "modules/clean/react/files_view/types", "modules/clean/react/files_view/util", "modules/clean/react/folder_overview/connected", "modules/clean/react/growth/connected_checklist_banner", "modules/clean/react/growth/education_module_experiment", "modules/clean/react/maestro/search", "modules/clean/react/payments/mobile_billing_educational_modal", "modules/clean/upsell/top_notification_listener", "modules/clean/react/retrieval_success_banner/constants", "modules/clean/react/retrieval_success_banner/retrieval_success_browseview_banner", "modules/clean/react/retrieval_success_banner/util", "modules/clean/react/snackbar", "modules/clean/react/snackbar_manager", "modules/clean/search/types", "modules/clean/sharing/access_level", "modules/clean/sharing/shared_folder_invite/shared_folder_invite_async", "modules/clean/user_education/user_education_client", "modules/clean/web_timing_logger", "modules/clean/web_user_action_events", "modules/core/browser", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b, T, F, y, C, I, O, P, R, D, A, N, L, x, M, U, k, V, B, H, W, q, G) {
    "use strict";

    function z(e) {
        var t = e.selectedFiles,
            r = e.context,
            o = e.isDraggingInternalFiles,
            n = e.isDraggingExternalFiles,
            i = e.isUploadModalOpen;
        return r.isInsideSharedFolder && K.includes(r.currentSharedFolderPermissionRole) ? F.DropTargetHighlightMode.NONE : o ? t.some(function(e) {
            return e.isDeleted || e.type === u.FileTypes.TEAM_SHARED_FOLDER
        }) ? F.DropTargetHighlightMode.NONE : t.some(function(e) {
            return e.type === u.FileTypes.SHARED_FOLDER
        }) ? r.currentNSAllowsNesting ? F.DropTargetHighlightMode.NONSELECTED_FOLDERS : F.DropTargetHighlightMode.NONSELECTED_NONSHARED_FOLDERS : F.DropTargetHighlightMode.NONSELECTED_FOLDERS : n && !i ? F.DropTargetHighlightMode.ALL_FOLDERS : F.DropTargetHighlightMode.NONE
    }

    function j() {
        var e = document.querySelector("#embedded-app");
        return e ? e.parentElement : null
    }
    var Y = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n), i = r.__importDefault(i), d = r.__importStar(d), _ = r.__importStar(_), f = r.__importStar(f), q = r.__importStar(q);
    var K = [k.NameSpaceAccess.ACCESS_NO_ACCESS, k.NameSpaceAccess.ACCESS_READER, k.NameSpaceAccess.ACCESS_READER_NO_COMMENT];
    t.getCurrentDropTargetHighlightMode = z;
    var Q = (function(p) {
        function k(e) {
            var t = p.call(this, e) || this;
            return t.scrollContainer = i.default.createRef(), t.snackbarManager = i.default.createRef(), t.handleGetOverflowMenuActions = function(e, r, o) {
                var i = t.handleGetFileActionsForSetOfFiles(n.Set([e]), r, o, !1, !1, t.props.browsePostTTIExperiments.expRewindUpsell),
                    a = new Array;
                return i.forEach(function(e) {
                    "function" != typeof e && a.push(e)
                }), [a]
            }, t.handleGetFileActionsForSetOfFiles = function(e, r, o, n, i, a) {
                var s = t.props,
                    l = s.context,
                    c = s.user,
                    d = s.actionHandlers,
                    u = s.isOverFreeQuota,
                    p = s.hasExcludedNsIds,
                    _ = s.isQueryingFolderSizes,
                    h = s.browsePostTTIExperiments,
                    f = s.viewType,
                    m = s.extensionsFeatureFlags,
                    S = s.sharingServiceInfo,
                    g = s.pinnedItems,
                    v = t.state.fileActionsModule;
                if (!v) return [];
                var E = h.expShowAddToShowcase,
                    w = h.expShowAddFolderToShowcase,
                    b = h.expShowAddToTransfer,
                    T = h.expShowAddFolderToTransfer,
                    F = h.expShowRequestFiles,
                    y = h.expHasCreatedShowcase,
                    C = h.expHasShowcaseFreemium,
                    I = h.expShowShowcaseInterstitial,
                    O = h.expFolderCalcSize,
                    P = h.expListSubfoldersWithOdyssey,
                    R = h.expShowFileLocking,
                    D = h.expDeleteUseApiV2,
                    A = h.expMoveUseApiV2,
                    N = h.expCopyUseApiV2,
                    L = t.props.browseExperiments.expFolderHistoryRollbacks,
                    x = "CTX" === O,
                    M = t.props.browseExperiments,
                    U = M.expSearchSuccessBanner,
                    k = M.expBrowseSuccessBanner;
                return v.getActionsForFileCollection({
                    files: e,
                    context: l,
                    user: c,
                    viewType: f,
                    sharingServiceInfo: S,
                    extensionsFeatureFlags: m,
                    canDisplayFolderSizes: r,
                    actionHandlers: d,
                    skipSharing: !1,
                    isSearchMode: !1,
                    isOverFreeQuota: u,
                    hasExcludedNsIds: p,
                    isQueryingFolderSizes: _,
                    canShowUJPopup: n,
                    showAddToShowcase: !!E,
                    showAddFolderToShowcase: !!w,
                    hasCreatedShowcase: !!y,
                    hasShowcaseFreemium: !!C,
                    isSidebar: i,
                    showShowcaseInterstitialExp: !!I,
                    responsive: o,
                    showFolderCalcSize: x,
                    useSearchSuccessBanner: !!U,
                    expBrowseSuccessBanner: k,
                    pinnedItems: g,
                    expFolderHistoryRollbacks: L,
                    expRewindUpsell: a,
                    showAddToTransfer: !!b,
                    showAddFolderToTransfer: !!T,
                    showRequestFiles: !!F,
                    expListSubfoldersWithOdyssey: !!P,
                    expShowFileLocking: R,
                    expDeleteUseApiV2: !!D,
                    expCopyUseApiV2: !!N,
                    expMoveUseApiV2: !!A
                })
            }, t.handleLocationLinkClick = function(e, r) {
                if (!r) {
                    var o = d.parent_dir(e.fq_path);
                    t.props.onNavigateToPath(o)
                }
            }, t.handleOpenPaper = function(e) {
                q.redirect(e.url)
            }, t.handleUploadButtonClick = function(e) {
                w.FileUploaderController.setPath(t.props.path), w.FileUploaderController.handleUploadButtonClick(e)
            }, t.handleShowFileUploader = function() {
                w.FileUploaderController.setPath(t.props.path), w.FileUploaderController.showModal()
            }, t.handleSelectionChange = function(e) {
                var r = t.props.getFileByFullPath(e.selected.first());
                if (r) {
                    var o = r.ns_id,
                        n = r.sjid,
                        i = r.file_id,
                        a = r.fq_path,
                        s = r.bytes,
                        l = r.ext,
                        c = r.request_id;
                    _.logSelectRow({
                        uid: t.props.user.id,
                        entity_type: r.is_dir ? "folder" : "file",
                        view_type: t.props.viewType,
                        file_nsid: o,
                        file_sjid: n,
                        file_id: i,
                        file_name: d.filename(r.fq_path),
                        file_path: a,
                        file_size: s,
                        file_extension: l,
                        request_id: c
                    })
                }
                t.props.onSelectionChange({
                    selection: e
                })
            }, t.handleFileListSortChange = function(e, r) {
                _.logSortRecords({
                    uid: t.props.user.id,
                    sort_by: e,
                    sort_direction: r,
                    view_type: t.props.viewType
                }), t.props.onSortFiles({
                    sortField: e,
                    sortDirection: r
                })
            }, t.handleStarClick = function(e, r) {
                var o = r ? W.WebUserActionLogEvent.STAR : W.WebUserActionLogEvent.REMOVE_STAR,
                    n = t.props,
                    i = n.user,
                    a = n.viewType,
                    s = n.selectedFiles,
                    l = n.browseExperiments,
                    c = f.countFilesAndFolders(s),
                    d = c.num_files_selected,
                    u = c.num_folders_selected;
                _.logBrowseAction({
                    uid: i.id,
                    source: "BROWSE",
                    action: o,
                    num_files_selected: d,
                    num_folders_selected: u,
                    view_type: a,
                    result: e
                });
                var p = l.expSearchSuccessBanner,
                    h = l.expBrowseSuccessBanner;
                t.showRetrievalSuccessBanner(!!p, !1, h, W.WebUserActionLogEvent.STAR)
            }, t.setFilesViewControllerRef = function(e) {
                t.filesViewControllerRef = e
            }, t.handleFocusSearchBar = function() {
                document.getElementsByClassName("search__input")[0].focus()
            }, t.renderSharedWithController = function(e, r) {
                var o = t.props,
                    n = o.context,
                    a = o.user,
                    s = t.state.sharedWithModule;
                if (!s) return null;
                if (e.type === u.FileTypes.TEAM_SHARED_FOLDER && ("archived" === e.team_folder_status || "archive_in_progress" === e.team_folder_status)) return null;
                var l = t.props.selectedFiles,
                    c = !!l.size,
                    d = s.SharedWithController;
                return i.default.createElement("div", {
                    className: "brws-vertically-center brws-shared-with-wrapper"
                }, i.default.createElement(d, {
                    file: e,
                    browseContext: n,
                    inSelectMode: c,
                    user: a,
                    tabIndex: r
                }))
            }, t.getPageHeaderHeight = function(e, t) {
                return (e.isMatchedLarge || e.isMatchedMedium ? h.DEFAULT_PAGE_HEADER_HEIGHT : h.COMPACT_PAGE_HEADER_HEIGHT + 40) + (t ? 48 : 0)
            }, t.handleFixedHeaderHeightChange = function(e) {
                t.setState({
                    fixedHeaderHeight: e
                })
            }, t.isRootFileView = function() {
                return d.paths_are_equal(t.props.context.currentFQPath, "/")
            }, t.isExpGrowthTcBizChecklistUiRevampEnabled = function() {
                return !!t.props.browseExperiments.expGrowthTcBizChecklistUiRevamp && t.isRootFileView()
            }, t.showRetrievalSuccessBanner = function(e, t, r, o) {
                e && t ? L.setSearchSuccessBannerVisible() : r !== U.BrowseSuccessBannerVariants.V2 || t || L.setBrowseSuccessBannerVisible(o)
            }, t.handleContextMenuClick = function() {
                var e = t.props,
                    r = e.user,
                    o = e.viewType;
                _.logContextMenuClick({
                    uid: r.id,
                    viewType: o
                })
            }, t.onFolderOverviewNavigateToFileOrFolder = function(e) {
                return t.props.onNavigateToFileOrFolder(e, {
                    actionSource: F.FilesViewActionSource.FOLDER_OVERVIEW
                })
            }, t.renderFixedHeader = function() {
                var e = t.props.browsePostTTIExperiments,
                    r = e.expEnableCloudDocsPaperCreate,
                    o = e.expEnableCloudDocsBinderCreate,
                    n = e.expEnableCloudDocsGddCreate,
                    l = e.expEnableCloudDocsSimplePointerCreate;
                return [i.default.createElement(C.FolderOverview, {
                    componentNamespace: h.BrowseFolderOverviewComponentNamespace,
                    key: "folder-overview",
                    path: t.props.browseExperiments.expFolderOverviewPrefetch ? t.props.context.currentFQPath : t.props.path,
                    expFolderOverview: t.props.browseExperiments.expFolderOverview || "OFF",
                    onNavigateToFileOrFolder: t.onFolderOverviewNavigateToFileOrFolder,
                    isReadOnly: !t.props.context.isCurrentPathWriteable(),
                    browseLoadingState: t.props.loadingState,
                    onChangeHeight: t.handleFixedHeaderHeightChange,
                    canShareFolder: !t.props.context.isCurrentlyInRoot && t.props.context.canViewContainingNSMembers
                }), t.props.shouldShowSharedFolderInvites ? i.default.createElement(V.AsyncSharedFolderInvite, {
                    user: t.props.user,
                    onChangeHeight: t.handleFixedHeaderHeightChange
                }) : null, t.isExpGrowthTcBizChecklistUiRevampEnabled() ? i.default.createElement(I.OnboardingChecklistBanner, {
                    user: t.props.user,
                    isUserEduEnabled: !!t.props.browseExperiments.currentChecklistModuleName
                }) : null, t.props.isCreateButtonMoveEnabled ? i.default.createElement("div", {
                    className: "create-button-container"
                }, i.default.createElement(s.NewFileMenu, {
                    key: "new-file-menu",
                    user: t.props.user,
                    source: a.NewFileMenuFromType.BROWSE,
                    disabled: !1,
                    path: t.props.path,
                    showGdd: !!n,
                    showPaper: !!r,
                    showBinder: !!o,
                    showSimplePointer: !!l,
                    primaryButton: !0
                })) : null]
            }, t.renderFilesViewController = function(e) {
                var n;
                if (t.props.loadingState === F.LoadingState.LOAD_ERROR) return i.default.createElement(i.default.Suspense, {
                    fallback: i.default.createElement("div", null, G._("Something went wrong on our end."))
                }, i.default.createElement(J, null));
                var a = t.props.shouldShowPinnedTeamFolders,
                    s = a ? t.props.filesWithoutTeamFolders : t.props.files,
                    l = z({
                        context: t.props.context,
                        selectedFiles: t.props.selectedFiles,
                        isDraggingExternalFiles: t.props.isDraggingExternalFiles,
                        isDraggingInternalFiles: t.props.isDraggingInternalFiles,
                        isUploadModalOpen: t.props.isUploadModalOpen
                    }),
                    d = o.default("maestro-browse-app-content", (n = {}, n["maestro-content-scroll"] = t.props.contentScroll, n)),
                    u = y.getRedesignProps(t.props.browseExperiments.expBrowseWebFilesViewRedesignVariants),
                    p = u.clickToSelect,
                    _ = u.highDensityBrowse;
                return i.default.createElement("div", {
                    className: d,
                    ref: t.scrollContainer
                }, i.default.createElement(N.RetrievalSuccessBrowseviewBanner, {
                    user: t.props.user,
                    displayContext: A.SearchSuccessDisplayContext.IN_EMBEDDED_APP,
                    expSearchSuccessBanner: !!t.props.browseExperiments.expSearchSuccessBanner,
                    isFilePreview: L.isFilePreview(),
                    isSearchMode: !1
                }), i.default.createElement(v.WebTeamSharingModalExperiment, {
                    context: t.props.context,
                    user: t.props.user,
                    path: t.props.path,
                    selectedFiles: t.props.selectedFiles,
                    browsePostTTIExperiments: t.props.browsePostTTIExperiments
                }), t.renderFixedHeader(), t.props.browseExperiments.expGrowthTcBizEducationModule && i.default.createElement(O.EducationModuleExperiment, {
                    user: t.props.user,
                    initialState: t.props.browseExperiments.expGrowthTcBizEducationModule,
                    isCurrentlyInOnboarding: !!t.props.browseExperiments.currentChecklistModuleName,
                    vacuumingPolicyMaxDays: t.props.browseExperiments.vacuumingPolicyMaxDays || 120
                }), t.props.browsePostTTIExperiments.expCXEducationModule && !t.props.browseExperiments.expGrowthTcBizEducationModule && i.default.createElement(E.CXEducationModuleExperiment, {
                    user: t.props.user,
                    initialState: t.props.browseExperiments.currentChecklistModuleName ? "minimized" : t.props.browsePostTTIExperiments.expCXEducationModule,
                    isCurrentlyInOnboarding: !!t.props.browseExperiments.currentChecklistModuleName,
                    vacuumingPolicyMaxDays: t.props.browseExperiments.vacuumingPolicyMaxDays || 120
                }), i.default.createElement(T.FilesViewController, r.__assign({}, t.props.filesViewActionHandlers, {
                    disabledMultiselect: t.props.isTimelineVisible,
                    getOverflowMenuActions: t.handleGetOverflowMenuActions,
                    renderSharedWithController: t.renderSharedWithController,
                    hrefForFile: c.href_for_file,
                    onLocationLinkClick: t.handleLocationLinkClick,
                    onNavigateToFileOrFolder: t.props.onNavigateToFileOrFolder,
                    onNavigateToParentFolder: t.props.onNavigateToParentFolder,
                    onOpenFileSharedWithMe: t.props.onOpenFileSharedWithMe,
                    onOpenPaper: t.handleOpenPaper,
                    onFocusSearchBar: t.handleFocusSearchBar,
                    context: t.props.context,
                    createNewFolderState: t.props.createNewFolderState,
                    currentSort: t.props.currentSort,
                    dropTargetHighlightMode: l,
                    fileRename: t.props.fileRename,
                    items: s,
                    responsive: e,
                    getIsFileJumping: t.props.getIsFileJumping,
                    isDraggingExternalFiles: t.props.isDraggingExternalFiles,
                    isDraggingInternalFiles: t.props.isDraggingInternalFiles,
                    isFileViewerShown: t.props.isFileViewerShown,
                    isOverFreeQuota: t.props.isOverFreeQuota,
                    shouldShowPinnedTeamFolders: a,
                    arePostTTIModulesLoaded: t.props.arePostTTIModulesLoaded,
                    sharingServiceInfo: t.props.sharingServiceInfo,
                    extensionsFeatureFlags: t.props.extensionsFeatureFlags,
                    isTextSelectable: t.props.isTextSelectable,
                    loadingState: t.props.loadingState,
                    onComponentTTI: t.props.handleComponentTTI,
                    onSelectionChange: t.handleSelectionChange,
                    onSortChange: t.handleFileListSortChange,
                    onStarClick: t.handleStarClick,
                    path: t.props.path,
                    ref: t.setFilesViewControllerRef,
                    selectedFiles: t.props.selectedFiles,
                    selection: t.props.selection,
                    setFileUploaderPath: w.FileUploaderController.setPathAndPermissions,
                    showFileUploaderModal: t.handleShowFileUploader,
                    teamFolders: t.props.teamFolders,
                    totalNumFiles: t.props.totalNumItems,
                    user: t.props.user,
                    viewType: t.props.viewType,
                    isQueryingFolderSizes: t.props.isQueryingFolderSizes,
                    columns: t.props.columns,
                    viewTypeColumns: t.props.viewTypeColumns,
                    viewTypes: b.AllViewTypes,
                    viewTypeLabels: b.ViewTypeLabels,
                    starredState: t.props.starredState,
                    stickyOffsetTop: t.props.contentScroll ? -1 : t.getPageHeaderHeight(e, !!t.state.hasTopNotification),
                    scrollContainer: t.props.contentScroll ? t.scrollContainer : void 0,
                    isStickyColumnHeader: !0,
                    scrollPositionOffset: t.state.fixedHeaderHeight || 0,
                    hasResponsiveOverflowMenu: !!t.props.browsePostTTIExperiments.expResponsiveFilesOverflowMenu,
                    selectionMethod: p ? F.SelectionMethod.CLICK : F.SelectionMethod.CHECKBOX,
                    highDensity: _
                })))
            }, t.renderSidebar = function(e) {
                var o = t.props.pinnedItems;
                return i.default.createElement(m.BrowseSidebarView, r.__assign({}, t.props, {
                    onUploadButtonClick: t.handleUploadButtonClick,
                    onGetFileActionsForFiles: t.handleGetFileActionsForSetOfFiles,
                    responsive: e,
                    pinnedItems: o,
                    onContextMenuClick: t.handleContextMenuClick
                }))
            }, t.close = function() {
                t.props.onCloseTimeline()
            }, t.onTimelineOptIn = function() {
                t.props.onOptInToRewind()
            }, t.state = {
                searchBarProps: t.getCurrentSearchBarProps(t.props)
            }, t
        }
        return r.__extends(k, p), k.prototype.componentWillMount = function() {
            var e = this;
            this.topNotificationListener = D.createTopNotificationListener(function(t) {
                e.setState({
                    hasTopNotification: t
                })
            })
        }, k.prototype.componentWillReceiveProps = function(e) {
            e.path !== this.props.path && this.setState({
                searchBarProps: this.getCurrentSearchBarProps(e)
            })
        }, k.prototype.componentDidMount = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, o, n, i, a, s, d = this;
                return r.__generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return t = this.props.browseExperiments.expBrowseSuccessBanner, t === U.BrowseSuccessBannerVariants.V1 || t === U.BrowseSuccessBannerVariants.V3 ? L.startBrowseSuccessBannerCounter(t) : t === U.BrowseSuccessBannerVariants.V2 && L.setBrowseSuccessBannerTimer(), x.Snackbar.manager = this.snackbarManager.current, [4, H.waitForTTI()];
                        case 1:
                            return u.sent(), Promise.all([new Promise(function(t, r) {
                                e(["modules/clean/react/browse/file_actions"], t, r)
                            }).then(r.__importStar), new Promise(function(t, r) {
                                e(["modules/clean/react/browse/shared_with"], t, r)
                            }).then(r.__importStar), new Promise(function(t, r) {
                                e(["modules/clean/growth/experiments/overquota_helper"], t, r)
                            }).then(r.__importStar)]).then(function(e) {
                                var t = e[0],
                                    r = e[1],
                                    o = e[2].OverquotaHelper;
                                d.setState({
                                    fileActionsModule: t,
                                    sharedWithModule: r
                                }), o.maybeShowSubgrowthProOQRecurringModal("wb_oq_ups_recur_fb")
                            }), w.FileUploaderController.loadCoreComponent(), this.props.shouldOpenUploadModal && this.handleShowFileUploader(), B.UEClient.sendEvent("BrowseView", "componentDidMount", this.props.context.toJSON()), o = this.props, n = o.context, i = o.user, a = o.viewType, s = n.currentFQPath.split("/").filter(function(e) {
                                return !!e
                            }).length, 0 === s ? _.logPageView({
                                uid: i.id,
                                view_type: a,
                                url: c.get_browse_root(i)
                            }) : _.logPageView({
                                uid: i.id,
                                view_type: a,
                                url: c.get_browse_root(i) + "/*",
                                navigation_depth: s
                            }), this.props.browseExperiments.expGrowthTcBizEducationModuleVariant && "OFF" !== this.props.browseExperiments.expGrowthTcBizEducationModuleVariant && l.TeamsWebActionsLogger.log("edu_module_browser_dim", {
                                width: window.innerWidth,
                                height: window.innerHeight,
                                variant: this.props.browseExperiments.expGrowthTcBizEducationModuleVariant
                            }), [2]
                    }
                })
            })
        }, k.prototype.componentDidUpdate = function() {
            this.props.loadingState === F.LoadingState.LOADED && B.UEClient.sendEvent("BrowseView", "componentDidUpdate", this.props.context.toJSON())
        }, k.prototype.componentWillUnmount = function() {
            this.topNotificationListener.unsubscribe()
        }, k.prototype.getCurrentSearchBarProps = function(e) {
            return {
                showSearchBar: !0,
                currentPath: e.path,
                searchBarExperiments: e.searchBarExperiments,
                expUniversalSinglePageSearch: !0
            }
        }, k.prototype.getFilesViewControllerRef = function() {
            return this.filesViewControllerRef
        }, k.prototype.render = function() {
            var e = this.props,
                o = e.user,
                n = e.clickTimelineTimestamp,
                a = e.isDraggingExternalFiles,
                s = e.isDraggingInternalFiles,
                l = e.isUploadModalOpen,
                c = e.context,
                d = e.isTimelineVisible,
                u = e.optedInToRewind,
                p = e.browsePostTTIExperiments,
                _ = p.expTimeline,
                h = p.expRewindUpsell,
                f = e.browseExperiments,
                m = f.expBrowseDetailsPaneVariants,
                v = f.expBrowseUseHeaderPortal,
                E = e.montanaModalProps,
                w = e.mobileBillingEducationalModalProps,
                b = this.props.browseExperiments.expFolderHistoryRollbacks,
                T = g.getQueryArgs().rewind_optin,
                F = b || u || _ || T || "OFF" !== h && "CONTROL" !== h,
                y = !!m && "OFF" !== m;
            return i.default.createElement("div", {
                className: y ? "exp-details-pane-variants" : ""
            }, F && i.default.createElement(t.AsyncDelorean, {
                clickBrowseButtonTimestampMs: n,
                user: o,
                fromDesktopClient: "true" === g.getQueryArgs().from_desktop_client,
                showRewindTab: "true" === g.getQueryArgs().rewind,
                browseContext: c,
                close: this.close,
                isVisible: d,
                expFolderHistoryRollbacks: b || u || !1,
                expTimeline: _ || !1,
                rewindOptin: T,
                userVersionHistoryLength: this.props.userVersionHistoryLength,
                onOptIn: this.onTimelineOptIn,
                expRewindUpsell: h
            }), E && i.default.createElement(t.AsyncMontanaModal, {
                montanaModalProps: E,
                user: o
            }), i.default.createElement(P.SearchChrome, {
                user: o,
                titleRegion: i.default.createElement(S.BrowseTitle, {
                    isDraggingExternalFiles: a,
                    isDraggingInternalFiles: s,
                    isUploadModalOpen: l
                }),
                titleClass: "page-header__title-overflow",
                embeddedAppRegion: this.renderFilesViewController,
                actionSidebarRegion: this.renderSidebar,
                searchBarProps: this.state.searchBarProps,
                key: String(this.props.optedInToRewind),
                useHeaderPortal: v
            }), w && i.default.createElement(R.MobileBillingEducationalModal, r.__assign({}, w)), i.default.createElement(M.SnackbarManager, {
                ref: this.snackbarManager,
                getParentElement: j
            }))
        }, k.defaultProps = {
            selectedFiles: n.OrderedMap(),
            viewType: F.ViewType.List
        }, k
    })(i.default.PureComponent);
    t.BrowseView = Q;
    var J = i.default.lazy(function() {
        return r.__awaiter(Y, void 0, void 0, function() {
            var t;
            return r.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, new Promise(function(t, r) {
                            e(["modules/clean/react/browse/components/post_tti/error"], t, r)
                        }).then(r.__importStar)];
                    case 1:
                        return t = o.sent().ErrorComponent, [2, {
                            default: t
                        }]
                }
            })
        })
    });
    t.AsyncDelorean = p.Loadable({
        loader: function() {
            return r.__awaiter(Y, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, H.waitForTTI()];
                        case 1:
                            return o.sent(), [4, new Promise(function(t, r) {
                                e(["modules/clean/react/delorean/delorean"], t, r)
                            }).then(r.__importStar)];
                        case 2:
                            return t = o.sent().Delorean, [2, t]
                    }
                })
            })
        }
    }), t.AsyncMontanaModal = p.Loadable({
        loader: function() {
            return r.__awaiter(Y, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, H.waitForTTI()];
                        case 1:
                            return o.sent(), [4, new Promise(function(t, r) {
                                e(["modules/clean/react/montana/in_product_modal/in_product_modal_post_tti_renderer"], t, r)
                            }).then(r.__importStar)];
                        case 2:
                            return t = o.sent().PostTTIMontanaIPAModalRenderer, [2, t]
                    }
                })
            })
        }
    })
}), define("modules/clean/react/browse/controller", ["require", "exports", "tslib", "external/lodash", "external/react-dom", "react", "modules/clean/analytics", "modules/clean/browse/browse_bolt_client", "modules/clean/css", "modules/clean/em_string", "modules/clean/filepath", "modules/clean/filetypes", "modules/clean/history", "modules/clean/pagelet_logger", "modules/clean/pagination_manager", "modules/clean/react/app_actions/education/async_extensions_edu_modal", "modules/clean/react/browse/action_logger", "modules/clean/react/browse/actions", "modules/clean/react/browse/api", "modules/clean/react/browse/browse_prefetch_loader", "modules/clean/react/browse/browse_view", "modules/clean/react/browse/constants", "modules/clean/react/browse/data/action_creators", "modules/clean/react/browse/data/store", "modules/clean/react/browse/models", "modules/clean/react/browse/nav_actions", "modules/clean/react/browse/professional_collection_actions", "modules/clean/react/browse/uri_helper", "modules/clean/react/file_uploader/constants", "modules/clean/react/file_uploader/file_uploader", "modules/clean/react/file_uploader/store", "modules/clean/react/file_uploader/utils", "modules/clean/react/file_viewer/async_controller", "modules/clean/react/fileops_actions", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/types", "modules/clean/react/retrieval_success_banner/util", "modules/clean/react/snackbar", "modules/clean/sharing/browse_exports", "modules/clean/sharing/constants", "modules/clean/sharing/ui_notifications_util", "modules/clean/storage", "modules/clean/upsell/prompt_event_emitter", "modules/clean/user_education/user_education_client", "modules/clean/web_timing_logger", "modules/constants/python", "modules/core/browser", "modules/core/browser_detection", "modules/core/exception", "modules/core/html", "modules/core/i18n", "modules/core/notify", "modules/core/uri"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b, T, F, y, C, I, O, P, R, D, A, N, L, x, M, U, k, V, B, H, W, q, G, z, j, Y, K, Q, J, X, Z) {
    "use strict";

    function $(e) {
        X.Notify.success(J._("%(file_name)s added to your Dropbox.").format({
            file_name: d.filename(e)
        }))
    }

    function ee(e) {
        var t = J._('Added “%(folder_name)s” <a href="%(href)s">Learn More</a>').format({
            folder_name: c.Emstring.em_snippet(d.filename(e), V.SNIPPET_SIZES.FILENAME),
            href: "/help/business/team-space-overview#acceptfolder"
        });
        X.Notify.success(new Q.HTML(t))
    }

    function te(e) {
        var t = d.parent_dir(e);
        "/" !== t && X.Notify.success(J._("Folder is in %(path)s").format({
            path: c.Emstring.em_snippet(t, 22)
        }))
    }

    function re(e) {
        return !!e && e.isShown()
    }

    function oe(e) {
        var t = I.getQueryArgs();
        p.default.replace_state(e, o.pick.apply(o, [t, w.BrowseQueryArg.d, w.BrowseQueryArg.select, w.BrowseQueryArg.preview, w.BrowseQueryArg.activity, w.BrowseQueryArg.rewind, w.BrowseQueryArg.from_desktop_client, w.BrowseQueryArg.rewind_optin, w.BrowseQueryArg.preselected_for_showcase, w.BrowseQueryArg.folder_overview, w.BrowseQueryArg.rewind_tip].concat(w.FRAMEWORK_ARGS)))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), i = r.__importDefault(i), d = r.__importStar(d), p = r.__importDefault(p), m = r.__importStar(m), g = r.__importStar(g), b = r.__importStar(b), D = r.__importStar(D), N = r.__importStar(N), G = r.__importStar(G), j = r.__importStar(j), Y = r.__importStar(Y);
    var ne = (function(t) {
        function c(i) {
            var s = t.call(this, i) || this;
            return s.deferredCheckForMissingStarredData = o.noop, s.handlePostTTIPrefetchComplete = function(t) {
                return r.__awaiter(s, void 0, void 0, function() {
                    var o, n, i, a, s, l, c, d, u, p;
                    return r.__generator(this, function(_) {
                        switch (_.label) {
                            case 0:
                                return o = t["exp-browse-post-tti-experiments"], n = t["exp-uploader-post-tti-experiments"], i = !!t["is-over-free-quota"], a = !!t["maybe-render-team-admin-modals"], s = !!t["has-excluded-ns-ids"], l = t["montana-modal-props"],
                                    c = t["preferred-editors"], o.expShouldShowNcctPaywall && j.redirect("/ncct-trial-end"), [4, new Promise(function(t, r) {
                                        e(["modules/core/browser_detection"], t, r)
                                    }).then(r.__importStar)];
                            case 1:
                                return d = _.sent().is_supported_mobile_browser, u = !d() && l, this.setState({
                                    uploaderPostTTIExperiments: n,
                                    isOverFreeQuota: i,
                                    hasExcludedNsIds: s,
                                    montanaModalProps: u ? l : null,
                                    preferredEditors: c
                                }), this.props.setBrowsePostTTIExperiments({
                                    browsePostTTIExperiments: o
                                }), !a || u ? [3, 3] : [4, new Promise(function(t, r) {
                                    e(["modules/clean/react/ncct/post_tti_ncct_modal"], t, r)
                                }).then(r.__importStar)];
                            case 2:
                                p = _.sent().postTTINCCTReminderModal, p(), _.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, s.handlePostTTIPrefetchError = function(e) {
                K.reportException({
                    err: e || new Error("failed to load post TTI experiments")
                })
            }, s.handlePreviewAndShareModalsOnLoad = function(t) {
                var o = s.getPathFromProps(),
                    n = s.props.user,
                    i = !!s.props["open-preview"],
                    a = !!s.props["show-share-modal"],
                    l = s.props["share-prefill-email"],
                    c = l ? [l] : void 0;
                if (i && !t) {
                    X.Notify.error(J._("The file doesn’t exist"));
                    var d = s.props.urlPrefix,
                        u = s.getUrlForFQPath(d, o),
                        _ = I.getQueryArgs();
                    delete _.preview, p.default.replace_state(u, _)
                }
                if (t) {
                    var h = F.File.fromServerObject(t);
                    A.asyncOpenPreview({
                        containerId: w.BROWSE_FILE_VIEWER_ELEMENT_ID,
                        files: [h],
                        fileViewAction: z.FileViewActionType.CLICK,
                        fileViewOrigin: z.FileViewOriginType.BROWSE,
                        fileViewTarget: z.FileViewTargetType.PRIVATE,
                        indexOfPreviewFile: 0,
                        user: n,
                        updateBrowserLocation: !1,
                        onFileViewerDidMount: function() {
                            A.hideElementsBehindFileViewer(), T.getStoreForBrowse().dispatch(b.setIsFileViewerShown({
                                isShown: !0
                            }))
                        },
                        onFileViewerUnmount: function() {
                            A.showElementsBehindFileViewer(), T.getStoreForBrowse().dispatch(b.setIsFileViewerShown({
                                isShown: !1
                            }));
                            var e = s.browseViewRef;
                            (e = e.getFilesViewControllerRef()) && (e = e.getFilesViewTileGridRef()) && (e = e.getTileGridRef()) && e.getAndUpdateTileLayout(), s.restoreUrlAfterFileViewClose()
                        }
                    }), a && G.waitForTTI().then(function() {
                        s.mounted && k.asyncShowPrefilledShareModal({
                            user: n,
                            sharePrefillEmails: c,
                            content: h,
                            setPath: y.browseNavActions.setPath,
                            setUrl: s.props.setUrl
                        })
                    })
                } else a && s.showShareModalForCurrentPath(c);
                a || s.props["showing-mobile-billing-modal"] || s.props["showing-client-modal"] || G.waitForTTI().then(function() {
                    W.promptBufferedEventEmitter.on(W.Events.ON_PROMPT_INITIALIZED, function(t) {
                        return r.__awaiter(s, void 0, void 0, function() {
                            var o, n, i, a, s, l;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t && (t.didMainCampaignLoad() || t.didCampaignForUserEducationLoad()) ? [2] : [4, new Promise(function(t, r) {
                                            e(["modules/clean/react/ncct/post_tti_ncct_modal"], t, r)
                                        }).then(r.__importStar)];
                                    case 1:
                                        return o = c.sent().postTTINCCTReminderModal, [4, o()];
                                    case 2:
                                        return (n = c.sent()) ? [2] : (i = "V1" === this.props.browsePostTTIExperiments.expEngageDesktopWebOnly, a = "V1" === this.props.browsePostTTIExperiments.expEngageDesktopWebFirst, i && this.props.user.is_team ? [4, new Promise(function(t, r) {
                                            e(["modules/clean/growth/experiments/install_client_modal"], t, r)
                                        }).then(r.__importStar)] : [3, 4]);
                                    case 3:
                                        return s = c.sent().installClientModalExperiment, s(), [3, 6];
                                    case 4:
                                        return a ? [4, new Promise(function(t, r) {
                                            e(["modules/clean/growth/experiments/non_unity_web_first_modal"], t, r)
                                        }).then(r.__importStar)] : [3, 6];
                                    case 5:
                                        l = c.sent().nonUnityWebFirstModal, l(), c.label = 6;
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    })
                })
            }, s.receiveStateFromStores = function() {
                s.setState(s.getStateFromStores())
            }, s.handleComponentTTI = function(e) {
                s.browseLogger && (!s.browseLogger.ttiLogged || "FilesViewController" !== e && "SearchResultsTitle" !== e ? s.browseLogger.componentReady(e) : s.ajaxRequestWebTimer && (s.ajaxRequestWebTimer.markTimeToInteractive(), delete s.ajaxRequestWebTimer))
            }, s.onAllUploadsComplete = function(e) {
                var t = e.detail.files,
                    r = t.map(function(e) {
                        return d.normalize(e.path) + d.normalize(e.name)
                    });
                S.browseActions.selectFilesAfterUpload({
                    fqPathsToSelect: r
                })
            }, s.getIsFileJumping = function() {
                return s.props.isFileJumping
            }, s.getFileByFullPath = function(e) {
                return s.props.files.find(function(t) {
                    return t.fq_path === e
                }) || null
            }, s.getFileByFilename = function(e) {
                return s.props.files.find(function(t) {
                    return d.filename(t.fq_path) === e
                }) || null
            }, s.setBrowseViewRef = function(e) {
                s.browseViewRef = e
            }, s.startBoltLiveUpdate = function() {
                s.browseBoltClient.startLiveUpdate(function() {
                    s.getChangesRequest && s.getChangesRequest.abort();
                    var e = s.props,
                        t = e.user,
                        r = e.path,
                        o = e.shouldShowDeletedFiles;
                    s.getChangesRequest = g.getChangesForDirectory({
                        path: r,
                        userId: t.id,
                        namespaceToJournalIdMap: s.browseBoltClient.getNsMap(),
                        includeDeletedFiles: o,
                        onSuccess: function(e) {
                            delete s.getChangesRequest, r === s.props.path && (s.props.applyBoltUpdates({
                                updates: e,
                                setPath: y.browseNavActions.setPath
                            }), s.browseBoltClient.handleUpdateBoltClient(e.bolt_data))
                        }
                    })
                })
            }, s.toggleTimelineIfNecessary = function() {
                var e = I.getQueryArgs().activity || I.getQueryArgs().rewind;
                e && !s.props.isTimelineVisible && s.props.showTimeline(), !e && s.props.isTimelineVisible && s.props.hideTimeline()
            }, s.showShareModalForCurrentPath = function(e) {
                var t = s.props.user,
                    r = s.getPathFromProps();
                G.waitForTTI().then(function() {
                    if (s.mounted) {
                        var o = s.props["ns-id"],
                            n = s.props["ns-path"];
                        k.asyncShowPrefilledShareModal({
                            user: t,
                            sharePrefillEmails: e,
                            content: {
                                fqPath: r,
                                isFolder: !0,
                                nsId: o && n ? o : null,
                                targetNsId: o && !n ? o : null
                            },
                            setPath: y.browseNavActions.setPath,
                            setUrl: s.props.setUrl
                        })
                    }
                })
            }, s.handleFileLocationChange = function(e, t) {
                if (e = "/" + Z.URI.decode(e), s.ensureFileViewerIsOpenedOrClosedIfNeeded(t), s.toggleTimelineIfNecessary(), t.share && !s.props["show-share-modal"] && s.showShareModalForCurrentPath(), !d.paths_are_equal(s.props.path, e) || "1" === t.d !== s.props.shouldShowDeletedFiles || t.reload) {
                    t.reload && (delete t.reload, s.props.setUrl({
                        path: s.props.path,
                        qargs: t
                    }));
                    var o = function() {
                        return L.SortIsFilename.includes(s.props.currentSort.sortField) ? x.SortLabel.FILENAME : s.props.currentSort.sortField === x.SortField.MODIFIED ? x.SortLabel.MODIFIED : x.SortLabel.SIZE
                    };
                    s.props.setPath({
                        path: e
                    }), s.props.setLoadingState({
                        loadingState: x.LoadingState.LOADING_FIRST_PAGE,
                        path: e
                    }), s.props.setShouldShowDeletedFiles({
                        shouldShowDeletedFiles: "1" === t.d
                    }), s.browseLogger && s.browseLogger.ttiLogged && s.ensureTimer("browse_ajax", "browse_ajax_nav"), g.loadPath({
                        sortLabel: o(),
                        sortIsAscending: s.props.currentSort.sortDirection === x.SortDirection.ASCENDING,
                        path: e,
                        userId: s.props.user.id,
                        sortFoldersFirst: !Y.mac,
                        includeDeletedFiles: "1" === t.d,
                        onSuccess: function(t) {
                            var o = t.path,
                                n = t.data,
                                i = t.xhr;
                            if (s.ajaxRequestWebTimer) {
                                var a = i.getResponseHeader("x-dropbox-request-id");
                                s.ajaxRequestWebTimer.end(a ? a : void 0)
                            }
                            if (d.paths_are_equal(e, o) && (s.props.setIsRewindButtonEnabled({
                                    path: e,
                                    userId: s.props.user.id,
                                    userSkuHasRewind: !!s.browseExperiments.expFolderHistoryRollbacks
                                }), !I.getQueryArgs().query)) {
                                s.browseExperiments.expFolderOverviewPrefetch && s.props.handleFolderOverviewPrefetch(r.__assign({}, n.folder_overview, {
                                    path: e,
                                    expFolderOverview: s.browseExperiments.expFolderOverview,
                                    componentNamespace: w.BrowseFolderOverviewComponentNamespace
                                })), s.props.setPath({
                                    path: e
                                }), s.props.setMountPoints({
                                    mountPoints: n.ns_id_to_mount_point
                                });
                                var l = F.BrowseContext.fromServerObject(n);
                                if (n.paginated) {
                                    var c = n.first_page.total_num_items;
                                    s.props.setPathData({
                                        path: e,
                                        files: [],
                                        context: l,
                                        paginatedTotalNumFiles: c
                                    });
                                    h.PaginationManager.create({
                                        firstPage: n.first_page,
                                        keyName: "sjid",
                                        ajaxURL: "/browse_get_next",
                                        userID: s.props.user.id,
                                        newDataAvailableCallback: function(t, r) {
                                            var o = t.areAllItemsReady() ? x.LoadingState.LOADED : x.LoadingState.LOADING_REMAINING_PAGES;
                                            s.props.appendFiles({
                                                path: e,
                                                files: r.map(F.File.fromServerObject)
                                            }), s.props.setLoadingState({
                                                path: e,
                                                loadingState: o
                                            }), t.areAllItemsReady() && t.stopAutoFetching()
                                        }
                                    }).startAutoFetching()
                                } else s.props.setPathData({
                                    path: e,
                                    files: n.file_info.map(F.File.fromServerObject),
                                    paginatedTotalNumFiles: n.file_info.length,
                                    context: l
                                }), s.props.setLoadingState({
                                    loadingState: x.LoadingState.LOADED,
                                    path: e
                                })
                            }
                        },
                        onError: function() {
                            d.paths_are_equal(e, "/") || s.props.setUrl({
                                path: "/"
                            })
                        }
                    })
                }
            }, s.getPathFromProps = function() {
                return s.props["init-fq-path"] || "/"
            }, s.markTTVIfNeeded = function() {
                if (!s.hasTTVBeenLogged && s.mounted && s.prefetchComplete) {
                    var e = window.ensemble;
                    e && e.markPageletRenderedByDOMNode(n.findDOMNode(s)), G.mark_time_to_view(), s.hasTTVBeenLogged = !0
                }
            }, s.handleFileListUpdated = function() {
                re(s.state.fileViewerController) ? s.props.files.isEmpty() ? s.state.fileViewerController.close() : s.state.fileViewerController.updateFiles(s.props.files.toJS()) : s.ensureFileViewerIsOpenedOrClosedIfNeeded(I.getQueryArgs()), s.prefetchPreviewData(s.props.files.toArray(), s.props.user)
            }, s.handleOnNavigateToPath = function(e) {
                s.browseExperiments.expSearchSuccessBanner && (M.setSearchSuccessBannerVisible(), M.setClickablePathData(e)), S.browseActions.setUrl({
                    path: e
                })
            }, s.handleOnNavigateToParentFolder = function() {
                S.browseActions.navigateToParentFolder()
            }, s.handleDelete = function(e) {
                var t = e.some(F.File.isTeamSharedFolder),
                    r = e.some(function(e) {
                        return e.read_only
                    }),
                    o = e.every(function(e) {
                        return e.isDeleted
                    }),
                    n = s.props.browsePostTTIExperiments.expDeleteUseApiV2;
                !s.props.browseContext.isCurrentPathWriteable() || t || r ? t ? X.Notify.error(J._("Team folders can’t be deleted.")) : X.Notify.warning(J._("You don’t have permission to delete files in this folder.")) : o ? S.browseActions.doPermanentDeleteWithModal(e) : S.browseActions.doDeleteFilesWithModal({
                    files: e,
                    expDeleteUseApiV2: n
                })
            }, s.handleOnNavigateToFileOrFolder = function(e, t) {
                void 0 === t && (t = {});
                var r = t.actionSource;
                if (s.browseExperiments.expSearchSuccessBanner && !M.userIsOptedOutOfRetrievalSuccessBanner()) {
                    M.resetSearchResultClickKey();
                    var o = e.is_dir;
                    M.doSearchBarInteractionBroadcast(!1), M.doSearchResultActionClickBroadcast(!1);
                    var n = e.fq_path,
                        i = M.getClickablePath(),
                        a = M.getSearchResultPath(),
                        l = M.getSearchResultClickTimestamp(),
                        c = M.getClickableFilePathClickTimestamp(),
                        d = Date.now();
                    (l && d - l <= 3e4 && M.parentPathOfFileEqualsSearchResultPath(n, a, o) || c && d - c <= 3e4 && M.parentPathOfFileEqualsSearchResultPath(n, i, o)) && M.setSearchSuccessBannerVisible()
                }
                s.props.hideTimeline();
                var u = window.pageYOffset;
                s.ensureFullFileObjectPopulated(e, function(e, t) {
                    s.completeNavigateToFileOrFolder(e, {
                        onFileViewerUnmount: t,
                        actionSource: r
                    })
                }, function() {
                    window.scrollTo({
                        top: u
                    })
                })
            }, s.ensureFullFileObjectPopulated = function(e, t, r) {
                t(e, r)
            }, s.completeNavigateToFileOrFolder = function(e, t) {
                void 0 === t && (t = {});
                var r = t.onFileViewerUnmount,
                    o = t.actionSource,
                    n = s.props,
                    i = n.user,
                    l = n.viewer,
                    c = n.viewType,
                    p = e.ns_id,
                    _ = e.sjid,
                    h = e.file_id,
                    f = e.fq_path,
                    g = e.bytes,
                    v = e.ext,
                    E = e.request_id;
                m.logOpenRow({
                    uid: i.id,
                    entity_type: e.is_dir ? "folder" : "file",
                    source: "list_browse",
                    view_type: c,
                    file_nsid: p,
                    file_sjid: _,
                    file_id: h,
                    file_name: d.filename(e.fq_path),
                    file_path: f,
                    file_size: g,
                    file_extension: v,
                    request_id: E,
                    action_source: o
                }), e.type === u.FileTypes.TEAM_SHARED_FOLDER && (q.UEClient.sendEvent("FileItemRow", "TeamFolderClicked"), a.TeamsWebActionsLogger.log("clicked_team_folder_web", {
                    team_id: l.team_id
                })), S.browseActions.navigateToFileOrFolder({
                    file: e,
                    onFileViewerUnmount: r,
                    fileViewAction: z.FileViewActionType.CLICK,
                    preferredEditors: s.state.preferredEditors
                })
            }, s.handleOnOpenFileSharedWithMe = function(e) {
                j.redirect(e.href)
            }, s.actionHandlers = {
                onDelete: s.handleDelete,
                onShowRename: function(e) {
                    return s.props.setFileRename({
                        file: e,
                        renameState: x.RenameState.PENDING_INPUT
                    })
                },
                onRestore: function(e) {
                    S.browseActions.doRestoreFilesWithUnifiedTrashModal({
                        files: e
                    })
                },
                onPermanentDelete: function(e) {
                    S.browseActions.doPermanentDeleteWithModal(e)
                },
                onShowComment: function(e) {
                    return s.onShowComment(e)
                }
            }, s.handlePresentInZoom = function(e) {
                A.asyncOpenPreview({
                    containerId: w.BROWSE_FILE_VIEWER_ELEMENT_ID,
                    files: [e],
                    indexOfPreviewFile: 0,
                    shouldFocusComment: !1,
                    user: s.props.user,
                    onFileViewerDidMount: A.hideElementsBehindFileViewer,
                    onFileViewerUnmount: A.showElementsBehindFileViewer,
                    fileViewAction: z.FileViewActionType.CLICK,
                    fileViewOrigin: z.FileViewOriginType.BROWSE,
                    fileViewTarget: z.FileViewTargetType.PRIVATE,
                    shouldPresentInZoom: !0
                })
            }, s.getOnShowShareHandler = function(e, t) {
                var r = s.props.browsePostTTIExperiments,
                    o = r.expShowShowcaseInterstitial,
                    n = r.expHasCreatedShowcase,
                    i = r.expHasShowcaseFreemium;
                o ? S.browseActions.handleShowShareInterstitialModal(e, t, !!n, !!i, s.props.viewType) : S.browseActions.handleShowShareModal(e, t)
            }, s.filesViewActionHandlers = {
                onDelete: s.handleDelete,
                onShowRename: function(e) {
                    return s.props.setFileRename({
                        file: e,
                        renameState: x.RenameState.PENDING_INPUT
                    })
                },
                onCopyToClipboard: function(e) {
                    return s.props.copyFilesToClipboard({
                        files: e
                    })
                },
                onPasteFromClipboard: function() {
                    return s.props.pasteFilesFromClipboard({
                        copyFiles: N.copyFiles
                    })
                },
                onNewFolderSubmit: function(e) {
                    return S.browseActions.createFolder({
                        pathName: s.props.browseContext.currentFQPath,
                        folderName: e,
                        nsId: s.props.browseContext.rootNSID,
                        checkFSWs: !0
                    })
                },
                onNewFolderCancel: function() {
                    return S.browseActions.cancelCreateFolder()
                },
                onRenameSubmit: function(e, t) {
                    return s.props.renameFile({
                        file: e,
                        name: t,
                        checkFSWs: !0
                    })
                },
                onRenameCancel: function(e) {
                    return s.props.setFileRename({
                        file: e,
                        renameState: null
                    })
                },
                onSwitchViewType: function(e) {
                    m.logSwitchViewType({
                        uid: s.props.user.id,
                        isSearchMode: !1,
                        viewType: e
                    }), s.props.setViewType({
                        user: s.props.user,
                        viewType: e
                    }), window.setTimeout(function() {
                        var e = document.querySelector(".brws-view-type-column-header-menu-trigger");
                        e && e.focus()
                    }, 0)
                },
                onColumnsChanged: function(e, t, r) {
                    s.props.setViewTypeColumns({
                        columns: e,
                        viewType: t,
                        user: s.props.user
                    }), s.props.setCanDisplayFolderSizes({
                        canDisplayFolderSizes: r
                    })
                },
                onCanDisplayFolderSizesChanged: function(e) {
                    return s.props.setCanDisplayFolderSizes({
                        canDisplayFolderSizes: e
                    })
                },
                onAddFileJumpKeyCode: function(e) {
                    return s.props.addFileJumpKeyCode({
                        keyChar: e
                    })
                },
                onResetFileJump: function() {
                    return s.props.resetFileJumpFilter()
                },
                onShowShare: s.getOnShowShareHandler,
                onPresentInZoom: s.handlePresentInZoom
            }, s.uploadAjaxInterceptor = {
                interceptUploadPrecheck: function(e) {
                    return e
                },
                interceptUpload: function(e, t) {
                    var o = t.ns_id_for_routing;
                    if (!o) {
                        var n = s.props.mountPoints,
                            i = s.props.browseContext.rootNSID;
                        K.assert(null != n, "mountPoints is null"), K.assert(null != i, "rootNSID is null"), o = D.getNsId(n, i, e.dest)
                    }
                    return r.__assign({}, t, {
                        ns_id_for_routing: o,
                        ns_id: o
                    })
                }
            }, s.fileViewerIsShown = function() {
                return re(s.state.fileViewerController)
            }, s.ensureFileViewerClosedIfNotPreviewing = function(e) {
                !e.preview && re(s.state.fileViewerController) && s.state.fileViewerController.close()
            }, s.prefetchPreviewData = function(e, t) {
                s.state.fileViewerController && s.state.fileViewerController.prewarmPreviewData(e, t)
            }, s.ensureFileViewerIsOpenedOrClosedIfNeeded = function(e) {
                if (e.preview && !re(s.state.fileViewerController)) {
                    var t = s.getFileByFilename(e.preview);
                    t && S.browseActions.navigateToFileOrFolder({
                        file: t,
                        preferredEditors: s.state.preferredEditors
                    })
                } else !e.preview && re(s.state.fileViewerController) && s.state.fileViewerController.close()
            }, s.getLearnMoreLinkHandler = function() {
                window.open("/help/business/unsynced-team-folder", "_blank")
            }, s.getMobileBillingEducationalModalProps = function() {
                return s.props["mobile-billing"] ? s.props["mobile-billing"] : null
            }, s.props.setSearchBarExperiments({
                experiments: s.searchBarExperiments
            }), R.uploaderStore.add_change_listener(s.receiveStateFromStores), window.addEventListener(O.ALL_UPLOADS_COMPLETE_EVENT, s.onAllUploadsComplete), s.state = r.__assign({}, s.getStateFromStores(), {
                montanaModalProps: null,
                arePostTTIModulesLoaded: !1,
                preferredEditors: {}
            }), s
        }
        return r.__extends(c, t), Object.defineProperty(c.prototype, "uploaderExperiments", {
            get: function() {
                return this.props["exp-uploader-experiments"] || {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "uploaderPostTTIExperiments", {
            get: function() {
                return this.state.uploaderPostTTIExperiments || {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "searchBarExperiments", {
            get: function() {
                return this.props["exp-search-bar-experiments"] || {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "browseExperiments", {
            get: function() {
                return this.props["exp-browse-experiments"] || {}
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.componentWillMount = function() {
            var e = this,
                t = this.props,
                o = t.urlPrefix,
                n = t.user,
                i = t.viewer,
                a = this.props["share-link"],
                l = !!this.props["open-preview"],
                c = this.getPathFromProps(),
                d = ["FilesViewController", "AppActionsView"];
            this.browseLogger = new _.PageletLogger("browse", d, !0, {
                view_type: this.props.viewType.toLowerCase()
            }), a || l || oe(this.getUrlForFQPath(o, c));
            var u = i.get_users().map(function(e) {
                return e.id
            });
            H.UserLocalStorage.clearOtherUsers(u), this.browseBoltClient = new s.BrowseBoltClient(n.id);
            var h = new v.BrowsePrefetchLoader({
                user: n,
                path: c,
                fqPathsToSelect: this.props["select-fq-paths"]
            }, {
                onPrefetchComplete: function(t) {
                    e.prefetchComplete = !0, e.handlePreviewAndShareModalsOnLoad(t.preview_file_info), "folder_overview" in t && t.folder_overview && e.browseExperiments.expFolderOverviewPrefetch ? e.props.handleFolderOverviewPrefetch(r.__assign({}, t.folder_overview, {
                        path: c,
                        expFolderOverview: e.browseExperiments.expFolderOverview,
                        componentNamespace: w.BrowseFolderOverviewComponentNamespace
                    })) : e.props.addFolderOverviewLoadedComponent({
                        componentNamespace: w.BrowseFolderOverviewComponentNamespace,
                        component: "draftjs"
                    }), G.log_js_modules_fetched_data_required_for_tti(), e.markTTVIfNeeded()
                },
                onPrefetchError: function(t) {
                    e.prefetchComplete = !0, K.reportException({
                        err: t || new Error("Failed to prefetch browse data"),
                        severity: "user-error",
                        exc_extra: {
                            path: c
                        }
                    }), e.props.setUrl({
                        path: ""
                    }), e.props.setLoadingState({
                        loadingState: x.LoadingState.LOAD_ERROR,
                        path: c
                    }), e.handleFileLocationChange("", {})
                },
                onLoadComplete: function() {
                    e.maybeShowPrepopulatedAddToCollectionModal(e.props.files)
                },
                onPostTTIPrefetchComplete: this.handlePostTTIPrefetchComplete,
                onPostTTIPrefetchError: this.handlePostTTIPrefetchError
            }, {
                onInitializeEverything: S.browseActions.initializeEverything,
                onLoad: y.browseNavActions.loadPath,
                onAddFilesAndSetLoadingState: S.browseActions.addFilesAndSetLoadingState
            });
            h.isPrefetching() && h.handlePrefetch(), this.browseExperiments.expSearchSuccessBanner && (p.default.deconstruct_url(document.referrer).qargs.search_session_id && !M.getClickedOnSearchResultsPageItem() ? M.setSearchSuccessBannerVisible() : M.getSearchSuccessBannerVisibleFromHome() && M.setSearchSuccessBannerVisible());
            p.default.add_callback(o, this.handleFileLocationChange, !0)
        }, c.prototype.componentDidMount = function() {
            var t = this;
            this.mounted = !0;
            var n = this.getPathFromProps(),
                i = this.props.user,
                a = this.props["share-link"],
                s = !!this.props["open-preview"],
                u = this.props["from-scl-sync-modal"];
            if (this.props.setIsRewindButtonEnabled({
                    path: n,
                    userId: this.props.user.id,
                    userSkuHasRewind: !!this.browseExperiments.expFolderHistoryRollbacks
                }), u && (i.is_cdm_member ? ee(n) : $(n)), this.props["show-share-success-snackbar"]) {
                var p = d.filename(n);
                B.showInBandShareSuccessSnackbar(p)
            }
            this.shouldShowUnsyncNotification() && this.showUnsyncNotification(), a && !s && i.is_cdm_member && te(n), this.toggleTimelineIfNecessary(), this.markTTVIfNeeded(), c.mountFileViewerTarget(), G.waitForTTI().then(function() {
                t.browseExperiments.expBrowseUseMinimalCss && l.require_css("/static/css/main_browse_post_tti-vflaVm6Xq.css"), t.fetchAndStartBoltUpdates();
                var n = function(e) {
                    var r = e[0],
                        n = r[0],
                        i = (r[1], r[2].SharedWithStore),
                        a = r[3],
                        s = a.checkForMissingStarredData,
                        l = a.StarredStore,
                        c = (r[4], r[5], e[1]),
                        d = (c[0], c[1], c[2].BloodhoundContactsV2),
                        u = c[3].EmailVerification;
                    c[4], c[5], c[6];
                    if (t.mounted) {
                        var p = t.props,
                            _ = p.user,
                            h = p.path,
                            m = p.files,
                            S = m.toArray();
                        i.initializeWith({
                            path: h,
                            files: S
                        }), s({
                            items: S,
                            user: _
                        });
                        var g = l.addListener(function() {
                            t.setState({
                                starredState: l.getLoadingStates()
                            })
                        });
                        t.deferredCheckForMissingStarredData = function() {
                            return o.defer(function() {
                                s({
                                    items: t.props.files.toArray(),
                                    user: _
                                })
                            })
                        }, t.removeStarredStoreListener = function() {
                            g()
                        }, d.getOrCreateForUser(_), t.setState({
                            arePostTTIModulesLoaded: !0,
                            fileViewerController: n
                        }), t.props["email-just-verified"] ? u.getForRole(_.role).show_verified_modal() : t.props["email-just-verified-and-changed"] ? u.getForRole(_.role).show_verified_and_changed_modal() : t.props["send-verification-email"] && u.getForRole(_.role).show_sent_modal(), t.prefetchPreviewData(m.toArray(), _);
                        var v = t.props["should-open-extensions-edu-modal"];
                        v && f.asyncShowExtensionsEduModal(_.id, v)
                    }
                };
                n.perfName = "browse_post_tti", Promise.all([Promise.all([new Promise(function(t, r) {
                    e(["modules/clean/react/file_viewer/controller"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/react/browse/file_actions"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/react/browse/shared_with"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/react/starred/browse_exports"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/react/file_modal_controller"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/sharing/share_modal_util"], t, r)
                }).then(r.__importStar)]), Promise.all([new Promise(function(t, r) {
                    e(["modules/clean/sharing/ui_util"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/sharing/wizard/wizard_modals"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/contacts/bloodhound_contacts_v2"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/account/email"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/unity_browse_interface"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/unity/features"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/unity/check_file_cache"], t, r)
                }).then(r.__importStar)])]).then(n)
            })
        }, c.prototype.componentWillUpdate = function(e, t) {
            e.files.equals(this.props.files) || o.defer(this.handleFileListUpdated)
        }, c.prototype.componentDidUpdate = function(e) {
            e.loadingState === x.LoadingState.LOADING_FIRST_PAGE && this.props.loadingState !== e.loadingState && this.markTTVIfNeeded(), e.files !== this.props.files && this.deferredCheckForMissingStarredData()
        }, c.prototype.componentWillUnmount = function() {
            this.removeStarredStoreListener && this.removeStarredStoreListener(), c.unmountFileViewerTarget(), R.uploaderStore.remove_change_listener(this.receiveStateFromStores), window.removeEventListener(O.ALL_UPLOADS_COMPLETE_EVENT, this.onAllUploadsComplete), this.mounted = !1
        }, c.prototype.getStateFromStores = function() {
            return {
                isDraggingInternalFiles: P.FileUploaderController.isDraggingInternalFiles(),
                isDraggingExternalFiles: P.FileUploaderController.isDraggingExternalFiles(),
                isUploadModalOpen: P.FileUploaderController.isUploadModalOpen()
            }
        }, c.prototype.restoreUrlAfterFileViewClose = function() {
            var e, t = this.props.urlPrefix,
                r = this.getUrlForFQPath(t, this.props.path);
            e = this.props["open-preview"] ? o.omit(I.getQueryArgs(), w.BrowseQueryArg.preview, w.BrowseQueryArg.select) : {}, p.default.replace_state(r, e)
        }, c.prototype.getUrlForFQPath = function(e, t) {
            return e + ("/" === t ? "" : Z.URI.encode_parts(t))
        }, c.prototype.fetchAndStartBoltUpdates = function() {
            this.browseBoltClient.isReady() ? this.startBoltLiveUpdate() : this.browseBoltClient.fetchInitialBoltData(this.startBoltLiveUpdate)
        }, c.prototype.ensureTimer = function(e, t) {
            if (this.ajaxRequestWebTimer && this.ajaxRequestWebTimer.getContextName() !== e && (this.ajaxRequestWebTimer.abort(), G.delete_timer(this.ajaxRequestWebTimer.getContextName()), this.ajaxRequestWebTimer = void 0), this.ajaxRequestWebTimer) this.ajaxRequestWebTimer.restart();
            else {
                G.delete_timer(e), this.ajaxRequestWebTimer = G.get_timer(e);
                var r = {
                    requireTTI: !0,
                    requireTTV: !1
                };
                t && (r.url = t), this.ajaxRequestWebTimer.initialize(r)
            }
        }, c.prototype.onShowComment = function(e) {
            var t = this;
            e instanceof F.FileSharedWithMe ? j.redirect(e.href) : this.ensureFullFileObjectPopulated(e, function(e) {
                S.browseActions.navigateToFileOrFolder({
                    file: e,
                    shouldFocusComment: !0,
                    preferredEditors: t.state.preferredEditors
                })
            })
        }, c.prototype.maybeShowPrepopulatedAddToCollectionModal = function(e) {
            var t = I.getQueryArgs();
            if (t.preselected_for_showcase) {
                var r = t.preselected_for_showcase.split(".").map(function(e) {
                    return "id:" + e
                });
                C.showPrepopulatedAddToCollectionModal(r, this.props.user, e.toJS());
                var o = this.getPathFromProps(),
                    n = this.getUrlForFQPath(this.props.urlPrefix, o);
                delete t[w.BrowseQueryArg.preselected_for_showcase], p.default.replace_state(n, t)
            }
        }, c.prototype.shouldShowUnsyncNotification = function() {
            return this.props["should-show-unsync-notification"]
        }, c.prototype.showUnsyncNotification = function() {
            U.Snackbar.show(i.default.createElement(U.Snackbar, {
                variant: "generic",
                title: J._("Do you also need this on your computer?", {
                    comment: '\'"this" refers to the folder that the user is currently browsing. (limited space, please keep the phase short)'
                }),
                timeoutDelayMs: 1e5,
                actionButtonText: J._("Learn more"),
                closeButtonText: J._("Close"),
                onActionClick: this.getLearnMoreLinkHandler,
                id: "browse-unsync"
            }))
        }, c.prototype.render = function() {
            var e = this.state,
                t = e.isUploadModalOpen,
                r = e.starredState,
                o = e.arePostTTIModulesLoaded,
                n = e.isDraggingExternalFiles,
                a = e.isDraggingInternalFiles,
                s = e.isOverFreeQuota,
                l = e.hasExcludedNsIds,
                c = e.montanaModalProps,
                d = this.props,
                u = d.browseContext,
                p = d.selection,
                _ = d.selectedFiles,
                h = d.browsePostTTIExperiments,
                f = d.canDisplayFolderSizes,
                m = d.clickTimelineTimestamp,
                S = d.createNewFolderState,
                g = d.currentSort,
                v = d.extensionsFeatureFlags,
                w = d.fileRename,
                b = d.files,
                T = d.filesWithoutTeamFolders,
                F = d.hideTimeline,
                y = d.isQueryingFolderSizes,
                C = d.isTextSelectable,
                I = d.optedInToRewind,
                O = d.isTimelineVisible,
                P = d.loadingState,
                R = d.paginatedTotalNumFiles,
                D = d.path,
                A = d.setAndStoreSortOrder,
                N = d.setSelection,
                L = d.setUrl,
                x = d.shouldShowDeletedFiles,
                M = d.shouldShowPinnedTeamFolders,
                U = d.shouldShowSharedFolderInvites,
                k = d.showTimeline,
                V = d.optInToRewind,
                B = d.teamFolders,
                H = d.user,
                W = d.viewType,
                q = d.viewTypeColumns,
                G = d.sharingServiceInfo,
                z = d.shouldShowRetrievalSuccessBanner,
                j = d.pinnedItems,
                Y = d.contentScroll;
            return i.default.createElement(E.BrowseView, {
                autoTeamGroupId: this.props["auto-team-group-id"],
                userVersionHistoryLength: this.props["user-version-history-length"],
                ref: this.setBrowseViewRef,
                actionHandlers: this.actionHandlers,
                filesViewActionHandlers: this.filesViewActionHandlers,
                onNavigateToParentFolder: this.handleOnNavigateToParentFolder,
                onNavigateToPath: this.handleOnNavigateToPath,
                onNavigateToFileOrFolder: this.handleOnNavigateToFileOrFolder,
                onOpenFileSharedWithMe: this.handleOnOpenFileSharedWithMe,
                isRewindButtonEnabled: this.props.isRewindButtonEnabled,
                clickTimelineTimestamp: m,
                context: u,
                createNewFolderState: S,
                currentSort: g,
                ensureFileViewerClosedIfNotPreviewing: this.ensureFileViewerClosedIfNotPreviewing,
                fileRename: w,
                files: b,
                filesWithoutTeamFolders: T,
                getIsFileJumping: this.getIsFileJumping,
                getFileByFullPath: this.getFileByFullPath,
                handleComponentTTI: this.handleComponentTTI,
                isDraggingExternalFiles: n,
                isDraggingInternalFiles: a,
                isFileViewerShown: this.fileViewerIsShown,
                isTextSelectable: C,
                isTimelineVisible: O,
                optedInToRewind: I,
                isUploadModalOpen: t,
                loadingState: P,
                path: D,
                selectedFiles: _,
                selection: p,
                shouldOpenUploadModal: this.props["should-open-upload-modal"],
                shouldShowDeletedFiles: x,
                shouldShowPinnedTeamFolders: M,
                shouldShowSharedFolderInvites: U,
                starredState: r,
                teamFolders: B,
                totalNumItems: R,
                uploadAjaxInterceptor: this.uploadAjaxInterceptor,
                user: H,
                viewType: W,
                canDisplayFolderSizes: f,
                columns: q[W],
                viewTypeColumns: q,
                arePostTTIModulesLoaded: o,
                isNoComment: this.props["is-no-comment"],
                isOverFreeQuota: s,
                hasExcludedNsIds: l,
                isQueryingFolderSizes: y,
                nsId: this.props["ns-id"],
                uploaderExperiments: this.uploaderExperiments,
                uploaderPostTTIExperiments: this.uploaderPostTTIExperiments,
                searchBarExperiments: this.searchBarExperiments,
                browseExperiments: this.browseExperiments,
                browsePostTTIExperiments: h,
                onShowTimeline: k,
                onCloseTimeline: F,
                onOptInToRewind: V,
                onSelectionChange: N,
                extensionsFeatureFlags: v,
                sharingServiceInfo: G,
                onSortFiles: A,
                onSetUrl: L,
                pinnedItems: j,
                shouldShowRetrievalSuccessBanner: z,
                montanaModalProps: c,
                mobileBillingEducationalModalProps: this.getMobileBillingEducationalModalProps(),
                contentScroll: Y,
                isCreateButtonMoveEnabled: !!this.props.isCreateButtonMoveEnabled
            })
        }, c.mountFileViewerTarget = function() {
            var e = document.getElementById(w.BROWSE_FILE_VIEWER_ELEMENT_ID);
            e || (e = document.createElement("div"), e.id = w.BROWSE_FILE_VIEWER_ELEMENT_ID, document.body.insertBefore(e, document.body.children[0]))
        }, c.unmountFileViewerTarget = function() {
            var e = document.getElementById(w.BROWSE_FILE_VIEWER_ELEMENT_ID);
            e && document.body.removeChild(e)
        }, c
    })(i.default.Component);
    t.BrowseController = ne
}), define("modules/clean/react/browse/data/action_creators", ["require", "exports", "tslib", "external/immutable", "external/lodash", "modules/clean/file_operations/notifications", "modules/clean/filepath", "modules/clean/flux/dispatcher", "modules/clean/history", "modules/clean/react/async_file_modal_controller", "modules/clean/react/browse/action_logger", "modules/clean/react/browse/api", "modules/clean/react/browse/async_extensions", "modules/clean/react/browse/constants", "modules/clean/react/browse/data/helpers", "modules/clean/react/browse/data/selectors", "modules/clean/react/browse/data/types", "modules/clean/react/browse/logger_util", "modules/clean/react/browse/models", "modules/clean/react/browse/uri_helper", "modules/clean/react/file_uploader/constants", "modules/clean/react/files_view/data/action_creators", "modules/clean/react/files_view/data/selectors", "modules/clean/react/files_view/file_actions/api_v2", "modules/clean/react/files_view/file_actions/file_from_metadata", "modules/clean/react/files_view/file_actions/snackbars", "modules/clean/react/files_view/types", "modules/clean/react/folder_overview/data/action_creators", "modules/clean/react/selection", "modules/clean/react/snackbar", "modules/clean/redux/tests/store", "modules/clean/undo", "modules/clean/web_user_action_events", "modules/core/cookies", "modules/core/exception", "modules/core/i18n", "modules/core/uri"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b, T, F, y, C, I, O, P, R, D, A, N, L, x, M) {
    "use strict";

    function U(e, r, o, n) {
        var i = o.mount_points,
            a = f.path(r()),
            s = h.getMountPointUpdateForCurrentPath(i, a, f.mountPoints(r())),
            l = s[0],
            c = s[1];
        l && !c && P.Snackbar.complete(x._("The folder was unshared."), "browse-unshare");
        var d = h.getPathForNewMountPoint(l, c, a);
        if (d) return void n({
            path: d
        });
        e(t.setMountPoints({
            mountPoints: i
        }))
    }

    function k(e, r, o) {
        var n = o.added,
            i = o.moved,
            l = o.removed,
            c = f.path(r()),
            d = f.unsortedFiles(r()),
            u = f.folderSizes(r()),
            p = d.size;
        if (f.postTTIExperiments(r()).expRenameUseApiV2) {
            var h = f.boltIgnore(r()),
                m = h.added,
                S = h.moved,
                v = h.removed,
                E = {
                    added: new Set([]),
                    moved: new Set([]),
                    removed: new Set([])
                };
            n = n.filter(function(e) {
                return !m.has(e.fq_path) || (E.added.add(e.fq_path), !1)
            }), i = i.filter(function(e) {
                var t = e[0];
                return !S.has(t) || (E.moved.add(t), !1)
            }), l = l.filter(function(e) {
                return !v.has(e) || (E.removed.add(e), !1)
            }), e(t.popBoltIgnore(E))
        }
        d = d.withMutations(function(e) {
            u = u.withMutations(function(t) {
                for (var r = function(e) {
                        return a.paths_are_equal(a.parent_dir(e.fq_path), c)
                    }, o = function(t) {
                        r(t) && (e.set(t.fq_path, g.File.fromServerObject(t)), p += 1)
                    }, s = function(r, n) {
                        var i = e.get(r);
                        if (!(i && i.sjid >= n.sjid && r === n.fq_path)) {
                            e.remove(r), p -= 1, o(n);
                            var a = t.get(r);
                            a && (t.remove(r), t.set(n.fq_path, a))
                        }
                    }, d = function(r) {
                        e.remove(r), t.remove(r), p -= 1
                    }, u = 0, _ = n; u < _.length; u++) {
                    var h = _[u];
                    e.has(h.fq_path) ? s(h.fq_path, h) : o(h)
                }
                for (var f = 0, m = i; f < m.length; f++) {
                    var S = m[f],
                        v = S[0],
                        h = S[1];
                    e.has(v) ? s(v, h) : o(h)
                }
                for (var E = function(t) {
                        var r = e.find(function(e) {
                            return e.fq_path.toLowerCase() === t.toLowerCase()
                        });
                        r && d(r.fq_path)
                    }, w = 0, b = l; w < b.length; w++) {
                    var v = b[w];
                    E(v)
                }
            })
        }), d.size !== p && L.reportException({
            err: new Error("applyBoltUpdates ended up with unexpected number of items"),
            tags: ["browse_file_collections_mismatch"],
            severity: L.SEVERITY.CRITICAL,
            exc_extra: {
                expected_unsorted_files_size: p,
                actual_unsorted_files_size: d.size,
                is_deleted_files_on: f.shouldShowDeletedFiles(r()),
                filesAdded: n,
                filesRemoved: l,
                filesMove: i
            }
        }), d !== f.unsortedFiles(r()) && (t.setUnsortedFiles({
            unsortedFiles: d
        })(e, r, R.mockExtraArguments), s.Dispatcher.dispatch({
            type: _.SharedWithActionType.BROWSE_FILES_UPDATED,
            data: {
                parentPath: c,
                files: d.toArray()
            }
        })), u !== f.folderSizes(r()) && e(t.setFolderSizes({
            folderSizes: u
        })), W({
            unsortedFiles: d
        })(e, r, R.mockExtraArguments)
    }
    var V = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), i = r.__importStar(i), a = r.__importStar(a), l = r.__importDefault(l), c = r.__importStar(c), u = r.__importStar(u), f = r.__importStar(f), S = r.__importStar(S), w = r.__importStar(w), T = r.__importStar(T), y = r.__importStar(y);
    t.appInit = function(e) {
        var t = e.experiments,
            r = e.shouldShowDeletedFiles,
            o = e.user,
            n = e.viewer;
        return function(e, i) {
            e({
                type: m.ActionTypes.APP_INIT,
                payload: {
                    experiments: t,
                    shouldShowDeletedFiles: r,
                    user: o,
                    viewer: n
                }
            });
            var a = N.Cookies.read(_.BROWSE_SORT_COOKIE_NAME);
            if (a && a.indexOf("|") > -1) {
                var l = a.split("|", 2),
                    c = {
                        sortField: l[0],
                        sortDirection: l[1]
                    },
                    d = f.sortOrder(i());
                c.sortDirection === d.sortDirection && c.sortField === d.sortField || e(H({
                    sortOrder: c
                }))
            }
            s.Dispatcher.dispatch({
                type: E.UploaderActionType.SET_USER,
                data: {
                    user: o
                }
            })
        }
    }, t.pushBoltIgnore = function(e) {
        return {
            type: m.ActionTypes.PUSH_BOLT_IGNORE,
            payload: e
        }
    }, t.popBoltIgnore = function(e) {
        return {
            type: m.ActionTypes.POP_BOLT_IGNORE,
            payload: e
        }
    }, t.selectFilesByFqPath = function(e) {
        var t = e.fqPathsToSelect;
        return {
            type: m.ActionTypes.SELECT_FILES_BY_FQ_PATH,
            payload: {
                fqPathsToSelect: t
            }
        }
    }, t.setCanDisplayFolderSizes = function(e) {
        var t = e.canDisplayFolderSizes;
        return {
            type: m.ActionTypes.SET_CAN_DISPLAY_FOLDER_SIZES,
            payload: {
                canDisplayFolderSizes: t
            }
        }
    }, t.setClipboardFiles = function(e) {
        var t = e.clipboardFiles;
        return {
            type: m.ActionTypes.SET_CLIPBOARD_FILES,
            payload: {
                clipboardFiles: t
            }
        }
    }, t.copyFilesToClipboard = function(e) {
        var r = e.files;
        return function(e, o) {
            if (r.length) {
                if (r.some(function(e) {
                        return e.isDeleted
                    })) return void P.Snackbar.fail(x._("Deleted files cannot be added to the clipboard"), "browse-clipboard-copy");
                if (r.some(g.File.isTeamSharedFolder)) return void P.Snackbar.fail(x._("Team Folders can’t be copied."), "browse-clipboard-copy");
                var n = x.ungettext("Added %(num_items)s item to clipboard", "Added %(num_items)s items to clipboard", r.length).format({
                    num_items: r.length
                });
                P.Snackbar.complete(n, "browse-clipboard-copy"), e(t.setClipboardFiles({
                    clipboardFiles: r
                }))
            }
        }
    }, t.pasteFilesFromClipboard = function(e) {
        var t = e.copyFiles;
        return function(e, r) {
            t({
                user: f.user(r()),
                files: f.clipboardFiles(r()),
                newPath: f.path(r()),
                checkFSWs: !0,
                dataApi: u,
                onSuccess: function(e) {
                    var t = x.ungettext("Pasted %(num_items)s item from clipboard", "Pasted %(num_items)s items from clipboard", e.length).format({
                        num_items: e.length
                    });
                    P.Snackbar.complete(t, "browse-clipboard-paste")
                }
            })
        }
    }, t.setContext = function(e) {
        var t = e.context;
        return {
            type: m.ActionTypes.SET_CONTEXT,
            payload: {
                context: t
            }
        }
    }, t.setBrowsePostTTIExperiments = function(e) {
        var t = e.browsePostTTIExperiments;
        return {
            type: m.ActionTypes.SET_BROWSE_POST_TTI_EXPERIMENTS,
            payload: {
                browsePostTTIExperiments: t
            }
        }
    };
    var B = function(e) {
        var t = e.fileJumpFilter;
        return {
            type: m.ActionTypes.SET_FILE_JUMP_FILTER,
            payload: {
                fileJumpFilter: t
            }
        }
    };
    t.addFileJumpKeyCode = function(e) {
        var r = e.keyChar;
        return function(e, o) {
            var n = f.fileJumpFilter(o()) + r.toLowerCase();
            e(B({
                fileJumpFilter: n
            }));
            for (var i = null, a = f.fileJumpIndex(o()), s = 0, l = a; s < l.length; s++) {
                var c = l[s],
                    d = c.fqPath;
                if (c.filename >= n) {
                    i = d;
                    break
                }
            }
            null != i && e(t.selectFilesByFqPath({
                fqPathsToSelect: [i]
            }))
        }
    }, t.resetFileJumpFilter = function() {
        return function(e, t) {
            d.logKeyboardShortcutUsage({
                user_id: f.user(t()).id,
                keyboard_shortcut_type: "jump",
                view_type: b.viewType(t())
            }), e(B({
                fileJumpFilter: ""
            }))
        }
    }, t.setFilePathsToSelectOnNextUpdate = function(e) {
        var t = e.filePathsToSelectOnNextUpdate;
        return {
            type: m.ActionTypes.SET_FILE_PATHS_TO_SELECT_ON_NEXT_UPDATE,
            payload: {
                filePathsToSelectOnNextUpdate: t
            }
        }
    }, t.optInToRewind = function() {
        return {
            type: m.ActionTypes.OPT_IN_TO_REWIND,
            payload: {}
        }
    }, t.setIsRewindButtonEnabled = function(e) {
        return function(t, o) {
            return r.__awaiter(V, void 0, void 0, function() {
                var o, n, i, a;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return o = e.path, n = e.userId, i = e.userSkuHasRewind, i ? [4, u.isRewindButtonEnabled(o, n)] : (t({
                                type: m.ActionTypes.SET_IS_REWIND_ENABLED,
                                payload: {
                                    value: !0
                                }
                            }), [2]);
                        case 1:
                            return a = r.sent(), t({
                                type: m.ActionTypes.SET_IS_REWIND_ENABLED,
                                payload: {
                                    value: !!a.can_rewind
                                }
                            }), [2]
                    }
                })
            })
        }
    }, t.showTimeline = function() {
        return {
            type: m.ActionTypes.SHOW_TIMELINE,
            payload: {
                timestamp: (new Date).getTime()
            }
        }
    }, t.hideTimeline = function() {
        return {
            type: m.ActionTypes.HIDE_TIMELINE,
            payload: {}
        }
    }, t.renameFile = function(e) {
        var n = e.file,
            s = e.name,
            l = e.checkFSWs;
        return function(e, p) {
            return r.__awaiter(V, void 0, void 0, function() {
                var h, m, g, v, E, O, R, N, L, M, U, k, V, B = this;
                return r.__generator(this, function(H) {
                    switch (H.label) {
                        case 0:
                            return s.indexOf("/") !== -1 ? (P.Snackbar.fail(x._("Name was invalid."), "browse-rename"), e(w.setFileRename({
                                file: n,
                                renameState: null
                            })), [2]) : (h = f.user(p()), m = function(e, t, r) {
                                var o = f.selectedFiles(p()),
                                    n = S.countFilesAndFolders(o),
                                    i = n.num_files_selected,
                                    a = n.num_folders_selected;
                                d.logBrowseAction({
                                    uid: h.id,
                                    action: e,
                                    num_files_selected: i,
                                    num_folders_selected: a,
                                    view_type: b.viewType(p()),
                                    result: t,
                                    error_summary: r
                                })
                            }, g = function() {
                                if ("V2" === f.experiments(p()).expFolderOverview || "V3" === f.experiments(p()).expFolderOverview) {
                                    var t = f.folderOverviewFolderFileId(p());
                                    e(I.reloadContentReferences({
                                        folderFileId: t,
                                        componentNamespace: _.BrowseFolderOverviewComponentNamespace
                                    }))
                                }
                            }, s.indexOf("/") !== -1 ? (P.Snackbar.fail(x._("Name was invalid."), "browse-rename"), e(w.setFileRename({
                                file: n,
                                renameState: null
                            })), m(A.WebUserActionLogEvent.RENAME_REQUEST_FAIL, n, 'Name contained "/"'), [2]) : (e(w.setFileRename({
                                file: n,
                                renameState: C.RenameState.SAVING_INPUT
                            })), f.postTTIExperiments(p()).expRenameUseApiV2 ? (v = f.path(p()), P.Snackbar.sync(x._("Renaming"), !1, "browse-rename"), e(t.pushBoltIgnore({
                                moved: new Set([n.fq_path])
                            })), [4, T.renameFile(n, s, h, l)]) : [3, 2]));
                        case 1:
                            return E = H.sent(), E.isError ? (e(t.popBoltIgnore({
                                moved: new Set([n.fq_path])
                            })), "to" === E.error[".tag"] && "file_system_warnings" === E.error.to[".tag"] ? (P.Snackbar.close("browse-rename"), c.showFileSystemWarningsModal({
                                fsws: E.error.to.details,
                                onFinalAccept: function() {
                                    e(t.renameFile({
                                        file: n,
                                        name: s,
                                        checkFSWs: !1
                                    }))
                                },
                                onAbortAction: function() {
                                    e(w.setFileRename({
                                        file: n,
                                        renameState: null
                                    }))
                                },
                                confirmText: x._("Rename")
                            })) : (e(w.setFileRename({
                                file: n,
                                renameState: null
                            })), y.renameError(E.error, n.fq_path)), m(A.WebUserActionLogEvent.RENAME_REQUEST_FAIL, n, E.error_summary)) : (O = F.fileFromMetadata(n, E.result.metadata), a.paths_are_equal(f.path(p()), v) && (e(t.setUnsortedFiles({
                                unsortedFiles: f.unsortedFiles(p()).remove(n.fq_path).set(O.fq_path, O)
                            })), g()), e(t.selectFilesByFqPath({
                                fqPathsToSelect: [O.fq_path]
                            })), e(w.setFileRename({
                                file: n,
                                renameState: null
                            })), R = function() {
                                return r.__awaiter(B, void 0, void 0, function() {
                                    var o;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return P.Snackbar.sync(x._("Undoing rename..."), !1, "browse-rename"), e(t.pushBoltIgnore({
                                                    added: new Set([n.fq_path]),
                                                    removed: new Set([O.fq_path])
                                                })), m(A.WebUserActionLogEvent.RENAME_UNDO, n), [4, T.undo(E.result.changeset_data, h)];
                                            case 1:
                                                return o = r.sent(), o.isError ? (P.Snackbar.fail(x._("Undo failed."), "browse-rename"), e(t.popBoltIgnore({
                                                    added: new Set([n.fq_path]),
                                                    removed: new Set([O.fq_path])
                                                })), m(A.WebUserActionLogEvent.RENAME_UNDO_REQUEST_FAIL, n, o.error_summary)) : (P.Snackbar.complete(x._("Rename undone."), "browse-rename"), a.paths_are_equal(f.path(p()), v) && (e(t.setUnsortedFiles({
                                                    unsortedFiles: f.unsortedFiles(p()).remove(O.fq_path).set(n.fq_path, n)
                                                })), g()), e(t.selectFilesByFqPath({
                                                    fqPathsToSelect: [n.fq_path]
                                                })), m(A.WebUserActionLogEvent.RENAME_UNDO_REQUEST_SUCCESS, n)), [2]
                                        }
                                    })
                                })
                            }, D.setHandleUndo(R), P.Snackbar.completeWithUndo(x._("Rename complete."), R, "browse-rename"), m(A.WebUserActionLogEvent.RENAME_REQUEST_SUCCESS, O)), [3, 5];
                        case 2:
                            return H.trys.push([2, 4, , 5]), [4, u.renameFile({
                                file: n,
                                name: s,
                                user: h,
                                checkFSWs: l
                            })];
                        case 3:
                            return N = H.sent(), L = N.renamedFile, M = N.changesets, U = N.failureDetails, k = function() {
                                e(t.setFilePathsToSelectOnNextUpdate({
                                    filePathsToSelectOnNextUpdate: o.Set([n.fq_path])
                                })), g()
                            }, U ? c.showFileSystemWarningsModal({
                                fsws: U,
                                onFinalAccept: function() {
                                    e(t.renameFile({
                                        file: n,
                                        name: s,
                                        checkFSWs: !1
                                    }))
                                },
                                onAbortAction: function() {
                                    e(w.setFileRename({
                                        file: n,
                                        renameState: null
                                    }))
                                },
                                confirmText: x._("Rename")
                            }) : (i.notifyRenameSuccess(h, M, k), e(w.setFileRename({
                                file: n,
                                renameState: null
                            })), g(), e(t.setFilePathsToSelectOnNextUpdate({
                                filePathsToSelectOnNextUpdate: o.Set([L.fq_path])
                            }))), [3, 5];
                        case 4:
                            return V = H.sent(), e(w.setFileRename({
                                file: n,
                                renameState: null
                            })), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        }
    }, t.setFolderSizes = function(e) {
        var t = e.folderSizes;
        return {
            type: m.ActionTypes.SET_FOLDER_SIZES,
            payload: {
                folderSizes: t
            }
        }
    }, t.setLoadingState = function(e) {
        var t = e.loadingState,
            r = e.path;
        return {
            type: m.ActionTypes.SET_LOADING_STATE,
            payload: {
                loadingState: t,
                path: r
            }
        }
    }, t.setMountPoints = function(e) {
        var t = e.mountPoints;
        return {
            type: m.ActionTypes.SET_MOUNT_POINTS,
            payload: {
                mountPoints: t
            }
        }
    }, t.setNewFolderCreationState = function(e) {
        var t = e.newFolderCreationState;
        return {
            type: m.ActionTypes.SET_NEW_FOLDER_CREATION_STATE,
            payload: {
                newFolderCreationState: t
            }
        }
    }, t.setPaginatedTotalNumFiles = function(e) {
        var t = e.paginatedTotalNumFiles;
        return {
            type: m.ActionTypes.SET_PAGINATED_TOTAL_NUM_FILES,
            payload: {
                paginatedTotalNumFiles: t
            }
        }
    }, t.setUrl = function(e) {
        var o = e.path,
            i = void 0 === o ? "" : o,
            a = e.qargs;
        return function(e, o) {
            l.default.push_state(f.urlPrefix(o()) + M.URI.encode_parts(i), n.omitBy(r.__assign({}, n.pick(v.getQueryArgs(), ["d"]), a), n.isUndefined)), e(t.setSelection({
                selection: O.createSelection()
            }))
        }
    }, t.setPath = function(e) {
        var t = e.path;
        return {
            type: m.ActionTypes.SET_PATH,
            payload: {
                path: t
            }
        }
    }, t.setPathData = function(e) {
        var r = e.path,
            n = e.files,
            i = e.paginatedTotalNumFiles,
            l = e.context;
        return function(e, c) {
            if (a.paths_are_equal(r, f.path(c()))) {
                var d = o.Map(n.map(function(e) {
                    return [e.fq_path, e]
                }));
                e(t.setContext({
                    context: l
                })), t.setUnsortedFiles({
                    unsortedFiles: d
                })(e, c, R.mockExtraArguments), e(t.setPaginatedTotalNumFiles({
                    paginatedTotalNumFiles: i
                })), e(t.clearSelection()), W({
                    unsortedFiles: d
                })(e, c, R.mockExtraArguments), setTimeout(function() {
                    s.Dispatcher.dispatch({
                        type: _.SharedWithActionType.BROWSE_FILES_LOADED,
                        data: {
                            parentPath: r,
                            files: n
                        }
                    }), s.Dispatcher.dispatch({
                        type: E.UploaderActionType.SET_PATH,
                        data: {
                            path: r,
                            hasPermissionToUploadToFolder: l.isCurrentPathWriteable()
                        }
                    })
                }, 1)
            }
        }
    }, t.setSelection = function(e) {
        var t = e.selection;
        return {
            type: m.ActionTypes.SET_SELECTION,
            payload: {
                selection: t
            }
        }
    }, t.clearSelection = function() {
        return t.setSelection({
            selection: O.createSelection()
        })
    }, t.setShouldShowDeletedFiles = function(e) {
        var t = e.shouldShowDeletedFiles;
        return {
            type: m.ActionTypes.SET_SHOULD_SHOW_DELETED_FILES,
            payload: {
                shouldShowDeletedFiles: t
            }
        }
    };
    var H = function(e) {
        var t = e.sortOrder;
        return {
            type: m.ActionTypes.SET_SORT_ORDER,
            payload: {
                sortOrder: t
            }
        }
    };
    t.setAndStoreSortOrder = function(e) {
        return function(t, r) {
            N.Cookies.delete(_.BROWSE_SORT_COOKIE_NAME);
            var o = e.sortField + "|" + e.sortDirection;
            N.Cookies.create(_.BROWSE_SORT_COOKIE_NAME, o, 1095), t(H({
                sortOrder: e
            }))
        }
    }, t.setUnsortedFiles = function(e) {
        var t = e.unsortedFiles;
        return function(e, o) {
            return r.__awaiter(V, void 0, void 0, function() {
                var n;
                return r.__generator(this, function(r) {
                    return n = f.user(o()), e({
                        type: m.ActionTypes.SET_UNSORTED_FILES,
                        payload: {
                            unsortedFiles: t
                        }
                    }), p.asyncExtensions.initializeStore(n, t.toArray()), [2]
                })
            })
        }
    }, t.requestFolderSizes = function(e) {
        var t = e.fqPath;
        return {
            type: m.ActionTypes.REQUEST_FOLDER_SIZES,
            payload: {
                fqPath: t
            }
        }
    }, t.setFolderSizesPending = function(e) {
        var t = e.fetchFolderSizesResp;
        return {
            type: m.ActionTypes.SET_FOLDER_SIZES_PENDING,
            payload: {
                fetchFolderSizesResp: t
            }
        }
    }, t.completeFolderSizes = function(e) {
        var t = e.fetchFolderSizeState;
        return {
            type: m.ActionTypes.COMPLETE_FOLDER_SIZES,
            payload: {
                fetchFolderSizeState: t
            }
        }
    }, t.setFetchFolderSizeState = function(e) {
        var r = e.files,
            o = e.state;
        return function(e, n) {
            var i = f.browsePostTTIExperiments(n());
            if (i && i.expFolderCalcSize && "AUTO" === i.expFolderCalcSize) {
                for (var a = {
                        sizes_dict: [],
                        queue: []
                    }, s = 0, l = r; s < l.length; s++) {
                    var c = l[s];
                    c.is_dir && c.bytes >= 0 && !g.File.isNoAccessSharedFolder(c) && (a.sizes_dict.push({
                        fq_path: c.fq_path,
                        size: c.bytes
                    }), e(t.requestFolderSizes({
                        fqPath: c.fq_path
                    })))
                }
                e(t.setFolderSizesPending({
                    fetchFolderSizesResp: a
                })), e(t.completeFolderSizes({
                    fetchFolderSizeState: o
                }))
            }
        }
    }, t.applyBoltUpdates = function(e) {
        var r = e.updates,
            o = e.setPath;
        return function(e, n) {
            var i = r.parent_changes,
                a = f.user(n());
            if (i && i.change_to_fq_path) return h.showUserNotificationForPathChange(a, i), void t.setUrl({
                path: i.change_to_fq_path
            })(e, n, R.mockExtraArguments);
            U(e, n, r, o), k(e, n, r)
        }
    };
    var W = function(e) {
        var r = e.unsortedFiles;
        return function(e, n) {
            var i = f.filePathsToSelectOnNextUpdate(n()).toArray(),
                a = i.filter(function(e) {
                    return r.has(e)
                }),
                s = i.filter(function(e) {
                    return !r.has(e)
                });
            0 !== a.length && (e(t.selectFilesByFqPath({
                fqPathsToSelect: a
            })), e(t.setFilePathsToSelectOnNextUpdate({
                filePathsToSelectOnNextUpdate: o.Set(s)
            })))
        }
    };
    t.appendFiles = function(e) {
        var r = e.path,
            n = e.files;
        return function(e, i) {
            if (a.paths_are_equal(r, f.path(i()))) {
                var l = f.unsortedFiles(i()).size,
                    c = f.unsortedFiles(i()).merge(o.Map(n.map(function(e) {
                        return [e.fq_path, e]
                    })));
                t.setUnsortedFiles({
                    unsortedFiles: c
                })(e, i, R.mockExtraArguments), W({
                    unsortedFiles: c
                })(e, i, R.mockExtraArguments), setTimeout(function() {
                    s.Dispatcher.dispatch({
                        type: _.SharedWithActionType.BROWSE_FILES_LOADED,
                        data: {
                            parentPath: r,
                            files: n
                        }
                    })
                }, 1), c.size !== l + n.length && L.reportException({
                    err: new Error("appendFiles ended up with unexpected number of files."),
                    tags: ["browse_file_collections_mismatch"],
                    severity: L.SEVERITY.CRITICAL,
                    exc_extra: {
                        previous_unsorted_files_size: l,
                        incoming_files_size: n.length,
                        updated_unsorted_files_size: c.size,
                        is_deleted_files_on: f.shouldShowDeletedFiles(i())
                    }
                })
            }
        }
    }, t.clearFiles = function(e) {
        var r = e.path,
            n = e.context;
        return function(e, i) {
            a.paths_are_equal(r, f.path(i())) && (t.setUnsortedFiles({
                unsortedFiles: o.Map()
            })(e, i, R.mockExtraArguments), e(t.setSelection({
                selection: O.createSelection()
            })), e(t.setPaginatedTotalNumFiles({
                paginatedTotalNumFiles: 0
            })), e(t.setContext({
                context: n
            })))
        }
    }, t.setIsFileViewerShown = function(e) {
        var t = e.isShown;
        return {
            type: m.ActionTypes.SET_IS_FILE_VIEWER_SHOWN,
            payload: {
                isShown: t
            }
        }
    }
}), define("modules/clean/react/browse/data/helpers", ["require", "exports", "tslib", "external/lodash", "modules/clean/filepath", "modules/clean/react/browse/data/selectors", "modules/clean/react/snackbar", "modules/core/i18n"], function(e, t, r, o, n, i, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), i = r.__importStar(i), t.showUserNotificationForPathChange = function(e, t) {
        function r(e) {
            return o.escape(n.filename(e))
        }
        switch (null != t.change_type ? t.change_type.toLowerCase() : null) {
            case "moved":
                a.Snackbar.complete(s._("This folder has been moved"), "browse-notification");
                break;
            case "renamed":
                a.Snackbar.complete(s._("This folder has been renamed to “%(folder_name)s”").format({
                    folder_name: r(t.change_to_fq_path)
                }), "browse-notification");
                break;
            case "deleted":
                a.Snackbar.fail(s._("The folder “%(folder_name)s” has been deleted").format({
                    folder_name: r(t.old_fq_path)
                }), "browse-notification")
        }
    }, t.getMountPointUpdateForCurrentPath = function(e, t, r) {
        var n, i, a = function(e) {
            return t === e
        };
        return r && r.find(a) ? (i = r.find(a) || null, n = e[r.findKey(a)] || null) : (i = null, n = o.find(e, a) || null), [i, n]
    }, t.getPathForNewMountPoint = function(e, t, r) {
        return e && !t ? r : e && t ? n.paths_are_equal(e, t) ? null : t : !e && t ? r : null
    }, t.getIndexOfFile = function(e, t) {
        return i.sortedFiles(t).findIndex(function(t) {
            return t.sjid === e.sjid && t.ns_id === e.ns_id
        })
    }
}), define("modules/clean/react/browse/data/reducer", ["require", "exports", "tslib", "external/immutable", "modules/clean/filepath", "modules/clean/react/browse/data/types", "modules/clean/react/browse/models", "modules/clean/react/files_view/types", "modules/clean/react/selection", "modules/core/exception"], function(e, t, r, o, n, i, a, s, l, c) {
    "use strict";

    function d(e, t) {
        var o = t.payload,
            n = o.experiments,
            i = o.shouldShowDeletedFiles,
            a = o.user,
            s = o.viewer;
        return c.assert(null === e.user, "Cannot reinitialize Browse store; changing invariants such as `user` is untested"), r.__assign({}, e, {
            experiments: n,
            shouldShowDeletedFiles: i,
            user: a,
            viewer: s
        })
    }

    function u(e, t) {
        var o = e.boltIgnore,
            n = o.added,
            i = o.moved,
            a = o.removed;
        return t.payload.added && (n = new Set(n), t.payload.added.forEach(function(e) {
            return n.add(e)
        })), t.payload.moved && (i = new Set(i), t.payload.moved.forEach(function(e) {
            return i.add(e)
        })), t.payload.removed && (a = new Set(a), t.payload.removed.forEach(function(e) {
            return a.add(e)
        })), r.__assign({}, e, {
            boltIgnore: {
                added: n,
                moved: i,
                removed: a
            }
        })
    }

    function p(e, t) {
        var o = e.boltIgnore,
            n = o.added,
            i = o.moved,
            a = o.removed;
        return t.payload.added && (n = new Set(n), t.payload.added.forEach(function(e) {
            return n.delete(e)
        })), t.payload.moved && (i = new Set(i), t.payload.moved.forEach(function(e) {
            return i.delete(e)
        })), t.payload.removed && (a = new Set(a), t.payload.removed.forEach(function(e) {
            return a.delete(e)
        })), r.__assign({}, e, {
            boltIgnore: {
                added: n,
                moved: i,
                removed: a
            }
        })
    }

    function _(e, t) {
        var n = t.payload.fqPathsToSelect,
            i = n.map(function(e) {
                return e.toLowerCase()
            }),
            a = e.unsortedFiles.toList().filter(function(e) {
                return i.includes(e.fq_path.toLowerCase())
            }),
            s = a.map(function(e) {
                return e.fq_path
            }),
            l = o.OrderedSet(s),
            c = s.size ? s.get(0) : null;
        return r.__assign({}, e, {
            selection: e.selection.set("selected", l).set("anchor", c)
        })
    }

    function h(e, t) {
        var o = t.payload.canDisplayFolderSizes;
        return r.__assign({}, e, {
            canDisplayFolderSizes: o
        })
    }

    function f(e, t) {
        var o = t.payload.clipboardFiles;
        return r.__assign({}, e, {
            clipboardFiles: o
        })
    }

    function m(e, t) {
        var o = t.payload.context;
        return r.__assign({}, e, {
            context: o
        })
    }

    function S(e, t) {
        var o = t.payload.fileJumpFilter;
        return r.__assign({}, e, {
            fileJumpFilter: o
        })
    }

    function g(e, t) {
        var o = t.payload.filePathsToSelectOnNextUpdate;
        return r.__assign({}, e, {
            filePathsToSelectOnNextUpdate: o
        })
    }

    function v(e, t) {
        var o = t.payload.folderSizes;
        return r.__assign({}, e, {
            folderSizes: o
        })
    }

    function E(e, t) {
        var i = t.payload,
            a = i.loadingState,
            l = i.path;
        return n.paths_are_equal(l, e.path) ? a === s.LoadingState.LOADED ? r.__assign({}, e, {
            loadingState: a,
            filePathsToSelectOnNextUpdate: o.Set()
        }) : r.__assign({}, e, {
            loadingState: a
        }) : e
    }

    function w(e, t) {
        var n = t.payload.mountPoints;
        return r.__assign({}, e, {
            mountPoints: o.Map(n)
        })
    }

    function b(e, t) {
        var o = t.payload.newFolderCreationState;
        return r.__assign({}, e, {
            newFolderCreationState: o
        })
    }

    function T(e, t) {
        var o = t.payload.paginatedTotalNumFiles;
        return r.__assign({}, e, {
            paginatedTotalNumFiles: o
        })
    }

    function F(e, t) {
        var o = t.payload.path;
        return r.__assign({}, e, {
            path: o
        })
    }

    function y(e, t) {
        var o = t.payload.selection;
        return r.__assign({}, e, {
            selection: o
        })
    }

    function C(e, t) {
        var o = t.payload.shouldShowDeletedFiles;
        return r.__assign({}, e, {
            shouldShowDeletedFiles: o
        })
    }

    function I(e, t) {
        var o = t.payload.sortOrder;
        return r.__assign({}, e, {
            sortOrder: o
        })
    }

    function O(e, t) {
        var o = t.payload.unsortedFiles;
        return r.__assign({}, e, {
            unsortedFiles: o
        })
    }

    function P(e, t) {
        var o = t.payload.browsePostTTIExperiments;
        return r.__assign({}, e, {
            browsePostTTIExperiments: o
        })
    }

    function R(e, t) {
        var o = t.payload.fqPath;
        if (e.isQueryingFolderSizes) return e;
        var n = e.folderSizes.withMutations(function(e) {
            e.set(o, {
                size: 0,
                state: s.FetchFolderSizeState.LOADING
            })
        });
        return r.__assign({}, e, {
            folderSizes: n,
            isQueryingFolderSizes: !0
        })
    }

    function D(e, t) {
        var o = t.payload.fetchFolderSizesResp,
            n = e.currentFolderSizesQuery,
            i = e.folderSizes.withMutations(function(t) {
                for (var r = function(r) {
                        t.update(r.fq_path, {
                            size: 0,
                            state: s.FetchFolderSizeState.LOADING
                        }, function(t) {
                            return {
                                size: !e.browsePostTTIExperiments || "CTX" !== e.browsePostTTIExperiments.expFolderCalcSize && "AUTO" !== e.browsePostTTIExperiments.expFolderCalcSize ? t.size + r.size : r.size,
                                state: s.FetchFolderSizeState.LOADING
                            }
                        }), n = n.withMutations(function(e) {
                            return e.add(r.fq_path)
                        })
                    }, i = 0, a = o.sizes_dict; i < a.length; i++) {
                    r(a[i])
                }
            });
        return r.__assign({}, e, {
            currentFolderSizesQuery: n,
            folderSizes: i
        })
    }

    function A(e, t) {
        var n = t.payload.fetchFolderSizeState,
            i = e.folderSizes.withMutations(function(t) {
                e.currentFolderSizesQuery.forEach(function(r) {
                    var o = e.folderSizes.get(r);
                    o && t.update(r, function() {
                        return {
                            size: o.size,
                            state: n
                        }
                    })
                })
            });
        return r.__assign({}, e, {
            currentFolderSizesQuery: o.Set(),
            folderSizes: i,
            isQueryingFolderSizes: !1
        })
    }

    function N(e, t) {
        return r.__assign({}, e, {
            isTimelineVisible: !0,
            clickTimelineTimestamp: t.payload.timestamp
        })
    }

    function L(e, t) {
        return r.__assign({}, e, {
            isTimelineVisible: !1
        })
    }

    function x(e, t) {
        return r.__assign({}, e, {
            isFileViewerShown: t.payload.isShown
        })
    }

    function M(e, t) {
        return r.__assign({}, e, {
            optedInToRewind: !0
        })
    }

    function U(e, t) {
        return r.__assign({}, e, {
            isRewindButtonEnabled: t.payload.value
        })
    }

    function k(e, r) {
        switch (void 0 === e && (e = t.defaultBrowseState), r.type) {
            case i.ActionTypes.APP_INIT:
                return d(e, r);
            case i.ActionTypes.PUSH_BOLT_IGNORE:
                return u(e, r);
            case i.ActionTypes.POP_BOLT_IGNORE:
                return p(e, r);
            case i.ActionTypes.SELECT_FILES_BY_FQ_PATH:
                return _(e, r);
            case i.ActionTypes.SET_CAN_DISPLAY_FOLDER_SIZES:
                return h(e, r);
            case i.ActionTypes.SET_CLIPBOARD_FILES:
                return f(e, r);
            case i.ActionTypes.SET_CONTEXT:
                return m(e, r);
            case i.ActionTypes.SET_FILE_JUMP_FILTER:
                return S(e, r);
            case i.ActionTypes.SET_FILE_PATHS_TO_SELECT_ON_NEXT_UPDATE:
                return g(e, r);
            case i.ActionTypes.SET_FOLDER_SIZES:
                return v(e, r);
            case i.ActionTypes.SET_LOADING_STATE:
                return E(e, r);
            case i.ActionTypes.SET_MOUNT_POINTS:
                return w(e, r);
            case i.ActionTypes.SET_NEW_FOLDER_CREATION_STATE:
                return b(e, r);
            case i.ActionTypes.SET_PAGINATED_TOTAL_NUM_FILES:
                return T(e, r);
            case i.ActionTypes.SET_PATH:
                return F(e, r);
            case i.ActionTypes.SET_SELECTION:
                return y(e, r);
            case i.ActionTypes.SET_SHOULD_SHOW_DELETED_FILES:
                return C(e, r);
            case i.ActionTypes.SET_SORT_ORDER:
                return I(e, r);
            case i.ActionTypes.SET_UNSORTED_FILES:
                return O(e, r);
            case i.ActionTypes.SHOW_TIMELINE:
                return N(e, r);
            case i.ActionTypes.HIDE_TIMELINE:
                return L(e, r);
            case i.ActionTypes.SET_IS_FILE_VIEWER_SHOWN:
                return x(e, r);
            case i.ActionTypes.OPT_IN_TO_REWIND:
                return M(e, r);
            case i.ActionTypes.SET_IS_REWIND_ENABLED:
                return U(e, r);
            case i.ActionTypes.REQUEST_FOLDER_SIZES:
                return R(e, r);
            case i.ActionTypes.SET_FOLDER_SIZES_PENDING:
                return D(e, r);
            case i.ActionTypes.COMPLETE_FOLDER_SIZES:
                return A(e, r);
            case i.ActionTypes.SET_BROWSE_POST_TTI_EXPERIMENTS:
                return P(e, r)
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), t.defaultBrowseState = {
        boltIgnore: {
            added: new Set,
            moved: new Set,
            removed: new Set
        },
        canDisplayFolderSizes: !1,
        clipboardFiles: [],
        context: new a.BrowseContext,
        isRewindButtonEnabled: !1,
        experiments: {},
        browsePostTTIExperiments: {},
        fileJumpFilter: "",
        filePathsToSelectOnNextUpdate: o.Set(),
        folderSizes: o.Map(),
        isTimelineVisible: !1,
        optedInToRewind: !1,
        clickTimelineTimestamp: void 0,
        loadingState: s.LoadingState.LOADING_FIRST_PAGE,
        mountPoints: null,
        newFolderCreationState: s.NewFolderCreationState.CREATE_FOLDER_INACTIVE,
        paginatedTotalNumFiles: 0,
        path: "",
        selection: l.createSelection(),
        shouldShowDeletedFiles: !1,
        sortOrder: {
            sortField: s.SortField.FILENAME,
            sortDirection: s.SortDirection.ASCENDING
        },
        user: null,
        unsortedFiles: o.Map(),
        viewer: null,
        currentFolderSizesQuery: o.Set(),
        isQueryingFolderSizes: !1,
        isSearchMode: !1
    }, t.browseReducer = k
}), define("modules/clean/react/browse/data/selectors", ["require", "exports", "tslib", "external/immutable", "external/reselect", "modules/clean/filepath", "modules/clean/filetypes", "modules/clean/react/browse/constants", "modules/clean/react/browse/data/reducer", "modules/clean/react/browse/models", "modules/clean/react/browse/uri_helper", "modules/clean/react/browse/util", "modules/clean/react/files_view/data/selectors", "modules/clean/react/files_view/types", "modules/clean/react/folder_overview/data/selectors", "modules/clean/redux/namespaces", "modules/clean/redux/selectors", "modules/clean/search/types", "modules/core/browser_detection", "modules/core/exception"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), i = r.__importStar(i), g = r.__importStar(g);
    var E = h.makeSelectors();
    t.haveAllComponentsLoaded = function(e) {
        return E.haveAllComponentsLoaded(e, {
            componentNamespace: s.BrowseFolderOverviewComponentNamespace
        })
    }, t.hasFailedToLoad = function(e) {
        return E.hasFailedToLoad(e, {
            componentNamespace: s.BrowseFolderOverviewComponentNamespace
        })
    }, t.folderOverviewFolderFileId = function(e) {
        return E.folderFileId(e, {
            path: w(e).path
        })
    }, t.folderOverviewLoggingFileId = function(e) {
        return E.loggingFileId(e, {
            path: w(e).path
        })
    }, t.folderOverviewPinnedItems = function(e) {
        return E.pinnedItems(e, {
            path: w(e).path
        })
    };
    var w = function(e) {
        return m.getStateAtNamespace(e, f.BROWSE_NAMESPACE_KEY) || l.defaultBrowseState
    };
    t.canDisplayFolderSizes = function(e) {
        return w(e).canDisplayFolderSizes
    }, t.clipboardFiles = function(e) {
        return w(e).clipboardFiles
    }, t.context = function(e) {
        return w(e).context
    }, t.experiments = function(e) {
        return w(e).experiments
    }, t.postTTIExperiments = function(e) {
        return w(e).browsePostTTIExperiments
    }, t.fileJumpFilter = function(e) {
        return w(e).fileJumpFilter
    }, t.filePathsToSelectOnNextUpdate = function(e) {
        return w(e).filePathsToSelectOnNextUpdate
    }, t.folderSizes = function(e) {
        return w(e).folderSizes
    }, t.isFileJumping = function(e) {
        return w(e).fileJumpFilter.length > 0
    }, t.isQueryingFolderSizes = function(e) {
        return w(e).isQueryingFolderSizes
    };
    var b = function(e) {
        return w(e).loadingState
    };
    t.mountPoints = function(e) {
        return w(e).mountPoints
    }, t.newFolderCreationState = function(e) {
        return w(e).newFolderCreationState
    }, t.paginatedTotalNumFiles = function(e) {
        return t.loadingState(e) === _.LoadingState.LOADED ? t.sortedFiles(e).count() : w(e).paginatedTotalNumFiles
    }, t.path = function(e) {
        return w(e).path
    }, t.selection = function(e) {
        return w(e).selection
    }, t.shouldShowDeletedFiles = function(e) {
        return w(e).shouldShowDeletedFiles
    }, t.sortOrder = function(e) {
        return w(e).sortOrder
    }, t.unsortedFiles = function(e) {
        return w(e).unsortedFiles
    }, t.boltIgnore = function(e) {
        return w(e).boltIgnore
    }, t.user = function(e) {
        var t = w(e).user;
        return v.assert(null != t, "Browse store `user` accessed before APP_INIT action"), t
    }, t.viewer = function(e) {
        var t = w(e).viewer;
        return v.assert(null != t, "Browse store `viewer` accessed before APP_INIT action"), t
    }, t.isTimelineVisible = function(e) {
        return w(e).isTimelineVisible
    }, t.clickTimelineTimestamp = function(e) {
        return w(e).clickTimelineTimestamp
    }, t.isFileViewerShown = function(e) {
        return w(e).isFileViewerShown
    }, t.optedInToRewind = function(e) {
        return w(e).optedInToRewind
    }, t.isRewindButtonEnabled = function(e) {
        return w(e).isRewindButtonEnabled
    }, t.browsePostTTIExperiments = function(e) {
        return w(e).browsePostTTIExperiments || {}
    }, t.fileJumpIndex = n.createSelector(t.unsortedFiles, function(e) {
        return e.keySeq().toArray().map(function(e) {
            return {
                filename: i.filename(e).toLowerCase(),
                fqPath: e
            }
        }).sort(function(e, t) {
            return e.filename < t.filename ? -1 : e.filename > t.filename ? 1 : 0
        })
    }), t.sortedFiles = n.createSelector(t.unsortedFiles, t.sortOrder, t.folderSizes, function(e, t, r) {
        return u.sortFiles(e.toList(), t, r, g.mac)
    }), t.selectedFiles = n.createSelector(t.unsortedFiles, t.selection, function(e, t) {
        return t.selected.isEmpty() || e.isEmpty() ? o.OrderedMap() : o.OrderedMap(t.selected.map(function(t) {
            var r = e.find(function(e) {
                return e.fq_path === t
            });
            return r ? [r.fq_path, r] : void 0
        }))
    }), t.urlPrefix = n.createSelector(t.user, t.viewer, function(e, t) {
        return d.browse_root(t, e)
    }), t.teamFolders = n.createSelector(t.unsortedFiles, t.folderSizes, function(e, t) {
        var r = {
            sortField: _.SortField.FILENAME,
            sortDirection: _.SortDirection.ASCENDING
        };
        return u.sortFiles(e.toList().filter(function(e) {
            return e.type === a.FileTypes.TEAM_SHARED_FOLDER
        }), r, t, g.mac)
    }), t.sortedFilesWithFolderSizes = n.createSelector(t.sortedFiles, t.folderSizes, function(e, t) {
        return e.map(function(e) {
            var r = t.get(e.fq_path);
            return r ? e.updateSize(r.size, r.state) : e
        })
    }), t.unsortedFilesWithFolderSizes = n.createSelector(t.unsortedFiles, t.folderSizes, function(e, t) {
        return e.withMutations(function(r) {
            t.forEach(function(t, o) {
                var n = e.get(o);
                if (n && t) {
                    var i = n.updateSize(t.size, t.state);
                    r.set(o, i)
                }
            })
        })
    }), t.sortedFilesWithFoldersSizesWithoutTeamFolders = n.createSelector(t.sortedFilesWithFolderSizes, function(e) {
        return e.filter(function(e) {
            return e.type !== a.FileTypes.TEAM_SHARED_FOLDER
        })
    }), t.loadingState = n.createSelector(b, t.haveAllComponentsLoaded, t.hasFailedToLoad, t.experiments, function(e, t, r, o) {
        return r ? e : t || "V1" !== o.expFolderOverview && "V2" !== o.expFolderOverview && "V3" !== o.expFolderOverview ? e : _.LoadingState.LOADING_FIRST_PAGE
    }), t.shouldShowPinnedTeamFolders = n.createSelector(t.context, t.loadingState, t.path, t.teamFolders, p.viewType, function(e, t, r, o, n) {
        return e.showPinnedTeamFolder && !o.isEmpty() && i.paths_are_equal(r, "/") && n === _.ViewType.List && (t === _.LoadingState.LOADED || t === _.LoadingState.LOADING_REMAINING_PAGES)
    }), t.shouldShowSharedFolderInvites = n.createSelector(t.browsePostTTIExperiments, t.path, function(e, t) {
        return !!e.expShowSharedFolderInvites && i.paths_are_equal(t, "/")
    }), t.isDetailsPaneEnabled = n.createSelector(t.experiments, function(e) {
        var t = e.expBrowseDetailsPaneVariants;
        return t && t !== S.DetailsPaneVariants.CONTROL && t !== S.DetailsPaneVariants.HOLDOUT && t !== S.DetailsPaneVariants.OFF
    }), t.shouldShowSidebarFolderOverview = n.createSelector(t.experiments, t.selectedFiles, function(e, t) {
        var r = e.expBrowseDetailsPaneVariants;
        return (r === S.DetailsPaneVariants.FOLDER_OVERVIEW || r === S.DetailsPaneVariants.CONTENT_SCROLL || r === S.DetailsPaneVariants.CREATE_FILE_LABEL) && t && 1 === t.size && t.first().is_dir && !c.File.isNoAccessSharedFolder(t.first())
    }), t.shouldMainContentScroll = n.createSelector(t.experiments, function(e) {
        return e.expBrowseDetailsPaneVariants === S.DetailsPaneVariants.CONTENT_SCROLL
    }), t.isCreateButtonMoveEnabled = n.createSelector(t.experiments, function(e) {
        var t = e.expCreateButtonMove;
        return t && ("V1" === t || "V2" === t)
    })
}), define("modules/clean/react/browse/data/store", ["require", "exports", "modules/clean/redux/namespaces", "modules/clean/react/browse/data/reducer", "modules/clean/redux/store"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i;
    t.getStoreForBrowse = function() {
        var e;
        return i || (i = n.getStoreAndRegisterReducers((e = {}, e[r.BROWSE_NAMESPACE_KEY] = o.browseReducer, e))), i
    }
}), define("modules/clean/react/browse/global_actions", ["require", "exports", "tslib", "external/lodash", "react", "modules/clean/analytics", "modules/clean/cloud_docs/constants", "modules/clean/cloud_docs/new_file_menu", "modules/core/browser", "modules/clean/filepath", "modules/clean/react/async_onboarding_move_modal", "modules/clean/react/browse/action_logger", "modules/clean/react/browse/actions", "modules/clean/react/browse/constants", "modules/clean/react/browse/data/action_creators", "modules/clean/react/browse/data/selectors", "modules/clean/react/browse/data/store", "modules/clean/react/browse/nav_actions", "modules/clean/react/growth/async_joiner_personal_account_modal", "modules/clean/react/modal", "modules/clean/sharing/access_level", "modules/clean/sharing/browse_exports", "modules/clean/sharing/constants", "modules/clean/viewer", "modules/core/browser_detection", "modules/core/exception", "modules/core/i18n", "modules/core/notify", "modules/clean/user_education/user_education_client", "modules/clean/history", "modules/clean/react/extensions/data/types", "modules/clean/react/extensions/split_share_button", "modules/clean/filetypes", "modules/core/uri"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b, T, F, y, C, I, O, P, R, D, A, N) {
    "use strict";

    function L(e) {
        return function() {
            var t = e.currentNSID,
                r = e.currentNSPath;
            l.redirect("/requests?ns_id=" + t + "&path=" + r + "&referrer=web_browse_global_action")
        }
    }

    function x(e) {
        var t = e.context,
            r = e.user,
            l = e.viewType,
            c = e.showDeletedFiles,
            u = e.onUpload,
            p = void 0 === u ? o.noop : u,
            _ = e.isNoComment,
            h = void 0 !== _ && _,
            S = e.autoTeamGroupId,
            E = e.browsePostTTIExperiments,
            b = e.browseExperiments,
            y = e.isRewindButtonEnabled,
            C = e.optedInToRewind,
            I = e.expFolderHistoryRollbacks,
            P = t.isCurrentlyInRoot,
            N = !t.canViewContainingNSMembers,
            x = t.isCurrentPathWriteable(),
            U = F.is_input_webkitdirectory_supported(),
            k = {
                action: {
                    className: "action-upload",
                    label: V(M.UploadFiles),
                    popoverLabel: V(M.Files),
                    iconName: U ? "upload-file" : "upload",
                    performAction: function() {
                        return p(!1)
                    },
                    disabled: !x,
                    key: "upload-files"
                },
                isPrimary: !1
            },
            Y = U ? {
                action: {
                    className: "action-upload",
                    label: V(M.UploadFolder),
                    popoverLabel: V(M.Folder),
                    iconName: "upload-folder",
                    performAction: function() {
                        return p(!0)
                    },
                    disabled: !x,
                    key: "upload-folder"
                },
                isPrimary: !1
            } : void 0,
            K = !t.isInsideSandboxFolder,
            Q = E.expTimeline,
            J = E.expRewindUpsell,
            X = E.expEnableCloudDocsPaperCreate,
            Z = E.expEnableCloudDocsBinderCreate,
            $ = E.expEnableCloudDocsGddCreate,
            ee = E.expEnableCloudDocsSimplePointerCreate,
            te = E.expShowRequestFiles,
            re = {
                action: function() {
                    return n.default.createElement(s.NewFileMenu, {
                        key: "new-file-menu",
                        user: r,
                        source: a.NewFileMenuFromType.BROWSE,
                        path: t.currentFQPath,
                        disabled: !x,
                        showGdd: !!$,
                        showPaper: !!X,
                        showBinder: !!Z,
                        showSimplePointer: !!ee,
                        primaryButton: !0
                    })
                },
                isPrimary: !0
            },
            oe = [];
        if (t.isInsideTeamFolderTree || !t.isInsideDeletedSharedFolder && !t.isInsideDeletedNestedSharedFolder)
            if (t.isInsideDeletedFolder) oe.push({
                action: {
                    label: V(M.RestoreFolder),
                    iconName: "restore",
                    className: "action-restore",
                    performAction: G(r, l, t),
                    disabled: !x,
                    key: "restore-folder"
                },
                isPrimary: !0
            });
            else {
                var ne = {
                        label: V(M.NewFolder),
                        iconName: "new-folder",
                        performAction: B(r, l, t, b.expGGRaclsEnabled, S),
                        disabled: !x,
                        className: "action-new-folder",
                        key: "new-folder"
                    },
                    ie = {
                        action: ne,
                        isPrimary: !1
                    },
                    ae = m.getStoreForBrowse(),
                    se = f.isDetailsPaneEnabled(ae.getState()) ? M.ShareFolderAbbreviated : M.ShareFolder,
                    le = {
                        label: V(P ? M.NewSharedFolder : se),
                        iconName: "new-shared-folder",
                        performAction: W(r, t),
                        disabled: N,
                        className: "action-share-folder",
                        key: "new-shared-folder"
                    },
                    ce = {
                        file_id: "ns:" + t.currentNSID + t.currentNSPath,
                        fq_path: t.currentFQPath,
                        is_dir: !0,
                        type: A.FileTypes.FOLDER,
                        icon: "",
                        is_cloud_doc: !1,
                        is_symlink: !1
                    },
                    de = function() {
                        return n.default.createElement(D.SplitShareButton, {
                            file: ce,
                            user: r,
                            variant: "secondary",
                            triggerType: R.TriggerType.SidebarPrimaryButton,
                            onShowShare: W(r, t),
                            context: {
                                surface: "browse"
                            },
                            shareButtonLabel: V(M.ShareFolder)
                        })
                    },
                    ue = {
                        action: de,
                        isPrimary: !0
                    },
                    pe = {
                        action: le,
                        isPrimary: !1
                    },
                    _e = {
                        action: {
                            label: V(M.NewTeamFolder),
                            iconName: "new-team-folder",
                            performAction: j(r, t),
                            disabled: !1,
                            className: "action-team-folder",
                            key: "new-team-folder"
                        },
                        isPrimary: !1
                    };
                if (r.is_cdm_member && "/" === t.currentFQPath) {
                    O.UEClient.registerBulkCallbackForEducationStep([{
                        moduleName: "trial_admin_setup_team_space",
                        stepName: "team_folder_modal"
                    }, {
                        moduleName: "trial_admin_setup_team_space_v2",
                        stepName: "team_folder_modal"
                    }, {
                        moduleName: "trial_admin_setup_team_space_mobile",
                        stepName: "team_folder_modal"
                    }, {
                        moduleName: "trial_admin_setup_team_space_mobile_v2",
                        stepName: "team_folder_modal"
                    }, {
                        moduleName: "trial_admin_setup_folder_structure",
                        stepName: "team_folder_modal"
                    }, {
                        moduleName: "trial_admin_setup_folder_structure_v2",
                        stepName: "team_folder_modal"
                    }, {
                        moduleName: "trial_admin_setup_team_space_free_order",
                        stepName: "team_folder_modal"
                    }, {
                        moduleName: "trial_admin_setup_team_space_free_order_v2",
                        stepName: "team_folder_modal"
                    }], ne.performAction);
                    var he = function(e) {
                            i.TeamsWebActionsLogger.log(e), window.setTimeout(function() {
                                O.UEClient.sendEvent("SetStructureModal", "Close")
                            }, 2500), v.Modal.close()
                        },
                        fe = function() {
                            return {
                                user: r,
                                teamName: T.Viewer.get_viewer().team_name,
                                onSuccess: function() {
                                    return he("uj_ss_modal_success")
                                },
                                onError: function() {
                                    return he("uj_ss_modal_error")
                                },
                                onCancel: function() {
                                    return he("uj_ss_modal_cancel")
                                }
                            }
                        };
                    O.UEClient.registerBulkCallbackForEducationStep([{
                        moduleName: "trial_admin_shared_workspace",
                        stepName: "set_structure_modal"
                    }, {
                        moduleName: "trial_admin_shared_workspace_v2",
                        stepName: "set_structure_modal"
                    }, {
                        moduleName: "trial_admin_shared_workspace_free_order",
                        stepName: "set_structure_modal"
                    }, {
                        moduleName: "trial_admin_shared_workspace_free_order_v2",
                        stepName: "set_structure_modal"
                    }], function() {
                        d.showOnboardingMoveDialog(fe())
                    }), O.UEClient.registerCallbackForEducationStep("joiner_checklist_shared_workspace_files_decision", "set_structure_modal", function() {
                        d.showOnboardingMoveDialogV2(fe())
                    }), O.UEClient.registerCallbackForEducationStep("joiner_checklist_inform_personal_account", "team_space_tooltip", function() {
                        g.asyncWarmJoinerModalProps(r)
                    }), O.UEClient.registerCallbackForEducationStep("joiner_checklist_inform_personal_account", "joiner_personal_account_success_modal", function() {
                        g.asyncShowJoinerPersonalAccountModal(r)
                    }), oe.push(re), oe.push(k), U && oe.push(Y), oe.push(ie)
                } else P ? (oe.push(re), oe.push(k), U && oe.push(Y), !r.is_cdm_member && w.GoldenGate.hasContentManagerAndSuperAdmin(r.id) && oe.push(_e), oe.push(pe, ie)) : (oe.push(re), K && oe.push(ue), oe.push(k), U && oe.push(Y), oe.push(ie));
                !te || !x || r.is_cdm_member && "/" === t.currentFQPath || oe.push({
                    action: {
                        label: V(M.RequestFiles),
                        iconName: "new-file-request",
                        performAction: L(t),
                        key: "new-file-request"
                    }
                }), h || oe.push({
                    action: {
                        label: V(c ? M.HideDeletedFiles : M.ShowDeletedFiles),
                        iconName: c ? "hide" : "show-deleted-files",
                        performAction: q(r, l, c, !!b.expShowDeletedFilesRedirect, t.currentFQPath),
                        disabled: N,
                        className: "action-deleted-files",
                        key: "toggle-deleted",
                        ariaLabel: V(M.ShowDeletedFiles),
                        ariaPressed: c
                    },
                    isPrimary: !1
                }), !T.Viewer.get_viewer().is_assume_user_session && (w.GoldenGate.hasContentManagerAndSuperAdmin(r.id) && w.GoldenGate.hasNewOwnershipModel(r.id) && t.isInsideTeamFolderTree || !r.is_cdm_member && w.GoldenGate.hasContentManagerAndSuperAdmin(r.id) && t.isCurrentlyInRoot) && oe.push({
                    action: {
                        label: V(M.ManageAsAdmin),
                        iconName: "settings-gear",
                        performAction: j(r, t),
                        key: "manage-as-admin"
                    },
                    isPrimary: !1
                }), I || C || "OFF" !== J && "CONTROL" !== J && void 0 !== J ? oe.push({
                    action: {
                        label: V(t.isCurrentlyInRoot ? M.RewindDropbox : M.RewindFolder),
                        iconName: "revert-folder",
                        disabled: !y,
                        performAction: H(r, t),
                        key: "rewind-folder"
                    },
                    isPrimary: !1
                }) : Q && oe.push({
                    action: {
                        label: V(M.FolderHistory),
                        iconName: "view-folder-history",
                        performAction: H(r, t),
                        key: "folder-history"
                    },
                    isPrimary: !1
                })
            }
        else oe.push({
            action: {
                label: V(M.ReAddSharedFolder),
                iconName: "restore",
                performAction: z(r, t),
                disabled: !x,
                key: "re-add-shared-folder"
            },
            isPrimary: !0
        });
        return oe
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importDefault(n), l = r.__importStar(l), c = r.__importStar(c), h = r.__importStar(h), f = r.__importStar(f), F = r.__importStar(F), P = r.__importDefault(P);
    var M;
    (function(e) {
        e[e.UploadFiles = 1] = "UploadFiles", e[e.UploadFolder = 2] = "UploadFolder", e[e.Upload = 3] = "Upload", e[e.Files = 4] = "Files", e[e.Folder = 5] = "Folder", e[e.NewPaperDoc = 6] = "NewPaperDoc", e[e.NewFolder = 7] = "NewFolder", e[e.RestoreFolder = 8] = "RestoreFolder", e[e.ReAddSharedFolder = 9] = "ReAddSharedFolder", e[e.ShowDeletedFiles = 10] = "ShowDeletedFiles", e[e.HideDeletedFiles = 11] = "HideDeletedFiles", e[e.NewSharedFolder = 12] = "NewSharedFolder", e[e.ShareFolder = 13] = "ShareFolder", e[e.ShareFolderAbbreviated = 14] = "ShareFolderAbbreviated", e[e.ManageAsAdmin = 15] = "ManageAsAdmin", e[e.NewTeamFolder = 16] = "NewTeamFolder", e[e.FolderHistory = 17] = "FolderHistory", e[e.RewindFolder = 18] = "RewindFolder", e[e.RewindDropbox = 19] = "RewindDropbox", e[e.RequestFiles = 20] = "RequestFiles"
    })(M || (M = {}));
    var U = {},
        k = function(e) {
            switch (e) {
                case M.UploadFiles:
                    return C._("Upload files");
                case M.UploadFolder:
                    return C._("Upload folder");
                case M.Upload:
                    return C._("Upload");
                case M.FolderHistory:
                    return C._("Folder history");
                case M.RewindFolder:
                    return C._("Rewind this folder", {
                        project: "folder-history"
                    });
                case M.RewindDropbox:
                    return C._("Rewind Dropbox", {
                        project: "folder-history"
                    });
                case M.Files:
                    return C._("Files");
                case M.Folder:
                    return C._("Folder");
                case M.NewPaperDoc:
                    return C._("New Paper Document");
                case M.NewFolder:
                    return C._("New folder");
                case M.RestoreFolder:
                    return C._("Restore folder");
                case M.ReAddSharedFolder:
                    return C._("Re-add shared folder");
                case M.ShowDeletedFiles:
                    return C._("Show deleted files");
                case M.HideDeletedFiles:
                    return C._("Hide deleted files");
                case M.NewSharedFolder:
                    return C._("New shared folder");
                case M.ShareFolder:
                    return C._("Share folder");
                case M.ShareFolderAbbreviated:
                    return C._("Share");
                case M.ManageAsAdmin:
                    return C._("View in admin console");
                case M.NewTeamFolder:
                    return C._("New team folder");
                case M.RequestFiles:
                    return C._("Request files")
            }
        },
        V = function(e) {
            return e in U || (U[e] = k(e)), U[e]
        },
        B = function(e, t, r, o, n) {
            return function() {
                var i = r.currentNSID,
                    a = r.currentFQPath;
                u.logCreateFolder({
                    uid: e.id,
                    view_type: t,
                    file_nsid: i,
                    file_path: a,
                    file_name: c.filename(a)
                });
                var s = e.is_cdm_member && "/" === a;
                if (o && (s = r.isInsideTeamFolderTree && !!e.is_team), s) {
                    o || y.assert(!!n, "All CDM Users should have an auto team group in their team");
                    var l = function(e) {
                            I.Notify.error(e ? e : C._("There was a problem completing this request.")), p.browseActions.cancelCreateFolder()
                        },
                        d = function(e) {
                            var t = e.user,
                                r = e.folderName,
                                o = e.fqPath;
                            p.browseActions.createFolderComplete({
                                user: t,
                                folderName: r,
                                changesets: null
                            }), p.browseActions.selectFilesByFqPath({
                                fqPathsToSelect: [o]
                            }), p.browseActions.handleNewFolderRedirectOnSuccess(o)
                        };
                    w.asyncShowAppropriateNewFolderModalForCdmUser({
                        user: e,
                        context: r,
                        autoTeamGroupId: n,
                        showFileSystemWarningsModal: void 0,
                        onPending: p.browseActions.createFolderPending,
                        onComplete: d,
                        onCancel: l,
                        autoTeamGroupDefaultAccessLevel: E.ACCESS_LEVEL.WRITER,
                        setPath: S.browseNavActions.setPath,
                        setUrl: S.browseNavActions.setUrl
                    })
                } else {
                    var _ = function(t) {
                        var o = t.folderName,
                            n = t.isConfidential;
                        p.browseActions.createFolderInNewFolderModal({
                            folderName: o,
                            isConfidential: n,
                            user: e,
                            context: r,
                            redirectOnSuccess: p.browseActions.handleNewFolderRedirectOnSuccess
                        })
                    };
                    w.asyncShowCdmNewFolderModal(_, e, r, !1, !1, !0)
                }
            }
        },
        H = function(e, t) {
            return function() {
                P.default.update_query_param(_.BrowseQueryArg.rewind, "true"), m.getStoreForBrowse().dispatch(h.showTimeline())
            }
        },
        W = function(e, t) {
            return function() {
                t.isCurrentlyInRoot ? w.asyncShowShareAFolderWizardModal(e) : w.asyncShowShareModal(e, t, {
                    origin: b.SHARE_ACTION_ORIGIN_TYPE.BROWSE_GLOBAL_ACTIONS
                }, S.browseNavActions.setPath, S.browseNavActions.setUrl)
            }
        },
        q = function(e, t, r, o, n) {
            return function() {
                if (o && !r) {
                    var i = c.paths_are_equal(n, "/") ? {} : {
                        fq_path: n
                    };
                    l.redirect(new N.URI({
                        scheme: "https",
                        authority: "www.dropbox.com",
                        path: "/deleted_files",
                        query: i
                    }))
                } else u.logToggleDeletedFiles({
                    uid: e.id,
                    show_deleted_files: !r,
                    view_type: t
                }), p.browseActions.setShouldShowDeletedFiles({
                    shouldShowDeletedFiles: !r
                })
            }
        },
        G = function(e, t, r) {
            return function() {
                var o = r.currentNSID,
                    n = r.currentFQPath;
                u.logRestore({
                    uid: e.id,
                    view_type: t,
                    file_nsid: o,
                    file_path: n,
                    file_name: c.filename(n),
                    num_files_selected: 0,
                    num_folders_selected: 1
                }), p.browseActions.doRestoreFilesWithUnifiedTrashModal({})
            }
        },
        z = function(e, t) {
            return function() {
                var r = t.currentFQPath.toLowerCase(),
                    o = t.inactiveNSIDByFQPath[r],
                    n = t.isInsideDeletedNestedSharedFolder;
                o && w.asyncMountSharedFolder(o, e.role, b.SHARE_ACTION_ORIGIN_TYPE.BROWSE_GLOBAL_ACTIONS, !1, null, n)
            }
        },
        j = function(e, t) {
            return function() {
                w.asyncGoToContentManagerForPath({
                    isLimitedTeam: T.Viewer.get_viewer().team_is_limited,
                    containingFolder: t.currentFQPath,
                    isCDM: e.is_cdm_member
                })
            }
        };
    t.getGlobalActions = x
}), define("modules/clean/react/browse/nav_actions", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/browse/constants", "modules/clean/react/browse/data/action_creators", "modules/clean/react/browse/data/store", "modules/clean/react/file_uploader/constants", "modules/clean/react/files_view/types"], function(e, t, r, o, n, i, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importStar(i);
    var c = (function() {
        function e() {
            this.setPath = function(e) {
                var t = e.path;
                a.getStoreForBrowse().dispatch(i.setUrl({
                    path: t
                }))
            }
        }
        return e.prototype.setUrl = function(e) {
            var t = e.path,
                r = e.qargs;
            a.getStoreForBrowse().dispatch(i.setUrl({
                path: t,
                qargs: r
            }))
        }, e.prototype.loadPath = function(e) {
            var t = e.path,
                r = e.files,
                c = e.paginatedTotalNumFiles,
                d = e.context;
            a.getStoreForBrowse().dispatch(i.setPathData({
                path: t,
                files: r,
                paginatedTotalNumFiles: c,
                context: d
            })), a.getStoreForBrowse().dispatch(i.setFetchFolderSizeState({
                files: r,
                state: l.FetchFolderSizeState.COMPLETE
            })), a.getStoreForBrowse().dispatch(i.setLoadingState({
                loadingState: l.LoadingState.LOADED,
                path: t
            })), o.Dispatcher.dispatch({
                type: s.UploaderActionType.SET_PATH,
                data: {
                    path: t,
                    hasPermissionToUploadToFolder: d.isCurrentPathWriteable()
                }
            }), o.Dispatcher.dispatch({
                type: n.SharedWithActionType.BROWSE_FILES_LOADED,
                data: {
                    parentPath: t,
                    files: r
                }
            })
        }, e
    })();
    t.BrowseNavActions = c, t.browseNavActions = new c
}), define("modules/clean/react/browse/professional_collection_actions", ["require", "exports", "tslib", "external/lodash", "modules/core/exception"], function(e, t, r, o, n) {
    "use strict";

    function i(t, i, a) {
        var s = o.keyBy(a, "file_id");
        if (!o.every(t, function(e) {
                return !!s[e]
            })) return void n.reportException({
            err: new Error("Could not find specified files to add to Showcase")
        });
        var l = t.map(function(e) {
            var t = s[e];
            return {
                ns_id: t.ns_id,
                ns_path: t.ns_path,
                fq_path: t.fq_path
            }
        });
        new Promise(function(t, r) {
            e(["modules/clean/react/professional_collection/add_to_collection_modal_controller"], t, r)
        }).then(r.__importStar).then(function(e) {
            (0, e.showAddToCollectionModal)(l, i)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), t.showPrepopulatedAddToCollectionModal = i
}), define("modules/clean/react/browse/selection_preview_pane", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), t.SelectionPreviewPane = n.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/browse/selection_preview_component"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.MemoizedSelectionPreviewComponent
            })
        },
        loading: function() {
            return o.default.createElement("div", {
                className: "selection-preview-pane selection-preview-pane__empty"
            })
        }
    })
}), define("modules/clean/react/browse/sidebar_view", ["require", "exports", "tslib", "external/react-redux", "react", "modules/clean/react/app_actions_view", "modules/clean/react/browse/data/selectors", "modules/clean/react/browse/data/store", "modules/clean/react/browse/global_actions", "modules/clean/react/browse/models", "modules/clean/react/browse/selection_preview_pane", "modules/clean/react/browse/util", "modules/clean/react/file_uploader/file_uploader", "modules/clean/react/files_view/types", "modules/clean/react/folder_overview/sidebar_connected", "modules/clean/react/folder_overview/utils", "modules/clean/search/types", "modules/clean/web_timing_logger", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g) {
    "use strict";

    function v(e) {
        return "function" == typeof e ? e : {
            displayName: e.label,
            popoverMenuName: e.popoverLabel,
            iconName: e.iconName,
            handleClick: e.performAction,
            disabled: e.disabled,
            className: e.className,
            badge: e.badge,
            ariaLabel: e.ariaLabel,
            ariaPressed: e.ariaPressed,
            key: e.key
        }
    }

    function E(e) {
        if ("function" == typeof e) return e;
        var t = void 0;
        return e.subItems && (t = e.subItems.map(v)), {
            displayName: e.label,
            iconName: e.iconName,
            handleClick: e.performAction,
            disabled: e.disabled,
            className: e.className,
            subItems: t,
            ariaLabel: e.ariaLabel,
            ariaPressed: e.ariaPressed,
            key: e.key
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), a = r.__importStar(a);
    var w = (function(t) {
        function o(e) {
            var r = t.call(this, e) || this;
            return r.renderSingleSelectionAudienceBox = function(e) {
                var t = e.selectedFiles,
                    o = e.context,
                    i = e.user,
                    a = r.sharedWithModule;
                if (!a) return null;
                var s = t.first(),
                    l = a.SharedWithController;
                return n.default.createElement(l, {
                    file: s,
                    browseContext: o,
                    user: i,
                    isInAudienceBox: !0
                })
            }, r.state = {
                appActionsProps: r.getCurrentAppActionsProps(r.props)
            }, r
        }
        return r.__extends(o, t), o.prototype.componentDidMount = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, S.waitForTTI()];
                        case 1:
                            return o.sent(), t = this, [4, new Promise(function(t, r) {
                                e(["modules/clean/react/browse/shared_with"], t, r)
                            }).then(r.__importStar)];
                        case 2:
                            return t.sharedWithModule = o.sent(), this.setState({
                                appActionsProps: this.getCurrentAppActionsProps(this.props)
                            }), [2]
                    }
                })
            })
        }, o.prototype.componentWillReceiveProps = function(e) {
            e.selectedFiles === this.props.selectedFiles && e.isRewindButtonEnabled === this.props.isRewindButtonEnabled && e.context === this.props.context && e.user === this.props.user && e.shouldShowDeletedFiles === this.props.shouldShowDeletedFiles && e.isNoComment === this.props.isNoComment && e.arePostTTIModulesLoaded === this.props.arePostTTIModulesLoaded && e.viewType === this.props.viewType && e.starredState === this.props.starredState && e.canDisplayFolderSizes === this.props.canDisplayFolderSizes && e.uploadAjaxInterceptor === this.props.uploadAjaxInterceptor && e.responsive.isMatchedMedium === this.props.responsive.isMatchedMedium && e.responsive.isMatchedLarge === this.props.responsive.isMatchedLarge && e.uploaderExperiments === this.props.uploaderExperiments && e.uploaderPostTTIExperiments === this.props.uploaderPostTTIExperiments && e.browseExperiments === this.props.browseExperiments && e.browsePostTTIExperiments === this.props.browsePostTTIExperiments && e.optedInToRewind === this.props.optedInToRewind && e.pinnedItems === this.props.pinnedItems || this.setState({
                appActionsProps: this.getCurrentAppActionsProps(e)
            })
        }, o.prototype.getCurrentAppActionsProps = function(e) {
            var t, r = e.selectedFiles,
                o = e.autoTeamGroupId,
                i = e.context,
                a = e.canDisplayFolderSizes,
                s = e.onGetFileActionsForFiles,
                c = e.user,
                d = e.isRewindButtonEnabled,
                p = e.viewType,
                _ = e.shouldShowDeletedFiles,
                h = e.onUploadButtonClick,
                f = e.isNoComment,
                S = e.browsePostTTIExperiments,
                w = e.browseExperiments,
                b = e.handleComponentTTI,
                T = e.responsive,
                F = u.getSelectedFilesText(r, i),
                y = r.count(),
                C = this.props.browseExperiments.expBrowseDetailsPaneVariants,
                I = n.default.createElement("div", null);
            if (y > 0) {
                t = s(r, a, T, !0, !0, S.expRewindUpsell).map(function(e, t) {
                    var r = "function" == typeof e && (C === m.DetailsPaneVariants.FOLDER_OVERVIEW || C === m.DetailsPaneVariants.CONTENT_SCROLL || C === m.DetailsPaneVariants.CREATE_FILE_LABEL);
                    return {
                        action: e,
                        isPrimary: 0 === t || r
                    }
                }), 1 === y && (I = this.renderSingleSelectionAudienceBox(e))
            } else {
                t = l.getGlobalActions({
                    context: i,
                    user: c,
                    isRewindButtonEnabled: d,
                    viewType: p,
                    showDeletedFiles: _,
                    onUpload: h,
                    isNoComment: f,
                    autoTeamGroupId: o,
                    browsePostTTIExperiments: S,
                    browseExperiments: w,
                    optedInToRewind: this.props.optedInToRewind,
                    expFolderHistoryRollbacks: this.props.browseExperiments.expFolderHistoryRollbacks || !1
                });
                var O = this.sharedWithModule;
                if (O) {
                    var P = O.SharedWithController;
                    I = n.default.createElement(P, {
                        browseContext: i,
                        user: c,
                        isInAudienceBox: !0
                    })
                }
            }
            for (var R = [], D = [], A = 0, N = t; A < N.length; A++) {
                var L = N[A];
                L.isPrimary ? R.push(E(L.action)) : D.push(v(L.action))
            }
            return e.isNoComment && (I = n.default.createElement("div", null)), {
                headerText: F,
                popoverTriggerLabel: g._("Actions"),
                primaryMenuItems: R,
                primarySubnode: I,
                secondaryMenuItems: D,
                handleComponentTTI: b
            }
        }, o.prototype.render = function() {
            var e = this.props,
                t = e.responsive,
                o = e.browseExperiments,
                l = e.isFileViewerShown,
                u = e.selectedFiles,
                S = o.expBrowseDetailsPaneVariants,
                g = o.expPrimaryButtonColor,
                v = !(!t || !t.isResponsive || t.isMatchedLarge),
                E = s.getStoreForBrowse(),
                w = !v && a.isDetailsPaneEnabled(E.getState()),
                b = !v && a.shouldShowSidebarFolderOverview(E.getState()),
                T = u && 0 !== u.size && (S === m.DetailsPaneVariants.FOLDER_OVERVIEW || S === m.DetailsPaneVariants.CONTENT_SCROLL || S === m.DetailsPaneVariants.CREATE_FILE_LABEL);
            return n.default.createElement("div", {
                id: "brws-sidebar-view",
                "aria-live": "polite"
            }, null != this.props.context.currentFQPath && !l && n.default.createElement(p.FileUploaderController, {
                key: "file-uploader-controller",
                ref: "fileUploader",
                loadOnRender: this.props.arePostTTIModulesLoaded,
                needToSetStoreValues: !1,
                ajaxInterceptor: this.props.uploadAjaxInterceptor,
                uploaderExperiments: this.props.uploaderExperiments,
                uploaderPostTTIExperiments: this.props.uploaderPostTTIExperiments,
                browseViewType: this.props.viewType
            }), w && n.default.createElement(d.SelectionPreviewPane, {
                selectedFiles: u
            }), n.default.createElement(i.AppActionsView, r.__assign({
                user: this.props.user
            }, this.state.appActionsProps, {
                responsive: this.props.responsive,
                hideHeaderText: !!w,
                shouldCollapseActions: T,
                onContextMenuClick: this.props.onContextMenuClick,
                shouldEnableButtonExperiment: g === m.ButtonColorVariants.SAPPHIRE
            })), b && n.default.createElement(h.SidebarFolderOverview, {
                key: u.first().fq_path,
                path: u.first().fq_path,
                componentNamespace: "SIDEBAR",
                isReadOnly: !f.canEditOverviewForFile(u.first()),
                browseLoadingState: _.LoadingState.LOADED,
                onlyRenderExistingFolderOverviews: !("V2" === this.props.browseExperiments.expFolderOverview || "V3" === this.props.browseExperiments.expFolderOverview),
                canShareFolder: !c.File.isNoAccessSharedFolder(u.first())
            }))
        }, o
    })(n.default.PureComponent);
    t.UnconnectedBrowseSidebarView = w;
    var b = function(e) {
        return {
            isFileViewerShown: a.isFileViewerShown(e)
        }
    };
    t.BrowseSidebarView = o.connect(b)(w)
}), define("modules/clean/react/browse/title", ["require", "exports", "tslib", "external/react-redux", "react", "modules/clean/browse_uri_interface", "modules/clean/filepath", "modules/clean/react/browse/data/action_creators", "modules/clean/react/browse/data/selectors", "modules/clean/react/file_uploader/file_uploader", "modules/clean/react/path_breadcrumbs", "modules/clean/viewer", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), a = r.__importStar(a), s = r.__importStar(s), l = r.__importStar(l);
    var _ = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleGetUrlForPath = function(e) {
                return i.browse_uri_for_fq_path(t.props.user, e).toString()
            }, t
        }
        return r.__extends(t, e), t.setPageTitle = function(e) {
            e && (document.title = p._("%(folder_name)s - Dropbox").format({
                folder_name: a.filename(e, p._("Files"))
            }))
        }, t.prototype.componentDidMount = function() {
            t.setPageTitle(this.props.path)
        }, t.prototype.componentWillReceiveProps = function(e) {
            e.path !== this.props.path && t.setPageTitle(e.path)
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.path,
                r = e.user,
                o = e.isDraggingInternalFiles,
                i = e.isDraggingExternalFiles,
                s = e.isUploadModalOpen,
                l = e.setUrl,
                _ = a.filename("", u.Viewer.get_root_name(r)),
                h = "work" === r.role ? p._("Work") : p._("Personal");
            return n.default.createElement(d.PathBreadcrumbs, {
                path: t,
                isDraggingInternalFiles: o,
                setFileUploaderPath: c.FileUploaderController.setPathAndPermissions,
                getUrlForPath: this.handleGetUrlForPath,
                firstBreadcrumbName: _,
                firstBreadcrumbAlt: h,
                shouldHighlightDropTargets: o || i && !s,
                disableDragging: i,
                setUrl: l
            })
        }, t
    })(n.default.PureComponent);
    t.BrowseTitleComponent = _;
    var h = function(e) {
            return {
                path: l.path(e),
                user: l.user(e)
            }
        },
        f = {
            setUrl: s.setUrl
        };
    t.BrowseTitle = o.connect(h, f)(_)
}), define("modules/clean/react/browse/web_team_sharing_experiment", ["require", "exports", "tslib", "react", "modules/clean/react/file_uploader/constants", "modules/clean/react/async_fileops_modals", "modules/clean/analytics", "external/immutable", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, r, o, n, i, a, s, l, c) {
    "use strict";
    var d = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), i = r.__importStar(i), s = r.__importStar(s);
    var u = l.Loadable({
            loader: function() {
                return r.__awaiter(d, void 0, Promise, function() {
                    var t;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, c.waitForTTI()];
                            case 1:
                                return o.sent(), [4, new Promise(function(t, r) {
                                    e(["modules/clean/react/web_team_sharing_modal"], t, r)
                                }).then(r.__importStar)];
                            case 2:
                                return t = o.sent().WebTeamSharingModal, [2, t]
                        }
                    })
                })
            }
        }),
        p = (function(t) {
            function l(e) {
                var r = t.call(this, e) || this;
                return r.removeUploadListener = function() {
                    window.removeEventListener(n.ALL_UPLOADS_COMPLETE_EVENT, r.handleUploadsComplete)
                }, r.closeTeamSharingModal = function() {
                    return r.setState({
                        isWebTeamSharingModalOpen: !1
                    })
                }, r.openFileMoveDialog = function() {
                    r.closeTeamSharingModal(), a.TeamsWebActionsLogger.log("post_m1_sharing_modal_clicked"), i.showMove({
                        files: r.props.selectedFiles.toArray(),
                        path: r.props.context.currentFQPath,
                        user: r.props.user
                    })
                }, r.state = {
                    isWebTeamSharingModalOpen: !1,
                    uploadedFiles: [],
                    expWebSharingActive: !1
                }, r
            }
            return r.__extends(l, t), l.prototype.componentWillReceiveProps = function(t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var o, i, a, s = this;
                    return r.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return !t.browsePostTTIExperiments.expBizAddFilesTeamFolderRwls || this.handleUploadsComplete ? [3, 2] : [4, new Promise(function(t, r) {
                                    e(["modules/clean/growth/experiments/web_sharing_helper"], t, r)
                                }).then(r.__importStar)];
                            case 1:
                                o = l.sent(), i = o.logExposure, a = o.shouldShowModal, this.handleUploadsComplete = function(e) {
                                    if (a(s.props.user, s.props.path)) {
                                        i();
                                        var t = e.detail.files;
                                        s.setState({
                                            isWebTeamSharingModalOpen: !0,
                                            uploadedFiles: t,
                                            expWebSharingActive: !0
                                        })
                                    }
                                }, window.addEventListener(n.ALL_UPLOADS_COMPLETE_EVENT, this.handleUploadsComplete), l.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, l.prototype.componentWillUnmount = function() {
                this.handleUploadsComplete && this.removeUploadListener()
            }, l.prototype.render = function() {
                return this.state.expWebSharingActive ? o.default.createElement(u, {
                    context: this.props.context,
                    files: this.state.uploadedFiles,
                    handleModalClose: this.closeTeamSharingModal,
                    handleAction: this.openFileMoveDialog,
                    open: this.state.isWebTeamSharingModalOpen,
                    user: this.props.user
                }) : null
            }, l.defaultProps = {
                selectedFiles: s.OrderedMap()
            }, l
        })(o.default.PureComponent);
    t.WebTeamSharingModalExperiment = p
}), define("modules/clean/react/comments2/components/comments_translations", ["require", "exports", "modules/core/i18n", "modules/clean/datetime"], function(e, t, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.commentsMasterLocalization = {
        searchingMsg: r._("Searching contacts…"),
        noUsersFoundMsg: r._("No Users Found"),
        inviteMsg: function(e) {
            return r._("Invite %(user_name)s?").format({
                user_name: e
            })
        },
        mentionMsg: r._("@mention someone to share this file", {
            comment: '\n    This is a prompt indicating to users that if they type the @ character,\n    this will bring up a UI allowing them to select from their contacts or\n    type an email address. That\'s what the "@" sign in front of the word "mention" means.\n    Translate this as best you can\n  '
        }),
        mentionButtonLabel: r._("@mention someone", {
            comment: '\n    This is a label on a button that will insert an @ symbol into a comment,\n    this will bring up a UI allowing them to select from their contacts or\n    type an email address. That\'s what the "@" sign in front of the word "mention" means.\n    Translate this as best you can\n  '
        }),
        editPostLabel: r._("Save"),
        editCancelLabel: r._("Cancel"),
        commentDeletedMsg: r._("This comment was deleted."),
        commentEditLabel: r._("Edit"),
        commentDeleteLabel: r._("Delete"),
        leaveACommentLabel: r._("Leave a comment"),
        markAsReadLabel: r._("Mark as read"),
        markAsUnreadLabel: r._("Mark as unread"),
        markedAsResolvedLabel: r._("Marked as resolved"),
        markedAsResolvedByUserLabel: function(e) {
            return r._("Marked as resolved by %(name)s").format({
                name: e
            })
        },
        olderVersionLabel: r._("On older version"),
        threadRestoreLabel: r._("Restore"),
        threadResolveLabel: r._("Resolve"),
        threadPostLabel: r._("Post"),
        threadCancelLabel: r._("Cancel"),
        threadEditorPlaceholder: r._("Reply"),
        threadCollapsedCommentsText: function(e) {
            return r.ungettext("1 comment", "%(count)d comments", e).format({
                count: e
            })
        },
        streamEditorPlaceholder: r._("Comment"),
        streamPostLabel: r._("Post"),
        streamCancelLabel: r._("Cancel"),
        replyHintLabel: r._("Reply…"),
        viewHistoryLabel: r._("View version history"),
        pageLabel: function(e) {
            return r._("Page %(page)d").format({
                page: e
            })
        },
        unreadComments: function(e) {
            return r._("%(count)s unread").format({
                count: e
            })
        },
        ago: function(e) {
            return o.ago(e, !0, !0)
        },
        getActingTime: function(e) {
            return o.getActingTime(e.getTime(), !1, !1, 30, !1, !0, !0)
        },
        niceDateWithMonthName: function(e, t) {
            return o.nice_date_with_month_name(e, t, !1)
        },
        clickAndDragToComment: r._("Select an area to comment on"),
        a11yCommentThreadLabel: r._("Comment thread"),
        a11yUnreadCommentThreadLabel: r._("Unread comment thread"),
        a11yInsertSticker: function(e) {
            return r._("Insert %(description)s").format({
                description: e
            })
        },
        a11ySelectStickerSet: function(e) {
            return r._("Select %(description)s").format({
                description: e
            })
        },
        a11yNextStickerSet: r._("Next sticker set"),
        a11yPrevStickerSet: r._("Previous sticker set"),
        a11yStickerAltText: function(e) {
            return r._("Sticker: %(description)s", {
                comment: 'Sticker in a comment. Example: "Sticker: Wizard jumping with joy"'
            }).format({
                description: e
            })
        },
        a11yStickerMenu: r._("Sticker menu")
    }
}), define("modules/clean/react/education/education_module_event_bridge", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e() {
            this.requestSectionHandler = null, this.requestSharingCalloutHandler = null
        }
        return e.prototype.registerRequestSectionHandler = function(e) {
            this.requestSectionHandler = e
        }, e.prototype.requestSection = function(e) {
            this.requestSectionHandler && this.requestSectionHandler(e)
        }, e.prototype.registerRequestSharingCalloutHandler = function(e) {
            this.requestSharingCalloutHandler = e
        }, e.prototype.requestSharingCallout = function() {
            this.requestSharingCalloutHandler && this.requestSharingCalloutHandler()
        }, e
    })();
    t.educationEventBridge = new r
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/education/education_module_experiment", ["require", "exports", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger", "modules/clean/react/css"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r.Loadable({
        loader: function() {
            return o.waitForTTI().then(function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/education/education_module_experiment_sync"], t, r)
                }).then(__importStar)
            }).then(function(e) {
                return e.UnstyledEducationModuleExperiment
            })
        }
    });
    t.CXEducationModuleExperiment = n.requireCssWithComponent(i, ["/static/js/premium-growth/index.web-vflb9JTu1.css", "/static/css/growth/experiments/education_module_experiment-vflFlYQXJ.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css"])
}), define("modules/clean/react/file_uploader/action_logger", ["require", "exports", "tslib", "modules/clean/filepath", "modules/clean/react/file_uploader/constants", "modules/clean/web_upload_action_logger", "modules/clean/web_user_action_logger", "modules/clean/web_upload_action_events", "modules/clean/web_user_action_events", "modules/core/browser"], function(e, t, r, o, n, i, a, s, l, c) {
    "use strict";

    function d(e) {
        return e && !!e.uploadId
    }

    function u(e) {
        return e && !!e.batchId
    }

    function p(e) {
        return e === l.WebUserActionLogEvent.UPLOAD_BUTTON_CLICK || e === l.WebUserActionLogEvent.ADD_MORE_FILES_CLICK || e === l.WebUserActionLogEvent.VIEW_DETAILS_CLICK || e === l.WebUserActionLogEvent.CLOSE_MODAL_CLICK || e === l.WebUserActionLogEvent.UPLOAD_CLICK || e === l.WebUserActionLogEvent.UPLOAD_FILES_CLICK || e === l.WebUserActionLogEvent.UPLOAD_FOLDER_CLICK || e === l.WebUserActionLogEvent.CANCEL_UPLOAD_CLICK
    }

    function _(e, t, l, _, h, f, m, S) {
        var g = {
            num_files: f,
            num_dirs: m,
            chooser_type: _,
            upload_method: h
        };
        if (d(l)) {
            var v = l,
                E = t === s.WebUploadActionEvent.UPLOAD_FAILURE && v.errorType === n.UploadErrorType.GENERIC && S ? S : v.errorType;
            g = r.__assign({}, g, {
                upload_id: v.uploadId,
                file_size: v.size,
                file_extension: o.file_extension(v.name),
                failure_reason: E,
                batch_id: v.batchId,
                upload_destination: v.dest,
                current_path: c.get_pathname(),
                file_name: v.name
            })
        } else if (u(l)) {
            var v = l;
            g = r.__assign({}, g, {
                file_size: v.size,
                file_extension: o.file_extension(v.name),
                batch_id: v.batchId
            })
        }
        p(t) ? a.WebUserActionLog.log(e, t, g) : (t = t, g.client_timestamp = Math.round(Date.now() / 1e3), i.WebUploadActionLog.log(e, t, g))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), c = r.__importStar(c), t.logUploadAction = _
}), define("modules/clean/react/file_uploader/constants", ["require", "exports", "tslib", "external/immutable"], function(e, t, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o);
    (function(e) {
        e.ALL_UPLOADS_COMPLETE = "ALL_UPLOADS_COMPLETE", e.SET_PATH = "UPLOADER_SET_PATH", e.SET_FOLDER_NS_ID = "UPLOADER_SET_FOLDER_NS_ID", e.SET_USER = "UPLOADER_SET_USER", e.SET_NUM_DRAGGING_FILES = "SET_NUM_DRAGGING_FILES", e.QUEUE_UPLOADS = "QUEUE_UPLOADS", e.START_UPLOAD = "START_UPLOAD", e.COMPLETE_UPLOAD = "COMPLETE_UPLOAD", e.CANCEL_UPLOADS = "CANCEL_UPLOADS", e.SET_CURRENT_UPLOAD_PROGRESS = "SET_CURRENT_UPLOAD_PROGRESS", e.UPLOAD_ERROR = "UPLOAD_ERROR", e.SET_IS_UPLOAD_MODAL_OPEN = "SET_IS_UPLOAD_MODAL_OPEN", e.SET_INLINE_STATUS_SHOULD_BE_DISMISSED = "SET_INLINE_STATUS_SHOULD_BE_DISMISSED", e.ADD_NEW_FAILED_FILE = "ADD_NEW_FAILED_FILE", e.CONFIRM_FSW = "CONFIRM_FSW", e.ADD_FILES_TO_PLU = "ADD_FILES_TO_PLU", e.ADD_DIRECTORIES_TO_PLU = "ADD_DIRECTORIES_TO_PLU", e.REMOVE_FILES = "REMOVE_FILES", e.SET_HAS_OVERQUOTA_ERROR = "SET_HAS_OVERQUOTA_ERROR"
    })(t.UploaderActionType || (t.UploaderActionType = {}));
    var n;
    (function(e) {
        e.PENDING = "PENDING", e.UPLOADING = "UPLOADING", e.COMPLETE = "COMPLETE", e.CANCELLED = "CANCELLED", e.FAILED = "FAILED"
    })(n = t.FileStatusType || (t.FileStatusType = {}));
    var i;
    (function(e) {
        e.FILE_SIZE_ERROR = "FILE_SIZE_ERROR", e.HTTP_ERROR = "HTTP_ERROR", e.CONNECTION_ERROR = "CONNECTION_ERROR", e.OVER_QUOTA_ERROR = "OVER_QUOTA_ERROR", e.LOCKED_TEAM_ERROR = "LOCKED_TEAM_ERROR", e.IGNORED = "IGNORED", e.INVALID_EXTENSION = "INVALID_EXTENSION", e.EMPTY_OR_FOLDER = "EMPTY_OR_FOLDER", e.FOLDER_SAFARI = "FOLDER_SAFARI", e.PACKAGE_FILE = "PACKAGE_FILE", e.GENERIC = "GENERIC", e.BLOCKS_MISSING_ERROR = "BLOCKS_MISSING_ERROR", e.COMMIT_HTTP_ERROR = "COMMIT_HTTP_ERROR", e.UPLOAD_BLOCK_ERROR = "UPLOAD_BLOCK_ERROR", e.CHUNKS_NOT_ENABLED_ERROR = "CHUNKS_NOT_ENABLED_ERROR", e.SERVER_RESPONSE_ERROR = "SERVER_RESPONSE_ERROR", e.SERVER_TOKEN_EMPTY_ERROR = "SERVER_TOKEN_EMPTY_ERROR", e.SERVER_TOKENS_MISSING_ERROR = "SERVER_TOKENS_MISSING_ERROR", e.SERVER_HASH_RESPONSE_ERROR = "SERVER_HASH_RESPONSE_ERROR", e.BLOCK_RUNTIME_ID_MISSING_ERROR = "BLOCK_RUNTIME_ID_MISSING", e.CLIENT_HASH_EMPTY_ERROR = "CLIENT_HASH_EMPTY_ERROR", e.SERVER_HASH_EMPTY_ERROR = "SERVER_HASH_EMPTY_ERROR", e.HASHES_NOT_EQUAL_ERROR = "HASHES_NOT_EQUAL_ERROR", e.BLOCK_INDEX_ERROR = "BLOCK_INDEX_ERROR", e.BLOCK_EMPTY_ERROR = "BLOCK_EMPTY_ERROR",
            e.BLOB_EMPTY_ERROR = "BLOB_EMPTY_ERROR", e.BLOB_MISSING_ERROR = "BLOB_MISSING_ERROR", e.CLIENT_HASH_DIGEST_ERROR = "CLIENT_HASH_DIGEST_ERROR", e.FILE_READER_NULL_RESULT_ERROR = "FILE_READER_NULL_RESULT_ERROR", e.COMMIT_READINESS_ERROR = "COMMIT_READINESS_ERROR", e.UPLOAD_PRECHECK_ERROR = "UPLOAD_PRECHECK_ERROR", e.UPLOAD_PRECHECK_INVALID_CHAR_ERROR = "UPLOAD_PRECHECK_INVALID_CHAR_ERROR"
    })(i = t.UploadErrorType || (t.UploadErrorType = {}));
    (function(e) {
        e.NONE = "NONE", e.BASIC_OVER_QUOTA = "BASIC_OVER_QUOTA", e.BASIC_NEAR_QUOTA = "BASIC_NEAR_QUOTA", e.LIMITED_TEAM_USER_OVER_QUOTA = "LIMITED_TEAM_USER_OVER_QUOTA", e.LIMITED_TEAM_TSD_OVER_QUOTA = "LIMITED_TEAM_TSD_OVER_QUOTA", e.LOCKED_TEAM_USER_OVER_QUOTA = "LOCKED_TEAM_USER_OVER_QUOTA"
    })(t.OverQuotaStatusType || (t.OverQuotaStatusType = {}));
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t
    })(o.Record({
        uploadId: void 0,
        dest: "",
        ns_id: null,
        ns_path: null,
        userId: null,
        name: "",
        size: 0,
        percentUploaded: 0,
        status: n.PENDING,
        errorType: i.GENERIC,
        errorMessage: "",
        batchId: void 0,
        chooserType: void 0
    }, "FileUpload"));
    t.FileUpload = a, t.UPLOAD_BEGIN_EVENT = "dbxUploadBegin", t.UPLOAD_CANCEL_EVENT = "dbxUploadCancel", t.UPLOAD_COMPLETE_EVENT = "dbxUploadComplete", t.ALL_UPLOADS_COMPLETE_EVENT = "dbxAllUploadsComplete", t.UPLOAD_ERROR_EVENT = "dbxUploadError";
    (function(e) {
        e[e["4mb"] = 0] = "4mb", e[e["8mb"] = 1] = "8mb"
    })(t.ValidChunkSizeStrings || (t.ValidChunkSizeStrings = {}))
}), define("modules/clean/react/file_uploader/store", ["require", "exports", "tslib", "external/immutable", "modules/clean/flux/base_store", "modules/clean/react/file_uploader/constants", "modules/clean/react/file_uploader/utils", "modules/core/exception"], function(e, t, r, o, n, i, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o);
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype._init = function() {
            this._path = "/", this._hasPermissionToUploadToFolder = !0, this._folderNsId = null, this._user = null, this._fileList = o.OrderedMap(), this._currentUploadId = null, this._numDraggingFiles = 0, this._isInternalTransfer = !1, this._isUploadModalOpen = !1, this._inlineStatusShouldBeDismissed = !1, this._numSecondsLeft = 0, this._confirmedFSWs = [], this._confirmedFSWBatchIds = [], this._hasOverquotaError = !1, this._allUploadsComplete = !1
        }, t.prototype.fileList = function() {
            return this._fileList
        }, t.prototype.currentUpload = function() {
            var e = this._currentUploadId;
            if (!e) return null;
            var t = this._fileList.get(e);
            return t ? t : null
        }, t.prototype.uploadById = function(e) {
            var t;
            return e && (t = this._fileList.get(e)), t || void 0
        }, t.prototype.numSecondsLeft = function() {
            return this._numSecondsLeft
        }, t.prototype.isUploadCancelled = function(e) {
            var t = this._fileList.get(e);
            return !!t && t.status === i.FileStatusType.CANCELLED
        }, t.prototype.inlineStatusShouldBeDismissed = function() {
            return this._inlineStatusShouldBeDismissed
        }, t.prototype.path = function() {
            return this._path
        }, t.prototype.folderNsId = function() {
            return this._folderNsId
        }, t.prototype.hasPermissionToUploadToFolder = function() {
            return this._hasPermissionToUploadToFolder
        }, t.prototype.user = function() {
            return this._user
        }, t.prototype.nextUpload = function() {
            return this._fileList.find(function(e) {
                return e.status === i.FileStatusType.PENDING
            })
        }, t.prototype.numDraggingFiles = function() {
            return this._numDraggingFiles
        }, t.prototype.isInternalTransfer = function() {
            return this._isInternalTransfer
        }, t.prototype.isUploadModalOpen = function() {
            return this._isUploadModalOpen
        }, t.prototype.confirmedFSWs = function() {
            return this._confirmedFSWs
        }, t.prototype.confirmedFSWBatchIds = function() {
            return this._confirmedFSWBatchIds
        }, t.prototype.hasOverquotaError = function() {
            return this._hasOverquotaError
        }, t.prototype.allUploadsComplete = function() {
            return this._allUploadsComplete
        }, t.prototype.setUser = function(e) {
            var t = e.user;
            this._user = t, this.emit_change()
        }, t.prototype.setPath = function(e) {
            var t = e.path,
                r = e.hasPermissionToUploadToFolder,
                o = void 0 === r || r;
            this._path = t, this._hasPermissionToUploadToFolder = o, this._confirmedFSWs = [], this.emit_change()
        }, t.prototype.setFolderNsId = function(e) {
            var t = e.folderNsId;
            this._folderNsId = t
        }, t.prototype.setHasOverquotaError = function(e) {
            var t = e.hasOverquotaError;
            this._hasOverquotaError = t, this.emit_change()
        }, t.prototype.queueUploads = function(e) {
            for (var t = e.files, r = {}, o = 0, n = t; o < n.length; o++) {
                var i = n[o];
                r[i.uploadId] = i
            }
            this._fileList = this._fileList.merge(r), this.emit_change()
        }, t.prototype.handleAllUploadsComplete = function() {
            this._allUploadsComplete = !0, this.emit_change()
        }, t.prototype.startUpload = function(e) {
            var t = e.file;
            s.assert(null == this.currentUpload(), "can't start an unload while one is ongoing"), s.assert(null != t, "missing file to upload"), s.assert(this._fileList.get(t.uploadId) === t, "failed to find file in file list"), this._fileList.get(t.uploadId) && (this._fileList = this._fileList.update(t.uploadId, function(e) {
                return e.set("status", i.FileStatusType.UPLOADING)
            }), this._currentUploadId = t.uploadId, this._allUploadsComplete = !1), this.emit_change()
        }, t.prototype.completeUpload = function(e) {
            var t = e.uploadId,
                r = this._fileList.get(t);
            r && (t === this._currentUploadId && r.status === i.FileStatusType.UPLOADING || s.reportStack("Tried to mark a file upload that is not currently uploading as complete", {
                exc_extra: {
                    file: r.toString(),
                    fileListLength: this._fileList.count(),
                    uploadId: t,
                    currentUploadId: this._currentUploadId
                }
            }), this._fileList = this._fileList.update(t, function(e) {
                return e.set("status", i.FileStatusType.COMPLETE)
            })), this._currentUploadId = null, this.emit_change()
        }, t.prototype.cancelUploads = function(e) {
            for (var t = e.files, r = 0, o = t; r < o.length; r++) {
                var n = o[r];
                this._fileList = this._fileList.update(n.uploadId, function(e) {
                    return e.status === i.FileStatusType.PENDING || e.status === i.FileStatusType.UPLOADING ? e.set("status", i.FileStatusType.CANCELLED) : e
                }), n.uploadId === this._currentUploadId && (this._currentUploadId = null)
            }
            this.emit_change()
        }, t.prototype.setCurrentUploadProgress = function(e) {
            var t = e.percentComplete,
                r = e.numSecondsLeft,
                o = this._currentUploadId;
            o && (this._fileList = this._fileList.update(o, function(e) {
                return e.set("percentUploaded", t)
            }), void 0 !== r && (this._numSecondsLeft = r)), this.emit_change()
        }, t.prototype.handleUploadError = function(e) {
            var t = e.uploadId,
                r = e.errorType,
                o = e.errorMessage,
                n = this._fileList.get(t);
            n && (n.uploadId !== this._currentUploadId && s.reportStack("Error reported for file upload that is not the current upload", {
                exc_extra: {
                    file: n.toString(),
                    fileListLength: this._fileList.count(),
                    uploadId: t,
                    currentUploadId: this._currentUploadId,
                    errorType: r,
                    errorMessage: o
                }
            }), this._fileList = this._fileList.update(n.uploadId, function(e) {
                return e.set("status", i.FileStatusType.FAILED).set("errorType", r).set("errorMessage", o)
            })), this._currentUploadId = null, this.emit_change()
        }, t.prototype.setNumDraggingFiles = function(e) {
            var t = e.numDraggingFiles,
                r = e.isInternalTransfer,
                o = void 0 !== r && r;
            this._numDraggingFiles = t, this._isInternalTransfer = o, this.emit_change()
        }, t.prototype.setIsUploadModalOpen = function(e) {
            var t = e.isUploadModalOpen;
            this._isUploadModalOpen = t, this.emit_change()
        }, t.prototype.setInlineStatusShouldBeDismissed = function(e) {
            var t = e.inlineStatusShouldBeDismissed;
            this._inlineStatusShouldBeDismissed = t, this.emit_change()
        }, t.prototype.addNewFailedFile = function(e) {
            var t = e.file,
                r = e.errorType,
                o = e.errorMessage;
            null == t.uploadId && (t = t.set("uploadId", a.generateUploadId())), t = t.set("status", i.FileStatusType.FAILED).set("errorType", r).set("errorMessage", o), this._fileList = this._fileList.set(t.uploadId, t), this.emit_change()
        }, t.prototype.confirmFSW = function(e) {
            var t = this,
                r = e.fswIds,
                o = e.batchId;
            r.forEach(function(e) {
                t._confirmedFSWs.includes(e) || t._confirmedFSWs.push(e)
            }), this._confirmedFSWBatchIds.includes(o) || this._confirmedFSWBatchIds.push(o)
        }, t.prototype._new_payload = function(e) {
            var t = e.action;
            switch (t.type) {
                case i.UploaderActionType.SET_USER:
                    this.setUser(t.data);
                    break;
                case i.UploaderActionType.SET_PATH:
                    this.setPath(t.data);
                    break;
                case i.UploaderActionType.SET_FOLDER_NS_ID:
                    this.setFolderNsId(t.data);
                    break;
                case i.UploaderActionType.QUEUE_UPLOADS:
                    this.queueUploads(t.data);
                    break;
                case i.UploaderActionType.START_UPLOAD:
                    this.startUpload(t.data);
                    break;
                case i.UploaderActionType.COMPLETE_UPLOAD:
                    this.completeUpload(t.data);
                    break;
                case i.UploaderActionType.ALL_UPLOADS_COMPLETE:
                    this.handleAllUploadsComplete();
                    break;
                case i.UploaderActionType.CANCEL_UPLOADS:
                    this.cancelUploads(t.data);
                    break;
                case i.UploaderActionType.SET_CURRENT_UPLOAD_PROGRESS:
                    this.setCurrentUploadProgress(t.data);
                    break;
                case i.UploaderActionType.UPLOAD_ERROR:
                    this.handleUploadError(t.data);
                    break;
                case i.UploaderActionType.SET_NUM_DRAGGING_FILES:
                    this.setNumDraggingFiles(t.data);
                    break;
                case i.UploaderActionType.SET_IS_UPLOAD_MODAL_OPEN:
                    this.setIsUploadModalOpen(t.data);
                    break;
                case i.UploaderActionType.SET_INLINE_STATUS_SHOULD_BE_DISMISSED:
                    this.setInlineStatusShouldBeDismissed(t.data);
                    break;
                case i.UploaderActionType.ADD_NEW_FAILED_FILE:
                    this.addNewFailedFile(t.data);
                    break;
                case i.UploaderActionType.CONFIRM_FSW:
                    this.confirmFSW(t.data);
                    break;
                case i.UploaderActionType.SET_HAS_OVERQUOTA_ERROR:
                    this.setHasOverquotaError(t.data)
            }
        }, t
    })(n.Store);
    t.UploaderStoreClass = l, t.uploaderStore = new l
}), define("modules/clean/react/file_uploader/utils", ["require", "exports", "tslib", "react", "modules/clean/filepath", "modules/clean/react_format", "modules/clean/base64", "modules/core/browser", "modules/clean/analytics", "modules/core/i18n", "modules/clean/growth/types", "modules/clean/growth/api", "modules/clean/react/growth/education_module_event_bridge", "modules/clean/react/snackbar"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _) {
    "use strict";

    function h() {
        return m()
    }

    function f() {
        return "batch-" + m()
    }

    function m() {
        for (var e = "", t = 0; t < 16; ++t) e += String.fromCharCode(Math.floor(256 * Math.random()));
        var r = a.encode(e);
        return r = r.replace(/\+/g, "-"), r = r.replace(/\//g, "_"), r = r.replace(/\=*$/, "")
    }

    function S(e, t) {
        var r = 0;
        return e.forEach(function(e) {
            t.indexOf(e.status) !== -1 && (r += e.size)
        }), r
    }

    function g(e, t, r) {
        var o = t,
            n = 0;
        return e.forEach(function(e, t) {
            for (var i = 0, a = e.split("/"), s = r.split("/"); i < a.length && i < s.length && a[i] === s[i];) i++;
            i === a.length && i > 1 && i > n && (n = i, o = Number(t))
        }), o
    }

    function v(e) {
        var t;
        switch (e) {
            case d.FolderType.Private:
                t = c._("<b>Only you can view and edit these files</b>. If you want to share, you can send anyone a read-only copy of your work.");
                break;
            case d.FolderType.Shared:
                t = c._("<b>Anyone in this folder can view this file. Only people with edit access can make changes.</b> You can edit user permissions at any time.");
                break;
            case d.FolderType.Team:
                t = c._("<b>Anyone on your team can access these files.</b> You can also create a folder to share files with specific team members.");
                break;
            default:
                throw d.enforceExhaustive(e), new Error("unknown folderType: " + e)
        }
        return {
            calloutTitle: o.createElement("span", null, i.reactFormat(t, {
                b: o.createElement("b", null)
            })),
            calloutButtonText: c._("Learn More")
        }
    }

    function E(e) {
        switch (e) {
            case d.FolderType.Private:
                return "private";
            case d.FolderType.Shared:
                return "specific";
            case d.FolderType.Team:
                return "everyone";
            default:
                throw d.enforceExhaustive(e), new Error("unknown folderType: " + e)
        }
    }

    function w(e) {
        switch (e) {
            case d.FolderType.Shared:
                return {
                    sectionIdx: 1,
                    itemIdx: 0
                };
            case d.FolderType.Team:
                return {
                    sectionIdx: 0,
                    itemIdx: 1
                };
            case d.FolderType.Private:
                return {
                    sectionIdx: 1,
                    itemIdx: 2
                };
            default:
                throw d.enforceExhaustive(e), new Error("unknown folderType: " + e)
        }
    }

    function b(e) {
        return function() {
            _.Snackbar.close(), p.educationEventBridge.requestSection(e)
        }
    }

    function T(e, t, o) {
        if (t) {
            var n = v(e),
                i = w(e),
                a = b(i);
            return r.__assign({}, n, {
                onCalloutButtonClick: a,
                viewContext: d.calculateViewContext(),
                logEvent: l.TeamsWebActionsLogger.log,
                extraLogInfo: {
                    access_type: E(e),
                    target_module_section_index: "string" != typeof i && i.sectionIdx,
                    target_module_item_index: "string" != typeof i && i.itemIdx
                },
                onSnackbarSeen: function() {
                    return u.markRichSnackbarAsSeen(e, t)
                },
                onSnackbarFinished: function() {
                    return o(e)
                }
            })
        }
    }

    function F(e, t) {
        return !e.is_team || !e.is_cdm_member || "" !== n.normalize(t) && (n.paths_are_equal(e.cdm_tmf_path, t) || n.inSubDirectory(e.cdm_tmf_path, t))
    }

    function y(e, t) {
        return {
            root_folder: "" === n.normalize(t),
            member_folder: F(e, t),
            folder_level: n.normalize(t).split("/").length
        }
    }

    function C(e) {
        return {
            has_permissions: e.includes("action_commit_to_tsd_root"),
            has_permissions_nonroot: e.includes("action_missing_parent"),
            has_other: e.some(function(e) {
                return !I.includes(e)
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), a = r.__importStar(a), s = r.__importStar(s), t.generateUploadId = h, t.generateBatchId = f, t.calculateSizeOfUploads = S, t.getNsId = g, t.getOQmodalOQALocationCode = function(e) {
        return "/h" === (e || s.get_uri().path) ? "ho" : "fb"
    }, t.folderTypeToSnackbarCopy = v, t.computeRichSnackbarProps = T, t.getUploadLocationMetadataToLog = y;
    var I = ["action_commit_to_tsd_root", "action_missing_parent"];
    t.getFSWMetadataToLog = C
}), define("modules/clean/react/fileops_actions", ["require", "exports", "tslib", "react", "modules/clean/em_string", "modules/clean/file_operations/notifications", "modules/clean/filepath", "modules/clean/react/async_file_modal_controller", "modules/clean/react/browse/action_logger", "modules/clean/react/browse/api", "modules/clean/react/browse/models", "modules/clean/react/browse/nav_actions", "modules/clean/react/files_view/file_actions/api_v2", "modules/clean/react/files_view/file_actions/file_from_metadata", "modules/clean/react/snackbar", "modules/clean/react_format", "modules/clean/sharing/browse_exports", "modules/clean/sharing/constants", "modules/clean/undo", "modules/clean/viewer", "modules/clean/web_user_action_events", "modules/core/i18n", "modules/core/notify"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b) {
    "use strict";

    function T(e) {
        return r.__awaiter(this, void 0, Promise, function() {
            var t, o, n, i, a, s, l;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return t = e.files, o = e.newPath, n = e.onUndo, i = e.onSuccess, a = e.user, h.Snackbar.sync(w.ungettext("Copying %(num_files)s item...", "Copying %(num_files)s items...", t.length).format({
                            num_files: t.length
                        }), !0, "browse-action"), [4, p.copyFiles(t, o, a.id, !1)];
                    case 1:
                        return s = r.sent(), l = {
                            successLogAction: E.WebUserActionLogEvent.COPY_REQUEST_SUCCESS,
                            failedLogAction: E.WebUserActionLogEvent.COPY_REQUEST_FAIL,
                            undoingLogAction: E.WebUserActionLogEvent.COPY_UNDO,
                            undoFailedLogAction: E.WebUserActionLogEvent.COPY_UNDO_REQUEST_FAIL,
                            undoSuccessLogAction: E.WebUserActionLogEvent.COPY_UNDO_REQUEST_SUCCESS,
                            undoingSnackbarText: w._("Undoing copy..."),
                            undoFailedSnackbarText: w._("Couldn’t undo copy."),
                            undoSuccessSnackbarText: w._("Copy undone."),
                            getFailureSnackbarText: function(e) {
                                return w.ungettext("Couldn’t copy %(failed_to_copy_files)s item.", "Couldn’t copy %(failed_to_copy_files)s items.", e).format({
                                    failed_to_copy_files: e
                                })
                            },
                            getPartialSuccessSnackbarText: function(e, t) {
                                return w.ungettext("Copied %(succesfully_copied_files)s out of %(total_num_files)s item.", "Copied %(succesfully_copied_files)s out of %(total_num_files)s items.", t).format({
                                    succesfully_copied_files: e,
                                    total_num_files: t
                                })
                            },
                            getSuccessSnackbarText: function(e) {
                                return w.ungettext("Copied %(succesfully_copied_files)s item.", "Copied %(succesfully_copied_files)s items.", e).format({
                                    succesfully_copied_files: e
                                })
                            }
                        }, O(s, a, t, o, l, i, n), [2]
                }
            })
        })
    }

    function F(e) {
        return r.__awaiter(this, void 0, Promise, function() {
            var t, o, n, i, s, l, c, d, u, _;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return t = e.path, o = e.files, n = e.newPath, i = e.onUndo, s = e.onSuccess, l = e.user, c = e.dataApiV2, d = void 0 === c ? p : c, void 0 !== t && a.paths_are_equal(t, n) ? (h.Snackbar.fail(w._("Those files already exist in that folder."), "browse-action"), [2]) : (h.Snackbar.sync(w.ungettext("Moving %(num_files)s item...", "Moving %(num_files)s items...", o.length).format({
                            num_files: o.length
                        }), !0, "browse-action"), [4, d.moveFiles(o, n, l.id, !1, !1)]);
                    case 1:
                        return u = r.sent(), _ = {
                            successLogAction: E.WebUserActionLogEvent.MOVE_REQUEST_SUCCESS,
                            failedLogAction: E.WebUserActionLogEvent.MOVE_REQUEST_FAIL,
                            undoingLogAction: E.WebUserActionLogEvent.MOVE_UNDO,
                            undoFailedLogAction: E.WebUserActionLogEvent.MOVE_UNDO_REQUEST_FAIL,
                            undoSuccessLogAction: E.WebUserActionLogEvent.MOVE_UNDO_REQUEST_SUCCESS,
                            undoingSnackbarText: w._("Undoing move..."),
                            undoFailedSnackbarText: w._("Couldn’t undo move."),
                            undoSuccessSnackbarText: w._("Move undone."),
                            getFailureSnackbarText: function(e) {
                                return w.ungettext("Couldn’t move %(failed_to_move_files)s item.", "Couldn’t move %(failed_to_move_files)s items.", e).format({
                                    failed_to_move_files: e
                                })
                            },
                            getPartialSuccessSnackbarText: function(e, t) {
                                return w.ungettext("Moved %(succesfully_moved_files)s out of %(total_num_files)s item.", "Moved %(succesfully_moved_files)s out of %(total_num_files)s items.", t).format({
                                    succesfully_moved_files: e,
                                    total_num_files: t
                                })
                            },
                            getSuccessSnackbarText: function(e) {
                                return w.ungettext("Moved %(succesfully_moved_files)s item.", "Moved %(succesfully_moved_files)s items.", e).format({
                                    succesfully_moved_files: e
                                })
                            }
                        }, O(u, l, o, n, _, s, i), [2]
                }
            })
        })
    }

    function y(e, t, r, o, n) {
        var i = v.Viewer.get_viewer().team_name,
            l = !1;
        "is_cdm_member" in e && e.is_cdm_member && a.inSubDirectory(e.cdm_tmf_path, o) && (l = !0);
        var c = I(e, t, i, r, l);
        if (null == c) return void(n && n());
        b.Notify.clear();
        var p = t === D.TEAM_SPACE_OWNER_ONLY_MANAGE_MEMBERSHIP_ERROR || t === D.TEAM_SPACE_ONLY_ON_TEAM_SHARING_ERROR || t === D.NS_HAVE_MOUNTED_CHILDREN_NS_ERROR,
            _ = C(e, p, i, r.length, l),
            h = "";
        h = p ? "/help/business/team-space-overview#out" : "/help/business/team-space-overview#move";
        var f = 1 === r.length,
            g = r[0] instanceof d.File && f && !p ? w._("See owner") : void 0,
            E = function() {
                r[0] instanceof d.File && m.asyncShowShareModal(e.id, r[0], {
                    origin: S.SHARE_ACTION_ORIGIN_TYPE.BROWSE_FILE_ACTIONS
                }, u.browseNavActions.setPath, u.browseNavActions.setUrl)
            };
        s.showMoveErrorModal({
            title: _,
            content: c,
            learnMoreLink: h,
            buttonString: g,
            onClick: E
        })
    }

    function C(e, t, r, o, i) {
        return t ? 1 === o ? w._("Can’t move out of the team space") : w._("Can’t move %(num_of_files)s items").format({
            num_of_files: o
        }) : "is_cdm_member" in e && e.is_cdm_member && !i ? w.ungettext("Can’t move shared folder to the %(team_name)s team space", "Can’t move shared folders to the %(team_name)s team space", o).format({
            team_name: n.Emstring.em_snippet(r, S.SNIPPET_SIZES.DISPLAY_NAME)
        }) : w.ungettext("Can’t move shared folder to a team folder", "Can’t move shared folders to a team folder", o)
    }

    function I(e, t, r, i, s) {
        var l = w._("You don’t have permission to move some of these items. Try moving items individually."),
            c = null;
        return t === D.OFF_TEAM_OWNER_ERROR ? c = 1 === i.length ? null == r ? f.reactFormat(w._("The owner of <strong>%(file_name)s</strong> is a member of another team.").format({
            file_name: n.Emstring.em_snippet(a.filename(i[0].fq_path), S.SNIPPET_SIZES.FILENAME)
        }), {
            strong: o.default.createElement("strong", {
                style: {
                    fontWeight: 500
                }
            })
        }) : f.reactFormat(w._("The owner of <strong>%(file_name)s</strong> isn’t a member of %(team_name)s.").format({
            team_name: r,
            file_name: n.Emstring.em_snippet(a.filename(i[0].fq_path), S.SNIPPET_SIZES.FILENAME)
        }), {
            strong: o.default.createElement("strong", {
                style: {
                    fontWeight: 500
                }
            })
        }) : null == r ? w._("The owner of some of these shared folders is a member of another team.") : w._("The owner of some of these shared folders isn’t a member of %(team_name)s.").format({
            team_name: r
        }) : t === D.OWNER_ONLY_MANAGE_MEMBERSHIP_ERROR ? c = 1 === i.length ? "is_cdm_member" in e && e.is_cdm_member && !s ? f.reactFormat(w._("Only the owner of <strong>%(file_name)s</strong> can move it to the %(team_name)s team space.").format({
            team_name: r,
            file_name: n.Emstring.em_snippet(a.filename(i[0].fq_path), S.SNIPPET_SIZES.FILENAME)
        }), {
            strong: o.default.createElement("strong", {
                style: {
                    fontWeight: 500
                }
            })
        }) : f.reactFormat(w._("Only the owner of <strong>%(file_name)s</strong> can move it to a team folder.").format({
            file_name: n.Emstring.em_snippet(a.filename(i[0].fq_path), S.SNIPPET_SIZES.FILENAME)
        }), {
            strong: o.default.createElement("strong", {
                style: {
                    fontWeight: 500
                }
            })
        }) : "is_cdm_member" in e && e.is_cdm_member && !s ? w._("Only the owner can move some of these folders to the %(team_name)s team space.").format({
            team_name: r
        }) : w._("Only the owner can move some of these folders to a team folder.") : t === D.VIEW_ONLY_ACCESS_ERROR ? c = 1 === i.length ? f.reactFormat(w._("You can only view <strong>%(file_name)s</strong>. Ask an owner or editor of the folder for access to edit it.").format({
            file_name: n.Emstring.em_snippet(a.filename(i[0].fq_path), S.SNIPPET_SIZES.FILENAME)
        }), {
            strong: o.default.createElement("strong", {
                style: {
                    fontWeight: 500
                }
            })
        }) : w._("You can’t edit some of these folders. Ask an owner or editor of the folders for access to edit them.") : t === D.TEAM_SPACE_OWNER_ONLY_MANAGE_MEMBERSHIP_ERROR || t === D.TEAM_SPACE_ONLY_ON_TEAM_SHARING_ERROR ? c = 1 === i.length ? f.reactFormat(w._("If you need to move <strong>%(file_name)s</strong>, ask your admin to move it for you.").format({
            file_name: n.Emstring.em_snippet(a.filename(i[0].fq_path), S.SNIPPET_SIZES.FILENAME)
        }), {
            strong: o.default.createElement("strong", {
                style: {
                    fontWeight: 500
                }
            })
        }) : l : t === D.NS_HAVE_MOUNTED_CHILDREN_NS_ERROR && (c = 1 === i.length ? f.reactFormat(w._("<strong>%(file_name)s</strong> has other shared folders inside it. Try moving each shared folder individually.").format({
            file_name: n.Emstring.em_snippet(a.filename(i[0].fq_path), S.SNIPPET_SIZES.FILENAME)
        }), {
            strong: o.default.createElement("strong", {
                style: {
                    fontWeight: 500
                }
            })
        }) : l), c
    }

    function O(e, t, r, o, n, i, a) {
        if (e.isError) {
            h.Snackbar.close("browse-action");
            var s = function() {
                h.Snackbar.fail(n.getFailureSnackbarText(r.length), "browse-action")
            };
            return y(t, e.error[".tag"], r, o, s), void l.logFileAction({
                uid: t.id,
                action: n.failedLogAction,
                num_files_selected: r.length,
                num_folders_selected: 0,
                error_summary: e.error_summary,
                error: e.error[".tag"],
                jobId: e && e.jobId
            })
        }
        var c = e.result.entries.filter(function(e) {
                return "success" === e[".tag"]
            }),
            d = c.length,
            u = r.length - d,
            p = P(e, t, n, a);
        if (L(r.length, d, u, n, p), i) {
            var f = [];
            c.forEach(function(e) {
                if ("file" === e.success[".tag"] || "folder" === e.success[".tag"]) {
                    var t = e.success,
                        o = r.find(function(e) {
                            return e.file_id === t.id
                        });
                    if (o) {
                        var n = _.fileFromMetadata(o, t);
                        f.push(n)
                    }
                }
            }), i([], f)
        }
        R(n.successLogAction, e.result, t.id, e.jobId, r.length)
    }

    function P(e, t, o, n) {
        var i = this;
        return !e.isError && e.result.changeset_data && e.result.changeset_data.length > 0 ? function() {
            return r.__awaiter(i, void 0, void 0, function() {
                var i, a;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return h.Snackbar.sync(o.undoingSnackbarText, !0, "browse-action"), i = !1, l.logFileAction({
                                uid: t.id,
                                action: o.undoingLogAction,
                                num_files_selected: e.result.entries.length,
                                num_folders_selected: 0
                            }), [4, p.undo(e.result.changeset_data, t)];
                        case 1:
                            return a = r.sent(), a.isError ? (h.Snackbar.fail(o.undoFailedSnackbarText, "browse-action"), l.logFileAction({
                                uid: t.id,
                                action: o.undoFailedLogAction,
                                num_files_selected: e.result.entries.length,
                                num_folders_selected: 0,
                                error_summary: a.error_summary,
                                error: a.error[".tag"]
                            })) : (h.Snackbar.complete(o.undoSuccessSnackbarText, "browse-action"), i = !0, l.logFileAction({
                                uid: t.id,
                                action: o.undoSuccessLogAction,
                                num_files_selected: e.result.entries.length,
                                num_folders_selected: 0
                            })), n && n(i), [2]
                    }
                })
            })
        } : void 0
    }

    function R(e, t, r, o, n) {
        var i = n,
            a = 0,
            s = void 0,
            c = t.entries.filter(function(e) {
                return "success" === e[".tag"]
            });
        c && (i = c.filter(function(e) {
            return "file" === e.success[".tag"]
        }).length, a = c.filter(function(e) {
            return "folder" === e.success[".tag"]
        }).length);
        var d = t.entries.filter(function(e) {
            return "failure" === e[".tag"]
        });
        d && d.length > 0 && (s = d[0].failure[".tag"]), l.logFileAction({
            uid: r,
            action: e,
            num_files_selected: i,
            num_folders_selected: a,
            jobId: o,
            error_summary: s
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), i = r.__importStar(i), a = r.__importStar(a), s = r.__importStar(s), c = r.__importStar(c), p = r.__importStar(p);
    var D = {
        VIEW_ONLY_ACCESS_ERROR: "view_only_access_error",
        OFF_TEAM_OWNER_ERROR: "off_team_owner_error",
        OWNER_ONLY_MANAGE_MEMBERSHIP_ERROR: "owner_only_manage_membership_error",
        TEAM_SPACE_OWNER_ONLY_MANAGE_MEMBERSHIP_ERROR: "team_space_owner_only_manage_membership_error",
        TEAM_SPACE_ONLY_ON_TEAM_SHARING_ERROR: "team_space_only_on_team_sharing_error",
        NS_HAVE_MOUNTED_CHILDREN_NS_ERROR: "ns_have_mounted_children_ns_error"
    };
    t.copyFiles = function(e) {
        return e.useApiV2 ? T(e) : A(e)
    };
    var A = function(e) {
        var o = e.files,
            n = e.newPath,
            a = e.checkFSWs,
            l = e.onSuccess,
            d = e.onRequestNotSent,
            u = e.onUndo,
            p = e.user,
            _ = e.dataApi;
        !(void 0 === _ ? c : _).copyFiles({
            files: o,
            newPath: n,
            checkFSWs: a,
            userId: p.id,
            onSuccess: function(a) {
                var c = a.newFiles,
                    d = a.changesets,
                    _ = a.failureDetails;
                if (_) {
                    var h = function() {
                        t.copyFiles(r.__assign({}, e, {
                            checkFSWs: !1
                        }))
                    };
                    s.showFileSystemWarningsModal({
                        fsws: _,
                        onFinalAccept: h,
                        confirmText: w._("Copy")
                    })
                } else l && l(c), i.notifyCopySuccess(o.length, p, d, n, function() {
                    u && u()
                })
            }
        }) && d && d()
    };
    t.moveFiles = function(e) {
        return e.useApiV2 ? F(e) : N(e)
    };
    var N = function(e) {
            var o = e.path,
                n = e.files,
                a = e.newPath,
                l = e.checkFSWs,
                d = e.onSuccess,
                u = e.onRequestNotSent,
                p = e.onUndo,
                _ = e.user,
                h = e.dataApi,
                f = void 0 === h ? c : h,
                m = function(o) {
                    var l = o.newFiles,
                        c = o.changesets,
                        u = o.failureDetails;
                    if (u) {
                        var h = function() {
                            t.moveFiles(r.__assign({}, e, {
                                checkFSWs: !1
                            }))
                        };
                        s.showFileSystemWarningsModal({
                            fsws: u,
                            onFinalAccept: h,
                            confirmText: w._("Move")
                        })
                    } else i.notifyMoveSuccess(n.length, _, c, a, function() {
                        p && p()
                    }), d && d(l)
                },
                S = function(e) {
                    "This will result in losing ownership of these folders." === e ? (b.Notify.clear(), s.showConfirmOwnershipTransferModal(function() {
                        f.moveFiles({
                            path: o,
                            files: n,
                            newPath: a,
                            userId: _.id,
                            onSuccess: m,
                            allowOwnershipTransfer: !0
                        })
                    })) : y(_, e, n, a)
                };
            !f.moveFiles({
                path: o,
                files: n,
                newPath: a,
                checkFSWs: l,
                userId: _.id,
                onSuccess: m,
                onError: S,
                allowOwnershipTransfer: !1
            }) && u && u()
        },
        L = function(e, t, r, o, n) {
            if (t > 0 && r > 0) {
                var i = o.getPartialSuccessSnackbarText(t, e);
                n ? (g.setHandleUndo(n), h.Snackbar.completeWithUndo(i, n, "browse-action")) : h.Snackbar.complete(i, "browse-action")
            } else if (t > 0) {
                var i = o.getSuccessSnackbarText(t);
                n ? (g.setHandleUndo(n), h.Snackbar.completeWithUndo(i, n, "browse-action")) : h.Snackbar.complete(i, "browse-action")
            } else h.Snackbar.fail(o.getFailureSnackbarText(r), "browse-action")
        }
}), define("modules/clean/react/files_view/column_header", ["require", "exports", "tslib", "external/classnames", "react", "spectrum/checkbox", "spectrum/table", "modules/clean/react/files_view/column_header_menu", "modules/clean/react/files_view/fixed_table_head", "modules/clean/react/files_view/sticky_table_head", "modules/clean/react/files_view/types", "modules/clean/react/files_view/view_type_column_header_menu", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n);
    var _ = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                isHovered: !1
            }, t.handleChangeSelectAllCheckbox = function(e) {
                "unchecked" === e ? t.props.onDeselectAll() : t.props.onSelectAll()
            }, t.handleMouseEnter = function() {
                t.setState({
                    isHovered: !0
                })
            }, t.handleMouseLeave = function() {
                t.setState({
                    isHovered: !1
                })
            }, t
        }
        return r.__extends(t, e), t.prototype.getAriaSortValue = function(e) {
            return e === d.SortDirection.ASCENDING ? "ascending" : e === d.SortDirection.DESCENDING ? "descending" : "none"
        }, t.prototype.render = function() {
            var e = this,
                t = this.state.isHovered,
                d = this.props,
                _ = d.columnFlex,
                h = d.isCompactMode,
                f = d.isSelectMode,
                m = d.currentSort,
                S = d.onSelection,
                g = d.onSort,
                v = d.onSwitchViewType,
                E = d.selectAllCheckboxState,
                w = void 0 === E ? "unchecked" : E,
                b = d.showSelectAllCheckbox,
                T = void 0 === b || b,
                F = d.stickyOffsetHeight,
                y = d.stickyOffsetTop,
                C = d.columns,
                I = d.visibleColumns,
                O = d.viewType,
                P = d.viewTypes,
                R = d.viewTypeLabels,
                D = d.onTTI,
                A = d.isSearchMode,
                N = d.presentationOnly,
                L = d.variant,
                x = !f && !t && !h,
                M = [n.default.createElement(a.TableHeadCell, {
                    className: "brws-column-header-table-cell brws-checkbox-cell",
                    key: "checkbox-cell",
                    role: N ? "presentation" : "columnheader",
                    scope: "col"
                }, n.default.createElement("div", {
                    className: "brws-vertically-center"
                }, T ? n.default.createElement(i.Checkbox, {
                    className: o.default("brws-checkbox", {
                        "brws-checkbox-checked": "checked" === w
                    }),
                    checked: w,
                    onChange: this.handleChangeSelectAllCheckbox,
                    variant: x ? "invisible" : "default",
                    ariaLabel: p._("Select all")
                }) : null))].concat(I.map(function(t, r) {
                    var o = m && m.sortField === t.sortField ? m.sortDirection : void 0;
                    return n.default.createElement(a.TableHeadCell, {
                        key: r,
                        role: N ? "presentation" : "columnheader",
                        scope: "col",
                        "aria-sort": e.getAriaSortValue(o),
                        className: "brws-column-header-table-cell"
                    }, n.default.createElement(s.ColumnHeaderMenu, {
                        column: t,
                        sortDirection: o,
                        columns: C,
                        visibleColumns: I,
                        onSelection: S,
                        onSort: g,
                        viewType: O,
                        isSearchMode: A
                    }), r === I.length - 1 && n.default.createElement(u.ViewTypeColumnHeaderMenu, {
                        onTTI: D,
                        viewType: O,
                        viewTypes: P,
                        viewTypeLabels: R,
                        onSwitchViewType: v
                    }))
                })),
                U = {
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave
                };
            return "default" === L ? n.default.createElement(a.TableHead, r.__assign({
                className: "brws-column-header"
            }, U), M) : "fixed" === L ? n.default.createElement(l.FixedTableHead, r.__assign({
                offsetHeight: F
            }, U), M) : "sticky-native" === L ? n.default.createElement(a.TableHead, r.__assign({
                className: "brws-column-header brws-column-header--sticky",
                style: {
                    position: "sticky",
                    top: y,
                    zIndex: 1
                }
            }, U), M) : n.default.createElement(c.StickyTableHead, r.__assign({
                columnFlex: _,
                offsetHeight: F,
                offsetTop: y,
                className: "brws-column-header"
            }, U), M)
        }, t.defaultProps = {
            variant: "fixed"
        }, t
    })(n.default.PureComponent);
    t.ColumnHeader = _
}), define("modules/clean/react/files_view/column_header_menu", ["require", "exports", "tslib", "external/classnames", "spectrum/icon_form", "spectrum/popover", "react", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/types", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), a = r.__importDefault(a);
    var d = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handlePopoverSelection = function(e) {
                var r = t.props,
                    o = r.onSort,
                    n = r.onSelection,
                    i = r.column;
                if (e === l.SortDirection.ASCENDING || e === l.SortDirection.DESCENDING) o(i.sortField, e);
                else {
                    if (n(e, i), t.props.isSearchMode) return void o(e.sortField, l.SortDirection.DESCENDING);
                    1 === t.props.visibleColumns.length && o(e.sortField, t.props.sortDirection || l.SortDirection.ASCENDING)
                }
            }, t
        }
        return r.__extends(t, e), t.prototype._columnMenuTitle = function() {
            switch (this.props.viewType) {
                case l.ViewType.Grid:
                case l.ViewType.LargeGrid:
                    return c._("Group by");
                case l.ViewType.List:
                default:
                    return this.props.isSearchMode ? c._("Sort by") : c._("Show")
            }
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.column,
                r = e.columns,
                d = e.visibleColumns,
                u = e.sortDirection,
                p = e.isSearchMode;
            if (t.isSortDisabled) return a.default.createElement("div", {
                className: "normal brws-column-header-menu"
            }, a.default.createElement("span", {
                className: "brws-column-header-menu-trigger-disabled"
            }, t.label));
            var _, h = !(t.sortField !== l.SortField.RELEVANCE || !p),
                f = u !== l.SortDirection.ASCENDING || h ? u !== l.SortDirection.DESCENDING || h ? "caret-down" : "sort-arrow-down" : "sort-arrow-up",
                m = h ? null : a.default.createElement(i.PopoverItemGroupSeparator, {
                    key: "show-separator"
                }),
                S = p ? s.SEARCH_LIST_VIEW_SORT_ENABLED_COLUMNS : r;
            return !t.isLocked && r && r.length && (_ = [m, a.default.createElement(i.PopoverItemGroup, {
                key: "show-item-group"
            }, a.default.createElement(i.PopoverItemGroupTitle, {
                className: "brws-column-header-menu-title",
                key: "show-title"
            }, this._columnMenuTitle()), S.filter(function(e) {
                return !e.isLocked
            }).map(function(e) {
                return a.default.createElement(i.PopoverSelectableItem, {
                    key: e.sortField,
                    disabled: d.map(function(e) {
                        return e.sortField
                    }).includes(e.sortField) && e.sortField !== t.sortField,
                    selected: e.sortField === t.sortField,
                    value: e
                }, e.label)
            }))]), a.default.createElement(i.Popover, {
                className: "brws-column-header-menu",
                onSelection: this.handlePopoverSelection
            }, a.default.createElement(i.PopoverTrigger, {
                className: o.default("brws-column-header-menu-trigger", {
                    "brws-column-header-menu-trigger-active": !!u && !h
                }),
                title: t.popoverTriggerLabel,
                "aria-label": c._("Sort by %(sort_by)s").format({
                    sort_by: t.label
                })
            }, a.default.createElement("span", null, t.label), a.default.createElement("span", {
                className: "brws-column-header-menu-label-icon-wrapper"
            }, a.default.createElement(n.IconForm, {
                className: "brws-column-header-menu-label-icon",
                name: f
            }))), a.default.createElement(i.PopoverContent, null, !h && a.default.createElement(i.PopoverItemGroup, null, a.default.createElement(i.PopoverItemGroupTitle, {
                className: "brws-column-header-menu-title"
            }, c._("Order")), a.default.createElement(i.PopoverSelectableItem, {
                selected: u === l.SortDirection.ASCENDING,
                value: l.SortDirection.ASCENDING,
                disabled: t.isSortOrderOptionDisabled
            }, c._("Ascending")), a.default.createElement(i.PopoverSelectableItem, {
                selected: u === l.SortDirection.DESCENDING,
                value: l.SortDirection.DESCENDING,
                disabled: t.isSortOrderOptionDisabled
            }, c._("Descending"))), _))
        }, t
    })(a.default.PureComponent);
    t.ColumnHeaderMenu = d
}), define("modules/clean/react/files_view/column_helpers", ["require", "exports", "modules/clean/immutability_helper"], function(e, t, r) {
    "use strict";

    function o(e, t, o) {
        var n = e.map(function(e) {
                return e.sortField
            }).indexOf(t),
            i = e.map(function(e) {
                return e.sortField
            }).indexOf(o);
        if (n === i || n === -1 || i === -1) return e;
        var a = e[n],
            s = e[i];
        return r.splice(r.splice(e, n, 1, s), i, 1, a)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.swapColumns = o
}), define("modules/clean/react/files_view/column_manager", ["require", "exports", "tslib", "external/lodash", "react", "spectrum/dimensions", "modules/clean/immutability_helper", "modules/clean/react/files_view/column_helpers", "modules/clean/react/files_view/types"], function(e, t, r, o, n, i, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importDefault(n), t.ColumnManager = function(e) {
        var t = e.responsiveContainer,
            o = r.__rest(e, ["responsiveContainer"]);
        return (o.isMatchedLarge || o.isMatchedMedium) && t ? n.default.createElement(i.Dimensions, null, function(e) {
            var t = e.width,
                i = r.__assign({}, o);
            return t && (i.isMatchedLarge = t > 824, i.isMatchedMedium = !i.isMatchedLarge && t > 588), n.default.createElement(c, r.__assign({}, i, {
                containerWidth: t
            }))
        }) : n.default.createElement(c, r.__assign({}, o))
    };
    var c = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.handleSelection = function(e, t) {
                var o = r.props,
                    n = o.viewType,
                    i = o.onColumnsChanged,
                    c = o.viewTypeColumns,
                    d = r.state.visibleColumns,
                    u = c ? c[l.ViewType.List] : void 0,
                    p = c ? c[l.ViewType.Grid] : void 0;
                if (u && p) {
                    var _ = d.indexOf(t);
                    if (_ === -1 || d.includes(e)) r.changeVisibleColumns(d);
                    else {
                        var h = a.splice(d, _, 1, e);
                        r.changeVisibleColumns(h);
                        var f = r.isSizeColumnPresent(h);
                        n === l.ViewType.List ? i(s.swapColumns(u, t.sortField, e.sortField), l.ViewType.List, f) : (i(s.swapColumns(p, t.sortField, e.sortField), n, f), e.sortField !== l.SortField.FILENAME && i(s.swapColumns(u, u[1].sortField, e.sortField), l.ViewType.List, f))
                    }
                }
            }, r
        }
        return r.__extends(t, e), t.prototype.componentWillMount = function() {
            this.changeVisibleColumns(this.computeVisibleColumns(this.props), !0)
        }, t.prototype.componentWillReceiveProps = function(e) {
            var t = this.props.viewTypeColumns,
                r = this.state.visibleColumns,
                n = this.getNumVisibleColumns(this.props),
                i = this.getNumVisibleColumns(e);
            if (o.isEqual(this.props.columns, e.columns) && this.props.viewType === e.viewType) {
                if (i < n) this.changeVisibleColumns(r.slice(0, i), !0);
                else if (i > n) {
                    var a = this.props.columns,
                        c = i - r.length,
                        d = o.filter(a, function(e) {
                            return !o.find(r, function(t) {
                                return t.sortField === e.sortField
                            })
                        }).slice(0, c);
                    this.changeVisibleColumns(r.concat(d), !0)
                }
            } else if (1 === i && e.columns.length && e.currentSort) {
                var a = e.columns,
                    u = e.viewType,
                    p = t ? t[l.ViewType.Grid] : void 0;
                switch (u) {
                    case l.ViewType.List:
                        this.changeVisibleColumns([a[0]], !0);
                        break;
                    case l.ViewType.Grid:
                    case l.ViewType.LargeGrid:
                        if (p) {
                            var _ = e.currentSort,
                                h = a.find(function(e) {
                                    return e.sortField === _.sortField
                                }),
                                f = h || a[0];
                            this.deferredOnColumnsChangedHandler([f], s.swapColumns(p, p[0].sortField, f.sortField), u)
                        }
                }
            } else this.changeVisibleColumns(e.columns.slice(0, i), !0)
        }, t.prototype.changeVisibleColumns = function(e, t) {
            var r = this;
            void 0 === t && (t = !1), this.resetChangeVisibleColumnsTimeout();
            var o = this.isSizeColumnPresent(e);
            this.setState({
                visibleColumns: e,
                canDisplayFolderSizes: o
            }), t ? this.changeVisibleColumnsTimeout = setTimeout(function() {
                r.resetChangeVisibleColumnsTimeout(), r.props.onCanDisplayFolderSizesChanged(o)
            }) : this.props.onCanDisplayFolderSizesChanged(o)
        }, t.prototype.resetChangeVisibleColumnsTimeout = function() {
            this.changeVisibleColumnsTimeout && (clearTimeout(this.changeVisibleColumnsTimeout), this.changeVisibleColumnsTimeout = void 0)
        }, t.prototype.deferredOnColumnsChangedHandler = function(e, t, r) {
            var o = this;
            this.resetDeferredOnColumnsChangedHandler();
            var n = this.isSizeColumnPresent(e);
            this.setState({
                visibleColumns: e,
                canDisplayFolderSizes: n
            }), this.onColumnsChangesTimeout = setTimeout(function() {
                o.resetDeferredOnColumnsChangedHandler(), o.props.onColumnsChanged(t, r, n)
            })
        }, t.prototype.resetDeferredOnColumnsChangedHandler = function() {
            this.onColumnsChangesTimeout && (clearTimeout(this.onColumnsChangesTimeout), this.onColumnsChangesTimeout = void 0)
        }, t.prototype.computeVisibleColumns = function(e) {
            return e.columns.slice(0, this.getNumVisibleColumns(e))
        }, t.prototype.getNumVisibleColumns = function(e) {
            var t = e.isMatchedLarge,
                r = e.isMatchedMedium;
            switch (e.viewType) {
                case l.ViewType.Grid:
                case l.ViewType.LargeGrid:
                    return 1;
                case l.ViewType.List:
                default:
                    return t ? 3 : r ? 2 : 1
            }
        }, t.prototype.isSizeColumnPresent = function(e) {
            return e.some(function(e) {
                return e.sortField === l.SortField.SIZE
            })
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.children,
                r = e.containerWidth,
                o = this.state,
                n = o.visibleColumns,
                i = o.canDisplayFolderSizes;
            if (!t) return null;
            var a = t;
            return "function" == typeof t && (a = t({
                visibleColumns: n,
                canDisplayFolderSizes: i,
                handleSelection: this.handleSelection,
                containerWidth: r
            })), a
        }, t
    })(n.default.PureComponent);
    t.ColumnManagerComponent = c
}), define("modules/clean/react/files_view/controller", ["require", "exports", "tslib", "external/classnames", "external/immutable", "external/lodash", "external/react-dom", "react", "spectrum/media_table_skeleton", "spectrum/table", "modules/clean/photos/thumb_loading/buffered_thumb_store", "modules/clean/photos/thumb_loading/generic_thumb_store", "modules/clean/react/browse/models", "modules/clean/react/files_view/column_header", "modules/clean/react/files_view/column_manager", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/drag_and_drop", "modules/clean/react/files_view/file_grouper", "modules/clean/react/files_view/file_list_empty_folder_table", "modules/clean/react/files_view/internal_drag_status", "modules/clean/react/files_view/list", "modules/clean/react/files_view/pinned_team_folder_view", "modules/clean/react/files_view/selectors", "modules/clean/react/files_view/tile_grid", "modules/clean/react/files_view/types", "modules/clean/react/icon/file_folder_icon", "modules/clean/react/selectable_list", "modules/clean/sharing/access_level", "modules/clean/user_education/user_education_client", "modules/clean/web_timing_logger", "modules/core/browser_detection", "modules/core/i18n", "modules/core/notify"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b, T, F, y, C, I, O, P, R, D, A) {
    "use strict";

    function N(e, t) {
        return e.filter(L(t)).size > 0
    }

    function L(e) {
        return function(t) {
            return e ? t instanceof p.File || t instanceof p.FileSharedWithMe : t instanceof p.File
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n), i = r.__importStar(i), a = r.__importStar(a), s = r.__importDefault(s), P = r.__importStar(P);
    var x = function() {},
        M = [I.NameSpaceAccess.ACCESS_NO_ACCESS, I.NameSpaceAccess.ACCESS_READER, I.NameSpaceAccess.ACCESS_READER_NO_COMMENT];
    t.getShouldShowSelectAllCheckbox = N;
    var U = (function(t) {
        function I() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gridViewPrewarmedThumbnailRequestIds = [], e.state = {
                thumbStore: new d.BufferedThumbStore,
                keyboardShortcutModalHandler: function() {
                    e.setState({
                        shouldShowKeyboardShortcutModal: !0
                    })
                },
                dropTarget: null,
                sections: {
                    sectionLabels: [],
                    sectionStartIndices: []
                },
                tilesPerRow: 1
            }, e.handleCopyToClipboard = function() {
                var t = e.props,
                    r = t.selectedFiles,
                    o = t.onCopyToClipboard;
                r.size && o(r.toArray())
            }, e.handleNewFolderSubmit = function(t) {
                "" === t ? (e.props.onNewFolderCancel(), e.handleNewFolderCancel({
                    source: F.NameInputActionSource.SUBMIT
                })) : e.props.onNewFolderSubmit(t)
            }, e.handleNewFolderCancel = function(t) {
                t.source !== F.NameInputActionSource.ESC && A.Notify.error(D._("Please provide a name for the new folder.")), e.props.onNewFolderCancel()
            }, e.handleSetFileUploaderPath = function(t) {
                var r = t ? t.path : e.props.path,
                    o = e.props.context.isCurrentPathWriteable();
                t && t.hasOwnProperty("hasPermissionToUploadToFolder") && (o = !!t.hasPermissionToUploadToFolder), e.props.setFileUploaderPath({
                    path: r,
                    hasPermissionToUploadToFolder: o
                })
            }, e.handleDragStart = function(t, o) {
                void 0 === o && (o = []);
                var n = e.props,
                    s = n.path,
                    l = n.selectedFiles,
                    c = n.user,
                    d = i.keyBy(o, "fq_path");
                d = r.__assign({}, d, l.toJS());
                var u = i.values(d);
                if (u.some(function(e) {
                        return p.File.isTeamSharedFolder(e)
                    })) return void A.Notify.error(D._("Team folders can’t be moved."));
                if (u.some(function(e) {
                        return p.File.isTeamMemberFolder(e)
                    })) return void A.Notify.error(D._("Your member folder can’t be moved."));
                var _ = t.dataTransfer;
                _ && (_.setDragImage && e.internalDragStatusRef && _.setDragImage(a.findDOMNode(e.internalDragStatusRef), -10, -10), _.setData(R.INTERNAL_FILE_DATA_TRANSFER_TYPE, JSON.stringify({
                    userId: c.id,
                    fromPath: s,
                    filePaths: u.map(function(e) {
                        return e.fq_path
                    })
                })), _.effectAllowed = "copyMove")
            }, e.handleDragEnter = function(t, r, o, n) {
                m.onFileDragEnterItem(r, !!e.props.isDraggingExternalFiles, !!e.props.isDraggingInternalFiles, o, n, e.props.context, e.handleSetDropTarget, e.handleSetFileUploaderPath)
            }, e.handleSetDropTarget = function(t) {
                e.setState({
                    dropTarget: t
                })
            }, e.handleSelectionChange = function(t) {
                O.UEClient.sendEvent("FileItemRow", "CheckboxToggled"), e.props.onSelectionChange(t)
            }, e.handleDeselectAll = function() {
                var t = e.props,
                    r = t.selection;
                (0, t.onSelectionChange)(r.set("selected", n.OrderedSet()))
            }, e.handleSelectAll = function() {
                var t = e.props,
                    r = t.items,
                    o = t.selection;
                (0, t.onSelectionChange)(o.set("selected", n.OrderedSet(r.filter(L(e.props.expSelectableFswm)).map(function(e) {
                    return "fq_path" in e ? e.fq_path : e.file_id
                }))))
            }, e._handleGetOverflowMenuActions = function(t, r) {
                var o = e.props;
                return (0, o.getOverflowMenuActions)(t, r, o.responsive)
            }, e.handleTTI = function() {
                e.props.onComponentTTI("FilesViewController")
            }, e.setFilesViewTileGridRef = function(t) {
                e.filesViewTileGridRef = t
            }, e.setInternalDragStatusRef = function(t) {
                e.internalDragStatusRef = t
            }, e.getIsCurrentPathWriteable = function() {
                return e.props.context.isCurrentPathWriteable()
            }, e.onTilesPerRowChange = function(t) {
                e.setState({
                    tilesPerRow: t
                })
            }, e.onDeselectAll = function() {
                e.props.isSearchMode && e.props.onFocusSearchBar()
            }, e
        }
        return r.__extends(I, t), I.prototype.componentWillMount = function() {
            this.setTileItemsSections(this.props)
        }, I.prototype.componentDidMount = function() {
            var t = this;
            this.setupUnity(), O.UEClient.registerForAllEducationSteps(function(e) {
                var r = ["FileItemRow", "PinnedTeamFolder", "PathBreadcrumbs"];
                e.step && e.step.effect && r.includes(e.step.effect.containerName) && t.props.onSwitchViewType(F.ViewType.List)
            }), P.waitForTTI().then(function() {
                t.prewarmGridViewThumbStore();
                var o = function(e) {
                    var r = e.showKeyboardShortcutsModal;
                    t.state.shouldShowKeyboardShortcutModal && r(t.props.viewType === F.ViewType.List), t.setState({
                        keyboardShortcutModalHandler: function() {
                            r(t.props.viewType === F.ViewType.List)
                        },
                        shouldShowKeyboardShortcutModal: !1
                    })
                };
                o.perfName = "keyboard_shortcuts_modal", new Promise(function(t, r) {
                    e(["modules/clean/react/files_view/keyboard_shortcuts_modal"], t, r)
                }).then(r.__importStar).then(o)
            })
        }, I.prototype.componentWillReceiveProps = function(e) {
            if (e.context && this.props.context && e.context.currentFQPath !== this.props.context.currentFQPath) {
                this.undoPrewarmGridViewThumbStore();
                var t = this.props.arePostTTIModulesLoaded ? new u.GenericThumbStore : new d.BufferedThumbStore;
                this.setState({
                    thumbStore: t
                })
            }(e.viewType !== this.props.viewType || !e.currentSort != !this.props.currentSort || e.currentSort && this.props.currentSort && (e.currentSort.sortField !== this.props.currentSort.sortField || e.currentSort.sortDirection !== this.props.currentSort.sortDirection) || e.items !== this.props.items) && this.setTileItemsSections(e)
        }, I.prototype.componentDidUpdate = function(e) {
            e.context && this.props.context && e.context.currentFQPath !== this.props.context.currentFQPath && this.prewarmGridViewThumbStore(), this.props.enableUnity && e.items !== this.props.items && this.triggerUnityChangeCallback && this.triggerUnityChangeCallback(), e.path !== this.props.path && this.handleScrollToTop()
        }, I.prototype.componentWillUnmount = function() {
            this.triggerUnityChangeCallback = void 0
        }, I.prototype.setupUnity = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, o = this;
                return r.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, P.waitForTTI()];
                        case 1:
                            return n.sent(), [4, new Promise(function(t, r) {
                                e(["modules/clean/unity_browse_interface"], t, r)
                            }).then(r.__importStar)];
                        case 2:
                            return t = n.sent().default, this.triggerUnityChangeCallback = function() {
                                t.browse_visible_change_callback(o.props.items.toArray(), o.props.user.id, 0, o.props.items.size - 1)
                            }, [2]
                    }
                })
            })
        }, I.prototype.setTileItemsSections = function(e) {
            this.setState({
                sections: e.viewType !== F.ViewType.List && e.currentSort ? S.getSections(e.items, e.currentSort.sortField, e.currentSort.sortDirection, e.isSearchMode) : I.emptySections
            })
        }, I.prototype.prewarmGridViewThumbStore = function() {
            var e = this;
            if (this.props.viewType !== F.ViewType.Grid) {
                var t = this.state.thumbStore;
                this.props.items.slice(0, 100).forEach(function(r) {
                    if (r instanceof p.File || r instanceof p.FileSharedWithMe) {
                        var o = y.getThumbnailUrlForItem(r.thumbnail_url_tmpl, f.ViewTypeThumbnailSizes[F.ViewType.Grid]);
                        if (o) {
                            var n = t.bind_url(o, {
                                onSuccess: x
                            });
                            n && e.gridViewPrewarmedThumbnailRequestIds.push(n)
                        }
                    }
                })
            }
        }, I.prototype.undoPrewarmGridViewThumbStore = function() {
            var e = this;
            this.gridViewPrewarmedThumbnailRequestIds.length && (this.gridViewPrewarmedThumbnailRequestIds.forEach(function(t) {
                e.state.thumbStore.unbind_url(t)
            }), this.gridViewPrewarmedThumbnailRequestIds = [])
        }, I.prototype.handleScrollToTop = function() {
            window.scrollTo(0, 0)
        }, I.prototype.getFilesViewTileGridRef = function() {
            return this.filesViewTileGridRef
        }, I.prototype.renderEmptyFolderView = function() {
            var e = this.props,
                t = e.context,
                r = e.responsive,
                o = e.onFocusSearchBar,
                n = e.onPasteFromClipboard,
                i = e.onNavigateToParentFolder;
            if (this.props.customEmptyFolderView) return this.props.customEmptyFolderView(r);
            var a = t.isInsideSharedFolder,
                l = t.currentSharedFolderPermissionRole,
                c = a && M.includes(l),
                d = c ? void 0 : D._("Drag and drop files onto this window to upload.");
            return s.default.createElement(g.EmptyFolderTable, {
                title: D._("This folder is empty"),
                subtitle: d,
                onTTI: this.handleTTI,
                onFocusSearchBar: o,
                onPasteFromClipboard: n,
                onNavigateToParentFolder: i,
                onOpenKeyboardShortcutModal: this.state.keyboardShortcutModalHandler
            })
        }, I.prototype.renderPinnedTeamFolderView = function(e) {
            var t = this.props,
                r = t.context,
                o = t.dropTargetHighlightMode,
                n = t.onShowShare,
                i = t.renderSharedWithController,
                a = t.teamFolders,
                l = t.user,
                c = t.onRenameSubmit,
                d = t.onRenameCancel,
                u = t.selectionMethod,
                p = this.state,
                _ = p.dropTarget,
                h = p.thumbStore;
            return s.default.createElement(w.PinnedTeamFolderView, {
                activeDropTarget: _,
                columnFlex: f.LIST_VIEW_COLUMN_FLEX[1],
                context: r,
                dropTargetHighlightMode: o,
                getOverflowMenuActions: this._handleGetOverflowMenuActions,
                isCompactMode: e,
                onDragEnter: this.handleDragEnter,
                onNavigateToFileOrFolder: this.props.onNavigateToFileOrFolder,
                onRenameCancel: d,
                onRenameSubmit: c,
                teamFolders: a,
                user: l,
                arePostTTIModulesLoaded: this.props.arePostTTIModulesLoaded,
                thumbStore: h,
                onShowShare: n,
                renderSharedWithController: i,
                selectionMethod: u
            })
        }, I.prototype.getSelectAllCheckboxCheckedVariant = function() {
            var e = this.props,
                t = e.selectedFiles,
                r = e.items,
                o = "unchecked";
            return t.size === r.filter(L(this.props.expSelectableFswm)).size ? o = "checked" : t.size && (o = "mixed"), o
        }, I.prototype.isCreateFolderUIActive = function() {
            var e = this.props.createNewFolderState;
            return e && "CREATE_FOLDER_INACTIVE" !== e
        }, I.prototype.shouldShowEmptyFolderView = function() {
            return this.props.loadingState === F.LoadingState.LOADED && !this.props.items.size && !this.isCreateFolderUIActive()
        }, I.prototype.shouldComponentUpdate = function(e) {
            return e.loadingState !== this.props.loadingState || e.loadingState !== F.LoadingState.LOADING_FIRST_PAGE
        }, I.prototype.render = function() {
            var e = this,
                t = this.props,
                n = t.onDelete,
                i = t.onShowRename,
                a = t.onRenameSubmit,
                d = t.onRenameCancel,
                u = t.onSwitchViewType,
                p = t.onPasteFromClipboard,
                m = t.onColumnsChanged,
                S = t.onCanDisplayFolderSizesChanged,
                g = t.onFocusSearchBar,
                w = t.currentSort,
                y = t.createNewFolderState,
                I = t.context,
                O = t.columns,
                P = t.dropTargetHighlightMode,
                R = t.fileRename,
                D = t.getIsFileJumping,
                A = t.onAddFileJumpKeyCode,
                L = t.onResetFileJump,
                x = t.items,
                M = t.isSearchMode,
                U = t.isDraggingExternalFiles,
                k = t.isDraggingInternalFiles,
                V = t.isQueryingFolderSizes,
                B = t.isFileViewerShown,
                H = t.loadingState,
                W = t.onSortChange,
                q = t.path,
                G = t.responsive,
                z = t.selectedFiles,
                j = t.selection,
                Y = t.shouldShowPinnedTeamFolders,
                K = t.renderSharedWithController,
                Q = t.onShowShare,
                J = t.onPresentInZoom,
                X = t.teamFolders,
                Z = t.totalNumFiles,
                $ = t.user,
                ee = t.viewType,
                te = t.viewTypes,
                re = t.viewTypeLabels,
                oe = t.viewTypeColumns,
                ne = t.onLocationLinkClick,
                ie = t.onNavigateToFileOrFolder,
                ae = t.onNavigateToParentFolder,
                se = t.onOpenFileSharedWithMe,
                le = t.onOpenPaper,
                ce = t.arePostTTIModulesLoaded,
                de = t.onStarClick,
                ue = t.extensionsFeatureFlags,
                pe = t.sharingServiceInfo,
                _e = t.stickyOffsetTop,
                he = t.disabledMultiselect,
                fe = t.isStickyColumnHeader,
                me = t.onRangeInView,
                Se = t.hasResponsiveOverflowMenu,
                ge = t.selectionMethod,
                ve = t.highDensity,
                Ee = t.scrollContainer,
                we = t.filteredContactName,
                be = G.isMatchedLarge,
                Te = G.isMatchedMedium,
                Fe = this.state,
                ye = Fe.dropTarget,
                Ce = Fe.thumbStore,
                Ie = Fe.keyboardShortcutModalHandler,
                Oe = Fe.sections,
                Pe = Fe.tilesPerRow;
            if (H === F.LoadingState.LOADING_FIRST_PAGE) return ce ? s.default.createElement(l.MediaTableSkeleton, {
                numRows: 15
            }) : null;
            var Re = b.getItemIds(this.props),
                De = !be,
                Ae = !!z.size;
            if (this.shouldShowEmptyFolderView()) return s.default.createElement("div", {
                className: "brws-files-view"
            }, Y && this.renderPinnedTeamFolderView(De), this.renderEmptyFolderView());
            var Ne = be ? f.DEFAULT_COLUMN_HEADER_HEIGHT : f.COMPACT_COLUMN_HEADER_HEIGHT,
                Le = Ne + _e,
                xe = this.props.scrollPositionOffset || 0;
            return Y && (xe += Ne + Ne + f.PINNED_TEAM_FOLDER_SECONDARY_HEADER_PADDING_TOP + X.size * f.DEFAULT_ROW_HEIGHT), s.default.createElement("div", {
                className: o.default(["brws-files-view", "brws-files-view--" + ee.toLowerCase()])
            }, Y && this.renderPinnedTeamFolderView(De), s.default.createElement(h.ColumnManager, {
                columns: O,
                viewTypeColumns: oe,
                currentSort: w,
                onCanDisplayFolderSizesChanged: S,
                onColumnsChanged: m,
                isMatchedLarge: be,
                isMatchedMedium: Te,
                isSearchMode: M,
                viewType: ee,
                responsiveContainer: !!this.props.expSnippets
            }, function(t) {
                var l = t.visibleColumns,
                    h = t.handleSelection,
                    m = t.canDisplayFolderSizes,
                    S = t.containerWidth,
                    v = (M ? e.props.expSnippets ? f.LIST_VIEW_SEARCH_MODE_WITH_SNIPPETS_COLUMN_FLEX : f.LIST_VIEW_SEARCH_MODE_COLUMN_FLEX : f.LIST_VIEW_COLUMN_FLEX)[l.length],
                    b = {
                        columnFlex: v,
                        currentSort: w,
                        isCompactMode: De,
                        isSelectMode: Ae,
                        onDeselectAll: e.handleDeselectAll,
                        onSelectAll: e.handleSelectAll,
                        onSelection: h,
                        onSort: W,
                        onSwitchViewType: u,
                        selectAllCheckboxState: e.getSelectAllCheckboxCheckedVariant(),
                        showSelectAllCheckbox: N(e.props.items, e.props.expSelectableFswm),
                        stickyOffsetHeight: Ne,
                        stickyOffsetTop: _e,
                        columns: O,
                        visibleColumns: l,
                        viewType: ee,
                        viewTypes: te,
                        viewTypeLabels: re,
                        onTTI: e.handleTTI,
                        isSearchMode: M,
                        presentationOnly: ee !== F.ViewType.List
                    };
                return ee === F.ViewType.List ? s.default.createElement(C.SelectableList, {
                    itemIds: Re,
                    keyScope: C.SELECTABLE_LIST_KEY_SCOPE,
                    onSelectionChange: e.handleSelectionChange,
                    selection: j,
                    tilesPerRow: Pe,
                    onDeselectAll: e.onDeselectAll
                }, function(t) {
                    var u = t.focusedFileId,
                        h = t.handleDeselect,
                        f = t.handleFocusFile,
                        w = t.handleSelect,
                        T = t.isSelectableListEvent;
                    return s.default.createElement(c.Table, {
                        "aria-rowcount": Z,
                        className: o.default("brws-files-view-list", {
                            "brws-files-view-list-compact": De,
                            "brws-files-view-list-high-density": ve
                        }),
                        columnFlex: v
                    }, s.default.createElement(_.ColumnHeader, r.__assign({}, b, {
                        variant: Ee ? "sticky-native" : fe ? "sticky" : "fixed"
                    })), s.default.createElement(E.FilesViewList, {
                        onDelete: n,
                        onShowRename: i,
                        activeDropTarget: ye,
                        context: I,
                        createNewFolderState: y,
                        disabledMultiselect: he || !1,
                        dropTargetHighlightMode: P,
                        items: x,
                        extensionsFeatureFlags: ue,
                        fileRename: R,
                        focusedFileIndex: u ? Re.indexOf(u) : void 0,
                        getOverflowMenuActions: e._handleGetOverflowMenuActions,
                        getIsCurrentPathWriteable: e.getIsCurrentPathWriteable,
                        getIsFileJumping: D,
                        onAddFileJumpKeyCode: A,
                        onResetFileJump: L,
                        isCompactMode: De,
                        isDraggingExternalFiles: U,
                        isDraggingInternalFiles: k,
                        isFileViewerShown: B,
                        isSearchMode: M,
                        isSelectMode: Ae,
                        isSelectableListEvent: T,
                        arePostTTIModulesLoaded: ce,
                        keyScope: C.SELECTABLE_LIST_KEY_SCOPE,
                        onCopyToClipboard: e.handleCopyToClipboard,
                        onDragStart: e.handleDragStart,
                        onDragEnter: e.handleDragEnter,
                        onDeselectFile: h,
                        onFocusFile: f,
                        onFocusSearchBar: g,
                        onOpenKeyboardShortcutModal: Ie,
                        onLocationLinkClick: ne,
                        onNavigateToFileOrFolder: ie,
                        onNavigateToParentFolder: ae,
                        onNewFolderCancel: e.handleNewFolderCancel,
                        onNewFolderSubmit: e.handleNewFolderSubmit,
                        onOpenFileSharedWithMe: se,
                        onOpenPaper: le,
                        onPasteFromClipboard: p,
                        onRenameCancel: d,
                        onRenameSubmit: a,
                        onSelectFile: w,
                        onSetDropTarget: e.handleSetDropTarget,
                        onSetFileUploaderPath: e.handleSetFileUploaderPath,
                        onStarClick: de,
                        responsive: G,
                        scrollPositionOffset: xe,
                        selectedFiles: z,
                        selection: j,
                        renderSharedWithController: K,
                        hrefForFile: e.props.hrefForFile,
                        onShowShare: Q,
                        onPresentInZoom: J,
                        user: $,
                        viewportTopOffset: Le,
                        visibleColumns: l,
                        canDisplayFolderSizes: m,
                        thumbStore: Ce,
                        shareButtonLabel: e.props.shareButtonLabel,
                        sharingServiceInfo: pe,
                        showShareButton: e.props.showShareButton,
                        starredState: e.props.starredState,
                        useSearchSuccessBanner: e.props.useSearchSuccessBanner,
                        expHighlightedTruncatedString: e.props.expHighlightedTruncatedString,
                        onRangeInView: me,
                        hasResponsiveOverflowMenu: Se,
                        expSnippets: e.props.expSnippets,
                        containerWidth: S,
                        expSelectableFswm: e.props.expSelectableFswm,
                        selectionMethod: ge,
                        highDensity: ve,
                        scrollContainer: Ee,
                        filteredContactName: we
                    }))
                }) : s.default.createElement(C.SelectableList, {
                    itemIds: Re,
                    keyScope: C.SELECTABLE_TILE_GRID_KEY_SCOPE,
                    onSelectionChange: e.handleSelectionChange,
                    selection: j,
                    tilesPerRow: Pe,
                    sectionStartIndices: Oe.sectionStartIndices
                }, function(t) {
                    var o = t.handleDeselect,
                        l = t.handleDeselectAll,
                        u = t.handleFocusFile,
                        h = t.handleSelect,
                        m = t.handleSelectAll,
                        S = t.focusedFileId;
                    return s.default.createElement("div", null, s.default.createElement(c.Table, {
                        columnFlex: f.GRID_VIEW_COLUMN_FLEX,
                        role: "presentation",
                        style: Ee ? {
                            position: "sticky",
                            top: _e,
                            zIndex: 1
                        } : void 0
                    }, s.default.createElement(_.ColumnHeader, r.__assign({}, b, {
                        variant: Ee ? "default" : fe ? "sticky" : "fixed"
                    }))), s.default.createElement(T.FilesViewTileGrid, {
                        onDelete: n,
                        disabledMultiselect: he || !1,
                        expSelectableFswm: e.props.expSelectableFswm,
                        onShowRename: i,
                        activeDropTarget: ye,
                        arePostTTIModulesLoaded: ce,
                        createNewFolderState: y,
                        context: I,
                        deselectAll: l,
                        dropTargetHighlightMode: P,
                        fileRename: R,
                        getOverflowMenuActions: e._handleGetOverflowMenuActions,
                        getIsCurrentPathWriteable: e.getIsCurrentPathWriteable,
                        getIsFileJumping: D,
                        onAddFileJumpKeyCode: A,
                        onResetFileJump: L,
                        onTTI: e.handleTTI,
                        items: x,
                        isCreateFolderUIActive: e.isCreateFolderUIActive(),
                        isDraggingExternalFiles: U,
                        isDraggingInternalFiles: k,
                        isQueryingFolderSizes: V,
                        isSearchMode: M,
                        onCopyToClipboard: e.handleCopyToClipboard,
                        onDeselectFile: o,
                        onDragEnter: e.handleDragEnter,
                        onDragStart: e.handleDragStart,
                        onFocusFile: u,
                        onFocusSearchBar: g,
                        onNewFolderCancel: e.handleNewFolderCancel,
                        onNewFolderSubmit: e.handleNewFolderSubmit,
                        onNavigateToFileOrFolder: ie,
                        onOpenFileSharedWithMe: se,
                        onOpenPaper: le,
                        onOpenKeyboardShortcutModal: Ie,
                        onPasteFromClipboard: p,
                        onRangeInView: me,
                        onRenameCancel: d,
                        onRenameSubmit: a,
                        onSelectFile: h,
                        onSetDropTarget: e.handleSetDropTarget,
                        onSortChange: W,
                        onStarClick: de,
                        onTilesPerRowChange: e.onTilesPerRowChange,
                        path: q,
                        ref: e.setFilesViewTileGridRef,
                        sections: Oe,
                        selectAll: m,
                        selectedFiles: z,
                        selection: j,
                        onSetFileUploaderPath: e.handleSetFileUploaderPath,
                        thumbStore: Ce,
                        tilesPerRow: Pe,
                        totalNumItems: Z,
                        user: $,
                        viewportTopOffset: Le,
                        viewType: ee,
                        starredState: e.props.starredState,
                        hrefForFile: e.props.hrefForFile,
                        focusedFileIndex: S ? Re.indexOf(S) : void 0,
                        selectionMethod: e.props.selectionMethod,
                        scrollContainer: Ee
                    }))
                })
            }), s.default.createElement(v.InternalDragStatus, {
                className: "offscreen-drag-icon",
                files: z.toArray(),
                ref: this.setInternalDragStatusRef
            }))
        }, I.defaultProps = {
            dropTargetHighlightMode: F.DropTargetHighlightMode.NONE,
            enableUnity: !0,
            fileRename: null,
            loadingState: F.LoadingState.LOADING_FIRST_PAGE,
            selectionMethod: F.SelectionMethod.CHECKBOX
        }, I.emptySections = {
            sectionLabels: [],
            sectionStartIndices: []
        }, I
    })(s.default.Component);
    t.FilesViewController = U
}), define("modules/clean/react/files_view/culled_table_body", ["require", "exports", "tslib", "spectrum/table", "modules/clean/react/files_view/util", "react"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), t.CulledTableBodyWithScrollContainer = function(e) {
        var t = e.scrollContainer,
            o = r.__rest(e, ["scrollContainer"]);
        return t ? t.current && i.default.createElement(a, r.__assign({}, o, {
            shouldUseWindowAsScrollContainer: !0,
            window: n.createFakeWindow(t.current)
        })) : i.default.createElement(a, r.__assign({}, o))
    };
    var a = (function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(n, e), n.prototype.componentWillMount = function() {
            this.updateOffsetCache()
        }, n.prototype.componentDidMount = function() {
            this.updateScroll()
        }, n.prototype.componentWillReceiveProps = function(e) {
            e.listItemHeight !== this.props.listItemHeight && this.updateOffsetCache(e), e.scrollToRow !== this.props.scrollToRow && this.updateScroll(e)
        }, n.prototype.updateOffsetCache = function(e) {
            var r = (void 0 === e ? this.props : e).listItemHeight;
            this.offsetCache = Array.isArray(r) ? t.computeOffsetCache(r) : void 0
        }, n.prototype.updateScroll = function(e) {
            var r = void 0 === e ? this.props : e,
                o = r.scrollToRow,
                n = r.listItemHeight,
                i = r.viewportTopOffset,
                a = void 0 === i ? 0 : i,
                s = r.scrollPositionOffset,
                l = void 0 === s ? 0 : s,
                c = r.window;
            if (void 0 !== o && o >= 0) {
                var d = (Array.isArray(n) ? this.offsetCache[o] : (o + 1) * n) + l,
                    u = Array.isArray(n) ? n[o] : n,
                    p = d - u;
                t.scrollTo([p, d], a, c)
            }
        }, n.prototype.render = function() {
            var e = this.props,
                t = e.viewportTopOffset,
                n = (e.scrollToRow, r.__rest(e, ["viewportTopOffset", "scrollToRow"]));
            return i.default.createElement(o.CulledTableBody, r.__assign({
                viewportHeight: window.innerHeight - t
            }, n))
        }, n.defaultProps = {
            viewportTopOffset: 0
        }, n
    })(i.default.PureComponent);
    t.CulledTableBodyWithScrollToRow = a;
    var s = function(e) {
        return void 0 === e && (e = window), "scrollingElement" in e.document && e.document.scrollingElement ? e.document.scrollingElement.scrollTop : e.document.documentElement.scrollTop
    };
    t.scrollTo = function(e, t, r) {
        var o = e[0],
            n = e[1];
        void 0 === t && (t = 0), void 0 === r && (r = window);
        var i = r.innerHeight - t,
            a = s(r),
            l = a + i;
        o < a ? r.scrollTo(0, o) : n > l && r.scrollTo(0, n - i)
    }, t.computeOffsetCache = function(e) {
        return e.reduce(function(e, t) {
            return e.push(t + (e[e.length - 1] || 0)), e
        }, [])
    }
}), define("modules/clean/react/files_view/data/action_creators", ["require", "exports", "tslib", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/data/selectors", "modules/clean/react/files_view/data/types", "modules/clean/storage", "modules/core/cookies"], function(e, t, r, o, n, i, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.setViewType = function(e) {
        var t = e.user,
            r = e.viewType;
        return function(e, s) {
            e({
                type: i.ActionTypes.SET_VIEW_TYPE,
                payload: {
                    viewType: r
                }
            }), a.UserLocalStorage.set(t.id, o.VIEW_TYPE_STORAGE_KEY, n.viewTypes(s()))
        }
    }, t.loadViewTypes = function(e) {
        var t = e.user;
        return function(e, r) {
            var l, c = a.UserLocalStorage.get(t.id, o.VIEW_TYPE_STORAGE_KEY);
            if (c) e({
                type: i.ActionTypes.SET_VIEW_TYPES,
                payload: {
                    viewTypes: c
                }
            });
            else {
                var d = s.Cookies.read(o.VIEW_TYPE_COOKIE_NAME);
                s.Cookies.delete(o.VIEW_TYPE_COOKIE_NAME), d && (e({
                    type: i.ActionTypes.SET_VIEW_TYPES,
                    payload: {
                        viewTypes: (l = {}, l[o.VIEW_TYPE_GLOBAL_SCOPE] = d, l)
                    }
                }), a.UserLocalStorage.set(t.id, o.VIEW_TYPE_STORAGE_KEY, n.viewTypes(r())))
            }
        }
    }, t.setViewTypeScope = function(e) {
        var t = e.viewTypeScope;
        return {
            type: i.ActionTypes.SET_VIEW_TYPE_SCOPE,
            payload: {
                viewTypeScope: t
            }
        }
    }, t.setViewTypeColumns = function(e) {
        var t = e.columns,
            s = e.viewType,
            l = e.user;
        return function(e, c) {
            var d;
            a.UserLocalStorage.set(l.id, o.COLUMNS_STORAGE_KEY + "_" + s, t);
            var u = r.__assign({}, n.viewTypeColumns(c()), (d = {}, d[s] = t, d));
            e({
                type: i.ActionTypes.SET_VIEW_TYPE_COLUMNS,
                payload: {
                    viewTypeColumns: u
                }
            })
        }
    }, t.loadViewTypeColumns = function(e) {
        var t = e.user;
        return function(e, s) {
            var l = n.viewTypeColumns(s());
            o.AllViewTypes.forEach(function(e) {
                var n, i = a.UserLocalStorage.get(t.id, o.COLUMNS_STORAGE_KEY + "_" + e);
                i && (l = r.__assign({}, l, (n = {}, n[e] = i, n)))
            }), e({
                type: i.ActionTypes.SET_VIEW_TYPE_COLUMNS,
                payload: {
                    viewTypeColumns: l
                }
            })
        }
    }, t.setFileRename = function(e) {
        var t = e.file,
            r = e.renameState;
        return {
            type: i.ActionTypes.SET_FILE_RENAME,
            payload: {
                file: t,
                renameState: r
            }
        }
    }
}), define("modules/clean/react/files_view/data/reducer", ["require", "exports", "tslib", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/data/types", "modules/clean/react/files_view/types"], function(e, t, r, o, n, i) {
    "use strict";

    function a(e, t) {
        var o = t.payload,
            n = o.file,
            i = o.renameState;
        return i ? r.__assign({}, e, {
            fileRename: {
                file: n,
                state: i
            }
        }) : r.__assign({}, e, {
            fileRename: null
        })
    }

    function s(e, r) {
        switch (void 0 === e && (e = t.defaultFilesViewState), r.type) {
            case n.ActionTypes.SET_VIEW_TYPE:
                return u(e, r.payload);
            case n.ActionTypes.SET_VIEW_TYPES:
                return p(e, r.payload);
            case n.ActionTypes.SET_VIEW_TYPE_COLUMNS:
                return _(e, r.payload);
            case n.ActionTypes.SET_VIEW_TYPE_SCOPE:
                return d(e, r.payload);
            case n.ActionTypes.SET_FILE_RENAME:
                return a(e, r)
        }
        return e
    }
    var l, c;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.defaultFilesViewState = {
        viewTypes: (l = {}, l[o.VIEW_TYPE_GLOBAL_SCOPE] = i.ViewType.List, l),
        viewTypeScope: o.VIEW_TYPE_GLOBAL_SCOPE,
        viewTypeColumns: (c = {}, c[i.ViewType.List] = o.LIST_VIEW_COLUMNS, c[i.ViewType.Grid] = o.GRID_VIEW_COLUMNS, c[i.ViewType.LargeGrid] = o.GRID_VIEW_COLUMNS, c),
        fileRename: null
    };
    var d = function(e, t) {
            var o = t.viewTypeScope;
            return r.__assign({}, e, {
                viewTypeScope: o
            })
        },
        u = function(e, t) {
            var o, n = t.viewType;
            return r.__assign({}, e, {
                viewTypes: r.__assign({}, e.viewTypes, (o = {}, o[e.viewTypeScope] = n, o))
            })
        },
        p = function(e, t) {
            var o = t.viewTypes;
            return r.__assign({}, e, {
                viewTypes: r.__assign({}, e.viewTypes, o)
            })
        },
        _ = function(e, t) {
            var o = t.viewTypeColumns;
            return r.__assign({}, e, {
                viewTypeColumns: o
            })
        };
    t.filesViewReducer = s
}), define("modules/clean/react/files_view/data/selectors", ["require", "exports", "external/reselect", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/data/reducer", "modules/clean/redux/selectors", "modules/clean/redux/namespaces"], function(e, t, r, o, n, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e) {
        return i.getStateAtNamespace(e, a.FILES_VIEW_NAMESPACE_KEY) || n.defaultFilesViewState
    };
    t.viewTypes = function(e) {
        return s(e).viewTypes
    }, t.viewTypeScope = function(e) {
        return s(e).viewTypeScope
    }, t.viewTypeColumns = function(e) {
        return s(e).viewTypeColumns
    }, t.viewType = r.createSelector(t.viewTypes, t.viewTypeScope, function(e, t) {
        return t in e ? e[t] : t in o.defaultViewTypes ? o.defaultViewTypes[t] : e[o.VIEW_TYPE_GLOBAL_SCOPE]
    }), t.fileRename = function(e) {
        return s(e).fileRename
    }
}), define("modules/clean/react/files_view/data/store", ["require", "exports", "modules/clean/react/files_view/data/reducer", "modules/clean/redux/namespaces", "modules/clean/redux/store"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i;
    t.getStoreForFilesView = function() {
        var e;
        return i || (i = n.getStoreAndRegisterReducers((e = {}, e[o.FILES_VIEW_NAMESPACE_KEY] = r.filesViewReducer, e))), i
    }
}), define("modules/clean/react/files_view/data/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.SET_VIEW_TYPE = "FILES_VIEW/SET_VIEW_TYPE", e.SET_VIEW_TYPES = "FILES_VIEW/SET_VIEW_TYPES", e.SET_VIEW_TYPE_COLUMNS = "FILES_VIEW/SET_VIEW_TYPE_COLUMNS", e.SET_VIEW_TYPE_SCOPE = "FILES_VIEW/SET_VIEW_TYPE_SCOPE", e.SET_FILE_RENAME = "FILES_VIEW/SET_FILE_RENAME"
    })(t.ActionTypes || (t.ActionTypes = {}))
}), define("modules/clean/react/files_view/file_actions/api_v2", ["require", "exports", "tslib", "modules/clean/api_v2/user_client", "modules/clean/filepath"], function(e, t, r, o, n) {
    "use strict";

    function i(e, t, i, a) {
        return r.__awaiter(this, void 0, Promise, function() {
            var s, l, c, d, u;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        s = n.parent_dir(e.fq_path), l = n.normalize(s) + "/" + t, c = new o.UserApiV2Client, r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, c.ns("files").rpc("move_v2", {
                            from_path: e.fq_path,
                            to_path: l,
                            allow_shared_folder: !0,
                            autorename: !0,
                            allow_ownership_transfer: !1,
                            fsw_request: a ? {
                                ".tag": "check"
                            } : void 0
                        }, {
                            subjectUserId: i.id
                        })];
                    case 2:
                        return d = r.sent(), [2, {
                            isError: !1,
                            result: d
                        }];
                    case 3:
                        return u = r.sent(), u && u.error && u.error[".tag"] ? [2, {
                            isError: !0,
                            error: u.error,
                            error_summary: u.summary
                        }] : [2, {
                            isError: !0,
                            error: {
                                ".tag": "undefined_error"
                            },
                            error_summary: "undefined_error"
                        }];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function a(e, t) {
        return r.__awaiter(this, void 0, Promise, function() {
            var n, i, a;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        n = new o.UserApiV2Client, r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, n.ns("files").rpc("undo_batch", {
                            entries: e
                        }, {
                            subjectUserId: t.id
                        })];
                    case 2:
                        return i = r.sent(), [2, {
                            isError: !1,
                            result: i
                        }];
                    case 3:
                        return a = r.sent(), a && a.error && a.error[".tag"] ? [2, {
                            isError: !0,
                            error: a.error,
                            error_summary: a.summary
                        }] : [2, {
                            isError: !0,
                            error: {
                                ".tag": "undefined_error"
                            },
                            error_summary: "undefined_error"
                        }];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function s(e, t, i, a, s) {
        return r.__awaiter(this, void 0, Promise, function() {
            var l, d, u;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return l = new o.UserApiV2Client, d = function() {
                            return l.ns("files").rpc("move_batch_v2", {
                                entries: e.map(function(e) {
                                    return {
                                        from_path: e.fq_path,
                                        to_path: t + "/" + n.filename(e.fq_path)
                                    }
                                }),
                                autorename: !0,
                                allow_ownership_transfer: !!a,
                                fsw_request: s ? {
                                    ".tag": "check"
                                } : void 0
                            }, {
                                subjectUserId: i
                            })
                        }, u = function(e) {
                            return l.ns("files").rpc("move_batch/check_v2", {
                                async_job_id: e
                            }, {
                                subjectUserId: i
                            })
                        }, [4, c(d, u)];
                    case 1:
                        return [2, r.sent()]
                }
            })
        })
    }

    function l(e, t, i, a) {
        return r.__awaiter(this, void 0, Promise, function() {
            var s, l, d;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return s = new o.UserApiV2Client, l = function() {
                            return s.ns("files").rpc("copy_batch_v2", {
                                entries: e.map(function(e) {
                                    return {
                                        from_path: e.fq_path,
                                        to_path: t + "/" + n.filename(e.fq_path)
                                    }
                                }),
                                autorename: !0,
                                fsw_request: a ? {
                                    ".tag": "check"
                                } : void 0
                            }, {
                                subjectUserId: i
                            })
                        }, d = function(e) {
                            return s.ns("files").rpc("copy_batch/check_v2", {
                                async_job_id: e
                            }, {
                                subjectUserId: i
                            })
                        }, [4, c(l, d)];
                    case 1:
                        return [2, r.sent()]
                }
            })
        })
    }

    function c(e, t) {
        return r.__awaiter(this, void 0, Promise, function() {
            var o, n, i;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 9, , 10]), [4, e()];
                    case 1:
                        return o = r.sent(), "complete" !== o[".tag"] ? [3, 2] : [2, {
                            isError: !1,
                            result: o
                        }];
                    case 2:
                        n = void 0, r.label = 3;
                    case 3:
                        return [4, new Promise(function(e) {
                            return setTimeout(e, 1e3)
                        })];
                    case 4:
                        return r.sent(), [4, t(o.async_job_id)];
                    case 5:
                        n = r.sent(), r.label = 6;
                    case 6:
                        if (n && "in_progress" === n[".tag"]) return [3, 3];
                        r.label = 7;
                    case 7:
                        return "complete" === n[".tag"] ? [2, {
                            isError: !1,
                            result: n,
                            jobId: o.async_job_id
                        }] : [2, {
                            isError: !0,
                            error: {
                                ".tag": "undefined_error"
                            },
                            error_summary: "undefined_error",
                            jobId: o.async_job_id
                        }];
                    case 8:
                        return [3, 10];
                    case 9:
                        return i = r.sent(), i && i.error && i.error[".tag"] ? [2, {
                            isError: !0,
                            error: i.error,
                            error_summary: i.summary
                        }] : [2, {
                            isError: !0,
                            error: {
                                ".tag": "undefined_error"
                            },
                            error_summary: "undefined_error"
                        }];
                    case 10:
                        return [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    t.renameFile = i, t.undo = a, t.moveFiles = s, t.copyFiles = l
}), define("modules/clean/react/files_view/file_actions/file_from_metadata", ["require", "exports", "tslib", "modules/clean/react/browse/models"], function(e, t, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.fileFromMetadata = function(e, t) {
        if ("file" === t[".tag"]) {
            var n = t,
                i = r.__assign({}, e, {
                    fq_path: n.path_display || e.fq_path,
                    icon: n.icon + "_32",
                    revision_id: n.rev,
                    file_id: n.id
                });
            return new o.File(i)
        }
        return "folder" === t[".tag"] ? new o.File(r.__assign({}, e, {
            fq_path: t.path_display || e.fq_path
        })) : e
    }
}), define("modules/clean/react/files_view/file_actions/snackbars", ["require", "exports", "modules/clean/react/snackbar", "modules/core/i18n"], function(e, t, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.renameError = function(e, t) {
        var n;
        n = "to" === e[".tag"] && "malformed_path" === e.to[".tag"] ? o._("Name was invalid.") : "from_write" === e[".tag"] && "team_folder" === e.from_write[".tag"] ? o._("Team folders can’t be renamed.") : "from_lookup" === e[".tag"] && "not_found" === e.from_lookup[".tag"] ? o._("Couldn’t find the file.") : o._("Rename failed."), r.Snackbar.fail(n, "browse-rename")
    }
}), define("modules/clean/react/files_view/file_grouper", ["require", "exports", "modules/core/i18n", "modules/clean/datetime", "modules/clean/react/browse/constants", "modules/clean/react/files_view/types", "modules/clean/react/browse/models"], function(e, t, r, o, n, i, a) {
    "use strict";

    function s(e) {
        return e instanceof a.File ? a.File.getCategoryDescription(e, !0) : n.ExtensionCategories.DOCUMENT
    }

    function l(e) {
        return e instanceof a.File ? e.is_dir ? n.FileTypeCapitalizedCategoryTranslations.FOLDER : a.File.getExtension(e).toUpperCase() : d
    }

    function c(e, t, n, c) {
        void 0 === c && (c = !1);
        var _ = [],
            h = [],
            f = null;
        if (t === i.SortField.CATEGORY) e.forEach(function(e, t) {
            if (e) {
                var r = s(e);
                r !== f && (_.push(r), h.push(t), f = r)
            }
        });
        else if (t === i.SortField.EXTENSION) e.forEach(function(e, t) {
            if (e) {
                var r = l(e);
                if (r !== f) {
                    var o = r;
                    "" === r && (o = d), _.push(o), h.push(t), f = r
                }
            }
        });
        else if (t === i.SortField.MODIFIED)
            if (n === i.SortDirection.DESCENDING) {
                var m = o.getTimeBands(Date.now());
                e.forEach(function(e, t) {
                    if (e) {
                        var o;
                        if (c && e instanceof a.File && e.isDeleted) o = p;
                        else {
                            var n = a.itemTimestampInMs(e);
                            o = n >= m.today ? r._("Today") : n >= m.yesterday ? r._("Yesterday") : n >= m.thisWeek ? r._("This week") : n >= m.lastWeek ? r._("Last week") : n >= m.thisMonth ? r._("This month") : n >= m.lastMonth ? r._("Last month") : n >= m.lastThreeMonths ? r._("Three months ago") : r._("Older")
                        }
                        o !== f && (_.push(o), h.push(t), f = o)
                    }
                })
            } else e.forEach(function(e, t) {
                if (e) {
                    var r;
                    if (c && e instanceof a.File && e.isDeleted) r = p;
                    else if (a.itemTimestampInMs(e)) {
                        var n = new Date(a.itemTimestampInMs(e)),
                            i = n.getMonth(),
                            s = n.getFullYear();
                        r = o.month_with_year(i, s)
                    } else r = u;
                    r !== f && (_.push(r), h.push(t), f = r)
                }
            });
        return {
            sectionLabels: _,
            sectionStartIndices: h
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = r._("Extensionless", {
            comment: "Label for files without extensions like .txt or .png"
        }),
        u = r._("Missing dates", {
            comment: "label for group of files without dates marking when they are created or modified"
        }),
        p = r._("Deleted content isn’t sorted by last modified");
    t.getSections = c
}), define("modules/clean/react/files_view/file_media_actions", ["require", "exports", "tslib", "react", "spectrum/button", "spectrum/icon_table", "spectrum/media_table", "modules/clean/react/app_actions/app_actions_menu", "modules/clean/react/files_view/util", "modules/clean/react/extensions/split_share_button", "modules/clean/react/extensions/utils", "modules/clean/react/files_view/overflow_menu", "modules/clean/react/files_view/share_button", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), t.ViewFileButton = function(e) {
        var t = e.isVisible,
            r = e.onClick;
        return o.default.createElement(n.Button, {
            className: "brws-file-row-view-file-button",
            "aria-label": _._("View File"),
            onClick: r,
            tabIndex: t ? void 0 : -1,
            variant: t ? "secondary" : "invisible"
        }, o.default.createElement(i.IconTable, {
            name: "view"
        }))
    };
    var h = (function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                isActionDropdownOpen: !1
            }, t.onActionDropdownOpen = function() {
                t.setState({
                    isActionDropdownOpen: !0
                })
            }, t.onActionDropdownClose = function() {
                t.setState({
                    isActionDropdownOpen: !1
                })
            }, t
        }
        return r.__extends(n, e), n.prototype.render = function() {
            var e = this.props,
                n = e.arePostTTIModulesLoaded,
                i = e.canDisplayFolderSizes,
                _ = e.file,
                h = e.getOverflowMenuActions,
                f = e.hasResponsiveOverflowMenu,
                m = e.isCompactMode,
                S = e.isHovered,
                g = e.isSearchMode,
                v = e.isSelectMode,
                E = e.isSelected,
                w = e.isSharingDisabled,
                b = e.onPresentInZoom,
                T = e.shareButtonLabel,
                F = e.showShareButton,
                y = e.thumbStore,
                C = e.useSearchSuccessBanner,
                I = e.user,
                O = e.viewportTopOffset,
                P = this.props.onShowShare || function() {},
                R = this.props.onOpenFileClick || function() {},
                D = this.props.extensionsFeatureFlags || {},
                A = this.props.sharingServiceInfo || {},
                N = g ? "search" : "browse";
            if (l.isFswm(_)) return o.default.createElement(o.default.Fragment, null, v && o.default.createElement(a.MediaActions, null, o.default.createElement(t.ViewFileButton, {
                isVisible: E || m || S,
                onClick: R
            })), !v && o.default.createElement(a.MediaActions, null, o.default.createElement(u.FilesViewOverflowMenu, {
                canDisplayFolderSizes: i,
                file: _,
                getOverflowMenuActions: h,
                isResponsive: !!f,
                showBorders: S,
                thumbStore: y,
                viewportTopOffset: O
            })));
            var L = {
                file: _,
                onShowShare: P,
                shareButtonLabel: T,
                showShareButton: F
            };
            return v ? o.default.createElement(a.MediaActions, null, l.isFile(_) && !w && !d.shouldShowSplitShare(D, A, _) && o.default.createElement(p.ShareButton, r.__assign({}, L, {
                isVisible: !m && (E || S),
                isSearchMode: g,
                useSearchSuccessBanner: C
            })), !w && d.shouldShowSplitShare(D, A, _) && o.default.createElement(c.SplitShareButton, r.__assign({}, L, {
                context: {
                    surface: N
                },
                file: _,
                isVisible: !m && (E || S),
                onDropdownClose: this.onActionDropdownClose,
                onDropdownOpen: this.onActionDropdownOpen,
                onPresentInZoom: b,
                onShowShare: P,
                user: I,
                variant: "secondary"
            })), m || !S && !E ? null : o.default.createElement(s.ExtensionsMenu, {
                file: _,
                onDropdownClose: this.onActionDropdownClose,
                onDropdownOpen: this.onActionDropdownOpen,
                onPresentInZoom: b,
                telemetryContext: {
                    surface: N
                },
                user: this.props.user
            }), o.default.createElement(t.ViewFileButton, {
                isVisible: E || m || S,
                onClick: R
            })) : o.default.createElement(a.MediaActions, null, !w && !d.shouldShowSplitShare(D, A, _) && o.default.createElement(p.ShareButton, r.__assign({}, L, {
                isVisible: S && !m || this.state.isActionDropdownOpen,
                isSearchMode: this.props.isSearchMode,
                useSearchSuccessBanner: this.props.useSearchSuccessBanner
            })), !w && d.shouldShowSplitShare(D, A, _) && o.default.createElement(c.SplitShareButton, r.__assign({}, L, {
                onShowShare: P,
                isVisible: S && !m || this.state.isActionDropdownOpen,
                user: I,
                file: _,
                onDropdownOpen: this.onActionDropdownOpen,
                onDropdownClose: this.onActionDropdownClose,
                onPresentInZoom: b,
                context: {
                    surface: N
                },
                variant: "secondary"
            })), S && !m || this.state.isActionDropdownOpen ? o.default.createElement(s.ExtensionsMenu, {
                file: _,
                onDropdownClose: this.onActionDropdownClose,
                onDropdownOpen: this.onActionDropdownOpen,
                onPresentInZoom: b,
                telemetryContext: {
                    surface: N
                },
                user: this.props.user
            }) : null, n && o.default.createElement(u.FilesViewOverflowMenu, {
                canDisplayFolderSizes: i,
                file: _,
                getOverflowMenuActions: h,
                isResponsive: !!f,
                showBorders: S,
                thumbStore: y,
                viewportTopOffset: O
            }))
        }, n
    })(o.default.PureComponent);
    t.FileMediaActions = h
}), define("modules/clean/react/files_view/file_name_cell", ["require", "exports", "tslib", "external/classnames", "react", "retrieval-components/highlighted-truncated-string", "spectrum/dimensions", "spectrum/media_table", "modules/clean/browse_interface", "modules/clean/em_string", "modules/clean/filename_highlights", "modules/clean/filepath", "modules/clean/filetypes", "modules/clean/react/browse/models", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/file_snippets", "modules/clean/react/files_view/file_thumbnail", "modules/clean/react/files_view/name_input", "modules/clean/react/files_view/star", "modules/clean/react/files_view/types", "modules/clean/react/files_view/util", "modules/clean/react/retrieval_success_banner/util", "modules/clean/react/title_bubble", "modules/clean/user_education/react/user_education_effect", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b, T, F) {
    "use strict";

    function y(e, t, r, o) {
        if (o && o > O) {
            var n = (o - O) / t,
                i = Math.max(r, n - r);
            return c.Emstring.em_snippet(e, Math.floor(i), .5)
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), u = r.__importStar(u), t.FileSubtitle = function(e) {
        var t = e.file,
            r = e.renameState,
            o = e.renderAsLink,
            i = void 0 === o || o,
            a = e.showLocation,
            s = e.user,
            c = e.containerWidth,
            d = e.onClick,
            p = e.focusable;
        if (!E.isFile(t)) return n.default.createElement(n.default.Fragment, null, F._("Shared with you", {
            comment: "A subtitle noting that a search result is a file that is shared with the user (Specifically it is unmounted, meaning it is not located in their Dropbox folder hierarchy)"
        }));
        if (r || !a) return null;
        var _ = u.parent_dir(t.fq_path),
            h = "/" === _ ? l.get_browse_root_name(s) : _.slice(1);
        if (t.is_unmounted) return n.default.createElement(n.default.Fragment, null, F._("not added yet, in %(location)s", {
            comment: "Describes the parent directory of a file in a list of search results."
        }).format({
            location: h
        }));
        var f = F._("in %(location)s", {
                comment: "Describes the parent directory of a file in a list of search results."
            }).format({
                location: h
            }),
            m = y(f, I, C, c);
        if (!i || t.isDeleted) return n.default.createElement(n.default.Fragment, null, m);
        var S = l.browse_uri_for_fq_path(s, _);
        return n.default.createElement("a", {
            className: "brws-file-name-cell-location",
            href: S.toString(),
            onClick: d,
            tabIndex: p ? 0 : -1
        }, m)
    };
    var C = 6,
        I = 12,
        O = 32,
        P = function(e) {
            return e instanceof _.FileSharedWithMe
        },
        R = (function(e) {
            function l(t) {
                var r = e.call(this, t) || this;
                return r.handleNameInputSubmit = function(e) {
                    r.props.onRenameSubmit && E.isFile(r.props.file) && r.props.onRenameSubmit(r.props.file, e)
                }, r.handleNameInputCancel = function() {
                    r.props.onRenameCancel && E.isFile(r.props.file) && r.props.onRenameCancel(r.props.file)
                }, r.handleOnClickNameInput = function(e) {
                    e.stopPropagation()
                }, r.handleOnClickName = function(e) {
                    if (r.updateSearchSuccessBannerVisible(), r.props.selectionMethod === v.SelectionMethod.CLICK && r.props.onNameClick_clickSelectionMethod) return void r.props.onNameClick_clickSelectionMethod(e);
                    if (!r.props.isTextSelectable && !r.props.isSelectMode && E.shouldHandleClick(e)) {
                        if (e.preventDefault(), e.stopPropagation(), P(r.props.file)) return void(r.props.onOpenFileSharedWithMe && r.props.onOpenFileSharedWithMe(r.props.file));
                        r.props.onNavigateToFileOrFolder && r.props.onNavigateToFileOrFolder(r.props.file, {
                            actionSource: v.FilesViewActionSource.ROW_TITLE
                        })
                    }
                }, r.handleOnClickLocationLink = function(e) {
                    r.updateSearchSuccessBannerVisible();
                    var t = r.props,
                        o = t.file,
                        n = t.onLocationLinkClick,
                        i = !E.shouldHandleClick(e);
                    i || (e.preventDefault(), e.stopPropagation()), n && E.isFile(o) && n(o, i)
                }, r._setFilenameRef = function(e) {
                    return r._filenameDiv = e
                }, r.onStarClick = function(e) {
                    var t = r.props,
                        o = t.file,
                        n = t.onStarClick;
                    n && E.isFile(o) && n(o, e)
                }, r.state = {
                    shouldShowTooltip: r.shouldShowTooltip(t)
                }, r
            }
            return r.__extends(l, e), l.prototype.componentDidUpdate = function(e, t) {
                var r = this.shouldShowTooltip(this.props);
                r !== t.shouldShowTooltip && this.setState({
                    shouldShowTooltip: r
                })
            }, l.prototype.componentWillReceiveProps = function(e) {
                var t = this.shouldShowTooltip(e);
                t !== this.state.shouldShowTooltip && this.setState({
                    shouldShowTooltip: t
                })
            }, l.prototype.shouldShowTooltip = function(e) {
                if (P(e.file)) return !1;
                var t = this._filenameDiv,
                    r = u.filename(e.file.fq_path);
                return !!(e.showTooltip && t && (t.offsetWidth < t.scrollWidth || t.textContent !== r))
            }, l.prototype.updateSearchSuccessBannerVisible = function() {
                var e = this.props,
                    t = e.useSearchSuccessBanner,
                    r = e.isSearchMode;
                t && r && w.setSearchSuccessBannerVisible()
            }, l.prototype.renderScreenReaderExtraInfo = function() {
                var e = [],
                    t = this.props,
                    r = t.file,
                    o = t.isSelected;
                if (E.isFile(r) && r.isDeleted && e.push(F._("Deleted")), o && e.push(F._("Selected")), E.isFile(r) && r.is_dir && (r.type === p.FileTypes.SHARED_FOLDER ? _.File.isReadOnlySharedFolder(r) ? e.push(F._("Read-only shared folder")) : e.push(F._("Shared folder")) : r.type === p.FileTypes.TEAM_SHARED_FOLDER ? _.File.isReadOnlySharedFolder(r) ? e.push(F._("Read-only team shared folder")) : e.push(F._("Team shared folder")) : e.push(F._("Folder"))), e.length > 0) return n.default.createElement("span", {
                    className: "ax-visually-hidden"
                }, "" + e.join(" "))
            }, l.prototype.splitTruncatedParts = function(e, t) {
                for (var r = 0; r < e.length && e.charAt(r) === t.charAt(r);) ++r;
                return r === e.length || "…" !== e.charAt(r) ? [e] : [e.substring(0, r), e.substring(r + 1)]
            }, l.prototype.getHighlightedSpan = function(e, t) {
                var r = E.getFilename(t),
                    o = this.splitTruncatedParts(e, r);
                if (1 === o.length) return E.isFile(t) && !t.highlight_spans ? d.highlightMatchReact(e, t.filename_highlights) : d.highlightReactFromHighlightSpans(e, t.highlight_spans);
                var i, a;
                return E.isFile(t) && !t.highlight_spans ? (i = d.highlightMatchReact(r, t.filename_highlights, 0, o[0].length), a = d.highlightMatchReact(r, t.filename_highlights, r.lastIndexOf(o[1]))) : (i = d.highlightReactFromHighlightSpans(r, t.highlight_spans, 0, o[0].length), a = d.highlightReactFromHighlightSpans(r, t.highlight_spans, r.lastIndexOf(o[1]))), n.default.createElement("span", null, i, "…", a)
            }, l.prototype.getHighlightedSpansForHighlightedTruncatedString = function(e, t) {
                if (E.isFile(t) || P(t)) {
                    if (t.highlight_spans) return t.highlight_spans.map(function(e) {
                        return {
                            string: e.highlight_str,
                            isHighlighted: e.is_highlighted
                        }
                    });
                    if (E.isFile(t) && t.filename_highlights) {
                        return d.highlightMatchSections(e, t.filename_highlights).map(function(e) {
                            return {
                                string: e.text,
                                isHighlighted: e.isHighlighted
                            }
                        })
                    }
                }
            }, l.prototype.renderTitle = function(e) {
                var t = this.props,
                    r = t.file,
                    o = t.renameState,
                    a = t.user,
                    s = t.hrefForFile,
                    l = t.expHighlightedTruncatedString;
                if (o === v.RenameState.SAVING_INPUT) return n.default.createElement("span", {
                    role: "status"
                }, F._("Renaming…"));
                var c, d = E.getFilename(r);
                if (l) c = n.default.createElement(i.HighlightedTruncatedString, {
                    text: d,
                    className: "brws-file-name-element",
                    fontSize: 14,
                    availableWidth: e,
                    highlightSpans: this.getHighlightedSpansForHighlightedTruncatedString(d, r),
                    cellBuffer: 3
                });
                else {
                    var u = y(d, 14, 3, e);
                    if (c = this.props.showHighlights && (r.highlight_spans || E.isFile(r) && r.filename_highlights) ? this.getHighlightedSpan(u, r) : n.default.createElement("span", null, u), c = n.default.createElement("div", {
                            className: "brws-file-name-element",
                            ref: this._setFilenameRef
                        }, c), this.state.shouldShowTooltip) {
                        var p = d.length <= h.FILE_NAME_TOOLTIP_MAX_LINE_LENGTH ? d : n.default.createElement("div", {
                            className: "brws-file-name-cell-tooltip"
                        }, d);
                        c = n.default.createElement(b.TitleBubble, {
                            content: p,
                            position: b.TitleBubble.POSITIONS.BOTTOM,
                            className: "list-label__title-bubble"
                        }, c)
                    }
                }
                if (E.isFile(r) && s && !(r.is_unmounted || r.isDeleted) || P(r)) {
                    var _ = P(r) ? r.href : s(a, r);
                    c = n.default.createElement("a", {
                        className: "brws-file-name-cell-filename",
                        href: _,
                        onClick: this.handleOnClickName,
                        tabIndex: this.props.isSelected ? 0 : -1
                    }, c)
                }
                return this.props.showUserEducationEffects ? n.default.createElement(T.UserEducationEffect, {
                    containerName: "FileItemRow",
                    name: this.props.userEducationEffectName || "FileNameLabel",
                    useSpan: !0
                }, c) : c
            }, l.prototype.renderContent = function(e) {
                var r, o = void 0 === e ? {} : e,
                    i = o.width,
                    a = o.hasMediaActions,
                    l = this.props,
                    c = l.file,
                    d = l.renameState,
                    p = l.showLocation,
                    _ = l.showSnippets,
                    h = l.snippetRows,
                    m = l.user;
                if (E.isFile(c) && d === v.RenameState.PENDING_INPUT) {
                    var g = c.is_dir ? F._("Rename directory…") : F._("Rename file…");
                    r = n.default.createElement(S.NameInput, {
                        defaultValue: u.filename(c.fq_path),
                        label: g,
                        onClick: this.handleOnClickNameInput,
                        onSubmit: this.handleNameInputSubmit,
                        onCancel: this.handleNameInputCancel,
                        isDir: c.is_dir
                    })
                } else if (r = [n.default.createElement(s.MediaCellText, {
                        key: "title",
                        highlight: this.props.isHovered
                    }, n.default.createElement("div", {
                        className: "brws-file-name-cell-title-container"
                    }, this.renderTitle(i), this.renderScreenReaderExtraInfo(), this.renderStar())), n.default.createElement(s.MediaCellText, {
                        highlight: this.props.isHovered,
                        key: "subtitle",
                        variant: "subtitle"
                    }, n.default.createElement(t.FileSubtitle, {
                        containerWidth: i,
                        file: c,
                        onClick: this.handleOnClickLocationLink,
                        renameState: d,
                        renderAsLink: !0,
                        showLocation: p,
                        user: m,
                        focusable: this.props.isSelected
                    }))], _) {
                    var w = i ? {
                        width: a ? i - 48 : i
                    } : void 0;
                    r.push(n.default.createElement(s.MediaCellText, {
                        highlight: this.props.isHovered,
                        key: "snippets",
                        variant: "subtitle",
                        style: w
                    }, n.default.createElement(f.FileSnippets, {
                        snippets: c.snippets,
                        lineClamp: h
                    })))
                }
                return r
            }, l.prototype.renderStar = function() {
                var e = this.props,
                    t = e.file,
                    r = e.renameState,
                    o = e.user,
                    i = e.showStar,
                    a = e.responsive,
                    s = a && !a.isMatchedMedium && !a.isMatchedLarge;
                return i && !r ? n.default.createElement(g.StarContainer, {
                    item: t,
                    user: o,
                    className: "brws-file-name-cell-star",
                    onStarClick: this.onStarClick,
                    isReadOnly: s,
                    tabIndex: -1
                }) : null
            }, l.prototype.render = function() {
                var e = this,
                    t = this.props,
                    i = t.mediaActions,
                    l = t.file,
                    c = t.thumbStore,
                    d = t.showCDMUserEducationEffects,
                    u = t.expHighlightedTruncatedString,
                    p = t.fileNameCellWidth,
                    _ = t.height,
                    h = o.default("brws-file-name-cell-text", "brws-vertically-center", {
                        "brws-file-name-cell-text-rename": !!this.props.renameState
                    }),
                    f = n.default.createElement(m.FileThumbnail, {
                        file: l,
                        thumbStore: c,
                        showCDMUserEducationEffects: d
                    }),
                    S = {
                        icon: f,
                        style: {
                            minHeight: _ - 1
                        }
                    };
                return this.props.shouldTruncateMiddleFilename ? P(l) && u && p ? n.default.createElement(s.MediaCell, r.__assign({}, S), n.default.createElement("div", {
                    className: "brws-file-name-container"
                }, n.default.createElement("div", {
                    className: h
                }, this.renderContent({
                    width: p,
                    hasMediaActions: !!i
                }))), i) : n.default.createElement(s.MediaCell, r.__assign({}, S), n.default.createElement(a.Dimensions, {
                    className: "brws-file-name-container"
                }, function(t) {
                    var r = t.width;
                    return n.default.createElement("div", {
                        className: "brws-file-name-container"
                    }, n.default.createElement("div", {
                        className: h
                    }, e.renderContent({
                        width: r,
                        hasMediaActions: !!i
                    })))
                }), i) : n.default.createElement(s.MediaCell, r.__assign({}, S), n.default.createElement("div", {
                    className: h
                }, this.renderContent()), i)
            }, l.defaultProps = {
                selectionMethod: v.SelectionMethod.CHECKBOX
            }, l
        })(n.default.Component);
    t.FileNameCell = R
}), define("modules/clean/react/files_view/file_row", ["require", "exports", "tslib", "external/classnames", "external/react-dom", "react", "spectrum/checkbox", "spectrum/media_table", "modules/clean/cloud_docs/constants", "modules/clean/filepath", "modules/clean/react/browse/models", "modules/clean/react/files_view/double_click", "modules/clean/react/files_view/file_media_actions", "modules/clean/react/files_view/file_name_cell", "modules/clean/react/files_view/keyboard_focus", "modules/clean/react/files_view/types", "modules/clean/react/files_view/util", "modules/clean/react/selectable_list", "modules/clean/react/title_bubble", "modules/clean/user_education/react/user_education_effect", "modules/core/browser", "modules/core/exception", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v, E, w, b) {
    "use strict";

    function T(e) {
        switch (c.split_filename(e.fq_path).ext) {
            case l.PaperFileTypes.PAPER:
            case l.PaperFileTypes.PAPER_TEMPLATE:
                return !0;
            default:
                return !1
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n), i = r.__importDefault(i), c = r.__importStar(c), E = r.__importStar(E), w = r.__importStar(w);
    var F = function() {
            return i.default.createElement("span", {
                "aria-hidden": !0
            }, "--")
        },
        y = function() {
            return i.default.createElement("svg", {
                width: "20px",
                height: "20px",
                viewBox: "0 0 20 20",
                version: "1.1"
            }, i.default.createElement("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd"
            }, i.default.createElement("g", {
                id: "Group",
                transform: "translate(2.000000, 2.000000)"
            }, i.default.createElement("circle", {
                id: "Oval-65",
                cx: "8",
                cy: "8",
                r: "8"
            }), i.default.createElement("path", {
                d: "M8,13 L8,14.5 L5.5,12.5 L8,10.5 L8,12 C10.209139,12 12,10.209139 12,8 C12,6.93104698 11.5806921,5.96002857 10.8975817,5.24245012 L11.4674192,4.39763124 C12.4121861,5.30722218 13,6.58496544 13,8 C13,10.7614237 10.7614237,13 8,13 Z M8,3 L8,1.5 L10.5,3.5 L8,5.5 L8,4 C5.790861,4 4,5.790861 4,8 C4,8.96511539 4.34180174,9.8503987 4.91095749,10.5414022 L4.33270318,11.3986995 C3.5056268,10.5066799 3,9.3123877 3,8 C3,5.23857625 5.23857625,3 8,3 Z",
                id: "Oval-67",
                fill: "#637282"
            }))))
        },
        C = function() {
            return i.default.createElement("svg", {
                width: "20px",
                height: "20px",
                viewBox: "0 0 20 20",
                version: "1.1"
            }, i.default.createElement("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd"
            }, i.default.createElement("g", {
                id: "icon-warning",
                fill: "#637282"
            }, i.default.createElement("path", {
                d: "M13.9298189,16.125 C16.4624689,16.125 17.5138484,14.3377448 16.2785476,12.1337797 L12.238298,4.92535765 C11.002815,2.72106753 8.99951926,2.72139251 7.76421846,4.92535765 L3.7239688,12.1337797 C2.48848585,14.3380698 3.54098311,16.125 6.07269759,16.125 L13.9298189,16.125 Z M11.002944,14.0995516 L8.99957244,14.0995516 L8.99957244,12.0741033 L11.002944,12.0741033 L11.002944,14.0995516 L11.002944,14.0995516 Z M11.002944,11.0613791 L8.99957244,11.0613791 L8.99957244,7.01048239 L11.002944,7.01048239 L11.002944,11.0613791 L11.002944,11.0613791 Z",
                id: "Shape"
            }))))
        },
        I = function() {
            return i.default.createElement("div", {
                className: "error-tooltip"
            }, i.default.createElement("div", {
                className: "error-tooltip__title"
            }, b._("This folder is too large")), b._("We can’t calculate the full size of this folder right now. This can happen when there are a large number of files inside of the folder or if the request takes too long."))
        };
    t.isCloudDocProviderStored = T;
    var O = function(e) {
            var t = e.file;
            if (!t.is_dir) return t.is_cloud_doc && T(t) ? i.default.createElement(F, null) : i.default.createElement("span", null, t.size);
            switch (t.fetchFolderSizesStatus) {
                case f.FetchFolderSizeState.LOADING:
                    return i.default.createElement("span", {
                        className: "item-cell-title item-cell-title--loading"
                    }, i.default.createElement("span", {
                        className: "ax-visually-hidden"
                    }, b._("Calculating folder sizes...")), i.default.createElement(y, null), b._("Calculating..."));
                case f.FetchFolderSizeState.ERROR:
                    return i.default.createElement("span", {
                        className: "item-cell-title"
                    }, i.default.createElement(g.TitleBubble, {
                        content: i.default.createElement(I, null),
                        position: g.TitleBubble.POSITIONS.TOP,
                        isTargetPositionFixed: !1
                    }, i.default.createElement("span", {
                        className: "item-cell-title item-cell-title--error"
                    }, i.default.createElement("span", {
                        className: "ax-visually-hidden"
                    }, b._("Error in calculating folder sizes")), i.default.createElement(C, null))));
                case f.FetchFolderSizeState.COMPLETE:
                    return i.default.createElement("span", {
                        className: "item-cell-title"
                    }, t.size);
                default:
                    return i.default.createElement(F, null)
            }
        },
        P = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.checkboxRef = null, t.handleClick = function(e) {
                    if (!t.shouldHandleClick(e)) return void e.preventDefault();
                    if (t.props.selectionMethod !== f.SelectionMethod.CLICK) {
                        if (t.props.isSelectMode && t.props.onDeselect && t.props.onSelect) {
                            e.preventDefault();
                            var r = t.props.file.fq_path;
                            return void(t.props.isSelected ? t.props.onDeselect(r, e.shiftKey) : t.props.onSelect(r, e.shiftKey ? S.SelectOptions.EXTEND : S.SelectOptions.DEFAULT))
                        }
                        t.handleOpenNewTabOrNavigate(e, f.FilesViewActionSource.ROW_SINGLE_CLICK)
                    } else if (t.props.onSelect) {
                        var o = S.SelectOptions.ONLY;
                        e.shiftKey ? o = S.SelectOptions.EXTEND : (e.ctrlKey || e.metaKey) && (o = S.SelectOptions.DEFAULT), t.props.onSelect(t.props.file.fq_path, o)
                    }
                }, t.handleDoubleClick = function(e) {
                    if (!t.shouldHandleClick(e)) return void e.preventDefault();
                    t.handleOpenNewTabOrNavigate(e, f.FilesViewActionSource.ROW_DOUBLE_CLICK)
                }, t.isCheckboxNode = function(e) {
                    var r = t.getCheckboxNode();
                    return !!r && r.contains(e)
                }, t.handleOpenFileClick = function(e) {
                    return t.handleOpenNewTabOrNavigate(e, f.FilesViewActionSource.ROW_PREVIEW_ICON)
                }, t.handleTitleClick = function(e) {
                    return t.handleOpenNewTabOrNavigate(e, f.FilesViewActionSource.ROW_TITLE)
                }, t.handleOpenNewTabOrNavigate = function(e, r) {
                    if (0 === e.button) {
                        if (e.preventDefault(), e.stopPropagation(), m.hasModifierKey(e)) {
                            var o = t.props,
                                n = o.file,
                                i = o.user,
                                a = o.hrefForFile;
                            return void E.open_tab(a(i, n))
                        }
                        t.props.onNavigateToFileOrFolder(t.props.file, {
                            actionSource: r
                        })
                    }
                }, t.handleChangeCheckbox = function(e, r) {
                    if (t.props.onSelect && t.props.onDeselect) {
                        var o = t.props.file.fq_path;
                        "checked" === e ? t.props.onSelect(o, r.shiftKey ? S.SelectOptions.EXTEND : S.SelectOptions.DEFAULT) : t.props.onDeselect(o, r.shiftKey)
                    }
                }, t.handleCheckboxTouchTargetClick = function(e) {
                    if (t.isCheckboxNode(e.target)) return void e.preventDefault();
                    if (!t.props.isCheckboxDisabled && t.props.onDeselect && t.props.onSelect) {
                        e.preventDefault();
                        var r = t.props.file.fq_path;
                        t.props.isSelected ? t.props.onDeselect(r, e.shiftKey) : t.props.onSelect(r, e.shiftKey ? S.SelectOptions.EXTEND : S.SelectOptions.DEFAULT)
                    }
                }, t.handleDragEnter = function(e) {
                    var r = t.props,
                        o = r.file,
                        n = r.isSelected,
                        i = r.isActiveDropTarget;
                    t.props.onDragEnter(e, o, !!n, !!i)
                }, t.handleDragStart = function(e) {
                    var r = t.props,
                        o = r.file,
                        n = r.isSelected,
                        i = r.onDragStart,
                        a = r.onSelect;
                    i && (n ? i(e) : (a && a(o.fq_path), i(e, [o])))
                }, t.onKeyboardFocus = function() {
                    var e = t.props,
                        r = e.rowFocusable,
                        o = e.isSelected,
                        n = e.onSelect;
                    if (r && n && !o) {
                        n(t.props.file.fq_path)
                    }
                }, t.setCheckboxRef = function(e) {
                    t.checkboxRef = e
                }, t.getCheckboxNode = function() {
                    return t.checkboxRef && n.findDOMNode(t.checkboxRef)
                }, t.onShowShare = function() {
                    t.props.onShowShare(t.props.file, "BROWSE_FILE_ROW")
                }, t.onPresentInZoom = function() {
                    t.props.onPresentInZoom && t.props.onPresentInZoom(t.props.file)
                }, t.getAriaLabelForColumn = function(e, t) {
                    switch (e.sortField) {
                        case f.SortField.FILENAME:
                            return e.label + " " + c.filename(t.fq_path);
                        case f.SortField.MODIFIED:
                            return e.label + " " + t.ago;
                        case f.SortField.CATEGORY:
                            return e.label + " " + d.File.getCategoryDescription(t);
                        case f.SortField.EXTENSION:
                            return e.label + " " + d.File.getExtension(t);
                        case f.SortField.SIZE:
                            return e.label + " " + t.size;
                        case f.SortField.SHARED_WITH:
                        default:
                            return
                    }
                }, t.rowChildFn = function(e) {
                    var r, n = e.isHovered,
                        l = t.props,
                        c = l.isCompactMode,
                        d = l.isPinned,
                        u = l.isSelectMode,
                        p = l.isSelected,
                        _ = l.showUserEducationEffects,
                        h = l.visibleColumns;
                    if (!d) {
                        var f = !(n || p || u || c);
                        r = i.default.createElement(a.Checkbox, {
                            disabled: t.props.isCheckboxDisabled,
                            checked: p ? "checked" : "unchecked",
                            className: o.default("brws-checkbox", {
                                "brws-checkbox-checked": p
                            }),
                            onChange: t.handleChangeCheckbox,
                            ref: t.setCheckboxRef,
                            variant: f ? "invisible" : "default",
                            ariaLabel: b._("Select item"),
                            tabIndex: p ? 0 : -1
                        }), _ && (r = i.default.createElement(v.UserEducationEffect, {
                            containerName: "FileItemRow",
                            name: "FirstFileSelectCheckbox",
                            useSpan: !0
                        }, r))
                    }
                    return [i.default.createElement(s.MediaCell, {
                        key: "checkboxCell",
                        className: "brws-checkbox-cell"
                    }, i.default.createElement("div", {
                        className: "brws-vertically-center brws-file-row-checkbox-target",
                        onClick: t.handleCheckboxTouchTargetClick,
                        "aria-controls": "brws-sidebar-view"
                    }, r))].concat(h.map(function(e, r) {
                        return t.renderCell({
                            isHovered: n,
                            isLastCell: r === h.length - 1,
                            sortField: e.sortField,
                            renderCell: e.renderCell
                        })
                    }))
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                var t = this;
                (this.props.isFocused && !e.isFocused || this.props.isFocused && this.props.isSelected && !e.isSelected) && this.checkboxRef && Promise.resolve().then(function() {
                    var e = t.getCheckboxNode();
                    e && e.focus()
                })
            }, t.prototype.shouldHandleClick = function(e) {
                return !e.defaultPrevented && !this.isCheckboxNode(e.target)
            }, t.prototype.renderModifiedCell = function(e, t, r) {
                var o = r && e.agoFromLastActionByUserTs,
                    n = e.is_dir && !this.props.isSearchMode ? void 0 : o ? e.agoFromLastActionByUserTs : e.ago,
                    a = o ? r : e.last_modified_name || void 0,
                    l = a && b._("by %(modified_by)s", {
                        comment: "name of the person that modified the file"
                    }).format({
                        modified_by: a
                    });
                return i.default.createElement(s.MediaCell, {
                    className: "brws-file-modified-at-cell",
                    key: "modifiedAt",
                    subtitle: l,
                    title: n || i.default.createElement(F, null)
                }, t)
            }, t.prototype.renderCell = function(e) {
                var t = e.isHovered,
                    r = e.isLastCell,
                    o = e.sortField,
                    n = e.renderCell,
                    a = this.props,
                    l = a.arePostTTIModulesLoaded,
                    c = a.canDisplayFolderSizes,
                    u = a.extensionsFeatureFlags,
                    h = a.file,
                    m = a.getOverflowMenuActions,
                    S = a.hasResponsiveOverflowMenu,
                    g = a.hrefForFile,
                    v = a.isCompactMode,
                    E = a.isSearchMode,
                    b = a.isSelectMode,
                    T = a.isSelected,
                    y = a.isSharingDisabled,
                    C = a.onLocationLinkClick,
                    I = a.onNavigateToFileOrFolder,
                    P = a.onRenameCancel,
                    R = a.onRenameSubmit,
                    D = a.onStarClick,
                    A = a.renameState,
                    N = a.responsive,
                    L = a.shareButtonLabel,
                    x = a.sharingServiceInfo,
                    M = a.showCDMUserEducationEffects,
                    U = a.showShareButton,
                    k = a.showUserEducationEffects,
                    V = a.thumbStore,
                    B = a.useSearchSuccessBanner,
                    H = a.user,
                    W = a.userEducationEffectName,
                    q = a.viewportTopOffset,
                    G = a.expHighlightedTruncatedString,
                    z = a.showSnippets,
                    j = a.snippetRows,
                    Y = a.height,
                    K = a.selectionMethod,
                    Q = a.filteredContactName,
                    J = r && !(v && A),
                    X = J ? i.default.createElement(p.FileMediaActions, {
                        arePostTTIModulesLoaded: l,
                        canDisplayFolderSizes: c,
                        extensionsFeatureFlags: u,
                        file: h,
                        getOverflowMenuActions: m,
                        hasResponsiveOverflowMenu: !!S,
                        isCompactMode: !!v,
                        isHovered: t,
                        isSearchMode: !!E,
                        isSelectMode: !!b,
                        isSelected: !!T,
                        isSharingDisabled: !!y,
                        onOpenFileClick: this.handleOpenFileClick,
                        onPresentInZoom: this.onPresentInZoom,
                        onShowShare: this.onShowShare,
                        shareButtonLabel: L,
                        sharingServiceInfo: x,
                        showShareButton: U,
                        thumbStore: V,
                        useSearchSuccessBanner: B,
                        user: H,
                        viewportTopOffset: q
                    }) : void 0;
                if (n) return n({
                    file: h,
                    mediaActions: X
                });
                switch (o) {
                    case f.SortField.FILENAME:
                        return i.default.createElement(_.FileNameCell, {
                            key: "fileName",
                            user: H,
                            file: h,
                            isHovered: t,
                            isSelectMode: b,
                            isSelected: T,
                            mediaActions: X,
                            onNavigateToFileOrFolder: I,
                            onLocationLinkClick: C,
                            onRenameCancel: P,
                            onRenameSubmit: R,
                            renameState: A,
                            responsive: N,
                            showCDMUserEducationEffects: M,
                            showTooltip: l,
                            showHighlights: E,
                            showLocation: E,
                            showUserEducationEffects: k,
                            userEducationEffectName: W,
                            showStar: l && !d.File.isNoAccessSharedFolder(h),
                            onStarClick: D,
                            thumbStore: V,
                            shouldTruncateMiddleFilename: l,
                            hrefForFile: g,
                            expHighlightedTruncatedString: G,
                            showSnippets: z,
                            snippetRows: j,
                            height: Y,
                            selectionMethod: K,
                            onNameClick_clickSelectionMethod: this.handleTitleClick,
                            isSearchMode: !!E,
                            useSearchSuccessBanner: B
                        });
                    case f.SortField.RELEVANCE:
                    case f.SortField.MODIFIED:
                        return this.renderModifiedCell(h, X, Q);
                    case f.SortField.SHARED_WITH:
                        return i.default.createElement(s.MediaCell, {
                            className: "brws-file-shared-with-cell",
                            key: "sharedWith"
                        }, this.props.renderSharedWithController(h, this.props.rowFocusable ? 0 : void 0), X);
                    case f.SortField.CATEGORY:
                        return i.default.createElement(s.MediaCell, {
                            className: "brws-file-category-cell",
                            key: "category",
                            title: d.File.getCategoryDescription(h)
                        }, X);
                    case f.SortField.EXTENSION:
                        return i.default.createElement(s.MediaCell, {
                            className: "brws-file-extension-cell",
                            key: "extension",
                            title: d.File.getExtension(h)
                        }, X);
                    case f.SortField.SIZE:
                        return i.default.createElement(s.MediaCell, {
                            className: "brws-file-size-cell",
                            key: "size",
                            title: i.default.createElement(O, {
                                file: h
                            })
                        }, X);
                    default:
                        return w.reportException({
                            err: new Error("renderCell function for " + o + "is not implemented"),
                            severity: w.SEVERITY.NONCRITICAL,
                            tags: ["js:browse"]
                        }), i.default.createElement(F, null)
                }
            }, t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.file,
                    a = t.isActiveDropTarget,
                    l = t.isAvailableDropTarget,
                    c = t.isPinned,
                    p = t.isSearchMode,
                    _ = t.isSelected,
                    m = t.renameState,
                    S = t.rowIndex,
                    g = t.topOffset,
                    v = t.selectionMethod,
                    E = t.visibleColumns,
                    w = o.default("brws-file-row", {
                        "brws-file-row-selected": _,
                        "brws-file-row-deleted": n.isDeleted,
                        "brws-file-row-droppable": l && !a,
                        "brws-file-row-dragover": a,
                        "brws-file-row-no-access": d.File.isNoAccessSharedFolder(n),
                        "brws-file-row-pinned": c,
                        "brws-row-click-selection-method": v === f.SelectionMethod.CLICK
                    }),
                    b = a ? "dragover" : l && !a ? "droppable" : _ ? "selected" : "default",
                    T = !(m || p || d.File.isTeamMemberFolder(n) || d.File.isReadOnlySharedFolder(n) || d.File.isNoAccessSharedFolder(n)),
                    F = "";
                E.forEach(function(t) {
                    var r = e.getAriaLabelForColumn(t, n);
                    r && (F += r + ", ")
                });
                var y = r.__assign({
                        "aria-rowindex": void 0 !== S ? S + 1 : void 0,
                        className: w,
                        "data-filename": n.fq_path.split("/").slice(-1),
                        "aria-label": F,
                        onDragEnter: this.handleDragEnter,
                        variant: b
                    }, v === f.SelectionMethod.CLICK && {
                        "aria-controls": "brws-sidebar-view"
                    }),
                    C = this.props.selectionMethod === f.SelectionMethod.CLICK ? this.handleDoubleClick : void 0;
                return i.default.createElement(u.WithDoubleClick, {
                    onClick: this.handleClick,
                    onDoubleClick: C
                }, function(t) {
                    var o = t.onClick;
                    return i.default.createElement(h.WithKeyboardFocus, {
                        onKeyboardFocus: e.onKeyboardFocus
                    }, function(t) {
                        var n = t.onMouseDown,
                            a = t.onFocus;
                        return c ? i.default.createElement(s.MediaRow, r.__assign({}, y, {
                            onClick: o,
                            onMouseDown: n,
                            onFocus: a
                        }), e.rowChildFn) : i.default.createElement(s.CulledMediaRow, r.__assign({}, y, {
                            onClick: o,
                            draggable: T,
                            topOffset: g,
                            onDragStart: e.handleDragStart,
                            onMouseDown: n,
                            onFocus: a
                        }), e.rowChildFn)
                    })
                })
            }, t.defaultProps = {
                isSelectionEmpty: !0,
                topOffset: 0,
                selectionMethod: f.SelectionMethod.CHECKBOX
            }, t
        })(i.default.PureComponent);
    t.FileRow = P
}), define("modules/clean/react/files_view/file_shared_with_me_row", ["require", "exports", "tslib", "external/classnames", "external/react-dom", "react", "spectrum/checkbox", "spectrum/media_table", "spectrum/util/raf_throttle", "modules/clean/react/files_view/double_click", "modules/clean/react/files_view/file_media_actions", "modules/clean/react/files_view/file_name_cell", "modules/clean/react/files_view/keyboard_focus", "modules/clean/react/files_view/types", "modules/clean/react/files_view/util", "modules/clean/react/selectable_list", "modules/clean/user_education/react/user_education_effect", "modules/core/browser", "modules/core/exception", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S, g, v) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n), i = r.__importDefault(i), S = r.__importStar(S), g = r.__importStar(g);
    var E = function() {
            return i.default.createElement("span", {
                "aria-hidden": !0
            }, "--")
        },
        w = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.setRef = function(e) {
                    r.brwsFilenameContainerDiv = e
                }, r.checkboxRef = null, r.handleWindowResize = function() {
                    r.throttledWindowResize.request()
                }, r.handleResize = function() {
                    if (r.brwsFilenameContainerDiv) {
                        var e = r.state.brwsFilenameContainerDivWidth,
                            t = r.brwsFilenameContainerDiv.getBoundingClientRect().width;
                        t && t !== e && r.setState({
                            brwsFilenameContainerDivWidth: t
                        })
                    }
                }, r.handleClick = function(e) {
                    if (r.props.expSelectableFswm) {
                        if (e.defaultPrevented || r.isCheckboxNode(e.target)) return void e.preventDefault();
                        if (r.props.selectionMethod === _.SelectionMethod.CLICK && r.props.onSelect) {
                            var t = f.SelectOptions.ONLY;
                            return e.shiftKey ? t = f.SelectOptions.EXTEND : (e.ctrlKey || e.metaKey) && (t = f.SelectOptions.DEFAULT), void r.props.onSelect(r.props.file.file_id, t)
                        }
                        if (r.props.isSelectMode && r.props.onDeselect && r.props.onSelect) {
                            e.preventDefault();
                            var o = r.props.file.file_id;
                            return void(r.props.isSelected ? r.props.onDeselect(o, e.shiftKey) : r.props.onSelect(o, e.shiftKey ? f.SelectOptions.EXTEND : f.SelectOptions.DEFAULT))
                        }
                        r.handleOpenNewTabOrNavigate(e)
                    } else if (0 === e.button) {
                        if (e.preventDefault(), e.stopPropagation(), r.props.selectionMethod === _.SelectionMethod.CLICK && r.props.onSelect) return;
                        r.handleOpenNewTabOrNavigate(e)
                    }
                }, r.handleDoubleClick = function(e) {
                    if (e.defaultPrevented || r.isCheckboxNode(e.target)) return void e.preventDefault();
                    r.handleOpenNewTabOrNavigate(e)
                }, r.handleOpenNewTabOrNavigate = function(e) {
                    var t = r.props.file;
                    0 === e.button && (e.preventDefault(), e.stopPropagation(), h.hasModifierKey(e) ? S.open_tab(t.href) : r.props.onOpenFileSharedWithMe(t))
                }, r.getCheckboxNode = function() {
                    return r.checkboxRef && n.findDOMNode(r.checkboxRef)
                }, r.isCheckboxNode = function(e) {
                    var t = r.getCheckboxNode();
                    return !!t && t.contains(e)
                }, r.handleChangeCheckbox = function(e, t) {
                    if (r.props.onSelect && r.props.onDeselect) {
                        var o = r.props.file.file_id;
                        "checked" === e ? r.props.onSelect(o, t.shiftKey ? f.SelectOptions.EXTEND : f.SelectOptions.DEFAULT) : r.props.onDeselect(o, t.shiftKey)
                    }
                }, r.onKeyboardFocus = function() {
                    var e = r.props,
                        t = e.rowFocusable,
                        o = e.isSelected,
                        n = e.onSelect;
                    if (t && n && !o) {
                        n(r.props.file.file_id)
                    }
                }, r.setCheckboxRef = function(e) {
                    r.checkboxRef = e
                }, r.handleCheckboxTouchTargetClick = function(e) {
                    if (r.isCheckboxNode(e.target)) return void e.preventDefault();
                    if (!r.props.isCheckboxDisabled && r.props.onDeselect && r.props.onSelect) {
                        e.preventDefault();
                        var t = r.props.file.file_id;
                        r.props.isSelected ? r.props.onDeselect(t, e.shiftKey) : r.props.onSelect(t, e.shiftKey ? f.SelectOptions.EXTEND : f.SelectOptions.DEFAULT)
                    }
                }, r.rowChildFn = function(e) {
                    var t = e.isHovered,
                        n = r.props,
                        l = n.isCompactMode,
                        c = n.isSelectMode,
                        d = n.isSelected,
                        u = n.showUserEducationEffects,
                        p = n.visibleColumns,
                        _ = null;
                    if (r.props.expSelectableFswm) {
                        var h = !(t || d || c || l);
                        _ = i.default.createElement(a.Checkbox, {
                            disabled: r.props.isCheckboxDisabled,
                            checked: d ? "checked" : "unchecked",
                            className: o.default("brws-checkbox", {
                                "brws-checkbox-checked": d
                            }),
                            onChange: r.handleChangeCheckbox,
                            ref: r.setCheckboxRef,
                            variant: h ? "invisible" : "default",
                            ariaLabel: v._("Select item"),
                            tabIndex: d ? 0 : -1
                        }), u && (_ = i.default.createElement(m.UserEducationEffect, {
                            containerName: "FileSharedWithMeRow",
                            name: "FirstFileSelectCheckbox",
                            useSpan: !0
                        }, _))
                    }
                    return [i.default.createElement(s.MediaCell, {
                        key: "checkboxCell",
                        className: "brws-checkbox-cell"
                    }, i.default.createElement("div", {
                        className: "brws-vertically-center brws-file-row-checkbox-target",
                        onClick: r.handleCheckboxTouchTargetClick
                    }, _))].concat(p.map(function(e, o) {
                        return r.renderCell({
                            isHovered: t,
                            sortField: e.sortField,
                            isLastCell: o === p.length - 1
                        })
                    }))
                }, r.state = {
                    brwsFilenameContainerDivWidth: void 0
                }, r.throttledWindowResize = new l.RafThrottle(function() {
                    return r.handleResize()
                }), r
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.handleResize(), window.addEventListener("resize", this.handleWindowResize)
            }, t.prototype.componentWillUnmount = function() {
                window.removeEventListener("resize", this.handleWindowResize)
            }, t.prototype.componentDidUpdate = function(e) {
                var t = this;
                (this.props.isFocused && !e.isFocused || this.props.isFocused && this.props.isSelected && !e.isSelected) && this.checkboxRef && Promise.resolve().then(function() {
                    var e = t.getCheckboxNode();
                    e && e.focus()
                })
            }, t.prototype.renderModifiedCell = function(e, t, r) {
                var o = r && e.agoFromLastActionByUserTs,
                    n = o ? e.agoFromLastActionByUserTs : e.ago,
                    a = o ? r : e.last_modified_name || void 0,
                    l = a && v._("by %(modified_by)s", {
                        comment: "name of the person that modified the file"
                    }).format({
                        modified_by: a
                    });
                return i.default.createElement(s.MediaCell, {
                    className: "brws-file-modified-at-cell",
                    key: "modifiedAt",
                    subtitle: l,
                    title: n || i.default.createElement(E, null)
                }, t)
            }, t.prototype.renderCell = function(e) {
                var t = e.isHovered,
                    o = e.sortField,
                    n = e.isLastCell,
                    a = this.props,
                    l = a.arePostTTIModulesLoaded,
                    c = a.file,
                    p = a.onOpenFileSharedWithMe,
                    h = a.getOverflowMenuActions,
                    f = a.thumbStore,
                    m = a.isCompactMode,
                    S = a.isSelectMode,
                    v = a.isSelected,
                    w = a.responsive,
                    b = a.user,
                    T = a.expHighlightedTruncatedString,
                    F = a.showSnippets,
                    y = a.snippetRows,
                    C = a.height,
                    I = a.selectionMethod,
                    O = a.hasResponsiveOverflowMenu,
                    P = a.useSearchSuccessBanner,
                    R = a.expSelectableFswm,
                    D = a.filteredContactName,
                    A = h(c, !1).some(function(e) {
                        return e.length > 0
                    }),
                    N = R && n && !m && l && A,
                    L = N ? i.default.createElement(d.FileMediaActions, {
                        arePostTTIModulesLoaded: l,
                        canDisplayFolderSizes: !1,
                        file: c,
                        getOverflowMenuActions: h,
                        hasResponsiveOverflowMenu: !!O,
                        isCompactMode: !!m,
                        isHovered: t,
                        isSearchMode: !0,
                        isSelectMode: !!S,
                        isSelected: !!v,
                        isSharingDisabled: !0,
                        thumbStore: f,
                        useSearchSuccessBanner: P,
                        user: b,
                        onOpenFileClick: this.handleOpenNewTabOrNavigate
                    }) : void 0;
                switch (o) {
                    case _.SortField.FILENAME:
                        var x = {
                            file: c,
                            isHovered: t,
                            onOpenFileSharedWithMe: p,
                            isSelectMode: S,
                            isSelected: v,
                            responsive: w,
                            user: b,
                            thumbStore: f,
                            mediaActions: L,
                            shouldTruncateMiddleFilename: l,
                            showHighlights: !0,
                            showLocation: !0,
                            showStar: !1,
                            showSnippets: F,
                            snippetRows: y,
                            height: C,
                            selectionMethod: I,
                            onNameClick_clickSelectionMethod: this.handleOpenNewTabOrNavigate,
                            isSearchMode: !0,
                            useSearchSuccessBanner: P
                        };
                        if (T) {
                            var M = this.state.brwsFilenameContainerDivWidth;
                            return i.default.createElement("div", {
                                className: "brws-file-name-container",
                                ref: this.setRef
                            }, i.default.createElement(u.FileNameCell, r.__assign({}, x, {
                                expHighlightedTruncatedString: T,
                                fileNameCellWidth: M ? M - 64 : void 0
                            })))
                        }
                        return i.default.createElement(u.FileNameCell, r.__assign({
                            key: "fileName"
                        }, x));
                    case _.SortField.RELEVANCE:
                    case _.SortField.MODIFIED:
                        return this.renderModifiedCell(c, L, D);
                    case _.SortField.SIZE:
                        return i.default.createElement(s.MediaCell, {
                            className: "brws-file-size-cell",
                            key: "size",
                            title: c.size
                        }, L);
                    default:
                    case _.SortField.CATEGORY:
                    case _.SortField.EXTENSION:
                    case _.SortField.SHARED_WITH:
                        return g.reportException({
                            err: new Error("FileSharedWithMe.renderCell is not implemented for " + o),
                            severity: g.SEVERITY.NONCRITICAL,
                            tags: ["js:search"]
                        }), i.default.createElement(s.MediaCell, {
                            key: o,
                            title: i.default.createElement(E, null)
                        })
                }
            }, t.prototype.render = function() {
                var e, t = this,
                    r = this.props,
                    n = r.expSelectableFswm,
                    a = r.rowIndex,
                    l = r.topOffset,
                    d = r.selectionMethod,
                    u = r.isSelected,
                    h = r.rowFocusable,
                    f = d === _.SelectionMethod.CLICK ? this.handleDoubleClick : void 0,
                    m = o.default("brws-filesharedwithme-row", {
                        "brws-file-row-selected": u,
                        "brws-row-click-selection-method": d === _.SelectionMethod.CLICK
                    });
                return n && (e = h ? 0 : -1), i.default.createElement(c.WithDoubleClick, {
                    onClick: this.handleClick,
                    onDoubleClick: f
                }, function(r) {
                    var o = r.onClick;
                    return i.default.createElement(p.WithKeyboardFocus, {
                        onKeyboardFocus: t.onKeyboardFocus
                    }, function(r) {
                        var n = r.onMouseDown,
                            c = r.onFocus;
                        return i.default.createElement(s.CulledMediaRow, {
                            "aria-rowindex": void 0 !== a ? a + 1 : void 0,
                            className: m,
                            draggable: !1,
                            onClick: o,
                            topOffset: l,
                            variant: "default",
                            tabIndex: e,
                            onFocus: c,
                            onMouseDown: n
                        }, t.rowChildFn)
                    })
                })
            }, t.defaultProps = {
                selectionMethod: _.SelectionMethod.CHECKBOX
            }, t
        })(i.default.PureComponent);
    t.FileSharedWithMeRow = w
}), define("modules/clean/react/files_view/file_snippets", ["require", "exports", "tslib", "react", "modules/clean/filename_highlights", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/selectors"], function(e, t, r, o, n, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n);
    var s = (function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(n, e), n.prototype.render = function() {
            var e = this.props,
                r = e.snippets,
                n = e.lineClamp,
                s = {
                    maxHeight: i.SNIPPET_HEIGHT_PER_ROW * n,
                    WebkitLineClamp: n
                },
                l = a.getFirstValidSnippet(r);
            return l ? o.default.createElement("span", {
                className: "brws-file-snippets",
                style: s
            }, o.default.createElement(t.FileSnippet, {
                snippet: l
            })) : null
        }, n.defaultProps = {
            lineClamp: 3
        }, n
    })(o.default.PureComponent);
    t.FileSnippets = s, t.FileSnippet = function(e) {
        var t = e.snippet;
        return n.highlightReactFromAllHighlightSpans(t.highlight_spans || [])
    }
}), define("modules/clean/react/files_view/fixed_table_head", ["require", "exports", "tslib", "spectrum/vertically_fixed", "spectrum/table", "react"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), t.FixedTableHead = function(e) {
        var t = e.children,
            a = e.offsetHeight,
            s = e.style,
            l = void 0 === s ? {} : s,
            c = r.__rest(e, ["children", "offsetHeight", "style"]),
            d = void 0 === a ? l : r.__assign({
                flexBasis: a
            }, l);
        return i.default.createElement("thead", r.__assign({
            className: "mc-table-head mc-table-head-fixed brws-column-header",
            style: d
        }, c), i.default.createElement(o.VerticallyFixed, {
            tag: function(e) {
                var o = e.style;
                return i.default.createElement(n.TableRow, {
                    className: "mc-table-head-row mc-table-head-row-fixed",
                    style: r.__assign({
                        height: a
                    }, o),
                    role: "presentation"
                }, t)
            }
        }))
    }
}), define("modules/clean/react/files_view/internal_drag_status", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/icon/file_folder_icon"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n);
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                r = e.files,
                a = o.default("active", t);
            return n.default.createElement("div", {
                id: "drag-status",
                className: a
            }, n.default.createElement("div", {
                id: "drag-selection-status"
            }, r.slice(0, 4).map(function(e, t) {
                return e.thumbnail_url_tmpl ? n.default.createElement("img", {
                    key: t,
                    src: e.thumbnail_url_tmpl,
                    className: "icon icon" + t,
                    alt: ""
                }) : n.default.createElement(i.FileOrFolderIcon, {
                    key: t,
                    file: e,
                    className: "icon icon" + t
                })
            }), n.default.createElement("span", {
                className: "badge"
            }, r.length)))
        }, t
    })(n.default.PureComponent);
    t.InternalDragStatus = a
}), define("modules/clean/react/files_view/list", ["require", "exports", "tslib", "react", "modules/clean/react/browse/models", "modules/clean/react/files_view/culled_table_body", "modules/clean/react/files_view/drag_and_drop", "modules/clean/react/files_view/file_row", "modules/clean/react/files_view/file_shared_with_me_row", "modules/clean/react/files_view/keyboard_shortcuts", "modules/clean/react/files_view/new_folder_row", "modules/clean/react/files_view/paper_row", "modules/clean/react/files_view/selectors", "modules/clean/react/files_view/types", "modules/clean/react/files_view/user_defined_item_row"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o);
    var f = function() {},
        m = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleFileViewerUnmount = function() {
                    var e = t.props.selectedFiles.first();
                    e && t.props.onFocusFile(e.fq_path)
                }, t.getIsListEvent = function(e) {
                    return t.props.isSelectableListEvent() && (!(e.target instanceof Element) || "BUTTON" !== e.target.tagName)
                }, t.getSelectedFiles = function() {
                    return t.props.selectedFiles
                }, t.handleNavigateToFileOrFolder = function(e, o) {
                    t.props.onNavigateToFileOrFolder(e, r.__assign({}, o, {
                        onFileViewerUnmount: t.handleFileViewerUnmount
                    }))
                }, t.getActiveDropTarget = function() {
                    return t.props.activeDropTarget
                }, t.getIsDraggingInternalFiles = function() {
                    return !!t.props.isDraggingInternalFiles
                }, t.getIsDraggingExternalFiles = function() {
                    return !!t.props.isDraggingExternalFiles
                }, t.renderRow = function(e, r, i) {
                    if ("NewFolderRow" === e.type) return o.default.createElement(d.NewFolderRow, {
                        createNewFolderState: e.props.createNewFolderState,
                        isInsideMyTeamFolderTree: e.props.isInsideMyTeamFolderTree,
                        onCancel: t.props.onNewFolderCancel,
                        onSubmit: t.props.onNewFolderSubmit,
                        rowIndex: r,
                        topOffset: i
                    });
                    if ("PaperRow" === e.type) return o.default.createElement(u.PaperRow, {
                        paper: e.props.paper,
                        rowIndex: r,
                        topOffset: i,
                        user: t.props.user,
                        visibleColumns: e.props.visibleColumns,
                        onOpenPaper: t.props.onOpenPaper,
                        arePostTTIModulesLoaded: e.props.arePostTTIModulesLoaded,
                        expHighlightedTruncatedString: t.props.expHighlightedTruncatedString,
                        showSnippets: e.props.showSnippets,
                        snippetRows: e.props.snippetRows,
                        height: e.props.height,
                        selectionMethod: t.props.selectionMethod
                    });
                    if ("UserDefinedItemRow" === e.type) return o.default.createElement(h.UserDefinedItemRow, {
                        userDefinedItem: e.props.userDefinedItem,
                        rowIndex: r,
                        topOffset: i
                    });
                    var a = t.props.selection,
                        c = e.props.file instanceof n.File ? a.selected.last() === e.props.file.fq_path : a.selected.last() === e.props.file.file_id,
                        p = c || !a.selected.size && 0 === r;
                    if ("FileSharedWithMeRow" === e.type) return o.default.createElement(l.FileSharedWithMeRow, {
                        arePostTTIModulesLoaded: t.props.arePostTTIModulesLoaded,
                        file: e.props.file,
                        visibleColumns: t.props.visibleColumns,
                        isCompactMode: e.props.isCompactMode,
                        getOverflowMenuActions: t.props.getOverflowMenuActions,
                        hasResponsiveOverflowMenu: t.props.hasResponsiveOverflowMenu,
                        onOpenFileSharedWithMe: t.props.onOpenFileSharedWithMe,
                        rowIndex: r,
                        rowFocusable: p,
                        topOffset: i,
                        thumbStore: t.props.thumbStore,
                        user: t.props.user,
                        responsive: t.props.responsive,
                        expHighlightedTruncatedString: t.props.expHighlightedTruncatedString,
                        showSnippets: e.props.showSnippets,
                        snippetRows: e.props.snippetRows,
                        height: e.props.height,
                        isSelectMode: e.props.isSelectMode,
                        isSelected: e.props.isSelected,
                        onSelect: t.props.onSelectFile,
                        onDeselect: t.props.onDeselectFile,
                        isFocused: e.props.isFocused,
                        expSelectableFswm: t.props.expSelectableFswm,
                        selectionMethod: t.props.selectionMethod,
                        useSearchSuccessBanner: t.props.useSearchSuccessBanner,
                        filteredContactName: t.props.filteredContactName
                    });
                    var _ = e.props.file,
                        f = 0 === r || t.props.user.is_cdm_member && (2 === r || 1 === r);
                    return o.default.createElement(s.FileRow, {
                        extensionsFeatureFlags: e.props.extensionsFeatureFlags,
                        sharingServiceInfo: e.props.sharingServiceInfo,
                        context: t.props.context,
                        file: _,
                        getOverflowMenuActions: t.props.getOverflowMenuActions,
                        isActiveDropTarget: e.props.isActiveDropTarget,
                        isCheckboxDisabled: e.props.isCheckboxDisabled,
                        isAvailableDropTarget: e.props.isAvailableDropTarget,
                        isCompactMode: e.props.isCompactMode,
                        isFocused: e.props.isFocused,
                        isSearchMode: e.props.isSearchMode,
                        isSelectMode: e.props.isSelectMode,
                        isSelected: e.props.isSelected,
                        arePostTTIModulesLoaded: e.props.arePostTTIModulesLoaded,
                        isSharingDisabled: e.props.isSharingDisabled,
                        key: _.fq_path,
                        onDeselect: t.props.onDeselectFile,
                        onDragStart: t.props.onDragStart,
                        onDragEnter: t.props.onDragEnter,
                        onLocationLinkClick: t.props.onLocationLinkClick,
                        onNavigateToFileOrFolder: t.handleNavigateToFileOrFolder,
                        onRenameCancel: t.props.onRenameCancel,
                        onRenameSubmit: t.props.onRenameSubmit,
                        onSelect: t.props.onSelectFile,
                        onStarClick: t.props.onStarClick,
                        renameState: e.props.renameState,
                        responsive: t.props.responsive,
                        rowIndex: r,
                        showUserEducationEffects: f,
                        userEducationEffectName: f ? "FileNameLabel-" + r : void 0,
                        showCDMUserEducationEffects: n.File.isTeamMemberFolder(_),
                        rowFocusable: p,
                        topOffset: i,
                        user: t.props.user,
                        visibleColumns: t.props.visibleColumns,
                        canDisplayFolderSizes: t.props.canDisplayFolderSizes,
                        thumbStore: t.props.thumbStore,
                        renderSharedWithController: t.props.renderSharedWithController,
                        hrefForFile: t.props.hrefForFile,
                        onShowShare: t.props.onShowShare,
                        onPresentInZoom: t.props.onPresentInZoom,
                        shareButtonLabel: t.props.shareButtonLabel,
                        showShareButton: t.props.showShareButton,
                        expHighlightedTruncatedString: t.props.expHighlightedTruncatedString,
                        hasResponsiveOverflowMenu: t.props.hasResponsiveOverflowMenu,
                        showSnippets: e.props.showSnippets,
                        snippetRows: e.props.snippetRows,
                        height: e.props.height,
                        selectionMethod: t.props.selectionMethod,
                        filteredContactName: t.props.filteredContactName,
                        useSearchSuccessBanner: t.props.useSearchSuccessBanner
                    })
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                var e = this.props.onTTI;
                e && e(), this.setupKeyboardShortcuts(), this.setupExternalDragHandler()
            }, t.prototype.componentWillUnmount = function() {
                this.cleanupKeyboardShortcuts(), a.cleanupExternalDragHandler(this.props.keyScope)
            }, t.prototype.cleanupKeyboardShortcuts = function() {
                c.resetFilesViewKeyboardShortcuts(this.props.keyScope), c.resetFileJumpKeyboardShortcuts(this.props.keyScope)
            }, t.prototype.setupKeyboardShortcuts = function() {
                var e = this,
                    t = this.props,
                    r = t.user,
                    o = t.onDelete,
                    n = t.onShowRename,
                    i = t.getIsFileJumping,
                    a = t.onAddFileJumpKeyCode,
                    s = t.onResetFileJump,
                    l = t.keyScope,
                    d = t.onCopyToClipboard,
                    u = t.onNavigateToParentFolder,
                    p = t.onPasteFromClipboard;
                c.setupFileJumpKeyboardShortcuts({
                    user: r,
                    viewType: _.ViewType.List,
                    scope: l,
                    getIsFileJumping: i,
                    onAddFileJumpKeyCode: a,
                    onResetFileJump: s
                }), c.setupFilesViewKeyboardShortcuts({
                    user: r,
                    viewType: _.ViewType.List,
                    getIsGlobalEvent: this.getIsGlobalEvent(),
                    getIsItemEvent: this.getIsListEvent,
                    getSelectedFiles: this.getSelectedFiles,
                    isCurrentPathWriteable: this.props.getIsCurrentPathWriteable,
                    selectAllAction: f,
                    deselectAllAction: f,
                    onCopyToClipboard: d,
                    onDelete: o,
                    onFocusSearchBar: this.props.onFocusSearchBar,
                    onNavigateToFileOrFolder: function(t) {
                        return e.handleNavigateToFileOrFolder(t, {
                            actionSource: _.FilesViewActionSource.KEYBOARD
                        })
                    },
                    onNavigateToParentFolder: u,
                    onPasteFromClipboard: p,
                    onShowRename: n,
                    scope: l,
                    onShowHelpMenu: function() {
                        return e.props.onOpenKeyboardShortcutModal()
                    }
                })
            }, t.prototype.setupExternalDragHandler = function() {
                a.setupExternalDragHandler(this.props.keyScope, this.getIsDraggingInternalFiles, this.getIsDraggingExternalFiles, this.props.onSetFileUploaderPath, ".brws-file-row", this.getActiveDropTarget, this.props.onSetDropTarget)
            }, t.prototype.getIsGlobalEvent = function() {
                return function() {
                    return !0
                }
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.scrollPositionOffset,
                    r = e.viewportTopOffset,
                    n = e.focusedFileIndex,
                    a = e.onRangeInView,
                    s = e.scrollContainer,
                    l = p.getFilesViewListRowItemsAndHeights(this.props),
                    c = l.rowItems,
                    d = l.heights;
                return o.default.createElement(i.CulledTableBodyWithScrollContainer, {
                    items: c,
                    listItemHeight: d,
                    renderRow: this.renderRow,
                    scrollPositionOffset: t,
                    scrollToRow: n,
                    shouldUseWindowAsScrollContainer: !0,
                    viewportTopOffset: r,
                    onRangeInView: a,
                    scrollContainer: s
                })
            }, t.defaultProps = {
                isFileViewerShown: function() {
                    return !1
                },
                selectionMethod: _.SelectionMethod.CHECKBOX
            }, t
        })(o.default.PureComponent);
    t.FilesViewList = m
}), define("modules/clean/react/files_view/new_folder_row", ["require", "exports", "tslib", "spectrum/media_table", "spectrum/table", "react", "spectrum/icon_content", "modules/clean/react/files_view/name_input", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), t.NewFolderRow = function(e) {
        var r, a = e.createNewFolderState,
            c = e.isInsideMyTeamFolderTree,
            d = void 0 !== c && c,
            u = e.onCancel,
            p = e.onSubmit,
            _ = e.rowIndex,
            h = e.topOffset;
        r = "SAVING_INPUT" === a ? i.default.createElement("p", {
            className: "brws-new-folder-row-status",
            role: "status",
            "aria-live": "polite"
        }, l._("Creating new folder…")) : i.default.createElement(s.NameInput, {
            defaultValue: "",
            label: l._("Folder name"),
            onSubmit: p,
            onCancel: u
        });
        var f = i.default.createElement(t.NewFolderIcon, {
            isInsideMyTeamFolderTree: d
        });
        return i.default.createElement(o.CulledMediaRow, {
            "aria-rowindex": void 0 !== _ ? _ + 1 : void 0,
            className: "brws-new-folder-row",
            topOffset: h
        }, i.default.createElement(n.TableCell, {
            className: "brws-checkbox-cell"
        }), i.default.createElement(o.MediaCell, {
            icon: f
        }, i.default.createElement("div", {
            className: "brws-new-folder-row-content brws-vertically-center"
        }, r)), i.default.createElement(n.TableCell, null), i.default.createElement(n.TableCell, null))
    }, t.NewFolderIcon = function(e) {
        var t = e.isInsideMyTeamFolderTree,
            r = e.className || "";
        return i.default.createElement(a.IconContent, {
            className: r,
            name: t ? "folder_team-small" : "folder-small"
        })
    }
}), define("modules/clean/react/files_view/paper_row", ["require", "exports", "tslib", "external/classnames", "react", "retrieval-components/highlighted-truncated-string", "spectrum/media_table", "spectrum/util/raf_throttle", "modules/clean/emoji_utils", "modules/clean/filename_highlights", "modules/clean/paper_formatting_utils", "modules/clean/react/files_view/double_click", "modules/clean/react/files_view/file_snippets", "modules/clean/react/files_view/star", "modules/clean/react/files_view/types", "modules/clean/react/files_view/util", "modules/core/browser", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), l = r.__importStar(l), d = r.__importStar(d), m = r.__importStar(m);
    var g = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.setRef = function(e) {
                r.brwsFilenameContainerDiv = e
            }, r.handleWindowResize = function() {
                r.throttledWindowResize.request()
            }, r.handleResize = function() {
                if (r.brwsFilenameContainerDiv) {
                    var e = r.state.brwsFilenameContainerDivWidth,
                        t = r.brwsFilenameContainerDiv.getBoundingClientRect().width;
                    t && t !== e && r.setState({
                        brwsFilenameContainerDivWidth: t
                    })
                }
            }, r.handleOpenNewTabOrNavigate = function(e) {
                if (0 === e.button) {
                    e.preventDefault(), e.stopPropagation();
                    var t = r.props.paper;
                    if (f.hasModifierKey(e)) return void m.open_tab(t.url);
                    r.props.onOpenPaper(t)
                }
            }, r.throttledWindowResize = new s.RafThrottle(function() {
                return r.handleResize()
            }), r.state = r.calcState(t), r
        }
        return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
            if (this.props.paper.title !== e.paper.title || this.props.paper.highlight_spans !== e.paper.highlight_spans) {
                var t = this.calcState(e);
                this.setState(t)
            }
        }, t.prototype.componentDidMount = function() {
            this.handleResize(), window.addEventListener("resize", this.handleWindowResize)
        }, t.prototype.componentWillUnmount = function() {
            window.removeEventListener("resize", this.handleWindowResize)
        }, t.prototype.calcState = function(e) {
            return {
                titleParts: d.getPaperDocTitleParts(e.paper, "brws-file-name-cell-icon", "brws-file-name-cell-icon-emoji")
            }
        }, t.prototype.getHighlightedSpansForHighlightedTruncatedString = function(e) {
            var t = e.title,
                r = e.highlight_spans,
                o = e.title_highlights,
                n = r && r.length > 0,
                i = l.getFirstEmojiFromTitle(t);
            if (n) {
                if (i) {
                    r = [{
                        highlight_str: r[0].highlight_str.substr(i.length),
                        is_highlighted: r[0].is_highlighted
                    }].concat(r.slice(1))
                }
                return r.map(function(e) {
                    return {
                        string: e.highlight_str,
                        isHighlighted: e.is_highlighted
                    }
                })
            }
            if (o) {
                if (i) {
                    t = t.substr(i.length);
                    var a = i.length / 2;
                    o = o.slice().map(function(e) {
                        return {
                            pos: e.pos - a,
                            len: e.string.length,
                            string: e.string
                        }
                    })
                }
                return c.highlightMatchSections(t, o).map(function(e) {
                    return {
                        string: e.text,
                        isHighlighted: e.isHighlighted
                    }
                })
            }
        }, t.prototype.renderTitleElement = function(e) {
            var t = this.props,
                r = t.paper,
                o = t.showHighlights,
                a = t.expHighlightedTruncatedString,
                s = this.state.titleParts,
                l = s.title,
                c = s.highlightedTitle;
            if (a) {
                if (e) {
                    var d = n.default.createElement(i.HighlightedTruncatedString, {
                        text: l,
                        className: "brws-file-name-element",
                        fontSize: 14,
                        highlightSpans: this.getHighlightedSpansForHighlightedTruncatedString(r),
                        cellBuffer: 3,
                        availableWidth: e
                    });
                    return n.default.createElement("a", {
                        className: "brws-paper-doc-name-cell-title",
                        href: r.url,
                        onClick: this.handleOpenNewTabOrNavigate
                    }, o ? d : n.default.createElement("span", null, l))
                }
                return null
            }
            return n.default.createElement("a", {
                className: "brws-paper-doc-name-cell-title",
                href: r.url,
                onClick: this.handleOpenNewTabOrNavigate
            }, o ? c : n.default.createElement("span", null, l))
        }, t.prototype.renderPaperCellContent = function(e, t) {
            var r = this.props,
                o = r.paper,
                i = r.user,
                s = r.arePostTTIModulesLoaded,
                l = r.showSnippets,
                c = r.snippetRows,
                d = s ? n.default.createElement(_.StarContainer, {
                    item: o,
                    user: i,
                    key: "paperStar",
                    className: "brws-file-name-cell-star"
                }) : null;
            return n.default.createElement("div", {
                className: "brws-paper-doc-name-cell-content brws-vertically-center"
            }, n.default.createElement("div", {
                className: "brws-paper-doc-name-cell-title-container"
            }, n.default.createElement(a.MediaCellText, {
                highlight: e
            }, this.renderTitleElement(t)), d), n.default.createElement(a.MediaCellText, {
                highlight: e,
                variant: "subtitle"
            }, S._("in Paper", {
                comment: "The Dropbox Paper page"
            })), l && n.default.createElement(a.MediaCellText, {
                highlight: e,
                key: "snippets",
                variant: "subtitle"
            }, n.default.createElement(p.FileSnippets, {
                snippets: o.snippets,
                lineClamp: c
            })))
        }, t.prototype.renderDocName = function(e) {
            var t = this.props,
                o = t.expHighlightedTruncatedString,
                i = t.height,
                s = this.state.titleParts.icon,
                l = {
                    highlight: e,
                    icon: s,
                    style: {
                        minHeight: i - 1
                    }
                };
            if (o) {
                var c = this.state.brwsFilenameContainerDivWidth;
                return n.default.createElement(a.MediaCell, r.__assign({
                    key: "docName"
                }, l), n.default.createElement("div", {
                    className: "brws-file-name-container",
                    ref: this.setRef
                }, this.renderPaperCellContent(e, c)))
            }
            return n.default.createElement(a.MediaCell, r.__assign({
                key: "docName"
            }, l), this.renderPaperCellContent(e))
        }, t.prototype.renderDocInfo = function() {
            var e = this.props.paper,
                t = e.last_modified_date || "",
                r = S._("by %(modified_by)s", {
                    comment: "name of the person that modified the file"
                }).format({
                    modified_by: e.last_editor_name || e.creator_name
                });
            return n.default.createElement(a.MediaCell, {
                key: "docInfo",
                subtitle: r,
                title: t
            })
        }, t.prototype.renderCell = function(e) {
            var t = e.isHovered,
                r = e.sortField;
            switch (r) {
                case h.SortField.FILENAME:
                    return this.renderDocName(t);
                case h.SortField.RELEVANCE:
                case h.SortField.MODIFIED:
                    return this.renderDocInfo();
                default:
                    return n.default.createElement(a.MediaCell, {
                        key: r,
                        title: n.default.createElement("span", {
                            "aria-hidden": !0
                        }, "--")
                    })
            }
        }, t.prototype.render = function() {
            var e = this,
                t = this.props,
                r = t.rowIndex,
                i = t.topOffset,
                s = t.visibleColumns,
                l = t.selectionMethod,
                c = o.default("brws-paper-row", {
                    "brws-row-click-selection-method": l === h.SelectionMethod.CLICK
                }),
                d = l === h.SelectionMethod.CLICK ? this.handleOpenNewTabOrNavigate : void 0,
                p = l === h.SelectionMethod.CLICK ? function() {} : this.handleOpenNewTabOrNavigate;
            return n.default.createElement(u.WithDoubleClick, {
                onClick: p,
                onDoubleClick: d
            }, function(t) {
                var o = t.onClick;
                return n.default.createElement(a.CulledMediaRow, {
                    "aria-rowindex": void 0 !== r ? r + 1 : void 0,
                    className: c,
                    draggable: !1,
                    onClick: o,
                    topOffset: i,
                    variant: "default"
                }, function(t) {
                    var r = t.isHovered;
                    return [n.default.createElement(a.MediaCell, {
                        key: "checkboxCell",
                        className: "brws-checkbox-cell"
                    })].concat(s.map(function(t) {
                        return e.renderCell({
                            isHovered: r,
                            sortField: t.sortField
                        })
                    }))
                })
            })
        }, t.defaultProps = {
            showHighlights: !0
        }, t
    })(n.default.PureComponent);
    t.PaperRow = g
}), define("modules/clean/react/files_view/pinned_team_folder_view", ["require", "exports", "tslib", "external/classnames", "react", "spectrum/table", "modules/clean/browse_uri_interface", "modules/clean/react/browse/models", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/file_list_utils", "modules/clean/react/files_view/file_row", "modules/clean/react/files_view/types", "modules/clean/react/sprite", "modules/clean/react/tooltip", "modules/clean/user_education/react/user_education_effect", "modules/clean/user_education/user_education_client", "modules/constants/trademark", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n);
    var g = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.displayName = "PinnedTeamFolderView", t.renderTeamFolderRow = function(e, r) {
                var o = t.props,
                    i = o.activeDropTarget,
                    u = o.context,
                    p = o.dropTargetHighlightMode,
                    _ = o.getOverflowMenuActions,
                    f = o.onDragEnter,
                    m = o.onNavigateToFileOrFolder,
                    S = o.onRenameCancel,
                    g = o.onRenameSubmit,
                    v = o.user,
                    E = o.arePostTTIModulesLoaded,
                    w = o.thumbStore,
                    b = o.onShowShare,
                    T = o.renderSharedWithController,
                    F = o.selectionMethod,
                    y = c.shouldFileBeHighlightedDropTarget({
                        dropTargetHighlightMode: p,
                        file: e,
                        isSelected: !1
                    }),
                    C = n.default.createElement(d.FileRow, {
                        context: u,
                        file: e,
                        getOverflowMenuActions: _,
                        key: encodeURI(e.fq_path),
                        isAvailableDropTarget: y,
                        isActiveDropTarget: e === i,
                        isPinned: !0,
                        arePostTTIModulesLoaded: E,
                        onDragEnter: f,
                        onNavigateToFileOrFolder: m,
                        onRenameCancel: S,
                        onRenameSubmit: g,
                        showUserEducationEffects: 0 === r,
                        showCDMUserEducationEffects: s.File.isTeamMemberFolder(e),
                        user: v,
                        visibleColumns: l.LIST_VIEW_COLUMNS.slice(0, 1),
                        canDisplayFolderSizes: !1,
                        thumbStore: w,
                        onShowShare: b,
                        renderSharedWithController: T,
                        hrefForFile: a.href_for_file,
                        selectionMethod: F
                    });
                return r > 0 ? C : n.default.createElement(h.UserEducationEffect, {
                    containerName: "PinnedTeamFolder",
                    name: "TeamFolder",
                    key: encodeURI(e.fq_path) + "-UserEducationEffect"
                }, C)
            }, t
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            f.UEClient.sendEvent(this.displayName, "componentDidMount", JSON.stringify(this.props.context))
        }, t.prototype.renderHeaderTitle = function(e, t) {
            var r = t ? n.default.createElement("div", {
                className: "brws-pinned-team-folder-info-button"
            }, n.default.createElement(_.Tooltip, {
                position: _.TooltipPosition.RIGHT,
                tooltip_contents: n.default.createElement("div", null, t),
                tooltip_classname: "brws-pinned-team-folder-tooltip"
            }, n.default.createElement(p.Sprite, {
                group: "web",
                name: "info",
                alt: S._("File section information")
            }))) : null;
            return n.default.createElement("div", {
                className: "brws-pinned-team-folder-header-title-button-group"
            }, n.default.createElement("h2", {
                className: "brws-pinned-team-folder-header-title"
            }, e), r)
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.columnFlex,
                r = e.isCompactMode,
                a = e.teamFolders,
                s = S.ungettext("Team folder", "Team folders", a.size);
            return n.default.createElement("div", {
                className: "brws-pinned-team-folder-view"
            }, n.default.createElement(i.Table, {
                columnFlex: t
            }, n.default.createElement(i.TableHead, {
                className: o.default("brws-column-header", "brws-pinned-team-folder-header", {
                    "brws-column-header-compact brws-pinned-team-folder-header-compact ": r
                })
            }, n.default.createElement(i.TableHeadCell, {
                className: "brws-checkbox-cell"
            }), n.default.createElement(i.TableHeadCell, {
                className: "brws-vertically-center"
            }, this.renderHeaderTitle(s, S._("Team folders are the hub of content for a team and contents are                 automatically shared with team folder members. %(trademark_business)s                 team admins own and manage team folders.").format({
                trademark_business: m.TRADEMARK_BUSINESS
            })))), n.default.createElement(i.TableBody, null, a.map(this.renderTeamFolderRow))), n.default.createElement(i.Table, {
                columnFlex: t
            }, n.default.createElement(i.TableHead, {
                className: o.default("brws-column-header", "brws-pinned-team-folder-header", "brws-pinned-team-folder-header-secondary", {
                    "brws-column-header-compact brws-pinned-team-folder-header-compact ": r
                })
            }, n.default.createElement(i.TableHeadCell, {
                className: "brws-checkbox-cell"
            }), n.default.createElement(i.TableHeadCell, {
                className: "brws-vertically-center"
            }, this.renderHeaderTitle(S._("Everything else"))))))
        }, t.defaultProps = {
            selectionMethod: u.SelectionMethod.CHECKBOX
        }, t
    })(n.default.Component);
    t.PinnedTeamFolderView = g
}), define("modules/clean/react/files_view/selectors", ["require", "exports", "tslib", "external/reselect", "modules/clean/react/browse/models", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/file_list_utils"], function(e, t, r, o, n, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e) {
            return {
                activeDropTarget: e.activeDropTarget,
                arePostTTIModulesLoaded: e.arePostTTIModulesLoaded,
                canDisplayFolderSizes: e.canDisplayFolderSizes,
                context: e.context,
                createNewFolderState: e.createNewFolderState,
                dropTargetHighlightMode: e.dropTargetHighlightMode,
                extensionsFeatureFlags: e.extensionsFeatureFlags,
                fileRename: e.fileRename,
                focusedFileIndex: e.focusedFileIndex,
                isCheckboxDisabled: e.disabledMultiselect,
                isCompactMode: e.isCompactMode,
                isSearchMode: e.isSearchMode,
                isSelectMode: e.isSelectMode,
                items: e.items,
                selection: e.selection,
                sharingServiceInfo: e.sharingServiceInfo,
                starredState: e.starredState,
                user: e.user,
                visibleColumns: e.visibleColumns,
                responsive: e.responsive,
                expSnippets: e.expSnippets,
                containerWidth: e.containerWidth,
                highDensity: e.highDensity
            }
        },
        l = function(e, t) {
            return Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(function(r) {
                return t.hasOwnProperty(r) && e[r] === t[r]
            })
        },
        c = o.createSelectorCreator(o.defaultMemoize, l);
    t.getFilesViewListRowItems = c(s, function(e) {
        var o = e.activeDropTarget,
            s = e.context,
            l = e.createNewFolderState,
            c = e.dropTargetHighlightMode,
            d = e.items,
            u = e.fileRename,
            p = e.focusedFileIndex,
            _ = e.selection,
            h = e.user,
            f = e.visibleColumns,
            m = e.responsive,
            S = e.expSnippets,
            g = e.containerWidth,
            v = e.highDensity,
            E = r.__rest(e, ["activeDropTarget", "context", "createNewFolderState", "dropTargetHighlightMode", "items", "fileRename", "focusedFileIndex", "selection", "user", "visibleColumns", "responsive", "expSnippets", "containerWidth", "highDensity"]),
            w = d.toArray().map(function(e, l) {
                if (e instanceof n.UserDefinedItem) return {
                    type: "UserDefinedItemRow",
                    props: {
                        userDefinedItem: e
                    },
                    height: v ? i.DEFAULT_ROW_HEIGHT_DENSE : i.DEFAULT_ROW_HEIGHT
                };
                var d = g ? g * i.FILE_NAME_CELL_WITH_SNIPPETS_FLEX_BASIS[f.length] / 100 : void 0,
                    w = t.shouldShowSnippets({
                        file: e,
                        expSnippets: S,
                        responsive: m
                    }),
                    b = t.estimateSnippetRowsNeeded({
                        snippets: e.snippets,
                        fileNameCellWidth: d
                    }),
                    T = t.getFileRowHeight({
                        file: e,
                        showSnippets: w,
                        snippetRows: b,
                        highDensity: v
                    });
                if (e instanceof n.Paper) return {
                    type: "PaperRow",
                    props: {
                        isSearchMode: E.isSearchMode,
                        paper: e,
                        visibleColumns: f,
                        arePostTTIModulesLoaded: E.arePostTTIModulesLoaded,
                        showSnippets: w,
                        snippetRows: b,
                        height: T
                    },
                    height: T
                };
                var F = "fq_path" in e ? e.fq_path : e.file_id,
                    y = _.selected.has(F);
                if (e instanceof n.FileSharedWithMe) return {
                    type: "FileSharedWithMeRow",
                    props: {
                        file: e,
                        visibleColumns: f,
                        showSnippets: w,
                        snippetRows: b,
                        height: T,
                        isSelected: y,
                        arePostTTIModulesLoaded: E.arePostTTIModulesLoaded,
                        isSelectMode: E.isSelectMode,
                        isFocused: l === p
                    },
                    height: T
                };
                var C = a.shouldFileBeHighlightedDropTarget({
                    file: e,
                    isSelected: y,
                    dropTargetHighlightMode: c
                });
                return {
                    type: "FileRow",
                    props: r.__assign({}, E, {
                        file: e,
                        isActiveDropTarget: C && o === e,
                        isAvailableDropTarget: C,
                        isFocused: l === p,
                        isSelected: y,
                        isSharingDisabled: a.isSharingDisabledForFile({
                            context: s,
                            file: e,
                            user: h
                        }),
                        renameState: u && u.file.fq_path === e.fq_path ? u.state : void 0,
                        visibleColumns: f,
                        showSnippets: w,
                        snippetRows: b,
                        height: T
                    }),
                    height: T
                }
            });
        return l && "CREATE_FOLDER_INACTIVE" !== l && w.unshift({
            type: "NewFolderRow",
            props: {
                createNewFolderState: l,
                isInsideMyTeamFolderTree: s.isInsideTeamFolderTree
            },
            height: v ? i.DEFAULT_ROW_HEIGHT_DENSE : i.DEFAULT_ROW_HEIGHT
        }), w
    }), t.getFilesViewListRowItemsAndHeights = o.createSelector(t.getFilesViewListRowItems, function(e) {
        return {
            rowItems: e,
            heights: e.map(function(e) {
                return e.height
            })
        }
    }), t.getItemIds = o.createSelector(function(e) {
        return e.items
    }, function(e) {
        return e.toArray().map(function(e) {
            return e.fq_path || e.file_id
        })
    }), t.getFirstValidSnippet = function(e) {
        return e.find(function(e) {
            var t = e.highlight_spans;
            return !!t && t.length > 0
        })
    }, t.shouldShowSnippets = function(e) {
        var r = e.file.snippets,
            o = e.expSnippets,
            n = void 0 !== o && o,
            i = e.responsive;
        return !!n && !!r && !!t.getFirstValidSnippet(r) && (i.isMatchedLarge || i.isMatchedMedium)
    }, t.getFileRowHeight = function(e) {
        var t = e.file,
            r = e.showSnippets,
            o = e.snippetRows,
            n = e.highDensity;
        return t.snippets && r ? o ? i.ROW_VERTICAL_PADDING + i.ROW_TITLE_HEIGHT + i.ROW_SUBTITLE_HEIGHT + i.ROW_SNIPPET_VERTICAL_MARGIN + i.SNIPPET_HEIGHT_PER_ROW * o : i.DEFAULT_ROW_HEIGHT_WITH_SNIPPETS : n ? i.DEFAULT_ROW_HEIGHT_DENSE : i.DEFAULT_ROW_HEIGHT
    };
    t.estimateSnippetRowsNeeded = function(e) {
        var r = e.snippets,
            o = e.fileNameCellWidth;
        if (!r) return 0;
        var n = t.getFirstValidSnippet(r);
        if (!n || !n.highlight_spans) return 0;
        if (!o) return 3;
        var a = n.highlight_spans.map(function(e) {
                return e.highlight_str
            }).join().length,
            s = Math.max(o - i.MEDIA_CELL_ICON_WIDTH - i.SNIPPET_HORIZONTAL_PADDING, 1),
            l = 6 * a;
        return Math.min(Math.ceil(l / s), 3)
    }
}), define("modules/clean/react/files_view/share_button", ["require", "exports", "tslib", "spectrum/button", "react", "modules/clean/react/retrieval_success_banner/util", "modules/core/i18n", "modules/clean/react/extensions/data/types"], function(e, t, r, o, n, i, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var l = (function(t) {
        function l() {
            var o = null !== t && t.apply(this, arguments) || this;
            return o.handleClick = function(t) {
                return r.__awaiter(o, void 0, void 0, function() {
                    var o, n, a, l, c, d;
                    return r.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return this.props.useSearchSuccessBanner && this.props.isSearchMode && i.setSearchSuccessBannerVisible(), t.preventDefault(), o = this.props, n = o.file, a = o.onShowShare, a(n, "BROWSE_FILE_ROW"), t.stopPropagation(), [4, new Promise(function(t, r) {
                                    e(["modules/clean/react/app_actions/telemetry_client"], t, r)
                                }).then(r.__importStar)];
                            case 1:
                                return l = u.sent(), c = l.createTelemetryClient, d = l.getPiiSafeExtension, c({
                                    component: "share-btn"
                                }).session({
                                    surface: this.props.isSearchMode ? "search" : "browse",
                                    ext: d(this.props.file.ext)
                                }).event("click_share", {
                                    trigger_type: s.TriggerType.PrimaryButton
                                }), [2]
                        }
                    })
                })
            }, o
        }
        return r.__extends(l, t), l.prototype.render = function() {
            var e = this.props,
                t = e.isVisible,
                r = e.shareButtonLabel,
                i = e.showShareButton;
            return n.default.createElement(o.Button, {
                "aria-label": r,
                className: "inline-share-button",
                onClick: this.handleClick,
                tabIndex: t && i ? void 0 : -1,
                variant: t && i ? "secondary" : "invisible"
            }, r)
        }, l.defaultProps = {
            isVisible: !0,
            shareButtonLabel: a._("Share"),
            showShareButton: !0
        }, l
    })(n.default.PureComponent);
    t.ShareButton = l
}), define("modules/clean/react/files_view/sticky_table_head", ["require", "exports", "tslib", "spectrum/dimensions", "spectrum/table", "react", "modules/clean/react/sticky/sticky", "modules/clean/react/sticky/container"], function(e, t, r, o, n, i, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), t.StickyTableHead = function(e) {
        var t = e.children,
            l = e.columnFlex,
            c = e.offsetHeight,
            d = e.offsetTop,
            u = r.__rest(e, ["children", "columnFlex", "offsetHeight", "offsetTop"]);
        return i.default.createElement("thead", {
            className: "brws-sticky-table-head"
        }, i.default.createElement(o.Dimensions, {
            tagName: "tr"
        }, function(e) {
            var o = e.width;
            return i.default.createElement("td", {
                className: "brws-sticky-table-cell"
            }, i.default.createElement(s.StickyContainer, {
                offsetTop: d,
                useNativeSticky: !0,
                useWindowToDetermineBottom: !0
            }, i.default.createElement(a.Sticky, {
                offsetHeight: c
            }, i.default.createElement(n.Table, {
                columnFlex: l,
                style: {
                    width: o
                }
            }, i.default.createElement(n.TableHead, r.__assign({}, u), t)))))
        }))
    }
}), define("modules/clean/react/files_view/user_defined_item_row", ["require", "exports", "tslib", "react"], function(e, t, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o);
    var n = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.rowIndex,
                r = e.topOffset;
            return e.userDefinedItem.renderUserDefinedItemRow({
                rowIndex: t,
                topOffset: r
            })
        }, t
    })(o.default.PureComponent);
    t.UserDefinedItemRow = n
}), define("modules/clean/react/files_view/view_type_column_header_menu", ["require", "exports", "tslib", "react", "spectrum/icon_form", "spectrum/icon_mode", "spectrum/popover", "modules/clean/react/files_view/types", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o);
    var c = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleSelection = function(e) {
                e !== t.props.viewType && t.props.onSwitchViewType(e)
            }, t
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            this.props.onTTI()
        }, t.prototype.viewTypeIcon = function(e) {
            switch (e) {
                case s.ViewType.List:
                    return "list";
                case s.ViewType.Grid:
                    return "grid";
                case s.ViewType.LargeGrid:
                    return "tiles"
            }
            return "list"
        }, t.prototype.viewTypeLabel = function(e) {
            switch (e) {
                case s.ViewType.List:
                    return l._("Layout: List");
                case s.ViewType.Grid:
                    return l._("Layout: Grid");
                case s.ViewType.LargeGrid:
                    return l._("Layout: Large Grid")
            }
            return l._("Layout: List")
        }, t.prototype.render = function() {
            var e = this,
                t = this.props,
                r = t.viewType,
                s = t.viewTypes,
                c = t.viewTypeLabels;
            return 1 === s.length ? null : o.default.createElement(a.Popover, {
                className: "brws-view-type-column-header-menu",
                onSelection: this.handleSelection,
                closeOnSelection: !0
            }, o.default.createElement(a.PopoverTrigger, {
                className: "brws-view-type-column-header-menu-trigger",
                "aria-label": l._("Select view type")
            }, o.default.createElement(i.IconMode, {
                name: this.viewTypeIcon(r)
            }), o.default.createElement(n.IconForm, {
                name: "caret-down"
            })), o.default.createElement(a.PopoverContent, {
                attachment: "right",
                className: "brws-view-type-column-header-menu-content"
            }, o.default.createElement(a.PopoverItemGroup, null, o.default.createElement(a.PopoverItemGroupTitle, null, l._("View As")), s.map(function(t) {
                return o.default.createElement(a.PopoverSelectableItem, {
                    "data-viewtype": t,
                    key: t,
                    icon: o.default.createElement(i.IconMode, {
                        name: e.viewTypeIcon(t)
                    }),
                    selected: r === t,
                    value: t,
                    "aria-label": e.viewTypeLabel(t)
                }, c[t])
            }))))
        }, t
    })(o.default.PureComponent);
    t.ViewTypeColumnHeaderMenu = c
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/folder_dialog/async", ["require", "exports", "modules/clean/css"], function(e, t, r) {
    "use strict";

    function o(t) {
        new Promise(function(t, r) {
            e(["modules/clean/react/folder_dialog/folder_dialog"], t, r)
        }).then(__importStar).then(function(e) {
            return e.FolderDialog.show(t)
        })
    }

    function n() {
        new Promise(function(t, r) {
            e(["modules/clean/react/folder_dialog/folder_dialog"], t, r)
        }).then(__importStar).then(function() {
            r.require_css("/static/css/react/folder_picker-vflv6X0zc.css")
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showFolderDialog = o, t.prewarmFolderDialog = n
}), define("modules/clean/react/folder_overview/api", ["require", "exports", "modules/clean/api_v2/user_client"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = new r.UserApiV2Client;
    t.getDescription = function(e, t) {
        return o.ns("files").rpc("get_description_batch", {
            file_ids: [t]
        }, {
            subjectUserId: e
        }).then(function(e) {
            if (!e || !e.items || 1 !== e.items.length) throw new Error("Unexpected response from get_description_batch");
            return e.items[0]
        })
    }, t.setDescription = function(e, t, r, n, i) {
        return o.ns("files").rpc("set_description", {
            file_id: t,
            current_revision_id: r,
            text: n,
            format_version: i
        }, {
            subjectUserId: e
        })
    }, t.getContentReferences = function(e, t) {
        return o.ns("files").rpc("get_content_references_info", {
            file_id: t
        }, {
            subjectUserId: e
        })
    }, t.removeContentReferences = function(e, t, r) {
        return o.ns("files").rpc("remove_content_references", {
            anchor_file_id: t,
            return_roots_as_ns_ids: !0,
            file_ids: r
        }, {
            subjectUserId: e
        })
    }, t.addContentReferences = function(e, t, r) {
        return o.ns("files").rpc("add_content_references", {
            anchor_file_id: t,
            return_roots_as_ns_ids: !0,
            file_ids: r
        }, {
            subjectUserId: e
        })
    }, t.addContentReferencesToPath = function(e, t, r) {
        return o.ns("files").rpc("add_content_references_to_path", {
            path: t,
            return_roots_as_ns_ids: !0,
            file_ids: r
        }, {
            subjectUserId: e
        })
    }, t.getFolderAccess = function(e) {
        var t = e.userId,
            r = e.sharedFolderId,
            n = e.accountId,
            i = e.accountEmail;
        return o.ns("folder_overview").rpc("has_folder_access", {
            shared_folder_id: r,
            account_id: n,
            account_email: i
        }, {
            subjectUserId: t
        })
    }, t.getSharedFolderPath = function(e) {
        var t = e.userId,
            r = e.sharedFolderId;
        return o.ns("files").rpc("get_metadata", {
            path: "ns:" + r
        }, {
            subjectUserId: t
        }).then(function(e) {
            return e.is_shareable ? e.path_display : void 0
        })
    }, t.getLoggingFileId = function(e) {
        var t = e.userId,
            r = e.path;
        return o.ns("files").rpc("get_metadata", {
            path: r
        }, {
            subjectUserId: t
        }).then(function(e) {
            return e.id
        })
    }, t.isConflictError = function(e) {
        return e.error && e.error.status && "conflict" === e.error.status[".tag"]
    }, t.isFormatVersionError = function(e) {
        return e.error && e.error.status && "bad_format_version" === e.error.status[".tag"]
    }, t.getUserAccount = function(e) {
        var t = e.userId,
            r = e.accountId;
        return o.ns("users").rpc("get_account", {
            account_id: r
        }, {
            subjectUserId: t
        })
    }
}), define("modules/clean/react/folder_overview/async_components", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable", "modules/clean/react/folder_overview/placeholder"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), t.AsyncFolderOverviewDescription = n.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/folder_overview/description"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.FolderOverviewDescription
            })
        },
        loading: function(e) {
            return o.default.createElement(i.WrappedFolderOverviewPlaceholder, {
                showExamples: e.showExamplesInPlaceholder,
                isReadOnly: e.isReadOnly,
                showExamplesAsButton: "V3" === e.expFolderOverview
            })
        }
    }), t.AsyncFolderOverviewContentReferences = n.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/folder_overview/content_references"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.FolderOverviewContentReferences
            })
        }
    }), t.AsyncFolderOverviewLastEdit = n.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/folder_overview/last_edit"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.FolderOverviewLastEdit
            })
        }
    }), t.asyncShowOverviewExamples = function() {
        new Promise(function(t, r) {
            e(["modules/clean/react/folder_overview/examples_modal"], t, r)
        }).then(r.__importStar).then(function(e) {
            return e.OverviewExamplesModal.show()
        })
    }, t.asyncShowPinToModal = function(t) {
        new Promise(function(t, r) {
            e(["modules/clean/react/folder_overview/pin_to_modal"], t, r)
        }).then(r.__importStar).then(function(e) {
            return e.FolderOverviewPinToModal.show(t)
        })
    }
}), define("modules/clean/react/folder_overview/connected", ["require", "exports", "tslib", "external/react-redux", "react", "modules/clean/react/browse/data/selectors", "modules/clean/react/css", "modules/clean/react/folder_overview/controller", "modules/clean/react/folder_overview/data/action_creators", "modules/clean/react/folder_overview/data/selectors", "modules/clean/react/folder_overview/data/store"], function(e, t, r, o, n, i, a, s, l, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i), l = r.__importStar(l);
    var u = d.getStoreForFolderOverview(),
        p = function() {
            var e = c.makeSelectors();
            return function(t, r) {
                return {
                    user: i.user(t),
                    haveAllComponentsLoaded: e.haveAllComponentsLoaded(t, r),
                    hasFailedToLoad: !!e.hasFailedToLoad(t, r),
                    loadedComponents: e.loadedComponents(t, r) || [],
                    folderFileId: e.folderFileId(t, r),
                    folderNsId: e.folderNsId(t, r),
                    isOpen: !e.isCollapsed(t, r),
                    descriptionBaseRevision: e.descriptionBaseRevision(t, r),
                    descriptionFormatValid: e.descriptionFormatValid(t, r),
                    doesFolderOverviewExist: e.doesFolderOverviewExist(t, r),
                    descriptionHasFocus: e.descriptionHasFocus(t, r)
                }
            }
        },
        _ = {
            updateFolderData: l.updateFolderDataCache,
            saveFolderData: l.saveFolderPreferences,
            addLoadedComponent: l.addLoadedComponent,
            removeLoadedComponent: l.removeLoadedComponent,
            fetchDataForFolder: l.fetchDataForFolder,
            reloadDescription: l.reloadDescription,
            reloadContentReferences: l.reloadContentReferences
        },
        h = o.connect(p, _)(s.FolderOverviewController),
        f = function(e) {
            return n.default.createElement(o.Provider, {
                store: u
            }, n.default.createElement(h, r.__assign({}, e)))
        };
    t.FolderOverview = a.requireCssWithComponent(f, ["/static/css/browse/folder_overview-vflNC-NAW.css", "/static/js/spectrum_comments/index.web-vflBmTBLv.css", "/static/js/retrieval-components/index.web-vflEwNrla.css"])
}), define("modules/clean/react/folder_overview/constants", ["require", "exports", "tslib", "modules/clean/react/comments2/components/comments_translations", "modules/core/i18n"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DATA_CACHE_TTL_MS = 3e4, t.DESCRIPTION_PLACEHOLDER = n._("Click here to describe this folder and turn it into a Space"), t.DESCRIPTION_PLACEHOLDER_EXAMPLES_BUTTON = n._("Show examples"), t.DESCRIPTION_PLACEHOLDER_READ_ONLY = n._("To edit this overview, ask the folder admin for access"), t.FOLDER_EXAMPLES_LINK_LABEL = n._("Show examples"), t.FOLDER_EXAMPLES_LINK_URI = "https://www.dropbox.com/help/desktop-web/folder-overviews", t.ERROR_DESCRIPTION_CONFLICT = n._("Can’t save changes. Paste text elsewhere to save, then click Refresh."), t.ERROR_DESCRIPTION_FORMAT_VERSION = n._("Can’t save changes. Reload the page and try again."), t.ERROR_DESCRIPTION_SAVE = n._("Can’t save changes."), t.ERROR_SHARE_PERSONAL_FOLDER = n._("Can’t @mention someone in your Personal Dropbox."), t.ERROR_SHARE_MEMBER_FOLDER = n._("Can’t @mention someone in your member folder."), t.ERROR_SHARE_NO_PERMISSION = n._("You don’t have permission to share this folder."), t.DESCRIPTION_SAVE_DELAY_MS = 3e3, t.DESCRIPTION_SAVE_ERROR_DELAY_MS = 10 * t.DESCRIPTION_SAVE_DELAY_MS, t.OPT_KEY = n._("opt", {
        comment: "'opt' refers to the option key on the keyboard. This string is used to create labels for shortcuts."
    }), t.ALT_KEY = n._("alt", {
        comment: "'alt' refers to the alt key on the keyboard. This string is used to create labels for shortcuts."
    }), t.CTRL_KEY = n._("ctrl", {
        comment: "'ctrl' refers to the ctrl key on the keyboard. This string is used to create labels for shortcuts."
    }), t.CMD_KEY = n._("⌘", {
        comment: "'⌘' refers to the ⌘ key on the keyboard. This string is used to create labels for shortcuts."
    }), t.FOLDER_OVERVIEW_EDITOR_STRINGS = r.__assign({}, o.commentsMasterLocalization, {
        searchingMsg: n._("@mention someone to share this folder"),
        folderOverviewToolbar: {
            boldMsg: n._("Bold"),
            italicMsg: n._("Italic"),
            strikeThroughMsg: n._("Strikethrough"),
            mentionMsg: n._("Mention someone"),
            orderedListMsg: n._("Start numbered list"),
            unorderedListMsg: n._("Start bulleted list"),
            linkMsg: n._("Create link"),
            taskMsg: n._("Create to-do"),
            onboardingMsg: n._("Folder examples"),
            mentionShortcutMsg: n._("@someone", {
                comment: "used in a tooltip to tell the user that they can mention someone by typing the '@'     character followed by the name of a user. In english, the tooltip will display just '@someone'"
            }),
            spaceKey: n._("space", {
                comment: "'space' refers to the spacebar key on the keyboard. This string is used to create labels for     shortcuts e.g. '@ + space' to insert a mention"
            }),
            doneMsg: n._("Done", {
                comment: "Button to close the editor toolbar"
            })
        },
        folderOverviewSharePopover: {
            cancelLabel: n._("Cancel"),
            continueLabel: n._("Continue"),
            shareTitle: function(e) {
                return e ? n._("Share folder with %(user_name)s?").format({
                    user_name: e
                }) : ""
            },
            shareMessage: function(e, t) {
                return e && t ? n._("%(user_name)s is not yet a member of “%(folder_name)s”. If you don’t share this folder,             they won’t be able to view its content").format({
                    folder_name: t,
                    user_name: e
                }) : ""
            }
        },
        folderOverviewTaskPlaceholder: n._("Set a task and assign @someone"),
        a11yFolderOverviewLabel: n._("Type notes, list, to-dos, and links here")
    }), t.FOLDER_OVERVIEW_EDITOR_EDITING = n._("Everyone in this folder can see notes, tasks, and pinned items"), t.SHARING_MODAL_MESSAGE_SAME_FOLDER = n._("Hi %(user_name)s, I @mentioned you in this folder. Take a look."), t.SHARING_MODAL_MESSAGE_PARENT_FOLDER = n._("Hi %(user_name)s, I @mentioned you in the %(folder_name)s folder. Take a look."), t.SHARING_MODAL_MESSAGE_SAME_FOLDER_NO_NAME = n._("I @mentioned you in this folder. Take a look."), t.SHARING_MODAL_MESSAGE_PARENT_FOLDER_NO_NAME = n._("I @mentioned you in the %(folder_name)s folder. Take a look."), t.DESCRIPTION_VERSION = [1, 0, 0], t.PIN_TO_SUCCESS_SINGLE = n._("Pinned %(file)s to %(path)s"), t.PIN_TO_SUCCESS_MULTIPLE = n._("Pinned %(num)d files to %(path)s"), t.PIN_TO_MODAL_TITLE_SINGLE = n._("Pin “%(name)s” to..."), t.PIN_TO_MODAL_TITLE_MULTIPLE = n._("Pin %(num)d files to..."), t.PIN_TO_FAILURE_SINGLE = n._("Failed to pin %(file)s to %(path)s"), t.PIN_TO_FAILURE_MULTIPLE = n._("Failed to pin %(num)d files to %(path)s"), t.PIN_TO_FAILURE_PERMISSION_DENIED = n._("You do not have permission to pin to %(path)s"), t.DESCRIPTION_LAST_EDIT_EMPTY_YOU = n._("Deleted %(time_ago)s by you"), t.DESCRIPTION_LAST_EDIT_EMPTY = n._("Deleted %(time_ago)s by %(name)s"), t.DESCRIPTION_LAST_EDIT_YOU = n._("Updated %(time_ago)s by you"), t.DESCRIPTION_LAST_EDIT = n._("Updated %(time_ago)s by %(name)s"), t.CONFLICT_POPUP_TITLE = n._("Your changes weren’t saved because you and %(user)s are editing at the same time."), t.CONFLICT_POPUP_TITLE_YOU = n._("Your changes weren’t saved because you are editing this description elsewhere."), t.CONFLICT_POPUP_CONTENT = n._("Please wait until they’re done before making changes.", {
        comment: '"they\'re" here refers to another user who is also currently making changes to the folder overview'
    }), t.CONFLICT_POPUP_CONTENT_YOU = n._("Please save your other changes before making them here."), t.CONFLICT_POPUP_BUTTON = n._("OK")
}), define("modules/clean/react/folder_overview/controller", ["require", "exports", "tslib", "external/classnames", "react", "retrieval-components/collapsable-section", "modules/clean/filepath", "modules/clean/react/browse/uri_helper", "modules/clean/react/files_view/types", "modules/clean/react/folder_overview/async_components", "modules/clean/react/folder_overview/live_update", "modules/clean/react/folder_overview/logging", "modules/clean/react/folder_overview/placeholder", "modules/clean/web_timing_logger", "modules/clean/web_user_action_events", "modules/core/i18n"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), a = r.__importStar(a);
    var m = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.handleHeaderClick = function() {
                var e = r.props,
                    t = e.folderFileId,
                    o = e.isOpen;
                t && (r.props.updateFolderData({
                    fileId: t,
                    folderData: {
                        isCollapsed: o
                    }
                }), r.props.saveFolderData({
                    folderFileId: t
                }), u.logFolderOverviewAction(h.WebUserActionLogEvent.FOLDER_OVERVIEW_TOGGLED, r.props.user.id, null, {
                    opened: o ? "0" : "1"
                }))
            }, r.handleLiveUpdate = function(e) {
                var t = e.type,
                    o = r.props,
                    n = o.folderFileId,
                    i = o.componentNamespace;
                if (n) switch (t) {
                    case "description":
                        r.props.reloadDescription({
                            folderFileId: n,
                            componentNamespace: i
                        });
                        break;
                    case "content_references":
                        r.props.reloadContentReferences({
                            folderFileId: n,
                            componentNamespace: i
                        })
                }
            }, r.shouldRenderFolderOverview = function(e) {
                return !("OFF" === e.expFolderOverview && e.loadedComponents.includes("description") && e.loadedComponents.includes("content_references") && !e.doesFolderOverviewExist)
            }, r.handlePlaceholderClick = function() {
                r.setState({
                    showPlaceholder: !1
                })
            }, r.handleExamplesButtonClick = function() {
                c.asyncShowOverviewExamples()
            }, r.setContainerRef = function(e) {
                return r.container = e
            }, r.state = {
                showPlaceholder: !0
            }, r
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            var e = this,
                t = this.props,
                r = t.path,
                o = t.expFolderOverview,
                n = t.componentNamespace;
            (this.props.folderFileId || this.props.folderNsId) && this.props.fetchDataForFolder({
                path: r,
                expFolderOverview: o,
                componentNamespace: n,
                fetchContentReferences: !0
            }), "V2" !== this.experimentVariant && "V3" !== this.experimentVariant || d.folderOverviewLiveUpdateManager.addListener("update", this.handleLiveUpdate), this.shouldRenderFolderOverview(this.props) || this.props.addLoadedComponent({
                componentNamespace: n,
                component: "draftjs"
            }), this.props.loadedComponents.includes("description") && (this.props.descriptionBaseRevision ? this.setState({
                showPlaceholder: !1
            }) : this.props.addLoadedComponent({
                componentNamespace: n,
                component: "draftjs"
            })), _.waitForTTI().then(function() {
                e.setState({
                    showPlaceholder: !1
                })
            })
        }, t.prototype.componentWillReceiveProps = function(e) {
            var t = e.path,
                r = e.expFolderOverview,
                o = e.componentNamespace;
            (!a.paths_are_equal(t, this.props.path) && (e.folderFileId || e.folderNsId) || !this.props.folderNsId && !this.props.folderFileId && e.folderNsId) && this.props.fetchDataForFolder({
                path: t,
                expFolderOverview: r,
                componentNamespace: o,
                fetchContentReferences: !0
            }), !this.props.folderFileId && e.folderFileId && s.getQueryArgs().folder_overview && (this.props.updateFolderData({
                fileId: e.folderFileId,
                folderData: {
                    isCollapsed: !1
                }
            }), this.props.saveFolderData({
                folderFileId: e.folderFileId
            }))
        }, t.prototype.componentDidUpdate = function(e) {
            this.container && this.props.onChangeHeight(this.container.getBoundingClientRect().height), !e.loadedComponents.includes("description") && this.props.loadedComponents.includes("description") && this.props.descriptionBaseRevision && this.setState({
                showPlaceholder: !1
            })
        }, t.prototype.componentWillUnmount = function() {
            "V2" !== this.experimentVariant && "V3" !== this.experimentVariant || (d.folderOverviewLiveUpdateManager.removeListener("update", this.handleLiveUpdate), d.folderOverviewLiveUpdateManager.stop())
        }, Object.defineProperty(t.prototype, "experimentVariant", {
            get: function() {
                return "V1" === this.props.expFolderOverview || "V2" === this.props.expFolderOverview || "V3" === this.props.expFolderOverview ? this.props.expFolderOverview : "V3"
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.render = function() {
            if (!this.shouldRenderFolderOverview(this.props)) return null;
            var e = !this.props.haveAllComponentsLoaded || this.props.hasFailedToLoad || this.props.browseLoadingState === l.LoadingState.LOADING_FIRST_PAGE;
            return n.default.createElement("div", {
                "aria-hidden": e || !this.props.isOpen,
                className: o.default({
                    "folder-overview": !0,
                    "folder-overview--expanded": this.props.isOpen,
                    "folder-overview--loading": e
                }),
                ref: this.setContainerRef
            }, n.default.createElement(i.CollapsableSection, {
                title: f._("Overview", {
                    comment: "Overview of collapsible folder overview section"
                }),
                isOpen: this.props.isOpen,
                onHeaderClick: this.handleHeaderClick,
                strings: {
                    buttonClose: f._("Hide"),
                    buttonOpen: f._("Show")
                },
                containerClassName: o.default({
                    "folder-overview__border": "V3" === this.props.expFolderOverview && this.props.descriptionHasFocus,
                    "folder-overview__fixed-toolbar-container": "V3" === this.props.expFolderOverview
                })
            }, this.state.showPlaceholder ? n.default.createElement(p.WrappedFolderOverviewPlaceholder, {
                showExamples: !0,
                isReadOnly: this.props.isReadOnly,
                showExamplesAsButton: "V3" === this.props.expFolderOverview,
                onClick: this.handlePlaceholderClick,
                onExampleButtonClick: this.handleExamplesButtonClick
            }) : n.default.createElement(c.AsyncFolderOverviewDescription, {
                path: this.props.path,
                componentNamespace: this.props.componentNamespace,
                expFolderOverview: this.experimentVariant,
                isReadOnly: this.props.isReadOnly || !this.props.descriptionFormatValid,
                showReadOnlyIcon: !0,
                showDraftIcon: "V3" !== this.props.expFolderOverview,
                descriptionKey: [this.props.folderFileId, this.props.descriptionBaseRevision].join("-"),
                showExamplesInPlaceholder: !0,
                shouldHidePlaceholder: !1,
                limitedWidth: !1,
                toolbarTopMargin: 146,
                canShareFolder: this.props.canShareFolder
            }), n.default.createElement(c.AsyncFolderOverviewContentReferences, {
                path: this.props.path,
                componentNamespace: this.props.componentNamespace,
                isReadOnly: this.props.isReadOnly,
                onNavigateToFileOrFolder: this.props.onNavigateToFileOrFolder
            }), n.default.createElement(c.AsyncFolderOverviewLastEdit, {
                path: this.props.path,
                componentNamespace: this.props.componentNamespace
            })))
        }, t
    })(n.default.PureComponent);
    t.FolderOverviewController = m
}), define("modules/clean/react/folder_overview/data/action_creators", ["require", "exports", "tslib", "modules/clean/filepath", "modules/clean/react/browse/data/selectors", "modules/clean/react/folder_overview/api", "modules/clean/react/folder_overview/constants", "modules/clean/react/folder_overview/data/selectors", "modules/clean/react/folder_overview/data/types", "modules/clean/react/folder_overview/errors", "modules/clean/react/folder_overview/live_update", "modules/clean/react/folder_overview/logging", "modules/clean/react/folder_overview/utils", "modules/clean/react/snackbar", "modules/clean/storage", "modules/clean/viewer", "modules/clean/web_user_action_events", "modules/core/exception"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h, f, m, S) {
    "use strict";
    var g = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), i = r.__importStar(i), s = r.__importStar(s), p = r.__importStar(p), S = r.__importStar(S), t.fetchDataForFolder = function(e) {
        var o = e.path,
            n = e.nsId,
            c = e.expFolderOverview,
            d = e.componentNamespace,
            u = e.fetchContentReferences;
        return function(e, _) {
            return r.__awaiter(g, void 0, void 0, function() {
                var h, f, m, g, v, E, w, F, y, C, I, O, P, R, D, A;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            f = !1, m = !1, g = p.normalizePath(o), v = Date.now(), E = s.componentDataCache(_())[d], E && 0 !== E.requiredComponents.length || (w = u ? ["content_references", "description", "draftjs"] : ["description", "draftjs"], e(t.setRequiredComponents({
                                componentNamespace: d,
                                requiredComponents: w
                            }))), F = [], r.label = 1;
                        case 1:
                            if (r.trys.push([1, 3, , 4]), y = s.user(_()).id, h = s.fileIdCache(_())[g], C = h || s.nsIdCache(_())[g] || n, !C) throw new Error("Unable to get file ID or NS ID for current folder");
                            return e(t.setFailedToLoad({
                                componentNamespace: d,
                                hasFailedToLoad: !1
                            })), I = h ? s.folderDataCache(_())[h] : void 0, I && I.descriptionLastUpdated && v - I.descriptionLastUpdated < a.DATA_CACHE_TTL_MS ? (f = !!I.descriptionBaseRevision, F.push(Promise.resolve(null))) : (e(t.removeLoadedComponent({
                                componentNamespace: d,
                                component: "description"
                            })), F.push(i.getDescription(y, C))), I && I.contentReferencesLastUpdated && v - I.contentReferencesLastUpdated < a.DATA_CACHE_TTL_MS ? (m = !!I.contentReferencesRevision, F.push(Promise.resolve(null))) : u && (e(t.removeLoadedComponent({
                                componentNamespace: d,
                                component: "content_references"
                            })), F.push(i.getContentReferences(y, C))), [4, Promise.all(F)];
                        case 2:
                            if (O = r.sent(), P = O[0], R = O[1], P && (h = P.file_obj_id), !h) throw new Error("Did not get a file ID from the Sprinkle description payload");
                            return e({
                                type: l.ActionTypes.UPDATE_FILE_ID_CACHE,
                                payload: {
                                    fileIdCache: (A = {}, A[p.normalizePath(o)] = h, A)
                                }
                            }), f = !!P && b(e, h, P, d, v), m = !!R && T(e, h, R, f, d, v, c), "V1" === c || "V2" === c || "V3" === c || m || f || e(t.addLoadedComponent({
                                componentNamespace: d,
                                component: "draftjs"
                            })), I = s.folderDataCache(_())[h], I && I.sharedFolderPath || e(t.fetchSharedFolderName({
                                path: o
                            })), I && I.loggingFileId || e(t.fetchLoggingFileId({
                                path: o
                            })), e(t.loadFolderPreferences({
                                folderFileId: h
                            })), [3, 4];
                        case 3:
                            return D = r.sent(), S.reportException({
                                err: D,
                                severity: "non-critical",
                                exc_extra: {
                                    path: o,
                                    expFolderOverview: c
                                }
                            }), e(t.setFailedToLoad({
                                componentNamespace: d,
                                hasFailedToLoad: !0
                            })), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }, t.handlePrefetch = function(e) {
        var t = e.path,
            o = e.expFolderOverview,
            n = e.content_references,
            i = e.description,
            a = e.componentNamespace,
            s = e.ts,
            c = void 0 === s ? Date.now() : s;
        return function(e) {
            return r.__awaiter(g, void 0, void 0, function() {
                var s, d, u, _, h;
                return r.__generator(this, function(r) {
                    try {
                        if (s = i || {}, d = n || {}, u = s.file_obj_id, !u) throw new Error("Did not get a file ID from the Odyssey prefetch payload");
                        e({
                            type: l.ActionTypes.UPDATE_FILE_ID_CACHE,
                            payload: {
                                fileIdCache: (h = {}, h[p.normalizePath(t)] = u, h)
                            }
                        }), _ = s && b(e, u, s, a, c), d && T(e, u, d, _, a, c, o)
                    } catch (e) {
                        S.reportException({
                            err: e,
                            severity: "non-critical",
                            exc_extra: {
                                path: t,
                                expFolderOverview: o
                            }
                        })
                    }
                    return [2]
                })
            })
        }
    }, t.loadFolderPreferences = function(e) {
        var o = e.folderFileId;
        return function(e, n) {
            return r.__awaiter(g, void 0, void 0, function() {
                var i, a;
                return r.__generator(this, function(r) {
                    return i = s.user(n()).id, h.UserLocalStorage.clearOtherUsers([i]), (a = h.UserLocalStorage.get(i, "folder-overview-" + o)) ? (e(t.updateFolderDataCache({
                        fileId: o,
                        folderData: a
                    })), [2]) : [2]
                })
            })
        }
    }, t.saveFolderPreferences = function(e) {
        var t = e.folderFileId;
        return function(e, o) {
            return r.__awaiter(g, void 0, void 0, function() {
                var e, n;
                return r.__generator(this, function(r) {
                    return e = s.user(o()).id, h.UserLocalStorage.clearOtherUsers([e]), (n = s.folderDataCache(o())[t]) ? (h.UserLocalStorage.set(e, "folder-overview-" + t, {
                        isCollapsed: n.isCollapsed
                    }), [2]) : [2]
                })
            })
        }
    }, t.addLoadedComponent = function(e) {
        var t = e.componentNamespace,
            r = e.component;
        return {
            type: l.ActionTypes.ADD_LOADED_COMPONENT,
            payload: {
                componentNamespace: t,
                component: r
            }
        }
    }, t.removeLoadedComponent = function(e) {
        var t = e.componentNamespace,
            r = e.component;
        return {
            type: l.ActionTypes.REMOVE_LOADED_COMPONENT,
            payload: {
                componentNamespace: t,
                component: r
            }
        }
    }, t.setFailedToLoad = function(e) {
        var t = e.componentNamespace,
            r = e.hasFailedToLoad;
        return {
            type: l.ActionTypes.SET_FAILED_TO_LOAD,
            payload: {
                componentNamespace: t,
                hasFailedToLoad: r
            }
        }
    }, t.setDescriptionData = function(e, r, o) {
        var n = e.text,
            i = e.latest_revision_id,
            a = e.file_obj_id,
            s = e.bolt_channel_state,
            c = e.format_version,
            d = e.last_modified_time,
            u = e.last_modified_user;
        if (!a) throw new Error("Unexpected response from Sprinkle");
        var p = i || "";
        r(t.updateFolderDataCache({
            fileId: a,
            folderData: {
                description: n,
                descriptionBaseRevision: p,
                descriptionLatestRevision: p,
                descriptionDraft: void 0,
                descriptionSaveState: l.DescriptionSaveState.IDLE,
                descriptionFormatVersion: c,
                descriptionBoltChannelState: s,
                descriptionLastUpdated: Date.now()
            }
        })), r(t.addLoadedComponent({
            componentNamespace: o,
            component: "description"
        })), r(E({
            folderFileId: a,
            time: d,
            userId: u
        })), t.subscribeToBolt("description", s)
    }, t.reloadDescription = function(e) {
        var o = e.folderFileId,
            n = e.componentNamespace;
        return function(e, a) {
            return r.__awaiter(g, void 0, void 0, function() {
                var l, c, d;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            l = s.user(a()), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, i.getDescription(l.id, o)];
                        case 2:
                            return c = r.sent(), t.setDescriptionData(c, e, n), [3, 4];
                        case 3:
                            return d = r.sent(), S.reportException({
                                err: d,
                                severity: S.SEVERITY.NONCRITICAL,
                                tags: ["browse", "folder_overview"],
                                exc_extra: {
                                    fileId: o,
                                    isReload: !0
                                }
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }, t.saveDescriptionDraft = function(e) {
        var o = e.folderFileId,
            n = e.componentNamespace;
        return function(e, d) {
            return r.__awaiter(g, void 0, void 0, function() {
                function p(r) {
                    e(t.updateFolderDataCache({
                        fileId: o,
                        folderData: r
                    }))
                }
                var _, h, f, S, g, E, b, T, F, y, C;
                return r.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            _ = s.user(d()).id, t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), h = s.folderDataCache(d()), f = h[o], f && v(f) ? (p({
                                descriptionSaveState: l.DescriptionSaveState.SAVING
                            }), [4, i.setDescription(_, o, f.descriptionLatestRevision, f.descriptionDraft, a.DESCRIPTION_VERSION.join("."))]) : [2];
                        case 2:
                            return S = t.sent(), g = S.text, E = S.latest_revision_id, b = S.last_modified_time, T = S.last_modified_user, p({
                                description: g,
                                descriptionLatestRevision: E,
                                descriptionSaveState: l.DescriptionSaveState.IDLE,
                                lastModifiedTime: b,
                                lastModifiedUserId: T
                            }), F = "BROWSE" === n ? m.ActionSurfaceLogValue.CENTER_PANE : m.ActionSurfaceLogValue.RIGHT_SIDEBAR, y = "search-sidebar" === n ? m.RetrievalSourceValue.SEARCH : m.RetrievalSourceValue.BROWSE, u.logOverviewEdited({
                                folderFileId: o,
                                action_surface: F,
                                retrievalSource: y,
                                loggingFileId: f.loggingFileId
                            }), [3, 4];
                        case 3:
                            return C = t.sent(), i.isConflictError(C) ? (p({
                                descriptionSaveState: l.DescriptionSaveState.CONFLICT,
                                lastModifiedUserId: void 0
                            }), e(w({
                                folderFileId: o
                            }))) : i.isFormatVersionError(C) ? (c.showDescriptionFormatError(), p({
                                descriptionSaveState: l.DescriptionSaveState.ERROR
                            })) : (c.showDescriptionSaveError(), p({
                                descriptionSaveState: l.DescriptionSaveState.ERROR
                            })), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }, t.setContentReferencesData = function(e, r, o, n) {
        var i = r.content_references || [],
            a = r.latest_revision_id,
            s = r.last_modified_time,
            l = r.last_modified_user;
        o(t.updateFolderDataCache({
            fileId: e,
            folderData: {
                contentReferences: i,
                contentReferencesRevision: a,
                contentReferencesBoltChannelState: r.bolt_channel_state,
                contentReferencesLastUpdated: Date.now()
            }
        })), o(E({
            folderFileId: e,
            time: s,
            userId: l
        })), o(t.addLoadedComponent({
            componentNamespace: n,
            component: "content_references"
        })), t.subscribeToBolt("content_references", r.bolt_channel_state)
    }, t.reloadContentReferences = function(e) {
        var o = e.folderFileId,
            n = e.componentNamespace;
        return function(e, a) {
            return r.__awaiter(g, void 0, void 0, function() {
                var l, c, d;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            l = s.user(a()), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, i.getContentReferences(l.id, o)];
                        case 2:
                            return c = r.sent(), t.setContentReferencesData(o, c, e, n), [3, 4];
                        case 3:
                            return d = r.sent(), S.reportException({
                                err: d,
                                severity: S.SEVERITY.NONCRITICAL,
                                tags: ["browse", "folder_overview"],
                                exc_extra: {
                                    fileId: o,
                                    isReload: !0
                                }
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }, t.addContentReferences = function(e) {
        var o = e.folderFileId,
            n = e.fileIds,
            a = e.componentNamespace;
        return function(e, l) {
            return r.__awaiter(g, void 0, void 0, function() {
                var c, d, p, _, h, f;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            c = s.user(l()).id, d = s.folderDataCache(l())[o], p = d && d.loggingFileId, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, i.addContentReferences(c, o, n)];
                        case 2:
                            return r.sent(), e(t.reloadContentReferences({
                                folderFileId: o,
                                componentNamespace: a
                            })), _ = "BROWSE" === a ? m.ActionSurfaceLogValue.CENTER_PANE : m.ActionSurfaceLogValue.RIGHT_SIDEBAR, h = "search-sidebar" === a ? m.RetrievalSourceValue.SEARCH : m.RetrievalSourceValue.BROWSE, u.logOverviewEdited({
                                folderFileId: o,
                                action_surface: _,
                                retrievalSource: h,
                                loggingFileId: p
                            }), [3, 4];
                        case 3:
                            return f = r.sent(), S.reportException({
                                err: f,
                                severity: S.SEVERITY.NONCRITICAL,
                                tags: ["browse", "folder_overview"]
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }, t.addContentReferencesForPath = function(e) {
        var n = e.path,
            l = e.files;
        return function(e, c) {
            return r.__awaiter(g, void 0, void 0, function() {
                var d, u, h, m;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            d = s.user(c()), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, i.addContentReferencesToPath(d.id, n, l.map(p.fileToContentReferenceId))];
                        case 2:
                            return r.sent(), 1 === l.length ? _.Snackbar.complete(a.PIN_TO_SUCCESS_SINGLE.format({
                                file: o.filename(l[0].fq_path),
                                path: o.filename(n, f.Viewer.get_root_name(d))
                            }), "folder-overview-pin") : _.Snackbar.complete(a.PIN_TO_SUCCESS_MULTIPLE.format({
                                num: l.length,
                                path: o.filename(n, f.Viewer.get_root_name(d))
                            }), "folder-overview-pin"), u = s.fileIdCache(c())[p.normalizePath(n)], u && e(t.reloadContentReferences({
                                folderFileId: u,
                                componentNamespace: "BROWSE"
                            })), [3, 4];
                        case 3:
                            h = r.sent(), S.reportException({
                                err: h,
                                severity: S.SEVERITY.NONCRITICAL,
                                tags: ["browse", "folder_overview"]
                            });
                            try {
                                if (m = h.error.status[".tag"], "permission_denied" === m) return _.Snackbar.fail(a.PIN_TO_FAILURE_PERMISSION_DENIED.format({
                                    file: o.filename(l[0].fq_path),
                                    path: o.filename(n, f.Viewer.get_root_name(d))
                                }), "folder-overview-pin"), [2]
                            } catch (e) {}
                            return 1 === l.length ? _.Snackbar.fail(a.PIN_TO_FAILURE_SINGLE.format({
                                file: o.filename(l[0].fq_path),
                                path: o.filename(n, f.Viewer.get_root_name(d))
                            }), "folder-overview-pin") : _.Snackbar.fail(a.PIN_TO_FAILURE_MULTIPLE.format({
                                num: l.length,
                                path: o.filename(n, f.Viewer.get_root_name(d))
                            }), "folder-overview-pin"), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }, t.removeContentReferences = function(e) {
        var o = e.folderFileId,
            n = e.fileIds,
            a = e.componentNamespace;
        return function(e, l) {
            return r.__awaiter(g, void 0, void 0, function() {
                var c, d, p, _, h, f;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            c = s.user(l()).id, d = s.folderDataCache(l())[o], p = d && d.loggingFileId, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, i.removeContentReferences(c, o, n)];
                        case 2:
                            return r.sent(), e(t.reloadContentReferences({
                                folderFileId: o,
                                componentNamespace: a
                            })), _ = "BROWSE" === a ? m.ActionSurfaceLogValue.CENTER_PANE : m.ActionSurfaceLogValue.RIGHT_SIDEBAR, h = "search-sidebar" === a ? m.RetrievalSourceValue.SEARCH : m.RetrievalSourceValue.BROWSE, u.logOverviewEdited({
                                folderFileId: o,
                                action_surface: _,
                                retrievalSource: h,
                                loggingFileId: p
                            }), [3, 4];
                        case 3:
                            return f = r.sent(), S.reportException({
                                err: f,
                                severity: S.SEVERITY.NONCRITICAL,
                                tags: ["browse", "folder_overview"]
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }, t.updateFolderDataCache = function(e) {
        var t = e.fileId,
            r = e.folderData;
        return {
            type: l.ActionTypes.UPDATE_FOLDER_DATA_CACHE,
            payload: {
                fileId: t,
                folderData: r
            }
        }
    }, t.setRequiredComponents = function(e) {
        var t = e.componentNamespace,
            r = e.requiredComponents;
        return {
            type: l.ActionTypes.SET_REQUIRED_COMPONENTS,
            payload: {
                componentNamespace: t,
                requiredComponents: r
            }
        }
    }, t.setDescriptionHasFocus = function(e) {
        var t = e.componentNamespace,
            r = e.descriptionHasFocus;
        return {
            type: l.ActionTypes.SET_DESCRIPTION_HAS_FOCUS,
            payload: {
                componentNamespace: t,
                descriptionHasFocus: r
            }
        }
    };
    var v = function(e) {
        return !!e && (e.descriptionSaveState !== l.DescriptionSaveState.CONFLICT && (e.descriptionSaveState !== l.DescriptionSaveState.SAVING && p.hasUnsavedDescriptionDraft(e)))
    };
    t.fetchSharedFolderName = function(e) {
        var n = e.path;
        return function(e, a) {
            return r.__awaiter(g, void 0, void 0, function() {
                var l, c, d, u, _, h, f;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (o.paths_are_equal(n, "/")) return [2];
                            if (l = p.normalizePath(n), c = s.nsIdCache(a())[l], !c) return [2];
                            if (d = s.fileIdCache(a())[l], u = s.user(a()).id, _ = p.extractSharedFolderId(c), !_) return [2];
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, i.getSharedFolderPath({
                                userId: u,
                                sharedFolderId: _
                            })];
                        case 2:
                            return h = r.sent(), e(t.updateFolderDataCache({
                                fileId: d,
                                folderData: {
                                    sharedFolderPath: h
                                }
                            })), [3, 4];
                        case 3:
                            return f = r.sent(), S.reportException({
                                err: f,
                                severity: S.SEVERITY.NONCRITICAL,
                                tags: ["browse", "folder_overview"]
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }, t.fetchAccountForUserId = function(e) {
        var t = e.accountId;
        return function(e, o) {
            return r.__awaiter(g, void 0, void 0, function() {
                var n, a, c;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return n = s.user(o()), t ? t in s.accountCache(o()) ? [2] : t === n.account_id ? [2] : [4, i.getUserAccount({
                                userId: n.id,
                                accountId: t
                            })] : [2];
                        case 1:
                            return a = r.sent(), e({
                                type: l.ActionTypes.UPDATE_ACCOUNT_CACHE,
                                payload: {
                                    accountCache: (c = {}, c[t] = a, c)
                                }
                            }), [2]
                    }
                })
            })
        }
    }, t.fetchLoggingFileId = function(e) {
        var a = e.path;
        return function(e, l) {
            return r.__awaiter(g, void 0, void 0, function() {
                var c, d, u, _, h;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (o.paths_are_equal(a, "/")) return [2];
                            if (o.paths_are_equal(n.context(l()).currentFQPath, a) && !n.context(l()).currentNSPath) return [2];
                            c = p.normalizePath(a), d = s.fileIdCache(l())[c], u = s.user(l()).id, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, i.getLoggingFileId({
                                userId: u,
                                path: c
                            })];
                        case 2:
                            return _ = r.sent(), e(t.updateFolderDataCache({
                                fileId: d,
                                folderData: {
                                    loggingFileId: _
                                }
                            })), [3, 4];
                        case 3:
                            return h = r.sent(), S.reportException({
                                err: h,
                                severity: S.SEVERITY.NONCRITICAL,
                                tags: ["browse", "folder_overview"]
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    };
    var E = function(e) {
        var r = e.folderFileId,
            o = e.time,
            n = e.userId;
        return function(e, i) {
            if (o && n) {
                var a = s.folderDataCache(i())[r];
                a && (a.lastModifiedTime && o < a.lastModifiedTime || (e(t.updateFolderDataCache({
                    fileId: r,
                    folderData: {
                        lastModifiedTime: o,
                        lastModifiedUserId: n
                    }
                })), e(t.fetchAccountForUserId({
                    accountId: n
                }))))
            }
        }
    };
    t.subscribeToBolt = function(e, t) {
        if (void 0 !== t) try {
            var r = t.channel_id,
                o = t.revision,
                n = t.token;
            if (void 0 === r || void 0 === o || void 0 === n) return;
            var i = r.unique_id,
                a = r.app_id;
            if (void 0 === i || void 0 === a) return;
            d.folderOverviewLiveUpdateManager.setUpdateChannelForType(e, {
                uniqueId: i,
                appId: a,
                token: n,
                revision: "" + o
            })
        } catch (e) {
            S.reportException({
                err: e,
                severity: S.SEVERITY.NONCRITICAL,
                tags: ["browse", "folder_overview"]
            })
        }
    };
    var w = function(e) {
            var t = e.folderFileId;
            return function(e, o) {
                return r.__awaiter(g, void 0, void 0, function() {
                    var n, a, l, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = s.user(o()), [4, i.getDescription(n.id, t)];
                            case 1:
                                return a = r.sent(), l = a.last_modified_time, c = a.last_modified_user, e(E({
                                    folderFileId: t,
                                    time: l,
                                    userId: c
                                })), [2]
                        }
                    })
                })
            }
        },
        b = function(e, r, o, n, i) {
            return o.latest_revision_id ? (t.setDescriptionData(o, e, n), !0) : (e(t.addLoadedComponent({
                componentNamespace: n,
                component: "description"
            })), e(t.updateFolderDataCache({
                fileId: r,
                folderData: {
                    descriptionBoltChannelState: o.bolt_channel_state,
                    descriptionLastUpdated: i
                }
            })), t.subscribeToBolt("description", o.bolt_channel_state), !1)
        },
        T = function(e, r, o, n, i, a, s) {
            if (o.latest_revision_id) return t.setContentReferencesData(r, o, e, i), !0;
            var l = "V1" === s || "V2" === s || "V3" === s || n;
            return e(t.updateFolderDataCache({
                fileId: r,
                folderData: {
                    contentReferences: l ? [] : void 0,
                    contentReferencesBoltChannelState: l ? o.bolt_channel_state : void 0,
                    contentReferencesLastUpdated: a
                }
            })), e(t.addLoadedComponent({
                componentNamespace: i,
                component: "content_references"
            })), !1
        }
}), define("modules/clean/react/folder_overview/data/reducer", ["require", "exports", "tslib", "modules/clean/react/browse/data/types", "modules/clean/react/browse/models", "modules/clean/react/folder_overview/data/types", "modules/clean/react/folder_overview/utils", "modules/clean/search/single_page/data/types"], function(e, t, r, o, n, i, a, s) {
    "use strict";

    function l(e, r) {
        switch (void 0 === e && (e = t.defaultFolderOverviewState), r.type) {
            case i.ActionTypes.UPDATE_FOLDER_DATA_CACHE:
                return p(e, r.payload);
            case i.ActionTypes.UPDATE_FILE_ID_CACHE:
                return d(e, r.payload);
            case i.ActionTypes.UPDATE_ACCOUNT_CACHE:
                return u(e, r.payload);
            case i.ActionTypes.SET_REQUIRED_COMPONENTS:
                return h(e, r.payload);
            case o.ActionTypes.SET_CONTEXT:
                return c(e, r.payload);
            case i.ActionTypes.REMOVE_LOADED_COMPONENT:
                return f(e, r.payload);
            case i.ActionTypes.ADD_LOADED_COMPONENT:
                return m(e, r.payload);
            case i.ActionTypes.SET_FAILED_TO_LOAD:
                return S(e, r.payload);
            case i.ActionTypes.SET_DESCRIPTION_HAS_FOCUS:
                return g(e, r.payload);
            case o.ActionTypes.SET_UNSORTED_FILES:
                return v(e, r.payload);
            case s.ActionTypes.SET_RESULTS:
            case s.ActionTypes.APPEND_RESULTS:
                return E(e, r.payload)
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.defaultFolderOverviewState = {
        folderDataCache: {},
        fileIdCache: {},
        accountCache: {},
        nsIdCache: {},
        componentDataCache: {}
    };
    var c = function(e, t) {
            var o, n = t.context;
            return r.__assign({}, e, {
                nsIdCache: r.__assign({}, e.nsIdCache, (o = {}, o[a.normalizePath(n.currentFQPath)] = "ns:" + n.currentNSID + "/" + n.currentNSPath, o))
            })
        },
        d = function(e, t) {
            var o = t.fileIdCache;
            return r.__assign({}, e, {
                fileIdCache: r.__assign({}, e.fileIdCache, o)
            })
        },
        u = function(e, t) {
            var o = t.accountCache;
            return r.__assign({}, e, {
                accountCache: r.__assign({}, e.accountCache, o)
            })
        },
        p = function(e, t) {
            var o, n = t.fileId,
                i = t.folderData;
            return r.__assign({}, e, {
                folderDataCache: r.__assign({}, e.folderDataCache, (o = {}, o[n] = r.__assign({}, e.folderDataCache[n], i), o))
            })
        },
        _ = function(e, t) {
            var r = e.componentDataCache[t];
            return r ? r : {
                requiredComponents: [],
                loadedComponents: [],
                hasFailedToLoad: !1,
                descriptionHasFocus: !1
            }
        },
        h = function(e, t) {
            var o, n = t.componentNamespace,
                i = t.requiredComponents,
                a = _(e, n);
            return r.__assign({}, e, {
                componentDataCache: r.__assign({}, e.componentDataCache, (o = {}, o[n] = r.__assign({}, a, {
                    requiredComponents: i
                }), o))
            })
        },
        f = function(e, t) {
            var o, n = t.componentNamespace,
                i = t.component,
                a = _(e, n),
                s = a.loadedComponents;
            return r.__assign({}, e, {
                componentDataCache: r.__assign({}, e.componentDataCache, (o = {}, o[n] = r.__assign({}, a, {
                    loadedComponents: s.filter(function(e) {
                        return e !== i
                    })
                }), o))
            })
        },
        m = function(e, t) {
            var o, n = t.componentNamespace,
                i = t.component,
                a = _(e, n),
                s = a.loadedComponents;
            return s.includes(i) ? e : r.__assign({}, e, {
                componentDataCache: r.__assign({}, e.componentDataCache, (o = {}, o[n] = r.__assign({}, a, {
                    loadedComponents: s.concat([i])
                }), o))
            })
        },
        S = function(e, t) {
            var o, n = t.componentNamespace,
                i = t.hasFailedToLoad,
                a = _(e, n);
            return r.__assign({}, e, {
                componentDataCache: r.__assign({}, e.componentDataCache, (o = {}, o[n] = r.__assign({}, a, {
                    hasFailedToLoad: i
                }), o))
            })
        },
        g = function(e, t) {
            var o, n = t.componentNamespace,
                i = t.descriptionHasFocus,
                a = _(e, n);
            return r.__assign({}, e, {
                componentDataCache: r.__assign({}, e.componentDataCache, (o = {}, o[n] = r.__assign({}, a, {
                    descriptionHasFocus: i
                }), o))
            })
        },
        v = function(e, t) {
            var o = t.unsortedFiles,
                n = o.filter(function(e) {
                    return e.is_dir
                }).toArray();
            return r.__assign({}, e, {
                nsIdCache: r.__assign({}, e.nsIdCache, w(n))
            })
        },
        E = function(e, t) {
            var o = t.searchResults,
                i = o.results.filter(function(e) {
                    return e instanceof n.File && e.is_dir
                });
            return r.__assign({}, e, {
                nsIdCache: r.__assign({}, e.nsIdCache, w(i))
            })
        },
        w = function(e) {
            var t = {};
            return e.forEach(function(e) {
                t[a.normalizePath(e.fq_path)] = e.target_ns ? "ns:" + e.target_ns + "/" : "ns:" + e.ns_id + "/" + e.ns_path
            }), t
        };
    t.folderOverviewReducer = l
}), define("modules/clean/react/folder_overview/data/selectors", ["require", "exports", "tslib", "external/reselect", "modules/clean/filepath", "modules/clean/react/folder_overview/constants", "modules/clean/react/folder_overview/data/reducer", "modules/clean/react/folder_overview/utils", "modules/clean/redux/namespaces", "modules/clean/redux/selectors"], function(e, t, r, o, n, i, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), s = r.__importStar(s);
    var d = function(e, t) {
            return t.path
        },
        u = function(e, t) {
            return t.componentNamespace
        },
        p = function(e) {
            return c.getStateAtNamespace(e, l.FOLDER_OVERVIEW_NAMESPACE_KEY) || a.defaultFolderOverviewState
        };
    t.folderDataCache = function(e) {
        return p(e).folderDataCache
    }, t.fileIdCache = function(e) {
        return p(e).fileIdCache
    }, t.nsIdCache = function(e) {
        return p(e).nsIdCache
    }, t.accountCache = function(e) {
        return p(e).accountCache
    }, t.componentDataCache = function(e) {
        return p(e).componentDataCache
    }, t.user = function(e) {
        return e.BROWSE && e.BROWSE.user || e.SEARCH.user
    }, t.makeSelectors = function() {
        var e = o.createSelector(t.componentDataCache, u, function(e, t) {
                return e[t]
            }),
            r = o.createSelector(e, function(e) {
                return e ? e.loadedComponents : void 0
            }),
            a = o.createSelector(e, function(e) {
                return !(!e || 0 === e.requiredComponents.length) && 0 === e.requiredComponents.filter(function(t) {
                    return !e.loadedComponents.includes(t)
                }).length
            }),
            l = o.createSelector(e, function(e) {
                return !!e && e.hasFailedToLoad
            }),
            c = o.createSelector(e, function(e) {
                return !!e && e.descriptionHasFocus
            }),
            p = o.createSelector(t.fileIdCache, d, function(e, t) {
                return e[s.normalizePath(t)]
            }),
            _ = o.createSelector(t.nsIdCache, d, function(e, t) {
                return e[s.normalizePath(t)]
            }),
            h = o.createSelector(t.nsIdCache, d, function(e, t) {
                var r = e[s.normalizePath(t)];
                if (r) return s.extractSharedFolderId(r)
            }),
            f = o.createSelector(t.user, s.convertDbxUserToIUser),
            m = o.createSelector(t.folderDataCache, p, function(e, t) {
                return e[t]
            }),
            S = o.createSelector(m, function(e) {
                return !!e && !!e.isCollapsed
            }),
            g = o.createSelector(m, function(e) {
                return e ? e.descriptionBaseRevision : void 0
            }),
            v = o.createSelector(m, function(e) {
                return e ? e.lastModifiedTime : void 0
            }),
            E = o.createSelector(m, function(e) {
                return e ? e.lastModifiedUserId : void 0
            }),
            w = o.createSelector(E, t.accountCache, function(e, t) {
                return e ? t[e] : void 0
            }),
            b = o.createSelector(m, function(e) {
                return e ? e.descriptionSaveState : void 0
            }),
            T = o.createSelector(m, function(e) {
                if (e && e.description) try {
                    return JSON.parse(e.description)
                } catch (e) {
                    return
                }
            }),
            F = o.createSelector(m, function(e) {
                return e ? e.descriptionFormatVersion : void 0
            }),
            y = o.createSelector(F, function(e) {
                if (!e) return !0;
                var t = e.split(".").map(function(e) {
                    return parseInt(e, 10)
                });
                return !(t[0] > i.DESCRIPTION_VERSION[0]) && !(t[0] === i.DESCRIPTION_VERSION[0] && t[1] > i.DESCRIPTION_VERSION[1])
            }),
            C = o.createSelector(T, function(e) {
                return !e || !(e.blocks.length > 1) && (0 === e.blocks.length || "" === e.blocks[0].text)
            }),
            I = o.createSelector(m, s.hasUnsavedDescriptionDraft),
            O = o.createSelector(m, d, function(e, t) {
                return e ? e.sharedFolderPath || t : void 0
            }),
            P = o.createSelector(m, d, function(e, t) {
                return e ? n.filename(e.sharedFolderPath || t) : void 0
            }),
            R = o.createSelector(m, function(e) {
                return e ? e.loggingFileId : void 0
            }),
            D = o.createSelector(m, function(e) {
                if (void 0 !== e && void 0 !== e.contentReferences) return s.convertContentReferencesToSortedFiles(e.contentReferences)
            });
        return {
            loadedComponents: r,
            haveAllComponentsLoaded: a,
            hasFailedToLoad: l,
            folderFileId: p,
            folderNsId: _,
            sharedFolderId: h,
            descriptionAuthor: f,
            isCollapsed: S,
            descriptionBaseRevision: g,
            lastModifiedTime: v,
            lastModifiedUserId: E,
            lastModifiedUser: w,
            descriptionSaveState: b,
            descriptionContent: T,
            descriptionFormatVersion: F,
            descriptionFormatValid: y,
            descriptionContentIsEmpty: C,
            descriptionHasFocus: c,
            hasUnsavedDescriptionDraft: I,
            sharedFolderPath: O,
            sharedFolderName: P,
            loggingFileId: R,
            pinnedItems: D,
            isFolderOverviewEmpty: o.createSelector(C, D, function(e, t) {
                return e && !(t && t.length)
            }),
            doesFolderOverviewExist: o.createSelector(m, function(e) {
                return !(!e || !e.descriptionBaseRevision && !e.contentReferencesRevision)
            })
        }
    }
}), define("modules/clean/react/folder_overview/data/store", ["require", "exports", "modules/clean/react/folder_overview/data/reducer", "modules/clean/redux/store", "modules/clean/redux/namespaces"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i;
    t.getStoreForFolderOverview = function() {
        var e;
        return i || (i = o.getStoreAndRegisterReducers((e = {}, e[n.FOLDER_OVERVIEW_NAMESPACE_KEY] = r.folderOverviewReducer, e))), i
    }
}), define("modules/clean/react/folder_overview/data/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.UPDATE_FOLDER_DATA_CACHE = "FOLDER_OVERVIEW/UPDATE_FOLDER_DATA_CACHE", e.UPDATE_FILE_ID_CACHE = "FOLDER_OVERVIEW/UPDATE_FILE_ID_CACHE", e.REMOVE_LOADED_COMPONENT = "FOLDER_OVERVIEW/REMOVE_LOADED_COMPONENT", e.ADD_LOADED_COMPONENT = "FOLDER_OVERVIEW/ADD_LOADED_COMPONENT", e.SET_FAILED_TO_LOAD = "FOLDER_OVERVIEW/SET_FAILED_TO_LOAD", e.SET_DESCRIPTION_HAS_FOCUS = "FOLDER_OVERVIEW/SET_DESCRIPTION_HAS_FOCUS", e.UPDATE_ACCOUNT_CACHE = "FOLDER_OVERVIEW/UPDATE_ACCOUNT_CACHE", e.SET_REQUIRED_COMPONENTS = "FOLDER_OVERVIEW/SET_REQUIRED_COMPONENTS"
    })(t.ActionTypes || (t.ActionTypes = {}));
    (function(e) {
        e.IDLE = "IDLE", e.SAVING = "SAVING", e.CONFLICT = "CONFLICT", e.ERROR = "ERROR"
    })(t.DescriptionSaveState || (t.DescriptionSaveState = {}))
}), define("modules/clean/react/folder_overview/errors", ["require", "exports", "modules/clean/react/folder_overview/constants", "modules/clean/react/snackbar"], function(e, t, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showDescriptionFormatError = function() {
        o.Snackbar.fail(r.ERROR_DESCRIPTION_FORMAT_VERSION, "folder-overview")
    }, t.showDescriptionSaveError = function() {
        o.Snackbar.fail(r.ERROR_DESCRIPTION_SAVE, "folder-overview")
    }
}), define("modules/clean/react/folder_overview/live_update", ["require", "exports", "tslib", "external/lodash", "external/eventemitter3", "modules/clean/bolt"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o);
    var a = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.setUpdateChannelForType = function(e, r) {
                t.signedChannelStates[e] = new i.SignedChannelState(r.appId, r.uniqueId, r.revision, r.token), t.boltClient.update_states(o.values(t.signedChannelStates)), t.boltClient.start()
            }, t.handleUpdate = function(e) {
                var r = [];
                e.forEach(function(e) {
                    var n = o.findKey(t.signedChannelStates, {
                        app_id: e.app_id,
                        unique_id: e.unique_id
                    });
                    n && !r.includes(n) && (t.emit("update", {
                        type: n
                    }), r.push(n))
                })
            }, t.handleRefresh = function() {
                t.boltClient.update_states(o.values(t.signedChannelStates))
            }, t.boltClient = new i.BoltClient([], t.handleUpdate, t.handleRefresh), t.signedChannelStates = {}, t
        }
        return r.__extends(t, e), t.prototype.stop = function() {
            this.boltClient.unsubscribe()
        }, t
    })(n.EventEmitter);
    t.FolderOverviewLiveUpdateManager = a, t.folderOverviewLiveUpdateManager = new a
}), define("modules/clean/react/folder_overview/logging", ["require", "exports", "tslib", "external/sjcl", "immutable", "modules/clean/filepath", "modules/clean/logging/hive/schemas/web-user-action", "modules/clean/logging/telemetry", "modules/clean/react/folder_overview/data/selectors", "modules/clean/react/folder_overview/data/store", "modules/clean/react/folder_overview/utils", "modules/clean/web_user_action_events"], function(e, t, r, o, n, i, a, s, l, c, d, u) {
    "use strict";

    function p(e) {
        var t = f(e);
        return {
            length: e ? _(e) : 0,
            features: e ? h(e) : [],
            tasks: t.all,
            checkedTasks: t.checked
        }
    }

    function _(e) {
        return e.blocks.map(function(e) {
            return e.text.length
        }).reduce(function(e, t) {
            return e + t
        }, 0)
    }

    function h(e) {
        var t = n.OrderedSet();
        return t = t.merge(e.blocks.map(function(e) {
            return e.type
        }).filter(function(e) {
            return "unstyled" !== e
        })), e.blocks.forEach(function(e) {
            return e.inlineStyleRanges.forEach(function(e) {
                t = t.add(e.style)
            })
        }), e.blocks.forEach(function(r) {
            return r.entityRanges.forEach(function(r) {
                t = t.add(e.entityMap[r.key].type)
            })
        }), t.toArray().sort()
    }

    function f(e) {
        var t = {
            all: 0,
            checked: 0
        };
        return e ? (e.blocks.forEach(function(e) {
            "task-block" === e.type && (t.all += 1, e.data && e.data.checked && (t.checked += 1))
        }), t) : t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), i = r.__importStar(i), s = r.__importStar(s), l = r.__importStar(l), t.hiveLogger = new s.HiveLogger;
    var m = function(e, t) {
            var r = l.folderDataCache(t)[e];
            if (r && r.descriptionDraft) try {
                return JSON.parse(r.descriptionDraft)
            } catch (e) {
                return
            }
        },
        S = function(e, t) {
            var r = l.folderDataCache(t)[e];
            return r ? r.contentReferences || [] : []
        },
        g = function(e) {
            if (!e) return "";
            var t = o.hash.sha256.hash(e.toLowerCase());
            return o.codec.hex.fromBits(t)
        },
        v = function(e) {
            return (e || "/").split("/").map(g).join("/")
        },
        E = function(e) {
            return g(i.normalize(e).split("/").pop())
        },
        w = function(e, t) {
            var r = l.fileIdCache(t);
            for (var o in r)
                if (r[o] === e) return o
        },
        b = function(e) {
            return e ? {
                nsId: d.extractSharedFolderId(e),
                nsPath: d.extractSharedFolderPath(e)
            } : {}
        };
    t.makeEditedData = function(e) {
        var o = e.folderFileId,
            n = e.loggingFileId,
            i = e.action_surface,
            a = e.retrievalSource,
            s = c.getStoreForFolderOverview().getState(),
            l = p(m(o, s)),
            d = t.makeOverviewResourceExtras({
                folderFileId: o,
                loggingFileId: n,
                action_surface: i,
                retrievalSource: a
            });
        if (d) return r.__assign({}, d, {
            length: l.length.toString(),
            formatting: JSON.stringify(l.features),
            tasks: l.tasks.toString(),
            checkedTasks: l.checkedTasks.toString(),
            pins: JSON.stringify(S(o, s).map(function(e) {
                return {
                    file_id: e.ns_path ? e.file_id : e.ns_id,
                    file_obj_id: e.file_id,
                    resource: {
                        resource_title: E(e.fq_path),
                        resource_type: e.is_dir ? "SFJ_FOLDER" : "SFJ_FILE",
                        ns_id: "" + e.ns_id,
                        resource_path: v(e.fq_path),
                        resource_namespace_path: v(e.ns_path)
                    }
                }
            }))
        })
    }, t.makeOverviewResourceExtras = function(e) {
        var t = e.folderFileId,
            r = e.loggingFileId,
            o = e.action_surface,
            n = e.retrievalSource,
            i = c.getStoreForFolderOverview().getState(),
            a = w(t, i);
        if (void 0 !== a) {
            var s = b(l.nsIdCache(i)[a]),
                d = s.nsId,
                u = s.nsPath;
            if (d) return {
                resource_type: "SFJ_FOLDER",
                resource_title: E(a),
                ns_id: d,
                resource_path: v(a),
                resource_namespace_path: v(u),
                file_id: (u ? r : d) || null,
                file_obj_id: t,
                is_offline: "false",
                action_surface: o,
                retrieval_source: n
            }
        }
    }, t.logOverviewEdited = function(e) {
        var r = e.folderFileId,
            o = e.loggingFileId,
            n = e.action_surface,
            i = e.retrievalSource,
            a = c.getStoreForFolderOverview().getState();
        t.logFolderOverviewAction(u.WebUserActionLogEvent.FOLDER_OVERVIEW_EDITED, l.user(a).id, null, t.makeEditedData({
            folderFileId: r,
            loggingFileId: o,
            action_surface: n,
            retrievalSource: i
        }))
    }, t.logFolderOverviewAction = function(e, o, n, s) {
        void 0 === s && (s = {});
        var l = {
            user_id: o,
            event_name: e
        };
        n && (l = r.__assign({}, l, {
            file_nsid: n.ns_id,
            file_sjid: n.sjid,
            file_id: n.file_id,
            file_name: i.filename(n.fq_path),
            file_path: n.fq_path,
            file_extension: n.ext
        })), t.hiveLogger.log(new a.WebUserActionRow(r.__assign({}, l, {
            extra: r.__assign({}, s)
        })))
    }
}), define("modules/clean/react/folder_overview/placeholder", ["require", "exports", "tslib", "react", "spectrum/button", "modules/clean/react/folder_overview/constants"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), t.FolderOverviewPlaceholder = function(e) {
        var r = e.isReadOnly ? i.DESCRIPTION_PLACEHOLDER_READ_ONLY : i.DESCRIPTION_PLACEHOLDER;
        return o.default.createElement("div", {
            className: "folder-overview__description--placeholder",
            onClick: e.onClick
        }, o.default.createElement("span", null, r), e.showExamples && o.default.createElement(t.FolderOverviewPlaceholderExample, {
            showExamplesAsButton: e.showExamplesAsButton,
            onExampleButtonClick: e.onExampleButtonClick
        }))
    }, t.FolderOverviewPlaceholderExample = function(e) {
        return e.showExamplesAsButton ? o.default.createElement(n.Button, {
            "aria-label": i.FOLDER_EXAMPLES_LINK_LABEL,
            onClick: e.onExampleButtonClick,
            className: "folder_overview__examples-button",
            variant: "secondary"
        }, i.DESCRIPTION_PLACEHOLDER_EXAMPLES_BUTTON) : o.default.createElement("a", {
            "aria-label": i.FOLDER_EXAMPLES_LINK_LABEL,
            href: i.FOLDER_EXAMPLES_LINK_URI,
            target: "_blank",
            rel: "noreferrer"
        }, i.DESCRIPTION_PLACEHOLDER_EXAMPLES_BUTTON)
    }, t.WrappedFolderOverviewPlaceholder = function(e) {
        return o.default.createElement("div", {
            className: "folder-overview__description folder-overview__placeholder folder-overview__fixed-toolbar"
        }, o.default.createElement(t.FolderOverviewPlaceholder, {
            showExamples: e.showExamples,
            isReadOnly: e.isReadOnly,
            showExamplesAsButton: e.showExamplesAsButton,
            onClick: e.onClick
        }))
    }
}), define("modules/clean/react/folder_overview/sidebar_connected", ["require", "exports", "tslib", "react", "external/react-redux", "modules/clean/react/css", "modules/clean/react/folder_overview/data/action_creators", "modules/clean/react/folder_overview/data/selectors", "modules/clean/react/folder_overview/data/store", "modules/clean/react/folder_overview/sidebar_controller"], function(e, t, r, o, n, i, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), a = r.__importStar(a);
    var d = l.getStoreForFolderOverview(),
        u = function() {
            var e = s.makeSelectors();
            return function(t, r) {
                return {
                    user: s.user(t),
                    haveAllComponentsLoaded: e.haveAllComponentsLoaded(t, r),
                    hasFailedToLoad: e.hasFailedToLoad(t, r),
                    folderFileId: e.folderFileId(t, r),
                    descriptionBaseRevision: e.descriptionBaseRevision(t, r),
                    descriptionFormatValid: e.descriptionFormatValid(t, r),
                    descriptionHasFocus: e.descriptionHasFocus(t, r),
                    doesFolderOverviewExist: e.doesFolderOverviewExist(t, r)
                }
            }
        },
        p = {
            fetchDataForFolder: a.fetchDataForFolder,
            reloadDescription: a.reloadDescription
        },
        _ = n.connect(u, p)(c.SidebarFolderOverviewController),
        h = function(e) {
            return o.default.createElement(n.Provider, {
                store: d
            }, o.default.createElement(_, r.__assign({}, e)))
        };
    t.SidebarFolderOverview = i.requireCssWithComponent(h, ["/static/css/browse/folder_overview-vflNC-NAW.css", "/static/js/spectrum_comments/index.web-vflBmTBLv.css", "/static/js/retrieval-components/index.web-vflEwNrla.css"])
}), define("modules/clean/react/folder_overview/sidebar_controller", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/folder_overview/async_components", "modules/clean/react/folder_overview/live_update"], function(e, t, r, o, n, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n);
    var s = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleLiveUpdate = function(e) {
                "description" === e.type && t.props.reloadDescription({
                    folderFileId: t.props.folderFileId,
                    componentNamespace: t.props.componentNamespace
                })
            }, t
        }
        return r.__extends(t, e),
            t.prototype.componentDidMount = function() {
                this.props.fetchDataForFolder({
                    path: this.props.path,
                    nsId: this.props.nsId,
                    expFolderOverview: "V3",
                    componentNamespace: this.props.componentNamespace,
                    fetchContentReferences: !1
                }), a.folderOverviewLiveUpdateManager.addListener("update", this.handleLiveUpdate)
            }, t.prototype.componentWillUnmount = function() {
                a.folderOverviewLiveUpdateManager.removeListener("update", this.handleLiveUpdate), a.folderOverviewLiveUpdateManager.stop()
            }, t.prototype.render = function() {
                return !this.props.doesFolderOverviewExist && this.props.onlyRenderExistingFolderOverviews ? null : n.default.createElement("div", {
                    className: o.default({
                        "folder-overview": !0,
                        "folder-overview--loading": !this.props.haveAllComponentsLoaded || this.props.hasFailedToLoad,
                        "folder-overview__fixed-toolbar-container": !0,
                        "folder-overview__border": this.props.descriptionHasFocus
                    })
                }, n.default.createElement(i.AsyncFolderOverviewDescription, {
                    path: this.props.path,
                    componentNamespace: this.props.componentNamespace,
                    expFolderOverview: "V3",
                    isReadOnly: this.props.isReadOnly || !this.props.descriptionFormatValid,
                    showReadOnlyIcon: !0,
                    showDraftIcon: !1,
                    descriptionKey: [this.props.folderFileId, this.props.descriptionBaseRevision].join("-"),
                    showExamplesInPlaceholder: !1,
                    limitedWidth: !0,
                    canShareFolder: this.props.canShareFolder
                }), n.default.createElement(i.AsyncFolderOverviewLastEdit, {
                    path: this.props.path,
                    componentNamespace: this.props.componentNamespace
                }))
            }, t
    })(n.default.PureComponent);
    t.SidebarFolderOverviewController = s
}), define("modules/clean/react/folder_overview/utils", ["require", "exports", "tslib", "modules/clean/filepath", "modules/clean/react/browse/models", "modules/core/i18n"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), t.convertDbxUserToIUser = function(e) {
        return {
            id: e.id.toString(),
            name: {
                display: e.display_name,
                initials: [e.fname.substr(0, 1), e.lname.substr(0, 1)].join(""),
                public: e.familiar_name
            },
            photoUrl: e.initials_url
        }
    }, t.normalizePath = function(e) {
        return o.normalize(e).toLowerCase()
    }, t.hasUnsavedDescriptionDraft = function(e) {
        return !!e && (!!e.descriptionDraft && e.description !== e.descriptionDraft)
    }, t.convertContentReferencesToSortedFiles = function(e) {
        var r = [];
        e.forEach(function(e) {
            var o = {
                    file_id: e.file_id,
                    fq_path: e.fq_path,
                    href: e.href,
                    icon: e.icon,
                    is_cloud_doc: e.is_cloud_doc,
                    is_dir: e.is_dir,
                    thumbnail_url_tmpl: e.thumbnail_url_tmpl,
                    ns_id: e.ns_id,
                    ns_path: e.ns_path,
                    sjid: e.sjid,
                    isDeleted: e.is_deleted,
                    ext: t.getFileExtension(e.fq_path)
                },
                i = new n.File(o);
            r.push(i)
        });
        var o = i.case_insensitive_comparator(!0);
        return r.sort(function(e, t) {
            return o(n.File.getFilename(e), n.File.getFilename(t))
        })
    }, t.getFileExtension = function(e) {
        if (!e) return "";
        var t = o.file_extension(e);
        return t ? "." + t : ""
    }, t.extractSharedFolderId = function(e) {
        var t = /^ns:([0-9]+)\/?/.exec(e);
        return t ? t[1] : void 0
    }, t.extractSharedFolderPath = function(e) {
        var t = /^ns:[0-9]+\/?(.*)/.exec(e);
        return t ? t[1] : void 0
    }, t.pathFromSharingFolder = function(e, t) {
        return e.length >= t.length ? o.filename(t) : [o.filename(e)].concat(t.substr(e.length).split("/").filter(function(e) {
            return !!e
        })).join(" › ")
    }, t.fileToContentReferenceId = function(e) {
        return e.is_dir && e.target_ns ? "ns:" + e.target_ns : e.file_id
    };
    var a = function(e) {
        return "fname" in e
    };
    t.userInitials = function(e) {
        return a(e) ? e.fname.substr(0, 1) + e.lname.substr(0, 1) : e.name.given_name.substr(0, 1) + e.name.surname.substr(0, 1)
    }, t.canEditOverviewForFile = function(e) {
        return e.target_ns ? null === e._mount_access_perms || !(!e._mount_access_perms || !e._mount_access_perms.includes("can_edit")) : !e.read_only
    }
}), define("modules/clean/react/growth/connected_checklist_banner", ["require", "exports", "tslib", "react", "modules/core/browser", "external/lodash", "modules/core/i18n", "premium-growth/checklist-banner", "premium-growth/checklist-banner-item", "modules/clean/react/css", "modules/constants/trademark", "modules/clean/analytics", "modules/clean/api_v2/user_client"], function(e, t, r, o, n, i, a, s, l, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n), i = r.__importStar(i);
    t.fetchModules = function(e, t) {
        return (new p.UserApiV2Client).ns("onboarding_tracker").rpc("get_checklist_modules_for_user", {}, {
            subjectUserId: t.id
        })
    };
    var _ = (function(e) {
        function c() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                tracker: t.mapUserToTracker(t.props.user),
                modules: null,
                dimmed: !1
            }, t
        }
        return r.__extends(c, e), c.prototype.mapUserToTracker = function(e) {
            return e.is_team_admin ? "team_creator_checklist_banner" : "team_joiner_checklist_banner"
        }, c.prototype.componentDidMount = function() {
            var e = this;
            t.fetchModules(this.state.tracker, this.props.user).then(function(t) {
                return e.postFetchActions(t)
            })
        }, c.prototype.componentDidUpdate = function(e, r) {
            var o = this;
            e.user !== this.props.user && this.setState({
                tracker: this.mapUserToTracker(this.props.user)
            }), r.tracker !== this.state.tracker && t.fetchModules(this.state.tracker, this.props.user).then(function(e) {
                return o.postFetchActions(e)
            })
        }, c.prototype.postFetchActions = function(e) {
            this.updateStateWithFetchedData(e), this.isUserEduEnabled() ? this.setState({
                dimmed: !0
            }) : this.logOnboardingChecklistImpression(e.modules)
        }, c.prototype.isUserEduEnabled = function() {
            var e = n.get_uri().getQuery();
            return this.props.isUserEduEnabled || e && !!e.uem_wop
        }, c.prototype.logOnboardingChecklistImpression = function(e) {
            var t = {
                checklist_version: this.state.tracker,
                url: n.get_uri().path
            };
            e.forEach(function(e) {
                t[e.name + "_status"] = e.completed ? "complete" : "incomplete"
            }), u.TeamsWebActionsLogger.log("onboarding_checklist_impression", t)
        }, c.prototype.updateStateWithFetchedData = function(e) {
            this.setState({
                modules: e.modules
            })
        }, c.prototype.redirectToUrl = function(e) {
            e && n.redirect(e)
        }, c.prototype.mapModulesToChecklistItems = function(e) {
            var t = this;
            return null === e ? i.range(3).map(function(e) {
                return o.default.createElement(l.ChecklistBannerItem, {
                    loaded: !1,
                    key: e
                })
            }) : e.map(function(e) {
                return o.default.createElement(l.ChecklistBannerItem, {
                    key: e.name,
                    status: e.completed ? "complete" : "incomplete",
                    title: e.label,
                    onClick: function() {
                        t.redirectToUrl(e.url)
                    }
                })
            })
        }, c.prototype.mapModulesToCopy = function(e, t) {
            return null === e ? {
                title: "",
                subtitle: ""
            } : t.is_team_admin && !i.some(e, "completed") ? {
                title: a._("First things first"),
                subtitle: a._("We picked the most important tasks to get you started with %(trademark_business)s.").format({
                    trademark_business: d.TRADEMARK_BUSINESS
                })
            } : {
                title: a._("Finish setting up"),
                subtitle: a._("You’re almost done getting up and running with %(trademark_business)s.").format({
                    trademark_business: d.TRADEMARK_BUSINESS
                })
            }
        }, c.prototype.render = function() {
            var e = this.state,
                t = e.modules,
                n = e.dimmed,
                i = this.props.user;
            return o.default.createElement(s.ChecklistBanner, r.__assign({
                loaded: !!t
            }, this.props, this.mapModulesToCopy(t, i), {
                dimmed: n
            }), this.mapModulesToChecklistItems(t))
        }, c
    })(o.default.PureComponent);
    t.OnboardingChecklistBanner = c.requireCssWithComponent(_, ["/static/js/premium-growth/index.web-vflb9JTu1.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css"])
}), define("modules/clean/react/growth/education_module_event_bridge", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e() {
            this.requestSectionHandler = null, this.requestSharingCalloutHandler = null
        }
        return e.prototype.registerRequestSectionHandler = function(e) {
            this.requestSectionHandler = e
        }, e.prototype.requestSection = function(e) {
            this.requestSectionHandler && this.requestSectionHandler(e)
        }, e.prototype.registerRequestSharingCalloutHandler = function(e) {
            this.requestSharingCalloutHandler = e
        }, e.prototype.requestSharingCallout = function() {
            this.requestSharingCalloutHandler && this.requestSharingCalloutHandler()
        }, e
    })();
    t.educationEventBridge = new r
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/growth/education_module_experiment", ["require", "exports", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger", "modules/clean/react/css"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r.Loadable({
        loader: function() {
            return o.waitForTTI().then(function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/growth/education_module_experiment_sync"], t, r)
                }).then(__importStar)
            }).then(function(e) {
                return e.UnstyledEducationModuleExperiment
            })
        }
    });
    t.EducationModuleExperiment = n.requireCssWithComponent(i, ["/static/js/premium-growth/index.web-vflb9JTu1.css", "/static/css/growth/experiments/education_module_experiment-vflFlYQXJ.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css"])
}), define("modules/clean/react/path_breadcrumbs", ["require", "exports", "tslib", "external/classnames", "react", "spectrum/icon_arrow", "spectrum/icon_content", "spectrum/popover", "modules/clean/em_string", "modules/clean/filepath", "modules/core/i18n", "modules/clean/user_education/react/user_education_effect", "modules/clean/user_education/user_education_client", "modules/clean/react/icon/icon_helper", "modules/clean/react/title_bubble"], function(e, t, r, o, n, i, a, s, l, c, d, u, p, _, h) {
    "use strict";

    function f(e, t, r) {
        void 0 === r && (r = 20);
        var o = t ? 2.625 : new l.Emstring(e).length;
        return Math.max(r, 20) - o
    }

    function m(e) {
        return e > 769 ? (e - 417) / 20 : e / 20
    }

    function S(e, t, r, o, n) {
        void 0 === n && (n = 20);
        for (var i = e.split("/").filter(Boolean), a = [{
                path: "",
                icon: "folder_dropbox-small",
                folderName: t,
                alt: r
            }], s = _.spectrumFolderIcon({
                size: _.SpectrumIconSize.Small
            }), u = 0; u < i.length; u++) e = "/" + i.slice(0, u + 1).join("/"), a.push({
            path: e,
            folderName: c.filename(e),
            icon: s,
            alt: d._("Folder")
        });
        if (a.length < 3) return {
            dropdownCrumbs: [],
            inlineCrumbs: a,
            root: a[0]
        };
        for (var p = a[0] && a[0].folderName || "", h = f(p, !1, n), m = a.map(function(e) {
                return new l.Emstring(e.folderName || "").length
            }), S = 1, g = m[a.length - 1], u = a.length - 2; u >= 1 && (g += 1.64, g += m[u], !(g > h)); u--) S += 1;
        a.length === S + 1 && (S += 1), 1 === S && o === v.SMALL && S++;
        var E = a.length - S;
        return {
            dropdownCrumbs: a.slice(0, E),
            inlineCrumbs: a.slice(E),
            root: a[0]
        }
    }

    function g(e) {
        switch (e) {
            case v.LARGE:
                return "right";
            case v.SMALL:
                return "right-small"
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), c = r.__importStar(c);
    t.generateBreadcrumbData = S;
    var v;
    (function(e) {
        e.LARGE = "LARGE", e.SMALL = "SMALL"
    })(v = t.PathBreadcrumbsSize || (t.PathBreadcrumbsSize = {}));
    var E = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.breadcrumbsContainerSpan = document.getElementById("page-content"), r.resizeListener = function() {
                if (r.breadcrumbsContainerSpan) {
                    var e = m(r.breadcrumbsContainerSpan.getBoundingClientRect().width);
                    e !== r.state.maxWidthInEm && r.setState({
                        maxWidthInEm: e
                    })
                }
            }, r.state = {
                maxWidthInEm: r.breadcrumbsContainerSpan ? m(r.breadcrumbsContainerSpan.getBoundingClientRect().width) : 20
            }, r
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            window.addEventListener("resize", this.resizeListener)
        }, t.prototype.componentWillUnmount = function() {
            window.removeEventListener("resize", this.resizeListener)
        }, t.prototype.render = function() {
            var e = this.props.path,
                t = this.props,
                i = t.firstBreadcrumbName,
                a = t.firstBreadcrumbAlt,
                s = t.isDraggingInternalFiles,
                l = t.shouldHighlightDropTargets,
                p = t.setFileUploaderPath,
                _ = t.getUrlForPath,
                h = t.setUrl,
                m = t.size,
                g = t.disableDragging,
                E = this.state.maxWidthInEm ? this.state.maxWidthInEm : 20,
                b = S(e, i, a, m, E),
                F = b.dropdownCrumbs,
                y = b.inlineCrumbs,
                C = b.root,
                I = f(C && C.folderName || "", F.length > 0, E),
                O = o.default({
                    "brws-path-breadrumbs": !0,
                    "brws-path-breadrumbs--small": this.props.size === v.SMALL
                }),
                P = "page-header-text u-l-fl";
            return y.length > 1 || F.length > 0 ? n.default.createElement("span", {
                className: O
            }, n.default.createElement("h1", {
                className: "ax-visually-hidden"
            }, c.filename(e)), n.default.createElement("nav", {
                className: P,
                id: "path-breadcrumbs",
                "aria-label": d._("Folder hierarchy"),
                role: "navigation"
            }, F.length > 0 && n.default.createElement(T, {
                crumbs: F,
                currentPath: e,
                isDraggingInternalFiles: s,
                shouldHighlightDropTargets: l,
                setFileUploaderPath: p,
                setUrl: h,
                size: m,
                disableDragging: g
            }), y.map(function(t, o) {
                return n.default.createElement(w, r.__assign({}, t, {
                    key: encodeURI(t.path),
                    isOnlyCrumb: 0 === o && 1 === y.length && 0 === F.length,
                    index: o,
                    isLastCrumb: o === y.length - 1,
                    maxWidth: I,
                    currentPath: e,
                    isDraggingInternalFiles: s,
                    isHighlightedDropTarget: l,
                    setFileUploaderPath: p,
                    getUrlForPath: _,
                    setUrl: h,
                    size: m,
                    disableDragging: g
                }))
            }))) : n.default.createElement("span", {
                className: O
            }, n.default.createElement("h1", {
                className: P
            }, n.default.createElement(u.UserEducationEffect, {
                containerName: "PathBreadcrumbs",
                name: "HomeTitle",
                useSpan: !0
            }, i)))
        }, t.defaultProps = {
            path: "/",
            isDraggingInternalFiles: !1,
            shouldHighlightDropTargets: !1,
            setFileUploaderPath: function() {},
            size: v.LARGE,
            disableDragging: !1
        }, t
    })(n.default.PureComponent);
    t.PathBreadcrumbs = E;
    var w = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.onDragEnterBreadcrumb = function(e) {
                    e.preventDefault(), e.target !== r.lastEnteredElement && (r.props.disableDragging || (r.lastEnteredElement = e.target, r.dragEnterCount += 1, r.setState({
                        isDraggedOver: !0
                    }), r.props.isLastCrumb || r.props.setFileUploaderPath({
                        path: r.props.path
                    })))
                }, r.onDragLeaveBreadcrumb = function(e) {
                    e.preventDefault(), r.props.disableDragging || (r.lastEnteredElement = null, r.dragEnterCount -= 1, r.dragEnterCount < 1 && (r.dragEnterCount = 0, r.state.isDraggedOver && (r.props.setFileUploaderPath({
                        path: r.props.currentPath
                    }), r.setState({
                        isDraggedOver: !1
                    }))))
                }, r.onDropBreadcrumb = function() {
                    r.setState({
                        isDraggedOver: !1
                    })
                }, r.onDragOverBreadcrumb = function(e) {
                    e.preventDefault(), e.stopPropagation()
                }, r.handleMouseEnter = function() {
                    r.props.isDraggingInternalFiles && r.setState({
                        isDraggedOver: !0
                    })
                }, r.handleMouseLeave = function() {
                    r.state.isDraggedOver && r.setState({
                        isDraggedOver: !1
                    })
                }, r.handleMouseUp = function() {
                    r.state.isDraggedOver && r.setState({
                        isDraggedOver: !1
                    })
                }, r.navigateToFolder = function(e) {
                    var t = r.props.path;
                    p.UEClient.sendEvent("BreadCrumbSegment", "linkClicked", {
                        path: t
                    }), e.preventDefault(), r.props.setUrl({
                        path: t
                    })
                }, r.eventHandlers = {
                    onDragEnter: r.onDragEnterBreadcrumb,
                    onDragLeave: r.onDragLeaveBreadcrumb,
                    onDrop: r.onDropBreadcrumb,
                    onDragOver: r.onDragOverBreadcrumb,
                    onMouseEnter: r.handleMouseEnter,
                    onMouseLeave: r.handleMouseLeave,
                    onMouseUp: r.handleMouseUp
                }, r.state = {
                    isDraggedOver: !1
                }, r
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.dragEnterCount = 0, this.lastEnteredElement = null
            }, t.prototype.render = function() {
                var e, t = this.props,
                    a = t.getUrlForPath,
                    s = t.path,
                    c = t.index,
                    d = t.isOnlyCrumb,
                    p = t.maxWidth,
                    _ = t.isLastCrumb,
                    f = t.isHighlightedDropTarget,
                    m = t.size,
                    S = d ? this.props.folderName : l.Emstring.em_snippet(this.props.folderName, p),
                    v = {
                        "breadcrumb-segment": !0,
                        "breadcrumb-segment--is-drop-target": !_ && f,
                        "breadcrumb-segment--file-dragged-over": !_ && this.state.isDraggedOver
                    },
                    E = g(m);
                return e = _ ? n.default.createElement("span", r.__assign({
                    "aria-current": "page"
                }, this.eventHandlers), S) : n.default.createElement("span", r.__assign({
                    className: "breadcrumb-segment__wrapper"
                }, this.eventHandlers), n.default.createElement(u.UserEducationEffect, {
                    containerName: "BreadCrumbSegment",
                    name: "link-" + c,
                    useSpan: !0
                }, n.default.createElement("a", {
                    href: a(s).toString(),
                    onClick: this.navigateToFolder,
                    className: o.default(v)
                }, S)), n.default.createElement(i.IconArrow, {
                    name: E
                })), this.props.folderName !== S ? n.default.createElement(h.TitleBubble, {
                    content: this.props.folderName,
                    position: h.TitleBubble.POSITIONS.BOTTOM,
                    className: "list-label__title-bubble"
                }, e) : e
            }, t.defaultProps = {
                isOnlyCrumb: !1,
                isDraggingInternalFiles: !1,
                isHighlightedDropTarget: !1,
                disableDragging: !1
            }, t
        })(n.default.Component),
        b = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.onDragEnter = function(e) {
                    e.preventDefault(), e.target !== r.lastEnteredElement && (r.props.disableDragging || (r.lastEnteredElement = e.target, r.dragEnterCount += 1, r.setState({
                        isDraggedOver: !0
                    }), r.props.setFileUploaderPath({
                        path: r.props.path
                    })))
                }, r.onDragLeave = function(e) {
                    e.preventDefault(), r.props.disableDragging || (r.lastEnteredElement = null, r.dragEnterCount -= 1, r.dragEnterCount < 1 && (r.dragEnterCount = 0, r.state.isDraggedOver && (r.props.setFileUploaderPath({
                        path: r.props.currentPath
                    }), r.setState({
                        isDraggedOver: !1
                    }))))
                }, r.onDrop = function(e) {
                    r.setState({
                        isDraggedOver: !1
                    }), r.dragEnterCount = 0, r.props.closeFunc()
                }, r.onDragOver = function(e) {
                    e.preventDefault(), e.stopPropagation()
                }, r.handleMouseEnter = function() {
                    r.props.isDraggingInternalFiles && r.setState({
                        isDraggedOver: !0
                    })
                }, r.handleMouseLeave = function() {
                    r.state.isDraggedOver && (r.setState({
                        isDraggedOver: !1
                    }), r.props.closeFunc())
                }, r.handleMouseUp = function() {
                    r.state.isDraggedOver && r.setState({
                        isDraggedOver: !1
                    }), r.props.isDraggingInternalFiles && !r.props.isLastCrumb && r.props.closeFunc()
                }, r.state = {
                    isDraggedOver: !1
                }, r
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.dragEnterCount = 0, this.lastEnteredElement = null
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.icon,
                    i = e.alt,
                    l = e.folderName,
                    c = {
                        "breadcrumb-menu-item": !0,
                        "breadcrumb-menu-item--is-drop-target": this.props.isHighlightedDropTarget,
                        "breadcrumb-menu-item--file-dragged-over": this.state.isDraggedOver
                    },
                    d = n.default.createElement("span", {
                        title: l,
                        className: "breadcrumb-menu-item-wrapper"
                    }, n.default.createElement("span", {
                        className: "breadcrumb-menu-item-icon"
                    }, n.default.createElement(a.IconContent, {
                        name: t,
                        "aria-label": i,
                        role: "img"
                    })), n.default.createElement("span", {
                        className: "breadcrumb-menu-item-text"
                    }, l));
                return n.default.createElement(s.PopoverContentItem, r.__assign({
                    value: this.props.path,
                    className: o.default(c)
                }, {
                    onDragEnter: this.onDragEnter,
                    onDragLeave: this.onDragLeave,
                    onDrop: this.onDrop,
                    onDragOver: this.onDragOver,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    onMouseUp: this.handleMouseUp
                }), d)
            }, t.defaultProps = {
                isHighlightedDropTarget: !1,
                closeFunc: function() {},
                alt: "",
                isDraggingInternalFiles: !1,
                disableDragging: !1
            }, t
        })(n.default.Component),
        T = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    menuVisible: !1
                }, t.onDragEnter = function(e) {
                    t.props.disableDragging || (e.preventDefault(), t.setState({
                        menuVisible: !0
                    }))
                }, t.onInnerDragEnter = function(e) {
                    e.preventDefault(), t.dragEnterCount++
                }, t.onDragLeave = function(e) {
                    e.preventDefault(), t.dragEnterCount--, t.dragEnterCount < 1 && (t.dragEnterCount = 0, t.state.menuVisible && t.setState({
                        menuVisible: !1
                    }))
                }, t.onMouseEnter = function(e) {
                    t.props.disableDragging || t.props.isDraggingInternalFiles && !t.props.disableDragging && (e.preventDefault(), t.setState({
                        menuVisible: !0
                    }))
                }, t.onCrumbSelected = function(e) {
                    t.props.setUrl({
                        path: e
                    })
                }, t.onPopoverToggle = function(e) {
                    var r = e.isOpen;
                    t.setState({
                        menuVisible: r
                    })
                }, t.onClose = function() {
                    t.dragEnterCount = 0, t.onPopoverToggle({
                        isOpen: !1
                    })
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.dragEnterCount = 0
            }, t.prototype.render = function() {
                var e = this,
                    t = this.props.crumbs.slice().reverse(),
                    r = this.props,
                    o = r.currentPath,
                    l = r.shouldHighlightDropTargets,
                    c = r.isDraggingInternalFiles,
                    u = r.setFileUploaderPath,
                    p = r.size,
                    _ = r.disableDragging,
                    h = d._("Show parent folders (descending)"),
                    f = n.default.createElement(a.IconContent, {
                        name: "folder_dropdown-small",
                        "aria-label": h,
                        role: "img",
                        className: "breadcrumb-menu-icon"
                    }),
                    m = g(p);
                return n.default.createElement(s.Popover, {
                    onSelection: this.onCrumbSelected,
                    onMenuToggle: this.onPopoverToggle,
                    className: "breadcrumb-dropdown-container"
                }, n.default.createElement(s.PopoverTrigger, {
                    onDragOver: this.onDragEnter,
                    onMouseEnter: this.onMouseEnter,
                    tag: "button"
                }, n.default.createElement("span", {
                    className: "u-unbutton breadcrumb-overflow-button u-l-fl"
                }, f)), n.default.createElement(s.PopoverContent, {
                    isRevealed: this.state.menuVisible,
                    onDragEnter: this.onInnerDragEnter,
                    onDragLeave: this.onDragLeave
                }, t.map(function(t) {
                    return n.default.createElement(b, {
                        key: encodeURI(t.path),
                        path: t.path,
                        icon: t.icon,
                        alt: t.alt,
                        folderName: t.folderName,
                        currentPath: o,
                        isHighlightedDropTarget: l,
                        isDraggingInternalFiles: c,
                        setFileUploaderPath: u,
                        closeFunc: e.onClose,
                        disableDragging: _
                    })
                })), n.default.createElement(i.IconArrow, {
                    name: m,
                    className: "breadcrumb__spacer"
                }))
            }, t.defaultProps = {
                shouldHighlightDropTargets: !1,
                isDraggingInternalFiles: !1,
                disableDragging: !1
            }, t
        })(n.default.Component)
}), define("modules/clean/react/payments/mobile_billing_educational_modal", ["require", "exports", "tslib", "react", "modules/core/browser", "modules/clean/ajax", "modules/core/i18n", "modules/clean/analytics", "modules/clean/react/modal", "modules/clean/react/payments/mobile_billing_modal_util", "modules/constants/trademark"], function(e, t, r, o, n, i, a, s, l, c, d) {
    "use strict";

    function u(e) {
        switch (e.action) {
            case "buy":
                return o.default.createElement(p, r.__assign({}, e));
            case "buy_from_pro_trial":
                return o.default.createElement(m, r.__assign({}, e));
            case "join_team":
                return o.default.createElement(h, r.__assign({}, e));
            case "join_team_from_pro_trial":
                return o.default.createElement(g, r.__assign({}, e));
            case "join_team_trial":
                return o.default.createElement(f, r.__assign({}, e));
            case "join_team_trial_from_pro_trial":
                return o.default.createElement(v, r.__assign({}, e));
            case "try":
                return o.default.createElement(_, r.__assign({}, e));
            case "try_from_pro_trial":
                return o.default.createElement(S, r.__assign({}, e));
            default:
                return null
        }
    }

    function p(e) {
        var t = c.getMobilePaymentMethodData(e.mobilePaymentMethod),
            n = a._("Make sure you don’t get double charged"),
            i = a._("Please note that you have an active Dropbox %(trademark_plus)s subscription managed through the %(billing_store)s. You must cancel it to avoid paying for two subscriptions.").format(r.__assign({}, E, {
                billing_store: t.store
            })),
            s = a._("Canceling your Dropbox %(trademark_plus)s subscription in the %(billing_store)s will not affect your %(trademark_business)s account.").format(r.__assign({}, E, {
                billing_store: t.store
            }));
        return o.default.createElement(w, r.__assign({
            title: n,
            message: i,
            submessage: s
        }, e))
    }

    function _(e) {
        var t = c.getMobilePaymentMethodData(e.mobilePaymentMethod),
            n = a._("Make sure you don’t get double charged"),
            i = a._("Please note that you have an active Dropbox %(trademark_plus)s subscription managed through the %(billing_store)s. You must cancel it to avoid paying for two subscriptions.").format(r.__assign({}, E, {
                billing_store: t.store
            })),
            s = a._("Canceling your Dropbox %(trademark_plus)s subscription in the %(billing_store)s will not affect your %(trademark_business)s trial.").format(r.__assign({}, E, {
                billing_store: t.store
            }));
        return o.default.createElement(w, r.__assign({
            title: n,
            message: i,
            submessage: s
        }, e))
    }

    function h(e) {
        var t = c.getMobilePaymentMethodData(e.mobilePaymentMethod),
            n = a._("Make sure you don’t get charged for your Dropbox %(trademark_plus)s subscription").format(E),
            i = a._("Please note that you have an active Dropbox %(trademark_plus)s subscription managed through the %(billing_store)s. You must cancel it to avoid being charged in the future.").format(r.__assign({}, E, {
                billing_store: t.store
            })),
            s = a._("Canceling your Dropbox %(trademark_plus)s subscription in the %(billing_store)s will not affect your %(trademark_business)s account.").format(r.__assign({}, E, {
                billing_store: t.store
            }));
        return o.default.createElement(w, r.__assign({
            title: n,
            message: i,
            submessage: s
        }, e))
    }

    function f(e) {
        var t = c.getMobilePaymentMethodData(e.mobilePaymentMethod),
            n = a._("Make sure you don’t get charged for your Dropbox %(trademark_plus)s subscription").format(E),
            i = a._("Please note that you have an active Dropbox %(trademark_plus)s subscription managed through the %(billing_store)s. You must cancel it to avoid being charged in the future.").format(r.__assign({}, E, {
                billing_store: t.store
            })),
            s = a._("Canceling your Dropbox %(trademark_plus)s subscription in the %(billing_store)s will not affect your %(trademark_business)s account.").format(r.__assign({}, E, {
                billing_store: t.store
            }));
        return o.default.createElement(w, r.__assign({
            title: n,
            message: i,
            submessage: s
        }, e))
    }

    function m(e) {
        var t = c.getMobilePaymentMethodData(e.mobilePaymentMethod),
            n = a._("Make sure you don’t get double charged"),
            i = a._("Please note that you have an active Dropbox %(trademark_plus)s trial managed through the %(billing_store)s. You must cancel it to avoid paying for two subscriptions.").format(r.__assign({}, E, {
                billing_store: t.store
            })),
            s = a._("Canceling your Dropbox %(trademark_plus)s trial in the %(billing_store)s will not affect your %(trademark_business)s account.").format(r.__assign({}, E, {
                billing_store: t.store
            }));
        return o.default.createElement(w, r.__assign({
            title: n,
            message: i,
            submessage: s
        }, e))
    }

    function S(e) {
        var t = c.getMobilePaymentMethodData(e.mobilePaymentMethod),
            n = a._("Make sure you don’t get double charged"),
            i = a._("Please note that you have an active Dropbox %(trademark_plus)s trial managed through the %(billing_store)s. You must cancel it to avoid paying for two subscriptions.").format(r.__assign({}, E, {
                billing_store: t.store
            })),
            s = a._("Canceling your Dropbox %(trademark_plus)s trial in the %(billing_store)s will not affect your %(trademark_business)s trial.").format(r.__assign({}, E, {
                billing_store: t.store
            }));
        return o.default.createElement(w, r.__assign({
            title: n,
            message: i,
            submessage: s
        }, e))
    }

    function g(e) {
        var t = c.getMobilePaymentMethodData(e.mobilePaymentMethod),
            n = a._("Make sure you don’t get charged for your Dropbox %(trademark_plus)s trial").format(E),
            i = a._("Please note that you have an active Dropbox %(trademark_plus)s trial managed through the %(billing_store)s. You must cancel it to avoid being charged in the future.").format(r.__assign({}, E, {
                billing_store: t.store
            })),
            s = a._("Canceling your Dropbox %(trademark_plus)s trial in the %(billing_store)s will not affect your %(trademark_business)s account.").format(r.__assign({}, E, {
                billing_store: t.store
            }));
        return o.default.createElement(w, r.__assign({
            title: n,
            message: i,
            submessage: s
        }, e))
    }

    function v(e) {
        var t = c.getMobilePaymentMethodData(e.mobilePaymentMethod),
            n = a._("Make sure you don’t get charged for your Dropbox %(trademark_plus)s trial").format(E),
            i = a._("Please note that you have an active Dropbox %(trademark_plus)s trial managed through the %(billing_store)s. You must cancel it to avoid being charged in the future.").format(r.__assign({}, E, {
                billing_store: t.store
            })),
            s = a._("Canceling your Dropbox %(trademark_plus)s trial in the %(billing_store)s will not affect your %(trademark_business)s account.").format(r.__assign({}, E, {
                billing_store: t.store
            }));
        return o.default.createElement(w, r.__assign({
            title: n,
            message: i,
            submessage: s
        }, e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n), i = r.__importStar(i);
    var E = {
        trademark_business: d.TRADEMARK_BUSINESS,
        trademark_plus: d.TRADEMARK_PLUS
    };
    t.MobileBillingEducationalModal = u;
    var w = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.onClickDismiss = function() {
                r.logWebTeams("billing_educational_dismiss"), r.markAsSeenAndClose()
            }, r.onClickAccept = function() {
                r.logWebTeams("billing_educational_open_article"), r.markAsSeenAndClose();
                var e = r.props.mobilePaymentMethod;
                e === c.MobilePaymentMethod.APPLE ? n.unsafe_open_tab("https://support.apple.com/HT202039") : e === c.MobilePaymentMethod.GOOGLE && n.unsafe_open_tab("https://support.google.com/googleplay/answer/7018481")
            }, r.markAsSeenAndClose = function() {
                i.WebRequest({
                    url: "/team/payments/close_mobile_billing_educational"
                }), r.setState({
                    show: !1
                })
            }, r.logWebTeams = function(e) {
                var t = r.props,
                    o = t.action,
                    n = t.mobilePaymentMethod,
                    i = t.teamId;
                n === c.MobilePaymentMethod.APPLE ? e = "apple_ios_" + e : n === c.MobilePaymentMethod.GOOGLE && (e = "google_play_" + e);
                var a = {
                    action: o,
                    team_id: i
                };
                s.TeamsWebActionsLogger.log_for_category(e, s.TeamsWebActionsLogger.LOG_CATEGORY.UPGRADE, a)
            }, r.state = {
                show: !0
            }, r
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            this.logWebTeams("billing_educational_show")
        }, t.prototype.render = function() {
            if (!this.state.show) return null;
            var e = this.props,
                t = e.mobilePaymentMethod,
                r = e.title,
                n = e.message,
                i = e.submessage,
                s = c.getMobilePaymentMethodData(t),
                d = a._("Manage %(billing_store)s subscription").format({
                    billing_store: s.store
                }),
                u = a._("I want to keep both subscriptions");
            return o.default.createElement(l.Modal, {
                acceptButtonText: null,
                autoClose: !1,
                className: "mobile-billing-modal mobile-billing-modal--educational",
                clickOutToClose: !1,
                dismissButtonText: null,
                ref: "modal",
                showX: !1,
                style: "clean"
            }, o.default.createElement("div", {
                className: "modal__content"
            }, o.default.createElement("h3", {
                className: "modal__header"
            }, r), o.default.createElement("p", {
                className: "modal__message"
            }, n), o.default.createElement("p", {
                className: "modal__message"
            }, i), o.default.createElement("div", {
                className: "modal__ctas"
            }, o.default.createElement("button", {
                className: "button-primary modal__cta--accept",
                onClick: this.onClickAccept
            }, d), o.default.createElement("button", {
                className: "modal__cta--dismiss button-as-link",
                onClick: this.onClickDismiss
            }, u))))
        }, t
    })(o.default.Component)
}), define("modules/clean/react/payments/mobile_billing_modal_util", ["require", "exports", "modules/core/i18n"], function(e, t, r) {
    "use strict";

    function o(e) {
        switch (e) {
            case n.GOOGLE:
                return {
                    company: r._("Google"),
                    store: r._("Google Play Store")
                };
            case n.APPLE:
                return {
                    company: r._("Apple"),
                    store: r._("Apple App Store")
                }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    (function(e) {
        e.APPLE = "apple", e.GOOGLE = "google"
    })(n = t.MobilePaymentMethod || (t.MobilePaymentMethod = {})), t.getMobilePaymentMethodData = o
}), define("modules/clean/react/share_download/api", ["require", "exports", "tslib", "modules/clean/ajax_as_promised"], function(e, t, r, o) {
    "use strict";

    function n(e) {
        return r.__awaiter(this, void 0, void 0, function() {
            var t, n;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), [4, o.SilentBackgroundRequest({
                            url: e
                        })];
                    case 1:
                        return t = r.sent(), [3, 3];
                    case 2:
                        throw n = r.sent(), new s;
                    case 3:
                        if ("OK" !== t) throw 0 === t.indexOf("err:") ? new l : new s;
                        return [2]
                }
            })
        })
    }

    function i(e) {
        return o.SilentBackgroundRequest({
            url: "/sharing/fetch_user_content_link",
            data: {
                url: e
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o);
    var a = (function() {
            function e(e) {
                this.message = e
            }
            return e
        })(),
        s = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t
        })(a);
    t.DownloadError = s;
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t
    })(s);
    t.TooLargeError = l, t.testDownload = n, t.fetchDownloadUrl = i
}), define("modules/clean/react/snackbar_manager", ["require", "exports", "tslib", "react", "external/lodash", "modules/clean/react/portal", "modules/clean/react/snackbar", "modules/core/accessible_announce", "modules/core/exception", "modules/clean/analytics"], function(e, t, r, o, n, i, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n), l = r.__importStar(l);
    var d = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.handleActionClick = function() {
                var e = r.state,
                    t = e.displayedSnackbar,
                    o = e.queue;
                if (t) {
                    var n = o[0].onActionClick;
                    n && n()
                }
            }, r.handleCloseClick = function() {
                var e = r.dequeue();
                e && (e.richSnackBarProps && c.TeamsWebActionsLogger.log("edu_rich_confirmation_clk_close", e.richSnackBarProps.extraLogInfo), e.onCloseClick && e.onCloseClick())
            }, r.handleTimeout = function() {
                var e = r.dequeue();
                e && e.onTimeout && e.onTimeout()
            }, r.getAccessibleAnnouncement = function(e) {
                return e.accessibleAnnouncement ? e.accessibleAnnouncement : "string" == typeof e.title ? e.title : null
            }, r.state = {
                queue: [],
                displayedSnackbar: null,
                isVisible: !0
            }, r
        }
        return r.__extends(t, e), t.prototype.showContainer = function() {
                this.setState({
                    isVisible: !0
                })
            }, t.prototype.hideContainer = function() {
                this.setState({
                    isVisible: !1
                })
            }, t.prototype.show = function(e) {
                e.id || l.reportStack("Missing `id` in Snackbar.show", {
                    severity: l.SEVERITY.NONCRITICAL
                }), this.update(e)
            }, t.prototype.update = function(e) {
                e.id || l.reportStack("Missing `id` in Snackbar.update", {
                    severity: l.SEVERITY.NONCRITICAL
                });
                var t = this.state.queue,
                    r = n.findIndex(t, function(t) {
                        return t.id === e.id
                    });
                if (r === -1) return void this.enqueue(e);
                0 === r && this.displayNewSnackbar(e);
                var o = t.slice();
                o[r] = e, this.setState({
                    queue: o
                })
            }, t.prototype.close = function(e) {
                e || l.reportStack("Missing `id` in Snackbar.close", {
                    severity: l.SEVERITY.NONCRITICAL
                }), this.dequeue(e)
            }, t.prototype.displayNewSnackbar = function(e) {
                var t = o.default.createElement(a.ControlledSnackbar, r.__assign({}, e, {
                        onActionClick: this.handleActionClick,
                        onCloseClick: this.handleCloseClick,
                        onTimeout: this.handleTimeout,
                        key: e.id
                    })),
                    n = this.getAccessibleAnnouncement(e);
                if (n)
                    if (this.state.displayedSnackbar) {
                        var i = this.getAccessibleAnnouncement(this.state.displayedSnackbar.props);
                        n !== i && s.AccessibleAnnounce.polite(n)
                    } else s.AccessibleAnnounce.polite(n);
                this.setState({
                    displayedSnackbar: t
                })
            },
            t.prototype.enqueue = function(e) {
                var t = this.state.queue,
                    o = r.__assign({
                        id: Date.now().toString()
                    }, e);
                if (t.length || this.displayNewSnackbar(o), o.isLowPriority) return void this.setState({
                    queue: t.concat([o])
                });
                var i = n.findIndex(t, function(e) {
                    return !!e.isLowPriority
                });
                i === -1 ? this.setState({
                    queue: t.concat([o])
                }) : 0 === i ? (this.setState({
                    queue: [o].concat(t)
                }), this.displayNewSnackbar(o)) : this.setState({
                    queue: t.slice(0, i).concat([o], t.slice(i))
                })
            }, t.prototype.dequeue = function(e) {
                var t = this.state.queue,
                    r = e ? n.findIndex(t, function(t) {
                        return t.id === e
                    }) : 0,
                    o = t[r];
                if (o) return t.length > 1 ? (this.setState({
                    queue: t.slice(0, r).concat(t.slice(r + 1))
                }), 0 === r && this.displayNewSnackbar(t[1])) : this.setState({
                    queue: [],
                    displayedSnackbar: null
                }), o
            }, t.prototype.render = function() {
                var e = this.state,
                    t = e.displayedSnackbar,
                    r = e.isVisible;
                if (!t || !r) return null;
                var n = this.props.getParentElement ? this.props.getParentElement() : void 0;
                return o.default.createElement(i.Portal, {
                    className: "snackbar-container",
                    parentElement: n
                }, t)
            }, t
    })(o.default.PureComponent);
    t.SnackbarManager = d
}), define("modules/clean/redux/tests/store", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mockExtraArguments = function() {
        return {}
    }
}), define("modules/clean/search/api", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/analytics", "modules/clean/react/browse/models", "modules/clean/search/api_helpers", "modules/clean/search/constants", "modules/clean/search/models", "modules/clean/search/search_bar/data/selectors", "modules/clean/search/search_bar/data/store", "modules/clean/search/search_helpers", "modules/clean/search/types"], function(e, t, r, o, n, i, a, s, l, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), s = r.__importStar(s), u = r.__importStar(u);
    var _ = (function() {
        function e() {
            this._activeRequest = null, this._activeSuggestionRequest = null
        }
        return e.prototype.abortPreviousLoading = function() {
            null != this._activeRequest && this._activeRequest.abort()
        }, e.prototype.loadResults = function(e) {
            var t = e.user,
                r = e.path,
                o = e.query,
                n = e.start,
                i = e.maxResults,
                l = e.searchSessionId,
                c = e.nsId,
                d = e.fileNameOnly,
                p = e.loadDeleted,
                _ = e.showPaperResults,
                h = e.isDropdown,
                f = e.isAdminConsole,
                m = e.webTimer,
                S = e.onSuccess,
                g = e.onError,
                v = e.overrideUrl,
                E = e.searchResultsExperiments,
                w = a.getCurrentTimezoneOffset(),
                b = {
                    query: o,
                    search_token: u.getSearchCsrfToken(),
                    fq_path: r,
                    ns_id: c,
                    filename_only: !!d,
                    max_results: i,
                    deleted: !!p,
                    start: n,
                    show_paper_results: !!_,
                    is_dropdown: !!h,
                    is_admin_console: !!f,
                    show_unmounted_results: !0,
                    timezone_offset: w,
                    include_browse_context: !0,
                    calculate_folder_size: !!E.expFolderCalcSize,
                    include_shared_docs: !0,
                    include_snippets: !!E.expSnippets
                },
                T = v ? v : s.SEARCH_FRONTEND_SERVICE_ENDPOINT;
            this._fetchResults({
                requestData: b,
                user: t,
                searchSessionId: l,
                url: T,
                onSuccess: S,
                onError: g,
                webTimer: m
            })
        }, e.prototype._extractSearchResultsList = function(e) {
            for (var t = [], r = 0, o = e; r < o.length; r++) {
                var n = o[r];
                switch (n.search_result_type) {
                    case p.SearchResultTypes.FILE:
                        t.push(i.File.fromServerObject(n));
                        break;
                    case p.SearchResultTypes.FILE_SHARED_WITH_ME:
                        t.push(i.FileSharedWithMe.fromServerObject(n));
                        break;
                    case p.SearchResultTypes.PAPER:
                        t.push(i.Paper.fromServerObject(n));
                        break;
                    case p.SearchResultTypes.PAPER_FOLDER:
                        t.push(i.PaperFolder.fromServerObject(n))
                }
            }
            return t
        }, e.prototype._getSearchType = function(e) {
            return e.is_image_content_search ? "image_search" : e.is_dropdown ? "dropdown" : e.deleted ? "full_page_deleted" : "full_page"
        }, e.prototype.loadPartialResults = function(e) {
            var t = this,
                o = e.user,
                n = e.maxResults,
                i = e.start,
                a = e.path,
                l = e.query,
                c = e.fileCategories,
                d = e.isPaperEnabled,
                p = void 0 === d || d,
                _ = e.searchSessionId,
                h = e.includeBrowseContext,
                f = e.webTimer,
                m = e.sortOrder,
                S = e.searchType,
                g = e.getSuggestion,
                v = e.onSuccess,
                E = e.onError,
                w = e.searchResultsExperiments,
                b = e.skipLogging,
                T = e.deleted,
                F = e.filteredAccountId,
                y = e.artificialLatency;
            S === s.SearchType.IMAGE && (c = void 0);
            var C = c && !u.allCategoriesChecked(c, p) ? u.fileCategoriesToString(c) : "",
                I = m ? u.sortFieldToOrderBy(m.sortField) : "",
                O = m ? u.sortDirectionToReverseOrder(m.sortDirection) : "",
                P = r.__assign({
                    query: l,
                    search_token: u.getSearchCsrfToken(),
                    fq_path: a,
                    start: i,
                    max_results: n,
                    deleted: T,
                    show_paper_results: S !== s.SearchType.IMAGE,
                    include_browse_context: h,
                    search_session_id: _,
                    calculate_folder_size: !!w.expFolderCalcSize
                }, C && {
                    file_categories: C
                }, {
                    is_image_content_search: S === s.SearchType.IMAGE,
                    is_prompt_request: g,
                    order_by: I,
                    reverse_order: O,
                    include_shared_docs: !0,
                    include_snippets: !!w.expSnippets && S === s.SearchType.ALL,
                    user_filter_account_id: F
                }),
                R = function() {
                    t._fetchResults({
                        requestData: P,
                        user: o,
                        searchSessionId: _,
                        url: s.SEARCH_FRONTEND_SERVICE_ENDPOINT,
                        onSuccess: v,
                        onError: E,
                        webTimer: f,
                        skipLogging: b,
                        getSuggestion: g
                    })
                };
            y ? setTimeout(function() {
                R()
            }, y) : R()
        }, e.prototype._fetchResults = function(e) {
            var t = this,
                i = e.requestData,
                a = e.user,
                s = e.searchSessionId,
                p = e.url,
                _ = e.onSuccess,
                h = e.onError,
                f = e.webTimer,
                m = e.skipLogging,
                S = e.getSuggestion;
            if (S ? null !== this._activeSuggestionRequest && this._activeSuggestionRequest.abort() : null != this._activeRequest && this._activeRequest.abort(), "" !== i.query || i.user_filter_account_id) {
                var g = u.fileCategoryStringToLogValue(i.file_categories),
                    v = c.experiments(d.getStoreForSearchBar().getState()),
                    E = r.__assign({
                        path_scoped: "/" !== i.fq_path,
                        search_type: this._getSearchType(i),
                        query_string: i.query,
                        start: i.start,
                        search_session_id: s,
                        timezone_offset: i.timezone_offset
                    }, u.isInFileTypeFilterExperiment(v) && {
                        file_type_filters: g
                    }, {
                        user_filter_account_id: i.user_filter_account_id
                    });
                m || n.SearchClientActivityLogger.log("query_started", a.id, E);
                var w = (new Date).getTime(),
                    b = o.WebRequest({
                        url: p,
                        data: i,
                        dataType: "json",
                        subject_user: a,
                        success: function(e, r, o) {
                            var c;
                            i.include_browse_context && (c = l.extractBrowseContext(e));
                            var d = e.search_results,
                                u = o.getResponseHeader("x-dropbox-request-id");
                            d.forEach(function(e) {
                                return e.request_id = u
                            });
                            var p = {
                                results: t._extractSearchResultsList(d),
                                hasMore: !!e.more,
                                nextPageOffset: +e.next_offset || 0
                            };
                            if (_({
                                    context: c,
                                    searchResults: p,
                                    deleted: !!i.deleted,
                                    requestId: u
                                }), !m) {
                                var h = n.SearchClientActivityLogger.create_search_log_dict(E, u, w, i.query, p.results.length, null, s);
                                n.SearchClientActivityLogger.log("query_completed", a.id, h)
                            }
                            f && f.end(u ? u : void 0)
                        },
                        error: function(e, t, r) {
                            var o = e.getResponseHeader("x-dropbox-request-id");
                            if ("abort" !== t && "function" == typeof h && h(r, o), !m) {
                                var l = n.SearchClientActivityLogger.create_search_log_dict(E, o, w, i.query, null, t, s);
                                n.SearchClientActivityLogger.log("query_failed", a.id, l)
                            }
                            f && f.abort()
                        },
                        complete: function() {
                            S ? this._activeSuggestionRequest = null : this._activeRequest = null
                        }
                    });
                S ? this._activeSuggestionRequest = b : this._activeRequest = b
            }
        }, e.prototype.fetchAdditionalFileMetadata = function(e) {
            var t = e.searchResults,
                r = e.user,
                n = e.onSuccess,
                a = e.onError,
                l = t.filter(function(e) {
                    return e instanceof i.File
                }),
                c = l.map(function(e) {
                    return [e.ns_id, e.sjid, e.fq_path.substr(0, e.fq_path.length - e.ns_path.length)]
                });
            c.length > 0 && o.WebRequest({
                url: s.FILE_INFO_ENDPOINT,
                data: {
                    nsid_sjid_fq_mount_point_tuples: JSON.stringify(c)
                },
                dataType: "json",
                subject_user: r,
                success: function(e, t, r) {
                    for (var o = e.file_results, i = [], a = 0, s = o; a < s.length; a++) {
                        var l = s[a];
                        i.push(l)
                    }
                    n(i)
                },
                error: function(e, t, r) {
                    "abort" !== t && "function" == typeof a && a(r, e.getResponseHeader("x-dropbox-request-id"))
                }
            })
        }, e
    })();
    t.SearchApiClient = _, t.searchApiClient = new _
}), define("modules/clean/search/single_page/data/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.SET_USER = "SEARCH/SET_USER", e.SET_EXPERIMENTS = "SEARCH/SET_EXPERIMENTS", e.SET_PATH = "SEARCH/SET_PATH", e.SET_QUERY = "SEARCH/SET_QUERY", e.SET_FILE_CATEGORIES = "SEARCH/SET_FILE_CATEGORIES", e.SET_RESULTS = "SEARCH/SET_RESULTS", e.CLEAR_RESULTS = "SEARCH/CLEAR_RESULTS", e.APPEND_RESULTS = "SEARCH/APPEND_RESULTS", e.SET_LOADING_STATE = "SEARCH/SET_LOADING_STATE", e.SET_SESSION_ID = "SEARCH/SET_SESSION_ID", e.SET_REQUEST_ID = "SEARCH/SET_REQUEST_ID", e.SET_SELECTION = "SEARCH/SET_SELECTION", e.SET_PREVIEW_FILE_ID = "SEARCH/SET_PREVIEW_FILE", e.SET_SORT_ORDER = "SEARCH/SET_SORT_ORDER", e.SET_CACHED_FULL_RESULTS = "SEARCH/SET_CACHED_FULL_RESULTS", e.SET_CACHED_FULL_RESULTS_SORT_FIELD = "SEARCH/SET_CACHED_FULL_RESULTS_SORT_FIELD", e.ADD_TTI_COMPONENT = "SEARCH/ADD_TTI_COMPONENT", e.CLEAR_TTI_COMPONENTS = "SEARCH/CLEAR_TTI_COMPONENTS", e.SET_LOADING_DELETED_RESULTS = "SEARCH/SET_LOADING_DELETED_RESULTS", e.SET_SEARCH_TYPE = "SEARCH/SET_SEARCH_TYPE", e.SET_IMAGE_SUGGESTION = "SEARCH/SET_IMAGE_SUGGESTION", e.UPDATE_FILE_IN_RESULTS = "SEARCH/UPDATE_FILE_IN_RESULTS", e.UPDATE_RESULTS = "SEARCH/UPDATE_RESULTS", e.REMOVE_RESULTS = "SEARCH/REMOVE_RESULTS", e.RENAME_FILE = "SEARCH/RENAME_FILE", e.DELETE_FILES = "SEARCH/DELETE_FILES", e.PURGE_FILES = "SEARCH/PURGE_FILES", e.RESTORE_FILES = "SEARCH/RESTORE_FILES", e.SET_QUERY_HISTORY = "SEARCH/SET_QUERY_HISTORY", e.SET_SUGGESTION_HIGHLIGHT_ROW = "SEARCH/SET_SUGGESTION_HIGHLIGHT_ROW", e.UPDATE_QUERY_SUGGESTIONS_CACHE = "SEARCH/UPDATE_QUERY_SUGGESTIONS_CACHE", e.SET_LAST_QUERY_WITH_QUERY_SUGGESTIONS_LOADED = "SEARCH/SET_LAST_QUERY_WITH_QUERY_SUGGESTIONS_LOADED", e.SET_FILTERED_ACCOUNT_ID = "SEARCH/SET_FILTERED_ACCOUNT_ID", e.UPDATE_PEOPLE_SUGGESTIONS_CACHE = "SEARCH/UPDATE_PEOPLE_SUGGESTIONS_CACHE", e.SET_LAST_QUERY_WITH_PEOPLE_SUGGESTIONS_LOADED = "SEARCH/SET_LAST_QUERY_WITH_PEOPLE_SUGGESTIONS_LOADED", e.SET_DWELL_TIME = "SEARCH/SET_DWELL_TIME", e.SET_RECENT_ITEMS = "SEARCH/SET_RECENT_ITEMS", e.SET_RECENT_ITEMS_LOADING_STATE = "SEARCH/SET_RECENT_ITEMS_LOADING_STATE"
    })(t.ActionTypes || (t.ActionTypes = {}))
}), define("modules/clean/sharing/shared_folder_invite/shared_folder_invite_async", ["require", "exports", "tslib", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, r, o, n) {
    "use strict";
    var i = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AsyncSharedFolderInvite = o.Loadable({
        loader: function() {
            return r.__awaiter(i, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, n.waitForTTI()];
                        case 1:
                            return o.sent(), [4, new Promise(function(t, r) {
                                e(["modules/clean/sharing/shared_folder_invite/shared_folder_invite"], t, r)
                            }).then(r.__importStar)];
                        case 2:
                            return t = o.sent().SharedFolderInvite, [2, t]
                    }
                })
            })
        }
    })
}), define("modules/clean/upsell/top_notification_listener", ["require", "exports", "modules/clean/upsell/prompt_event_emitter"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createTopNotificationListener = function(e) {
        var t = function(t) {
                return function(r) {
                    "TOP_NOTIFICATION" === r && e(t)
                }
            },
            o = t(!0),
            n = t(!1);
        return r.promptBufferedEventEmitter.on(r.Events.ON_PROMPT_SHOWN, o), r.promptBufferedEventEmitter.on(r.Events.ON_PROMPT_DISMISSED, n), {
            unsubscribe: function() {
                r.promptBufferedEventEmitter.off(r.Events.ON_PROMPT_SHOWN, o), r.promptBufferedEventEmitter.off(r.Events.ON_PROMPT_DISMISSED, n)
            }
        }
    }
}), define("modules/clean/web_upload_action_logger", ["require", "exports", "tslib", "modules/clean/ajax"], function(e, t, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), t.MAX_ERRORS = 3;
    var n = (function() {
        function e() {
            this.errorCount = 0, this.lastError = Date.now(), this.shouldReport = !0
        }
        return e.prototype.log = function(e, r, n) {
            var i = this;
            return this.shouldReport && (this.errorCount < t.MAX_ERRORS || Date.now() - this.lastError > 6e5) ? new Promise(function(a, s) {
                o.SilentBackgroundRequest({
                    url: "/log/web_upload_action",
                    data: {
                        _subject_uid: e,
                        event_type: r,
                        extra_params: JSON.stringify(n)
                    },
                    error: function(e) {
                        429 === e.status ? i.errorCount = t.MAX_ERRORS : i.errorCount++, i.lastError = Date.now(), s(e)
                    },
                    success: function(e) {
                        try {
                            var t = JSON.parse(e);
                            t && !t.continue_sending && (i.shouldReport = !1), i.errorCount = 0, a(e)
                        } catch (e) {
                            throw i.errorCount++, i.lastError = Date.now(), s(e), e
                        }
                    }
                })
            }) : Promise.resolve({})
        }, e
    })();
    t.WebUploadActionLog = new n, t.WebUploadActionLogClass = n
}), define("premium-growth/checklist-banner-item", ["require", "exports", "tslib", "react", "spectrum/button", "premium-growth/classnames", "premium-growth/user-education-icons", "premium-growth/loading-placeholder"], function(e, t, r, o, n, i, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), i = r.__importDefault(i), t.ChecklistBannerItem = function(e) {
        var t = e.onClick,
            r = e.status,
            l = e.title,
            c = e.loaded,
            d = void 0 === c ? !!r || !!l : c,
            u = "complete" === r ? a.CheckInCircleSvg : a.ArrowInCircleSvg;
        return o.default.createElement("div", {
            className: "checklist-banner-item"
        }, d ? o.default.createElement(n.Button, {
            className: i.default("checklist-banner-item__button", "checklist-banner-item__button--" + r),
            onClick: t,
            variant: "styleless"
        }, o.default.createElement("div", {
            className: "checklist-banner-item__body"
        }, o.default.createElement("div", {
            className: i.default("checklist-banner-item__text ", "checklist-banner-item__text--" + r)
        }, l), o.default.createElement("div", {
            className: "checklist-banner-item__spacer"
        }), o.default.createElement(u, {
            className: "checklist-banner-item__icon"
        }))) : o.default.createElement(s.LoadingPlaceholder, null))
    }
}), define("premium-growth/checklist-banner", ["require", "exports", "tslib", "react", "premium-growth/classnames", "premium-growth/loading-placeholder"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), t.ChecklistBanner = function(e) {
        var t = e.children,
            r = e.subtitle,
            a = e.title,
            s = e.loaded,
            l = void 0 === s ? !!a || !!r : s,
            c = e.dimmed,
            d = n.default("checklist-banner", {
                "is-dimmed": c
            });
        return o.default.createElement("div", {
            className: d
        }, o.default.createElement("div", {
            className: "checklist-banner__copy"
        }, l ? o.default.createElement("div", {
            className: "checklist-banner__title"
        }, a) : o.default.createElement(i.LoadingPlaceholder, {
            className: "checklist-banner__title-loading"
        }), l ? o.default.createElement("div", {
            className: "checklist-banner__subtitle"
        }, r) : o.default.createElement(i.LoadingPlaceholder, {
            className: "checklist-banner__subtitle-loading"
        })), o.default.createElement("div", {
            className: "checklist-banner__items"
        }, t))
    }
}), define("premium-growth/classnames", ["require", "exports"], function(e, t) {
    "use strict";

    function r() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = [], i = 0; i < e.length; i++) {
            var a = e[i];
            if (a)
                if ("string" == typeof a || "number" == typeof a) n.push(a);
                else if (Array.isArray(a) && a.length) {
                var s = r.apply(null, a);
                s && n.push(s)
            } else if ("object" == typeof a)
                for (var l in a) o.call(a, l) && a[l] && n.push(l)
        }
        return n.join(" ")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {}.hasOwnProperty;
    t.default = r
}), define("premium-growth/loading-placeholder", ["require", "exports", "tslib", "react", "premium-growth/classnames"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), t.LoadingPlaceholder = function(e) {
        var t = e.className;
        return o.default.createElement("div", {
            className: n.default("loading-placeholder", t)
        })
    }
}), define("premium-growth/user-education-icons", ["require", "exports", "tslib", "react", "premium-growth/classnames"], function(e, t, r, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), t.ArrowInCircleSvg = function(e) {
        var t = e.className;
        return o.default.createElement("svg", {
            className: n.default("icon", "icon__arrow", t),
            viewBox: "0 0 35 35"
        }, o.default.createElement("path", {
            d: "M21.6270544,16.4260476 L9.125,16.4260476 C8.50367966,16.4260476 8,16.9658974\n                8,17.6318359 C8,18.2977745 8.50367966,18.8376243 9.125,18.8376243\n                L21.6270544,18.8376243 L18.0498997,22.2052624 C17.5497138,22.676152\n                17.5497138,23.439615 18.0498997,23.9105046 C18.5500856,24.3813943\n                19.3610472,24.3813943 19.8612331,23.9105046 L25.3936666,18.7021098\n                C25.753622,18.5013092 25.9995453,18.0980226 25.9999994,17.6331258\n                C26.0000002,17.6322659 26.0000002,17.631406 25.9999993,17.630546\n                C25.9995453,17.1656493 25.753622,16.7623627 25.3936666,16.561562\n                L19.8612331,11.3531672 C19.3610472,10.8822776 18.5500856,10.8822776\n                18.0498997,11.3531672 C17.5497138,11.8240569 17.5497138,12.5875198\n                18.0498997,13.0584095 L21.6270544,16.4260476 Z M17.5,35 C7.83501688,35\n                0,27.1649831 0,17.5 C0,7.83501688 7.83501688,0 17.5,0 C27.1649831,0\n                35,7.83501688 35,17.5 C35,27.1649831 27.1649831,35 17.5,35 Z"
        }))
    }, t.CheckInCircleSvg = function(e) {
        var t = e.className;
        return o.default.createElement("svg", {
            className: n.default("icon", "icon__check-circle", t),
            viewBox: "0 0 35 35"
        }, o.default.createElement("path", {
            d: "M15.75,20.1286797 L13.2928932,17.6715729 C12.7071068,17.0857864\n                11.7573593,17.0857864 11.1715729,17.6715729 C10.5857864,18.2573593\n                10.5857864,19.2071068 11.1715729,19.7928932 L14.7071068,23.3284271\n                C15.2928932,23.9142136 16.2426407,23.9142136 16.8284271,23.3284271\n                C16.9289209,23.2279334 17.0121746,23.116728 17.0781882,22.9984862\n                C17.1630264,22.9429118 17.2434703,22.87785 17.3180195,22.8033009\n                L25.8033009,14.3180195 C26.3890873,13.732233 26.3890873,12.7824856\n                25.8033009,12.1966991 C25.2175144,11.6109127 24.267767,11.6109127\n                23.6819805,12.1966991 L15.75,20.1286797 Z M17.5,35 C7.83501688,35\n                0,27.1649831 0,17.5 C0,7.83501688 7.83501688,0 17.5,0 C27.1649831,0\n                35,7.83501688 35,17.5 C35,27.1649831 27.1649831,35 17.5,35 Z"
        }))
    }
}), define("retrieval-components/collapsable-section", ["require", "exports", "tslib", "react", "classnames", "spectrum/button"], function(e, t, r, o, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importDefault(n), t.CollapsableSection = function(e) {
        var t = e.title,
            r = e.isOpen,
            a = e.onHeaderClick,
            s = e.children,
            l = e.top,
            c = e.strings,
            d = e.containerClassName;
        return o.default.createElement("div", {
            className: n.default({
                "rc-collapsable-section": !0,
                "rc-collapsable-section--closed": !r
            }),
            style: {
                top: l
            }
        }, o.default.createElement("h2", {
            className: "rc-collapsable-section__header"
        }, o.default.createElement("span", null, t), o.default.createElement(i.Button, {
            onClick: a,
            className: "rc-collapsable-section__toggle",
            variant: "styleless"
        }, r ? c.buttonClose : c.buttonOpen)), o.default.createElement("div", {
            className: d,
            style: {
                display: r ? void 0 : "none"
            }
        }, s))
    }
}), define("retrieval-components/highlighted-truncated-string/em-string", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e(t) {
            if (!(this instanceof e)) return new e(t);
            this.s = t, this.info = this.widthInfo(), this.length = t.length ? this.info[this.s.length - 1] : 0
        }
        return e.initClass = function() {
            this.ACCURACY = 2, this.CODEPOINT_TO_WIDTH = {
                32: 38,
                33: 25,
                34: 42,
                35: 67,
                36: 58,
                37: 92,
                38: 75,
                39: 25,
                40: 33,
                41: 33,
                42: 58,
                43: 58,
                44: 25,
                45: 33,
                46: 25,
                47: 42,
                48: 58,
                49: 58,
                50: 58,
                51: 58,
                52: 58,
                53: 58,
                54: 58,
                55: 58,
                56: 58,
                57: 58,
                58: 25,
                59: 25,
                60: 58,
                61: 58,
                62: 58,
                63: 50,
                64: 100,
                65: 67,
                66: 67,
                67: 67,
                68: 75,
                69: 58,
                70: 58,
                71: 75,
                72: 83,
                73: 33,
                74: 25,
                75: 67,
                76: 58,
                77: 100,
                78: 83,
                79: 83,
                80: 67,
                81: 83,
                82: 67,
                83: 58,
                84: 58,
                85: 75,
                86: 67,
                87: 100,
                88: 67,
                89: 58,
                90: 58,
                91: 33,
                92: 42,
                93: 33,
                94: 58,
                95: 50,
                96: 67,
                97: 58,
                98: 67,
                99: 50,
                100: 67,
                101: 58,
                102: 33,
                103: 58,
                104: 67,
                105: 25,
                106: 25,
                107: 58,
                108: 25,
                109: 100,
                110: 67,
                111: 67,
                112: 67,
                113: 67,
                114: 42,
                115: 50,
                116: 42,
                117: 67,
                118: 58,
                119: 83,
                120: 58,
                121: 58,
                122: 50,
                123: 42,
                124: 58,
                125: 42,
                126: 58,
                161: 25,
                162: 58,
                163: 58,
                164: 58,
                165: 58,
                166: 58,
                167: 58,
                168: 67,
                169: 92,
                170: 42,
                171: 50,
                172: 58,
                174: 92,
                175: 58,
                176: 50,
                177: 58,
                178: 42,
                179: 42,
                180: 67,
                181: 67,
                182: 75,
                183: 25,
                184: 25,
                185: 42,
                186: 42,
                187: 50,
                188: 83,
                189: 83,
                190: 83,
                191: 50,
                192: 67,
                193: 67,
                194: 67,
                195: 67,
                196: 67,
                197: 67,
                198: 92,
                199: 67,
                200: 58,
                201: 58,
                202: 58,
                203: 58,
                204: 33,
                205: 33,
                206: 33,
                207: 33,
                208: 75,
                209: 83,
                210: 83,
                211: 83,
                212: 83,
                213: 83,
                214: 83,
                215: 58,
                216: 83,
                217: 75,
                218: 75,
                219: 75,
                220: 75,
                221: 58,
                222: 67,
                223: 67,
                224: 58,
                225: 58,
                226: 58,
                227: 58,
                228: 58,
                229: 58,
                230: 92,
                231: 50,
                232: 58,
                233: 58,
                234: 58,
                235: 58,
                236: 25,
                237: 25,
                238: 25,
                239: 25,
                240: 67,
                241: 67,
                242: 67,
                243: 67,
                244: 67,
                245: 67,
                246: 67,
                247: 58,
                248: 67,
                249: 67,
                250: 67,
                251: 67,
                252: 67,
                253: 58,
                254: 67,
                255: 58,
                256: 75,
                257: 67,
                258: 75,
                259: 67,
                260: 75,
                261: 67,
                262: 75,
                263: 58,
                264: 75,
                265: 58,
                266: 75,
                267: 58,
                268: 75,
                269: 58,
                270: 83,
                271: 83,
                272: 83,
                273: 75,
                274: 67,
                275: 67,
                276: 67,
                277: 67,
                278: 67,
                279: 67,
                280: 67,
                281: 67,
                282: 67,
                283: 67,
                284: 83,
                285: 75,
                286: 83,
                287: 75,
                288: 83,
                289: 75,
                290: 83,
                291: 75,
                292: 83,
                293: 75,
                294: 92,
                295: 75,
                296: 33,
                297: 33,
                298: 33,
                299: 33,
                300: 33,
                301: 33,
                302: 33,
                303: 33,
                304: 33,
                305: 25,
                306: 67,
                307: 67,
                308: 42,
                309: 33,
                310: 75,
                311: 67,
                312: 67,
                313: 58,
                314: 33,
                315: 58,
                316: 33,
                317: 58,
                318: 42,
                319: 58,
                320: 50,
                321: 67,
                322: 42,
                323: 83,
                324: 75,
                325: 83,
                326: 75,
                327: 83,
                328: 75,
                329: 83,
                330: 83,
                331: 75,
                332: 92,
                333: 67,
                334: 92,
                335: 67,
                336: 92,
                337: 67,
                338: 100,
                339: 100,
                340: 75,
                341: 50,
                342: 75,
                343: 50,
                344: 75,
                345: 50,
                346: 67,
                347: 58,
                348: 67,
                349: 58,
                350: 67,
                351: 58,
                352: 67,
                353: 58,
                354: 75,
                355: 42,
                356: 75,
                357: 42,
                358: 75,
                359: 42,
                360: 83,
                361: 75,
                362: 83,
                363: 75,
                364: 83,
                365: 75,
                366: 83,
                367: 75,
                368: 83,
                369: 75,
                370: 83,
                371: 75,
                372: 100,
                373: 92,
                374: 75,
                375: 58,
                376: 75,
                377: 67,
                378: 67,
                379: 67,
                380: 67,
                381: 67,
                382: 67,
                383: 42,
                384: 75,
                385: 83,
                386: 67,
                387: 75,
                388: 75,
                389: 67,
                390: 75,
                391: 83,
                392: 58,
                393: 83,
                394: 100,
                395: 67,
                396: 75,
                397: 67,
                398: 67,
                399: 75,
                400: 58,
                401: 58,
                402: 75,
                403: 83,
                404: 75,
                405: 100,
                406: 50,
                407: 50,
                408: 75,
                409: 67,
                410: 50,
                411: 67,
                412: 117,
                413: 83,
                414: 75,
                415: 92,
                416: 92,
                417: 75,
                418: 117,
                419: 100,
                420: 75,
                421: 75,
                422: 75,
                423: 67,
                424: 58,
                425: 67,
                426: 58,
                427: 42,
                428: 75,
                429: 42,
                430: 75,
                431: 83,
                432: 75,
                433: 92,
                434: 83,
                435: 75,
                436: 75,
                437: 67,
                438: 67,
                439: 67,
                440: 67,
                441: 58,
                442: 58,
                443: 75,
                444: 75,
                445: 58,
                446: 50,
                447: 67,
                448: 33,
                449: 50,
                450: 50,
                451: 33,
                452: 142,
                453: 142,
                454: 133,
                455: 100,
                456: 92,
                457: 67,
                458: 117,
                459: 117,
                460: 100,
                461: 75,
                462: 67,
                463: 33,
                464: 33,
                465: 92,
                466: 67,
                467: 83,
                468: 75,
                469: 83,
                470: 75,
                471: 83,
                472: 75,
                473: 83,
                474: 75,
                475: 83,
                476: 75,
                477: 67,
                478: 75,
                479: 67,
                480: 75,
                481: 67,
                482: 100,
                483: 100,
                484: 92,
                485: 75,
                486: 83,
                487: 75,
                488: 75,
                489: 67,
                490: 92,
                491: 67,
                492: 92,
                493: 67,
                494: 67,
                495: 58,
                496: 33,
                497: 142,
                498: 142,
                499: 133,
                500: 83,
                501: 75,
                502: 117,
                503: 67,
                504: 83,
                505: 75,
                506: 75,
                507: 67,
                508: 100,
                509: 100,
                510: 92,
                511: 67,
                512: 75,
                513: 67,
                514: 75,
                515: 67,
                516: 67,
                517: 67,
                518: 67,
                519: 67,
                520: 33,
                521: 33,
                522: 33,
                523: 33,
                524: 92,
                525: 67,
                526: 92,
                527: 67,
                528: 75,
                529: 50,
                530: 75,
                531: 50,
                532: 83,
                533: 75,
                534: 83,
                535: 75,
                536: 67,
                537: 58,
                538: 75,
                539: 42,
                540: 58,
                541: 58,
                542: 83,
                543: 75,
                544: 83,
                545: 100,
                546: 92,
                547: 67,
                548: 67,
                549: 67,
                550: 75,
                551: 67,
                552: 67,
                553: 67,
                554: 92,
                555: 67,
                556: 92,
                557: 67,
                558: 92,
                559: 67,
                560: 92,
                561: 67,
                562: 75,
                563: 58,
                564: 67,
                565: 100,
                566: 67,
                567: 33,
                568: 100,
                569: 100,
                570: 75,
                571: 75,
                572: 58,
                573: 58,
                574: 67,
                575: 58,
                576: 58,
                577: 67,
                578: 50,
                579: 75,
                580: 75,
                581: 75,
                582: 75,
                583: 58,
                584: 58,
                585: 25,
                586: 83,
                587: 58,
                588: 75,
                589: 33,
                590: 75,
                591: 58,
                880: 67,
                881: 50,
                882: 67,
                883: 50,
                884: 33,
                885: 33,
                886: 75,
                887: 67,
                888: 108,
                889: 108,
                890: 67,
                891: 58,
                892: 58,
                893: 58,
                894: 42,
                895: 108,
                896: 108,
                897: 108,
                898: 108,
                899: 108,
                900: 67,
                901: 67,
                902: 75,
                903: 42,
                904: 83,
                905: 100,
                906: 58,
                907: 108,
                908: 100,
                909: 108,
                910: 100,
                911: 100,
                912: 42,
                913: 75,
                914: 67,
                915: 58,
                916: 83,
                917: 67,
                918: 67,
                919: 83,
                920: 92,
                921: 33,
                922: 75,
                923: 75,
                924: 100,
                925: 83,
                926: 75,
                927: 92,
                928: 83,
                929: 67,
                930: 108,
                931: 67,
                932: 75,
                933: 75,
                934: 83,
                935: 75,
                936: 83,
                937: 92,
                938: 33,
                939: 75,
                940: 83,
                941: 58,
                942: 75,
                943: 42,
                944: 67,
                945: 83,
                946: 67,
                947: 67,
                948: 67,
                949: 58,
                950: 75,
                951: 75,
                952: 67,
                953: 42,
                954: 67,
                955: 67,
                956: 75,
                957: 67,
                958: 67,
                959: 67,
                960: 92,
                961: 67,
                962: 67,
                963: 75,
                964: 67,
                965: 67,
                966: 92,
                967: 67,
                968: 92,
                969: 100,
                970: 42,
                971: 67,
                972: 67,
                973: 67,
                974: 100,
                975: 108,
                976: 58,
                977: 75,
                978: 75,
                979: 100,
                980: 75,
                981: 92,
                982: 100,
                983: 67,
                984: 92,
                985: 67,
                986: 75,
                987: 58,
                988: 58,
                989: 58,
                990: 67,
                991: 58,
                992: 75,
                993: 92,
                994: 100,
                995: 92,
                996: 75,
                997: 58,
                998: 75,
                999: 58,
                1e3: 75,
                1001: 75,
                1002: 67,
                1003: 67,
                1004: 83,
                1005: 58,
                1006: 50,
                1007: 42,
                1008: 67,
                1009: 67,
                1010: 58,
                1011: 33,
                1012: 92,
                1013: 58,
                1014: 58,
                1015: 67,
                1016: 67,
                1017: 75,
                1018: 100,
                1019: 83,
                1020: 58,
                1021: 75,
                1022: 75,
                1023: 75,
                1024: 67,
                1025: 67,
                1026: 92,
                1027: 58,
                1028: 75,
                1029: 67,
                1030: 33,
                1031: 33,
                1032: 42,
                1033: 108,
                1034: 108,
                1035: 83,
                1036: 75,
                1037: 83,
                1038: 75,
                1039: 83,
                1040: 75,
                1041: 67,
                1042: 67,
                1043: 58,
                1044: 83,
                1045: 67,
                1046: 92,
                1047: 67,
                1048: 83,
                1049: 83,
                1050: 75,
                1051: 83,
                1052: 100,
                1053: 83,
                1054: 92,
                1055: 83,
                1056: 67,
                1057: 75,
                1058: 75,
                1059: 75,
                1060: 83,
                1061: 75,
                1062: 83,
                1063: 75,
                1064: 108,
                1065: 108,
                1066: 75,
                1067: 92,
                1068: 67,
                1069: 75,
                1070: 108,
                1071: 75,
                1072: 67,
                1073: 67,
                1074: 58,
                1075: 58,
                1076: 75,
                1077: 67,
                1078: 83,
                1079: 58,
                1080: 75,
                1081: 75,
                1082: 67,
                1083: 67,
                1084: 83,
                1085: 75,
                1086: 67,
                1087: 75,
                1088: 75,
                1089: 58,
                1090: 58,
                1091: 58,
                1092: 92,
                1093: 67,
                1094: 75,
                1095: 58,
                1096: 92,
                1097: 100,
                1098: 67,
                1099: 83,
                1100: 58,
                1101: 58,
                1102: 92,
                1103: 58,
                1104: 67,
                1105: 67,
                1106: 75,
                1107: 58,
                1108: 58,
                1109: 58,
                1110: 33,
                1111: 33,
                1112: 42,
                1113: 92,
                1114: 92,
                1115: 75,
                1116: 67,
                1117: 75,
                1118: 58,
                1119: 75,
                1120: 100,
                1121: 75,
                1122: 75,
                1123: 67,
                1124: 83,
                1125: 83,
                1126: 75,
                1127: 67,
                1128: 100,
                1129: 92,
                1130: 92,
                1131: 83,
                1132: 117,
                1133: 108,
                1134: 67,
                1135: 67,
                1136: 83,
                1137: 83,
                1138: 92,
                1139: 67,
                1140: 83,
                1141: 67,
                1142: 83,
                1143: 67,
                1144: 133,
                1145: 125,
                1146: 92,
                1147: 67,
                1148: 100,
                1149: 75,
                1150: 100,
                1151: 75,
                1152: 75,
                1153: 58,
                1154: 75,
                1155: 0,
                1156: 0,
                1157: 0,
                1158: 0,
                1159: 108,
                1160: 0,
                1161: 0,
                1162: 83,
                1163: 75,
                1164: 67,
                1165: 58,
                1166: 67,
                1167: 75,
                1168: 58,
                1169: 58,
                1170: 67,
                1171: 58,
                1172: 75,
                1173: 67,
                1174: 100,
                1175: 92,
                1176: 67,
                1177: 58,
                1178: 75,
                1179: 67,
                1180: 83,
                1181: 75,
                1182: 75,
                1183: 67,
                1184: 83,
                1185: 75,
                1186: 83,
                1187: 75,
                1188: 100,
                1189: 83,
                1190: 117,
                1191: 100,
                1192: 92,
                1193: 75,
                1194: 75,
                1195: 58,
                1196: 75,
                1197: 58,
                1198: 75,
                1199: 58,
                1200: 75,
                1201: 58,
                1202: 75,
                1203: 75,
                1204: 100,
                1205: 83,
                1206: 75,
                1207: 67,
                1208: 75,
                1209: 67,
                1210: 75,
                1211: 58,
                1212: 92,
                1213: 75,
                1214: 92,
                1215: 75,
                1216: 33,
                1217: 92,
                1218: 83,
                1219: 75,
                1220: 67,
                1221: 83,
                1222: 67,
                1223: 83,
                1224: 75,
                1225: 83,
                1226: 75,
                1227: 75,
                1228: 58,
                1229: 100,
                1230: 83,
                1231: 25,
                1232: 75,
                1233: 67,
                1234: 75,
                1235: 67,
                1236: 100,
                1237: 100,
                1238: 67,
                1239: 67,
                1240: 75,
                1241: 67,
                1242: 75,
                1243: 67,
                1244: 92,
                1245: 83,
                1246: 67,
                1247: 58,
                1248: 67,
                1249: 58,
                1250: 83,
                1251: 75,
                1252: 83,
                1253: 75,
                1254: 92,
                1255: 67,
                1256: 92,
                1257: 67,
                1258: 92,
                1259: 67,
                1260: 75,
                1261: 58,
                1262: 75,
                1263: 58,
                1264: 75,
                1265: 58,
                1266: 75,
                1267: 58,
                1268: 75,
                1269: 58,
                1270: 58,
                1271: 42,
                1272: 92,
                1273: 83,
                1274: 58,
                1275: 42,
                1276: 75,
                1277: 58,
                1278: 75,
                1279: 58,
                2026: 67,
                19977: 108,
                65403: 58
            }, this._ELLIPSIS_LENGTH = new e("…").length, this._DOT_LENGTH = new e(".").length
        }, e.em_snippet = function(t, r, o, n) {
            void 0 === n && (n = "HIGHLIGHTED_TRUNCATED_STRING_MIDDLE"), null == r && (r = 50), null == o && (o = .75);
            var i = new e(t.toString());
            switch (n) {
                case "HIGHLIGHTED_TRUNCATED_STRING_END":
                    return i.snippet_end(r).toString();
                case "HIGHLIGHTED_TRUNCATED_STRING_START":
                    return i.snippet_start(r).toString();
                case "HIGHLIGHTED_TRUNCATED_STRING_LAST_WORD":
                    return i.snippet_last_word(r).toString();
                case "HIGHLIGHTED_TRUNCATED_STRING_FILE_EXTENSION":
                    return i.snippet_file_extension(r).toString();
                case "HIGHLIGHTED_TRUNCATED_STRING_MIDDLE":
                default:
                    return i.snippet(r, o).toString()
            }
        }, e.prototype.widthInfo = function() {
            var e = {};
            e[-1] = 0;
            for (var t = 0, r = this.s.length, o = 0 <= r; o ? t < r : t > r; o ? t++ : t--) e[t] = e[t - 1] + this.ems(this.s.charAt(t));
            return e
        }, e.prototype.findSpot = function(e) {
            var t;
            if (!e) return 0;
            for (var r = 0, o = this.s.length; r <= o;) {
                t = Math.floor(r / 2 + o / 2);
                var n = this.info[t - 1];
                if (n > e) o = t - 1;
                else {
                    if (!(n < e)) return t;
                    r = t + 1
                }
            }
            return r > t ? r : t
        }, e.prototype.ems = function(t) {
            var r = t.charCodeAt(0),
                o = e.CODEPOINT_TO_WIDTH[r];
            return o ? o / Math.pow(10, e.ACCURACY) : 768 <= r && r <= 879 ? 0 : 65377 <= r && r <= 65500 ? .58 : 11904 <= r && r <= 40911 || 44032 <= r && r <= 55215 || 4352 <= r && r <= 4607 || 63744 <= r && r <= 64255 || 65280 <= r && r <= 65535 || 131072 <= r && r <= 196607 ? 1.08 : .65
        }, e.prototype.substr = function(t, r) {
            var o = this.findSpot(t);
            if (null != r) {
                var n = this.findSpot(t + r);
                if (n - o < this.s.length) {
                    var i = this.s.charCodeAt(n - o);
                    65024 <= i && i <= 65039 && n--
                }
                return new e(this.s.substr(o, n - o))
            }
            return new e(this.s.substr(o))
        }, e.prototype.toString = function() {
            return this.s
        }, e.prototype.snippet = function(t, r) {
            if (void 0 === t && (t = 50), void 0 === r && (r = .75), this.length <= t) return this;
            t -= e._ELLIPSIS_LENGTH;
            var o = t * r,
                n = t - o,
                i = this.length - n,
                a = this.substr(0, o),
                s = this.substr(i);
            return new e(a.toString() + "…" + s.toString())
        }, e.prototype.snippet_end = function(t) {
            return void 0 === t && (t = 50), this.length <= t ? this : (t -= e._ELLIPSIS_LENGTH, new e(this.substr(0, t).toString() + "…"))
        }, e.prototype.snippet_start = function(t) {
            return void 0 === t && (t = 50), this.length <= t ? this : (t -= e._ELLIPSIS_LENGTH, new e("…" + this.substr(this.length - t, t).toString()))
        }, e.prototype.snippet_last_word = function(t) {
            if (void 0 === t && (t = 50), this.length <= t) return this;
            var r = this.toString().trim().split(" "),
                o = r.pop(),
                n = new e(o).length;
            if (n >= t) return this.snippet(t);
            t -= e._ELLIPSIS_LENGTH;
            var i = t - n;
            return new e(this.substr(0, i).toString() + "…" + o)
        }, e.prototype.snippet_file_extension = function(t) {
            if (void 0 === t && (t = 50), this.length <= t) return this;
            var r = this.toString().trim().split("."),
                o = r.pop(),
                n = new e(o).length;
            if (n >= t) return this.snippet(t);
            t -= e._ELLIPSIS_LENGTH;
            var i = t - n - e._DOT_LENGTH;
            return new e(this.substr(0, i).toString() + "…." + o)
        }, e
    })();
    t.Emstring = r, r.initClass()
}), define("retrieval-components/highlighted-truncated-string", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum/tooltip", "retrieval-components/highlighted-truncated-string/em-string", "retrieval-components/highlighted-truncated-string/text-highlights"], function(e, t, r, o, n, i, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importDefault(n), i = r.__importStar(i);
    var c = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.setRef = function(e) {
                r.textContainerSpan = e
            }, r.updateDisplayTextIfNecessary = function(e) {
                if (r.textContainerSpan) {
                    var t = e.fontSize,
                        o = e.text,
                        n = e.availableWidth,
                        i = e.cellBuffer,
                        a = e.variant,
                        l = r.textContainerSpan,
                        c = n ? n : l.getBoundingClientRect().width;
                    if (r.props.text !== o || r.state.cellWidth !== c || r.props.fontSize !== t || r.props.variant !== a) {
                        r.setState({
                            cellWidth: c
                        });
                        var d = c / t - i,
                            u = s.Emstring.em_snippet(o, d, .5, a);
                        u !== r.state.truncatedText && r.setState({
                            truncatedText: u
                        }), r.updateTooltip(u, o)
                    }
                }
            }, r.updateTooltip = function(e, t) {
                e && t && r.setState({
                    showTooltip: e !== t
                })
            }, r.state = {
                truncatedText: t.text,
                showTooltip: !1
            }, r
        }
        return o.__extends(t, e), t.prototype.componentDidMount = function() {
            this.updateDisplayTextIfNecessary(this.props)
        }, t.prototype.componentWillReceiveProps = function(e) {
            this.updateDisplayTextIfNecessary(e)
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                r = e.ariaLabel,
                o = e.highlightSpans,
                s = e.text,
                c = e.tooltipPosition,
                d = e.tooltipId,
                u = this.state,
                p = u.truncatedText,
                _ = u.showTooltip;
            return i.createElement(a.Tooltip, {
                id: d,
                positioning: c,
                tooltipContent: o ? l.generateHighlightedTooltipSpans(l.highlightSectionsFromHighlightSpans(s, o)) : s,
                showOnMouseMove: _,
                wrapperClassName: "rc-truncated-string__tooltip"
            }, i.createElement("span", {
                className: n.default(t, "rc-hl-truncated-string__container"),
                "aria-label": r,
                ref: this.setRef,
                style: {
                    display: "block"
                }
            }, o ? this.getHighlightedSpan(p, s, o) : p))
        }, t.prototype.splitTruncatedParts = function(e, t) {
            for (var r = 0; r < e.length && e.charAt(r) === t.charAt(r);) ++r;
            return r === e.length || "…" !== e.charAt(r) ? [e] : [e.substring(0, r), e.substring(r + 1)]
        }, t.prototype.getHighlightedSpan = function(e, t, r) {
            var o = this.splitTruncatedParts(e, t);
            if (1 === o.length) return l.highlightReactFromHighlightSpans(e, r);
            var n = l.highlightReactFromHighlightSpans(t, r, 0, o[0].length),
                a = l.highlightReactFromHighlightSpans(t, r, t.lastIndexOf(o[1])),
                s = l.highlightEllipsisFromHighlightSpans(o[0].length + 1, t.lastIndexOf(o[1]) - 1, r);
            return i.createElement("span", null, n, s, a)
        }, t.defaultProps = {
            tooltipPosition: "above",
            cellBuffer: 1,
            variant: "HIGHLIGHTED_TRUNCATED_STRING_MIDDLE"
        }, t
    })(i.PureComponent);
    t.HighlightedTruncatedString = c
}), define("retrieval-components/highlighted-truncated-string/text-highlights", ["require", "exports", "tslib", "classnames", "react"], function(e, t, r, o, n) {
    "use strict";

    function i(e, t, r, o) {
        if (r || (r = 0), void 0 === o && (o = e.length), !t || !c(e, t)) return [{
            isHighlighted: !1,
            text: e.substring(r, o)
        }];
        for (var n = [], i = 0, a = 0, s = t; a < s.length; a++) {
            var l = s[a],
                d = e.indexOf(l.string, i),
                u = d + l.string.length;
            if (i = u, !(d < r && u <= r || d >= o)) {
                var p = l.string;
                d < r && (p = p.slice(r - d)), o < u && (p = p.slice(0, -(u - o))), n.push({
                    text: p,
                    isHighlighted: l.isHighlighted
                })
            }
        }
        return n
    }

    function a(e, t, r, o) {
        return d(i(e, t, r, o))
    }

    function s(e, t, r) {
        return n.createElement("span", {
            className: o.default({
                "rc-hl-truncated-string__highlight": l(e, t, r)
            })
        }, "…")
    }

    function l(e, t, r) {
        if (!r) return !1;
        for (var o = 0, n = 0, i = r; n < i.length; n++) {
            var a = i[n],
                s = o + a.string.length - 1;
            if (a.isHighlighted && s >= e && o <= t) return !0;
            o = s + 1
        }
        return !1
    }

    function c(e, t) {
        return e === t.map(function(e) {
            return e.string
        }).join("")
    }

    function d(e) {
        return n.createElement("span", null, e.map(function(e, t) {
            return n.createElement("span", {
                className: o.default({
                    "rc-hl-truncated-string__highlight": e.isHighlighted
                }),
                key: t
            }, e.text)
        }))
    }

    function u(e) {
        return n.createElement("span", null, e.map(function(e, t) {
            return n.createElement("span", {
                className: o.default({
                    "rc-hl-truncated-string__tooltip-highlight": e.isHighlighted
                }),
                key: t
            }, e.text)
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), n = r.__importStar(n);
    t.highlightSectionsFromHighlightSpans = i, t.highlightReactFromHighlightSpans = a, t.highlightEllipsisFromHighlightSpans = s,
        t.generateHighlightedTooltipSpans = u
}), define("spectrum/icon_mode/bundle", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ICONS = {
        grid: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="#637282" fill-rule="evenodd"><path d="M7 7h2v2H7zM11 7h2v2h-2zM15 7h2v2h-2zM7 11h2v2H7zM11 11h2v2h-2zM15 11h2v2h-2zM7 15h2v2H7zM11 15h2v2h-2zM15 15h2v2h-2z"></path></g>'
        },
        list: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="#637282" fill-rule="evenodd"><path d="M6 15h2v2H6zM10 15h8v2h-8zM6 11h2v2H6zM10 11h8v2h-8zM6 7h2v2H6zM10 7h8v2h-8z"></path></g>'
        },
        tiles: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="#637282" fill-rule="evenodd"><path d="M7 7h4v4H7zM13 7h4v4h-4zM13 13h4v4h-4zM7 13h4v4H7z"></path></g>'
        }
    }
}), define("spectrum/icon_mode", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/stateless", "spectrum/svg_icon_bundle", "spectrum/icon_mode/bundle"], function(e, t, r, o, n, i, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), n = r.__importStar(n), t.ICONS = s.ICONS, t.IconMode = function(e) {
        var t = e.name,
            r = n.createElement(a.SvgIconBundle, {
                focusable: "false",
                icon: s.ICONS[t]
            });
        return n.createElement(i.Component, o.__assign({
            icon: r
        }, e))
    }, t.IconMode.displayName = "IconMode"
});
//# sourceMappingURL=pkg-browse.min.js-vflDJmX6o.map