define("modules/clean/react/async_file_modal_controller", ["require", "exports", "tslib", "modules/core/exception"], function(e, t, o, n) {
    "use strict";

    function r(t) {
        return o.__awaiter(this, void 0, void 0, function() {
            var n;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, e(["modules/clean/react/file_modal_controller"])];
                    case 1:
                        return n = o.sent()[0], t(n), [2]
                }
            })
        })
    }

    function a(t) {
        e(["modules/clean/react/file_modals"]).then(function(e) {
            e[0].showUnifiedTrashModal(t)
        })
    }

    function i(t) {
        e(["modules/clean/react/file_modals"]).then(function(e) {
            e[0].showPurgeModal(t)
        })
    }

    function s(e, t, o, n, a) {
        r(function(r) {
            (0, r.showDelete)(e, t, o, n, a)
        })
    }

    function c(e, t, o) {
        r(function(n) {
            return (0, n.showNoAccess)(e, t, o)
        })
    }

    function l(e, t, o) {
        r(function(n) {
            return (0, n.showContentManagerBridge)(e, t, o)
        })
    }

    function u(e) {
        r(function(t) {
            return (0, t.showConfirmOwnershipTransferModal)(e)
        })
    }

    function _(e) {
        if (!(e.fsws.length > 0)) return void n.reportStack("Opening FSW modal without fsws", {
            severity: n.SEVERITY.NONCRITICAL,
            tags: ["x_platform_fsw"]
        });
        r(function(t) {
            return (0, t.showFileSystemWarningsModal)(e)
        })
    }

    function d(e) {
        r(function(t) {
            return (0, t.showMoveErrorModal)(e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showUnifiedTrashModal = a, t.showPurgeModal = i, t.showDelete = s, t.showNoAccess = c, t.showContentManagerBridge = l, t.showConfirmOwnershipTransferModal = u, t.showFileSystemWarningsModal = _, t.showMoveErrorModal = d
}), define("modules/clean/react/async_overquota_modal_controller", ["require", "exports", "tslib"], function(e, t, o) {
    "use strict";

    function n(t, n, r) {
        return o.__awaiter(this, void 0, void 0, function() {
            var a;
            return o.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, new Promise(function(t, o) {
                            e(["modules/clean/react/overquota_modal_controller"], t, o)
                        }).then(o.__importStar)];
                    case 1:
                        return a = i.sent().showOverquota, a({
                            oqa: t,
                            tagline: n,
                            headline: r
                        }), [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showOverquota = n
}), define("modules/clean/react/growth/async_joiner_personal_account_modal", ["require", "exports", "tslib", "modules/core/browser", "external/lodash", "modules/clean/react/modal", "react", "modules/core/i18n", "modules/clean/react/css", "modules/clean/static_urls", "modules/clean/api_v2/user_client"], function(e, t, o, n, r, a, i, s, c, l, u) {
    "use strict";

    function _(e) {
        t.asyncWarmJoinerModalProps(e).then(function(t) {
            var n = t[0],
                r = t[1];
            a.Modal.showInstance(i.createElement(r, o.__assign({}, p(e, n))))
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), r = o.__importStar(r), a = o.__importStar(a), i = o.__importStar(i);
    var d, m = function(e) {
            return (new u.UserApiV2Client).ns("onboarding_tracker").rpc("get_checklist_modules_for_user", {}, {
                subjectUserId: e
            }).then(function(e) {
                return !!r.mapValues(r.keyBy(e.modules, "name"), function(e) {
                    return !!e.completed
                }).desktop_client_link
            })
        },
        f = r.memoize(m);
    t.asyncWarmJoinerModalProps = function(t) {
        var n = f(t.id);
        return d = new Promise(function(t, o) {
            e(["premium-growth/joiner-education-modal"], t, o)
        }).then(o.__importStar).then(function(e) {
            var t = e.JoinerEducationModal;
            return c.requireCssWithComponent(t, ["/static/js/premium-growth/index.web-vflb9JTu1.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css"])
        }), Promise.all([n, d])
    };
    var h = function(e) {
            (new u.UserApiV2Client).ns("onboarding_tracker").rpc("mark_modules_complete_for_tracker", {
                tracker: "joiner_checklist_inform_personal_account",
                modules: ["setup_team_space"]
            }, {
                subjectUserId: e.id
            }).then(function() {
                n.redirect("/team_checklist_next?from_module=24b9566a")
            })
        },
        p = function(e, t) {
            var n = {
                    title: s._("Link accounts on desktop"),
                    copy: s._("Just sign into your new account on the desktop app.       To start collaborating, move folders your team should have access to into the team space."),
                    buttonTitle: s._("Got it"),
                    onClick: function() {
                        h(e)
                    },
                    open: !0
                },
                r = o.__assign({}, n, {
                    ordering: "image-last",
                    imgProps: {
                        alt: "team joiner education modal image",
                        className: "joiner-education-modal-image__graphic-tray",
                        src: l.static_url("/static/images/growth/team_joiner_tray_finder-vflkMS_6a.png"),
                        srcSet: l.static_url("/static/images/growth/team_joiner_tray_finder@2x-vflJPTz2q.png") + " 2x"
                    }
                }),
                a = o.__assign({}, n, {
                    ordering: "image-first",
                    imgProps: {
                        alt: "team joiner education modal image",
                        className: "joiner-education-modal-image__graphic-paired",
                        src: l.static_url("/static/images/growth/team_joiner_paired_finder-vflkNnPlZ.png"),
                        srcSet: l.static_url("/static/images/growth/team_joiner_paired_finder@2x-vflS4EQyH.png") + " 2x"
                    }
                });
            return t ? a : r
        };
    t.asyncShowJoinerPersonalAccountModal = _
});
//# sourceMappingURL=pkg-browse-more.min.js-vfl9pD6Sk.map