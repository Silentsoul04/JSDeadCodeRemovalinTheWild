define("modules/clean/avatar/list", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom-factories", "external/prop-types", "modules/clean/avatar/overflow_count_pill", "modules/clean/avatar/size", "modules/clean/react/css"], function(e, t, n, r, o, i, s, a, l, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o), i = n.__importStar(i), s = n.__importStar(s), a = n.__importDefault(a);
    var c = o.default.createElement,
        p = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._defaultRenderOverflowCount = function(e) {
                    var n = e.overflowCount;
                    return c(a.default, {
                        count: n,
                        dimension: t.props.avatarDimension,
                        key: "overflow_pill:" + n,
                        onClick: t.props.onOverflowCountClick
                    })
                }, t.getClassName = function() {
                    return r.default(["horizontal-avatar-list", t.props.className, t.props.animation ? ["animation", "is-animated"] : null])
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.props.avatars,
                    t = this.props.maxVisible,
                    n = 0;
                if (this.props.undisplayableCount && (n += this.props.undisplayableCount), (this.props.undisplayableCount || e.length > t) && (t--, n += e.length - t, e = e.slice(0, t)), n) {
                    var o = null != this.props.overflowCountRenderer ? this.props.overflowCountRenderer : this._defaultRenderOverflowCount;
                    e.push(o({
                        overflowCount: n,
                        avatarArgs: {
                            avatarDimension: this.props.avatarDimension,
                            onAvatarClick: this.props.onOverflowCountClick,
                            titleButtonDirection: "south"
                        }
                    }))
                }
                return i.div({
                    className: r.default({
                        "c-facepile": !0
                    })
                }, [i.div({
                    className: this.getClassName(),
                    key: "facepile"
                }, e)])
            }, t.displayName = "HorizontalAvatarList", t.propTypes = {
                avatars: s.array.isRequired,
                avatarDimension: s.oneOf(l.VALID_AVATAR_DIMENSIONS).isRequired,
                maxVisible: s.number.isRequired,
                undisplayableCount: s.number.isRequired,
                onOverflowCountClick: s.func,
                overflowCountRenderer: s.func,
                animation: s.bool,
                className: s.string
            }, t.defaultProps = {
                className: ""
            }, t
        })(o.default.Component);
    t.default = d.requireCssWithComponent(p, ["/static/css/avatar_list-vflkDtz7i.css"])
}), define("modules/clean/avatar/shared_link_avatar", ["require", "exports", "tslib", "react", "external/react-dom-factories", "external/prop-types", "modules/clean/avatar/size", "modules/clean/avatar/style", "modules/clean/css", "modules/clean/static_urls", "modules/core/i18n"], function(e, t, n, r, o, i, s, a, l, d, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importStar(o), i = n.__importStar(i), l = n.__importStar(l);
    var p = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.componentDidMount = function() {
            return l.require_css("/static/css/scooter/scooter-scoped-vflFpCY2P.css")
        }, t.prototype.render = function() {
            var e = o.img({
                    src: d.static_url("/static/images/avatar/shared-link-icon-vflHCU_m6.svg"),
                    alt: this.props.alt || c._("Shared link"),
                    width: 12,
                    className: "u-mar-horizontal-xs"
                }),
                t = ["c-avatar--meta"];
            null != this.props.optionalClass && t.push(this.props.optionalClass), null != this.props.onClick && t.push("u-unbutton");
            var n = a.getClassName(this.props.dimension, t);
            return null != this.props.onClick ? o.button({
                className: n,
                onClick: this.props.onClick
            }, e) : o.div({
                className: n,
                onClick: this.props.onClick
            }, e)
        }, t.displayName = "SharedLinkAvatar", t.propTypes = {
            alt: i.string,
            dimension: i.oneOf(s.VALID_AVATAR_DIMENSIONS).isRequired,
            onClick: i.func,
            optionalClass: i.string
        }, t
    })(r.default.Component);
    t.default = p
}), define("modules/clean/react/path_filter_button", ["require", "exports", "tslib", "react", "spectrum/dropdown_button", "modules/clean/react/title_bubble", "modules/clean/em_string", "modules/clean/filepath"], function(e, t, n, r, o, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), a = n.__importStar(a), t.PathFilterButton = function(e) {
        var t = e.path,
            n = e.defaultText,
            l = e.dropdownClasses,
            d = e.disabled,
            c = e.onClick,
            p = t && !a.paths_are_equal(t, "/") ? s.Emstring.em_snippet(a.filename(t), 10, .6) : null,
            u = r.default.createElement(o.DropdownButton, {
                className: l,
                disabled: d,
                onClick: c
            }, p || n);
        return p ? r.default.createElement(i.TitleBubble, {
            content: t,
            position: i.TitleBubble.POSITIONS.BOTTOM
        }, u) : u
    }
}), define("modules/clean/react/selectable_list", ["require", "exports", "tslib", "external/immutable", "external/keymaster", "react", "external/lodash", "external/react-dom", "modules/core/browser_detection"], function(e, t, n, r, o, i, s, a, l) {
    "use strict";

    function d(e, t, n, r, o, i) {
        if (void 0 === i && (i = !1), t < 0 || t >= n) return 0;
        o && 0 !== o.length || (o = [0]);
        var a = s.sortedIndex(o, t),
            l = o[a] === t,
            d = l ? a : a - 1,
            c = o[d],
            p = (t - c) % r;
        switch (e) {
            case u.NEXT_ROW:
                var h = o.length;
                if (d === h - 1 && t + r >= n) {
                    var f = (t - c) % r,
                        m = (n - c) % r;
                    if (f < m || 0 === m) return i ? n - 1 : t
                }
                var v = d + 1,
                    _ = v < o.length ? o[v] : n;
                if (t + r - (r - ((_ - c) % r || r)) < _) {
                    var y = _ - 1;
                    return Math.min(t + r, y)
                }
                var I = v + 1 < h ? o[v + 1] - 1 : n - 1;
                return Math.min(_ + p, I);
            case u.PREV_ROW:
                if (0 === d && t - r < 0) return i ? 0 : t;
                if (t - r >= c) return t - r;
                var S = o[d - 1],
                    E = c - 1,
                    x = c - S,
                    g = S + x - (x % r || r);
                return Math.min(g + p, E)
        }
    }

    function c(e, t, n, r, o, i) {
        switch (e) {
            case u.PREV:
                return Math.max(0, t - 1);
            case u.NEXT:
                return Math.min(n - 1, t + 1);
            case u.PREV_ROW:
            case u.NEXT_ROW:
                return d(e, t, n, r, o, i)
        }
    }

    function p(e, t, n, r, o, i, s, a, l) {
        switch (e) {
            case u.PREV:
            case u.PREV_ROW:
                if (0 === t) return s;
                for (var d = c(e, t, a.length, n, l, !0), p = Math.min(t, r) - d, h = t - Math.max(d, r), f = i; f > i - h; f--) {
                    var m = s.indexOf(a[f]);
                    s.splice(m, 1)
                }
                for (var f = o - 1; f >= o - p; f--) s.push(a[f]);
                break;
            case u.NEXT:
            case u.NEXT_ROW:
                if (t === a.length) return s;
                for (var v = c(e, t, a.length, n, l, !0), h = Math.min(v, r) - o, p = v - Math.max(t, r), f = o; f < o + h; f++) {
                    var m = s.indexOf(a[f]);
                    s.splice(m, 1)
                }
                for (var f = i + 1; f <= i + p; f++) s.push(a[f])
        }
        return s
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), o = n.__importDefault(o), i = n.__importDefault(i), s = n.__importStar(s), a = n.__importStar(a), l = n.__importStar(l), t.SELECTABLE_LIST_KEY_SCOPE = "SelectableList", t.SELECTABLE_TILE_GRID_KEY_SCOPE = "SelectableTileGrid";
    var u, h = "";
    (function(e) {
        e[e.PREV = 0] = "PREV", e[e.NEXT = 1] = "NEXT", e[e.PREV_ROW = 2] = "PREV_ROW", e[e.NEXT_ROW = 3] = "NEXT_ROW"
    })(u = t.SelectDirection || (t.SelectDirection = {}));
    var f;
    (function(e) {
        e.DEFAULT = "DEFAULT", e.EXTEND = "EXTEND", e.ONLY = "ONLY"
    })(f = t.SelectOptions || (t.SelectOptions = {})), t.findNeighboringItem = c, t.findSelectionRange = p;
    var m = (function(e) {
        function s(t) {
            var n = e.call(this, t) || this;
            return n.isFocused = !1, n.handleSelectPrevious = function(e) {
                n.isGlobalEvent(e) && (e.preventDefault(), n.selectNeighboringItem(u.PREV))
            }, n.handleSelectPreviousRow = function(e) {
                n.isGlobalEvent(e) && (e.preventDefault(), n.selectNeighboringItem(u.PREV_ROW))
            }, n.handleExtendSelectionToPrevious = function(e) {
                n.isGlobalEvent(e) && (e.preventDefault(), n.extendSelectionRange(u.PREV))
            }, n.handleExtendSelectionToPreviousRow = function(e) {
                n.isGlobalEvent(e) && (e.preventDefault(), n.extendSelectionRange(u.PREV_ROW))
            }, n.handleSelectNext = function(e) {
                n.isGlobalEvent(e) && (e.preventDefault(), n.selectNeighboringItem(u.NEXT))
            }, n.handleSelectNextRow = function(e) {
                n.isGlobalEvent(e) && (e.preventDefault(), n.selectNeighboringItem(u.NEXT_ROW))
            }, n.handleExtendSelectionToNext = function(e) {
                n.isGlobalEvent(e) && (e.preventDefault(), n.extendSelectionRange(u.NEXT))
            }, n.handleExtendSelectionToNextRow = function(e) {
                n.isGlobalEvent(e) && (e.preventDefault(), n.extendSelectionRange(u.NEXT_ROW))
            }, n.handleDeselectAll = function(e) {
                var t = n.props.selection;
                if ((!e || n.isGlobalEvent(e)) && t.selected.size) {
                    if (n.updateSelection([], !0), a.findDOMNode(n).contains(document.activeElement)) {
                        var r = document.activeElement;
                        r.blur && r.blur()
                    }
                    n.props.onDeselectAll && n.props.onDeselectAll()
                }
            }, n.handleSelectAll = function(e) {
                var t = n.props,
                    r = t.itemIds,
                    o = t.selection;
                e && !n.isGlobalEvent(e) || o.selected.size === r.length || n.updateSelection(n.props.itemIds, !0)
            }, n.handleDeselect = function(e, t) {
                if (t) return n.extendOrShrinkSelectionByFile(e);
                n.updateSelectionById(e, "delete")
            }, n.handleSelect = function(e, t) {
                if (t === f.EXTEND) return n.extendOrShrinkSelectionByFile(e);
                t === f.ONLY ? n.updateSelection([e], !0) : n.updateSelectionById(e, "add")
            }, n.handleFocusFile = function(e) {
                n.setState({
                    focusedFileId: e
                })
            }, n.isSelectableListEvent = function() {
                return n.isFocused
            }, n.handleFocus = function() {
                n.isFocused = !0
            }, n.handleBlur = function() {
                n.isFocused = !1
            }, n.state = {
                selection: t.selection,
                keyScope: t.keyScope
            }, n
        }
        return n.__extends(s, e), s.prototype.componentWillReceiveProps = function(e) {
            this.props.keyScope !== e.keyScope && (this.setState({
                keyScope: e.keyScope
            }), this.isFocused = !1)
        }, s.prototype.componentDidMount = function() {
            this.setupKeyboardShortcuts(), this.setFocusedIdFromSelection(this.props.selection)
        }, s.prototype.componentDidUpdate = function(e, t) {
            e.selection && this.props.selection && e.selection.anchor !== this.props.selection.anchor && this.setFocusedIdFromSelection(this.props.selection), this.state.keyScope !== t.keyScope && this.setupKeyboardShortcuts()
        }, s.prototype.componentWillUnmount = function() {
            this.cleanupKeyboardShortcuts()
        }, s.prototype.setupKeyboardShortcuts = function() {
            var e = this,
                n = this.state.keyScope;
            h = o.default.getScope(), h !== n && o.default.setScope(n);
            var r = o.default.filter || function(e) {
                var t = e.target || e.srcElement;
                if (!(t instanceof Element)) return !0;
                var n = t.tagName;
                return !("INPUT" === n || "SELECT" === n || "TEXTAREA" === n)
            };
            o.default.filter = function(t) {
                var n = t.target || t.srcElement,
                    o = n.tagName;
                return (!e.isSelectableListEvent() || "BUTTON" !== o) && (n instanceof HTMLInputElement && "checkbox" === n.type || r.call(e, t))
            }, n === t.SELECTABLE_LIST_KEY_SCOPE ? (o.default("up", n, this.handleSelectPrevious), o.default("shift+up", n, this.handleExtendSelectionToPrevious), o.default("down", n, this.handleSelectNext), o.default("shift+down", n, this.handleExtendSelectionToNext)) : n === t.SELECTABLE_TILE_GRID_KEY_SCOPE && (o.default("left", n, this.handleSelectPrevious), o.default("shift+left", n, this.handleExtendSelectionToPrevious), o.default("right", n, this.handleSelectNext), o.default("shift+right", n, this.handleExtendSelectionToNext), o.default("up", n, this.handleSelectPreviousRow), o.default("shift+up", n, this.handleExtendSelectionToPreviousRow), o.default("down", n, this.handleSelectNextRow), o.default("shift+down", n, this.handleExtendSelectionToNextRow)), o.default("escape", n, this.handleDeselectAll), l.mac ? o.default("command+a", n, this.handleSelectAll) : o.default("ctrl+a", n, this.handleSelectAll)
        }, s.prototype.cleanupKeyboardShortcuts = function() {
            o.default.clearScope(this.state.keyScope), h && o.default.setScope(h), o.default.resetFilter()
        }, s.prototype.setFocusedIdFromSelection = function(e) {
            e.anchor && 0 !== e.selected.size && this.setState({
                focusedFileId: e.anchor
            })
        }, s.prototype.updateSelection = function(e, t) {
            void 0 === t && (t = !1);
            var n = this.props.selection,
                o = t ? e.length ? e[0] : this.props.itemIds[0] : n.anchor,
                i = n.merge({
                    selected: r.OrderedSet(e),
                    anchor: o
                });
            this.props.onSelectionChange(i)
        }, s.prototype.selectNeighboringItem = function(e) {
            var t = this.props,
                n = t.itemIds,
                r = t.selection,
                o = t.tilesPerRow,
                i = t.sectionStartIndices,
                s = n.indexOf(r.selected.last()),
                a = c(e, s, n.length, o, i),
                l = n[a];
            this.setState({
                focusedFileId: l
            }), this.updateSelection([l], !0)
        }, s.prototype.extendSelectionRange = function(e) {
            var t = this.props,
                n = t.itemIds,
                r = t.selection,
                o = t.tilesPerRow,
                i = t.sectionStartIndices,
                s = r.anchor || n[0];
            if (s) {
                var a = n.indexOf(r.selected.last()),
                    l = r.selected.toArray(),
                    d = n.indexOf(s),
                    c = this.getRangeOfSelectedBlock(s);
                l = p(e, a, o, d, c.startIndex, c.endIndex, l, n, i), this.setState({
                    focusedFileId: l[l.length - 1]
                }), this.updateSelection(l)
            }
        }, s.prototype.getRangeOfSelectedBlock = function(e) {
            for (var t = this.props, n = t.itemIds, r = t.selection, o = n.indexOf(e), i = 0, s = 0; i = o, o--, !(o < 0) && r.selected.has(n[o]););
            for (o = i;;) {
                var a = n[o];
                if (!a || !r.selected.has(a)) break;
                s = o, o++
            }
            return {
                startIndex: i,
                endIndex: s
            }
        }, s.prototype.extendOrShrinkSelectionByFile = function(e) {
            var t = this.props,
                n = t.itemIds,
                r = t.selection,
                o = r.anchor || n[0];
            if (o) {
                var i = n.indexOf(o),
                    s = n.indexOf(e),
                    a = this.getRangeOfSelectedBlock(o),
                    l = a.startIndex,
                    d = a.endIndex;
                if (s !== d) {
                    var c = [],
                        p = [];
                    n.forEach(function(e, t) {
                        l <= t && t <= d && c.push(e), (s <= t && t <= i || i <= t && t <= s) && p.push(e)
                    }), s < i && p.reverse();
                    var u = r.update("selected", function(e) {
                        return e.subtract(c).union(p)
                    });
                    this.setState({
                        focusedFileId: e
                    }), this.props.onSelectionChange(u)
                }
            }
        }, s.prototype.updateSelectionById = function(e, t) {
            var n = this.props.selection,
                r = "add" === t ? e : n.anchor,
                o = n.selected[t](e),
                i = n.merge({
                    selected: o,
                    anchor: r || null
                });
            this.props.onSelectionChange(i)
        }, s.prototype.isGlobalEvent = function(e) {
            var t = e.target instanceof HTMLInputElement,
                n = e.target instanceof HTMLElement,
                r = t && "checkbox" === e.target.type,
                o = n && (e.target.classList.contains("mc-popover-selectable-item") || e.target.classList.contains("mc-popover-content-item") || e.target.classList.contains("mc-popover-trigger"));
            return !document.activeElement || document.activeElement === document.body || e.target instanceof Element && (a.findDOMNode(this).contains(e.target) && (!t || r) && !o)
        }, s.prototype.render = function() {
            var e = this.props.children,
                t = this.state.focusedFileId;
            if (!e) return null;
            var n = e;
            return "function" == typeof e && (n = e({
                focusedFileId: t,
                handleDeselect: this.handleDeselect,
                handleDeselectAll: this.handleDeselectAll,
                handleFocusFile: this.handleFocusFile,
                handleSelect: this.handleSelect,
                handleSelectAll: this.handleSelectAll,
                isSelectableListEvent: this.isSelectableListEvent
            })), i.default.createElement("div", {
                onBlur: this.handleBlur,
                onFocus: this.handleFocus
            }, n)
        }, s
    })(i.default.PureComponent);
    t.SelectableList = m
}), define("modules/clean/react/tree_view", ["require", "exports", "tslib", "external/classnames", "external/immutable", "react", "external/react-dom", "external/lodash", "modules/clean/react/icon/folder_icon", "spectrum/icon_content", "jquery", "modules/clean/ajax", "modules/clean/em_string", "modules/clean/filepath", "modules/clean/keycode", "modules/clean/react/css", "modules/clean/react/sprite", "modules/core/i18n", "modules/core/notify"], function(e, t, n, r, o, i, s, a, l, d, c, p, u, h, f, m, v, _, y) {
    "use strict";

    function I(e, t, n) {
        var r = {
            ns_id: n,
            ns_path: t,
            hide_tmfs: !0
        };
        return p.WebRequestOref({
            url: "/browse_util/tree_view_team_folder_contents",
            type: "POST",
            subject_user: e,
            data: r,
            dataType: "json"
        })
    }

    function S(e) {
        var t = e.mkAjaxRequest || function(t) {
            return I(e.userId, t, e.rootNSID)
        };
        return i.default.createElement(L, n.__assign({}, e, {
            rootIcon: T.DROPBOX,
            mkAjaxRequest: t
        }))
    }

    function E(e, t) {
        var n = {
            folder: t
        };
        return p.WebRequestOref({
            url: "/browse_util/tree_view_folders",
            type: "POST",
            subject_user: e,
            data: n,
            dataType: "json"
        })
    }

    function x(e) {
        var t = e.mkAjaxRequest || function(t) {
                return E(e.user.id, t)
            },
            r = e.forceRootSelectable || "edit" === e.user.user_root_permissions,
            o = e.is_paired ? e.user.is_team ? T.BRIEFCASE : T.HOUSE : T.DROPBOX,
            s = n.__assign({}, e, {
                mkAjaxRequest: t,
                isRootSelectable: r,
                rootIcon: o
            });
        if (e.user.is_cdm_member) {
            var a = e.user.cdm_tmf_path;
            return i.default.createElement(F, n.__assign({}, s, {
                pinnedFolder: a
            }))
        }
        return i.default.createElement(L, n.__assign({}, s))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importStar(o), i = n.__importDefault(i), s = n.__importStar(s), a = n.__importStar(a), c = n.__importDefault(c), p = n.__importStar(p), t.MAX_LABEL_LENGTH = 20, t.INDENT_SIZE_PX = 15;
    var g;
    (function(e) {
        e[e.None = 0] = "None", e[e.TreeItem = 1] = "TreeItem", e[e.HeaderItem = 2] = "HeaderItem", e[e.StaticHeader = 3] = "StaticHeader"
    })(g = t.RootStyle || (t.RootStyle = {}));
    var b = (function() {
        function e(e) {
            this.key = e.key, this.label = e.label ? e.label : "", this.icon = e.icon ? e.icon : "", this.disabled = !!e.disabled, this.canExpand = !!e.canExpand, this.forceExpanded = !!e.forceExpanded
        }
        return e
    })();
    t.TreeItem = b;
    var C = (function() {
        function e(e) {
            var t = o.Map();
            this.rootItem = e.rootItem, this.items = e.items, this.childItemsByParentKey = e.childItemsByParentKey || t, this.parentItemByChildKey = e.parentItemByChildKey || o.Map()
        }
        return e.createWithRootItem = function(t) {
            return new e({
                rootItem: t,
                items: o.Map([
                    [t.key, t]
                ])
            })
        }, e.prototype.getParentItem = function(e) {
            if (e) {
                var t = this.parentItemByChildKey.get(e.key);
                return t ? this.items.get(t) : null
            }
        }, e.prototype.getChildItems = function(e) {
            return this.childItemsByParentKey.get(e.key) || null
        }, e.prototype.isParent = function(e) {
            return this.childItemsByParentKey.has(e.key)
        }, e.prototype.setChildItems = function(t, n) {
            n = o.List(n);
            var r = o.Map(n.map(function(e) {
                    return [e.key, e]
                })),
                i = o.Map(this.items).merge(r),
                s = o.Map(this.childItemsByParentKey).set(t.key, n),
                a = o.Map(this.parentItemByChildKey);
            return n.forEach(function(e) {
                return a = a.set(e.key, t.key)
            }), new e({
                rootItem: this.rootItem,
                items: i,
                childItemsByParentKey: s,
                parentItemByChildKey: a
            })
        }, e
    })();
    t.Tree = C;
    var w = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return i.default.createElement("ul", {
                    className: "tree-view__group",
                    role: "group"
                }, this.props.children)
            }, t
        })(i.default.Component),
        k = (function(e) {
            function o() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleClick = function(e) {
                    if (e.preventDefault(), e.stopPropagation(), !t.props.item.disabled) {
                        var n = s.findDOMNode(t.refs.expandButton);
                        n && n.contains(e.target) || t.props.onClick && t.props.onClick(t.props.item)
                    }
                }, t.handleExpandClick = function(e) {
                    e.preventDefault(), t.props.onExpandButtonClick && t.props.onExpandButtonClick(t.props.item, !t.props.isExpanded)
                }, t
            }
            return n.__extends(o, e), o.prototype.renderExpandButton = function() {
                return i.default.createElement("div", {
                    className: "tree-view__expand-button",
                    onClick: this.handleExpandClick,
                    ref: "expandButton",
                    role: "button"
                }, i.default.createElement(v.Sprite, {
                    group: "web",
                    name: this.props.isExpanded ? "bullet_minus" : "bullet_plus",
                    alt: this.props.isExpanded ? _._("Collapse") : _._("Expand")
                }))
            }, o.prototype.renderIcon = function() {
                var e = this.props.item,
                    t = e.icon,
                    n = e.disabled;
                return i.default.createElement("div", {
                    className: "tree-view__icon-wrapper"
                }, i.default.createElement(d.IconContent, {
                    className: "tree-view__item-icon",
                    name: l.convertLegacyFolderIconToSpectrum(t, "small"),
                    disabled: n,
                    height: 19,
                    width: 19
                }))
            }, o.prototype.render = function() {
                var e = !this.props.canExpand,
                    n = r.default({
                        "tree-view__item": !0,
                        "tree-view__item--leaf": e
                    }),
                    o = this.props.canExpand && !this.props.showAsHeader;
                return i.default.createElement("li", {
                    key: this.props.item.key,
                    id: this.props.id,
                    className: n,
                    onClick: this.handleClick,
                    role: "treeitem",
                    "aria-disabled": this.props.item.disabled,
                    "aria-label": this.props.item.label,
                    "aria-level": this.props.level + 1,
                    "aria-selected": !!this.props.isSelected || void 0,
                    "aria-expanded": o ? this.props.isExpanded : void 0
                }, i.default.createElement("span", {
                    className: r.default({
                        "tree-view__item-row": !0,
                        "tree-view__item-row--disabled": this.props.item.disabled
                    }),
                    style: {
                        paddingLeft: this.props.showAsHeader ? 0 : this.props.level * t.INDENT_SIZE_PX
                    }
                }, this.props.showAsHeader || e ? void 0 : this.renderExpandButton(), this.props.item.icon ? this.renderIcon() : void 0, this.props.item.label ? i.default.createElement("span", {
                    className: "tree-view__item-label"
                }, u.Emstring.em_snippet(this.props.item.label, t.MAX_LABEL_LENGTH)) : void 0), this.props.children)
            }, o.defaultProps = {
                isSelected: !1,
                isExpanded: !1,
                canExpand: !1,
                level: 0,
                onClick: a.noop,
                onExpandButtonClick: a.noop,
                showAsHeader: !1
            }, o
        })(i.default.Component);
    t.TreeItemView = k;
    var R = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.renderIcon = function() {
                return this.props.item.icon ? i.default.createElement(v.Sprite, {
                    className: "tree-view__header-icon",
                    group: "web",
                    name: this.props.item.icon,
                    alt: ""
                }) : null
            }, t.prototype.render = function() {
                return i.default.createElement("div", {
                    className: "tree-view__item-row"
                }, this.renderIcon(), i.default.createElement("h3", {
                    className: "tree-view__header",
                    id: this.props.id
                }, this.props.item.label))
            }, t
        })(i.default.Component),
        N = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    selectedItemKey: null,
                    expandedItemKeys: o.Set([t.props.tree.rootItem.key]),
                    showFocused: !1
                }, t.selectItem = function(e) {
                    t.setState({
                        selectedItemKey: null != e && e.key ? e.key : null
                    }), t.props.onItemSelected(e)
                }, t.handleExpandButtonClick = function(e, n) {
                    t.setState({
                        expandedItemKeys: t.setItemExpanded(e.key, n)
                    }), t.props.onItemExpanded(e, n)
                }, t.handleKeyDown = function(e) {
                    switch (e.which) {
                        case f.KeyCode.UP:
                            t.advanceSelection(!0) && e.preventDefault();
                            break;
                        case f.KeyCode.DOWN:
                            t.advanceSelection(!1) && e.preventDefault();
                            break;
                        case f.KeyCode.RIGHT:
                            if (null != t.state.selectedItemKey) {
                                var n = t.props.tree.items.get(t.state.selectedItemKey);
                                t.canItemExpand(n) && (t.handleExpandButtonClick(n, !0), e.preventDefault())
                            }
                            break;
                        case f.KeyCode.LEFT:
                            if (t.state.selectedItemKey) {
                                var n = t.props.tree.items.get(t.state.selectedItemKey);
                                t.canItemExpand(n) && (t.handleExpandButtonClick(n, !1), e.preventDefault())
                            }
                    }
                }, t.handleOnFocus = function() {
                    return t.setState({
                        showFocused: !0
                    })
                }, t.handleOnBlur = function() {
                    return t.setState({
                        showFocused: !1
                    })
                }, t
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                c.default(s.findDOMNode(this)).on({
                    keydown: this.handleKeyDown
                })
            }, t.prototype.componentWillReceiveProps = function(e) {
                e.resetSelectedItem && e.resetSelectedItem !== this.props.resetSelectedItem && this.setState({
                    selectedItemKey: null
                })
            }, t.prototype.componentWillUnmount = function() {
                c.default(s.findDOMNode(this)).off("keydown")
            }, t.prototype.componentDidUpdate = function(e, t) {
                if (this.state.selectedItemKey && this.state.selectedItemKey !== t.selectedItemKey) {
                    var n = c.default(s.findDOMNode(this)),
                        r = n.find('[aria-selected="true"]').eq(0);
                    r.length && this.scrollElementIntoViewIfNeeded(r, n)
                }
            }, t.prototype.scrollElementIntoViewIfNeeded = function(e, t) {
                var n = t.scrollTop(),
                    r = n + e.position().top;
                if (r - n < 0) return void t.scrollTop(r);
                var o = t.innerHeight(),
                    i = n + o,
                    s = e.innerHeight();
                r + s > i && t.scrollTop(r - o + s)
            }, t.prototype.hasSelectableRootItem = function() {
                var e = this.props.rootStyle;
                return e === g.TreeItem || e === g.HeaderItem
            }, t.prototype.getHTMLIdPrefix = function() {
                return this.HTMLIdPrefix || (this.HTMLIdPrefix = "tree-view-" + Math.floor(16777215 * Math.random()).toString(16))
            }, t.prototype.getLastLeafOf = function(e) {
                var t = this.props.tree.getChildItems(e);
                return this.state.expandedItemKeys.contains(e.key) && null != t && t.size > 0 ? this.getLastLeafOf(t.last()) : e
            }, t.prototype.getPrevItem = function(e) {
                if (!e) return null;
                var t = this.props.tree.getParentItem(e);
                if (!t) return null;
                var n = this.props.tree.getChildItems(t),
                    r = n.indexOf(e);
                if (r > 0) return this.getLastLeafOf(n.get(r - 1));
                if (0 === r) {
                    return t === this.props.tree.rootItem && !this.hasSelectableRootItem() ? null : t
                }
                return null
            }, t.prototype.getNextItem = function(e, t) {
                if (void 0 === t && (t = !0), !e) return null;
                var n = this.state.expandedItemKeys.contains(e.key),
                    r = n && this.props.tree.isParent(e);
                if (t && r) return this.props.tree.getChildItems(e).first();
                var o = this.props.tree.getParentItem(e);
                if (!o) return null;
                var i = this.props.tree.getChildItems(o),
                    s = i.size - 1,
                    a = i.indexOf(e);
                return a === s ? this.getNextItem(o, !1) : 0 <= a && a < s ? i.get(a + 1) || null : null
            }, t.prototype.advanceSelection = function(e) {
                if (void 0 === e && (e = !1), !this.state.selectedItemKey) {
                    var t = void 0;
                    if (this.hasSelectableRootItem()) t = this.props.tree.rootItem;
                    else {
                        var n = this.props.tree.getChildItems(this.props.tree.rootItem);
                        t = n ? n.first() : null
                    }
                    return this.selectItem(t), !0
                }
                var r = this.props.tree.items.get(this.state.selectedItemKey),
                    o = e ? this.getPrevItem(r) : this.getNextItem(r);
                return !!o && (this.selectItem(o), !0)
            }, t.prototype.getValidHTMLIdForItem = function(e) {
                return ("" + this.getHTMLIdPrefix() + e.key).replace(/\s+/g, "_")
            }, t.prototype.setItemExpanded = function(e, t) {
                return t ? this.state.expandedItemKeys.add(e) : this.state.expandedItemKeys.delete(e)
            }, t.prototype.canItemExpand = function(e) {
                return e && (e.canExpand || this.props.tree.isParent(e))
            }, t.prototype.renderSingleItem = function(e, t, r, o) {
                void 0 === o && (o = {});
                var s = n.__assign({
                        id: this.getValidHTMLIdForItem(e),
                        key: e.key,
                        item: e,
                        isSelected: this.state.selectedItemKey === e.key,
                        isExpanded: this.state.expandedItemKeys.contains(e.key) || e.forceExpanded,
                        canExpand: this.canItemExpand(e) && !e.forceExpanded,
                        level: t,
                        onClick: this.selectItem,
                        onExpandButtonClick: this.handleExpandButtonClick
                    }, o),
                    a = this.props.treeItemView;
                return i.default.createElement(a, n.__assign({}, s), r)
            }, t.prototype.renderItemAndDescendants = function(e, t) {
                var n, r = this.state.expandedItemKeys.contains(e.key) || e.forceExpanded;
                return this.props.tree.isParent(e) && r && (n = this.renderChildrenOfItemAsGroup(e, t + 1)), this.renderSingleItem(e, t, n)
            }, t.prototype.renderChildrenOfItemAsGroup = function(e, t) {
                var n = this;
                if (!e || !this.props.tree.isParent(e)) return null;
                var r = this.props.tree.getChildItems(e).map(function(e) {
                    return n.renderItemAndDescendants(e, t)
                });
                return i.default.createElement(w, null, r.toJS())
            }, t.prototype.render = function() {
                var e, t, n, o = this.props.tree.rootItem;
                if (this.props.rootStyle === g.TreeItem) t = i.default.createElement(w, null, this.renderItemAndDescendants(o, 0));
                else if (this.props.rootStyle === g.HeaderItem) e = this.getValidHTMLIdForItem(o), t = i.default.createElement(w, null, this.renderSingleItem(o, 0, null, {
                    showAsHeader: !0,
                    id: e
                }), this.renderChildrenOfItemAsGroup(o, 0));
                else if (this.props.rootStyle === g.StaticHeader) e = this.getValidHTMLIdForItem(o), t = i.default.createElement(w, null, i.default.createElement(R, {
                    item: o,
                    id: e
                }), this.renderChildrenOfItemAsGroup(o, 0));
                else {
                    if (this.props.rootStyle !== g.None) throw new Error("Unknown root style: " + this.props.rootStyle);
                    t = this.renderChildrenOfItemAsGroup(this.props.tree.rootItem, 0)
                }
                if (this.state.selectedItemKey) {
                    var s = this.props.tree.items.get(this.state.selectedItemKey);
                    n = this.getValidHTMLIdForItem(s)
                }
                return i.default.createElement("div", {
                    role: "tree",
                    tabIndex: 0,
                    onFocus: this.handleOnFocus,
                    onBlur: this.handleOnBlur,
                    className: r.default("tree-view", "ax-focusable", {
                        "is-focused": this.state.showFocused
                    }),
                    "aria-labelledby": e ? e : void 0,
                    "aria-activedescendant": n
                }, t, this.props.children)
            }, t.defaultProps = {
                rootStyle: g.None,
                onItemSelected: function(e) {},
                onItemExpanded: function(e, t) {},
                treeItemView: k
            }, t
        })(i.default.Component);
    t.TreeView = m.requireCssWithComponent(N, ["/static/css/react/tree_view-vflJs4_j4.css", "/static/css/accessibility-vfliGZNRm.css"]);
    var T;
    (function(e) {
        e.BRIEFCASE = "s_briefcase", e.HOUSE = "s_house", e.DROPBOX = "dropbox"
    })(T = t.RootIcon || (t.RootIcon = {}));
    var O = (function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.folderNsId = n, r
        }
        return n.__extends(t, e), t
    })(b);
    t.FolderTreeItem = O;
    var D = function(e) {
            return new O({
                key: e.path,
                label: h.filename(e.path),
                canExpand: e.has_subdirs,
                icon: e.icon,
                disabled: e.read_only
            }, e.contained_ns)
        },
        P = (function(e) {
            function r() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._pendingAjaxRequest = null, t.state = {
                    showLoadingScreen: !1,
                    tree: C.createWithRootItem(new b({
                        key: "/",
                        icon: t.props.rootIcon,
                        label: t.props.treeRootName
                    }))
                }, t.asyncFetchSubFoldersForItem = function(e) {
                    var n = e === t.state.tree.rootItem;
                    n && t.setState({
                        showLoadingScreen: !0
                    }), t._pendingAjaxRequest && t._pendingAjaxRequest.abort(), t._pendingAjaxRequest = t.props.mkAjaxRequest(e.key), Promise.resolve(t._pendingAjaxRequest).then(function(n) {
                        var r = t.parseFolderList(n),
                            o = t.state.tree.setChildItems(e, r);
                        t.setState({
                            tree: o
                        })
                    }).catch(t.props.handleError).then(function() {
                        if (null != t._pendingAjaxRequest) {
                            t._pendingAjaxRequest = null, n && (t.props.isLoadingAdditionalData || t.setState({
                                showLoadingScreen: !1
                            }));
                            var e = s.findDOMNode(t.refs.treeView);
                            e && e.focus()
                        }
                    })
                }, t.handleItemSelected = function(e) {
                    e instanceof O ? t.props.onFolderSelected(e.key, e.folderNsId) : t.props.onFolderSelected(e.key)
                }, t.handleExpandButtonClick = function(e, n) {
                    n && !t.state.tree.isParent(e) && t.asyncFetchSubFoldersForItem(e)
                }, t.renderLoadingMessage = function() {
                    return i.default.createElement("span", {
                        className: "tree-view__loading-label"
                    }, _._("Loading your folders…"))
                }, t
            }
            return n.__extends(r, e), r.prototype.componentDidMount = function() {
                this.asyncFetchSubFoldersForItem(this.state.tree.rootItem)
            }, r.prototype.componentWillReceiveProps = function(e) {
                e.isLoadingAdditionalData || e.isLoadingAdditionalData === this.props.isLoadingAdditionalData || this.setState({
                    showLoadingScreen: !1
                })
            }, r.prototype.componentWillUnmount = function() {
                this._pendingAjaxRequest && (this._pendingAjaxRequest.abort(), this._pendingAjaxRequest = null)
            }, r.prototype.parseFolderList = function(e) {
                return e.map(D)
            }, r.prototype.render = function() {
                var e = this.props.isRootSelectable ? g.HeaderItem : g.StaticHeader;
                return i.default.createElement(t.TreeView, {
                    ref: "treeView",
                    tree: this.state.tree,
                    rootStyle: e,
                    onItemSelected: this.handleItemSelected,
                    onItemExpanded: this.handleExpandButtonClick,
                    resetSelectedItem: this.props.resetSelectedItem
                }, this.state.showLoadingScreen ? this.renderLoadingMessage() : void 0)
            }, r.defaultProps = {
                onFolderSelected: function(e, t) {},
                handleError: function(e) {
                    y.Notify.error(_._("An error occurred while trying to load your folder."))
                }
            }, r
        })(i.default.Component),
        L = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t
        })(P);
    t.FolderTreeView = L;
    var F = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.parseFolderList = function(e) {
            var t = this,
                n = -1,
                r = e.map(function(e, r) {
                    var o = e.path;
                    return t.props.pinnedFolder && o === t.props.pinnedFolder && (n = r), D(e)
                });
            if (n !== -1) {
                var o = r[n];
                r.splice(n, 1), r.unshift(o)
            }
            return r
        }, t
    })(P);
    t.PinnedFolderTreeView = F, t.AdminFolderTreeView = S, t.UserFolderTreeView = x
});
//# sourceMappingURL=pkg-selectable-list.min.js-vflwDsMLe.map