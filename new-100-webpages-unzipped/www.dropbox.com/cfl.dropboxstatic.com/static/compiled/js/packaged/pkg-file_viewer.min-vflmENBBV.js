define("comments2/transforms/annotations", ["require", "exports", "tslib"], function(e, t, r) {
    "use strict";

    function n(e, t) {
        return e[".tag"] === t
    }

    function i(e) {
        if (n(e, "video")) return {
            type: "video",
            time: e.time
        };
        if (n(e, "audio")) return {
            type: "audio",
            time: e.time
        };
        if (n(e, "document")) return {
            type: "document",
            regionType: e.region_type[".tag"],
            label: e.label,
            regions: e.regions
        };
        if (n(e, "image")) return {
            type: "image",
            region: e.region,
            label: e.label
        };
        throw new Error("Attempted to convert an annotation type that does not yet exist.")
    }

    function o(e) {
        return "video" === e.type ? {
            ".tag": "video",
            time: e.time
        } : "audio" === e.type ? {
            ".tag": "audio",
            time: e.time
        } : "document" === e.type ? {
            ".tag": "document",
            regions: e.regions,
            region_type: {
                ".tag": e.regionType
            }
        } : {
            ".tag": "image",
            region: r.__assign({}, e.region, {
                page: 1
            })
        }
    }

    function a(e) {
        return "image" === e.type ? {
            type: "rnd",
            regions: [e.region]
        } : "highlight" === e.regionType ? {
            type: "highlight",
            regions: e.regions
        } : {
            type: "rnd",
            regions: e.regions
        }
    }

    function s(e, t) {
        return r.__assign({}, e, {
            page: t
        })
    }

    function l(e, t) {
        var r = e.type,
            n = e.regions;
        return void 0 === t ? {
            type: "image",
            region: n[0]
        } : {
            type: "document",
            regionType: "rnd" === r ? "rectangle" : "highlight",
            regions: n.map(function(e) {
                return s(e, t)
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.annotationToIAnnotation = i, t.iAnnotationToAnnotation = o, t.numberedAnnotationToIInteractionAnnotation = a, t.iInteractionAnnotationToNumberedAnnotation = l
}), define("comments2/transforms/comments", ["require", "exports", "comments2/transforms/annotations", "comments2/transforms/metadata", "comments2/transforms/revisions"], function(e, t, r, n, i) {
    "use strict";

    function o(e, t, r, o) {
        return {
            author: r[e.author_id],
            content: {
                metadata: n.metadataToIMetadata(e.metadata),
                text: e.content
            },
            deleted: e.deleted,
            id: e.id,
            threadId: t,
            timestamp: new Date(e.timestamp),
            revisionInfo: o && e.revision ? i.revisionInfoToIRevisionInfo(o, e.revision) : {
                isCurrent: !0
            },
            userPermissions: {
                canDelete: e.permissions.can_delete,
                canEdit: e.permissions.can_edit
            }
        }
    }

    function a(e) {
        var t = e.annotation,
            o = e.content,
            a = e.stream;
        return {
            annotation_data: t ? r.iAnnotationToAnnotation(t) : void 0,
            content: o.text,
            metadata: n.iCommentMetadataToUserSubmittedMetadata(o.metadata),
            revision: i.streamToRevision(a)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.commentToIComment = o, t.iCommentContentToUserSubmittedComment = a
}), define("comments2/transforms", ["require", "exports", "comments2/transforms/comments", "comments2/transforms/threads", "comments2/transforms/users", "comments2/transforms/revisions", "comments2/transforms/annotations"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.iCommentContentToUserSubmittedComment = r.iCommentContentToUserSubmittedComment, t.threadsToIThreadMap = n.threadsToIThreadMap, t.threadToIThread = n.threadToIThread, t.usersToIUserMap = i.usersToIUserMap, t.userToIUser = i.userToIUser, t.streamToRevision = o.streamToRevision, t.numberedAnnotationToIInteractionAnnotation = a.numberedAnnotationToIInteractionAnnotation, t.iInteractionAnnotationToNumberedAnnotation = a.iInteractionAnnotationToNumberedAnnotation
}), define("comments2/transforms/metadata", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t) {
        return e.type === t
    }

    function n(e) {
        return r(e, "mention")
    }

    function i(e) {
        return r(e, "style")
    }

    function o(e) {
        return r(e, "sticker")
    }

    function a(e) {
        var t = e.format[".tag"];
        if ("other" === t) throw new Error('"other" is not a valid format block');
        return {
            location: e.location,
            style: t,
            type: "style"
        }
    }

    function s(e) {
        var t = e.user.type[".tag"];
        if ("other" === t) throw new Error('"other" is not a valid user type');
        var r = {
            identifier: e.user.identifier,
            type: t
        };
        return {
            location: e.location,
            type: "mention",
            user: r
        }
    }

    function l(e) {
        if (e.url && e.name && e.description) return {
            type: "sticker",
            id: e.id,
            url: e.url,
            name: e.name,
            description: e.description
        }
    }

    function c(e) {
        var t = e.formatting.map(a).concat(e.mentions.map(s));
        if (e.sticker) {
            var r = l(e.sticker);
            r && t.push(r)
        }
        return t
    }

    function u(e) {
        var t = e.filter(i).map(function(e) {
                return {
                    format: {
                        ".tag": e.style
                    },
                    location: e.location
                }
            }),
            r = e.filter(n).map(function(e) {
                return {
                    user: {
                        type: {
                            ".tag": e.user.type
                        },
                        identifier: e.user.identifier
                    },
                    location: e.location
                }
            }),
            a = e.find(o);
        return {
            formatting: t,
            mentions: r,
            sticker: a ? {
                id: a.id
            } : void 0
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isMentionMetadata = n, t.isStyleMetadata = i, t.isStickerMetadata = o, t.metadataToIMetadata = c, t.iCommentMetadataToUserSubmittedMetadata = u
}), define("comments2/transforms/revisions", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t) {
        var r = t.timestamp ? new Date(t.timestamp) : void 0;
        return {
            isCurrent: e.ns_id === t.ns_id && e.sjid === t.sjid,
            revision: {
                nsId: t.ns_id,
                sjId: t.sjid
            },
            timestamp: r
        }
    }

    function n(e) {
        return e && "file" === e.type ? {
            ns_id: e.ns_id,
            sjid: e.sjid
        } : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.revisionInfoToIRevisionInfo = r, t.streamToRevision = n
}), define("comments2/transforms/threads", ["require", "exports", "tslib", "external/lodash", "comments2/transforms/annotations", "comments2/transforms/comments"], function(e, t, r, n, i, o) {
    "use strict";

    function a(e) {
        return "resolved_with_details" === e[".tag"]
    }

    function s(e, t) {
        if ("resolved_no_details" === e[".tag"]) return {
            type: "no_details"
        };
        if (a(e)) return {
            type: "with_details",
            resolver: t[e.resolver_id],
            resolvedTimestamp: new Date(e.resolved_timestamp)
        };
        throw new Error("Not a valid type for ResolvedInfo.")
    }

    function l(e, t, n) {
        var a = e.comments.map(function(r) {
                return o.commentToIComment(r, e.id, t, n)
            }),
            l = e.resolved_info ? {
                resolved: !0,
                resolvedInfo: s(e.resolved_info, t)
            } : {
                resolved: !1
            };
        return r.__assign({
            annotation: e.annotation_data ? i.annotationToIAnnotation(e.annotation_data) : void 0,
            comments: a,
            id: e.id,
            read: e.read
        }, l, {
            timestamp: a[0].timestamp
        })
    }

    function c(e, t, r) {
        var i = e.map(function(e) {
            return l(e, t, r)
        });
        return n.keyBy(i, "id")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resolvedInfoToIResolvedInfo = s, t.threadToIThread = l, t.threadsToIThreadMap = c
}), define("comments2/transforms/users", ["require", "exports", "external/lodash"], function(e, t, r) {
    "use strict";

    function n(e) {
        return {
            id: e.id,
            name: {
                display: e.display_name,
                initials: e.initials,
                public: e.public_name
            },
            photoUrl: e.photo_url
        }
    }

    function i(e) {
        var t = e.map(n);
        return r.keyBy(t, "id")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.userToIUser = n, t.usersToIUserMap = i
}), define("file-viewer/components", ["require", "exports", "file-viewer/components/rapid_fire"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RapidFire = r.RapidFire
}), define("file-viewer/components/rapid_fire", ["require", "exports", "tslib", "react"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var i = (function(e) {
        function t() {
            var t = e.apply(this, arguments) || this;
            return t.keepFiring = !1, t.clearTimer = function() {
                clearTimeout(t.lastTimer)
            }, t.stopFiring = function() {
                t.clearTimer(), t.keepFiring = !1
            }, t.startFiring = function() {
                t.clearTimer();
                var e = t.props,
                    r = e.callback,
                    n = e.onFirstFire,
                    i = e.initialDelay,
                    o = e.repeatDelay;
                n && n(), r();
                var a = function() {
                    r(), t.keepFiring && (t.lastTimer = setTimeout(a, o))
                };
                t.keepFiring = !0, t.lastTimer = setTimeout(a, i)
            }, t
        }
        return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
            this.clearTimer()
        }, t.prototype.render = function() {
            return this.props.render(this.startFiring, this.stopFiring)
        }, t
    })(n.Component);
    t.RapidFire = i, i.defaultProps = {
        initialDelay: 400,
        repeatDelay: 100
    }
}), define("intersection-observer", ["require", "exports"], function(e, t) {
    "use strict";
    (function(e, t) {
        function r(e) {
            this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || u(), this.isIntersecting = !!e.intersectionRect;
            var t = this.boundingClientRect,
                r = t.width * t.height,
                n = this.intersectionRect,
                i = n.width * n.height;
            this.intersectionRatio = r ? Number((i / r).toFixed(4)) : this.isIntersecting ? 1 : 0
        }

        function n(e, t) {
            var r = t || {};
            if ("function" != typeof e) throw new Error("callback must be a function");
            if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = o(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
                return e.value + e.unit
            }).join(" ")
        }

        function i() {
            return e.performance && performance.now && performance.now()
        }

        function o(e, t) {
            var r = null;
            return function() {
                r || (r = setTimeout(function() {
                    e(), r = null
                }, t))
            }
        }

        function a(e, t, r, n) {
            "function" == typeof e.addEventListener ? e.addEventListener(t, r, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
        }

        function s(e, t, r, n) {
            "function" == typeof e.removeEventListener ? e.removeEventListener(t, r, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
        }

        function l(e, t) {
            var r = Math.max(e.top, t.top),
                n = Math.min(e.bottom, t.bottom),
                i = Math.max(e.left, t.left),
                o = Math.min(e.right, t.right),
                a = o - i,
                s = n - r;
            return a >= 0 && s >= 0 && {
                top: r,
                bottom: n,
                left: i,
                right: o,
                width: a,
                height: s
            }
        }

        function c(e) {
            var t;
            try {
                t = e.getBoundingClientRect()
            } catch (e) {}
            return t ? (t.width && t.height || (t = {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.right - t.left,
                height: t.bottom - t.top
            }), t) : u()
        }

        function u() {
            return {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }

        function d(e, t) {
            for (var r = t; r;) {
                if (r == e) return !0;
                r = p(r)
            }
            return !1
        }

        function p(e) {
            var t = e.parentNode;
            return t && 11 == t.nodeType && t.host ? t.host : t
        }
        if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) return void("isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function() {
                return this.intersectionRatio > 0
            }
        }));
        var m = [];
        n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.USE_MUTATION_OBSERVER = !0, n.prototype.observe = function(e) {
            if (!this._observationTargets.some(function(t) {
                    return t.element == e
                })) {
                if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                this._registerInstance(), this._observationTargets.push({
                    element: e,
                    entry: null
                }), this._monitorIntersections(), this._checkForIntersections()
            }
        }, n.prototype.unobserve = function(e) {
            this._observationTargets = this._observationTargets.filter(function(t) {
                return t.element != e
            }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
        }, n.prototype.disconnect = function() {
            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
        }, n.prototype.takeRecords = function() {
            var e = this._queuedEntries.slice();
            return this._queuedEntries = [], e
        }, n.prototype._initThresholds = function(e) {
            var t = e || [0];
            return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, r) {
                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                return e !== r[t - 1]
            })
        }, n.prototype._parseRootMargin = function(e) {
            var t = e || "0px",
                r = t.split(/\s+/).map(function(e) {
                    var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                    if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                    return {
                        value: parseFloat(t[1]),
                        unit: t[2]
                    }
                });
            return r[1] = r[1] || r[0], r[2] = r[2] || r[0], r[3] = r[3] || r[1], r
        }, n.prototype._monitorIntersections = function() {
            this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }))))
        }, n.prototype._unmonitorIntersections = function() {
            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
        }, n.prototype._checkForIntersections = function() {
            var e = this._rootIsInDom(),
                t = e ? this._getRootRect() : u();
            this._observationTargets.forEach(function(n) {
                var o = n.element,
                    a = c(o),
                    s = this._rootContainsTarget(o),
                    l = n.entry,
                    u = e && s && this._computeTargetAndRootIntersection(o, t),
                    d = n.entry = new r({
                        time: i(),
                        target: o,
                        boundingClientRect: a,
                        rootBounds: t,
                        intersectionRect: u
                    });
                l ? e && s ? this._hasCrossedThreshold(l, d) && this._queuedEntries.push(d) : l && l.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }, n.prototype._computeTargetAndRootIntersection = function(r, n) {
            if ("none" != e.getComputedStyle(r).display) {
                for (var i = c(r), o = i, a = p(r), s = !1; !s;) {
                    var u = null,
                        d = 1 == a.nodeType ? e.getComputedStyle(a) : {};
                    if ("none" == d.display) return;
                    if (a == this.root || a == t ? (s = !0, u = n) : a != t.body && a != t.documentElement && "visible" != d.overflow && (u = c(a)), u && (o = l(u, o), !o)) break;
                    a = p(a)
                }
                return o
            }
        }, n.prototype._getRootRect = function() {
            var e;
            if (this.root) e = c(this.root);
            else {
                var r = t.documentElement,
                    n = t.body;
                e = {
                    top: 0,
                    left: 0,
                    right: r.clientWidth || n.clientWidth,
                    width: r.clientWidth || n.clientWidth,
                    bottom: r.clientHeight || n.clientHeight,
                    height: r.clientHeight || n.clientHeight
                }
            }
            return this._expandRectByRootMargin(e)
        }, n.prototype._expandRectByRootMargin = function(e) {
            var t = this._rootMarginValues.map(function(t, r) {
                    return "px" == t.unit ? t.value : t.value * (r % 2 ? e.width : e.height) / 100
                }),
                r = {
                    top: e.top - t[0],
                    right: e.right + t[1],
                    bottom: e.bottom + t[2],
                    left: e.left - t[3]
                };
            return r.width = r.right - r.left, r.height = r.bottom - r.top, r
        }, n.prototype._hasCrossedThreshold = function(e, t) {
            var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
            if (r !== n)
                for (var i = 0; i < this.thresholds.length; i++) {
                    var o = this.thresholds[i];
                    if (o == r || o == n || o < r != o < n) return !0
                }
        }, n.prototype._rootIsInDom = function() {
            return !this.root || d(t, this.root)
        }, n.prototype._rootContainsTarget = function(e) {
            return d(this.root || t, e)
        }, n.prototype._registerInstance = function() {
            m.indexOf(this) < 0 && m.push(this)
        }, n.prototype._unregisterInstance = function() {
            var e = m.indexOf(this);
            e != -1 && m.splice(e, 1)
        }, e.IntersectionObserver = n, e.IntersectionObserverEntry = r
    })(window, document)
}), define("file-viewer/polyfills", ["require", "exports", "smoothscroll-polyfill", "intersection-observer", "url-polyfill"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r.polyfill()
}), define("file-viewer/preview_image/container", ["require", "exports", "tslib", "react", "file-viewer/core", "file-viewer/preview_image/preview_image", "file-viewer/preview_image/preview_image_toolbar", "file-viewer/keyboard"], function(e, t, r, n, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var l = (function(e) {
        function t() {
            var t = e.apply(this, arguments) || this;
            return t.handleFitScaleFactorChange = function(e) {
                var r = t.props,
                    n = r.dispatch,
                    o = r.fileViewerId,
                    a = r.fileInfo;
                n(i.updateFitScaleFactor({
                    fileViewerId: o,
                    fileIdOrRevisionId: a.file_id,
                    fitScaleFactor: e
                }))
            }, t.zoomIn = function(e) {
                var r = t.props,
                    n = r.dispatch,
                    o = r.fileViewerId,
                    a = r.fileInfo;
                n(i.zoomIn({
                    fileViewerId: o,
                    fileIdOrRevisionId: a.file_id,
                    sourceContext: e
                }))
            }, t.zoomOut = function(e) {
                var r = t.props,
                    n = r.dispatch,
                    o = r.fileViewerId,
                    a = r.fileInfo;
                n(i.zoomOut({
                    fileViewerId: o,
                    fileIdOrRevisionId: a.file_id,
                    sourceContext: e
                }))
            }, t.zoomOriginalOrFit = function(e) {
                var r = t.props,
                    n = r.dispatch,
                    o = r.fileViewerId,
                    a = r.fileInfo;
                n(i.zoomOriginalOrFit({
                    fileViewerId: o,
                    fileIdOrRevisionId: a.file_id,
                    sourceContext: e
                }))
            }, t.keyboardBindings = s.getZoomInOutBindings({
                zoomIn: function() {
                    return t.zoomIn("keyboard")
                },
                zoomOut: function() {
                    return t.zoomOut("keyboard")
                }
            }), t
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.dispatch,
                r = e.fileInfo.file_id,
                i = e.fileViewerId,
                l = e.intl,
                c = e.filePreviewUiData,
                u = e.fileMetadata;
            return n.createElement("div", {
                className: "_3JKBC6YHnm _2pz0EjZoOj"
            }, n.createElement(o.PreviewImage, Object.assign({}, this.props, {
                onFitScaleFactorChanged: this.handleFitScaleFactorChange
            })), n.createElement(a.PreviewImageToolbar, {
                className: "_3V4LFrZZUw _1COr9ZzNP6",
                dispatch: t,
                fileFlippingContext: u ? u.file_collection_context : void 0,
                fileId: r,
                fileViewerId: i,
                intl: l,
                scaleFactor: c.zoomScaleFactor ? c.zoomScaleFactor : c.fitScaleFactor,
                theme: "osx",
                zoomIn: this.zoomIn,
                zoomOut: this.zoomOut,
                zoomOriginalOrFit: this.zoomOriginalOrFit
            }), n.createElement(s.KeyboardBindingConnector, {
                keyboardBindings: this.keyboardBindings
            }))
        }, t
    })(n.Component);
    t.PreviewImageContainer = l
}), define("file-viewer/preview_image/data_transform", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return {
            thumbnailUrl: e.default_src || "",
            fullSizeUrl: e.full_size_src || "",
            srcSet: e.src_set || "",
            alt: ""
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.transform = r
}), define("file-viewer/preview_image/img_layer", ["require", "exports", "tslib", "react", "file-viewer/preview_image/layer_event_actions"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var o = {
            viewport: "_1qfmN8XukH",
            loader: "_10XzzxD2-Q _3fqREDOmbd",
            smallImg: "LbSAq7r5DB",
            fullSizeImg: "_19VoPo7qJu",
            sizer: "_3JPQLClVw4",
            zoomFit: "_2G_smAf1kF",
            layer: "_3jv_DqNZ9O",
            app: "_3JKBC6YHnm _2pz0EjZoOj",
            toolbar: "_3V4LFrZZUw _1COr9ZzNP6",
            verticalPadding: "40px",
            horizontalPadding: "36px"
        },
        a = (function(e) {
            function t() {
                var t = e.apply(this, arguments) || this;
                return t.state = {
                    fullSizeImgLoaded: !1,
                    loading: !0
                }, t.handleSmallImgLoad = function(e) {
                    var r = e.currentTarget,
                        n = r.naturalWidth,
                        o = r.naturalHeight;
                    t.setState({
                        loading: !1
                    }), t.props.dispatch(i.smallImgLoadedAction({
                        naturalWidth: n,
                        naturalHeight: o
                    }))
                }, t.onFullSizeImgLoad = function(e) {
                    var r = e.currentTarget,
                        n = r.naturalWidth,
                        o = r.naturalHeight;
                    t.setState({
                        fullSizeImgLoaded: !0,
                        loading: !1
                    }), t.props.dispatch(i.fullSizeImgLoadedAction({
                        naturalWidth: n,
                        naturalHeight: o
                    }))
                }, t.handleSmallImgError = function() {
                    return t.props.dispatch(i.smallImgErrorAction())
                }, t.handleContextMenu = function(e) {
                    return t.props.viewportConfig.contextMenuDisabled ? e.preventDefault() : null
                }, t.handleDoubleClick = function() {
                    return t.props.dispatch(i.doubleClickedAction())
                }, t
            }
            return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                e.fileInfo.file_id !== this.props.fileInfo.file_id && this.setState({
                    fullSizeImgLoaded: !1,
                    loading: !0
                })
            }, t.prototype.render = function() {
                var e, t = {},
                    r = this.props,
                    i = r.data,
                    a = i.alt,
                    s = i.fullSizeUrl,
                    l = i.thumbnailUrl,
                    c = i.srcSet,
                    u = r.className,
                    d = this.state,
                    p = d.fullSizeImgLoaded,
                    m = d.loading;
                return p || (e = n.createElement("img", {
                    src: l,
                    srcSet: c,
                    onLoad: this.handleSmallImgLoad,
                    className: o.smallImg + " " + u,
                    onError: this.handleSmallImgError,
                    onContextMenu: this.handleContextMenu,
                    alt: a
                })), p || (t = {
                    display: "none"
                }), n.createElement("div", {
                    className: o.layer
                }, !p && m && n.createElement("i", {
                    className: o.loader
                }), n.createElement("img", {
                    alt: a,
                    className: o.fullSizeImg + " " + u,
                    src: s,
                    style: t,
                    onLoad: this.onFullSizeImgLoad,
                    onDoubleClick: this.handleDoubleClick,
                    onContextMenu: this.handleContextMenu,
                    "data-test": "fv-sdk-img-preview-full-size"
                }), e)
            }, t
        })(n.PureComponent);
    t.ImageLayer = a
}), define("file-viewer/preview_image", ["require", "exports", "file-viewer/preview_image/img_layer", "file-viewer/preview_image/preview_image", "file-viewer/preview_image/data_transform", "file-viewer/preview_image/layers", "file-viewer/preview_image/container"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ImageLayer = r.ImageLayer, t.PreviewImage = n.PreviewImage, t.transform = i.transform, t.defaultLayerRenderFn = o.defaultLayerRenderFn, t.PreviewImageContainer = a.PreviewImageContainer
}), define("file-viewer/preview_image/layer_event_actions", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return {
            type: "@@previews/img/img_layer/smallImgLoaded",
            payload: e
        }
    }

    function n(e) {
        return {
            type: "@@previews/img/img_layer/fullSizeImgLoaded",
            payload: e
        }
    }

    function i() {
        return {
            type: "@@previews/img/img_layer/smallImgError",
            payload: {}
        }
    }

    function o() {
        return {
            type: "@@previews/img/img_layer/doubleClicked",
            payload: {}
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (function(e) {
        e.SmallImgLoaded = "@@previews/img/img_layer/smallImgLoaded", e.FullSizeImgLoaded = "@@previews/img/img_layer/fullSizeImgLoaded", e.SmallImgError = "@@previews/img/img_layer/smallImgError", e.DoubleClicked = "@@previews/img/img_layer/doubleClicked"
    })(t.Action || (t.Action = {})), t.smallImgLoadedAction = r, t.fullSizeImgLoadedAction = n, t.smallImgErrorAction = i, t.doubleClickedAction = o
}), define("file-viewer/preview_image/layers", ["require", "exports", "tslib", "react", "file-viewer/preview_image/img_layer"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.defaultLayerRenderFn = function(e) {
        return function(t) {
            return [n.createElement(i.ImageLayer, Object.assign({
                key: "imgLayer"
            }, e, t))]
        }
    }
}), define("file-viewer/preview_image/preview_image", ["require", "exports", "tslib", "react", "file-viewer/preview_image/viewport", "file-viewer/preview_image/data_transform", "file-viewer/core/data/selectors"], function(e, t, r, n, i, o, a) {
    "use strict";

    function s(e, t, r, n, i) {
        return Math.min((r - (i.vertical || 0)) / e, (n - (i.horizontal || 0)) / t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var l = {
            viewport: "_1qfmN8XukH",
            loader: "_10XzzxD2-Q _3fqREDOmbd",
            smallImg: "LbSAq7r5DB",
            fullSizeImg: "_19VoPo7qJu",
            sizer: "_3JPQLClVw4",
            zoomFit: "_2G_smAf1kF",
            layer: "_3jv_DqNZ9O",
            app: "_3JKBC6YHnm _2pz0EjZoOj",
            toolbar: "_3V4LFrZZUw _1COr9ZzNP6",
            verticalPadding: "40px",
            horizontalPadding: "36px"
        },
        c = (function(e) {
            function t() {
                var t = e.apply(this, arguments) || this;
                return t.state = {}, t.dispatch = function(e) {
                    switch (e.type) {
                        case "@@previews/img/img_layer/smallImgLoaded":
                            return t.setState({
                                aspectRatio: e.payload.naturalWidth / e.payload.naturalHeight
                            }), t.props.onInteractive(), t.props.onRenderSucceeded();
                        case "@@previews/img/img_layer/fullSizeImgLoaded":
                            return t.props.onInteractive(), t.handleFullSizeImgLoad(e.payload.naturalWidth, e.payload.naturalHeight), t.props.onRenderSucceeded();
                        case "@@previews/img/img_layer/smallImgError":
                            return t.props.onRenderFailed();
                        case "@@previews/img/img_layer/doubleClicked":
                            return void(t.props.onDoubleClick && t.props.onDoubleClick())
                    }
                    return t.props.dispatch(e)
                }, t
            }
            return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                e.fileInfo.file_id !== this.props.fileInfo.file_id && this.setState({
                    originalHeight: void 0,
                    originalWidth: void 0,
                    aspectRatio: void 0
                })
            }, t.prototype.getPadding = function() {
                var e = this.props,
                    t = e.verticalPadding,
                    r = e.horizontalPadding;
                return {
                    verticalPadding: void 0 !== t ? t : parseInt(l.verticalPadding, 10),
                    horizontalPadding: void 0 !== r ? r : parseInt(l.horizontalPadding, 10)
                }
            }, t.prototype.componentDidUpdate = function(e, t) {
                var r = this.props,
                    n = r.width,
                    i = r.height,
                    o = r.onFitScaleFactorChanged,
                    a = this.state,
                    l = a.originalWidth,
                    c = a.originalHeight;
                if (l && c && "function" == typeof o && (e.width !== n || e.height !== i || t.originalWidth !== l || t.originalHeight !== c)) {
                    var u = this.getPadding();
                    o(s(l, c, n, i, {
                        vertical: 2 * u.verticalPadding,
                        horizontal: 2 * u.horizontalPadding
                    }))
                }
            }, t.prototype.handleFullSizeImgLoad = function(e, t) {
                var r = this.props,
                    n = r.width,
                    i = r.height,
                    o = r.onFitScaleFactorChanged;
                if (this.setState({
                        originalHeight: t,
                        originalWidth: e,
                        aspectRatio: e / t
                    }), "function" == typeof o) {
                    var a = this.getPadding();
                    o(s(e, t, n, i, {
                        vertical: 2 * a.verticalPadding,
                        horizontal: 2 * a.horizontalPadding
                    }))
                }
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    r = e.config,
                    s = e.coreFileViewerUiData,
                    l = e.currentMode,
                    c = e.contextMenuDisabled,
                    u = e.fileInfo,
                    d = e.fileMetadata,
                    p = e.filePreviewUiData,
                    m = e.fileViewerId,
                    f = e.height,
                    _ = e.intl,
                    v = e.layerRenderFn,
                    h = e.previewMetadata,
                    g = e.resolveAsset,
                    w = e.sizerClassName,
                    y = e.width,
                    b = e.verticalPadding,
                    E = e.horizontalPadding,
                    S = this.state,
                    P = S.originalWidth,
                    T = S.originalHeight,
                    C = S.aspectRatio,
                    k = a.getCurrentScaleFactorFromFilePreviewUi(p);
                return h && h.content ? n.createElement(i.Viewport, {
                    className: t,
                    id: u.file_id,
                    data: o.transform(h.content),
                    sizerClassName: w,
                    originalWidth: P,
                    originalHeight: T,
                    scaleFactor: k,
                    aspectRatio: C,
                    width: y,
                    height: f,
                    contextMenuDisabled: c,
                    verticalPadding: b,
                    horizontalPadding: E
                }, v({
                    dispatch: this.dispatch,
                    config: r,
                    coreFileViewerUiData: s,
                    currentMode: l,
                    fileInfo: u,
                    fileMetadata: d,
                    filePreviewUiData: p,
                    fileViewerId: m,
                    intl: _,
                    previewMetadata: h,
                    resolveAsset: g
                })) : null
            }, t
        })(n.PureComponent);
    t.PreviewImage = c
}), define("file-viewer/preview_image/preview_image_toolbar", ["require", "exports", "tslib", "react", "file-viewer/components", "file-viewer/core", "file-viewer/core/data/actions", "file-viewer/toolbar", "file-viewer/toolbar/toolbar"], function(e, t, r, n, i, o, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var c = (function(e) {
        function t() {
            var t = e.apply(this, arguments) || this;
            return t.onZoomIn = function() {
                return t.props.zoomIn("toolbar")
            }, t.onZoomOut = function() {
                return t.props.zoomOut("toolbar")
            }, t.onZoomOriginalOrFit = function() {
                return t.props.zoomOriginalOrFit("toolbar")
            }, t
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this,
                t = this.props,
                r = t.className,
                c = t.fileFlippingContext,
                u = t.intl,
                d = t.scaleFactor;
            return n.createElement(l.PreviewToolbar, {
                className: r
            }, null != c ? n.createElement(s.ToolbarFlipButtons, {
                count: c.parent_files_count,
                formatMessage: u.formatMessage,
                index: c.file_index,
                onClickNext: function() {
                    return e.props.dispatch(a.flipToNextFile({
                        fileViewerId: e.props.fileViewerId,
                        fileIdOrRevisionId: e.props.fileId,
                        sourceContext: "toolbar"
                    }))
                },
                onClickPrevious: function() {
                    return e.props.dispatch(a.flipToPreviousFile({
                        fileViewerId: e.props.fileViewerId,
                        fileIdOrRevisionId: e.props.fileId,
                        sourceContext: "toolbar"
                    }))
                }
            }) : null, n.createElement(i.RapidFire, {
                callback: this.onZoomOut,
                render: function(e, t) {
                    return n.createElement(s.ZoomOutButton, {
                        disabled: d <= o.MIN_IMG_SCALE_FACTOR,
                        formatMessage: u.formatMessage,
                        onMouseDown: e,
                        onMouseLeave: t,
                        onMouseUp: t
                    })
                }
            }), n.createElement(s.ZoomToFitButton, {
                formatMessage: u.formatMessage,
                formatNumber: u.formatNumber,
                onClick: this.onZoomOriginalOrFit,
                zoomPercent: d
            }), n.createElement(i.RapidFire, {
                callback: this.onZoomIn,
                render: function(e, t) {
                    return n.createElement(s.ZoomInButton, {
                        disabled: d >= o.MAX_IMG_SCALE_FACTOR,
                        formatMessage: u.formatMessage,
                        onMouseDown: e,
                        onMouseLeave: t,
                        onMouseUp: t
                    })
                }
            }))
        }, t
    })(n.PureComponent);
    t.PreviewImageToolbar = c
}), define("file-viewer/preview_image/viewport", ["require", "exports", "tslib", "classnames", "react", "file-viewer/core"], function(e, t, r, n, i, o) {
    "use strict";

    function a(e, t, r, n) {
        var i = e.left,
            o = e.top,
            a = t.w,
            s = t.h,
            l = r.w,
            c = r.h,
            u = [.5, .5];
        if (!a || !s || !n) return u;
        var d = a * n,
            p = s * n;
        return d > l && (u[0] = (i + l / 2) / d), p > c && (u[1] = (o + c / 2) / p), u
    }

    function s(e, t, r, n) {
        var i = r.w,
            o = r.h,
            a = n.w,
            s = n.h,
            l = t * i,
            c = t * o;
        return [e[0] * l - a / 2, e[1] * c - s / 2]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i);
    var l = {
        viewport: "_1qfmN8XukH",
        loader: "_10XzzxD2-Q _3fqREDOmbd",
        smallImg: "LbSAq7r5DB",
        fullSizeImg: "_19VoPo7qJu",
        sizer: "_3JPQLClVw4",
        zoomFit: "_2G_smAf1kF",
        layer: "_3jv_DqNZ9O",
        app: "_3JKBC6YHnm _2pz0EjZoOj",
        toolbar: "_3V4LFrZZUw _1COr9ZzNP6",
        verticalPadding: "40px",
        horizontalPadding: "36px"
    };
    t._calculateFocusPoint = a, t._calculateScrollPosition = s;
    var c = (function(e) {
        function t() {
            var t = e.apply(this, arguments) || this;
            return t.viewportEl = null, t.focusPoint = [.5, .5], t.onScroll = function(e) {
                var r = e.currentTarget,
                    n = r.scrollLeft,
                    i = r.scrollTop,
                    o = t.props,
                    s = o.originalWidth,
                    l = o.originalHeight,
                    c = o.scaleFactor,
                    u = o.height,
                    d = o.width;
                t.focusPoint = a({
                    left: n,
                    top: i
                }, {
                    w: s,
                    h: l
                }, {
                    w: d,
                    h: u
                }, c)
            }, t
        }
        return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
            e.id !== this.props.id && (this.focusPoint = [.5, .5])
        }, t.prototype.componentDidUpdate = function(e) {
            var t, r = this.props,
                n = r.scaleFactor,
                i = r.originalWidth,
                o = r.originalHeight,
                a = r.width,
                l = r.height;
            this.viewportEl && n && i && o && (e.scaleFactor !== n || e.originalWidth !== i || e.originalHeight !== o || e.height !== l || e.width !== a) && (t = this.viewportEl).scrollTo.apply(t, s(this.focusPoint, n, {
                w: i,
                h: o
            }, {
                w: a,
                h: l
            }))
        }, t.prototype.getPadding = function() {
            var e = this.props,
                t = e.verticalPadding,
                r = e.horizontalPadding;
            return {
                verticalPadding: void 0 !== t ? t : parseInt(l.verticalPadding || "0", 10),
                horizontalPadding: void 0 !== r ? r : parseInt(l.horizontalPadding || "0", 10)
            }
        }, t.prototype.render = function() {
            var e, t = this,
                r = this.props,
                a = r.width,
                s = r.height,
                c = r.scaleFactor,
                u = r.originalWidth,
                d = r.originalHeight,
                p = r.className,
                m = r.aspectRatio,
                f = r.sizerClassName,
                _ = r.contextMenuDisabled,
                v = r.data,
                h = 0,
                g = 0,
                w = {
                    width: u,
                    height: d
                };
            if (c && u && d) {
                var y = u * c,
                    b = d * c;
                y < a && (h = (a - y) / 2), b < s && (g = (s - b) / 2), w.width = y, w.height = b, w.transform = "translate(" + h + "px, " + g + "px)"
            } else if (m) {
                var E = this.getPadding(),
                    S = E.verticalPadding,
                    P = E.horizontalPadding,
                    T = o.calculateFitBox(a - 2 * P, s - 2 * S, m),
                    C = T[0],
                    k = T[1];
                w.width = C, w.height = k
            } else w.visibility = "hidden";
            return i.createElement("div", {
                className: n.default(p, l.viewport, (e = {}, e[l.zoomFit || ""] = !c, e)),
                style: {
                    width: a,
                    height: s
                },
                onScroll: this.onScroll,
                ref: function(e) {
                    return t.viewportEl = e
                }
            }, i.createElement("div", {
                className: l.sizer + " " + f,
                style: w
            }, this.props.children({
                viewportConfig: {
                    contextMenuDisabled: !!_
                },
                originalWidth: u || 0,
                originalHeight: d || 0,
                data: v
            })))
        }, t
    })(i.PureComponent);
    t.Viewport = c
}), define("smoothscroll-polyfill", ["require", "exports", "module"], function(e, t, r) {
    (function() {
        "use strict";

        function e() {
            function e(e) {
                var t = ["MSIE ", "Trident/", "Edge/"];
                return new RegExp(t.join("|")).test(e)
            }

            function t(e, t) {
                this.scrollLeft = e, this.scrollTop = t
            }

            function r(e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }

            function n(e) {
                if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                if ("object" == typeof e && "smooth" === e.behavior) return !1;
                throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
            }

            function i(e, t) {
                return "Y" === t ? e.clientHeight + _ < e.scrollHeight : "X" === t ? e.clientWidth + _ < e.scrollWidth : void 0
            }

            function o(e, t) {
                var r = u.getComputedStyle(e, null)["overflow" + t];
                return "auto" === r || "scroll" === r
            }

            function a(e) {
                var t = i(e, "Y") && o(e, "Y"),
                    r = i(e, "X") && o(e, "X");
                return t || r
            }

            function s(e) {
                var t;
                do e = e.parentNode, t = e === d.body; while (t === !1 && a(e) === !1);
                return t = null, e
            }

            function l(e) {
                var t, n, i, o = f(),
                    a = (o - e.startTime) / 468;
                a = a > 1 ? 1 : a, t = r(a), n = e.startX + (e.x - e.startX) * t, i = e.startY + (e.y - e.startY) * t, e.method.call(e.scrollable, n, i), n === e.x && i === e.y || u.requestAnimationFrame(l.bind(u, e))
            }

            function c(e, r, n) {
                var i, o, a, s, c = f();
                e === d.body ? (i = u, o = u.scrollX || u.pageXOffset, a = u.scrollY || u.pageYOffset, s = m.scroll) : (i = e, o = e.scrollLeft, a = e.scrollTop, s = t), l({
                    scrollable: i,
                    method: s,
                    startTime: c,
                    startX: o,
                    startY: a,
                    x: r,
                    y: n
                })
            }
            var u = window,
                d = document;
            if (!("scrollBehavior" in d.documentElement.style && u.__forceSmoothScrollPolyfill__ !== !0)) {
                var p = u.HTMLElement || u.Element,
                    m = {
                        scroll: u.scroll || u.scrollTo,
                        scrollBy: u.scrollBy,
                        elementScroll: p.prototype.scroll || t,
                        scrollIntoView: p.prototype.scrollIntoView
                    },
                    f = u.performance && u.performance.now ? u.performance.now.bind(u.performance) : Date.now,
                    _ = e(u.navigator.userAgent) ? 1 : 0;
                u.scroll = u.scrollTo = function() {
                    if (void 0 !== arguments[0]) return n(arguments[0]) === !0 ? void m.scroll.call(u, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : u.scrollX || u.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : u.scrollY || u.pageYOffset) : void c.call(u, d.body, void 0 !== arguments[0].left ? ~~arguments[0].left : u.scrollX || u.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : u.scrollY || u.pageYOffset)
                }, u.scrollBy = function() {
                    if (void 0 !== arguments[0]) return n(arguments[0]) ? void m.scrollBy.call(u, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : void c.call(u, d.body, ~~arguments[0].left + (u.scrollX || u.pageXOffset), ~~arguments[0].top + (u.scrollY || u.pageYOffset))
                }, p.prototype.scroll = p.prototype.scrollTo = function() {
                    if (void 0 !== arguments[0]) {
                        if (n(arguments[0]) === !0) {
                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                            return void m.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                        }
                        var e = arguments[0].left,
                            t = arguments[0].top;
                        c.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                    }
                }, p.prototype.scrollBy = function() {
                    if (void 0 !== arguments[0]) return n(arguments[0]) === !0 ? void m.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop) : void this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior
                    })
                }, p.prototype.scrollIntoView = function() {
                    if (n(arguments[0]) === !0) return void m.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
                    var e = s(this),
                        t = e.getBoundingClientRect(),
                        r = this.getBoundingClientRect();
                    e !== d.body ? (c.call(this, e, e.scrollLeft + r.left - t.left, e.scrollTop + r.top - t.top), "fixed" !== u.getComputedStyle(e).position && u.scrollBy({
                        left: t.left,
                        top: t.top,
                        behavior: "smooth"
                    })) : u.scrollBy({
                        left: r.left,
                        top: r.top,
                        behavior: "smooth"
                    })
                }
            }
        }
        "object" == typeof t && void 0 !== r ? r.exports = {
            polyfill: e
        } : e()
    })()
}.bind(Object.create(null))), define("file-viewer/titlebar/titlebar", ["require", "exports", "tslib", "react", "classnames"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importDefault(i);
    var o = {
        titlebarHeightDesktop: "40px",
        horizontalPaddingDesktop: "40px",
        titlebar: "_3xQRkj5dQm",
        titlebarIcon: "_3Si3fSRjns",
        titlebarTitle: "_1UPkas_LJo"
    };
    t.Titlebar = function(e) {
        var t = e.icon,
            r = e.title,
            a = e.className,
            s = e.renderTitleOverflowMenuFn;
        return n.createElement("header", {
            className: i.default(o.titlebar, a)
        }, t ? n.createElement("div", {
            className: o.titlebarIcon
        }, t) : null, n.createElement("div", {
            className: o.titlebarTitle
        }, r), s && n.createElement("div", null, s()))
    }
}), define("file-viewer/toolbar", ["require", "exports", "file-viewer/toolbar/sidebar_toggle_button", "file-viewer/toolbar/toolbar_button", "file-viewer/toolbar/toolbar_controls", "file-viewer/toolbar/toolbar_flip_buttons", "file-viewer/toolbar/toolbar_page_indicator", "file-viewer/toolbar/zoom_to_fit_button"], function(e, t, r, n, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SidebarToggleButton = r.SidebarToggleButton, t.PreviewToolbarButton = n.PreviewToolbarButton, t.FullScreenButton = i.FullScreenButton, t.PageDownButton = i.PageDownButton, t.PageUpButton = i.PageUpButton, t.ZoomInButton = i.ZoomInButton, t.ZoomOutButton = i.ZoomOutButton, t.ToolbarFlipButtons = o.ToolbarFlipButtons, t.PageIndicator = a.PageIndicator, t.ZoomToFitButton = s.ZoomToFitButton
}), define("file-viewer/toolbar/sidebar_toggle_button", ["require", "exports", "tslib", "react", "file-viewer/core", "file-viewer/toolbar/toolbar_button"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var a = (function(e) {
        function t() {
            var t = e.apply(this, arguments) || this;
            return t.handleClick = function(e) {
                var r = t.props,
                    n = r.isSidebarOpen,
                    i = r.onClick,
                    o = r.onSidebarClose,
                    a = r.onSidebarOpen;
                n && o ? o() : a && a(), i && i(e)
            }, t
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                r = e.disabled,
                i = e.formatMessage,
                a = e.isSidebarOpen;
            return n.createElement(o.PreviewToolbarButton, {
                className: t,
                disabled: r,
                formatMessage: i,
                iconName: a ? "sidebarHide" : "sidebarShow",
                id: "preview-toolbar-sidebar-toggle-button",
                tooltipText: i(a ? {
                    id: "380FK",
                    defaultMessage: "Hide sidebar"
                } : {
                    id: "1-hY4",
                    defaultMessage: "Show sidebar"
                }),
                onClick: this.handleClick
            })
        }, t
    })(n.PureComponent);
    t.SidebarToggleButton = a, a.defaultProps = {
        formatMessage: i.dummyFormatMessage,
        isSidebarOpen: !1
    }
}), define("file-viewer/toolbar/toolbar", ["require", "exports", "tslib", "react", "classnames"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importDefault(i);
    var o = {
            container: "_1x63kVqkYi",
            toolbarButton: "_3MS_sSk8v2",
            zoomToFitBtn: "BwAKgVnIAr",
            arrowLeft: "_2ITlwxtTc0 _1y1RJaYN-V",
            arrowRight: "JfmmWYGWiP _1y1RJaYN-V",
            fullscreen: "_1BXWzdKZcg _1y1RJaYN-V",
            sidebarHide: "_230L9B_VOu _1y1RJaYN-V",
            sidebarShow: "_2Ht3Oh1zrp _1y1RJaYN-V",
            zoomIn: "RkgEctpAaM _1y1RJaYN-V",
            zoomOut: "_2P1wnPKDti _1y1RJaYN-V",
            pageDown: "_1_6p5OEl7w _1y1RJaYN-V",
            pageUp: "_3jVU5iQ-xK _1y1RJaYN-V",
            flipButtons: "_1Xy4vmCrmv",
            pageIndicator: "_2UCcY_L_ut",
            focus: "fFd_Ukn_Rn",
            pageInputWrapper: "_2lAAAHouQ7",
            pageInput: "_2XAzYxu3_c",
            withText: "_1OQ3or8fKn",
            pageIndicatorText: "_1f0fWYhQct",
            hidden: "_1uX-Yvcuyj",
            zoomToFitInnerBtn: "_3f_2x8b6A8",
            toolbarTooltip: "_2AS2IpIvyj"
        },
        a = function(e) {
            var t = e.className,
                r = e.children;
            return n.createElement("div", {
                className: i.default(t, o.container)
            }, r)
        };
    t.PreviewToolbar = a
}), define("file-viewer/toolbar/toolbar_button", ["require", "exports", "tslib", "classnames", "react", "spectrum/tooltip", "file-viewer/core", "spectrum/button"], function(e, t, r, n, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i);
    var l = {
            container: "_1x63kVqkYi",
            toolbarButton: "_3MS_sSk8v2",
            zoomToFitBtn: "BwAKgVnIAr",
            arrowLeft: "_2ITlwxtTc0 _1y1RJaYN-V",
            arrowRight: "JfmmWYGWiP _1y1RJaYN-V",
            fullscreen: "_1BXWzdKZcg _1y1RJaYN-V",
            sidebarHide: "_230L9B_VOu _1y1RJaYN-V",
            sidebarShow: "_2Ht3Oh1zrp _1y1RJaYN-V",
            zoomIn: "RkgEctpAaM _1y1RJaYN-V",
            zoomOut: "_2P1wnPKDti _1y1RJaYN-V",
            pageDown: "_1_6p5OEl7w _1y1RJaYN-V",
            pageUp: "_3jVU5iQ-xK _1y1RJaYN-V",
            flipButtons: "_1Xy4vmCrmv",
            pageIndicator: "_2UCcY_L_ut",
            focus: "fFd_Ukn_Rn",
            pageInputWrapper: "_2lAAAHouQ7",
            pageInput: "_2XAzYxu3_c",
            withText: "_1OQ3or8fKn",
            pageIndicatorText: "_1f0fWYhQct",
            hidden: "_1uX-Yvcuyj",
            zoomToFitInnerBtn: "_3f_2x8b6A8",
            toolbarTooltip: "_2AS2IpIvyj"
        },
        c = (function(e) {
            function t() {
                var t = e.apply(this, arguments) || this;
                return t.onClick = function(e) {
                    var r = t.props.onClick;
                    r && r(e)
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    a = e.disabled,
                    c = (e.formatMessage, e.iconName),
                    u = e.id,
                    d = e.tooltipText,
                    p = e.onMouseLeave,
                    m = r.__rest(e, ["className", "disabled", "formatMessage", "iconName", "id", "tooltipText", "onMouseLeave"]),
                    f = l[c];
                return i.createElement("div", {
                    className: n.default(t, l.toolbarButton),
                    onMouseLeave: p
                }, i.createElement(o.Tooltip, {
                    positionOffset: 16,
                    positioning: "above",
                    tooltipContent: d,
                    closeOnBlur: !0
                }, i.createElement(s.Button, Object.assign({
                    variant: "styleless",
                    "aria-label": d,
                    "data-test": u,
                    disabled: a,
                    onClick: this.onClick
                }, m), i.createElement("i", {
                    className: f
                }))))
            }, t
        })(i.PureComponent);
    t.PreviewToolbarButton = c, c.defaultProps = {
        disabled: !1,
        formatMessage: a.dummyFormatMessage,
        iconName: "fullscreen",
        id: "",
        onClick: function() {},
        tooltipText: ""
    }
}), define("file-viewer/toolbar/toolbar_controls", ["require", "exports", "tslib", "react", "file-viewer/toolbar/toolbar_button"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var o = function(e) {
        var t = e.className,
            o = e.disabled,
            a = e.formatMessage,
            s = e.onClick,
            l = r.__rest(e, ["className", "disabled", "formatMessage", "onClick"]);
        return n.createElement(i.PreviewToolbarButton, Object.assign({}, l, {
            className: t,
            id: "fullscreen",
            disabled: o || !1,
            formatMessage: a,
            iconName: "fullscreen",
            onClick: s,
            tooltipText: a({
                id: "3r1su",
                defaultMessage: "Fullscreen"
            })
        }))
    };
    t.FullScreenButton = o;
    var a = function(e) {
        var t = e.className,
            o = e.disabled,
            a = e.formatMessage,
            s = e.onClick,
            l = r.__rest(e, ["className", "disabled", "formatMessage", "onClick"]);
        return n.createElement(i.PreviewToolbarButton, Object.assign({}, l, {
            className: t,
            disabled: o || !1,
            formatMessage: a,
            iconName: "pageDown",
            id: "page-down",
            onClick: s,
            tooltipText: a({
                id: "1crUg",
                defaultMessage: "Page down"
            })
        }))
    };
    t.PageDownButton = a;
    var s = function(e) {
        var t = e.className,
            o = e.disabled,
            a = e.formatMessage,
            s = e.onClick,
            l = r.__rest(e, ["className", "disabled", "formatMessage", "onClick"]);
        return n.createElement(i.PreviewToolbarButton, Object.assign({}, l, {
            className: t,
            disabled: o || !1,
            formatMessage: a,
            iconName: "pageUp",
            id: "page-up",
            onClick: s,
            tooltipText: a({
                id: "30U9L",
                defaultMessage: "Page up"
            })
        }))
    };
    t.PageUpButton = s;
    var l = function(e) {
        var t = e.className,
            o = e.disabled,
            a = e.formatMessage,
            s = e.onClick,
            l = r.__rest(e, ["className", "disabled", "formatMessage", "onClick"]);
        return n.createElement(i.PreviewToolbarButton, Object.assign({}, l, {
            className: t,
            disabled: o || !1,
            formatMessage: a,
            iconName: "zoomIn",
            id: "zoom-in",
            onClick: s,
            tooltipText: a({
                id: "yOZ5I",
                defaultMessage: "Zoom in"
            })
        }))
    };
    t.ZoomInButton = l;
    var c = function(e) {
        var t = e.className,
            o = e.disabled,
            a = e.formatMessage,
            s = e.onClick,
            l = r.__rest(e, ["className", "disabled", "formatMessage", "onClick"]);
        return n.createElement(i.PreviewToolbarButton, Object.assign({}, l, {
            className: t,
            disabled: o || !1,
            formatMessage: a,
            iconName: "zoomOut",
            id: "zoom-out",
            onClick: s,
            tooltipText: a({
                id: "2dTGQ",
                defaultMessage: "Zoom out"
            })
        }))
    };
    t.ZoomOutButton = c
}), define("file-viewer/toolbar/toolbar_flip_buttons", ["require", "exports", "tslib", "classnames", "react", "file-viewer/toolbar/toolbar_button"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i);
    var a = {
        container: "_1x63kVqkYi",
        toolbarButton: "_3MS_sSk8v2",
        zoomToFitBtn: "BwAKgVnIAr",
        arrowLeft: "_2ITlwxtTc0 _1y1RJaYN-V",
        arrowRight: "JfmmWYGWiP _1y1RJaYN-V",
        fullscreen: "_1BXWzdKZcg _1y1RJaYN-V",
        sidebarHide: "_230L9B_VOu _1y1RJaYN-V",
        sidebarShow: "_2Ht3Oh1zrp _1y1RJaYN-V",
        zoomIn: "RkgEctpAaM _1y1RJaYN-V",
        zoomOut: "_2P1wnPKDti _1y1RJaYN-V",
        pageDown: "_1_6p5OEl7w _1y1RJaYN-V",
        pageUp: "_3jVU5iQ-xK _1y1RJaYN-V",
        flipButtons: "_1Xy4vmCrmv",
        pageIndicator: "_2UCcY_L_ut",
        focus: "fFd_Ukn_Rn",
        pageInputWrapper: "_2lAAAHouQ7",
        pageInput: "_2XAzYxu3_c",
        withText: "_1OQ3or8fKn",
        pageIndicatorText: "_1f0fWYhQct",
        hidden: "_1uX-Yvcuyj",
        zoomToFitInnerBtn: "_3f_2x8b6A8",
        toolbarTooltip: "_2AS2IpIvyj"
    };
    t.ToolbarFlipButtons = function(e) {
        var t = e.buttonClassName,
            r = e.className,
            s = e.count,
            l = e.formatMessage,
            c = e.index,
            u = e.onClickNext,
            d = e.onClickPrevious,
            p = l({
                id: "3A0DU",
                defaultMessage: "Previous"
            }),
            m = l({
                id: "1XG6i",
                defaultMessage: "Next"
            }),
            f = l({
                id: "1LWb5",
                defaultMessage: "{file_number} of {file_count}"
            }, {
                file_number: c + 1,
                file_count: s
            });
        return i.createElement("div", {
            className: n.default(r, a.flipButtons)
        }, i.createElement(o.PreviewToolbarButton, {
            className: t,
            formatMessage: l,
            iconName: "arrowLeft",
            id: "preview-toolbar-flip-previous",
            tooltipText: p,
            onClick: d
        }), i.createElement("span", null, f), i.createElement(o.PreviewToolbarButton, {
            className: t,
            formatMessage: l,
            iconName: "arrowRight",
            id: "preview-toolbar-flip-next",
            tooltipText: m,
            onClick: u
        }))
    }
}), define("file-viewer/toolbar/toolbar_page_indicator", ["require", "exports", "tslib", "react", "classnames", "external/lodash", "spectrum/tooltip"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importDefault(i);
    var s = {
        container: "_1x63kVqkYi",
        toolbarButton: "_3MS_sSk8v2",
        zoomToFitBtn: "BwAKgVnIAr",
        arrowLeft: "_2ITlwxtTc0 _1y1RJaYN-V",
        arrowRight: "JfmmWYGWiP _1y1RJaYN-V",
        fullscreen: "_1BXWzdKZcg _1y1RJaYN-V",
        sidebarHide: "_230L9B_VOu _1y1RJaYN-V",
        sidebarShow: "_2Ht3Oh1zrp _1y1RJaYN-V",
        zoomIn: "RkgEctpAaM _1y1RJaYN-V",
        zoomOut: "_2P1wnPKDti _1y1RJaYN-V",
        pageDown: "_1_6p5OEl7w _1y1RJaYN-V",
        pageUp: "_3jVU5iQ-xK _1y1RJaYN-V",
        flipButtons: "_1Xy4vmCrmv",
        pageIndicator: "_2UCcY_L_ut",
        focus: "fFd_Ukn_Rn",
        pageInputWrapper: "_2lAAAHouQ7",
        pageInput: "_2XAzYxu3_c",
        withText: "_1OQ3or8fKn",
        pageIndicatorText: "_1f0fWYhQct",
        hidden: "_1uX-Yvcuyj",
        zoomToFitInnerBtn: "_3f_2x8b6A8",
        toolbarTooltip: "_2AS2IpIvyj"
    };
    t.PAGE_UPDATE_DEBOUNCE = 300;
    var l = (function(e) {
        function l(r) {
            var n = e.call(this, r) || this;
            return n.textInput = null, n.textInputRef = function(e) {
                return n.textInput = e
            }, n.handleBlur = function(e) {
                n.setState({
                    focused: !1,
                    isEditing: !1
                }), n.props.onBlur && n.props.onBlur(e)
            }, n.debouncedOnChange = o.debounce(n.props.onPageNumberUpdated, t.PAGE_UPDATE_DEBOUNCE), n.handleChange = function(e) {
                var t = e.target.value,
                    r = n.parsePageNumber(t);
                if (!r) return void n.setState({
                    value: ""
                }, n.debouncedOnChange.cancel);
                n.isPageNumberInRange(r) && n.setState({
                    value: r
                }, function() {
                    n.debouncedOnChange(r - 1)
                })
            }, n.handleFocus = function(e) {
                n.setState({
                    focused: !0,
                    isEditing: !0,
                    value: ""
                }), n.props.onFocus && n.props.onFocus(e)
            }, n.handleSubmit = function(e) {
                e.preventDefault();
                var t = n.state.value,
                    r = n.parsePageNumber(t);
                r && n.isPageNumberInRange(r) && n.debouncedOnChange(r - 1), n.textInput && n.textInput.blur()
            }, n.handleWrapperClick = function() {
                n.setState({
                    isEditing: !0
                }, function() {
                    n.textInput && n.textInput.focus()
                })
            }, n.parsePageNumber = function(e) {
                if (!e || "" === e) return null;
                var t = parseInt(e, 10);
                return isNaN(t) ? null : t
            }, n.isPageNumberInRange = function(e) {
                var t = n.props,
                    r = t.currentPageIndex,
                    i = t.pageCount;
                return !(void 0 === r || !i) && (e > 0 && e <= i)
            }, n.state = {
                focused: !1,
                isEditing: !1,
                value: r.currentPageIndex + 1 || ""
            }, n
        }
        return r.__extends(l, e), l.prototype.render = function() {
            var e, t, r, o, l = this.props,
                c = l.className,
                u = l.disabled,
                d = l.formatMessage,
                p = l.id,
                m = l.pageCount,
                f = l.shouldShowPageCount,
                _ = this.state,
                v = _.focused,
                h = _.isEditing,
                g = _.value,
                w = m && f ? " / " + m + " " : "",
                y = d({
                    id: "3Dloj",
                    defaultMessage: "Page..."
                }),
                b = d({
                    id: "Z4LHJ",
                    defaultMessage: "Click to jump to a page"
                });
            return n.createElement("div", {
                className: i.default(c, s.pageIndicator, (e = {}, e[s.focus] = v, e)),
                onClick: this.handleWrapperClick
            }, n.createElement(a.Tooltip, {
                positionOffset: 24,
                positioning: "above",
                tooltipContent: b
            }, n.createElement("div", null, n.createElement("form", {
                className: s.pageInputWrapper,
                onSubmit: this.handleSubmit
            }, n.createElement("label", {
                "aria-label": b,
                htmlFor: p
            }, n.createElement("input", {
                autoComplete: "off",
                className: i.default(s.pageInput, (t = {}, t[s.focus] = v, t[s.hidden] = !h, t[s.withText] = !!g && v, t)),
                disabled: u,
                id: p,
                onBlur: this.handleBlur,
                onChange: this.handleChange,
                onFocus: this.handleFocus,
                placeholder: y,
                ref: this.textInputRef,
                type: "text",
                value: g
            }))), n.createElement("span", {
                className: i.default(s.pageIndicatorText, (r = {}, r[s.hidden] = h, r))
            }, this.props.currentPageIndex + 1), n.createElement("span", {
                className: i.default((o = {}, o[s.hidden] = !g && v, o))
            }, w))))
        }, l.prototype.componentWillReceiveProps = function(e) {
            e.currentPageIndex !== this.props.currentPageIndex && (this.debouncedOnChange.cancel(), this.setState({
                value: e.currentPageIndex + 1
            }))
        }, l
    })(n.PureComponent);
    t.PageIndicator = l
}), define("file-viewer/toolbar/zoom_to_fit_button", ["require", "exports", "tslib", "react", "classnames", "spectrum/tooltip", "spectrum/button"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importDefault(i);
    var s = {
            container: "_1x63kVqkYi",
            toolbarButton: "_3MS_sSk8v2",
            zoomToFitBtn: "BwAKgVnIAr",
            arrowLeft: "_2ITlwxtTc0 _1y1RJaYN-V",
            arrowRight: "JfmmWYGWiP _1y1RJaYN-V",
            fullscreen: "_1BXWzdKZcg _1y1RJaYN-V",
            sidebarHide: "_230L9B_VOu _1y1RJaYN-V",
            sidebarShow: "_2Ht3Oh1zrp _1y1RJaYN-V",
            zoomIn: "RkgEctpAaM _1y1RJaYN-V",
            zoomOut: "_2P1wnPKDti _1y1RJaYN-V",
            pageDown: "_1_6p5OEl7w _1y1RJaYN-V",
            pageUp: "_3jVU5iQ-xK _1y1RJaYN-V",
            flipButtons: "_1Xy4vmCrmv",
            pageIndicator: "_2UCcY_L_ut",
            focus: "fFd_Ukn_Rn",
            pageInputWrapper: "_2lAAAHouQ7",
            pageInput: "_2XAzYxu3_c",
            withText: "_1OQ3or8fKn",
            pageIndicatorText: "_1f0fWYhQct",
            hidden: "_1uX-Yvcuyj",
            zoomToFitInnerBtn: "_3f_2x8b6A8",
            toolbarTooltip: "_2AS2IpIvyj"
        },
        l = (function(e) {
            function t() {
                var t = e.apply(this, arguments) || this;
                return t.handleClick = function(e) {
                    t.props.onClick(e)
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    r = e.className,
                    l = e.formatMessage,
                    c = e.formatNumber,
                    u = e.zoomPercent,
                    d = l(u && 1 === u ? {
                        id: "1BXqX",
                        defaultMessage: "Zoom to fit"
                    } : {
                        id: "2iKGa",
                        defaultMessage: "View actual size"
                    });
                return n.createElement("div", {
                    className: i.default(r, s.zoomToFitBtn)
                }, n.createElement(o.Tooltip, {
                    positionOffset: 24,
                    positioning: "above",
                    tooltipContent: d
                }, n.createElement(a.Button, {
                    variant: "styleless",
                    "aria-label": d,
                    className: s.zoomToFitInnerBtn,
                    onClick: this.handleClick
                }, t.getFormattedZoomPercentage(u, c))))
            }, t
        })(n.PureComponent);
    t.ZoomToFitButton = l, l.getFormattedZoomPercentage = function(e, t) {
        return e ? t(e, {
            style: "percent",
            maximumFractionDigits: 0
        }) : ""
    }
}), define("url-polyfill", ["require", "exports"], function(e, t) {
    "use strict";
    (function(e) {
        var t = function() {
                try {
                    return !!Symbol.iterator
                } catch (e) {
                    return !1
                }
            },
            r = t(),
            n = function(e) {
                var t = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return r && (t[Symbol.iterator] = function() {
                    return t
                }), t
            },
            i = function(e) {
                return encodeURIComponent(e).replace(/%20/g, "+")
            },
            o = function(e) {
                return decodeURIComponent(e).replace(/\+/g, " ")
            },
            a = function() {
                var t = function(e) {
                        Object.defineProperty(this, "_entries", {
                            writable: !0,
                            value: {}
                        });
                        var r = typeof e;
                        if ("undefined" === r);
                        else if ("string" === r) "" !== e && this._fromString(e);
                        else if (e instanceof t) {
                            var n = this;
                            e.forEach(function(e, t) {
                                n.append(t, e)
                            })
                        } else {
                            if (null === e || "object" !== r) throw new TypeError("Unsupported input's type for URLSearchParams");
                            if ("[object Array]" === Object.prototype.toString.call(e))
                                for (var i = 0; i < e.length; i++) {
                                    var o = e[i];
                                    if ("[object Array]" !== Object.prototype.toString.call(o) && 2 === o.length) throw new TypeError("Expected [string, any] as entry at index " + i + " of URLSearchParams's input");
                                    this.append(o[0], o[1])
                                } else
                                    for (var a in e) e.hasOwnProperty(a) && this.append(a, e[a])
                        }
                    },
                    o = t.prototype;
                o.append = function(e, t) {
                    e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
                }, o.delete = function(e) {
                    delete this._entries[e]
                }, o.get = function(e) {
                    return e in this._entries ? this._entries[e][0] : null
                }, o.getAll = function(e) {
                    return e in this._entries ? this._entries[e].slice(0) : []
                }, o.has = function(e) {
                    return e in this._entries
                }, o.set = function(e, t) {
                    this._entries[e] = [String(t)]
                }, o.forEach = function(e, t) {
                    var r;
                    for (var n in this._entries)
                        if (this._entries.hasOwnProperty(n)) {
                            r = this._entries[n];
                            for (var i = 0; i < r.length; i++) e.call(t, r[i], n, this)
                        }
                }, o.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), n(e)
                }, o.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), n(e)
                }, o.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), n(e)
                }, r && (o[Symbol.iterator] = o.entries), o.toString = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(i(r) + "=" + i(t))
                    }), e.join("&")
                }, e.URLSearchParams = t
            };
        "URLSearchParams" in e && "a=1" === new URLSearchParams("?a=1").toString() || a();
        var s = URLSearchParams.prototype;
        "function" != typeof s.sort && (s.sort = function() {
            var e = this,
                t = [];
            this.forEach(function(r, n) {
                t.push([n, r]), e._entries || e.delete(n)
            }), t.sort(function(e, t) {
                return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
            }), e._entries && (e._entries = {});
            for (var r = 0; r < t.length; r++) this.append(t[r][0], t[r][1])
        }), "function" != typeof s._fromString && Object.defineProperty(s, "_fromString", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function(e) {
                if (this._entries) this._entries = {};
                else {
                    var t = [];
                    this.forEach(function(e, r) {
                        t.push(r)
                    });
                    for (var r = 0; r < t.length; r++) this.delete(t[r])
                }
                e = e.replace(/^\?/, "");
                for (var n, i = e.split("&"), r = 0; r < i.length; r++) n = i[r].split("="), this.append(o(n[0]), n.length > 1 ? o(n[1]) : "")
            }
        })
    })("undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this), (function(e) {
        var t = function() {
                try {
                    var e = new URL("b", "http://a");
                    return e.pathname = "c%20d", "http://a/c%20d" === e.href && e.searchParams
                } catch (e) {
                    return !1
                }
            },
            r = function() {
                var t = e.URL,
                    r = function(t, r) {
                        "string" != typeof t && (t = String(t));
                        var n, i = document;
                        if (r && (void 0 === e.location || r !== e.location.href)) {
                            i = document.implementation.createHTMLDocument(""), n = i.createElement("base"), n.href = r, i.head.appendChild(n);
                            try {
                                if (0 !== n.href.indexOf(r)) throw new Error(n.href)
                            } catch (e) {
                                throw new Error("URL unable to set base " + r + " due to " + e)
                            }
                        }
                        var o = i.createElement("a");
                        if (o.href = t, n && (i.body.appendChild(o), o.href = o.href), ":" === o.protocol || !/:/.test(o.href)) throw new TypeError("Invalid URL");
                        Object.defineProperty(this, "_anchorElement", {
                            value: o
                        });
                        var a = new URLSearchParams(this.search),
                            s = !0,
                            l = !0,
                            c = this;
                        ["append", "delete", "set"].forEach(function(e) {
                            var t = a[e];
                            a[e] = function() {
                                t.apply(a, arguments), s && (l = !1, c.search = a.toString(), l = !0)
                            }
                        }), Object.defineProperty(this, "searchParams", {
                            value: a,
                            enumerable: !0
                        });
                        var u = void 0;
                        Object.defineProperty(this, "_updateSearchParams", {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: function() {
                                this.search !== u && (u = this.search, l && (s = !1, this.searchParams._fromString(this.search), s = !0))
                            }
                        })
                    },
                    n = r.prototype,
                    i = function(e) {
                        Object.defineProperty(n, e, {
                            get: function() {
                                return this._anchorElement[e]
                            },
                            set: function(t) {
                                this._anchorElement[e] = t
                            },
                            enumerable: !0
                        })
                    };
                ["hash", "host", "hostname", "port", "protocol"].forEach(function(e) {
                    i(e)
                }), Object.defineProperty(n, "search", {
                    get: function() {
                        return this._anchorElement.search
                    },
                    set: function(e) {
                        this._anchorElement.search = e, this._updateSearchParams()
                    },
                    enumerable: !0
                }), Object.defineProperties(n, {
                    toString: {
                        get: function() {
                            var e = this;
                            return function() {
                                return e.href
                            }
                        }
                    },
                    href: {
                        get: function() {
                            return this._anchorElement.href.replace(/\?$/, "")
                        },
                        set: function(e) {
                            this._anchorElement.href = e, this._updateSearchParams()
                        },
                        enumerable: !0
                    },
                    pathname: {
                        get: function() {
                            return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                        },
                        set: function(e) {
                            this._anchorElement.pathname = e
                        },
                        enumerable: !0
                    },
                    origin: {
                        get: function() {
                            var e = {
                                    "http:": 80,
                                    "https:": 443,
                                    "ftp:": 21
                                }[this._anchorElement.protocol],
                                t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                        },
                        enumerable: !0
                    },
                    password: {
                        get: function() {
                            return ""
                        },
                        set: function(e) {},
                        enumerable: !0
                    },
                    username: {
                        get: function() {
                            return ""
                        },
                        set: function(e) {},
                        enumerable: !0
                    }
                }), r.createObjectURL = function(e) {
                    return t.createObjectURL.apply(t, arguments)
                }, r.revokeObjectURL = function(e) {
                    return t.revokeObjectURL.apply(t, arguments)
                }, e.URL = r
            };
        if (t() || r(), void 0 !== e.location && !("origin" in e.location)) {
            var n = function() {
                return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
            };
            try {
                Object.defineProperty(e.location, "origin", {
                    get: n,
                    enumerable: !0
                })
            } catch (t) {
                setInterval(function() {
                    e.location.origin = n()
                }, 100)
            }
        }
    })("undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this)
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/abuse/async_report_flag", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AsyncReportFlag = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/abuse/report_flag"], t, r)
            }).then(__importStar).then(function(e) {
                return e.ReportFlag
            })
        }
    })
}), define("modules/clean/auth/login_or_register/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r;
    (function(e) {
        e.COMMENT = "comment", e.DOWNLOAD = "download", e.IMMEDIATE = "immediate"
    })(r || (r = {})), t.LoginOrRegisterKind = r;
    var n;
    (function(e) {
        e.DIRECT_DOWNLOAD = "direct_download", e.SAVE_TO_DROPBOX = "add_to_dropbox"
    })(n || (n = {})), t.DownloadAction = n;
    var i;
    (function(e) {
        e[e.LOGIN = 0] = "LOGIN", e[e.REGISTER = 1] = "REGISTER"
    })(i || (i = {})), t.Mode = i;
    var o;
    (function(e) {
        e.DEFAULT = "", e.POST = "post_comment_variant", e.SUBSCRIBE = "subscribe_variant"
    })(o || (o = {})), t.CommentTextVariant = o
}), define("modules/clean/average_counter", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e() {
            this.average = 0, this.count = 0
        }
        return e.prototype.getAverage = function() {
            return this.average
        }, e.prototype.add = function(e) {
            this.average = (this.average * this.count + e) / (this.count + 1), this.count++
        }, e.prototype.addArray = function(e) {
            var t = e.reduce(function(e, t) {
                    return e + t
                }),
                r = this.count + e.length;
            this.average = (this.average * this.count + t) / r, this.count = r
        }, e
    })();
    t.AverageCounter = r
}), define("modules/clean/callback_chain/callback_chain", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return void 0 !== e.abortCallbackChain
    }

    function n(e) {
        var t = e,
            r = !1;
        return t.abortCallbackChain = function() {
            r = !0
        }, Object.defineProperty(t, "callbackChainAborted", {
            get: function() {
                return r
            }
        }), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function() {
        function e(e) {
            this.callbacks = e
        }
        return e.prototype.run = function(e) {
            for (var t = r(e) ? e : n(e), i = 0, o = this.callbacks; i < o.length; i++) {
                var a = o[i];
                if (t.callbackChainAborted) break;
                a(t)
            }
        }, e
    })();
    t.CallbackChain = i
}), define("modules/clean/cloud_docs/shared_components/dynamic_routing_modal", ["require", "exports", "tslib", "modules/clean/react/modal", "modules/clean/cloud_docs/open_with_utils", "modules/clean/static_urls", "modules/clean/react/css", "react", "modules/core/i18n", "spectrum/button"], function(e, t, r, n, i, o, a, s, l, c) {
    "use strict";

    function u(e) {
        n.Modal.showInstance(s.createElement(t.DynamicRoutingModal, r.__assign({}, e)))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), s = r.__importStar(s);
    var d = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.editorToString = {
                preview: "preview",
                word: "Microsoft Word Online",
                excel: "Microsoft Excel Online",
                powerpoint: "Microsoft Powerpoint Online",
                gdoc: "Google Docs",
                gsheet: "Google Sheets",
                gslides: "Google Slides"
            }, r
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e, t, r, a, u = this,
                d = this.editorToString[this.props.editorWithLock];
            "preview" === this.props.currentEditor ? (a = "active-editor-discovered-on-preview", r = "/static/images/cloud_docs/dynamic_routing/active-editor-discovered-on-preview-vflgDu-Pd.png", t = l._("Open in %(editor_with_lock_string)s").format({
                editor_with_lock_string: d
            }), e = l._("Right now people are working on this file in %(editor_with_lock_string)s. You can see updates and edit there.").format({
                editor_with_lock_string: d
            })) : (a = "active-editor-discovered-on-edit", r = "/static/images/cloud_docs/dynamic_routing/active-editor-discovered-on-edit-vflJsv-0D.png", t = l._("Edit in %(editor_with_lock_string)s").format({
                editor_with_lock_string: d
            }), e = l._("Because this file is already open in %(editor_with_lock_string)s, you can only see updates and edit there.").format({
                editor_with_lock_string: d
            }));
            var p, m = function() {
                return i.openWithCloudEditor(u.props.file, u.props.user, u.props.editorWithLock, !1)
            };
            if (this.props.showViewOnlyMode) {
                var f = this.editorToString[this.props.currentEditor],
                    _ = function() {
                        return i.openWithCloudEditor(u.props.file, u.props.user, u.props.currentEditor, !0)
                    },
                    v = l._("View-Only in %(current_editor)s").format({
                        current_editor: f
                    });
                p = s.createElement("div", {
                    className: "link-text"
                }, s.createElement("span", {
                    role: "link",
                    className: "link-span",
                    tabIndex: 0,
                    onClick: _
                }, v))
            }
            var h = s.createElement("div", {
                className: "edit-buttons"
            }, s.createElement(c.Button, {
                className: "main-button",
                onClick: m
            }, t), p);
            return s.createElement(n.Modal, {
                id: "dynamic-routing",
                className: "dynamic-routing-modal",
                buttonComponent: h,
                displayCloseButton: !0,
                style: "clean"
            }, s.createElement("div", {
                className: "default-dyn-routing-modal"
            }, s.createElement("img", {
                className: a,
                alt: "",
                src: o.static_url(r)
            }), s.createElement("div", {
                className: "main-text"
            }, l._("Want to see the latest version and edit?")), s.createElement("div", {
                className: "sub-text"
            }, e)))
        }, t
    })(s.Component);
    t.DynamicRoutingModal = a.requireCssWithComponent(d, ["/static/css/cloud_docs/dynamic_routing-vfldmyOM_.css"]), t.showDynamicRoutingModal = u
}), define("modules/clean/cloud_docs/shared_components/routing", ["require", "exports", "tslib", "modules/clean/cloud_docs/constants", "modules/clean/previews/util", "modules/clean/previews/util", "modules/clean/cloud_docs/shared_components/dynamic_routing_modal", "modules/clean/cloud_docs/cloud_doc_api_client", "modules/clean/file_store/utils", "modules/core/browser"], function(e, t, r, n, i, o, a, s, l, c) {
    "use strict";

    function u(e, t, r) {
        var n = r;
        s.getLockProviderAsync(e.id, t.file_id).then(function(i) {
            var o = c.get_uri().getQuery().from_editor,
                s = d(o, r) || "preview";
            i.app_id && g[i.app_id][n] && (l.isBrowseFile(t) || l.isSharedFile(t)) && a.showDynamicRoutingModal({
                editorWithLock: g[i.app_id][n],
                currentEditor: s,
                file: t,
                user: e,
                showViewOnlyMode: h[s]
            })
        })
    }

    function d(e, t) {
        if (e) switch (e.toLowerCase()) {
            case "google_docs":
                return n.GoogleFileTypes.GOOGLE_DSS_DOC;
            case "google_slides":
                return n.GoogleFileTypes.GOOGLE_DSS_SLIDES;
            case "google_sheet":
                return n.GoogleFileTypes.GOOGLE_DSS_SHEET;
            case "wopi":
                return i.isPptExtension(t) ? n.MicrosoftEditors.POWERPOINT : o.isWordDocExtension(t) ? n.MicrosoftEditors.WORD : n.MicrosoftEditors.EXCEL;
            default:
                return
        }
    }
    var p, m, f, _;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), c = r.__importStar(c);
    var v, h = (p = {}, p[n.MicrosoftEditors.WORD] = !0, p[n.MicrosoftEditors.EXCEL] = !0, p[n.MicrosoftEditors.POWERPOINT] = !1, p[n.GoogleFileTypes.GOOGLE_DSS_SLIDES] = !1, p[n.GoogleFileTypes.GOOGLE_DSS_DOC] = !1, p[n.GoogleFileTypes.GOOGLE_DSS_SHEET] = !1, p.preview = !1, p);
    (function(e) {
        e.pptx = "pptx", e.docx = "docx", e.xlsx = "xlsx"
    })(v || (v = {}));
    var g = (m = {}, m[3503728] = (f = {}, f[v.pptx] = n.GoogleFileTypes.GOOGLE_DSS_SLIDES, f[v.docx] = n.GoogleFileTypes.GOOGLE_DSS_DOC, f[v.xlsx] = n.GoogleFileTypes.GOOGLE_DSS_SHEET, f), m[661085] = (_ = {}, _[v.pptx] = n.MicrosoftEditors.POWERPOINT, _[v.docx] = n.MicrosoftEditors.WORD, _[v.xlsx] = n.MicrosoftEditors.EXCEL, _), m);
    t.maybeShowDynamicRoutingModal = u
}), define("modules/clean/frame_messenger/frame_messenger_base", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e(e) {
            var t = this;
            this._window = window, this.handleUntrustedMessage = function(e) {
                if (t.isOriginAllowed(e.origin)) {
                    var r;
                    try {
                        r = JSON.parse(e.data)
                    } catch (e) {
                        return
                    }
                    r.action && t.dispatchMessage(e, r)
                }
            }, this.allowedOrigins = e
        }
        return e.prototype.getWindow = function() {
            return this._window
        }, e.prototype.setWindow = function(e) {
            this._window = e
        }, e.prototype.startListening = function() {
            this.getWindow().addEventListener("message", this.handleUntrustedMessage)
        }, e.prototype.stopListening = function() {
            this.getWindow().removeEventListener("message", this.handleUntrustedMessage)
        }, e.prototype.regexIn = function(e, t) {
            if (t.indexOf(e) > -1) return !0;
            for (var r = 0, n = t; r < n.length; r++) {
                var i = n[r];
                if (i instanceof RegExp && e.match(i)) return !0
            }
            return !1
        }, e.stripStandardPort = function(e) {
            return "http://" === e.substr(0, 7) ? e.replace(/:80/, "") : "https://" === e.substr(0, 8) ? e.replace(/:443$/, "") : e
        }, e.prototype.isOriginAllowed = function(t) {
            return this.regexIn(e.stripStandardPort(t), this.allowedOrigins)
        }, e.prototype.packagePostMessage = function(e, t) {
            var r = {
                action: e,
                parameters: t
            };
            return JSON.stringify(r)
        }, e
    })();
    t.FrameMessengerBase = r
}), define("modules/clean/frame_messenger/frame_messenger_host", ["require", "exports", "tslib", "modules/clean/frame_messenger/frame_messenger_base", "modules/clean/frame_messenger/frame_messenger_logger"], function(e, t, r, n, i) {
    "use strict";

    function o(e, t) {
        return t.indexOf(e) >= 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._trustedChildOriginForPosting = null, t._validActionsFromChild = [], t.getChildIframes = function() {
                return []
            }, t
        }
        return r.__extends(t, e), t.prototype.configureChildMessaging = function(e, t, r) {
            if ("string" == typeof e) {
                var n = e;
                this.getChildIframes = function() {
                    return [].slice.call(document.querySelectorAll(n), 0)
                }
            } else this.getChildIframes = e;
            this._trustedChildOriginForPosting = null, this._validActionsFromChild = r, this._trustedMessageFromChildHandler = t
        }, t.prototype.startListening = function() {
            e.prototype.startListening.call(this), this.postMessageToChildren("parent-ready")
        }, t.prototype.getTrustedChildOriginForPosting = function() {
            if (null != this._trustedChildOriginForPosting) return this._trustedChildOriginForPosting;
            for (var e = this.getChildIframes(), t = 0, r = e; t < r.length; t++) {
                var n = r[t],
                    i = "" + n.getAttribute("src"),
                    o = this.getOriginFromUrl(i);
                if (this.isOriginAllowed(o)) {
                    this.updateChildOrigin(o);
                    break
                }
            }
            return this._trustedChildOriginForPosting
        }, t.prototype.childIsValidated = function() {
            return null != this._trustedChildOriginForPosting
        }, t.prototype._isNumber = function(e) {
            return !isNaN(parseInt(e, 10))
        }, t.prototype.getOriginFromUrl = function(e) {
            var t = document.createElement("a");
            t.href = e;
            var r = t.origin;
            if (r) return "null" === r ? "*" : r;
            var n = this._isNumber(t.port) ? ":" + t.port : "";
            return t.protocol + "//" + t.hostname + n
        }, t.prototype.postMessageToChildren = function(e, t) {
            void 0 === t && (t = {});
            var r = this.getChildIframes();
            this.postMessageToChildElements(r, e, t)
        }, t.prototype.resetOriginsForPosting = function() {
            this._trustedChildOriginForPosting = null
        }, t.prototype.updateChildOrigin = function(e) {
            "null" === e && (e = "*"), this._trustedChildOriginForPosting = e
        }, t.prototype.dispatchMessage = function(e, t) {
            i.logFrameMessage("frame_messenger_host", {
                event: e,
                messageJson: t
            }), this.updateChildOrigin(e.origin), "child-requesting-parent-origin" === t.action && this.postMessageToChildren("parent-ready"), o(t.action, this._validActionsFromChild) && null != this._trustedMessageFromChildHandler && this._trustedMessageFromChildHandler(t)
        }, t.prototype.postMessageToChildElements = function(e, t, r) {
            void 0 === r && (r = {});
            var n = this.getTrustedChildOriginForPosting();
            if (null !== n) {
                var i = this.packagePostMessage(t, r);
                e.forEach(function(e) {
                    e.contentWindow && e.contentWindow.postMessage(i, n)
                })
            }
        }, t
    })(n.FrameMessengerBase);
    t.FrameMessengerHost = a
}), define("modules/clean/frame_messenger/frame_messenger_logger", ["require", "exports", "tslib", "external/lodash"], function(e, t, r, n) {
    "use strict";

    function i(e, t) {
        t.eventName, t.messageJson, t.event, t.data;
        return
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var o = [];
    t.logFrameMessage = i;
    n.debounce(function() {
        console.groupCollapsed("Frame Messenger Events"), console.table(o), console.groupEnd()
    }, 1e3)
}), define("modules/clean/image_preview_util", ["require", "exports", "tslib", "jquery"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var i = {
        PREVIEW_IMAGE_CONTAINER: "preview-image-container",
        PREVIEW_IMAGE_WRAPPER: "preview-image-wrapper",
        PREVIEW_IMAGE: "preview-image",
        getPreviewImageContainer: function() {
            return n.default("." + this.PREVIEW_IMAGE_CONTAINER)
        },
        getPreviewImageWrapper: function() {
            return n.default("." + this.PREVIEW_IMAGE_WRAPPER)
        },
        getPreviewImage: function() {
            return this.getPreviewImageContainer().find("." + this.PREVIEW_IMAGE)
        },
        getPreviewImageElement: function() {
            return this.getPreviewImage()[0]
        }
    };
    t.default = i
}), define("modules/clean/image_size", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t) {
        for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
                a = o[0],
                s = o[1],
                l = o[2];
            if (s >= e || l >= t) return a
        }
        return n[n.length - 1][0]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [
        ["480x320", 480, 320],
        ["640x480", 640, 480],
        ["800x600", 800, 600],
        ["1024x768", 1024, 768],
        ["1280x960", 1280, 960],
        ["1600x1200", 1600, 1200],
        ["2048x1536", 2048, 1536]
    ];
    t.imageBestFitSize = r
}), define("modules/clean/integrations/zoom_share_dialog/async_modal", ["require", "exports", "tslib"], function(e, t, r) {
    "use strict";

    function n(t, n, i, o) {
        return r.__awaiter(this, void 0, void 0, function() {
            var a;
            return r.__generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return [4, new Promise(function(t, r) {
                            e(["modules/clean/integrations/zoom_share_dialog/modal"], t, r)
                        }).then(r.__importStar)];
                    case 1:
                        return a = s.sent().showModal, a(t, n, i, o || "web"), [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.asyncShowModal = n
}), define("modules/clean/loggers/file_preview_logger", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/react/file_viewer/constants", "modules/clean/react/previews/constants", "modules/clean/web_timing_logger", "modules/constants/request", "modules/core/browser"], function(e, t, r, n, i, o, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), a = r.__importStar(a), s = r.__importStar(s), l = r.__importStar(l);
    var c = {};
    c[i.EventType.FilePreviewSessionEnded] = "preview_session_ended", c[i.EventType.FilePreviewAttemptStarted] = "preview_attempted", c[i.EventType.FilePreviewSupportConfirmed] = "support_confirmed", c[i.EventType.FilePreviewSupportDenied] = "support_denied", c[i.EventType.FilePreviewDownloadAttempted] = "download_attempted", c[i.EventType.FilePreviewDownloadSucceeded] = "download_succeeded", c[i.EventType.FilePreviewDownloadFailed] = "download_failed", c[i.EventType.FilePreviewRenderSucceeded] = "render_succeeded", c[i.EventType.FilePreviewRenderFailed] = "render_failed", c[i.EventType.FilePreviewFidelitySurveyAsked] = "fidelity_survey_asked", c[i.EventType.FilePreviewFidelitySurveyAnswered] = "fidelity_survey_answered", c[i.EventType.FilePreviewFidelitySurveyDismissed] = "fidelity_survey_dismissed", c[i.EventType.FilePreviewUserAction] = "user_action", c[i.EventType.ArchivePreviewContentsScanned] = "archive_contents_scanned", c[i.EventType.FilePreviewModeDetermined] = "file_preview_mode_determined", c[i.EventType.FilePreviewModeBounce] = "file_preview_mode_bounce", c[i.EventType.SidebarPaneSelected] = "sidebar_pane_selected", c[i.EventType.SidebarModeSelected] = "sidebar_mode_selected", c[i.EventType.SidebarOpened] = "sidebar_opened", c[i.EventType.SidebarClosed] = "sidebar_closed", c[i.EventType.FilePreviewUpsellClicked] = "preview_upsell_clicked", c[i.EventType.FilePreviewUpsellExposed] = "preview_upsell_exposed";
    var u = (function() {
            function e() {
                this._eventHandlers = {}
            }
            return e.prototype._getSerializedTimeline = function(e) {
                return null
            }, e.prototype.addEventHandlers = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var r = 0, n = e; r < n.length; r++) {
                    var i = n[r],
                        o = i[0],
                        a = i[1];
                    this._eventHandlers[o] = a
                }
            }, e.prototype._log = function(e, t, r) {
                void 0 === r && (r = {});
                var i = this._getSerializedTimeline(t),
                    o = {
                        device_type: t.fileViewerSession.deviceType,
                        event_name: c[e],
                        extra: JSON.stringify(r),
                        file_viewer_session_id: t.fileViewerSession.id,
                        file_preview_session_id: t.id,
                        file_ns_id: t.file.ns_id,
                        file_sjid: t.file.sjid,
                        file_preview_timeline: i ? JSON.stringify(i) : null,
                        file_preview_size: t.previewSize
                    };
                n.SilentBackgroundBeaconRequest({
                    url: "/log/file_preview",
                    data: o
                })
            }, e.prototype.listenTo = function(e) {
                for (var t in this._eventHandlers)
                    if (this._eventHandlers.hasOwnProperty(t)) {
                        var r = this._eventHandlers[t];
                        e.addListener(t, r)
                    }
            }, e.prototype.unlistenTo = function(e) {
                for (var t in this._eventHandlers)
                    if (this._eventHandlers.hasOwnProperty(t)) {
                        var r = this._eventHandlers[t];
                        e.removeListener(t, r)
                    }
            }, e
        })(),
        d = (function(e) {
            function t() {
                var t = e.call(this) || this;
                return t._logAsked = function(e) {
                    t._log(i.EventType.FilePreviewFidelitySurveyAsked, e)
                }, t._logAnswered = function(e, r) {
                    t._log(i.EventType.FilePreviewFidelitySurveyAnswered, e, r)
                }, t._logDismissed = function(e, r) {
                    t._log(i.EventType.FilePreviewFidelitySurveyDismissed, e, r)
                }, t.addEventHandlers([i.EventType.FilePreviewFidelitySurveyAsked, t._logAsked], [i.EventType.FilePreviewFidelitySurveyAnswered, t._logAnswered], [i.EventType.FilePreviewFidelitySurveyDismissed, t._logDismissed]), t
            }
            return r.__extends(t, e), t.prototype._log = function(t, r, n) {
                void 0 === n && (n = {}), n._client_time = +Date.now();
                var i = r.sourceContext,
                    o = r.sourceAction;
                i && (n._source_context = i), o && (n._source_action = o), e.prototype._log.call(this, t, r, n)
            }, t
        })(u);
    t.FilePreviewFidelitySurveyLogger = d;
    var p = (function(e) {
        function t(t) {
            var r = e.call(this) || this;
            return r._handleFilePreviewAttemptStarted = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewAttemptStarted, e, t)
            }, r._handleFilePreviewSupportConfirmed = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewSupportConfirmed, e, t)
            }, r._handleFilePreviewSupportDenied = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewSupportDenied, e, t)
            }, r._handleFilePreviewDownloadAttempted = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewDownloadAttempted, e, t)
            }, r._handleFilePreviewDownloadSucceeded = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewDownloadSucceeded, e, t)
            }, r._handleFilePreviewDownloadFailed = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewDownloadFailed, e, t)
            }, r._handleFilePreviewRenderSucceeded = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewRenderSucceeded, e, t)
            }, r._handleFilePreviewRenderFailed = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewRenderFailed, e, t)
            }, r._handleFilePreviewSessionEnded = function(e, t) {
                r._handleEvent(i.EventType.FilePreviewSessionEnded, e, t)
            }, r._filePreviewSessionId = t, r.addEventHandlers([i.EventType.FilePreviewAttemptStarted, r._handleFilePreviewAttemptStarted], [i.EventType.FilePreviewSupportConfirmed, r._handleFilePreviewSupportConfirmed], [i.EventType.FilePreviewSupportDenied, r._handleFilePreviewSupportDenied], [i.EventType.FilePreviewDownloadAttempted, r._handleFilePreviewDownloadAttempted], [i.EventType.FilePreviewDownloadSucceeded, r._handleFilePreviewDownloadSucceeded], [i.EventType.FilePreviewDownloadFailed, r._handleFilePreviewDownloadFailed], [i.EventType.FilePreviewRenderSucceeded, r._handleFilePreviewRenderSucceeded], [i.EventType.FilePreviewRenderFailed, r._handleFilePreviewRenderFailed], [i.EventType.FilePreviewSessionEnded, r._handleFilePreviewSessionEnded]), r
        }
        return r.__extends(t, e), t.prototype._handleEvent = function(e, t, r) {
            if (void 0 === r && (r = {}), this._filePreviewSessionId === t.id) {
                r.preview_type = t.previewType, r.file_preview_timeline = JSON.stringify(this._getSerializedTimeline(t)), r.web_timing_logger_req_id = s.REQUEST_ID, r.source_context = t.sourceContext, r.source_action = t.sourceAction, null != t.primaryMarkTs && (r.primary_mark_ts = t.primaryMarkTs, r.time_to_primary_mark = t.timeToPrimaryMark());
                var n = a.start_time();
                if (null != t.lastEvent && (r.last_event = c[t.lastEvent]), t.sourceAction === o.PreviewSourceAction.Visit && e === i.EventType.FilePreviewRenderSucceeded) {
                    var u = a.time_to_interactive();
                    null != u && null != n && (r.time_to_interactive = u - n);
                    var d = l.performance();
                    if (null != d) {
                        var p = d.timing;
                        null != p && null != n && (r.time_to_first_byte = p.responseStart - n, r.web_timing_data = JSON.stringify(p))
                    }
                    window._timingData && window._timingData.img && (delete window._timingData.img.dl_error_finish, r.img_timing_data = JSON.stringify(window._timingData.img))
                }
                e === i.EventType.FilePreviewSessionEnded && (r.password_needed = t.passwordNeeded), this._log(e, t, r)
            }
        }, t.prototype._getSerializedTimeline = function(e) {
            var t = {};
            for (var r in e.previewTimeline)
                if (e.previewTimeline.hasOwnProperty(r)) {
                    var n = e.previewTimeline[r],
                        i = this._timelineKey(r);
                    t[i] = n.timestamp
                }
            return t
        }, t.prototype._timelineKey = function(e) {
            return c[e] + "_ts"
        }, t
    })(u);
    t.FilePreviewTimelineLogger = p;
    var m = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.logContentsScanned = function(e, r) {
                t._log(i.EventType.ArchivePreviewContentsScanned, e, r)
            }, t.addEventHandlers([i.EventType.ArchivePreviewContentsScanned, t.logContentsScanned]), t
        }
        return r.__extends(t, e), t
    })(u);
    t.FilePreviewArchiveLogger = m;
    var f = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._logUpsellExposed = function(e) {
                t._log(i.EventType.FilePreviewUpsellExposed, e)
            }, t._logUpsellClicked = function(e) {
                t._log(i.EventType.FilePreviewUpsellClicked, e)
            }, t.addEventHandlers([i.EventType.FilePreviewUpsellExposed, t._logUpsellExposed], [i.EventType.FilePreviewUpsellClicked, t._logUpsellClicked]), t
        }
        return r.__extends(t, e), t
    })(u);
    t.FilePreviewUpsellLogger = f;
    var _ = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._logUserAction = function(e, r, n, o) {
                o.action = r, o.context = n, t._log(i.EventType.FilePreviewUserAction, e, o)
            }, t.addEventHandlers([i.EventType.FilePreviewUserAction, t._logUserAction]), t
        }
        return r.__extends(t, e), t
    })(u);
    t.FilePreviewUserActionLogger = _;
    var v = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.determinedTime = 0, t.bounceLogged = !1, t.logDetermined = function(e, r) {
                t.determinedTime = Date.now(), t._log(i.EventType.FilePreviewModeDetermined, e, r)
            }, t.logBounce = function(e) {
                if (!t.bounceLogged && 0 !== t.determinedTime) {
                    t.bounceLogged = !0;
                    var r = Date.now() - t.determinedTime;
                    t._log(i.EventType.FilePreviewModeBounce, e, {
                        time: r
                    })
                }
            }, t.addEventHandlers([i.EventType.FilePreviewModeDetermined, t.logDetermined], [i.EventType.FilePreviewModeBounce, t.logBounce]), t
        }
        return r.__extends(t, e), t
    })(u);
    t.FilePreviewModeLogger = v;
    var h = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.logSidebarPaneSelected = function(e, r) {
                t._log(i.EventType.SidebarPaneSelected, e, r)
            }, t.logSidebarModeSelected = function(e, r) {
                t._log(i.EventType.SidebarModeSelected, e, r)
            }, t.logSidebarOpened = function(e) {
                t._log(i.EventType.SidebarOpened, e)
            }, t.logSidebarClosed = function(e) {
                t._log(i.EventType.SidebarClosed, e)
            }, t.addEventHandlers([i.EventType.SidebarPaneSelected, t.logSidebarPaneSelected], [i.EventType.SidebarModeSelected, t.logSidebarModeSelected], [i.EventType.SidebarOpened, t.logSidebarOpened], [i.EventType.SidebarClosed, t.logSidebarClosed]), t
        }
        return r.__extends(t, e), t
    })(u);
    t.FilePreviewSidebarLogger = h
}), define("modules/clean/loggers/file_viewer_logger", ["require", "exports", "tslib", "modules/clean/analytics", "modules/clean/file_store/utils", "modules/constants/python", "modules/clean/analytics", "modules/clean/ajax", "modules/constants/file_viewer", "modules/clean/api_v2/user_client", "modules/clean/api_v2/noauth_client"], function(e, t, r, n, i, o, a, s, l, c, u) {
    "use strict";

    function d() {
        return n.UserActivityLogger.start("web", "file_view_first_page_rendered"), n.PreviewActivityLogger.start("file_view_first_page_rendered"), t.FileViewLogger.start()
    }

    function p(e, t) {
        e = e;
        for (var o = i.getExtension(e), a = r.__assign({}, t.attributes, {
                total_time: -1,
                file_ext: o,
                source: "file-viewer",
                originalSize: null != e.bytes ? e.bytes : 0
            }), s = 0, l = t.stats; s < l.length; s++) {
            var c = l[s];
            a[v[c.name]] = c.end - c.start
        }
        return n.UserActivityLogger.stop("web", "file_view_first_page_rendered", a), n.PreviewActivityLogger.stop("file_view_first_page_rendered", {
            file_ext: o,
            extra: JSON.stringify(a)
        })
    }

    function m(e, t, r, n, i, o, a) {
        void 0 === a && (a = !1), l.PASS_USE_APIV2_LOG_FILE_VIEW_ROUTE ? f(e, t, n, i, o) : _(e, t, r, n, i, o, a)
    }

    function f(e, t, r, n, i) {
        var o = i ? {
                url: i
            } : void 0,
            a = {
                file_views: [{
                    file_info: {
                        file_identifier: e.file_id,
                        shared_link_details: o
                    },
                    platform_type: {
                        ".tag": "web"
                    },
                    origin: r,
                    action: n
                }]
            };
        return t ? (new c.UserApiV2Client).ns("seen_state").rpc("log_file_view", a, {
            subjectUserId: t.id
        }) : (new u.NoAuthApiV2Client).ns("seen_state").rpc("logged_out/log_file_view", a, {})
    }

    function _(e, r, n, a, s, l, c) {
        void 0 === c && (c = !1);
        var u = {
            user_id: null != r ? r.id : void 0,
            target: n,
            platform: o.FileViewPlatformType.WEB,
            ns_id: e.ns_id,
            sjid: e.sjid,
            ns_path: e.ns_path,
            origin: a,
            action: s,
            shared_link_url: l,
            extra: {
                file_ext: i.getExtension(e),
                file_bytes: e.bytes,
                file_mtime: e.ts,
                preview_type: e.preview_type,
                time_taken: -1,
                is_team: 1 === (null != r ? r.is_team : void 0),
                paid: 1 === (null != r ? r.paid : void 0),
                is_ndsl: c
            }
        };
        return t.FileViewLogger.stop(u)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), s = r.__importStar(s), l = r.__importStar(l);
    var v = {
        Overall: "viewer_overall_time",
        "Page Request": "viewer_page_request_time",
        Rendering: "viewer_rendering_time"
    };
    t.start = d, t.logPageRendered = p, t.FileViewLogger = {
        start_time: 0,
        start: function(e) {
            t.FileViewLogger.start_time || (t.FileViewLogger.start_time = e || Date.now())
        },
        stop: function(e) {
            t.FileViewLogger.start_time ? e.extra.time_taken = Date.now() - t.FileViewLogger.start_time : e.extra.time_taken = 0, t.FileViewLogger.log(e), t.FileViewLogger.start_time = 0
        },
        log: function(e) {
            s.SilentBackgroundRequest({
                url: "/log/file_view",
                data: {
                    viewing_user_ids: JSON.stringify(a.get_uids_for_logging(e.user_id)),
                    target: e.target,
                    platform: e.platform,
                    origin: e.origin || null,
                    action: e.action || null,
                    ns_id: e.ns_id,
                    sjid: e.sjid,
                    ns_path: e.ns_path,
                    shared_link_url: e.shared_link_url || null,
                    extra: JSON.stringify(e.extra)
                }
            })
        }
    }, t.logView = m
}), define("modules/clean/loggers/video_preview_logger", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/perf_tools/web_timing_utils"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var o = (function() {
        function e(e, t) {
            this.videoTruncated = !1, this.filePreviewSessionId = t ? t.id : "", this.videoFormat = e
        }
        return e.prototype.populateVideoDuration = function(e) {
            this.videoDuration = Math.round(e)
        }, e.prototype.setVideoTruncated = function() {
            this.videoTruncated = !0
        }, e.prototype.logEvent = function(e, t) {
            var r = i.WebTimingUtil.getNow(),
                o = {
                    event_name: e,
                    client_timestamp_ms: r,
                    file_preview_session_id: this.filePreviewSessionId,
                    video_format: this.videoFormat,
                    video_duration_seconds: this.videoDuration,
                    video_truncated: this.videoTruncated,
                    extra: t ? JSON.stringify(t) : void 0
                };
            n.SilentBackgroundBeaconRequest({
                url: "/log/video_preview",
                data: o
            })
        }, e
    })();
    t.VideoPreviewLogger = o
}), define("modules/clean/loggers/workflows_logger", ["require", "exports", "tslib", "modules/clean/logging/hive/schemas/web-workflows", "modules/clean/logging/telemetry", "modules/clean/previews/util", "modules/clean/react/file_viewer/models", "modules/clean/logging/hive/schemas/web-workflows"], function(e, t, r, n, i, o, a, s) {
    "use strict";

    function l(e, r, i) {
        var s = a.FilePreviewSession.currentSession;
        if (s && s.fileViewerSession) {
            var l = {
                event_name: e,
                source_context: s.sourceContext,
                device_type: s.fileViewerSession.deviceType,
                milestone: r,
                ns_id: s.file.ns_id,
                file_obj_id: s.file.file_id,
                file_viewer_session_id: s.fileViewerSession.id,
                file_preview_session_id: s.id,
                file_size: s.file.bytes || -1,
                file_preview_size: s.previewSize,
                file_extension: o.getWhitelistedExtensionFromFile(s.file),
                platform: "desktop" === s.fileViewerSession.deviceType ? "web" : "mobile_web",
                extra: i
            };
            t.hiveLogger.log(new n.WebWorklowsLoggingTableRow(l))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importStar(i), t.hiveLogger = new i.HiveLogger, t.WorkflowsEventExtra = s.WorkflowsEventExtra;
    (function(e) {
        e.WatermarkApplyOverwrite = "watermark_apply_overwrite", e.WatermarkApplySaveAsCopy = "watermark_apply_save_as_copy", e.WatermarkCancel = "watermark_cancel", e.WatermarkEducationTooltipExposed = "watermark_education_tooltip_exposed", e.WatermarkEducationTooltipClicked = "watermark_education_tooltip_clicked", e.WatermarkEnable = "watermark_enable", e.WatermarkOpenApplyMenu = "watermark_open_apply_menu", e.WatermarkPositionMenuOpened = "watermark_position_menu_opened", e.WatermarkPositionMenuSelectionMade = "watermark_position_menu_selection_made", e.WatermarkRotationClicked = "watermark_rotation_clicked", e.WatermarkSizeChanged = "watermark_size_changed", e.WatermarkTextInputEnterFocus = "watermark_text_input_enter_focus", e.WatermarkTextInputExitFocus = "watermark_text_input_exit_focus", e.WatermarkTransparencyChanged = "watermark_transparency_changed", e.WatermarkUpsellHeaderButtonClicked = "watermark_upsell_header_button_clicked", e.WatermarkUpsellPopoverClickedProCopy = "watermark_upsell_popover_clicked_pro_copy", e.WatermarkUpsellPopoverClickedWmCopy = "watermark_upsell_popover_clicked_wm_copy", e.WatermarkUpsellPopoverExposedProCopy = "watermark_upsell_popover_exposed_pro_copy", e.WatermarkUpsellPopoverExposedWmCopy = "watermark_upsell_popover_exposed_wm_copy", e.WatermarkUpsellSingleLineProClicked = "watermark_upsell_single_line_pro_clicked", e.WatermarkUpsellSingleLineProExposed = "watermark_upsell_single_line_pro_exposed", e.WatermarkUpsellTooltipClicked = "watermark_upsell_tooltip_clicked", e.WatermarkUpsellTooltipExposed = "watermark_upsell_tooltip_exposed", e.WatermarkVersionHistoryClicked = "watermark_version_history_clicked", e.WatermarkTextTabClicked = "watermark_type_text_clicked", e.WatermarkImageTabClicked = "watermark_type_image_clicked", e.WatermarkImageUploadClicked = "watermark_image_upload_clicked", e.WatermarkImageUploaded = "watermark_image_uploaded", e.WatermarkImageDeleted = "watermark_image_deleted"
    })(t.WorkflowsEvent || (t.WorkflowsEvent = {})), t.logWorkflowsEvent = l
}), define("modules/clean/logging/hive/schemas/web-comments2", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e(e) {
            this.category = "web-comments2", this.active_user_id = null, this.authed_user_ids = null, this.identity_gid = null, this.locale_browser_header = null, this.locale_user_selected = null, this.referrer = null, this.session_id = null, this.team_id = null, this.team_type = null, this.ua_browser_name = null, this.ua_browser_version = null, this.ua_dist_name = null, this.ua_dist_version = null, this.ua_os_name = null, this.ua_os_version = null, this.user_agent = null, this.user_id = null, this.event = e.event, this.comment_gid = e.comment_gid, this.thread_gid = e.thread_gid, this.stream_gid = e.stream_gid, this.timestamp = Math.floor(Date.now() / 1e3), this.is_annotation = e.is_annotation, this.time_comment_offset = e.time_comment_offset, this.file_extension = e.file_extension, this.file_obj_id = e.file_obj_id, this.platform = e.platform, this.oref_name = e.oref_name, this.ns_id = e.ns_id, this.file_size = e.file_size, this.error_message = e.error_message, this.annotation_type = e.annotation_type, this.page = e.page, this.referral_source = e.referral_source, this.product_surface = e.product_surface, this.is_mobile = e.is_mobile, this.annotation_position = e.annotation_position, Object.seal(this)
        }
        return e
    })();
    t.Comments2LoggingTableRow = r
}), define("modules/clean/logging/hive/schemas/web-workflows", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e(e) {
            this.category = "web-workflows", this.active_user_id = null, this.authed_user_ids = null, this.identity_gid = null, this.session_id = null, this.team_id = null, this.team_type = null, this.ua_browser_name = null, this.ua_browser_version = null, this.ua_os_name = null, this.ua_os_version = null, this.user_id = null, this.event_name = e.event_name, this.source_context = e.source_context, this.device_type = e.device_type, this.milestone = e.milestone, this.app_id = e.app_id, this.ns_id = e.ns_id, this.file_obj_id = e.file_obj_id, this.file_viewer_session_id = e.file_viewer_session_id, this.file_preview_session_id = e.file_preview_session_id, this.file_size = e.file_size, this.file_preview_size = e.file_preview_size, this.file_extension = e.file_extension, this.platform = e.platform, this.extra = e.extra, Object.seal(this)
        }
        return e
    })();
    t.WebWorklowsLoggingTableRow = r
}), define("modules/clean/previews/actions", ["require", "exports", "tslib", "modules/clean/referrer_cleansing_redirect", "modules/core/i18n"], function(e, t, r, n, i) {
    "use strict";

    function o(e) {
        var t = window.open("about:blank");
        if (!t) throw new Error(i._("Could not open new window"));
        window.setTimeout(function() {
            var r = t.document.createElement("style");
            r.innerHTML = "\n      @page { margin: 0;}\n      img { max-width: 100%; max-height: 100%}\n    ", t.document.head.appendChild(r);
            var n = function() {
                    t.print()
                },
                i = function() {
                    t.close()
                },
                o = t.document.createElement("img");
            o.src = e, o.onload = n, o.onerror = i, t.document.body.appendChild(o)
        }, 50)
    }

    function a(e) {
        n.safe_open_tab_and_redirect(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.imagePrint = o, t.docPrint = a
}), define("modules/clean/previews/pending_upload_watcher", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/react/file_viewer/data/actions", "modules/core/browser", "modules/core/uri"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), o = r.__importStar(o);
    var s = (function() {
        function e(e, t, r) {
            void 0 === r && (r = ""), this.pollUrl = new a.URI({
                path: "/sp/"
            }).updateQuery({
                link_type: e,
                link_key: t,
                secure_hash: r
            }).toString()
        }
        return e.prototype.startPolling = function() {
            this.pollPending()
        }, e.prototype.pollSuccess = function(e) {
            var t = JSON.parse(e);
            if (t.hasOwnProperty("upload_status") && "complete" === t.upload_status) return void i.pendingFileUploaded();
            setTimeout(this.pollPending.bind(this), 2e3)
        }, e.prototype.pollFailure = function(e) {
            e.status < 400 || e.status >= 500 ? this.retryPoll() : o.reload(!0)
        }, e.prototype.retryPoll = function() {
            setTimeout(this.pollPending.bind(this), 2e3)
        }, e.prototype.pollPending = function() {
            var e = this;
            n.SilentBackgroundRequest({
                url: this.pollUrl,
                success: function(t) {
                    e.pollSuccess(t)
                },
                error: function(t) {
                    e.pollFailure(t)
                }
            })
        }, e
    })();
    t.PendingUploadWatcher = s
}), define("modules/clean/previews/util", ["require", "exports", "tslib", "modules/core/browser", "modules/clean/analytics", "modules/clean/datetime", "modules/clean/filepath", "modules/clean/previews/constants", "modules/clean/cloud_docs/constants", "modules/clean/file_store/utils", "modules/clean/react/previews/constants", "file-viewer/core", "modules/constants/file_viewer", "modules/core/uri"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m) {
    "use strict";

    function f() {
        return ".react-file-viewer__preview iframe"
    }

    function _() {
        return p.PASS_PLATFORM_INFO
    }

    function v(e) {
        return ["xls", "csv", "ods"].indexOf(e.substring(0, 3)) > -1
    }

    function h(e) {
        var t = a.file_extension(e);
        return p.LOGGING_WHITELISTED_EXTS.includes("." + t) ? t : p.LOGGING_EXT_PLACEHOLDER
    }

    function g(e) {
        var t = c.getExtension(e);
        return p.LOGGING_WHITELISTED_EXTS.includes("." + t) ? t : p.LOGGING_EXT_PLACEHOLDER
    }

    function w(e) {
        if ("indd" === e) return e;
        var t = e.substring(0, 3);
        switch (t) {
            case "rtf":
            case "odt":
            case "wpd":
                return "doc";
            case "pps":
            case "odp":
                return "ppt";
            case "csv":
            case "ods":
                return "xls";
            default:
                return t
        }
    }

    function y(e) {
        if (e.ts) return o.getActingTime(1e3 * e.ts)
    }

    function b(e) {
        if (e.ts) return o.getActingTime(1e3 * e.ts, !1, !1, -1, !1, !0)
    }

    function E(e) {
        if (e.ts) return o.getActingTime(1e3 * e.ts, !1, !0, -1, !1, !0)
    }

    function S(e) {
        if (e.ts) return o.getActingTime(1e3 * e.ts, !1, !0, -1, !1, !1)
    }

    function P(e) {
        if (e) {
            var t = new Date(e);
            return o.getActingTime(t.getTime(), !1, !0, -1, !1, !0)
        }
    }

    function T(e) {
        return e = e.updateQuery({
            annotation_highlight: "1"
        }), e = e.updateQuery({
            annotation_region: "1"
        })
    }

    function C(e, t) {
        var r = {};
        return r._subject_uid = String(t), e.updateQuery(r)
    }

    function k(e, t) {
        return C(new m.URI({
            path: "/history" + e.fq_path
        }), t.id)
    }

    function I(e, t) {
        i.UserActivityLogger.log("web", "view_version_history");
        var r = k(e, t);
        n.redirect(r.toString())
    }

    function x(e) {
        return p.PRESENTATION_EXTS.map(function(e) {
            return e.slice(1)
        }).includes(e)
    }

    function A(e) {
        return ["doc", "docm", "docx"].includes(e)
    }

    function M(e) {
        return ["odp", "odt", "rtf", "wpd"].includes(e)
    }

    function F(e, t) {
        var r = Number.MAX_VALUE;
        if ("pdf" === e) r = Number(524288e3);
        else if (A(e) || M(e)) r = s.MAX_WORD_DOC_FILE_SIZE_B;
        else if (x(e)) r = s.MAX_PPT_FILE_SIZE_B;
        else if (t === s.PreviewType.Archive) r = s.MAX_ARCHIVE_FILE_SIZE_B;
        else if (t === s.PreviewType.HTML || t === s.PreviewType.Text) r = Number(8388608);
        else {
            if (t !== s.PreviewType.Linkfile) return;
            r = Number(10485760)
        }
        return r
    }

    function O(e, t) {
        var r = e.bytes;
        if (void 0 === r) return !0;
        var n = c.getExtension(e),
            i = F(n, t);
        return !i || r <= i
    }

    function R(e) {
        return 0 === e.bytes
    }

    function L(e) {
        var t = u.ErrorType.LoadError;
        return e === d.RivieraStatus.TooBig ? t = u.ErrorType.FileSizeError : e === d.RivieraStatus.PasswordProtected && (t = u.ErrorType.PasswordProtectedError), t
    }

    function D() {
        return {
            overflow: "auto",
            "-webkit-overflow-scrolling": "touch"
        }
    }

    function N(e, t) {
        return e && t ? m.URI.parse(e).updateQuery({
            psid: t.id
        }).toString() : e
    }

    function U(e, t) {
        return s.IworkExtensions.includes(c.getExtension(e)) && !e.is_dir && t === s.PreviewType.Image
    }

    function V(e) {
        return s.IworkExtensions.includes(c.getExtension(e))
    }

    function W(e) {
        return e.preview_type === s.PreviewType.CloudDoc || l.isCloudDocByExtension(c.getExtension(e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), a = r.__importStar(a), p = r.__importStar(p), t.getIframeQuery = f, t.shouldShowPlatformInfo = _, t.is_excel2_file = v, t.getWhitelistedExtension = h, t.getWhitelistedExtensionFromFile = g, t.normalize_extension = w, t.getModifierString = y, t.getCapitalizedModifierString = b, t.getCompactDateTimeString = E, t.getCompactLowerCaseDateTimeString = S, t.getDateTimeFromUTCString = P, t.update_url_for_annotation = T, t.update_url_with_user_id = C, t.getVersionHistoryUrl = k, t.redirectToVersionHistory = I, t.VALID_PREVIEW_TYPES = [s.PreviewType.Archive, s.PreviewType.Audio, s.PreviewType.CloudDoc, s.PreviewType.Excel, s.PreviewType.HTML, s.PreviewType.Image, s.PreviewType.Linkfile, s.PreviewType.Other, s.PreviewType.SsrDoc, s.PreviewType.RawHTML, s.PreviewType.Restricted, s.PreviewType.Video, s.PreviewType.Doc, s.PreviewType.Photo, s.PreviewType.Text], t.isPptExtension = x, t.isWordDocExtension = A, t.isLibreOfficeExtension = M, t.getFileSizeLimit = F, t.filesizeSupported = O, t.isEmptyFile = R, t.mapRivieraStatusToErrorType = L, t.iOSIframeScrollStyles = D, t.tagCriticalPathContentRequest = N, t.isLimitedPreview = U, t.isSupportedBundleFile = V, t.isCloudDocPreview = W
}), define("modules/clean/react/comments2/components/annotations/empty_layer", ["require", "exports", "tslib", "external/react"], function(e, t, r, n) {
    "use strict";

    function i(e) {
        var t = {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        return n.default.createElement("div", {
            style: t
        }, e.children)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.EmptyLayer = i
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/comments2/components/annotations/loadable", ["require", "exports", "modules/clean/react/async/loadable", "modules/clean/react/comments2/components/annotations/empty_layer"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AnnotationViewLayer = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/comments2/components/annotations/annotation_view_layer"], t, r)
            }).then(__importStar).then(function(e) {
                return e.AnnotationViewLayer
            })
        }
    }), t.AnnotationConductorLayer = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/comments2/components/annotations/annotation_conductor_layer"], t, r)
            }).then(__importStar).then(function(e) {
                return e.AnnotationConductorLayer
            })
        },
        loading: n.EmptyLayer
    }), t.AnnotationInstructionalTooltipPane = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/comments2/components/annotations/annotation_instructional_tooltip_pane"], t, r)
            }).then(__importStar).then(function(e) {
                return e.AnnotationInstructionalTooltipPane
            })
        },
        loading: n.EmptyLayer
    })
}), define("modules/clean/react/comments2/components/mobile_web_comments", ["require", "exports", "tslib", "react", "external/lodash", "modules/clean/web_timing_logger", "modules/clean/react/async/loadable", "modules/clean/react/comments2/util", "modules/clean/react/size_class/utils"], function(e, t, r, n, i, o, a, s, l) {
    "use strict";

    function c(e) {
        var o = e.currentFile,
            a = e.sizeClass;
        return l.isSmallerThanLarge(a) || s.isComments2Mobile() && null != o.ns_id ? n.default.createElement(t.AsyncManagedCommentsTab, r.__assign({}, e, {
            collapsed: !1,
            fileSidebarDispatch: i.noop,
            isMobile: !0,
            isVersionHistoryMode: !1
        })) : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i), t.AsyncManagedCommentsTab = a.Loadable({
        loader: function() {
            return o.waitForTTI().then(function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/file_sidebar/managed_comments_tab"], t, r)
                }).then(r.__importStar).then(function(e) {
                    return e.ManagedCommentsTab
                })
            })
        }
    }), t.MobileWebComments = c
}), define("modules/clean/react/comments2/components/snackbars", ["require", "exports", "tslib", "react", "modules/clean/react/snackbar", "modules/core/i18n"], function(e, t, r, n, i, o) {
    "use strict";

    function a(e) {
        var t = e.message,
            r = n.default.createElement(i.Snackbar, {
                title: t,
                variant: "complete",
                closeButtonText: l,
                id: "comments2"
            });
        i.Snackbar.show(r)
    }

    function s(e) {
        var t = e.message,
            r = e.retryFn,
            o = r ? n.default.createElement(i.Snackbar, {
                title: t,
                variant: "fail",
                closeButtonText: l,
                actionButtonText: c,
                onActionClick: function() {
                    r(), i.Snackbar.close()
                },
                id: "comments2"
            }) : n.default.createElement(i.Snackbar, {
                title: t,
                variant: "fail",
                closeButtonText: l,
                id: "comments2"
            });
        i.Snackbar.show(o)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var l = o._("Close", {
            comment: "Button to dismiss snackbar message"
        }),
        c = o._("Retry", {
            comment: "Button to retry a failed action"
        });
    t.showSuccessSnackbar = a, t.showErrorSnackbar = s
}), define("modules/clean/react/comments2/data/action_helper", ["require", "exports", "tslib", "modules/clean/react/comments2/data/selectors", "modules/clean/react/comments2/util"], function(e, t, r, n, i) {
    "use strict";

    function o(e, t) {
        return e.zero ? {
            type: e.actionType
        } : {
            type: e.actionType,
            payload: t
        }
    }

    function a(e, t) {
        return {
            type: e.actionTypes.request,
            payload: t,
            meta: {
                args: t
            }
        }
    }

    function s(e, t, r) {
        return {
            type: e.actionTypes.success,
            payload: r,
            meta: {
                args: t
            }
        }
    }

    function l(e, t, r) {
        return {
            type: e.actionTypes.error,
            error: r,
            meta: {
                args: t
            }
        }
    }

    function c(e) {
        return {
            error: e + ".Error",
            request: e + ".Request",
            success: e + ".Success"
        }
    }

    function u(e) {
        return {
            actionTypes: c(e),
            name: e,
            type: "async"
        }
    }

    function d(e) {
        return {
            actionType: e,
            name: e,
            type: "sync",
            zero: !1
        }
    }

    function p(e) {
        return {
            actionType: e,
            name: e,
            type: "sync",
            zero: !0
        }
    }

    function m(e) {
        return {
            asyncAction: function(t) {
                return u(e + "/" + t)
            },
            syncAction: function(t) {
                return d(e + "/" + t)
            },
            syncAction0: function(t) {
                return p(e + "/" + t)
            }
        }
    }

    function f(e) {
        return e.zero ? function() {
            return {
                type: e.name
            }
        } : function(t) {
            return {
                payload: t,
                type: e.name
            }
        }
    }

    function _() {
        var e = this;
        return function(t, o) {
            return r.__awaiter(e, void 0, void 0, function() {
                var e, a, s, l, c, u, d;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = o.action, a = o.args, s = o.dispatch, l = o.context, c = o.getState, i.isContextSame(l, n.getContext(c())) ? [3, 2] : [4, t(o)];
                        case 1:
                            return [2, r.sent()];
                        case 2:
                            s({
                                type: e.actionTypes.request,
                                payload: a,
                                meta: {
                                    args: a
                                }
                            }), r.label = 3;
                        case 3:
                            return r.trys.push([3, 5, , 6]), [4, t(o)];
                        case 4:
                            return u = r.sent(), s({
                                type: e.actionTypes.success,
                                payload: u,
                                meta: {
                                    args: a
                                }
                            }), [2, u];
                        case 5:
                            throw d = r.sent(), s({
                                type: e.actionTypes.error,
                                error: d,
                                meta: {
                                    args: a
                                }
                            }), d;
                        case 6:
                            return [2]
                    }
                })
            })
        }
    }
    var v = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.syncReduxAction = o, t.requestReduxAction = a, t.successReduxAction = s, t.errorReduxAction = l, t.asyncActionConstants = c, t.asyncAction = u, t.syncAction = d, t.syncAction0 = p, t.namespacedActions = m, t.syncHandler = f, t.createAsyncHandler = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t, i) {
            return function(o) {
                return function(a, s) {
                    return r.__awaiter(v, void 0, void 0, function() {
                        var l, c, u, d = this;
                        return r.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    l = n.getContext(s()), c = e.reduceRight(function(e, t) {
                                        return function(n) {
                                            return r.__awaiter(d, void 0, void 0, function() {
                                                return r.__generator(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, t(e, n)];
                                                        case 1:
                                                            return [2, r.sent()]
                                                    }
                                                })
                                            })
                                        }
                                    }, function(e) {
                                        return i(o, e)
                                    }), p.label = 1;
                                case 1:
                                    return p.trys.push([1, 3, , 4]), [4, c({
                                        action: t,
                                        args: o,
                                        dispatch: a,
                                        getState: s,
                                        context: l
                                    })];
                                case 2:
                                    return [2, p.sent()];
                                case 3:
                                    return u = p.sent(), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }
            }
        }
    }, t.dispatchMiddleware = _, t.thunkHandler = t.createAsyncHandler(), t.asyncHandler = t.createAsyncHandler(_())
}), define("modules/clean/react/comments2/data/actions", ["require", "exports", "tslib", "external/lodash", "modules/core/browser", "modules/core/i18n", "modules/clean/redux/types", "modules/clean/react/comments2/data/api", "file-viewer/core", "modules/clean/react/file_sidebar/store/instance", "comments2/transforms", "modules/clean/react/comments2/data/types", "modules/clean/react/comments2/components/snackbars", "modules/clean/react/comments2/util", "modules/clean/react/comments2/data/logger", "modules/clean/react/comments2/data/perf_util", "modules/clean/react/comments2/data/selectors", "spectrum_comments/utils/throttle-debounce", "modules/clean/bolt", "modules/clean/browse_interface", "modules/clean/react/comments2/data/action_helper", "modules/clean/react/file_sidebar/store/sidebar/actions", "modules/clean/react/file_viewer/data/actions"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _, v, h, g, w, y, b, E) {
    "use strict";

    function S(e) {
        var t = this,
            n = e.clientFn,
            o = e.successCallback,
            a = e.eventToLog;
        return function(e, l) {
            return r.__awaiter(t, void 0, void 0, function() {
                var t, c, u, d, p;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (t = v.getContext(l()), !t || !t.viewer) throw new Error;
                            c = new s.Comments2Api(t.viewer.id, t.stream), u = i.get_uri().getQuery().oref, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, n(c)];
                        case 2:
                            return d = r.sent(), c.logEvent(a, {
                                oref: u
                            }), f.logEvent("telemetry_" + a, {
                                stream: t.stream
                            }), o(e, l, d), [3, 4];
                        case 3:
                            return p = r.sent(), f.logErrorEvent("error trying to execute client event " + a, {
                                stream: t.stream
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }
    }

    function P(e) {
        return function(r) {
            r(se(e));
            var n = e.thread;
            n.read || r(t.Actions.markThreadRead({
                threadId: n.id,
                origin: d.MarkThreadReadOrigin.ThreadActivated
            }))
        }
    }

    function T() {
        var e = /comment_id=(.*)/.exec(i.get_uri().getFragment());
        return e ? e[1] : void 0
    }

    function C() {
        return S({
            clientFn: function(e) {
                return e.enableCommenting()
            },
            successCallback: k,
            eventToLog: "enable_comments"
        })
    }

    function k(e, t, n) {
        return r.__awaiter(this, void 0, void 0, function() {
            var i;
            return r.__generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return i = v.getStreamId(t()), i !== n.id ? [2] : [4, e(ne(d.Comments2ContextStatus.Pending))];
                    case 1:
                        return r.sent(), e(oe(!0, !1)), [2]
                }
            })
        })
    }

    function I() {
        return S({
            clientFn: function(e) {
                return e.disableCommenting()
            },
            successCallback: x,
            eventToLog: "disable_comments"
        })
    }

    function x(e, t, n) {
        return r.__awaiter(this, void 0, void 0, function() {
            var i, o;
            return r.__generator(this, function(r) {
                return i = v.getStreamId(t()), i !== n.id ? [2] : (o = v.getContext(t()), A(e, o, !0), [2])
            })
        })
    }

    function A(e, t, n) {
        return r.__awaiter(this, void 0, void 0, function() {
            return r.__generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, e(ne(d.Comments2ContextStatus.Disabled))];
                    case 1:
                        return t.sent(), e(E.disableMode(l.FileViewerMode.Commenting)), [4, c.store.dispatch(b.setComments2DisabledState())];
                    case 2:
                        return t.sent(), [2]
                }
            })
        })
    }

    function M(e) {
        return function(r) {
            if (m.useBolt()) {
                var n = h.debounce(function() {
                        G(), r(oe(!1, !1))
                    }, 2e3),
                    i = function() {
                        t.bolt.unsubscribe(), Y(function() {
                            r(oe(!1, !1))
                        })
                    };
                t.bolt.subscribe(e, n, i)
            }
        }
    }

    function F(e) {
        var n = this;
        return function(i, o) {
            return r.__awaiter(n, void 0, void 0, function() {
                var n, a;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return n = o(), a = v.getContext(n), m.isContextSame(a, e) ? [3, 2] : (t.bolt.unsubscribe(), i(te(e)), i(it({
                                setContextTime: +new Date,
                                listCompleteTime: 0
                            })), e ? (m.isUserSame(a && a.viewer, e.viewer) || (i(t.Actions.checkOnboardingStatus(void 0)), m.inUpsellExperiment() && i(ve(void 0))), v.getStickers(n) || i(t.Actions.getStickers(void 0)), [4, i(oe(!0))]) : [3, 2]);
                        case 1:
                            r.sent(), r.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }
    }

    function O() {
        return function(e, t) {
            var r = t.context;
            if (!r || !r.viewer) throw new Error("Bad state");
            var i = new s.Comments2Api(r.viewer.id, r.stream);
            return e(n.merge({}, t, {
                api: i,
                context: r
            }))
        }
    }

    function R(e) {
        var t = this;
        return function(i, o) {
            return r.__awaiter(t, void 0, void 0, function() {
                var t, s;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]), [4, i(o)];
                        case 1:
                            return t = r.sent(), e(n.merge({}, o, {
                                payload: t,
                                status: a.ApiClientStatus.Success
                            })), [2, t];
                        case 2:
                            throw s = r.sent(), e(n.merge({}, o, {
                                error: s,
                                status: a.ApiClientStatus.Error
                            })), s;
                        case 3:
                            return [2]
                    }
                })
            })
        }
    }

    function L(e, t) {
        if (t instanceof s.Comments2Error && (t.code === s.ErrorCode.FILE_NOT_FOUND || t.code === s.ErrorCode.PERMISSION_DENIED)) return {
            message: o._("Either that file was deleted or you no longer have access to it."),
            isRetriable: !1
        };
        switch (e) {
            case Me.name:
            case Oe.name:
            case Ne.name:
                return {
                    message: o._("We were unable to post the comment."),
                    isRetriable: !0
                };
            case Le.name:
                return {
                    message: o._("We were unable to delete the comment."),
                    isRetriable: !0
                };
            case ze.name:
                return {
                    message: o._("We were unable to resolve the thread."),
                    isRetriable: !0
                };
            case Ke.name:
                return {
                    message: o._("We were unable to unresolve the thread."),
                    isRetriable: !0
                };
            case Ve.name:
                return {
                    message: o._("We were unable to mark the thread as read."),
                    isRetriable: !0
                };
            case Be.name:
                return {
                    message: o._("We were unable to mark the thread as unread."),
                    isRetriable: !0
                };
            case st.name:
                return {
                    message: o._("We were unable to subscribe to the file."),
                    isRetriable: !0
                };
            case dt.name:
                return {
                    message: o._("We were unable to unsubscribe from the file."),
                    isRetriable: !0
                };
            case me.name:
            case Ee.name:
            case nt.name:
            default:
                return null
        }
    }

    function D(e) {
        switch (e) {
            case st.name:
                return {
                    message: o._("You have subscribed to the file.")
                };
            case dt.name:
                return {
                    message: o._("You have unsubscribed from the file.")
                };
            default:
                return null
        }
    }

    function N(e) {
        var t = this,
            n = e.handleError,
            i = e.handleSuccess;
        return function(e, o) {
            return r.__awaiter(t, void 0, void 0, function() {
                function t() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var a, s, l, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, e(o)];
                                case 1:
                                    return a = r.sent(), [3, 3];
                                case 2:
                                    throw s = r.sent(), l = L(o.action.name, s), l && n({
                                        message: l.message,
                                        retryFn: l.isRetriable ? t : void 0
                                    }), s;
                                case 3:
                                    return c = D(o.action.name), c && i(c), [2, a]
                            }
                        })
                    })
                }
                return r.__generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, t()];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }
    }

    function U() {
        return +new Date
    }

    function V(e) {
        var t = this;
        return function(n, i) {
            return r.__awaiter(t, void 0, void 0, function() {
                function t(t) {
                    var r = e(i.action.name, t);
                    if (r) {
                        var n = U();
                        i.dispatch(j(r, i.context, n - o))
                    }
                }
                var o, a, l, c;
                return r.__generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            o = U(), e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, n(i)];
                        case 2:
                            return a = e.sent(), [3, 4];
                        case 3:
                            throw l = e.sent(), c = l instanceof s.Comments2Error ? l.code : "unknown_error", t(c), l;
                        case 4:
                            return t(), [2, a]
                    }
                })
            })
        }
    }

    function W() {
        return function(e, t) {
            var r = t(),
                n = v.getViewerId(r),
                o = v.getFQPath(r);
            if (o && n) {
                var a = w.getFileHistoryUrl({
                    fqPath: o,
                    userId: n
                });
                i.redirect(a)
            }
        }
    }

    function B(e, t) {
        var n = this;
        return void 0 === t && (t = {}),
            function(i, o) {
                return r.__awaiter(n, void 0, void 0, function() {
                    var n, i, a;
                    return r.__generator(this, function(r) {
                        return n = o(), i = v.getContext(n), i && i.viewer && (a = new s.Comments2Api(i.viewer.id, i.stream), a.logEvent(e, t)), [2]
                    })
                })
            }
    }

    function j(e, t, n) {
        var i = this;
        return function() {
            return r.__awaiter(i, void 0, void 0, function() {
                var i, o, a;
                return r.__generator(this, function(r) {
                    return t ? (i = t.viewer, o = t.stream, a = i ? new s.Comments2Api(i.id, o) : new s.Comments2LoggedOutApi(o), a.logPerfEvent(e, n), [2]) : [2]
                })
            })
        }
    }

    function z(e, t) {
        var n = this;
        return function(i, o) {
            return r.__awaiter(n, void 0, void 0, function() {
                var n;
                return r.__generator(this, function(r) {
                    return n = v.getContext(o()), i(j(e, n, t)), [2]
                })
            })
        }
    }

    function q(e, t) {
        var n = this;
        return function(i, o) {
            return r.__awaiter(n, void 0, void 0, function() {
                var n, i, a;
                return r.__generator(this, function(r) {
                    return n = o(), i = v.getContext(n), i && i.viewer && (a = new s.Comments2Api(i.viewer.id, i.stream), a.logSimplePerfEvent(e, t)), [2]
                })
            })
        }
    }
    var K = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importStar(i), m = r.__importStar(m), f = r.__importStar(f), _ = r.__importStar(_), v = r.__importStar(v), b = r.__importStar(b), t.HandleErrorArg = p.ShowErrorSnackbarArg, t.enableCommenting = C, t.disableCommenting = I, t.bolt = {
        client: null,
        subscribe: function(e, r, n) {
            var i = e.app_id,
                o = e.revision,
                a = e.token,
                s = e.unique_id,
                l = new g.SignedChannelState(i, s, o, a);
            t.bolt.client ? t.bolt.client.update_states([l]) : (t.bolt.client = new g.BoltClient([l], r, n), t.bolt.client.start())
        },
        unsubscribe: function() {
            t.bolt.client && (t.bolt.client.unsubscribe(), t.bolt.client = null)
        }
    };
    var H = m.createBackoff(),
        Y = H.backoff,
        G = H.resetBackoff;
    t.setFileContext = F;
    var Z = y.namespacedActions("Comments2"),
        X = Z.asyncAction,
        J = Z.syncAction,
        Q = Z.syncAction0;
    t.statusHandlingMiddleware = N, t.perfLoggingMiddleware = V;
    var $ = y.createAsyncHandler(N({
            handleError: p.showErrorSnackbar,
            handleSuccess: p.showSuccessSnackbar
        }), O(), R(function(e) {
            var t = i.get_uri().getQuery().oref,
                r = e.context.stream,
                n = v.getThreadMap(e.getState());
            if (e.status === a.ApiClientStatus.Error) f.logErrorEvent("encountered an error with async api call " + e.action.name, {
                stream: r
            });
            else if (e.status === a.ApiClientStatus.Success) {
                var o = e.args,
                    s = e.payload;
                switch (e.action.name) {
                    case Me.name:
                        e.api.logEvent("new_comment", {
                            commentId: s.id,
                            oref: t
                        });
                        var l = n[s.id];
                        f.logEvent("telemetry_new_comment", {
                            commentId: s.id,
                            stream: r,
                            thread: l
                        });
                        break;
                    case Oe.name:
                        e.api.logEvent("reply_to_comment", {
                            commentId: s.id,
                            oref: t,
                            threadId: o.threadId
                        });
                        var l = n[o.threadId];
                        f.logEvent("telemetry_reply_to_comment", {
                            commentId: s.id,
                            stream: r,
                            thread: l
                        });
                        break;
                    case Le.name:
                        e.api.logEvent("delete_comment", {
                            commentId: o.commentId,
                            oref: t,
                            threadId: o.threadId
                        });
                        var l = n[o.threadId];
                        f.logEvent("telemetry_delete_comment", {
                            commentId: o.commentId,
                            stream: r,
                            thread: l
                        });
                        break;
                    case Ne.name:
                        e.api.logEvent("edit_comment", {
                            commentId: o.commentId,
                            oref: t,
                            threadId: o.threadId
                        });
                        var l = n[o.threadId];
                        f.logEvent("telemetry_edit_comment", {
                            commentId: o.commentId,
                            stream: r,
                            thread: l
                        });
                        break;
                    case ze.name:
                        e.api.logEvent("resolve_thread", {
                            oref: t,
                            threadId: o.threadId
                        });
                        var l = n[o.threadId];
                        f.logEvent("telemetry_resolve_thread", {
                            stream: r,
                            thread: l
                        });
                        break;
                    case Ke.name:
                        e.api.logEvent("unresolve_thread", {
                            oref: t,
                            threadId: o
                        });
                        var l = n[o];
                        f.logEvent("telemetry_unresolve_thread", {
                            stream: r,
                            thread: l
                        });
                        break;
                    case Ve.name:
                        var c = o.origin === d.MarkThreadReadOrigin.ThreadActivated ? "read_thread" : "mark_thread_as_read";
                        e.api.logEvent(c, {
                            oref: t,
                            threadId: o.threadId
                        });
                        var l = n[o.threadId];
                        f.logEvent("telemetry_" + c, {
                            stream: r,
                            thread: l
                        });
                        break;
                    case Be.name:
                        e.api.logEvent("mark_thread_as_unread", {
                            oref: t,
                            threadId: o
                        });
                        var l = n[o];
                        f.logEvent("telemetry_mark_thread_as_unread", {
                            stream: r,
                            thread: l
                        });
                        break;
                    case st.name:
                        e.api.logEvent("subscribe", {
                            oref: t
                        }), f.logEvent("telemetry_subscribe", {
                            stream: r
                        });
                        break;
                    case dt.name:
                        e.api.logEvent("unsubscribe", {
                            oref: t
                        }), f.logEvent("telemetry_unsubscribe", {
                            stream: r
                        })
                }
            }
        }), V(function(e, t) {
            switch (e) {
                case Me.name:
                case Oe.name:
                case Ve.name:
                case Be.name:
                case ze.name:
                case Ke.name:
                    return _.threadActionCompleted(e, t);
                case Le.name:
                case Ne.name:
                    return _.commentActionCompleted(e, t)
            }
        }), y.dispatchMiddleware()),
        ee = J("SetContext"),
        te = y.syncHandler(ee),
        re = J("SetContextStatus"),
        ne = y.syncHandler(re),
        ie = X("ListComments"),
        oe = function(e, n) {
            return void 0 === e && (e = !1), void 0 === n && (n = !0),
                function(i, a) {
                    return r.__awaiter(K, void 0, void 0, function() {
                        var _, h, g, w, y, S, P, C, k, I, x, F, O, R, L, D, N, U, V, W, B, j, z, q, K, H, Y, G;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (_ = a(), h = v.getContext(_), !h) return [2];
                                    i({
                                        type: ie.actionTypes.request
                                    }), g = h.stream, w = h.viewer, y = w ? new s.Comments2Api(w.id, g) : new s.Comments2LoggedOutApi(g), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 6, , 7]), [4, y.listComments(e, v.getCursor(_))];
                                case 2:
                                    if (S = r.sent(), P = S.bolt_info, C = S.cursor, k = S.status, I = S.supported_enhancements, x = S.threads, F = S.users, O = S.permissions, R = +new Date, L = v.getContextStatus(_), D = k[".tag"], N = "enabled" === D || "readonly" === D, L === d.Comments2ContextStatus.Pending && N && (U = v.getData(_), V = U.perfEvents && U.perfEvents.setContextTime || 0, i(t.Actions.logSimplePerfEvent("initial_list_completed_ms", R - V))), W = a(), B = v.getContext(W), !m.isContextSame(B, h)) return [2];
                                    if (O && (i(rt({
                                            canEnable: O.can_enable_commenting
                                        })), i(at({
                                            canSubscribe: O.can_subscribe,
                                            isSubscribed: O.is_subscribed
                                        })), i(et(O.can_see_comment_editor)), i(N ? E.enableMode(l.FileViewerMode.Commenting) : E.disableMode(l.FileViewerMode.Commenting))), I && (j = I.time_based_annotations, z = I.time_based_annotations_upsell_tooltip_variant, q = (void 0 === z ? {
                                            ".tag": "other"
                                        } : z)[".tag"], j && i(Ge()), "other" !== q && i(Xe(q))), K = n ? T() : void 0, L === d.Comments2ContextStatus.Pending) switch (k[".tag"]) {
                                        case "disabled":
                                            H = null != O && O.can_enable_commenting, A(i, h, H), K && p.showErrorSnackbar({
                                                message: o._("Comments are disabled on this file.")
                                            });
                                            break;
                                        case "enabled":
                                            i(it({
                                                listCompleteTime: R
                                            })), i(ne(d.Comments2ContextStatus.FullyEnabled)), c.store.dispatch(b.setComments2ShownState({
                                                commentCount: x.filter(function(e) {
                                                    return !e.resolved
                                                }).length
                                            }));
                                            break;
                                        case "readonly":
                                            i(it({
                                                listCompleteTime: R
                                            })), i(ne(d.Comments2ContextStatus.ReadOnly)), c.store.dispatch(b.setComments2ShownState({
                                                commentCount: x.filter(function(e) {
                                                    return !e.resolved
                                                }).length
                                            }));
                                            break;
                                        case "comments1":
                                            i(ne(d.Comments2ContextStatus.Comments1))
                                    }
                                    return v.isEnabled(_) || L === d.Comments2ContextStatus.Pending && ("enabled" === k[".tag"] || "readonly" === k[".tag"]) ? [4, i(M(P))] : [3, 5];
                                case 3:
                                    return r.sent(), Y = u.streamToRevision(g), [4, i({
                                        type: ie.actionTypes.success,
                                        payload: {
                                            authors: F,
                                            cursor: C,
                                            threads: x,
                                            currentRevision: Y
                                        }
                                    })];
                                case 4:
                                    r.sent(), K && i(t.Actions.activateComment(K)), r.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return G = r.sent(), G instanceof s.Comments2Error && (G.code === s.ErrorCode.FILE_NOT_FOUND ? i(ne(d.Comments2ContextStatus.Disabled)) : w && y instanceof s.Comments2Api && f.logErrorEvent((G.message, ": " + G.message), {
                                        stream: g
                                    })), i({
                                        type: ie.actionTypes.error,
                                        error: G
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }
        },
        ae = J("ActivateThread"),
        se = y.syncHandler(ae),
        le = function(e, t) {
            return function(r, n) {
                var i = n();
                if (v.getIsComments2Ready(i)) {
                    var o = v.getDisplayedThreadsForLayer(i, e.page);
                    r(pe());
                    var a = m.getThreadForNumberedAnnotationAtPoint(e, o, t);
                    a && r(P({
                        thread: a,
                        wasPreviewLayerClick: !0
                    }))
                }
            }
        },
        ce = function(e) {
            return function(t) {
                return r.__awaiter(K, void 0, void 0, function() {
                    var n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = c.store.getState().sidebar, n.open ? [3, 2] : [4, c.store.dispatch(b.open("annotation_select"))];
                            case 1:
                                r.sent(), r.label = 2;
                            case 2:
                                return "comments" === n.activeTab ? [3, 4] : [4, c.store.dispatch(b.selectTab("comments"))];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                return t(P(e)), [2]
                        }
                    })
                })
            }
        },
        ue = function(e) {
            return function(t, r) {
                var n = v.getThreads(r()),
                    i = m.findCommentThread(n, e);
                !i || i.comment.deleted ? p.showErrorSnackbar({
                    message: o._("That comment has been deleted.")
                }) : i.thread.resolved && p.showErrorSnackbar({
                    message: o._("That comment has been resolved.")
                }), i && t(P({
                    thread: i.thread,
                    pendingAnnotationInfo: m.getAnnotationInfoForThread(i.thread)
                }))
            }
        },
        de = Q("DeactivateAllThreads"),
        pe = y.syncHandler(de),
        me = X("CheckOnboardingStatus"),
        fe = $(me, function(e, t) {
            return t.api.checkOnboardingStatus()
        }),
        _e = X("CheckUpsellExperimentDismissed"),
        ve = $(_e, function(e, t) {
            return t.api.checkUpsellExperiment()
        }),
        he = X("GetStickers"),
        ge = $(he, function(e, t) {
            return t.api.getStickers()
        }),
        we = J("HoverAnnotation"),
        ye = y.syncHandler(we),
        be = function(e, t) {
            return function(r, n) {
                var i = n();
                if (v.getIsComments2Ready(i)) {
                    var o = v.getDisplayedThreadsForLayer(i, e.page),
                        a = m.getThreadForNumberedAnnotationAtPoint(e, o, t);
                    v.getHoverThreadId(i) !== (a && a.id) && r(ye(a && a.id))
                }
            }
        },
        Ee = X("MarkOnboarded"),
        Se = $(Ee, function(e, t) {
            return t.api.markHasOnboarded(e)
        }),
        Pe = X("DismissUpsellExperiment"),
        Te = $(Pe, function(e, t) {
            return t.api.dismissUpsellExperiment()
        }),
        Ce = J("DismissOnboarding"),
        ke = y.syncHandler(Ce),
        Ie = function(e) {
            return function(t, r) {
                v.getOnboardingVariants(r())[e] && t(Se(e))
            }
        },
        xe = J("MarkModalVariantShown"),
        Ae = y.syncHandler(xe),
        Me = X("CreateThread"),
        Fe = $(Me, function(e, t) {
            var r = e.annotation,
                n = (e.author, e.content),
                i = (e.guid, e.source),
                o = t.api,
                a = t.context.stream,
                s = u.iCommentContentToUserSubmittedComment({
                    annotation: r,
                    content: n,
                    stream: a
                });
            return o.createThread(s, i)
        }),
        Oe = X("ReplyToThread"),
        Re = $(Oe, function(e, t) {
            var r = (e.author, e.content),
                n = (e.guid, e.threadId),
                i = t.api,
                o = t.context.stream,
                a = u.iCommentContentToUserSubmittedComment({
                    content: r,
                    stream: o
                });
            return i.replyToThread(a, n)
        }),
        Le = X("DeleteComment"),
        De = $(Le, function(e, t) {
            var r = e.commentId;
            e.threadId;
            return t.api.deleteComment(r)
        }),
        Ne = X("EditComment"),
        Ue = $(Ne, function(e, t) {
            var r = e.commentId,
                n = e.content,
                i = (e.threadId, t.api),
                o = t.context.stream,
                a = u.iCommentContentToUserSubmittedComment({
                    content: n,
                    stream: o
                });
            return i.editComment(r, a)
        }),
        Ve = X("MarkThreadRead"),
        We = $(Ve, function(e, t) {
            var r = (e.origin, e.threadId);
            return t.api.markThreadRead(r)
        }),
        Be = X("MarkThreadUnread"),
        je = $(Be, function(e, t) {
            return t.api.markThreadUnread(e)
        }),
        ze = X("MarkThreadResolved"),
        qe = $(ze, function(e, t) {
            var r = e.threadId;
            return t.api.markThreadResolved(r)
        }),
        Ke = X("MarkThreadUnresolved"),
        He = $(Ke, function(e, t) {
            return t.api.markThreadUnresolved(e)
        }),
        Ye = Q("EnablePlayerIntegration"),
        Ge = y.syncHandler(Ye),
        Ze = J("SetUpsellTooltipVariant"),
        Xe = y.syncHandler(Ze),
        Je = X("DismissUpsellTooltip"),
        Qe = $(Je, function(e, t) {
            return t.api.dismissUpsellTooltip()
        }),
        $e = J("SetCanSeeCommentEditor"),
        et = y.syncHandler($e),
        tt = J("RecordEnabledStatus"),
        rt = y.syncHandler(tt),
        nt = J("SetPerfData"),
        it = y.syncHandler(nt),
        ot = J("SetSubscriptionStatus"),
        at = y.syncHandler(ot),
        st = X("Subscribe"),
        lt = $(st, function(e, t) {
            return t.api.subscribe()
        }),
        ct = Q("ToggleShowResolved"),
        ut = y.syncHandler(ct),
        dt = X("Unsubscribe"),
        pt = $(dt, function(e, t) {
            return t.api.unsubscribe()
        }),
        mt = J("UpdateDocumentCurrentPage"),
        ft = y.syncHandler(mt),
        _t = J("UpdateEditorIsEmpty"),
        vt = y.syncHandler(_t),
        ht = J("UpdatePlayerCurrentTime"),
        gt = y.syncHandler(ht),
        wt = J("DocMetadataLoad"),
        yt = y.syncHandler(wt),
        bt = J("SetPendingNumberedAnnotation"),
        Et = y.syncHandler(bt),
        St = Q("ClearPendingNumberedAnnotation"),
        Pt = y.syncHandler(St),
        Tt = Q("SetPendingNumberedAnnotationMayBeOffscreen"),
        Ct = y.syncHandler(Tt),
        kt = Q("RequestEditorFocus"),
        It = y.syncHandler(kt),
        xt = Q("FulfillEditorFocusRequest"),
        At = y.syncHandler(xt),
        Mt = J("TrackSidebarCommentsVisibility"),
        Ft = y.syncHandler(Mt),
        Ot = J("ResetStore"),
        Rt = y.syncHandler(Ot);
    t.ActionTypes = {
        SetContext: ee,
        SetContextStatus: re,
        ActivateThread: ae,
        CheckOnboardingStatus: me,
        CheckUpsellExperimentDismissed: _e,
        CreateThread: Me,
        DeactivateAllThreads: de,
        DeleteComment: Le,
        DismissUpsellTooltip: Je,
        EditComment: Ne,
        EnablePlayerIntegration: Ye,
        ListComments: ie,
        HoverThread: we,
        MarkOnboarded: Ee,
        DismissOnboarding: Ce,
        DismissUpsellExperiment: Pe,
        GetStickers: he,
        MarkModalVariantShown: xe,
        MarkThreadRead: Ve,
        MarkThreadResolved: ze,
        MarkThreadUnread: Be,
        MarkThreadUnresolved: Ke,
        RecordEnabledStatus: tt,
        ReplyToThread: Oe,
        SetCanSeeCommentEditor: $e,
        SetPerfData: nt,
        SetSubscriptionStatus: ot,
        SetUpsellTooltipVariant: Ze,
        Subscribe: st,
        ToggleShowResolved: ct,
        Unsubscribe: dt,
        UpdateDocumentCurrentPage: mt,
        UpdateEditorIsEmpty: _t,
        UpdatePlayerCurrentTime: ht,
        DocMetadataLoad: wt,
        SetPendingNumberedAnnotation: bt,
        ClearPendingNumberedAnnotation: St,
        SetPendingNumberedAnnotationMayBeOffscreen: Tt,
        RequestEditorFocus: kt,
        FulfillEditorFocusRequest: xt,
        TrackSidebarCommentsVisibility: Mt,
        ResetStore: Ot
    }, t.Actions = {
        setContextStatus: ne,
        setFileContext: F,
        activateComment: ue,
        activateThread: se,
        activateThreadAndMarkAsRead: P,
        activateThreadByLayerClick: le,
        activateThreadByMarkerClick: ce,
        checkOnboardingStatus: fe,
        checkUpsellExperimentDismissed: ve,
        createThread: Fe,
        deactivateAllThreads: pe,
        deleteComment: De,
        disableCommenting: I,
        dismissUpsellTooltip: Qe,
        editComment: Ue,
        enableCommenting: C,
        enablePlayerIntegration: Ge,
        hoverThread: ye,
        hoverThreadByLayer: be,
        getStickers: ge,
        listComments: oe,
        markOnboarded: Se,
        markOnboardedIfUnmarked: Ie,
        dismissOnboarding: ke,
        dismissUpsellExperiment: Te,
        markModalVariantShown: Ae,
        markThreadRead: We,
        markThreadResolved: qe,
        markThreadUnread: je,
        markThreadUnresolved: He,
        recordEnabledStatus: rt,
        replyToThread: Re,
        setCanSeeCommentEditor: et,
        setPerfData: it,
        setSubscriptionStatus: at,
        setUpsellTooltipVariant: Xe,
        subscribe: lt,
        toggleShowResolved: ut,
        unsubscribe: pt,
        updateDocumentCurrentPage: ft,
        updateEditorIsEmpty: vt,
        updatePlayerCurrentTime: gt,
        setPendingNumberedAnnotation: Et,
        clearPendingNumberedAnnotation: Pt,
        setPendingNumberedAnnotationMayBeOffscreen: Ct,
        requestEditorFocus: It,
        fulfillEditorFocusRequest: At,
        trackSidebarCommentsVisibility: Ft,
        openVersionHistory: W,
        docMetadataLoad: yt,
        logEvent: B,
        logPerfEvent: z,
        logSimplePerfEvent: q,
        resetStore: Rt
    }
}), define("modules/clean/react/comments2/data/api", ["require", "exports", "tslib", "modules/clean/api_v2/error", "modules/clean/api_v2/user_client", "modules/clean/api_v2/noauth_client", "modules/core/exception"], function(e, t, r, n, i, o, a) {
    "use strict";

    function s(e, t) {
        if (e instanceof n.ApiError) {
            var r = t;
            return e.message && (r += ". Detailed message: " + e.message.toString()), new c(e.error[".tag"], r, e)
        }
        return e
    }

    function l(e) {
        var t = {
            ".tag": e.type
        };
        return e.linkUrl ? {
            type: t,
            identifier: {
                ".tag": "shared_link_details",
                url: e.linkUrl
            }
        } : {
            type: t,
            identifier: {
                ".tag": "file_path_or_id",
                file_path_or_id: e.id
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a);
    var c = (function() {
        function e(e, t, r) {
            this.code = e, this.message = t, this.apiError = r
        }
        return e
    })();
    t.Comments2Error = c;
    (function(e) {
        e.FILE_NOT_FOUND = "file_not_found", e.PERMISSION_DENIED = "permission_denied", e.BAD_REQUEST = "bad_request"
    })(t.ErrorCode || (t.ErrorCode = {}));
    var u = (function() {
        function e(e) {
            this.routes = (new o.NoAuthApiV2Client).ns("comments2"), this.params = {}, this.stream = l(e)
        }
        return e.prototype.listComments = function(e, t) {
            return void 0 === e && (e = !1), this.routes.rpc("logged_out/list_comments", {
                stream: this.stream,
                cursor: t,
                include_permissions: e
            }, this.params).catch(function(e) {
                throw s(e, "/logged_out/list_comments did not complete successfully")
            })
        }, e.prototype.logPerfEvent = function(e, t, r) {
            return void 0 === r && (r = {}), this.logPerfEventImpl(e, t, r)
        }, e.prototype.logPerfEventImpl = function(e, t, r) {
            var n = r.threadId,
                i = r.commentId,
                o = r.oref,
                l = r.errorMessage,
                c = {
                    event: e,
                    value: t,
                    stream: this.stream,
                    thread_id: n,
                    comment_id: i,
                    error_message: l,
                    oref: o
                };
            return this.routes.rpc("log_perf_event", c, this.params).catch(function(e) {
                throw a.reportStack("comments2 perf logging failed", {
                    severity: a.SEVERITY.NONCRITICAL,
                    tags: ["comments2_logging"],
                    exc_extra: c
                }), s(e, "/log_perf_event did not complete successfully")
            })
        }, e
    })();
    t.Comments2LoggedOutApi = u;
    var d = (function() {
        function e(e, t) {
            var r = new i.UserApiV2Client;
            this.routes = r.ns("comments2"), this.stickerRoutes = r.ns("stickers"), this.params = {
                subjectUserId: e
            }, this.stream = l(t)
        }
        return e.prototype.getStickers = function() {
            return this.stickerRoutes.rpc("get_stickers", void 0, this.params).catch(function(e) {
                throw s(e, "/get_stickers did not complete successfully")
            })
        }, e.prototype.checkOnboardingStatus = function() {
            return this.routes.rpc("check_onboarding_status", void 0, this.params).catch(function(e) {
                throw s(e, "/check_onboarding_status did not complete successfully")
            })
        }, e.prototype.checkUpsellExperiment = function() {
            return this.routes.rpc("check_upsell_experiment", void 0, this.params).catch(function(e) {
                throw s(e, "/check_onboarding_status did not complete successfully")
            })
        }, e.prototype.createThread = function(e, t) {
            return this.routes.rpc("add_comment", {
                stream: this.stream,
                comment: e,
                source: t
            }, this.params).catch(function(e) {
                throw s(e, "/add_comment (new comment) did not complete successfully")
            })
        }, e.prototype.deleteComment = function(e) {
            return this.routes.rpc("delete_comment", {
                stream: this.stream,
                id: e
            }, this.params).catch(function(e) {
                throw s(e, "/delete_comment did not complete successfully")
            })
        }, e.prototype.disableCommenting = function() {
            return this.routes.rpc("disable_commenting", {
                stream: this.stream
            }, this.params).catch(function(e) {
                throw s(e, "/disable_commenting did not complete successfully")
            })
        }, e.prototype.dismissUpsellExperiment = function() {
            return this.routes.rpc("dismiss_upsell_experiment", void 0, this.params).catch(function(e) {
                throw s(e, "/dismiss_upsell_tooltip did not complete successfully")
            })
        }, e.prototype.dismissUpsellTooltip = function() {
            return this.routes.rpc("dismiss_upsell_tooltip", void 0, this.params).catch(function(e) {
                throw s(e, "/dismiss_upsell_tooltip did not complete successfully")
            })
        }, e.prototype.editComment = function(e, t) {
            return this.routes.rpc("edit_comment", {
                stream: this.stream,
                id: e,
                comment: t
            }, this.params).catch(function(e) {
                throw s(e, "/edit_comment did not complete successfully")
            })
        }, e.prototype.enableCommenting = function() {
            return this.routes.rpc("enable_commenting", {
                stream: this.stream
            }, this.params).catch(function(e) {
                throw s(e, "/enable_commenting did not complete successfully")
            })
        }, e.prototype.listComments = function(e, t) {
            return void 0 === e && (e = !1), this.routes.rpc("list_comments", {
                stream: this.stream,
                cursor: t,
                include_permissions: e
            }, this.params).catch(function(e) {
                throw s(e, "/list_comments did not complete successfully")
            })
        }, e.prototype.logEvent = function(e, t) {
            return void 0 === t && (t = {}), this.logEventImpl(e, t)
        }, e.prototype.logPerfEvent = function(e, t) {
            return this.logPerfEventImpl(e, t)
        }, e.prototype.logSimplePerfEvent = function(e, t) {
            return this.logPerfEvent({
                ".tag": e
            }, t)
        }, e.prototype.logEventImpl = function(e, t) {
            var r = t.threadId,
                n = t.commentId,
                i = t.oref,
                o = t.errorMessage,
                l = {
                    event: {
                        ".tag": e
                    },
                    stream: this.stream,
                    thread_id: r,
                    comment_id: n,
                    error_message: o,
                    oref: i,
                    product_surface: {
                        ".tag": "file_preview"
                    }
                };
            return this.routes.rpc("log_event", l, this.params).catch(function(e) {
                throw a.reportStack("comments2 logging failed", {
                    severity: a.SEVERITY.NONCRITICAL,
                    tags: ["comments2_logging"],
                    exc_extra: l
                }), s(e, "/log_event did not complete successfully")
            })
        }, e.prototype.logPerfEventImpl = function(e, t) {
            var r = {
                event: e,
                value: t,
                stream: this.stream
            };
            return this.routes.rpc("log_perf_event", r, this.params).catch(function(e) {
                throw a.reportStack("comments2 perf logging failed", {
                    severity: a.SEVERITY.NONCRITICAL,
                    tags: ["comments2_logging"],
                    exc_extra: r
                }), s(e, "/log_perf_event did not complete successfully")
            })
        }, e.prototype.markHasOnboarded = function(e) {
            var t = {
                ".tag": e
            };
            return this.routes.rpc("mark_has_onboarded", {
                type: t
            }, this.params).catch(function(e) {
                throw s(e, "/mark_has_onboarded did not complete successfully")
            })
        }, e.prototype.markThreadRead = function(e) {
            return this.routes.rpc("mark_thread_read", {
                stream: this.stream,
                id: e
            }, this.params).catch(function(e) {
                throw s(e, "/mark_thread_read did not complete successfully")
            })
        }, e.prototype.markThreadUnread = function(e) {
            return this.routes.rpc("mark_thread_unread", {
                stream: this.stream,
                id: e
            }, this.params).catch(function(e) {
                throw s(e, "/mark_thread_unread did not complete successfully")
            })
        }, e.prototype.markThreadResolved = function(e) {
            return this.routes.rpc("resolve_thread", {
                stream: this.stream,
                id: e
            }, this.params).catch(function(e) {
                throw s(e, "/resolve_thread did not complete successfully")
            })
        }, e.prototype.markThreadUnresolved = function(e) {
            return this.routes.rpc("unresolve_thread", {
                stream: this.stream,
                id: e
            }, this.params).catch(function(e) {
                throw s(e, "/unresolve_thread did not complete successfully")
            })
        }, e.prototype.replyToThread = function(e, t) {
            return this.routes.rpc("add_comment", {
                stream: this.stream,
                comment: e,
                thread_id: t
            }, this.params).catch(function(e) {
                throw s(e, "/add_comment (reply comment) did not complete successfully")
            })
        }, e.prototype.subscribe = function() {
            return this.routes.rpc("subscribe", {
                stream: this.stream
            }, this.params).catch(function(e) {
                throw s(e, "/subscribe did not complete successfully")
            })
        }, e.prototype.unsubscribe = function() {
            return this.routes.rpc("unsubscribe", {
                stream: this.stream
            }, this.params).catch(function(e) {
                throw s(e, "/unsubscribe did not complete successfully")
            })
        }, e
    })();
    t.Comments2Api = d
}), define("modules/clean/react/comments2/data/initial_state", ["require", "exports", "modules/clean/react/comments2/data/types"], function(e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.INITIAL_STATE = {
        context: void 0,
        data: {
            editorIsEmpty: !0,
            threads: {},
            authors: {},
            activatedThreadId: void 0,
            documentRectangleToMakeVisible: void 0,
            hoverThreadId: void 0,
            cursor: void 0,
            modalVariantsShown: (n = {}, n[r.ModalVariant.EmailVerifyModal] = !1, n[r.ModalVariant.SignUpModal] = !1, n),
            onboardingVariants: {
                premium_av_comments_pane_surface: !1,
                premium_av_preview_surface: !1,
                non_premium_av_comments_pane_surface: !1,
                not_annotatable_file_comments_pane_surface: !1,
                how_to_at_mention_comments_pane_surface: !1,
                image_preview_surface: !1,
                document_preview_surface: !1,
                share_as_comment: !1
            },
            pendingAnnotationInfo: {
                playerCurrentTime: 0,
                annotationMayBeOffscreen: !1
            },
            showResolved: !1,
            upsellExperimentNotDismissed: !1,
            canSeeCommentEditor: !1,
            playerIntegrationEnabled: !1,
            enabledStatus: {
                canEnable: !1
            },
            subscriptionStatus: {
                canSubscribe: !1,
                isSubscribed: !1
            },
            requestEditorFocus: !1,
            visibleInSidebar: !0,
            perfEvents: {},
            upsellTooltipVariant: void 0,
            stickers: void 0
        },
        statuses: {}
    }
}), define("modules/clean/react/comments2/data/logger", ["require", "exports", "tslib", "external/lodash", "modules/clean/logging/hive/schemas/web-comments2", "modules/clean/logging/telemetry", "modules/clean/previews/util", "modules/clean/react/comments2/data/util", "modules/clean/react/comments2/util", "modules/constants/python", "modules/core/browser", "modules/core/browser_detection"], function(e, t, r, n, i, o, a, s, l, c, u, d) {
    "use strict";

    function p(e, n) {
        var o = n.commentId,
            c = n.stream,
            u = n.thread,
            d = r.__assign({
                event: e
            }, f());
        o && (d.comment_gid = o), u && (d.thread_gid = u.id, d.is_annotation = !!u.annotation, s.isThreadWithTimecodeAnnotation(u) && (d.annotation_type = "time", d.time_comment_offset = u.annotation.time), s.isThreadWithDocumentAnnotation(u) && (d.annotation_type = u.annotation.regionType, d.page = u.annotation.regions[0].page, d.annotation_position = l.isFullPageAnnotation(u.annotation) ? _.PageLevel : _.Targeted), s.isThreadWithImageAnnotation(u) && (d.annotation_type = "rectangle", d.annotation_position = l.isFullImageAnnotation(u.annotation) ? _.PageLevel : _.Targeted)), c && (d.stream_gid = c.id, d.file_obj_id = c.id, d.ns_id = c.ns_id, d.file_size = c.bytes, d.file_extension = a.getWhitelistedExtension(c.filename)), t.hiveLogger.log(new i.Comments2LoggingTableRow(d))
    }

    function m(e, n) {
        var o = n.stream,
            s = r.__assign({
                event: "comment_error",
                error_message: e
            }, f());
        o && (s.stream_gid = o.id, s.file_obj_id = o.id, s.ns_id = o.ns_id, s.file_size = o.bytes, s.file_extension = a.getWhitelistedExtension(o.filename)), t.hiveLogger.log(new i.Comments2LoggingTableRow(s))
    }

    function f() {
        var e = u.get_uri().getQuery().oref,
            t = n.findKey(c.OREF_CONSTANTS, function(t) {
                return t === e
            });
        t = t && t.toLowerCase();
        var r = {
            oref_name: t,
            platform: "web",
            is_mobile: d.is_mobile_or_tablet(),
            product_surface: "file_preview"
        };
        return e === c.OREF_CONSTANTS.DESKTOP_HARMONY && (r.referral_source = "badge"), r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), o = r.__importStar(o), u = r.__importStar(u), t.hiveLogger = new o.HiveLogger;
    var _;
    (function(e) {
        e.PageLevel = "page-level", e.Targeted = "targeted"
    })(_ || (_ = {})), t.logEvent = p, t.logErrorEvent = m
}), define("modules/clean/react/comments2/data/perf_util", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t) {
        return {
            ".tag": "thread_action_completed_ms",
            action: e,
            error_message: t
        }
    }

    function n(e, t) {
        return {
            ".tag": "comment_action_completed_ms",
            action: e,
            error_message: t
        }
    }

    function i() {
        return {
            ".tag": "mentions_query_completed_ms"
        }
    }

    function o() {
        return +new Date
    }

    function a(e, t) {
        var r = o();
        return function(n) {
            e(n), t(o() - r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.threadActionCompleted = r, t.commentActionCompleted = n, t.mentionsQueryCompleted = i, t.currentTime = o, t.withTiming = a
}), define("modules/clean/react/comments2/data/reducer", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/comments2/data/actions", "modules/clean/react/comments2/data/initial_state", "modules/clean/react/comments2/data/util", "modules/clean/react/comments2/data/reducer_helper", "modules/clean/react/comments2/data/types", "comments2/transforms"], function(e, t, r, n, i, o, a, s, l, c) {
    "use strict";

    function u(e, t, r) {
        return e.map(function(e) {
            return e.id === t ? r(e) : e
        })
    }

    function d(e, t) {
        var n;
        return r.__assign({}, e, {
            threads: r.__assign({}, e.threads, (n = {}, n[t.id] = t, n))
        })
    }

    function p(e, t, r) {
        var i = e.threads[t];
        return d(e, n.assignIn({}, i, r))
    }

    function m(e, t, n, i) {
        var o, a = t.threads[n];
        return p(t, n, a.pending ? r.__assign({}, a, (o = {}, o[i] = a.pending.originalValue, o.pending = r.__assign({}, a.pending, {
            error: e
        }), o)) : a)
    }

    function f(e, t, r, n) {
        return p(e, r, {
            comments: u(e.threads[r].comments, t, n)
        })
    }

    function _(e, t, n, i, o) {
        return f(t, n, i, function(t) {
            var n;
            return t.pending ? r.__assign({}, t, (n = {}, n[o] = t.pending.originalValue, n.pending = r.__assign({}, t.pending, {
                error: e
            }), n)) : t
        })
    }

    function v(e, t) {
        void 0 === e && (e = o.INITIAL_STATE);
        var r = w(e.context, t),
            n = b(e.data, t),
            i = h(e.statuses, t);
        return r !== e.context || n !== e.data || i !== e.statuses ? {
            context: r,
            data: n,
            statuses: i
        } : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), c = r.__importStar(c);
    var h = s.createStatusReducer(i.ActionTypes),
        g = s.createActionReducer(),
        w = s.createReducerFrom(g(i.ActionTypes.SetContext, function(e, t) {
            return t ? r.__assign({}, t, {
                status: l.Comments2ContextStatus.Pending
            }) : void 0
        }), g(i.ActionTypes.SetContextStatus, function(e, t) {
            return r.__assign({}, e, {
                status: t
            })
        })),
        y = s.createActionReducer(),
        b = s.createReducerFrom(y(i.ActionTypes.ActivateThread, function(e, t) {
            var n = t.thread,
                i = t.pendingAnnotationInfo,
                o = t.wasPreviewLayerClick;
            return r.__assign({}, e, {
                activatedThreadId: n.id,
                documentRectangleToMakeVisible: o ? void 0 : a.documentRectangleFromThread(n),
                pendingAnnotationInfo: i || e.pendingAnnotationInfo
            })
        }), y(i.ActionTypes.DeactivateAllThreads, function(e) {
            return n.assignIn({}, e, {
                activatedThreadId: void 0,
                activatedDocumentAnnotationRectangle: void 0
            })
        }), y(i.ActionTypes.ListComments, function(e, t, n) {
            var i = r.__assign({}, e.authors, c.usersToIUserMap(t.authors)),
                o = r.__assign({}, e.threads, c.threadsToIThreadMap(t.threads, i, t.currentRevision));
            return r.__assign({}, e, {
                threads: o,
                authors: i,
                cursor: t.cursor
            })
        }), y(i.ActionTypes.CreateThread, {
            Request: function(e, t, n) {
                var o, s = new Date,
                    l = n.annotation,
                    c = n.author,
                    u = n.content,
                    d = n.guid,
                    p = {
                        id: d,
                        threadId: d,
                        timestamp: s,
                        author: c,
                        content: u,
                        revisionInfo: {
                            isCurrent: !0
                        },
                        userPermissions: {
                            canDelete: !1,
                            canEdit: !1
                        }
                    },
                    m = {
                        id: d,
                        timestamp: s,
                        read: !0,
                        resolved: !1,
                        comments: [p],
                        annotation: l
                    },
                    f = r.__assign({}, m, {
                        pending: {
                            action: i.ActionTypes.CreateThread.name,
                            originalValue: void 0,
                            pendingValue: m
                        }
                    }),
                    _ = e.pendingAnnotationInfo.annotationMayBeOffscreen ? a.documentRectangleFromThread(m) : void 0;
                return r.__assign({}, e, {
                    activatedThreadId: d,
                    documentRectangleToMakeVisible: _,
                    threads: r.__assign({}, e.threads, (o = {}, o[d] = f, o))
                })
            },
            Success: function(e, t, n) {
                var i, o = n.guid,
                    a = e.threads,
                    s = o,
                    l = a[s],
                    c = r.__rest(a, ["symbol" == typeof s ? s : s + ""]),
                    d = u(l.comments, o, function(e) {
                        return r.__assign({}, e, {
                            id: t.id,
                            userPermissions: {
                                canDelete: !0,
                                canEdit: !(e.content.metadata[0] && "sticker" === e.content.metadata[0].type)
                            }
                        })
                    });
                return r.__assign({}, e, {
                    activatedThreadId: e.activatedThreadId === n.guid ? t.id : e.activatedThreadId,
                    threads: r.__assign({}, c, (i = {}, i[t.id] = r.__assign({}, l, {
                        id: t.id,
                        comments: d,
                        pending: void 0
                    }), i))
                })
            },
            Error: function(e, t, n) {
                var i = e.threads,
                    o = n.guid,
                    a = (i[o], r.__rest(i, ["symbol" == typeof o ? o : o + ""]));
                return r.__assign({}, e, {
                    threads: a
                })
            }
        }), y(i.ActionTypes.ReplyToThread, {
            Request: function(e, t, n) {
                var o, a = new Date,
                    s = n.author,
                    l = n.content,
                    c = n.guid,
                    u = n.threadId,
                    d = {
                        id: c,
                        threadId: u,
                        timestamp: a,
                        author: s,
                        content: l,
                        revisionInfo: {
                            isCurrent: !0
                        },
                        userPermissions: {
                            canDelete: !1,
                            canEdit: !1
                        }
                    },
                    p = e.threads[u],
                    m = r.__assign({}, p, {
                        read: !0,
                        comments: p.comments.concat([d])
                    }),
                    f = r.__assign({}, m, {
                        pending: {
                            action: i.ActionTypes.ReplyToThread.name,
                            originalValue: p,
                            pendingValue: m
                        }
                    });
                return r.__assign({}, e, {
                    activatedThreadId: u,
                    threads: r.__assign({}, e.threads, (o = {}, o[u] = f, o))
                })
            },
            Success: function(e, t, n) {
                var i, o = n.guid,
                    a = n.threadId,
                    s = e.threads[a],
                    l = u(s.comments, o, function(e) {
                        return r.__assign({}, e, {
                            id: t.id,
                            userPermissions: {
                                canDelete: !0,
                                canEdit: !(e.content.metadata[0] && "sticker" === e.content.metadata[0].type)
                            }
                        })
                    });
                return r.__assign({}, e, {
                    threads: r.__assign({}, e.threads, (i = {}, i[a] = r.__assign({}, s, {
                        comments: l,
                        pending: void 0
                    }), i))
                })
            },
            Error: function(e, t, n) {
                var i, o = e.threads[n.threadId],
                    a = o.comments.filter(function(e) {
                        return e.id !== n.guid
                    });
                return r.__assign({}, e, {
                    threads: r.__assign({}, e.threads, (i = {}, i[n.threadId] = r.__assign({}, o, {
                        comments: a,
                        pending: void 0
                    }), i))
                })
            }
        }), y(i.ActionTypes.DeleteComment, {
            Request: function(e, t, n) {
                return f(e, n.commentId, n.threadId, function(e) {
                    return r.__assign({}, e, {
                        deleted: !0,
                        pending: {
                            action: i.ActionTypes.DeleteComment.name,
                            originalValue: e.deleted,
                            pendingValue: !0
                        }
                    })
                })
            },
            Success: function(e, t, n) {
                return f(e, n.commentId, n.threadId, function(e) {
                    return r.__assign({}, e, {
                        pending: void 0
                    })
                })
            },
            Error: function(e, t, r) {
                return _(t, e, r.commentId, r.threadId, "deleted")
            }
        }), y(i.ActionTypes.EditComment, {
            Request: function(e, t, n) {
                return f(e, n.commentId, n.threadId, function(e) {
                    return r.__assign({}, e, {
                        content: n.content,
                        pending: {
                            action: i.ActionTypes.EditComment.name,
                            originalValue: e.content,
                            pendingValue: n.content
                        }
                    })
                })
            },
            Success: function(e, t, n) {
                return f(e, n.commentId, n.threadId, function(e) {
                    return r.__assign({}, e, {
                        pending: void 0
                    })
                })
            },
            Error: function(e, t, r) {
                return _(t, e, r.commentId, r.threadId, "content")
            }
        }), y(i.ActionTypes.SetPerfData, function(e, t) {
            return r.__assign({}, e, {
                perfEvents: r.__assign({}, e.perfEvents, t)
            })
        }), y(i.ActionTypes.CheckUpsellExperimentDismissed, function(e, t) {
            return r.__assign({}, e, {
                upsellExperimentNotDismissed: !t.has_dismissed
            })
        }), y(i.ActionTypes.CheckOnboardingStatus, function(e, t) {
            return r.__assign({}, e, {
                onboardingVariants: {
                    premium_av_comments_pane_surface: t.premium_av_comments_pane_surface === !1,
                    premium_av_preview_surface: t.premium_av_preview_surface === !1,
                    non_premium_av_comments_pane_surface: t.non_premium_av_comments_pane_surface === !1,
                    not_annotatable_file_comments_pane_surface: t.not_annotatable_file_comments_pane_surface === !1,
                    how_to_at_mention_comments_pane_surface: t.how_to_at_mention_comments_pane_surface === !1,
                    image_preview_surface: t.image_preview_surface === !1,
                    document_preview_surface: t.document_preview_surface === !1,
                    share_as_comment: t.share_as_comment === !1
                }
            })
        }), y(i.ActionTypes.MarkOnboarded, function(e, t, n) {
            var i;
            return r.__assign({}, e, {
                onboardingVariants: r.__assign({}, e.onboardingVariants, (i = {}, i[n] = !1, i))
            })
        }), y(i.ActionTypes.MarkModalVariantShown, function(e, t) {
            var n;
            return r.__assign({}, e, {
                modalVariantsShown: r.__assign({}, e.modalVariantsShown, (n = {}, n[t] = !0, n))
            })
        }), y(i.ActionTypes.DismissOnboarding, function(e) {
            return r.__assign({}, e, {
                onboardingVariants: n.mapValues(e.onboardingVariants, function() {
                    return !1
                })
            })
        }), y(i.ActionTypes.MarkThreadRead, {
            Request: function(e, t, r) {
                return p(e, r.threadId, {
                    read: !0,
                    pending: {
                        action: i.ActionTypes.MarkThreadRead.name,
                        originalValue: e.threads[r.threadId].read,
                        pendingValue: !0
                    }
                })
            },
            Success: function(e, t, r) {
                return p(e, r.threadId, {
                    pending: void 0
                })
            },
            Error: function(e, t, r) {
                return m(t, e, r.threadId, "read")
            }
        }), y(i.ActionTypes.MarkThreadUnread, {
            Request: function(e, t, r) {
                return p(e, r, {
                    read: !1,
                    pending: {
                        action: i.ActionTypes.MarkThreadUnread.name,
                        originalValue: e.threads[r].read,
                        pendingValue: !1
                    }
                })
            },
            Success: function(e, t, r) {
                return p(e, r, {
                    pending: void 0
                })
            },
            Error: function(e, t, r) {
                return m(t, e, r, "read")
            }
        }), y(i.ActionTypes.MarkThreadResolved, {
            Request: function(e, t, r) {
                var n = {
                    type: "with_details",
                    resolver: r.resolver,
                    resolvedTimestamp: new Date
                };
                return p(e, r.threadId, {
                    resolvedInfo: n,
                    pending: {
                        action: i.ActionTypes.MarkThreadResolved.name,
                        originalValue: e.threads[r.threadId].resolvedInfo,
                        pendingValue: n
                    }
                })
            },
            Success: function(e, t, r) {
                return p(e, r.threadId, {
                    pending: void 0
                })
            },
            Error: function(e, t, r) {
                return m(t, e, r.threadId, "resolvedInfo")
            }
        }), y(i.ActionTypes.MarkThreadUnresolved, {
            Request: function(e, t, r) {
                return p(e, r, {
                    resolvedInfo: void 0,
                    pending: {
                        action: i.ActionTypes.MarkThreadUnresolved.name,
                        originalValue: e.threads[r].resolvedInfo,
                        pendingValue: void 0
                    }
                })
            },
            Success: function(e, t, r) {
                return p(e, r, {
                    pending: void 0
                })
            },
            Error: function(e, t, r) {
                return m(t, e, r, "resolvedInfo")
            }
        }), y(i.ActionTypes.SetContext, function(e, t) {
            return r.__assign({}, e, n.pick(o.INITIAL_STATE.data, "activatedThreadId", "authors", "cursor", "documentMetadata", "enabledStatus", "pendingAnnotationInfo", "playerIntegrationEnabled", "requestEditorFocus", "canSeeCommentEditor", "subscriptionStatus", "threads"))
        }), y(i.ActionTypes.ToggleShowResolved, function(e) {
            return r.__assign({}, e, {
                showResolved: !e.showResolved
            })
        }), y(i.ActionTypes.UpdateEditorIsEmpty, function(e, t) {
            return r.__assign({}, e, {
                editorIsEmpty: t
            })
        }), y(i.ActionTypes.UpdateDocumentCurrentPage, function(e, t) {
            return r.__assign({}, e, {
                pendingAnnotationInfo: r.__assign({}, e.pendingAnnotationInfo, {
                    currentPageNumber: t
                })
            })
        }), y(i.ActionTypes.UpdatePlayerCurrentTime, function(e, t) {
            return r.__assign({}, e, {
                pendingAnnotationInfo: r.__assign({}, e.pendingAnnotationInfo, {
                    playerCurrentTime: t
                })
            })
        }), y(i.ActionTypes.HoverThread, function(e, t) {
            return r.__assign({}, e, {
                hoverThreadId: t
            })
        }), y(i.ActionTypes.SetPendingNumberedAnnotation, function(e, t) {
            return r.__assign({}, e, {
                pendingAnnotationInfo: r.__assign({}, e.pendingAnnotationInfo, {
                    numberedAnnotation: t,
                    annotationMayBeOffscreen: !1
                })
            })
        }), y(i.ActionTypes.ClearPendingNumberedAnnotation, function(e, t) {
            return r.__assign({}, e, {
                pendingAnnotationInfo: r.__assign({}, e.pendingAnnotationInfo, {
                    numberedAnnotation: void 0,
                    annotationMayBeOffscreen: !1
                })
            })
        }), y(i.ActionTypes.SetPendingNumberedAnnotationMayBeOffscreen, function(e) {
            return r.__assign({}, e, {
                pendingAnnotationInfo: r.__assign({}, e.pendingAnnotationInfo, {
                    annotationMayBeOffscreen: !0
                })
            })
        }), y(i.ActionTypes.TrackSidebarCommentsVisibility, function(e, t) {
            return r.__assign({}, e, {
                visibleInSidebar: t
            })
        }), y(i.ActionTypes.DocMetadataLoad, function(e, t) {
            return r.__assign({}, e, {
                documentMetadata: t
            })
        }), y(i.ActionTypes.RequestEditorFocus, function(e) {
            return r.__assign({}, e, {
                requestEditorFocus: !0
            })
        }), y(i.ActionTypes.FulfillEditorFocusRequest, function(e) {
            if (!e.requestEditorFocus) throw new Error("Fulfilling request for editor focus, but isnt requested in store");
            return r.__assign({}, e, {
                requestEditorFocus: !1
            })
        }), y(i.ActionTypes.EnablePlayerIntegration, function(e, t) {
            return r.__assign({}, e, {
                playerIntegrationEnabled: !0
            })
        }), y(i.ActionTypes.SetUpsellTooltipVariant, function(e, t) {
            return r.__assign({}, e, {
                upsellTooltipVariant: t
            })
        }), y(i.ActionTypes.DismissUpsellTooltip, {
            Request: function(e) {
                return r.__assign({}, e, {
                    upsellTooltipVariant: void 0
                })
            }
        }), y(i.ActionTypes.DismissUpsellExperiment, {
            Request: function(e) {
                return r.__assign({}, e, {
                    upsellExperimentNotDismissed: !1
                })
            }
        }), y(i.ActionTypes.SetCanSeeCommentEditor, function(e, t) {
            return r.__assign({}, e, {
                canSeeCommentEditor: t
            })
        }), y(i.ActionTypes.RecordEnabledStatus, function(e, t) {
            return r.__assign({}, e, {
                enabledStatus: n.merge({}, e.enabledStatus, t)
            })
        }), y(i.ActionTypes.SetSubscriptionStatus, function(e, t) {
            return r.__assign({}, e, {
                subscriptionStatus: t
            })
        }), y(i.ActionTypes.Subscribe, function(e) {
            return r.__assign({}, e, {
                subscriptionStatus: n.merge({}, e.subscriptionStatus, {
                    isSubscribed: !0
                })
            })
        }), y(i.ActionTypes.Unsubscribe, function(e) {
            return r.__assign({}, e, {
                subscriptionStatus: n.merge({}, e.subscriptionStatus, {
                    isSubscribed: !1
                })
            })
        }), y(i.ActionTypes.ResetStore, function(e, t) {
            return r.__assign({}, o.INITIAL_STATE.data)
        }), y(i.ActionTypes.GetStickers, function(e, t) {
            return r.__assign({}, e, {
                stickers: t.sticker_sets
            })
        }));
    t.reducer = v
}), define("modules/clean/react/comments2/data/reducer_helper", ["require", "exports", "tslib", "modules/clean/redux/types"], function(e, t, r, n) {
    "use strict";

    function i(e) {
        for (var t = {}, i = 0, o = Object.keys(e).map(function(t) {
                return e[t]
            }); i < o.length; i++) {
            var a = o[i];
            "async" === a.type && (t[a.actionTypes.request] = {
                name: a.name,
                status: n.ApiClientStatus.Request
            }, t[a.actionTypes.error] = {
                name: a.name,
                status: n.ApiClientStatus.Error
            })
        }
        return function(e, n) {
            var i, o = t[n.type];
            return o && (e = r.__assign({}, e, (i = {}, i[o.name] = o.status, i))), e
        }
    }

    function o() {
        function e(e, t) {
            switch (e.type) {
                case "async":
                    return "function" == typeof t ? [
                        [e.actionTypes.success, t]
                    ] : [t.Error && [e.actionTypes.error, t.Error], t.Request && [e.actionTypes.request, t.Request], t.Success && [e.actionTypes.success, t.Success]].filter(function(e) {
                        return e
                    });
                case "sync":
                    if ("function" == typeof t) return [
                        [e.actionType, t]
                    ]
            }
            throw new Error
        }
        return e
    }

    function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var r = {}, n = 0, i = e; n < i.length; n++)
            for (var o = i[n], a = 0, s = o; a < s.length; a++) {
                var l = s[a],
                    c = l[0],
                    u = l[1];
                r[c] || (r[c] = []), r[c].push(u)
            }
        return function(e, t) {
            for (var n = r[t.type], i = 0, o = n || []; i < o.length; i++) {
                var a = o[i],
                    s = t.meta && t.meta.args;
                e = a(e, "payload" in t ? t.payload : t.error, s)
            }
            return e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createStatusReducer = i, t.createActionReducer = o, t.createReducerFrom = a
}), define("modules/clean/react/comments2/data/selectors", ["require", "exports", "tslib", "external/lodash", "external/reselect", "modules/clean/redux/selectors", "modules/clean/redux/namespaces", "modules/clean/react/comments2/data/types", "modules/clean/react/comments2/data/util", "modules/clean/react/comments2/util", "modules/clean/react/file_viewer/data/selectors", "modules/clean/previews/constants", "modules/clean/previews/data/preview_type_util", "modules/clean/react/file_viewer/data/selectors", "comments2/transforms"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f) {
    "use strict";

    function _(e, t) {
        return e.filter(function(e) {
            var r = e.comments[0].revisionInfo;
            return r.isCurrent || !t || r.revision && r.revision.nsId === t.ns_id && r.revision.sjId <= t.sjid
        })
    }

    function v(e) {
        return p.getPreviewType(m.getPreviewApiDataForCurrentFile(e))
    }

    function h(e) {
        return i.createSelector(t.getData, function(t) {
            return t[e]
        })
    }

    function g(e) {
        var r, n = t.getData(e).onboardingVariants;
        switch (v(e)) {
            case d.PreviewType.SsrDoc:
                r = ["document_preview_surface", "how_to_at_mention_comments_pane_surface"];
                break;
            case d.PreviewType.Image:
                r = ["image_preview_surface", "how_to_at_mention_comments_pane_surface"];
                break;
            case d.PreviewType.Audio:
            case d.PreviewType.Video:
                r = t.getIsPlayerIntegrationEnabled(e) ? ["premium_av_comments_pane_surface", "premium_av_preview_surface"] : ["non_premium_av_comments_pane_surface"];
                break;
            case void 0:
                return [];
            default:
                r = ["not_annotatable_file_comments_pane_surface"]
        }
        return r.filter(function(e) {
            return n[e]
        })
    }

    function w(e) {
        var r = t.getData(e).onboardingVariants,
            n = !u.getIsMediaPlaying(e),
            i = u.getPauseCount(e);
        return t.isEnabled(e) && !c.isComments2Mobile() && t.getIsPlayerIntegrationEnabled(e) && n && !E(e) && r.premium_av_preview_surface && i % 5 === 1 && i < 15
    }

    function y(e) {
        var r = t.getData(e).onboardingVariants;
        switch (v(e)) {
            case d.PreviewType.Audio:
            case d.PreviewType.Video:
                return t.getIsPlayerIntegrationEnabled(e) ? r.premium_av_comments_pane_surface : r.non_premium_av_comments_pane_surface;
            case d.PreviewType.SsrDoc:
                return r.document_preview_surface || r.how_to_at_mention_comments_pane_surface;
            case d.PreviewType.Image:
                return r.image_preview_surface || r.how_to_at_mention_comments_pane_surface;
            case void 0:
                return !1;
            default:
                return r.not_annotatable_file_comments_pane_surface
        }
    }

    function b(e) {
        return t.getData(e).onboardingVariants.share_as_comment
    }

    function E(e) {
        return t.isEnabled(e) && !c.isComments2Mobile() && y(e)
    }

    function S(e) {
        return t.getData(e).onboardingVariants
    }

    function P(e) {
        var r = t.getData(e).modalVariantsShown;
        return r[s.ModalVariant.EmailVerifyModal] || r[s.ModalVariant.SignUpModal]
    }

    function T(e) {
        var t = X(e);
        return t && l.isThreadWithTimecodeAnnotation(t) ? t : void 0
    }

    function C(e) {
        return t.getIsComments2Ready(e) ? J(e) : void 0
    }

    function k(e) {
        return t.getThreads(e).filter(function(e) {
            return !e.resolvedInfo
        })
    }

    function I(e) {
        return k(e).filter(function(e) {
            var t = e.annotation;
            return t && ("video" === t.type || "audio" === t.type)
        })
    }

    function x(e) {
        return t.getData(e).stickers
    }

    function A(e) {
        return t.getData(e).enabledStatus.canEnable
    }

    function M(e) {
        return t.getData(e).subscriptionStatus.canSubscribe
    }

    function F(e) {
        return t.getData(e).subscriptionStatus.isSubscribed
    }

    function O(e) {
        var r = t.getContext(e);
        return r && r.stream
    }

    function R(e) {
        var r = t.getContext(e);
        return r && r.stream.id
    }

    function L(e) {
        return Q(e).playerCurrentTime
    }

    function D(e) {
        return Q(e).currentPageNumber
    }

    function N(e) {
        return Q(e).numberedAnnotation
    }

    function U(e) {
        return t.getIsComments2Ready(e) && !!N(e)
    }

    function V(e, t) {
        return void 0 === t ? j(e) : W(e, t)
    }

    function W(e, t) {
        return n.get(te(e), t, [])
    }

    function B(e) {
        var t = e.annotation;
        return !!t && ("document" === t.type || "image" === t.type)
    }

    function j(e) {
        return $(e).filter(function(e) {
            return e && void 0 !== e.annotation && "image" === e.annotation.type
        })
    }

    function z(e) {
        return $(e).filter(B)
    }

    function q(e) {
        switch (v(e)) {
            case d.PreviewType.SsrDoc:
                return t.getData(e).documentMetadata;
            case d.PreviewType.Image:
                return t.IMAGE_SENTINEL;
            default:
                return
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), c = r.__importStar(c), m = r.__importStar(m);
    t.IMAGE_SENTINEL = "IMAGE_SENTINEL", t.getState = function(e) {
        return o.getStateAtNamespace(e, a.COMMENTS2_NAMESPACE_KEY)
    };
    var K = function(e, t) {
        switch (t) {
            case s.SortType.Chronological:
                return n.sortBy(e, [function(e) {
                    return e.timestamp.getTime()
                }]);
            case s.SortType.VideoTimeCode:
                var r = n.groupBy(e, function(e) {
                        return e.annotation ? "video" : "global"
                    }),
                    i = r.video,
                    o = r.global;
                return n.sortBy(i, [function(e) {
                    return e.annotation.time
                }, function(e) {
                    return e.timestamp.getTime()
                }]).concat(n.sortBy(o, [function(e) {
                    return e.timestamp.getTime()
                }]))
        }
    };
    t.getContext = function(e) {
        var r = t.getState(e).context;
        return r ? {
            stream: r.stream,
            viewer: r.viewer
        } : void 0
    }, t.getContextStatus = function(e) {
        var r = t.getState(e).context;
        return r ? r.status : void 0
    };
    var H = i.createSelector(t.getContextStatus, function(e) {
            return e === s.Comments2ContextStatus.FullyEnabled
        }),
        Y = i.createSelector(t.getContextStatus, function(e) {
            return e === s.Comments2ContextStatus.ReadOnly
        });
    t.isEnabled = i.createSelector([H, Y], function(e, t) {
        return e || t
    }), t.getFQPath = function(e) {
        var r = t.getContext(e);
        return r ? r.stream.fq_path : void 0
    }, t.getViewer = function(e) {
        var r = t.getContext(e);
        return r ? r.viewer : void 0
    }, t.getViewerId = function(e) {
        var r = t.getViewer(e);
        return r ? r.id : void 0
    }, t.canCreateAnnotations = function(e) {
        var r = t.getContext(e);
        return !(!r || !r.viewer) && !c.isComments2Mobile() && t.getVisibleInSidebar(e)
    }, t.getPreviewTypeForCurrentFile = v, t.getIsComments2Ready = function(e) {
        var t = e[a.COMMENTS2_NAMESPACE_KEY];
        return !(!t || !t.context || t.context.status !== s.Comments2ContextStatus.FullyEnabled && t.context.status !== s.Comments2ContextStatus.ReadOnly)
    }, t.getData = function(e) {
        return t.getState(e).data
    }, t.getRevision = i.createSelector(t.getContext, function(e) {
        return e && f.streamToRevision(e.stream)
    }), t.getSort = i.createSelector(v, function(e) {
        switch (e) {
            case d.PreviewType.Audio:
            case d.PreviewType.Video:
                return s.SortType.VideoTimeCode;
            default:
                return s.SortType.Chronological
        }
    }), t.getEditorIsEmpty = h("editorIsEmpty"), t.getThreadMap = h("threads");
    var G = i.createSelector(t.getThreadMap, function(e) {
            return n.values(e)
        }),
        Z = i.createSelector(t.getContext, function(e) {
            return e && e.stream.isVersionHistoryMode
        });
    t.getThreads = i.createSelector([G, t.getSort, Z, t.getRevision], function(e, t, r, n) {
        var i = K(e, t);
        return r ? _(i, n) : i
    }), t.getCursor = h("cursor"), t.getUnmarkedOnboardingKeysRelevantToCurrentFile = g, t.getShowOnboardingOnVideo = w, t.getShowShareAsCommentOnboarding = b, t.getShowOnboardingOnCommentsPane = E, t.getOnboardingVariants = S, t.getHasShownAnyModalVariant = P, t.getActivatedThreadId = h("activatedThreadId");
    var X = i.createSelector(t.getActivatedThreadId, t.getThreadMap, function(e, t) {
        return e && t[e]
    });
    t.getActivatedTimecodeThread = T;
    var J = h("documentRectangleToMakeVisible");
    t.getDocumentRectangleToMakeVisibleIfComments2Ready = C, t.getHoverThreadId = h("hoverThreadId"), t.getUnresolvedTimecodeThreads = I, t.getShowResolved = h("showResolved"), t.getStatuses = function(e) {
        return t.getState(e).statuses
    }, t.getIsPlayerIntegrationEnabled = h("playerIntegrationEnabled"), t.getStickers = x, t.getCanEnable = A, t.getCanSubscribe = M, t.getIsSubscribed = F, t.getStream = O, t.getStreamId = R;
    var Q = h("pendingAnnotationInfo");
    t.getPlayerCurrentTime = L, t.getCurrentPageNumber = D, t.getPendingNumberedAnnotation = N, t.getHasPendingNumberedAnnotation = U, t.getVisibleInSidebar = h("visibleInSidebar");
    var $ = i.createSelector([t.getVisibleInSidebar, t.isEnabled, t.getShowResolved, G], function(e, t, r, n) {
            return e && t ? (r ? n : n.filter(function(e) {
                return !e.resolvedInfo
            })).filter(function(e) {
                return e.comments.some(function(e) {
                    return !e.deleted
                })
            }) : []
        }),
        ee = i.createSelector($, function(e) {
            return e.filter(l.isThreadWithDocumentAnnotation)
        }),
        te = i.createSelector(ee, function(e) {
            return n.groupBy(e, function(e) {
                return e.annotation.regions[0].page
            })
        });
    t.getDisplayedThreadsForLayer = V, t.getDisplayedThreadsWithDocumentAnnotationsOnPage = W, t.getDisplayedThreadsWithImageAnnotations = j, t.getDisplayedThreadsWithNumberedAnnotations = z;
    var re = h("canSeeCommentEditor");
    t.getStreamSettings = i.createSelector([H, t.getViewer, re], function(e, t, r) {
        return {
            canComment: e,
            canModifyThreads: r && !!t,
            canShowEditor: r
        }
    }), t.getDocumentMetadata = q, t.getIsEditorFocusRequested = h("requestEditorFocus")
}), define("modules/clean/react/comments2/data/sidebar_watcher", ["require", "exports", "tslib", "external/eventemitter3"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.sideChannelEventEmitter = new n.default, t.COMMENTS_VISIBLE_SIGNAL = "comments_visible", t.COMMENTS_HIDDEN_SIGNAL = "comments_hidden"
}), define("modules/clean/react/comments2/data/store", ["require", "exports", "tslib", "external/lodash", "modules/clean/redux/namespaces", "modules/clean/react/comments2/data/reducer", "modules/clean/redux/store"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.getStoreForComments2 = n.once(function() {
        var e;
        return a.getStoreAndRegisterReducers((e = {}, e[i.COMMENTS2_NAMESPACE_KEY] = o.reducer, e))
    })
}), define("modules/clean/react/comments2/data/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.Pending = 0] = "Pending", e[e.Comments1 = 1] = "Comments1", e[e.Disabled = 2] = "Disabled", e[e.ReadOnly = 3] = "ReadOnly", e[e.FullyEnabled = 4] = "FullyEnabled"
    })(t.Comments2ContextStatus || (t.Comments2ContextStatus = {}));
    (function(e) {
        e.EmailVerifyModal = "EmailVerifyModal", e.SignUpModal = "SignUpModal"
    })(t.ModalVariant || (t.ModalVariant = {}));
    (function(e) {
        e[e.EditorFocus = 0] = "EditorFocus", e[e.OnPost = 1] = "OnPost"
    })(t.ShowModalReason || (t.ShowModalReason = {}));
    (function(e) {
        e.Chronological = "CHRONOLOGICAL", e.VideoTimeCode = "VIDEO_TIME_CODE"
    })(t.SortType || (t.SortType = {}));
    (function(e) {
        e[e.ThreadActivated = 0] = "ThreadActivated", e[e.UIButtonClicked = 1] = "UIButtonClicked"
    })(t.MarkThreadReadOrigin || (t.MarkThreadReadOrigin = {}))
}), define("modules/clean/react/comments2/data/util", ["require", "exports", "tslib", "modules/clean/react/comments2/util"], function(e, t, r, n) {
    "use strict";

    function i(e) {
        var t = e.annotation;
        return !!t && "document" === t.type
    }

    function o(e) {
        var t = e.annotation;
        return !!t && "image" === t.type
    }

    function a(e) {
        var t = e.annotation;
        return !!t && n.isTimecodeAnnotation(t)
    }

    function s(e) {
        if (e && i(e)) {
            var t = e.annotation.regions[0];
            return r.__assign({}, t, {
                page: t.page - 1
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isThreadWithDocumentAnnotation = i, t.isThreadWithImageAnnotation = o, t.isThreadWithTimecodeAnnotation = a, t.documentRectangleFromThread = s
}), define("modules/clean/react/comments2/util", ["require", "exports", "tslib", "external/lodash", "modules/core/browser_detection", "modules/constants/comments2", "modules/core/browser_detection"], function(e, t, r, n, i, o, a) {
    "use strict";

    function s(e) {
        return function(t, r) {
            return void 0 === t || void 0 === r ? t === r : e(t, r)
        }
    }

    function l() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return s(function(t, r) {
            return e.every(function(e) {
                return t[e] === r[e]
            })
        })
    }

    function c(e, t) {
        void 0 === e && (e = 1e3), void 0 === t && (t = 3e5);
        var r, n = 0;
        return {
            resetBackoff: function() {
                n = 0, clearTimeout(r)
            },
            backoff: function(i) {
                return r = setTimeout(i, Math.random() * Math.min(e * (Math.pow(2, n++) - 1), t))
            }
        }
    }

    function u(e, t) {
        for (var r = 0, i = e; r < i.length; r++) {
            var o = i[r],
                a = n.find(o.comments, {
                    id: t
                });
            if (a) return {
                comment: a,
                thread: o
            }
        }
        return null
    }

    function d(e) {
        var t = e.annotation;
        if (m(t)) return {
            playerCurrentTime: t.time,
            annotationMayBeOffscreen: !1
        }
    }

    function p() {
        return !a.msie
    }

    function m(e) {
        return void 0 !== e && ("audio" === e.type || "video" === e.type)
    }

    function f() {
        return !o.COMMENTS2_DISABLE_BOLT
    }

    function _() {
        return o.COMMENTS2_UPSELL_EXPERIMENT
    }

    function v(e, t, r) {
        return t <= e && e <= r
    }

    function h(e, t, r) {
        var n = e.x + e.width,
            i = e.y + e.height,
            o = function(e, t) {
                return e < t ? e : 1 / 0
            };
        if (v(t.x, e.x, n) && v(t.y, e.y, i)) {
            var a = 16 / r.width,
                s = 16 / r.height;
            return Math.min(o(Math.min(t.x - e.x, n - t.x), a), o(Math.min(t.y - e.y, i - t.y), s))
        }
        return 1 / 0
    }

    function g(e, t, r) {
        return T(t, function(t) {
            return P(t, e, r)
        })
    }

    function w(e) {
        return 1 === e.regions.length && E(e.regions[0])
    }

    function y(e) {
        return E(e.region)
    }

    function b() {
        return {
            x: 0,
            y: 0,
            width: 1,
            height: 1
        }
    }

    function E(e) {
        var t = e.x,
            r = e.y,
            n = e.width,
            i = e.height;
        return 0 === t && 0 === r && 1 === n && 1 === i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    t.createBackoff = c, t.isUserSame = l("id"), t.isStreamSame = l("type", "id"), t.isContextSame = s(function(e, r) {
        return t.isStreamSame(e.stream, r.stream) && t.isUserSame(e.viewer, r.viewer)
    }), t.findCommentThread = u, t.getAnnotationInfoForThread = d, t.isComments2Mobile = i.is_mobile_or_tablet, t.canShowUnreadPill = p, t.isTimecodeAnnotation = m, t.useBolt = f, t.inUpsellExperiment = _;
    var S = function(e) {
            return "image" === e.annotation.type ? [e.annotation.region] : e.annotation.regions
        },
        P = function(e, t, r) {
            return Math.min.apply(Math, S(e).map(function(e) {
                return h(e, t, r)
            }))
        },
        T = function(e, t) {
            return e.reduce(function(e, r) {
                var n = e.minRank,
                    i = e.minElem,
                    o = t(r);
                return n <= o ? {
                    minRank: n,
                    minElem: i
                } : {
                    minRank: o,
                    minElem: r
                }
            }, {
                minRank: 1 / 0,
                minElem: void 0
            }).minElem
        };
    t.getThreadForNumberedAnnotationAtPoint = g, t.isFullPageAnnotation = w, t.isFullImageAnnotation = y, t.createFullRectangle = b
}), define("modules/clean/react/comments2/video_annotations/annotation_helper", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        function t(e) {
            return null != e ? Math.round(100 * e) : 0
        }

        function r(e) {
            return null != e ? e / 100 : 0
        }
        e.unitConvertSecondsToDomainObjectTime = t, e.unitConvertDomainObjectTimeToSeconds = r
    })(t.VideoAnnotationHelper || (t.VideoAnnotationHelper = {}))
}), define("modules/clean/react/comments2/video_annotations/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EventTypes = {
        PAUSE: "PAUSE",
        SEEK_POSITION_AND_PAUSE: "SEEK_POSITION_AND_PAUSE"
    }
}), define("modules/clean/react/comments2/video_annotations/video_preview_event_emitter", ["require", "exports", "tslib", "external/eventemitter3"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.videoPreviewEventEmitter = new n.default
}), define("modules/clean/react/css_timing", ["require", "exports", "modules/clean/react/css", "modules/clean/js_client_stopwatch"], function(e, t, r, n) {
    "use strict";

    function i(e, t, i) {
        void 0 === i && (i = []);
        var o = e.displayName || "UnnamedComponent",
            a = function() {
                return n.JSStopwatch.startSpan("requireCssWithComponent_" + o)
            },
            s = function() {
                return n.JSStopwatch.endSpan("requireCssWithComponent_" + o)
            };
        return r.requireCssWithComponent(e, t, i, {
            onWillLoadCss: a,
            onCssResponse: s
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.requireCssWithComponent = i
}), define("modules/clean/react/file_action_button", ["require", "exports", "tslib", "react", "external/prop-types", "modules/clean/react/bubble_menu", "modules/clean/react/file_action_button_type", "modules/clean/react/file_action_button_group"], function(e, t, r, n, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i), t.FileActionButtonType = a.FileActionButtonType, t.FileActionButtonGroup = s.FileActionButtonGroup;
    var l = n.default.createElement,
        c = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return l(o.BubbleMenuItem, {
                    onClick: this.props.callback,
                    closeFunc: this.props.closeFunc,
                    className: this.props.className
                }, a.getFileActionButtonText(this.props.type))
            }, t.displayName = "FileActionButton", t.propTypes = {
                type: i.string.isRequired,
                callback: i.func.isRequired,
                closeFunc: i.func,
                className: i.string
            }, t.defaultProps = {
                closeFunc: null
            }, t
        })(n.default.Component);
    t.FileActionButton = c
}), define("modules/clean/react/file_action_button_group", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.COMMENTS = "COMMENTS", e.WATERMARKING = "WATERMARKING"
    })(t.FileActionButtonGroup || (t.FileActionButtonGroup = {}))
}), define("modules/clean/react/file_action_button_type", ["require", "exports", "modules/core/i18n"], function(e, t, r) {
    "use strict";

    function n(e) {
        return e && a[e] ? a[e] : null
    }
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FileActionButtonType = {
        COMMENT: "COMMENT",
        COPY: "COPY",
        DELETE: "DELETE",
        DOWNLOAD: "DOWNLOAD",
        MOVE: "MOVE",
        OPEN: "OPEN",
        PREVIOUS_VERSIONS: "PREVIOUS_VERSIONS",
        REMOVE_LINK: "REMOVE_LINK",
        RENAME: "RENAME",
        SHARE: "SHARE",
        ENABLE_COMMENTS: "ENABLE_COMMENTS",
        DISABLE_COMMENTS: "DISABLE_COMMENTS",
        SHOW_RESOLVED_COMMENTS: "SHOW_RESOLVED_COMMENTS",
        HIDE_RESOLVED_COMMENTS: "HIDE_RESOLVED_COMMENTS",
        SUBSCRIBE: "SUBSCRIBE",
        SUBSCRIBE_TO_NOTIFICATIONS: "SUBSCRIBE_TO_NOTIFICATIONS",
        UNSUBSCRIBE: "UNSUBSCRIBE",
        UNSUBSCRIBE_FROM_NOTIFICATIONS: "UNSUBSCRIBE_FROM_NOTIFICATIONS",
        ENABLE_WATERMARKING: "ENABLE_WATERMARKING",
        REMOVE_WATERMARKING: "REMOVE_WATERMARKING"
    };
    var o = function() {
            return {
                comment: "BUTTON"
            }
        },
        a = (i = {}, i[t.FileActionButtonType.COMMENT] = r._("Comment", o()), i[t.FileActionButtonType.COPY] = r._("Copy…", o()), i[t.FileActionButtonType.DELETE] = r._("Delete…", o()), i[t.FileActionButtonType.DOWNLOAD] = r._("Download", o()), i[t.FileActionButtonType.MOVE] = r._("Move…", o()), i[t.FileActionButtonType.OPEN] = r._("Open", o()), i[t.FileActionButtonType.PREVIOUS_VERSIONS] = r._("Version history", o()), i[t.FileActionButtonType.REMOVE_LINK] = r._("Remove link", o()), i[t.FileActionButtonType.RENAME] = r._("Rename", o()), i[t.FileActionButtonType.SHARE] = r._("Share", o()), i[t.FileActionButtonType.ENABLE_COMMENTS] = r._("Enable comments", o()), i[t.FileActionButtonType.DISABLE_COMMENTS] = r._("Disable comments", o()), i[t.FileActionButtonType.SHOW_RESOLVED_COMMENTS] = r._("Show resolved comments", o()), i[t.FileActionButtonType.HIDE_RESOLVED_COMMENTS] = r._("Hide resolved comments", o()), i[t.FileActionButtonType.SUBSCRIBE] = r._("Subscribe", o()), i[t.FileActionButtonType.SUBSCRIBE_TO_NOTIFICATIONS] = r._("Subscribe to notifications", o()), i[t.FileActionButtonType.UNSUBSCRIBE] = r._("Unsubscribe", o()), i[t.FileActionButtonType.UNSUBSCRIBE_FROM_NOTIFICATIONS] = r._("Unsubscribe from notifications", o()), i[t.FileActionButtonType.ENABLE_WATERMARKING] = r._("Enable watermarking", o()), i[t.FileActionButtonType.REMOVE_WATERMARKING] = r._("Remove watermarking", o()), i);
    t.getFileActionButtonText = n
}), define("modules/clean/react/file_activity_stream/tti_logger", ["require", "exports", "modules/clean/react/file_sidebar/file_sidebar_logger"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function() {
        function e() {
            this.hasLogged = !1
        }
        return e.prototype.recordStart = function(e) {
            this.startTs = (new Date).getTime(), this.fileId = e, this.hasLogged = !1
        }, e.prototype.recordInteractive = function(e) {
            if (!this.hasLogged && e === this.fileId && this.startTs) {
                var t = (new Date).getTime();
                r.logActivityStreamInteractivity({
                    time_start: this.startTs,
                    time_interactive: t
                }), this.hasLogged = !0
            }
        }, e
    })();
    t.faStreamTTILogger = new n
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_metadata/component/loadable_metadata_details", ["require", "exports", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, r, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LoadableMetadataDetails = r.Loadable({
            loader: function() {
                return n.waitForTTI().then(function() {
                    return new Promise(function(t, r) {
                        e(["modules/clean/react/file_metadata/component/metadata_details"], t, r)
                    }).then(__importStar).then(function(e) {
                        return e.MetadataDetails
                    })
                })
            }
        })
    }), define("modules/clean/react/file_sidebar/file_sidebar", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, r, n, i, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n), t.FileSidebar = i.Loadable({
            loader: function() {
                return o.waitForTTI().then(function() {
                    return new Promise(function(t, r) {
                        e(["modules/clean/react/file_sidebar/file_sidebar_component"], t, r)
                    }).then(r.__importStar).then(function(e) {
                        return e.FileSidebar
                    })
                })
            },
            loading: n.default.createElement("div", {
                className: "file-sidebar"
            })
        })
    }),
    define("modules/clean/react/file_sidebar/file_sidebar_connect", ["require", "exports", "tslib", "react", "external/react-redux", "hoist-non-react-statics"], function(e, t, r, n, i, o) {
        "use strict";

        function a(e, a) {
            var s = {
                    storeKey: t.FILE_SIDEBAR_REDUX_STORE_KEY
                },
                l = a ? i.connect(e, a, void 0, s) : i.connect(e, void 0, void 0, s);
            return function(e) {
                var t = l(e),
                    i = (function(e) {
                        function i() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return r.__extends(i, e), i.prototype.render = function() {
                            return n.default.createElement(t, r.__assign({}, this.props))
                        }, i.displayName = "FileSidebar" + t.displayName, i.WrappedComponent = t, i
                    })(n.default.Component);
                return o.default(i, t)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n), i = r.__importStar(i), o = r.__importDefault(o), t.FILE_SIDEBAR_REDUX_STORE_KEY = "SIDEBAR_REDUX_STORE_KEY", t.fileSidebarConnect = a
    }), define("modules/clean/react/file_sidebar/file_sidebar_logger", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/viewer", "modules/clean/api_v2/user_client", "modules/clean/api_v2/noauth_client", "modules/clean/react/file_viewer/models"], function(e, t, r, n, i, o, a, s) {
        "use strict";

        function l(e, t) {
            var r = s.FileViewerSession.currentSession,
                i = s.FilePreviewSession.currentSession;
            if (i && r) {
                var o = {
                    event_name: e,
                    file_viewer_session_id: r.id,
                    file_preview_session_id: i.id,
                    file_ns_id: i.file.ns_id,
                    file_sjid: i.file.sjid,
                    extra: JSON.stringify(t)
                };
                n.SilentBackgroundRequest({
                    url: "/log/file_sidebar",
                    data: o
                })
            }
        }

        function c(e) {
            l("sidebar_tab_selected", e)
        }

        function u(e) {
            l("sidebar_opened", e)
        }

        function d(e) {
            l("sidebar_closed", e)
        }

        function p(e) {
            l("activity_stream_interactivity", e)
        }

        function m(e) {
            l("file_view_activity_expanded", e)
        }

        function f(e, t) {
            v({
                event: "get_stream_timing",
                int_value: e,
                bool_value: t
            })
        }

        function _(e) {
            v({
                event: "load_sidebar_timing",
                int_value: e
            })
        }

        function v(e) {
            var t = i.Viewer.get_viewer().get_user_ids(),
                r = t.length ? t[0] : null;
            r ? (new o.UserApiV2Client).ns("file_activity_stream").rpc("log_event", e, {
                subjectUserId: r
            }) : (new a.NoAuthApiV2Client).ns("file_activity_stream").rpc("logged_out/log_event", e, {})
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importStar(n), t.logSidebarTabSelected = c, t.logSidebarOpened = u, t.logSidebarClosed = d, t.logActivityStreamInteractivity = p, t.logFileViewActivityCardExpanded = m, t.logGetActivityStreamTiming = f, t.logLoadSidebarTiming = _
    }), define("modules/clean/react/file_sidebar/file_sidebar_provider", ["require", "exports", "tslib", "react", "modules/clean/react/file_sidebar/generic_file_sidebar_provider", "modules/clean/react/file_sidebar/store/instance"], function(e, t, r, n, i, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n);
        var a = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.state = {
                    loaded: !0,
                    store: o.store
                }, r
            }
            return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                var e = this.state.store;
                e && e.dispatch({
                    type: "::RESET"
                })
            }, t.prototype.render = function() {
                return n.default.createElement(i.GenericFileSidebarProvider, null, this.props.children)
            }, t
        })(n.default.Component);
        t.FileSidebarProvider = a
    }), define("modules/clean/react/file_sidebar/generic_file_sidebar_provider", ["require", "exports", "tslib", "react", "external/react-redux", "modules/clean/react/file_sidebar/file_sidebar_connect", "modules/clean/react/file_sidebar/store/instance"], function(e, t, r, n, i, o, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n);
        var s = i.createProvider(o.FILE_SIDEBAR_REDUX_STORE_KEY),
            l = (function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.state = {
                        loaded: !0,
                        store: a.store
                    }, r
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return n.default.createElement(s, {
                        store: this.state.store
                    }, this.props.children)
                }, t
            })(n.default.Component);
        t.GenericFileSidebarProvider = l
    }), define("modules/clean/react/file_sidebar/managed_comments_tab", ["require", "exports", "tslib", "react", "external/react-redux", "modules/clean/react/comments2/data/actions", "modules/clean/react/comments2/data/store", "modules/clean/react/comments2/components/comments_tab", "modules/clean/file_store/utils"], function(e, t, r, n, i, o, a, s, l) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n), t.streamFromProps = function(e) {
            var t = e.currentFile,
                r = e.currentFile,
                n = r.bytes,
                i = r.file_id,
                o = r.ns_id,
                a = r.sjid,
                s = e.sharedLinkInfo,
                c = e.isVersionHistoryMode;
            return {
                id: i,
                linkUrl: s && s.url,
                ns_id: o,
                sjid: a,
                type: "file",
                fq_path: "fq_path" in t ? t.fq_path : void 0,
                isVersionHistoryMode: c,
                bytes: n,
                filename: l.getFilename(t)
            }
        };
        var c = (function(e) {
            function l(r) {
                var n = e.call(this, r) || this;
                return n.setContext = function(e) {
                    n.store.dispatch(o.Actions.setFileContext({
                        stream: t.streamFromProps(e),
                        viewer: e.user
                    }))
                }, n.store = a.getStoreForComments2(), n
            }
            return r.__extends(l, e), l.prototype.componentDidMount = function() {
                this.setContext(this.props)
            }, l.prototype.componentWillUpdate = function(e) {
                this.setContext(e)
            }, l.prototype.render = function() {
                return this.store ? n.default.createElement(i.Provider, {
                    store: this.store
                }, n.default.createElement(s.CommentsTab, r.__assign({}, this.props))) : null
            }, l
        })(n.default.Component);
        t.ManagedCommentsTab = c
    }), define("modules/clean/react/file_sidebar/store/app/reducer", ["require", "exports", "tslib"], function(e, t, r) {
        "use strict";

        function n(e, n) {
            switch (void 0 === e && (e = t.INITIAL_STATE), n.type) {
                case "APP_SET_STATE":
                    var i = n.hideComments,
                        o = n.hidePageChrome;
                    return r.__assign({}, e, {
                        hideComments: i,
                        hidePageChrome: o
                    })
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.INITIAL_STATE = {
            hideComments: !1,
            hidePageChrome: !1
        }, t.reducer = n
    }), define("modules/clean/react/file_sidebar/store/file_activity/actions", ["require", "exports", "tslib", "modules/clean/react/file_sidebar/store/file_activity/selectors", "modules/clean/react/file_sidebar/store/file_activity/api", "modules/clean/react/file_sidebar/file_sidebar_logger"], function(e, t, r, n, i, o) {
        "use strict";

        function a(e) {
            return {
                type: "FILE_ACTIVITY|RECEIVE_STREAM_ERROR",
                error: e
            }
        }

        function s(e, t) {
            return {
                type: "FILE_ACTIVITY|RECEIVE_FILE_ACTIVITY",
                activities: e,
                enabled: t
            }
        }

        function l(e, t) {
            return {
                type: "FILE_ACTIVITY|LOADING_START",
                userId: e,
                file: t
            }
        }

        function c(e) {
            return {
                type: "FILE_ACTIVITY|LOADING_END",
                state: e
            }
        }

        function u() {
            return {
                type: "FILE_ACTIVITY|RESET"
            }
        }

        function d() {
            return {
                type: "FILE_ACTIVITY|RESET_FILE_STATE"
            }
        }

        function p(e, t) {
            return (e.file ? e.file.file_id : -1) !== (t.file ? t.file.file_id : -1) || e.userId !== t.userId
        }

        function m(e, r) {
            return function(i, u) {
                if (p({
                        file: r,
                        userId: e
                    }, n.getContext(u()))) {
                    var m = t.api.create(e);
                    i(d()), i(l(e, r));
                    var _ = Date.now(),
                        v = ++f,
                        h = r.file_id;
                    return m.getActivityStream(h).then(function(t) {
                        var a = t.enabled,
                            l = t.activity_group;
                        o.logGetActivityStreamTiming(Date.now() - _, !0), p({
                            file: r,
                            userId: e
                        }, n.getContext(u())) || i(s(l, a))
                    }).catch(function(e) {
                        o.logGetActivityStreamTiming(Date.now() - _, !1), v === f && i(a(e))
                    }).then(function() {
                        v === f && i(c(n.getState(u())))
                    })
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importStar(n), t.api = {
            create: function(e) {
                return new i.FileActivityStreamApi(e)
            }
        }, t.receiveStreamError = a, t.receiveFileActivity = s, t.loadingStart = l, t.loadingEnd = c, t.reset = u, t.resetFileState = d;
        var f = 0;
        t.getActivityStream = m
    }), define("modules/clean/react/file_sidebar/store/file_activity/activity_sorted_set", ["require", "exports", "tslib", "modules/clean/react/file_sidebar/store/file_activity/sorted_set"], function(e, t, r, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (function(e) {
            function t(r) {
                return void 0 === r && (r = []), e.call(this, r, t.compare, t.equals) || this
            }
            return r.__extends(t, e), t.compare = function(e, t) {
                return e.id === t.id ? 0 : t.timestamp.getTime() - e.timestamp.getTime()
            }, t.equals = function(e, t) {
                return e.id === t.id
            }, t
        })(n.SortedSet);
        t.ActivitySortedSet = i
    }), define("modules/clean/react/file_sidebar/store/file_activity/api", ["require", "exports", "tslib", "external/lodash", "modules/clean/api_v2/user_client"], function(e, t, r, n, i) {
        "use strict";

        function o(e, t, r, n) {
            return ".tag" === t ? 0 === n ? ["type", r] : r in e ? r : [null, r] : r
        }

        function a(e, t, r, n) {
            return "string" == typeof r && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(r) ? new Date(r) : r
        }

        function s(e, t, r) {
            return void 0 === r && (r = 0), Array.isArray(e) ? e.map(function(e) {
                return s(e, t, r + 1)
            }) : n.isObject(e) ? Object.keys(e).reduce(function(i, o) {
                var a = e[o];
                if (Array.isArray(a) || n.isObject(a)) i[o] = s(a, t, r + 1);
                else {
                    var l = t(e, o, a, r);
                    if (Array.isArray(l)) {
                        if (null === l[0]) return l[1];
                        i[l[0]] = l[1]
                    } else i[o] = l
                }
                return i
            }, {}) : t(null, "", e, r)
        }

        function l(e) {
            return s(s(e, o), a)
        }

        function c(e) {
            return r.__assign({}, l(e.activities[0]), {
                groupActivities: e.activities.map(l),
                isGroup: !0
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importStar(n), t.parseActivity = l, t.parseGroupActivity = c;
        var u = (function() {
            function e(e) {
                this.userId = e, this.client = new i.UserApiV2Client
            }
            return e.prototype.getActivityStream = function(e) {
                return this.client.ns("file_activity_stream").rpc("get_activity_stream", {
                    file_path_or_id: e
                }, {
                    subjectUserId: this.userId
                }).then(function(e) {
                    return {
                        enabled: e.enabled,
                        activity_group: (e.activity_group || []).map(c)
                    }
                })
            }, e
        })();
        t.FileActivityStreamApi = u
    }), define("modules/clean/react/file_sidebar/store/file_activity/reducer", ["require", "exports", "tslib", "modules/clean/react/file_sidebar/store/file_activity/activity_sorted_set"], function(e, t, r, n) {
        "use strict";

        function i(e) {
            return e.map(function(e) {
                return e.isGroup && 1 === e.groupActivities.length ? e.groupActivities[0] : e
            })
        }

        function o(e, o) {
            switch (void 0 === e && (e = t.INITIAL_STATE), o.type) {
                case "FILE_ACTIVITY|RESET":
                    return r.__assign({}, t.INITIAL_STATE);
                case "FILE_ACTIVITY|RESET_FILE_STATE":
                    return r.__assign({}, e, {
                        activities: t.INITIAL_STATE.activities
                    });
                case "FILE_ACTIVITY|LOADING_START":
                    return r.__assign({}, e, {
                        activities: r.__assign({}, e.activities, {
                            error: void 0,
                            loading: !0
                        }),
                        userId: o.userId,
                        file: o.file
                    });
                case "FILE_ACTIVITY|LOADING_END":
                    return r.__assign({}, e, {
                        activities: r.__assign({}, e.activities, {
                            loaded: !0,
                            loading: !1
                        })
                    });
                case "FILE_ACTIVITY|RECEIVE_FILE_ACTIVITY":
                    var a = o.enabled,
                        s = a ? new n.ActivitySortedSet(e.activities.value.concat(i(o.activities))).toArray() : [];
                    return r.__assign({}, e, {
                        activities: r.__assign({}, e.activities, {
                            value: s
                        }),
                        enabled: o.enabled
                    });
                case "FILE_ACTIVITY|RECEIVE_STREAM_ERROR":
                    return r.__assign({}, e, {
                        activities: r.__assign({}, e.activities, {
                            error: o.error
                        })
                    })
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.INITIAL_STATE = {
            activities: {
                error: void 0,
                loaded: !1,
                loading: !1,
                value: []
            },
            enabled: !1,
            userId: -1
        }, t.ungroupSingleActivityGroups = i, t.reducer = o
    }), define("modules/clean/react/file_sidebar/store/file_activity/selectors", ["require", "exports"], function(e, t) {
        "use strict";

        function r(e) {
            return e.fileActivity
        }

        function n(e) {
            return r(e).activities.value
        }

        function i(e) {
            return r(e).activities
        }

        function o(e) {
            return n(e).length
        }

        function a(e) {
            return r(e).file
        }

        function s(e) {
            return r(e).userId
        }

        function l(e) {
            return {
                file: a(e),
                userId: s(e)
            }
        }

        function c(e) {
            return r(e).enabled
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getState = r, t.getActivities = n, t.getActivitiesMetadata = i, t.getVisibleActivityCount = o, t.getFile = a, t.getUserId = s, t.getContext = l, t.isActivityEnabled = c
    }), define("modules/clean/react/file_sidebar/store/file_activity/sorted_set", ["require", "exports"], function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (function() {
            function e(e, t, r) {
                void 0 === e && (e = []), this.items = [], this.compare = t, this.equals = r, this.add(e)
            }
            return e.prototype.add = function(e) {
                var t = this;
                Array.isArray(e) || (e = [e]);
                var r = this.items.concat(e);
                return r.sort(this.compare), this.items = r.filter(function(e, r, n) {
                    return 0 === r || !t.equals(e, n[r - 1])
                }), this
            }, e.prototype.toArray = function() {
                return Array.prototype.slice.call(this.items)
            }, e
        })();
        t.SortedSet = r
    }), define("modules/clean/react/file_sidebar/store/instance", ["require", "exports", "tslib", "external/redux", "modules/clean/react/file_sidebar/store/app/reducer", "modules/clean/react/file_sidebar/store/file_activity/reducer", "modules/clean/react/file_sidebar/store/sidebar/reducer", "modules/clean/react/file_sidebar/store/middleware/thunk", "modules/clean/react/file_sidebar/store/middleware/reactor", "modules/clean/react/file_sidebar/store/sidebar/reactors", "modules/clean/redux/unsupported", "modules/clean/redux/devtools"], function(e, t, r, n, i, o, a, s, l, c, u, d) {
        "use strict";

        function p(e, t) {
            return "::RESET" === t.type && (e = void 0), f(e, t)
        }

        function m() {
            return u.createStore(p, d.composeEnhancersWithDevTools(n.applyMiddleware(s.thunk(), l.reactor(c.reactors))))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importStar(n);
        var f = n.combineReducers({
            app: i.reducer,
            fileActivity: o.reducer,
            sidebar: a.reducer
        });
        t.store = m()
    }), define("modules/clean/react/file_sidebar/store/middleware/reactor", ["require", "exports", "modules/clean/shallow_equal"], function(e, t, r) {
        "use strict";

        function n(e) {
            return "function" == typeof e.changes
        }

        function i(e) {
            return "function" == typeof e.changesIn
        }

        function o(e) {
            return "function" == typeof e.changesFrom && "function" == typeof e.changesTo
        }

        function a() {
            function e(e, t, r) {
                void 0 === r && (r = s);
                var l;
                if (n(e)) l = function(t, r) {
                    return {
                        changed: e.changes(t, r)
                    }
                };
                else if (i(e)) l = function(t, n) {
                    var i = e.changesIn(t),
                        o = e.changesIn(n);
                    return {
                        prevValue: i,
                        nextValue: o,
                        changed: !r(i, o)
                    }
                };
                else {
                    if (!o(e)) throw new Error;
                    l = function(t, r) {
                        var n = e.changesFrom(t),
                            i = e.changesTo(r);
                        return {
                            changed: n && i
                        }
                    }
                }
                a.push({
                    checkForChange: l,
                    onChange: t
                })
            }
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            for (var a = [], l = 0, c = t; l < c.length; l++) {
                (0, c[l])(e)
            }
            return function(e) {
                var t = e.getState;
                return function(e) {
                    return function(r) {
                        for (var n = t(), i = e(r), o = t(), s = 0, l = a; s < l.length; s++) {
                            var c = l[s],
                                u = c.checkForChange(n, o),
                                d = u.prevValue,
                                p = u.nextValue;
                            u.changed && c.onChange({
                                nextValue: p,
                                prevValue: d,
                                nextState: o,
                                prevState: n
                            })
                        }
                        return i
                    }
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function(e, t) {
            return r.shallowEqual(e, t)
        };
        t.reactor = a
    }), define("modules/clean/react/file_sidebar/store/middleware/thunk", ["require", "exports"], function(e, t) {
        "use strict";

        function r() {
            return function(e) {
                var t = e.dispatch,
                    r = e.getState;
                return function(e) {
                    return function(n) {
                        return "function" == typeof n ? n(t, r) : e(n)
                    }
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.thunk = r
    }), define("modules/clean/react/file_sidebar/store/sidebar/actions", ["require", "exports", "tslib", "modules/clean/react/file_sidebar/store/file_activity/selectors", "modules/clean/react/file_sidebar/store/sidebar/helpers", "modules/clean/react/file_sidebar/store/sidebar/selectors", "modules/clean/react/file_sidebar/file_sidebar_logger", "modules/clean/react/file_sidebar/store/sidebar/types", "file-viewer/core"], function(e, t, r, n, i, o, a, s, l) {
        "use strict";

        function c() {
            return {
                type: s.ActionType.SidebarReset
            }
        }

        function u(e) {
            return function(t, r) {
                t({
                    type: s.ActionType.SidebarOpen,
                    payload: {
                        reason: e
                    }
                })
            }
        }

        function d() {
            return function(e, t) {
                var r = t(),
                    i = o.getSidebarContext(r).user;
                o.getSidebarState(r).open && (e({
                    type: s.ActionType.SidebarClose
                }), a.logSidebarClosed({
                    num_comments: o.getTabState(r, "comments").extra.commentCount,
                    num_events: n.getVisibleActivityCount(r),
                    viewing_user_id: i ? i.id : null
                }))
            }
        }

        function p() {
            return function(e, t) {
                var r = t();
                e(o.getSidebarState(r).open ? d() : u("toggle_button"))
            }
        }

        function m() {
            return function(e) {
                e(u("toggle_button_after_transition"))
            }
        }

        function f(e) {
            return {
                type: s.ActionType.SidebarSelectTab,
                payload: {
                    tabName: e
                }
            }
        }

        function _() {
            return {
                type: s.ActionType.SidebarSetThirdPartyBlueDotOnboardState
            }
        }

        function v(e) {
            return function(t, r) {
                var n = r(),
                    a = o.getSidebarContext(n);
                i.isContextChanged(a, e) && (t({
                    type: s.ActionType.SidebarOpenFile,
                    payload: e
                }), t(w()))
            }
        }

        function h() {
            return {
                type: s.ActionType.SidebarSetComments2DisabledState
            }
        }

        function g(e) {
            return {
                type: s.ActionType.SidebarSetComments2ShownState,
                payload: e
            }
        }

        function w() {
            return {
                type: s.ActionType.SidebarIndicateNewFileNav
            }
        }

        function y(e) {
            var t = e === l.FileViewerMode.Documentation ? "metadata" : "comments";
            return {
                type: s.ActionType.SidebarOverrideInitialState,
                payload: {
                    open: !0,
                    tab: t
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importStar(n), i = r.__importStar(i), o = r.__importStar(o), t.reset = c, t.open = u, t.close = d, t.toggle = p, t.completeToggleOpen = m, t.selectTab = f, t.thirdpartyBlueDotOnboard = _, t.openFile = v, t.setComments2DisabledState = h, t.setComments2ShownState = g, t.setCommentingOnNewFile = w, t.OverrideInitialState = y
    }), define("modules/clean/react/file_sidebar/store/sidebar/helpers", ["require", "exports", "modules/clean/file_store/utils"], function(e, t, r) {
        "use strict";

        function n(e, t) {
            return !e && !t || !!e && !!t && r.areFilesEqual(e, t)
        }

        function i(e, t) {
            return !e && !t || !!e && !!t && e.id === t.id
        }

        function o(e, t) {
            return !n(e.file, t.file) || !i(e.user, t.user)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isFileSame = n, t.isUserSame = i, t.isContextChanged = o
    }), define("modules/clean/react/file_sidebar/store/sidebar/reactors", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/file_sidebar/file_sidebar_logger", "modules/clean/react/file_sidebar/store/sidebar/selectors", "modules/clean/react/file_sidebar/store/file_activity/selectors"], function(e, t, r, n, i, o, a) {
        "use strict";

        function s(e) {
            var t = o.getSidebarState(e),
                r = t.open,
                n = t.ready;
            return r && n
        }

        function l(e) {
            return !s(e)
        }

        function c(e) {
            return n.values(o.getTabsState(e)).every(function(e) {
                return e.ready
            })
        }

        function u(e) {
            return !c(e)
        }

        function d(e) {
            var t = o.getSidebarContext(e);
            return (t.file ? t.file.file_id : -1) + ":" + (t.user ? t.user.id : -1)
        }

        function p(e) {
            var t = o.getSidebarContext(e).user;
            i.logSidebarOpened({
                reason: o.getOpenReason(e),
                num_comments: o.getTabState(e, "comments").extra.commentCount,
                num_events: a.getVisibleActivityCount(e),
                viewing_user_id: t ? t.id : null
            })
        }

        function m(e) {
            e({
                changesFrom: l,
                changesTo: s
            }, function(e) {
                p(e.nextState)
            }), e({
                changes: function(e, t) {
                    if (s(e) && s(t)) {
                        var r = t.sidebar.tabs,
                            n = e.sidebar.tabs;
                        return !(n.activity.ready && n.comments.ready) && r.activity.ready && r.comments.ready
                    }
                    return !1
                }
            }, function(e) {
                p(e.nextState)
            });
            var t = -1,
                r = "";
            e({
                changes: function(e, t) {
                    return d(e) !== d(t)
                }
            }, function(e) {
                var n = e.nextState;
                t = Date.now(), r = d(n)
            }), e({
                changesFrom: u,
                changesTo: c
            }, function(e) {
                r === d(e.prevState) && i.logLoadSidebarTiming(Date.now() - t)
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importStar(n), o = r.__importStar(o), a = r.__importStar(a), t.reactors = m
    }), define("modules/clean/react/file_sidebar/store/sidebar/reducer", ["require", "exports", "tslib", "modules/clean/react/file_sidebar/store/sidebar/types"], function(e, t, r, n) {
        "use strict";

        function i(e, i) {
            var o;
            switch (i.type) {
                case n.ActionType.SidebarOverrideInitialState:
                    var a = i.payload,
                        s = a.open,
                        l = a.tab;
                    return r.__assign({}, e, {
                        open: s,
                        activeTab: l,
                        tabs: r.__assign({}, e.tabs, (o = {}, o[l] = r.__assign({}, e.tabs[l], {
                            show: !0
                        }), o)),
                        hasOverride: !0
                    });
                case n.ActionType.SidebarReset:
                    return r.__assign({}, t.INITIAL_STATE, {
                        open: e.open
                    });
                case n.ActionType.SidebarOpen:
                    return r.__assign({}, e, {
                        open: !0,
                        openReason: i.payload.reason
                    });
                case n.ActionType.SidebarClose:
                    return r.__assign({}, e, {
                        open: !1,
                        openReason: void 0
                    });
                case n.ActionType.SidebarSelectTab:
                    return r.__assign({}, e, {
                        activeTab: i.payload.tabName
                    });
                case n.ActionType.SidebarSetThirdPartyBlueDotOnboardState:
                    return r.__assign({}, e, {
                        thirdpartyBlueDotOnboarded: !0
                    });
                case n.ActionType.SidebarOpenFile:
                    var c = i.payload,
                        u = c.file,
                        d = c.isVersionHistoryMode,
                        p = c.user;
                    return r.__assign({}, e, {
                        openReason: void 0,
                        context: {
                            file: u,
                            isVersionHistoryMode: d,
                            user: p
                        },
                        tabs: {
                            activity: {
                                ready: !p,
                                show: d === !1 && e.tabs.activity.show,
                                count: 0
                            },
                            comments: {
                                ready: !1,
                                show: !1,
                                count: 0,
                                extra: {
                                    commentCount: 0
                                }
                            },
                            metadata: {
                                ready: !1,
                                show: !0
                            }
                        }
                    });
                case "FILE_ACTIVITY|LOADING_END":
                    return r.__assign({}, e, {
                        tabs: r.__assign({}, e.tabs, {
                            activity: {
                                ready: !0,
                                show: e.context.isVersionHistoryMode === !1 && i.state.enabled,
                                count: 0
                            }
                        })
                    });
                case n.ActionType.SidebarSetComments2DisabledState:
                    return r.__assign({}, e, {
                        tabs: r.__assign({}, e.tabs, {
                            comments: {
                                ready: !0,
                                show: !1,
                                count: 0,
                                extra: {
                                    commentCount: 0
                                }
                            }
                        })
                    });
                case n.ActionType.SidebarSetComments2ShownState:
                    return r.__assign({}, e, {
                        activeTab: e.hasOverride ? e.activeTab : "comments",
                        tabs: r.__assign({}, e.tabs, {
                            comments: {
                                ready: !0,
                                show: !e.hasOverride || e.tabs.comments.show,
                                count: 0,
                                extra: {
                                    commentCount: i.payload.commentCount
                                }
                            }
                        })
                    });
                case n.ActionType.SidebarIndicateNewFileNav:
                    return r.__assign({}, e, {
                        tabs: r.__assign({}, e.tabs, {
                            comments: {
                                ready: !1,
                                show: !0,
                                count: 0,
                                extra: {
                                    commentCount: 0
                                }
                            }
                        })
                    })
            }
            return e
        }

        function o(e, r) {
            void 0 === e && (e = t.INITIAL_STATE);
            var n = i(e, r);
            return n.ready = e.ready || n.tabs.activity.ready && n.tabs.comments.ready, e.ready || !n.ready || e.hasOverride || (n.tabs.comments.show && !n.tabs.activity.show ? n.activeTab = "comments" : !n.tabs.comments.show && n.tabs.activity.show && (n.activeTab = "activity"), n.tabs.comments.show && n.tabs.comments.count > 0 && (n.open = !0, n.openReason = n.openReason || "unread_comments", n.activeTab = "comments"), n.tabs.comments.show && n.tabs.comments.extra && n.tabs.comments.extra.commentCount > 0 && (n.open = !0, n.openReason = n.openReason || "comments2_unresolved_threads", n.activeTab = "comments")), n.ready && n.open && !n.openReason && (n.openReason = "sticky_state"), n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.INITIAL_STATE = {
            activeTab: "comments",
            open: !0,
            openReason: void 0,
            ready: !1,
            context: {
                file: void 0,
                isVersionHistoryMode: void 0,
                user: void 0
            },
            tabs: {
                activity: {
                    ready: !1,
                    show: !1,
                    count: 0
                },
                comments: {
                    ready: !1,
                    show: !1,
                    count: 0,
                    extra: {
                        commentCount: 0
                    }
                },
                metadata: {
                    ready: !1,
                    show: !1
                }
            },
            hasOverride: !1,
            thirdpartyBlueDotOnboarded: !1
        }, t.reducer = o
    }), define("modules/clean/react/file_sidebar/store/sidebar/selectors", ["require", "exports"], function(e, t) {
        "use strict";

        function r(e) {
            return e.sidebar
        }

        function n(e) {
            var t = r(e);
            return {
                activeTab: t.activeTab,
                open: t.open,
                openReason: t.openReason,
                ready: t.ready
            }
        }

        function i(e) {
            return r(e).openReason
        }

        function o(e) {
            return r(e).context
        }

        function a(e) {
            return r(e).tabs
        }

        function s(e, t) {
            return a(e)[t]
        }

        function l(e) {
            return r(e).thirdpartyBlueDotOnboarded
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getState = r, t.getSidebarState = n, t.getOpenReason = i, t.getSidebarContext = o, t.getTabsState = a, t.getTabState = s, t.getThirdPartyBlueDotOnboardedState = l
    }), define("modules/clean/react/file_sidebar/store/sidebar/types", ["require", "exports"], function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        (function(e) {
            e.SidebarOpen = "SIDEBAR|OPEN", e.SidebarReset = "SIDEBAR|RESET", e.SidebarClose = "SIDEBAR|CLOSE", e.SidebarSelectTab = "SIDEBAR|SELECT_TAB", e.SidebarOpenFile = "SIDEBAR|OPEN_FILE", e.SidebarToggle = "SIDEBAR|TOGGLE", e.SidebarIndicateNewFileNav = "SIDEBAR|INDICATE_NEW_FILE_NAV", e.SidebarSetComments2DisabledState = "SIDEBAR|SET_COMMENTS2_DISABLED_STATE", e.SidebarSetComments2ShownState = "SIDEBAR|SET_COMMENTS2_SHOWN_STATE", e.SidebarSetThirdPartyBlueDotOnboardState = "SIDEBAR|SET_THIRDPARTY_BLUEDOT_ONBOARDED_STATE", e.SidebarOverrideInitialState = "SIDEBAR|OVERRIDE_INITIAL_STATE"
        })(t.ActionType || (t.ActionType = {}))
    }), define("modules/clean/react/file_viewer/actionable", ["require", "exports", "tslib", "react", "modules/clean/file_store/utils", "modules/clean/react/open_in_app/button", "modules/clean/react/share_download/button", "modules/clean/react/extensions/client", "modules/clean/react/app_actions/app_actions_menu", "modules/clean/react/extensions/data/types", "modules/clean/react/file_viewer/open_button/open_button"], function(e, t, r, n, i, o, a, s, l, c, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n), t.Actionable = function(e) {
            var t, r = e.allowOpenInApp,
                d = e.extensionsConfig,
                p = e.variant,
                m = e.location,
                f = e.sizeClass,
                _ = e.user,
                v = e.userActionContext;
            return i.isSharedFile(e.file) ? (t = e.file, r && t.open_in_app_data ? n.default.createElement(o.OpenInAppButton, {
                urls: t.open_in_app_data,
                userActionContext: v
            }) : n.default.createElement(a.ShareDownloadButton, {
                copyable: t,
                importance: p,
                location: m,
                sharedLinkInfo: e.sharedLinkInfo,
                shareToken: e.shareToken,
                sharePermission: e.sharePermission,
                user: _
            })) : _ ? (t = e.file, d.displayState === s.DisplayState.ENABLED ? n.default.createElement(l.ExtensionsMenu, {
                file: t,
                user: _,
                showAsButtonIfDownloadOnly: !0,
                triggerType: c.TriggerType.PrimaryButton,
                telemetryContext: {
                    surface: "previews"
                },
                onPresentInZoom: function() {}
            }) : n.default.createElement(u.OpenButton, {
                file: t,
                user: _,
                justifyRight: !1,
                location: m,
                buttonVariant: p,
                sizeClass: f
            })) : null
        }
    }), define("modules/clean/react/file_viewer/app_download_interstitial/file_preview_app_download_interstitial", ["require", "exports", "tslib", "react", "modules/clean/analytics", "modules/clean/react/file_viewer/constants", "modules/clean/file_store/utils", "modules/clean/react/file_viewer/models", "modules/clean/react/previews/constants", "modules/clean/web_timing_logger", "modules/clean/react/file_viewer/app_download_interstitial/app_download_interstitial"], function(e, t, r, n, i, o, a, s, l, c, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n);
        var d = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onContinue = function() {
                    t.log(o.UserAction.AppDownloadInterstitialContinue), "function" == typeof t.props.onContinue && t.props.onContinue()
                }, t.onClose = function() {
                    t.log(o.UserAction.AppDownloadInterstitialClose), "function" == typeof t.props.onClose && t.props.onClose()
                }, t.onAppDownload = function() {
                    t.log(o.UserAction.AppDownloadInterstitialInstall)
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                c.mark_time_to_interactive(), this.setupLogger(), this.filePreviewSession.markPrimaryEvent(), this.log(o.UserAction.AppDownloadInterstitialView)
            }, t.prototype.componentWillReceiveProps = function(e) {
                e.file.ns_id === this.props.file.ns_id && e.file.sjid === this.props.file.sjid && e.fileViewerSession === this.props.fileViewerSession || this.setupLogger(e)
            }, t.prototype.setupLogger = function(e) {
                void 0 === e && (e = this.props);
                var t = this.props,
                    r = t.file,
                    n = t.fileViewerSession,
                    i = t.previewType,
                    o = t.previewSourceAction,
                    a = void 0 === o ? l.PreviewSourceAction.Visit : o,
                    c = t.previewSourceContext,
                    u = void 0 === c ? l.PreviewSourceContext.SharedLinkFile : c;
                n && (this.filePreviewSession = new s.FilePreviewSession({
                    file: r,
                    previewType: i,
                    fileViewerSession: n,
                    sourceAction: a,
                    sourceContext: u
                }))
            }, t.prototype.log = function(e) {
                var t = this.props,
                    r = t.fileViewerSession,
                    n = t.file;
                this.filePreviewSession && r && n.ns_id && n.sjid && i.MobileFilePreviewLogger.log(e, r.id, this.filePreviewSession.id, n.ns_id, n.sjid, {
                    context: o.UserActionContext.AppDownloadInterstitial
                })
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.file,
                    i = e.sharedLinkInfo,
                    o = r.__rest(e, ["file", "sharedLinkInfo"]);
                return n.default.createElement(u.AppDownloadInterstitial, r.__assign({
                    fileOrFolderName: a.getFilename(t),
                    open_in_app_data: t.open_in_app_data,
                    onContinue: this.onContinue,
                    onAppDownload: this.onAppDownload,
                    ownerName: i.ownerName,
                    ownerTeamName: i.ownerTeamName,
                    onClose: this.onClose
                }, o))
            }, t
        })(n.default.PureComponent);
        t.FilePreviewAppDownloadInterstitial = d
    }), define("modules/clean/react/file_viewer/exp_file_viewer_upsell_banner", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/constants/payments", "modules/core/i18n", "modules/clean/react_format"], function(e, t, r, n, i, o, a, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n), o = r.__importStar(o);
        var l = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = o.OUT_OF_SPACE_URL + "?oqa=oq_fp";
                return n.default.createElement("div", {
                    className: "fileviewer-upsell-banner"
                }, s.reactFormat(a._("Get more space to add more files to your Dropbox. <a>Upgrade now.</a>"), {
                    a: n.default.createElement("a", {
                        href: e
                    })
                }))
            }, t
        })(n.default.Component);
        t.ExpFileViewerUpsellBannerV2 = i.requireCssWithComponent(l, ["/static/css/exp_file_preview_upsell-vfli2_OuA.css"])
    }), define("modules/clean/react/file_viewer/file_preview", ["require", "exports", "tslib", "external/classnames", "react", "external/lodash", "file-viewer/core", "modules/clean/previews/constants", "modules/clean/previews/data/preview_type_util", "modules/clean/previews/util", "modules/clean/previews/util", "modules/clean/react/async/loadable", "modules/clean/cloud_docs/shared_components/routing", "modules/clean/cloud_docs/event_logging", "modules/clean/cloud_docs/types", "modules/clean/file_store/utils", "modules/clean/react/file_viewer/utils", "modules/clean/react/previews/constants", "file-viewer/core", "modules/clean/react/previews/loading_indicator", "modules/clean/react/previews/error/preview_error", "modules/clean/react/previews/preview_html", "modules/clean/react/previews/preview_image", "modules/clean/react/previews/preview_linkfile", "modules/clean/react/previews/video/preview_video", "modules/clean/react/previews/preview_pdf_loadable", "modules/clean/react/previews/preview_ppt_loadable", "modules/clean/react/previews/archive/preview_archive_loadable", "modules/core/i18n", "modules/core/browser", "modules/clean/react/file_viewer/file_preview_logging_manager", "modules/clean/referrer_cleansing_redirect", "modules/clean/redux/types", "modules/clean/previews/data/util", "modules/clean/react/snackbar"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _, v, h, g, w, y, b, E, S, P, T, C, k, I, x, A, M, F, O, R) {
        "use strict";

        function L(e) {
            var t = e.file,
                n = e.sourceAction,
                o = e.sourceContext,
                a = e.previewApiData;
            return i.default.createElement(A.FilePreviewSessionManager, {
                file: t,
                previewType: l.getPreviewType(a.data),
                sourceAction: n,
                sourceContext: o,
                render: function(t) {
                    return i.default.createElement(z, r.__assign({}, e, {
                        filePreviewSession: t
                    }))
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n), i = r.__importDefault(i), o = r.__importStar(o), l = r.__importStar(l), c = r.__importStar(c), x = r.__importStar(x), M = r.__importStar(M);
        var D = d.Loadable({
                loader: function() {
                    return new Promise(function(t, r) {
                        e(["modules/clean/react/previews/preview_image_zoom"], t, r)
                    }).then(r.__importStar).then(function(e) {
                        return e.PreviewImageZoom
                    })
                }
            }),
            N = d.Loadable({
                loader: function() {
                    return new Promise(function(t, r) {
                        e(["modules/clean/react/previews/limited_preview_message"], t, r)
                    }).then(r.__importStar).then(function(e) {
                        return e.LimitedPreviewMessage
                    })
                }
            }),
            U = x.get_uri().getQuery(),
            V = U.forceRivieraException,
            W = U.forceTestPdf,
            B = U.forceTestExcelHtml,
            j = (function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.triggerDynamicRoutingModalCheck()
                }, t.prototype.componentDidUpdate = function(e) {
                    var t = e.user,
                        r = e.file,
                        n = this.props,
                        i = n.user,
                        a = n.file;
                    o.isEqual(r, a) && o.isEqual(t, i) || this.triggerDynamicRoutingModalCheck()
                }, t.prototype.triggerDynamicRoutingModalCheck = function() {
                    var e = this.props,
                        t = e.user,
                        r = e.file,
                        n = e.file.file_id;
                    t && n && p.maybeShowDynamicRoutingModal(t, r, _.getExtension(r))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.doc,
                        n = t.autoprint_url,
                        o = t.image_url_tmpl,
                        s = t.refresh_url,
                        l = void 0 === s ? "" : s,
                        c = t.text_url_tmpl,
                        d = e.file,
                        p = e.filePreviewSession,
                        m = e.invalidateFrameMessenger,
                        f = e.isFullscreen,
                        v = e.isSidebarOpen,
                        h = e.location,
                        g = e.mode,
                        w = void 0 === g ? a.FileViewerMode.Default : g,
                        y = e.renderUnsupportedErrorPreview,
                        b = e.setRenderStatusSuccess,
                        E = e.sharePermission,
                        S = e.sidebar,
                        P = e.sizeClass,
                        k = e.triggerError;
                    if (!o || !c) return y();
                    var I = _.getExtension(d),
                        x = {
                            autoprintUrl: n,
                            currentMode: {
                                sidebar: S,
                                mode: w
                            },
                            revisionId: O.buildRevisionId(d.ns_id, d.sjid),
                            fileExtension: I,
                            filePreviewSession: p,
                            imageUrlTmpl: o,
                            isArchiveFile: !1,
                            isFullscreen: f,
                            isSidebarOpen: v,
                            onError: k,
                            useCanned: !!W,
                            refreshUrl: l,
                            location: h,
                            sharePermission: E,
                            sizeClass: P,
                            textUrlTmpl: c,
                            invalidateFrameMessenger: m,
                            setRenderStatusSuccess: b
                        };
                    return u.isPptExtension(I) ? i.default.createElement(C.PreviewPPTLoadable, r.__assign({}, x)) : i.default.createElement(T.PreviewPDFLoadable, r.__assign({}, x))
                }, t
            })(i.default.Component),
            z = (function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasError: !1
                    }, t.shouldDisableDownload = function() {
                        return !!t.props.sharePermission && !t.props.sharePermission.canViewContextMenuRoles.length
                    }, t.onContextMenu = function(e) {
                        t.shouldDisableDownload() && e.preventDefault()
                    }, t.onCopy = function(e) {
                        t.props.sharePermission && 0 === t.props.sharePermission.canDownloadRoles.length && e.preventDefault()
                    }, t.renderUnsupportedErrorPreview = function() {
                        return t.renderErrorPreview(h.ErrorType.SupportError)
                    }, t.showLoadingIndicator = function() {
                        return i.default.createElement(w.LoadingIndicator, {
                            className: "loading-indicator"
                        })
                    }, t.getErrorMessage = function(e, t, r) {
                        if (r && "sketch" === _.getExtension(r) && e === h.ErrorType.LoadError && t === g.RivieraStatus.UnsupportedFormat) return I._("This file can’t be previewed. Previews are               only available for files created in Sketch v43 and up.")
                    }, t.triggerError = function(e, r) {
                        t.setState({
                            hasError: !0,
                            errorType: e,
                            rivieraStatusCode: r
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    o.isEqual(e.file, this.props.file) || this.setState({
                        hasError: !1,
                        errorType: void 0
                    })
                }, t.prototype.componentDidMount = function() {
                    window.setTimeout(v.cleanupPrerenderPreview)
                }, t.prototype.renderImagePreview = function(e) {
                    var t = this.props,
                        n = t.file,
                        o = t.mode,
                        l = t.sidebar,
                        u = _.getExtension(n),
                        d = {
                            mode: o || a.FileViewerMode.Default,
                            sidebar: l
                        };
                    if (this.props.isFullscreen) return i.default.createElement(D, {
                        currentMode: d,
                        thumbnailUrlTmpl: e.thumbnail_url_tmpl,
                        fileCount: this.props.count,
                        fileIndex: this.props.index,
                        onError: this.triggerError,
                        onFlipNext: this.props.onNext,
                        onFlipPrevious: this.props.onPrevious,
                        filePreviewSession: this.props.filePreviewSession,
                        contextMenuDisabled: this.shouldDisableDownload(),
                        fileExtension: u,
                        fileId: this.props.file.file_id || "",
                        fileName: _.getFilename(this.props.file),
                        setRenderStatusSuccess: this.props.setRenderStatusSuccess
                    });
                    var p = {
                        currentMode: d,
                        "preview-url": e.thumbnail_url_tmpl,
                        "file-extension": u,
                        isFullscreen: this.props.isFullscreen,
                        shouldDisplayToolbar: this.props.shouldDisplayToolbar && !c.isLimitedPreview(n, s.PreviewType.Image),
                        index: this.props.index,
                        count: this.props.count,
                        onPrevious: this.props.onPrevious,
                        onError: this.triggerError,
                        onNext: this.props.onNext,
                        filePreviewSession: this.props.filePreviewSession,
                        contextMenuDisabled: this.shouldDisableDownload(),
                        nsId: this.props.file.ns_id,
                        sjId: this.props.file.sjid,
                        fileName: _.getFilename(this.props.file),
                        sizeClass: this.props.sizeClass,
                        setRenderStatusSuccess: this.props.setRenderStatusSuccess,
                        sharePermission: this.props.sharePermission
                    };
                    return i.default.createElement(E.PreviewImage, r.__assign({}, p))
                }, Object.defineProperty(t.prototype, "shouldShowActionables", {
                    get: function() {
                        return this.props.areActionablesEnabled && !_.isArchiveFile(this.props.file)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.renderVideoPreview = function(e) {
                    var t = this.props,
                        r = t.file,
                        n = t.hidePageChrome;
                    return i.default.createElement(P.PreviewVideo, {
                        title: _.getFilenameWithoutExtension(r),
                        fileExtension: _.getExtension(r),
                        previewUrl: e.transcode_url,
                        separateResolutionUrls: e.transcode_urls_separate_resolutions,
                        thumbnailUrlTmpl: e.poster_url_tmpl,
                        videoMetadataUrl: e.metadata_url,
                        videoContainer: e.container,
                        shouldFocusOnReady: this.props.shouldFocusOnReady,
                        filePreviewSession: this.props.filePreviewSession,
                        onError: this.triggerError,
                        sourceContext: this.props.sourceContext,
                        vttThumbnailsUrl: e.thumb_scrubber_vtt_url,
                        setRenderStatusSuccess: this.props.setRenderStatusSuccess,
                        user: this.props.user,
                        hidePageChrome: n
                    })
                }, t.prototype.renderLinkfilePreview = function(e) {
                    var t = this.props.file,
                        r = {
                            url: e.url,
                            authenticated: !!e.authenticated
                        };
                    return i.default.createElement(S.PreviewLinkfile, {
                        filename: _.getFilename(t),
                        data: r,
                        source: e.authenticated ? "browse" : "sharedLink",
                        filePreviewSession: this.props.filePreviewSession,
                        setRenderStatusSuccess: this.props.setRenderStatusSuccess
                    })
                }, t.prototype.getCommonHtmlPreviewProps = function() {
                    var e = this.props.file,
                        t = _.getExtension(e);
                    return {
                        count: this.props.count,
                        fileExtension: t,
                        filePreviewSession: this.props.filePreviewSession,
                        filename: _.getFilename(e),
                        index: this.props.index,
                        isFullscreen: this.props.isFullscreen,
                        onClickNext: this.props.onNext,
                        onClickPrevious: this.props.onPrevious,
                        onError: this.triggerError,
                        setRenderStatusSuccess: this.props.setRenderStatusSuccess,
                        sharePermission: this.props.sharePermission,
                        sizeClass: this.props.sizeClass
                    }
                }, t.prototype.renderExcelPreview = function() {
                    var e = this.props.previewApiData.data.preview_url;
                    if (!e) return this.renderUnsupportedErrorPreview();
                    var t = this.props.file,
                        n = _.getExtension(t);
                    return this.props.user && t.file_id && p.maybeShowDynamicRoutingModal(this.props.user, t, n), i.default.createElement(b.PreviewHTML, r.__assign({
                        src: e,
                        isExcel: !0,
                        forceRivieraException: Array.isArray(V) ? V[0] : "",
                        forceTestExcelHtml: !!B,
                        usesFrameMessenger: !0
                    }, this.getCommonHtmlPreviewProps()))
                }, t.prototype.renderHtmlifiedPreview = function(e) {
                    var t = e.htmlified_link,
                        n = e.uses_frame_messenger;
                    return t ? i.default.createElement(b.PreviewHTML, r.__assign({
                        src: t,
                        isExcel: !1,
                        usesFrameMessenger: n
                    }, this.getCommonHtmlPreviewProps())) : this.renderUnsupportedErrorPreview()
                }, t.prototype.renderRawHtmlPreview = function() {
                    var e = this.props.previewApiData.data.preview_url;
                    return e ? i.default.createElement(b.PreviewHTML, r.__assign({
                        src: e,
                        isExcel: !1,
                        usesFrameMessenger: !1
                    }, this.getCommonHtmlPreviewProps())) : this.renderUnsupportedErrorPreview()
                }, t.prototype.renderAudioPreview = function(e) {
                    var t = this.props.file;
                    return i.default.createElement(P.PreviewVideo, {
                        title: _.getFilenameWithoutExtension(t),
                        fileExtension: _.getExtension(t),
                        previewUrl: e.transcode_url,
                        videoContainer: e.container,
                        filePreviewSession: this.props.filePreviewSession,
                        shouldFocusOnReady: this.props.shouldFocusOnReady,
                        onError: this.triggerError,
                        setRenderStatusSuccess: this.props.setRenderStatusSuccess,
                        sourceContext: this.props.sourceContext,
                        isAudio: !0,
                        bytes: t.bytes,
                        waveformUrl: e.waveform_url,
                        user: this.props.user
                    })
                }, t.prototype.renderArchivePreview = function() {
                    return i.default.createElement(k.PreviewArchiveLoadable, {
                        rootFile: this.props.file,
                        previewUrl: this.props.previewApiData.data.preview_url,
                        fileSubpath: this.props.fileSubpath,
                        filePreviewSession: this.props.filePreviewSession,
                        onError: this.triggerError,
                        setRenderStatusSuccess: this.props.setRenderStatusSuccess,
                        sharedLinkUrl: this.props.sharedLinkUrl,
                        user: this.props.user
                    })
                }, t.prototype.renderCloudDocPreview = function(e) {
                    if (this.props.user && this.props.file.file_id && m.logUserAction({
                            actionEvent: f.UserActionEventType.PREVIEW,
                            userId: this.props.user.id,
                            docPathOrId: this.props.file.file_id,
                            actionSource: f.UserActionSourceType.WEB
                        }), !this.props.showCloudDocPreview && e.exit_url) return M.redirect(e.exit_url), null;
                    var t = this.props.file,
                        n = _.getExtension(t);
                    return ["gdoc", "gslides", "paper", "papert"].includes(n) ? i.default.createElement(j, r.__assign({}, this.props, {
                        doc: e,
                        renderUnsupportedErrorPreview: this.renderUnsupportedErrorPreview,
                        triggerError: this.triggerError
                    })) : ["gsheet"].includes(n) ? this.renderExcelPreview() : this.renderUnsupportedErrorPreview()
                }, t.prototype.renderErrorPreview = function(e) {
                    var t = this.state.rivieraStatusCode,
                        r = this.props,
                        n = r.count,
                        o = r.extensionsConfig,
                        c = r.file,
                        u = r.previewApiData,
                        d = r.filePreviewSession,
                        p = r.index,
                        m = r.isFullscreen,
                        f = r.isMobileUserAgent,
                        v = r.maxFilenameEmLength,
                        g = r.mode,
                        w = r.onNext,
                        b = r.onPrevious,
                        E = r.sharedLinkInfo,
                        S = r.sharePermission,
                        P = r.shareToken,
                        T = r.user,
                        C = l.getPreviewType(u.data),
                        k = this.props.shouldDisplayToolbar && !_.isArchiveFile(c) && C === s.PreviewType.Image,
                        I = e;
                    return g === a.FileViewerMode.Watermarking && (R.Snackbar.close(), I = h.ErrorType.WatermarkingError), i.default.createElement(y.PreviewError, {
                        file: c,
                        extensionsConfig: o,
                        preview: u.data,
                        maxFilenameEmLength: v,
                        filePreviewSession: d,
                        errorType: I,
                        user: T,
                        areActionablesEnabled: this.shouldShowActionables,
                        sharedLinkInfo: E,
                        shareToken: P,
                        sharePermission: S,
                        shouldDisplayToolbar: k,
                        index: p,
                        isFullscreen: m,
                        isMobileUserAgent: f,
                        count: n,
                        onPrevious: b,
                        onNext: w,
                        message: this.getErrorMessage(e, t, c),
                        sizeClass: this.props.sizeClass
                    })
                }, t.prototype.getPreviewTypeWhitelist = function() {
                    return this.props.previewTypeWhitelist || c.VALID_PREVIEW_TYPES
                }, t.prototype.viewedByOwner = function() {
                    return this.props.user && this.props.user.home_ns_id === this.props.file.ns_id
                }, t.prototype.choosePreview = function() {
                    var e = this.props,
                        t = e.file,
                        n = e.previewApiData,
                        o = this.getPreviewTypeWhitelist(),
                        a = this.validateFile(t, n);
                    if (a) return a;
                    if (n.status === F.ApiClientStatus.Request) return this.showLoadingIndicator();
                    if (n.status === F.ApiClientStatus.Error) return this.renderErrorPreview(h.ErrorType.ExtensionError);
                    if (!n.data || !n.data.content) return this.renderErrorPreview(h.ErrorType.ExtensionError);
                    var u = n.data.content,
                        d = l.getPreviewType(n.data);
                    if (c.isEmptyFile(t) && d !== s.PreviewType.CloudDoc) return this.renderErrorPreview(h.ErrorType.EmptyFileError);
                    if (null != o && !o.includes(d)) return this.renderErrorPreview(h.ErrorType.ExtensionError);
                    if (d === s.PreviewType.Restricted) return this.viewedByOwner() ? this.renderErrorPreview(h.ErrorType.UpsellError) : this.renderErrorPreview(h.ErrorType.ExtensionError);
                    switch (d) {
                        case s.PreviewType.Video:
                            return this.renderVideoPreview(u);
                        case s.PreviewType.Audio:
                            return this.renderAudioPreview(u);
                        case s.PreviewType.Archive:
                            return this.renderArchivePreview();
                        case s.PreviewType.Image:
                            return this.renderImagePreview(u);
                        case s.PreviewType.SsrDoc:
                            return i.default.createElement(j, r.__assign({}, this.props, {
                                doc: u,
                                renderUnsupportedErrorPreview: this.renderUnsupportedErrorPreview,
                                triggerError: this.triggerError
                            }));
                        case s.PreviewType.Linkfile:
                            return this.renderLinkfilePreview(u);
                        case s.PreviewType.CloudDoc:
                            return this.renderCloudDocPreview(u);
                        case s.PreviewType.Excel:
                            return this.renderExcelPreview();
                        case s.PreviewType.RawHTML:
                            return this.renderRawHtmlPreview();
                        case s.PreviewType.HTML:
                            return this.renderHtmlifiedPreview(u)
                    }
                }, t.prototype.validateFile = function(e, t) {
                    return e.is_dir && !c.isSupportedBundleFile(e) ? this.renderErrorPreview(h.ErrorType.ExtensionError) : null != e.ns_id || _.isArchiveFile(e) ? _.isSymLink(e) ? this.renderErrorPreview(h.ErrorType.SymLinkError) : t ? c.filesizeSupported(e, l.getPreviewType(t.data)) ? void 0 : this.renderErrorPreview(h.ErrorType.FileSizeError) : this.renderErrorPreview(h.ErrorType.ExtensionError) : this.renderErrorPreview(h.ErrorType.PendingUploadError)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.file,
                        r = e.previewApiData,
                        o = e.sharedLinkInfo,
                        a = e.shareToken,
                        s = e.sharePermission,
                        u = e.sizeClass,
                        d = e.user,
                        p = this.state,
                        m = p.errorType;
                    return p.hasError ? this.renderErrorPreview(m) : i.default.createElement("div", {
                        className: n.default({
                            "flex-preview-container": !0,
                            "no-download": s && 0 === s.canViewContextMenuRoles.length
                        }),
                        onContextMenu: this.onContextMenu,
                        onCopy: this.onCopy
                    }, _.isArchiveFile(t) ? null : i.default.createElement(A.FilePreviewPaasLoggerManager, {
                        file: t
                    }), this.choosePreview(), r && c.isLimitedPreview(t, l.getPreviewType(r.data)) ? i.default.createElement(N, {
                        extension: _.getExtension(t),
                        file: t,
                        sharedLinkInfo: o,
                        shareToken: a,
                        sharePermission: s,
                        shouldShowActionables: this.shouldShowActionables,
                        sizeClass: u,
                        user: d
                    }) : null)
                }, t.defaultProps = {
                    areActionablesEnabled: !0,
                    isFullscreen: !1,
                    sharePermission: null,
                    setRenderStatusSuccess: o.noop,
                    user: null
                }, t
            })(i.default.Component);
        t.FilePreview = z, t.FilePreviewWithLogging = L
    }), define("modules/clean/react/file_viewer/file_preview_logging_manager", ["require", "exports", "tslib", "react", "modules/clean/loggers/file_preview_logger", "modules/clean/loggers/file_viewer_logger", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/file_preview_event_emitter", "modules/clean/react/file_viewer/models", "modules/clean/react/previews/constants", "modules/clean/react/previews/frame_messenger_host", "external/lodash"], function(e, t, r, n, i, o, a, s, l, c, u, d) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n), o = r.__importStar(o), d = r.__importStar(d);
        var p = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                r.setUpFilePreviewLogger = function(e) {
                    r.teardownFilePreviewLogger(), r.filePreviewTimelineLogger = new i.FilePreviewTimelineLogger(e), r.filePreviewTimelineLogger.listenTo(s.filePreviewEventEmitter), r.filePreviewUserActionLogger = new i.FilePreviewUserActionLogger, r.filePreviewUserActionLogger.listenTo(s.filePreviewEventEmitter), r.filePreviewModeLogger = new i.FilePreviewModeLogger, r.filePreviewModeLogger.listenTo(s.filePreviewEventEmitter), r.filePreviewSidebarLogger = new i.FilePreviewSidebarLogger, r.filePreviewSidebarLogger.listenTo(s.filePreviewEventEmitter), r.filePreviewUpsellLogger = new i.FilePreviewUpsellLogger, r.filePreviewUpsellLogger.listenTo(s.filePreviewEventEmitter)
                }, r.teardownFilePreviewLogger = function() {
                    null != r.filePreviewTimelineLogger && r.filePreviewTimelineLogger.unlistenTo(s.filePreviewEventEmitter), null != r.filePreviewUserActionLogger && r.filePreviewUserActionLogger.unlistenTo(s.filePreviewEventEmitter), null != r.filePreviewModeLogger && r.filePreviewModeLogger.unlistenTo(s.filePreviewEventEmitter), null != r.filePreviewSidebarLogger && r.filePreviewSidebarLogger.unlistenTo(s.filePreviewEventEmitter), null != r.filePreviewUpsellLogger && r.filePreviewUpsellLogger.unlistenTo(s.filePreviewEventEmitter)
                }, r.logPreviewSessionEnded = function(e) {
                    void 0 === e && (e = c.PreviewSessionEndReason.Unknown);
                    var t = {
                        min_page_width_ratio: "",
                        max_page_width_ratio: "",
                        session_end_reason: e
                    };
                    r.state.filePreviewSession.recordEvent(a.EventType.FilePreviewSessionEnded, t)
                }, r.getNewFilePreviewSession = function(e) {
                    var t = e.file,
                        n = e.previewType,
                        i = e.sourceAction,
                        o = e.sourceContext,
                        s = new l.FilePreviewSession({
                            file: t,
                            previewType: n,
                            fileViewerSession: l.FileViewerSession.currentSession,
                            sourceAction: i,
                            sourceContext: o
                        });
                    return l.FilePreviewSession.currentSession = s, r.setUpFilePreviewLogger(s.id), s.recordEvent(a.EventType.FilePreviewAttemptStarted, {
                        window_width: "" + window.innerWidth,
                        window_height: "" + window.innerHeight
                    }), s
                }, r.windowCloseHandler = function() {
                    r.logPreviewSessionEnded(c.PreviewSessionEndReason.BeforeUnload)
                };
                var n = r.getNewFilePreviewSession(r.props);
                return r.state = {
                    filePreviewSession: n
                }, r
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                window.addEventListener("beforeunload", this.windowCloseHandler)
            }, t.prototype.componentWillUnmount = function() {
                this.logPreviewSessionEnded(c.PreviewSessionEndReason.Unmount), this.teardownFilePreviewLogger(), window.removeEventListener("beforeunload", this.windowCloseHandler)
            }, t.prototype.componentWillReceiveProps = function(e) {
                if (!d.isEqual(e.file, this.props.file)) {
                    this.logPreviewSessionEnded(c.PreviewSessionEndReason.NewFile);
                    var t = this.getNewFilePreviewSession(e);
                    this.setState({
                        filePreviewSession: t
                    })
                }
            }, t.prototype.render = function() {
                return this.props.render(this.state.filePreviewSession)
            }, t
        })(n.default.Component);
        t.FilePreviewSessionManager = p;
        var m = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onFrameMessage = function(e) {
                    var r = t.props.file,
                        n = e.action,
                        i = e.parameters;
                    "pagerendered" === n && o.logPageRendered(r, i)
                }, t.startLogger = function() {
                    t.frameMessenger = new u.PreviewFrameMessengerHost, t.frameMessenger.configureChildMessaging(".react-file-viewer__preview iframe", t.onFrameMessage, ["pagerendered"]), t.frameMessenger.startListening()
                }, t.stopLogger = function() {
                    t.frameMessenger.stopListening()
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.startLogger()
            }, t.prototype.componentWillUnmount = function() {
                this.stopLogger()
            }, t.prototype.render = function() {
                return null
            }, t
        })(n.default.Component);
        t.FilePreviewPaasLoggerManager = m
    }), define("modules/clean/react/file_viewer/file_viewer", ["require", "exports", "tslib", "external/classnames", "external/keymaster", "react", "external/lodash", "external/react-dom", "external/react-redux", "modules/clean/react/comments2/components/mobile_web_comments", "modules/clean/react/comments2/util", "modules/clean/analytics", "modules/clean/loggers/file_viewer_logger", "modules/clean/loggers/workflows_logger", "modules/clean/previews/constants", "modules/clean/previews/data/preview_type_util", "file-viewer/core", "modules/clean/react/file_sidebar/file_sidebar", "modules/clean/react/file_sidebar/file_sidebar_provider", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer/app_download_interstitial/file_preview_app_download_interstitial", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer/data/store", "modules/clean/react/file_viewer/full_screen_helpers", "modules/clean/react/file_viewer/exp_file_viewer_upsell_banner", "modules/clean/react/file_viewer/file_preview", "modules/clean/react/file_viewer/flippable_controls", "modules/clean/react/file_viewer/location_utils", "modules/clean/react/file_viewer/models", "modules/clean/react/file_viewer_sidebar/sidebar", "modules/clean/react/file_viewer/title_bar", "modules/clean/react/watermarking/controller", "modules/clean/react/watermarking/utils", "modules/clean/previews/data/preview_type_util", "modules/clean/react/keyboard_binding/keyboard_binding_provider", "modules/clean/react/keyboard_binding/keyboard_binding_connector", "modules/clean/react/keyboard_binding/keyboard_binding", "modules/clean/keycode", "modules/clean/react/location/with_location", "modules/clean/react/modal", "modules/clean/react/open_in_app/banner", "modules/clean/react/previews/constants", "modules/clean/react/previews/fidelity_survey/fidelity_survey", "modules/clean/react/size_class/constants", "modules/clean/react/size_class/size_class", "modules/clean/web_timing_logger", "modules/constants/python", "modules/core/browser", "modules/core/browser_detection", "modules/core/dom", "modules/clean/react/file_viewer/data/selectors", "modules/clean/previews/data/selectors", "modules/clean/react/css", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/utils", "modules/clean/react/file_viewer/files2_utils", "modules/clean/file_store/utils", "modules/clean/react/retrieval_success_banner/constants", "modules/clean/react/retrieval_success_banner/retrieval_success_filesview_banner", "modules/clean/sharing/constants", "modules/clean/react/file_viewer_sidebar/data_managers/async_commenting_data_manager", "modules/clean/react/file_viewer_sidebar/data_managers/async_activity_data_manager", "modules/clean/react/workflows/i18n/with_translations", "premium-workflows/components/trial/banner", "modules/clean/abuse/async_report_flag", "modules/clean/react/size_class/utils", "modules/clean/react/file_viewer_titlebar/titlebar", "file-viewer/core/data/modes/types", "modules/clean/react/file_viewer/prompt/loadable_prompt", "modules/clean/react/file_viewer/mode_manager", "modules/clean/react/file_viewer_sidebar/buttons/more_dropdown", "modules/clean/react/file_viewer_titlebar/watermarking_titlebar"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _, v, h, g, w, y, b, E, S, P, T, C, k, I, x, A, M, F, O, R, L, D, N, U, V, W, B, j, z, q, K, H, Y, G, Z, X, J, Q, $, ee, te, re, ne, ie, oe, ae, se, le, ce, ue, de, pe, me, fe, _e, ve, he) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n), i = r.__importDefault(i), o = r.__importDefault(o), a = r.__importStar(a), s = r.__importStar(s), p = r.__importStar(p), _ = r.__importStar(_), K = r.__importStar(K), H = r.__importStar(H), Y = r.__importStar(Y), Z = r.__importStar(Z);
        var ge = "",
            we = "",
            ye = (function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        modeClassnames: ""
                    }, t.previewSourceAction = t.props.initialPreviewSourceAction, t.previewSourceContext = t.props.initialPreviewSourceContext, t.fetchControllerMode = function() {
                        var e = t.props,
                            r = e.file,
                            n = e.sharedLinkInfo,
                            i = e.user,
                            o = e.sizeClass;
                        t.props.fetchControllerModeAction({
                            path: r.fq_path,
                            shared_link_url: n && n.url
                        }, i, o)
                    }, t.resetControllerMode = function() {
                        t.props.changeMode(v.FileViewerMode.Default)
                    }, t.focusInViewer = function() {
                        if (!ee.modalIsUp()) {
                            var e = s.findDOMNode(t).querySelector(".button-primary");
                            if (e) e.focus();
                            else {
                                var r = Z.getTabbableElementsIn(".react-file-viewer");
                                r.length && r[0].focus()
                            }
                        }
                    }, t.setupKeymaster = function() {
                        ge = i.default.getScope(), i.default.setScope("fileviewer")
                    }, t.cleanupKeymaster = function() {
                        i.default.clearScope("fileviewer"), i.default.setScope(ge)
                    }, t.shouldShowOpenInAppBanner = function() {
                        var e = t.props,
                            r = e.hidePageChrome,
                            n = e.isMobileUserAgent;
                        return !r && (n || G.is_mobile_or_tablet())
                    }, t.openInAppBannerOnClick = function() {
                        w.logUserAction($.UserAction.OpenInApp, $.UserActionContext.OpenInAppBanner)
                    }, t.renderOverflowMenuFnFactory = function(e) {
                        return function() {
                            var r = t.props,
                                n = r.file,
                                i = r.sharedLinkInfo,
                                a = r.isVersionHistoryMode,
                                s = r.shareToken,
                                l = r.sharePermission;
                            if (i) {
                                if (n && s && l) return o.default.createElement(ve.AsyncSharedFileMoreDropdown, {
                                    user: t.props.user,
                                    file: n,
                                    sizeClass: t.props.sizeClass,
                                    sharedLinkInfo: i,
                                    shouldDisplayActionButtons: !t.isViewingFileSubpath,
                                    shareToken: s,
                                    sharePermission: l,
                                    direction: e
                                })
                            } else {
                                if (a) return null;
                                if (t.props.user && n) return o.default.createElement(ve.AsyncMountedFileMoreDropdown, {
                                    user: t.props.user,
                                    file: n,
                                    sizeClass: t.props.sizeClass,
                                    direction: e
                                })
                            }
                            return null
                        }
                    }, t.renderManagers = function() {
                        var e = null == t.props.file.ns_id;
                        return o.default.createElement(o.default.Fragment, null, o.default.createElement(_e.ModeManager, {
                            isViewingFileSubpath: t.isViewingFileSubpath
                        }), o.default.createElement(ae.AsyncCommentingDataManager, {
                            currentFile: t.props.file,
                            isVersionHistoryMode: !!t.props.isVersionHistoryMode,
                            sharedLinkInfo: t.props.sharedLinkInfo,
                            user: t.props.user
                        }), te.isFiles2Enabled() && !e ? o.default.createElement(se.AsyncActivityDataManager, {
                            file: t.props.file,
                            isVersionHistoryMode: !!t.props.isVersionHistoryMode,
                            user: t.props.user
                        }) : null)
                    }, t.onTrialBannerClicked = function() {
                        m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkUpsellHeaderButtonClicked, F.getWatermarkMilestone(t.props.user)), Y.redirect("/buy?_tk=watermarking_header_upsell")
                    }, t.onInterstitialClose = function() {
                        t.props.onAppDownloadInterstitialDismissed()
                    }, t.onInterstitialContinue = function() {
                        t.props.onAppDownloadInterstitialDismissed()
                    }, t.getKeyboardBindings = a.memoize(function(e) {
                        return e ? [D.hydrateKeyboardBinding({
                            keyboardEventCriteria: {
                                which: N.KeyCode.ESC
                            },
                            callback: function() {
                                return S.exitFullScreen($.UserActionContext.Keyboard)
                            }
                        })] : [D.hydrateKeyboardBinding({
                            keyboardEventCriteria: {
                                which: N.KeyCode.F
                            },
                            callback: function() {
                                return S.enterFullScreen($.UserActionContext.Keyboard)
                            }
                        }), D.hydrateKeyboardBinding({
                            keyboardEventCriteria: {
                                which: N.KeyCode.ESC
                            },
                            callback: function(e) {
                                t.shouldIgnoreEscape(e) || null == t.props.onCloseViewer || t.props.onCloseViewer()
                            }
                        })]
                    }), t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setUpLogging()
                }, t.prototype.componentDidMount = function() {
                    var e = this.props,
                        t = e.file,
                        r = e.fetchShowOverQuotaUpsell,
                        n = e.onComponentDidMount,
                        i = e.user;
                    null != n && n(), this.setDocumentTitle(re.getFilename(t), !0), Z.scroll_lock_document(), p.start(), this.logView(), r(i), i && this.previewType && !this.props.hidePageChrome && this.props.fetchBestCampaignsAction(i, this.previewType), this.fetchControllerMode()
                }, t.prototype.componentWillUpdate = function(e) {
                    var t = e.file;
                    t !== this.props.file && (this.setDocumentTitle(re.getFilename(t)), this.previewSourceAction = B.PreviewSourceAction.Click, this.previewSourceContext = B.PreviewSourceContext.FileViewer), i.default.setScope("fileviewer"), e.mode !== this.props.mode && this.setState({
                        modeClassnames: "state-" + this.props.mode + "-out state-" + e.mode + "-in"
                    })
                }, t.prototype.componentDidUpdate = function(e) {
                    re.areFilesEqual(e.file, this.props.file) || this.logView(), e.previewApiData && O.isImage(e.previewApiData.data) && this.props.previewApiData && !O.isImage(this.props.previewApiData.data) && S.exitFullScreen()
                }, t.prototype.componentWillUnmount = function() {
                    this.unsetDocumentTitle(), Z.scroll_unlock_document(), null != this.props.onComponentWillUnmount && this.props.onComponentWillUnmount(), V.Modal.close(), this.resetControllerMode()
                }, Object.defineProperty(t.prototype, "fileSubpath", {
                    get: function() {
                        return k.getFileSubpath(this.props.location)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previewType", {
                    get: function() {
                        return this.props.previewApiData && _.getPreviewType(this.props.previewApiData.data)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isViewingFileSubpath", {
                    get: function() {
                        return _.isArchive(this.props.previewApiData.data) && !!this.fileSubpath
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.shouldSuppressPassInfo = function() {
                    return null == this.props.file.ns_id
                }, t.prototype.setUpLogging = function() {
                    if (I.FileViewerSession.currentSession = new I.FileViewerSession, this.props.fileViewTarget === H.FileViewTargetType.SHARED_CONTENT_LINK) {
                        var e = K.start_time(),
                            t = (new Date).getTime(),
                            r = oe.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_PAGE;
                        this.props.user && d.ShareTibEventLogger.log(this.props.user.id, "PREVIEW_RENDER", r, {
                            timing: t - e,
                            containing_ns_id: this.props.file.ns_id,
                            sjid: this.props.file.sjid
                        })
                    }
                }, t.prototype.isDownloadDisabled = function() {
                    return !(!this.props.sharePermission || !this.props.sharePermission.canDownloadRoles) && 0 === this.props.sharePermission.canDownloadRoles.length
                }, t.prototype.shouldShowAppDownloadInterstitial = function() {
                    return !this.props.appDownloadInterstitialDismissed && this.props.file.open_in_app_data
                }, t.prototype.shouldIgnoreEscape = function(e) {
                    var t = document.querySelector(".vjs-fullscreen");
                    return Z.focus_in_input() || Z.is_input(e.target) || document.querySelector(".annotation-bubble") || this.props.isFullscreen || this.fileSubpath || t
                }, t.prototype.setDocumentTitle = function(e, t) {
                    void 0 === t && (t = !1), t && (we = document.title), document.title = e
                }, t.prototype.unsetDocumentTitle = function() {
                    "" !== we && (document.title = we)
                }, t.prototype.logView = function() {
                    null === this.props.file.ns_id || ee.getSourceContext() === B.PreviewSourceContext.SharedLinkCollection || this.props.hidePageChrome || p.logView(this.props.file, this.props.user, this.props.fileViewTarget, this.props.fileViewOrigin, this.props.fileViewAction, null != this.props.sharedLinkInfo ? this.props.sharedLinkInfo.url : void 0, this.isDownloadDisabled())
                }, t.prototype.isImagePreviewAnnotationEnabled = function() {
                    return !(this.props.sizeClass === z.SizeClass.Small || this.props.hidePageChrome)
                }, t.prototype.renderFlippableControls = function() {
                    if (!(this.props.isFullscreen || this.isImagePreviewAnnotationEnabled() || null == this.props.fileIndex || [f.PreviewType.Video, f.PreviewType.Audio].includes(this.previewType) || this.props.isEditMode)) return o.default.createElement(C.FlippableControls, {
                        index: "" + (this.props.fileIndex + 1),
                        numFlippableFiles: this.props.fileCount,
                        onNext: this.props.onFlipNext,
                        onPrevious: this.props.onFlipPrevious
                    })
                }, t.prototype.renderFilePreview = function() {
                    var e = this.props.isEditMode;
                    return o.default.createElement("div", {
                        className: n.default("react-file-viewer__preview", "react-file-preview", {
                            "react-file-viewer__preview--edit-mode": e
                        })
                    }, o.default.createElement("div", {
                        className: "flex-preview-container"
                    }, this.maybeRenderFidelitySurvey(), this.renderReportFlag(), this.renderRetrievalSuccessBanner(), this.shouldShowOpenInAppBanner() && o.default.createElement(W.OpenInAppBanner, {
                        urls: this.props.file.open_in_app_data,
                        onClick: this.openInAppBannerOnClick
                    }), o.default.createElement(T.FilePreviewWithLogging, {
                        areActionablesEnabled: !this.props.hidePageChrome && null != this.props.file.ns_id,
                        count: this.props.fileCount,
                        extensionsConfig: this.props.extensionsConfig,
                        file: this.props.file,
                        previewApiData: this.props.previewApiData,
                        fileSubpath: this.fileSubpath,
                        index: this.props.fileIndex,
                        isFullscreen: this.props.isFullscreen,
                        isMobileUserAgent: this.props.isMobileUserAgent,
                        isSidebarOpen: this.props.isSidebarOpen,
                        maxFilenameEmLength: $.SizeClassFilenameLengthMap[this.props.sizeClass],
                        onNext: this.props.onFlipNext,
                        onPrevious: this.props.onFlipPrevious,
                        sharedLinkInfo: this.props.sharedLinkInfo,
                        location: this.props.location,
                        sharePermission: this.props.sharePermission,
                        shareToken: this.props.shareToken,
                        shouldFocusOnReady: !this.props.hidePageChrome,
                        sidebar: this.props.sidebar,
                        sourceAction: this.previewSourceAction,
                        sourceContext: this.previewSourceContext,
                        sharedLinkUrl: null != this.props.sharedLinkInfo ? this.props.sharedLinkInfo.url : void 0,
                        setRenderStatusSuccess: this.props.setRenderStatusSuccessForCurrentFile,
                        shouldDisplayToolbar: this.isImagePreviewAnnotationEnabled(),
                        sizeClass: this.props.sizeClass,
                        user: this.props.user,
                        mode: this.props.mode,
                        showCloudDocPreview: this.props.showCloudDocPreview
                    }), this.renderFlippableControls()))
                }, t.prototype.shouldRenderSidebar = function() {
                    return (te.isFiles2M3Enabled() ? this.props.sizeClass !== z.SizeClass.Small && !G.is_supported_mobile_browser() : !de.isSmallerThanLarge(this.props.sizeClass) && !G.is_mobile_or_tablet()) && !this.props.isFullscreen && !this.props.hidePageChrome && (!this.isViewingFileSubpath || te.isFiles2M3Enabled()) && null != this.props.file.ns_id && (this.previewType !== f.PreviewType.CloudDoc || te.isFiles2M3Enabled()) && (te.isFiles2Enabled() && F.allowWatermarkOrTrial(this.props.file, this.props.user) || this.props.mode !== v.FileViewerMode.Watermarking)
                }, t.prototype.renderLegacySidebar = function() {
                    return this.props.file ? o.default.createElement(h.FileSidebar, {
                        currentFile: this.props.file,
                        previewType: this.previewType,
                        headerComponent: this.props.sidebarHeaderComponent,
                        commentsDisabledOnFile: !!this.props.hideComments,
                        isVersionHistoryMode: !!this.props.isVersionHistoryMode,
                        sharedLinkInfo: this.props.sharedLinkInfo,
                        user: this.props.user,
                        mode: this.props.mode
                    }) : null
                }, t.prototype.renderSidebar = function() {
                    if (!this.shouldRenderSidebar()) return null;
                    var e = this.props,
                        t = e.sizeClass,
                        r = e.file,
                        n = e.user,
                        i = e.sharedLinkInfo,
                        a = e.isVersionHistoryMode,
                        s = e.shareToken,
                        l = e.sharePermission,
                        c = e.canRestoreRevision,
                        u = e.onRestoreRevision;
                    return te.isFiles2Enabled() ? o.default.createElement(x.Sidebar, {
                        sizeClass: t,
                        file: r,
                        user: n,
                        sharedLinkInfo: i,
                        isVersionHistoryMode: a,
                        isViewingFileSubpath: !!this.isViewingFileSubpath,
                        sharePermission: l,
                        shareToken: s,
                        previewType: this.previewType,
                        isSeenStatesEnabled: !this.shouldSuppressPassInfo(),
                        canRestoreRevision: c,
                        onRestoreRevision: u,
                        renderSidebarOverflowMenuFn: this.renderOverflowMenuFnFactory($.OverflowMenuDirection.BELOW)
                    }) : this.renderLegacySidebar()
                }, t.prototype.renderMobileComments = function() {
                    var e = this.props,
                        t = e.file,
                        r = e.sharedLinkInfo,
                        n = e.sizeClass,
                        i = e.user;
                    return this.props.isFullscreen || this.isViewingFileSubpath || !u.isComments2Mobile() ? null : o.default.createElement(c.MobileWebComments, {
                        currentFile: t,
                        previewType: this.previewType,
                        sharedLinkInfo: r,
                        user: i,
                        sizeClass: n
                    })
                }, t.prototype.renderBanner = function() {
                    return o.default.createElement("div", {
                        className: "react-file-viewer__banner"
                    }, this.renderUpsellBanner(), this.renderTrialBanner())
                }, t.prototype.renderTitleBar = function() {
                    return this.props.isFullscreen || this.props.hidePageChrome && !_.isArchive(this.props.previewApiData.data) ? null : te.isFiles2M3Enabled() ? this.props.mode === v.FileViewerMode.Watermarking ? o.default.createElement(he.WatermarkingTitlebar, {
                        file: this.props.file,
                        maxFilenameEmLength: $.SizeClassFilenameLengthMap[this.props.sizeClass]
                    }) : o.default.createElement(pe.FileTitleBar, {
                        file: this.props.file,
                        maxFilenameEmLength: $.SizeClassFilenameLengthMap[this.props.sizeClass],
                        isViewingFileSubpath: this.isViewingFileSubpath,
                        sizeClass: this.props.sizeClass,
                        user: this.props.user || null,
                        isSidebarOpen: this.props.sidebar.visibility === me.SidebarVisibility.Open,
                        closeUrl: this.props.titleBarCloseUrl,
                        onClose: this.props.onCloseViewer,
                        canClose: this.props.canClose,
                        hidePageChrome: this.props.hidePageChrome,
                        fileViewAction: this.props.fileViewAction,
                        fileViewOrigin: this.props.fileViewOrigin,
                        isVersionHistoryMode: this.props.isVersionHistoryMode,
                        sharedLinkInfo: this.props.sharedLinkInfo,
                        fileSubpath: this.fileSubpath,
                        previewType: this.previewType,
                        renderTitlebarOverflowMenuFn: this.renderOverflowMenuFnFactory($.OverflowMenuDirection.BELOW)
                    }) : o.default.createElement("div", {
                        className: n.default("react-file-viewer__title-bar", {
                            "react-file-viewer__title-bar--edit-mode": this.props.isEditMode
                        }),
                        id: "react-file-viewer__title-bar"
                    }, o.default.createElement(A.TitleBar, {
                        canClose: this.props.canClose,
                        canRestoreRevision: this.props.canRestoreRevision,
                        closeUrl: this.props.titleBarCloseUrl,
                        file: this.props.file,
                        fileSubpath: this.fileSubpath,
                        fileViewAction: this.props.fileViewAction,
                        fileViewOrigin: this.props.fileViewOrigin,
                        hidePageChrome: this.props.hidePageChrome,
                        isSeenStatesEnabled: !this.shouldSuppressPassInfo(),
                        isVersionHistoryMode: this.props.isVersionHistoryMode,
                        isViewingFileSubpath: this.isViewingFileSubpath,
                        maxFilenameEmLength: $.SizeClassFilenameLengthMap[this.props.sizeClass],
                        onClose: this.props.onCloseViewer,
                        onMount: this.focusInViewer,
                        onRestoreRevision: this.props.onRestoreRevision,
                        previewApiData: this.props.previewApiData,
                        sharedLinkInfo: this.props.sharedLinkInfo,
                        sharePermission: this.props.sharePermission,
                        shareToken: this.props.shareToken,
                        sizeClass: this.props.sizeClass,
                        user: this.props.user || null
                    }), this.renderUpsellBanner())
                }, t.prototype.shouldAllowFileDonation = function() {
                    return null == this.props.sharedLinkInfo && (null == this.props.user || this.props.user.home_ns_id === this.props.file.ns_id)
                }, t.prototype.renderRetrievalSuccessBanner = function() {
                    var e = this.props,
                        t = e.user,
                        r = e.hidePageChrome,
                        n = e.isEditMode,
                        i = e.renderStatus,
                        a = e.sizeClass;
                    return t && ee.shouldShowRetrievalSuccessBanner({
                        renderStatus: i,
                        hidePageChrome: r,
                        sizeClass: a,
                        isEditMode: n
                    }) ? o.default.createElement(ie.RetrievalSuccessFilesviewBanner, {
                        user: this.props.user,
                        displayContext: ne.SearchSuccessDisplayContext.PREVIEW
                    }) : null
                }, t.prototype.maybeRenderFidelitySurvey = function() {
                    var e = this.props,
                        t = e.file,
                        r = e.hidePageChrome,
                        n = e.isEditMode,
                        i = e.renderStatus,
                        a = e.sizeClass;
                    return ee.canShowFidelitySurvey({
                        file: t,
                        sizeClass: a,
                        hidePageChrome: r,
                        renderStatus: i,
                        isEditMode: n
                    }) ? o.default.createElement(j.FidelitySurvey, {
                        allowFileDonation: this.shouldAllowFileDonation(),
                        file: t
                    }) : null
                }, t.prototype.renderReportFlag = function() {
                    return this.props.sharedLinkInfo && this.props.sharedLinkInfo.hasPublicAudienceOrVisibility !== !1 && !this.props.hidePageChrome ? o.default.createElement(ue.AsyncReportFlag, {
                        sharedLink: this.props.sharedLinkInfo.url
                    }) : null
                }, t.prototype.renderUpsellBanner = function() {
                    return !this.props.showOverQuotaUpsell || !te.isFiles2M3Enabled() && this.props.isEditMode ? null : o.default.createElement(P.ExpFileViewerUpsellBannerV2, null)
                }, t.prototype.renderTrialBanner = function() {
                    var e = this.props,
                        t = e.mode;
                    return e.isTrialMode ? o.default.createElement(ce.Banner, {
                        mode: t,
                        onClick: this.onTrialBannerClicked
                    }) : null
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        r = e.file,
                        i = e.hidePageChrome,
                        a = e.isFullscreen,
                        s = e.sharedLinkInfo,
                        l = e.transparentBackground,
                        c = e.user,
                        d = e.isEditMode,
                        p = e.campaign,
                        m = re.getFilename(r),
                        _ = this.previewType;
                    return this.shouldShowAppDownloadInterstitial() ? o.default.createElement("div", {
                        "aria-label": m
                    }, o.default.createElement(y.FilePreviewAppDownloadInterstitial, {
                        sharedLinkInfo: s,
                        file: r,
                        previewType: _,
                        fileViewerSession: I.FileViewerSession.currentSession,
                        previewSourceAction: this.previewSourceAction,
                        previewSourceContext: this.previewSourceContext,
                        onClose: this.onInterstitialClose,
                        onContinue: this.onInterstitialContinue
                    })) : o.default.createElement(R.KeyboardBindingProvider, {
                        onDestroy: this.cleanupKeymaster,
                        onSetup: this.setupKeymaster
                    }, o.default.createElement(be, {
                        ns_id: r.ns_id
                    }, o.default.createElement("div", {
                        "aria-label": m,
                        className: n.default("react-file-viewer", "preview-type-" + (this.previewType ? this.previewType.toLowerCase() : "unknown"), t, this.state.modeClassnames, {
                            "react-file-viewer--files2m3": te.isFiles2M3Enabled(),
                            "no-background": l && !a,
                            "react-file-viewer--files2": te.isFiles2Enabled(),
                            "react-file-viewer--edit-mode": te.isFiles2M3Enabled() && d
                        }),
                        role: "dialog"
                    }, o.default.createElement(L.KeyboardBindingConnector, {
                        keyboardBindings: this.getKeyboardBindings(a)
                    }), te.isFiles2M3Enabled() && this.renderBanner(), o.default.createElement("div", {
                        className: "react-file-viewer__main"
                    }, p && c && !i ? o.default.createElement(fe.FileViewerPrompt, {
                        user: c,
                        campaign: p
                    }) : null, !te.isFiles2M3Enabled() && this.renderTrialBanner(), te.isFiles2M3Enabled() ? null : this.renderTitleBar(), o.default.createElement("div", {
                        className: n.default("react-file-viewer__content", "comments2", {
                            "comments2-mobile-web": u.isComments2Mobile(),
                            "comments2-annotation-enabled": !0,
                            "video-audio": this.previewType === f.PreviewType.Video || this.previewType === f.PreviewType.Audio,
                            "react-file-viewer__content--edit-mode": d
                        }),
                        "data-preview-type": _,
                        "data-theme": "web"
                    }, te.isFiles2M3Enabled() ? this.renderTitleBar() : null, this.renderFilePreview(), te.isFiles2M3Enabled() ? null : this.renderSidebar(), this.renderMobileComments(), !te.isFiles2Enabled() && F.allowWatermarkOrTrial(r, c) ? o.default.createElement(M.WatermarkingController, {
                        file: r,
                        user: c
                    }) : null, this.renderManagers()), te.isFiles2M3Enabled() ? o.default.createElement("div", {
                        className: n.default("react-file-viewer__sidebar"),
                        "data-preview-type": _,
                        "data-theme": "web"
                    }, this.renderSidebar()) : null))))
                }, t.defaultProps = {
                    canClose: !1,
                    canRestoreRevision: !1,
                    className: "",
                    hideComments: !1,
                    hidePageChrome: !1,
                    isVersionHistoryMode: !1,
                    forceFileUnlocked: !1,
                    oref: H.OREF_CONSTANTS.BROWSE_UNKNOWN,
                    sizeClass: z.SizeClass.Large,
                    fileCount: 0,
                    showCloudDocPreview: !1
                }, t
            })(o.default.Component);
        t._FileViewer = ye;
        var be = function(e) {
                var t = e.children;
                return null == e.ns_id ? o.default.createElement(o.default.Fragment, null, t) : o.default.createElement(g.FileSidebarProvider, null, t)
            },
            Ee = function(e) {
                return null != e.file ? o.default.createElement(ye, r.__assign({}, e)) : o.default.createElement("div", null)
            },
            Se = U.withLocation(Ee),
            Pe = q.withSizeClass(Se, {
                isResponsiveEnabled: ee.isResponsiveEnabled,
                responsiveClassName: $.ResponsiveClassName
            }),
            Te = le.withTranslations(Pe),
            Ce = l.connect(function(e, t) {
                var r = X.getAppDownloadInterstitial(e);
                void 0 === r && t && (r = t.appDownloadInterstitialDismissed);
                var n = X.getActiveFile(e);
                return {
                    appDownloadInterstitialDismissed: r,
                    file: n,
                    mode: X.getMode(e),
                    isFullscreen: X.getIsFullScreen(e),
                    isSidebarOpen: X.getIsSidebarOpen(e),
                    renderStatus: X.getRenderStatusForCurrentFile(e),
                    showOverQuotaUpsell: X.getShowOverQuotaUpsell(e),
                    sidebar: X.getSidebar(e),
                    isEditMode: X.getIsEditMode(e),
                    isTrialMode: X.getIsTrialMode(e),
                    campaign: X.getSelectedPromptCampaign(e),
                    previewApiData: J.getApiDataForFile(e, n),
                    extensionsConfig: X.getExtensionsConfig(e)
                }
            }, {
                onAppDownloadInterstitialDismissed: b.dismissAppDownloadInterstitial,
                fetchShowOverQuotaUpsell: b.fetchShowOverQuotaUpsell,
                setRenderStatusSuccessForCurrentFile: b.setRenderStatusSuccessForCurrentFile,
                fetchControllerModeAction: b.fetchControllerModeAction,
                fetchBestCampaignsAction: b.fetchBestCampaignsAction,
                changeMode: b.changeMode
            })(Te),
            ke = E.getStoreForFileViewer(),
            Ie = function(e) {
                return o.default.createElement(l.Provider, {
                    store: ke
                }, o.default.createElement(Ce, r.__assign({}, e)))
            },
            xe = ["/static/css/preview_flexbox_layout-vflNFyVwu.css", "/static/css/react_file_viewer-vflasiujL.css", "/static/css/react_title_bar-vfljbaHsN.css", "/static/css/spectrum/index.web-vflagwTbb.css", "/static/js/file-viewer/index.web-vfln95jNC.css", "/static/js/premium-workflows/index.web-vflcGJyOk.css"],
            Ae = Q.requireCssWithComponent(Ie, xe);
        t.FileViewer = Ae
    }), define("modules/clean/react/file_viewer/flippable_controls", ["require", "exports", "tslib", "react", "modules/clean/react/sprite", "modules/core/i18n"], function(e, t, r, n, i, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n);
        var a = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handlePreviousClick = function() {
                    t.props.onPrevious && t.props.onPrevious()
                }, t.handleNextClick = function() {
                    t.props.onNext && t.props.onNext()
                }, t
            }
            return r.__extends(t, e), t.prototype.getNavText = function() {
                return o._("%(cur_file_num)s of %(num_total_files)s").format({
                    cur_file_num: this.props.index,
                    num_total_files: this.props.numFlippableFiles
                })
            }, t.prototype.render = function() {
                if (this.props.numFlippableFiles <= 1) return null;
                var e = o._("Flip left", {
                        comment: "Flip to the previous file in a series of files when previewing files on the web"
                    }),
                    t = o._("Flip right", {
                        comment: "Flip to the next file in a series of files when previewing files on the web"
                    });
                return n.default.createElement("div", {
                    className: "react-file-viewer__controls"
                }, n.default.createElement("button", {
                    className: "nav-control",
                    onClick: this.handlePreviousClick
                }, n.default.createElement(i.Sprite, {
                    group: "web",
                    name: "s_flip_left",
                    alt: e
                })), n.default.createElement("div", {
                    className: "nav-text"
                }, this.getNavText()), n.default.createElement("button", {
                    className: "nav-control",
                    onClick: this.handleNextClick
                }, n.default.createElement(i.Sprite, {
                    group: "web",
                    name: "s_flip_right",
                    alt: t
                })))
            }, t
        })(n.default.Component);
        t.FlippableControls = a
    }), define("modules/clean/react/file_viewer/full_screen_helpers", ["require", "exports", "modules/clean/react/file_viewer/data/store", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer/constants"], function(e, t, r, n, i, o) {
        "use strict";

        function a(e) {
            document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("MSFullscreenChange", e), document.addEventListener("mozfullscreenchange", e)
        }

        function s(e) {
            document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("MSFullscreenChange", e), document.removeEventListener("mozfullscreenchange", e)
        }

        function l(e) {
            window.addEventListener("popstate", e)
        }

        function c(e) {
            window.removeEventListener("popstate", e)
        }

        function u() {
            var e = document.body;
            null != e.requestFullscreen ? e.requestFullscreen() : null != e.msRequestFullscreen ? e.msRequestFullscreen() : null != e.mozRequestFullScreen ? e.mozRequestFullScreen() : null != e.webkitRequestFullscreen && e.webkitRequestFullscreen()
        }

        function d() {
            var e = document;
            e.exitFullscreen ? e.exitFullscreen() : e.msExitFullscreen ? e.msExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitExitFullscreen && e.webkitExitFullscreen()
        }

        function p() {
            S.dispatch(n.openFullScreen())
        }

        function m() {
            S.dispatch(n.closeFullScreen())
        }

        function f() {
            b() || w(o.UserActionContext.Browser)
        }

        function _() {
            w(o.UserActionContext.Browser)
        }

        function v() {
            a(f), l(_)
        }

        function h() {
            s(f), c(_)
        }

        function g(e) {
            p(), u(), v(), e && i.logUserAction(o.UserAction.ToggleFullscreenOn, e)
        }

        function w(e) {
            h(), m(), d(), e && i.logUserAction(o.UserAction.ToggleFullscreenOff, e)
        }

        function y() {
            var e = document.body;
            return e.requestFullscreen || e.msRequestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullscreen
        }

        function b() {
            var e = document;
            return null != e.fullScreen ? e.fullScreen : null != e.webkitIsFullScreen ? e.webkitIsFullScreen : null != e.mozFullScreen ? e.mozFullScreen : null != e.msFullscreenElement || null != e.fullscreenElement
        }

        function E(e, t) {
            return e || b() ? w(t) : g(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var S = r.getStoreForFileViewer();
        t.enterFullScreen = g, t.exitFullScreen = w, t.browserSupportFullScreen = y, t.isBrowserFullScreen = b, t.toggleFullScreen = E
    }), define("modules/clean/react/file_viewer/mode_manager", ["require", "exports", "tslib", "react", "external/react-redux", "modules/clean/react/file_viewer/data/selectors", "modules/clean/react/file_viewer/data/actions", "file-viewer/core"], function(e, t, r, n, i, o, a, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importDefault(n);
        var l = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                this.unavailableModes()[this.props.mode] && this.props.mode !== s.FileViewerMode.Default && this.props.changeMode(s.FileViewerMode.Default)
            }, t.prototype.unavailableModes = function() {
                var e = r.__assign({}, this.props.disabledModes);
                return this.props.isViewingFileSubpath && (e[s.FileViewerMode.Commenting] = !0), e
            }, t.prototype.render = function() {
                return null
            }, t
        })(n.default.PureComponent);
        t.UnconnectedModeManager = l, t.ModeManager = i.connect(function(e) {
            return {
                mode: o.getMode(e),
                disabledModes: o.getDisabledModes(e)
            }
        }, {
            changeMode: a.changeMode
        })(l)
    }), define("modules/clean/react/file_viewer/more_dropdown/models", ["require", "exports", "tslib", "external/lodash"], function(e, t, r, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importStar(n);
        var i = (function() {
                function e() {}
                return e.prototype.equals = function(e) {
                    return n.isEqual(this, e)
                }, e
            })(),
            o = (function(e) {
                function t(t) {
                    void 0 === t && (t = {});
                    var r = e.call(this) || this;
                    return r.className = t.className || null, r.fileActionButtonType = t.fileActionButtonType || null, r.handler = t.handler || n.noop, r.component = t.component || null, r.sortWeight = t.sortWeight || 0, r
                }
                return r.__extends(t, e), t
            })(i);
        t.MoreOption = o;
        var a = (function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.fileActionButtonGroup = t.fileActionButtonGroup, r.options = t.options || [], r.sortWeight = t.sortWeight || 0, r
            }
            return r.__extends(t, e), t
        })(i);
        t.MoreOptionGroup = a
    }), define("modules/clean/react/file_viewer/more_dropdown/more_option_registry", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/file_viewer/more_dropdown/models"], function(e, t, r, n, i) {
        "use strict";

        function o(e, t) {
            return e.filter(function(e) {
                return e !== t
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n = r.__importStar(n);
        var a = (function() {
                function e() {
                    this.listeners = []
                }
                return e.prototype.emitChange = function() {
                    return this.listeners.forEach(function(e) {
                        return e()
                    })
                }, e.prototype.addListener = function(e) {
                    var t = this;
                    return this.listeners.push(e),
                        function() {
                            var r = t.listeners.indexOf(e);
                            r > -1 && t.listeners.splice(r, 1)
                        }
                }, e.prototype.removeListeners = function() {
                    this.listeners = []
                }, e
            })(),
            s = (function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.options = [], t
                }
                return r.__extends(t, e), t.prototype.isValidMoreOption = function(e) {
                    return null != e.fileActionButtonType
                }, t.prototype.isValidMoreOptionGroup = function(e) {
                    var t = this,
                        r = e.options;
                    return r.length && r.every(function(e) {
                        return t.isValidMoreOption(e)
                    })
                }, t.prototype.isValidOption = function(e) {
                    return e instanceof i.MoreOption && this.isValidMoreOption(e) || e instanceof i.MoreOptionGroup && this.isValidMoreOptionGroup(e)
                }, t.prototype.reset = function() {
                    this.options = [], this.removeListeners()
                }, t.prototype.getOptionItems = function() {
                    return n.sortBy(this.options.slice(), function(e) {
                        return e.sortWeight
                    })
                }, t.prototype.addOption = function(e) {
                    if (!this.isValidOption(e)) throw new Error("Option needs to be a valid MoreOption or MoreOptionGroup");
                    this.options = this.options.concat([e]), this.emitChange()
                }, t.prototype.removeOption = function(e) {
                    if (null != e && !this.isValidOption(e)) throw new Error("Option needs to be a valid MoreOption or MoreOptionGroup");
                    var t = this.options.length;
                    this.options = o(this.options, e), this.options.length < t && this.emitChange()
                }, t.prototype.replaceOption = function(e, t) {
                    if (null == t) throw new Error("Please provide option to replace it with. Otherwise use removeOption");
                    if (!this.isValidOption(e) || !this.isValidOption(t)) throw new Error("Option needs to be a valid MoreOption or MoreOptionGroup");
                    if (!e.equals(t)) {
                        var r = !1;
                        this.options = this.options.map(function(n) {
                            return n === e ? (r = !0, t) : n
                        }), r && this.emitChange()
                    }
                }, t
            })(a);
        t.MoreOptionRegistry = s, t.moreOptionRegistry = new s
    });
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer/open_button/open_button", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.OpenButton = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer/open_button/open_button_component"], t, r)
            }).then(__importStar).then(function(e) {
                return e.OpenButton
            })
        }
    })
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer/prompt/loadable_prompt", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FileViewerPrompt = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer/prompt/prompt"], t, r)
            }).then(__importStar).then(function(e) {
                return e.SyncFileViewerPrompt
            })
        }
    })
}), define("modules/clean/react/file_viewer/title_bar", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.TitleBar = i.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer/title_bar_components"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.ConnectedTitleBar
            })
        },
        loading: n.default.createElement("div", {
            className: "react-title-bar"
        })
    })
}), define("modules/clean/react/file_viewer/utils", ["require", "exports", "tslib", "modules/clean/ajax", "modules/core/browser", "modules/clean/previews/constants", "modules/clean/react/file_viewer/constants", "modules/clean/previews/data/preview_type_util", "modules/core/uri", "modules/clean/react/previews/constants", "modules/clean/react/previews/image_helpers", "modules/clean/react/file_viewer/constants", "modules/clean/react/size_class/constants", "modules/clean/previews/api"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m) {
    "use strict";

    function f(e, t) {
        n.SilentBackgroundRequest({
            url: "/ow/get_available_tooltips",
            dataType: "json",
            success: function(e) {
                return t(e)
            },
            subject_user: e
        })
    }

    function _(e, t) {
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var n = e[r];
                for (var i in n)
                    if (n.hasOwnProperty(i)) {
                        var o = n[i],
                            a = o.extensions;
                        if (a.indexOf(t) > -1) return {
                            vendor: r,
                            application: i
                        }
                    }
            }
        return null
    }

    function v(e, t, r) {
        "acrobat_or_reader" === r ? n.SilentBackgroundRequest({
            url: "/ow/log_adobe_tooltip_impression",
            data: {
                app_name: r,
                extension: e
            },
            subject_user: t
        }) : n.SilentBackgroundRequest({
            url: "/ow/msft/log_tooltip_impression",
            data: {
                app_type: r,
                extension: e
            },
            subject_user: t
        })
    }

    function h(e, t) {
        if (e === a.SplitButtonActionLocation.Main) {
            if (t === a.FileViewerPane.TitleBar) return a.UserActionContext.TitleBarMain;
            if (t === a.FileViewerPane.PreviewContent) return a.UserActionContext.PreviewContentMain
        } else if (e === a.SplitButtonActionLocation.Split) {
            if (t === a.FileViewerPane.TitleBar) return a.UserActionContext.TitleBarSplitButton;
            if (t === a.FileViewerPane.PreviewContent) return a.UserActionContext.PreviewContentSplitButton
        }
        return a.UserActionContext.Unknown
    }

    function g() {
        for (var e = !1, t = document.getElementsByClassName("db-modal-wrapper"), r = 0; !e && r < t.length; r++) {
            e = "none" !== window.getComputedStyle(t[r]).display
        }
        return e
    }

    function w() {
        var e = document.querySelectorAll(".prerender-preview");
        Array.prototype.forEach.call(e, function(e) {
            e.style.display = "none"
        })
    }

    function y() {
        return new l.URI({
            path: "/login",
            query: {
                cont: i.get_href()
            }
        }).toString()
    }

    function b(e) {
        switch (e) {
            case o.PreviewType.Image:
                return a.FileViewerInterfaceType.Window;
            case o.PreviewType.SsrDoc:
                return a.FileViewerInterfaceType.Frame;
            default:
                return
        }
    }

    function E(e) {
        return !e
    }

    function S(e, t) {
        return E(e) || t && t.canDownloadRoles.length > 0
    }

    function P(e) {
        return null != e && !e.is_paper_disabled
    }

    function T(e) {
        var t = e.file,
            r = e.renderStatus,
            n = e.hidePageChrome,
            i = e.sizeClass,
            o = e.isEditMode;
        return !!t && (r === d.PreviewRenderStatus.Succeeded && (!n && (i !== p.SizeClass.Small && !o)))
    }

    function C() {
        var e = i.get_uri().path;
        return /^\/(home|work|personal|search)/.test(e) ? c.PreviewSourceContext.Browse : /^\/h$/.test(e) ? c.PreviewSourceContext.Home : /^\/(s|scl\/fi)\//.test(e) ? c.PreviewSourceContext.SharedLinkFile : /^\/(sh|scl\/fo)\//.test(e) ? c.PreviewSourceContext.SharedLinkFolder : /^\/sc\//.test(e) ? c.PreviewSourceContext.SharedLinkCollection : /^\/history/.test(e) ? c.PreviewSourceContext.VersionHistory : void 0
    }

    function k() {
        switch (C()) {
            case c.PreviewSourceContext.SharedLinkFile:
            case c.PreviewSourceContext.SharedLinkFolder:
                return c.PreviewSourceAction.Visit;
            default:
                return c.PreviewSourceAction.Click
        }
    }

    function I(e, t) {
        if (0 !== e.length) {
            var r = [];
            [0, 1, 2, 3, 4, 5, 6, -1, -2].forEach(function(n) {
                var i = (t + n + e.length) % e.length;
                r.indexOf(i) === -1 && r.push(i)
            }), r.forEach(function(t) {
                if (e.length > t && s.isImage(e[t])) {
                    var r = e[t];
                    if (r) {
                        var n = r.content,
                            i = n.thumbnail_url_tmpl || r.preview_url;
                        i && u.preloadResponsiveImage(i)
                    }
                }
            })
        }
    }

    function x(e) {
        var t = e.renderStatus,
            r = e.hidePageChrome,
            n = e.sizeClass,
            i = e.isEditMode;
        return t === d.PreviewRenderStatus.Succeeded && !r && n !== p.SizeClass.Small && !i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importStar(i), u = r.__importStar(u), t.TooltipHelpers = {
        fetchTooltipInfo: f,
        getVendorAndApplication: _,
        logImpression: v
    }, t.getSplitButtonUserActionContext = h, t.modalIsUp = g, t.cleanupPrerenderPreview = w, t.getSharedLinkLoginUrl = y, t.sharedLinkLoginUrl = y(), t.getFileViewerInterfaceTypeForSharedLink = b, t.isMountedFile = E, t.canDownloadFile = S, t.canUserUsePaper = P, t.canShowFidelitySurvey = T, t.getSourceContext = C, t.getSourceAction = k, t.preloadImages = I, t.shouldShowRetrievalSuccessBanner = x, t.fetchRivieraStatusCode = function(e, t, r) {
        void 0 === r && (r = function() {});
        var n = new XMLHttpRequest;
        return n.open("GET", e), n.withCredentials = !0, n.onreadystatechange = function() {
            if (n.readyState === XMLHttpRequest.DONE) {
                var e = m.getParsedDropboxMetadataHeader(n);
                e.rivieraStatusCode ? t(e.rivieraStatusCode) : r()
            }
        }, n.send(), n
    }, t.isResponsiveEnabled = function() {
        return C() !== c.PreviewSourceContext.VersionHistory
    }
}), define("modules/clean/react/file_viewer_sidebar/buttons/icon", ["require", "exports", "tslib", "react", "spectrum/icon_action", "spectrum/colorized_icon"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    t.ButtonIcon = function(e) {
        var t = e.isPrimary,
            a = r.__rest(e, ["isPrimary"]);
        return n.default.createElement(o.ColorizedIcon, {
            color: t ? "white" : "#717781"
        }, n.default.createElement(i.IconAction, r.__assign({}, a)))
    }
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer_sidebar/buttons/more_dropdown", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AsyncSharedFileMoreDropdown = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer/shared_file_actions"], t, r)
            }).then(__importStar).then(function(e) {
                return e.SharedFileMoreDropdown
            })
        }
    }), t.AsyncMountedFileMoreDropdown = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer/mounted_file_actions"], t, r)
            }).then(__importStar).then(function(e) {
                return e.MountedFileMoreDropdown
            })
        }
    })
}), define("modules/clean/react/file_viewer_sidebar/buttons/mounted_file_actions", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable", "modules/clean/react/app_actions/app_actions_menu", "modules/clean/react/file_viewer/open_button/open_button"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.AsyncShareButton = i.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer/share_button"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.ShareButton
            })
        }
    }), t.AsyncOpenButton = a.OpenButton, t.AsyncExtensionsButton = function(e) {
        return n.default.createElement("div", {
            className: "control__button"
        }, n.default.createElement(o.ExtensionsMenu, r.__assign({}, e)))
    }
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer_sidebar/buttons/shared_file_actions", ["require", "exports", "modules/clean/react/async/loadable", "modules/clean/react/share_download/button"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AsyncEditNowButton = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/cloud_docs/edit_now_button"], t, r)
            }).then(__importStar).then(function(e) {
                return e.EditNowButton
            })
        }
    }), t.AsyncSignInButton = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/sign_in/button"], t, r)
            }).then(__importStar).then(function(e) {
                return e.SignInButton
            })
        }
    }), t.AsyncExtensionsMenuNoUnity = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/extensions/extensions_menu_component"], t, r)
            }).then(__importStar).then(function(e) {
                return e.ExtensionsMenuNoUnity
            })
        }
    }), t.AsyncOpenInAppButton = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/open_in_app/button"], t, r)
            }).then(__importStar).then(function(e) {
                return e.OpenInAppButton
            })
        }
    }), t.AsyncShareDownloadButton = n.ShareDownloadButton
}), define("modules/clean/react/file_viewer_sidebar/buttons/version_history_file_actions", ["require", "exports", "tslib", "react", "external/classnames", "spectrum/button", "modules/clean/react/file_viewer_sidebar/buttons/icon", "modules/core/i18n"], function(e, t, r, n, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i), t.RestoreButton = function(e) {
        var t = s._("Restore");
        return n.default.createElement(o.Button, {
            variant: "primary",
            className: i.default("control__button", "restore-button", {
                "control__button--collapsed": e.isCollapsed
            }),
            onClick: e.onClick
        }, e.isCollapsed ? n.default.createElement(a.ButtonIcon, {
            isPrimary: !0,
            name: "restore-file",
            "aria-label": t
        }) : t)
    }
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer_sidebar/data_managers/async_activity_data_manager", ["require", "exports", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AsyncActivityDataManager = r.Loadable({
        loader: function() {
            return n.waitForTTI().then(function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/file_viewer_sidebar/data_managers/activity_data_manager"], t, r)
                }).then(__importStar)
            }).then(function(e) {
                return e.ActivityDataManager
            })
        }
    })
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer_sidebar/data_managers/async_commenting_data_manager", ["require", "exports", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AsyncCommentingDataManager = r.Loadable({
        loader: function() {
            return n.waitForTTI().then(function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/file_viewer_sidebar/data_managers/commenting_data_manager"], t, r)
                }).then(__importStar)
            }).then(function(e) {
                return e.CommentingDataManager
            })
        }
    })
}), define("modules/clean/react/file_viewer_sidebar/panes/commenting_pane", ["require", "exports", "tslib", "react", "file-viewer/modes", "modules/clean/react/async/loadable", "file-viewer/core"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var s = o.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer_sidebar/panes/commenting_pane_contents"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.CommentingPaneContents
            })
        }
    });
    t.CommentingPane = function(e) {
        var t = e.coreFVUiProps;
        return n.default.createElement(i.Pane, r.__assign({
            paneId: a.SidebarPaneId.Comments
        }, t), n.default.createElement(s, null))
    }
}), define("modules/clean/react/file_viewer_sidebar/panes/documentation_pane", ["require", "exports", "tslib", "react", "file-viewer/modes", "file-viewer/core", "modules/clean/em_string", "modules/clean/file_store/utils", "modules/clean/react/css", "modules/clean/react/file_viewer_sidebar/panes/strings", "modules/clean/react/file_viewer/data/actions", "external/react-redux", "modules/clean/react/file_viewer_sidebar/panes/file_activity_section", "modules/clean/react/file_viewer_sidebar/panes/loadable_details_section"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.UnconnectedDocumentationPaneComponent = function(e) {
        var t = e.file,
            l = e.user,
            u = e.maxFilenameEmLength,
            d = e.sharedLinkInfo,
            f = e.isVersionHistoryMode,
            _ = e.coreFVUiProps,
            v = e.disableOnboardingCard,
            h = a.Emstring.em_snippet(s.getFilename(t), u),
            g = function() {
                return e.pushSidebarPane(o.SidebarPaneId.Metadata)
            },
            w = function() {
                return e.pushSidebarPane(o.SidebarPaneId.Activity)
            };
        return n.default.createElement(i.Pane, r.__assign({
            paneId: o.SidebarPaneId.Documentation
        }, _), n.default.createElement("div", {
            className: "documentation-pane"
        }, n.default.createElement("div", {
            className: "documentation-pane__title"
        }, h), n.default.createElement(m.LoadableDetailsSection, {
            title: c.DocumentationPaneStrings.details,
            file: t,
            user: l,
            sharedLinkInfo: d,
            pushMetadataPaneHandler: g
        }), n.default.createElement(p.ConnectedFileActivitySection, {
            file: t,
            user: l,
            isVersionHistoryMode: f,
            title: c.DocumentationPaneStrings.activity,
            pushActivityPaneHandler: w,
            disableOnboardingCard: v
        })))
    };
    var f = {
        pushSidebarPane: u.pushSidebarPane
    };
    t.ConnectedDocumentationPaneComponent = d.connect(null, f)(t.UnconnectedDocumentationPaneComponent), t.DocumentationPane = l.requireCssWithComponent(t.ConnectedDocumentationPaneComponent, ["/static/css/file_viewer_sidebar/documentation_pane-vflM5RL0n.css"])
}), define("modules/clean/react/file_viewer_sidebar/panes/file_activity_section", ["require", "exports", "tslib", "react", "modules/clean/react/file_sidebar/file_sidebar_connect", "modules/clean/react/file_sidebar/store/file_activity/selectors", "spectrum/icon_arrow", "spectrum/colorized_icon", "modules/clean/react/css", "modules/clean/react/file_viewer_sidebar/panes/loadable_file_activity_stream_summary", "spectrum/button", "modules/clean/react/file_viewer_sidebar/panes/strings"], function(e, t, r, n, i, o, a, s, l, c, u, d) {
    "use strict";

    function p(e) {
        return {
            isFileActivityEnabled: o.isActivityEnabled(e),
            activities: o.getActivitiesMetadata(e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), o = r.__importStar(o);
    var m = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.activities,
                r = e.user,
                i = e.isVersionHistoryMode,
                o = e.isFileActivityEnabled,
                l = e.disableOnboardingCard,
                p = e.title,
                m = e.pushActivityPaneHandler,
                f = e.file;
            if (!r || i || !o) return null;
            var _ = t && !t.loading && 0 !== t.value.length;
            return n.default.createElement("div", {
                className: "documentation-pane__section"
            }, n.default.createElement("div", {
                className: "documentation-pane__section-title"
            }, p), n.default.createElement(c.LoadableFileActivityStreamSummary, {
                file: f,
                user: r,
                maxVisibleActivityCards: 2,
                disableOnboardingCard: l
            }), _ && n.default.createElement("div", {
                className: "documentation-pane__push-pane-button-wrapper"
            }, n.default.createElement(u.Button, {
                variant: "styleless",
                className: "documentation-pane__push-pane-button",
                onClick: m
            }, d.ActivitySectionStrings.viewAllActivities, n.default.createElement("span", {
                className: "documentation-pane__arrow-right-icon"
            }, n.default.createElement(s.ColorizedIcon, null, n.default.createElement(a.IconArrow, {
                name: "right-small",
                width: 16,
                height: 16
            }))))))
        }, t
    })(n.default.Component);
    t.UnconnectedFileActivitySection = m, t.ConnectedFileActivitySection = i.fileSidebarConnect(p)(l.requireCssWithComponent(m, ["/static/css/file_activity_stream-vflgCLAOK.css"]))
}), define("modules/clean/react/file_viewer_sidebar/panes/image_chooser_section", ["require", "exports", "tslib", "react", "dropins_sdk_refactor/dropins_sdk_internal", "modules/clean/filepath", "modules/clean/loggers/workflows_logger", "spectrum/popover", "modules/core/i18n", "modules/clean/react/snackbar", "modules/clean/react/css", "classnames", "spectrum/colorized_icon", "spectrum/icon_action", "spectrum/tooltip", "modules/clean/react/watermarking/utils"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), d = r.__importDefault(d);
    var v, h = l.i18n_default_project("watermarking")._,
        g = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/bmp"];
    (function(e) {
        e.FROM_DROPBOX = "dropbox", e.FROM_COMPUTER = "computer", e.FROM_DRAGDROP = "dragdrop"
    })(v = t.ImageSource || (t.ImageSource = {}));
    var w = function(e) {
        return n.default.createElement("svg", {
            className: e.className,
            viewBox: "0 0 24 24",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink"
        }, n.default.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, n.default.createElement("path", {
            d: "M16.9849536,10.3304435 L21.935986,13.4846597 L16.9501078,16.6610755 L11.9679572,13.4870801 L6.98587822,16.6610755 L2,13.4846597 L6.950961,10.330489 L2,7.17634414 L6.9859499,4 L11.9679214,7.17394657 L16.9501795,4 L21.9359143,7.17634414 L16.9849536,10.3304435 Z M16.9151901,10.330489 L11.9679213,7.17874171 L7.020724,10.3304435 L11.9679572,13.4822392 L16.9151901,10.330489 Z M7.01792123,17.713692 L12.0037994,14.5376346 L16.9897493,17.713692 L12.0037994,20.8901078 L7.01792123,17.713692 Z",
            fill: e.fill ? e.fill : "#ffffff"
        })))
    };
    w.displayName = "DropboxIcon";
    var y = function(e) {
        return n.default.createElement("svg", {
            className: e.className,
            viewBox: "0 0 24 24",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink"
        }, n.default.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, n.default.createElement("path", {
            d: "M14,10 L24,10 L24,14 L14,14 L14,24 L10,24 L10,14 L0,14 L0,10 L10,10 L10,0 L14,0 L14,10 Z",
            fill: e.fill ? e.fill : "#ffffff"
        })))
    };
    y.displayName = "PlusIcon";
    var b = (function(e) {
        function t(t) {
            var s = e.call(this, t) || this;
            return s.handleDragOver = function() {
                s.setState({
                    isDraggedOver: !0
                })
            }, s.onChooseFromDropbox = function(e) {
                return r.__awaiter(s, void 0, void 0, function() {
                    var t, n, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (t = e.pop(), !t || e.length) throw new Error("Dropbox chooser should only return one item");
                                return n = t.link, [4, _.getImageFromURL(n)];
                            case 1:
                                return i = r.sent(),
                                    this.onImageSelected(i, n, t.name, v.FROM_DROPBOX), [2]
                        }
                    })
                })
            }, s.onChooseFromComputer = function(e) {
                return r.__awaiter(s, void 0, void 0, function() {
                    var t, n, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return e.currentTarget.files ? (t = Array.from(e.currentTarget.files).pop()) ? (n = URL.createObjectURL(t), [4, _.getImageFromURL(n)]) : [2] : [3, 2];
                            case 1:
                                i = r.sent(), this.onImageSelected(i, n, t.name, v.FROM_COMPUTER), r.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, s.onDropFile = function(e) {
                return r.__awaiter(s, void 0, void 0, function() {
                    var t, i, o;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return e.preventDefault(), this.setState({
                                    isDraggedOver: !1
                                }), (t = e.dataTransfer.files[0]) ? g.includes(t.type) ? (i = URL.createObjectURL(t), [4, _.getImageFromURL(i)]) : (c.Snackbar.show(n.default.createElement(c.ControlledSnackbarComponent, {
                                    id: "image-watermarking-drag-drop-error",
                                    title: h("Can’t add. Choose an image file, like JPEG, GIF or PNG.", {
                                        project: "watermarking",
                                        comment: "Error message shown when a user tries to drag and drop a non-image file when in image watermarking mode"
                                    }),
                                    variant: "fail",
                                    closeButtonText: h("Try again", {
                                        project: "watermarking",
                                        comment: "Error message close button, encouraging user to try to drag and drop a different file"
                                    })
                                })), [2]) : [2];
                            case 1:
                                return o = r.sent(), this.onImageSelected(o, i, t.name, v.FROM_DRAGDROP), [2]
                        }
                    })
                })
            }, s.onDragOver = function(e) {
                e.preventDefault(), s.setState({
                    isDraggedOver: !0
                })
            }, s.onDragLeave = function(e) {
                e.preventDefault(), s.setState({
                    isDraggedOver: !1
                })
            }, s.onImageSelected = function(e, t, r, n) {
                if (s.setState({
                        imageURL: t
                    }, function() {
                        var e = t && s.props.focusOnSelect ? s.props.focusOnSelect : document.querySelector(".image-chooser__popover-trigger");
                        e && e.focus()
                    }), e) {
                    var i = o.file_extension_for_logging(r || "");
                    a.logWorkflowsEvent(a.WorkflowsEvent.WatermarkImageUploaded, _.getWatermarkMilestone(s.props.user), {
                        source: n,
                        image_ext: i
                    })
                }
                s.props.onImageSelected(e)
            }, s.onDeleteButtonClicked = function(e) {
                a.logWorkflowsEvent(a.WorkflowsEvent.WatermarkImageDeleted, _.getWatermarkMilestone(s.props.user)), s.onImageSelected(void 0, void 0)
            }, s.onSourceSelection = function(e) {
                if (a.logWorkflowsEvent(a.WorkflowsEvent.WatermarkImageUploadClicked, _.getWatermarkMilestone(s.props.user), {
                        source: e
                    }), e === v.FROM_DROPBOX) try {
                    i.Dropbox.choose({
                        multiselect: !1,
                        success: s.onChooseFromDropbox,
                        linkType: "direct",
                        extensions: ["images"]
                    })
                } catch (e) {
                    c.Snackbar.fail(h("Couldn’t add image from Dropbox. Please reload the page and try again.", {
                        project: "watermarking"
                    }))
                } else s.imageUploadRef && s.imageUploadRef.click()
            }, s.state = {
                isDraggedOver: !1,
                imageURL: t.defaultImageURL
            }, i.Dropbox.init({
                appKey: "dropbox"
            }), s
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            this.props.isImageWatermarkingMode && window.addEventListener("dragover", this.handleDragOver)
        }, t.prototype.componentDidUpdate = function(e) {
            this.props.isImageWatermarkingMode !== e.isImageWatermarkingMode && (this.props.isImageWatermarkingMode ? window.addEventListener("dragover", this.handleDragOver) : window.removeEventListener("dragover", this.handleDragOver))
        }, t.prototype.componentWillUnmount = function() {
            this.props.isImageWatermarkingMode && window.removeEventListener("dragover", this.handleDragOver)
        }, t.prototype.render = function() {
            var e = this;
            return n.default.createElement(n.default.Fragment, null, this.props.isImageWatermarkingMode && n.default.createElement("div", {
                className: d.default("watermarking-drop-zone", {
                    "watermarking-drop-zone--dragged-over": this.state.isDraggedOver
                }),
                onDrop: this.onDropFile,
                onDragOver: this.onDragOver,
                onDragLeave: this.onDragLeave
            }, this.state.isDraggedOver ? n.default.createElement("p", {
                className: "watermarking-drop-zone__text"
            }, h("Drop image here")) : null), n.default.createElement("div", {
                className: "image-chooser-section"
            }, this.state.imageURL ? n.default.createElement(n.default.Fragment, null, n.default.createElement(f.Tooltip, {
                positioning: "left",
                positionOffset: 8,
                tooltipContent: h("Delete")
            }, n.default.createElement("button", {
                "aria-label": h("Delete selected watermark image"),
                className: "image-chooser-section__delete-button",
                onClick: this.onDeleteButtonClicked
            }, n.default.createElement(p.ColorizedIcon, {
                color: "white"
            }, n.default.createElement(m.IconAction, {
                name: "delete"
            })))), n.default.createElement("img", {
                className: "image-chooser-section__selected-image",
                src: this.state.imageURL,
                alt: h("Selected watermark image")
            })) : n.default.createElement(n.default.Fragment, null, n.default.createElement(s.Popover, {
                onSelection: this.onSourceSelection
            }, n.default.createElement(s.PopoverTrigger, {
                "aria-label": h("Open image source selection menu", {
                    comment: "Explanation of what this button does - it opens a menu to allow the user to select an image source"
                }),
                className: "image-chooser__popover-trigger"
            }, n.default.createElement("span", {
                className: "image-chooser-section__popover-button"
            }, n.default.createElement(y, {
                className: "image-chooser-section__plus-svg"
            }))), n.default.createElement(s.PopoverContent, null, n.default.createElement(s.PopoverContentItem, {
                className: "image-chooser-section__add-from-dropbox",
                value: v.FROM_DROPBOX
            }, n.default.createElement(w, {
                className: "image-chooser-section__logo-svg"
            }), h("Dropbox"), n.default.createElement("span", {
                className: "ax-visually-hidden"
            }, " " + h("(opens a new window)", {
                comment: "Behavior explanation of button for screen-readers"
            }))), n.default.createElement(s.PopoverContentItem, {
                className: "image-chooser-section__add-from-computer",
                value: v.FROM_COMPUTER
            }, n.default.createElement(p.ColorizedIcon, {
                color: "white"
            }, n.default.createElement(m.IconAction, {
                name: "upload"
            })), h("My computer")))), n.default.createElement("p", {
                className: "image-chooser-section__drop-text",
                "aria-hidden": "true"
            }, h("Drop image here"))), n.default.createElement("input", {
                className: "image-chooser-section__image-upload",
                type: "file",
                accept: g.join(", "),
                onClick: function(e) {
                    return e.target.value = ""
                },
                onChange: this.onChooseFromComputer,
                ref: function(t) {
                    return e.imageUploadRef = t
                }
            })))
        }, t
    })(n.default.PureComponent);
    t.ImageChooserSectionWithoutCSS = b, t.ImageChooserSection = u.requireCssWithComponent(b, ["/static/css/file_viewer_sidebar/image_chooser_section-vflr9AIyr.css"])
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer_sidebar/panes/loadable_activity_pane", ["require", "exports", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LoadableActivityPane = r.Loadable({
        loader: function() {
            return n.waitForTTI().then(function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/file_viewer_sidebar/panes/activity_pane"], t, r)
                }).then(__importStar).then(function(e) {
                    return e.ActivityPane
                })
            })
        }
    })
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer_sidebar/panes/loadable_details_section", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LoadableDetailsSection = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer_sidebar/panes/details_section"], t, r)
            }).then(__importStar).then(function(e) {
                return e.DetailsSection
            })
        }
    })
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/file_viewer_sidebar/panes/loadable_file_activity_stream_summary", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LoadableFileActivityStreamSummary = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer_sidebar/panes/file_activity_stream_summary"], t, r)
            }).then(__importStar).then(function(e) {
                return e.FileActivityStreamSummary
            })
        }
    })
}), define("modules/clean/react/file_viewer_sidebar/panes/metadata_pane", ["require", "exports", "tslib", "react", "file-viewer/modes", "file-viewer/core", "modules/clean/react/file_metadata/component/loadable_metadata_details", "modules/clean/react/css", "modules/clean/react/file_viewer_sidebar/panes/strings", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer_sidebar/utils", "external/react-redux", "modules/clean/react/file_viewer/data/selectors", "file-viewer/modes/sidebar/pane_title"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.UnconnectedMetadataPaneComponent = function(e) {
        var t = u.isSidebarOpen(e.sidebar) && u.isSidebarPaneIdAtTopOfStack(o.SidebarPaneId.Metadata, e.sidebar);
        return n.default.createElement(i.Pane, r.__assign({
            paneId: o.SidebarPaneId.Metadata
        }, e.coreFVUiProps), n.default.createElement("div", {
            className: "metadata-pane"
        }, n.default.createElement(m.PaneTitleComponent, {
            title: l.MetadataPaneStrings.details,
            onClick: e.popSidebarPane,
            intl: e.coreFVUiProps.intl
        }), n.default.createElement(a.LoadableMetadataDetails, {
            file: e.file,
            user: e.user,
            sharedLinkInfo: e.sharedLinkInfo,
            isActiveTab: t,
            previewType: e.previewType
        })))
    };
    var f = function(e) {
            return {
                sidebar: p.getSidebar(e)
            }
        },
        _ = {
            popSidebarPane: c.popSidebarPane
        };
    t.ConnectedMetadataPaneComponent = d.connect(f, _)(t.UnconnectedMetadataPaneComponent), t.MetadataPane = s.requireCssWithComponent(t.ConnectedMetadataPaneComponent, ["/static/css/file_viewer_sidebar/metadata_pane-vfl3iC4Dl.css"])
}), define("modules/clean/react/file_viewer_sidebar/panes/rotation_control", ["require", "exports", "tslib", "react", "external/classnames", "modules/core/i18n", "spectrum/button"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i);
    var s = o.i18n_default_project("watermarking")._,
        l = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onClickAC = function() {
                    t.onClick(1)
                }, t.onClickCW = function() {
                    t.onClick(-1)
                }, t.onClick = function(e) {
                    var r = t.props,
                        n = r.onChange,
                        i = r.step,
                        o = void 0 === i ? 15 : i,
                        a = r.value,
                        s = void 0 === a ? 0 : a;
                    if (n) {
                        var l = s + e * o;
                        l > 359 && (l -= 360), l < 0 && (l += 360), n(l)
                    }
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    r = e.value;
                return n.default.createElement("div", {
                    className: i.default("rotation-control", t)
                }, n.default.createElement("div", {
                    className: "rotation-control--current-value ax-visually-hidden",
                    "aria-live": "polite"
                }, s("%(value)d degrees", {
                    comment: "Statement of mathematical rotation angle, e.g. 45 degrees"
                }).format({
                    value: r
                })), n.default.createElement(a.Button, {
                    variant: "secondary",
                    size: "large",
                    onClick: this.onClickAC
                }, n.default.createElement("span", {
                    className: "ax-visually-hidden"
                }, s("Rotate Anticlockwise")), n.default.createElement("svg", {
                    "aria-hidden": !0,
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n.default.createElement("path", {
                    d: "M9.87193 19.7329C10.5328 19.9073 11.227 20.0002 11.943 20.0002C16.3929 20.0002 20.0002 16.4106 20.0002 11.9825C20.0002 7.55449 16.3929 3.96484 11.943 3.96484C8.793 3.96484 6.06518 5.76364 4.74032 8.38529",
                    stroke: "white",
                    strokeWidth: "2"
                }), n.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.92141 7.72819L10.0233 7.21687L10.1704 8.66739L3.61077 9.3248L2.94905 2.79745L4.40675 2.65136L4.92141 7.72819Z",
                    fill: "white"
                }))), n.default.createElement(a.Button, {
                    variant: "secondary",
                    size: "large",
                    onClick: this.onClickCW
                }, n.default.createElement("span", {
                    className: "ax-visually-hidden"
                }, s("Rotate Clockwise")), n.default.createElement("svg", {
                    "aria-hidden": !0,
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n.default.createElement("path", {
                    d: "M14.1283 19.7329C13.4674 19.9073 12.7732 20.0002 12.0572 20.0002C7.60734 20.0002 4 16.4106 4 11.9825C4 7.55449 7.60734 3.96484 12.0572 3.96484C15.2072 3.96484 17.9351 5.76364 19.2599 8.38529",
                    stroke: "white",
                    strokeWidth: "2"
                }), n.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.0788 7.72819L13.9769 7.21687L13.8299 8.66739L20.3895 9.3248L21.0512 2.79745L19.5935 2.65136L19.0788 7.72819Z",
                    fill: "white"
                }))))
            }, t
        })(n.default.PureComponent);
    t.RotationControl = l
}), define("modules/clean/react/file_viewer_sidebar/panes/strings", ["require", "exports", "modules/core/i18n"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DocumentationPaneStrings = {
        details: r._("Details", {
            comment: "Section header on the file preview sidebar shown on top of the section listing general file metadata."
        }),
        activity: r._("Activity", {
            comment: "Section header on the file preview sidebar shown on top of the section listing the latest file activity"
        })
    }, t.MetadataPaneStrings = {
        details: r._("Details", {
            comment: "Title of the content pane displaying file metadata (e.g., upload date, file size, filetype-specific metadata) on the file preview sidebar."
        })
    }, t.ActivityPaneStrings = {
        details: r._("Activity", {
            comment: "Title of the content pane displaying list of latest file activity on the file preview sidebar."
        })
    }, t.DetailsSectionStrings = {
        viewPreviousVersions: r._("View previous versions", {
            comment: "Text for outbound link from the file preview sidebar to take the user to the version history page showing the list of versions/revisions of the current file."
        }),
        viewAllDetails: r._("View all details", {
            comment: "Text for button on the file preview sidebar to take the user to the section."
        })
    }, t.ActivitySectionStrings = {
        viewAllActivities: r._("View all activity", {
            comment: "Text for button on the file preview sidebar showing subset of activity, that takes user to pane showing all activity."
        })
    }
}), define("modules/clean/react/file_viewer_sidebar/panes/watermarking_pane", ["require", "exports", "tslib", "react", "external/keymaster", "external/lodash", "react-aria-tabpanel", "file-viewer/modes", "file-viewer/core", "external/react-redux", "file-viewer/core", "modules/clean/browse_uri_interface", "modules/clean/file_store/utils", "modules/clean/loggers/workflows_logger", "modules/clean/previews/data/actions", "modules/clean/react/css", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer/data/selectors", "modules/clean/react/keyboard_binding/keyboard_binding_provider", "modules/clean/react/keyboard_binding/keyboard_binding_connector", "modules/clean/react/keyboard_binding/keyboard_binding", "modules/clean/react/snackbar", "modules/clean/react/watermarking/drawing", "modules/clean/react/watermarking/api", "modules/core/i18n", "spectrum/button", "spectrum/dropdown_menu", "spectrum/input", "modules/clean/keycode", "modules/clean/react/file_viewer_sidebar/panes/rotation_control", "modules/clean/react/watermarking/utils", "modules/clean/previews/data/selectors", "modules/clean/previews/data/preview_type_util", "modules/clean/react/previews/constants", "modules/clean/react/watermarking/types", "modules/core/browser", "modules/clean/react/watermarking/selectors", "modules/clean/react/file_viewer_sidebar/panes/image_chooser_section", "modules/clean/react/watermarking/apply_watermark_button", "modules/clean/react/watermarking/utils", "premium-workflows/components/base/slider", "spectrum/tabbed_header"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _, v, h, g, w, y, b, E, S, P, T, C, k, I, x, A, M, F, O, R, L, D, N, U, V, W, B, j) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i), D = r.__importStar(D);
    var z = T.i18n_default_project("watermarking")._;
    t.WATERMARKING_PANE_POSITION_BUTTON_CLASSNAME = "watermarking-pane__position-button";
    var q;
    (function(e) {
        e.TEXT = "watermark_pane_text_tab", e.IMAGE = "watermark_pane_image_tab"
    })(q || (q = {}));
    var K = "",
        H = 4 * Math.pow(10, 6),
        Y = function() {
            return n.default.createElement("svg", {
                width: "24",
                height: "24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, n.default.createElement("circle", {
                className: "northwest",
                cx: "7",
                cy: "7",
                r: "2"
            }), n.default.createElement("circle", {
                className: "northeast",
                cx: "17",
                cy: "7",
                r: "2"
            }), n.default.createElement("circle", {
                className: "southeast",
                cx: "17",
                cy: "17",
                r: "2"
            }), n.default.createElement("circle", {
                className: "southwest",
                cx: "7",
                cy: "17",
                r: "2"
            }), n.default.createElement("circle", {
                className: "center",
                cx: "12",
                cy: "12",
                r: "2"
            }))
        },
        G = [{
            key: L.WatermarkPosition.CENTER,
            description: z("Center", {
                comment: "Position in the center"
            })
        }, {
            key: L.WatermarkPosition.NORTHWEST,
            description: z("Upper left", {
                comment: "Position in upper left corner"
            })
        }, {
            key: L.WatermarkPosition.NORTHEAST,
            description: z("Upper right", {
                comment: "Position in upper right corner"
            })
        }, {
            key: L.WatermarkPosition.SOUTHWEST,
            description: z("Lower left", {
                comment: "Position in lower left corner"
            })
        }, {
            key: L.WatermarkPosition.SOUTHEAST,
            description: z("Lower right", {
                comment: "Position in lower right corner"
            })
        }, {
            key: L.WatermarkPosition.REPEAT,
            description: z("Repeat", {
                comment: "Position repeated across the image"
            })
        }],
        Z = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.defaultText = "", t.setupKeymaster = function() {
                    K = i.default.getScope(), i.default.setScope("watermarking")
                }, t.cleanupKeymaster = function() {
                    i.default.clearScope("watermarking"), i.default.setScope(K)
                }, t.returnFocus = function() {
                    var e = document.querySelector('[data-control-id="' + l.SidebarControlId.Watermarking + '"]');
                    e && e.focus()
                }, t.getTiledImageWatermark = function() {
                    var e = t.props,
                        n = e.watermarkState,
                        i = e.tilingRenderer,
                        o = L.getWatermarkingOptions(n).scale,
                        a = i(o),
                        s = a.canvas.toDataURL().split(",", 2).pop();
                    if (s) return r.__assign({}, a, {
                        image: s
                    })
                }, t.getImageWatermark = function() {
                    var e, r, n = t.props.watermarkState;
                    if (n.mode === L.WatermarkingMode.TEXT) {
                        if (r = n.textWatermarkingOptions, !r.text) return;
                        e = S.drawTextTile(r.text, r.size * r.scale, r.fontFamily, r.color, r.opacity / 100, r.angle / 180 * Math.PI)
                    } else {
                        if (r = n.imageWatermarkingOptions, !r.image) return;
                        e = S.drawImageTile(r.image, r.size * r.scale, r.opacity / 100, r.angle / 180 * Math.PI)
                    }
                    if (e) return {
                        image: e.toDataURL().split(",", 2).pop(),
                        position: r.position,
                        marginX: r.position === L.WatermarkPosition.CENTER ? 0 : r.marginX,
                        marginY: r.position === L.WatermarkPosition.CENTER ? 0 : r.marginY
                    }
                }, t.commitAndRedirect = function(e) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t, n, i, o, a, s, l;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (t = this.props.watermarkState, n = L.getWatermarkingOptions(t), i = n.position === L.WatermarkPosition.REPEAT ? this.getTiledImageWatermark() : this.getImageWatermark(), !i) return [2];
                                    if (i.image.length > H) return [2, E.Snackbar.fail(z("That’s too big to save. Try making your watermark smaller.", {
                                        project: "watermarking"
                                    }), "watermarking-notification")];
                                    E.Snackbar.sync(z("Watermarking file..."), !1, "watermarking-notification"), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, P.sendImageBasedWatermarkRequest(this.props.user.id, this.props.file.file_id, e, i)];
                                case 2:
                                    return o = r.sent(), [3, 4];
                                case 3:
                                    return a = r.sent(), s = z(M.isOverQuotaError(a.error) ? "The watermark could not be saved because your account is over quota." : "Couldn’t save watermark. Refresh the page to try again."), [2, E.Snackbar.fail(s, "watermarking-notification")];
                                case 4:
                                    return l = o.fq_path || p.isBrowseFile(this.props.file) && this.props.file.fq_path, l ? D.replace_location(d.preview_uri_for_fq_path(this.props.user, l, {
                                        context: R.PreviewSourceContext.Workflow
                                    })) : D.reload(), [2]
                            }
                        })
                    })
                }, t.updateCommonWatermarkingOptions = function(e) {
                    t.props.watermarkState.mode === L.WatermarkingMode.TEXT ? t.updateTextWatermarkingOptions(e) : t.updateImageWatermarkingOptions(e)
                }, t.updateTextWatermarkingOptions = function(e) {
                    t.props.updateWatermarkOptions({
                        textWatermarkingOptions: e
                    })
                }, t.updateImageWatermarkingOptions = function(e) {
                    t.props.updateWatermarkOptions({
                        imageWatermarkingOptions: e
                    })
                }, t.debouncedLogOpacityChange = o.debounce(function(e) {
                    m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkTransparencyChanged, W.getWatermarkMilestone(t.props.user), {
                        watermark_type: t.props.watermarkState.mode,
                        start_transparency: String(t.startingOpacity),
                        end_transparency: String(e)
                    }), t.startingOpacity = void 0
                }, 200), t.handleOpacityChange = function(e) {
                    var r = t.props.watermarkState,
                        n = L.getWatermarkingOptions(r).opacity;
                    e !== n && (t.startingOpacity = t.startingOpacity || n, t.debouncedLogOpacityChange(e), t.updateCommonWatermarkingOptions({
                        opacity: e
                    }))
                }, t.debouncedLogSizeChange = o.debounce(function(e) {
                    m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkSizeChanged, W.getWatermarkMilestone(t.props.user), {
                        watermark_type: t.props.watermarkState.mode,
                        start_size: String(t.startingSize),
                        end_size: String(e)
                    }), t.startingSize = void 0
                }, 200), t.handleSizeChange = function(e) {
                    var r = t.props.watermarkState,
                        n = L.getWatermarkingOptions(r).size;
                    e !== n && (t.startingSize = t.startingSize || n, t.debouncedLogSizeChange(e), t.updateCommonWatermarkingOptions({
                        size: e
                    }))
                }, t.handleTextChange = function(e) {
                    t.textInput && t.updateTextWatermarkingOptions({
                        text: t.textInput.value
                    })
                }, t.logTextInputFocus = function() {
                    m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkTextInputEnterFocus, W.getWatermarkMilestone(t.props.user), {
                        num_characters: t.textInput && String(t.textInput.value.length)
                    })
                }, t.logTextInputBlur = function() {
                    m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkTextInputExitFocus, W.getWatermarkMilestone(t.props.user), {
                        num_characters: t.textInput && String(t.textInput.value.length)
                    })
                }, t.handleImageChange = function(e) {
                    t.updateImageWatermarkingOptions(r.__assign({
                        image: e
                    }, W.getImageDefaultSizes(e, t.props.pageDimensions)))
                }, t.handlePositionChange = function(e) {
                    var r = t.props.watermarkState,
                        n = L.getWatermarkingOptions(r).position,
                        i = {
                            position: e
                        };
                    if (n === L.WatermarkPosition.REPEAT && i.position !== L.WatermarkPosition.REPEAT && (i.angle = 0), n !== L.WatermarkPosition.REPEAT && i.position === L.WatermarkPosition.REPEAT) {
                        var o = L.getWatermarkingOptions(M.DEFAULT_WATERMARKING_STATE);
                        i.angle = o.angle
                    }
                    m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkPositionMenuSelectionMade, W.getWatermarkMilestone(t.props.user), {
                        watermark_type: r.mode,
                        start_position: n,
                        end_position: e
                    }), t.updateCommonWatermarkingOptions(i)
                }, t.handleRotationChange = function(e) {
                    var r = t.props.watermarkState,
                        n = L.getWatermarkingOptions(r).angle;
                    m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkRotationClicked, W.getWatermarkMilestone(t.props.user), {
                        watermark_type: r.mode,
                        start_rotation: String(n),
                        end_rotation: String(e)
                    }), t.updateCommonWatermarkingOptions({
                        angle: e
                    })
                }, t.handleCancel = function(e) {
                    e.preventDefault(), t.cancel()
                }, t.cancel = function() {
                    m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkCancel, W.getWatermarkMilestone(t.props.user), {
                        watermark_type: t.props.watermarkState.mode
                    }), t.props.changeMode(u.FileViewerMode.Documentation)
                }, t.onTabClicked = function(e) {
                    e.currentTarget.id === q.TEXT ? (m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkTextTabClicked, W.getWatermarkMilestone(t.props.user)), t.props.switchWatermarkingMode(L.WatermarkingMode.TEXT)) : (m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkImageTabClicked, W.getWatermarkMilestone(t.props.user)), t.props.switchWatermarkingMode(L.WatermarkingMode.IMAGE))
                }, t.onTabKeyUp = function(e) {
                    [x.KeyCode.ENTER, x.KeyCode.SPACE].includes(e.keyCode) && (e.currentTarget.id === q.TEXT ? (m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkTextTabClicked, W.getWatermarkMilestone(t.props.user)), t.props.switchWatermarkingMode(L.WatermarkingMode.TEXT)) : (m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkImageTabClicked, W.getWatermarkMilestone(t.props.user)), t.props.switchWatermarkingMode(L.WatermarkingMode.IMAGE)))
                }, t.onInputRef = function(e) {
                    t.textInput = e, t.textInput && !M.isImageCustomizationEnabled(t.props.user) && t.textInput.focus()
                }, t.onPaneRef = function(e) {
                    t.paneRef = e;
                    var r = t.paneRef && t.paneRef.querySelector('[role="tab"][aria-selected="true"]');
                    r && M.isImageCustomizationEnabled(t.props.user) && r.focus()
                }, t.onPositionRef = function(e) {
                    t.positionRef = e
                }, t.handleApply = function(e) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t, n, i, o;
                        return r.__generator(this, function(r) {
                            return t = this.props, n = t.isTrialMode, i = t.user, o = t.watermarkState, n ? [2] : (m.logWorkflowsEvent(e ? m.WorkflowsEvent.WatermarkApplyOverwrite : m.WorkflowsEvent.WatermarkApplySaveAsCopy, W.getWatermarkMilestone(i), {
                                watermark_type: o.mode,
                                num_characters: this.textInput && String(this.textInput.value.length),
                                end_position: String(L.getWatermarkingOptions(o).position),
                                end_rotation: String(L.getWatermarkingOptions(o).angle),
                                end_size: String(L.getWatermarkingOptions(o).size),
                                end_transparency: String(L.getWatermarkingOptions(o).opacity)
                            }), this.commitAndRedirect(e), [2])
                        })
                    })
                }, t.logApplyButtonClick = function() {
                    m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkOpenApplyMenu, W.getWatermarkMilestone(t.props.user), {
                        watermark_type: t.props.watermarkState.mode
                    })
                }, t.getPositionDescription = function(e) {
                    var t = G.find(function(t) {
                        return t.key === e
                    });
                    return t ? t.description : void 0
                }, t.renderInputTextComponent = function(e) {
                    return n.default.createElement("label", {
                        className: "watermarking-pane__control watermarking-pane__text"
                    }, n.default.createElement("p", {
                        className: "watermarking-pane__label"
                    }, z("Watermark")), n.default.createElement(I.Input, {
                        "aria-label": z("Text of Watermark"),
                        autoComplete: "off",
                        placeholder: z("Add watermark text"),
                        forwardedRef: t.onInputRef,
                        fullWidth: !0,
                        name: "text",
                        value: e,
                        onChange: t.handleTextChange,
                        onFocus: t.logTextInputFocus,
                        onBlur: t.logTextInputBlur,
                        maxLength: 100
                    }))
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                var e = this.props.watermarkState;
                this.updateScale(), m.logWorkflowsEvent(m.WorkflowsEvent.WatermarkEnable, W.getWatermarkMilestone(this.props.user), {
                    num_characters: this.textInput && String(this.textInput.value.length),
                    start_position: String(L.getWatermarkingOptions(e).position),
                    start_rotation: String(L.getWatermarkingOptions(e).angle),
                    start_size: String(L.getWatermarkingOptions(e).size),
                    start_transparency: String(L.getWatermarkingOptions(e).opacity)
                })
            }, t.prototype.updateScale = function() {
                var e = this.props,
                    t = e.updateWatermarkOptions,
                    r = e.previewType,
                    n = M.getWatermarkScale(r);
                t({
                    imageWatermarkingOptions: {
                        scale: n
                    },
                    textWatermarkingOptions: {
                        scale: n
                    }
                })
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.coreFVUiProps,
                    i = e.file,
                    o = e.watermarkState,
                    c = e.user,
                    u = L.getWatermarkingOptions(o),
                    d = o.textWatermarkingOptions,
                    p = o.imageWatermarkingOptions,
                    m = u.position || L.WatermarkPosition.REPEAT;
                return n.default.createElement(w.KeyboardBindingProvider, {
                    onDestroy: this.cleanupKeymaster,
                    onSetup: this.setupKeymaster
                }, n.default.createElement(s.Pane, r.__assign({
                    paneId: l.SidebarPaneId.Watermarking,
                    className: "watermarking-pane-wrapper"
                }, t), n.default.createElement(y.KeyboardBindingConnector, {
                    keyboardBindings: [b.hydrateKeyboardBinding({
                        keyboardEventCriteria: {
                            which: x.KeyCode.ESC
                        },
                        callback: this.cancel
                    })]
                }), n.default.createElement("div", {
                    "aria-labelledby": "react-file-viewer__title-bar",
                    "aria-modal": "true",
                    className: "watermarking-pane",
                    ref: this.onPaneRef,
                    role: "dialog"
                }, n.default.createElement("div", {
                    className: "watermarking-pane__control watermarking-pane__actions"
                }, n.default.createElement(V.ApplyWatermarkButton, {
                    onApply: this.handleApply,
                    onClick: this.logApplyButtonClick,
                    allowWatermark: W.allowWatermark(i, c),
                    hasInput: o.mode === L.WatermarkingMode.TEXT ? !!d.text : !!p.image,
                    trialVariant: W.getWatermarkTrialVariant(c),
                    milestone: W.getWatermarkMilestone(c),
                    isPlusUser: c.paid
                }), n.default.createElement(C.Button, {
                    tagName: "button",
                    variant: "secondary",
                    size: "large",
                    onClick: this.handleCancel
                }, z(W.allowWatermarkTrial(c) ? "Exit" : "Cancel"))), M.isImageCustomizationEnabled(this.props.user) ? n.default.createElement(a.Wrapper, null, n.default.createElement(j.TabbedHeader, null, n.default.createElement(j.Tab, {
                    id: q.TEXT,
                    onClick: this.onTabClicked,
                    onKeyUp: this.onTabKeyUp,
                    active: o.mode === L.WatermarkingMode.TEXT
                }, z("Text")), n.default.createElement(j.Tab, {
                    id: q.IMAGE,
                    onClick: this.onTabClicked,
                    onKeyUp: this.onTabKeyUp,
                    active: o.mode === L.WatermarkingMode.IMAGE
                }, z("Image"))), n.default.createElement("div", {
                    className: "watermarking-pane__tab-panels"
                }, n.default.createElement(a.TabPanel, {
                    active: o.mode === L.WatermarkingMode.TEXT,
                    tabId: q.TEXT
                }, this.renderInputTextComponent(d.text)), n.default.createElement(a.TabPanel, {
                    active: o.mode === L.WatermarkingMode.IMAGE,
                    tabId: q.IMAGE
                }, n.default.createElement(U.ImageChooserSection, {
                    coreFVUiProps: t,
                    file: i,
                    user: this.props.user,
                    defaultImageURL: p.image ? p.image.src : void 0,
                    onImageSelected: this.handleImageChange,
                    focusOnSelect: this.positionRef && this.positionRef.querySelector("button"),
                    isImageWatermarkingMode: o.mode === L.WatermarkingMode.IMAGE
                })))) : this.renderInputTextComponent(d.text), n.default.createElement("div", {
                    className: "watermarking-pane__control watermarking-pane__position",
                    ref: this.onPositionRef
                }, n.default.createElement("p", {
                    className: "watermarking-pane__label"
                }, z("Position")), n.default.createElement(k.DropdownMenu, {
                    onSelection: this.handlePositionChange
                }, n.default.createElement(k.DropdownMenuButton, null, n.default.createElement("span", {
                    "aria-label": z("Position"),
                    className: "icon icon-" + m.toLowerCase()
                }, n.default.createElement(Y, null)), this.getPositionDescription(m)), n.default.createElement(k.Menu, null, G.map(function(e) {
                    return n.default.createElement(k.MenuItem, {
                        key: e.key,
                        value: e.key,
                        selected: e.key === m
                    }, n.default.createElement("span", {
                        className: "icon icon-" + e.key.toLowerCase()
                    }, n.default.createElement(Y, null)), e.description)
                })))), n.default.createElement("div", {
                    className: "watermarking-pane__control watermarking-pane__rotation"
                }, n.default.createElement("p", {
                    className: "watermarking-pane__label"
                }, z("Rotation")), n.default.createElement(A.RotationControl, {
                    value: u.angle,
                    onChange: this.handleRotationChange
                })), n.default.createElement("label", {
                    className: "watermarking-pane__control watermarking-pane__opacity"
                }, n.default.createElement("p", {
                    className: "watermarking-pane__label"
                }, z("Opacity")), n.default.createElement(B.Slider, {
                    className: "watermarking-pane__opacity-slider",
                    min: 0,
                    max: 100,
                    darkMode: !0,
                    fullWidth: !0,
                    value: u.opacity,
                    name: "opacity",
                    onChange: this.handleOpacityChange
                })), n.default.createElement("label", {
                    className: "watermarking-pane__control watermarking-pane__font_size"
                }, n.default.createElement("p", {
                    className: "watermarking-pane__label"
                }, z("Size")), n.default.createElement(B.Slider, {
                    className: "watermarking-pane__fontsize-slider",
                    min: u.minSize,
                    max: u.maxSize,
                    darkMode: !0,
                    fullWidth: !0,
                    value: u.size,
                    name: "fontsize",
                    onChange: this.handleSizeChange,
                    step: u.step
                })))))
            }, t
        })(n.default.Component);
    t.WatermarkingPaneComponent = Z;
    var X = function(e, t) {
        return {
            isFileRendered: g.getRenderStatusForCurrentFile(e) === v.PreviewRenderStatus.Succeeded,
            mode: g.getMode(e),
            isTrialMode: g.getIsTrialMode(e),
            watermarkState: N.getWatermarkState(e),
            tilingRenderer: N.getWatermarkTilingFunc(e),
            previewType: O.getPreviewType(F.getApiDataForFile(e, t.file).data),
            pageDimensions: g.getPageDimensions(e)
        }
    };
    t.ConnectedWatermarkingPaneComponent = c.connect(X, {
        applyVirtualPreviewMetadata: f.applyVirtualPreviewMetadata,
        changeMode: h.changeMode,
        clearVirtualPreviewMetadata: f.clearVirtualPreviewMetadata,
        pushSidebarPane: h.pushSidebarPane,
        setRenderStatusForCurrentFile: h.setRenderStatusForCurrentFile,
        setVirtualPreviewMetadata: f.setVirtualPreviewMetadata,
        updateWatermarkOptions: h.updateWatermarkOptions,
        switchWatermarkingMode: h.switchWatermarkingMode
    })(Z), t.WatermarkingPane = _.requireCssWithComponent(t.ConnectedWatermarkingPaneComponent, ["/static/css/file_viewer_sidebar/watermarking_pane-vfl6IvkTm.css"])
}), define("modules/clean/react/file_viewer_sidebar/render_utils/call_to_action", ["require", "exports", "tslib", "react", "modules/clean/react/file_viewer_sidebar/buttons/mounted_file_actions", "modules/clean/react/file_viewer/constants", "modules/clean/react/extensions/client", "modules/clean/react/file_viewer/constants", "modules/clean/react/extensions/data/types", "modules/clean/sharing/constants", "modules/clean/react/file_viewer_sidebar/buttons/shared_file_actions", "modules/clean/previews/util", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer_sidebar/buttons/icon", "modules/clean/react/file_viewer_sidebar/buttons/version_history_file_actions"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f) {
    "use strict";

    function _(e, t, r, o, c, u, d) {
        if (void 0 === u && (u = !1), void 0 === d && (d = !1), !o) return [];
        var p = [n.default.createElement(i.AsyncShareButton, {
            key: "share",
            file: e,
            user: t,
            isCollapsed: u && d
        })];
        return c.displayState === a.DisplayState.ENABLED ? p.push(n.default.createElement(i.AsyncExtensionsButton, {
            key: "extension",
            user: t,
            file: e,
            showAsButtonIfDownloadOnly: !0,
            telemetryContext: {
                surface: "previews"
            },
            showBigTooltip: !0,
            onPresentInZoom: function() {},
            triggerType: d && u ? l.TriggerType.CollapsedButton : void 0,
            isInFVSidebar: u
        })) : c.displayState === a.DisplayState.DISABLED && p.push(n.default.createElement(i.AsyncOpenButton, {
            file: e,
            location: u ? s.FileViewerPane.Sidebar : s.FileViewerPane.TitleBar,
            user: t,
            key: "open",
            sizeClass: r,
            isCollapsed: u
        })), p
    }

    function v(e, t, r, i, a, f, _, v, h) {
        void 0 === v && (v = !1), void 0 === h && (h = !1);
        var g = function(e) {
                return e.linkType === c.SharedLinkType.Content
            },
            w = !(!e.open_in_app_data || !e.preview_type),
            y = [],
            b = v ? o.UserActionContext.Sidebar : o.UserActionContext.TitleBarMain;
        if (w && _ && y.push(n.default.createElement(u.AsyncOpenInAppButton, {
                urls: e.open_in_app_data,
                userActionContext: b
            })), !t)
            if (d.isCloudDocPreview(e)) y.push(n.default.createElement(u.AsyncEditNowButton, {
                isPrimaryButton: !w,
                onClick: function() {
                    return p.logUserAction(o.UserAction.SignIn, b)
                },
                hideCallOut: !1,
                isCollapsed: v && h
            }));
            else {
                var E = !w,
                    S = h || v && !E;
                y.push(n.default.createElement(u.AsyncSignInButton, {
                    isPrimaryButton: E,
                    onClick: function() {
                        return p.logUserAction(o.UserAction.SignIn, b)
                    },
                    icon: S ? n.default.createElement(m.ButtonIcon, {
                        name: "sign-in",
                        isPrimary: !w
                    }) : void 0
                }))
            }
        return t && _ && g(a) && y.push(n.default.createElement("div", {
            className: "control__button"
        }, n.default.createElement(u.AsyncExtensionsMenuNoUnity, {
            file: e,
            user: t,
            triggerType: h && v ? l.TriggerType.CollapsedButton : void 0,
            isInFVSidebar: v
        }))), a && f && _ && !d.isCloudDocPreview(e) && y.push(n.default.createElement(u.AsyncShareDownloadButton, {
            copyable: e,
            location: v ? s.FileViewerPane.Sidebar : s.FileViewerPane.TitleBar,
            sharedLinkInfo: i,
            sharePermission: f,
            shareToken: a,
            user: t,
            isCollapsed: v && (h || 0 !== y.length)
        })), y
    }

    function h(e, t, r, o, a, l, c) {
        if (void 0 === l && (l = !1), void 0 === c && (c = !1), !r) return [];
        var u = [];
        return o && u.push(n.default.createElement(f.RestoreButton, {
            key: "restore",
            onClick: a,
            isCollapsed: c
        })), u.push(n.default.createElement(i.AsyncOpenButton, {
            key: "open",
            file: e,
            user: t,
            isUnityDisabled: !0,
            isOpenWithDisabled: !0,
            isCloudEditorDisabled: !0,
            location: l ? s.FileViewerPane.Sidebar : s.FileViewerPane.TitleBar,
            isCollapsed: l
        })), u
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.renderMountedFileActions = _, t.renderSharedFileActions = v, t.renderVersionHistoryActions = h
}), define("modules/clean/react/file_viewer_sidebar/sidebar", ["require", "exports", "tslib", "react", "external/react-redux", "file-viewer/modes", "file-viewer/core", "file-viewer/strings", "modules/clean/react/bubble_dropdown_v2", "modules/clean/react/file_viewer_sidebar/utils", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer/data/selectors", "external/lodash", "modules/clean/react/watermarking/callout", "modules/clean/react/watermarking/utils", "modules/clean/react/file_viewer/files2_utils", "modules/clean/react/file_viewer_sidebar/panes/documentation_pane", "modules/clean/react/file_viewer_sidebar/panes/metadata_pane", "modules/clean/react/file_viewer_sidebar/panes/commenting_pane", "modules/clean/react/file_viewer_sidebar/panes/loadable_activity_pane", "modules/clean/react/file_viewer_sidebar/panes/watermarking_pane", "modules/clean/react/user_notifications/dropdown", "file-viewer/modes", "file-viewer/core", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/logging", "modules/clean/react/size_class/size_class", "modules/clean/previews/constants", "modules/clean/react/file_viewer/data/selectors", "modules/clean/react/file_viewer_sidebar/render_utils/call_to_action", "modules/clean/react/file_viewer_sidebar/widgets/seen_states", "file-viewer/core/data/modes/types"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _, v, h, g, w, y, b, E, S, P, T, C, k, I, x, A, M) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), p = r.__importStar(p);
    var F, O = a.createMetaserverFormatters("en", s.strings, a.createI18nCache());
    (function(e) {
        e[e.MOUNTED_FILE = 0] = "MOUNTED_FILE", e[e.SHARED_FILE = 1] = "SHARED_FILE", e[e.VERSION_HISTORY = 2] = "VERSION_HISTORY"
    })(F || (F = {}));
    var R = (function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.callToActionType = function(e) {
                return e.sharedLinkInfo ? F.SHARED_FILE : e.isVersionHistoryMode ? F.VERSION_HISTORY : F.MOUNTED_FILE
            }, i.renderSidebarNotificationsFn = function() {
                if (!_.isFiles2M3Enabled()) return null;
                var e = i.props,
                    t = e.sharedLinkInfo,
                    r = e.user;
                return t || !r || r.is_guest_admin ? null : n.default.createElement(b.UserNotificationsDropdown, {
                    onClick: function() {
                        return T.logUserAction(P.UserAction.ClickNotifications, P.UserActionContext.Sidebar)
                    }
                })
            }, i.registerSidebarPanesFn = function(e) {
                var t, r = (t = {}, t[S.SidebarPaneId.Documentation] = n.default.createElement(v.DocumentationPane, {
                        key: "documentation-pane",
                        coreFVUiProps: e,
                        file: i.props.file,
                        user: i.props.user,
                        sharedLinkInfo: i.props.sharedLinkInfo,
                        maxFilenameEmLength: P.SizeClassFilenameLengthMap[i.props.sizeClass],
                        isVersionHistoryMode: !!i.props.isVersionHistoryMode
                    }), t[S.SidebarPaneId.Metadata] = n.default.createElement(h.MetadataPane, {
                        key: "metadata-pane",
                        coreFVUiProps: e,
                        file: i.props.file,
                        user: i.props.user,
                        sharedLinkInfo: i.props.sharedLinkInfo,
                        previewType: i.props.previewType
                    }), t[S.SidebarPaneId.Comments] = n.default.createElement(g.CommentingPane, {
                        coreFVUiProps: e,
                        key: "commenting-pane"
                    }), t[S.SidebarPaneId.Activity] = n.default.createElement(w.LoadableActivityPane, {
                        key: "activity-pane",
                        coreFVUiProps: e,
                        file: i.props.file,
                        user: i.props.user,
                        isVersionHistoryMode: !!i.props.isVersionHistoryMode
                    }), t),
                    o = i.props,
                    a = o.file,
                    s = o.user;
                return _.isFiles2Enabled() && f.allowWatermarkOrTrial(a, s) && f.fileIsEditable(a) && (r[S.SidebarPaneId.Watermarking] = n.default.createElement(y.WatermarkingPane, {
                    key: "watermarking-pane",
                    coreFVUiProps: e,
                    file: i.props.file,
                    user: i.props.user
                })), r
            }, i.handleWatermarkControlClick = function() {
                i.setState({
                    watermarkControlHasBeenClicked: !0
                })
            }, i.onClickTrialCTA = function() {
                i.props.changeMode(S.FileViewerMode.Watermarking)
            }, i.createRenderSidebarControlsFn = p.memoize(function(e) {
                return function(t) {
                    var o = [n.default.createElement(E.DocumentationControl, r.__assign({
                        key: "documentation-control"
                    }, t))];
                    e[S.FileViewerMode.Commenting] || i.props.isViewingFileSubpath || o.push(n.default.createElement(E.CommentControl, r.__assign({
                        key: "comment-control"
                    }, t)));
                    var a = i.props,
                        s = a.file,
                        c = a.user,
                        u = a.previewType,
                        d = !f.fileIsWatermarkable(s);
                    return _.isFiles2Enabled() && f.fileIsEditable(s) && (f.userCanWatermark(c) || f.allowWatermarkTrial(c)) && !i.props.isVersionHistoryMode && o.push(n.default.createElement(E.WatermarkControl, r.__assign({
                        key: "watermarking-control",
                        innerRef: function(e) {
                            i.watermarkControlRef = e
                        },
                        disabled: d,
                        labelText: f.getWatermarkingLabelText(d, u),
                        onClick: i.handleWatermarkControlClick
                    }, t), !d && n.default.createElement(m.WatermarkingCallout, {
                        targetNode: i.watermarkControlRef,
                        parentHasBeenClicked: i.state.watermarkControlHasBeenClicked,
                        position: l.BubbleDropdownPositions.LEFT,
                        isTrial: f.allowWatermarkTrial(c),
                        onClickTrialCTA: i.onClickTrialCTA,
                        milestone: f.getWatermarkMilestone(c)
                    }))), o
                }
            }), i.renderSidebarCallToActionsFn = function(e) {
                var t = i.callToActionType(i.props),
                    r = e.fileViewerUiData.sidebar.visibility === a.SidebarVisibility.Closed || i.props.sizeClass === C.SizeClass.Medium,
                    n = !i.props.isViewingFileSubpath || _.isFiles2M3Enabled();
                switch (t) {
                    case F.SHARED_FILE:
                        var o = i.props,
                            s = o.sharedLinkInfo,
                            l = o.shareToken,
                            c = o.sharePermission;
                        return x.renderSharedFileActions(i.props.file, i.props.user, i.props.sizeClass, s, l, c, n, !0, r);
                    case F.MOUNTED_FILE:
                        return x.renderMountedFileActions(i.props.file, i.props.user, i.props.sizeClass, n, i.props.extensionsConfig, !0, r);
                    case F.VERSION_HISTORY:
                        return x.renderVersionHistoryActions(i.props.file, i.props.user, n, !!i.props.canRestoreRevision, i.props.onRestoreRevision || function() {}, !0, r)
                }
                return []
            }, i.renderSidebarPASSFn = function(e) {
                return n.default.createElement(A.AsyncSeenStateFacepileConsumer, {
                    isCollapsed: e.fileViewerUiData.sidebar.visibility === a.SidebarVisibility.Closed
                })
            }, i.getPASSProviderProps = function() {
                var e = i.props,
                    t = e.user,
                    r = e.file,
                    n = e.isVersionHistoryMode,
                    o = e.sizeClass,
                    a = e.sharePermission,
                    s = e.isSeenStatesEnabled,
                    l = e.isViewingFileSubpath,
                    c = e.sharedLinkInfo,
                    u = !(!a || 0 !== a.canViewMetadataRoles.length);
                return r ? {
                    user: t || null,
                    file: r,
                    isVersionHistoryMode: n,
                    sizeClass: o,
                    isViewMetadataDisabled: u,
                    isSeenStatesEnabled: s,
                    isViewingFileSubpath: l,
                    sharedLinkInfo: c
                } : null
            }, i.state = {
                watermarkControlHasBeenClicked: !1
            }, i
        }
        return r.__extends(t, e), t.prototype.getSidebarColor = function() {
            return _.isFiles2M2Enabled() && this.props.previewType !== k.PreviewType.Archive ? M.SidebarColor.Chalk : M.SidebarColor.White
        }, t.prototype.sidebarWidth = function() {
            switch (this.props.sizeClass) {
                case C.SizeClass.ExtraLarge:
                    return 472;
                case C.SizeClass.Large:
                    return 416;
                case C.SizeClass.Medium:
                    return 320;
                case C.SizeClass.Small:
                    return 0
            }
        }, t.prototype.render = function() {
            var e, t = this.props,
                i = t.handleSidebarDispatch,
                s = t.fileViewerUiData,
                l = _.isFiles2M3Enabled() ? {
                    renderSidebarNotificationsFn: this.renderSidebarNotificationsFn,
                    renderSidebarCallToActionsFn: this.renderSidebarCallToActionsFn,
                    renderSidebarOverflowMenuFn: this.props.renderSidebarOverflowMenuFn,
                    renderSidebarPASSFn: this.renderSidebarPASSFn
                } : {},
                c = n.default.createElement(o.Sidebar, r.__assign({
                    fileViewerUiData: s,
                    fileId: "",
                    intl: O,
                    dispatch: i,
                    fileViewerId: "dummy",
                    backgroundColor: this.getSidebarColor(),
                    registerSidebarPanesFn: this.registerSidebarPanesFn,
                    renderSidebarControlsFn: this.createRenderSidebarControlsFn(this.props.disabledModes),
                    width: _.isFiles2M3Enabled() && s.sidebar.visibility === a.SidebarVisibility.Open ? this.sidebarWidth() : void 0
                }, l));
            return _.isFiles2M3Enabled() && (e = this.getPASSProviderProps()) ? n.default.createElement(A.AsyncSeenStatesProviderWrapper, r.__assign({}, e), c) : c
        }, t
    })(n.default.PureComponent);
    t.UnconnectedSidebar = R, t.Sidebar = i.connect(function(e) {
        return {
            fileViewerUiData: {
                currentMode: d.getMode(e),
                sidebar: d.getSidebar(e)
            },
            disabledModes: d.getDisabledModes(e),
            extensionsConfig: I.getExtensionsConfig(e)
        }
    }, function(e) {
        return {
            handleSidebarDispatch: c.createSidebarDispatchHandler(e),
            changeMode: function(t) {
                return e(u.changeMode(t))
            }
        }
    })(R)
}), define("modules/clean/react/file_viewer_sidebar/utils", ["require", "exports", "modules/clean/react/file_viewer/data/actions", "file-viewer/core"], function(e, t, r, n) {
    "use strict";

    function i(e) {
        return e.type === n.Action.SidebarControlClick
    }

    function o(e) {
        return e.type === n.Action.SetSidebarVisibility
    }
    var a;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = (a = {}, a[n.SidebarControlId.Documentation] = function(e) {
        e(r.changeMode(n.FileViewerMode.Documentation))
    }, a[n.SidebarControlId.Comments] = function(e) {
        e(r.changeMode(n.FileViewerMode.Commenting))
    }, a[n.SidebarControlId.Watermarking] = function(e) {
        e(r.changeMode(n.FileViewerMode.Watermarking))
    }, a[n.SidebarControlId.Zoom] = function(e) {
        e(r.changeMode(n.FileViewerMode.Zoom))
    }, a[n.SidebarControlId.Slack] = function(e) {
        e(r.changeMode(n.FileViewerMode.Slack))
    }, a);
    t.createSidebarDispatchHandler = function(e) {
        return function(t) {
            if (i(t)) {
                return (0, s[t.payload.controlId])(e, t)
            }
            if (o(t)) return e(r.setSidebarVisibility(t.payload.visibility))
        }
    }, t.isSidebarOpen = function(e) {
        return e.visibility === n.SidebarVisibility.Open
    }, t.isSidebarPaneIdAtTopOfStack = function(e, t) {
        var r = t.paneStack;
        return r.length > 0 && r[r.length - 1] === e
    }
}), define("modules/clean/react/file_viewer_sidebar/widgets/seen_states", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable", "modules/clean/previews/util"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.AsyncSeenStateFacepileProvider = i.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/pass/seen_state_facepile_controller"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.SeenStateFacepileProvider
            })
        }
    }), t.AsyncSeenStateFacepileConsumer = i.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/pass/seen_state_facepile_consumer"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.SeenStateFacepileConsumer
            })
        }
    }), t.AsyncSeenStatesProviderWrapper = function(e) {
        var r = e.children,
            i = e.file,
            a = e.isSeenStatesEnabled,
            s = e.isVersionHistoryMode,
            l = e.isViewingFileSubpath,
            c = e.isViewMetadataDisabled,
            u = e.sharedLinkInfo,
            d = e.sizeClass,
            p = e.user;
        return !a || s || null === i.ns_id || o.isCloudDocPreview(i) ? n.default.createElement(n.default.Fragment, null, r) : n.default.createElement(t.AsyncSeenStateFacepileProvider, {
            file: i,
            fromBrowse: !1,
            isViewMetadataDisabled: c,
            isViewingFileSubpath: !!l,
            sharedLinkInfo: u,
            sizeClass: d,
            user: p
        }, r)
    }
}), define("modules/clean/react/file_viewer_titlebar/loadable_icon", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.LoadableTitleIcon = i.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/title_bar/title_bar_title"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.TitleBarTitle
            })
        },
        loading: n.default.createElement("div", {
            className: "react-title-icon"
        })
    })
}), define("modules/clean/react/file_viewer_titlebar/loadable_title", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.LoadableTitle = i.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/file_viewer/title_name"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.TitleName
            })
        },
        loading: n.default.createElement("div", {
            className: "react-title-name"
        })
    })
}), define("modules/clean/react/file_viewer_titlebar/titlebar", ["require", "exports", "tslib", "file-viewer/titlebar/titlebar", "modules/clean/file_store/utils", "modules/clean/react/file_viewer/title_utils", "modules/clean/react/file_viewer_titlebar/loadable_icon", "modules/clean/react/file_viewer_titlebar/loadable_title", "modules/clean/react/size_class/constants", "react", "spectrum/file_icon", "modules/clean/react/file_viewer/utils", "modules/clean/react/file_viewer/constants", "modules/clean/react/size_class/size_class", "external/classnames"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), c = r.__importDefault(c), f = r.__importDefault(f);
    var _ = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.overrideIcon = t.props.hidePageChrome ? c.default.createElement("div", {
                className: "file-icon"
            }, c.default.createElement(u.FileIcon, {
                path: i.getFilename(t.props.file)
            })) : null, t
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return c.default.createElement("div", {
                className: "files2-title-bar"
            }, c.default.createElement(n.Titlebar, r.__assign({
                className: f.default("title", {
                    isSidebarOpen: this.props.isSidebarOpen
                }),
                title: c.default.createElement(s.LoadableTitle, {
                    file: this.props.file,
                    fileSubpath: this.props.fileSubpath,
                    hidePageChrome: this.props.hidePageChrome,
                    isViewingFileSubpath: this.props.isViewingFileSubpath,
                    maxFilenameEmLength: this.props.maxFilenameEmLength,
                    sharedLinkInfo: this.props.sharedLinkInfo,
                    sizeClass: this.props.sizeClass,
                    user: this.props.user
                }),
                icon: c.default.createElement(a.LoadableTitleIcon, {
                    customLogoUrl: o.customLogoUrl(this.props.sharedLinkInfo),
                    closeTitle: o.closeButtonTitle({
                        file: this.props.file,
                        fileViewAction: this.props.fileViewAction,
                        fileViewOrigin: this.props.fileViewOrigin,
                        sharedLinkInfo: this.props.sharedLinkInfo,
                        isVersionHistoryMode: this.props.isVersionHistoryMode
                    }),
                    canClose: this.props.canClose,
                    closeUrl: this.props.closeUrl,
                    file: this.props.file,
                    isSendForSignatureMode: !1,
                    isSigningMode: !1,
                    onClose: this.props.onClose,
                    shouldShowIcon: !this.props.isViewingFileSubpath,
                    sizeClass: this.props.sizeClass,
                    overrideIcon: this.overrideIcon
                })
            }, {
                renderTitleOverflowMenuFn: this.props.sizeClass === l.SizeClass.Small ? this.props.renderTitlebarOverflowMenuFn : void 0
            })))
        }, t
    })(c.default.PureComponent);
    t.Titlebar = _, t.FileTitleBar = m.withSizeClass(_, {
        isResponsiveEnabled: d.isResponsiveEnabled,
        responsiveClassName: p.ResponsiveClassName
    })
}), define("modules/clean/react/file_viewer_titlebar/watermarking_titlebar", ["require", "exports", "tslib", "react", "external/classnames", "modules/core/i18n", "file-viewer/titlebar/titlebar", "modules/clean/file_store/utils", "modules/clean/em_string"], function(e, t, r, n, i, o, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i);
    var c = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return n.default.createElement("div", {
                className: "files2-title-bar"
            }, n.default.createElement(a.Titlebar, {
                className: i.default("title"),
                title: n.default.createElement("h1", {
                    className: i.default("filename", "filename--files2m3")
                }, n.default.createElement("div", {
                    className: "filename--text"
                }, n.default.createElement("span", {
                    className: "filename--prefix"
                }, o._("Watermarking") + ": "), l.Emstring.em_snippet(s.getFilename(this.props.file), this.props.maxFilenameEmLength)))
            }))
        }, t
    })(n.default.PureComponent);
    t.WatermarkingTitlebar = c
}), define("modules/clean/react/keyboard_binding/keyboard_binding", ["require", "exports", "tslib", "external/lodash", "modules/clean/keycode"], function(e, t, r, n, i) {
    "use strict";

    function o(e) {
        return r.__assign({}, t.genericKeyboardEventCriteria, {
            which: e
        })
    }

    function a(e) {
        return r.__assign({}, y, {
            which: e
        })
    }

    function s(e) {
        return {
            keyboardEventCriteria: r.__assign({}, t.genericKeyboardEventCriteria, e.keyboardEventCriteria),
            callback: null != e.callback ? e.callback : b
        }
    }

    function l(e) {
        return {
            altKey: !!e.altKey,
            ctrlKey: !!e.ctrlKey,
            metaKey: !!e.metaKey,
            shiftKey: !!e.shiftKey,
            which: e.which || e.keyCode
        }
    }

    function c(e) {
        return {
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
            which: e.which || e.keyCode
        }
    }

    function u(e) {
        return r.__assign({}, e, {
            keyCode: null != e.keyCode ? e.keyCode : e.which
        })
    }

    function d(e, t) {
        var r, n;
        return [(r = {
            which: e
        }, r[t] = !0, r), (n = {
            which: e
        }, n[t] = !1, n)]
    }

    function p(e) {
        return function(t) {
            return d(t, e)
        }
    }

    function m(e) {
        return n.flatten(e.map(p("shiftKey")))
    }

    function f(e, t) {
        return e.map(function(e) {
            return s({
                keyboardEventCriteria: e,
                callback: t
            })
        })
    }

    function _(e) {
        return f(E, e)
    }

    function v(e) {
        return f(S, e)
    }

    function h(e) {
        return f(P, e)
    }

    function g(e) {
        return void 0 !== e.preventDefault
    }

    function w(e) {
        return function(t) {
            e(), g(t) && t.preventDefault()
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.genericKeyboardEventCriteria = {
        altKey: !1,
        ctrlKey: !1,
        metaKey: !1,
        shiftKey: !1,
        which: 0
    };
    var y = {
        altKey: !1,
        ctrlKey: !1,
        metaKey: !1,
        shiftKey: !1,
        which: 0
    };
    t.SimpleKeyboardEventKeys = Object.keys(y), t.KeyboardEventCriteriaKeys = Object.keys(t.genericKeyboardEventCriteria), t.generateUnmodifiedKeyboardEventCriteria = o, t.generateUnmodifiedSimpleKeyboardEvent = a;
    var b = function() {};
    t.hydrateKeyboardBinding = s, t.getKeyboardEventCriteria = l, t.getSimpleKeyboardEvent = c, t.addLegacyPropertiesToSimpleKeyboardEvent = u;
    var E = m([i.KeyCode.EQUALS, i.KeyCode.PLUS_EQUALS_FF, i.KeyCode.PLUS_CHROME, i.KeyCode.PLUS_EQUALS_FF_GERMAN]),
        S = m([i.KeyCode.MINUS_FF_MAC, i.KeyCode.MINUS_FF, i.KeyCode.MINUS_CHROME]),
        P = [{
            which: i.KeyCode.P
        }, {
            which: i.KeyCode.P,
            ctrlKey: !0
        }, {
            which: i.KeyCode.P,
            metaKey: !0
        }];
    t.getEqualsKeyBindings = _, t.getMinusKeyBindings = v, t.getPrintKeyBindings = h, t.isKeyboardEvent = g, t.withPreventDefault = w
}), define("modules/clean/react/keyboard_binding/keyboard_binding_connector", ["require", "exports", "tslib", "react", "modules/clean/react/keyboard_binding/keyboard_binding_provider"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var o = (function(e) {
        function t(t, r) {
            var n = e.call(this, t, r) || this;
            if (!r.registerKeyBindings || !r.unregisterKeyBindings) throw new Error("KeyboardBindingConnector must be a child of a KeyboardBindingProvider");
            return n
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            this.registrationIdentifier = this.context.registerKeyBindings(this.props.keyboardBindings), this.context.registerAllKeyCallback(this.registrationIdentifier, this.props.allKeyCallback)
        }, t.prototype.componentWillReceiveProps = function(e) {
            this.props.keyboardBindings !== e.keyboardBindings && this.context.updateKeyBindings(this.registrationIdentifier, e.keyboardBindings), this.props.allKeyCallback !== e.allKeyCallback && this.context.registerAllKeyCallback(this.registrationIdentifier, e.allKeyCallback)
        }, t.prototype.componentWillUnmount = function() {
            this.context.unregisterKeyBindings(this.registrationIdentifier)
        }, t.prototype.render = function() {
            return null
        }, t.contextTypes = i.KeyboardBindingProviderContextTypes, t
    })(n.default.Component);
    t.KeyboardBindingConnector = o
}), define("modules/clean/react/keyboard_binding/keyboard_binding_provider", ["require", "exports", "tslib", "react", "external/prop-types", "modules/clean/callback_chain/callback_chain", "modules/clean/keycode", "modules/clean/react/keyboard_binding/keyboard_binding"], function(e, t, r, n, i, o, a, s) {
    "use strict";

    function l(e) {
        var t = s.getKeyboardEventCriteria(e),
            r = "";
        return s.KeyboardEventCriteriaKeys.forEach(function(e) {
            r += e + ":" + t[e] + ","
        }), r
    }

    function c(e) {
        return e.reduce(function(e, t) {
            return t.reduce(function(e, t) {
                var r = t.keyboardEventCriteria,
                    n = t.callback,
                    i = l(r);
                return e[i] = e[i] || [], e[i].push(n), e
            }, e)
        }, {})
    }

    function u(e) {
        var t = s.addLegacyPropertiesToSimpleKeyboardEvent(e);
        new o.CallbackChain(p).run(t)
    }

    function d(e) {
        var t = e.target || e.srcElement;
        if (!t) return !0;
        var r = t.tagName,
            n = e.which,
            i = "INPUT" === r || "SELECT" === r || "TEXTAREA" === r,
            o = ["submit", "button"].indexOf(t.type) !== -1,
            s = t.hasAttribute && t.hasAttribute("contenteditable") && "false" !== t.getAttribute("contenteditable").toLowerCase();
        return !(i && !o || s) || (n === a.KeyCode.ESC || n === a.KeyCode.TAB)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i), t.KeyboardBindingProviderContextTypes = {
        registerAllKeyCallback: i.func,
        registerKeyBindings: i.func,
        unregisterKeyBindings: i.func,
        updateKeyBindings: i.func
    };
    var p = [];
    t.noop = function(e) {};
    var m = (function(e) {
        function i(r) {
            var n = e.call(this, r) || this;
            return n.registrationIdentifier = 0, n.registeredBindings = [], n.keyboardBindingsByCriteria = {}, n.allKeyHandlers = [], n.registerKeyBindings = function(e) {
                var r = n.registrationIdentifier++;
                return n.updateKeyBindings(r, e), n.allKeyHandlers[r] || (n.allKeyHandlers[r] = t.noop), r
            }, n.registerAllKeyCallback = function(e, r) {
                n.allKeyHandlers[e] = null != r ? r : t.noop
            }, n.unregisterKeyBindings = function(e) {
                n.updateKeyBindings(e, []), n.allKeyHandlers[e] = t.noop
            }, n.updateKeyBindings = function(e, t) {
                n.registeredBindings[e] = null != t ? t : [], n.keyboardBindingsByCriteria = c(n.registeredBindings)
            }, n.onKeyDown = function(e) {
                if (d(e)) {
                    var t = n.getCallbacksForKey(e);
                    new o.CallbackChain(t).run(e)
                }
            }, n.allKeyHandlers = [], n.registeredBindings = [], n
        }
        return r.__extends(i, e), i.prototype.componentDidMount = function() {
            document.addEventListener("keydown", this.onKeyDown), this.providerIdentifier = p.length, p.push(this.onKeyDown), this.props.onSetup && this.props.onSetup()
        }, i.prototype.componentWillUnmount = function() {
            document.removeEventListener("keydown", this.onKeyDown), p[this.providerIdentifier] = t.noop, this.props.onDestroy && this.props.onDestroy()
        }, i.prototype.getChildContext = function() {
            return {
                registerAllKeyCallback: this.registerAllKeyCallback,
                registerKeyBindings: this.registerKeyBindings,
                unregisterKeyBindings: this.unregisterKeyBindings,
                updateKeyBindings: this.updateKeyBindings
            }
        }, i.prototype.getCallbacksForKey = function(e) {
            var t = l(e);
            return (this.keyboardBindingsByCriteria[t] || []).concat(this.allKeyHandlers)
        }, i.prototype.render = function() {
            return n.default.Children.only(this.props.children)
        }, i.childContextTypes = t.KeyboardBindingProviderContextTypes, i
    })(n.default.Component);
    t.KeyboardBindingProvider = m, t.getIndexForkeyboardBindingsByCriteria = l, t.generateKeyboardBindingsByCriteriaFromKeyboardBindings = c, t.simulateKeyEvent = u
}), define("modules/clean/react/open_in_app/button", ["require", "exports", "tslib", "react", "spectrum/button", "modules/clean/open_in_app/actions", "modules/core/i18n", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer/constants"], function(e, t, r, n, i, o, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var c = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.handleClick = function() {
                s.logUserAction(l.UserAction.OpenInApp, r.props.userActionContext), o.openInApp(r.props.urls, {
                    onAppNeeded: function() {
                        return r.setState({
                            showInstallAppText: !0
                        })
                    },
                    onAppInstalled: function() {
                        return r.setState({
                            showInstallAppText: !1
                        })
                    }
                })
            }, r.state = {
                showInstallAppText: !1
            }, r
        }
        return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
            o.cleanUp()
        }, t.prototype.render = function() {
            return n.default.createElement(i.Button, {
                className: "control__button open-in-app-button",
                variant: "primary",
                onClick: this.handleClick
            }, this.state.showInstallAppText ? a._("Install app?") : a._("Open in app"))
        }, t
    })(n.default.Component);
    t.OpenInAppButton = c
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/previews/archive/preview_archive_loadable", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PreviewArchiveLoadable = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/previews/archive/preview_archive"], t, r)
            }).then(__importStar).then(function(e) {
                return e.PreviewArchive
            })
        }
    })
}), define("modules/clean/react/previews/error/file_info", ["require", "exports", "tslib", "react", "modules/clean/display_format"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.PreviewErrorFileInfo = function(e) {
        var t = e.bytes,
            r = e.filename;
        return n.default.createElement("div", {
            className: "preview-error__info"
        }, r, void 0 !== t ? n.default.createElement("span", null, n.default.createElement("span", {
            className: "bottom-dot"
        }, " · "), i.format_bytes(t)) : null)
    }
}), define("modules/clean/react/previews/error/fullscreen_view", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/react/file_viewer/actionable", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/full_screen_helpers", "modules/clean/react/previews/error/file_info", "modules/clean/react/previews/error/message", "modules/clean/react/previews/preview_zoom_container"], function(e, t, r, n, i, o, a, s, l, c, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var d = function(e) {
            var t = e.allowOpenInApp,
                r = e.areActionablesEnabled,
                i = e.count,
                d = e.errorType,
                p = e.extensionsConfig,
                m = e.file,
                f = e.filename,
                _ = e.index,
                v = e.message,
                h = e.onNext,
                g = e.onPrevious,
                w = e.preview,
                y = e.sharedLinkInfo,
                b = e.shareToken,
                E = e.sharePermission,
                S = e.user;
            return n.default.createElement(u.PreviewZoomContainer, {
                fileCount: i,
                fileIndex: _,
                onClose: s.exitFullScreen,
                onFlipNext: h,
                onFlipPrevious: g,
                renderZoomControls: !1
            }, n.default.createElement("div", {
                className: "preview-error--fullscreen fullscreen"
            }, n.default.createElement(c.PreviewErrorMessage, {
                file: m,
                preview: w,
                errorType: d,
                message: v
            }), n.default.createElement(l.PreviewErrorFileInfo, {
                bytes: m.bytes,
                filename: f
            }), r ? n.default.createElement(o.Actionable, {
                allowOpenInApp: !!t,
                extensionsConfig: p,
                file: m,
                variant: "primary",
                location: a.FileViewerPane.PreviewContent,
                sharedLinkInfo: y,
                shareToken: b,
                sharePermission: E,
                user: S,
                userActionContext: a.UserActionContext.PreviewContentMain
            }) : null))
        },
        p = i.requireCssWithComponent(d, ["/static/css/preview_image-vflNPGLZQ.css", "/static/css/preview_error-vflkC9YCp.css"]);
    t.PreviewErrorFullscreenView = p
}), define("modules/clean/react/previews/error/image", ["require", "exports", "tslib", "react", "modules/clean/react/image", "modules/clean/react/previews/constants", "modules/clean/static_urls"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.PreviewErrorImage = function(e) {
        var t, r = e.errorType;
        switch (r) {
            case o.ErrorType.PendingUploadError:
                t = n.default.createElement(i.Image, {
                    src: a.static_url("/static/js/file-viewer/img/error/file_uploading_1x-vflRuLSg0.png"),
                    srcHiRes: a.static_url("/static/js/file-viewer/img/error/file_uploading_2x-vflKOdrWj.png")
                });
                break;
            case o.ErrorType.ExtensionError:
                t = n.default.createElement(i.Image, {
                    src: a.static_url("/static/js/file-viewer/img/error/filetype_not_supported_1x-vflmIVODZ.png"),
                    srcHiRes: a.static_url("/static/js/file-viewer/img/error/filetype_not_supported_2x-vflE8HW8X.png")
                });
                break;
            case o.ErrorType.FileSizeError:
                t = n.default.createElement(i.Image, {
                    src: a.static_url("/static/js/file-viewer/img/error/file_too_large_1x-vflDGNPuo.png"),
                    srcHiRes: a.static_url("/static/js/file-viewer/img/error/file_too_large_2x-vfl-r0UPt.png")
                });
                break;
            case o.ErrorType.PasswordProtectedError:
                t = n.default.createElement(i.Image, {
                    src: a.static_url("/static/js/file-viewer/img/error/password_protected_1x-vflnFAKjt.png"),
                    srcHiRes: a.static_url("/static/js/file-viewer/img/error/password_protected_2x-vflnBXZ1k.png")
                });
                break;
            case o.ErrorType.NeedFlashError:
            case o.ErrorType.SymLinkError:
            case o.ErrorType.EmptyFileError:
            case o.ErrorType.WatermarkingError:
            case o.ErrorType.LoadError:
            default:
                t = n.default.createElement(i.Image, {
                    src: a.static_url("/static/js/file-viewer/img/error/unavailable_1x-vflG2AHMd.png"),
                    srcHiRes: a.static_url("/static/js/file-viewer/img/error/unavailable_2x-vflGPrE5d.png")
                })
        }
        return n.default.createElement("div", {
            className: "u-mar-bottom-s preview-error__image"
        }, t)
    }
}), define("modules/clean/react/previews/error/message", ["require", "exports", "tslib", "react", "modules/clean/file_store/utils", "modules/clean/react/previews/constants", "modules/clean/react_format", "modules/core/i18n", "modules/clean/previews/data/preview_type_util", "modules/clean/previews/util", "modules/clean/display_format", "modules/constants/trademark"], function(e, t, r, n, i, o, a, s, l, c, u, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), l = r.__importStar(l), t.PreviewErrorMessage = function(e) {
        var t, r = e.file ? i.getExtension(e.file) : void 0;
        if (e.message) t = e.message;
        else switch (e.errorType) {
            case o.ErrorType.PendingUploadError:
                t = s._("File is uploading...");
                break;
            case o.ErrorType.EmptyFileError:
                t = s._("Empty files can’t be previewed");
                break;
            case o.ErrorType.ExtensionError:
                if (!e.file) throw new Error("Extension error requires a file prop");
                if (r) {
                    var p = i.isArchiveFile(e.file) && e.preview ? s._("<span>.%(extension)s</span> files can’t be previewed from an archive file.", {
                        comment: "Like '.exe files can’t be previewed from an archive file'"
                    }) : s._("<span>.%(extension)s</span> files can’t be previewed.", {
                        comment: "Like '.exe files can’t be previewed'"
                    });
                    t = a.reactFormat(p, {
                        span: n.default.createElement("span", {
                            className: "preview-error__message--bold"
                        }),
                        extension: r
                    })
                } else t = s._("This file cannot be previewed. Please check to see if your file extension is correct.");
                break;
            case o.ErrorType.FileSizeError:
                var m = l.getPreviewType(e.preview),
                    f = r && m ? c.getFileSizeLimit(r, m) : void 0;
                t = f ? a.reactFormat(s._("This file is too big to preview. <br /> The maximum file size for <span>.%(extension)s</span> is <span>%(limit)s</span>"), {
                    br: n.default.createElement("br", null),
                    span: n.default.createElement("span", {
                        className: "preview-error__message--bold"
                    }),
                    extension: r,
                    limit: u.format_bytes(f)
                }) : s._("This file is too big to preview.");
                break;
            case o.ErrorType.PasswordProtectedError:
                t = r ? a.reactFormat(s._("This <span>.%(extension)s</span> file is password-protected."), {
                    span: n.default.createElement("span", {
                        className: "preview-error__message--bold"
                    }),
                    extension: r
                }) : s._("This file is password-protected.");
                break;
            case o.ErrorType.NeedFlashError:
                t = a.reactFormat(s._("Install <a>Adobe Flash Player</a> to preview this video."), {
                    a: n.default.createElement("a", {
                        href: "https://get.adobe.com/flashplayer/"
                    })
                });
                break;
            case o.ErrorType.SymLinkError:
                t = s._("SymLink files cannot be previewed.");
                break;
            case o.ErrorType.WatermarkingError:
                t = s._("This file could not be watermarked.");
                break;
            case o.ErrorType.UpsellError:
                t = a.reactFormat(s._("<p>Can’t preview <span>.%(extension)s</span> files. <br />Upgrade to %(trademark_professional)s to preview more file types.</p>"), {
                    br: n.default.createElement("br", null),
                    p: n.default.createElement("p", null),
                    span: n.default.createElement("span", {
                        className: "preview-error__message--bold"
                    }),
                    trademark_professional: d.TRADEMARK_PROFESSIONAL,
                    extension: r
                });
                break;
            case o.ErrorType.LoadError:
            default:
                t = r ? a.reactFormat(s._("<span>.%(extension)s</span> files are supported but something went wrong."), {
                    span: n.default.createElement("span", {
                        className: "preview-error__message--bold"
                    }),
                    extension: r
                }) : s._("This file can’t be previewed")
        }
        return n.default.createElement("div", {
            className: "preview-error__message"
        }, t)
    }
}), define("modules/clean/react/previews/error/preview_error", ["require", "exports", "tslib", "react", "modules/clean/em_string", "modules/clean/previews/pending_upload_watcher", "modules/clean/react/css", "modules/clean/file_store/utils", "modules/clean/react/file_viewer/constants", "modules/clean/react/previews/constants", "modules/clean/react/previews/error/fullscreen_view", "modules/clean/react/previews/error/view", "modules/clean/web_timing_logger", "modules/clean/react/previews/error/upsell"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), p = r.__importStar(p);
    var f = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            if (p.set_tti_exclusion_flow("failed previews not included"), p.mark_time_to_view(), p.mark_time_to_interactive(), this.logPreviewSupportDenied(), this.props.errorType === c.ErrorType.PendingUploadError && this.props.shareToken) {
                new o.PendingUploadWatcher(this.props.shareToken.linkType, this.props.shareToken.linkKey, this.props.shareToken.secureHash).startPolling()
            }
        }, Object.defineProperty(t.prototype, "allowOpenInApp", {
            get: function() {
                return !!this.props.file.open_in_app_data && !this.props.isMobileUserAgent
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.logPreviewSupportDenied = function() {
            this.props.errorType !== c.ErrorType.LoadError && this.props.errorType !== c.ErrorType.PendingUploadError && this.props.filePreviewSession && this.props.filePreviewSession.recordEvent(l.EventType.FilePreviewSupportDenied, {
                errorType: this.props.errorType
            })
        }, t.prototype.render = function() {
            var e = i.Emstring.em_snippet(s.getFilename(this.props.file), this.props.maxFilenameEmLength);
            return this.props.errorType === c.ErrorType.UpsellError ? n.default.createElement(m.PreviewUpsellErrorView, {
                areActionablesEnabled: this.props.areActionablesEnabled,
                allowOpenInApp: this.allowOpenInApp,
                count: this.props.count,
                errorType: this.props.errorType,
                extensionsConfig: this.props.extensionsConfig,
                file: this.props.file,
                filePreviewSession: this.props.filePreviewSession,
                filename: e,
                index: this.props.index,
                onNext: this.props.onNext,
                onPrevious: this.props.onPrevious,
                preview: this.props.preview,
                sharePermission: this.props.sharePermission,
                shareToken: this.props.shareToken,
                sharedLinkInfo: this.props.sharedLinkInfo,
                shouldDisplayToolbar: this.props.shouldDisplayToolbar,
                sizeClass: this.props.sizeClass,
                user: this.props.user
            }) : this.props.isFullscreen ? n.default.createElement(u.PreviewErrorFullscreenView, r.__assign({}, this.props, {
                allowOpenInApp: this.allowOpenInApp,
                filename: e
            })) : n.default.createElement(d.PreviewErrorView, r.__assign({}, this.props, {
                allowOpenInApp: this.allowOpenInApp,
                filename: e
            }))
        }, t.defaultProps = {
            areActionablesEnabled: !0,
            isFullscreen: !1
        }, t
    })(n.default.Component);
    t._PreviewError = f;
    var _ = a.requireCssWithComponent(f, ["/static/css/preview_error-vflkC9YCp.css"]);
    t.PreviewError = _
}), define("modules/clean/react/previews/error/upsell", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/file_viewer/actionable", "modules/clean/react/file_viewer/constants", "modules/clean/react/previews/error/file_info", "modules/clean/react/previews/error/image", "modules/clean/react/previews/error/message", "modules/core/i18n", "modules/clean/react/file_viewer/file_preview_event_emitter", "modules/clean/react/previews/preview_toolbar", "modules/clean/react/previews/toolbar_flip_buttons"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i);
    var f = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClickCTA = function() {
                t.props.filePreviewSession && d.filePreviewEventEmitter.emit(a.EventType.FilePreviewUpsellClicked, t.props.filePreviewSession)
            }, t
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            this.props.filePreviewSession && d.filePreviewEventEmitter.emit(a.EventType.FilePreviewUpsellExposed, this.props.filePreviewSession)
        }, t.prototype.render = function() {
            return i.default.createElement("div", {
                className: n.default({
                    "preview-content": !0,
                    "preview-content--center": !0,
                    "preview-error": !0,
                    "has-toolbar": this.props.shouldDisplayToolbar
                })
            }, i.default.createElement("div", {
                className: "preview-error__wrapper"
            }, i.default.createElement("div", {
                className: "preview-error__content"
            }, i.default.createElement(l.PreviewErrorImage, {
                errorType: this.props.errorType
            }), i.default.createElement(c.PreviewErrorMessage, {
                file: this.props.file,
                preview: this.props.preview,
                errorType: this.props.errorType
            }), i.default.createElement(s.PreviewErrorFileInfo, {
                filename: this.props.filename,
                bytes: this.props.file.bytes
            }), this.props.areActionablesEnabled ? i.default.createElement("div", {
                className: "preview-error__upsell-cta"
            }, i.default.createElement(o.Actionable, {
                allowOpenInApp: !!this.props.allowOpenInApp,
                extensionsConfig: this.props.extensionsConfig,
                file: this.props.file,
                variant: "primary",
                location: a.FileViewerPane.PreviewContent,
                sharedLinkInfo: this.props.sharedLinkInfo,
                shareToken: this.props.shareToken,
                sharePermission: this.props.sharePermission,
                user: this.props.user,
                userActionContext: a.UserActionContext.PreviewContentMain,
                sizeClass: this.props.sizeClass
            })) : null, i.default.createElement("div", {
                className: "preview-error__help-link"
            }, i.default.createElement("a", {
                href: a.PreviewsUpsellUrl,
                onClick: this.onClickCTA
            }, u._("Upgrade"))), this.props.shouldDisplayToolbar && null != this.props.index && null != this.props.count ? i.default.createElement("div", {
                className: "preview-toolbar-container"
            }, i.default.createElement(p.PreviewToolbar, {
                isFullscreen: !1
            }, i.default.createElement(m.ToolbarFlipButtons, {
                index: this.props.index,
                count: this.props.count,
                onClickPrevious: this.props.onPrevious,
                onClickNext: this.props.onNext
            }))) : null)))
        }, t
    })(i.default.Component);
    t.PreviewUpsellErrorView = f
}), define("modules/clean/react/previews/error/view", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/previews/preview_toolbar", "modules/clean/file_store/utils", "modules/clean/react/file_viewer/actionable", "modules/clean/react/file_viewer/constants", "modules/clean/react/previews/constants", "modules/clean/react/previews/error/file_info", "modules/clean/react/previews/error/image", "modules/clean/react/previews/error/message", "modules/core/i18n", "modules/clean/react/previews/toolbar_flip_buttons"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i), t.PreviewErrorView = function(e) {
        var t = e.areActionablesEnabled,
            r = e.allowOpenInApp,
            m = e.count,
            v = e.errorType,
            h = e.extensionsConfig,
            g = e.file,
            w = e.filename,
            y = e.index,
            b = e.message,
            E = e.onNext,
            S = e.onPrevious,
            P = e.preview,
            T = e.sharedLinkInfo,
            C = e.shareToken,
            k = e.sharePermission,
            I = e.shouldDisplayToolbar,
            x = e.sizeClass,
            A = e.user;
        return i.default.createElement("div", {
            className: n.default({
                "preview-content": !0,
                "preview-content--center": !0,
                "preview-error": !0,
                "has-toolbar": I
            })
        }, i.default.createElement("div", {
            className: "preview-error__wrapper"
        }, i.default.createElement("div", {
            className: "preview-error__content"
        }, i.default.createElement(d.PreviewErrorImage, {
            errorType: v
        }), i.default.createElement(p.PreviewErrorMessage, {
            file: g,
            preview: P,
            errorType: v,
            message: b
        }), i.default.createElement(u.PreviewErrorFileInfo, {
            filename: w,
            bytes: g.bytes
        }), t ? i.default.createElement(s.Actionable, {
            allowOpenInApp: !!r,
            extensionsConfig: h,
            file: g,
            variant: "primary",
            location: l.FileViewerPane.PreviewContent,
            sharedLinkInfo: T,
            shareToken: C,
            sharePermission: k,
            user: A,
            userActionContext: l.UserActionContext.PreviewContentMain,
            sizeClass: x
        }) : null, v !== c.ErrorType.ExtensionError || a.isArchiveFile(g) ? null : i.default.createElement(_, null)), I && null != y && null != m ? i.default.createElement("div", {
            className: "preview-toolbar-container"
        }, i.default.createElement(o.PreviewToolbar, {
            isFullscreen: !1
        }, i.default.createElement(f.ToolbarFlipButtons, {
            index: y,
            count: m,
            onClickPrevious: S,
            onClickNext: E
        }))) : null))
    };
    var _ = function() {
        return i.default.createElement("div", {
            className: "preview-error__help-link"
        }, i.default.createElement("a", {
            href: l.UnsupportedExtensionHelpLink,
            target: "_blank",
            rel: "noopener\n    noreferrer"
        }, m._("Learn more.")))
    }
}), define("modules/clean/react/previews/fidelity_survey/fidelity_survey", ["require", "exports", "tslib", "modules/clean/react/async/loadable", "modules/clean/web_timing_logger", "modules/constants/file_viewer", "react"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), t.LoadableFidelitySurvey = n.Loadable({
        loader: function() {
            return i.waitForTTI().then(function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/previews/fidelity_survey/fidelity_survey_component"], t, r)
                }).then(r.__importStar).then(function(e) {
                    return e.FidelitySurvey
                })
            })
        }
    });
    var s = (function(e) {
        function n(t) {
            var r = e.call(this, t) || this;
            return r.shouldLoad = 100 * Math.random() < o.PREVIEW_FIDELITY_SURVEY_PROBABILITY, r
        }
        return r.__extends(n, e), n.prototype.render = function() {
            var e = this.props,
                r = e.allowFileDonation,
                n = e.file;
            return this.shouldLoad && n ? a.default.createElement(t.LoadableFidelitySurvey, {
                allowFileDonation: r,
                file: n
            }) : null
        }, n
    })(a.default.Component);
    t.FidelitySurvey = s
}), define("modules/clean/react/previews/frame_messenger_host", ["require", "exports", "tslib", "modules/clean/frame_messenger/frame_messenger_host"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function(e) {
        function t() {
            var t = ["www.dropboxstatic.com", "cf.dropboxstatic.com", "cfl.dropboxstatic.com", "www.dropbox.com", "dl-web.dropbox.com", "dl.dropboxusercontent.com", "previews.dropboxusercontent.com", "previews.dropbox.com"],
                r = t.map(function(e) {
                    return "https://" + e
                });
            return r.push("null"), r.push(RegExp(".*previews.*.dropboxusercontent.com")), e.call(this, r) || this
        }
        return r.__extends(t, e), t
    })(n.FrameMessengerHost);
    t.PreviewFrameMessengerHost = i
}), define("modules/clean/react/previews/image_helpers", ["require", "exports", "tslib", "modules/constants/python", "modules/clean/photos/thumbnail_url_util"], function(e, t, r, n, i) {
    "use strict";

    function o(e, t) {
        var r;
        return r = t ? c.filter(function(e) {
            var r = e[0],
                n = e[1];
            return r <= t[0] && n <= t[1]
        }) : c, r.map(function(t) {
            var r = t[0],
                o = t[1];
            return i.thumbnailUrlForSize(e, r, o, n.THUMBNAIL_SIZE_MODE.ABSTRACT) + " " + r + "w"
        }).join(", ")
    }

    function a(e) {
        return i.thumbnailUrlForSize(e, 800, 600, n.THUMBNAIL_SIZE_MODE.ABSTRACT)
    }

    function s(e) {
        return l(a(e), {
            srcset: o(e),
            sizes: t.IMG_SIZES_ATTR
        })
    }

    function l(e, t) {
        return new Promise(function(r, n) {
            var i = Date.now(),
                o = new Image;
            o.onload = function() {
                r({
                    started: i,
                    completed: Date.now()
                })
            }, o.onerror = function() {
                n({
                    started: i,
                    failed: Date.now()
                })
            }, t && (t.srcset && (o.srcset = t.srcset), t.sizes && (o.sizes = t.sizes)), o.src = e
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var c = [
        [480, 320],
        [640, 480],
        [800, 600],
        [1024, 768],
        [1280, 960],
        [1600, 1200],
        [2048, 1536]
    ];
    t.IMG_SIZES_ATTR = "90vw", t.getSrcSet = o, t.getFallbackSrc = a, t.preloadResponsiveImage = s, t.preloadImage = l
}), define("modules/clean/react/previews/loading_indicator", ["require", "exports", "tslib", "external/classnames", "react"], function(e, t, r, n, i) {
    "use strict";

    function o(e) {
        return i.default.createElement("div", {
            className: n.default("c-loader", e.className)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i), t.LoadingIndicator = o
}), define("modules/clean/react/previews/preview_html", ["require", "exports", "tslib", "react", "external/react-dom", "file-viewer/core", "modules/clean/previews/util", "modules/clean/react/file_viewer/constants", "modules/clean/react/previews/frame_messenger_host", "modules/clean/react/previews/preview_toolbar", "modules/clean/react/size_class/constants", "modules/clean/web_timing_logger", "modules/core/browser_detection", "modules/core/uri", "modules/clean/react/previews/toolbar_flip_buttons", "modules/clean/react/file_viewer/full_screen_helpers", "file-viewer/toolbar", "file-viewer/strings", "file-viewer/core", "modules/clean/react/previews/preview_toolbar_button", "modules/clean/react/previews/print_helpers", "modules/clean/react/keyboard_binding/keyboard_binding_connector", "modules/clean/react/keyboard_binding/keyboard_binding", "modules/clean/keycode", "modules/clean/react/previews/preview_toolbar_frame_messenger", "modules/clean/react/file_viewer/logging"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _, v, h, g, w, y, b, E, S, P, T) {
    "use strict";
    var C;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i), d = r.__importStar(d), p = r.__importStar(p);
    var k, I = g.createMetaserverFormatters("en", h.strings, g.createI18nCache()),
        x = ["failed", "viewer-ready", "idle-mouse", "active-mouse", "exit-parent-fullscreen", "keydown", "child-focus", "get-keydown-keys-handled-by-parent"];
    (function(e) {
        e.ClearMouseTracking = "clear-mouse-tracking", e.EnableRegionCreation = "enable-region-creation", e.EnterFullscreen = "enter-fullscreen", e.ExitViewerFullscreen = "exit-viewer-fullscreen", e.PageDown = "page-down", e.PageUp = "page-up", e.SetCurrentPage = "set-current-page", e.PreviewToolbarMounted = "preview-toolbar-mounted", e.Print = "print", e.ScreenDown = "screen-down", e.ScreenUp = "screen-up", e.ZoomIn = "zoom-in", e.ZoomOut = "zoom-out"
    })(k || (k = {}));
    var A = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.getIframeProps = function() {
                var e = {
                    title: t.props.filename,
                    name: "preview-content",
                    type: "text/html",
                    src: t.getIframeSrc(),
                    sandbox: "",
                    className: "previewhtml",
                    ref: t.setRefIframe
                };
                return t.props.usesFrameMessenger && (e.sandbox = "allow-modals allow-scripts allow-forms"), e
            }, t.handleTrustedMessageFromChild = function(e) {
                switch (e.action) {
                    case "failed":
                        t.logFilePreviewEvent(s.EventType.FilePreviewDownloadSucceeded), t.logFilePreviewEvent(s.EventType.FilePreviewRenderFailed);
                        var r = o.RivieraStatus.Unknown;
                        e.parameters && (r = e.parameters.rivieraStatusCode), t.props.onError && t.props.onError(a.mapRivieraStatusToErrorType(r));
                        break;
                    case "viewer-ready":
                        t.markWebTiming(), t.logFilePreviewEvent(s.EventType.FilePreviewDownloadSucceeded), t.logFilePreviewEvent(s.EventType.FilePreviewRenderSucceeded), t.props.setRenderStatusSuccess(), t.props.isFullscreen ? t.frameMessenger.postMessageToChildren("enter-fullscreen") : t.frameMessenger.postMessageToChildren("exit-viewer-fullscreen"), t.props.sharePermission && 0 === t.props.sharePermission.canDownloadRoles.length && t.frameMessenger.postMessageToChildren("disable-download"), t.shouldIncreaseTabHeightForExcel() && t.frameMessenger.postMessageToChildren("increase-tab-height");
                        break;
                    case "exit-parent-fullscreen":
                        _.exitFullScreen(s.UserActionContext.Unknown);
                        break;
                    case "get-keydown-keys-handled-by-parent":
                        t.postKeysHandledByParent()
                }
            }, t.handleIframeLoad = function() {
                t.logFilePreviewEvent(s.EventType.FilePreviewDownloadSucceeded), t.props.usesFrameMessenger || (t.markWebTiming(), t.logFilePreviewEvent(s.EventType.FilePreviewRenderSucceeded), t.props.setRenderStatusSuccess())
            }, t.handleIframeError = function() {
                t.logFilePreviewEvent(s.EventType.FilePreviewDownloadFailed)
            }, t.setRefIframe = function(e) {
                t.iframe = e
            }, t.printDocument = function(e) {
                t.frameMessenger.postMessageToChildren(k.Print, {
                    context: e
                })
            }, t.keyboardBindings = [E.hydrateKeyboardBinding({
                keyboardEventCriteria: {
                    which: S.KeyCode.P
                },
                callback: function() {
                    return t.printDocument(s.UserActionContext.Keyboard)
                }
            })], t.handleClickPrevious = T.wrapToolbarActionWithLogging(function() {
                var e = t.props.onClickPrevious;
                return e && e()
            }, s.UserAction.FlipPrevious), t.handleClickNext = T.wrapToolbarActionWithLogging(function() {
                var e = t.props.onClickNext;
                return e && e()
            }, s.UserAction.FlipNext), t
        }
        return r.__extends(t, e), t.prototype.getIframeSrc = function() {
            var e = m.URI.parse(this.props.src);
            return this.props.isExcel && (this.props.forceTestExcelHtml ? e.updateQuery({
                canned_file_name: s.CannedTestFilename.ExcelHTML
            }) : "password_protected" === this.props.forceRivieraException ? e.updateQuery({
                canned_exception: "riviera_exception_password"
            }) : "too_big" === this.props.forceRivieraException && e.updateQuery({
                canned_exception: "riviera_exception_too_big"
            })), e.toString()
        }, t.prototype.shouldIncreaseTabHeightForExcel = function() {
            return this.props.isExcel && p.is_mobile_or_tablet()
        }, t.prototype.logFilePreviewEvent = function(e) {
            this.props.filePreviewSession && this.props.filePreviewSession.recordEvent(e)
        }, t.prototype.postKeysHandledByParent = function() {
            this.frameMessenger.postMessageToChildren("keydown-keys-handled-by-parent", {
                keycodes: M
            })
        }, t.prototype.markWebTiming = function() {
            this.props.filePreviewSession && this.props.filePreviewSession.markPrimaryEvent(), d.mark_time_to_view(), d.mark_time_to_interactive()
        }, t.prototype.componentDidMount = function() {
            this.logFilePreviewEvent(s.EventType.FilePreviewSupportConfirmed), this.logFilePreviewEvent(s.EventType.FilePreviewDownloadAttempted), this.props.usesFrameMessenger && (this.frameMessenger = new l.PreviewFrameMessengerHost, this.frameMessenger.configureChildMessaging("iframe.previewhtml", this.handleTrustedMessageFromChild, x), this.frameMessenger.startListening(), this.postKeysHandledByParent());
            var e = i.findDOMNode(this.iframe);
            e.onload = this.handleIframeLoad, e.onerror = this.handleIframeError
        }, t.prototype.componentWillUnmount = function() {
            this.props.usesFrameMessenger && this.frameMessenger.stopListening()
        }, t.prototype.render = function() {
            var e = this,
                t = {};
            p.iOS && (t = a.iOSIframeScrollStyles());
            var i = this.props,
                o = i.count,
                l = i.index,
                d = i.isFullscreen,
                m = i.isExcel,
                h = i.sharePermission,
                g = i.sizeClass,
                E = i.onClickNext,
                S = i.onClickPrevious;
            return n.default.createElement("div", {
                className: "preview-content",
                style: t
            }, n.default.createElement("iframe", r.__assign({}, this.getIframeProps())), n.default.createElement(c.PreviewToolbar, {
                elevateToolbar: m,
                isFullscreen: d,
                isHidden: g === u.SizeClass.Small,
                fadeController: function(e) {
                    var t = e.fadeIn,
                        r = e.fadeOut;
                    return n.default.createElement(P.PreviewToolbarFrameMessenger, {
                        activeMouse: t,
                        idleMouse: r
                    })
                }
            }, m ? null : n.default.createElement(f.ToolbarFlipButtons, {
                index: l,
                count: o,
                onClickPrevious: S && this.handleClickPrevious,
                onClickNext: E && this.handleClickNext
            }), n.default.createElement(v.FullScreenButton, {
                className: "toolbar-button-entry",
                formatMessage: I.formatMessage,
                onClick: function() {
                    return _.toggleFullScreen(d, s.UserActionContext.Toolbar)
                }
            }), n.default.createElement(w.PreviewToolbarButton, {
                "data-test": "print",
                disabled: !y.canPrint(h),
                spriteGroup: "web",
                spriteName: "print",
                tooltip: y.getPrintTooltip(h),
                onClick: y.canPrint(h) ? function() {
                    return e.printDocument(s.UserActionContext.Toolbar)
                } : function() {}
            }), n.default.createElement(b.KeyboardBindingConnector, {
                keyboardBindings: this.keyboardBindings
            })))
        }, t.defaultProps = {
            usesFrameMessenger: !0
        }, t
    })(n.default.Component);
    t.PreviewHTML = A;
    var M = (C = {}, C[S.KeyCode.ESC] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.ENTER] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.SPACE] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.PAGE_UP] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.PAGE_DOWN] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.LEFT] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.UP] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.RIGHT] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.DOWN] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.EQUALS] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[70] = {
        altKey: !1,
        ctrlKey: !0,
        metaKey: !0
    }, C[80] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.PLUS_EQUALS_FF] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.MINUS_FF] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.PLUS_EQUALS_FF_GERMAN] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.MINUS_FF_MAC] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.PLUS_CHROME] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C[S.KeyCode.MINUS_CHROME] = {
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0
    }, C)
}), define("modules/clean/react/previews/preview_image", ["require", "exports", "tslib", "external/classnames", "react", "external/react-redux", "modules/clean/analytics", "modules/clean/image_preview_util", "modules/clean/photos/thumbnail_url_util", "modules/clean/previews/actions", "modules/clean/react/comments2/components/annotations/loadable", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer/data/selectors", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer/full_screen_helpers", "modules/clean/react/file_viewer/utils", "modules/clean/react/previews/constants", "file-viewer/core", "modules/clean/react/previews/image_helpers", "modules/clean/react/previews/preview_toolbar", "modules/clean/react/size_class/constants", "modules/clean/web_timing_logger", "modules/clean/react/css", "spectrum/dimensions", "file-viewer/preview_image", "file-viewer/strings", "modules/clean/file_store/utils", "modules/clean/react/previews/toolbar_flip_buttons", "file-viewer/components", "file-viewer/toolbar", "modules/clean/react/keyboard_binding/keyboard_binding_connector", "modules/clean/react/keyboard_binding/keyboard_binding", "file-viewer/assets-metaserver", "modules/clean/react/previews/print_helpers", "modules/clean/react/previews/preview_toolbar_button", "modules/clean/react/keyboard_binding/keyboard_binding", "modules/clean/keycode", "modules/clean/react/file_viewer/logging", "modules/clean/react/watermarking/watermarking_layer", "file-viewer/polyfills"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _, v, h, g, w, y, b, E, S, P, T, C, k, I, x, A, M, F, O, R, L, D, N, U, V) {
    "use strict";

    function W() {}
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i), s = r.__importDefault(s), c = r.__importStar(c), w = r.__importStar(w), E = r.__importStar(E);
    var B = g.createMetaserverFormatters("en", C.strings, g.createI18nCache()),
        j = g.resolveAsset.bind(null, O.assets),
        z = (function(t) {
            function o() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.imgLoaded = !1, e.state = {}, e.logTTI = function() {
                    e.props.filePreviewSession && e.props.filePreviewSession.markPrimaryEvent(), E.mark_time_to_view(), E.mark_time_to_interactive()
                }, e.logRenderSuccess = function() {
                    e.imgLoaded || (e.imgLoaded = !0, e.logFilePreviewEvent(d.EventType.FilePreviewDownloadSucceeded), e.logFilePreviewEvent(d.EventType.FilePreviewRenderSucceeded), e.props.setRenderStatusSuccess(), null != e.props.onLoad && e.props.onLoad())
                }, e.onImageDoubleClick = function() {
                    e.shouldDisableZoom() && e.props.sizeClass !== b.SizeClass.Small && e.openFullscreen()
                }, e.openFullscreen = function() {
                    null != e.props.isFullscreen && _.enterFullScreen()
                }, e.logRenderFailure = function() {
                    var t = function(t) {
                        var r = {};
                        void 0 !== t && (r.rivieraStatusCode = t.toString()), e.logFilePreviewEvent(d.EventType.FilePreviewDownloadFailed, r), e.props.onError && e.props.onError(h.ErrorType.LoadError, t)
                    };
                    e.rivieraStatusCodeRequest = v.fetchRivieraStatusCode(e.props["preview-url"], t, t)
                }, e.onZoomIn = function() {
                    e.zoomWithMultiplier(1.25)
                }, e.onZoomOut = function() {
                    e.zoomWithMultiplier(.8)
                }, e.onZoomOriginalOrFit = function() {
                    var t = e.state,
                        r = t.scaleFactor,
                        n = t.fitScaleFactor;
                    e.setState({
                        scaleFactor: r === n ? 1 : n
                    })
                }, e.onPrint = function(t) {
                    c.imagePrint(l.fullSizeUrl(e.props["preview-url"])), p.logUserAction(d.UserAction.Print, t)
                }, e.handleFitScaleFactorChange = function(t) {
                    isNaN(t) || e.state.fitScaleFactor === t || e.setState({
                        fitScaleFactor: t
                    })
                }, e.keyboardBindings = F.getEqualsKeyBindings(U.wrapKeyboardActionWithLogging(e.onZoomIn, d.UserAction.ZoomIn)).concat(F.getMinusKeyBindings(U.wrapKeyboardActionWithLogging(e.onZoomOut, d.UserAction.ZoomOut)), [D.hydrateKeyboardBinding({
                    keyboardEventCriteria: {
                        which: N.KeyCode.P
                    },
                    callback: function() {
                        return e.onPrint(d.UserActionContext.Keyboard)
                    }
                })]), e.handleClickPrevious = U.wrapToolbarActionWithLogging(function() {
                    var t = e.props.onPrevious;
                    return t && t()
                }, d.UserAction.FlipPrevious), e.handleClickNext = U.wrapToolbarActionWithLogging(function() {
                    var t = e.props.onNext;
                    return t && t()
                }, d.UserAction.FlipNext), e.renderLayers = function(t) {
                    return function(n) {
                        var o = i.default.createElement(T.ImageLayer, r.__assign({}, t, n)),
                            a = e.state.scaleFactor || e.state.fitScaleFactor || 1,
                            s = n.originalWidth,
                            l = n.originalHeight,
                            c = s && l ? {
                                width: s * a,
                                height: l * a
                            } : void 0,
                            d = s && l ? {
                                width: s,
                                height: l
                            } : void 0,
                            p = n.data.thumbnailUrl,
                            m = c && d && e.props.isWatermarkingMode ? i.default.createElement(V.WatermarkingLayer, {
                                layerSize: c,
                                pageDimensions: d,
                                thumbUrl: p
                            }) : null;
                        return c && e.props.annotationAllowed ? [i.default.createElement(u.AnnotationConductorLayer, {
                            layerSize: c
                        }, i.default.createElement(u.AnnotationInstructionalTooltipPane, {
                            layerSize: c
                        }, o, m, i.default.createElement(u.AnnotationViewLayer, null)))] : [o, m]
                    }
                }, e
            }
            return r.__extends(o, t), o.prototype.componentWillUnmount = function() {
                this.rivieraStatusCodeRequest && this.rivieraStatusCodeRequest.readyState !== XMLHttpRequest.DONE && this.rivieraStatusCodeRequest.abort(), this.props.overflowZoomOff()
            }, o.prototype.componentWillMount = function() {
                this.logFilePreviewEvent(d.EventType.FilePreviewSupportConfirmed), this.logFilePreviewEvent(d.EventType.FilePreviewDownloadAttempted)
            }, o.prototype.componentDidMount = function() {
                this.logOpen();
                var t = this.props,
                    n = t.nsId,
                    i = t.sjId,
                    o = n + "_" + i;
                null != n && null != i && window._timingData && window._timingData.img && window._timingData.img.dl_error_finish && window._timingData.img.dl_error_finish[o] && this.logRenderFailure(), new Promise(function(t, r) {
                    e(["modules/clean/react/previews/preview_image_zoom"], t, r)
                }).then(r.__importStar)
            }, o.prototype.componentWillReceiveProps = function(e) {
                if (e["preview-url"] !== this.props["preview-url"]) {
                    var t = e.filePreviewSession;
                    this.logFilePreviewEvent(d.EventType.FilePreviewSupportConfirmed, void 0, t), this.logFilePreviewEvent(d.EventType.FilePreviewDownloadAttempted, void 0, t), this.logOpen(), this.setState({
                        scaleFactor: void 0,
                        fitScaleFactor: void 0
                    }), this.imgLoaded = !1
                }
            }, o.prototype.componentDidUpdate = function(e, t) {
                t.scaleFactor !== this.state.scaleFactor && (null != this.state.scaleFactor && null != this.state.fitScaleFactor && this.state.scaleFactor > this.state.fitScaleFactor ? this.props.overflowZoomOn() : this.props.overflowZoomOff())
            }, o.prototype.logFilePreviewEvent = function(e, t, r) {
                void 0 === t && (t = {}), void 0 === r && (r = this.props.filePreviewSession), null != r && r.recordEvent(e, t)
            }, o.prototype.logOpen = function() {
                a.PreviewActivityLogger.log("open", {
                    file_ext: this.props["file-extension"]
                })
            }, o.prototype.shouldDisableZoom = function() {
                var e = this.props,
                    t = e.sizeClass;
                return e.shouldDisplayToolbar || t === b.SizeClass.Small
            }, o.prototype.zoomWithMultiplier = function(e) {
                var t = this.state.fitScaleFactor,
                    r = this.state.scaleFactor || t;
                if (1 !== e && r) {
                    var n = .05 * Math.round(r * e / .05);
                    Math.abs(n - r) < .05 && (n += e > 1 ? .05 : -.05), this.setState({
                        scaleFactor: Math.min(Math.max(n, t || 0), 16)
                    })
                }
            }, o.prototype.render = function() {
                var e = this,
                    t = this.props,
                    r = t.count,
                    o = t.currentMode,
                    a = t.index,
                    c = t.onNext,
                    u = t.onPrevious,
                    m = t.shouldDisplayToolbar,
                    f = t.isEditMode,
                    v = t.isFlippingEnabled,
                    h = t.isFullscreen,
                    b = t.sharePermission,
                    E = t.contextMenuDisabled,
                    S = t.windowWidth,
                    P = t.windowHeight,
                    C = t.nsId,
                    F = void 0 === C ? 0 : C,
                    O = t.sjId,
                    D = void 0 === O ? 0 : O,
                    U = t["preview-url"],
                    V = this.state,
                    z = V.scaleFactor,
                    q = V.fitScaleFactor,
                    K = z || q;
                return i.default.createElement("div", {
                    className: n.default("flex-preview-container", "image-visible", "annotations-visible", s.default.PREVIEW_IMAGE_CONTAINER, {
                        "zoom-disabled": this.shouldDisableZoom(),
                        "has-toolbar": m
                    })
                }, i.default.createElement(T.PreviewImage, {
                    previewMetadata: {
                        content: {
                            ".tag": "image",
                            default_src: w.getFallbackSrc(U),
                            src_set: w.getSrcSet(U),
                            full_size_src: l.fullSizeUrl(U),
                            thumbnail_url_tmpl: U
                        }
                    },
                    fileMetadata: {
                        file_id: k.getFileRevisionId({
                            ns_id: F,
                            sjid: D
                        }),
                        file_name: ""
                    },
                    fileInfo: {
                        ns_id: F,
                        sj_id: D,
                        file_id: k.getFileRevisionId({
                            ns_id: F,
                            sjid: D
                        }),
                        bootstrapped: !0
                    },
                    currentMode: o,
                    data: void 0,
                    filePreviewUiData: {
                        zoomScaleFactor: z,
                        currentPageIndex: 0,
                        fitScaleFactor: q || 0,
                        isSidebarOpen: !1
                    },
                    coreFileViewerUiData: {
                        isDocSidebarOpen: !1
                    },
                    fileViewerId: "",
                    intl: B,
                    dispatch: W,
                    config: g.DEFAULT_CONFIG,
                    contextMenuDisabled: !!E,
                    onDoubleClick: this.onImageDoubleClick,
                    onInteractive: this.logTTI,
                    onRenderSucceeded: this.logRenderSuccess,
                    onRenderFailed: this.logRenderFailure,
                    sizerClassName: s.default.PREVIEW_IMAGE,
                    className: n.default(s.default.PREVIEW_IMAGE_WRAPPER, "preview-content"),
                    width: +S,
                    height: +P,
                    layerRenderFn: this.renderLayers,
                    onFitScaleFactorChanged: this.handleFitScaleFactorChange,
                    resolveAsset: j
                }), i.default.createElement(M.KeyboardBindingConnector, {
                    keyboardBindings: this.keyboardBindings
                }), !f && m && i.default.createElement(y.PreviewToolbar, {
                    isFullscreen: !!h
                }, v ? i.default.createElement(I.ToolbarFlipButtons, {
                    index: a,
                    count: r,
                    onClickPrevious: u && this.handleClickPrevious,
                    onClickNext: c && this.handleClickNext
                }) : null, i.default.createElement(x.RapidFire, {
                    callback: this.onZoomOut,
                    onFirstFire: function() {
                        return p.logUserAction(d.UserAction.ZoomOut, d.UserActionContext.Toolbar)
                    },
                    render: function(e, t) {
                        return i.default.createElement(A.ZoomOutButton, {
                            className: "toolbar-button-entry",
                            disabled: null != K && null != q && K <= q,
                            formatMessage: B.formatMessage,
                            onMouseDown: e,
                            onMouseUp: t,
                            onMouseLeave: t,
                            onKeyDown: function(t) {
                                t.keyCode === N.KeyCode.ENTER && e()
                            },
                            onKeyUp: t
                        })
                    }
                }), i.default.createElement(A.ZoomToFitButton, {
                    className: "zoom-label toolbar-button-entry",
                    formatMessage: B.formatMessage,
                    formatNumber: B.formatNumber,
                    onClick: this.onZoomOriginalOrFit,
                    zoomPercent: K
                }), i.default.createElement(x.RapidFire, {
                    callback: this.onZoomIn,
                    onFirstFire: function() {
                        return p.logUserAction(d.UserAction.ZoomIn, d.UserActionContext.Toolbar)
                    },
                    render: function(e, t) {
                        return i.default.createElement(A.ZoomInButton, {
                            className: "toolbar-button-entry",
                            disabled: null != K && K >= 16,
                            formatMessage: B.formatMessage,
                            onMouseDown: e,
                            onMouseUp: t,
                            onMouseLeave: t,
                            onKeyDown: function(t) {
                                t.keyCode === N.KeyCode.ENTER && e()
                            },
                            onKeyUp: t
                        })
                    }
                }), i.default.createElement(A.FullScreenButton, {
                    className: "toolbar-button-entry",
                    formatMessage: B.formatMessage,
                    onClick: function() {
                        return _.toggleFullScreen(!!h, d.UserActionContext.Toolbar)
                    }
                }), i.default.createElement(L.PreviewToolbarButton, {
                    "data-test": "print",
                    disabled: !R.canPrint(b),
                    spriteGroup: "web",
                    spriteName: "print",
                    tooltip: R.getPrintTooltip(b),
                    onClick: R.canPrint(b) ? function() {
                        return e.onPrint(d.UserActionContext.Toolbar)
                    } : W
                })))
            }, o
        })(i.default.Component);
    t._PreviewImage = z;
    var q = function(e) {
            return i.default.createElement(P.Dimensions, {
                className: "flex-preview-container"
            }, function(t) {
                var n = t.width,
                    o = t.height;
                return i.default.createElement(z, r.__assign({}, e, {
                    windowHeight: o,
                    windowWidth: n
                }))
            })
        },
        K = S.requireCssWithComponent(q, ["/static/css/preview_image-vflNPGLZQ.css"]),
        H = o.connect(function(e) {
            return {
                isFlippingEnabled: m.getIsFlippingEnabled(e),
                annotationAllowed: m.getAnnotationAllowed(e),
                isEditMode: m.getIsEditMode(e),
                isWatermarkingMode: m.getIsWatermarkingMode(e)
            }
        }, {
            overflowZoomOn: f.overflowZoomOn,
            overflowZoomOff: f.overflowZoomOff
        })(K);
    t.PreviewImage = H
}), define("modules/clean/react/previews/preview_linkfile", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/ajax", "modules/clean/em_string", "modules/clean/filepath", "modules/clean/react/css_timing", "modules/clean/react/file_viewer/constants", "modules/clean/referrer_cleansing_redirect", "modules/clean/web_timing_logger", "modules/clean/static_urls", "modules/core/i18n"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i), o = r.__importStar(o), u = r.__importStar(u), d = r.__importStar(d);
    var f = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                description: null,
                hadError: !1,
                link: null,
                isMounted: !1
            }, t.requestLinkfileData = function(e) {
                t.logFilePreviewEvent(c.EventType.FilePreviewDownloadAttempted);
                var r = {
                    url: e,
                    dataType: "json",
                    success: t.handleLinkDataSuccess,
                    error: t.handleLinkDataError,
                    xhrFields: {
                        withCredentials: !1
                    }
                };
                t.props.data.authenticated ? (r.xhrFields = {
                    withCredentials: !0
                }, o.SilentBackgroundRequest(r)) : o.Request(r)
            }, t.handleLinkDataSuccess = function(e) {
                if (null == e.uri) return void t.handleLinkDataError();
                t.logFilePreviewEvent(c.EventType.FilePreviewDownloadSucceeded), t.markWebTiming(), t.setState({
                    description: e.uri,
                    hadError: !1,
                    link: e.uri
                }), t.logFilePreviewEvent(c.EventType.FilePreviewRenderSucceeded), t.props.setRenderStatusSuccess()
            }, t.handleLinkDataError = function() {
                t.logFilePreviewEvent(c.EventType.FilePreviewDownloadFailed), t.markWebTiming(), t.state.isMounted && t.setState({
                    description: m._("Can’t show link. Something’s wrong with this file."),
                    hadError: !0,
                    link: null
                })
            }, t.handleClickOpenLinkButton = function(e) {
                if (null != t.state.link) {
                    var r = u.get_redirect_uri(t.state.link);
                    window.open(r.toString(), "_blank")
                }
            }, t
        }
        return r.__extends(t, e), t.prototype.logFilePreviewEvent = function(e) {
            this.props.filePreviewSession && this.props.filePreviewSession.recordEvent(e)
        }, t.prototype.markWebTiming = function() {
            d.mark_time_to_view(), d.mark_time_to_interactive()
        }, t.prototype.isFileDataFetched = function() {
            return null == this.state.description
        }, t.prototype.componentDidMount = function() {
            this.logFilePreviewEvent(c.EventType.FilePreviewSupportConfirmed), this.state.isMounted = !0, this.requestLinkfileData(this.props.data.url)
        }, t.prototype.componentWillUnmount = function() {
            this.state.isMounted = !1
        }, t.prototype.render = function() {
            var e = {
                    "preview-linkfile-content": !0,
                    "loading-content": this.isFileDataFetched()
                },
                r = {
                    "preview-linkfile-button-openlink": !0,
                    "button-primary": !0,
                    "has-link": null != this.state.link
                },
                o = "-",
                l = "";
            null != this.props.filename && (o = s.filename_without_extension(this.props.filename), l = s.file_extension(this.props.filename), "" !== l && (l = "." + l));
            var c = t.MAX_DISPLAYED_FILENAME_CHARS - l.length,
                u = a.Emstring.em_snippet(o, c),
                d = "-";
            null != this.state.description && (d = this.state.description);
            var f = {
                    "preview-linkfile-description": !0,
                    "force-show-all-text": this.state.hadError
                },
                _ = p.static_url("/static/images/icons128/page_white_linkfile-vfloEntlU.png");
            return i.default.createElement("div", {
                className: "flex-preview-container"
            }, i.default.createElement("div", {
                className: "preview-content preview-content--center"
            }, i.default.createElement("div", {
                className: "preview-linkfile-box"
            }, i.default.createElement("div", {
                className: n.default(e)
            }, i.default.createElement("div", {
                className: "preview-linkfile-icon"
            }, i.default.createElement("img", {
                src: _,
                alt: ""
            })), i.default.createElement("div", {
                className: "preview-linkfile-title"
            }, i.default.createElement("span", {
                className: "preview-linkfile-filebase"
            }, u), i.default.createElement("span", {
                className: "preview-linkfile-fileext"
            }, l)), i.default.createElement("div", {
                className: "preview-linkfile-info"
            }, i.default.createElement("div", {
                className: n.default(f)
            }, d), i.default.createElement("button", {
                className: n.default(r),
                onMouseUp: this.handleClickOpenLinkButton,
                ref: "openLinkButton"
            }, m._("Open in new tab")))))))
        }, t.SPINNER_FADE_DELAY_MSEC = 150, t.MAX_DISPLAYED_FILENAME_CHARS = 21, t
    })(i.default.Component);
    t._PreviewLinkfile = f;
    var _ = l.requireCssWithComponent(f, ["/static/css/preview_linkfile-vflZ8gkGs.css"]);
    t.PreviewLinkfile = _
}), define("modules/clean/react/previews/preview_pdf_loadable", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable", "modules/clean/react/css_timing", "modules/clean/react/previews/loading_indicator"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var s = i.Loadable({
            loader: function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/previews/preview_pdf"], t, r)
                }).then(r.__importStar).then(function(e) {
                    return e.PreviewPDF
                })
            },
            loading: function(e) {
                return e.previewThumbnailUrl ? n.default.createElement("div", {
                    className: "preview-pdf-ssr"
                }, n.default.createElement("div", {
                    className: "preview-ssr-viewer"
                }, n.default.createElement(a.LoadingIndicator, {
                    className: "loading-indicator"
                }))) : null
            }
        }),
        l = o.requireCssWithComponent(s, ["/static/css/preview_pdf-vflznhdb9.css", "/static/css/snackbar-vflDXRizz.css"]);
    t.PreviewPDFLoadable = l
}), define("modules/clean/react/previews/preview_ppt_loadable", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable", "modules/clean/react/css_timing", "modules/clean/react/previews/loading_indicator"], function(e, t, r, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var s = i.Loadable({
            loader: function() {
                return new Promise(function(t, r) {
                    e(["modules/clean/react/previews/preview_ppt"], t, r)
                }).then(r.__importStar).then(function(e) {
                    return e.PreviewPPT
                })
            },
            loading: function(e) {
                return e.previewThumbnailUrl ? n.default.createElement("div", {
                    className: "preview-pdf-ssr"
                }, n.default.createElement("div", {
                    className: "preview-ssr-viewer"
                }, n.default.createElement(a.LoadingIndicator, {
                    className: "loading-indicator"
                }))) : null
            }
        }),
        l = o.requireCssWithComponent(s, ["/static/css/preview_pdf-vflznhdb9.css", "/static/css/snackbar-vflDXRizz.css"]);
    t.PreviewPPTLoadable = l
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/previews/preview_toolbar", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PreviewToolbar = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/previews/preview_toolbar_component"], t, r)
            }).then(__importStar).then(function(e) {
                return e.PreviewToolbar
            })
        }
    })
}), define("modules/clean/react/previews/preview_toolbar_frame_messenger", ["require", "exports", "tslib", "react", "modules/clean/react/previews/frame_messenger_host", "modules/clean/previews/util"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), o = r.__importStar(o);
    var a = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.setupFrameMessenger = function() {
                t.frameMessenger = new i.PreviewFrameMessengerHost, t.frameMessenger.configureChildMessaging(o.getIframeQuery(), t.handleMessageFromChild, ["idle-mouse", "active-mouse"]), t.frameMessenger.startListening(), t.frameMessenger.postMessageToChildren("preview-toolbar-mounted")
            }, t.handleMessageFromChild = function(e) {
                switch (e.action) {
                    case "idle-mouse":
                        t.props.idleMouse();
                        break;
                    case "active-mouse":
                        t.props.activeMouse()
                }
            }, t.teardownFrameMessenger = function() {
                t.frameMessenger.resetOriginsForPosting(), t.frameMessenger.stopListening()
            }, t
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            this.setupFrameMessenger()
        }, t.prototype.componentWillUnmount = function() {
            this.teardownFrameMessenger()
        }, t.prototype.render = function() {
            return null
        }, t
    })(n.default.Component);
    t.PreviewToolbarFrameMessenger = a
}), define("modules/clean/react/previews/preview_zoom_container", ["require", "exports", "tslib", "external/keymaster", "external/classnames", "react", "external/lodash", "jquery", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/flippable_controls", "modules/clean/react/sprite", "modules/clean/react/title_bubble", "modules/core/i18n"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importDefault(i), o = r.__importDefault(o), a = r.__importStar(a), s = r.__importDefault(s);
    var f = "",
        _ = "previewzoomcontainer",
        v = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    controlsHidden: !1
                }, t.flipNext = function(e) {
                    void 0 === e && (e = c.UserActionContext.LightboxToolbar), t.props.onFlipNext && t.props.onFlipNext(), l.logUserAction(c.UserAction.FlipNext, e)
                }, t.flipPrevious = function(e) {
                    void 0 === e && (e = c.UserActionContext.LightboxToolbar), t.props.onFlipPrevious && t.props.onFlipPrevious(), l.logUserAction(c.UserAction.FlipPrevious, e)
                }, t.onClick = function(e) {
                    e.target === e.currentTarget && (e.preventDefault(), t.onCloseFactory({}, c.UserActionContext.LightboxFrame))
                }, t.onMouseMove = function(e) {
                    0 === s.default(e.target).parents(".preview-toolbar-overlay").length ? t.startControlsTimer() : clearTimeout(t.controlsHideTimer)
                }, t.onCloseFactory = function(e, r) {
                    void 0 === e && (e = {}), void 0 === r && (r = c.UserActionContext.LightboxCloseButton), l.logUserAction(c.UserAction.ToggleFullscreenOff, r), t.props.onClose()
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                var e = this;
                this.flipNext = a.throttle(this.flipNext, 100), this.flipPrevious = a.throttle(this.flipPrevious, 100), n.default("esc", _, function() {
                    e.onCloseFactory({}, c.UserActionContext.Keyboard)
                }), null != this.props.onZoomOut && n.default("space", _, this.props.onZoomOut), f = n.default.getScope(), n.default.setScope(_), this.startControlsTimer()
            }, t.prototype.componentWillUpdate = function() {
                n.default.setScope(_)
            }, t.prototype.componentWillUnmount = function() {
                n.default.clearScope(_), n.default.setScope(f), clearTimeout(this.controlsHideTimer)
            }, t.prototype.startControlsTimer = function() {
                var e = this;
                this.showControls(), clearTimeout(this.controlsHideTimer), this.controlsHideTimer = setTimeout(function() {
                    e.hideControls()
                }, 3e3)
            }, t.prototype.showControls = function() {
                this.setState({
                    controlsHidden: !1
                })
            }, t.prototype.hideControls = function() {
                this.setState({
                    controlsHidden: !0
                })
            }, t.prototype.renderFlippableControls = function() {
                return this.props.fileCount ? o.default.createElement(u.FlippableControls, {
                    index: "" + (this.props.fileIndex + 1),
                    numFlippableFiles: this.props.fileCount,
                    onNext: this.flipNext,
                    onPrevious: this.flipPrevious
                }) : null
            }, t.prototype.renderControls = function() {
                var e = this.props,
                    t = e.renderZoomControls,
                    r = e.scaleFactor,
                    n = i.default("preview-toolbar-container", {
                        hidden: this.state.controlsHidden
                    });
                return o.default.createElement("div", {
                    className: n,
                    ref: "previewZoomerToolbarContainer"
                }, o.default.createElement("div", {
                    className: "preview-toolbar-overlay-container"
                }, o.default.createElement("div", {
                    className: "preview-toolbar-overlay"
                }, o.default.createElement("div", {
                    className: "preview-toolbar-content"
                }, this.renderFlippableControls(), t ? o.default.createElement("div", {
                    className: i.default("toolbar-button-entry", "zoom-out", {
                        disabled: this.props.zoomOutDisabled
                    }),
                    onClick: this.props.onZoomOut
                }, o.default.createElement(d.Sprite, {
                    alt: m._("Zoom out"),
                    group: "web",
                    name: "zoomout"
                })) : null, t ? o.default.createElement("div", {
                    className: "toolbar-button-entry",
                    ref: "zoomLabelContainer",
                    onClick: this.props.onViewActualSize
                }, o.default.createElement(p.TitleBubble, {
                    content: m._("View actual size"),
                    position: p.TitleBubble.POSITIONS.TOP,
                    isTargetPositionFixed: !0,
                    distanceFromTarget: 16
                }, o.default.createElement("span", null, Math.floor(100 * (r || 0)), "%"))) : null, t ? o.default.createElement("div", {
                    className: i.default("toolbar-button-entry", "zoom-in", {
                        disabled: this.props.zoomInDisabled
                    }),
                    onClick: this.props.onZoomIn
                }, o.default.createElement(d.Sprite, {
                    alt: m._("Zoom in"),
                    group: "web",
                    name: "zoom"
                })) : null))))
            }, t.prototype.renderClose = function() {
                var e = i.default("preview-zoomer-close", {
                    hidden: this.state.controlsHidden
                });
                return o.default.createElement("span", null, o.default.createElement("button", {
                    "aria-label": m._("Close"),
                    className: e,
                    onClick: this.onCloseFactory,
                    ref: "previewZoomerClose"
                }, o.default.createElement(d.Sprite, {
                    alt: m._("Close"),
                    group: "web",
                    name: "xclose"
                })))
            }, t.prototype.render = function() {
                var e = i.default("preview-zoomer-container", {
                    "zoomer-drag-disabled": this.props.dragDisabled
                });
                return o.default.createElement("div", {
                    className: e,
                    onClick: this.onClick,
                    onMouseMove: this.onMouseMove,
                    ref: "previewZoomerContainer"
                }, this.props.children, this.renderClose(), this.renderControls())
            }, t.defaultProps = {
                dragDisabled: !0,
                zoomInDisabled: !0,
                zoomOutDisabled: !0
            }, t
        })(o.default.Component);
    t.PreviewZoomContainer = v
}), define("modules/clean/react/previews/print_helpers", ["require", "exports", "modules/core/i18n"], function(e, t, r) {
    "use strict";

    function n(e) {
        return !(e && e.canPrintRoles && 0 === e.canPrintRoles.length)
    }

    function i(e) {
        return n(e) ? r._("Print") : r._("Printing is turned off for this file.")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.canPrint = n, t.getPrintTooltip = i
}), define("modules/clean/react/previews/toolbar_flip_buttons", ["require", "exports", "tslib", "react", "external/lodash", "external/classnames", "file-viewer/core", "file-viewer/strings", "file-viewer/toolbar", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer/constants"], function(e, t, r, n, i, o, a, s, l, c, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i), o = r.__importDefault(o);
    var d = a.createMetaserverFormatters("en", s.strings, a.createI18nCache());
    t.ToolbarFlipButtons = function(e) {
        var t = e.className,
            r = e.count,
            a = e.index,
            s = e.onClickNext,
            p = void 0 === s ? i.noop : s,
            m = e.onClickPrevious,
            f = void 0 === m ? i.noop : m;
        return null == r || null == a || r < 1 ? null : n.default.createElement(l.ToolbarFlipButtons, {
            buttonClassName: "toolbar-button-entry",
            className: o.default("flip-buttons", "image-toolbar__item", t),
            count: r,
            formatMessage: d.formatMessage,
            index: a,
            onClickPrevious: c.wrapToolbarActionWithLogging(f, u.UserAction.FlipPrevious),
            onClickNext: c.wrapToolbarActionWithLogging(p, u.UserAction.FlipNext)
        })
    }
}), define("modules/clean/react/previews/video/audio_waveform/utils", ["require", "exports", "modules/clean/average_counter"], function(e, t, r) {
    "use strict";

    function n(e, t, n, i, o) {
        function a(e) {
            return function() {
                if (e >= t) return void o(l);
                var c = [],
                    u = Math.ceil(e * s.length / t),
                    d = Math.ceil((e + 1) * s.length / t),
                    p = d - u;
                if (p > n)
                    for (var m = 0; m < n; m++) {
                        var f = Math.floor(Math.random() * p) + u;
                        c.push(Math.abs(s[f]))
                    } else
                        for (var m = u; m < d; m++) {
                            var _ = Math.floor(Math.abs(s[m]));
                            c.push(_)
                        }
                var v = new r.AverageCounter;
                v.addArray(c), l[e] = v.getAverage(), i() && setTimeout(a(e + 1), 0)
            }
        }
        var s = e.getChannelData(0),
            l = new Array(t);
        setTimeout(a(0), 0)
    }

    function i(e, t, n) {
        void 0 === n && (n = 1);
        var i = [];
        if (0 === e.length || t <= 0 || isNaN(t)) return i;
        for (var o = [], a = 0; a < t; a++) o.push(new r.AverageCounter);
        for (var s = 0, l = 0, a = 0; a < e.length; a++) {
            var c = e[a],
                u = Math.floor(a * t / e.length),
                d = o[u];
            d.add(c), i[u] = d.getAverage(), u !== l && (s = Math.max(s, i[l]), l = u)
        }
        return s = Math.max(s, i[t - 1]), i.map(function(e) {
            return e * n / s
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.buildFromBuffer = n, t.returnWaveform = i
}), define("modules/clean/react/previews/video/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.PlayerRendered = "player_rendered", e.FirstClickPlay = "first_click_play", e.MediaError = "media_error", e.ChangePlaybackRate = "change_playback_rate", e.ChangeVideoQuality = "change_video_quality", e.ClosePreview = "close_preview", e.SeekVideo = "seek_video", e.VideoStartsPlaying = "video_starts_playing", e.VideoResumesPlaying = "video_resumes_playing", e.VideoStalled = "video_stalled", e.VideoPaused = "video_paused", e.ScrubberThumbnailsLoaded = "scrubber_thumbnails_loaded", e.ScrubberThumbnailsFailed = "scrubber_thumbnails_failed", e.AudioWaveformLoaded = "audio_waveform_loaded", e.AudioWaveformFailed = "audio_waveform_failed"
    })(t.VideoPreviewEvent || (t.VideoPreviewEvent = {})), t.HdLabels = ["1080p", "720p"], t.QualityLabelOrder = t.HdLabels.concat(["480p", "360p", "240p", "256k", "192k", "128k"]).reverse()
}), define("modules/clean/react/previews/video/preview_video", ["require", "exports", "tslib", "react", "modules/clean/react/previews/video/preview_video_basic", "modules/clean/react/previews/video/preview_video_comments2", "modules/clean/react/previews/constants"], function(e, t, r, n, i, o, a) {
    "use strict";

    function s(e) {
        var t = e.sourceContext,
            s = e.hidePageChrome;
        return t === a.PreviewSourceContext.EmbeddedSharedLinkFile || s ? n.default.createElement(i.PreviewVideoBasic, r.__assign({}, e)) : n.default.createElement(o.PreviewVideoComments2, r.__assign({}, e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.PreviewVideoProps = i.PreviewVideoProps, t.PreviewVideo = s
}), define("modules/clean/react/previews/video/preview_video_basic", ["require", "exports", "tslib", "external/classnames", "external/lodash", "react", "modules/clean/image_size", "modules/clean/keycode", "modules/clean/loggers/file_preview_logger", "modules/clean/loggers/video_preview_logger", "modules/clean/previews/util", "modules/clean/react/async/loadable", "modules/clean/react/css", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/file_preview_event_emitter", "modules/clean/react/helpers", "modules/clean/react/keyboard_binding/keyboard_binding", "modules/clean/react/keyboard_binding/keyboard_binding_connector", "modules/clean/react/previews/constants", "modules/clean/react/previews/video/constants", "modules/clean/web_timing_logger", "modules/core/browser_detection", "modules/core/uri", "modules/clean/react/previews/video/utils", "modules/clean/react/file_viewer/data/actions", "external/react-redux"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f, _, v, h, g, w, y, b, E, S, P, T) {
    "use strict";

    function C(e) {
        return E.URI.parse(e).updateQuery({
            size: a.imageBestFitSize(window.innerWidth, window.innerHeight),
            size_mode: "2"
        }).toString()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i), o = r.__importDefault(o), y = r.__importStar(y), t.AsyncVideoPlayer = d.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/previews/video/video_player"], t, r)
            }).then(r.__importStar).then(function(e) {
                return e.VideoPlayer
            })
        }
    });
    var k = (function(e) {
        function a() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.lastPlaybackRate = 1, t.startsPlayingEvent = w.VideoPreviewEvent.VideoStartsPlaying, t.onEmbed = function() {
                t.logFilePreviewTimelineEvent(m.EventType.FilePreviewSupportConfirmed), t.logFilePreviewTimelineEvent(m.EventType.FilePreviewDownloadAttempted)
            }, t.onLoadedMetadata = function(e) {
                void 0 === e && (e = 0), t.videoLogger.populateVideoDuration(e)
            }, t.onReady = function(e) {
                void 0 === e && (e = !1), t.logFilePreviewTimelineEvent(m.EventType.FilePreviewDownloadSucceeded), t.props.filePreviewSession && t.props.filePreviewSession.markPrimaryEvent(), y.mark_time_to_view(), y.mark_time_to_interactive(), t.markRenderSucceeded(), t.videoLogger.logEvent(w.VideoPreviewEvent.PlayerRendered)
            }, t.logPlay = i.once(function() {
                t.videoLogger.logEvent(w.VideoPreviewEvent.FirstClickPlay)
            }), t.onPlay = function() {
                var e = t.props.setMediaPlaying;
                t.logPlay(), e && e()
            }, t.onPause = function(e) {
                var r = t.props.setMediaPaused;
                r && r(), t.videoLogger.logEvent(w.VideoPreviewEvent.VideoPaused, {
                    video_timestamp: e.toString()
                })
            }, t.onStartsPlaying = function(e) {
                t.videoLogger.logEvent(t.startsPlayingEvent, {
                    play_latency: e.latency.toString(),
                    play_latency_since: e.trigger
                }), t.startsPlayingEvent = w.VideoPreviewEvent.VideoResumesPlaying
            }, t.onUserInactive = function(e) {
                e !== t.lastPlaybackRate && (t.lastPlaybackRate = e, t.logUserAction(m.UserAction.VideoPlaybackRateChanged, {
                    playback_rate: e.toString()
                }))
            }, t.onScrubberThumbnailsLoaded = function(e) {
                e ? t.videoLogger.logEvent(w.VideoPreviewEvent.ScrubberThumbnailsLoaded) : t.videoLogger.logEvent(w.VideoPreviewEvent.ScrubberThumbnailsFailed)
            }, t.onAudioWaveformLoaded = function() {
                t.videoLogger.logEvent(w.VideoPreviewEvent.AudioWaveformLoaded)
            }, t.onAudioWaveformFailed = function() {
                t.videoLogger.logEvent(w.VideoPreviewEvent.AudioWaveformFailed)
            }, t.onError = function(e) {
                if (e && (t.videoLogger.logEvent(w.VideoPreviewEvent.MediaError, {
                        errorCode: e.code ? e.code.toString() : "",
                        errorMessage: e.message || ""
                    }), "needflash" === e.message)) return t.logFilePreviewTimelineEvent(m.EventType.FilePreviewSupportDenied), void("function" == typeof t.props.onError && t.props.onError(g.ErrorType.NeedFlashError));
                t.logFilePreviewTimelineEvent(m.EventType.FilePreviewDownloadFailed), y.mark_time_to_view(), y.mark_time_to_interactive(), t.props.onError && t.props.onError(g.ErrorType.LoadError)
            }, t.onPlaybackRateChange = function(e, r) {
                t.videoLogger.logEvent(w.VideoPreviewEvent.ChangePlaybackRate, {
                    old_playback_rate: e.toString(),
                    new_playback_rate: r.toString()
                })
            }, t.onSeek = function(e, r) {
                t.videoLogger.logEvent(w.VideoPreviewEvent.SeekVideo, {
                    old_video_time: e.toString(),
                    new_video_time: r.toString()
                })
            }, t.onStalled = function(e, r) {
                t.videoLogger.logEvent(w.VideoPreviewEvent.VideoStalled, {
                    video_timestamp: e.toString(),
                    playback_rate: r.toString()
                })
            }, t.onTruncated = function() {
                f.filePreviewEventEmitter.emit(m.EventType.FilePreviewVideoTruncated), t.videoLogger.setVideoTruncated()
            }, t.onClose = function(e) {
                t.videoLogger.logEvent(w.VideoPreviewEvent.ClosePreview, {
                    video_time_on_close: e.toString()
                })
            }, t.onSelectQuality = function(e, r) {
                t.videoLogger.logEvent(w.VideoPreviewEvent.ChangeVideoQuality, {
                    old_video_quality: e,
                    new_video_quality: r
                })
            }, t.handleKeyPress = function(e) {
                return e.keyCode === s.KeyCode.SPACE && (t.togglePlayback(), e.preventDefault(), !0)
            }, t.keyboardBindings = [{
                keyboardEventCriteria: v.generateUnmodifiedKeyboardEventCriteria(s.KeyCode.SPACE),
                callback: t.handleKeyPress
            }], t.processGutterClick = function(e) {
                var r = t.props.onGutterClick;
                r && e.target === e.currentTarget && r()
            }, t
        }
        return r.__extends(a, e), a.prototype.setUpLoggers = function() {
            this.teardownLoggers(), this.userActionLogger = new l.FilePreviewUserActionLogger, this.userActionLogger.listenTo(f.filePreviewEventEmitter), this.videoLogger = new c.VideoPreviewLogger(this.props.fileExtension, this.props.filePreviewSession)
        }, a.prototype.teardownLoggers = function() {
            this.userActionLogger && (this.userActionLogger.unlistenTo(f.filePreviewEventEmitter), delete this.userActionLogger)
        }, a.prototype.logFilePreviewTimelineEvent = function(e) {
            this.props.filePreviewSession && this.props.filePreviewSession.recordEvent(e)
        }, a.prototype.logUserAction = function(e, t) {
            f.filePreviewEventEmitter.emit(m.EventType.FilePreviewUserAction, this.props.filePreviewSession, e, m.UserActionContext.VideoPlayer, t)
        }, a.prototype.markRenderSucceeded = function() {
            this.logFilePreviewTimelineEvent(m.EventType.FilePreviewRenderSucceeded), this.props.setRenderStatusSuccess()
        }, a.prototype.getPlaybackRates = function() {
            return [.5, 1, 1.25, 1.5, 2, 4]
        }, a.prototype.componentDidMount = function() {
            this.setUpLoggers()
        }, a.prototype.componentWillUnmount = function() {
            this.teardownLoggers()
        }, a.prototype.shouldComponentUpdate = function(e) {
            return _.compareStateAndProps(e, {})
        }, a.prototype.togglePlayback = function() {
            f.filePreviewEventEmitter.emit(m.EventType.FilePreviewVideoToggled)
        }, a.prototype.render = function() {
            var e = this.props,
                i = e.title,
                a = e.previewUrl,
                s = e.separateResolutionUrls,
                l = e.sourceContext,
                c = e.thumbnailUrlTmpl,
                d = e.videoMetadataUrl,
                p = e.videoContainer,
                m = e.vttThumbnailsUrl,
                f = e.waveformUrl,
                _ = S.video_type(p),
                v = l !== g.PreviewSourceContext.EmbeddedSharedLinkFile,
                w = !1,
                y = !1,
                E = 0;
            b.is_mobile_or_tablet() && (w = !0, y = !0, E = 1);
            var P = {
                preload: "auto",
                playbackRates: this.getPlaybackRates(),
                nativeControlsForTouch: y,
                playsinline: E
            };
            null != c && (P.poster = u.tagCriticalPathContentRequest(C(c), this.props.filePreviewSession));
            var T = {
                    src: a,
                    separateResolutionSrcs: s,
                    sourceContentType: _,
                    metadataLink: d,
                    title: i,
                    vttThumbnailsUrl: m,
                    waveformUrl: f
                },
                k = {
                    onLoadedMetadata: this.onLoadedMetadata,
                    onError: this.onError,
                    onReady: this.onReady,
                    onPlay: this.onPlay,
                    onPause: this.onPause,
                    onStartsPlaying: this.onStartsPlaying,
                    onUserInactive: this.onUserInactive,
                    onScrubberThumbnailsLoaded: this.onScrubberThumbnailsLoaded,
                    onAudioWaveformLoaded: this.onAudioWaveformLoaded,
                    onAudioWaveformFailed: this.onAudioWaveformFailed,
                    onPlaybackRateChange: this.onPlaybackRateChange,
                    onSeek: this.onSeek,
                    onStalled: this.onStalled,
                    onSelectQuality: this.onSelectQuality,
                    onTimeUpdate: this.props.onTimeUpdate
                },
                I = {
                    videoProps: T,
                    playerCallbacks: k,
                    playerOptions: P,
                    seekPosition: this.props.seekPosition,
                    shouldEnableControls: !this.props.hideControls,
                    noDownload: w,
                    shouldFocusOnReady: this.props.shouldFocusOnReady,
                    onEmbed: this.onEmbed,
                    onTruncated: this.onTruncated,
                    onClose: this.onClose,
                    shouldShowTruncationMessage: v,
                    isAudio: this.props.isAudio,
                    bytes: this.props.bytes,
                    showOnboarding: !!this.props.showOnboarding,
                    playerIntegrationEnabled: !!this.props.playerIntegrationEnabled
                };
            return o.default.createElement("div", {
                className: n.default({
                    "flex-preview-container": !0,
                    "touch-device": b.is_mobile_or_tablet()
                })
            }, this.props.disableKeyboardShortcuts ? null : o.default.createElement(h.KeyboardBindingConnector, {
                keyboardBindings: this.keyboardBindings
            }), o.default.createElement("div", {
                className: "preview-content preview-video",
                onClick: this.processGutterClick
            }, o.default.createElement("div", {
                className: "preview-video__wrapper"
            }, o.default.createElement("div", {
                className: n.default({
                    "preview-video__aspect-container": !0,
                    "preview-audio-transcoded": this.props.isAudio
                })
            }, o.default.createElement("div", {
                className: "preview-video__container"
            }, o.default.createElement(t.AsyncVideoPlayer, r.__assign({}, I)))))))
        }, a
    })(o.default.Component);
    t._PreviewVideoBasic = k;
    var I = T.connect(void 0, {
            setMediaPlaying: P.setMediaPlaying,
            setMediaPaused: P.setMediaPaused
        })(k),
        x = p.requireCssWithComponent(I, ["/static/css/preview_video-vflg5ZnOS.css", "/static/css/video-js-7-custom-v1-vfl22ty2K.css"]);
    t.PreviewVideoBasic = x
}), define("modules/clean/react/previews/video/preview_video_comments2", ["require", "exports", "tslib", "react", "external/react-redux", "modules/clean/react/comments2/data/actions", "modules/clean/react/comments2/data/store", "modules/clean/react/comments2/data/selectors", "modules/clean/react/comments2/video_annotations/annotation_helper", "modules/clean/react/comments2/video_annotations/constants", "modules/clean/react/comments2/video_annotations/video_preview_event_emitter", "modules/clean/react/previews/video/preview_video_basic"], function(e, t, r, n, i, o, a, s, l, c, u, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var p = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            this.seekToActivatedTimecode()
        }, t.prototype.componentDidUpdate = function(e) {
            e.activatedTimecodeThread !== this.props.activatedTimecodeThread && this.seekToActivatedTimecode()
        }, t.prototype.seekToActivatedTimecode = function() {
            var e = this.props.activatedTimecodeThread;
            if (e) {
                var t = l.VideoAnnotationHelper.unitConvertDomainObjectTimeToSeconds(e.annotation.time);
                u.videoPreviewEventEmitter.emit(c.EventTypes.SEEK_POSITION_AND_PAUSE, t)
            }
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.onTimeUpdate,
                i = e.playerIntegrationEnabled;
            return n.default.createElement(d.PreviewVideoBasic, r.__assign({}, this.props, {
                onTimeUpdate: i ? t : void 0
            }))
        }, t
    })(n.default.PureComponent);
    t.PreviewVideoBasicWithPlayerIntegration = p, t.ConnectedPreviewVideoComments2 = i.connect(function(e) {
        var t = s.getIsPlayerIntegrationEnabled(e);
        return {
            showOnboarding: s.getShowOnboardingOnVideo(e),
            playerIntegrationEnabled: t,
            activatedTimecodeThread: t ? s.getActivatedTimecodeThread(e) : void 0
        }
    }, {
        onTimeUpdate: o.Actions.updatePlayerCurrentTime,
        onGutterClick: o.Actions.deactivateAllThreads
    })(p);
    var m = (function(e) {
        function o(t) {
            var r = e.call(this, t) || this;
            return r.store = a.getStoreForComments2(), r
        }
        return r.__extends(o, e), o.prototype.render = function() {
            return n.default.createElement(i.Provider, {
                store: this.store
            }, n.default.createElement(t.ConnectedPreviewVideoComments2, r.__assign({}, this.props)))
        }, o
    })(n.default.PureComponent);
    t.PreviewVideoComments2 = m
}), define("modules/clean/react/previews/video/utils", ["require", "exports", "tslib", "modules/core/browser_detection"], function(e, t, r, n) {
    "use strict";

    function i() {
        return n.edge || n.safari
    }

    function o(e) {
        return "application/vnd.apple.mpegurl"
    }

    function a(e) {
        return e.tech({
            IWillNotUseThisInPlugins: !0
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.showQualityNativeHls = i;
    t.video_type = o, t.getTechFromPlayer = a
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/react/share_download/button", ["require", "exports", "modules/clean/react/async/loadable"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DownloadSimpleButton = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/share_download/button_component"], t, r)
            }).then(__importStar).then(function(e) {
                return e.DownloadSimpleButton
            })
        }
    }), t.ShareDownloadButton = r.Loadable({
        loader: function() {
            return new Promise(function(t, r) {
                e(["modules/clean/react/share_download/button_component"], t, r)
            }).then(__importStar).then(function(e) {
                return e.ShareDownloadButton
            })
        }
    })
}), define("modules/clean/react/watermarking/api", ["require", "exports", "modules/clean/api_v2/user_client", "modules/clean/react/watermarking/types", "modules/clean/react/watermarking/utils"], function(e, t, r, n, i) {
    "use strict";

    function o(e) {
        return "distanceX" in e
    }

    function a(e, t, a, s, l) {
        void 0 === l && (l = void 0);
        var c, u, d = new r.UserApiV2Client,
            p = n.getWatermarkingOptions(i.DEFAULT_WATERMARKING_STATE),
            m = a.opacity ? a.opacity : p.opacity,
            f = a.text;
        l && (o(l) ? c = {
            image: l.image,
            distance_x: l.distanceX,
            distance_y: l.distanceY,
            start_x: l.startX,
            start_y: l.startY,
            offset_x_per_row: l.offsetXPerRow,
            offset_y_per_col: l.offsetYPerCol
        } : u = {
            image: l.image,
            position: l.position,
            margin_x: l.marginX,
            margin_y: l.marginY
        });
        var _ = {
            path: t,
            text: f,
            opacity: m,
            overwrite: s,
            tiled_image: c,
            image_watermark: u
        };
        return d.ns("file_viewer").rpc("watermarking/watermark_file", _, {
            subjectUserId: e
        })
    }

    function s(e, t, n, i) {
        var a, s, l = new r.UserApiV2Client;
        i && (o(i) ? a = {
            image: i.image,
            distance_x: i.distanceX,
            distance_y: i.distanceY,
            start_x: i.startX,
            start_y: i.startY,
            offset_x_per_row: i.offsetXPerRow,
            offset_y_per_col: i.offsetYPerCol
        } : s = {
            image: i.image,
            position: i.position,
            margin_x: i.marginX,
            margin_y: i.marginY
        });
        var c = {
            path: t,
            opacity: 100,
            overwrite: n,
            tiled_image: a,
            image_watermark: s
        };
        return l.ns("file_viewer").rpc("watermarking/watermark_file", c, {
            subjectUserId: e
        })
    }

    function l(e, t, o) {
        var a = new r.UserApiV2Client,
            s = n.getWatermarkingOptions(i.DEFAULT_WATERMARKING_STATE),
            l = o.opacity ? o.opacity : s.opacity,
            c = o.text,
            u = {
                path: t,
                text: c,
                opacity: l
            };
        return a.ns("file_viewer").rpc("watermarking/preview_watermark", u, {
            subjectUserId: e
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sendWatermarkRequest = a, t.sendImageBasedWatermarkRequest = s, t.getPreviewWithWatermark = l
}), define("modules/clean/react/watermarking/apply_watermark_button", ["require", "exports", "tslib", "react", "modules/core/browser", "modules/core/i18n", "spectrum/popover", "spectrum/button", "premium-workflows/components/trial/trial_popover_content", "modules/clean/loggers/workflows_logger", "modules/clean/react/workflows/i18n/strings", "modules/clean/react/badge", "modules/clean/react/title_bubble"], function(e, t, r, n, i, o, a, s, l, c, u, d, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i);
    var m = o.i18n_default_project("watermarking")._;
    t.PRO_SPACE_LIMIT = 3298534883328;
    var f = (function(e) {
        function o() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClickedTrialPopover = function() {
                "POPOVER_WM_VALUE_PROPS" === t.props.trialVariant ? (c.logWorkflowsEvent(c.WorkflowsEvent.WatermarkUpsellPopoverClickedWmCopy, t.props.milestone), i.redirect(t.getLink("?_tk=watermarking_popover_wm_upsell"))) : "POPOVER_PRO_VALUE_PROPS" === t.props.trialVariant ? (c.logWorkflowsEvent(c.WorkflowsEvent.WatermarkUpsellPopoverClickedProCopy, t.props.milestone), i.redirect(t.getLink("?_tk=watermarking_popover_pro_upsell"))) : "TOOLTIP_ON_HOVER" === t.props.trialVariant && (c.logWorkflowsEvent(c.WorkflowsEvent.WatermarkUpsellTooltipClicked, t.props.milestone), i.redirect(t.getLink("?_tk=watermarking_tooltip_upsell")))
            }, t.onSelection = function(e) {
                t.areOptionsDisabled() ? (c.logWorkflowsEvent(c.WorkflowsEvent.WatermarkUpsellSingleLineProClicked, t.props.milestone), i.redirect(t.getLink("?_tk=watermarking_button_upsell"))) : t.props.onApply(e)
            }, t.onPopoverToggle = function(e) {
                e.isOpen && t.areOptionsDisabled() && c.logWorkflowsEvent(c.WorkflowsEvent.WatermarkUpsellSingleLineProExposed, t.props.milestone)
            }, t.onMouseEnterOnTooltip = function() {
                c.logWorkflowsEvent(c.WorkflowsEvent.WatermarkUpsellTooltipExposed, t.props.milestone)
            }, t
        }
        return r.__extends(o, e), o.prototype.componentDidMount = function() {
            this.isPopoverTrialVariant() && ("POPOVER_WM_VALUE_PROPS" === this.props.trialVariant ? c.logWorkflowsEvent(c.WorkflowsEvent.WatermarkUpsellPopoverExposedWmCopy, this.props.milestone) : "POPOVER_PRO_VALUE_PROPS" === this.props.trialVariant && c.logWorkflowsEvent(c.WorkflowsEvent.WatermarkUpsellPopoverExposedProCopy, this.props.milestone))
        }, o.prototype.getLink = function(e) {
            return this.props.isPlusUser ? "/buy" + e : "/pro/try" + e
        }, o.prototype.isPopoverTrialVariant = function() {
            var e = this.props,
                t = e.allowWatermark,
                r = e.trialVariant;
            return !t && ("POPOVER_WM_VALUE_PROPS" === r || "POPOVER_PRO_VALUE_PROPS" === r)
        }, o.prototype.isMenuDisabled = function() {
            var e = this.props,
                t = e.allowWatermark,
                r = e.trialVariant;
            return !t && "TOOLTIP_ON_HOVER" === r
        }, o.prototype.areOptionsDisabled = function() {
            var e = this.props,
                t = e.allowWatermark,
                r = e.trialVariant;
            return !t && "DEACTIVATED_MENU" === r
        }, o.prototype.renderPopoverContent = function() {
            var e = this.props.trialVariant;
            return this.isPopoverTrialVariant() ? n.default.createElement(a.PopoverContent, null, n.default.createElement(l.TrialPopoverContent, {
                variant: "POPOVER_WM_VALUE_PROPS" === e ? "watermarking_wm" : "watermarking_pro",
                proSpaceLimit: t.PRO_SPACE_LIMIT,
                onClick: this.onClickedTrialPopover
            })) : n.default.createElement(a.PopoverContent, null, this.areOptionsDisabled() && n.default.createElement(a.PopoverContentItem, {
                value: !1
            }, n.default.createElement("span", null, u.UPGRADE_TO_SAVE, n.default.createElement(d.Badge, {
                variant: d.BadgeVariant.PRO
            }))), n.default.createElement(a.PopoverContentItem, {
                value: !1,
                className: "apply-watermark-menu-item__copy",
                disabled: this.areOptionsDisabled()
            }, m("Make a copy", {
                comment: "As in: save the watermarked file as a copy"
            })), n.default.createElement(a.PopoverContentItem, {
                value: !0,
                className: "apply-watermark-menu-item__overwrite",
                disabled: this.areOptionsDisabled()
            }, m("Replace original", {
                comment: "As in: overwrite this file with watermarked file"
            })))
        }, o.prototype.renderButton = function() {
            var e = this.props,
                r = e.onClick,
                i = e.hasInput,
                o = n.default.createElement(s.Button, {
                    className: "apply-watermark-button",
                    tagName: "div",
                    disabled: this.isMenuDisabled() || !i,
                    variant: "primary",
                    size: "large",
                    onClick: r
                }, m("Save"));
            return this.isMenuDisabled() ? n.default.createElement(p.TitleBubble, {
                className: "watermark-trial-title-bubble",
                position: p.TitleBubble.POSITIONS.BOTTOM,
                distanceFromTarget: 2,
                allowInteractTooltip: !0,
                content: n.default.createElement(l.TrialPopoverContent, {
                    variant: "watermarking_wm",
                    proSpaceLimit: t.PRO_SPACE_LIMIT,
                    onClick: this.onClickedTrialPopover
                }),
                onMouseEnter: this.onMouseEnterOnTooltip
            }, o) : o
        }, o.prototype.render = function() {
            var e = this.props.hasInput;
            return n.default.createElement(a.Popover, {
                onSelection: this.onSelection,
                onMenuToggle: this.onPopoverToggle
            }, n.default.createElement(a.PopoverTrigger, {
                disabled: this.isMenuDisabled() || !e
            }, this.renderButton()), this.renderPopoverContent())
        }, o
    })(n.default.Component);
    t.ApplyWatermarkButton = f
}), define("modules/clean/react/watermarking/callout", ["require", "exports", "tslib", "react", "modules/clean/loggers/workflows_logger", "modules/clean/storage", "modules/clean/react/maestro/callout", "modules/clean/react/callout_orchestrator", "modules/clean/react/workflows/i18n/strings", "modules/core/i18n"], function(e, t, r, n, i, o, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.CALLOUT_DISMISSED_LOCALSTORAGE_KEY = "fileviewer_watermarking_callout_dismissed";
    var u = (function(e) {
        function u() {
            var r = null !== e && e.apply(this, arguments) || this;
            return r.state = {
                hasBeenDismissed: o.LocalStorage.get(t.CALLOUT_DISMISSED_LOCALSTORAGE_KEY)
            }, r.dismissCallout = function() {
                window.removeEventListener("click", r.dismissCallout), o.LocalStorage.set(t.CALLOUT_DISMISSED_LOCALSTORAGE_KEY, !0), r.setState({
                    hasBeenDismissed: !0
                })
            }, r.handleClickCTA = function() {
                var e = r.props.onClickTrialCTA;
                r.dismissCallout(), i.logWorkflowsEvent(i.WorkflowsEvent.WatermarkEducationTooltipClicked, r.props.milestone), e && e()
            }, r
        }
        return r.__extends(u, e), u.prototype.componentDidMount = function() {
            this.state.hasBeenDismissed || (window.addEventListener("click", this.dismissCallout), i.logWorkflowsEvent(i.WorkflowsEvent.WatermarkEducationTooltipExposed, this.props.milestone))
        }, u.prototype.componentWillUnmount = function() {
            window.removeEventListener("click", this.dismissCallout)
        }, u.prototype.render = function() {
            var e = this.props,
                t = e.targetNode,
                r = e.parentHasBeenClicked,
                i = e.position,
                o = e.isTrial;
            return this.state.hasBeenDismissed ? null : n.default.createElement(a.Callout, {
                title: o ? l.WATERMARK_TRIAL_CALLOUT_HEADER : c._("The new way to protect your work.", {
                    project: "watermarking"
                }),
                message: o ? l.WATERMARK_TRIAL_CALLOUT_DESCRIPTION : c._("Now you can watermark files right in Dropbox.", {
                    project: "watermarking"
                }),
                show: !0,
                onDismiss: this.dismissCallout,
                targetNode: t,
                parentHasBeenClicked: r,
                position: i,
                calloutType: s.CalloutType.Watermarking,
                CTAText: o ? l.TRIAL_CALLOUT_CTA : void 0,
                onClickCTA: this.handleClickCTA
            })
        }, u
    })(n.default.Component);
    t.WatermarkingCallout = u
}), define("modules/clean/react/watermarking/controller", ["require", "exports", "tslib", "react", "external/react-redux", "modules/clean/previews/data/actions", "modules/clean/react/file_viewer/constants", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer/data/selectors", "file-viewer/core", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/watermarking/api", "modules/core/i18n", "modules/clean/react/snackbar", "modules/clean/react/watermarking/utils"], function(e, t, r, n, i, o, a, s, l, c, u, d, p, m, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var _ = (function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.handleModeChange = function() {
                return r.__awaiter(i, void 0, void 0, function() {
                    var e, t, i, s, l, u, _;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (e = this.props, t = e.mode, i = e.changeMode, s = e.setRenderStatusForCurrentFile, l = e.setVirtualPreviewMetadata, !i || !l || !s) return [2];
                                if (t !== c.FileViewerMode.Watermarking) return o.clearVirtualPreviewMetadata(), this.setState({
                                    isLoadingWatermark: !1
                                }), [2];
                                s(a.PreviewRenderStatus.Loading), this.setState({
                                    isLoadingWatermark: !0
                                }), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, d.getPreviewWithWatermark(this.props.user.id, this.props.file.file_id, {
                                    text: f.getDefaultText(this.props.user)
                                })];
                            case 2:
                                return u = r.sent(), l(this.props.file, u.preview), [3, 4];
                            case 3:
                                return _ = r.sent(), i(c.FileViewerMode.Default), m.Snackbar.update(n.default.createElement(m.Snackbar, {
                                    variant: "fail",
                                    title: p._("Couldn’t enable watermarking. Please reload the page and try again.", {
                                        project: "watermarking"
                                    }),
                                    closeButtonText: p._("Close", {
                                        project: "watermarking"
                                    }),
                                    id: "watermarking-preview"
                                })), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, i.state = {
                isLoadingWatermark: !1
            }, i
        }
        return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
            var t = this.props,
                r = t.isFileRendered,
                n = t.mode,
                i = e.isFileRendered,
                o = e.mode,
                a = this.state.isLoadingWatermark;
            n !== o && this.handleModeChange(), a && (!i && r && (m.Snackbar.close("watermarking-preview"), this.setState({
                isLoadingWatermark: !1
            })), i && !r && m.Snackbar.sync(p._("Loading watermarked preview...", {
                project: "watermarking"
            }), !1, "watermarking-preview"))
        }, t.prototype.render = function() {
            return null
        }, t
    })(n.default.Component);
    t._WatermarkingController = _;
    var v = function(e) {
            return {
                isFileRendered: l.getRenderStatusForCurrentFile(e) === a.PreviewRenderStatus.Succeeded,
                mode: l.getMode(e)
            }
        },
        h = i.connect(v, {
            changeMode: u.changeMode,
            setRenderStatusForCurrentFile: s.setRenderStatusForCurrentFile,
            setVirtualPreviewMetadata: o.setVirtualPreviewMetadata
        })(_);
    t.WatermarkingController = h
}), define("modules/clean/react/watermarking/watermarking_layer", ["require", "exports", "tslib", "react", "external/react-redux", "modules/clean/react/css", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/watermarking/drawing", "modules/clean/react/watermarking/selectors", "modules/clean/react/watermarking/utils", "modules/clean/react/watermarking/types"], function(e, t, r, n, i, o, a, s, l, c, u) {
    "use strict";

    function d(e) {
        var t = document.createElement("canvas");
        t.width = e.width, t.height = e.height;
        var r = t.getContext("2d");
        if (!r) return 0;
        r.drawImage(e, 0, 0);
        for (var n, i, o, a, s = r.getImageData(0, 0, t.width, t.height), l = s.data, c = 0, u = 0, d = l.length; u < d; u += 4) n = l[u], i = l[u + 1], o = l[u + 2], a = Math.floor((n + i + o) / 3), c += a;
        return Math.floor(c / (e.width * e.height))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var p = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.updateWatermarkColor = function() {
                if (!t.props.thumbUrl) return void t.setTextWatermark({
                    color: "black"
                });
                t.img = new Image, t.img.crossOrigin = "use-credentials", t.img.onload = function() {
                    var e = d(t.img),
                        r = e < 127 ? "white" : "black";
                    t.setTextWatermark({
                        color: r
                    })
                }, t.img.src = t.props.thumbUrl
            }, t.updateWatermarkFontSize = function() {
                var e = t.props.pageDimensions;
                if (e) {
                    var r = Math.floor((e.width + e.height) / 2),
                        n = Math.floor(r / 200),
                        i = Math.floor(r / 5),
                        o = Math.floor(r / 40);
                    t.setTextWatermark({
                        size: o,
                        minSize: n,
                        maxSize: i
                    })
                }
            }, t.canvasRef = function(e) {
                t.canvas = e
            }, t.redraw = function() {
                var e = t.props,
                    r = e.tilingFunc,
                    n = e.watermark;
                if (r && t.canvas && n) {
                    var i = t.canvas.getContext("2d");
                    if (i) {
                        var o = u.getWatermarkingOptions(n),
                            a = t.getCanvasSize(),
                            l = a.canvasWidth,
                            d = a.canvasHeight,
                            p = a.scale;
                        if (i.clearRect(0, 0, l, d), o.position !== u.WatermarkPosition.REPEAT) {
                            var m, f = o.angle / 180 * Math.PI;
                            if (n.mode === u.WatermarkingMode.TEXT) {
                                var _ = n.textWatermarkingOptions;
                                if (!_.text) return;
                                m = s.drawTextTile(_.text, _.size * p, _.fontFamily, _.color, _.opacity / 100, f)
                            } else {
                                var _ = n.imageWatermarkingOptions;
                                if (!_.image) return;
                                m = s.drawImageTile(_.image, _.size * p, _.opacity / 100, f)
                            }
                            if (m) {
                                var v = o.marginX * p,
                                    h = o.marginY * p,
                                    g = v,
                                    w = h;
                                switch (o.position) {
                                    case u.WatermarkPosition.CENTER:
                                        g = (l - m.width) / 2, w = (d - m.height) / 2;
                                        break;
                                    case u.WatermarkPosition.NORTHEAST:
                                        g = l - m.width - v;
                                        break;
                                    case u.WatermarkPosition.SOUTHWEST:
                                        w = d - m.height - h;
                                        break;
                                    case u.WatermarkPosition.SOUTHEAST:
                                        g = l - m.width - v, w = d - m.height - h
                                }
                                i.drawImage(m, g, w)
                            }
                        } else {
                            var y = void 0;
                            try {
                                y = r(p)
                            } catch (e) {
                                if (e.message === c.WatermarkingError.TILE_NO_INPUT) return;
                                throw e
                            }
                            for (var b = 0, E = 0, S = (y.startY + E) % y.distanceY - y.height; S < d; S += y.distanceY) {
                                for (var P = (y.startX + b) % y.distanceX - y.width; P < l; P += y.distanceX) i.drawImage(y.canvas, P, S);
                                b += y.offsetXPerRow, E += y.offsetYPerCol
                            }
                        }
                    }
                }
            }, t
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            this.props.thumbUrl && this.updateWatermarkColor(), this.updateWatermarkFontSize(), this.redraw(), this.props.pageDimensions && this.props.setPageDimensions(this.props.pageDimensions)
        }, t.prototype.componentDidUpdate = function(e) {
            this.props.thumbUrl !== e.thumbUrl && this.updateWatermarkColor(), this.redraw()
        }, t.prototype.setTextWatermark = function(e) {
            var t = this.props,
                r = t.updateWatermarkOptions;
            t.watermark.mode === u.WatermarkingMode.TEXT && r({
                textWatermarkingOptions: e
            })
        }, t.prototype.getCanvasSize = function() {
            var e = this.props.layerSize.width,
                t = this.props.pageDimensions || this.props.layerSize,
                r = t.width,
                n = t.height,
                i = e / r;
            if (this.props.watermark) {
                var o = u.getWatermarkingOptions(this.props.watermark);
                i = Math.min(i, o.scale)
            }
            return {
                canvasWidth: Math.round(r * i),
                canvasHeight: Math.round(n * i),
                scale: i
            }
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.watermark,
                r = e.tilingFunc;
            if (!t || !r) return null;
            var i = this.props.layerSize,
                o = i.width,
                a = i.height,
                s = this.getCanvasSize(),
                l = s.canvasWidth,
                c = s.canvasHeight,
                u = {
                    width: o + "px",
                    height: a + "px"
                };
            return n.default.createElement("canvas", {
                ref: this.canvasRef,
                className: "fv-watermarking-layer",
                style: u,
                width: l,
                height: c
            })
        }, t
    })(n.default.PureComponent);
    t._WatermarkingLayer = p;
    var m = function(e) {
        return {
            watermark: l.getWatermarkState(e),
            tilingFunc: l.getWatermarkTilingFunc(e)
        }
    };
    t.ConnectedWatermarkingLayer = i.connect(m, {
        updateWatermarkOptions: a.updateWatermarkOptions,
        setPageDimensions: a.setPageDimensions
    })(p);
    var f = o.requireCssWithComponent(t.ConnectedWatermarkingLayer, ["/static/css/file_viewer/watermarking_layer-vflNek1am.css"]);
    t.WatermarkingLayer = f
}), define("modules/clean/react/workflows/i18n/apply_translation", ["require", "exports", "modules/core/i18n"], function(e, t, r) {
    "use strict";

    function n(e) {
        return "Test string" === e.text && "this is an unused string for sample purposes only" === e.description ? r._("Test string", {
            comment: "this is an unused string for sample purposes only"
        }) : "Upgrade" === e.text && "Upgrade Dropbox account" === e.description ? r._("Upgrade", {
            comment: "Upgrade Dropbox account"
        }) : "You’re in trial mode." === e.text && "This will be shown to basic and plus users when they test out watermarking" === e.description && "watermarking" === e.project ? r._("You’re in trial mode.", {
            comment: "This will be shown to basic and plus users when they test out watermarking",
            project: "watermarking"
        }) : "Upgrade to Professional to apply your watermark." === e.text && "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade" === e.description && "watermarking" === e.project ? r._("Upgrade to Professional to apply your watermark.", {
            comment: "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade",
            project: "watermarking"
        }) : "Upgrade to Professional for advanced features" === e.text && "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade" === e.description && "watermarking" === e.project ? r._("Upgrade to Professional for advanced features", {
            comment: "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade",
            project: "watermarking"
        }) : "Upgrade to Professional to get watermarking" === e.text && "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade" === e.description && "watermarking" === e.project ? r._("Upgrade to Professional to get watermarking", {
            comment: "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade",
            project: "watermarking"
        }) : "Protect work right in Dropbox" === e.text && "Value prop: Users can protect their images/pdfs by watermarking them right in Dropbox" === e.description && "watermarking" === e.project ? r._("Protect work right in Dropbox", {
            comment: "Value prop: Users can protect their images/pdfs by watermarking them right in Dropbox",
            project: "watermarking"
        }) : "Apply watermarks quickly" === e.text && "Value prop: Users can apply watermarks to their pdf/images quickly" === e.description && "watermarking" === e.project ? r._("Apply watermarks quickly", {
            comment: "Value prop: Users can apply watermarks to their pdf/images quickly",
            project: "watermarking"
        }) : "Create custom watermarks" === e.text && "Value prop: Users can create custom watermarks (e.g. changing text, uploading an image)" === e.description && "watermarking" === e.project ? r._("Create custom watermarks", {
            comment: "Value prop: Users can create custom watermarks (e.g. changing text, uploading an image)",
            project: "watermarking"
        }) : "Protect work with watermarking" === e.text && "Value prop: Users can protect their images/pdfs by watermarking them in Dropbox" === e.description && "watermarking" === e.project ? r._("Protect work with watermarking", {
            comment: "Value prop: Users can protect their images/pdfs by watermarking them in Dropbox",
            project: "watermarking"
        }) : "Get %(size_limit)s of storage" === e.text && "Value prop: Users get more storage if they upgrade to Professional" === e.description && "watermarking" === e.project ? r._("Get %(size_limit)s of storage", {
            comment: "Value prop: Users get more storage if they upgrade to Professional",
            project: "watermarking"
        }).format({
            size_limit: e.size_limit
        }) : "Free up space with Smart Sync" === e.text && "Value prop: Users can free up space with Smart Sync if they upgrade to Professional" === e.description && "watermarking" === e.project ? r._("Free up space with Smart Sync", {
            comment: "Value prop: Users can free up space with Smart Sync if they upgrade to Professional",
            project: "watermarking"
        }) : "Try Professional free" === e.text && "Try Dropbox Professional for free" === e.description ? r._("Try Professional free", {
            comment: "Try Dropbox Professional for free"
        }) : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.applyTranslation = n
}), define("modules/clean/react/workflows/i18n/strings", ["require", "exports", "modules/core/i18n"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.WATERMARK_TRIAL_CALLOUT_HEADER = r._("Protect this file with a watermark"), t.WATERMARK_TRIAL_CALLOUT_DESCRIPTION = r._("Add custom watermarks to keep your images and PDFs from being used without permission."), t.TRIAL_CALLOUT_CTA = r._("See how it works"), t.UPGRADE_TO_SAVE = r._("Upgrade to save", {
        comment: "Users can upgrade to Professional in order to save their watermarked file"
    })
}), define("modules/clean/react/workflows/i18n/with_translations", ["require", "exports", "tslib", "react", "premium-workflows/common/i18n", "modules/core/i18n", "modules/clean/react/helpers", "modules/clean/react/workflows/i18n/apply_translation", "modules/clean/display_format"], function(e, t, r, n, i, o, a, s, l) {
    "use strict";

    function c(e) {
        var t = function(t) {
            return n.default.createElement(i.TranslationProvider, {
                applyTranslation: s.applyTranslation,
                formatBytes: l.format_bytes,
                formatPercent: o.format_percent,
                isEnvExternal: !0
            }, n.default.createElement(e, r.__assign({}, t)))
        };
        return t.displayName = "WithTranslations(" + a.getDisplayName(e) + ")", t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.withTranslations = c
}), define("modules/clean/shallow_equal", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
    }

    function n(e, t) {
        if (r(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!i.call(t, n[a]) || !r(e[n[a]], t[n[a]])) return !1;
        return !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.prototype.hasOwnProperty;
    t.shallowEqual = n
}), define("premium-workflows/common/i18n", ["require", "exports", "tslib", "react", "prop-types"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importStar(i), t.IntlString = function(e, t) {
        if (t.applyTranslation ? t.applyTranslation(e) : null) return n.createElement("span", null, t.applyTranslation(e));
        var r = {};
        return t.isEnvExternal || (r = {
            textShadow: "2px 2px 0px red"
        }), n.createElement("span", {
            style: r
        }, e.text)
    }, t.IntlString.displayName = "IntlString", t.IntlString.contextTypes = {
        applyTranslation: i.func
    }, t.IntlPluralString = function(e, r) {
        return t.IntlString(e, r)
    }, t.IntlPluralString.displayName = "IntlPluralString", t.IntlPluralString.contextTypes = {
        applyTranslation: i.func
    };
    var o = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.getChildContext = function() {
            return {
                applyTranslation: this.props.applyTranslation,
                formatBytes: this.props.formatBytes,
                formatPercent: this.props.formatPercent,
                isEnvExternal: this.props.isEnvExternal
            }
        }, t.prototype.render = function() {
            return n.createElement("div", null, this.props.children)
        }, t
    })(n.Component);
    t.TranslationProvider = o, o.displayName = "TranslationProvider", o.childContextTypes = {
        applyTranslation: i.func,
        formatBytes: i.func,
        formatPercent: i.func,
        isEnvExternal: i.bool
    }
}), define("premium-workflows/components/base/slider", ["require", "exports", "tslib", "react", "classnames"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importDefault(i);
    var o = {
            trackBaseColor: "#dddfe1",
            trackFillColor: "#0d2484"
        },
        a = {
            trackBaseColor: "#717781",
            trackFillColor: "#fff"
        },
        s = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.handleChange = function() {
                    if (r.inputEl) {
                        var e = Number(r.inputEl.value),
                            t = r.props.onChange,
                            n = {
                                value: e
                            };
                        r.setState(n, function() {
                            t && t(e)
                        })
                    }
                }, r.getTrackStyleBackground = function(e) {
                    var t = r.props,
                        n = t.darkMode,
                        i = t.max,
                        s = t.min,
                        l = Math.round(100 * (100 * (e - s)) / (i - s)) / 100,
                        c = n ? a : o,
                        u = c.trackFillColor,
                        d = c.trackBaseColor;
                    return "linear-gradient(to right, " + u + " 0%, " + u + " " + l + "%, " + d + " " + l + "%, " + d + " 100%)"
                }, r.handleRef = function(e) {
                    r.inputEl = e ? e : void 0, r.handleChange()
                }, r.state = {
                    value: t.value || 50
                }, r
            }
            return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                e.value !== this.props.value && this.setState({
                    value: this.props.value
                })
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    r = e.darkMode,
                    o = e.fullWidth,
                    a = e.min,
                    s = e.max,
                    l = e.name,
                    c = e.step,
                    u = this.state.value,
                    d = i.default("range-slider__wrapper", {
                        "range-slider--dark-mode": r,
                        "range-slider--full-width": o
                    }, t);
                return n.createElement("span", {
                    className: d
                }, n.createElement("span", {
                    className: "range-slider__track",
                    style: {
                        background: this.getTrackStyleBackground(u)
                    }
                }), n.createElement("input", {
                    className: "range-slider",
                    type: "range",
                    min: a,
                    max: s,
                    value: u,
                    name: l,
                    step: c,
                    onChange: this.handleChange,
                    ref: this.handleRef,
                    "aria-valuemin": a,
                    "aria-valuemax": s,
                    "aria-valuenow": u
                }))
            }, t
        })(n.PureComponent);
    t.Slider = s, s.defaultProps = {
        min: 0,
        max: 100,
        step: 1
    }, t.default = s
}), define("premium-workflows/components/base/top_banner", ["require", "exports", "tslib", "react", "spectrum/button"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.TopBanner = function(e) {
        var t = e.primaryText,
            r = e.secondaryText,
            o = e.buttonText,
            a = e.href,
            s = e.onClick;
        return n.createElement("div", {
            className: "top-banner"
        }, n.createElement("div", {
            className: "top-banner__text"
        }, n.createElement("div", {
            className: "top-banner__primary-text"
        }, t, " "), r), n.createElement(i.Button, {
            variant: "secondary",
            href: a,
            onClick: s
        }, o))
    }
}), define("premium-workflows/components/trial/banner", ["require", "exports", "tslib", "react", "premium-workflows/components/base/top_banner", "premium-workflows/common/i18n"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.PrimaryText = function(e) {
        switch (e.mode) {
            case "watermarking":
                return n.createElement(o.IntlString, {
                    text: "You’re in trial mode.",
                    description: "This will be shown to basic and plus users when they test out watermarking",
                    project: "watermarking"
                });
            default:
                return null
        }
    }, t.SecondaryText = function(e) {
        switch (e.mode) {
            case "watermarking":
                return n.createElement(o.IntlString, {
                    text: "Upgrade to Professional to apply your watermark.",
                    description: "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade",
                    project: "watermarking"
                });
            default:
                return null
        }
    }, t.Banner = function(e) {
        var r = e.mode,
            a = e.onClick;
        return n.createElement(i.TopBanner, {
            primaryText: n.createElement(t.PrimaryText, {
                mode: r
            }),
            secondaryText: n.createElement(t.SecondaryText, {
                mode: r
            }),
            buttonText: n.createElement(o.IntlString, {
                text: "Upgrade",
                description: "Upgrade Dropbox account"
            }),
            onClick: a
        })
    }
}), define("premium-workflows/components/trial/trial_popover_content", ["require", "exports", "tslib", "react", "prop-types", "premium-workflows/common/i18n", "spectrum/button", "spectrum/icon_form"], function(e, t, r, n, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importStar(i), t.Title = function(e) {
        switch (e.variant) {
            case "watermarking_wm":
                return n.createElement(o.IntlString, {
                    text: "Upgrade to Professional to get watermarking",
                    description: "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade",
                    project: "watermarking"
                });
            case "watermarking_pro":
                return n.createElement(o.IntlString, {
                    text: "Upgrade to Professional for advanced features",
                    description: "When basic or plus users test out a professional feature such as watermarking, they will not be able to save their changes until they upgrade",
                    project: "watermarking"
                });
            default:
                return null
        }
    }, t.ValueProp1 = function(e) {
        switch (e.variant) {
            case "watermarking_wm":
                return n.createElement(o.IntlString, {
                    text: "Protect work right in Dropbox",
                    description: "Value prop: Users can protect their images/pdfs by watermarking them right in Dropbox",
                    project: "watermarking"
                });
            case "watermarking_pro":
                return n.createElement(o.IntlString, {
                    text: "Protect work with watermarking",
                    description: "Value prop: Users can protect their images/pdfs by watermarking them in Dropbox",
                    project: "watermarking"
                });
            default:
                return null
        }
    }, t.ValueProp2 = function(e, t) {
        switch (e.variant) {
            case "watermarking_wm":
                return n.createElement(o.IntlString, {
                    text: "Apply watermarks quickly",
                    description: "Value prop: Users can apply watermarks to their pdf/images quickly",
                    project: "watermarking"
                });
            case "watermarking_pro":
                return n.createElement(o.IntlString, {
                    text: "Get %(size_limit)s of storage",
                    size_limit: t.formatBytes(e.proSpaceLimit, 0),
                    description: "Value prop: Users get more storage if they upgrade to Professional",
                    project: "watermarking"
                });
            default:
                return null
        }
    }, t.ValueProp2.contextTypes = {
        formatBytes: i.func
    }, t.ValueProp3 = function(e) {
        switch (e.variant) {
            case "watermarking_wm":
                return n.createElement(o.IntlString, {
                    text: "Create custom watermarks",
                    description: "Value prop: Users can create custom watermarks (e.g. changing text, uploading an image)",
                    project: "watermarking"
                });
            case "watermarking_pro":
                return n.createElement(o.IntlString, {
                    text: "Free up space with Smart Sync",
                    description: "Value prop: Users can free up space with Smart Sync if they upgrade to Professional",
                    project: "watermarking"
                });
            default:
                return null
        }
    }, t.ValueProp = function(e) {
        var t = e.children;
        return n.createElement("span", {
            className: "value-prop"
        }, n.createElement(s.IconForm, {
            className: "value-prop__check",
            name: "check"
        }), t)
    }, t.TrialPopoverContent = function(e) {
        var r = e.variant,
            i = e.proSpaceLimit,
            s = e.onClick;
        return n.createElement("div", {
            className: "trial-popover-content"
        }, n.createElement("div", {
            className: "trial-popover-content__title"
        }, n.createElement(t.Title, {
            variant: r
        })), n.createElement("div", {
            className: "trial-popover-content__value-props"
        }, n.createElement(t.ValueProp, null, n.createElement(t.ValueProp1, {
            variant: r
        })), n.createElement(t.ValueProp, null, n.createElement(t.ValueProp2, {
            variant: r,
            proSpaceLimit: i
        })), n.createElement(t.ValueProp, null, n.createElement(t.ValueProp3, {
            variant: r
        }))), n.createElement(a.Button, {
            variant: "primary",
            onClick: s,
            shouldWrapContent: !0
        }, n.createElement(o.IntlString, {
            text: "Try Professional free",
            description: "Try Dropbox Professional for free"
        })))
    }
}), define("spectrum_comments/utils/throttle-debounce", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t) {
        function r() {
            n = !0, null !== i && (e.apply(void 0, i), i = null)
        }
        var n = !0,
            i = null;
        return function() {
            for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
            n ? (n = !1, e.apply(void 0, o), setTimeout(r, t)) : i = o
        }
    }

    function n(e, t, r) {
        void 0 === r && (r = !1);
        var n;
        return function() {
            for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
            var a = this,
                s = function() {
                    n = void 0, r || e.apply(a, i)
                },
                l = r && void 0 === n;
            void 0 !== n && window.clearTimeout(n), n = window.setTimeout(s, t), l && e.apply(a, i)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.throttle = r, t.debounce = n
});
//# sourceMappingURL=pkg-file_viewer.min.js-vflhSvdR3.map