/*[/img/js/jcarousellite.js]*/
(function($) {                                          // Compliant with jquery.noConflict()
$.fn.jCarouselLite = function(o) {
    o = $.extend({
        btnPrev: null,
        btnNext: null,
        btnGo: null,
        mouseWheel: false,
        auto: null,

        speed: 200,
        easing: null,

        vertical: false,
        circular: true,
        visible: 3,
        start: 0,
        scroll: 1,

		direction:1,
		onMouse:true,		
        beforeStart: null,
        afterEnd: null
    }, o || {});

    return this.each(function() {                           // Returns the element collection. Chainable.

        var running = false, animCss=o.vertical?"top":"left", sizeCss=o.vertical?"height":"width";
	if(animCss == "top"  && o.direction == -1) animCss = "bottom";
	if(animCss == "left" && o.direction == -1) animCss = "right";
        var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible;

        if(o.circular) {
            ul.prepend(tLi.slice(tl-v-1+1).clone())
              .append(tLi.slice(0,v).clone());
            o.start += v;
        }

        var li = $("li", ul), itemLength = li.size(), curr = o.start;
        div.css("visibility", "visible");

        li.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
        ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
        div.css({overflow: "hidden", position: "relative", "z-index": "2", left: "0px"});

        var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
        var ulSize = liSize * itemLength;                   // size of full ul(total length, not just for the visible items)
        var divSize = liSize * v;                           // size of entire div(total length for just the visible items)

        li.css({width: li.width(), height: li.height()});
	if(animCss == "left" || animCss == "top")
		ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize));
	else if(animCss == "right")
		ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize)+ul.width()); 
	else if(animCss == "bottom")
		ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize)+ul.height()); 

        div.css(sizeCss, divSize+"px");                     // Width of the DIV. length of visible images

        if(o.btnPrev)
            $(o.btnPrev).click(function() {
                return go(curr-o.scroll);
            });

        if(o.btnNext)
            $(o.btnNext).click(function() {
                return go(curr+o.scroll);
            });

        if(o.btnGo)
            $.each(o.btnGo, function(i, val) {
                $(val).click(function() {
                    return go(o.circular ? o.visible+i : i);
                });
            });

        if(o.mouseWheel && div.mousewheel)
            div.mousewheel(function(e, d) {
                return d>0 ? go(curr-o.scroll) : go(curr+o.scroll);
            });

        if(o.auto)
            jCarouselLiteTime = setInterval(function() {
                go(curr+o.scroll);
            }, o.auto+o.speed);

		if (o.onMouse) {
			ul.bind("mouseover", function() { if (o.auto) { clearInterval(jCarouselLiteTime); } })
			ul.bind("mouseout", function() { if (o.auto) { jCarouselLiteTime = setInterval(function() { go(curr + o.scroll); }, o.auto + o.speed); } })
		}

        function vis() {
            return li.slice(curr).slice(0,v);
        };

        function go(to) {
            if(!running) {

                if(o.beforeStart)
                    o.beforeStart.call(this, vis());

                if(o.circular) {            // If circular we are in first or last, then goto the other end
                    if(to<=o.start-v-1) {           // If first, then goto last
                       			
			if(animCss == "left" || animCss == "top")
				 ul.css(animCss, -((itemLength-(v*2))*liSize)+"px");
			else if(animCss == "right")
				ul.css(animCss, -((itemLength-(v*2))*liSize)+ul.width()+"px");
			else if(animCss == "bottom")
				ul.css(animCss, -((itemLength-(v*2))*liSize)+ul.height()+"px");
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
                        curr = to==o.start-v-1 ? itemLength-(v*2)-1 : itemLength-(v*2)-o.scroll;
                    } else if(to>=itemLength-v+1) { // If last, then goto first
                       
			if(animCss == "left" || animCss == "top")
				 ul.css(animCss, -( (v) * liSize ) + "px" );
			else if(animCss == "right")
				ul.css(animCss, -( (v) * liSize )+ul.width() + "px" ); 
			else if(animCss == "bottom")
				ul.css(animCss, -( (v) * liSize )+ul.height() + "px" ); 
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
                        curr = to==itemLength-v+1 ? v+1 : v+o.scroll;
                    } else curr = to;
                } else {                    // If non-circular and to points to first or last, we just return.
                    if(to<0 || to>itemLength-v) return;
                    else curr = to;
                }                           // If neither overrides it, the curr will still be "to" and we can proceed.

                running = true;
		if(animCss == "left" || animCss == "top")
			ul.animate(
			    animCss == "left" ? { left: -(curr*liSize) } : { top: -(curr*liSize) } , o.speed, o.easing,
			    function() {
				if(o.afterEnd)
				    o.afterEnd.call(this, vis());
				running = false;
			    }
			);
		else if(animCss == "right")
			ul.animate(
			    { right: -(curr*liSize)+ul.width()} , o.speed, o.easing, 
			    function() {
				if(o.afterEnd)
				    o.afterEnd.call(this, vis());
				running = false;
			    }
			);
		else if(animCss == "bottom")
			ul.animate(
			    { bottom: -(curr*liSize)+ul.height()} , o.speed, o.easing, 
			    function() {
				if(o.afterEnd)
				    o.afterEnd.call(this, vis());
				running = false;
			    }
			);
                
                // Disable buttons when the carousel reaches the last/first, and enable when not
                if(!o.circular) {
                    $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                    $( (curr-o.scroll<0 && o.btnPrev)
                        ||
                       (curr+o.scroll > itemLength-v && o.btnNext)
                        ||
                       []
                     ).addClass("disabled");
                }

            }
            return false;
        };
    });
};

function css(el, prop) {
    return parseInt($.css(el[0], prop)) || 0;
};
function width(el) {
    return  el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
};
function height(el) {
    return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
};

})(jQuery);
/*[/static/bui/widget/placeholderusespan.js]*/
/*
 * jQuery placeholder plugin
 * Version 1.3.1 (23-MAR-2012)
 * @requires jQuery v1.3 or later
 *
 * Examples at: http://mario.ec/static/jq-placeholder/
 * Copyright (c) 2010 Mario Estrada
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function($) {
	var old_ie = (($.browser && $.browser.msie && $.browser.version < 8) || ($.support && !$.support.leadingWhitespace));
	$.placeholdero = function() {
	};
	$.extend($.placeholdero, {
		defaults : {
			color : '#999',
			fallback : true,
			animDuration : 300,
			minOpacity : 0.6
		},
		setDefaults : function(settings) {
			$.extend($.placeholdero.defaults, settings);
		},
		checkVal : function(val, label, event_blur) {
			if (val.length === 0)
				$(label).show();
			else
				$(label).hide();

			return val.length > 0;
		},
		html5_support : function() {
			var i = document.createElement('input');
			return 'placeholder' in i;
		}
	});

	$.fn.placeholder = function(text, _options) {
		var options, elems;
		options = $.extend($.placeholdero.defaults, _options);
		elems = this
				.filter('textarea, input:not(:checkbox,:radio,:file,:submit,:reset)');

		if (options.fallback && $.placeholdero.html5_support())
			return this;

		elems.each(function() {
			var $elem, attr_name, label_text, placeholder_container, placeholder_label;

			$elem = $(this);
			if ($elem.attr('data-jq-placeholder') == 'processed')
				return;

			attr_name = $elem.attr('placeholder') !== undefined
					&& $elem.attr('placeholder') !== '' ? 'placeholder'
					: 'title';
			label_text = text === undefined || text === '' ? $(this)
					.attr(attr_name) : text;
			if(label_text===undefined)return;
			placeholder_container = $('<span class="placeholder_container"></span>');
			placeholder_label = $('<span class="placeholder">' + label_text
					+ '</span>');

			// If used, remove the placeholder attribute to prevent conflicts
			if (attr_name == 'placeholder')
				$elem.removeAttr('placeholder');

			placeholder_container.css( {
				display : 'inline-block',
				position : 'relative',
                float: $elem.css('float'),
                width: '100%'
            });

			if ($elem.attr('data-percent-width') == 'true')
				placeholder_container.css('width', '100%');

			if ($elem.attr('data-percent-height') == 'true')
				placeholder_container.css('height', '100%');

			if (old_ie) {
				placeholder_container.css( {
					zoom : 1,
                    //display : 'inline'
					display : 'block'
				});
			}

			$elem.wrap(placeholder_container).attr('data-jq-placeholder',
					'processed');

            placeholder_label.css({
                overflow: 'hidden',
                whiteSpace: 'nowrap'
            });

            placeholder_label.css({
                position : 'absolute',
                display : 'block',
                fontFamily : $elem.css('font-family'),
                fontSize : $elem.css('font-size'),
                color : options.color,
                left: 0,
                top: 0,
                //top: $elem.position().top + 'px',
                //padding: $elem.css('padding'), // IE 8 报错
                paddingLeft: $elem.css('padding-left'),
                paddingRight: $elem.css('padding-right'),
                paddingTop: $elem.css('padding-top'),
                paddingBottom: $elem.css('padding-bottom'),
                //margin: $elem.css('margin'),
                marginLeft: $elem.css('margin-left'),
                marginRight: $elem.css('margin-right'),
                marginTop: $elem.css('margin-top'),
                marginBottom: $elem.css('margin-bottom'),
                width: '100%',
                //width: $elem.outerWidth(),
                height: $elem.outerHeight() || $elem.css('font-size'),
                //lineHeight: ($elem.outerHeight() || $elem.css('font-size')) + 'px',
				//height : e_height,
				lineHeight : $elem.css('line-height'),
				textAlign : 'left',
				pointerEvents : 'none'
			}).data('jq_placeholder_element', $elem);

            placeholder_label.click(function() {
                $($(this).data('jq_placeholder_element'))
                        .trigger('click').trigger('focus');
            });

			placeholder_label.click(function() {
				$($(this).data('jq_placeholder_element'))
						.trigger('click').trigger('focus');
			});

            // 添加空节点，解决IE6bug
            $elem.before(document.createTextNode("\n"));

			$elem.before(placeholder_label).bind(
					'focus.jq_placeholder',
					function() {
						if (!$.placeholdero.checkVal($(this).val(),
								placeholder_label))
							placeholder_label.stop().fadeTo(
									options.animDuration,
									options.minOpacity);
					}).bind(
					'blur.jq_placeholder change.jq_placeholder',
					function() {
						if (!$.placeholdero.checkVal($(this).val(),
								placeholder_label))
							placeholder_label.stop().fadeTo(
									options.animDuration, 1);
					}).bind('keydown.jq_placeholder, paste.jq_placeholder',
					function(e) {
						$(placeholder_label).hide();
					}).bind('keyup.jq_placeholder', function(e) {
				$.placeholdero.checkVal($(this).val(), placeholder_label);
			});
		});

		return this;
	};

	//$(function() {
		//$('textarea[placeholder],input[placeholder]').placeholder();
	//});
})(jQuery);
/*[/static/bui/widget/typeahead.js]*/
(function(global, $, document, undefined){
    'use strict';

    /*
     * TYPEAHEAD PUBLIC CLASS DEFINITION
     */
    function Typeahead(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.typeahead.defaults, options);
        this.matcher = this.options.matcher || this.matcher;
        this.sorter = this.options.sorter || this.sorter;
        this.highlighter = this.options.highlighter || this.highlighter;
        this.updater = this.options.updater || this.updater;
        this.$menu = $(this.options.menu).appendTo('body');

        this.source = this.options.source;
        this.shown = false;
        this.listen();
    }

    Typeahead.prototype = {
        constructor: Typeahead, 
    
        select: function () {
            var val = this.$menu.find('.active').attr('data-value');
            this.$element.val(this.updater(val))
                    .change()
                    .focus();

            return this.hide();
        }, 
    
        updater: function (item) {
            return item;
        }, 
    
        show: function () {
            var pos = $.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
    
            this.$menu.css({
                top: pos.top + pos.height, 
                left: pos.left
            });
    
            this.$menu.show();
            this.shown = true;
            return this;
        }, 
    
        hide: function () {
            this.$menu.hide();
            this.shown = false;
            return this;
        }, 
    
        lookup: function (event) {
            var items,
                index;
    
            this.query = this.$element.val();
    
            index = this.query.indexOf(this.options.trigger);
    
            if (this.options.trigger) {
                if (index === -1) {
                    return this.shown ? this.hide() : this;
                } else {
                    this.query = this.query.substr(index + 1);
                }
            }
    
            // 兼顾minLength=0的情况
            if ((!this.query && this.options.minLength) || this.query.length < this.options.minLength) {
                return this.shown ? this.hide() : this;
            }

            if ($.isFunction(this.source)) {
                items = this.source(this.query, $.proxy(this.process, this));
            } else {
                items = [].concat(this.source);
            }

            return items ? this.process(items) : this;
        }, 
    
        process: function (items) {
            var that = this;
            //是否对服务器端返回数据做过滤
            //items = $.grep(items, function (item) {
                //return that.matcher(item);
            //});
    
            items = this.sorter(items);

            if (!items.length) {
                return this.shown ? this.hide() : this;
            }
    
            // ptions.items为0，则表示显示所有数据项
            items = items.slice(0, this.options.items || items.length);
            return this.render(items).show();
        }, 
    
        matcher: function (item) {
            return ~item.toLowerCase().indexOf(this.query.toLowerCase());
        }, 
    
        sorter: function (items) {
            var beginswith = [], 
                caseSensitive = [], 
                caseInsensitive = [], 
                item;
                item = items.shift();

            while (item) {
                if (!item.toLowerCase().indexOf(this.query.toLowerCase())) {
                    beginswith.push(item);
                } else if (~item.indexOf(this.query)) {
                    caseSensitive.push(item);
                } else {
                    //caseInsensitive.push(item);
                }
                item = items.shift();
            }
    
    
            return beginswith.concat(caseSensitive, caseInsensitive);
        }, 
    
        highlighter: function (item) {
            var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
            return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                return '<strong>' + match + '</strong>';
            });
        }, 
    
        render: function (items) {
            var that = this,
                index,
                ahead = '';
    
            this.query = this.$element.val();

            index = this.query.indexOf(this.options.trigger);
    
            if (this.options.trigger) {
                if (index !== -1) {
                    ahead = this.query.substring(0, index + 1);
                }
            }
    
            items = $(items).map(function (i, item) {
                item = ahead + item;
                i = $(that.options.item).attr('data-value', item);
                i.find('a').html(that.highlighter(item));
                return i[0];
            });

            items.first().addClass('active');
            this.$menu.html(items).width(this.$element.outerWidth());
            return this;
        }, 
    
        next: function (event) {
            var active = this.$menu.find('.active').removeClass('active'), 
            next = active.next();
    
            if (!next.length) {
                next = $(this.$menu.find('li')[0]);
            }
    
            next.addClass('active');
        }, 
    
        prev: function (event) {
            var active = this.$menu.find('.active').removeClass('active'), 
            prev = active.prev();
    
            if (!prev.length) {
                prev = this.$menu.find('li').last();
            }
    
            prev.addClass('active');
        }, 
    
        listen: function () {
            this.$element.bind('blur', $.proxy(this.blur, this))
                    .bind('keypress', $.proxy(this.keypress, this))
                    .bind('keyup', $.proxy(this.keyup, this));
    
            if ($.browser.webkit || $.browser.msie) {
                this.$element.bind('keydown', $.proxy(this.keydown, this));
            }
    
            this.$menu.bind('click', $.proxy(this.click, this))
                    .delegate( 'li','mouseenter', $.proxy(this.mouseenter, this));
        }, 
    
        move: function (e) {
            if (!this.shown) {
                return;
            }
    
            switch(e.keyCode) {
                case 9: // tab
                case 13: // enter
                case 27: // escape
                    e.preventDefault();
                    break;
    
                case 38: // up arrow
                    e.preventDefault();
                    this.prev();
                    break;
    
                case 40: // down arrow
                    e.preventDefault();
                    this.next();
                    break;
            }
    
            e.stopPropagation();
        }, 
    
        keydown: function (e) {
            // down arrow: 40
            // up arrow: 38
            // tab: 9
            // enter: 13
            // esc: 27
            this.suppressKeyPressRepeat = !~$.inArray(e.keyCode, [40,38,9,13,27]);
            this.move(e);
        }, 
    
        keypress: function (e) {
            if (this.suppressKeyPressRepeat) {
                return;
            }
            this.move(e);
        }, 
    
        keyup: function (e) {
            switch (e.keyCode) {
                case 40: // down arrow
                case 38: // up arrow
                    break;
    
                case 9: // tab
                case 13: // enter
                    // 触发回车键有可能是IME输入法的输入
                    if (!this.shown) {
                        this.lookup();
                    } else {
                        this.select();
                    }
                    break;
    
                case 27: // escape
                    if (!this.shown) {
                        return;
                    }
                    this.hide();
                    break;
    
                default:
                    this.lookup();
            }
    
            e.stopPropagation();
            e.preventDefault();
        }, 
    
        blur: function (e) {
            var that = this;
            window.setTimeout(function () { that.hide(); }, 150);
        }, 
    
        click: function (e) {
            e.stopPropagation();
            e.preventDefault();
            this.select();
        }, 
    
        mouseenter: function (e) {
            this.$menu.find('.active').removeClass('active');
            $(e.currentTarget).addClass('active');
        }

    };


    /*
    * TYPEAHEAD PLUGIN DEFINITION ===========================
    */

    $.fn.typeahead = function (option) {
        return this.each(function () {
            var $this = $(this), 
                data = $this.data('typeahead'), 
                options = typeof option == 'object' && option;

            if (!data) {
                data = new Typeahead(this, options);
                $this.data('typeahead', data);
            }
            if (typeof option == 'string') {
                data[option]();
            }
        });
    };

    $.fn.typeahead.defaults = {
            source: [], 
            items: 8, 
            menu: '<ul class="bui-typeahead-menu"></ul>', 
            item: '<li><a href="#"></a></li>', 
            minLength: 1,
            trigger: ''
    };

    $.fn.typeahead.Constructor = Typeahead;


    /*
    * TYPEAHEAD DATA-API ==================
    */

    $(function () {
        $('body').delegate('[data-provide="typeahead"]','focus.typeahead.data-api', function (e) {
            var $this = $(this);
            if ($this.data('typeahead')) {return;}
            e.preventDefault();
            $this.typeahead($this.data());
        });
    });

})(this, jQuery, document);
/*[/static/bui/mtn/topic.js]*/
(function (global, $, document, undefined) {
    'use strict';

    var topics = $({}),
        slice = [].slice;

    function wrapper(fn) {
        return function () {
            fn.apply(this, slice.call(arguments, 1));
        };
    }

    $.subscribe = function (topic, callback) {
        topics.bind(topic, wrapper(callback));
        //topics.bind.apply(topics, arguments);
    };

    $.unsubscribe = function () {
        topics.unbind.apply(topics, arguments);
    };

    $.publish = function () {
        topics.trigger.apply(topics, arguments);
        //topics.trigger(arguments[0], slice.call(arguments, 1));
    };

    $.fn.subscribe = function (topic, callback) {
        this.bind(topic, wrapper(callback));
    };

    $.fn.unsubscribe = function () {
        this.unbind.apply(this, arguments);
    };

    $.fn.publish = function () {
        this.trigger.apply(this, arguments);
    };
}(this, jQuery, document));
/*[/static/bui/mtn/validate.js]*/
/**
 * 基于表单元素的检查器
 */
(function (global, $, document, undefined) {
    'use strict';

    function Validate(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, this.$element.data(), options);
        if (this.options.type) {
            this.options[this.options.type] = this.options.type;
        }
    }

    Validate.prototype = {
        constructor: Validate,

        checkValidity: function (skipAjax) {
            var options = this.options,
                defaults = $.fn.validate.defaults,
                that = this,
                value = that.$element.val(),
                type,
                i,
                len,
                xhr,
                data;

            for (i = 0, len = defaults.pattern.length; i < len; i += 1) {
                type = defaults.pattern[i];

                if (options.hasOwnProperty(type)) {
                    if (!defaults.regexp[type].test(value, options[type])) {

                        return options[type + 'Message'] ||
                            options.message ||
                            defaults.message[type];
                    }
                }
            }

            if (options.hasOwnProperty('pattern')) {
                if (typeof options.pattern === 'string') {
                    options.pattern = new RegExp(options.pattern);
                }

                if (!options.pattern.test(value)) {

                    return options[type + 'Message'] ||
                        options.message ||
                        defaults.message[type];
                }
            }

            // 当需要ajax验证时，需要根据validate和validated事件自己确定是否验证成功
            // 如果返回值不存在status属性，则需要覆盖.data('ajax-result')
            if (options.hasOwnProperty('ajax')) {
                if (skipAjax) {
                    return that.$element.data('ajax-result') || true;
                } else {
                    xhr = that.$element.data('xhr');
                    if (xhr) {
                        xhr.abort();
                    }
                 
                    data = {};
                    data[that.$element.attr('name')] = that.$element.val();

                    that.$element.data('ajax-result', false);
                    that.$element.publish('validate.ajax');
                    xhr = $.getJSON(options.ajax, data).done(function (response) {
                        if (data.status === 'success') {
                            that.$element.data('ajax-result', true);
                        }
                        that.$element.publish('validated.ajax', response);
                    });
                    that.$element.data('xhr', xhr);
                    //return false;
                }
            }

            return true;
        }
    };

    $.fn.validate = function (option) {
        return this.each(function () {
            var $this = $(this),
                data,
                options;

            if (!$this.is('input[data-toggle=validate],textarea[data-toggle=validate]') ||
                    $this.data('toggle') !== 'validate') {
                return;
            }

            data = $this.data('validate');
            options = $.isPlainObject(option) && option;

            if (!data) {
                data = new Validate(this, options);
                $this.data('validate', data);
            }

            if (typeof option === 'string') {
                data[option]();
            }
        });
    };

    $.fn.validate.defaults = {
        pattern: ['required', 'phone', 'email', 'number', 'minSize', 'maxSize'],
        regexp: {
            required: /^[\s\S]+$/,
            phone: /^1\d{10}$/,
            email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            number: /^-?\d+$/,
            minSize: {
                test: function (value, min) {
                    value = value || '';
                    if (min === undefined) {
                        min = Number.MIN_VALUE;
                    } else {
                        min = Number(min);
                    }
                 
                    return value.length >= min;
                }
            },
            maxSize: {
                test: function (value, max) {
                    value = value || '';
                 
                    if (max === undefined) {
                        max = Number.MAX_VALUE;
                    } else {
                        max = Number(max);
                    }
                 
                    return value.length <= max;
                }
            }
        },

        message: {
            required: '必填',
            phone: '电话号码格式不对',
            email: '电子邮箱格式不对',
            number: '应填数字'
        }
    };

    $(document).delegate('input[data-toggle=validate],textarea[data-toggle=validate]',
            'focus', function () {

        var $this = $(this);
            
        if ($this.data('validate')) {
            return;
        }

        $this.validate();
    });
}(this, jQuery, document));
/*[/static/bui/mtn/helper.js]*/
(function (global, $, document, undefined) {
    'use strict';

    function getSelector($this) {
        var selector = $this.attr('data-target') || $this.attr('href');

        // 去除#号前面的任意字符，for IE7
        if (selector) {
            selector = selector.replace(/.*(?=#[\S]+$)/, '');
        }

        return selector;
    }


    function getTarget($this) {
        var $target = $(getSelector($this));
        
        return $target.length ? $target : null;
    }

    /**
     * 获取页面实际宽度
     * @method getScrollWidth
     * @return {Number} 页面实际宽度
     */
    function getScrollWidth() {
        return Math.max(document.documentElement.clientWidth, document.body.scrollWidth);
    }

    /**
     * 获取页面实际高度
     * @method getScrollHeight
     * @return {Number} 页面实际高度
     */
    function getScrollHeight() {
        return Math.max(document.documentElement.clientHeight, document.body.scrollHeight);
    }

    function getContentWidth() {
        // IE 8 标准模式
        if (document.compatMode === 'CSS1Compat') {
            return document.documentElement.clientWidth;
        }

        // IE 8 怪异模式
        return document.body.clientWidth;
    }

    function getViewportWidth() {
        if (global.innerWidth) {
            return global.innerWidth;
        }

        // IE 8 标准模式
        if (document.compatMode === 'CSS1Compat') {
            return document.documentElement.offsetWidth;
        }

        // IE 8 怪异模式
        return document.body.clientWidth;
    }

    /**
     * 获取滚动条宽度
     */
    function getScrollBarWidth() {
        return getViewportWidth() - getContentWidth();
    }

    function loadStyleString(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        try {
            style.appendChild(document.createTextNode(css));
        } catch (ex) {
            style.styleSheet.cssText = css;
        }
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }

    $.mtn = $.mtn || {};

    $.mtn.helper = {
        //getViewportWidth: getViewportWidth,
        //getContentWidth: getContentWidth,
        getSelector: getSelector,
        getTarget: getTarget,
        getScrollWidth: getScrollWidth,
        getScrollHeight: getScrollHeight,
        getScrollBarWidth: getScrollBarWidth,
        loadStyleString: loadStyleString,
		/*
		 * 生成伪GUID http://baike.baidu.com/view/185358.htm 利用random随机数
         * IE下不符合此规则
		 */
		guid : function() {
			var tmpl = Math.random().toString(31).substr(2, 32);
			return tmpl.replace(/(\S{8})(\S{4})(\S{4})(\S{4})(\S{12})/, '$1-$2-$3-$4-$5');
		}
    };

}(this, this.jQuery || this.Zepto, this.document));
/*[/static/bui/mtn/overlay.js]*/
/**
 * overlay.js
 */

(function (global, $, document, undefined) {
    var helper = $.mtn.helper;

    function getOverlayIn() {
        var barWidth = 'barWidth',
            overlayIn = 'html.overlay-in{overflow:hidden;padding-right:' + barWidth + 'px;width:auto;}';
        return overlayIn.replace(barWidth, helper.getScrollBarWidth());
    }

    function getOverlay(overlay) {
        // 借壳
        var $overlay = $('.bui-popup-overlay.in:visible');

        if (!$overlay.length) {
            $overlay = $(overlay);
        }

        return $overlay;
    }

    function Overlay(selector, options) {
        options = $.extend({}, $.fn.overlay.defaults, options);

        this.options = options;

        this.$overlay = getOverlay(options.template);

        this.$element = $(selector);

        if (options.onshow) {
            this.$element.bind('show', options.onshow);
        }
        if (options.onshown) {
            this.$element.bind('shown', options.onshown);
        }
        if (options.onclose) {
            this.$element.bind('close', options.onclose);
        }
        if (options.onclosed) {
            this.$element.bind('closed', options.onclosed);
        }
    }

    Overlay.prototype = {
        constructor: Overlay,

        show: function () {
            var $html,
                $overlay = this.$overlay,
                $element,
                $close,
                options,
                e;

            // 尝试对已存在overlay关闭
            if ($.contains(document.body, $overlay[0])) {
                $element = $overlay.find('.bui-popup-dialog').children().last();
                if ($element.data('overlay')) {
                    $element.data('overlay').empty();
                }

                if ($.contains($overlay[0], $element[0])) {
                    return;
                }
            }

            $html = $(document.documentElement);
            $element = this.$element;
            $close;
            options = this.options;
            e = $.Event('show');

            $element.trigger(e);

            if (e.isDefaultPrevented()) {
                return;
            }

            if (options.overlayClick) {
                $overlay.data('overlayClick', true);
            }

            // overlay-in CSS类，动态生成
            if (!$html.hasClass('overlay-in')) {
                this.overlayIn = helper.loadStyleString(getOverlayIn());
                $html.addClass('overlay-in');
            }

            if (!$element.find('.bui-close').length) {
                $close = $(options.close);
                $overlay.find('.bui-popup-dialog').append($close);
            }
            $overlay.find('.bui-popup-dialog').append(this.$element);

            function addElement() {
                var e = $.Event('shown');
                $element.trigger(e);
            }

            if (!$.contains(document.body, $overlay[0])) {
                $(document.body).append($overlay);
                $overlay[0].offsetWidth;
                if ($.support.transitionend) {
                    $overlay.one($.support.transitionend, addElement);
                    $overlay.addClass('in');
                } else {
                    $overlay.addClass('in');
                    addElement();
                }
            } else {
                addElement();
            }
        },

        empty: function () {
            var $element = this.$element,
                overlayIn = this.overlayIn;

            e = $.Event('close');
            $element.trigger(e);

            if (e.isDefaultPrevented()) {
                return;
            }

            e = $.Event('closed');
            $element.trigger(e);
            $element.remove();
        },

        close: function (e) {
            var $overlay,
                $element,
                overlayIn;

            if (this instanceof Overlay) {
                $overlay = this.$overlay;
                $element = this.$element;
                overlayIn = this.overlayIn;
            } else if (e) {
                e.preventDefault();
                $overlay = $(this).closest('.bui-popup-overlay');
                //$element = $($overlay.find('.bui-popup-dialog')[0].firstChild);
                $element = $overlay.find('.bui-popup-dialog').children().last();
                if ($element.data('overlay')) {
                    $element.data('overlay').close();
                    return;
                }
            }

            e = $.Event('close');
            $element.trigger(e);

            if (e.isDefaultPrevented()) {
                return;
            }

            function removeElement() {
                var e = $.Event('closed');
                $element.trigger(e);
                $overlay.remove();
                $(document.documentElement).removeClass('overlay-in');
                if (overlayIn) {
                    overlayIn.parentNode.removeChild(overlayIn);
                }
            }

            if ($.support.transitionend) {
                $overlay.one($.support.transitionend, removeElement);
                $overlay.removeClass('in');
            } else {
                removeElement();
            }
        }
    };

    $.fn.overlay = function (option) {
        option = option || 'show';

        return this.each(function () {
            var $this = $(this),
                data = $this.data('overlay'),
                options;

            if ($.isPlainObject(option)) {
                options = option;
                option = 'show';
            }

            if (!data) {
                data = new Overlay($this, options);
                $this.data('overlay', data);
            }

            if (typeof option === 'string') {
                data[option]();
            }
        });
    };

    $.fn.overlay.defaults = {
        template: '<div class="bui-popup-overlay"><div class="bui-popup-dialog"></div><span class="bui-popup-align"></span></div>',
        close: '<button class="bui-close" hidefocus="hidefocus" data-toggle="close.overlay"></button>',
        loading: '<div class="loading"></div>',
        onshow: null,
        onshown: null,
        onclose: null,
        onclosed: null
            
    };

    $.fn.overlay.Constructor = Overlay;

    $(document).delegate('[data-toggle="show.overlay"]', 'click', function () {
        var $this = $(this),
            $target = helper.getTarget($this),
            url = $this.data('url') || $this.attr('href'),
            options = $this.data();

        if ($target) {
            $($.trim($target.html())).overlay(options);
        } else if(url) {
            $($.fn.overlay.defaults.loading).overlay();
            $.get(url, function (data) {
                $($.trim(data)).overlay(options);
            });
        }

        return false;
    });

    //$(document).delegate('[data-toggle="close.overlay"]', 'click', Overlay.prototype.close);

    $(document).delegate('.bui-popup-overlay', 'click', function (e) {
        var target = e.target,
            current = e.currentTarget;

        if (target.getAttribute('data-toggle') === 'close.overlay' ||
                // <a data-toggle="close.overlay"><span>close</span></a>
                $(target).closest('[data-toggle="close.overlay"]').length ||
                (current === target && $(current).data('overlayClick'))) {

            Overlay.prototype.close.call(this, e);
        }
    });
}(this, this.jQuery, this.document));
/*[/static/bui/mtn/date/dateSelector.js]*/
/**
 * Date Selector
 * -------------
 * Date Selector组的select元素的mouseenter事件触发实例化。
 * 将实例化后的对象存储在.data-selector元素上
 * 备注：
 * 绑定在mouseenter是为了当用户触发其他可能的操作（click，focus）之前将数据准备好
 */
(function (global, $) {
    "use strict";

    var document = global.document;

    function DateSelector(selector, options) {
        var $element = $(selector);

        this.$element = $element;
        this.options = $.extend({}, $.fn.dateSelector.defaults, options);

        this.$year = $element.find("select[data-toggle=date-selector-year]");
        this.$month = $element.find("select[data-toggle=date-selector-month]");
        this.$date = $element.find("select[data-toggle=date-selector-date]");

        this.refresh();

        if (this.$year.length && this.$date.length) {
            //this.$year.on("change.dateSelector", $.proxy(this.date, this));
            this.$year.bind("change.dateSelector", $.proxy(this.date, this));
        }

        if (this.$month.length && this.$date.length) {
            //this.$month.on("change.dateSelector", $.proxy(this.date, this));
            this.$month.bind("change.dateSelector", $.proxy(this.date, this));
        }

    }

    DateSelector.prototype = {
        constructor: DateSelector,

        /*
         * 刷新年选择框
         */
        refreshYear: function (year) {
            var years = [],
                start = this.options.start || year - this.options.delta,
                end = this.options.end || +year + this.options.delta,
                i;

            for (i = end; i >= start; i -= 1) {
                if (i === +year) {
                    years.push("<option selected>" + i + "</option>");
                } else {
                    years.push("<option>" + i + "</option>");
                }
            }

            this.$year.html(years.join(""));
            //this.setYear(year);
        },

        /*
         * 设置年，并
         */
        setYear: function (year) {
            var that = this;
            if (this.$year.length) {
                that.$year.val(year);
                /*
                setTimeout(function () {
                    that.$year.val(year);
                }, 0);
                */
            } else if (this.$month.length) {
                this.$month.data("year", year).trigger("change.dateSelector");
            }
        },

        getYear: function () {
            return parseInt(this.$year.val() || this.$month.data("year"), 10);
        },

        /*
         * 刷新月选择框
         */
        refreshMonth: function (month) {
            var months = [],
                start = 1,
                end = 12,
                i;

            for (i = start; i <= end; i += 1) {
                if (i === +month) {
                    months.push("<option selected>" + i + "</option>");
                } else {
                    months.push("<option>" + i + "</option>");
                }
            }

            this.$month.html(months.join(""));
            //this.setMonth(month);
        },

        setMonth: function (month) {
            var that = this;
            that.$month.val(month);
            /*
            setTimeout(function () {
                that.$month.val(month);
            }, 0);
            */
        },

        getMonth: function () {
            return parseInt(this.$month.val(), 10);
        },

        /*
         * 刷新日选择框
         */
        refreshDate: function (date) {
            var dates = [],
                start = 1,
                end,
                i;

            switch (+this.getMonth()) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                end = 31;
                break;

            case 2:
                end = this.isLeapYear() ? 29 : 28;
                break;

            default:
                end = 30;
                break;
            }

            for (i = start; i <= end; i += 1) {
                if (i === +date) {
                    dates.push("<option selected>" + i + "</option>");
                } else {
                    dates.push("<option>" + i + "</option>");
                }
            }
            this.$date.html(dates.join(""));
            //this.setDate(date);
        },

        setDate: function (date) {
            var that = this;
            that.$date.val(date);
            /*
            setTimeout(function () {
                that.$date.val(date);
            }, 0);
            */
        },

        getDate: function () {
            return parseInt(this.$date.val(), 10);
        },

        refresh: function () {
            var start,
                end;
            if (this.$year.length) {
                start = this.$year.data("start");
                if (start) {
                    start = parseInt(start, 10);
                    //start = Math.min(start, this.getYear());
                    this.options.start = start;
                }
         
                end = this.$year.data("end");
                if (end) {
                    end = parseInt(end, 10);
                    //end = Math.max(end, this.getYear());
                    this.options.end = end;
                }
            }
         
            if (!this.$year.length && !this.$month.data("year")) {
                this.$month.data("year", new Date().getFullYear());
            }

            this.refreshYear(this.getYear());
            this.refreshMonth(this.getMonth());
            this.refreshDate(this.getDate());
        },

        // data: yyyy/M/dd
        set: function (date) {
            var parts = date.split("/");

            this.setYear(parts[0]);
            this.setMonth(parts[1]);
            if (parts[2]) {
                this.setDate(parts[2]);
            }
        },

        isLeapYear: function () {
            var year = this.getYear();
            return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        },

        get: function () {
            return this.getYear() + '/' + this.getMonth() + '/' + this.getDate();
        },

        date: function () {
            this.refreshDate(this.getDate());
        }
    };

    $.fn.dateSelector = function (option, date) {
        return this.each(function () {
            var $this = $(this),
                $target = $this.closest(".date-selector, [data-toggle=date-selector]"),
                data = $target.data("dateSelector"),
                options;

            if (!data) {
                if ($.isPlainObject(option)) {
                    options = option;
                }
                data = new DateSelector($target, options);
                $target.data("dateSelector", data);
            }

            if (typeof option === "string") {
                data[option](date);
            }
        });
    };

    $.fn.dateSelector.Constructor = DateSelector;

    $.fn.dateSelector.defaults = {
        delta: 6
    };

    //$(document).on("mouseenter.dateSelector.data-api", "select[data-toggle^=date-selector]", function (e) {
    $(document).delegate("select[data-toggle^=date-selector]",
            "mouseenter.dateSelector.data-api", function (e) {

        var $this = $(this),
            $target = $this.closest(".date-selector, [data-toggle=date-selector]");
        if (!$target.data("dateSelector")) {
            $target.dateSelector();
        }
    });
}(this, this.jQuery));
/*[/static/bui/extension/sso/client.js]*/
if (typeof bui == "undefined") {
	bui = {};
}

bui.sso = (function($) {
	var SETTING = {
		action : {
			// register : 'register',
			login : 'login',
			logout : 'logout',
			hasEmail : 'has_email',
			hasNickname : 'has_nickname'
		}
	},

	// cookie为K-V对象
	setCookie = function(urls, data, complete, fail) {
		var length = urls.length, actived = 0;
		function handle() {
			if (actived == length) {
				if(complete) complete();
			}
		}
		$.each(urls, function(index, url) {
			$.ajax({
				url : unescape(url) + '?jsoncallback=?',
				timeout : 1000,
				data : data,
				dataType : 'jsonp',
				success : function() {
					actived++;
					handle();
				},
				error : function(jqXHR, textStatus, errorThrown) {
                    // 注释掉，如果需要回调fail方法，只需解开此注释
                    // 要求：后台代码需要返回正确的JSON格式字符串
					//fail && fail(jqXHR, textStatus, errorThrown);
					actived++;
					handle();
				}
			});
		});

		handle();
	},

	getWrapper = function(success) {
		return function(data, textStatus, jqXHR) {
			if (data.status == 1) {
				var cookies = data.data.cookies ? $.extend({
					'enc_user_id' : data.data.enc_user_id
				}, data.data.cookies) : undefined;

				setCookie(data.data.partner_urls, cookies, function() {
					success(data, textStatus, jqXHR);
				});
			} else {
				success(data, textStatus, jqXHR);
			}
		};
	},

	getJSON = function(data, success, fail) {
		var baseUrl = 'https://sso.babytree.com/sso/sso.ajax.php?jsoncallback=?';
        if (bui.sso.domain) {
            if (bui.sso.https) {
		        baseUrl = 'https://' + bui.sso.domain + '/sso/sso.ajax.php?jsoncallback=?';
            } else {
                baseUrl = 'http://' + bui.sso.domain + '/sso/sso.ajax.php?jsoncallback=?';
            }
        } 
		$.ajax({
			url : baseUrl,
			data : data,
			dataType : 'jsonp',
			success : success,
			error : fail
		});
	};

	return {
		hasEmail : function(email, success, fail) {
			var data = {
				action : SETTING.action.hasEmail,
				email : email
			};
			getJSON(data, success, fail);
		},
		hasNickname : function(nickname, success, fail) {
			var data = {
				action : SETTING.action.hasNickname,
				nickname : nickname
			};
			getJSON(data, success, fail);
		},
		/*
		 * register : function(object, success, fail) { var data = $.extend({
		 * action : SETTING.action.register }, object); getJSON(data,
		 * getWrapper(success), fail); },
		 */
		login : function(email, password, success, fail, extraData) {
			var data = {
				action : SETTING.action.login,
				email : email,
				password : password
			};
            if (typeof fail === 'object' && extraData === undefined) {
                extraData = fail;
            }
            $.extend(data, extraData);
			getJSON(data, getWrapper(success), fail);
		},
		logout : function(success, fail) {
			var data = {
				action : SETTING.action.logout
			};
			getJSON(data, getWrapper(success), fail);
		},
		setLoginCookie : function(apiList, lCookie, nlCookie, success, fail) {
			setCookie(apiList, {
				L : lCookie,
				NL : nlCookie
			}, success, fail);
		},
		setLogoutCookie : function(apiList, success, fail) {
			setCookie(apiList, undefined, success, fail);
		}
	};
}(jQuery));
/*[/img/ng/lib/jsencrypt/2.1.0/jsencrypt.min.js]*/
var JSEncryptExports={};(function(exports){var dbits;var canary=0xdeadbeefcafe;var j_lm=(canary&16777215)==15715070;function BigInteger(a,b,c){if(a!=null)if("number"==typeof a)this.fromNumber(a,b,c);else if(b==null&&"string"!=typeof a)this.fromString(a,256);else this.fromString(a,b)}function nbi(){return new BigInteger(null)}function am1(i,x,w,j,c,n){while(--n>=0){var v=x*this[i++]+w[j]+c;c=Math.floor(v/67108864);w[j++]=v&67108863}return c}function am2(i,x,w,j,c,n){var xl=x&32767,xh=x>>15;while(--n>=0){var l=this[i]&32767;var h=this[i++]>>15;var m=xh*l+h*xl;l=xl*l+((m&32767)<<15)+w[j]+(c&1073741823);c=(l>>>30)+(m>>>15)+xh*h+(c>>>30);w[j++]=l&1073741823}return c}function am3(i,x,w,j,c,n){var xl=x&16383,xh=x>>14;while(--n>=0){var l=this[i]&16383;var h=this[i++]>>14;var m=xh*l+h*xl;l=xl*l+((m&16383)<<14)+w[j]+c;c=(l>>28)+(m>>14)+xh*h;w[j++]=l&268435455}return c}if(j_lm&&navigator.appName=="Microsoft Internet Explorer"){BigInteger.prototype.am=am2;dbits=30}else if(j_lm&&navigator.appName!="Netscape"){BigInteger.prototype.am=am1;dbits=26}else{BigInteger.prototype.am=am3;dbits=28}BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=(1<<dbits)-1;BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC=new Array;var rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;function int2char(n){return BI_RM.charAt(n)}function intAt(s,i){var c=BI_RC[s.charCodeAt(i)];return c==null?-1:c}function bnpCopyTo(r){for(var i=this.t-1;i>=0;--i)r[i]=this[i];r.t=this.t;r.s=this.s}function bnpFromInt(x){this.t=1;this.s=x<0?-1:0;if(x>0)this[0]=x;else if(x<-1)this[0]=x+DV;else this.t=0}function nbv(i){var r=nbi();r.fromInt(i);return r}function bnpFromString(s,b){var k;if(b==16)k=4;else if(b==8)k=3;else if(b==256)k=8;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else{this.fromRadix(s,b);return}this.t=0;this.s=0;var i=s.length,mi=false,sh=0;while(--i>=0){var x=k==8?s[i]&255:intAt(s,i);if(x<0){if(s.charAt(i)=="-")mi=true;continue}mi=false;if(sh==0)this[this.t++]=x;else if(sh+k>this.DB){this[this.t-1]|=(x&(1<<this.DB-sh)-1)<<sh;this[this.t++]=x>>this.DB-sh}else this[this.t-1]|=x<<sh;sh+=k;if(sh>=this.DB)sh-=this.DB}if(k==8&&(s[0]&128)!=0){this.s=-1;if(sh>0)this[this.t-1]|=(1<<this.DB-sh)-1<<sh}this.clamp();if(mi)BigInteger.ZERO.subTo(this,this)}function bnpClamp(){var c=this.s&this.DM;while(this.t>0&&this[this.t-1]==c)--this.t}function bnToString(b){if(this.s<0)return"-"+this.negate().toString(b);var k;if(b==16)k=4;else if(b==8)k=3;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else return this.toRadix(b);var km=(1<<k)-1,d,m=false,r="",i=this.t;var p=this.DB-i*this.DB%k;if(i-- >0){if(p<this.DB&&(d=this[i]>>p)>0){m=true;r=int2char(d)}while(i>=0){if(p<k){d=(this[i]&(1<<p)-1)<<k-p;d|=this[--i]>>(p+=this.DB-k)}else{d=this[i]>>(p-=k)&km;if(p<=0){p+=this.DB;--i}}if(d>0)m=true;if(m)r+=int2char(d)}}return m?r:"0"}function bnNegate(){var r=nbi();BigInteger.ZERO.subTo(this,r);return r}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var r=this.s-a.s;if(r!=0)return r;var i=this.t;r=i-a.t;if(r!=0)return this.s<0?-r:r;while(--i>=0)if((r=this[i]-a[i])!=0)return r;return 0}function nbits(x){var r=1,t;if((t=x>>>16)!=0){x=t;r+=16}if((t=x>>8)!=0){x=t;r+=8}if((t=x>>4)!=0){x=t;r+=4}if((t=x>>2)!=0){x=t;r+=2}if((t=x>>1)!=0){x=t;r+=1}return r}function bnBitLength(){if(this.t<=0)return 0;return this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(n,r){var i;for(i=this.t-1;i>=0;--i)r[i+n]=this[i];for(i=n-1;i>=0;--i)r[i]=0;r.t=this.t+n;r.s=this.s}function bnpDRShiftTo(n,r){for(var i=n;i<this.t;++i)r[i-n]=this[i];r.t=Math.max(this.t-n,0);r.s=this.s}function bnpLShiftTo(n,r){var bs=n%this.DB;var cbs=this.DB-bs;var bm=(1<<cbs)-1;var ds=Math.floor(n/this.DB),c=this.s<<bs&this.DM,i;for(i=this.t-1;i>=0;--i){r[i+ds+1]=this[i]>>cbs|c;c=(this[i]&bm)<<bs}for(i=ds-1;i>=0;--i)r[i]=0;r[ds]=c;r.t=this.t+ds+1;r.s=this.s;r.clamp()}function bnpRShiftTo(n,r){r.s=this.s;var ds=Math.floor(n/this.DB);if(ds>=this.t){r.t=0;return}var bs=n%this.DB;var cbs=this.DB-bs;var bm=(1<<bs)-1;r[0]=this[ds]>>bs;for(var i=ds+1;i<this.t;++i){r[i-ds-1]|=(this[i]&bm)<<cbs;r[i-ds]=this[i]>>bs}if(bs>0)r[this.t-ds-1]|=(this.s&bm)<<cbs;r.t=this.t-ds;r.clamp()}function bnpSubTo(a,r){var i=0,c=0,m=Math.min(a.t,this.t);while(i<m){c+=this[i]-a[i];r[i++]=c&this.DM;c>>=this.DB}if(a.t<this.t){c-=a.s;while(i<this.t){c+=this[i];r[i++]=c&this.DM;c>>=this.DB}c+=this.s}else{c+=this.s;while(i<a.t){c-=a[i];r[i++]=c&this.DM;c>>=this.DB}c-=a.s}r.s=c<0?-1:0;if(c<-1)r[i++]=this.DV+c;else if(c>0)r[i++]=c;r.t=i;r.clamp()}function bnpMultiplyTo(a,r){var x=this.abs(),y=a.abs();var i=x.t;r.t=i+y.t;while(--i>=0)r[i]=0;for(i=0;i<y.t;++i)r[i+x.t]=x.am(0,y[i],r,i,0,x.t);r.s=0;r.clamp();if(this.s!=a.s)BigInteger.ZERO.subTo(r,r)}function bnpSquareTo(r){var x=this.abs();var i=r.t=2*x.t;while(--i>=0)r[i]=0;for(i=0;i<x.t-1;++i){var c=x.am(i,x[i],r,2*i,0,1);if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1))>=x.DV){r[i+x.t]-=x.DV;r[i+x.t+1]=1}}if(r.t>0)r[r.t-1]+=x.am(i,x[i],r,2*i,0,1);r.s=0;r.clamp()}function bnpDivRemTo(m,q,r){var pm=m.abs();if(pm.t<=0)return;var pt=this.abs();if(pt.t<pm.t){if(q!=null)q.fromInt(0);if(r!=null)this.copyTo(r);return}if(r==null)r=nbi();var y=nbi(),ts=this.s,ms=m.s;var nsh=this.DB-nbits(pm[pm.t-1]);if(nsh>0){pm.lShiftTo(nsh,y);pt.lShiftTo(nsh,r)}else{pm.copyTo(y);pt.copyTo(r)}var ys=y.t;var y0=y[ys-1];if(y0==0)return;var yt=y0*(1<<this.F1)+(ys>1?y[ys-2]>>this.F2:0);var d1=this.FV/yt,d2=(1<<this.F1)/yt,e=1<<this.F2;var i=r.t,j=i-ys,t=q==null?nbi():q;y.dlShiftTo(j,t);if(r.compareTo(t)>=0){r[r.t++]=1;r.subTo(t,r)}BigInteger.ONE.dlShiftTo(ys,t);t.subTo(y,y);while(y.t<ys)y[y.t++]=0;while(--j>=0){var qd=r[--i]==y0?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);if((r[i]+=y.am(0,qd,r,j,0,ys))<qd){y.dlShiftTo(j,t);r.subTo(t,r);while(r[i]<--qd)r.subTo(t,r)}}if(q!=null){r.drShiftTo(ys,q);if(ts!=ms)BigInteger.ZERO.subTo(q,q)}r.t=ys;r.clamp();if(nsh>0)r.rShiftTo(nsh,r);if(ts<0)BigInteger.ZERO.subTo(r,r)}function bnMod(a){var r=nbi();this.abs().divRemTo(a,null,r);if(this.s<0&&r.compareTo(BigInteger.ZERO)>0)a.subTo(r,r);return r}function Classic(m){this.m=m}function cConvert(x){if(x.s<0||x.compareTo(this.m)>=0)return x.mod(this.m);else return x}function cRevert(x){return x}function cReduce(x){x.divRemTo(this.m,null,x)}function cMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}function cSqrTo(x,r){x.squareTo(r);this.reduce(r)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(this.t<1)return 0;var x=this[0];if((x&1)==0)return 0;var y=x&3;y=y*(2-(x&15)*y)&15;y=y*(2-(x&255)*y)&255;y=y*(2-((x&65535)*y&65535))&65535;y=y*(2-x*y%this.DV)%this.DV;return y>0?this.DV-y:-y}function Montgomery(m){this.m=m;this.mp=m.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<m.DB-15)-1;this.mt2=2*m.t}function montConvert(x){var r=nbi();x.abs().dlShiftTo(this.m.t,r);r.divRemTo(this.m,null,r);if(x.s<0&&r.compareTo(BigInteger.ZERO)>0)this.m.subTo(r,r);return r}function montRevert(x){var r=nbi();x.copyTo(r);this.reduce(r);return r}function montReduce(x){while(x.t<=this.mt2)x[x.t++]=0;for(var i=0;i<this.m.t;++i){var j=x[i]&32767;var u0=j*this.mpl+((j*this.mph+(x[i]>>15)*this.mpl&this.um)<<15)&x.DM;j=i+this.m.t;x[j]+=this.m.am(0,u0,x,i,0,this.m.t);while(x[j]>=x.DV){x[j]-=x.DV;x[++j]++}}x.clamp();x.drShiftTo(this.m.t,x);if(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function montSqrTo(x,r){x.squareTo(r);this.reduce(r)}function montMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(e,z){if(e>4294967295||e<1)return BigInteger.ONE;var r=nbi(),r2=nbi(),g=z.convert(this),i=nbits(e)-1;g.copyTo(r);while(--i>=0){z.sqrTo(r,r2);if((e&1<<i)>0)z.mulTo(r2,g,r);else{var t=r;r=r2;r2=t}}return z.revert(r)}function bnModPowInt(e,m){var z;if(e<256||m.isEven())z=new Classic(m);else z=new Montgomery(m);return this.exp(e,z)}BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);function bnClone(){var r=nbi();this.copyTo(r);return r}function bnIntValue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;else if(this.t==0)return-1}else if(this.t==1)return this[0];else if(this.t==0)return 0;return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function bnSigNum(){if(this.s<0)return-1;else if(this.t<=0||this.t==1&&this[0]<=0)return 0;else return 1}function bnpToRadix(b){if(b==null)b=10;if(this.signum()==0||b<2||b>36)return"0";var cs=this.chunkSize(b);var a=Math.pow(b,cs);var d=nbv(a),y=nbi(),z=nbi(),r="";this.divRemTo(d,y,z);while(y.signum()>0){r=(a+z.intValue()).toString(b).substr(1)+r;y.divRemTo(d,y,z)}return z.intValue().toString(b)+r}function bnpFromRadix(s,b){this.fromInt(0);if(b==null)b=10;var cs=this.chunkSize(b);var d=Math.pow(b,cs),mi=false,j=0,w=0;for(var i=0;i<s.length;++i){var x=intAt(s,i);if(x<0){if(s.charAt(i)=="-"&&this.signum()==0)mi=true;continue}w=b*w+x;if(++j>=cs){this.dMultiply(d);this.dAddOffset(w,0);j=0;w=0}}if(j>0){this.dMultiply(Math.pow(b,j));this.dAddOffset(w,0)}if(mi)BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(a,b,c){if("number"==typeof b){if(a<2)this.fromInt(1);else{this.fromNumber(a,c);if(!this.testBit(a-1))this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);if(this.isEven())this.dAddOffset(1,0);while(!this.isProbablePrime(b)){this.dAddOffset(2,0);if(this.bitLength()>a)this.subTo(BigInteger.ONE.shiftLeft(a-1),this)}}}else{var x=new Array,t=a&7;x.length=(a>>3)+1;b.nextBytes(x);if(t>0)x[0]&=(1<<t)-1;else x[0]=0;this.fromString(x,256)}}function bnToByteArray(){var i=this.t,r=new Array;r[0]=this.s;var p=this.DB-i*this.DB%8,d,k=0;if(i-- >0){if(p<this.DB&&(d=this[i]>>p)!=(this.s&this.DM)>>p)r[k++]=d|this.s<<this.DB-p;while(i>=0){if(p<8){d=(this[i]&(1<<p)-1)<<8-p;d|=this[--i]>>(p+=this.DB-8)}else{d=this[i]>>(p-=8)&255;if(p<=0){p+=this.DB;--i}}if((d&128)!=0)d|=-256;if(k==0&&(this.s&128)!=(d&128))++k;if(k>0||d!=this.s)r[k++]=d}}return r}function bnEquals(a){return this.compareTo(a)==0}function bnMin(a){return this.compareTo(a)<0?this:a}function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,op,r){var i,f,m=Math.min(a.t,this.t);for(i=0;i<m;++i)r[i]=op(this[i],a[i]);if(a.t<this.t){f=a.s&this.DM;for(i=m;i<this.t;++i)r[i]=op(this[i],f);r.t=this.t}else{f=this.s&this.DM;for(i=m;i<a.t;++i)r[i]=op(f,a[i]);r.t=a.t}r.s=op(this.s,a.s);r.clamp()}function op_and(x,y){return x&y}function bnAnd(a){var r=nbi();this.bitwiseTo(a,op_and,r);return r}function op_or(x,y){return x|y}function bnOr(a){var r=nbi();this.bitwiseTo(a,op_or,r);return r}function op_xor(x,y){return x^y}function bnXor(a){var r=nbi();this.bitwiseTo(a,op_xor,r);return r}function op_andnot(x,y){return x&~y}function bnAndNot(a){var r=nbi();this.bitwiseTo(a,op_andnot,r);return r}function bnNot(){var r=nbi();for(var i=0;i<this.t;++i)r[i]=this.DM&~this[i];r.t=this.t;r.s=~this.s;return r}function bnShiftLeft(n){var r=nbi();if(n<0)this.rShiftTo(-n,r);else this.lShiftTo(n,r);return r}function bnShiftRight(n){var r=nbi();if(n<0)this.lShiftTo(-n,r);else this.rShiftTo(n,r);return r}function lbit(x){if(x==0)return-1;var r=0;if((x&65535)==0){x>>=16;r+=16}if((x&255)==0){x>>=8;r+=8}if((x&15)==0){x>>=4;r+=4}if((x&3)==0){x>>=2;r+=2}if((x&1)==0)++r;return r}function bnGetLowestSetBit(){for(var i=0;i<this.t;++i)if(this[i]!=0)return i*this.DB+lbit(this[i]);if(this.s<0)return this.t*this.DB;return-1}function cbit(x){var r=0;while(x!=0){x&=x-1;++r}return r}function bnBitCount(){var r=0,x=this.s&this.DM;for(var i=0;i<this.t;++i)r+=cbit(this[i]^x);return r}function bnTestBit(n){var j=Math.floor(n/this.DB);if(j>=this.t)return this.s!=0;return(this[j]&1<<n%this.DB)!=0}function bnpChangeBit(n,op){var r=BigInteger.ONE.shiftLeft(n);this.bitwiseTo(r,op,r);return r}function bnSetBit(n){return this.changeBit(n,op_or)}function bnClearBit(n){return this.changeBit(n,op_andnot)}function bnFlipBit(n){return this.changeBit(n,op_xor)}function bnpAddTo(a,r){var i=0,c=0,m=Math.min(a.t,this.t);while(i<m){c+=this[i]+a[i];r[i++]=c&this.DM;c>>=this.DB}if(a.t<this.t){c+=a.s;while(i<this.t){c+=this[i];r[i++]=c&this.DM;c>>=this.DB}c+=this.s}else{c+=this.s;while(i<a.t){c+=a[i];r[i++]=c&this.DM;c>>=this.DB}c+=a.s}r.s=c<0?-1:0;if(c>0)r[i++]=c;else if(c<-1)r[i++]=this.DV+c;r.t=i;r.clamp()}function bnAdd(a){var r=nbi();this.addTo(a,r);return r}function bnSubtract(a){var r=nbi();this.subTo(a,r);return r}function bnMultiply(a){var r=nbi();this.multiplyTo(a,r);return r}function bnSquare(){var r=nbi();this.squareTo(r);return r}function bnDivide(a){var r=nbi();this.divRemTo(a,r,null);return r}function bnRemainder(a){var r=nbi();this.divRemTo(a,null,r);return r}function bnDivideAndRemainder(a){var q=nbi(),r=nbi();this.divRemTo(a,q,r);return new Array(q,r)}function bnpDMultiply(n){this[this.t]=this.am(0,n-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(n,w){if(n==0)return;while(this.t<=w)this[this.t++]=0;this[w]+=n;while(this[w]>=this.DV){this[w]-=this.DV;if(++w>=this.t)this[this.t++]=0;++this[w]}}function NullExp(){}function nNop(x){return x}function nMulTo(x,y,r){x.multiplyTo(y,r)}function nSqrTo(x,r){x.squareTo(r)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(a,n,r){var i=Math.min(this.t+a.t,n);r.s=0;r.t=i;while(i>0)r[--i]=0;var j;for(j=r.t-this.t;i<j;++i)r[i+this.t]=this.am(0,a[i],r,i,0,this.t);for(j=Math.min(a.t,n);i<j;++i)this.am(0,a[i],r,i,0,n-i);r.clamp()}function bnpMultiplyUpperTo(a,n,r){--n;var i=r.t=this.t+a.t-n;r.s=0;while(--i>=0)r[i]=0;for(i=Math.max(n-this.t,0);i<a.t;++i)r[this.t+i-n]=this.am(n-i,a[i],r,0,0,this.t+i-n);r.clamp();r.drShiftTo(1,r)}function Barrett(m){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*m.t,this.r2);this.mu=this.r2.divide(m);this.m=m}function barrettConvert(x){if(x.s<0||x.t>2*this.m.t)return x.mod(this.m);else if(x.compareTo(this.m)<0)return x;else{var r=nbi();x.copyTo(r);this.reduce(r);return r}}function barrettRevert(x){return x}function barrettReduce(x){x.drShiftTo(this.m.t-1,this.r2);if(x.t>this.m.t+1){x.t=this.m.t+1;x.clamp()}this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(x.compareTo(this.r2)<0)x.dAddOffset(1,this.m.t+1);x.subTo(this.r2,x);while(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function barrettSqrTo(x,r){x.squareTo(r);this.reduce(r)}function barrettMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;function bnModPow(e,m){var i=e.bitLength(),k,r=nbv(1),z;if(i<=0)return r;else if(i<18)k=1;else if(i<48)k=3;else if(i<144)k=4;else if(i<768)k=5;else k=6;if(i<8)z=new Classic(m);else if(m.isEven())z=new Barrett(m);else z=new Montgomery(m);var g=new Array,n=3,k1=k-1,km=(1<<k)-1;g[1]=z.convert(this);if(k>1){var g2=nbi();z.sqrTo(g[1],g2);while(n<=km){g[n]=nbi();z.mulTo(g2,g[n-2],g[n]);n+=2}}var j=e.t-1,w,is1=true,r2=nbi(),t;i=nbits(e[j])-1;while(j>=0){if(i>=k1)w=e[j]>>i-k1&km;else{w=(e[j]&(1<<i+1)-1)<<k1-i;if(j>0)w|=e[j-1]>>this.DB+i-k1}n=k;while((w&1)==0){w>>=1;--n}if((i-=n)<0){i+=this.DB;--j}if(is1){g[w].copyTo(r);is1=false}else{while(n>1){z.sqrTo(r,r2);z.sqrTo(r2,r);n-=2}if(n>0)z.sqrTo(r,r2);else{t=r;r=r2;r2=t}z.mulTo(r2,g[w],r)}while(j>=0&&(e[j]&1<<i)==0){z.sqrTo(r,r2);t=r;r=r2;r2=t;if(--i<0){i=this.DB-1;--j}}}return z.revert(r)}function bnGCD(a){var x=this.s<0?this.negate():this.clone();var y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y;y=t}var i=x.getLowestSetBit(),g=y.getLowestSetBit();if(g<0)return x;if(i<g)g=i;if(g>0){x.rShiftTo(g,x);y.rShiftTo(g,y)}while(x.signum()>0){if((i=x.getLowestSetBit())>0)x.rShiftTo(i,x);if((i=y.getLowestSetBit())>0)y.rShiftTo(i,y);if(x.compareTo(y)>=0){x.subTo(y,x);x.rShiftTo(1,x)}else{y.subTo(x,y);y.rShiftTo(1,y)}}if(g>0)y.lShiftTo(g,y);return y}function bnpModInt(n){if(n<=0)return 0;var d=this.DV%n,r=this.s<0?n-1:0;if(this.t>0)if(d==0)r=this[0]%n;else for(var i=this.t-1;i>=0;--i)r=(d*r+this[i])%n;return r}function bnModInverse(m){var ac=m.isEven();if(this.isEven()&&ac||m.signum()==0)return BigInteger.ZERO;var u=m.clone(),v=this.clone();var a=nbv(1),b=nbv(0),c=nbv(0),d=nbv(1);while(u.signum()!=0){while(u.isEven()){u.rShiftTo(1,u);if(ac){if(!a.isEven()||!b.isEven()){a.addTo(this,a);b.subTo(m,b)}a.rShiftTo(1,a)}else if(!b.isEven())b.subTo(m,b);b.rShiftTo(1,b)}while(v.isEven()){v.rShiftTo(1,v);if(ac){if(!c.isEven()||!d.isEven()){c.addTo(this,c);d.subTo(m,d)}c.rShiftTo(1,c)}else if(!d.isEven())d.subTo(m,d);d.rShiftTo(1,d)}if(u.compareTo(v)>=0){u.subTo(v,u);if(ac)a.subTo(c,a);b.subTo(d,b)}else{v.subTo(u,v);if(ac)c.subTo(a,c);d.subTo(b,d)}}if(v.compareTo(BigInteger.ONE)!=0)return BigInteger.ZERO;if(d.compareTo(m)>=0)return d.subtract(m);if(d.signum()<0)d.addTo(m,d);else return d;if(d.signum()<0)return d.add(m);else return d}var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];var lplim=(1<<26)/lowprimes[lowprimes.length-1];function bnIsProbablePrime(t){var i,x=this.abs();if(x.t==1&&x[0]<=lowprimes[lowprimes.length-1]){for(i=0;i<lowprimes.length;++i)if(x[0]==lowprimes[i])return true;return false}if(x.isEven())return false;i=1;while(i<lowprimes.length){var m=lowprimes[i],j=i+1;while(j<lowprimes.length&&m<lplim)m*=lowprimes[j++];m=x.modInt(m);while(i<j)if(m%lowprimes[i++]==0)return false}return x.millerRabin(t)}function bnpMillerRabin(t){var n1=this.subtract(BigInteger.ONE);var k=n1.getLowestSetBit();if(k<=0)return false;var r=n1.shiftRight(k);t=t+1>>1;if(t>lowprimes.length)t=lowprimes.length;var a=nbi();for(var i=0;i<t;++i){a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var y=a.modPow(r,this);if(y.compareTo(BigInteger.ONE)!=0&&y.compareTo(n1)!=0){var j=1;while(j++<k&&y.compareTo(n1)!=0){y=y.modPowInt(2,this);if(y.compareTo(BigInteger.ONE)==0)return false}if(y.compareTo(n1)!=0)return false}}return true}BigInteger.prototype.chunkSize=bnpChunkSize;BigInteger.prototype.toRadix=bnpToRadix;BigInteger.prototype.fromRadix=bnpFromRadix;BigInteger.prototype.fromNumber=bnpFromNumber;BigInteger.prototype.bitwiseTo=bnpBitwiseTo;BigInteger.prototype.changeBit=bnpChangeBit;BigInteger.prototype.addTo=bnpAddTo;BigInteger.prototype.dMultiply=bnpDMultiply;BigInteger.prototype.dAddOffset=bnpDAddOffset;BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo;BigInteger.prototype.modInt=bnpModInt;BigInteger.prototype.millerRabin=bnpMillerRabin;BigInteger.prototype.clone=bnClone;BigInteger.prototype.intValue=bnIntValue;BigInteger.prototype.byteValue=bnByteValue;BigInteger.prototype.shortValue=bnShortValue;BigInteger.prototype.signum=bnSigNum;BigInteger.prototype.toByteArray=bnToByteArray;BigInteger.prototype.equals=bnEquals;BigInteger.prototype.min=bnMin;BigInteger.prototype.max=bnMax;BigInteger.prototype.and=bnAnd;BigInteger.prototype.or=bnOr;BigInteger.prototype.xor=bnXor;BigInteger.prototype.andNot=bnAndNot;BigInteger.prototype.not=bnNot;BigInteger.prototype.shiftLeft=bnShiftLeft;BigInteger.prototype.shiftRight=bnShiftRight;BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit;BigInteger.prototype.bitCount=bnBitCount;BigInteger.prototype.testBit=bnTestBit;BigInteger.prototype.setBit=bnSetBit;BigInteger.prototype.clearBit=bnClearBit;BigInteger.prototype.flipBit=bnFlipBit;BigInteger.prototype.add=bnAdd;BigInteger.prototype.subtract=bnSubtract;BigInteger.prototype.multiply=bnMultiply;BigInteger.prototype.divide=bnDivide;BigInteger.prototype.remainder=bnRemainder;BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder;BigInteger.prototype.modPow=bnModPow;BigInteger.prototype.modInverse=bnModInverse;BigInteger.prototype.pow=bnPow;BigInteger.prototype.gcd=bnGCD;BigInteger.prototype.isProbablePrime=bnIsProbablePrime;BigInteger.prototype.square=bnSquare;function Arcfour(){this.i=0;this.j=0;this.S=new Array}function ARC4init(key){var i,j,t;for(i=0;i<256;++i)this.S[i]=i;j=0;for(i=0;i<256;++i){j=j+this.S[i]+key[i%key.length]&255;t=this.S[i];this.S[i]=this.S[j];this.S[j]=t}this.i=0;this.j=0}function ARC4next(){var t;this.i=this.i+1&255;this.j=this.j+this.S[this.i]&255;t=this.S[this.i];this.S[this.i]=this.S[this.j];this.S[this.j]=t;return this.S[t+this.S[this.i]&255]}Arcfour.prototype.init=ARC4init;Arcfour.prototype.next=ARC4next;function prng_newstate(){return new Arcfour}var rng_psize=256;var rng_state;var rng_pool;var rng_pptr;if(rng_pool==null){rng_pool=new Array;rng_pptr=0;var t;if(window.crypto&&window.crypto.getRandomValues){var z=new Uint32Array(256);window.crypto.getRandomValues(z);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=z[t]&255}var onMouseMoveListener=function(ev){this.count=this.count||0;if(this.count>=256||rng_pptr>=rng_psize){if(window.removeEventListener)window.removeEventListener("mousemove",onMouseMoveListener);else if(window.detachEvent)window.detachEvent("onmousemove",onMouseMoveListener);return}this.count+=1;var mouseCoordinates=ev.x+ev.y;rng_pool[rng_pptr++]=mouseCoordinates&255};if(window.addEventListener)window.addEventListener("mousemove",onMouseMoveListener);else if(window.attachEvent)window.attachEvent("onmousemove",onMouseMoveListener)}function rng_get_byte(){if(rng_state==null){rng_state=prng_newstate();while(rng_pptr<rng_psize){var random=Math.floor(65536*Math.random());rng_pool[rng_pptr++]=random&255}rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(ba){var i;for(i=0;i<ba.length;++i)ba[i]=rng_get_byte()}function SecureRandom(){}SecureRandom.prototype.nextBytes=rng_get_bytes;function parseBigInt(str,r){return new BigInteger(str,r)}function linebrk(s,n){var ret="";var i=0;while(i+n<s.length){ret+=s.substring(i,i+n)+"\n";i+=n}return ret+s.substring(i,s.length)}function byte2Hex(b){if(b<16)return"0"+b.toString(16);else return b.toString(16)}function pkcs1pad2(s,n){if(n<s.length+11){console.error("Message too long for RSA");return null}var ba=new Array;var i=s.length-1;while(i>=0&&n>0){var c=s.charCodeAt(i--);if(c<128){ba[--n]=c}else if(c>127&&c<2048){ba[--n]=c&63|128;ba[--n]=c>>6|192}else{ba[--n]=c&63|128;ba[--n]=c>>6&63|128;ba[--n]=c>>12|224}}ba[--n]=0;var rng=new SecureRandom;var x=new Array;while(n>2){x[0]=0;while(x[0]==0)rng.nextBytes(x);ba[--n]=x[0]}ba[--n]=2;ba[--n]=0;return new BigInteger(ba)}function RSAKey(){this.n=null;this.e=0;this.d=null;this.p=null;this.q=null;this.dmp1=null;this.dmq1=null;this.coeff=null}function RSASetPublic(N,E){if(N!=null&&E!=null&&N.length>0&&E.length>0){this.n=parseBigInt(N,16);this.e=parseInt(E,16)}else console.error("Invalid RSA public key")}function RSADoPublic(x){return x.modPowInt(this.e,this.n)}function RSAEncrypt(text){var m=pkcs1pad2(text,this.n.bitLength()+7>>3);if(m==null)return null;var c=this.doPublic(m);if(c==null)return null;var h=c.toString(16);if((h.length&1)==0)return h;else return"0"+h}RSAKey.prototype.doPublic=RSADoPublic;RSAKey.prototype.setPublic=RSASetPublic;RSAKey.prototype.encrypt=RSAEncrypt;function pkcs1unpad2(d,n){var b=d.toByteArray();var i=0;while(i<b.length&&b[i]==0)++i;if(b.length-i!=n-1||b[i]!=2)return null;++i;while(b[i]!=0)if(++i>=b.length)return null;var ret="";while(++i<b.length){var c=b[i]&255;if(c<128){ret+=String.fromCharCode(c)}else if(c>191&&c<224){ret+=String.fromCharCode((c&31)<<6|b[i+1]&63);++i}else{ret+=String.fromCharCode((c&15)<<12|(b[i+1]&63)<<6|b[i+2]&63);i+=2}}return ret}function RSASetPrivate(N,E,D){if(N!=null&&E!=null&&N.length>0&&E.length>0){this.n=parseBigInt(N,16);this.e=parseInt(E,16);this.d=parseBigInt(D,16)}else console.error("Invalid RSA private key")}function RSASetPrivateEx(N,E,D,P,Q,DP,DQ,C){if(N!=null&&E!=null&&N.length>0&&E.length>0){this.n=parseBigInt(N,16);this.e=parseInt(E,16);this.d=parseBigInt(D,16);this.p=parseBigInt(P,16);this.q=parseBigInt(Q,16);this.dmp1=parseBigInt(DP,16);this.dmq1=parseBigInt(DQ,16);this.coeff=parseBigInt(C,16)}else console.error("Invalid RSA private key")}function RSAGenerate(B,E){var rng=new SecureRandom;var qs=B>>1;this.e=parseInt(E,16);var ee=new BigInteger(E,16);for(;;){for(;;){this.p=new BigInteger(B-qs,1,rng);if(this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE)==0&&this.p.isProbablePrime(10))break}for(;;){this.q=new BigInteger(qs,1,rng);if(this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE)==0&&this.q.isProbablePrime(10))break}if(this.p.compareTo(this.q)<=0){var t=this.p;this.p=this.q;this.q=t}var p1=this.p.subtract(BigInteger.ONE);var q1=this.q.subtract(BigInteger.ONE);var phi=p1.multiply(q1);if(phi.gcd(ee).compareTo(BigInteger.ONE)==0){this.n=this.p.multiply(this.q);this.d=ee.modInverse(phi);this.dmp1=this.d.mod(p1);this.dmq1=this.d.mod(q1);this.coeff=this.q.modInverse(this.p);break}}}function RSADoPrivate(x){if(this.p==null||this.q==null)return x.modPow(this.d,this.n);var xp=x.mod(this.p).modPow(this.dmp1,this.p);var xq=x.mod(this.q).modPow(this.dmq1,this.q);while(xp.compareTo(xq)<0)xp=xp.add(this.p);return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq)}function RSADecrypt(ctext){var c=parseBigInt(ctext,16);var m=this.doPrivate(c);if(m==null)return null;return pkcs1unpad2(m,this.n.bitLength()+7>>3)}RSAKey.prototype.doPrivate=RSADoPrivate;RSAKey.prototype.setPrivate=RSASetPrivate;RSAKey.prototype.setPrivateEx=RSASetPrivateEx;RSAKey.prototype.generate=RSAGenerate;RSAKey.prototype.decrypt=RSADecrypt;(function(){var RSAGenerateAsync=function(B,E,callback){var rng=new SecureRandom;var qs=B>>1;this.e=parseInt(E,16);var ee=new BigInteger(E,16);var rsa=this;var loop1=function(){var loop4=function(){if(rsa.p.compareTo(rsa.q)<=0){var t=rsa.p;rsa.p=rsa.q;rsa.q=t}var p1=rsa.p.subtract(BigInteger.ONE);var q1=rsa.q.subtract(BigInteger.ONE);var phi=p1.multiply(q1);if(phi.gcd(ee).compareTo(BigInteger.ONE)==0){rsa.n=rsa.p.multiply(rsa.q);rsa.d=ee.modInverse(phi);rsa.dmp1=rsa.d.mod(p1);rsa.dmq1=rsa.d.mod(q1);rsa.coeff=rsa.q.modInverse(rsa.p);setTimeout(function(){callback()},0)}else{setTimeout(loop1,0)}};var loop3=function(){rsa.q=nbi();rsa.q.fromNumberAsync(qs,1,rng,function(){rsa.q.subtract(BigInteger.ONE).gcda(ee,function(r){if(r.compareTo(BigInteger.ONE)==0&&rsa.q.isProbablePrime(10)){setTimeout(loop4,0)}else{setTimeout(loop3,0)}})})};var loop2=function(){rsa.p=nbi();rsa.p.fromNumberAsync(B-qs,1,rng,function(){rsa.p.subtract(BigInteger.ONE).gcda(ee,function(r){if(r.compareTo(BigInteger.ONE)==0&&rsa.p.isProbablePrime(10)){setTimeout(loop3,0)}else{setTimeout(loop2,0)}})})};setTimeout(loop2,0)};setTimeout(loop1,0)};RSAKey.prototype.generateAsync=RSAGenerateAsync;var bnGCDAsync=function(a,callback){var x=this.s<0?this.negate():this.clone();var y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y;y=t}var i=x.getLowestSetBit(),g=y.getLowestSetBit();if(g<0){callback(x);return}if(i<g)g=i;if(g>0){x.rShiftTo(g,x);y.rShiftTo(g,y)}var gcda1=function(){if((i=x.getLowestSetBit())>0){x.rShiftTo(i,x)}if((i=y.getLowestSetBit())>0){y.rShiftTo(i,y)}if(x.compareTo(y)>=0){x.subTo(y,x);x.rShiftTo(1,x)}else{y.subTo(x,y);y.rShiftTo(1,y)}if(!(x.signum()>0)){if(g>0)y.lShiftTo(g,y);setTimeout(function(){callback(y)},0)}else{setTimeout(gcda1,0)}};setTimeout(gcda1,10)};BigInteger.prototype.gcda=bnGCDAsync;var bnpFromNumberAsync=function(a,b,c,callback){if("number"==typeof b){if(a<2){this.fromInt(1)}else{this.fromNumber(a,c);if(!this.testBit(a-1)){this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this)}if(this.isEven()){this.dAddOffset(1,0)}var bnp=this;var bnpfn1=function(){bnp.dAddOffset(2,0);if(bnp.bitLength()>a)bnp.subTo(BigInteger.ONE.shiftLeft(a-1),bnp);if(bnp.isProbablePrime(b)){setTimeout(function(){callback()},0)}else{setTimeout(bnpfn1,0)}};setTimeout(bnpfn1,0)}}else{var x=new Array,t=a&7;x.length=(a>>3)+1;b.nextBytes(x);if(t>0)x[0]&=(1<<t)-1;else x[0]=0;this.fromString(x,256)}};BigInteger.prototype.fromNumberAsync=bnpFromNumberAsync})();var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad="=";function hex2b64(h){var i;var c;var ret="";for(i=0;i+3<=h.length;i+=3){c=parseInt(h.substring(i,i+3),16);ret+=b64map.charAt(c>>6)+b64map.charAt(c&63)}if(i+1==h.length){c=parseInt(h.substring(i,i+1),16);ret+=b64map.charAt(c<<2)}else if(i+2==h.length){c=parseInt(h.substring(i,i+2),16);ret+=b64map.charAt(c>>2)+b64map.charAt((c&3)<<4)}while((ret.length&3)>0)ret+=b64pad;return ret}function b64tohex(s){var ret="";var i;var k=0;var slop;for(i=0;i<s.length;++i){if(s.charAt(i)==b64pad)break;v=b64map.indexOf(s.charAt(i));if(v<0)continue;if(k==0){ret+=int2char(v>>2);slop=v&3;k=1}else if(k==1){ret+=int2char(slop<<2|v>>4);slop=v&15;k=2}else if(k==2){ret+=int2char(slop);ret+=int2char(v>>2);slop=v&3;k=3}else{ret+=int2char(slop<<2|v>>4);ret+=int2char(v&15);k=0}}if(k==1)ret+=int2char(slop<<2);return ret}function b64toBA(s){var h=b64tohex(s);var i;var a=new Array;for(i=0;2*i<h.length;++i){a[i]=parseInt(h.substring(2*i,2*i+2),16)}return a}var JSX=JSX||{};JSX.env=JSX.env||{};var L=JSX,OP=Object.prototype,FUNCTION_TOSTRING="[object Function]",ADD=["toString","valueOf"];JSX.env.parseUA=function(agent){var numberify=function(s){var c=0;return parseFloat(s.replace(/\./g,function(){return c++==1?"":"."}))},nav=navigator,o={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:nav&&nav.cajaVersion,secure:false,os:null},ua=agent||navigator&&navigator.userAgent,loc=window&&window.location,href=loc&&loc.href,m;o.secure=href&&href.toLowerCase().indexOf("https")===0;if(ua){if(/windows|win32/i.test(ua)){o.os="windows"}else if(/macintosh/i.test(ua)){o.os="macintosh"}else if(/rhino/i.test(ua)){o.os="rhino"}if(/KHTML/.test(ua)){o.webkit=1}m=ua.match(/AppleWebKit\/([^\s]*)/);if(m&&m[1]){o.webkit=numberify(m[1]);if(/ Mobile\//.test(ua)){
o.mobile="Apple";m=ua.match(/OS ([^\s]*)/);if(m&&m[1]){m=numberify(m[1].replace("_","."))}o.ios=m;o.ipad=o.ipod=o.iphone=0;m=ua.match(/iPad|iPod|iPhone/);if(m&&m[0]){o[m[0].toLowerCase()]=o.ios}}else{m=ua.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);if(m){o.mobile=m[0]}if(/webOS/.test(ua)){o.mobile="WebOS";m=ua.match(/webOS\/([^\s]*);/);if(m&&m[1]){o.webos=numberify(m[1])}}if(/ Android/.test(ua)){o.mobile="Android";m=ua.match(/Android ([^\s]*);/);if(m&&m[1]){o.android=numberify(m[1])}}}m=ua.match(/Chrome\/([^\s]*)/);if(m&&m[1]){o.chrome=numberify(m[1])}else{m=ua.match(/AdobeAIR\/([^\s]*)/);if(m){o.air=m[0]}}}if(!o.webkit){m=ua.match(/Opera[\s\/]([^\s]*)/);if(m&&m[1]){o.opera=numberify(m[1]);m=ua.match(/Version\/([^\s]*)/);if(m&&m[1]){o.opera=numberify(m[1])}m=ua.match(/Opera Mini[^;]*/);if(m){o.mobile=m[0]}}else{m=ua.match(/MSIE\s([^;]*)/);if(m&&m[1]){o.ie=numberify(m[1])}else{m=ua.match(/Gecko\/([^\s]*)/);if(m){o.gecko=1;m=ua.match(/rv:([^\s\)]*)/);if(m&&m[1]){o.gecko=numberify(m[1])}}}}}}return o};JSX.env.ua=JSX.env.parseUA();JSX.isFunction=function(o){return typeof o==="function"||OP.toString.apply(o)===FUNCTION_TOSTRING};JSX._IEEnumFix=JSX.env.ua.ie?function(r,s){var i,fname,f;for(i=0;i<ADD.length;i=i+1){fname=ADD[i];f=s[fname];if(L.isFunction(f)&&f!=OP[fname]){r[fname]=f}}}:function(){};JSX.extend=function(subc,superc,overrides){if(!superc||!subc){throw new Error("extend failed, please check that "+"all dependencies are included.")}var F=function(){},i;F.prototype=superc.prototype;subc.prototype=new F;subc.prototype.constructor=subc;subc.superclass=superc.prototype;if(superc.prototype.constructor==OP.constructor){superc.prototype.constructor=superc}if(overrides){for(i in overrides){if(L.hasOwnProperty(overrides,i)){subc.prototype[i]=overrides[i]}}L._IEEnumFix(subc.prototype,overrides)}};if(typeof KJUR=="undefined"||!KJUR)KJUR={};if(typeof KJUR.asn1=="undefined"||!KJUR.asn1)KJUR.asn1={};KJUR.asn1.ASN1Util=new function(){this.integerToByteHex=function(i){var h=i.toString(16);if(h.length%2==1)h="0"+h;return h};this.bigIntToMinTwosComplementsHex=function(bigIntegerValue){var h=bigIntegerValue.toString(16);if(h.substr(0,1)!="-"){if(h.length%2==1){h="0"+h}else{if(!h.match(/^[0-7]/)){h="00"+h}}}else{var hPos=h.substr(1);var xorLen=hPos.length;if(xorLen%2==1){xorLen+=1}else{if(!h.match(/^[0-7]/)){xorLen+=2}}var hMask="";for(var i=0;i<xorLen;i++){hMask+="f"}var biMask=new BigInteger(hMask,16);var biNeg=biMask.xor(bigIntegerValue).add(BigInteger.ONE);h=biNeg.toString(16).replace(/^-/,"")}return h};this.getPEMStringFromHex=function(dataHex,pemHeader){var dataWA=CryptoJS.enc.Hex.parse(dataHex);var dataB64=CryptoJS.enc.Base64.stringify(dataWA);var pemBody=dataB64.replace(/(.{64})/g,"$1\r\n");pemBody=pemBody.replace(/\r\n$/,"");return"-----BEGIN "+pemHeader+"-----\r\n"+pemBody+"\r\n-----END "+pemHeader+"-----\r\n"}};KJUR.asn1.ASN1Object=function(){var isModified=true;var hTLV=null;var hT="00";var hL="00";var hV="";this.getLengthHexFromValue=function(){if(typeof this.hV=="undefined"||this.hV==null){throw"this.hV is null or undefined."}if(this.hV.length%2==1){throw"value hex must be even length: n="+hV.length+",v="+this.hV}var n=this.hV.length/2;var hN=n.toString(16);if(hN.length%2==1){hN="0"+hN}if(n<128){return hN}else{var hNlen=hN.length/2;if(hNlen>15){throw"ASN.1 length too long to represent by 8x: n = "+n.toString(16)}var head=128+hNlen;return head.toString(16)+hN}};this.getEncodedHex=function(){if(this.hTLV==null||this.isModified){this.hV=this.getFreshValueHex();this.hL=this.getLengthHexFromValue();this.hTLV=this.hT+this.hL+this.hV;this.isModified=false}return this.hTLV};this.getValueHex=function(){this.getEncodedHex();return this.hV};this.getFreshValueHex=function(){return""}};KJUR.asn1.DERAbstractString=function(params){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var s=null;var hV=null;this.getString=function(){return this.s};this.setString=function(newS){this.hTLV=null;this.isModified=true;this.s=newS;this.hV=stohex(this.s)};this.setStringHex=function(newHexString){this.hTLV=null;this.isModified=true;this.s=null;this.hV=newHexString};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined"){if(typeof params["str"]!="undefined"){this.setString(params["str"])}else if(typeof params["hex"]!="undefined"){this.setStringHex(params["hex"])}}};JSX.extend(KJUR.asn1.DERAbstractString,KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractTime=function(params){KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);var s=null;var date=null;this.localDateToUTC=function(d){utc=d.getTime()+d.getTimezoneOffset()*6e4;var utcDate=new Date(utc);return utcDate};this.formatDate=function(dateObject,type){var pad=this.zeroPadding;var d=this.localDateToUTC(dateObject);var year=String(d.getFullYear());if(type=="utc")year=year.substr(2,2);var month=pad(String(d.getMonth()+1),2);var day=pad(String(d.getDate()),2);var hour=pad(String(d.getHours()),2);var min=pad(String(d.getMinutes()),2);var sec=pad(String(d.getSeconds()),2);return year+month+day+hour+min+sec+"Z"};this.zeroPadding=function(s,len){if(s.length>=len)return s;return new Array(len-s.length+1).join("0")+s};this.getString=function(){return this.s};this.setString=function(newS){this.hTLV=null;this.isModified=true;this.s=newS;this.hV=stohex(this.s)};this.setByDateValue=function(year,month,day,hour,min,sec){var dateObject=new Date(Date.UTC(year,month-1,day,hour,min,sec,0));this.setByDate(dateObject)};this.getFreshValueHex=function(){return this.hV}};JSX.extend(KJUR.asn1.DERAbstractTime,KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractStructured=function(params){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var asn1Array=null;this.setByASN1ObjectArray=function(asn1ObjectArray){this.hTLV=null;this.isModified=true;this.asn1Array=asn1ObjectArray};this.appendASN1Object=function(asn1Object){this.hTLV=null;this.isModified=true;this.asn1Array.push(asn1Object)};this.asn1Array=new Array;if(typeof params!="undefined"){if(typeof params["array"]!="undefined"){this.asn1Array=params["array"]}}};JSX.extend(KJUR.asn1.DERAbstractStructured,KJUR.asn1.ASN1Object);KJUR.asn1.DERBoolean=function(){KJUR.asn1.DERBoolean.superclass.constructor.call(this);this.hT="01";this.hTLV="0101ff"};JSX.extend(KJUR.asn1.DERBoolean,KJUR.asn1.ASN1Object);KJUR.asn1.DERInteger=function(params){KJUR.asn1.DERInteger.superclass.constructor.call(this);this.hT="02";this.setByBigInteger=function(bigIntegerValue){this.hTLV=null;this.isModified=true;this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue)};this.setByInteger=function(intValue){var bi=new BigInteger(String(intValue),10);this.setByBigInteger(bi)};this.setValueHex=function(newHexString){this.hV=newHexString};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined"){if(typeof params["bigint"]!="undefined"){this.setByBigInteger(params["bigint"])}else if(typeof params["int"]!="undefined"){this.setByInteger(params["int"])}else if(typeof params["hex"]!="undefined"){this.setValueHex(params["hex"])}}};JSX.extend(KJUR.asn1.DERInteger,KJUR.asn1.ASN1Object);KJUR.asn1.DERBitString=function(params){KJUR.asn1.DERBitString.superclass.constructor.call(this);this.hT="03";this.setHexValueIncludingUnusedBits=function(newHexStringIncludingUnusedBits){this.hTLV=null;this.isModified=true;this.hV=newHexStringIncludingUnusedBits};this.setUnusedBitsAndHexValue=function(unusedBits,hValue){if(unusedBits<0||7<unusedBits){throw"unused bits shall be from 0 to 7: u = "+unusedBits}var hUnusedBits="0"+unusedBits;this.hTLV=null;this.isModified=true;this.hV=hUnusedBits+hValue};this.setByBinaryString=function(binaryString){binaryString=binaryString.replace(/0+$/,"");var unusedBits=8-binaryString.length%8;if(unusedBits==8)unusedBits=0;for(var i=0;i<=unusedBits;i++){binaryString+="0"}var h="";for(var i=0;i<binaryString.length-1;i+=8){var b=binaryString.substr(i,8);var x=parseInt(b,2).toString(16);if(x.length==1)x="0"+x;h+=x}this.hTLV=null;this.isModified=true;this.hV="0"+unusedBits+h};this.setByBooleanArray=function(booleanArray){var s="";for(var i=0;i<booleanArray.length;i++){if(booleanArray[i]==true){s+="1"}else{s+="0"}}this.setByBinaryString(s)};this.newFalseArray=function(nLength){var a=new Array(nLength);for(var i=0;i<nLength;i++){a[i]=false}return a};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined"){if(typeof params["hex"]!="undefined"){this.setHexValueIncludingUnusedBits(params["hex"])}else if(typeof params["bin"]!="undefined"){this.setByBinaryString(params["bin"])}else if(typeof params["array"]!="undefined"){this.setByBooleanArray(params["array"])}}};JSX.extend(KJUR.asn1.DERBitString,KJUR.asn1.ASN1Object);KJUR.asn1.DEROctetString=function(params){KJUR.asn1.DEROctetString.superclass.constructor.call(this,params);this.hT="04"};JSX.extend(KJUR.asn1.DEROctetString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERNull=function(){KJUR.asn1.DERNull.superclass.constructor.call(this);this.hT="05";this.hTLV="0500"};JSX.extend(KJUR.asn1.DERNull,KJUR.asn1.ASN1Object);KJUR.asn1.DERObjectIdentifier=function(params){var itox=function(i){var h=i.toString(16);if(h.length==1)h="0"+h;return h};var roidtox=function(roid){var h="";var bi=new BigInteger(roid,10);var b=bi.toString(2);var padLen=7-b.length%7;if(padLen==7)padLen=0;var bPad="";for(var i=0;i<padLen;i++)bPad+="0";b=bPad+b;for(var i=0;i<b.length-1;i+=7){var b8=b.substr(i,7);if(i!=b.length-7)b8="1"+b8;h+=itox(parseInt(b8,2))}return h};KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);this.hT="06";this.setValueHex=function(newHexString){this.hTLV=null;this.isModified=true;this.s=null;this.hV=newHexString};this.setValueOidString=function(oidString){if(!oidString.match(/^[0-9.]+$/)){throw"malformed oid string: "+oidString}var h="";var a=oidString.split(".");var i0=parseInt(a[0])*40+parseInt(a[1]);h+=itox(i0);a.splice(0,2);for(var i=0;i<a.length;i++){h+=roidtox(a[i])}this.hTLV=null;this.isModified=true;this.s=null;this.hV=h};this.setValueName=function(oidName){if(typeof KJUR.asn1.x509.OID.name2oidList[oidName]!="undefined"){var oid=KJUR.asn1.x509.OID.name2oidList[oidName];this.setValueOidString(oid)}else{throw"DERObjectIdentifier oidName undefined: "+oidName}};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined"){if(typeof params["oid"]!="undefined"){this.setValueOidString(params["oid"])}else if(typeof params["hex"]!="undefined"){this.setValueHex(params["hex"])}else if(typeof params["name"]!="undefined"){this.setValueName(params["name"])}}};JSX.extend(KJUR.asn1.DERObjectIdentifier,KJUR.asn1.ASN1Object);KJUR.asn1.DERUTF8String=function(params){KJUR.asn1.DERUTF8String.superclass.constructor.call(this,params);this.hT="0c"};JSX.extend(KJUR.asn1.DERUTF8String,KJUR.asn1.DERAbstractString);KJUR.asn1.DERNumericString=function(params){KJUR.asn1.DERNumericString.superclass.constructor.call(this,params);this.hT="12"};JSX.extend(KJUR.asn1.DERNumericString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERPrintableString=function(params){KJUR.asn1.DERPrintableString.superclass.constructor.call(this,params);this.hT="13"};JSX.extend(KJUR.asn1.DERPrintableString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERTeletexString=function(params){KJUR.asn1.DERTeletexString.superclass.constructor.call(this,params);this.hT="14"};JSX.extend(KJUR.asn1.DERTeletexString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERIA5String=function(params){KJUR.asn1.DERIA5String.superclass.constructor.call(this,params);this.hT="16"};JSX.extend(KJUR.asn1.DERIA5String,KJUR.asn1.DERAbstractString);KJUR.asn1.DERUTCTime=function(params){KJUR.asn1.DERUTCTime.superclass.constructor.call(this,params);this.hT="17";this.setByDate=function(dateObject){this.hTLV=null;this.isModified=true;this.date=dateObject;this.s=this.formatDate(this.date,"utc");this.hV=stohex(this.s)};if(typeof params!="undefined"){if(typeof params["str"]!="undefined"){this.setString(params["str"])}else if(typeof params["hex"]!="undefined"){this.setStringHex(params["hex"])}else if(typeof params["date"]!="undefined"){this.setByDate(params["date"])}}};JSX.extend(KJUR.asn1.DERUTCTime,KJUR.asn1.DERAbstractTime);KJUR.asn1.DERGeneralizedTime=function(params){KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this,params);this.hT="18";this.setByDate=function(dateObject){this.hTLV=null;this.isModified=true;this.date=dateObject;this.s=this.formatDate(this.date,"gen");this.hV=stohex(this.s)};if(typeof params!="undefined"){if(typeof params["str"]!="undefined"){this.setString(params["str"])}else if(typeof params["hex"]!="undefined"){this.setStringHex(params["hex"])}else if(typeof params["date"]!="undefined"){this.setByDate(params["date"])}}};JSX.extend(KJUR.asn1.DERGeneralizedTime,KJUR.asn1.DERAbstractTime);KJUR.asn1.DERSequence=function(params){KJUR.asn1.DERSequence.superclass.constructor.call(this,params);this.hT="30";this.getFreshValueHex=function(){var h="";for(var i=0;i<this.asn1Array.length;i++){var asn1Obj=this.asn1Array[i];h+=asn1Obj.getEncodedHex()}this.hV=h;return this.hV}};JSX.extend(KJUR.asn1.DERSequence,KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERSet=function(params){KJUR.asn1.DERSet.superclass.constructor.call(this,params);this.hT="31";this.getFreshValueHex=function(){var a=new Array;for(var i=0;i<this.asn1Array.length;i++){var asn1Obj=this.asn1Array[i];a.push(asn1Obj.getEncodedHex())}a.sort();this.hV=a.join("");return this.hV}};JSX.extend(KJUR.asn1.DERSet,KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERTaggedObject=function(params){KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);this.hT="a0";this.hV="";this.isExplicit=true;this.asn1Object=null;this.setASN1Object=function(isExplicitFlag,tagNoHex,asn1Object){this.hT=tagNoHex;this.isExplicit=isExplicitFlag;this.asn1Object=asn1Object;if(this.isExplicit){this.hV=this.asn1Object.getEncodedHex();this.hTLV=null;this.isModified=true}else{this.hV=null;this.hTLV=asn1Object.getEncodedHex();this.hTLV=this.hTLV.replace(/^../,tagNoHex);this.isModified=false}};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined"){if(typeof params["tag"]!="undefined"){this.hT=params["tag"]}if(typeof params["explicit"]!="undefined"){this.isExplicit=params["explicit"]}if(typeof params["obj"]!="undefined"){this.asn1Object=params["obj"];this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)}}};JSX.extend(KJUR.asn1.DERTaggedObject,KJUR.asn1.ASN1Object);var Hex=function(undefined){"use strict";var Hex={},decoder;Hex.decode=function(a){var i;if(decoder===undefined){var hex="0123456789ABCDEF",ignore=" \f\n\r\t \u2028\u2029";decoder=[];for(i=0;i<16;++i)decoder[hex.charAt(i)]=i;hex=hex.toLowerCase();for(i=10;i<16;++i)decoder[hex.charAt(i)]=i;for(i=0;i<ignore.length;++i)decoder[ignore.charAt(i)]=-1}var out=[],bits=0,char_count=0;for(i=0;i<a.length;++i){var c=a.charAt(i);if(c=="=")break;c=decoder[c];if(c==-1)continue;if(c===undefined)throw"Illegal character at offset "+i;bits|=c;if(++char_count>=2){out[out.length]=bits;bits=0;char_count=0}else{bits<<=4}}if(char_count)throw"Hex encoding incomplete: 4 bits missing";return out};return Hex}();var Base64=function(undefined){"use strict";var Base64={},decoder;Base64.decode=function(a){var i;if(decoder===undefined){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ignore="= \f\n\r\t \u2028\u2029";decoder=[];for(i=0;i<64;++i)decoder[b64.charAt(i)]=i;for(i=0;i<ignore.length;++i)decoder[ignore.charAt(i)]=-1}var out=[];var bits=0,char_count=0;for(i=0;i<a.length;++i){var c=a.charAt(i);if(c=="=")break;c=decoder[c];if(c==-1)continue;if(c===undefined)throw"Illegal character at offset "+i;bits|=c;if(++char_count>=4){out[out.length]=bits>>16;out[out.length]=bits>>8&255;out[out.length]=bits&255;bits=0;char_count=0}else{bits<<=6}}switch(char_count){case 1:throw"Base64 encoding incomplete: at least 2 bits missing";case 2:out[out.length]=bits>>10;break;case 3:out[out.length]=bits>>16;out[out.length]=bits>>8&255;break}return out};Base64.re=/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;Base64.unarmor=function(a){var m=Base64.re.exec(a);if(m){if(m[1])a=m[1];else if(m[2])a=m[2];else throw"RegExp out of sync"}return Base64.decode(a)};return Base64}();var ASN1=function(undefined){"use strict";var hardLimit=100,ellipsis="…",DOM={tag:function(tagName,className){var t=document.createElement(tagName);t.className=className;return t},text:function(str){return document.createTextNode(str)}};function Stream(enc,pos){if(enc instanceof Stream){this.enc=enc.enc;this.pos=enc.pos}else{this.enc=enc;this.pos=pos}}Stream.prototype.get=function(pos){if(pos===undefined)pos=this.pos++;if(pos>=this.enc.length)throw"Requesting byte offset "+pos+" on a stream of length "+this.enc.length;return this.enc[pos]};Stream.prototype.hexDigits="0123456789ABCDEF";Stream.prototype.hexByte=function(b){return this.hexDigits.charAt(b>>4&15)+this.hexDigits.charAt(b&15)};Stream.prototype.hexDump=function(start,end,raw){var s="";for(var i=start;i<end;++i){s+=this.hexByte(this.get(i));if(raw!==true)switch(i&15){case 7:s+="  ";break;case 15:s+="\n";break;default:s+=" "}}return s};Stream.prototype.parseStringISO=function(start,end){var s="";for(var i=start;i<end;++i)s+=String.fromCharCode(this.get(i));return s};Stream.prototype.parseStringUTF=function(start,end){var s="";for(var i=start;i<end;){var c=this.get(i++);if(c<128)s+=String.fromCharCode(c);else if(c>191&&c<224)s+=String.fromCharCode((c&31)<<6|this.get(i++)&63);else s+=String.fromCharCode((c&15)<<12|(this.get(i++)&63)<<6|this.get(i++)&63)}return s};Stream.prototype.parseStringBMP=function(start,end){var str="";for(var i=start;i<end;i+=2){var high_byte=this.get(i);var low_byte=this.get(i+1);str+=String.fromCharCode((high_byte<<8)+low_byte)}return str};Stream.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;Stream.prototype.parseTime=function(start,end){var s=this.parseStringISO(start,end),m=this.reTime.exec(s);if(!m)return"Unrecognized time: "+s;s=m[1]+"-"+m[2]+"-"+m[3]+" "+m[4];if(m[5]){s+=":"+m[5];if(m[6]){s+=":"+m[6];if(m[7])s+="."+m[7]}}if(m[8]){s+=" UTC";if(m[8]!="Z"){s+=m[8];if(m[9])s+=":"+m[9]}}return s};Stream.prototype.parseInteger=function(start,end){var len=end-start;if(len>4){len<<=3;var s=this.get(start);if(s===0)len-=8;else while(s<128){s<<=1;--len}return"("+len+" bit)"}var n=0;for(var i=start;i<end;++i)n=n<<8|this.get(i);return n};Stream.prototype.parseBitString=function(start,end){var unusedBit=this.get(start),lenBit=(end-start-1<<3)-unusedBit,s="("+lenBit+" bit)";if(lenBit<=20){var skip=unusedBit;s+=" ";for(var i=end-1;i>start;--i){var b=this.get(i);for(var j=skip;j<8;++j)s+=b>>j&1?"1":"0";skip=0}}return s};Stream.prototype.parseOctetString=function(start,end){var len=end-start,s="("+len+" byte) ";if(len>hardLimit)end=start+hardLimit;for(var i=start;i<end;++i)s+=this.hexByte(this.get(i));if(len>hardLimit)s+=ellipsis;return s};Stream.prototype.parseOID=function(start,end){var s="",n=0,bits=0;for(var i=start;i<end;++i){var v=this.get(i);n=n<<7|v&127;bits+=7;if(!(v&128)){if(s===""){var m=n<80?n<40?0:1:2;s=m+"."+(n-m*40)}else s+="."+(bits>=31?"bigint":n);n=bits=0}}return s};function ASN1(stream,header,length,tag,sub){this.stream=stream;this.header=header;this.length=length;this.tag=tag;this.sub=sub}ASN1.prototype.typeName=function(){if(this.tag===undefined)return"unknown";var tagClass=this.tag>>6,tagConstructed=this.tag>>5&1,tagNumber=this.tag&31;switch(tagClass){case 0:switch(tagNumber){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString";default:return"Universal_"+tagNumber.toString(16)}case 1:return"Application_"+tagNumber.toString(16);case 2:return"["+tagNumber+"]";case 3:return"Private_"+tagNumber.toString(16)}};ASN1.prototype.reSeemsASCII=/^[ -~]+$/;ASN1.prototype.content=function(){if(this.tag===undefined)return null;var tagClass=this.tag>>6,tagNumber=this.tag&31,content=this.posContent(),len=Math.abs(this.length);if(tagClass!==0){if(this.sub!==null)return"("+this.sub.length+" elem)";var s=this.stream.parseStringISO(content,content+Math.min(len,hardLimit));if(this.reSeemsASCII.test(s))return s.substring(0,2*hardLimit)+(s.length>2*hardLimit?ellipsis:"");else return this.stream.parseOctetString(content,content+len)}switch(tagNumber){case 1:return this.stream.get(content)===0?"false":"true";case 2:return this.stream.parseInteger(content,content+len);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(content,content+len);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(content,content+len);case 6:return this.stream.parseOID(content,content+len);case 16:case 17:return"("+this.sub.length+" elem)";case 12:return this.stream.parseStringUTF(content,content+len);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(content,content+len);case 30:return this.stream.parseStringBMP(content,content+len);case 23:case 24:return this.stream.parseTime(content,content+len)}return null};ASN1.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(this.sub===null?"null":this.sub.length)+"]"};ASN1.prototype.print=function(indent){if(indent===undefined)indent="";document.writeln(indent+this);if(this.sub!==null){indent+="  ";for(var i=0,max=this.sub.length;i<max;++i)this.sub[i].print(indent)}};ASN1.prototype.toPrettyString=function(indent){if(indent===undefined)indent="";var s=indent+this.typeName()+" @"+this.stream.pos;if(this.length>=0)s+="+";s+=this.length;if(this.tag&32)s+=" (constructed)";else if((this.tag==3||this.tag==4)&&this.sub!==null)s+=" (encapsulates)";s+="\n";if(this.sub!==null){indent+="  ";for(var i=0,max=this.sub.length;i<max;++i)s+=this.sub[i].toPrettyString(indent)}return s};ASN1.prototype.toDOM=function(){var node=DOM.tag("div","node");node.asn1=this;var head=DOM.tag("div","head");var s=this.typeName().replace(/_/g," ");head.innerHTML=s;var content=this.content();if(content!==null){content=String(content).replace(/</g,"&lt;");var preview=DOM.tag("span","preview");preview.appendChild(DOM.text(content));head.appendChild(preview)}node.appendChild(head);this.node=node;this.head=head;var value=DOM.tag("div","value");s="Offset: "+this.stream.pos+"<br/>";s+="Length: "+this.header+"+";if(this.length>=0)s+=this.length;else s+=-this.length+" (undefined)";if(this.tag&32)s+="<br/>(constructed)";else if((this.tag==3||this.tag==4)&&this.sub!==null)s+="<br/>(encapsulates)";if(content!==null){s+="<br/>Value:<br/><b>"+content+"</b>";if(typeof oids==="object"&&this.tag==6){var oid=oids[content];if(oid){if(oid.d)s+="<br/>"+oid.d;if(oid.c)s+="<br/>"+oid.c;if(oid.w)s+="<br/>(warning!)"}}}value.innerHTML=s;node.appendChild(value);var sub=DOM.tag("div","sub");if(this.sub!==null){for(var i=0,max=this.sub.length;i<max;++i)sub.appendChild(this.sub[i].toDOM())}node.appendChild(sub);head.onclick=function(){node.className=node.className=="node collapsed"?"node":"node collapsed"};return node};ASN1.prototype.posStart=function(){return this.stream.pos};ASN1.prototype.posContent=function(){return this.stream.pos+this.header};ASN1.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)};ASN1.prototype.fakeHover=function(current){this.node.className+=" hover";if(current)this.head.className+=" hover"};ASN1.prototype.fakeOut=function(current){var re=/ ?hover/;this.node.className=this.node.className.replace(re,"");if(current)this.head.className=this.head.className.replace(re,"")};ASN1.prototype.toHexDOM_sub=function(node,className,stream,start,end){if(start>=end)return;var sub=DOM.tag("span",className);sub.appendChild(DOM.text(stream.hexDump(start,end)));node.appendChild(sub)};ASN1.prototype.toHexDOM=function(root){var node=DOM.tag("span","hex");if(root===undefined)root=node;this.head.hexNode=node;this.head.onmouseover=function(){this.hexNode.className="hexCurrent"};this.head.onmouseout=function(){this.hexNode.className="hex"};node.asn1=this;node.onmouseover=function(){var current=!root.selected;if(current){root.selected=this.asn1;this.className="hexCurrent"}this.asn1.fakeHover(current)};node.onmouseout=function(){var current=root.selected==this.asn1;this.asn1.fakeOut(current);if(current){root.selected=null;this.className="hex"}};this.toHexDOM_sub(node,"tag",this.stream,this.posStart(),this.posStart()+1);this.toHexDOM_sub(node,this.length>=0?"dlen":"ulen",this.stream,this.posStart()+1,this.posContent());if(this.sub===null)node.appendChild(DOM.text(this.stream.hexDump(this.posContent(),this.posEnd())));else if(this.sub.length>0){var first=this.sub[0];var last=this.sub[this.sub.length-1];this.toHexDOM_sub(node,"intro",this.stream,this.posContent(),first.posStart());for(var i=0,max=this.sub.length;i<max;++i)node.appendChild(this.sub[i].toHexDOM(root));this.toHexDOM_sub(node,"outro",this.stream,last.posEnd(),this.posEnd())}return node};ASN1.prototype.toHexString=function(root){return this.stream.hexDump(this.posStart(),this.posEnd(),true)};ASN1.decodeLength=function(stream){var buf=stream.get(),len=buf&127;if(len==buf)return len;if(len>3)throw"Length over 24 bits not supported at position "+(stream.pos-1);if(len===0)return-1;buf=0;for(var i=0;i<len;++i)buf=buf<<8|stream.get();return buf};ASN1.hasContent=function(tag,len,stream){if(tag&32)return true;if(tag<3||tag>4)return false;var p=new Stream(stream);if(tag==3)p.get();var subTag=p.get();if(subTag>>6&1)return false;try{var subLength=ASN1.decodeLength(p);return p.pos-stream.pos+subLength==len}catch(exception){return false}};ASN1.decode=function(stream){if(!(stream instanceof Stream))stream=new Stream(stream,0);var streamStart=new Stream(stream),tag=stream.get(),len=ASN1.decodeLength(stream),header=stream.pos-streamStart.pos,sub=null;if(ASN1.hasContent(tag,len,stream)){var start=stream.pos;if(tag==3)stream.get();sub=[];if(len>=0){var end=start+len;while(stream.pos<end)sub[sub.length]=ASN1.decode(stream);if(stream.pos!=end)throw"Content size is not correct for container starting at offset "+start}else{try{for(;;){var s=ASN1.decode(stream);if(s.tag===0)break;sub[sub.length]=s}len=start-stream.pos}catch(e){throw"Exception while decoding undefined length content: "+e}}}else stream.pos+=len;return new ASN1(streamStart,header,len,tag,sub)};ASN1.test=function(){var test=[{value:[39],expected:39},{value:[129,201],expected:201},{value:[131,254,220,186],expected:16702650}];for(var i=0,max=test.length;i<max;++i){var pos=0,stream=new Stream(test[i].value,0),res=ASN1.decodeLength(stream);if(res!=test[i].expected)document.write("In test["+i+"] expected "+test[i].expected+" got "+res+"\n")}};return ASN1}();ASN1.prototype.getHexStringValue=function(){var hexString=this.toHexString();var offset=this.header*2;var length=this.length*2;return hexString.substr(offset,length)};RSAKey.prototype.parseKey=function(pem){try{var modulus=0;var public_exponent=0;var reHex=/^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;var der=reHex.test(pem)?Hex.decode(pem):Base64.unarmor(pem);var asn1=ASN1.decode(der);if(asn1.sub.length===9){modulus=asn1.sub[1].getHexStringValue();this.n=parseBigInt(modulus,16);public_exponent=asn1.sub[2].getHexStringValue();this.e=parseInt(public_exponent,16);var private_exponent=asn1.sub[3].getHexStringValue();this.d=parseBigInt(private_exponent,16);var prime1=asn1.sub[4].getHexStringValue();this.p=parseBigInt(prime1,16);var prime2=asn1.sub[5].getHexStringValue();this.q=parseBigInt(prime2,16);var exponent1=asn1.sub[6].getHexStringValue();this.dmp1=parseBigInt(exponent1,16);var exponent2=asn1.sub[7].getHexStringValue();this.dmq1=parseBigInt(exponent2,16);var coefficient=asn1.sub[8].getHexStringValue();this.coeff=parseBigInt(coefficient,16)}else if(asn1.sub.length===2){var bit_string=asn1.sub[1];var sequence=bit_string.sub[0];modulus=sequence.sub[0].getHexStringValue();this.n=parseBigInt(modulus,16);public_exponent=sequence.sub[1].getHexStringValue();this.e=parseInt(public_exponent,16)}else{return false}return true}catch(ex){return false}};RSAKey.prototype.getPrivateBaseKey=function(){var options={array:[new KJUR.asn1.DERInteger({int:0}),new KJUR.asn1.DERInteger({bigint:this.n}),new KJUR.asn1.DERInteger({int:this.e}),new KJUR.asn1.DERInteger({bigint:this.d}),new KJUR.asn1.DERInteger({bigint:this.p}),new KJUR.asn1.DERInteger({bigint:this.q}),new KJUR.asn1.DERInteger({bigint:this.dmp1}),new KJUR.asn1.DERInteger({bigint:this.dmq1}),new KJUR.asn1.DERInteger({bigint:this.coeff})]};var seq=new KJUR.asn1.DERSequence(options);return seq.getEncodedHex()};RSAKey.prototype.getPrivateBaseKeyB64=function(){return hex2b64(this.getPrivateBaseKey())};RSAKey.prototype.getPublicBaseKey=function(){var options={array:[new KJUR.asn1.DERObjectIdentifier({oid:"1.2.840.113549.1.1.1"}),new KJUR.asn1.DERNull]};var first_sequence=new KJUR.asn1.DERSequence(options);options={array:[new KJUR.asn1.DERInteger({bigint:this.n}),new KJUR.asn1.DERInteger({int:this.e})]};var second_sequence=new KJUR.asn1.DERSequence(options);options={hex:"00"+second_sequence.getEncodedHex()};var bit_string=new KJUR.asn1.DERBitString(options);options={array:[first_sequence,bit_string]};var seq=new KJUR.asn1.DERSequence(options);return seq.getEncodedHex()};RSAKey.prototype.getPublicBaseKeyB64=function(){return hex2b64(this.getPublicBaseKey())};RSAKey.prototype.wordwrap=function(str,width){width=width||64;if(!str){return str}var regex="(.{1,"+width+"})( +|$\n?)|(.{1,"+width+"})";return str.match(RegExp(regex,"g")).join("\n")};RSAKey.prototype.getPrivateKey=function(){var key="-----BEGIN RSA PRIVATE KEY-----\n";key+=this.wordwrap(this.getPrivateBaseKeyB64())+"\n";key+="-----END RSA PRIVATE KEY-----";return key};RSAKey.prototype.getPublicKey=function(){var key="-----BEGIN PUBLIC KEY-----\n";key+=this.wordwrap(this.getPublicBaseKeyB64())+"\n";key+="-----END PUBLIC KEY-----";return key};RSAKey.prototype.hasPublicKeyProperty=function(obj){obj=obj||{};return obj.hasOwnProperty("n")&&obj.hasOwnProperty("e")};RSAKey.prototype.hasPrivateKeyProperty=function(obj){obj=obj||{};return obj.hasOwnProperty("n")&&obj.hasOwnProperty("e")&&obj.hasOwnProperty("d")&&obj.hasOwnProperty("p")&&obj.hasOwnProperty("q")&&obj.hasOwnProperty("dmp1")&&obj.hasOwnProperty("dmq1")&&obj.hasOwnProperty("coeff")};RSAKey.prototype.parsePropertiesFrom=function(obj){this.n=obj.n;this.e=obj.e;if(obj.hasOwnProperty("d")){this.d=obj.d;this.p=obj.p;this.q=obj.q;this.dmp1=obj.dmp1;this.dmq1=obj.dmq1;this.coeff=obj.coeff}};var JSEncryptRSAKey=function(key){RSAKey.call(this);if(key){if(typeof key==="string"){this.parseKey(key)}else if(this.hasPrivateKeyProperty(key)||this.hasPublicKeyProperty(key)){this.parsePropertiesFrom(key)}}};JSEncryptRSAKey.prototype=new RSAKey;JSEncryptRSAKey.prototype.constructor=JSEncryptRSAKey;var JSEncrypt=function(options){options=options||{};this.default_key_size=parseInt(options.default_key_size)||1024;this.default_public_exponent=options.default_public_exponent||"010001";this.log=options.log||false;this.key=null};JSEncrypt.prototype.setKey=function(key){if(this.log&&this.key){console.warn("A key was already set, overriding existing.")}this.key=new JSEncryptRSAKey(key)};JSEncrypt.prototype.setPrivateKey=function(privkey){this.setKey(privkey)};JSEncrypt.prototype.setPublicKey=function(pubkey){this.setKey(pubkey);
};JSEncrypt.prototype.decrypt=function(string){try{return this.getKey().decrypt(b64tohex(string))}catch(ex){return false}};JSEncrypt.prototype.encrypt=function(string){try{return hex2b64(this.getKey().encrypt(string))}catch(ex){return false}};JSEncrypt.prototype.getKey=function(cb){if(!this.key){this.key=new JSEncryptRSAKey;if(cb&&{}.toString.call(cb)==="[object Function]"){this.key.generateAsync(this.default_key_size,this.default_public_exponent,cb);return}this.key.generate(this.default_key_size,this.default_public_exponent)}return this.key};JSEncrypt.prototype.getPrivateKey=function(){return this.getKey().getPrivateKey()};JSEncrypt.prototype.getPrivateKeyB64=function(){return this.getKey().getPrivateBaseKeyB64()};JSEncrypt.prototype.getPublicKey=function(){return this.getKey().getPublicKey()};JSEncrypt.prototype.getPublicKeyB64=function(){return this.getKey().getPublicBaseKeyB64()};exports.JSEncrypt=JSEncrypt})(JSEncryptExports);var JSEncrypt=JSEncryptExports.JSEncrypt;
/*[/static/bui/lib/gt/0.4.6/gt.js]*/
﻿"v0.4.6 Geetest Inc.";

(function (window) {
    "use strict";
    if (typeof window === 'undefined') {
        throw new Error('Geetest requires browser environment');
    }

var document = window.document;
var Math = window.Math;
var head = document.getElementsByTagName("head")[0];

function _Object(obj) {
    this._obj = obj;
}

_Object.prototype = {
    _each: function (process) {
        var _obj = this._obj;
        for (var k in _obj) {
            if (_obj.hasOwnProperty(k)) {
                process(k, _obj[k]);
            }
        }
        return this;
    }
};

function Config(config) {
    var self = this;
    new _Object(config)._each(function (key, value) {
        self[key] = value;
    });
}

Config.prototype = {
    api_server: 'api.geetest.com',
    protocol: 'http://',
    typePath: '/gettype.php',
    fallback_config: {
        slide: {
            static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
            type: 'slide',
            slide: '/static/js/geetest.0.0.0.js'
        },
        fullpage: {
            static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
            type: 'fullpage',
            fullpage: '/static/js/fullpage.0.0.0.js'
        }
    },
    _get_fallback_config: function () {
        var self = this;
        if (isString(self.type)) {
            return self.fallback_config[self.type];
        } else if (self.new_captcha) {
            return self.fallback_config.fullpage;
        } else {
            return self.fallback_config.slide;
        }
    },
    _extend: function (obj) {
        var self = this;
        new _Object(obj)._each(function (key, value) {
            self[key] = value;
        })
    }
};
var isNumber = function (value) {
    return (typeof value === 'number');
};
var isString = function (value) {
    return (typeof value === 'string');
};
var isBoolean = function (value) {
    return (typeof value === 'boolean');
};
var isObject = function (value) {
    return (typeof value === 'object' && value !== null);
};
var isFunction = function (value) {
    return (typeof value === 'function');
};

var callbacks = {};
var status = {};

var random = function () {
    return parseInt(Math.random() * 10000) + (new Date()).valueOf();
};

var loadScript = function (url, cb) {
    var script = document.createElement("script");
    script.charset = "UTF-8";
    script.async = true;

    script.onerror = function () {
        cb(true);
    };
    var loaded = false;
    script.onload = script.onreadystatechange = function () {
        if (!loaded &&
            (!script.readyState ||
            "loaded" === script.readyState ||
            "complete" === script.readyState)) {

            loaded = true;
            setTimeout(function () {
                cb(false);
            }, 0);
        }
    };
    script.src = url;
    head.appendChild(script);
};

var normalizeDomain = function (domain) {
    // special domain: uems.sysu.edu.cn/jwxt/geetest/
    // return domain.replace(/^https?:\/\/|\/.*$/g, ''); uems.sysu.edu.cn
    return domain.replace(/^https?:\/\/|\/$/g, ''); // uems.sysu.edu.cn/jwxt/geetest
};
var normalizePath = function (path) {
    path = path.replace(/\/+/g, '/');
    if (path.indexOf('/') !== 0) {
        path = '/' + path;
    }
    return path;
};
var normalizeQuery = function (query) {
    if (!query) {
        return '';
    }
    var q = '?';
    new _Object(query)._each(function (key, value) {
        if (isString(value) || isNumber(value) || isBoolean(value)) {
            q = q + encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        }
    });
    if (q === '?') {
        q = '';
    }
    return q.replace(/&$/, '');
};
var makeURL = function (protocol, domain, path, query) {
    domain = normalizeDomain(domain);

    var url = normalizePath(path) + normalizeQuery(query);
    if (domain) {
        url = protocol + domain + url;
    }

    return url;
};

var load = function (protocol, domains, path, query, cb) {
    var tryRequest = function (at) {

        var url = makeURL(protocol, domains[at], path, query);
        loadScript(url, function (err) {
            if (err) {
                if (at >= domains.length - 1) {
                    cb(true);
                } else {
                    tryRequest(at + 1);
                }
            } else {
                cb(false);
            }
        });
    };
    tryRequest(0);
};


var jsonp = function (domains, path, config, callback) {
    if (isObject(config.getLib)) {
        config._extend(config.getLib);
        callback(config);
        return;
    }
    if (config.offline) {
        callback(config._get_fallback_config());
        return;
    }

    var cb = "geetest_" + random();
    window[cb] = function (data) {
        if (data.status == 'success') {
            callback(data.data);
        } else if (!data.status) {
            callback(data);
        } else {
            callback(config._get_fallback_config());
        }
        window[cb] = undefined;
        try {
            delete window[cb];
        } catch (e) {
        }
    };
    load(config.protocol, domains, path, {
        gt: config.gt,
        callback: cb
    }, function (err) {
        if (err) {
            callback(config._get_fallback_config());
        }
    });
};

var throwError = function (errorType, config) {
    var errors = {
        networkError: '网络错误',
        gtTypeError: 'gt字段不是字符串类型'
    };
    if (typeof config.onError === 'function') {
        config.onError(errors[errorType]);
    } else {
        throw new Error(errors[errorType]);
    }
};

var detect = function () {
    return window.Geetest || document.getElementById("gt_lib");
};

if (detect()) {
    status.slide = "loaded";
}

window.initGeetest = function (userConfig, callback) {

    var config = new Config(userConfig);

    if (userConfig.https) {
        config.protocol = 'https://';
    } else if (!userConfig.protocol) {
        config.protocol = window.location.protocol + '//';
    }

    // for KFC
    if (userConfig.gt === '050cffef4ae57b5d5e529fea9540b0d1' ||
        userConfig.gt === '3bd38408ae4af923ed36e13819b14d42') {
        config.apiserver = 'yumchina.geetest.com/'; // for old js
        config.api_server = 'yumchina.geetest.com';
    }

    if (isObject(userConfig.getType)) {
        config._extend(userConfig.getType);
    }
    jsonp([config.api_server || config.apiserver], config.typePath, config, function (newConfig) {
        var type = newConfig.type;
        var init = function () {
            config._extend(newConfig);
            callback(new window.Geetest(config));
        };

        callbacks[type] = callbacks[type] || [];
        var s = status[type] || 'init';
        if (s === 'init') {
            status[type] = 'loading';

            callbacks[type].push(init);

            load(config.protocol, newConfig.static_servers || newConfig.domains, newConfig[type] || newConfig.path, null, function (err) {
                if (err) {
                    status[type] = 'fail';
                    throwError('networkError', config);
                } else {
                    status[type] = 'loaded';
                    var cbs = callbacks[type];
                    for (var i = 0, len = cbs.length; i < len; i = i + 1) {
                        var cb = cbs[i];
                        if (isFunction(cb)) {
                            cb();
                        }
                    }
                    callbacks[type] = [];
                }
            });
        } else if (s === "loaded") {
            init();
        } else if (s === "fail") {
            throwError('networkError', config);
        } else if (s === "loading") {
            callbacks[type].push(init);
        }
    });

};


})(window);
/*[/static/ng/lib/fingerprint2/1.5.1/fingerprint2.min.js]*/
!function(e,t,i){"use strict";"function"==typeof define&&define.amd?define(i):"undefined"!=typeof module&&module.exports?module.exports=i():t.exports?t.exports=i():t[e]=i()}("Fingerprint2",this,function(){"use strict";var e=function(t){if(!(this instanceof e))return new e(t);var i={swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[]};this.options=this.extend(t,i),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};return e.prototype={extend:function(e,t){if(null==e)return t;for(var i in e)null!=e[i]&&t[i]!==e[i]&&(t[i]=e[i]);return t},get:function(e){var t=[];t=this.userAgentKey(t),t=this.languageKey(t),t=this.colorDepthKey(t),t=this.pixelRatioKey(t),t=this.hardwareConcurrencyKey(t),t=this.screenResolutionKey(t),t=this.availableScreenResolutionKey(t),t=this.timezoneOffsetKey(t),t=this.sessionStorageKey(t),t=this.localStorageKey(t),t=this.indexedDbKey(t),t=this.addBehaviorKey(t),t=this.openDatabaseKey(t),t=this.cpuClassKey(t),t=this.platformKey(t),t=this.doNotTrackKey(t),t=this.pluginsKey(t),t=this.canvasKey(t),t=this.webglKey(t),t=this.adBlockKey(t),t=this.hasLiedLanguagesKey(t),t=this.hasLiedResolutionKey(t),t=this.hasLiedOsKey(t),t=this.hasLiedBrowserKey(t),t=this.touchSupportKey(t),t=this.customEntropyFunction(t);var i=this;this.fontsKey(t,function(t){var a=[];i.each(t,function(e){var t=e.value;"undefined"!=typeof e.value.join&&(t=e.value.join(";")),a.push(t)});var r=i.x64hash128(a.join("~~~"),31);return e(r,t)})},customEntropyFunction:function(e){return"function"==typeof this.options.customFunction&&e.push({key:"custom",value:this.options.customFunction()}),e},userAgentKey:function(e){return this.options.excludeUserAgent||e.push({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:function(){return navigator.userAgent},languageKey:function(e){return this.options.excludeLanguage||e.push({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.push({key:"color_depth",value:screen.colorDepth||-1}),e},pixelRatioKey:function(e){return this.options.excludePixelRatio||e.push({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:function(e){var t;return t=this.options.detectScreenOrientation&&screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height],"undefined"!=typeof t&&e.push({key:"resolution",value:t}),e},availableScreenResolutionKey:function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},getAvailableScreenResolution:function(e){var t;return screen.availWidth&&screen.availHeight&&(t=this.options.detectScreenOrientation?screen.availHeight>screen.availWidth?[screen.availHeight,screen.availWidth]:[screen.availWidth,screen.availHeight]:[screen.availHeight,screen.availWidth]),"undefined"!=typeof t&&e.push({key:"available_resolution",value:t}),e},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.push({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.push({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.push({key:"local_storage",value:1}),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.push({key:"indexed_db",value:1}),e},addBehaviorKey:function(e){return document.body&&!this.options.excludeAddBehavior&&document.body.addBehavior&&e.push({key:"add_behavior",value:1}),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.push({key:"open_database",value:1}),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.push({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.push({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.push({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.push({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return this.options.excludeWebGL?e:this.isWebGlSupported()?(e.push({key:"webgl",value:this.getWebglFp()}),e):e},adBlockKey:function(e){return this.options.excludeAdBlock||e.push({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.push({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.push({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.push({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.push({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:function(e,t){return this.options.excludeJsFonts?this.flashFontsKey(e,t):this.jsFontsKey(e,t)},flashFontsKey:function(e,t){return this.options.excludeFlashFonts?t(e):this.hasSwfObjectLoaded()&&this.hasMinFlashInstalled()?"undefined"==typeof this.options.swfPath?t(e):void this.loadSwfAndDetectFonts(function(i){e.push({key:"swf_fonts",value:i.join(";")}),t(e)}):t(e)},jsFontsKey:function(e,t){var i=this;return setTimeout(function(){var a=["monospace","sans-serif","serif"],r=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Garamond","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"],n=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];i.options.extendedJsFonts&&(r=r.concat(n)),r=r.concat(i.options.userDefinedFonts);var o="mmmmmmmmmmlli",s="72px",l=document.getElementsByTagName("body")[0],h=document.createElement("div"),u=document.createElement("div"),c={},d={},g=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize=s,e.style.lineHeight="normal",e.innerHTML=o,e},p=function(e,t){var i=g();return i.style.fontFamily="'"+e+"',"+t,i},f=function(){for(var e=[],t=0,i=a.length;t<i;t++){var r=g();r.style.fontFamily=a[t],h.appendChild(r),e.push(r)}return e},m=function(){for(var e={},t=0,i=r.length;t<i;t++){for(var n=[],o=0,s=a.length;o<s;o++){var l=p(r[t],a[o]);u.appendChild(l),n.push(l)}e[r[t]]=n}return e},T=function(e){for(var t=!1,i=0;i<a.length;i++)if(t=e[i].offsetWidth!==c[a[i]]||e[i].offsetHeight!==d[a[i]])return t;return t},S=f();l.appendChild(h);for(var x=0,v=a.length;x<v;x++)c[a[x]]=S[x].offsetWidth,d[a[x]]=S[x].offsetHeight;var E=m();l.appendChild(u);for(var M=[],A=0,y=r.length;A<y;A++)T(E[r[A]])&&M.push(r[A]);l.removeChild(u),l.removeChild(h),e.push({key:"js_fonts",value:M}),t(e)},1)},pluginsKey:function(e){return this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||e.push({key:"ie_plugins",value:this.getIEPlugins()}):e.push({key:"regular_plugins",value:this.getRegularPlugins()})),e},getRegularPlugins:function(){for(var e=[],t=0,i=navigator.plugins.length;t<i;t++)e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),this.map(e,function(e){var t=this.map(e,function(e){return[e.type,e.suffixes].join("~")}).join(",");return[e.name,e.description,t].join("::")},this)},getIEPlugins:function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var t=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=this.map(t,function(e){try{return new ActiveXObject(e),e}catch(t){return null}})}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:function(){for(var e=!1,t=0,i=this.options.sortPluginsFor.length;t<i;t++){var a=this.options.sortPluginsFor[t];if(navigator.userAgent.match(a)){e=!0;break}}return e},touchSupportKey:function(e){return this.options.excludeTouchSupport||e.push({key:"touch_support",value:this.getTouchSupport()}),e},hardwareConcurrencyKey:function(e){return this.options.excludeHardwareConcurrency||e.push({key:"hardware_concurrency",value:this.getHardwareConcurrency()}),e},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:function(){try{return!!window.indexedDB}catch(e){return!0}},getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var e=0,t=!1;"undefined"!=typeof navigator.maxTouchPoints?e=navigator.maxTouchPoints:"undefined"!=typeof navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(i){}var a="ontouchstart"in window;return[e,t,a]},getCanvasFp:function(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var i=t.getContext("2d");return i.rect(0,0,10,10),i.rect(2,2,6,6),e.push("canvas winding:"+(i.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),i.textBaseline="alphabetic",i.fillStyle="#f60",i.fillRect(125,1,62,20),i.fillStyle="#069",this.options.dontUseFakeFontInCanvas?i.font="11pt Arial":i.font="11pt no-real-font-123",i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15),i.fillStyle="rgba(102, 204, 0, 0.2)",i.font="18pt Arial",i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45),i.globalCompositeOperation="multiply",i.fillStyle="rgb(255,0,255)",i.beginPath(),i.arc(50,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(0,255,255)",i.beginPath(),i.arc(100,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,255,0)",i.beginPath(),i.arc(75,100,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,0,255)",i.arc(75,75,75,0,2*Math.PI,!0),i.arc(75,75,25,0,2*Math.PI,!0),i.fill("evenodd"),e.push("canvas fp:"+t.toDataURL()),e.join("~")},getWebglFp:function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"},i=function(e){var t,i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");return i?(t=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===t&&(t=2),t):null};if(e=this.getWebglCanvas(),!e)return null;var a=[],r="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",n="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);var s=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),o.itemSize=3,o.numItems=3;var l=e.createProgram(),h=e.createShader(e.VERTEX_SHADER);e.shaderSource(h,r),e.compileShader(h);var u=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(u,n),e.compileShader(u),e.attachShader(l,h),e.attachShader(l,u),e.linkProgram(l),e.useProgram(l),l.vertexPosAttrib=e.getAttribLocation(l,"attrVertex"),l.offsetUniform=e.getUniformLocation(l,"uniformOffset"),e.enableVertexAttribArray(l.vertexPosArray),e.vertexAttribPointer(l.vertexPosAttrib,o.itemSize,e.FLOAT,!1,0,0),e.uniform2f(l.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,o.numItems),null!=e.canvas&&a.push(e.canvas.toDataURL()),a.push("extensions:"+e.getSupportedExtensions().join(";")),a.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),a.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),a.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),a.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),a.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),a.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),a.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),a.push("webgl max anisotropy:"+i(e)),a.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),a.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),a.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),a.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),a.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),a.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),a.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),a.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),a.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),a.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),a.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),a.push("webgl red bits:"+e.getParameter(e.RED_BITS)),a.push("webgl renderer:"+e.getParameter(e.RENDERER)),a.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),a.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),a.push("webgl vendor:"+e.getParameter(e.VENDOR)),a.push("webgl version:"+e.getParameter(e.VERSION));try{var c=e.getExtension("WEBGL_debug_renderer_info");c&&(a.push("webgl unmasked vendor:"+e.getParameter(c.UNMASKED_VENDOR_WEBGL)),a.push("webgl unmasked renderer:"+e.getParameter(c.UNMASKED_RENDERER_WEBGL)))}catch(d){}return e.getShaderPrecisionFormat?(a.push("webgl vertex shader high float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),a.push("webgl vertex shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),a.push("webgl vertex shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),a.push("webgl vertex shader medium float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),a.push("webgl vertex shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),a.push("webgl vertex shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),a.push("webgl vertex shader low float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),a.push("webgl vertex shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),a.push("webgl vertex shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),a.push("webgl fragment shader high float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),a.push("webgl fragment shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),a.push("webgl fragment shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),a.push("webgl fragment shader medium float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),a.push("webgl fragment shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),a.push("webgl fragment shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),a.push("webgl fragment shader low float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),a.push("webgl fragment shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),a.push("webgl fragment shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),a.push("webgl vertex shader high int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),a.push("webgl vertex shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),a.push("webgl vertex shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),a.push("webgl vertex shader medium int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),a.push("webgl vertex shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),a.push("webgl vertex shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),a.push("webgl vertex shader low int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),a.push("webgl vertex shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),a.push("webgl vertex shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),a.push("webgl fragment shader high int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),a.push("webgl fragment shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),a.push("webgl fragment shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),a.push("webgl fragment shader medium int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),a.push("webgl fragment shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),a.push("webgl fragment shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),a.push("webgl fragment shader low int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),a.push("webgl fragment shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),a.push("webgl fragment shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),a.join("~")):a.join("~")},getAdBlock:function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(i){t=!1}return t},getHasLiedLanguages:function(){if("undefined"!=typeof navigator.languages)try{var e=navigator.languages[0].substr(0,2);if(e!==navigator.language.substr(0,2))return!0}catch(t){return!0}return!1},getHasLiedResolution:function(){return screen.width<screen.availWidth||screen.height<screen.availHeight},getHasLiedOs:function(){var e,t=navigator.userAgent.toLowerCase(),i=navigator.oscpu,a=navigator.platform.toLowerCase();e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other";var r;if(r="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,r&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if("undefined"!=typeof i){if(i=i.toLowerCase(),i.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(i.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(i.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if(0===i.indexOf("win")&&0===i.indexOf("linux")&&i.indexOf("mac")>=0&&"other"!==e)return!0}return a.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||((a.indexOf("linux")>=0||a.indexOf("android")>=0||a.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||((a.indexOf("mac")>=0||a.indexOf("ipad")>=0||a.indexOf("ipod")>=0||a.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||(0===a.indexOf("win")&&0===a.indexOf("linux")&&a.indexOf("mac")>=0&&"other"!==e||"undefined"==typeof navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},getHasLiedBrowser:function(){var e,t=navigator.userAgent.toLowerCase(),i=navigator.productSub;if(e=t.indexOf("firefox")>=0?"Firefox":t.indexOf("opera")>=0||t.indexOf("opr")>=0?"Opera":t.indexOf("chrome")>=0?"Chrome":t.indexOf("safari")>=0?"Safari":t.indexOf("trident")>=0?"Internet Explorer":"Other",("Chrome"===e||"Safari"===e||"Opera"===e)&&"20030107"!==i)return!0;var a=eval.toString().length;if(37===a&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===a&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===a&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;var r;try{throw"a"}catch(n){try{n.toSource(),r=!0}catch(o){r=!1}}return!(!r||"Firefox"===e||"Other"===e)},isCanvasSupported:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported())return!1;var e,t=document.createElement("canvas");try{e=t.getContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch(i){e=!1}return!!window.WebGLRenderingContext&&!!e},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},hasSwfObjectLoaded:function(){return"undefined"!=typeof window.swfobject},hasMinFlashInstalled:function(){return swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){var t="___fp_swf_loaded";window[t]=function(t){e(t)};var i=this.options.swfContainerId;this.addFlashDivNode();var a={onReady:t},r={allowScriptAccess:"always",menu:"false"};swfobject.embedSWF(this.options.swfPath,i,"1","1","9.0.0",!1,a,r,{})},getWebglCanvas:function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(i){}return t||(t=null),t},each:function(e,t,i){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,i);else if(e.length===+e.length){for(var a=0,r=e.length;a<r;a++)if(t.call(i,e[a],a,e)==={})return}else for(var n in e)if(e.hasOwnProperty(n)&&t.call(i,e[n],n,e)==={})return},map:function(e,t,i){var a=[];return null==e?a:this.nativeMap&&e.map===this.nativeMap?e.map(t,i):(this.each(e,function(e,r,n){a[a.length]=t.call(i,e,r,n)}),a)},x64Add:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var i=[0,0,0,0];return i[3]+=e[3]+t[3],i[2]+=i[3]>>>16,i[3]&=65535,i[2]+=e[2]+t[2],i[1]+=i[2]>>>16,i[2]&=65535,i[1]+=e[1]+t[1],i[0]+=i[1]>>>16,i[1]&=65535,i[0]+=e[0]+t[0],i[0]&=65535,[i[0]<<16|i[1],i[2]<<16|i[3]]},x64Multiply:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var i=[0,0,0,0];return i[3]+=e[3]*t[3],i[2]+=i[3]>>>16,i[3]&=65535,i[2]+=e[2]*t[3],i[1]+=i[2]>>>16,i[2]&=65535,i[2]+=e[3]*t[2],i[1]+=i[2]>>>16,i[2]&=65535,i[1]+=e[1]*t[3],i[0]+=i[1]>>>16,i[1]&=65535,i[1]+=e[2]*t[2],i[0]+=i[1]>>>16,i[1]&=65535,i[1]+=e[3]*t[1],i[0]+=i[1]>>>16,i[1]&=65535,i[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],i[0]&=65535,[i[0]<<16|i[1],i[2]<<16|i[3]]},x64Rotl:function(e,t){return t%=64,32===t?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},x64LeftShift:function(e,t){return t%=64,0===t?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},x64Xor:function(e,t){return[e[0]^t[0],e[1]^t[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),e=this.x64Xor(e,[0,e[0]>>>1])},x64hash128:function(e,t){e=e||"",t=t||0;for(var i=e.length%16,a=e.length-i,r=[0,t],n=[0,t],o=[0,0],s=[0,0],l=[2277735313,289559509],h=[1291169091,658871167],u=0;u<a;u+=16)o=[255&e.charCodeAt(u+4)|(255&e.charCodeAt(u+5))<<8|(255&e.charCodeAt(u+6))<<16|(255&e.charCodeAt(u+7))<<24,255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24],
s=[255&e.charCodeAt(u+12)|(255&e.charCodeAt(u+13))<<8|(255&e.charCodeAt(u+14))<<16|(255&e.charCodeAt(u+15))<<24,255&e.charCodeAt(u+8)|(255&e.charCodeAt(u+9))<<8|(255&e.charCodeAt(u+10))<<16|(255&e.charCodeAt(u+11))<<24],o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),r=this.x64Xor(r,o),r=this.x64Rotl(r,27),r=this.x64Add(r,n),r=this.x64Add(this.x64Multiply(r,[0,5]),[0,1390208809]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),n=this.x64Xor(n,s),n=this.x64Rotl(n,31),n=this.x64Add(n,r),n=this.x64Add(this.x64Multiply(n,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],i){case 15:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+14)],48));case 14:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+13)],40));case 13:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+12)],32));case 12:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+11)],24));case 11:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+10)],16));case 10:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+9)],8));case 9:s=this.x64Xor(s,[0,e.charCodeAt(u+8)]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),n=this.x64Xor(n,s);case 8:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+7)],56));case 7:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+6)],48));case 6:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+5)],40));case 5:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+4)],32));case 4:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+3)],24));case 3:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+2)],16));case 2:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+1)],8));case 1:o=this.x64Xor(o,[0,e.charCodeAt(u)]),o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),r=this.x64Xor(r,o)}return r=this.x64Xor(r,[0,e.length]),n=this.x64Xor(n,[0,e.length]),r=this.x64Add(r,n),n=this.x64Add(n,r),r=this.x64Fmix(r),n=this.x64Fmix(n),r=this.x64Add(r,n),n=this.x64Add(n,r),("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)+("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)}},e.VERSION="1.5.1",e});/*[/static/bui/extension/log/login.js]*/
/**
 * 登录
 */
(function (global, $, document, undefined) {
    'use strict';

    var publickey = '-----BEGIN PUBLIC KEY-----' +
            'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2qC67Y3KF6mupPBsnsoI' +
            'qEM1dfohMkMI4Rxj60Ae3MOT+Ch3vPZwCj4P5vVw+sVuRv0N94MqraNxLBlQfyeI' +
            'f2Vu1KOdHD+gFfWneSrNM7Cs4b7Cn+ctCf9tJ239IrLilfsasV6iWc7kDHGIwInM' +
            'J9XqqTZTBnWP07SCQYf8J3mL/vw/PY1klBknwh8oLuJi8+BfAS1KPgMuK60NxTAM' +
            'ny+9h9Dno1kVGeLa0Osm4TkVWK9Uyx0XbbV0IfrnbpT/0FUxC6X+K+gHsWzmywrC' +
            '7145+Bgz0lQo2kRTy551RcyMStlT41poc6ASn8mzCMD4u4MyNU+V0srtFBD8fdwZ' +
            'ZwIDAQAB' +
            '-----END PUBLIC KEY-----';

    // 错误信息显示
    var Message = {
        container: null,
        show: function (text) {
            this.container.html(text);
        },

        clear: function () {
            this.show('');
        }
    };

    var geetestObj = null;
    var bfg;

    // '/common/image_captcha.php?type=zhongwen&width=110&height=32"'
    
    function createVerifyCode(url) {
        var html = '<p class="input-set verify-code">' +
                '<label class="float label-verify-code">验证码</label>' +
                '<input type="text" name="verify_code" class="login-input-text"' +
                    'data-toggle="validate"' +
                    'placeholder="输入验证码"' +
                    'data-required data-required-message="不能为空" />' +
                    '<img class="verify-code-img"' +
                        'width="88" height="32" />' +
            '</p>';

        $('#captchaWrap').html(html);
        var $verifyCode = $('.verify-code-img');
        
        $verifyCode.click(function () {
            var src = url + '&t=' + (new Date()).getTime();
            $verifyCode.attr('src', src);
        }).click();
    }

    function createGeeTest(data) {
        var captchaWrap = document.getElementById('captchaWrap');

        captchaWrap.innerHTML = '';

        $(captchaWrap).after('<input type="hidden" name="client_type" value="web" />');
        $(captchaWrap).after('<input type="hidden" name="geetest_id" value="' + data.geetest_id + '" />');
        $(captchaWrap).after('<input type="hidden" name="ret" value="' + data.ret + '" />');

        initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success,
            new_captcha: data.new_captcha,
            product: 'float',
            width: '296px'
        }, function (captchaObj) {
            geetestObj = captchaObj;
            captchaObj.appendTo(captchaWrap);
        });
    }

    function refreshCaptcha() {
        var $verifyCode = $('.verify-code-img');
        if (geetestObj) {
            geetestObj.reset();
        } else if ($verifyCode[0]) {
            $verifyCode[0].click();
        }
    }

    function getCaptcha() {
        $.ajax({
            type: 'GET',
            url: '//' + bui.webSite.getWebDomain() + '/antispam/captcha/show?jsoncallback=?',
            data: {
                geetest_id: '354d9d4cf14d2cf619e130784b3d6a22', //91dc95b4d57c90450ad0c10bb2e9ba65
                client_type: 'web'
            },
            cache: false,
            dataType: 'jsonp',
            success: function(resp){
                var data = resp.data;
                if (resp.status === 'success') {
                    if (data.type === 'geetest') {
                        createGeeTest(data);
                    } else if (data.type === 'image') {
                        createVerifyCode(data.url);
                    }
                }
            }
        });
    }

    function loginGardener(uid, isPopup, returnHref) {
        var $loginGardener = $($('#tmplLoginGardener').html());
        $loginGardener.find('a[data-mark=verify]').click(function (e) {
            var href = '//' + bui.webSite.getWebDomain() + '/common/reg.ajax.2013.php?jsoncallback=?',
                val = $loginGardener.find('input[name=code]').val();

            e.preventDefault();
 
            if (val === '') {
                alert('请输入短信验证码！');
                return false;
            }

 
            $.getJSON(href, {
                action: 'verifySMS',
                uid: uid,
                code: val,
                bfg: bfg,
                source_platform: 100
            }, function(data) {
                if (data.status == 'success') {
                    $.publish('success.login.log');
                    if (!isPopup && returnHref) {
                        if ($.isPlainObject(data.sso)) {
                            bui.sso.setLoginCookie(data.sso.list,
                                    data.sso.lcookie,
                                    data.sso.nlcookie,
                                    function () {
                                        global.location.href = decodeURIComponent(returnHref);
                                    });
                        }
                    }
                } else {
                    alert('手机没有验证成功！');
                }
            });
            return false;
        });
        $loginGardener.overlay();
    }

    function verifyPhoneNumber(uid, isPopup, returnHref, mobile) {
        var $verifyPhoneNumber = $($('#tmplVerifyPhoneNumber').html());
        $verifyPhoneNumber.find('span[data-mark=mobile]').html(mobile.replace(/^\d{7}/, '*******'));
        $verifyPhoneNumber.delegate('a[data-mark=send]', 'click', function (e) {
            e.preventDefault();
            var $this = $(this),
                interval,
                data;

            e.preventDefault();

            if ($this.hasClass('bui-button-x-large-disabled')) {
                return;
            } else {
                $this.addClass('bui-button-x-large-disabled');
            }

            data = {
                uid: uid,
                mobile: mobile
            };

            $.getJSON('//' + bui.webSite.getWebDomain() + '/common/reg.ajax.2013.php?action=sendSMS&jsoncallback=?', data).done(function (resp) {
                var $span = $this.find('.button-m'),
                    time = 60,
                    text = time + '秒后重新发送';

                if (resp.status == 'success') {
                    $span.html(text);
                    interval = setInterval(function(){
                        time -= 1;
                        if (!time) {
                            text = '获取验证码';
                            clearInterval(interval);
                            $this.removeClass('bui-button-x-large-disabled');
                        } else {
                            text = time + '秒后重新获取';
                        }
                        $span.html(text);
                    }, 1000);
                    alert("验证码发送成功！\n因短信通道不稳定，短信可能有延迟，若您5分钟内未收到验证码，请更换手机或稍后尝试。");
                } else {
                    $this.removeClass('bui-button-x-large-disabled');
                    alert(resp.text);
                }
            }).fail(function () {
                clearInterval(interval);
                $this.removeClass('bui-button-x-large-disabled');
            //}).always(function () {
            });
        }).delegate('a[data-mark=verify]', 'click', function (e) {
            var href = '//' + bui.webSite.getWebDomain() + '/common/reg.ajax.2013.php?jsoncallback=?',
                val = $verifyPhoneNumber.find('input[name=code]').val();

            e.preventDefault();
 
            if (val === '') {
                alert('请输入短信验证码！');
                return false;
            }

 
            $.getJSON(href, {
                action: 'verifySMS',
                uid: uid,
                code: val,
                bfg: bfg,
                source_platform: 100
            }, function(data) {
                if (data.status == 'success') {
                    $.publish('success.login.log');
                    if (!isPopup && returnHref) {
                        if ($.isPlainObject(data.sso)) {
                            bui.sso.setLoginCookie(data.sso.list,
                                    data.sso.lcookie,
                                    data.sso.nlcookie,
                                    function () {
                                        global.location.href = decodeURIComponent(returnHref);
                                    });
                        }
                    }
                } else {
                    alert('手机没有验证成功！');
                }
            });
            return false;
        });
        $verifyPhoneNumber.overlay();
    }


    function init(isPopup) {
        var $login = $('#login'),
            $verify = $($('#tmplLoginVerify').html()),
            $againVerify = $($('#tmplAgainLoginVerify').html()),
            $policy = $($('#tmplPolicy').html()),
            $verifyResult = $($('#tmplLoginVerifyResult').html());

        new Fingerprint2().get(function (result, components) {
            bfg = result;
            getCaptcha();
        });

        $login.find('input[name=password], input[name=identify], input[name=verify_code]').placeholder();

        if (isPopup) {
            $login.find('a[data-toggle=signup]').one('click', function (e) {
                function auto () {
                    if (bui.getCookie && bui.getCookie('LS')) {
                        $.publish('success.login.log');
                        $(window).unbind('focus', auto);
                    }
                }
                $(window).bind('focus', auto);
            });

            var $link = $login.find('.sub-register-enter a');
            $link.attr('href', $link.attr('href') + '&url=' + encodeURIComponent(location.href));
        }

        Message.container = $login.find('[data-mark="error-message"]');

        $login.delegate('[data-toggle=validate]', 'focus', function () {
            var $this = $(this);

            // 清除错误信息
            $this.removeClass('login-input-text-error');
            $this.nextAll('span.error-tip').remove();

            Message.clear();
        });

        $login.delegate('[data-toggle=validate]', 'blur', function () {
            var $this = $(this),
                validate = $this.data('validate'),
                result;

            if (validate) {
                result = validate.checkValidity();
                if (result !== true) {
                    $this.addClass('login-input-text-error');
                    $this.nextAll('span.error-tip').remove();
                    $this.after('<span class="error-tip">' + result + '</span>');
                }
            }
        });

        $login.delegate('[data-toggle=validate]', 'keydown', function () {
            var $this = $(this);

            Message.clear();
        });

        function doSubimt(){
            var $this = $(this),
                $elems = $this.find('[data-toggle=validate]'),
                $submit = $this.find('input[type=submit]'),
                data = $this.serializeArray(),
                validity = true;

            if (geetestObj && !geetestObj.getValidate()) {
                Message.show('请输入验证码');
                return false;
            }

            $elems.each(function () {
                var $this = $(this),
                    validate = $this.data('validate'),
                    result;

                if (!validate) {
                    $this.validate();
                    validate = $this.data('validate');
                }

                result = validate.checkValidity();

                if (result !== true) {
                    validity = result;
                    $this.blur();
                }
            });

            if (validity === true) {
                $submit.prop('disabled', true);

                $.each(data, function (index, obj) {
                    var encrypt;
                    if (obj.name === 'identify' || obj.name === 'password') {
                        encrypt = new JSEncrypt();
                        encrypt.setPublicKey(publickey);
                        obj.value = encrypt.encrypt(obj.value);
                    }
                });

                data.push({
                    name: 'bfg',
                    value: bfg
                });

                data.push({
                    name: 'source_platform',
                    value: 100
                });
                data.push({
                    name: 'req_source',
                    value: 'pc'
                });

                $.getJSON($this.attr('action'), $.param(data)).done(function (resp) {
                    function wrapper() {
                        if (resp.status == 'success') {
                            $.publish('success.login.log');

                            if (!isPopup && resp.href) {
                                global.location.href = decodeURIComponent(resp.href);
                            }

                        } else {
                            if ((resp.code === 2 || resp.code === 5) && resp.href) {
                                // 邮箱验证弹层
                                var $a;
                                if (resp.code === 2) {
                                    $a = $verify.find('a');
                                } else if (resp.code === 5) {
                                    $a = $againVerify.find('a');
                                }

                                $a.attr('href', resp.href);

                                if (isPopup) {
                                    $a.attr('target', '_blank');
                                    $a.click(function (e) {
                                        //e.preventDefault();
                                        var $a = $verifyResult.find('a[data-mark=verify]');
                                        $a.attr('href', resp.href);

                                        $verifyResult.find('a[data-mark=continue]').click(function (e) {
                                            var href = resp.href.replace('action=send_mail', 'jsoncallback=?');
                                            $.getJSON(href, {
                                                action: 'check_verify'
                                            }, function(data) {
                                                if (data.status == 'success') {
                                                    $.publish('success.login.log');
                                                } else {
                                                    alert('邮箱没有验证成功！');
                                                }
                                            });
                                            return false;
                                        });
                                        $verifyResult.overlay();
                                    });
                                }

                                if (resp.code === 2) {
                                    $verify.overlay();
                                } else if (resp.code === 5) {
                                    $againVerify.overlay();
                                }

                            } else if (resp.code === 3) {
                                // 已登录自动跳转
                                // 已登录，应归为登录成功
                                $.publish('success.login.log');

                                if (resp.href) {
                                    global.location.href = decodeURIComponent(resp.href);
                                }

                            } else if (resp.code === 100) {
                                loginGardener(resp.uid, isPopup, resp.href);
                            } else if (resp.code === 101 || resp.code === 102) {
                                Message.show(resp.text);
                            } else if (resp.code === 200) {
                                verifyPhoneNumber(resp.uid, isPopup, resp.href, $this[0].identify.value);
                            } else if (resp.code === '199*') { // 用户协议变更确认
                                $policy = $policy.overlay();
                                initPolicy(resp.uid);
                            } else if (resp.text) {
                                //刷新验证码 1：密码输入错误，6：验证码输入错误
                                if (resp.code === 1 || resp.code === 6) {
                                    refreshCaptcha();
                                }
                                // 错误提示
                                Message.show(resp.text);
                            }
                        }
                    }

                    if ($.isPlainObject(resp.sso)) {
                        bui.sso.setLoginCookie(resp.sso.list,
                            resp.sso.lcookie,
                            resp.sso.nlcookie,
                            wrapper);
                    } else {
                        wrapper();
                    }
                    //}).fail(function () {
                }).always(function () {
                    $submit.prop('disabled', false);
                });
            }

            return false;
        };

        $login.delegate('form', 'submit', doSubimt);

        function initPolicy(uid) {
            var noBtn = $policy.find('a[data-mark=no]');
            noBtn.click(function() {
                $policy.data('overlay').close();
            });
            var yesBtn = $policy.find('a[data-mark=yes]');
            yesBtn.click(function() {
                $.getJSON($login.find('form').attr('action'), {
                    action: 'setPrivacy',
                    uid: uid
                }, function(data) {
                    if (data.status == 'success') {
                        $policy.data('overlay').close();
                        doSubimt.apply($login.find('form'));
                    } else {
                        alert(data.text);
                    }
                });
            });
        }
    }

    if ($('#login').length) {
        init();
    } else {
        // 注册登录弹层
        $.subscribe('login.log', function (view) {
            // view参数确定log服务返回的模板
            var data = {
                    view: view || 'login'
                },
                url = '//' + bui.webSite.getWebDomain() + '/common/log.php?jsoncallback=?';

            $.getJSON(url, data).done(function (resp) {
                var $login = $(resp.content);

                $login.overlay({
                    onshown: function () {
                        $.publish('shown.login.log');
                    },
                    onclosed: function () {
                        $.publish('closed.login.log');
                    }
                });

                // 弹层关闭
                $.subscribe('success.login.log', function () {
                    // overlay是享元模式
                    if ($login.data('overlay')) {
                        $login.data('overlay').close();
                    }
                    $.publish('closed.log');
                });

                init(true);
            //}).fail(function () {
            //}).always(function () {
            });
        });
    }

}(this, jQuery, document));
/*[/static/bui/extension/log/log.js]*/
/**
 * login signup 公共接口
 */
(function (global, $, document, undefined) {
    'use strict';

    var $body = $(document);

    $body.delegate('.login-form-popup [data-toggle="close.overlay"]', 'click', function () {
        $.publish('closed.log');
    });

    // 登录 弹层
    $body.delegate('[data-toggle="login.log"]', 'click', function (e) {
        e.preventDefault();
        $.publish('login.log', $(this).data('view'));
    });

    // 注册 弹层
    $body.delegate('[data-toggle="signup.log"]', 'click', function (e) {
        e.preventDefault();

        $.publish('signup.log', $(this).data('view'));
    });

}(this, jQuery, document));
/*[/static/bui/extension/log/polyfill.js]*/
/**
 * 登录注册
 * 覆盖老解决方案的接口
 */
(function (global, $, document, undefined) {
    'use strict';

    function login(options, callback) {
        $.subscribe('shown.login.log', function () {
            //console.log('shown.login.log');
            var content = options && options.content;
            $('#pAutoSave').html(content);
        });
        $.subscribe('success.login.log', function () {
            //console.log('success.login.log');
            callback();
        });
 
        /*
        $.subscribe('closed.login.log', function () {
            console.log('closed.login.log');
        });
        */

        $.subscribe('closed.log', function () {
            //console.log('clear');
            $.unsubscribe('shown.login.log');
            $.unsubscribe('success.login.log');
            $.unsubscribe('closed.login.log');
        });
    }

    function signup(options, callback) {
        $.subscribe('shown.signup.log', function () {
            //console.log('shown.signup.log');
            var content = options && options.content;
            $('#pAutoSave').html(content);
        });

        $.subscribe('success.signup.log', function () {
            //console.log('success.signup.log');
            callback();
        });
 
        /*
        $.subscribe('closed.signup.log', function () {
            console.log('closed.signup.log');
        });
        */

        $.subscribe('closed.log', function () {
            //console.log('clear');
            $.unsubscribe('shown.signup.log');
            $.unsubscribe('success.signup.log');
            $.unsubscribe('closed.signup.log');
        });
    }

    window.reg_show_popup = function (type, callback, action, speTitle, redirect_url, options){
        var params;

        login(options, callback);

        signup(options, callback);

        if (action != 'login' && action != 'reg') {
            action = 'login';
        }
        var channel = options && options.channel;
        if (action == 'login') {
            $.publish('login.log', channel === 'ask' ? 'ask.login' : channel);
        } else if (action == 'reg') {
            $.publish('signup.log', channel === 'ask' ? 'ask.signup' : channel);
        }
    };

}(this, jQuery, document));
