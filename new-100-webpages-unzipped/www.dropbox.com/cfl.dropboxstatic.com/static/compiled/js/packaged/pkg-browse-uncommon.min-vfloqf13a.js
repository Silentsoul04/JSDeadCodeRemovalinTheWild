define("modules/clean/base64", ["require", "exports"], function(e, i) {
    "use strict";

    function t(e) {
        var i = [],
            t = 0,
            n = 0,
            o = 0,
            _ = 0,
            r = 0;
        for (e += ""; t < e.length;) o = e.charCodeAt(t), o < 128 ? (i[n++] = String.fromCharCode(o), t++) : o > 191 && o < 224 ? (_ = e.charCodeAt(t + 1), i[n++] = String.fromCharCode((31 & o) << 6 | 63 & _), t += 2) : (_ = e.charCodeAt(t + 1), r = e.charCodeAt(t + 2), i[n++] = String.fromCharCode((15 & o) << 12 | (63 & _) << 6 | 63 & r), t += 3);
        return i.join("")
    }

    function n(e) {
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            t = void 0,
            n = void 0,
            o = void 0,
            _ = void 0,
            r = void 0,
            s = void 0,
            l = void 0,
            a = void 0,
            d = 0,
            c = 0,
            u = "",
            f = [];
        if (!e) return e;
        for (;;)
            if (t = e.charCodeAt(d++), n = e.charCodeAt(d++), o = e.charCodeAt(d++), a = t << 16 | n << 8 | o, _ = a >> 18 & 63, r = a >> 12 & 63, s = a >> 6 & 63, l = 63 & a, f[c++] = i.charAt(_) + i.charAt(r) + i.charAt(s) + i.charAt(l), !(d < e.length)) break;
        u = f.join("");
        var g = e.length % 3;
        return (g ? u.slice(0, g - 3) : u) + "===".slice(g || 3)
    }

    function o(e, i) {
        var n = function(e) {
                return e
            },
            o = i ? n : t;
        if ("function" == typeof window.atob) return o(window.atob(e));
        var _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r = 0,
            s = 0,
            l = [];
        if (!e) return e;
        for (e += "";;) {
            var a = _.indexOf(e.charAt(r++)),
                d = _.indexOf(e.charAt(r++)),
                c = _.indexOf(e.charAt(r++)),
                u = _.indexOf(e.charAt(r++)),
                f = a << 18 | d << 12 | c << 6 | u,
                g = f >> 16 & 255,
                v = f >> 8 & 255,
                m = 255 & f;
            if (l[s++] = 64 === c ? String.fromCharCode(g) : 64 === u ? String.fromCharCode(g, v) : String.fromCharCode(g, v, m), !(r < e.length)) break
        }
        var E = l.join("");
        return E = o(E)
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.encode = n, i.decode = o
}), define("modules/clean/react/browse/action_logger", ["require", "exports", "tslib", "modules/clean/analytics", "modules/clean/filepath", "modules/clean/react/browse/logger_util", "modules/clean/search/search_bar/data/store", "modules/clean/search/search_bar/data/selectors", "modules/clean/web_user_action_events", "modules/clean/analytics", "modules/clean/logging/hive/schemas/web-user-action", "modules/clean/logging/telemetry"], function(e, i, t, n, o, _, r, s, l, a, d, c) {
    "use strict";

    function u(e) {
        i.hiveLogger.log(new d.WebUserActionRow(t.__assign({
            browser_width: window.innerWidth,
            browser_height: window.innerHeight,
            device_width: window.screen && window.screen.width,
            device_height: window.screen && window.screen.height
        }, e)))
    }

    function f(e) {
        var i = e.uid,
            n = e.source,
            r = e.action,
            s = e.num_files_selected,
            l = e.num_folders_selected,
            a = e.view_type,
            d = e.result,
            c = e.error_summary,
            f = e.action_surface,
            g = e.action_source,
            v = {
                num_files_selected: s,
                num_folders_selected: l,
                source: n,
                view_type: a,
                error_summary: c
            };
        if (_.isFile(d)) {
            var m = d,
                E = m.request_id,
                A = m.ns_id,
                p = m.sjid,
                h = m.file_id,
                w = m.fq_path,
                S = m.bytes,
                C = m.ext;
            v = t.__assign({}, v, {
                request_id: E,
                file_nsid: A,
                file_sjid: p,
                file_id: h,
                file_name: o.filename(w),
                file_path: w,
                file_size: S,
                file_extension: C
            })
        } else if (_.isPaper(d)) {
            var m = d,
                E = m.request_id;
            v = t.__assign({}, v, {
                request_id: E
            })
        }
        u({
            user_id: i,
            event_name: r,
            source: n,
            view_type: a,
            request_id: v.request_id,
            file_nsid: v.file_nsid,
            file_sjid: v.file_sjid,
            file_id: v.file_id,
            file_name: v.file_name,
            file_path: v.file_path,
            file_size: v.file_size,
            file_extension: v.file_extension,
            action_source: g,
            extra: {
                num_files_selected: v.num_files_selected ? v.num_files_selected.toString() : null,
                num_folders_selected: v.num_folders_selected ? v.num_folders_selected.toString() : null,
                error_summary: v.error_summary || null,
                action_surface: f || null
            }
        })
    }

    function g(e) {
        var i = e.uid,
            t = e.entity_type,
            n = e.view_type,
            o = e.file_nsid,
            _ = e.file_sjid,
            r = e.file_id,
            s = e.file_name,
            a = e.file_path,
            d = e.file_size,
            c = e.file_extension,
            f = e.request_id;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.SELECT_ROW,
            view_type: n,
            file_nsid: o,
            file_sjid: _,
            file_id: r,
            file_name: s,
            file_path: a,
            file_size: d,
            file_extension: c,
            request_id: f,
            extra: {
                entity_type: t
            }
        })
    }

    function v(e) {
        var i = e.uid,
            t = e.entity_type,
            n = e.source,
            o = e.view_type,
            _ = e.file_nsid,
            r = e.file_sjid,
            s = e.file_id,
            a = e.file_name,
            d = e.file_path,
            c = e.file_size,
            f = e.file_extension,
            g = e.request_id,
            v = e.action_source;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.OPEN_ROW,
            source: n,
            view_type: o,
            file_nsid: _,
            file_sjid: r,
            file_id: s,
            file_name: a,
            file_path: d,
            file_size: c,
            file_extension: f,
            request_id: g,
            action_source: v,
            extra: {
                entity_type: t
            }
        })
    }

    function m(e) {
        var i = e.uid,
            t = e.view_type;
        e.file_nsid, e.file_path, e.file_name;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.CREATE_FOLDER,
            view_type: t
        })
    }

    function E() {
        u({
            event_name: l.WebUserActionLogEvent.CREATE_FOLDER_ERROR
        })
    }

    function A() {
        u({
            event_name: l.WebUserActionLogEvent.CREATE_FOLDER_CANCEL
        })
    }

    function p() {
        u({
            event_name: l.WebUserActionLogEvent.CREATE_FOLDER_PENDING
        })
    }

    function h() {
        u({
            event_name: l.WebUserActionLogEvent.CREATE_FOLDER_SUCCESS
        })
    }

    function w(e) {
        var i = e.uid,
            t = e.modal_session_id,
            n = e.file_nsid,
            o = e.file_sjid,
            _ = e.file_id,
            r = e.file_name,
            s = e.file_path;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.VIEW_SHARE_MODEL,
            file_nsid: n,
            file_sjid: o,
            file_id: _,
            file_name: r,
            file_path: s,
            extra: {
                modal_session_id: t
            }
        })
    }

    function S(e) {
        var i = e.uid,
            t = e.show_deleted_files,
            n = e.view_type;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.TOGGLE_DELETED_FILES,
            view_type: n,
            extra: {
                show_deleted_files: t.toString()
            }
        })
    }

    function C(e) {
        var i = e.uid,
            t = e.sort_by,
            n = e.sort_direction,
            o = e.view_type;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.SORT_RECORDS,
            view_type: o,
            extra: {
                sort_by: t,
                sort_direction: n
            }
        })
    }

    function y(e) {
        var i = e.uid,
            t = e.isSearchMode,
            n = e.viewType;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.SWITCH_VIEW_TYPE,
            view_type: n
        }), t && a.SearchClientActivityLogger.log("switch_view_type", i, {
            search_session_id: s.searchSessionId(r.getStoreForSearchBar().getState()),
            view_type: n
        })
    }

    function L(e) {
        var i = e.uid,
            t = e.source,
            n = e.view_type,
            o = e.file_nsid,
            _ = e.file_path,
            r = e.file_name,
            s = e.num_files_selected,
            a = e.num_folders_selected;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.RESTORE,
            source: t,
            view_type: n,
            file_nsid: o,
            file_path: _,
            file_name: r,
            extra: {
                num_files_selected: s ? s.toString() : null,
                num_folders_selected: a ? a.toString() : null
            }
        })
    }

    function O(e) {
        var i = e.uid,
            t = e.event_name,
            n = e.selectedPath;
        u({
            user_id: i,
            event_name: t,
            extra: n ? {
                selectedPath: n
            } : {}
        })
    }

    function b(e) {
        var i = e.error_message,
            t = e.event_name,
            o = e.team_id,
            _ = e.url;
        n.TeamsWebActionsLogger.log(t, {
            team_id: o,
            url: _,
            error_message: i
        })
    }

    function R(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.MOVE
        }))
    }

    function T(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.OPEN_ADD_TO_COLLECTION_MODAL
        }))
    }

    function W(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.COPY
        }))
    }

    function D(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.VERSIONS
        }))
    }

    function U(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.OPEN_MOVE_MODAL
        }))
    }

    function x(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.RENAME
        }))
    }

    function F(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.ADD_COMMENT
        }))
    }

    function M(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.DOWNLOAD
        }))
    }

    function I(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.OPEN_COPY_MODAL
        }))
    }

    function P(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.DELETE
        }))
    }

    function N(e) {
        f(t.__assign({}, e, {
            action: l.WebUserActionLogEvent.PERMANENT_DELETE
        }))
    }

    function j(e) {
        var i = e.uid,
            t = e.file_name,
            n = e.upload_id,
            o = e.all_fsw_ids,
            _ = e.filtered_fsw_ids;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.FILE_UPLOAD_FSW_RETURNED,
            file_name: t,
            upload_id: n,
            all_fsw_ids: o,
            filtered_fsw_ids: _
        })
    }

    function q(e) {
        var i = e.uid,
            t = e.source,
            n = e.action,
            o = e.depth_folder_selected;
        u({
            user_id: i,
            source: t,
            event_name: n,
            extra: {
                depth_folder_selected: void 0 !== o ? o.toString() : null
            }
        })
    }

    function H(e) {
        var i = e.uid,
            t = e.view_type,
            n = e.url,
            o = e.navigation_depth;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.PAGE_VIEW,
            view_type: t,
            extra: {
                url: n,
                navigation_depth: void 0 !== o ? o.toString() : null
            }
        })
    }

    function G(e) {
        var i = e.uid,
            t = e.document_type,
            n = e.time_elapsed,
            o = e.open_id;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.FILE_CREATE_SUCCESS,
            extra: {
                document_type: t.toString(),
                time_elapsed: n.toString(),
                open_id: o,
                create_completed_timestamp_ms: Date.now().toString()
            }
        })
    }

    function V(e) {
        var i = e.user_id,
            t = e.view_type,
            n = e.keyboard_shortcut_type;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.KEYBOARD_SHORTCUT,
            view_type: t,
            extra: {
                keyboard_shortcut_type: n
            }
        })
    }

    function B(e) {
        var i = e.uid,
            t = e.viewType;
        u({
            user_id: i,
            event_name: l.WebUserActionLogEvent.CONTEXT_MENU_CLICK,
            view_type: t
        })
    }

    function k(e) {
        var i = e.uid,
            t = e.action,
            n = e.num_files_selected,
            o = e.num_folders_selected,
            _ = e.source,
            r = e.view_type,
            s = e.jobId,
            l = e.error_summary,
            a = e.error;
        u({
            user_id: i,
            event_name: t,
            source: _,
            view_type: r,
            extra: {
                num_files_selected: n ? n.toString() : null,
                num_folders_selected: o ? o.toString() : null,
                error_summary: l || null,
                error: a || null,
                job_id: s || null
            }
        })
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), o = t.__importStar(o), s = t.__importStar(s), c = t.__importStar(c);
    (function(e) {
        e.MAESTRO_RIGHT_SIDEBAR = "MAESTRO_RIGHT_SIDEBAR", e.MAESTRO_PHOTOS_RIGHT_SIDEBAR = "MAESTRO_PHOTOS_RIGHT_SIDEBAR", e.LEGACY_HEADER_ACTIONS = "LEGACY_HEADER_ACTIONS", e.DRAG = "DRAG"
    })(i.BrowseLogEventSource || (i.BrowseLogEventSource = {})), i.hiveLogger = new c.HiveLogger, i.logBrowseAction = f, i.logSelectRow = g, i.logOpenRow = v, i.logCreateFolder = m, i.logCreateFolderError = E, i.logCreateFolderCancel = A, i.logCreateFolderPending = p, i.logCreateFolderSuccess = h, i.logViewShareModal = w, i.logToggleDeletedFiles = S, i.logSortRecords = C, i.logSwitchViewType = y, i.logRestore = L, i.logFileOperationModalClick = O, i.logWebTeamsAction = b, i.logMoveFiles = R, i.logOpenAddToCollectionModal = T, i.logCopyFiles = W, i.logVersions = D, i.logOpenMoveModal = U, i.logRenameFiles = x, i.logAddComment = F, i.logDownload = M, i.logOpenCopyModal = I, i.logDeleteFiles = P, i.logPermanentDeleteFiles = N, i.logFileUploadFSWReturned = j, i.logFileCreateClick = q, i.logPageView = H, i.logFileCreateSuccess = G, i.logKeyboardShortcutUsage = V, i.logContextMenuClick = B, i.logFileAction = k
});
//# sourceMappingURL=pkg-browse-uncommon.min.js-vflkmqRnt.map