define("modules/clean/react/home/recents/recent_activity_starred", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/starred/id_type_pair"], function(e, t, r, a, o) {
    "use strict";

    function s(e) {
        return e.resource_id && e.id_type ? {
            id: e.resource_id,
            type: e.id_type
        } : null
    }

    function i(e) {
        var t = {};
        return e.forEach(function(e) {
            var r = s(e);
            r && (t[o.idTypePairToString(r)] = r)
        }), a.values(t)
    }

    function n(e) {
        return e.resourceId && e.idType ? {
            id: e.resourceId,
            type: e.idType
        } : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), t.getIdTypePair = s, t.getIdTypePairsByRecentActivityItems = i, t.getIdTypePairFromRecentItem = n
}), define("modules/clean/react/home/starred/actions", ["require", "exports", "modules/clean/flux/dispatcher", "modules/clean/react/home/starred/constants", "modules/clean/react/home/starred/models/starred_item", "modules/clean/react/starred/model", "modules/core/exception"], function(e, t, r, a, o, s, i) {
    "use strict";

    function n(e, t) {
        return r.Dispatcher.dispatch({
            type: a.StarredResourceActionTypes.LOAD_FAILURE,
            error: t,
            loadingType: e
        }), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.onRetrieveStarredError = n;
    var c = (function() {
        function e() {}
        return e.handleRetrieveStarredPayload = function(e, t, c) {
            if ("success" !== c.status) throw n(t, c.status);
            if (!c.items || void 0 === c.has_more) throw i.reportStack("Home starred items request returned success without items or hasMore", {
                severity: i.SEVERITY.NONCRITICAL
            }), n(t, new Error("Invalid server response for Starred getItems"));
            var d = c.items.map(o.starredItemFromJson),
                l = s.statusResultsToStarredStatuses(d.map(o.starredItemModelToStarredStatus));
            r.Dispatcher.dispatch({
                type: a.StarredResourceActionTypes.LOAD_SUCCESS,
                hasMore: c.has_more,
                items: d,
                starredStatuses: l,
                loadingType: t
            }), e().then(function(e) {
                return (0, e.getStarredStatusMetadata)(l)
            })
        }, e
    })();
    t.StarredActions = c
}), define("modules/clean/react/home/starred/conditional_interface", ["require", "exports", "modules/clean/react/home/starred/starred_resource_store", "modules/clean/react/starred/star", "modules/clean/react/home/recents/recent_activity_starred", "modules/clean/react/home/starred/starred_view", "modules/clean/react/starred/id_type_pair"], function(e, t, r, a, o, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getStarredResourceStore = r.getStarredResourceStore, t.Star = a.Star, t.getIdTypePairFromRecentItem = o.getIdTypePairFromRecentItem, t.StarredView = s.StarredView, t.RootComponent = s.RootComponent, t.idTypePairToString = i.idTypePairToString
}), define("modules/clean/react/home/starred/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.StarredResourceActionTypes = {
        LOADING_INITIAL: "HOME_STARRED_LOADING_INITIAL",
        LOADING_ALL: "HOME_STARRED_LOADING_ALL",
        LOAD_SUCCESS: "HOME_STARRED_LOAD_SUCCESS",
        LOAD_FAILURE: "HOME_STARRED_LOAD_FAILURE",
        HIDE_EMPTY_SECTION: "HOME_STARRED_HIDE_EMPTY_SECTION"
    }, t.NOT_PAPER_USER_ERROR = "not_paper_user", t.StarredLoggingTypes = {
        CLICK_STAR: "click_star",
        CLICK_UNSTAR: "click_unstar"
    }, t.StarredLoadingTypes = {
        INITIAL: "INITIAL",
        ALL: "ALL"
    }, t.LOAD_ALL_ITEMS_COUNT = 1e3, t.INITIAL_STARRED_ITEMS_LIMIT = 5
}), define("modules/clean/react/home/starred/models/starred_item", ["require", "exports", "modules/clean/react/home/constants"], function(e, t, r) {
    "use strict";

    function a(e) {
        return {
            title: e.title,
            resourceId: e.resource_id,
            idType: e.id_type,
            displayType: e.display_type,
            url: e.url,
            details: o(e.display_type, e.details)
        }
    }

    function o(e, t) {
        var a = r.DisplayTypeToResourceType[e];
        if (a === r.FILE_RESOURCE_TYPE) {
            var o = t;
            return {
                fqPath: o.fq_path
            }
        }
        if (a === r.FOLDER_RESOURCE_TYPE) {
            var o = t;
            return {
                fqPath: o.fq_path,
                targetNsId: o.target_ns_id,
                isTeamMemberFolder: o.is_team_member_folder
            }
        }
        if (a === r.EXTERNAL_RESOURCE_TYPE) {
            var o = t;
            return {
                favicon: o.favicon
            }
        }
        return {}
    }

    function s(e) {
        return {
            id: e.resourceId,
            type: e.idType,
            is_starred: !0
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.starredItemFromJson = a, t.detailsFromJson = o, t.starredItemModelToStarredStatus = s
}), define("modules/clean/react/home/starred/starred_item", ["require", "exports", "tslib", "external/classnames", "spectrum/overflow_button", "spectrum/popover", "react", "modules/core/i18n", "modules/clean/react/home/store", "modules/clean/react/home/util/navigation", "modules/clean/react/home/util/paper_utils", "modules/clean/react/home/util/resource_icon", "modules/clean/sharing/constants", "modules/clean/react/starred/actions", "modules/clean/react/starred/star", "modules/clean/react/starred/constants", "modules/clean/react/starred/id_type_pair", "modules/clean/react/home/util/logging/activity_logger", "modules/clean/react/home/constants", "modules/clean/undo", "modules/clean/user_education/react/user_education_effect", "modules/clean/static_urls", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/util/rendering_utils", "modules/clean/react/home/util/post_tti_components"], function(e, t, r, a, o, s, i, n, c, d, l, u, p, m, _, h, S, f, g, y, T, L, I, v, E) {
    "use strict";
    var R;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), i = r.__importDefault(i), y = r.__importStar(y);
    var A = (R = {}, R[g.FILE_RESOURCE_TYPE] = !0, R[g.FOLDER_RESOURCE_TYPE] = !0, R[g.PAPER_DOCUMENT_RESOURCE_TYPE] = !0, R),
        C = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.getLoggingInfo = function() {
                    var e = g.DisplayTypeToResourceType[r.props.item.displayType];
                    return {
                        resourceId: r.props.item.resourceId,
                        resourceType: e,
                        position: r.props.position
                    }
                }, r.onClick = function(e) {
                    if (!r.state.isRenaming) {
                        e.stopPropagation(), e.preventDefault();
                        if (g.DisplayTypeToResourceType[r.props.item.displayType] !== g.FILE_RESOURCE_TYPE || d.isMetaKeyPressed(e)) {
                            var t = r.props.item.displayType === g.EXTERNAL_RESOURCE_TYPE ? d.NavigationMethod.UNSAFE_NEW_TAB : d.NavigationMethod.NEW_TAB;
                            d.logAndNavigate(r.props.item.url, r.logOpen, t)
                        } else e.preventDefault(), I.waitForHomeTTI().then(function(e) {
                            return e.openInFileViewer(S.idTypePairToString({
                                type: r.props.item.idType,
                                id: r.props.item.resourceId
                            }), r.logOpen)
                        })
                    }
                }, r.onStarClick = function(e) {
                    if (!e) {
                        var t = r.getLoggingInfo(),
                            a = t.resourceId,
                            o = t.resourceType,
                            s = t.position,
                            i = r.props.item,
                            d = n._("Removed from Starred."),
                            l = function(e) {
                                var t = e.itemToStar,
                                    i = g.DisplayTypeToResourceType[r.props.item.displayType],
                                    n = i === g.EXTERNAL_RESOURCE_TYPE;
                                m.StarredActions.update(c.getHomeStore().getRole(), t.resourceId, t.idType, !0, n ? t.title : void 0, n ? t.details.favicon : void 0), f.homeActivityLogger.logUndoUnstarItem(a, o, s)
                            };
                        y.notifyWithUndo(d, {
                            itemToStar: i
                        }, l, 10)
                    }
                }, r.logEvent = function(e) {
                    var t = r.getLoggingInfo();
                    return e(t.resourceId, t.resourceType, t.position)
                }, r.logOpen = function() {
                    return r.logEvent(f.homeActivityLogger.logOpenStarredItem)
                }, r.logClickMenu = function() {
                    return r.logEvent(f.homeActivityLogger.logClickStarOverflowMenu)
                }, r.logClickShare = function() {
                    return r.logEvent(f.homeActivityLogger.logClickStarOverflowShare)
                }, r.handleShare = function(e) {
                    return function(t) {
                        if (t.preventDefault(), r.props.item.displayType === g.PAPER_DOCUMENT_RESOURCE_TYPE) return void l.sharePaperDoc(r.props.item.url, r.logClickShare);
                        r.logClickShare();
                        var a = g.DisplayTypeToResourceType[r.props.item.displayType] === g.FOLDER_RESOURCE_TYPE,
                            o = a ? r.props.item.details.targetNsId : null,
                            s = r.props.item.details.fqPath;
                        I.waitForHomeTTI().then(function(t) {
                            e ? t.createAutoShareLink(r.props.user, s) : t.asyncShowShareModal(r.props.user, {
                                fqPath: s,
                                isFolder: a,
                                origin: p.SHARE_ACTION_ORIGIN_TYPE.STARRED,
                                targetNsId: o
                            })
                        })
                    }
                }, r.handleRenameInputChange = function(e) {
                    r.setState({
                        newName: e.target.value
                    })
                }, r.handleRenameStart = function(e) {
                    r.setState({
                        isRenaming: !0,
                        newName: r.props.item.title
                    })
                }, r.handleRenameSubmit = function(e) {
                    e.preventDefault();
                    var t = r.props.item,
                        a = t.title,
                        o = r.state.newName;
                    void 0 !== o && null !== o && (r.setState({
                        isRenaming: !1,
                        newName: ""
                    }), m.StarredActions.renameExternalResource(t.resourceId, a, o))
                }, r.handleFaviconError = function(e) {
                    e.currentTarget.src = L.static_url("/static/images/home/generic-website-favicon-vfl8fV8SM.png")
                }, r.stopEvent = function(e) {
                    e.stopPropagation(), e.preventDefault()
                }, r.handleSelection = function(e, t) {
                    e(t)
                }, r.getIcon = function() {
                    if (g.DisplayTypeToResourceType[r.props.item.displayType] === g.EXTERNAL_RESOURCE_TYPE) {
                        var e = r.props.item.details.favicon;
                        return (void 0 === e || null === e || e.startsWith("http:")) && (e = L.static_url("/static/images/home/generic-website-favicon-vfl8fV8SM.png")), i.default.createElement("img", {
                            key: "icon",
                            src: e,
                            alt: n._("starred webpage favicon"),
                            onError: r.handleFaviconError,
                            className: "starred-item__external-favicon"
                        })
                    }
                    return i.default.createElement(u.HomeResourceIcon, {
                        key: "icon",
                        className: "starred-item__file-icon",
                        displayType: r.props.item.displayType,
                        fileName: r.props.item.title
                    })
                }, r.state = {
                    isRenaming: !1,
                    newName: r.props.item.title
                }, r
            }
            return r.__extends(t, e), t.prototype.renderDropdown = function() {
                var e = [],
                    t = g.DisplayTypeToResourceType[this.props.item.displayType],
                    c = this.props.item.details.isTeamMemberFolder;
                t in A && !c && e.push(i.default.createElement(s.PopoverContentItem, {
                    className: "starred-item__context-menu-item starred-item__context-menu-item--share",
                    key: "share",
                    value: this.handleShare()
                }, n._("Share"))), t === g.EXTERNAL_RESOURCE_TYPE && e.push(i.default.createElement(s.PopoverContentItem, {
                    className: "starred-item__context-menu-item",
                    key: "rename",
                    value: this.handleRenameStart
                }, n._("Rename")));
                var d = {
                        "aria-label": n._("More actions"),
                        onDoubleClick: function(e) {
                            e.stopPropagation()
                        }
                    },
                    l = i.default.createElement(o.OverflowButton, r.__assign({
                        tagName: "span",
                        className: "starred-item__context-menu-button",
                        "aria-label": n._("More Actions")
                    }, d));
                return i.default.createElement("div", {
                    key: "dropDown",
                    onClick: this.stopEvent,
                    className: a.default("starred-item__more-actions", {
                        "starred-item__context-menu-emtpy": !e.length
                    })
                }, i.default.createElement(s.Popover, {
                    onSelection: this.handleSelection,
                    onMenuToggle: this.logClickMenu
                }, i.default.createElement(s.PopoverTrigger, {
                    className: "starred-item__context-menu-trigger"
                }, l), i.default.createElement(s.PopoverContent, {
                    attachment: "right"
                }, e)))
            }, t.prototype.getStarredItemName = function() {
                if (this.state.isRenaming) return i.default.createElement("form", {
                    key: "name",
                    className: "starred-item__rename-form",
                    onSubmit: this.handleRenameSubmit
                }, i.default.createElement("input", {
                    className: "rename-input",
                    type: "text",
                    value: this.state.newName,
                    onChange: this.handleRenameInputChange
                }), i.default.createElement("input", {
                    type: "submit",
                    value: "OK"
                }));
                var e = this.props.item,
                    t = e.url,
                    r = e.title;
                return i.default.createElement("a", {
                    key: "name",
                    onClick: this.onClick,
                    href: t,
                    className: "starred-item__title"
                }, v.truncateTitle(r))
            }, t.prototype.render = function() {
                var e = {
                    "starred-item": !0,
                    "starred-item--last-in-row": this.props.lastInRow,
                    "starred-item--in-last-row": this.props.inLastRow
                };
                return i.default.createElement("li", {
                    onClick: this.onClick,
                    className: a.default(e)
                }, this.getIcon(), i.default.createElement("div", {
                    className: "starred-item__content",
                    key: "userEducation"
                }, i.default.createElement(T.UserEducationEffect, {
                    containerName: "StarredItem",
                    name: "starred-item-" + String(this.props.position)
                }), this.getStarredItemName(), i.default.createElement("div", {
                    className: "starred-item__star",
                    key: "star"
                }, i.default.createElement(_.Star, {
                    user: c.getHomeStore().getUser(),
                    id: this.props.item.resourceId,
                    idType: this.props.item.idType,
                    itemName: this.props.item.title,
                    onStarClick: this.onStarClick,
                    source: h.StarredSource.HOME_STARRED
                }))), i.default.createElement("div", {
                    className: "starred-item__actions"
                }, i.default.createElement("div", {
                    className: "starred-item__actions-inner"
                }, i.default.createElement(E.PostTTIStarredItemFileActions, {
                    starredItem: this.props.item,
                    user: this.props.user
                }), this.renderDropdown())))
            }, t.displayName = "StarredItem", t
        })(i.default.PureComponent);
    t.StarredItem = C
}), define("modules/clean/react/home/starred/starred_item_list", ["require", "exports", "tslib", "react", "react-dom", "modules/clean/react/home/starred/starred_empty_state", "modules/clean/react/home/util/logging/activity_logger", "modules/clean/react/home/starred/starred_item", "modules/clean/react/home/post_tti/api", "modules/clean/react/home/util/spinner", "modules/clean/react/home/util/show_hide_link", "modules/clean/react/home/starred/constants", "modules/clean/react/home/store"], function(e, t, r, a, o, s, i, n, c, d, l, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), o = r.__importDefault(o);
    var m = (function(e) {
        function t(t) {
            var a = e.call(this, t) || this;
            return a.toggleShowAll = function() {
                return r.__awaiter(a, void 0, void 0, function() {
                    var e, t, a, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return e = !this.state.showAll, i.homeActivityLogger.logClickShowAll("starred", e), this.setState({
                                    showAll: e
                                }), e && this.props.hasMore ? [4, c.waitForHomeTTI()] : [3, 2];
                            case 1:
                                t = r.sent().loadAllStarredItems, t(), r.label = 2;
                            case 2:
                                return a = o.default.findDOMNode(this.refs.lastUnhiddenStar), a && (s = a.querySelector("a"), s && s.focus()), [2]
                        }
                    })
                })
            }, a.state = {
                showAll: !1
            }, a
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.canShowSpinner,
                r = e.hasLoadedInitial,
                o = e.itemModels,
                i = this.state.showAll,
                c = p.getUser(),
                m = Math.max(o.length - u.INITIAL_STARRED_ITEMS_LIMIT, 0),
                _ = m && !i ? o.slice(0, u.INITIAL_STARRED_ITEMS_LIMIT) : o,
                h = t && (i || !r && !o.length);
            return a.default.createElement("div", {
                className: "starred"
            }, a.default.createElement("div", {
                className: "starred-container"
            }, _.length ? a.default.createElement("ul", {
                className: "starred-list"
            }, _.map(function(e, t) {
                return a.default.createElement(n.StarredItem, {
                    key: e.resourceId,
                    item: e,
                    user: c,
                    position: t,
                    ref: t === u.INITIAL_STARRED_ITEMS_LIMIT - 1 ? "lastUnhiddenStar" : void 0
                })
            })) : a.default.createElement(s.StarredEmptyState, null), h ? a.default.createElement(d.HomeSpinner, null) : null, m ? a.default.createElement(l.ShowHideLink, {
                onClick: this.toggleShowAll,
                isExpanded: i,
                hiddenItemCount: m,
                canLoadMore: !1
            }) : null))
        }, t.displayName = "StarredItemList", t
    })(a.default.PureComponent);
    t.StarredItemList = m
}), define("modules/clean/react/home/starred/starred_resource_store", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/home/constants", "modules/clean/react/home/starred/constants", "modules/clean/react/starred/constants", "modules/clean/react/home/starred/actions", "modules/clean/react/starred/store", "modules/clean/react/home/util/logging/availability_logger", "modules/clean/flux/flux_store", "modules/clean/react/home/post_tti/api"], function(e, t, r, a, o, s, i, n, c, d, l, u) {
    "use strict";

    function p() {
        return null === _ && (_ = new m), _
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var m = (function(e) {
        function t() {
            var t = e.call(this, a.Dispatcher) || this;
            return t.orderedIds = [], t.itemsById = {}, t.loadingState = o.LoadingStates.LOADING, t.hasMore = !0, t.hasLoadedInitial = !1, t.hasLoadedAll = !1, t.isPaperUser = !0, d.getHomeAvailabilityLogger().handlePrefetch(o.HomePrefetchTypes.RETRIEVE_STARRED, function(e) {
                return n.StarredActions.handleRetrieveStarredPayload(u.waitForHomeTTI, s.StarredResourceActionTypes.LOADING_INITIAL, e)
            }), t
        }
        return r.__extends(t, e), t.prototype.getStarredStore = function() {
            return c.StarredStore
        }, t.prototype.clearPresentableItemsCache = function() {
            this.presentableItemsCache = null
        }, t.prototype.getItems = function() {
            var e = this;
            return this.presentableItemsCache || (this.presentableItemsCache = this.orderedIds.map(function(t) {
                return e.itemsById[t]
            }).filter(function(t) {
                var r = {
                        id: t.resourceId,
                        type: t.idType
                    },
                    a = e.getStarredStore().getLoadingState(r),
                    o = e.getStarredStore().getIsStarred(r);
                return a === i.StarredLoadingState.LOADING || o
            })), this.presentableItemsCache
        }, t.prototype.getItem = function(e) {
            return this.itemsById[e]
        }, t.prototype.getLoadingState = function() {
            return this.loadingState
        }, t.prototype.getHasMore = function() {
            return this.hasMore
        }, t.prototype.getHasLoadedInitial = function() {
            return this.hasLoadedInitial
        }, t.prototype.getHasLoadedAll = function() {
            return this.hasLoadedAll
        }, t.prototype.getIsPaperUser = function() {
            return this.isPaperUser
        }, t.prototype.onItemsLoading = function() {
            this.loadingState = o.LoadingStates.LOADING
        }, t.prototype.onItemsLoadSuccess = function(e, t) {
            var r = this;
            e.forEach(function(e) {
                r.itemsById[e.resourceId] = e
            }), this.loadingState = o.LoadingStates.SUCCESS, this.orderedIds = e.map(function(e) {
                return e.resourceId
            }), this.hasMore = t, e.length && this.clearPresentableItemsCache()
        }, t.prototype.onItemsLoadFailure = function(e) {
            this.loadingState = o.LoadingStates.FAILURE, e && e === s.NOT_PAPER_USER_ERROR && (this.isPaperUser = !1)
        }, t.prototype.onItemsLoadComplete = function(e, t) {
            e !== s.StarredLoadingTypes.INITIAL && t || (this.hasLoadedInitial = !0), e !== s.StarredLoadingTypes.ALL && t || (this.hasLoadedAll = !0)
        }, t.prototype.onStatusChange = function() {
            u.waitForHomeTTI().then(function(e) {
                return (0, e.loadAllStarredItems)()
            }), this.clearPresentableItemsCache()
        }, t.prototype.onRenameExternalResource = function(e, t) {
            var a = this.getItem(e),
                o = r.__assign({}, a, {
                    title: t
                });
            this.itemsById[e] = o
        }, t.prototype.__onDispatch = function(e) {
            var t = e.action;
            switch (t.type) {
                case s.StarredResourceActionTypes.LOADING_INITIAL:
                case s.StarredResourceActionTypes.LOADING_ALL:
                    this.onItemsLoading(), this.__emitChange();
                    break;
                case s.StarredResourceActionTypes.LOAD_SUCCESS:
                    this.onItemsLoadSuccess(t.items, t.hasMore), this.onItemsLoadComplete(t.loadingType, t.hasMore), this.__emitChange();
                    break;
                case s.StarredResourceActionTypes.LOAD_FAILURE:
                    this.onItemsLoadFailure(t.error), this.onItemsLoadComplete(t.loadingType, !0), this.__emitChange();
                    break;
                case i.StarredActionTypes.LOADING:
                    this.clearPresentableItemsCache(), this.__emitChange();
                    break;
                case i.StarredActionTypes.SET_STATUS:
                    this.onStatusChange(), this.__emitChange();
                    break;
                case i.StarredActionTypes.RENAME_EXTERNAL_RESOURCE:
                    this.onRenameExternalResource(t.id, t.name), this.__emitChange()
            }
        }, t
    })(l.FluxStore);
    t.PrivateStarredResourceStoreClass = m;
    var _ = null;
    t.getStarredResourceStore = p
}), define("modules/clean/react/home/starred/starred_view", ["require", "exports", "tslib", "react", "modules/clean/react/home/util/logging/timing_logger", "modules/clean/react/home/util/logging/timing_component", "modules/clean/react/home/constants", "modules/clean/react/home/starred/starred_and_tasks_layout", "modules/clean/react/home/util/logging/activity_logger", "modules/clean/react/home/starred/starred_resource_store", "modules/clean/react/home/starred/constants", "modules/clean/react/home/starred/starred_item_list"], function(e, t, r, a, o, s, i, n, c, d, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var p = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.onStoreUpdate = function() {
                return r.setState(r.getStateFromStore())
            }, r.removeStoreListener = d.getStarredResourceStore().addListener(r.onStoreUpdate), r.state = r.getStateFromStore(), r
        }
        return r.__extends(t, e), t.prototype.getStateFromStore = function() {
            var e = d.getStarredResourceStore(),
                t = e.getLoadingState(),
                r = e.getItems(),
                a = e.getHasMore(),
                s = e.getHasLoadedInitial();
            if (t === i.LoadingStates.SUCCESS) {
                if (o.homeTimingLogger.logTTData(i.HomeSections.STARRED)) {
                    var n = r.length > l.INITIAL_STARRED_ITEMS_LIMIT;
                    c.homeActivityLogger.logStarredShown(r.length, n, a)
                }
            }
            return {
                itemModels: r,
                hasLoadedInitial: s,
                hasMore: a,
                canShowSpinner: t === i.LoadingStates.LOADING && !e.getHasLoadedAll()
            }
        }, t.prototype.componentWillUnmount = function() {
            this.removeStoreListener && this.removeStoreListener()
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.canRenderItems,
                o = e.isHiddenByUser;
            return t ? a.default.createElement(n.StarredAndTasksLayout, r.__assign({
                isHiddenByUser: o,
                starredComponent: u.StarredItemList
            }, this.state)) : null
        }, t.displayName = "StarredView", t
    })(a.default.PureComponent);
    t.StarredView = s.timingComponent(p, i.HomeSections.STARRED), t.RootComponent = function(e) {
        return a.default.createElement(t.StarredView, r.__assign({}, e))
    }
}), define("modules/clean/react/home/util/paper_utils", ["require", "exports", "modules/clean/react/home/util/navigation"], function(e, t, r) {
    "use strict";

    function a(e, t) {
        r.logAndNavigate(e + "?openSharing=1", t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sharePaperDoc = a
}), define("modules/clean/react/home/util/rendering_utils", ["require", "exports", "modules/clean/em_string", "modules/core/i18n"], function(e, t, r, a) {
    "use strict";

    function o(e) {
        return r.Emstring.em_snippet(e.trim().length ? e : s, 30)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = a._("Untitled");
    t.truncateTitle = o
}), define("modules/clean/react/starred/actions", ["require", "exports", "tslib", "modules/clean/flux/dispatcher", "modules/clean/react/starred/constants", "modules/clean/react/starred/api", "modules/clean/react/starred/model"], function(e, t, r, a, o, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), s = r.__importStar(s);
    var n = (function() {
        function e() {}
        return e.fetchStatuses = function(t, r, n) {
            return void 0 === n && (n = !1), n || e.markAsLoading(r), s.fetchStatuses(t, r).then(function(e) {
                a.Dispatcher.dispatch({
                    type: o.StarredActionTypes.SET_STATUS,
                    starredStatuses: i.statusResultsToStarredStatuses(e)
                })
            }).catch(function(e) {
                return a.Dispatcher.dispatch({
                    type: o.StarredActionTypes.LOAD_FAILURE,
                    idTypePairs: r
                }), Promise.reject(e)
            })
        }, e.markAsLoading = function(e) {
            a.Dispatcher.dispatch({
                type: o.StarredActionTypes.LOADING,
                idTypePairs: e
            })
        }, e.renameExternalResource = function(e, t, r) {
            a.Dispatcher.dispatch({
                type: o.StarredActionTypes.RENAME_EXTERNAL_RESOURCE,
                id: e,
                name: r
            });
            var i = s.updateExternalResource(e, r, !0);
            return i.catch(function(r) {
                throw a.Dispatcher.dispatch({
                    type: o.StarredActionTypes.RENAME_EXTERNAL_RESOURCE,
                    id: e,
                    name: t
                }), r
            }), i
        }, e.update = function(e, t, r, i, n, c) {
            var d = {
                id: t,
                type: r
            };
            a.Dispatcher.dispatch({
                type: o.StarredActionTypes.LOADING,
                idTypePairs: [d]
            });
            var l, u;
            if (r === o.IdTypes.EXTERNAL_RESOURCE_ID) {
                if (null === n || void 0 === n) throw new TypeError("Name of external resource cannot be null/undefined");
                u = s.updateExternalResource(t, n, i, c)
            } else u = s.update(e, t, r, i);
            return u.then(function() {
                return l = i
            }).catch(function(e) {
                throw l = !i, e
            }).finally(function() {
                a.Dispatcher.dispatch({
                    type: o.StarredActionTypes.SET_STATUS,
                    starredStatuses: [{
                        idTypePair: {
                            id: t,
                            type: r
                        },
                        starred: l
                    }]
                });
                var e = {
                    url: t,
                    name: n,
                    isStarred: i
                };
                window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage(o.StarExtensionId_PROD, e)
            }), u
        }, e
    })();
    t.StarredActions = n
}), define("modules/clean/react/starred/api", ["require", "exports", "modules/clean/ajax"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function(e, t, a) {
        return new Promise(function(o, s) {
            (a ? r.SilentBackgroundRequest : r.WebRequest)({
                url: e,
                type: "POST",
                dataType: "json",
                data: t,
                success: o,
                error: function(e, t, r) {
                    return s(Error("error: " + r + ", status: " + t))
                }
            })
        })
    };
    t.fetchStatuses = function(e, t) {
        return a("/starred/get_status", {
            role: e,
            resources_json: JSON.stringify(t)
        }, !0)
    }, t.update = function(e, t, r, o) {
        return a("/starred/update", {
            role: e,
            resource_id: t,
            id_type: r,
            is_starred: o
        })
    }, t.updateExternalResource = function(e, t, r, o) {
        return a("/starred/update_external_resource", {
            url: e,
            name: t,
            is_starred: r,
            favicon_url: o
        })
    }
}), define("modules/clean/react/starred/model", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return e.map(function(e) {
            var t = e.id,
                r = e.type,
                a = e.is_starred,
                o = e.canonical_id,
                s = e.canonical_id_type,
                i = {
                    idTypePair: {
                        id: t,
                        type: r
                    },
                    starred: a
                };
            return o && s && (i.canonicalIdTypePair = {
                id: o,
                type: s
            }), i
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.statusResultsToStarredStatuses = r
}), define("modules/clean/react/starred/star", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/starred/starred_activity_logger", "modules/clean/react/css", "modules/clean/react/starred/actions", "modules/clean/react/starred/store", "modules/clean/react/title_bubble", "modules/core/i18n", "modules/core/notify", "spectrum/icon_star", "spectrum/icon_star_v2"], function(e, t, r, a, o, s, i, n, c, d, l, u, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), o = r.__importDefault(o);
    var _ = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.onStoreUpdate = function() {
                var e = r.getStateFromStore();
                r.setState(e)
            }, r.onClick = function(e) {
                if (e.stopPropagation(), e.preventDefault(), !r.state.isLoading) {
                    var t = !r.state.isStarred;
                    s.starredActivityLogger.logClick(r.props.user, r.props.id, r.props.idType, r.props.source, t), r.props.onStarClick && r.props.onStarClick(t), n.StarredActions.update(r.props.user.role, r.props.id, r.props.idType, t, r.props.itemName).catch(function(e) {
                        var a;
                        a = r.props.itemName ? t ? l._("There was a problem starring %(item_name)s").format({
                            item_name: r.props.itemName
                        }) : l._("There was a problem unstarring %(item_name)s").format({
                            item_name: r.props.itemName
                        }) : t ? l._("There was a problem starring your selection") : l._("There was a problem unstarring your selection"), u.Notify.error(a)
                    })
                }
            }, r.state = r.getStateFromStore(), r.removeStoreListener = c.StarredStore.addListener(r.onStoreUpdate), r
        }
        return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
            this.removeStoreListener && this.removeStoreListener()
        }, t.prototype.componentWillReceiveProps = function(e) {
            this.props.id === e.id && this.props.idType === e.idType || this.setState(this.getStateFromStore(e))
        }, t.prototype.getStateFromStore = function(e) {
            void 0 === e && (e = this.props);
            var t = {
                id: e.id,
                type: e.idType
            };
            return {
                isLoading: c.StarredStore.getIsLoading(t),
                isStarred: c.StarredStore.getIsStarred(t)
            }
        }, t.prototype.getTooltipContent = function() {
            return this.props.isReadOnly ? this.state.isStarred ? l._("Starred") : null : this.state.isStarred ? l._("Remove from Starred") : l._("Add to Starred")
        }, t.prototype.render = function() {
            if (void 0 === this.state.isStarred) return null;
            if (this.props.isReadOnly && !this.state.isStarred) return null;
            var e = {
                    star__toggle: !0,
                    "star__toggle--starred": this.state.isStarred,
                    "star__toggle--unstarred": !this.state.isStarred && !this.props.isTabbing,
                    "star__toggle--loading": this.state.isLoading
                },
                t = this.getTooltipContent();
            return o.default.createElement(d.TitleBubble, {
                content: t,
                position: this.props.tooltipPosition
            }, o.default.createElement("button", {
                className: a.default(e),
                role: "button",
                "aria-pressed": this.state.isStarred,
                "aria-label": this.props.isReadOnly ? l._("Starred") : l._("Add to starred"),
                onClick: this.onClick,
                onDoubleClick: this.onClick,
                disabled: this.props.isReadOnly,
                tabIndex: this.props.tabIndex
            }, this.props.useNewIcon ? o.default.createElement(m.IconStarV2, {
                active: this.state.isStarred || this.state.isLoading,
                size: 24
            }) : o.default.createElement(p.IconStar, {
                selected: this.state.isStarred || this.state.isLoading
            })))
        }, t.displayName = "Star", t.defaultProps = {
            tooltipPosition: d.TitleBubble.POSITIONS.TOP
        }, t
    })(o.default.PureComponent);
    t.Star = i.requireCssWithComponent(_, ["/static/css/starred/star-vfl3n1wTb.css"])
}), define("modules/clean/react/starred/starred_activity_logger", ["require", "exports", "modules/clean/react/home/api", "modules/clean/react/home/starred/constants", "modules/clean/react/starred/constants", "modules/clean/web_user_action_logger", "modules/clean/web_user_action_events"], function(e, t, r, a, o, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [o.StarredSource.HOME_STARRED, o.StarredSource.HOME_RECENTS],
        c = (function() {
            function e() {}
            return e.prototype.logClick = function(e, t, o, c, d) {
                if ("BROWSE" === c) return Promise.resolve();
                var l = [];
                if (n.includes(c)) {
                    var u = d ? a.StarredLoggingTypes.CLICK_STAR : a.StarredLoggingTypes.CLICK_UNSTAR;
                    l.push(r.logHomeActivity({
                        eventName: u,
                        role: e.role,
                        extra: {
                            resource_id: t,
                            id_type: o
                        }
                    }))
                }
                var p = d ? i.WebUserActionLogEvent.STAR : i.WebUserActionLogEvent.REMOVE_STAR;
                return l.push(s.WebUserActionLog.log(e.id, p, {
                    resource_id: t,
                    id_type: o,
                    role: e.role,
                    source: c
                })), Promise.all(l)
            }, e
        })();
    t.StarredActivityLogger = c, t.starredActivityLogger = new c
}), define("modules/clean/react/starred/store", ["require", "exports", "tslib", "external/lodash", "modules/clean/flux/dispatcher", "modules/clean/flux/flux_store", "modules/clean/react/starred/constants", "modules/clean/react/home/starred/constants", "modules/clean/react/starred/id_type_pair"], function(e, t, r, a, o, s, i, n, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a);
    var d = (function(e) {
        function t() {
            var t = e.call(this, o.Dispatcher) || this;
            return t.idsToLoadingState = {}, t.idsToStarred = {}, t
        }
        return r.__extends(t, e), t.prototype.getLoadingStates = function() {
            return this.idsToLoadingState
        }, t.prototype.hasIdTypePair = function(e) {
            return this.idsToLoadingState.hasOwnProperty(c.idTypePairToString(e))
        }, t.prototype.getLoadingState = function(e) {
            return this.idsToLoadingState[c.idTypePairToString(e)]
        }, t.prototype.getIsStarred = function(e) {
            return this.idsToStarred[c.idTypePairToString(e)]
        }, t.prototype.getAllStarredPairStrings = function() {
            return Object.keys(a.pickBy(this.idsToStarred, function(e) {
                return e
            }))
        }, t.prototype.getIsLoading = function(e) {
            return this.getLoadingState(e) === i.StarredLoadingState.LOADING
        }, t.prototype.onLoading = function(e) {
            var t = {};
            e.forEach(function(e) {
                return t[c.idTypePairToString(e)] = i.StarredLoadingState.LOADING
            }), this.idsToLoadingState = r.__assign({}, this.idsToLoadingState, t)
        }, t.prototype.onSetStatus = function(e) {
            void 0 === e && (e = []);
            var t = {},
                a = {};
            e.forEach(function(e) {
                var r = c.idTypePairToString(e.idTypePair);
                t[r] = i.StarredLoadingState.LOAD_SUCCESS, a[r] = e.starred
            }), this.idsToLoadingState = r.__assign({}, this.idsToLoadingState, t), this.idsToStarred = r.__assign({}, this.idsToStarred, a)
        }, t.prototype.onLoadFailure = function(e) {
            var t = this,
                a = {};
            e.forEach(function(e) {
                var r = c.idTypePairToString(e),
                    o = t.idsToLoadingState[r];
                void 0 !== o && o !== i.StarredLoadingState.LOADING || (a[r] = i.StarredLoadingState.LOAD_FAILED)
            }), this.idsToLoadingState = r.__assign({}, this.idsToLoadingState, a)
        }, t.prototype.__onDispatch = function(e) {
            var t = e.action;
            switch (t.type) {
                case i.StarredActionTypes.LOADING:
                    this.onLoading(t.idTypePairs), this.__emitChange();
                    break;
                case i.StarredActionTypes.SET_STATUS:
                case n.StarredResourceActionTypes.LOAD_SUCCESS:
                    this.onSetStatus(t.starredStatuses), this.__emitChange();
                    break;
                case i.StarredActionTypes.LOAD_FAILURE:
                    this.onLoadFailure(t.idTypePairs), this.__emitChange();
                    break;
                default:
                    return
            }
        }, t
    })(s.FluxStore);
    t._StarredStoreClass = d, t.StarredStore = new d
}), define("spectrum/icon_star/icon_star", ["require", "exports", "tslib", "tslib", "react", "classnames", "spectrum/icon_action", "spectrum/svg_icon_bundle"], function(e, t, r, a, o, s, i, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), o = r.__importStar(o), s = r.__importDefault(s), t.ICONS = i.ICONS, t.IconStar = function(e) {
        var t = e.state,
            r = e.selected,
            c = e.className,
            d = (e.ref, a.__rest(e, ["state", "selected", "className", "ref"])),
            l = r ? i.ICONS.unstar : i.ICONS.star,
            u = s.default("mc-icon-star", {
                "mc-icon-star-selected": r,
                "mc-icon-star-hovered": "hovered" === t,
                "mc-icon-star-active": "active" === t,
                "mc-icon-star-disabled": "disabled" === t
            }, c);
        return o.createElement(n.SvgIconBundle, a.__assign({
            className: u,
            icon: l
        }, d))
    }, t.IconStar.displayName = "IconStar"
}), define("spectrum/icon_star", ["require", "exports", "tslib", "spectrum/icon_star/icon_star"], function(e, t, r, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r.__exportStar(a, t)
}), define("spectrum/icon_star_v2/icon_star_v2", ["require", "exports", "tslib", "tslib", "react", "classnames", "spectrum/util/uuid_generator", "spectrum/svg_icon_bundle"], function(e, t, r, a, o, s, i, n) {
    "use strict";

    function c(e) {
        return '\n<defs>\n<mask id="' + e + '-star-mask">\n<rect fill="#FFFFFF" height="24" width="24"/>\n<path d="M14.467 12.9133L17.249 10.4704L13.5247 10.0874L12 6.75439L10.4753 10.0874L6.75098 10.4704L9.53295 12.9133L8.75592 16.483L12 14.6598L15.244 16.483L14.467 12.9133Z" fill="#000000" class="mask"/>\n</mask>\n<mask id="' + e + '-shine-mask">\n<rect fill="000000" height="24" width="24"/>\n<path class="fill shine-fill" d="M20 8.68629V15.3137L15.3137 20H8.68629L4 15.3137L4 8.68629L8.68629 4L15.3137 4L20 8.68629Z" fill="#FFFFFF"/>\n<path class="mask shine-mask" d="M21 8.27208V15.7279L15.7279 21H8.27208L3 15.7279L3 8.27208L8.27208 3L15.7279 3L21 8.27208Z" fill="#000000"/>\n</mask>\n</defs>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.52516 18.3645L12 16.4117L15.4748 18.3645C15.6967 18.4893 15.9582 18.5296 16.2089 18.4778C16.7699 18.3619 17.1282 17.8248 17.0092 17.2782L16.1769 13.4546L19.1567 10.838C19.3471 10.6708 19.4673 10.441 19.4942 10.1926C19.5544 9.63698 19.1409 9.13899 18.5706 9.08034L14.5814 8.67009L12.9483 5.10005C12.8439 4.87198 12.6567 4.68956 12.4227 4.5879C11.8989 4.36041 11.2851 4.58971 11.0516 5.10005L9.41849 8.67009L5.4293 9.08034C5.17445 9.10655 4.93855 9.22367 4.767 9.40916C4.38312 9.82423 4.41724 10.4639 4.8432 10.838L7.82305 13.4546L6.99075 17.2782C6.93758 17.5225 6.97899 17.7773 7.10703 17.9936C7.39352 18.4776 8.02844 18.6437 8.52516 18.3645ZM17.249 10.4704L14.467 12.9133L15.244 16.483L12 14.6598L8.7559 16.483L9.53293 12.9133L6.75096 10.4704L10.4753 10.0874L12 6.75439L13.5247 10.0874L17.249 10.4704Z"/>\n<path class="star-fill" d="M14.467 12.9133L17.249 10.4704L13.5247 10.0874L12 6.75439L10.4753 10.0874L6.75098 10.4704L9.53295 12.9133L8.75592 16.483L12 14.6598L15.244 16.483L14.467 12.9133Z"/>\n<path mask="url(#' + e + '-shine-mask)" fill-rule="evenodd" clip-rule="evenodd" d="M12.7536 10.1809L19.2477 3.69171L20.3088 4.75197L13.8192 11.2465L22.9998 11.25L23.0003 12.75L13.8192 12.7535L20.3083 19.2477L19.2481 20.3087L12.7536 13.8192L12.75 22.9997L11.25 23.0003L11.2465 13.8192L4.7524 20.3083L3.69134 19.2481L10.1809 12.7535L1.00033 12.75L0.999756 11.25L10.1809 11.2465L3.69174 4.75237L4.752 3.69131L11.2465 10.1809L11.25 1.0003L12.75 0.999725L12.7536 10.1809Z"/>\n'
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), o = r.__importStar(o), s = r.__importDefault(s), t.createIcon = c;
    var d = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.id = i.generateUUID("icon-star-v2"), t
        }
        return a.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.active,
                r = e.size,
                i = void 0 === r ? 24 : r,
                d = a.__rest(e, ["active", "size"]),
                l = i.toString(),
                u = i.toString(),
                p = s.default("mc-icon-star-v2", {
                    "mc-icon-star-v2-active": t
                }),
                m = {
                    attrs: {
                        width: l,
                        height: u,
                        viewBox: "0 0 24 24"
                    },
                    dangerouslySetInnerIconHtml: c(this.id)
                };
            return o.createElement("span", {
                className: p
            }, o.createElement(n.SvgIconBundle, a.__assign({
                icon: m
            }, d)))
        }, t
    })(o.PureComponent);
    t.IconStarV2 = d
}), define("spectrum/icon_star_v2", ["require", "exports", "tslib", "spectrum/icon_star_v2/icon_star_v2"], function(e, t, r, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r.__exportStar(a, t)
});
//# sourceMappingURL=pkg-starred.min.js-vflBHz4Sk.map