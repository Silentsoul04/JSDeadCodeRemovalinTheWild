
        if (require(["jqReady!", "window", "document", "location", "deferExec!"], function() {
                window.location.host.indexOf("businessstore.microsoft.com") != -1 && msCommonShell && (msCommonShell.as = {
                    callback: function() {}
                })
            }), window.location.host.indexOf("businessstore.microsoft.com") != -1) {
            var p = document.createElement("nav");
            x = document.getElementById("headerUniversalHeader");
            x.insertBefore(p, x.firstChild);
            p.outerHTML = "<nav id=uhf-g-nav><\/nav>"
        }
        require(["jqReady!", "deferExec!"], function(n) {
            n("[data-ocms-id] .m-content-placement section a, [data-ocms-id] .m-content-placement section").removeAttr("data-js-href").removeAttr("href").bind("mouseup click mousedown", function(n) {
                n.stopImmediatePropagation();
                n.preventDefault()
            })
        });
        require(["jqReady!", "deferExec!"], function(n) {
            n("[data-ocms-id] .m-hyperlink-group-content-placement section a, [data-ocms-id] .m-hyperlink-group-content-placement section").removeAttr("data-js-href").removeAttr("href").bind("mouseup click mousedown", function(n) {
                n.stopImmediatePropagation();
                n.preventDefault()
            })
        });
        location.href.toLowerCase().indexOf("collections/blackfridaybrowsealldeals") > 0 && require(["jqReady!", "deferExec!"], function(n) {
            n("source,img", n(".m-product-placement-item:not(.context-movie)").removeClass("contex-app,context-game").addClass("context-movie")).each(function() {
                var t = n(this),
                    r = t.is("img") ? "src" : "srcset",
                    u = "data-" + r,
                    i = t.attr(u);
                i && (i = i.replace("&h=170", "&h=124"), t.attr(u, i), t.is(".lazyloaded") && t.attr(r, i))
            })
        });
        require(["jqReady!"], function(n) {
            if (document.body.className.indexOf("s_swiftkey") > 0) {
                var t = document.documentElement.lang;
                if (["ar-eg", "pt-br", "tr-tr", "se-se", "es-es", "de-de"].indexOf(t) != -1) return;
                n('body.s_swiftkey .c-call-to-action[aria-label="download_app"]').html('<img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2dKBu" alt="Download on the app store" height=50>').attr("class", "margin-bottom-10").attr("style", "display:block");
                n('body.s_swiftkey .c-call-to-action[aria-label="download_play"]').html('<img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2dCNN" alt="Get it on google play" height=50>').attr("class", "margin-bottom-10").attr("style", "display:block")
            }
        });
        require(["jqReady!"], function(n) {
            document.body.className.indexOf("s_microsoftpix") > 0 && n('body.s_microsoftpix .c-call-to-action[aria-label="download_app"]').html('<img src="https://swiftkey.com/images/misc/stores/app/en.png" alt="Download on the app store" height=50>').attr("class", "margin-bottom-10").attr("style", "display:block")
        });
        require(["selectMenu", "htmlExtensions"], function(n, t) {
            n.SelectMenu.prototype.setSelectedItem = function(n) {
                if (!n || !this.element) return !1;
                var i = t.selectFirstElement('li[id="' + n + '"] > a', this.element) || t.selectFirstElement('li[id="' + n + '"] > span', this.element);
                return i ? this.onItemSelected(i, !1, !1) : !1
            }
        });
        require(["jqReady!"], function(n) {
            document.body.className.indexOf("s_hololens") > 0 && n("#content-links").children().eq(1).attr("ID", "hololens-addtocard")
        });
        require(["jqReady!"], function(n) {
            n(".s_airband .m-content-placement .m-content-placement-item, .s_airband .m-hero .m-hero-item, .s_ai .m-multi-hero .m-multi-hero-item").each(function() {
                var t = n(this).find("a.c-call-to-action").first();
                if (t.length > 0 && t[0].hasAttribute("data-js-dialog-show")) {
                    n(this).css("cursor", "pointer");
                    t.on("click", function(n) {
                        n.stopPropagation()
                    });
                    n(this).on("click", function() {
                        t[0].click()
                    });
                    n(this).on("mousedown", function() {
                        t[0].mousedown()
                    })
                }
            })
        });
        require(["jqReady!"], function(n) {
            if (document.body.className.indexOf("s_corporate-responsibility") > 0) {
                n(document).on("click", ".dropdown", function() {
                    var i = n(this);
                    t(i)
                });
                n(document).on("keydown", ".dropdown", function(i) {
                    var r = i.keyCode ? i.keyCode : i.which,
                        u;
                    (r === 13 || r === 32) && (u = n(this), t(u))
                });
                setTimeout(function() {
                    var t = n(".c-select-menu").find("button");
                    n.each(t, function(t) {
                        var i = n(this).attr("id"),
                            r = i + "-" + t;
                        n(this).attr("id", r);
                        t++
                    })
                }, 4e3);

                function t(t) {
                    var i = t,
                        t = i.find(".dropdown-list").val(),
                        s = i.find(".dropdown-list  option:selected").data("btntext"),
                        c = i.find(".dropdown-list  option:selected").data("arialabel"),
                        e = i.find("select").val(),
                        h = i.find(".dropdown-list  option:selected").data("btnarialabel"),
                        o, r, u, f;
                    e == "0" || e == null ? (o = n(".c-select-menu").val(), n(".c-select-menu").find("button").attr("aria-label", o), i.next(".cta-link-btn").css("display", "none")) : (i.next(".cta-link-btn").css("display", "inline-block"), i.next(".cta-link-btn").attr("href", t), i.next(".cta-link-btn").attr("aria-label", h), i.next(".cta-link-btn").find("span").html(s), r = "", n(".c-select-menu > ul > li").each(function() {
                        return r = n(this).find("span[aria-selected=true]").text(), r != "" ? !1 : void 0
                    }), u = n(".c-select-menu").find("button").text(), u == r && (n(".dropdown-list option:contains(" + u + ")").attr("selected", "true"), f = n(".dropdown-list option:selected").data("arialabel"), n(".dropdown-list").attr("aria-label", f), n(".c-select-menu").find("button").attr("aria-label", f)))
                }
            }
        });
        require(["platform"], function() {
            var n = setTimeout(function() {
                require.defined("multi-slide-carousel") && (clearTimeout(n), n = null, require(["multi-slide-carousel"], function(n) {
                    n && n.MultiSlideCarousel && (n.MultiSlideCarousel.prototype.setAutoPlayInterval = function() {
                        var n = this;
                        this.clearAutoPlayTimers && this.clearAutoPlayTimers();
                        autoPlayIntervalDuration = Math.max(2e3, parseInt(n.carouselElement && n.carouselElement.getAttribute("data-js-interval"), 10) || 6e3);
                        this.autoPlayTimer = setTimeout(function() {
                            n.setActiveSlide && n.setActiveSlide(n.activeIndex + 1, !1)
                        }, autoPlayIntervalDuration)
                    })
                }))
            }, 500)
        })
    