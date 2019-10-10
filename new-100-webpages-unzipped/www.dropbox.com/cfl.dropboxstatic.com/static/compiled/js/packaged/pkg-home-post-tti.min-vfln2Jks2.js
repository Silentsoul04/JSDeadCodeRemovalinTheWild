define("modules/clean/cloud_docs/home_create_file_experiments_post_tti", ["require", "exports", "tslib", "react", "modules/clean/react/home/store", "modules/clean/cloud_docs/constants", "modules/clean/cloud_docs/new_file_menu"], function(e, t, o, n, r, i, s) {
    "use strict";

    function a() {
        return {
            expGddCreate: !1,
            expPaperCreate: !1,
            expBinderCreate: !1,
            expSimplePointerCreate: !1,
            expFileCreatePrimaryButton: !1
        }
    }

    function c(e) {
        return o.__awaiter(this, void 0, void 0, function() {
            var t, a, c, l, u, d;
            return o.__generator(this, function(o) {
                return t = e.cloudDocsExperiments.expGddCreate, a = e.cloudDocsExperiments.expPaperCreate, c = e.cloudDocsExperiments.expBinderCreate, l = e.cloudDocsExperiments.expSimplePointerCreate, u = e.cloudDocsExperiments.expFileCreatePrimaryButton, d = function() {
                    return n.default.createElement(s.NewFileMenu, {
                        key: "new-file-menu",
                        user: r.getUser(),
                        disabled: !1,
                        showGdd: t,
                        showPaper: a,
                        showBinder: c,
                        showSimplePointer: l,
                        source: i.NewFileMenuFromType.HOME,
                        primaryButton: u
                    })
                }, [2, new Promise(function(e, t) {
                    e(d)
                })]
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.getCloudDocsExperiments = a, t.getNewFileMenu = c
}), define("modules/clean/fileops", ["require", "exports", "tslib", "jquery", "modules/clean/ajax", "modules/core/i18n", "modules/core/notify", "modules/core/uri"], function(e, t, o, n, r, i, s, a) {
    "use strict";

    function c(e, t) {
        var o = n.default.Deferred(),
            a = i.ungettext("Deleted %(file_count)s item.", "Deleted %(file_count)s items.", t.length).format({
                file_count: t.length
            });
        return s.Notify.success(a), r.WebRequest({
            url: "/cmd/delete",
            data: {
                files: t
            },
            subject_user: e,
            success: function(e) {
                o.resolve(e)
            },
            error: function(e) {
                s.Notify.error(i._("Failed to perform the delete. Please try again later.")), o.reject(e)
            }
        }), o.promise()
    }

    function l(e, t, n) {
        var r;
        return void 0 === n && (n = {}), n = o.__assign((r = {}, r._subject_uid = String(t), r), n), new a.URI({
            path: "/history" + e,
            query: n
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.do_nonbrowse_delete = c, t.build_revisions_uri = l
}), define("modules/clean/react/home/content_suggestions/actions", ["require", "exports", "modules/clean/flux/dispatcher", "modules/clean/react/starred/constants", "modules/clean/react/home/content_suggestions/models/suggested_item", "modules/clean/react/home/content_suggestions/constants"], function(e, t, o, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SuggestedActions = {
        dispatchLoaded: function(e) {
            var t = e.map(r.suggestedItemToStarredStatus);
            o.Dispatcher.dispatch({
                type: i.SuggestedResourceActionTypes.LOAD_SUCCESS,
                items: e
            }), o.Dispatcher.dispatch({
                type: n.StarredActionTypes.SET_STATUS,
                starredStatuses: t
            })
        }
    }
}), define("modules/clean/react/home/content_suggestions/actions_post_tti", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/content_suggestions/constants", "modules/clean/react/home/content_suggestions/api_post_tti", "modules/clean/react/starred/id_type_pair", "modules/clean/react/home/content_suggestions/api", "modules/clean/react/home/content_suggestions/api_post_tti", "modules/clean/react/home/content_suggestions/actions", "modules/clean/react/home/resource/api_post_tti", "modules/clean/react/home/resource_id_types", "modules/clean/react/home/store", "modules/clean/react/home/constants"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _) {
    "use strict";

    function p(e, t, s) {
        return o.__awaiter(this, void 0, void 0, function() {
            var a;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, , 3]), [4, i.dismissSuggestedItem(e, t, s)];
                    case 1:
                        return o.sent(), n.Dispatcher.dispatch({
                            type: r.SuggestedResourceActionTypes.DISMISS_ITEM_SUCCESS,
                            dismissed: t
                        }), [3, 3];
                    case 2:
                        return a = o.sent(), n.Dispatcher.dispatch({
                            type: r.SuggestedResourceActionTypes.DISMISS_ITEM_FAILURE,
                            dismissed: t
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }

    function g(e, t, i) {
        return o.__awaiter(this, void 0, void 0, function() {
            var s, u, d, m;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        s = [], o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, c.getSuggested(e, t, i)];
                    case 2:
                        return u = o.sent(), d = a.handlePayload(u, t), d && l.SuggestedActions.dispatchLoaded(d.items), [2, d];
                    case 3:
                        return m = o.sent(), n.Dispatcher.dispatch({
                            type: r.SuggestedResourceActionTypes.LOAD_FAILURE
                        }), [2, s];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function h(e) {
        return o.__awaiter(this, void 0, void 0, function() {
            var t, r, i;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = e.map(function(e) {
                            return {
                                id: e.resourceId,
                                type: d.HOME_RESOURCE_ID_TYPE.ENCODED_FILE_OBJ_ID
                            }
                        }), [4, u.getFileMetadata(m.getUser(), t)];
                    case 1:
                        return r = o.sent(), i = {}, r.forEach(function(e) {
                            return i[s.idTypePairToString(e)] = e.file_metadata
                        }), n.Dispatcher.dispatch({
                            type: _.HomeResourceStoreActionTypes.RECEIVED_RESOURCE_ID_TO_FILE,
                            resourceIdToFile: i
                        }), [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = o.__importStar(i), t.dismissSuggestedItem = p, t.loadItems = g, t.fetchSuggestedFileMetadata = h
}), define("modules/clean/react/home/content_suggestions/api", ["require", "exports", "tslib", "external/lodash", "modules/core/exception", "modules/clean/react/home/constants"], function(e, t, o, n, r, i) {
    "use strict";

    function s(e, t) {
        var o = e;
        return o.variant ? l(o) : a(e, t)
    }

    function a(e, t) {
        return {
            items: e ? e.suggested_files.map(function(e) {
                return c(e)
            }) : null,
            variant: t
        }
    }

    function c(e) {
        return {
            resourceId: e.encoded_file_obj_id,
            encodedFileObjId: e.encoded_file_obj_id,
            fqPath: e.fq_path,
            filename: e.filename,
            reason: e.reason,
            displayType: e.display_type[".tag"].toUpperCase(),
            isStarred: e.is_starred,
            breadcrumb: e.breadcrumb,
            key: e.encoded_file_obj_id,
            url: e.url,
            suggestId: e.suggest_id,
            predictionId: e.suggest_id,
            isDismissed: !1,
            thumbnailUrl: e.thumbnail_url,
            isDir: e.is_dir,
            type: i.SuggestItemTypes.FILE
        }
    }

    function l(e) {
        return {
            items: e ? n.compact(e.suggested_items.map(function(e) {
                return u(e)
            })) : null,
            variant: e.variant
        }
    }

    function u(e) {
        if (e[".tag"] === i.SuggestItemTypes.FILE) {
            var t = e;
            return {
                resourceId: t.resource_id,
                encodedFileObjId: t.resource_id,
                key: t.resource_id,
                fqPath: t.fq_path,
                filename: t.filename,
                reason: t.reason,
                displayType: t.display_type[".tag"].toUpperCase(),
                isStarred: t.is_starred,
                breadcrumb: t.breadcrumb,
                url: t.url,
                suggestId: t.prediction_id,
                predictionId: t.prediction_id,
                isDismissed: !1,
                thumbnailUrl: t.thumbnail_url,
                isDir: t.is_dir,
                type: i.SuggestItemTypes.FILE
            }
        }
        if (e[".tag"] === i.SuggestItemTypes.PAPER_DOCUMENT) {
            var t = e;
            return {
                resourceId: t.resource_id,
                key: t.resource_id,
                reason: t.reason,
                displayType: t.display_type[".tag"].toUpperCase(),
                isStarred: t.is_starred,
                breadcrumb: t.breadcrumb,
                url: t.url,
                suggestId: t.prediction_id,
                predictionId: t.prediction_id,
                isDismissed: !1,
                thumbnailUrl: t.thumbnail_url,
                type: i.SuggestItemTypes.PAPER_DOCUMENT
            }
        }
        return r.reportStack("Unknown suggested item type", {
            severity: r.SEVERITY.NONCRITICAL,
            exc_extra: e
        }), null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.handlePayload = s, t.handlePayloadV1 = a, t.handlePayloadV2 = l
}), define("modules/clean/react/home/content_suggestions/api_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/api_v2/user_client"], function(e, t, o, n, r) {
    "use strict";

    function i(e, n, r) {
        return o.__awaiter(this, void 0, Promise, function() {
            return o.__generator(this, function(o) {
                return [2, t.getClient().ns("suggest").rpc("get_suggested", {
                    variant: n,
                    num_files: r
                }, {
                    subjectUserId: e.id
                })]
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.getClient = n.once(function() {
        return new r.UserApiV2Client
    }), t.dismissSuggestedItem = function(e, o, n) {
        var r = o.id,
            i = o.type;
        return t.getClient().ns("suggest").rpc("dismiss_suggested_item", {
            resource_id: r,
            id_type: i,
            feature_name: n
        }, {
            subjectUserId: e.id
        })
    }, t.getSuggested = i
}), define("modules/clean/react/home/content_suggestions/constants", ["require", "exports", "modules/core/i18n", "modules/clean/filetypes"], function(e, t, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.LOAD_SUCCESS = "HOME_SUGGESTED_LOAD_SUCCESS", e.LOAD_FAILURE = "HOME_SUGGESTED_LOAD_FAILURE", e.DISMISS_ITEM_SUCCESS = "HOME_SUGGESTED_DISMISS_ITEM_SUCCESS", e.DISMISS_ITEM_FAILURE = "HOME_SUGGESTED_DISMISS_ITEM_FAILURE"
    })(t.SuggestedResourceActionTypes || (t.SuggestedResourceActionTypes = {}));
    (function(e) {
        e.UNKNOWN = "UNKNOWN", e.RECENCY = "RECENCY", e.FRECENCY = "FRECENCY", e.WEEKLY_PERIODICITY = "WEEKLY_PERIODICITY", e.EVENT_COUNT = "EVENT_COUNT", e.EDIT_COUNT = "EDIT_COUNT", e.VIEW_COUNT = "VIEW_COUNT", e.PREDICTION = "PREDICTION", e.PREDICTION_VIEW = "PREDICTION_VIEW", e.PREDICTION_EDIT = "PREDICTION_EDIT", e.PREDICTION_SHARE = "PREDICTION_SHARE", e.WEEKLY_FRECENCY = "WEEKLY_FRECENCY", e.DIR_WEEKLY_FRECENCY = "DIR_WEEKLY_FRECENCY", e.RECENT_SHARE = "RECENT_SHARE"
    })(t.SUGGEST_REASONS || (t.SUGGEST_REASONS = {})), t.LoggingTypes = {
        OPEN_SUGGESTED_ITEM: "open_suggested_item",
        OPEN_PARENT_FOLDER: "open_parent_folder",
        RENDERED_SUGGESTED_ITEM: "rendered_suggested_item",
        CLICK_ADD_TO_STARRED: "click_add_to_starred",
        CLICK_DISMISS_SUGGESTED_ITEM: "click_dismiss_suggested_item",
        CANCEL_DISMISS_SUGGESTED_ITEM: "cancel_dismiss_suggested_item",
        DISMISS_SUGGESTED_ITEM: "dismiss_suggested_item",
        LIKE_SUGGESTED_ITEM: "like_suggested_item",
        SUGGESTED_SECTION_SHOWN: "suggested_section_shown",
        THUMBNAIL_LOADED: "thumbnail_loaded",
        THUMBNAIL_ERROR: "thumbnail_error",
        HIDE_SECTION: "hide_section",
        UNHIDE_SECTION: "unhide_section",
        CLICK_INFO_ICON: "click_info_icon"
    }, t.DismissReasonToText = {
        old: o._("I don’t need this file right now."),
        privacy: o._("It’s inappropriate."),
        nonsense: o._("This suggestion doesn’t make sense."),
        disliked: o._("I don’t like suggestions."),
        other: o._("Other"),
        no_selection: o._("Please select a reason.")
    }, t.DismissReasonList = ["old", "privacy", "nonsense", "disliked", "other"], t.DisplayTypeToFileType = {
        DOC: n.FileTypes.FILE,
        MSDOC: n.FileTypes.FILE,
        PDF: n.FileTypes.FILE,
        SPREADSHEET: n.FileTypes.FILE,
        FILE: n.FileTypes.FILE,
        FOLDER: n.FileTypes.FOLDER,
        SHARED_FOLDER: n.FileTypes.SHARED_FOLDER,
        TEAM_FOLDER: n.FileTypes.TEAM_SHARED_FOLDER,
        CDM_TEAM_MEMBER_FOLDER: n.FileTypes.TEAM_MEMBER_FOLDER,
        SHARED_FOLDER_READ_ONLY: n.FileTypes.SHARED_FOLDER,
        TEAM_READ_ONLY: n.FileTypes.TEAM_SHARED_FOLDER,
        RESTRICTED_FOLDER: n.FileTypes.FOLDER,
        CAMERA_UPLOADS: n.FileTypes.FOLDER
    }
}), define("modules/clean/react/home/content_suggestions/dismiss_suggest_modal", ["require", "exports", "tslib", "react", "modules/core/notify", "modules/core/i18n", "spectrum/modal", "modules/clean/react/home/store", "spectrum/radio_button", "modules/clean/react/home/content_suggestions/constants", "modules/clean/react/home/content_suggestions/util/logging/home_suggest_logger"], function(e, t, o, n, r, i, s, a, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var d = (function(e) {
        function t(t) {
            var o = e.call(this, t) || this;
            return o.confirmDismiss = function() {
                "no_selection" === o.state.dismissReason ? r.Notify.error(i._("Please select a reason.")) : (o.closeModal(), u.homeSuggestLogger.logDismissSuggestedItem(o.props.itemToDismiss, o.props.homeSection, o.props.clickOrigin, o.props.position, o.state.dismissReason), o.props.onConfirmDismiss(), r.Notify.success(i._("This item is successfully removed from Suggested. Thanks for your feedback!")))
            }, o.closeModal = function() {
                o.setState({
                    isOpen: !1
                }), u.homeSuggestLogger.logCancelDismissSuggestedItem(o.props.itemToDismiss, o.props.homeSection, o.props.clickOrigin, o.props.position)
            }, o.renderItems = function(e) {
                for (var t = [], r = 0, i = e; r < i.length; r++) {
                    var s = i[r],
                        a = l.DismissReasonList[s];
                    t.push(n.default.createElement("div", {
                        className: "dismiss-reason__radio-button-item"
                    }, n.default.createElement(c.RadioButton, {
                        name: "dismiss-reason-item",
                        "aria-label": l.DismissReasonToText[a],
                        value: a,
                        "aria-checked": o.state.dismissReason === a,
                        checked: o.state.dismissReason === a,
                        onChange: o.handleChange
                    }, l.DismissReasonToText[a])))
                }
                return t
            }, o.generatePermutations = function(e) {
                for (var t = [
                        []
                    ], o = 0, n = e; o < n.length; o++) {
                    for (var r = n[o], i = [], s = 0, a = t; s < a.length; s++)
                        for (var c = a[s], l = 0; l <= c.length; l++) {
                            var u = c.slice();
                            u.splice(l, 0, r), i.push(u)
                        }
                    t = i
                }
                return t
            }, o.handleChange = function(e) {
                o.setState({
                    dismissReason: e.currentTarget.value
                })
            }, o.state = {
                isOpen: !0,
                dismissReason: "no_selection"
            }, o
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = a.getHomeStore().getUser(),
                t = this.generatePermutations([0, 1, 2, 3]),
                o = t[e.id % t.length];
            o.push(4);
            var r = i._("What’s wrong with this suggestion?");
            return n.default.createElement(s.UtilityModal, {
                className: "dismiss-reason",
                ariaLabel: "Select Dismiss Reason",
                open: this.state.isOpen,
                primaryAction: i._("Remove"),
                onPrimaryAction: this.confirmDismiss,
                secondaryAction: i._("Cancel"),
                onSecondaryAction: this.closeModal,
                title: r
            }, n.default.createElement("div", {
                className: "dismiss-reason__radio-button-container"
            }, this.renderItems(o)))
        }, t
    })(n.default.PureComponent);
    t.DismissSuggestModal = d
}), define("modules/clean/react/home/content_suggestions/home_suggest", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/home/constants", "modules/clean/js_client_stopwatch", "modules/clean/react/home/constants", "modules/clean/react/home/content_suggestions/suggested_resource_store", "modules/clean/react/home/store", "modules/clean/react/home/content_suggestions/util/logging/home_suggest_logger", "modules/clean/react/home/content_suggestions/suggested_file_card", "modules/clean/photos/thumb_loading/buffered_thumb_store", "modules/clean/react/home/actions_post_tti", "modules/clean/react/home/store", "modules/clean/react/home/content_suggestions/home_suggest_empty_state", "modules/clean/react/home/content_suggestions/loading", "modules/clean/react/home/content_suggestions/home_suggest_frame", "modules/clean/react/home/content_suggestions/home_suggest_frame", "modules/clean/react/home/content_suggestions/grid_layout", "modules/clean/react/home/content_suggestions/actions_post_tti", "modules/core/i18n"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p, g, h, f, E, S, y, v) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r), t.initPrefetch = function() {};
    var T = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.numItemsLastLogged = 0, n.onStoreUpdate = function() {
                return n.setState(n.getStateFromStore())
            }, n.onChangeSuggestVisibility = function() {
                var e = !n.props.isHiddenByUser;
                _.setSectionVisibilityPostTTI(p.getUserId(), {
                    ".tag": "suggest"
                }, !e), u.homeSuggestLogger.logShowHideSection(a.HomeSections.SUGGEST, e)
            }, n.removeSuggestionFromUi = function(e) {
                return function() {
                    e.isDismissed && n.setState({
                        dismissedSuggestionKeys: n.state.dismissedSuggestionKeys.concat([e.key])
                    })
                }
            }, n.store = c.getSuggestedResourceStore(t.homeAvailabilityLogger), n.featureVariant = n.store.getFeatureVariant(), n.removeStoreListener = n.store.addListener(n.onStoreUpdate), n.thumbStore = new m.BufferedThumbStore, n.state = o.__assign({}, n.getStateFromStore(), {
                dismissedSuggestionKeys: []
            }), n.loggedItems = {}, s.JSStopwatch.create_stopwatch_if_not_exist("infinite_tile_grid_logging"), n
        }
        return o.__extends(t, e), t.prototype.getStateFromStore = function() {
            var e = this.store.getItems();
            return {
                loadingState: this.store.getLoadingState(),
                suggested: e
            }
        }, t.prototype.componentWillMount = function() {
            var e = l.getHomeStore().getUser();
            this.store.getLoadingState() === i.LoadingStates.FAILURE && y.loadItems(e, this.featureVariant, 10)
        }, t.prototype.componentWillUnmount = function() {
            this.removeStoreListener && this.removeStoreListener()
        }, t.prototype.renderSuggestContainer = function(e, t, s, a) {
            var c = this;
            if (e) return null;
            var l = this.state.suggested.filter(function(e) {
                    return !c.state.dismissedSuggestionKeys.includes(e.key)
                }).slice(0, t),
                d = l.filter(function(e) {
                    return !e.isDismissed
                }).length;
            if (this.state.loadingState !== i.LoadingStates.SUCCESS && 0 === d) return r.default.createElement(h.SuggestedLoadingInner, o.__assign({}, this.props));
            if (0 === t || 0 === d) return r.default.createElement(g.SuggestEmptyState, null);
            var m = {
                "home-access-section__content": !0,
                "home__suggest-items": !0,
                "home__suggest-demoted": s
            };
            if (this.numItemsLastLogged !== t) {
                var _ = [];
                l.forEach(function(e) {
                    c.loggedItems[e.resourceId] || (_.push(e), c.loggedItems[e.resourceId] = !0)
                }), u.homeSuggestLogger.logRenderedSuggestedItems(_), u.homeSuggestLogger.logSuggestedShown(l.length, this.featureVariant, t), this.numItemsLastLogged = t
            }
            var p = s ? r.default.createElement("div", {
                className: "home__suggest-demoted-header"
            }, v._("Suggested for you"), r.default.createElement(f.SuggestInfoIcon, {
                isSectionDemoted: !0
            })) : null;
            return r.default.createElement("div", {
                className: n.default(m)
            }, p, r.default.createElement("div", {
                className: "home__suggest-items-items"
            }, this.renderSuggestedItems(l, a)))
        }, t.prototype.renderSuggestedItems = function(e, t) {
            var o = this,
                s = l.getHomeStore().getPreTTIProps().showDismissSuggestModal,
                c = this.props.isSectionDemoted;
            return e.map(function(e, l) {
                return e.type === i.SuggestItemTypes.FILE ? r.default.createElement("div", {
                    className: n.default({
                        "home__suggest-items-hidden": e.isDismissed
                    }),
                    onAnimationEnd: o.removeSuggestionFromUi(e)
                }, r.default.createElement(d.SuggestedFileCard, {
                    suggested: e,
                    feature: a.SUGGEST_GRID_FEATURE,
                    position: l,
                    key: e.key,
                    isSectionDemoted: c,
                    showDismissSuggestModal: s,
                    tileWidth: t,
                    thumbStore: o.thumbStore
                })) : null
            })
        }, t.prototype.render = function() {
            if (!this.props.canRenderItems) return null;
            var e = this.props,
                t = e.containerWidth,
                o = e.isHiddenByUser,
                n = e.isSectionDemoted,
                i = S.getLayout(t),
                s = i.itemsToShow,
                a = i.tileWidth;
            return r.default.createElement(E.SuggestFrame, {
                isHiddenByUser: o
            }, n ? null : r.default.createElement(E.SuggestHeader, {
                isHiddenByUser: o,
                buttonAction: this.onChangeSuggestVisibility
            }), this.renderSuggestContainer(o, s, n, a))
        }, t.displayName = "HomeSuggest", t
    })(r.default.PureComponent);
    t.HomeSuggest = T, t.RootComponent = function(e) {
        return r.default.createElement(T, o.__assign({}, e))
    }
}), define("modules/clean/react/home/content_suggestions/home_suggest_empty_state", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/react/home/content_suggestions/home_suggest_frame"], function(e, t, o, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.SuggestEmptyState = function() {
        return n.default.createElement("div", {
            className: "home-access__empty-text suggested--empty"
        }, r._("As you use Dropbox, suggested items will automatically show up here.") + " ", n.default.createElement("a", {
            href: "/help/desktop-web/homepage#suggest",
            target: "_blank",
            rel: "noopener noreferrer"
        }, r._("Learn more")))
    }, t.SuggestEmptyStateWithHeader = function(e) {
        var o = e.isHiddenByUser,
            r = o ? null : n.default.createElement(t.SuggestEmptyState, null);
        return n.default.createElement(i.SuggestFrame, {
            isHiddenByUser: o
        }, n.default.createElement(i.SuggestHeader, {
            isHiddenByUser: o
        }), r)
    }
}), define("modules/clean/react/home/content_suggestions/logger_api", ["require", "exports", "tslib", "external/lodash", "modules/core/exception", "modules/clean/web_timing_logger", "modules/clean/react/home/api"], function(e, t, o, n, r, i, s) {
    "use strict";
    var a = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), s = o.__importStar(s);
    var c = {},
        l = {},
        u = function(e, t, o) {
            s.makeRequest({
                url: o,
                type: "POST",
                data: {
                    role: t,
                    activities_json: JSON.stringify(n.map(e, "json")),
                    send_ts: Date.now(),
                    page_start_ts: window.performance && window.performance.timing ? window.performance.timing.navigationStart || window.performance.timing.fetchStart : void 0
                }
            }, {
                isBackground: !0,
                delayRequest: !0
            }).then(function() {
                return e.forEach(function(e) {
                    return e.resolve()
                })
            }, function() {
                return e.forEach(function(e) {
                    return e.reject()
                })
            })
        },
        d = n.throttle(function() {
            n.size(c) > 1 && r.reportStack("Multiple role activities", {
                severity: r.SEVERITY.NONCRITICAL,
                exc_extra: c
            }), Object.keys(c).forEach(function(e) {
                u(c[e], e, "/home_feed/log_activities")
            }), c = {}, Object.keys(l).forEach(function(e) {
                u(l[e], e, "/home_feed/log_suggested_activities")
            }), l = {}
        }, 1e3, {
            leading: !0,
            trailing: !0
        });
    t.logHomeActivity = function(e) {
        var t = e.role,
            s = e.eventName,
            u = e.extra,
            m = e.suggestId,
            _ = e.table;
        return new Promise(function(e, p) {
            return o.__awaiter(a, void 0, void 0, function() {
                var a, g, h, f;
                return o.__generator(this, function(E) {
                    switch (E.label) {
                        case 0:
                            switch (_ || (_ = "home_activity"), a = {
                                json: {
                                    event_name: s,
                                    event_time: Date.now(),
                                    extra: n.mapValues(u || {}, function(e) {
                                        return String(e)
                                    })
                                },
                                resolve: e,
                                reject: p
                            }, _) {
                                case "home_activity":
                                    c[t] = c[t] || [], c[t].push(a);
                                    break;
                                case "home_suggest":
                                    c[t] = c[t] || [], g = a.json, h = o.__rest(a, ["json"]), f = o.__assign({
                                        json: o.__assign({}, g)
                                    }, h), c[t].push(f), a.json.suggest_id = m, l[t] = l[t] || [], l[t].push(a);
                                    break;
                                default:
                                    return r.reportStack("Unknown logging table specified", {
                                        severity: r.SEVERITY.NONCRITICAL,
                                        exc_extra: {
                                            table: _,
                                            role: t,
                                            eventName: s,
                                            extra: u,
                                            suggestId: m
                                        }
                                    }), [2]
                            }
                            return [4, i.waitForTTI()];
                        case 1:
                            return E.sent(), d(), [2]
                    }
                })
            })
        })
    }
}), define("modules/clean/react/home/content_suggestions/models/suggested_item", ["require", "exports", "modules/clean/react/starred/constants", "modules/clean/filetypes", "modules/clean/react/home/content_suggestions/constants"], function(e, t, o, n, r) {
    "use strict";

    function i(e) {
        return null === e.encodedFileObjId || void 0 === e.encodedFileObjId ? {
            id: e.fqPath,
            type: o.IdTypes.FQ_PATH
        } : {
            id: e.encodedFileObjId,
            type: o.IdTypes.ENCODED_FILE_OBJ_ID
        }
    }

    function s(e) {
        return {
            idTypePair: i(e),
            starred: e.isStarred
        }
    }

    function a(e) {
        return r.DisplayTypeToFileType[e] || n.FileTypes.FILE
    }

    function c(e) {
        return {
            type: a(e.displayType),
            icon: "",
            fq_path: e.fqPath,
            thumbnail_url_tmpl: e.thumbnailUrl,
            isDeleted: !1
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.suggestedItemToIdTypePair = i, t.suggestedItemToStarredStatus = s, t.suggestedItemToFileIconFields = c
}), define("modules/clean/react/home/content_suggestions/suggested_file_card", ["require", "exports", "tslib", "react", "modules/clean/em_string", "modules/clean/react/title_bubble", "modules/clean/react/home/util/navigation", "modules/clean/react/icon/folder_icon", "modules/clean/react/home/util/logging/availability_logger_common", "modules/clean/react/home/constants", "modules/clean/react/home/constants", "modules/clean/react/home/content_suggestions/util/logging/home_suggest_logger", "modules/clean/react/home/content_suggestions/models/suggested_item", "modules/clean/react/maestro/tile_element", "modules/clean/react/home/store", "modules/clean/viewer", "modules/clean/browse_uri_interface", "modules/clean/react/home/util/feedback_button", "modules/clean/react/home/resource/actions_post_tti", "modules/core/exception"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p, g, h, f, E, S) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var y = (function(e) {
        function t(t) {
            var o = e.call(this, t) || this;
            return o.renderFilename = function() {
                var e = r.Emstring.em_snippet(o.props.suggested.filename, 14, .5),
                    t = n.default.createElement("div", {
                        className: "tile-label__text"
                    }, e);
                return o.props.suggested.filename !== e && (t = n.default.createElement(i.TitleBubble, {
                    content: o.props.suggested.filename,
                    position: i.TitleBubble.POSITIONS.TOP,
                    className: "tile-label__title-bubble",
                    key: "tooltip"
                }, t)), t
            }, o.renderSubheader = function() {
                var e = p.getUser(),
                    t = o.props,
                    u = t.suggested,
                    m = t.position,
                    _ = u.breadcrumb.length ? u.breadcrumb[0] : null,
                    f = _ ? _.name : g.Viewer.get_root_name(e),
                    E = _ ? _.url : h.browse_uri_for_fq_path(e, "").toString(),
                    S = function(e) {
                        e.stopPropagation(), e.preventDefault();
                        var t = function() {
                            return d.homeSuggestLogger.logOpenParentFolder(u, c.withHomePrefix(l.HomeSections.SUGGEST), "parent-folder", m)
                        };
                        E && s.logAndNavigate(E, t)
                    },
                    y = u.fqPath.split("/");
                y.pop();
                var v = r.Emstring.em_snippet(f, 10, .5),
                    T = n.default.createElement("a", {
                        className: "tile-label__parent-folder",
                        href: E,
                        onClick: S
                    }, v);
                return (y.length > 2 || f !== v) && (T = n.default.createElement(i.TitleBubble, {
                    content: y.join("/"),
                    position: i.TitleBubble.POSITIONS.BOTTOM,
                    className: "tile-label__parent-folder",
                    key: "tooltip"
                }, T)), n.default.createElement("div", {
                    className: "tile-label__detail-subheader"
                }, n.default.createElement(a.SimpleFolderIcon, null), T)
            }, o.onTileAction = function(e) {
                e.preventDefault(), e.stopPropagation();
                var t, n = e.target;
                "svg" === n.tagName ? t = "icon" : n.classList.contains("tile-label__text") && (t = "title");
                var r = function() {
                    return d.homeSuggestLogger.logOpenSuggestedItem(o.props.suggested, c.withHomePrefix(l.HomeSections.SUGGEST), t, o.props.position)
                };
                if (s.isMetaKeyPressed(e) || !l.PreviewableDisplayTypes.includes(o.props.suggested.displayType)) {
                    var i = o.props.suggested.displayType === l.EXTERNAL_RESOURCE_TYPE ? s.NavigationMethod.UNSAFE_NEW_TAB : s.NavigationMethod.NEW_TAB;
                    s.logAndNavigate(o.props.suggested.url, r, i)
                } else E.openInFileViewer("ENCODED_FILE_OBJ_ID:" + o.props.suggested.encodedFileObjId, r)
            }, o.onThumbnailLoad = o.onThumbnailLoad.bind(o), o.onThumbnailError = o.onThumbnailError.bind(o), o
        }
        return o.__extends(t, e), t.prototype.onThumbnailLoad = function(e, t, o) {
            d.homeSuggestLogger.logThumbnailStatus(this.props.suggested, c.withHomePrefix(l.HomeSections.SUGGEST), e, !1, {
                has_thumbnail: t,
                thumbnail_loaded: o
            })
        }, t.prototype.onThumbnailError = function(e) {
            d.homeSuggestLogger.logThumbnailStatus(this.props.suggested, c.withHomePrefix(l.HomeSections.SUGGEST), e, !0)
        }, t.prototype.render = function() {
            if (this.props.suggested.type !== l.SuggestItemTypes.FILE) return S.reportStack("Unknown suggested item type", {
                severity: S.SEVERITY.NONCRITICAL,
                exc_extra: {
                    resourceId: this.props.suggested.resourceId,
                    type: this.props.suggested.type
                }
            }), null;
            var e = this.props.suggested,
                t = m.suggestedItemToFileIconFields(e),
                o = n.default.createElement(f.FeedbackButton, {
                    suggested: this.props.suggested,
                    feature: this.props.feature,
                    position: this.props.position,
                    showDismissSuggestModal: this.props.showDismissSuggestModal
                }),
                r = n.default.createElement("span", {
                    className: "tile-label__container"
                }, this.renderFilename(), this.renderSubheader());
            return n.default.createElement("div", {
                className: "home-tile__container"
            }, n.default.createElement(_.TileElement, {
                file: t,
                key: e.key,
                onClick: this.onTileAction,
                width: this.props.tileWidth,
                leftOffset: 0,
                tileIndex: this.props.position,
                labelHeight: u.SUGGEST_GRID_LABEL_HEIGHT,
                actionNode: o,
                thumbnailUrl: e.thumbnailUrl,
                labelNode: r,
                altText: e.filename,
                isDraggable: !1,
                isSelectable: !1,
                isViewOnly: !1,
                thumbStore: this.props.thumbStore,
                href: e.url,
                onThumbnailError: this.onThumbnailError,
                onThumbnailLoad: this.onThumbnailLoad,
                height: 100
            }))
        }, t.displayName = "SuggestedFileCard", t
    })(n.default.PureComponent);
    t.SuggestedFileCard = y
}), define("modules/clean/react/home/content_suggestions/suggested_resource_store", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/constants", "modules/clean/flux/flux_store", "modules/clean/react/starred/constants", "modules/clean/react/home/content_suggestions/constants", "modules/clean/react/home/content_suggestions/actions", "modules/clean/react/home/content_suggestions/api", "modules/clean/react/home/content_suggestions/actions_post_tti", "modules/clean/react/home/store"], function(e, t, o, n, r, i, s, a, c, l, u, d) {
    "use strict";

    function m(e) {
        return null === p && (p = new _(e)), p
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var _ = (function(e) {
        function t(t) {
            var o = e.call(this, n.Dispatcher) || this;
            o.items = [], o.loadingState = r.LoadingStates.LOADING;
            var i = !1;
            return t.handlePrefetch(r.HomePrefetchTypes.GET_SUGGESTED, function(e) {
                var t = l.handlePayload(e, o.getFeatureVariant()),
                    r = t.items;
                o.usedVariant = t.variant, r ? i ? c.SuggestedActions.dispatchLoaded(r) : o.onItemsLoadSuccess(r) : i ? n.Dispatcher.dispatch({
                    type: a.SuggestedResourceActionTypes.LOAD_FAILURE
                }) : o.onItemsLoadFailure()
            }), i = !0, o
        }
        return o.__extends(t, e), t.prototype.getItems = function() {
            return this.items
        }, t.prototype.getLoadingState = function() {
            return this.loadingState
        }, t.prototype.getFeatureVariant = function() {
            if (!this.featureVariant) {
                var e = d.getHomeStore().getActiveVariant(r.SUGGEST_GRID_FEATURE).toLowerCase();
                this.featureVariant = r.SUGGEST_GRID_FEATURE + ":" + e
            }
            return this.featureVariant
        }, t.prototype.getUsedVariant = function() {
            return this.usedVariant
        }, t.prototype.onItemsLoadSuccess = function(e) {
            this.items = e, this.loadingState = r.LoadingStates.SUCCESS, e && u.fetchSuggestedFileMetadata(e)
        }, t.prototype.onItemsLoadFailure = function() {
            this.loadingState = r.LoadingStates.FAILURE
        }, t.prototype.onDismissItemSuccess = function(e) {
            this.loadingState = r.LoadingStates.LOADING, this.items = this.items.map(function(t) {
                return "ENCODED_FILE_OBJ_ID" === e.type && t.encodedFileObjId === e.id || "FQ_PATH" === e.type && t.fqPath === e.id ? o.__assign({}, t, {
                    isDismissed: !0
                }) : t
            }), this.loadingState = r.LoadingStates.SUCCESS
        }, t.prototype.onDismissItemFailure = function(e) {
            this.loadingState = r.LoadingStates.LOADING, this.items = this.items.map(function(t) {
                return "ENCODED_FILE_OBJ_ID" === e.type && t.encodedFileObjId === e.id || "FQ_PATH" === e.type && t.fqPath === e.id ? o.__assign({}, t, {
                    isDismissed: !1
                }) : t
            }), this.loadingState = r.LoadingStates.SUCCESS
        }, t.prototype.onStarredStatusChange = function(e) {
            var t = this,
                n = this.loadingState;
            this.loadingState = r.LoadingStates.LOADING;
            var i = e,
                s = !1;
            i.forEach(function(e) {
                var n = e.idTypePair,
                    r = e.starred;
                t.items = t.items.map(function(e) {
                    return "ENCODED_FILE_OBJ_ID" === n.type && e.encodedFileObjId === n.id || "FQ_PATH" === n.type && e.fqPath === n.id ? (s = !0, o.__assign({}, e, {
                        isStarred: r
                    })) : e
                })
            }), this.loadingState = n, s && this.__emitChange()
        }, t.prototype.__onDispatch = function(e) {
            var t = e.action;
            switch (t.type) {
                case a.SuggestedResourceActionTypes.LOAD_SUCCESS:
                    this.onItemsLoadSuccess(t.items), this.__emitChange();
                    break;
                case a.SuggestedResourceActionTypes.LOAD_FAILURE:
                    this.onItemsLoadFailure(), this.__emitChange();
                    break;
                case s.StarredActionTypes.SET_STATUS:
                    this.onStarredStatusChange(t.starredStatuses), this.__emitChange();
                    break;
                case a.SuggestedResourceActionTypes.DISMISS_ITEM_SUCCESS:
                    this.onDismissItemSuccess(t.dismissed), this.__emitChange();
                    break;
                case a.SuggestedResourceActionTypes.DISMISS_ITEM_FAILURE:
                    this.onDismissItemFailure(t.dismissed), this.__emitChange()
            }
        }, t
    })(i.FluxStore);
    t.PrivateSuggestedResourceStoreClass = _;
    var p = null;
    t.getSuggestedResourceStore = m
}), define("modules/clean/react/home/content_suggestions/util/logging/home_suggest_logger", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/content_suggestions/logger_api", "modules/clean/react/home/store", "modules/clean/react/home/content_suggestions/constants"], function(e, t, o, n, r, i, s) {
    "use strict";

    function a(e) {
        return "home_" + e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n);
    var c = (function() {
        function e() {}
        return e.prototype.logOpenSuggestedItem = function(e, t, o, n) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.OPEN_SUGGESTED_ITEM,
                    role: i.getHomeStore().getRole(),
                    suggestId: e.suggestId,
                    table: "home_suggest",
                    extra: {
                        position: n,
                        clickOrigin: o,
                        source: t,
                        isDir: e.isDir
                    }
                })
            }, e.prototype.logOpenParentFolder = function(e, t, o, n) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.OPEN_PARENT_FOLDER,
                    role: i.getHomeStore().getRole(),
                    suggestId: e.suggestId,
                    table: "home_suggest",
                    extra: {
                        position: n,
                        clickOrigin: o,
                        source: t,
                        isDir: e.isDir
                    }
                })
            }, e.prototype.logClickAddToStarred = function(e, t, o, n) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.CLICK_ADD_TO_STARRED,
                    role: i.getHomeStore().getRole(),
                    suggestId: e.suggestId,
                    table: "home_suggest",
                    extra: {
                        position: n,
                        clickOrigin: o,
                        source: t,
                        isDir: e.isDir
                    }
                })
            }, e.prototype.logClickDismissSuggestedItem = function(e, t, o, n) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.CLICK_DISMISS_SUGGESTED_ITEM,
                    role: i.getHomeStore().getRole(),
                    suggestId: e.suggestId,
                    table: "home_suggest",
                    extra: {
                        position: n,
                        clickOrigin: o,
                        source: t,
                        isDir: e.isDir
                    }
                })
            }, e.prototype.logCancelDismissSuggestedItem = function(e, t, o, n) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.CANCEL_DISMISS_SUGGESTED_ITEM,
                    role: i.getHomeStore().getRole(),
                    suggestId: e.suggestId,
                    table: "home_suggest",
                    extra: {
                        position: n,
                        clickOrigin: o,
                        source: t,
                        isDir: e.isDir
                    }
                })
            }, e.prototype.logDismissSuggestedItem = function(e, t, o, n, a) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.DISMISS_SUGGESTED_ITEM,
                    role: i.getHomeStore().getRole(),
                    suggestId: e.suggestId,
                    table: "home_suggest",
                    extra: {
                        position: n,
                        clickOrigin: o,
                        source: t,
                        reason: a,
                        isDir: e.isDir
                    }
                })
            }, e.prototype.logLikeSuggestedItem = function(e, t, o, n) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.LIKE_SUGGESTED_ITEM,
                    role: i.getHomeStore().getRole(),
                    suggestId: e.suggestId,
                    table: "home_suggest",
                    extra: {
                        position: n,
                        clickOrigin: o,
                        source: t,
                        isDir: e.isDir
                    }
                })
            }, e.prototype.logSuggestedShown = function(e, t, o) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.SUGGESTED_SECTION_SHOWN,
                    role: i.getHomeStore().getRole(),
                    table: "home_suggest",
                    extra: {
                        num_items: e,
                        variant: t,
                        items_shown: o
                    }
                })
            }, e.prototype.logShowHideSection = function(e, t) {
                return r.logHomeActivity({
                    eventName: t ? s.LoggingTypes.HIDE_SECTION : s.LoggingTypes.UNHIDE_SECTION,
                    role: i.getHomeStore().getRole(),
                    table: "home_suggest",
                    extra: {
                        section_name: e
                    }
                })
            }, e.prototype.logClickInfoIcon = function(e) {
                return r.logHomeActivity({
                    eventName: s.LoggingTypes.CLICK_INFO_ICON,
                    role: i.getHomeStore().getRole(),
                    table: "home_suggest",
                    extra: {
                        section_name: e
                    }
                })
            },
            e.prototype.logRenderedSuggestedItems = function(e) {
                var t, o = i.getHomeStore().getRole();
                return t = n.map(e, function(e, t) {
                    return r.logHomeActivity({
                        eventName: s.LoggingTypes.RENDERED_SUGGESTED_ITEM,
                        role: o,
                        suggestId: e.suggestId,
                        table: "home_suggest",
                        extra: {
                            index: t,
                            isDir: e.isDir
                        }
                    })
                }), Promise.all(t)
            }, e.prototype.logThumbnailStatus = function(e, t, n, a, c) {
                var l = a ? s.LoggingTypes.THUMBNAIL_ERROR : s.LoggingTypes.THUMBNAIL_LOADED;
                return r.logHomeActivity({
                    eventName: l,
                    role: i.getHomeStore().getRole(),
                    suggestId: e.suggestId,
                    table: "home_suggest",
                    extra: o.__assign({
                        index: n
                    }, c)
                })
            }, e
    })();
    t.HomeSuggestLogger = c, t.withHomePrefix = a, t.homeSuggestLogger = new c
}), define("modules/clean/react/home/experiments/calendar/default_props", ["require", "exports", "modules/clean/react/home/store"], function(e, t, o) {
    "use strict";

    function n() {
        return {
            userRole: o.getRole(),
            shouldShow: !1,
            isAuthed: !1,
            onboardingProps: {
                showJewelOnboarding: !1,
                showAttachDialog: !1,
                showSectionOnboarding: !1,
                attachmentOnboardingVariant: null,
                showDragOnboarding: !1,
                showHomeSurvey: !1
            },
            outlookEnabled: !1,
            suggestionsEnabled: !1,
            devFeaturesEnabled: !1
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getDefaultCalendarProtoData = n
}), define("modules/clean/react/home/home_access/growth/default_props", ["require", "exports"], function(e, t) {
    "use strict";

    function o() {
        return {
            expSubgrowthBizTeamsRecMembersHome: "OFF",
            expSubgrowthBizTeamsSuggestionsOnHome: "OFF",
            expGrowthTcBizChecklistUiRevampEnabled: !1,
            numRemainingLicenses: 0,
            recommendedMembers: [],
            phoneInputData: null
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getHomeGrowthExperiments = o
}), define("modules/clean/react/home/onboarding/actions_post_tti", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/onboarding/api_post_tti", "modules/clean/react/home/onboarding/constants_post_tti", "modules/clean/react/home/onboarding/store_post_tti", "modules/clean/react/home/onboarding/tooltips_post_tti", "modules/clean/user_education/user_education_interface", "modules/clean/react/home/util/constants_post_tti"], function(e, t, o, n, r, i, s, a, c, l) {
    "use strict";

    function u() {
        n.Dispatcher.dispatch({
            type: i.HomeOnboardingActionTypes.SET_ONBOARDING_COMPLETE
        })
    }

    function d() {
        s.getHomeOnboardingStore().shouldShowUnreadOnboarding() && a.showUnreadTooltipIfRendered() && (r.hideUnreadOnboarding(), m(!1))
    }

    function m(e) {
        n.Dispatcher.dispatch({
            type: i.HomeOnboardingActionTypes.UPDATE_SHOW_UNREAD_ONBOARDING,
            showUnreadOnboarding: e
        })
    }

    function _(e) {
        var t = function(e) {
            var t = window;
            "scrollBehavior" in document.documentElement.style ? t.scroll({
                top: e,
                left: 0,
                behavior: "smooth"
            }) : t.scroll(0, e)
        };
        if (e.state === c.UEStateType.ShowStep) {
            var o = e.step;
            if (o)
                if (o.name === l.HOME_V1_USER_EDUCATION_STEP_NAMES.RECENTLY_VIEWED) {
                    var n = document.querySelector(".maestro-header"),
                        r = document.querySelector(".home-recents-section"),
                        i = void 0,
                        s = void 0,
                        a = void 0;
                    n && r && (i = n.getBoundingClientRect(), s = r.getBoundingClientRect(), a = s.top - (i.height + i.top), t(a))
                } else o.name === l.HOME_V1_USER_EDUCATION_STEP_NAMES.FILES && t(0)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importStar(r), t.markHomeOnboardingComplete = u, t.showUnreadOnboardingTooltipIfNecessary = d, t.updateShowUnreadOnboarding = m, t.handleHomeUserEducationStateSteps = _
}), define("modules/clean/react/home/onboarding/api_post_tti", ["require", "exports", "modules/clean/react/home/store", "modules/clean/react/home/api"], function(e, t, o, n) {
    "use strict";

    function r() {
        return n.makeRequest({
            url: "/home_feed/hide_unread_onboarding",
            type: "POST",
            data: {
                role: o.getHomeStore().getRole()
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hideUnreadOnboarding = r
}), define("modules/clean/react/home/onboarding/constants_post_tti", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HomeOnboardingActionTypes = {
        SET_ONBOARDING_COMPLETE: "HOME_ONBOARDING_SET_ONBOARDING_COMPLETE",
        UPDATE_SHOW_UNREAD_ONBOARDING: "HOME_ONBOARDING_UPDATE_SHOW_UNREAD_ONBOARDING",
        PROMPT_MODAL_SHOWN: "HOME_ONBOARDING_PROMPT_MODAL_SHOWN"
    }
}), define("modules/clean/react/home/onboarding/store_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/flux/dispatcher", "modules/clean/react/home/onboarding/constants_post_tti", "modules/clean/flux/flux_store", "modules/clean/upsell/prompt_event_emitter"], function(e, t, o, n, r, i, s, a) {
    "use strict";

    function c(e) {
        var t = e;
        return n.isFunction(t.didHomeModalLoad) && t.didHomeModalLoad()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = (function(e) {
        function t() {
            var t = e.call(this, r.Dispatcher) || this;
            return t.isOnboardingComplete = !1, t.showUnreadOnboarding = !1, t.didPromptModalShow = !1, a.promptBufferedEventEmitter.on(a.Events.ON_PROMPT_INITIALIZED, function(e) {
                c(e) && r.Dispatcher.dispatch({
                    type: i.HomeOnboardingActionTypes.PROMPT_MODAL_SHOWN
                })
            }), t
        }
        return o.__extends(t, e), t.prototype.getIsOnboardingComplete = function() {
            return this.isOnboardingComplete
        }, t.prototype.shouldShowUnreadOnboarding = function() {
            return !this.didPromptModalShow && this.showUnreadOnboarding && this.getIsOnboardingComplete()
        }, t.prototype.shouldDismissUnreadOnboardingModal = function() {
            return this.didPromptModalShow
        }, t.prototype.onUpdateShowUnreadOnboarding = function(e) {
            this.showUnreadOnboarding = e
        }, t.prototype.onPromptModalShown = function() {
            this.didPromptModalShow = !0
        }, t.prototype.__onDispatch = function(e) {
            var t = e.action;
            switch (t.type) {
                case i.HomeOnboardingActionTypes.PROMPT_MODAL_SHOWN:
                    this.onPromptModalShown();
                    break;
                case i.HomeOnboardingActionTypes.SET_ONBOARDING_COMPLETE:
                    this.isOnboardingComplete = !0, this.__emitChange();
                    break;
                case i.HomeOnboardingActionTypes.UPDATE_SHOW_UNREAD_ONBOARDING:
                    this.onUpdateShowUnreadOnboarding(t.showUnreadOnboarding), this.__emitChange();
                    break;
                default:
                    return
            }
        }, t
    })(s.FluxStore);
    t.HomeOnboardingStoreClass = l, t.getHomeOnboardingStore = n.once(function() {
        return new l
    })
}), define("modules/clean/react/home/onboarding/tooltips_post_tti", ["require", "exports", "modules/core/i18n", "modules/clean/react/home/util/static_tooltip_post_tti", "modules/clean/react/home/onboarding/store_post_tti"], function(e, t, o, n, r) {
    "use strict";

    function i(e, t, o, i, s) {
        var c = document.querySelector(e),
            l = r.getHomeOnboardingStore();
        if (c && !l.shouldDismissUnreadOnboardingModal()) {
            var u = new n.StaticTooltip,
                d = l.addListener(function() {
                    l.shouldDismissUnreadOnboardingModal() && (u.hide(), d())
                });
            return u.show(t, o, c, i, a, d, s), !0
        }
        return !1
    }

    function s() {
        return i(".home__unread-row--first .unread-item__title-group", o._("Tip"), o._("New shared files and comments show up here."), n.StaticTooltip.POSITIONS.RIGHT, "home-tooltip__unread-onboarding--list")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        return null
    };
    t.showUnreadTooltipIfRendered = s
}), define("modules/clean/react/home/post_tti/interface", ["require", "exports", "modules/clean/react/home/resource/actions_post_tti", "modules/clean/react/home/starred/actions_post_tti", "modules/clean/react/home/util/logging/unread_logger_post_tti", "modules/clean/react/home/unread/home_access_unread_post_tti", "modules/clean/react/home/roots/home_access_web_post_tti", "modules/clean/react/home/recents/actions/recent_activity_actions_post_tti", "modules/clean/react/home/recents/actions/recent_activity_actions_utils_post_tti", "modules/clean/react/home/post_tti/unity_post_tti", "modules/clean/react/home/recents/components/recent_activity_container_post_tti", "modules/clean/react/home/recents/recent_activity_starred_post_tti", "modules/clean/react/home/recents/store_utils_post_tti", "modules/clean/react/home/unread/card_post_tti", "modules/clean/react/home/unread/store_post_tti", "modules/clean/react/home/recents/components/attachment_list_view_post_tti", "modules/clean/sharing/async_share_modal_util", "modules/clean/react/home/api_post_tti", "modules/clean/react/home/post_tti/props_post_tti", "modules/clean/react/home/util/feedback_button", "modules/clean/react/home/roots/home_access_main_post_tti", "modules/clean/react/home/onboarding/actions_post_tti", "modules/clean/react/home/util/logging/availability_logger_post_tti", "modules/clean/react/home/recents/recent_activity_client_post_tti", "modules/clean/react/home/recents/recent_activity_logger_utils_post_tti", "modules/clean/react/home/starred/actions_post_tti", "modules/clean/react/home/recents/components/recent_filters_menu_post_tti", "modules/clean/react/home/recents/recent_activity_filter_actions_post_tti", "modules/clean/cloud_docs/home_create_file_experiments_post_tti", "modules/clean/react/extensions/client", "modules/clean/react/home/recents/recent_activity_file_action_post_tti", "modules/clean/react/home/starred/starred_item_file_action_post_tti", "modules/clean/react/home/content_suggestions/home_suggest", "modules/clean/react/retrieval_success_banner/retrieval_success_home_banner", "modules/clean/react/retrieval_success_banner/search_success_banner", "modules/clean/react/home/tasks/actions_post_tti", "modules/clean/react/home/tasks/section_post_tti"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p, g, h, f, E, S, y, v, T, I, b, D, O, A, R, P, N, w, C, L, F, M, k) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.openInFileViewer = o.openInFileViewer, t.createAutoShareLink = o.createAutoShareLink, t.getStarredStatusMetadata = n.getStarredStatusMetadata, t.logOpenUnreadNotificationItem = r.logOpenUnreadNotificationItem, t.logMarkNotificationAsRead = r.logMarkNotificationAsRead, t.logRenderedNotifications = r.logRenderedNotifications, t.triggerUnreadOnboarding = i.triggerUnreadOnboarding, t.homeAccessWebComponentDidMount = s.homeAccessWebComponentDidMount, t.openFile = a.openFile, t.downloadFiles = a.downloadFiles, t.openVersions = a.openVersions, t.shareFile = a.shareFile, t.previewFileSyncRecentItem = a.previewFileSyncRecentItem, t.deleteRecentItem = a.deleteRecentItem, t.deleteAttachments = c.deleteAttachments, t.getUnityFeatures = l.getUnityFeatures, t.recentActivityContainerComponentDidMount = u.recentActivityContainerComponentDidMount, t.setStarredStatusOfPaperRecentItems = d.setStarredStatusOfPaperRecentItems, t.fetchStarredStatus = d.fetchStarredStatus, t.ensureAttachments = m.ensureAttachments, t.loadPaperRecentItems = m.loadPaperRecentItems, t.loadRecentItems = m.loadRecentItems, t.acknowledgeNotification = _.acknowledgeNotification, t.listenToAndGetNotificationStore = p.listenToAndGetNotificationStore, t.AttachmentListView = g.AttachmentListView, t.asyncShowShareModal = h.asyncShowShareModal, t.createPaperDoc = f.createPaperDoc, t.setSectionVisibility = f.setSectionVisibility, t.getPostTTIProps = E.getPostTTIProps, t.FeedbackButton = S.FeedbackButton, t.initHomeOnboarding = y.initHomeOnboarding, t.showUnreadOnboardingTooltipIfNecessary = v.showUnreadOnboardingTooltipIfNecessary, t.logHomeAvailability = T.logHomeAvailability, t.archivePaperResources = I.archivePaperResources, t.postLogEvent = I.postLogEvent, t.logOpenPathUrl = b.logOpenPathUrl, t.openUrl = b.openUrl, t.logRequestFailed = b.logRequestFailed, t.logRecentsLoaded = b.logRecentsLoaded, t.loadAllStarredItems = D.loadAllStarredItems, t.RecentFiltersMenu = O.RecentFiltersMenu, t.getAvailableFiltersFromRecentItems = A.getAvailableFiltersFromRecentItems, t.processRecentItems = A.processRecentItems, t.getNewFileMenu = R.getNewFileMenu, t.getExtensionsClient = P.getExtensionsClient, t.RecentActivityFileActionPost = N.RecentActivityFileActionPost, t.StarredItemFileActionPost = w.StarredItemFileActionPost, t.HomeSuggest = C.HomeSuggest, t.initPrefetch = C.initPrefetch, t.RetrievalSuccessHomeBanner = L.RetrievalSuccessHomeBanner, t.SearchSuccessBanner = F.SearchSuccessBanner, t.selectTaskFilter = M.selectTaskFilter, t.HomeTasksSection = k.HomeTasksSection
}), define("modules/clean/react/home/post_tti/props_post_tti", ["require", "exports", "modules/clean/cloud_docs/home_create_file_experiments_post_tti", "modules/clean/react/home/util/prefetch_handler", "modules/clean/react/home/experiments/calendar/default_props", "modules/clean/react/home/home_access/growth/default_props", "modules/core/exception", "modules/clean/react/home/util/constants_post_tti", "modules/clean/react/home/tasks/default_props_post_tti", "modules/clean/react/teams/team_insights/default_props", "external/lodash"], function(e, t, o, n, r, i, s, a, c, l, u) {
    "use strict";

    function d() {
        return {
            calendarProtoData: r.getDefaultCalendarProtoData(),
            onboardingData: a.DEFAULT_ONBOARDING_POST_TTI_PROPS,
            renderSnapEngage: !1,
            maybeRenderTeamAdminModals: !1,
            searchBarExperiments: {},
            homeGrowthExperiments: i.getHomeGrowthExperiments(),
            uploaderPostTTIExperiments: {
                expProOQUploadModal: "OFF"
            },
            tasks: c.getTasksDefaultProps(),
            cloudDocsExperiments: o.getCloudDocsExperiments(),
            teamInsights: l.getDefaultTeamInsightsProps(),
            expEngageLicenseAcceptEligibleAdmins: null,
            expEngageClientEligibleAdminsData: null,
            montanaModalProps: null,
            preferredEditors: {},
            showLegacyCreatePaperButton: !1
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getPostTTIProps = u.once(function() {
        return new Promise(function(e) {
            var t = n.getPrefetchHandler("__REGISTER_POST_TTI_PREFETCH_HANDLER"),
                o = function() {
                    return e(d())
                };
            t ? n.handlePrefetch(t, function(t) {
                try {
                    e(JSON.parse(t))
                } catch (e) {
                    s.reportStack("Failed to parse post TTI props", {
                        severity: s.SEVERITY.CRITICAL,
                        exc_extra: {
                            error: e
                        }
                    }), o()
                }
            }, function(e) {
                s.reportStack("Post TTI prefetch failed", {
                    severity: s.SEVERITY.CRITICAL,
                    exc_extra: {
                        error: e
                    }
                }), o()
            }) : o()
        })
    })
}), define("modules/clean/react/home/post_tti/unity_post_tti", ["require", "exports", "tslib"], function(e, t, o) {
    "use strict";

    function n() {
        return o.__awaiter(this, void 0, void 0, function() {
            var t, n;
            return o.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), [4, new Promise(function(t, o) {
                            e(["modules/clean/unity/features"], t, o)
                        }).then(o.__importStar)];
                    case 1:
                        return t = r.sent().UnityFeatures, [2, t.isUnitySupported() ? t : null];
                    case 2:
                        return n = r.sent(), [2, null];
                    case 3:
                        return [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getUnityFeatures = n
}), define("modules/clean/react/home/recents/actions/recent_activity_actions_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/downloads", "modules/clean/react/home/recents/recent_activity_logger_utils_post_tti", "modules/clean/react/home/recents/store_utils_post_tti", "modules/clean/react/home/recents/actions/recent_activity_actions_utils_post_tti", "modules/clean/react/home/util/navigation", "modules/clean/react/home/store", "modules/core/exception", "modules/core/exception", "modules/core/notify", "modules/clean/fileops", "modules/clean/react/home/post_tti/unity_post_tti", "modules/clean/react/home/resource/actions_post_tti", "modules/clean/browse_uri_interface", "modules/clean/react/home/recents/models/utils", "modules/clean/sharing/async_share_modal_util", "modules/clean/sharing/constants", "modules/clean/react/modal", "modules/core/i18n", "modules/clean/react/home/recents/stores/attachment_store", "modules/clean/react/home/constants", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/cloud_docs/constants", "modules/clean/filepath", "modules/clean/cloud_docs/preferred_editor_utils"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p, g, h, f, E, S, y, v, T, I, b, D, O, A) {
    "use strict";

    function R(e, t, n) {
        return o.__awaiter(this, void 0, Promise, function() {
            var r, c, u, d, m, _, p;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return r = l.getUser(), [4, s.ensureAttachments([e], b.EnsureAttachmentsPurpose.SHARE_FILE)];
                    case 1:
                        return c = o.sent(), u = c[0], d = u.fqPath || "", m = u.previewInfo, _ = m ? m.target_ns : null, p = !1, n ? (g.createAutoShareLink(r, d), p = !0, [3, 4]) : [3, 2];
                    case 2:
                        return [4, E.asyncShowShareModal(r, {
                            fqPath: d,
                            isFolder: u.previewInfo.is_dir,
                            origin: S.SHARE_ACTION_ORIGIN_TYPE.RECENTS,
                            targetNsId: _
                        })];
                    case 3:
                        p = o.sent(), o.label = 4;
                    case 4:
                        return t && p && (i.logShareFile(r.id, d, t.totalCount, t.cellView), a.homeLogEvent(t, b.ActionType.SHARE, c, a.getFqPaths(c).indexOf(d))), [2, p]
                }
            })
        })
    }

    function P(e, t) {
        return o.__awaiter(this, void 0, void 0, function() {
            var r, c, d, _, g, h, f;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, p.getUnityFeatures()];
                    case 1:
                        return r = o.sent(), u.assert(!!r, "Unity is not supported by this browser"), [4, s.ensureAttachments([e], b.EnsureAttachmentsPurpose.OPEN_FILE)];
                    case 2:
                        return c = o.sent(), d = c[0], _ = d.nsId, g = d.nsPath, h = c[0].fqPath || "", f = l.getUserId(), r.open_file(_, g, f, n.noop, function(e) {
                            m.Notify.error("We were unable to open this file"), u.reportException({
                                err: Error(e),
                                tags: ["recents"],
                                severity: u.SEVERITY.NONCRITICAL
                            })
                        }), t && (i.logUnityOpenFile(f, h, t.totalCount, t.cellView), a.homeLogEvent(t, b.ActionType.OPEN, c)), [2]
                }
            })
        })
    }

    function N(e, t, r, i) {
        return o.__awaiter(this, void 0, void 0, function() {
            var i, s, c, l, u, m, _, p;
            return o.__generator(this, function(o) {
                return i = e.federatedRecentItem, s = e.displayType, i ? d.reportStack("Deleting is not supported for federated recent items", {
                    severity: d.SEVERITY.NONCRITICAL,
                    exc_extra: {
                        recentItem: e
                    }
                }) : (c = f.extractAttachmentIds(t), l = function() {
                    return a.deleteAttachments(c, r)
                }, u = void 0, m = void 0, 1 === c.length ? (_ = T.getAttachmentStore().getById(c[0]), _ && _.isLoaded ? (m = _.isDir ? v._("Delete folder?") : v._("Delete file?"), p = s === I.DisplayTypes.SHARED_FOLDER ? v._("Are you sure you want to remove the shared folder <b>%(file_name)s</b> from your Dropbox? This shared folder will stay shared with other members and you can re-add it later.") : v._("Do you want to delete <b>%(file_name)s</b>?"), u = p.format({
                    file_name: n.escape(_.displayName || "")
                })) : (m = v._("Delete file?"), u = v._("Do you want to delete this file?"))) : (m = v._("Delete files?"), u = v._("Do you want to delete <b>%(num)s files</b>?").format({
                    num: n.escape(String(c.length))
                })), y.SimpleModal.show({
                    title_text: m,
                    body_html: u,
                    confirm_text: v._("Delete"),
                    confirm_callback: l,
                    cancel_text: v._("Cancel"),
                    autoclose: !0
                })), [2]
            })
        })
    }

    function w(e, t) {
        return o.__awaiter(this, void 0, void 0, function() {
            var n, c;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return n = l.getUserId(), [4, s.ensureAttachments(e, b.EnsureAttachmentsPurpose.DOWNLOAD_FILES)];
                    case 1:
                        return c = o.sent(), t && (i.logDownloadFile(n, a.getFqPaths(c), t.totalCount, t.cellView), a.homeLogEvent(t, b.ActionType.DOWNLOAD, c)), c.forEach(function(e) {
                            if (e.isDir && e.fqPath && null != e.previewInfo && null != e.previewInfo.block_hash) r.get_zip({
                                fq_paths: [e.fqPath],
                                subject_uid: n,
                                block_hash: e.previewInfo.block_hash,
                                parent_path: e.fqPath
                            });
                            else {
                                var t = null != e.previewInfo && "href" in e.previewInfo ? e.previewInfo.href : void 0;
                                t && r.get({
                                    url: t
                                })
                            }
                        }), [2]
                }
            })
        })
    }

    function C(e, t, n) {
        return o.__awaiter(this, void 0, void 0, function() {
            var r, u, d, m, p, g;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return r = l.getUserId(), [4, s.ensureAttachmentsWithRetryStatus([t], b.EnsureAttachmentsPurpose.OPEN_VERSIONS)];
                    case 1:
                        return u = o.sent(), d = u.attachments, m = u.isRetry, p = d[0].fqPath || "", g = _.build_revisions_uri(p, r), c.logAndNavigate(g.toString(), n ? function() {
                            return i.logOpenVersions(r, p, n.totalCount, n.cellView), a.homeLogEvent(n, b.ActionType.VERSIONS, d)
                        } : void 0, m ? c.NavigationMethod.REDIRECT : e), [2]
                }
            })
        })
    }

    function L(e) {
        return {
            index: e.index
        }
    }

    function F(e, t, n, r) {
        return o.__awaiter(this, void 0, void 0, function() {
            var a, c, l, u, m;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, s.ensureAttachmentsWithRetryStatus([e.attachmentIds[0]], b.EnsureAttachmentsPurpose.PREVIEW_RECENT_ITEM)];
                    case 1:
                        if (a = o.sent(), c = a.attachments, l = a.isRetry, 1 === c.length) {
                            if (u = c[0], e.scl) return i.openTab(e.scl, b.ActionType.VIEW_FILE, e.attachmentIds, r), [2];
                            if (m = k(u, e.attachmentIds, r, t && !l, n.isCommentAction)) return [2]
                        }
                        return d.reportStack("Preview failed", {
                            severity: d.SEVERITY.NONCRITICAL,
                            exc_extra: {
                                recentItem: e,
                                attachments: c,
                                previewOptions: L(n)
                            }
                        }), [2]
                }
            })
        })
    }

    function M(e, t) {
        return e.fqPath ? String(h.preview_uri_for_fq_path(t, e.fqPath)) : e.previewInfo ? e.previewInfo.href || null : null
    }

    function k(e, t, o, n, r) {
        var s = e.fqPath && (D.isCloudDocByExtension(O.file_extension(e.fqPath)) || A.hasPreferredEditorSupport(e.fqPath));
        if (e.isDir || n && !s) {
            var a = M(e, l.getHomeStore().getUser());
            return !!a && (i.openTab(a, b.ActionType.VIEW_FILE, t, o), !0)
        }
        return g.openInFileViewer(e.id, function() {
            return i.logRecentActivityAction(b.ActionType.VIEW_FILE, t, o)
        }, r), !0
    }

    function x(e, t, o, n) {
        k(t.find(function(t) {
            return t.id === e
        }), f.extractAttachmentIds(t), n, c.isMetaKeyPressed(o))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), r = o.__importStar(r), u = o.__importStar(u), t.shareFile = R, t.openFile = P, t.deleteRecentItem = N, t.downloadFiles = w, t.openVersions = C, t.previewFileSyncRecentItem = F, t.previewAttachment = x
}), define("modules/clean/react/home/recents/actions/recent_activity_actions_utils_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/clean/react/home/recents/recent_activity_logger_utils_post_tti", "modules/clean/react/home/store", "modules/clean/react/home/recents/store_utils_post_tti", "modules/clean/fileops", "modules/clean/react/home/recents/utils/events"], function(e, t, o, n, r, i, s, a, c, l, u) {
    "use strict";

    function d(e) {
        return n.compact(n.map(e, "fqPath"))
    }

    function m(e, t, o, n) {
        return u.logEvent(t, e.cellView, o, e.totalCount, n)
    }

    function _(e, t) {
        return o.__awaiter(this, void 0, void 0, function() {
            var u, _, p, g, h, f, E, S;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return u = a.getUserId(), [4, c.ensureAttachments(e, r.EnsureAttachmentsPurpose.PROMPT_AND_DELETE_ATTACHMENTS)];
                    case 1:
                        return _ = o.sent(), p = d(_), t && (g = t.totalCount, h = t.cellView, s.logDeleteFiles(u, p, g, h), m(t, r.ActionType.DELETE, _, void 0)), f = n.uniqueId("DELETE_FILES"), i.recentActivityDispatcher.dispatch({
                            type: r.DELETE_FILES_PENDING,
                            attachmentIds: e,
                            transactionId: f
                        }), E = function() {
                            return i.recentActivityDispatcher.dispatch({
                                type: r.DELETE_FILES_COMMIT,
                                transactionId: f
                            })
                        }, S = function() {
                            return i.recentActivityDispatcher.dispatch({
                                type: r.DELETE_FILES_ROLLBACK,
                                transactionId: f
                            })
                        }, l.do_nonbrowse_delete(u, p).then(E, S), [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.getFqPaths = d, t.homeLogEvent = m, t.deleteAttachments = _
}), define("modules/clean/react/home/recents/components/attachment_file_icon_view_post_tti", ["require", "exports", "tslib", "external/classnames", "react", "external/lodash", "modules/clean/em_string", "modules/clean/react/home/util/resource_icon"], function(e, t, o, n, r, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r), i = o.__importStar(i);
    var c = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClick = function(e) {
                e.preventDefault(), t.props.handleClick(t.props.id, e)
            }, t.onContextMenu = function(e) {
                e.preventDefault(), t.props.handleContextMenu(t.props.id)
            }, t
        }
        return o.__extends(t, e), t.prototype.renderFilename = function() {
            var e = this.props.file.displayName.split("."),
                t = "." + e.pop(),
                o = s.Emstring.em_snippet(e.join("."), 10);
            return r.default.createElement("span", {
                className: "attachment-item__filename",
                tabIndex: 0
            }, o, r.default.createElement("wbr", null), r.default.createElement("span", {
                className: "nowrap"
            }, t))
        }, t.prototype.renderIcon = function() {
            return r.default.createElement(a.HomeResourceIcon, {
                className: "attachment-item__icon",
                displayType: this.props.file.displayType,
                fileName: this.props.file.displayName
            })
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.overlayText,
                o = e.file;
            return r.default.createElement("div", {
                className: n.default({
                    "attachment-item": !0,
                    "attachment-item--file-thumb": !0,
                    "attachment-item--show-more": !!t
                })
            }, r.default.createElement("a", {
                href: "#",
                title: o.displayName,
                className: "attachment-item__anchor",
                onClick: this.onClick,
                onContextMenu: this.onContextMenu
            }, this.renderIcon(), this.renderFilename(), t ? r.default.createElement("span", {
                className: "attachment-item__overlay"
            }, t) : void 0))
        }, t.defaultProps = {
            handleClick: i.noop,
            handleContextMenu: i.noop
        }, t
    })(r.default.Component);
    t.AttachmentFileIconView = c
}), define("modules/clean/react/home/recents/components/attachment_grid_post_tti", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = (function() {
        function e(e, t) {
            this._gridWidth = e, this._gutterWidth = t
        }
        return e.create = function(t, o) {
            return new e(t, o)
        }, e.prototype.generate = function(e, t) {
            void 0 === t && (t = 1 / 0);
            for (var o = [], n = 0; o.length < t && n < e.length;) {
                var r = this.buildRow(e.slice(n));
                n += r.length, o.push(r)
            }
            return o
        }, e.prototype.buildRow = function(e) {
            for (var t = [], o = this._gridWidth + this._gutterWidth, n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                if (o = o - i.width - this._gutterWidth, !(o >= 0 || 0 === t.length)) break;
                t.push(i)
            }
            return t
        }, e
    })();
    t.AttachmentGrid = o
}), define("modules/clean/react/home/recents/components/attachment_image_view_post_tti", ["require", "exports", "tslib", "external/classnames", "react"], function(e, t, o, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                isLoading: !0
            }, t.onClick = function(e) {
                e.preventDefault(), t.props.handleClick(t.props.id, e)
            }, t.onContextMenu = function(e) {
                e.preventDefault(), t.props.handleContextMenu(t.props.id)
            }, t.onLoad = function() {
                t.setState({
                    isLoading: !1
                })
            }, t.onError = function() {
                t.props.handleLoadError(t.props.id), t.setState({
                    isLoading: !1
                })
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e, t = this.props,
                o = t.overlayText,
                i = t.image;
            return o && (e = r.default.createElement("span", {
                className: "attachment-item__overlay"
            }, o)), r.default.createElement("div", {
                className: n.default({
                    "attachment-item": !0,
                    "attachment-item--show-more": !!o,
                    "attachment-item--is-loading": this.state.isLoading
                })
            }, r.default.createElement("a", {
                href: "#",
                onClick: this.onClick,
                onContextMenu: this.onContextMenu,
                title: i.displayName,
                className: "attachment-item__anchor",
                style: {
                    width: i.width,
                    height: i.height
                },
                tabIndex: 0
            }, r.default.createElement("img", {
                alt: i.displayName,
                className: "attachment-item__thumbnail",
                src: i.thumbnailUrl,
                onLoad: this.onLoad,
                onError: this.onError
            }), e))
        }, t.defaultProps = {
            handleClick: function() {},
            handleContextMenu: function() {},
            handleLoadError: function() {}
        }, t
    })(r.default.PureComponent);
    t.AttachmentImageView = i
}), define("modules/clean/react/home/recents/components/attachment_list_layout_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/photos/thumbnail_url_util", "modules/clean/react/home/recents/components/attachment_file_icon_view_post_tti", "modules/clean/react/home/recents/components/attachment_grid_post_tti", "modules/clean/react/home/recents/components/attachment_image_view_post_tti", "modules/core/browser_detection", "modules/core/exception"], function(e, t, o, n, r, i, s, a, c, l) {
    "use strict";

    function u(e, t) {
        var o, n, i, s = c.is_high_density_display();
        switch (t) {
            case "aggregated-scaled":
                i = s ? 200 : 100, o = s ? 200 : 100, n = d;
                break;
            case "aggregated-cropped":
                i = s ? 200 : 100, o = s ? 200 : 100, n = m;
                break;
            case "aggregated-wide-cropped":
                i = s ? 718 : 359, o = s ? 200 : 100, n = m;
                break;
            default:
                return l.assert(!1, "invalid ThumbnailVariant: " + t), ""
        }
        return r.thumbnailUrlForSize(e, i, o, n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n);
    var d = r.ThumbnailSizeMode.FIT_ONE,
        m = r.ThumbnailSizeMode.EXACT_NO_BACKGROUND,
        _ = (function() {
            function e(e, t, o) {
                this.gridWidth = e, this.columnWidth = t, this.gutterWidth = o, this._grid = s.AttachmentGrid.create(this.gridWidth, this.gutterWidth)
            }
            return e.create = function(t, o, n) {
                return new e(t, o, n)
            }, e.prototype.generate = function(e, t, o) {
                var n = this.cellMetadata(e, o);
                return this._grid.generate(n, t)
            }, e.prototype.cellMetadata = function(e, t) {
                var o = this,
                    r = n.zipObject(t, t);
                return e.map(function(e) {
                    var t = e.isLoaded,
                        n = e.thumbnailUrl;
                    return r[e.id] || t && !n ? o.buildFileIconViewMetadata(e) : t ? o.buildImageViewMetadata(e) : o.buildLoadingImageViewMetadata(e)
                })
            }, e.prototype.buildFileIconViewMetadata = function(e) {
                return {
                    id: e.id,
                    scaledThumbnailUrl: null,
                    view: i.AttachmentFileIconView,
                    width: 92,
                    height: 100,
                    attachment: e
                }
            }, e.prototype.buildLoadingImageViewMetadata = function(e) {
                return {
                    id: e.id,
                    scaledThumbnailUrl: null,
                    view: null,
                    width: 100,
                    height: 100,
                    attachment: e
                }
            }, e.prototype.buildImageViewMetadata = function(e) {
                var t = e.thumbnailUrl,
                    o = this.calculateThumbnailDimensions(e.thumbnailDimensions),
                    n = o.width,
                    r = o.height,
                    i = o.variant;
                return t.startsWith("data:") || (t = u(t, i)), {
                    id: e.id,
                    view: a.AttachmentImageView,
                    scaledThumbnailUrl: t,
                    width: n + 6,
                    height: r + 6,
                    attachment: e
                }
            }, e.prototype.calculateThumbnailDimensions = function(e) {
                var t, o, n;
                if (e) {
                    n = "aggregated-scaled";
                    var r = e.width / e.height;
                    t = 100, o = Math.floor(r * t), o > this.columnWidth - 6 && (n = "aggregated-wide-cropped", o = this.columnWidth - 6)
                }
                return (!e || o < 75) && (n = "aggregated-cropped", o = 100, t = 100), {
                    width: o,
                    height: t,
                    variant: n
                }
            }, e
        })();
    t.AttachmentListLayout = _
}), define("modules/clean/react/home/recents/components/attachment_list_view_post_tti", ["require", "exports", "tslib", "react", "external/lodash", "modules/clean/components/loading_indicator", "modules/clean/react/home/constants", "modules/clean/react/home/recents/components/attachment_file_icon_view_post_tti", "modules/clean/react/home/recents/components/attachment_image_view_post_tti", "modules/clean/react/home/recents/components/attachment_list_layout_post_tti", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/actions/recent_activity_actions_post_tti", "modules/clean/react/home/recents/store_utils_post_tti", "modules/core/exception", "modules/core/i18n"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r);
    var g = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.setAttachmentListRef = function(e) {
                return t.attachmentsList = e
            }, t.state = {
                rows: 1,
                errored: [],
                containerWidth: null,
                expandedAttachments: {}
            }, t.previewAttachment = function(e, o) {
                var n = t.props.attachments,
                    r = {
                        totalCount: n.length,
                        cellView: t
                    };
                d.previewAttachment(e, n, o, r)
            }, t.handleImageLoadError = function(e) {
                var o = t.state.errored.slice();
                o.push(e), t.setState({
                    errored: o
                })
            }, t.revealNextGroup = function() {
                t.setState({
                    rows: t.state.rows + u.SHOW_MORE_THUMBNAIL_ROW_INCREMENT
                })
            }, t
        }
        return o.__extends(t, e), t.prototype.componentDidMount = function() {
            this.updateLayoutController(), this.loadRemainingAttachments()
        }, t.prototype.componentDidUpdate = function(e) {
            this.updateLayoutController(), this.loadRemainingAttachments()
        }, t.prototype.getLayoutProperties = function(e) {
            var t = window.getComputedStyle(e),
                o = parseInt(t.width || "0", 10),
                n = Math.abs(parseFloat(t.marginLeft || "0")) || 0;
            return {
                containerWidth: o,
                maxWidthToFit: Math.floor(o / 2) - n,
                itemHorizontalMargin: n
            }
        }, t.prototype.updateLayoutController = function() {
            var e = this.getLayoutProperties(this.attachmentsList);
            e && e.containerWidth !== this.state.containerWidth && (this.layoutController = l.AttachmentListLayout.create(e.containerWidth, e.maxWidthToFit, e.itemHorizontalMargin), this.setState({
                containerWidth: e.containerWidth
            }))
        }, t.prototype.loadRemainingAttachments = function() {
            var e = this.props.attachments.filter(function(e) {
                return !e.isLoaded
            }).map(function(e) {
                return e.id
            });
            e.length && m.ensureAttachments(e, u.EnsureAttachmentsPurpose.LOAD_REMAINING_ATTACHMENTS)
        }, t.prototype.isLoading = function() {
            return this.state.rows > 1 && this.props.attachments.some(function(e) {
                return !e.isLoaded
            })
        }, t.prototype.renderAttachmentItems = function() {
            var e = this,
                t = this.props.attachments,
                o = this.state,
                i = o.containerWidth,
                l = o.errored;
            if (!i) return [];
            var u = this.isLoading() ? 1 : this.state.rows,
                d = this.layoutController.generate(t, u, l),
                m = r.flattenDeep(d),
                g = this.previewAttachment,
                h = m.length,
                f = t.length,
                E = f - h + 1,
                S = !this.isLoading() && h < f;
            return m.map(function(t, o) {
                var r, i;
                S && o === m.length - 1 && (g = e.revealNextGroup, i = p._("+%(count)s").format({
                    count: E
                }));
                var l = t.attachment,
                    u = t.view,
                    d = t.id,
                    h = t.scaledThumbnailUrl,
                    f = t.width,
                    y = t.height,
                    v = l.displayName,
                    T = l.displayType;
                switch (u) {
                    case a.AttachmentFileIconView:
                        r = n.default.createElement(a.AttachmentFileIconView, {
                            key: "attachment-" + d,
                            id: d,
                            file: {
                                displayName: v || "",
                                displayType: T || s.DisplayTypes.FILE
                            },
                            overlayText: i,
                            handleClick: g
                        });
                        break;
                    case c.AttachmentImageView:
                        r = n.default.createElement(c.AttachmentImageView, {
                            key: "attachment-expanded-" + d,
                            overlayText: i,
                            id: d,
                            image: {
                                thumbnailUrl: h,
                                displayName: v || "",
                                width: f,
                                height: y
                            },
                            handleClick: g,
                            handleLoadError: e.handleImageLoadError
                        });
                        break;
                    default:
                        u && _.assert(!1, u.name + " is not supported by AttachmentListView")
                }
                return n.default.createElement("li", {
                    key: "attachment-item-" + l.id
                }, r)
            })
        }, t.prototype.renderLoadingView = function() {
            return n.default.createElement("div", {
                className: "attachment-loading"
            }, n.default.createElement(i.LoadingIndicator, {
                style: i.LoadingIndicator.LoadingIndicatorStyle.BLUE_SPINNER,
                className: "recents-loading-indicator"
            }))
        }, t.prototype.render = function() {
            var e = null;
            return this.isLoading() && (e = this.renderLoadingView()), n.default.createElement("div", {
                className: "recents-item__attachments"
            }, n.default.createElement("ul", {
                ref: this.setAttachmentListRef,
                className: "attachment-list"
            }, this.renderAttachmentItems()), e)
        }, t
    })(n.default.Component);
    t.AttachmentListView = g
}), define("modules/clean/react/home/recents/components/recent_activity_container_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/sharing/share_modal_util", "modules/clean/sharing/wizard/wizard_modals"], function(e, t, o, n, r, i) {
    "use strict";

    function s(e) {
        var t = 0,
            o = function() {
                var o = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
                    n = o / (document.documentElement.scrollHeight - window.innerHeight);
                n > .8 && n > t && e(), t = n
            };
        window.addEventListener("scroll", n.throttle(o, 150, {
            trailing: !1
        }), !1)
    }

    function a(e) {
        return o.__awaiter(this, void 0, void 0, function() {
            return o.__generator(this, function(t) {
                return s(n.throttle(e, 2e3, {
                    trailing: !1
                })), [2]
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.generateModalSessionId = r.generateModalSessionId, t.shareExistingFolder = i.shareExistingFolder, t.recentActivityContainerComponentDidMount = a
}), define("modules/clean/react/home/recents/components/recent_filters_menu_post_tti", ["require", "exports", "tslib", "react", "external/lodash", "modules/core/i18n", "spectrum/popover", "modules/clean/react/home/util/section_header_menu_title", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/clean/react/home/util/logging/activity_logger", "modules/clean/react/home/recents/recent_activity_constants"], function(e, t, o, n, r, i, s, a, c, l, u) {
    "use strict";
    var d;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.RECENT_ITEMS_FILTER_TYPE_TO_STRING = (d = {}, d[u.RecentItemsFilterType.INCLUDE_OPEN_ACTIONS] = i._("Opened items"), d[u.RecentItemsFilterType.INCLUDE_EDIT_ACTIONS] = i._("Edited items"), d[u.RecentItemsFilterType.INCLUDE_ADD_ACTIONS] = i._("Added items"), d[u.RecentItemsFilterType.INCLUDE_FILES] = i._("Files"), d[u.RecentItemsFilterType.INCLUDE_FOLDERS] = i._("Folders"), d[u.RecentItemsFilterType.INCLUDE_PAPER_DOCS] = i._("Paper docs"), d);
    var m = (function(e) {
        function d() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleMenuToggle = function(e) {
                l.homeActivityLogger.logClickRecentFiltersMenu(e.isOpen)
            }, t.handleFilterChange = function(e) {
                var o = t.props.activeFilters,
                    n = t.isFilterSelected(e),
                    i = n ? r.without(o, e) : o.concat([e]);
                c.recentActivityDispatcher.dispatch({
                    type: u.SET_ACTIVE_FILTERS,
                    activeFilters: i
                });
                var s = !n;
                l.homeActivityLogger.logClickRecentFiltersMenuItem(e, s)
            }, t.handleResetClick = function() {
                c.recentActivityDispatcher.dispatch({
                    type: u.SET_ACTIVE_FILTERS,
                    activeFilters: []
                }), l.homeActivityLogger.logClickResetRecentFiltersMenu()
            }, t
        }
        return o.__extends(d, e), d.prototype.isFilterSelected = function(e) {
            return this.props.activeFilters.includes(e)
        }, d.prototype.renderAvailableFilters = function(e) {
            var o = this;
            return e.map(function(e) {
                return n.default.createElement(s.PopoverSelectableItem, {
                    key: e,
                    value: e,
                    selected: o.isFilterSelected(e)
                }, t.RECENT_ITEMS_FILTER_TYPE_TO_STRING[e])
            })
        }, d.prototype.renderFiltersHeader = function() {
            return n.default.createElement("span", {
                className: "filters-section-header"
            }, i._("Filter By"), this.props.activeFilters.length ? n.default.createElement("button", {
                className: "button-as-link filters-reset-button",
                onClick: this.handleResetClick
            }, i._("Reset")) : null)
        }, d.prototype.render = function() {
            var e = this.props,
                t = e.title,
                o = e.availableFilters,
                c = o.includes(u.RecentItemsFilterType.EXPAND_AGGREGATIONS),
                l = r.without(o, u.RecentItemsFilterType.EXPAND_AGGREGATIONS);
            return n.default.createElement(s.Popover, {
                onMenuToggle: this.handleMenuToggle,
                onSelection: this.handleFilterChange,
                closeOnSelection: !1
            }, n.default.createElement(s.PopoverTrigger, {
                className: "section-header-trigger"
            }, n.default.createElement(a.SectionHeaderMenuTitle, {
                title: t
            })), n.default.createElement(s.PopoverContent, null, c ? [n.default.createElement(s.PopoverItemGroup, {
                key: "aggregations-toggle-section"
            }, n.default.createElement(s.PopoverItemGroupTitle, {
                key: "aggregations-toggle-section-title"
            }, i._("Show")), n.default.createElement(s.PopoverSelectableItem, {
                key: u.RecentItemsFilterType.EXPAND_AGGREGATIONS,
                value: u.RecentItemsFilterType.EXPAND_AGGREGATIONS,
                selected: !this.isFilterSelected(u.RecentItemsFilterType.EXPAND_AGGREGATIONS)
            }, i._("Images in groups"))), n.default.createElement(s.PopoverContentSeparator, {
                key: "aggregations-toggle-section-separator"
            })] : null, n.default.createElement(s.PopoverItemGroup, null, n.default.createElement(s.PopoverItemGroupTitle, null, this.renderFiltersHeader()), this.renderAvailableFilters(l))))
        }, d.displayName = "RecentFiltersMenu", d
    })(n.default.PureComponent);
    t.RecentFiltersMenu = m
}), define("modules/clean/react/home/recents/models/utils_post_tti", ["require", "exports", "modules/clean/react/home/constants", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/models/utils"], function(e, t, o, n, r) {
    "use strict";

    function i(e) {
        return r.getRecentItemActionType(e) === n.RecentItemActionType.OPENED
    }

    function s(e) {
        return r.getRecentItemActionType(e) === n.RecentItemActionType.EDITED
    }

    function a(e) {
        return r.getRecentItemActionType(e) === n.RecentItemActionType.ADDED
    }

    function c(e) {
        return !l(e) && !u(e)
    }

    function l(e) {
        switch (e.displayType) {
            case o.DisplayTypes.FOLDER:
            case o.DisplayTypes.SHARED_FOLDER:
            case o.DisplayTypes.TEAM_FOLDER:
            case o.DisplayTypes.CDM_TEAM_MEMBER_FOLDER:
            case o.DisplayTypes.SHARED_FOLDER_READ_ONLY:
            case o.DisplayTypes.RESTRICTED_FOLDER:
            case o.DisplayTypes.PAPER_FOLDER:
            case o.DisplayTypes.PAPER_PUBLIC_FOLDER:
                return !0;
            default:
                return !1
        }
    }

    function u(e) {
        return e.displayType === o.DisplayTypes.PAPER_DOCUMENT
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isOpenAction = i, t.isEditAction = s, t.isAddAction = a, t.isFile = c, t.isFolder = l, t.isPaperDoc = u
}), define("modules/clean/react/home/recents/recent_activity_client_post_tti", ["require", "exports", "tslib", "modules/constants/python", "external/lodash", "modules/clean/react/home/api", "modules/clean/react/home/recents/recent_activity_client_utils"], function(e, t, o, n, r, i, s) {
    "use strict";

    function a(e, t, o, n) {
        return void 0 === n && (n = !0), i.makeRequest({
            subject_user: e,
            type: "POST",
            url: t,
            data: o
        }, {
            isBackground: n
        })
    }

    function c(e, t, n, r) {
        return void 0 === r && (r = !0), o.__awaiter(this, void 0, void 0, function() {
            var i;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return i = s.getPayload, [4, a(e, t, n, r)];
                    case 1:
                        return [2, i.apply(void 0, [o.sent()])]
                }
            })
        })
    }

    function l(e, t) {
        return a(e, "/recents/json", {
            num_activities: t ? 20 : 10,
            cursor: t
        })
    }

    function u(e, t) {
        return o.__awaiter(this, void 0, Promise, function() {
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, a(e, "/home_feed/retrieve_paper_recents", {
                            is_initial_fetch: t
                        })];
                    case 1:
                        return [2, o.sent()]
                }
            })
        })
    }

    function d(e, t) {
        i.makeRequest({
            url: "/recents/logger",
            type: "POST",
            subject_user: e,
            data: t,
            dataType: "text"
        }, {
            isBackground: !0
        })
    }

    function m(e, t) {
        return c(e, "/home_feed/archive_paper_resources", {
            resources_json: JSON.stringify(t)
        }, !1)
    }

    function _(e, t, i) {
        return o.__awaiter(this, void 0, Promise, function() {
            var s;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, c(e, "/activity/generate/json", {
                            activity_keys: JSON.stringify(r.uniq(t)),
                            loading_modes: JSON.stringify([n.FILE_ACTIVITY_LOADING_MODE.PREVIEW_INFO]),
                            encrypted: i
                        })];
                    case 1:
                        return s = o.sent(), [2, s.activities_by_activity_key]
                }
            })
        })
    }

    function p(e, t) {
        return o.__awaiter(this, void 0, Promise, function() {
            var n;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, c(e, "/recents/check_files_in_root_collection", {
                            files_json: JSON.stringify(t)
                        })];
                    case 1:
                        return n = o.sent(), [2, n.file_in_root_collection_info]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importStar(r), t.fetchPayload = c, t.recentsJson = l, t.retrievePaperRecents = u, t.postLogEvent = d, t.archivePaperResources = m, t.activityGenerateJson = _, t.checkFileInRootCollection = p
}), define("modules/clean/react/home/recents/recent_activity_file_action_post_tti", ["require", "exports", "tslib", "react", "modules/clean/react/home/store", "modules/clean/react/home/util/file_utils", "modules/clean/react/app_actions/app_actions_menu", "modules/clean/react/home/resource_id_types", "modules/clean/filepath"], function(e, t, o, n, r, i, s, a, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var l = (function(e) {
        function t(t) {
            var o = e.call(this, t) || this;
            return o.onActionDropdownOpen = function() {
                o.setState({
                    isActionDropdownOpen: !0
                })
            }, o.onActionDropdownClose = function() {
                o.setState({
                    isActionDropdownOpen: !1
                })
            }, o.state = {
                isActionDropdownOpen: !1
            }, o
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.recentItem,
                o = e.attachments;
            if (!(t && t.idType === a.HOME_RESOURCE_ID_TYPE.ENCODED_FILE_OBJ_ID && o.length && t.viewingUserId && t.displayName)) return null;
            var l = i.getFileFromPartial({
                file_id: t.resourceId,
                ext: "." + c.file_extension(t.displayName),
                ns_id: o[0].nsId || void 0,
                ns_path: o[0].nsPath || void 0,
                fq_path: o[0].fqPath || void 0
            });
            return n.default.createElement(s.UnconnectedExtensionsMenu, {
                className: "recents-item__file-actions recents-item__action-button",
                user: r.getUser(),
                file: l,
                onDropdownOpen: this.onActionDropdownOpen,
                onDropdownClose: this.onActionDropdownClose,
                telemetryContext: {
                    surface: "home_recent"
                }
            })
        }, t
    })(n.default.PureComponent);
    t.RecentActivityFileActionPost = l
}), define("modules/clean/react/home/recents/recent_activity_filter_actions_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/stores/attachment_store", "modules/clean/react/home/recents/models/utils_post_tti"], function(e, t, o, n, r, i, s) {
    "use strict";

    function a(e) {
        return r.ALL_AVAILABLE_FILTER_TYPES.filter(function(o) {
            return e.some(function(e) {
                return t.RECENT_ITEMS_FILTER_TYPE_TO_FUNCTION[o](e)
            })
        })
    }

    function c(e, t) {
        var o = t.includes(r.RecentItemsFilterType.EXPAND_AGGREGATIONS);
        t = n.without(t, r.RecentItemsFilterType.EXPAND_AGGREGATIONS);
        var i = l(e, t);
        return o ? d(i) : i
    }

    function l(e, t) {
        return 0 === t.length ? e : e.filter(u(t))
    }

    function u(e) {
        return function(o) {
            return e.some(function(e) {
                return t.RECENT_ITEMS_FILTER_TYPE_TO_FUNCTION[e](o)
            })
        }
    }

    function d(e) {
        var t = e.map(function(e) {
            return m(e) ? _(e) : e
        });
        return n.flatten(t)
    }

    function m(e) {
        return e.attachmentIds.length > 1
    }

    function _(e) {
        return p(e).map(function(t) {
            return o.__assign({}, e, {
                id: t.id,
                attachmentIds: [t.id],
                displayName: t.displayName
            })
        })
    }

    function p(e) {
        return i.getAttachmentStore().getByIds(e.attachmentIds)
    }
    var g;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RECENT_ITEMS_FILTER_TYPE_TO_FUNCTION = (g = {}, g[r.RecentItemsFilterType.EXPAND_AGGREGATIONS] = m, g[r.RecentItemsFilterType.INCLUDE_OPEN_ACTIONS] = s.isOpenAction, g[r.RecentItemsFilterType.INCLUDE_EDIT_ACTIONS] = s.isEditAction, g[r.RecentItemsFilterType.INCLUDE_ADD_ACTIONS] = s.isAddAction, g[r.RecentItemsFilterType.INCLUDE_FILES] = s.isFile, g[r.RecentItemsFilterType.INCLUDE_FOLDERS] = s.isFolder, g[r.RecentItemsFilterType.INCLUDE_PAPER_DOCS] = s.isPaperDoc, g), t.getAvailableFiltersFromRecentItems = a, t.processRecentItems = c
}), define("modules/clean/react/home/recents/recent_activity_logger_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/core/exception", "modules/clean/react/home/recents/recent_activity_client_post_tti"], function(e, t, o, n, r, i) {
    "use strict";

    function s(e, t, n) {
        if (void 0 === n && (n = {}), E) {
            var r = o.__assign({}, n, {
                event_name: t
            });
            i.postLogEvent(e, r)
        }
    }

    function a(e, t, o) {
        var i = Object.keys(o),
            s = n.difference(i, t);
        r.assert(0 === s.length, e + " called with unsupported keys: " + s)
    }

    function c() {
        E = !0
    }

    function l() {
        E = !1
    }

    function u(e, t) {
        a("logPageLoaded", p, t), s(e, "client_page_loaded", t)
    }

    function d(e, t) {
        a("logRequestFailed", g, t), s(e, "request_failed", t)
    }

    function m(e, t) {
        a("logCellAction", h, t), s(e, "cell_action", t)
    }

    function _(e, t) {
        a("logTimeToFirstAction", f, t), s(e, "time_to_first_action", t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n);
    t.FilterViews = {
        EVERYTHING: "everything"
    };
    var p = ["is_full_page", "item_count", "contains_aggregation", "latency", "is_paginated"],
        g = ["failure_type", "is_paginated"],
        h = ["in_aggregation", "filter_view", "action_type", "target_activity_type", "action_scope", "position", "file_extension", "days_ago"],
        f = ["latency", "action_type", "action_scope"],
        E = !0;
    t.enableLogging = c, t.disableLogging = l, t.logPageLoaded = u, t.logRequestFailed = d, t.logCellAction = m, t.logTimeToFirstAction = _
}), define("modules/clean/react/home/recents/recent_activity_logger_utils_post_tti", ["require", "exports", "tslib", "external/react-dom", "external/lodash", "modules/clean/react/home/recents/utils/events", "modules/clean/react/home/recents/recent_activity_logger_post_tti", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/recents/stores/attachment_store", "modules/clean/web_timing_logger", "modules/clean/react/home/util/navigation", "modules/clean/react/home/recents/recent_activity_logger_utils"], function(e, t, o, n, r, i, s, a, c, l, u, d) {
    "use strict";

    function m(e) {
        return Math.floor((Date.now() - e) / 864e5)
    }

    function _(e, t, o, i, c) {
        var l = n.findDOMNode(c),
            u = l;
        if (null !== u) {
            var d, _ = r.filter(r.uniq(r.map(o, function(e) {
                    return null != e ? e.split(".").pop().toLowerCase() : void 0
                })), Boolean),
                g = i > 1;
            d = 1 === i ? a.ActionScope.SINGLE : o.length === i ? a.ActionScope.AGGREGATION : a.ActionScope.SUBSET;
            var h = Array.prototype.indexOf.call(u.parentNode.childNodes, u),
                f = Number(u.getAttribute("data-item-type")),
                E = Number(u.getAttribute("data-item-date")),
                S = {
                    in_aggregation: g,
                    filter_view: s.FilterViews.EVERYTHING,
                    action_type: e,
                    action_scope: d,
                    target_activity_type: f,
                    position: h,
                    file_extension: _.join(","),
                    days_ago: m(E)
                };
            s.logCellAction(t, S), p(t, r.pick(S, "action_scope", "action_type"))
        }
    }

    function p(e, t) {
        if (d.canLogFirstAction()) {
            var n = l.start_time();
            n && (d.onLogFirstAction(), s.logTimeToFirstAction(e, o.__assign({}, t, {
                latency: Date.now() - n
            })))
        }
    }

    function g(e) {
        return function(t, o, n, r) {
            _(e, t, o, n, r)
        }
    }

    function h(e) {
        return function(t, o, n, r) {
            return g(e)(t, [o], n, r)
        }
    }

    function f(e, t) {
        s.logRequestFailed(e, {
            failure_type: t ? t.status : -1,
            is_paginated: !1
        })
    }

    function E() {
        var e = d.getRecentsLoggingData();
        return function(t, o) {
            return void 0 === o && (o = {}), S(t, e, o)
        }
    }

    function S(e, t, n) {
        void 0 === n && (n = {});
        var r = o.__assign({
            is_full_page: t.isFullPage
        }, n, {
            latency: Date.now() - t.startTime
        });
        s.logPageLoaded(e, r)
    }

    function y(e, t, o) {
        var n = c.getAttachmentStore().getByIds(t);
        return i.logEvent(e, o.cellView, n, o.totalCount)
    }

    function v(e, t, o, n) {
        u.logAndNavigate(e, function() {
            return y(t, o, n)
        }, u.NavigationMethod.NEW_TAB)
    }

    function T(e, t, o, n) {
        u.logAndNavigate(e, function() {
            return y(t, o, n)
        }, u.NavigationMethod.REDIRECT)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), r = o.__importStar(r), l = o.__importStar(l), t.logShareFile = h(a.ActionType.SHARE), t.logPreviewFiles = g(a.ActionType.VIEW_FILE), t.logDeleteFiles = g(a.ActionType.DELETE), t.logUnityOpenFile = h(a.ActionType.UNITY_OPEN), t.logOpenPathUrl = g(a.ActionType.OPEN_DIR), t.logOpenSharedLinkUrl = g(a.ActionType.VIEW_SHARED_LINK), t.logCommentFile = h(a.ActionType.COMMENT), t.logDownloadFile = g(a.ActionType.DOWNLOAD), t.logOpenVersions = h(a.ActionType.VERSIONS), t.logRequestFailed = f, t.startRequestTimer = E, t.logRecentsLoaded = S, t.logRecentActivityAction = y, t.openTab = v, t.openUrl = T
}), define("modules/clean/react/home/recents/recent_activity_starred_post_tti", ["require", "exports", "modules/clean/react/starred/constants", "modules/clean/react/starred/actions", "modules/clean/react/home/recents/recent_activity_federated_model", "modules/clean/react/home/store", "modules/clean/react/home/recents/recent_activity_starred", "modules/clean/flux/dispatcher"], function(e, t, o, n, r, i, s, a) {
    "use strict";

    function c(e) {
        e.length && a.Dispatcher.dispatch({
            type: o.StarredActionTypes.SET_STATUS,
            starredStatuses: e.map(function(e) {
                return new r.FederatedRecentItem(e).getStarredStatus()
            })
        })
    }

    function l(e) {
        var t = s.getIdTypePairsByRecentActivityItems(e);
        t.length && n.StarredActions.fetchStatuses(i.getRole(), t, !0)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setStarredStatusOfPaperRecentItems = c, t.fetchStarredStatus = l
}), define("modules/clean/react/home/recents/store_utils_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/core/i18n", "modules/clean/react/home/recents/stores/attachment_store", "modules/core/notify", "modules/clean/react/home/recents/recent_activity_dispatcher", "modules/clean/react/home/recents/recent_activity_client_post_tti", "modules/clean/react/home/recents/recent_activity_constants", "modules/clean/react/home/store", "modules/core/exception", "modules/clean/react/home/post_tti/unity_post_tti", "modules/clean/react/home/recents/store_utils", "modules/clean/react/home/recents/recent_activity_logger_utils_post_tti"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p) {
    "use strict";

    function g(e) {
        return o.__awaiter(this, void 0, void 0, function() {
            var t, r, s, d, _, p = this;
            return o.__generator(this, function(g) {
                switch (g.label) {
                    case 0:
                        return a.recentActivityDispatcher.dispatch({
                            type: l.ADD_PENDING_ACTIVITY_KEYS,
                            activityKeys: e
                        }), t = i.getAttachmentStore().groupIdsByEncryptedToken(e), r = u.getUserId(), s = {}, d = 0, [4, Promise.all(n.map(t, function(e, t) {
                            return o.__awaiter(p, void 0, void 0, function() {
                                var n, i;
                                return o.__generator(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return u.trys.push([0, 2, , 3]), n = [{}, s], [4, c.activityGenerateJson(r, e, t)];
                                        case 1:
                                            return s = o.__assign.apply(void 0, n.concat([u.sent()])), [3, 3];
                                        case 2:
                                            return i = u.sent(), a.recentActivityDispatcher.dispatch({
                                                type: l.REMOVE_PENDING_ACTIVITY_KEYS,
                                                activityKeys: e
                                            }), d++, [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }))];
                    case 1:
                        if (g.sent(), a.recentActivityDispatcher.dispatch({
                                type: l.RECEIVE_RAW_RELATED_ACTIVITIES_BY_KEY,
                                rawRelatedActivitiesByKey: s,
                                userId: r
                            }), _ = n.map(s, function(e) {
                                return {
                                    ns_id: e.ns_id,
                                    ns_path: e.ns_path
                                }
                            }), _.length && (m.getUnityFeatures().then(function(e) {
                                e && e.check_file_batch(_, r, null).then(function(e) {
                                    a.recentActivityDispatcher.dispatch({
                                        type: l.RECEIVE_CAN_OPEN_INFO,
                                        canOpenInfo: e
                                    })
                                })
                            }), c.checkFileInRootCollection(r, _).then(function(e) {
                                return a.recentActivityDispatcher.dispatch({
                                    type: l.RECEIVE_FILE_IN_ROOT_COLLECTION_INFO,
                                    fileInRootCollectionInfo: e
                                })
                            })), d) throw new Error(d + " activityGenerateJson failures");
                        return [2]
                }
            })
        })
    }

    function h(e, t, n) {
        return void 0 === n && (n = l.MAX_ENSURE_ATTACHMENT_LOAD_ATTACHMENTS_ATTEMPTS), o.__awaiter(this, void 0, Promise, function() {
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, f(e, t, n)];
                    case 1:
                        return [2, o.sent().attachments]
                }
            })
        })
    }

    function f(e, t, n, a) {
        return void 0 === n && (n = l.MAX_ENSURE_ATTACHMENT_LOAD_ATTACHMENTS_ATTEMPTS), void 0 === a && (a = !1), o.__awaiter(this, void 0, Promise, function() {
            var c, l, u;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return c = i.getAttachmentStore().getByIds(e), l = c.filter(function(e) {
                            return !e.isLoaded
                        }).map(function(e) {
                            return e.id
                        }), l.length ? i.getAttachmentStore().areSomeActivityKeysPending(l) ? [4, new Promise(function(o, r) {
                            var s = i.getAttachmentStore().addListener(function() {
                                i.getAttachmentStore().areSomeActivityKeysPending(l) || (s(), f(e, t, n, !0).then(o, r))
                            })
                        })] : [3, 2] : [3, 10];
                    case 1:
                        return [2, o.sent()];
                    case 2:
                        if (!(n > 0)) return [3, 8];
                        o.label = 3;
                    case 3:
                        return o.trys.push([3, 5, , 6]), [4, g(l)];
                    case 4:
                        return o.sent(), [3, 6];
                    case 5:
                        return u = o.sent(), [3, 6];
                    case 6:
                        return [4, f(e, t, n - 1, !0)];
                    case 7:
                        return [2, o.sent()];
                    case 8:
                        throw d.reportStack("retry attempts depleted", {
                            severity: d.SEVERITY.NONCRITICAL,
                            exc_extra: {
                                attachmentIds: e,
                                purpose: t
                            }
                        }), v.indexOf(t) < 0 && s.Notify.error(r._("There was a problem completing this request.")), new Error("retry attempts depleted");
                    case 9:
                        return [3, 11];
                    case 10:
                        return [2, {
                            attachments: c,
                            isRetry: a
                        }];
                    case 11:
                        return [2]
                }
            })
        })
    }

    function E() {
        return o.__awaiter(this, void 0, Promise, function() {
            return o.__generator(this, function(e) {
                return [2, {
                    logRecentsLoaded: p.logRecentsLoaded,
                    ensureAttachments: h,
                    logRequestFailed: p.logRequestFailed,
                    loadPaperRecentItems: S
                }]
            })
        })
    }

    function S(e) {
        return o.__awaiter(this, void 0, void 0, function() {
            var t, n, r;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = c.retrievePaperRecents(u.getUserId(), e), n = _.handleRetrievePaperRecentsPromise, r = [E], [4, t];
                    case 1:
                        return n.apply(void 0, r.concat([o.sent(), e])), [2]
                }
            })
        })
    }

    function y(e) {
        var t = this;
        return _.logErrorAndRethrowAsync(E, function() {
            return o.__awaiter(t, void 0, void 0, function() {
                var t, n;
                return o.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return t = _.handleAndLogRecentsJsonPromise, n = [E], [4, c.recentsJson(u.getUserId(), e)];
                        case 1:
                            return [2, t.apply(void 0, n.concat([o.sent(), !e]))]
                    }
                })
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.ensureAttachments = h;
    var v = [l.EnsureAttachmentsPurpose.LOAD_REMAINING_ATTACHMENTS, l.EnsureAttachmentsPurpose.RECENTS_JSON_CONTINUATION];
    t.ensureAttachmentsWithRetryStatus = f, t.loadPaperRecentItems = S, t.loadRecentItems = y
}), define("modules/clean/react/home/resource/actions_post_tti", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/constants", "modules/clean/react/home/store", "modules/clean/react/home/resource/store", "modules/clean/referrer_cleansing_redirect", "modules/constants/python", "modules/clean/react/file_viewer/controller", "modules/core/browser", "modules/clean/filepath", "modules/clean/react/home/api", "modules/clean/react/home/post_tti/props_post_tti", "modules/core/uri", "modules/clean/previews/data/preview_type_util", "modules/clean/cloud_docs/preferred_editor_utils", "modules/clean/cloud_docs/constants", "modules/clean/cloud_docs/utils", "modules/clean/cloud_docs/types", "modules/core/browser", "modules/clean/cloud_docs/event_logging", "spectrum/util/uuid_generator"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p, g, h, f, E, S, y, v, T) {
    "use strict";

    function I(e, t) {
        var o = new p.URI({
            path: "/sm/create" + d.normalize(t)
        });
        o.updateQuery("_subject_uid", e.id.toString()), o.updateQuery("redirect", "0"), m.makeRequest({
            url: o.toString(),
            type: "POST",
            data: null,
            dataType: "text"
        }).then(function(e) {
            return u.redirect(e)
        })
    }

    function b(e) {
        if (g.isCloudDoc(e.preview)) {
            return e.preview.content.exit_url
        }
    }

    function D(e, t, o) {
        var l = s.getHomeResourceStore().addListener(function() {
            var e = s.getHomeResourceStore().getFileToPreview();
            if (e) {
                var n = b(e),
                    r = i.getHomeStore().getUser();
                if (n)
                    if (t(), l(), f.POINTER_EXTS.includes(E.getFileExt(e).slice(1))) a.safe_open_tab_and_redirect(n), v.logUserAction({
                        actionEvent: S.UserActionEventType.PRE_OPEN,
                        userId: r.id,
                        docPathOrId: e.file_id,
                        actionSource: S.UserActionSourceType.WEB_HOME
                    });
                    else {
                        var u = T.generateUUID("web_open_id"),
                            d = p.URI.parse(n).updateQuery("web_open_id", u).toString();
                        y.open_tab(d), v.logUserAction({
                            actionEvent: S.UserActionEventType.PRE_OPEN,
                            userId: r.id,
                            docPathOrId: e.file_id,
                            actionSource: S.UserActionSourceType.WEB_HOME,
                            data: {
                                webOpenId: u
                            }
                        })
                    }
                else {
                    var m = function() {
                        return O(e, r, t, l)
                    };
                    !o && h.hasPreferredEditorSupport(e) ? _.getPostTTIProps().then(function(o) {
                        var n = o.preferredEditors;
                        h.openInPreferredEditor(r, e, n, m, {
                            fileViewAction: c.FileViewActionType.CLICK,
                            fileViewOrigin: c.FileViewOriginType.HOME
                        }), t(), l()
                    }) : m()
                }
            }
        });
        n.Dispatcher.dispatch({
            type: r.HomeResourceStoreActionTypes.REQUEST_PREVIEW,
            resourceId: e
        })
    }

    function O(e, t, o, i) {
        window.requestAnimationFrame(function() {
            l.isShown() ? l.updateFiles([e]) : (l.open([e], 0, t, "react-file-viewer", {
                canClose: !0,
                oref: c.OREF_CONSTANTS.HOME,
                fileViewTarget: c.FileViewTargetType.PRIVATE,
                fileViewOrigin: c.FileViewOriginType.HOME,
                fileViewAction: c.FileViewActionType.CLICK,
                onClose: function() {
                    return n.Dispatcher.dispatch({
                        type: r.HomeActionTypes.CLOSE_FILE_VIEWER
                    })
                }
            }), n.Dispatcher.dispatch({
                type: r.HomeActionTypes.OPEN_FILE_VIEWER
            })), o(), i()
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = o.__importStar(a), y = o.__importStar(y), t.createAutoShareLink = I, t.openInFileViewer = D
}), define("modules/clean/react/home/resource/api_post_tti", ["require", "exports", "modules/clean/react/home/api"], function(e, t, o) {
    "use strict";

    function n(e, t) {
        return o.makeRequest({
            url: "/home_feed/get_file_metadata",
            type: "POST",
            subject_user: e.id,
            data: {
                resources_json: JSON.stringify(t)
            }
        }, {
            isBackground: !0
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getFileMetadata = n
}), define("modules/clean/react/home/roots/home_access_main_post_tti", ["require", "exports", "external/lodash", "modules/clean/react/home/onboarding/store_post_tti", "modules/clean/user_education/user_education_client", "modules/clean/react/home/onboarding/actions_post_tti", "modules/clean/user_education/user_education_interface"], function(e, t, o, n, r, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initHomeOnboarding = o.once(function(e) {
        var t = e.showUnreadOnboarding,
            o = e.onboardingComplete;
        n.getHomeOnboardingStore(), r.UEClient.on(s.UEStateChannel, i.handleHomeUserEducationStateSteps), i.updateShowUnreadOnboarding(t), o && i.markHomeOnboardingComplete()
    })
}), define("modules/clean/react/home/roots/home_access_web_post_tti", ["require", "exports", "tslib", "modules/clean/history", "modules/clean/upsell/prompt_event_emitter"], function(e, t, o, n, r) {
    "use strict";

    function i(t, i) {
        return o.__awaiter(this, void 0, void 0, function() {
            var s = this;
            return o.__generator(this, function(a) {
                return n.default.remove_query_param("role"), t && new Promise(function(t, o) {
                    e(["modules/clean/payments/snapengage"], t, o)
                }).then(o.__importStar).then(function(e) {
                    return e.ajaxFetchAndLoadSnapengageParams()
                }), new Promise(function(t, o) {
                    e(["modules/clean/growth/experiments/overquota_helper"], t, o)
                }).then(o.__importStar).then(function(e) {
                    e.OverquotaHelper.maybeShowSubgrowthProOQRecurringModal("wb_oq_ups_recur_hm")
                }), r.promptBufferedEventEmitter.on(r.Events.ON_PROMPT_INITIALIZED, function(t) {
                    return o.__awaiter(s, void 0, void 0, function() {
                        var n;
                        return o.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t && (t.didMainCampaignLoad() || t.didCampaignForUserEducationLoad()) ? [2] : i ? [4, new Promise(function(t, o) {
                                        e(["modules/clean/react/ncct/post_tti_ncct_modal"], t, o)
                                    }).then(o.__importStar)] : [3, 2];
                                case 1:
                                    n = r.sent().postTTINCCTReminderModal, n(), r.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }), [2]
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.homeAccessWebComponentDidMount = i
}), define("modules/clean/react/home/starred/actions_post_tti", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/resource/api_post_tti", "modules/clean/react/starred/id_type_pair", "modules/clean/react/home/constants", "modules/clean/react/home/store", "modules/clean/react/home/starred/constants", "modules/clean/react/home/starred/api_post_tti", "modules/clean/react/home/starred/actions"], function(e, t, o, n, r, i, s, a, c, l, u) {
    "use strict";

    function d() {
        return o.__awaiter(this, void 0, void 0, function() {
            var e, t;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        n.Dispatcher.dispatch({
                            type: c.StarredResourceActionTypes.LOADING_ALL
                        }), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, l.retrieveStarred(c.LOAD_ALL_ITEMS_COUNT)];
                    case 2:
                        return e = o.sent(), [3, 4];
                    case 3:
                        throw t = o.sent(), u.onRetrieveStarredError(c.StarredLoadingTypes.ALL, t);
                    case 4:
                        return u.StarredActions.handleRetrieveStarredPayload(function() {
                            return Promise.resolve({
                                getStarredStatusMetadata: m
                            })
                        }, c.StarredLoadingTypes.ALL, e), [2]
                }
            })
        })
    }

    function m(e) {
        return o.__awaiter(this, void 0, void 0, function() {
            var t, c, l;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = e.map(function(e) {
                            return e.idTypePair
                        }), 0 === t.length ? [2] : [4, r.getFileMetadata(a.getUser(), t)];
                    case 1:
                        return c = o.sent(), l = {}, c.forEach(function(e) {
                            return l[i.idTypePairToString(e)] = e.file_metadata
                        }), n.Dispatcher.dispatch({
                            type: s.HomeResourceStoreActionTypes.RECEIVED_RESOURCE_ID_TO_FILE,
                            resourceIdToFile: l
                        }), [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadAllStarredItems = d, t.getStarredStatusMetadata = m
}), define("modules/clean/react/home/starred/api_post_tti", ["require", "exports", "tslib", "modules/clean/react/home/api", "modules/clean/react/home/store"], function(e, t, o, n, r) {
    "use strict";

    function i(e) {
        return o.__awaiter(this, void 0, Promise, function() {
            return o.__generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, n.makeRequest({
                            url: "/home_feed/retrieve_starred",
                            type: "POST",
                            data: {
                                role: r.getRole(),
                                limit: e
                            }
                        })];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.retrieveStarred = i
}), define("modules/clean/react/home/starred/starred_item_file_action_post_tti", ["require", "exports", "tslib", "react", "modules/clean/react/home/recents/models/utils", "modules/clean/react/home/util/file_utils", "modules/clean/react/app_actions/app_actions_menu", "modules/clean/react/home/resource_id_types"], function(e, t, o, n, r, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var c = (function(e) {
        function t(t) {
            var o = e.call(this, t) || this;
            return o.onActionDropdownOpen = function() {
                o.setState({
                    isActionDropdownOpen: !0
                })
            }, o.onActionDropdownClose = function() {
                o.setState({
                    isActionDropdownOpen: !1
                })
            }, o.state = {
                isActionDropdownOpen: !1
            }, o
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.starredItem,
                o = e.user;
            if (t.idType !== a.HOME_RESOURCE_ID_TYPE.ENCODED_FILE_OBJ_ID || !o.id || !t.title) return null;
            var c = i.getFileFromPartial({
                file_id: t.resourceId,
                fq_path: t.details.fqPath || void 0,
                ext: r.getExtension(t.title)
            });
            return n.default.createElement(s.UnconnectedExtensionsMenu, {
                className: "starred-item__file-actions",
                file: c,
                user: this.props.user,
                onDropdownOpen: this.onActionDropdownOpen,
                onDropdownClose: this.onActionDropdownClose,
                telemetryContext: {
                    surface: "home_starred"
                }
            })
        }, t
    })(n.default.PureComponent);
    t.StarredItemFileActionPost = c
}), define("modules/clean/react/home/tasks/actions_post_tti", ["require", "exports", "external/lodash", "modules/clean/flux/dispatcher", "modules/clean/react/home/tasks/model", "modules/clean/react/home/tasks/logging_post_tti", "modules/clean/react/home/tasks/store_post_tti"], function(e, t, o, n, r, i, s) {
    "use strict";

    function a(e, t) {
        return s.getHomeTasksStore(), n.Dispatcher.dispatch({
            type: r.HomeTasksActionTypes.SET_TASKS_FILTER,
            filter: e.filter
        }), t(), i.logSelectTasksFilter(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.selectTaskFilter = a, t.initHomeTasksStoreWithPostTTIProps = o.once(function(e) {
        s.getHomeTasksStore(), n.Dispatcher.dispatch({
            type: r.HomeTasksActionTypes.SET_HOME_TASKS_PAYLOAD,
            homeTasksPayload: e
        })
    })
}), define("modules/clean/react/home/tasks/default_props_post_tti", ["require", "exports"], function(e, t) {
    "use strict";

    function o() {
        return {
            forMe: [],
            forOthers: [],
            completed: []
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getTasksDefaultProps = o
}), define("modules/clean/react/home/tasks/doc_with_tasks_post_tti", ["require", "exports", "tslib", "react", "modules/core/i18n", "spectrum/overflow_button", "spectrum/popover", "modules/clean/react/home/util/navigation", "modules/clean/react/home/constants", "modules/clean/react/home/util/resource_icon", "modules/clean/react/home/util/paper_utils", "modules/clean/react/home/util/rendering_utils", "modules/clean/react/home/resource_id_types", "modules/clean/react/home/tasks/tasks_list_post_tti", "modules/clean/react/starred/constants", "modules/clean/react/starred/star", "modules/clean/react/home/store", "modules/clean/react/home/tasks/logging_post_tti"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p, g, h, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var E = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.getLoggingProps = function(e) {
                var o = void 0 === e ? {} : e,
                    n = o.taskPosition,
                    r = o.clickShowAll,
                    i = t.props,
                    s = i.data,
                    a = i.paperDocPosition,
                    c = i.totalPaperDocsCount,
                    l = i.filter;
                return {
                    docPosition: a,
                    filteredDocsCount: c,
                    docTasksCount: s.tasks.length,
                    filter: l,
                    taskPosition: n,
                    clickShowAll: r
                }
            }, t.openDoc = function(e, o) {
                void 0 === o && (o = {}), e.stopPropagation(), a.logAndNavigate(t.props.data.url, function() {
                    return f.logOpenTask(t.getLoggingProps(o))
                })
            }, t.onKeyPress = function(e, o) {
                void 0 === o && (o = {}), "Enter" === e.key && t.openDoc(e, o)
            }, t.logClickTaskOverflowMenu = function() {
                return f.logClickTaskOverflowMenu(t.getLoggingProps())
            }, t.handleShare = function(e) {
                e.preventDefault();
                var o = t.props.data.url;
                u.sharePaperDoc(o, function() {
                    return f.logSharePaperDocTasks(t.getLoggingProps())
                })
            }, t.onClickOverflowMenu = function(e) {
                return e.stopPropagation()
            }, t.handleSelection = function(e, t) {
                return e(t)
            }, t.onDoubleClick = function(e) {
                return e.stopPropagation()
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this.props.data,
                t = e.title,
                o = e.tasks,
                a = e.id;
            return n.default.createElement("span", {
                tabIndex: 0,
                className: "tasks-doc__row",
                onClick: this.openDoc,
                onKeyPress: this.onKeyPress,
                "aria-label": "paper-doc-tasks",
                role: "button"
            }, n.default.createElement("div", {
                className: "tasks-doc__container"
            }, n.default.createElement("div", {
                className: "tasks-doc__title"
            }, n.default.createElement(l.HomeResourceIcon, {
                className: "tasks-doc__icon file-icon__img file-icon file-icon--sprite file-icon--spectrum",
                displayType: c.PAPER_DOCUMENT_RESOURCE_TYPE,
                fileName: t || ""
            }), n.default.createElement("div", {
                className: "tasks-doc__text"
            }, n.default.createElement("div", {
                className: "tasks-doc__name",
                "aria-label": t,
                tabIndex: 0,
                role: "button"
            }, d.truncateTitle(t), n.default.createElement(g.Star, {
                id: a,
                idType: m.HOME_RESOURCE_ID_TYPE.PAPER_DOCUMENT_ID_PATH,
                source: p.StarredSource.HOME_TASKS,
                user: h.getUser()
            }))), n.default.createElement(s.Popover, {
                onSelection: this.handleSelection,
                onMenuToggle: this.logClickTaskOverflowMenu,
                onClick: this.onClickOverflowMenu
            }, n.default.createElement(s.PopoverTrigger, {
                onDoubleClick: this.onDoubleClick
            }, n.default.createElement(i.OverflowButton, {
                tagName: "span",
                className: "tasks-doc__context-menu-button",
                "aria-label": r._("More Actions")
            })), n.default.createElement(s.PopoverContent, {
                attachment: "right"
            }, n.default.createElement(s.PopoverContentItem, {
                key: "share",
                value: this.handleShare
            }, r._("Share"))))), n.default.createElement(_.TasksList, {
                tasks: o,
                onClick: this.openDoc,
                onKeyPress: this.onKeyPress
            })))
        }, t.displayName = "DocWithTasks", t
    })(n.default.PureComponent);
    t.DocWithTasks = E
}), define("modules/clean/react/home/tasks/logging_post_tti", ["require", "exports", "modules/clean/react/home/api", "modules/clean/react/home/constants", "modules/clean/react/home/store"], function(e, t, o, n, r) {
    "use strict";

    function i(e, t) {
        var n = t.docPosition,
            i = t.filteredDocsCount,
            s = t.docTasksCount,
            a = t.taskPosition,
            c = t.filter,
            l = t.clickShowAll;
        return o.logHomeActivity({
            eventName: e,
            role: r.getRole(),
            extra: {
                position: n,
                num_items: i,
                num_sub_items: s,
                subgroup_position: a,
                source: c,
                should_show_all: l
            }
        })
    }

    function s(e, t) {
        var n = t.homeTasksPayload,
            i = t.filter,
            s = n[i] || [];
        return o.logHomeActivity({
            eventName: e,
            role: r.getRole(),
            extra: {
                source: i,
                num_items: s.length,
                num_sub_items: s.map(function(e) {
                    return e.tasks.length
                }).reduce(function(e, t) {
                    return e + t
                }, 0)
            }
        })
    }

    function a(e) {
        return i(n.LoggingTypes.OPEN_DOC_FROM_TASK, e)
    }

    function c(e) {
        return i(n.LoggingTypes.CLICK_DOC_TASKS_OVERFLOW_SHARE, e)
    }

    function l(e) {
        return i(n.LoggingTypes.CLICK_DOC_TASKS_OVERFLOW_MENU, e)
    }

    function u(e) {
        return s(n.LoggingTypes.SELECT_TASKS_TAB, e)
    }

    function d(e) {
        return s(n.LoggingTypes.SELECT_TASKS_FILTER, e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.logOpenTask = a, t.logSharePaperDocTasks = c, t.logClickTaskOverflowMenu = l, t.logSelectTasksTab = u, t.logSelectTasksFilter = d
}), define("modules/clean/react/home/tasks/section_post_tti", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/react/home/tasks/doc_with_tasks_post_tti", "modules/clean/react/home/tasks/store_post_tti", "modules/clean/react/home/tasks/logging_post_tti", "modules/clean/react/home/tasks/actions_post_tti"], function(e, t, o, n, r, i, s, a, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var l = (function(e) {
        function t(t) {
            var o = e.call(this, t) || this;
            o.getStateFromStore = function() {
                var e = s.getHomeTasksStore(),
                    t = e.getTasksFilter(),
                    o = e.getHomeTasksPayload();
                return {
                    filter: t,
                    homeTasksPayload: o,
                    docs: o[t] || []
                }
            }, o.updateStateFromStore = function() {
                return o.setState(o.getStateFromStore())
            }, c.initHomeTasksStoreWithPostTTIProps(t.homeTasksPayload), o.state = o.getStateFromStore(), o.removeListener = s.getHomeTasksStore().addListener(o.updateStateFromStore);
            var n = o.state,
                r = n.filter,
                i = n.homeTasksPayload;
            return a.logSelectTasksTab({
                homeTasksPayload: i,
                filter: r
            }), o
        }
        return o.__extends(t, e), t.prototype.componentWillUnmount = function() {
            this.removeListener()
        }, t.prototype.render = function() {
            var e = this.state,
                t = e.docs,
                o = e.filter;
            return t.length ? n.default.createElement("div", {
                className: "tasks-docs__list"
            }, t.map(function(e, r) {
                return n.default.createElement(i.DocWithTasks, {
                    data: e,
                    key: r,
                    paperDocPosition: r,
                    totalPaperDocsCount: t.length,
                    filter: o
                })
            })) : n.default.createElement("div", {
                className: "home-access__empty-text"
            }, r._("You have no to-dos!"))
        }, t.displayName = "HomeTasksSection", t
    })(n.default.PureComponent);
    t.HomeTasksSection = l
}), define("modules/clean/react/home/tasks/store_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/flux/dispatcher", "modules/clean/flux/flux_store", "modules/clean/react/home/tasks/model", "modules/clean/react/home/tasks/default_props_post_tti"], function(e, t, o, n, r, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = (function(e) {
        function t() {
            var t = e.call(this, r.Dispatcher) || this;
            return t.filter = s.DEFAULT_TASKS_FILTER, t.homeTasksPayload = a.getTasksDefaultProps(), t.getTasksFilter = function() {
                return t.filter
            }, t.getHomeTasksPayload = function() {
                return t.homeTasksPayload
            }, t
        }
        return o.__extends(t, e), t.prototype.onSetFilter = function(e) {
            var t = e.filter;
            this.filter = t, this.__emitChange()
        }, t.prototype.setHomeTasksPayload = function(e) {
            var t = e.homeTasksPayload;
            this.homeTasksPayload = t, this.__emitChange()
        }, t.prototype.__onDispatch = function(e) {
            var t = e.action;
            switch (t.type) {
                case s.HomeTasksActionTypes.SET_TASKS_FILTER:
                    this.onSetFilter(t);
                    break;
                case s.HomeTasksActionTypes.SET_HOME_TASKS_PAYLOAD:
                    this.setHomeTasksPayload(t)
            }
        }, t
    })(i.FluxStore);
    t.PrivateHomeTasksStore = c, t.getHomeTasksStore = n.once(function() {
        return new c
    })
}), define("modules/clean/react/home/tasks/task_post_tti", ["require", "exports", "tslib", "react", "spectrum/checkbox"], function(e, t, o, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClick = function(e) {
                var o = t.props;
                (0, o.onClick)(e, {
                    taskPosition: o.taskPosition
                })
            }, t.onKeyPress = function(e) {
                var o = t.props;
                (0, o.onKeyPress)(e, {
                    taskPosition: o.taskPosition
                })
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this.props.text;
            return n.default.createElement("div", {
                className: "tasks-doc__task",
                onClick: this.onClick,
                onKeyPress: this.onKeyPress,
                tabIndex: 0
            }, n.default.createElement(r.Checkbox, {
                className: "tasks-doc__checkbox",
                checked: "unchecked",
                disabled: !0
            }), n.default.createElement("div", {
                className: "tasks-doc__task-description"
            }, e))
        }, t.displayName = "Task", t
    })(n.default.PureComponent);
    t.Task = i
}), define("modules/clean/react/home/tasks/tasks_list_post_tti", ["require", "exports", "tslib", "react", "modules/clean/react/home/util/show_hide_link", "modules/clean/react/home/tasks/task_post_tti"], function(e, t, o, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var s = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClickShowMore = function(e) {
                return t.props.onClick(e, {
                    clickShowAll: !0
                })
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.tasks,
                o = e.onKeyPress,
                s = e.onClick,
                a = t.length - 3;
            return n.default.createElement("div", {
                className: "'tasks-doc__list"
            }, t.slice(0, 3).map(function(e, t) {
                return n.default.createElement(i.Task, {
                    key: t,
                    text: e,
                    taskPosition: t,
                    onClick: s,
                    onKeyPress: o
                })
            }), a > 0 ? n.default.createElement(r.ShowHideLink, {
                onClick: this.onClickShowMore,
                isExpanded: !1,
                hiddenItemCount: a,
                canLoadMore: !0
            }) : null)
        }, t.displayName = "TasksList", t
    })(n.default.PureComponent);
    t.TasksList = s
}), define("modules/clean/react/home/unread/card_post_tti", ["require", "exports", "tslib", "modules/clean/react/user_notifications/actions"], function(e, t, o, n) {
    "use strict";

    function r(e) {
        n.default.acknowledge(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.acknowledgeNotification = r
}), define("modules/clean/react/home/unread/home_access_unread_post_tti", ["require", "exports", "modules/clean/react/home/onboarding/actions_post_tti"], function(e, t, o) {
    "use strict";

    function n() {
        setTimeout(o.showUnreadOnboardingTooltipIfNecessary)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.triggerUnreadOnboarding = n
}), define("modules/clean/react/home/unread/store_post_tti", ["require", "exports", "tslib", "modules/clean/react/user_notifications/actions", "modules/clean/react/user_notifications/store"], function(e, t, o, n, r) {
    "use strict";

    function i() {
        return n.default.loadOnceAndWatch(!0), r.userNotificationsStore
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.listenToAndGetNotificationStore = i
}), define("modules/clean/react/home/util/constants_post_tti", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HOME_V1_USER_EDUCATION_STEP_NAMES = {
        START: "start",
        RECENTLY_VIEWED: "recently_viewed",
        FILES: "files",
        PAPER: "paper"
    }, t.DEFAULT_ONBOARDING_POST_TTI_PROPS = {
        showUnreadOnboarding: !1,
        onboardingComplete: !0
    }
}), define("modules/clean/react/home/util/feedback_button", ["require", "exports", "tslib", "react", "spectrum/icon_form", "modules/core/i18n", "modules/clean/react/home/constants", "modules/core/notify", "modules/clean/react/home/content_suggestions/dismiss_suggest_modal", "modules/clean/react/modal", "modules/clean/react/home/content_suggestions/actions_post_tti", "modules/clean/react/home/content_suggestions/util/logging/home_suggest_logger", "modules/clean/react/home/store", "modules/clean/react/home/content_suggestions/models/suggested_item"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var p = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onDismissItemClick = function(e) {
                e.stopPropagation(), e.preventDefault(), d.homeSuggestLogger.logClickDismissSuggestedItem(t.props.suggested, d.withHomePrefix(s.HomeSections.SUGGEST), "dismiss-suggested-item", t.props.position);
                var o = t.props.suggested,
                    r = m.getHomeStore().getUser(),
                    p = _.suggestedItemToIdTypePair(o),
                    g = o.filename,
                    h = function() {
                        u.dismissSuggestedItem(r, p, t.props.feature).catch(function(e) {
                            var t;
                            t = g ? i._("There was a problem dismissing %(item_name)s").format({
                                item_name: g
                            }) : i._("There was a problem dismissing your selection"), a.Notify.error(t)
                        })
                    };
                if (t.props.showDismissSuggestModal) {
                    var f = n.default.createElement(c.DismissSuggestModal, {
                        itemToDismiss: o,
                        homeSection: d.withHomePrefix(s.HomeSections.SUGGEST),
                        clickOrigin: "dismiss-suggested-item",
                        position: t.props.position,
                        onConfirmDismiss: h
                    });
                    l.Modal.showInstance(f)
                } else d.homeSuggestLogger.logDismissSuggestedItem(o, d.withHomePrefix(s.HomeSections.SUGGEST), "dismiss-suggested-item", t.props.position, "no_feedback_modal"), h()
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            return n.default.createElement("button", {
                className: "tile__action-dismiss",
                onClick: this.onDismissItemClick,
                "aria-label": i._("Dismiss suggestion")
            }, n.default.createElement(r.IconForm, {
                className: "tile__action-icon",
                name: "cancel"
            }))
        }, t
    })(n.default.PureComponent);
    t.FeedbackButton = p
}), define("modules/clean/react/home/util/file_utils", ["require", "exports", "tslib", "modules/clean/react/browse/models"], function(e, t, o, n) {
    "use strict";

    function r(e) {
        return e && Object.keys(e).forEach(function(t) {
            void 0 === e[t] && delete e[t]
        }), new n.File(e ? o.__assign({}, i, e) : i)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = {
        bytes: 1024,
        direct_blockserver_link: "",
        event_type: 0,
        ext: "",
        file_id: "",
        fq_path: "",
        href: "",
        icon: "",
        is_cloud_doc: !1,
        is_dir: !1,
        is_in_team_folder_tree: !1,
        is_symlink: !1,
        is_locked: !1,
        is_unmounted: !1,
        is_versionable: !0,
        _mount_access_perms: [],
        ns_id: 0,
        ns_path: "",
        revision_id: "",
        sjid: 0,
        sort_key: [""],
        target_ns: null,
        type: 1
    };
    t.getFileFromPartial = r
}), define("modules/clean/react/home/util/logging/availability_logger_post_tti", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/home/constants", "modules/clean/react/home/api", "modules/clean/react/home/store", "modules/clean/react/home/util/logging/availability_logger_common"], function(e, t, o, n, r, i, s, a) {
    "use strict";

    function c(e) {
        var t = e.sectionToTTI,
            c = e.sectionToIsSkipped,
            l = e.sectionToTTData,
            u = e.typeToExecutionData,
            d = {};
        Object.keys(r.HomeSections).forEach(function(e) {
            var o = r.HomeSections[e];
            d[o] = {
                tti: t[o],
                tt_data: l[o],
                skipped: c[o]
            }
        });
        var m = s.getHomeStore(),
            _ = m.getUser();
        i.makeRequest({
            url: "/log/home_availability",
            type: "POST",
            dataType: "text",
            subject_user: _.id,
            data: {
                success: n.values(u).every(function(e) {
                    return e.success || !a.isPendingPrefetch(m, e)
                }),
                metrics_json: JSON.stringify({
                    referrer: document.referrer
                }),
                sections_json: JSON.stringify(d),
                prefetches_json: JSON.stringify(n.mapValues(u, function(e, t) {
                    var n = e.success,
                        r = e.homeTiming,
                        i = a.HOME_PREFETCH_TYPE_TO_INFO[t].section;
                    return o.__assign({}, r, {
                        conditional_loading_preference: m.getSectionLoadingPreference(i),
                        conditional_loading_mode: m.getSectionLoadingMode(i),
                        success: !!n
                    })
                }))
            }
        }, {
            isBackground: !0,
            delayRequest: !0,
            shouldAssertResponse: !0
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.logHomeAvailability = c
}), define("modules/clean/react/home/util/logging/unread_logger_post_tti", ["require", "exports", "modules/clean/loggers/notification_logger"], function(e, t, o) {
    "use strict";

    function n(e) {
        o.NotificationLogger.logAction(e, "surface", o.NotificationLocations.HOME_PAGE)
    }

    function r(e) {
        o.NotificationLogger.logMarkAsRead([e], o.NotificationLocations.HOME_PAGE)
    }

    function i(e) {
        o.NotificationLogger.logRender(e, -1, o.NotificationLocations.HOME_PAGE)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.logOpenUnreadNotificationItem = n, t.logMarkNotificationAsRead = r, t.logRenderedNotifications = i
}), define("modules/clean/react/home/util/static_tooltip_post_tti", ["require", "exports", "tslib", "react", "external/react-dom", "modules/clean/react/bubble_dropdown_v2", "modules/clean/react/sprite", "modules/core/i18n"], function(e, t, o, n, r, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r);
    var c = (function() {
        function e() {
            var e = this;
            this.isTooltipTriggered = !1, this.onTooltipTriggerRendered = function(t) {
                e.isTooltipTriggered || (e.isTooltipTriggered = !0, e.triggerButton = t, e.simulateTriggerButtonClick())
            }, this.simulateTriggerButtonClick = function() {
                e.triggerButton.click()
            }, this.show = function(t, o, c, l, u, d, m) {
                void 0 === m && (m = "");
                var _ = n.default.createElement("button", {
                        className: "home-tooltip__trigger-button",
                        ref: e.onTooltipTriggerRendered,
                        "aria-label": "close"
                    }),
                    p = n.default.createElement(i.BubbleDropdown, {
                        className: "home-tooltip",
                        position: l,
                        targetButton: _,
                        onShowDropdown: u || function() {},
                        onHideDropdown: d || function() {}
                    }, n.default.createElement("h4", {
                        className: "home-tooltip__title"
                    }, t), o, n.default.createElement("button", {
                        className: "home-tooltip__close-button",
                        onClick: e.simulateTriggerButtonClick,
                        "aria-label": a._("Close tooltip")
                    }, n.default.createElement(s.Sprite, {
                        group: "web",
                        name: "lightbox_close",
                        alt: a._("Close")
                    }))),
                    g = e.createMountingElement(m);
                c.appendChild(g), r.render(p, g)
            }, this.hide = function() {
                e.simulateTriggerButtonClick()
            }
        }
        return e.prototype.createMountingElement = function(e) {
            var t = document.createElement("DIV");
            return e && (t.className = e), t.addEventListener("click", function(e) {
                e.preventDefault()
            }), t
        }, e.POSITIONS = i.BubbleDropdown.POSITIONS, e
    })();
    t.StaticTooltip = c
}), define("modules/clean/react/radio", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom"], function(e, t, o, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r), i = o.__importStar(i), t.RadioItemVariant = {
        Normal: "normal",
        Large: "large"
    };
    var s = Object.keys(t.RadioItemVariant).map(function(e) {
            return t.RadioItemVariant[e]
        }),
        a = (function(e) {
            function a() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._handleClick = function() {
                    t._isSelected() || (i.findDOMNode(t.refs.input).focus(), "function" == typeof t.props._radioGroupData.onSelect && t.props._radioGroupData.onSelect(t.props.value))
                }, t._handleChange = function() {
                    "function" == typeof t.props._radioGroupData.onSelect && t.props._radioGroupData.onSelect(t.props.value)
                }, t._getId = function() {
                    return t.props._radioGroupData.name + "_" + t.props.value
                }, t._isSelected = function() {
                    return t.props._radioGroupData.radioGroupValue === t.props.value
                }, t
            }
            return o.__extends(a, e), a.prototype.render = function() {
                var e = this.props._radioGroupData,
                    o = ["c-radio-wrapper", this.props.className],
                    i = {
                        "c-radio": !0,
                        "c-radio--selected": this._isSelected()
                    };
                return Array.from(s).includes(e.variant) && e.variant !== t.RadioItemVariant.Normal && (i["c-radio--" + e.variant] = !0), r.default.createElement("div", {
                    className: n.default(o),
                    onClick: this._handleClick
                }, r.default.createElement("input", {
                    id: this._getId(),
                    ref: "input",
                    type: "radio",
                    name: e.name,
                    value: this.props.value,
                    checked: this._isSelected(),
                    onChange: this._handleChange
                }), r.default.createElement("div", {
                    className: n.default(i)
                }, r.default.createElement("div", {
                    className: "c-radio__inner"
                })), r.default.createElement("label", {
                    className: "c-radio-content",
                    htmlFor: this._getId()
                }, this.props.children))
            }, a.displayName = "RadioItem", a
        })(r.default.Component);
    t.RadioItem = a;
    var c = (function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onRadioItemSelect = function(e) {
                null != t.props.valueLink && t.props.valueLink.requestChange(e)
            }, t
        }
        return o.__extends(i, e), i.prototype.render = function() {
            var e = this,
                t = this.props.name || "radio-" + Math.floor(1e9 * Math.random()),
                o = r.default.Children.map(this.props.children, function(o) {
                    return "RadioItem" === o.type.displayName ? r.default.cloneElement(o, {
                        _radioGroupData: {
                            variant: e.props.variant,
                            name: t,
                            radioGroupValue: e.props.valueLink.value,
                            onSelect: e._onRadioItemSelect
                        }
                    }) : o
                }),
                i = {
                    "c-radio-group__legend": !0,
                    "ax-visually-hidden": !this.props.displayLegend
                },
                s = ["c-radio-group", "align-" + this.props.align, this.props.className];
            return r.default.createElement("fieldset", {
                className: n.default(s)
            }, r.default.createElement("legend", {
                className: n.default(i)
            }, this.props.legend), o)
        }, i.displayName = "RadioGroup", i.defaultProps = {
            className: "null",
            type: t.RadioItemVariant.Normal,
            align: "middle",
            displayLegend: !1
        }, i
    })(r.default.Component);
    t.RadioGroup = c
}), define("modules/clean/react/teams/team_insights/default_props", ["require", "exports"], function(e, t) {
    "use strict";

    function o() {
        return {
            variant: "OFF"
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getDefaultTeamInsightsProps = o
}), define("modules/clean/sharing/wizard/share_a_folder_wizard_modal", ["require", "exports", "tslib", "react", "external/react-dom-factories", "modules/clean/react/css", "modules/clean/viewer", "modules/core/i18n", "spectrum/modal", "spectrum/radio_button", "spectrum/label"], function(e, t, o, n, r, i, s, a, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r), a = o.__importStar(a);
    var d = a.i18n_default_project("sharing")._,
        m = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    option: "new-folder",
                    open: !0
                }, t.onSubmit = function() {
                    return t.props.onSubmit(t.state.option)
                }, t.onModalReady = function() {
                    t.focusOnRadioButton()
                }, t.closeModal = function() {
                    t.setState({
                        open: !1
                    })
                }, t.getTitle = function(e) {
                    switch (e) {
                        case "work":
                            return d("Share a folder from your %(team_name)s Dropbox").format({
                                team_name: s.Viewer.get_viewer().team_name
                            });
                        case "personal":
                            return d("Share a folder from your personal Dropbox")
                    }
                }, t.renderSpectrumContent = function() {
                    return n.default.createElement("form", {
                        className: "shared-folder-wizard__contents"
                    }, t._renderHeader(), t.renderSpectrumRadio())
                }, t._renderHeader = function() {
                    return r.div({
                        className: "shared-folder-wizard__header u-mar-bottom-s"
                    }, d("What would you like to do?"))
                }, t.renderSpectrumRadio = function() {
                    return n.default.createElement("div", {
                        className: "shared-folder-wizard__radio-group"
                    }, t.renderRadioOptionWithLabel("new-folder", d("I’d like to create and share a new folder")), t.renderRadioOptionWithLabel("existing-folder", d("I’d like to share an existing folder")))
                }, t.renderRadioOptionWithLabel = function(e, o) {
                    return n.default.createElement("div", {
                        className: "shared-folder-wizard__audience-input u-mar-bottom-xs"
                    }, n.default.createElement(u.Label, {
                        htmlFor: e,
                        key: e + "-label"
                    }, n.default.createElement(l.RadioButton, {
                        "aria-checked": t.state.option === e,
                        checked: t.state.option === e,
                        onChange: t.updateOption(e),
                        value: e,
                        id: e
                    }), n.default.createElement("div", {
                        className: e + "_title u-l-ib u-pad-left-xs"
                    }, o)))
                }, t.updateOption = function(e) {
                    return function() {
                        return t._handleChange(e)
                    }
                }, t._handleChange = function(e) {
                    return t.setState({
                        option: e
                    })
                }, t._renderButtons = function() {
                    return r.div({
                        className: "u-mar-top-m clearfix"
                    }, r.div({
                        className: "u-l-fr"
                    }, r.button({
                        className: "c-btn c-btn--primary",
                        onClick: function(e) {
                            return "function" == typeof e.nativeEvent.preventDefault && e.nativeEvent.preventDefault(), t.props.onSubmit(t.state.option)
                        }
                    }, d("Next"))))
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return n.default.createElement(c.UtilityModal, {
                    open: this.state.open,
                    primaryAction: d("Next"),
                    onPrimaryAction: this.onSubmit,
                    displayCloseButton: !0,
                    overlayClassName: "shared-folder-wizard__overlay",
                    overlayClickClose: !0,
                    onRequestClose: this.closeModal,
                    ariaLabel: d("New Shared Folder Modal"),
                    className: "shared-folder-wizard",
                    title: this.getTitle(this.props.user.role),
                    onReady: this.onModalReady
                }, this.renderSpectrumContent())
            }, t.prototype.focusOnRadioButton = function() {
                var e = document.querySelector("input#new-folder.mc-radio");
                e && e.focus()
            }, t.displayName = "ShareAFolderWizardModalNoCss", t
        })(n.default.Component);
    t.ShareAFolderWizardModal = i.requireCssWithComponent(m, ["/static/css/sharing/wizard_modals-vflx-yihK.css", "/static/css/modal-vflKK1XSJ.css"])
}), define("modules/clean/sharing/wizard/share_existing_folder_wizard_modal", ["require", "exports", "tslib", "react", "external/react-dom-factories", "modules/clean/react/css", "modules/clean/react/modal", "modules/clean/react/tree_view", "modules/clean/viewer", "modules/core/i18n", "spectrum/modal", "spectrum/button"], function(e, t, o, n, r, i, s, a, c, l, u, d) {
    "use strict";

    function m(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r), l = o.__importStar(l);
    var _ = l.i18n_default_project("sharing")._,
        p = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    open: !0
                }, t.getTitle = function(e) {
                    switch (e) {
                        case "work":
                            return _("Choose a folder from your %(team_name)s Dropbox").format({
                                team_name: c.Viewer.get_viewer().team_name
                            });
                        case "personal":
                            return _("Choose a folder from your personal Dropbox")
                    }
                }, t.onModalCloseClick = function() {
                    t.setState({
                        open: !1
                    })
                }, t._renderContent = function() {
                    return r.form({
                        className: "existing-shared-folder-wizard__contents",
                        onSubmit: function() {
                            return t.props.onSubmit(t.state.folderPath, t._setError)
                        }
                    }, t._renderError(), t._renderTreeView(), t._renderButtons())
                }, t.renderSpectrumContent = function() {
                    return n.default.createElement("form", {
                        className: "existing-shared-folder-wizard__contents"
                    }, t._renderError(), t._renderTreeView())
                }, t._renderError = function() {
                    if (null != t.state.folderPath && (null != t.state.errorMsg ? t.state.errorMsg.length : void 0) > 0) return r.div({
                        className: "text-input-error-wrapper"
                    }, r.div({
                        className: "text-input-error-text u-font-danger"
                    }, t.state.errorMsg))
                }, t._renderTreeView = function() {
                    return n.default.createElement(a.UserFolderTreeView, {
                        user: t.props.user,
                        is_paired: !1,
                        onFolderSelected: t._setFolderPath,
                        treeRootName: c.Viewer.get_role_title(t.props.user) || _("Dropbox")
                    })
                }, t._renderButtons = function() {
                    return r.div({
                        className: "u-mar-top-m clearfix"
                    }, r.div({
                        className: "u-l-fr"
                    }, r.button({
                        className: "c-btn c-btn--primary",
                        disabled: !t._isValid(),
                        onClick: function(e) {
                            return "function" == typeof e.nativeEvent.preventDefault && e.nativeEvent.preventDefault(), t.props.onSubmit(t.state.folderPath, t._setError)
                        }
                    }, _("Next"))), r.div({
                        className: "u-l-fl"
                    }, r.button({
                        className: "button-as-link",
                        style: {
                            lineHeight: "32px"
                        },
                        onClick: function(e) {
                            return "function" == typeof e.nativeEvent.preventDefault && e.nativeEvent.preventDefault(), s.Modal.close(), "function" == typeof t.props.onBack ? t.props.onBack() : void 0
                        }
                    }, _("Back"))))
                }, t.renderSpectrumPrimaryButton = function() {
                    return n.default.createElement("div", {
                        className: "u-l-fr"
                    }, n.default.createElement(d.Button, {
                        variant: "primary",
                        disabled: !t._isValid(),
                        onClick: t.onSubmit
                    }, _("Next")))
                }, t.onSubmit = function(e) {
                    return "function" == typeof e.nativeEvent.preventDefault && e.nativeEvent.preventDefault(), t.props.onSubmit(t.state.folderPath, t._setError)
                }, t.onBack = function() {
                    return s.Modal.close(), t.props.onBack && t.props.onBack()
                }, t._setFolderPath = function(e) {
                    return t.setState({
                        folderPath: e,
                        errorMsg: void 0
                    })
                }, t._setError = function(e) {
                    return t.setState({
                        errorMsg: m(null != e ? e.path : void 0, function(e) {
                            return e.message_text
                        })
                    })
                }, t._isValid = function() {
                    return null != t.state.folderPath && null == t.state.errorMsg
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return n.default.createElement(u.UtilityModal, {
                    primaryAction: this.renderSpectrumPrimaryButton,
                    link: _("Back"),
                    onLink: this.onBack,
                    onRequestClose: this.onModalCloseClick,
                    overlayClassName: "existing-shared-folder-wizard__overlay",
                    overlayClickClose: !0,
                    ariaLabel: _("Shared Existing Folder Modal"),
                    className: "existing-shared-folder-wizard",
                    open: this.state.open,
                    displayCloseButton: !0,
                    title: this.getTitle(this.props.user.role)
                }, this.renderSpectrumContent())
            }, t.displayName = "ShareExistingFolderWizardModalNoCss", t
        })(n.default.Component);
    t.ShareExistingFolderWizardModal = i.requireCssWithComponent(p, ["/static/css/sharing/wizard_modals-vflx-yihK.css"])
}), define("modules/clean/sharing/wizard/wizard_modals", ["require", "exports", "tslib", "react", "modules/clean/css", "modules/clean/account/email", "modules/clean/account/email_verify_reasons", "modules/clean/analytics", "modules/clean/legacy_pyxl_controllers/ajax_form", "modules/clean/react/modal", "modules/clean/sharing/api", "modules/clean/sharing/constants", "modules/clean/sharing/share_modal_util", "modules/clean/sharing/ui_notifications_util", "modules/clean/sharing/wizard/share_a_folder_wizard_modal", "modules/clean/sharing/wizard/share_existing_folder_wizard_modal", "modules/clean/sharing/async_share_modal_util"], function(e, t, o, n, r, i, s, a, c, l, u, d, m, _, p, g, h) {
    "use strict";

    function f(e) {
        if (i.EmailVerification.get_for_user(e).verified_or_show(s.SHARE_FOLDER)) {
            r.require_css("/static/css/scooter/scooter-scoped-vflFpCY2P.css");
            var t = m.generateModalSessionId();
            return a.SharingExperimentsLogger.log(e.id, "SIMPLIFIED_WIZARD_UI::BEGIN_SHARE_A_FOLDER_WIZARD", {
                modalSessionId: t
            }), e.is_cdm_member ? h.asyncShowNewFolderShareModal(e, t, e.cdm_tmf_path) : E(e, t), t
        }
    }

    function E(e, t) {
        var o = function(o) {
            return null != t && a.SharingExperimentsLogger.log(e.id, "SIMPLIFIED_WIZARD_UI::SUBMIT_SHARE_A_FOLDER_WIZARD", {
                target: o,
                modalSessionId: t
            }), "new-folder" === o ? h.asyncShowNewFolderShareModal(e, t, e.cdm_tmf_path) : "existing-folder" === o ? y(e, function() {
                return f(e)
            }, t) : void 0
        };
        l.Modal.showInstance(n.default.createElement(p.ShareAFolderWizardModal, {
            user: e,
            onSubmit: o
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r), s = o.__importStar(s), c = o.__importDefault(c);
    var S = function(e, t, o, n) {
        var r = function() {
                return h.asyncShowShareModal(e, {
                    fqPath: t,
                    isFolder: !0,
                    exists: !0,
                    origin: d.SHARE_ACTION_ORIGIN_TYPE.WIZARD,
                    modalSessionId: null != n ? n : void 0
                })
            },
            i = function(e) {
                var t = c.default.extract_errors(e.responseText);
                return t === !1 ? void 0 : "string" == typeof t ? _.sharingNotificationError(t) : "function" == typeof o ? o(t) : void 0
            };
        return new u.SharingApi(e).validate_shareable_existing_sf_path(t, r, i), Promise.resolve(!0)
    };
    t.shareExistingFolder = S;
    var y = function(e, t, o) {
        return null != o && a.SharingExperimentsLogger.log(e.id, "SIMPLIFIED_WIZARD_UI::BEGIN_SHARE_EXISTING_FOLDER_WIZARD", {
            modalSessionId: o
        }), l.Modal.showInstance(n.default.createElement(g.ShareExistingFolderWizardModal, {
            user: e,
            onBack: t,
            onSubmit: function(t, n) {
                var r = function() {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    return null != o && a.SharingExperimentsLogger.log(e.id, "SIMPLIFIED_WIZARD_UI::SUBMIT_SHARE_EXISTING_FOLDER_WIZARD_ERROR", {
                        modalSessionId: o
                    }), n.apply(void 0, Array.from(t || []))
                };
                return null != o && a.SharingExperimentsLogger.log(e.id, "SIMPLIFIED_WIZARD_UI::SUBMIT_SHARE_EXISTING_FOLDER_WIZARD", {
                    modalSessionId: o
                }), S(e, t, r)
            }
        }))
    };
    t.showShareAFolderWizardModal = f
});
//# sourceMappingURL=pkg-home-post-tti.min.js-vflpH7WAh.map