var PhoneInteractive = function(holder, image, boxWidth, boxHeight, parentWidth, parentHeight, retina) {
    this.holder = holder;
    this.canvas = new CroppedImage(image, boxWidth, boxHeight, retina);
    this.canvas.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.mousePos = {
        x: parentWidth / 2,
        y: parentHeight / 2
    };
    this.gradientRotation = 0;
    this.rotation = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.moveAmount = bb.settings.phone.moveAmount;
    this.friction = bb.settings.phone.friction;
    this.parentWidth = parentWidth;
    this.parentHeight = parentHeight;
    this.shineOpacity = 0;
    this.maxShineOpacity = bb.settings.phone.maxShineOpacity;
    this.holder.appendChild(this.canvas);
    TweenMax.set(this.holder, {
        perspective: bb.settings.phone.perspective
    });

    var canvasCopy = document.createElement('canvas');
    canvasCopy.width = this.width;
    canvasCopy.height = this.height;
    canvasCopy.ctx = canvasCopy.getContext("2d");
    canvasCopy.ctx.drawImage(this.canvas, 2, 6, (this.width * .98), (this.height * .98));

    var canvasTemp = document.createElement('canvas');
    canvasTemp.width = this.width;
    canvasTemp.height = this.height;
    canvasTemp.ctx = canvasTemp.getContext("2d");

    var canvasShine = document.createElement('canvas');
    canvasShine.id = 'canvasShine';
    canvasShine.width = this.width * 2;
    canvasShine.height = this.height;
    canvasShine.ctx = canvasShine.getContext("2d");
    canvasShine.style.position = 'absolute';
    var grd = canvasShine.ctx.createLinearGradient(0, canvasShine.height * .48, canvasShine.width, canvasShine.height * .52);
    grd.addColorStop(0, "rgba(255, 255, 255,0)");
    grd.addColorStop(.5, "rgba(255, 255, 255,1)");
    grd.addColorStop(1, "rgba(255, 255, 255,0)");
    canvasShine.ctx.fillStyle = grd;
    canvasShine.ctx.fillRect(0, 0, canvasShine.width, canvasShine.height);
    canvasShine.startX = -canvasShine.width;
    canvasShine.xPos = canvasShine.startX;

    this.activate = function() {
        TweenMax.ticker.addEventListener('tick', this.update, this);
    };

    this.deactivate = function() {
        TweenMax.ticker.removeEventListener('tick', this.update, this);
    };

    this.updateMousePosition = function(x, y) {
        this.mousePos = {
            x: x,
            y: y
        };
    };

    this.update = function() {
        this.updateShine();
        this.updateHorizontalShine();
    };

    this.enableInteractiveShine = function(spd, ease) {
        TweenMax.to(this, spd || 1, {
            shineOpacity: this.maxShineOpacity,
            ease: ease || Power1.easeOut
        });
    };


    this.disableInteractiveShine = function(spd, ease) {
        TweenMax.to(this, spd || 1, {
            shineOpacity: 0,
            ease: ease || Power1.easeInOut
        });
    };

    this.showHorizontalShine = function(spd, ease) {
        TweenMax.killTweensOf(canvasShine);
        TweenMax.set(canvasShine, {
            xPos: canvasShine.startX
        });
        TweenMax.to(canvasShine, spd || 2, {
            xPos: this.width * 1.5,
            ease: ease || Power4.easeInOut
        });
    };

    this.updateHorizontalShine = function() {
        this.canvas.ctx.save();
        canvasTemp.ctx.save();
        canvasTemp.ctx.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
        canvasTemp.ctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height);
        canvasTemp.ctx.globalCompositeOperation = "source-in";
        canvasTemp.ctx.drawImage(canvasShine, canvasShine.xPos, 0, canvasShine.width, canvasShine.height);
        this.canvas.ctx.globalCompositeOperation = "overlay";
        this.canvas.ctx.drawImage(canvasTemp, 0, 0, canvasTemp.width, canvasTemp.height);
        this.canvas.ctx.restore();
        canvasTemp.ctx.restore();
    };

    this.updateShine = function() {
        this.canvas.ctx.save();
        canvasTemp.ctx.save();
        this.canvas.ctx.clearRect(0, 0, this.width, this.height);
        canvasTemp.ctx.clearRect(0, 0, this.width, this.height);
        var x1, x2, y1, y2;

        this.angle = bb.utils.angle(this.mousePos.x, this.mousePos.y, this.parentWidth / 2, this.parentHeight / 2);
        this.gradientRotation = bb.utils.toDegrees(this.angle);

        if (this.gradientRotation < 0) {
            this.gradientRotation = this.gradientRotation + 360;
        }

        this.rotation += (this.gradientRotation - this.rotation) * this.friction;

        if ((0 <= this.rotation && this.rotation < 45)) {
            x1 = 0;
            y1 = this.height / 2 * (45 - this.rotation) / 45;
            x2 = this.width;
            y2 = this.height - y1;
        } else if ((45 <= this.rotation && this.rotation < 135)) {
            x1 = this.width * (this.rotation - 45) / (135 - 45);
            y1 = 0;
            x2 = this.width - x1;
            y2 = this.height;
        } else if ((135 <= this.rotation && this.rotation < 225)) {
            x1 = this.width;
            y1 = this.height * (this.rotation - 135) / (225 - 135);
            x2 = 0;
            y2 = this.height - y1;
        } else if ((225 <= this.rotation && this.rotation < 315)) {
            x1 = this.width * (1 - (this.rotation - 225) / (315 - 225));
            y1 = this.height;
            x2 = this.width - x1;
            y2 = 0;
        } else if (315 <= this.rotation) {
            x1 = 0;
            y1 = this.height - this.height / 2 * (this.rotation - 315) / (360 - 315);
            x2 = this.width;
            y2 = this.height - y1;
        }

        canvasTemp.ctx.drawImage(canvasCopy, 0, 0, this.width, this.height);
        var grd = canvasTemp.ctx.createLinearGradient(x1, y1, x2, y2);
        grd.addColorStop(0, "rgba(255, 255, 255,0)");
        grd.addColorStop(1, "rgba(255, 255, 255,1)");
        canvasTemp.ctx.drawImage(canvasCopy, 0, 0, this.width, this.height);
        canvasTemp.ctx.fillStyle = grd;
        canvasTemp.ctx.globalCompositeOperation = "source-in";
        canvasTemp.ctx.fillRect(0, 0, this.width, this.height);
        this.canvas.ctx.drawImage(canvasCopy, 0, 0, this.width, this.height);
        this.canvas.ctx.globalCompositeOperation = "lighten";
        this.canvas.ctx.globalAlpha = .1 * this.shineOpacity;
        this.canvas.ctx.drawImage(canvasTemp, 0, 0, this.width, this.height);
        this.canvas.ctx.globalCompositeOperation = "overlay";
        this.canvas.ctx.globalAlpha = 1 * this.shineOpacity;
        this.canvas.ctx.drawImage(canvasTemp, 0, 0, this.width, this.height);

        canvasTemp.ctx.restore();
        this.canvas.ctx.restore();

        var destY = bb.utils.map(this.mousePos.x, 0, this.parentWidth, -this.moveAmount, this.moveAmount);
        var destX = bb.utils.map(this.mousePos.y, 0, this.parentHeight, this.moveAmount, -this.moveAmount);

        this.currentX += (destX - this.currentX) * this.friction;
        this.currentY += (destY - this.currentY) * this.friction;

        TweenMax.set(this.canvas, {
            x: this.currentY / 2,
            y: this.currentX / 2,
            rotationX: this.currentX,
            rotationY: this.currentY
        });
    };

    return this;
};