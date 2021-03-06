define(["librastandardlib/dom-utils/smoothScrollToElem", "libra/dom-utils/smoothScrollOptions"], function(smoothScrollToElem, smoothScrollOptions) {
    "use strict";
    var defaults = {
        activeClass: "lb-active",
        triggerSelector: ".lb-tabs-trigger",
        triggersGroupSelector: ".lb-tabs-triggers",
        accordionTriggerClass: "lb-tabs-accordion-trigger",
        accordionHideContentClass: "lb-accordion-content-hide",
        tabContentGroupSelector: ".lb-tabs-content",
        tabContentItemSelector: ".lb-tabs-content-item",
        tabChangeEvent: "custom_lb-tabs_change",
        contentRevealEvent: "custom_lb-comp-content-container_reveal",
        transitionDoneWaitTime: 300
    };
    var Tabs = function(elem) {
        this.$elem = $(elem);
        this.options = $.extend({}, defaults, this.$elem.data());
        this.$tabContentGroup = this.$elem.children(this.options.tabContentGroupSelector);
        this.$tabContent = this.$tabContentGroup.children(this.options.tabContentItemSelector);
        this.$triggersGroup = this.$elem.children(this.options.triggersGroupSelector);
        this.$triggers = this.$triggersGroup.children(this.options.triggerSelector);
        this.$accordionTriggers = this.$tabContentGroup.children("." + this.options.accordionTriggerClass);
        this.bindHandlers()
    };
    Tabs.prototype = {
        bindHandlers: function() {
            var that = this;
            this.$triggersGroup.on("click", "> li", function(e) {
                e.preventDefault();
                that.toggle(this, that.$triggers)
            });
            this.$tabContentGroup.on("click", "> ." + this.options.accordionTriggerClass, function(e) {
                e.preventDefault();
                that.toggle(this, that.$accordionTriggers)
            })
        },
        checkIfAccordion: function() {
            this.isAccordion = false;
            if (this.$accordionTriggers.first().is(":visible")) {
                this.isAccordion = true
            }
        },
        toggle: function(trigger, triggersList) {
            this.$trigger = $(trigger);
            this.idx = triggersList.index(this.$trigger);
            this.$targetContent = this.$tabContent.eq(this.idx);
            this.$triggers.add(this.$accordionTriggers).removeClass(this.options.activeClass);
            this.$triggers.eq(this.idx).addClass(this.options.activeClass);
            this.$accordionTriggers.eq(this.idx).addClass(this.options.activeClass);
            this.checkIfAccordion();
            if (!this.$targetContent.hasClass(this.options.activeClass) || this.isAccordion && this.$targetContent.hasClass(this.options.accordionHideContentClass)) {
                this.expand(this.idx)
            } else if (this.$trigger.hasClass(this.options.accordionTriggerClass)) {
                this.collapseAccordionsOnExpand();
                this.collapse()
            }
        },
        expand: function() {
            var trigger = this.$accordionTriggers.eq(this.idx);
            this.collapseOtherTabsOnExpand();
            this.collapseAccordionsOnExpand();
            this.$targetContent.removeClass(this.options.accordionHideContentClass);
            this.$targetContent.outerWidth();
            this.$targetContent.addClass(this.options.activeClass);
            this.$targetContent.trigger(this.options.tabChangeEvent);
            setTimeout(function() {
                this.$targetContent.trigger(this.options.contentRevealEvent)
            }.bind(this), this.options.transitionDoneWaitTime);
            if (this.isAccordion) {
                smoothScrollToElem(trigger, smoothScrollOptions)
            }
        },
        collapse: function() {
            this.$trigger.removeClass(this.options.activeClass);
            this.$targetContent.trigger("custom_lb_comp-content-container_close");
            this.$targetContent.addClass(this.options.accordionHideContentClass);
            this.$targetContent.trigger(this.options.tabChangeEvent)
        },
        collapseOtherTabsOnExpand: function() {
            var $openContent = this.$tabContentGroup.children(this.options.tabContentItemSelector + "." + this.options.activeClass);
            $openContent.trigger("custom_lb_comp-content-container_close");
            $openContent.removeClass(this.options.activeClass)
        },
        collapseAccordionsOnExpand: function() {
            var $hiddenAccordionContent = this.$tabContentGroup.children("." + this.options.accordionHideContentClass);
            $hiddenAccordionContent.removeClass(this.options.accordionHideContentClass)
        }
    };
    Libra.Comp.register({
        name: "tabs",
        initFct: function(elem) {
            new Tabs(elem)
        },
        initTime: "documentReady"
    });
    return Tabs
});