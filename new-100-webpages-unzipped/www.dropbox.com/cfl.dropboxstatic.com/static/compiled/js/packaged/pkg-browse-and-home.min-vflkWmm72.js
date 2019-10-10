define("modules/clean/photos/thumb_loading/buffered_thumb_store", ["require", "exports", "tslib", "modules/clean/photos/thumb_loading/generic_thumb_store", "modules/clean/web_timing_logger", "modules/core/exception"], function(e, t, r, o, n, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), l = r.__importStar(l);
    var i = (function() {
        function e(e, t) {
            var r = this;
            this.isTTI = !1, this.postTTISuccesses = [], this.postTTIErrors = [], this.postTTIRequests = [], this.wrapHandlers = function(e) {
                return {
                    onSuccess: function(t) {
                        r.isTTI ? e.onSuccess(t) : r.bufferCallbacks(r.postTTISuccesses, e, t)
                    },
                    onRequest: function(t) {
                        e.onRequest && (r.isTTI ? e.onRequest(t) : r.bufferCallbacks(r.postTTIRequests, e, t))
                    },
                    onError: function() {
                        e.onError && (r.isTTI ? e.onError() : r.bufferErrorCallback(e))
                    }
                }
            }, this.innerStore = new o.GenericThumbStore(e, t), n.waitForTTI().then(function() {
                r.isTTI = !0, r.postTTIRequests.forEach(function(e) {
                    var t = e[0].onRequest;
                    t && t(e[1])
                }), r.postTTIErrors.forEach(function(e) {
                    return e.onError && e.onError()
                }), r.postTTISuccesses.forEach(function(e) {
                    return e[0].onSuccess(e[1])
                }), r.postTTIRequests = [], r.postTTIErrors = [], r.postTTISuccesses = []
            })
        }
        return e.prototype.get_thumb = function(e) {
            return this.isTTI ? this.innerStore.get_thumb(e) : null
        }, e.prototype.is_batching = function() {
            return this.innerStore.is_batching()
        }, e.prototype.bind_url = function(e, t) {
            var r = this.isTTI ? t : this.wrapHandlers(t);
            return this.innerStore.bind_url(e, r)
        }, e.prototype.bufferCallbacks = function(e, t, r) {
            l.assert(!this.isTTI, "Should not buffer callback after TTI"), e.push([t, r])
        }, e.prototype.bufferErrorCallback = function(e) {
            l.assert(!this.isTTI, "Should not buffer error callback after TTI"), this.postTTIErrors.push(e)
        }, e.prototype.unbind_url = function(e) {
            this.innerStore.unbind_url(e)
        }, e
    })();
    t.BufferedThumbStore = i
}), define("modules/clean/react/icon/file_folder_icon", ["require", "exports", "tslib", "react", "modules/clean/filetypes", "modules/clean/react/icon/file_icon", "modules/clean/react/icon/folder_icon", "modules/core/i18n", "modules/clean/static_urls", "modules/core/uri"], function(e, t, r, o, n, l, i, a, s, c) {
    "use strict";

    function u(e, t) {
        var r;
        return e && (r = c.URI.parse(e), r = r.removeQuery("size").removeQuery("size_mode"), r = r.updateQuery({
            size: t + "x" + t,
            size_mode: "2"
        }).toString()), r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o), t.getThumbnailUrlForItem = u;
    var d = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.hideBadge,
                c = r.__rest(e, ["hideBadge"]),
                u = c.file,
                d = u.type,
                f = u.isDeleted;
            c.file = r.__assign({}, c.file, {
                fq_path: c.file.fq_path || c.file.filename || ""
            });
            var _ = d === n.FileTypes.FILE || d === n.FileTypes.PACKAGE ? o.default.createElement(l.FileIcon, r.__assign({}, this.props)) : o.default.createElement(i.FolderIcon, r.__assign({}, c));
            return !t && f ? o.default.createElement("div", {
                className: "file-icon__badge-wrapper"
            }, _, o.default.createElement("img", {
                src: s.static_url("/static/images/badges/trash-vfl3_SuXf.svg"),
                className: "file-icon__badge",
                alt: a._("deleted")
            })) : _
        }, t
    })(o.default.Component);
    t.FileOrFolderIcon = d, t.LargeFileOrFolderIcon = function(e) {
        var t = e.iconSize,
            n = r.__rest(e, ["iconSize"]),
            l = n.file,
            i = r.__assign({}, l, {
                thumbnail_url_tmpl: l.thumbnail_url_tmpl ? u(l.thumbnail_url_tmpl, t) : void 0
            });
        return o.default.createElement(d, r.__assign({}, r.__assign({}, n, {
            file: i,
            variant: "large"
        })))
    }
}), define("modules/clean/react/icon/file_icon", ["require", "exports", "tslib", "react", "spectrum/file_icon", "spectrum/icon_content", "modules/clean/react/icon/lock_badge"], function(e, t, r, o, n, l, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o);
    var a;
    (function(e) {
        e[e.SHOW_ICON = 0] = "SHOW_ICON", e[e.PREVIEW_LOADED = 1] = "PREVIEW_LOADED", e[e.PREVIEW_DEBOUNCING = 2] = "PREVIEW_DEBOUNCING"
    })(a || (a = {}));
    var s = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.handleImageLoad = function() {
                r.setState({
                    previewState: a.PREVIEW_LOADED
                })
            }, r.handleImageError = function() {
                r.setState({
                    previewState: a.SHOW_ICON
                })
            }, r.state = {
                previewState: t.showPreview && t.iconDelay && t.file.thumbnail_url_tmpl ? a.PREVIEW_DEBOUNCING : a.SHOW_ICON
            }, r
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            var e = this;
            this.props.showPreview && this.props.file.thumbnail_url_tmpl && (this.preloadImage(), this.props.iconDelay && (this.setState({
                previewState: a.PREVIEW_DEBOUNCING
            }), this.timeoutId = window.setTimeout(function() {
                e.state.previewState === a.PREVIEW_DEBOUNCING && e.setState({
                    previewState: a.SHOW_ICON
                })
            }, this.props.iconDelay)))
        }, t.prototype.componentDidUpdate = function(e) {
            this.props.showPreview && this.props.file.thumbnail_url_tmpl !== e.file.thumbnail_url_tmpl && (this.preloadImage(), this.setState({
                previewState: a.SHOW_ICON
            }))
        }, t.prototype.componentWillUnmount = function() {
            this.timeoutId && window.clearTimeout(this.timeoutId), this.prefetchImage && (this.prefetchImage.onload = null, delete this.prefetchImage)
        }, t.prototype.preloadImage = function() {
            var e = this.props.file.thumbnail_url_tmpl;
            e && (this.prefetchImage = new Image, this.prefetchImage.onload = this.handleImageLoad, this.prefetchImage.onerror = this.handleImageError, this.prefetchImage.src = e)
        }, t.prototype.addBadge = function(e, t) {
            var r = this.props,
                n = r.hideBadge,
                l = r.variant,
                a = r.file;
            return n ? t : e ? o.default.createElement(i.LockBadge, {
                file: a,
                variant: "large" === l ? "preview-large" : "preview-small"
            }, t) : o.default.createElement(i.LockBadge, {
                file: a,
                variant: l
            }, t)
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.file,
                i = e.variant,
                s = e.showPreview,
                c = (e.iconDelay, r.__rest(e, ["file", "variant", "showPreview", "iconDelay"])),
                u = t.fq_path,
                d = t.thumbnail_url_tmpl,
                f = t.isDeleted,
                _ = t.is_symlink,
                p = t.filename,
                m = this.state.previewState,
                h = u || p || "";
            if (m === a.PREVIEW_DEBOUNCING) return null;
            if (s && d && m === a.PREVIEW_LOADED) return this.addBadge(!0, o.default.createElement("img", r.__assign({
                src: d,
                alt: t.fq_path,
                draggable: !1,
                onError: this.handleImageError
            }, c)));
            if (_) {
                var I = i ? i : "small",
                    g = "symlink-" + I;
                return o.default.createElement(l.IconContent, r.__assign({
                    name: g,
                    disabled: f
                }, c))
            }
            return this.addBadge(!1, o.default.createElement(n.FileIcon, r.__assign({
                path: h,
                variant: i,
                disabled: f
            }, c)))
        }, t.defaultProps = {
            showPreview: !0,
            variant: "small"
        }, t
    })(o.default.Component);
    t.FileIcon = s
}), define("modules/clean/react/icon/folder_icon", ["require", "exports", "tslib", "react", "spectrum/icon_content"], function(e, t, r, o, n) {
    "use strict";

    function l(e) {
        var t = e.length,
            r = e.lastIndexOf("_", t);
        return parseInt(e.substr(r + 1, t), 10) ? e.substr(0, r) : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o);
    var i = {
        folder_user: "folder_shared",
        folder_user_gray: "folder_shared",
        folder_team: "folder_team",
        folder_team_gray: "folder_team",
        folder_team_locked: "folder_team_read_only",
        folder_team_locked_gray: "folder_team_read_only",
        folder_user_locked: "folder_shared_read_only",
        folder_user_locked_gray: "folder_shared_read_only",
        folder: "folder",
        folder_gray: "folder",
        folder_team_member: "folder_team_member",
        folder_user_no_access: "folder_confidential",
        folder_app: "folder_app",
        package: "pkg",
        folder_camera: "folder_camera_upload",
        dropbox: "folder_dropbox",
        folder_user_no_access_admin_view: "folder_confidential_admin_view",
        folder_space: "folder_space",
        folder_space_read_only: "folder_space_read_only"
    };
    t.isLegacyFolderIcon = function(e) {
        var t = l(e),
            r = ["folder_star", "folder_public"];
        return t in i || r.includes(t)
    }, t.convertLegacyFolderIconToSpectrum = function(e, t) {
        return (i[l(e)] || "folder") + "-" + t
    };
    var a = (function(e) {
        function l() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(l, e), l.prototype.render = function() {
            var e = this.props,
                r = e.file,
                l = e.variant,
                i = void 0 === l ? "small" : l,
                a = e.className,
                s = r.isDeleted,
                c = t.convertLegacyFolderIconToSpectrum(r.icon || "", i);
            return o.default.createElement(n.IconContent, {
                name: c,
                disabled: s,
                className: a
            })
        }, l
    })(o.default.Component);
    t.FolderIcon = a;
    var s = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return o.default.createElement(n.IconContent, {
                name: "folder-small"
            })
        }, t
    })(o.default.Component);
    t.SimpleFolderIcon = s;
    var c = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return o.default.createElement(n.IconContent, {
                name: "folder_shared-small"
            })
        }, t
    })(o.default.Component);
    t.SharedFolderIcon = c;
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return o.default.createElement(n.IconContent, {
                name: "folder_team-small"
            })
        }, t
    })(o.default.Component);
    t.TeamFolderIcon = u
}), define("modules/clean/react/icon/lock_badge", ["require", "exports", "tslib", "react", "modules/clean/react/title_bubble", "modules/clean/react_format", "modules/core/i18n"], function(e, t, r, o, n, l, i) {
    "use strict";

    function a() {
        return o.default.createElement("svg", {
            viewBox: "0 0 10 10",
            version: "1.1"
        }, o.default.createElement("g", {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, o.default.createElement("g", {
            id: "Artboard"
        }, o.default.createElement("g", {
            id: "Group-11-Copy-2"
        }, o.default.createElement("g", {
            id: "Group-10-Copy-7"
        }, o.default.createElement("g", {
            id: "Group-4"
        }, o.default.createElement("circle", {
            id: "Oval-Copy-47",
            fill: "#FFFFFF",
            cx: "5",
            cy: "5",
            r: "5"
        }), o.default.createElement("circle", {
            id: "Combined-Shape-Copy-8",
            fill: "#DDDFE1",
            cx: "5",
            cy: "5",
            r: "3.95833333"
        }))), o.default.createElement("rect", {
            id: "Rectangle-Copy-7",
            fill: "#707781",
            x: "3.17385288",
            y: "4.58333333",
            width: "3.75",
            height: "2.5"
        }), o.default.createElement("path", {
            d: "M5.04885288,2.5 C5.73889678,2.5 6.29828788,3.0593911 6.29828788,3.749435 L6.29828788,5.83333333 L3.79941788,5.83333333 L3.79941788,3.749435 C3.79941788,3.0593911 4.35880899,2.5 5.04885288,2.5 Z M5.04861271,3.1251631 C4.70356115,3.1251631 4.4238416,3.40488266 4.4238416,3.74993422 L4.4238416,5.20817023 L5.67338383,5.20817023 L5.67338383,3.74993422 C5.67338383,3.40488266 5.39366428,3.1251631 5.04861271,3.1251631 Z",
            id: "Combined-Shape-Copy",
            fill: "#707781"
        })))))
    }

    function s(e) {
        var t = {
            is_locked: !1,
            is_lockholder: !1,
            lockholder_name: ""
        };
        return e ? ("is_locked" in e && (t.is_locked = e.is_locked || !1), "is_lockholder" in e && (t.is_lockholder = e.is_lockholder || !1), "lockholder_name" in e && (t.lockholder_name = e.lockholder_name || ""), t) : t
    }

    function c(e) {
        var t = e.is_lockholder,
            r = e.lockholder_name;
        return t ? i._("Locked by You") : l.reactFormat(i._("Locked by %(name)s"), {
            name: r
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o);
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = s(this.props.file),
                t = e.is_locked,
                r = e.is_lockholder;
            if (!t) return this.props.children;
            var l = o.default.createElement("div", null, c(e)),
                i = this.props.variant || "small",
                u = r ? "right" : "left",
                d = "file-icon__lock-badge-" + i + "-" + u;
            return o.default.createElement(n.TitleBubble, {
                content: l,
                position: n.TitleBubble.POSITIONS.TOP
            }, o.default.createElement("div", {
                className: "titleBubble-positioningTarget file-icon__lock-badge-container"
            }, this.props.children, o.default.createElement("div", {
                className: d
            }, a())))
        }, t
    })(o.default.PureComponent);
    t.LockBadge = u
});
//# sourceMappingURL=pkg-browse-and-home.min.js-vfli3GpWn.map