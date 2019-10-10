// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd otransitionend',
            'transition': 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {lacuna_lazy_load("/js/bootstrap.js[1631:1967]", functionData => eval(functionData))}

    $(function() {
        $.support.transition = transitionEnd()
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // ALERT CLASS DEFINITION
    // ======================

    var dismiss = '[data-dismiss="alert"]'
    var Alert = function(el) {lacuna_lazy_load("/js/bootstrap.js[2672:2728]", functionData => eval(functionData))}

    Alert.prototype.close = function(e) {lacuna_lazy_load("/js/bootstrap.js[2772:3684]", functionData => eval(functionData))}


    // ALERT PLUGIN DEFINITION
    // =======================

    var old = $.fn.alert

    $.fn.alert = function(option) {lacuna_lazy_load("/js/bootstrap.js[3818:4101]", functionData => eval(functionData))}

    $.fn.alert.Constructor = Alert


    // ALERT NO CONFLICT
    // =================

    $.fn.alert.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[4238:4293]", functionData => eval(functionData))}


    // ALERT DATA-API
    // ==============

    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================

    var Button = function(element, options) {lacuna_lazy_load("/js/bootstrap.js[5040:5179]", functionData => eval(functionData))}

    Button.DEFAULTS = {
        loadingText: 'loading...'
    }

    Button.prototype.setState = function(state) {lacuna_lazy_load("/js/bootstrap.js[5300:6002]", functionData => eval(functionData))}

    Button.prototype.toggle = function() {lacuna_lazy_load("/js/bootstrap.js[6047:6646]", functionData => eval(functionData))}


    // BUTTON PLUGIN DEFINITION
    // ========================

    var old = $.fn.button

    $.fn.button = function(option) {lacuna_lazy_load("/js/bootstrap.js[6784:7178]", functionData => eval(functionData))}

    $.fn.button.Constructor = Button


    // BUTTON NO CONFLICT
    // ==================

    $.fn.button.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[7320:7376]", functionData => eval(functionData))}


    // BUTTON DATA-API
    // ===============

    $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function(e) {lacuna_lazy_load("/js/bootstrap.js[7516:7679]", functionData => eval(functionData))})

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function(element, options) {lacuna_lazy_load("/js/bootstrap.js[8291:8752]", functionData => eval(functionData))}

    Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true
    }

    Carousel.prototype.cycle = function(e) {lacuna_lazy_load("/js/bootstrap.js[8905:9186]", functionData => eval(functionData))}

    Carousel.prototype.getActiveIndex = function() {lacuna_lazy_load("/js/bootstrap.js[9241:9414]", functionData => eval(functionData))}

    Carousel.prototype.to = function(pos) {lacuna_lazy_load("/js/bootstrap.js[9460:9880]", functionData => eval(functionData))}

    Carousel.prototype.pause = function(e) {lacuna_lazy_load("/js/bootstrap.js[9927:10235]", functionData => eval(functionData))}

    Carousel.prototype.next = function() {lacuna_lazy_load("/js/bootstrap.js[10280:10357]", functionData => eval(functionData))}

    Carousel.prototype.prev = function() {lacuna_lazy_load("/js/bootstrap.js[10402:10479]", functionData => eval(functionData))}

    Carousel.prototype.slide = function(type, next) {lacuna_lazy_load("/js/bootstrap.js[10535:12722]", functionData => eval(functionData))}


    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    var old = $.fn.carousel

    $.fn.carousel = function(option) {lacuna_lazy_load("/js/bootstrap.js[12868:13453]", functionData => eval(functionData))}

    $.fn.carousel.Constructor = Carousel


    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.carousel.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[13605:13663]", functionData => eval(functionData))}


    // CAROUSEL DATA-API
    // =================

    $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function(e) {lacuna_lazy_load("/js/bootstrap.js[13817:14373]", functionData => eval(functionData))})

    $(window).on('load', function() {
        $('[data-ride="carousel"]').each(function() {lacuna_lazy_load("/js/bootstrap.js[14469:14568]", functionData => eval(functionData))})
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function(element, options) {lacuna_lazy_load("/js/bootstrap.js[15202:15468]", functionData => eval(functionData))}

    Collapse.DEFAULTS = {
        toggle: true
    }

    Collapse.prototype.dimension = function() {lacuna_lazy_load("/js/bootstrap.js[15576:15686]", functionData => eval(functionData))}

    Collapse.prototype.show = function() {lacuna_lazy_load("/js/bootstrap.js[15731:17083]", functionData => eval(functionData))}

    Collapse.prototype.hide = function() {lacuna_lazy_load("/js/bootstrap.js[17128:18108]", functionData => eval(functionData))}

    Collapse.prototype.toggle = function() {lacuna_lazy_load("/js/bootstrap.js[18155:18227]", functionData => eval(functionData))}


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    var old = $.fn.collapse

    $.fn.collapse = function(option) {lacuna_lazy_load("/js/bootstrap.js[18373:18853]", functionData => eval(functionData))}

    $.fn.collapse.Constructor = Collapse


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[19005:19063]", functionData => eval(functionData))}


    // COLLAPSE DATA-API
    // =================

    $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function(e) {lacuna_lazy_load("/js/bootstrap.js[19210:19979]", functionData => eval(functionData))})

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // DROPDOWN CLASS DEFINITION
    // =========================

    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle=dropdown]'
    var Dropdown = function(element) {lacuna_lazy_load("/js/bootstrap.js[20667:20732]", functionData => eval(functionData))}

    Dropdown.prototype.toggle = function(e) {lacuna_lazy_load("/js/bootstrap.js[20780:21723]", functionData => eval(functionData))}

    Dropdown.prototype.keydown = function(e) {lacuna_lazy_load("/js/bootstrap.js[21772:22685]", functionData => eval(functionData))}

    function clearMenus(e) {lacuna_lazy_load("/js/bootstrap.js[22716:23198]", functionData => eval(functionData))}

    function getParent($this) {lacuna_lazy_load("/js/bootstrap.js[23232:23613]", functionData => eval(functionData))}


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    var old = $.fn.dropdown

    $.fn.dropdown = function(option) {lacuna_lazy_load("/js/bootstrap.js[23759:24051]", functionData => eval(functionData))}

    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[24203:24261]", functionData => eval(functionData))}


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function(e) {lacuna_lazy_load("/js/bootstrap.js[24501:24546]", functionData => eval(functionData))})
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var Modal = function(element, options) {lacuna_lazy_load("/js/bootstrap.js[25337:25743]", functionData => eval(functionData))}

    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    Modal.prototype.toggle = function(_relatedTarget) {lacuna_lazy_load("/js/bootstrap.js[25904:25982]", functionData => eval(functionData))}

    Modal.prototype.show = function(_relatedTarget) {lacuna_lazy_load("/js/bootstrap.js[26038:27515]", functionData => eval(functionData))}

    Modal.prototype.hide = function(e) {lacuna_lazy_load("/js/bootstrap.js[27558:28227]", functionData => eval(functionData))}

    Modal.prototype.enforceFocus = function() {lacuna_lazy_load("/js/bootstrap.js[28277:28618]", functionData => eval(functionData))}

    Modal.prototype.escape = function() {lacuna_lazy_load("/js/bootstrap.js[28662:28976]", functionData => eval(functionData))}

    Modal.prototype.hideModal = function() {lacuna_lazy_load("/js/bootstrap.js[29023:29223]", functionData => eval(functionData))}

    Modal.prototype.removeBackdrop = function() {lacuna_lazy_load("/js/bootstrap.js[29275:29365]", functionData => eval(functionData))}

    Modal.prototype.backdrop = function(callback) {lacuna_lazy_load("/js/bootstrap.js[29419:30820]", functionData => eval(functionData))}


    // MODAL PLUGIN DEFINITION
    // =======================

    var old = $.fn.modal

    $.fn.modal = function(option, _relatedTarget) {lacuna_lazy_load("/js/bootstrap.js[30970:31435]", functionData => eval(functionData))}

    $.fn.modal.Constructor = Modal


    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[31572:31627]", functionData => eval(functionData))}


    // MODAL DATA-API
    // ==============

    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {lacuna_lazy_load("/js/bootstrap.js[31764:32326]", functionData => eval(functionData))})

    $(document)
        .on('show.bs.modal', '.modal', function() {lacuna_lazy_load("/js/bootstrap.js[32398:32463]", functionData => eval(functionData))})
        .on('hidden.bs.modal', '.modal', function() {lacuna_lazy_load("/js/bootstrap.js[32518:32586]", functionData => eval(functionData))})

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================

    var Tooltip = function(element, options) {lacuna_lazy_load("/js/bootstrap.js[33264:33492]", functionData => eval(functionData))}

    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false
    }

    Tooltip.prototype.init = function(type, element, options) {lacuna_lazy_load("/js/bootstrap.js[33908:35012]", functionData => eval(functionData))}

    Tooltip.prototype.getDefaults = function() {lacuna_lazy_load("/js/bootstrap.js[35063:35104]", functionData => eval(functionData))}

    Tooltip.prototype.getOptions = function(options) {lacuna_lazy_load("/js/bootstrap.js[35161:35478]", functionData => eval(functionData))}

    Tooltip.prototype.getDelegateOptions = function() {lacuna_lazy_load("/js/bootstrap.js[35536:35786]", functionData => eval(functionData))}

    Tooltip.prototype.enter = function(obj) {lacuna_lazy_load("/js/bootstrap.js[35834:36294]", functionData => eval(functionData))}

    Tooltip.prototype.leave = function(obj) {lacuna_lazy_load("/js/bootstrap.js[36342:36804]", functionData => eval(functionData))}

    Tooltip.prototype.show = function() {lacuna_lazy_load("/js/bootstrap.js[36848:39756]", functionData => eval(functionData))}

    Tooltip.prototype.applyPlacement = function(offset, placement) {lacuna_lazy_load("/js/bootstrap.js[39827:41765]", functionData => eval(functionData))}

    Tooltip.prototype.replaceArrow = function(delta, dimension, position) {lacuna_lazy_load("/js/bootstrap.js[41843:41938]", functionData => eval(functionData))}

    Tooltip.prototype.setContent = function() {lacuna_lazy_load("/js/bootstrap.js[41988:42206]", functionData => eval(functionData))}

    Tooltip.prototype.hide = function() {lacuna_lazy_load("/js/bootstrap.js[42250:42899]", functionData => eval(functionData))}

    Tooltip.prototype.fixTitle = function() {lacuna_lazy_load("/js/bootstrap.js[42947:43171]", functionData => eval(functionData))}

    Tooltip.prototype.hasContent = function() {lacuna_lazy_load("/js/bootstrap.js[43221:43261]", functionData => eval(functionData))}

    Tooltip.prototype.getPosition = function() {lacuna_lazy_load("/js/bootstrap.js[43312:43574]", functionData => eval(functionData))}

    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {lacuna_lazy_load("/js/bootstrap.js[43674:44364]", functionData => eval(functionData))}

    Tooltip.prototype.getTitle = function() {lacuna_lazy_load("/js/bootstrap.js[44412:44654]", functionData => eval(functionData))}

    Tooltip.prototype.tip = function() {lacuna_lazy_load("/js/bootstrap.js[44697:44771]", functionData => eval(functionData))}

    Tooltip.prototype.arrow = function() {lacuna_lazy_load("/js/bootstrap.js[44816:44903]", functionData => eval(functionData))}

    Tooltip.prototype.validate = function() {lacuna_lazy_load("/js/bootstrap.js[44951:45107]", functionData => eval(functionData))}

    Tooltip.prototype.enable = function() {lacuna_lazy_load("/js/bootstrap.js[45153:45190]", functionData => eval(functionData))}

    Tooltip.prototype.disable = function() {lacuna_lazy_load("/js/bootstrap.js[45237:45275]", functionData => eval(functionData))}

    Tooltip.prototype.toggleEnabled = function() {lacuna_lazy_load("/js/bootstrap.js[45328:45374]", functionData => eval(functionData))}

    Tooltip.prototype.toggle = function(e) {lacuna_lazy_load("/js/bootstrap.js[45421:45614]", functionData => eval(functionData))}

    Tooltip.prototype.destroy = function() {lacuna_lazy_load("/js/bootstrap.js[45661:45786]", functionData => eval(functionData))}


    // TOOLTIP PLUGIN DEFINITION
    // =========================

    var old = $.fn.tooltip

    $.fn.tooltip = function(option) {lacuna_lazy_load("/js/bootstrap.js[45928:46333]", functionData => eval(functionData))}

    $.fn.tooltip.Constructor = Tooltip


    // TOOLTIP NO CONFLICT
    // ===================

    $.fn.tooltip.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[46480:46537]", functionData => eval(functionData))}

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // POPOVER PUBLIC CLASS DEFINITION
    // ===============================

    var Popover = function(element, options) {lacuna_lazy_load("/js/bootstrap.js[47158:47214]", functionData => eval(functionData))}

    if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })


    // NOTE: POPOVER EXTENDS tooltip.js
    // ================================

    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

    Popover.prototype.constructor = Popover

    Popover.prototype.getDefaults = function() {lacuna_lazy_load("/js/bootstrap.js[47849:47890]", functionData => eval(functionData))}

    Popover.prototype.setContent = function() {lacuna_lazy_load("/js/bootstrap.js[47940:48633]", functionData => eval(functionData))}

    Popover.prototype.hasContent = function() {lacuna_lazy_load("/js/bootstrap.js[48683:48744]", functionData => eval(functionData))}

    Popover.prototype.getContent = function() {lacuna_lazy_load("/js/bootstrap.js[48794:49025]", functionData => eval(functionData))}

    Popover.prototype.arrow = function() {lacuna_lazy_load("/js/bootstrap.js[49070:49149]", functionData => eval(functionData))}

    Popover.prototype.tip = function() {lacuna_lazy_load("/js/bootstrap.js[49192:49288]", functionData => eval(functionData))}


    // POPOVER PLUGIN DEFINITION
    // =========================

    var old = $.fn.popover

    $.fn.popover = function(option) {lacuna_lazy_load("/js/bootstrap.js[49430:49835]", functionData => eval(functionData))}

    $.fn.popover.Constructor = Popover


    // POPOVER NO CONFLICT
    // ===================

    $.fn.popover.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[49982:50039]", functionData => eval(functionData))}

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // SCROLLSPY CLASS DEFINITION
    // ==========================

    function ScrollSpy(element, options) {lacuna_lazy_load("/js/bootstrap.js[50649:51333]", functionData => eval(functionData))}

    ScrollSpy.DEFAULTS = {
        offset: 10
    }

    ScrollSpy.prototype.refresh = function() {lacuna_lazy_load("/js/bootstrap.js[51439:52425]", functionData => eval(functionData))}

    ScrollSpy.prototype.process = function() {lacuna_lazy_load("/js/bootstrap.js[52474:53385]", functionData => eval(functionData))}

    ScrollSpy.prototype.activate = function(target) {lacuna_lazy_load("/js/bootstrap.js[53441:54077]", functionData => eval(functionData))}


    // SCROLLSPY PLUGIN DEFINITION
    // ===========================

    var old = $.fn.scrollspy

    $.fn.scrollspy = function(option) {lacuna_lazy_load("/js/bootstrap.js[54227:54584]", functionData => eval(functionData))}

    $.fn.scrollspy.Constructor = ScrollSpy


    // SCROLLSPY NO CONFLICT
    // =====================

    $.fn.scrollspy.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[54741:54800]", functionData => eval(functionData))}


    // SCROLLSPY DATA-API
    // ==================

    $(window).on('load', function() {
        $('[data-spy="scroll"]').each(function() {lacuna_lazy_load("/js/bootstrap.js[54950:55035]", functionData => eval(functionData))})
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // TAB CLASS DEFINITION
    // ====================

    var Tab = function(element) {lacuna_lazy_load("/js/bootstrap.js[55622:55665]", functionData => eval(functionData))}

    Tab.prototype.show = function() {lacuna_lazy_load("/js/bootstrap.js[55705:56593]", functionData => eval(functionData))}

    Tab.prototype.activate = function(element, container, callback) {lacuna_lazy_load("/js/bootstrap.js[56665:57662]", functionData => eval(functionData))}


    // TAB PLUGIN DEFINITION
    // =====================

    var old = $.fn.tab

    $.fn.tab = function(option) {lacuna_lazy_load("/js/bootstrap.js[57788:58055]", functionData => eval(functionData))}

    $.fn.tab.Constructor = Tab


    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[58182:58235]", functionData => eval(functionData))}


    // TAB DATA-API
    // ============

    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(e) {lacuna_lazy_load("/js/bootstrap.js[58386:58451]", functionData => eval(functionData))})

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var Affix = function(element, options) {lacuna_lazy_load("/js/bootstrap.js[59048:59482]", functionData => eval(functionData))}

    Affix.RESET = 'affix affix-top affix-bottom'

    Affix.DEFAULTS = {
        offset: 0
    }

    Affix.prototype.getPinnedOffset = function() {lacuna_lazy_load("/js/bootstrap.js[59639:59930]", functionData => eval(functionData))}

    Affix.prototype.checkPositionWithEventLoop = function() {lacuna_lazy_load("/js/bootstrap.js[59994:60060]", functionData => eval(functionData))}

    Affix.prototype.checkPosition = function() {lacuna_lazy_load("/js/bootstrap.js[60111:61787]", functionData => eval(functionData))}


    // AFFIX PLUGIN DEFINITION
    // =======================

    var old = $.fn.affix

    $.fn.affix = function(option) {lacuna_lazy_load("/js/bootstrap.js[61921:62266]", functionData => eval(functionData))}

    $.fn.affix.Constructor = Affix


    // AFFIX NO CONFLICT
    // =================

    $.fn.affix.noConflict = function() {lacuna_lazy_load("/js/bootstrap.js[62403:62458]", functionData => eval(functionData))}


    // AFFIX DATA-API
    // ==============

    $(window).on('load', function() {
        $('[data-spy="affix"]').each(function() {lacuna_lazy_load("/js/bootstrap.js[62599:62901]", functionData => eval(functionData))})
    })

}(jQuery);