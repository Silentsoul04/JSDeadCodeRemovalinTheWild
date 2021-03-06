var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    return r.default = e, r
};
define("modules/clean/react/retrieval_success_banner/browse_success_banner", ["require", "exports", "modules/clean/react/async/loadable"], function(e, r, n) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.BrowseSuccessBanner = n.Loadable({
        loader: function() {
            return new Promise(function(r, n) {
                e(["modules/clean/react/retrieval_success_banner/browse_success_component"], r, n)
            }).then(__importStar).then(function(e) {
                return e.BrowseSuccessBanner
            })
        }
    })
}), define("modules/clean/react/retrieval_success_banner/data/action_creators", ["require", "exports", "modules/clean/react/retrieval_success_banner/data/selectors", "modules/clean/react/retrieval_success_banner/data/types", "modules/clean/react/retrieval_success_banner/constants", "modules/clean/storage"], function(e, r, n, s, t, a) {
    "use strict";

    function c(e) {
        return {
            type: s.ActionTypes.UPDATE_BSB_COUNTER_COMPLETE_KEY,
            payload: {
                browseSuccessBannerCounterComplete: e
            }
        }
    }

    function o(e) {
        return {
            type: s.ActionTypes.UPDATE_RETRIEVAL_SUCCESS_BANNER_STATE,
            payload: {
                RetrievalSuccessBannerState: e
            }
        }
    }

    function u(e) {
        return {
            type: s.ActionTypes.UPDATE_RSB_VISIBILITY,
            payload: {
                retrievalSuccessBannerShouldShow: e
            }
        }
    }

    function i(e) {
        return {
            type: s.ActionTypes.UPDATE_BSB_VISIBILITY,
            payload: {
                browseSuccessBannerShouldShow: e
            }
        }
    }

    function _(e) {
        return {
            type: s.ActionTypes.UPDATE_SSB_VISIBILITY,
            payload: {
                searchSuccessBannerShouldShow: e
            }
        }
    }

    function l(e) {
        return {
            type: s.ActionTypes.UPDATE_SEARCH_BAR_ABANDONED,
            payload: {
                searchBarAbandoned: e
            }
        }
    }

    function S(e) {
        return {
            type: s.ActionTypes.UPDATE_SEARCH_RESULT_BANNER_DISMISSED,
            payload: {
                searchSuccessBannerDismissed: e
            }
        }
    }

    function d(e) {
        return {
            type: s.ActionTypes.UPDATE_SEARCH_RESULT_ACTION_CLICKED,
            payload: {
                searchResultActionClicked: e
            }
        }
    }

    function E() {
        return function(e, r) {
            n.isInitializedByLocalStorage(r()) || e(o({
                browseSuccessBannerCounterComplete: !!a.LocalStorage.get(t.BROWSE_SUCCESS_COUNT_DOWN_COMPLETE),
                browseSuccessBannerShouldShow: !!a.LocalStorage.get(t.BROWSE_SUCCESS_SHOW_BANNER_KEY),
                searchSuccessBannerShouldShow: !!a.LocalStorage.get(t.SEARCH_SUCCESS_SHOW_BANNER_KEY),
                initializedByLocalStorage: !0
            }))
        }
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.updateBrowseSuccessBannerCounterCompleteKey = c, r.updateRetrievalSuccessBannerState = o, r.updateRetrievalSuccessBannerVisibility = u, r.updateBrowseSuccessBannerVisibility = i, r.updateSearchSuccessBannerVisibility = _, r.updateSearchBarAbandoned = l, r.updateSearchResultBannerDismissed = S, r.updateSearchResultActionClicked = d, r.initialStoreByLocalStorage = E
}), define("modules/clean/react/retrieval_success_banner/data/reducer", ["require", "exports", "tslib", "modules/clean/react/retrieval_success_banner/data/types"], function(e, r, n, s) {
    "use strict";

    function t(e, n) {
        switch (void 0 === e && (e = r.defaultSuccessBannerState), n.type) {
            case s.ActionTypes.UPDATE_BSB_COUNTER_COMPLETE_KEY:
                return a(e, n.payload);
            case s.ActionTypes.UPDATE_BSB_VISIBILITY:
                return c(e, n.payload);
            case s.ActionTypes.UPDATE_RSB_VISIBILITY:
                return o(e, n.payload);
            case s.ActionTypes.UPDATE_SSB_VISIBILITY:
                return u(e, n.payload);
            case s.ActionTypes.UPDATE_SEARCH_BAR_ABANDONED:
                return i(e, n.payload);
            case s.ActionTypes.UPDATE_SEARCH_RESULT_BANNER_DISMISSED:
                return _(e, n.payload);
            case s.ActionTypes.UPDATE_SEARCH_RESULT_ACTION_CLICKED:
                return l(e, n.payload);
            case s.ActionTypes.UPDATE_RETRIEVAL_SUCCESS_BANNER_STATE:
                return S(e, n.payload);
            default:
                return e
        }
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.defaultSuccessBannerState = {
        browseSuccessBannerCounterComplete: !1,
        browseSuccessBannerShouldShow: !1,
        retrievalSuccessBannerShouldShow: !1,
        searchSuccessBannerShouldShow: !1,
        searchBarAbandoned: !1,
        searchSuccessBannerDismissed: !1,
        searchResultActionClicked: !1,
        initializedByLocalStorage: !1
    };
    var a = function(e, r) {
            return n.__assign({}, e, r)
        },
        c = function(e, r) {
            return n.__assign({}, e, r)
        },
        o = function(e, r) {
            return n.__assign({}, e, r)
        },
        u = function(e, r) {
            return n.__assign({}, e, r)
        },
        i = function(e, r) {
            return n.__assign({}, e, r)
        },
        _ = function(e, r) {
            return n.__assign({}, e, r)
        },
        l = function(e, r) {
            return n.__assign({}, e, r)
        },
        S = function(e, r) {
            return n.__assign({}, e, r.RetrievalSuccessBannerState)
        };
    r.successBannerReducer = t
}), define("modules/clean/react/retrieval_success_banner/data/selectors", ["require", "exports", "modules/clean/react/retrieval_success_banner/data/reducer", "modules/clean/redux/selectors", "modules/clean/redux/namespaces"], function(e, r, n, s, t) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = function(e) {
        return s.getStateAtNamespace(e, t.RETRIEVAL_SUCCESS_BANNER_NAMESPACE_KEY) || n.defaultSuccessBannerState
    };
    r.isBrowseSuccessBannerCounterComplete = function(e) {
        return a(e).browseSuccessBannerCounterComplete
    }, r.isBrowseSuccessBannerVisible = function(e) {
        return a(e).browseSuccessBannerShouldShow
    }, r.isRetrievalSuccessBannerVisible = function(e) {
        return a(e).retrievalSuccessBannerShouldShow
    }, r.isSearchSuccessBannerVisible = function(e) {
        return a(e).searchSuccessBannerShouldShow
    }, r.isSearchBarAbandoned = function(e) {
        return a(e).searchBarAbandoned
    }, r.isSearchResultActionClicked = function(e) {
        return a(e).searchResultActionClicked
    }, r.isSearchSuccessBannerDismissed = function(e) {
        return a(e).searchSuccessBannerDismissed
    }, r.isInitializedByLocalStorage = function(e) {
        return !!a(e).initializedByLocalStorage
    }
}), define("modules/clean/react/retrieval_success_banner/data/store", ["require", "exports", "modules/clean/redux/namespaces", "modules/clean/react/retrieval_success_banner/data/reducer", "modules/clean/redux/store"], function(e, r, n, s, t) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a;
    r.getStoreForSuccessBanner = function() {
        var e;
        return a || (a = t.getStoreAndRegisterReducers((e = {}, e[n.RETRIEVAL_SUCCESS_BANNER_NAMESPACE_KEY] = s.successBannerReducer, e))), a
    }
}), define("modules/clean/react/retrieval_success_banner/data/types", ["require", "exports"], function(e, r) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    (function(e) {
        e.UPDATE_BSB_COUNTER_COMPLETE_KEY = "UPDATE_BSB_COUNTER_COMPLETE_KEY", e.UPDATE_BSB_VISIBILITY = "UPDATE_BSB_VISIBILITY", e.UPDATE_RSB_VISIBILITY = "UPDATE_RSB_VISIBILITY", e.UPDATE_RETRIEVAL_SUCCESS_BANNER_STATE = "UPDATE_RETRIEVAL_SUCCESS_BANNER_STATE", e.UPDATE_SSB_VISIBILITY = "UPDATE_SSB_VISIBILITY", e.UPDATE_SEARCH_BAR_ABANDONED = "UPDATE_SEARCH_BAR_ABANDONED", e.UPDATE_SEARCH_RESULT_BANNER_DISMISSED = "UPDATE_SEARCH_RESULT_BANNER_DISMISSED", e.UPDATE_SEARCH_RESULT_ACTION_CLICKED = "UPDATE_SEARCH_RESULT_ACTION_CLICKED"
    })(r.ActionTypes || (r.ActionTypes = {}))
}), define("modules/clean/react/retrieval_success_banner/retrieval_success_browseview_banner", ["require", "exports", "tslib", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, r, n, s, t) {
    "use strict";
    var a = this;
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.RetrievalSuccessBrowseviewBanner = s.Loadable({
        loader: function() {
            return n.__awaiter(a, void 0, Promise, function() {
                var r;
                return n.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, t.waitForTTI()];
                        case 1:
                            return s.sent(), [4, new Promise(function(r, n) {
                                e(["modules/clean/react/retrieval_success_banner/retrieval_success_browseview_component"], r, n)
                            }).then(n.__importStar)];
                        case 2:
                            return r = s.sent().RetrievalSuccessBrowseviewBannerWithProvider, [2, r]
                    }
                })
            })
        }
    })
}), define("modules/clean/react/retrieval_success_banner/retrieval_success_filesview_banner", ["require", "exports", "tslib", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, r, n, s, t) {
    "use strict";
    var a = this;
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.RetrievalSuccessFilesviewBanner = s.Loadable({
        loader: function() {
            return n.__awaiter(a, void 0, Promise, function() {
                var r;
                return n.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, t.waitForTTI()];
                        case 1:
                            return s.sent(), [4, new Promise(function(r, n) {
                                e(["modules/clean/react/retrieval_success_banner/retrieval_success_filesview_component"], r, n)
                            }).then(n.__importStar)];
                        case 2:
                            return r = s.sent().RetrievalSuccessFilesviewBannerWithProvider, [2, r]
                    }
                })
            })
        }
    })
}), define("modules/clean/react/retrieval_success_banner/retrieval_success_home_banner", ["require", "exports", "tslib", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, r, n, s, t) {
    "use strict";
    var a = this;
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.RetrievalSuccessHomeBanner = s.Loadable({
        loader: function() {
            return n.__awaiter(a, void 0, Promise, function() {
                var r;
                return n.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, t.waitForTTI()];
                        case 1:
                            return s.sent(), [4, new Promise(function(r, n) {
                                e(["modules/clean/react/retrieval_success_banner/retrieval_success_home_component"], r, n)
                            }).then(n.__importStar)];
                        case 2:
                            return r = s.sent().RetrievalSuccessHomeBannerWithProvider, [2, r]
                    }
                })
            })
        }
    })
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    return r.default = e, r
};
define("modules/clean/react/retrieval_success_banner/search_success_banner", ["require", "exports", "modules/clean/react/async/loadable"], function(e, r, n) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.SearchSuccessBanner = n.Loadable({
        loader: function() {
            return new Promise(function(r, n) {
                e(["modules/clean/react/retrieval_success_banner/search_success_component"], r, n)
            }).then(__importStar).then(function(e) {
                return e.SearchSuccessBanner
            })
        }
    })
});
//# sourceMappingURL=pkg-retrieval-success-banner.min.js-vfll1gXP8.map