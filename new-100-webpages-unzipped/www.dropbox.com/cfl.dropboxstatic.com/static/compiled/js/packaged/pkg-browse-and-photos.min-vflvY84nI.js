define("modules/clean/flux/action_type", ["require", "exports"], function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var t = function(e, n) {
        for (var t = {}, r = {}, o = 0, l = Object.keys(n || {}); o < l.length; o++) {
            var i = l[o],
                u = n[i];
            if (t[i] = e + "__" + u, null != r[u]) throw new Error("Duplicate action value '" + u + "'!");
            r[u] = !0
        }
        return t
    };
    n.withActionNamespace = t
}), define("modules/clean/react/selection", ["require", "exports", "tslib", "external/immutable"], function(e, n, t, r) {
    "use strict";

    function o(e, n) {
        return new l({
            selected: e ? r.OrderedSet(e) : r.OrderedSet(),
            anchor: n || (e ? e[0] : null)
        })
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), r = t.__importStar(r);
    var l = (function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return t.__extends(n, e), n
    })(r.Record({
        selected: null,
        anchor: null
    }, "Selection"));
    n.Selection = l, n.createSelection = o
}), define("modules/clean/sharing/gating_util", ["require", "exports", "modules/constants/sharing"], function(e, n, t) {
    "use strict";

    function r(e) {
        return t.TRUELINK.NO_COMMENT_ENABLED && !!(null != e ? t.TRUELINK.NO_COMMENT_ENABLED[e.id] : void 0)
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.GoldenGate = {
        hasNewOwnershipModel: function(e) {
            return Boolean(t.GOLDEN_GATE.HAS_NEW_OWNERSHIP_MODEL[e])
        },
        hasContentManagerAndSuperAdmin: function(e) {
            return Boolean(t.GOLDEN_GATE.HAS_CONTENT_MANAGER_AND_SUPER_ADMIN[e])
        },
        hasContentManagerCdm: function(e) {
            return Boolean(t.GOLDEN_GATE.HAS_CONTENT_MANAGER_CDM[e])
        },
        hasContentManagerFolderRestore: function(e) {
            return Boolean(t.GOLDEN_GATE.CAN_RESTORE_FOLDERS_IN_CM[e])
        },
        SHARING_TOTAL_LIMIT: t.GOLDEN_GATE.SHARING_TOTAL_LIMIT
    }, n.isUserNoCommentEnabled = r
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e)
        for (var t in e) Object.hasOwnProperty.call(e, t) && (n[t] = e[t]);
    return n.default = e, n
};
define("modules/clean/sharing/public_folder/public_folder", ["require", "exports", "modules/core/uri", "modules/constants/public_folder_constants"], function(e, n, t, r) {
    "use strict";

    function o(e, n) {
        if (e.publicAppToken) return n;
        if (!e.isPublicFolderEnabled) return null;
        var t = (e.publicFolderFqPath || "/public").toLowerCase(),
            r = n.toLowerCase();
        return r === t ? "/" : r.startsWith(t + "/") ? n.substring(t.length) : null
    }

    function l(e, n) {
        return null != o(e, n)
    }

    function i(e, n, l, i) {
        if (i) return null;
        var u, a = o(n, l);
        if (u = r.SHOULD_REDIRECT_URL ? "u" + e + ".dl.dropboxusercontent.com" : "dl.dropboxusercontent.com", null != a) {
            var c = new t.URI({
                scheme: "https",
                authority: u
            });
            return n.publicAppToken ? (c.setPath("/spa/" + n.publicAppToken + a + "/data"), c.toString()) : (c.setPath("/u/" + e + a), c.toString())
        }
        return null
    }

    function u(n) {
        return new Promise(function(t, r) {
            Promise.all([new Promise(function(n, t) {
                e(["react"], n, t)
            }).then(__importStar), new Promise(function(n, t) {
                e(["modules/clean/react/modal"], n, t)
            }).then(__importStar), new Promise(function(n, t) {
                e(["modules/clean/sharing/public_folder/modal"], n, t)
            }).then(__importStar)]).then(function(e) {
                var r = e[0],
                    o = e[1].Modal,
                    l = e[2].CopyPublicLinkModal;
                o.showInstance(r.createElement(l, {
                    publicLink: n
                })), t()
            })
        })
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.shouldUsePublicFolderSharing = l, n.makePublicFolderLink = i, n.showPublicFolderLinkModal = u
});
//# sourceMappingURL=pkg-browse-and-photos.min.js-vflSBVBEB.map