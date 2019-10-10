/*
	FOR REFERENCE CANVAS DRAWING METHODS
	ctx.save() - save current state of canvas context
	ctx.restore() - restore canvas context to state of last save
	ctx.translate(x, y) - translate the coordinate system by x, y
	ctx.rotate(r) - rotate the coordinate system by r radians
	ctx.beginPath() - starts a new path
	ctx.closePath() - move back to the starting point of the current path
	ctx.stroke() - stroke the shape of the current path
	ctx.fill() - fill the shape of the current path
	ctx.moveTo(x, y) - move position to x,y
	ctx.lineTo(x, y) - draw line from current position to x, y
	ctx.arc(x, y, radius, startAngle, endAngle) - draw arc at x,y
	ctx.strokeStyle - the stroke color ('rgb(x,x,x)' | '#xxxxxx' | 'color')
	ctx.fillSTyle - the fill color ('rgb(x,x,x)' | '#xxxxxx' | 'color')
*/

export default class DataVizCanvas {
    constructor() {
        // animation/timing constants
        this.ANGLE_BETWEEN_MARKS = Math.PI / 20;
        this.RANGE_MIN = 0;
        this.RANGE_MAX = Math.PI;
        this.FPS = 30;
        this.INTERVAL = 1000 / this.FPS;
        this.PI = Math.PI;
        this.TWO_PI = Math.PI * 2;
        this.TOTAL_ITERATIONS = {
            IDLE: 10,
            OVERDRIVE: 1.5,
        };
        this.ANIMATION_AMPLITUDES = {
            IDLE: 80,
            OVERDRIVE: 50,
        };
        this.OVERDRIVE_THRESHOLD = 5000;
        this.ANIMATION_TYPES = {
            IDLE: 'IDLE',
            OVERDRIVE: 'OVERDRIVE',
        };

        // drawing constants
        this.GAUGE_RADIUS = 30;
        this.GAUGE_MARK_LENGTH = 50;
        this.NEEDLE_LENGTH = 60;
        this.NEEDLE_BASE_WIDTH = 2;
        this.NEEDLE_TIP_WIDTH = 1;
        this.NEEDLE_FILLSTYLE = '#6e6e6e';
        this.BACKGROUND_COLOR = '#fcfcfc';
        this.STANDARD_MARK_WIDTH = 1;
        this.CLOSE_MARK_WIDTH = 2;
        this.MATCHING_MARK_WIDTH = 3;

        this.MIN_USER_COUNT = 0;
        this.MAX_USER_COUNT = 60000;
        this.canvas = null;
        this.ctx = null;
        this.lastTime = performance.now();
        this.currentAngle = 0;
        this.nextAngle = 0;
        this.currentPerfectAngle = 0;
        this.currentValueIndex = 0;
        this.idleOffset = 0;
        this.idleDirection = 1;
        this.currentIteration = 0;
        this.startValue = 0;
        this.changeInValue = 0;
        this.totalIterations = this.TOTAL_ITERATIONS.IDLE;
        this.animationAmplitude = this.ANIMATION_AMPLITUDES.IDLE;
    }

    /**
     * Return value of a number in one arbitrary range mapped to another arbitrary range
     * credit to xposedbones - https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
     * class methods that do not use "this" should be static
     */
    static mapNumberOntoRange(num, inMin, inMax, outMin, outMax) {
        return (((num - inMin) * (outMax - outMin)) / (inMax - inMin)) + outMin;
    }

    /**
     * Easing function for prettier animation
     * credit to Kirupa - https://www.kirupa.com/html5/animating_with_easing_functions_in_javascript.htm
     */
    easeOutCubic() {
        return (this.changeInValue * ((((this.currentIteration / this.totalIterations) - 1) ** 3) + 1)) + this.startValue;
    }

    /**
     * Draw gauge marks on canvas
     */
    drawGauge() {
        for (let i = 2; i < 19; i++) {
            this.ctx.save();

            const tickAngle = i * this.ANGLE_BETWEEN_MARKS;
            const diff = (1 - ((Math.abs(this.currentAngle - tickAngle)) / this.PI));
            let colorValue = 0;

            // the last 5 ticks will fade into red
            if (i > 13) {
                const redValue = (1 - (0.15 * (18 - i))) * 255;
                const alphaValue = redValue / 255;
                colorValue = `rgba(${redValue}, 0, 0, ${alphaValue})`;
            } else {
                colorValue = '#ccc';
            }

            // most markers are of thickness 1
            this.ctx.lineWidth = this.STANDARD_MARK_WIDTH;
            // if a gauge marker is very close to current angle it should be thickest marker
            if (diff >= 0.99) {
                this.ctx.lineWidth = this.MATCHING_MARK_WIDTH;
                // other markers that are relatively close should be slightly thicker
            } else if (diff >= 0.93) {
                this.ctx.lineWidth = this.CLOSE_MARK_WIDTH;
            }

            this.ctx.translate(this.canvas.width / 2, this.canvas.height - 10);
            this.ctx.rotate(tickAngle);
            this.ctx.beginPath();
            this.ctx.moveTo(-this.GAUGE_RADIUS, 0);
            this.ctx.lineTo(-this.GAUGE_MARK_LENGTH, 0);
            this.ctx.strokeStyle = colorValue;
            this.ctx.stroke();

            this.ctx.restore();
        }
    }

    /**
     * Draw gauge needle at current angle
     */
    drawNeedle() {
        this.ctx.save();
        this.ctx.translate(this.canvas.width / 2, this.canvas.height - 10);
        this.ctx.rotate(this.currentAngle);
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.NEEDLE_BASE_WIDTH);
        this.ctx.lineTo(0, -this.NEEDLE_BASE_WIDTH);
        this.ctx.lineTo(-this.NEEDLE_LENGTH, -this.NEEDLE_TIP_WIDTH);
        this.ctx.lineTo(-this.NEEDLE_LENGTH, this.NEEDLE_TIP_WIDTH);
        this.ctx.fillStyle = this.NEEDLE_FILLSTYLE;
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(-this.NEEDLE_LENGTH, 0, this.NEEDLE_TIP_WIDTH, 0, this.TWO_PI);
        this.ctx.fill();

        this.ctx.restore();
    }

    /**
     * Clear the canvas in between frames
     */
    clear() {
        this.ctx.save();

        this.ctx.fillStyle = this.BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.restore();
    }

    /**
     * Calculate consistent tick rate
     */
    tick() {
        const now = performance.now();
        const delta = now - this.lastTime;

        if (delta > this.INTERVAL) {
            this.lastTime = now - (delta % this.INTERVAL);

            return true;
        }

        return false;
    }

    drawLabels() {
        this.ctx.font = '9px "Work Sans"';
        this.ctx.fillStyle = '#737373';
        this.ctx.fillText('0', 15, 60);
        this.ctx.fillText('60k', 90, 60);
    }

    /**
     * Call all necessary draw methods for a frame
     */
    draw() {
        this.clear();
        this.drawGauge();
        this.drawLabels();
        this.drawNeedle();
    }

    /**
     * Update method calculates the current angle and draws each frame
     */
    update() {
        if (this.tick()) {
            this.currentIteration++;
            if (this.currentIteration < this.totalIterations) {
                this.currentAngle = this.easeOutCubic();
                this.draw();
            } else {
                this.idleOffset = Math.random() / this.animationAmplitude;
                this.idleDirection *= -1;
                this.currentIteration = 0;
                this.nextAngle = this.currentPerfectAngle + (this.idleOffset * this.idleDirection);
                this.startValue = this.currentAngle;
                this.changeInValue = this.nextAngle - this.currentAngle;
            }
        }

        // for performance only request animation frame if we are not done with an animation
        if (this.currentIteration < this.totalIterations) {
            requestAnimationFrame(this.update.bind(this));
        }
    }

    /**
     * Sets variables to values needed for the current type of animation for the needle
     * @param {string} type the type of animation for the needle, 'OVERDRIVE' | 'IDLE'
     */
    setNeedleAnimation(type) {
        this.animationAmplitude = this.ANIMATION_AMPLITUDES[type];
        this.totalIterations = this.TOTAL_ITERATIONS[type];
    }

    /**
     * Change target number for gauge to animate to
     */
    changeNumber(num) {
        const displayNumber = (num > this.MAX_USER_COUNT) ? this.MAX_USER_COUNT : num;

        if (displayNumber >= this.MAX_USER_COUNT - this.OVERDRIVE_THRESHOLD) {
            this.setNeedleAnimation(this.ANIMATION_TYPES.OVERDRIVE);
        } else {
            this.setNeedleAnimation(this.ANIMATION_TYPES.IDLE);
        }
        this.currentPerfectAngle = DataVizCanvas.mapNumberOntoRange(
            displayNumber,
            this.MIN_USER_COUNT,
            this.MAX_USER_COUNT,
            this.RANGE_MIN,
            this.RANGE_MAX,
        );
        this.idleOffset = Math.random() / this.animationAmplitude;
        this.idleDirection = 1;
        this.nextAngle = this.currentPerfectAngle + (this.idleOffset * this.idleDirection);
        this.currentIteration = 0;
        this.startValue = this.currentAngle;
        this.changeInValue = this.nextAngle - this.currentAngle;
        requestAnimationFrame(this.update.bind(this));
    }

    /**
     * Initialize canvas
     */
    init() {
        this.canvas = document.querySelector('.data-viz__canvas-gauge');
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
            this.draw();
            this.changeNumber(this.MIN_USER_COUNT);
        }
    }
}



// WEBPACK FOOTER //
// ./src/assets/js/homepage/DataVizCanvas.js