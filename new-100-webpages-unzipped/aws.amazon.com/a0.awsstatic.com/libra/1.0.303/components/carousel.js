define(["librastandardlib/aws/page-settings", "libra/vendor/owl.carousel"], function(PageSettings) {
    "use strict";
    var Carousel = function(elem) {
        this.$elem = $(elem);
        this.$slideInner = this.$elem.find(".lb-carousel-item-inner");
        this.$autoplayVideoChild = this.$slideInner.find('video[autoplay="true"]');
        this.options = {};
        this.setupCarousel();
        this.bindEventHandler();
        if (this.$autoplayVideoChild.length) {
            this.activateVideoElements()
        }
    };
    Carousel.prototype.setupCarousel = function() {
        var config = {
            activeClass: "lb-active",
            autoHeightClass: "lb-carousel-auto-height",
            baseClass: "lb-carousel",
            contentRevealEvent: "custom_lb-comp-content-container_reveal",
            dotClass: "lb-carousel-dot",
            dotsClass: "lb-carousel-dots",
            dragClass: "lb-carousel-drag",
            dragEndSpeed: 200,
            itemClass: "lb-carousel-item",
            loadingClass: "lb-carousel-loading",
            loadedClass: "lb-carousel-loaded",
            mouseDrag: false,
            nav: true,
            navClass: ["lb-carousel-prev", "lb-carousel-next"],
            navContainerClass: "lb-carousel-nav",
            navText: ['<div class="lb-carousel-arrow-wrapper"><div class="lb-line-arrow-left"></div></div>', '<div class="lb-carousel-arrow-wrapper"><div class="lb-line-arrow-right"></div></div>'],
            refreshClass: "lb-carousel-refresh",
            responsiveRefreshRate: 110,
            rtlClass: "lb-carousel-rtl",
            slideBy: "page",
            stageClass: "lb-carousel-stage",
            stageOuterClass: "lb-carousel-stage-outer",
            rtl: PageSettings.isRTL
        };
        this.options = $.extend({}, config, this.$elem.data());
        this.$elem.owlCarousel(this.options)
    };
    Carousel.prototype.bindEventHandler = function() {
        this.$elem.on("changed.owl.carousel", function() {
            var slideTime = this.options.smartSpeed || 200;
            this.doAfterSlide(slideTime)
        }.bind(this))
    };
    Carousel.prototype.doAfterSlide = function(waitTime) {
        setTimeout(function() {
            var $dataWrapper = this.$elem.find(".lb-carousel-item.active .lb-carousel-item-inner-wrapper");
            if ($dataWrapper.length > 0) {
                $dataWrapper.trigger(this.options.contentRevealEvent)
            }
        }.bind(this), waitTime)
    };
    Carousel.prototype.activateVideoElements = function() {
        for (var i = 0; i < this.$autoplayVideoChild.length; i++) {
            if (this.$autoplayVideoChild.eq(i).data("loaded") && typeof this.$autoplayVideoChild.get(i).play === "function") {
                this.$autoplayVideoChild.get(i).play()
            }
        }
    };
    Libra.Comp.register({
        name: "carousel",
        initFct: function(elem) {
            new Carousel(elem)
        },
        initTime: "immediate"
    });
    return Carousel
});