var calculatePossibleValues = function(min, max, step) {
    var ret = [];
    for (var i = min; i <= max; i += step) ret.push(i);
    return ret;
};

var rangeToPercents = function(range) {
    var percents = [0];
    var step = 100.0 / (range.length - 1);
    for (var i = 1; i < range.length; i++)
        percents.push(percents[percents.length - 1] + step);
    return percents;
};

var findClosest = function(ary, i, from, to) {
    from = from || 0;
    to = to || ary.length;
    for (var idx = from; idx < to; idx++) {
        if (ary[idx] >= i) {
            if (idx > from) {
                // check if i was closer to the previous value
                if (i - ary[idx - 1] < ary[idx] - i) return idx - 1;
            }
            return idx;
        }
    }
    return to - 1;
};

var setRange = function(values, percents, minIdx, maxIdx) {
    var minLeft = percents[minIdx].toString() + '%';
    var minValue = values[minIdx];
    var maxValue = values[maxIdx];
    this.$minHandle.css('left', minLeft).data({
        value: minValue,
        idx: minIdx
    });
    this.$maxHandle
        .css('left', percents[maxIdx].toString() + '%')
        .data({
            value: maxValue,
            idx: maxIdx
        });
    this.$range.css({
        left: minLeft,
        width: (percents[maxIdx] - percents[minIdx]).toString() + '%'
    });
    this.callbacks.forEach(function(cb) {
        cb.call(this, minValue, maxValue);
    });
};

var handleMove = function(handle, pageX) {
    var values = this.possibleValues;
    var percents = rangeToPercents(values);
    var offset =
        pageX - (handle.offset().left - parseInt(handle.css('marginLeft')));
    var sliderX = this.$slider.offset().left;
    var sliderWidth = this.$slider.outerWidth();

    var setter = null;
    var fromIdx = 0;
    var toIdx = values.length;
    if (handle == this.$minHandle) {
        var that = this;
        toIdx = this.$maxHandle.data('idx');
        setter = function(idx) {
            setRange.call(that, values, percents, idx, toIdx);
        };
    } else {
        fromIdx = this.$minHandle.data('idx') + 1;
        setter = setRange.bind(this, values, percents, fromIdx - 1);
    }

    return function(e) {
        var x = e.pageX - offset;
        var newPercentage = (100.0 * (x - sliderX)) / sliderWidth;
        var idx = findClosest(percents, newPercentage, fromIdx, toIdx);
        setter(idx);
    };
};

var startSlide = function(handle, e) {
    var moveHandler = handleMove.call(this, handle, e.pageX);
    $(document).on('mousemove.wpslide', moveHandler);
    $(document).on('mouseup.wpslide', function(e) {
        moveHandler(e);
        $(document).off('.wpslide');
    });
};

var touchId = null;
var startSlideTouch = function(handle, e) {
    if (e.originalEvent.changedTouches.length == 1 && touchId == null) {
        var touch = e.originalEvent.changedTouches[0];
        touchId = touch.identifier;

        var moveHandler = handleMove.call(this, handle, touch.pageX);
        var findTouch = function(touches) {
            for (var i = 0; i < touches.length; i++) {
                if (touches[i].identifier == touchId) return touches[i];
            }
            return null;
        };
        var touchMoveHandler = function(e) {
            var touch = findTouch(e.originalEvent.changedTouches);
            if (touch) moveHandler(touch);
            e.preventDefault();
        };
        var endTouch = function(e) {
            touchId = null;
            e.preventDefault();
            touchMoveHandler(e);
            $(document).off('.wpslide');
        };

        $(document).on('touchmove.wpslide', touchMoveHandler);
        $(document).on('touchend.wpslide', endTouch);
        $(document).on('touchcancel.wpslide', endTouch);

        e.preventDefault();
    } else {
        $(document).off('.wpslide');
        touchId = null;
    }
};

var adjustRange = function(e) {
    // find which handle is closest to the clicked point
    var minHandlePosition =
        this.$minHandle.offset().left - parseInt(this.$minHandle.css('marginLeft'));
    var maxHandlePosition =
        this.$maxHandle.offset().left - parseInt(this.$maxHandle.css('marginLeft'));
    var moveHandler = null;
    if (e.pageX < minHandlePosition) {
        // to the left of the min handle
        moveHandler = handleMove.call(this, this.$minHandle, minHandlePosition);
    } else if (e.pageX > maxHandlePosition) {
        // to the right of the max handle
        moveHandler = handleMove.call(this, this.$maxHandle, maxHandlePosition);
    } else {
        // between the handles
        if (
            Math.abs(e.pageX - minHandlePosition) <
            Math.abs(e.pageX - maxHandlePosition)
        ) {
            // closer to the min handle
            moveHandler = handleMove.call(this, this.$minHandle, minHandlePosition);
        } else {
            // closer to the max handle
            moveHandler = handleMove.call(this, this.$maxHandle, maxHandlePosition);
        }
    }

    moveHandler(e);

    e.preventDefault();
};

var AgeSlider = function($slider, min, max, step) {
    this.callbacks = [];

    this.$slider = $slider;
    $slider.data('wpslider', this);

    this.$range = $('<div class="ui-slider-range">').appendTo($slider);
    this.$minHandle = $('<span class="ui-slider-handle">').appendTo($slider);
    this.$maxHandle = $('<span class="ui-slider-handle">').appendTo($slider);
    this.setup(min, max, step);

    this.$minHandle.on('mousedown', startSlide.bind(this, this.$minHandle));
    this.$maxHandle.on('mousedown', startSlide.bind(this, this.$maxHandle));

    this.$minHandle.on('touchstart', startSlideTouch.bind(this, this.$minHandle));
    this.$maxHandle.on('touchstart', startSlideTouch.bind(this, this.$maxHandle));

    this.$slider.onclick = function() {
        adjustRange.bind(this);
    };
};

AgeSlider.prototype = {
    setup: function(min, max, step) {
        this.min = min || 0;
        this.max = max || 100;
        this.step = step || 1;
        this.possibleValues = calculatePossibleValues(min, max, step);
        this.setValues(min, max);
    },

    setValues: function(min, max) {
        var percents = rangeToPercents(this.possibleValues);
        var minIdx = findClosest(this.possibleValues, min);
        var maxIdx = findClosest(this.possibleValues, max);
        setRange.call(this, this.possibleValues, percents, minIdx, maxIdx);
    },

    getValues: function() {
        return [this.$minHandle.data('value'), this.$maxHandle.data('value')];
    },

    onChange: function(callback) {
        this.callbacks.push(callback);
    }
};

export default AgeSlider;