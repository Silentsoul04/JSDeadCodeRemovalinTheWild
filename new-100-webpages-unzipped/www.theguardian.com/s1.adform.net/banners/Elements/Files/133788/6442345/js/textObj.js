function TextObj(obj) {
    this.fontSize = function(value) {
        if (value != undefined && value != null) this._fontSize = value;
        this.lineHeight(this._fontSize);
        this._holder.style.fontSize = this._fontSize + 'px';
        return this._fontSize;
    };

    this.lineHeight = function(value) {
        if (value != undefined && value != null) {
            this._lineHeight = Math.floor(value);
            this._holder.style.lineHeight = this._lineHeight + 'px';
        }
        return this._lineHeight;
    };

    this.lines = function() {
        return this._lines;
    };

    this.lineObjects = function(value) {
        if (value != undefined && value != null) this._lineObjects = value;
        return this._lineObjects;
    };

    this.fontColor = function(value) {
        if (value != undefined && value != null) this._fontColor = value;
        return this._fontColor;
    };

    this.fontFamily = function(value) {
        if (value != undefined && value != null) {
            this._fontFamily = value;
            this._holder.style.fontFamily = this._fontFamily;
        }
        return this._fontFamily;
    };

    this.backgroundColor = function(value) {
        if (value != undefined && value != null) this._backgroundColor = value;
        return this._backgroundColor;
    };

    this.sizeBox = function(value) {
        if (value != undefined && value != null) this._sizeBox = value;
        return this._sizeBox;
    };

    this.holder = function() {
        return this._holder;
    };

    this.init = function() {
        if (this.splitLines) {
            this.doSplit();

            for (var j = 0; j < this.lines().length; j++) {
                var temp = [];
                var topSpacing = ((this._lineHeightMultiplier * this.lineHeight()) - this.lineHeight()) / 2

                var top = j * (this.lineHeight() + topSpacing);
                var txtId = this.id + j + '_txt';
                var bgId = this.id + j + '_bg';

                var lineCorrectionAmount = .12

                if (this.browser.isExplorer) {
                    lineCorrectionAmount = 0;
                } else if (this.browser.os == 'windows') {
                    lineCorrectionAmount = 0.06;
                }
                var lineCorrection = lineCorrectionAmount * this.lineHeight();

                var background
                if (this.background) {
                    background = bb.createElement({
                        display: 'block',
                        alpha: 1,
                        type: 'div',
                        id: bgId,
                        top: top,
                        parent: this.parent,
                        transformOrigin: '0% 0%'
                    });
                }

                var txt = bb.createElement({
                    display: 'block',
                    alpha: 1,
                    type: 'p',
                    id: txtId,
                    top: top,
                    parent: this.parent,
                    transformOrigin: '0% 0%'
                });
                txt.innerHTML = '<span style="top:-' + lineCorrection + 'px;position:relative;margin:0;padding:0;display:block">' + this.lines()[j] + '</span>';

                txt.style.fontFamily = this.fontFamily();
                txt.style.lineHeight = this.lineHeight() + 'px';
                txt.style.fontSize = this.fontSize() + 'px';
                txt.style.color = this.fontColor();
                txt.style.backgroundColor = 'transparent';
                //txt.style.backgroundColor = '#000000';
                if (this.background) {
                    background.style.backgroundColor = this.backgroundColor();
                    temp.push(background);
                    this.setBgDimensions(this, txt, background);
                    TweenMax.set(this.parent, {
                        width: this.sizeBox().width * 1.1
                    }); //give some extra margin because of white bg make it a bit bigger
                } else {
                    temp.push({});
                }
                TweenMax.set(this.parent, {
                    width: this.sizeBox().width * 1.0
                });
                temp.push(txt);
                this.lineObjects().push(temp);
                this.createClipping(txt);
            }

        } else {
            var paddingBottom = this.padding.bottom;
            if (this.browser.os == 'windows' && this.browser.isChrome) {

                paddingBottom += 1;
            }

            this.holder().style.padding = this.padding.top + "px " + this.padding.right + "px " + paddingBottom + "px " + this.padding.left + "px";
        }
    };

    this.setBgDimensions = function(ref, txt, background) {
        /*
        var span = document.querySelector('#'+txt.id+' span');
        TweenMax.set(background, {left:-ref.padding.left, width:span.offsetWidth+(ref.padding.left+ref.padding.right), height:ref.lineHeight()*.9});
        */
        TweenMax.delayedCall(.1, function() {
            var span = document.querySelector('#' + txt.id + ' span');
            TweenMax.set(background, {
                left: -ref.padding.left,
                width: span.offsetWidth + (ref.padding.left + ref.padding.right),
                height: ref.lineHeight() * .9
            });
        });

    };


    this.createClipping = function(line) {
        line.style.clip = bb.utils.createRect(0, line.offsetWidth, line.offsetHeight, 0);
        /*	TweenMax.delayedCall(.15, function()
        	{
        		line.style.clip = bb.utils.createRect(0, line.offsetWidth, line.offsetHeight, 0);
        	});
        	*/
    };

    this.resize = function() {
        for (var i = this._minFontSize; i < this._maxFontSize; i++) {
            this.fontSize(i);
            var height = this._holder.getBoundingClientRect().bottom - this._holder.getBoundingClientRect().top;
            var span = document.querySelector('#' + this.id + ' span');
            var width = span.getBoundingClientRect().right - span.getBoundingClientRect().left;

            if (height > this._sizeBox.height || width > this._sizeBox.width) {
                this.fontSize(i - 1);
                break;
            }
        }
    };

    this.resizeMultiline = function() {
        var originalHeight = this._holder.offsetHeight;
        var originalWidth = this._holder.offsetWidth - (this.padding.left + this.padding.right);
        var tempWidth = originalWidth;
        var tempHeight = originalHeight;
        var lines = 1;

        if (this._holder.offsetWidth > this.sizeBox().width) {
            this._holder.style.width = tempWidth + 'px';
            for (var i = 0; i < 200; i++) {
                tempWidth -= 1;
                this._holder.style.width = tempWidth + 'px';
                if (this._holder.offsetHeight > tempHeight) {
                    tempHeight = this._holder.offsetHeight;
                    lines++;
                }
                if (lines == 3) {
                    this._holder.style.width = (tempWidth + 1) + 'px';
                    break;
                }
            }
        }
    };

    this.doSplit = function() {
        var current = this._holder;
        var text = current.innerHTML;
        text = current.innerHTML.substring(6, text.length - 7);
        var words = text.split(' ');
        current.innerHTML = words[0];
        var height = current.offsetHeight;
        var lines = [];
        var position = 0;
        var previousPosition = 0;

        for (var i = 1; i < words.length; i++) {
            current.innerHTML = current.innerHTML + ' ' + words[i];
            if (current.offsetHeight > height) {
                height = current.offsetHeight;
                position = this.getPositionWord(words, i);
                lines.push(text.substring(previousPosition, position));
                previousPosition = position + 1;
            }
        }
        if (lines.length > 0) position += 1;
        lines.push(text.substring(position, text.length));
        this._lines = lines;
    };

    this.getPositionWord = function(words, wordNo) {
        var wordsString = words.join(' ');
        var position = 0;
        for (var i = 0; i < wordNo; i++) {
            var wordLength = words[i].length;
            position += wordLength;
            if (i < wordNo - 1) position += 1;
        }
        return position;
    };

    this.browser = new browserCheck();
    this._holder = obj.holder;
    this._text = obj.text;
    this._lineHeightMultiplier = obj.lineHeightMultiplier || 1.0;
    this._fontSize = this.fontSize(obj.fontSize);
    this.id = this._holder.id;

    this._lineHeight = (obj.lineHeight == undefined || obj.lineHeight == null) ? this._lineHeight : obj.lineHeight;
    this._backgroundColor = (obj.backgroundColor == undefined || obj.backgroundColor == null) ? '#fff' : obj.backgroundColor;
    this._fontColor = (obj.fontColor == undefined || obj.fontColor == null) ? '#E20074' : obj.fontColor;
    this._fontFamily = (obj.fontFamily == undefined || obj.fontFamily == null) ? 'TeleGrotesk Headline Ultra' : obj.fontFamily;

    this.lineHeight(this._lineHeight);
    this.fontFamily(this._fontFamily);

    this._maxFontSize = obj.maxFontSize || this._fontSize;
    this._minFontSize = obj.minFontSize || this._fontSize;

    this._sizeBox = obj.sizeBox || {};
    this._lines = [];
    this._lineObjects = [];

    this.parent = this._holder.parentNode;
    this.debug = (obj.debug == undefined || obj.debug == null) ? false : obj.debug;
    this.background = (obj.background == undefined || obj.background == null) ? true : obj.background;
    this.splitLines = (obj.splitLines == undefined || obj.splitLines == null) ? false : obj.splitLines;
    this.padding = (obj.padding == undefined || obj.padding == null) ? {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    } : obj.padding;
    this._holder.innerHTML = "<span>" + this._text + "</span>";
    if (this._sizeBox.width && this.splitLines) this._holder.style.width = this._sizeBox.width + 'px';
    if (this.debug) var sizeBoxGuide = bb.createElement({
        width: this._sizeBox.width,
        height: this._sizeBox.height,
        backgroundColor: '#29f800',
        alpha: .2,
        parent: this.parent
    });
    this._holder.style.padding = this.padding.top + "px " + this.padding.right + "px " + this.padding.bottom + "px " + this.padding.left + "px";
    //this._holder.style.height = this._sizeBox.height+'px';			
}