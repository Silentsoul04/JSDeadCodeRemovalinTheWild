define("modules/clean/emoji_utils", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        var t = o();
        t.lastIndex = 0;
        var i = t.exec(e);
        if (i && 0 === i.index) {
            var r = i[0];
            if ("‍" === e[r.length]) return "";
            var n = t.exec(e);
            return n && n.index === r.length ? "" : r || ""
        }
        return ""
    }

    function o() {
        return r || (r = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]\ufe0f?|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g), r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r;
    t.getFirstEmojiFromTitle = i
}), define("modules/clean/filename_highlights", ["require", "exports", "tslib", "external/classnames", "react"], function(e, t, i, o, r) {
    "use strict";

    function n(e, t) {
        if (!t || !t.length) return [];
        var i = [],
            o = 0;
        return t.forEach(function(t) {
            var r = t.pos;
            r > o && (o = r);
            var n = e.indexOf(t.string, o);
            n >= 0 && i.push({
                pos: n,
                len: t.string.length,
                string: t.string
            })
        }), i
    }

    function l(e, t, i, o) {
        if (!t) return [{
            text: e,
            isHighlighted: !1
        }];
        i || (i = 0), o || (o = e.length), t = n(e, t);
        for (var r = 0, l = 0, a = []; r < e.length;) {
            var s = void 0,
                c = void 0,
                d = t[l];
            if (l >= t.length ? (c = !1, s = r + e.length) : d.pos > r ? (c = !1, s = d.pos) : (c = !0, s = d.pos + d.len), !(r < i && s <= i || r >= o && s >= o)) {
                var u = e.substring(Math.max(r, i), Math.min(s, o));
                a.push({
                    text: u,
                    isHighlighted: c
                })
            }
            r = s, c && l++
        }
        return a
    }

    function a(e, t, i, o) {
        return p(l(e, t, i, o))
    }

    function s(e, t, i, o) {
        if (i || (i = 0), o || (o = e.length), !t || !u(e, t)) return [{
            text: e.substring(i, o),
            isHighlighted: !1
        }];
        for (var r = [], n = 0, l = 0, a = t; l < a.length; l++) {
            var s = a[l],
                c = e.indexOf(s.highlight_str, n),
                d = c + s.highlight_str.length;
            if (n = d, !(c < i && d <= i || c >= o)) {
                var p = s.highlight_str;
                c < i && (p = p.slice(i - c)), o < d && (p = p.slice(0, -(d - o))), r.push({
                    text: p,
                    isHighlighted: s.is_highlighted
                })
            }
        }
        return r
    }

    function c(e, t, i, o) {
        return p(s(e, t, i, o))
    }

    function d(e) {
        return p(e.map(function(e) {
            return {
                text: e.highlight_str,
                isHighlighted: e.is_highlighted
            }
        }))
    }

    function u(e, t) {
        return e === t.map(function(e) {
            return e.highlight_str
        }).join("")
    }

    function p(e) {
        return r.createElement("span", null, e.map(function(e, t) {
            return r.createElement("span", {
                className: o.default({
                    highlighted: e.isHighlighted,
                    "is-highlighted": e.isHighlighted
                }),
                key: t
            }, e.text)
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), r = i.__importStar(r), t.highlightMatchSections = l, t.highlightMatchReact = a, t.highlightSectionsFromHighlightSpans = s, t.highlightReactFromHighlightSpans = c, t.highlightReactFromAllHighlightSpans = d
}), define("modules/clean/paper_formatting_utils", ["require", "exports", "tslib", "modules/clean/emoji_utils", "react", "modules/clean/filename_highlights", "spectrum/icon_content"], function(e, t, i, o, r, n, l) {
    "use strict";

    function a(e, t, i, r) {
        var l = e.title,
            a = e.highlight_spans,
            c = e.title_highlights,
            d = a && a.length > 0,
            u = o.getFirstEmojiFromTitle(l);
        if (u)
            if (l = l.substr(u.length), d) {
                var p = {
                    highlight_str: a[0].highlight_str.substr(u.length),
                    is_highlighted: a[0].is_highlighted
                };
                a = [p].concat(a.slice(1))
            } else if (c) {
            var h = u.length / 2;
            c = c.slice().map(function(e) {
                return {
                    pos: e.pos - h,
                    len: e.string.length,
                    string: e.string
                }
            })
        }
        var m;
        return m = d ? n.highlightReactFromHighlightSpans(l, a) : n.highlightMatchReact(l, c), {
            title: l,
            highlightedTitle: m,
            icon: s(u, t, i, r)
        }
    }

    function s(e, t, i, o) {
        return e ? r.default.createElement("div", {
            className: "mc-media-cell-icon brws-file-name-icon-emoji-container"
        }, r.default.createElement(l.IconContent, {
            name: o ? "blank-large" : "blank-small",
            className: t
        }), r.default.createElement("span", {
            className: i
        }, e)) : r.default.createElement(l.IconContent, {
            name: o ? "paper-large" : "paper-small",
            className: t
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importStar(o), r = i.__importDefault(r), n = i.__importStar(n), t.getPaperDocTitleParts = a
}), define("modules/clean/react/browse/util", ["require", "exports", "modules/clean/react/browse/models", "modules/clean/react/browse/sort_helpers", "modules/clean/react/files_view/types", "modules/core/exception", "modules/core/i18n"], function(e, t, i, o, r, n, l) {
    "use strict";

    function a(e, t) {
        var o = e.count(),
            r = l._("You only have partial access");
        return o > 0 ? 1 !== o || i.File.canViewFileMembers(e.first(), t) ? l.ungettext("%(count)d item selected", "%(count)d items selected", o).format({
            count: o
        }) : i.File.isNoAccessSharedFolder(e.first()) ? l._("You don’t have access to this folder") : r : t && !t.canViewContainingNSMembers ? r : ""
    }

    function s(e, t, i, o) {
        var r = t.sortField,
            l = t.sortDirection,
            a = c(r, i),
            s = d(r, l, o);
        return a && s ? e.sortBy(a, s) : (n.reportException({
            err: new Error("sortFiles was called with an unsupported sort field"),
            tags: ["browse_sort_invalid_field"],
            severity: n.SEVERITY.CRITICAL,
            exc_extra: {
                sort_field: r
            }
        }), e)
    }

    function c(e, t) {
        switch (e) {
            case r.SortField.FILENAME:
            case r.SortField.SHARED_WITH:
                return function(e) {
                    return u(e, i.File.getFilename(e))
                };
            case r.SortField.MODIFIED:
                return function(e) {
                    return u(e, e.ts)
                };
            case r.SortField.CATEGORY:
                return function(e) {
                    return u(e, i.File.getCategoryDescription(e))
                };
            case r.SortField.EXTENSION:
                return function(e) {
                    return u(e, i.File.getExtension(e))
                };
            case r.SortField.SIZE:
                return function(e) {
                    return u(e, e.is_dir && t.has(e.fq_path) ? t.get(e.fq_path).size : e.bytes)
                };
            default:
                return
        }
    }

    function d(e, t, i) {
        var o = l.case_insensitive_comparator(!0),
            n = t === r.SortDirection.ASCENDING ? 1 : -1,
            a = i ? p(n, o) : h(n, o);
        switch (e) {
            case r.SortField.FILENAME:
            case r.SortField.SHARED_WITH:
            case r.SortField.SIZE:
                return a;
            case r.SortField.MODIFIED:
            case r.SortField.CATEGORY:
            case r.SortField.EXTENSION:
                return m(n, o);
            default:
                return
        }
    }

    function u(e, t) {
        return {
            isFolder: e.is_dir,
            value: t,
            isTMF: i.File.isTeamMemberFolder(e)
        }
    }

    function p(e, t) {
        return function(i, r) {
            var n = i.value,
                l = i.isTMF,
                a = r.value;
            return f(l, r.isTMF) || o.compare(n, a, e, t)
        }
    }

    function h(e, t) {
        return function(i, r) {
            var n = i.isFolder,
                l = i.value,
                a = i.isTMF,
                s = r.isFolder,
                c = r.value,
                d = r.isTMF,
                u = f(a, d);
            return u ? u : (l || (l = 1 / 0 * e), c || (c = 1 / 0 * e), n && s ? o.compare(l, c, e, t) : n ? -e : s ? e : o.compare(l, c, e, t))
        }
    }

    function m(e, t) {
        return function(i, r) {
            var n = i.isFolder,
                l = i.value,
                a = i.isTMF,
                s = r.isFolder,
                c = r.value,
                d = r.isTMF,
                u = f(a, d);
            return u ? u : n && s ? o.compare(l, c, e, t) : n ? 1 : s ? -1 : "" === l ? 1 : "" === c ? -1 : o.compare(l, c, e, t)
        }
    }

    function f(e, t) {
        return e ? -1 : t ? 1 : 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSelectedFilesText = a, t.sortFiles = s
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer/async_controller", ["require", "exports"], function(e, t) {
    "use strict";

    function i() {
        Array.from(document.querySelectorAll(n)).forEach(function(e) {
            e.style.display && e.setAttribute("data-preview-old-display", e.style.display), e.style.display = "none"
        })
    }

    function o() {
        Array.from(document.querySelectorAll(n)).forEach(function(e) {
            e.style.display = e.hasAttribute("data-preview-old-display") ? e.getAttribute("data-preview-old-display") : ""
        })
    }

    function r(t) {
        var i = t.containerId,
            o = t.files,
            r = t.fileViewAction,
            n = t.fileViewOrigin,
            l = t.fileViewTarget,
            a = t.indexOfPreviewFile,
            s = t.onFileViewerDidMount,
            c = t.onFileViewerUnmount,
            d = (t.shouldFocusComment, t.shouldPresentInZoom),
            u = void 0 !== d && d,
            p = t.updateBrowserLocation,
            h = void 0 === p || p,
            m = t.user;
        new Promise(function(t, i) {
            e(["modules/clean/react/file_viewer/controller"], t, i)
        }).then(__importStar).then(function(e) {
            e.open(o, a, m, i, {
                fileViewTarget: l,
                fileViewOrigin: n,
                fileViewAction: r,
                disableRouting: !h,
                onComponentDidMount: s,
                onComponentWillUnmount: c,
                shouldPresentInZoom: u
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [".maestro-chrome", "#maestro-nav", "#page-footer", "#page-content", "#page-header", "#page-sidebar", "#browse-box", "#flash-upload-container", "#maestro-header", "#maestro-prompt", ".snackbar-container"].join();
    t.hideElementsBehindFileViewer = i, t.showElementsBehindFileViewer = o, t.asyncOpenPreview = r
}), define("modules/clean/react/files_view/constants", ["require", "exports", "modules/clean/react/files_view/types", "modules/core/i18n"], function(e, t, i, o) {
    "use strict";
    var r, n, l, a;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o._("Name", {
        comment: "Column header that indicates filename.",
        project: "filename"
    });
    t.DEFAULT_COLUMN_HEADER_HEIGHT = 40, t.DEFAULT_ROW_HEIGHT = 72, t.DEFAULT_ROW_HEIGHT_DENSE = 60, t.ROW_TITLE_HEIGHT = 24, t.ROW_SUBTITLE_HEIGHT = 16, t.ROW_VERTICAL_PADDING = 16, t.ROW_SNIPPET_VERTICAL_MARGIN = 8, t.SNIPPET_HEIGHT_PER_ROW = 16, t.SNIPPET_HORIZONTAL_PADDING = 16, t.MEDIA_CELL_ICON_WIDTH = 64, t.DEFAULT_ROW_HEIGHT_WITH_SNIPPETS = t.ROW_VERTICAL_PADDING + t.ROW_TITLE_HEIGHT + t.ROW_SUBTITLE_HEIGHT + t.ROW_SNIPPET_VERTICAL_MARGIN + 3 * t.SNIPPET_HEIGHT_PER_ROW, t.COMPACT_COLUMN_HEADER_HEIGHT = 48, t.PINNED_TEAM_FOLDER_SECONDARY_HEADER_PADDING_TOP = 12, t.CHECKBOX_CELL_FLEX = "0 0 36px", t.FILE_NAME_TOOLTIP_MAX_LINE_LENGTH = 65, t.LIST_VIEW_COLUMN_FLEX = {
        3: [t.CHECKBOX_CELL_FLEX, "1 1 50%", "0 0 25%", "0 0 25%"],
        2: [t.CHECKBOX_CELL_FLEX, "1 1 60%", "0 0 40%"],
        1: [t.CHECKBOX_CELL_FLEX, "1 1 100%"]
    }, t.LIST_VIEW_SEARCH_MODE_COLUMN_FLEX = {
        3: [t.CHECKBOX_CELL_FLEX, "1 1 50%", "0 0 25%", "0 0 25%"],
        2: [t.CHECKBOX_CELL_FLEX, "1 1 60%", "0 0 40%"],
        1: [t.CHECKBOX_CELL_FLEX, "1 1 100%"]
    }, t.FILE_NAME_CELL_WITH_SNIPPETS_FLEX_BASIS = {
        3: 50,
        2: 65,
        1: 100
    }, t.LIST_VIEW_SEARCH_MODE_WITH_SNIPPETS_COLUMN_FLEX = {
        3: [t.CHECKBOX_CELL_FLEX, "1 1 " + t.FILE_NAME_CELL_WITH_SNIPPETS_FLEX_BASIS[3] + "%", "0 0 25%", "0 0 25%"],
        2: [t.CHECKBOX_CELL_FLEX, "1 1 " + t.FILE_NAME_CELL_WITH_SNIPPETS_FLEX_BASIS[2] + "%", "0 0 35%"],
        1: [t.CHECKBOX_CELL_FLEX, "1 1 " + t.FILE_NAME_CELL_WITH_SNIPPETS_FLEX_BASIS[1] + "%"]
    }, t.GRID_VIEW_COLUMN_FLEX = [t.CHECKBOX_CELL_FLEX, "1 1"], t.LIST_VIEW_COLUMNS = [{
        sortField: i.SortField.FILENAME,
        label: s,
        popoverTriggerLabel: s,
        isLocked: !0
    }, {
        sortField: i.SortField.MODIFIED,
        label: o._("Modified"),
        popoverTriggerLabel: o._("Modified")
    }, {
        sortField: i.SortField.SHARED_WITH,
        label: o._("Members"),
        popoverTriggerLabel: o._("Members"),
        isSortOrderOptionDisabled: !0
    }, {
        sortField: i.SortField.CATEGORY,
        label: o._("Type"),
        popoverTriggerLabel: o._("Type")
    }, {
        sortField: i.SortField.EXTENSION,
        label: o._("Extension"),
        popoverTriggerLabel: o._("Extension")
    }, {
        sortField: i.SortField.SIZE,
        label: o._("Size"),
        popoverTriggerLabel: o._("Size")
    }], t.GRID_VIEW_COLUMNS = [{
        sortField: i.SortField.FILENAME,
        label: s,
        popoverTriggerLabel: s
    }, {
        sortField: i.SortField.MODIFIED,
        label: o._("Modified"),
        popoverTriggerLabel: o._("Modified")
    }, {
        sortField: i.SortField.CATEGORY,
        label: o._("Type"),
        popoverTriggerLabel: o._("Type")
    }, {
        sortField: i.SortField.EXTENSION,
        label: o._("Extension"),
        popoverTriggerLabel: o._("Extension")
    }, {
        sortField: i.SortField.SIZE,
        label: o._("Size"),
        popoverTriggerLabel: o._("Size")
    }], t.SEARCH_LIST_VIEW_COLUMNS = [{
        sortField: i.SortField.FILENAME,
        label: s,
        popoverTriggerLabel: s,
        isLocked: !0,
        isSortDisabled: !0
    }, {
        sortField: i.SortField.MODIFIED,
        label: o._("Modified"),
        popoverTriggerLabel: o._("Modified"),
        isLocked: !0,
        isSortDisabled: !0
    }, {
        sortField: i.SortField.SIZE,
        label: o._("Size"),
        popoverTriggerLabel: o._("Size"),
        isLocked: !0,
        isSortDisabled: !0
    }], t.SEARCH_LIST_VIEW_SORT_ENABLED_COLUMNS = [{
        sortField: i.SortField.FILENAME,
        label: s,
        popoverTriggerLabel: s,
        isLocked: !0,
        isSortDisabled: !0
    }, {
        sortField: i.SortField.RELEVANCE,
        label: o._("Relevance"),
        popoverTriggerLabel: o._("Relevance"),
        isLocked: !1,
        isSortDisabled: !1
    }, {
        sortField: i.SortField.SIZE,
        label: o._("Size"),
        popoverTriggerLabel: o._("Size"),
        isLocked: !0,
        isSortDisabled: !0
    }, {
        sortField: i.SortField.MODIFIED,
        label: o._("Last modified"),
        popoverTriggerLabel: o._("Last modified"),
        isLocked: !1,
        isSortDisabled: !1
    }], t.SEARCH_GRID_VIEW_SORT_ENABLED_COLUMNS = [{
        sortField: i.SortField.RELEVANCE,
        label: o._("Relevance"),
        popoverTriggerLabel: o._("Relevance"),
        isLocked: !1,
        isSortDisabled: !1
    }, {
        sortField: i.SortField.MODIFIED,
        label: o._("Last modified"),
        popoverTriggerLabel: o._("Last modified"),
        isLocked: !1,
        isSortDisabled: !1
    }], t.SEARCH_LIST_VIEW_COLUMNS_DELETED = [{
        sortField: i.SortField.FILENAME,
        label: s,
        popoverTriggerLabel: s,
        isLocked: !0,
        isSortDisabled: !0
    }, {
        sortField: i.SortField.MODIFIED,
        label: o._("Deleted"),
        popoverTriggerLabel: o._("Deleted"),
        isLocked: !0,
        isSortDisabled: !0
    }], t.FilesViewTileGridConstants = {
        NUM_THRESHOLD_ROWS: 10,
        SCROLL_DELTA_THRESHOLD: 1
    }, t.AllNewFolderCreationStates = [i.NewFolderCreationState.CREATE_FOLDER_INACTIVE, i.NewFolderCreationState.PENDING_INPUT, i.NewFolderCreationState.SAVING_INPUT], t.AllRenameStates = [i.RenameState.PENDING_INPUT, i.RenameState.SAVING_INPUT], t.AllViewTypes = [i.ViewType.Grid, i.ViewType.LargeGrid, i.ViewType.List], t.ViewTypeLabels = (r = {}, r[i.ViewType.Grid] = o._("Small"), r[i.ViewType.List] = o._("List"), r[i.ViewType.LargeGrid] = o._("Large"), r), t.AllDropTargetHighlightModes = [i.DropTargetHighlightMode.NONE, i.DropTargetHighlightMode.ALL_FOLDERS, i.DropTargetHighlightMode.NONSELECTED_FOLDERS, i.DropTargetHighlightMode.NONSELECTED_NONSHARED_FOLDERS, i.DropTargetHighlightMode.NONSELECTED_NONSHARED_NONTEAM_FOLDERS], t.AllSortFields = [i.SortField.FILENAME, i.SortField.MODIFIED, i.SortField.CATEGORY, i.SortField.EXTENSION, i.SortField.SIZE, i.SortField.SHARED_WITH, i.SortField.SYNC_SETTING, i.SortField.FILE_COUNTS], t.SortIsFilename = [i.SortField.FILENAME, i.SortField.CATEGORY, i.SortField.EXTENSION, i.SortField.SHARED_WITH, i.SortField.SYNC_SETTING], t.AllLoadingStates = [i.LoadingState.LOADED, i.LoadingState.LOADING_FIRST_PAGE, i.LoadingState.LOADING_REMAINING_PAGES, i.LoadingState.LOAD_ERROR], t.AllSortDirections = [i.SortDirection.ASCENDING, i.SortDirection.DESCENDING], t.ViewTypeThumbnailSizes = (n = {}, n[i.ViewType.Grid] = 256, n[i.ViewType.LargeGrid] = 512, n[i.ViewType.List] = 32, n), t.ViewTypeGridSizes = (l = {}, l[i.ViewType.Grid] = 160, l[i.ViewType.LargeGrid] = 480, l[i.ViewType.List] = 0, l), t.CulledListConstants = {
        ITEM_ROW_HEIGHT_PX: 46,
        MAESTRO_ITEM_ROW_HEIGHT_PX: 57,
        SEARCH_ROW_HEIGHT_PX: 53,
        MAESTRO_SEARCH_ROW_HEIGHT_PX: 66,
        DEFAULT_HEADER_HEIGHT_PX: 142,
        ITEM_BUFFER_SIZE: 5
    }, t.OverflowMenuConstants = {
        MENU_ITEM_HEIGHT_PX: 32,
        MENU_MARGIN_PX: 8,
        MENU_POPOVER_ITEM_GROUP_SEPARATOR_HEIGHT_PX: 17
    }, t.VIEW_TYPE_COOKIE_NAME = "browse_view_type", t.COLUMNS_STORAGE_KEY = "browse_columns", t.VIEW_TYPE_STORAGE_KEY = "files_view_types", t.VIEW_TYPE_GLOBAL_SCOPE = "*", t.VIEW_TYPE_SCOPE_IMAGE_SEARCH = ":search/image", t.IMAGE_THUMBNAIL_EXTENSIONS = ["jpg", "jpeg", "png", "tiff", "tif", "gif", "bmp", "webp", "wbmp", "psd", "svg", "svgz", "ai", "eps", "otf", "ttf", "3gp", "3gpp", "3gpp2", "asf", "avi", "dv", "flv", "m2t", "m4v", "mkv", "mov", "mp4", "mpeg", "mpg", "mts", "mxf", "oggtheora", "ogv", "rm", "ts", "vob", "webm", "wmv"], t.defaultViewTypes = (a = {}, a[t.VIEW_TYPE_GLOBAL_SCOPE] = i.ViewType.List, a[t.VIEW_TYPE_SCOPE_IMAGE_SEARCH] = i.ViewType.LargeGrid, a)
}), define("modules/clean/react/files_view/double_click", ["require", "exports", "tslib", "react"], function(e, t, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o);
    var r = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.lastClickTimestamp = 0, t.onClick = function(e) {
                var i = t.props,
                    o = i.onDoubleClick,
                    r = i.onClick,
                    n = i.threshold;
                if (o) {
                    var l = (new Date).getTime();
                    l - t.lastClickTimestamp < n ? (o(e), t.lastClickTimestamp = 0) : (t.lastClickTimestamp = l, r(e))
                } else r(e)
            }, t
        }
        return i.__extends(t, e), t.prototype.render = function() {
            return this.props.children({
                onClick: this.onClick
            })
        }, t.defaultProps = {
            onClick: function() {},
            threshold: 500
        }, t
    })(o.default.PureComponent);
    t.WithDoubleClick = r
}), define("modules/clean/react/files_view/drag_and_drop", ["require", "exports", "modules/clean/react/browse/models", "modules/clean/react/no-jquery"], function(e, t, i, o) {
    "use strict";

    function r(e, t, i, r, n, l, s) {
        a.add(e, "dragenter", function(e) {
            (t() || i()) && !o.closestElement(e.target, n) && l() && (s(null), r())
        })
    }

    function n(e) {
        a.remove(e, "dragenter")
    }

    function l(e, t, o, r, n, l, a, s) {
        if (t || o) {
            if (e.is_dir && !(r && o)) {
                if (n) return;
                var c = l.isCurrentPathWriteable() && !i.File.isReadOnlySharedFolder(e);
                a(e), s({
                    path: e.fq_path,
                    hasPermissionToUploadToFolder: c
                })
            } else a(null), s()
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = new o.ScopedEventHandlers(document);
    t.setupExternalDragHandler = r, t.cleanupExternalDragHandler = n, t.onFileDragEnterItem = l
}), define("modules/clean/react/files_view/file_jump", ["require", "exports", "tslib", "modules/clean/keycode", "modules/clean/react/no-jquery", "modules/core/dom"], function(e, t, i, o, r, n) {
    "use strict";

    function l(e, t, i, l) {
        var c = null != e.which ? e.which : e.keyCode,
            d = String.fromCharCode(c);
        c < o.KeyCode.SPACE || a.includes(d) || !r.closestElement(document.activeElement, ".brws-checkbox-cell") && n.focus_in_input() || e.metaKey || e.altKey || e.altGraphKey || e.ctrlKey || c === o.KeyCode.SPACE && !t() || (c === o.KeyCode.SPACE && t() && e.preventDefault(), i(d), null != s && clearTimeout(s), s = setTimeout(function() {
            l()
        }, 1e3))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = i.__importStar(n);
    var a = ["/", "\\", ":", "?", "*", "<", ">", "|"],
        s = null;
    t.handleKeyPress = l
}), define("modules/clean/react/files_view/file_list_empty_folder_table", ["require", "exports", "tslib", "external/immutable", "external/lodash", "react", "spectrum/media_table", "spectrum/table", "modules/clean/react/files_view/keyboard_shortcuts", "modules/clean/react/files_view/types"], function(e, t, i, o, r, n, l, a, s, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importStar(o), r = i.__importStar(r), n = i.__importDefault(n);
    var d = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i.__extends(t, e), t.prototype.componentDidMount = function() {
            this.props.onTTI && this.props.onTTI(), this.setupKeyboardShortcuts()
        }, t.prototype.componentWillUnmount = function() {
            this.cleanupKeyboardShortcuts()
        }, t.prototype.setupKeyboardShortcuts = function() {
            var e = this;
            s.setupFilesViewKeyboardShortcuts({
                viewType: c.ViewType.List,
                getIsGlobalEvent: s.generateGetIsGlobalEvent(this),
                getIsItemEvent: function() {
                    return !1
                },
                getSelectedFiles: function() {
                    return o.OrderedMap()
                },
                isCurrentPathWriteable: function() {
                    return !1
                },
                selectAllAction: r.noop,
                deselectAllAction: r.noop,
                onCopyToClipboard: r.noop,
                onDelete: r.noop,
                onFocusSearchBar: this.props.onFocusSearchBar,
                onNavigateToFileOrFolder: r.noop,
                onNavigateToParentFolder: this.props.onNavigateToParentFolder,
                onPasteFromClipboard: this.props.onPasteFromClipboard,
                onShowRename: r.noop,
                scope: "EmptyFolderTable",
                onShowHelpMenu: function() {
                    return e.props.onOpenKeyboardShortcutModal()
                }
            })
        }, t.prototype.cleanupKeyboardShortcuts = function() {
            s.resetFilesViewKeyboardShortcuts("EmptyFolderTable")
        }, t.prototype._renderTitle = function() {
            return n.default.createElement("h3", {
                className: "u-font-strong empty-folder-table-title"
            }, this.props.title)
        }, t.prototype._renderSubtitle = function() {
            var e = this.props,
                t = e.subtitle,
                i = e.subtitleLink,
                o = e.subtitleOnClick;
            return t && i ? n.default.createElement("a", {
                className: "empty-folder-table-subtitle empty-folder-table-link",
                href: i,
                onClick: o
            }, t) : t ? n.default.createElement("span", {
                className: "empty-folder-table-subtitle"
            }, t) : void 0
        }, t.prototype.render = function() {
            for (var e = [], t = 0; t < this.props.numRowsAbove; t++) e.push(n.default.createElement(l.MediaRow, {
                key: -t - 1
            }));
            for (var i = [], o = Math.max(this.props.totalRows - this.props.numRowsAbove - 1, 0), t = 0; t < o; t++) i.push(n.default.createElement(l.MediaRow, {
                key: t + 1
            }));
            return n.default.createElement(a.Table, {
                role: "main",
                "aria-atomic": "true",
                "aria-live": "polite",
                className: "empty-folder-table"
            }, n.default.createElement(a.TableHead, null), n.default.createElement(a.TableBody, null, e, n.default.createElement(l.MediaRow, {
                key: 0
            }, n.default.createElement(l.MediaCell, {
                className: "empty-folder-table-cell",
                title: this._renderTitle(),
                subtitle: this._renderSubtitle()
            })), i))
        }, t.defaultProps = {
            numRowsAbove: 2,
            totalRows: 14,
            onFocusSearchBar: r.noop,
            onPasteFromClipboard: r.noop,
            onNavigateToParentFolder: r.noop,
            onOpenKeyboardShortcutModal: r.noop
        }, t
    })(n.default.PureComponent);
    t.EmptyFolderTable = d
}), define("modules/clean/react/files_view/file_list_utils", ["require", "exports", "modules/clean/filetypes", "modules/clean/react/files_view/types", "modules/clean/react/browse/models", "modules/clean/sharing/browse_exports"], function(e, t, i, o, r, n) {
    "use strict";

    function l(e) {
        var t = e.file,
            n = e.isSelected,
            l = e.dropTargetHighlightMode;
        if (l === o.DropTargetHighlightMode.NONE) return !1;
        if (!t.is_dir) return !1;
        if (r.File.isReadOnlySharedFolder(t)) return !1;
        if (t.isDeleted) return !1;
        switch (l) {
            case o.DropTargetHighlightMode.ALL_FOLDERS:
                return !0;
            case o.DropTargetHighlightMode.NONSELECTED_FOLDERS:
                return !n;
            case o.DropTargetHighlightMode.NONSELECTED_NONSHARED_FOLDERS:
                return !n && t.type !== i.FileTypes.SHARED_FOLDER;
            case o.DropTargetHighlightMode.NONSELECTED_NONSHARED_NONTEAM_FOLDERS:
                return !n && ![i.FileTypes.SHARED_FOLDER, i.FileTypes.TEAM_SHARED_FOLDER].includes(t.type)
        }
        return !1
    }

    function a(e) {
        var t = e.context,
            o = e.file;
        e.user;
        return o.isDeleted || o.is_dir && n.shouldUsePublicFolderSharing(t.config, o.fq_path) || r.File.isTeamMemberFolder(o) || !r.File.canViewFileMembers(o, t) || o.type === i.FileTypes.SANDBOX
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shouldFileBeHighlightedDropTarget = l, t.isSharingDisabledForFile = a
}), define("modules/clean/react/files_view/file_thumbnail", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/filepath", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/types", "modules/clean/react/files_view/util", "modules/clean/react/icon/file_folder_icon", "modules/clean/react/icon/lock_badge", "modules/clean/user_education/react/user_education_effect"], function(e, t, i, o, r, n, l, a, s, c, d, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), r = i.__importDefault(r), n = i.__importStar(n);
    var p = (function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            i._thumbRequestId = null, i.handleThumbnailError = function() {
                i.setState({
                    thumbnailSrc: null
                })
            };
            var o = t.thumbStore,
                r = t.file.thumbnail_url_tmpl;
            return i.state = {
                thumbnailSrc: r ? o.get_thumb(r) : null
            }, i
        }
        return i.__extends(t, e), t.prototype.componentDidMount = function() {
            this.fetchThumbnail(this.props)
        }, t.prototype.componentWillReceiveProps = function(e) {
            e.file.thumbnail_url_tmpl !== this.props.file.thumbnail_url_tmpl && (this.unbindThumbnailIfNeeded(), this.fetchThumbnail(e))
        }, t.prototype.componentWillUnmount = function() {
            this.unbindThumbnailIfNeeded()
        }, t.prototype.fetchThumbnail = function(e) {
            var t = this,
                i = e.file,
                o = e.thumbStore,
                r = s.isFile(i) ? n.file_extension(n.filename(i.fq_path)) : i.ext && "." === i.ext[0] ? i.ext.slice(1) : i.ext;
            if (l.IMAGE_THUMBNAIL_EXTENSIONS.includes(r)) {
                var d = c.getThumbnailUrlForItem(i.thumbnail_url_tmpl, l.ViewTypeThumbnailSizes[a.ViewType.List]);
                d && (this._thumbRequestId = o.bind_url(d, {
                    onSuccess: function() {
                        t.setState({
                            thumbnailSrc: o.get_thumb(d)
                        })
                    },
                    onError: function() {
                        t.handleThumbnailError()
                    }
                }))
            }
        }, t.prototype.unbindThumbnailIfNeeded = function() {
            var e = this.props.thumbStore;
            this._thumbRequestId && (e.unbind_url(this._thumbRequestId), this._thumbRequestId = null), this.setState({
                thumbnailSrc: null
            })
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.file,
                i = e.showCDMUserEducationEffects,
                n = this.state.thumbnailSrc,
                l = s.isFile(t) ? t.fq_path : t.filename;
            return n ? r.default.createElement(d.LockBadge, {
                file: this.props.file,
                variant: "preview-small"
            }, r.default.createElement("img", {
                alt: l,
                draggable: !1,
                className: o.default("brws-file-name-cell-icon", "brws-file-name-cell-thumb"),
                src: n,
                onError: this.handleThumbnailError
            })) : r.default.createElement(h, {
                file: t,
                showCDMUserEducationEffects: i
            })
        }, t
    })(r.default.PureComponent);
    t.FileThumbnail = p;
    var h = function(e) {
        var t = e.file,
            i = e.showCDMUserEducationEffects,
            o = s.isFile(t) ? t : {
                type: t.type,
                icon: t.icon,
                fq_path: "/" + t.filename,
                thumbnail_url_tmpl: t.thumbnail_url_tmpl
            },
            n = r.default.createElement(c.FileOrFolderIcon, {
                className: "brws-file-name-cell-icon",
                file: o,
                showPreview: !1
            });
        return i ? r.default.createElement(u.UserEducationEffect, {
            containerName: "FileItemRow",
            name: "TMFIcon",
            useSpan: !0
        }, n) : n
    }
}), define("modules/clean/react/files_view/keyboard_focus", ["require", "exports", "tslib", "react"], function(e, t, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o);
    var r = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.lastMouseDown = 0, t.onFocus = function(e) {
                Date.now() - t.lastMouseDown > 100 && t.props.onKeyboardFocus(e)
            }, t.onMouseDown = function() {
                t.lastMouseDown = Date.now()
            }, t
        }
        return i.__extends(t, e), t.prototype.render = function() {
            return this.props.children({
                onFocus: this.onFocus,
                onMouseDown: this.onMouseDown
            })
        }, t
    })(o.default.PureComponent);
    t.WithKeyboardFocus = r
}), define("modules/clean/react/files_view/keyboard_shortcuts", ["require", "exports", "tslib", "external/keymaster", "external/react-dom", "modules/clean/react/browse/action_logger", "modules/clean/react/files_view/file_jump", "modules/clean/react/files_view/types", "modules/clean/react/no-jquery", "modules/clean/undo", "modules/core/browser_detection", "modules/core/i18n", "modules/core/notify"], function(e, t, i, o, r, n, l, a, s, c, d, u, p) {
    "use strict";

    function h(e) {
        o.default.clearScope(e), o.default.setScope(E)
    }

    function m(e, t) {
        return function(i) {
            e(i) && (i.preventDefault(), "function" == typeof t && t(i))
        }
    }

    function f(e) {
        return function(t) {
            return !document.activeElement || document.activeElement === document.body || t.target instanceof Element && r.findDOMNode(e).contains(t.target)
        }
    }

    function _(e) {
        h(e), v.remove(e, "keydown"), v.remove(e, "keyup")
    }

    function g(e) {
        var t = e.user,
            i = e.viewType,
            o = e.getSelectedFiles,
            r = e.isCurrentPathWriteable,
            l = e.onShowHelpMenu,
            s = e.onDelete,
            d = e.onShowRename,
            h = e.onFocusSearchBar,
            m = e.onNavigateToFileOrFolder,
            f = e.onNavigateToParentFolder,
            _ = e.selectAllAction,
            g = e.onCopyToClipboard,
            b = e.onPasteFromClipboard,
            T = e.deselectAllAction,
            S = function() {
                var e = o(),
                    t = e.some(function(e) {
                        return e.read_only
                    });
                if (1 === e.size)
                    if (r() && !t) {
                        var i = e.first();
                        i.isDeleted ? p.Notify.error(u._("Deleted files can’t be renamed.")) : d(i)
                    } else p.Notify.warning(u._("You don’t have permission to rename files in this folder."))
            },
            E = function() {
                var e = o();
                e.size && s(e.toArray())
            },
            v = function() {
                c.performUndo()
            },
            w = function() {
                var e = o();
                1 === e.size && m(e.first())
            },
            y = function() {
                var e = o(),
                    t = e.first();
                1 === e.size && t.is_dir && m(t)
            },
            F = function(e, o) {
                n.logKeyboardShortcutUsage({
                    user_id: t ? t.id : null,
                    view_type: i,
                    keyboard_shortcut_type: e
                }), o()
            };
        return {
            renameFile: function() {
                F("rename", S)
            },
            focusSearchBar: function() {
                F("search", h)
            },
            showHelpMenu: function() {
                F("help", function() {
                    return l(i === a.ViewType.List)
                })
            },
            selectAll: function() {
                F("select-all", _)
            },
            copyToClipboard: function() {
                F("copy", g)
            },
            deleteFiles: function() {
                F("delete", E)
            },
            pasteFromClipboard: function() {
                F("paste", b)
            },
            undoAction: function() {
                F("undo", v)
            },
            deselectFiles: function() {
                F("deselect", T)
            },
            navigateToFileOrFolder: function() {
                F("navigate-file-folder", w)
            },
            navigateToFolder: function() {
                F("navigate-folder", y)
            },
            navigateToParent: function() {
                F("navigate-parent", f)
            }
        }
    }

    function b(e) {
        var t = e.scope,
            i = e.getIsItemEvent,
            r = e.getIsGlobalEvent;
        E = o.default.getScope(), E !== t && o.default.setScope(t);
        var n = g(e);
        o.default("f2", t, m(i, n.renameFile)), o.default("/", t, m(r, n.focusSearchBar)), o.default("shift+/", t, m(r, n.showHelpMenu)), o.default("escape", t, m(r, n.deselectFiles)), d.mac ? (o.default("command+a", t, m(r, n.selectAll)), o.default("command+c", t, m(i, n.copyToClipboard)), o.default("backspace", t, m(i, n.deleteFiles)), o.default("command+v", t, m(r, n.pasteFromClipboard)), o.default("command+z", t, m(r, n.undoAction))) : (o.default("ctrl+a", t, m(r, n.selectAll)), o.default("ctrl+c", t, m(i, n.copyToClipboard)), o.default("delete", t, m(i, n.deleteFiles)), o.default("ctrl+v", t, m(r, n.pasteFromClipboard)), o.default("ctrl+z", t, m(r, n.undoAction))), e.viewType === a.ViewType.List && (o.default("right", t, m(i, n.navigateToFolder)), o.default("left", t, m(r, n.navigateToParent)))
    }

    function T(e) {
        var t = (e.user, e.viewType, e.scope),
            i = e.getIsFileJumping,
            r = e.onAddFileJumpKeyCode,
            n = e.onResetFileJump,
            a = function(e) {
                o.default.getScope() === t && l.handleKeyPress(e, i, r, n)
            };
        v.add(t, "keypress", a)
    }

    function S(e) {
        v.remove(e, "keypress")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), r = i.__importStar(r), l = i.__importStar(l), c = i.__importStar(c), d = i.__importStar(d), t.FILES_VIEW_SHORTCUTS = [{
        key: u._("/", {
            comment: "Keyboard symbol for the forward slash"
        }),
        desc: u._("Search")
    }, {
        windowsKey: u._("Ctrl + a", {
            comment: "Windows keyboard name for the control key plus a key (capitalized Ctrl)"
        }),
        macKey: u._("⌘ + a", {
            comment: "Mac keyboard name for the command key plus a key (⌘ symbol)"
        }),
        desc: u._("Select all files")
    }, {
        windowsKey: u._("Esc", {
            comment: "Windows keyboard name for the esc key (capitalized)"
        }),
        macKey: u._("esc", {
            comment: "Mac keyboard name for the esc key (all lowercase)"
        }),
        desc: u._("Deselect all files")
    }, {
        windowsKey: u._("Ctrl + c", {
            comment: "Windows keyboard name for the control key plus c key (capitalized Ctrl)"
        }),
        macKey: u._("⌘ + c", {
            comment: "Mac keyboard name for the command key plus c key (⌘ symbol)"
        }),
        desc: u._("Copy selected file(s)")
    }, {
        windowsKey: u._("Ctrl + v", {
            comment: "Windows keyboard name for the control key plus v key (capitalized Ctrl)"
        }),
        macKey: u._("⌘ + v", {
            comment: "Mac keyboard name for the command key plus v key (⌘ symbol)"
        }),
        desc: u._("Paste selected file(s) into the current folder")
    }, {
        key: u._("F2", {
            comment: "Keyboard name for the F2 key"
        }),
        desc: u._("Rename selected file")
    }, {
        windowsKey: u._("Delete", {
            comment: "Windows keyboard name for the delete key (capitalized)"
        }),
        macKey: u._("delete", {
            comment: "Mac keyboard name for the delete key (all lowercase)"
        }),
        desc: u._("Delete selected file(s)")
    }, {
        windowsKey: u._("Ctrl + z", {
            comment: "Windows keyboard name for the control key plus z key (capitalized Ctrl)"
        }),
        macKey: u._("⌘ + z", {
            comment: "Mac keyboard name for the command key plus z key (⌘ symbol)"
        }),
        desc: u._("Undo recent move/copy/rename/delete")
    }, {
        key: u._("?", {
            comment: "Keyboard symbol for the question mark"
        }),
        desc: u._("Show keyboard shortcuts")
    }], t.FILES_VIEW_LIST_SHORTCUTS = [{
        key: u._("↑", {
            comment: "Keyboard symbol for the up arrow key"
        }),
        desc: u._("Select previous file (hold shift to select range)", {
            comment: "Shift refers to the shift key"
        })
    }, {
        key: u._("↓", {
            comment: "Keyboard symbol for the down arrow key"
        }),
        desc: u._("Select next file (hold shift to select range)", {
            comment: "Shift refers to the shift key"
        })
    }, {
        key: u._("←", {
            comment: "Keyboard symbol for the left arrow key"
        }),
        desc: u._("Go up a folder")
    }, {
        key: u._("→", {
            comment: "Keyboard symbol for the right arrow key"
        }),
        desc: u._("Open folder")
    }].concat(t.FILES_VIEW_SHORTCUTS), t.FILES_VIEW_TILE_GRID_SHORTCUTS = [{
        key: u._("↑", {
            comment: "Keyboard symbol for the up arrow key"
        }),
        desc: u._("Select file in previous row (hold shift to select range)", {
            comment: "Shift refers to the shift key"
        })
    }, {
        key: u._("↓", {
            comment: "Keyboard symbol for the down arrow key"
        }),
        desc: u._("Select file in next row (hold shift to select range)", {
            comment: "Shift refers to the shift key"
        })
    }, {
        key: u._("←", {
            comment: "Keyboard symbol for the left arrow key"
        }),
        desc: u._("Select previous file (hold shift to select range)", {
            comment: "Shift refers to the shift key"
        })
    }, {
        key: u._("→", {
            comment: "Keyboard symbol for the right arrow key"
        }),
        desc: u._("Select next file (hold shift to select range)", {
            comment: "Shift refers to the shift key"
        })
    }].concat(t.FILES_VIEW_SHORTCUTS);
    var E = "",
        v = new s.ScopedEventHandlers(document);
    t.generateGetIsGlobalEvent = f, t.resetFilesViewKeyboardShortcuts = _, t.getActionsAndAttachLogging = g, t.setupFilesViewKeyboardShortcuts = b, t.setupFileJumpKeyboardShortcuts = T, t.resetFileJumpKeyboardShortcuts = S
}), define("modules/clean/react/files_view/name_input", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/keycode", "modules/clean/react/files_view/types"], function(e, t, i, o, r, n, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), r = i.__importDefault(r);
    var a = function() {},
        s = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.setInputRef = function(e) {
                    t.inputRef = e
                }, t.handleDragStart = function(e) {
                    e.stopPropagation()
                }, t.handleSubmit = function(e) {
                    e.preventDefault(), t.submitIfChanged(l.NameInputActionSource.SUBMIT)
                }, t.handleKeyDown = function(e) {
                    e.keyCode === n.KeyCode.ESC ? (e.preventDefault(), t.props.onCancel({
                        source: l.NameInputActionSource.ESC
                    })) : e.keyCode === n.KeyCode.ENTER && t.handleSubmit(e)
                }, t.handleBlur = function(e) {
                    t.submitIfChanged(l.NameInputActionSource.BLUR)
                }, t.handleClick = function(e) {
                    e.preventDefault(), t.props.onClick(e)
                }, t
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                var e = this;
                this.inputRef.focus(), window.requestAnimationFrame(function() {
                    var t = e.inputRef.value,
                        i = e.props.isDir ? t.length : t.lastIndexOf(".");
                    i < 0 && (i = t.length),
                        e.inputRef.setSelectionRange(0, i)
                })
            }, t.prototype.submitIfChanged = function(e) {
                var t = this.inputRef.value.trim();
                t === this.props.defaultValue ? this.props.onCancel({
                    source: e
                }) : this.props.onSubmit(t)
            }, t.prototype.render = function() {
                return r.default.createElement("form", {
                    className: "u-pad-right-xs",
                    onSubmit: this.handleSubmit
                }, r.default.createElement("input", {
                    ref: this.setInputRef,
                    defaultValue: this.props.defaultValue,
                    className: o.default("c-input", this.props.className),
                    onBlur: this.handleBlur,
                    onKeyDown: this.handleKeyDown,
                    onDragStart: this.handleDragStart,
                    "aria-label": this.props.label,
                    onClick: this.handleClick
                }))
            }, t.defaultProps = {
                className: "",
                onCancel: a,
                onClick: a,
                onSubmit: a,
                idDir: null
            }, t
        })(r.default.PureComponent);
    t.NameInput = s
}), define("modules/clean/react/files_view/overflow_menu", ["require", "exports", "tslib", "react", "spectrum/overflow_button", "spectrum/popover", "modules/clean/react/async/loadable", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/overflow_menu_item_section", "modules/core/browser_detection", "modules/core/i18n"], function(e, t, i, o, r, n, l, a, s, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), t.AsyncFilesViewMobileOverflowMenu = l.Loadable({
        loader: function() {
            return new Promise(function(t, i) {
                e(["modules/clean/react/files_view/mobile_overflow_menu"], t, i)
            }).then(i.__importStar).then(function(e) {
                return e.FilesViewMobileOverflowMenu
            })
        }
    });
    var u;
    (function(e) {
        e[e.Normal = 0] = "Normal", e[e.Small = 1] = "Small"
    })(u = t.OverflowMenuSize || (t.OverflowMenuSize = {}));
    var p = (function(e) {
        function r(t) {
            var i = e.call(this, t) || this;
            return i.onClick = function(e) {
                e.preventDefault(), e.stopPropagation()
            }, i.handleSelection = function(e) {
                e.performAction()
            }, i.setOverflowMenuRef = function(e) {
                i.overflowMenuContent = e
            }, i.handleMenuToggle = function(e) {
                var t = e.isOpen,
                    o = e.isPopover,
                    n = void 0 === o || o;
                if (r.isDynamicProps(i.props) && t) {
                    var l = i.props.getOverflowMenuActions(i.props.file, !!i.props.canDisplayFolderSizes);
                    i.setState({
                        actionSection: l
                    }), n && i.setState({
                        popoverContentPosition: i.calculatePopoverContentPosition(l)
                    })
                }
            }, i.handleMobileMenuOpen = function(e) {
                return function() {
                    i.handleMenuToggle({
                        isOpen: !0,
                        isPopover: !1
                    }), e()
                }
            }, i.state = {
                popoverContentPosition: "below",
                actionSection: r.isDynamicProps(t) ? [] : t.actionSection
            }, i
        }
        return i.__extends(r, e), r.prototype.componentDidMount = function() {
            r.isDynamicProps(this.props) || this.setState({
                popoverContentPosition: this.calculatePopoverContentPosition(this.props.actionSection)
            })
        }, r.prototype.calculatePopoverContentPosition = function(e) {
            if (e.length <= 0 || !this.overflowMenuContent) return this.state.popoverContentPosition;
            var t = this.overflowMenuContent.getElementsByClassName("browse-overflow-menu-trigger-button")[0],
                i = a.OverflowMenuConstants.MENU_ITEM_HEIGHT_PX * e[0].length + 2 * a.OverflowMenuConstants.MENU_MARGIN_PX;
            e.length > 1 && (i += a.OverflowMenuConstants.MENU_ITEM_HEIGHT_PX * e[1].length + a.OverflowMenuConstants.MENU_POPOVER_ITEM_GROUP_SEPARATOR_HEIGHT_PX);
            var o = t.getBoundingClientRect(),
                r = this.props.viewportTopOffset || a.CulledListConstants.DEFAULT_HEADER_HEIGHT_PX;
            return o.top > i + r && o.bottom + i > window.innerHeight ? "above" : "below"
        }, r.prototype.render = function() {
            var e = this,
                l = this.props,
                a = l.attachment,
                d = l.isResponsive,
                u = l.size,
                p = l.showBorders,
                h = l.ariaHidden,
                m = r.isDynamicProps(this.props) ? this.props : {},
                f = m.file,
                _ = void 0 === f ? void 0 : f,
                g = m.thumbStore,
                b = void 0 === g ? void 0 : g,
                T = d && c.is_mobile_or_tablet();
            return o.default.createElement("div", {
                className: "browse-overflow-menu",
                onClick: this.onClick,
                onDoubleClick: this.onClick,
                ref: this.setOverflowMenuRef,
                "aria-hidden": h ? "true" : void 0
            }, T ? o.default.createElement(t.AsyncFilesViewMobileOverflowMenu, {
                trigger: function(i) {
                    var r = i.openMobileMenu;
                    return o.default.createElement(t.FilesViewOverflowMenuButton, {
                        onClick: e.handleMobileMenuOpen(r),
                        showBorders: p,
                        size: u
                    })
                },
                file: _,
                actionSection: this.state.actionSection,
                thumbStore: b
            }) : o.default.createElement(n.Popover, {
                closeOnSelection: !0,
                onMenuToggle: this.handleMenuToggle,
                onSelection: this.handleSelection
            }, o.default.createElement(n.PopoverTrigger, i.__assign({
                className: "browse-overflow-menu-trigger"
            }, i.__assign({}, h && {
                tabIndex: -1
            })), o.default.createElement(t.FilesViewOverflowMenuButton, {
                size: u,
                showBorders: p
            })), o.default.createElement(n.PopoverContent, {
                attachment: a,
                className: "browse-overflow-menu-content",
                position: this.state.popoverContentPosition
            }, o.default.createElement(s.OverflowMenuItemSection, {
                actionSection: this.state.actionSection,
                renderItem: function(e) {
                    return o.default.createElement(n.PopoverContentItem, {
                        className: e.className,
                        disabled: e.disabled,
                        value: e
                    }, e.label)
                }
            }))))
        }, r.isDynamicProps = function(e) {
            return "file" in e
        }, r.defaultProps = {
            attachment: "right",
            onMenuToggle: function() {}
        }, r
    })(o.default.PureComponent);
    t.FilesViewOverflowMenu = p, t.FilesViewOverflowMenuButton = function(e) {
        var t = e.size,
            i = e.showBorders,
            n = e.onClick;
        return o.default.createElement(r.OverflowButton, {
            "aria-label": d._("More actions"),
            className: "browse-overflow-menu-trigger-button",
            onClick: n,
            size: t === u.Small ? "small" : "default",
            tagName: "span",
            variant: i ? "secondary" : "borderless"
        })
    }
}), define("modules/clean/react/files_view/overflow_menu_item_section", ["require", "exports", "tslib", "react", "spectrum/popover"], function(e, t, i, o, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), t.OverflowMenuItemSection = function(e) {
        var t = e.actionSection,
            i = e.showSeparators,
            n = void 0 === i || i,
            l = e.renderItem;
        return 0 === t.length ? null : o.default.createElement(o.default.Fragment, null, t.map(function(e) {
            return e.map(function(e, t) {
                return o.default.createElement(o.default.Fragment, {
                    key: t + "-" + e.label
                }, l(e))
            })
        }).reduce(function(e, t, i) {
            return e.concat(n ? [o.default.createElement(r.PopoverItemGroupSeparator, {
                key: i
            })] : [], t)
        }))
    }
}), define("modules/clean/react/files_view/star", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable"], function(e, t, i, o, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), t.StarContainer = r.Loadable({
        loader: function() {
            return i.__awaiter(this, void 0, Promise, function() {
                var t, r, n, l;
                return i.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, new Promise(function(t, i) {
                                e(["modules/clean/react/starred/browse_exports"], t, i)
                            }).then(i.__importStar)];
                        case 1:
                            return t = a.sent(), r = t.idTypePairFromStarrableItem, n = t.Star, l = t.StarredSource, [2, function(e) {
                                var t = e.item,
                                    i = e.user,
                                    a = e.className,
                                    s = e.onStarClick,
                                    c = e.isReadOnly,
                                    d = e.tabIndex,
                                    u = r(t),
                                    p = u.id,
                                    h = u.type;
                                return o.default.createElement("div", {
                                    className: a
                                }, o.default.createElement(n, {
                                    id: p,
                                    key: "star",
                                    idType: h,
                                    user: i,
                                    onStarClick: s,
                                    source: l.BROWSE,
                                    isReadOnly: c,
                                    tabIndex: d
                                }))
                            }]
                    }
                })
            })
        }
    })
}), define("modules/clean/react/files_view/tile_grid", ["require", "exports", "tslib", "external/classnames", "external/immutable", "react", "spectrum/button", "modules/clean/em_string", "modules/clean/filepath", "modules/clean/filetypes", "modules/clean/react/browse/models", "modules/clean/react/files_view/constants", "modules/clean/react/files_view/drag_and_drop", "modules/clean/react/files_view/file_list_utils", "modules/clean/react/files_view/keyboard_shortcuts", "modules/clean/react/files_view/overflow_menu", "modules/clean/react/files_view/star", "modules/clean/react/files_view/tile_label_input", "modules/clean/react/files_view/types", "modules/clean/react/files_view/util", "modules/clean/react/icon/file_folder_icon", "modules/clean/react/maestro/tile_grid", "modules/clean/react/selectable_list", "modules/clean/react/title_bubble", "modules/core/browser", "modules/core/i18n"], function(e, t, i, o, r, n, l, a, s, c, d, u, p, h, m, f, _, g, b, T, S, E, v, w, y, F) {
    "use strict";

    function I(e) {
        var t = e instanceof d.File ? s.filename(e.fq_path) : T.isFswm(e) ? e.filename : e instanceof d.Paper ? e.title : e.name;
        if (e instanceof d.File) switch (e.type) {
            case c.FileTypes.FOLDER:
                t = F._("Folder, %(alt)s").format({
                    alt: t
                });
                break;
            case c.FileTypes.PACKAGE:
                t = F._("Package, %(alt)s").format({
                    alt: t
                });
                break;
            case c.FileTypes.SHARED_FOLDER:
                t = F._("Shared folder, %(alt)s").format({
                    alt: t
                });
                break;
            case c.FileTypes.SANDBOX:
                t = F._("Sandbox, %(alt)s").format({
                    alt: t
                });
                break;
            case c.FileTypes.TEAM_SHARED_FOLDER:
                t = F._("Team shared folder, %(alt)s").format({
                    alt: t
                });
                break;
            case c.FileTypes.TEAM_MEMBER_FOLDER:
                t = F._("Team member folder, %(alt)s").format({
                    alt: t
                });
                break;
            default:
                t = F._("File, %(alt)s").format({
                    alt: t
                })
        }
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), r = i.__importStar(r), n = i.__importDefault(n), s = i.__importStar(s), y = i.__importStar(y);
    var L = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onStarClickCallback = function(e) {
                var i = t.props,
                    o = i.onStarClick,
                    r = i.item,
                    n = r;
                o && o(n, e)
            }, t
        }
        return i.__extends(t, e), t.prototype.render = function() {
            var e, t = this.props,
                i = t.fileRename,
                o = t.arePostTTIModulesLoaded,
                r = t.user,
                l = t.item,
                c = t.createRenameCancelHandler,
                p = t.createRenameSubmitHandler;
            if (e = l instanceof d.File ? s.filename(l.fq_path) : l instanceof d.FileSharedWithMe ? l.filename : l instanceof d.Paper ? l.title : l.name, l instanceof d.File && i && s.paths_are_equal(i.file.fq_path, l.fq_path)) {
                if (i.state === b.RenameState.PENDING_INPUT) return n.default.createElement(g.TileLabelInput, {
                    defaultValue: e,
                    label: e,
                    onCancel: c(l),
                    onSubmit: p(l)
                });
                if (i.state === b.RenameState.SAVING_INPUT) return n.default.createElement(E.TileItemLabelText, {
                    className: "tile-label__text--saving",
                    label: F._("Renaming…")
                })
            }
            var h = a.Emstring.em_snippet(e, 14, .5),
                m = o && l instanceof d.File && !d.File.isNoAccessSharedFolder(l),
                f = n.default.createElement(E.TileItemLabelText, {
                    key: "label",
                    label: h
                });
            if (e !== h) {
                var T = e.length <= u.FILE_NAME_TOOLTIP_MAX_LINE_LENGTH ? e : n.default.createElement("div", {
                    className: "tile-label-tooltip"
                }, e);
                f = n.default.createElement(w.TitleBubble, {
                    content: T,
                    position: w.TitleBubble.POSITIONS.BOTTOM,
                    className: "tile-label__title-bubble",
                    key: "tooltip"
                }, f)
            }
            var S = l instanceof d.File ? this.onStarClickCallback : void 0,
                v = n.default.createElement(_.StarContainer, {
                    item: l,
                    user: r,
                    className: "tile-star",
                    key: "tileStar",
                    onStarClick: S,
                    tabIndex: -1
                });
            return n.default.createElement("span", null, [f, m && !i && v])
        }, t
    })(n.default.PureComponent);
    t.TileLabel = L;
    var C = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                inSelectMode: !1,
                selectedIds: r.Set()
            }, t.handleFileViewerUnmount = function() {
                t.tileGrid && t.tileGrid.getAndUpdateTileLayout();
                var e = t.props.selectedFiles.first();
                e && t.props.onFocusFile(e.fq_path)
            }, t.createRenameCancelHandler = function(e) {
                return function() {
                    t.props.onRenameCancel(e)
                }
            }, t.createRenameSubmitHandler = function(e) {
                return function(i) {
                    t.props.onRenameSubmit(e, i)
                }
            }, t.setTileGridRef = function(e) {
                t.tileGrid = e
            }, t.hrefForItem = function(e, i) {
                return i instanceof d.File ? t.props.hrefForFile(e, i) : i instanceof d.FileSharedWithMe ? i.href : i.url
            }, t.getTileItem = function(e, i) {
                var o = t.props,
                    r = o.activeDropTarget,
                    a = o.isCreateFolderUIActive,
                    s = o.isPhotosPage,
                    c = o.items,
                    p = o.selection,
                    h = o.user,
                    m = o.viewType,
                    f = o.focusedFileIndex,
                    _ = o.disabledMultiselect,
                    g = t.state.inSelectMode;
                if (a) {
                    if (0 === e) return t.getCreateFolderTile();
                    e -= 1
                }
                var E = c.get(e);
                if (!E) {
                    var v = "Placeholder " + e;
                    return {
                        altText: v,
                        id: v,
                        isViewOnly: !0,
                        isDraggable: !1,
                        isSelectable: !1
                    }
                }
                var w;
                w = t.props.expSelectableFswm ? T.isFile(E) || T.isFswm(E) : T.isFile(E);
                var y, L = E,
                    C = g && w,
                    P = f === e,
                    M = C && p.selected.some(function(e) {
                        return L instanceof d.FileSharedWithMe ? L.file_id === e : L.fq_path === e
                    }),
                    N = t.createToggleSelectHandler(L, M),
                    D = t.createClickHandler({
                        item: E,
                        inSelectModeAndIsFile: C,
                        toggleSelectHandler: N
                    }),
                    R = t.props.selectionMethod === b.SelectionMethod.CLICK ? t.createViewFileHandler(E, b.FilesViewActionSource.ROW_DOUBLE_CLICK) : void 0,
                    O = t.createViewFileHandler(E, b.FilesViewActionSource.ROW_TITLE);
                y = t.props.expSelectableFswm ? (T.isFile(E) || T.isFswm(E)) && g ? n.default.createElement(l.Button, {
                    className: "tile__action-button--view-file",
                    variant: "secondary",
                    size: "small",
                    "aria-label": F._("View File"),
                    onClick: t.createViewFileHandler(E, b.FilesViewActionSource.ROW_PREVIEW_ICON),
                    tabIndex: P ? 0 : -1
                }) : !T.isFile(E) && !T.isFswm(E) || g ? void 0 : t.renderTileOverflowMenu(E, i) : T.isFile(E) && g ? n.default.createElement(l.Button, {
                    className: "tile__action-button--view-file",
                    variant: "secondary",
                    size: "small",
                    "aria-label": F._("View File"),
                    onClick: t.createViewFileHandler(E, b.FilesViewActionSource.ROW_PREVIEW_ICON),
                    tabIndex: P ? 0 : -1
                }) : T.isFile(E) && !g ? t.renderTileOverflowMenu(E, i) : void 0;
                var k = t.renderLabelElement(e),
                    A = I(E),
                    H = E === r,
                    x = t.hrefForItem(h, E),
                    V = E instanceof d.File || E instanceof d.FileSharedWithMe ? S.getThumbnailUrlForItem(E.thumbnail_url_tmpl, u.ViewTypeThumbnailSizes[m]) : void 0;
                return {
                    file: L,
                    paper: E instanceof d.Paper ? E : void 0,
                    fileSharedWithMe: E instanceof d.FileSharedWithMe ? E : void 0,
                    id: d.itemId(E),
                    labelNode: k,
                    altText: A,
                    thumbnailUrl: V,
                    actionNode: y,
                    onClick: D,
                    onDoubleClick: R,
                    onLabelClick: O,
                    isDraggable: !s,
                    isViewOnly: _,
                    isFocused: P,
                    isSelectable: w,
                    handleToggleSelect: N,
                    checkboxAriaText: F._("Select tile"),
                    href: x,
                    onDragEnter: s ? void 0 : t.createDragEnterHandler(L, M, H),
                    onDragStart: s ? void 0 : t.createDragStartHandler(L, M, N)
                }
            }, t.shouldFileBeHighlightedDropTarget = function(e, i) {
                var o = t.props.dropTargetHighlightMode;
                return h.shouldFileBeHighlightedDropTarget({
                    file: e,
                    isSelected: i,
                    dropTargetHighlightMode: o
                })
            }, t.scrollIntoView = function(e) {
                var i = e.top,
                    o = e.bottom,
                    r = t.props.viewportTopOffset,
                    n = void 0 === r ? 0 : r,
                    l = t.getScrollPane(),
                    a = l.height,
                    s = l.scrollTop,
                    c = l.scrollTo,
                    d = a - n,
                    u = s + d;
                i < s ? c(0, i) : o > u && c(0, o - d)
            }, t
        }
        return i.__extends(t, e), t.prototype.componentWillMount = function() {
            this.setState({
                inSelectMode: this.props.selectedFiles.count() > 0
            }), this.setSelectedTiles(this.props)
        }, t.prototype.componentDidMount = function() {
            this.setupExternalDragHandler(), this.setupKeyboardShortcuts()
        }, t.prototype.componentWillUnmount = function() {
            this.props.isPhotosPage || m.resetFileJumpKeyboardShortcuts(v.SELECTABLE_TILE_GRID_KEY_SCOPE), m.resetFilesViewKeyboardShortcuts(v.SELECTABLE_TILE_GRID_KEY_SCOPE), p.cleanupExternalDragHandler(v.SELECTABLE_TILE_GRID_KEY_SCOPE)
        }, t.prototype.componentWillReceiveProps = function(e) {
            e.selectedFiles !== this.props.selectedFiles && (this.setSelectedTiles(e), this.setState({
                inSelectMode: e.selectedFiles.count() > 0
            }))
        }, t.prototype.componentDidUpdate = function(e) {
            (e.createNewFolderState === b.NewFolderCreationState.PENDING_INPUT && this.props.createNewFolderState === b.NewFolderCreationState.SAVING_INPUT || e.fileRename !== this.props.fileRename || e.items !== this.props.items || e.starredState !== this.props.starredState) && this.tileGrid.forceUpdate()
        }, t.prototype.getTotalNumItems = function() {
            var e = this.props,
                t = e.items,
                i = e.totalNumItems,
                o = e.isCreateFolderUIActive,
                r = Math.max(t.size, i);
            return o && (r += 1), r
        }, t.prototype.createToggleSelectHandler = function(e, t) {
            var i = this,
                o = e instanceof d.FileSharedWithMe ? e.file_id : e.fq_path;
            return function(e, r) {
                void 0 === r && (r = !0), r && e.preventDefault(), e.stopPropagation();
                var n = i.props,
                    l = n.onDeselectFile,
                    a = n.onSelectFile,
                    s = "keyCode" in e,
                    c = !s && e.shiftKey;
                t ? l(o, c) : a(o, c ? v.SelectOptions.EXTEND : v.SelectOptions.DEFAULT)
            }
        }, t.prototype.renderTileOverflowMenu = function(e, t) {
            var i = this.props,
                o = i.getOverflowMenuActions,
                r = i.thumbStore,
                l = i.arePostTTIModulesLoaded,
                a = 0 === t ? "left" : "right";
            return l && n.default.createElement(f.FilesViewOverflowMenu, {
                file: e,
                thumbStore: r,
                getOverflowMenuActions: o,
                attachment: a,
                size: f.OverflowMenuSize.Small,
                showBorders: !0,
                ariaHidden: !0
            })
        }, t.prototype.renderLabelElement = function(e) {
            var t = this.props,
                i = t.items,
                o = t.focusedFileIndex,
                r = t.user,
                l = t.fileRename,
                a = t.arePostTTIModulesLoaded,
                s = t.onStarClick;
            if (!t.isPhotosPage) {
                var c = i.get(e);
                if (c) {
                    var d = this.state.inSelectMode,
                        u = o === e;
                    return n.default.createElement(L, {
                        item: c,
                        user: r,
                        fileRename: l,
                        arePostTTIModulesLoaded: a,
                        onStarClick: s,
                        inSelectMode: d,
                        isTileFocused: u,
                        createRenameCancelHandler: this.createRenameCancelHandler,
                        createRenameSubmitHandler: this.createRenameSubmitHandler
                    })
                }
            }
        }, t.prototype.createViewFileHandler = function(e, t) {
            var i = this;
            return function(o) {
                if (o.preventDefault(), o.stopPropagation(), "click" === o.type) {
                    var r = o;
                    if (0 === r.button) {
                        var n = i.hrefForItem(i.props.user, e);
                        if (T.hasModifierKey(r)) return void y.open_tab(n)
                    }
                }
                e instanceof d.File ? i.props.onNavigateToFileOrFolder(e, {
                    onFileViewerUnmount: i.handleFileViewerUnmount,
                    actionSource: t
                }) : e instanceof d.FileSharedWithMe ? i.props.onOpenFileSharedWithMe(e) : e instanceof d.Paper && i.props.onOpenPaper(e)
            }
        }, t.prototype.createClickHandler = function(e) {
            var t, i = this,
                o = e.item,
                r = e.inSelectModeAndIsFile,
                n = e.toggleSelectHandler,
                l = this.createViewFileHandler(o, b.FilesViewActionSource.ROW_SINGLE_CLICK);
            return t = this.props.expSelectableFswm ? o instanceof d.File || o instanceof d.FileSharedWithMe : o instanceof d.File,
                function(e) {
                    if (i.props.selectionMethod === b.SelectionMethod.CLICK) {
                        if (t) {
                            var a = "keyCode" in e;
                            if (a) n(e);
                            else {
                                var s = v.SelectOptions.ONLY;
                                e.shiftKey ? s = v.SelectOptions.EXTEND : (e.ctrlKey || e.metaKey) && (s = v.SelectOptions.DEFAULT);
                                var c = o instanceof d.FileSharedWithMe ? o.file_id : o.fq_path;
                                i.props.onSelectFile(c, s)
                            }
                        }
                    } else r ? n(e) : l(e)
                }
        }, t.prototype.setSelectedTiles = function(e) {
            var t = function(e) {
                    return e instanceof d.FileSharedWithMe ? e.file_id : e.fq_path
                },
                i = r.Set().withMutations(function(i) {
                    e.selectedFiles.forEach(function(e) {
                        i.add(t(e))
                    })
                });
            this.setState({
                selectedIds: i
            })
        }, t.prototype.setupExternalDragHandler = function() {
            var e = this,
                t = function() {
                    return !!e.props.isDraggingInternalFiles
                },
                i = function() {
                    return !!e.props.isDraggingExternalFiles
                },
                o = function() {
                    return e.props.activeDropTarget
                };
            p.setupExternalDragHandler(v.SELECTABLE_TILE_GRID_KEY_SCOPE, t, i, this.props.onSetFileUploaderPath, ".tile", o, this.props.onSetDropTarget)
        }, t.prototype.setupKeyboardShortcuts = function() {
            var e = this,
                t = this.props,
                i = t.user,
                o = t.viewType,
                r = t.onDelete,
                n = t.onShowRename,
                l = t.deselectAll,
                a = t.getIsCurrentPathWriteable,
                s = t.getIsFileJumping,
                c = t.onAddFileJumpKeyCode,
                d = t.onResetFileJump,
                u = t.onCopyToClipboard,
                p = t.onFocusSearchBar,
                h = t.onPasteFromClipboard,
                f = t.selectAll,
                _ = m.generateGetIsGlobalEvent(this),
                g = _,
                b = function() {
                    return e.props.selectedFiles
                };
            this.props.isPhotosPage || m.setupFileJumpKeyboardShortcuts({
                user: i,
                viewType: o,
                scope: v.SELECTABLE_TILE_GRID_KEY_SCOPE,
                getIsFileJumping: s,
                onAddFileJumpKeyCode: c,
                onResetFileJump: d
            }), m.setupFilesViewKeyboardShortcuts({
                user: i,
                viewType: o,
                getIsGlobalEvent: _,
                getIsItemEvent: g,
                getSelectedFiles: b,
                isCurrentPathWriteable: a,
                selectAllAction: f,
                deselectAllAction: l,
                onCopyToClipboard: u,
                onDelete: r,
                onFocusSearchBar: p,
                onPasteFromClipboard: h,
                onShowRename: n,
                onNavigateToFileOrFolder: function() {},
                onNavigateToParentFolder: function() {},
                scope: v.SELECTABLE_TILE_GRID_KEY_SCOPE,
                onShowHelpMenu: function() {
                    return e.props.onOpenKeyboardShortcutModal()
                }
            })
        }, t.prototype.createDragEnterHandler = function(e, t, i) {
            var o = this;
            return function(r) {
                o.props.onDragEnter(r, e, t, i)
            }
        }, t.prototype.createDragStartHandler = function(e, t, i) {
            var o = this;
            return function(r) {
                t ? o.props.onDragStart(r) : (i(r, !1), o.props.onDragStart(r, [e]))
            }
        }, t.prototype.getCreateFolderTile = function() {
            var e = this.props,
                t = e.createNewFolderState,
                i = e.onNewFolderCancel,
                o = e.onNewFolderSubmit,
                r = F._("New folder"),
                l = n.default.createElement("div", null);
            return t === b.NewFolderCreationState.PENDING_INPUT ? (r = F._("Folder name"), l = n.default.createElement(g.TileLabelInput, {
                label: r,
                onCancel: i,
                onSubmit: o
            })) : t === b.NewFolderCreationState.SAVING_INPUT && (r = F._("Creating new folder…"), l = n.default.createElement(E.TileItemLabelText, {
                className: "tile-label__text--saving",
                label: r
            })), {
                altText: r,
                id: "New folder tile",
                isDraggable: !1,
                isSelectable: !1,
                labelNode: l
            }
        }, t.prototype.getTileGridRef = function() {
            return this.tileGrid
        }, t.prototype.getScrollPane = function() {
            var e = this.props.scrollContainer;
            if (e && e.current) {
                var t = e.current;
                return {
                    height: t.clientHeight,
                    scrollTop: t.scrollTop,
                    scrollTo: t.scrollTo.bind(e.current)
                }
            }
            return {
                height: window.innerHeight,
                scrollTop: "scrollingElement" in window.document && window.document.scrollingElement ? window.document.scrollingElement.scrollTop : window.document.documentElement.scrollTop,
                scrollTo: window.scrollTo.bind(window)
            }
        }, t.prototype.getWindow = function() {
            var e = this.props.scrollContainer;
            return e && e.current ? T.createFakeWindow(e.current) : window
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.enableMaxHeightGrouping,
                i = e.sections,
                r = e.selectionMethod,
                l = e.viewType,
                a = e.viewportTopOffset,
                s = e.scrollContainer,
                c = o.default({
                    "file-tile-grid-container": !0,
                    "file-tile-grid-container--show-checkboxes": this.state.inSelectMode,
                    "file-tile-grid-container--click-to-select": r === b.SelectionMethod.CLICK
                }),
                d = new Set;
            return this.state.selectedIds.forEach(function(e) {
                return d.add(e)
            }), s && !s.current ? null : n.default.createElement("div", {
                role: "grid",
                "aria-multiselectable": "true"
            }, n.default.createElement(E.InfiniteTileGrid, {
                key: "tileGrid",
                ref: this.setTileGridRef,
                totalNumItems: this.getTotalNumItems(),
                containerClass: c,
                rowClass: "file-tile-row",
                enableMaxHeightGrouping: t,
                delayRenderFullTile: !this.props.isCreateFolderUIActive,
                logTileLoading: !0,
                numThresholdRows: u.FilesViewTileGridConstants.NUM_THRESHOLD_ROWS,
                scrollDeltaThreshold: u.FilesViewTileGridConstants.SCROLL_DELTA_THRESHOLD,
                sectionStartIndices: i.sectionStartIndices,
                sectionLabels: i.sectionLabels,
                showLabels: !this.props.isPhotosPage,
                contentOffset: a,
                getTileItem: this.getTileItem,
                selectedIds: d,
                handleTTI: this.props.onTTI,
                thumbStore: this.props.thumbStore,
                onRangeInView: this.props.onRangeInView,
                tilesPerRow: this.props.tilesPerRow,
                onTilesPerRowChange: this.props.onTilesPerRowChange,
                activeDropTarget: this.props.activeDropTarget,
                maxTileWidth: u.ViewTypeGridSizes[l],
                tileHeight: u.ViewTypeGridSizes[l],
                shouldFileBeHighlightedDropTarget: this.shouldFileBeHighlightedDropTarget,
                scrollToIndex: this.props.focusedFileIndex,
                scrollIntoView: this.scrollIntoView,
                window: this.getWindow()
            }))
        }, t.defaultProps = {
            enableMaxHeightGrouping: !1,
            selectionMethod: b.SelectionMethod.CHECKBOX
        }, t
    })(n.default.PureComponent);
    t.FilesViewTileGrid = C
}), define("modules/clean/react/files_view/tile_label_input", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/files_view/name_input"], function(e, t, i, o, r, n) {
    "use strict";

    function l(e) {
        var t = o.default("tile-label-input", e.className),
            i = e.defaultValue || "",
            l = function(e) {
                e.stopPropagation(), e.preventDefault()
            };
        return r.default.createElement(n.NameInput, {
            className: t,
            defaultValue: i,
            label: e.label,
            onCancel: e.onCancel,
            onClick: l,
            onSubmit: e.onSubmit
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), r = i.__importDefault(r), t.TileLabelInput = l
}), define("modules/clean/react/files_view/util", ["require", "exports", "tslib", "modules/clean/filepath", "modules/clean/react/browse/models", "modules/clean/react/files_view/types"], function(e, t, i, o, r, n) {
    "use strict";

    function l(e) {
        return 0 === e.button && !a(e)
    }

    function a(e) {
        return e.altKey || e.ctrlKey || e.metaKey
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importStar(o), t.shouldHandleClick = l, t.hasModifierKey = a, t.isFile = function(e) {
        return e instanceof r.File
    }, t.isFswm = function(e) {
        return e instanceof r.FileSharedWithMe
    }, t.getFilename = function(e) {
        return t.isFile(e) ? o.filename(e.fq_path) : e.filename
    }, t.getRedesignProps = function(e) {
        var t = {
            clickToSelect: !1,
            highDensityBrowse: !1,
            highDensitySearch: !1
        };
        return e ? e === n.FilesViewRedesignVariants.ALL ? i.__assign({}, t, {
            clickToSelect: !0,
            highDensityBrowse: !0
        }) : e === n.FilesViewRedesignVariants.CLICK_TO_SELECT ? i.__assign({}, t, {
            clickToSelect: !0
        }) : e === n.FilesViewRedesignVariants.HIGH_DENSITY ? i.__assign({}, t, {
            clickToSelect: !0,
            highDensityBrowse: !0,
            highDensitySearch: !0
        }) : t : t
    }, t.createFakeWindow = function(e) {
        return i.__assign({}, window, {
            document: {
                documentElement: {
                    get scrollHeight() {
                        return e.scrollHeight
                    },
                    get scrollTop() {
                        return e.scrollTop
                    }
                },
                body: {
                    get scrollTop() {
                        return e.scrollTop
                    }
                }
            },
            get innerHeight() {
                return e.clientHeight
            },
            get pageYOffset() {
                return e.scrollTop
            },
            addEventListener: e.addEventListener.bind(e),
            removeEventListener: e.removeEventListener.bind(e),
            requestAnimationFrame: requestAnimationFrame.bind(window),
            cancelAnimationFrame: cancelAnimationFrame.bind(window),
            scrollTo: e.scrollTo ? e.scrollTo.bind(e) : function() {}
        })
    }
}), define("modules/clean/react/maestro/checkbox", ["require", "exports", "tslib", "react", "external/classnames"], function(e, t, i, o, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), r = i.__importDefault(r);
    var n;
    (function(e) {
        e[e.Checked = 0] = "Checked", e[e.PartiallyChecked = 1] = "PartiallyChecked", e[e.Unchecked = 2] = "Unchecked"
    })(n = t.CheckboxState || (t.CheckboxState = {})), t.Checkbox = function(e) {
        var t = e.checkboxState,
            i = e.ariaLabel,
            l = e.onClick,
            a = e.onMouseDown,
            s = e.tabIndex,
            c = r.default({
                "checkbox-button": !0,
                "partial-checked": t === n.PartiallyChecked,
                checked: t === n.Checked
            });
        return o.default.createElement("button", {
            role: "checkbox",
            "aria-checked": t === n.Checked,
            "aria-label": i,
            className: c,
            onClick: l,
            onMouseDown: a,
            tabIndex: s
        })
    }
}), define("modules/clean/react/maestro/tile_element", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/keycode", "modules/clean/paper_formatting_utils", "modules/clean/react/files_view/double_click", "modules/clean/react/icon/file_folder_icon", "modules/clean/react/maestro/checkbox", "modules/clean/react/maestro/tile_grid_logger", "modules/clean/user_education/react/user_education_effect", "modules/clean/react/icon/lock_badge"], function(e, t, i, o, r, n, l, a, s, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importDefault(o), r = i.__importDefault(r), l = i.__importStar(l);
    var h = function() {
        return null
    };
    t.TileLabel = function(e) {
        var t = e.children,
            i = e.onClick;
        if (!t) return null;
        var o = r.default.createElement("div", {
            className: "tile-label",
            "aria-hidden": "true"
        }, t);
        return i ? r.default.createElement("a", {
            onClick: i,
            tabIndex: -1
        }, o) : o
    }, t.TilePlaceholder = function(e) {
        var i = e.leftOffset,
            o = e.tileHeight,
            n = e.tileWidth,
            l = e.thumbNode,
            a = e.labelNode;
        return r.default.createElement("div", {
            className: "tile",
            style: {
                left: i,
                height: o,
                width: n,
                pointerEvents: "none"
            }
        }, r.default.createElement("div", {
            className: "tile__thumb-container",
            style: {
                height: n,
                width: n
            }
        }, l || r.default.createElement("div", {
            className: "tile__preview--placeholder"
        })), r.default.createElement(t.TileLabel, null, a))
    };
    var m = (function(e) {
        function m(t) {
            var o = e.call(this, t) || this;
            return o.thumbRequestId = null, o.animationRequestIds = [], o.handleThumbnailError = function() {
                var e = o.props,
                    t = e.onThumbnailError,
                    i = e.tileIndex;
                o.setState({
                    thumbLoaded: !1
                }), t && t(i)
            }, o.logTileInteractive = function() {
                var e = !!o.props.thumbnailUrl,
                    t = o.state.thumbLoaded;
                if (o.props.onThumbnailLoad) {
                    var i = window.requestAnimationFrame(function() {
                        var i = window.requestAnimationFrame(function() {
                            o.props.onThumbnailLoad(o.props.tileIndex, e, t)
                        });
                        o.animationRequestIds.push(i)
                    });
                    o.animationRequestIds.push(i)
                }
            }, o.toggleSelect = function(e) {
                e.preventDefault(), e.stopPropagation(), o.props.handleToggleSelect(e)
            }, o.handleKeyDown = function(e) {
                var t = e.keyCode;
                e.currentTarget !== e.target || t !== n.KeyCode.SPACE && t !== n.KeyCode.ENTER || (e.preventDefault(), o.props.onClick(e))
            }, o.state = i.__assign({
                thumbLoaded: m.isThumbLoaded(t)
            }, o.calcPaperTitleState(t)), o
        }
        return i.__extends(m, e), m.prototype.componentDidMount = function() {
            var e = this;
            this.props.delayRenderFullTile ? this.renderCompleteTileTimeout = setTimeout(function() {
                e.renderCompleteTileTimeout = 0, e.fetchThumbnail(e.props)
            }, 100) : this.fetchThumbnail(this.props), this.logTileInteractive()
        }, m.prototype.componentDidUpdate = function(e, t) {
            if (!e.isFocused && this.props.isFocused) {
                var i = this.refs.tileContainer;
                i && i.focus()
            }
        }, m.prototype.componentWillReceiveProps = function(e) {
            if (e.thumbnailUrl !== this.props.thumbnailUrl && (this.unbindThumbnailIfNeeded(), this.fetchThumbnail(e)), m.getPaperTitle(this.props) !== m.getPaperTitle(e)) {
                var t = this.calcPaperTitleState(e);
                this.setState(t)
            }
        }, m.getPaperTitle = function(e) {
            return e.paper ? e.paper.title : null
        }, m.prototype.calcPaperTitleState = function(e) {
            return e.paper ? {
                paperTitleParts: l.getPaperDocTitleParts(e.paper, "brws-file-name-grid-icon", "brws-file-name-grid-icon-emoji", !0)
            } : {}
        }, m.prototype.componentWillUnmount = function() {
            this.unbindThumbnailIfNeeded(), this.renderCompleteTileTimeout && clearTimeout(this.renderCompleteTileTimeout), this.animationRequestIds.forEach(function(e) {
                window.cancelAnimationFrame(e)
            }), this.animationRequestIds = []
        }, m.prototype.fetchThumbnail = function(e) {
            var t = this,
                i = e.thumbnailUrl,
                o = e.thumbStore;
            if (i) {
                var r = Date.now();
                this.thumbRequestId = o.bind_url(i, {
                    onSuccess: function() {
                        t.setState({
                            thumbLoaded: !0
                        }), d.InfiniteTileGridLogger.logThumbRTT(Date.now() - r)
                    },
                    onError: function() {
                        t.handleThumbnailError()
                    }
                })
            }
        }, m.prototype.unbindThumbnailIfNeeded = function() {
            var e = this.props.thumbStore;
            this.thumbRequestId && (e.unbind_url(this.thumbRequestId), this.thumbRequestId = null), this.setState({
                thumbLoaded: !1
            })
        }, m.isThumbLoaded = function(e) {
            var t = e.thumbStore,
                i = e.thumbnailUrl;
            return !(!i || !t.get_thumb(i))
        }, m.prototype.renderCheckbox = function() {
            var e = this.props.isSelected ? c.CheckboxState.Checked : c.CheckboxState.Unchecked,
                t = r.default.createElement(c.Checkbox, {
                    ariaLabel: this.props.checkboxAriaText,
                    checkboxState: e,
                    onClick: this.toggleSelect,
                    tabIndex: -1
                });
            return 0 === this.props.tileIndex && (t = r.default.createElement(u.UserEducationEffect, {
                containerName: "FileItemRow",
                name: "FirstFileSelectCheckbox"
            }, t)), r.default.createElement("div", {
                key: "tile-select-checkbox",
                className: "tile-select-checkbox"
            }, t)
        }, m.prototype.renderActionNode = function() {
            return r.default.createElement("div", {
                key: "tile-action-node",
                className: "tile__action-button"
            }, this.props.actionNode)
        }, m.prototype.renderThumbnail = function() {
            var e = this.props,
                t = e.thumbnailUrl,
                i = e.thumbStore,
                o = e.height,
                n = e.width,
                l = e.isSelected;
            if (this.state.thumbLoaded) {
                var a = i.get_thumb(t);
                if (a) {
                    var s = l ? n - 24 : n,
                        c = o ? o : s;
                    return r.default.createElement(p.LockBadge, {
                        file: this.props.file,
                        variant: "preview-large"
                    }, r.default.createElement("img", {
                        className: "tile__preview tile__preview--thumb",
                        draggable: !1,
                        src: a,
                        style: {
                            maxHeight: c,
                            maxWidth: s
                        },
                        onError: this.handleThumbnailError,
                        alt: ""
                    }))
                }
            }
            return this.renderFileIcon()
        }, m.prototype.renderFileIcon = function() {
            var e = this.props,
                t = e.file;
            return e.paper ? this.state.paperTitleParts.icon : t ? r.default.createElement(s.FileOrFolderIcon, i.__assign({
                className: "tile__preview tile__preview--icon brws-file-name-grid-icon",
                file: t,
                variant: "large",
                showPreview: !1
            }, {
                "aria-hidden": !0
            })) : r.default.createElement("div", {
                className: "tile__preview--placeholder"
            })
        }, m.prototype.render = function() {
            var e = this,
                n = this.props,
                l = n.altText,
                s = n.file,
                c = n.height,
                d = n.href,
                u = n.isActiveDropTarget,
                p = n.isAvailableDropTarget,
                h = n.isDraggable,
                m = n.isFocused,
                f = n.isSelectable,
                _ = n.isSelected,
                g = n.isViewOnly,
                b = n.labelHeight,
                T = n.labelNode,
                S = n.leftOffset,
                E = n.onClick,
                v = n.onDoubleClick,
                w = n.onLabelClick,
                y = n.onDragEnter,
                F = n.onDragStart,
                I = n.overrideTabIndex,
                L = n.width,
                C = c ? c : L,
                P = C + b;
            if (g) return r.default.createElement(t.TilePlaceholder, {
                leftOffset: S,
                tileHeight: P,
                tileWidth: L,
                thumbNode: this.renderThumbnail(),
                labelNode: T
            });
            var M = {
                    left: S,
                    height: P,
                    width: L
                },
                N = {
                    height: C,
                    width: L
                },
                D = {
                    className: o.default("tile", {
                        "tile--is-selected": _,
                        "tile--is-dragover": u,
                        "tile--is-droppable": p && !u
                    }),
                    "data-filename": s && s.name,
                    style: M,
                    draggable: h,
                    href: d,
                    onDragEnter: y,
                    onDragStart: F,
                    role: "gridcell"
                },
                R = r.default.createElement("div", {
                    className: "tile__thumb-container",
                    style: N
                }, this.renderThumbnail());
            return r.default.createElement("div", {
                role: "row",
                ref: "tileContainer",
                className: "tile__container",
                onKeyDown: this.handleKeyDown,
                tabIndex: I || m ? 0 : -1,
                "aria-label": l,
                "aria-selected": _
            }, r.default.createElement(a.WithDoubleClick, {
                onClick: E,
                onDoubleClick: v
            }, function(o) {
                return r.default.createElement("div", i.__assign({}, D, {
                    onClick: o.onClick
                }), R, f && e.renderCheckbox(), e.renderActionNode(), r.default.createElement(t.TileLabel, {
                    onClick: w
                }, T))
            }))
        }, m.defaultProps = {
            checkboxAriaText: "",
            delayRenderFullTile: !0,
            handleToggleSelect: h,
            isFocused: !1,
            isSelected: !1,
            isViewOnly: !1,
            onDragEnter: h,
            onDragStart: h,
            onClick: h
        }, m
    })(r.default.PureComponent);
    t.TileElement = m
}), define("modules/clean/react/maestro/tile_grid", ["require", "exports", "tslib", "react", "external/classnames", "external/react-dom", "spectrum/culled_list", "modules/clean/filepath", "modules/clean/js_client_stopwatch", "modules/clean/react/maestro/tile_element", "modules/clean/react/maestro/tile_grid_logger"], function(e, t, i, o, r, n, l, a, s, c, d) {
    "use strict";

    function u(e) {
        var t = null;
        return function() {
            for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
            if (!t || t.length !== i.length || !t.every(function(e, t) {
                    return e === i[t]
                })) return t = i, e.apply(void 0, i)
        }
    }

    function p(e) {
        var t = e.className,
            i = e.label;
        return t = r.default("tile-label__text", t), o.default.createElement("div", {
            className: t
        }, i)
    }
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = i.__importDefault(o),
        r = i.__importDefault(r), n = i.__importStar(n), a = i.__importStar(a);
    t.memoizeCallback = u, t.TileItemLabelText = p;
    var h = (function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            if (i.tileIndexToRowIndex = [], i.rowHeights = [], i.ttiReported = !1, i.itemRangeByRow = [], i.updateOnResize = function() {
                    window.requestAnimationFrame(function() {
                        i.getAndUpdateTileLayout()
                    })
                }, i.handleTTI = function() {
                    i.ttiReported = !0;
                    var e = i.props.handleTTI;
                    e && e()
                }, i.setLastViewedPage = function(e) {
                    var t = document.documentElement.scrollTop || document.body.scrollTop,
                        o = Math.round(t / e);
                    if (i.tileLoadLogger.pruneTrackedPages(), i.tileLoadLogger.logCompletedPages(), !i.tileLoadLogger.pagesCompletedLogging.has(o) && !i.tileLoadLogger.pagesToLog.has(o))
                        if (o !== i.tileLoadLogger.lastViewedPage) {
                            if (i.tileLoadLogger.lastViewedPage = o, i.tileLoadLogger.pageChangeTime = i.tileLoadLogger.getTimeNow(), !i.tileLoadLogger.startTimeByPage.get(o)) {
                                var r = i.tileLoadLogger.getTimeNow();
                                i.tileLoadLogger.startTimeByPage.set(o, r)
                            }
                        } else {
                            var r = i.tileLoadLogger.getTimeNow();
                            r - i.tileLoadLogger.pageChangeTime > 1e3 && i.tileLoadLogger.pagesToLog.add(o)
                        }
                }, i.logTileError = function(e) {
                    i.tileLoadLogger && i.tileLoadLogger.recordTileError(e), i.props.logTileLoading && d.InfiniteTileGridLogger.logThumbLoadError()
                }, i.logTileLoaded = function(e, t, o) {
                    i.tileLoadLogger && i.tileLoadLogger.recordTileLoaded(e, t, o)
                }, i.renderTileElement = function(e, t, r) {
                    if (e < 0 || e > i.props.totalNumItems) return null;
                    var n = i.props.getTileItem(e, r);
                    if (!n) return o.default.createElement(c.TilePlaceholder, {
                        leftOffset: t,
                        tileHeight: i.state.tileWidth,
                        tileWidth: i.state.tileWidth
                    });
                    var l, s = i.ttiReported && i.props.delayRenderFullTile,
                        d = n.isSelectable && !!i.props.selectedIds && i.props.selectedIds.has(n.id),
                        u = n.file && i.props.shouldFileBeHighlightedDropTarget(n.file, d),
                        p = u && n.file === i.props.activeDropTarget;
                    n.fileSharedWithMe ? l = {
                        type: n.fileSharedWithMe.type,
                        icon: n.fileSharedWithMe.icon,
                        fq_path: "/" + n.fileSharedWithMe.filename,
                        thumbnail_url_tmpl: n.fileSharedWithMe.thumbnail_url_tmpl,
                        name: n.fileSharedWithMe.filename
                    } : n.file && (l = {
                        type: n.file.type,
                        icon: n.file.icon,
                        fq_path: n.file.fq_path,
                        thumbnail_url_tmpl: n.file.thumbnail_url_tmpl,
                        name: a.filename(n.file.fq_path),
                        isDeleted: n.file.isDeleted,
                        is_locked: n.file.is_locked,
                        is_lockholder: n.file.is_lockholder,
                        lockholder_name: n.file.lockholder_name
                    });
                    var h = 0 === e && i.props.selectedIds && 0 === i.props.selectedIds.size;
                    return o.default.createElement(c.TileElement, {
                        file: l,
                        paper: n.paper,
                        key: n.id,
                        onClick: n.onClick,
                        onDoubleClick: n.onDoubleClick,
                        onLabelClick: n.onLabelClick,
                        width: i.state.tileWidth,
                        leftOffset: t,
                        tileIndex: e,
                        labelHeight: n.labelNode ? i.props.labelHeight : 0,
                        delayRenderFullTile: s,
                        actionNode: n.actionNode,
                        thumbnailUrl: n.thumbnailUrl,
                        labelNode: n.labelNode,
                        altText: n.altText,
                        onThumbnailError: i.props.logTileLoading ? i.logTileError : void 0,
                        onThumbnailLoad: i.props.logTileLoading ? i.logTileLoaded : void 0,
                        isDraggable: n.isDraggable,
                        onDragEnter: n.onDragEnter,
                        onDragStart: n.onDragStart,
                        isFocused: n.isFocused,
                        isSelectable: n.isSelectable,
                        isSelected: d,
                        isViewOnly: n.isViewOnly,
                        isActiveDropTarget: p,
                        isAvailableDropTarget: u,
                        handleToggleSelect: n.handleToggleSelect,
                        checkboxAriaText: n.checkboxAriaText,
                        thumbStore: i.props.thumbStore,
                        href: n.href,
                        overrideTabIndex: h
                    })
                }, i.renderRow = function(e, t, r) {
                    var n = i.getRowHeight(t);
                    if (!e) return o.default.createElement(l.CulledItem, {
                        className: i.props.rowClass,
                        height: n,
                        key: t,
                        tagName: "div",
                        topOffset: r
                    });
                    if (!Array.isArray(e)) return o.default.createElement(l.CulledItem, {
                        className: i.props.rowClass,
                        height: n,
                        key: t,
                        tagName: "div",
                        topOffset: r
                    }, e);
                    for (var a = e, s = a[0], c = a[1], d = i.state.tileWidth + i.props.tilePadding, u = [], p = 4, h = s; h < c; h++) u.push(i.renderTileElement(h, p, u.length)), p += d;
                    return o.default.createElement(l.CulledItem, {
                        className: i.props.rowClass,
                        height: n,
                        key: t,
                        tagName: "div",
                        topOffset: r
                    }, u)
                }, i.handleRangeInView = u(function(e, t) {
                    var o = i.props.onRangeInView;
                    if (o && 0 !== i.props.totalNumItems) {
                        var r = i.translateRowRangeToItemRange(e, t),
                            n = r[0],
                            l = r[1];
                        isNaN(n) || isNaN(l) || o(n, l)
                    }
                }), i.props.sectionLabels || i.props.sectionStartIndices) {
                if (!i.props.sectionLabels || !i.props.sectionStartIndices) throw new Error("Included only one of `sectionLabels` or `sectionStartIndices`.");
                if (i.props.sectionLabels.length !== i.props.sectionStartIndices.length) throw new Error("sectionLabels and sectionStartIndices must be of same length.")
            }
            return i.state = {
                tileWidth: i.props.maxTileWidth
            }, s.JSStopwatch.create_stopwatch_if_not_exist("infinite_tile_grid_logging"), i
        }
        return i.__extends(t, e), t.prototype.updateLayout = function() {
            var e = this;
            this.animationFrameRequestId = window.requestAnimationFrame(function() {
                var t = e.getAndUpdateTileLayout();
                e.props.logTileLoading && !e.tileLoadLogger && e.setupTileLogging(e.getRowHeight(), t.tilesPerRow)
            })
        }, t.prototype.componentDidMount = function() {
            window.addEventListener("resize", this.updateOnResize), this.updateLayout(), this.updateScroll()
        }, t.prototype.componentWillReceiveProps = function(e) {
            this.tileLoadLogger && this.tileLoadLogger.updateNumTiles(e.totalNumItems), this.props.maxTileWidth !== e.maxTileWidth && this.updateLayout(), e.scrollToIndex !== this.props.scrollToIndex && this.updateScroll(e)
        }, t.prototype.componentWillUnmount = function() {
            window.removeEventListener("resize", this.updateOnResize), this.animationFrameRequestId && window.cancelAnimationFrame(this.animationFrameRequestId), this.tileLoadLogger && (clearInterval(this.logTrackingInterval), delete this.tileLoadLogger)
        }, t.prototype.updateScroll = function(e) {
            var t = void 0 === e ? this.props : e,
                i = t.scrollToIndex,
                o = t.scrollIntoView;
            if (void 0 !== i && o) {
                var r = this.tileIndexToRowIndex[i],
                    n = this.rowHeights.slice(0, r).reduce(function(e, t) {
                        return e + t
                    }, 0);
                o({
                    top: n,
                    bottom: n + this.rowHeights[r]
                })
            }
        }, t.prototype.getRowHeight = function(e) {
            if (void 0 !== e && this.rowHeights) return this.rowHeights[e];
            var t = this.state.tileWidth + this.props.tilePadding;
            return this.props.showLabels && (t += this.props.labelHeight + 4), t
        }, t.prototype.getPageHeight = function() {
            var e = document.documentElement.clientHeight || window.outerHeight,
                t = this.props.contentOffset || 0,
                i = e - t,
                o = this.getRowHeight(),
                r = o * Math.ceil(i / o);
            return Math.max(r, o)
        }, t.prototype.getAndUpdateTileLayout = function() {
            var e = this.props.maxTileWidth + this.props.tilePadding,
                t = n.findDOMNode(this);
            if (!t || 0 === t.clientWidth) return {
                tileWidth: this.state.tileWidth,
                tilesPerRow: this.props.tilesPerRow
            };
            var i = t.clientWidth,
                o = Math.max(1, Math.floor(i / e)),
                r = this.props.maxTileWidth;
            return i % e > 1 && (o++, r = i / o - this.props.tilePadding), this.state.tileWidth !== r && this.setState({
                tileWidth: r
            }), this.props.tilesPerRow !== o && this.props.onTilesPerRowChange(o), {
                tileWidth: r,
                tilesPerRow: o
            }
        }, t.prototype.setupTileLogging = function(e, t) {
            var i = this.getPageHeight(),
                o = t * Math.ceil(i / e);
            this.tileLoadLogger = new d.InfiniteTileGridLogger(this.props.totalNumItems, o, t, this.handleTTI), this.tileLoadLogger.pagesToLog.add(0);
            var r = this.tileLoadLogger.getTimeNow();
            this.tileLoadLogger.startTimeByPage.set(0, r), this.logTrackingInterval = setInterval(this.setLastViewedPage, 200, i)
        }, t.prototype.translateRowRangeToItemRange = function(e, t) {
            var i = this.itemRangeByRow;
            return [i[e][0], i[t][1]]
        }, t.prototype.render = function() {
            var e = this;
            this.itemRangeByRow = [], this.rowHeights = [], this.tileIndexToRowIndex = [];
            var t = [],
                i = this.getRowHeight(),
                r = this.props,
                n = r.containerClass,
                a = r.enableMaxHeightGrouping,
                s = r.numThresholdRows,
                c = r.scrollDeltaThreshold,
                d = r.sectionStartIndices,
                u = r.sectionLabels,
                p = r.totalNumItems,
                h = r.window;
            if (d && d.length > 0) d.forEach(function(r, n) {
                var l = p;
                n !== d.length - 1 && (l = d[n + 1]), e.rowHeights.push(32);
                var a = l - r,
                    s = Math.ceil(a / e.props.tilesPerRow),
                    c = u[n],
                    h = o.default.createElement("div", {
                        className: "tile-section-header",
                        role: "heading",
                        "aria-level": 2
                    }, c);
                t.push(h), e.itemRangeByRow.push([r, r]);
                for (var m = 0; m < s; m++) {
                    var f = r + m * e.props.tilesPerRow,
                        _ = Math.min(f + e.props.tilesPerRow, l),
                        g = [f, _];
                    t.push(g), e.itemRangeByRow.push(g);
                    for (var b = f; b < _; b++) e.tileIndexToRowIndex.push(e.rowHeights.length);
                    e.rowHeights.push(i)
                }
            });
            else
                for (var m = Math.ceil(p / this.props.tilesPerRow), f = 0; f < m; f++) {
                    var _ = f * this.props.tilesPerRow,
                        g = Math.min(_ + this.props.tilesPerRow, p),
                        b = [_, g];
                    t.push(b), this.itemRangeByRow.push(b);
                    for (var T = _; T < g; T++) this.tileIndexToRowIndex.push(this.rowHeights.length);
                    this.rowHeights.push(i)
                }
            return o.default.createElement(l.CulledList, {
                enableMaxHeightGrouping: a,
                items: t,
                listItemHeight: this.rowHeights,
                itemBuffer: s,
                className: n,
                renderRow: this.renderRow,
                scrollThreshold: c,
                shouldUseWindowAsScrollContainer: !0,
                onRangeInView: this.handleRangeInView,
                tagName: "div",
                window: h
            })
        }, t.defaultProps = {
            enableMaxHeightGrouping: !1,
            numThresholdRows: 10,
            tilePadding: 16,
            tileHeight: 160,
            maxTileWidth: 160,
            labelHeight: 40,
            logTileLoading: !1,
            scrollDeltaThreshold: 1,
            showLabels: !0,
            getTileItem: function() {
                return null
            },
            handleTTI: function() {}
        }, t
    })(o.default.PureComponent);
    t.InfiniteTileGrid = h
}), define("modules/clean/react/maestro/tile_grid_logger", ["require", "exports", "modules/clean/js_client_stopwatch", "modules/core/browser"], function(e, t, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e(e, t, i, o) {
            var r = this;
            this.recordTileError = function(e) {
                var t = Math.floor(e / r.numTilesPerPage);
                r.pagesWithThumbErrors.has(t) || r.pagesWithThumbErrors.add(t)
            }, this.recordTileLoaded = function(e, t, i) {
                if (i) {
                    if (r.thumbsLoaded.has(e)) return;
                    r.thumbsLoaded.add(e)
                } else {
                    if (r.iconsLoaded.has(e)) return;
                    r.iconsLoaded.add(e)
                }
                var o = !1;
                o = r.numTiles % r.numTilesPerPage === 0 ? e >= r.numTiles - r.numTilesPerPage : e >= r.numTiles - r.numTiles % r.numTilesPerPage;
                var n = r.numTilesPerPage;
                if (o) {
                    var l = r.numTiles % r.numTilesPerPage;
                    0 !== l && (n = l)
                }
                var a = Math.floor(e / r.numTilesPerPage);
                if (i || !t) {
                    var s = r.numTilesFinalizedByPage[a] || 0;
                    r.numTilesFinalizedByPage[a] = s + 1
                }
                if (0 === a && r.handleTTI) {
                    !(r.iconsLoaded.has(e) && r.thumbsLoaded.has(e)) && (r.numTilesLoadedOnFirstPage++, r.numTilesLoadedOnFirstPage === n && r.handleTTI())
                }
                i && (r.pagesWithThumbs.has(a) || r.pagesWithThumbs.add(a), r.anyThumbLoadedTimeByPage.get(a) || r.anyThumbLoadedTimeByPage.set(a, r.getTimeNow()), r.numTilesFinalizedByPage[a] === n && r.allThumbsLoadedTimeByPage.set(a, r.getTimeNow()))
            }, this.pruneTrackedPages = function() {
                r.startTimeByPage.forEach(function(e, t) {
                    !r.pagesToLog.has(t) && !r.pagesCompletedLogging.has(t) && r.getTimeNow() - e > 2e3 && r.startTimeByPage.delete(t)
                })
            }, this.logCompletedPages = function() {
                r.pagesToLog.forEach(function(e) {
                    var t = r.startTimeByPage.get(e),
                        i = Math.max(r.allThumbsLoadedTimeByPage.get(e), t),
                        o = Math.max(r.anyThumbLoadedTimeByPage.get(e), t);
                    return i && !r.pagesWithThumbs.has(e) ? void r.handlePageCompletedLogging(e) : r.pagesWithThumbErrors.has(e) ? void r.handlePageCompletedLogging(e) : void(t && i && o && (r.logPerfStats(e, t, o, i), r.handlePageCompletedLogging(e)))
                })
            }, this.numTiles = e, this.numTilesPerPage = t, this.numTilesFinalizedByPage = [], this.numTilesLoadedOnFirstPage = 0, this.iconsLoaded = new Set, this.thumbsLoaded = new Set, this.startTimeByPage = new Map, this.allThumbsLoadedTimeByPage = new Map, this.anyThumbLoadedTimeByPage = new Map, this.pagesWithThumbErrors = new Set, this.pagesWithThumbs = new Set, this.pagesCompletedLogging = new Set, this.pagesToLog = new Set, this.handleTTI = o
        }
        return e.prototype.getTimeNow = function() {
            var e = o.performance(),
                t = -1;
            return e && e.now && (t = e.now()), t
        }, e.prototype.updateNumTiles = function(e) {
            this.numTiles >= e || (this.numTiles = e)
        }, e.prototype.handlePageCompletedLogging = function(e) {
            this.pagesCompletedLogging.add(e), this.pagesToLog.delete(e), this.startTimeByPage.delete(e), this.anyThumbLoadedTimeByPage.delete(e), this.allThumbsLoadedTimeByPage.delete(e)
        }, e.logThumbLoadError = function() {
            i.JSStopwatch.recordTrace("visual_browse_thumb_load_error", {
                stopwatchName: "infinite_tile_grid_logging",
                traceTime: 0
            })
        }, e.logThumbRTT = function(e) {
            i.JSStopwatch.recordTrace("visual_browse_thumb_rtt", {
                stopwatchName: "infinite_tile_grid_logging",
                traceTime: e
            })
        }, e.prototype.logPerfStats = function(e, t, o, r) {
            i.JSStopwatch.recordTrace("loaded_any_thumbs_page_" + e, {
                stopwatchName: "infinite_tile_grid_logging",
                traceTime: o - t
            }), i.JSStopwatch.recordTrace("loaded_all_thumbs_page_" + e, {
                stopwatchName: "infinite_tile_grid_logging",
                traceTime: r - t
            })
        }, e
    })();
    t.InfiniteTileGridLogger = r
}), define("modules/clean/sharing/browse_exports", ["require", "exports", "tslib", "modules/core/browser", "modules/clean/sharing/gating_util", "modules/clean/sharing/async_share_modal_util", "modules/clean/sharing/public_folder/public_folder", "modules/clean/sharing/wizard/async_wizard_modals"], function(e, t, i, o, r, n, l, a) {
    "use strict";

    function s() {
        for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
        new Promise(function(t, i) {
            e(["modules/clean/sharing/shared_content_link_mount_folder"], t, i)
        }).then(i.__importStar).then(function(e) {
            e.mountSharedFolder.apply(void 0, t)
        })
    }

    function c() {
        for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
        return i.__awaiter(this, void 0, Promise, function() {
            return i.__generator(this, function(o) {
                return [2, new Promise(function(o, r) {
                    new Promise(function(t, i) {
                        e(["modules/clean/sharing/ui_util"], t, i)
                    }).then(i.__importStar).then(function(e) {
                        o(e.genContentManagerBridgeUri.apply(void 0, t))
                    }, r)
                })]
            })
        })
    }

    function d() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return i.__awaiter(this, void 0, Promise, function() {
            var t;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, c.apply(void 0, e)];
                    case 1:
                        return t = i.sent(), o.open_tab(t.toString()), [2]
                }
            })
        })
    }

    function u(t, o, r, n, l, a, s, c) {
        new Promise(function(t, i) {
            e(["modules/clean/sharing/cdm_new_folder_modal"], t, i)
        }).then(i.__importStar).then(function(e) {
            e.showCdmNewFolderModal(t, o, r, n, l, a, s, c)
        })
    }

    function p(t) {
        return i.__awaiter(this, void 0, void 0, function() {
            var o;
            return i.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, new Promise(function(t, i) {
                            e(["modules/clean/sharing/cdm_new_folder_modal_util"], t, i)
                        }).then(i.__importStar)];
                    case 1:
                        return o = r.sent(), o.showAppropriateNewFolderModalForCdmUser(t), [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = i.__importStar(o), t.asyncMountSharedFolder = s, t.asyncGoToContentManagerForPath = d, t.asyncShowCdmNewFolderModal = u, t.asyncShowAppropriateNewFolderModalForCdmUser = p, t.GoldenGate = r.GoldenGate, t.asyncShowShareModal = n.asyncShowShareModal, t.asyncShowNewFolderShareModal = n.asyncShowNewFolderShareModal, t.asyncShowPrefilledShareModal = n.asyncShowPrefilledShareModal, t.expAsyncShowShareInterstitialModal = n.expAsyncShowShareInterstitialModal, t.makePublicFolderLink = l.makePublicFolderLink, t.shouldUsePublicFolderSharing = l.shouldUsePublicFolderSharing, t.showPublicFolderLinkModal = l.showPublicFolderLinkModal, t.asyncShowShareAFolderWizardModal = a.asyncShowShareAFolderWizardModal
});
//# sourceMappingURL=pkg-files-view-extra.min.js-vflYuzKMT.map