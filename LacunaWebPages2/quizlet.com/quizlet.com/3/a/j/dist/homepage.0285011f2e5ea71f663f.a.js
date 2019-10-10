(window.QJP = window.QJP || []).push([
    [58, 86], {
        JwOH: function(e, t, a) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 69, 4209);
            "use strict";
            a.d(t, "a", function() {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 139, 190);
                return I
            });
            var n = a("VbXa"),
                s = a.n(n),
                l = a("q1tI"),
                i = a.n(l),
                r = a("TSYQ"),
                c = a.n(r),
                o = a("QLaP"),
                m = a.n(o),
                d = a("T3U7"),
                u = a("t1Ez"),
                p = a("Pxp3"),
                f = a("a08m"),
                h = a("bBvF").default,
                I = function(e) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 612, 4182);
                    function t(t) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 646, 1471);
                        var a;
                        return (a = e.call(this, t) || this).handleClickUser = function(e) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 772, 1183);
                            Object(d.a)("homepage_testimonial_clicked", {
                                selectedUserId: a.props.testimonials[e].userId,
                                selectedUserDisplayName: a.props.testimonials[e].displayName
                            }), a.setState({
                                selectedIndex: e
                            })
                        }, m()(t.defaultSelectedIndex >= 0 && t.defaultSelectedIndex < t.testimonials.length, "Testimonials are hard-coded and one will always be selected by default"), a.state = {
                            selectedIndex: t.defaultSelectedIndex
                        }, a
                    }
                    s()(t, e);
                    var a = t.prototype;
                    return a.getSelectedQuote = function() {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 1592, 1713);
                        return this.props.testimonials[this.state.selectedIndex].quote
                    }, a.renderTestimonialUser = function(e, t) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 1741, 3090);
                        var a = c()("Testimonials-user", {
                            isSelected: e === this.state.selectedIndex
                        });
                        return i.a.createElement("div", {
                            className: a,
                            key: e
                        }, i.a.createElement(p.a, null, i.a.createElement(f.a, {
                            onClick: this.handleClickUser.bind(null, e)
                        }, i.a.createElement("div", {
                            "aria-label": h("en-US", "An image of {name}", {
                                name: t.displayName
                            }),
                            className: "Testimonials-displayImage",
                            role: "img",
                            style: {
                                backgroundImage: "url(" + t.displayImageUrl + ")"
                            }
                        }))), i.a.createElement(p.a, {
                            className: "Testimonials-username"
                        }, i.a.createElement(f.a, {
                            to: t.profileUrl
                        }, t.displayName), i.a.createElement("span", {
                            className: "Testimonials-userStatus"
                        }, t.userType)))
                    }, a.render = function() {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 3103, 4161);
                        var e = this,
                            t = this.props.testimonials;
                        return i.a.createElement("div", {
                            className: "Testimonials"
                        }, i.a.createElement(p.a, null, i.a.createElement("span", {
                            className: "Testimonials-header"
                        }, i.a.createElement(u.a, {
                            _precomputed: h("en-US", "TESTIMONIALS", {})
                        }))), i.a.createElement(p.a, {
                            className: "Testimonials-container"
                        }, i.a.createElement(p.a, {
                            className: "Testimonials-quote"
                        }, i.a.createElement("span", null, this.getSelectedQuote())), i.a.createElement(p.a, {
                            className: "Testimonials-users"
                        }, t.map(function(t, a) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4028, 4135);
                            return e.renderTestimonialUser(a, t)
                        }))))
                    }, t
                }(l.PureComponent)
        },
        QdAX: function(e, t, a) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4225, 4826);
            "use strict";
            QWait("Quizlet.Common.i18n", function() {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4312, 4815);
                a.r(t);
                var e = a("zK28"),
                    n = a("UkZI"),
                    s = a("X0lI"),
                    l = a.n(s);
                QWait("dom", "Quizlet.homepageData", function() {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4539, 4800);
                    var t = l()(e.a.homepageData, "Missing Quizlet.homepageData"),
                        a = l()(window.document.querySelector(".Homepage-testimonials .Testimonials"));
                    Object(n.default)(t, a)
                })
            })
        },
        UkZI: function(e, t, a) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4842, 5639);
            "use strict";
            a.r(t),
                function(e) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4924, 5604);
                    a.d(t, "default", function() {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4976, 5043);
                        return c
                    });
                    var n = a("q1tI"),
                        s = a.n(n),
                        l = a("0cfB"),
                        i = a("WHvC"),
                        r = a("JwOH");

                    function c(t, a) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 5259, 5586);
                        var n = Object(l.hot)(e)(r.a);
                        Object(i.a)(s.a.createElement(n, {
                            defaultSelectedIndex: t.defaultSelectedTestimonialIndex,
                            testimonials: t.testimonials
                        }), a)
                    }
                }.call(this, a("3UD+")(e))
        }
    },
    [
        ["QdAX", 1, 2, 0]
    ]
]);
//# sourceMappingURL=homepage.0285011f2e5ea71f663f.a.js.map